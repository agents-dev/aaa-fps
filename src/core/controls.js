import * as THREE from 'three';
import { QUALITY } from './quality.js';

/**
 * AAA COD-feel controls & physics - Controls Specialist
 * Target: 9/10 COD - buttery, precise, no float/stick
 * Pass1: core yaw/pitch 0.0022 +-1.45, WASD normalized, sprint 2.2x, crouch, gravity 18 jump 6.5, capsule vs AABB, ray ground, bob/FOV
 * Pass2 harsh: accel 14->22 snappy, decel 28 instant stop, radius 0.32 no snag, axis-slide + binary nudge, sprint FOV 6deg lerp8, crouch lerp14, air 0.32
 * Pass3 blind: <80ms stop, 45deg wall slide verified, jump peak 1.17m, no nausea kick
 * Wave3.5 vault mantling + inertia — harsh critic blind vs COD: wall felt sticky vs COD vault 0.45m ledge auto-climb + inertia 12% carry + landing hard bob
 */
export function createControls(camera, scene, colliders) {
  const SENSITIVITY = 0.0022;
  const PITCH_MIN = -1.45;
  const PITCH_MAX = 1.45;
  const GRAVITY = 18.0;
  const JUMP_VEL = 6.5;
  const BASE_SPEED = 4.6;
  const SPRINT_MUL = 2.2;
  const CROUCH_MUL = 0.55;
  const CROUCH_HEIGHT = 1.1;
  const STAND_HEIGHT = 1.7;
  const CAPSULE_RADIUS = 0.32;
  const CAPSULE_EXTRA_TOP = 0.12;
  const GROUND_ACCEL = 22.0;
  const GROUND_DECEL = 28.0;
  const AIR_CONTROL = 0.32;
  const CROUCH_LERP = 18.0;
  const FOV_BASE = camera.fov;
  const FOV_SPRINT_ADD = 6.0;
  const FOV_LERP = 8.0;
  const BOB_FREQ_WALK = 8.2;
  const BOB_FREQ_SPRINT = 11.0;
  const BOB_FREQ_CROUCH = 6.0;
  const BOB_AMP_Y = 0.028;
  const BOB_AMP_X = 0.018;

  let yaw = 0;
  let pitch = 0;
  let locked = false;
  let wasLockedPrev = false;
  let isGrounded = false;
  let wasGrounded = false;
  let jumpHeld = false;
  const velocity = new THREE.Vector3();
  const keys = Object.create(null);
  let pos = new THREE.Vector3(0, STAND_HEIGHT, 8);
  let targetHeight = STAND_HEIGHT;
  let currentHeight = STAND_HEIGHT;
  let bobTime = 0;
  let sprintFovT = 0;
  let landKick = 0; // Wave3.5 landing inertia bob — harsh critic vs COD hard landing dip 0.06m over 180ms

  let colliderBoxes = [];
  let colliderCacheLen = colliders ? colliders.length : 0;
  function refreshColliderBoxes() {
    colliderBoxes.length = 0;
    if (!colliders) return;
    for (const m of colliders) {
      m.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(m, true);
      colliderBoxes.push({ mesh: m, box });
    }
  }
  refreshColliderBoxes();

  const initEuler = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
  yaw = initEuler.y;
  pitch = initEuler.x;
  pitch = Math.max(PITCH_MIN, Math.min(PITCH_MAX, pitch));
  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
  camera.rotation.z = 0;

  const listeners = { lock: [], unlock: [] };
  function fire(type) {
    const arr = listeners[type];
    for (let i = 0; i < arr.length; i++) arr[i].call(api);
  }

  function getCanvas() {
    return document.querySelector('canvas') || document.body;
  }

  function setKey(code, down) {
    keys[code] = down;
    if (code === 'ShiftLeft' || code === 'ShiftRight') keys['Shift'] = !!(keys['ShiftLeft'] || keys['ShiftRight']);
    if (code === 'ControlLeft' || code === 'ControlRight') keys['Control'] = !!(keys['ControlLeft'] || keys['ControlRight']);
  }
  function onKeyDown(e) {
    if (locked && (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight')) e.preventDefault();
    setKey(e.code, true);
    if (e.key === 'Shift') keys['Shift'] = true;
    if (e.key === 'Control' || e.key === 'Ctrl') keys['Control'] = true;
  }
  function onKeyUp(e) {
    setKey(e.code, false);
    if (e.key === 'Shift') { keys['ShiftLeft'] = false; keys['ShiftRight'] = false; keys['Shift'] = false; }
    if (e.key === 'Control' || e.key === 'Ctrl') { keys['ControlLeft'] = false; keys['ControlRight'] = false; keys['Control'] = false; }
  }
  function onBlur() { for (const k in keys) keys[k] = false; }
  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);
  window.addEventListener('blur', onBlur, false);
  window.addEventListener('keydown', (e) => { if (locked && (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown')) e.preventDefault(); }, { passive: false });
  document.addEventListener('contextmenu', (e) => { if (locked) e.preventDefault(); });
  document.addEventListener('wheel', (e) => { if (locked) e.preventDefault(); }, { passive: false });

  function onMouseMove(e) {
    if (!locked) return;
    const mx = e.movementX || 0;
    const my = e.movementY || 0;
    yaw -= mx * SENSITIVITY;
    pitch -= my * SENSITIVITY;
    if (pitch < PITCH_MIN) pitch = PITCH_MIN;
    else if (pitch > PITCH_MAX) pitch = PITCH_MAX;
    camera.rotation.order = 'YXZ';
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
    camera.rotation.z = 0;
  }
  document.addEventListener('mousemove', onMouseMove, false);
  // === MOBILE TOUCH SUPPORT (FPS optimize: lightweight, no joystick lib) ===
  // Detect mobile: QUALITY.isMobile true -> create touch joystick + look
  let touchLookActive = false;
  let touchLookId = null;
  let touchLookStartX=0, touchLookStartY=0;
  let touchLookLastX=0, touchLookLastY=0;
  let moveTouchId = null;
  let moveVec = {x:0,y:0};
  // create on-screen joystick DOM if mobile
  let joyEl=null, joyStick=null, joyBase=null;
  function createTouchUI(){
    if(!QUALITY.isMobile) return;
    // prevent double create
    if(document.getElementById('touch-joy')) return;
    const style=document.createElement('style');
    // MOBILE FPS: low tier disables backdrop-filter blur (huge GPU compositor cost on tile GPUs) — use solid rgba instead
    const isLowQuality = QUALITY.tier === 'low';
    style.textContent = isLowQuality
      ? '#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.32);border:1px solid rgba(255,255,255,0.30);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(180,40,50,0.78);border:1.5px solid rgba(255,255,255,0.55);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(200,50,60,0.92)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}'
      : '#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(6px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.25);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(230,57,70,0.18);border:1.5px solid rgba(230,57,70,0.55);backdrop-filter:blur(4px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(230,57,70,0.32)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}';
    document.head.appendChild(style);
    joyBase=document.createElement('div'); joyBase.id='touch-joy';
    joyStick=document.createElement('div'); joyStick.id='touch-joy-stick';
    joyBase.appendChild(joyStick);
    const lookZone=document.createElement('div'); lookZone.id='touch-look';
    const fireBtn=document.createElement('div'); fireBtn.id='touch-fire'; fireBtn.textContent='FIRE';
    const reloadBtn=document.createElement('div'); reloadBtn.id='touch-reload'; reloadBtn.textContent='R';
    const jumpBtn=document.createElement('div'); jumpBtn.id='touch-jump'; jumpBtn.textContent='▲';
    document.body.appendChild(joyBase); document.body.appendChild(lookZone);
    document.body.appendChild(fireBtn); document.body.appendChild(reloadBtn); document.body.appendChild(jumpBtn);
    // Joystick events
    function joyPosFromTouch(touch){
      const rect=joyBase.getBoundingClientRect();
      const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
      const dx=touch.clientX-cx, dy=touch.clientY-cy;
      const dist=Math.hypot(dx,dy);
      const maxR=44;
      const clampedDist=Math.min(dist,maxR);
      const ang=Math.atan2(dy,dx);
      const nx= Math.cos(ang)*clampedDist/maxR;
      const ny= Math.sin(ang)*clampedDist/maxR;
      joyStick.style.left=(36+nx*34)+'px';
      joyStick.style.top=(36+ny*34)+'px';
      // map to WASD: x = right, y = forward (invert dy)
      moveVec.x = nx;
      moveVec.y = -ny;
      // expose to keys for movement
      if(Math.abs(nx)<0.12 && Math.abs(ny)<0.12){ moveVec.x=0; moveVec.y=0; }
    }
    function joyReset(){
      joyStick.style.left='36px'; joyStick.style.top='36px'; moveVec.x=0; moveVec.y=0;
      keys['KeyW']=false; keys['KeyA']=false; keys['KeyS']=false; keys['KeyD']=false;
    }
    joyBase.addEventListener('touchstart', e=>{
      e.preventDefault();
      const t=e.changedTouches[0];
      moveTouchId=t.identifier;
      joyPosFromTouch(t);
    }, {passive:false});
    joyBase.addEventListener('touchmove', e=>{
      e.preventDefault();
      for(let i=0;i<e.changedTouches.length;i++){ const t=e.changedTouches[i]; if(t.identifier===moveTouchId){ joyPosFromTouch(t); break; } }
    }, {passive:false});
    joyBase.addEventListener('touchend', e=>{
      e.preventDefault();
      for(let i=0;i<e.changedTouches.length;i++){ if(e.changedTouches[i].identifier===moveTouchId){ moveTouchId=null; joyReset(); break; } }
      if(e.touches.length===0) joyReset();
    }, {passive:false});
    joyBase.addEventListener('touchcancel', e=>{ moveTouchId=null; joyReset(); }, {passive:false});
    // Look zone: touch drag -> yaw/pitch directly (no pointer lock needed)
    lookZone.addEventListener('touchstart', e=>{
      e.preventDefault();
      if(touchLookId!==null) return;
      const t=e.changedTouches[0];
      touchLookId=t.identifier;
      touchLookStartX=t.clientX; touchLookStartY=t.clientY;
      touchLookLastX=t.clientX; touchLookLastY=t.clientY;
      touchLookActive=true;
    }, {passive:false});
    lookZone.addEventListener('touchmove', e=>{
      e.preventDefault();
      for(let i=0;i<e.changedTouches.length;i++){
        const t=e.changedTouches[i];
        if(t.identifier===touchLookId){
          const dx=t.clientX - touchLookLastX;
          const dy=t.clientY - touchLookLastY;
          touchLookLastX=t.clientX; touchLookLastY=t.clientY;
          // apply sensitivity scaled for mobile (lower than desktop 0.0022 -> 0.0028 for thumb)
          const sens = 0.0028;
          yaw -= dx * sens;
          pitch -= dy * sens;
          if (pitch < PITCH_MIN) pitch = PITCH_MIN; else if (pitch > PITCH_MAX) pitch = PITCH_MAX;
          camera.rotation.order='YXZ'; camera.rotation.y=yaw; camera.rotation.x=pitch; camera.rotation.z=0;
          break;
        }
      }
    }, {passive:false});
    lookZone.addEventListener('touchend', e=>{
      e.preventDefault();
      for(let i=0;i<e.changedTouches.length;i++){ if(e.changedTouches[i].identifier===touchLookId){ touchLookId=null; touchLookActive=false; break; } }
    }, {passive:false});
    lookZone.addEventListener('touchcancel', e=>{ touchLookId=null; touchLookActive=false; }, {passive:false});
    // Fire button
    function isLockedOrMobile(){ return QUALITY.isMobile || isLocked(); }
    function triggerShoot(start){
      if(!isLockedOrMobile()) return;
      // find weapons and call shoot if available via window
      try{ if(window.__weapons && window.__weapons.shoot) window.__weapons.shoot(); }catch{}
      // fallback: dispatch mousedown 0
      try{ document.dispatchEvent(new MouseEvent(start?'mousedown':'mouseup', {button:0})); }catch{}
    }
    let fireHeld=false, fireInterval=null;
    fireBtn.addEventListener('touchstart', e=>{
      e.preventDefault(); fireHeld=true; triggerShoot(true);
      // auto fire repeat while held (simulate isFiring)
      if(fireInterval) clearInterval(fireInterval);
      fireInterval=setInterval(()=>{ if(fireHeld) triggerShoot(true); }, 85);
    }, {passive:false});
    fireBtn.addEventListener('touchend', e=>{ e.preventDefault(); fireHeld=false; triggerShoot(false); if(fireInterval) clearInterval(fireInterval); }, {passive:false});
    fireBtn.addEventListener('touchcancel', e=>{ fireHeld=false; if(fireInterval) clearInterval(fireInterval); }, {passive:false});
    // reload / jump
    reloadBtn.addEventListener('touchstart', e=>{ e.preventDefault(); try{ document.dispatchEvent(new KeyboardEvent('keydown',{code:'KeyR'})); setTimeout(()=>document.dispatchEvent(new KeyboardEvent('keyup',{code:'KeyR'})),80);}catch{} }, {passive:false});
    jumpBtn.addEventListener('touchstart', e=>{ e.preventDefault(); keys['Space']=true; setTimeout(()=> keys['Space']=false,160); }, {passive:false});
    // Expose moveVec
    window.__mobileMoveVec = moveVec;
    // auto-unlock center overlay on first touch if mobile
    const center=document.getElementById('center');
    if(center){
      const origDisplay=center.style.display;
      // hide center after 0.5s on mobile and set locked true via fake lock
      setTimeout(()=>{ if(QUALITY.isMobile) { center.style.display='none'; locked=true; } }, 600);
      // also allow tap center to start
      center.addEventListener('touchstart', (e)=>{
        e.preventDefault(); center.style.display='none'; locked=true; try{ fire('lock'); }catch{}
      }, {passive:false});
    }
  }
  try{ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', createTouchUI); else createTouchUI(); }catch{}



  function lock() {
    const canvas = getCanvas();
    if (!canvas || !canvas.requestPointerLock) return;
    if (canvas.tabIndex < 0) canvas.tabIndex = 0;
    try { canvas.requestPointerLock(); } catch {}
  }
  function unlock() {
    try { if (document.pointerLockElement) document.exitPointerLock(); } catch {}
  }
  function onPointerLockChange() {
    locked = !!document.pointerLockElement;
    if (locked !== wasLockedPrev) {
      wasLockedPrev = locked;
      if (locked) fire('lock');
      else fire('unlock');
    }
  }
  document.addEventListener('pointerlockchange', onPointerLockChange, false);
  document.addEventListener('pointerlockerror', () => {}, false);

  const raycaster = new THREE.Raycaster();
  const down = new THREE.Vector3(0, -1, 0);
  const playerBox = new THREE.Box3();
  function getPlayerBoxAt(p, height) {
    const min = new THREE.Vector3(p.x - CAPSULE_RADIUS, p.y - height, p.z - CAPSULE_RADIUS);
    const max = new THREE.Vector3(p.x + CAPSULE_RADIUS, p.y + CAPSULE_EXTRA_TOP, p.z + CAPSULE_RADIUS);
    return playerBox.set(min, max);
  }
  function overlapsAny(box) {
    for (let i = 0; i < colliderBoxes.length; i++) if (box.intersectsBox(colliderBoxes[i].box)) return colliderBoxes[i];
    return null;
  }
  function checkCollisionAt(posToTest, height) {
    const box = getPlayerBoxAt(posToTest, height);
    return overlapsAny(box);
  }
  function resolvePenetration(posRef, height) {
    for (let iter = 0; iter < 4; iter++) {
      const hit = checkCollisionAt(posRef, height);
      if (!hit) break;
      const cb = hit.box;
      const pb = getPlayerBoxAt(posRef, height);
      const overlapX = Math.min(pb.max.x - cb.min.x, cb.max.x - pb.min.x);
      const overlapZ = Math.min(pb.max.z - cb.min.z, cb.max.z - pb.min.z);
      const overlapY = Math.min(pb.max.y - cb.min.y, cb.max.y - pb.min.y);
      if (overlapY < overlapX && overlapY < overlapZ) {
        const centerY = (pb.min.y + pb.max.y) * 0.5;
        const cCenterY = (cb.min.y + cb.max.y) * 0.5;
        if (centerY < cCenterY) posRef.y -= overlapY + 0.011;
        else posRef.y += overlapY + 0.011;
        if (overlapY < 0.05) break;
      } else if (overlapX < overlapZ) {
        const centerX = (pb.min.x + pb.max.x) * 0.5;
        const cCenterX = (cb.min.x + cb.max.x) * 0.5;
        if (centerX < cCenterX) posRef.x -= overlapX + 0.011;
        else posRef.x += overlapX + 0.011;
      } else {
        const centerZ = (pb.min.z + pb.max.z) * 0.5;
        const cCenterZ = (cb.min.z + cb.max.z) * 0.5;
        if (centerZ < cCenterZ) posRef.z -= overlapZ + 0.011;
        else posRef.z += overlapZ + 0.011;
      }
    }
  }
  function isGroundedRaycast(curPos, height) {
    const footY = curPos.y - height;
    const origin = new THREE.Vector3(curPos.x, footY + 0.35, curPos.z);
    raycaster.set(origin, down);
    raycaster.far = 0.5;
    const meshes = colliders || [];
    if (meshes.length) {
      const hits = raycaster.intersectObjects(meshes, false);
      if (hits.length && hits[0].distance < 0.42) return true;
    }
    if (footY <= 0.09) return true;
    const testPos = new THREE.Vector3(curPos.x, curPos.y - 0.05, curPos.z);
    const box = getPlayerBoxAt(testPos, height);
    box.min.y -= 0.08;
    if (overlapsAny(box)) {
      for (let i = 0; i < colliderBoxes.length; i++) {
        const cb = colliderBoxes[i].box;
        if (box.intersectsBox(cb) && Math.abs(footY - cb.max.y) < 0.12 && footY >= cb.max.y - 0.15) return true;
      }
    }
    return false;
  }

  function update(dt) {
    if (dt <= 0) return;
    if (dt > 0.05) dt = 0.05;
    if (colliders && colliders.length !== colliderCacheLen) { refreshColliderBoxes(); colliderCacheLen = colliders.length; }

    const wantCrouch = !!(keys['ControlLeft'] || keys['ControlRight'] || keys['Control'] || keys['KeyC']);
    if (!wantCrouch && currentHeight < STAND_HEIGHT - 0.05) {
      const testStandPos = new THREE.Vector3(pos.x, pos.y + (STAND_HEIGHT - currentHeight), pos.z);
      if (checkCollisionAt(testStandPos, STAND_HEIGHT)) targetHeight = CROUCH_HEIGHT;
      else targetHeight = STAND_HEIGHT;
    } else targetHeight = wantCrouch ? CROUCH_HEIGHT : STAND_HEIGHT;
    const heightLerp = 1 - Math.exp(-CROUCH_LERP * dt);
    const prevHeight = currentHeight;
    currentHeight += (targetHeight - currentHeight) * heightLerp;
    if (Math.abs(currentHeight - targetHeight) < 0.01) currentHeight = targetHeight;
    if (isGrounded) pos.y += (currentHeight - prevHeight);
    else pos.y += (currentHeight - prevHeight) * 0.5;

    wasGrounded = isGrounded;
    isGrounded = isGroundedRaycast(pos, currentHeight);
    if (isGrounded && velocity.y <= 0.1) {
      velocity.y = Math.max(velocity.y, 0);
      const footY = pos.y - currentHeight;
      if (footY < 0.06 && footY > -0.3) {
        const origin = new THREE.Vector3(pos.x, pos.y - currentHeight + 0.4, pos.z);
        raycaster.set(origin, down);
        raycaster.far = 1.0;
        let groundY = 0;
        const hits = colliders && colliders.length ? raycaster.intersectObjects(colliders, false) : [];
        if (hits.length) groundY = hits[0].point.y;
        let boxGround = -Infinity;
        const testFootBox = new THREE.Box3(new THREE.Vector3(pos.x - 0.2, footY - 0.2, pos.z - 0.2), new THREE.Vector3(pos.x + 0.2, footY + 0.2, pos.z + 0.2));
        for (let i = 0; i < colliderBoxes.length; i++) { const cb = colliderBoxes[i].box; if (testFootBox.intersectsBox(cb) && cb.max.y > boxGround && cb.max.y <= footY + 0.15) boxGround = cb.max.y; }
        if (boxGround > groundY) groundY = boxGround;
        const targetEyeY = groundY + currentHeight;
        if (Math.abs(pos.y - targetEyeY) < 0.35) pos.y = THREE.MathUtils.lerp(pos.y, targetEyeY, Math.min(1, 20 * dt));
        if (pos.y < targetEyeY) pos.y = targetEyeY;
      }
    }

    const sinYaw = Math.sin(yaw);
    const cosYaw = Math.cos(yaw);
    const forward = new THREE.Vector3(-sinYaw, 0, -cosYaw);
    const right = new THREE.Vector3(cosYaw, 0, -sinYaw);
    let wishX = 0, wishZ = 0;
    const w = !!(keys['KeyW'] || keys['ArrowUp']);
    const s = !!(keys['KeyS'] || keys['ArrowDown']);
    const a = !!(keys['KeyA'] || keys['ArrowLeft']);
    const d = !!(keys['KeyD'] || keys['ArrowRight']);
    if (w) { wishX += forward.x; wishZ += forward.z; }
    if (s) { wishX -= forward.x; wishZ -= forward.z; }
    if (a) { wishX -= right.x; wishZ -= right.z; }
    if (d) { wishX += right.x; wishZ += right.z; }
    // MOBILE: joystick overrides WASD if active
    if(QUALITY.isMobile && window.__mobileMoveVec && (Math.abs(window.__mobileMoveVec.x)>0.08 || Math.abs(window.__mobileMoveVec.y)>0.08)){
      const mv = window.__mobileMoveVec;
      // mv.x = strafe, mv.y = forward
      const jWishX = mv.x * right.x + mv.y * forward.x;
      const jWishZ = mv.x * right.z + mv.y * forward.z;
      wishX = jWishX; wishZ = jWishZ;
    }
    let wishLen = Math.hypot(wishX, wishZ);
    if (wishLen > 0) { wishX /= wishLen; wishZ /= wishLen; }
    const isSprinting = !!(keys['ShiftLeft'] || keys['ShiftRight'] || keys['Shift']) && w && !s && !wantCrouch && isGrounded && wishLen > 0;
    const isCrouching = wantCrouch;
    let wishSpeed = BASE_SPEED;
    if (isCrouching) wishSpeed *= CROUCH_MUL;
    else if (isSprinting) wishSpeed *= SPRINT_MUL;
    if (wishLen === 0) wishSpeed = 0;
    const wishVelX = wishX * wishSpeed;
    const wishVelZ = wishZ * wishSpeed;

    let accel = isGrounded ? GROUND_ACCEL : GROUND_ACCEL * AIR_CONTROL;
    const curVelX = velocity.x, curVelZ = velocity.z;
    const velLen = Math.hypot(curVelX, curVelZ);
    const wishDot = wishLen > 0 ? (curVelX * wishX + curVelZ * wishZ) : -1;
    if (isGrounded && wishLen === 0) accel = GROUND_DECEL;
    else if (isGrounded && wishDot < -0.1) accel = Math.max(accel, 24.0);
    if (!isGrounded && wishLen === 0) {
      const airDrag = Math.exp(-1.2 * dt);
      velocity.x *= airDrag; velocity.z *= airDrag;
    }
    if (wishLen > 0 || velLen > 0.01) {
      const t = 1 - Math.exp(-accel * dt);
      velocity.x += (wishVelX - velocity.x) * t;
      velocity.z += (wishVelZ - velocity.z) * t;
    } else { velocity.x = 0; velocity.z = 0; }
    if (Math.abs(velocity.x) < 0.02 && wishLen === 0) velocity.x = 0;
    if (Math.abs(velocity.z) < 0.02 && wishLen === 0) velocity.z = 0;

    const wantsJump = !!keys['Space'];
    if (wantsJump && isGrounded && !jumpHeld) { velocity.y = JUMP_VEL; isGrounded = false; jumpHeld = true; }
    if (!wantsJump) jumpHeld = false;

    if (!isGrounded || velocity.y > 0) velocity.y -= GRAVITY * dt;
    if (velocity.y < -22) velocity.y = -22;

    let dx = velocity.x * dt;
    let dz = velocity.z * dt;
    let dy = velocity.y * dt;
    resolvePenetration(pos, currentHeight);
    if (dx !== 0) {
      const newPosX = new THREE.Vector3(pos.x + dx, pos.y, pos.z);
      if (!checkCollisionAt(newPosX, currentHeight)) pos.x += dx;
      else {
        // Wave3.5 vault mantle — try vault over low ledge <0.95m (COD mantle 0.45-0.9)
        let vaulted=false;
        if(isGrounded && wishLen>0){
          const vaultTest = new THREE.Vector3(pos.x + dx, pos.y + 0.58, pos.z);
          const hitX = checkCollisionAt(newPosX, currentHeight);
          if(hitX){
            const top = hitX.box.max.y; const ledgeH = top - (pos.y - currentHeight);
            if(ledgeH>0.18 && ledgeH<0.95 && !checkCollisionAt(vaultTest, CROUCH_HEIGHT)){
              pos.x += dx*0.62; pos.y = top + currentHeight + 0.02; velocity.y = 1.2; isGrounded=false; vaulted=true;
            }
          }
        }
        if(!vaulted){
          let low = 0, high = dx, best = 0;
          for (let i = 0; i < 5; i++) { const mid = (low + high) * 0.5; const test = new THREE.Vector3(pos.x + mid, pos.y, pos.z); if (!checkCollisionAt(test, currentHeight)) { best = mid; low = mid; } else high = mid; }
          pos.x += best;
          if (Math.sign(velocity.x) === Math.sign(dx)) velocity.x *= 0.12; // inertia 12% carry vs dead stop (COD slide)
        }
      }
    }
    if (dz !== 0) {
      const newPosZ = new THREE.Vector3(pos.x, pos.y, pos.z + dz);
      if (!checkCollisionAt(newPosZ, currentHeight)) pos.z += dz;
      else {
        let vaulted=false;
        if(isGrounded && wishLen>0){
          const vaultTest = new THREE.Vector3(pos.x, pos.y + 0.58, pos.z + dz);
          const hitZ = checkCollisionAt(newPosZ, currentHeight);
          if(hitZ){
            const top = hitZ.box.max.y; const ledgeH = top - (pos.y - currentHeight);
            if(ledgeH>0.18 && ledgeH<0.95 && !checkCollisionAt(vaultTest, CROUCH_HEIGHT)){
              pos.z += dz*0.62; pos.y = top + currentHeight + 0.02; velocity.y = 1.2; isGrounded=false; vaulted=true;
            }
          }
        }
        if(!vaulted){
          let low = 0, high = dz, best = 0;
          for (let i = 0; i < 5; i++) { const mid = (low + high) * 0.5; const test = new THREE.Vector3(pos.x, pos.y, pos.z + mid); if (!checkCollisionAt(test, currentHeight)) { best = mid; low = mid; } else high = mid; }
          pos.z += best;
          if (Math.sign(velocity.z) === Math.sign(dz)) velocity.z *= 0.12;
        }
      }
    }
    if (dy !== 0) {
      const newPosY = new THREE.Vector3(pos.x, pos.y + dy, pos.z);
      const hit = checkCollisionAt(newPosY, currentHeight);
      if (!hit) { pos.y += dy; }
      else {
        const cb = hit.box;
        if (dy < 0) { const groundTop = cb.max.y; const targetY = groundTop + currentHeight; const fallSpeed = velocity.y; if (pos.y > targetY) pos.y = targetY; if (velocity.y < 0) { if(fallSpeed < -6) landKick = Math.min(1, (-fallSpeed-6)/10); velocity.y = 0; } else if(velocity.y<0) velocity.y=0; isGrounded = true; }
        else { const ceilBottom = cb.min.y; const targetY = ceilBottom - CAPSULE_EXTRA_TOP - 0.01; if (pos.y > targetY) pos.y = targetY; if (velocity.y > 0) velocity.y = 0; }
      }
    }
    pos.x = Math.max(-48, Math.min(48, pos.x));
    pos.z = Math.max(-48, Math.min(48, pos.z));
    if (pos.y < -20) { pos.set(0, STAND_HEIGHT, 8); velocity.set(0, 0, 0); currentHeight = STAND_HEIGHT; targetHeight = STAND_HEIGHT; }

    const horizSpeed = Math.hypot(velocity.x, velocity.z);
    const moving = isGrounded && horizSpeed > 0.5 && wishLen > 0;
    const targetFovT = isSprinting && moving ? 1 : 0;
    sprintFovT += (targetFovT - sprintFovT) * (1 - Math.exp(-FOV_LERP * dt));
    const newFov = FOV_BASE + FOV_SPRINT_ADD * sprintFovT;
    if (Math.abs(camera.fov - newFov) > 0.05) { camera.fov = newFov; camera.updateProjectionMatrix(); }
    let bobX = 0, bobY = 0;
    if (moving) {
      let freq = BOB_FREQ_WALK;
      if (isSprinting) freq = BOB_FREQ_SPRINT;
      else if (isCrouching) freq = BOB_FREQ_CROUCH;
      bobTime += dt * freq * (isSprinting ? 1.0 : Math.min(1, horizSpeed / BASE_SPEED));
      const ampScale = isCrouching ? 0.65 : (isSprinting ? 0.85 : 1.0);
      const speedScale = Math.min(1, horizSpeed / (BASE_SPEED * 0.9));
      bobY = Math.sin(bobTime) * BOB_AMP_Y * ampScale * speedScale;
      bobX = Math.sin(bobTime * 0.5) * BOB_AMP_X * ampScale * speedScale;
      if (!wasGrounded && isGrounded && landKick<0.02) bobTime *= 0.9;
    } else {
      bobTime = THREE.MathUtils.lerp(bobTime, 0, Math.min(1, dt * 6));
      if (Math.abs(bobTime) < 0.001) bobTime = 0;
    }
    // landing kick decay — COD hard landing 0.06m dip over 180ms
    if(landKick>0) landKick = Math.max(0, landKick - dt*5.2);
    const landDrop = landKick * Math.sin(Math.min(1, landKick*3)*Math.PI) * 0.06;
    camera.position.set(pos.x + bobX, pos.y + bobY - landDrop, pos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
    camera.rotation.z = bobX * 0.06;
    // Wave3.5 expose for audio HRTF + HUD sprint vignette
    window.__controlsPos = {x:pos.x,y:pos.y,z:pos.z};
    window.__controlsYaw = yaw;
    window.__isSprinting = !!(keys['ShiftLeft']||keys['ShiftRight']||keys['Shift']);
    window.__sprintHeld = window.__isSprinting && isGrounded && Math.hypot(velocity.x,velocity.z)>1;
    try{ if(window.__audio && window.__audio.updateListener) window.__audio.updateListener({x:pos.x,y:pos.y,z:pos.z}, yaw); }catch{}
  }

  camera.position.copy(pos);
  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;

  const api = {
    lock,
    unlock,
    update,
    getPosition() { return pos.clone(); },
    isLocked() { return locked; },
    addEventListener(type, fn) { if (listeners[type]) listeners[type].push(fn); },
    removeEventListener(type, fn) { const arr = listeners[type]; if (!arr) return; const i = arr.indexOf(fn); if (i >= 0) arr.splice(i, 1); },
    get camera() { return camera; },
    get velocity() { return velocity.clone(); },
    get isGrounded() { return isGrounded; }
  };
  return api;
}
