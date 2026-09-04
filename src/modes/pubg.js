import * as THREE from 'three';
import { QUALITY } from '../core/quality.js';
const IS_LOW = QUALITY.tier==='low';
// PUBG Battle Royale — Warzone-lite: shrinking safe zone, blue zone damage, bots, loot crates
// Lightweight FPS-friendly: no heavy physics, throttle like enemies divisor 5 low

export function createPubgMode(scene, level, controls, weapons){
  let active=false;
  let phase=0;
  let phaseTime=0;
  let alive=0;
  let bots=[];
  let lootCrates=[];
  let zoneMesh=null, zoneLine=null;
  let warningEl=null, hudEl=null, aliveEl=null, phaseEl=null, timerEl=null, radiusEl=null;
  let damageAccum=0;
  let winner=null;
  // zone phases: radius and duration (seconds) — total ~180s
  const phases=[
    {radius:280, duration:30, damage:1.2},
    {radius:190, duration:28, damage:1.8},
    {radius:120, duration:28, damage:2.6},
    {radius:72,  duration:26, damage:3.8},
    {radius:42,  duration:24, damage:5.2},
    {radius:22,  duration:20, damage:7.0},
  ];
  let center=new THREE.Vector3(0,0,0);
  let currentRadius=phases[0].radius;
  let targetRadius=phases[0].radius;
  let startRadius=phases[0].radius;
  function fmtTime(sec){
    const s=Math.max(0, Math.ceil(sec));
    const m=Math.floor(s/60);
    return m+':'+String(s%60).padStart(2,'0');
  }
  function getExternalEnemyCount(){
    try{
      if(window.__enemyCount && typeof window.__enemyCount === 'function') return Math.max(0, window.__enemyCount()|0);
      if(window.__enemies && typeof window.__enemies._getCount === 'function') return Math.max(0, window.__enemies._getCount()|0);
    }catch{}
    return 0;
  }
  function getTotalAlive(){
    return bots.filter(b=>b.userData.alive).length + getExternalEnemyCount() + 1;
  }
  function isVictory(){
    return bots.filter(b=>b.userData.alive).length === 0 && getExternalEnemyCount() === 0;
  }
  function ensureHUD(){
    if(hudEl) return;
    hudEl=document.createElement('div'); hudEl.id='pubgHUD';
    const useBlur=QUALITY.tier!=='low';
    hudEl.style.cssText='position:fixed;top:14px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:16px;padding:8px 16px;background:rgba(14,18,24,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:10px;color:#fff;font-family:system-ui,sans-serif;z-index:11;'+(useBlur?'backdrop-filter:blur(6px);':'');
    const zoneWrap=document.createElement('div'); zoneWrap.style.cssText='display:flex;flex-direction:column;gap:2px;';
    const zoneLabel=document.createElement('div'); zoneLabel.textContent='SAFE ZONE'; zoneLabel.style.cssText='font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;';
    phaseEl=document.createElement('div'); phaseEl.style.cssText='font-size:13px;font-weight:800;letter-spacing:0.3px;'; phaseEl.textContent='PHASE 1/6';
    timerEl=document.createElement('div'); timerEl.style.cssText='font-size:10px;letter-spacing:0.7px;opacity:0.72;font-weight:700;'; timerEl.textContent='SHRINK IN 0:30';
    radiusEl=document.createElement('div'); radiusEl.style.cssText='font-size:10px;letter-spacing:0.7px;opacity:0.58;font-weight:700;'; radiusEl.textContent='RADIUS 280m';
    const bar=document.createElement('div'); bar.style.cssText='width:120px;height:4px;background:rgba(255,255,255,0.18);border-radius:2px;overflow:hidden;';
    const barFill=document.createElement('div'); barFill.id='pubgZoneBar'; barFill.style.cssText='width:0%;height:100%;background:#2ecc71;transition:width 0.3s;'; bar.appendChild(barFill);
    zoneWrap.appendChild(zoneLabel); zoneWrap.appendChild(phaseEl); zoneWrap.appendChild(timerEl); zoneWrap.appendChild(radiusEl); zoneWrap.appendChild(bar);
    const aliveWrap=document.createElement('div'); aliveWrap.style.cssText='display:flex;flex-direction:column;align-items:flex-end;gap:1px;min-width:70px;';
    const aliveLabel=document.createElement('div'); aliveLabel.textContent='ALIVE'; aliveLabel.style.cssText='font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;';
    aliveEl=document.createElement('div'); aliveEl.style.cssText='font-size:18px;font-weight:900;color:#ffcc33;'; aliveEl.textContent='--';
    aliveWrap.appendChild(aliveLabel); aliveWrap.appendChild(aliveEl);
    hudEl.appendChild(zoneWrap); hudEl.appendChild(aliveWrap);
    document.body.appendChild(hudEl);
    warningEl=document.createElement('div'); warningEl.id='pubgWarning'; warningEl.style.cssText='position:fixed;left:50%;top:46%;transform:translate(-50%,-50%);padding:10px 18px;background:rgba(180,30,40,0.88);border:1px solid rgba(255,255,255,0.22);border-radius:8px;color:#fff;font-weight:800;font-size:14px;letter-spacing:0.6px;display:none;pointer-events:none;z-index:12;text-align:center;'; warningEl.textContent='WARNING: BLUE ZONE!'; document.body.appendChild(warningEl);
  }
  function setWarning(show, text){
    if(!warningEl) ensureHUD();
    if(text) warningEl.textContent=text;
    warningEl.style.display=show?'block':'none';
  }
  function createZoneVisual(){
    // circle on ground
    const geo=new THREE.RingGeometry(1,1, IS_LOW?32:64);
    const mat=new THREE.MeshBasicMaterial({ color:0x2ecc71, transparent:true, opacity:0.22, side:THREE.DoubleSide, depthWrite:false });
    zoneMesh=new THREE.Mesh(geo, mat); zoneMesh.rotation.x=-Math.PI/2; zoneMesh.position.set(center.x, 0.08, center.z); zoneMesh.renderOrder=2; scene.add(zoneMesh);
    // outline line
    const pts=[]; const segs=IS_LOW?48:96;
    for(let i=0;i<=segs;i++){ const a=i/segs*Math.PI*2; pts.push(new THREE.Vector3(Math.cos(a),0,Math.sin(a))); }
    const lineGeo=new THREE.BufferGeometry().setFromPoints(pts);
    const lineMat=new THREE.LineBasicMaterial({ color:0x2ecc71, linewidth:1, transparent:true, opacity:0.85 });
    zoneLine=new THREE.Line(lineGeo, lineMat); zoneLine.position.set(center.x, 0.12, center.z); scene.add(zoneLine);
    updateZoneScale(currentRadius);
  }
  function updateZoneScale(r){
    if(!zoneMesh||!zoneLine) return;
    const s=r;
    zoneMesh.scale.set(s,s,1);
    zoneLine.scale.set(s,s,1);
  }
  function removeZoneVisual(){
    if(zoneMesh) { scene.remove(zoneMesh); zoneMesh.geometry.dispose(); zoneMesh.material.dispose(); zoneMesh=null; }
    if(zoneLine){ scene.remove(zoneLine); zoneLine.geometry.dispose(); zoneLine.material.dispose(); zoneLine=null; }
  }
  function spawnBots(){
    // 10-14 bots throttled to 10 max on low
    const count= IS_LOW?8:14;
    bots.length=0;
    const spawnPts= level && level.spawnPoints ? level.spawnPoints : [];
    const terrainPts= (window.__terrain && window.__terrain.worldSize) ? [] : [];
    // generate ring around center radius 120-200
    for(let i=0;i<count;i++){
      const ang=Math.random()*Math.PI*2;
      const dist= 80 + Math.random()*120;
      const x=center.x + Math.cos(ang)*dist;
      const z=center.z + Math.sin(ang)*dist;
      const y= (window.__terrain && typeof window.__terrain.getHeightAt==='function') ? window.__terrain.getHeightAt(x,z) : 0;
      const pos=new THREE.Vector3(x, y+0.12, z);
      // simple bot mesh
      const group=new THREE.Group(); group.name='pubg_bot_'+i;
      const bodyGeo=new THREE.BoxGeometry(0.55,0.95,0.35);
      const bodyMat=new THREE.MeshStandardMaterial({ color:0x4a5a6a, roughness:0.82, metalness:0.08 });
      const body=new THREE.Mesh(bodyGeo, bodyMat); body.position.y=0.62; body.castShadow=!IS_LOW; body.receiveShadow=!IS_LOW; group.add(body);
      const headGeo=new THREE.BoxGeometry(0.32,0.32,0.32);
      const headMat=new THREE.MeshStandardMaterial({ color:0xd9c7a5, roughness:0.9 });
      const head=new THREE.Mesh(headGeo, headMat); head.position.set(0,1.22,0); head.castShadow=!IS_LOW; group.add(head);
      // weapon stub
      const gun=new THREE.Mesh(new THREE.BoxGeometry(0.08,0.08,0.58), new THREE.MeshStandardMaterial({color:0x1a1d22})); gun.position.set(0.22,0.65,0.22); group.add(gun);
      group.position.copy(pos);
      group.userData.hp=100; group.userData.maxHp=100; group.userData.speed= 2.2 + Math.random()*0.6; group.userData.state='patrol'; group.userData.target= new THREE.Vector3(center.x,0,center.z); group.userData.shootCd= 0.6 + Math.random()*1.2; group.userData.alive=true; group.userData.isEnemy=true;
      scene.add(group);
      bots.push(group);
      const idx=bots.length-1;
      group.userData.hit = (dmg)=>applyDamageToBot(idx, dmg);
      group.traverse(obj=>{ if(obj && obj.isMesh){ obj.userData.isEnemy=true; obj.userData.hit=group.userData.hit; } });
    }
    alive=bots.length+1; updateAliveHUD();
  }
  function spawnLoot(){
    const lootPos=[[12, -6], [-14, 8], [6,14], [-8,-14], [18,4]];
    for(let i=0;i<lootPos.length;i++){
      const x=lootPos[i][0], z=lootPos[i][1];
      const y= (window.__terrain && typeof window.__terrain.getHeightAt==='function') ? window.__terrain.getHeightAt(x,z) : 0;
      const group=new THREE.Group(); group.name='loot_'+i; group.position.set(x, y+0.22, z);
      const box=new THREE.Mesh(new THREE.BoxGeometry(0.72,0.42,0.72), new THREE.MeshStandardMaterial({ color:0x8a6a2a, roughness:0.72, metalness:0.12 })); box.position.y=0.21; box.castShadow=!IS_LOW; group.add(box);
      const lid=new THREE.Mesh(new THREE.BoxGeometry(0.74,0.08,0.74), new THREE.MeshStandardMaterial({ color:0xb5923a })); lid.position.y=0.46; group.add(lid);
      const glow=new THREE.PointLight(0xffcc55, 0.9, 6); glow.position.set(0,0.6,0); group.add(glow);
      scene.add(group); lootCrates.push({group, taken:false, pos: new THREE.Vector3(x,y,z)});
    }
  }
  function updateAliveHUD(){
    if(!aliveEl) ensureHUD();
    const aliveCount= getTotalAlive();
    aliveEl.textContent= aliveCount;
    if(phaseEl) phaseEl.textContent='PHASE '+(phase+1)+'/6  ● '+(aliveCount)+' ALIVE';
    if(timerEl){
      const totalDur=phases[phase]?phases[phase].duration:0;
      const remain=Math.max(0, totalDur - phaseTime);
      timerEl.textContent='SHRINK IN '+fmtTime(remain);
    }
    if(radiusEl) radiusEl.textContent='RADIUS '+Math.max(0, Math.round(currentRadius))+'m';
    const bar=document.getElementById('pubgZoneBar');
    if(bar){
      const totalDur=phases[phase]?phases[phase].duration:1;
      const pct=Math.max(0, Math.min(100, (1-phaseTime/totalDur)*100));
      bar.style.width=pct+'%';
      bar.style.background= pct<28?'#e74c3c' : pct<55?'#f1c40f' : '#2ecc71';
    }
  }
  function start(){
    if(active) return;
    active=true; phase=0; phaseTime=0; winner=null;
    startRadius=phases[0].radius; currentRadius=startRadius; targetRadius=phases[1]?phases[1].radius:startRadius;
    // random center offset within 40 of origin to vary
    center.set( (Math.random()-0.5)*40, 0, (Math.random()-0.5)*40);
    ensureHUD(); hudEl.style.display='flex';
    createZoneVisual();
    spawnBots(); spawnLoot();
    updateAliveHUD();
    console.log('[PUBG] Battle Royale started phase 0 center', center, 'radius', currentRadius);
    // expose for debug
    window.__pubgCenter=center; window.__pubgRadius=()=>currentRadius;
  }
  function dispose(){
    active=false;
    bots.forEach(b=> scene.remove(b)); bots.length=0;
    lootCrates.forEach(c=> scene.remove(c.group)); lootCrates.length=0;
    removeZoneVisual();
    if(hudEl) hudEl.style.display='none';
    setWarning(false);
  }
  function checkZoneDamage(playerPos, dt){
    const dx=playerPos.x-center.x, dz=playerPos.z-center.z; const dist=Math.hypot(dx,dz);
    const outside= dist > currentRadius;
    if(outside){
      setWarning(true, 'OUTSIDE SAFE ZONE — RETURN!');
      // blue zone damage per second
      const dmgPerSec= phases[phase]?phases[phase].damage:2;
      damageAccum+=dmgPerSec*dt;
      if(damageAccum>0.11){
        damageAccum=0;
        // apply damage via HUD event
        try{ document.dispatchEvent(new CustomEvent('pubg-zone-damage', {detail:{dps:dmgPerSec}})); }catch{}
        // direct if window supports
        try{ if(window.__takeZoneDamage) window.__takeZoneDamage(4 + phase*2); }catch{}
      }
      // visual rim pulse
      if(zoneMesh) { zoneMesh.material.opacity=0.12 + Math.sin(Date.now()*0.006)*0.08 + 0.12; zoneMesh.material.color.setHex(0xe74c3c); }
    } else {
      setWarning(false);
      if(zoneMesh){ zoneMesh.material.opacity=0.18; zoneMesh.material.color.setHex(0x2ecc71); }
    }
    return outside;
  }
  function updateBots(dt, playerPos){
    // simple AI: move toward center or chase player if within 28 and LOS-ish
    const chaseRange=28;
    for(const b of bots){
      if(!b.userData.alive) continue;
      const pos=b.position;
      const toPlayer= playerPos.clone().sub(pos); const distP= toPlayer.length();
      let targetPos=center.clone();
      let isChasing=false;
      if(distP < chaseRange){
        // quick LOS: no collider between - simplified distance check only for perf
        targetPos=playerPos.clone(); isChasing=true;
      }
      // if isChasing, face player
      const dir=new THREE.Vector3(targetPos.x-pos.x, 0, targetPos.z-pos.z); const len=dir.length(); if(len<0.02) continue; dir.normalize();
      // rotate
      const wantYaw=Math.atan2(-dir.x, -dir.z);
      let yaw=b.rotation.y; let delta=wantYaw-yaw; while(delta>Math.PI) delta-=Math.PI*2; while(delta<-Math.PI) delta+=Math.PI*2;
      b.rotation.y+= delta * Math.min(1, 4*dt);
      // move
      const speed=b.userData.speed * (isChasing?1.35:0.9);
      const mv=dir.multiplyScalar(speed*dt);
      let nx=pos.x+mv.x, nz=pos.z+mv.z;
      let ny= (window.__terrain && typeof window.__terrain.getHeightAt==='function') ? window.__terrain.getHeightAt(nx,nz) : 0;
      // avoid stacking: simple separation
      for(const o of bots){ if(o===b||!o.userData.alive) continue; const d2=(o.position.x-nx)*(o.position.x-nx)+(o.position.z-nz)*(o.position.z-nz); if(d2<1.1){ nx-= mv.x*0.55; nz-= mv.z*0.55; break; } }
      // check collision with level colliders via quick Box test (reuse controls colliderBoxes if exists)
      // For now allow through minor — not blocking for bots (perf)
      b.position.set(nx, ny+0.12, nz);
      // shooting at player if chasing
      if(isChasing && distP<26){
        b.userData.shootCd-=dt;
        if(b.userData.shootCd<=0){
          b.userData.shootCd= 0.85 + Math.random()*1.1;
          // simulate hit: 18% chance to hit player for 8-14 dmg
          if(Math.random()<0.18){
            try{ if(window.__takeBotDamage) window.__takeBotDamage(8+Math.random()*6, b.position.clone()); }catch{}
            try{ document.dispatchEvent(new CustomEvent('pubg-bot-hit', {detail:{dmg:10, from:b.position.clone()}})); }catch{}
          }
          // muzzle flash cheap
          if(!IS_LOW){
            const flash=new THREE.PointLight(0xffcc88, 1.2, 6); flash.position.copy(b.position); flash.position.y+=1.0; flash.position.x+= Math.sin(b.rotation.y)*0.45; flash.position.z+= Math.cos(b.rotation.y)*0.45; scene.add(flash); setTimeout(()=>scene.remove(flash), 70);
          }
        }
      } else {
        b.userData.shootCd=Math.max(0, b.userData.shootCd-dt*0.5);
      }
      // animate bob
      const t=Date.now()*0.005 + b.userData.speed*10;
      b.position.y+= Math.sin(t)*0.0015;
    }
  }
  function checkLoot(playerPos){
    for(const c of lootCrates){
      if(c.taken) continue;
      const d=c.pos.distanceTo(playerPos);
      if(d<1.8){
        c.taken=true;
        // give ammo/health
        try{ if(window.__weapons && window.__weapons.addAmmo) window.__weapons.addAmmo(30); else if(window.__weapons && window.__weapons.reserve!==undefined) window.__weapons.reserve+=30; }catch{}
        // health is handled by HUD wrapper if exists
        try{ document.dispatchEvent(new CustomEvent('pubg-loot', {detail:{ammo:30}})); }catch{}
        // visual: remove lid, open
        c.group.children.forEach(ch=>{ if(ch.geometry && ch.geometry.type==='BoxGeometry') { ch.material.transparent=true; ch.material.opacity=0.55; } });
        const txt=document.createElement('div'); txt.style.cssText='position:fixed;left:50%;top:58%;transform:translate(-50%,-50%);padding:8px 14px;background:rgba(14,18,24,0.88);border:1px solid rgba(255,255,255,0.18);border-radius:8px;color:#2ecc71;font-weight:800;font-size:13px;z-index:12;'; txt.textContent='+30 AMMO  (LOOTED)'; document.body.appendChild(txt); setTimeout(()=>txt.remove(), 1400);
        console.log('[PUBG] looted crate at', c.pos);
      }
    }
  }
  function update(dt, playerPos){
    if(!active) return;
    if(winner) return;
    phaseTime+=dt;
    const curPhase=phases[phase];
    const nextPhase=phases[phase+1];
    // shrink radius lerp over duration
    if(curPhase && nextPhase){
      const t=Math.min(1, phaseTime/curPhase.duration);
      currentRadius= THREE.MathUtils.lerp(curPhase.radius, nextPhase.radius, t);
      updateZoneScale(currentRadius);
      updateAliveHUD();
    }
    // phase advance
    if(curPhase && phaseTime >= curPhase.duration){
      phaseTime=0;
      if(phase < phases.length-1){
        phase++;
        console.log('[PUBG] phase advance', phase, 'radius', phases[phase].radius);
        // flash banner
        setWarning(true, 'SAFE ZONE SHRINKING — PHASE '+(phase+1)); setTimeout(()=>{ if(!checkZoneDamage(playerPos,0)) setWarning(false); }, 1400);
      } else {
        // final phase ended: shrink to 0
        currentRadius=Math.max(0, currentRadius - dt*6);
        updateZoneScale(currentRadius);
        if(currentRadius<=1) { // sudden death
        }
      }
    }
    // zone damage
    checkZoneDamage(playerPos, dt);
    // bots - throttled already by caller but also handle here if dt scaled
    updateBots(dt, playerPos);
    checkLoot(playerPos);
    // win/lose check: last standing against both PUBG bots and the base enemy squad
    if(isVictory()){
      winner='player';
      setWarning(true, 'VICTORY ROYALE!  ★');
      console.log('[PUBG] victory');
    }
    // check bot zone deaths (bots outside take damage too - cheap: if outside radius > currentRadius+6 they die over time)
    for(const b of bots){ if(!b.userData.alive) continue; const d=Math.hypot(b.position.x-center.x, b.position.z-center.z); if(d > currentRadius+6){
      b.userData.hp-= (phases[phase]?.damage||2)*dt*0.9; if(b.userData.hp<=0){ b.userData.alive=false; b.visible=false; // keep in scene but hidden for cheap
        alive--;
        updateAliveHUD();
      }
    }}
  }
  function applyDamageToBot(botIdx, dmg){
    const b=bots[botIdx]; if(!b||!b.userData.alive) return false;
    b.userData.hp-=dmg; if(b.userData.hp<=0){ b.userData.alive=false; b.visible=false; alive--; updateAliveHUD(); // feedback
      try{ const el=document.createElement('div'); el.style.cssText='position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);color:#ffcc33;font-weight:900;font-size:16px;text-shadow:0 2px 8px rgba(0,0,0,0.7);z-index:12;'; el.textContent='BOT ELIMINATED'; document.body.appendChild(el); setTimeout(()=>el.remove(), 900); }catch{}
      if(isVictory()){
        winner='player';
        setWarning(true, 'VICTORY ROYALE!  ★');
      }
      return true;
    }
    // flash
    try{ b.children.forEach(ch=>{ if(ch.isMesh){ const orig=ch.material.color.clone(); ch.material.color.setHex(0xff4444); setTimeout(()=>ch.material.color.copy(orig), 80); } }); }catch{}
    return false;
  }
  // hit test helper for weapons.js integration: ray vs bots (reuse simple distance to ray)
  function rayHitBots(origin, dir, maxDist=120){
    let best=null, bestDist=Infinity;
    for(let i=0;i<bots.length;i++){ const b=bots[i]; if(!b.userData.alive) continue; const to=b.position.clone().sub(origin); const proj=to.dot(dir); if(proj<0||proj>maxDist) continue; const closest= origin.clone().add(dir.clone().multiplyScalar(proj)); const d=b.position.distanceTo(closest); if(d<0.85 && proj<bestDist){ bestDist=proj; best={bot:b, idx:i, distance:proj, point:closest.clone()}; } }
    return best;
  }
  function isActive(){ return active; }
  function getState(){ return {phase, phaseTime, currentRadius, alive: bots.filter(b=>b.userData.alive).length+1, center: center.clone(), winner}; }
  // expose bot hit for weapons hooks
  const api={ start, update, dispose, isActive, getState, rayHitBots, applyDamageToBot, get bots(){return bots;}, get lootCrates(){return lootCrates;}, get center(){return center.clone();}, get radius(){return currentRadius;} };
  window.__pubgMode=api; window.__PUBG_MODE=api;
  return api;
}
