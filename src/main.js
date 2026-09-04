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
  // MOBILE: passive touch fixes, prevent zoom/bounce, hide scroll
  if(QUALITY.isMobile){
    document.body.style.touchAction='none';
    document.documentElement.style.touchAction='none';
    document.addEventListener('touchmove', e=>{ if(e.target.closest('#touch-joy, #touch-look, #touch-fire, #touch-reload, #touch-jump')) e.preventDefault(); }, {passive:false});
    // prevent double-tap zoom
    let lastTouch=0;
    document.addEventListener('touchend', e=>{
      const now=Date.now();
      if(now-lastTouch<350) e.preventDefault();
      lastTouch=now;
    }, {passive:false});
    // keep screen awake via wake lock if available
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
  let last=performance.now();
  let fpsSamples=[];
  let enemyTick=0;
  let lowFpsStreak=0;
  function animate(){
    requestAnimationFrame(animate);
    const now=performance.now(); const dt=Math.min(0.05,(now-last)/1000); last=now;
    const fps=Math.round(1/dt);
    const el=document.getElementById('fps'); if(el) el.textContent=fps + (QUALITY.isMobile ? ' · MOBILE '+QUALITY.tier.toUpperCase() : '');
    // FPS adaptive: track samples, auto-downgrade shadows if collapse
    fpsSamples.push(fps); if(fpsSamples.length>30) fpsSamples.shift();
    const avg = fpsSamples.reduce((a,b)=>a+b,0)/fpsSamples.length;
    if(fpsSamples.length===30){
      if(avg < 28) lowFpsStreak++; else lowFpsStreak=Math.max(0, lowFpsStreak-1);
      // if 2s low fps, disable shadows live
      if(lowFpsStreak>60 && renderer.shadowMap.enabled){
        console.warn('[FPS] low avg '+avg.toFixed(1)+' -> disabling shadows for mobile');
        renderer.shadowMap.enabled=false;
        // also reduce pixel ratio if still struggling
        if(QUALITY.isMobile && renderer.getPixelRatio()>1){ renderer.setPixelRatio(1); if(rendererPack.onResize) rendererPack.onResize(); }
        lowFpsStreak=0;
      }
      // show quality badge for QA (both center and HUD)
      const badgeText = QUALITY.tier.toUpperCase() + ' · '+Math.round(avg)+'FPS' + (renderer.shadowMap.enabled?' · SHADOW ON':' · SHADOW OFF');
      const qualEl=document.getElementById('qualityBadge');
      if(qualEl) qualEl.textContent = badgeText;
      const qualHud=document.getElementById('qualityBadgeHud');
      if(qualHud) qualHud.textContent = QUALITY.tier.toUpperCase() + ' · '+Math.round(avg)+'FPS';
    }
    controls.update(dt);
    weapons.update(dt);
    // MOBILE: enemies at 1/3 rate (every 3rd frame) to save CPU - LOS raycast heavy, tile GPU fragment
    if(QUALITY.isMobile){
      enemyTick++;
      if(enemyTick%3===0) enemies.update(dt*3, controls.getPosition());
      // else skip, saves ~66% CPU on mobile vs 50% before
    } else {
      enemies.update(dt, controls.getPosition());
    }
    rendererPack.update(dt);
    renderer.render(scene,camera);
  }
  animate();
  window.addEventListener('resize',()=>rendererPack.onResize());
}
init();
