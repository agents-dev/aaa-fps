import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const base = 'http://127.0.0.1:5175/aaa-fps/';
const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'screenshots');
fs.mkdirSync(outDir, { recursive: true });

// System chrome by default (no ms-playwright cache on CPU hosts); override via CHROME_PATH.
// (headless_shell hangs with SwiftShader flags, so use full chrome binary directly)
const exe = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const SWIFT_ARGS = [
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--enable-unsafe-swiftshader',
  '--disable-backgrounding-occluded-windows',
  '--disable-gpu-vsync'
];

async function captureCanvas(page, outPath) {
  await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
  await page.waitForTimeout(400);
  const dataUrl = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    if (!c) return null;
    try { return c.toDataURL('image/png'); } catch(e){ return 'error:'+e.message; }
  });
  if (!dataUrl || dataUrl.startsWith('error:') || !dataUrl.startsWith('data:image')) {
    throw new Error('toDataURL failed: '+ dataUrl);
  }
  const b64 = dataUrl.split(',')[1];
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(outPath, buf);
  console.log('captured via toDataURL', path.basename(outPath), (buf.length/1024).toFixed(1)+'KB');
  return buf.length;
}

async function cap(name, viewport, isMobile, urlSuffix, extra) {
  const browser = await chromium.launch({ executablePath: exe, headless: true, args: SWIFT_ARGS });
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile: !!isMobile,
    hasTouch: !!isMobile,
    userAgent: isMobile ? devices['iPhone 14'].userAgent : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  page.on('console', m => {
    const t=m.text();
    if(t.includes('QUALITY')||t.includes('fps')||t.includes('ERROR')||t.includes('WARN')) console.log(name+' console:'+t.slice(0,200));
  });
  page.on('pageerror', e=> console.log(name+' pageerror:'+e.message.slice(0,300)));
  const url = base + urlSuffix;
  console.log(`\\n\\u2192 ${name} goto ${url} viewport ${viewport.width}x${viewport.height} mobile:${isMobile}`);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(3000);
  const quality = await page.evaluate(() => {
    const q=window.__QUALITY;
    return q ? `${q.tier} dprCap:${q.dprCap} composer:${q.useComposer} capture:${q.isCapture||false}` : 'no quality';
  });
  console.log(name+" quality:"+quality);
  const fpsText = await page.evaluate(()=> document.getElementById('fps')?.textContent?.slice(0,40));
  console.log(name+" fps:"+fpsText);
  if (extra) {
    try { await extra(page); } catch(e){ console.log(name+' extra error:'+e.message); }
    await page.waitForTimeout(900);
  }
  const outPath = path.join(outDir, name);
  let ok=false;
  try {
    const len = await captureCanvas(page, outPath);
    if(len < 50000) throw new Error('image too small '+len);
    ok=true;
  } catch(e){
    console.log(name+' toDataURL failed:'+e.message);
    // CDP fallback
    try {
      const client = await page.context().newCDPSession(page);
      const res = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      const buf = Buffer.from(res.data, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log('captured via CDP fallback', name, (buf.length/1024).toFixed(1)+'KB');
      ok=true;
    } catch(e2){
      console.log(name+' CDP fallback failed:'+e2.message);
      try{
        await page.screenshot({ path: outPath, timeout: 8000 });
        console.log('captured via page.screenshot fallback', name);
        ok=true;
      }catch(e3){ console.log(name+' screenshot fallback failed:'+e3.message); }
    }
  }
  await browser.close();
  if(!ok) throw new Error(name+' failed all capture methods');
  await new Promise(r=>setTimeout(r, 900));
}

console.log('=== SwiftShader capture start (toDataURL + chrome binary + capture param) ===');
await cap('desktop-menu.png', {width:1280,height:720}, false, '?quality=high&capture', null);
await cap('desktop-gameplay.png', {width:1280,height:720}, false, '?quality=high&capture', async (page)=>{
  try{
    await page.evaluate(()=>{ const b=document.getElementById('playBtn'); if(b) b.click(); });
    await page.waitForTimeout(1200);
    await page.evaluate(()=>{ const c=document.getElementById('center'); if(c) c.style.display='none'; });
    await page.waitForTimeout(300);
    await page.evaluate(()=>{ if(window.__camera) window.__camera.position.set(0,1.75,8); });
  }catch(e){ console.log('gameplay extra fail',e.message); }
});
await cap('mobile.png', {width:390,height:844}, true, '?quality=low&capture', null);
await cap('desktop-hd.png', {width:1920,height:1080}, false, '?quality=high&capture', null);

{
  const src = path.join(outDir, 'desktop-menu.png');
  const dst = path.join(outDir, 'thumb-menu.png');
  try { fs.copyFileSync(src, dst); console.log('copied thumb-menu.png from desktop-menu.png'); } catch(e){ console.log('thumb copy fail',e.message); }
}
console.log('\\n=== done ===');
// validate
for(const f of ['desktop-menu.png','desktop-gameplay.png','mobile.png','desktop-hd.png','thumb-menu.png']){
  const p=path.join(outDir,f);
  try{ const st=fs.statSync(p); console.log(f, (st.size/1024).toFixed(1)+'KB', st.size>100000? 'OK':'TOO SMALL'); }catch(e){ console.log(f,'missing'); }
}
