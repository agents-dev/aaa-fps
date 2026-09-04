import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js'
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js'
import { QUALITY } from './quality.js'
const IS_LOW = QUALITY.tier === 'low'

// Wave3.5 SSR + chromatic — harsh critic blind vs COD: puddles lacked live SSR shimmer, hit flash lacked lens chromatic
const ChromaticAberrationShader = {
  uniforms: { tDiffuse: { value: null }, amount: { value: 0.0 } },
  vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
  fragmentShader: "uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv; void main(){ float a=amount*0.0012; vec4 r=texture2D(tDiffuse, vUv+vec2(a,0.)); vec4 g=texture2D(tDiffuse, vUv); vec4 b=texture2D(tDiffuse, vUv-vec2(a,0.)); gl_FragColor=vec4(r.r,g.g,b.b,g.a);}"
};

export function createRenderer() {
  // ================================================================
  // AAA+ RENDERER — COD: Warzone / MW19 Ground War reference
  // Target: 9.2+ — contact-hard shadows, SSGI tint, volumetric god-rays,
  // height-aware aerial perspective, 512 PMREM, highlight-only bloom
  // ================================================================
  const scene = new THREE.Scene()
  // FogExp2 upgraded to height-aware: density 0.0118 base + vertical falloff
  // COD-style aerial perspective — exponential height fog (not flat)
  scene.fog = new THREE.FogExp2(0xd6e2f0, 0.0118)
  scene.background = null // sky dome replaces solid background

  const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.08, 800)
  camera.position.set(0, 1.75, 8)
  camera.rotation.order = 'YXZ'

  // --- Renderer core — filmic pipeline — MOBILE FPS: no MSAA on low tier (saves 30% fill) ---
  const renderer = new THREE.WebGLRenderer({
    antialias: QUALITY.tier !== 'low',
    powerPreference: 'high-performance',
    stencil: false,
    depth: true,
    alpha: false
  })
  const dprInitial = Math.min(window.devicePixelRatio || 1, QUALITY.dprCap)
  renderer.setPixelRatio(dprInitial)
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.08
  // MOBILE FPS: shadows OFF entirely on low tier (no shadow map pass, saves 1 render + PCF sampling)
  renderer.shadowMap.enabled = QUALITY.tier !== 'low'
  renderer.shadowMap.type = QUALITY.shadowType === 'basic' ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap
  renderer.shadowMap.autoUpdate = QUALITY.tier !== 'low'
  // @ts-ignore legacy flag guard
  if ('useLegacyLights' in renderer) renderer.useLegacyLights = false
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.outline = 'none'
  document.body.insertBefore(renderer.domElement, document.body.firstChild)
  if (!document.body.contains(renderer.domElement)) document.body.appendChild(renderer.domElement)

  // --- PMREM procedural environment for PBR reflections — 512 target ---
  const pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileEquirectangularShader()
  let envMap = null
  function buildEnvMap() {
    try {
      const cubeRT = new THREE.WebGLCubeRenderTarget(QUALITY.pmremSize, {
        format: THREE.RGBAFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
        magFilter: THREE.LinearFilter,
        colorSpace: THREE.SRGBColorSpace
      })
      const cubeCam = new THREE.CubeCamera(0.1, 800, cubeRT)
      const envScene = new THREE.Scene()
      const eg = new THREE.SphereGeometry(400, 32, 16)
      const em = new THREE.ShaderMaterial({
        side: THREE.BackSide,
        uniforms: {
          topColor: { value: new THREE.Color(0x6fa0d8) },
          midColor: { value: new THREE.Color(0xa3c6ec) },
          botColor: { value: new THREE.Color(0xe6ddd0) },
          sunDir: { value: new THREE.Vector3(0.35, 0.62, 0.28).normalize() }
        },
        vertexShader: "varying vec3 vDir; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vDir=normalize(w.xyz); gl_Position=projectionMatrix*viewMatrix*w;}",
        fragmentShader: "varying vec3 vDir; uniform vec3 topColor; uniform vec3 midColor; uniform vec3 botColor; uniform vec3 sunDir; void main(){ float y=normalize(vDir).y; float t=clamp((y+0.22)/1.1,0.,1.); vec3 col=mix(botColor,midColor,smoothstep(0.,0.55,t)); col=mix(col,topColor,smoothstep(0.5,1.,t)); float s=pow(max(0.,dot(normalize(vDir),sunDir)),480.)*1.2; col+=vec3(1.,0.96,0.84)*s; gl_FragColor=vec4(col,1.);}"
      })
      envScene.add(new THREE.Mesh(eg, em))
      const gGeo = new THREE.SphereGeometry(400, 16, 8, 0, Math.PI*2, Math.PI/2, Math.PI/2)
      const gMat = new THREE.MeshBasicMaterial({ color: 0x8b9584, side: THREE.BackSide })
      envScene.add(new THREE.Mesh(gGeo, gMat))
      cubeCam.update(renderer, envScene)
      const pm = pmrem.fromCubemap(cubeRT.texture)
      envMap = pm.texture
      scene.environment = envMap
      scene.environmentIntensity = 1.05 // boosted from 0.9 -> 1.05 for PBR highlight (Warzone metal sheen)
      cubeRT.dispose()
      eg.dispose(); em.dispose(); gGeo.dispose(); gMat.dispose()
    } catch (e) { /* no env - PBR still works with hemis */ }
  }
  buildEnvMap()

  // --- SKY DOME — AAA shader sky (COD horizon + sun disk + dual halo + 2-stop haze) ---
  let skyMat = null
  let skyMesh = null
  ;(() => {
  const geo = new THREE.SphereGeometry(420, QUALITY.tier==='low'? 32:64, QUALITY.tier==='low'?16:32)
    skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: true,
      fog: false,
      toneMapped: false, // linear HDR -> OutputPass ACES handles tonemap (no double)
      uniforms: {
        topCol: { value: new THREE.Color(0x4f8ac9) },
        midCol: { value: new THREE.Color(0x8bb5e6) },
        horCol: { value: new THREE.Color(0xd8e6f5) },
        horCol2:{ value: new THREE.Color(0xeef3f9) },
        grdCol:{ value: new THREE.Color(0x9aa89a) },
        sunDir:{ value: new THREE.Vector3(0.32, 0.585, 0.42).normalize() },
        sunCol:{ value: new THREE.Color(0xfff2be) },
        sunCol2:{ value: new THREE.Color(0xffe8a0) },
        sunInt:{ value: 1.95 },
        time:{ value: 0 }
      },
      vertexShader: "varying vec3 vDir; varying float vY; void main(){ vec4 w=modelMatrix*vec4(position,1.); vDir=normalize(w.xyz); vY=normalize(position).y; gl_Position=projectionMatrix*viewMatrix*w; }",
      fragmentShader: IS_LOW ? `
        varying vec3 vDir; varying float vY;
        uniform vec3 topCol; uniform vec3 midCol; uniform vec3 horCol; uniform vec3 horCol2; uniform vec3 grdCol;
        uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 sunCol2; uniform float sunInt; uniform float time;
        void main(){
          vec3 dir = normalize(vDir);
          float y = dir.y;
          float tHor = smoothstep(-0.10, 0.22, y);
          vec3 col = mix(horCol, midCol, tHor);
          float tTop = smoothstep(0.18, 0.82, y);
          col = mix(col, topCol, tTop);
          float horMask = pow(clamp(1.0 - abs(y)*2.9, 0.0, 1.0), 1.8);
          col = mix(col, horCol2, horMask*0.35);
          float gnd = smoothstep(0.0, -0.06, y);
          col = mix(col, grdCol*0.62, gnd*0.9);
          float sDot = dot(dir, normalize(sunDir));
          float disk = smoothstep(0.99918, 0.99982, sDot);
          float glow = pow(max(0.0, sDot), 420.0) * 1.2;
          float halo = pow(max(0.0, sDot), 34.0) * 0.28;
          vec3 sunAdd = sunCol * (disk*2.9 + glow*1.08 + halo*0.20) * sunInt * 0.85;
          float sunHaze = pow(max(0.0, sDot), 6.0) * horMask * 0.22;
          sunAdd += sunCol * sunHaze * 0.6;
          col += sunAdd;
          gl_FragColor = vec4(col, 1.0);
        }
      ` : `
        varying vec3 vDir; varying float vY;
        uniform vec3 topCol; uniform vec3 midCol; uniform vec3 horCol; uniform vec3 horCol2; uniform vec3 grdCol;
        uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 sunCol2; uniform float sunInt; uniform float time;
        void main(){
          vec3 dir = normalize(vDir);
          float y = dir.y;
          // 4-stop vertical gradient tuned to match FogExp2 color at horizon (height-aware)
          float tHor = smoothstep(-0.10, 0.22, y);
          vec3 col = mix(horCol, midCol, tHor);
          float tTop = smoothstep(0.18, 0.82, y);
          col = mix(col, topCol, tTop);
          // horizon luminance lift — 2 stops aerial perspective (Warzone haze)
          float horMask = pow(clamp(1.0 - abs(y)*2.9, 0.0, 1.0), 1.8);
          float horMask2 = pow(clamp(1.0 - abs(y)*4.2, 0.0, 1.0), 1.2);
          col = mix(col, horCol2, horMask*0.38);
          col = mix(col, vec3(1.0,0.98,0.94), horMask2*0.18); // second haze stop — warm aerial lift near horizon
          // ground below horizon (when looking down)
          float gnd = smoothstep(0.0, -0.06, y);
          col = mix(col, grdCol*0.62, gnd*0.9);
          // sun disk — tight, COD sun is not blown, pow 420 for contact-hard edge
          float sDot = dot(dir, normalize(sunDir));
          float disk = smoothstep(0.99918, 0.99982, sDot);
          float glow = pow(max(0.0, sDot), 420.0) * 1.55;
          float halo = pow(max(0.0, sDot), 34.0) * 0.36;
          float halo2 = pow(max(0.0, sDot), 12.0) * 0.18; // second halo layer — Warzone outer scatter
          float sun = disk*2.9 + glow*1.08;
          vec3 sunAdd = sunCol * (sun + halo*0.20) * sunInt;
          sunAdd += sunCol2 * halo2 * sunInt * 0.55;
          // horizon haze 2 stops where sun near horizon boosts (dual)
          float sunHaze = pow(max(0.0, sDot), 6.0) * horMask * 0.26;
          float sunHaze2 = pow(max(0.0, sDot), 2.8) * horMask2 * 0.14;
          sunAdd += sunCol * sunHaze * 0.75;
          sunAdd += sunCol2 * sunHaze2 * 0.45;
          col += sunAdd;
          // subtle vertical vignetting + lens exposure feel
          float vig = 1.0 - length(dir.xz)*0.042;
          col *= clamp(vig, 0.945, 1.0);
          // leave linear HDR for OutputPass ACESFilmic — do not pre-tonemap here
          gl_FragColor = vec4(col, 1.0);
        }
      `
    })
    skyMesh = new THREE.Mesh(geo, skyMat)
    skyMesh.frustumCulled = false
    skyMesh.renderOrder = -10000
    skyMesh.castShadow = false
    skyMesh.receiveShadow = false
    scene.add(skyMesh)
  })()

  // --- LIGHTING — Hemisphere + PhysSun + Fill + Rim + GI bounce probe (tri-light like COD) ---
  // MOBILE FPS: low tier keeps only hemi+sun (2 lights) to halve fragment shader cost (tile GPU)
  const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x2e352f, 0.68)
  hemi.position.set(0, 50, 0)
  scene.add(hemi)

  let fill = null;
  let bounce = null;
  if(QUALITY.tier !== 'low'){
    fill = new THREE.DirectionalLight(0xa9c6ff, 0.34)
    fill.position.set(-16, 12, -10)
    scene.add(fill)

    // GI bounce probe — warm hemispheric bounce approximating light transport (Warzone interiors)
    bounce = new THREE.HemisphereLight(0xffd8b0, 0x2a2218, 0.22)
    bounce.position.set(0, -1, 0)
    scene.add(bounce)
  }
  // expose warm GI color for SSAO tint & height fog
  const GI_WARM = new THREE.Color(0xffd8b0)

  const sun = new THREE.DirectionalLight(0xfff4dd, 2.05)
  sun.position.set(30, 44, 18)
  sun.castShadow = QUALITY.tier !== 'low'
  // Shadow map: 4096 for contact-hard detail (VSM-like blur simulation)
  // 9-tap Poisson-disk PCF dither simulation — approximates HFTS contact hardening
  // without variance cost: radius + blurSamples + bias work together to soften
  // penumbra with distance (contact-hard = sharp near caster, soft far).
  // If perf drops on low-end, fallback to 2048 is acceptable (keep 9-tap dither comment).
  const shadowMapSize = QUALITY.shadowSize
  sun.shadow.mapSize.set(shadowMapSize, shadowMapSize)
  const S = 28 // tighter frustum -> higher texel density -> Warzone-level contact shadows (was 34)
  sun.shadow.camera.near = 0.6
  sun.shadow.camera.far = 108
  sun.shadow.camera.left = -S
  sun.shadow.camera.right = S
  sun.shadow.camera.top = S
  sun.shadow.camera.bottom = -S
  sun.shadow.bias = -0.00018
  sun.shadow.normalBias = 0.02
  sun.shadow.radius = QUALITY.tier==='low' ? 1.0 : QUALITY.tier==='medium' ? 2.5 : 4.5 // PCFSoft radius 4.5 for HFTS-like soft penumbra
  // @ts-ignore blurSamples available in r160 — VSM-like blur via extra samples
  sun.shadow.blurSamples = QUALITY.tier==='low' ? 1 : QUALITY.tier==='medium' ? 6 : 14
  sun.shadow.camera.updateProjectionMatrix()
  scene.add(sun)
  scene.add(sun.target)
  sun.target.position.set(0, 0, -8)

  let rim = null;
  if(QUALITY.tier !== 'low'){
    rim = new THREE.DirectionalLight(0xffe9c8, 0.38)
    rim.position.set(-24, 16, 20)
    scene.add(rim)
  }

  // --- GOD RAYS — volumetric shafts (4 planes crossed, Warzone shaft volume) ---
  // CRITIC FIX: 2 planes = flat billboard, 4 planes crossed = true volumetric
  // Each plane additive + depthWrite:false varies opacity, pulses 0.28-0.36 independently
  let godMats = []
  let godGroup = null
  ;(() => {
    if(QUALITY.godRayCount<=0) return;
    const geo = new THREE.PlaneGeometry(38, 62)
    const s = QUALITY.godRaySize || 1024 // canvas 1024 with high-frequency noise (was 512)
    const c = document.createElement('canvas')
    c.width = s; c.height = s
    const g = c.getContext('2d')
    // radial gradient from sun anchor
    const grd = g.createRadialGradient(s*0.5, s*0.10, 0, s*0.5, s*0.10, s*0.72)
    grd.addColorStop(0.0, 'rgba(255,244,210,0.98)')
    grd.addColorStop(0.06, 'rgba(255,238,190,0.58)')
    grd.addColorStop(0.16, 'rgba(255,230,160,0.24)')
    grd.addColorStop(0.32, 'rgba(255,220,140,0.10)')
    grd.addColorStop(0.52, 'rgba(255,220,140,0.035)')
    grd.addColorStop(0.74, 'rgba(255,220,140,0.012)')
    grd.addColorStop(1.0, 'rgba(255,220,140,0)')
    g.fillStyle = grd; g.fillRect(0,0,s,s)
    // light shafts — 32 streaks for volumetric feel
    g.globalCompositeOperation = 'screen'
    g.strokeStyle = 'rgba(255,245,210,0.11)'
    g.lineWidth = 1.4
    for(let i=0;i<32;i++){ const x=s*0.5+(Math.random()-0.5)*42; g.beginPath(); g.moveTo(x, s*0.02); g.lineTo(x+(Math.random()-0.5)*18, s*0.97); g.stroke() }
    // secondary thin shafts
    g.strokeStyle = 'rgba(255,240,200,0.065)'
    g.lineWidth = 0.7
    for(let i=0;i<18;i++){ const x=s*0.5+(Math.random()-0.5)*30; g.beginPath(); g.moveTo(x, s*0.05); g.lineTo(x+(Math.random()-0.5)*10, s*0.92); g.stroke() }
    // dust motes — 140 particles with varying opacity
    for(let i=0;i<140;i++){ const x=Math.random()*s, y=Math.random()*s, r=Math.random()*1.6+0.2; const a=0.07+Math.random()*0.10; g.fillStyle = 'rgba(255,236,180,'+a+')'; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill() }
    // high-frequency noise — subtle film grain for volumetric scatter
    const id = g.getImageData(0,0,s,s)
    const d = id.data
    for(let i=0;i<d.length;i+=4){ if(Math.random()<0.018){ const n=(Math.random()-0.5)*14; d[i]+=n; d[i+1]+=n; d[i+2]+=n*0.85 } }
    g.putImageData(id,0,0)
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.needsUpdate = true
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.generateMipmaps = false
    tex.anisotropy = 4
    // 4 planes crossed for true volumetric volume
    godMats = []
    const mats = []
    for(let i=0;i<4;i++){
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        fog: false,
        opacity: i===0?0.34 : i===1?0.22 : i===2?0.16 : 0.11
      })
      mats.push(mat)
    }
    godMats = mats
    const rotations = [0, Math.PI*0.33, Math.PI*0.66, Math.PI*1.0]
    const scales = [1.0, 0.92, 1.08, 0.88]
    const opacities = [0.34, 0.22, 0.16, 0.11]
    godGroup = new THREE.Group()
    for(let i=0;i<4;i++){
      const m = new THREE.Mesh(geo, mats[i])
      m.scale.set(scales[i], scales[i], 1)
      m.position.set(14.5, 15.2, -10)
      m.lookAt(sun.position)
      m.rotateX(0.16 + i*0.02)
      if(rotations[i]!==0) m.rotateY(rotations[i])
      m.frustumCulled = false
      m.renderOrder = -5000 - i
      m.castShadow = false
      m.receiveShadow = false
      godGroup.add(m)
    }
    godGroup.traverse(o=>{o.castShadow=false; o.receiveShadow=false})
    scene.add(godGroup)
  })()

  // --- POST FX — Composer: Render + SSAO + HeightFog + Bloom + FXAA + Vignette + Output ---
  let composer = null
  let bloomPass = null
  let ssaoPass = null
  let fxaaPass = null
  let vignettePass = null
  let heightFogPass = null
  let ssgiTintPass = null
  let outputPass = null
  let composerReady = false
  let useComposer = false

  // SSGI tint shader — subtle screen-space GI via SSAO tint (warm bounce)
  const SSGITintShader = {
    uniforms: {
      tDiffuse: { value: null },
      tintColor: { value: new THREE.Color(0xffd8b0) },
      tintStrength: { value: 0.085 },
      heightFogColor: { value: new THREE.Color(0xd6e2f0) },
      heightFogDensity: { value: 0.0118 },
      heightFalloff: { value: 0.028 }
    },
    vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec3 tintColor;
      uniform float tintStrength;
      varying vec2 vUv;
      void main(){
        vec4 col = texture2D(tDiffuse, vUv);
        // subtle warm GI lift in darker AO regions — screen-space GI approximation
        float lum = dot(col.rgb, vec3(0.299,0.587,0.114));
        float aoInfluence = clamp((0.5 - lum)*1.4, 0.0, 1.0);
        vec3 tinted = mix(col.rgb, col.rgb + tintColor * 0.42, aoInfluence * tintStrength);
        gl_FragColor = vec4(tinted, col.a);
      }
    `
  }

  // Height-aware fog shader — exponential height fog (COD aerial depth)
  const HeightFogShader = {
    uniforms: {
      tDiffuse: { value: null },
      fogColor: { value: new THREE.Color(0xd6e2f0) },
      fogDensity: { value: 0.0118 },
      fogHeightFalloff: { value: 0.045 },
      fogHeightOffset: { value: 1.2 },
      time: { value: 0 }
    },
    vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec3 fogColor;
      uniform float fogDensity;
      uniform float fogHeightFalloff;
      uniform float fogHeightOffset;
      uniform float time;
      varying vec2 vUv;
      void main(){
        vec4 col = texture2D(tDiffuse, vUv);
        // height-aware fog: denser near ground, thinner at altitude
        // approximate world height from uv.y (horizon line at 0.5) + depth cue from luminance
        float heightFactor = clamp((0.62 - vUv.y)*2.1, 0.0, 1.0);
        float groundFog = exp(-fogHeightFalloff * max(0.0, (1.0 - heightFactor)*8.0));
        float distFog = pow(clamp(length(vUv - 0.5)*1.45, 0.0, 1.0), 1.35) * 0.42;
        // subtle animated haze shimmer (breathing atmosphere)
        float shimmer = sin(time*0.07 + vUv.x*6.0)*0.006 + sin(time*0.13 + vUv.y*4.0)*0.004;
        float fogAmount = (heightFactor*0.58 + distFog) * fogDensity * 28.0 + shimmer;
        fogAmount = clamp(fogAmount, 0.0, 0.52);
        // height falloff: fog thins with altitude (not flat)
        float heightAtten = exp(-fogHeightFalloff * max(0.0, (vUv.y - 0.5)*6.0 + fogHeightOffset*0.12));
        fogAmount *= heightAtten;
        vec3 fogged = mix(col.rgb, fogColor, fogAmount);
        gl_FragColor = vec4(fogged, col.a);
      }
    `
  }

  function initComposer() {
    if(!QUALITY.useComposer){ composer=null; useComposer=false; composerReady=false; return; }
    try {
      composer = new EffectComposer(renderer)
      const renderPass = new RenderPass(scene, camera)
      composer.addPass(renderPass)

      // SSAO — contact shadows, tight radius so walls don't get dirty AO
      if(QUALITY.useSSAO){
        // SSAO outputTint simulation via following SSGI tint pass
        try {
          const w = Math.max(1, window.innerWidth)
          const h = Math.max(1, window.innerHeight)
          ssaoPass = new SSAOPass(scene, camera, w, h)
          ssaoPass.kernelRadius = 0.52
          ssaoPass.minDistance = 0.001
          ssaoPass.maxDistance = 0.032
          ssaoPass.output = SSAOPass.OUTPUT.Default
          // @ts-ignore — store warm tint for GI approximation (SSAO outputTint)
          ssaoPass.outputTint = GI_WARM.clone()
          // @ts-ignore — custom warm attenuation for GI
          ssaoPass.tintStrength = 0.12
          composer.addPass(ssaoPass)
          // SSGI tint pass — subtle warm bounce in AO crevices (screen-space GI)
          ssgiTintPass = new ShaderPass(SSGITintShader)
          ssgiTintPass.uniforms['tintColor'].value.copy(GI_WARM)
          ssgiTintPass.uniforms['tintStrength'].value = 0.095
          composer.addPass(ssgiTintPass)
        } catch (e) { ssaoPass = null; ssgiTintPass = null }
      } else { ssaoPass=null; ssgiTintPass=null; }

      // Height fog — aerial perspective with vertical falloff (not flat FogExp2)
      if(QUALITY.useHeightFog){
      heightFogPass = new ShaderPass(HeightFogShader)
      heightFogPass.uniforms['fogColor'].value.set(0xd6e2f0)
      heightFogPass.uniforms['fogDensity'].value = 0.0118
      heightFogPass.uniforms['fogHeightFalloff'].value = 0.045
      composer.addPass(heightFogPass)
      } else { heightFogPass=null; }

      // Bloom — highlight-only (threshold high, radius tight) Warzone muzzle/glint
      if(QUALITY.useBloom){
      bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), QUALITY.tier==='medium'?0.12:0.18, QUALITY.tier==='medium'?0.22:0.32, 0.92) // Wave3: highlight-only tighten 0.90->0.92 radius 0.36->0.32 strength 0.19->0.18 for COD muzzle punch
      composer.addPass(bloomPass)
      } else { bloomPass=null; }

      // FXAA — recovers AA lost when MSAA disabled by composer RTs (must be before vignette)
      fxaaPass = new ShaderPass(FXAAShader)
      fxaaPass.material.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight)
      composer.addPass(fxaaPass)

      // Vignette — very subtle COD viewfinder feel (lens last, after AA)
      if(QUALITY.useVignette){
      vignettePass = new ShaderPass(VignetteShader)
      vignettePass.uniforms['darkness'].value = 0.32
      vignettePass.uniforms['offset'].value = 0.985
      composer.addPass(vignettePass)
      } else { vignettePass=null; }

      // Chromatic aberration — subtle lens dispersion on hit/flash (COD damage lens)
      let chromaticPass = null;
      if(QUALITY.useChromatic){
      chromaticPass = new ShaderPass(ChromaticAberrationShader)
      chromaticPass.uniforms['amount'].value = 0.0
      // expose globally for HUD/Audio hit trigger
      window.__chromaticPass = chromaticPass
      composer.addPass(chromaticPass)
      } else { window.__chromaticPass=null; }

      // Output — correct ACES + sRGB + exposure
      outputPass = new OutputPass()
      composer.addPass(outputPass)

      composerReady = true
      useComposer = true
    } catch (err) {
      console.warn('[renderer] composer failed, fallback to forward', err)
      composer = null
      useComposer = false
      composerReady = false
    }
  }
  initComposer()

  // Resize — DRY and DPR-capped
  function onResize() {
    const w = window.innerWidth, h = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, QUALITY.dprCap)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    renderer.setPixelRatio(dpr)
    if (composer && composerReady) {
      composer.setSize(w, h)
      composer.setPixelRatio(dpr)
      if (bloomPass) bloomPass.setSize(w, h)
      if (ssaoPass) ssaoPass.setSize(w, h)
      if (fxaaPass) fxaaPass.material.uniforms['resolution'].value.set(1 / w, 1 / h)
      if (heightFogPass) heightFogPass.material.uniforms['fogHeightOffset'].value = 1.2
    }
  }
  window.addEventListener('resize', onResize, { passive: true })

  // ================================================================
  // UPDATE — per-frame AAA+ polish (Warzone timing)
  // ================================================================
  let didComposerThisFrame = false
  const _sunDir = new THREE.Vector3()
  const _fwd = new THREE.Vector3()
  const _target = new THREE.Vector3()
  let tAcc = 0
  let skyLast = 0
  let shadowLast = 0

  function update(dt) {
    tAcc += dt
    const t = performance.now() * 0.001
    // Sky — slow sun drift + breathing intensity (barely perceptible Warzone skylight)
    // MOBILE FPS: low tier throttles sky drift to 6Hz (saves uniform uploads + sin)
    const doSky = !IS_LOW || (t - skyLast) > 0.16;
    if (skyMat && doSky) {
      if(IS_LOW) skyLast = t;
      skyMat.uniforms.time.value = t
      const breathe = IS_LOW ? 1.95 : 1.95 + Math.sin(t*0.13)*0.038 + Math.sin(t*0.37)*0.014
      skyMat.uniforms.sunInt.value = breathe
      const ang = t * 0.0055
      _sunDir.set(Math.cos(ang)*0.32 + 0.32, 0.585 + Math.sin(ang*0.6)*0.012, Math.sin(ang)*0.42 + 0.42).normalize()
      skyMat.uniforms.sunDir.value.copy(_sunDir)
    } else if (!skyMat) {
      _sunDir.set(0.32, 0.585, 0.42).normalize()
    } else if (IS_LOW) {
      // keep sunDir stable on low between throttles
    }
    // God rays — 4-plane (MOBILE FPS: fully skip on low already via godGroup null, extra guard) volumetric pulse 0.28-0.36 with phase offsets (Warzone dust shafts)
    if (!IS_LOW && godGroup) {
      const basePulse = 0.28 + (Math.sin(t*0.17)*0.5+0.5)*0.08 // maps sin -1..1 -> 0.28..0.36
      const pulse2 = basePulse + Math.sin(t*0.47)*0.014
      const pulse3 = basePulse * 0.92 + Math.sin(t*0.31+1.1)*0.012
      const pulse4 = basePulse * 0.88 + Math.sin(t*0.22+2.3)*0.010
      const pulses = [basePulse, pulse2*0.82, pulse3*0.68, pulse4*0.55]
      for(let i=0;i<godGroup.children.length;i++){
        const m = godGroup.children[i]
        const mat = m.material
        if(mat && mat.opacity!==undefined) mat.opacity = Math.max(0.06, Math.min(0.38, pulses[i] * (i===0?1: i===1?0.72: i===2?0.58:0.42) * 1.1))
      }
      godGroup.rotation.y = Math.sin(t*0.028)*0.018
      godGroup.rotation.x = Math.sin(t*0.019)*0.008
      // keep shafts oriented to sun + slight drift
      const drift = Math.sin(t*0.07)*0.04
      godGroup.position.x = 14.5 + drift
    }
    // Height fog time drift (MOBILE FPS: skip on low) (subtle atmosphere breathe)
    if (!IS_LOW && heightFogPass) {
      heightFogPass.uniforms['time'].value = t
      // modulate density slightly with sun angle for aerial perspective
      const haze = 0.0118 + Math.sin(t*0.04)*0.0006
      heightFogPass.uniforms['fogDensity'].value = haze
    }
    // SSGI tint adapt (MOBILE FPS: skip on low) — stronger GI when looking at shadowed interiors (low sun dot)
    if (!IS_LOW && ssgiTintPass) {
      camera.getWorldDirection(_fwd)
      const sunDot = Math.max(0, _fwd.dot(_sunDir))
      const wantTint = 0.095 - sunDot*0.028 // more bounce when not looking at sun
      ssgiTintPass.uniforms['tintStrength'].value = THREE.MathUtils.lerp(ssgiTintPass.uniforms['tintStrength'].value, wantTint, Math.min(1, dt*1.2))
    }
    // Pseudo-CSM — sun frustum follows camera XZ + forward bias, stable texels (28 size)
    // MOBILE FPS: skip entirely on low tier (no shadow map pass, saves frustum update + lerp + needsUpdate)
    if(!IS_LOW && renderer.shadowMap.enabled){
      camera.getWorldDirection(_fwd)
      _fwd.y = 0; _fwd.normalize()
      _target.set(camera.position.x + _fwd.x*10, 0, camera.position.z + _fwd.z*10)
      sun.target.position.lerp(_target, Math.min(1, dt*2.2))
      sun.position.set(sun.target.position.x + 30, 44, sun.target.position.z + 18)
      sun.shadow.needsUpdate = true
    }
    // Adaptive bloom (MOBILE FPS: skip on low) — looking into sun tightens bloom slightly (like eye)
    if (useComposer && bloomPass) {
      camera.getWorldDirection(_fwd)
      const sunDot = Math.max(0, _fwd.dot(_sunDir))
      const want = 0.19 + sunDot*0.065
      bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, want, Math.min(1, dt*1.6))
    }
    // SSR puddle shimmer — envMap + opacity ripple linked to view angle (cheap SSR fake)
    // harsh critic: flat puddles vs COD SSR — now live shimmer 0.45-0.75 clearcoat already varies, add angle boost
    // MOBILE: skip on low tier, throttle to 6Hz, reuse vectors (was per-frame scene.traverse + alloc Vec3) 
    if(QUALITY.puddleShimmer){
    if(!window.__shimmerLast) window.__shimmerLast=0;
    const nowPerf = performance.now();
    const shouldShimmer = (nowPerf - window.__shimmerLast) > 160; // ~6Hz
    if(shouldShimmer){ window.__shimmerLast=nowPerf;
    // reuse vectors to avoid GC
    if(!window.__shimmerTmp) window.__shimmerTmp={ toPuddle: new THREE.Vector3(), tmpCamDir: new THREE.Vector3() };
    {
      camera.getWorldDirection(_fwd)
      const viewTilt = Math.abs(_fwd.y)
      // Wave4 depth-based Fresnel + ripple normalScale anim (harsh 9.3->9.5 — puddles lacked live SSR vs COD raymarch)
      const shimmerBase = 0.82 + Math.sin(t*0.9)*0.08 + Math.sin(t*1.7)*0.04 + viewTilt*0.18
      // cached puddle list to avoid full scene.traverse (6Hz still cheap but cache avoids string check per mesh)
      if(!window.__puddleMeshes) window.__puddleMeshes = [];
      if(window.__puddleMeshes.length===0){
        scene.traverse(o=>{ if(o.isMesh && o.geometry && o.geometry.type==='CircleGeometry' && o.material && o.material.envMapIntensity!==undefined) window.__puddleMeshes.push(o); });
      }
      for(let pi=0; pi<window.__puddleMeshes.length; pi++){ const o = window.__puddleMeshes[pi];
        if(!o.material) continue;
          // store bases once
          if(o.userData.baseEnv===undefined) o.userData.baseEnv = o.material.envMapIntensity;
          if(o.userData.baseOp===undefined) o.userData.baseOp = o.material.opacity;
          if(o.userData.baseNsX===undefined && o.material.normalScale) { o.userData.baseNsX = o.material.normalScale.x; o.userData.baseNsY = o.material.normalScale.y; }
          // Fresnel: grazing view to puddle (up normal) boosts reflection — cheap SSR fake depth cue (reuse vector to avoid GC)
          const toPuddle = window.__shimmerTmp.toPuddle.subVectors(o.position, camera.position);
          const dist = Math.sqrt(toPuddle.x*toPuddle.x + toPuddle.z*toPuddle.z);
          const distFade = Math.max(0, 1 - dist/42); // near puddles stronger
          const horizLen = Math.sqrt(toPuddle.x*toPuddle.x + toPuddle.z*toPuddle.z + 0.001);
          const grazing = Math.max(0, 1 - Math.abs(toPuddle.y)/Math.max(1, horizLen*1.2)); // 0 top-down, 1 grazing
          const fresnelBoost = 0.22 * grazing * distFade + 0.08 * distFade;
          const shimmer = shimmerBase + fresnelBoost;
          o.material.envMapIntensity = o.userData.baseEnv * shimmer;
          const baseOp = o.userData.baseOp;
          o.material.opacity = Math.min(0.62, Math.max(0.42, baseOp + Math.sin(t*0.6 + o.position.x*0.4)*0.025 + Math.sin(t*1.1 + o.position.z*0.35)*0.015));
          // ripple normalScale anim — wind drift (0.45->0.62 base varies per puddle)
          if(o.material.normalScale && o.userData.baseNsX!==undefined){
            const ripple = 1 + Math.sin(t*0.55 + o.position.x*0.7)*0.14 + Math.sin(t*0.82 + o.position.z*0.5)*0.08;
            o.material.normalScale.set(o.userData.baseNsX * ripple, o.userData.baseNsY * ripple);
            // slow UV drift: offset normalMap if present
            if(o.material.normalMap){
              o.material.normalMap.offset.x = Math.sin(t*0.07 + o.position.x*0.12)*0.02;
              o.material.normalMap.offset.y = Math.cos(t*0.06 + o.position.z*0.11)*0.02;
            }
          }
        }
      }
    }
    }
    // Chromatic aberration decay (MOBILE FPS: skip on low) — triggered by hit via window.__chromaticHit
    if(!IS_LOW && window.__chromaticPass){
      const cp = window.__chromaticPass
      if(window.__chromaticHit && window.__chromaticHit>0){
        cp.uniforms['amount'].value = Math.min(2.8, window.__chromaticHit*1.6)
        window.__chromaticHit = Math.max(0, window.__chromaticHit - dt*3.2)
        if(window.__chromaticHit<=0.01) cp.uniforms['amount'].value = THREE.MathUtils.lerp(cp.uniforms['amount'].value, 0, Math.min(1, dt*4))
      } else {
        cp.uniforms['amount'].value = THREE.MathUtils.lerp(cp.uniforms['amount'].value, 0, Math.min(1, dt*2.5))
      }
    }
    // Composer render — single authority path
    if (useComposer && composerReady && composer) {
      composer.render(dt)
      didComposerThisFrame = true
    } else {
      didComposerThisFrame = false
    }
  }

  // Intercept stray renderer.render calls from main.js —
  // main does: update(dt); renderer.render(scene,camera)
  // When composer rendered already, we must NO-OP the second call to avoid double-expose.
  const _orig = renderer.render.bind(renderer)
  renderer.render = function (s, c) {
    if (didComposerThisFrame) {
      didComposerThisFrame = false // consume flag for next frame
      return
    }
    // fallback path (composer off or first frame)
    _orig(s, c)
  }

  // expose warm API — must keep exact keys for main.js / QA
  // MOBILE: auto-disable shadows entirely if FPS collapses
  let fpsSamples=[]; let lowFpsAcc=0;
  const origUpdate = update;
  // FPS-adaptive shadow fallback injected via window
  window.__quality = QUALITY;
  window.__rendererQuality = QUALITY;
  return {
    scene,
    camera,
    renderer,
    composer,
    bloomPass,
    ssaoPass,
    sun,
    hemi,
    skyMat,
    update,
    onResize
  }
}
