export function detectQuality(){
  const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const h = typeof window !== 'undefined' ? window.innerHeight : 768;
  const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? window.devicePixelRatio : 1;
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints||0) > 0);
  const isMobileUA = /Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(ua);
  const isNarrow = w < 900 || h < 700;
  const mem = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const lowMem = mem <= 4;
  const lowCores = cores <= 4;
  // force flag via query ?quality=low|high + capture mode for SwiftShader screenshots
  let force = null;
  let isCapture = false;
  try{ const p = new URLSearchParams(window.location.search); force = p.get('quality'); isCapture = p.has('capture'); }catch{}
  let _q = null;
  if(force === 'low') _q = make('low', true, 1, 1024, 256);
  else if(force === 'high') _q = make('high', false, 2, 4096, 512);
  else if(force === 'medium') _q = make('medium', false, 1.5, 2048, 512);
  else {
    const isMobile = isMobileUA || (isTouch && isNarrow);
    if(isMobile || lowMem || (lowCores && isTouch)){
      _q = make('low', true, 1, 1024, 256);
    } else if(w < 1280 || dpr > 2.2){
      _q = make('medium', false, 1.5, 2048, 512);
    } else {
      _q = make('high', false, 2, 4096, 512);
    }
  }
  // SwiftShader capture override: force low-cost forward rendering on llvmpipe
  // High+composer hangs evaluate (>10s stall). Force tier low for all LOD geometry
  // but keep displayTier for badge so ?quality=high still shows HIGH while rendering low.
  if(isCapture){
    const origTier = _q.tier;
    const origMobile = _q.isMobile;
    // rebuild as low tier (dpr1, no composer, no SSAO/bloom/heightFog, low geom)
    _q = make('low', origMobile, 1, 1024, 256);
    _q.displayTier = origTier;
    _q.isCapture = true;
    // keep badge tier as low for engine, displayTier for UI
  }
  return _q;
}
function make(tier, isMobile, dprCap, shadowSize, pmremSize){
  const anisotropy = tier === 'low' ? 1 : tier === 'medium' ? 4 : 8;
  const texScale = tier === 'low' ? 0.25 : tier === 'medium' ? 0.75 : 1;
  return {
    tier,
    isMobile,
    dprCap,
    shadowSize,
    pmremSize,
    anisotropy,
    texScale,
    useComposer: tier !== 'low', // mobile: forward rendering only for max FPS
    useSSAO: tier === 'high',
    useBloom: tier !== 'low',
    useHeightFog: tier === 'high',
    useVignette: tier !== 'low',
    useChromatic: tier === 'high',
    godRayCount: tier === 'low' ? 0 : tier === 'medium' ? 2 : 4,
    godRaySize: tier === 'low' ? 0 : tier === 'medium' ? 512 : 1024,
    puddleShimmer: tier !== 'low',
    shadowType: tier === 'low' ? 'basic' : 'pcfsoft',
    maxAnisotropy: anisotropy
  };
}
export const QUALITY = detectQuality();
if(typeof window !== 'undefined') window.__QUALITY = QUALITY;
