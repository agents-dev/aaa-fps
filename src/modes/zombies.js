import * as THREE from 'three';
import { QUALITY } from '../core/quality.js';
const IS_LOW = QUALITY.tier === 'low';

export function createZombiesMode(scene, level, controls, weapons){
  // active flag
  let round = 0;
  let points = 500;
  let zombies = [];
  let zombiesToSpawn = 0;
  let zombiesSpawned = 0;
  let zombiesKilledThisRound = 0;
  let state = 'idle'; // idle, spawning, active, intermission
  let interTimer = 0;
  let spawnTimer = 0;
  let isActiveFlag = false;
  let timeAcc = 0;
  let barriers = [];
  let mysteryBox = null;
  let mysteryLight = null;
  let hud = null;
  let perkEls = null;
  let barrierPrompt = null;
  let repairHold = 0;
  let repairingBarrier = null;
  let keysF = false;
  const MAX_ACTIVE_LOW = 18;
  const MAX_ACTIVE_HIGH = 32;
  const INTER_ROUND = 5;
  let totalScore = points;
  let zombieIdCounter = 0;
  let spawnPointsCache = null;
  // --- helpers ---
  function getZombieStats(r){
    const base = 45 + 10 * r;
    const scaled = Math.floor(base * Math.pow(1.12, Math.max(0, r-1)));
    const speed = Math.min(2.8, 1.2 + 0.06 * r);
    return { health: scaled, speed };
  }
  function getSpawnPoints(){
    if(spawnPointsCache) return spawnPointsCache;
    let basePoints = [];
    try{
      if(level && typeof level.getSpawnPointsTerrain === 'function'){
        basePoints = level.getSpawnPointsTerrain();
      } else if(level && Array.isArray(level.spawnPoints)){
        basePoints = level.spawnPoints;
      }
    }catch{}
    // ensure 8-12 around perimeter
    const perimeter = [];
    const count = IS_LOW ? 8 : 10;
    for(let i=0;i<count;i++){
      const ang = (i/count)*Math.PI*2 + Math.random()*0.22;
      const r = 26 + Math.random()*1.8;
      const x = Math.cos(ang)*r;
      const z = Math.sin(ang)*r;
      const cx = Math.max(-28, Math.min(28, x));
      const cz = Math.max(-28, Math.min(28, z));
      perimeter.push(new THREE.Vector3(cx, 0.1, cz));
    }
    // mix with basePoints if they exist and are not on perimeter
    if(basePoints && basePoints.length){
      // take up to 4 from basePoints
      for(let i=0;i<Math.min(4, basePoints.length); i++){
        const p = basePoints[i];
        if(p && p.isVector3) perimeter.push(p.clone());
        else if(p && typeof p.x==='number') perimeter.push(new THREE.Vector3(p.x, 0.1, p.z));
      }
    }
    // dedup and clamp
    spawnPointsCache = perimeter.slice(0, IS_LOW? 8 : 12);
    return spawnPointsCache;
  }
  // ensure HUD
  function ensureHUD(){
    if(hud) return;
    // main container
    hud = document.createElement('div');
    hud.id = 'zombieHUD';
    hud.style.cssText = 'position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;';
    const roundEl = document.createElement('div');
    roundEl.id='zRound';
    roundEl.style.cssText='font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);';
    roundEl.textContent='ROUND 0';
    const leftEl = document.createElement('div');
    leftEl.id='zLeft';
    leftEl.style.cssText='font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);';
    leftEl.textContent='ZOMBIES LEFT: 0';
    const pointsEl = document.createElement('div');
    pointsEl.id='zPoints';
    pointsEl.style.cssText='font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);';
    pointsEl.textContent='POINTS: 500';
    hud.append(roundEl, leftEl, pointsEl);
    // perks row
    const perks = document.createElement('div');
    perks.id='zPerks';
    perks.style.cssText='display:flex;gap:8px;margin-top:10px;';
    function perk(icon,label,color){
      const d=document.createElement('div');
      d.style.cssText='display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid '+color+';border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);';
      const ic=document.createElement('div');
      ic.style.cssText='width:22px;height:22px;border-radius:4px;background:'+color+';display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;';
      ic.textContent=icon;
      const tx=document.createElement('div');
      tx.style.cssText='font-size:10px;font-weight:800;letter-spacing:0.5px;color:'+color+';line-height:1;';
      tx.innerHTML=label+'<br><span style="opacity:0.7;font-weight:600">'+(label==='JUGGER-NOG' ? 'HP+' : 'RELOAD+')+'</span>';
      d.append(ic,tx);
      return d;
    }
    const p1=perk('♥','JUGGER-NOG','#e63946');
    const p2=perk('⚡','SPEED COLA','#2ec4b6');
    // add faint disabled style (placeholder)
    p1.style.opacity='0.82'; p2.style.opacity='0.82';
    p1.title='Juggernog - Placeholder perk (increased health)';
    p2.title='Speed Cola - Placeholder perk (faster reload)';
    perks.append(p1,p2);
    hud.appendChild(perks);
    perkEls={roundEl,leftEl,pointsEl,perks};
    // attach to #ui or body
    const ui=document.getElementById('ui');
    if(ui) ui.appendChild(hud);
    else document.body.appendChild(hud);
    // round banner centered
    const banner=document.createElement('div');
    banner.id='zRoundBanner';
    banner.style.cssText='position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;';
    banner.textContent='ROUND 1';
    if(ui) ui.appendChild(banner);
    else document.body.appendChild(banner);
    // zombies left small counter already, barrier prompt
    barrierPrompt=document.createElement('div');
    barrierPrompt.id='zBarrierPrompt';
    barrierPrompt.style.cssText='position:absolute;left:50%;top:62%;transform:translateX(-50%);z-index:7;pointer-events:none;background:rgba(10,14,18,0.88);color:#fff;padding:8px 14px;border-radius:6px;font-size:12px;font-weight:800;letter-spacing:0.6px;border:1px solid rgba(255,255,255,0.18);backdrop-filter:blur(6px);opacity:0;transition:opacity 0.18s;box-shadow:0 4px 14px rgba(0,0,0,0.5);';
    barrierPrompt.textContent='Hold [F] to Repair Barrier';
    if(ui) ui.appendChild(barrierPrompt);
    else document.body.appendChild(barrierPrompt);
    hud._banner=banner;
  }
  function showRoundBanner(r){
    ensureHUD();
    const b=hud._banner;
    if(!b) return;
    b.textContent='ROUND '+r;
    b.style.opacity='1';
    b.style.transform='translate(-50%,-50%) scale(1.08)';
    // flash sound placeholder
    try{ if(window.__audio && window.__audio.playHit) window.__audio.playHit(); }catch{}
    setTimeout(()=>{ b.style.opacity='0'; b.style.transform='translate(-50%,-50%) scale(0.88)'; }, 1800);
    // also killfeed
    try{ if(window.__hudPushKill) window.__hudPushKill('ROUND '+r); }catch{}
  }
  function updateHUD(){
    if(!perkEls) ensureHUD();
    if(perkEls){
      perkEls.roundEl.textContent='ROUND '+round;
      const alive = zombies.filter(z=>!z.isDead).length;
      const remaining = Math.max(0, zombiesToSpawn - zombiesKilledThisRound);
      const totalLeft = alive + (zombiesToSpawn - zombiesSpawned >0 ? zombiesToSpawn - zombiesSpawned : 0);
      // For display, zombiesLeft = alive + queued
      perkEls.leftEl.textContent='ZOMBIES LEFT: '+(alive + Math.max(0, zombiesToSpawn - zombiesSpawned));
      // colour pulse if low
      perkEls.leftEl.style.color = totalLeft<=3 && totalLeft>0 ? '#ffcc33' : '#fff';
      perkEls.pointsEl.textContent='POINTS: '+points;
    }
  }
  function addPoints(v, opts){
    points=Math.max(0, points+v);
    updateHUD();
    // small popup near crosshair or pointsEl
    if(opts && opts.hit){
      try{ if(window.__hudDamageNumber) window.__hudDamageNumber(v, {x: 50+ (Math.random()*10-5), y:48}); }catch{}
    }
    if(v>0){
      if(perkEls && perkEls.pointsEl){
        perkEls.pointsEl.style.transform='scale(1.12)';
        perkEls.pointsEl.style.color='#a8ff7a';
        setTimeout(()=>{ if(perkEls.pointsEl){ perkEls.pointsEl.style.transform='scale(1)'; perkEls.pointsEl.style.color='#7CFF7A'; } }, 140);
      }
    }
  }
  // --- zombie materials ---
  function makeTatteredTexture(){
    const SZ = IS_LOW ? 128 : 256;
    const c=document.createElement('canvas'); c.width=c.height=SZ; const ctx=c.getContext('2d');
    // base grey-green drab
    ctx.fillStyle='#5e6b5a'; ctx.fillRect(0,0,SZ,SZ);
    // camo-ish blotches desaturated
    const cols=['#4a5546','#6b7a65','#3f463d','#7a8a74','#525e4f'];
    for(let i=0;i<(IS_LOW?18:42);i++){
      const x=Math.random()*SZ,y=Math.random()*SZ,rx=9+Math.random()*20,ry=6+Math.random()*14;
      ctx.fillStyle=cols[i%cols.length]; ctx.globalAlpha=0.45+Math.random()*0.25; ctx.beginPath(); ctx.ellipse(x,y,rx,ry,Math.random()*Math.PI,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
    // noise
    for(let i=0;i<(IS_LOW?900:2600);i++){ const x=Math.random()*SZ,y=Math.random()*SZ; ctx.fillStyle=Math.random()<0.5?'rgba(0,0,0,0.09)':'rgba(255,255,255,0.06)'; ctx.fillRect(x,y,1,1); }
    // blood stains
    for(let i=0;i<4;i++){
      const x=Math.random()*SZ*0.7+SZ*0.15, y=Math.random()*SZ*0.6+SZ*0.2, r=7+Math.random()*14;
      const g=ctx.createRadialGradient(x,y,0,x,y,r);
      g.addColorStop(0,'rgba(92,18,18,0.52)'); g.addColorStop(0.45,'rgba(72,14,14,0.32)'); g.addColorStop(1,'rgba(72,14,14,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
      // drip
      ctx.fillStyle='rgba(88,18,18,0.38)'; ctx.fillRect(x-1.2,y+r*0.3,2.2, 6+Math.random()*9);
    }
    // tattered tears: dark lines + edge fray
    ctx.strokeStyle='rgba(22,26,22,0.55)'; ctx.lineWidth=1.1;
    for(let i=0;i<3;i++){
      const x=Math.random()*SZ, y=Math.random()*SZ*0.7+10;
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+ 8+Math.random()*16, y+2+Math.random()*6); ctx.lineTo(x+ 4+Math.random()*12, y+ 10+Math.random()*10); ctx.stroke();
      ctx.fillStyle='rgba(18,22,18,0.9)'; ctx.beginPath(); ctx.arc(x+4,y+6,1.5,0,Math.PI*2); ctx.fill();
    }
    // stitch lines
    ctx.strokeStyle='rgba(0,0,0,0.18)'; ctx.lineWidth=0.6; ctx.setLineDash([3,4]);
    for(let y=12;y<SZ;y+=28){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(SZ,y); ctx.stroke(); }
    ctx.setLineDash([]);
    const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=IS_LOW?1:4; return t;
  }
  const texTattered = makeTatteredTexture();
  // materials
  const matZombieSkin = new THREE.MeshStandardMaterial({ color:0x8a9b86, roughness:0.88, metalness:0.03});
  const matZombieSkinDark = new THREE.MeshStandardMaterial({ color:0x6e7d6b, roughness:0.90, metalness:0.02});
  const matZombieUniform = new THREE.MeshStandardMaterial({ map: texTattered, roughness:0.96, metalness:0.02, color:0xffffff });
  const matZombieUniformDark = new THREE.MeshStandardMaterial({ map: texTattered.clone(), roughness:0.96, metalness:0.02, color:0xdddddd });
  try{ matZombieUniformDark.map.repeat.set(0.9,0.9); }catch{}
  const matZombieEye = new THREE.MeshStandardMaterial({ color:0xff2200, emissive:0xff1a08, emissiveIntensity:2.2, roughness:0.35, metalness:0.1 });
  const matZombieEyeGlow = new THREE.MeshBasicMaterial({ color:0xff3a12, transparent:true, opacity:0.72});
  const matBlood = new THREE.MeshStandardMaterial({ color:0x4a1010, roughness:0.42, metalness:0.08, emissive:0x2a0a0a, emissiveIntensity:0.22});
  const matBone = new THREE.MeshStandardMaterial({ color:0xc8bca8, roughness:0.78, metalness:0.05});
  // reusable geos
  function capsule(r,l){ if(THREE.CapsuleGeometry) return new THREE.CapsuleGeometry(r,l, IS_LOW?4:6, IS_LOW?6:10); return new THREE.CylinderGeometry(r,r,l, IS_LOW?6:10); }
  const gHead = new THREE.SphereGeometry(0.19, IS_LOW?7:14, IS_LOW?5:10);
  const gTorso = new THREE.BoxGeometry(0.52, 0.60, 0.30);
  const gArmUp = capsule(0.095, 0.26);
  const gArmLo = capsule(0.082, 0.24);
  const gLegUp = capsule(0.128, 0.36);
  const gLegLo = capsule(0.11, 0.34);
  const gHand = new THREE.SphereGeometry(0.082, IS_LOW?5:8, IS_LOW?4:6);
  const gBoot = new THREE.BoxGeometry(0.17, 0.11, 0.27);
  const gEye = new THREE.SphereGeometry(0.038, IS_LOW?4:6, IS_LOW?4:6);
  // ---- build zombie mesh ----
  function buildZombieGroup(){
    const root = new THREE.Group();
    // torso
    const torso = new THREE.Mesh(gTorso, matZombieUniform.clone());
    torso.position.set(0, 1.08, 0); torso.castShadow = QUALITY.tier!=='low'; torso.receiveShadow = true;
    // variation
    torso.material.color.offsetHSL((Math.random()-0.5)*0.04, 0, (Math.random()-0.5)*0.08);
    // add blood splash on chest
    const chestBlood = new THREE.Mesh(new THREE.CircleGeometry(0.11, 8), matBlood.clone());
    chestBlood.position.set(0.06, 0.08, 0.151); chestBlood.rotation.y=0; // front
    if(Math.random()<0.72) torso.add(chestBlood);
    root.add(torso);
    // head
    const headGroup = new THREE.Group(); headGroup.position.set(0,0.38,0.02); torso.add(headGroup);
    const head = new THREE.Mesh(gHead, matZombieSkin.clone());
    head.position.set(0,0.13,0.02); head.castShadow=true; headGroup.add(head);
    // random skin variation + damage
    const dmg = Math.random();
    if(dmg<0.35){
      // skull exposed patch
      const exposed = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5, 0, Math.PI*2, 0, Math.PI*0.55), matBone.clone());
      exposed.position.set(0.08,0.18,0.08); exposed.rotation.z=-0.35; exposed.scale.set(1,0.9,0.8); headGroup.add(exposed);
      head.material.color.setHex(0x7a8a78);
    } else if(dmg<0.55){
      // jaw missing / crooked
      head.scale.set(1,0.92,0.96);
      head.position.y=0.10;
    }
    // glowing eyes
    const eyeL = new THREE.Mesh(gEye, matZombieEye.clone());
    eyeL.position.set(-0.068, 0.14, 0.145); headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x=0.068; headGroup.add(eyeR);
    // eye glow sprites (additive)
    const glowL = new THREE.Mesh(new THREE.SphereGeometry(0.058, 6,6), matZombieEyeGlow.clone());
    glowL.position.copy(eyeL.position); glowL.position.z+=0.02; glowL.scale.set(1,1,0.6); headGroup.add(glowL);
    const glowR = glowL.clone(); glowR.position.copy(eyeR.position); glowR.position.z+=0.02; headGroup.add(glowR);
    // point light for eyes (only on high, one per zombie would be heavy; share single? we will add small point light flicker on high only for nearest zombie)
    // mouth/jaw drop
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.04, 0.06), matZombieSkinDark.clone());
    jaw.position.set(0, 0.01, 0.11); headGroup.add(jaw);
    headGroup.userData.jaw=jaw; headGroup.userData.eyes=[eyeL,eyeR]; headGroup.userData.glow=[glowL,glowR];
    // limbs - tattered uniform with limb damage
    // arms
    const shoulderL = new THREE.Group(); shoulderL.position.set(-0.31,0.14,0); torso.add(shoulderL);
    const armUpL = new THREE.Mesh(gArmUp, matZombieUniform.clone());
    armUpL.position.set(0,-0.14,0); armUpL.castShadow=true; shoulderL.add(armUpL);
    const elbowL = new THREE.Group(); elbowL.position.set(0,-0.26,0); shoulderL.add(elbowL);
    const armLoL = new THREE.Mesh(gArmLo, matZombieSkin.clone());
    // limb damage chance: exposed bone
    let isExposedL = Math.random()<0.18;
    if(isExposedL){ armLoL.material = matBone.clone(); armLoL.scale.set(0.88,0.92,0.88); }
    armLoL.position.set(0,-0.15,0); elbowL.add(armLoL);
    const handL = new THREE.Mesh(gHand, isExposedL? matBone.clone(): matZombieSkin.clone());
    handL.position.set(0,-0.22,0); elbowL.add(handL);
    if(isExposedL){
      const blood=new THREE.Mesh(new THREE.SphereGeometry(0.05,5,5), matBlood.clone()); blood.position.set(0,0.06,0); handL.add(blood);
    }
    const shoulderR = new THREE.Group(); shoulderR.position.set(0.31,0.14,0); torso.add(shoulderR);
    const armUpR = new THREE.Mesh(gArmUp, matZombieUniform.clone());
    armUpR.position.set(0,-0.14,0); armUpR.castShadow=true; shoulderR.add(armUpR);
    const elbowR = new THREE.Group(); elbowR.position.set(0,-0.26,0); shoulderR.add(elbowR);
    const armLoR = new THREE.Mesh(gArmLo, matZombieSkin.clone());
    let isExposedR = Math.random()<0.18;
    if(isExposedR){ armLoR.material = matBone.clone(); armLoR.scale.set(0.88,0.92,0.88); }
    armLoR.position.set(0,-0.15,0); elbowR.add(armLoR);
    const handR = new THREE.Mesh(gHand, isExposedR? matBone.clone(): matZombieSkin.clone());
    handR.position.set(0,-0.22,0); elbowR.add(handR);
    // legs
    const hipL = new THREE.Group(); hipL.position.set(-0.16,-0.30,0); torso.add(hipL);
    const legUpL = new THREE.Mesh(gLegUp, matZombieUniformDark.clone());
    legUpL.position.set(0,-0.20,0); legUpL.castShadow=true; hipL.add(legUpL);
    const kneeL = new THREE.Group(); kneeL.position.set(0,-0.38,0); hipL.add(kneeL);
    const legLoL = new THREE.Mesh(gLegLo, matZombieUniformDark.clone());
    legLoL.position.set(0,-0.18,0); kneeL.add(legLoL);
    const bootL = new THREE.Mesh(gBoot, new THREE.MeshStandardMaterial({color:0x1a1c1a, roughness:0.82}));
    bootL.position.set(0,-0.40,0.05); kneeL.add(bootL);
    // tatter strip hanging from leg
    if(Math.random()<0.55){
      const strip=new THREE.Mesh(new THREE.PlaneGeometry(0.09,0.22), matZombieUniform.clone()); strip.position.set(0.08,-0.12,0.12); strip.rotation.y=Math.PI; strip.rotation.z=0.15; strip.side=THREE.DoubleSide; legUpL.add(strip);
    }
    const hipR = new THREE.Group(); hipR.position.set(0.16,-0.30,0); torso.add(hipR);
    const legUpR = new THREE.Mesh(gLegUp, matZombieUniformDark.clone());
    legUpR.position.set(0,-0.20,0); legUpR.castShadow=true; hipR.add(legUpR);
    const kneeR = new THREE.Group(); kneeR.position.set(0,-0.38,0); hipR.add(kneeR);
    const legLoR = new THREE.Mesh(gLegLo, matZombieUniformDark.clone());
    legLoR.position.set(0,-0.18,0); kneeR.add(legLoR);
    const bootR = bootL.clone(); bootR.position.set(0,-0.40,0.05); kneeR.add(bootR);
    if(Math.random()<0.45){
      const strip2=new THREE.Mesh(new THREE.PlaneGeometry(0.07,0.18), matZombieUniform.clone()); strip2.position.set(-0.09,-0.15,0.12); strip2.rotation.y=Math.PI; strip2.side=THREE.DoubleSide; legUpR.add(strip2);
    }
    // pack refs
    root.userData.refs = {
      torso, headGroup, head, jaw, eyes:[eyeL,eyeR], glow:[glowL,glowR],
      shoulderL, elbowL, shoulderR, elbowR,
      hipL, kneeL, hipR, kneeR, bootL, bootR
    };
    return root;
  }
  // --- barriers ---
  function createBarriers(){
    const positions = [
      {pos:[11.8,0,6.6], rot:0.12, label:'A'},
      {pos:[-9.2,0,-2.0], rot:Math.PI/2, label:'B'},
      {pos:[0.2,0,13.8], rot:0, label:'C'},
    ];
    const matWood = new THREE.MeshStandardMaterial({ color:0x8a7a5a, roughness:0.92, metalness:0.02 });
    const matWoodDark = new THREE.MeshStandardMaterial({ color:0x6b5e4a, roughness:0.96 });
    const matFrame = new THREE.MeshStandardMaterial({ color:0x5a4a32, roughness:0.90 });
    barriers=[];
    for(let i=0;i<positions.length;i++){
      const cfg=positions[i];
      const g=new THREE.Group();
      g.position.set(cfg.pos[0],0,cfg.pos[2]); g.rotation.y=cfg.rot;
      g.userData.isBarrier=true;
      g.userData.barrierId=cfg.label;
      g.userData.hp=3; g.userData.maxHp=3;
      g.userData.isDestroyed=false;
      // frame
      const frameL=new THREE.Mesh(new THREE.BoxGeometry(0.08,1.95,0.32), matFrame); frameL.position.set(-1.05,0.97,0); frameL.castShadow=true; g.add(frameL);
      const frameR=frameL.clone(); frameR.position.x=1.05; g.add(frameR);
      const frameTop=new THREE.Mesh(new THREE.BoxGeometry(2.18,0.09,0.32), matFrame); frameTop.position.set(0,1.95,0); g.add(frameTop);
      const frameBot=new THREE.Mesh(new THREE.BoxGeometry(2.18,0.08,0.32), matFrame); frameBot.position.set(0,0.05,0); g.add(frameBot);
      // planks 3 hits
      const planks=[];
      for(let pi=0;pi<3;pi++){
        const y=0.45 + pi*0.52;
        const plank=new THREE.Mesh(new THREE.BoxGeometry(1.92,0.14,0.06), pi%2? matWood: matWoodDark);
        plank.position.set(0,y,0.04); plank.castShadow=true;
        // nails
        const nail1=new THREE.Mesh(new THREE.SphereGeometry(0.02,5,5), new THREE.MeshStandardMaterial({color:0x2a2a2a})); nail1.position.set(-0.82,0,0.04); plank.add(nail1);
        const nail2=nail1.clone(); nail2.position.x=0.82; plank.add(nail2);
        // random tilt for tattered pre-damage
        plank.rotation.z=(Math.random()-0.5)*0.04;
        plank.userData.plankIndex=pi;
        g.add(plank);
        planks.push(plank);
      }
      g.userData.planks=planks;
      g.userData.framePieces=[frameL,frameR,frameTop,frameBot];
      // invisible collider box for los
      const collider=new THREE.Mesh(new THREE.BoxGeometry(2.2,1.95,0.34), new THREE.MeshStandardMaterial({visible:false}));
      collider.position.set(0,0.97,0); collider.visible=false; g.add(collider);
      // label sprite text? using canvas
      {
        const c=document.createElement('canvas'); c.width=128; c.height=32; const ctx=c.getContext('2d'); ctx.fillStyle='rgba(14,18,24,0.85)'; ctx.fillRect(0,0,128,32); ctx.fillStyle='#ff3b3b'; ctx.font='bold 14px monospace'; ctx.textAlign='center'; ctx.fillText('BARRIER '+cfg.label,64,20);
        const tex=new THREE.CanvasTexture(c);
        const sprMat=new THREE.SpriteMaterial({map:tex, transparent:true});
        const spr=new THREE.Sprite(sprMat); spr.position.set(0,2.35,0); spr.scale.set(1.6,0.4,1);
        g.add(spr);
        g.userData.labelSprite=spr;
      }
      scene.add(g);
      barriers.push(g);
      // also push to level colliders if available for player collision when intact? optional not blocking player fully
      if(level && Array.isArray(level.colliders) && g.userData.hp>0){
        // we won't add to physics colliders to avoid trapping player; zombies will path around via barrier check
      }
    }
  }
  function damageBarrier(barrier, dmg){
    if(!barrier || barrier.userData.isDestroyed) return;
    barrier.userData.hp=Math.max(0, barrier.userData.hp-dmg);
    const planks=barrier.userData.planks;
    const hp=barrier.userData.hp;
    // update planks visibility: hp 3=>3 planks, 2=>2, 1=>1, 0=>0
    for(let i=0;i<planks.length;i++){
      const p=planks[i];
      // plank i corresponds to hp threshold: if i < hp visible else debris
      if(i < hp){
        p.visible=true; p.material.opacity=1; p.material.transparent=false;
      } else {
        // hide but create debris plank fallen
        if(p.visible){
          p.visible=false;
          // spawn fallen plank
          const fallen=p.clone(); fallen.visible=true;
          fallen.position.copy(p.getWorldPosition(new THREE.Vector3()));
          // convert world to scene local
          scene.add(fallen);
          fallen.position.y=0.06; fallen.rotation.z=Math.random()*0.6-0.3; fallen.rotation.x=Math.PI/2*0.15;
          // fade after 5s? keep
          setTimeout(()=>{ if(fallen.parent) scene.remove(fallen); }, 4500);
          // spark particles
          spawnBarrierSparks(p.getWorldPosition(new THREE.Vector3()));
        }
      }
    }
    if(hp<=0){
      barrier.userData.isDestroyed=true;
      // hide label, flash
      if(barrier.userData.labelSprite) barrier.userData.labelSprite.material.opacity=0.25;
      try{ if(window.__hudPushKill) window.__hudPushKill('BARRIER '+barrier.userData.barrierId+' DESTROYED'); }catch{}
    }
  }
  function repairBarrier(barrier){
    if(!barrier) return;
    if(barrier.userData.hp>=barrier.userData.maxHp) return;
    barrier.userData.hp++;
    if(barrier.userData.isDestroyed && barrier.userData.hp>0){
      barrier.userData.isDestroyed=false;
      if(barrier.userData.labelSprite) barrier.userData.labelSprite.material.opacity=1;
    }
    const planks=barrier.userData.planks;
    const hp=barrier.userData.hp;
    for(let i=0;i<planks.length;i++){
      if(i < hp) planks[i].visible=true;
    }
    try{ if(window.__hudPushKill) window.__hudPushKill('BARRIER '+barrier.userData.barrierId+' REPAIRED'); }catch{}
    // points? prototype cost 0, maybe +10
    addPoints(10);
  }
  function spawnBarrierSparks(pos){
    const geo=new THREE.BufferGeometry();
    const cnt=6; const positions=new Float32Array(cnt*3);
    for(let i=0;i<cnt;i++){ positions[i*3]=pos.x+(Math.random()-0.5)*0.4; positions[i*3+1]=pos.y+0.2+Math.random()*0.4; positions[i*3+2]=pos.z+(Math.random()-0.5)*0.4; }
    geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
    const mat=new THREE.PointsMaterial({color:0x8a6b3a, size:0.08, transparent:true, opacity:0.9});
    const pts=new THREE.Points(geo, mat); scene.add(pts);
    let age=0; const id=setInterval(()=>{ age+=0.06; mat.opacity=Math.max(0,0.9-age*2); pts.position.y+=0.02; if(age>0.45){ clearInterval(id); scene.remove(pts); geo.dispose(); } }, 60);
  }
  // --- mystery box ---
  function createMysteryBox(){
    const pos = new THREE.Vector3(2.5, 0.45, -7.5);
    // jitter to avoid collider overlap
    pos.x += (Math.random()-0.5)*2;
    pos.z += (Math.random()-0.5)*2;
    const g=new THREE.Group(); g.position.copy(pos); g.userData.isMysteryBox=true;
    const boxMat=new THREE.MeshStandardMaterial({ color:0x1e2a3a, roughness:0.42, metalness:0.32, emissive:0x0a1a3a, emissiveIntensity:0.25 });
    const boxGlowMat=new THREE.MeshStandardMaterial({ color:0x2a4a7a, roughness:0.35, metalness:0.45, emissive:0x1a6aff, emissiveIntensity:0.85, transparent:true, opacity:0.92 });
    const base=new THREE.Mesh(new THREE.BoxGeometry(0.95,0.85,0.95), boxMat); base.position.y=0.42; base.castShadow=true; base.receiveShadow=true; g.add(base);
    const lid=new THREE.Mesh(new THREE.BoxGeometry(1.02,0.22,1.02), boxGlowMat); lid.position.y=0.96; lid.castShadow=true; g.add(lid);
    // question mark emissive plane
    {
      const c=document.createElement('canvas'); c.width=128; c.height=128; const ctx=c.getContext('2d'); ctx.clearRect(0,0,128,128);
      ctx.fillStyle='rgba(20,30,50,0.0)'; ctx.fillRect(0,0,128,128);
      ctx.shadowColor='#1a6aff'; ctx.shadowBlur=18; ctx.fillStyle='#aaccff'; ctx.font='bold 86px monospace'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('?',64,68);
      ctx.shadowBlur=0; ctx.strokeStyle='rgba(80,120,255,0.85)'; ctx.lineWidth=2.2; ctx.strokeRect(6,6,116,116);
      const tex=new THREE.CanvasTexture(c); const mat=new THREE.MeshBasicMaterial({map:tex, transparent:true, depthWrite:false});
      const plane=new THREE.Mesh(new THREE.PlaneGeometry(0.72,0.72), mat); plane.position.set(0,0.52,0.51); g.add(plane);
      const plane2=plane.clone(); plane2.rotation.y=Math.PI; plane2.position.z=-0.51; g.add(plane2);
      const plane3=plane.clone(); plane3.rotation.y=Math.PI/2; plane3.position.set(0.51,0.52,0); g.add(plane3);
      const plane4=plane.clone(); plane4.rotation.y=-Math.PI/2; plane4.position.set(-0.51,0.52,0); g.add(plane4);
      g.userData.questionPlanes=[plane,plane2,plane3,plane4];
    }
    // emissive strips
    const stripGeo=new THREE.BoxGeometry(0.08,0.65,0.02); const stripMat=new THREE.MeshStandardMaterial({color:0x1a6aff, emissive:0x1a6aff, emissiveIntensity:1.8});
    for(let i=0;i<4;i++){
      const ang=i*Math.PI/2; const strip=new THREE.Mesh(stripGeo, stripMat); strip.position.set(Math.cos(ang)*0.49,0.45, Math.sin(ang)*0.49); strip.rotation.y=-ang; g.add(strip);
    }
    // point light
    const light=new THREE.PointLight(0x1a6aff, IS_LOW?0.7:1.4, 6, 1.4);
    light.position.set(0,0.9,0); g.add(light);
    mysteryLight=light;
    // lid hinge? simple
    g.userData.base=base; g.userData.lid=lid; g.userData.light=light;
    // label
    {
      const c=document.createElement('canvas'); c.width=256; c.height=48; const ctx=c.getContext('2d'); ctx.fillStyle='rgba(10,16,28,0.88)'; ctx.fillRect(0,0,256,48); ctx.fillStyle='#7ab8ff'; ctx.font='bold 16px monospace'; ctx.textAlign='center'; ctx.fillText('MYSTERY BOX',128,18); ctx.fillStyle='rgba(180,200,255,0.85)'; ctx.font='10px monospace'; ctx.fillText('HOLD [F]  950 PTS  (PROTOTYPE FREE)',128,34);
      const tex=new THREE.CanvasTexture(c); const sprMat=new THREE.SpriteMaterial({map:tex, transparent:true}); const spr=new THREE.Sprite(sprMat); spr.position.set(0,1.75,0); spr.scale.set(2.1,0.42,1); g.add(spr); g.userData.label=spr;
    }
    scene.add(g);
    mysteryBox=g;
    // subtle float pulse will be in update
  }
  // --- zombie spawn & logic ---
  function spawnOneZombie(){
    const spCache=getSpawnPoints();
    const sp=spCache[Math.floor(Math.random()*spCache.length)].clone();
    // offset random 1.2
    sp.x+=(Math.random()-0.5)*1.2; sp.z+=(Math.random()-0.5)*1.2;
    sp.x=Math.max(-28,Math.min(28,sp.x)); sp.z=Math.max(-28,Math.min(28,sp.z));
    const stats=getZombieStats(round);
    const group=buildZombieGroup();
    group.position.copy(sp); group.position.y=0;
    group.rotation.y=Math.random()*Math.PI*2;
    // give zombie data
    const zombie={
      id: ++zombieIdCounter,
      group,
      maxHealth: stats.health,
      health: stats.health,
      speed: stats.speed,
      isDead:false,
      deathTime:0,
      hitFlash:0,
      stagger:0,
      staggerDir:new THREE.Vector3(),
      staggerSpin:0,
      walkCycle: Math.random()*Math.PI*2,
      swayOffset: Math.random()*Math.PI*2,
      attackCooldown:0,
      barrierCooldown:0,
      targetBarrier:null,
      lastDamageTime:0,
      vel: new THREE.Vector3(),
      origColors:new Map(),
    };
    // store orig colors for hit flash
    group.traverse(o=>{
      if(o.isMesh && o.material && o.material.color){
        zombie.origColors.set(o, o.material.color.clone());
        if(o.material.emissive) zombie.origColors.set(o.material, o.material.emissive.clone());
      }
    });
    // userData for weapons raycast
    group.userData.isEnemy=true;
    group.userData.isZombie=true;
    group.userData.zombieId=zombie.id;
    group.userData.hit = (dmg, point)=> handleZombieHit(zombie, dmg, point);
    // also tag children meshes for hit detection (weapons will walk up to parent)
    group.traverse(o=>{ if(o.isMesh) o.userData.isZombieMesh=true; });
    scene.add(group);
    zombies.push(group.userData._zombieRef = zombie); // optional
    // push to zombies list as object
    // we keep array of zombie objects separate
    zombies[zombies.length-1] = zombie; // actually we pushed group earlier wrong; fix
    // Correct: we already have zombies array of zombie objects; remove group ref
    // So adjust: zombies already contains zombie objects, not groups
    // The above line added group._zombieRef; we should ensure zombies array contains zombie objects only
    // So we had zombies.push(group._zombieRef) but we also need to not duplicate. Let's reset: we did zombies.push incorrectly. Let's clean:
    // Quick fix: if last element is group, replace. But we did push zombie via assignment. Let's ensure proper.
    // Actually we did: zombies.push(group._zombieRef) -> that pushes zombie object. So zombies array now has zombie object.
    // The second assignment zombies[zombies.length-1]=zombie just reassigns same. So okay.
    return zombie;
  }
  // fix spawnOne: refactor to avoid confusion - create new function wrapper
  // We'll reimplement spawnOne cleaner below override
  // But to keep code simple, we will define spawnZombieProper
  function spawnZombieProper(){
    const spCache=getSpawnPoints();
    const sp=spCache[Math.floor(Math.random()*spCache.length)].clone();
    sp.x+=(Math.random()-0.5)*1.2; sp.z+=(Math.random()-0.5)*1.2;
    sp.x=Math.max(-28,Math.min(28,sp.x)); sp.z=Math.max(-28,Math.min(28,sp.z));
    const stats=getZombieStats(round);
    const group=buildZombieGroup();
    group.position.copy(sp); group.position.y=0;
    group.rotation.y=Math.atan2((controls.getPosition().x - sp.x), (controls.getPosition().z - sp.z)) + (Math.random()-0.5)*0.6;
    const zombie={
      id: ++zombieIdCounter,
      group,
      maxHealth: stats.health,
      health: stats.health,
      speed: stats.speed,
      isDead:false,
      deathTimer:0,
      hitFlash:0,
      stagger:0,
      staggerDir:new THREE.Vector3(),
      staggerSpin:0,
      walkCycle: Math.random()*Math.PI*2,
      swayOffset: Math.random()*Math.PI*2,
      attackCooldown:0,
      barrierCooldown:0,
      barrierTarget:null,
      vel:new THREE.Vector3(),
      origColors:new Map(),
      damage: 14 + Math.floor(round*0.7),
    };
    group.traverse(o=>{ if(o.isMesh && o.material && o.material.color){ zombie.origColors.set(o, o.material.color.clone()); if(o.material.emissive) zombie.origColors.set(o.material, o.material.emissive.clone()); }});
    group.userData.isEnemy=true; group.userData.isZombie=true; group.userData.zombieId=zombie.id;
    group.userData.hit=(dmg, point)=>handleZombieHit(zombie, dmg, point);
    group.traverse(o=>{ if(o.isMesh) o.userData.isZombieMesh=true; });
    // also add hitbox sphere for easier raycast? enlarge torso? keep as is
    scene.add(group);
    zombies.push(zombie);
    return zombie;
  }
  // replace spawnOneZombie with proper
  // we will use spawnZombieProper in spawning logic
  function handleZombieHit(zombie, dmg, point){
    if(zombie.isDead) return;
    zombie.health-=dmg;
    zombie.hitFlash=0.12;
    zombie.stagger=1.8; zombie.staggerDir.set((Math.random()-0.5)*0.3,0,(Math.random()-0.5)*0.3); zombie.staggerSpin=(Math.random()-0.5)*0.8;
    zombie.lastDamageTime=performance.now();
    // points per hit
    addPoints(10, {hit:true});
    // hit flash material white
    zombie.group.traverse(o=>{
      if(o.isMesh && o.material && o.material.color){
        o.material.color.setHex(0xffffff);
        if(o.material.emissive) o.material.emissive.setHex(0x555555);
      }
    });
    // damage number
    try{ if(window.__hudDamageNumber) window.__hudDamageNumber(dmg, {x: 52+Math.random()*8, y:48}); }catch{}
    if(zombie.health<=0){
      killZombie(zombie, point);
    } else {
      // slight knockback
      const playerPos=controls.getPosition();
      const dir=new THREE.Vector3().subVectors(zombie.group.position, playerPos).normalize();
      dir.y=0;
      zombie.group.position.addScaledVector(dir, 0.18);
    }
  }
  function killZombie(zombie, point){
    if(zombie.isDead) return;
    zombie.isDead=true;
    zombie.deathTimer=0;
    zombiesKilledThisRound++;
    addPoints(60);
    updateHUD();
    // death animation: fall over
    zombie.group.rotation.z= (Math.random()<0.5? 1: -1)* (0.2+Math.random()*0.35);
    zombie.group.rotation.x= Math.PI/2*0.22;
    // stagger strong
    zombie.stagger=3.2; zombie.staggerSpin=(Math.random()-0.5)*1.2;
    // disable collision raycast? keep but isDead prevents movement/attack
    // spawn blood pool
    spawnDeathEffects(zombie.group.position.clone(), point);
    // killfeed
    try{ if(window.__hudPushKill) window.__hudPushKill('ZOMBIE ELIMINATED'); if(window.__onEnemyKilled) window.__onEnemyKilled('ZOMBIE', false); }catch{}
    // check round end after delay? handled in update
    // schedule removal after 4s
    setTimeout(()=>{
      const idx=zombies.indexOf(zombie);
      if(idx>=0) zombies.splice(idx,1);
      if(zombie.group.parent) scene.remove(zombie.group);
      // dispose geometries? keep simple
    }, 3800);
  }
  function spawnDeathEffects(pos, hitPoint){
    // blood decal plane
    const decalGeo=new THREE.CircleGeometry(0.38+Math.random()*0.22, 8);
    const decalMat=new THREE.MeshStandardMaterial({color:0x4a1010, roughness:0.92, transparent:true, opacity:0.72, depthWrite:false});
    const decal=new THREE.Mesh(decalGeo, decalMat);
    decal.rotation.x=-Math.PI/2; decal.position.set(pos.x,0.018,pos.z); decal.position.x+=(Math.random()-0.5)*0.2; decal.position.z+=(Math.random()-0.5)*0.2;
    scene.add(decal);
    setTimeout(()=>{ if(decal.parent) scene.remove(decal); }, 12000);
    if(!IS_LOW){
      // particle burst
      const cnt=8; const geo=new THREE.BufferGeometry(); const arr=new Float32Array(cnt*3);
      for(let i=0;i<cnt;i++){ arr[i*3]=pos.x; arr[i*3+1]=1.0+Math.random()*0.3; arr[i*3+2]=pos.z; }
      geo.setAttribute('position', new THREE.BufferAttribute(arr,3));
      const mat=new THREE.PointsMaterial({color:0x7a1010, size:0.09, transparent:true, opacity:0.95});
      const pts=new THREE.Points(geo, mat); scene.add(pts);
      let age=0; const id=setInterval(()=>{ age+=0.05; mat.opacity=Math.max(0,0.95-age*2.2); pts.position.y+=0.015; if(age>0.45){ clearInterval(id); scene.remove(pts); geo.dispose(); } }, 50);
    }
  }
  function findNearestBarrier(pos){
    let best=null; let bestD=999;
    for(const b of barriers){
      if(b.userData.isDestroyed) continue;
      const d=Math.hypot(b.position.x-pos.x, b.position.z-pos.z);
      if(d<bestD){ bestD=d; best=b; }
    }
    return bestD<7 ? best : null;
  }
  function updateBarriers(dt, playerPos){
    // handle F hold repair
    let nearest=null; let nearestDist=999;
    for(const b of barriers){
      const d=Math.hypot(b.position.x-playerPos.x, b.position.z-playerPos.z);
      if(d<nearestDist){ nearestDist=d; nearest=b; }
    }
    const canRepair = nearest && nearestDist<1.85 && nearest.userData.hp < nearest.userData.maxHp;
    if(barrierPrompt){
      if(canRepair){
        barrierPrompt.style.opacity='1';
        barrierPrompt.textContent = nearest.userData.isDestroyed ? 'Hold [F] to Rebuild Barrier' : 'Hold [F] to Repair Barrier ('+nearest.userData.hp+'/3)';
      } else if(nearest && nearestDist<1.85 && nearest.userData.isDestroyed){
        barrierPrompt.style.opacity='1'; barrierPrompt.textContent='Hold [F] to Rebuild Barrier';
      } else {
        // also show if near any barrier but full? hide
        barrierPrompt.style.opacity='0';
      }
    }
    // F hold detection
    let isHoldingF=false;
    try{
      if(keysF) isHoldingF=true;
      else if(window.__keys && window.__keys['KeyF']) isHoldingF=true;
      // also check controls keys? try to access global keys via document?
    }catch{}
    if(canRepair && isHoldingF){
      if(repairingBarrier!==nearest){ repairingBarrier=nearest; repairHold=0; }
      repairHold+=dt;
      // require 0.42s per plank
      if(repairHold>=0.42){
        repairBarrier(nearest);
        repairHold=0;
        // haptic feedback?
      }
      // show progress on prompt
      if(barrierPrompt){
        const pct=Math.floor((repairHold/0.42)*100);
        barrierPrompt.textContent='Repairing... '+pct+'%  ('+nearest.userData.hp+'/3)';
      }
    } else {
      repairHold=0;
      if(repairingBarrier && !isHoldingF) repairingBarrier=null;
    }
  }
  function startRound(){
    round++;
    const stats=getZombieStats(round);
    zombiesToSpawn = 6 * round;
    // cap? no
    zombiesSpawned=0; zombiesKilledThisRound=0;
    state='spawning';
    spawnTimer=0;
    isActiveFlag=true;
    showRoundBanner(round);
    updateHUD();
    // small delay before first spawn 0.8
    spawnTimer=0.6;
  }
  function isActive(){ return isActiveFlag; }
  function getRound(){ return round; }
  function dispose(){
    isActiveFlag=false;
    for(const z of zombies){ if(z.group && z.group.parent) scene.remove(z.group); }
    zombies.length=0;
    for(const b of barriers){ if(b.parent) scene.remove(b); }
    barriers.length=0;
    if(mysteryBox && mysteryBox.parent) scene.remove(mysteryBox);
    mysteryBox=null;
    if(hud && hud.parentNode) hud.parentNode.removeChild(hud);
    if(hud && hud._banner && hud._banner.parentNode) hud._banner.parentNode.removeChild(hud._banner);
    if(barrierPrompt && barrierPrompt.parentNode) barrierPrompt.parentNode.removeChild(barrierPrompt);
    hud=null;
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
  }
  function onKeyDown(e){
    if(e.code==='KeyF'){ keysF=true; }
    // knife placeholder: add +10 points on melee? not implemented; but handle F as knife if close to zombie (<1.6) give 10 + damage
    if(e.code==='KeyF' && isActiveFlag){
      // quick knife check: nearest zombie within 1.6 front
      const playerPos=controls.getPosition();
      const playerDir=new THREE.Vector3();
      try{ const cam = (controls && controls.camera) || window.__camera || (scene && scene.userData && scene.userData.camera); if(cam && cam.getWorldDirection) cam.getWorldDirection(playerDir); else playerDir.set(0,0,-1); }catch{ playerDir.set(0,0,-1); }
      let nearestZ=null; let bestD=1.6;
      for(const z of zombies){ if(z.isDead) continue; const d=Math.hypot(z.group.position.x-playerPos.x, z.group.position.z-playerPos.z);
        if(d<bestD){ const toZ=new THREE.Vector3().subVectors(z.group.position, playerPos).normalize(); const dot=toZ.dot(playerDir);
          if(dot>0.45){ nearestZ=z; bestD=d; }
        }
      }
      if(nearestZ){
        // knife damage 75
        handleZombieHit(nearestZ, 75, nearestZ.group.position.clone());
        addPoints(10);
        // lunge feedback
        try{ if(window.__hudDamageNumber) window.__hudDamageNumber(75, {x:51,y:50}); }catch{}
      }
    }
  }
  function onKeyUp(e){ if(e.code==='KeyF') keysF=false; }
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  // also poll for F via controls keys each frame alternative
  let _fPoll=0;
  function pollF(){
    try{
      // controls internal keys not exposed but we can detect via document active? fallback: check if KeyF pressed via event
    }catch{}
  }
  // main update
  function update(dt, playerPosArg){
    if(!isActiveFlag) return;
    timeAcc+=dt;
    const playerPos = playerPosArg && playerPosArg.isVector3 ? playerPosArg : (controls.getPosition ? controls.getPosition() : new THREE.Vector3(0,1.7,8));
    ensureHUD();
    // mystery box float
    if(mysteryBox){
      mysteryBox.position.y = Math.sin(timeAcc*0.9)*0.04;
      mysteryBox.rotation.y += dt*0.28;
      if(mysteryLight){
        mysteryLight.intensity = (IS_LOW?0.7:1.3) + Math.sin(timeAcc*2.1)*0.18;
        if(hud && hud._banner) mysteryBox.userData.lid.material.emissiveIntensity = 0.85 + Math.sin(timeAcc*1.7)*0.22;
      }
      // bob question planes opacity pulse
      if(mysteryBox.userData.questionPlanes){
        const pulse=0.78+Math.sin(timeAcc*1.9)*0.18;
        for(const pl of mysteryBox.userData.questionPlanes) pl.material.opacity=pulse;
      }
      // proximity prompt for box
      const dBox=Math.hypot(mysteryBox.position.x-playerPos.x, mysteryBox.position.z-playerPos.z);
      // reuse barrierPrompt? create separate if needed but we can show generic prompt reuse? Keep barrierPrompt for barriers only; box label sprite already indicates.
      // If near box (<1.8) and F held, could trigger random weapon? prototype just points
      if(dBox<1.9 && keysF){
        // debounce
        if(!mysteryBox._cooldown || performance.now()-mysteryBox._cooldown>800){
          mysteryBox._cooldown=performance.now();
          // give ammo
          try{ if(weapons && weapons.addAmmo) weapons.addAmmo(30); }catch{}
          addPoints(-0); // free prototype
          try{ if(window.__hudPushKill) window.__hudPushKill('MYSTERY BOX: AMMO +30'); }catch{}
          // flash
          mysteryBox.userData.lid.material.emissiveIntensity=2.2;
          setTimeout(()=>{ if(mysteryBox && mysteryBox.userData.lid) mysteryBox.userData.lid.material.emissiveIntensity=0.85; }, 180);
        }
      }
    }
    updateBarriers(dt, playerPos);
    // state machine
    if(state==='spawning' || state==='active'){
      // spawning
      if(zombiesSpawned < zombiesToSpawn){
        spawnTimer-=dt;
        if(spawnTimer<=0){
          const alive = zombies.filter(z=>!z.isDead).length;
          const cap = IS_LOW ? MAX_ACTIVE_LOW : MAX_ACTIVE_HIGH;
          if(alive < cap){
            spawnZombieProper();
            zombiesSpawned++;
            updateHUD();
            // interval decreases with round: 0.85 -> 0.42
            const base = Math.max(0.22, 0.90 - round*0.04);
            spawnTimer = base + Math.random()*0.18;
            if(IS_LOW) spawnTimer*=1.1;
          } else {
            spawnTimer=0.18; // retry soon when slot frees
          }
        }
      }
      // check if all spawned and alive==0 => intermission
      const aliveNow = zombies.filter(z=>!z.isDead).length;
      if(zombiesSpawned>=zombiesToSpawn && aliveNow===0){
        state='intermission';
        interTimer=INTER_ROUND;
        try{ if(window.__hudPushKill) window.__hudPushKill('ROUND '+round+' COMPLETE'); }catch{}
        updateHUD();
      } else if(zombiesSpawned>=zombiesToSpawn){
        state='active';
      }
    } else if(state==='intermission'){
      interTimer-=dt;
      // show countdown on HUD? reuse banner countdown? update leftEl to show next round in...
      if(perkEls && perkEls.leftEl){
        perkEls.leftEl.textContent='NEXT ROUND IN '+Math.ceil(interTimer)+'s   |   POINTS: '+points;
        // but we want zombies left? during intermission zombie left is 0, show countdown
      }
      if(interTimer<=0){
        startRound();
      }
    }
    // update zombies AI
    const maxActiveToUpdate = IS_LOW ? 18 : 50;
    // we update all but with throttling awareness already handled by caller divisor
    for(let i=0;i<zombies.length;i++){
      const z=zombies[i];
      if(z.isDead){
        // death fall animation: sink slightly and fade
        z.deathTimer+=dt;
        // hit flash decay
        if(z.hitFlash>0){
          z.hitFlash=Math.max(0, z.hitFlash-dt*4.5);
          if(z.hitFlash<=0){
            z.group.traverse(o=>{
              if(o.isMesh && o.material){
                const oc = z.origColors.get(o);
                if(oc && o.material.color) o.material.color.copy(oc);
                const oe = z.origColors.get(o.material);
                if(oe && o.material.emissive) o.material.emissive.copy(oe);
              }
            });
          } else {
            const prog=1-(z.hitFlash/0.12);
            if(prog>0.5){
              const k=(prog-0.5)/0.5;
              z.group.traverse(o=>{
                if(o.isMesh && o.material && o.material.color){
                  const oc=z.origColors.get(o); if(!oc) return;
                  o.material.color.lerpColors(new THREE.Color(0xffffff), oc, k);
                  if(o.material.emissive){ const oe=z.origColors.get(o.material); if(oe) o.material.emissive.lerpColors(new THREE.Color(0x666666), oe, k); }
                }
              });
            }
          }
        }
        // stagger decay while dead? still settle
        if(z.stagger>0){
          z.group.position.addScaledVector(z.staggerDir, Math.min(z.stagger, dt*2.8));
          z.group.rotation.z+=z.staggerSpin*dt*0.6;
          z.stagger-=dt*2.2; if(z.stagger<0) z.stagger=0;
        }
        // sink after 1s
        if(z.deathTimer>1.2){
          z.group.position.y = THREE.MathUtils.lerp(z.group.position.y, -0.22, dt*0.35);
          // fade eyes
          if(z.group.userData.refs && z.group.userData.refs.headGroup){
            const hg=z.group.userData.refs.headGroup;
            if(hg.userData.glow){
              for(const g of hg.userData.glow) g.material.opacity=Math.max(0, 0.72 - (z.deathTimer-1.2)*0.9);
            }
            if(hg.userData.eyes){
              for(const e of hg.userData.eyes) e.material.emissiveIntensity=Math.max(0, 2.2 - (z.deathTimer-1.2)*2.8);
            }
          }
        }
        continue;
      }
      // hit flash
      if(z.hitFlash>0){
        z.hitFlash=Math.max(0, z.hitFlash-dt*4.2);
        if(z.hitFlash<=0){
          z.group.traverse(o=>{
            if(o.isMesh && o.material){
              const oc=z.origColors.get(o); if(oc && o.material.color) o.material.color.copy(oc);
              const oe=z.origColors.get(o.material); if(oe && o.material.emissive) o.material.emissive.copy(oe);
            }
          });
        } else {
          const prog=1-(z.hitFlash/0.12);
          if(prog>0.55){
            const k=(prog-0.55)/0.45;
            z.group.traverse(o=>{
              if(o.isMesh && o.material && o.material.color){
                const oc=z.origColors.get(o); if(!oc) return;
                o.material.color.lerpColors(new THREE.Color(0xffffff), oc, k);
                if(o.material.emissive){ const oe=z.origColors.get(o.material); if(oe) o.material.emissive.lerpColors(new THREE.Color(0x777777), oe, k); }
              }
            });
          }
        }
      }
      if(z.stagger>0){
        const imp=Math.min(z.stagger, dt*4.2);
        z.group.position.addScaledVector(z.staggerDir, imp);
        z.group.rotation.y+=z.staggerSpin*dt*1.6;
        z.stagger-=dt*3.2; z.staggerSpin-=dt*1.2; if(z.stagger<0) z.stagger=0; if(z.staggerSpin<0) z.staggerSpin=0;
      }
      // barrier targeting: if near barrier that is still standing, attack barrier instead of player
      let targetPos = playerPos.clone();
      targetPos.y=0;
      let isAttackingBarrier=false;
      let barrierTarget=null;
      if(z.barrierCooldown>0) z.barrierCooldown-=dt;
      // find nearest barrier within 2.2 and with line roughly
      if(z.barrierCooldown<=0){
        for(const b of barriers){
          if(b.userData.isDestroyed) continue;
          const d=Math.hypot(b.position.x - z.group.position.x, b.position.z - z.group.position.z);
          const distToPlayer=Math.hypot(playerPos.x - b.position.x, playerPos.z - b.position.z);
          const zombieToPlayer=Math.hypot(playerPos.x - z.group.position.x, playerPos.z - z.group.position.z);
          // if barrier is between zombie and player (barrier closer to zombie than player is, and barrier near line)
          if(d<1.85 && zombieToPlayer > distToPlayer -1.2){
            isAttackingBarrier=true;
            barrierTarget=b;
            targetPos=b.position.clone(); targetPos.y=0;
            break;
          }
        }
      }
      const toTarget=new THREE.Vector3().subVectors(targetPos, z.group.position);
      toTarget.y=0; const dist=toTarget.length();
      const desiredYaw = dist>0.15 ? Math.atan2(toTarget.x, toTarget.z) : z.group.rotation.y;
      // rotate lerp
      let yawDiff=desiredYaw - z.group.rotation.y;
      while(yawDiff>Math.PI) yawDiff-=Math.PI*2;
      while(yawDiff<-Math.PI) yawDiff+=Math.PI*2;
      const turnSpeed = isAttackingBarrier ? 3.8 : 2.6;
      z.group.rotation.y += yawDiff*Math.min(1, turnSpeed*dt*0.9);
      // lurch speed sway
      const moveSpeed = z.speed * (isAttackingBarrier ? 0.72 : 1);
      const attackRange = isAttackingBarrier ? 1.45 : 1.25;
      if(dist > attackRange && !z.isDead){
        toTarget.normalize();
        const step=toTarget.clone().multiplyScalar(moveSpeed*dt);
        const nextPos=z.group.position.clone().add(step);
        nextPos.x=Math.max(-28,Math.min(28,nextPos.x)); nextPos.z=Math.max(-28,Math.min(28,nextPos.z));
        // simple barrier blocking: if barrier intact and would cross barrier line, require tearing first
        // For now allow movement to barrier edge, but stop at barrier if not destroyed
        if(isAttackingBarrier && dist<1.85){
          // don't move through, stay
        } else {
          z.group.position.copy(nextPos);
        }
        z.group.position.y=0;
      } else {
        // attack
        z.attackCooldown -= dt;
        if(z.attackCooldown<=0){
          if(isAttackingBarrier && barrierTarget){
            // tear barrier
            damageBarrier(barrierTarget, 1);
            z.attackCooldown=1.15 + Math.random()*0.45;
            // play hit anim
            z.stagger=0.22; z.staggerDir.set(0,0,-0.08);
            // spark
            spawnBarrierSparks(barrierTarget.position.clone().add(new THREE.Vector3(0,1.0,0)));
            try{ if(window.__audio && window.__audio.playHit) window.__audio.playHit(); }catch{}
            z.barrierCooldown=0.35;
          } else {
            // attack player
            const dmg = z.damage;
            try{
              if(controls && typeof controls.takeDamage==='function') controls.takeDamage(dmg);
              else {
                const el=document.getElementById('health'); if(el){ const cur=parseInt(el.textContent||'100',10); el.textContent=String(Math.max(0,cur-dmg)); }
                // screen flash? hud will handle via takeDamage path if available
                if(window.__hudTakeDamage) window.__hudTakeDamage(dmg, 'front');
              }
            }catch{}
            z.attackCooldown=1.35 + Math.random()*0.6 - Math.min(0.45, round*0.03);
            // lurch hit rewind
            z.stagger=0.35; z.staggerDir.set(0,0,0.12);
            // player push? small
            try{ if(window.__audio && window.__audio.playHit) window.__audio.playHit(); }catch{}
          }
        }
      }
      // animation: lurch sway
      const refs=z.group.userData.refs;
      if(!refs) continue;
      const isMoving = dist > attackRange + 0.05 && !isAttackingBarrier;
      if(isMoving){
        z.walkCycle += dt * (4.2 + z.speed*0.65);
        const c=z.walkCycle;
        const sway=Math.sin(c*0.55 + z.swayOffset)*0.18; // lurch sway
        const bob=Math.abs(Math.sin(c))*0.04;
        refs.torso.rotation.z = sway*0.55;
        refs.torso.rotation.x = 0.12 + sway*0.12 + bob*0.5;
        refs.torso.position.y = 1.08 + bob*0.9;
        // head droop sway
        refs.headGroup.rotation.z = -sway*0.45;
        refs.headGroup.rotation.x = 0.22 + Math.sin(c*0.7)*0.04;
        refs.headGroup.position.y = 0.38 + Math.sin(c*1.1)*0.015;
        // arm drag: one arm forward, other down, sway with walk
        refs.shoulderL.rotation.x = 0.45 + Math.sin(c)*0.32;
        refs.shoulderR.rotation.x = 0.52 - Math.sin(c)*0.28;
        refs.shoulderL.rotation.z = 0.12 + sway*0.18;
        refs.shoulderR.rotation.z = -0.10 - sway*0.18;
        refs.elbowL.rotation.x = 0.22 + Math.cos(c*0.9)*0.12;
        refs.elbowR.rotation.x = 0.18 - Math.cos(c*0.9)*0.10;
        // leg lurch: wider stance, knees barely bend
        refs.hipL.rotation.x = Math.sin(c)*0.38;
        refs.hipR.rotation.x = -Math.sin(c)*0.38;
        refs.kneeL.rotation.x = Math.max(0, Math.sin(c)*0.42);
        refs.kneeR.rotation.x = Math.max(0, -Math.sin(c)*0.42);
        // boot bob
        const footL = Math.max(0, Math.sin(c))*0.045;
        const footR = Math.max(0, Math.sin(c+Math.PI))*0.045;
        refs.bootL.position.y = -0.40+footL;
        refs.bootR.position.y = -0.40+footR;
        // lean into turn
        refs.torso.rotation.y = sway*0.18;
        // eye glow pulse while moving
        const eyePulse=0.85+Math.sin(timeAcc*2.8 + z.swayOffset)*0.24;
        if(refs.headGroup.userData.glow){
          for(const g of refs.headGroup.userData.glow) g.material.opacity=0.62*eyePulse;
        }
        if(refs.headGroup.userData.eyes){
          for(const e of refs.headGroup.userData.eyes) e.material.emissiveIntensity=2.0+Math.sin(timeAcc*3.1)*0.22;
        }
      } else {
        // idle lurch / attack sway
        const t2=timeAcc*0.9 + z.swayOffset;
        const breath=Math.sin(t2*1.4)*0.015;
        refs.torso.rotation.z = Math.sin(t2*0.7)*0.07 + (isAttackingBarrier? Math.sin(timeAcc*6)*0.06:0);
        refs.torso.rotation.x = 0.14 + breath;
        refs.torso.position.y = 1.08 + breath*0.35;
        refs.headGroup.rotation.z = Math.sin(t2*0.8)*0.05;
        refs.headGroup.rotation.x = 0.24 + Math.sin(t2)*0.03;
        // arms hang more
        refs.shoulderL.rotation.x = THREE.MathUtils.lerp(refs.shoulderL.rotation.x, 0.62, dt*2.2);
        refs.shoulderR.rotation.x = THREE.MathUtils.lerp(refs.shoulderR.rotation.x, 0.58, dt*2.2);
        refs.elbowL.rotation.x = THREE.MathUtils.lerp(refs.elbowL.rotation.x, 0.32, dt*2.2);
        refs.elbowR.rotation.x = THREE.MathUtils.lerp(refs.elbowR.rotation.x, 0.28, dt*2.2);
        refs.hipL.rotation.x = THREE.MathUtils.lerp(refs.hipL.rotation.x, 0, dt*3);
        refs.hipR.rotation.x = THREE.MathUtils.lerp(refs.hipR.rotation.x, 0, dt*3);
        refs.kneeL.rotation.x = THREE.MathUtils.lerp(refs.kneeL.rotation.x, 0, dt*3);
        refs.kneeR.rotation.x = THREE.MathUtils.lerp(refs.kneeR.rotation.x, 0, dt*3);
        if(isAttackingBarrier){
          // hammering barrier anim
          const hammer=Math.sin(timeAcc*7.2)*0.42;
          refs.shoulderL.rotation.x=0.85+hammer*0.22;
          refs.shoulderR.rotation.x=0.90-hammer*0.18;
          refs.torso.rotation.x=0.18+Math.abs(hammer)*0.12;
        } else if(dist<=attackRange){
          // swipe at player
          const swipe=Math.sin(timeAcc*8.5)*0.55;
          refs.shoulderL.rotation.x=0.92+swipe*0.18;
          refs.shoulderR.rotation.x=0.88-swipe*0.20;
        }
      }
    }
    updateHUD();
  }
  // init
  ensureHUD();
  createBarriers();
  createMysteryBox();
  updateHUD();
  // expose points globally
  window.__zombiePoints=points;
  Object.defineProperty(window, '__zombiePoints', { get:()=>points, set:(v)=>{points=v; updateHUD();} });
  // auto start if active externally? main.js will call startRound
  return { startRound, update, getRound, dispose, isActive, getPoints:()=>points, addPoints, barriers, getZombies:()=>zombies, getSpawnPoints };
}
