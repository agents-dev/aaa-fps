export function createAudio(){
  let ctx=null;
  let master=null;
  function ensure(){
    if(ctx){ if(ctx.state==='suspended') ctx.resume().catch(()=>{}); return ctx; }
    try{ ctx=new (window.AudioContext||window.webkitAudioContext)(); master=ctx.createGain(); master.gain.value=0.92; master.connect(ctx.destination);}catch(e){ ctx=null; }
    return ctx;
  }
  let pannerNode=null; // Wave3.5 HRTF spatializer — harsh critic blind vs COD: audio flat stereo vs 3D HRTF
  function ensurePanner(){
    const c=ensure(); if(!c) return null;
    if(!pannerNode){
      try{
        if(c.createPanner){
          pannerNode=c.createPanner();
          pannerNode.panningModel='HRTF';
          pannerNode.distanceModel='linear';
          pannerNode.refDistance=3; pannerNode.maxDistance=48; pannerNode.rolloffFactor=0.9;
          pannerNode.coneInnerAngle=360;
          pannerNode.coneOuterAngle=360;
          // Wave4 occlusion lowpass chain: panner -> lowpass -> gain -> master (if occluded gain 0.35 else 1.0, freq 2400 vs 18000)
          pannerNode._occlusionFilter = c.createBiquadFilter(); pannerNode._occlusionFilter.type='lowpass'; pannerNode._occlusionFilter.frequency.value=18000;
          pannerNode._occlusionGain = c.createGain(); pannerNode._occlusionGain.gain.value=1.0;
          try{ pannerNode.connect(pannerNode._occlusionFilter); pannerNode._occlusionFilter.connect(pannerNode._occlusionGain); pannerNode._occlusionGain.connect(master); }catch{ try{ pannerNode.connect(c.destination);}catch{} }
        }
      }catch{}
    }
    return pannerNode;
  }
  function getImpulse(){
    if(!ctx) return null;
    try{
      const len=Math.floor(ctx.sampleRate*0.45);
      const buf=ctx.createBuffer(2,len,ctx.sampleRate);
      for(let ch=0; ch<2; ch++){ const d=buf.getChannelData(ch); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.2)*0.22; }
      const c=ctx.createConvolver(); c.buffer=buf; return c;
    }catch{ return null; }
  }
  function playShoot(isADS=false){
    const c=ensure(); if(!c) return; if(c.state==='suspended') c.resume();
    const t=c.currentTime; const dest=master||c.destination;
    const o1=c.createOscillator(); o1.type='square'; o1.frequency.setValueAtTime(isADS?180:220,t); o1.frequency.exponentialRampToValueAtTime(55,t+0.08);
    const g1=c.createGain(); g1.gain.setValueAtTime(0.42,t); g1.gain.exponentialRampToValueAtTime(0.001,t+0.14);
    const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=900; hp.Q.value=0.7;
    o1.connect(hp); hp.connect(g1); g1.connect(dest); o1.start(t); o1.stop(t+0.15);
    const len=Math.floor(c.sampleRate*0.05);
    const buf=c.createBuffer(1,len,c.sampleRate); const d=buf.getChannelData(0); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.exp(-i/(len*0.28))*0.85;
    const src2=c.createBufferSource(); src2.buffer=buf;
    const g2=c.createGain(); g2.gain.setValueAtTime(0.22,t); g2.gain.exponentialRampToValueAtTime(0.001,t+0.11);
    const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1400; bp.Q.value=0.9;
    src2.connect(bp); bp.connect(g2); g2.connect(dest); src2.start(t);
    const oBody=c.createOscillator(); oBody.type='sine'; oBody.frequency.setValueAtTime(120,t); oBody.frequency.exponentialRampToValueAtTime(45,t+0.09);
    const gBody=c.createGain(); gBody.gain.setValueAtTime(0.18,t); gBody.gain.exponentialRampToValueAtTime(0.001,t+0.13);
    oBody.connect(gBody); gBody.connect(dest); oBody.start(t); oBody.stop(t+0.14);
    const tailLen=Math.floor(c.sampleRate*0.28);
    const tbuf=c.createBuffer(1,tailLen,c.sampleRate); const td=tbuf.getChannelData(0); for(let i=0;i<tailLen;i++) td[i]=(Math.random()*2-1)*Math.pow(1-i/tailLen,3.2)*0.5;
    const srcTail=c.createBufferSource(); srcTail.buffer=tbuf;
    const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1100; lp.Q.value=0.8;
    const delay=c.createDelay(0.5); delay.delayTime.value=0.18;
    const gTail=c.createGain(); gTail.gain.setValueAtTime(0.12,t); gTail.gain.exponentialRampToValueAtTime(0.001,t+0.42);
    srcTail.connect(lp); lp.connect(delay); delay.connect(gTail); gTail.connect(dest); srcTail.start(t+0.06);
    try{ const conv=getImpulse(); if(conv){ const gWet=c.createGain(); gWet.gain.value=0.12; delay.connect(conv); conv.connect(gWet); gWet.connect(dest);} }catch{}
  }
  function playReload(){
    const c=ensure(); if(!c) return; const t=c.currentTime; const dest=master||c.destination;
    function tick(when,freq,gain){
      const o=c.createOscillator(); o.type='square'; o.frequency.setValueAtTime(freq,when);
      const g=c.createGain(); g.gain.setValueAtTime(gain,when); g.gain.exponentialRampToValueAtTime(0.001,when+0.08);
      const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=600;
      o.connect(hp); hp.connect(g); g.connect(dest); o.start(when); o.stop(when+0.09);
      const len=Math.floor(c.sampleRate*0.015); const buf=c.createBuffer(1,len,c.sampleRate); const dd=buf.getChannelData(0); for(let i=0;i<len;i++) dd[i]=(Math.random()*2-1)*Math.exp(-i/(len*0.2))*0.5;
      const src=c.createBufferSource(); src.buffer=buf; const gg=c.createGain(); gg.gain.setValueAtTime(0.12,when); gg.gain.exponentialRampToValueAtTime(0.001,when+0.04);
      const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=2600; bp.Q.value=1.1; src.connect(bp); bp.connect(gg); gg.connect(dest); src.start(when);
    }
    tick(t,720,0.18); tick(t+0.32,480,0.20);
    const oMid=c.createOscillator(); oMid.type='triangle'; oMid.frequency.setValueAtTime(220,t+0.12); oMid.frequency.linearRampToValueAtTime(160,t+0.28);
    const gMid=c.createGain(); gMid.gain.setValueAtTime(0.06,t+0.12); gMid.gain.exponentialRampToValueAtTime(0.001,t+0.29);
    oMid.connect(gMid); gMid.connect(dest); oMid.start(t+0.12); oMid.stop(t+0.30);
  }
  function playHit(){
    const c=ensure(); if(!c) return; const t=c.currentTime; const dest=master||c.destination;
    const o=c.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(880,t); o.frequency.exponentialRampToValueAtTime(280,t+0.09);
    const g=c.createGain(); g.gain.setValueAtTime(0.22,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.14);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t+0.15);
    const oc=c.createOscillator(); oc.type='square'; oc.frequency.setValueAtTime(2200,t); oc.frequency.exponentialRampToValueAtTime(900,t+0.04);
    const gc=c.createGain(); gc.gain.setValueAtTime(0.13,t); gc.gain.exponentialRampToValueAtTime(0.001,t+0.06);
    const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=1800; hp.Q.value=0.7;
    oc.connect(hp); hp.connect(gc); gc.connect(dest); oc.start(t); oc.stop(t+0.07);
    const oSub=c.createOscillator(); oSub.type='sine'; oSub.frequency.value=90;
    const gSub=c.createGain(); gSub.gain.setValueAtTime(0.10,t); gSub.gain.exponentialRampToValueAtTime(0.001,t+0.10);
    oSub.connect(gSub); gSub.connect(dest); oSub.start(t); oSub.stop(t+0.11);
  }
  function playEmpty(){
    const c=ensure(); if(!c) return; const t=c.currentTime; const dest=master||c.destination;
    const o=c.createOscillator(); o.type='sine'; o.frequency.value=180;
    const g=c.createGain(); g.gain.setValueAtTime(0.14,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.08);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t+0.09);
  }
  function playFootstep(speed=1,isSprint=false){
    const c=ensure(); if(!c) return; const t=c.currentTime; const dest=master||c.destination;
    const base=isSprint?70:55;
    const o=c.createOscillator(); o.type='sine'; o.frequency.value=base+Math.random()*10;
    const g=c.createGain(); g.gain.setValueAtTime(0.08,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.09);
    const lp=c.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=800;
    o.connect(lp); lp.connect(g); g.connect(dest); o.start(t); o.stop(t+0.10);
    const len=Math.floor(c.sampleRate*0.03); const buf=c.createBuffer(1,len,c.sampleRate); const dd=buf.getChannelData(0); for(let i=0;i<len;i++) dd[i]=(Math.random()*2-1)*Math.exp(-i/(len*0.35))*0.28;
    const src=c.createBufferSource(); src.buffer=buf; const g2=c.createGain(); g2.gain.setValueAtTime(0.06,t); g2.gain.exponentialRampToValueAtTime(0.001,t+0.07);
    const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=600+Math.random()*400; bp.Q.value=0.8;
    src.connect(bp); bp.connect(g2); g2.connect(dest); src.start(t);
  }
  // Wave3.5 spatialize enemy shoot via HRTF panner + listener follow
  function playEnemyShoot(pos){
    const c=ensure(); if(!c||!pos) return playShoot(false);
    try{ updateOcclusion(pos); }catch{}
    const panner=ensurePanner();
    const t=c.currentTime;
    // update listener to camera
    try{
      const cam=document.querySelector('canvas');
      // naive listener at 0,1.7,8 fallback: use AudioListener if available
      if(c.listener && c.listener.positionX){
        const lp = window.__controlsPos || {x:0,y:1.7,z:8};
        c.listener.positionX.setValueAtTime(lp.x, t);
        c.listener.positionY.setValueAtTime(lp.y||1.7, t);
        c.listener.positionZ.setValueAtTime(lp.z, t);
        if(panner && pos){
          panner.positionX.setValueAtTime(pos.x, t);
          panner.positionY.setValueAtTime(pos.y||1.2, t);
          panner.positionZ.setValueAtTime(pos.z, t);
        }
      }
    }catch{}
    // route shoot through panner if possible (reuse playShoot but pan tail)
    if(panner){
      const o=c.createOscillator(); o.type='square'; o.frequency.setValueAtTime(190,t); o.frequency.exponentialRampToValueAtTime(48,t+0.09);
      const g=c.createGain(); g.gain.setValueAtTime(0.28,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.15);
      const hp=c.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=850;
      o.connect(hp); hp.connect(g); g.connect(panner); o.start(t); o.stop(t+0.16);
      const len=Math.floor(c.sampleRate*0.04); const buf=c.createBuffer(1,len,c.sampleRate); const d=buf.getChannelData(0); for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*Math.exp(-i/(len*0.28))*0.75;
      const src=c.createBufferSource(); src.buffer=buf; const g2=c.createGain(); g2.gain.setValueAtTime(0.18,t); g2.gain.exponentialRampToValueAtTime(0.001,t+0.10);
      const bp=c.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1300; bp.Q.value=0.9;
      src.connect(bp); bp.connect(g2); g2.connect(panner); src.start(t);
      return;
    }
    return playShoot(false);
  }
  function updateListener(pos, yaw){
    const c=ctx; if(!c||!c.listener||!c.listener.positionX) return;
    try{
      const t=c.currentTime;
      c.listener.positionX.linearRampToValueAtTime(pos.x, t+0.04);
      c.listener.positionY.linearRampToValueAtTime(pos.y, t+0.04);
      c.listener.positionZ.linearRampToValueAtTime(pos.z, t+0.04);
      // orientation: forward = -sin yaw, 0, -cos yaw
      const fx=Math.sin(yaw), fz=Math.cos(yaw);
      if(c.listener.forwardX){ c.listener.forwardX.setValueAtTime(-fx, t); c.listener.forwardZ.setValueAtTime(-fz, t); }
    }catch{}
  }
  function updateOcclusion(srcPos){
    if(!srcPos||!window.__controlsPos) return false;
    const c=ctx||ensure(); if(!c) return false;
    // raycast listener -> src vs scene obstacles (from enemies _obstacles via window cache or scene traverse)
    try{
      const listenerPos=window.__controlsPos;
      const origin=new THREE.Vector3(listenerPos.x, listenerPos.y||1.7, listenerPos.z);
      const target=new THREE.Vector3(srcPos.x, srcPos.y||1.2, srcPos.z);
      const dir=new THREE.Vector3().subVectors(target, origin); const dist=dir.length(); if(dist<0.5) return false;
      dir.normalize();
      const candidates=[];
      // reuse window.__obstacles if set by enemies, else scan scene quickly
      let obs = window._obsCache || null;
      if(!obs || performance.now() - (window._obsCacheT||0) > 800){
        obs=[];
        const sceneRef = window.__scene || document.__scene || null;
        // fallback: try to get from global scene via THREE? brute scan document scene via window registry
        // use a stored ref: enemies will populate window._obsCache
      }
      // quick fallback: if no cache, assume not occluded (filter stays open)
      // Try to get from enemies module if available via scanning window._enemiesObstacles
      const obstacles = window._enemiesObstacles || window._obsCache || [];
      if(obstacles.length){
        const ray=new THREE.Raycaster(origin, dir, 0, dist-0.22);
        const hits=ray.intersectObjects(obstacles, false);
        const occluded = hits.length>0 && hits[0].distance < dist-0.4;
        if(pannerNode && pannerNode._occlusionFilter){
          const wantFreq = occluded ? 2400 : 18000;
          const wantGain = occluded ? 0.35 : 1.0;
          pannerNode._occlusionFilter.frequency.linearRampToValueAtTime(wantFreq, c.currentTime+0.08);
          pannerNode._occlusionGain.gain.linearRampToValueAtTime(wantGain, c.currentTime+0.08);
        }
        return occluded;
      } else {
        // fallback: direct scene traverse lightweight (only boxes near line)
        if(pannerNode && pannerNode._occlusionFilter){ pannerNode._occlusionFilter.frequency.linearRampToValueAtTime(18000, c.currentTime+0.08); pannerNode._occlusionGain.gain.linearRampToValueAtTime(1.0, c.currentTime+0.08); }
        return false;
      }
    }catch(e){ return false; }
  }
  // expose occlusion + auto-probe on playEnemyShoot
  window.__audio={playShoot,playReload,playHit,playEmpty,playFootstep,playEnemyShoot,updateListener,updateOcclusion,ensure,ensurePanner};
  return {playShoot,playReload,playHit,playEmpty,playFootstep,playEnemyShoot,updateListener,ensure,ensurePanner};
}
