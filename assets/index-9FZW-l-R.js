(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lr="160",Wu=0,el=1,Xu=2,Yu=0,Wc=1,Xc=2,Li=3,Wi=0,Hn=1,$e=2,Xn=0,os=1,yi=2,nl=3,il=4,Yc=5,Ii=100,qu=101,Zu=102,ol=103,sl=104,mr=200,ju=201,Ku=202,Ju=203,gr=204,xr=205,qc=206,$u=207,Zc=208,Qu=209,th=210,eh=211,nh=212,ih=213,oh=214,sh=0,ah=1,rh=2,ga=3,lh=4,ch=5,uh=6,hh=7,jc=0,dh=1,fh=2,io=0,Kc=1,Jc=2,$c=3,Ir=4,ph=5,Qc=6,tu=300,as=301,rs=302,_r=303,vr=304,Ta=306,ri=1e3,si=1001,Mr=1002,Pn=1003,al=1004,La=1005,Yn=1006,mh=1007,wo=1008,oo=1009,gh=1010,xh=1011,Ur=1012,eu=1013,no=1014,zi=1015,_i=1016,nu=1017,iu=1018,so=1020,_h=1021,di=1023,ou=1024,vh=1025,Mo=1026,So=1027,su=1028,au=1029,Mh=1030,ru=1031,lu=1033,Ia=33776,Ua=33777,Na=33778,Fa=33779,rl=35840,ll=35841,cl=35842,ul=35843,cu=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,vl=37814,Ml=37815,yl=37816,wl=37817,Sl=37818,bl=37819,El=37820,Tl=37821,Oa=36492,Al=36494,Cl=36495,yh=36283,Rl=36284,Pl=36285,Dl=36286,uu=3e3,yo=3001,wh=3200,Sh=3201,Nr=0,bh=1,ai="",_n="srgb",Xi="srgb-linear",Fr="display-p3",Aa="display-p3-linear",xa="linear",fn="srgb",_a="rec709",va="p3",Do=7680,Ll=519,Eh=512,Th=513,Ah=514,hu=515,Ch=516,Rh=517,Ph=518,Dh=519,yr=35044,Il=35048,Ul="300 es",wr=1035,Bi=2e3,Ma=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Ts=Math.PI/180,Ls=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function Dn(n,t,e){return Math.max(t,Math.min(e,n))}function Or(n,t){return(n%t+t)%t}function Lh(n,t,e,i,o){return i+(n-t)*(o-i)/(e-t)}function Ih(n,t,e){return n!==t?(e-n)/(t-n):0}function As(n,t,e){return(1-e)*n+e*t}function Uh(n,t,e,i){return As(n,t,1-Math.exp(-e*i))}function Nh(n,t=1){return t-Math.abs(Or(n,t*2)-t)}function Fh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Oh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function zh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bh(n,t){return n+Math.random()*(t-n)}function kh(n){return n*(.5-Math.random())}function Hh(n){n!==void 0&&(Nl=n);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gh(n){return n*Ts}function Vh(n){return n*Ls}function Sr(n){return(n&n-1)===0&&n!==0}function Wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xh(n,t,e,i,o){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),u=s((t+i)/2),d=r((t+i)/2),h=s((t-i)/2),m=r((t-i)/2),f=s((i-t)/2),x=r((i-t)/2);switch(o){case"XYX":n.set(a*d,l*h,l*m,a*u);break;case"YZY":n.set(l*m,a*d,l*h,a*u);break;case"ZXZ":n.set(l*h,l*m,a*d,a*u);break;case"XZX":n.set(a*d,l*x,l*f,a*u);break;case"YXY":n.set(l*f,a*d,l*x,a*u);break;case"ZYZ":n.set(l*x,l*f,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Ts,RAD2DEG:Ls,generateUUID:Vi,clamp:Dn,euclideanModulo:Or,mapLinear:Lh,inverseLerp:Ih,lerp:As,damp:Uh,pingpong:Nh,smoothstep:Fh,smootherstep:Oh,randInt:zh,randFloat:Bh,randFloatSpread:kh,seededRandom:Hh,degToRad:Gh,radToDeg:Vh,isPowerOfTwo:Sr,ceilPowerOfTwo:Wh,floorPowerOfTwo:ya,setQuaternionFromProperEuler:Xh,normalize:cn,denormalize:Si};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*o+t.x,this.y=s*o+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(t,e,i,o,s,r,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,l,u)}set(t,e,i,o,s,r,a,l,u){const d=this.elements;return d[0]=t,d[1]=o,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],m=i[2],f=i[5],x=i[8],g=o[0],p=o[3],c=o[6],_=o[1],v=o[4],M=o[7],P=o[2],T=o[5],A=o[8];return s[0]=r*g+a*_+l*P,s[3]=r*p+a*v+l*T,s[6]=r*c+a*M+l*A,s[1]=u*g+d*_+h*P,s[4]=u*p+d*v+h*T,s[7]=u*c+d*M+h*A,s[2]=m*g+f*_+x*P,s[5]=m*p+f*v+x*T,s[8]=m*c+f*M+x*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],u=t[7],d=t[8];return e*r*d-e*a*u-i*s*d+i*a*l+o*s*u-o*r*l}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],u=t[7],d=t[8],h=d*r-a*u,m=a*l-d*s,f=u*s-r*l,x=e*h+i*m+o*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=h*g,t[1]=(o*u-d*i)*g,t[2]=(a*i-o*r)*g,t[3]=m*g,t[4]=(d*e-o*l)*g,t[5]=(o*s-a*e)*g,t[6]=f*g,t[7]=(i*l-u*e)*g,t[8]=(r*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,s,r,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*r+u*a)+r+t,-o*u,o*l,-o*(-u*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Ve;function du(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yh(){const n=wa("canvas");return n.style.display="block",n}const Fl={};function Cs(n){n in Fl||(Fl[n]=!0,console.warn(n))}const Ol=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zl=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Xi]:{transfer:xa,primaries:_a,toReference:n=>n,fromReference:n=>n},[_n]:{transfer:fn,primaries:_a,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Aa]:{transfer:xa,primaries:va,toReference:n=>n.applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Ol)},[Fr]:{transfer:fn,primaries:va,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Ol).convertLinearToSRGB()}},qh=new Set([Xi,Aa]),nn={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Fs[t].toReference,o=Fs[e].fromReference;return o(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Fs[n].primaries},getTransfer:function(n){return n===ai?xa:Fs[n].transfer}};function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Lo;class fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lo===void 0&&(Lo=wa("canvas")),Lo.width=t.width,Lo.height=t.height;const i=Lo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Lo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=ss(s[r]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ss(e[i]/255)*255):e[i]=ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zh=0;class pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(ka(o[r].image)):s.push(ka(o[r]))}else s=ka(o);i.url=s}return e||(t.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class Jn extends us{constructor(t=Jn.DEFAULT_IMAGE,e=Jn.DEFAULT_MAPPING,i=si,o=si,s=Yn,r=wo,a=di,l=oo,u=Jn.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Vi(),this.name="",this.source=new pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===yo?_n:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?yo:uu}set encoding(t){Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===yo?_n:ai}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=tu;Jn.DEFAULT_ANISOTROPY=1;class wn{constructor(t=0,e=0,i=0,o=1){wn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*o+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,s;const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],f=l[5],x=l[9],g=l[2],p=l[6],c=l[10];if(Math.abs(d-m)<.01&&Math.abs(h-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+m)<.1&&Math.abs(h+g)<.1&&Math.abs(x+p)<.1&&Math.abs(u+f+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,M=(f+1)/2,P=(c+1)/2,T=(d+m)/4,A=(h+g)/4,Q=(x+p)/4;return v>M&&v>P?v<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(v),o=T/i,s=A/i):M>P?M<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(M),i=T/o,s=Q/o):P<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(P),i=A/s,o=Q/s),this.set(i,o,s,e),this}let _=Math.sqrt((p-x)*(p-x)+(h-g)*(h-g)+(m-d)*(m-d));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-g)/_,this.z=(m-d)/_,this.w=Math.acos((u+f+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new wn(0,0,t,e),this.scissorTest=!1,this.viewport=new wn(0,0,t,e);const o={width:t,height:e,depth:1};i.encoding!==void 0&&(Cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yo?_n:ai),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Jn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Kh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class mu extends Jn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Jn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,s,r,a){let l=i[o+0],u=i[o+1],d=i[o+2],h=i[o+3];const m=s[r+0],f=s[r+1],x=s[r+2],g=s[r+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=m,t[e+1]=f,t[e+2]=x,t[e+3]=g;return}if(h!==g||l!==m||u!==f||d!==x){let p=1-a;const c=l*m+u*f+d*x+h*g,_=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,c*_);p=Math.sin(p*T)/P,a=Math.sin(a*T)/P}const M=a*_;if(l=l*p+m*M,u=u*p+f*M,d=d*p+x*M,h=h*p+g*M,p===1-a){const P=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=P,u*=P,d*=P,h*=P}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,o,s,r){const a=i[o],l=i[o+1],u=i[o+2],d=i[o+3],h=s[r],m=s[r+1],f=s[r+2],x=s[r+3];return t[e]=a*x+d*h+l*f-u*m,t[e+1]=l*x+d*m+u*h-a*f,t[e+2]=u*x+d*f+a*m-l*h,t[e+3]=d*x-a*h-l*m-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(o/2),h=a(s/2),m=l(i/2),f=l(o/2),x=l(s/2);switch(r){case"XYZ":this._x=m*d*h+u*f*x,this._y=u*f*h-m*d*x,this._z=u*d*x+m*f*h,this._w=u*d*h-m*f*x;break;case"YXZ":this._x=m*d*h+u*f*x,this._y=u*f*h-m*d*x,this._z=u*d*x-m*f*h,this._w=u*d*h+m*f*x;break;case"ZXY":this._x=m*d*h-u*f*x,this._y=u*f*h+m*d*x,this._z=u*d*x+m*f*h,this._w=u*d*h-m*f*x;break;case"ZYX":this._x=m*d*h-u*f*x,this._y=u*f*h+m*d*x,this._z=u*d*x-m*f*h,this._w=u*d*h+m*f*x;break;case"YZX":this._x=m*d*h+u*f*x,this._y=u*f*h+m*d*x,this._z=u*d*x-m*f*h,this._w=u*d*h-m*f*x;break;case"XZY":this._x=m*d*h-u*f*x,this._y=u*f*h-m*d*x,this._z=u*d*x+m*f*h,this._w=u*d*h+m*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],s=e[8],r=e[1],a=e[5],l=e[9],u=e[2],d=e[6],h=e[10],m=i+a+h;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-u)*f,this._z=(r-o)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(o+r)/f,this._z=(s+u)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-u)/f,this._x=(o+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(r-o)/f,this._x=(s+u)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Dn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,s=t._z,r=t._w,a=e._x,l=e._y,u=e._z,d=e._w;return this._x=i*d+r*a+o*u-s*l,this._y=o*d+r*l+s*a-i*u,this._z=s*d+r*u+i*l-o*a,this._w=r*d-i*a-o*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+i*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*o+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-e)*d)/u,m=Math.sin(e*d)/u;return this._w=r*h+this._w*m,this._x=i*h+this._x*m,this._y=o*h+this._y*m,this._z=s*h+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(s),i*Math.cos(s),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*o,this.y=s[1]*e+s[4]*i+s[7]*o,this.z=s[2]*e+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,s=t.x,r=t.y,a=t.z,l=t.w,u=2*(r*o-a*i),d=2*(a*e-s*o),h=2*(s*i-r*e);return this.x=e+l*u+r*h-a*d,this.y=i+l*d+a*u-s*h,this.z=o+l*h+s*d-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*o,this.y=s[1]*e+s[5]*i+s[9]*o,this.z=s[2]*e+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=o*l-s*a,this.y=s*r-i*l,this.z=i*a-o*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new E,Bl=new hs;class pn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pi):pi.fromBufferAttribute(s,r),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),zs.subVectors(this.max,ms),Io.subVectors(t.a,ms),Uo.subVectors(t.b,ms),No.subVectors(t.c,ms),Zi.subVectors(Uo,Io),ji.subVectors(No,Uo),ro.subVectors(Io,No);let e=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-ro.z,ro.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,ro.z,0,-ro.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-ro.y,ro.x,0];return!Ga(e,Io,Uo,No,zs)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Io,Uo,No,zs))?!1:(Bs.crossVectors(Zi,ji),e=[Bs.x,Bs.y,Bs.z],Ga(e,Io,Uo,No,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new E,new E,new E,new E,new E,new E,new E,new E],pi=new E,Os=new pn,Io=new E,Uo=new E,No=new E,Zi=new E,ji=new E,ro=new E,ms=new E,zs=new E,Bs=new E,lo=new E;function Ga(n,t,e,i,o){for(let s=0,r=n.length-3;s<=r;s+=3){lo.fromArray(n,s);const a=o.x*Math.abs(lo.x)+o.y*Math.abs(lo.y)+o.z*Math.abs(lo.z),l=t.dot(lo),u=e.dot(lo),d=i.dot(lo);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const $h=new pn,gs=new E,Va=new E;class Eo{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$h.setFromPoints(t).getCenter(i);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(gs,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Va)),this.expandByPoint(gs.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new E,Wa=new E,ks=new E,Ki=new E,Xa=new E,Hs=new E,Ya=new E;class Ca{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){Wa.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Wa);const s=t.distanceTo(e)*.5,r=-this.direction.dot(ks),a=Ki.dot(this.direction),l=-Ki.dot(ks),u=Ki.lengthSq(),d=Math.abs(1-r*r);let h,m,f,x;if(d>0)if(h=r*l-a,m=r*a-l,x=s*d,h>=0)if(m>=-x)if(m<=x){const g=1/d;h*=g,m*=g,f=h*(h+r*m+2*a)+m*(r*h+m+2*l)+u}else m=s,h=Math.max(0,-(r*m+a)),f=-h*h+m*(m+2*l)+u;else m=-s,h=Math.max(0,-(r*m+a)),f=-h*h+m*(m+2*l)+u;else m<=-x?(h=Math.max(0,-(-r*s+a)),m=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+m*(m+2*l)+u):m<=x?(h=0,m=Math.min(Math.max(-s,-l),s),f=m*(m+2*l)+u):(h=Math.max(0,-(r*s+a)),m=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+m*(m+2*l)+u);else m=r>0?-s:s,h=Math.max(0,-(r*m+a)),f=-h*h+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(Wa).addScaledVector(ks,m),f}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const i=Ai.dot(this.direction),o=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,s,r,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,m=this.origin;return u>=0?(i=(t.min.x-m.x)*u,o=(t.max.x-m.x)*u):(i=(t.max.x-m.x)*u,o=(t.min.x-m.x)*u),d>=0?(s=(t.min.y-m.y)*d,r=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,r=(t.min.y-m.y)*d),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),h>=0?(a=(t.min.z-m.z)*h,l=(t.max.z-m.z)*h):(a=(t.max.z-m.z)*h,l=(t.min.z-m.z)*h),i>l||a>o)||((a>i||i!==i)&&(i=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,o,s){Xa.subVectors(e,t),Hs.subVectors(i,t),Ya.crossVectors(Xa,Hs);let r=this.direction.dot(Ya),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ki.subVectors(this.origin,t);const l=a*this.direction.dot(Hs.crossVectors(Ki,Hs));if(l<0)return null;const u=a*this.direction.dot(Xa.cross(Ki));if(u<0||l+u>r)return null;const d=-a*Ki.dot(Ya);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,e,i,o,s,r,a,l,u,d,h,m,f,x,g,p){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,l,u,d,h,m,f,x,g,p)}set(t,e,i,o,s,r,a,l,u,d,h,m,f,x,g,p){const c=this.elements;return c[0]=t,c[4]=e,c[8]=i,c[12]=o,c[1]=s,c[5]=r,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=m,c[3]=f,c[7]=x,c[11]=g,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Fo.setFromMatrixColumn(t,0).length(),s=1/Fo.setFromMatrixColumn(t,1).length(),r=1/Fo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(o),u=Math.sin(o),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const m=r*d,f=r*h,x=a*d,g=a*h;e[0]=l*d,e[4]=-l*h,e[8]=u,e[1]=f+x*u,e[5]=m-g*u,e[9]=-a*l,e[2]=g-m*u,e[6]=x+f*u,e[10]=r*l}else if(t.order==="YXZ"){const m=l*d,f=l*h,x=u*d,g=u*h;e[0]=m+g*a,e[4]=x*a-f,e[8]=r*u,e[1]=r*h,e[5]=r*d,e[9]=-a,e[2]=f*a-x,e[6]=g+m*a,e[10]=r*l}else if(t.order==="ZXY"){const m=l*d,f=l*h,x=u*d,g=u*h;e[0]=m-g*a,e[4]=-r*h,e[8]=x+f*a,e[1]=f+x*a,e[5]=r*d,e[9]=g-m*a,e[2]=-r*u,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const m=r*d,f=r*h,x=a*d,g=a*h;e[0]=l*d,e[4]=x*u-f,e[8]=m*u+g,e[1]=l*h,e[5]=g*u+m,e[9]=f*u-x,e[2]=-u,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const m=r*l,f=r*u,x=a*l,g=a*u;e[0]=l*d,e[4]=g-m*h,e[8]=x*h+f,e[1]=h,e[5]=r*d,e[9]=-a*d,e[2]=-u*d,e[6]=f*h+x,e[10]=m-g*h}else if(t.order==="XZY"){const m=r*l,f=r*u,x=a*l,g=a*u;e[0]=l*d,e[4]=-h,e[8]=u*d,e[1]=m*h+g,e[5]=r*d,e[9]=f*h-x,e[2]=x*h-f,e[6]=a*d,e[10]=g*h+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,td)}lookAt(t,e,i){const o=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ji.crossVectors(i,ti),Ji.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ji.crossVectors(i,ti)),Ji.normalize(),Gs.crossVectors(ti,Ji),o[0]=Ji.x,o[4]=Gs.x,o[8]=ti.x,o[1]=Ji.y,o[5]=Gs.y,o[9]=ti.y,o[2]=Ji.z,o[6]=Gs.z,o[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],m=i[9],f=i[13],x=i[2],g=i[6],p=i[10],c=i[14],_=i[3],v=i[7],M=i[11],P=i[15],T=o[0],A=o[4],Q=o[8],w=o[12],S=o[1],k=o[5],K=o[9],rt=o[13],z=o[2],at=o[6],J=o[10],lt=o[14],V=o[3],W=o[7],C=o[11],O=o[15];return s[0]=r*T+a*S+l*z+u*V,s[4]=r*A+a*k+l*at+u*W,s[8]=r*Q+a*K+l*J+u*C,s[12]=r*w+a*rt+l*lt+u*O,s[1]=d*T+h*S+m*z+f*V,s[5]=d*A+h*k+m*at+f*W,s[9]=d*Q+h*K+m*J+f*C,s[13]=d*w+h*rt+m*lt+f*O,s[2]=x*T+g*S+p*z+c*V,s[6]=x*A+g*k+p*at+c*W,s[10]=x*Q+g*K+p*J+c*C,s[14]=x*w+g*rt+p*lt+c*O,s[3]=_*T+v*S+M*z+P*V,s[7]=_*A+v*k+M*at+P*W,s[11]=_*Q+v*K+M*J+P*C,s[15]=_*w+v*rt+M*lt+P*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],s=t[12],r=t[1],a=t[5],l=t[9],u=t[13],d=t[2],h=t[6],m=t[10],f=t[14],x=t[3],g=t[7],p=t[11],c=t[15];return x*(+s*l*h-o*u*h-s*a*m+i*u*m+o*a*f-i*l*f)+g*(+e*l*f-e*u*m+s*r*m-o*r*f+o*u*d-s*l*d)+p*(+e*u*h-e*a*f-s*r*h+i*r*f+s*a*d-i*u*d)+c*(-o*a*d-e*l*h+e*a*m+o*r*h-i*r*m+i*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],u=t[7],d=t[8],h=t[9],m=t[10],f=t[11],x=t[12],g=t[13],p=t[14],c=t[15],_=h*p*u-g*m*u+g*l*f-a*p*f-h*l*c+a*m*c,v=x*m*u-d*p*u-x*l*f+r*p*f+d*l*c-r*m*c,M=d*g*u-x*h*u+x*a*f-r*g*f-d*a*c+r*h*c,P=x*h*l-d*g*l-x*a*m+r*g*m+d*a*p-r*h*p,T=e*_+i*v+o*M+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(g*m*s-h*p*s-g*o*f+i*p*f+h*o*c-i*m*c)*A,t[2]=(a*p*s-g*l*s+g*o*u-i*p*u-a*o*c+i*l*c)*A,t[3]=(h*l*s-a*m*s-h*o*u+i*m*u+a*o*f-i*l*f)*A,t[4]=v*A,t[5]=(d*p*s-x*m*s+x*o*f-e*p*f-d*o*c+e*m*c)*A,t[6]=(x*l*s-r*p*s-x*o*u+e*p*u+r*o*c-e*l*c)*A,t[7]=(r*m*s-d*l*s+d*o*u-e*m*u-r*o*f+e*l*f)*A,t[8]=M*A,t[9]=(x*h*s-d*g*s-x*i*f+e*g*f+d*i*c-e*h*c)*A,t[10]=(r*g*s-x*a*s+x*i*u-e*g*u-r*i*c+e*a*c)*A,t[11]=(d*a*s-r*h*s-d*i*u+e*h*u+r*i*f-e*a*f)*A,t[12]=P*A,t[13]=(d*g*o-x*h*o+x*i*m-e*g*m-d*i*p+e*h*p)*A,t[14]=(x*a*o-r*g*o-x*i*l+e*g*l+r*i*p-e*a*p)*A,t[15]=(r*h*o-d*a*o+d*i*l-e*h*l-r*i*m+e*a*m)*A,this}scale(t){const e=this.elements,i=t.x,o=t.y,s=t.z;return e[0]*=i,e[4]*=o,e[8]*=s,e[1]*=i,e[5]*=o,e[9]*=s,e[2]*=i,e[6]*=o,e[10]*=s,e[3]*=i,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),s=1-i,r=t.x,a=t.y,l=t.z,u=s*r,d=s*a;return this.set(u*r+i,u*a-o*l,u*l+o*a,0,u*a+o*l,d*a+i,d*l-o*r,0,u*l-o*a,d*l+o*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,s,r){return this.set(1,i,s,0,t,1,r,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,u=s+s,d=r+r,h=a+a,m=s*u,f=s*d,x=s*h,g=r*d,p=r*h,c=a*h,_=l*u,v=l*d,M=l*h,P=i.x,T=i.y,A=i.z;return o[0]=(1-(g+c))*P,o[1]=(f+M)*P,o[2]=(x-v)*P,o[3]=0,o[4]=(f-M)*T,o[5]=(1-(m+c))*T,o[6]=(p+_)*T,o[7]=0,o[8]=(x+v)*A,o[9]=(p-_)*A,o[10]=(1-(m+g))*A,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let s=Fo.set(o[0],o[1],o[2]).length();const r=Fo.set(o[4],o[5],o[6]).length(),a=Fo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],mi.copy(this);const u=1/s,d=1/r,h=1/a;return mi.elements[0]*=u,mi.elements[1]*=u,mi.elements[2]*=u,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,e.setFromRotationMatrix(mi),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,o,s,r,a=Bi){const l=this.elements,u=2*s/(e-t),d=2*s/(i-o),h=(e+t)/(e-t),m=(i+o)/(i-o);let f,x;if(a===Bi)f=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===Ma)f=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,o,s,r,a=Bi){const l=this.elements,u=1/(e-t),d=1/(i-o),h=1/(r-s),m=(e+t)*u,f=(i+o)*d;let x,g;if(a===Bi)x=(r+s)*h,g=-2*h;else if(a===Ma)x=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Fo=new E,mi=new on,Qh=new E(0,0,0),td=new E(1,1,1),Ji=new E,Gs=new E,ti=new E,kl=new on,Hl=new hs;class ao{constructor(t=0,e=0,i=0,o=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],l=o[1],u=o[5],d=o[9],h=o[2],m=o[6],f=o[10];switch(e){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Dn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class zr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Gl=new E,Oo=new hs,Ci=new on,Vs=new E,xs=new E,nd=new E,id=new hs,Vl=new E(1,0,0),Wl=new E(0,1,0),Xl=new E(0,0,1),od={type:"added"},sd={type:"removed"};class bn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new E,e=new ao,i=new hs,o=new E(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new on},normalMatrix:{value:new Ve}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vs.copy(t):Vs.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(xs,Vs,this.up):Ci.lookAt(Vs,xs,this.up),this.quaternion.setFromRotationMatrix(Ci),o&&(Ci.extractRotation(o.matrixWorld),Oo.setFromRotationMatrix(Ci),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(od)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++){const a=o[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),u=r(t.textures),d=r(t.images),h=r(t.shapes),m=r(t.skeletons),f=r(t.animations),x=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=o,i;function r(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}bn.DEFAULT_UP=new E(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new E,Ri=new E,qa=new E,Pi=new E,zo=new E,Bo=new E,Yl=new E,Za=new E,ja=new E,Ka=new E;let Ws=!1;class hi{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),gi.subVectors(t,e),o.cross(gi);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,i,o,s){gi.subVectors(o,e),Ri.subVectors(i,e),qa.subVectors(t,e);const r=gi.dot(gi),a=gi.dot(Ri),l=gi.dot(qa),u=Ri.dot(Ri),d=Ri.dot(qa),h=r*u-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,f=(u*l-a*d)*m,x=(r*d-a*l)*m;return s.set(1-f-x,x,f)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(t,e,i,o,s,r,a,l){return Ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ws=!0),this.getInterpolation(t,e,i,o,s,r,a,l)}static getInterpolation(t,e,i,o,s,r,a,l){return this.getBarycoord(t,e,i,o,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(t,e,i,o){return gi.subVectors(i,e),Ri.subVectors(t,e),gi.cross(Ri).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),gi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,s){return Ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ws=!0),hi.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}getInterpolation(t,e,i,o,s){return hi.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,s=this.c;let r,a;zo.subVectors(o,i),Bo.subVectors(s,i),Za.subVectors(t,i);const l=zo.dot(Za),u=Bo.dot(Za);if(l<=0&&u<=0)return e.copy(i);ja.subVectors(t,o);const d=zo.dot(ja),h=Bo.dot(ja);if(d>=0&&h<=d)return e.copy(o);const m=l*h-d*u;if(m<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(i).addScaledVector(zo,r);Ka.subVectors(t,s);const f=zo.dot(Ka),x=Bo.dot(Ka);if(x>=0&&f<=x)return e.copy(s);const g=f*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),e.copy(i).addScaledVector(Bo,a);const p=d*x-f*h;if(p<=0&&h-d>=0&&f-x>=0)return Yl.subVectors(s,o),a=(h-d)/(h-d+(f-x)),e.copy(o).addScaledVector(Yl,a);const c=1/(p+g+m);return r=g*c,a=m*c,e.copy(i).addScaledVector(zo,r).addScaledVector(Bo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class xe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nn.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=nn.workingColorSpace){return this.r=t,this.g=e,this.b=i,nn.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=nn.workingColorSpace){if(t=Or(t,1),e=Dn(e,0,1),i=Dn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Ja(r,s,t+1/3),this.g=Ja(r,s,t),this.b=Ja(r,s,t-1/3)}return nn.toWorkingColorSpace(this,o),this}setStyle(t,e=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const i=gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return nn.fromWorkingColorSpace(Wn.copy(this),t),Math.round(Dn(Wn.r*255,0,255))*65536+Math.round(Dn(Wn.g*255,0,255))*256+Math.round(Dn(Wn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nn.workingColorSpace){nn.fromWorkingColorSpace(Wn.copy(this),e);const i=Wn.r,o=Wn.g,s=Wn.b,r=Math.max(i,o,s),a=Math.min(i,o,s);let l,u;const d=(a+r)/2;if(a===r)l=0,u=0;else{const h=r-a;switch(u=d<=.5?h/(r+a):h/(2-r-a),r){case i:l=(o-s)/h+(o<s?6:0);break;case o:l=(s-i)/h+2;break;case s:l=(i-o)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=nn.workingColorSpace){return nn.fromWorkingColorSpace(Wn.copy(this),e),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=_n){nn.fromWorkingColorSpace(Wn.copy(this),t);const e=Wn.r,i=Wn.g,o=Wn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Xs);const i=As($i.h,Xs.h,e),o=As($i.s,Xs.s,e),s=As($i.l,Xs.l,e);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*o,this.g=s[1]*e+s[4]*i+s[7]*o,this.b=s[2]*e+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new xe;xe.NAMES=gu;let ad=0;class Yi extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=os,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=xr,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gr&&(i.blendSrc=this.blendSrc),this.blendDst!==xr&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Do&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Do&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Do&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=o(t.textures),r=o(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mn extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tn=new E,Ys=new te;class Rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix3(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),o=cn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),o=cn(o,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yr&&(t.usage=this.usage),t}}class xu extends Rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _u extends Rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class sn extends Rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let rd=0;const ci=new on,$a=new bn,ko=new E,ei=new pn,_s=new pn,Nn=new E;class Qe extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(ei.min,_s.min),ei.expandByPoint(Nn),Nn.addVectors(ei.max,_s.max),ei.expandByPoint(Nn)):(ei.expandByPoint(_s.min),ei.expandByPoint(_s.max))}ei.getCenter(i);let o=0;for(let s=0,r=t.count;s<r;s++)Nn.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(Nn));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Nn.fromBufferAttribute(a,u),l&&(ko.fromBufferAttribute(t,u),Nn.add(ko)),o=Math.max(o,i.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,o=e.position.array,s=e.normal.array,r=e.uv.array,a=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let S=0;S<a;S++)u[S]=new E,d[S]=new E;const h=new E,m=new E,f=new E,x=new te,g=new te,p=new te,c=new E,_=new E;function v(S,k,K){h.fromArray(o,S*3),m.fromArray(o,k*3),f.fromArray(o,K*3),x.fromArray(r,S*2),g.fromArray(r,k*2),p.fromArray(r,K*2),m.sub(h),f.sub(h),g.sub(x),p.sub(x);const rt=1/(g.x*p.y-p.x*g.y);isFinite(rt)&&(c.copy(m).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(rt),_.copy(f).multiplyScalar(g.x).addScaledVector(m,-p.x).multiplyScalar(rt),u[S].add(c),u[k].add(c),u[K].add(c),d[S].add(_),d[k].add(_),d[K].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let S=0,k=M.length;S<k;++S){const K=M[S],rt=K.start,z=K.count;for(let at=rt,J=rt+z;at<J;at+=3)v(i[at+0],i[at+1],i[at+2])}const P=new E,T=new E,A=new E,Q=new E;function w(S){A.fromArray(s,S*3),Q.copy(A);const k=u[S];P.copy(k),P.sub(A.multiplyScalar(A.dot(k))).normalize(),T.crossVectors(Q,k);const rt=T.dot(d[S])<0?-1:1;l[S*4]=P.x,l[S*4+1]=P.y,l[S*4+2]=P.z,l[S*4+3]=rt}for(let S=0,k=M.length;S<k;++S){const K=M[S],rt=K.start,z=K.count;for(let at=rt,J=rt+z;at<J;at+=3)w(i[at+0]),w(i[at+1]),w(i[at+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);const o=new E,s=new E,r=new E,a=new E,l=new E,u=new E,d=new E,h=new E;if(t)for(let m=0,f=t.count;m<f;m+=3){const x=t.getX(m+0),g=t.getX(m+1),p=t.getX(m+2);o.fromBufferAttribute(e,x),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),d.subVectors(r,s),h.subVectors(o,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,p),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let m=0,f=e.count;m<f;m+=3)o.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),r.fromBufferAttribute(e,m+2),d.subVectors(r,s),h.subVectors(o,s),d.cross(h),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(a,l){const u=a.array,d=a.itemSize,h=a.normalized,m=new u.constructor(l.length*d);let f=0,x=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*d;for(let c=0;c<d;c++)m[x++]=u[f++]}return new Rn(m,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,o=this.attributes;for(const a in o){const l=o[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const m=u[d],f=t(m,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const u=r[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const o={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,m=u.length;h<m;h++){const f=u[h];d.push(f.toJSON(t.data))}d.length>0&&(o[l]=d,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const u in o){const d=o[u];this.setAttribute(u,d.clone(e))}const s=t.morphAttributes;for(const u in s){const d=[],h=s[u];for(let m=0,f=h.length;m<f;m++)d.push(h[m].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,d=r.length;u<d;u++){const h=r[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new on,co=new Ca,qs=new Eo,Zl=new E,Ho=new E,Go=new E,Vo=new E,Qa=new E,Zs=new E,js=new te,Ks=new te,Js=new te,jl=new E,Kl=new E,Jl=new E,$s=new E,Qs=new E;class I extends bn{constructor(t=new Qe,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){Zs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(Qa.fromBufferAttribute(h,t),r?Zs.addScaledVector(Qa,d):Zs.addScaledVector(Qa.sub(e),d))}e.add(Zs)}return e}raycast(t,e){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),co.copy(t.ray).recast(t.near),!(qs.containsPoint(co.origin)===!1&&(co.intersectSphere(qs,Zl)===null||co.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(ql.copy(s).invert(),co.copy(t.ray).applyMatrix4(ql),!(i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,co)))}_computeIntersections(t,e,i){let o;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,m=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,g=m.length;x<g;x++){const p=m[x],c=r[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,P=v;M<P;M+=3){const T=a.getX(M),A=a.getX(M+1),Q=a.getX(M+2);o=ta(this,c,t,i,u,d,h,T,A,Q),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const x=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=x,c=g;p<c;p+=3){const _=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);o=ta(this,r,t,i,u,d,h,_,v,M),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,g=m.length;x<g;x++){const p=m[x],c=r[p.materialIndex],_=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,P=v;M<P;M+=3){const T=M,A=M+1,Q=M+2;o=ta(this,c,t,i,u,d,h,T,A,Q),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const x=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=x,c=g;p<c;p+=3){const _=p,v=p+1,M=p+2;o=ta(this,r,t,i,u,d,h,_,v,M),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function ld(n,t,e,i,o,s,r,a){let l;if(t.side===Hn?l=i.intersectTriangle(r,s,o,!0,a):l=i.intersectTriangle(o,s,r,t.side===Wi,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Qs);return u<e.near||u>e.far?null:{distance:u,point:Qs.clone(),object:n}}function ta(n,t,e,i,o,s,r,a,l,u){n.getVertexPosition(a,Ho),n.getVertexPosition(l,Go),n.getVertexPosition(u,Vo);const d=ld(n,t,e,i,Ho,Go,Vo,$s);if(d){o&&(js.fromBufferAttribute(o,a),Ks.fromBufferAttribute(o,l),Js.fromBufferAttribute(o,u),d.uv=hi.getInterpolation($s,Ho,Go,Vo,js,Ks,Js,new te)),s&&(js.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,l),Js.fromBufferAttribute(s,u),d.uv1=hi.getInterpolation($s,Ho,Go,Vo,js,Ks,Js,new te),d.uv2=d.uv1),r&&(jl.fromBufferAttribute(r,a),Kl.fromBufferAttribute(r,l),Jl.fromBufferAttribute(r,u),d.normal=hi.getInterpolation($s,Ho,Go,Vo,jl,Kl,Jl,new E),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new E,materialIndex:0};hi.getNormal(Ho,Go,Vo,h.normal),d.face=h}return d}class Dt extends Qe{constructor(t=1,e=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const l=[],u=[],d=[],h=[];let m=0,f=0;x("z","y","x",-1,-1,i,e,t,r,s,0),x("z","y","x",1,-1,i,e,-t,r,s,1),x("x","z","y",1,1,t,i,e,o,r,2),x("x","z","y",1,-1,t,i,-e,o,r,3),x("x","y","z",1,-1,t,e,i,o,s,4),x("x","y","z",-1,-1,t,e,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(h,2));function x(g,p,c,_,v,M,P,T,A,Q,w){const S=M/A,k=P/Q,K=M/2,rt=P/2,z=T/2,at=A+1,J=Q+1;let lt=0,V=0;const W=new E;for(let C=0;C<J;C++){const O=C*k-rt;for(let gt=0;gt<at;gt++){const B=gt*S-K;W[g]=B*_,W[p]=O*v,W[c]=z,u.push(W.x,W.y,W.z),W[g]=0,W[p]=0,W[c]=T>0?1:-1,d.push(W.x,W.y,W.z),h.push(gt/A),h.push(1-C/Q),lt+=1}}for(let C=0;C<Q;C++)for(let O=0;O<A;O++){const gt=m+O+at*C,B=m+O+at*(C+1),N=m+(O+1)+at*(C+1),Z=m+(O+1)+at*C;l.push(gt,B,Z),l.push(B,N,Z),V+=6}a.addGroup(f,V,w),f+=V,m+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function jn(n){const t={};for(let e=0;e<n.length;e++){const i=ls(n[e]);for(const o in i)t[o]=i[o]}return t}function cd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vu(n){return n.getRenderTarget()===null?n.outputColorSpace:nn.workingColorSpace}const ki={clone:ls,merge:jn};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?e.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[o]={type:"m4",value:r.toArray()}:e.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mu extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class oi extends Mu{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*o/l,e-=r.offsetY*i/u,o*=r.width/l,i*=r.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wo=-90,Xo=1;class yu extends bn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(Wo,Xo,t,e);o.layers=this.layers,this.add(o);const s=new oi(Wo,Xo,t,e);s.layers=this.layers,this.add(s);const r=new oi(Wo,Xo,t,e);r.layers=this.layers,this.add(r);const a=new oi(Wo,Xo,t,e);a.layers=this.layers,this.add(a);const l=new oi(Wo,Xo,t,e);l.layers=this.layers,this.add(l);const u=new oi(Wo,Xo,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,s,r,a,l]=e;for(const u of e)this.remove(u);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,u,d]=this.children,h=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,s),t.setRenderTarget(i,1,o),t.render(e,r),t.setRenderTarget(i,2,o),t.render(e,a),t.setRenderTarget(i,3,o),t.render(e,l),t.setRenderTarget(i,4,o),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,o),t.render(e,d),t.setRenderTarget(h,m,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class wu extends Jn{constructor(t,e,i,o,s,r,a,l,u,d){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,i,o,s,r,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Su extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];e.encoding!==void 0&&(Cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===yo?_n:ai),this.texture=new wu(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Dt(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:Xn});s.uniforms.tEquirect.value=e;const r=new I(o,s),a=e.minFilter;return e.minFilter===wo&&(e.minFilter=Yn),new yu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,o);t.setRenderTarget(s)}}const tr=new E,dd=new E,fd=new Ve;class po{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=tr.subVectors(i,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(tr),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||fd.getNormalMatrix(t),o=this.coplanarPoint(tr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const uo=new Eo,ea=new E;class Br{constructor(t=new po,e=new po,i=new po,o=new po,s=new po,r=new po){this.planes=[t,e,i,o,s,r]}set(t,e,i,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi){const i=this.planes,o=t.elements,s=o[0],r=o[1],a=o[2],l=o[3],u=o[4],d=o[5],h=o[6],m=o[7],f=o[8],x=o[9],g=o[10],p=o[11],c=o[12],_=o[13],v=o[14],M=o[15];if(i[0].setComponents(l-s,m-u,p-f,M-c).normalize(),i[1].setComponents(l+s,m+u,p+f,M+c).normalize(),i[2].setComponents(l+r,m+d,p+x,M+_).normalize(),i[3].setComponents(l-r,m-d,p-x,M-_).normalize(),i[4].setComponents(l-a,m-h,p-g,M-v).normalize(),e===Bi)i[5].setComponents(l+a,m+h,p+g,M+v).normalize();else if(e===Ma)i[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),uo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),uo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(uo)}intersectsSprite(t){return uo.center.set(0,0,0),uo.radius=.7071067811865476,uo.applyMatrix4(t.matrixWorld),this.intersectsSphere(uo)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(ea.x=o.normal.x>0?t.max.x:t.min.x,ea.y=o.normal.y>0?t.max.y:t.min.y,ea.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bu(){let n=null,t=!1,e=null,i=null;function o(s,r){e(s,r),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function pd(n,t){const e=t.isWebGL2,i=new WeakMap;function o(u,d){const h=u.array,m=u.usage,f=h.byteLength,x=n.createBuffer();n.bindBuffer(d,x),n.bufferData(d,h,m),u.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:f}}function s(u,d,h){const m=d.array,f=d._updateRange,x=d.updateRanges;if(n.bindBuffer(h,u),f.count===-1&&x.length===0&&n.bufferSubData(h,0,m),x.length!==0){for(let g=0,p=x.length;g<p;g++){const c=x[g];e?n.bufferSubData(h,c.start*m.BYTES_PER_ELEMENT,m,c.start,c.count):n.bufferSubData(h,c.start*m.BYTES_PER_ELEMENT,m.subarray(c.start,c.start+c.count))}d.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(h,f.offset*m.BYTES_PER_ELEMENT,m,f.offset,f.count):n.bufferSubData(h,f.offset*m.BYTES_PER_ELEMENT,m.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const m=i.get(u);(!m||m.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,o(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,d),h.version=u.version}}return{get:r,remove:a,update:l}}class qe extends Qe{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const s=t/2,r=e/2,a=Math.floor(i),l=Math.floor(o),u=a+1,d=l+1,h=t/a,m=e/l,f=[],x=[],g=[],p=[];for(let c=0;c<d;c++){const _=c*m-r;for(let v=0;v<u;v++){const M=v*h-s;x.push(M,-_,0),g.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const v=_+u*c,M=_+u*(c+1),P=_+1+u*(c+1),T=_+1+u*c;f.push(v,M,T),f.push(M,P,T)}this.setIndex(f),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:xd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:Md,aomap_fragment:yd,aomap_pars_fragment:wd,batching_pars_vertex:Sd,batching_vertex:bd,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:Cd,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Fd,color_vertex:Od,common:zd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:qd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:jd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:cf,envmap_vertex:Jd,fog_vertex:$d,fog_pars_vertex:Qd,fog_fragment:tf,fog_pars_fragment:ef,gradientmap_pars_fragment:nf,lightmap_fragment:of,lightmap_pars_fragment:sf,lights_lambert_fragment:af,lights_lambert_pars_fragment:rf,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:hf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:xf,lights_fragment_end:_f,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:wf,map_fragment:Sf,map_pars_fragment:bf,map_particle_fragment:Ef,map_particle_pars_fragment:Tf,metalnessmap_fragment:Af,metalnessmap_pars_fragment:Cf,morphcolor_vertex:Rf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Df,morphtarget_vertex:Lf,normal_fragment_begin:If,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Ff,normal_vertex:Of,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:Yf,dithering_fragment:qf,dithering_pars_fragment:Zf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:$f,shadowmap_vertex:Qf,shadowmask_pars_fragment:t0,skinbase_vertex:e0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:o0,specularmap_fragment:s0,specularmap_pars_fragment:a0,tonemapping_fragment:r0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:u0,uv_pars_fragment:h0,uv_pars_vertex:d0,uv_vertex:f0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:x0,backgroundCube_frag:_0,cube_vert:v0,cube_frag:M0,depth_vert:y0,depth_frag:w0,distanceRGBA_vert:S0,distanceRGBA_frag:b0,equirect_vert:E0,equirect_frag:T0,linedashed_vert:A0,linedashed_frag:C0,meshbasic_vert:R0,meshbasic_frag:P0,meshlambert_vert:D0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:F0,meshphong_vert:O0,meshphong_frag:z0,meshphysical_vert:B0,meshphysical_frag:k0,meshtoon_vert:H0,meshtoon_frag:G0,points_vert:V0,points_frag:W0,shadow_vert:X0,shadow_frag:Y0,sprite_vert:q0,sprite_frag:Z0},re={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},wi={basic:{uniforms:jn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new xe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new xe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jn([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jn([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jn([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jn([re.common,re.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jn([re.lights,re.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};wi.physical={uniforms:jn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const na={r:0,b:0,g:0};function j0(n,t,e,i,o,s,r){const a=new xe(0);let l=s===!0?0:1,u,d,h=null,m=0,f=null;function x(p,c){let _=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ta)?(d===void 0&&(d=new I(new Dt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ls(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=nn.getTransfer(v.colorSpace)!==fn,(h!==v||m!==v.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,h=v,m=v.version,f=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new I(new qe(2,2),new Cn({name:"BackgroundMaterial",uniforms:ls(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=nn.getTransfer(v.colorSpace)!==fn,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||m!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,m=v.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function g(p,c){p.getRGB(na,vu(n)),i.buffers.color.setClear(na.r,na.g,na.b,c,r)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:x}}function K0(n,t,e,i){const o=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,a={},l=p(null);let u=l,d=!1;function h(z,at,J,lt,V){let W=!1;if(r){const C=g(lt,J,at);u!==C&&(u=C,f(u.object)),W=c(z,lt,J,V),W&&_(z,lt,J,V)}else{const C=at.wireframe===!0;(u.geometry!==lt.id||u.program!==J.id||u.wireframe!==C)&&(u.geometry=lt.id,u.program=J.id,u.wireframe=C,W=!0)}V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,Q(z,at,J,lt),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function m(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function g(z,at,J){const lt=J.wireframe===!0;let V=a[z.id];V===void 0&&(V={},a[z.id]=V);let W=V[at.id];W===void 0&&(W={},V[at.id]=W);let C=W[lt];return C===void 0&&(C=p(m()),W[lt]=C),C}function p(z){const at=[],J=[],lt=[];for(let V=0;V<o;V++)at[V]=0,J[V]=0,lt[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:J,attributeDivisors:lt,object:z,attributes:{},index:null}}function c(z,at,J,lt){const V=u.attributes,W=at.attributes;let C=0;const O=J.getAttributes();for(const gt in O)if(O[gt].location>=0){const N=V[gt];let Z=W[gt];if(Z===void 0&&(gt==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),gt==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),N===void 0||N.attribute!==Z||Z&&N.data!==Z.data)return!0;C++}return u.attributesNum!==C||u.index!==lt}function _(z,at,J,lt){const V={},W=at.attributes;let C=0;const O=J.getAttributes();for(const gt in O)if(O[gt].location>=0){let N=W[gt];N===void 0&&(gt==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),gt==="instanceColor"&&z.instanceColor&&(N=z.instanceColor));const Z={};Z.attribute=N,N&&N.data&&(Z.data=N.data),V[gt]=Z,C++}u.attributes=V,u.attributesNum=C,u.index=lt}function v(){const z=u.newAttributes;for(let at=0,J=z.length;at<J;at++)z[at]=0}function M(z){P(z,0)}function P(z,at){const J=u.newAttributes,lt=u.enabledAttributes,V=u.attributeDivisors;J[z]=1,lt[z]===0&&(n.enableVertexAttribArray(z),lt[z]=1),V[z]!==at&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,at),V[z]=at)}function T(){const z=u.newAttributes,at=u.enabledAttributes;for(let J=0,lt=at.length;J<lt;J++)at[J]!==z[J]&&(n.disableVertexAttribArray(J),at[J]=0)}function A(z,at,J,lt,V,W,C){C===!0?n.vertexAttribIPointer(z,at,J,V,W):n.vertexAttribPointer(z,at,J,lt,V,W)}function Q(z,at,J,lt){if(i.isWebGL2===!1&&(z.isInstancedMesh||lt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const V=lt.attributes,W=J.getAttributes(),C=at.defaultAttributeValues;for(const O in W){const gt=W[O];if(gt.location>=0){let B=V[O];if(B===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(B=z.instanceColor)),B!==void 0){const N=B.normalized,Z=B.itemSize,$=e.get(B);if($===void 0)continue;const nt=$.buffer,yt=$.type,Bt=$.bytesPerElement,et=i.isWebGL2===!0&&(yt===n.INT||yt===n.UNSIGNED_INT||B.gpuType===eu);if(B.isInterleavedBufferAttribute){const ot=B.data,U=ot.stride,Nt=B.offset;if(ot.isInstancedInterleavedBuffer){for(let pt=0;pt<gt.locationSize;pt++)P(gt.location+pt,ot.meshPerAttribute);z.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<gt.locationSize;pt++)M(gt.location+pt);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let pt=0;pt<gt.locationSize;pt++)A(gt.location+pt,Z/gt.locationSize,yt,N,U*Bt,(Nt+Z/gt.locationSize*pt)*Bt,et)}else{if(B.isInstancedBufferAttribute){for(let ot=0;ot<gt.locationSize;ot++)P(gt.location+ot,B.meshPerAttribute);z.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ot=0;ot<gt.locationSize;ot++)M(gt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ot=0;ot<gt.locationSize;ot++)A(gt.location+ot,Z/gt.locationSize,yt,N,Z*Bt,Z/gt.locationSize*ot*Bt,et)}}else if(C!==void 0){const N=C[O];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(gt.location,N);break;case 3:n.vertexAttrib3fv(gt.location,N);break;case 4:n.vertexAttrib4fv(gt.location,N);break;default:n.vertexAttrib1fv(gt.location,N)}}}}T()}function w(){K();for(const z in a){const at=a[z];for(const J in at){const lt=at[J];for(const V in lt)x(lt[V].object),delete lt[V];delete at[J]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;const at=a[z.id];for(const J in at){const lt=at[J];for(const V in lt)x(lt[V].object),delete lt[V];delete at[J]}delete a[z.id]}function k(z){for(const at in a){const J=a[at];if(J[z.id]===void 0)continue;const lt=J[z.id];for(const V in lt)x(lt[V].object),delete lt[V];delete J[z.id]}}function K(){rt(),d=!0,u!==l&&(u=l,f(u.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:rt,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function J0(n,t,e,i){const o=i.isWebGL2;let s;function r(d){s=d}function a(d,h){n.drawArrays(s,d,h),e.update(h,s,1)}function l(d,h,m){if(m===0)return;let f,x;if(o)f=n,x="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](s,d,h,m),e.update(h,s,m)}function u(d,h,m){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<m;x++)this.render(d[x],h[x]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,m);let x=0;for(let g=0;g<m;g++)x+=h[g];e.update(x,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function $0(n,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),c=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,M=r||t.has("OES_texture_float"),P=v&&M,T=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:u,getMaxAnisotropy:o,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:f,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:P,maxSamples:T}}function Q0(n){const t=this;let e=null,i=0,o=!1,s=!1;const r=new po,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const f=h.length!==0||m||i!==0||o;return o=m,i=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){e=d(h,m,0)},this.setState=function(h,m,f){const x=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,c=n.get(h);if(!o||x===null||x.length===0||s&&!p)s?d(null):u();else{const _=s?0:i,v=_*4;let M=c.clippingState||null;l.value=M,M=d(x,m,v,f);for(let P=0;P!==v;++P)M[P]=e[P];c.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,m,f,x){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,x!==!0||p===null){const c=f+g*4,_=m.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,M=f;v!==g;++v,M+=4)r.copy(h[v]).applyMatrix4(_,a),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function tp(n){let t=new WeakMap;function e(r,a){return a===_r?r.mapping=as:a===vr&&(r.mapping=rs),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===_r||a===vr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new Su(l.height/2);return u.fromEquirectangularTexture(n,r),t.set(r,u),r.addEventListener("dispose",o),e(u.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class kr extends Mu{constructor(t=-1,e=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,r=i+t,a=o+e,l=o-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,$l=[.125,.215,.35,.446,.526,.582],go=20,er=new kr,Ql=new xe;let nr=null,ir=0,or=0;const mo=(1+Math.sqrt(5))/2,Yo=1/mo,tc=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,mo,Yo),new E(0,mo,-Yo),new E(Yo,0,mo),new E(-Yo,0,mo),new E(mo,Yo,0),new E(-mo,Yo,0)];class br{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,o,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,ir,or),t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:_i,format:di,colorSpace:Xi,depthBuffer:!1},o=ec(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(s)),this._blurMaterial=np(s,t,e)}return o}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,i,o){const a=new oi(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Ql),d.toneMapping=io,d.autoClear=!1;const f=new mn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),x=new I(new Dt,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Ql),g=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;ia(o,_*v,c>2?v:0,v,v),d.setRenderTarget(o),g&&d.render(x,a),d.render(t,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===as||t.mapping===rs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ia(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,er)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=tc[(o-1)%tc.length];this._blur(t,o-1,o,s,r)}e.autoClear=i}_blur(t,e,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,o,"latitudinal",s),this._halfBlur(r,t,i,i,o,"longitudinal",s)}_halfBlur(t,e,i,o,s,r,a){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new I(this._lodPlanes[o],u),m=u.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*go-1),g=s/x,p=isFinite(s)?1+Math.floor(d*g):go;p>go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${go}`);const c=[];let _=0;for(let A=0;A<go;++A){const Q=A/g,w=Math.exp(-Q*Q/2);c.push(w),A===0?_+=w:A<p&&(_+=2*w)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=c,m.latitudinal.value=r==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:v}=this;m.dTheta.value=x,m.mipInt.value=v-i;const M=this._sizeLods[o],P=3*M*(o>v-ns?o-v+ns:0),T=4*(this._cubeSize-M);ia(e,P,T,3*M,2*M),l.setRenderTarget(e),l.render(h,er)}}function ep(n){const t=[],e=[],i=[];let o=n;const s=n-ns+1+$l.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);e.push(a);let l=1/a;r>n-ns?l=$l[r-n+ns-1]:r===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,m=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,x=6,g=3,p=2,c=1,_=new Float32Array(g*x*f),v=new Float32Array(p*x*f),M=new Float32Array(c*x*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,Q=T>2?0:-1,w=[A,Q,0,A+2/3,Q,0,A+2/3,Q+1,0,A,Q,0,A+2/3,Q+1,0,A,Q+1,0];_.set(w,g*x*T),v.set(m,p*x*T);const S=[T,T,T,T,T,T];M.set(S,c*x*T)}const P=new Qe;P.setAttribute("position",new Rn(_,g)),P.setAttribute("uv",new Rn(v,p)),P.setAttribute("faceIndex",new Rn(M,c)),t.push(P),o>ns&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ec(n,t,e){const i=new li(n,t,e);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function np(n,t,e){const i=new Float32Array(go),o=new E(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function nc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ic(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Hr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ip(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===_r||l===vr,d=l===as||l===rs;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new br(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||d&&h&&o(h)){e===null&&(e=new br(n));const m=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function o(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function op(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function sp(n,t,e,i){const o={},s=new WeakMap;function r(h){const m=h.target;m.index!==null&&t.remove(m.index);for(const x in m.attributes)t.remove(m.attributes[x]);for(const x in m.morphAttributes){const g=m.morphAttributes[x];for(let p=0,c=g.length;p<c;p++)t.remove(g[p])}m.removeEventListener("dispose",r),delete o[m.id];const f=s.get(m);f&&(t.remove(f),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(h,m){return o[m.id]===!0||(m.addEventListener("dispose",r),o[m.id]=!0,e.memory.geometries++),m}function l(h){const m=h.attributes;for(const x in m)t.update(m[x],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const x in f){const g=f[x];for(let p=0,c=g.length;p<c;p++)t.update(g[p],n.ARRAY_BUFFER)}}function u(h){const m=[],f=h.index,x=h.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let v=0,M=_.length;v<M;v+=3){const P=_[v+0],T=_[v+1],A=_[v+2];m.push(P,T,T,A,A,P)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const P=v+0,T=v+1,A=v+2;m.push(P,T,T,A,A,P)}}else return;const p=new(du(m)?_u:xu)(m,1);p.version=g;const c=s.get(h);c&&t.remove(c),s.set(h,p)}function d(h){const m=s.get(h);if(m){const f=h.index;f!==null&&m.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function ap(n,t,e,i){const o=i.isWebGL2;let s;function r(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function d(f,x){n.drawElements(s,x,a,f*l),e.update(x,s,1)}function h(f,x,g){if(g===0)return;let p,c;if(o)p=n,c="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[c](s,x,a,f*l,g),e.update(x,s,g)}function m(f,x,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<g;c++)this.render(f[c]/l,x[c]);else{p.multiDrawElementsWEBGL(s,x,0,a,f,0,g);let c=0;for(let _=0;_<g;_++)c+=x[_];e.update(c,s,1)}}this.setMode=r,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function rp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function lp(n,t){return n[0]-t[0]}function cp(n,t){return Math.abs(t[1])-Math.abs(n[1])}function up(n,t,e){const i={},o=new Float32Array(8),s=new WeakMap,r=new wn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,h){const m=u.morphTargetInfluences;if(t.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==g){let at=function(){rt.dispose(),s.delete(d),d.removeEventListener("dispose",at)};var f=at;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],Q=d.morphAttributes.color||[];let w=0;v===!0&&(w=1),M===!0&&(w=2),P===!0&&(w=3);let S=d.attributes.position.count*w,k=1;S>t.maxTextureSize&&(k=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const K=new Float32Array(S*k*4*g),rt=new mu(K,S,k,g);rt.type=zi,rt.needsUpdate=!0;const z=w*4;for(let J=0;J<g;J++){const lt=T[J],V=A[J],W=Q[J],C=S*k*4*J;for(let O=0;O<lt.count;O++){const gt=O*z;v===!0&&(r.fromBufferAttribute(lt,O),K[C+gt+0]=r.x,K[C+gt+1]=r.y,K[C+gt+2]=r.z,K[C+gt+3]=0),M===!0&&(r.fromBufferAttribute(V,O),K[C+gt+4]=r.x,K[C+gt+5]=r.y,K[C+gt+6]=r.z,K[C+gt+7]=0),P===!0&&(r.fromBufferAttribute(W,O),K[C+gt+8]=r.x,K[C+gt+9]=r.y,K[C+gt+10]=r.z,K[C+gt+11]=W.itemSize===4?r.w:1)}}p={count:g,texture:rt,size:new te(S,k)},s.set(d,p),d.addEventListener("dispose",at)}let c=0;for(let v=0;v<m.length;v++)c+=m[v];const _=d.morphTargetsRelative?1:1-c;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=m===void 0?0:m.length;let g=i[d.id];if(g===void 0||g.length!==x){g=[];for(let M=0;M<x;M++)g[M]=[M,0];i[d.id]=g}for(let M=0;M<x;M++){const P=g[M];P[0]=M,P[1]=m[M]}g.sort(cp);for(let M=0;M<8;M++)M<x&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(lp);const p=d.morphAttributes.position,c=d.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const P=a[M],T=P[0],A=P[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+M)!==p[T]&&d.setAttribute("morphTarget"+M,p[T]),c&&d.getAttribute("morphNormal"+M)!==c[T]&&d.setAttribute("morphNormal"+M,c[T]),o[M]=A,_+=A):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),c&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),o[M]=0)}const v=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",o)}}return{update:l}}function hp(n,t,e,i){let o=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=t.get(l,d);if(o.get(h)!==u&&(t.update(h),o.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;o.get(m)!==u&&(m.update(),o.set(m,u))}return h}function r(){o=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:r}}class Gr extends Jn{constructor(t,e,i,o,s,r,a,l,u,d){if(d=d!==void 0?d:Mo,d!==Mo&&d!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mo&&(i=no),i===void 0&&d===So&&(i=so),super(null,o,s,r,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eu=new Jn,Tu=new Gr(1,1);Tu.compareFunction=hu;const Au=new mu,Cu=new Jh,Ru=new wu,oc=[],sc=[],ac=new Float32Array(16),rc=new Float32Array(9),lc=new Float32Array(4);function ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let s=oc[o];if(s===void 0&&(s=new Float32Array(o),oc[o]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function Ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function In(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ra(n,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2fv(this.addr,t),In(e,t)}}function pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ln(e,t))return;n.uniform3fv(this.addr,t),In(e,t)}}function mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4fv(this.addr,t),In(e,t)}}function gp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),In(e,t)}else{if(Ln(e,i))return;lc.set(i),n.uniformMatrix2fv(this.addr,!1,lc),In(e,i)}}function xp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),In(e,t)}else{if(Ln(e,i))return;rc.set(i),n.uniformMatrix3fv(this.addr,!1,rc),In(e,i)}}function _p(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),In(e,t)}else{if(Ln(e,i))return;ac.set(i),n.uniformMatrix4fv(this.addr,!1,ac),In(e,i)}}function vp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2iv(this.addr,t),In(e,t)}}function yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;n.uniform3iv(this.addr,t),In(e,t)}}function wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4iv(this.addr,t),In(e,t)}}function Sp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;n.uniform2uiv(this.addr,t),In(e,t)}}function Ep(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;n.uniform3uiv(this.addr,t),In(e,t)}}function Tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;n.uniform4uiv(this.addr,t),In(e,t)}}function Ap(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);const s=this.type===n.SAMPLER_2D_SHADOW?Tu:Eu;e.setTexture2D(t||s,o)}function Cp(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Cu,o)}function Rp(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Ru,o)}function Pp(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Au,o)}function Dp(n){switch(n){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return xp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return wp;case 5125:return Sp;case 36294:return bp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Lp(n,t){n.uniform1fv(this.addr,t)}function Ip(n,t){const e=ds(t,this.size,2);n.uniform2fv(this.addr,e)}function Up(n,t){const e=ds(t,this.size,3);n.uniform3fv(this.addr,e)}function Np(n,t){const e=ds(t,this.size,4);n.uniform4fv(this.addr,e)}function Fp(n,t){const e=ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Op(n,t){const e=ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zp(n,t){const e=ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bp(n,t){n.uniform1iv(this.addr,t)}function kp(n,t){n.uniform2iv(this.addr,t)}function Hp(n,t){n.uniform3iv(this.addr,t)}function Gp(n,t){n.uniform4iv(this.addr,t)}function Vp(n,t){n.uniform1uiv(this.addr,t)}function Wp(n,t){n.uniform2uiv(this.addr,t)}function Xp(n,t){n.uniform3uiv(this.addr,t)}function Yp(n,t){n.uniform4uiv(this.addr,t)}function qp(n,t,e){const i=this.cache,o=t.length,s=Ra(e,o);Ln(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let r=0;r!==o;++r)e.setTexture2D(t[r]||Eu,s[r])}function Zp(n,t,e){const i=this.cache,o=t.length,s=Ra(e,o);Ln(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let r=0;r!==o;++r)e.setTexture3D(t[r]||Cu,s[r])}function jp(n,t,e){const i=this.cache,o=t.length,s=Ra(e,o);Ln(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let r=0;r!==o;++r)e.setTextureCube(t[r]||Ru,s[r])}function Kp(n,t,e){const i=this.cache,o=t.length,s=Ra(e,o);Ln(i,s)||(n.uniform1iv(this.addr,s),In(i,s));for(let r=0;r!==o;++r)e.setTexture2DArray(t[r]||Au,s[r])}function Jp(n){switch(n){case 5126:return Lp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Hp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Kp}}class $p{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class Qp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,e[a.id],i)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function cc(n,t){n.seq.push(t),n.map[t.id]=t}function em(n,t,e){const i=n.name,o=i.length;for(sr.lastIndex=0;;){const s=sr.exec(i),r=sr.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&r+2===o){cc(e,u===void 0?new $p(a,n,t):new Qp(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new tm(a),cc(e,h)),e=h}}}class ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),r=t.getUniformLocation(e,s.name);em(s,r,this)}}setValue(t,e,i,o){const s=this.map[e];s!==void 0&&s.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in e&&i.push(r)}return i}}function uc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nm=37297;let im=0;function om(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=o;r<s;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function sm(n){const t=nn.getPrimaries(nn.workingColorSpace),e=nn.getPrimaries(n);let i;switch(t===e?i="":t===va&&e===_a?i="LinearDisplayP3ToLinearSRGB":t===_a&&e===va&&(i="LinearSRGBToLinearDisplayP3"),n){case Xi:case Aa:return[i,"LinearTransferOETF"];case _n:case Fr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=n.getShaderInfoLog(t).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+om(n.getShaderSource(t),r)}else return o}function am(n,t){const e=sm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rm(n,t){let e;switch(t){case Kc:e="Linear";break;case Jc:e="Reinhard";break;case $c:e="OptimizedCineon";break;case Ir:e="ACESFilmic";break;case Qc:e="AgX";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function cm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function um(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(t,o),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function is(n){return n!==""}function dc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(n){return n.replace(dm,pm)}const fm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pm(n,t){let e=ze[t];if(e===void 0){const i=fm.get(t);if(i!==void 0)e=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Er(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(n){return n.replace(mm,gm)}function gm(n,t,e,i){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function mc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case rs:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function ym(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function wm(n,t,e,i){const o=n.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=xm(e),u=_m(e),d=vm(e),h=Mm(e),m=ym(e),f=e.isWebGL2?"":lm(e),x=cm(e),g=um(s),p=o.createProgram();let c,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),c.length>0&&(c+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),_.length>0&&(_+=`
`)):(c=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),_=[f,mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==io?"#define TONE_MAPPING":"",e.toneMapping!==io?ze.tonemapping_pars_fragment:"",e.toneMapping!==io?rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),r=Er(r),r=dc(r,e),r=fc(r,e),a=Er(a),a=dc(a,e),a=fc(a,e),r=pc(r),a=pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=v+c+r,P=v+_+a,T=uc(o,o.VERTEX_SHADER,M),A=uc(o,o.FRAGMENT_SHADER,P);o.attachShader(p,T),o.attachShader(p,A),e.index0AttributeName!==void 0?o.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(p,0,"position"),o.linkProgram(p);function Q(K){if(n.debug.checkShaderErrors){const rt=o.getProgramInfoLog(p).trim(),z=o.getShaderInfoLog(T).trim(),at=o.getShaderInfoLog(A).trim();let J=!0,lt=!0;if(o.getProgramParameter(p,o.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,p,T,A);else{const V=hc(o,T,"vertex"),W=hc(o,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(p,o.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+V+`
`+W)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(z===""||at==="")&&(lt=!1);lt&&(K.diagnostics={runnable:J,programLog:rt,vertexShader:{log:z,prefix:c},fragmentShader:{log:at,prefix:_}})}o.deleteShader(T),o.deleteShader(A),w=new ma(o,p),S=hm(o,p)}let w;this.getUniforms=function(){return w===void 0&&Q(this),w};let S;this.getAttributes=function(){return S===void 0&&Q(this),S};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(p,nm)),k},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}let Sm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Em(t),e.set(t,i)),i}}class Em{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Tm(n,t,e,i,o,s,r){const a=new zr,l=new bm,u=[],d=o.isWebGL2,h=o.logarithmicDepthBuffer,m=o.vertexTextures;let f=o.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return w===0?"uv":`uv${w}`}function p(w,S,k,K,rt){const z=K.fog,at=rt.geometry,J=w.isMeshStandardMaterial?K.environment:null,lt=(w.isMeshStandardMaterial?e:t).get(w.envMap||J),V=lt&&lt.mapping===Ta?lt.image.height:null,W=x[w.type];w.precision!==null&&(f=o.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const C=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,O=C!==void 0?C.length:0;let gt=0;at.morphAttributes.position!==void 0&&(gt=1),at.morphAttributes.normal!==void 0&&(gt=2),at.morphAttributes.color!==void 0&&(gt=3);let B,N,Z,$;if(W){const Mt=wi[W];B=Mt.vertexShader,N=Mt.fragmentShader}else B=w.vertexShader,N=w.fragmentShader,l.update(w),Z=l.getVertexShaderID(w),$=l.getFragmentShaderID(w);const nt=n.getRenderTarget(),yt=rt.isInstancedMesh===!0,Bt=rt.isBatchedMesh===!0,et=!!w.map,ot=!!w.matcap,U=!!lt,Nt=!!w.aoMap,pt=!!w.lightMap,Tt=!!w.bumpMap,Wt=!!w.normalMap,pe=!!w.displacementMap,Xt=!!w.emissiveMap,D=!!w.metalnessMap,b=!!w.roughnessMap,X=w.anisotropy>0,kt=w.clearcoat>0,Ut=w.iridescence>0,Ot=w.sheen>0,ee=w.transmission>0,Yt=X&&!!w.anisotropyMap,qt=kt&&!!w.clearcoatMap,le=kt&&!!w.clearcoatNormalMap,me=kt&&!!w.clearcoatRoughnessMap,Ft=Ut&&!!w.iridescenceMap,Ae=Ut&&!!w.iridescenceThicknessMap,Ce=Ot&&!!w.sheenColorMap,_e=Ot&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,ce=!!w.specularColorMap,q=!!w.specularIntensityMap,Rt=ee&&!!w.transmissionMap,Lt=ee&&!!w.thicknessMap,vt=!!w.gradientMap,F=!!w.alphaMap,L=w.alphaTest>0,dt=!!w.alphaHash,Pt=!!w.extensions,j=!!at.attributes.uv1,It=!!at.attributes.uv2,Y=!!at.attributes.uv3;let tt=io;return w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(tt=n.toneMapping),{isWebGL2:d,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:B,fragmentShader:N,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Bt,instancing:yt,instancingColor:yt&&rt.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xi,map:et,matcap:ot,envMap:U,envMapMode:U&&lt.mapping,envMapCubeUVHeight:V,aoMap:Nt,lightMap:pt,bumpMap:Tt,normalMap:Wt,displacementMap:m&&pe,emissiveMap:Xt,normalMapObjectSpace:Wt&&w.normalMapType===bh,normalMapTangentSpace:Wt&&w.normalMapType===Nr,metalnessMap:D,roughnessMap:b,anisotropy:X,anisotropyMap:Yt,clearcoat:kt,clearcoatMap:qt,clearcoatNormalMap:le,clearcoatRoughnessMap:me,iridescence:Ut,iridescenceMap:Ft,iridescenceThicknessMap:Ae,sheen:Ot,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:Zt,specularColorMap:ce,specularIntensityMap:q,transmission:ee,transmissionMap:Rt,thicknessMap:Lt,gradientMap:vt,opaque:w.transparent===!1&&w.blending===os,alphaMap:F,alphaTest:L,alphaHash:dt,combine:w.combine,mapUv:et&&g(w.map.channel),aoMapUv:Nt&&g(w.aoMap.channel),lightMapUv:pt&&g(w.lightMap.channel),bumpMapUv:Tt&&g(w.bumpMap.channel),normalMapUv:Wt&&g(w.normalMap.channel),displacementMapUv:pe&&g(w.displacementMap.channel),emissiveMapUv:Xt&&g(w.emissiveMap.channel),metalnessMapUv:D&&g(w.metalnessMap.channel),roughnessMapUv:b&&g(w.roughnessMap.channel),anisotropyMapUv:Yt&&g(w.anisotropyMap.channel),clearcoatMapUv:qt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(w.sheenRoughnessMap.channel),specularMapUv:Zt&&g(w.specularMap.channel),specularColorMapUv:ce&&g(w.specularColorMap.channel),specularIntensityMapUv:q&&g(w.specularIntensityMap.channel),transmissionMapUv:Rt&&g(w.transmissionMap.channel),thicknessMapUv:Lt&&g(w.thicknessMap.channel),alphaMapUv:F&&g(w.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Wt||X),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:It,vertexUv3s:Y,pointsUvs:rt.isPoints===!0&&!!at.attributes.uv&&(et||F),fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:rt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:et&&w.map.isVideoTexture===!0&&nn.getTransfer(w.map.colorSpace)===fn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$e,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Pt&&w.extensions.derivatives===!0,extensionFragDepth:Pt&&w.extensions.fragDepth===!0,extensionDrawBuffers:Pt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function c(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)S.push(k),S.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(_(S,w),v(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function M(w){const S=x[w.type];let k;if(S){const K=wi[S];k=ki.clone(K.uniforms)}else k=w.uniforms;return k}function P(w,S){let k;for(let K=0,rt=u.length;K<rt;K++){const z=u[K];if(z.cacheKey===S){k=z,++k.usedTimes;break}}return k===void 0&&(k=new wm(n,S,w,s),u.push(k)),k}function T(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function Q(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:M,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:Q}}function Am(){let n=new WeakMap;function t(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function e(s){n.delete(s)}function i(s,r,a){n.get(s)[r]=a}function o(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function Cm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xc(){const n=[];let t=0;const e=[],i=[],o=[];function s(){t=0,e.length=0,i.length=0,o.length=0}function r(h,m,f,x,g,p){let c=n[t];return c===void 0?(c={id:h.id,object:h,geometry:m,material:f,groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},n[t]=c):(c.id=h.id,c.object=h,c.geometry=m,c.material=f,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=g,c.group=p),t++,c}function a(h,m,f,x,g,p){const c=r(h,m,f,x,g,p);f.transmission>0?i.push(c):f.transparent===!0?o.push(c):e.push(c)}function l(h,m,f,x,g,p){const c=r(h,m,f,x,g,p);f.transmission>0?i.unshift(c):f.transparent===!0?o.unshift(c):e.unshift(c)}function u(h,m){e.length>1&&e.sort(h||Cm),i.length>1&&i.sort(m||gc),o.length>1&&o.sort(m||gc)}function d(){for(let h=t,m=n.length;h<m;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:o,init:s,push:a,unshift:l,finish:d,sort:u}}function Rm(){let n=new WeakMap;function t(i,o){const s=n.get(i);let r;return s===void 0?(r=new xc,n.set(i,[r])):o>=s.length?(r=new xc,s.push(r)):r=s[o],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Pm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new xe};break;case"SpotLight":e={position:new E,direction:new E,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new E,halfWidth:new E,halfHeight:new E};break}return n[t.id]=e,e}}}function Dm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Lm=0;function Im(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Um(n,t){const e=new Pm,i=Dm(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)o.probe.push(new E);const s=new E,r=new on,a=new on;function l(d,h){let m=0,f=0,x=0;for(let K=0;K<9;K++)o.probe[K].set(0,0,0);let g=0,p=0,c=0,_=0,v=0,M=0,P=0,T=0,A=0,Q=0,w=0;d.sort(Im);const S=h===!0?Math.PI:1;for(let K=0,rt=d.length;K<rt;K++){const z=d[K],at=z.color,J=z.intensity,lt=z.distance,V=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=at.r*J*S,f+=at.g*J*S,x+=at.b*J*S;else if(z.isLightProbe){for(let W=0;W<9;W++)o.probe[W].addScaledVector(z.sh.coefficients[W],J);w++}else if(z.isDirectionalLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const C=z.shadow,O=i.get(z);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,o.directionalShadow[g]=O,o.directionalShadowMap[g]=V,o.directionalShadowMatrix[g]=z.shadow.matrix,M++}o.directional[g]=W,g++}else if(z.isSpotLight){const W=e.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(at).multiplyScalar(J*S),W.distance=lt,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,o.spot[c]=W;const C=z.shadow;if(z.map&&(o.spotLightMap[A]=z.map,A++,C.updateMatrices(z),z.castShadow&&Q++),o.spotLightMatrix[c]=C.matrix,z.castShadow){const O=i.get(z);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,o.spotShadow[c]=O,o.spotShadowMap[c]=V,T++}c++}else if(z.isRectAreaLight){const W=e.get(z);W.color.copy(at).multiplyScalar(J),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),o.rectArea[_]=W,_++}else if(z.isPointLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*S),W.distance=z.distance,W.decay=z.decay,z.castShadow){const C=z.shadow,O=i.get(z);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,O.shadowCameraNear=C.camera.near,O.shadowCameraFar=C.camera.far,o.pointShadow[p]=O,o.pointShadowMap[p]=V,o.pointShadowMatrix[p]=z.shadow.matrix,P++}o.point[p]=W,p++}else if(z.isHemisphereLight){const W=e.get(z);W.skyColor.copy(z.color).multiplyScalar(J*S),W.groundColor.copy(z.groundColor).multiplyScalar(J*S),o.hemi[v]=W,v++}}_>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=re.LTC_FLOAT_1,o.rectAreaLTC2=re.LTC_FLOAT_2):(o.rectAreaLTC1=re.LTC_HALF_1,o.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=re.LTC_FLOAT_1,o.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=re.LTC_HALF_1,o.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=m,o.ambient[1]=f,o.ambient[2]=x;const k=o.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==c||k.rectAreaLength!==_||k.hemiLength!==v||k.numDirectionalShadows!==M||k.numPointShadows!==P||k.numSpotShadows!==T||k.numSpotMaps!==A||k.numLightProbes!==w)&&(o.directional.length=g,o.spot.length=c,o.rectArea.length=_,o.point.length=p,o.hemi.length=v,o.directionalShadow.length=M,o.directionalShadowMap.length=M,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=T,o.spotShadowMap.length=T,o.directionalShadowMatrix.length=M,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=T+A-Q,o.spotLightMap.length=A,o.numSpotLightShadowsWithMaps=Q,o.numLightProbes=w,k.directionalLength=g,k.pointLength=p,k.spotLength=c,k.rectAreaLength=_,k.hemiLength=v,k.numDirectionalShadows=M,k.numPointShadows=P,k.numSpotShadows=T,k.numSpotMaps=A,k.numLightProbes=w,o.version=Lm++)}function u(d,h){let m=0,f=0,x=0,g=0,p=0;const c=h.matrixWorldInverse;for(let _=0,v=d.length;_<v;_++){const M=d[_];if(M.isDirectionalLight){const P=o.directional[m];P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(c),m++}else if(M.isSpotLight){const P=o.spot[x];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),P.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(c),x++}else if(M.isRectAreaLight){const P=o.rectArea[g];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),a.identity(),r.copy(M.matrixWorld),r.premultiply(c),a.extractRotation(r),P.halfWidth.set(M.width*.5,0,0),P.halfHeight.set(0,M.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const P=o.point[f];P.position.setFromMatrixPosition(M.matrixWorld),P.position.applyMatrix4(c),f++}else if(M.isHemisphereLight){const P=o.hemi[p];P.direction.setFromMatrixPosition(M.matrixWorld),P.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:o}}function _c(n,t){const e=new Um(n,t),i=[],o=[];function s(){i.length=0,o.length=0}function r(h){i.push(h)}function a(h){o.push(h)}function l(h){e.setup(i,h)}function u(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:l,setupLightsView:u,pushLight:r,pushShadow:a}}function Nm(n,t){let e=new WeakMap;function i(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new _c(n,t),e.set(s,[l])):r>=a.length?(l=new _c(n,t),a.push(l)):l=a[r],l}function o(){e=new WeakMap}return{get:i,dispose:o}}class Fm extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function km(n,t,e){let i=new Br;const o=new te,s=new te,r=new wn,a=new Fm({depthPacking:Sh}),l=new Om,u={},d=e.maxTextureSize,h={[Wi]:Hn,[Hn]:Wi,[$e]:$e},m=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:zm,fragmentShader:Bm}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const x=new Qe;x.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new I(x,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let c=this.type;this.render=function(T,A,Q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Xn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const rt=c!==Li&&this.type===Li,z=c===Li&&this.type!==Li;for(let at=0,J=T.length;at<J;at++){const lt=T[at],V=lt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const W=V.getFrameExtents();if(o.multiply(W),s.copy(V.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(s.x=Math.floor(d/W.x),o.x=s.x*W.x,V.mapSize.x=s.x),o.y>d&&(s.y=Math.floor(d/W.y),o.y=s.y*W.y,V.mapSize.y=s.y)),V.map===null||rt===!0||z===!0){const O=this.type!==Li?{minFilter:Pn,magFilter:Pn}:{};V.map!==null&&V.map.dispose(),V.map=new li(o.x,o.y,O),V.map.texture.name=lt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const C=V.getViewportCount();for(let O=0;O<C;O++){const gt=V.getViewport(O);r.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),K.viewport(r),V.updateMatrices(lt,O),i=V.getFrustum(),M(A,Q,V.camera,lt,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&_(V,Q),V.needsUpdate=!1}c=this.type,p.needsUpdate=!1,n.setRenderTarget(w,S,k)};function _(T,A){const Q=t.update(g);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(o.x,o.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,Q,m,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,Q,f,g,null)}function v(T,A,Q,w){let S=null;const k=Q.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)S=k;else if(S=Q.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=S.uuid,rt=A.uuid;let z=u[K];z===void 0&&(z={},u[K]=z);let at=z[rt];at===void 0&&(at=S.clone(),z[rt]=at,A.addEventListener("dispose",P)),S=at}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Li?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,Q.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=Q}return S}function M(T,A,Q,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Li)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld);const rt=t.update(T),z=T.material;if(Array.isArray(z)){const at=rt.groups;for(let J=0,lt=at.length;J<lt;J++){const V=at[J],W=z[V.materialIndex];if(W&&W.visible){const C=v(T,W,w,S);T.onBeforeShadow(n,T,A,Q,rt,C,V),n.renderBufferDirect(Q,null,rt,C,T,V),T.onAfterShadow(n,T,A,Q,rt,C,V)}}}else if(z.visible){const at=v(T,z,w,S);T.onBeforeShadow(n,T,A,Q,rt,at,null),n.renderBufferDirect(Q,null,rt,at,T,null),T.onAfterShadow(n,T,A,Q,rt,at,null)}}const K=T.children;for(let rt=0,z=K.length;rt<z;rt++)M(K[rt],A,Q,w,S)}function P(T){T.target.removeEventListener("dispose",P);for(const Q in u){const w=u[Q],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Hm(n,t,e){const i=e.isWebGL2;function o(){let L=!1;const dt=new wn;let Pt=null;const j=new wn(0,0,0,0);return{setMask:function(It){Pt!==It&&!L&&(n.colorMask(It,It,It,It),Pt=It)},setLocked:function(It){L=It},setClear:function(It,Y,tt,H,Mt){Mt===!0&&(It*=H,Y*=H,tt*=H),dt.set(It,Y,tt,H),j.equals(dt)===!1&&(n.clearColor(It,Y,tt,H),j.copy(dt))},reset:function(){L=!1,Pt=null,j.set(-1,0,0,0)}}}function s(){let L=!1,dt=null,Pt=null,j=null;return{setTest:function(It){It?Bt(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(It){dt!==It&&!L&&(n.depthMask(It),dt=It)},setFunc:function(It){if(Pt!==It){switch(It){case sh:n.depthFunc(n.NEVER);break;case ah:n.depthFunc(n.ALWAYS);break;case rh:n.depthFunc(n.LESS);break;case ga:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case ch:n.depthFunc(n.GEQUAL);break;case uh:n.depthFunc(n.GREATER);break;case hh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=It}},setLocked:function(It){L=It},setClear:function(It){j!==It&&(n.clearDepth(It),j=It)},reset:function(){L=!1,dt=null,Pt=null,j=null}}}function r(){let L=!1,dt=null,Pt=null,j=null,It=null,Y=null,tt=null,H=null,Mt=null;return{setTest:function(St){L||(St?Bt(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(St){dt!==St&&!L&&(n.stencilMask(St),dt=St)},setFunc:function(St,y,ct){(Pt!==St||j!==y||It!==ct)&&(n.stencilFunc(St,y,ct),Pt=St,j=y,It=ct)},setOp:function(St,y,ct){(Y!==St||tt!==y||H!==ct)&&(n.stencilOp(St,y,ct),Y=St,tt=y,H=ct)},setLocked:function(St){L=St},setClear:function(St){Mt!==St&&(n.clearStencil(St),Mt=St)},reset:function(){L=!1,dt=null,Pt=null,j=null,It=null,Y=null,tt=null,H=null,Mt=null}}}const a=new o,l=new s,u=new r,d=new WeakMap,h=new WeakMap;let m={},f={},x=new WeakMap,g=[],p=null,c=!1,_=null,v=null,M=null,P=null,T=null,A=null,Q=null,w=new xe(0,0,0),S=0,k=!1,K=null,rt=null,z=null,at=null,J=null;const lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(C)[1]),V=W>=1):C.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),V=W>=2);let O=null,gt={};const B=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),Z=new wn().fromArray(B),$=new wn().fromArray(N);function nt(L,dt,Pt,j){const It=new Uint8Array(4),Y=n.createTexture();n.bindTexture(L,Y),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<Pt;tt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(dt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(dt+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Y}const yt={};yt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(yt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Bt(n.DEPTH_TEST),l.setFunc(ga),Xt(!1),D(el),Bt(n.CULL_FACE),Wt(Xn);function Bt(L){m[L]!==!0&&(n.enable(L),m[L]=!0)}function et(L){m[L]!==!1&&(n.disable(L),m[L]=!1)}function ot(L,dt){return f[L]!==dt?(n.bindFramebuffer(L,dt),f[L]=dt,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt)),!0):!1}function U(L,dt){let Pt=g,j=!1;if(L)if(Pt=x.get(dt),Pt===void 0&&(Pt=[],x.set(dt,Pt)),L.isWebGLMultipleRenderTargets){const It=L.texture;if(Pt.length!==It.length||Pt[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,tt=It.length;Y<tt;Y++)Pt[Y]=n.COLOR_ATTACHMENT0+Y;Pt.length=It.length,j=!0}}else Pt[0]!==n.COLOR_ATTACHMENT0&&(Pt[0]=n.COLOR_ATTACHMENT0,j=!0);else Pt[0]!==n.BACK&&(Pt[0]=n.BACK,j=!0);j&&(e.isWebGL2?n.drawBuffers(Pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pt))}function Nt(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const pt={[Ii]:n.FUNC_ADD,[qu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};if(i)pt[ol]=n.MIN,pt[sl]=n.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(pt[ol]=L.MIN_EXT,pt[sl]=L.MAX_EXT)}const Tt={[mr]:n.ZERO,[ju]:n.ONE,[Ku]:n.SRC_COLOR,[gr]:n.SRC_ALPHA,[th]:n.SRC_ALPHA_SATURATE,[Zc]:n.DST_COLOR,[qc]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[xr]:n.ONE_MINUS_SRC_ALPHA,[Qu]:n.ONE_MINUS_DST_COLOR,[$u]:n.ONE_MINUS_DST_ALPHA,[eh]:n.CONSTANT_COLOR,[nh]:n.ONE_MINUS_CONSTANT_COLOR,[ih]:n.CONSTANT_ALPHA,[oh]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(L,dt,Pt,j,It,Y,tt,H,Mt,St){if(L===Xn){c===!0&&(et(n.BLEND),c=!1);return}if(c===!1&&(Bt(n.BLEND),c=!0),L!==Yc){if(L!==_||St!==k){if((v!==Ii||T!==Ii)&&(n.blendEquation(n.FUNC_ADD),v=Ii,T=Ii),St)switch(L){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFunc(n.ONE,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,P=null,A=null,Q=null,w.set(0,0,0),S=0,_=L,k=St}return}It=It||dt,Y=Y||Pt,tt=tt||j,(dt!==v||It!==T)&&(n.blendEquationSeparate(pt[dt],pt[It]),v=dt,T=It),(Pt!==M||j!==P||Y!==A||tt!==Q)&&(n.blendFuncSeparate(Tt[Pt],Tt[j],Tt[Y],Tt[tt]),M=Pt,P=j,A=Y,Q=tt),(H.equals(w)===!1||Mt!==S)&&(n.blendColor(H.r,H.g,H.b,Mt),w.copy(H),S=Mt),_=L,k=!1}function pe(L,dt){L.side===$e?et(n.CULL_FACE):Bt(n.CULL_FACE);let Pt=L.side===Hn;dt&&(Pt=!Pt),Xt(Pt),L.blending===os&&L.transparent===!1?Wt(Xn):Wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const j=L.stencilWrite;u.setTest(j),j&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),X(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Bt(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){K!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),K=L)}function D(L){L!==Wu?(Bt(n.CULL_FACE),L!==rt&&(L===el?n.cullFace(n.BACK):L===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),rt=L}function b(L){L!==z&&(V&&n.lineWidth(L),z=L)}function X(L,dt,Pt){L?(Bt(n.POLYGON_OFFSET_FILL),(at!==dt||J!==Pt)&&(n.polygonOffset(dt,Pt),at=dt,J=Pt)):et(n.POLYGON_OFFSET_FILL)}function kt(L){L?Bt(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function Ut(L){L===void 0&&(L=n.TEXTURE0+lt-1),O!==L&&(n.activeTexture(L),O=L)}function Ot(L,dt,Pt){Pt===void 0&&(O===null?Pt=n.TEXTURE0+lt-1:Pt=O);let j=gt[Pt];j===void 0&&(j={type:void 0,texture:void 0},gt[Pt]=j),(j.type!==L||j.texture!==dt)&&(O!==Pt&&(n.activeTexture(Pt),O=Pt),n.bindTexture(L,dt||yt[L]),j.type=L,j.texture=dt)}function ee(){const L=gt[O];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Yt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(L){Z.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function Rt(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Lt(L,dt){let Pt=h.get(dt);Pt===void 0&&(Pt=new WeakMap,h.set(dt,Pt));let j=Pt.get(L);j===void 0&&(j=n.getUniformBlockIndex(dt,L.name),Pt.set(L,j))}function vt(L,dt){const j=h.get(dt).get(L);d.get(dt)!==j&&(n.uniformBlockBinding(dt,j,L.__bindingPointIndex),d.set(dt,j))}function F(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},O=null,gt={},f={},x=new WeakMap,g=[],p=null,c=!1,_=null,v=null,M=null,P=null,T=null,A=null,Q=null,w=new xe(0,0,0),S=0,k=!1,K=null,rt=null,z=null,at=null,J=null,Z.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Bt,disable:et,bindFramebuffer:ot,drawBuffers:U,useProgram:Nt,setBlending:Wt,setMaterial:pe,setFlipSided:Xt,setCullFace:D,setLineWidth:b,setPolygonOffset:X,setScissorTest:kt,activeTexture:Ut,bindTexture:Ot,unbindTexture:ee,compressedTexImage2D:Yt,compressedTexImage3D:qt,texImage2D:Zt,texImage3D:ce,updateUBOMapping:Lt,uniformBlockBinding:vt,texStorage2D:Ce,texStorage3D:_e,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Ae,scissor:q,viewport:Rt,reset:F}}function Gm(n,t,e,i,o,s,r){const a=o.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,b){return f?new OffscreenCanvas(D,b):wa("canvas")}function g(D,b,X,kt){let Ut=1;if((D.width>kt||D.height>kt)&&(Ut=kt/Math.max(D.width,D.height)),Ut<1||b===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Ot=b?ya:Math.floor,ee=Ot(Ut*D.width),Yt=Ot(Ut*D.height);h===void 0&&(h=x(ee,Yt));const qt=X?x(ee,Yt):h;return qt.width=ee,qt.height=Yt,qt.getContext("2d").drawImage(D,0,0,ee,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ee+"x"+Yt+")."),qt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function p(D){return Sr(D.width)&&Sr(D.height)}function c(D){return a?!1:D.wrapS!==si||D.wrapT!==si||D.minFilter!==Pn&&D.minFilter!==Yn}function _(D,b){return D.generateMipmaps&&b&&D.minFilter!==Pn&&D.minFilter!==Yn}function v(D){n.generateMipmap(D)}function M(D,b,X,kt,Ut=!1){if(a===!1)return b;if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ot=b;if(b===n.RED&&(X===n.FLOAT&&(Ot=n.R32F),X===n.HALF_FLOAT&&(Ot=n.R16F),X===n.UNSIGNED_BYTE&&(Ot=n.R8)),b===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Ot=n.R8UI),X===n.UNSIGNED_SHORT&&(Ot=n.R16UI),X===n.UNSIGNED_INT&&(Ot=n.R32UI),X===n.BYTE&&(Ot=n.R8I),X===n.SHORT&&(Ot=n.R16I),X===n.INT&&(Ot=n.R32I)),b===n.RG&&(X===n.FLOAT&&(Ot=n.RG32F),X===n.HALF_FLOAT&&(Ot=n.RG16F),X===n.UNSIGNED_BYTE&&(Ot=n.RG8)),b===n.RGBA){const ee=Ut?xa:nn.getTransfer(kt);X===n.FLOAT&&(Ot=n.RGBA32F),X===n.HALF_FLOAT&&(Ot=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Ot=ee===fn?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Ot=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Ot=n.RGB5_A1)}return(Ot===n.R16F||Ot===n.R32F||Ot===n.RG16F||Ot===n.RG32F||Ot===n.RGBA16F||Ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Ot}function P(D,b,X){return _(D,X)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function T(D){return D===Pn||D===al||D===La?n.NEAREST:n.LINEAR}function A(D){const b=D.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&d.delete(b)}function Q(D){const b=D.target;b.removeEventListener("dispose",Q),k(b)}function w(D){const b=i.get(D);if(b.__webglInit===void 0)return;const X=D.source,kt=m.get(X);if(kt){const Ut=kt[b.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&S(D),Object.keys(kt).length===0&&m.delete(X)}i.remove(D)}function S(D){const b=i.get(D);n.deleteTexture(b.__webglTexture);const X=D.source,kt=m.get(X);delete kt[b.__cacheKey],r.memory.textures--}function k(D){const b=D.texture,X=i.get(D),kt=i.get(b);if(kt.__webglTexture!==void 0&&(n.deleteTexture(kt.__webglTexture),r.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Ut=0;Ut<6;Ut++){if(Array.isArray(X.__webglFramebuffer[Ut]))for(let Ot=0;Ot<X.__webglFramebuffer[Ut].length;Ot++)n.deleteFramebuffer(X.__webglFramebuffer[Ut][Ot]);else n.deleteFramebuffer(X.__webglFramebuffer[Ut]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[Ut])}else{if(Array.isArray(X.__webglFramebuffer))for(let Ut=0;Ut<X.__webglFramebuffer.length;Ut++)n.deleteFramebuffer(X.__webglFramebuffer[Ut]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let Ut=0;Ut<X.__webglColorRenderbuffer.length;Ut++)X.__webglColorRenderbuffer[Ut]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[Ut]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let Ut=0,Ot=b.length;Ut<Ot;Ut++){const ee=i.get(b[Ut]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),r.memory.textures--),i.remove(b[Ut])}i.remove(b),i.remove(D)}let K=0;function rt(){K=0}function z(){const D=K;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),K+=1,D}function at(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function J(D,b){const X=i.get(D);if(D.isVideoTexture&&pe(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const kt=D.image;if(kt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(kt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,D,b);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function lt(D,b){const X=i.get(D);if(D.version>0&&X.__version!==D.version){Z(X,D,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function V(D,b){const X=i.get(D);if(D.version>0&&X.__version!==D.version){Z(X,D,b);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function W(D,b){const X=i.get(D);if(D.version>0&&X.__version!==D.version){$(X,D,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}const C={[ri]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Mr]:n.MIRRORED_REPEAT},O={[Pn]:n.NEAREST,[al]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[mh]:n.LINEAR_MIPMAP_NEAREST,[wo]:n.LINEAR_MIPMAP_LINEAR},gt={[Eh]:n.NEVER,[Dh]:n.ALWAYS,[Th]:n.LESS,[hu]:n.LEQUAL,[Ah]:n.EQUAL,[Ph]:n.GEQUAL,[Ch]:n.GREATER,[Rh]:n.NOTEQUAL};function B(D,b,X){if(X?(n.texParameteri(D,n.TEXTURE_WRAP_S,C[b.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,C[b.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,C[b.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,O[b.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,O[b.minFilter])):(n.texParameteri(D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==si||b.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(D,n.TEXTURE_MAG_FILTER,T(b.magFilter)),n.texParameteri(D,n.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Pn&&b.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const kt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Pn||b.minFilter!==La&&b.minFilter!==wo||b.type===zi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===_i&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(D,kt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function N(D,b){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",A));const kt=b.source;let Ut=m.get(kt);Ut===void 0&&(Ut={},m.set(kt,Ut));const Ot=at(b);if(Ot!==D.__cacheKey){Ut[Ot]===void 0&&(Ut[Ot]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,X=!0),Ut[Ot].usedTimes++;const ee=Ut[D.__cacheKey];ee!==void 0&&(Ut[D.__cacheKey].usedTimes--,ee.usedTimes===0&&S(b)),D.__cacheKey=Ot,D.__webglTexture=Ut[Ot].texture}return X}function Z(D,b,X){let kt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(kt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(kt=n.TEXTURE_3D);const Ut=N(D,b),Ot=b.source;e.bindTexture(kt,D.__webglTexture,n.TEXTURE0+X);const ee=i.get(Ot);if(Ot.version!==ee.__version||Ut===!0){e.activeTexture(n.TEXTURE0+X);const Yt=nn.getPrimaries(nn.workingColorSpace),qt=b.colorSpace===ai?null:nn.getPrimaries(b.colorSpace),le=b.colorSpace===ai||Yt===qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const me=c(b)&&p(b.image)===!1;let Ft=g(b.image,me,!1,o.maxTextureSize);Ft=Xt(b,Ft);const Ae=p(Ft)||a,Ce=s.convert(b.format,b.colorSpace);let _e=s.convert(b.type),Zt=M(b.internalFormat,Ce,_e,b.colorSpace,b.isVideoTexture);B(kt,b,Ae);let ce;const q=b.mipmaps,Rt=a&&b.isVideoTexture!==!0&&Zt!==cu,Lt=ee.__version===void 0||Ut===!0,vt=P(b,Ft,Ae);if(b.isDepthTexture)Zt=n.DEPTH_COMPONENT,a?b.type===zi?Zt=n.DEPTH_COMPONENT32F:b.type===no?Zt=n.DEPTH_COMPONENT24:b.type===so?Zt=n.DEPTH24_STENCIL8:Zt=n.DEPTH_COMPONENT16:b.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mo&&Zt===n.DEPTH_COMPONENT&&b.type!==Ur&&b.type!==no&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=no,_e=s.convert(b.type)),b.format===So&&Zt===n.DEPTH_COMPONENT&&(Zt=n.DEPTH_STENCIL,b.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=so,_e=s.convert(b.type))),Lt&&(Rt?e.texStorage2D(n.TEXTURE_2D,1,Zt,Ft.width,Ft.height):e.texImage2D(n.TEXTURE_2D,0,Zt,Ft.width,Ft.height,0,Ce,_e,null));else if(b.isDataTexture)if(q.length>0&&Ae){Rt&&Lt&&e.texStorage2D(n.TEXTURE_2D,vt,Zt,q[0].width,q[0].height);for(let F=0,L=q.length;F<L;F++)ce=q[F],Rt?e.texSubImage2D(n.TEXTURE_2D,F,0,0,ce.width,ce.height,Ce,_e,ce.data):e.texImage2D(n.TEXTURE_2D,F,Zt,ce.width,ce.height,0,Ce,_e,ce.data);b.generateMipmaps=!1}else Rt?(Lt&&e.texStorage2D(n.TEXTURE_2D,vt,Zt,Ft.width,Ft.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ft.width,Ft.height,Ce,_e,Ft.data)):e.texImage2D(n.TEXTURE_2D,0,Zt,Ft.width,Ft.height,0,Ce,_e,Ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Rt&&Lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Zt,q[0].width,q[0].height,Ft.depth);for(let F=0,L=q.length;F<L;F++)ce=q[F],b.format!==di?Ce!==null?Rt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ce.width,ce.height,Ft.depth,Ce,ce.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,F,Zt,ce.width,ce.height,Ft.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,F,0,0,0,ce.width,ce.height,Ft.depth,Ce,_e,ce.data):e.texImage3D(n.TEXTURE_2D_ARRAY,F,Zt,ce.width,ce.height,Ft.depth,0,Ce,_e,ce.data)}else{Rt&&Lt&&e.texStorage2D(n.TEXTURE_2D,vt,Zt,q[0].width,q[0].height);for(let F=0,L=q.length;F<L;F++)ce=q[F],b.format!==di?Ce!==null?Rt?e.compressedTexSubImage2D(n.TEXTURE_2D,F,0,0,ce.width,ce.height,Ce,ce.data):e.compressedTexImage2D(n.TEXTURE_2D,F,Zt,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage2D(n.TEXTURE_2D,F,0,0,ce.width,ce.height,Ce,_e,ce.data):e.texImage2D(n.TEXTURE_2D,F,Zt,ce.width,ce.height,0,Ce,_e,ce.data)}else if(b.isDataArrayTexture)Rt?(Lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Zt,Ft.width,Ft.height,Ft.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ft.width,Ft.height,Ft.depth,Ce,_e,Ft.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Zt,Ft.width,Ft.height,Ft.depth,0,Ce,_e,Ft.data);else if(b.isData3DTexture)Rt?(Lt&&e.texStorage3D(n.TEXTURE_3D,vt,Zt,Ft.width,Ft.height,Ft.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ft.width,Ft.height,Ft.depth,Ce,_e,Ft.data)):e.texImage3D(n.TEXTURE_3D,0,Zt,Ft.width,Ft.height,Ft.depth,0,Ce,_e,Ft.data);else if(b.isFramebufferTexture){if(Lt)if(Rt)e.texStorage2D(n.TEXTURE_2D,vt,Zt,Ft.width,Ft.height);else{let F=Ft.width,L=Ft.height;for(let dt=0;dt<vt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Zt,F,L,0,Ce,_e,null),F>>=1,L>>=1}}else if(q.length>0&&Ae){Rt&&Lt&&e.texStorage2D(n.TEXTURE_2D,vt,Zt,q[0].width,q[0].height);for(let F=0,L=q.length;F<L;F++)ce=q[F],Rt?e.texSubImage2D(n.TEXTURE_2D,F,0,0,Ce,_e,ce):e.texImage2D(n.TEXTURE_2D,F,Zt,Ce,_e,ce);b.generateMipmaps=!1}else Rt?(Lt&&e.texStorage2D(n.TEXTURE_2D,vt,Zt,Ft.width,Ft.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,_e,Ft)):e.texImage2D(n.TEXTURE_2D,0,Zt,Ce,_e,Ft);_(b,Ae)&&v(kt),ee.__version=Ot.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function $(D,b,X){if(b.image.length!==6)return;const kt=N(D,b),Ut=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+X);const Ot=i.get(Ut);if(Ut.version!==Ot.__version||kt===!0){e.activeTexture(n.TEXTURE0+X);const ee=nn.getPrimaries(nn.workingColorSpace),Yt=b.colorSpace===ai?null:nn.getPrimaries(b.colorSpace),qt=b.colorSpace===ai||ee===Yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const le=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let F=0;F<6;F++)!le&&!me?Ft[F]=g(b.image[F],!1,!0,o.maxCubemapSize):Ft[F]=me?b.image[F].image:b.image[F],Ft[F]=Xt(b,Ft[F]);const Ae=Ft[0],Ce=p(Ae)||a,_e=s.convert(b.format,b.colorSpace),Zt=s.convert(b.type),ce=M(b.internalFormat,_e,Zt,b.colorSpace),q=a&&b.isVideoTexture!==!0,Rt=Ot.__version===void 0||kt===!0;let Lt=P(b,Ae,Ce);B(n.TEXTURE_CUBE_MAP,b,Ce);let vt;if(le){q&&Rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ce,Ae.width,Ae.height);for(let F=0;F<6;F++){vt=Ft[F].mipmaps;for(let L=0;L<vt.length;L++){const dt=vt[L];b.format!==di?_e!==null?q?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L,0,0,dt.width,dt.height,_e,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L,ce,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L,0,0,dt.width,dt.height,_e,Zt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L,ce,dt.width,dt.height,0,_e,Zt,dt.data)}}}else{vt=b.mipmaps,q&&Rt&&(vt.length>0&&Lt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ce,Ft[0].width,Ft[0].height));for(let F=0;F<6;F++)if(me){q?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ft[F].width,Ft[F].height,_e,Zt,Ft[F].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ce,Ft[F].width,Ft[F].height,0,_e,Zt,Ft[F].data);for(let L=0;L<vt.length;L++){const Pt=vt[L].image[F].image;q?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L+1,0,0,Pt.width,Pt.height,_e,Zt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L+1,ce,Pt.width,Pt.height,0,_e,Zt,Pt.data)}}else{q?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,_e,Zt,Ft[F]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ce,_e,Zt,Ft[F]);for(let L=0;L<vt.length;L++){const dt=vt[L];q?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L+1,0,0,_e,Zt,dt.image[F]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+F,L+1,ce,_e,Zt,dt.image[F])}}}_(b,Ce)&&v(n.TEXTURE_CUBE_MAP),Ot.__version=Ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function nt(D,b,X,kt,Ut,Ot){const ee=s.convert(X.format,X.colorSpace),Yt=s.convert(X.type),qt=M(X.internalFormat,ee,Yt,X.colorSpace);if(!i.get(b).__hasExternalTextures){const me=Math.max(1,b.width>>Ot),Ft=Math.max(1,b.height>>Ot);Ut===n.TEXTURE_3D||Ut===n.TEXTURE_2D_ARRAY?e.texImage3D(Ut,Ot,qt,me,Ft,b.depth,0,ee,Yt,null):e.texImage2D(Ut,Ot,qt,me,Ft,0,ee,Yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),Wt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,kt,Ut,i.get(X).__webglTexture,0,Tt(b)):(Ut===n.TEXTURE_2D||Ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,kt,Ut,i.get(X).__webglTexture,Ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(D,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,D),b.depthBuffer&&!b.stencilBuffer){let kt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Wt(b)){const Ut=b.depthTexture;Ut&&Ut.isDepthTexture&&(Ut.type===zi?kt=n.DEPTH_COMPONENT32F:Ut.type===no&&(kt=n.DEPTH_COMPONENT24));const Ot=Tt(b);Wt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,kt,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,kt,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,kt,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,D)}else if(b.depthBuffer&&b.stencilBuffer){const kt=Tt(b);X&&Wt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,n.DEPTH24_STENCIL8,b.width,b.height):Wt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,D)}else{const kt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Ut=0;Ut<kt.length;Ut++){const Ot=kt[Ut],ee=s.convert(Ot.format,Ot.colorSpace),Yt=s.convert(Ot.type),qt=M(Ot.internalFormat,ee,Yt,Ot.colorSpace),le=Tt(b);X&&Wt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,qt,b.width,b.height):Wt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,qt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,qt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const kt=i.get(b.depthTexture).__webglTexture,Ut=Tt(b);if(b.depthTexture.format===Mo)Wt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,kt,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,kt,0);else if(b.depthTexture.format===So)Wt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,kt,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,kt,0);else throw new Error("Unknown depthTexture format")}function et(D){const b=i.get(D),X=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,D)}else if(X){b.__webglDepthbuffer=[];for(let kt=0;kt<6;kt++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[kt]),b.__webglDepthbuffer[kt]=n.createRenderbuffer(),yt(b.__webglDepthbuffer[kt],D,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),yt(b.__webglDepthbuffer,D,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(D,b,X){const kt=i.get(D);b!==void 0&&nt(kt.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&et(D)}function U(D){const b=D.texture,X=i.get(D),kt=i.get(b);D.addEventListener("dispose",Q),D.isWebGLMultipleRenderTargets!==!0&&(kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture()),kt.__version=b.version,r.memory.textures++);const Ut=D.isWebGLCubeRenderTarget===!0,Ot=D.isWebGLMultipleRenderTargets===!0,ee=p(D)||a;if(Ut){X.__webglFramebuffer=[];for(let Yt=0;Yt<6;Yt++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Yt]=[];for(let qt=0;qt<b.mipmaps.length;qt++)X.__webglFramebuffer[Yt][qt]=n.createFramebuffer()}else X.__webglFramebuffer[Yt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Yt=0;Yt<b.mipmaps.length;Yt++)X.__webglFramebuffer[Yt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ot)if(o.drawBuffers){const Yt=D.texture;for(let qt=0,le=Yt.length;qt<le;qt++){const me=i.get(Yt[qt]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Wt(D)===!1){const Yt=Ot?b:[b];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let qt=0;qt<Yt.length;qt++){const le=Yt[qt];X.__webglColorRenderbuffer[qt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[qt]);const me=s.convert(le.format,le.colorSpace),Ft=s.convert(le.type),Ae=M(le.internalFormat,me,Ft,le.colorSpace,D.isXRRenderTarget===!0),Ce=Tt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ae,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+qt,n.RENDERBUFFER,X.__webglColorRenderbuffer[qt])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ut){e.bindTexture(n.TEXTURE_CUBE_MAP,kt.__webglTexture),B(n.TEXTURE_CUBE_MAP,b,ee);for(let Yt=0;Yt<6;Yt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)nt(X.__webglFramebuffer[Yt][qt],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,qt);else nt(X.__webglFramebuffer[Yt],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0);_(b,ee)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){const Yt=D.texture;for(let qt=0,le=Yt.length;qt<le;qt++){const me=Yt[qt],Ft=i.get(me);e.bindTexture(n.TEXTURE_2D,Ft.__webglTexture),B(n.TEXTURE_2D,me,ee),nt(X.__webglFramebuffer,D,me,n.COLOR_ATTACHMENT0+qt,n.TEXTURE_2D,0),_(me,ee)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let Yt=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?Yt=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Yt,kt.__webglTexture),B(Yt,b,ee),a&&b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)nt(X.__webglFramebuffer[qt],D,b,n.COLOR_ATTACHMENT0,Yt,qt);else nt(X.__webglFramebuffer,D,b,n.COLOR_ATTACHMENT0,Yt,0);_(b,ee)&&v(Yt),e.unbindTexture()}D.depthBuffer&&et(D)}function Nt(D){const b=p(D)||a,X=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let kt=0,Ut=X.length;kt<Ut;kt++){const Ot=X[kt];if(_(Ot,b)){const ee=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Yt=i.get(Ot).__webglTexture;e.bindTexture(ee,Yt),v(ee),e.unbindTexture()}}}function pt(D){if(a&&D.samples>0&&Wt(D)===!1){const b=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],X=D.width,kt=D.height;let Ut=n.COLOR_BUFFER_BIT;const Ot=[],ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Yt=i.get(D),qt=D.isWebGLMultipleRenderTargets===!0;if(qt)for(let le=0;le<b.length;le++)e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let le=0;le<b.length;le++){Ot.push(n.COLOR_ATTACHMENT0+le),D.depthBuffer&&Ot.push(ee);const me=Yt.__ignoreDepthValues!==void 0?Yt.__ignoreDepthValues:!1;if(me===!1&&(D.depthBuffer&&(Ut|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&(Ut|=n.STENCIL_BUFFER_BIT)),qt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Yt.__webglColorRenderbuffer[le]),me===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ee])),qt){const Ft=i.get(b[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,X,kt,0,0,X,kt,Ut,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),qt)for(let le=0;le<b.length;le++){e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Yt.__webglColorRenderbuffer[le]);const me=i.get(b[le]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,me,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}}function Tt(D){return Math.min(o.maxSamples,D.samples)}function Wt(D){const b=i.get(D);return a&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pe(D){const b=r.render.frame;d.get(D)!==b&&(d.set(D,b),D.update())}function Xt(D,b){const X=D.colorSpace,kt=D.format,Ut=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===wr||X!==Xi&&X!==ai&&(nn.getTransfer(X)===fn?a===!1?t.has("EXT_sRGB")===!0&&kt===di?(D.format=wr,D.minFilter=Yn,D.generateMipmaps=!1):b=fu.sRGBToLinear(b):(kt!==di||Ut!==oo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=z,this.resetTextureUnits=rt,this.setTexture2D=J,this.setTexture2DArray=lt,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=ot,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Wt}function Vm(n,t,e){const i=e.isWebGL2;function o(s,r=ai){let a;const l=nn.getTransfer(r);if(s===oo)return n.UNSIGNED_BYTE;if(s===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gh)return n.BYTE;if(s===xh)return n.SHORT;if(s===Ur)return n.UNSIGNED_SHORT;if(s===eu)return n.INT;if(s===no)return n.UNSIGNED_INT;if(s===zi)return n.FLOAT;if(s===_i)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_h)return n.ALPHA;if(s===di)return n.RGBA;if(s===ou)return n.LUMINANCE;if(s===vh)return n.LUMINANCE_ALPHA;if(s===Mo)return n.DEPTH_COMPONENT;if(s===So)return n.DEPTH_STENCIL;if(s===wr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===su)return n.RED;if(s===au)return n.RED_INTEGER;if(s===Mh)return n.RG;if(s===ru)return n.RG_INTEGER;if(s===lu)return n.RGBA_INTEGER;if(s===Ia||s===Ua||s===Na||s===Fa)if(l===fn)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rl||s===ll||s===cl||s===ul)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hl||s===dl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hl)return l===fn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===dl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fl||s===pl||s===ml||s===gl||s===xl||s===_l||s===vl||s===Ml||s===yl||s===wl||s===Sl||s===bl||s===El||s===Tl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ml)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_l)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ml)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===El)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tl)return l===fn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oa||s===Al||s===Cl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Oa)return l===fn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yh||s===Rl||s===Pl||s===Dl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===so?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:o}}class Wm extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ne extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xm={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,s=null,r=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),c=this._getHandJoint(u,g);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],m=d.position.distanceTo(h.position),f=.02,x=.005;u.inputState.pinching&&m>f+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=f-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ym extends us{constructor(t,e){super();const i=this;let o=null,s=1,r=null,a="local-floor",l=1,u=null,d=null,h=null,m=null,f=null,x=null;const g=e.getContextAttributes();let p=null,c=null;const _=[],v=[],M=new te;let P=null;const T=new oi;T.layers.enable(1),T.viewport=new wn;const A=new oi;A.layers.enable(2),A.viewport=new wn;const Q=[T,A],w=new Wm;w.layers.enable(1),w.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let N=_[B];return N===void 0&&(N=new ar,_[B]=N),N.getTargetRaySpace()},this.getControllerGrip=function(B){let N=_[B];return N===void 0&&(N=new ar,_[B]=N),N.getGripSpace()},this.getHand=function(B){let N=_[B];return N===void 0&&(N=new ar,_[B]=N),N.getHandSpace()};function K(B){const N=v.indexOf(B.inputSource);if(N===-1)return;const Z=_[N];Z!==void 0&&(Z.update(B.inputSource,B.frame,u||r),Z.dispatchEvent({type:B.type,data:B.inputSource}))}function rt(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",rt),o.removeEventListener("inputsourceschange",z);for(let B=0;B<_.length;B++){const N=v[B];N!==null&&(v[B]=null,_[B].disconnect(N))}S=null,k=null,t.setRenderTarget(p),f=null,m=null,h=null,o=null,c=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(B){if(o=B,o!==null){if(p=t.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",rt),o.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(M),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(o,e,N),o.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),c=new li(f.framebufferWidth,f.framebufferHeight,{format:di,type:oo,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,Z=null,$=null;g.depth&&($=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=g.stencil?So:Mo,Z=g.stencil?so:no);const nt={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(o,e),m=h.createProjectionLayer(nt),o.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new li(m.textureWidth,m.textureHeight,{format:di,type:oo,depthTexture:new Gr(m.textureWidth,m.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const yt=t.properties.get(c);yt.__ignoreDepthValues=m.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await o.requestReferenceSpace(a),gt.setContext(o),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function z(B){for(let N=0;N<B.removed.length;N++){const Z=B.removed[N],$=v.indexOf(Z);$>=0&&(v[$]=null,_[$].disconnect(Z))}for(let N=0;N<B.added.length;N++){const Z=B.added[N];let $=v.indexOf(Z);if($===-1){for(let yt=0;yt<_.length;yt++)if(yt>=v.length){v.push(Z),$=yt;break}else if(v[yt]===null){v[yt]=Z,$=yt;break}if($===-1)break}const nt=_[$];nt&&nt.connect(Z)}}const at=new E,J=new E;function lt(B,N,Z){at.setFromMatrixPosition(N.matrixWorld),J.setFromMatrixPosition(Z.matrixWorld);const $=at.distanceTo(J),nt=N.projectionMatrix.elements,yt=Z.projectionMatrix.elements,Bt=nt[14]/(nt[10]-1),et=nt[14]/(nt[10]+1),ot=(nt[9]+1)/nt[5],U=(nt[9]-1)/nt[5],Nt=(nt[8]-1)/nt[0],pt=(yt[8]+1)/yt[0],Tt=Bt*Nt,Wt=Bt*pt,pe=$/(-Nt+pt),Xt=pe*-Nt;N.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Xt),B.translateZ(pe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const D=Bt+pe,b=et+pe,X=Tt-Xt,kt=Wt+($-Xt),Ut=ot*et/b*D,Ot=U*et/b*D;B.projectionMatrix.makePerspective(X,kt,Ut,Ot,D,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function V(B,N){N===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(N.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(o===null)return;w.near=A.near=T.near=B.near,w.far=A.far=T.far=B.far,(S!==w.near||k!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,k=w.far);const N=B.parent,Z=w.cameras;V(w,N);for(let $=0;$<Z.length;$++)V(Z[$],N);Z.length===2?lt(w,T,A):w.projectionMatrix.copy(T.projectionMatrix),W(B,w,N)};function W(B,N,Z){Z===null?B.matrix.copy(N.matrixWorld):(B.matrix.copy(Z.matrixWorld),B.matrix.invert(),B.matrix.multiply(N.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(N.projectionMatrix),B.projectionMatrixInverse.copy(N.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ls*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(B){l=B,m!==null&&(m.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let C=null;function O(B,N){if(d=N.getViewerPose(u||r),x=N,d!==null){const Z=d.views;f!==null&&(t.setRenderTargetFramebuffer(c,f.framebuffer),t.setRenderTarget(c));let $=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,$=!0);for(let nt=0;nt<Z.length;nt++){const yt=Z[nt];let Bt=null;if(f!==null)Bt=f.getViewport(yt);else{const ot=h.getViewSubImage(m,yt);Bt=ot.viewport,nt===0&&(t.setRenderTargetTextures(c,ot.colorTexture,m.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(c))}let et=Q[nt];et===void 0&&(et=new oi,et.layers.enable(nt),et.viewport=new wn,Q[nt]=et),et.matrix.fromArray(yt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(yt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),nt===0&&(w.matrix.copy(et.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),$===!0&&w.cameras.push(et)}}for(let Z=0;Z<_.length;Z++){const $=v[Z],nt=_[Z];$!==null&&nt!==void 0&&nt.update($,N,u||r)}C&&C(B,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),x=null}const gt=new bu;gt.setAnimationLoop(O),this.setAnimationLoop=function(B){C=B},this.dispose=function(){}}}function qm(n,t){function e(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,vu(n)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function o(p,c,_,v,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),d(p,c)):c.isMeshStandardMaterial?(s(p,c),m(p,c),c.isMeshPhysicalMaterial&&f(p,c,M)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),g(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(r(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,e(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,e(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,e(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Hn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,e(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Hn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,e(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,e(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=t.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*v,e(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,p.aoMapTransform))}function r(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,e(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=v*.5,c.map&&(p.map.value=c.map,e(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,e(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,e(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,e(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function d(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function m(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,p.roughnessMapTransform)),t.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function f(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Hn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function g(p,c){const _=t.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Zm(n,t,e,i){let o={},s={},r=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function u(_,v){let M=o[_.id];M===void 0&&(x(_),M=d(_),o[_.id]=M,_.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(_,P);const T=t.render.frame;s[_.id]!==T&&(m(_),s[_.id]=T)}function d(_){const v=h();_.__bindingPointIndex=v;const M=n.createBuffer(),P=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(_){const v=o[_.id],M=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){const Q=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,S=Q.length;w<S;w++){const k=Q[w];if(f(k,T,w,P)===!0){const K=k.__offset,rt=Array.isArray(k.value)?k.value:[k.value];let z=0;for(let at=0;at<rt.length;at++){const J=rt[at],lt=g(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,K+z,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,z),z+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,M,P){const T=_.value,A=v+"_"+M;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const Q=P[A];if(typeof T=="number"||typeof T=="boolean"){if(Q!==T)return P[A]=T,!0}else if(Q.equals(T)===!1)return Q.copy(T),!0}return!1}function x(_){const v=_.uniforms;let M=0;const P=16;for(let A=0,Q=v.length;A<Q;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,k=w.length;S<k;S++){const K=w[S],rt=Array.isArray(K.value)?K.value:[K.value];for(let z=0,at=rt.length;z<at;z++){const J=rt[z],lt=g(J),V=M%P;V!==0&&P-V<lt.boundary&&(M+=P-V),K.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=lt.storage}}}const T=M%P;return T>0&&(M+=P-T),_.__size=M,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(o[v.id]),delete o[v.id],delete s[v.id]}function c(){for(const _ in o)n.deleteBuffer(o[_]);r=[],o={},s={}}return{bind:l,update:u,dispose:c}}class Pu{constructor(t={}){const{canvas:e=Yh(),context:i=null,depth:o=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=r;const f=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const c=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=io,this.toneMappingExposure=1;const v=this;let M=!1,P=0,T=0,A=null,Q=-1,w=null;const S=new wn,k=new wn;let K=null;const rt=new xe(0);let z=0,at=e.width,J=e.height,lt=1,V=null,W=null;const C=new wn(0,0,at,J),O=new wn(0,0,at,J);let gt=!1;const B=new Br;let N=!1,Z=!1,$=null;const nt=new on,yt=new te,Bt=new E,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return A===null?lt:1}let U=i;function Nt(R,st){for(let ft=0;ft<R.length;ft++){const mt=R[ft],xt=e.getContext(mt,st);if(xt!==null)return xt}return null}try{const R={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lr}`),e.addEventListener("webglcontextlost",F,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){const st=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&st.shift(),U=Nt(st,R),U===null)throw Nt(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,Tt,Wt,pe,Xt,D,b,X,kt,Ut,Ot,ee,Yt,qt,le,me,Ft,Ae,Ce,_e,Zt,ce,q,Rt;function Lt(){pt=new op(U),Tt=new $0(U,pt,t),pt.init(Tt),ce=new Vm(U,pt,Tt),Wt=new Hm(U,pt,Tt),pe=new rp(U),Xt=new Am,D=new Gm(U,pt,Wt,Xt,Tt,ce,pe),b=new tp(v),X=new ip(v),kt=new pd(U,Tt),q=new K0(U,pt,kt,Tt),Ut=new sp(U,kt,pe,q),Ot=new hp(U,Ut,kt,pe),Ce=new up(U,Tt,D),me=new Q0(Xt),ee=new Tm(v,b,X,pt,Tt,q,me),Yt=new qm(v,Xt),qt=new Rm,le=new Nm(pt,Tt),Ae=new j0(v,b,X,Wt,Ot,m,l),Ft=new km(v,Ot,Tt),Rt=new Zm(U,pe,Tt,Wt),_e=new J0(U,pt,pe,Tt),Zt=new ap(U,pt,pe,Tt),pe.programs=ee.programs,v.capabilities=Tt,v.extensions=pt,v.properties=Xt,v.renderLists=qt,v.shadowMap=Ft,v.state=Wt,v.info=pe}Lt();const vt=new Ym(v,U);this.xr=vt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(R){R!==void 0&&(lt=R,this.setSize(at,J,!1))},this.getSize=function(R){return R.set(at,J)},this.setSize=function(R,st,ft=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=R,J=st,e.width=Math.floor(R*lt),e.height=Math.floor(st*lt),ft===!0&&(e.style.width=R+"px",e.style.height=st+"px"),this.setViewport(0,0,R,st)},this.getDrawingBufferSize=function(R){return R.set(at*lt,J*lt).floor()},this.setDrawingBufferSize=function(R,st,ft){at=R,J=st,lt=ft,e.width=Math.floor(R*ft),e.height=Math.floor(st*ft),this.setViewport(0,0,R,st)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(C)},this.setViewport=function(R,st,ft,mt){R.isVector4?C.set(R.x,R.y,R.z,R.w):C.set(R,st,ft,mt),Wt.viewport(S.copy(C).multiplyScalar(lt).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,st,ft,mt){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,st,ft,mt),Wt.scissor(k.copy(O).multiplyScalar(lt).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){Wt.setScissorTest(gt=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(R=!0,st=!0,ft=!0){let mt=0;if(R){let xt=!1;if(A!==null){const it=A.texture.format;xt=it===lu||it===ru||it===au}if(xt){const it=A.texture.type,bt=it===oo||it===no||it===Ur||it===so||it===nu||it===iu,zt=Ae.getClearColor(),Kt=Ae.getClearAlpha(),ne=zt.r,de=zt.g,ye=zt.b;bt?(f[0]=ne,f[1]=de,f[2]=ye,f[3]=Kt,U.clearBufferuiv(U.COLOR,0,f)):(x[0]=ne,x[1]=de,x[2]=ye,x[3]=Kt,U.clearBufferiv(U.COLOR,0,x))}else mt|=U.COLOR_BUFFER_BIT}st&&(mt|=U.DEPTH_BUFFER_BIT),ft&&(mt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",F,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),qt.dispose(),le.dispose(),Xt.dispose(),b.dispose(),X.dispose(),Ot.dispose(),q.dispose(),Rt.dispose(),ee.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Mt),vt.removeEventListener("sessionend",St),$&&($.dispose(),$=null),y.stop()};function F(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=pe.autoReset,st=Ft.enabled,ft=Ft.autoUpdate,mt=Ft.needsUpdate,xt=Ft.type;Lt(),pe.autoReset=R,Ft.enabled=st,Ft.autoUpdate=ft,Ft.needsUpdate=mt,Ft.type=xt}function dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pt(R){const st=R.target;st.removeEventListener("dispose",Pt),j(st)}function j(R){It(R),Xt.remove(R)}function It(R){const st=Xt.get(R).programs;st!==void 0&&(st.forEach(function(ft){ee.releaseProgram(ft)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,st,ft,mt,xt,it){st===null&&(st=et);const bt=xt.isMesh&&xt.matrixWorld.determinant()<0,zt=Te(R,st,ft,mt,xt);Wt.setMaterial(mt,bt);let Kt=ft.index,ne=1;if(mt.wireframe===!0){if(Kt=Ut.getWireframeAttribute(ft),Kt===void 0)return;ne=2}const de=ft.drawRange,ye=ft.attributes.position;let Oe=de.start*ne,an=(de.start+de.count)*ne;it!==null&&(Oe=Math.max(Oe,it.start*ne),an=Math.min(an,(it.start+it.count)*ne)),Kt!==null?(Oe=Math.max(Oe,0),an=Math.min(an,Kt.count)):ye!=null&&(Oe=Math.max(Oe,0),an=Math.min(an,ye.count));const Ge=an-Oe;if(Ge<0||Ge===1/0)return;q.setup(xt,mt,zt,ft,Kt);let je,Be=_e;if(Kt!==null&&(je=kt.get(Kt),Be=Zt,Be.setIndex(je)),xt.isMesh)mt.wireframe===!0?(Wt.setLineWidth(mt.wireframeLinewidth*ot()),Be.setMode(U.LINES)):Be.setMode(U.TRIANGLES);else if(xt.isLine){let $t=mt.linewidth;$t===void 0&&($t=1),Wt.setLineWidth($t*ot()),xt.isLineSegments?Be.setMode(U.LINES):xt.isLineLoop?Be.setMode(U.LINE_LOOP):Be.setMode(U.LINE_STRIP)}else xt.isPoints?Be.setMode(U.POINTS):xt.isSprite&&Be.setMode(U.TRIANGLES);if(xt.isBatchedMesh)Be.renderMultiDraw(xt._multiDrawStarts,xt._multiDrawCounts,xt._multiDrawCount);else if(xt.isInstancedMesh)Be.renderInstances(Oe,Ge,xt.count);else if(ft.isInstancedBufferGeometry){const $t=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ke=Math.min(ft.instanceCount,$t);Be.renderInstances(Oe,Ge,Ke)}else Be.render(Oe,Ge)};function Y(R,st,ft){R.transparent===!0&&R.side===$e&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,ae(R,st,ft),R.side=Wi,R.needsUpdate=!0,ae(R,st,ft),R.side=$e):ae(R,st,ft)}this.compile=function(R,st,ft=null){ft===null&&(ft=R),p=le.get(ft),p.init(),_.push(p),ft.traverseVisible(function(xt){xt.isLight&&xt.layers.test(st.layers)&&(p.pushLight(xt),xt.castShadow&&p.pushShadow(xt))}),R!==ft&&R.traverseVisible(function(xt){xt.isLight&&xt.layers.test(st.layers)&&(p.pushLight(xt),xt.castShadow&&p.pushShadow(xt))}),p.setupLights(v._useLegacyLights);const mt=new Set;return R.traverse(function(xt){const it=xt.material;if(it)if(Array.isArray(it))for(let bt=0;bt<it.length;bt++){const zt=it[bt];Y(zt,ft,xt),mt.add(zt)}else Y(it,ft,xt),mt.add(it)}),_.pop(),p=null,mt},this.compileAsync=function(R,st,ft=null){const mt=this.compile(R,st,ft);return new Promise(xt=>{function it(){if(mt.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&mt.delete(bt)}),mt.size===0){xt(R);return}setTimeout(it,10)}pt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let tt=null;function H(R){tt&&tt(R)}function Mt(){y.stop()}function St(){y.start()}const y=new bu;y.setAnimationLoop(H),typeof self<"u"&&y.setContext(self),this.setAnimationLoop=function(R){tt=R,vt.setAnimationLoop(R),R===null?y.stop():y.start()},vt.addEventListener("sessionstart",Mt),vt.addEventListener("sessionend",St),this.render=function(R,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(st),st=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,st,A),p=le.get(R,_.length),p.init(),_.push(p),nt.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),B.setFromProjectionMatrix(nt),Z=this.localClippingEnabled,N=me.init(this.clippingPlanes,Z),g=qt.get(R,c.length),g.init(),c.push(g),ct(R,st,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(V,W),this.info.render.frame++,N===!0&&me.beginShadows();const ft=p.state.shadowsArray;if(Ft.render(ft,R,st),N===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(g,R),p.setupLights(v._useLegacyLights),st.isArrayCamera){const mt=st.cameras;for(let xt=0,it=mt.length;xt<it;xt++){const bt=mt[xt];At(g,R,bt,bt.viewport)}}else At(g,R,st);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,st),q.resetDefaultState(),Q=-1,w=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?g=c[c.length-1]:g=null};function ct(R,st,ft,mt){if(R.visible===!1)return;if(R.layers.test(st.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(st);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||B.intersectsSprite(R)){mt&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);const bt=Ot.update(R),zt=R.material;zt.visible&&g.push(R,bt,zt,ft,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||B.intersectsObject(R))){const bt=Ot.update(R),zt=R.material;if(mt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Bt.copy(bt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(zt)){const Kt=bt.groups;for(let ne=0,de=Kt.length;ne<de;ne++){const ye=Kt[ne],Oe=zt[ye.materialIndex];Oe&&Oe.visible&&g.push(R,bt,Oe,ft,Bt.z,ye)}}else zt.visible&&g.push(R,bt,zt,ft,Bt.z,null)}}const it=R.children;for(let bt=0,zt=it.length;bt<zt;bt++)ct(it[bt],st,ft,mt)}function At(R,st,ft,mt){const xt=R.opaque,it=R.transmissive,bt=R.transparent;p.setupLightsView(ft),N===!0&&me.setGlobalState(v.clippingPlanes,ft),it.length>0&&oe(xt,it,st,ft),mt&&Wt.viewport(S.copy(mt)),xt.length>0&&se(xt,st,ft),it.length>0&&se(it,st,ft),bt.length>0&&se(bt,st,ft),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function oe(R,st,ft,mt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;const it=Tt.isWebGL2;$===null&&($=new li(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?_i:oo,minFilter:wo,samples:it?4:0})),v.getDrawingBufferSize(yt),it?$.setSize(yt.x,yt.y):$.setSize(ya(yt.x),ya(yt.y));const bt=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(rt),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const zt=v.toneMapping;v.toneMapping=io,se(R,ft,mt),D.updateMultisampleRenderTarget($),D.updateRenderTargetMipmap($);let Kt=!1;for(let ne=0,de=st.length;ne<de;ne++){const ye=st[ne],Oe=ye.object,an=ye.geometry,Ge=ye.material,je=ye.group;if(Ge.side===$e&&Oe.layers.test(mt.layers)){const Be=Ge.side;Ge.side=Hn,Ge.needsUpdate=!0,ue(Oe,ft,mt,an,Ge,je),Ge.side=Be,Ge.needsUpdate=!0,Kt=!0}}Kt===!0&&(D.updateMultisampleRenderTarget($),D.updateRenderTargetMipmap($)),v.setRenderTarget(bt),v.setClearColor(rt,z),v.toneMapping=zt}function se(R,st,ft){const mt=st.isScene===!0?st.overrideMaterial:null;for(let xt=0,it=R.length;xt<it;xt++){const bt=R[xt],zt=bt.object,Kt=bt.geometry,ne=mt===null?bt.material:mt,de=bt.group;zt.layers.test(ft.layers)&&ue(zt,st,ft,Kt,ne,de)}}function ue(R,st,ft,mt,xt,it){R.onBeforeRender(v,st,ft,mt,xt,it),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),xt.onBeforeRender(v,st,ft,mt,R,it),xt.transparent===!0&&xt.side===$e&&xt.forceSinglePass===!1?(xt.side=Hn,xt.needsUpdate=!0,v.renderBufferDirect(ft,st,mt,xt,R,it),xt.side=Wi,xt.needsUpdate=!0,v.renderBufferDirect(ft,st,mt,xt,R,it),xt.side=$e):v.renderBufferDirect(ft,st,mt,xt,R,it),R.onAfterRender(v,st,ft,mt,xt,it)}function ae(R,st,ft){st.isScene!==!0&&(st=et);const mt=Xt.get(R),xt=p.state.lights,it=p.state.shadowsArray,bt=xt.state.version,zt=ee.getParameters(R,xt.state,it,st,ft),Kt=ee.getProgramCacheKey(zt);let ne=mt.programs;mt.environment=R.isMeshStandardMaterial?st.environment:null,mt.fog=st.fog,mt.envMap=(R.isMeshStandardMaterial?X:b).get(R.envMap||mt.environment),ne===void 0&&(R.addEventListener("dispose",Pt),ne=new Map,mt.programs=ne);let de=ne.get(Kt);if(de!==void 0){if(mt.currentProgram===de&&mt.lightsStateVersion===bt)return Ee(R,zt),de}else zt.uniforms=ee.getUniforms(R),R.onBuild(ft,zt,v),R.onBeforeCompile(zt,v),de=ee.acquireProgram(zt,Kt),ne.set(Kt,de),mt.uniforms=zt.uniforms;const ye=mt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ye.clippingPlanes=me.uniform),Ee(R,zt),mt.needsLights=He(R),mt.lightsStateVersion=bt,mt.needsLights&&(ye.ambientLightColor.value=xt.state.ambient,ye.lightProbe.value=xt.state.probe,ye.directionalLights.value=xt.state.directional,ye.directionalLightShadows.value=xt.state.directionalShadow,ye.spotLights.value=xt.state.spot,ye.spotLightShadows.value=xt.state.spotShadow,ye.rectAreaLights.value=xt.state.rectArea,ye.ltc_1.value=xt.state.rectAreaLTC1,ye.ltc_2.value=xt.state.rectAreaLTC2,ye.pointLights.value=xt.state.point,ye.pointLightShadows.value=xt.state.pointShadow,ye.hemisphereLights.value=xt.state.hemi,ye.directionalShadowMap.value=xt.state.directionalShadowMap,ye.directionalShadowMatrix.value=xt.state.directionalShadowMatrix,ye.spotShadowMap.value=xt.state.spotShadowMap,ye.spotLightMatrix.value=xt.state.spotLightMatrix,ye.spotLightMap.value=xt.state.spotLightMap,ye.pointShadowMap.value=xt.state.pointShadowMap,ye.pointShadowMatrix.value=xt.state.pointShadowMatrix),mt.currentProgram=de,mt.uniformsList=null,de}function fe(R){if(R.uniformsList===null){const st=R.currentProgram.getUniforms();R.uniformsList=ma.seqWithValue(st.seq,R.uniforms)}return R.uniformsList}function Ee(R,st){const ft=Xt.get(R);ft.outputColorSpace=st.outputColorSpace,ft.batching=st.batching,ft.instancing=st.instancing,ft.instancingColor=st.instancingColor,ft.skinning=st.skinning,ft.morphTargets=st.morphTargets,ft.morphNormals=st.morphNormals,ft.morphColors=st.morphColors,ft.morphTargetsCount=st.morphTargetsCount,ft.numClippingPlanes=st.numClippingPlanes,ft.numIntersection=st.numClipIntersection,ft.vertexAlphas=st.vertexAlphas,ft.vertexTangents=st.vertexTangents,ft.toneMapping=st.toneMapping}function Te(R,st,ft,mt,xt){st.isScene!==!0&&(st=et),D.resetTextureUnits();const it=st.fog,bt=mt.isMeshStandardMaterial?st.environment:null,zt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xi,Kt=(mt.isMeshStandardMaterial?X:b).get(mt.envMap||bt),ne=mt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,de=!!ft.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),ye=!!ft.morphAttributes.position,Oe=!!ft.morphAttributes.normal,an=!!ft.morphAttributes.color;let Ge=io;mt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ge=v.toneMapping);const je=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Be=je!==void 0?je.length:0,$t=Xt.get(mt),Ke=p.state.lights;if(N===!0&&(Z===!0||R!==w)){const ie=R===w&&mt.id===Q;me.setState(mt,R,ie)}let be=!1;mt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ke.state.version||$t.outputColorSpace!==zt||xt.isBatchedMesh&&$t.batching===!1||!xt.isBatchedMesh&&$t.batching===!0||xt.isInstancedMesh&&$t.instancing===!1||!xt.isInstancedMesh&&$t.instancing===!0||xt.isSkinnedMesh&&$t.skinning===!1||!xt.isSkinnedMesh&&$t.skinning===!0||xt.isInstancedMesh&&$t.instancingColor===!0&&xt.instanceColor===null||xt.isInstancedMesh&&$t.instancingColor===!1&&xt.instanceColor!==null||$t.envMap!==Kt||mt.fog===!0&&$t.fog!==it||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==me.numPlanes||$t.numIntersection!==me.numIntersection)||$t.vertexAlphas!==ne||$t.vertexTangents!==de||$t.morphTargets!==ye||$t.morphNormals!==Oe||$t.morphColors!==an||$t.toneMapping!==Ge||Tt.isWebGL2===!0&&$t.morphTargetsCount!==Be)&&(be=!0):(be=!0,$t.__version=mt.version);let G=$t.currentProgram;be===!0&&(G=ae(mt,st,xt));let ht=!1,ut=!1,wt=!1;const Ct=G.getUniforms(),Gt=$t.uniforms;if(Wt.useProgram(G.program)&&(ht=!0,ut=!0,wt=!0),mt.id!==Q&&(Q=mt.id,ut=!0),ht||w!==R){Ct.setValue(U,"projectionMatrix",R.projectionMatrix),Ct.setValue(U,"viewMatrix",R.matrixWorldInverse);const ie=Ct.map.cameraPosition;ie!==void 0&&ie.setValue(U,Bt.setFromMatrixPosition(R.matrixWorld)),Tt.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ut=!0,wt=!0)}if(xt.isSkinnedMesh){Ct.setOptional(U,xt,"bindMatrix"),Ct.setOptional(U,xt,"bindMatrixInverse");const ie=xt.skeleton;ie&&(Tt.floatVertexTextures?(ie.boneTexture===null&&ie.computeBoneTexture(),Ct.setValue(U,"boneTexture",ie.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}xt.isBatchedMesh&&(Ct.setOptional(U,xt,"batchingTexture"),Ct.setValue(U,"batchingTexture",xt._matricesTexture,D));const he=ft.morphAttributes;if((he.position!==void 0||he.normal!==void 0||he.color!==void 0&&Tt.isWebGL2===!0)&&Ce.update(xt,ft,G),(ut||$t.receiveShadow!==xt.receiveShadow)&&($t.receiveShadow=xt.receiveShadow,Ct.setValue(U,"receiveShadow",xt.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Gt.envMap.value=Kt,Gt.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),ut&&(Ct.setValue(U,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&ke(Gt,wt),it&&mt.fog===!0&&Yt.refreshFogUniforms(Gt,it),Yt.refreshMaterialUniforms(Gt,mt,lt,J,$),ma.upload(U,fe($t),Gt,D)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(ma.upload(U,fe($t),Gt,D),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&Ct.setValue(U,"center",xt.center),Ct.setValue(U,"modelViewMatrix",xt.modelViewMatrix),Ct.setValue(U,"normalMatrix",xt.normalMatrix),Ct.setValue(U,"modelMatrix",xt.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const ie=mt.uniformsGroups;for(let Jt=0,ve=ie.length;Jt<ve;Jt++)if(Tt.isWebGL2){const Ue=ie[Jt];Rt.update(Ue,G),Rt.bind(Ue,G)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return G}function ke(R,st){R.ambientLightColor.needsUpdate=st,R.lightProbe.needsUpdate=st,R.directionalLights.needsUpdate=st,R.directionalLightShadows.needsUpdate=st,R.pointLights.needsUpdate=st,R.pointLightShadows.needsUpdate=st,R.spotLights.needsUpdate=st,R.spotLightShadows.needsUpdate=st,R.rectAreaLights.needsUpdate=st,R.hemisphereLights.needsUpdate=st}function He(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,st,ft){Xt.get(R.texture).__webglTexture=st,Xt.get(R.depthTexture).__webglTexture=ft;const mt=Xt.get(R);mt.__hasExternalTextures=!0,mt.__hasExternalTextures&&(mt.__autoAllocateDepthBuffer=ft===void 0,mt.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),mt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,st){const ft=Xt.get(R);ft.__webglFramebuffer=st,ft.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(R,st=0,ft=0){A=R,P=st,T=ft;let mt=!0,xt=null,it=!1,bt=!1;if(R){const Kt=Xt.get(R);Kt.__useDefaultFramebuffer!==void 0?(Wt.bindFramebuffer(U.FRAMEBUFFER,null),mt=!1):Kt.__webglFramebuffer===void 0?D.setupRenderTarget(R):Kt.__hasExternalTextures&&D.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(bt=!0);const de=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(de[st])?xt=de[st][ft]:xt=de[st],it=!0):Tt.isWebGL2&&R.samples>0&&D.useMultisampledRTT(R)===!1?xt=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray(de)?xt=de[ft]:xt=de,S.copy(R.viewport),k.copy(R.scissor),K=R.scissorTest}else S.copy(C).multiplyScalar(lt).floor(),k.copy(O).multiplyScalar(lt).floor(),K=gt;if(Wt.bindFramebuffer(U.FRAMEBUFFER,xt)&&Tt.drawBuffers&&mt&&Wt.drawBuffers(R,xt),Wt.viewport(S),Wt.scissor(k),Wt.setScissorTest(K),it){const Kt=Xt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+st,Kt.__webglTexture,ft)}else if(bt){const Kt=Xt.get(R.texture),ne=st||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,ft||0,ne)}Q=-1},this.readRenderTargetPixels=function(R,st,ft,mt,xt,it,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(zt=zt[bt]),zt){Wt.bindFramebuffer(U.FRAMEBUFFER,zt);try{const Kt=R.texture,ne=Kt.format,de=Kt.type;if(ne!==di&&ce.convert(ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ye=de===_i&&(pt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(de!==oo&&ce.convert(de)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(de===zi&&(Tt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=R.width-mt&&ft>=0&&ft<=R.height-xt&&U.readPixels(st,ft,mt,xt,ce.convert(ne),ce.convert(de),it)}finally{const Kt=A!==null?Xt.get(A).__webglFramebuffer:null;Wt.bindFramebuffer(U.FRAMEBUFFER,Kt)}}},this.copyFramebufferToTexture=function(R,st,ft=0){const mt=Math.pow(2,-ft),xt=Math.floor(st.image.width*mt),it=Math.floor(st.image.height*mt);D.setTexture2D(st,0),U.copyTexSubImage2D(U.TEXTURE_2D,ft,0,0,R.x,R.y,xt,it),Wt.unbindTexture()},this.copyTextureToTexture=function(R,st,ft,mt=0){const xt=st.image.width,it=st.image.height,bt=ce.convert(ft.format),zt=ce.convert(ft.type);D.setTexture2D(ft,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ft.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ft.unpackAlignment),st.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,mt,R.x,R.y,xt,it,bt,zt,st.image.data):st.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,mt,R.x,R.y,st.mipmaps[0].width,st.mipmaps[0].height,bt,st.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,mt,R.x,R.y,bt,zt,st.image),mt===0&&ft.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,st,ft,mt,xt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const it=R.max.x-R.min.x+1,bt=R.max.y-R.min.y+1,zt=R.max.z-R.min.z+1,Kt=ce.convert(mt.format),ne=ce.convert(mt.type);let de;if(mt.isData3DTexture)D.setTexture3D(mt,0),de=U.TEXTURE_3D;else if(mt.isDataArrayTexture||mt.isCompressedArrayTexture)D.setTexture2DArray(mt,0),de=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,mt.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,mt.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,mt.unpackAlignment);const ye=U.getParameter(U.UNPACK_ROW_LENGTH),Oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),an=U.getParameter(U.UNPACK_SKIP_PIXELS),Ge=U.getParameter(U.UNPACK_SKIP_ROWS),je=U.getParameter(U.UNPACK_SKIP_IMAGES),Be=ft.isCompressedTexture?ft.mipmaps[xt]:ft.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),ft.isDataTexture||ft.isData3DTexture?U.texSubImage3D(de,xt,st.x,st.y,st.z,it,bt,zt,Kt,ne,Be.data):ft.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(de,xt,st.x,st.y,st.z,it,bt,zt,Kt,Be.data)):U.texSubImage3D(de,xt,st.x,st.y,st.z,it,bt,zt,Kt,ne,Be),U.pixelStorei(U.UNPACK_ROW_LENGTH,ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,an),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je),xt===0&&mt.generateMipmaps&&U.generateMipmap(de),Wt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){P=0,T=0,A=null,Wt.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fr?"display-p3":"srgb",e.unpackColorSpace=nn.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?yo:uu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===yo?_n:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class jm extends Pu{}jm.prototype.isWebGL1Renderer=!0;class Vr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=e}clone(){return new Vr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wr{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=e,this.far=i}clone(){return new Wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vc extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Km{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,s=this.stride;o<s;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zn=new E;class Sa{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Zn.fromBufferAttribute(this,e),Zn.applyMatrix4(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Zn.fromBufferAttribute(this,e),Zn.applyNormalMatrix(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Zn.fromBufferAttribute(this,e),Zn.transformDirection(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),o=cn(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),o=cn(o,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tr extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qo;const vs=new E,Zo=new E,jo=new E,Ko=new te,Ms=new te,Du=new on,oa=new E,ys=new E,sa=new E,Mc=new te,rr=new te,yc=new te;class wc extends bn{constructor(t=new Tr){if(super(),this.isSprite=!0,this.type="Sprite",qo===void 0){qo=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Km(e,5);qo.setIndex([0,1,2,0,2,3]),qo.setAttribute("position",new Sa(i,3,0,!1)),qo.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=qo,this.material=t,this.center=new te(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zo.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),jo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zo.multiplyScalar(-jo.z);const i=this.material.rotation;let o,s;i!==0&&(s=Math.cos(i),o=Math.sin(i));const r=this.center;aa(oa.set(-.5,-.5,0),jo,r,Zo,o,s),aa(ys.set(.5,-.5,0),jo,r,Zo,o,s),aa(sa.set(.5,.5,0),jo,r,Zo,o,s),Mc.set(0,0),rr.set(1,0),yc.set(1,1);let a=t.ray.intersectTriangle(oa,ys,sa,!1,vs);if(a===null&&(aa(ys.set(-.5,.5,0),jo,r,Zo,o,s),rr.set(0,1),a=t.ray.intersectTriangle(oa,sa,ys,!1,vs),a===null))return;const l=t.ray.origin.distanceTo(vs);l<t.near||l>t.far||e.push({distance:l,point:vs.clone(),uv:hi.getInterpolation(vs,oa,ys,sa,Mc,rr,yc,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function aa(n,t,e,i,o,s){Ko.subVectors(n,e).addScalar(.5).multiply(i),o!==void 0?(Ms.x=s*Ko.x-o*Ko.y,Ms.y=o*Ko.x+s*Ko.y):Ms.copy(Ko),n.copy(t),n.x+=Ms.x,n.y+=Ms.y,n.applyMatrix4(Du)}class Jm extends Jn{constructor(t=null,e=1,i=1,o,s,r,a,l,u=Pn,d=Pn,h,m){super(null,r,a,l,u,d,o,s,h,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends Rn{constructor(t,e,i,o=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Jo=new on,bc=new on,ra=[],Ec=new pn,$m=new on,ws=new I,Ss=new Eo;class Tc extends I{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,$m)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Jo),Ec.copy(t.boundingBox).applyMatrix4(Jo),this.boundingBox.union(Ec)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Eo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Jo),Ss.copy(t.boundingSphere).applyMatrix4(Jo),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,o=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),t.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Jo),bc.multiplyMatrices(i,Jo),ws.matrixWorld=bc,ws.raycast(t,ra);for(let r=0,a=ra.length;r<a;r++){const l=ra[r];l.instanceId=s,l.object=this,e.push(l)}ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ac=new E,Cc=new E,Rc=new on,lr=new Ca,la=new Eo;class Gi extends bn{constructor(t=new Qe,e=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,s=e.count;o<s;o++)Ac.fromBufferAttribute(e,o-1),Cc.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=Ac.distanceTo(Cc);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(o),la.radius+=s,t.ray.intersectsSphere(la)===!1)return;Rc.copy(o).invert(),lr.copy(t.ray).applyMatrix4(Rc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new E,d=new E,h=new E,m=new E,f=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const c=Math.max(0,r.start),_=Math.min(x.count,r.start+r.count);for(let v=c,M=_-1;v<M;v+=f){const P=x.getX(v),T=x.getX(v+1);if(u.fromBufferAttribute(p,P),d.fromBufferAttribute(p,T),lr.distanceSqToSegment(u,d,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const Q=t.ray.origin.distanceTo(m);Q<t.near||Q>t.far||e.push({distance:Q,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let v=c,M=_-1;v<M;v+=f){if(u.fromBufferAttribute(p,v),d.fromBufferAttribute(p,v+1),lr.distanceSqToSegment(u,d,m,h)>l)continue;m.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(m);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Qm extends Gi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ba extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pc=new on,Ar=new Ca,ca=new Eo,ua=new E;class Cr extends bn{constructor(t=new Qe,e=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(o),ca.radius+=s,t.ray.intersectsSphere(ca)===!1)return;Pc.copy(o).invert(),Ar.copy(t.ray).applyMatrix4(Pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let x=m,g=f;x<g;x++){const p=u.getX(x);ua.fromBufferAttribute(h,p),Dc(ua,p,l,o,t,e,this)}}else{const m=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let x=m,g=f;x<g;x++)ua.fromBufferAttribute(h,x),Dc(ua,x,l,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dc(n,t,e,i,o,s,r){const a=Ar.distanceSqToPoint(n);if(a<e){const l=new E;Ar.closestPointToPoint(n,l),l.applyMatrix4(i);const u=o.ray.origin.distanceTo(l);if(u<o.near||u>o.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Kn extends Jn{constructor(t,e,i,o,s,r,a,l,u){super(t,e,i,o,s,r,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,o=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(o),e.push(s),o=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let o=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(o=Math.floor(a+(l-a)/2),u=i[o]-r,u<0)a=o+1;else if(u>0)l=o-1;else{l=o;break}if(o=l,i[o]===r)return o/(s-1);const d=i[o],m=i[o+1]-d,f=(r-d)/m;return(o+f)/(s-1)}getTangent(t,e){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const r=this.getPoint(o),a=this.getPoint(s),l=e||(r.isVector2?new te:new E);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,o=[],s=[],r=[],a=new E,l=new on;for(let f=0;f<=t;f++){const x=f/t;o[f]=this.getTangentAt(x,new E)}s[0]=new E,r[0]=new E;let u=Number.MAX_VALUE;const d=Math.abs(o[0].x),h=Math.abs(o[0].y),m=Math.abs(o[0].z);d<=u&&(u=d,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(o[0],i).normalize(),s[0].crossVectors(o[0],a),r[0].crossVectors(o[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(o[f-1],o[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Dn(o[f-1].dot(o[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,x))}r[f].crossVectors(o[f],s[f])}if(e===!0){let f=Math.acos(Dn(s[0].dot(s[t]),-1,1));f/=t,o[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(o[x],f*x)),r[x].crossVectors(o[x],s[x])}return{tangents:o,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xr extends Ei{constructor(t=0,e=0,i=1,o=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new te,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=l-this.aX,f=u-this.aY;l=m*d-f*h+this.aX,u=m*h+f*d+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tg extends Xr{constructor(t,e,i,o,s,r){super(t,e,i,i,o,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yr(){let n=0,t=0,e=0,i=0;function o(s,r,a,l){n=s,t=a,e=-3*s+3*r-2*a-l,i=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,u){o(r,a,u*(a-s),u*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,u,d,h){let m=(r-s)/u-(a-s)/(u+d)+(a-r)/d,f=(a-r)/d-(l-r)/(d+h)+(l-a)/h;m*=d,f*=d,o(r,a,m,f)},calc:function(s){const r=s*s,a=r*s;return n+t*s+e*r+i*a}}}const ha=new E,cr=new Yr,ur=new Yr,hr=new Yr;class eg extends Ei{constructor(t=[],e=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=o}getPoint(t,e=new E){const i=e,o=this.points,s=o.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,d;this.closed||a>0?u=o[(a-1)%s]:(ha.subVectors(o[0],o[1]).add(o[0]),u=ha);const h=o[a%s],m=o[(a+1)%s];if(this.closed||a+2<s?d=o[(a+2)%s]:(ha.subVectors(o[s-1],o[s-2]).add(o[s-1]),d=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(m),f),p=Math.pow(m.distanceToSquared(d),f);g<1e-4&&(g=1),x<1e-4&&(x=g),p<1e-4&&(p=g),cr.initNonuniformCatmullRom(u.x,h.x,m.x,d.x,x,g,p),ur.initNonuniformCatmullRom(u.y,h.y,m.y,d.y,x,g,p),hr.initNonuniformCatmullRom(u.z,h.z,m.z,d.z,x,g,p)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(u.x,h.x,m.x,d.x,this.tension),ur.initCatmullRom(u.y,h.y,m.y,d.y,this.tension),hr.initCatmullRom(u.z,h.z,m.z,d.z,this.tension));return i.set(cr.calc(l),ur.calc(l),hr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new E().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lc(n,t,e,i,o){const s=(i-t)*.5,r=(o-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+r)*l+(-3*e+3*i-2*s-r)*a+s*n+e}function ng(n,t){const e=1-n;return e*e*t}function ig(n,t){return 2*(1-n)*n*t}function og(n,t){return n*n*t}function Rs(n,t,e,i){return ng(n,t)+ig(n,e)+og(n,i)}function sg(n,t){const e=1-n;return e*e*e*t}function ag(n,t){const e=1-n;return 3*e*e*n*t}function rg(n,t){return 3*(1-n)*n*n*t}function lg(n,t){return n*n*n*t}function Ps(n,t,e,i,o){return sg(n,t)+ag(n,e)+rg(n,i)+lg(n,o)}class Lu extends Ei{constructor(t=new te,e=new te,i=new te,o=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new te){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(Ps(t,o.x,s.x,r.x,a.x),Ps(t,o.y,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cg extends Ei{constructor(t=new E,e=new E,i=new E,o=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new E){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(Ps(t,o.x,s.x,r.x,a.x),Ps(t,o.y,s.y,r.y,a.y),Ps(t,o.z,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iu extends Ei{constructor(t=new te,e=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new te){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new te){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ug extends Ei{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends Ei{constructor(t=new te,e=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new te){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(Rs(t,o.x,s.x,r.x),Rs(t,o.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hg extends Ei{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(Rs(t,o.x,s.x,r.x),Rs(t,o.y,s.y,r.y),Rs(t,o.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new te){const i=e,o=this.points,s=(o.length-1)*t,r=Math.floor(s),a=s-r,l=o[r===0?r:r-1],u=o[r],d=o[r>o.length-2?o.length-1:r+1],h=o[r>o.length-3?o.length-1:r+2];return i.set(Lc(a,l.x,u.x,d.x,h.x),Lc(a,l.y,u.y,d.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new te().fromArray(o))}return this}}var Ic=Object.freeze({__proto__:null,ArcCurve:tg,CatmullRomCurve3:eg,CubicBezierCurve:Lu,CubicBezierCurve3:cg,EllipseCurve:Xr,LineCurve:Iu,LineCurve3:ug,QuadraticBezierCurve:Uu,QuadraticBezierCurve3:hg,SplineCurve:Nu});class dg extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=i){const r=o[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-r/l;return a.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,o=this.curves.length;i<o;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let o=0,s=this.curves;o<s.length;o++){const r=s[o],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let u=0;u<l.length;u++){const d=l[u];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(new Ic[o.type]().fromJSON(o))}return this}}class fg extends dg{constructor(t){super(),this.type="Path",this.currentPoint=new te,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Iu(this.currentPoint.clone(),new te(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,o){const s=new Uu(this.currentPoint.clone(),new te(t,e),new te(i,o));return this.curves.push(s),this.currentPoint.set(i,o),this}bezierCurveTo(t,e,i,o,s,r){const a=new Lu(this.currentPoint.clone(),new te(t,e),new te(i,o),new te(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Nu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,o,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,o,s,r),this}absarc(t,e,i,o,s,r){return this.absellipse(t,e,i,i,o,s,r),this}ellipse(t,e,i,o,s,r,a,l){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,i,o,s,r,a,l),this}absellipse(t,e,i,o,s,r,a,l){const u=new Xr(t,e,i,o,s,r,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qr extends Qe{constructor(t=[new te(0,-.5),new te(.5,0),new te(0,.5)],e=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:o},e=Math.floor(e),o=Dn(o,0,Math.PI*2);const s=[],r=[],a=[],l=[],u=[],d=1/e,h=new E,m=new te,f=new E,x=new E,g=new E;let p=0,c=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,c=t[_+1].y-t[_].y,f.x=c*1,f.y=-p,f.z=c*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[_+1].x-t[_].x,c=t[_+1].y-t[_].y,f.x=c*1,f.y=-p,f.z=c*0,x.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(x)}for(let _=0;_<=e;_++){const v=i+_*d*o,M=Math.sin(v),P=Math.cos(v);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*M,h.y=t[T].y,h.z=t[T].x*P,r.push(h.x,h.y,h.z),m.x=_/e,m.y=T/(t.length-1),a.push(m.x,m.y);const A=l[3*T+0]*M,Q=l[3*T+1],w=l[3*T+0]*P;u.push(A,Q,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const M=v+_*t.length,P=M,T=M+t.length,A=M+t.length+1,Q=M+1;s.push(P,T,Q),s.push(A,Q,T)}this.setIndex(s),this.setAttribute("position",new sn(r,3)),this.setAttribute("uv",new sn(a,2)),this.setAttribute("normal",new sn(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.points,t.segments,t.phiStart,t.phiLength)}}class bo extends qr{constructor(t=1,e=1,i=4,o=8){const s=new fg;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),o),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:o}}static fromJSON(t){return new bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class kn extends Qe{constructor(t=1,e=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:o},e=Math.max(3,e);const s=[],r=[],a=[],l=[],u=new E,d=new te;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,m=3;h<=e;h++,m+=3){const f=i+h/e*o;u.x=t*Math.cos(f),u.y=t*Math.sin(f),r.push(u.x,u.y,u.z),a.push(0,0,1),d.x=(r[m]/t+1)/2,d.y=(r[m+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new sn(r,3)),this.setAttribute("normal",new sn(a,3)),this.setAttribute("uv",new sn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Qe{constructor(t=1,e=1,i=1,o=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const u=this;o=Math.floor(o),s=Math.floor(s);const d=[],h=[],m=[],f=[];let x=0;const g=[],p=i/2;let c=0;_(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(f,2));function _(){const M=new E,P=new E;let T=0;const A=(e-t)/i;for(let Q=0;Q<=s;Q++){const w=[],S=Q/s,k=S*(e-t)+t;for(let K=0;K<=o;K++){const rt=K/o,z=rt*l+a,at=Math.sin(z),J=Math.cos(z);P.x=k*at,P.y=-S*i+p,P.z=k*J,h.push(P.x,P.y,P.z),M.set(at,A,J).normalize(),m.push(M.x,M.y,M.z),f.push(rt,1-S),w.push(x++)}g.push(w)}for(let Q=0;Q<o;Q++)for(let w=0;w<s;w++){const S=g[w][Q],k=g[w+1][Q],K=g[w+1][Q+1],rt=g[w][Q+1];d.push(S,k,rt),d.push(k,K,rt),T+=6}u.addGroup(c,T,0),c+=T}function v(M){const P=x,T=new te,A=new E;let Q=0;const w=M===!0?t:e,S=M===!0?1:-1;for(let K=1;K<=o;K++)h.push(0,p*S,0),m.push(0,S,0),f.push(.5,.5),x++;const k=x;for(let K=0;K<=o;K++){const z=K/o*l+a,at=Math.cos(z),J=Math.sin(z);A.x=w*J,A.y=p*S,A.z=w*at,h.push(A.x,A.y,A.z),m.push(0,S,0),T.x=at*.5+.5,T.y=J*.5*S+.5,f.push(T.x,T.y),x++}for(let K=0;K<o;K++){const rt=P+K,z=k+K;M===!0?d.push(z,z+1,rt):d.push(z+1,z,rt),Q+=3}u.addGroup(c,Q,M===!0?1:2),c+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends Fe{constructor(t=1,e=1,i=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,i,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ea(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends Qe{constructor(t=.5,e=1,i=32,o=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:o,thetaStart:s,thetaLength:r},i=Math.max(3,i),o=Math.max(1,o);const a=[],l=[],u=[],d=[];let h=t;const m=(e-t)/o,f=new E,x=new te;for(let g=0;g<=o;g++){for(let p=0;p<=i;p++){const c=s+p/i*r;f.x=h*Math.cos(c),f.y=h*Math.sin(c),l.push(f.x,f.y,f.z),u.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,d.push(x.x,x.y)}h+=m}for(let g=0;g<o;g++){const p=g*(i+1);for(let c=0;c<i;c++){const _=c+p,v=_,M=_+i+1,P=_+i+2,T=_+1;a.push(v,M,T),a.push(M,P,T)}}this.setIndex(a),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xn extends Qe{constructor(t=1,e=32,i=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let u=0;const d=[],h=new E,m=new E,f=[],x=[],g=[],p=[];for(let c=0;c<=i;c++){const _=[],v=c/i;let M=0;c===0&&r===0?M=.5/e:c===i&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const T=P/e;h.x=-t*Math.cos(o+T*s)*Math.sin(r+v*a),h.y=t*Math.cos(r+v*a),h.z=t*Math.sin(o+T*s)*Math.sin(r+v*a),x.push(h.x,h.y,h.z),m.copy(h).normalize(),g.push(m.x,m.y,m.z),p.push(T+M,1-v),_.push(u++)}d.push(_)}for(let c=0;c<i;c++)for(let _=0;_<e;_++){const v=d[c][_+1],M=d[c][_],P=d[c+1][_],T=d[c+1][_+1];(c!==0||r>0)&&f.push(v,M,T),(c!==i-1||l<Math.PI)&&f.push(M,P,T)}this.setIndex(f),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bi extends Qe{constructor(t=1,e=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const r=[],a=[],l=[],u=[],d=new E,h=new E,m=new E;for(let f=0;f<=i;f++)for(let x=0;x<=o;x++){const g=x/o*s,p=f/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(g),h.y=(t+e*Math.cos(p))*Math.sin(g),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),d.x=t*Math.cos(g),d.y=t*Math.sin(g),m.subVectors(h,d).normalize(),l.push(m.x,m.y,m.z),u.push(x/o),u.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=o;x++){const g=(o+1)*f+x-1,p=(o+1)*(f-1)+x-1,c=(o+1)*(f-1)+x,_=(o+1)*f+x;r.push(g,p,_),r.push(p,c,_)}this.setIndex(r),this.setAttribute("position",new sn(a,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pg extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Et extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ts extends Et{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class mg extends Yi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Zr extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Rr extends Zr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dr=new on,Uc=new E,Nc=new E;class Fu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fc=new on,bs=new E,fr=new E;class gg extends Fu{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new wn(2,1,1,1),new wn(0,1,1,1),new wn(3,1,1,1),new wn(1,1,1,1),new wn(3,0,1,1),new wn(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),i.position.copy(bs),fr.copy(i.position),fr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(fr),i.updateMatrixWorld(),o.makeTranslation(-bs.x,-bs.y,-bs.z),Fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}}class Ui extends Zr{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new gg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xg extends Fu{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pr extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ou{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oc(){return(typeof performance>"u"?Date:performance).now()}class jr{constructor(t,e,i=0,o=1/0){this.ray=new Ca(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Pr(t,this,i,e),i.sort(zc),i}intersectObjects(t,e=!0,i=[]){for(let o=0,s=t.length;o<s;o++)Pr(t[o],this,i,e);return i.sort(zc),i}}function zc(n,t){return n.distance-t.distance}function Pr(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const o=n.children;for(let s=0,r=o.length;s<r;s++)Pr(o[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lr);const Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class To{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _g=new kr(-1,1,1,-1,0,1);class vg extends Qe{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const Mg=new vg;class Pa{constructor(t){this._mesh=new I(Mg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_g)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class es extends To{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ki.clone(t.uniforms),this.material=new Cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pa(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bc extends To{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const o=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class yg extends To{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new te);this._width=i.width,this._height=i.height,e=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(Ds),this.copyPass.material.blending=Xn,this.clock=new Ou}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let o=0,s=this.passes.length;o<s;o++){const r=this.passes[o];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(r instanceof Bc?i=!0:r instanceof yg&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sg extends To{constructor(t,e,i=null,o=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(t,e,i){const o=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=o}}const bg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends To{constructor(t,e,i,o){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=o,this.resolution=t!==void 0?new te(t.x,t.y):new te(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new li(s,r,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const m=new li(s,r,{type:_i});m.texture.name="UnrealBloomPass.h"+h,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const f=new li(s,r,{type:_i});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=bg;this.highPassUniforms=ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Ds;this.copyUniforms=ki.clone(d.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new mn,this.fsQuad=new Pa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),o=Math.round(e/2);this.renderTargetBright.setSize(i,o);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,o),this.renderTargetsVertical[s].setSize(i,o),this.separableBlurMaterials[s].uniforms.invSize.value=new te(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(t,e,i,o,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}cs.BlurDirectionX=new te(1,0);cs.BlurDirectionY=new te(0,1);const Eg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Tg extends To{constructor(){super();const t=Eg;this.uniforms=ki.clone(t.uniforms),this.material=new pg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},nn.getTransfer(this._outputColorSpace)===fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ag={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};class Cg{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,o){return t[0]*e+t[1]*i+t[2]*o}dot4(t,e,i,o,s){return t[0]*e+t[1]*i+t[2]*o+t[3]*s}noise(t,e){let i,o,s;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),u=Math.floor(e+a),d=(3-Math.sqrt(3))/6,h=(l+u)*d,m=l-h,f=u-h,x=t-m,g=e-f;let p,c;x>g?(p=1,c=0):(p=0,c=1);const _=x-p+d,v=g-c+d,M=x-1+2*d,P=g-1+2*d,T=l&255,A=u&255,Q=this.perm[T+this.perm[A]]%12,w=this.perm[T+p+this.perm[A+c]]%12,S=this.perm[T+1+this.perm[A+1]]%12;let k=.5-x*x-g*g;k<0?i=0:(k*=k,i=k*k*this.dot(this.grad3[Q],x,g));let K=.5-_*_-v*v;K<0?o=0:(K*=K,o=K*K*this.dot(this.grad3[w],_,v));let rt=.5-M*M-P*P;return rt<0?s=0:(rt*=rt,s=rt*rt*this.dot(this.grad3[S],M,P)),70*(i+o+s)}noise3d(t,e,i){let o,s,r,a;const u=(t+e+i)*.3333333333333333,d=Math.floor(t+u),h=Math.floor(e+u),m=Math.floor(i+u),f=1/6,x=(d+h+m)*f,g=d-x,p=h-x,c=m-x,_=t-g,v=e-p,M=i-c;let P,T,A,Q,w,S;_>=v?v>=M?(P=1,T=0,A=0,Q=1,w=1,S=0):_>=M?(P=1,T=0,A=0,Q=1,w=0,S=1):(P=0,T=0,A=1,Q=1,w=0,S=1):v<M?(P=0,T=0,A=1,Q=0,w=1,S=1):_<M?(P=0,T=1,A=0,Q=0,w=1,S=1):(P=0,T=1,A=0,Q=1,w=1,S=0);const k=_-P+f,K=v-T+f,rt=M-A+f,z=_-Q+2*f,at=v-w+2*f,J=M-S+2*f,lt=_-1+3*f,V=v-1+3*f,W=M-1+3*f,C=d&255,O=h&255,gt=m&255,B=this.perm[C+this.perm[O+this.perm[gt]]]%12,N=this.perm[C+P+this.perm[O+T+this.perm[gt+A]]]%12,Z=this.perm[C+Q+this.perm[O+w+this.perm[gt+S]]]%12,$=this.perm[C+1+this.perm[O+1+this.perm[gt+1]]]%12;let nt=.6-_*_-v*v-M*M;nt<0?o=0:(nt*=nt,o=nt*nt*this.dot3(this.grad3[B],_,v,M));let yt=.6-k*k-K*K-rt*rt;yt<0?s=0:(yt*=yt,s=yt*yt*this.dot3(this.grad3[N],k,K,rt));let Bt=.6-z*z-at*at-J*J;Bt<0?r=0:(Bt*=Bt,r=Bt*Bt*this.dot3(this.grad3[Z],z,at,J));let et=.6-lt*lt-V*V-W*W;return et<0?a=0:(et*=et,a=et*et*this.dot3(this.grad3[$],lt,V,W)),32*(o+s+r+a)}noise4d(t,e,i,o){const s=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let d,h,m,f,x;const g=(t+e+i+o)*l,p=Math.floor(t+g),c=Math.floor(e+g),_=Math.floor(i+g),v=Math.floor(o+g),M=(p+c+_+v)*u,P=p-M,T=c-M,A=_-M,Q=v-M,w=t-P,S=e-T,k=i-A,K=o-Q,rt=w>S?32:0,z=w>k?16:0,at=S>k?8:0,J=w>K?4:0,lt=S>K?2:0,V=k>K?1:0,W=rt+z+at+J+lt+V,C=r[W][0]>=3?1:0,O=r[W][1]>=3?1:0,gt=r[W][2]>=3?1:0,B=r[W][3]>=3?1:0,N=r[W][0]>=2?1:0,Z=r[W][1]>=2?1:0,$=r[W][2]>=2?1:0,nt=r[W][3]>=2?1:0,yt=r[W][0]>=1?1:0,Bt=r[W][1]>=1?1:0,et=r[W][2]>=1?1:0,ot=r[W][3]>=1?1:0,U=w-C+u,Nt=S-O+u,pt=k-gt+u,Tt=K-B+u,Wt=w-N+2*u,pe=S-Z+2*u,Xt=k-$+2*u,D=K-nt+2*u,b=w-yt+3*u,X=S-Bt+3*u,kt=k-et+3*u,Ut=K-ot+3*u,Ot=w-1+4*u,ee=S-1+4*u,Yt=k-1+4*u,qt=K-1+4*u,le=p&255,me=c&255,Ft=_&255,Ae=v&255,Ce=a[le+a[me+a[Ft+a[Ae]]]]%32,_e=a[le+C+a[me+O+a[Ft+gt+a[Ae+B]]]]%32,Zt=a[le+N+a[me+Z+a[Ft+$+a[Ae+nt]]]]%32,ce=a[le+yt+a[me+Bt+a[Ft+et+a[Ae+ot]]]]%32,q=a[le+1+a[me+1+a[Ft+1+a[Ae+1]]]]%32;let Rt=.6-w*w-S*S-k*k-K*K;Rt<0?d=0:(Rt*=Rt,d=Rt*Rt*this.dot4(s[Ce],w,S,k,K));let Lt=.6-U*U-Nt*Nt-pt*pt-Tt*Tt;Lt<0?h=0:(Lt*=Lt,h=Lt*Lt*this.dot4(s[_e],U,Nt,pt,Tt));let vt=.6-Wt*Wt-pe*pe-Xt*Xt-D*D;vt<0?m=0:(vt*=vt,m=vt*vt*this.dot4(s[Zt],Wt,pe,Xt,D));let F=.6-b*b-X*X-kt*kt-Ut*Ut;F<0?f=0:(F*=F,f=F*F*this.dot4(s[ce],b,X,kt,Ut));let L=.6-Ot*Ot-ee*ee-Yt*Yt-qt*qt;return L<0?x=0:(L*=L,x=L*L*this.dot4(s[q],Ot,ee,Yt,qt)),27*(d+h+m+f+x)}}const da={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new te},cameraProjectionMatrix:{value:new on},cameraInverseProjectionMatrix:{value:new on},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},fa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},pa={uniforms:{tDiffuse:{value:null},resolution:{value:new te}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Ni extends To{constructor(t,e,i,o,s=32){super(),this.width=i!==void 0?i:512,this.height=o!==void 0?o:512,this.clear=!0,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const r=new Gr;r.format=So,r.type=so,this.normalRenderTarget=new li(this.width,this.height,{minFilter:Pn,magFilter:Pn,type:_i,depthTexture:r}),this.ssaoRenderTarget=new li(this.width,this.height,{type:_i}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Cn({defines:Object.assign({},da.defines),uniforms:ki.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,blending:Xn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new mg,this.normalMaterial.blending=Xn,this.blurMaterial=new Cn({defines:Object.assign({},pa.defines),uniforms:ki.clone(pa.uniforms),vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Cn({defines:Object.assign({},fa.defines),uniforms:ki.clone(fa.uniforms),vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:Xn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Cn({uniforms:ki.clone(Ds.uniforms),vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Zc,blendDst:mr,blendEquation:Ii,blendSrcAlpha:qc,blendDstAlpha:mr,blendEquationAlpha:Ii}),this.fsQuad=new Pa(null),this.originalClearColor=new xe}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(t.capabilities.isWebGL2===!1&&(this.noiseTexture.format=ou),this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Ni.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Xn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Ni.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Xn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Ni.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Ni.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Xn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Ni.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Xn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Yc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,o,s){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,i,o,s){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o=e.clearColor||o,s=e.clearAlpha||s,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const o=new E;o.x=Math.random()*2-1,o.y=Math.random()*2-1,o.z=Math.random(),o.normalize();let s=i/t;s=Pe.lerp(.1,1,s*s),o.multiplyScalar(s),e.push(o)}}generateRandomKernelRotations(){const i=new Cg,o=4*4,s=new Float32Array(o);for(let r=0;r<o;r++){const a=Math.random()*2-1,l=Math.random()*2-1,u=0;s[r]=i.noise3d(a,l,u)}this.noiseTexture=new Jm(s,4,4,su,zi),this.noiseTexture.wrapS=ri,this.noiseTexture.wrapT=ri,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const o=e.get(i);i.visible=o}),e.clear()}}Ni.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Rg={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`};function Pg(){const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,e=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,i=typeof navigator<"u"?navigator.userAgent:"",o=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints||0)>0),s=/Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(i),r=n<900||t<700,a=navigator.deviceMemory||8,l=navigator.hardwareConcurrency||8,u=a<=4,d=l<=4;let h=null,m=!1;try{const x=new URLSearchParams(window.location.search);h=x.get("quality"),m=x.has("capture")}catch{}let f=null;if(h==="low"?f=ho("low",!0,1,1024,256):h==="high"?f=ho("high",!1,2,4096,512):h==="medium"?f=ho("medium",!1,1.5,2048,512):s||o&&r||u||d&&o?f=ho("low",!0,1,1024,256):n<1280||e>2.2?f=ho("medium",!1,1.5,2048,512):f=ho("high",!1,2,4096,512),m){const x=f.tier,g=f.isMobile;f=ho("low",g,1,1024,256),f.displayTier=x,f.isCapture=!0}return f}function ho(n,t,e,i,o){const s=n==="low"?1:n==="medium"?4:8;return{tier:n,isMobile:t,dprCap:e,shadowSize:i,pmremSize:o,anisotropy:s,texScale:n==="low"?.25:n==="medium"?.75:1,useComposer:n!=="low",useSSAO:n==="high",useBloom:n!=="low",useHeightFog:n==="high",useVignette:n!=="low",useChromatic:n==="high",godRayCount:n==="low"?0:n==="medium"?2:4,godRaySize:n==="low"?0:n==="medium"?512:1024,puddleShimmer:n!=="low",shadowType:n==="low"?"basic":"pcfsoft",maxAnisotropy:s}}const Ht=Pg();typeof window<"u"&&(window.__QUALITY=Ht);const Di=Ht.tier==="low",Dg={uniforms:{tDiffuse:{value:null},amount:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv; void main(){ float a=amount*0.0012; vec4 r=texture2D(tDiffuse, vUv+vec2(a,0.)); vec4 g=texture2D(tDiffuse, vUv); vec4 b=texture2D(tDiffuse, vUv-vec2(a,0.)); gl_FragColor=vec4(r.r,g.g,b.b,g.a);}"};function Lg(){const n=new vc;n.fog=new Vr(14082800,.0118),n.background=null;const t=new oi(74,window.innerWidth/window.innerHeight,.08,800);t.position.set(0,1.75,8),t.rotation.order="YXZ";const e=new Pu({antialias:Ht.tier!=="low",powerPreference:Ht.tier==="low"?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,preserveDrawingBuffer:!0}),i=Math.min(window.devicePixelRatio||1,Ht.dprCap);e.setPixelRatio(i),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=_n,e.toneMapping=Ir,e.toneMappingExposure=1.08,e.shadowMap.enabled=Ht.tier!=="low",e.shadowMap.type=Ht.shadowType==="basic"?Yu:Xc,e.shadowMap.autoUpdate=Ht.tier!=="low","useLegacyLights"in e&&(e.useLegacyLights=!1),e.domElement.style.display="block",e.domElement.style.width="100%",e.domElement.style.height="100%",e.domElement.style.outline="none",document.body.insertBefore(e.domElement,document.body.firstChild),document.body.contains(e.domElement)||document.body.appendChild(e.domElement);const o=new br(e);o.compileEquirectangularShader();let s=null;function r(){try{const B=new Su(Ht.pmremSize,{format:di,generateMipmaps:!0,minFilter:wo,magFilter:Yn,colorSpace:_n}),N=new yu(.1,800,B),Z=new vc,$=new xn(400,32,16),nt=new Cn({side:Hn,uniforms:{topColor:{value:new xe(7315672)},midColor:{value:new xe(10733292)},botColor:{value:new xe(15130064)},sunDir:{value:new E(.35,.62,.28).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vDir=normalize(w.xyz); gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"varying vec3 vDir; uniform vec3 topColor; uniform vec3 midColor; uniform vec3 botColor; uniform vec3 sunDir; void main(){ float y=normalize(vDir).y; float t=clamp((y+0.22)/1.1,0.,1.); vec3 col=mix(botColor,midColor,smoothstep(0.,0.55,t)); col=mix(col,topColor,smoothstep(0.5,1.,t)); float s=pow(max(0.,dot(normalize(vDir),sunDir)),480.)*1.2; col+=vec3(1.,0.96,0.84)*s; gl_FragColor=vec4(col,1.);}"});Z.add(new I($,nt));const yt=new xn(400,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Bt=new mn({color:9147780,side:Hn});Z.add(new I(yt,Bt)),N.update(e,Z),s=o.fromCubemap(B.texture).texture,n.environment=s,n.environmentIntensity=1.05,B.dispose(),$.dispose(),nt.dispose(),yt.dispose(),Bt.dispose()}catch{}}r();let a=null,l=null;(()=>{const B=new xn(420,Ht.tier==="low"?32:64,Ht.tier==="low"?16:32);a=new Cn({side:Hn,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1,uniforms:{topCol:{value:new xe(5212873)},midCol:{value:new xe(9156070)},horCol:{value:new xe(14214901)},horCol2:{value:new xe(15660025)},grdCol:{value:new xe(10135706)},sunDir:{value:new E(.32,.585,.42).normalize()},sunCol:{value:new xe(16773822)},sunCol2:{value:new xe(16771232)},sunInt:{value:1.95},time:{value:0}},vertexShader:"varying vec3 vDir; varying float vY; void main(){ vec4 w=modelMatrix*vec4(position,1.); vDir=normalize(w.xyz); vY=normalize(position).y; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:Di?`
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
      `:`
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
      `}),l=new I(B,a),l.frustumCulled=!1,l.renderOrder=-1e4,l.castShadow=!1,l.receiveShadow=!1,n.add(l)})();const u=new Rr(13625087,3028271,.68);u.position.set(0,50,0),n.add(u);let d=null,h=null;Ht.tier!=="low"&&(d=new pr(11126527,.34),d.position.set(-16,12,-10),n.add(d),h=new Rr(16767152,2761240,.22),h.position.set(0,-1,0),n.add(h));const m=new xe(16767152),f=new pr(16774365,2.05);f.position.set(30,44,18),f.castShadow=Ht.tier!=="low";const x=Ht.shadowSize;f.shadow.mapSize.set(x,x);const g=28;f.shadow.camera.near=.6,f.shadow.camera.far=108,f.shadow.camera.left=-g,f.shadow.camera.right=g,f.shadow.camera.top=g,f.shadow.camera.bottom=-g,f.shadow.bias=-18e-5,f.shadow.normalBias=.02,f.shadow.radius=Ht.tier==="low"?1:Ht.tier==="medium"?2.5:4.5,f.shadow.blurSamples=Ht.tier==="low"?1:Ht.tier==="medium"?6:14,f.shadow.camera.updateProjectionMatrix(),n.add(f),n.add(f.target),f.target.position.set(0,0,-8);let p=null;Ht.tier!=="low"&&(p=new pr(16771528,.38),p.position.set(-24,16,20),n.add(p));let c=null;(()=>{if(Ht.godRayCount<=0)return;const B=new qe(38,62),N=Ht.godRaySize||1024,Z=document.createElement("canvas");Z.width=N,Z.height=N;const $=Z.getContext("2d"),nt=$.createRadialGradient(N*.5,N*.1,0,N*.5,N*.1,N*.72);nt.addColorStop(0,"rgba(255,244,210,0.98)"),nt.addColorStop(.06,"rgba(255,238,190,0.58)"),nt.addColorStop(.16,"rgba(255,230,160,0.24)"),nt.addColorStop(.32,"rgba(255,220,140,0.10)"),nt.addColorStop(.52,"rgba(255,220,140,0.035)"),nt.addColorStop(.74,"rgba(255,220,140,0.012)"),nt.addColorStop(1,"rgba(255,220,140,0)"),$.fillStyle=nt,$.fillRect(0,0,N,N),$.globalCompositeOperation="screen",$.strokeStyle="rgba(255,245,210,0.11)",$.lineWidth=1.4;for(let pt=0;pt<32;pt++){const Tt=N*.5+(Math.random()-.5)*42;$.beginPath(),$.moveTo(Tt,N*.02),$.lineTo(Tt+(Math.random()-.5)*18,N*.97),$.stroke()}$.strokeStyle="rgba(255,240,200,0.065)",$.lineWidth=.7;for(let pt=0;pt<18;pt++){const Tt=N*.5+(Math.random()-.5)*30;$.beginPath(),$.moveTo(Tt,N*.05),$.lineTo(Tt+(Math.random()-.5)*10,N*.92),$.stroke()}for(let pt=0;pt<140;pt++){const Tt=Math.random()*N,Wt=Math.random()*N,pe=Math.random()*1.6+.2,Xt=.07+Math.random()*.1;$.fillStyle="rgba(255,236,180,"+Xt+")",$.beginPath(),$.arc(Tt,Wt,pe,0,Math.PI*2),$.fill()}const yt=$.getImageData(0,0,N,N),Bt=yt.data;for(let pt=0;pt<Bt.length;pt+=4)if(Math.random()<.018){const Tt=(Math.random()-.5)*14;Bt[pt]+=Tt,Bt[pt+1]+=Tt,Bt[pt+2]+=Tt*.85}$.putImageData(yt,0,0);const et=new Kn(Z);et.colorSpace=_n,et.needsUpdate=!0,et.wrapS=et.wrapT=si,et.minFilter=Yn,et.magFilter=Yn,et.generateMipmaps=!1,et.anisotropy=4;const ot=[];for(let pt=0;pt<4;pt++){const Tt=new mn({map:et,transparent:!0,depthWrite:!1,depthTest:!1,blending:yi,side:$e,fog:!1,opacity:pt===0?.34:pt===1?.22:pt===2?.16:.11});ot.push(Tt)}const U=[0,Math.PI*.33,Math.PI*.66,Math.PI*1],Nt=[1,.92,1.08,.88];c=new Ne;for(let pt=0;pt<4;pt++){const Tt=new I(B,ot[pt]);Tt.scale.set(Nt[pt],Nt[pt],1),Tt.position.set(14.5,15.2,-10),Tt.lookAt(f.position),Tt.rotateX(.16+pt*.02),U[pt]!==0&&Tt.rotateY(U[pt]),Tt.frustumCulled=!1,Tt.renderOrder=-5e3-pt,Tt.castShadow=!1,Tt.receiveShadow=!1,c.add(Tt)}c.traverse(pt=>{pt.castShadow=!1,pt.receiveShadow=!1}),n.add(c)})();let _=null,v=null,M=null,P=null,T=null,A=null,Q=null,w=null,S=!1,k=!1;const K={uniforms:{tDiffuse:{value:null},tintColor:{value:new xe(16767152)},tintStrength:{value:.085},heightFogColor:{value:new xe(14082800)},heightFogDensity:{value:.0118},heightFalloff:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
    `},rt={uniforms:{tDiffuse:{value:null},fogColor:{value:new xe(14082800)},fogDensity:{value:.0118},fogHeightFalloff:{value:.045},fogHeightOffset:{value:1.2},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
    `};function z(){if(!Ht.useComposer){_=null,k=!1,S=!1;return}try{_=new wg(e);const B=new Sg(n,t);if(_.addPass(B),Ht.useSSAO)try{const Z=Math.max(1,window.innerWidth),$=Math.max(1,window.innerHeight);M=new Ni(n,t,Z,$),M.kernelRadius=.52,M.minDistance=.001,M.maxDistance=.032,M.output=Ni.OUTPUT.Default,M.outputTint=m.clone(),M.tintStrength=.12,_.addPass(M),Q=new es(K),Q.uniforms.tintColor.value.copy(m),Q.uniforms.tintStrength.value=.095,_.addPass(Q)}catch{M=null,Q=null}else M=null,Q=null;Ht.useHeightFog?(A=new es(rt),A.uniforms.fogColor.value.set(14082800),A.uniforms.fogDensity.value=.0118,A.uniforms.fogHeightFalloff.value=.045,_.addPass(A)):A=null,Ht.useBloom?(v=new cs(new te(window.innerWidth,window.innerHeight),Ht.tier==="medium"?.12:.18,Ht.tier==="medium"?.22:.32,.92),_.addPass(v)):v=null,P=new es(Ag),P.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),_.addPass(P),Ht.useVignette?(T=new es(Rg),T.uniforms.darkness.value=.32,T.uniforms.offset.value=.985,_.addPass(T)):T=null;let N=null;Ht.useChromatic?(N=new es(Dg),N.uniforms.amount.value=0,window.__chromaticPass=N,_.addPass(N)):window.__chromaticPass=null,w=new Tg,_.addPass(w),S=!0,k=!0}catch(B){console.warn("[renderer] composer failed, fallback to forward",B),_=null,k=!1,S=!1}}z();function at(){const B=window.innerWidth,N=window.innerHeight,Z=Math.min(window.devicePixelRatio||1,Ht.dprCap);t.aspect=B/N,t.updateProjectionMatrix(),e.setSize(B,N,!1),e.setPixelRatio(Z),_&&S&&(_.setSize(B,N),_.setPixelRatio(Z),v&&v.setSize(B,N),M&&M.setSize(B,N),P&&P.material.uniforms.resolution.value.set(1/B,1/N),A&&(A.material.uniforms.fogHeightOffset.value=1.2))}window.addEventListener("resize",at,{passive:!0});let J=!1;const lt=new E,V=new E,W=new E;let C=0;function O(B){const N=performance.now()*.001,Z=!Di||N-C>.16;if(a&&Z){Di&&(C=N),a.uniforms.time.value=N;const $=Di?1.95:1.95+Math.sin(N*.13)*.038+Math.sin(N*.37)*.014;a.uniforms.sunInt.value=$;const nt=N*.0055;lt.set(Math.cos(nt)*.32+.32,.585+Math.sin(nt*.6)*.012,Math.sin(nt)*.42+.42).normalize(),a.uniforms.sunDir.value.copy(lt)}else a||lt.set(.32,.585,.42).normalize();if(!Di&&c){const $=.28+(Math.sin(N*.17)*.5+.5)*.08,nt=$+Math.sin(N*.47)*.014,yt=$*.92+Math.sin(N*.31+1.1)*.012,Bt=$*.88+Math.sin(N*.22+2.3)*.01,et=[$,nt*.82,yt*.68,Bt*.55];for(let U=0;U<c.children.length;U++){const pt=c.children[U].material;pt&&pt.opacity!==void 0&&(pt.opacity=Math.max(.06,Math.min(.38,et[U]*(U===0?1:U===1?.72:U===2?.58:.42)*1.1)))}c.rotation.y=Math.sin(N*.028)*.018,c.rotation.x=Math.sin(N*.019)*.008;const ot=Math.sin(N*.07)*.04;c.position.x=14.5+ot}if(!Di&&A){A.uniforms.time.value=N;const $=.0118+Math.sin(N*.04)*6e-4;A.uniforms.fogDensity.value=$}if(!Di&&Q){t.getWorldDirection(V);const nt=.095-Math.max(0,V.dot(lt))*.028;Q.uniforms.tintStrength.value=Pe.lerp(Q.uniforms.tintStrength.value,nt,Math.min(1,B*1.2))}if(!Di&&e.shadowMap.enabled&&(t.getWorldDirection(V),V.y=0,V.normalize(),W.set(t.position.x+V.x*10,0,t.position.z+V.z*10),f.target.position.lerp(W,Math.min(1,B*2.2)),f.position.set(f.target.position.x+30,44,f.target.position.z+18),f.shadow.needsUpdate=!0),k&&v){t.getWorldDirection(V);const nt=.19+Math.max(0,V.dot(lt))*.065;v.strength=Pe.lerp(v.strength,nt,Math.min(1,B*1.6))}if(Ht.puddleShimmer){window.__shimmerLast||(window.__shimmerLast=0);const $=performance.now();if($-window.__shimmerLast>160){window.__shimmerLast=$,window.__shimmerTmp||(window.__shimmerTmp={toPuddle:new E,tmpCamDir:new E});{t.getWorldDirection(V);const yt=Math.abs(V.y),Bt=.82+Math.sin(N*.9)*.08+Math.sin(N*1.7)*.04+yt*.18;window.__puddleMeshes||(window.__puddleMeshes=[]),window.__puddleMeshes.length===0&&n.traverse(et=>{et.isMesh&&et.geometry&&et.geometry.type==="CircleGeometry"&&et.material&&et.material.envMapIntensity!==void 0&&window.__puddleMeshes.push(et)});for(let et=0;et<window.__puddleMeshes.length;et++){const ot=window.__puddleMeshes[et];if(!ot.material)continue;ot.userData.baseEnv===void 0&&(ot.userData.baseEnv=ot.material.envMapIntensity),ot.userData.baseOp===void 0&&(ot.userData.baseOp=ot.material.opacity),ot.userData.baseNsX===void 0&&ot.material.normalScale&&(ot.userData.baseNsX=ot.material.normalScale.x,ot.userData.baseNsY=ot.material.normalScale.y);const U=window.__shimmerTmp.toPuddle.subVectors(ot.position,t.position),Nt=Math.sqrt(U.x*U.x+U.z*U.z),pt=Math.max(0,1-Nt/42),Tt=Math.sqrt(U.x*U.x+U.z*U.z+.001),pe=.22*Math.max(0,1-Math.abs(U.y)/Math.max(1,Tt*1.2))*pt+.08*pt,Xt=Bt+pe;ot.material.envMapIntensity=ot.userData.baseEnv*Xt;const D=ot.userData.baseOp;if(ot.material.opacity=Math.min(.62,Math.max(.42,D+Math.sin(N*.6+ot.position.x*.4)*.025+Math.sin(N*1.1+ot.position.z*.35)*.015)),ot.material.normalScale&&ot.userData.baseNsX!==void 0){const b=1+Math.sin(N*.55+ot.position.x*.7)*.14+Math.sin(N*.82+ot.position.z*.5)*.08;ot.material.normalScale.set(ot.userData.baseNsX*b,ot.userData.baseNsY*b),ot.material.normalMap&&(ot.material.normalMap.offset.x=Math.sin(N*.07+ot.position.x*.12)*.02,ot.material.normalMap.offset.y=Math.cos(N*.06+ot.position.z*.11)*.02)}}}}}if(!Di&&window.__chromaticPass){const $=window.__chromaticPass;window.__chromaticHit&&window.__chromaticHit>0?($.uniforms.amount.value=Math.min(2.8,window.__chromaticHit*1.6),window.__chromaticHit=Math.max(0,window.__chromaticHit-B*3.2),window.__chromaticHit<=.01&&($.uniforms.amount.value=Pe.lerp($.uniforms.amount.value,0,Math.min(1,B*4)))):$.uniforms.amount.value=Pe.lerp($.uniforms.amount.value,0,Math.min(1,B*2.5))}k&&S&&_?(_.render(B),J=!0):J=!1}const gt=e.render.bind(e);return e.render=function(B,N){if(J){J=!1;return}gt(B,N)},window.__quality=Ht,window.__rendererQuality=Ht,{scene:n,camera:t,renderer:e,composer:_,bloomPass:v,ssaoPass:M,sun:f,hemi:u,skyMat:a,update:O,onResize:at}}function Ig(n,t,e){const _=n.fov,v=6,M=8.2,P=11,T=6,A=.028,Q=.018;let w=0,S=0,k=!1,K=!1,rt=!1,z=!1,at=!1;const J=new E,lt=Object.create(null);let V=new E(0,1.7,8),W=1.7,C=1.7,O=0,gt=0,B=0,N=!1;function Z(j){N=!!j,N&&J.set(0,0,0);try{window.__isInVehicle=!!j}catch{}}function $(){return w}function nt(j){w=j,n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S}function yt(){return S}function Bt(j){S=Math.max(-1.45,Math.min(1.45,j)),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S}function et(j){j&&typeof j.x=="number"&&(V.set(j.x,j.y,j.z),n.position.copy(V))}let ot=[],U=e?e.length:0;function Nt(){if(ot.length=0,!!e)for(const j of e){j.updateMatrixWorld(!0);const It=new pn().setFromObject(j,!0);ot.push({mesh:j,box:It})}}Nt();const pt=new ao().setFromQuaternion(n.quaternion,"YXZ");w=pt.y,S=pt.x,S=Math.max(-1.45,Math.min(1.45,S)),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S,n.rotation.z=0;const Tt={lock:[],unlock:[]};function Wt(j){const It=Tt[j];for(let Y=0;Y<It.length;Y++)It[Y].call(Pt)}function pe(){return document.querySelector("canvas")||document.body}function Xt(j,It){lt[j]=It,(j==="ShiftLeft"||j==="ShiftRight")&&(lt.Shift=!!(lt.ShiftLeft||lt.ShiftRight)),(j==="ControlLeft"||j==="ControlRight")&&(lt.Control=!!(lt.ControlLeft||lt.ControlRight))}function D(j){k&&(j.code==="Space"||j.code==="ArrowUp"||j.code==="ArrowDown"||j.code==="ArrowLeft"||j.code==="ArrowRight")&&j.preventDefault(),Xt(j.code,!0),j.key==="Shift"&&(lt.Shift=!0),(j.key==="Control"||j.key==="Ctrl")&&(lt.Control=!0)}function b(j){Xt(j.code,!1),j.key==="Shift"&&(lt.ShiftLeft=!1,lt.ShiftRight=!1,lt.Shift=!1),(j.key==="Control"||j.key==="Ctrl")&&(lt.ControlLeft=!1,lt.ControlRight=!1,lt.Control=!1)}function X(){for(const j in lt)lt[j]=!1}document.addEventListener("keydown",D,!1),document.addEventListener("keyup",b,!1),window.addEventListener("blur",X,!1),window.addEventListener("keydown",j=>{k&&(j.code==="Space"||j.code==="ArrowUp"||j.code==="ArrowDown")&&j.preventDefault()},{passive:!1}),document.addEventListener("contextmenu",j=>{k&&j.preventDefault()}),document.addEventListener("wheel",j=>{k&&j.preventDefault()},{passive:!1});function kt(j){if(!k)return;const It=j.movementX||0,Y=j.movementY||0;w-=It*.0022,S-=Y*.0022,S<-1.45?S=-1.45:S>1.45&&(S=1.45),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S,n.rotation.z=0}document.addEventListener("mousemove",kt,!1);let Ut=null,Ot=0,ee=0,Yt=null,qt={x:0,y:0},le=null,me=null;function Ft(){if(!Ht.isMobile||document.getElementById("touch-joy"))return;const j=document.createElement("style"),It=Ht.tier==="low";j.textContent=It?"#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.32);border:1px solid rgba(255,255,255,0.30);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(180,40,50,0.78);border:1.5px solid rgba(255,255,255,0.55);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(200,50,60,0.92)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}":"#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(6px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.25);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(230,57,70,0.18);border:1.5px solid rgba(230,57,70,0.55);backdrop-filter:blur(4px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(230,57,70,0.32)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}",document.head.appendChild(j),me=document.createElement("div"),me.id="touch-joy",le=document.createElement("div"),le.id="touch-joy-stick",me.appendChild(le);const Y=document.createElement("div");Y.id="touch-look";const tt=document.createElement("div");tt.id="touch-fire",tt.textContent="FIRE";const H=document.createElement("div");H.id="touch-reload",H.textContent="R";const Mt=document.createElement("div");Mt.id="touch-jump",Mt.textContent="▲",document.body.appendChild(me),document.body.appendChild(Y),document.body.appendChild(tt),document.body.appendChild(H),document.body.appendChild(Mt);function St(ae){const fe=me.getBoundingClientRect(),Ee=fe.left+fe.width/2,Te=fe.top+fe.height/2,ke=ae.clientX-Ee,He=ae.clientY-Te,R=Math.hypot(ke,He),st=44,ft=Math.min(R,st),mt=Math.atan2(He,ke),xt=Math.cos(mt)*ft/st,it=Math.sin(mt)*ft/st;le.style.left=36+xt*34+"px",le.style.top=36+it*34+"px",qt.x=xt,qt.y=-it,Math.abs(xt)<.12&&Math.abs(it)<.12&&(qt.x=0,qt.y=0)}function y(){le.style.left="36px",le.style.top="36px",qt.x=0,qt.y=0,lt.KeyW=!1,lt.KeyA=!1,lt.KeyS=!1,lt.KeyD=!1}me.addEventListener("touchstart",ae=>{ae.preventDefault();const fe=ae.changedTouches[0];Yt=fe.identifier,St(fe)},{passive:!1}),me.addEventListener("touchmove",ae=>{ae.preventDefault();for(let fe=0;fe<ae.changedTouches.length;fe++){const Ee=ae.changedTouches[fe];if(Ee.identifier===Yt){St(Ee);break}}},{passive:!1}),me.addEventListener("touchend",ae=>{ae.preventDefault();for(let fe=0;fe<ae.changedTouches.length;fe++)if(ae.changedTouches[fe].identifier===Yt){Yt=null,y();break}ae.touches.length===0&&y()},{passive:!1}),me.addEventListener("touchcancel",ae=>{Yt=null,y()},{passive:!1}),Y.addEventListener("touchstart",ae=>{if(ae.preventDefault(),Ut!==null)return;const fe=ae.changedTouches[0];Ut=fe.identifier,fe.clientX,fe.clientY,Ot=fe.clientX,ee=fe.clientY},{passive:!1}),Y.addEventListener("touchmove",ae=>{ae.preventDefault();for(let fe=0;fe<ae.changedTouches.length;fe++){const Ee=ae.changedTouches[fe];if(Ee.identifier===Ut){const Te=Ee.clientX-Ot,ke=Ee.clientY-ee;Ot=Ee.clientX,ee=Ee.clientY;const He=.0028;w-=Te*He,S-=ke*He,S<-1.45?S=-1.45:S>1.45&&(S=1.45),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S,n.rotation.z=0;break}}},{passive:!1}),Y.addEventListener("touchend",ae=>{ae.preventDefault();for(let fe=0;fe<ae.changedTouches.length;fe++)if(ae.changedTouches[fe].identifier===Ut){Ut=null;break}},{passive:!1}),Y.addEventListener("touchcancel",ae=>{Ut=null},{passive:!1});function ct(){return Ht.isMobile||isLocked()}function At(ae){if(ct()){try{window.__weapons&&window.__weapons.shoot&&window.__weapons.shoot()}catch{}try{document.dispatchEvent(new MouseEvent(ae?"mousedown":"mouseup",{button:0}))}catch{}}}let oe=!1,se=null;tt.addEventListener("touchstart",ae=>{ae.preventDefault(),oe=!0,At(!0),se&&clearInterval(se),se=setInterval(()=>{oe&&At(!0)},85)},{passive:!1}),tt.addEventListener("touchend",ae=>{ae.preventDefault(),oe=!1,At(!1),se&&clearInterval(se)},{passive:!1}),tt.addEventListener("touchcancel",ae=>{oe=!1,se&&clearInterval(se)},{passive:!1}),H.addEventListener("touchstart",ae=>{ae.preventDefault();try{document.dispatchEvent(new KeyboardEvent("keydown",{code:"KeyR"})),setTimeout(()=>document.dispatchEvent(new KeyboardEvent("keyup",{code:"KeyR"})),80)}catch{}},{passive:!1}),Mt.addEventListener("touchstart",ae=>{ae.preventDefault(),lt.Space=!0,setTimeout(()=>lt.Space=!1,160)},{passive:!1}),window.__mobileMoveVec=qt;const ue=document.getElementById("center");ue&&(ue.style.display,setTimeout(()=>{Ht.isMobile&&(ue.style.display="none",k=!0)},600),ue.addEventListener("touchstart",ae=>{ae.preventDefault(),ue.style.display="none",k=!0;try{Wt("lock")}catch{}},{passive:!1}))}try{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ft):Ft()}catch{}function Ae(){const j=pe();if(!(!j||!j.requestPointerLock)){j.tabIndex<0&&(j.tabIndex=0);try{j.requestPointerLock()}catch{}}}function Ce(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}function _e(){k=!!document.pointerLockElement,k!==K&&(K=k,Wt(k?"lock":"unlock"))}document.addEventListener("pointerlockchange",_e,!1),document.addEventListener("pointerlockerror",()=>{},!1);const Zt=new jr,ce=new E(0,-1,0),q=new pn;function Rt(j,It){const Y=new E(j.x-.32,j.y-It,j.z-.32),tt=new E(j.x+.32,j.y+.12,j.z+.32);return q.set(Y,tt)}function Lt(j){for(let It=0;It<ot.length;It++)if(j.intersectsBox(ot[It].box))return ot[It];return null}function vt(j,It){const Y=Rt(j,It);return Lt(Y)}function F(j,It){for(let Y=0;Y<4;Y++){const tt=vt(j,It);if(!tt)break;const H=tt.box,Mt=Rt(j,It),St=Math.min(Mt.max.x-H.min.x,H.max.x-Mt.min.x),y=Math.min(Mt.max.z-H.min.z,H.max.z-Mt.min.z),ct=Math.min(Mt.max.y-H.min.y,H.max.y-Mt.min.y);if(ct<St&&ct<y){const At=(Mt.min.y+Mt.max.y)*.5,oe=(H.min.y+H.max.y)*.5;if(At<oe?j.y-=ct+.011:j.y+=ct+.011,ct<.05)break}else if(St<y){const At=(Mt.min.x+Mt.max.x)*.5,oe=(H.min.x+H.max.x)*.5;At<oe?j.x-=St+.011:j.x+=St+.011}else{const At=(Mt.min.z+Mt.max.z)*.5,oe=(H.min.z+H.max.z)*.5;At<oe?j.z-=y+.011:j.z+=y+.011}}}function L(j,It){const Y=j.y-It,tt=new E(j.x,Y+.35,j.z);Zt.set(tt,ce),Zt.far=.5;const H=e||[];if(H.length){const y=Zt.intersectObjects(H,!1);if(y.length&&y[0].distance<.42)return!0}if(Y<=.09)return!0;const Mt=new E(j.x,j.y-.05,j.z),St=Rt(Mt,It);if(St.min.y-=.08,Lt(St))for(let y=0;y<ot.length;y++){const ct=ot[y].box;if(St.intersectsBox(ct)&&Math.abs(Y-ct.max.y)<.12&&Y>=ct.max.y-.15)return!0}return!1}function dt(j){if(j<=0)return;if(j>.05&&(j=.05),e&&e.length!==U&&(Nt(),U=e.length),N){n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S,n.rotation.z=0;try{window.__controlsPos={x:n.position.x,y:n.position.y,z:n.position.z},window.__controlsYaw=w,window.__controlsPitch=S}catch{}return}const It=!!(lt.ControlLeft||lt.ControlRight||lt.Control||lt.KeyC);if(!It&&C<1.7-.05){const $t=new E(V.x,V.y+(1.7-C),V.z);vt($t,1.7)?W=1.1:W=1.7}else W=It?1.1:1.7;const Y=1-Math.exp(-18*j),tt=C;if(C+=(W-C)*Y,Math.abs(C-W)<.01&&(C=W),rt?V.y+=C-tt:V.y+=(C-tt)*.5,z=rt,rt=L(V,C),rt&&J.y<=.1){J.y=Math.max(J.y,0);const $t=V.y-C;if($t<.06&&$t>-.3){const Ke=new E(V.x,V.y-C+.4,V.z);Zt.set(Ke,ce),Zt.far=1;let be=0;const G=e&&e.length?Zt.intersectObjects(e,!1):[];G.length&&(be=G[0].point.y);let ht=-1/0;const ut=new pn(new E(V.x-.2,$t-.2,V.z-.2),new E(V.x+.2,$t+.2,V.z+.2));for(let Ct=0;Ct<ot.length;Ct++){const Gt=ot[Ct].box;ut.intersectsBox(Gt)&&Gt.max.y>ht&&Gt.max.y<=$t+.15&&(ht=Gt.max.y)}ht>be&&(be=ht);const wt=be+C;Math.abs(V.y-wt)<.35&&(V.y=Pe.lerp(V.y,wt,Math.min(1,20*j))),V.y<wt&&(V.y=wt)}}const H=Math.sin(w),Mt=Math.cos(w),St=new E(-H,0,-Mt),y=new E(Mt,0,-H);let ct=0,At=0;const oe=!!(lt.KeyW||lt.ArrowUp),se=!!(lt.KeyS||lt.ArrowDown),ue=!!(lt.KeyA||lt.ArrowLeft),ae=!!(lt.KeyD||lt.ArrowRight);if(oe&&(ct+=St.x,At+=St.z),se&&(ct-=St.x,At-=St.z),ue&&(ct-=y.x,At-=y.z),ae&&(ct+=y.x,At+=y.z),Ht.isMobile&&window.__mobileMoveVec&&(Math.abs(window.__mobileMoveVec.x)>.08||Math.abs(window.__mobileMoveVec.y)>.08)){const $t=window.__mobileMoveVec,Ke=$t.x*y.x+$t.y*St.x,be=$t.x*y.z+$t.y*St.z;ct=Ke,At=be}let fe=Math.hypot(ct,At);fe>0&&(ct/=fe,At/=fe);const Ee=!!(lt.ShiftLeft||lt.ShiftRight||lt.Shift)&&oe&&!se&&!It&&rt&&fe>0,Te=It;let ke=4.6;Te?ke*=.55:Ee&&(ke*=2.2),fe===0&&(ke=0);const He=ct*ke,R=At*ke;let st=rt?22:22*.32;const ft=J.x,mt=J.z,xt=Math.hypot(ft,mt),it=fe>0?ft*ct+mt*At:-1;if(rt&&fe===0?st=28:rt&&it<-.1&&(st=Math.max(st,24)),!rt&&fe===0){const $t=Math.exp(-1.2*j);J.x*=$t,J.z*=$t}if(fe>0||xt>.01){const $t=1-Math.exp(-st*j);J.x+=(He-J.x)*$t,J.z+=(R-J.z)*$t}else J.x=0,J.z=0;Math.abs(J.x)<.02&&fe===0&&(J.x=0),Math.abs(J.z)<.02&&fe===0&&(J.z=0);const bt=!!lt.Space;bt&&rt&&!at&&(J.y=6.5,rt=!1,at=!0),bt||(at=!1),(!rt||J.y>0)&&(J.y-=18*j),J.y<-22&&(J.y=-22);let zt=J.x*j,Kt=J.z*j,ne=J.y*j;if(F(V,C),zt!==0){const $t=new E(V.x+zt,V.y,V.z);if(!vt($t,C))V.x+=zt;else{let Ke=!1;if(rt&&fe>0){const be=new E(V.x+zt,V.y+.58,V.z),G=vt($t,C);if(G){const ht=G.box.max.y,ut=ht-(V.y-C);ut>.18&&ut<.95&&!vt(be,1.1)&&(V.x+=zt*.62,V.y=ht+C+.02,J.y=1.2,rt=!1,Ke=!0)}}if(!Ke){let be=0,G=zt,ht=0;for(let ut=0;ut<5;ut++){const wt=(be+G)*.5,Ct=new E(V.x+wt,V.y,V.z);vt(Ct,C)?G=wt:(ht=wt,be=wt)}V.x+=ht,Math.sign(J.x)===Math.sign(zt)&&(J.x*=.12)}}}if(Kt!==0){const $t=new E(V.x,V.y,V.z+Kt);if(!vt($t,C))V.z+=Kt;else{let Ke=!1;if(rt&&fe>0){const be=new E(V.x,V.y+.58,V.z+Kt),G=vt($t,C);if(G){const ht=G.box.max.y,ut=ht-(V.y-C);ut>.18&&ut<.95&&!vt(be,1.1)&&(V.z+=Kt*.62,V.y=ht+C+.02,J.y=1.2,rt=!1,Ke=!0)}}if(!Ke){let be=0,G=Kt,ht=0;for(let ut=0;ut<5;ut++){const wt=(be+G)*.5,Ct=new E(V.x,V.y,V.z+wt);vt(Ct,C)?G=wt:(ht=wt,be=wt)}V.z+=ht,Math.sign(J.z)===Math.sign(Kt)&&(J.z*=.12)}}}if(ne!==0){const $t=new E(V.x,V.y+ne,V.z),Ke=vt($t,C);if(!Ke)V.y+=ne;else{const be=Ke.box;if(ne<0){const ht=be.max.y+C,ut=J.y;V.y>ht&&(V.y=ht),J.y<0?(ut<-6&&(B=Math.min(1,(-ut-6)/10)),J.y=0):J.y<0&&(J.y=0),rt=!0}else{const ht=be.min.y-.12-.01;V.y>ht&&(V.y=ht),J.y>0&&(J.y=0)}}}{const $t=typeof window<"u"&&window.__terrain&&window.__terrain.worldSize?window.__terrain.worldSize/2-4:48;V.x=Math.max(-$t,Math.min($t,V.x)),V.z=Math.max(-$t,Math.min($t,V.z))}V.y<-20&&(V.set(0,1.7,8),J.set(0,0,0),C=1.7,W=1.7);const de=Math.hypot(J.x,J.z),ye=rt&&de>.5&&fe>0;gt+=((Ee&&ye?1:0)-gt)*(1-Math.exp(-8*j));const an=_+v*gt;Math.abs(n.fov-an)>.05&&(n.fov=an,n.updateProjectionMatrix());let Ge=0,je=0;if(ye){let $t=M;Ee?$t=P:Te&&($t=T),O+=j*$t*(Ee?1:Math.min(1,de/4.6));const Ke=Te?.65:Ee?.85:1,be=Math.min(1,de/(4.6*.9));je=Math.sin(O)*A*Ke*be,Ge=Math.sin(O*.5)*Q*Ke*be,!z&&rt&&B<.02&&(O*=.9)}else O=Pe.lerp(O,0,Math.min(1,j*6)),Math.abs(O)<.001&&(O=0);B>0&&(B=Math.max(0,B-j*5.2));const Be=B*Math.sin(Math.min(1,B*3)*Math.PI)*.06;n.position.set(V.x+Ge,V.y+je-Be,V.z),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S,n.rotation.z=Ge*.06,window.__controlsPos={x:V.x,y:V.y,z:V.z},window.__controlsYaw=w,window.__isSprinting=!!(lt.ShiftLeft||lt.ShiftRight||lt.Shift),window.__sprintHeld=window.__isSprinting&&rt&&Math.hypot(J.x,J.z)>1;try{window.__audio&&window.__audio.updateListener&&window.__audio.updateListener({x:V.x,y:V.y,z:V.z},w)}catch{}}n.position.copy(V),n.rotation.order="YXZ",n.rotation.y=w,n.rotation.x=S;const Pt={lock:Ae,unlock:Ce,update:dt,getPosition(){return V.clone()},isLocked(){return k},addEventListener(j,It){Tt[j]&&Tt[j].push(It)},removeEventListener(j,It){const Y=Tt[j];if(!Y)return;const tt=Y.indexOf(It);tt>=0&&Y.splice(tt,1)},get camera(){return n},get velocity(){return J.clone()},get isGrounded(){return rt},setInVehicle:Z,getYaw:$,setYaw:nt,getPitch:yt,setPitch:Bt,setPosition:et,get isInVehicle(){return N},set isInVehicle(j){Z(j)}};return Pt._isInVehicle=()=>N,Pt}const Fi=600,xo=Fi/2,Es=42,Dr=62,_o=7,xi=39,Oi=16,kc=24;function Ug(n){return n-Math.floor(n)}function vo(n,t){const e=Math.sin(n*127.113+t*311.789)*43758.5453123;return Ug(e)*2-1}function Hc(n){return n*n*(3-2*n)}function tn(n,t,e){return n+(t-n)*e}function Ng(n,t){const e=Math.floor(n),i=Math.floor(t),o=n-e,s=t-i,r=Hc(o),a=Hc(s),l=vo(e,i),u=vo(e+1,i),d=vo(e,i+1),h=vo(e+1,i+1),m=tn(l,u,r),f=tn(d,h,r);return tn(m,f,a)}function ii(n,t,e=5){let i=0,o=1,s=1,r=0;for(let a=0;a<e;a++)i+=Ng(n*s,t*s)*o,r+=o,o*=.5,s*=2;return i/r}function Da(n){return-65+Math.sin(n*.011)*22+Math.cos(n*.006)*14+Math.sin(n*.003+1.2)*8}function Fg(n,t){const e=ii(n*.001+100,t*.001+200,3)*8,i=ii(n*.001-200,t*.001-100,3)*8,o=n+e,s=t+i,r=ii(o*.004,s*.004,5)*18,a=ii(o*.012+5.3,s*.012-2.1,4)*6,l=ii(o*.007,s*.007,4),u=Math.pow(1-Math.abs(l),1.8)*14,d=ii(o*.04,s*.04,2)*1.6;let h=r+a+u*.62+d;h<-2&&(h*=1.08);const m=Math.abs(n),f=Math.abs(t),x=Math.max(m,f);if(x<Es)h=0;else if(x<Dr){const _=(x-Es)/(Dr-Es),v=_*_*(3-2*_);h*=v}const g=_o,p=.25;if(Math.abs(t)<g&&(m>xi||f>xi)){const _=Math.abs(t)/g,v=1-_*_;v>0&&(h=tn(h,p,v*.96))}if(Math.abs(n)<g&&(f>xi||m>xi)){const _=Math.abs(n)/g,v=1-_*_;Math.abs(t)<g&&m>xi?h=Math.min(h,p):v>0&&(h=tn(h,p,v*.96))}if(x>Es){const _=Da(n),v=Math.abs(t-_);if(v<kc)if(v<Oi){const P=-3.2+ii(n*.04,t*.04,2)*.6*.5;if(v<Oi-3)h=P;else{const T=(v-(Oi-3))/3,A=T*T*(3-2*T);h=tn(P,h,A)}}else{const M=(v-Oi)/(kc-Oi),T=2.2*(1-M*M*(3-2*M));h-=T*.65}}const c=Math.sqrt(n*n+t*t);if(c>210){const _=Math.min(1,(c-210)/80),v=ii(n*.003+50,t*.003-50,4),M=Math.pow(Math.max(0,v+.22),1.65)*46,P=_*(28+M*.62),T=Math.pow(1-Math.abs(ii(n*.009+200,t*.009+80,3)),2)*11*_;h+=P+T,h+=ii(n*.018,t*.018,2)*2.6*_}else if(c>175){const _=(c-175)/35;h+=_*ii(n*.008,t*.008,3)*3.5}return h<-6&&(h=-6+(h+6)*.32),x<70&&h>18&&(h=18+(h-18)*.28),c>210&&h>55&&(h=55+(h-55)*.3),h}function Og(n,t){const e=Math.max(-xo,Math.min(xo,n)),i=Math.max(-xo,Math.min(xo,t));return Fg(e,i)}function zg(n,t,e){const i=document.createElement("canvas");i.width=i.height=n;const o=i.getContext("2d"),s=o.createImageData(n,n),r=s.data,a=[194,181,155],l=[208,195,168],u=[88,122,58],d=[74,106,50],h=[98,132,66],m=[122,126,130],f=[94,97,102],x=[120,112,100],g=[58,60,64],p=[212,180,70],c=[122,114,100],_=t!=="low";for(let M=0;M<n;M++)for(let P=0;P<n;P++){const T=(P/n-.5)*Fi,A=(M/n-.5)*Fi,Q=e(T,A),w=Math.abs(T),S=Math.abs(A);let k=0,K=0,rt=0;const z=Math.abs(A)<_o&&(w>xi-1||S>xi-1),at=Math.abs(T)<_o&&(S>xi-1||w>xi-1);let J=z||at;const lt=Da(T),V=Math.abs(A-lt),W=V<Oi&&Math.max(w,S)>Es;if(J){const O=z&&Math.abs(A)<.9,gt=at&&Math.abs(T)<.9;if(O||gt)Math.floor((z?T:A)/4)%2===0?(k=p[0],K=p[1],rt=p[2]):(k=g[0],K=g[1],rt=g[2]);else{const B=vo(Math.floor(T*.3),Math.floor(A*.3))*6;k=Math.max(0,Math.min(255,g[0]+B)),K=Math.max(0,Math.min(255,g[1]+B)),rt=Math.max(0,Math.min(255,g[2]+B));const N=z?Math.abs(A)/_o:0,Z=at?Math.abs(T)/_o:0;Math.max(N,Z)>.78&&(k*=.92,K*=.92,rt*=.92)}}else if(W){const O=V/Oi,gt=vo(Math.floor(T*.7),Math.floor(A*.7))*7,B=O<.6?c:x;if(k=B[0]+gt,K=B[1]+gt,rt=B[2]+gt*.9,O>.82){const N=(O-.82)/.18;k=tn(k,m[0],N*.5),K=tn(K,m[1],N*.5),rt=tn(rt,m[2],N*.5)}}else{let O=0;if(_){const N=e(T+1.5,A)-e(T-1.5,A),Z=e(T,A+1.5)-e(T,A-1.5);O=Math.sqrt(N*N+Z*Z)/3,O=Math.min(1,O*.65)}if(Q>22){const Z=Math.min(1,(Q-22)/18)>.6?f:m;if(k=Z[0],K=Z[1],rt=Z[2],O<.22&&Q<28){const $=.35*(1-O);k=tn(k,u[0],$),K=tn(K,u[1],$),rt=tn(rt,u[2],$)}}else if(Q>10){const N=Math.min(1,O*1.2+Math.max(0,(Q-12)/10)*.45);k=tn(u[0],m[0],N),K=tn(u[1],m[1],N),rt=tn(u[2],m[2],N),N>.7&&(k=tn(k,f[0],.3),K=tn(K,f[1],.3),rt=tn(rt,f[2],.3))}else if(Q<-.8){const Z=Math.min(1,-Q/2.2)*.72;k=tn(u[0],a[0],Z),K=tn(u[1],a[1],Z),rt=tn(u[2],a[2],Z),Q<-2.2&&(k=tn(k,l[0],.18),K=tn(K,l[1],.18),rt=tn(rt,l[2],.18))}else{const N=vo(Math.floor(T*.18),Math.floor(A*.18)),Z=N>.33?u:N<-.33?h:d;if(k=Z[0],K=Z[1],rt=Z[2],O>.45){const $=(O-.45)/.55*.58;k=tn(k,m[0],$),K=tn(K,m[1],$),rt=tn(rt,m[2],$)}}const gt=Math.sqrt(T*T+A*A);if(gt>220){const N=Math.min(.28,(gt-220)/180);k=tn(k,168,N*.45),K=tn(K,182,N*.45),rt=tn(rt,195,N*.48)}const B=(Math.random()-.5)*7;k+=B,K+=B,rt+=B*.9}const C=(M*n+P)*4;r[C]=Math.max(0,Math.min(255,k|0)),r[C+1]=Math.max(0,Math.min(255,K|0)),r[C+2]=Math.max(0,Math.min(255,rt|0)),r[C+3]=255}o.putImageData(s,0,0);const v=new Kn(i);return v.wrapS=v.wrapT=si,v.colorSpace=_n,v.anisotropy=typeof Ht<"u"?Ht.maxAnisotropy:1,v.needsUpdate=!0,v.minFilter=wo,v.magFilter=Yn,v.generateMipmaps=!0,v}function Bg(n,t,e){const i=[{cx:-145,cz:-115,r:62},{cx:130,cz:95,r:70},{cx:155,cz:-145,r:58},{cx:-165,cz:90,r:65},{cx:85,cz:-175,r:55},{cx:-90,cz:160,r:52}];let o=e==="low"?3:e==="medium"?4:6,r=o*(e==="low"?22:e==="medium"?40:52);e==="low"&&(r=Math.min(r,66)),e==="medium"&&(r=Math.min(r,160));const a=new Fe(.14,.2,1.2,6);a.translate(0,.6,0);const l=new Ea(.78,2.1,6);l.translate(0,1.05,0);const u=e==="low"?l:new Ea(.88,2.35,7);e!=="low"&&u.translate(0,1.18,0);const d=e==="low"?l:u,h=new Et({color:4930084,roughness:.92,metalness:0}),m=new Et({color:2972199,roughness:.84,metalness:0}),f=new Tc(a,h,r),x=new Tc(d,m,r);f.instanceMatrix.setUsage(Il),x.instanceMatrix.setUsage(Il),f.frustumCulled=!0,x.frustumCulled=!0,f.castShadow=e!=="low",f.receiveShadow=e!=="low",x.castShadow=e!=="low",x.receiveShadow=!1;const g=new bn,p=[];let c=0,_=0;const v=r*18;for(;c<r&&_<v;){_++;const P=Math.floor(Math.random()*o),T=i[P],A=Math.random()*Math.PI*2,Q=Math.sqrt(Math.random())*T.r,w=T.cx+Math.cos(A)*Q,S=T.cz+Math.sin(A)*Q;if(Math.max(Math.abs(w),Math.abs(S))<Dr+8||Math.abs(S)<_o+2&&Math.abs(w)>xi-4||Math.abs(w)<_o+2&&Math.abs(S)>xi-4)continue;const K=Da(w);if(Math.abs(S-K)<Oi+6)continue;const rt=t(w,S);if(rt<-1.2||rt>16)continue;const z=t(w+1.2,S)-t(w-1.2,S),at=t(w,S+1.2)-t(w,S-1.2);if(Math.sqrt(z*z+at*at)/2.4>.72)continue;let lt=!1;for(let C=0;C<p.length;C++){const O=p[C],gt=O[0]-w,B=O[1]-S;if(gt*gt+B*B<9){lt=!0;break}}if(lt)continue;p.push([w,S,rt]);const V=.82+Math.random()*.42,W=Math.random()*Math.PI*2;g.position.set(w,rt,S),g.rotation.set(0,W,0),g.scale.set(V,V,V),g.updateMatrix(),f.setMatrixAt(c,g.matrix),g.position.set(w,rt-.02,S),g.updateMatrix(),x.setMatrixAt(c,g.matrix),c++}const M=c;return f.count=M,x.count=M,f.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),x.computeBoundingSphere(),n.add(f),n.add(x),{trunkMesh:f,foliageMesh:x,count:M,dispose(){n.remove(f),n.remove(x),a.dispose(),d.dispose(),h.dispose(),m.dispose()}}}function kg(n,t,e){const o=e==="low"?70:e==="medium"?100:140,s=Fi/o,r=(o+1)*2,a=new Float32Array(r*3),l=new Float32Array(r*2);let u=0,d=0;for(let _=0;_<=o;_++){const v=-xo+_*s,M=Da(v),P=Oi*.88,T=M-P,A=M+P;a[u++]=v,a[u++]=-1.15,a[u++]=T,l[d++]=_/o,l[d++]=0,a[u++]=v,a[u++]=-1.15,a[u++]=A,l[d++]=_/o,l[d++]=1}const h=o*6,m=new Uint32Array(h);let f=0;for(let _=0;_<o;_++){const v=_*2,M=_*2+1,P=(_+1)*2,T=(_+1)*2+1;m[f++]=v,m[f++]=P,m[f++]=M,m[f++]=M,m[f++]=P,m[f++]=T}const x=new Qe;x.setAttribute("position",new Rn(a,3)),x.setAttribute("uv",new Rn(l,2)),x.setIndex(new Rn(m,1)),x.computeVertexNormals();const g=x.attributes.position;for(let _=0;_<g.count;_++){const v=g.getX(_),M=g.getZ(_),P=Math.sin(v*.02+M*.01)*.06;g.setY(_,-1.15+P)}g.needsUpdate=!0,x.computeVertexNormals();const p=new Et({color:3497862,roughness:.38,metalness:.02,transparent:!1,fog:!0}),c=new I(x,p);return c.frustumCulled=!0,c.receiveShadow=!1,c.castShadow=!1,c.renderOrder=-1,n.add(c),{mesh:c,dispose(){n.remove(c),x.dispose(),p.dispose()}}}function Hg(n,t,e){const i=e==="low"?32:64,o=3,s=252,r=298,a=(i+1)*(o+1),l=new Float32Array(a*3),u=new Float32Array(a*2);let d=0,h=0;for(let p=0;p<=o;p++){const c=p/o,_=s+c*(r-s);for(let v=0;v<=i;v++){const M=v/i*Math.PI*2,P=Math.cos(M)*_,T=Math.sin(M)*_,A=t(P,T),Q=Math.max(0,ii(P*.008+80,T*.008-60,3))*7*c+Math.pow(Math.max(0,ii(P*.014,T*.014,2)+.2),1.7)*14*c,w=A+Q*.9;l[d++]=P,l[d++]=w,l[d++]=T,u[h++]=v/i,u[h++]=c}}const m=[];for(let p=0;p<o;p++)for(let c=0;c<i;c++){const _=p*(i+1)+c,v=_+1,M=(p+1)*(i+1)+c,P=M+1;m.push(_,M,v,v,M,P)}const f=new Qe;f.setAttribute("position",new Rn(l,3)),f.setAttribute("uv",new Rn(u,2)),f.setIndex(m),f.computeVertexNormals();const x=new Et({color:8291199,roughness:.88,metalness:0,fog:!0}),g=new I(f,x);return g.frustumCulled=!0,g.castShadow=!1,g.receiveShadow=!1,n.add(g),{mesh:g,dispose(){n.remove(g),f.dispose(),x.dispose()}}}function Gg(n,t){const i=t&&t.tier||Ht.tier,o=i==="low"?100:i==="medium"?150:200,s=i==="low"?256:i==="medium"?512:1024;function r(_,v){return Og(_,v)}const a=new qe(Fi,Fi,o,o),l=a.attributes.position;for(let _=0;_<l.count;_++){const v=l.getX(_),M=l.getY(_),P=v,T=-M,A=r(P,T);l.setZ(_,A)}l.needsUpdate=!0,a.computeVertexNormals();const u=zg(s,i,r),d=new Et({map:u,roughness:.85,metalness:.02,color:16777215,fog:!0,transparent:!1,side:Wi});d.needsUpdate=!0;const h=new I(a,d);h.rotation.x=-Math.PI/2,h.position.set(0,0,0),h.receiveShadow=i!=="low",h.castShadow=!1,h.frustumCulled=!0,h.name="large_terrain",h.renderOrder=-10,h.raycast=function(_){return function(v,M){const P=v.ray;if(P.direction.y<-.12){const T=P.origin.x,A=P.origin.z;if(Math.abs(T)>xo+12||Math.abs(A)>xo+12)return;const Q=r(T,A),w=P.direction.y;if(Math.abs(w)<1e-6)return;const S=(Q-P.origin.y)/w;if(S<0||S>v.far||v.near!==void 0&&S<v.near)return;const k=new E().copy(P.origin).addScaledVector(P.direction,S);M.push({distance:S,point:k,object:this,face:null,uv:null,faceIndex:0})}else if(P.direction.y>.12)return}}(),n.add(h);const m=Bg(n,r,i),f=kg(n,r,i),x=i!=="low"?Hg(n,r,i):{mesh:null,dispose(){}},g=[h];function p(){n.remove(h),a.dispose(),d.dispose(),u.dispose(),m&&m.dispose(),f&&f.dispose(),x&&x.dispose()}const c={mesh:h,getHeightAt:r,colliders:g,dispose:p,forest:m,river:f,mountainRim:x,worldSize:Fi,tier:i,segments:o,textureSize:s};return typeof window<"u"&&(window.__terrain=c),console.log(`[terrain] ${Fi}x${Fi} segments ${o}x${o} tex ${s} tier ${i} forest ${m.count} tris ${o*o*2}`),c}function Ao(n,t=1024){const e=Ht.tier==="low"?Math.max(256,Math.floor(t*Ht.texScale)):t,i=document.createElement("canvas");i.width=i.height=e;const o=i.getContext("2d");n(o,e,e);const s=new Kn(i);return s.wrapS=s.wrapT=ri,s.colorSpace=_n,s.anisotropy=Ht.maxAnisotropy,s.needsUpdate=!0,s}function Vg(){return Ao((n,t)=>{n.fillStyle="#a8aeb8",n.fillRect(0,0,t,t);for(let o=0;o<140;o++){const s=Math.random()*t,r=Math.random()*t,a=18+Math.random()*52,l=168+Math.random()*22|0,u=.09+Math.random()*.09;n.fillStyle="rgba("+l+","+(l+1)+","+(l+5)+","+u+")",n.beginPath(),n.ellipse(s,r,a*1.6,a,(Math.random()-.5)*.7,0,Math.PI*2),n.fill()}for(let o=0;o<16e3;o++){const s=Math.random()*t,r=Math.random()*t,a=Math.random()<.5?1:1.25,l=85+Math.random()*115|0,u=.07+Math.random()*.16;n.fillStyle="rgba("+l+","+l+","+(l+2)+","+u+")",n.fillRect(s,r,a,a)}for(let o=0;o<9e3;o++){const s=Math.random()*t,r=Math.random()*t;n.fillStyle=Math.random()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",n.fillRect(s,r,1,1)}n.strokeStyle="rgba(28,32,38,0.26)",n.lineWidth=2.4;const e=4;for(let o=1;o<e;o++){const s=t/e*o;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}n.strokeStyle="rgba(255,255,255,0.10)",n.lineWidth=1.1;for(let o=1;o<e;o++){const s=t/e*o+1.2;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}n.strokeStyle="rgba(22,26,32,0.42)",n.lineWidth=.9;for(let o=1;o<e;o++){const s=t/e*o-.8;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}for(let o=0;o<12;o++){const s=Math.random()*t,r=Math.random()*t,a=22+Math.random()*38,l=n.createRadialGradient(s,r,0,s,r,a);l.addColorStop(0,"rgba(28,26,24,0.18)"),l.addColorStop(.35,"rgba(38,34,30,0.12)"),l.addColorStop(.72,"rgba(50,48,44,0.06)"),l.addColorStop(1,"rgba(50,48,44,0)"),n.fillStyle=l,n.beginPath(),n.arc(s,r,a,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(18,18,20,0.13)",n.lineWidth=3.2;for(let o=0;o<5;o++){let s=Math.random()*t,r=Math.random()*t;n.beginPath(),n.moveTo(s,r);for(let a=0;a<6;a++)s+=(Math.random()-.4)*36+18,r+=(Math.random()-.5)*10,n.lineTo(s,r);n.stroke()}n.strokeStyle="rgba(22,22,24,0.09)",n.lineWidth=1.8;for(let o=0;o<4;o++){let s=Math.random()*t,r=Math.random()*t;n.beginPath(),n.moveTo(s,r);for(let a=0;a<5;a++)s+=(Math.random()-.4)*42+16,r+=(Math.random()-.5)*8,n.lineTo(s,r);n.stroke()}n.strokeStyle="rgba(34,38,44,0.13)",n.lineWidth=.85;for(let o=0;o<36;o++){let s=Math.random()*t,r=Math.random()*t;n.beginPath(),n.moveTo(s,r);for(let a=0;a<4;a++)s+=(Math.random()-.5)*36,r+=(Math.random()-.5)*18,n.lineTo(s,r);n.stroke()}for(let o=0;o<10;o++){const s=Math.random()*t,r=Math.random()*t,a=10+Math.random()*20;n.fillStyle="rgba(30,28,26,0.07)",n.beginPath(),n.arc(s,r,a,0,Math.PI*2),n.fill(),n.fillStyle="rgba(58,56,54,0.06)",n.beginPath(),n.arc(s+1,r+1,a*.6,0,Math.PI*2),n.fill()}const i=n.createRadialGradient(t*.5,t*.5,t*.3,t*.5,t*.5,t*.95);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(18,18,20,0.09)"),n.fillStyle=i,n.fillRect(0,0,t,t)},1024)}function Wg(){return Ao((n,t)=>{n.fillStyle="#b9bec7",n.fillRect(0,0,t,t);for(let o=0;o<110;o++){const s=Math.random()*t,r=Math.random()*t,a=16+Math.random()*42,l=176+Math.random()*26|0;n.fillStyle="rgba("+l+","+l+","+(l+4)+",0.11)",n.beginPath(),n.ellipse(s,r,a,a*.92,0,0,Math.PI*2),n.fill()}for(let o=0;o<14e3;o++){const s=Math.random()*t,r=Math.random()*t,a=118+Math.random()*84|0;n.fillStyle="rgba("+a+","+a+","+a+",0.09)",n.fillRect(s,r,1,1)}n.strokeStyle="rgba(44,50,60,0.16)",n.lineWidth=1.6;for(let o=64;o<t;o+=64)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();n.fillStyle="rgba(0,0,0,0.065)";for(let o=64;o<t;o+=64)n.fillRect(0,o-7,t,3.5);n.strokeStyle="rgba(255,255,255,0.08)",n.lineWidth=.9;for(let o=64;o<t;o+=64)n.beginPath(),n.moveTo(0,o+1),n.lineTo(t,o+1),n.stroke();n.strokeStyle="rgba(46,52,62,0.09)";for(let o=128;o<t;o+=128)n.beginPath(),n.moveTo(o,0),n.lineTo(o,t),n.stroke();n.strokeStyle="rgba(48,44,40,0.09)",n.lineWidth=1.1;for(let o=0;o<22;o++){let s=Math.random()*t,r=0;for(n.beginPath(),n.moveTo(s,r);r<t;)s+=(Math.random()-.5)*3,r+=18+Math.random()*22,n.lineTo(s,r);n.stroke()}const e=n.createLinearGradient(0,t*.72,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(36,40,46,0.22)"),n.fillStyle=e,n.fillRect(0,t*.72,t,t*.28),n.fillStyle="rgba(38,42,50,0.28)";for(let o=32;o<t;o+=64)for(let s=32;s<t;s+=128)n.beginPath(),n.arc(s,o,2.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(0,0,0,0.18)",n.beginPath(),n.arc(s+.6,o+.6,1.1,0,Math.PI*2),n.fill(),n.fillStyle="rgba(38,42,50,0.28)";const i=n.createLinearGradient(0,0,0,t*.35);i.addColorStop(0,"rgba(0,0,0,0.10)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,t*.35)},1024)}function Xg(){return Ao((n,t)=>{n.fillStyle="#6b7581",n.fillRect(0,0,t,t);const e=32;for(let o=0;o<t;o+=e){const s=n.createLinearGradient(o,0,o+e,0);s.addColorStop(0,"#5c6773"),s.addColorStop(.22,"#7d8a97"),s.addColorStop(.5,"#adb8c5"),s.addColorStop(.74,"#6f7d8b"),s.addColorStop(1,"#4d5866"),n.fillStyle=s,n.fillRect(o,0,e,t),n.fillStyle="rgba(0,0,0,0.16)",n.fillRect(o,0,1.8,t),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(o+e-1.4,0,1.1,t),n.strokeStyle="rgba(255,255,255,0.06)",n.lineWidth=.6,n.beginPath(),n.moveTo(o+e*.5,0),n.lineTo(o+e*.5+(Math.random()-.5)*2,t),n.stroke()}n.fillStyle="#3d444e";for(let o=26;o<t;o+=64)for(let s=16;s<t;s+=e)n.beginPath(),n.arc(s,o,3.1,0,Math.PI*2),n.fill(),n.fillStyle="#9aa6b4",n.beginPath(),n.arc(s-.7,o-.7,1.15,0,Math.PI*2),n.fill(),n.fillStyle="#3d444e";n.strokeStyle="rgba(112,68,38,0.20)",n.lineWidth=1;for(let o=26;o<t;o+=64)for(let s=16;s<t;s+=e)if(Math.random()<.38){n.beginPath(),n.moveTo(s,o+3);let r=o+3,a=s;for(;r<t&&r<o+64;)a+=(Math.random()-.5)*1.4,r+=6+Math.random()*8,n.lineTo(a,r);n.stroke()}n.strokeStyle="rgba(86,52,28,0.11)",n.lineWidth=2.2;for(let o=0;o<7;o++){let s=Math.random()*t,r=0;for(n.beginPath(),n.moveTo(s,r);r<t;)s+=(Math.random()-.5)*2,r+=14+Math.random()*16,n.lineTo(s,r);n.stroke()}for(let o=0;o<18;o++){const s=Math.random()*t,r=Math.random()*t,a=5+Math.random()*11;n.fillStyle="rgba(28,32,38,0.08)",n.beginPath(),n.ellipse(s,r,a*1.8,a,0,0,Math.PI*2),n.fill()}for(let o=0;o<7e3;o++){const s=Math.random()*t,r=Math.random()*t;n.fillStyle=Math.random()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",n.fillRect(s,r,1,1)}const i=n.createLinearGradient(0,0,0,22);i.addColorStop(0,"rgba(255,255,255,0.10)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,22)},1024)}function Yg(){return Ao((n,t)=>{n.fillStyle="#8f6f4a",n.fillRect(0,0,t,t);for(let i=0;i<t;i++){const o=Math.sin(i*.028)*6+Math.sin(i*.011)*10+(Math.random()-.5)*3.5,s=i/t*8,r=144+o*1.15-s*2|0,a=110+o-s|0,l=71+o*.38-s*.5|0;n.fillStyle="rgb("+Math.max(0,Math.min(255,r))+","+Math.max(0,Math.min(255,a))+","+Math.max(0,Math.min(255,l))+")",n.fillRect(0,i,t,1)}n.strokeStyle="rgba(62,38,18,0.42)",n.lineWidth=1.25;for(let i=0;i<26;i++){const o=i*20+Math.random()*6;n.beginPath(),n.moveTo(0,o);for(let s=0;s<=t;s+=12){const r=o+Math.sin(s*.018+i*.9)*6.5+(Math.random()-.5)*1.8;n.lineTo(s,r)}n.stroke()}n.strokeStyle="rgba(30,18,8,0.28)",n.lineWidth=.85;for(let i=0;i<20;i++){const o=i*26+10;n.beginPath(),n.moveTo(0,o);for(let s=0;s<=t;s+=10)n.lineTo(s+(Math.random()-.5)*1.5,o+Math.sin(s*.03+i)*3.5);n.stroke()}for(let i=0;i<7;i++){const o=Math.random()*t,s=Math.random()*t,r=10+Math.random()*14,a=6+Math.random()*9;n.fillStyle="rgba(46,29,15,0.36)",n.beginPath(),n.ellipse(o,s,r,a,0,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(26,16,7,0.55)",n.lineWidth=1.05,n.stroke(),n.fillStyle="rgba(72,47,22,0.30)",n.beginPath(),n.ellipse(o+1.1,s+.8,r*.58,a*.58,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(18,11,5,0.42)",n.beginPath(),n.arc(o+2,s+1,1.2,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(30,18,10,0.62)",n.lineWidth=2.2;for(let i=128;i<t;i+=128)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.strokeStyle="rgba(255,255,255,0.07)",n.lineWidth=1;for(let i=128;i<t;i+=128)n.beginPath(),n.moveTo(0,i+1.2),n.lineTo(t,i+1.2),n.stroke();n.fillStyle="rgba(0,0,0,0.06)";for(let i=128;i<t;i+=128)n.fillRect(0,i-5,t,2.5);n.fillStyle="rgba(42,38,36,0.55)";for(let i=64;i<t;i+=128)for(let o=22;o<t;o+=96)n.beginPath(),n.arc(o,i,2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(18,18,20,0.9)",n.beginPath(),n.arc(o+.5,i+.3,.9,0,Math.PI*2),n.fill(),n.fillStyle="rgba(110,110,118,0.45)",n.beginPath(),n.arc(o-.6,i-.6,.7,0,Math.PI*2),n.fill(),n.fillStyle="rgba(42,38,36,0.55)";const e=n.createLinearGradient(0,t*.82,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(44,32,20,0.18)"),n.fillStyle=e,n.fillRect(0,t*.82,t,t*.18),n.fillStyle="rgba(28,22,16,0.14)",n.font="bold "+t*.06+"px monospace",n.textAlign="center",n.fillText("FRAGILE",t*.5,t*.54),n.strokeStyle="rgba(28,22,16,0.09)",n.lineWidth=1.2,n.strokeRect(t*.18,t*.42,t*.64,t*.18),n.fillStyle="rgba(255,255,255,0.06)";for(let i=0;i<3e3;i++){const o=Math.random()*t,s=Math.random()*t;n.fillRect(o,s,1,1)}},1024)}function qg(){return Ao((n,t)=>{n.fillStyle="#8080ff",n.fillRect(0,0,t,t),n.strokeStyle="#5f5fff",n.lineWidth=2.8;for(let i=0;i<9;i++){let o=Math.random()*t,s=Math.random()*t;n.beginPath(),n.moveTo(o,s);for(let r=0;r<7;r++)o+=(Math.random()-.5)*84+18,s+=(Math.random()-.5)*46,n.lineTo(o,s);n.stroke(),n.strokeStyle="#a0a0ff",n.lineWidth=1.1,n.stroke(),n.strokeStyle="#5f5fff",n.lineWidth=2.8}n.strokeStyle="rgba(90,90,255,0.92)",n.lineWidth=1.35;for(let i=0;i<18;i++){let o=Math.random()*t,s=Math.random()*t;n.beginPath(),n.moveTo(o,s);for(let r=0;r<4;r++)o+=(Math.random()-.5)*42,s+=(Math.random()-.5)*28,n.lineTo(o,s);n.stroke()}for(let i=0;i<2600;i++){const o=Math.random()*t,s=Math.random()*t;n.fillStyle=Math.random()<.5?"#7a7aff":"#8686ff",n.globalAlpha=.22,n.fillRect(o,s,1.5,1.5)}n.globalAlpha=1;const e=n.createRadialGradient(t*.5,t*.5,t*.25,t*.5,t*.5,t*.9);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(18,18,40,0.06)"),n.fillStyle=e,n.fillRect(0,0,t,t)},512)}function Zg(){return Ao((n,t)=>{n.fillStyle="#8080ff",n.fillRect(0,0,t,t);for(let e=0;e<6;e++){const i=t*.5+(Math.random()-.5)*t*.28,o=t*.5+(Math.random()-.5)*t*.28,s=18+Math.random()*42,r=["#6a6aff","#8080ff","#9a9aff"];for(let a=0;a<3;a++)n.strokeStyle=r[a%r.length],n.globalAlpha=.22-a*.06,n.lineWidth=1.6+a*.7,n.beginPath(),n.arc(i,o,s+a*6.5,0,Math.PI*2),n.stroke()}n.globalAlpha=1,n.strokeStyle="rgba(110,110,255,0.32)",n.lineWidth=.9;for(let e=0;e<12;e++){const i=Math.random()*t,o=Math.random()*t,s=8+Math.random()*18;n.beginPath(),n.arc(i,o,s,0,Math.PI*2),n.stroke()}n.strokeStyle="rgba(110,110,255,0.18)",n.lineWidth=.7;for(let e=0;e<80;e++){let i=Math.random()*t,o=Math.random()*t;const s=10+Math.random()*18,r=(Math.random()-.5)*.6;n.beginPath(),n.moveTo(i,o),n.lineTo(i+Math.cos(r)*s,o+Math.sin(r)*s*.35),n.stroke()}for(let e=0;e<1400;e++){const i=Math.random()*t,o=Math.random()*t;n.fillStyle=Math.random()<.5?"#7c7cff":"#8888ff",n.globalAlpha=.14,n.fillRect(i,o,1,1)}n.globalAlpha=1},512)}function jg(){const n=document.createElement("canvas");n.width=n.height=512;const t=n.getContext("2d");t.clearRect(0,0,512,512);const e=512,i=32;t.strokeStyle="rgba(42,47,55,0.96)",t.lineWidth=2.9,t.lineCap="round";for(let s=-i;s<e+i;s+=i)for(let r=-i;r<e+i;r+=i)t.beginPath(),t.moveTo(r,s),t.lineTo(r+i/2,s+i/2),t.lineTo(r+i,s),t.stroke(),t.beginPath(),t.moveTo(r,s),t.lineTo(r+i/2,s-i/2),t.lineTo(r+i,s),t.stroke();t.strokeStyle="rgba(32,38,48,0.92)",t.lineWidth=1.1;for(let s=0;s<e;s+=i)t.beginPath(),t.moveTo(0,s),t.lineTo(e,s),t.stroke();t.fillStyle="rgba(110,70,38,0.14)";for(let s=0;s<e;s+=i)for(let r=0;r<e;r+=i)Math.random()<.1&&(t.beginPath(),t.arc(r,s,2.4,0,Math.PI*2),t.fill());const o=new Kn(n);return o.wrapS=o.wrapT=ri,o.needsUpdate=!0,o.anisotropy=Ht.maxAnisotropy,o}function Kg(){return Ao((n,t)=>{n.clearRect(0,0,t,t);for(let i=0;i<44;i++){const o=Math.random()*t,s=Math.random()*t,r=9+Math.random()*21,a=n.createRadialGradient(o,s,0,o,s,r);a.addColorStop(0,"rgba(132,68,28,0.36)"),a.addColorStop(.5,"rgba(118,58,22,0.18)"),a.addColorStop(1,"rgba(118,58,22,0)"),n.fillStyle=a,n.beginPath(),n.arc(o,s,r,0,Math.PI*2),n.fill()}for(let i=0;i<86;i++){const o=Math.random()*t,s=Math.random()*t,r=7+Math.random()*14,a=3+Math.random()*7;n.fillStyle="rgba(92,48,18,0.15)",n.beginPath(),n.ellipse(o,s,r,a,Math.random()*Math.PI,0,Math.PI*2),n.fill()}const e=n.createLinearGradient(0,t*.82,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(72,42,18,0.23)"),n.fillStyle=e,n.fillRect(0,t*.82,t,t*.18)},512)}function Jg(){const n=document.createElement("canvas");n.width=512,n.height=256;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(142,160,184,0.02)"),e.addColorStop(.45,"rgba(142,160,184,0.14)"),e.addColorStop(.78,"rgba(142,160,184,0.28)"),e.addColorStop(1,"rgba(142,160,184,0.52)"),t.fillStyle=e,t.fillRect(0,0,512,256);for(let o=0;o<1200;o++){const s=Math.random()*512,r=Math.random()*256,a=Math.random()*.06;t.fillStyle="rgba(255,255,255,"+a+")",t.fillRect(s,r,1,1)}const i=new Kn(n);return i.needsUpdate=!0,i}function $g(n){const t=[],e=[],i=[],o=G=>{G.updateMatrixWorld(!0);const ht=new pn().setFromObject(G);G.userData.collider=ht,t.push(G)};function s(G,ht,ut,wt=!0,Ct=!0){const Gt=new Dt(ht[0],ht[1],ht[2]),he=new I(Gt,ut);return he.position.set(G[0],G[1],G[2]),he.castShadow=wt,he.receiveShadow=Ct,he}const r=Vg();r.repeat.set(10,10);const a=Wg();a.repeat.set(2,1);const l=Xg();l.repeat.set(2,1);const u=Yg();u.repeat.set(1,1);const d=u.clone();d.repeat.set(2,1);const h=Ht.tier!=="low"?qg():null;h&&h.repeat.set(7,7);const m=jg();m.repeat.set(1,1);const f=Kg();f.repeat.set(1,1);const x=Jg(),g=Ht.tier!=="low"?Zg():null;g&&g.repeat.set(1,1);const p=Ht.tier!=="low"?new Et({map:r,normalMap:h,normalScale:new te(.85,.85),roughness:.84,metalness:.02,color:16777215,bumpMap:r,bumpScale:.018}):new Et({map:r,roughness:.84,metalness:.02,color:16777215}),c=new Et({map:a,roughness:.92,metalness:.02,color:16777215,bumpMap:a,bumpScale:.02}),_=new Et({map:a,roughness:.95,metalness:0,color:13685978}),v=new Et({map:l,roughness:.45,metalness:.55,color:15265524}),M=new Et({color:2765113,roughness:.35,metalness:.72}),P=new Et({map:l,roughness:.38,metalness:.62,color:14542574}),T=new Et({map:l.clone(),roughness:.55,metalness:.35,color:11879738}),A=new Et({map:l.clone(),roughness:.55,metalness:.35,color:3828634}),Q=new Et({map:l.clone(),roughness:.55,metalness:.32,color:5929546}),w=new Et({map:l.clone(),roughness:.52,metalness:.3,color:12757067}),S=new Et({map:u,roughness:.82,metalness:0,color:16777215}),k=new Et({map:d,roughness:.9,metalness:0,color:7163438}),K=new Et({color:3885658,roughness:.45,metalness:.55}),rt=new Et({color:8010274,roughness:.78,metalness:.18}),z=new Et({map:a,roughness:.88,metalness:.02,color:14869736}),at=new Et({color:16771496,emissive:16761450,emissiveIntensity:1.6,roughness:.22,metalness:.1}),J=new Et({color:11065599,emissive:5088255,emissiveIntensity:.9,roughness:.3}),lt=new qe(80,80),V=new Dt(1.05,1.05,1.05),W=new Fe(.42,.42,.88,Ht.tier==="low"?6:16),C=new I(lt,p);C.rotation.x=-Math.PI/2,C.position.y=0,C.receiveShadow=!0,n.add(C),C.updateMatrixWorld(!0),C.userData.collider=new pn(new E(-40,-.2,-40),new E(40,0,40)),t.push(C);let O=null,gt=null;try{gt=new URLSearchParams(window.location.search).get("map")}catch{}if(!gt)try{gt=localStorage.getItem("aaa_map")}catch{}!gt&&typeof window<"u"&&window.__CURRENT_MAP&&(gt=window.__CURRENT_MAP);const B=gt!=="shipment";try{B?typeof window<"u"&&window.__terrain&&window.__terrain.worldSize===600?O=window.__terrain:(O=Gg(n,Ht),O&&O.colliders&&O.colliders.forEach(G=>t.push(G)),typeof window<"u"&&(window.__terrain=O)):(O={worldSize:80,getHeightAt:(G,ht)=>0,mesh:null,colliders:[],dispose(){}},typeof window<"u"&&(window.__terrain=O),console.log("[level] map=shipment — terrain skipped (80x80 Shipment core)"))}catch(G){console.warn("[terrain] failed",G)}const N=new Ne;N.name="warehouse",n.add(N);function Z(G,ht,ut=c){const wt=s(G,ht,ut,!0,!0);return N.add(wt),o(wt),wt}const $=.45,nt=6;Z([-11,nt/2,-22.775],[24,nt,$]),Z([.775,nt/2,-21.25],[$,nt,3.5]),Z([.775,nt/2,-14.75],[$,nt,3.5]);const yt=s([.775,1.25,-18],[.6,2.5,3.2],M,!0,!0);N.add(yt),o(yt);const Bt=s([.775,2.65,-18],[.6,.18,3.4],M,!0,!0);N.add(Bt),o(Bt),Z([-10.5,nt/2,-13.225],[5,nt,$]),Z([-1.5,nt/2,-13.225],[5,nt,$]);const et=s([-6,1.25,-13.225],[4.2,2.5,.6],M,!0,!0);N.add(et),o(et);const ot=s([-6,2.65,-13.225],[4.4,.18,.6],M,!0,!0);N.add(ot),o(ot),Z([-13.225,nt/2,-9.75],[$,nt,6.5]),Z([-13.225,nt/2,.25],[$,nt,7.5]);const U=s([-13.225,1.25,-5],[.6,2.5,3.2],M,!0,!0);N.add(U),o(U);const Nt=s([-13.225,2.65,-5],[.6,.18,3.4],M,!0,!0);N.add(Nt),o(Nt),Z([-21.25,nt/2,3.775],[3.5,nt,$]),Z([-14.75,nt/2,3.775],[3.5,nt,$]);const pt=s([-18,1.25,3.775],[3.2,2.5,.6],M,!0,!0);N.add(pt),o(pt);const Tt=s([-18,2.65,3.775],[3.4,.18,.6],M,!0,!0);N.add(Tt),o(Tt),Z([-22.775,nt/2,-9.5],[$,nt,27]);const Wt=s([-11,nt+.15,-18],[24.4,.32,10.6],v,!0,!0);N.add(Wt),o(Wt);const pe=s([-18,nt+.15,-4.5],[10.6,.32,17.6],v,!0,!0);N.add(pe),o(pe);const Xt=s([-11,6.55,-22.95],[24.4,.55,.18],M,!0,!0);N.add(Xt),o(Xt);const D=s([.95,6.55,-18],[.18,.55,10.6],M,!0,!0);N.add(D),o(D);const b=s([-18,6.55,4.05],[10.6,.55,.18],M,!0,!0);N.add(b),o(b);const X=s([-22.95,6.55,-9.5],[.18,.55,27],M,!0,!0);N.add(X),o(X);const kt=s([-6,6.55,-13.05],[14,.35,.18],M,!0,!0);N.add(kt),o(kt);const Ut=s([-13.05,6.55,-4.5],[.18,.35,17],M,!0,!0);N.add(Ut),o(Ut);const Ot=s([-16,6.55,-19],[1.6,.7,1.1],P,!0,!0);N.add(Ot),o(Ot);const ee=s([-6,6.55,-16.5],[1.2,.6,1.4],P,!0,!0);N.add(ee),o(ee);const Yt=new I(new Fe(.45,.45,.6,12),P);Yt.position.set(-19,6.6,-21),Yt.castShadow=!0,Yt.receiveShadow=!0,N.add(Yt),o(Yt);for(let G of[-18,-8])for(let ht of[-20,-16]){const ut=s([G,nt/2,ht],[.35,nt,.35],_,!0,!0);N.add(ut),o(ut)}for(let G of[-21,-15])for(let ht of[-1,2]){const ut=s([G,nt/2,ht],[.32,nt,.32],_,!0,!0);N.add(ut),o(ut)}const qt=s([-20,.55,-17],[3.2,1.1,.9],S,!0,!0);N.add(qt),o(qt);const le=s([-20,1.6,-20.5],[3.5,1.8,.45],P,!0,!0);N.add(le),o(le);const me=new qe(1.8,1.2);[[-17,3,-22.5],[-7,3,-22.5],[-22.5,3,-16],[-22.5,3,-4]].forEach(G=>{const ht=new I(me,at);ht.position.set(G[0],G[1],G[2]),G[0]==-22.5&&(ht.rotation.y=Math.PI/2),N.add(ht)});const Ft=new I(new qe(1.2,1.4),J);Ft.position.set(-22.5,2.8,1.2),Ft.rotation.y=Math.PI/2,N.add(Ft);const Ae=s([-11,.12,-22.6],[24,.24,.28],M,!0,!0);N.add(Ae),o(Ae);const Ce=s([-22.6,.12,-9.5],[.28,.24,27],M,!0,!0);N.add(Ce),o(Ce);function _e(G,ht,ut,wt,Ct){const Gt=new qe(ht,ut),he=[],ie=Gt.attributes.position;for(let Ue=0;Ue<ie.count;Ue++){const Ye=.15+(ie.getY(Ue)+ut/2)/ut*.42;he.push(Ye,Ye,Ye)}Gt.setAttribute("color",new sn(he,3));const Jt=new Et({vertexColors:!0,transparent:!0,opacity:.22,roughness:1,metalness:0,depthWrite:!1,side:$e}),ve=new I(Gt,Jt);ve.position.set(G[0],ut/2,G[2]),ve.rotation.y=wt,Math.abs(wt)<.01?ve.position.z+=Ct:Math.abs(wt-Math.PI/2)<.01?ve.position.x+=Ct:Math.abs(wt-Math.PI)<.01?ve.position.z-=Ct:ve.position.x-=Ct,N.add(ve)}_e([-11,0,-22.55],24,.62,0,.22),_e([-22.55,0,-9.5],27,.62,Math.PI/2,.22),_e([-10.5,0,-13],5,.62,0,.22),_e([-1.5,0,-13],5,.62,0,.22),_e([-13,0,-6.5],13,.62,Math.PI/2,.22),_e([-16,0,3.55],7,.62,0,.22),[[-22.9,-22.9,5.9,.16],[-22.9,4.2,5.9,.16],[1.1,-22.9,5.9,.16],[.9,-13.2,5.9,.16],[-13.1,-13.3,5.9,.16],[-13.1,4.1,5.9,.16]].forEach(([G,ht,ut,wt])=>{const Ct=s([G,ut/2,ht],[wt,ut,wt],M,!0,!0);N.add(Ct),o(Ct)});const Zt=new I(new Fe(.09,.09,12,8),M);if(Zt.rotation.z=Math.PI/2,Zt.position.set(-12,6.35,-20.5),Zt.castShadow=!0,N.add(Zt),Ht.tier!=="low"){const G=new Ui(16751178,45,22,1.6);G.position.set(-10,4.2,-18),n.add(G);const ht=new Ui(16747578,38,18,1.5);ht.position.set(-18,4,-2),n.add(ht);const ut=new Ui(16757354,22,12,1.8);ut.position.set(-19,2.8,-17),n.add(ut)}const ce=new Dt(.9,.18,.9),q=new Et({emissive:16754778,emissiveIntensity:2.2,color:16773333}),Rt=new I(ce,q);Rt.position.set(-10,5.2,-18),N.add(Rt);const Lt=new I(ce,q);Lt.position.set(-18,5.2,-4),N.add(Lt);function vt(G,ht,ut){const wt=new Ne;wt.position.set(G[0],G[1],G[2]),wt.rotation.y=ht;const Ct=new I(new Dt(6,2.55,2.45),ut);Ct.castShadow=!0,Ct.receiveShadow=!0,wt.add(Ct);const Gt=new I(new Dt(.12,2.3,2.3),M);Gt.position.set(3.05,0,0),wt.add(Gt);const he=new I(new Dt(6.05,.12,2.5),M);he.position.set(0,1.22,0),wt.add(he);const ie=new I(new Dt(6.05,.12,2.5),M);ie.position.set(0,-1.22,0),wt.add(ie);for(let Jt=-2.5;Jt<=2.5;Jt+=1){const ve=new I(new Dt(.04,2.4,2.46),M);ve.position.set(Jt,0,0),wt.add(ve)}return n.add(wt),wt.updateMatrixWorld(!0),wt.userData.collider=new pn().setFromObject(wt),t.push(wt),wt}vt([14,1.28,-17],0,T),vt([14,1.28,-14.1],0,A),vt([21,1.28,-15.6],Math.PI/2,Q),vt([19.5,1.28,9.5],0,A),vt([8.2,1.28,14.8],Math.PI/2,w),vt([-4,1.28,12.5],0,T),vt([-4,3.88,12.5],0,Q),vt([2.2,1.28,12.5],0,A),vt([6,1.28,-5.5],.18,w),vt([8.2,3.88,14.8],Math.PI/2,T);function F(G,ht){const ut=new Ne;ut.position.set(G[0],G[1],G[2]),ut.rotation.y=ht;const wt=new I(new Dt(2.4,.55,.75),z);wt.position.y=.28,wt.castShadow=!0,wt.receiveShadow=!0,ut.add(wt);const Ct=new I(new Dt(2.4,.28,.52),z);Ct.position.y=.66,Ct.castShadow=!0,ut.add(Ct);const Gt=new I(new Dt(2.4,.22,.28),z);Gt.position.y=.88,Gt.castShadow=!0,ut.add(Gt);const he=new I(new Dt(.08,.9,.75),M);he.position.set(-1.18,.5,0),ut.add(he);const ie=new I(new Dt(.08,.9,.75),M);return ie.position.set(1.18,.5,0),ut.add(ie),n.add(ut),ut.updateMatrixWorld(!0),ut.userData.collider=new pn().setFromObject(ut),t.push(ut),ut}F([5,0,-.2],0),F([7.8,0,-.2],0),F([.2,0,8.2],Math.PI/2),F([-8.2,0,5.5],.45),F([15.5,0,-6.2],Math.PI/2),Ht.tier!=="low"&&(F([-1.8,0,-4.5],0),F([24,0,-2.5],Math.PI/2),F([24,0,.4],Math.PI/2));for(let G=0;G<4;G++){const ht=s([-.9+G*1.05,.55,3.2],[1,1.1,.95],z,!0,!0);n.add(ht),o(ht)}function L(G,ht){[[-1.2,-1.2],[1.2,-1.2],[1.2,1.2],[-1.2,1.2]].forEach(([Jt,ve])=>{const Ue=s([G[0]+Jt,ht/2,G[2]+ve],[.22,ht,.22],P,!0,!0);n.add(Ue),o(Ue)});for(let Jt=1.2;Jt<ht;Jt+=1.6){const ve=s([G[0],Jt,G[2]-1.2],[2.4,.08,.08],M,!0,!0);n.add(ve),o(ve);const Ue=s([G[0],Jt,G[2]+1.2],[2.4,.08,.08],M,!0,!0);n.add(Ue),o(Ue);const un=s([G[0]-1.2,Jt,G[2]],[.08,.08,2.4],M,!0,!0);n.add(un),o(un);const We=s([G[0]+1.2,Jt,G[2]],[.08,.08,2.4],M,!0,!0);n.add(We),o(We)}const wt=s([G[0],ht,G[2]],[3.1,.22,3.1],k,!0,!0);n.add(wt),o(wt),[[0,-1.45,2.9,.08],[0,1.45,2.9,.08],[-1.45,0,.08,2.9],[1.45,0,.08,2.9]].forEach(([Jt,ve,Ue,un])=>{const We=s([G[0]+Jt,ht+.65,G[2]+ve],[Ue,.08,un],M,!0,!0);n.add(We),o(We);const Ye=s([G[0]+Jt,ht+.95,G[2]+ve],[Ue,.08,un],M,!0,!0);n.add(Ye),o(Ye)});const Ct=s([G[0],ht+1.45,G[2]],[3.3,.18,3.3],v,!0,!0);n.add(Ct),o(Ct);const Gt=s([G[0]-1.1,ht/2,G[2]+1.6],[.06,ht,.04],M,!0,!0);n.add(Gt),o(Gt);const he=s([G[0]-.6,ht/2,G[2]+1.6],[.06,ht,.04],M,!0,!0);n.add(he),o(he);for(let Jt=.6;Jt<ht;Jt+=.45){const ve=s([G[0]-.85,Jt,G[2]+1.6],[.5,.04,.06],M,!0,!0);n.add(ve),o(ve)}if(Ht.tier!=="low"){const Jt=new Ui(16773832,18,14,1.8);Jt.position.set(G[0],ht+.6,G[2]),n.add(Jt)}const ie=new I(new xn(.18,10,10),new Et({emissive:16771488,emissiveIntensity:2,color:16774608}));ie.position.set(G[0],ht+.6,G[2]),n.add(ie)}L([26,0,-22],6.2),L([-24,0,18],5);const dt=s([5,.9,-6.5],[6,.45,4.5],_,!0,!0);n.add(dt),o(dt);const Pt=s([5,.55,-3.2],[4.2,.18,2.2],_,!0,!0);Pt.rotation.x=-.28,Pt.updateMatrixWorld(!0),n.add(Pt),o(Pt);const j=s([3.1,.45,-3.2],[.12,.35,2.2],M,!0,!0);j.rotation.x=-.28,n.add(j),o(j);const It=s([6.9,.45,-3.2],[.12,.35,2.2],M,!0,!0);It.rotation.x=-.28,n.add(It),o(It);const Y=s([5,1.55,-8.6],[6,.08,.08],M,!0,!0);n.add(Y),o(Y);const tt=s([5,1.55,-4.4],[6,.08,.08],M,!0,!0);n.add(tt),o(tt);const H=s([2.1,1.55,-6.5],[.08,.08,4.5],M,!0,!0);n.add(H),o(H);const Mt=s([7.9,1.55,-6.5],[.08,.08,4.5],M,!0,!0);n.add(Mt),o(Mt);const St=s([28,.85,7],[5.5,.4,7],_,!0,!0);n.add(St),o(St);for(let G=0;G<4;G++){const ht=s([25.2+G*.55,.18+G*.21,10.8],[.5,.14,1.6],c,!0,!0);n.add(ht),o(ht)}function y(G,ht,ut){for(let wt=0;wt<ht;wt++){let Ct=[G[0],G[1]+.53+wt*1.07,G[2]];ut==="2x2"&&wt>=2&&(Ct[0]+=1.08),ut==="L"&&wt==2&&(Ct[0]+=1.08,Ct[1]-=1.07);const Gt=new I(V,S);Gt.position.set(Ct[0],Ct[1],Ct[2]),Gt.rotation.y=(Math.random()-.5)*.06,Gt.castShadow=!0,Gt.receiveShadow=!0;const he=new I(new Dt(1.07,.08,1.07),M);he.position.y=.18,Gt.add(he);const ie=he.clone();ie.position.y=-.18,Gt.add(ie),n.add(Gt),o(Gt)}}y([-2,.53,16],Ht.tier==="low"?1:3,"col"),y([24,.53,-10],Ht.tier==="low"?2:4,"2x2"),y([-10,.53,12],Ht.tier==="low"?1:2,"col"),y([10.5,.53,-2],Ht.tier==="low"?1:2,"L"),y([-16,.53,-1],Ht.tier==="low"?1:3,"col");function ct(G,ht){const ut=new I(W,ht?rt:K);ut.position.set(G[0],G[1]+.44,G[2]),ut.castShadow=!0,ut.receiveShadow=!0;const wt=new bi(.43,.022,Ht.tier==="low"?4:8,Ht.tier==="low"?6:16),Ct=M,Gt=new I(wt,Ct);Gt.rotation.x=Math.PI/2,Gt.position.y=.22,ut.add(Gt);const he=Gt.clone();return he.position.y=-.22,ut.add(he),n.add(ut),o(ut),ut}ct([10.2,0,-1.8],!1),ct([11.1,0,-1.6],!0),ct([10.6,0,-.9],!1),ct([-6.2,0,-7.8],!0),ct([-5.3,0,-7.6],!1),ct([-20.5,0,-5.5],!1),ct([-20.5,0,-4.6],!0),ct([27.2,0,5.5],!1);{const G=new Et({map:f,color:16777215,roughness:.82,metalness:.12,transparent:!0}),ht=[17,0,-2.5];let ut=0;for(let wt=0;wt<(Ht.tier==="low"?2:3);wt++)for(let Ct=0;Ct<(Ht.tier==="low"?2:4);Ct++){const Gt=ht[0]+Ct*.95-1.42,he=ht[2]+wt*.95-.95,ie=ut%3!==0,Jt=new I(W,ie?rt:K);Jt.position.set(Gt,.44,he),Jt.rotation.y=(Math.random()-.5)*.18,Jt.castShadow=!0,Jt.receiveShadow=!0;const ve=new bi(.43,.022,Ht.tier==="low"?4:8,Ht.tier==="low"?6:16),Ue=new I(ve,M);Ue.rotation.x=Math.PI/2,Ue.position.y=.22,Jt.add(Ue);const un=Ue.clone();if(un.position.y=-.22,Jt.add(un),ie){const We=new I(new qe(.55,.68),G);We.position.set(.43,.06,0),We.rotation.y=Math.PI/2,We.rotation.z=(Math.random()-.5)*.2,Jt.add(We);const Ye=We.clone();Ye.position.set(-.43,-.08,.12),Ye.rotation.y=-Math.PI/2,Jt.add(Ye)}if(ie&&Math.random()<.6){const We=new I(new kn(.32+Math.random()*.18,10),new Et({color:1975080,roughness:.92,transparent:!0,opacity:.22}));We.rotation.x=-Math.PI/2,We.position.set(Gt,.012,he+.32),n.add(We)}n.add(Jt),o(Jt),ut++}}function At(G,ht){const ut=new Ne;ut.position.set(G[0],G[1],G[2]),ut.rotation.y=ht;const wt=new I(new Dt(1.22,.14,1.02),k);wt.position.y=.09,wt.castShadow=!0,wt.receiveShadow=!0,ut.add(wt);for(let Ct=-.42;Ct<=.42;Ct+=.28){const Gt=new I(new Dt(1.22,.02,.11),k);Gt.position.set(0,.16,Ct),ut.add(Gt)}for(let Ct of[-.5,0,.5])for(let Gt of[-.4,.4]){const he=new I(new Dt(.12,.08,.14),k);he.position.set(Ct,.04,Gt),ut.add(he)}return n.add(ut),ut.updateMatrixWorld(!0),ut.userData.collider=new pn().setFromObject(ut),t.push(ut),ut}At([-2.1,0,14.8],.12),At([-10.2,0,10.8],.7),Ht.tier!=="low"&&(At([11.2,0,-3.2],-.2),At([26.8,.85,6.2],0));const oe=s([28,1.55,-8.5],[5.5,3.1,4.2],c,!0,!0);n.add(oe),o(oe);const se=s([28,3.28,-8.5],[5.9,.22,4.6],v,!0,!0);n.add(se),o(se);const ue=new I(new qe(1,2.1),M);ue.position.set(25.26,1.15,-8.5),ue.rotation.y=Math.PI/2,ue.receiveShadow=!0,n.add(ue);const ae=new I(new qe(1.4,1),at);if(ae.position.set(28,1.9,-6.35),n.add(ae),Ht.tier!=="low"){const G=new Ui(16758890,16,10,1.6);G.position.set(28,2.6,-8.5),n.add(G)}const fe=s([-.5,1.1,-9.2],[4.8,2.2,.45],z,!0,!0);n.add(fe),o(fe);const Ee=s([9.8,1.1,4.2],[.45,2.2,4.8],z,!0,!0);n.add(Ee),o(Ee);const Te=s([-14.5,1.1,8.5],[5.2,2.2,.45],z,!0,!0);n.add(Te),o(Te);for(let G=-20;G<16;G+=3){const ht=s([32,1.1,G],[.18,2.2,.18],M,!0,!0);if(n.add(ht),o(ht),G<13){const ut=new I(new Dt(.08,1.9,2.7),P);ut.position.set(32,1.1,G+1.5),ut.castShadow=!0,ut.receiveShadow=!0,n.add(ut),o(ut)}}for(let G=-22;G<10;G+=3){const ht=s([-32,1.1,G],[.18,2.2,.18],M,!0,!0);n.add(ht),o(ht)}const ke=new bi(.42,.14,8,16),He=new Et({color:1711651,roughness:.92,metalness:.02});function R(G,ht){for(let wt=0;wt<ht;wt++){const Ct=new I(ke,He);Ct.position.set(G[0],.18+wt*.29,G[2]),Ct.rotation.x=Math.PI/2,Ct.castShadow=!0,Ct.receiveShadow=!0,n.add(Ct)}const ut=s([G[0],.5+ht*.29/2,G[2]],[.9,ht*.29+.2,.9],new Et({visible:!1}),!1,!1);ut.visible=!1,n.add(ut),o(ut)}if(R([2.5,0,-11.5],3),Ht.tier!=="low"&&R([18.5,0,2.2],4),R([-7.5,0,6.8],3),Ht.tier!=="low"){let Ye=function(rn,vn,hn){const ln=new Ne;ln.position.set(rn[0],rn[1],rn[2]),ln.rotation.y=vn;const _t=new Et({color:hn,roughness:.78,metalness:.08}),jt=new Fe(.62,.62,.08,16),Vt=new I(jt,_t);Vt.rotation.z=Math.PI/2,Vt.position.set(-.32,.62,0),Vt.castShadow=!0,ln.add(Vt);const Re=Vt.clone();Re.position.x=.32,ln.add(Re);const De=new I(new Fe(.32,.32,.64,14),new Et({color:2764599,roughness:.62,metalness:.45}));De.rotation.z=Math.PI/2,De.position.y=.62,ln.add(De);const ge=new I(new bi(.42,.04,6,16),new Et({color:1118997,roughness:.9}));return ge.rotation.y=Math.PI/2,ge.position.set(0,.62,0),ln.add(ge),n.add(ln),ln.updateMatrixWorld(!0),ln.userData.collider=new pn().setFromObject(ln),t.push(ln),ln};var Be=Ye;const G=new Ne;G.position.set(-16.5,0,-8.5),G.rotation.y=.35,n.add(G);const ht=new I(new Dt(1.85,1.35,2.45),new Et({color:14263361,roughness:.62,metalness:.12}));ht.position.set(0,.88,0),ht.castShadow=!0,ht.receiveShadow=!0,G.add(ht);const ut=new I(new Dt(.1,2.2,.08),M);ut.position.set(0,1.35,1.18),G.add(ut);const wt=ut.clone();wt.position.x=.62,G.add(wt);const Ct=ut.clone();Ct.position.x=-.62,G.add(Ct);const Gt=new I(new Dt(.85,.14,.06),P);Gt.position.set(0,.55,1.22),G.add(Gt);const he=new I(new Dt(.08,.04,1.15),P);he.position.set(.22,.22,1.55),G.add(he);const ie=he.clone();ie.position.x=-.22,G.add(ie);const Jt=new I(new Dt(1.05,.95,1.15),new Et({color:1975339,roughness:.85,metalness:.04}));Jt.position.set(0,1.55,-.55),G.add(Jt);const ve=new I(new Dt(.55,.18,.52),new Et({color:1185048,roughness:.92}));ve.position.set(0,1.22,-.55),G.add(ve);const Ue=new Fe(.32,.32,.22,12),un=new Et({color:987668,roughness:.95});[[.72,-.92],[-.72,-.92],[.72,.85],[-.72,.85]].forEach(([rn,vn])=>{const hn=new I(Ue,un);hn.rotation.z=Math.PI/2,hn.position.set(rn,.32,vn),hn.castShadow=!0,G.add(hn)});const We=new I(new Fe(.09,.09,.12,8),new Et({emissive:16765562,emissiveIntensity:1.8,color:16773824}));We.position.set(.62,1.05,1.15),We.rotation.x=Math.PI/2,G.add(We),G.updateMatrixWorld(!0),G.userData.collider=new pn().setFromObject(G),t.push(G),Ye([-3.2,0,15.2],.2,7043642),Ye([-2.1,0,15.6],-.15,9058858),Ye([12.2,0,11.2],.6,2771563);const qn=new Et({color:6976897,roughness:.42,metalness:.48});for(let rn of[-24.5,-22.8])for(let vn=-10;vn<4;vn+=2.1){const hn=new I(new Fe(.04,.04,3.2,6),qn);hn.position.set(rn,1.6,vn),hn.castShadow=!0,n.add(hn)}for(let rn=-10;rn<4;rn+=2.1){const vn=new I(new Dt(1.7,.04,.04),qn);vn.position.set(-23.65,.75,rn),n.add(vn);const hn=vn.clone();hn.position.y=1.65,n.add(hn);const ln=vn.clone();ln.position.y=2.55,n.add(ln)}const Un=new I(new Dt(1.7,.06,.85),new Et({map:d,roughness:.88}));Un.position.set(-23.65,2.7,-3.5),Un.castShadow=!0,n.add(Un)}const st=new Et({color:15251530,roughness:.85}),ft=new I(new qe(.35,18),st);ft.rotation.x=-Math.PI/2,ft.position.set(0,.02,0),ft.receiveShadow=!0,n.add(ft);const mt=ft.clone();if(mt.position.set(12,.02,-5),mt.scale.set(1,.6,1),n.add(mt),Ht.tier!=="low"){const G=new ts({color:3754588,roughness:.14,metalness:.12,transparent:!0,opacity:.52,envMapIntensity:.85,clearcoat:.45,clearcoatRoughness:.18});G.normalMap=g,G.normalScale=new te(.45,.45);const ht=new I(new kn(1.45,16),G);ht.rotation.x=-Math.PI/2,ht.position.set(-12,.016,-9),ht.receiveShadow=!0,n.add(ht);const ut=new I(new eo(1.45,1.62,24),new Et({color:14215423,transparent:!0,opacity:.1,roughness:.22,metalness:.04,side:$e}));ut.rotation.x=-Math.PI/2,ut.position.set(-12,.017,-9),n.add(ut);const wt=new ts({color:3820898,roughness:.13,metalness:.13,transparent:!0,opacity:.48,envMapIntensity:.88,clearcoat:.55,clearcoatRoughness:.16,normalMap:g,normalScale:new te(.42,.42)}),Ct=new I(new kn(.95,14),wt);Ct.rotation.x=-Math.PI/2,Ct.position.set(-10.2,.016,-7.6),Ct.scale.set(1,.7,1),Ct.rotation.z=.6,n.add(Ct);const Gt=new I(new eo(.95,1.08,20),new Et({color:13625087,transparent:!0,opacity:.08,side:$e}));Gt.rotation.x=-Math.PI/2,Gt.position.set(-10.2,.017,-7.6),Gt.scale.set(1,.7,1),Gt.rotation.z=.6,n.add(Gt);const he=new ts({color:3426654,roughness:.12,metalness:.14,transparent:!0,opacity:.44,envMapIntensity:.9,clearcoat:.62,clearcoatRoughness:.15,normalMap:g,normalScale:new te(.55,.55)}),ie=new I(new kn(1.75,16),he);ie.rotation.x=-Math.PI/2,ie.position.set(3.2,.016,2.8),ie.scale.set(1.2,.85,1),n.add(ie);const Jt=new I(new eo(1.75,1.94,24),new Et({color:14544639,transparent:!0,opacity:.09,side:$e}));Jt.rotation.x=-Math.PI/2,Jt.position.set(3.2,.017,2.8),Jt.scale.set(1.2,.85,1),n.add(Jt);const ve=new ts({color:4018792,roughness:.11,metalness:.15,transparent:!0,opacity:.46,envMapIntensity:.92,clearcoat:.68,clearcoatRoughness:.14,normalMap:g,normalScale:new te(.62,.62)}),Ue=new I(new kn(1.22,16),ve);Ue.rotation.x=-Math.PI/2,Ue.position.set(15.8,.016,-7.2),Ue.scale.set(1,.82,1),n.add(Ue);const un=new I(new eo(1.22,1.36,20),new Et({color:13953791,transparent:!0,opacity:.09,side:$e}));un.rotation.x=-Math.PI/2,un.position.set(15.8,.017,-7.2),un.scale.set(1,.82,1),n.add(un);const We=new ts({color:3097692,roughness:.1,metalness:.16,transparent:!0,opacity:.5,envMapIntensity:.95,clearcoat:.75,clearcoatRoughness:.12,normalMap:g,normalScale:new te(.48,.48)}),Ye=new I(new kn(1.08,16),We);Ye.rotation.x=-Math.PI/2,Ye.position.set(-2.2,.016,9.4),Ye.scale.set(1.05,.92,1),n.add(Ye);const qn=new I(new eo(1.08,1.21,20),new Et({color:14741759,transparent:!0,opacity:.1,side:$e}));qn.rotation.x=-Math.PI/2,qn.position.set(-2.2,.017,9.4),qn.scale.set(1.05,.92,1),n.add(qn);const Un=new I(new kn(.62,12),new Et({color:7035530,roughness:.18,metalness:.55,transparent:!0,opacity:.18}));Un.rotation.x=-Math.PI/2,Un.position.set(-12.1,.018,-9.1),n.add(Un);const rn=new I(new kn(.48,12),new Et({color:8022858,roughness:.2,metalness:.48,transparent:!0,opacity:.14}));rn.rotation.x=-Math.PI/2,rn.position.set(3.3,.018,2.9),n.add(rn);const vn=new I(new kn(.42,12),new Et({color:5925754,roughness:.19,metalness:.5,transparent:!0,opacity:.13}));vn.rotation.x=-Math.PI/2,vn.position.set(15.9,.018,-7.1),n.add(vn);const hn=new Et({color:1975081,roughness:.88,transparent:!0,opacity:.16}),ln=new I(new qe(6.5,.28),hn);ln.rotation.x=-Math.PI/2,ln.position.set(-8.2,.013,-9.2),ln.rotation.z=.08,n.add(ln);const _t=new I(new qe(4.2,.22),hn.clone());_t.material.opacity=.12,_t.rotation.x=-Math.PI/2,_t.position.set(7.5,.013,-5.8),_t.rotation.z=-.35,n.add(_t);const jt=new I(new qe(5.1,.24),hn.clone());jt.material.opacity=.1,jt.rotation.x=-Math.PI/2,jt.position.set(-.8,.013,4.2),jt.rotation.z=.95,n.add(jt)}else{const G=new Et({color:3097692,roughness:.42,metalness:.05,transparent:!0,opacity:.38}),ht=new I(new kn(1.4,8),G);ht.rotation.x=-Math.PI/2,ht.position.set(-12,.016,-9),n.add(ht);const ut=new I(new kn(1.6,8),G.clone());ut.rotation.x=-Math.PI/2,ut.position.set(3.2,.016,2.8),ut.scale.set(1.2,.85,1),n.add(ut)}const xt=new Et({color:856600,transparent:!0,opacity:.2,roughness:1}),it=new I(new qe(28,13),xt);if(it.rotation.x=-Math.PI/2,it.position.set(-14,.012,-18),it.receiveShadow=!0,n.add(it),Ht.tier!=="low"){const G=it.clone();G.scale.set(.62,1,1),G.position.set(-18,.012,-4.5),G.rotation.x=-Math.PI/2,n.add(G)}if(Ht.tier!=="low"){const G=new Et({color:856600,transparent:!0,opacity:.11}),ht=new I(new qe(44,44),G);ht.rotation.x=-Math.PI/2,ht.position.set(-7,.011,-6),n.add(ht)}const bt=new I(new Fe(.52,.52,.04,Ht.tier==="low"?6:16),new Et({color:2764599,roughness:.35,metalness:.68}));bt.position.set(8.5,.02,-9.5),n.add(bt);const zt=new I(new Fe(.42,.42,.045,Ht.tier==="low"?6:16),new Et({color:1711652,roughness:.62,metalness:.52}));zt.position.set(8.5,.022,-9.5),n.add(zt),[new E(30,.1,20),new E(-30,.1,20),new E(20,.1,-30),new E(-8,.1,20),new E(30,.1,-8),new E(-10,.1,8)].forEach(G=>{let ht=!1;for(let ut of t){if(ut===C)continue;const wt=ut.userData.collider;if(!wt||wt.max.y<.6)continue;if(wt.clone().expandByScalar(1.1).containsPoint(new E(G.x,.5,G.z))){ht=!0;break}}ht||e.push(G)});const ne=[new E(0,.1,22),new E(22,.1,22),new E(-22,.1,-22)];for(let G of ne){if(e.length>=6)break;let ht=!0;for(let ut of t){if(ut===C)continue;const wt=ut.userData.collider;!wt||wt.max.y<.6||wt.clone().expandByScalar(1).containsPoint(new E(G.x,.5,G.z))&&(ht=!1)}ht&&e.push(G)}for(;e.length<6;)e.push(new E((Math.random()-.5)*20,.1,(Math.random()-.5)*20));e.length=6;function de(G,ht,ut=2.6){const wt=new E(G,.5,ht);for(const Ct of t){if(Ct===C)continue;const Gt=Ct.userData.collider;if(!(!Gt||Gt.max.y<.6)&&Gt.clone().expandByScalar(ut).containsPoint(wt))return!1}return!0}function ye(G,ht,ut,wt=0){const Ct=O&&typeof O.getHeightAt=="function"?O.getHeightAt(ht,ut):0,Gt=new E(ht,Ct,ut);return i.push({type:G,position:Gt,heading:wt}),Gt}if(B){const G=[{type:"atv",x:0,z:56,heading:Math.PI},{type:"truck",x:56,z:0,heading:-Math.PI*.5},{type:"atv",x:0,z:-56,heading:0},{type:"truck",x:-56,z:0,heading:Math.PI*.5}];for(const ht of G)de(ht.x,ht.z)&&ye(ht.type,ht.x,ht.z,ht.heading);for(;i.length<4;){const ht=i.length%2===0?52:-52,ut=i.length<2?0:ht,wt=i.length<2?ht:0,Ct=i.length<2?0:ut;if(de(wt,Ct))ye(i.length%2===0?"atv":"truck",wt,Ct,i.length%2===0?Math.PI:0);else break}}else{const G=[{type:"atv",x:-28,z:26,heading:.1},{type:"truck",x:28,z:-24,heading:Math.PI}];for(const ht of G)de(ht.x,ht.z)&&ye(ht.type,ht.x,ht.z,ht.heading);for(;i.length<2;){const ht=i.length===0?-26:26,ut=i.length===0?-26:26;if(de(ht,ut))ye(i.length===0?"atv":"truck",ht,ut,i.length===0?0:Math.PI*.5);else break}}if(Ht.tier!=="low"){let wt=function(Ct,Gt,he){const ie=new I(new Dt(Gt[0],Gt[1],Gt[2]),ht[he%ht.length]);ie.position.set(Ct[0],Gt[1]/2,Ct[2]),ie.receiveShadow=!1,ie.castShadow=!1,G.add(ie);const Jt=Math.floor(Math.random()*5)+3;for(let ve=0;ve<Jt;ve++){const Ue=Math.random()<.4,un=new Et({color:16771496,emissive:16762474,emissiveIntensity:Ue?1.2+Math.random()*.3:.9+Math.random()*.6,roughness:.6}),We=new I(new qe(.6+Math.random()*1.1,.7+Math.random()*.9),un),Ye=Math.random()<.5?1:-1;We.position.set(Ct[0]+(Math.random()-.5)*Gt[0]*.7,2+Math.random()*Math.max(2,Gt[1]-3),Ct[2]+Ye*(Gt[2]/2+.02)),Ye<0&&(We.rotation.y=Math.PI),G.add(We),Ue&&(We.userData.flickerPhase=Math.random()*Math.PI*2,ut.push(We))}return ie};var $t=wt;const G=new Ne;G.name="city_backdrop";const ht=[new Et({color:3027771,roughness:.92}),new Et({color:3817546,roughness:.9}),new Et({color:2501427,roughness:.93})],ut=[];for(let Ct=0;Ct<10;Ct++)wt([38+Math.random()*6,0,-36+Ct*7.8],[5+Math.random()*7,4+Math.random()*14,5+Math.random()*6],Ct);for(let Ct=0;Ct<10;Ct++)wt([-36+Ct*7.4,0,38+Math.random()*4],[6+Math.random()*6,4+Math.random()*14,5+Math.random()*5],Ct+1);for(let Ct=0;Ct<8;Ct++)wt([-38-Math.random()*4,0,-28+Ct*7.2],[4+Math.random()*5,4+Math.random()*14,4+Math.random()*5],Ct+2);n.add(G);{const Ct=new mn({map:x,transparent:!0,opacity:.42,depthWrite:!1,side:$e}),Gt=new qe(180,28),he=new I(Gt,Ct);he.position.set(46,14,-2),he.rotation.y=-Math.PI/2,n.add(he);const ie=new I(Gt,Ct.clone());ie.material.opacity=.36,ie.position.set(-2,13,46),ie.rotation.y=Math.PI,n.add(ie);const Jt=new I(Gt,Ct.clone());Jt.material.opacity=.38,Jt.position.set(-46,13,0),Jt.rotation.y=Math.PI/2,n.add(Jt);const ve=new I(new qe(180,18),new mn({map:x,transparent:!0,opacity:.18,depthWrite:!1,side:$e}));ve.position.set(0,4,0),ve.rotation.x=-Math.PI/2,ve.position.y=4,n.add(ve)}{let Gt=function(){const he=Ct.getElapsedTime();for(let ie of ut){const Jt=ie.userData.flickerPhase||0;ie.material.emissiveIntensity=1.2+Math.sin(he*2.2+Jt)*.45+Math.random()*.07}requestAnimationFrame(Gt)};var Ke=Gt;const Ct=new Ou;n.userData.flickerWindows=ut,n.userData.tickFlicker=Gt,Gt()}}else{const G=new Ne;G.name="city_backdrop_mobile";const ht=new Et({color:3027771,roughness:.95}),ut=new Et({color:2501427,roughness:.95}),wt=[[38,0,-22,8,10,6],[38,0,8,7,14,5],[-36,0,34,8,9,6],[-38,0,-12,6,12,5]];for(let he=0;he<wt.length;he++){const ie=wt[he],Jt=new I(new Dt(ie[3],ie[4],ie[5]),he%2?ut:ht);Jt.position.set(ie[0],ie[4]/2,ie[2]),G.add(Jt)}n.add(G);const Ct=new mn({map:x,transparent:!0,opacity:.28,depthWrite:!1,side:$e}),Gt=new I(new qe(180,22),Ct);Gt.position.set(0,12,0),Gt.rotation.x=-Math.PI/2,n.add(Gt),n.userData.flickerWindows=[]}const Oe=new Et({color:9076330,roughness:.96,metalness:.01});function an(G,ht,ut){const wt=new Ne;wt.position.set(G[0],0,G[2]),wt.rotation.y=ut;const Ct=Ht.tier!=="low";for(let he=0;he<ht;he++){const ie=Ct?new bo(.28,.62,4,10):new Dt(.62,.36,.34),Jt=new I(ie,Oe);Ct?Jt.rotation.z=Math.PI/2:Jt.rotation.y=(Math.random()-.5)*.15,Jt.position.set((he-ht/2)*.92+(Math.random()-.5)*.08,.28+he%2*.32,(Math.random()-.5)*.12),Ct&&Jt.scale.set(1,1,.72),Jt.castShadow=Ht.tier!=="low",Jt.receiveShadow=Ht.tier!=="low",wt.add(Jt);const ve=Jt.clone();ve.position.y+=.58,ve.position.x+=.46,wt.add(ve)}n.add(wt),wt.updateMatrixWorld(!0);const Gt=new I(new Dt(ht*.92,.9,.65),new Et({visible:!1}));return Gt.position.copy(wt.position),Gt.rotation.y=ut,Gt.visible=!1,n.add(Gt),wt.userData.collider=new pn().setFromObject(Gt),t.push(wt),wt}an([11.5,0,6.8],6,.12),Ht.tier!=="low"&&an([-9.2,0,-2.2],4,Math.PI/2);{const G=new Et({color:7043658,roughness:.88,metalness:.02}),ht=new Et({color:5925690,roughness:.9,metalness:.02});for(let ut=0;ut<2;ut++){const wt=new I(new Dt(.85,.42,.55),ut==0?G:ht);wt.position.set(13.2,.21+ut*.44,7.2),wt.castShadow=!0,wt.receiveShadow=!0;const Ct=new I(new Dt(.87,.06,.57),M);Ct.position.y=.02,wt.add(Ct),n.add(wt),o(wt)}for(let ut=0;ut<2;ut++){const wt=new I(new Dt(.85,.42,.55),G);wt.position.set(13.2,.21+ut*.44,7.85),wt.castShadow=!0,wt.receiveShadow=!0,n.add(wt),o(wt)}}{const G=new Ne;G.position.set(-6.5,0,-11),G.name="forklift_proxy";const ht=new I(new Dt(1.8,1.1,.95),new Et({color:15120458,roughness:.55,metalness:.18}));ht.position.set(0,.65,0),ht.castShadow=!0,ht.receiveShadow=!0,G.add(ht);const ut=new I(new Dt(.12,1.55,.88),M);ut.position.set(.82,1,0),ut.castShadow=!0,G.add(ut);const wt=new I(new Dt(1.05,.06,.08),M);wt.position.set(1.32,.28,-.19),wt.castShadow=!0,G.add(wt);const Ct=wt.clone();Ct.position.set(1.32,.28,.19),G.add(Ct);const Gt=new I(new Dt(.12,.55,.88),M);Gt.position.set(-.82,.95,0),G.add(Gt);const he=new Fe(.22,.22,.14,Ht.tier==="low"?6:12),ie=new Et({color:1053720,roughness:.92});[[-.65,.22,.42],[-.65,.22,-.42],[.65,.22,.42],[.65,.22,-.42]].forEach(ve=>{const Ue=new I(he,ie);Ue.rotation.z=Math.PI/2,Ue.position.set(ve[0],ve[1],ve[2]),Ue.castShadow=!0,G.add(Ue)}),n.add(G),G.updateMatrixWorld(!0);const Jt=new I(new Dt(1.9,1.15,1),new Et({visible:!1}));Jt.position.copy(G.position),Jt.position.y=.65,Jt.visible=!1,n.add(Jt),G.userData.collider=new pn().setFromObject(Jt),t.push(G)}{const G=Ht.tier==="low"?2:4,ht=new Et({map:m,alphaMap:m,transparent:!0,alphaTest:.12,side:$e,color:16777215,roughness:.82,metalness:.06});ht.needsUpdate=!0;for(let ut=0;ut<G;ut++){const wt=10.2+ut*2.78,Ct=new I(new qe(2.7,1.9),ht);Ct.position.set(wt,.95,-12.5),Ct.castShadow=!1,Ct.receiveShadow=!0,n.add(Ct);const Gt=s([wt-1.35,.95,-12.5],[.08,1.95,.08],M,!0,!0);if(n.add(Gt),o(Gt),ut===G-1){const ie=s([wt+1.35,.95,-12.5],[.08,1.95,.08],M,!0,!0);n.add(ie),o(ie)}const he=s([wt,.95,-12.5],[2.7,1.9,.12],new Et({visible:!1}),!1,!1);he.visible=!1,n.add(he),o(he)}}const Ge=new Et({color:10128762,roughness:.92});for(let G=0;G<(Ht.tier==="low"?1:3);G++){const ht=new I(new Dt(.62,.44,.38),Ge);ht.position.set(12.2+Math.random()*1.2,.22,-1.2+Math.random()*.8),ht.rotation.y=Math.random()*.6,ht.castShadow=Ht.tier!=="low",ht.receiveShadow=Ht.tier!=="low",n.add(ht)}function je(G,ht,ut){const wt=new Ne;wt.position.set(G[0],G[1],G[2]),wt.rotation.y=ht;const Ct=new I(new Dt(1.22,.06,.92),k);Ct.position.y=.07,Ct.castShadow=!0,Ct.receiveShadow=!0,wt.add(Ct);const Gt=new Dt(.14,.09,.92),he=new Et({color:5914402,roughness:.94});for(let Jt of[-.45,0,.45]){const ve=new I(Gt,he);ve.position.set(Jt,.13,0),wt.add(ve)}const ie=new I(new Dt(1.22,.04,.92),k);if(ie.position.y=.02,wt.add(ie),ut){const Jt=new I(V,S);Jt.position.set(0,.62,0),Jt.castShadow=!0,wt.add(Jt);const ve=Jt.clone();ve.position.y=1.67,wt.add(ve)}return n.add(wt),wt.updateMatrixWorld(!0),wt.userData.collider=new pn().setFromObject(wt),t.push(wt),wt}if(Ht.tier!=="low"){let Ct=function(ve,Ue,un){const We=[];for(let Un=0;Un<=12;Un++){const rn=Un/12,vn=ve[0]+(Ue[0]-ve[0])*rn,hn=ve[2]+(Ue[2]-ve[2])*rn,ln=5-Math.sin(rn*Math.PI)*un;We.push(new E(vn,ln,hn))}const Ye=new Qe().setFromPoints(We),qn=new Gi(Ye,wt);n.add(qn)};var be=Ct;je([-9.5,0,-2.5],.12,!0),je([-8.2,0,-.8],-.22,!1),je([10.8,0,3.8],.45,!0),je([11.5,0,-9.8],.08,!1),je([17.2,0,5.2],-.32,!1),je([-2.8,0,7.2],.18,!0);const G=new Fe(.48,.48,.38,14),ht=new Et({color:3815986,roughness:.72}),ut=new I(G,ht);ut.rotation.z=Math.PI/2,ut.position.set(-16.5,.32,-12.5),ut.castShadow=!0,ut.receiveShadow=!0,n.add(ut);const wt=new Hi({color:1711652,linewidth:1});Ct([-18,0,-20],[-8,0,-20],.45),Ct([-18,0,-16],[-8,0,-16],.38);const Gt=new qe(18,8),he=new mn({color:16771528,transparent:!0,opacity:.045,side:$e,depthWrite:!1}),ie=new I(Gt,he);ie.position.set(-12,2.2,-10),ie.rotation.y=.7,n.add(ie);const Jt=ie.clone();Jt.position.set(6,1.8,4),Jt.rotation.y=-.5,Jt.material=he.clone(),Jt.material.opacity=.032,n.add(Jt)}else je([-9.5,0,-2.5],.12,!0),je([10.8,0,3.8],.45,!0);if(n.fog=new Wr(9347256,32,132),Ht.tier!=="low"&&!n.getObjectByName("hemi_aaa")){const G=new Rr(9357567,1976350,.55);G.name="hemi_aaa",n.add(G)}if(N.updateMatrixWorld(!0),Ht.tier==="low"){const G=new Set(["CylinderGeometry","TorusGeometry","PlaneGeometry"]);let ht=0;n.traverse(ut=>{if(!ut.isMesh||!ut.geometry)return;const wt=ut.geometry.type,Ct=G.has(wt)||ut.geometry.parameters&&ut.geometry.parameters.width&&ut.geometry.parameters.width<.7;let Gt=0;try{ut.geometry.boundingSphere||ut.geometry.computeBoundingSphere(),Gt=ut.geometry.boundingSphere.radius*Math.max(ut.scale.x,ut.scale.y,ut.scale.z)}catch{}Ct&&Gt>0&&Gt<.85&&(ut.receiveShadow||ut.castShadow)&&(ut.castShadow&&Gt<.85&&(ut.castShadow=!1,ht++),(wt==="TorusGeometry"||wt==="CylinderGeometry")&&(ut.receiveShadow=!1))}),console.log("[level] mobile low tier disabled small shadows:",ht)}return O&&typeof window<"u"&&(window.__terrain=O),{colliders:t,spawnPoints:e,vehicleSpawns:i,terrain:O}}const Se=Ht.tier==="low";function Qg(n,t,e){let i=30,o=90,s=!1,r=0;const a=1.4,l=.083;let u=0,d=!1,h=!1,m=0,f=0;const x=.055;let g=0,p=0,c=0,_=0,v=0,M=0,P=0;const T=7;let A=0;const Q=new E(.3,-.18,-.48),w=new E(0,-.092,-.3),S=new ao(-.015,.14,-.045),k=new ao(0,0,0),K=74,rt=62;let z=0,at=1;const J=.005,lt=.02,V=document.getElementById("ammo"),W=document.getElementById("reserve"),C=document.getElementById("status"),O=document.getElementById("crosshair");function gt(){V&&(V.textContent=String(i)),W&&(W.textContent=String(o))}function B(_t,jt){C&&(C.textContent=_t,jt&&setTimeout(()=>{C.textContent===_t&&(C.textContent=s?"RELOADING":"READY")},jt))}gt(),C&&(C.textContent="READY");const N=()=>e?typeof e.isLocked=="function"?e.isLocked():!!e.isLocked:!1,Z=new Ne;Z.name="m4_rifle";function $(){const _t=Se?64:256,jt=document.createElement("canvas");jt.width=_t,jt.height=_t;const Vt=jt.getContext("2d");Vt.fillStyle="#808080",Vt.fillRect(0,0,_t,_t);for(let ge=0;ge<(Se?300:2200);ge++){const Le=Math.random()*_t,Sn=Math.random()*_t,Mn=Math.random()*.75+.35,En=Math.random()>.5?10:-10,$n=.07+Math.random()*.05;Vt.fillStyle=`rgba(${128+En},${128+En},${128+En},${$n})`,Vt.fillRect(Le,Sn,Mn,Mn)}for(let ge=0;ge<(Se?16:120);ge++){Vt.lineWidth=Math.random()*.9+.32,Vt.globalAlpha=.16+Math.random()*.22,Vt.strokeStyle=Math.random()>.5?"rgba(228,228,228,0.95)":"rgba(62,62,62,0.9)",Vt.beginPath();const Le=Math.random()*_t,Sn=Math.random()*_t,Mn=16+Math.random()*58,En=Math.random()<.62?(Math.random()<.5?0:Math.PI)+(Math.random()-.5)*.44:Math.random()*Math.PI*2,$n=Le+Math.cos(En)*Mn,fi=Sn+Math.sin(En)*Mn;Vt.moveTo(Le,Sn),Vt.lineTo($n,fi),Vt.stroke()}Vt.globalAlpha=1,Vt.strokeStyle="rgba(235,235,235,0.88)",Vt.lineWidth=2;for(let ge=0;ge<4;ge++)Vt.globalAlpha=.18-ge*.03,Vt.strokeRect(1+ge,1+ge,_t-2-ge*2,_t-2-ge*2);Vt.globalAlpha=1;for(let ge=0;ge<(Se?6:18);ge++){const Le=Math.random()<.5?Math.random()*14:_t-14+Math.random()*14,Sn=Math.random()<.5?Math.random()*14:_t-14+Math.random()*14;Vt.fillStyle=`rgba(255,255,255,${.15+Math.random()*.18})`,Vt.beginPath(),Vt.arc(Le,Sn,1.1+Math.random()*2.4,0,Math.PI*2),Vt.fill(),Vt.fillStyle="rgba(28,28,28,0.28)",Vt.beginPath(),Vt.arc(Le+.6,Sn+.6,.7+Math.random()*.6,0,Math.PI*2),Vt.fill()}const Re=Vt.createLinearGradient(0,0,_t,0);Re.addColorStop(0,"rgba(255,255,255,0.0)"),Re.addColorStop(.22,"rgba(255,255,255,0.07)"),Re.addColorStop(.48,"rgba(255,255,255,0.105)"),Re.addColorStop(.76,"rgba(255,255,255,0.06)"),Re.addColorStop(1,"rgba(255,255,255,0.0)"),Vt.fillStyle=Re,Vt.fillRect(0,Math.floor(_t*.36),_t,Math.floor(_t*.28)),Vt.strokeStyle="rgba(255,255,255,0.06)",Vt.lineWidth=.6,Vt.globalAlpha=.9;for(let ge=0;ge<(Se?3:6);ge++)Vt.beginPath(),Vt.moveTo(0,Math.floor(_t*.11)+ge*34),Vt.lineTo(_t,Math.floor(_t*.19)+ge*34),Vt.stroke();Vt.globalAlpha=1;const De=new Kn(jt);return De.wrapS=De.wrapT=ri,De.repeat.set(1,1),De.needsUpdate=!0,De.colorSpace=ai,De.anisotropy=Se?1:4,De}const nt=$();function yt(){const _t=Se?48:128,jt=document.createElement("canvas");jt.width=_t,jt.height=_t;const Vt=jt.getContext("2d");Vt.clearRect(0,0,128,128),Vt.clearRect(0,0,_t,_t),Vt.translate(_t/2,_t/2),Vt.fillStyle="rgba(255,244,190,1.0)",Vt.fillRect(-_t/2,-5,_t,10),Vt.fillRect(-5,-_t/2,10,_t),Vt.save(),Vt.rotate(Math.PI/4),Vt.globalAlpha=.78,Vt.fillRect(-_t*.39,-3,_t*.78,6),Vt.fillRect(-3,-_t*.39,6,_t*.78),Vt.restore(),Vt.save(),Vt.rotate(Math.PI/8),Vt.globalAlpha=.42,Vt.fillRect(-_t*.33,-1.5,_t*.66,3),Vt.restore(),Vt.save(),Vt.rotate(-Math.PI/8),Vt.globalAlpha=.42,Vt.fillRect(-_t*.33,-1.5,_t*.66,3),Vt.restore();const Re=Vt.createRadialGradient(0,0,0,0,0,_t*.14);Re.addColorStop(0,"rgba(255,255,255,1)"),Re.addColorStop(.35,"rgba(255,244,190,1)"),Re.addColorStop(.72,"rgba(255,220,120,0.8)"),Re.addColorStop(1,"rgba(255,200,80,0)"),Vt.globalAlpha=1,Vt.fillStyle=Re,Vt.beginPath(),Vt.arc(0,0,_t*.14,0,Math.PI*2),Vt.fill(),Vt.fillStyle="white",Vt.beginPath(),Vt.arc(0,0,_t*.055,0,Math.PI*2),Vt.fill();const De=new Kn(jt);return De.needsUpdate=!0,De}const Bt=yt(),et=new Et({color:1975338,roughness:.32,metalness:.92,envMapIntensity:Se?.85:1.42,bumpMap:Se?null:nt,bumpScale:Se?0:.015,clearcoat:Se?0:.3,clearcoatRoughness:.32}),ot=new Et({color:2304561,roughness:.28,metalness:.92,envMapIntensity:Se?.85:1.45,bumpMap:Se?null:nt,bumpScale:Se?0:.008,clearcoat:Se?0:.3,clearcoatRoughness:.28}),U=new Et({color:2765369,roughness:.34,metalness:.92,envMapIntensity:Se?.82:1.32,bumpMap:Se?null:nt,bumpScale:Se?0:.009,clearcoat:Se?0:.3,clearcoatRoughness:.3}),Nt=new Et({color:2041132,roughness:.36,metalness:.92,envMapIntensity:Se?.82:1.28,bumpMap:Se?null:nt,bumpScale:Se?0:.015,clearcoat:Se?0:.3,clearcoatRoughness:.34}),pt=new Et({color:1185049,roughness:.68,metalness:.05,clearcoat:Se?0:.08,clearcoatRoughness:.72,bumpMap:Se?null:nt,bumpScale:Se?0:.004}),Tt=new Et({color:1382428,roughness:.7,metalness:.05,bumpMap:Se?null:nt,bumpScale:Se?0:.004}),Wt=new Et({color:1580064,roughness:.62,metalness:.18,bumpMap:Se?null:nt,bumpScale:Se?0:.006}),pe=new Et({color:1711908,roughness:.48,metalness:Se?.35:.75,envMapIntensity:Se?.5:1.1}),Xt=new Et({color:9047823,roughness:.18,metalness:.45,emissive:3342336,emissiveIntensity:.6}),D=new Et({color:12755802,roughness:.28,metalness:.82,envMapIntensity:Se?.7:1.25,clearcoat:Se?0:.38,clearcoatRoughness:.22}),b=new I(new Dt(.095,.082,.3),et);b.position.set(0,-.05,-.08),b.castShadow=!0,b.receiveShadow=!0,Z.add(b);const X=new I(new Dt(.093,.006,.3),U);X.position.set(0,-.011,-.08),X.rotation.z=0,X.scale.set(1,1,1),Z.add(X);const kt=new I(new Dt(.03,.02,.08),new Et({color:987926,roughness:.85,metalness:.12}));kt.position.set(.045,-.032,-.08),Z.add(kt);const Ut=new Fe(.015,.015,.45,16),Ot=new I(Ut,ot);Ot.rotation.x=Math.PI/2,Ot.position.set(0,-.027,-.465),Ot.castShadow=!0,Z.add(Ot);const ee=new I(new Dt(.078,.068,.32),Nt);ee.position.set(0,-.038,-.32),ee.castShadow=!0,ee.receiveShadow=!0,Z.add(ee);const Yt=new I(new Dt(.006,.008,.32),U);Yt.position.set(.036,-.024,-.32),Yt.rotation.z=Math.PI/6,Z.add(Yt);const qt=Yt.clone();qt.position.x=-.036,qt.rotation.z=-Math.PI/6,Z.add(qt);for(let _t=0;_t<3;_t++){const jt=new I(new Dt(.019,.004,.06),new Et({color:658704,roughness:.9,metalness:.05}));jt.position.set(.032,-.032,-.25-_t*.065),Z.add(jt);const Vt=jt.clone();Vt.position.x=-.032,Z.add(Vt);const Re=new I(new Dt(.04,.004,.05),new Et({color:658704,roughness:.9,metalness:.05}));Re.position.set(0,-.062,-.28-_t*.07),Z.add(Re)}const le=new I(new Dt(.032,.028,.03),U);le.position.set(0,-.01,-.46),le.castShadow=!0,Z.add(le);const me=new I(new Fe(.004,.004,.22,8),ot);me.rotation.x=Math.PI/2,me.position.set(0,-.01,-.35),Z.add(me);const Ft=new I(new Fe(.018,.018,.05,16),U);Ft.rotation.x=Math.PI/2,Ft.position.set(0,-.027,-.705),Ft.castShadow=!0,Z.add(Ft);for(let _t=0;_t<2;_t++){const jt=new I(new bi(.018,.003,6,12),U);jt.rotation.y=Math.PI/2,jt.position.set(0,-.027,-.69-_t*.015),Z.add(jt)}const Ae=new I(new Dt(.075,.095,.22),pt);Ae.position.set(0,-.045,.14),Ae.castShadow=!0,Z.add(Ae);{const _t=document.createElement("canvas");_t.width=128,_t.height=128;const jt=_t.getContext("2d");jt.fillStyle="#3a4a28",jt.fillRect(0,0,128,128),jt.strokeStyle="#5b6b3e",jt.lineWidth=1.2;for(let Le=0;Le<128;Le+=14)jt.beginPath(),jt.moveTo(Le,0),jt.lineTo(Le+18,128),jt.stroke(),jt.beginPath(),jt.moveTo(Le+7,0),jt.lineTo(Le-7,128),jt.stroke();jt.fillStyle="rgba(0,0,0,0.18)";for(let Le=0;Le<8;Le++)jt.fillRect(0,Le*16,128,2);const Vt=new Kn(_t);Vt.wrapS=Vt.wrapT=ri,Vt.repeat.set(3,1.2);const Re=new Et({map:Vt,roughness:.92,metalness:.02,bumpMap:Vt,bumpScale:.006}),De=new I(new Fe(.048,.048,.13,14),Re);De.rotation.x=Math.PI/2,De.position.set(0,-.045,.102),De.castShadow=!0,Z.add(De);const ge=new I(new Dt(.012,.02,.055),Re);ge.position.set(.038,-.055,.14),ge.rotation.z=.35,ge.rotation.y=.12,Z.add(ge)}const Ce=new I(new Dt(.08,.11,.015),new Et({color:724497,roughness:.82,metalness:.05}));Ce.position.set(0,-.045,.255),Z.add(Ce);const _e=new I(new Fe(.015,.015,.16,12),U);_e.rotation.x=Math.PI/2,_e.position.set(0,-.045,.04),Z.add(_e);const Zt=new I(new Dt(.056,.16,.082),Wt);Zt.position.set(0,-.142,-.08),Zt.rotation.x=.09,Zt.castShadow=!0,Z.add(Zt);for(let _t=0;_t<3;_t++){const jt=new I(new Dt(.058,.008,.084),new Et({color:922390,roughness:.75,metalness:.2}));jt.position.set(0,-.11-_t*.022,-.08),jt.rotation.x=.09,Z.add(jt)}const ce=new I(new Dt(.042,.13,.058),Tt);ce.position.set(0,-.125,.01),ce.rotation.x=.32,ce.castShadow=!0,Z.add(ce);for(let _t=0;_t<4;_t++){const jt=new I(new Dt(.043,.006,.059),new Et({color:790033,roughness:.88,metalness:.05}));jt.position.set(0,-.105-_t*.018,.015+_t*.006),jt.rotation.x=.32,Z.add(jt)}const q=new I(new Dt(.072,.014,.06),U);q.position.set(0,-.005,.035),q.castShadow=!0,Z.add(q);const Rt=new I(new Dt(.018,.01,.03),new Et({color:1711908,roughness:.42,metalness:.82}));Rt.position.set(.038,-.006,.035),Z.add(Rt);const Lt=new I(new Dt(.028,.022,.02),U);Lt.position.set(0,.005,.015),Lt.castShadow=!0,Z.add(Lt);const vt=new I(new Dt(.018,.018,.004),new Et({color:592653,roughness:.92,metalness:.1}));vt.position.set(0,.012,.022),Z.add(vt);const F=new I(new Dt(.004,.006,.006),new Et({color:0}));F.position.set(0,.012,.024),Z.add(F);const L=new I(new Dt(.02,.028,.018),U);L.position.set(0,-.004,-.485),L.castShadow=!0,Z.add(L);const dt=new I(new Fe(.004,.004,.022,8),new Et({color:658446,roughness:.55,metalness:.35}));dt.position.set(0,.012,-.485),Z.add(dt);const Pt=new I(new Dt(.006,.012,.008),U);Pt.position.set(-.013,.006,-.485),Z.add(Pt);const j=Pt.clone();j.position.x=.013,Z.add(j);const It=new I(new Dt(.022,.028,.11),pe);It.position.set(.042,-.028,-.3),It.castShadow=!0,Z.add(It);const Y=new I(new Fe(.007,.007,.012,12),Xt);Y.rotation.x=Math.PI/2,Y.position.set(.042,-.028,-.355),Z.add(Y);const tt=new I(new Dt(.008,.006,.002),new mn({color:16718362}));tt.position.set(.052,-.028,-.362),Z.add(tt);const H=new I(new Dt(.006,.004,.14),new Et({color:855826,roughness:.78,metalness:.05}));H.position.set(.042,-.042,-.22),Z.add(H);const Mt=new I(new Dt(.018,.008,.28),U);Mt.position.set(0,-.008,-.08),Z.add(Mt);{const _t=new I(new Dt(.032,.022,.06),U);_t.position.set(0,.016,-.1),_t.castShadow=!0,Z.add(_t);const jt=new I(new Dt(.028,.018,.052),new Et({color:658704,roughness:.62,metalness:.55}));jt.position.set(0,.02,-.1),Z.add(jt);const Vt=Se?new Et({color:13690111,transparent:!0,opacity:.35,roughness:.18,metalness:.15,side:$e}):new ts({color:16777215,transparent:!0,opacity:.42,roughness:.02,metalness:0,transmission:.92,thickness:.005,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.35,side:$e}),Re=new I(new qe(.024,.016),Vt);if(Re.position.set(0,.02,-.075),Re.rotation.y=Math.PI,Z.add(Re),!Se){const ge=new I(new qe(.024,.016),Vt.clone());ge.material.opacity=.28,ge.position.set(0,.02,-.125),Z.add(ge)}const De=new I(new kn(.0018,8),new mn({color:16718362,transparent:!0,opacity:.95}));if(De.position.set(0,.02,-.074),Z.add(De),!Se){const ge=new I(new kn(.0032,8),new mn({color:16726586,transparent:!0,opacity:.22,blending:yi,depthWrite:!1}));ge.position.set(0,.02,-.0735),Z.add(ge)}}{const _t=new Et({color:13620958,roughness:.24,metalness:.92,envMapIntensity:1.2}),jt=new I(new Dt(.024,.015,.06),_t);jt.position.set(.041,-.032,-.08),Z.add(jt);const Vt=new I(new Dt(.004,.008,.02),new Et({color:9082270,roughness:.35,metalness:.85}));Vt.position.set(.048,-.032,-.08),Z.add(Vt)}const St=new I(new bi(.035,.004,6,12,Math.PI),new Et({color:1382428,roughness:.65,metalness:.2}));St.rotation.z=Math.PI,St.rotation.y=Math.PI/2,St.position.set(0,-.075,-.035),Z.add(St);const y=new I(new Dt(.02,.022,.008),U);y.position.set(.052,-.048,-.062),y.castShadow=!0;const ct=new I(new Dt(.018,.012,.012),U);ct.position.set(.052,-.048,-.068),y.add(ct),Z.add(y);const At=new I(new Fe(.012,.012,.016,12),U);At.rotation.z=Math.PI/2,At.position.set(.055,-.018,.015),At.castShadow=!0,Z.add(At);const oe=new I(new Fe(.007,.007,.006,10),new Et({color:1975338,roughness:.42,metalness:.88}));oe.rotation.z=Math.PI/2,oe.position.set(.062,-.018,.015),Z.add(oe);const se=new I(new Dt(.052,.052,.14),Nt);se.position.set(0,-.032,-.395),se.castShadow=!0,se.receiveShadow=!0,Z.add(se);const ue=new Dt(.005,.005,.14),ae=U,fe=new I(ue,ae);fe.position.set(.024,-.01,-.395),fe.rotation.z=Math.PI/4,Z.add(fe);const Ee=fe.clone();Ee.position.x=-.024,Ee.rotation.z=-Math.PI/4,Z.add(Ee);const Te=fe.clone();Te.position.set(.024,-.054,-.395),Te.rotation.z=-Math.PI/4,Z.add(Te);const ke=fe.clone();ke.position.set(-.024,-.054,-.395),ke.rotation.z=Math.PI/4,Z.add(ke),Z.position.copy(Q),Z.rotation.copy(S),t.add(Z);try{t.parent!==n&&n.add(t)}catch{}new E;const He=new E(0,-.027,-.73),R=new qe(.18,.18),st=new mn({color:16773280,transparent:!0,opacity:0,side:$e,depthWrite:!1,blending:yi}),ft=new I(R,st);ft.position.copy(He),ft.position.z-=.018,ft.visible=!1,Z.add(ft);const mt=new qe(.08,.08),xt=new mn({color:16777215,transparent:!0,opacity:0,side:$e,depthWrite:!1,blending:yi}),it=new I(mt,xt);it.position.copy(He),it.position.z-=.025,it.visible=!1,Z.add(it);const bt=new qe(.16,.16),zt=new mn({map:Bt,transparent:!0,opacity:0,side:$e,depthWrite:!1,blending:yi,depthTest:!1}),Kt=new I(bt,zt);Kt.position.copy(He),Kt.position.z-=.022,Kt.visible=!1,Se||Z.add(Kt);const ne=new Ui(16773280,0,Se?2.2:5,1.9);ne.intensity=0,ne.decay=1.9,ne.distance=Se?2.2:5,Z.add(ne),ne.position.copy(He);let de=0;const ye=.08,Oe=new jr;Oe.far=100,Oe.near=0;const an=new E,Ge=new E,je=new E,Be=new E,$t=[],Ke=[],be=[],G=[],ht=[];function ut(_t,jt,Vt){const Re=new I(new xn(.045,8,8),new mn({color:16773792,transparent:!0,opacity:.95}));if(Re.position.copy(_t),jt&&Re.position.addScaledVector(jt,.012),Re.userData.life=.08,Re.userData.maxLife=.08,Re.userData.isImpact=!0,n.add(Re),Ke.push(Re),Vt){const Me=new I(new xn(.07,6,6),new mn({color:16739130,transparent:!0,opacity:.9}));Me.position.copy(_t),jt&&Me.position.addScaledVector(jt,.015),Me.userData.life=.09,Me.userData.maxLife=.09,Me.userData.isImpact=!0,n.add(Me),Ke.push(Me)}const De=new qe(.12,.12),ge=new Et({color:Vt?3804938:1711650,roughness:.92,metalness:.06,transparent:!0,opacity:.92,side:$e,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthWrite:!1});Vt?ge.color.setHex(4856330):(ge.color.setHex(2237995),ge.emissive=new xe(0));const Le=new I(De,ge);if(Le.position.copy(_t),jt&&Le.position.addScaledVector(jt,.004),jt){const Me=new E(0,0,1),en=new hs().setFromUnitVectors(Me,jt.clone().normalize());Le.quaternion.copy(en)}else Le.lookAt(_t.clone().add(new E(0,1,0)));Le.userData.life=4.5,Le.userData.maxLife=4.5,Le.userData.isDecal=!0,n.add(Le),be.push(Le);const Sn=Se?2:6,Mn=new Qe,En=new Float32Array(Sn*3),$n=[];for(let Me=0;Me<Sn;Me++){En[Me*3]=_t.x,En[Me*3+1]=_t.y,En[Me*3+2]=_t.z;const en=new E((Math.random()-.5)*2.2,Math.random()*2+.3,(Math.random()-.5)*2.2);jt&&en.addScaledVector(jt,1.5+Math.random()*1.2),en.normalize().multiplyScalar(.9+Math.random()*1.1),$n.push(en)}Mn.setAttribute("position",new Rn(En,3));const fi=new ba({color:Vt?16755336:8948366,size:.035,transparent:!0,opacity:.95,sizeAttenuation:!0,depthWrite:!1}),we=new Cr(Mn,fi);if(we.userData.life=.38,we.userData.maxLife=.38,we.userData.vels=$n,we.userData.isParticle=!0,n.add(we),ht.push(we),!Se){const Me=new I(new xn(.06,6,6),new mn({color:10133672,transparent:!0,opacity:.32}));Me.position.copy(_t),jt&&Me.position.addScaledVector(jt,.008),Me.userData.life=.14,Me.userData.maxLife=.14,Me.userData.isImpact=!0,n.add(Me),Ke.push(Me)}}function wt(_t,jt,Vt){const Re=new Qe().setFromPoints([_t.clone(),jt.clone()]),De=new Hi({color:Vt?16765562:16773296,transparent:!0,opacity:.92,depthWrite:!1,blending:yi});De.linewidth=2;const ge=new Gi(Re,De);if(ge.userData.life=.055,ge.userData.maxLife=ge.userData.life,ge.userData.isTracer=!0,n.add(ge),$t.push(ge),!Se){const Le=new Qe().setFromPoints([_t.clone(),jt.clone()]),Sn=new Hi({color:16774872,transparent:!0,opacity:.28,depthWrite:!1,blending:yi});Sn.linewidth=3;const Mn=new Gi(Le,Sn);Mn.userData.life=.038,Mn.userData.maxLife=.038,Mn.userData.isTracer=!0,n.add(Mn),$t.push(Mn)}}function Ct(){const _t=new Fe(.006,.006,.018,Se?4:10),jt=new I(_t,D);jt.castShadow=!0;const Re=new E(.045,-.032,-.1).clone().applyMatrix4(Z.matrixWorld);Number.isFinite(Re.x)||Z.getWorldPosition(Re),jt.position.copy(Re);const De=new E;t.getWorldDirection(Be),Be.normalize(),De.crossVectors(Be,new E(0,1,0)).normalize();const ge=new E().addScaledVector(De,1.9+Math.random()*.6).add(new E(0,2.2+Math.random()*.9,0)).addScaledVector(Be,-.6);jt.userData.vel=ge,jt.userData.angVel=new E(Math.random()*18-9,Math.random()*12-6,Math.random()*18-9),jt.userData.life=1.4,jt.userData.maxLife=1.4,n.add(jt),G.push(jt)}function Gt(){ft.visible=!0,it.visible=!0,Se||(Kt.visible=!0),st.opacity=.95,xt.opacity=.98,Se||(zt.opacity=.93),ft.rotation.z=Math.random()*Math.PI,it.rotation.z=ft.rotation.z+.6,Se||(Kt.rotation.z=ft.rotation.z*.5),ne.intensity=Se?1.8:3.5,ne.distance=Se?2.2:5,de=ye,ft.scale.set(.58,.58,1),it.scale.set(.52,.52,1),Se||Kt.scale.set(.6,.6,1)}function he(){if(s)return;if(i<=0){if(u<=0){u=.22,B("EMPTY",420);try{const we=new(window.AudioContext||window.webkitAudioContext),Me=we.createOscillator(),en=we.createGain();Me.frequency.value=720,en.gain.value=.12,Me.connect(en),en.connect(we.destination),Me.start(),en.gain.exponentialRampToValueAtTime(.001,we.currentTime+.08),Me.stop(we.currentTime+.09)}catch{}m=-.008,f=.018,O&&(O.style.transform="scale(1.4)",setTimeout(()=>O.style.transform="",90))}return}if(u>0||!N())return;i--,gt(),u=l;try{window.__audio&&window.__audio.playShoot&&window.__audio.playShoot(h)}catch{}m=-.04-Math.random()*.008,f=x+(Math.random()-.5)*.012;try{t.rotation.x+=.006*(h?.55:1)}catch{}let _t=0;try{const we=e.velocity;if(we){const Me=Math.hypot(we.x||0,we.z||0);Me>.6&&(_t=Math.min(.012,Me/9*.012))}e.isGrounded===!1&&(_t+=.006)}catch{}const Vt=(h?J:lt)+_t;try{t.updateMatrixWorld(!0)}catch{}if(t.getWorldPosition(an),t.getWorldDirection(Ge),Ge.normalize(),Vt>0){const we=new E(0,1,0);let Me=new E().crossVectors(Ge,we);Me.lengthSq()<.001&&Me.set(1,0,0),Me.normalize();const en=new E().crossVectors(Me,Ge).normalize(),qi=Math.random()*Math.PI*2,vi=Math.random()*Vt;je.copy(Ge).addScaledVector(Me,Math.cos(qi)*vi).addScaledVector(en,Math.sin(qi)*vi).normalize()}else je.copy(Ge);Z.getWorldPosition(Be),t.getWorldPosition(Be);const Re=new E;Re.copy(He).applyMatrix4(Z.matrixWorld),Number.isFinite(Re.x)||Re.copy(an).addScaledVector(je,.45),Oe.set(an,je),Oe.far=100,Oe.near=0;const De=[];n.traverse(we=>{if(!we.isMesh||we.parent===Z||we===Z)return;let Me=we,en=!1;for(;Me;){if(Me===Z||Me===t){en=!0;break}Me=Me.parent}en||we.userData.isTracer||we.userData.isImpact||we.userData.isDecal||we.userData.isParticle||we.visible!==!1&&De.push(we)});let ge=[];try{ge=Oe.intersectObjects(De,!1)}catch{ge=Oe.intersectObjects(n.children,!0)}ge=ge.filter(we=>{let Me=we.object;for(;Me;){if(Me===Z||Me===t)return!1;Me=Me.parent}return!0});let Le=null,Sn=null,Mn=null,En=!1;if(ge.length){const we=ge[0];Le=we.point.clone(),Sn=we.face?we.face.normal.clone().transformDirection(we.object.matrixWorld).normalize():null,Sn||(Sn=je.clone().multiplyScalar(-1).normalize()),Mn=we.object;let Me=we.object;for(;Me;){if(Me.userData&&Me.userData.isEnemy){En=!0,Mn=Me;break}Me=Me.parent}if(En&&Mn.userData.hit)try{Mn.userData.hit(34,Le.clone())}catch{}else if(En){let en=we.object.parent;for(;en;){if(en.userData&&typeof en.userData.hit=="function"){try{en.userData.hit(34,Le.clone())}catch{}break}en=en.parent}}}const $n=Le?Le.clone():an.clone().addScaledVector(je,100),fi=Re.clone();if(wt(fi,$n,!!Le),Le&&ut(Le,Sn,En),Gt(),Ct(),O){const we=h?1.15:1.55;O.style.transform=`scale(${we})`,setTimeout(()=>{O&&(O.style.transform="")},70)}i===0?B("EMPTY",900):h||B("READY"),q.position.z=.022,setTimeout(()=>q.position.z=.035,40)}function ie(){if(!s){if(o<=0){B("NO AMMO",700);return}if(i===30){B("FULL",500);return}s=!0,r=a,B("RELOADING"),O&&(O.style.opacity="0.18")}}function Jt(){const _t=30-i,jt=Math.min(_t,o);i+=jt,o-=jt,s=!1,r=0,gt(),B(jt>0?"READY":"EMPTY"),O&&(O.style.opacity=""),Zt.visible=!0,Zt.position.y=-.142,Zt.position.z=-.08,Zt.rotation.set(.09,0,0),i>0&&jt>0&&(m=-.016,f=.02)}function ve(_t){N()&&(_t.button===0&&(d=!0,_t.preventDefault(),he()),_t.button===2&&(h=!0,_t.preventDefault()))}function Ue(_t){_t.button===0&&(d=!1),_t.button===2&&(h=!1)}function un(_t){N()&&_t.preventDefault()}function We(_t){_t.code==="KeyR"&&ie()}function Ye(_t){if(!N())return;const jt=_t.movementX||0,Vt=_t.movementY||0;v+=jt*55e-5,M+=Vt*55e-5,v=Math.max(-.12,Math.min(.12,v)),M=Math.max(-.09,Math.min(.09,M)),c+=jt*18e-5,_+=Vt*13e-5}document.addEventListener("mousedown",ve,{passive:!1}),document.addEventListener("mouseup",Ue,!1),document.addEventListener("contextmenu",un,!1),document.addEventListener("keydown",We,!1),document.addEventListener("mousemove",Ye,!1),document.addEventListener("pointerlockchange",()=>{N()||(d=!1,h=!1)}),window.addEventListener("blur",()=>{d=!1,h=!1});function qn(_t){if(_t<=0)return;if(_t>.05&&(_t=.05),A+=_t,u>0&&(u-=_t),d&&u<=0&&!s&&he(),s){r-=_t;const Ie=a-r;if(Ie<.35){const Qt=Ie/.35;Zt.position.y=Pe.lerp(-.142,-.3,Qt),Zt.position.z=Pe.lerp(-.08,-.065,Qt),Zt.rotation.x=Pe.lerp(.09,.52,Qt),Zt.rotation.z=Pe.lerp(0,.22,Qt),Zt.visible=Qt<.88,q.position.z=.035}else if(Ie<1.1){if(Ie<.4)Zt.visible=!1,Zt.position.y=-.3,Zt.rotation.x=.52,Zt.rotation.z=.22;else{Zt.visible=!0;const Qt=Math.min(1,(Ie-.4)/.7),Je=Un(Qt);Zt.position.y=Pe.lerp(-.3,-.142,Je),Zt.position.z=Pe.lerp(-.065,-.08,Je),Zt.rotation.x=Pe.lerp(.52,.09,Je),Zt.rotation.z=Pe.lerp(.22,0,Je)}Ie<.95&&(q.position.z=.035)}else{Zt.position.y=-.142,Zt.position.z=-.08,Zt.rotation.set(.09,0,0);const Qt=(Ie-1.1)/(a-1.1),Je=Math.sin(Qt*Math.PI);q.position.z=.035-Je*.032,b.position.z=-.08-Je*.006}r<=0&&(b.position.z=-.08,Jt())}const jt=h&&!s?1:0;z+=(jt-z)*(1-Math.exp(-18.5*_t)),Math.abs(z-jt)<.001&&(z=jt);const Vt=h&&!s?rt:K;if(t.fov!==void 0){const Ie=1-Math.exp(-14*_t);t.fov+=(Vt-t.fov)*Ie,Math.abs(t.fov-Vt)>.015||(t.fov=Vt),t.updateProjectionMatrix()}at+=((h&&!s?.925:1)-at)*(1-Math.exp(-14*_t)),Z.scale.setScalar(at);let De=!1,ge=0;try{const Ie=e.velocity;if(Ie){const Qt=Math.hypot(Ie.x||0,Ie.z||0);De=Qt>.45,ge=Math.min(1,Qt/6)}}catch{}if(De&&!h){P+=_t*T*2*Math.PI*.42;const Ie=ge>.85;P+=_t*(Ie?2.2:0)}else h?P+=_t*1.2:P=Pe.lerp(P,0,Math.min(1,_t*6));const Le=De?Math.sin(P*(De&&ge>.85?1.35:1))*(h?.004:.011)*(h?.35:1):Math.sin(A*.9)*.0012,Sn=De?Math.sin(P*.5)*(h?.003:.009):Math.sin(A*.6)*.001,Mn=De?Math.sin(P*.9)*.004:0;v=Pe.lerp(v,0,Math.min(1,_t*7)),M=Pe.lerp(M,0,Math.min(1,_t*7)),c=Pe.lerp(c,0,Math.min(1,_t*9)),_=Pe.lerp(_,0,Math.min(1,_t*9));const En=De?Math.sin(A*2.1)*.004*ge:0,$n=De?Math.cos(A*1.7)*.003*ge:0,fi=v*.42+c*6+En+Sn,we=M*.32+_*5+$n+Le*.6;g+=(fi-g)*(1-Math.exp(-14*_t)),p+=(we-p)*(1-Math.exp(-14*_t));const Me=1-Math.exp(-22*_t),en=1-Math.exp(-(h?24:22)*_t);m=Pe.lerp(m,0,Me),f=Pe.lerp(f,0,en),Math.abs(m)<4e-4&&(m=0),Math.abs(f)<3e-4&&(f=0);const qi=new E().lerpVectors(Q,w,z),vi=new ao(Pe.lerp(S.x,k.x,z),Pe.lerp(S.y,k.y,z),Pe.lerp(S.z,k.z,z));if(Z.position.copy(qi),Z.position.x+=g,Z.position.y+=p+Le,Z.position.z+=m+Mn*.5,Z.rotation.set(vi.x-f*1.05-p*1.8-Le*.7,vi.y+g*1.25+Math.sin(P*.45)*.006,vi.z+g*.55+Math.sin(P*.7)*.008),Z.updateMatrixWorld(!1),O){const Ie=h?.55:1,Qt=De?(h?.06:.18)*ge:0,Je=Math.abs(f)*2.2+Math.abs(m)*2,Gn=Ie+Qt+Je,Fn=1-z;O.style.opacity=String(.92*Fn+.08),(!d||u<.04)&&(O.style.transform=`scale(${Gn.toFixed(3)})`)}if(de>0){de-=_t;const Qt=Math.max(0,de/ye);st.opacity=Qt*.95,xt.opacity=Qt*.98,Se||(zt.opacity=Qt*.93),ne.intensity=(Se?1.8:3.5)*Qt;const Je=.58+(1-Qt)*.2,Gn=.52+(1-Qt)*.14,Fn=Se?.6:.6+(1-Qt)*.24;ft.scale.setScalar(Je),it.scale.setScalar(Gn),Se||Kt.scale.setScalar(Fn),Se||(Kt.rotation.z+=_t*12),de<=0&&(de=0,ft.visible=!1,it.visible=!1,Se||(Kt.visible=!1),st.opacity=0,xt.opacity=0,Se||(zt.opacity=0),ne.intensity=0)}for(let Ie=G.length-1;Ie>=0;Ie--){const Qt=G[Ie];if(Qt.userData.life-=_t,Qt.userData.life<=0){n.remove(Qt),G.splice(Ie,1);continue}const Je=Qt.userData.vel;Je.y-=9.8*_t,Qt.position.addScaledVector(Je,_t),Qt.rotation.x+=Qt.userData.angVel.x*_t,Qt.rotation.y+=Qt.userData.angVel.y*_t,Qt.rotation.z+=Qt.userData.angVel.z*_t,Qt.position.y<.04&&Je.y<0&&(Qt.position.y=.04,Je.y*=-.28,Je.x*=.72,Je.z*=.72,Qt.userData.angVel.multiplyScalar(.72),Math.abs(Je.y)<.25&&(Je.y=0));const Gn=Qt.userData.life/Qt.userData.maxLife;Gn<.18&&(Qt.material.opacity=Gn/.18),!Qt.material.transparent&&Gn<.18&&(Qt.material.transparent=!0)}for(let Ie=$t.length-1;Ie>=0;Ie--){const Qt=$t[Ie];Qt.userData.life-=_t;const Je=Math.max(0,Qt.userData.life/Qt.userData.maxLife);if(Qt.userData.life<=0){n.remove(Qt),Qt.geometry&&Qt.geometry.dispose(),$t.splice(Ie,1);continue}Qt.material&&(Qt.material.opacity=Je*(Qt.material.color.getHex()===16774872?.28:.92))}for(let Ie=Ke.length-1;Ie>=0;Ie--){const Qt=Ke[Ie];Qt.userData.life-=_t;const Je=Math.max(0,Qt.userData.life/Qt.userData.maxLife);if(Qt.userData.life<=0){n.remove(Qt),Ke.splice(Ie,1);continue}Qt.material&&Qt.material.opacity!==void 0&&(Qt.material.opacity=Je*(Qt.geometry.type.includes("Sphere")?.95:.35)),Qt.scale.setScalar(1+(1-Je)*.55)}for(let Ie=be.length-1;Ie>=0;Ie--){const Qt=be[Ie];if(Qt.userData.life-=_t,Qt.userData.life<=0){n.remove(Qt),be.splice(Ie,1);continue}Qt.userData.life<1&&(Qt.material.opacity=Qt.userData.life/1*.92)}for(let Ie=ht.length-1;Ie>=0;Ie--){const Qt=ht[Ie];Qt.userData.life-=_t;const Je=Math.max(0,Qt.userData.life/Qt.userData.maxLife);if(Qt.userData.life<=0){n.remove(Qt),Qt.geometry.dispose(),ht.splice(Ie,1);continue}const Gn=Qt.geometry.attributes.position;for(let Fn=0;Fn<Qt.userData.vels.length;Fn++)Qt.userData.vels[Fn].y-=9.8*.28*_t,Gn.array[Fn*3]+=Qt.userData.vels[Fn].x*_t,Gn.array[Fn*3+1]+=Qt.userData.vels[Fn].y*_t,Gn.array[Fn*3+2]+=Qt.userData.vels[Fn].z*_t;Gn.needsUpdate=!0,Qt.material&&(Qt.material.opacity=Je*.95),Qt.position.y-=_t*.12}}function Un(_t){return 1-Math.pow(1-_t,3)}function rn(_t){o+=_t,gt(),B("+ AMMO",650)}function vn(){return{ammo:i,reserve:o,isReloading:s}}gt();function hn(){he()}function ln(){ie()}return{update:qn,getAmmo:vn,shoot:hn,reload:ln,raycaster:Oe,gunGroup:Z,addAmmo:rn,get ammo(){return i},get reserve(){return o}}}const Ze=Ht.tier==="low";function tx(n,t,e,i){const o=new xn(.19,Ze?6:18,Ze?4:14),s=new xn(.215,Ze?6:18,Ze?4:14,0,Math.PI*2,0,Math.PI*.63),r=new bi(.205,.018,Ze?6:8,Ze?12:20),a=new Dt(.22,.06,.04),l=new Dt(.52,.62,.3),u=new Dt(.36,.3,.05),d=new Dt(.3,.16,.04),h=new Dt(.14,.1,.22),m=new Dt(.54,.08,.32),f=new Dt(.12,.14,.08);function x(Y,tt){return bo?new bo(Y,tt,Ze?4:6,Ze?6:12):new Fe(Y,Y,tt,Ze?6:12)}const g=x(.095,.26),p=x(.082,.24),c=new Fe(.062,.058,.14,Ze?4:10),_=new Fe(.052,.052,.034,Ze?4:10),v=x(.128,.36),M=x(.11,.34),P=new Dt(.14,.055,.14),T=new xn(.082,Ze?4:10,Ze?4:8),A=new Dt(.17,.11,.27),Q=new Dt(.04,.055,.58),w=new Dt(.042,.11,.1),S=new Dt(.028,.028,.2),k=new Dt(.05,.07,.16),K=new Fe(.012,.012,.36,Ze?4:8),rt=new Dt(.24,.14,.16),z=new qe(.19,.12),at=new Dt(.15,.11,.086),J=new Dt(.165,.12,.095),lt=new Fe(.004,.003,.18,Ze?3:6);function V(){const Y=Ze?128:512,tt=document.createElement("canvas");tt.width=tt.height=Y;const H=tt.getContext("2d");H.fillStyle="#4b5640",H.fillRect(0,0,Y,Y);const Mt=["#3e4a37","#5a6348","#3b4236","#6b7356","#2f352e","#4a5540","#5e6b52","#383e32","#6e7a5a","#3a4035"],St=Ze?20:120;for(let ct=0;ct<St;ct++){const At=Math.random()*Y,oe=Math.random()*Y,se=14+Math.random()*34,ue=9+Math.random()*22;H.fillStyle=Mt[ct%Mt.length],H.globalAlpha=.55+Math.random()*.35,H.beginPath(),H.ellipse(At,oe,se,ue,Math.random()*Math.PI,0,Math.PI*2),H.fill()}H.globalAlpha=1;for(let ct=0;ct<(Ze?400:2200);ct++){const At=Math.random()*Y,oe=Math.random()*Y,se=Math.random()<.5?1:1.2;H.fillStyle=Math.random()<.5?"rgba(0,0,0,0.09)":"rgba(255,255,255,0.07)",H.fillRect(At,oe,se,se)}H.strokeStyle="rgba(0,0,0,0.06)",H.lineWidth=.6;for(let ct=16;ct<Y;ct+=16)H.beginPath(),H.moveTo(0,ct+Math.random()*2),H.lineTo(Y,ct+Math.random()*2),H.stroke();for(let ct=0;ct<(Ze?150:900);ct++){const At=Math.random()*Y,oe=Math.random()*Y;H.fillStyle="rgba(68,62,45,0.12)",H.beginPath(),H.arc(At,oe,.8+Math.random()*1.4,0,Math.PI*2),H.fill()}const y=new Kn(tt);return y.wrapS=y.wrapT=ri,y.colorSpace=_n,y.anisotropy=Ze?1:8,y.repeat.set(1,1),y}function W(){if(Ze)return null;const Y=document.createElement("canvas");Y.width=Y.height=512;const tt=Y.getContext("2d");tt.fillStyle="#808080",tt.fillRect(0,0,512,512);for(let Mt=0;Mt<18e3;Mt++){const St=Math.random()*512,y=Math.random()*512;tt.fillStyle=Math.random()<.5?"#7a7a7a":"#8a8a8a",tt.fillRect(St,y,1,1)}tt.strokeStyle="rgba(120,120,120,0.5)",tt.lineWidth=.5;for(let Mt=0;Mt<512;Mt+=4)tt.beginPath(),tt.moveTo(0,Mt),tt.lineTo(512,Mt),tt.stroke();for(let Mt=0;Mt<512;Mt+=4)tt.beginPath(),tt.moveTo(Mt,0),tt.lineTo(Mt,512),tt.stroke();const H=new Kn(Y);return H.wrapS=H.wrapT=ri,H}function C(){const Y=document.createElement("canvas");Y.width=Y.height=128;const tt=Y.getContext("2d");tt.fillStyle="#2a2e2b",tt.fillRect(0,0,128,128);for(let Mt=0;Mt<128;Mt+=4)for(let St=0;St<128;St+=4)tt.fillStyle=(Math.floor(St/4)+Math.floor(Mt/4))%2===0?"#323633":"#2e3331",tt.fillRect(St,Mt,4,4);for(let Mt=0;Mt<800;Mt++){const St=Math.random()*128,y=Math.random()*128;tt.fillStyle=Math.random()<.5?"rgba(0,0,0,0.14)":"rgba(255,255,255,0.06)",tt.fillRect(St,y,1,1)}tt.strokeStyle="rgba(0,0,0,0.18)",tt.lineWidth=.7;for(let Mt=14;Mt<128;Mt+=22)tt.beginPath(),tt.setLineDash([4,6]),tt.moveTo(0,Mt),tt.lineTo(128,Mt),tt.stroke();tt.setLineDash([]);const H=new Kn(Y);return H.wrapS=H.wrapT=ri,H.colorSpace=_n,H.anisotropy=4,H}const O=V(),gt=O.clone();gt.repeat.set(.9,.9);const B=W(),N=C(),Z=new Et({color:13150346,roughness:.62,metalness:0}),$=new Et({color:3883574,roughness:.74,metalness:.14,bumpMap:B,bumpScale:.015}),nt=new Et({color:3093806,roughness:.84,metalness:.09}),yt=new Et({map:O,roughness:.94,metalness:.02,color:16777215,bumpMap:B,bumpScale:.03}),Bt=new Et({map:gt,roughness:.94,metalness:.015,color:16777215,bumpMap:B,bumpScale:.03}),et=new Et({color:3027761,roughness:.7,metalness:.2,bumpMap:B,bumpScale:.022}),ot=new Et({color:2435625,roughness:.64,metalness:.26,bumpScale:.01}),U=new Et({color:1777181,roughness:.62,metalness:.28}),Nt=new Et({color:1645855,roughness:.38,metalness:.78,envMapIntensity:1.1}),pt=new Et({color:2303524,roughness:.8,metalness:.12,bumpMap:B,bumpScale:.01}),Tt=new Et({map:O,roughness:.95,metalness:.015,color:16777215,bumpMap:B,bumpScale:.03}),Wt=new Et({color:1711130,roughness:.72,metalness:.16}),pe=new Et({color:8034874,roughness:.58,metalness:.14,emissive:2766100,emissiveIntensity:.18}),Xt=new Et({map:N,roughness:.88,metalness:.04,color:16777215,bumpMap:B,bumpScale:.012,side:$e}),D=new Et({color:987152,roughness:.45,metalness:.35}),b=new E(0,1,0);function X(Y){const tt=Y.clone();return tt.needsUpdate=!0,tt}function kt(Y){return 1-Math.pow(1-Y,3)}let Ut=[],Ot=0,ee=[];function Yt(){const Y=[];n.traverse(H=>{if(H.isMesh&&!H.userData.isEnemy&&!H.userData.isAmmoDrop&&!H.userData.isTracer&&!(H.parent&&H.parent.isCamera)){if(H.geometry&&H.geometry.type==="BoxGeometry"){const Mt=H.geometry.parameters;if(Mt&&Mt.width>40&&Mt.height<.5)return}(H.parent===n||H.parent&&H.parent.parent===n||H.material&&H.geometry&&H.geometry.type==="BoxGeometry"&&H.getWorldPosition(new E).y<3)&&Y.push(H)}}),Y.length<2&&n.children.forEach(H=>{if(H.isMesh&&!H.userData.isEnemy&&H.geometry&&H.geometry.type==="BoxGeometry"){const Mt=H.geometry.parameters;Mt&&!(Mt.width>40)&&Y.push(H)}}),ee=[];const tt=new E;for(const H of Y){if(H.getWorldPosition(tt),tt.y>3)continue;const Mt=H.geometry&&H.geometry.parameters?Math.max(H.geometry.parameters.width||1,H.geometry.parameters.depth||1):1,St=Math.max(.6,Mt*.5+.5);for(const y of[0,Math.PI*.5,Math.PI,Math.PI*1.5]){const ct=new E(tt.x+Math.cos(y)*St,0,tt.z+Math.sin(y)*St);ct.x=Math.max(-28,Math.min(28,ct.x)),ct.z=Math.max(-28,Math.min(28,ct.z)),ee.push(ct)}}return Y}const qt=new jr,le=new E,me=new E;function Ft(Y,tt,H){le.copy(tt).sub(Y);const Mt=le.length();if(Mt<.1)return!0;le.normalize(),qt.set(Y,le),qt.far=Mt-.22;const St=qt.intersectObjects(H,!1);return St.length?St[0].distance<.35?Ft(me.copy(Y).addScaledVector(le,.4),tt,H):St[0].distance>Mt-.35:!0}let Ae=100;function Ce(Y){return Y&&Y.isVector3?Y:e&&typeof e.getPosition=="function"?e.getPosition():new E(0,1.7,8)}function _e(Y){if(e&&typeof e.takeDamage=="function"){e.takeDamage(Y);return}Ae=Math.max(0,Ae-Y);const tt=document.getElementById("health");if(tt&&(tt.textContent=String(Math.round(Ae))),!document.getElementById("__hurtOverlay")){const Mt=document.createElement("div");Mt.id="__hurtOverlay",Mt.style.cssText="position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at center, transparent 35%, rgba(200,20,20,0.65) 100%);opacity:0;transition:opacity 60ms;z-index:5",document.body.appendChild(Mt)}const H=document.getElementById("__hurtOverlay");if(H&&(H.style.opacity="0.85",setTimeout(()=>H.style.opacity="0",180)),Ae<=0){const Mt=document.getElementById("status");Mt&&(Mt.textContent="DOWNED"),setTimeout(()=>{Ae=100,tt&&(tt.textContent="100"),Mt&&(Mt.textContent="READY")},2600)}}const Zt=[];function ce(Y,tt,H){const Mt=new Qe().setFromPoints([Y.clone(),tt.clone()]),St=new Hi({color:H?16718362:16726843,transparent:!0,opacity:.96}),y=new Gi(Mt,St);if(y.userData.isTracer=!0,y.userData.age=0,y.userData.life=H?.09:.07,n.add(y),Zt.push(y),Ze)return;if(H){const At=new I(new xn(.055,6,6),new mn({color:16726843,transparent:!0,opacity:.95}));At.position.copy(tt),At.userData.isTracer=!0,At.userData.age=0,At.userData.life=.12,At.userData.isSpark=!0,n.add(At),Zt.push(At)}const ct=new I(new xn(.09,8,8),new mn({color:16773320,transparent:!0,opacity:.92}));ct.position.copy(Y),ct.position.y+=.02,ct.userData.isTracer=!0,ct.userData.age=0,ct.userData.life=.05,ct.userData.isSpark=!0,n.add(ct),Zt.push(ct)}const q=[];function Rt(Y){const tt=new I(rt,pe.clone());tt.position.copy(Y),tt.position.y=.14,tt.castShadow=!0,tt.receiveShadow=!0,tt.rotation.y=Math.random()*Math.PI,tt.userData.isAmmoDrop=!0,tt.userData.birth=performance.now(),n.add(tt),q.push(tt),setTimeout(()=>{const H=q.indexOf(tt);H>=0&&q.splice(H,1),tt.parent&&n.remove(tt)},18e3)}function Lt(Y){for(let tt=q.length-1;tt>=0;tt--){const H=q[tt];if(Math.hypot(H.position.x-Y.x,H.position.z-Y.z)<1.55&&Math.abs(H.position.y-Y.y)<1.6){let Mt=18;if(i)if(typeof i.addAmmo=="function")i.addAmmo(Mt);else if(typeof i.refill=="function")i.refill(Mt);else{const ct=document.getElementById("reserve");if(ct){const At=parseInt(ct.textContent||"0",10);ct.textContent=String(At+Mt)}}else{const ct=document.getElementById("reserve");if(ct){const At=parseInt(ct.textContent||"0",10);ct.textContent=String(At+Mt)}}const St=document.getElementById("status");St&&(St.textContent="+ AMMO",setTimeout(()=>St.textContent="READY",700));const y=new I(new xn(.12,8,8),new mn({color:11206536,transparent:!0,opacity:.9}));y.position.copy(H.position),y.position.y+=.25,y.userData.isTracer=!0,y.userData.age=0,y.userData.life=.22,y.userData.isSpark=!0,n.add(y),Zt.push(y),n.remove(H),q.splice(tt,1)}}}function vt(){const Y=new Ne,tt=new I(l,X(yt));tt.position.set(0,1.14,0),tt.castShadow=!0,Y.add(tt);const H=new I(u,X(ot));H.position.set(0,.12,.165),H.castShadow=!0,tt.add(H);const Mt=new I(d,X(et));Mt.position.set(0,-.14,.16),Mt.castShadow=!0,tt.add(Mt);const St=new I(m,X(U));St.position.set(0,-.33,.02),St.castShadow=!0,tt.add(St);const y=new I(h,X(et));y.position.set(-.29,.26,0),y.castShadow=!0,tt.add(y);const ct=y.clone();ct.position.x=.29,tt.add(ct);const At=new I(f,X(U));At.position.set(-.22,-.32,.17),At.castShadow=!0,tt.add(At);const oe=At.clone();oe.position.x=.22,tt.add(oe);const se=new I(new Dt(.14,.1,.09),X(U));se.position.set(0,-.32,-.17),se.castShadow=!0,tt.add(se);const ue=new Ne;ue.position.set(0,.41,0),tt.add(ue);const ae=new I(o,X(Z));ae.position.set(0,.13,.02),ae.castShadow=!0,ue.add(ae);const fe=new I(new Fe(.125,.135,.14,12,1,!0),X(U));fe.position.set(0,.07,.08),fe.rotation.x=.12,fe.scale.set(1,1,.72),fe.castShadow=!0,ue.add(fe);const Ee=new I(new xn(.135,10,8,0,Math.PI*2,0,Math.PI*.42),X(U));Ee.position.set(0,.06,.08),Ee.scale.set(1,.72,.85),ue.add(Ee);const Te=new I(z,X(Xt));Te.position.set(0,.055,.148),Te.rotation.y=0,Te.castShadow=!1,ue.add(Te);const ke=new I(new Dt(.19,.006,.005),X(U));ke.position.set(0,.02,.15),ue.add(ke);const He=new I(new Dt(.095,.032,.04),X(Z));He.position.set(0,.015,.12),He.castShadow=!0,ue.add(He),ue.userData.jaw=He;{const On=new Et({color:657930,roughness:.92,emissive:1710610,emissiveIntensity:.18}),gn=new I(new Dt(.032,.008,.004),On);gn.position.set(-.042,.072,.125),gn.rotation.y=.12,ue.add(gn);const yn=gn.clone();yn.position.x=.042,yn.rotation.y=-.12,ue.add(yn);const dn=new I(new Dt(.135,.012,.012),X(U));dn.position.set(0,.082,.122),dn.rotation.x=.15,ue.add(dn),ue.userData.brow=dn,ue.userData.eyes=[gn,yn]}const R=new I(s,X($));R.position.set(0,.17,.02),R.rotation.x=.06,R.castShadow=!0,ue.add(R);const st=new xn(.218,12,8,0,Math.PI*2,0,Math.PI*.58),ft=new Et({color:4870724,roughness:.96,metalness:.03,transparent:!0,opacity:.45,wireframe:!1}),mt=new I(st,ft);mt.position.copy(R.position),mt.rotation.x=.06,mt.scale.set(1.02,1.02,1.02),ue.add(mt);const xt=new Ne;xt.position.copy(R.position),ue.add(xt);for(let On=0;On<24;On++){const gn=On/24*Math.PI*2,yn=[],dn=10;for(let Co=0;Co<=dn;Co++){const Ro=Co/dn,Po=Ro*Math.PI*.58,Us=gn+Math.sin(Ro*Math.PI)*.04,fs=.22,ps=Math.cos(Us)*Math.sin(Po)*fs,Ns=Math.cos(Po)*fs,Vu=Math.sin(Us)*Math.sin(Po)*fs;yn.push(new E(ps,Ns,Vu))}const Is=new Qe().setFromPoints(yn),Hu=new Hi({color:3818040,transparent:!0,opacity:.52}),Gu=new Gi(Is,Hu);if(xt.add(Gu),On%6===0){const Co=[],Ro=.08+On/24*.1,Po=Math.sqrt(Math.max(0,.22*.22-Ro*Ro));for(let ps=0;ps<=16;ps++){const Ns=ps/16*Math.PI*2;Co.push(new E(Math.cos(Ns)*Po,Ro,Math.sin(Ns)*Po))}const Us=new Qe().setFromPoints(Co),fs=new Qm(Us,new Hi({color:4015418,transparent:!0,opacity:.4}));xt.add(fs)}}const it=new I(new Dt(.06,.04,.05),X(Nt));it.position.set(0,.19,.165),ue.add(it);const bt=new I(r,X(nt));bt.position.set(0,.06,.02),bt.rotation.x=Math.PI*.5,bt.castShadow=!0,ue.add(bt);const zt=new I(a,X(U));zt.position.set(0,.06,.15),zt.castShadow=!0,ue.add(zt);const Kt=new I(new Dt(.23,.045,.04),new Et({color:1975080,roughness:.32,metalness:.62}));Kt.position.set(0,.155,.155),Kt.rotation.x=.35,ue.add(Kt);const ne=new I(new Dt(.21,.035,.015),new Et({color:3824186,roughness:.18,metalness:.55,transparent:!0,opacity:.72}));ne.position.set(0,.16,.17),ne.rotation.x=.35,ue.add(ne);const de=new I(new Fe(.0035,.0035,.11,6),X(D));de.position.set(.11,.04,.12),de.rotation.z=Math.PI*.38,de.rotation.x=.22,ue.add(de);const ye=new I(new xn(.012,8,6),X(U));ye.position.set(.09,.015,.16),ue.add(ye);const Oe=new I(new Fe(.002,.002,.09,6),X(U));Oe.position.set(.13,.08,.06),Oe.rotation.z=.55,ue.add(Oe);const an=new I(new Fe(.14,.17,.12,10),X(U));an.position.set(0,-.04,0),an.castShadow=!0,ue.add(an);const Ge=new Ne;Ge.position.set(-.33,.2,.02),tt.add(Ge);const je=new I(g,X(Bt));je.position.set(0,-.15,0),je.castShadow=!0,Ge.add(je);const Be=new I(_,X(U));Be.position.set(0,-.3,0),Be.rotation.z=Math.PI*.5,Be.castShadow=!0,Ge.add(Be);const $t=new Ne;$t.position.set(0,-.3,0),Ge.add($t);const Ke=new I(c,X(Bt));Ke.position.set(0,-.07,0),Ke.castShadow=!0,$t.add(Ke);const be=new I(p,X(pt));be.position.set(0,-.14,0),be.castShadow=!0,$t.add(be);const G=new I(at,X(U));G.position.set(0,-.05,.075),G.castShadow=!0,$t.add(G);const ht=new I(T,X(pt));ht.position.set(0,-.3,0),ht.castShadow=!0,$t.add(ht);const ut=[];{const On=new Dt(.018,.042,.018);for(let yn=0;yn<4;yn++){const dn=new I(On,X(pt));dn.position.set(-.027+yn*.018,-.3-.065,.035+(yn===1||yn===2?.008:0)),dn.rotation.x=.22,dn.castShadow=!0,$t.add(dn),ut.push(dn)}const gn=new I(new Dt(.02,.038,.02),X(pt));gn.position.set(-.042,-.3-.032,.018),gn.rotation.z=.55,gn.rotation.x=.12,$t.add(gn)}const wt=new I(new Dt(.07,.045,.09),X(Nt));wt.position.set(0,-.26,.045),$t.add(wt);const Ct=new Ne;Ct.position.set(.33,.2,.02),tt.add(Ct);const Gt=new I(g,X(Bt));Gt.position.set(0,-.15,0),Gt.castShadow=!0,Ct.add(Gt);const he=new I(_,X(U));he.position.set(0,-.3,0),he.rotation.z=Math.PI*.5,he.castShadow=!0,Ct.add(he);const ie=new Ne;ie.position.set(0,-.3,0),Ct.add(ie);const Jt=new I(c,X(Bt));Jt.position.set(0,-.07,0),Jt.castShadow=!0,ie.add(Jt);const ve=new I(p,X(pt));ve.position.set(0,-.14,0),ve.castShadow=!0,ie.add(ve);const Ue=new I(at,X(U));Ue.position.set(0,-.05,.075),Ue.castShadow=!0,ie.add(Ue);const un=new I(T,X(pt));un.position.set(0,-.3,0),un.castShadow=!0,ie.add(un);const We=[];{const On=new Dt(.018,.042,.018);for(let yn=0;yn<4;yn++){const dn=new I(On,X(pt));dn.position.set(-.027+yn*.018,-.3-.065,.035+(yn===1||yn===2?.008:0)),dn.rotation.x=.22,dn.castShadow=!0,ie.add(dn),We.push(dn)}const gn=new I(new Dt(.02,.038,.02),X(pt));gn.position.set(.042,-.3-.032,.018),gn.rotation.z=-.55,gn.rotation.x=.12,ie.add(gn),We[1].rotation.x=.05}const Ye=new Ne;Ye.position.set(-.15,.78,0),Y.add(Ye);const qn=new I(v,X(Tt));qn.position.set(0,-.22,0),qn.castShadow=!0,Ye.add(qn);const Un=new I(P,X(U));Un.position.set(0,-.42,.02),Un.castShadow=!0,Ye.add(Un);const rn=new Ne;rn.position.set(0,-.42,0),Ye.add(rn);const vn=new I(M,X(Tt));vn.position.set(0,-.2,0),vn.castShadow=!0,rn.add(vn);const hn=new I(A,X(Wt));hn.position.set(0,-.4,.05),hn.castShadow=!0,rn.add(hn);const ln=new I(J,X(U));ln.position.set(0,-.03,.11),rn.add(ln);const _t=new Ne;_t.position.set(.15,.78,0),Y.add(_t);const jt=new I(v,X(Tt));jt.position.set(0,-.22,0),jt.castShadow=!0,_t.add(jt);const Vt=new I(P,X(U));Vt.position.set(0,-.42,.02),Vt.castShadow=!0,_t.add(Vt);const Re=new Ne;Re.position.set(0,-.42,0),_t.add(Re);const De=new I(M,X(Tt));De.position.set(0,-.2,0),De.castShadow=!0,Re.add(De);const ge=new I(A,X(Wt));ge.position.set(0,-.4,.05),ge.castShadow=!0,Re.add(ge);const Le=new I(J,X(U));Le.position.set(0,-.03,.11),Re.add(Le);const Sn=[-.13,-.044,.044,.13];for(let On of Sn)for(let gn=0;gn<4;gn++){const yn=new I(new Dt(.022,.082,.012),X(U));yn.position.set(On,.2-gn*.075,.185),yn.castShadow=!0,H.add(yn);const dn=yn.clone();if(dn.position.z=.185,dn.position.y=-.06-gn*.05,gn<3||(dn.position.y=-.21,dn.position.z=.175),Mt.add(dn),gn<4){const Is=new I(new Dt(.32,.008,.008),X(U));Is.position.set(0,.2-gn*.075,.186),H.add(Is)}}const Mn=new I(new Dt(.09,.14,.06),X(Nt));Mn.position.set(.19,-.08,.11),tt.add(Mn);const En=new I(lt,X(Nt));En.position.set(.19,.055,.11),tt.add(En);const $n=new I(new Fe(.002,.002,.08,6),X(U));$n.position.set(.19,-.02,.13),$n.rotation.z=.35,tt.add($n);const fi=new I(new bi(.15,.022,6,12),X(Bt));fi.rotation.x=Math.PI*.5,fi.position.set(0,-.02,0),tt.add(fi);const we=new Ne;we.position.set(.06,.02,.34),we.rotation.y=-.06,tt.add(we);const Me=new I(Q,X(Nt));Me.position.set(0,-.02,.04),Me.castShadow=!0,we.add(Me);const en=new I(w,X(U));en.position.set(0,-.1,-.04),en.rotation.x=.12,en.castShadow=!0,we.add(en);const qi=new I(S,X(Nt));qi.position.set(0,.055,-.02),qi.castShadow=!0,we.add(qi);const vi=new I(new Fe(.012,.012,.02,8),new Et({color:7054264,roughness:.12,metalness:.85,transparent:!0,opacity:.55}));vi.rotation.z=Math.PI*.5,vi.position.set(0,.055,.08),we.add(vi);const Ie=new I(k,X(U));Ie.position.set(0,-.01,-.3),Ie.castShadow=!0,we.add(Ie);const Qt=new I(K,X(Nt));Qt.rotation.x=Math.PI*.5,Qt.position.set(0,.01,.38),Qt.castShadow=!0,we.add(Qt);const Je=new I(new Fe(.014,.014,.05,8),X(Nt));Je.rotation.x=Math.PI*.5,Je.position.set(0,.01,.58),we.add(Je);const Gn=new I(new Dt(.028,.09,.035),X(U));Gn.position.set(0,-.06,.22),Gn.rotation.x=.12,we.add(Gn);const Fn=new bn;Fn.position.set(0,.01,.61),we.add(Fn);const zu=[new E(-.18,.22,-.08),new E(-.04,.05,.18),new E(.02,-.02,.32),new E(.05,-.04,-.22)],Bu=new Qe().setFromPoints(zu),Kr=new Hi({color:1842716,linewidth:2}),Jr=new Gi(Bu,Kr);tt.add(Jr);const ku=[new E(.18,.18,-.06),new E(.04,.04,.1)],$r=new Gi(new Qe().setFromPoints(ku),Kr);tt.add($r);const Qr=[];function tl(On){On.isMesh&&Qr.push(On),On.children.forEach(tl)}return tl(Y),{root:Y,torso:tt,chest:H,ab:Mt,headGroup:ue,jaw:He,lShoulder:Ge,rShoulder:Ct,lElbow:$t,rElbow:ie,lTwist:Ke,rTwist:Jt,lElbowJoint:Be,rElbowJoint:he,lHip:Ye,rHip:_t,lKnee:rn,rKnee:Re,lKneeBox:Un,rKneeBox:Vt,lBoot:hn,rBoot:ge,lKneePad:ln,rKneePad:Le,lPad:G,rPad:Ue,lFingers:ut,rFingers:We,rifle:we,rifleTip:Fn,sling:Jr,sling2:$r,maskPlane:Te,strandGroup:xt,meshes:Qr}}const F=[];let L=0;function dt(Y){const tt=vt(),H={built:tt,group:tt.root,meshes:tt.meshes,hp:100,max:100,state:"idle",stateTimer:0,idleDur:.7+Math.random()*1.4,patrolTarget:null,burstCooldown:.6+Math.random()*.5,burstRemaining:0,burstInterval:0,strafeDir:Math.random()<.5?-1:1,strafeTimer:1.5+Math.random()*2,hitFlash:0,stagger:0,staggerDir:new E,staggerSpin:0,peekTimer:0,walkCycle:Math.random()*Math.PI*2,isDead:!1,deadTimer:0,deathDir:Math.random()<.5?1:-1,box:new pn,losCooldown:0,hasLOS:!1,distToPlayer:999,origColors:new Map,baseY:Y.y,fingerCurl:0,fingerCurlTarget:0,jawKick:0};tt.meshes.forEach(St=>{St.material&&St.material.color&&H.origColors.set(St,St.material.color.clone()),St.material&&"emissive"in St.material&&H.origColors.set(St.material,St.material.emissive?St.material.emissive.clone():new xe(0))}),H.group.position.copy(Y),H.group.position.y=0,H.group.rotation.y=Math.random()*Math.PI*2;const Mt=(St,y)=>{if(H.isDead)return;H.hp=Math.max(0,H.hp-St),H.hitFlash=.09,H.stagger=.22,H.staggerSpin=.22;const ct=Ce();H.staggerDir.copy(H.group.position).sub(ct),H.staggerDir.y=0,H.staggerDir.lengthSq()<.01&&H.staggerDir.set(Math.random()-.5,0,Math.random()-.5),H.staggerDir.normalize().multiplyScalar(3.2),H.meshes.forEach(At=>{At.material&&(At.material.color&&At.material.color.set(16777215),"emissive"in At.material&&At.material.emissive&&At.material.emissive.set(7829367))}),H._recoilKick=.18,(H.state==="idle"||H.state==="patrol")&&(H.state="chase",H.stateTimer=0),H.hp<=0&&(H.isDead=!0,H.deadTimer=0,H.meshes.forEach(At=>{At.userData.isEnemy=!1}),H.group.userData.isEnemy=!1,Math.random()<.78&&Rt(H.group.position.clone()))};return H.meshes.forEach(St=>{St.userData.isEnemy=!0,St.userData.hit=Mt}),H.group.userData.isEnemy=!0,H.group.userData.hit=Mt,H.group.userData._enemy=H,H.hitFn=Mt,H.hit=Mt,H.box.setFromObject(H.group),n.add(H.group),F.push(H),H}function Pt(Y){const tt=[...t];if(tt.length<3)for(let y=0;y<4;y++)tt.push(new E((Math.random()-.5)*38,0,(Math.random()-.5)*38));let H=null,Mt=-1;for(let y of tt){const ct=Math.hypot(y.x-Y.x,y.z-Y.z);if(F.some(se=>!se.isDead&&Math.hypot(se.group.position.x-y.x,se.group.position.z-y.z)<2.2))continue;let oe=ct;ct>12&&(oe+=8),oe+=Math.random()*2,ct<7&&(oe-=20),oe>Mt&&(Mt=oe,H=y)}if(!H){const y=Math.random()*Math.PI*2,ct=18+Math.random()*10;H=new E(Y.x+Math.cos(y)*ct,0,Y.z+Math.sin(y)*ct),H.x=Math.max(-27,Math.min(27,H.x)),H.z=Math.max(-27,Math.min(27,H.z))}const St=H.clone();return St.y=0,St}{const Y=new E(0,1.7,8);for(let tt=0;tt<(Ze?3:5);tt++){let H;tt<t.length?H=t[tt%t.length].clone():H=Pt(Y);let Mt=0;for(;Mt<8&&F.some(St=>St.group.position.distanceTo(H)<2);)H=Pt(Y),Mt++;H.y=0,dt(H)}}let j=2.5;function It(Y,tt,H,Mt,St){const At=.018+(Math.max(0,(Mt-4)*.0065)+Mt*.0075),oe=new E().subVectors(H,tt).normalize(),se=new E().crossVectors(oe,b).normalize(),ue=new E().crossVectors(se,oe).normalize(),ae=(Math.random()-.5)*2*Mt*At,fe=(Math.random()-.5)*2*Mt*At,Ee=H.clone().addScaledVector(se,ae).addScaledVector(ue,fe),Te=new E().subVectors(Ee,tt),ke=Te.length();Te.normalize(),qt.set(tt,Te),qt.far=ke;const He=qt.intersectObjects(St,!1),R=He.length&&He[0].distance<ke-.2;let st=!1;if(!R){const mt=new E().subVectors(Ee,tt),xt=mt.length();mt.normalize();const bt=new E().subVectors(H,tt).dot(mt);let zt;bt<=0?zt=tt.clone():bt>=xt?zt=Ee.clone():zt=tt.clone().addScaledVector(mt,bt);const Kt=zt.distanceTo(H),ne=new E(H.x,1.68,H.z),de=zt.distanceTo(ne);(Kt<.42||de<.24)&&(st=!0),Ee.distanceTo(H)<.48&&(st=!0)}const ft=R?tt.clone().addScaledVector(Te,He[0].distance-.04):Ee.clone();if(ce(tt,ft,st&&!R),Y.built.rifle.position.z-=.04,setTimeout(()=>{Y.built.rifle&&(Y.built.rifle.position.z+=.04)},60),st&&!R){_e(8);const mt=document.getElementById("status");mt&&(mt.textContent="HIT!",mt.style.color="#ff6b6b",setTimeout(()=>{mt.textContent="READY",mt.style.color=""},120))}}return{update(Y,tt){if(Ht.tier==="low"&&!this.__shadowPatched){this.__shadowPatched=!0;try{n.traverse(St=>{if(!(!St.isMesh||!St.geometry))try{St.geometry.boundingSphere||St.geometry.computeBoundingSphere(),St.geometry.boundingSphere.radius<.18&&St.castShadow&&(St.castShadow=!1,St.receiveShadow=!1)}catch{}})}catch{}}const H=Ce(tt),Mt=new E(H.x,1.62,H.z);if(L+=Y,Ot-=Y,Ot<=0&&(Ut=Yt(),Ot=Ze?.65:.25,window._enemiesObstacles=Ut,window._obsCache=Ut,window._obsCacheT=performance.now()),j-=Y,j<=0){const St=F.filter(y=>!y.isDead).length;if(St<(Ze?2:5)){const y=Pt(H);dt(y),j=2.5}else if(St<(Ze?3:6)&&Math.random()<.35){const y=Pt(H);dt(y),j=2.5}else if(j=2.5,St<(Ze?2:5)){const y=Pt(H);dt(y)}}for(let St=Zt.length-1;St>=0;St--){const y=Zt[St];y.userData.age+=Y;const ct=y.userData.age/y.userData.life;if(ct>=1){n.remove(y),y.geometry&&y.geometry.dispose(),Zt.splice(St,1);continue}const At=1-ct;y.isLine?y.material.opacity=At*.92:y.material&&(y.material.opacity=At*.95,y.userData.isSpark&&y.scale.setScalar(1+ct*1.8))}for(const St of q)St.rotation.y+=Y*1.2,St.position.y=.14+Math.sin(L*2.6+St.userData.birth)*.045,St.material.emissiveIntensity!==void 0&&(St.material.emissiveIntensity=.18+Math.sin(L*4.2)*.07);Lt(H);for(let St=F.length-1;St>=0;St--){const y=F[St],ct=y.built;if(y.isDead||y.box.setFromObject(y.group),y.isDead){y.deadTimer+=Y;const it=y.deadTimer,bt=.38;if(it<bt){const zt=kt(Math.min(1,it/bt));if(y.group.rotation.z=y.deathDir*Math.PI*.5*zt,y.group.rotation.x=Math.sin(zt*Math.PI)*.18,y.stagger>0){const Kt=Math.min(Y*5,1)*(1-zt);y.group.position.addScaledVector(y.staggerDir,Kt*.42),y.stagger-=Y}}else{y.group.rotation.z=y.deathDir*Math.PI*.5;const zt=(it-bt)/2.62,Kt=Math.max(0,1-zt);if(y.meshes.forEach(ne=>{ne.material&&(ne.material.transparent||(ne.material.transparent=!0),ne.material.opacity=Kt,ne.material.emissive&&ne.material.emissive.setHex(0))}),it>=3){n.remove(y.group),F.splice(St,1);continue}}continue}if(y.hitFlash>0)if(y.hitFlash-=Y,y.hitFlash<=0)y.hitFlash=0,y.meshes.forEach(it=>{if(!it.material)return;const bt=y.origColors.get(it);bt&&it.material.color&&it.material.color.copy(bt);const zt=y.origColors.get(it.material);zt&&it.material.emissive&&it.material.emissive.copy(zt)});else{const it=1-y.hitFlash/.09;if(it>.55){const bt=(it-.55)/.45;y.meshes.forEach(zt=>{if(!zt.material||!zt.material.color)return;const Kt=y.origColors.get(zt);if(Kt&&(zt.material.color.lerpColors(new xe(16777215),Kt,bt),zt.material.emissive)){const ne=y.origColors.get(zt.material);ne&&zt.material.emissive.lerpColors(new xe(7829367),ne,bt)}})}}y._recoilKick&&y._recoilKick>0&&(y._recoilKick-=Y*2.6,y._recoilKick<0&&(y._recoilKick=0));const At=new E;let oe=0;for(const it of F){if(it===y||it.isDead)continue;const bt=y.group.position.distanceTo(it.group.position);if(bt<1.55&&bt>.01){const zt=new E().subVectors(y.group.position,it.group.position).normalize().multiplyScalar((1.55-bt)*3.2*Y);At.add(zt),oe++}}if(oe>0&&y.group.position.add(At),y.losCooldown-=Y,y.losCooldown<=0){y.losCooldown=(Ze?.32:.11)+Math.random()*(Ze?.16:.08);const it=new E(y.group.position.x,1.5,y.group.position.z);y.hasLOS=Ft(it,Mt,Ut),y.distToPlayer=Math.hypot(H.x-y.group.position.x,H.z-y.group.position.z)}if(y.stagger>0){const it=Math.min(y.stagger,Y*4.8);y.group.position.addScaledVector(y.staggerDir,it),y.group.rotation.y+=y.staggerSpin*Y*2.2,y.group.rotation.z+=y.staggerSpin*Y*1.6,y.stagger-=Y*3.6,y.staggerSpin-=Y*1.8,y.stagger<0&&(y.stagger=0),y.staggerSpin<0&&(y.staggerSpin=0)}const se=Ze?6:18;if(y.fingerCurl+=(y.fingerCurlTarget-y.fingerCurl)*(1-Math.exp(-se*Y)),y.burstRemaining===0&&(y.fingerCurlTarget=Pe.lerp(y.fingerCurlTarget,0,Math.min(1,Y*(Ze?2:6)))),y.jawKick=Pe.lerp(y.jawKick,0,Math.min(1,Y*(Ze?3:9))),ct.jaw){const it=!Ze&&y.burstRemaining>0?Math.sin(L*44)*.0021:0;ct.jaw.position.y=.015-y.jawKick*.015+it,ct.jaw.rotation.x=y.jawKick*.18}if(ct.lFingers)for(let it=0;it<ct.lFingers.length;it++){const bt=ct.lFingers[it];bt.rotation.x=.22+y.fingerCurl*.65+(it===1?-y.fingerCurl*.12:0)}if(ct.rFingers)for(let it=0;it<ct.rFingers.length;it++){const bt=ct.rFingers[it],zt=it===1?.05:.22;bt.rotation.x=zt+y.fingerCurl*.62}const ue=y.hasLOS,ae=y.distToPlayer;let fe=null,Ee=null;if(!ue&&ae<14&&y.peekTimer!==void 0&&(y.peekTimer-=Y,y.peekTimer<=0)){let it=null,bt=-999;for(const zt of ee){const Kt=zt.distanceTo(y.group.position);if(Kt>9||Kt<.6)continue;const ne=new E(zt.x,1.5,zt.z);if(!Ft(ne,Mt,Ut))continue;const de=-Kt*.6-Math.abs(zt.distanceTo(H)-ae)*.2+Math.random()*.5;de>bt&&(bt=de,it=zt)}if(it){Ee=it.clone();const zt=new E().subVectors(Ee,y.group.position);zt.y=0,zt.length()>.2&&(fe=zt.normalize())}y.peekTimer=.45+Math.random()*.55}ue?ae<14&&ae>7.5?y.state!=="chase"&&y.state!=="attack"&&(y.state="chase",y.stateTimer=0):ae<=7.5?y.state!=="attack"&&(y.state="attack",y.stateTimer=0,y.strafeTimer=.8+Math.random()*1.6):ae>=18?y.state==="idle"?(y.state="patrol",y.stateTimer=0):y.state!=="chase"&&(y.state="chase",y.stateTimer=0):(y.state==="idle"||y.state==="patrol")&&(y.state="chase",y.stateTimer=0):(y.state==="attack"||y.state==="chase"?(y.stateTimer+=Y,y.stateTimer>1.8&&(y.state="patrol",y.stateTimer=0,y.patrolTarget=null)):y.state!=="patrol"&&(y.state="patrol",y.stateTimer=0),fe&&ae<14&&(y.state="chase",y.stateTimer=0));let Te=new E,ke=y.group.rotation.y,He=!1,R=0;if(y.state==="idle")y.stateTimer+=Y,y.stateTimer>y.idleDur&&(y.state="patrol",y.stateTimer=0,y.patrolTarget=null,y.idleDur=.9+Math.random()*1.2),ue&&ae<16&&(y.state="chase",y.stateTimer=0),ue&&(ke=Math.atan2(H.x-y.group.position.x,H.z-y.group.position.z));else if(y.state==="patrol"){if(y.stateTimer+=Y,!y.patrolTarget||y.group.position.distanceTo(y.patrolTarget)<.9||y.stateTimer>9){let it=null;if(Ee&&!ue&&ae<14)it=Ee;else if(Math.random()<.55&&ee.length&&Math.random()<.35)it=ee[Math.floor(Math.random()*ee.length)].clone();else if(Math.random()<.62&&t.length){const bt=t[Math.floor(Math.random()*t.length)].clone();bt.x+=(Math.random()-.5)*6,bt.z+=(Math.random()-.5)*6,bt.y=0,it=bt}else if(Ut.length){const bt=Ut[Math.floor(Math.random()*Ut.length)],zt=new E;bt.getWorldPosition(zt),it=zt.clone(),it.x+=(Math.random()-.5)*5,it.z+=(Math.random()-.5)*5,it.y=0,it.x=Math.max(-27,Math.min(27,it.x)),it.z=Math.max(-27,Math.min(27,it.z))}else it=new E((Math.random()-.5)*28,0,(Math.random()-.5)*28);y.patrolTarget=it,y.stateTimer=0}if(y.patrolTarget){const it=new E().subVectors(y.patrolTarget,y.group.position);it.y=0,it.length()>.15&&(it.normalize(),Te.copy(it),ke=Math.atan2(it.x,it.z),He=!0,R=.8),ue&&ae<13&&(y.state="chase",y.stateTimer=0)}}else if(y.state==="chase"){y.stateTimer+=Y;const it=new E(H.x-y.group.position.x,0,H.z-y.group.position.z),bt=it.length();if(!ue&&fe&&ae<14){const zt=new E(-it.z,0,it.x).normalize().multiplyScalar(y.strafeDir);Te.copy(fe).multiplyScalar(.55).addScaledVector(zt,.45),Te.normalize(),ke=Math.atan2(Te.x,Te.z),He=!0,R=.9}else if(bt>.2&&(it.normalize(),Te.copy(it),ke=Math.atan2(it.x,it.z)),He=bt>2.1,R=1.9,ue&&bt<7.8&&(y.state="attack",y.stateTimer=0,y.strafeTimer=1+Math.random()*1.4),!ue&&bt>3){const zt=new E(y.group.position.x,.9,y.group.position.z),Kt=Te.clone().multiplyScalar(1.2).add(zt);Ft(zt,Kt,Ut)||(Te.set(-it.z,0,it.x).multiplyScalar(y.strafeDir),ke=Math.atan2(Te.x,Te.z),ae<14&&(R=.9))}}else if(y.state==="attack"){y.stateTimer+=Y,y.strafeTimer-=Y;const it=new E(H.x-y.group.position.x,0,H.z-y.group.position.z),bt=it.length();if(ke=Math.atan2(it.x,it.z),y.strafeTimer<=0){y.strafeDir*=-1,y.strafeTimer=1.1+Math.random()*1.9;const ne=new E(-it.z,0,it.x).normalize().multiplyScalar(y.strafeDir*1.4).add(y.group.position),de=new E(y.group.position.x,.9,y.group.position.z);Ft(de,new E(ne.x,.9,ne.z),Ut)||(y.strafeDir*=-1)}const zt=new E(-it.z,0,it.x).normalize().multiplyScalar(y.strafeDir);let Kt=0;if(bt>6.8?Kt=.45:bt<4.2&&(Kt=-.55),!ue&&ae<14){if(Te.copy(zt).multiplyScalar(.95).addScaledVector(it.normalize(),fe?.2:Kt*.5),Te.lengthSq()>.01&&(Te.normalize(),He=!0,R=.9),Ee){const ne=new E().subVectors(Ee,y.group.position);ne.y=0,ne.length()<4&&Te.copy(ne.normalize())}}else Te.copy(zt).multiplyScalar(.92).addScaledVector(it.normalize(),Kt),Te.lengthSq()>.01&&(Te.normalize(),He=!0,R=1.35);ue?y.stateTimer=0:(y.stateTimer+=Y,y.stateTimer>1.2&&(y.state="chase",y.stateTimer=0))}if(He&&Te.lengthSq()>.001){const it=Te.clone().multiplyScalar(R*Y),bt=y.group.position.clone().add(it);bt.x=Math.max(-28,Math.min(28,bt.x)),bt.z=Math.max(-28,Math.min(28,bt.z));const zt=new E(y.group.position.x,.45,y.group.position.z),Kt=new E(bt.x,.45,bt.z);if(Ft(zt,Kt,Ut))y.group.position.copy(bt);else{const ne=new E(y.group.position.x+it.x,y.group.position.y,y.group.position.z),de=new E(y.group.position.x,y.group.position.y,y.group.position.z+it.z),ye=Ft(zt,new E(ne.x,.45,ne.z),Ut),Oe=Ft(zt,new E(de.x,.45,de.z),Ut);ye?y.group.position.x=ne.x:Oe?y.group.position.z=de.z:(y.strafeDir*=-1,y.strafeTimer=.5)}y.group.position.y=0}let st=ke-y.group.rotation.y;for(;st>Math.PI;)st-=Math.PI*2;for(;st<-Math.PI;)st+=Math.PI*2;const ft=y.state==="attack"?6.2:y.state==="chase"?5:3.2;if(y.group.rotation.y+=st*Math.min(1,ft*Y),y.state==="attack"||y.state==="chase"&&ue&&ae<11)if(y.burstRemaining>0){if(y.burstInterval-=Y,y.burstInterval<=0){y.burstInterval=.095,ct.rifleTip.getWorldPosition(me);const it=me.clone();it.y=Math.max(it.y,1.32),It(y,it,Mt,ae,Ut),y.jawKick=.42,y.fingerCurlTarget=.42,y.burstRemaining--,y.burstRemaining===0&&(y.burstCooldown=1.1)}}else y.burstCooldown-=Y,y.burstCooldown<=0&&ue&&(y.burstRemaining=3,y.burstInterval=0);else y.burstCooldown=Math.min(y.burstCooldown,.35),y.burstRemaining>0&&(y.burstRemaining=0);if(He&&!y.isDead){y.walkCycle+=Y*(y.state==="chase"?9.2:y.state==="attack"?7.8:6.2);const it=y.walkCycle,bt=Math.sin(it),zt=Math.sin(it*.5);ct.lHip.rotation.x=bt*.58,ct.rHip.rotation.x=-bt*.58,ct.lKnee.rotation.x=Math.max(0,bt*.72-.12),ct.rKnee.rotation.x=Math.max(0,-bt*.72-.12),ct.lHip.rotation.z=bt*.06,ct.rHip.rotation.z=-bt*.06;const Kt=Math.max(0,Math.sin(it))*.04,ne=Math.max(0,Math.sin(it+Math.PI))*.04;ct.lBoot.position.y=-.4+Kt,ct.rBoot.position.y=-.4+ne,ct.lBoot.rotation.x=-Kt*1.2,ct.rBoot.rotation.x=-ne*1.2,ct.lKnee.position.y=-.42+Kt*.25,ct.rKnee.position.y=-.42+ne*.25;const de=.18;ct.lShoulder.rotation.x=.55+bt*de*.6,ct.rShoulder.rotation.x=.58-bt*de*.6,ct.lTwist.rotation.y=bt*.22,ct.rTwist.rotation.y=-bt*.22,ct.lElbow.rotation.z=bt*.06,ct.rElbow.rotation.z=-bt*.06,ct.torso.position.y=1.14+Math.abs(Math.sin(it))*.035,ct.torso.rotation.z=bt*.05,ct.torso.rotation.x=.05+Math.abs(bt)*.03,ct.headGroup.rotation.y=zt*.08,ct.headGroup.rotation.x=Math.abs(bt)*.04;const ye=Te.x*.18+bt*.05;if(ct.torso.rotation.z=bt*.05+ye*Math.sin(it*1.2)*.22+(y._strafeSig||0)*.12,ct.headGroup.rotation.z=-ye*.08,ct.headGroup.userData&&ct.headGroup.userData.brow){const Oe=Math.max(0,Math.sin(it))*.006;ct.headGroup.userData.brow.position.y=.082-Oe*.3}}else{const it=L*1.2+y.walkCycle*.15,bt=Math.sin(L*1.2*2*Math.PI)*.015;ct.torso.scale.set(1,1+bt,1),ct.chest.scale.set(1,1+bt*.6,1),ct.torso.position.y=1.14+bt*.35,ct.torso.rotation.x=Math.sin(it*.7)*.02,ct.torso.rotation.z=Math.sin(it*.55)*.015,ct.headGroup.rotation.y=Math.sin(it*.62)*.07,ct.headGroup.rotation.x=Math.sin(it*.9)*.02+bt*.3,ct.lBoot.position.y=Pe.lerp(ct.lBoot.position.y,-.4,Y*6),ct.rBoot.position.y=Pe.lerp(ct.rBoot.position.y,-.4,Y*6),ct.lBoot.rotation.x=Pe.lerp(ct.lBoot.rotation.x,0,Y*6),ct.rBoot.rotation.x=Pe.lerp(ct.rBoot.rotation.x,0,Y*6),ct.lHip.rotation.x=Pe.lerp(ct.lHip.rotation.x,0,Y*4),ct.rHip.rotation.x=Pe.lerp(ct.rHip.rotation.x,0,Y*4),ct.lKnee.rotation.x=Pe.lerp(ct.lKnee.rotation.x,0,Y*4),ct.rKnee.rotation.x=Pe.lerp(ct.rKnee.rotation.x,0,Y*4),ct.lTwist.rotation.y=Pe.lerp(ct.lTwist.rotation.y,0,Y*4),ct.rTwist.rotation.y=Pe.lerp(ct.rTwist.rotation.y,0,Y*4),ct.lShoulder.rotation.x=Pe.lerp(ct.lShoulder.rotation.x,.55,Y*3),ct.rShoulder.rotation.x=Pe.lerp(ct.rShoulder.rotation.x,.58,Y*3),y.state==="attack"&&(ct.torso.rotation.y=Math.sin(it*.8)*.03)}y._recoilKick&&(ct.torso.rotation.x-=y._recoilKick*.55,ct.headGroup.rotation.x-=y._recoilKick*.32)}},_getEnemies(){return F},_getCount(){return F.filter(Y=>!Y.isDead).length}}}const An=Ht.tier==="low";function Gc(n,t,e,i){let o=0,s=500,r=[],a=0,l=0,u="idle",d=0,h=0,m=!1,f=0,x=[],g=null,p=null,c=null,_=null,v=null,M=0,P=null,T=!1;const A=18,Q=32,w=5;let S=0,k=null;function K(q){const Rt=45+10*q,Lt=Math.floor(Rt*Math.pow(1.12,Math.max(0,q-1))),vt=Math.min(2.8,1.2+.06*q);return{health:Lt,speed:vt}}function rt(){if(k)return k;let q=[];try{t&&typeof t.getSpawnPointsTerrain=="function"?q=t.getSpawnPointsTerrain():t&&Array.isArray(t.spawnPoints)&&(q=t.spawnPoints)}catch{}const Rt=[],Lt=An?8:10;for(let vt=0;vt<Lt;vt++){const F=vt/Lt*Math.PI*2+Math.random()*.22,L=26+Math.random()*1.8,dt=Math.cos(F)*L,Pt=Math.sin(F)*L,j=Math.max(-28,Math.min(28,dt)),It=Math.max(-28,Math.min(28,Pt));Rt.push(new E(j,.1,It))}if(q&&q.length)for(let vt=0;vt<Math.min(4,q.length);vt++){const F=q[vt];F&&F.isVector3?Rt.push(F.clone()):F&&typeof F.x=="number"&&Rt.push(new E(F.x,.1,F.z))}return k=Rt.slice(0,An?8:12),k}function z(){if(c)return;c=document.createElement("div"),c.id="zombieHUD",c.style.cssText="position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;";const q=document.createElement("div");q.id="zRound",q.style.cssText="font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);",q.textContent="ROUND 0";const Rt=document.createElement("div");Rt.id="zLeft",Rt.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",Rt.textContent="ZOMBIES LEFT: 0";const Lt=document.createElement("div");Lt.id="zPoints",Lt.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",Lt.textContent="POINTS: 500",c.append(q,Rt,Lt);const vt=document.createElement("div");vt.id="zPerks",vt.style.cssText="display:flex;gap:8px;margin-top:10px;";function F(It,Y,tt){const H=document.createElement("div");H.style.cssText="display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid "+tt+";border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);";const Mt=document.createElement("div");Mt.style.cssText="width:22px;height:22px;border-radius:4px;background:"+tt+";display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;",Mt.textContent=It;const St=document.createElement("div");return St.style.cssText="font-size:10px;font-weight:800;letter-spacing:0.5px;color:"+tt+";line-height:1;",St.innerHTML=Y+'<br><span style="opacity:0.7;font-weight:600">'+(Y==="JUGGER-NOG"?"HP+":"RELOAD+")+"</span>",H.append(Mt,St),H}const L=F("♥","JUGGER-NOG","#e63946"),dt=F("⚡","SPEED COLA","#2ec4b6");L.style.opacity="0.82",dt.style.opacity="0.82",L.title="Juggernog - Placeholder perk (increased health)",dt.title="Speed Cola - Placeholder perk (faster reload)",vt.append(L,dt),c.appendChild(vt),_={roundEl:q,leftEl:Rt,pointsEl:Lt,perks:vt};const Pt=document.getElementById("ui");Pt?Pt.appendChild(c):document.body.appendChild(c);const j=document.createElement("div");j.id="zRoundBanner",j.style.cssText="position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;",j.textContent="ROUND 1",Pt?Pt.appendChild(j):document.body.appendChild(j),v=document.createElement("div"),v.id="zBarrierPrompt",v.style.cssText="position:absolute;left:50%;top:62%;transform:translateX(-50%);z-index:7;pointer-events:none;background:rgba(10,14,18,0.88);color:#fff;padding:8px 14px;border-radius:6px;font-size:12px;font-weight:800;letter-spacing:0.6px;border:1px solid rgba(255,255,255,0.18);backdrop-filter:blur(6px);opacity:0;transition:opacity 0.18s;box-shadow:0 4px 14px rgba(0,0,0,0.5);",v.textContent="Hold [F] to Repair Barrier",Pt?Pt.appendChild(v):document.body.appendChild(v),c._banner=j}function at(q){z();const Rt=c._banner;if(Rt){Rt.textContent="ROUND "+q,Rt.style.opacity="1",Rt.style.transform="translate(-50%,-50%) scale(1.08)";try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}setTimeout(()=>{Rt.style.opacity="0",Rt.style.transform="translate(-50%,-50%) scale(0.88)"},1800);try{window.__hudPushKill&&window.__hudPushKill("ROUND "+q)}catch{}}}function J(){if(_||z(),_){_.roundEl.textContent="ROUND "+o;const q=r.filter(Lt=>!Lt.isDead).length,Rt=q+(a-l>0?a-l:0);_.leftEl.textContent="ZOMBIES LEFT: "+(q+Math.max(0,a-l)),_.leftEl.style.color=Rt<=3&&Rt>0?"#ffcc33":"#fff",_.pointsEl.textContent="POINTS: "+s}}function lt(q,Rt){if(s=Math.max(0,s+q),J(),Rt&&Rt.hit)try{window.__hudDamageNumber&&window.__hudDamageNumber(q,{x:50+(Math.random()*10-5),y:48})}catch{}q>0&&_&&_.pointsEl&&(_.pointsEl.style.transform="scale(1.12)",_.pointsEl.style.color="#a8ff7a",setTimeout(()=>{_.pointsEl&&(_.pointsEl.style.transform="scale(1)",_.pointsEl.style.color="#7CFF7A")},140))}function V(){const q=An?128:256,Rt=document.createElement("canvas");Rt.width=Rt.height=q;const Lt=Rt.getContext("2d");Lt.fillStyle="#5e6b5a",Lt.fillRect(0,0,q,q);const vt=["#4a5546","#6b7a65","#3f463d","#7a8a74","#525e4f"];for(let L=0;L<(An?18:42);L++){const dt=Math.random()*q,Pt=Math.random()*q,j=9+Math.random()*20,It=6+Math.random()*14;Lt.fillStyle=vt[L%vt.length],Lt.globalAlpha=.45+Math.random()*.25,Lt.beginPath(),Lt.ellipse(dt,Pt,j,It,Math.random()*Math.PI,0,Math.PI*2),Lt.fill()}Lt.globalAlpha=1;for(let L=0;L<(An?900:2600);L++){const dt=Math.random()*q,Pt=Math.random()*q;Lt.fillStyle=Math.random()<.5?"rgba(0,0,0,0.09)":"rgba(255,255,255,0.06)",Lt.fillRect(dt,Pt,1,1)}for(let L=0;L<4;L++){const dt=Math.random()*q*.7+q*.15,Pt=Math.random()*q*.6+q*.2,j=7+Math.random()*14,It=Lt.createRadialGradient(dt,Pt,0,dt,Pt,j);It.addColorStop(0,"rgba(92,18,18,0.52)"),It.addColorStop(.45,"rgba(72,14,14,0.32)"),It.addColorStop(1,"rgba(72,14,14,0)"),Lt.fillStyle=It,Lt.beginPath(),Lt.arc(dt,Pt,j,0,Math.PI*2),Lt.fill(),Lt.fillStyle="rgba(88,18,18,0.38)",Lt.fillRect(dt-1.2,Pt+j*.3,2.2,6+Math.random()*9)}Lt.strokeStyle="rgba(22,26,22,0.55)",Lt.lineWidth=1.1;for(let L=0;L<3;L++){const dt=Math.random()*q,Pt=Math.random()*q*.7+10;Lt.beginPath(),Lt.moveTo(dt,Pt),Lt.lineTo(dt+8+Math.random()*16,Pt+2+Math.random()*6),Lt.lineTo(dt+4+Math.random()*12,Pt+10+Math.random()*10),Lt.stroke(),Lt.fillStyle="rgba(18,22,18,0.9)",Lt.beginPath(),Lt.arc(dt+4,Pt+6,1.5,0,Math.PI*2),Lt.fill()}Lt.strokeStyle="rgba(0,0,0,0.18)",Lt.lineWidth=.6,Lt.setLineDash([3,4]);for(let L=12;L<q;L+=28)Lt.beginPath(),Lt.moveTo(0,L),Lt.lineTo(q,L),Lt.stroke();Lt.setLineDash([]);const F=new Kn(Rt);return F.wrapS=F.wrapT=ri,F.colorSpace=_n,F.anisotropy=An?1:4,F}const W=V(),C=new Et({color:9083782,roughness:.88,metalness:.03}),O=new Et({color:7241067,roughness:.9,metalness:.02}),gt=new Et({map:W,roughness:.96,metalness:.02,color:16777215}),B=new Et({map:W.clone(),roughness:.96,metalness:.02,color:14540253});try{B.map.repeat.set(.9,.9)}catch{}const N=new Et({color:16720384,emissive:16718344,emissiveIntensity:2.2,roughness:.35,metalness:.1}),Z=new mn({color:16726546,transparent:!0,opacity:.72}),$=new Et({color:4853776,roughness:.42,metalness:.08,emissive:2755082,emissiveIntensity:.22}),nt=new Et({color:13155496,roughness:.78,metalness:.05});function yt(q,Rt){return bo?new bo(q,Rt,An?4:6,An?6:10):new Fe(q,q,Rt,An?6:10)}const Bt=new xn(.19,An?7:14,An?5:10),et=new Dt(.52,.6,.3),ot=yt(.095,.26),U=yt(.082,.24),Nt=yt(.128,.36),pt=yt(.11,.34),Tt=new xn(.082,An?5:8,An?4:6),Wt=new Dt(.17,.11,.27),pe=new xn(.038,An?4:6,An?4:6);function Xt(){const q=new Ne,Rt=new I(et,gt.clone());Rt.position.set(0,1.08,0),Rt.castShadow=Ht.tier!=="low",Rt.receiveShadow=!0,Rt.material.color.offsetHSL((Math.random()-.5)*.04,0,(Math.random()-.5)*.08);const Lt=new I(new kn(.11,8),$.clone());Lt.position.set(.06,.08,.151),Lt.rotation.y=0,Math.random()<.72&&Rt.add(Lt),q.add(Rt);const vt=new Ne;vt.position.set(0,.38,.02),Rt.add(vt);const F=new I(Bt,C.clone());F.position.set(0,.13,.02),F.castShadow=!0,vt.add(F);const L=Math.random();if(L<.35){const bt=new I(new xn(.07,6,5,0,Math.PI*2,0,Math.PI*.55),nt.clone());bt.position.set(.08,.18,.08),bt.rotation.z=-.35,bt.scale.set(1,.9,.8),vt.add(bt),F.material.color.setHex(8030840)}else L<.55&&(F.scale.set(1,.92,.96),F.position.y=.1);const dt=new I(pe,N.clone());dt.position.set(-.068,.14,.145),vt.add(dt);const Pt=dt.clone();Pt.position.x=.068,vt.add(Pt);const j=new I(new xn(.058,6,6),Z.clone());j.position.copy(dt.position),j.position.z+=.02,j.scale.set(1,1,.6),vt.add(j);const It=j.clone();It.position.copy(Pt.position),It.position.z+=.02,vt.add(It);const Y=new I(new Dt(.11,.04,.06),O.clone());Y.position.set(0,.01,.11),vt.add(Y),vt.userData.jaw=Y,vt.userData.eyes=[dt,Pt],vt.userData.glow=[j,It];const tt=new Ne;tt.position.set(-.31,.14,0),Rt.add(tt);const H=new I(ot,gt.clone());H.position.set(0,-.14,0),H.castShadow=!0,tt.add(H);const Mt=new Ne;Mt.position.set(0,-.26,0),tt.add(Mt);const St=new I(U,C.clone());let y=Math.random()<.18;y&&(St.material=nt.clone(),St.scale.set(.88,.92,.88)),St.position.set(0,-.15,0),Mt.add(St);const ct=new I(Tt,y?nt.clone():C.clone());if(ct.position.set(0,-.22,0),Mt.add(ct),y){const bt=new I(new xn(.05,5,5),$.clone());bt.position.set(0,.06,0),ct.add(bt)}const At=new Ne;At.position.set(.31,.14,0),Rt.add(At);const oe=new I(ot,gt.clone());oe.position.set(0,-.14,0),oe.castShadow=!0,At.add(oe);const se=new Ne;se.position.set(0,-.26,0),At.add(se);const ue=new I(U,C.clone());let ae=Math.random()<.18;ae&&(ue.material=nt.clone(),ue.scale.set(.88,.92,.88)),ue.position.set(0,-.15,0),se.add(ue);const fe=new I(Tt,ae?nt.clone():C.clone());fe.position.set(0,-.22,0),se.add(fe);const Ee=new Ne;Ee.position.set(-.16,-.3,0),Rt.add(Ee);const Te=new I(Nt,B.clone());Te.position.set(0,-.2,0),Te.castShadow=!0,Ee.add(Te);const ke=new Ne;ke.position.set(0,-.38,0),Ee.add(ke);const He=new I(pt,B.clone());He.position.set(0,-.18,0),ke.add(He);const R=new I(Wt,new Et({color:1711130,roughness:.82}));if(R.position.set(0,-.4,.05),ke.add(R),Math.random()<.55){const bt=new I(new qe(.09,.22),gt.clone());bt.position.set(.08,-.12,.12),bt.rotation.y=Math.PI,bt.rotation.z=.15,bt.side=$e,Te.add(bt)}const st=new Ne;st.position.set(.16,-.3,0),Rt.add(st);const ft=new I(Nt,B.clone());ft.position.set(0,-.2,0),ft.castShadow=!0,st.add(ft);const mt=new Ne;mt.position.set(0,-.38,0),st.add(mt);const xt=new I(pt,B.clone());xt.position.set(0,-.18,0),mt.add(xt);const it=R.clone();if(it.position.set(0,-.4,.05),mt.add(it),Math.random()<.45){const bt=new I(new qe(.07,.18),gt.clone());bt.position.set(-.09,-.15,.12),bt.rotation.y=Math.PI,bt.side=$e,ft.add(bt)}return q.userData.refs={torso:Rt,headGroup:vt,head:F,jaw:Y,eyes:[dt,Pt],glow:[j,It],shoulderL:tt,elbowL:Mt,shoulderR:At,elbowR:se,hipL:Ee,kneeL:ke,hipR:st,kneeR:mt,bootL:R,bootR:it},q}function D(){const q=[{pos:[11.8,0,6.6],rot:.12,label:"A"},{pos:[-9.2,0,-2],rot:Math.PI/2,label:"B"},{pos:[.2,0,13.8],rot:0,label:"C"}],Rt=new Et({color:9075290,roughness:.92,metalness:.02}),Lt=new Et({color:7036490,roughness:.96}),vt=new Et({color:5917234,roughness:.9});x=[];for(let F=0;F<q.length;F++){const L=q[F],dt=new Ne;dt.position.set(L.pos[0],0,L.pos[2]),dt.rotation.y=L.rot,dt.userData.isBarrier=!0,dt.userData.barrierId=L.label,dt.userData.hp=3,dt.userData.maxHp=3,dt.userData.isDestroyed=!1;const Pt=new I(new Dt(.08,1.95,.32),vt);Pt.position.set(-1.05,.97,0),Pt.castShadow=!0,dt.add(Pt);const j=Pt.clone();j.position.x=1.05,dt.add(j);const It=new I(new Dt(2.18,.09,.32),vt);It.position.set(0,1.95,0),dt.add(It);const Y=new I(new Dt(2.18,.08,.32),vt);Y.position.set(0,.05,0),dt.add(Y);const tt=[];for(let Mt=0;Mt<3;Mt++){const St=.45+Mt*.52,y=new I(new Dt(1.92,.14,.06),Mt%2?Rt:Lt);y.position.set(0,St,.04),y.castShadow=!0;const ct=new I(new xn(.02,5,5),new Et({color:2763306}));ct.position.set(-.82,0,.04),y.add(ct);const At=ct.clone();At.position.x=.82,y.add(At),y.rotation.z=(Math.random()-.5)*.04,y.userData.plankIndex=Mt,dt.add(y),tt.push(y)}dt.userData.planks=tt,dt.userData.framePieces=[Pt,j,It,Y];const H=new I(new Dt(2.2,1.95,.34),new Et({visible:!1}));H.position.set(0,.97,0),H.visible=!1,dt.add(H);{const Mt=document.createElement("canvas");Mt.width=128,Mt.height=32;const St=Mt.getContext("2d");St.fillStyle="rgba(14,18,24,0.85)",St.fillRect(0,0,128,32),St.fillStyle="#ff3b3b",St.font="bold 14px monospace",St.textAlign="center",St.fillText("BARRIER "+L.label,64,20);const y=new Kn(Mt),ct=new Tr({map:y,transparent:!0}),At=new wc(ct);At.position.set(0,2.35,0),At.scale.set(1.6,.4,1),dt.add(At),dt.userData.labelSprite=At}n.add(dt),x.push(dt),t&&Array.isArray(t.colliders)&&dt.userData.hp>0}}function b(q,Rt){if(!q||q.userData.isDestroyed)return;q.userData.hp=Math.max(0,q.userData.hp-Rt);const Lt=q.userData.planks,vt=q.userData.hp;for(let F=0;F<Lt.length;F++){const L=Lt[F];if(F<vt)L.visible=!0,L.material.opacity=1,L.material.transparent=!1;else if(L.visible){L.visible=!1;const dt=L.clone();dt.visible=!0,dt.position.copy(L.getWorldPosition(new E)),n.add(dt),dt.position.y=.06,dt.rotation.z=Math.random()*.6-.3,dt.rotation.x=Math.PI/2*.15,setTimeout(()=>{dt.parent&&n.remove(dt)},4500),kt(L.getWorldPosition(new E))}}if(vt<=0){q.userData.isDestroyed=!0,q.userData.labelSprite&&(q.userData.labelSprite.material.opacity=.25);try{window.__hudPushKill&&window.__hudPushKill("BARRIER "+q.userData.barrierId+" DESTROYED")}catch{}}}function X(q){if(!q||q.userData.hp>=q.userData.maxHp)return;q.userData.hp++,q.userData.isDestroyed&&q.userData.hp>0&&(q.userData.isDestroyed=!1,q.userData.labelSprite&&(q.userData.labelSprite.material.opacity=1));const Rt=q.userData.planks,Lt=q.userData.hp;for(let vt=0;vt<Rt.length;vt++)vt<Lt&&(Rt[vt].visible=!0);try{window.__hudPushKill&&window.__hudPushKill("BARRIER "+q.userData.barrierId+" REPAIRED")}catch{}lt(10)}function kt(q){const Rt=new Qe,Lt=6,vt=new Float32Array(Lt*3);for(let j=0;j<Lt;j++)vt[j*3]=q.x+(Math.random()-.5)*.4,vt[j*3+1]=q.y+.2+Math.random()*.4,vt[j*3+2]=q.z+(Math.random()-.5)*.4;Rt.setAttribute("position",new Rn(vt,3));const F=new ba({color:9071418,size:.08,transparent:!0,opacity:.9}),L=new Cr(Rt,F);n.add(L);let dt=0;const Pt=setInterval(()=>{dt+=.06,F.opacity=Math.max(0,.9-dt*2),L.position.y+=.02,dt>.45&&(clearInterval(Pt),n.remove(L),Rt.dispose())},60)}function Ut(){const q=new E(2.5,.45,-7.5);q.x+=(Math.random()-.5)*2,q.z+=(Math.random()-.5)*2;const Rt=new Ne;Rt.position.copy(q),Rt.userData.isMysteryBox=!0;const Lt=new Et({color:1976890,roughness:.42,metalness:.32,emissive:662074,emissiveIntensity:.25}),vt=new Et({color:2771578,roughness:.35,metalness:.45,emissive:1731327,emissiveIntensity:.85,transparent:!0,opacity:.92}),F=new I(new Dt(.95,.85,.95),Lt);F.position.y=.42,F.castShadow=!0,F.receiveShadow=!0,Rt.add(F);const L=new I(new Dt(1.02,.22,1.02),vt);L.position.y=.96,L.castShadow=!0,Rt.add(L);{const It=document.createElement("canvas");It.width=128,It.height=128;const Y=It.getContext("2d");Y.clearRect(0,0,128,128),Y.fillStyle="rgba(20,30,50,0.0)",Y.fillRect(0,0,128,128),Y.shadowColor="#1a6aff",Y.shadowBlur=18,Y.fillStyle="#aaccff",Y.font="bold 86px monospace",Y.textAlign="center",Y.textBaseline="middle",Y.fillText("?",64,68),Y.shadowBlur=0,Y.strokeStyle="rgba(80,120,255,0.85)",Y.lineWidth=2.2,Y.strokeRect(6,6,116,116);const tt=new Kn(It),H=new mn({map:tt,transparent:!0,depthWrite:!1}),Mt=new I(new qe(.72,.72),H);Mt.position.set(0,.52,.51),Rt.add(Mt);const St=Mt.clone();St.rotation.y=Math.PI,St.position.z=-.51,Rt.add(St);const y=Mt.clone();y.rotation.y=Math.PI/2,y.position.set(.51,.52,0),Rt.add(y);const ct=Mt.clone();ct.rotation.y=-Math.PI/2,ct.position.set(-.51,.52,0),Rt.add(ct),Rt.userData.questionPlanes=[Mt,St,y,ct]}const dt=new Dt(.08,.65,.02),Pt=new Et({color:1731327,emissive:1731327,emissiveIntensity:1.8});for(let It=0;It<4;It++){const Y=It*Math.PI/2,tt=new I(dt,Pt);tt.position.set(Math.cos(Y)*.49,.45,Math.sin(Y)*.49),tt.rotation.y=-Y,Rt.add(tt)}const j=new Ui(1731327,An?.7:1.4,6,1.4);j.position.set(0,.9,0),Rt.add(j),p=j,Rt.userData.base=F,Rt.userData.lid=L,Rt.userData.light=j;{const It=document.createElement("canvas");It.width=256,It.height=48;const Y=It.getContext("2d");Y.fillStyle="rgba(10,16,28,0.88)",Y.fillRect(0,0,256,48),Y.fillStyle="#7ab8ff",Y.font="bold 16px monospace",Y.textAlign="center",Y.fillText("MYSTERY BOX",128,18),Y.fillStyle="rgba(180,200,255,0.85)",Y.font="10px monospace",Y.fillText("HOLD [F]  950 PTS  (PROTOTYPE FREE)",128,34);const tt=new Kn(It),H=new Tr({map:tt,transparent:!0}),Mt=new wc(H);Mt.position.set(0,1.75,0),Mt.scale.set(2.1,.42,1),Rt.add(Mt),Rt.userData.label=Mt}n.add(Rt),g=Rt}function Ot(){const q=rt(),Rt=q[Math.floor(Math.random()*q.length)].clone();Rt.x+=(Math.random()-.5)*1.2,Rt.z+=(Math.random()-.5)*1.2,Rt.x=Math.max(-28,Math.min(28,Rt.x)),Rt.z=Math.max(-28,Math.min(28,Rt.z));const Lt=K(o),vt=Xt();vt.position.copy(Rt),vt.position.y=0,vt.rotation.y=Math.atan2(e.getPosition().x-Rt.x,e.getPosition().z-Rt.z)+(Math.random()-.5)*.6;const F={id:++S,group:vt,maxHealth:Lt.health,health:Lt.health,speed:Lt.speed,isDead:!1,deathTimer:0,hitFlash:0,stagger:0,staggerDir:new E,staggerSpin:0,walkCycle:Math.random()*Math.PI*2,swayOffset:Math.random()*Math.PI*2,attackCooldown:0,barrierCooldown:0,barrierTarget:null,vel:new E,origColors:new Map,damage:14+Math.floor(o*.7)};return vt.traverse(L=>{L.isMesh&&L.material&&L.material.color&&(F.origColors.set(L,L.material.color.clone()),L.material.emissive&&F.origColors.set(L.material,L.material.emissive.clone()))}),vt.userData.isEnemy=!0,vt.userData.isZombie=!0,vt.userData.zombieId=F.id,vt.userData.hit=(L,dt)=>ee(F,L),vt.traverse(L=>{L.isMesh&&(L.userData.isZombieMesh=!0)}),n.add(vt),r.push(F),F}function ee(q,Rt,Lt){if(!q.isDead){q.health-=Rt,q.hitFlash=.12,q.stagger=1.8,q.staggerDir.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3),q.staggerSpin=(Math.random()-.5)*.8,q.lastDamageTime=performance.now(),lt(10,{hit:!0}),q.group.traverse(vt=>{vt.isMesh&&vt.material&&vt.material.color&&(vt.material.color.setHex(16777215),vt.material.emissive&&vt.material.emissive.setHex(5592405))});try{window.__hudDamageNumber&&window.__hudDamageNumber(Rt,{x:52+Math.random()*8,y:48})}catch{}if(q.health<=0)Yt(q);else{const vt=e.getPosition(),F=new E().subVectors(q.group.position,vt).normalize();F.y=0,q.group.position.addScaledVector(F,.18)}}}function Yt(q,Rt){if(!q.isDead){q.isDead=!0,q.deathTimer=0,lt(60),J(),q.group.rotation.z=(Math.random()<.5?1:-1)*(.2+Math.random()*.35),q.group.rotation.x=Math.PI/2*.22,q.stagger=3.2,q.staggerSpin=(Math.random()-.5)*1.2,qt(q.group.position.clone());try{window.__hudPushKill&&window.__hudPushKill("ZOMBIE ELIMINATED"),window.__onEnemyKilled&&window.__onEnemyKilled("ZOMBIE",!1)}catch{}setTimeout(()=>{const Lt=r.indexOf(q);Lt>=0&&r.splice(Lt,1),q.group.parent&&n.remove(q.group)},3800)}}function qt(q,Rt){const Lt=new kn(.38+Math.random()*.22,8),vt=new Et({color:4853776,roughness:.92,transparent:!0,opacity:.72,depthWrite:!1}),F=new I(Lt,vt);if(F.rotation.x=-Math.PI/2,F.position.set(q.x,.018,q.z),F.position.x+=(Math.random()-.5)*.2,F.position.z+=(Math.random()-.5)*.2,n.add(F),setTimeout(()=>{F.parent&&n.remove(F)},12e3),!An){const dt=new Qe,Pt=new Float32Array(8*3);for(let H=0;H<8;H++)Pt[H*3]=q.x,Pt[H*3+1]=1+Math.random()*.3,Pt[H*3+2]=q.z;dt.setAttribute("position",new Rn(Pt,3));const j=new ba({color:7999504,size:.09,transparent:!0,opacity:.95}),It=new Cr(dt,j);n.add(It);let Y=0;const tt=setInterval(()=>{Y+=.05,j.opacity=Math.max(0,.95-Y*2.2),It.position.y+=.015,Y>.45&&(clearInterval(tt),n.remove(It),dt.dispose())},50)}}function le(q,Rt){let Lt=null,vt=999;for(const dt of x){const Pt=Math.hypot(dt.position.x-Rt.x,dt.position.z-Rt.z);Pt<vt&&(vt=Pt,Lt=dt)}const F=Lt&&vt<1.85&&Lt.userData.hp<Lt.userData.maxHp;v&&(F?(v.style.opacity="1",v.textContent=Lt.userData.isDestroyed?"Hold [F] to Rebuild Barrier":"Hold [F] to Repair Barrier ("+Lt.userData.hp+"/3)"):Lt&&vt<1.85&&Lt.userData.isDestroyed?(v.style.opacity="1",v.textContent="Hold [F] to Rebuild Barrier"):v.style.opacity="0");let L=!1;try{(T||window.__keys&&window.__keys.KeyF)&&(L=!0)}catch{}if(F&&L){if(P!==Lt&&(P=Lt,M=0),M+=q,M>=.42&&(X(Lt),M=0),v){const dt=Math.floor(M/.42*100);v.textContent="Repairing... "+dt+"%  ("+Lt.userData.hp+"/3)"}}else M=0,P&&!L&&(P=null)}function me(){o++,a=6*o,l=0,u="spawning",h=0,m=!0,at(o),J(),h=.6}function Ft(){return m}function Ae(){return o}function Ce(){m=!1;for(const q of r)q.group&&q.group.parent&&n.remove(q.group);r.length=0;for(const q of x)q.parent&&n.remove(q);x.length=0,g&&g.parent&&n.remove(g),g=null,c&&c.parentNode&&c.parentNode.removeChild(c),c&&c._banner&&c._banner.parentNode&&c._banner.parentNode.removeChild(c._banner),v&&v.parentNode&&v.parentNode.removeChild(v),c=null,window.removeEventListener("keydown",_e),window.removeEventListener("keyup",Zt)}function _e(q){if(q.code==="KeyF"&&(T=!0),q.code==="KeyF"&&m){const Rt=e.getPosition(),Lt=new E;try{const L=e&&e.camera||window.__camera||n&&n.userData&&n.userData.camera;L&&L.getWorldDirection?L.getWorldDirection(Lt):Lt.set(0,0,-1)}catch{Lt.set(0,0,-1)}let vt=null,F=1.6;for(const L of r){if(L.isDead)continue;const dt=Math.hypot(L.group.position.x-Rt.x,L.group.position.z-Rt.z);dt<F&&new E().subVectors(L.group.position,Rt).normalize().dot(Lt)>.45&&(vt=L,F=dt)}if(vt){ee(vt,75,vt.group.position.clone()),lt(10);try{window.__hudDamageNumber&&window.__hudDamageNumber(75,{x:51,y:50})}catch{}}}}function Zt(q){q.code==="KeyF"&&(T=!1)}window.addEventListener("keydown",_e),window.addEventListener("keyup",Zt);function ce(q,Rt){if(!m)return;f+=q;const Lt=Rt&&Rt.isVector3?Rt:e.getPosition?e.getPosition():new E(0,1.7,8);if(z(),g){if(g.position.y=Math.sin(f*.9)*.04,g.rotation.y+=q*.28,p&&(p.intensity=(An?.7:1.3)+Math.sin(f*2.1)*.18,c&&c._banner&&(g.userData.lid.material.emissiveIntensity=.85+Math.sin(f*1.7)*.22)),g.userData.questionPlanes){const F=.78+Math.sin(f*1.9)*.18;for(const L of g.userData.questionPlanes)L.material.opacity=F}if(Math.hypot(g.position.x-Lt.x,g.position.z-Lt.z)<1.9&&T&&(!g._cooldown||performance.now()-g._cooldown>800)){g._cooldown=performance.now();try{i&&i.addAmmo&&i.addAmmo(30)}catch{}lt(-0);try{window.__hudPushKill&&window.__hudPushKill("MYSTERY BOX: AMMO +30")}catch{}g.userData.lid.material.emissiveIntensity=2.2,setTimeout(()=>{g&&g.userData.lid&&(g.userData.lid.material.emissiveIntensity=.85)},180)}}if(le(q,Lt),u==="spawning"||u==="active"){l<a&&(h-=q,h<=0&&(r.filter(dt=>!dt.isDead).length<(An?A:Q)?(Ot(),l++,J(),h=Math.max(.22,.9-o*.04)+Math.random()*.18,An&&(h*=1.1)):h=.18));const vt=r.filter(F=>!F.isDead).length;if(l>=a&&vt===0){u="intermission",d=w;try{window.__hudPushKill&&window.__hudPushKill("ROUND "+o+" COMPLETE")}catch{}J()}else l>=a&&(u="active")}else u==="intermission"&&(d-=q,_&&_.leftEl&&(_.leftEl.textContent="NEXT ROUND IN "+Math.ceil(d)+"s   |   POINTS: "+s),d<=0&&me());for(let vt=0;vt<r.length;vt++){const F=r[vt];if(F.isDead){if(F.deathTimer+=q,F.hitFlash>0)if(F.hitFlash=Math.max(0,F.hitFlash-q*4.5),F.hitFlash<=0)F.group.traverse(At=>{if(At.isMesh&&At.material){const oe=F.origColors.get(At);oe&&At.material.color&&At.material.color.copy(oe);const se=F.origColors.get(At.material);se&&At.material.emissive&&At.material.emissive.copy(se)}});else{const At=1-F.hitFlash/.12;if(At>.5){const oe=(At-.5)/.5;F.group.traverse(se=>{if(se.isMesh&&se.material&&se.material.color){const ue=F.origColors.get(se);if(!ue)return;if(se.material.color.lerpColors(new xe(16777215),ue,oe),se.material.emissive){const ae=F.origColors.get(se.material);ae&&se.material.emissive.lerpColors(new xe(6710886),ae,oe)}}})}}if(F.stagger>0&&(F.group.position.addScaledVector(F.staggerDir,Math.min(F.stagger,q*2.8)),F.group.rotation.z+=F.staggerSpin*q*.6,F.stagger-=q*2.2,F.stagger<0&&(F.stagger=0)),F.deathTimer>1.2&&(F.group.position.y=Pe.lerp(F.group.position.y,-.22,q*.35),F.group.userData.refs&&F.group.userData.refs.headGroup)){const At=F.group.userData.refs.headGroup;if(At.userData.glow)for(const oe of At.userData.glow)oe.material.opacity=Math.max(0,.72-(F.deathTimer-1.2)*.9);if(At.userData.eyes)for(const oe of At.userData.eyes)oe.material.emissiveIntensity=Math.max(0,2.2-(F.deathTimer-1.2)*2.8)}continue}if(F.hitFlash>0)if(F.hitFlash=Math.max(0,F.hitFlash-q*4.2),F.hitFlash<=0)F.group.traverse(At=>{if(At.isMesh&&At.material){const oe=F.origColors.get(At);oe&&At.material.color&&At.material.color.copy(oe);const se=F.origColors.get(At.material);se&&At.material.emissive&&At.material.emissive.copy(se)}});else{const At=1-F.hitFlash/.12;if(At>.55){const oe=(At-.55)/.45;F.group.traverse(se=>{if(se.isMesh&&se.material&&se.material.color){const ue=F.origColors.get(se);if(!ue)return;if(se.material.color.lerpColors(new xe(16777215),ue,oe),se.material.emissive){const ae=F.origColors.get(se.material);ae&&se.material.emissive.lerpColors(new xe(7829367),ae,oe)}}})}}if(F.stagger>0){const At=Math.min(F.stagger,q*4.2);F.group.position.addScaledVector(F.staggerDir,At),F.group.rotation.y+=F.staggerSpin*q*1.6,F.stagger-=q*3.2,F.staggerSpin-=q*1.2,F.stagger<0&&(F.stagger=0),F.staggerSpin<0&&(F.staggerSpin=0)}let L=Lt.clone();L.y=0;let dt=!1,Pt=null;if(F.barrierCooldown>0&&(F.barrierCooldown-=q),F.barrierCooldown<=0)for(const At of x){if(At.userData.isDestroyed)continue;const oe=Math.hypot(At.position.x-F.group.position.x,At.position.z-F.group.position.z),se=Math.hypot(Lt.x-At.position.x,Lt.z-At.position.z),ue=Math.hypot(Lt.x-F.group.position.x,Lt.z-F.group.position.z);if(oe<1.85&&ue>se-1.2){dt=!0,Pt=At,L=At.position.clone(),L.y=0;break}}const j=new E().subVectors(L,F.group.position);j.y=0;const It=j.length();let tt=(It>.15?Math.atan2(j.x,j.z):F.group.rotation.y)-F.group.rotation.y;for(;tt>Math.PI;)tt-=Math.PI*2;for(;tt<-Math.PI;)tt+=Math.PI*2;const H=dt?3.8:2.6;F.group.rotation.y+=tt*Math.min(1,H*q*.9);const Mt=F.speed*(dt?.72:1),St=dt?1.45:1.25;if(It>St&&!F.isDead){j.normalize();const At=j.clone().multiplyScalar(Mt*q),oe=F.group.position.clone().add(At);oe.x=Math.max(-28,Math.min(28,oe.x)),oe.z=Math.max(-28,Math.min(28,oe.z)),dt&&It<1.85||F.group.position.copy(oe),F.group.position.y=0}else if(F.attackCooldown-=q,F.attackCooldown<=0)if(dt&&Pt){b(Pt,1),F.attackCooldown=1.15+Math.random()*.45,F.stagger=.22,F.staggerDir.set(0,0,-.08),kt(Pt.position.clone().add(new E(0,1,0)));try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}F.barrierCooldown=.35}else{const At=F.damage;try{if(e&&typeof e.takeDamage=="function")e.takeDamage(At);else{const oe=document.getElementById("health");if(oe){const se=parseInt(oe.textContent||"100",10);oe.textContent=String(Math.max(0,se-At))}window.__hudTakeDamage&&window.__hudTakeDamage(At,"front")}}catch{}F.attackCooldown=1.35+Math.random()*.6-Math.min(.45,o*.03),F.stagger=.35,F.staggerDir.set(0,0,.12);try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}}const y=F.group.userData.refs;if(!y)continue;if(It>St+.05&&!dt){F.walkCycle+=q*(4.2+F.speed*.65);const At=F.walkCycle,oe=Math.sin(At*.55+F.swayOffset)*.18,se=Math.abs(Math.sin(At))*.04;y.torso.rotation.z=oe*.55,y.torso.rotation.x=.12+oe*.12+se*.5,y.torso.position.y=1.08+se*.9,y.headGroup.rotation.z=-oe*.45,y.headGroup.rotation.x=.22+Math.sin(At*.7)*.04,y.headGroup.position.y=.38+Math.sin(At*1.1)*.015,y.shoulderL.rotation.x=.45+Math.sin(At)*.32,y.shoulderR.rotation.x=.52-Math.sin(At)*.28,y.shoulderL.rotation.z=.12+oe*.18,y.shoulderR.rotation.z=-.1-oe*.18,y.elbowL.rotation.x=.22+Math.cos(At*.9)*.12,y.elbowR.rotation.x=.18-Math.cos(At*.9)*.1,y.hipL.rotation.x=Math.sin(At)*.38,y.hipR.rotation.x=-Math.sin(At)*.38,y.kneeL.rotation.x=Math.max(0,Math.sin(At)*.42),y.kneeR.rotation.x=Math.max(0,-Math.sin(At)*.42);const ue=Math.max(0,Math.sin(At))*.045,ae=Math.max(0,Math.sin(At+Math.PI))*.045;y.bootL.position.y=-.4+ue,y.bootR.position.y=-.4+ae,y.torso.rotation.y=oe*.18;const fe=.85+Math.sin(f*2.8+F.swayOffset)*.24;if(y.headGroup.userData.glow)for(const Ee of y.headGroup.userData.glow)Ee.material.opacity=.62*fe;if(y.headGroup.userData.eyes)for(const Ee of y.headGroup.userData.eyes)Ee.material.emissiveIntensity=2+Math.sin(f*3.1)*.22}else{const At=f*.9+F.swayOffset,oe=Math.sin(At*1.4)*.015;if(y.torso.rotation.z=Math.sin(At*.7)*.07+(dt?Math.sin(f*6)*.06:0),y.torso.rotation.x=.14+oe,y.torso.position.y=1.08+oe*.35,y.headGroup.rotation.z=Math.sin(At*.8)*.05,y.headGroup.rotation.x=.24+Math.sin(At)*.03,y.shoulderL.rotation.x=Pe.lerp(y.shoulderL.rotation.x,.62,q*2.2),y.shoulderR.rotation.x=Pe.lerp(y.shoulderR.rotation.x,.58,q*2.2),y.elbowL.rotation.x=Pe.lerp(y.elbowL.rotation.x,.32,q*2.2),y.elbowR.rotation.x=Pe.lerp(y.elbowR.rotation.x,.28,q*2.2),y.hipL.rotation.x=Pe.lerp(y.hipL.rotation.x,0,q*3),y.hipR.rotation.x=Pe.lerp(y.hipR.rotation.x,0,q*3),y.kneeL.rotation.x=Pe.lerp(y.kneeL.rotation.x,0,q*3),y.kneeR.rotation.x=Pe.lerp(y.kneeR.rotation.x,0,q*3),dt){const se=Math.sin(f*7.2)*.42;y.shoulderL.rotation.x=.85+se*.22,y.shoulderR.rotation.x=.9-se*.18,y.torso.rotation.x=.18+Math.abs(se)*.12}else if(It<=St){const se=Math.sin(f*8.5)*.55;y.shoulderL.rotation.x=.92+se*.18,y.shoulderR.rotation.x=.88-se*.2}}}J()}return z(),D(),Ut(),J(),window.__zombiePoints=s,Object.defineProperty(window,"__zombiePoints",{get:()=>s,set:q=>{s=q,J()}}),{startRound:me,update:ce,getRound:Ae,dispose:Ce,isActive:Ft,getPoints:()=>s,addPoints:lt,barriers:x,getZombies:()=>r,getSpawnPoints:rt}}const Qi=Ht.tier==="low";function Vc(n,t,e,i){let o=!1,s=0,r=0,a=[],l=[],u=null,d=null,h=null,m=null,f=null,x=null,g=null,p=null,c=0,_=null;const v=[{radius:280,duration:30,damage:1.2},{radius:190,duration:28,damage:1.8},{radius:120,duration:28,damage:2.6},{radius:72,duration:26,damage:3.8},{radius:42,duration:24,damage:5.2},{radius:22,duration:20,damage:7}];let M=new E(0,0,0),P=v[0].radius;v[0].radius;let T=v[0].radius;function A(et){const ot=Math.max(0,Math.ceil(et));return Math.floor(ot/60)+":"+String(ot%60).padStart(2,"0")}function Q(){try{if(window.__enemyCount&&typeof window.__enemyCount=="function")return Math.max(0,window.__enemyCount()|0);if(window.__enemies&&typeof window.__enemies._getCount=="function")return Math.max(0,window.__enemies._getCount()|0)}catch{}return 0}function w(){return a.filter(et=>et.userData.alive).length+Q()+1}function S(){return a.filter(et=>et.userData.alive).length===0&&Q()===0}function k(){if(m)return;m=document.createElement("div"),m.id="pubgHUD";const et=Ht.tier!=="low";m.style.cssText="position:fixed;top:14px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:16px;padding:8px 16px;background:rgba(14,18,24,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:10px;color:#fff;font-family:system-ui,sans-serif;z-index:11;"+(et?"backdrop-filter:blur(6px);":"");const ot=document.createElement("div");ot.style.cssText="display:flex;flex-direction:column;gap:2px;";const U=document.createElement("div");U.textContent="SAFE ZONE",U.style.cssText="font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;",x=document.createElement("div"),x.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.3px;",x.textContent="PHASE 1/6",g=document.createElement("div"),g.style.cssText="font-size:10px;letter-spacing:0.7px;opacity:0.72;font-weight:700;",g.textContent="SHRINK IN 0:30",p=document.createElement("div"),p.style.cssText="font-size:10px;letter-spacing:0.7px;opacity:0.58;font-weight:700;",p.textContent="RADIUS 280m";const Nt=document.createElement("div");Nt.style.cssText="width:120px;height:4px;background:rgba(255,255,255,0.18);border-radius:2px;overflow:hidden;";const pt=document.createElement("div");pt.id="pubgZoneBar",pt.style.cssText="width:0%;height:100%;background:#2ecc71;transition:width 0.3s;",Nt.appendChild(pt),ot.appendChild(U),ot.appendChild(x),ot.appendChild(g),ot.appendChild(p),ot.appendChild(Nt);const Tt=document.createElement("div");Tt.style.cssText="display:flex;flex-direction:column;align-items:flex-end;gap:1px;min-width:70px;";const Wt=document.createElement("div");Wt.textContent="ALIVE",Wt.style.cssText="font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;",f=document.createElement("div"),f.style.cssText="font-size:18px;font-weight:900;color:#ffcc33;",f.textContent="--",Tt.appendChild(Wt),Tt.appendChild(f),m.appendChild(ot),m.appendChild(Tt),document.body.appendChild(m),h=document.createElement("div"),h.id="pubgWarning",h.style.cssText="position:fixed;left:50%;top:46%;transform:translate(-50%,-50%);padding:10px 18px;background:rgba(180,30,40,0.88);border:1px solid rgba(255,255,255,0.22);border-radius:8px;color:#fff;font-weight:800;font-size:14px;letter-spacing:0.6px;display:none;pointer-events:none;z-index:12;text-align:center;",h.textContent="WARNING: BLUE ZONE!",document.body.appendChild(h)}function K(et,ot){h||k(),ot&&(h.textContent=ot),h.style.display=et?"block":"none"}function rt(){const et=new eo(1,1,Qi?32:64),ot=new mn({color:3066993,transparent:!0,opacity:.22,side:$e,depthWrite:!1});u=new I(et,ot),u.rotation.x=-Math.PI/2,u.position.set(M.x,.08,M.z),u.renderOrder=2,n.add(u);const U=[],Nt=Qi?48:96;for(let Wt=0;Wt<=Nt;Wt++){const pe=Wt/Nt*Math.PI*2;U.push(new E(Math.cos(pe),0,Math.sin(pe)))}const pt=new Qe().setFromPoints(U),Tt=new Hi({color:3066993,linewidth:1,transparent:!0,opacity:.85});d=new Gi(pt,Tt),d.position.set(M.x,.12,M.z),n.add(d),z(P)}function z(et){if(!u||!d)return;const ot=et;u.scale.set(ot,ot,1),d.scale.set(ot,ot,1)}function at(){u&&(n.remove(u),u.geometry.dispose(),u.material.dispose(),u=null),d&&(n.remove(d),d.geometry.dispose(),d.material.dispose(),d=null)}function J(){const et=Qi?8:14;a.length=0,t&&t.spawnPoints&&t.spawnPoints,window.__terrain&&window.__terrain.worldSize;for(let ot=0;ot<et;ot++){const U=Math.random()*Math.PI*2,Nt=80+Math.random()*120,pt=M.x+Math.cos(U)*Nt,Tt=M.z+Math.sin(U)*Nt,Wt=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(pt,Tt):0,pe=new E(pt,Wt+.12,Tt),Xt=new Ne;Xt.name="pubg_bot_"+ot;const D=new Dt(.55,.95,.35),b=new Et({color:4872810,roughness:.82,metalness:.08}),X=new I(D,b);X.position.y=.62,X.castShadow=!Qi,X.receiveShadow=!Qi,Xt.add(X);const kt=new Dt(.32,.32,.32),Ut=new Et({color:14272421,roughness:.9}),Ot=new I(kt,Ut);Ot.position.set(0,1.22,0),Ot.castShadow=!Qi,Xt.add(Ot);const ee=new I(new Dt(.08,.08,.58),new Et({color:1711394}));ee.position.set(.22,.65,.22),Xt.add(ee),Xt.position.copy(pe),Xt.userData.hp=100,Xt.userData.maxHp=100,Xt.userData.speed=2.2+Math.random()*.6,Xt.userData.state="patrol",Xt.userData.target=new E(M.x,0,M.z),Xt.userData.shootCd=.6+Math.random()*1.2,Xt.userData.alive=!0,Xt.userData.isEnemy=!0,n.add(Xt),a.push(Xt);const Yt=a.length-1;Xt.userData.hit=qt=>Z(Yt,qt),Xt.traverse(qt=>{qt&&qt.isMesh&&(qt.userData.isEnemy=!0,qt.userData.hit=Xt.userData.hit)})}a.length+1,V()}function lt(){const et=[[12,-6],[-14,8],[6,14],[-8,-14],[18,4]];for(let ot=0;ot<et.length;ot++){const U=et[ot][0],Nt=et[ot][1],pt=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(U,Nt):0,Tt=new Ne;Tt.name="loot_"+ot,Tt.position.set(U,pt+.22,Nt);const Wt=new I(new Dt(.72,.42,.72),new Et({color:9071146,roughness:.72,metalness:.12}));Wt.position.y=.21,Wt.castShadow=!Qi,Tt.add(Wt);const pe=new I(new Dt(.74,.08,.74),new Et({color:11899450}));pe.position.y=.46,Tt.add(pe);const Xt=new Ui(16763989,.9,6);Xt.position.set(0,.6,0),Tt.add(Xt),n.add(Tt),l.push({group:Tt,taken:!1,pos:new E(U,pt,Nt)})}}function V(){f||k();const et=w();if(f.textContent=et,x&&(x.textContent="PHASE "+(s+1)+"/6  ● "+et+" ALIVE"),g){const U=v[s]?v[s].duration:0,Nt=Math.max(0,U-r);g.textContent="SHRINK IN "+A(Nt)}p&&(p.textContent="RADIUS "+Math.max(0,Math.round(P))+"m");const ot=document.getElementById("pubgZoneBar");if(ot){const U=v[s]?v[s].duration:1,Nt=Math.max(0,Math.min(100,(1-r/U)*100));ot.style.width=Nt+"%",ot.style.background=Nt<28?"#e74c3c":Nt<55?"#f1c40f":"#2ecc71"}}function W(){o||(o=!0,s=0,r=0,_=null,T=v[0].radius,P=T,v[1]&&v[1].radius,M.set((Math.random()-.5)*40,0,(Math.random()-.5)*40),k(),m.style.display="flex",rt(),J(),lt(),V(),console.log("[PUBG] Battle Royale started phase 0 center",M,"radius",P),window.__pubgCenter=M,window.__pubgRadius=()=>P)}function C(){o=!1,a.forEach(et=>n.remove(et)),a.length=0,l.forEach(et=>n.remove(et.group)),l.length=0,at(),m&&(m.style.display="none"),K(!1)}function O(et,ot){const U=et.x-M.x,Nt=et.z-M.z,Tt=Math.hypot(U,Nt)>P;if(Tt){K(!0,"OUTSIDE SAFE ZONE — RETURN!");const Wt=v[s]?v[s].damage:2;if(c+=Wt*ot,c>.11){c=0;try{document.dispatchEvent(new CustomEvent("pubg-zone-damage",{detail:{dps:Wt}}))}catch{}try{window.__takeZoneDamage&&window.__takeZoneDamage(4+s*2)}catch{}}u&&(u.material.opacity=.12+Math.sin(Date.now()*.006)*.08+.12,u.material.color.setHex(15158332))}else K(!1),u&&(u.material.opacity=.18,u.material.color.setHex(3066993));return Tt}function gt(et,ot){for(const Nt of a){if(!Nt.userData.alive)continue;const pt=Nt.position,Wt=ot.clone().sub(pt).length();let pe=M.clone(),Xt=!1;Wt<28&&(pe=ot.clone(),Xt=!0);const D=new E(pe.x-pt.x,0,pe.z-pt.z);if(D.length()<.02)continue;D.normalize();const X=Math.atan2(-D.x,-D.z);let kt=Nt.rotation.y,Ut=X-kt;for(;Ut>Math.PI;)Ut-=Math.PI*2;for(;Ut<-Math.PI;)Ut+=Math.PI*2;Nt.rotation.y+=Ut*Math.min(1,4*et);const Ot=Nt.userData.speed*(Xt?1.35:.9),ee=D.multiplyScalar(Ot*et);let Yt=pt.x+ee.x,qt=pt.z+ee.z,le=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(Yt,qt):0;for(const Ft of a){if(Ft===Nt||!Ft.userData.alive)continue;if((Ft.position.x-Yt)*(Ft.position.x-Yt)+(Ft.position.z-qt)*(Ft.position.z-qt)<1.1){Yt-=ee.x*.55,qt-=ee.z*.55;break}}if(Nt.position.set(Yt,le+.12,qt),Xt&&Wt<26){if(Nt.userData.shootCd-=et,Nt.userData.shootCd<=0){if(Nt.userData.shootCd=.85+Math.random()*1.1,Math.random()<.18){try{window.__takeBotDamage&&window.__takeBotDamage(8+Math.random()*6,Nt.position.clone())}catch{}try{document.dispatchEvent(new CustomEvent("pubg-bot-hit",{detail:{dmg:10,from:Nt.position.clone()}}))}catch{}}if(!Qi){const Ft=new Ui(16764040,1.2,6);Ft.position.copy(Nt.position),Ft.position.y+=1,Ft.position.x+=Math.sin(Nt.rotation.y)*.45,Ft.position.z+=Math.cos(Nt.rotation.y)*.45,n.add(Ft),setTimeout(()=>n.remove(Ft),70)}}}else Nt.userData.shootCd=Math.max(0,Nt.userData.shootCd-et*.5);const me=Date.now()*.005+Nt.userData.speed*10;Nt.position.y+=Math.sin(me)*.0015}}function B(et){for(const ot of l){if(ot.taken)continue;if(ot.pos.distanceTo(et)<1.8){ot.taken=!0;try{window.__weapons&&window.__weapons.addAmmo?window.__weapons.addAmmo(30):window.__weapons&&window.__weapons.reserve!==void 0&&(window.__weapons.reserve+=30)}catch{}try{document.dispatchEvent(new CustomEvent("pubg-loot",{detail:{ammo:30}}))}catch{}ot.group.children.forEach(pt=>{pt.geometry&&pt.geometry.type==="BoxGeometry"&&(pt.material.transparent=!0,pt.material.opacity=.55)});const Nt=document.createElement("div");Nt.style.cssText="position:fixed;left:50%;top:58%;transform:translate(-50%,-50%);padding:8px 14px;background:rgba(14,18,24,0.88);border:1px solid rgba(255,255,255,0.18);border-radius:8px;color:#2ecc71;font-weight:800;font-size:13px;z-index:12;",Nt.textContent="+30 AMMO  (LOOTED)",document.body.appendChild(Nt),setTimeout(()=>Nt.remove(),1400),console.log("[PUBG] looted crate at",ot.pos)}}}function N(et,ot){var pt;if(!o||_)return;r+=et;const U=v[s],Nt=v[s+1];if(U&&Nt){const Tt=Math.min(1,r/U.duration);P=Pe.lerp(U.radius,Nt.radius,Tt),z(P),V()}U&&r>=U.duration&&(r=0,s<v.length-1?(s++,console.log("[PUBG] phase advance",s,"radius",v[s].radius),K(!0,"SAFE ZONE SHRINKING — PHASE "+(s+1)),setTimeout(()=>{O(ot,0)||K(!1)},1400)):(P=Math.max(0,P-et*6),z(P))),O(ot,et),gt(et,ot),B(ot),S()&&(_="player",K(!0,"VICTORY ROYALE!  ★"),console.log("[PUBG] victory"));for(const Tt of a){if(!Tt.userData.alive)continue;Math.hypot(Tt.position.x-M.x,Tt.position.z-M.z)>P+6&&(Tt.userData.hp-=(((pt=v[s])==null?void 0:pt.damage)||2)*et*.9,Tt.userData.hp<=0&&(Tt.userData.alive=!1,Tt.visible=!1,V()))}}function Z(et,ot){const U=a[et];if(!U||!U.userData.alive)return!1;if(U.userData.hp-=ot,U.userData.hp<=0){U.userData.alive=!1,U.visible=!1,V();try{const Nt=document.createElement("div");Nt.style.cssText="position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);color:#ffcc33;font-weight:900;font-size:16px;text-shadow:0 2px 8px rgba(0,0,0,0.7);z-index:12;",Nt.textContent="BOT ELIMINATED",document.body.appendChild(Nt),setTimeout(()=>Nt.remove(),900)}catch{}return S()&&(_="player",K(!0,"VICTORY ROYALE!  ★")),!0}try{U.children.forEach(Nt=>{if(Nt.isMesh){const pt=Nt.material.color.clone();Nt.material.color.setHex(16729156),setTimeout(()=>Nt.material.color.copy(pt),80)}})}catch{}return!1}function $(et,ot,U=120){let Nt=null,pt=1/0;for(let Tt=0;Tt<a.length;Tt++){const Wt=a[Tt];if(!Wt.userData.alive)continue;const Xt=Wt.position.clone().sub(et).dot(ot);if(Xt<0||Xt>U)continue;const D=et.clone().add(ot.clone().multiplyScalar(Xt));Wt.position.distanceTo(D)<.85&&Xt<pt&&(pt=Xt,Nt={bot:Wt,idx:Tt,distance:Xt,point:D.clone()})}return Nt}function nt(){return o}function yt(){return{phase:s,phaseTime:r,currentRadius:P,alive:a.filter(et=>et.userData.alive).length+1,center:M.clone(),winner:_}}const Bt={start:W,update:N,dispose:C,isActive:nt,getState:yt,rayHitBots:$,applyDamageToBot:Z,get bots(){return a},get lootCrates(){return l},get center(){return M.clone()},get radius(){return P}};return window.__pubgMode=Bt,window.__PUBG_MODE=Bt,Bt}const Qn=Ht.tier==="low";function ex(n,t,e,i,o=[]){n||(n=window.__scene);const s=()=>{try{if(e&&e.camera)return e.camera;if(window.__camera)return window.__camera;let W=null;return n.traverse(C=>{!W&&C.isCamera&&(W=C)}),W}catch{return null}},r=()=>{try{if(e&&typeof e.getPosition=="function")return e.getPosition();if(window.__controlsPos)return new E(window.__controlsPos.x,window.__controlsPos.y,window.__controlsPos.z);const W=s();if(W)return W.position.clone()}catch{}return new E(0,1.7,8)},a=[];let l=null,u=Object.create(null);function d(W){u[W.code]=!0}function h(W){u[W.code]=!1}document.addEventListener("keydown",d,!1),document.addEventListener("keyup",h,!1),window.addEventListener("blur",()=>{for(const W in u)u[W]=!1});let m=null,f=null,x=null,g=null,p=null;function c(){if(m)return;m=document.createElement("div"),m.id="vehicleHUD";const W=Ht.tier!=="low";m.style.cssText="position:fixed;left:50%;bottom:18px;transform:translateX(-50%);min-width:280px;max-width:92vw;padding:10px 14px;background:rgba(14,18,24,0.84);border:1px solid rgba(255,255,255,0.14);border-radius:10px;display:none;align-items:center;justify-content:space-between;gap:16px;pointer-events:none;z-index:12;"+(W?"backdrop-filter:blur(6px);":"")+"font-family:system-ui,sans-serif;color:#fff;";const C=document.createElement("div");C.style.cssText="display:flex;flex-direction:column;gap:2px;";const O=document.createElement("div");O.textContent="VEHICLE",O.style.cssText="font-size:10px;letter-spacing:0.8px;opacity:0.65;font-weight:700;",f=document.createElement("div"),f.style.cssText="font-size:15px;font-weight:800;letter-spacing:0.4px;",f.textContent="0 km/h",C.appendChild(O),C.appendChild(f);const gt=document.createElement("div");gt.style.cssText="display:flex;flex-direction:column;align-items:flex-end;gap:2px;",x=document.createElement("div"),x.style.cssText="font-size:12px;font-weight:700;opacity:0.92;",x.textContent="";const B=document.createElement("div");if(B.textContent="[F] EXIT  [SPACE] BRAKE",B.style.cssText="font-size:10px;opacity:0.55;letter-spacing:0.4px;",gt.appendChild(x),gt.appendChild(B),m.appendChild(C),m.appendChild(gt),document.body.appendChild(m),g=document.createElement("div"),g.id="vehiclePrompt",g.style.cssText="position:fixed;left:50%;top:52%;transform:translate(-50%,-50%);padding:8px 14px;background:rgba(14,18,24,0.86);border:1px solid rgba(255,255,255,0.18);border-radius:8px;color:#fff;font-weight:700;font-size:13px;letter-spacing:0.3px;display:none;pointer-events:"+(Ht.isMobile?"auto":"none")+";z-index:11;",g.textContent="Press [F] to enter vehicle",Ht.isMobile){g.style.cursor="pointer";const N=Z=>{if(p){Z.preventDefault();try{p()}catch{}}};g.addEventListener("touchstart",N,{passive:!1}),g.addEventListener("click",N,!1)}document.body.appendChild(g)}c();function _(W){c(),m.style.display=W?"flex":"none"}function v(W,C,O=null){c(),p=O,C&&(g.textContent=C),g.style.display=W?"block":"none"}function M(W){try{const C=window.__weapons;if(C&&C.gunGroup&&(C.gunGroup.visible=!!W),!C){const O=s();O&&O.traverse(gt=>{(gt.name==="m4_rifle"||gt.name==="gunGroup")&&(gt.visible=!!W)})}}catch{}}function P(W){try{if(e){if(typeof e.setInVehicle=="function")e.setInVehicle(W);else if("isInVehicle"in e)try{e.isInVehicle=!!W}catch{}else e.isInVehicle=!!W;window.__isInVehicle=!!W}else window.__isInVehicle=!!W}catch{}}function T(W,C){let O=null;try{if(i&&typeof i.getHeightAt=="function"&&(O=i.getHeightAt(W,C)),O==null&&n&&n.userData&&typeof n.userData.getHeightAt=="function"&&(O=n.userData.getHeightAt(W,C)),window.__terrain&&typeof window.__terrain.getHeightAt=="function"&&(O=window.__terrain.getHeightAt(W,C)),O!=null&&Number.isFinite(O))return O}catch{}return 0}function A(){const W=[];if(!t)return W;for(const C of t){if(!C||C.userData&&C.userData.isVehicle)continue;let O=C.userData&&C.userData.collider;if(!O)try{C.updateMatrixWorld(!0),O=new pn().setFromObject(C,!0)}catch{continue}W.push(O)}return W}function Q(W,C){C=C||0;const O=new Ne;O.name="vehicle_atv",O.userData.isVehicle=!0;const gt=new Dt(1.4,.48,2),B=new Et({color:3119674,roughness:.68,metalness:.12}),N=new I(gt,B);N.position.set(0,.52,0),N.castShadow=!Qn,N.receiveShadow=!Qn,O.add(N);const Z=new Et({color:1975080,roughness:.55,metalness:.45}),$=new Dt(.06,.42,.06),nt=new I($,Z);nt.position.set(-.62,.82,-.55),nt.castShadow=!Qn,O.add(nt);const yt=nt.clone();yt.position.x=.62,O.add(yt);const Bt=new I(new Dt(1.3,.06,.06),Z);Bt.position.set(0,1.04,-.55),Bt.castShadow=!Qn,O.add(Bt);const et=new Et({color:1711394,roughness:.88,metalness:.02}),ot=new I(new Dt(.58,.14,.62),et);ot.position.set(0,.76,-.12),ot.castShadow=!Qn,O.add(ot);const U=new I(new Dt(.58,.22,.08),et);U.position.set(0,.9,-.42),U.castShadow=!Qn,O.add(U);const Nt=new Et({color:2764339,roughness:.5,metalness:.55}),pt=new I(new Dt(.88,.06,.06),Nt);pt.position.set(0,.92,.58),pt.castShadow=!Qn,O.add(pt);const Tt=new I(new Fe(.04,.04,.38,6),Nt);Tt.position.set(0,.74,.52),O.add(Tt);const Wt=Qn?8:14,pe=new Fe(.36,.36,.28,Wt),Xt=new Et({color:987668,roughness:.92,metalness:.04}),D=[[-.78,.36,.68],[.78,.36,.68],[-.78,.36,-.68],[.78,.36,-.68]],b=[];for(const Ut of D){const Ot=new I(pe,Xt);Ot.rotation.z=Math.PI/2,Ot.position.set(Ut[0],Ut[1],Ut[2]),Ot.castShadow=!Qn,O.add(Ot),b.push(Ot)}O.position.copy(W),O.rotation.y=C;const X=T(W.x,W.z);O.position.y=X,n.add(O);const kt=new I(new Dt(1.6,.9,2.2),new mn({visible:!1}));return kt.visible=!1,kt.position.copy(O.position),kt.position.y+=.55,kt.userData.isVehicle=!0,n.add(kt),O.userData.collider=new pn().setFromObject(kt),O.userData.colliderMesh=kt,{group:O,wheels:b,chassis:N,col:kt,type:"atv",maxSpeed:12,accel:6,decel:8,health:280,maxHealth:280,speed:0,steer:0,yaw:C,seatOffset:new E(0,1.05,-.08)}}function w(W,C){C=C||0;const O=new Ne;O.name="vehicle_truck",O.userData.isVehicle=!0;const gt=new Et({color:3885658,roughness:.72,metalness:.18}),B=new I(new Dt(1.6,.85,1.45),gt);B.position.set(0,.78,.42),B.castShadow=!Qn,B.receiveShadow=!Qn,O.add(B);const N=new I(new Dt(1.62,.55,1.85),new Et({color:3029575,roughness:.78,metalness:.12}));N.position.set(0,.62,-.82),N.castShadow=!Qn,O.add(N);const Z=.32,$=new Et({color:2371649,roughness:.82}),nt=new I(new Dt(1.62,Z,.06),$);nt.position.set(0,.95,-.02),O.add(nt);const yt=new I(new Dt(.06,Z,1.85),$);yt.position.set(-.78,.95,-.82),O.add(yt);const Bt=yt.clone();Bt.position.x=.78,O.add(Bt);const et=new I(new Dt(1.62,Z,.06),$);et.position.set(0,.95,-1.72),O.add(et);const ot=new I(new Dt(1.45,.42,.06),new Et({color:9357567,roughness:.18,metalness:.35,transparent:!0,opacity:.42}));ot.position.set(0,1.02,1.15),O.add(ot);const U=new Fe(.42,.42,.32,Qn?8:14),Nt=new Et({color:987668,roughness:.92}),pt=[[-.92,.42,.62],[.92,.42,.62],[-.92,.42,-1.08],[.92,.42,-1.08]],Tt=[];for(const Xt of pt){const D=new I(U,Nt);D.rotation.z=Math.PI/2,D.position.set(Xt[0],Xt[1],Xt[2]),D.castShadow=!Qn,O.add(D),Tt.push(D)}O.position.copy(W),O.rotation.y=C;const Wt=T(W.x,W.z);O.position.y=Wt,n.add(O);const pe=new I(new Dt(1.9,1.1,3.2),new mn({visible:!1}));return pe.visible=!1,pe.position.copy(O.position),pe.position.y+=.65,pe.userData.isVehicle=!0,n.add(pe),O.userData.collider=new pn().setFromObject(pe),O.userData.colliderMesh=pe,{group:O,wheels:Tt,col:pe,type:"truck",maxSpeed:8,accel:5,decel:7,health:600,maxHealth:600,speed:0,steer:0,yaw:C,seatOffset:new E(0,1.25,.18)}}const S=[{type:"atv",position:new E(-32,0,18),heading:.15},{type:"truck",position:new E(32,0,-22),heading:Math.PI*.5},{type:"atv",position:new E(-10,0,18),heading:-.4},{type:"truck",position:new E(22,0,14),heading:Math.PI*.1}],k=Array.isArray(o)&&o.length?o:S;for(let W=0;W<k.length;W++){const C=k[W]||{},O=C.position&&typeof C.position.x=="number"?C.position.clone():new E(typeof C.x=="number"?C.x:S[W%S.length].position.x,0,typeof C.z=="number"?C.z:S[W%S.length].position.z);O.y=T(O.x,O.z);const gt=Number.isFinite(C.heading)?C.heading:C.rotation||0,B=C.type==="truck"?"truck":"atv",N=B==="truck"?w(O,gt):Q(O,gt);N.spawn={type:B,position:O.clone(),heading:gt},a.push(N)}function K(W,C){C=C||3.5;let O=null,gt=1/0;for(let B=0;B<a.length;B++){const N=a[B],Z=N.group.position.distanceTo(W);Z<C&&Z<gt&&(gt=Z,O={veh:N,idx:B,dist:Z})}return O}function rt(W){if(l)return;const C=a[W];if(!C)return;l=C;const O=s();O&&(C._savedFov=O.fov),P(!0),M(!1),_(!0),v(!1);try{window.__vehicleEntered=!0}catch{}console.log("[vehicle] enter",C.type,W)}function z(){if(!l)return;const W=l,C=s(),O=W.group.position.clone();O.x+=Math.cos(W.yaw+Math.PI*.5)*2.2,O.z+=Math.sin(W.yaw+Math.PI*.5)*2.2,O.y=T(O.x,O.z)+1.7;try{e&&e.setPosition?e.setPosition(O):window.__controlsPos&&(window.__controlsPos.x=O.x,window.__controlsPos.y=O.y,window.__controlsPos.z=O.z),C&&C.position.copy(O)}catch{}l=null,W.speed=0,P(!1),M(!0),_(!1),console.log("[vehicle] exit")}document.addEventListener("keydown",W=>{if(W.code==="KeyF")if(l)z(),W.preventDefault();else{const C=r(),O=K(C,3.8);O&&(rt(O.idx),W.preventDefault())}});let at=0;function J(W){if(W>.05&&(W=.05),!l){if(at+=W,at>.22){at=0;const et=r(),ot=K(et,3.5);ot?Ht.isMobile?v(!0,"Tap to enter "+(ot.veh.type==="atv"?"ATV":"TRUCK"),()=>rt(ot.idx)):v(!0,"Press [F] to enter "+(ot.veh.type==="atv"?"ATV":"TRUCK"),()=>rt(ot.idx)):v(!1)}return}Ht.isMobile?v(!0,"Tap to exit vehicle",()=>z()):v(!1);const C=l;let O=0,gt=0;const B=!!u.KeyW||!!u.ArrowUp,N=!!u.KeyS||!!u.ArrowDown,Z=!!u.KeyA||!!u.ArrowLeft,$=!!u.KeyD||!!u.ArrowRight;if(B&&(O+=1),N&&(O-=.7),Z&&(gt-=1),$&&(gt+=1),Ht.isMobile&&window.__mobileMoveVec){const et=window.__mobileMoveVec;Math.abs(et.y)>.12&&(O+=et.y*.9),Math.abs(et.x)>.12&&(gt+=et.x*.85)}const nt=!!u.Space;if(O!==0&&!nt){const et=O>0?C.accel:C.decel*.9;C.speed+=O*et*W}else{const et=nt?C.decel*2.2:C.decel*.55;Math.abs(C.speed)>.02?C.speed-=Math.sign(C.speed)*et*W:C.speed=0}if(nt&&(C.speed*=Math.max(0,1-5.5*W),Math.abs(C.speed)<.05&&(C.speed=0)),C.speed=Math.max(-C.maxSpeed*.45,Math.min(C.maxSpeed,C.speed)),Math.abs(C.speed)<.02&&(C.speed=0),gt!==0&&Math.abs(C.speed)>.12){const et=1.8*(.55+.45*Math.min(1,Math.abs(C.speed)/5));C.yaw+=gt*et*W*Math.sign(C.speed||1),C.yaw>Math.PI&&(C.yaw-=Math.PI*2),C.yaw<-Math.PI&&(C.yaw+=Math.PI*2)}if(Math.abs(C.speed)>.01){const et=Math.sin(C.yaw),ot=Math.cos(C.yaw);let U=C.group.position.x-et*C.speed*W,Nt=C.group.position.z-ot*C.speed*W,pt=T(U,Nt);const Tt=window.__terrain&&window.__terrain.worldSize?window.__terrain.worldSize/2-4:288;U=Math.max(-Tt,Math.min(Tt,U)),Nt=Math.max(-Tt,Math.min(Tt,Nt)),pt=T(U,Nt);const Wt=new E(U,pt,Nt),pe=new pn(new E(U-.85,pt+.15,Nt-1.1),new E(U+.85,pt+1.35,Nt+1.1));let Xt=!1;const D=A();for(let b=0;b<D.length;b++)if(pe.intersectsBox(D[b])){Xt=!0;break}if(!Xt)for(let b=0;b<a.length;b++){const X=a[b];if(X===C)continue;if(X.group.position.distanceTo(Wt)<2.2){Xt=!0;break}}if(Xt)C.speed*=-.22;else{C.group.position.set(U,pt,Nt),C.group.rotation.y=C.yaw;const b=C.speed*W*3.2;for(const X of C.wheels)X.rotation.x+=b;C.col&&(C.col.position.copy(C.group.position),C.col.position.y+=.55,C.group.userData.collider=new pn().setFromObject(C.col))}}const yt=s();if(yt){const et=C.group.position.clone(),ot=C.seatOffset,U=ot.x*Math.cos(C.yaw)-ot.z*Math.sin(C.yaw),Nt=ot.x*Math.sin(C.yaw)+ot.z*Math.cos(C.yaw);et.x+=U,et.z+=Nt,et.y+=ot.y,yt.position.lerp(et,Math.min(1,9*W));let pt=C.yaw,Tt=0;try{e&&typeof e.getYaw=="function"?pt=e.getYaw():window.__controlsYaw!==void 0?pt=window.__controlsYaw:pt=C.yaw,window.__controlsPitch!==void 0&&(Tt=window.__controlsPitch)}catch{}yt.rotation.order="YXZ",yt.rotation.y=pt,yt.rotation.x=Tt,window.__controlsPos={x:yt.position.x,y:yt.position.y,z:yt.position.z},window.__controlsYaw=pt}const Bt=Math.round(Math.abs(C.speed)*3.6);f&&(f.textContent=Bt+" km/h"),x&&(x.textContent=C.type.toUpperCase()+"  "+Math.round(C.health)+"/"+C.maxHealth)}function lt(){document.removeEventListener("keydown",d),document.removeEventListener("keyup",h)}const V={vehicles:a,spawnPoints:k,get currentVehicle(){return l},findNearestVehicle:K,enterVehicle:rt,exitVehicle:z,update:J,dispose:lt,isInVehicle:()=>!!l,getCurrent:()=>l};return window.__vehicles=V,window.__vehicleAPI=V,V}function nx({onSelect:n}={}){let t=null;const e=new URLSearchParams(location.search),i=e.has("capture")||window.__CAPTURE===!0;let o=window.__CURRENT_MAP||e.get("map")||localStorage.getItem("aaa_map")||"large",s=window.__CURRENT_MODE||e.get("mode")||localStorage.getItem("aaa_mode")||"classic";["shipment","large"].includes(o)||(o="large"),["classic","zombies","pubg"].includes(s)||(s="classic");function r(){return new URLSearchParams(location.search)}function a(){try{localStorage.setItem("aaa_map",o),localStorage.setItem("aaa_mode",s)}catch{}const x=r();x.set("map",o),x.set("mode",s);const g=location.pathname+"?"+x.toString();if(history.replaceState(null,"",g),n)try{n({map:o,mode:s})}catch{}if(window.__onMapModeChange)try{window.__onMapModeChange({map:o,mode:s})}catch{}}function l(){if(t)return;if(i){const C={getSelection:u,setSelection:d,show:h,hide:m,get map(){return o},get mode(){return s},get root(){return t}};window.__modeMenu=C,window.__MODE_MENU=C;return}const x=window.__QUALITY&&window.__QUALITY.tier==="low";t=document.createElement("div"),t.id="modeMenu",t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(6,10,15,0.78);z-index:15;pointer-events:auto;padding:18px;box-sizing:border-box;",x||(t.style.backdropFilter="blur(6px)");const g=document.createElement("div");g.style.cssText="width:min(560px,96vw);background:rgba(18,22,28,0.96);border:1px solid rgba(255,255,255,0.14);border-radius:14px;padding:22px 20px 18px;box-shadow:0 18px 48px rgba(0,0,0,0.55);color:#fff;font-family:system-ui,sans-serif;";const p=document.createElement("div");p.textContent="SELECT MAP & MODE",p.style.cssText="font-size:15px;font-weight:900;letter-spacing:0.9px;opacity:0.92;margin-bottom:6px;";const c=document.createElement("div");c.textContent="Choose before entering combat. Change anytime via URL ?map=&mode=",c.style.cssText="font-size:11px;opacity:0.55;margin-bottom:16px;line-height:1.4;";const _=document.createElement("div");_.style.cssText="margin-bottom:14px;";const v=document.createElement("div");v.textContent="MAP",v.style.cssText="font-size:10px;letter-spacing:0.8px;opacity:0.62;font-weight:700;margin-bottom:8px;";const M=document.createElement("div");M.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:10px;";function P(C,O,gt,B){const N=document.createElement("button");return N.dataset.value=C,N.style.cssText="text-align:left;padding:12px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.06);color:#fff;cursor:pointer;font-family:inherit;transition:all 0.15s;",N.innerHTML='<div style="font-size:12px;font-weight:800;letter-spacing:0.4px;display:flex;align-items:center;gap:8px;">'+O+' <span style="font-size:9px;padding:2px 6px;background:rgba(255,255,255,0.14);border-radius:999px;font-weight:700;letter-spacing:0.5px;">'+B+'</span></div><div style="font-size:11px;opacity:0.62;margin-top:4px;line-height:1.35;">'+gt+"</div>",N.addEventListener("click",()=>{o=C,a(),V()}),N}const T=P("shipment","SHIPMENT","Classic 80x80 container yard — tight CQB, containers & forklift","CLASSIC"),A=P("large","LARGE TERRAIN","600x600 Warzone map — fBm hills, roads, river, forest, mountain rim (segment 100 low)","WARZONE");M.appendChild(T),M.appendChild(A),_.appendChild(v),_.appendChild(M);const Q=document.createElement("div");Q.style.cssText="margin-bottom:16px;";const w=document.createElement("div");w.textContent="MODE",w.style.cssText="font-size:10px;letter-spacing:0.8px;opacity:0.62;font-weight:700;margin-bottom:8px;";const S=document.createElement("div");S.style.cssText="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;";function k(C,O,gt,B){const N=document.createElement("button");return N.dataset.value=C,N.style.cssText="text-align:left;padding:12px 10px;border-radius:10px;border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.06);color:#fff;cursor:pointer;font-family:inherit;transition:all 0.15s;",N.innerHTML='<div style="font-size:11px;font-weight:800;letter-spacing:0.4px;display:flex;align-items:center;gap:6px;">'+O+' <span style="font-size:8px;padding:2px 5px;background:rgba(255,255,255,0.14);border-radius:999px;">'+B+'</span></div><div style="font-size:10px;opacity:0.62;margin-top:4px;line-height:1.3;">'+gt+"</div>",N.addEventListener("click",()=>{s=C,a(),V()}),N}const K=k("classic","DEATHMATCH","Classic FPS vs bots","CLASSIC"),rt=k("zombies","ZOMBIES","Nazi horde — barriers, mystery box, perks","HORDE"),z=k("pubg","BATTLE ROYALE","PUBG Warzone — shrinking safe zone, loot","BR");S.appendChild(K),S.appendChild(rt),S.appendChild(z),Q.appendChild(w),Q.appendChild(S);const at=document.createElement("div");at.style.cssText="display:flex;gap:10px;align-items:center;justify-content:space-between;margin-top:8px;";const J=document.createElement("div");J.style.cssText="font-size:10px;opacity:0.45;line-height:1.3;",J.innerHTML='URL updates live: <span id="modeMenuUrl" style="font-family:monospace;opacity:0.85;"></span>';const lt=document.createElement("button");lt.textContent="ENTER COMBAT →",lt.style.cssText="padding:10px 18px;background:#e63946;color:#fff;border:none;border-radius:8px;font-weight:800;letter-spacing:0.5px;cursor:pointer;white-space:nowrap;",lt.addEventListener("click",()=>{a(),t&&(t.style.display="none");const C=r();C.get("map")!==o||C.get("mode");const O=window.__CURRENT_MAP||"large",gt=window.__CURRENT_MODE||"classic";(O!==o||gt!==s)&&(location.search="?map="+o+"&mode="+s+(location.search.includes("capture")?"&capture":""))}),at.appendChild(J),at.appendChild(lt);function V(){[T,A].forEach(B=>{const N=B.dataset.value===o;B.style.borderColor=N?"rgba(46,204,113,0.85)":"rgba(255,255,255,0.14)",B.style.background=N?"rgba(46,204,113,0.14)":"rgba(255,255,255,0.06)",B.style.boxShadow=N?"0 0 0 1px rgba(46,204,113,0.32) inset":""}),[K,rt,z].forEach(B=>{const N=B.dataset.value===s;B.style.borderColor=N?"rgba(230,57,70,0.85)":"rgba(255,255,255,0.14)",B.style.background=N?"rgba(230,57,70,0.14)":"rgba(255,255,255,0.06)",B.style.boxShadow=N?"0 0 0 1px rgba(230,57,70,0.32) inset":""});const gt=document.getElementById("modeMenuUrl");gt&&(gt.textContent="?map="+o+"&mode="+s)}g.appendChild(p),g.appendChild(c),g.appendChild(_),g.appendChild(Q),g.appendChild(at),t.appendChild(g);const W=document.createElement("button");W.id="modeMenuGear",W.textContent="⚙ MAP/MODE",W.style.cssText="position:fixed;top:12px;right:12px;z-index:14;padding:7px 10px;background:rgba(14,18,24,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:8px;color:#fff;font-size:11px;font-weight:700;letter-spacing:0.4px;cursor:pointer;pointer-events:auto;",x||(W.style.backdropFilter="blur(6px)"),W.addEventListener("click",()=>{t&&(t.style.display=t.style.display==="none"?"flex":"none")}),document.body.appendChild(W),document.body.appendChild(t),V(),a()}function u(){return{map:o,mode:s}}function d(x,g){x&&(o=x),g&&(s=g),a()}function h(){t&&(t.style.display="flex")}function m(){t&&(t.style.display="none")}try{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l()}catch{setTimeout(l,200)}const f={getSelection:u,setSelection:d,show:h,hide:m,get map(){return o},get mode(){return s},get root(){return t}};return window.__modeMenu=f,window.__MODE_MENU=f,f}function ix(n,t){const e=document.getElementById("health");document.getElementById("fps");const i=document.getElementById("status"),o=document.getElementById("ui");let s=100,r=!1,a=null,l=0,u=22,d=null,h=null,m=null,f=null,x=null,g=null,p=null,c=null,_=!1;function v(){a||(a=document.createElement("div"),a.id="hudVignette",a.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.12s;z-index:4;background:linear-gradient(to top, rgba(180,0,14,0.6) 0%, rgba(150,0,10,0.38) 18%, rgba(110,0,8,0.16) 38%, transparent 68%), radial-gradient(ellipse at center, transparent 58%, rgba(255,20,20,0.28) 92%, rgba(90,0,0,0.42) 100%);",o.appendChild(a))}function M(){if(m)return;m=document.createElement("div"),m.id="hitDirs",m.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:6;";function $(nt,yt){const Bt=document.createElement("div");return Bt.id=nt,Bt.style.cssText=yt+"opacity:0;transition:opacity 0.14s, transform 0.14s;filter:drop-shadow(0 0 6px rgba(255,40,40,0.9));will-change:opacity,transform;",Bt}f=$("hitTop","position:absolute;left:50%;top:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);"),x=$("hitBottom","position:absolute;left:50%;bottom:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);"),g=$("hitLeft","position:absolute;left:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);"),p=$("hitRight","position:absolute;right:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-right:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);"),m.append(f,x,g,p),o.appendChild(m)}function P($){M();let yt={front:f,north:f,back:x,south:x,left:g,west:g,right:p,east:p}[$]||null;if(!yt){const et=Math.random();et<.25?yt=f:et<.5?yt=x:et<.75?yt=g:yt=p}yt.style.opacity="0.96";const Bt=yt===f||yt===x?"translateX(-50%)":"translateY(-50%)";if(yt.style.transform=Bt+" scale(1.25)",yt.style.transition="opacity 0.08s, transform 0.08s",setTimeout(()=>{yt.style.opacity="0",yt.style.transform=Bt+" scale(0.88)"},260),$==="front"||$==="back"){const et=$==="front"?x:f;Math.random()<.35&&(et.style.opacity="0.32",setTimeout(()=>et.style.opacity="0",140))}}function T(){d||(d=document.createElement("div"),d.id="killfeed",d.style.cssText="position:absolute;top:16px;right:14px;width:320px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;pointer-events:none;z-index:7;",o.appendChild(d))}let A=0,Q=0,w=null;function S(){w||(w=document.createElement("div"),w.id="killStreak",w.style.cssText="position:absolute;top:58px;right:14px;min-width:120px;padding:6px 10px;background:rgba(14,18,24,0.82);border-left:3px solid #ffcc33;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:0.6px;color:#ffcc33;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);opacity:0;transform:translateX(10px);transition:opacity 0.18s, transform 0.18s;z-index:7;pointer-events:none;",w.textContent="",o.appendChild(w))}function k(){S(),A>=2?(w.textContent=A+"x STREAK!",w.style.opacity="1",w.style.transform="translateX(0) scale(1.04)",setTimeout(()=>{w&&(w.style.transform="translateX(0) scale(1)")},120)):w.style.opacity="0"}function K($){T();const nt=performance.now();nt-Q<6500?A++:A=1,Q=nt,k(),setTimeout(()=>{performance.now()-Q>=6500&&(A=0,k())},6600);const yt=document.createElement("div"),Bt=A>=2?" ("+A+"x)":"";for(yt.textContent=$+Bt,yt.style.cssText="min-width:180px;max-width:320px;padding:7px 12px;background:rgba(14,18,24,0.86);border-left:3px solid #e63946;border-radius:4px;font-size:12px;font-weight:800;letter-spacing:0.5px;color:#fff;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);backdrop-filter:blur(6px);transform:translateX(18px);opacity:0;transition:transform 0.22s cubic-bezier(0.2,0.8,0.2,1), opacity 0.22s;",/headshot/i.test($)&&(yt.style.borderLeftColor="#ffcc33"),d.appendChild(yt),requestAnimationFrame(()=>{yt.style.transform="translateX(0)",yt.style.opacity="1"});d.children.length>3;)d.removeChild(d.firstChild);setTimeout(()=>{yt.style.opacity="0",yt.style.transform="translateX(12px)"},3e3),setTimeout(()=>{yt.parentNode&&yt.parentNode.removeChild(yt)},3400)}function rt(){h||(h=document.createElement("div"),h.id="damageNumbers",h.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:8;overflow:hidden;",o.appendChild(h))}function z($,nt={}){rt();const yt=nt.heal||$>0&&nt.isHeal,Bt=Math.abs(Math.round($));if(Bt===0)return;const et=document.createElement("div"),ot=yt?"+":"-";et.textContent=ot+Bt;const U=nt.x!=null?nt.x:50+(Math.random()*14-7),Nt=nt.y!=null?nt.y:50+(Math.random()*10-5);et.style.cssText="position:absolute;left:"+U+"%;top:"+Nt+"%;font-size:"+(yt?18:20)+"px;font-weight:900;letter-spacing:0.3px;color:"+(yt?"#3cff7a":"#ff3a3a")+";text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 10px "+(yt?"rgba(60,255,122,0.45)":"rgba(255,58,58,0.5)")+";transform:translate(-50%,-50%) scale(0.82);opacity:0;transition:transform 0.72s cubic-bezier(0.18,0.82,0.32,1), opacity 0.42s;will-change:transform,opacity;",Bt>=20&&(et.style.fontSize="26px"),h.appendChild(et),requestAnimationFrame(()=>requestAnimationFrame(()=>{et.style.opacity="1",et.style.transform="translate(-50%, calc(-50% - 62px)) scale(1.08)"})),setTimeout(()=>{et.style.opacity="0",et.style.transform="translate(-50%, calc(-50% - 78px)) scale(1.0)"},520),setTimeout(()=>{et.parentNode&&et.parentNode.removeChild(et)},980)}function at(){const $=document.getElementById("crosshair");if(!$)return null;if($.dataset.upgraded==="1")return $;$.dataset.upgraded="1",$.innerHTML="",$.style.cssText="position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;pointer-events:none;z-index:5;";function nt(Nt,pt){const Tt=document.createElement("div");return Tt.style.cssText="position:absolute;background:#fff;box-shadow:0 0 4px rgba(0,0,0,0.75), 0 0 1px rgba(0,0,0,0.95);border-radius:1px;",Tt.style.width=Nt+"px",Tt.style.height=pt+"px",Tt}const yt=nt(2,12),Bt=nt(2,12),et=nt(12,2),ot=nt(12,2),U=document.createElement("div");return U.style.cssText="position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;background:#fff;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,0,0,0.35);",$.append(yt,Bt,et,ot,U),c={top:yt,bottom:Bt,left:et,right:ot,dot:U,wrap:$},J(22),$}function J($){if(!c)return;const nt=Math.round($),yt=20,Bt=20;c.top.style.left=yt-1+"px",c.top.style.top=Bt-nt-12+"px",c.bottom.style.left=yt-1+"px",c.bottom.style.top=Bt+nt+"px",c.left.style.left=yt-nt-12+"px",c.left.style.top=Bt-1+"px",c.right.style.left=yt+nt+"px",c.right.style.top=Bt-1+"px";const et=nt<8?.85:1;c.dot.style.transform="scale("+et+")",c.dot.style.opacity=nt<8?"0.92":"1"}window.addEventListener("mousedown",$=>{$.button===2&&(_=!0)}),window.addEventListener("mouseup",$=>{$.button===2&&(_=!1)}),window.addEventListener("contextmenu",$=>$.preventDefault());function lt(){try{if(t&&typeof t.isAiming=="boolean")return t.isAiming;if(t&&typeof t.aiming=="boolean")return t.aiming;if(t&&t.getADS)return!!t.getADS()}catch{}return _}function V($){s=Math.max(0,Math.min(100,$)),e&&(e.textContent=String(Math.round(s))),s<=0&&!r&&(r=!0,i&&(i.textContent="DOWNED"),v(),a.style.opacity="0.88",a.style.background="rgba(80,0,0,0.72)",a.style.transition="opacity 0.22s",setTimeout(()=>{const nt=document.getElementById("center");if(!nt)return;nt.style.display="flex",nt.innerHTML='<h1 style="color:#ff3a3a">ELIMINATED</h1><p>Click to respawn</p><button id="respawnBtn" style="padding:14px 28px;font-size:18px;background:#e63946;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">RESPAWN</button>';const yt=document.getElementById("respawnBtn");yt&&(yt.onclick=()=>{s=100,r=!1,e&&(e.textContent="100"),a&&(a.style.opacity="0"),nt.style.display="none",n&&n.getPosition?n.reset&&n.reset():location.reload(),i&&(i.textContent="READY")})},420))}function W($,nt){if(!(r||l>0)){l=.18,V(s-$),z($,{y:52+Math.random()*6});try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}v(),M(),a.style.opacity="0.58",a.style.transition="opacity 0.08s",P(nt),window.__chromaticHit=2.2;try{a&&(a.style.filter="contrast(1.12) saturate(1.15)"),setTimeout(()=>{a&&(a.style.filter="none")},260)}catch{}try{const yt=n&&n.camera;if(yt){const Bt=.06+Math.random()*.02,et=(Math.random()-.5)*.04;if(yt.rotation.x+=Bt,yt.rotation.y+=et,yt.rotation.z+=(Math.random()-.5)*.025,setTimeout(()=>{try{yt.rotation.x-=Bt,yt.rotation.y-=et,yt.rotation.z-=(Math.random()-.5)*.025}catch{}},72),yt.fov){const ot=yt.fov;yt.fov=Math.min(88,ot+1.2),yt.updateProjectionMatrix(),setTimeout(()=>{yt.fov=ot,yt.updateProjectionMatrix()},90)}}}catch{}setTimeout(()=>{a&&!r&&(a.style.opacity="0")},142)}}function C($){r||(V(s+$),z($,{heal:!0,isHeal:!0}))}if(n){n.takeDamage=W,n.heal=C,n.getHealth=()=>s,n.reset=n.reset||(()=>{V(100)});const $=n.update.bind(n);n.update=nt=>{$(nt),l>0&&(l=Math.max(0,l-nt))}}window.__hudTakeDamage=W,window.__hudHeal=C,window.__hudKill=K,window.__hudPushKill=K,window.__hudDamageNumber=z,window.__killfeed={push:K,addKill:K},window.__onEnemyKilled=($,nt)=>{const yt=nt?$+" HEADSHOT":"ELIMINATED "+$;K(yt),z(nt?45:28,{x:58+Math.random()*10,y:46+Math.random()*8})};let O=0;at(),T(),rt();function gt($){O+=$;try{const ot=n&&n.velocity&&n.velocity.length&&n.velocity.length()>5||document.pointerLockElement&&window.__isSprinting;if(a||v(),window.__sprintHeld&&s>35&&!r&&a.style.opacity==="0"){const Nt=Math.sin(O*3.267)*.5+.5;a.style.opacity=String(.035+Nt*.018),a.style.background="radial-gradient(ellipse at center, transparent 62%, rgba(20,18,22,"+(.08+Nt*.04)+") 95%)",a.style.filter="blur("+Nt*.4+"px)"}else s>=35&&a.style.opacity!=="0"&&l<=0&&window.__chromaticHit}catch{}if(s<35&&!r){v();const ot=.18+Math.sin(O*4.2)*.08+Math.sin(O*7)*.03,U=1-s/35;a.style.opacity=String(ot*U*.92+.06),a.style.background="linear-gradient(to top, rgba(180,0,14,"+(.32+ot*.28)+") 0%, rgba(150,0,10,"+(.18+ot*.14)+") 22%, rgba(110,0,8,0.10) 42%, transparent 70%), radial-gradient(ellipse at center, transparent 56%, rgba(255,14,14,"+(.18+ot*.18)+") 100%)"}else!r&&a&&a.style.opacity!=="0"&&l<=0;const nt=lt();u+=((nt?4:22)-u)*Math.min(1,$*14);let et=0;try{if(t&&t.getAmmo){const ot=t.getAmmo()}}catch{}if(J(u+et),c){const ot=nt?.32:1;c.wrap.style.opacity=String(.96*ot+(nt?.2:0));const U=Math.sin(O*1.2)*.015;c.wrap.style.transform="translate(-50%,-50%) scale("+(1+U)+")"}}function B(){if(document.getElementById("zombieHUD"))return document.getElementById("zombieHUD");const $=document.createElement("div");$.id="zombieHUD",$.style.cssText="position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;";const nt=document.createElement("div");nt.id="zRound",nt.style.cssText="font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);",nt.textContent="ROUND 1";const yt=document.createElement("div");yt.id="zLeft",yt.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",yt.textContent="ZOMBIES LEFT: 0";const Bt=document.createElement("div");Bt.id="zPoints",Bt.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",Bt.textContent="POINTS: 0",$.append(nt,yt,Bt);const et=document.createElement("div");et.id="zPerks",et.style.cssText="display:flex;gap:8px;margin-top:10px;";function ot(Wt,pe,Xt){const D=document.createElement("div");D.style.cssText="display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid "+Xt+";border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);";const b=document.createElement("div");b.style.cssText="width:22px;height:22px;border-radius:4px;background:"+Xt+";display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;",b.textContent=Wt;const X=document.createElement("div");return X.style.cssText="font-size:10px;font-weight:800;letter-spacing:0.5px;color:"+Xt+";line-height:1;",X.innerHTML=pe+'<br><span style="opacity:0.7;font-weight:600">'+(pe==="JUGGER-NOG"?"HP+":"RELOAD+")+"</span>",D.append(b,X),D}const U=ot("♥","JUGGER-NOG","#e63946"),Nt=ot("⚡","SPEED COLA","#2ec4b6");U.style.opacity="0.82",Nt.style.opacity="0.82",U.title="Juggernog - Placeholder perk",Nt.title="Speed Cola - Placeholder perk",et.append(U,Nt),$.appendChild(et);const pt=document.getElementById("ui")||document.body;pt.appendChild($);const Tt=document.createElement("div");return Tt.id="zRoundBanner",Tt.style.cssText="position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;",Tt.textContent="ROUND 1",pt.appendChild(Tt),$._banner=Tt,$._els={rEl:nt,lEl:yt,pEl:Bt},$}function N($,nt,yt){if(!document.getElementById("zombieHUD"))return B(),N($,nt,yt);const et=document.getElementById("zRound");et&&(et.textContent="ROUND "+$);const ot=document.getElementById("zLeft");ot&&(ot.textContent="ZOMBIES LEFT: "+nt);const U=document.getElementById("zPoints");U&&(U.textContent="POINTS: "+yt)}function Z($){const nt=document.getElementById("zRoundBanner")||B()&&document.getElementById("zRoundBanner");nt&&(nt.textContent=$,nt.style.opacity="1",nt.style.transform="translate(-50%,-50%) scale(1.08)",setTimeout(()=>{nt.style.opacity="0",nt.style.transform="translate(-50%,-50%) scale(0.88)"},1800))}if(window.__ensureZombieHUD=B,window.__updateZombieHUD=N,window.__showZombieBanner=Z,!document.getElementById("zombieHUDStyle")){const $=document.createElement("style");$.id="zombieHUDStyle",$.textContent="#zombieHUD{font-family:system-ui,monospace} #zRoundBanner{pointer-events:none} #zPerks div{transition:opacity 0.2s}",document.head.appendChild($)}return function $(){requestAnimationFrame($),gt(.016)}(),{takeDamage:W,heal:C,getHealth:()=>s,update:gt,addKill:K,spawnDamageNumber:z}}function ox(){let n=null,t=null;function e(){if(n)return n.state==="suspended"&&n.resume().catch(()=>{}),n;try{n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain(),t.gain.value=.92,t.connect(n.destination)}catch{n=null}return n}let i=null;function o(){const x=e();if(!x)return null;if(!i)try{if(x.createPanner){i=x.createPanner(),i.panningModel="HRTF",i.distanceModel="linear",i.refDistance=3,i.maxDistance=48,i.rolloffFactor=.9,i.coneInnerAngle=360,i.coneOuterAngle=360,i._occlusionFilter=x.createBiquadFilter(),i._occlusionFilter.type="lowpass",i._occlusionFilter.frequency.value=18e3,i._occlusionGain=x.createGain(),i._occlusionGain.gain.value=1;try{i.connect(i._occlusionFilter),i._occlusionFilter.connect(i._occlusionGain),i._occlusionGain.connect(t)}catch{try{i.connect(x.destination)}catch{}}}}catch{}return i}function s(){if(!n)return null;try{const x=Math.floor(n.sampleRate*.45),g=n.createBuffer(2,x,n.sampleRate);for(let c=0;c<2;c++){const _=g.getChannelData(c);for(let v=0;v<x;v++)_[v]=(Math.random()*2-1)*Math.pow(1-v/x,2.2)*.22}const p=n.createConvolver();return p.buffer=g,p}catch{return null}}function r(x=!1){const g=e();if(!g)return;g.state==="suspended"&&g.resume();const p=g.currentTime,c=t||g.destination,_=g.createOscillator();_.type="square",_.frequency.setValueAtTime(x?180:220,p),_.frequency.exponentialRampToValueAtTime(55,p+.08);const v=g.createGain();v.gain.setValueAtTime(.42,p),v.gain.exponentialRampToValueAtTime(.001,p+.14);const M=g.createBiquadFilter();M.type="highpass",M.frequency.value=900,M.Q.value=.7,_.connect(M),M.connect(v),v.connect(c),_.start(p),_.stop(p+.15);const P=Math.floor(g.sampleRate*.05),T=g.createBuffer(1,P,g.sampleRate),A=T.getChannelData(0);for(let C=0;C<P;C++)A[C]=(Math.random()*2-1)*Math.exp(-C/(P*.28))*.85;const Q=g.createBufferSource();Q.buffer=T;const w=g.createGain();w.gain.setValueAtTime(.22,p),w.gain.exponentialRampToValueAtTime(.001,p+.11);const S=g.createBiquadFilter();S.type="bandpass",S.frequency.value=1400,S.Q.value=.9,Q.connect(S),S.connect(w),w.connect(c),Q.start(p);const k=g.createOscillator();k.type="sine",k.frequency.setValueAtTime(120,p),k.frequency.exponentialRampToValueAtTime(45,p+.09);const K=g.createGain();K.gain.setValueAtTime(.18,p),K.gain.exponentialRampToValueAtTime(.001,p+.13),k.connect(K),K.connect(c),k.start(p),k.stop(p+.14);const rt=Math.floor(g.sampleRate*.28),z=g.createBuffer(1,rt,g.sampleRate),at=z.getChannelData(0);for(let C=0;C<rt;C++)at[C]=(Math.random()*2-1)*Math.pow(1-C/rt,3.2)*.5;const J=g.createBufferSource();J.buffer=z;const lt=g.createBiquadFilter();lt.type="lowpass",lt.frequency.value=1100,lt.Q.value=.8;const V=g.createDelay(.5);V.delayTime.value=.18;const W=g.createGain();W.gain.setValueAtTime(.12,p),W.gain.exponentialRampToValueAtTime(.001,p+.42),J.connect(lt),lt.connect(V),V.connect(W),W.connect(c),J.start(p+.06);try{const C=s();if(C){const O=g.createGain();O.gain.value=.12,V.connect(C),C.connect(O),O.connect(c)}}catch{}}function a(){const x=e();if(!x)return;const g=x.currentTime,p=t||x.destination;function c(M,P,T){const A=x.createOscillator();A.type="square",A.frequency.setValueAtTime(P,M);const Q=x.createGain();Q.gain.setValueAtTime(T,M),Q.gain.exponentialRampToValueAtTime(.001,M+.08);const w=x.createBiquadFilter();w.type="highpass",w.frequency.value=600,A.connect(w),w.connect(Q),Q.connect(p),A.start(M),A.stop(M+.09);const S=Math.floor(x.sampleRate*.015),k=x.createBuffer(1,S,x.sampleRate),K=k.getChannelData(0);for(let J=0;J<S;J++)K[J]=(Math.random()*2-1)*Math.exp(-J/(S*.2))*.5;const rt=x.createBufferSource();rt.buffer=k;const z=x.createGain();z.gain.setValueAtTime(.12,M),z.gain.exponentialRampToValueAtTime(.001,M+.04);const at=x.createBiquadFilter();at.type="bandpass",at.frequency.value=2600,at.Q.value=1.1,rt.connect(at),at.connect(z),z.connect(p),rt.start(M)}c(g,720,.18),c(g+.32,480,.2);const _=x.createOscillator();_.type="triangle",_.frequency.setValueAtTime(220,g+.12),_.frequency.linearRampToValueAtTime(160,g+.28);const v=x.createGain();v.gain.setValueAtTime(.06,g+.12),v.gain.exponentialRampToValueAtTime(.001,g+.29),_.connect(v),v.connect(p),_.start(g+.12),_.stop(g+.3)}function l(){const x=e();if(!x)return;const g=x.currentTime,p=t||x.destination,c=x.createOscillator();c.type="sine",c.frequency.setValueAtTime(880,g),c.frequency.exponentialRampToValueAtTime(280,g+.09);const _=x.createGain();_.gain.setValueAtTime(.22,g),_.gain.exponentialRampToValueAtTime(.001,g+.14),c.connect(_),_.connect(p),c.start(g),c.stop(g+.15);const v=x.createOscillator();v.type="square",v.frequency.setValueAtTime(2200,g),v.frequency.exponentialRampToValueAtTime(900,g+.04);const M=x.createGain();M.gain.setValueAtTime(.13,g),M.gain.exponentialRampToValueAtTime(.001,g+.06);const P=x.createBiquadFilter();P.type="highpass",P.frequency.value=1800,P.Q.value=.7,v.connect(P),P.connect(M),M.connect(p),v.start(g),v.stop(g+.07);const T=x.createOscillator();T.type="sine",T.frequency.value=90;const A=x.createGain();A.gain.setValueAtTime(.1,g),A.gain.exponentialRampToValueAtTime(.001,g+.1),T.connect(A),A.connect(p),T.start(g),T.stop(g+.11)}function u(){const x=e();if(!x)return;const g=x.currentTime,p=t||x.destination,c=x.createOscillator();c.type="sine",c.frequency.value=180;const _=x.createGain();_.gain.setValueAtTime(.14,g),_.gain.exponentialRampToValueAtTime(.001,g+.08),c.connect(_),_.connect(p),c.start(g),c.stop(g+.09)}function d(x=1,g=!1){const p=e();if(!p)return;const c=p.currentTime,_=t||p.destination,v=g?70:55,M=p.createOscillator();M.type="sine",M.frequency.value=v+Math.random()*10;const P=p.createGain();P.gain.setValueAtTime(.08,c),P.gain.exponentialRampToValueAtTime(.001,c+.09);const T=p.createBiquadFilter();T.type="lowpass",T.frequency.value=800,M.connect(T),T.connect(P),P.connect(_),M.start(c),M.stop(c+.1);const A=Math.floor(p.sampleRate*.03),Q=p.createBuffer(1,A,p.sampleRate),w=Q.getChannelData(0);for(let rt=0;rt<A;rt++)w[rt]=(Math.random()*2-1)*Math.exp(-rt/(A*.35))*.28;const S=p.createBufferSource();S.buffer=Q;const k=p.createGain();k.gain.setValueAtTime(.06,c),k.gain.exponentialRampToValueAtTime(.001,c+.07);const K=p.createBiquadFilter();K.type="bandpass",K.frequency.value=600+Math.random()*400,K.Q.value=.8,S.connect(K),K.connect(k),k.connect(_),S.start(c)}function h(x){const g=e();if(!g||!x)return r(!1);try{f(x)}catch{}const p=o(),c=g.currentTime;try{const _=document.querySelector("canvas");if(g.listener&&g.listener.positionX){const v=window.__controlsPos||{x:0,y:1.7,z:8};g.listener.positionX.setValueAtTime(v.x,c),g.listener.positionY.setValueAtTime(v.y||1.7,c),g.listener.positionZ.setValueAtTime(v.z,c),p&&x&&(p.positionX.setValueAtTime(x.x,c),p.positionY.setValueAtTime(x.y||1.2,c),p.positionZ.setValueAtTime(x.z,c))}}catch{}if(p){const _=g.createOscillator();_.type="square",_.frequency.setValueAtTime(190,c),_.frequency.exponentialRampToValueAtTime(48,c+.09);const v=g.createGain();v.gain.setValueAtTime(.28,c),v.gain.exponentialRampToValueAtTime(.001,c+.15);const M=g.createBiquadFilter();M.type="highpass",M.frequency.value=850,_.connect(M),M.connect(v),v.connect(p),_.start(c),_.stop(c+.16);const P=Math.floor(g.sampleRate*.04),T=g.createBuffer(1,P,g.sampleRate),A=T.getChannelData(0);for(let k=0;k<P;k++)A[k]=(Math.random()*2-1)*Math.exp(-k/(P*.28))*.75;const Q=g.createBufferSource();Q.buffer=T;const w=g.createGain();w.gain.setValueAtTime(.18,c),w.gain.exponentialRampToValueAtTime(.001,c+.1);const S=g.createBiquadFilter();S.type="bandpass",S.frequency.value=1300,S.Q.value=.9,Q.connect(S),S.connect(w),w.connect(p),Q.start(c);return}return r(!1)}function m(x,g){const p=n;if(!(!p||!p.listener||!p.listener.positionX))try{const c=p.currentTime;p.listener.positionX.linearRampToValueAtTime(x.x,c+.04),p.listener.positionY.linearRampToValueAtTime(x.y,c+.04),p.listener.positionZ.linearRampToValueAtTime(x.z,c+.04);const _=Math.sin(g),v=Math.cos(g);p.listener.forwardX&&(p.listener.forwardX.setValueAtTime(-_,c),p.listener.forwardZ.setValueAtTime(-v,c))}catch{}}function f(x){if(!x||!window.__controlsPos)return!1;const g=n||e();if(!g)return!1;try{const p=window.__controlsPos,c=new THREE.Vector3(p.x,p.y||1.7,p.z),_=new THREE.Vector3(x.x,x.y||1.2,x.z),v=new THREE.Vector3().subVectors(_,c),M=v.length();if(M<.5)return!1;v.normalize();const P=[];let T=window._obsCache||null;if(!T||performance.now()-(window._obsCacheT||0)>800){T=[];const Q=window.__scene||document.__scene||null}const A=window._enemiesObstacles||window._obsCache||[];if(A.length){const w=new THREE.Raycaster(c,v,0,M-.22).intersectObjects(A,!1),S=w.length>0&&w[0].distance<M-.4;if(i&&i._occlusionFilter){const k=S?2400:18e3,K=S?.35:1;i._occlusionFilter.frequency.linearRampToValueAtTime(k,g.currentTime+.08),i._occlusionGain.gain.linearRampToValueAtTime(K,g.currentTime+.08)}return S}else return i&&i._occlusionFilter&&(i._occlusionFilter.frequency.linearRampToValueAtTime(18e3,g.currentTime+.08),i._occlusionGain.gain.linearRampToValueAtTime(1,g.currentTime+.08)),!1}catch{return!1}}return window.__audio={playShoot:r,playReload:a,playHit:l,playEmpty:u,playFootstep:d,playEnemyShoot:h,updateListener:m,updateOcclusion:f,ensure:e,ensurePanner:o},{playShoot:r,playReload:a,playHit:l,playEmpty:u,playFootstep:d,playEnemyShoot:h,updateListener:m,ensure:e,ensurePanner:o}}let to,Xe,ni,Mi,zn=null,Bn=null,$o=null,ui,Qo,fo;async function sx(){var p;ox(),to=Lg(),ui=to.scene,Qo=to.camera,fo=to.renderer,window.__scene=ui,window.__camera=Qo,window.__QUALITY=Ht;const n=new URLSearchParams(window.location.search),t=n.has("capture");window.__CAPTURE=t;let e=n.get("map");if(!e)try{e=localStorage.getItem("aaa_map")}catch{}e||(e="large"),["shipment","large"].includes(e)||(e="large");let i=n.get("mode");if(!i)try{i=localStorage.getItem("aaa_mode")}catch{}i||(n.has("zombies")?i="zombies":i="classic"),(n.get("mode")==="zombies"||n.has("zombies")||window.__ZOMBIES===!0||window.__ZOMBIES==="1"||window.__ZOMBIES==="true")&&(i="zombies"),["classic","zombies","pubg"].includes(i)||(i="classic");try{localStorage.setItem("aaa_map",e),localStorage.setItem("aaa_mode",i)}catch{}window.__CURRENT_MAP=e,window.__CURRENT_MODE=i,console.log("[main] map="+e+" mode="+i+" tier="+Ht.tier+" dprCap="+Ht.dprCap);let s=null;try{s=nx({onSelect:({map:c,mode:_})=>{const v=window.__CURRENT_MAP,M=window.__CURRENT_MODE;if(c!==v||_!==M){const P=new URLSearchParams(window.location.search).has("capture");location.search="?map="+c+"&mode="+_+(P?"&capture":"")}}}),s&&typeof s.setSelection=="function"&&s.setSelection(e,i),window.__modeMenu=s}catch(c){console.warn("[modeMenu] failed",c)}if(Ht.isMobile){document.body.style.touchAction="none",document.documentElement.style.touchAction="none",document.addEventListener("touchmove",_=>{_.target.closest("#touch-joy, #touch-look, #touch-fire, #touch-reload, #touch-jump")&&_.preventDefault()},{passive:!1});let c=0;document.addEventListener("touchend",_=>{const v=Date.now();v-c<350&&_.preventDefault(),c=v},{passive:!1});try{navigator.wakeLock&&navigator.wakeLock.request("screen").catch(()=>{})}catch{}}const r=$g(ui);r.terrain&&typeof window<"u"&&(window.__terrain=r.terrain),window.__terrain||(window.__terrain={worldSize:e==="shipment"?80:600,getHeightAt:(c,_)=>0,mesh:null,colliders:[],dispose(){}});try{window.__terrain.worldSize===600?console.log("[terrain] verified large 600x600 tier="+window.__terrain.tier+" segments="+window.__terrain.segments+" tex="+window.__terrain.textureSize+" forest="+((p=window.__terrain.forest)==null?void 0:p.count)):console.log("[terrain] shipment dummy worldSize=80")}catch{}window.__level=r,Xe=Ig(Qo,ui,r.colliders),window.__controls=Xe;try{$o=ex(ui,r.colliders,Xe,r.terrain||window.__terrain,r.vehicleSpawns||[]),window.__vehicles=$o,window.__vehicleAPI=$o,console.log("[vehicles] initialized on "+e+" map ("+$o.vehicles.length+" vehicles)")}catch(c){console.warn("[vehicles] failed",c)}ni=Qg(ui,Qo,Xe),window.__weapons=ni,Mi=tx(ui,r.spawnPoints,Xe,ni),window.__enemies=Mi,ix(Xe,ni);const a=(c,_)=>{const v=Math.max(0,Number(c)||0);if(!v||!Xe||typeof Xe.takeDamage!="function")return;let M=null;try{if(_&&typeof _.x=="number"&&typeof _.z=="number"&&typeof Xe.getPosition=="function"&&Xe.getYaw){const P=Xe.getPosition(),T=_.x-P.x,A=_.z-P.z,Q=Math.atan2(T,A),w=typeof Xe.getYaw=="function"?Xe.getYaw():0;let S=Q-w;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;const k=Math.abs(S);M=k<Math.PI/4?"front":k>3*Math.PI/4?"back":S>0?"right":"left"}}catch{}try{Xe.takeDamage(v,M)}catch{Xe.takeDamage(v)}};window.__takeZoneDamage=c=>a(c),window.__takeBotDamage=(c,_)=>a(c,_),window.__enemyCount=()=>{try{if(Mi&&typeof Mi._getCount=="function")return Mi._getCount()}catch{}return 0};const l=i==="zombies",u=i==="pubg";if(window.__ZOMBIES_ACTIVE=l,window.__PUBG_ACTIVE=u,l)try{zn=Gc(ui,r,Xe,ni),window.__zombiesMode=zn,window.__ZOMBIES_MODE=zn,window.__getZombieRound=()=>zn.getRound(),zn.startRound(),console.log("[ZOMBIES] Horde mode activated - Round",zn.getRound())}catch(c){console.error("[ZOMBIES] failed to start",c)}else if(u)try{Bn=Vc(ui,r,Xe,ni),window.__pubgMode=Bn,window.__PUBG_MODE=Bn,Bn&&Bn.start?Bn.start():Bn&&Bn.init&&Bn.init(),console.log("[PUBG] Battle Royale mode activated")}catch(c){console.error("[PUBG] failed to start",c)}window.__enableZombies=()=>{if(zn)return zn;try{const c=Gc(ui,r,Xe,ni);return zn=c,window.__zombiesMode=c,window.__ZOMBIES_ACTIVE=!0,c.startRound(),console.log("[ZOMBIES] enabled at runtime"),c}catch(c){return console.error(c),null}},window.__disableZombies=()=>{zn&&(zn.dispose(),zn=null,window.__zombiesMode=null,window.__ZOMBIES_ACTIVE=!1,console.log("[ZOMBIES] disabled"))},window.__enablePubg=()=>{if(Bn)return Bn;try{const c=Vc(ui,r,Xe,ni);return Bn=c,window.__pubgMode=c,window.__PUBG_ACTIVE=!0,c.start&&c.start(),console.log("[PUBG] enabled at runtime"),c}catch(c){return console.error(c),null}},document.getElementById("playBtn").addEventListener("click",()=>Xe.lock()),Xe.addEventListener("lock",()=>document.getElementById("center").style.display="none"),Xe.addEventListener("unlock",()=>document.getElementById("center").style.display="flex");const d=new URLSearchParams(window.location.search).has("capture");let h=performance.now(),m=[],f=0,x=0;function g(){d?setTimeout(g,110):requestAnimationFrame(g);const c=performance.now(),_=Math.min(.05,(c-h)/1e3);h=c;const v=Math.round(1/_),M=Ht.displayTier||Ht.tier,P=document.getElementById("fps");P&&(P.textContent=v+(Ht.isMobile?" · MOBILE "+M.toUpperCase():"")),(!Ht.isMobile||Ht.tier!=="low"||f%2===0)&&(m.push(v),m.length>30&&m.shift());const T=m.reduce((A,Q)=>A+Q,0)/m.length;if(m.length===30){T<28?x++:x=Math.max(0,x-1),x>60&&fo.shadowMap.enabled&&(console.warn("[FPS] low avg "+T.toFixed(1)+" -> disabling shadows for mobile"),fo.shadowMap.enabled=!1,Ht.isMobile&&fo.getPixelRatio()>1&&(fo.setPixelRatio(1),to.onResize&&to.onResize()),x=0);const A=M.toUpperCase()+" · "+Math.round(T)+"FPS"+(fo.shadowMap.enabled?" · SHADOW ON":" · SHADOW OFF"),Q=document.getElementById("qualityBadge");Q&&(Q.textContent=A);const w=document.getElementById("qualityBadgeHud");w&&(w.textContent=M.toUpperCase()+" · "+Math.round(T)+"FPS")}try{Qo.updateMatrixWorld(!0)}catch{}try{$o&&$o.update(_)}catch{}if(l&&zn&&zn.isActive())if(d)Xe.update(_),ni.update(_),f++,f%5===0&&zn.update(_*5,Xe.getPosition());else if(Xe.update(_),ni.update(_),Ht.isMobile){f++;const A=Ht.tier==="low"?5:3,Q=Ht.tier==="low"?5:3;f%A===0&&zn.update(_*Q,Xe.getPosition())}else zn.update(_,Xe.getPosition());else if(u&&Bn)if(Xe.update(_),ni.update(_),Ht.isMobile){f++;const A=Ht.tier==="low"?5:3,Q=Ht.tier==="low"?5:3;if(f%A===0){try{Bn.update&&Bn.update(_*Q,Xe.getPosition())}catch{}Mi.update(_*Q,Xe.getPosition())}}else{try{Bn.update&&Bn.update(_,Xe.getPosition())}catch{}Mi.update(_,Xe.getPosition())}else if(d)Xe.update(_),ni.update(_),f++,f%5===0&&Mi.update(_*5,Xe.getPosition());else if(Xe.update(_),ni.update(_),Ht.isMobile){f++;const A=Ht.tier==="low"?5:3,Q=Ht.tier==="low"?5:3;f%A===0&&Mi.update(_*Q,Xe.getPosition())}else Mi.update(_,Xe.getPosition());to.update(_),fo.render(ui,Qo)}g(),window.addEventListener("resize",()=>to.onResize())}sx();
