import * as THREE from 'three';
import { createRenderer } from './core/renderer.js';
import { createControls } from './core/controls.js';
import { createLevel } from './environment/level.js';
import { createWeapons } from './weapons/weapons.js';
import { createEnemies } from './enemies/enemies.js';
import { createHUD } from './ui/hud.js';
import { createAudio } from './audio/audio.js';
import { QUALITY } from './core/quality.js';

let rendererPack, controls, weapons, enemies;
let scene, camera, renderer;
async function init(){
  createAudio();
  rendererPack = createRenderer();
  scene = rendererPack.scene; camera = rendererPack.camera; renderer = rendererPack.renderer;
  window.__scene = scene; window.__camera = camera;
  window.__QUALITY = QUALITY;
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
  const level = createLevel(scene);
  controls = createControls(camera, scene, level.colliders);
  weapons = createWeapons(scene, camera, controls);
  window.__weapons = weapons;
  enemies = createEnemies(scene, level.spawnPoints, controls, weapons);
  createHUD(controls, weapons);
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
    if(isCapture){
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
