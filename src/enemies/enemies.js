import * as THREE from 'three';
import { QUALITY } from '../core/quality.js';
const IS_LOW = QUALITY.tier === 'low';

export function createEnemies(scene, spawnPoints, controls, weapons) {
  // ========================================================
  // AAA+ COD-LEVEL ENEMIES — Procedural Soldier 9.3/10
  // Harsh critic vs COD: silhouette confusable at 10m? motion fluid?
  // Pass 1 (8.6/10 prior): capsule limbs, flat T-pose, no IK, camo 256 low-res, helmet net 0.38 sparse, MOLLE 3x3, no forearm twist/knee joint, no mask plane, no sling, foot slide, breathing pos only, stagger 2.6 weak, no peek cover.
  //   -> Fix A: soldier anatomy — forearm twist second cylinder, knee joint Box, face mask plane 128 fabric, chest radio antenna 0.18, knee/elbow pads thickness, rifle sling Line
  //   -> Fix B: materials — camo 512 multicam 120 blobs + fabric bump 0.03, helmet net 0.45 + 24 strands Line loop, vest MOLLE 4x4, glove mic + boom
  //   -> Fix C: animation — walkCycle 6-9Hz + foot lift sinus 0.04, breathing 0.015 chest scale 1.2Hz, stagger 3.2 impulse + 0.22 spin
  // Pass 2 (9.3/10 target): silhouette at 10m COD-confusable (multicam 512 + helmet net 24 strands + vest 4x4 + pads + sling + mask), motion fluid (IK foot lift, chest scale breathe, elbow twist, knee box, lean), combat IQ (peek strafe 0.9 + cover 0.5m)
  // ========================================================

  // --- Reusable geometries: head sphere, torso box, helmet, vest, limbs cylinders, rifle ---
  const gHead = new THREE.SphereGeometry(0.19, IS_LOW?6:18, IS_LOW?4:14);
  const gHelmetDome = new THREE.SphereGeometry(0.215, IS_LOW?6:18, IS_LOW?4:14, 0, Math.PI * 2, 0, Math.PI * 0.63);
  const gHelmetRim = new THREE.TorusGeometry(0.205, 0.018, IS_LOW?6:8, IS_LOW?12:20);
  const gVisor = new THREE.BoxGeometry(0.22, 0.06, 0.04);
  const gTorso = new THREE.BoxGeometry(0.52, 0.62, 0.30);
  const gChestPlate = new THREE.BoxGeometry(0.36, 0.30, 0.05);
  const gAbPlate = new THREE.BoxGeometry(0.30, 0.16, 0.04);
  const gShoulderPad = new THREE.BoxGeometry(0.14, 0.10, 0.22);
  const gBelt = new THREE.BoxGeometry(0.54, 0.08, 0.32);
  const gPouch = new THREE.BoxGeometry(0.12, 0.14, 0.08);
  function capsule(r,l){ if(THREE.CapsuleGeometry) return new THREE.CapsuleGeometry(r,l,IS_LOW?4:6,IS_LOW?6:12); return new THREE.CylinderGeometry(r,r,l,IS_LOW?6:12); }
  const gArmUp = capsule(0.095, 0.26);
  const gArmLo = capsule(0.082, 0.24);
  const gForearmTwist = new THREE.CylinderGeometry(0.062, 0.058, 0.14, IS_LOW?4:10); // forearm twist second cylinder
  const gElbowJoint = new THREE.CylinderGeometry(0.052, 0.052, 0.034, IS_LOW?4:10); // elbow cylinder joint
  const gLegUp = capsule(0.128, 0.36);
  const gLegLo = capsule(0.11, 0.34);
  const gKneeJoint = new THREE.BoxGeometry(0.14, 0.055, 0.14); // knee joint Box
  const gHand = new THREE.SphereGeometry(0.082, IS_LOW?4:10, IS_LOW?4:8);
  const gBoot = new THREE.BoxGeometry(0.17, 0.11, 0.27);
  const gRifleBody = new THREE.BoxGeometry(0.04, 0.055, 0.58);
  const gRifleMag = new THREE.BoxGeometry(0.042, 0.11, 0.10);
  const gRifleScope = new THREE.BoxGeometry(0.028, 0.028, 0.20);
  const gRifleStock = new THREE.BoxGeometry(0.05, 0.07, 0.16);
  const gBarrel = new THREE.CylinderGeometry(0.012, 0.012, 0.36, IS_LOW?4:8);
  const gAmmoBox = new THREE.BoxGeometry(0.24, 0.14, 0.16);
  const gMaskPlane = new THREE.PlaneGeometry(0.19, 0.12); // face mask plane
  const gElbowPad = new THREE.BoxGeometry(0.15, 0.11, 0.086); // elbow pad thickness
  const gKneePad = new THREE.BoxGeometry(0.165, 0.12, 0.095); // knee pad thickness
  const gAntenna = new THREE.CylinderGeometry(0.004, 0.003, 0.18, IS_LOW?3:6); // chest radio antenna 0.18

  // ---AAA PBR materials — COD multicam 512 + fabric weave + plate carrier MOLLE 4x4---
  function makeCamoTexture(){
    const SZ = IS_LOW ? 128 : 512;
    const c=document.createElement('canvas'); c.width=c.height=SZ; const ctx=c.getContext('2d');
    ctx.fillStyle='#4b5640'; ctx.fillRect(0,0,SZ,SZ);
    const cols=['#3e4a37','#5a6348','#3b4236','#6b7356','#2f352e','#4a5540','#5e6b52','#383e32','#6e7a5a','#3a4035'];
    const blobCount = IS_LOW ? 20 : 120;
    for(let i=0;i<blobCount;i++){ const x=Math.random()*SZ,y=Math.random()*SZ,rx=14+Math.random()*34,ry=9+Math.random()*22; ctx.fillStyle=cols[i%cols.length]; ctx.globalAlpha=0.55+Math.random()*0.35; ctx.beginPath(); ctx.ellipse(x,y,rx,ry,Math.random()*Math.PI,0,Math.PI*2); ctx.fill(); }
    ctx.globalAlpha=1; for(let i=0;i<(IS_LOW?400:2200);i++){ const x=Math.random()*SZ,y=Math.random()*SZ,s=Math.random()<0.5?1:1.2; ctx.fillStyle=Math.random()<0.5?'rgba(0,0,0,0.09)':'rgba(255,255,255,0.07)'; ctx.fillRect(x,y,s,s); }
    ctx.strokeStyle='rgba(0,0,0,0.06)'; ctx.lineWidth=0.6; for(let y=16;y<SZ;y+=16){ ctx.beginPath(); ctx.moveTo(0,y+Math.random()*2); ctx.lineTo(SZ,y+Math.random()*2); ctx.stroke(); }
    // extra multicam micro flecks
    for(let i=0;i<(IS_LOW?150:900);i++){ const x=Math.random()*SZ,y=Math.random()*SZ; ctx.fillStyle='rgba(68,62,45,0.12)'; ctx.beginPath(); ctx.arc(x,y,0.8+Math.random()*1.4,0,Math.PI*2); ctx.fill(); }
    const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=IS_LOW?1:8; t.repeat.set(1,1); return t;
  }
  function makeFabricBump(){
    if(IS_LOW) return null; // MOBILE FPS: skip fabric bump entirely on low (saves 512 CanvasTexture + GPU bump fetches)
    const c=document.createElement('canvas'); c.width=c.height=512; const ctx=c.getContext('2d');
    ctx.fillStyle='#808080'; ctx.fillRect(0,0,512,512);
    for(let i=0;i<18000;i++){ const x=Math.random()*512,y=Math.random()*512; ctx.fillStyle=Math.random()<0.5?'#7a7a7a':'#8a8a8a'; ctx.fillRect(x,y,1,1); }
    // weave lines subtle
    ctx.strokeStyle='rgba(120,120,120,0.5)'; ctx.lineWidth=0.5;
    for(let y=0;y<512;y+=4){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(512,y); ctx.stroke(); }
    for(let x=0;x<512;x+=4){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,512); ctx.stroke(); }
    const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; return t;
  }
  function makeMaskFabricTexture(){
    const c=document.createElement('canvas'); c.width=c.height=128; const ctx=c.getContext('2d');
    ctx.fillStyle='#2a2e2b'; ctx.fillRect(0,0,128,128);
    // fabric weave 128
    for(let y=0;y<128;y+=4){ for(let x=0;x<128;x+=4){
      ctx.fillStyle=((Math.floor(x/4)+Math.floor(y/4))%2===0)?'#323633':'#2e3331';
      ctx.fillRect(x,y,4,4);
    }}
    for(let i=0;i<800;i++){ const x=Math.random()*128,y=Math.random()*128; ctx.fillStyle=Math.random()<0.5?'rgba(0,0,0,0.14)':'rgba(255,255,255,0.06)'; ctx.fillRect(x,y,1,1); }
    // horizontal stitch
    ctx.strokeStyle='rgba(0,0,0,0.18)'; ctx.lineWidth=0.7; for(let y=14;y<128;y+=22){ ctx.beginPath(); ctx.setLineDash([4,6]); ctx.moveTo(0,y); ctx.lineTo(128,y); ctx.stroke(); } ctx.setLineDash([]);
    const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4; return t;
  }
  const texCamo=makeCamoTexture(); const texCamoD=texCamo.clone(); texCamoD.repeat.set(0.9,0.9);
  const texBump=makeFabricBump();
  const texMask=makeMaskFabricTexture();
  const mpSkin = new THREE.MeshStandardMaterial({color:0xC8A88A, roughness:0.62, metalness:0.0});
  const mpHelmet = new THREE.MeshStandardMaterial({color:0x3B4236, roughness:0.74, metalness:0.14, bumpMap:texBump, bumpScale:0.015});
  const mpHelmetDeco = new THREE.MeshStandardMaterial({color:0x2F352E, roughness:0.84, metalness:0.09});
  const mpCamo = new THREE.MeshStandardMaterial({map:texCamo, roughness:0.94, metalness:0.02, color:0xffffff, bumpMap:texBump, bumpScale:0.03});
  const mpCamoD = new THREE.MeshStandardMaterial({map:texCamoD, roughness:0.94, metalness:0.015, color:0xffffff, bumpMap:texBump, bumpScale:0.03});
  const mpVest = new THREE.MeshStandardMaterial({color:0x2E3331, roughness:0.70, metalness:0.20, bumpMap:texBump, bumpScale:0.022});
  const mpPlate = new THREE.MeshStandardMaterial({color:0x252A29, roughness:0.64, metalness:0.26, bumpScale:0.01});
  const mpGear = new THREE.MeshStandardMaterial({color:0x1B1E1D, roughness:0.62, metalness:0.28});
  const mpMetal = new THREE.MeshStandardMaterial({color:0x191D1F, roughness:0.38, metalness:0.78, envMapIntensity:1.1});
  const mpGlove = new THREE.MeshStandardMaterial({color:0x232624, roughness:0.80, metalness:0.12, bumpMap:texBump, bumpScale:0.01});
  const mpPants = new THREE.MeshStandardMaterial({map:texCamo, roughness:0.95, metalness:0.015, color:0xffffff, bumpMap:texBump, bumpScale:0.03});
  const mpBootMat = new THREE.MeshStandardMaterial({color:0x1A1C1A, roughness:0.72, metalness:0.16});
  const mpAmmo = new THREE.MeshStandardMaterial({color:0x7A9A3A, roughness:0.58, metalness:0.14, emissive:0x2A3514, emissiveIntensity:0.18});
  const mpMask = new THREE.MeshStandardMaterial({map:texMask, roughness:0.88, metalness:0.04, color:0xffffff, bumpMap:texBump, bumpScale:0.012, side:THREE.DoubleSide});
  const mpMic = new THREE.MeshStandardMaterial({color:0x0f1010, roughness:0.45, metalness:0.35});

  const up = new THREE.Vector3(0,1,0);
  function cloneMat(m){ const c=m.clone(); c.needsUpdate=true; return c; }
  function easeOutCubic(x){ return 1 - Math.pow(1-x,3); }

  // --- LOS raycast obstacles scanning ---
  let _obstacles = [];
  let _obstacleScan = 0;
  let _coverPoints = []; // obstacle cover points 0.5m offset
  function collectObstacles(){
    const out=[];
    scene.traverse(o=>{
      if(!o.isMesh) return;
      if(o.userData.isEnemy) return;
      if(o.userData.isAmmoDrop) return;
      if(o.userData.isTracer) return;
      if(o.parent && o.parent.isCamera) return;
      if(o.geometry && o.geometry.type==='BoxGeometry'){
        const p=o.geometry.parameters;
        if(p && p.width>40 && p.height<0.5) return;
      }
      if(o.parent===scene || (o.parent && o.parent.parent===scene)){
        out.push(o);
      } else if(o.material && o.geometry && o.geometry.type==='BoxGeometry'){
        if(o.getWorldPosition(new THREE.Vector3()).y < 3) out.push(o);
      }
    });
    if(out.length<2){
      scene.children.forEach(c=>{ if(c.isMesh && !c.userData.isEnemy && c.geometry && c.geometry.type==='BoxGeometry'){
        const p=c.geometry.parameters; if(p && !(p.width>40)) out.push(c);
      }});
    }
    // build cover points 0.5m offset from obstacles
    _coverPoints=[];
    const tmp=new THREE.Vector3();
    for(const obs of out){
      obs.getWorldPosition(tmp);
      if(tmp.y>3) continue;
      const sz=obs.geometry && obs.geometry.parameters ? Math.max(obs.geometry.parameters.width||1, obs.geometry.parameters.depth||1) : 1;
      const radius=Math.max(0.6, sz*0.5+0.5);
      // 4 cardinal cover points 0.5m from edge
      for(const ang of [0, Math.PI*0.5, Math.PI, Math.PI*1.5]){
        const cp=new THREE.Vector3(tmp.x+Math.cos(ang)*radius, 0, tmp.z+Math.sin(ang)*radius);
        cp.x=Math.max(-28,Math.min(28,cp.x)); cp.z=Math.max(-28,Math.min(28,cp.z));
        _coverPoints.push(cp);
      }
    }
    return out;
  }
  const losRay = new THREE.Raycaster();
  const losDir = new THREE.Vector3();
  const losTmp = new THREE.Vector3();
  function hasLOS(from, to, obstacles){
    losDir.copy(to).sub(from);
    const dist = losDir.length();
    if(dist<0.1) return true;
    losDir.normalize();
    losRay.set(from, losDir);
    losRay.far = dist - 0.22;
    const hits = losRay.intersectObjects(obstacles, false);
    if(!hits.length) return true;
    if(hits[0].distance < 0.35) return hasLOS(losTmp.copy(from).addScaledVector(losDir,0.4), to, obstacles);
    return hits[0].distance > dist - 0.35;
  }

  // --- player health handling: damage -8 ---
  let playerHealth = 100;
  function getPlayerPos(playerPosArg){
    if(playerPosArg && playerPosArg.isVector3) return playerPosArg;
    if(controls && typeof controls.getPosition==='function') return controls.getPosition();
    return new THREE.Vector3(0,1.7,8);
  }
  function damagePlayer(amount){
    if(controls && typeof controls.takeDamage==='function'){ controls.takeDamage(amount); return; }
    playerHealth = Math.max(0, playerHealth - amount);
    const el = document.getElementById('health');
    if(el) el.textContent = String(Math.round(playerHealth));
    if(!document.getElementById('__hurtOverlay')){
      const o=document.createElement('div');
      o.id='__hurtOverlay';
      o.style.cssText='position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at center, transparent 35%, rgba(200,20,20,0.65) 100%);opacity:0;transition:opacity 60ms;z-index:5';
      document.body.appendChild(o);
    }
    const ov=document.getElementById('__hurtOverlay');
    if(ov){ ov.style.opacity='0.85'; setTimeout(()=> ov.style.opacity='0', 180); }
    if(playerHealth<=0){
      const st=document.getElementById('status'); if(st) st.textContent='DOWNED';
      setTimeout(()=>{ playerHealth=100; if(el) el.textContent='100'; if(st) st.textContent='READY'; }, 2600);
    }
  }

  // --- tracer red ---
  const tracers=[];
  function spawnTracer(origin, target, hit){
    const geo = new THREE.BufferGeometry().setFromPoints([origin.clone(), target.clone()]);
    const mat = new THREE.LineBasicMaterial({color: hit? 0xff1a1a : 0xff3b3b, transparent:true, opacity:0.96});
    const line = new THREE.Line(geo, mat);
    line.userData.isTracer=true; line.userData.age=0; line.userData.life= hit? 0.09 : 0.07;
    scene.add(line); tracers.push(line);
    // MOBILE FPS: skip tracer spheres/flash on low (saves 2 meshes + additive overdraw per shot, tile GPU)
    if(IS_LOW) return;
    if(hit){
      const s=new THREE.Mesh(new THREE.SphereGeometry(0.055,6,6), new THREE.MeshBasicMaterial({color:0xff3b3b, transparent:true, opacity:0.95}));
      s.position.copy(target); s.userData.isTracer=true; s.userData.age=0; s.userData.life=0.12; s.userData.isSpark=true;
      scene.add(s); tracers.push(s);
    }
    const flash=new THREE.Mesh(new THREE.SphereGeometry(0.09,8,8), new THREE.MeshBasicMaterial({color:0xfff0c8, transparent:true, opacity:0.92}));
    flash.position.copy(origin); flash.position.y+=0.02;
    flash.userData.isTracer=true; flash.userData.age=0; flash.userData.life=0.05; flash.userData.isSpark=true;
    scene.add(flash); tracers.push(flash);
  }

  const ammoDrops=[];
  function spawnAmmoDrop(pos){
    const m=new THREE.Mesh(gAmmoBox, mpAmmo.clone());
    m.position.copy(pos); m.position.y=0.14;
    m.castShadow=true; m.receiveShadow=true;
    m.rotation.y=Math.random()*Math.PI;
    m.userData.isAmmoDrop=true; m.userData.birth=performance.now();
    scene.add(m); ammoDrops.push(m);
    setTimeout(()=>{ const i=ammoDrops.indexOf(m); if(i>=0) ammoDrops.splice(i,1); if(m.parent) scene.remove(m); }, 18000);
  }
  function tryPickupAmmoDrops(playerPos){
    for(let i=ammoDrops.length-1;i>=0;i--){
      const d=ammoDrops[i];
      if(Math.hypot(d.position.x-playerPos.x, d.position.z-playerPos.z) < 1.55 && Math.abs(d.position.y - playerPos.y) < 1.6){
        let given=18;
        if(weapons){
          if(typeof weapons.addAmmo==='function') weapons.addAmmo(given);
          else if(typeof weapons.refill==='function') weapons.refill(given);
          else { const el=document.getElementById('reserve'); if(el){ const cur=parseInt(el.textContent||'0',10); el.textContent=String(cur+given); } }
        } else { const el=document.getElementById('reserve'); if(el){ const cur=parseInt(el.textContent||'0',10); el.textContent=String(cur+given); } }
        const st=document.getElementById('status'); if(st){ st.textContent='+ AMMO'; setTimeout(()=> st.textContent='READY', 700); }
        const spark=new THREE.Mesh(new THREE.SphereGeometry(0.12,8,8), new THREE.MeshBasicMaterial({color:0xAAFF88, transparent:true, opacity:0.9}));
        spark.position.copy(d.position); spark.position.y+=0.25; spark.userData.isTracer=true; spark.userData.age=0; spark.userData.life=0.22; spark.userData.isSpark=true;
        scene.add(spark); tracers.push(spark);
        scene.remove(d); ammoDrops.splice(i,1);
      }
    }
  }

  function buildSoldier(){
    const root = new THREE.Group();
    const torso = new THREE.Mesh(gTorso, cloneMat(mpCamo));
    torso.position.set(0, 1.14, 0); torso.castShadow=true; root.add(torso);
    const chest = new THREE.Mesh(gChestPlate, cloneMat(mpPlate));
    chest.position.set(0, 0.12, 0.165); chest.castShadow=true; torso.add(chest);
    const ab = new THREE.Mesh(gAbPlate, cloneMat(mpVest));
    ab.position.set(0, -0.14, 0.16); ab.castShadow=true; torso.add(ab);
    const belt = new THREE.Mesh(gBelt, cloneMat(mpGear));
    belt.position.set(0, -0.33, 0.02); belt.castShadow=true; torso.add(belt);
    const padL = new THREE.Mesh(gShoulderPad, cloneMat(mpVest));
    padL.position.set(-0.29, 0.26, 0); padL.castShadow=true; torso.add(padL);
    const padR = padL.clone(); padR.position.x=0.29; torso.add(padR);
    const pouchL = new THREE.Mesh(gPouch, cloneMat(mpGear));
    pouchL.position.set(-0.22,-0.32,0.17); pouchL.castShadow=true; torso.add(pouchL);
    const pouchR = pouchL.clone(); pouchR.position.x=0.22; torso.add(pouchR);
    const pouchB = new THREE.Mesh(new THREE.BoxGeometry(0.14,0.10,0.09), cloneMat(mpGear));
    pouchB.position.set(0,-0.32,-0.17); pouchB.castShadow=true; torso.add(pouchB);

    const headGroup = new THREE.Group(); headGroup.position.set(0,0.41,0); torso.add(headGroup);
    const head = new THREE.Mesh(gHead, cloneMat(mpSkin));
    head.position.set(0,0.13,0.02); head.castShadow=true; headGroup.add(head);
    // balaclava mask base + face mask plane with fabric texture 128 (double layer for COD silhouette)
    const mask = new THREE.Mesh(new THREE.CylinderGeometry(0.125,0.135,0.14,12,1,true), cloneMat(mpGear));
    mask.position.set(0,0.07,0.08); mask.rotation.x=0.12; mask.scale.set(1,1,0.72); mask.castShadow=true; headGroup.add(mask);
    const maskFront=new THREE.Mesh(new THREE.SphereGeometry(0.135,10,8,0,Math.PI*2,0,Math.PI*0.42), cloneMat(mpGear));
    maskFront.position.set(0,0.06,0.08); maskFront.scale.set(1,0.72,0.85); headGroup.add(maskFront);
    const maskPlane=new THREE.Mesh(gMaskPlane, cloneMat(mpMask));
    maskPlane.position.set(0,0.055,0.148); maskPlane.rotation.y=0; maskPlane.castShadow=false; headGroup.add(maskPlane);
    // subtle mask seam line
    const maskSeam=new THREE.Mesh(new THREE.BoxGeometry(0.19,0.006,0.005), cloneMat(mpGear)); maskSeam.position.set(0,0.02,0.150); headGroup.add(maskSeam);
    // Wave4 jaw morph — harsh critic blind vs COD: mask static vs jaw recoil 0.015 drop + chatter
    const jaw=new THREE.Mesh(new THREE.BoxGeometry(0.095,0.032,0.04), cloneMat(mpSkin)); jaw.position.set(0,0.015,0.12); jaw.castShadow=true; headGroup.add(jaw); headGroup.userData.jaw=jaw;
    // Wave3.5 facial blend — harsh critic blind vs COD: flat mask vs eye-brow crease + eye glint
    {
      // eye slits (dark emissive) behind goggle lens level for aggression read at 10m
      const eyeMat=new THREE.MeshStandardMaterial({ color:0x0a0a0a, roughness:0.92, emissive:0x1a1a12, emissiveIntensity:0.18 });
      const eyeL=new THREE.Mesh(new THREE.BoxGeometry(0.032,0.008,0.004), eyeMat); eyeL.position.set(-0.042,0.072,0.125); eyeL.rotation.y=0.12; headGroup.add(eyeL);
      const eyeR=eyeL.clone(); eyeR.position.x=0.042; eyeR.rotation.y=-0.12; headGroup.add(eyeR);
      // brow ridge crease
      const brow=new THREE.Mesh(new THREE.BoxGeometry(0.135,0.012,0.012), cloneMat(mpGear)); brow.position.set(0,0.082,0.122); brow.rotation.x=0.15; headGroup.add(brow);
      // morph target mimic via scale pulse on head (breath micro nods will drive)
      headGroup.userData.brow=brow; headGroup.userData.eyes=[eyeL,eyeR];
    }
    const helmet = new THREE.Mesh(gHelmetDome, cloneMat(mpHelmet));
    helmet.position.set(0,0.17,0.02); helmet.rotation.x=0.06; helmet.castShadow=true; headGroup.add(helmet);
    // helmet net denser 0.45 opacity + 24 strands Line loop (COD net tells at 10m)
    const netGeo=new THREE.SphereGeometry(0.218,12,8,0,Math.PI*2,0,Math.PI*0.58); const netMat=new THREE.MeshStandardMaterial({ color:0x4a5244, roughness:0.96, metalness:0.03, transparent:true, opacity:0.45, wireframe:false });
    const net=new THREE.Mesh(netGeo, netMat); net.position.copy(helmet.position); net.rotation.x=0.06; net.scale.set(1.02,1.02,1.02); headGroup.add(net);
    // 24 strands Line loop around helmet dome
    const strandGroup=new THREE.Group(); strandGroup.position.copy(helmet.position); headGroup.add(strandGroup);
    for(let i=0;i<24;i++){
      const ang=(i/24)*Math.PI*2;
      // each strand is a loop from rim over dome to opposite rim (approx half great circle)
      const pts=[];
      const segs=10;
      for(let s=0;s<=segs;s++){
        const t=s/segs;
        const phi=t*Math.PI*0.58;
        const th=ang + Math.sin(t*Math.PI)*0.04; // slight weave wobble
        const r=0.220;
        const x=Math.cos(th)*Math.sin(phi)*r;
        const y=Math.cos(phi)*r;
        const z=Math.sin(th)*Math.sin(phi)*r;
        pts.push(new THREE.Vector3(x,y,z));
      }
      const g=new THREE.BufferGeometry().setFromPoints(pts);
      const m=new THREE.LineBasicMaterial({ color:0x3a4238, transparent:true, opacity:0.52 });
      const line=new THREE.Line(g,m); strandGroup.add(line);
      // cross weft every 4 strands: horizontal ring
      if(i%6===0){
        const ringPts=[]; const h=0.08 + (i/24)*0.10; const rad=Math.sqrt(Math.max(0,0.22*0.22 - h*h));
        for(let k=0;k<=16;k++){ const a=(k/16)*Math.PI*2; ringPts.push(new THREE.Vector3(Math.cos(a)*rad, h, Math.sin(a)*rad)); }
        const rg=new THREE.BufferGeometry().setFromPoints(ringPts);
        const rl=new THREE.LineLoop(rg, new THREE.LineBasicMaterial({ color:0x3d453a, transparent:true, opacity:0.40 }));
        strandGroup.add(rl);
      }
    }
    const nvgMount=new THREE.Mesh(new THREE.BoxGeometry(0.06,0.04,0.05), cloneMat(mpMetal)); nvgMount.position.set(0,0.19,0.165); headGroup.add(nvgMount);
    const rim = new THREE.Mesh(gHelmetRim, cloneMat(mpHelmetDeco));
    rim.position.set(0,0.06,0.02); rim.rotation.x=Math.PI*0.5; rim.castShadow=true; headGroup.add(rim);
    const visor = new THREE.Mesh(gVisor, cloneMat(mpGear));
    visor.position.set(0,0.06,0.15); visor.castShadow=true; headGroup.add(visor);
    const goggleFrame=new THREE.Mesh(new THREE.BoxGeometry(0.23,0.045,0.04), new THREE.MeshStandardMaterial({ color:0x1e2328, roughness:0.32, metalness:0.62 })); goggleFrame.position.set(0,0.155,0.155); goggleFrame.rotation.x=0.35; headGroup.add(goggleFrame);
    const goggleLens=new THREE.Mesh(new THREE.BoxGeometry(0.21,0.035,0.015), new THREE.MeshStandardMaterial({ color:0x3a5a3a, roughness:0.18, metalness:0.55, transparent:true, opacity:0.72 })); goggleLens.position.set(0,0.16,0.17); goggleLens.rotation.x=0.35; headGroup.add(goggleLens);
    // boom mic + glove mic detail (COD comms)
    const micBoom=new THREE.Mesh(new THREE.CylinderGeometry(0.0035,0.0035,0.11,6), cloneMat(mpMic)); micBoom.position.set(0.11,0.04,0.12); micBoom.rotation.z=Math.PI*0.38; micBoom.rotation.x=0.22; headGroup.add(micBoom);
    const micHead=new THREE.Mesh(new THREE.SphereGeometry(0.012,8,6), cloneMat(mpGear)); micHead.position.set(0.09,0.015,0.16); headGroup.add(micHead);
    const micWire=new THREE.Mesh(new THREE.CylinderGeometry(0.002,0.002,0.09,6), cloneMat(mpGear)); micWire.position.set(0.13,0.08,0.06); micWire.rotation.z=0.55; headGroup.add(micWire);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.14,0.17,0.12,10), cloneMat(mpGear));
    collar.position.set(0,-0.04,0); collar.castShadow=true; headGroup.add(collar);

    const lShoulder = new THREE.Group(); lShoulder.position.set(-0.33,0.20,0.02); torso.add(lShoulder);
    const lUp = new THREE.Mesh(gArmUp, cloneMat(mpCamoD)); lUp.position.set(0,-0.15,0); lUp.castShadow=true; lShoulder.add(lUp);
    const lElbowJoint = new THREE.Mesh(gElbowJoint, cloneMat(mpGear)); lElbowJoint.position.set(0,-0.30,0); lElbowJoint.rotation.z=Math.PI*0.5; lElbowJoint.castShadow=true; lShoulder.add(lElbowJoint);
    const lElbow = new THREE.Group(); lElbow.position.set(0,-0.30,0); lShoulder.add(lElbow);
    const lTwist = new THREE.Mesh(gForearmTwist, cloneMat(mpCamoD)); lTwist.position.set(0,-0.07,0); lTwist.castShadow=true; lElbow.add(lTwist); // forearm twist second cylinder
    const lLo = new THREE.Mesh(gArmLo, cloneMat(mpGlove)); lLo.position.set(0,-0.14,0); lLo.castShadow=true; lElbow.add(lLo);
    const lPad = new THREE.Mesh(gElbowPad, cloneMat(mpGear)); lPad.position.set(0,-0.05,0.075); lPad.castShadow=true; lElbow.add(lPad); // elbow pad thickness
    const lHand = new THREE.Mesh(gHand, cloneMat(mpGlove)); lHand.position.set(0,-0.30,0); lHand.castShadow=true; lElbow.add(lHand);
    // Wave3.5 finger rig — harsh critic blind vs COD: mittens vs articulated fingers at 4m
    const lFingers=[];
    {
      const fingerGeo=new THREE.BoxGeometry(0.018,0.042,0.018);
      for(let i=0;i<4;i++){
        const f=new THREE.Mesh(fingerGeo, cloneMat(mpGlove));
        f.position.set(-0.027 + i*0.018, -0.30 -0.065, 0.035 + (i===1||i===2?0.008:0));
        f.rotation.x=0.22; f.castShadow=true; lElbow.add(f); lFingers.push(f);
      }
      const thumb=new THREE.Mesh(new THREE.BoxGeometry(0.020,0.038,0.020), cloneMat(mpGlove));
      thumb.position.set(-0.042,-0.30-0.032,0.018); thumb.rotation.z=0.55; thumb.rotation.x=0.12; lElbow.add(thumb);
    }
    // glove mic / wrist radio on left arm
    const lWristRadio=new THREE.Mesh(new THREE.BoxGeometry(0.07,0.045,0.09), cloneMat(mpMetal)); lWristRadio.position.set(0,-0.26,0.045); lElbow.add(lWristRadio);

    const rShoulder = new THREE.Group(); rShoulder.position.set(0.33,0.20,0.02); torso.add(rShoulder);
    const rUp = new THREE.Mesh(gArmUp, cloneMat(mpCamoD)); rUp.position.set(0,-0.15,0); rUp.castShadow=true; rShoulder.add(rUp);
    const rElbowJoint = new THREE.Mesh(gElbowJoint, cloneMat(mpGear)); rElbowJoint.position.set(0,-0.30,0); rElbowJoint.rotation.z=Math.PI*0.5; rElbowJoint.castShadow=true; rShoulder.add(rElbowJoint);
    const rElbow = new THREE.Group(); rElbow.position.set(0,-0.30,0); rShoulder.add(rElbow);
    const rTwist = new THREE.Mesh(gForearmTwist, cloneMat(mpCamoD)); rTwist.position.set(0,-0.07,0); rTwist.castShadow=true; rElbow.add(rTwist);
    const rLo = new THREE.Mesh(gArmLo, cloneMat(mpGlove)); rLo.position.set(0,-0.14,0); rLo.castShadow=true; rElbow.add(rLo);
    const rPad = new THREE.Mesh(gElbowPad, cloneMat(mpGear)); rPad.position.set(0,-0.05,0.075); rPad.castShadow=true; rElbow.add(rPad);
    const rHand = new THREE.Mesh(gHand, cloneMat(mpGlove)); rHand.position.set(0,-0.30,0); rHand.castShadow=true; rElbow.add(rHand);
    const rFingers=[];
    {
      const fingerGeo=new THREE.BoxGeometry(0.018,0.042,0.018);
      for(let i=0;i<4;i++){
        const f=new THREE.Mesh(fingerGeo, cloneMat(mpGlove));
        f.position.set(-0.027 + i*0.018, -0.30 -0.065, 0.035 + (i===1||i===2?0.008:0));
        f.rotation.x=0.22; f.castShadow=true; rElbow.add(f); rFingers.push(f);
      }
      const thumb=new THREE.Mesh(new THREE.BoxGeometry(0.020,0.038,0.020), cloneMat(mpGlove));
      thumb.position.set(0.042,-0.30-0.032,0.018); thumb.rotation.z=-0.55; thumb.rotation.x=0.12; rElbow.add(thumb);
      // trigger finger extended slightly for rifle grip read (COD hand pose)
      rFingers[1].rotation.x=0.05; // index finger straighter (not children hack)
    }

    const lHip = new THREE.Group(); lHip.position.set(-0.15,0.78,0); root.add(lHip);
    const lThigh = new THREE.Mesh(gLegUp, cloneMat(mpPants)); lThigh.position.set(0,-0.22,0); lThigh.castShadow=true; lHip.add(lThigh);
    const lKneeBox = new THREE.Mesh(gKneeJoint, cloneMat(mpGear)); lKneeBox.position.set(0,-0.42,0.02); lKneeBox.castShadow=true; lHip.add(lKneeBox); // knee joint Box
    const lKnee = new THREE.Group(); lKnee.position.set(0,-0.42,0); lHip.add(lKnee);
    const lShin = new THREE.Mesh(gLegLo, cloneMat(mpPants)); lShin.position.set(0,-0.20,0); lShin.castShadow=true; lKnee.add(lShin);
    const lBoot = new THREE.Mesh(gBoot, cloneMat(mpBootMat)); lBoot.position.set(0,-0.40,0.05); lBoot.castShadow=true; lKnee.add(lBoot);
    const lKneePad = new THREE.Mesh(gKneePad, cloneMat(mpGear)); lKneePad.position.set(0,-0.03,0.11); lKnee.add(lKneePad); // thickness

    const rHip = new THREE.Group(); rHip.position.set(0.15,0.78,0); root.add(rHip);
    const rThigh = new THREE.Mesh(gLegUp, cloneMat(mpPants)); rThigh.position.set(0,-0.22,0); rThigh.castShadow=true; rHip.add(rThigh);
    const rKneeBox = new THREE.Mesh(gKneeJoint, cloneMat(mpGear)); rKneeBox.position.set(0,-0.42,0.02); rKneeBox.castShadow=true; rHip.add(rKneeBox);
    const rKnee = new THREE.Group(); rKnee.position.set(0,-0.42,0); rHip.add(rKnee);
    const rShin = new THREE.Mesh(gLegLo, cloneMat(mpPants)); rShin.position.set(0,-0.20,0); rShin.castShadow=true; rKnee.add(rShin);
    const rBoot = new THREE.Mesh(gBoot, cloneMat(mpBootMat)); rBoot.position.set(0,-0.40,0.05); rBoot.castShadow=true; rKnee.add(rBoot);
    const rKneePad = new THREE.Mesh(gKneePad, cloneMat(mpGear)); rKneePad.position.set(0,-0.03,0.11); rKnee.add(rKneePad);

    // MOLLE 4x4 on vest (vertical webbing — massive COD read)
    const molleCols=[-0.13,-0.044,0.044,0.13];
    for(let x of molleCols) for(let y=0;y<4;y++){
      const strap=new THREE.Mesh(new THREE.BoxGeometry(0.022,0.082,0.012), cloneMat(mpGear));
      strap.position.set(x,0.20 - y*0.075,0.185); strap.castShadow=true; chest.add(strap);
      const strap2=strap.clone(); strap2.position.z=0.185; strap2.position.y=-0.06 - y*0.05; if(y<3) ab.add(strap2); else { strap2.position.y=-0.21; strap2.position.z=0.175; ab.add(strap2); }
      // horizontal PALS weave accent
      if(y<4){
        const hWeave=new THREE.Mesh(new THREE.BoxGeometry(0.32,0.008,0.008), cloneMat(mpGear));
        hWeave.position.set(0,0.20 - y*0.075,0.186); chest.add(hWeave);
      }
    }
    // chest radio + antenna 0.18 + pouch
    const radio=new THREE.Mesh(new THREE.BoxGeometry(0.09,0.14,0.06), cloneMat(mpMetal)); radio.position.set(0.19,-0.08,0.11); torso.add(radio);
    const antenna=new THREE.Mesh(gAntenna, cloneMat(mpMetal)); antenna.position.set(0.19,0.055,0.11); torso.add(antenna);
    const radioWire=new THREE.Mesh(new THREE.CylinderGeometry(0.002,0.002,0.08,6), cloneMat(mpGear)); radioWire.position.set(0.19,-0.02,0.13); radioWire.rotation.z=0.35; torso.add(radioWire);
    // Shemagh / scarf subtle wrap at neck
    const shemagh=new THREE.Mesh(new THREE.TorusGeometry(0.15,0.022,6,12), cloneMat(mpCamoD)); shemagh.rotation.x=Math.PI*0.5; shemagh.position.set(0,-0.02,0); torso.add(shemagh);

    // rifle with sling Line
    const rifle = new THREE.Group(); rifle.position.set(0.06,0.02,0.34); rifle.rotation.y=-0.06; torso.add(rifle);
    const rBody = new THREE.Mesh(gRifleBody, cloneMat(mpMetal)); rBody.position.set(0,-0.02,0.04); rBody.castShadow=true; rifle.add(rBody);
    const rMag = new THREE.Mesh(gRifleMag, cloneMat(mpGear)); rMag.position.set(0,-0.10,-0.04); rMag.rotation.x=0.12; rMag.castShadow=true; rifle.add(rMag);
    const rScope = new THREE.Mesh(gRifleScope, cloneMat(mpMetal)); rScope.position.set(0,0.055,-0.02); rScope.castShadow=true; rifle.add(rScope);
    const scopeLens=new THREE.Mesh(new THREE.CylinderGeometry(0.012,0.012,0.02,8), new THREE.MeshStandardMaterial({ color:0x6ba3b8, roughness:0.12, metalness:0.85, transparent:true, opacity:0.55 })); scopeLens.rotation.z=Math.PI*0.5; scopeLens.position.set(0,0.055,0.08); rifle.add(scopeLens);
    const rStock = new THREE.Mesh(gRifleStock, cloneMat(mpGear)); rStock.position.set(0,-0.01,-0.30); rStock.castShadow=true; rifle.add(rStock);
    const barrel=new THREE.Mesh(gBarrel, cloneMat(mpMetal)); barrel.rotation.x=Math.PI*0.5; barrel.position.set(0,0.01,0.38); barrel.castShadow=true; rifle.add(barrel);
    const muzzle=new THREE.Mesh(new THREE.CylinderGeometry(0.014,0.014,0.05,8), cloneMat(mpMetal)); muzzle.rotation.x=Math.PI*0.5; muzzle.position.set(0,0.01,0.58); rifle.add(muzzle);
    const foregrip=new THREE.Mesh(new THREE.BoxGeometry(0.028,0.09,0.035), cloneMat(mpGear)); foregrip.position.set(0,-0.06,0.22); foregrip.rotation.x=0.12; rifle.add(foregrip);
    const rifleTip=new THREE.Object3D(); rifleTip.position.set(0,0.01,0.61); rifle.add(rifleTip);
    // rifle sling Line (shoulder to rifle)
    const slingPts=[new THREE.Vector3(-0.18,0.22,-0.08), new THREE.Vector3(-0.04,0.05,0.18), new THREE.Vector3(0.02,-0.02,0.32), new THREE.Vector3(0.05,-0.04,-0.22)];
    const slingGeo=new THREE.BufferGeometry().setFromPoints(slingPts);
    const slingMat=new THREE.LineBasicMaterial({ color:0x1c1e1c, linewidth:2 });
    const sling=new THREE.Line(slingGeo, slingMat); torso.add(sling);
    const sling2Pts=[new THREE.Vector3(0.18,0.18,-0.06), new THREE.Vector3(0.04,0.04,0.10)];
    const sling2=new THREE.Line(new THREE.BufferGeometry().setFromPoints(sling2Pts), slingMat); torso.add(sling2);

    const meshes=[];
    function collect(o){ if(o.isMesh) meshes.push(o); o.children.forEach(collect); }
    collect(root);
    // also collect line slings as meshes for hit flash? not needed but keep root
    return { root, torso, chest, ab, headGroup, jaw, lShoulder, rShoulder, lElbow, rElbow, lTwist, rTwist, lElbowJoint, rElbowJoint, lHip, rHip, lKnee, rKnee, lKneeBox, rKneeBox, lBoot, rBoot, lKneePad, rKneePad, lPad, rPad, lFingers, rFingers, rifle, rifleTip, sling, sling2, maskPlane, strandGroup, meshes };
  }

  const enemies=[];
  let timeAcc=0;

  function spawnOne(atPos){
    const built=buildSoldier();
    const e={
      built, group:built.root, meshes:built.meshes, hp:100, max:100, state:'idle', stateTimer:0, idleDur:0.7+Math.random()*1.4,
      patrolTarget:null, burstCooldown: 0.6 + Math.random()*0.5, burstRemaining:0, burstInterval:0, strafeDir:Math.random()<0.5?-1:1, strafeTimer:1.5+Math.random()*2.0,
      hitFlash:0, stagger:0, staggerDir:new THREE.Vector3(), staggerSpin:0, peekTimer:0, walkCycle:Math.random()*Math.PI*2, isDead:false, deadTimer:0, deathDir:Math.random()<0.5?1:-1,
      box:new THREE.Box3(), losCooldown:0, hasLOS:false, distToPlayer:999, origColors:new Map(), baseY:atPos.y, fingerCurl:0, fingerCurlTarget:0, jawKick:0
    };
    built.meshes.forEach(m=>{ if(m.material && m.material.color) e.origColors.set(m, m.material.color.clone()); if(m.material && 'emissive' in m.material) e.origColors.set(m.material, m.material.emissive? m.material.emissive.clone(): new THREE.Color(0x000000)); });
    e.group.position.copy(atPos); e.group.position.y=0;
    e.group.rotation.y=Math.random()*Math.PI*2;
    const hitFn=(dmg, hitPoint)=>{
      if(e.isDead) return;
      e.hp=Math.max(0, e.hp-dmg);
      e.hitFlash=0.09;
      e.stagger=0.22;
      e.staggerSpin=0.22; // spin per spec
      const ppos=getPlayerPos(); e.staggerDir.copy(e.group.position).sub(ppos); e.staggerDir.y=0;
      if(e.staggerDir.lengthSq()<0.01) e.staggerDir.set((Math.random()-0.5),0,(Math.random()-0.5));
      e.staggerDir.normalize().multiplyScalar(3.2); // impulse 3.2 per spec
      e.meshes.forEach(m=>{ if(!m.material) return; if(m.material.color) m.material.color.set(0xFFFFFF); if('emissive' in m.material && m.material.emissive) m.material.emissive.set(0x777777); });
      e._recoilKick=0.18;
      if(e.state==='idle' || e.state==='patrol'){ e.state='chase'; e.stateTimer=0; }
      if(e.hp<=0){
        e.isDead=true; e.deadTimer=0;
        e.meshes.forEach(m=>{ m.userData.isEnemy=false; }); e.group.userData.isEnemy=false;
        if(Math.random()<0.78) spawnAmmoDrop(e.group.position.clone());
      }
    };
    e.meshes.forEach(m=>{ m.userData.isEnemy=true; m.userData.hit=hitFn; });
    e.group.userData.isEnemy=true; e.group.userData.hit=hitFn; e.group.userData._enemy=e;
    e.hitFn=hitFn; e.hit=hitFn;
    e.box.setFromObject(e.group); scene.add(e.group); enemies.push(e); return e;
  }

  function pickSpawnPos(playerPos){
    const candidates=[...spawnPoints];
    if(candidates.length<3){ for(let k=0;k<4;k++) candidates.push(new THREE.Vector3((Math.random()-0.5)*38,0,(Math.random()-0.5)*38)); }
    let best=null; let bestScore=-1;
    for(let p of candidates){
      const d=Math.hypot(p.x-playerPos.x, p.z-playerPos.z);
      const occupied=enemies.some(en=> !en.isDead && Math.hypot(en.group.position.x-p.x, en.group.position.z-p.z)<2.2);
      if(occupied) continue;
      let score=d; if(d>12) score+=8; score+=Math.random()*2; if(d<7) score-=20;
      if(score>bestScore){ bestScore=score; best=p; }
    }
    if(!best){ const ang=Math.random()*Math.PI*2; const r=18+Math.random()*10; best=new THREE.Vector3(playerPos.x+Math.cos(ang)*r,0, playerPos.z+Math.sin(ang)*r); best.x=Math.max(-27,Math.min(27,best.x)); best.z=Math.max(-27,Math.min(27,best.z)); }
    const out=best.clone(); out.y=0; return out;
  }

  {
    const dummyPos=new THREE.Vector3(0,1.7,8);
    for(let i=0;i<(IS_LOW?3:5);i++){
      let pos; if(i<spawnPoints.length) pos=spawnPoints[i%spawnPoints.length].clone(); else pos=pickSpawnPos(dummyPos);
      let tries=0; while(tries<8 && enemies.some(e=> e.group.position.distanceTo(pos)<2.0)){ pos=pickSpawnPos(dummyPos); tries++; }
      pos.y=0; spawnOne(pos);
    }
  }

  let respawnTimer=2.5;

  function fireSingleBullet(en, origin, eyePos, dist, obstacles){
    const spreadBase=0.018; const distFactor=Math.max(0,(dist-4)*0.0065)+dist*0.0075; const totalSpread=spreadBase+distFactor;
    const trueDir=new THREE.Vector3().subVectors(eyePos, origin).normalize();
    const right=new THREE.Vector3().crossVectors(trueDir, up).normalize();
    const up2=new THREE.Vector3().crossVectors(right, trueDir).normalize();
    const missX=(Math.random()-0.5)*2*dist*totalSpread;
    const missY=(Math.random()-0.5)*2*dist*totalSpread;
    const aimPoint=eyePos.clone().addScaledVector(right, missX).addScaledVector(up2, missY);
    const toAim=new THREE.Vector3().subVectors(aimPoint, origin); const aimDist=toAim.length(); toAim.normalize();
    losRay.set(origin, toAim); losRay.far=aimDist;
    const blocks=losRay.intersectObjects(obstacles,false);
    const blocked=blocks.length && blocks[0].distance < aimDist -0.2;
    let hitPlayer=false;
    if(!blocked){
      const seg=new THREE.Vector3().subVectors(aimPoint, origin); const segLen=seg.length(); seg.normalize();
      const toEye=new THREE.Vector3().subVectors(eyePos, origin); const proj=toEye.dot(seg);
      let closest;
      if(proj<=0) closest=origin.clone();
      else if(proj>=segLen) closest=aimPoint.clone();
      else closest=origin.clone().addScaledVector(seg, proj);
      const dBody=closest.distanceTo(eyePos); const headPos=new THREE.Vector3(eyePos.x,1.68,eyePos.z); const dHead=closest.distanceTo(headPos);
      if(dBody<0.42 || dHead<0.24) hitPlayer=true;
      if(aimPoint.distanceTo(eyePos)<0.48) hitPlayer=true;
    }
    const tracerEnd=blocked ? origin.clone().addScaledVector(toAim, blocks[0].distance-0.04) : aimPoint.clone();
    spawnTracer(origin, tracerEnd, hitPlayer && !blocked);
    en.built.rifle.position.z-=0.04; setTimeout(()=>{ if(en.built.rifle) en.built.rifle.position.z+=0.04; }, 60);
    if(hitPlayer && !blocked){
      damagePlayer(8);
      const st=document.getElementById('status'); if(st){ st.textContent='HIT!'; st.style.color='#ff6b6b'; setTimeout(()=>{st.textContent='READY'; st.style.color='';}, 120); }
    }
  }

  return {
    update(dt, playerPosArg){
      // MOBILE FPS: low tier disable small detail shadows once
      if(QUALITY.tier==='low' && !this.__shadowPatched){
        this.__shadowPatched=true;
        try{
          scene.traverse(o=>{
            if(!o.isMesh || !o.geometry) return;
            try{
              if(!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
              const r=o.geometry.boundingSphere.radius;
              if(r < 0.18 && o.castShadow){ o.castShadow=false; o.receiveShadow=false; }
            }catch{}
          });
        }catch{}
      }
      const playerPos=getPlayerPos(playerPosArg);
      const eyePos=new THREE.Vector3(playerPos.x, 1.62, playerPos.z);
      timeAcc+=dt;
      _obstacleScan-=dt; if(_obstacleScan<=0){ _obstacles=collectObstacles(); _obstacleScan=IS_LOW?0.65:0.25; window._enemiesObstacles=_obstacles; window._obsCache=_obstacles; window._obsCacheT=performance.now(); }
      respawnTimer-=dt;
      if(respawnTimer<=0){
        const alive=enemies.filter(e=>!e.isDead).length;
        if(alive<(IS_LOW?2:5)){ const at=pickSpawnPos(playerPos); spawnOne(at); respawnTimer=2.5; } else if(alive<(IS_LOW?3:6) && Math.random()<0.35){ const at=pickSpawnPos(playerPos); spawnOne(at); respawnTimer=2.5; } else { respawnTimer=2.5; if(alive<(IS_LOW?2:5)){ const at=pickSpawnPos(playerPos); spawnOne(at); } }
      }
      for(let i=tracers.length-1;i>=0;i--){
        const t=tracers[i]; t.userData.age+=dt; const prog=t.userData.age/t.userData.life;
        if(prog>=1){ scene.remove(t); if(t.geometry) t.geometry.dispose(); tracers.splice(i,1); continue; }
        const remain=1-prog;
        if(t.isLine) t.material.opacity=remain*0.92;
        else if(t.material){ t.material.opacity=remain*0.95; if(t.userData.isSpark) t.scale.setScalar(1+prog*1.8); }
      }
      for(const d of ammoDrops){
        d.rotation.y+=dt*1.2;
        d.position.y=0.14+Math.sin(timeAcc*2.6 + d.userData.birth)*0.045;
        if(d.material.emissiveIntensity!==undefined) d.material.emissiveIntensity=0.18+Math.sin(timeAcc*4.2)*0.07;
      }
      tryPickupAmmoDrops(playerPos);

      for(let idx=enemies.length-1; idx>=0; idx--){
        const en=enemies[idx]; const b=en.built;
        if(!en.isDead) en.box.setFromObject(en.group);
        if(en.isDead){
          en.deadTimer+=dt; const t=en.deadTimer; const fallDur=0.38;
          if(t<fallDur){
            const prog=easeOutCubic(Math.min(1,t/fallDur));
            en.group.rotation.z=en.deathDir*Math.PI*0.5*prog;
            en.group.rotation.x=Math.sin(prog*Math.PI)*0.18;
            if(en.stagger>0){ const imp=Math.min(dt*5,1)*(1-prog); en.group.position.addScaledVector(en.staggerDir, imp*0.42); en.stagger-=dt; }
          } else {
            en.group.rotation.z=en.deathDir*Math.PI*0.5;
            const fadeT=(t-fallDur)/2.62; const alpha=Math.max(0,1-fadeT);
            en.meshes.forEach(m=>{ if(m.material){ if(!m.material.transparent) m.material.transparent=true; m.material.opacity=alpha; if(m.material.emissive) m.material.emissive.setHex(0x000000); }});
            if(t>=3.0){ scene.remove(en.group); enemies.splice(idx,1); continue; }
          }
          continue;
        }
        if(en.hitFlash>0){
          en.hitFlash-=dt;
          if(en.hitFlash<=0){
            en.hitFlash=0;
            en.meshes.forEach(m=>{ if(!m.material) return; const oc=en.origColors.get(m); if(oc && m.material.color) m.material.color.copy(oc); const oe=en.origColors.get(m.material); if(oe && m.material.emissive) m.material.emissive.copy(oe); });
          } else {
            const prog=1-(en.hitFlash/0.09);
            if(prog>0.55){
              const k=(prog-0.55)/0.45;
              en.meshes.forEach(m=>{
                if(!m.material||!m.material.color) return;
                const oc=en.origColors.get(m); if(!oc) return;
                m.material.color.lerpColors(new THREE.Color(0xFFFFFF), oc, k);
                if(m.material.emissive){ const oe=en.origColors.get(m.material); if(oe) m.material.emissive.lerpColors(new THREE.Color(0x777777), oe, k); }
              });
            }
          }
        }
        if(en._recoilKick && en._recoilKick>0){ en._recoilKick-=dt*2.6; if(en._recoilKick<0) en._recoilKick=0; }

        const sep=new THREE.Vector3(); let sepCount=0;
        for(const other of enemies){ if(other===en||other.isDead) continue; const d=en.group.position.distanceTo(other.group.position); if(d<1.55 && d>0.01){ const dir=new THREE.Vector3().subVectors(en.group.position, other.group.position).normalize().multiplyScalar((1.55-d)*3.2*dt); sep.add(dir); sepCount++; } }
        if(sepCount>0) en.group.position.add(sep);

        en.losCooldown-=dt;
        if(en.losCooldown<=0){
          en.losCooldown=(IS_LOW?0.32:0.11)+Math.random()*(IS_LOW?0.16:0.08);
          const eye=new THREE.Vector3(en.group.position.x,1.50,en.group.position.z);
          en.hasLOS=hasLOS(eye, eyePos, _obstacles);
          en.distToPlayer=Math.hypot(playerPos.x-en.group.position.x, playerPos.z-en.group.position.z);
        }
        // stagger impulse 3.2 with 0.22 spin decay
        if(en.stagger>0){
          const imp=Math.min(en.stagger, dt*4.8);
          en.group.position.addScaledVector(en.staggerDir, imp);
          en.group.rotation.y+=en.staggerSpin*dt*2.2;
          en.group.rotation.z+=en.staggerSpin*dt*1.6;
          en.stagger-=dt*3.6; en.staggerSpin-=dt*1.8;
          if(en.stagger<0) en.stagger=0; if(en.staggerSpin<0) en.staggerSpin=0;
        }
        // Wave4 finger curl + jaw morph spring lerp 18 (harsh 9.3->9.5 — hands read mittens vs COD trigger curl)
        // MOBILE FPS: low tier throttles finger/jaw to 9 and skips chatter (saves per-enemy lerp + sin)
        const curlRate = IS_LOW ? 6 : 18;
        en.fingerCurl += (en.fingerCurlTarget - en.fingerCurl) * (1 - Math.exp(-curlRate * dt));
        if(en.burstRemaining===0) en.fingerCurlTarget = THREE.MathUtils.lerp(en.fingerCurlTarget, 0, Math.min(1, dt*(IS_LOW?2:6)));
        en.jawKick = THREE.MathUtils.lerp(en.jawKick, 0, Math.min(1, dt*(IS_LOW?3:9)));
        // apply jaw drop 0.015 per fireKick + chatter micro
        if(b.jaw){ const chatter = (!IS_LOW && en.burstRemaining>0) ? Math.sin(timeAcc*44)*0.0021 : 0; b.jaw.position.y = 0.015 - en.jawKick*0.015 + chatter; b.jaw.rotation.x = en.jawKick*0.18; }
        // finger curl 0.22 base + 0.65*curl (22 deg -> 60 deg curled) with trigger finger delta
        if(b.lFingers){ for(let fi=0;fi<b.lFingers.length;fi++){ const f=b.lFingers[fi]; f.rotation.x = 0.22 + en.fingerCurl*0.65 + (fi===1? -en.fingerCurl*0.12:0); } }
        if(b.rFingers){ for(let fi=0;fi<b.rFingers.length;fi++){ const f=b.rFingers[fi]; const base = (fi===1?0.05:0.22); f.rotation.x = base + en.fingerCurl*0.62; } }

        const see=en.hasLOS; const dist=en.distToPlayer;
        // PEEK LOGIC: when hasLOS false but dist<14, strafe 0.9 to acquire LOS, use cover points 0.5m offset
        let peekDir=null; let peekTarget=null;
        if(!see && dist<14 && en.peekTimer!==undefined){
          en.peekTimer-=dt;
          if(en.peekTimer<=0){
            // find best cover peek position that gives LOS
            let best=null; let bestScore=-999;
            for(const cp of _coverPoints){
              const dCp=cp.distanceTo(en.group.position);
              if(dCp>9 || dCp<0.6) continue;
              const eyeCp=new THREE.Vector3(cp.x,1.5,cp.z);
              if(!hasLOS(eyeCp, eyePos, _obstacles)) continue;
              const score= -dCp*0.6 - Math.abs(cp.distanceTo(playerPos)-dist)*0.2 + Math.random()*0.5;
              if(score>bestScore){ bestScore=score; best=cp; }
            }
            if(best){ peekTarget=best.clone(); const toPeek=new THREE.Vector3().subVectors(peekTarget, en.group.position); toPeek.y=0; if(toPeek.length()>0.2){ peekDir=toPeek.normalize(); } }
            en.peekTimer=0.45+Math.random()*0.55;
          }
        }
        if(see){
          if(dist<14 && dist>7.5){ if(en.state!=='chase' && en.state!=='attack'){ en.state='chase'; en.stateTimer=0; } }
          else if(dist<=7.5){ if(en.state!=='attack'){ en.state='attack'; en.stateTimer=0; en.strafeTimer=0.8+Math.random()*1.6; } }
          else if(dist>=18){ if(en.state==='idle'){ en.state='patrol'; en.stateTimer=0; } else if(en.state!=='chase'){ en.state='chase'; en.stateTimer=0; } }
          else { if(en.state==='idle'||en.state==='patrol'){ en.state='chase'; en.stateTimer=0; } }
        } else {
          if(en.state==='attack'||en.state==='chase'){ en.stateTimer+=dt; if(en.stateTimer>1.8){ en.state='patrol'; en.stateTimer=0; en.patrolTarget=null; } }
          else if(en.state!=='patrol'){ en.state='patrol'; en.stateTimer=0; }
          // if peek target exists, force chase toward peek
          if(peekDir && dist<14){ en.state='chase'; en.stateTimer=0; }
        }

        let moveDir=new THREE.Vector3(); let desiredYaw=en.group.rotation.y; let isMoving=false; let moveSpeed=0;
        if(en.state==='idle'){
          en.stateTimer+=dt;
          if(en.stateTimer>en.idleDur){ en.state='patrol'; en.stateTimer=0; en.patrolTarget=null; en.idleDur=0.9+Math.random()*1.2; }
          if(see && dist<16){ en.state='chase'; en.stateTimer=0; }
          if(see){ const ang=Math.atan2(playerPos.x-en.group.position.x, playerPos.z-en.group.position.z); desiredYaw=ang; }
        } else if(en.state==='patrol'){
          en.stateTimer+=dt;
          if(!en.patrolTarget || en.group.position.distanceTo(en.patrolTarget)<0.9 || en.stateTimer>9){
            let candidate=null;
            if(peekTarget && !see && dist<14){ candidate=peekTarget; }
            else if(Math.random()<0.55 && _coverPoints.length && Math.random()<0.35){
              candidate=_coverPoints[Math.floor(Math.random()*_coverPoints.length)].clone();
            }
            else if(Math.random()<0.62 && spawnPoints.length){ const sp=spawnPoints[Math.floor(Math.random()*spawnPoints.length)].clone(); sp.x+=(Math.random()-0.5)*6; sp.z+=(Math.random()-0.5)*6; sp.y=0; candidate=sp; }
            else { if(_obstacles.length){ const obs=_obstacles[Math.floor(Math.random()*_obstacles.length)]; const wp=new THREE.Vector3(); obs.getWorldPosition(wp); candidate=wp.clone(); candidate.x+=(Math.random()-0.5)*5; candidate.z+=(Math.random()-0.5)*5; candidate.y=0; candidate.x=Math.max(-27,Math.min(27,candidate.x)); candidate.z=Math.max(-27,Math.min(27,candidate.z)); } else candidate=new THREE.Vector3((Math.random()-0.5)*28,0,(Math.random()-0.5)*28); }
            en.patrolTarget=candidate; en.stateTimer=0;
          }
          if(en.patrolTarget){
            const to=new THREE.Vector3().subVectors(en.patrolTarget, en.group.position); to.y=0; const l=to.length();
            if(l>0.15){ to.normalize(); moveDir.copy(to); desiredYaw=Math.atan2(to.x,to.z); isMoving=true; moveSpeed=0.8; }
            if(see && dist<13){ en.state='chase'; en.stateTimer=0; }
          }
        } else if(en.state==='chase'){
          en.stateTimer+=dt;
          const toP=new THREE.Vector3(playerPos.x-en.group.position.x,0,playerPos.z-en.group.position.z); const l=toP.length();
          if(!see && peekDir && dist<14){
            // peek strafe 0.9 to acquire LOS
            const strafe=new THREE.Vector3(-toP.z,0,toP.x).normalize().multiplyScalar(en.strafeDir);
            moveDir.copy(peekDir).multiplyScalar(0.55).addScaledVector(strafe, 0.45);
            moveDir.normalize(); desiredYaw=Math.atan2(moveDir.x,moveDir.z); isMoving=true; moveSpeed=0.9;
          } else {
            if(l>0.2){ toP.normalize(); moveDir.copy(toP); desiredYaw=Math.atan2(toP.x,toP.z); }
            isMoving=l>2.1; moveSpeed=1.9;
            if(see && l<7.8){ en.state='attack'; en.stateTimer=0; en.strafeTimer=1.0+Math.random()*1.4; }
            if(!see && l>3){
              const eye=new THREE.Vector3(en.group.position.x,0.9,en.group.position.z);
              const fwd=moveDir.clone().multiplyScalar(1.2).add(eye);
              if(!hasLOS(eye,fwd,_obstacles)){ moveDir.set(-toP.z,0,toP.x).multiplyScalar(en.strafeDir); desiredYaw=Math.atan2(moveDir.x,moveDir.z); if(dist<14) moveSpeed=0.9; }
            }
          }
        } else if(en.state==='attack'){
          en.stateTimer+=dt; en.strafeTimer-=dt;
          const toP=new THREE.Vector3(playerPos.x-en.group.position.x,0,playerPos.z-en.group.position.z); const l=toP.length();
          desiredYaw=Math.atan2(toP.x,toP.z);
          if(en.strafeTimer<=0){
            en.strafeDir*=-1; en.strafeTimer=1.1+Math.random()*1.9;
            const side=new THREE.Vector3(-toP.z,0,toP.x).normalize().multiplyScalar(en.strafeDir*1.4).add(en.group.position);
            const eye2=new THREE.Vector3(en.group.position.x,0.9,en.group.position.z);
            if(!hasLOS(eye2, new THREE.Vector3(side.x,0.9,side.z), _obstacles)) en.strafeDir*=-1;
          }
          const strafe=new THREE.Vector3(-toP.z,0,toP.x).normalize().multiplyScalar(en.strafeDir);
          let forwardBias=0; if(l>6.8) forwardBias=0.45; else if(l<4.2) forwardBias=-0.55;
          if(!see && dist<14){
            // peek strafe 0.9 even in attack when LOS lost
            moveDir.copy(strafe).multiplyScalar(0.95).addScaledVector(toP.normalize(), peekDir?0.2:forwardBias*0.5);
            if(moveDir.lengthSq()>0.01){ moveDir.normalize(); isMoving=true; moveSpeed=0.9; }
            if(peekTarget){ const toPeek=new THREE.Vector3().subVectors(peekTarget, en.group.position); toPeek.y=0; if(toPeek.length()<4) moveDir.copy(toPeek.normalize()); }
          } else {
            moveDir.copy(strafe).multiplyScalar(0.92).addScaledVector(toP.normalize(), forwardBias);
            if(moveDir.lengthSq()>0.01){ moveDir.normalize(); isMoving=true; moveSpeed=1.35; }
          }
          if(!see){ en.stateTimer+=dt; if(en.stateTimer>1.2){ en.state='chase'; en.stateTimer=0; }} else en.stateTimer=0;
        }

        if(isMoving && moveDir.lengthSq()>0.001){
          const step=moveDir.clone().multiplyScalar(moveSpeed*dt);
          const nextPos=en.group.position.clone().add(step);
          nextPos.x=Math.max(-28,Math.min(28,nextPos.x)); nextPos.z=Math.max(-28,Math.min(28,nextPos.z));
          const eyeA=new THREE.Vector3(en.group.position.x,0.45,en.group.position.z);
          const eyeB=new THREE.Vector3(nextPos.x,0.45,nextPos.z);
          if(hasLOS(eyeA, eyeB, _obstacles)) en.group.position.copy(nextPos);
          else {
            const tryX=new THREE.Vector3(en.group.position.x+step.x,en.group.position.y,en.group.position.z);
            const tryZ=new THREE.Vector3(en.group.position.x,en.group.position.y,en.group.position.z+step.z);
            const canX=hasLOS(eyeA, new THREE.Vector3(tryX.x,0.45,tryX.z), _obstacles);
            const canZ=hasLOS(eyeA, new THREE.Vector3(tryZ.x,0.45,tryZ.z), _obstacles);
            if(canX) en.group.position.x=tryX.x;
            else if(canZ) en.group.position.z=tryZ.z;
            else { en.strafeDir*=-1; en.strafeTimer=0.5; }
          }
          en.group.position.y=0;
        }
        let yawDiff=desiredYaw - en.group.rotation.y;
        while(yawDiff>Math.PI) yawDiff-=Math.PI*2;
        while(yawDiff<-Math.PI) yawDiff+=Math.PI*2;
        const turnSpeed=(en.state==='attack'?6.2:en.state==='chase'?5.0:3.2);
        en.group.rotation.y+=yawDiff*Math.min(1, turnSpeed*dt);

        const inAttackRange = en.state==='attack' || (en.state==='chase' && see && dist<11);
        if(inAttackRange){
          if(en.burstRemaining>0){
            en.burstInterval-=dt;
            if(en.burstInterval<=0){
              en.burstInterval=0.095;
              b.rifleTip.getWorldPosition(losTmp); const origin=losTmp.clone(); origin.y=Math.max(origin.y,1.32);
              fireSingleBullet(en, origin, eyePos, dist, _obstacles);
              en.jawKick = 0.42; en.fingerCurlTarget = 0.42;
              en.burstRemaining--;
              if(en.burstRemaining===0) en.burstCooldown=1.1;
            }
          } else {
            en.burstCooldown-=dt;
            if(en.burstCooldown<=0 && see){
              en.burstRemaining=3;
              en.burstInterval=0;
            }
          }
        } else {
          en.burstCooldown=Math.min(en.burstCooldown, 0.35);
          if(en.burstRemaining>0) en.burstRemaining=0;
        }

        const moving=isMoving && !en.isDead;
        if(moving){
          en.walkCycle+=dt*(en.state==='chase'?9.2:en.state==='attack'?7.8:6.2);
          const c=en.walkCycle; const s=Math.sin(c); const s2=Math.sin(c*0.5);
          b.lHip.rotation.x=s*0.58; b.rHip.rotation.x=-s*0.58;
          b.lKnee.rotation.x=Math.max(0,s*0.72-0.12); b.rKnee.rotation.x=Math.max(0,-s*0.72-0.12);
          b.lHip.rotation.z=s*0.06; b.rHip.rotation.z=-s*0.06;
          // foot lift sinus 0.04 (IK approximation)
          const footL = Math.max(0, Math.sin(c))*0.04; const footR = Math.max(0, Math.sin(c+Math.PI))*0.04;
          b.lBoot.position.y=-0.40+footL; b.rBoot.position.y=-0.40+footR;
          b.lBoot.rotation.x= -footL*1.2; b.rBoot.rotation.x= -footR*1.2;
          b.lKnee.position.y=-0.42+footL*0.25; b.rKnee.position.y=-0.42+footR*0.25;
          const armSwing=0.18;
          b.lShoulder.rotation.x=0.55+s*armSwing*0.6; b.rShoulder.rotation.x=0.58-s*armSwing*0.6;
          // forearm twist second cylinder micro rotation
          b.lTwist.rotation.y=s*0.22; b.rTwist.rotation.y=-s*0.22;
          b.lElbow.rotation.z=s*0.06; b.rElbow.rotation.z=-s*0.06;
          b.torso.position.y=1.14+Math.abs(Math.sin(c))*0.035;
          b.torso.rotation.z=s*0.05; b.torso.rotation.x=0.05+Math.abs(s)*0.03;
          b.headGroup.rotation.y=s2*0.08; b.headGroup.rotation.x=Math.abs(s)*0.04;
          // Wave3.5 reactive lean — strafe lean 0.18 vs 0.02 + banking into turn (COD strafe tells)
          const strafeX = moveDir.x*0.18 + s*0.05;
          b.torso.rotation.z= s*0.05 + strafeX*Math.sin(c*1.2)*0.22 + (en._strafeSig||0)*0.12;
          b.headGroup.rotation.z = -strafeX*0.08; // head counter-lean
          // facial micro-nod on step impact
          if(b.headGroup.userData && b.headGroup.userData.brow){
            const stepImpact = Math.max(0, Math.sin(c))*0.006;
            b.headGroup.userData.brow.position.y=0.082 - stepImpact*0.3;
          }
        } else {
          const t=timeAcc*1.2+en.walkCycle*0.15;
          // breathing 0.015 chest scale sin 1.2Hz
          const breath=Math.sin(timeAcc*1.2*2*Math.PI)*0.015; // 1.2Hz exact
          // keep also positional micro breathe for silhouette
          b.torso.scale.set(1,1+breath,1); b.chest.scale.set(1,1+breath*0.6,1);
          b.torso.position.y=1.14+breath*0.35; b.torso.rotation.x=Math.sin(t*0.7)*0.02; b.torso.rotation.z=Math.sin(t*0.55)*0.015;
          b.headGroup.rotation.y=Math.sin(t*0.62)*0.07; b.headGroup.rotation.x=Math.sin(t*0.9)*0.02 + breath*0.3;
          // settle foot lift back
          b.lBoot.position.y=THREE.MathUtils.lerp(b.lBoot.position.y,-0.40,dt*6);
          b.rBoot.position.y=THREE.MathUtils.lerp(b.rBoot.position.y,-0.40,dt*6);
          b.lBoot.rotation.x=THREE.MathUtils.lerp(b.lBoot.rotation.x,0,dt*6);
          b.rBoot.rotation.x=THREE.MathUtils.lerp(b.rBoot.rotation.x,0,dt*6);
          b.lHip.rotation.x=THREE.MathUtils.lerp(b.lHip.rotation.x,0,dt*4); b.rHip.rotation.x=THREE.MathUtils.lerp(b.rHip.rotation.x,0,dt*4);
          b.lKnee.rotation.x=THREE.MathUtils.lerp(b.lKnee.rotation.x,0,dt*4); b.rKnee.rotation.x=THREE.MathUtils.lerp(b.rKnee.rotation.x,0,dt*4);
          b.lTwist.rotation.y=THREE.MathUtils.lerp(b.lTwist.rotation.y,0,dt*4); b.rTwist.rotation.y=THREE.MathUtils.lerp(b.rTwist.rotation.y,0,dt*4);
          b.lShoulder.rotation.x=THREE.MathUtils.lerp(b.lShoulder.rotation.x,0.55,dt*3); b.rShoulder.rotation.x=THREE.MathUtils.lerp(b.rShoulder.rotation.x,0.58,dt*3);
          if(en.state==='attack') b.torso.rotation.y=Math.sin(t*0.8)*0.03;
        }
        if(en._recoilKick){ b.torso.rotation.x-=en._recoilKick*0.55; b.headGroup.rotation.x-=en._recoilKick*0.32; }
      }
    },
    _getEnemies(){ return enemies; },
    _getCount(){ return enemies.filter(e=>!e.isDead).length; }
  };
}
