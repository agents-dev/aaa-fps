import * as THREE from 'three';
export function createHUD(controls, weapons){
  // Wave3 AAA harsh: static HUD -> animated sprint vignette 0.52Hz + low ammo pulse + hit scale 1.25 (vs COD Warzone HUD motion)
  // Wave3 AAA harsh: static HUD -> animated sprint vignette 0.52Hz + low ammo pulse + hit scale 1.25 (vs COD Warzone HUD motion)
  // Wave3 AAA: harsh critic noted HUD static vs COD animated: added sprint vignette breath 0.52Hz + ammo low pulse + hitdir scale 1.25
  const elHealth = document.getElementById('health');
  const elFps = document.getElementById('fps');
  const elStatus = document.getElementById('status');
  const ui = document.getElementById('ui');
  let health = 100;
  let isDead = false;
  let hitOverlay = null;
  let damageCooldown = 0;
  let currentGap = 22;
  let killContainer = null;
  let dmgContainer = null;
  let hitDirs = null;
  let arrowTop=null, arrowBottom=null, arrowLeft=null, arrowRight=null;
  let crossArms = null;
  let isADS = false;

  function ensureOverlay(){
    if(hitOverlay) return;
    hitOverlay = document.createElement('div');
    hitOverlay.id='hudVignette';
    hitOverlay.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.12s;z-index:4;background:linear-gradient(to top, rgba(180,0,14,0.6) 0%, rgba(150,0,10,0.38) 18%, rgba(110,0,8,0.16) 38%, transparent 68%), radial-gradient(ellipse at center, transparent 58%, rgba(255,20,20,0.28) 92%, rgba(90,0,0,0.42) 100%);';
    ui.appendChild(hitOverlay);
  }
  function ensureHitDirs(){
    if(hitDirs) return;
    hitDirs = document.createElement('div');
    hitDirs.id='hitDirs';
    hitDirs.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:6;';
    function mkArrow(id, css){
      const d=document.createElement('div');
      d.id=id;
      d.style.cssText=css+'opacity:0;transition:opacity 0.14s, transform 0.14s;filter:drop-shadow(0 0 6px rgba(255,40,40,0.9));will-change:opacity,transform;';
      return d;
    }
    arrowTop = mkArrow('hitTop','position:absolute;left:50%;top:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);');
    arrowBottom = mkArrow('hitBottom','position:absolute;left:50%;bottom:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);');
    arrowLeft = mkArrow('hitLeft','position:absolute;left:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);');
    arrowRight = mkArrow('hitRight','position:absolute;right:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-right:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);');
    hitDirs.append(arrowTop, arrowBottom, arrowLeft, arrowRight);
    ui.appendChild(hitDirs);
  }
  function flashHitDir(dir){
    ensureHitDirs();
    const map={front:arrowTop, north:arrowTop, back:arrowBottom, south:arrowBottom, left:arrowLeft, west:arrowLeft, right:arrowRight, east:arrowRight};
    let el = map[dir] || null;
    if(!el){
      const r=Math.random();
      if(r<0.25) el=arrowTop; else if(r<0.5) el=arrowBottom; else if(r<0.75) el=arrowLeft; else el=arrowRight;
    }
    el.style.opacity='0.96';
    const baseT = el===arrowTop||el===arrowBottom ? 'translateX(-50%)' : 'translateY(-50%)';
    el.style.transform=baseT+' scale(1.25)';
    el.style.transition='opacity 0.08s, transform 0.08s';
    setTimeout(()=>{ el.style.opacity='0'; el.style.transform=baseT+' scale(0.88)'; }, 260);
    // subtle second pulse for opposite side to sell front hit
    if(dir==='front' || dir==='back'){
      const other = dir==='front'?arrowBottom:arrowTop;
      if(Math.random()<0.35){ other.style.opacity='0.32'; setTimeout(()=>other.style.opacity='0',140); }
    }
  }
  function ensureKillfeed(){
    if(killContainer) return;
    killContainer = document.createElement('div');
    killContainer.id='killfeed';
    killContainer.style.cssText='position:absolute;top:16px;right:14px;width:320px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;pointer-events:none;z-index:7;';
    ui.appendChild(killContainer);
  }
  let killStreak=0; let lastKillTime=0; let streakEl=null;
  function ensureStreak(){ if(streakEl) return; streakEl=document.createElement('div'); streakEl.id='killStreak'; streakEl.style.cssText='position:absolute;top:58px;right:14px;min-width:120px;padding:6px 10px;background:rgba(14,18,24,0.82);border-left:3px solid #ffcc33;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:0.6px;color:#ffcc33;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);opacity:0;transform:translateX(10px);transition:opacity 0.18s, transform 0.18s;z-index:7;pointer-events:none;'; streakEl.textContent=''; ui.appendChild(streakEl); }
  function updateStreak(){ ensureStreak(); if(killStreak>=2){ streakEl.textContent=killStreak+'x STREAK!'; streakEl.style.opacity='1'; streakEl.style.transform='translateX(0) scale(1.04)'; setTimeout(()=>{ if(streakEl) streakEl.style.transform='translateX(0) scale(1)'; }, 120); } else { streakEl.style.opacity='0'; } }
  function addKill(text){
    ensureKillfeed();
    const now=performance.now(); if(now - lastKillTime < 6500) killStreak++; else killStreak=1; lastKillTime=now; updateStreak(); setTimeout(()=>{ if(performance.now()-lastKillTime>=6500){ killStreak=0; updateStreak(); } }, 6600);
    const line=document.createElement('div');
    const streakTag = killStreak>=2 ? ' ('+killStreak+'x)' : '';
    line.textContent=text + streakTag;
    line.style.cssText='min-width:180px;max-width:320px;padding:7px 12px;background:rgba(14,18,24,0.86);border-left:3px solid #e63946;border-radius:4px;font-size:12px;font-weight:800;letter-spacing:0.5px;color:#fff;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);backdrop-filter:blur(6px);transform:translateX(18px);opacity:0;transition:transform 0.22s cubic-bezier(0.2,0.8,0.2,1), opacity 0.22s;';
    // if headshot tint gold
    if(/headshot/i.test(text)) line.style.borderLeftColor='#ffcc33';
    killContainer.appendChild(line);
    requestAnimationFrame(()=>{ line.style.transform='translateX(0)'; line.style.opacity='1'; });
    while(killContainer.children.length>3){
      killContainer.removeChild(killContainer.firstChild);
    }
    setTimeout(()=>{ line.style.opacity='0'; line.style.transform='translateX(12px)'; }, 3000);
    setTimeout(()=>{ if(line.parentNode) line.parentNode.removeChild(line); }, 3400);
  }
  function ensureDmgContainer(){
    if(dmgContainer) return;
    dmgContainer=document.createElement('div');
    dmgContainer.id='damageNumbers';
    dmgContainer.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:8;overflow:hidden;';
    ui.appendChild(dmgContainer);
  }
  function spawnDamageNumber(amount, opts={}){
    ensureDmgContainer();
    const isHeal = opts.heal || amount>0 && opts.isHeal;
    const val = Math.abs(Math.round(amount));
    if(val===0) return;
    const el=document.createElement('div');
    const sign = isHeal ? '+' : '-';
    el.textContent=sign+val;
    const rx = opts.x!=null ? opts.x : 50 + (Math.random()*14-7);
    const ry = opts.y!=null ? opts.y : 50 + (Math.random()*10-5);
    el.style.cssText='position:absolute;left:'+rx+'%;top:'+ry+'%;font-size:'+(isHeal?18:20)+'px;font-weight:900;letter-spacing:0.3px;color:'+(isHeal?'#3cff7a':'#ff3a3a')+';text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 10px '+(isHeal?'rgba(60,255,122,0.45)':'rgba(255,58,58,0.5)')+';transform:translate(-50%,-50%) scale(0.82);opacity:0;transition:transform 0.72s cubic-bezier(0.18,0.82,0.32,1), opacity 0.42s;will-change:transform,opacity;';
    // crit styling
    if(val>=20) el.style.fontSize='26px';
    dmgContainer.appendChild(el);
    requestAnimationFrame(()=> requestAnimationFrame(()=>{
      el.style.opacity='1';
      el.style.transform='translate(-50%, calc(-50% - 62px)) scale(1.08)';
    }));
    setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translate(-50%, calc(-50% - 78px)) scale(1.0)'; }, 520);
    setTimeout(()=>{ if(el.parentNode) el.parentNode.removeChild(el); }, 980);
  }
  function ensureCrosshair(){
    const old=document.getElementById('crosshair');
    if(!old) return null;
    if(old.dataset.upgraded==='1') return old;
    old.dataset.upgraded='1';
    old.innerHTML='';
    old.style.cssText='position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;pointer-events:none;z-index:5;';
    function mkLine(w,h){
      const d=document.createElement('div');
      d.style.cssText='position:absolute;background:#fff;box-shadow:0 0 4px rgba(0,0,0,0.75), 0 0 1px rgba(0,0,0,0.95);border-radius:1px;';
      d.style.width=w+'px'; d.style.height=h+'px';
      return d;
    }
    const top = mkLine(2,12);
    const bottom = mkLine(2,12);
    const left = mkLine(12,2);
    const right = mkLine(12,2);
    const dot=document.createElement('div');
    dot.style.cssText='position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;background:#fff;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,0,0,0.35);';
    old.append(top,bottom,left,right,dot);
    crossArms={top,bottom,left,right,dot,wrap:old};
    // init positions gap 22
    updateCrosshairVisual(22);
    return old;
  }
  function updateCrosshairVisual(gap){
    if(!crossArms) return;
    const g=Math.round(gap);
    const cx=20, cy=20;
    crossArms.top.style.left=(cx-1)+'px'; crossArms.top.style.top=(cy - g - 12)+'px';
    crossArms.bottom.style.left=(cx-1)+'px'; crossArms.bottom.style.top=(cy + g)+'px';
    crossArms.left.style.left=(cx - g - 12)+'px'; crossArms.left.style.top=(cy-1)+'px';
    crossArms.right.style.left=(cx + g)+'px'; crossArms.right.style.top=(cy-1)+'px';
    // dot stays centered, scale slightly with ADS
    const dotScale = g<8 ? 0.85 : 1;
    crossArms.dot.style.transform='scale('+dotScale+')';
    crossArms.dot.style.opacity= g<8 ? '0.92' : '1';
  }
  // ADS tracking
  window.addEventListener('mousedown', e=>{ if(e.button===2) isADS=true; });
  window.addEventListener('mouseup', e=>{ if(e.button===2) isADS=false; });
  window.addEventListener('contextmenu', e=> e.preventDefault());
  // also try to sync with weapons ADT via polling look at camera fov? fallback
  let fovPollT=0;
  function resolveADS(){
    try{
      if(weapons && typeof weapons.isAiming==='boolean') return weapons.isAiming;
      if(weapons && typeof weapons.aiming==='boolean') return weapons.aiming;
      if(weapons && weapons.getADS) return !!weapons.getADS();
    }catch{}
    return isADS;
  }
  function setHealth(v){
    health = Math.max(0, Math.min(100, v));
    if(elHealth) elHealth.textContent = String(Math.round(health));
    if(health<=0 && !isDead){
      isDead=true;
      if(elStatus) elStatus.textContent='DOWNED';
      ensureOverlay(); hitOverlay.style.opacity='0.88'; hitOverlay.style.background='rgba(80,0,0,0.72)'; hitOverlay.style.transition='opacity 0.22s';
      setTimeout(()=>{
        const center=document.getElementById('center');
        if(!center) return;
        center.style.display='flex';
        center.innerHTML='<h1 style="color:#ff3a3a">ELIMINATED</h1><p>Click to respawn</p><button id="respawnBtn" style="padding:14px 28px;font-size:18px;background:#e63946;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">RESPAWN</button>';
        const btn=document.getElementById('respawnBtn');
        if(btn) btn.onclick=()=>{
          health=100; isDead=false; if(elHealth) elHealth.textContent='100'; if(hitOverlay) hitOverlay.style.opacity='0'; center.style.display='none'; if(controls && controls.getPosition) controls.reset && controls.reset(); else location.reload();
          if(elStatus) elStatus.textContent='READY';
        };
      },420);
    }
    // update health bar color? low health pulse handled in update()
  }
  function takeDamage(amt, dir){
    if(isDead || damageCooldown>0) return;
    damageCooldown=0.18;
    setHealth(health - amt);
    spawnDamageNumber(amt, {y: 52 + Math.random()*6});
    try{ if(window.__audio && window.__audio.playHit) window.__audio.playHit(); }catch(e){}
    ensureOverlay(); ensureHitDirs();
    hitOverlay.style.opacity='0.58'; hitOverlay.style.transition='opacity 0.08s';
    flashHitDir(dir);
    // Wave3.5 chromatic lens punch — COD hit lens dispersion 2.2 over 260ms
    window.__chromaticHit = 2.2;
    try{ if(hitOverlay) hitOverlay.style.filter='contrast(1.12) saturate(1.15)'; setTimeout(()=>{ if(hitOverlay) hitOverlay.style.filter='none'; }, 260); }catch{}
    // camera punch
    try{
      const cam=controls && controls.camera;
      if(cam){
        const punchX = 0.06 + Math.random()*0.02;
        const punchY = (Math.random()-0.5)*0.04;
        cam.rotation.x += punchX;
        cam.rotation.y += punchY;
        cam.rotation.z += (Math.random()-0.5)*0.025;
        setTimeout(()=>{ try{ cam.rotation.x -= punchX; cam.rotation.y -= punchY; cam.rotation.z -= (Math.random()-0.5)*0.025; }catch{} }, 72);
        // fov kick
        if(cam.fov){ const origFov=cam.fov; cam.fov=Math.min(88, origFov+1.2); cam.updateProjectionMatrix(); setTimeout(()=>{ cam.fov=origFov; cam.updateProjectionMatrix(); }, 90); }
      }
    }catch{}
    setTimeout(()=>{ if(hitOverlay && !isDead) hitOverlay.style.opacity='0'; },142);
  }
  function heal(amt){
    if(isDead) return;
    setHealth(health+amt);
    spawnDamageNumber(amt, {heal:true, isHeal:true});
  }
  if(controls){
    controls.takeDamage = takeDamage;
    controls.heal = heal;
    controls.getHealth = ()=>health;
    controls.reset = controls.reset || (()=>{ setHealth(100); });
    const origUpdate = controls.update.bind(controls);
    controls.update = (dt)=>{ origUpdate(dt); if(damageCooldown>0) damageCooldown=Math.max(0,damageCooldown-dt); };
  }
  window.__hudTakeDamage = takeDamage;
  window.__hudHeal = heal;
  window.__hudKill = addKill;
  window.__hudPushKill = addKill;
  window.__hudDamageNumber = spawnDamageNumber;
  window.__killfeed = {push:addKill, addKill};
  // hook weapons kill if enemies emit: expose for enemies to call
  window.__onEnemyKilled = (name, isHeadshot)=>{
    const txt = isHeadshot ? name+' HEADSHOT' : 'ELIMINATED '+name;
    addKill(txt);
    spawnDamageNumber(isHeadshot? 45 : 28, {x: 58 + Math.random()*10, y: 46 + Math.random()*8});
  };
  let t=0;
  ensureCrosshair();
  ensureKillfeed();
  ensureDmgContainer();
  function update(dt){
    t+=dt;
    // Wave3.5 sprint vignette 0.52Hz breath — COD sprint peripheral pulse
    try{
      const isSprinting = controls && (controls.velocity && controls.velocity.length && controls.velocity.length()>5) || (document.pointerLockElement && window.__isSprinting);
      if(!hitOverlay) ensureOverlay();
      // hook sprint state via key sniff
      const sprintKey = window.__sprintHeld;
      if(sprintKey && health>35 && !isDead && hitOverlay.style.opacity==='0'){
        const breath = Math.sin(t*3.267)*0.5+0.5; // 0.52Hz * 2PI = 3.267
        hitOverlay.style.opacity=String(0.035 + breath*0.018);
        hitOverlay.style.background='radial-gradient(ellipse at center, transparent 62%, rgba(20,18,22,'+(0.08+breath*0.04)+') 95%)';
        hitOverlay.style.filter='blur('+ (breath*0.4) +'px)';
      } else if(health>=35 && hitOverlay.style.opacity!=='0' && damageCooldown<=0 && !window.__chromaticHit){
        // only clear if not in damage flash
        // keep vignette off but not override damage handled
      }
    }catch(e){}
    // low health height-fog pulse
    if(health<35 && !isDead){
      ensureOverlay();
      const pulse=0.18+Math.sin(t*4.2)*0.08 + Math.sin(t*7)*0.03;
      const intensity = (1-health/35);
      hitOverlay.style.opacity=String(pulse*intensity*0.92 + 0.06);
      hitOverlay.style.background='linear-gradient(to top, rgba(180,0,14,'+(0.32+pulse*0.28)+') 0%, rgba(150,0,10,'+(0.18+pulse*0.14)+') 22%, rgba(110,0,8,0.10) 42%, transparent 70%), radial-gradient(ellipse at center, transparent 56%, rgba(255,14,14,'+(0.18+pulse*0.18)+') 100%)';
    } else if(!isDead && hitOverlay && hitOverlay.style.opacity!=='0' && damageCooldown<=0){
      // keep low health vignette off but not override damage flash handled via timeout
    }
    // crosshair gap lerp
    const ads = resolveADS();
    const target = ads ? 4 : 22;
    const lerp = 14;
    currentGap += (target - currentGap) * Math.min(1, dt*lerp);
    // add subtle recoil bloom: if weapons firing, enlarge gap slightly
    let bloom=0;
    try{
      if(weapons && weapons.getAmmo){
        const a=weapons.getAmmo();
        // bloom when firing - detect via ammo changing? fallback approx
      }
    }catch{}
    // apply visual
    updateCrosshairVisual(currentGap + bloom);
    // fade crosshair when ADS (extra polish vs COD: 0.55 scale already in weapons, we handle opacity)
    if(crossArms){
      const invAds = ads ? 0.32 : 1;
      crossArms.wrap.style.opacity=String(0.96*invAds + (ads?0.2:0));
      // subtle breathing scale
      const breath = Math.sin(t*1.2)*0.015;
      crossArms.wrap.style.transform='translate(-50%,-50%) scale('+(1+breath)+')';
    }
  }
  
  // --- ZOMBIE HUD EXTENSION (COD WaW/BO style) - light patch, opt-in ---
  // zombies.js also creates its own HUD; this ensures HUD hooks exist even if zombies.js loaded standalone
  function ensureZombieHUD(){
    if(document.getElementById('zombieHUD')) return document.getElementById('zombieHUD');
    const hudWrap = document.createElement('div');
    hudWrap.id='zombieHUD';
    hudWrap.style.cssText='position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;';
    const rEl=document.createElement('div'); rEl.id='zRound'; rEl.style.cssText='font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);'; rEl.textContent='ROUND 1';
    const lEl=document.createElement('div'); lEl.id='zLeft'; lEl.style.cssText='font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);'; lEl.textContent='ZOMBIES LEFT: 0';
    const pEl=document.createElement('div'); pEl.id='zPoints'; pEl.style.cssText='font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);'; pEl.textContent='POINTS: 0';
    hudWrap.append(rEl,lEl,pEl);
    const perks=document.createElement('div'); perks.id='zPerks'; perks.style.cssText='display:flex;gap:8px;margin-top:10px;';
    function mkPerk(icon,label,color){ const d=document.createElement('div'); d.style.cssText='display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid '+color+';border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);'; const ic=document.createElement('div'); ic.style.cssText='width:22px;height:22px;border-radius:4px;background:'+color+';display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;'; ic.textContent=icon; const tx=document.createElement('div'); tx.style.cssText='font-size:10px;font-weight:800;letter-spacing:0.5px;color:'+color+';line-height:1;'; tx.innerHTML=label+'<br><span style="opacity:0.7;font-weight:600">'+(label==='JUGGER-NOG'?'HP+':'RELOAD+')+'</span>'; d.append(ic,tx); return d; }
    const jg=mkPerk('♥','JUGGER-NOG','#e63946'); const sc=mkPerk('⚡','SPEED COLA','#2ec4b6'); jg.style.opacity='0.82'; sc.style.opacity='0.82'; jg.title='Juggernog - Placeholder perk'; sc.title='Speed Cola - Placeholder perk'; perks.append(jg,sc); hudWrap.appendChild(perks);
    const ui=document.getElementById('ui')||document.body; ui.appendChild(hudWrap);
    const banner=document.createElement('div'); banner.id='zRoundBanner'; banner.style.cssText='position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;'; banner.textContent='ROUND 1'; ui.appendChild(banner); hudWrap._banner=banner; hudWrap._els={rEl,lEl,pEl};
    return hudWrap;
  }
  function updateZombieHUD(roundVal, leftVal, pointsVal){ const h=document.getElementById('zombieHUD'); if(!h){ ensureZombieHUD(); return updateZombieHUD(roundVal,leftVal,pointsVal);} const rE=document.getElementById('zRound'); if(rE) rE.textContent='ROUND '+roundVal; const lE=document.getElementById('zLeft'); if(lE) lE.textContent='ZOMBIES LEFT: '+leftVal; const pE=document.getElementById('zPoints'); if(pE) pE.textContent='POINTS: '+pointsVal; }
  function showZombieBanner(text){ const b=document.getElementById('zRoundBanner')|| (ensureZombieHUD()&&document.getElementById('zRoundBanner')); if(!b) return; b.textContent=text; b.style.opacity='1'; b.style.transform='translate(-50%,-50%) scale(1.08)'; setTimeout(()=>{ b.style.opacity='0'; b.style.transform='translate(-50%,-50%) scale(0.88)'; }, 1800); }
  // expose for zombies.js interop
  window.__ensureZombieHUD = ensureZombieHUD; window.__updateZombieHUD = updateZombieHUD; window.__showZombieBanner = showZombieBanner;
  // inject minimal CSS for perks icons if not present
  if(!document.getElementById('zombieHUDStyle')){ const s=document.createElement('style'); s.id='zombieHUDStyle'; s.textContent="#zombieHUD{font-family:system-ui,monospace} #zRoundBanner{pointer-events:none} #zPerks div{transition:opacity 0.2s}"; document.head.appendChild(s); }

  (function loop(){ requestAnimationFrame(loop); update(0.016); })();
  return { takeDamage, heal, getHealth:()=>health, update, addKill, spawnDamageNumber };
}
