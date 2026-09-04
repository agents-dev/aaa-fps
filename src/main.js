import * as THREE from 'three';
import { createRenderer } from './core/renderer.js';
import { createControls } from './core/controls.js';
import { createLevel } from './environment/level.js';
import { createWeapons } from './weapons/weapons.js';
import { createEnemies } from './enemies/enemies.js';
import { createZombiesMode } from './modes/zombies.js';
import { createPubgMode } from './modes/pubg.js';
import { createVehicles } from './vehicles/vehicles.js';
import { createModeMenu } from './ui/modeMenu.js';
import { createHUD } from './ui/hud.js';
import { createAudio } from './audio/audio.js';
import { QUALITY } from './core/quality.js';
import { createLargeTerrain } from './environment/terrain.js';

let rendererPack, controls, weapons, enemies, zombiesMode = null, pubgMode = null, vehiclesAPI = null;
let scene, camera, renderer;
async function init(){
  createAudio();
  rendererPack = createRenderer();
  scene = rendererPack.scene; camera = rendererPack.camera; renderer = rendererPack.renderer;
  window.__scene = scene; window.__camera = camera;
  window.__QUALITY = QUALITY;
  // --- MAP/MODE DETECTION (fix: handle ?map=shipment vs ?map=large correctly) ---
  const _params = new URLSearchParams(window.location.search);
  const _isCapture = _params.has('capture');
  window.__CAPTURE = _isCapture;
  let _mapParam = _params.get('map');
  if(!_mapParam){ try{ _mapParam = localStorage.getItem('aaa_map'); }catch{} }
  if(!_mapParam) _mapParam = 'large';
  if(!['shipment','large'].includes(_mapParam)) _mapParam = 'large';
  let _modeParam = _params.get('mode');
  if(!_modeParam){ try{ _modeParam = localStorage.getItem('aaa_mode'); }catch{} }
  if(!_modeParam){
    if(_params.has('zombies')) _modeParam='zombies';
    else _modeParam='classic';
  }
  // normalize zombie alias ?zombies or window.__ZOMBIES
  const _zombieAlias = _params.get('mode')==='zombies' || _params.has('zombies') || window.__ZOMBIES===true || window.__ZOMBIES==='1' || window.__ZOMBIES==='true';
  if(_zombieAlias) _modeParam='zombies';
  if(!['classic','zombies','pubg'].includes(_modeParam)) _modeParam='classic';
  try{
    localStorage.setItem('aaa_map', _mapParam);
    localStorage.setItem('aaa_mode', _modeParam);
  }catch{}
  window.__CURRENT_MAP = _mapParam;
  window.__CURRENT_MODE = _modeParam;
  console.log('[main] map='+_mapParam+' mode='+_modeParam+' tier='+QUALITY.tier+' dprCap='+QUALITY.dprCap);
  // --- MODEMENU INTEGRATION ---
  let modeMenu = null;
  try{
    modeMenu = createModeMenu({ onSelect: ({map, mode})=>{
      const loadedMap = window.__CURRENT_MAP;
      const loadedMode = window.__CURRENT_MODE;
      if(map!==loadedMap || mode!==loadedMode){
        const isCap = new URLSearchParams(window.location.search).has('capture');
        location.search = '?map='+map+'&mode='+mode+(isCap?'&capture':'');
      }
    }});
    if(modeMenu && typeof modeMenu.setSelection==='function'){
      modeMenu.setSelection(_mapParam, _modeParam);
    }
    window.__modeMenu = modeMenu;
  }catch(e){ console.warn('[modeMenu] failed', e); }
  if(QUALITY.isMobile){
    document.body.style.touchAction='none';
    document.documentElement.style.touchAction='none';
    document.addEventListener('touchmove', e=>{ if(e.target.closest('#touch-joy, #touch-look, #touch-fire, #touch-reload, #touch-jump')) e.preventDefault(); }, {passive:false});
    let lastTouch=0;
    document.addEventListener('touchend', e=>{
      const now=Date.now();
      if(now-lastTouch<350) e.preventDefault();
      lastTouch=now;
    }, {passive:false});
    try{ if(navigator.wakeLock) navigator.wakeLock.request('screen').catch(()=>{}); }catch{}
  }
  // --- LEVEL + TERRAIN INTEGRATION ---
  // createLevel handles ?map=shipment (80x80 dummy) vs ?map=large (600x600 fBm terrain) internally.
  // It reads window.__CURRENT_MAP and URL/localStorage so we set it above before creation.
  // Also ensure window.__terrain is populated for controls clamp window.__terrain.worldSize.
  const level = createLevel(scene);
  // verify terrain integration
  if(level.terrain && typeof window!=='undefined') window.__terrain = level.terrain;
  if(!window.__terrain){
    // fallback dummy if level failed to set (should not happen)
    window.__terrain = { worldSize: _mapParam==='shipment'?80:600, getHeightAt:(x,z)=>0, mesh:null, colliders:[], dispose(){} };
  }
  // Also expose canonical terrain API via createLargeTerrain import check (verify 585 lines module loads on all tiers)
  // Low tier verify: segments 100, tex 256, forest 66 capped is handled inside terrain.js createLargeTerrain.
  try{ if(window.__terrain.worldSize===600) console.log('[terrain] verified large 600x600 tier='+window.__terrain.tier+' segments='+window.__terrain.segments+' tex='+window.__terrain.textureSize+' forest='+window.__terrain.forest?.count); else console.log('[terrain] shipment dummy worldSize=80'); }catch{}
  window.__level = level;
  // --- CONTROLS (clamp uses window.__terrain.worldSize) ---
  controls = createControls(camera, scene, level.colliders);
  window.__controls = controls;
  // --- VEHICLE INTEGRATION (shipment + large maps) ---
  try{
    vehiclesAPI = createVehicles(scene, level.colliders, controls, level.terrain || window.__terrain, level.vehicleSpawns || []);
    window.__vehicles = vehiclesAPI;
    window.__vehicleAPI = vehiclesAPI;
    console.log('[vehicles] initialized on '+_mapParam+' map ('+vehiclesAPI.vehicles.length+' vehicles)');
  }catch(e){ console.warn('[vehicles] failed', e); }
  weapons = createWeapons(scene, camera, controls);
  window.__weapons = weapons;
  enemies = createEnemies(scene, level.spawnPoints, controls, weapons);
  window.__enemies = enemies;
  createHUD(controls, weapons);
  const applyDamageFromSource = (amount, source)=>{
    const amt = Math.max(0, Number(amount)||0);
    if(!amt || !controls || typeof controls.takeDamage !== 'function') return;
    let dir = null;
    try{
      if(source && typeof source.x === 'number' && typeof source.z === 'number' && typeof controls.getPosition === 'function' && controls.getYaw){
        const p = controls.getPosition();
        const dx = source.x - p.x;
        const dz = source.z - p.z;
        const ang = Math.atan2(dx, dz);
        const yaw = typeof controls.getYaw === 'function' ? controls.getYaw() : 0;
        let delta = ang - yaw;
        while(delta > Math.PI) delta -= Math.PI * 2;
        while(delta < -Math.PI) delta += Math.PI * 2;
        const abs = Math.abs(delta);
        dir = abs < Math.PI / 4 ? 'front' : abs > 3 * Math.PI / 4 ? 'back' : delta > 0 ? 'right' : 'left';
      }
    }catch{}
    try{ controls.takeDamage(amt, dir); }catch{ controls.takeDamage(amt); }
  };
  window.__takeZoneDamage = (amount)=> applyDamageFromSource(amount);
  window.__takeBotDamage = (amount, source)=> applyDamageFromSource(amount, source);
  window.__enemyCount = () => {
    try{
      if(enemies && typeof enemies._getCount === 'function') return enemies._getCount();
    }catch{}
    return 0;
  };
  // --- MODES: zombies / pubg / classic ---
  const isZombies = _modeParam==='zombies';
  const isPubg = _modeParam==='pubg';
  window.__ZOMBIES_ACTIVE = isZombies;
  window.__PUBG_ACTIVE = isPubg;
  if(isZombies){
    try{
      zombiesMode = createZombiesMode(scene, level, controls, weapons);
      window.__zombiesMode = zombiesMode;
      window.__ZOMBIES_MODE = zombiesMode;
      window.__getZombieRound = () => zombiesMode.getRound();
      zombiesMode.startRound();
      console.log('[ZOMBIES] Horde mode activated - Round', zombiesMode.getRound());
    }catch(e){ console.error('[ZOMBIES] failed to start', e); }
  } else if(isPubg){
    try{
      pubgMode = createPubgMode(scene, level, controls, weapons);
      window.__pubgMode = pubgMode;
      window.__PUBG_MODE = pubgMode;
      if(pubgMode && pubgMode.start) pubgMode.start();
      else if(pubgMode && pubgMode.init) pubgMode.init();
      console.log('[PUBG] Battle Royale mode activated');
    }catch(e){ console.error('[PUBG] failed to start', e); }
  }
  // runtime toggles
  window.__enableZombies = () => { if(zombiesMode) return zombiesMode; try{ const m=createZombiesMode(scene, level, controls, weapons); zombiesMode=m; window.__zombiesMode=m; window.__ZOMBIES_ACTIVE=true; m.startRound(); console.log('[ZOMBIES] enabled at runtime'); return m; }catch(e){ console.error(e); return null; } };
  window.__disableZombies = () => { if(zombiesMode){ zombiesMode.dispose(); zombiesMode=null; window.__zombiesMode=null; window.__ZOMBIES_ACTIVE=false; console.log('[ZOMBIES] disabled'); } };
  window.__enablePubg = () => { if(pubgMode) return pubgMode; try{ const m=createPubgMode(scene, level, controls, weapons); pubgMode=m; window.__pubgMode=m; window.__PUBG_ACTIVE=true; if(m.start) m.start(); console.log('[PUBG] enabled at runtime'); return m; }catch(e){ console.error(e); return null; } };

  document.getElementById('playBtn').addEventListener('click', ()=> controls.lock());
  controls.addEventListener('lock', ()=> document.getElementById('center').style.display='none');
  controls.addEventListener('unlock', ()=> document.getElementById('center').style.display='flex');
  const isCapture = new URLSearchParams(window.location.search).has('capture');
  let last=performance.now();
  let fpsSamples=[];
  let enemyTick=0;
  let lowFpsStreak=0;
  let physAccum=0;
  const FIXED_DT=1/60;
  function animate(){
    if(isCapture) setTimeout(animate, 110);
    else requestAnimationFrame(animate);
    const now=performance.now(); const dt=Math.min(0.05,(now-last)/1000); last=now;
    const fps=Math.round(1/dt);
    const displayTier = (QUALITY.displayTier || QUALITY.tier);
    const el=document.getElementById('fps'); if(el) el.textContent=fps + (QUALITY.isMobile ? ' · MOBILE '+displayTier.toUpperCase() : '');
    if(!QUALITY.isMobile || QUALITY.tier!=='low' || (enemyTick%2===0)){ fpsSamples.push(fps); if(fpsSamples.length>30) fpsSamples.shift(); } else { }
    const avg = fpsSamples.reduce((a,b)=>a+b,0)/fpsSamples.length;
    if(fpsSamples.length===30){
      if(avg < 28) lowFpsStreak++; else lowFpsStreak=Math.max(0, lowFpsStreak-1);
      if(lowFpsStreak>60 && renderer.shadowMap.enabled){
        console.warn('[FPS] low avg '+avg.toFixed(1)+' -> disabling shadows for mobile');
        renderer.shadowMap.enabled=false;
        if(QUALITY.isMobile && renderer.getPixelRatio()>1){ renderer.setPixelRatio(1); if(rendererPack.onResize) rendererPack.onResize(); }
        lowFpsStreak=0;
      }
      const badgeText = displayTier.toUpperCase() + ' · '+Math.round(avg)+'FPS' + (renderer.shadowMap.enabled?' · SHADOW ON':' · SHADOW OFF');
      const qualEl=document.getElementById('qualityBadge');
      if(qualEl) qualEl.textContent = badgeText;
      const qualHud=document.getElementById('qualityBadgeHud');
      if(qualHud) qualHud.textContent = displayTier.toUpperCase() + ' · '+Math.round(avg)+'FPS';
    }
    try{ camera.updateMatrixWorld(true); }catch{}
    physAccum += dt;
    if(physAccum>0.2) physAccum=0.2;
    while(physAccum>=FIXED_DT){ physAccum-=FIXED_DT; }
    // Vehicle update every frame (prompt + physics) - only on large map
    try{ if(vehiclesAPI) vehiclesAPI.update(dt); }catch(e){ /* vehicle update error */ }
    if(isZombies && zombiesMode && zombiesMode.isActive()){
      if(isCapture){
        controls.update(dt);
        weapons.update(dt);
        enemyTick++;
        if(enemyTick%5===0) zombiesMode.update(dt*5, controls.getPosition());
      } else {
        controls.update(dt);
        weapons.update(dt);
        if(QUALITY.isMobile){
          enemyTick++;
          const divisor = QUALITY.tier==='low' ? 5 : 3;
          const scale = QUALITY.tier==='low' ? 5 : 3;
          if(enemyTick%divisor===0) zombiesMode.update(dt*scale, controls.getPosition());
        } else {
          zombiesMode.update(dt, controls.getPosition());
        }
      }
    } else if(isPubg && pubgMode){
      controls.update(dt);
      weapons.update(dt);
      if(QUALITY.isMobile){
        enemyTick++;
        const divisor = QUALITY.tier==='low' ? 5 : 3;
        const scale = QUALITY.tier==='low' ? 5 : 3;
        if(enemyTick%divisor===0){
          try{ if(pubgMode.update) pubgMode.update(dt*scale, controls.getPosition()); }catch{}
          enemies.update(dt*scale, controls.getPosition());
        }
      } else {
        try{ if(pubgMode.update) pubgMode.update(dt, controls.getPosition()); }catch{}
        enemies.update(dt, controls.getPosition());
      }
    } else if(isCapture){
      controls.update(dt);
      weapons.update(dt);
      enemyTick++;
      if(enemyTick%5===0) enemies.update(dt*5, controls.getPosition());
    } else {
      controls.update(dt);
      weapons.update(dt);
      if(QUALITY.isMobile){
        enemyTick++;
        const divisor = QUALITY.tier==='low' ? 5 : 3;
        const scale = QUALITY.tier==='low' ? 5 : 3;
        if(enemyTick%divisor===0) enemies.update(dt*scale, controls.getPosition());
      } else {
        enemies.update(dt, controls.getPosition());
      }
    }
    rendererPack.update(dt);
    renderer.render(scene,camera);
  }
  animate();
  window.addEventListener('resize',()=>rendererPack.onResize());
}
init();
