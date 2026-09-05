(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="160",Mu=0,za=1,yu=2,wu=0,Mc=1,yc=2,Ai=3,to=0,Un=1,je=2,zn=0,qo=1,mi=2,Ba=3,ka=4,wc=5,Ci=100,Su=101,bu=102,Ha=103,Ga=104,Qr=200,Eu=201,Tu=202,Au=203,ta=204,ea=205,Sc=206,Cu=207,bc=208,Ru=209,Pu=210,Du=211,Lu=212,Iu=213,Uu=214,Nu=0,Fu=1,Ou=2,nr=3,zu=4,Bu=5,ku=6,Hu=7,Ec=0,Gu=1,Vu=2,Ki=0,Tc=1,Ac=2,Cc=3,ga=4,Wu=5,Rc=6,Pc=300,Zo=301,jo=302,na=303,ia=304,hr=306,ti=1e3,si=1001,oa=1002,bn=1003,Va=1004,gr=1005,Hn=1006,Xu=1007,Ko=1008,Ji=1009,qu=1010,Yu=1011,_a=1012,Dc=1013,ji=1014,Di=1015,hi=1016,Lc=1017,Ic=1018,$i=1020,Zu=1021,ri=1023,Uc=1024,ju=1025,uo=1026,fo=1027,Nc=1028,Fc=1029,Ku=1030,Oc=1031,zc=1033,_r=33776,vr=33777,xr=33778,Mr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Bc=36196,Za=37492,ja=37496,Ka=37808,Ja=37809,$a=37810,Qa=37811,tl=37812,el=37813,nl=37814,il=37815,ol=37816,sl=37817,rl=37818,al=37819,ll=37820,cl=37821,yr=36492,ul=36494,hl=36495,Ju=36283,dl=36284,fl=36285,pl=36286,kc=3e3,ho=3001,$u=3200,Qu=3201,va=0,th=1,Qn="",fn="srgb",Oi="srgb-linear",xa="display-p3",dr="display-p3-linear",ir="linear",on="srgb",or="rec709",sr="p3",Mo=7680,ml=519,eh=512,nh=513,ih=514,Hc=515,oh=516,sh=517,rh=518,ah=519,sa=35044,gl="300 es",ra=1035,Li=2e3,rr=2001;class Qo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,a=o.length;s<a;s++)o[s].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const ds=Math.PI/180,vs=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[e&63|128]+Fn[e>>8&255]+"-"+Fn[e>>16&255]+Fn[e>>24&255]+Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]).toLowerCase()}function En(n,t,e){return Math.max(t,Math.min(e,n))}function Ma(n,t){return(n%t+t)%t}function lh(n,t,e,i,o){return i+(n-t)*(o-i)/(e-t)}function ch(n,t,e){return n!==t?(e-n)/(t-n):0}function fs(n,t,e){return(1-e)*n+e*t}function uh(n,t,e,i){return fs(n,t,1-Math.exp(-e*i))}function hh(n,t=1){return t-Math.abs(Ma(n,t*2)-t)}function dh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ph(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mh(n,t){return n+Math.random()*(t-n)}function gh(n){return n*(.5-Math.random())}function _h(n){n!==void 0&&(_l=n);let t=_l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vh(n){return n*ds}function xh(n){return n*vs}function aa(n){return(n&n-1)===0&&n!==0}function Mh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yh(n,t,e,i,o){const s=Math.cos,a=Math.sin,r=s(e/2),l=a(e/2),u=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),m=a((t-i)/2),p=s((i-t)/2),_=a((i-t)/2);switch(o){case"XYX":n.set(r*h,l*d,l*m,r*u);break;case"YZY":n.set(l*m,r*h,l*d,r*u);break;case"ZXZ":n.set(l*d,l*m,r*h,r*u);break;case"XZX":n.set(r*h,l*_,l*p,r*u);break;case"YXY":n.set(l*p,r*h,l*_,r*u);break;case"ZYZ":n.set(l*_,l*p,r*h,r*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function _i(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Re={DEG2RAD:ds,RAD2DEG:vs,generateUUID:Fi,clamp:En,euclideanModulo:Ma,mapLinear:lh,inverseLerp:ch,lerp:fs,damp:uh,pingpong:hh,smoothstep:dh,smootherstep:fh,randInt:ph,randFloat:mh,randFloatSpread:gh,seededRandom:_h,degToRad:vh,radToDeg:xh,isPowerOfTwo:aa,ceilPowerOfTwo:Mh,floorPowerOfTwo:ar,setQuaternionFromProperEuler:yh,normalize:en,denormalize:_i};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(En(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*o+t.x,this.y=s*o+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(t,e,i,o,s,a,r,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,a,r,l,u)}set(t,e,i,o,s,a,r,l,u){const h=this.elements;return h[0]=t,h[1]=o,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],u=i[1],h=i[4],d=i[7],m=i[2],p=i[5],_=i[8],g=o[0],f=o[3],c=o[6],M=o[1],v=o[4],w=o[7],U=o[2],P=o[5],R=o[8];return s[0]=a*g+r*M+l*U,s[3]=a*f+r*v+l*P,s[6]=a*c+r*w+l*R,s[1]=u*g+h*M+d*U,s[4]=u*f+h*v+d*P,s[7]=u*c+h*w+d*R,s[2]=m*g+p*M+_*U,s[5]=m*f+p*v+_*P,s[8]=m*c+p*w+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],a=t[4],r=t[5],l=t[6],u=t[7],h=t[8];return e*a*h-e*r*u-i*s*h+i*r*l+o*s*u-o*a*l}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],a=t[4],r=t[5],l=t[6],u=t[7],h=t[8],d=h*a-r*u,m=r*l-h*s,p=u*s-a*l,_=e*d+i*m+o*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(o*u-h*i)*g,t[2]=(r*i-o*a)*g,t[3]=m*g,t[4]=(h*e-o*l)*g,t[5]=(o*s-r*e)*g,t[6]=p*g,t[7]=(i*l-u*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,s,a,r){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*r)+a+t,-o*u,o*l,-o*(-u*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new ze;function Gc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wh(){const n=lr("canvas");return n.style.display="block",n}const vl={};function ps(n){n in vl||(vl[n]=!0,console.warn(n))}const xl=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ml=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Oi]:{transfer:ir,primaries:or,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:on,primaries:or,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[dr]:{transfer:ir,primaries:sr,toReference:n=>n.applyMatrix3(Ml),fromReference:n=>n.applyMatrix3(xl)},[xa]:{transfer:on,primaries:sr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ml),fromReference:n=>n.applyMatrix3(xl).convertLinearToSRGB()}},Sh=new Set([Oi,dr]),$e={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ss[t].toReference,o=Ss[e].fromReference;return o(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ss[n].primaries},getTransfer:function(n){return n===Qn?ir:Ss[n].transfer}};function Yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yo;class Vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yo===void 0&&(yo=lr("canvas")),yo.width=t.width,yo.height=t.height;const i=yo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let a=0;a<s.length;a++)s[a]=Yo(s[a]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yo(e[i]/255)*255):e[i]=Yo(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bh=0;class Wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let a=0,r=o.length;a<r;a++)o[a].isDataTexture?s.push(br(o[a].image)):s.push(br(o[a]))}else s=br(o);i.url=s}return e||(t.images[this.uuid]=i),i}}function br(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Gn extends Qo{constructor(t=Gn.DEFAULT_IMAGE,e=Gn.DEFAULT_MAPPING,i=si,o=si,s=Hn,a=Ko,r=ri,l=Ji,u=Gn.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Fi(),this.name="",this.source=new Wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ho?fn:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fn?ho:kc}set encoding(t){ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ho?fn:Qn}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Pc;Gn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,e=0,i=0,o=1){pn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*o+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*o+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*o+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,s;const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],f=l[6],c=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+g)<.1&&Math.abs(_+f)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,w=(p+1)/2,U=(c+1)/2,P=(h+m)/4,R=(d+g)/4,tt=(_+f)/4;return v>w&&v>U?v<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(v),o=P/i,s=R/i):w>U?w<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(w),i=P/o,s=tt/o):U<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(U),i=R/s,o=tt/s),this.set(i,o,s,e),this}let M=Math.sqrt((f-_)*(f-_)+(d-g)*(d-g)+(m-h)*(m-h));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(d-g)/M,this.z=(m-h)/M,this.w=Math.acos((u+p+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Qo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e);const o={width:t,height:e,depth:1};i.encoding!==void 0&&(ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ho?fn:Qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Th{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xc extends Gn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ah extends Gn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,s,a,r){let l=i[o+0],u=i[o+1],h=i[o+2],d=i[o+3];const m=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(r===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=m,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==m||u!==p||h!==_){let f=1-r;const c=l*m+u*p+h*_+d*g,M=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const U=Math.sqrt(v),P=Math.atan2(U,c*M);f=Math.sin(f*P)/U,r=Math.sin(r*P)/U}const w=r*M;if(l=l*f+m*w,u=u*f+p*w,h=h*f+_*w,d=d*f+g*w,f===1-r){const U=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=U,u*=U,h*=U,d*=U}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,o,s,a){const r=i[o],l=i[o+1],u=i[o+2],h=i[o+3],d=s[a],m=s[a+1],p=s[a+2],_=s[a+3];return t[e]=r*_+h*d+l*p-u*m,t[e+1]=l*_+h*m+u*d-r*p,t[e+2]=u*_+h*p+r*m-l*d,t[e+3]=h*_-r*d-l*m-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,u=r(i/2),h=r(o/2),d=r(s/2),m=l(i/2),p=l(o/2),_=l(s/2);switch(a){case"XYZ":this._x=m*h*d+u*p*_,this._y=u*p*d-m*h*_,this._z=u*h*_+m*p*d,this._w=u*h*d-m*p*_;break;case"YXZ":this._x=m*h*d+u*p*_,this._y=u*p*d-m*h*_,this._z=u*h*_-m*p*d,this._w=u*h*d+m*p*_;break;case"ZXY":this._x=m*h*d-u*p*_,this._y=u*p*d+m*h*_,this._z=u*h*_+m*p*d,this._w=u*h*d-m*p*_;break;case"ZYX":this._x=m*h*d-u*p*_,this._y=u*p*d+m*h*_,this._z=u*h*_-m*p*d,this._w=u*h*d+m*p*_;break;case"YZX":this._x=m*h*d+u*p*_,this._y=u*p*d+m*h*_,this._z=u*h*_-m*p*d,this._w=u*h*d-m*p*_;break;case"XZY":this._x=m*h*d-u*p*_,this._y=u*p*d-m*h*_,this._z=u*h*_+m*p*d,this._w=u*h*d+m*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],s=e[8],a=e[1],r=e[5],l=e[9],u=e[2],h=e[6],d=e[10],m=i+r+d;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-o)*p}else if(i>r&&i>d){const p=2*Math.sqrt(1+i-r-d);this._w=(h-l)/p,this._x=.25*p,this._y=(o+a)/p,this._z=(s+u)/p}else if(r>d){const p=2*Math.sqrt(1+r-i-d);this._w=(s-u)/p,this._x=(o+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-r);this._w=(a-o)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,s=t._z,a=t._w,r=e._x,l=e._y,u=e._z,h=e._w;return this._x=i*h+a*r+o*u-s*l,this._y=o*h+a*l+s*r-i*u,this._z=s*h+a*u+i*l-o*r,this._w=a*h-i*r-o*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+o*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=o,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*o+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,r),d=Math.sin((1-e)*h)/u,m=Math.sin(e*h)/u;return this._w=a*d+this._w*m,this._x=i*d+this._x*m,this._y=o*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(s),i*Math.cos(s),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,i=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*o,this.y=s[1]*e+s[4]*i+s[7]*o,this.z=s[2]*e+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*o+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*o+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*o+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,s=t.x,a=t.y,r=t.z,l=t.w,u=2*(a*o-r*i),h=2*(r*e-s*o),d=2*(s*i-a*e);return this.x=e+l*u+a*d-r*h,this.y=i+l*h+r*u-s*d,this.z=o+l*d+s*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*o,this.y=s[1]*e+s[5]*i+s[9]*o,this.z=s[2]*e+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=o*l-s*r,this.y=s*a-i*l,this.z=i*r-o*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(En(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new E,yl=new ts;class Sn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const o=t.children;for(let s=0,a=o.length;s<a;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Es.subVectors(this.max,os),wo.subVectors(t.a,os),So.subVectors(t.b,os),bo.subVectors(t.c,os),Hi.subVectors(So,wo),Gi.subVectors(bo,So),eo.subVectors(wo,bo);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-eo.z,eo.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,eo.z,0,-eo.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-eo.y,eo.x,0];return!Tr(e,wo,So,bo,Es)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,wo,So,bo,Es))?!1:(Ts.crossVectors(Hi,Gi),e=[Ts.x,Ts.y,Ts.z],Tr(e,wo,So,bo,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new E,new E,new E,new E,new E,new E,new E,new E],li=new E,bs=new Sn,wo=new E,So=new E,bo=new E,Hi=new E,Gi=new E,eo=new E,os=new E,Es=new E,Ts=new E,no=new E;function Tr(n,t,e,i,o){for(let s=0,a=n.length-3;s<=a;s+=3){no.fromArray(n,s);const r=o.x*Math.abs(no.x)+o.y*Math.abs(no.y)+o.z*Math.abs(no.z),l=t.dot(no),u=e.dot(no),h=i.dot(no);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>r)return!1}return!0}const Ch=new Sn,ss=new E,Ar=new E;class xs{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ch.setFromPoints(t).getCenter(i);let o=0;for(let s=0,a=t.length;s<a;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(ss,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Ar)),this.expandByPoint(ss.copy(t.center).sub(Ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new E,Cr=new E,As=new E,Vi=new E,Rr=new E,Cs=new E,Pr=new E;class fr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){Cr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(Cr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(As),r=Vi.dot(this.direction),l=-Vi.dot(As),u=Vi.lengthSq(),h=Math.abs(1-a*a);let d,m,p,_;if(h>0)if(d=a*l-r,m=a*r-l,_=s*h,d>=0)if(m>=-_)if(m<=_){const g=1/h;d*=g,m*=g,p=d*(d+a*m+2*r)+m*(a*d+m+2*l)+u}else m=s,d=Math.max(0,-(a*m+r)),p=-d*d+m*(m+2*l)+u;else m=-s,d=Math.max(0,-(a*m+r)),p=-d*d+m*(m+2*l)+u;else m<=-_?(d=Math.max(0,-(-a*s+r)),m=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+u):m<=_?(d=0,m=Math.min(Math.max(-s,-l),s),p=m*(m+2*l)+u):(d=Math.max(0,-(a*s+r)),m=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+m*(m+2*l)+u);else m=a>0?-s:s,d=Math.max(0,-(a*m+r)),p=-d*d+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(Cr).addScaledVector(As,m),p}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),o=wi.dot(wi)-i*i,s=t.radius*t.radius;if(o>s)return null;const a=Math.sqrt(s-o),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,s,a,r,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(i=(t.min.x-m.x)*u,o=(t.max.x-m.x)*u):(i=(t.max.x-m.x)*u,o=(t.min.x-m.x)*u),h>=0?(s=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(s=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),i>a||s>o||((s>i||isNaN(i))&&(i=s),(a<o||isNaN(o))&&(o=a),d>=0?(r=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(r=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),i>l||r>o)||((r>i||i!==i)&&(i=r),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,o,s){Rr.subVectors(e,t),Cs.subVectors(i,t),Pr.crossVectors(Rr,Cs);let a=this.direction.dot(Pr),r;if(a>0){if(o)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Vi.subVectors(this.origin,t);const l=r*this.direction.dot(Cs.crossVectors(Vi,Cs));if(l<0)return null;const u=r*this.direction.dot(Rr.cross(Vi));if(u<0||l+u>a)return null;const h=-r*Vi.dot(Pr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,e,i,o,s,a,r,l,u,h,d,m,p,_,g,f){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,a,r,l,u,h,d,m,p,_,g,f)}set(t,e,i,o,s,a,r,l,u,h,d,m,p,_,g,f){const c=this.elements;return c[0]=t,c[4]=e,c[8]=i,c[12]=o,c[1]=s,c[5]=a,c[9]=r,c[13]=l,c[2]=u,c[6]=h,c[10]=d,c[14]=m,c[3]=p,c[7]=_,c[11]=g,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Eo.setFromMatrixColumn(t,0).length(),s=1/Eo.setFromMatrixColumn(t,1).length(),a=1/Eo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(o),u=Math.sin(o),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=a*h,p=a*d,_=r*h,g=r*d;e[0]=l*h,e[4]=-l*d,e[8]=u,e[1]=p+_*u,e[5]=m-g*u,e[9]=-r*l,e[2]=g-m*u,e[6]=_+p*u,e[10]=a*l}else if(t.order==="YXZ"){const m=l*h,p=l*d,_=u*h,g=u*d;e[0]=m+g*r,e[4]=_*r-p,e[8]=a*u,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=p*r-_,e[6]=g+m*r,e[10]=a*l}else if(t.order==="ZXY"){const m=l*h,p=l*d,_=u*h,g=u*d;e[0]=m-g*r,e[4]=-a*d,e[8]=_+p*r,e[1]=p+_*r,e[5]=a*h,e[9]=g-m*r,e[2]=-a*u,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const m=a*h,p=a*d,_=r*h,g=r*d;e[0]=l*h,e[4]=_*u-p,e[8]=m*u+g,e[1]=l*d,e[5]=g*u+m,e[9]=p*u-_,e[2]=-u,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,p=a*u,_=r*l,g=r*u;e[0]=l*h,e[4]=g-m*d,e[8]=_*d+p,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-u*h,e[6]=p*d+_,e[10]=m-g*d}else if(t.order==="XZY"){const m=a*l,p=a*u,_=r*l,g=r*u;e[0]=l*h,e[4]=-d,e[8]=u*h,e[1]=m*d+g,e[5]=a*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=r*h,e[10]=g*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ph)}lookAt(t,e,i){const o=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Wi.crossVectors(i,jn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Wi.crossVectors(i,jn)),Wi.normalize(),Rs.crossVectors(jn,Wi),o[0]=Wi.x,o[4]=Rs.x,o[8]=jn.x,o[1]=Wi.y,o[5]=Rs.y,o[9]=jn.y,o[2]=Wi.z,o[6]=Rs.z,o[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],u=i[12],h=i[1],d=i[5],m=i[9],p=i[13],_=i[2],g=i[6],f=i[10],c=i[14],M=i[3],v=i[7],w=i[11],U=i[15],P=o[0],R=o[4],tt=o[8],y=o[12],b=o[1],W=o[5],nt=o[9],yt=o[13],k=o[2],ut=o[6],q=o[10],rt=o[14],V=o[3],Mt=o[7],X=o[11],Et=o[15];return s[0]=a*P+r*b+l*k+u*V,s[4]=a*R+r*W+l*ut+u*Mt,s[8]=a*tt+r*nt+l*q+u*X,s[12]=a*y+r*yt+l*rt+u*Et,s[1]=h*P+d*b+m*k+p*V,s[5]=h*R+d*W+m*ut+p*Mt,s[9]=h*tt+d*nt+m*q+p*X,s[13]=h*y+d*yt+m*rt+p*Et,s[2]=_*P+g*b+f*k+c*V,s[6]=_*R+g*W+f*ut+c*Mt,s[10]=_*tt+g*nt+f*q+c*X,s[14]=_*y+g*yt+f*rt+c*Et,s[3]=M*P+v*b+w*k+U*V,s[7]=M*R+v*W+w*ut+U*Mt,s[11]=M*tt+v*nt+w*q+U*X,s[15]=M*y+v*yt+w*rt+U*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],s=t[12],a=t[1],r=t[5],l=t[9],u=t[13],h=t[2],d=t[6],m=t[10],p=t[14],_=t[3],g=t[7],f=t[11],c=t[15];return _*(+s*l*d-o*u*d-s*r*m+i*u*m+o*r*p-i*l*p)+g*(+e*l*p-e*u*m+s*a*m-o*a*p+o*u*h-s*l*h)+f*(+e*u*d-e*r*p-s*a*d+i*a*p+s*r*h-i*u*h)+c*(-o*r*h-e*l*d+e*r*m+o*a*d-i*a*m+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],a=t[4],r=t[5],l=t[6],u=t[7],h=t[8],d=t[9],m=t[10],p=t[11],_=t[12],g=t[13],f=t[14],c=t[15],M=d*f*u-g*m*u+g*l*p-r*f*p-d*l*c+r*m*c,v=_*m*u-h*f*u-_*l*p+a*f*p+h*l*c-a*m*c,w=h*g*u-_*d*u+_*r*p-a*g*p-h*r*c+a*d*c,U=_*d*l-h*g*l-_*r*m+a*g*m+h*r*f-a*d*f,P=e*M+i*v+o*w+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=M*R,t[1]=(g*m*s-d*f*s-g*o*p+i*f*p+d*o*c-i*m*c)*R,t[2]=(r*f*s-g*l*s+g*o*u-i*f*u-r*o*c+i*l*c)*R,t[3]=(d*l*s-r*m*s-d*o*u+i*m*u+r*o*p-i*l*p)*R,t[4]=v*R,t[5]=(h*f*s-_*m*s+_*o*p-e*f*p-h*o*c+e*m*c)*R,t[6]=(_*l*s-a*f*s-_*o*u+e*f*u+a*o*c-e*l*c)*R,t[7]=(a*m*s-h*l*s+h*o*u-e*m*u-a*o*p+e*l*p)*R,t[8]=w*R,t[9]=(_*d*s-h*g*s-_*i*p+e*g*p+h*i*c-e*d*c)*R,t[10]=(a*g*s-_*r*s+_*i*u-e*g*u-a*i*c+e*r*c)*R,t[11]=(h*r*s-a*d*s-h*i*u+e*d*u+a*i*p-e*r*p)*R,t[12]=U*R,t[13]=(h*g*o-_*d*o+_*i*m-e*g*m-h*i*f+e*d*f)*R,t[14]=(_*r*o-a*g*o-_*i*l+e*g*l+a*i*f-e*r*f)*R,t[15]=(a*d*o-h*r*o+h*i*l-e*d*l-a*i*m+e*r*m)*R,this}scale(t){const e=this.elements,i=t.x,o=t.y,s=t.z;return e[0]*=i,e[4]*=o,e[8]*=s,e[1]*=i,e[5]*=o,e[9]*=s,e[2]*=i,e[6]*=o,e[10]*=s,e[3]*=i,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,u=s*a,h=s*r;return this.set(u*a+i,u*r-o*l,u*l+o*r,0,u*r+o*l,h*r+i,h*l-o*a,0,u*l-o*r,h*l+o*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,s,a){return this.set(1,i,s,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,u=s+s,h=a+a,d=r+r,m=s*u,p=s*h,_=s*d,g=a*h,f=a*d,c=r*d,M=l*u,v=l*h,w=l*d,U=i.x,P=i.y,R=i.z;return o[0]=(1-(g+c))*U,o[1]=(p+w)*U,o[2]=(_-v)*U,o[3]=0,o[4]=(p-w)*P,o[5]=(1-(m+c))*P,o[6]=(f+M)*P,o[7]=0,o[8]=(_+v)*R,o[9]=(f-M)*R,o[10]=(1-(m+g))*R,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let s=Eo.set(o[0],o[1],o[2]).length();const a=Eo.set(o[4],o[5],o[6]).length(),r=Eo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],ci.copy(this);const u=1/s,h=1/a,d=1/r;return ci.elements[0]*=u,ci.elements[1]*=u,ci.elements[2]*=u,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,e.setFromRotationMatrix(ci),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,o,s,a,r=Li){const l=this.elements,u=2*s/(e-t),h=2*s/(i-o),d=(e+t)/(e-t),m=(i+o)/(i-o);let p,_;if(r===Li)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(r===rr)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,o,s,a,r=Li){const l=this.elements,u=1/(e-t),h=1/(i-o),d=1/(a-s),m=(e+t)*u,p=(i+o)*h;let _,g;if(r===Li)_=(a+s)*d,g=-2*d;else if(r===rr)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Eo=new E,ci=new sn,Rh=new E(0,0,0),Ph=new E(1,1,1),Wi=new E,Rs=new E,jn=new E,wl=new sn,Sl=new ts;class Qi{constructor(t=0,e=0,i=0,o=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,s=o[0],a=o[4],r=o[8],l=o[1],u=o[5],h=o[9],d=o[2],m=o[6],p=o[10];switch(e){case"XYZ":this._y=Math.asin(En(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const bl=new E,To=new ts,Si=new sn,Ps=new E,rs=new E,Lh=new E,Ih=new ts,El=new E(1,0,0),Tl=new E(0,1,0),Al=new E(0,0,1),Uh={type:"added"},Nh={type:"removed"};class _n extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new E,e=new Qi,i=new ts,o=new E(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ze}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return To.setFromAxisAngle(t,e),this.quaternion.multiply(To),this}rotateOnWorldAxis(t,e){return To.setFromAxisAngle(t,e),this.quaternion.premultiply(To),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(rs,Ps,this.up):Si.lookAt(Ps,rs,this.up),this.quaternion.setFromRotationMatrix(Si),o&&(Si.extractRotation(o.matrixWorld),To.setFromRotationMatrix(Si),this.quaternion.premultiply(To.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let s=0,a=o.length;s<a;s++){const r=o[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,u=this.material.length;l<u;l++)r.push(s(t.materials,this.material[l]));o.material=r}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];o.animations.push(s(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),m=a(t.skeletons),p=a(t.animations),_=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=o,i;function a(r){const l=[];for(const u in r){const h=r[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}_n.DEFAULT_UP=new E(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new E,bi=new E,Dr=new E,Ei=new E,Ao=new E,Co=new E,Cl=new E,Lr=new E,Ir=new E,Ur=new E;let Ds=!1;class oi{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),ui.subVectors(t,e),o.cross(ui);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,i,o,s){ui.subVectors(o,e),bi.subVectors(i,e),Dr.subVectors(t,e);const a=ui.dot(ui),r=ui.dot(bi),l=ui.dot(Dr),u=bi.dot(bi),h=bi.dot(Dr),d=a*u-r*r;if(d===0)return s.set(0,0,0),null;const m=1/d,p=(u*l-r*h)*m,_=(a*h-r*l)*m;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(t,e,i,o,s,a,r,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(t,e,i,o,s,a,r,l)}static getInterpolation(t,e,i,o,s,a,r,l){return this.getBarycoord(t,e,i,o,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(r,Ei.z),l)}static isFrontFacing(t,e,i,o){return ui.subVectors(i,e),bi.subVectors(t,e),ui.cross(bi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ui.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),oi.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}getInterpolation(t,e,i,o,s){return oi.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,s=this.c;let a,r;Ao.subVectors(o,i),Co.subVectors(s,i),Lr.subVectors(t,i);const l=Ao.dot(Lr),u=Co.dot(Lr);if(l<=0&&u<=0)return e.copy(i);Ir.subVectors(t,o);const h=Ao.dot(Ir),d=Co.dot(Ir);if(h>=0&&d<=h)return e.copy(o);const m=l*d-h*u;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ao,a);Ur.subVectors(t,s);const p=Ao.dot(Ur),_=Co.dot(Ur);if(_>=0&&p<=_)return e.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return r=u/(u-_),e.copy(i).addScaledVector(Co,r);const f=h*_-p*d;if(f<=0&&d-h>=0&&p-_>=0)return Cl.subVectors(s,o),r=(d-h)/(d-h+(p-_)),e.copy(o).addScaledVector(Cl,r);const c=1/(f+g+m);return a=g*c,r=m*c,e.copy(i).addScaledVector(Ao,a).addScaledVector(Co,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Nr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class fe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=$e.workingColorSpace){return this.r=t,this.g=e,this.b=i,$e.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=$e.workingColorSpace){if(t=Ma(t,1),e=En(e,0,1),i=En(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Nr(a,s,t+1/3),this.g=Nr(a,s,t),this.b=Nr(a,s,t-1/3)}return $e.toWorkingColorSpace(this,o),this}setStyle(t,e=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=o[1],r=o[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const i=qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return $e.fromWorkingColorSpace(On.copy(this),t),Math.round(En(On.r*255,0,255))*65536+Math.round(En(On.g*255,0,255))*256+Math.round(En(On.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$e.workingColorSpace){$e.fromWorkingColorSpace(On.copy(this),e);const i=On.r,o=On.g,s=On.b,a=Math.max(i,o,s),r=Math.min(i,o,s);let l,u;const h=(r+a)/2;if(r===a)l=0,u=0;else{const d=a-r;switch(u=h<=.5?d/(a+r):d/(2-a-r),a){case i:l=(o-s)/d+(o<s?6:0);break;case o:l=(s-i)/d+2;break;case s:l=(i-o)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=$e.workingColorSpace){return $e.fromWorkingColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fn){$e.fromWorkingColorSpace(On.copy(this),t);const e=On.r,i=On.g,o=On.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Ls);const i=fs(Xi.h,Ls.h,e),o=fs(Xi.s,Ls.s,e),s=fs(Xi.l,Ls.l,e);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*o,this.g=s[1]*e+s[4]*i+s[7]*o,this.b=s[2]*e+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new fe;fe.NAMES=qc;let Fh=0;class zi extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=qo,this.side=to,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==to&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ta&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(e){const s=o(t.textures),a=o(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dn extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new E,Is=new Qt;class Yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix3(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),o=en(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),o=en(o,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}}class Yc extends Yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zc extends Yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class tn extends Yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Oh=0;const ni=new sn,Fr=new _n,Ro=new E,Kn=new Sn,as=new Sn,Cn=new E;class Qe extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Zc:Yc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];as.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(Kn.min,as.min),Kn.expandByPoint(Cn),Cn.addVectors(Kn.max,as.max),Kn.expandByPoint(Cn)):(Kn.expandByPoint(as.min),Kn.expandByPoint(as.max))}Kn.getCenter(i);let o=0;for(let s=0,a=t.count;s<a;s++)Cn.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(Cn));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],l=this.morphTargetsRelative;for(let u=0,h=r.count;u<h;u++)Cn.fromBufferAttribute(r,u),l&&(Ro.fromBufferAttribute(t,u),Cn.add(Ro)),o=Math.max(o,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,o=e.position.array,s=e.normal.array,a=e.uv.array,r=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let b=0;b<r;b++)u[b]=new E,h[b]=new E;const d=new E,m=new E,p=new E,_=new Qt,g=new Qt,f=new Qt,c=new E,M=new E;function v(b,W,nt){d.fromArray(o,b*3),m.fromArray(o,W*3),p.fromArray(o,nt*3),_.fromArray(a,b*2),g.fromArray(a,W*2),f.fromArray(a,nt*2),m.sub(d),p.sub(d),g.sub(_),f.sub(_);const yt=1/(g.x*f.y-f.x*g.y);isFinite(yt)&&(c.copy(m).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar(yt),M.copy(p).multiplyScalar(g.x).addScaledVector(m,-f.x).multiplyScalar(yt),u[b].add(c),u[W].add(c),u[nt].add(c),h[b].add(M),h[W].add(M),h[nt].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,W=w.length;b<W;++b){const nt=w[b],yt=nt.start,k=nt.count;for(let ut=yt,q=yt+k;ut<q;ut+=3)v(i[ut+0],i[ut+1],i[ut+2])}const U=new E,P=new E,R=new E,tt=new E;function y(b){R.fromArray(s,b*3),tt.copy(R);const W=u[b];U.copy(W),U.sub(R.multiplyScalar(R.dot(W))).normalize(),P.crossVectors(tt,W);const yt=P.dot(h[b])<0?-1:1;l[b*4]=U.x,l[b*4+1]=U.y,l[b*4+2]=U.z,l[b*4+3]=yt}for(let b=0,W=w.length;b<W;++b){const nt=w[b],yt=nt.start,k=nt.count;for(let ut=yt,q=yt+k;ut<q;ut+=3)y(i[ut+0]),y(i[ut+1]),y(i[ut+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const o=new E,s=new E,a=new E,r=new E,l=new E,u=new E,h=new E,d=new E;if(t)for(let m=0,p=t.count;m<p;m+=3){const _=t.getX(m+0),g=t.getX(m+1),f=t.getX(m+2);o.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),h.subVectors(a,s),d.subVectors(o,s),h.cross(d),r.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,f),r.add(h),l.add(h),u.add(h),i.setXYZ(_,r.x,r.y,r.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,u.x,u.y,u.z)}else for(let m=0,p=e.count;m<p;m+=3)o.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,s),d.subVectors(o,s),h.cross(d),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(r,l){const u=r.array,h=r.itemSize,d=r.normalized,m=new u.constructor(l.length*h);let p=0,_=0;for(let g=0,f=l.length;g<f;g++){r.isInterleavedBufferAttribute?p=l[g]*r.data.stride+r.offset:p=l[g]*h;for(let c=0;c<h;c++)m[_++]=u[p++]}return new Yn(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,o=this.attributes;for(const r in o){const l=o[r],u=t(l,i);e.setAttribute(r,u)}const s=this.morphAttributes;for(const r in s){const l=[],u=s[r];for(let h=0,d=u.length;h<d;h++){const m=u[h],p=t(m,i);l.push(p)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const u=a[r];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const o={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,m=u.length;d<m;d++){const p=u[d];h.push(p.toJSON(t.data))}h.length>0&&(o[l]=h,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const u in o){const h=o[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],d=s[u];for(let m=0,p=d.length;m<p;m++)h.push(d[m].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new sn,io=new fr,Us=new xs,Pl=new E,Po=new E,Do=new E,Lo=new E,Or=new E,Ns=new E,Fs=new Qt,Os=new Qt,zs=new Qt,Dl=new E,Ll=new E,Il=new E,Bs=new E,ks=new E;class L extends _n{constructor(t=new Qe,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const r=this.morphTargetInfluences;if(s&&r){Ns.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=r[l],d=s[l];h!==0&&(Or.fromBufferAttribute(d,t),a?Ns.addScaledVector(Or,h):Ns.addScaledVector(Or.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),io.copy(t.ray).recast(t.near),!(Us.containsPoint(io.origin)===!1&&(io.intersectSphere(Us,Pl)===null||io.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Rl.copy(s).invert(),io.copy(t.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&io.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,io)))}_computeIntersections(t,e,i){let o;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,m=s.groups,p=s.drawRange;if(r!==null)if(Array.isArray(a))for(let _=0,g=m.length;_<g;_++){const f=m[_],c=a[f.materialIndex],M=Math.max(f.start,p.start),v=Math.min(r.count,Math.min(f.start+f.count,p.start+p.count));for(let w=M,U=v;w<U;w+=3){const P=r.getX(w),R=r.getX(w+1),tt=r.getX(w+2);o=Hs(this,c,t,i,u,h,d,P,R,tt),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(r.count,p.start+p.count);for(let f=_,c=g;f<c;f+=3){const M=r.getX(f),v=r.getX(f+1),w=r.getX(f+2);o=Hs(this,a,t,i,u,h,d,M,v,w),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=m.length;_<g;_++){const f=m[_],c=a[f.materialIndex],M=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let w=M,U=v;w<U;w+=3){const P=w,R=w+1,tt=w+2;o=Hs(this,c,t,i,u,h,d,P,R,tt),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,c=g;f<c;f+=3){const M=f,v=f+1,w=f+2;o=Hs(this,a,t,i,u,h,d,M,v,w),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function zh(n,t,e,i,o,s,a,r){let l;if(t.side===Un?l=i.intersectTriangle(a,s,o,!0,r):l=i.intersectTriangle(o,s,a,t.side===to,r),l===null)return null;ks.copy(r),ks.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(ks);return u<e.near||u>e.far?null:{distance:u,point:ks.clone(),object:n}}function Hs(n,t,e,i,o,s,a,r,l,u){n.getVertexPosition(r,Po),n.getVertexPosition(l,Do),n.getVertexPosition(u,Lo);const h=zh(n,t,e,i,Po,Do,Lo,Bs);if(h){o&&(Fs.fromBufferAttribute(o,r),Os.fromBufferAttribute(o,l),zs.fromBufferAttribute(o,u),h.uv=oi.getInterpolation(Bs,Po,Do,Lo,Fs,Os,zs,new Qt)),s&&(Fs.fromBufferAttribute(s,r),Os.fromBufferAttribute(s,l),zs.fromBufferAttribute(s,u),h.uv1=oi.getInterpolation(Bs,Po,Do,Lo,Fs,Os,zs,new Qt),h.uv2=h.uv1),a&&(Dl.fromBufferAttribute(a,r),Ll.fromBufferAttribute(a,l),Il.fromBufferAttribute(a,u),h.normal=oi.getInterpolation(Bs,Po,Do,Lo,Dl,Ll,Il,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c:u,normal:new E,materialIndex:0};oi.getNormal(Po,Do,Lo,d.normal),h.face=d}return h}class It extends Qe{constructor(t=1,e=1,i=1,o=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:s,depthSegments:a};const r=this;o=Math.floor(o),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let m=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,o,a,2),_("x","z","y",1,-1,t,i,-e,o,a,3),_("x","y","z",1,-1,t,e,i,o,s,4),_("x","y","z",-1,-1,t,e,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function _(g,f,c,M,v,w,U,P,R,tt,y){const b=w/R,W=U/tt,nt=w/2,yt=U/2,k=P/2,ut=R+1,q=tt+1;let rt=0,V=0;const Mt=new E;for(let X=0;X<q;X++){const Et=X*W-yt;for(let Nt=0;Nt<ut;Nt++){const G=Nt*b-nt;Mt[g]=G*M,Mt[f]=Et*v,Mt[c]=k,u.push(Mt.x,Mt.y,Mt.z),Mt[g]=0,Mt[f]=0,Mt[c]=P>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),d.push(Nt/R),d.push(1-X/tt),rt+=1}}for(let X=0;X<tt;X++)for(let Et=0;Et<R;Et++){const Nt=m+Et+ut*X,G=m+Et+ut*(X+1),et=m+(Et+1)+ut*(X+1),it=m+(Et+1)+ut*X;l.push(Nt,G,it),l.push(G,et,it),V+=6}r.addGroup(p,V,y),p+=V,m+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function kn(n){const t={};for(let e=0;e<n.length;e++){const i=Jo(n[e]);for(const o in i)t[o]=i[o]}return t}function Bh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jc(n){return n.getRenderTarget()===null?n.outputColorSpace:$e.workingColorSpace}const Ii={clone:Jo,merge:kn};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jo(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kc extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $n extends Kc{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,s=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*o/l,e-=a.offsetY*i/u,o*=a.width/l,i*=a.height/u}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Io=-90,Uo=1;class Jc extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Io,Uo,t,e);o.layers=this.layers,this.add(o);const s=new $n(Io,Uo,t,e);s.layers=this.layers,this.add(s);const a=new $n(Io,Uo,t,e);a.layers=this.layers,this.add(a);const r=new $n(Io,Uo,t,e);r.layers=this.layers,this.add(r);const l=new $n(Io,Uo,t,e);l.layers=this.layers,this.add(l);const u=new $n(Io,Uo,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,s,a,r,l]=e;for(const u of e)this.remove(u);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,u,h]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,s),t.setRenderTarget(i,1,o),t.render(e,a),t.setRenderTarget(i,2,o),t.render(e,r),t.setRenderTarget(i,3,o),t.render(e,l),t.setRenderTarget(i,4,o),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,o),t.render(e,h),t.setRenderTarget(d,m,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $c extends Gn{constructor(t,e,i,o,s,a,r,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Zo,super(t,e,i,o,s,a,r,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qc extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];e.encoding!==void 0&&(ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ho?fn:Qn),this.texture=new $c(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new It(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:zn});s.uniforms.tEquirect.value=e;const a=new L(o,s),r=e.minFilter;return e.minFilter===Ko&&(e.minFilter=Hn),new Jc(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,o){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,o);t.setRenderTarget(s)}}const zr=new E,Gh=new E,Vh=new ze;class ao{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=zr.subVectors(i,e).cross(Gh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(zr),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vh.getNormalMatrix(t),o=this.coplanarPoint(zr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new xs,Gs=new E;class wa{constructor(t=new ao,e=new ao,i=new ao,o=new ao,s=new ao,a=new ao){this.planes=[t,e,i,o,s,a]}set(t,e,i,o,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(o),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Li){const i=this.planes,o=t.elements,s=o[0],a=o[1],r=o[2],l=o[3],u=o[4],h=o[5],d=o[6],m=o[7],p=o[8],_=o[9],g=o[10],f=o[11],c=o[12],M=o[13],v=o[14],w=o[15];if(i[0].setComponents(l-s,m-u,f-p,w-c).normalize(),i[1].setComponents(l+s,m+u,f+p,w+c).normalize(),i[2].setComponents(l+a,m+h,f+_,w+M).normalize(),i[3].setComponents(l-a,m-h,f-_,w-M).normalize(),i[4].setComponents(l-r,m-d,f-g,w-v).normalize(),e===Li)i[5].setComponents(l+r,m+d,f+g,w+v).normalize();else if(e===rr)i[5].setComponents(r,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(t){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(t.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(Gs.x=o.normal.x>0?t.max.x:t.min.x,Gs.y=o.normal.y>0?t.max.y:t.min.y,Gs.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let n=null,t=!1,e=null,i=null;function o(s,a){e(s,a),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Wh(n,t){const e=t.isWebGL2,i=new WeakMap;function o(u,h){const d=u.array,m=u.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,m),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,h,d){const m=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&_.length===0&&n.bufferSubData(d,0,m),_.length!==0){for(let g=0,f=_.length;g<f;g++){const c=_[g];e?n.bufferSubData(d,c.start*m.BYTES_PER_ELEMENT,m,c.start,c.count):n.bufferSubData(d,c.start*m.BYTES_PER_ELEMENT,m.subarray(c.start,c.start+c.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(d,p.offset*m.BYTES_PER_ELEMENT,m,p.offset,p.count):n.bufferSubData(d,p.offset*m.BYTES_PER_ELEMENT,m.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function r(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(n.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const m=i.get(u);(!m||m.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,o(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,h),d.version=u.version}}return{get:a,remove:r,update:l}}class qe extends Qe{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(o),u=r+1,h=l+1,d=t/r,m=e/l,p=[],_=[],g=[],f=[];for(let c=0;c<h;c++){const M=c*m-a;for(let v=0;v<u;v++){const w=v*d-s;_.push(w,-M,0),g.push(0,0,1),f.push(v/r),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let M=0;M<r;M++){const v=M+u*c,w=M+u*(c+1),U=M+1+u*(c+1),P=M+1+u*c;p.push(v,w,P),p.push(w,U,P)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,od=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`
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
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ef=`#if defined( USE_POINTS_UV )
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
#endif`,nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
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
#endif`,af=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
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
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
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
}`,$f=`#if DEPTH_PACKING == 3200
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
}`,Qf=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,v0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,w0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Zh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:Jh,aomap_pars_fragment:$h,batching_pars_vertex:Qh,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:od,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:ud,color_pars_fragment:hd,color_pars_vertex:dd,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:yd,colorspace_pars_fragment:wd,envmap_fragment:Sd,envmap_common_pars_fragment:bd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:zd,envmap_vertex:Ad,fog_vertex:Cd,fog_pars_vertex:Rd,fog_fragment:Pd,fog_pars_fragment:Dd,gradientmap_pars_fragment:Ld,lightmap_fragment:Id,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:Bd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Jd,map_fragment:$d,map_pars_fragment:Qd,map_particle_fragment:tf,map_particle_pars_fragment:ef,metalnessmap_fragment:nf,metalnessmap_pars_fragment:of,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:af,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:uf,normal_pars_fragment:hf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:vf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:yf,project_vertex:wf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Cf,shadowmap_vertex:Rf,shadowmask_pars_fragment:Pf,skinbase_vertex:Df,skinning_pars_vertex:Lf,skinning_vertex:If,skinnormal_vertex:Uf,specularmap_fragment:Nf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:zf,transmission_fragment:Bf,transmission_pars_fragment:kf,uv_pars_fragment:Hf,uv_pars_vertex:Gf,uv_vertex:Vf,worldpos_vertex:Wf,background_vert:Xf,background_frag:qf,backgroundCube_vert:Yf,backgroundCube_frag:Zf,cube_vert:jf,cube_frag:Kf,depth_vert:Jf,depth_frag:$f,distanceRGBA_vert:Qf,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:o0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:u0,meshnormal_vert:h0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:v0,points_vert:x0,points_frag:M0,shadow_vert:y0,shadow_frag:w0,sprite_vert:S0,sprite_frag:b0},ae={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},gi={basic:{uniforms:kn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kn([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kn([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kn([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:kn([ae.common,ae.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:kn([ae.lights,ae.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};gi.physical={uniforms:kn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Vs={r:0,b:0,g:0};function E0(n,t,e,i,o,s,a){const r=new fe(0);let l=s===!0?0:1,u,h,d=null,m=0,p=null;function _(f,c){let M=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?e:t).get(v)),v===null?g(r,l):v&&v.isColor&&(g(v,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===hr)?(h===void 0&&(h=new L(new It(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Jo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=$e.getTransfer(v.colorSpace)!==on,(d!==v||m!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,m=v.version,p=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new L(new qe(2,2),new yn({name:"BackgroundMaterial",uniforms:Jo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:to,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=$e.getTransfer(v.colorSpace)!==on,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||m!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,m=v.version,p=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function g(f,c){f.getRGB(Vs,jc(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,c,a)}return{getClearColor:function(){return r},setClearColor:function(f,c=1){r.set(f),l=c,g(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(r,l)},render:_}}function T0(n,t,e,i){const o=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},l=f(null);let u=l,h=!1;function d(k,ut,q,rt,V){let Mt=!1;if(a){const X=g(rt,q,ut);u!==X&&(u=X,p(u.object)),Mt=c(k,rt,q,V),Mt&&M(k,rt,q,V)}else{const X=ut.wireframe===!0;(u.geometry!==rt.id||u.program!==q.id||u.wireframe!==X)&&(u.geometry=rt.id,u.program=q.id,u.wireframe=X,Mt=!0)}V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Mt||h)&&(h=!1,tt(k,ut,q,rt),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function m(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function g(k,ut,q){const rt=q.wireframe===!0;let V=r[k.id];V===void 0&&(V={},r[k.id]=V);let Mt=V[ut.id];Mt===void 0&&(Mt={},V[ut.id]=Mt);let X=Mt[rt];return X===void 0&&(X=f(m()),Mt[rt]=X),X}function f(k){const ut=[],q=[],rt=[];for(let V=0;V<o;V++)ut[V]=0,q[V]=0,rt[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ut,enabledAttributes:q,attributeDivisors:rt,object:k,attributes:{},index:null}}function c(k,ut,q,rt){const V=u.attributes,Mt=ut.attributes;let X=0;const Et=q.getAttributes();for(const Nt in Et)if(Et[Nt].location>=0){const et=V[Nt];let it=Mt[Nt];if(it===void 0&&(Nt==="instanceMatrix"&&k.instanceMatrix&&(it=k.instanceMatrix),Nt==="instanceColor"&&k.instanceColor&&(it=k.instanceColor)),et===void 0||et.attribute!==it||it&&et.data!==it.data)return!0;X++}return u.attributesNum!==X||u.index!==rt}function M(k,ut,q,rt){const V={},Mt=ut.attributes;let X=0;const Et=q.getAttributes();for(const Nt in Et)if(Et[Nt].location>=0){let et=Mt[Nt];et===void 0&&(Nt==="instanceMatrix"&&k.instanceMatrix&&(et=k.instanceMatrix),Nt==="instanceColor"&&k.instanceColor&&(et=k.instanceColor));const it={};it.attribute=et,et&&et.data&&(it.data=et.data),V[Nt]=it,X++}u.attributes=V,u.attributesNum=X,u.index=rt}function v(){const k=u.newAttributes;for(let ut=0,q=k.length;ut<q;ut++)k[ut]=0}function w(k){U(k,0)}function U(k,ut){const q=u.newAttributes,rt=u.enabledAttributes,V=u.attributeDivisors;q[k]=1,rt[k]===0&&(n.enableVertexAttribArray(k),rt[k]=1),V[k]!==ut&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ut),V[k]=ut)}function P(){const k=u.newAttributes,ut=u.enabledAttributes;for(let q=0,rt=ut.length;q<rt;q++)ut[q]!==k[q]&&(n.disableVertexAttribArray(q),ut[q]=0)}function R(k,ut,q,rt,V,Mt,X){X===!0?n.vertexAttribIPointer(k,ut,q,V,Mt):n.vertexAttribPointer(k,ut,q,rt,V,Mt)}function tt(k,ut,q,rt){if(i.isWebGL2===!1&&(k.isInstancedMesh||rt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const V=rt.attributes,Mt=q.getAttributes(),X=ut.defaultAttributeValues;for(const Et in Mt){const Nt=Mt[Et];if(Nt.location>=0){let G=V[Et];if(G===void 0&&(Et==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),Et==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){const et=G.normalized,it=G.itemSize,Q=e.get(G);if(Q===void 0)continue;const dt=Q.buffer,bt=Q.type,Ht=Q.bytesPerElement,at=i.isWebGL2===!0&&(bt===n.INT||bt===n.UNSIGNED_INT||G.gpuType===Dc);if(G.isInterleavedBufferAttribute){const ft=G.data,I=ft.stride,Ot=G.offset;if(ft.isInstancedInterleavedBuffer){for(let St=0;St<Nt.locationSize;St++)U(Nt.location+St,ft.meshPerAttribute);k.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let St=0;St<Nt.locationSize;St++)w(Nt.location+St);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let St=0;St<Nt.locationSize;St++)R(Nt.location+St,it/Nt.locationSize,bt,et,I*Ht,(Ot+it/Nt.locationSize*St)*Ht,at)}else{if(G.isInstancedBufferAttribute){for(let ft=0;ft<Nt.locationSize;ft++)U(Nt.location+ft,G.meshPerAttribute);k.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ft=0;ft<Nt.locationSize;ft++)w(Nt.location+ft);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let ft=0;ft<Nt.locationSize;ft++)R(Nt.location+ft,it/Nt.locationSize,bt,et,it*Ht,it/Nt.locationSize*ft*Ht,at)}}else if(X!==void 0){const et=X[Et];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(Nt.location,et);break;case 3:n.vertexAttrib3fv(Nt.location,et);break;case 4:n.vertexAttrib4fv(Nt.location,et);break;default:n.vertexAttrib1fv(Nt.location,et)}}}}P()}function y(){nt();for(const k in r){const ut=r[k];for(const q in ut){const rt=ut[q];for(const V in rt)_(rt[V].object),delete rt[V];delete ut[q]}delete r[k]}}function b(k){if(r[k.id]===void 0)return;const ut=r[k.id];for(const q in ut){const rt=ut[q];for(const V in rt)_(rt[V].object),delete rt[V];delete ut[q]}delete r[k.id]}function W(k){for(const ut in r){const q=r[ut];if(q[k.id]===void 0)continue;const rt=q[k.id];for(const V in rt)_(rt[V].object),delete rt[V];delete q[k.id]}}function nt(){yt(),h=!0,u!==l&&(u=l,p(u.object))}function yt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:nt,resetDefaultState:yt,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:w,disableUnusedAttributes:P}}function A0(n,t,e,i){const o=i.isWebGL2;let s;function a(h){s=h}function r(h,d){n.drawArrays(s,h,d),e.update(d,s,1)}function l(h,d,m){if(m===0)return;let p,_;if(o)p=n,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,d,m),e.update(d,s,m)}function u(h,d,m){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<m;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,m);let _=0;for(let g=0;g<m;g++)_+=d[g];e.update(_,s,1)}}this.setMode=a,this.render=r,this.renderInstances=l,this.renderMultiDraw=u}function C0(n,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const u=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),c=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,w=a||t.has("OES_texture_float"),U=v&&w,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:o,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:c,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:U,maxSamples:P}}function R0(n){const t=this;let e=null,i=0,o=!1,s=!1;const a=new ao,r=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const p=d.length!==0||m||i!==0||o;return o=m,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=h(d,m,0)},this.setState=function(d,m,p){const _=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,c=n.get(d);if(!o||_===null||_.length===0||s&&!f)s?h(null):u();else{const M=s?0:i,v=M*4;let w=c.clippingState||null;l.value=w,w=h(_,m,v,p);for(let U=0;U!==v;++U)w[U]=e[U];c.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,m,p,_){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const c=p+g*4,M=m.matrixWorldInverse;r.getNormalMatrix(M),(f===null||f.length<c)&&(f=new Float32Array(c));for(let v=0,w=p;v!==g;++v,w+=4)a.copy(d[v]).applyMatrix4(M,r),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function P0(n){let t=new WeakMap;function e(a,r){return r===na?a.mapping=Zo:r===ia&&(a.mapping=jo),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===na||r===ia)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Qc(l.height/2);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){const r=a.target;r.removeEventListener("dispose",o);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Sa extends Kc{constructor(t=-1,e=1,i=1,o=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=o+e,l=o-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wo=4,Ul=[.125,.215,.35,.446,.526,.582],co=20,Br=new Sa,Nl=new fe;let kr=null,Hr=0,Gr=0;const lo=(1+Math.sqrt(5))/2,No=1/lo,Fl=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,lo,No),new E(0,lo,-No),new E(No,0,lo),new E(-No,0,lo),new E(lo,No,0),new E(-lo,No,0)];class la{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,o,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Hr,Gr),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zo||t.mapping===jo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:hi,format:ri,colorSpace:Oi,depthBuffer:!1},o=Ol(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(s)),this._blurMaterial=L0(s,t,e)}return o}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,i,o){const r=new $n(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Nl),h.toneMapping=Ki,h.autoClear=!1;const p=new dn({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new L(new It,p);let g=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(Nl),g=!0);for(let c=0;c<6;c++){const M=c%3;M===0?(r.up.set(0,l[c],0),r.lookAt(u[c],0,0)):M===1?(r.up.set(0,0,l[c]),r.lookAt(0,u[c],0)):(r.up.set(0,l[c],0),r.lookAt(0,0,u[c]));const v=this._cubeSize;Ws(o,M*v,c>2?v:0,v,v),h.setRenderTarget(o),g&&h.render(_,r),h.render(t,r)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=m,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Zo||t.mapping===jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const s=o?this._cubemapMaterial:this._equirectMaterial,a=new L(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Fl[(o-1)%Fl.length];this._blur(t,o-1,o,s,a)}e.autoClear=i}_blur(t,e,i,o,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,o,"latitudinal",s),this._halfBlur(a,t,i,i,o,"longitudinal",s)}_halfBlur(t,e,i,o,s,a,r){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new L(this._lodPlanes[o],u),m=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*co-1),g=s/_,f=isFinite(s)?1+Math.floor(h*g):co;f>co&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${co}`);const c=[];let M=0;for(let R=0;R<co;++R){const tt=R/g,y=Math.exp(-tt*tt/2);c.push(y),R===0?M+=y:R<f&&(M+=2*y)}for(let R=0;R<c.length;R++)c[R]=c[R]/M;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=c,m.latitudinal.value=a==="latitudinal",r&&(m.poleAxis.value=r);const{_lodMax:v}=this;m.dTheta.value=_,m.mipInt.value=v-i;const w=this._sizeLods[o],U=3*w*(o>v-Wo?o-v+Wo:0),P=4*(this._cubeSize-w);Ws(e,U,P,3*w,2*w),l.setRenderTarget(e),l.render(d,Br)}}function D0(n){const t=[],e=[],i=[];let o=n;const s=n-Wo+1+Ul.length;for(let a=0;a<s;a++){const r=Math.pow(2,o);e.push(r);let l=1/r;a>n-Wo?l=Ul[a-n+Wo-1]:a===0&&(l=0),i.push(l);const u=1/(r-2),h=-u,d=1+u,m=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,g=3,f=2,c=1,M=new Float32Array(g*_*p),v=new Float32Array(f*_*p),w=new Float32Array(c*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,tt=P>2?0:-1,y=[R,tt,0,R+2/3,tt,0,R+2/3,tt+1,0,R,tt,0,R+2/3,tt+1,0,R,tt+1,0];M.set(y,g*_*P),v.set(m,f*_*P);const b=[P,P,P,P,P,P];w.set(b,c*_*P)}const U=new Qe;U.setAttribute("position",new Yn(M,g)),U.setAttribute("uv",new Yn(v,f)),U.setAttribute("faceIndex",new Yn(w,c)),t.push(U),o>Wo&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ol(n,t,e){const i=new ei(n,t,e);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function L0(n,t,e){const i=new Float32Array(co),o=new E(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ba(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function zl(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Bl(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function I0(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,u=l===na||l===ia,h=l===Zo||l===jo;if(u||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new la(n)),d=u?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(u&&d&&d.height>0||h&&d&&o(d)){e===null&&(e=new la(n));const m=u?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,m),r.addEventListener("dispose",s),m.texture}else return null}}}return r}function o(r){let l=0;const u=6;for(let h=0;h<u;h++)r[h]!==void 0&&l++;return l===u}function s(r){const l=r.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function U0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function N0(n,t,e,i){const o={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const g=m.morphAttributes[_];for(let f=0,c=g.length;f<c;f++)t.remove(g[f])}m.removeEventListener("dispose",a),delete o[m.id];const p=s.get(m);p&&(t.remove(p),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function r(d,m){return o[m.id]===!0||(m.addEventListener("dispose",a),o[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const _ in m)t.update(m[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let f=0,c=g.length;f<c;f++)t.update(g[f],n.ARRAY_BUFFER)}}function u(d){const m=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let v=0,w=M.length;v<w;v+=3){const U=M[v+0],P=M[v+1],R=M[v+2];m.push(U,P,P,R,R,U)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,w=M.length/3-1;v<w;v+=3){const U=v+0,P=v+1,R=v+2;m.push(U,P,P,R,R,U)}}else return;const f=new(Gc(m)?Zc:Yc)(m,1);f.version=g;const c=s.get(d);c&&t.remove(c),s.set(d,f)}function h(d){const m=s.get(d);if(m){const p=d.index;p!==null&&m.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function F0(n,t,e,i){const o=i.isWebGL2;let s;function a(p){s=p}let r,l;function u(p){r=p.type,l=p.bytesPerElement}function h(p,_){n.drawElements(s,_,r,p*l),e.update(_,s,1)}function d(p,_,g){if(g===0)return;let f,c;if(o)f=n,c="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[c](s,_,r,p*l,g),e.update(_,s,g)}function m(p,_,g){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<g;c++)this.render(p[c]/l,_[c]);else{f.multiDrawElementsWEBGL(s,_,0,r,p,0,g);let c=0;for(let M=0;M<g;M++)c+=_[M];e.update(c,s,1)}}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=m}function O0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=r*(s/3);break;case n.LINES:e.lines+=r*(s/2);break;case n.LINE_STRIP:e.lines+=r*(s-1);break;case n.LINE_LOOP:e.lines+=r*s;break;case n.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function z0(n,t){return n[0]-t[0]}function B0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function k0(n,t,e){const i={},o=new Float32Array(8),s=new WeakMap,a=new pn,r=[];for(let u=0;u<8;u++)r[u]=[u,0];function l(u,h,d){const m=u.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let f=s.get(h);if(f===void 0||f.count!==g){let ut=function(){yt.dispose(),s.delete(h),h.removeEventListener("dispose",ut)};var p=ut;f!==void 0&&f.texture.dispose();const v=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],tt=h.morphAttributes.color||[];let y=0;v===!0&&(y=1),w===!0&&(y=2),U===!0&&(y=3);let b=h.attributes.position.count*y,W=1;b>t.maxTextureSize&&(W=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const nt=new Float32Array(b*W*4*g),yt=new Xc(nt,b,W,g);yt.type=Di,yt.needsUpdate=!0;const k=y*4;for(let q=0;q<g;q++){const rt=P[q],V=R[q],Mt=tt[q],X=b*W*4*q;for(let Et=0;Et<rt.count;Et++){const Nt=Et*k;v===!0&&(a.fromBufferAttribute(rt,Et),nt[X+Nt+0]=a.x,nt[X+Nt+1]=a.y,nt[X+Nt+2]=a.z,nt[X+Nt+3]=0),w===!0&&(a.fromBufferAttribute(V,Et),nt[X+Nt+4]=a.x,nt[X+Nt+5]=a.y,nt[X+Nt+6]=a.z,nt[X+Nt+7]=0),U===!0&&(a.fromBufferAttribute(Mt,Et),nt[X+Nt+8]=a.x,nt[X+Nt+9]=a.y,nt[X+Nt+10]=a.z,nt[X+Nt+11]=Mt.itemSize===4?a.w:1)}}f={count:g,texture:yt,size:new Qt(b,W)},s.set(h,f),h.addEventListener("dispose",ut)}let c=0;for(let v=0;v<m.length;v++)c+=m[v];const M=h.morphTargetsRelative?1:1-c;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",m),d.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let g=i[h.id];if(g===void 0||g.length!==_){g=[];for(let w=0;w<_;w++)g[w]=[w,0];i[h.id]=g}for(let w=0;w<_;w++){const U=g[w];U[0]=w,U[1]=m[w]}g.sort(B0);for(let w=0;w<8;w++)w<_&&g[w][1]?(r[w][0]=g[w][0],r[w][1]=g[w][1]):(r[w][0]=Number.MAX_SAFE_INTEGER,r[w][1]=0);r.sort(z0);const f=h.morphAttributes.position,c=h.morphAttributes.normal;let M=0;for(let w=0;w<8;w++){const U=r[w],P=U[0],R=U[1];P!==Number.MAX_SAFE_INTEGER&&R?(f&&h.getAttribute("morphTarget"+w)!==f[P]&&h.setAttribute("morphTarget"+w,f[P]),c&&h.getAttribute("morphNormal"+w)!==c[P]&&h.setAttribute("morphNormal"+w,c[P]),o[w]=R,M+=R):(f&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),c&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),o[w]=0)}const v=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",o)}}return{update:l}}function H0(n,t,e,i){let o=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,d=t.get(l,h);if(o.get(d)!==u&&(t.update(d),o.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),o.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;o.get(m)!==u&&(m.update(),o.set(m,u))}return d}function a(){o=new WeakMap}function r(l){const u=l.target;u.removeEventListener("dispose",r),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class Ea extends Gn{constructor(t,e,i,o,s,a,r,l,u,h){if(h=h!==void 0?h:uo,h!==uo&&h!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===uo&&(i=ji),i===void 0&&h===fo&&(i=$i),super(null,o,s,a,r,l,h,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eu=new Gn,nu=new Ea(1,1);nu.compareFunction=Hc;const iu=new Xc,ou=new Ah,su=new $c,kl=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let s=kl[o];if(s===void 0&&(s=new Float32Array(o),kl[o]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,n[a].toArray(s,r)}return s}function Tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function An(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pr(n,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;n.uniform2fv(this.addr,t),An(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Tn(e,t))return;n.uniform3fv(this.addr,t),An(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;n.uniform4fv(this.addr,t),An(e,t)}}function q0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,i))return;Wl.set(i),n.uniformMatrix2fv(this.addr,!1,Wl),An(e,i)}}function Y0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,i))return;Vl.set(i),n.uniformMatrix3fv(this.addr,!1,Vl),An(e,i)}}function Z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(Tn(e,i))return;Gl.set(i),n.uniformMatrix4fv(this.addr,!1,Gl),An(e,i)}}function j0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;n.uniform2iv(this.addr,t),An(e,t)}}function J0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tn(e,t))return;n.uniform3iv(this.addr,t),An(e,t)}}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;n.uniform4iv(this.addr,t),An(e,t)}}function Q0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Tn(e,t))return;n.uniform2uiv(this.addr,t),An(e,t)}}function ep(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Tn(e,t))return;n.uniform3uiv(this.addr,t),An(e,t)}}function np(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Tn(e,t))return;n.uniform4uiv(this.addr,t),An(e,t)}}function ip(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);const s=this.type===n.SAMPLER_2D_SHADOW?nu:eu;e.setTexture2D(t||s,o)}function op(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||ou,o)}function sp(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||su,o)}function rp(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||iu,o)}function ap(n){switch(n){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return j0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return Q0;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function lp(n,t){n.uniform1fv(this.addr,t)}function cp(n,t){const e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function up(n,t){const e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function hp(n,t){const e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function dp(n,t){const e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fp(n,t){const e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pp(n,t){const e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mp(n,t){n.uniform1iv(this.addr,t)}function gp(n,t){n.uniform2iv(this.addr,t)}function _p(n,t){n.uniform3iv(this.addr,t)}function vp(n,t){n.uniform4iv(this.addr,t)}function xp(n,t){n.uniform1uiv(this.addr,t)}function Mp(n,t){n.uniform2uiv(this.addr,t)}function yp(n,t){n.uniform3uiv(this.addr,t)}function wp(n,t){n.uniform4uiv(this.addr,t)}function Sp(n,t,e){const i=this.cache,o=t.length,s=pr(e,o);Tn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||eu,s[a])}function bp(n,t,e){const i=this.cache,o=t.length,s=pr(e,o);Tn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||ou,s[a])}function Ep(n,t,e){const i=this.cache,o=t.length,s=pr(e,o);Tn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||su,s[a])}function Tp(n,t,e){const i=this.cache,o=t.length,s=pr(e,o);Tn(i,s)||(n.uniform1iv(this.addr,s),An(i,s));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||iu,s[a])}function Ap(n){switch(n){case 5126:return lp;case 35664:return cp;case 35665:return up;case 35666:return hp;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return yp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class Cp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}}class Rp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let s=0,a=o.length;s!==a;++s){const r=o[s];r.setValue(t,e[r.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Xl(n,t){n.seq.push(t),n.map[t.id]=t}function Dp(n,t,e){const i=n.name,o=i.length;for(Vr.lastIndex=0;;){const s=Vr.exec(i),a=Vr.lastIndex;let r=s[1];const l=s[2]==="]",u=s[3];if(l&&(r=r|0),u===void 0||u==="["&&a+2===o){Xl(e,u===void 0?new Cp(r,n,t):new Rp(r,n,t));break}else{let d=e.map[r];d===void 0&&(d=new Pp(r),Xl(e,d)),e=d}}}class er{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),a=t.getUniformLocation(e,s.name);Dp(s,a,this)}}setValue(t,e,i,o){const s=this.map[e];s!==void 0&&s.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let s=0,a=e.length;s!==a;++s){const r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,s=t.length;o!==s;++o){const a=t[o];a.id in e&&i.push(a)}return i}}function ql(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Lp=37297;let Ip=0;function Up(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=o;a<s;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function Np(n){const t=$e.getPrimaries($e.workingColorSpace),e=$e.getPrimaries(n);let i;switch(t===e?i="":t===sr&&e===or?i="LinearDisplayP3ToLinearSRGB":t===or&&e===sr&&(i="LinearSRGBToLinearDisplayP3"),n){case Oi:case dr:return[i,"LinearTransferOETF"];case fn:case xa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=n.getShaderInfoLog(t).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+Up(n.getShaderSource(t),a)}else return o}function Fp(n,t){const e=Np(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Op(n,t){let e;switch(t){case Tc:e="Linear";break;case Ac:e="Reinhard";break;case Cc:e="OptimizedCineon";break;case ga:e="ACESFilmic";break;case Rc:e="AgX";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xo).join(`
`)}function Bp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xo).join(`
`)}function kp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hp(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(t,o),a=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:r}}return e}function Xo(n){return n!==""}function Zl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(n){return n.replace(Gp,Wp)}const Vp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wp(n,t){let e=Oe[t];if(e===void 0){const i=Vp.get(t);if(i!==void 0)e=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ca(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(n){return n.replace(Xp,qp)}function qp(n,t,e,i){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Jl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Zp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zo:case jo:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jo:t="ENVMAP_MODE_REFRACTION";break}return t}function Kp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function Jp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $p(n,t,e,i){const o=n.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Yp(e),u=Zp(e),h=jp(e),d=Kp(e),m=Jp(e),p=e.isWebGL2?"":zp(e),_=Bp(e),g=kp(s),f=o.createProgram();let c,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xo).join(`
`),c.length>0&&(c+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xo).join(`
`),M.length>0&&(M+=`
`)):(c=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),M=[p,Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?Oe.tonemapping_pars_fragment:"",e.toneMapping!==Ki?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Fp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xo).join(`
`)),a=ca(a),a=Zl(a,e),a=jl(a,e),r=ca(r),r=Zl(r,e),r=jl(r,e),a=Kl(a),r=Kl(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const w=v+c+a,U=v+M+r,P=ql(o,o.VERTEX_SHADER,w),R=ql(o,o.FRAGMENT_SHADER,U);o.attachShader(f,P),o.attachShader(f,R),e.index0AttributeName!==void 0?o.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(f,0,"position"),o.linkProgram(f);function tt(nt){if(n.debug.checkShaderErrors){const yt=o.getProgramInfoLog(f).trim(),k=o.getShaderInfoLog(P).trim(),ut=o.getShaderInfoLog(R).trim();let q=!0,rt=!0;if(o.getProgramParameter(f,o.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,f,P,R);else{const V=Yl(o,P,"vertex"),Mt=Yl(o,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(f,o.VALIDATE_STATUS)+`

Program Info Log: `+yt+`
`+V+`
`+Mt)}else yt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",yt):(k===""||ut==="")&&(rt=!1);rt&&(nt.diagnostics={runnable:q,programLog:yt,vertexShader:{log:k,prefix:c},fragmentShader:{log:ut,prefix:M}})}o.deleteShader(P),o.deleteShader(R),y=new er(o,f),b=Hp(o,f)}let y;this.getUniforms=function(){return y===void 0&&tt(this),y};let b;this.getAttributes=function(){return b===void 0&&tt(this),b};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(f,Lp)),W},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=R,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new em(t),e.set(t,i)),i}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function nm(n,t,e,i,o,s,a){const r=new ya,l=new tm,u=[],h=o.isWebGL2,d=o.logarithmicDepthBuffer,m=o.vertexTextures;let p=o.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function f(y,b,W,nt,yt){const k=nt.fog,ut=yt.geometry,q=y.isMeshStandardMaterial?nt.environment:null,rt=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),V=rt&&rt.mapping===hr?rt.image.height:null,Mt=_[y.type];y.precision!==null&&(p=o.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const X=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Et=X!==void 0?X.length:0;let Nt=0;ut.morphAttributes.position!==void 0&&(Nt=1),ut.morphAttributes.normal!==void 0&&(Nt=2),ut.morphAttributes.color!==void 0&&(Nt=3);let G,et,it,Q;if(Mt){const wt=gi[Mt];G=wt.vertexShader,et=wt.fragmentShader}else G=y.vertexShader,et=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),Q=l.getFragmentShaderID(y);const dt=n.getRenderTarget(),bt=yt.isInstancedMesh===!0,Ht=yt.isBatchedMesh===!0,at=!!y.map,ft=!!y.matcap,I=!!rt,Ot=!!y.aoMap,St=!!y.lightMap,Rt=!!y.bumpMap,Gt=!!y.normalMap,Me=!!y.displacementMap,Zt=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,z=y.anisotropy>0,Ft=y.clearcoat>0,Pt=y.iridescence>0,kt=y.sheen>0,ne=y.transmission>0,Yt=z&&!!y.anisotropyMap,Xt=Ft&&!!y.clearcoatMap,ce=Ft&&!!y.clearcoatNormalMap,de=Ft&&!!y.clearcoatRoughnessMap,At=Pt&&!!y.iridescenceMap,be=Pt&&!!y.iridescenceThicknessMap,ge=kt&&!!y.sheenColorMap,ye=kt&&!!y.sheenRoughnessMap,jt=!!y.specularMap,ie=!!y.specularColorMap,B=!!y.specularIntensityMap,F=ne&&!!y.transmissionMap,ct=ne&&!!y.thicknessMap,lt=!!y.gradientMap,D=!!y.alphaMap,T=y.alphaTest>0,K=!!y.alphaHash,_t=!!y.extensions,Dt=!!ut.attributes.uv1,Ut=!!ut.attributes.uv2,H=!!ut.attributes.uv3;let Y=Ki;return y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Y=n.toneMapping),{isWebGL2:h,shaderID:Mt,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:et,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ht,instancing:bt,instancingColor:bt&&yt.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Oi,map:at,matcap:ft,envMap:I,envMapMode:I&&rt.mapping,envMapCubeUVHeight:V,aoMap:Ot,lightMap:St,bumpMap:Rt,normalMap:Gt,displacementMap:m&&Me,emissiveMap:Zt,normalMapObjectSpace:Gt&&y.normalMapType===th,normalMapTangentSpace:Gt&&y.normalMapType===va,metalnessMap:C,roughnessMap:S,anisotropy:z,anisotropyMap:Yt,clearcoat:Ft,clearcoatMap:Xt,clearcoatNormalMap:ce,clearcoatRoughnessMap:de,iridescence:Pt,iridescenceMap:At,iridescenceThicknessMap:be,sheen:kt,sheenColorMap:ge,sheenRoughnessMap:ye,specularMap:jt,specularColorMap:ie,specularIntensityMap:B,transmission:ne,transmissionMap:F,thicknessMap:ct,gradientMap:lt,opaque:y.transparent===!1&&y.blending===qo,alphaMap:D,alphaTest:T,alphaHash:K,combine:y.combine,mapUv:at&&g(y.map.channel),aoMapUv:Ot&&g(y.aoMap.channel),lightMapUv:St&&g(y.lightMap.channel),bumpMapUv:Rt&&g(y.bumpMap.channel),normalMapUv:Gt&&g(y.normalMap.channel),displacementMapUv:Me&&g(y.displacementMap.channel),emissiveMapUv:Zt&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:S&&g(y.roughnessMap.channel),anisotropyMapUv:Yt&&g(y.anisotropyMap.channel),clearcoatMapUv:Xt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:jt&&g(y.specularMap.channel),specularColorMapUv:ie&&g(y.specularColorMap.channel),specularIntensityMapUv:B&&g(y.specularIntensityMap.channel),transmissionMapUv:F&&g(y.transmissionMap.channel),thicknessMapUv:ct&&g(y.thicknessMap.channel),alphaMapUv:D&&g(y.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Gt||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ut,vertexUv3s:H,pointsUvs:yt.isPoints===!0&&!!ut.attributes.uv&&(at||D),fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:yt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Y,useLegacyLights:n._useLegacyLights,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===on,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:_t&&y.extensions.derivatives===!0,extensionFragDepth:_t&&y.extensions.fragDepth===!0,extensionDrawBuffers:_t&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)b.push(W),b.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(M(b,y),v(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),y.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),y.push(r.mask)}function w(y){const b=_[y.type];let W;if(b){const nt=gi[b];W=Ii.clone(nt.uniforms)}else W=y.uniforms;return W}function U(y,b){let W;for(let nt=0,yt=u.length;nt<yt;nt++){const k=u[nt];if(k.cacheKey===b){W=k,++W.usedTimes;break}}return W===void 0&&(W=new $p(n,b,y,s),u.push(W)),W}function P(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function tt(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:w,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:tt}}function im(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,r){n.get(s)[a]=r}function o(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function om(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $l(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ql(){const n=[];let t=0;const e=[],i=[],o=[];function s(){t=0,e.length=0,i.length=0,o.length=0}function a(d,m,p,_,g,f){let c=n[t];return c===void 0?(c={id:d.id,object:d,geometry:m,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:f},n[t]=c):(c.id=d.id,c.object=d,c.geometry=m,c.material=p,c.groupOrder=_,c.renderOrder=d.renderOrder,c.z=g,c.group=f),t++,c}function r(d,m,p,_,g,f){const c=a(d,m,p,_,g,f);p.transmission>0?i.push(c):p.transparent===!0?o.push(c):e.push(c)}function l(d,m,p,_,g,f){const c=a(d,m,p,_,g,f);p.transmission>0?i.unshift(c):p.transparent===!0?o.unshift(c):e.unshift(c)}function u(d,m){e.length>1&&e.sort(d||om),i.length>1&&i.sort(m||$l),o.length>1&&o.sort(m||$l)}function h(){for(let d=t,m=n.length;d<m;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:o,init:s,push:r,unshift:l,finish:h,sort:u}}function sm(){let n=new WeakMap;function t(i,o){const s=n.get(i);let a;return s===void 0?(a=new Ql,n.set(i,[a])):o>=s.length?(a=new Ql,s.push(a)):a=s[o],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function rm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new fe};break;case"SpotLight":e={position:new E,direction:new E,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new E,halfWidth:new E,halfHeight:new E};break}return n[t.id]=e,e}}}function am(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lm=0;function cm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function um(n,t){const e=new rm,i=am(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)o.probe.push(new E);const s=new E,a=new sn,r=new sn;function l(h,d){let m=0,p=0,_=0;for(let nt=0;nt<9;nt++)o.probe[nt].set(0,0,0);let g=0,f=0,c=0,M=0,v=0,w=0,U=0,P=0,R=0,tt=0,y=0;h.sort(cm);const b=d===!0?Math.PI:1;for(let nt=0,yt=h.length;nt<yt;nt++){const k=h[nt],ut=k.color,q=k.intensity,rt=k.distance,V=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=ut.r*q*b,p+=ut.g*q*b,_+=ut.b*q*b;else if(k.isLightProbe){for(let Mt=0;Mt<9;Mt++)o.probe[Mt].addScaledVector(k.sh.coefficients[Mt],q);y++}else if(k.isDirectionalLight){const Mt=e.get(k);if(Mt.color.copy(k.color).multiplyScalar(k.intensity*b),k.castShadow){const X=k.shadow,Et=i.get(k);Et.shadowBias=X.bias,Et.shadowNormalBias=X.normalBias,Et.shadowRadius=X.radius,Et.shadowMapSize=X.mapSize,o.directionalShadow[g]=Et,o.directionalShadowMap[g]=V,o.directionalShadowMatrix[g]=k.shadow.matrix,w++}o.directional[g]=Mt,g++}else if(k.isSpotLight){const Mt=e.get(k);Mt.position.setFromMatrixPosition(k.matrixWorld),Mt.color.copy(ut).multiplyScalar(q*b),Mt.distance=rt,Mt.coneCos=Math.cos(k.angle),Mt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Mt.decay=k.decay,o.spot[c]=Mt;const X=k.shadow;if(k.map&&(o.spotLightMap[R]=k.map,R++,X.updateMatrices(k),k.castShadow&&tt++),o.spotLightMatrix[c]=X.matrix,k.castShadow){const Et=i.get(k);Et.shadowBias=X.bias,Et.shadowNormalBias=X.normalBias,Et.shadowRadius=X.radius,Et.shadowMapSize=X.mapSize,o.spotShadow[c]=Et,o.spotShadowMap[c]=V,P++}c++}else if(k.isRectAreaLight){const Mt=e.get(k);Mt.color.copy(ut).multiplyScalar(q),Mt.halfWidth.set(k.width*.5,0,0),Mt.halfHeight.set(0,k.height*.5,0),o.rectArea[M]=Mt,M++}else if(k.isPointLight){const Mt=e.get(k);if(Mt.color.copy(k.color).multiplyScalar(k.intensity*b),Mt.distance=k.distance,Mt.decay=k.decay,k.castShadow){const X=k.shadow,Et=i.get(k);Et.shadowBias=X.bias,Et.shadowNormalBias=X.normalBias,Et.shadowRadius=X.radius,Et.shadowMapSize=X.mapSize,Et.shadowCameraNear=X.camera.near,Et.shadowCameraFar=X.camera.far,o.pointShadow[f]=Et,o.pointShadowMap[f]=V,o.pointShadowMatrix[f]=k.shadow.matrix,U++}o.point[f]=Mt,f++}else if(k.isHemisphereLight){const Mt=e.get(k);Mt.skyColor.copy(k.color).multiplyScalar(q*b),Mt.groundColor.copy(k.groundColor).multiplyScalar(q*b),o.hemi[v]=Mt,v++}}M>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ae.LTC_FLOAT_1,o.rectAreaLTC2=ae.LTC_FLOAT_2):(o.rectAreaLTC1=ae.LTC_HALF_1,o.rectAreaLTC2=ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ae.LTC_FLOAT_1,o.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=ae.LTC_HALF_1,o.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=m,o.ambient[1]=p,o.ambient[2]=_;const W=o.hash;(W.directionalLength!==g||W.pointLength!==f||W.spotLength!==c||W.rectAreaLength!==M||W.hemiLength!==v||W.numDirectionalShadows!==w||W.numPointShadows!==U||W.numSpotShadows!==P||W.numSpotMaps!==R||W.numLightProbes!==y)&&(o.directional.length=g,o.spot.length=c,o.rectArea.length=M,o.point.length=f,o.hemi.length=v,o.directionalShadow.length=w,o.directionalShadowMap.length=w,o.pointShadow.length=U,o.pointShadowMap.length=U,o.spotShadow.length=P,o.spotShadowMap.length=P,o.directionalShadowMatrix.length=w,o.pointShadowMatrix.length=U,o.spotLightMatrix.length=P+R-tt,o.spotLightMap.length=R,o.numSpotLightShadowsWithMaps=tt,o.numLightProbes=y,W.directionalLength=g,W.pointLength=f,W.spotLength=c,W.rectAreaLength=M,W.hemiLength=v,W.numDirectionalShadows=w,W.numPointShadows=U,W.numSpotShadows=P,W.numSpotMaps=R,W.numLightProbes=y,o.version=lm++)}function u(h,d){let m=0,p=0,_=0,g=0,f=0;const c=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const w=h[M];if(w.isDirectionalLight){const U=o.directional[m];U.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(c),m++}else if(w.isSpotLight){const U=o.spot[_];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(c),U.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(c),_++}else if(w.isRectAreaLight){const U=o.rectArea[g];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(c),r.identity(),a.copy(w.matrixWorld),a.premultiply(c),r.extractRotation(a),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(r),U.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const U=o.point[p];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(c),p++}else if(w.isHemisphereLight){const U=o.hemi[f];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(c),f++}}}return{setup:l,setupView:u,state:o}}function tc(n,t){const e=new um(n,t),i=[],o=[];function s(){i.length=0,o.length=0}function a(d){i.push(d)}function r(d){o.push(d)}function l(d){e.setup(i,d)}function u(d){e.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:r}}function hm(n,t){let e=new WeakMap;function i(s,a=0){const r=e.get(s);let l;return r===void 0?(l=new tc(n,t),e.set(s,[l])):a>=r.length?(l=new tc(n,t),r.push(l)):l=r[a],l}function o(){e=new WeakMap}return{get:i,dispose:o}}class dm extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function gm(n,t,e){let i=new wa;const o=new Qt,s=new Qt,a=new pn,r=new dm({depthPacking:Qu}),l=new fm,u={},h=e.maxTextureSize,d={[to]:Un,[Un]:to,[je]:je},m=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const _=new Qe;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new L(_,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let c=this.type;this.render=function(P,R,tt){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(zn),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const yt=c!==Ai&&this.type===Ai,k=c===Ai&&this.type!==Ai;for(let ut=0,q=P.length;ut<q;ut++){const rt=P[ut],V=rt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Mt=V.getFrameExtents();if(o.multiply(Mt),s.copy(V.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(s.x=Math.floor(h/Mt.x),o.x=s.x*Mt.x,V.mapSize.x=s.x),o.y>h&&(s.y=Math.floor(h/Mt.y),o.y=s.y*Mt.y,V.mapSize.y=s.y)),V.map===null||yt===!0||k===!0){const Et=this.type!==Ai?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new ei(o.x,o.y,Et),V.map.texture.name=rt.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const X=V.getViewportCount();for(let Et=0;Et<X;Et++){const Nt=V.getViewport(Et);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),nt.viewport(a),V.updateMatrices(rt,Et),i=V.getFrustum(),w(R,tt,V.camera,rt,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&M(V,tt),V.needsUpdate=!1}c=this.type,f.needsUpdate=!1,n.setRenderTarget(y,b,W)};function M(P,R){const tt=t.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ei(o.x,o.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,tt,m,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,tt,p,g,null)}function v(P,R,tt,y){let b=null;const W=tt.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)b=W;else if(b=tt.isPointLight===!0?l:r,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const nt=b.uuid,yt=R.uuid;let k=u[nt];k===void 0&&(k={},u[nt]=k);let ut=k[yt];ut===void 0&&(ut=b.clone(),k[yt]=ut,R.addEventListener("dispose",U)),b=ut}if(b.visible=R.visible,b.wireframe=R.wireframe,y===Ai?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,tt.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const nt=n.properties.get(b);nt.light=tt}return b}function w(P,R,tt,y,b){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ai)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld);const yt=t.update(P),k=P.material;if(Array.isArray(k)){const ut=yt.groups;for(let q=0,rt=ut.length;q<rt;q++){const V=ut[q],Mt=k[V.materialIndex];if(Mt&&Mt.visible){const X=v(P,Mt,y,b);P.onBeforeShadow(n,P,R,tt,yt,X,V),n.renderBufferDirect(tt,null,yt,X,P,V),P.onAfterShadow(n,P,R,tt,yt,X,V)}}}else if(k.visible){const ut=v(P,k,y,b);P.onBeforeShadow(n,P,R,tt,yt,ut,null),n.renderBufferDirect(tt,null,yt,ut,P,null),P.onAfterShadow(n,P,R,tt,yt,ut,null)}}const nt=P.children;for(let yt=0,k=nt.length;yt<k;yt++)w(nt[yt],R,tt,y,b)}function U(P){P.target.removeEventListener("dispose",U);for(const tt in u){const y=u[tt],b=P.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function _m(n,t,e){const i=e.isWebGL2;function o(){let T=!1;const K=new pn;let _t=null;const Dt=new pn(0,0,0,0);return{setMask:function(Ut){_t!==Ut&&!T&&(n.colorMask(Ut,Ut,Ut,Ut),_t=Ut)},setLocked:function(Ut){T=Ut},setClear:function(Ut,H,Y,O,wt){wt===!0&&(Ut*=O,H*=O,Y*=O),K.set(Ut,H,Y,O),Dt.equals(K)===!1&&(n.clearColor(Ut,H,Y,O),Dt.copy(K))},reset:function(){T=!1,_t=null,Dt.set(-1,0,0,0)}}}function s(){let T=!1,K=null,_t=null,Dt=null;return{setTest:function(Ut){Ut?Ht(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(Ut){K!==Ut&&!T&&(n.depthMask(Ut),K=Ut)},setFunc:function(Ut){if(_t!==Ut){switch(Ut){case Nu:n.depthFunc(n.NEVER);break;case Fu:n.depthFunc(n.ALWAYS);break;case Ou:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case zu:n.depthFunc(n.EQUAL);break;case Bu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Ut}},setLocked:function(Ut){T=Ut},setClear:function(Ut){Dt!==Ut&&(n.clearDepth(Ut),Dt=Ut)},reset:function(){T=!1,K=null,_t=null,Dt=null}}}function a(){let T=!1,K=null,_t=null,Dt=null,Ut=null,H=null,Y=null,O=null,wt=null;return{setTest:function(ot){T||(ot?Ht(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ot){K!==ot&&!T&&(n.stencilMask(ot),K=ot)},setFunc:function(ot,x,st){(_t!==ot||Dt!==x||Ut!==st)&&(n.stencilFunc(ot,x,st),_t=ot,Dt=x,Ut=st)},setOp:function(ot,x,st){(H!==ot||Y!==x||O!==st)&&(n.stencilOp(ot,x,st),H=ot,Y=x,O=st)},setLocked:function(ot){T=ot},setClear:function(ot){wt!==ot&&(n.clearStencil(ot),wt=ot)},reset:function(){T=!1,K=null,_t=null,Dt=null,Ut=null,H=null,Y=null,O=null,wt=null}}}const r=new o,l=new s,u=new a,h=new WeakMap,d=new WeakMap;let m={},p={},_=new WeakMap,g=[],f=null,c=!1,M=null,v=null,w=null,U=null,P=null,R=null,tt=null,y=new fe(0,0,0),b=0,W=!1,nt=null,yt=null,k=null,ut=null,q=null;const rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Mt=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Mt>=1):X.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Mt>=2);let Et=null,Nt={};const G=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),it=new pn().fromArray(G),Q=new pn().fromArray(et);function dt(T,K,_t,Dt){const Ut=new Uint8Array(4),H=n.createTexture();n.bindTexture(T,H),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Y=0;Y<_t;Y++)i&&(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)?n.texImage3D(K,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(K+Y,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return H}const bt={};bt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(bt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ht(n.DEPTH_TEST),l.setFunc(nr),Zt(!1),C(za),Ht(n.CULL_FACE),Gt(zn);function Ht(T){m[T]!==!0&&(n.enable(T),m[T]=!0)}function at(T){m[T]!==!1&&(n.disable(T),m[T]=!1)}function ft(T,K){return p[T]!==K?(n.bindFramebuffer(T,K),p[T]=K,i&&(T===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=K),T===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=K)),!0):!1}function I(T,K){let _t=g,Dt=!1;if(T)if(_t=_.get(K),_t===void 0&&(_t=[],_.set(K,_t)),T.isWebGLMultipleRenderTargets){const Ut=T.texture;if(_t.length!==Ut.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let H=0,Y=Ut.length;H<Y;H++)_t[H]=n.COLOR_ATTACHMENT0+H;_t.length=Ut.length,Dt=!0}}else _t[0]!==n.COLOR_ATTACHMENT0&&(_t[0]=n.COLOR_ATTACHMENT0,Dt=!0);else _t[0]!==n.BACK&&(_t[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Ot(T){return f!==T?(n.useProgram(T),f=T,!0):!1}const St={[Ci]:n.FUNC_ADD,[Su]:n.FUNC_SUBTRACT,[bu]:n.FUNC_REVERSE_SUBTRACT};if(i)St[Ha]=n.MIN,St[Ga]=n.MAX;else{const T=t.get("EXT_blend_minmax");T!==null&&(St[Ha]=T.MIN_EXT,St[Ga]=T.MAX_EXT)}const Rt={[Qr]:n.ZERO,[Eu]:n.ONE,[Tu]:n.SRC_COLOR,[ta]:n.SRC_ALPHA,[Pu]:n.SRC_ALPHA_SATURATE,[bc]:n.DST_COLOR,[Sc]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[Ru]:n.ONE_MINUS_DST_COLOR,[Cu]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Lu]:n.ONE_MINUS_CONSTANT_COLOR,[Iu]:n.CONSTANT_ALPHA,[Uu]:n.ONE_MINUS_CONSTANT_ALPHA};function Gt(T,K,_t,Dt,Ut,H,Y,O,wt,ot){if(T===zn){c===!0&&(at(n.BLEND),c=!1);return}if(c===!1&&(Ht(n.BLEND),c=!0),T!==wc){if(T!==M||ot!==W){if((v!==Ci||P!==Ci)&&(n.blendEquation(n.FUNC_ADD),v=Ci,P=Ci),ot)switch(T){case qo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mi:n.blendFunc(n.ONE,n.ONE);break;case Ba:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ka:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case qo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ba:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ka:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}w=null,U=null,R=null,tt=null,y.set(0,0,0),b=0,M=T,W=ot}return}Ut=Ut||K,H=H||_t,Y=Y||Dt,(K!==v||Ut!==P)&&(n.blendEquationSeparate(St[K],St[Ut]),v=K,P=Ut),(_t!==w||Dt!==U||H!==R||Y!==tt)&&(n.blendFuncSeparate(Rt[_t],Rt[Dt],Rt[H],Rt[Y]),w=_t,U=Dt,R=H,tt=Y),(O.equals(y)===!1||wt!==b)&&(n.blendColor(O.r,O.g,O.b,wt),y.copy(O),b=wt),M=T,W=!1}function Me(T,K){T.side===je?at(n.CULL_FACE):Ht(n.CULL_FACE);let _t=T.side===Un;K&&(_t=!_t),Zt(_t),T.blending===qo&&T.transparent===!1?Gt(zn):Gt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),r.setMask(T.colorWrite);const Dt=T.stencilWrite;u.setTest(Dt),Dt&&(u.setMask(T.stencilWriteMask),u.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),u.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),z(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ht(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(T){nt!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),nt=T)}function C(T){T!==Mu?(Ht(n.CULL_FACE),T!==yt&&(T===za?n.cullFace(n.BACK):T===yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),yt=T}function S(T){T!==k&&(V&&n.lineWidth(T),k=T)}function z(T,K,_t){T?(Ht(n.POLYGON_OFFSET_FILL),(ut!==K||q!==_t)&&(n.polygonOffset(K,_t),ut=K,q=_t)):at(n.POLYGON_OFFSET_FILL)}function Ft(T){T?Ht(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function Pt(T){T===void 0&&(T=n.TEXTURE0+rt-1),Et!==T&&(n.activeTexture(T),Et=T)}function kt(T,K,_t){_t===void 0&&(Et===null?_t=n.TEXTURE0+rt-1:_t=Et);let Dt=Nt[_t];Dt===void 0&&(Dt={type:void 0,texture:void 0},Nt[_t]=Dt),(Dt.type!==T||Dt.texture!==K)&&(Et!==_t&&(n.activeTexture(_t),Et=_t),n.bindTexture(T,K||bt[T]),Dt.type=T,Dt.texture=K)}function ne(){const T=Nt[Et];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Yt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function At(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function jt(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function B(T){it.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),it.copy(T))}function F(T){Q.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),Q.copy(T))}function ct(T,K){let _t=d.get(K);_t===void 0&&(_t=new WeakMap,d.set(K,_t));let Dt=_t.get(T);Dt===void 0&&(Dt=n.getUniformBlockIndex(K,T.name),_t.set(T,Dt))}function lt(T,K){const Dt=d.get(K).get(T);h.get(K)!==Dt&&(n.uniformBlockBinding(K,Dt,T.__bindingPointIndex),h.set(K,Dt))}function D(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},Et=null,Nt={},p={},_=new WeakMap,g=[],f=null,c=!1,M=null,v=null,w=null,U=null,P=null,R=null,tt=null,y=new fe(0,0,0),b=0,W=!1,nt=null,yt=null,k=null,ut=null,q=null,it.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),l.reset(),u.reset()}return{buffers:{color:r,depth:l,stencil:u},enable:Ht,disable:at,bindFramebuffer:ft,drawBuffers:I,useProgram:Ot,setBlending:Gt,setMaterial:Me,setFlipSided:Zt,setCullFace:C,setLineWidth:S,setPolygonOffset:z,setScissorTest:Ft,activeTexture:Pt,bindTexture:kt,unbindTexture:ne,compressedTexImage2D:Yt,compressedTexImage3D:Xt,texImage2D:jt,texImage3D:ie,updateUBOMapping:ct,uniformBlockBinding:lt,texStorage2D:ge,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:de,compressedTexSubImage2D:At,compressedTexSubImage3D:be,scissor:B,viewport:F,reset:D}}function vm(n,t,e,i,o,s,a){const r=o.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return p?new OffscreenCanvas(C,S):lr("canvas")}function g(C,S,z,Ft){let Pt=1;if((C.width>Ft||C.height>Ft)&&(Pt=Ft/Math.max(C.width,C.height)),Pt<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const kt=S?ar:Math.floor,ne=kt(Pt*C.width),Yt=kt(Pt*C.height);d===void 0&&(d=_(ne,Yt));const Xt=z?_(ne,Yt):d;return Xt.width=ne,Xt.height=Yt,Xt.getContext("2d").drawImage(C,0,0,ne,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ne+"x"+Yt+")."),Xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function f(C){return aa(C.width)&&aa(C.height)}function c(C){return r?!1:C.wrapS!==si||C.wrapT!==si||C.minFilter!==bn&&C.minFilter!==Hn}function M(C,S){return C.generateMipmaps&&S&&C.minFilter!==bn&&C.minFilter!==Hn}function v(C){n.generateMipmap(C)}function w(C,S,z,Ft,Pt=!1){if(r===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let kt=S;if(S===n.RED&&(z===n.FLOAT&&(kt=n.R32F),z===n.HALF_FLOAT&&(kt=n.R16F),z===n.UNSIGNED_BYTE&&(kt=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(kt=n.R8UI),z===n.UNSIGNED_SHORT&&(kt=n.R16UI),z===n.UNSIGNED_INT&&(kt=n.R32UI),z===n.BYTE&&(kt=n.R8I),z===n.SHORT&&(kt=n.R16I),z===n.INT&&(kt=n.R32I)),S===n.RG&&(z===n.FLOAT&&(kt=n.RG32F),z===n.HALF_FLOAT&&(kt=n.RG16F),z===n.UNSIGNED_BYTE&&(kt=n.RG8)),S===n.RGBA){const ne=Pt?ir:$e.getTransfer(Ft);z===n.FLOAT&&(kt=n.RGBA32F),z===n.HALF_FLOAT&&(kt=n.RGBA16F),z===n.UNSIGNED_BYTE&&(kt=ne===on?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(kt=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(kt=n.RGB5_A1)}return(kt===n.R16F||kt===n.R32F||kt===n.RG16F||kt===n.RG32F||kt===n.RGBA16F||kt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),kt}function U(C,S,z){return M(C,z)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){return C===bn||C===Va||C===gr?n.NEAREST:n.LINEAR}function R(C){const S=C.target;S.removeEventListener("dispose",R),y(S),S.isVideoTexture&&h.delete(S)}function tt(C){const S=C.target;S.removeEventListener("dispose",tt),W(S)}function y(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,Ft=m.get(z);if(Ft){const Pt=Ft[S.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&b(C),Object.keys(Ft).length===0&&m.delete(z)}i.remove(C)}function b(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const z=C.source,Ft=m.get(z);delete Ft[S.__cacheKey],a.memory.textures--}function W(C){const S=C.texture,z=i.get(C),Ft=i.get(S);if(Ft.__webglTexture!==void 0&&(n.deleteTexture(Ft.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Pt=0;Pt<6;Pt++){if(Array.isArray(z.__webglFramebuffer[Pt]))for(let kt=0;kt<z.__webglFramebuffer[Pt].length;kt++)n.deleteFramebuffer(z.__webglFramebuffer[Pt][kt]);else n.deleteFramebuffer(z.__webglFramebuffer[Pt]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Pt])}else{if(Array.isArray(z.__webglFramebuffer))for(let Pt=0;Pt<z.__webglFramebuffer.length;Pt++)n.deleteFramebuffer(z.__webglFramebuffer[Pt]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Pt=0;Pt<z.__webglColorRenderbuffer.length;Pt++)z.__webglColorRenderbuffer[Pt]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Pt]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Pt=0,kt=S.length;Pt<kt;Pt++){const ne=i.get(S[Pt]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(S[Pt])}i.remove(S),i.remove(C)}let nt=0;function yt(){nt=0}function k(){const C=nt;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),nt+=1,C}function ut(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const z=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Ft=C.image;if(Ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(z,C,S);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function rt(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){it(z,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function V(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){it(z,C,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function Mt(C,S){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Q(z,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const X={[ti]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[oa]:n.MIRRORED_REPEAT},Et={[bn]:n.NEAREST,[Va]:n.NEAREST_MIPMAP_NEAREST,[gr]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Xu]:n.LINEAR_MIPMAP_NEAREST,[Ko]:n.LINEAR_MIPMAP_LINEAR},Nt={[eh]:n.NEVER,[ah]:n.ALWAYS,[nh]:n.LESS,[Hc]:n.LEQUAL,[ih]:n.EQUAL,[rh]:n.GEQUAL,[oh]:n.GREATER,[sh]:n.NOTEQUAL};function G(C,S,z){if(z?(n.texParameteri(C,n.TEXTURE_WRAP_S,X[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Et[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Et[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==si||S.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,P(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,P(S.minFilter)),S.minFilter!==bn&&S.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Ft=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===bn||S.minFilter!==gr&&S.minFilter!==Ko||S.type===Di&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===hi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,Ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function et(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const Ft=S.source;let Pt=m.get(Ft);Pt===void 0&&(Pt={},m.set(Ft,Pt));const kt=ut(S);if(kt!==C.__cacheKey){Pt[kt]===void 0&&(Pt[kt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Pt[kt].usedTimes++;const ne=Pt[C.__cacheKey];ne!==void 0&&(Pt[C.__cacheKey].usedTimes--,ne.usedTimes===0&&b(S)),C.__cacheKey=kt,C.__webglTexture=Pt[kt].texture}return z}function it(C,S,z){let Ft=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Ft=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Ft=n.TEXTURE_3D);const Pt=et(C,S),kt=S.source;e.bindTexture(Ft,C.__webglTexture,n.TEXTURE0+z);const ne=i.get(kt);if(kt.version!==ne.__version||Pt===!0){e.activeTexture(n.TEXTURE0+z);const Yt=$e.getPrimaries($e.workingColorSpace),Xt=S.colorSpace===Qn?null:$e.getPrimaries(S.colorSpace),ce=S.colorSpace===Qn||Yt===Xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const de=c(S)&&f(S.image)===!1;let At=g(S.image,de,!1,o.maxTextureSize);At=Zt(S,At);const be=f(At)||r,ge=s.convert(S.format,S.colorSpace);let ye=s.convert(S.type),jt=w(S.internalFormat,ge,ye,S.colorSpace,S.isVideoTexture);G(Ft,S,be);let ie;const B=S.mipmaps,F=r&&S.isVideoTexture!==!0&&jt!==Bc,ct=ne.__version===void 0||Pt===!0,lt=U(S,At,be);if(S.isDepthTexture)jt=n.DEPTH_COMPONENT,r?S.type===Di?jt=n.DEPTH_COMPONENT32F:S.type===ji?jt=n.DEPTH_COMPONENT24:S.type===$i?jt=n.DEPTH24_STENCIL8:jt=n.DEPTH_COMPONENT16:S.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===uo&&jt===n.DEPTH_COMPONENT&&S.type!==_a&&S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ji,ye=s.convert(S.type)),S.format===fo&&jt===n.DEPTH_COMPONENT&&(jt=n.DEPTH_STENCIL,S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$i,ye=s.convert(S.type))),ct&&(F?e.texStorage2D(n.TEXTURE_2D,1,jt,At.width,At.height):e.texImage2D(n.TEXTURE_2D,0,jt,At.width,At.height,0,ge,ye,null));else if(S.isDataTexture)if(B.length>0&&be){F&&ct&&e.texStorage2D(n.TEXTURE_2D,lt,jt,B[0].width,B[0].height);for(let D=0,T=B.length;D<T;D++)ie=B[D],F?e.texSubImage2D(n.TEXTURE_2D,D,0,0,ie.width,ie.height,ge,ye,ie.data):e.texImage2D(n.TEXTURE_2D,D,jt,ie.width,ie.height,0,ge,ye,ie.data);S.generateMipmaps=!1}else F?(ct&&e.texStorage2D(n.TEXTURE_2D,lt,jt,At.width,At.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,At.width,At.height,ge,ye,At.data)):e.texImage2D(n.TEXTURE_2D,0,jt,At.width,At.height,0,ge,ye,At.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,jt,B[0].width,B[0].height,At.depth);for(let D=0,T=B.length;D<T;D++)ie=B[D],S.format!==ri?ge!==null?F?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,ie.width,ie.height,At.depth,ge,ie.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,D,jt,ie.width,ie.height,At.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?e.texSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,ie.width,ie.height,At.depth,ge,ye,ie.data):e.texImage3D(n.TEXTURE_2D_ARRAY,D,jt,ie.width,ie.height,At.depth,0,ge,ye,ie.data)}else{F&&ct&&e.texStorage2D(n.TEXTURE_2D,lt,jt,B[0].width,B[0].height);for(let D=0,T=B.length;D<T;D++)ie=B[D],S.format!==ri?ge!==null?F?e.compressedTexSubImage2D(n.TEXTURE_2D,D,0,0,ie.width,ie.height,ge,ie.data):e.compressedTexImage2D(n.TEXTURE_2D,D,jt,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?e.texSubImage2D(n.TEXTURE_2D,D,0,0,ie.width,ie.height,ge,ye,ie.data):e.texImage2D(n.TEXTURE_2D,D,jt,ie.width,ie.height,0,ge,ye,ie.data)}else if(S.isDataArrayTexture)F?(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,jt,At.width,At.height,At.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,ge,ye,At.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,ge,ye,At.data);else if(S.isData3DTexture)F?(ct&&e.texStorage3D(n.TEXTURE_3D,lt,jt,At.width,At.height,At.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,ge,ye,At.data)):e.texImage3D(n.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,ge,ye,At.data);else if(S.isFramebufferTexture){if(ct)if(F)e.texStorage2D(n.TEXTURE_2D,lt,jt,At.width,At.height);else{let D=At.width,T=At.height;for(let K=0;K<lt;K++)e.texImage2D(n.TEXTURE_2D,K,jt,D,T,0,ge,ye,null),D>>=1,T>>=1}}else if(B.length>0&&be){F&&ct&&e.texStorage2D(n.TEXTURE_2D,lt,jt,B[0].width,B[0].height);for(let D=0,T=B.length;D<T;D++)ie=B[D],F?e.texSubImage2D(n.TEXTURE_2D,D,0,0,ge,ye,ie):e.texImage2D(n.TEXTURE_2D,D,jt,ge,ye,ie);S.generateMipmaps=!1}else F?(ct&&e.texStorage2D(n.TEXTURE_2D,lt,jt,At.width,At.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ye,At)):e.texImage2D(n.TEXTURE_2D,0,jt,ge,ye,At);M(S,be)&&v(Ft),ne.__version=kt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,z){if(S.image.length!==6)return;const Ft=et(C,S),Pt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const kt=i.get(Pt);if(Pt.version!==kt.__version||Ft===!0){e.activeTexture(n.TEXTURE0+z);const ne=$e.getPrimaries($e.workingColorSpace),Yt=S.colorSpace===Qn?null:$e.getPrimaries(S.colorSpace),Xt=S.colorSpace===Qn||ne===Yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,At=[];for(let D=0;D<6;D++)!ce&&!de?At[D]=g(S.image[D],!1,!0,o.maxCubemapSize):At[D]=de?S.image[D].image:S.image[D],At[D]=Zt(S,At[D]);const be=At[0],ge=f(be)||r,ye=s.convert(S.format,S.colorSpace),jt=s.convert(S.type),ie=w(S.internalFormat,ye,jt,S.colorSpace),B=r&&S.isVideoTexture!==!0,F=kt.__version===void 0||Ft===!0;let ct=U(S,be,ge);G(n.TEXTURE_CUBE_MAP,S,ge);let lt;if(ce){B&&F&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ie,be.width,be.height);for(let D=0;D<6;D++){lt=At[D].mipmaps;for(let T=0;T<lt.length;T++){const K=lt[T];S.format!==ri?ye!==null?B?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T,0,0,K.width,K.height,ye,K.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T,ie,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T,0,0,K.width,K.height,ye,jt,K.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T,ie,K.width,K.height,0,ye,jt,K.data)}}}else{lt=S.mipmaps,B&&F&&(lt.length>0&&ct++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ie,At[0].width,At[0].height));for(let D=0;D<6;D++)if(de){B?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,At[D].width,At[D].height,ye,jt,At[D].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ie,At[D].width,At[D].height,0,ye,jt,At[D].data);for(let T=0;T<lt.length;T++){const _t=lt[T].image[D].image;B?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T+1,0,0,_t.width,_t.height,ye,jt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T+1,ie,_t.width,_t.height,0,ye,jt,_t.data)}}else{B?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ye,jt,At[D]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ie,ye,jt,At[D]);for(let T=0;T<lt.length;T++){const K=lt[T];B?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T+1,0,0,ye,jt,K.image[D]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,T+1,ie,ye,jt,K.image[D])}}}M(S,ge)&&v(n.TEXTURE_CUBE_MAP),kt.__version=Pt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function dt(C,S,z,Ft,Pt,kt){const ne=s.convert(z.format,z.colorSpace),Yt=s.convert(z.type),Xt=w(z.internalFormat,ne,Yt,z.colorSpace);if(!i.get(S).__hasExternalTextures){const de=Math.max(1,S.width>>kt),At=Math.max(1,S.height>>kt);Pt===n.TEXTURE_3D||Pt===n.TEXTURE_2D_ARRAY?e.texImage3D(Pt,kt,Xt,de,At,S.depth,0,ne,Yt,null):e.texImage2D(Pt,kt,Xt,de,At,0,ne,Yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Gt(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ft,Pt,i.get(z).__webglTexture,0,Rt(S)):(Pt===n.TEXTURE_2D||Pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ft,Pt,i.get(z).__webglTexture,kt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(C,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let Ft=r===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Gt(S)){const Pt=S.depthTexture;Pt&&Pt.isDepthTexture&&(Pt.type===Di?Ft=n.DEPTH_COMPONENT32F:Pt.type===ji&&(Ft=n.DEPTH_COMPONENT24));const kt=Rt(S);Gt(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt,Ft,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Ft,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Ft,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const Ft=Rt(S);z&&Gt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,n.DEPTH24_STENCIL8,S.width,S.height):Gt(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const Ft=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Pt=0;Pt<Ft.length;Pt++){const kt=Ft[Pt],ne=s.convert(kt.format,kt.colorSpace),Yt=s.convert(kt.type),Xt=w(kt.internalFormat,ne,Yt,kt.colorSpace),ce=Rt(S);z&&Gt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Xt,S.width,S.height):Gt(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Xt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Xt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const Ft=i.get(S.depthTexture).__webglTexture,Pt=Rt(S);if(S.depthTexture.format===uo)Gt(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ft,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Ft,0);else if(S.depthTexture.format===fo)Gt(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ft,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Ft,0);else throw new Error("Unknown depthTexture format")}function at(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ht(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Ft=0;Ft<6;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Ft]),S.__webglDepthbuffer[Ft]=n.createRenderbuffer(),bt(S.__webglDepthbuffer[Ft],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),bt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,S,z){const Ft=i.get(C);S!==void 0&&dt(Ft.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&at(C)}function I(C){const S=C.texture,z=i.get(C),Ft=i.get(S);C.addEventListener("dispose",tt),C.isWebGLMultipleRenderTargets!==!0&&(Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture()),Ft.__version=S.version,a.memory.textures++);const Pt=C.isWebGLCubeRenderTarget===!0,kt=C.isWebGLMultipleRenderTargets===!0,ne=f(C)||r;if(Pt){z.__webglFramebuffer=[];for(let Yt=0;Yt<6;Yt++)if(r&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Yt]=[];for(let Xt=0;Xt<S.mipmaps.length;Xt++)z.__webglFramebuffer[Yt][Xt]=n.createFramebuffer()}else z.__webglFramebuffer[Yt]=n.createFramebuffer()}else{if(r&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Yt=0;Yt<S.mipmaps.length;Yt++)z.__webglFramebuffer[Yt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(kt)if(o.drawBuffers){const Yt=C.texture;for(let Xt=0,ce=Yt.length;Xt<ce;Xt++){const de=i.get(Yt[Xt]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&C.samples>0&&Gt(C)===!1){const Yt=kt?S:[S];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Xt=0;Xt<Yt.length;Xt++){const ce=Yt[Xt];z.__webglColorRenderbuffer[Xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Xt]);const de=s.convert(ce.format,ce.colorSpace),At=s.convert(ce.type),be=w(ce.internalFormat,de,At,ce.colorSpace,C.isXRRenderTarget===!0),ge=Rt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xt,n.RENDERBUFFER,z.__webglColorRenderbuffer[Xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(n.TEXTURE_CUBE_MAP,Ft.__webglTexture),G(n.TEXTURE_CUBE_MAP,S,ne);for(let Yt=0;Yt<6;Yt++)if(r&&S.mipmaps&&S.mipmaps.length>0)for(let Xt=0;Xt<S.mipmaps.length;Xt++)dt(z.__webglFramebuffer[Yt][Xt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,Xt);else dt(z.__webglFramebuffer[Yt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0);M(S,ne)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){const Yt=C.texture;for(let Xt=0,ce=Yt.length;Xt<ce;Xt++){const de=Yt[Xt],At=i.get(de);e.bindTexture(n.TEXTURE_2D,At.__webglTexture),G(n.TEXTURE_2D,de,ne),dt(z.__webglFramebuffer,C,de,n.COLOR_ATTACHMENT0+Xt,n.TEXTURE_2D,0),M(de,ne)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let Yt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(r?Yt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Yt,Ft.__webglTexture),G(Yt,S,ne),r&&S.mipmaps&&S.mipmaps.length>0)for(let Xt=0;Xt<S.mipmaps.length;Xt++)dt(z.__webglFramebuffer[Xt],C,S,n.COLOR_ATTACHMENT0,Yt,Xt);else dt(z.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Yt,0);M(S,ne)&&v(Yt),e.unbindTexture()}C.depthBuffer&&at(C)}function Ot(C){const S=f(C)||r,z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ft=0,Pt=z.length;Ft<Pt;Ft++){const kt=z[Ft];if(M(kt,S)){const ne=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Yt=i.get(kt).__webglTexture;e.bindTexture(ne,Yt),v(ne),e.unbindTexture()}}}function St(C){if(r&&C.samples>0&&Gt(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],z=C.width,Ft=C.height;let Pt=n.COLOR_BUFFER_BIT;const kt=[],ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Yt=i.get(C),Xt=C.isWebGLMultipleRenderTargets===!0;if(Xt)for(let ce=0;ce<S.length;ce++)e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){kt.push(n.COLOR_ATTACHMENT0+ce),C.depthBuffer&&kt.push(ne);const de=Yt.__ignoreDepthValues!==void 0?Yt.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(Pt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Pt|=n.STENCIL_BUFFER_BIT)),Xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Yt.__webglColorRenderbuffer[ce]),de===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ne])),Xt){const At=i.get(S[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,z,Ft,0,0,z,Ft,Pt,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Xt)for(let ce=0;ce<S.length;ce++){e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Yt.__webglColorRenderbuffer[ce]);const de=i.get(S[ce]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,de,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}}function Rt(C){return Math.min(o.maxSamples,C.samples)}function Gt(C){const S=i.get(C);return r&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Zt(C,S){const z=C.colorSpace,Ft=C.format,Pt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ra||z!==Oi&&z!==Qn&&($e.getTransfer(z)===on?r===!1?t.has("EXT_sRGB")===!0&&Ft===ri?(C.format=ra,C.minFilter=Hn,C.generateMipmaps=!1):S=Vc.sRGBToLinear(S):(Ft!==ri||Pt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=k,this.resetTextureUnits=yt,this.setTexture2D=q,this.setTexture2DArray=rt,this.setTexture3D=V,this.setTextureCube=Mt,this.rebindTextures=ft,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Gt}function xm(n,t,e){const i=e.isWebGL2;function o(s,a=Qn){let r;const l=$e.getTransfer(a);if(s===Ji)return n.UNSIGNED_BYTE;if(s===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(s===qu)return n.BYTE;if(s===Yu)return n.SHORT;if(s===_a)return n.UNSIGNED_SHORT;if(s===Dc)return n.INT;if(s===ji)return n.UNSIGNED_INT;if(s===Di)return n.FLOAT;if(s===hi)return i?n.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Zu)return n.ALPHA;if(s===ri)return n.RGBA;if(s===Uc)return n.LUMINANCE;if(s===ju)return n.LUMINANCE_ALPHA;if(s===uo)return n.DEPTH_COMPONENT;if(s===fo)return n.DEPTH_STENCIL;if(s===ra)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Nc)return n.RED;if(s===Fc)return n.RED_INTEGER;if(s===Ku)return n.RG;if(s===Oc)return n.RG_INTEGER;if(s===zc)return n.RGBA_INTEGER;if(s===_r||s===vr||s===xr||s===Mr)if(l===on)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wa||s===Xa||s===qa||s===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Za||s===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Za)return l===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===ja)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ka||s===Ja||s===$a||s===Qa||s===tl||s===el||s===nl||s===il||s===ol||s===sl||s===rl||s===al||s===ll||s===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Ka)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ja)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$a)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qa)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tl)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===el)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nl)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===il)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ol)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sl)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rl)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ll)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cl)return l===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yr||s===ul||s===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===yr)return l===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ju||s===dl||s===fl||s===pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(s===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$i?i?n.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:o}}class Mm extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ne extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,s=null,a=null;const r=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,i),c=this._getHandJoint(u,g);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=h.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&m>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return r!==null&&(r.visible=o!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class wm extends Qo{constructor(t,e){super();const i=this;let o=null,s=1,a=null,r="local-floor",l=1,u=null,h=null,d=null,m=null,p=null,_=null;const g=e.getContextAttributes();let f=null,c=null;const M=[],v=[],w=new Qt;let U=null;const P=new $n;P.layers.enable(1),P.viewport=new pn;const R=new $n;R.layers.enable(2),R.viewport=new pn;const tt=[P,R],y=new Mm;y.layers.enable(1),y.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=M[G];return et===void 0&&(et=new Wr,M[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=M[G];return et===void 0&&(et=new Wr,M[G]=et),et.getGripSpace()},this.getHand=function(G){let et=M[G];return et===void 0&&(et=new Wr,M[G]=et),et.getHandSpace()};function nt(G){const et=v.indexOf(G.inputSource);if(et===-1)return;const it=M[et];it!==void 0&&(it.update(G.inputSource,G.frame,u||a),it.dispatchEvent({type:G.type,data:G.inputSource}))}function yt(){o.removeEventListener("select",nt),o.removeEventListener("selectstart",nt),o.removeEventListener("selectend",nt),o.removeEventListener("squeeze",nt),o.removeEventListener("squeezestart",nt),o.removeEventListener("squeezeend",nt),o.removeEventListener("end",yt),o.removeEventListener("inputsourceschange",k);for(let G=0;G<M.length;G++){const et=v[G];et!==null&&(v[G]=null,M[G].disconnect(et))}b=null,W=null,t.setRenderTarget(f),p=null,m=null,d=null,o=null,c=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(f=t.getRenderTarget(),o.addEventListener("select",nt),o.addEventListener("selectstart",nt),o.addEventListener("selectend",nt),o.addEventListener("squeeze",nt),o.addEventListener("squeezestart",nt),o.addEventListener("squeezeend",nt),o.addEventListener("end",yt),o.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(w),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(o,e,et),o.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new ei(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,it=null,Q=null;g.depth&&(Q=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?fo:uo,it=g.stencil?$i:ji);const dt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:s};d=new XRWebGLBinding(o,e),m=d.createProjectionLayer(dt),o.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new ei(m.textureWidth,m.textureHeight,{format:ri,type:Ji,depthTexture:new Ea(m.textureWidth,m.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const bt=t.properties.get(c);bt.__ignoreDepthValues=m.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await o.requestReferenceSpace(r),Nt.setContext(o),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function k(G){for(let et=0;et<G.removed.length;et++){const it=G.removed[et],Q=v.indexOf(it);Q>=0&&(v[Q]=null,M[Q].disconnect(it))}for(let et=0;et<G.added.length;et++){const it=G.added[et];let Q=v.indexOf(it);if(Q===-1){for(let bt=0;bt<M.length;bt++)if(bt>=v.length){v.push(it),Q=bt;break}else if(v[bt]===null){v[bt]=it,Q=bt;break}if(Q===-1)break}const dt=M[Q];dt&&dt.connect(it)}}const ut=new E,q=new E;function rt(G,et,it){ut.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(it.matrixWorld);const Q=ut.distanceTo(q),dt=et.projectionMatrix.elements,bt=it.projectionMatrix.elements,Ht=dt[14]/(dt[10]-1),at=dt[14]/(dt[10]+1),ft=(dt[9]+1)/dt[5],I=(dt[9]-1)/dt[5],Ot=(dt[8]-1)/dt[0],St=(bt[8]+1)/bt[0],Rt=Ht*Ot,Gt=Ht*St,Me=Q/(-Ot+St),Zt=Me*-Ot;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Zt),G.translateZ(Me),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const C=Ht+Me,S=at+Me,z=Rt-Zt,Ft=Gt+(Q-Zt),Pt=ft*at/S*C,kt=I*at/S*C;G.projectionMatrix.makePerspective(z,Ft,Pt,kt,C,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function V(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;y.near=R.near=P.near=G.near,y.far=R.far=P.far=G.far,(b!==y.near||W!==y.far)&&(o.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,W=y.far);const et=G.parent,it=y.cameras;V(y,et);for(let Q=0;Q<it.length;Q++)V(it[Q],et);it.length===2?rt(y,P,R):y.projectionMatrix.copy(P.projectionMatrix),Mt(G,y,et)};function Mt(G,et,it){it===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(it.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(G){l=G,m!==null&&(m.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let X=null;function Et(G,et){if(h=et.getViewerPose(u||a),_=et,h!==null){const it=h.views;p!==null&&(t.setRenderTargetFramebuffer(c,p.framebuffer),t.setRenderTarget(c));let Q=!1;it.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let dt=0;dt<it.length;dt++){const bt=it[dt];let Ht=null;if(p!==null)Ht=p.getViewport(bt);else{const ft=d.getViewSubImage(m,bt);Ht=ft.viewport,dt===0&&(t.setRenderTargetTextures(c,ft.colorTexture,m.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(c))}let at=tt[dt];at===void 0&&(at=new $n,at.layers.enable(dt),at.viewport=new pn,tt[dt]=at),at.matrix.fromArray(bt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(bt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),dt===0&&(y.matrix.copy(at.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(at)}}for(let it=0;it<M.length;it++){const Q=v[it],dt=M[it];Q!==null&&dt!==void 0&&dt.update(Q,et,u||a)}X&&X(G,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const Nt=new tu;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}}function Sm(n,t){function e(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,jc(n)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function o(f,c,M,v,w){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),d(f,c)):c.isMeshPhongMaterial?(s(f,c),h(f,c)):c.isMeshStandardMaterial?(s(f,c),m(f,c),c.isMeshPhysicalMaterial&&p(f,c,w)):c.isMeshMatcapMaterial?(s(f,c),_(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),g(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(a(f,c),c.isLineDashedMaterial&&r(f,c)):c.isPointsMaterial?l(f,c,M,v):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,e(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Un&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,e(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Un&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,e(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,e(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const M=t.get(c).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap){f.lightMap.value=c.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=c.lightMapIntensity*v,e(c.lightMap,f.lightMapTransform)}c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,f.aoMapTransform))}function a(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform))}function r(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,M,v){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*M,f.scale.value=v*.5,c.map&&(f.map.value=c.map,e(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function h(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function d(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function m(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,f.roughnessMapTransform)),t.get(c).envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function p(f,c,M){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Un&&f.clearcoatNormalScale.value.negate())),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,c){c.matcap&&(f.matcap.value=c.matcap)}function g(f,c){const M=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function bm(n,t,e,i){let o={},s={},a=[];const r=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const w=v.program;i.uniformBlockBinding(M,w)}function u(M,v){let w=o[M.id];w===void 0&&(_(M),w=h(M),o[M.id]=w,M.addEventListener("dispose",f));const U=v.program;i.updateUBOMapping(M,U);const P=t.render.frame;s[M.id]!==P&&(m(M),s[M.id]=P)}function h(M){const v=d();M.__bindingPointIndex=v;const w=n.createBuffer(),U=M.__size,P=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let M=0;M<r;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const v=o[M.id],w=M.uniforms,U=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,R=w.length;P<R;P++){const tt=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,b=tt.length;y<b;y++){const W=tt[y];if(p(W,P,y,U)===!0){const nt=W.__offset,yt=Array.isArray(W.value)?W.value:[W.value];let k=0;for(let ut=0;ut<yt.length;ut++){const q=yt[ut],rt=g(q);typeof q=="number"||typeof q=="boolean"?(W.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,nt+k,W.__data)):q.isMatrix3?(W.__data[0]=q.elements[0],W.__data[1]=q.elements[1],W.__data[2]=q.elements[2],W.__data[3]=0,W.__data[4]=q.elements[3],W.__data[5]=q.elements[4],W.__data[6]=q.elements[5],W.__data[7]=0,W.__data[8]=q.elements[6],W.__data[9]=q.elements[7],W.__data[10]=q.elements[8],W.__data[11]=0):(q.toArray(W.__data,k),k+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,nt,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,v,w,U){const P=M.value,R=v+"_"+w;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const tt=U[R];if(typeof P=="number"||typeof P=="boolean"){if(tt!==P)return U[R]=P,!0}else if(tt.equals(P)===!1)return tt.copy(P),!0}return!1}function _(M){const v=M.uniforms;let w=0;const U=16;for(let R=0,tt=v.length;R<tt;R++){const y=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,W=y.length;b<W;b++){const nt=y[b],yt=Array.isArray(nt.value)?nt.value:[nt.value];for(let k=0,ut=yt.length;k<ut;k++){const q=yt[k],rt=g(q),V=w%U;V!==0&&U-V<rt.boundary&&(w+=U-V),nt.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=rt.storage}}}const P=w%U;return P>0&&(w+=U-P),M.__size=w,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(o[v.id]),delete o[v.id],delete s[v.id]}function c(){for(const M in o)n.deleteBuffer(o[M]);a=[],o={},s={}}return{bind:l,update:u,dispose:c}}class ru{constructor(t={}){const{canvas:e=wh(),context:i=null,depth:o=!0,stencil:s=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const c=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let w=!1,U=0,P=0,R=null,tt=-1,y=null;const b=new pn,W=new pn;let nt=null;const yt=new fe(0);let k=0,ut=e.width,q=e.height,rt=1,V=null,Mt=null;const X=new pn(0,0,ut,q),Et=new pn(0,0,ut,q);let Nt=!1;const G=new wa;let et=!1,it=!1,Q=null;const dt=new sn,bt=new Qt,Ht=new E,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return R===null?rt:1}let I=i;function Ot(A,Z){for(let ht=0;ht<A.length;ht++){const pt=A[ht],mt=e.getContext(pt,Z);if(mt!==null)return mt}return null}try{const A={alpha:!0,depth:o,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",T,!1),e.addEventListener("webglcontextcreationerror",K,!1),I===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),I=Ot(Z,A),I===null)throw Ot(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let St,Rt,Gt,Me,Zt,C,S,z,Ft,Pt,kt,ne,Yt,Xt,ce,de,At,be,ge,ye,jt,ie,B,F;function ct(){St=new U0(I),Rt=new C0(I,St,t),St.init(Rt),ie=new xm(I,St,Rt),Gt=new _m(I,St,Rt),Me=new O0(I),Zt=new im,C=new vm(I,St,Gt,Zt,Rt,ie,Me),S=new P0(v),z=new I0(v),Ft=new Wh(I,Rt),B=new T0(I,St,Ft,Rt),Pt=new N0(I,Ft,Me,B),kt=new H0(I,Pt,Ft,Me),ge=new k0(I,Rt,C),de=new R0(Zt),ne=new nm(v,S,z,St,Rt,B,de),Yt=new Sm(v,Zt),Xt=new sm,ce=new hm(St,Rt),be=new E0(v,S,z,Gt,kt,m,l),At=new gm(v,kt,Rt),F=new bm(I,Me,Rt,Gt),ye=new A0(I,St,Me,Rt),jt=new F0(I,St,Me,Rt),Me.programs=ne.programs,v.capabilities=Rt,v.extensions=St,v.properties=Zt,v.renderLists=Xt,v.shadowMap=At,v.state=Gt,v.info=Me}ct();const lt=new wm(v,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(A){A!==void 0&&(rt=A,this.setSize(ut,q,!1))},this.getSize=function(A){return A.set(ut,q)},this.setSize=function(A,Z,ht=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,q=Z,e.width=Math.floor(A*rt),e.height=Math.floor(Z*rt),ht===!0&&(e.style.width=A+"px",e.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(ut*rt,q*rt).floor()},this.setDrawingBufferSize=function(A,Z,ht){ut=A,q=Z,rt=ht,e.width=Math.floor(A*ht),e.height=Math.floor(Z*ht),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,Z,ht,pt){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,Z,ht,pt),Gt.viewport(b.copy(X).multiplyScalar(rt).floor())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,Z,ht,pt){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,Z,ht,pt),Gt.scissor(W.copy(Et).multiplyScalar(rt).floor())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){Gt.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(A=!0,Z=!0,ht=!0){let pt=0;if(A){let mt=!1;if(R!==null){const $=R.texture.format;mt=$===zc||$===Oc||$===Fc}if(mt){const $=R.texture.type,vt=$===Ji||$===ji||$===_a||$===$i||$===Lc||$===Ic,Bt=be.getClearColor(),te=be.getClearAlpha(),Jt=Bt.r,qt=Bt.g,he=Bt.b;vt?(p[0]=Jt,p[1]=qt,p[2]=he,p[3]=te,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Jt,_[1]=qt,_[2]=he,_[3]=te,I.clearBufferiv(I.COLOR,0,_))}else pt|=I.COLOR_BUFFER_BIT}Z&&(pt|=I.DEPTH_BUFFER_BIT),ht&&(pt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",K,!1),Xt.dispose(),ce.dispose(),Zt.dispose(),S.dispose(),z.dispose(),kt.dispose(),B.dispose(),F.dispose(),ne.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",wt),lt.removeEventListener("sessionend",ot),Q&&(Q.dispose(),Q=null),x.stop()};function D(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Me.autoReset,Z=At.enabled,ht=At.autoUpdate,pt=At.needsUpdate,mt=At.type;ct(),Me.autoReset=A,At.enabled=Z,At.autoUpdate=ht,At.needsUpdate=pt,At.type=mt}function K(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const Z=A.target;Z.removeEventListener("dispose",_t),Dt(Z)}function Dt(A){Ut(A),Zt.remove(A)}function Ut(A){const Z=Zt.get(A).programs;Z!==void 0&&(Z.forEach(function(ht){ne.releaseProgram(ht)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ht,pt,mt,$){Z===null&&(Z=at);const vt=mt.isMesh&&mt.matrixWorld.determinant()<0,Bt=Ae(A,Z,ht,pt,mt);Gt.setMaterial(pt,vt);let te=ht.index,Jt=1;if(pt.wireframe===!0){if(te=Pt.getWireframeAttribute(ht),te===void 0)return;Jt=2}const qt=ht.drawRange,he=ht.attributes.position;let _e=qt.start*Jt,Fe=(qt.start+qt.count)*Jt;$!==null&&(_e=Math.max(_e,$.start*Jt),Fe=Math.min(Fe,($.start+$.count)*Jt)),te!==null?(_e=Math.max(_e,0),Fe=Math.min(Fe,te.count)):he!=null&&(_e=Math.max(_e,0),Fe=Math.min(Fe,he.count));const N=Fe-_e;if(N<0||N===1/0)return;B.setup(mt,pt,Bt,ht,te);let gt,j=ye;if(te!==null&&(gt=Ft.get(te),j=jt,j.setIndex(gt)),mt.isMesh)pt.wireframe===!0?(Gt.setLineWidth(pt.wireframeLinewidth*ft()),j.setMode(I.LINES)):j.setMode(I.TRIANGLES);else if(mt.isLine){let J=pt.linewidth;J===void 0&&(J=1),Gt.setLineWidth(J*ft()),mt.isLineSegments?j.setMode(I.LINES):mt.isLineLoop?j.setMode(I.LINE_LOOP):j.setMode(I.LINE_STRIP)}else mt.isPoints?j.setMode(I.POINTS):mt.isSprite&&j.setMode(I.TRIANGLES);if(mt.isBatchedMesh)j.renderMultiDraw(mt._multiDrawStarts,mt._multiDrawCounts,mt._multiDrawCount);else if(mt.isInstancedMesh)j.renderInstances(_e,N,mt.count);else if(ht.isInstancedBufferGeometry){const J=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Lt=Math.min(ht.instanceCount,J);j.renderInstances(_e,N,Lt)}else j.render(_e,N)};function H(A,Z,ht){A.transparent===!0&&A.side===je&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Te(A,Z,ht),A.side=to,A.needsUpdate=!0,Te(A,Z,ht),A.side=je):Te(A,Z,ht)}this.compile=function(A,Z,ht=null){ht===null&&(ht=A),f=ce.get(ht),f.init(),M.push(f),ht.traverseVisible(function(mt){mt.isLight&&mt.layers.test(Z.layers)&&(f.pushLight(mt),mt.castShadow&&f.pushShadow(mt))}),A!==ht&&A.traverseVisible(function(mt){mt.isLight&&mt.layers.test(Z.layers)&&(f.pushLight(mt),mt.castShadow&&f.pushShadow(mt))}),f.setupLights(v._useLegacyLights);const pt=new Set;return A.traverse(function(mt){const $=mt.material;if($)if(Array.isArray($))for(let vt=0;vt<$.length;vt++){const Bt=$[vt];H(Bt,ht,mt),pt.add(Bt)}else H($,ht,mt),pt.add($)}),M.pop(),f=null,pt},this.compileAsync=function(A,Z,ht=null){const pt=this.compile(A,Z,ht);return new Promise(mt=>{function $(){if(pt.forEach(function(vt){Zt.get(vt).currentProgram.isReady()&&pt.delete(vt)}),pt.size===0){mt(A);return}setTimeout($,10)}St.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Y=null;function O(A){Y&&Y(A)}function wt(){x.stop()}function ot(){x.start()}const x=new tu;x.setAnimationLoop(O),typeof self<"u"&&x.setContext(self),this.setAnimationLoop=function(A){Y=A,lt.setAnimationLoop(A),A===null?x.stop():x.start()},lt.addEventListener("sessionstart",wt),lt.addEventListener("sessionend",ot),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,Z,R),f=ce.get(A,M.length),f.init(),M.push(f),dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G.setFromProjectionMatrix(dt),it=this.localClippingEnabled,et=de.init(this.clippingPlanes,it),g=Xt.get(A,c.length),g.init(),c.push(g),st(A,Z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(V,Mt),this.info.render.frame++,et===!0&&de.beginShadows();const ht=f.state.shadowsArray;if(At.render(ht,A,Z),et===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(g,A),f.setupLights(v._useLegacyLights),Z.isArrayCamera){const pt=Z.cameras;for(let mt=0,$=pt.length;mt<$;mt++){const vt=pt[mt];Ct(g,A,vt,vt.viewport)}}else Ct(g,A,Z);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,Z),B.resetDefaultState(),tt=-1,y=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,c.pop(),c.length>0?g=c[c.length-1]:g=null};function st(A,Z,ht,pt){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ht=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){pt&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const vt=kt.update(A),Bt=A.material;Bt.visible&&g.push(A,vt,Bt,ht,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const vt=kt.update(A),Bt=A.material;if(pt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ht.copy(vt.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(Bt)){const te=vt.groups;for(let Jt=0,qt=te.length;Jt<qt;Jt++){const he=te[Jt],_e=Bt[he.materialIndex];_e&&_e.visible&&g.push(A,vt,_e,ht,Ht.z,he)}}else Bt.visible&&g.push(A,vt,Bt,ht,Ht.z,null)}}const $=A.children;for(let vt=0,Bt=$.length;vt<Bt;vt++)st($[vt],Z,ht,pt)}function Ct(A,Z,ht,pt){const mt=A.opaque,$=A.transmissive,vt=A.transparent;f.setupLightsView(ht),et===!0&&de.setGlobalState(v.clippingPlanes,ht),$.length>0&&oe(mt,$,Z,ht),pt&&Gt.viewport(b.copy(pt)),mt.length>0&&se(mt,Z,ht),$.length>0&&se($,Z,ht),vt.length>0&&se(vt,Z,ht),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function oe(A,Z,ht,pt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;const $=Rt.isWebGL2;Q===null&&(Q=new ei(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?hi:Ji,minFilter:Ko,samples:$?4:0})),v.getDrawingBufferSize(bt),$?Q.setSize(bt.x,bt.y):Q.setSize(ar(bt.x),ar(bt.y));const vt=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(yt),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Bt=v.toneMapping;v.toneMapping=Ki,se(A,ht,pt),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q);let te=!1;for(let Jt=0,qt=Z.length;Jt<qt;Jt++){const he=Z[Jt],_e=he.object,Fe=he.geometry,N=he.material,gt=he.group;if(N.side===je&&_e.layers.test(pt.layers)){const j=N.side;N.side=Un,N.needsUpdate=!0,ue(_e,ht,pt,Fe,N,gt),N.side=j,N.needsUpdate=!0,te=!0}}te===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q)),v.setRenderTarget(vt),v.setClearColor(yt,k),v.toneMapping=Bt}function se(A,Z,ht){const pt=Z.isScene===!0?Z.overrideMaterial:null;for(let mt=0,$=A.length;mt<$;mt++){const vt=A[mt],Bt=vt.object,te=vt.geometry,Jt=pt===null?vt.material:pt,qt=vt.group;Bt.layers.test(ht.layers)&&ue(Bt,Z,ht,te,Jt,qt)}}function ue(A,Z,ht,pt,mt,$){A.onBeforeRender(v,Z,ht,pt,mt,$),A.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),mt.onBeforeRender(v,Z,ht,pt,A,$),mt.transparent===!0&&mt.side===je&&mt.forceSinglePass===!1?(mt.side=Un,mt.needsUpdate=!0,v.renderBufferDirect(ht,Z,pt,mt,A,$),mt.side=to,mt.needsUpdate=!0,v.renderBufferDirect(ht,Z,pt,mt,A,$),mt.side=je):v.renderBufferDirect(ht,Z,pt,mt,A,$),A.onAfterRender(v,Z,ht,pt,mt,$)}function Te(A,Z,ht){Z.isScene!==!0&&(Z=at);const pt=Zt.get(A),mt=f.state.lights,$=f.state.shadowsArray,vt=mt.state.version,Bt=ne.getParameters(A,mt.state,$,Z,ht),te=ne.getProgramCacheKey(Bt);let Jt=pt.programs;pt.environment=A.isMeshStandardMaterial?Z.environment:null,pt.fog=Z.fog,pt.envMap=(A.isMeshStandardMaterial?z:S).get(A.envMap||pt.environment),Jt===void 0&&(A.addEventListener("dispose",_t),Jt=new Map,pt.programs=Jt);let qt=Jt.get(te);if(qt!==void 0){if(pt.currentProgram===qt&&pt.lightsStateVersion===vt)return Ie(A,Bt),qt}else Bt.uniforms=ne.getUniforms(A),A.onBuild(ht,Bt,v),A.onBeforeCompile(Bt,v),qt=ne.acquireProgram(Bt,te),Jt.set(te,qt),pt.uniforms=Bt.uniforms;const he=pt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(he.clippingPlanes=de.uniform),Ie(A,Bt),pt.needsLights=Ve(A),pt.lightsStateVersion=vt,pt.needsLights&&(he.ambientLightColor.value=mt.state.ambient,he.lightProbe.value=mt.state.probe,he.directionalLights.value=mt.state.directional,he.directionalLightShadows.value=mt.state.directionalShadow,he.spotLights.value=mt.state.spot,he.spotLightShadows.value=mt.state.spotShadow,he.rectAreaLights.value=mt.state.rectArea,he.ltc_1.value=mt.state.rectAreaLTC1,he.ltc_2.value=mt.state.rectAreaLTC2,he.pointLights.value=mt.state.point,he.pointLightShadows.value=mt.state.pointShadow,he.hemisphereLights.value=mt.state.hemi,he.directionalShadowMap.value=mt.state.directionalShadowMap,he.directionalShadowMatrix.value=mt.state.directionalShadowMatrix,he.spotShadowMap.value=mt.state.spotShadowMap,he.spotLightMatrix.value=mt.state.spotLightMatrix,he.spotLightMap.value=mt.state.spotLightMap,he.pointShadowMap.value=mt.state.pointShadowMap,he.pointShadowMatrix.value=mt.state.pointShadowMatrix),pt.currentProgram=qt,pt.uniformsList=null,qt}function Ge(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=er.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ie(A,Z){const ht=Zt.get(A);ht.outputColorSpace=Z.outputColorSpace,ht.batching=Z.batching,ht.instancing=Z.instancing,ht.instancingColor=Z.instancingColor,ht.skinning=Z.skinning,ht.morphTargets=Z.morphTargets,ht.morphNormals=Z.morphNormals,ht.morphColors=Z.morphColors,ht.morphTargetsCount=Z.morphTargetsCount,ht.numClippingPlanes=Z.numClippingPlanes,ht.numIntersection=Z.numClipIntersection,ht.vertexAlphas=Z.vertexAlphas,ht.vertexTangents=Z.vertexTangents,ht.toneMapping=Z.toneMapping}function Ae(A,Z,ht,pt,mt){Z.isScene!==!0&&(Z=at),C.resetTextureUnits();const $=Z.fog,vt=pt.isMeshStandardMaterial?Z.environment:null,Bt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oi,te=(pt.isMeshStandardMaterial?z:S).get(pt.envMap||vt),Jt=pt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,qt=!!ht.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),he=!!ht.morphAttributes.position,_e=!!ht.morphAttributes.normal,Fe=!!ht.morphAttributes.color;let N=Ki;pt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(N=v.toneMapping);const gt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,j=gt!==void 0?gt.length:0,J=Zt.get(pt),Lt=f.state.lights;if(et===!0&&(it===!0||A!==y)){const Ee=A===y&&pt.id===tt;de.setState(pt,A,Ee)}let zt=!1;pt.version===J.__version?(J.needsLights&&J.lightsStateVersion!==Lt.state.version||J.outputColorSpace!==Bt||mt.isBatchedMesh&&J.batching===!1||!mt.isBatchedMesh&&J.batching===!0||mt.isInstancedMesh&&J.instancing===!1||!mt.isInstancedMesh&&J.instancing===!0||mt.isSkinnedMesh&&J.skinning===!1||!mt.isSkinnedMesh&&J.skinning===!0||mt.isInstancedMesh&&J.instancingColor===!0&&mt.instanceColor===null||mt.isInstancedMesh&&J.instancingColor===!1&&mt.instanceColor!==null||J.envMap!==te||pt.fog===!0&&J.fog!==$||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==de.numPlanes||J.numIntersection!==de.numIntersection)||J.vertexAlphas!==Jt||J.vertexTangents!==qt||J.morphTargets!==he||J.morphNormals!==_e||J.morphColors!==Fe||J.toneMapping!==N||Rt.isWebGL2===!0&&J.morphTargetsCount!==j)&&(zt=!0):(zt=!0,J.__version=pt.version);let re=J.currentProgram;zt===!0&&(re=Te(pt,Z,mt));let le=!1,Kt=!1,me=!1;const xe=re.getUniforms(),We=J.uniforms;if(Gt.useProgram(re.program)&&(le=!0,Kt=!0,me=!0),pt.id!==tt&&(tt=pt.id,Kt=!0),le||y!==A){xe.setValue(I,"projectionMatrix",A.projectionMatrix),xe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Ee=xe.map.cameraPosition;Ee!==void 0&&Ee.setValue(I,Ht.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&xe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Kt=!0,me=!0)}if(mt.isSkinnedMesh){xe.setOptional(I,mt,"bindMatrix"),xe.setOptional(I,mt,"bindMatrixInverse");const Ee=mt.skeleton;Ee&&(Rt.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),xe.setValue(I,"boneTexture",Ee.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}mt.isBatchedMesh&&(xe.setOptional(I,mt,"batchingTexture"),xe.setValue(I,"batchingTexture",mt._matricesTexture,C));const Le=ht.morphAttributes;if((Le.position!==void 0||Le.normal!==void 0||Le.color!==void 0&&Rt.isWebGL2===!0)&&ge.update(mt,ht,re),(Kt||J.receiveShadow!==mt.receiveShadow)&&(J.receiveShadow=mt.receiveShadow,xe.setValue(I,"receiveShadow",mt.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(We.envMap.value=te,We.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),Kt&&(xe.setValue(I,"toneMappingExposure",v.toneMappingExposure),J.needsLights&&Be(We,me),$&&pt.fog===!0&&Yt.refreshFogUniforms(We,$),Yt.refreshMaterialUniforms(We,pt,rt,q,Q),er.upload(I,Ge(J),We,C)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(er.upload(I,Ge(J),We,C),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&xe.setValue(I,"center",mt.center),xe.setValue(I,"modelViewMatrix",mt.modelViewMatrix),xe.setValue(I,"normalMatrix",mt.normalMatrix),xe.setValue(I,"modelMatrix",mt.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const Ee=pt.uniformsGroups;for(let vn=0,wn=Ee.length;vn<wn;vn++)if(Rt.isWebGL2){const Ke=Ee[vn];F.update(Ke,re),F.bind(Ke,re)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return re}function Be(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ve(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,Z,ht){Zt.get(A.texture).__webglTexture=Z,Zt.get(A.depthTexture).__webglTexture=ht;const pt=Zt.get(A);pt.__hasExternalTextures=!0,pt.__hasExternalTextures&&(pt.__autoAllocateDepthBuffer=ht===void 0,pt.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,Z){const ht=Zt.get(A);ht.__webglFramebuffer=Z,ht.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,ht=0){R=A,U=Z,P=ht;let pt=!0,mt=null,$=!1,vt=!1;if(A){const te=Zt.get(A);te.__useDefaultFramebuffer!==void 0?(Gt.bindFramebuffer(I.FRAMEBUFFER,null),pt=!1):te.__webglFramebuffer===void 0?C.setupRenderTarget(A):te.__hasExternalTextures&&C.rebindTextures(A,Zt.get(A.texture).__webglTexture,Zt.get(A.depthTexture).__webglTexture);const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(vt=!0);const qt=Zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?mt=qt[Z][ht]:mt=qt[Z],$=!0):Rt.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?mt=Zt.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?mt=qt[ht]:mt=qt,b.copy(A.viewport),W.copy(A.scissor),nt=A.scissorTest}else b.copy(X).multiplyScalar(rt).floor(),W.copy(Et).multiplyScalar(rt).floor(),nt=Nt;if(Gt.bindFramebuffer(I.FRAMEBUFFER,mt)&&Rt.drawBuffers&&pt&&Gt.drawBuffers(A,mt),Gt.viewport(b),Gt.scissor(W),Gt.setScissorTest(nt),$){const te=Zt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te.__webglTexture,ht)}else if(vt){const te=Zt.get(A.texture),Jt=Z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,te.__webglTexture,ht||0,Jt)}tt=-1},this.readRenderTargetPixels=function(A,Z,ht,pt,mt,$,vt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(Bt=Bt[vt]),Bt){Gt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const te=A.texture,Jt=te.format,qt=te.type;if(Jt!==ri&&ie.convert(Jt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const he=qt===hi&&(St.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(qt!==Ji&&ie.convert(qt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qt===Di&&(Rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!he){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-pt&&ht>=0&&ht<=A.height-mt&&I.readPixels(Z,ht,pt,mt,ie.convert(Jt),ie.convert(qt),$)}finally{const te=R!==null?Zt.get(R).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,te)}}},this.copyFramebufferToTexture=function(A,Z,ht=0){const pt=Math.pow(2,-ht),mt=Math.floor(Z.image.width*pt),$=Math.floor(Z.image.height*pt);C.setTexture2D(Z,0),I.copyTexSubImage2D(I.TEXTURE_2D,ht,0,0,A.x,A.y,mt,$),Gt.unbindTexture()},this.copyTextureToTexture=function(A,Z,ht,pt=0){const mt=Z.image.width,$=Z.image.height,vt=ie.convert(ht.format),Bt=ie.convert(ht.type);C.setTexture2D(ht,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ht.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ht.unpackAlignment),Z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,A.x,A.y,mt,$,vt,Bt,Z.image.data):Z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,A.x,A.y,Z.mipmaps[0].width,Z.mipmaps[0].height,vt,Z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,pt,A.x,A.y,vt,Bt,Z.image),pt===0&&ht.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,ht,pt,mt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $=A.max.x-A.min.x+1,vt=A.max.y-A.min.y+1,Bt=A.max.z-A.min.z+1,te=ie.convert(pt.format),Jt=ie.convert(pt.type);let qt;if(pt.isData3DTexture)C.setTexture3D(pt,0),qt=I.TEXTURE_3D;else if(pt.isDataArrayTexture||pt.isCompressedArrayTexture)C.setTexture2DArray(pt,0),qt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,pt.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,pt.unpackAlignment);const he=I.getParameter(I.UNPACK_ROW_LENGTH),_e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fe=I.getParameter(I.UNPACK_SKIP_PIXELS),N=I.getParameter(I.UNPACK_SKIP_ROWS),gt=I.getParameter(I.UNPACK_SKIP_IMAGES),j=ht.isCompressedTexture?ht.mipmaps[mt]:ht.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,j.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,j.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),ht.isDataTexture||ht.isData3DTexture?I.texSubImage3D(qt,mt,Z.x,Z.y,Z.z,$,vt,Bt,te,Jt,j.data):ht.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(qt,mt,Z.x,Z.y,Z.z,$,vt,Bt,te,j.data)):I.texSubImage3D(qt,mt,Z.x,Z.y,Z.z,$,vt,Bt,te,Jt,j),I.pixelStorei(I.UNPACK_ROW_LENGTH,he),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,N),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gt),mt===0&&pt.generateMipmaps&&I.generateMipmap(qt),Gt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){U=0,P=0,R=null,Gt.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xa?"display-p3":"srgb",e.unpackColorSpace=$e.workingColorSpace===dr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fn?ho:kc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ho?fn:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Em extends ru{}Em.prototype.isWebGL1Renderer=!0;class Ta{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(t),this.density=e}clone(){return new Ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Aa{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=e,this.far=i}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ec extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Tm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,s=this.stride;o<s;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new E;class cr{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=en(e,this.array),i=en(i,this.array),o=en(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=en(e,this.array),i=en(i,this.array),o=en(o,this.array),s=en(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return new Yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ua extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fo;const ls=new E,Oo=new E,zo=new E,Bo=new Qt,cs=new Qt,au=new sn,Xs=new E,us=new E,qs=new E,nc=new Qt,Xr=new Qt,ic=new Qt;class oc extends _n{constructor(t=new ua){if(super(),this.isSprite=!0,this.type="Sprite",Fo===void 0){Fo=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tm(e,5);Fo.setIndex([0,1,2,0,2,3]),Fo.setAttribute("position",new cr(i,3,0,!1)),Fo.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=Fo,this.material=t,this.center=new Qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oo.setFromMatrixScale(this.matrixWorld),au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oo.multiplyScalar(-zo.z);const i=this.material.rotation;let o,s;i!==0&&(s=Math.cos(i),o=Math.sin(i));const a=this.center;Ys(Xs.set(-.5,-.5,0),zo,a,Oo,o,s),Ys(us.set(.5,-.5,0),zo,a,Oo,o,s),Ys(qs.set(.5,.5,0),zo,a,Oo,o,s),nc.set(0,0),Xr.set(1,0),ic.set(1,1);let r=t.ray.intersectTriangle(Xs,us,qs,!1,ls);if(r===null&&(Ys(us.set(-.5,.5,0),zo,a,Oo,o,s),Xr.set(0,1),r=t.ray.intersectTriangle(Xs,qs,us,!1,ls),r===null))return;const l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:oi.getInterpolation(ls,Xs,us,qs,nc,Xr,ic,new Qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ys(n,t,e,i,o,s){Bo.subVectors(n,e).addScalar(.5).multiply(i),o!==void 0?(cs.x=s*Bo.x-o*Bo.y,cs.y=o*Bo.x+s*Bo.y):cs.copy(Bo),n.copy(t),n.x+=cs.x,n.y+=cs.y,n.applyMatrix4(au)}class Am extends Gn{constructor(t=null,e=1,i=1,o,s,a,r,l,u=bn,h=bn,d,m){super(null,a,r,l,u,h,o,s,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sc=new E,rc=new E,ac=new sn,qr=new fr,Zs=new xs;class Ni extends _n{constructor(t=new Qe,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,s=e.count;o<s;o++)sc.fromBufferAttribute(e,o-1),rc.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=sc.distanceTo(rc);t.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(o),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;ac.copy(o).invert(),qr.copy(t.ray).applyMatrix4(ac);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,u=new E,h=new E,d=new E,m=new E,p=this.isLineSegments?2:1,_=i.index,f=i.attributes.position;if(_!==null){const c=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=c,w=M-1;v<w;v+=p){const U=_.getX(v),P=_.getX(v+1);if(u.fromBufferAttribute(f,U),h.fromBufferAttribute(f,P),qr.distanceSqToSegment(u,h,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const tt=t.ray.origin.distanceTo(m);tt<t.near||tt>t.far||e.push({distance:tt,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let v=c,w=M-1;v<w;v+=p){if(u.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),qr.distanceSqToSegment(u,h,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}class Cm extends Ni{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ur extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lc=new sn,ha=new fr,js=new xs,Ks=new E;class da extends _n{constructor(t=new Qe,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(o),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;lc.copy(o).invert(),ha.copy(t.ray).applyMatrix4(lc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=m,g=p;_<g;_++){const f=u.getX(_);Ks.fromBufferAttribute(d,f),cc(Ks,f,l,o,t,e,this)}}else{const m=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=m,g=p;_<g;_++)Ks.fromBufferAttribute(d,_),cc(Ks,_,l,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function cc(n,t,e,i,o,s,a){const r=ha.distanceSqToPoint(n);if(r<e){const l=new E;ha.closestPointToPoint(n,l),l.applyMatrix4(i);const u=o.ray.origin.distanceTo(l);if(u<o.near||u>o.far)return;s.push({distance:u,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,object:a})}}class qn extends Gn{constructor(t,e,i,o,s,a,r,l,u){super(t,e,i,o,s,a,r,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,o=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(o),e.push(s),o=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let o=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let r=0,l=s-1,u;for(;r<=l;)if(o=Math.floor(r+(l-r)/2),u=i[o]-a,u<0)r=o+1;else if(u>0)l=o-1;else{l=o;break}if(o=l,i[o]===a)return o/(s-1);const h=i[o],m=i[o+1]-h,p=(a-h)/m;return(o+p)/(s-1)}getTangent(t,e){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const a=this.getPoint(o),r=this.getPoint(s),l=e||(a.isVector2?new Qt:new E);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,o=[],s=[],a=[],r=new E,l=new sn;for(let p=0;p<=t;p++){const _=p/t;o[p]=this.getTangentAt(_,new E)}s[0]=new E,a[0]=new E;let u=Number.MAX_VALUE;const h=Math.abs(o[0].x),d=Math.abs(o[0].y),m=Math.abs(o[0].z);h<=u&&(u=h,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),m<=u&&i.set(0,0,1),r.crossVectors(o[0],i).normalize(),s[0].crossVectors(o[0],r),a[0].crossVectors(o[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),r.crossVectors(o[p-1],o[p]),r.length()>Number.EPSILON){r.normalize();const _=Math.acos(En(o[p-1].dot(o[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(r,_))}a[p].crossVectors(o[p],s[p])}if(e===!0){let p=Math.acos(En(s[0].dot(s[t]),-1,1));p/=t,o[0].dot(r.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(o[_],p*_)),a[_].crossVectors(o[_],s[_])}return{tangents:o,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends xi{constructor(t=0,e=0,i=1,o=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(t,e){const i=e||new Qt,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(a?s=0:s=o),this.aClockwise===!0&&!a&&(s===o?s=-o:s=s-o);const r=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(r),u=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,p=u-this.aY;l=m*h-p*d+this.aX,u=m*d+p*h+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rm extends Ca{constructor(t,e,i,o,s,a){super(t,e,i,i,o,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,t=0,e=0,i=0;function o(s,a,r,l){n=s,t=r,e=-3*s+3*a-2*r-l,i=2*s-2*a+r+l}return{initCatmullRom:function(s,a,r,l,u){o(a,r,u*(r-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,r,l,u,h,d){let m=(a-s)/u-(r-s)/(u+h)+(r-a)/h,p=(r-a)/h-(l-a)/(h+d)+(l-r)/d;m*=h,p*=h,o(a,r,m,p)},calc:function(s){const a=s*s,r=a*s;return n+t*s+e*a+i*r}}}const Js=new E,Yr=new Ra,Zr=new Ra,jr=new Ra;class Pm extends xi{constructor(t=[],e=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=o}getPoint(t,e=new E){const i=e,o=this.points,s=o.length,a=(s-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let u,h;this.closed||r>0?u=o[(r-1)%s]:(Js.subVectors(o[0],o[1]).add(o[0]),u=Js);const d=o[r%s],m=o[(r+1)%s];if(this.closed||r+2<s?h=o[(r+2)%s]:(Js.subVectors(o[s-1],o[s-2]).add(o[s-1]),h=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(m),p),f=Math.pow(m.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),Yr.initNonuniformCatmullRom(u.x,d.x,m.x,h.x,_,g,f),Zr.initNonuniformCatmullRom(u.y,d.y,m.y,h.y,_,g,f),jr.initNonuniformCatmullRom(u.z,d.z,m.z,h.z,_,g,f)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(u.x,d.x,m.x,h.x,this.tension),Zr.initCatmullRom(u.y,d.y,m.y,h.y,this.tension),jr.initCatmullRom(u.z,d.z,m.z,h.z,this.tension));return i.set(Yr.calc(l),Zr.calc(l),jr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new E().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uc(n,t,e,i,o){const s=(i-t)*.5,a=(o-e)*.5,r=n*n,l=n*r;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*r+s*n+e}function Dm(n,t){const e=1-n;return e*e*t}function Lm(n,t){return 2*(1-n)*n*t}function Im(n,t){return n*n*t}function ms(n,t,e,i){return Dm(n,t)+Lm(n,e)+Im(n,i)}function Um(n,t){const e=1-n;return e*e*e*t}function Nm(n,t){const e=1-n;return 3*e*e*n*t}function Fm(n,t){return 3*(1-n)*n*n*t}function Om(n,t){return n*n*n*t}function gs(n,t,e,i,o){return Um(n,t)+Nm(n,e)+Fm(n,i)+Om(n,o)}class lu extends xi{constructor(t=new Qt,e=new Qt,i=new Qt,o=new Qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new Qt){const i=e,o=this.v0,s=this.v1,a=this.v2,r=this.v3;return i.set(gs(t,o.x,s.x,a.x,r.x),gs(t,o.y,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zm extends xi{constructor(t=new E,e=new E,i=new E,o=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new E){const i=e,o=this.v0,s=this.v1,a=this.v2,r=this.v3;return i.set(gs(t,o.x,s.x,a.x,r.x),gs(t,o.y,s.y,a.y,r.y),gs(t,o.z,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cu extends xi{constructor(t=new Qt,e=new Qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Qt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Qt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bm extends xi{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends xi{constructor(t=new Qt,e=new Qt,i=new Qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Qt){const i=e,o=this.v0,s=this.v1,a=this.v2;return i.set(ms(t,o.x,s.x,a.x),ms(t,o.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class km extends xi{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,o=this.v0,s=this.v1,a=this.v2;return i.set(ms(t,o.x,s.x,a.x),ms(t,o.y,s.y,a.y),ms(t,o.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Qt){const i=e,o=this.points,s=(o.length-1)*t,a=Math.floor(s),r=s-a,l=o[a===0?a:a-1],u=o[a],h=o[a>o.length-2?o.length-1:a+1],d=o[a>o.length-3?o.length-1:a+2];return i.set(uc(r,l.x,u.x,h.x,d.x),uc(r,l.y,u.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new Qt().fromArray(o))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:Rm,CatmullRomCurve3:Pm,CubicBezierCurve:lu,CubicBezierCurve3:zm,EllipseCurve:Ca,LineCurve:cu,LineCurve3:Bm,QuadraticBezierCurve:uu,QuadraticBezierCurve3:km,SplineCurve:hu});class Hm extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=i){const a=o[s]-i,r=this.curves[s],l=r.getLength(),u=l===0?0:1-a/l;return r.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,o=this.curves.length;i<o;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let o=0,s=this.curves;o<s.length;o++){const a=s[o],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(r);for(let u=0;u<l.length;u++){const h=l[u];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(new hc[o.type]().fromJSON(o))}return this}}class Gm extends Hm{constructor(t){super(),this.type="Path",this.currentPoint=new Qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new cu(this.currentPoint.clone(),new Qt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,o){const s=new uu(this.currentPoint.clone(),new Qt(t,e),new Qt(i,o));return this.curves.push(s),this.currentPoint.set(i,o),this}bezierCurveTo(t,e,i,o,s,a){const r=new lu(this.currentPoint.clone(),new Qt(t,e),new Qt(i,o),new Qt(s,a));return this.curves.push(r),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new hu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,o,s,a){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+r,e+l,i,o,s,a),this}absarc(t,e,i,o,s,a){return this.absellipse(t,e,i,i,o,s,a),this}ellipse(t,e,i,o,s,a,r,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+u,e+h,i,o,s,a,r,l),this}absellipse(t,e,i,o,s,a,r,l){const u=new Ca(t,e,i,o,s,a,r,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pa extends Qe{constructor(t=[new Qt(0,-.5),new Qt(.5,0),new Qt(0,.5)],e=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:o},e=Math.floor(e),o=En(o,0,Math.PI*2);const s=[],a=[],r=[],l=[],u=[],h=1/e,d=new E,m=new Qt,p=new E,_=new E,g=new E;let f=0,c=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:f=t[M+1].x-t[M].x,c=t[M+1].y-t[M].y,p.x=c*1,p.y=-f,p.z=c*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:f=t[M+1].x-t[M].x,c=t[M+1].y-t[M].y,p.x=c*1,p.y=-f,p.z=c*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(_)}for(let M=0;M<=e;M++){const v=i+M*h*o,w=Math.sin(v),U=Math.cos(v);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*w,d.y=t[P].y,d.z=t[P].x*U,a.push(d.x,d.y,d.z),m.x=M/e,m.y=P/(t.length-1),r.push(m.x,m.y);const R=l[3*P+0]*w,tt=l[3*P+1],y=l[3*P+0]*U;u.push(R,tt,y)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const w=v+M*t.length,U=w,P=w+t.length,R=w+t.length+1,tt=w+1;s.push(U,P,tt),s.push(R,tt,P)}this.setIndex(s),this.setAttribute("position",new tn(a,3)),this.setAttribute("uv",new tn(r,2)),this.setAttribute("normal",new tn(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.points,t.segments,t.phiStart,t.phiLength)}}class po extends Pa{constructor(t=1,e=1,i=4,o=8){const s=new Gm;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),o),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:o}}static fromJSON(t){return new po(t.radius,t.length,t.capSegments,t.radialSegments)}}class In extends Qe{constructor(t=1,e=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:o},e=Math.max(3,e);const s=[],a=[],r=[],l=[],u=new E,h=new Qt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,m=3;d<=e;d++,m+=3){const p=i+d/e*o;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),r.push(0,0,1),h.x=(a[m]/t+1)/2,h.y=(a[m+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new tn(a,3)),this.setAttribute("normal",new tn(r,3)),this.setAttribute("uv",new tn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends Qe{constructor(t=1,e=1,i=1,o=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const u=this;o=Math.floor(o),s=Math.floor(s);const h=[],d=[],m=[],p=[];let _=0;const g=[],f=i/2;let c=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new tn(d,3)),this.setAttribute("normal",new tn(m,3)),this.setAttribute("uv",new tn(p,2));function M(){const w=new E,U=new E;let P=0;const R=(e-t)/i;for(let tt=0;tt<=s;tt++){const y=[],b=tt/s,W=b*(e-t)+t;for(let nt=0;nt<=o;nt++){const yt=nt/o,k=yt*l+r,ut=Math.sin(k),q=Math.cos(k);U.x=W*ut,U.y=-b*i+f,U.z=W*q,d.push(U.x,U.y,U.z),w.set(ut,R,q).normalize(),m.push(w.x,w.y,w.z),p.push(yt,1-b),y.push(_++)}g.push(y)}for(let tt=0;tt<o;tt++)for(let y=0;y<s;y++){const b=g[y][tt],W=g[y+1][tt],nt=g[y+1][tt+1],yt=g[y][tt+1];h.push(b,W,yt),h.push(W,nt,yt),P+=6}u.addGroup(c,P,0),c+=P}function v(w){const U=_,P=new Qt,R=new E;let tt=0;const y=w===!0?t:e,b=w===!0?1:-1;for(let nt=1;nt<=o;nt++)d.push(0,f*b,0),m.push(0,b,0),p.push(.5,.5),_++;const W=_;for(let nt=0;nt<=o;nt++){const k=nt/o*l+r,ut=Math.cos(k),q=Math.sin(k);R.x=y*q,R.y=f*b,R.z=y*ut,d.push(R.x,R.y,R.z),m.push(0,b,0),P.x=ut*.5+.5,P.y=q*.5*b+.5,p.push(P.x,P.y),_++}for(let nt=0;nt<o;nt++){const yt=U+nt,k=W+nt;w===!0?h.push(k,k+1,yt):h.push(k+1,k,yt),tt+=3}u.addGroup(c,tt,w===!0?1:2),c+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi extends Qe{constructor(t=.5,e=1,i=32,o=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:o,thetaStart:s,thetaLength:a},i=Math.max(3,i),o=Math.max(1,o);const r=[],l=[],u=[],h=[];let d=t;const m=(e-t)/o,p=new E,_=new Qt;for(let g=0;g<=o;g++){for(let f=0;f<=i;f++){const c=s+f/i*a;p.x=d*Math.cos(c),p.y=d*Math.sin(c),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}d+=m}for(let g=0;g<o;g++){const f=g*(i+1);for(let c=0;c<i;c++){const M=c+f,v=M,w=M+i+1,U=M+i+2,P=M+1;r.push(v,w,P),r.push(w,U,P)}}this.setIndex(r),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ln extends Qe{constructor(t=1,e=32,i=16,o=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let u=0;const h=[],d=new E,m=new E,p=[],_=[],g=[],f=[];for(let c=0;c<=i;c++){const M=[],v=c/i;let w=0;c===0&&a===0?w=.5/e:c===i&&l===Math.PI&&(w=-.5/e);for(let U=0;U<=e;U++){const P=U/e;d.x=-t*Math.cos(o+P*s)*Math.sin(a+v*r),d.y=t*Math.cos(a+v*r),d.z=t*Math.sin(o+P*s)*Math.sin(a+v*r),_.push(d.x,d.y,d.z),m.copy(d).normalize(),g.push(m.x,m.y,m.z),f.push(P+w,1-v),M.push(u++)}h.push(M)}for(let c=0;c<i;c++)for(let M=0;M<e;M++){const v=h[c][M+1],w=h[c][M],U=h[c+1][M],P=h[c+1][M+1];(c!==0||a>0)&&p.push(v,w,P),(c!==i-1||l<Math.PI)&&p.push(w,U,P)}this.setIndex(p),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vi extends Qe{constructor(t=1,e=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const a=[],r=[],l=[],u=[],h=new E,d=new E,m=new E;for(let p=0;p<=i;p++)for(let _=0;_<=o;_++){const g=_/o*s,f=p/i*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(g),d.y=(t+e*Math.cos(f))*Math.sin(g),d.z=e*Math.sin(f),r.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),m.subVectors(d,h).normalize(),l.push(m.x,m.y,m.z),u.push(_/o),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=o;_++){const g=(o+1)*p+_-1,f=(o+1)*(p-1)+_-1,c=(o+1)*(p-1)+_,M=(o+1)*p+_;a.push(g,f,M),a.push(f,c,M)}this.setIndex(a),this.setAttribute("position",new tn(r,3)),this.setAttribute("normal",new tn(l,3)),this.setAttribute("uv",new tn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vm extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tt extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Go extends Tt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return En(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Wm extends zi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Da extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class fa extends Da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new sn,dc=new E,fc=new E;class du{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pc=new sn,hs=new E,Jr=new E;class Xm extends du{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new pn(2,1,1,1),new pn(0,1,1,1),new pn(3,1,1,1),new pn(1,1,1,1),new pn(3,0,1,1),new pn(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),i.position.copy(hs),Jr.copy(i.position),Jr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Jr),i.updateMatrixWorld(),o.makeTranslation(-hs.x,-hs.y,-hs.z),pc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class Ri extends Da{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qm extends du{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $r extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(){return(typeof performance>"u"?Date:performance).now()}class La{constructor(t,e,i=0,o=1/0){this.ray=new fr(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return pa(t,this,i,e),i.sort(gc),i}intersectObjects(t,e=!0,i=[]){for(let o=0,s=t.length;o<s;o++)pa(t[o],this,i,e);return i.sort(gc),i}}function gc(n,t){return n.distance-t.distance}function pa(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const o=n.children;for(let s=0,a=o.length;s<a;s++)pa(o[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const _s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ym=new Sa(-1,1,1,-1,0,1);class Zm extends Qe{constructor(){super(),this.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tn([0,2,0,0,2,0],2))}}const jm=new Zm;class mr{constructor(t){this._mesh=new L(jm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ym)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vo extends mo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof yn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ii.clone(t.uniforms),this.material=new yn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new mr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _c extends mo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const o=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class Km extends mo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Jm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Qt);this._width=i.width,this._height=i.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(_s),this.copyPass.material.blending=zn,this.clock=new fu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let o=0,s=this.passes.length;o<s;o++){const a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(a instanceof _c?i=!0:a instanceof Km&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $m extends mo{constructor(t,e,i=null,o=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(t,e,i){const o=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=o}}const Qm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $o extends mo{constructor(t,e,i,o){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=o,this.resolution=t!==void 0?new Qt(t.x,t.y):new Qt(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(s,a,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const m=new ei(s,a,{type:hi});m.texture.name="UnrealBloomPass.h"+d,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const p=new ei(s,a,{type:hi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const r=Qm;this.highPassUniforms=Ii.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Qt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_s;this.copyUniforms=Ii.clone(h.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new dn,this.fsQuad=new mr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),o=Math.round(e/2);this.renderTargetBright.setSize(i,o);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,o),this.renderTargetsVertical[s].setSize(i,o),this.separableBlurMaterials[s].uniforms.invSize.value=new Qt(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2)}render(t,e,i,o,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new yn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Qt(.5,.5)},direction:{value:new Qt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new yn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$o.BlurDirectionX=new Qt(1,0);$o.BlurDirectionY=new Qt(0,1);const tg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class eg extends mo{constructor(){super();const t=tg;this.uniforms=Ii.clone(t.uniforms),this.material=new Vm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new mr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===on&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ng={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Qt(1/1024,1/512)}},vertexShader:`

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
	`};class ig{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,i){return t[0]*e+t[1]*i}dot3(t,e,i,o){return t[0]*e+t[1]*i+t[2]*o}dot4(t,e,i,o,s){return t[0]*e+t[1]*i+t[2]*o+t[3]*s}noise(t,e){let i,o,s;const a=.5*(Math.sqrt(3)-1),r=(t+e)*a,l=Math.floor(t+r),u=Math.floor(e+r),h=(3-Math.sqrt(3))/6,d=(l+u)*h,m=l-d,p=u-d,_=t-m,g=e-p;let f,c;_>g?(f=1,c=0):(f=0,c=1);const M=_-f+h,v=g-c+h,w=_-1+2*h,U=g-1+2*h,P=l&255,R=u&255,tt=this.perm[P+this.perm[R]]%12,y=this.perm[P+f+this.perm[R+c]]%12,b=this.perm[P+1+this.perm[R+1]]%12;let W=.5-_*_-g*g;W<0?i=0:(W*=W,i=W*W*this.dot(this.grad3[tt],_,g));let nt=.5-M*M-v*v;nt<0?o=0:(nt*=nt,o=nt*nt*this.dot(this.grad3[y],M,v));let yt=.5-w*w-U*U;return yt<0?s=0:(yt*=yt,s=yt*yt*this.dot(this.grad3[b],w,U)),70*(i+o+s)}noise3d(t,e,i){let o,s,a,r;const u=(t+e+i)*.3333333333333333,h=Math.floor(t+u),d=Math.floor(e+u),m=Math.floor(i+u),p=1/6,_=(h+d+m)*p,g=h-_,f=d-_,c=m-_,M=t-g,v=e-f,w=i-c;let U,P,R,tt,y,b;M>=v?v>=w?(U=1,P=0,R=0,tt=1,y=1,b=0):M>=w?(U=1,P=0,R=0,tt=1,y=0,b=1):(U=0,P=0,R=1,tt=1,y=0,b=1):v<w?(U=0,P=0,R=1,tt=0,y=1,b=1):M<w?(U=0,P=1,R=0,tt=0,y=1,b=1):(U=0,P=1,R=0,tt=1,y=1,b=0);const W=M-U+p,nt=v-P+p,yt=w-R+p,k=M-tt+2*p,ut=v-y+2*p,q=w-b+2*p,rt=M-1+3*p,V=v-1+3*p,Mt=w-1+3*p,X=h&255,Et=d&255,Nt=m&255,G=this.perm[X+this.perm[Et+this.perm[Nt]]]%12,et=this.perm[X+U+this.perm[Et+P+this.perm[Nt+R]]]%12,it=this.perm[X+tt+this.perm[Et+y+this.perm[Nt+b]]]%12,Q=this.perm[X+1+this.perm[Et+1+this.perm[Nt+1]]]%12;let dt=.6-M*M-v*v-w*w;dt<0?o=0:(dt*=dt,o=dt*dt*this.dot3(this.grad3[G],M,v,w));let bt=.6-W*W-nt*nt-yt*yt;bt<0?s=0:(bt*=bt,s=bt*bt*this.dot3(this.grad3[et],W,nt,yt));let Ht=.6-k*k-ut*ut-q*q;Ht<0?a=0:(Ht*=Ht,a=Ht*Ht*this.dot3(this.grad3[it],k,ut,q));let at=.6-rt*rt-V*V-Mt*Mt;return at<0?r=0:(at*=at,r=at*at*this.dot3(this.grad3[Q],rt,V,Mt)),32*(o+s+a+r)}noise4d(t,e,i,o){const s=this.grad4,a=this.simplex,r=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let h,d,m,p,_;const g=(t+e+i+o)*l,f=Math.floor(t+g),c=Math.floor(e+g),M=Math.floor(i+g),v=Math.floor(o+g),w=(f+c+M+v)*u,U=f-w,P=c-w,R=M-w,tt=v-w,y=t-U,b=e-P,W=i-R,nt=o-tt,yt=y>b?32:0,k=y>W?16:0,ut=b>W?8:0,q=y>nt?4:0,rt=b>nt?2:0,V=W>nt?1:0,Mt=yt+k+ut+q+rt+V,X=a[Mt][0]>=3?1:0,Et=a[Mt][1]>=3?1:0,Nt=a[Mt][2]>=3?1:0,G=a[Mt][3]>=3?1:0,et=a[Mt][0]>=2?1:0,it=a[Mt][1]>=2?1:0,Q=a[Mt][2]>=2?1:0,dt=a[Mt][3]>=2?1:0,bt=a[Mt][0]>=1?1:0,Ht=a[Mt][1]>=1?1:0,at=a[Mt][2]>=1?1:0,ft=a[Mt][3]>=1?1:0,I=y-X+u,Ot=b-Et+u,St=W-Nt+u,Rt=nt-G+u,Gt=y-et+2*u,Me=b-it+2*u,Zt=W-Q+2*u,C=nt-dt+2*u,S=y-bt+3*u,z=b-Ht+3*u,Ft=W-at+3*u,Pt=nt-ft+3*u,kt=y-1+4*u,ne=b-1+4*u,Yt=W-1+4*u,Xt=nt-1+4*u,ce=f&255,de=c&255,At=M&255,be=v&255,ge=r[ce+r[de+r[At+r[be]]]]%32,ye=r[ce+X+r[de+Et+r[At+Nt+r[be+G]]]]%32,jt=r[ce+et+r[de+it+r[At+Q+r[be+dt]]]]%32,ie=r[ce+bt+r[de+Ht+r[At+at+r[be+ft]]]]%32,B=r[ce+1+r[de+1+r[At+1+r[be+1]]]]%32;let F=.6-y*y-b*b-W*W-nt*nt;F<0?h=0:(F*=F,h=F*F*this.dot4(s[ge],y,b,W,nt));let ct=.6-I*I-Ot*Ot-St*St-Rt*Rt;ct<0?d=0:(ct*=ct,d=ct*ct*this.dot4(s[ye],I,Ot,St,Rt));let lt=.6-Gt*Gt-Me*Me-Zt*Zt-C*C;lt<0?m=0:(lt*=lt,m=lt*lt*this.dot4(s[jt],Gt,Me,Zt,C));let D=.6-S*S-z*z-Ft*Ft-Pt*Pt;D<0?p=0:(D*=D,p=D*D*this.dot4(s[ie],S,z,Ft,Pt));let T=.6-kt*kt-ne*ne-Yt*Yt-Xt*Xt;return T<0?_=0:(T*=T,_=T*T*this.dot4(s[B],kt,ne,Yt,Xt)),27*(h+d+m+p+_)}}const $s={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Qt},cameraProjectionMatrix:{value:new sn},cameraInverseProjectionMatrix:{value:new sn},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Qs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},tr={uniforms:{tDiffuse:{value:null},resolution:{value:new Qt}},vertexShader:`varying vec2 vUv;

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

		}`};class Pi extends mo{constructor(t,e,i,o,s=32){super(),this.width=i!==void 0?i:512,this.height=o!==void 0?o:512,this.clear=!0,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const a=new Ea;a.format=fo,a.type=$i,this.normalRenderTarget=new ei(this.width,this.height,{minFilter:bn,magFilter:bn,type:hi,depthTexture:a}),this.ssaoRenderTarget=new ei(this.width,this.height,{type:hi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new yn({defines:Object.assign({},$s.defines),uniforms:Ii.clone($s.uniforms),vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,blending:zn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Wm,this.normalMaterial.blending=zn,this.blurMaterial=new yn({defines:Object.assign({},tr.defines),uniforms:Ii.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new yn({defines:Object.assign({},Qs.defines),uniforms:Ii.clone(Qs.uniforms),vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:zn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yn({uniforms:Ii.clone(_s.uniforms),vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:bc,blendDst:Qr,blendEquation:Ci,blendSrcAlpha:Sc,blendDstAlpha:Qr,blendEquationAlpha:Ci}),this.fsQuad=new mr(null),this.originalClearColor=new fe}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,i){switch(t.capabilities.isWebGL2===!1&&(this.noiseTexture.format=Uc),this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case Pi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=zn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Pi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=zn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Pi.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=zn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=wc,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,i,o,s){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,i,o,s){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),r=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o=e.clearColor||o,s=e.clearAlpha||s,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=r,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const o=new E;o.x=Math.random()*2-1,o.y=Math.random()*2-1,o.z=Math.random(),o.normalize();let s=i/t;s=Re.lerp(.1,1,s*s),o.multiplyScalar(s),e.push(o)}}generateRandomKernelRotations(){const i=new ig,o=4*4,s=new Float32Array(o);for(let a=0;a<o;a++){const r=Math.random()*2-1,l=Math.random()*2-1,u=0;s[a]=i.noise3d(r,l,u)}this.noiseTexture=new Am(s,4,4,Nc,Di),this.noiseTexture.wrapS=ti,this.noiseTexture.wrapT=ti,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const o=e.get(i);i.visible=o}),e.clear()}}Pi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const og={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

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

		}`};function sg(){const n=typeof window<"u"?window.innerWidth:1024,t=typeof window<"u"?window.innerHeight:768,e=typeof window<"u"&&window.devicePixelRatio?window.devicePixelRatio:1,i=typeof navigator<"u"?navigator.userAgent:"",o=typeof window<"u"&&("ontouchstart"in window||(navigator.maxTouchPoints||0)>0),s=/Android|iPhone|iPad|iPod|Mobile|IEMobile|Opera Mini/i.test(i),a=n<900||t<700,r=navigator.deviceMemory||8,l=navigator.hardwareConcurrency||8,u=r<=4,h=l<=4;let d=null,m=!1;try{const _=new URLSearchParams(window.location.search);d=_.get("quality"),m=_.has("capture")}catch{}let p=null;if(d==="low"?p=so("low",!0,1,1024,256):d==="high"?p=so("high",!1,2,4096,512):d==="medium"?p=so("medium",!1,1.5,2048,512):s||o&&a||u||h&&o?p=so("low",!0,1,1024,256):n<1280||e>2.2?p=so("medium",!1,1.5,2048,512):p=so("high",!1,2,4096,512),m){const _=p.tier,g=p.isMobile;p=so("low",g,1,1024,256),p.displayTier=_,p.isCapture=!0}return p}function so(n,t,e,i,o){const s=n==="low"?1:n==="medium"?4:8;return{tier:n,isMobile:t,dprCap:e,shadowSize:i,pmremSize:o,anisotropy:s,texScale:n==="low"?.25:n==="medium"?.75:1,useComposer:n!=="low",useSSAO:n==="high",useBloom:n!=="low",useHeightFog:n==="high",useVignette:n!=="low",useChromatic:n==="high",godRayCount:n==="low"?0:n==="medium"?2:4,godRaySize:n==="low"?0:n==="medium"?512:1024,puddleShimmer:n!=="low",shadowType:n==="low"?"basic":"pcfsoft",maxAnisotropy:s}}const Wt=sg();typeof window<"u"&&(window.__QUALITY=Wt);const Ti=Wt.tier==="low",rg={uniforms:{tDiffuse:{value:null},amount:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv; void main(){ float a=amount*0.0012; vec4 r=texture2D(tDiffuse, vUv+vec2(a,0.)); vec4 g=texture2D(tDiffuse, vUv); vec4 b=texture2D(tDiffuse, vUv-vec2(a,0.)); gl_FragColor=vec4(r.r,g.g,b.b,g.a);}"};function ag(){const n=new ec;n.fog=new Ta(14082800,.0118),n.background=null;const t=new $n(74,window.innerWidth/window.innerHeight,.08,800);t.position.set(0,1.75,8),t.rotation.order="YXZ";const e=new ru({antialias:Wt.tier!=="low",powerPreference:Wt.tier==="low"?"low-power":"high-performance",stencil:!1,depth:!0,alpha:!1,preserveDrawingBuffer:!0}),i=Math.min(window.devicePixelRatio||1,Wt.dprCap);e.setPixelRatio(i),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=fn,e.toneMapping=ga,e.toneMappingExposure=1.08,e.shadowMap.enabled=Wt.tier!=="low",e.shadowMap.type=Wt.shadowType==="basic"?wu:yc,e.shadowMap.autoUpdate=Wt.tier!=="low","useLegacyLights"in e&&(e.useLegacyLights=!1),e.domElement.style.display="block",e.domElement.style.width="100%",e.domElement.style.height="100%",e.domElement.style.outline="none",document.body.insertBefore(e.domElement,document.body.firstChild),document.body.contains(e.domElement)||document.body.appendChild(e.domElement);const o=new la(e);o.compileEquirectangularShader();let s=null;function a(){try{const G=new Qc(Wt.pmremSize,{format:ri,generateMipmaps:!0,minFilter:Ko,magFilter:Hn,colorSpace:fn}),et=new Jc(.1,800,G),it=new ec,Q=new ln(400,32,16),dt=new yn({side:Un,uniforms:{topColor:{value:new fe(7315672)},midColor:{value:new fe(10733292)},botColor:{value:new fe(15130064)},sunDir:{value:new E(.35,.62,.28).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vDir=normalize(w.xyz); gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"varying vec3 vDir; uniform vec3 topColor; uniform vec3 midColor; uniform vec3 botColor; uniform vec3 sunDir; void main(){ float y=normalize(vDir).y; float t=clamp((y+0.22)/1.1,0.,1.); vec3 col=mix(botColor,midColor,smoothstep(0.,0.55,t)); col=mix(col,topColor,smoothstep(0.5,1.,t)); float s=pow(max(0.,dot(normalize(vDir),sunDir)),480.)*1.2; col+=vec3(1.,0.96,0.84)*s; gl_FragColor=vec4(col,1.);}"});it.add(new L(Q,dt));const bt=new ln(400,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Ht=new dn({color:9147780,side:Un});it.add(new L(bt,Ht)),et.update(e,it),s=o.fromCubemap(G.texture).texture,n.environment=s,n.environmentIntensity=1.05,G.dispose(),Q.dispose(),dt.dispose(),bt.dispose(),Ht.dispose()}catch{}}a();let r=null,l=null;(()=>{const G=new ln(420,Wt.tier==="low"?32:64,Wt.tier==="low"?16:32);r=new yn({side:Un,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1,uniforms:{topCol:{value:new fe(5212873)},midCol:{value:new fe(9156070)},horCol:{value:new fe(14214901)},horCol2:{value:new fe(15660025)},grdCol:{value:new fe(10135706)},sunDir:{value:new E(.32,.585,.42).normalize()},sunCol:{value:new fe(16773822)},sunCol2:{value:new fe(16771232)},sunInt:{value:1.95},time:{value:0}},vertexShader:"varying vec3 vDir; varying float vY; void main(){ vec4 w=modelMatrix*vec4(position,1.); vDir=normalize(w.xyz); vY=normalize(position).y; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:Ti?`
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
      `}),l=new L(G,r),l.frustumCulled=!1,l.renderOrder=-1e4,l.castShadow=!1,l.receiveShadow=!1,n.add(l)})();const u=new fa(13625087,3028271,.68);u.position.set(0,50,0),n.add(u);let h=null,d=null;Wt.tier!=="low"&&(h=new $r(11126527,.34),h.position.set(-16,12,-10),n.add(h),d=new fa(16767152,2761240,.22),d.position.set(0,-1,0),n.add(d));const m=new fe(16767152),p=new $r(16774365,2.05);p.position.set(30,44,18),p.castShadow=Wt.tier!=="low";const _=Wt.shadowSize;p.shadow.mapSize.set(_,_);const g=28;p.shadow.camera.near=.6,p.shadow.camera.far=108,p.shadow.camera.left=-g,p.shadow.camera.right=g,p.shadow.camera.top=g,p.shadow.camera.bottom=-g,p.shadow.bias=-18e-5,p.shadow.normalBias=.02,p.shadow.radius=Wt.tier==="low"?1:Wt.tier==="medium"?2.5:4.5,p.shadow.blurSamples=Wt.tier==="low"?1:Wt.tier==="medium"?6:14,p.shadow.camera.updateProjectionMatrix(),n.add(p),n.add(p.target),p.target.position.set(0,0,-8);let f=null;Wt.tier!=="low"&&(f=new $r(16771528,.38),f.position.set(-24,16,20),n.add(f));let c=null;(()=>{if(Wt.godRayCount<=0)return;const G=new qe(38,62),et=Wt.godRaySize||1024,it=document.createElement("canvas");it.width=et,it.height=et;const Q=it.getContext("2d"),dt=Q.createRadialGradient(et*.5,et*.1,0,et*.5,et*.1,et*.72);dt.addColorStop(0,"rgba(255,244,210,0.98)"),dt.addColorStop(.06,"rgba(255,238,190,0.58)"),dt.addColorStop(.16,"rgba(255,230,160,0.24)"),dt.addColorStop(.32,"rgba(255,220,140,0.10)"),dt.addColorStop(.52,"rgba(255,220,140,0.035)"),dt.addColorStop(.74,"rgba(255,220,140,0.012)"),dt.addColorStop(1,"rgba(255,220,140,0)"),Q.fillStyle=dt,Q.fillRect(0,0,et,et),Q.globalCompositeOperation="screen",Q.strokeStyle="rgba(255,245,210,0.11)",Q.lineWidth=1.4;for(let St=0;St<32;St++){const Rt=et*.5+(Math.random()-.5)*42;Q.beginPath(),Q.moveTo(Rt,et*.02),Q.lineTo(Rt+(Math.random()-.5)*18,et*.97),Q.stroke()}Q.strokeStyle="rgba(255,240,200,0.065)",Q.lineWidth=.7;for(let St=0;St<18;St++){const Rt=et*.5+(Math.random()-.5)*30;Q.beginPath(),Q.moveTo(Rt,et*.05),Q.lineTo(Rt+(Math.random()-.5)*10,et*.92),Q.stroke()}for(let St=0;St<140;St++){const Rt=Math.random()*et,Gt=Math.random()*et,Me=Math.random()*1.6+.2,Zt=.07+Math.random()*.1;Q.fillStyle="rgba(255,236,180,"+Zt+")",Q.beginPath(),Q.arc(Rt,Gt,Me,0,Math.PI*2),Q.fill()}const bt=Q.getImageData(0,0,et,et),Ht=bt.data;for(let St=0;St<Ht.length;St+=4)if(Math.random()<.018){const Rt=(Math.random()-.5)*14;Ht[St]+=Rt,Ht[St+1]+=Rt,Ht[St+2]+=Rt*.85}Q.putImageData(bt,0,0);const at=new qn(it);at.colorSpace=fn,at.needsUpdate=!0,at.wrapS=at.wrapT=si,at.minFilter=Hn,at.magFilter=Hn,at.generateMipmaps=!1,at.anisotropy=4;const ft=[];for(let St=0;St<4;St++){const Rt=new dn({map:at,transparent:!0,depthWrite:!1,depthTest:!1,blending:mi,side:je,fog:!1,opacity:St===0?.34:St===1?.22:St===2?.16:.11});ft.push(Rt)}const I=[0,Math.PI*.33,Math.PI*.66,Math.PI*1],Ot=[1,.92,1.08,.88];c=new Ne;for(let St=0;St<4;St++){const Rt=new L(G,ft[St]);Rt.scale.set(Ot[St],Ot[St],1),Rt.position.set(14.5,15.2,-10),Rt.lookAt(p.position),Rt.rotateX(.16+St*.02),I[St]!==0&&Rt.rotateY(I[St]),Rt.frustumCulled=!1,Rt.renderOrder=-5e3-St,Rt.castShadow=!1,Rt.receiveShadow=!1,c.add(Rt)}c.traverse(St=>{St.castShadow=!1,St.receiveShadow=!1}),n.add(c)})();let M=null,v=null,w=null,U=null,P=null,R=null,tt=null,y=null,b=!1,W=!1;const nt={uniforms:{tDiffuse:{value:null},tintColor:{value:new fe(16767152)},tintStrength:{value:.085},heightFogColor:{value:new fe(14082800)},heightFogDensity:{value:.0118},heightFalloff:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
    `},yt={uniforms:{tDiffuse:{value:null},fogColor:{value:new fe(14082800)},fogDensity:{value:.0118},fogHeightFalloff:{value:.045},fogHeightOffset:{value:1.2},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
    `};function k(){if(!Wt.useComposer){M=null,W=!1,b=!1;return}try{M=new Jm(e);const G=new $m(n,t);if(M.addPass(G),Wt.useSSAO)try{const it=Math.max(1,window.innerWidth),Q=Math.max(1,window.innerHeight);w=new Pi(n,t,it,Q),w.kernelRadius=.52,w.minDistance=.001,w.maxDistance=.032,w.output=Pi.OUTPUT.Default,w.outputTint=m.clone(),w.tintStrength=.12,M.addPass(w),tt=new Vo(nt),tt.uniforms.tintColor.value.copy(m),tt.uniforms.tintStrength.value=.095,M.addPass(tt)}catch{w=null,tt=null}else w=null,tt=null;Wt.useHeightFog?(R=new Vo(yt),R.uniforms.fogColor.value.set(14082800),R.uniforms.fogDensity.value=.0118,R.uniforms.fogHeightFalloff.value=.045,M.addPass(R)):R=null,Wt.useBloom?(v=new $o(new Qt(window.innerWidth,window.innerHeight),Wt.tier==="medium"?.12:.18,Wt.tier==="medium"?.22:.32,.92),M.addPass(v)):v=null,U=new Vo(ng),U.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),M.addPass(U),Wt.useVignette?(P=new Vo(og),P.uniforms.darkness.value=.32,P.uniforms.offset.value=.985,M.addPass(P)):P=null;let et=null;Wt.useChromatic?(et=new Vo(rg),et.uniforms.amount.value=0,window.__chromaticPass=et,M.addPass(et)):window.__chromaticPass=null,y=new eg,M.addPass(y),b=!0,W=!0}catch(G){console.warn("[renderer] composer failed, fallback to forward",G),M=null,W=!1,b=!1}}k();function ut(){const G=window.innerWidth,et=window.innerHeight,it=Math.min(window.devicePixelRatio||1,Wt.dprCap);t.aspect=G/et,t.updateProjectionMatrix(),e.setSize(G,et,!1),e.setPixelRatio(it),M&&b&&(M.setSize(G,et),M.setPixelRatio(it),v&&v.setSize(G,et),w&&w.setSize(G,et),U&&U.material.uniforms.resolution.value.set(1/G,1/et),R&&(R.material.uniforms.fogHeightOffset.value=1.2))}window.addEventListener("resize",ut,{passive:!0});let q=!1;const rt=new E,V=new E,Mt=new E;let X=0;function Et(G){const et=performance.now()*.001,it=!Ti||et-X>.16;if(r&&it){Ti&&(X=et),r.uniforms.time.value=et;const Q=Ti?1.95:1.95+Math.sin(et*.13)*.038+Math.sin(et*.37)*.014;r.uniforms.sunInt.value=Q;const dt=et*.0055;rt.set(Math.cos(dt)*.32+.32,.585+Math.sin(dt*.6)*.012,Math.sin(dt)*.42+.42).normalize(),r.uniforms.sunDir.value.copy(rt)}else r||rt.set(.32,.585,.42).normalize();if(!Ti&&c){const Q=.28+(Math.sin(et*.17)*.5+.5)*.08,dt=Q+Math.sin(et*.47)*.014,bt=Q*.92+Math.sin(et*.31+1.1)*.012,Ht=Q*.88+Math.sin(et*.22+2.3)*.01,at=[Q,dt*.82,bt*.68,Ht*.55];for(let I=0;I<c.children.length;I++){const St=c.children[I].material;St&&St.opacity!==void 0&&(St.opacity=Math.max(.06,Math.min(.38,at[I]*(I===0?1:I===1?.72:I===2?.58:.42)*1.1)))}c.rotation.y=Math.sin(et*.028)*.018,c.rotation.x=Math.sin(et*.019)*.008;const ft=Math.sin(et*.07)*.04;c.position.x=14.5+ft}if(!Ti&&R){R.uniforms.time.value=et;const Q=.0118+Math.sin(et*.04)*6e-4;R.uniforms.fogDensity.value=Q}if(!Ti&&tt){t.getWorldDirection(V);const dt=.095-Math.max(0,V.dot(rt))*.028;tt.uniforms.tintStrength.value=Re.lerp(tt.uniforms.tintStrength.value,dt,Math.min(1,G*1.2))}if(!Ti&&e.shadowMap.enabled&&(t.getWorldDirection(V),V.y=0,V.normalize(),Mt.set(t.position.x+V.x*10,0,t.position.z+V.z*10),p.target.position.lerp(Mt,Math.min(1,G*2.2)),p.position.set(p.target.position.x+30,44,p.target.position.z+18),p.shadow.needsUpdate=!0),W&&v){t.getWorldDirection(V);const dt=.19+Math.max(0,V.dot(rt))*.065;v.strength=Re.lerp(v.strength,dt,Math.min(1,G*1.6))}if(Wt.puddleShimmer){window.__shimmerLast||(window.__shimmerLast=0);const Q=performance.now();if(Q-window.__shimmerLast>160){window.__shimmerLast=Q,window.__shimmerTmp||(window.__shimmerTmp={toPuddle:new E,tmpCamDir:new E});{t.getWorldDirection(V);const bt=Math.abs(V.y),Ht=.82+Math.sin(et*.9)*.08+Math.sin(et*1.7)*.04+bt*.18;window.__puddleMeshes||(window.__puddleMeshes=[]),window.__puddleMeshes.length===0&&n.traverse(at=>{at.isMesh&&at.geometry&&at.geometry.type==="CircleGeometry"&&at.material&&at.material.envMapIntensity!==void 0&&window.__puddleMeshes.push(at)});for(let at=0;at<window.__puddleMeshes.length;at++){const ft=window.__puddleMeshes[at];if(!ft.material)continue;ft.userData.baseEnv===void 0&&(ft.userData.baseEnv=ft.material.envMapIntensity),ft.userData.baseOp===void 0&&(ft.userData.baseOp=ft.material.opacity),ft.userData.baseNsX===void 0&&ft.material.normalScale&&(ft.userData.baseNsX=ft.material.normalScale.x,ft.userData.baseNsY=ft.material.normalScale.y);const I=window.__shimmerTmp.toPuddle.subVectors(ft.position,t.position),Ot=Math.sqrt(I.x*I.x+I.z*I.z),St=Math.max(0,1-Ot/42),Rt=Math.sqrt(I.x*I.x+I.z*I.z+.001),Me=.22*Math.max(0,1-Math.abs(I.y)/Math.max(1,Rt*1.2))*St+.08*St,Zt=Ht+Me;ft.material.envMapIntensity=ft.userData.baseEnv*Zt;const C=ft.userData.baseOp;if(ft.material.opacity=Math.min(.62,Math.max(.42,C+Math.sin(et*.6+ft.position.x*.4)*.025+Math.sin(et*1.1+ft.position.z*.35)*.015)),ft.material.normalScale&&ft.userData.baseNsX!==void 0){const S=1+Math.sin(et*.55+ft.position.x*.7)*.14+Math.sin(et*.82+ft.position.z*.5)*.08;ft.material.normalScale.set(ft.userData.baseNsX*S,ft.userData.baseNsY*S),ft.material.normalMap&&(ft.material.normalMap.offset.x=Math.sin(et*.07+ft.position.x*.12)*.02,ft.material.normalMap.offset.y=Math.cos(et*.06+ft.position.z*.11)*.02)}}}}}if(!Ti&&window.__chromaticPass){const Q=window.__chromaticPass;window.__chromaticHit&&window.__chromaticHit>0?(Q.uniforms.amount.value=Math.min(2.8,window.__chromaticHit*1.6),window.__chromaticHit=Math.max(0,window.__chromaticHit-G*3.2),window.__chromaticHit<=.01&&(Q.uniforms.amount.value=Re.lerp(Q.uniforms.amount.value,0,Math.min(1,G*4)))):Q.uniforms.amount.value=Re.lerp(Q.uniforms.amount.value,0,Math.min(1,G*2.5))}W&&b&&M?(M.render(G),q=!0):q=!1}const Nt=e.render.bind(e);return e.render=function(G,et){if(q){q=!1;return}Nt(G,et)},window.__quality=Wt,window.__rendererQuality=Wt,{scene:n,camera:t,renderer:e,composer:M,bloomPass:v,ssaoPass:w,sun:p,hemi:u,skyMat:r,update:Et,onResize:ut}}function lg(n,t,e){const M=n.fov,v=6,w=8.2,U=11,P=6,R=.028,tt=.018;let y=0,b=0,W=!1,nt=!1,yt=!1,k=!1,ut=!1;const q=new E,rt=Object.create(null);let V=new E(0,1.7,8),Mt=1.7,X=1.7,Et=0,Nt=0,G=0,et=[],it=e?e.length:0;function Q(){if(et.length=0,!!e)for(const F of e){F.updateMatrixWorld(!0);const ct=new Sn().setFromObject(F,!0);et.push({mesh:F,box:ct})}}Q();const dt=new Qi().setFromQuaternion(n.quaternion,"YXZ");y=dt.y,b=dt.x,b=Math.max(-1.45,Math.min(1.45,b)),n.rotation.order="YXZ",n.rotation.y=y,n.rotation.x=b,n.rotation.z=0;const bt={lock:[],unlock:[]};function Ht(F){const ct=bt[F];for(let lt=0;lt<ct.length;lt++)ct[lt].call(B)}function at(){return document.querySelector("canvas")||document.body}function ft(F,ct){rt[F]=ct,(F==="ShiftLeft"||F==="ShiftRight")&&(rt.Shift=!!(rt.ShiftLeft||rt.ShiftRight)),(F==="ControlLeft"||F==="ControlRight")&&(rt.Control=!!(rt.ControlLeft||rt.ControlRight))}function I(F){W&&(F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown"||F.code==="ArrowLeft"||F.code==="ArrowRight")&&F.preventDefault(),ft(F.code,!0),F.key==="Shift"&&(rt.Shift=!0),(F.key==="Control"||F.key==="Ctrl")&&(rt.Control=!0)}function Ot(F){ft(F.code,!1),F.key==="Shift"&&(rt.ShiftLeft=!1,rt.ShiftRight=!1,rt.Shift=!1),(F.key==="Control"||F.key==="Ctrl")&&(rt.ControlLeft=!1,rt.ControlRight=!1,rt.Control=!1)}function St(){for(const F in rt)rt[F]=!1}document.addEventListener("keydown",I,!1),document.addEventListener("keyup",Ot,!1),window.addEventListener("blur",St,!1),window.addEventListener("keydown",F=>{W&&(F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},{passive:!1}),document.addEventListener("contextmenu",F=>{W&&F.preventDefault()}),document.addEventListener("wheel",F=>{W&&F.preventDefault()},{passive:!1});function Rt(F){if(!W)return;const ct=F.movementX||0,lt=F.movementY||0;y-=ct*.0022,b-=lt*.0022,b<-1.45?b=-1.45:b>1.45&&(b=1.45),n.rotation.order="YXZ",n.rotation.y=y,n.rotation.x=b,n.rotation.z=0}document.addEventListener("mousemove",Rt,!1);let Gt=null,Me=0,Zt=0,C=null,S={x:0,y:0},z=null,Ft=null;function Pt(){if(!Wt.isMobile||document.getElementById("touch-joy"))return;const F=document.createElement("style"),ct=Wt.tier==="low";F.textContent=ct?"#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.32);border:1px solid rgba(255,255,255,0.30);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(180,40,50,0.78);border:1.5px solid rgba(255,255,255,0.55);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(200,50,60,0.92)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(40,45,55,0.72);border:1px solid rgba(255,255,255,0.16);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}":"#touch-joy{position:fixed;left:14px;bottom:14px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(6px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center}#touch-joy-stick{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.22);border:1px solid rgba(255,255,255,0.25);position:absolute;left:36px;top:36px;touch-action:none}#touch-look{position:fixed;right:0;top:0;width:52%;height:100%;touch-action:none;z-index:19}#touch-fire{position:fixed;right:18px;bottom:22px;width:86px;height:86px;border-radius:50%;background:rgba(230,57,70,0.18);border:1.5px solid rgba(230,57,70,0.55);backdrop-filter:blur(4px);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px;letter-spacing:0.6px}#touch-fire:active{background:rgba(230,57,70,0.32)}#touch-reload{position:fixed;right:114px;bottom:28px;width:56px;height:56px;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700}#touch-jump{position:fixed;right:18px;bottom:118px;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);touch-action:none;z-index:20;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px}",document.head.appendChild(F),Ft=document.createElement("div"),Ft.id="touch-joy",z=document.createElement("div"),z.id="touch-joy-stick",Ft.appendChild(z);const lt=document.createElement("div");lt.id="touch-look";const D=document.createElement("div");D.id="touch-fire",D.textContent="FIRE";const T=document.createElement("div");T.id="touch-reload",T.textContent="R";const K=document.createElement("div");K.id="touch-jump",K.textContent="▲",document.body.appendChild(Ft),document.body.appendChild(lt),document.body.appendChild(D),document.body.appendChild(T),document.body.appendChild(K);function _t(ot){const x=Ft.getBoundingClientRect(),st=x.left+x.width/2,Ct=x.top+x.height/2,oe=ot.clientX-st,se=ot.clientY-Ct,ue=Math.hypot(oe,se),Te=44,Ge=Math.min(ue,Te),Ie=Math.atan2(se,oe),Ae=Math.cos(Ie)*Ge/Te,Be=Math.sin(Ie)*Ge/Te;z.style.left=36+Ae*34+"px",z.style.top=36+Be*34+"px",S.x=Ae,S.y=-Be,Math.abs(Ae)<.12&&Math.abs(Be)<.12&&(S.x=0,S.y=0)}function Dt(){z.style.left="36px",z.style.top="36px",S.x=0,S.y=0,rt.KeyW=!1,rt.KeyA=!1,rt.KeyS=!1,rt.KeyD=!1}Ft.addEventListener("touchstart",ot=>{ot.preventDefault();const x=ot.changedTouches[0];C=x.identifier,_t(x)},{passive:!1}),Ft.addEventListener("touchmove",ot=>{ot.preventDefault();for(let x=0;x<ot.changedTouches.length;x++){const st=ot.changedTouches[x];if(st.identifier===C){_t(st);break}}},{passive:!1}),Ft.addEventListener("touchend",ot=>{ot.preventDefault();for(let x=0;x<ot.changedTouches.length;x++)if(ot.changedTouches[x].identifier===C){C=null,Dt();break}ot.touches.length===0&&Dt()},{passive:!1}),Ft.addEventListener("touchcancel",ot=>{C=null,Dt()},{passive:!1}),lt.addEventListener("touchstart",ot=>{if(ot.preventDefault(),Gt!==null)return;const x=ot.changedTouches[0];Gt=x.identifier,x.clientX,x.clientY,Me=x.clientX,Zt=x.clientY},{passive:!1}),lt.addEventListener("touchmove",ot=>{ot.preventDefault();for(let x=0;x<ot.changedTouches.length;x++){const st=ot.changedTouches[x];if(st.identifier===Gt){const Ct=st.clientX-Me,oe=st.clientY-Zt;Me=st.clientX,Zt=st.clientY;const se=.0028;y-=Ct*se,b-=oe*se,b<-1.45?b=-1.45:b>1.45&&(b=1.45),n.rotation.order="YXZ",n.rotation.y=y,n.rotation.x=b,n.rotation.z=0;break}}},{passive:!1}),lt.addEventListener("touchend",ot=>{ot.preventDefault();for(let x=0;x<ot.changedTouches.length;x++)if(ot.changedTouches[x].identifier===Gt){Gt=null;break}},{passive:!1}),lt.addEventListener("touchcancel",ot=>{Gt=null},{passive:!1});function Ut(){return Wt.isMobile||isLocked()}function H(ot){if(Ut()){try{window.__weapons&&window.__weapons.shoot&&window.__weapons.shoot()}catch{}try{document.dispatchEvent(new MouseEvent(ot?"mousedown":"mouseup",{button:0}))}catch{}}}let Y=!1,O=null;D.addEventListener("touchstart",ot=>{ot.preventDefault(),Y=!0,H(!0),O&&clearInterval(O),O=setInterval(()=>{Y&&H(!0)},85)},{passive:!1}),D.addEventListener("touchend",ot=>{ot.preventDefault(),Y=!1,H(!1),O&&clearInterval(O)},{passive:!1}),D.addEventListener("touchcancel",ot=>{Y=!1,O&&clearInterval(O)},{passive:!1}),T.addEventListener("touchstart",ot=>{ot.preventDefault();try{document.dispatchEvent(new KeyboardEvent("keydown",{code:"KeyR"})),setTimeout(()=>document.dispatchEvent(new KeyboardEvent("keyup",{code:"KeyR"})),80)}catch{}},{passive:!1}),K.addEventListener("touchstart",ot=>{ot.preventDefault(),rt.Space=!0,setTimeout(()=>rt.Space=!1,160)},{passive:!1}),window.__mobileMoveVec=S;const wt=document.getElementById("center");wt&&(wt.style.display,setTimeout(()=>{Wt.isMobile&&(wt.style.display="none",W=!0)},600),wt.addEventListener("touchstart",ot=>{ot.preventDefault(),wt.style.display="none",W=!0;try{Ht("lock")}catch{}},{passive:!1}))}try{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pt):Pt()}catch{}function kt(){const F=at();if(!(!F||!F.requestPointerLock)){F.tabIndex<0&&(F.tabIndex=0);try{F.requestPointerLock()}catch{}}}function ne(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}function Yt(){W=!!document.pointerLockElement,W!==nt&&(nt=W,Ht(W?"lock":"unlock"))}document.addEventListener("pointerlockchange",Yt,!1),document.addEventListener("pointerlockerror",()=>{},!1);const Xt=new La,ce=new E(0,-1,0),de=new Sn;function At(F,ct){const lt=new E(F.x-.32,F.y-ct,F.z-.32),D=new E(F.x+.32,F.y+.12,F.z+.32);return de.set(lt,D)}function be(F){for(let ct=0;ct<et.length;ct++)if(F.intersectsBox(et[ct].box))return et[ct];return null}function ge(F,ct){const lt=At(F,ct);return be(lt)}function ye(F,ct){for(let lt=0;lt<4;lt++){const D=ge(F,ct);if(!D)break;const T=D.box,K=At(F,ct),_t=Math.min(K.max.x-T.min.x,T.max.x-K.min.x),Dt=Math.min(K.max.z-T.min.z,T.max.z-K.min.z),Ut=Math.min(K.max.y-T.min.y,T.max.y-K.min.y);if(Ut<_t&&Ut<Dt){const H=(K.min.y+K.max.y)*.5,Y=(T.min.y+T.max.y)*.5;if(H<Y?F.y-=Ut+.011:F.y+=Ut+.011,Ut<.05)break}else if(_t<Dt){const H=(K.min.x+K.max.x)*.5,Y=(T.min.x+T.max.x)*.5;H<Y?F.x-=_t+.011:F.x+=_t+.011}else{const H=(K.min.z+K.max.z)*.5,Y=(T.min.z+T.max.z)*.5;H<Y?F.z-=Dt+.011:F.z+=Dt+.011}}}function jt(F,ct){const lt=F.y-ct,D=new E(F.x,lt+.35,F.z);Xt.set(D,ce),Xt.far=.5;const T=e||[];if(T.length){const Dt=Xt.intersectObjects(T,!1);if(Dt.length&&Dt[0].distance<.42)return!0}if(lt<=.09)return!0;const K=new E(F.x,F.y-.05,F.z),_t=At(K,ct);if(_t.min.y-=.08,be(_t))for(let Dt=0;Dt<et.length;Dt++){const Ut=et[Dt].box;if(_t.intersectsBox(Ut)&&Math.abs(lt-Ut.max.y)<.12&&lt>=Ut.max.y-.15)return!0}return!1}function ie(F){if(F<=0)return;F>.05&&(F=.05),e&&e.length!==it&&(Q(),it=e.length);const ct=!!(rt.ControlLeft||rt.ControlRight||rt.Control||rt.KeyC);if(!ct&&X<1.7-.05){const qt=new E(V.x,V.y+(1.7-X),V.z);ge(qt,1.7)?Mt=1.1:Mt=1.7}else Mt=ct?1.1:1.7;const lt=1-Math.exp(-18*F),D=X;if(X+=(Mt-X)*lt,Math.abs(X-Mt)<.01&&(X=Mt),yt?V.y+=X-D:V.y+=(X-D)*.5,k=yt,yt=jt(V,X),yt&&q.y<=.1){q.y=Math.max(q.y,0);const qt=V.y-X;if(qt<.06&&qt>-.3){const he=new E(V.x,V.y-X+.4,V.z);Xt.set(he,ce),Xt.far=1;let _e=0;const Fe=e&&e.length?Xt.intersectObjects(e,!1):[];Fe.length&&(_e=Fe[0].point.y);let N=-1/0;const gt=new Sn(new E(V.x-.2,qt-.2,V.z-.2),new E(V.x+.2,qt+.2,V.z+.2));for(let J=0;J<et.length;J++){const Lt=et[J].box;gt.intersectsBox(Lt)&&Lt.max.y>N&&Lt.max.y<=qt+.15&&(N=Lt.max.y)}N>_e&&(_e=N);const j=_e+X;Math.abs(V.y-j)<.35&&(V.y=Re.lerp(V.y,j,Math.min(1,20*F))),V.y<j&&(V.y=j)}}const T=Math.sin(y),K=Math.cos(y),_t=new E(-T,0,-K),Dt=new E(K,0,-T);let Ut=0,H=0;const Y=!!(rt.KeyW||rt.ArrowUp),O=!!(rt.KeyS||rt.ArrowDown),wt=!!(rt.KeyA||rt.ArrowLeft),ot=!!(rt.KeyD||rt.ArrowRight);if(Y&&(Ut+=_t.x,H+=_t.z),O&&(Ut-=_t.x,H-=_t.z),wt&&(Ut-=Dt.x,H-=Dt.z),ot&&(Ut+=Dt.x,H+=Dt.z),Wt.isMobile&&window.__mobileMoveVec&&(Math.abs(window.__mobileMoveVec.x)>.08||Math.abs(window.__mobileMoveVec.y)>.08)){const qt=window.__mobileMoveVec,he=qt.x*Dt.x+qt.y*_t.x,_e=qt.x*Dt.z+qt.y*_t.z;Ut=he,H=_e}let x=Math.hypot(Ut,H);x>0&&(Ut/=x,H/=x);const st=!!(rt.ShiftLeft||rt.ShiftRight||rt.Shift)&&Y&&!O&&!ct&&yt&&x>0,Ct=ct;let oe=4.6;Ct?oe*=.55:st&&(oe*=2.2),x===0&&(oe=0);const se=Ut*oe,ue=H*oe;let Te=yt?22:22*.32;const Ge=q.x,Ie=q.z,Ae=Math.hypot(Ge,Ie),Be=x>0?Ge*Ut+Ie*H:-1;if(yt&&x===0?Te=28:yt&&Be<-.1&&(Te=Math.max(Te,24)),!yt&&x===0){const qt=Math.exp(-1.2*F);q.x*=qt,q.z*=qt}if(x>0||Ae>.01){const qt=1-Math.exp(-Te*F);q.x+=(se-q.x)*qt,q.z+=(ue-q.z)*qt}else q.x=0,q.z=0;Math.abs(q.x)<.02&&x===0&&(q.x=0),Math.abs(q.z)<.02&&x===0&&(q.z=0);const Ve=!!rt.Space;Ve&&yt&&!ut&&(q.y=6.5,yt=!1,ut=!0),Ve||(ut=!1),(!yt||q.y>0)&&(q.y-=18*F),q.y<-22&&(q.y=-22);let A=q.x*F,Z=q.z*F,ht=q.y*F;if(ye(V,X),A!==0){const qt=new E(V.x+A,V.y,V.z);if(!ge(qt,X))V.x+=A;else{let he=!1;if(yt&&x>0){const _e=new E(V.x+A,V.y+.58,V.z),Fe=ge(qt,X);if(Fe){const N=Fe.box.max.y,gt=N-(V.y-X);gt>.18&&gt<.95&&!ge(_e,1.1)&&(V.x+=A*.62,V.y=N+X+.02,q.y=1.2,yt=!1,he=!0)}}if(!he){let _e=0,Fe=A,N=0;for(let gt=0;gt<5;gt++){const j=(_e+Fe)*.5,J=new E(V.x+j,V.y,V.z);ge(J,X)?Fe=j:(N=j,_e=j)}V.x+=N,Math.sign(q.x)===Math.sign(A)&&(q.x*=.12)}}}if(Z!==0){const qt=new E(V.x,V.y,V.z+Z);if(!ge(qt,X))V.z+=Z;else{let he=!1;if(yt&&x>0){const _e=new E(V.x,V.y+.58,V.z+Z),Fe=ge(qt,X);if(Fe){const N=Fe.box.max.y,gt=N-(V.y-X);gt>.18&&gt<.95&&!ge(_e,1.1)&&(V.z+=Z*.62,V.y=N+X+.02,q.y=1.2,yt=!1,he=!0)}}if(!he){let _e=0,Fe=Z,N=0;for(let gt=0;gt<5;gt++){const j=(_e+Fe)*.5,J=new E(V.x,V.y,V.z+j);ge(J,X)?Fe=j:(N=j,_e=j)}V.z+=N,Math.sign(q.z)===Math.sign(Z)&&(q.z*=.12)}}}if(ht!==0){const qt=new E(V.x,V.y+ht,V.z),he=ge(qt,X);if(!he)V.y+=ht;else{const _e=he.box;if(ht<0){const N=_e.max.y+X,gt=q.y;V.y>N&&(V.y=N),q.y<0?(gt<-6&&(G=Math.min(1,(-gt-6)/10)),q.y=0):q.y<0&&(q.y=0),yt=!0}else{const N=_e.min.y-.12-.01;V.y>N&&(V.y=N),q.y>0&&(q.y=0)}}}V.x=Math.max(-48,Math.min(48,V.x)),V.z=Math.max(-48,Math.min(48,V.z)),V.y<-20&&(V.set(0,1.7,8),q.set(0,0,0),X=1.7,Mt=1.7);const pt=Math.hypot(q.x,q.z),mt=yt&&pt>.5&&x>0;Nt+=((st&&mt?1:0)-Nt)*(1-Math.exp(-8*F));const vt=M+v*Nt;Math.abs(n.fov-vt)>.05&&(n.fov=vt,n.updateProjectionMatrix());let Bt=0,te=0;if(mt){let qt=w;st?qt=U:Ct&&(qt=P),Et+=F*qt*(st?1:Math.min(1,pt/4.6));const he=Ct?.65:st?.85:1,_e=Math.min(1,pt/(4.6*.9));te=Math.sin(Et)*R*he*_e,Bt=Math.sin(Et*.5)*tt*he*_e,!k&&yt&&G<.02&&(Et*=.9)}else Et=Re.lerp(Et,0,Math.min(1,F*6)),Math.abs(Et)<.001&&(Et=0);G>0&&(G=Math.max(0,G-F*5.2));const Jt=G*Math.sin(Math.min(1,G*3)*Math.PI)*.06;n.position.set(V.x+Bt,V.y+te-Jt,V.z),n.rotation.order="YXZ",n.rotation.y=y,n.rotation.x=b,n.rotation.z=Bt*.06,window.__controlsPos={x:V.x,y:V.y,z:V.z},window.__controlsYaw=y,window.__isSprinting=!!(rt.ShiftLeft||rt.ShiftRight||rt.Shift),window.__sprintHeld=window.__isSprinting&&yt&&Math.hypot(q.x,q.z)>1;try{window.__audio&&window.__audio.updateListener&&window.__audio.updateListener({x:V.x,y:V.y,z:V.z},y)}catch{}}n.position.copy(V),n.rotation.order="YXZ",n.rotation.y=y,n.rotation.x=b;const B={lock:kt,unlock:ne,update:ie,getPosition(){return V.clone()},isLocked(){return W},addEventListener(F,ct){bt[F]&&bt[F].push(ct)},removeEventListener(F,ct){const lt=bt[F];if(!lt)return;const D=lt.indexOf(ct);D>=0&&lt.splice(D,1)},get camera(){return n},get velocity(){return q.clone()},get isGrounded(){return yt}};return B}function go(n,t=1024){const e=Wt.tier==="low"?Math.max(256,Math.floor(t*Wt.texScale)):t,i=document.createElement("canvas");i.width=i.height=e;const o=i.getContext("2d");n(o,e,e);const s=new qn(i);return s.wrapS=s.wrapT=ti,s.colorSpace=fn,s.anisotropy=Wt.maxAnisotropy,s.needsUpdate=!0,s}function cg(){return go((n,t)=>{n.fillStyle="#a8aeb8",n.fillRect(0,0,t,t);for(let o=0;o<140;o++){const s=Math.random()*t,a=Math.random()*t,r=18+Math.random()*52,l=168+Math.random()*22|0,u=.09+Math.random()*.09;n.fillStyle="rgba("+l+","+(l+1)+","+(l+5)+","+u+")",n.beginPath(),n.ellipse(s,a,r*1.6,r,(Math.random()-.5)*.7,0,Math.PI*2),n.fill()}for(let o=0;o<16e3;o++){const s=Math.random()*t,a=Math.random()*t,r=Math.random()<.5?1:1.25,l=85+Math.random()*115|0,u=.07+Math.random()*.16;n.fillStyle="rgba("+l+","+l+","+(l+2)+","+u+")",n.fillRect(s,a,r,r)}for(let o=0;o<9e3;o++){const s=Math.random()*t,a=Math.random()*t;n.fillStyle=Math.random()<.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",n.fillRect(s,a,1,1)}n.strokeStyle="rgba(28,32,38,0.26)",n.lineWidth=2.4;const e=4;for(let o=1;o<e;o++){const s=t/e*o;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}n.strokeStyle="rgba(255,255,255,0.10)",n.lineWidth=1.1;for(let o=1;o<e;o++){const s=t/e*o+1.2;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}n.strokeStyle="rgba(22,26,32,0.42)",n.lineWidth=.9;for(let o=1;o<e;o++){const s=t/e*o-.8;n.beginPath(),n.moveTo(s,0),n.lineTo(s,t),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke()}for(let o=0;o<12;o++){const s=Math.random()*t,a=Math.random()*t,r=22+Math.random()*38,l=n.createRadialGradient(s,a,0,s,a,r);l.addColorStop(0,"rgba(28,26,24,0.18)"),l.addColorStop(.35,"rgba(38,34,30,0.12)"),l.addColorStop(.72,"rgba(50,48,44,0.06)"),l.addColorStop(1,"rgba(50,48,44,0)"),n.fillStyle=l,n.beginPath(),n.arc(s,a,r,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(18,18,20,0.13)",n.lineWidth=3.2;for(let o=0;o<5;o++){let s=Math.random()*t,a=Math.random()*t;n.beginPath(),n.moveTo(s,a);for(let r=0;r<6;r++)s+=(Math.random()-.4)*36+18,a+=(Math.random()-.5)*10,n.lineTo(s,a);n.stroke()}n.strokeStyle="rgba(22,22,24,0.09)",n.lineWidth=1.8;for(let o=0;o<4;o++){let s=Math.random()*t,a=Math.random()*t;n.beginPath(),n.moveTo(s,a);for(let r=0;r<5;r++)s+=(Math.random()-.4)*42+16,a+=(Math.random()-.5)*8,n.lineTo(s,a);n.stroke()}n.strokeStyle="rgba(34,38,44,0.13)",n.lineWidth=.85;for(let o=0;o<36;o++){let s=Math.random()*t,a=Math.random()*t;n.beginPath(),n.moveTo(s,a);for(let r=0;r<4;r++)s+=(Math.random()-.5)*36,a+=(Math.random()-.5)*18,n.lineTo(s,a);n.stroke()}for(let o=0;o<10;o++){const s=Math.random()*t,a=Math.random()*t,r=10+Math.random()*20;n.fillStyle="rgba(30,28,26,0.07)",n.beginPath(),n.arc(s,a,r,0,Math.PI*2),n.fill(),n.fillStyle="rgba(58,56,54,0.06)",n.beginPath(),n.arc(s+1,a+1,r*.6,0,Math.PI*2),n.fill()}const i=n.createRadialGradient(t*.5,t*.5,t*.3,t*.5,t*.5,t*.95);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(18,18,20,0.09)"),n.fillStyle=i,n.fillRect(0,0,t,t)},1024)}function ug(){return go((n,t)=>{n.fillStyle="#b9bec7",n.fillRect(0,0,t,t);for(let o=0;o<110;o++){const s=Math.random()*t,a=Math.random()*t,r=16+Math.random()*42,l=176+Math.random()*26|0;n.fillStyle="rgba("+l+","+l+","+(l+4)+",0.11)",n.beginPath(),n.ellipse(s,a,r,r*.92,0,0,Math.PI*2),n.fill()}for(let o=0;o<14e3;o++){const s=Math.random()*t,a=Math.random()*t,r=118+Math.random()*84|0;n.fillStyle="rgba("+r+","+r+","+r+",0.09)",n.fillRect(s,a,1,1)}n.strokeStyle="rgba(44,50,60,0.16)",n.lineWidth=1.6;for(let o=64;o<t;o+=64)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();n.fillStyle="rgba(0,0,0,0.065)";for(let o=64;o<t;o+=64)n.fillRect(0,o-7,t,3.5);n.strokeStyle="rgba(255,255,255,0.08)",n.lineWidth=.9;for(let o=64;o<t;o+=64)n.beginPath(),n.moveTo(0,o+1),n.lineTo(t,o+1),n.stroke();n.strokeStyle="rgba(46,52,62,0.09)";for(let o=128;o<t;o+=128)n.beginPath(),n.moveTo(o,0),n.lineTo(o,t),n.stroke();n.strokeStyle="rgba(48,44,40,0.09)",n.lineWidth=1.1;for(let o=0;o<22;o++){let s=Math.random()*t,a=0;for(n.beginPath(),n.moveTo(s,a);a<t;)s+=(Math.random()-.5)*3,a+=18+Math.random()*22,n.lineTo(s,a);n.stroke()}const e=n.createLinearGradient(0,t*.72,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(36,40,46,0.22)"),n.fillStyle=e,n.fillRect(0,t*.72,t,t*.28),n.fillStyle="rgba(38,42,50,0.28)";for(let o=32;o<t;o+=64)for(let s=32;s<t;s+=128)n.beginPath(),n.arc(s,o,2.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(0,0,0,0.18)",n.beginPath(),n.arc(s+.6,o+.6,1.1,0,Math.PI*2),n.fill(),n.fillStyle="rgba(38,42,50,0.28)";const i=n.createLinearGradient(0,0,0,t*.35);i.addColorStop(0,"rgba(0,0,0,0.10)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,t*.35)},1024)}function hg(){return go((n,t)=>{n.fillStyle="#6b7581",n.fillRect(0,0,t,t);const e=32;for(let o=0;o<t;o+=e){const s=n.createLinearGradient(o,0,o+e,0);s.addColorStop(0,"#5c6773"),s.addColorStop(.22,"#7d8a97"),s.addColorStop(.5,"#adb8c5"),s.addColorStop(.74,"#6f7d8b"),s.addColorStop(1,"#4d5866"),n.fillStyle=s,n.fillRect(o,0,e,t),n.fillStyle="rgba(0,0,0,0.16)",n.fillRect(o,0,1.8,t),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(o+e-1.4,0,1.1,t),n.strokeStyle="rgba(255,255,255,0.06)",n.lineWidth=.6,n.beginPath(),n.moveTo(o+e*.5,0),n.lineTo(o+e*.5+(Math.random()-.5)*2,t),n.stroke()}n.fillStyle="#3d444e";for(let o=26;o<t;o+=64)for(let s=16;s<t;s+=e)n.beginPath(),n.arc(s,o,3.1,0,Math.PI*2),n.fill(),n.fillStyle="#9aa6b4",n.beginPath(),n.arc(s-.7,o-.7,1.15,0,Math.PI*2),n.fill(),n.fillStyle="#3d444e";n.strokeStyle="rgba(112,68,38,0.20)",n.lineWidth=1;for(let o=26;o<t;o+=64)for(let s=16;s<t;s+=e)if(Math.random()<.38){n.beginPath(),n.moveTo(s,o+3);let a=o+3,r=s;for(;a<t&&a<o+64;)r+=(Math.random()-.5)*1.4,a+=6+Math.random()*8,n.lineTo(r,a);n.stroke()}n.strokeStyle="rgba(86,52,28,0.11)",n.lineWidth=2.2;for(let o=0;o<7;o++){let s=Math.random()*t,a=0;for(n.beginPath(),n.moveTo(s,a);a<t;)s+=(Math.random()-.5)*2,a+=14+Math.random()*16,n.lineTo(s,a);n.stroke()}for(let o=0;o<18;o++){const s=Math.random()*t,a=Math.random()*t,r=5+Math.random()*11;n.fillStyle="rgba(28,32,38,0.08)",n.beginPath(),n.ellipse(s,a,r*1.8,r,0,0,Math.PI*2),n.fill()}for(let o=0;o<7e3;o++){const s=Math.random()*t,a=Math.random()*t;n.fillStyle=Math.random()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",n.fillRect(s,a,1,1)}const i=n.createLinearGradient(0,0,0,22);i.addColorStop(0,"rgba(255,255,255,0.10)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,t,22)},1024)}function dg(){return go((n,t)=>{n.fillStyle="#8f6f4a",n.fillRect(0,0,t,t);for(let i=0;i<t;i++){const o=Math.sin(i*.028)*6+Math.sin(i*.011)*10+(Math.random()-.5)*3.5,s=i/t*8,a=144+o*1.15-s*2|0,r=110+o-s|0,l=71+o*.38-s*.5|0;n.fillStyle="rgb("+Math.max(0,Math.min(255,a))+","+Math.max(0,Math.min(255,r))+","+Math.max(0,Math.min(255,l))+")",n.fillRect(0,i,t,1)}n.strokeStyle="rgba(62,38,18,0.42)",n.lineWidth=1.25;for(let i=0;i<26;i++){const o=i*20+Math.random()*6;n.beginPath(),n.moveTo(0,o);for(let s=0;s<=t;s+=12){const a=o+Math.sin(s*.018+i*.9)*6.5+(Math.random()-.5)*1.8;n.lineTo(s,a)}n.stroke()}n.strokeStyle="rgba(30,18,8,0.28)",n.lineWidth=.85;for(let i=0;i<20;i++){const o=i*26+10;n.beginPath(),n.moveTo(0,o);for(let s=0;s<=t;s+=10)n.lineTo(s+(Math.random()-.5)*1.5,o+Math.sin(s*.03+i)*3.5);n.stroke()}for(let i=0;i<7;i++){const o=Math.random()*t,s=Math.random()*t,a=10+Math.random()*14,r=6+Math.random()*9;n.fillStyle="rgba(46,29,15,0.36)",n.beginPath(),n.ellipse(o,s,a,r,0,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(26,16,7,0.55)",n.lineWidth=1.05,n.stroke(),n.fillStyle="rgba(72,47,22,0.30)",n.beginPath(),n.ellipse(o+1.1,s+.8,a*.58,r*.58,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(18,11,5,0.42)",n.beginPath(),n.arc(o+2,s+1,1.2,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(30,18,10,0.62)",n.lineWidth=2.2;for(let i=128;i<t;i+=128)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.strokeStyle="rgba(255,255,255,0.07)",n.lineWidth=1;for(let i=128;i<t;i+=128)n.beginPath(),n.moveTo(0,i+1.2),n.lineTo(t,i+1.2),n.stroke();n.fillStyle="rgba(0,0,0,0.06)";for(let i=128;i<t;i+=128)n.fillRect(0,i-5,t,2.5);n.fillStyle="rgba(42,38,36,0.55)";for(let i=64;i<t;i+=128)for(let o=22;o<t;o+=96)n.beginPath(),n.arc(o,i,2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(18,18,20,0.9)",n.beginPath(),n.arc(o+.5,i+.3,.9,0,Math.PI*2),n.fill(),n.fillStyle="rgba(110,110,118,0.45)",n.beginPath(),n.arc(o-.6,i-.6,.7,0,Math.PI*2),n.fill(),n.fillStyle="rgba(42,38,36,0.55)";const e=n.createLinearGradient(0,t*.82,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(44,32,20,0.18)"),n.fillStyle=e,n.fillRect(0,t*.82,t,t*.18),n.fillStyle="rgba(28,22,16,0.14)",n.font="bold "+t*.06+"px monospace",n.textAlign="center",n.fillText("FRAGILE",t*.5,t*.54),n.strokeStyle="rgba(28,22,16,0.09)",n.lineWidth=1.2,n.strokeRect(t*.18,t*.42,t*.64,t*.18),n.fillStyle="rgba(255,255,255,0.06)";for(let i=0;i<3e3;i++){const o=Math.random()*t,s=Math.random()*t;n.fillRect(o,s,1,1)}},1024)}function fg(){return go((n,t)=>{n.fillStyle="#8080ff",n.fillRect(0,0,t,t),n.strokeStyle="#5f5fff",n.lineWidth=2.8;for(let i=0;i<9;i++){let o=Math.random()*t,s=Math.random()*t;n.beginPath(),n.moveTo(o,s);for(let a=0;a<7;a++)o+=(Math.random()-.5)*84+18,s+=(Math.random()-.5)*46,n.lineTo(o,s);n.stroke(),n.strokeStyle="#a0a0ff",n.lineWidth=1.1,n.stroke(),n.strokeStyle="#5f5fff",n.lineWidth=2.8}n.strokeStyle="rgba(90,90,255,0.92)",n.lineWidth=1.35;for(let i=0;i<18;i++){let o=Math.random()*t,s=Math.random()*t;n.beginPath(),n.moveTo(o,s);for(let a=0;a<4;a++)o+=(Math.random()-.5)*42,s+=(Math.random()-.5)*28,n.lineTo(o,s);n.stroke()}for(let i=0;i<2600;i++){const o=Math.random()*t,s=Math.random()*t;n.fillStyle=Math.random()<.5?"#7a7aff":"#8686ff",n.globalAlpha=.22,n.fillRect(o,s,1.5,1.5)}n.globalAlpha=1;const e=n.createRadialGradient(t*.5,t*.5,t*.25,t*.5,t*.5,t*.9);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(18,18,40,0.06)"),n.fillStyle=e,n.fillRect(0,0,t,t)},512)}function pg(){return go((n,t)=>{n.fillStyle="#8080ff",n.fillRect(0,0,t,t);for(let e=0;e<6;e++){const i=t*.5+(Math.random()-.5)*t*.28,o=t*.5+(Math.random()-.5)*t*.28,s=18+Math.random()*42,a=["#6a6aff","#8080ff","#9a9aff"];for(let r=0;r<3;r++)n.strokeStyle=a[r%a.length],n.globalAlpha=.22-r*.06,n.lineWidth=1.6+r*.7,n.beginPath(),n.arc(i,o,s+r*6.5,0,Math.PI*2),n.stroke()}n.globalAlpha=1,n.strokeStyle="rgba(110,110,255,0.32)",n.lineWidth=.9;for(let e=0;e<12;e++){const i=Math.random()*t,o=Math.random()*t,s=8+Math.random()*18;n.beginPath(),n.arc(i,o,s,0,Math.PI*2),n.stroke()}n.strokeStyle="rgba(110,110,255,0.18)",n.lineWidth=.7;for(let e=0;e<80;e++){let i=Math.random()*t,o=Math.random()*t;const s=10+Math.random()*18,a=(Math.random()-.5)*.6;n.beginPath(),n.moveTo(i,o),n.lineTo(i+Math.cos(a)*s,o+Math.sin(a)*s*.35),n.stroke()}for(let e=0;e<1400;e++){const i=Math.random()*t,o=Math.random()*t;n.fillStyle=Math.random()<.5?"#7c7cff":"#8888ff",n.globalAlpha=.14,n.fillRect(i,o,1,1)}n.globalAlpha=1},512)}function mg(){const n=document.createElement("canvas");n.width=n.height=512;const t=n.getContext("2d");t.clearRect(0,0,512,512);const e=512,i=32;t.strokeStyle="rgba(42,47,55,0.96)",t.lineWidth=2.9,t.lineCap="round";for(let s=-i;s<e+i;s+=i)for(let a=-i;a<e+i;a+=i)t.beginPath(),t.moveTo(a,s),t.lineTo(a+i/2,s+i/2),t.lineTo(a+i,s),t.stroke(),t.beginPath(),t.moveTo(a,s),t.lineTo(a+i/2,s-i/2),t.lineTo(a+i,s),t.stroke();t.strokeStyle="rgba(32,38,48,0.92)",t.lineWidth=1.1;for(let s=0;s<e;s+=i)t.beginPath(),t.moveTo(0,s),t.lineTo(e,s),t.stroke();t.fillStyle="rgba(110,70,38,0.14)";for(let s=0;s<e;s+=i)for(let a=0;a<e;a+=i)Math.random()<.1&&(t.beginPath(),t.arc(a,s,2.4,0,Math.PI*2),t.fill());const o=new qn(n);return o.wrapS=o.wrapT=ti,o.needsUpdate=!0,o.anisotropy=Wt.maxAnisotropy,o}function gg(){return go((n,t)=>{n.clearRect(0,0,t,t);for(let i=0;i<44;i++){const o=Math.random()*t,s=Math.random()*t,a=9+Math.random()*21,r=n.createRadialGradient(o,s,0,o,s,a);r.addColorStop(0,"rgba(132,68,28,0.36)"),r.addColorStop(.5,"rgba(118,58,22,0.18)"),r.addColorStop(1,"rgba(118,58,22,0)"),n.fillStyle=r,n.beginPath(),n.arc(o,s,a,0,Math.PI*2),n.fill()}for(let i=0;i<86;i++){const o=Math.random()*t,s=Math.random()*t,a=7+Math.random()*14,r=3+Math.random()*7;n.fillStyle="rgba(92,48,18,0.15)",n.beginPath(),n.ellipse(o,s,a,r,Math.random()*Math.PI,0,Math.PI*2),n.fill()}const e=n.createLinearGradient(0,t*.82,0,t);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(72,42,18,0.23)"),n.fillStyle=e,n.fillRect(0,t*.82,t,t*.18)},512)}function _g(){const n=document.createElement("canvas");n.width=512,n.height=256;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(142,160,184,0.02)"),e.addColorStop(.45,"rgba(142,160,184,0.14)"),e.addColorStop(.78,"rgba(142,160,184,0.28)"),e.addColorStop(1,"rgba(142,160,184,0.52)"),t.fillStyle=e,t.fillRect(0,0,512,256);for(let o=0;o<1200;o++){const s=Math.random()*512,a=Math.random()*256,r=Math.random()*.06;t.fillStyle="rgba(255,255,255,"+r+")",t.fillRect(s,a,1,1)}const i=new qn(n);return i.needsUpdate=!0,i}function vg(n){const t=[],e=[],i=N=>{N.updateMatrixWorld(!0);const gt=new Sn().setFromObject(N);N.userData.collider=gt,t.push(N)};function o(N,gt,j,J=!0,Lt=!0){const zt=new It(gt[0],gt[1],gt[2]),re=new L(zt,j);return re.position.set(N[0],N[1],N[2]),re.castShadow=J,re.receiveShadow=Lt,re}const s=cg();s.repeat.set(10,10);const a=ug();a.repeat.set(2,1);const r=hg();r.repeat.set(2,1);const l=dg();l.repeat.set(1,1);const u=l.clone();u.repeat.set(2,1);const h=Wt.tier!=="low"?fg():null;h&&h.repeat.set(7,7);const d=mg();d.repeat.set(1,1);const m=gg();m.repeat.set(1,1);const p=_g(),_=Wt.tier!=="low"?pg():null;_&&_.repeat.set(1,1);const g=Wt.tier!=="low"?new Tt({map:s,normalMap:h,normalScale:new Qt(.85,.85),roughness:.84,metalness:.02,color:16777215,bumpMap:s,bumpScale:.018}):new Tt({map:s,roughness:.84,metalness:.02,color:16777215}),f=new Tt({map:a,roughness:.92,metalness:.02,color:16777215,bumpMap:a,bumpScale:.02}),c=new Tt({map:a,roughness:.95,metalness:0,color:13685978}),M=new Tt({map:r,roughness:.45,metalness:.55,color:15265524}),v=new Tt({color:2765113,roughness:.35,metalness:.72}),w=new Tt({map:r,roughness:.38,metalness:.62,color:14542574}),U=new Tt({map:r.clone(),roughness:.55,metalness:.35,color:11879738}),P=new Tt({map:r.clone(),roughness:.55,metalness:.35,color:3828634}),R=new Tt({map:r.clone(),roughness:.55,metalness:.32,color:5929546}),tt=new Tt({map:r.clone(),roughness:.52,metalness:.3,color:12757067}),y=new Tt({map:l,roughness:.82,metalness:0,color:16777215}),b=new Tt({map:u,roughness:.9,metalness:0,color:7163438}),W=new Tt({color:3885658,roughness:.45,metalness:.55}),nt=new Tt({color:8010274,roughness:.78,metalness:.18}),yt=new Tt({map:a,roughness:.88,metalness:.02,color:14869736}),k=new Tt({color:16771496,emissive:16761450,emissiveIntensity:1.6,roughness:.22,metalness:.1}),ut=new Tt({color:11065599,emissive:5088255,emissiveIntensity:.9,roughness:.3}),q=new qe(80,80),rt=new It(1.05,1.05,1.05),V=new He(.42,.42,.88,Wt.tier==="low"?6:16),Mt=new L(q,g);Mt.rotation.x=-Math.PI/2,Mt.position.y=0,Mt.receiveShadow=!0,n.add(Mt),Mt.updateMatrixWorld(!0),Mt.userData.collider=new Sn(new E(-40,-.2,-40),new E(40,0,40)),t.push(Mt);const X=new Ne;X.name="warehouse",n.add(X);function Et(N,gt,j=f){const J=o(N,gt,j,!0,!0);return X.add(J),i(J),J}const Nt=.45,G=6;Et([-11,G/2,-22.775],[24,G,Nt]),Et([.775,G/2,-21.25],[Nt,G,3.5]),Et([.775,G/2,-14.75],[Nt,G,3.5]);const et=o([.775,1.25,-18],[.6,2.5,3.2],v,!0,!0);X.add(et),i(et);const it=o([.775,2.65,-18],[.6,.18,3.4],v,!0,!0);X.add(it),i(it),Et([-10.5,G/2,-13.225],[5,G,Nt]),Et([-1.5,G/2,-13.225],[5,G,Nt]);const Q=o([-6,1.25,-13.225],[4.2,2.5,.6],v,!0,!0);X.add(Q),i(Q);const dt=o([-6,2.65,-13.225],[4.4,.18,.6],v,!0,!0);X.add(dt),i(dt),Et([-13.225,G/2,-9.75],[Nt,G,6.5]),Et([-13.225,G/2,.25],[Nt,G,7.5]);const bt=o([-13.225,1.25,-5],[.6,2.5,3.2],v,!0,!0);X.add(bt),i(bt);const Ht=o([-13.225,2.65,-5],[.6,.18,3.4],v,!0,!0);X.add(Ht),i(Ht),Et([-21.25,G/2,3.775],[3.5,G,Nt]),Et([-14.75,G/2,3.775],[3.5,G,Nt]);const at=o([-18,1.25,3.775],[3.2,2.5,.6],v,!0,!0);X.add(at),i(at);const ft=o([-18,2.65,3.775],[3.4,.18,.6],v,!0,!0);X.add(ft),i(ft),Et([-22.775,G/2,-9.5],[Nt,G,27]);const I=o([-11,G+.15,-18],[24.4,.32,10.6],M,!0,!0);X.add(I),i(I);const Ot=o([-18,G+.15,-4.5],[10.6,.32,17.6],M,!0,!0);X.add(Ot),i(Ot);const St=o([-11,6.55,-22.95],[24.4,.55,.18],v,!0,!0);X.add(St),i(St);const Rt=o([.95,6.55,-18],[.18,.55,10.6],v,!0,!0);X.add(Rt),i(Rt);const Gt=o([-18,6.55,4.05],[10.6,.55,.18],v,!0,!0);X.add(Gt),i(Gt);const Me=o([-22.95,6.55,-9.5],[.18,.55,27],v,!0,!0);X.add(Me),i(Me);const Zt=o([-6,6.55,-13.05],[14,.35,.18],v,!0,!0);X.add(Zt),i(Zt);const C=o([-13.05,6.55,-4.5],[.18,.35,17],v,!0,!0);X.add(C),i(C);const S=o([-16,6.55,-19],[1.6,.7,1.1],w,!0,!0);X.add(S),i(S);const z=o([-6,6.55,-16.5],[1.2,.6,1.4],w,!0,!0);X.add(z),i(z);const Ft=new L(new He(.45,.45,.6,12),w);Ft.position.set(-19,6.6,-21),Ft.castShadow=!0,Ft.receiveShadow=!0,X.add(Ft),i(Ft);for(let N of[-18,-8])for(let gt of[-20,-16]){const j=o([N,G/2,gt],[.35,G,.35],c,!0,!0);X.add(j),i(j)}for(let N of[-21,-15])for(let gt of[-1,2]){const j=o([N,G/2,gt],[.32,G,.32],c,!0,!0);X.add(j),i(j)}const Pt=o([-20,.55,-17],[3.2,1.1,.9],y,!0,!0);X.add(Pt),i(Pt);const kt=o([-20,1.6,-20.5],[3.5,1.8,.45],w,!0,!0);X.add(kt),i(kt);const ne=new qe(1.8,1.2);[[-17,3,-22.5],[-7,3,-22.5],[-22.5,3,-16],[-22.5,3,-4]].forEach(N=>{const gt=new L(ne,k);gt.position.set(N[0],N[1],N[2]),N[0]==-22.5&&(gt.rotation.y=Math.PI/2),X.add(gt)});const Yt=new L(new qe(1.2,1.4),ut);Yt.position.set(-22.5,2.8,1.2),Yt.rotation.y=Math.PI/2,X.add(Yt);const Xt=o([-11,.12,-22.6],[24,.24,.28],v,!0,!0);X.add(Xt),i(Xt);const ce=o([-22.6,.12,-9.5],[.28,.24,27],v,!0,!0);X.add(ce),i(ce);function de(N,gt,j,J,Lt){const zt=new qe(gt,j),re=[],le=zt.attributes.position;for(let xe=0;xe<le.count;xe++){const Ee=.15+(le.getY(xe)+j/2)/j*.42;re.push(Ee,Ee,Ee)}zt.setAttribute("color",new tn(re,3));const Kt=new Tt({vertexColors:!0,transparent:!0,opacity:.22,roughness:1,metalness:0,depthWrite:!1,side:je}),me=new L(zt,Kt);me.position.set(N[0],j/2,N[2]),me.rotation.y=J,Math.abs(J)<.01?me.position.z+=Lt:Math.abs(J-Math.PI/2)<.01?me.position.x+=Lt:Math.abs(J-Math.PI)<.01?me.position.z-=Lt:me.position.x-=Lt,X.add(me)}de([-11,0,-22.55],24,.62,0,.22),de([-22.55,0,-9.5],27,.62,Math.PI/2,.22),de([-10.5,0,-13],5,.62,0,.22),de([-1.5,0,-13],5,.62,0,.22),de([-13,0,-6.5],13,.62,Math.PI/2,.22),de([-16,0,3.55],7,.62,0,.22),[[-22.9,-22.9,5.9,.16],[-22.9,4.2,5.9,.16],[1.1,-22.9,5.9,.16],[.9,-13.2,5.9,.16],[-13.1,-13.3,5.9,.16],[-13.1,4.1,5.9,.16]].forEach(([N,gt,j,J])=>{const Lt=o([N,j/2,gt],[J,j,J],v,!0,!0);X.add(Lt),i(Lt)});const At=new L(new He(.09,.09,12,8),v);if(At.rotation.z=Math.PI/2,At.position.set(-12,6.35,-20.5),At.castShadow=!0,X.add(At),Wt.tier!=="low"){const N=new Ri(16751178,45,22,1.6);N.position.set(-10,4.2,-18),n.add(N);const gt=new Ri(16747578,38,18,1.5);gt.position.set(-18,4,-2),n.add(gt);const j=new Ri(16757354,22,12,1.8);j.position.set(-19,2.8,-17),n.add(j)}const be=new It(.9,.18,.9),ge=new Tt({emissive:16754778,emissiveIntensity:2.2,color:16773333}),ye=new L(be,ge);ye.position.set(-10,5.2,-18),X.add(ye);const jt=new L(be,ge);jt.position.set(-18,5.2,-4),X.add(jt);function ie(N,gt,j){const J=new Ne;J.position.set(N[0],N[1],N[2]),J.rotation.y=gt;const Lt=new L(new It(6,2.55,2.45),j);Lt.castShadow=!0,Lt.receiveShadow=!0,J.add(Lt);const zt=new L(new It(.12,2.3,2.3),v);zt.position.set(3.05,0,0),J.add(zt);const re=new L(new It(6.05,.12,2.5),v);re.position.set(0,1.22,0),J.add(re);const le=new L(new It(6.05,.12,2.5),v);le.position.set(0,-1.22,0),J.add(le);for(let Kt=-2.5;Kt<=2.5;Kt+=1){const me=new L(new It(.04,2.4,2.46),v);me.position.set(Kt,0,0),J.add(me)}return n.add(J),J.updateMatrixWorld(!0),J.userData.collider=new Sn().setFromObject(J),t.push(J),J}ie([14,1.28,-17],0,U),ie([14,1.28,-14.1],0,P),ie([21,1.28,-15.6],Math.PI/2,R),ie([19.5,1.28,9.5],0,P),ie([8.2,1.28,14.8],Math.PI/2,tt),ie([-4,1.28,12.5],0,U),ie([-4,3.88,12.5],0,R),ie([2.2,1.28,12.5],0,P),ie([6,1.28,-5.5],.18,tt),ie([8.2,3.88,14.8],Math.PI/2,U);function B(N,gt){const j=new Ne;j.position.set(N[0],N[1],N[2]),j.rotation.y=gt;const J=new L(new It(2.4,.55,.75),yt);J.position.y=.28,J.castShadow=!0,J.receiveShadow=!0,j.add(J);const Lt=new L(new It(2.4,.28,.52),yt);Lt.position.y=.66,Lt.castShadow=!0,j.add(Lt);const zt=new L(new It(2.4,.22,.28),yt);zt.position.y=.88,zt.castShadow=!0,j.add(zt);const re=new L(new It(.08,.9,.75),v);re.position.set(-1.18,.5,0),j.add(re);const le=new L(new It(.08,.9,.75),v);return le.position.set(1.18,.5,0),j.add(le),n.add(j),j.updateMatrixWorld(!0),j.userData.collider=new Sn().setFromObject(j),t.push(j),j}B([5,0,-.2],0),B([7.8,0,-.2],0),B([.2,0,8.2],Math.PI/2),B([-8.2,0,5.5],.45),B([15.5,0,-6.2],Math.PI/2),Wt.tier!=="low"&&(B([-1.8,0,-4.5],0),B([24,0,-2.5],Math.PI/2),B([24,0,.4],Math.PI/2));for(let N=0;N<4;N++){const gt=o([-.9+N*1.05,.55,3.2],[1,1.1,.95],yt,!0,!0);n.add(gt),i(gt)}function F(N,gt){[[-1.2,-1.2],[1.2,-1.2],[1.2,1.2],[-1.2,1.2]].forEach(([Kt,me])=>{const xe=o([N[0]+Kt,gt/2,N[2]+me],[.22,gt,.22],w,!0,!0);n.add(xe),i(xe)});for(let Kt=1.2;Kt<gt;Kt+=1.6){const me=o([N[0],Kt,N[2]-1.2],[2.4,.08,.08],v,!0,!0);n.add(me),i(me);const xe=o([N[0],Kt,N[2]+1.2],[2.4,.08,.08],v,!0,!0);n.add(xe),i(xe);const We=o([N[0]-1.2,Kt,N[2]],[.08,.08,2.4],v,!0,!0);n.add(We),i(We);const Le=o([N[0]+1.2,Kt,N[2]],[.08,.08,2.4],v,!0,!0);n.add(Le),i(Le)}const J=o([N[0],gt,N[2]],[3.1,.22,3.1],b,!0,!0);n.add(J),i(J),[[0,-1.45,2.9,.08],[0,1.45,2.9,.08],[-1.45,0,.08,2.9],[1.45,0,.08,2.9]].forEach(([Kt,me,xe,We])=>{const Le=o([N[0]+Kt,gt+.65,N[2]+me],[xe,.08,We],v,!0,!0);n.add(Le),i(Le);const Ee=o([N[0]+Kt,gt+.95,N[2]+me],[xe,.08,We],v,!0,!0);n.add(Ee),i(Ee)});const Lt=o([N[0],gt+1.45,N[2]],[3.3,.18,3.3],M,!0,!0);n.add(Lt),i(Lt);const zt=o([N[0]-1.1,gt/2,N[2]+1.6],[.06,gt,.04],v,!0,!0);n.add(zt),i(zt);const re=o([N[0]-.6,gt/2,N[2]+1.6],[.06,gt,.04],v,!0,!0);n.add(re),i(re);for(let Kt=.6;Kt<gt;Kt+=.45){const me=o([N[0]-.85,Kt,N[2]+1.6],[.5,.04,.06],v,!0,!0);n.add(me),i(me)}if(Wt.tier!=="low"){const Kt=new Ri(16773832,18,14,1.8);Kt.position.set(N[0],gt+.6,N[2]),n.add(Kt)}const le=new L(new ln(.18,10,10),new Tt({emissive:16771488,emissiveIntensity:2,color:16774608}));le.position.set(N[0],gt+.6,N[2]),n.add(le)}F([26,0,-22],6.2),F([-24,0,18],5);const ct=o([5,.9,-6.5],[6,.45,4.5],c,!0,!0);n.add(ct),i(ct);const lt=o([5,.55,-3.2],[4.2,.18,2.2],c,!0,!0);lt.rotation.x=-.28,lt.updateMatrixWorld(!0),n.add(lt),i(lt);const D=o([3.1,.45,-3.2],[.12,.35,2.2],v,!0,!0);D.rotation.x=-.28,n.add(D),i(D);const T=o([6.9,.45,-3.2],[.12,.35,2.2],v,!0,!0);T.rotation.x=-.28,n.add(T),i(T);const K=o([5,1.55,-8.6],[6,.08,.08],v,!0,!0);n.add(K),i(K);const _t=o([5,1.55,-4.4],[6,.08,.08],v,!0,!0);n.add(_t),i(_t);const Dt=o([2.1,1.55,-6.5],[.08,.08,4.5],v,!0,!0);n.add(Dt),i(Dt);const Ut=o([7.9,1.55,-6.5],[.08,.08,4.5],v,!0,!0);n.add(Ut),i(Ut);const H=o([28,.85,7],[5.5,.4,7],c,!0,!0);n.add(H),i(H);for(let N=0;N<4;N++){const gt=o([25.2+N*.55,.18+N*.21,10.8],[.5,.14,1.6],f,!0,!0);n.add(gt),i(gt)}function Y(N,gt,j){for(let J=0;J<gt;J++){let Lt=[N[0],N[1]+.53+J*1.07,N[2]];j==="2x2"&&J>=2&&(Lt[0]+=1.08),j==="L"&&J==2&&(Lt[0]+=1.08,Lt[1]-=1.07);const zt=new L(rt,y);zt.position.set(Lt[0],Lt[1],Lt[2]),zt.rotation.y=(Math.random()-.5)*.06,zt.castShadow=!0,zt.receiveShadow=!0;const re=new L(new It(1.07,.08,1.07),v);re.position.y=.18,zt.add(re);const le=re.clone();le.position.y=-.18,zt.add(le),n.add(zt),i(zt)}}Y([-2,.53,16],Wt.tier==="low"?1:3,"col"),Y([24,.53,-10],Wt.tier==="low"?2:4,"2x2"),Y([-10,.53,12],Wt.tier==="low"?1:2,"col"),Y([10.5,.53,-2],Wt.tier==="low"?1:2,"L"),Y([-16,.53,-1],Wt.tier==="low"?1:3,"col");function O(N,gt){const j=new L(V,gt?nt:W);j.position.set(N[0],N[1]+.44,N[2]),j.castShadow=!0,j.receiveShadow=!0;const J=new vi(.43,.022,Wt.tier==="low"?4:8,Wt.tier==="low"?6:16),Lt=v,zt=new L(J,Lt);zt.rotation.x=Math.PI/2,zt.position.y=.22,j.add(zt);const re=zt.clone();return re.position.y=-.22,j.add(re),n.add(j),i(j),j}O([10.2,0,-1.8],!1),O([11.1,0,-1.6],!0),O([10.6,0,-.9],!1),O([-6.2,0,-7.8],!0),O([-5.3,0,-7.6],!1),O([-20.5,0,-5.5],!1),O([-20.5,0,-4.6],!0),O([27.2,0,5.5],!1);{const N=new Tt({map:m,color:16777215,roughness:.82,metalness:.12,transparent:!0}),gt=[17,0,-2.5];let j=0;for(let J=0;J<(Wt.tier==="low"?2:3);J++)for(let Lt=0;Lt<(Wt.tier==="low"?2:4);Lt++){const zt=gt[0]+Lt*.95-1.42,re=gt[2]+J*.95-.95,le=j%3!==0,Kt=new L(V,le?nt:W);Kt.position.set(zt,.44,re),Kt.rotation.y=(Math.random()-.5)*.18,Kt.castShadow=!0,Kt.receiveShadow=!0;const me=new vi(.43,.022,Wt.tier==="low"?4:8,Wt.tier==="low"?6:16),xe=new L(me,v);xe.rotation.x=Math.PI/2,xe.position.y=.22,Kt.add(xe);const We=xe.clone();if(We.position.y=-.22,Kt.add(We),le){const Le=new L(new qe(.55,.68),N);Le.position.set(.43,.06,0),Le.rotation.y=Math.PI/2,Le.rotation.z=(Math.random()-.5)*.2,Kt.add(Le);const Ee=Le.clone();Ee.position.set(-.43,-.08,.12),Ee.rotation.y=-Math.PI/2,Kt.add(Ee)}if(le&&Math.random()<.6){const Le=new L(new In(.32+Math.random()*.18,10),new Tt({color:1975080,roughness:.92,transparent:!0,opacity:.22}));Le.rotation.x=-Math.PI/2,Le.position.set(zt,.012,re+.32),n.add(Le)}n.add(Kt),i(Kt),j++}}function wt(N,gt){const j=new Ne;j.position.set(N[0],N[1],N[2]),j.rotation.y=gt;const J=new L(new It(1.22,.14,1.02),b);J.position.y=.09,J.castShadow=!0,J.receiveShadow=!0,j.add(J);for(let Lt=-.42;Lt<=.42;Lt+=.28){const zt=new L(new It(1.22,.02,.11),b);zt.position.set(0,.16,Lt),j.add(zt)}for(let Lt of[-.5,0,.5])for(let zt of[-.4,.4]){const re=new L(new It(.12,.08,.14),b);re.position.set(Lt,.04,zt),j.add(re)}return n.add(j),j.updateMatrixWorld(!0),j.userData.collider=new Sn().setFromObject(j),t.push(j),j}wt([-2.1,0,14.8],.12),wt([-10.2,0,10.8],.7),Wt.tier!=="low"&&(wt([11.2,0,-3.2],-.2),wt([26.8,.85,6.2],0));const ot=o([28,1.55,-8.5],[5.5,3.1,4.2],f,!0,!0);n.add(ot),i(ot);const x=o([28,3.28,-8.5],[5.9,.22,4.6],M,!0,!0);n.add(x),i(x);const st=new L(new qe(1,2.1),v);st.position.set(25.26,1.15,-8.5),st.rotation.y=Math.PI/2,st.receiveShadow=!0,n.add(st);const Ct=new L(new qe(1.4,1),k);if(Ct.position.set(28,1.9,-6.35),n.add(Ct),Wt.tier!=="low"){const N=new Ri(16758890,16,10,1.6);N.position.set(28,2.6,-8.5),n.add(N)}const oe=o([-.5,1.1,-9.2],[4.8,2.2,.45],yt,!0,!0);n.add(oe),i(oe);const se=o([9.8,1.1,4.2],[.45,2.2,4.8],yt,!0,!0);n.add(se),i(se);const ue=o([-14.5,1.1,8.5],[5.2,2.2,.45],yt,!0,!0);n.add(ue),i(ue);for(let N=-20;N<16;N+=3){const gt=o([32,1.1,N],[.18,2.2,.18],v,!0,!0);if(n.add(gt),i(gt),N<13){const j=new L(new It(.08,1.9,2.7),w);j.position.set(32,1.1,N+1.5),j.castShadow=!0,j.receiveShadow=!0,n.add(j),i(j)}}for(let N=-22;N<10;N+=3){const gt=o([-32,1.1,N],[.18,2.2,.18],v,!0,!0);n.add(gt),i(gt)}const Te=new vi(.42,.14,8,16),Ge=new Tt({color:1711651,roughness:.92,metalness:.02});function Ie(N,gt){for(let J=0;J<gt;J++){const Lt=new L(Te,Ge);Lt.position.set(N[0],.18+J*.29,N[2]),Lt.rotation.x=Math.PI/2,Lt.castShadow=!0,Lt.receiveShadow=!0,n.add(Lt)}const j=o([N[0],.5+gt*.29/2,N[2]],[.9,gt*.29+.2,.9],new Tt({visible:!1}),!1,!1);j.visible=!1,n.add(j),i(j)}if(Ie([2.5,0,-11.5],3),Wt.tier!=="low"&&Ie([18.5,0,2.2],4),Ie([-7.5,0,6.8],3),Wt.tier!=="low"){let Ee=function(Ke,cn,rn){const Ye=new Ne;Ye.position.set(Ke[0],Ke[1],Ke[2]),Ye.rotation.y=cn;const Zn=new Tt({color:rn,roughness:.78,metalness:.08}),Vn=new He(.62,.62,.08,16),Wn=new L(Vn,Zn);Wn.rotation.z=Math.PI/2,Wn.position.set(-.32,.62,0),Wn.castShadow=!0,Ye.add(Wn);const Bi=Wn.clone();Bi.position.x=.32,Ye.add(Bi);const di=new L(new He(.32,.32,.64,14),new Tt({color:2764599,roughness:.62,metalness:.45}));di.rotation.z=Math.PI/2,di.position.y=.62,Ye.add(di);const Mi=new L(new vi(.42,.04,6,16),new Tt({color:1118997,roughness:.9}));return Mi.rotation.y=Math.PI/2,Mi.position.set(0,.62,0),Ye.add(Mi),n.add(Ye),Ye.updateMatrixWorld(!0),Ye.userData.collider=new Sn().setFromObject(Ye),t.push(Ye),Ye};var qt=Ee;const N=new Ne;N.position.set(-16.5,0,-8.5),N.rotation.y=.35,n.add(N);const gt=new L(new It(1.85,1.35,2.45),new Tt({color:14263361,roughness:.62,metalness:.12}));gt.position.set(0,.88,0),gt.castShadow=!0,gt.receiveShadow=!0,N.add(gt);const j=new L(new It(.1,2.2,.08),v);j.position.set(0,1.35,1.18),N.add(j);const J=j.clone();J.position.x=.62,N.add(J);const Lt=j.clone();Lt.position.x=-.62,N.add(Lt);const zt=new L(new It(.85,.14,.06),w);zt.position.set(0,.55,1.22),N.add(zt);const re=new L(new It(.08,.04,1.15),w);re.position.set(.22,.22,1.55),N.add(re);const le=re.clone();le.position.x=-.22,N.add(le);const Kt=new L(new It(1.05,.95,1.15),new Tt({color:1975339,roughness:.85,metalness:.04}));Kt.position.set(0,1.55,-.55),N.add(Kt);const me=new L(new It(.55,.18,.52),new Tt({color:1185048,roughness:.92}));me.position.set(0,1.22,-.55),N.add(me);const xe=new He(.32,.32,.22,12),We=new Tt({color:987668,roughness:.95});[[.72,-.92],[-.72,-.92],[.72,.85],[-.72,.85]].forEach(([Ke,cn])=>{const rn=new L(xe,We);rn.rotation.z=Math.PI/2,rn.position.set(Ke,.32,cn),rn.castShadow=!0,N.add(rn)});const Le=new L(new He(.09,.09,.12,8),new Tt({emissive:16765562,emissiveIntensity:1.8,color:16773824}));Le.position.set(.62,1.05,1.15),Le.rotation.x=Math.PI/2,N.add(Le),N.updateMatrixWorld(!0),N.userData.collider=new Sn().setFromObject(N),t.push(N),Ee([-3.2,0,15.2],.2,7043642),Ee([-2.1,0,15.6],-.15,9058858),Ee([12.2,0,11.2],.6,2771563);const vn=new Tt({color:6976897,roughness:.42,metalness:.48});for(let Ke of[-24.5,-22.8])for(let cn=-10;cn<4;cn+=2.1){const rn=new L(new He(.04,.04,3.2,6),vn);rn.position.set(Ke,1.6,cn),rn.castShadow=!0,n.add(rn)}for(let Ke=-10;Ke<4;Ke+=2.1){const cn=new L(new It(1.7,.04,.04),vn);cn.position.set(-23.65,.75,Ke),n.add(cn);const rn=cn.clone();rn.position.y=1.65,n.add(rn);const Ye=cn.clone();Ye.position.y=2.55,n.add(Ye)}const wn=new L(new It(1.7,.06,.85),new Tt({map:u,roughness:.88}));wn.position.set(-23.65,2.7,-3.5),wn.castShadow=!0,n.add(wn)}const Ae=new Tt({color:15251530,roughness:.85}),Be=new L(new qe(.35,18),Ae);Be.rotation.x=-Math.PI/2,Be.position.set(0,.02,0),Be.receiveShadow=!0,n.add(Be);const Ve=Be.clone();if(Ve.position.set(12,.02,-5),Ve.scale.set(1,.6,1),n.add(Ve),Wt.tier!=="low"){const N=new Go({color:3754588,roughness:.14,metalness:.12,transparent:!0,opacity:.52,envMapIntensity:.85,clearcoat:.45,clearcoatRoughness:.18});N.normalMap=_,N.normalScale=new Qt(.45,.45);const gt=new L(new In(1.45,16),N);gt.rotation.x=-Math.PI/2,gt.position.set(-12,.016,-9),gt.receiveShadow=!0,n.add(gt);const j=new L(new Zi(1.45,1.62,24),new Tt({color:14215423,transparent:!0,opacity:.1,roughness:.22,metalness:.04,side:je}));j.rotation.x=-Math.PI/2,j.position.set(-12,.017,-9),n.add(j);const J=new Go({color:3820898,roughness:.13,metalness:.13,transparent:!0,opacity:.48,envMapIntensity:.88,clearcoat:.55,clearcoatRoughness:.16,normalMap:_,normalScale:new Qt(.42,.42)}),Lt=new L(new In(.95,14),J);Lt.rotation.x=-Math.PI/2,Lt.position.set(-10.2,.016,-7.6),Lt.scale.set(1,.7,1),Lt.rotation.z=.6,n.add(Lt);const zt=new L(new Zi(.95,1.08,20),new Tt({color:13625087,transparent:!0,opacity:.08,side:je}));zt.rotation.x=-Math.PI/2,zt.position.set(-10.2,.017,-7.6),zt.scale.set(1,.7,1),zt.rotation.z=.6,n.add(zt);const re=new Go({color:3426654,roughness:.12,metalness:.14,transparent:!0,opacity:.44,envMapIntensity:.9,clearcoat:.62,clearcoatRoughness:.15,normalMap:_,normalScale:new Qt(.55,.55)}),le=new L(new In(1.75,16),re);le.rotation.x=-Math.PI/2,le.position.set(3.2,.016,2.8),le.scale.set(1.2,.85,1),n.add(le);const Kt=new L(new Zi(1.75,1.94,24),new Tt({color:14544639,transparent:!0,opacity:.09,side:je}));Kt.rotation.x=-Math.PI/2,Kt.position.set(3.2,.017,2.8),Kt.scale.set(1.2,.85,1),n.add(Kt);const me=new Go({color:4018792,roughness:.11,metalness:.15,transparent:!0,opacity:.46,envMapIntensity:.92,clearcoat:.68,clearcoatRoughness:.14,normalMap:_,normalScale:new Qt(.62,.62)}),xe=new L(new In(1.22,16),me);xe.rotation.x=-Math.PI/2,xe.position.set(15.8,.016,-7.2),xe.scale.set(1,.82,1),n.add(xe);const We=new L(new Zi(1.22,1.36,20),new Tt({color:13953791,transparent:!0,opacity:.09,side:je}));We.rotation.x=-Math.PI/2,We.position.set(15.8,.017,-7.2),We.scale.set(1,.82,1),n.add(We);const Le=new Go({color:3097692,roughness:.1,metalness:.16,transparent:!0,opacity:.5,envMapIntensity:.95,clearcoat:.75,clearcoatRoughness:.12,normalMap:_,normalScale:new Qt(.48,.48)}),Ee=new L(new In(1.08,16),Le);Ee.rotation.x=-Math.PI/2,Ee.position.set(-2.2,.016,9.4),Ee.scale.set(1.05,.92,1),n.add(Ee);const vn=new L(new Zi(1.08,1.21,20),new Tt({color:14741759,transparent:!0,opacity:.1,side:je}));vn.rotation.x=-Math.PI/2,vn.position.set(-2.2,.017,9.4),vn.scale.set(1.05,.92,1),n.add(vn);const wn=new L(new In(.62,12),new Tt({color:7035530,roughness:.18,metalness:.55,transparent:!0,opacity:.18}));wn.rotation.x=-Math.PI/2,wn.position.set(-12.1,.018,-9.1),n.add(wn);const Ke=new L(new In(.48,12),new Tt({color:8022858,roughness:.2,metalness:.48,transparent:!0,opacity:.14}));Ke.rotation.x=-Math.PI/2,Ke.position.set(3.3,.018,2.9),n.add(Ke);const cn=new L(new In(.42,12),new Tt({color:5925754,roughness:.19,metalness:.5,transparent:!0,opacity:.13}));cn.rotation.x=-Math.PI/2,cn.position.set(15.9,.018,-7.1),n.add(cn);const rn=new Tt({color:1975081,roughness:.88,transparent:!0,opacity:.16}),Ye=new L(new qe(6.5,.28),rn);Ye.rotation.x=-Math.PI/2,Ye.position.set(-8.2,.013,-9.2),Ye.rotation.z=.08,n.add(Ye);const Zn=new L(new qe(4.2,.22),rn.clone());Zn.material.opacity=.12,Zn.rotation.x=-Math.PI/2,Zn.position.set(7.5,.013,-5.8),Zn.rotation.z=-.35,n.add(Zn);const Vn=new L(new qe(5.1,.24),rn.clone());Vn.material.opacity=.1,Vn.rotation.x=-Math.PI/2,Vn.position.set(-.8,.013,4.2),Vn.rotation.z=.95,n.add(Vn)}else{const N=new Tt({color:3097692,roughness:.42,metalness:.05,transparent:!0,opacity:.38}),gt=new L(new In(1.4,8),N);gt.rotation.x=-Math.PI/2,gt.position.set(-12,.016,-9),n.add(gt);const j=new L(new In(1.6,8),N.clone());j.rotation.x=-Math.PI/2,j.position.set(3.2,.016,2.8),j.scale.set(1.2,.85,1),n.add(j)}const A=new Tt({color:856600,transparent:!0,opacity:.2,roughness:1}),Z=new L(new qe(28,13),A);if(Z.rotation.x=-Math.PI/2,Z.position.set(-14,.012,-18),Z.receiveShadow=!0,n.add(Z),Wt.tier!=="low"){const N=Z.clone();N.scale.set(.62,1,1),N.position.set(-18,.012,-4.5),N.rotation.x=-Math.PI/2,n.add(N)}if(Wt.tier!=="low"){const N=new Tt({color:856600,transparent:!0,opacity:.11}),gt=new L(new qe(44,44),N);gt.rotation.x=-Math.PI/2,gt.position.set(-7,.011,-6),n.add(gt)}const ht=new L(new He(.52,.52,.04,Wt.tier==="low"?6:16),new Tt({color:2764599,roughness:.35,metalness:.68}));ht.position.set(8.5,.02,-9.5),n.add(ht);const pt=new L(new He(.42,.42,.045,Wt.tier==="low"?6:16),new Tt({color:1711652,roughness:.62,metalness:.52}));pt.position.set(8.5,.022,-9.5),n.add(pt),[new E(30,.1,20),new E(-30,.1,20),new E(20,.1,-30),new E(-8,.1,20),new E(30,.1,-8),new E(-10,.1,8)].forEach(N=>{let gt=!1;for(let j of t){if(j===Mt)continue;const J=j.userData.collider;if(!J||J.max.y<.6)continue;if(J.clone().expandByScalar(1.1).containsPoint(new E(N.x,.5,N.z))){gt=!0;break}}gt||e.push(N)});const $=[new E(0,.1,22),new E(22,.1,22),new E(-22,.1,-22)];for(let N of $){if(e.length>=6)break;let gt=!0;for(let j of t){if(j===Mt)continue;const J=j.userData.collider;!J||J.max.y<.6||J.clone().expandByScalar(1).containsPoint(new E(N.x,.5,N.z))&&(gt=!1)}gt&&e.push(N)}for(;e.length<6;)e.push(new E((Math.random()-.5)*20,.1,(Math.random()-.5)*20));if(e.length=6,Wt.tier!=="low"){let J=function(Lt,zt,re){const le=new L(new It(zt[0],zt[1],zt[2]),gt[re%gt.length]);le.position.set(Lt[0],zt[1]/2,Lt[2]),le.receiveShadow=!1,le.castShadow=!1,N.add(le);const Kt=Math.floor(Math.random()*5)+3;for(let me=0;me<Kt;me++){const xe=Math.random()<.4,We=new Tt({color:16771496,emissive:16762474,emissiveIntensity:xe?1.2+Math.random()*.3:.9+Math.random()*.6,roughness:.6}),Le=new L(new qe(.6+Math.random()*1.1,.7+Math.random()*.9),We),Ee=Math.random()<.5?1:-1;Le.position.set(Lt[0]+(Math.random()-.5)*zt[0]*.7,2+Math.random()*Math.max(2,zt[1]-3),Lt[2]+Ee*(zt[2]/2+.02)),Ee<0&&(Le.rotation.y=Math.PI),N.add(Le),xe&&(Le.userData.flickerPhase=Math.random()*Math.PI*2,j.push(Le))}return le};var he=J;const N=new Ne;N.name="city_backdrop";const gt=[new Tt({color:3027771,roughness:.92}),new Tt({color:3817546,roughness:.9}),new Tt({color:2501427,roughness:.93})],j=[];for(let Lt=0;Lt<10;Lt++)J([38+Math.random()*6,0,-36+Lt*7.8],[5+Math.random()*7,4+Math.random()*14,5+Math.random()*6],Lt);for(let Lt=0;Lt<10;Lt++)J([-36+Lt*7.4,0,38+Math.random()*4],[6+Math.random()*6,4+Math.random()*14,5+Math.random()*5],Lt+1);for(let Lt=0;Lt<8;Lt++)J([-38-Math.random()*4,0,-28+Lt*7.2],[4+Math.random()*5,4+Math.random()*14,4+Math.random()*5],Lt+2);n.add(N);{const Lt=new dn({map:p,transparent:!0,opacity:.42,depthWrite:!1,side:je}),zt=new qe(180,28),re=new L(zt,Lt);re.position.set(46,14,-2),re.rotation.y=-Math.PI/2,n.add(re);const le=new L(zt,Lt.clone());le.material.opacity=.36,le.position.set(-2,13,46),le.rotation.y=Math.PI,n.add(le);const Kt=new L(zt,Lt.clone());Kt.material.opacity=.38,Kt.position.set(-46,13,0),Kt.rotation.y=Math.PI/2,n.add(Kt);const me=new L(new qe(180,18),new dn({map:p,transparent:!0,opacity:.18,depthWrite:!1,side:je}));me.position.set(0,4,0),me.rotation.x=-Math.PI/2,me.position.y=4,n.add(me)}{let zt=function(){const re=Lt.getElapsedTime();for(let le of j){const Kt=le.userData.flickerPhase||0;le.material.emissiveIntensity=1.2+Math.sin(re*2.2+Kt)*.45+Math.random()*.07}requestAnimationFrame(zt)};var _e=zt;const Lt=new fu;n.userData.flickerWindows=j,n.userData.tickFlicker=zt,zt()}}else{const N=new Ne;N.name="city_backdrop_mobile";const gt=new Tt({color:3027771,roughness:.95}),j=new Tt({color:2501427,roughness:.95}),J=[[38,0,-22,8,10,6],[38,0,8,7,14,5],[-36,0,34,8,9,6],[-38,0,-12,6,12,5]];for(let re=0;re<J.length;re++){const le=J[re],Kt=new L(new It(le[3],le[4],le[5]),re%2?j:gt);Kt.position.set(le[0],le[4]/2,le[2]),N.add(Kt)}n.add(N);const Lt=new dn({map:p,transparent:!0,opacity:.28,depthWrite:!1,side:je}),zt=new L(new qe(180,22),Lt);zt.position.set(0,12,0),zt.rotation.x=-Math.PI/2,n.add(zt),n.userData.flickerWindows=[]}const vt=new Tt({color:9076330,roughness:.96,metalness:.01});function Bt(N,gt,j){const J=new Ne;J.position.set(N[0],0,N[2]),J.rotation.y=j;const Lt=Wt.tier!=="low";for(let re=0;re<gt;re++){const le=Lt?new po(.28,.62,4,10):new It(.62,.36,.34),Kt=new L(le,vt);Lt?Kt.rotation.z=Math.PI/2:Kt.rotation.y=(Math.random()-.5)*.15,Kt.position.set((re-gt/2)*.92+(Math.random()-.5)*.08,.28+re%2*.32,(Math.random()-.5)*.12),Lt&&Kt.scale.set(1,1,.72),Kt.castShadow=Wt.tier!=="low",Kt.receiveShadow=Wt.tier!=="low",J.add(Kt);const me=Kt.clone();me.position.y+=.58,me.position.x+=.46,J.add(me)}n.add(J),J.updateMatrixWorld(!0);const zt=new L(new It(gt*.92,.9,.65),new Tt({visible:!1}));return zt.position.copy(J.position),zt.rotation.y=j,zt.visible=!1,n.add(zt),J.userData.collider=new Sn().setFromObject(zt),t.push(J),J}Bt([11.5,0,6.8],6,.12),Wt.tier!=="low"&&Bt([-9.2,0,-2.2],4,Math.PI/2);{const N=new Tt({color:7043658,roughness:.88,metalness:.02}),gt=new Tt({color:5925690,roughness:.9,metalness:.02});for(let j=0;j<2;j++){const J=new L(new It(.85,.42,.55),j==0?N:gt);J.position.set(13.2,.21+j*.44,7.2),J.castShadow=!0,J.receiveShadow=!0;const Lt=new L(new It(.87,.06,.57),v);Lt.position.y=.02,J.add(Lt),n.add(J),i(J)}for(let j=0;j<2;j++){const J=new L(new It(.85,.42,.55),N);J.position.set(13.2,.21+j*.44,7.85),J.castShadow=!0,J.receiveShadow=!0,n.add(J),i(J)}}{const N=new Ne;N.position.set(-6.5,0,-11),N.name="forklift_proxy";const gt=new L(new It(1.8,1.1,.95),new Tt({color:15120458,roughness:.55,metalness:.18}));gt.position.set(0,.65,0),gt.castShadow=!0,gt.receiveShadow=!0,N.add(gt);const j=new L(new It(.12,1.55,.88),v);j.position.set(.82,1,0),j.castShadow=!0,N.add(j);const J=new L(new It(1.05,.06,.08),v);J.position.set(1.32,.28,-.19),J.castShadow=!0,N.add(J);const Lt=J.clone();Lt.position.set(1.32,.28,.19),N.add(Lt);const zt=new L(new It(.12,.55,.88),v);zt.position.set(-.82,.95,0),N.add(zt);const re=new He(.22,.22,.14,Wt.tier==="low"?6:12),le=new Tt({color:1053720,roughness:.92});[[-.65,.22,.42],[-.65,.22,-.42],[.65,.22,.42],[.65,.22,-.42]].forEach(me=>{const xe=new L(re,le);xe.rotation.z=Math.PI/2,xe.position.set(me[0],me[1],me[2]),xe.castShadow=!0,N.add(xe)}),n.add(N),N.updateMatrixWorld(!0);const Kt=new L(new It(1.9,1.15,1),new Tt({visible:!1}));Kt.position.copy(N.position),Kt.position.y=.65,Kt.visible=!1,n.add(Kt),N.userData.collider=new Sn().setFromObject(Kt),t.push(N)}{const N=Wt.tier==="low"?2:4,gt=new Tt({map:d,alphaMap:d,transparent:!0,alphaTest:.12,side:je,color:16777215,roughness:.82,metalness:.06});gt.needsUpdate=!0;for(let j=0;j<N;j++){const J=10.2+j*2.78,Lt=new L(new qe(2.7,1.9),gt);Lt.position.set(J,.95,-12.5),Lt.castShadow=!1,Lt.receiveShadow=!0,n.add(Lt);const zt=o([J-1.35,.95,-12.5],[.08,1.95,.08],v,!0,!0);if(n.add(zt),i(zt),j===N-1){const le=o([J+1.35,.95,-12.5],[.08,1.95,.08],v,!0,!0);n.add(le),i(le)}const re=o([J,.95,-12.5],[2.7,1.9,.12],new Tt({visible:!1}),!1,!1);re.visible=!1,n.add(re),i(re)}}const te=new Tt({color:10128762,roughness:.92});for(let N=0;N<(Wt.tier==="low"?1:3);N++){const gt=new L(new It(.62,.44,.38),te);gt.position.set(12.2+Math.random()*1.2,.22,-1.2+Math.random()*.8),gt.rotation.y=Math.random()*.6,gt.castShadow=Wt.tier!=="low",gt.receiveShadow=Wt.tier!=="low",n.add(gt)}function Jt(N,gt,j){const J=new Ne;J.position.set(N[0],N[1],N[2]),J.rotation.y=gt;const Lt=new L(new It(1.22,.06,.92),b);Lt.position.y=.07,Lt.castShadow=!0,Lt.receiveShadow=!0,J.add(Lt);const zt=new It(.14,.09,.92),re=new Tt({color:5914402,roughness:.94});for(let Kt of[-.45,0,.45]){const me=new L(zt,re);me.position.set(Kt,.13,0),J.add(me)}const le=new L(new It(1.22,.04,.92),b);if(le.position.y=.02,J.add(le),j){const Kt=new L(rt,y);Kt.position.set(0,.62,0),Kt.castShadow=!0,J.add(Kt);const me=Kt.clone();me.position.y=1.67,J.add(me)}return n.add(J),J.updateMatrixWorld(!0),J.userData.collider=new Sn().setFromObject(J),t.push(J),J}if(Wt.tier!=="low"){let Lt=function(me,xe,We){const Le=[];for(let wn=0;wn<=12;wn++){const Ke=wn/12,cn=me[0]+(xe[0]-me[0])*Ke,rn=me[2]+(xe[2]-me[2])*Ke,Ye=5-Math.sin(Ke*Math.PI)*We;Le.push(new E(cn,Ye,rn))}const Ee=new Qe().setFromPoints(Le),vn=new Ni(Ee,J);n.add(vn)};var Fe=Lt;Jt([-9.5,0,-2.5],.12,!0),Jt([-8.2,0,-.8],-.22,!1),Jt([10.8,0,3.8],.45,!0),Jt([11.5,0,-9.8],.08,!1),Jt([17.2,0,5.2],-.32,!1),Jt([-2.8,0,7.2],.18,!0);const N=new He(.48,.48,.38,14),gt=new Tt({color:3815986,roughness:.72}),j=new L(N,gt);j.rotation.z=Math.PI/2,j.position.set(-16.5,.32,-12.5),j.castShadow=!0,j.receiveShadow=!0,n.add(j);const J=new Ui({color:1711652,linewidth:1});Lt([-18,0,-20],[-8,0,-20],.45),Lt([-18,0,-16],[-8,0,-16],.38);const zt=new qe(18,8),re=new dn({color:16771528,transparent:!0,opacity:.045,side:je,depthWrite:!1}),le=new L(zt,re);le.position.set(-12,2.2,-10),le.rotation.y=.7,n.add(le);const Kt=le.clone();Kt.position.set(6,1.8,4),Kt.rotation.y=-.5,Kt.material=re.clone(),Kt.material.opacity=.032,n.add(Kt)}else Jt([-9.5,0,-2.5],.12,!0),Jt([10.8,0,3.8],.45,!0);if(n.fog=new Aa(9347256,32,132),Wt.tier!=="low"&&!n.getObjectByName("hemi_aaa")){const N=new fa(9357567,1976350,.55);N.name="hemi_aaa",n.add(N)}if(X.updateMatrixWorld(!0),Wt.tier==="low"){const N=new Set(["CylinderGeometry","TorusGeometry","PlaneGeometry"]);let gt=0;n.traverse(j=>{if(!j.isMesh||!j.geometry)return;const J=j.geometry.type,Lt=N.has(J)||j.geometry.parameters&&j.geometry.parameters.width&&j.geometry.parameters.width<.7;let zt=0;try{j.geometry.boundingSphere||j.geometry.computeBoundingSphere(),zt=j.geometry.boundingSphere.radius*Math.max(j.scale.x,j.scale.y,j.scale.z)}catch{}Lt&&zt>0&&zt<.85&&(j.receiveShadow||j.castShadow)&&(j.castShadow&&zt<.85&&(j.castShadow=!1,gt++),(J==="TorusGeometry"||J==="CylinderGeometry")&&(j.receiveShadow=!1))}),console.log("[level] mobile low tier disabled small shadows:",gt)}return{colliders:t,spawnPoints:e}}const Se=Wt.tier==="low";function xg(n,t,e){let i=30,o=90,s=!1,a=0;const r=1.4,l=.083;let u=0,h=!1,d=!1,m=0,p=0;const _=.055;let g=0,f=0,c=0,M=0,v=0,w=0,U=0;const P=7;let R=0;const tt=new E(.3,-.18,-.48),y=new E(0,-.092,-.3),b=new Qi(-.015,.14,-.045),W=new Qi(0,0,0),nt=74,yt=62;let k=0,ut=1;const q=.005,rt=.02,V=document.getElementById("ammo"),Mt=document.getElementById("reserve"),X=document.getElementById("status"),Et=document.getElementById("crosshair");function Nt(){V&&(V.textContent=String(i)),Mt&&(Mt.textContent=String(o))}function G(xt,ee){X&&(X.textContent=xt,ee&&setTimeout(()=>{X.textContent===xt&&(X.textContent=s?"RELOADING":"READY")},ee))}Nt(),X&&(X.textContent="READY");const et=()=>e?typeof e.isLocked=="function"?e.isLocked():!!e.isLocked:!1,it=new Ne;it.name="m4_rifle";function Q(){const xt=Se?64:256,ee=document.createElement("canvas");ee.width=xt,ee.height=xt;const Vt=ee.getContext("2d");Vt.fillStyle="#808080",Vt.fillRect(0,0,xt,xt);for(let pe=0;pe<(Se?300:2200);pe++){const Pe=Math.random()*xt,mn=Math.random()*xt,un=Math.random()*.75+.35,gn=Math.random()>.5?10:-10,Xn=.07+Math.random()*.05;Vt.fillStyle=`rgba(${128+gn},${128+gn},${128+gn},${Xn})`,Vt.fillRect(Pe,mn,un,un)}for(let pe=0;pe<(Se?16:120);pe++){Vt.lineWidth=Math.random()*.9+.32,Vt.globalAlpha=.16+Math.random()*.22,Vt.strokeStyle=Math.random()>.5?"rgba(228,228,228,0.95)":"rgba(62,62,62,0.9)",Vt.beginPath();const Pe=Math.random()*xt,mn=Math.random()*xt,un=16+Math.random()*58,gn=Math.random()<.62?(Math.random()<.5?0:Math.PI)+(Math.random()-.5)*.44:Math.random()*Math.PI*2,Xn=Pe+Math.cos(gn)*un,ai=mn+Math.sin(gn)*un;Vt.moveTo(Pe,mn),Vt.lineTo(Xn,ai),Vt.stroke()}Vt.globalAlpha=1,Vt.strokeStyle="rgba(235,235,235,0.88)",Vt.lineWidth=2;for(let pe=0;pe<4;pe++)Vt.globalAlpha=.18-pe*.03,Vt.strokeRect(1+pe,1+pe,xt-2-pe*2,xt-2-pe*2);Vt.globalAlpha=1;for(let pe=0;pe<(Se?6:18);pe++){const Pe=Math.random()<.5?Math.random()*14:xt-14+Math.random()*14,mn=Math.random()<.5?Math.random()*14:xt-14+Math.random()*14;Vt.fillStyle=`rgba(255,255,255,${.15+Math.random()*.18})`,Vt.beginPath(),Vt.arc(Pe,mn,1.1+Math.random()*2.4,0,Math.PI*2),Vt.fill(),Vt.fillStyle="rgba(28,28,28,0.28)",Vt.beginPath(),Vt.arc(Pe+.6,mn+.6,.7+Math.random()*.6,0,Math.PI*2),Vt.fill()}const Ce=Vt.createLinearGradient(0,0,xt,0);Ce.addColorStop(0,"rgba(255,255,255,0.0)"),Ce.addColorStop(.22,"rgba(255,255,255,0.07)"),Ce.addColorStop(.48,"rgba(255,255,255,0.105)"),Ce.addColorStop(.76,"rgba(255,255,255,0.06)"),Ce.addColorStop(1,"rgba(255,255,255,0.0)"),Vt.fillStyle=Ce,Vt.fillRect(0,Math.floor(xt*.36),xt,Math.floor(xt*.28)),Vt.strokeStyle="rgba(255,255,255,0.06)",Vt.lineWidth=.6,Vt.globalAlpha=.9;for(let pe=0;pe<(Se?3:6);pe++)Vt.beginPath(),Vt.moveTo(0,Math.floor(xt*.11)+pe*34),Vt.lineTo(xt,Math.floor(xt*.19)+pe*34),Vt.stroke();Vt.globalAlpha=1;const Ue=new qn(ee);return Ue.wrapS=Ue.wrapT=ti,Ue.repeat.set(1,1),Ue.needsUpdate=!0,Ue.colorSpace=Qn,Ue.anisotropy=Se?1:4,Ue}const dt=Q();function bt(){const xt=Se?48:128,ee=document.createElement("canvas");ee.width=xt,ee.height=xt;const Vt=ee.getContext("2d");Vt.clearRect(0,0,128,128),Vt.clearRect(0,0,xt,xt),Vt.translate(xt/2,xt/2),Vt.fillStyle="rgba(255,244,190,1.0)",Vt.fillRect(-xt/2,-5,xt,10),Vt.fillRect(-5,-xt/2,10,xt),Vt.save(),Vt.rotate(Math.PI/4),Vt.globalAlpha=.78,Vt.fillRect(-xt*.39,-3,xt*.78,6),Vt.fillRect(-3,-xt*.39,6,xt*.78),Vt.restore(),Vt.save(),Vt.rotate(Math.PI/8),Vt.globalAlpha=.42,Vt.fillRect(-xt*.33,-1.5,xt*.66,3),Vt.restore(),Vt.save(),Vt.rotate(-Math.PI/8),Vt.globalAlpha=.42,Vt.fillRect(-xt*.33,-1.5,xt*.66,3),Vt.restore();const Ce=Vt.createRadialGradient(0,0,0,0,0,xt*.14);Ce.addColorStop(0,"rgba(255,255,255,1)"),Ce.addColorStop(.35,"rgba(255,244,190,1)"),Ce.addColorStop(.72,"rgba(255,220,120,0.8)"),Ce.addColorStop(1,"rgba(255,200,80,0)"),Vt.globalAlpha=1,Vt.fillStyle=Ce,Vt.beginPath(),Vt.arc(0,0,xt*.14,0,Math.PI*2),Vt.fill(),Vt.fillStyle="white",Vt.beginPath(),Vt.arc(0,0,xt*.055,0,Math.PI*2),Vt.fill();const Ue=new qn(ee);return Ue.needsUpdate=!0,Ue}const Ht=bt(),at=new Tt({color:1975338,roughness:.32,metalness:.92,envMapIntensity:Se?.85:1.42,bumpMap:Se?null:dt,bumpScale:Se?0:.015,clearcoat:Se?0:.3,clearcoatRoughness:.32}),ft=new Tt({color:2304561,roughness:.28,metalness:.92,envMapIntensity:Se?.85:1.45,bumpMap:Se?null:dt,bumpScale:Se?0:.008,clearcoat:Se?0:.3,clearcoatRoughness:.28}),I=new Tt({color:2765369,roughness:.34,metalness:.92,envMapIntensity:Se?.82:1.32,bumpMap:Se?null:dt,bumpScale:Se?0:.009,clearcoat:Se?0:.3,clearcoatRoughness:.3}),Ot=new Tt({color:2041132,roughness:.36,metalness:.92,envMapIntensity:Se?.82:1.28,bumpMap:Se?null:dt,bumpScale:Se?0:.015,clearcoat:Se?0:.3,clearcoatRoughness:.34}),St=new Tt({color:1185049,roughness:.68,metalness:.05,clearcoat:Se?0:.08,clearcoatRoughness:.72,bumpMap:Se?null:dt,bumpScale:Se?0:.004}),Rt=new Tt({color:1382428,roughness:.7,metalness:.05,bumpMap:Se?null:dt,bumpScale:Se?0:.004}),Gt=new Tt({color:1580064,roughness:.62,metalness:.18,bumpMap:Se?null:dt,bumpScale:Se?0:.006}),Me=new Tt({color:1711908,roughness:.48,metalness:Se?.35:.75,envMapIntensity:Se?.5:1.1}),Zt=new Tt({color:9047823,roughness:.18,metalness:.45,emissive:3342336,emissiveIntensity:.6}),C=new Tt({color:12755802,roughness:.28,metalness:.82,envMapIntensity:Se?.7:1.25,clearcoat:Se?0:.38,clearcoatRoughness:.22}),S=new L(new It(.095,.082,.3),at);S.position.set(0,-.05,-.08),S.castShadow=!0,S.receiveShadow=!0,it.add(S);const z=new L(new It(.093,.006,.3),I);z.position.set(0,-.011,-.08),z.rotation.z=0,z.scale.set(1,1,1),it.add(z);const Ft=new L(new It(.03,.02,.08),new Tt({color:987926,roughness:.85,metalness:.12}));Ft.position.set(.045,-.032,-.08),it.add(Ft);const Pt=new He(.015,.015,.45,16),kt=new L(Pt,ft);kt.rotation.x=Math.PI/2,kt.position.set(0,-.027,-.465),kt.castShadow=!0,it.add(kt);const ne=new L(new It(.078,.068,.32),Ot);ne.position.set(0,-.038,-.32),ne.castShadow=!0,ne.receiveShadow=!0,it.add(ne);const Yt=new L(new It(.006,.008,.32),I);Yt.position.set(.036,-.024,-.32),Yt.rotation.z=Math.PI/6,it.add(Yt);const Xt=Yt.clone();Xt.position.x=-.036,Xt.rotation.z=-Math.PI/6,it.add(Xt);for(let xt=0;xt<3;xt++){const ee=new L(new It(.019,.004,.06),new Tt({color:658704,roughness:.9,metalness:.05}));ee.position.set(.032,-.032,-.25-xt*.065),it.add(ee);const Vt=ee.clone();Vt.position.x=-.032,it.add(Vt);const Ce=new L(new It(.04,.004,.05),new Tt({color:658704,roughness:.9,metalness:.05}));Ce.position.set(0,-.062,-.28-xt*.07),it.add(Ce)}const ce=new L(new It(.032,.028,.03),I);ce.position.set(0,-.01,-.46),ce.castShadow=!0,it.add(ce);const de=new L(new He(.004,.004,.22,8),ft);de.rotation.x=Math.PI/2,de.position.set(0,-.01,-.35),it.add(de);const At=new L(new He(.018,.018,.05,16),I);At.rotation.x=Math.PI/2,At.position.set(0,-.027,-.705),At.castShadow=!0,it.add(At);for(let xt=0;xt<2;xt++){const ee=new L(new vi(.018,.003,6,12),I);ee.rotation.y=Math.PI/2,ee.position.set(0,-.027,-.69-xt*.015),it.add(ee)}const be=new L(new It(.075,.095,.22),St);be.position.set(0,-.045,.14),be.castShadow=!0,it.add(be);{const xt=document.createElement("canvas");xt.width=128,xt.height=128;const ee=xt.getContext("2d");ee.fillStyle="#3a4a28",ee.fillRect(0,0,128,128),ee.strokeStyle="#5b6b3e",ee.lineWidth=1.2;for(let Pe=0;Pe<128;Pe+=14)ee.beginPath(),ee.moveTo(Pe,0),ee.lineTo(Pe+18,128),ee.stroke(),ee.beginPath(),ee.moveTo(Pe+7,0),ee.lineTo(Pe-7,128),ee.stroke();ee.fillStyle="rgba(0,0,0,0.18)";for(let Pe=0;Pe<8;Pe++)ee.fillRect(0,Pe*16,128,2);const Vt=new qn(xt);Vt.wrapS=Vt.wrapT=ti,Vt.repeat.set(3,1.2);const Ce=new Tt({map:Vt,roughness:.92,metalness:.02,bumpMap:Vt,bumpScale:.006}),Ue=new L(new He(.048,.048,.13,14),Ce);Ue.rotation.x=Math.PI/2,Ue.position.set(0,-.045,.102),Ue.castShadow=!0,it.add(Ue);const pe=new L(new It(.012,.02,.055),Ce);pe.position.set(.038,-.055,.14),pe.rotation.z=.35,pe.rotation.y=.12,it.add(pe)}const ge=new L(new It(.08,.11,.015),new Tt({color:724497,roughness:.82,metalness:.05}));ge.position.set(0,-.045,.255),it.add(ge);const ye=new L(new He(.015,.015,.16,12),I);ye.rotation.x=Math.PI/2,ye.position.set(0,-.045,.04),it.add(ye);const jt=new L(new It(.056,.16,.082),Gt);jt.position.set(0,-.142,-.08),jt.rotation.x=.09,jt.castShadow=!0,it.add(jt);for(let xt=0;xt<3;xt++){const ee=new L(new It(.058,.008,.084),new Tt({color:922390,roughness:.75,metalness:.2}));ee.position.set(0,-.11-xt*.022,-.08),ee.rotation.x=.09,it.add(ee)}const ie=new L(new It(.042,.13,.058),Rt);ie.position.set(0,-.125,.01),ie.rotation.x=.32,ie.castShadow=!0,it.add(ie);for(let xt=0;xt<4;xt++){const ee=new L(new It(.043,.006,.059),new Tt({color:790033,roughness:.88,metalness:.05}));ee.position.set(0,-.105-xt*.018,.015+xt*.006),ee.rotation.x=.32,it.add(ee)}const B=new L(new It(.072,.014,.06),I);B.position.set(0,-.005,.035),B.castShadow=!0,it.add(B);const F=new L(new It(.018,.01,.03),new Tt({color:1711908,roughness:.42,metalness:.82}));F.position.set(.038,-.006,.035),it.add(F);const ct=new L(new It(.028,.022,.02),I);ct.position.set(0,.005,.015),ct.castShadow=!0,it.add(ct);const lt=new L(new It(.018,.018,.004),new Tt({color:592653,roughness:.92,metalness:.1}));lt.position.set(0,.012,.022),it.add(lt);const D=new L(new It(.004,.006,.006),new Tt({color:0}));D.position.set(0,.012,.024),it.add(D);const T=new L(new It(.02,.028,.018),I);T.position.set(0,-.004,-.485),T.castShadow=!0,it.add(T);const K=new L(new He(.004,.004,.022,8),new Tt({color:658446,roughness:.55,metalness:.35}));K.position.set(0,.012,-.485),it.add(K);const _t=new L(new It(.006,.012,.008),I);_t.position.set(-.013,.006,-.485),it.add(_t);const Dt=_t.clone();Dt.position.x=.013,it.add(Dt);const Ut=new L(new It(.022,.028,.11),Me);Ut.position.set(.042,-.028,-.3),Ut.castShadow=!0,it.add(Ut);const H=new L(new He(.007,.007,.012,12),Zt);H.rotation.x=Math.PI/2,H.position.set(.042,-.028,-.355),it.add(H);const Y=new L(new It(.008,.006,.002),new dn({color:16718362}));Y.position.set(.052,-.028,-.362),it.add(Y);const O=new L(new It(.006,.004,.14),new Tt({color:855826,roughness:.78,metalness:.05}));O.position.set(.042,-.042,-.22),it.add(O);const wt=new L(new It(.018,.008,.28),I);wt.position.set(0,-.008,-.08),it.add(wt);{const xt=new L(new It(.032,.022,.06),I);xt.position.set(0,.016,-.1),xt.castShadow=!0,it.add(xt);const ee=new L(new It(.028,.018,.052),new Tt({color:658704,roughness:.62,metalness:.55}));ee.position.set(0,.02,-.1),it.add(ee);const Vt=Se?new Tt({color:13690111,transparent:!0,opacity:.35,roughness:.18,metalness:.15,side:je}):new Go({color:16777215,transparent:!0,opacity:.42,roughness:.02,metalness:0,transmission:.92,thickness:.005,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.35,side:je}),Ce=new L(new qe(.024,.016),Vt);if(Ce.position.set(0,.02,-.075),Ce.rotation.y=Math.PI,it.add(Ce),!Se){const pe=new L(new qe(.024,.016),Vt.clone());pe.material.opacity=.28,pe.position.set(0,.02,-.125),it.add(pe)}const Ue=new L(new In(.0018,8),new dn({color:16718362,transparent:!0,opacity:.95}));if(Ue.position.set(0,.02,-.074),it.add(Ue),!Se){const pe=new L(new In(.0032,8),new dn({color:16726586,transparent:!0,opacity:.22,blending:mi,depthWrite:!1}));pe.position.set(0,.02,-.0735),it.add(pe)}}{const xt=new Tt({color:13620958,roughness:.24,metalness:.92,envMapIntensity:1.2}),ee=new L(new It(.024,.015,.06),xt);ee.position.set(.041,-.032,-.08),it.add(ee);const Vt=new L(new It(.004,.008,.02),new Tt({color:9082270,roughness:.35,metalness:.85}));Vt.position.set(.048,-.032,-.08),it.add(Vt)}const ot=new L(new vi(.035,.004,6,12,Math.PI),new Tt({color:1382428,roughness:.65,metalness:.2}));ot.rotation.z=Math.PI,ot.rotation.y=Math.PI/2,ot.position.set(0,-.075,-.035),it.add(ot);const x=new L(new It(.02,.022,.008),I);x.position.set(.052,-.048,-.062),x.castShadow=!0;const st=new L(new It(.018,.012,.012),I);st.position.set(.052,-.048,-.068),x.add(st),it.add(x);const Ct=new L(new He(.012,.012,.016,12),I);Ct.rotation.z=Math.PI/2,Ct.position.set(.055,-.018,.015),Ct.castShadow=!0,it.add(Ct);const oe=new L(new He(.007,.007,.006,10),new Tt({color:1975338,roughness:.42,metalness:.88}));oe.rotation.z=Math.PI/2,oe.position.set(.062,-.018,.015),it.add(oe);const se=new L(new It(.052,.052,.14),Ot);se.position.set(0,-.032,-.395),se.castShadow=!0,se.receiveShadow=!0,it.add(se);const ue=new It(.005,.005,.14),Te=I,Ge=new L(ue,Te);Ge.position.set(.024,-.01,-.395),Ge.rotation.z=Math.PI/4,it.add(Ge);const Ie=Ge.clone();Ie.position.x=-.024,Ie.rotation.z=-Math.PI/4,it.add(Ie);const Ae=Ge.clone();Ae.position.set(.024,-.054,-.395),Ae.rotation.z=-Math.PI/4,it.add(Ae);const Be=Ge.clone();Be.position.set(-.024,-.054,-.395),Be.rotation.z=Math.PI/4,it.add(Be),it.position.copy(tt),it.rotation.copy(b),t.add(it);try{t.parent!==n&&n.add(t)}catch{}new E;const Ve=new E(0,-.027,-.73),A=new qe(.18,.18),Z=new dn({color:16773280,transparent:!0,opacity:0,side:je,depthWrite:!1,blending:mi}),ht=new L(A,Z);ht.position.copy(Ve),ht.position.z-=.018,ht.visible=!1,it.add(ht);const pt=new qe(.08,.08),mt=new dn({color:16777215,transparent:!0,opacity:0,side:je,depthWrite:!1,blending:mi}),$=new L(pt,mt);$.position.copy(Ve),$.position.z-=.025,$.visible=!1,it.add($);const vt=new qe(.16,.16),Bt=new dn({map:Ht,transparent:!0,opacity:0,side:je,depthWrite:!1,blending:mi,depthTest:!1}),te=new L(vt,Bt);te.position.copy(Ve),te.position.z-=.022,te.visible=!1,Se||it.add(te);const Jt=new Ri(16773280,0,Se?2.2:5,1.9);Jt.intensity=0,Jt.decay=1.9,Jt.distance=Se?2.2:5,it.add(Jt),Jt.position.copy(Ve);let qt=0;const he=.08,_e=new La;_e.far=100,_e.near=0;const Fe=new E,N=new E,gt=new E,j=new E,J=[],Lt=[],zt=[],re=[],le=[];function Kt(xt,ee,Vt){const Ce=new L(new ln(.045,8,8),new dn({color:16773792,transparent:!0,opacity:.95}));if(Ce.position.copy(xt),ee&&Ce.position.addScaledVector(ee,.012),Ce.userData.life=.08,Ce.userData.maxLife=.08,Ce.userData.isImpact=!0,n.add(Ce),Lt.push(Ce),Vt){const ve=new L(new ln(.07,6,6),new dn({color:16739130,transparent:!0,opacity:.9}));ve.position.copy(xt),ee&&ve.position.addScaledVector(ee,.015),ve.userData.life=.09,ve.userData.maxLife=.09,ve.userData.isImpact=!0,n.add(ve),Lt.push(ve)}const Ue=new qe(.12,.12),pe=new Tt({color:Vt?3804938:1711650,roughness:.92,metalness:.06,transparent:!0,opacity:.92,side:je,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthWrite:!1});Vt?pe.color.setHex(4856330):(pe.color.setHex(2237995),pe.emissive=new fe(0));const Pe=new L(Ue,pe);if(Pe.position.copy(xt),ee&&Pe.position.addScaledVector(ee,.004),ee){const ve=new E(0,0,1),Je=new ts().setFromUnitVectors(ve,ee.clone().normalize());Pe.quaternion.copy(Je)}else Pe.lookAt(xt.clone().add(new E(0,1,0)));Pe.userData.life=4.5,Pe.userData.maxLife=4.5,Pe.userData.isDecal=!0,n.add(Pe),zt.push(Pe);const mn=Se?2:6,un=new Qe,gn=new Float32Array(mn*3),Xn=[];for(let ve=0;ve<mn;ve++){gn[ve*3]=xt.x,gn[ve*3+1]=xt.y,gn[ve*3+2]=xt.z;const Je=new E((Math.random()-.5)*2.2,Math.random()*2+.3,(Math.random()-.5)*2.2);ee&&Je.addScaledVector(ee,1.5+Math.random()*1.2),Je.normalize().multiplyScalar(.9+Math.random()*1.1),Xn.push(Je)}un.setAttribute("position",new Yn(gn,3));const ai=new ur({color:Vt?16755336:8948366,size:.035,transparent:!0,opacity:.95,sizeAttenuation:!0,depthWrite:!1}),we=new da(un,ai);if(we.userData.life=.38,we.userData.maxLife=.38,we.userData.vels=Xn,we.userData.isParticle=!0,n.add(we),le.push(we),!Se){const ve=new L(new ln(.06,6,6),new dn({color:10133672,transparent:!0,opacity:.32}));ve.position.copy(xt),ee&&ve.position.addScaledVector(ee,.008),ve.userData.life=.14,ve.userData.maxLife=.14,ve.userData.isImpact=!0,n.add(ve),Lt.push(ve)}}function me(xt,ee,Vt){const Ce=new Qe().setFromPoints([xt.clone(),ee.clone()]),Ue=new Ui({color:Vt?16765562:16773296,transparent:!0,opacity:.92,depthWrite:!1,blending:mi});Ue.linewidth=2;const pe=new Ni(Ce,Ue);if(pe.userData.life=.055,pe.userData.maxLife=pe.userData.life,pe.userData.isTracer=!0,n.add(pe),J.push(pe),!Se){const Pe=new Qe().setFromPoints([xt.clone(),ee.clone()]),mn=new Ui({color:16774872,transparent:!0,opacity:.28,depthWrite:!1,blending:mi});mn.linewidth=3;const un=new Ni(Pe,mn);un.userData.life=.038,un.userData.maxLife=.038,un.userData.isTracer=!0,n.add(un),J.push(un)}}function xe(){const xt=new He(.006,.006,.018,Se?4:10),ee=new L(xt,C);ee.castShadow=!0;const Ce=new E(.045,-.032,-.1).clone().applyMatrix4(it.matrixWorld);Number.isFinite(Ce.x)||it.getWorldPosition(Ce),ee.position.copy(Ce);const Ue=new E;t.getWorldDirection(j),j.normalize(),Ue.crossVectors(j,new E(0,1,0)).normalize();const pe=new E().addScaledVector(Ue,1.9+Math.random()*.6).add(new E(0,2.2+Math.random()*.9,0)).addScaledVector(j,-.6);ee.userData.vel=pe,ee.userData.angVel=new E(Math.random()*18-9,Math.random()*12-6,Math.random()*18-9),ee.userData.life=1.4,ee.userData.maxLife=1.4,n.add(ee),re.push(ee)}function We(){ht.visible=!0,$.visible=!0,Se||(te.visible=!0),Z.opacity=.95,mt.opacity=.98,Se||(Bt.opacity=.93),ht.rotation.z=Math.random()*Math.PI,$.rotation.z=ht.rotation.z+.6,Se||(te.rotation.z=ht.rotation.z*.5),Jt.intensity=Se?1.8:3.5,Jt.distance=Se?2.2:5,qt=he,ht.scale.set(.58,.58,1),$.scale.set(.52,.52,1),Se||te.scale.set(.6,.6,1)}function Le(){if(s)return;if(i<=0){if(u<=0){u=.22,G("EMPTY",420);try{const we=new(window.AudioContext||window.webkitAudioContext),ve=we.createOscillator(),Je=we.createGain();ve.frequency.value=720,Je.gain.value=.12,ve.connect(Je),Je.connect(we.destination),ve.start(),Je.gain.exponentialRampToValueAtTime(.001,we.currentTime+.08),ve.stop(we.currentTime+.09)}catch{}m=-.008,p=.018,Et&&(Et.style.transform="scale(1.4)",setTimeout(()=>Et.style.transform="",90))}return}if(u>0||!et())return;i--,Nt(),u=l;try{window.__audio&&window.__audio.playShoot&&window.__audio.playShoot(d)}catch{}m=-.04-Math.random()*.008,p=_+(Math.random()-.5)*.012;try{t.rotation.x+=.006*(d?.55:1)}catch{}let xt=0;try{const we=e.velocity;if(we){const ve=Math.hypot(we.x||0,we.z||0);ve>.6&&(xt=Math.min(.012,ve/9*.012))}e.isGrounded===!1&&(xt+=.006)}catch{}const Vt=(d?q:rt)+xt;try{t.updateMatrixWorld(!0)}catch{}if(t.getWorldPosition(Fe),t.getWorldDirection(N),N.normalize(),Vt>0){const we=new E(0,1,0);let ve=new E().crossVectors(N,we);ve.lengthSq()<.001&&ve.set(1,0,0),ve.normalize();const Je=new E().crossVectors(ve,N).normalize(),ki=Math.random()*Math.PI*2,fi=Math.random()*Vt;gt.copy(N).addScaledVector(ve,Math.cos(ki)*fi).addScaledVector(Je,Math.sin(ki)*fi).normalize()}else gt.copy(N);it.getWorldPosition(j),t.getWorldPosition(j);const Ce=new E;Ce.copy(Ve).applyMatrix4(it.matrixWorld),Number.isFinite(Ce.x)||Ce.copy(Fe).addScaledVector(gt,.45),_e.set(Fe,gt),_e.far=100,_e.near=0;const Ue=[];n.traverse(we=>{if(!we.isMesh||we.parent===it||we===it)return;let ve=we,Je=!1;for(;ve;){if(ve===it||ve===t){Je=!0;break}ve=ve.parent}Je||we.userData.isTracer||we.userData.isImpact||we.userData.isDecal||we.userData.isParticle||we.visible!==!1&&Ue.push(we)});let pe=[];try{pe=_e.intersectObjects(Ue,!1)}catch{pe=_e.intersectObjects(n.children,!0)}pe=pe.filter(we=>{let ve=we.object;for(;ve;){if(ve===it||ve===t)return!1;ve=ve.parent}return!0});let Pe=null,mn=null,un=null,gn=!1;if(pe.length){const we=pe[0];Pe=we.point.clone(),mn=we.face?we.face.normal.clone().transformDirection(we.object.matrixWorld).normalize():null,mn||(mn=gt.clone().multiplyScalar(-1).normalize()),un=we.object;let ve=we.object;for(;ve;){if(ve.userData&&ve.userData.isEnemy){gn=!0,un=ve;break}ve=ve.parent}if(gn&&un.userData.hit)try{un.userData.hit(34,Pe.clone())}catch{}else if(gn){let Je=we.object.parent;for(;Je;){if(Je.userData&&typeof Je.userData.hit=="function"){try{Je.userData.hit(34,Pe.clone())}catch{}break}Je=Je.parent}}}const Xn=Pe?Pe.clone():Fe.clone().addScaledVector(gt,100),ai=Ce.clone();if(me(ai,Xn,!!Pe),Pe&&Kt(Pe,mn,gn),We(),xe(),Et){const we=d?1.15:1.55;Et.style.transform=`scale(${we})`,setTimeout(()=>{Et&&(Et.style.transform="")},70)}i===0?G("EMPTY",900):d||G("READY"),B.position.z=.022,setTimeout(()=>B.position.z=.035,40)}function Ee(){if(!s){if(o<=0){G("NO AMMO",700);return}if(i===30){G("FULL",500);return}s=!0,a=r,G("RELOADING"),Et&&(Et.style.opacity="0.18")}}function vn(){const xt=30-i,ee=Math.min(xt,o);i+=ee,o-=ee,s=!1,a=0,Nt(),G(ee>0?"READY":"EMPTY"),Et&&(Et.style.opacity=""),jt.visible=!0,jt.position.y=-.142,jt.position.z=-.08,jt.rotation.set(.09,0,0),i>0&&ee>0&&(m=-.016,p=.02)}function wn(xt){et()&&(xt.button===0&&(h=!0,xt.preventDefault(),Le()),xt.button===2&&(d=!0,xt.preventDefault()))}function Ke(xt){xt.button===0&&(h=!1),xt.button===2&&(d=!1)}function cn(xt){et()&&xt.preventDefault()}function rn(xt){xt.code==="KeyR"&&Ee()}function Ye(xt){if(!et())return;const ee=xt.movementX||0,Vt=xt.movementY||0;v+=ee*55e-5,w+=Vt*55e-5,v=Math.max(-.12,Math.min(.12,v)),w=Math.max(-.09,Math.min(.09,w)),c+=ee*18e-5,M+=Vt*13e-5}document.addEventListener("mousedown",wn,{passive:!1}),document.addEventListener("mouseup",Ke,!1),document.addEventListener("contextmenu",cn,!1),document.addEventListener("keydown",rn,!1),document.addEventListener("mousemove",Ye,!1),document.addEventListener("pointerlockchange",()=>{et()||(h=!1,d=!1)}),window.addEventListener("blur",()=>{h=!1,d=!1});function Zn(xt){if(xt<=0)return;if(xt>.05&&(xt=.05),R+=xt,u>0&&(u-=xt),h&&u<=0&&!s&&Le(),s){a-=xt;const De=r-a;if(De<.35){const $t=De/.35;jt.position.y=Re.lerp(-.142,-.3,$t),jt.position.z=Re.lerp(-.08,-.065,$t),jt.rotation.x=Re.lerp(.09,.52,$t),jt.rotation.z=Re.lerp(0,.22,$t),jt.visible=$t<.88,B.position.z=.035}else if(De<1.1){if(De<.4)jt.visible=!1,jt.position.y=-.3,jt.rotation.x=.52,jt.rotation.z=.22;else{jt.visible=!0;const $t=Math.min(1,(De-.4)/.7),Ze=Vn($t);jt.position.y=Re.lerp(-.3,-.142,Ze),jt.position.z=Re.lerp(-.065,-.08,Ze),jt.rotation.x=Re.lerp(.52,.09,Ze),jt.rotation.z=Re.lerp(.22,0,Ze)}De<.95&&(B.position.z=.035)}else{jt.position.y=-.142,jt.position.z=-.08,jt.rotation.set(.09,0,0);const $t=(De-1.1)/(r-1.1),Ze=Math.sin($t*Math.PI);B.position.z=.035-Ze*.032,S.position.z=-.08-Ze*.006}a<=0&&(S.position.z=-.08,vn())}const ee=d&&!s?1:0;k+=(ee-k)*(1-Math.exp(-18.5*xt)),Math.abs(k-ee)<.001&&(k=ee);const Vt=d&&!s?yt:nt;if(t.fov!==void 0){const De=1-Math.exp(-14*xt);t.fov+=(Vt-t.fov)*De,Math.abs(t.fov-Vt)>.015||(t.fov=Vt),t.updateProjectionMatrix()}ut+=((d&&!s?.925:1)-ut)*(1-Math.exp(-14*xt)),it.scale.setScalar(ut);let Ue=!1,pe=0;try{const De=e.velocity;if(De){const $t=Math.hypot(De.x||0,De.z||0);Ue=$t>.45,pe=Math.min(1,$t/6)}}catch{}if(Ue&&!d){U+=xt*P*2*Math.PI*.42;const De=pe>.85;U+=xt*(De?2.2:0)}else d?U+=xt*1.2:U=Re.lerp(U,0,Math.min(1,xt*6));const Pe=Ue?Math.sin(U*(Ue&&pe>.85?1.35:1))*(d?.004:.011)*(d?.35:1):Math.sin(R*.9)*.0012,mn=Ue?Math.sin(U*.5)*(d?.003:.009):Math.sin(R*.6)*.001,un=Ue?Math.sin(U*.9)*.004:0;v=Re.lerp(v,0,Math.min(1,xt*7)),w=Re.lerp(w,0,Math.min(1,xt*7)),c=Re.lerp(c,0,Math.min(1,xt*9)),M=Re.lerp(M,0,Math.min(1,xt*9));const gn=Ue?Math.sin(R*2.1)*.004*pe:0,Xn=Ue?Math.cos(R*1.7)*.003*pe:0,ai=v*.42+c*6+gn+mn,we=w*.32+M*5+Xn+Pe*.6;g+=(ai-g)*(1-Math.exp(-14*xt)),f+=(we-f)*(1-Math.exp(-14*xt));const ve=1-Math.exp(-22*xt),Je=1-Math.exp(-(d?24:22)*xt);m=Re.lerp(m,0,ve),p=Re.lerp(p,0,Je),Math.abs(m)<4e-4&&(m=0),Math.abs(p)<3e-4&&(p=0);const ki=new E().lerpVectors(tt,y,k),fi=new Qi(Re.lerp(b.x,W.x,k),Re.lerp(b.y,W.y,k),Re.lerp(b.z,W.z,k));if(it.position.copy(ki),it.position.x+=g,it.position.y+=f+Pe,it.position.z+=m+un*.5,it.rotation.set(fi.x-p*1.05-f*1.8-Pe*.7,fi.y+g*1.25+Math.sin(U*.45)*.006,fi.z+g*.55+Math.sin(U*.7)*.008),it.updateMatrixWorld(!1),Et){const De=d?.55:1,$t=Ue?(d?.06:.18)*pe:0,Ze=Math.abs(p)*2.2+Math.abs(m)*2,Nn=De+$t+Ze,Rn=1-k;Et.style.opacity=String(.92*Rn+.08),(!h||u<.04)&&(Et.style.transform=`scale(${Nn.toFixed(3)})`)}if(qt>0){qt-=xt;const $t=Math.max(0,qt/he);Z.opacity=$t*.95,mt.opacity=$t*.98,Se||(Bt.opacity=$t*.93),Jt.intensity=(Se?1.8:3.5)*$t;const Ze=.58+(1-$t)*.2,Nn=.52+(1-$t)*.14,Rn=Se?.6:.6+(1-$t)*.24;ht.scale.setScalar(Ze),$.scale.setScalar(Nn),Se||te.scale.setScalar(Rn),Se||(te.rotation.z+=xt*12),qt<=0&&(qt=0,ht.visible=!1,$.visible=!1,Se||(te.visible=!1),Z.opacity=0,mt.opacity=0,Se||(Bt.opacity=0),Jt.intensity=0)}for(let De=re.length-1;De>=0;De--){const $t=re[De];if($t.userData.life-=xt,$t.userData.life<=0){n.remove($t),re.splice(De,1);continue}const Ze=$t.userData.vel;Ze.y-=9.8*xt,$t.position.addScaledVector(Ze,xt),$t.rotation.x+=$t.userData.angVel.x*xt,$t.rotation.y+=$t.userData.angVel.y*xt,$t.rotation.z+=$t.userData.angVel.z*xt,$t.position.y<.04&&Ze.y<0&&($t.position.y=.04,Ze.y*=-.28,Ze.x*=.72,Ze.z*=.72,$t.userData.angVel.multiplyScalar(.72),Math.abs(Ze.y)<.25&&(Ze.y=0));const Nn=$t.userData.life/$t.userData.maxLife;Nn<.18&&($t.material.opacity=Nn/.18),!$t.material.transparent&&Nn<.18&&($t.material.transparent=!0)}for(let De=J.length-1;De>=0;De--){const $t=J[De];$t.userData.life-=xt;const Ze=Math.max(0,$t.userData.life/$t.userData.maxLife);if($t.userData.life<=0){n.remove($t),$t.geometry&&$t.geometry.dispose(),J.splice(De,1);continue}$t.material&&($t.material.opacity=Ze*($t.material.color.getHex()===16774872?.28:.92))}for(let De=Lt.length-1;De>=0;De--){const $t=Lt[De];$t.userData.life-=xt;const Ze=Math.max(0,$t.userData.life/$t.userData.maxLife);if($t.userData.life<=0){n.remove($t),Lt.splice(De,1);continue}$t.material&&$t.material.opacity!==void 0&&($t.material.opacity=Ze*($t.geometry.type.includes("Sphere")?.95:.35)),$t.scale.setScalar(1+(1-Ze)*.55)}for(let De=zt.length-1;De>=0;De--){const $t=zt[De];if($t.userData.life-=xt,$t.userData.life<=0){n.remove($t),zt.splice(De,1);continue}$t.userData.life<1&&($t.material.opacity=$t.userData.life/1*.92)}for(let De=le.length-1;De>=0;De--){const $t=le[De];$t.userData.life-=xt;const Ze=Math.max(0,$t.userData.life/$t.userData.maxLife);if($t.userData.life<=0){n.remove($t),$t.geometry.dispose(),le.splice(De,1);continue}const Nn=$t.geometry.attributes.position;for(let Rn=0;Rn<$t.userData.vels.length;Rn++)$t.userData.vels[Rn].y-=9.8*.28*xt,Nn.array[Rn*3]+=$t.userData.vels[Rn].x*xt,Nn.array[Rn*3+1]+=$t.userData.vels[Rn].y*xt,Nn.array[Rn*3+2]+=$t.userData.vels[Rn].z*xt;Nn.needsUpdate=!0,$t.material&&($t.material.opacity=Ze*.95),$t.position.y-=xt*.12}}function Vn(xt){return 1-Math.pow(1-xt,3)}function Wn(xt){o+=xt,Nt(),G("+ AMMO",650)}function Bi(){return{ammo:i,reserve:o,isReloading:s}}Nt();function di(){Le()}function Mi(){Ee()}return{update:Zn,getAmmo:Bi,shoot:di,reload:Mi,raycaster:_e,gunGroup:it,addAmmo:Wn,get ammo(){return i},get reserve(){return o}}}const Xe=Wt.tier==="low";function Mg(n,t,e,i){const o=new ln(.19,Xe?6:18,Xe?4:14),s=new ln(.215,Xe?6:18,Xe?4:14,0,Math.PI*2,0,Math.PI*.63),a=new vi(.205,.018,Xe?6:8,Xe?12:20),r=new It(.22,.06,.04),l=new It(.52,.62,.3),u=new It(.36,.3,.05),h=new It(.3,.16,.04),d=new It(.14,.1,.22),m=new It(.54,.08,.32),p=new It(.12,.14,.08);function _(H,Y){return po?new po(H,Y,Xe?4:6,Xe?6:12):new He(H,H,Y,Xe?6:12)}const g=_(.095,.26),f=_(.082,.24),c=new He(.062,.058,.14,Xe?4:10),M=new He(.052,.052,.034,Xe?4:10),v=_(.128,.36),w=_(.11,.34),U=new It(.14,.055,.14),P=new ln(.082,Xe?4:10,Xe?4:8),R=new It(.17,.11,.27),tt=new It(.04,.055,.58),y=new It(.042,.11,.1),b=new It(.028,.028,.2),W=new It(.05,.07,.16),nt=new He(.012,.012,.36,Xe?4:8),yt=new It(.24,.14,.16),k=new qe(.19,.12),ut=new It(.15,.11,.086),q=new It(.165,.12,.095),rt=new He(.004,.003,.18,Xe?3:6);function V(){const H=Xe?128:512,Y=document.createElement("canvas");Y.width=Y.height=H;const O=Y.getContext("2d");O.fillStyle="#4b5640",O.fillRect(0,0,H,H);const wt=["#3e4a37","#5a6348","#3b4236","#6b7356","#2f352e","#4a5540","#5e6b52","#383e32","#6e7a5a","#3a4035"],ot=Xe?20:120;for(let st=0;st<ot;st++){const Ct=Math.random()*H,oe=Math.random()*H,se=14+Math.random()*34,ue=9+Math.random()*22;O.fillStyle=wt[st%wt.length],O.globalAlpha=.55+Math.random()*.35,O.beginPath(),O.ellipse(Ct,oe,se,ue,Math.random()*Math.PI,0,Math.PI*2),O.fill()}O.globalAlpha=1;for(let st=0;st<(Xe?400:2200);st++){const Ct=Math.random()*H,oe=Math.random()*H,se=Math.random()<.5?1:1.2;O.fillStyle=Math.random()<.5?"rgba(0,0,0,0.09)":"rgba(255,255,255,0.07)",O.fillRect(Ct,oe,se,se)}O.strokeStyle="rgba(0,0,0,0.06)",O.lineWidth=.6;for(let st=16;st<H;st+=16)O.beginPath(),O.moveTo(0,st+Math.random()*2),O.lineTo(H,st+Math.random()*2),O.stroke();for(let st=0;st<(Xe?150:900);st++){const Ct=Math.random()*H,oe=Math.random()*H;O.fillStyle="rgba(68,62,45,0.12)",O.beginPath(),O.arc(Ct,oe,.8+Math.random()*1.4,0,Math.PI*2),O.fill()}const x=new qn(Y);return x.wrapS=x.wrapT=ti,x.colorSpace=fn,x.anisotropy=Xe?1:8,x.repeat.set(1,1),x}function Mt(){if(Xe)return null;const H=document.createElement("canvas");H.width=H.height=512;const Y=H.getContext("2d");Y.fillStyle="#808080",Y.fillRect(0,0,512,512);for(let wt=0;wt<18e3;wt++){const ot=Math.random()*512,x=Math.random()*512;Y.fillStyle=Math.random()<.5?"#7a7a7a":"#8a8a8a",Y.fillRect(ot,x,1,1)}Y.strokeStyle="rgba(120,120,120,0.5)",Y.lineWidth=.5;for(let wt=0;wt<512;wt+=4)Y.beginPath(),Y.moveTo(0,wt),Y.lineTo(512,wt),Y.stroke();for(let wt=0;wt<512;wt+=4)Y.beginPath(),Y.moveTo(wt,0),Y.lineTo(wt,512),Y.stroke();const O=new qn(H);return O.wrapS=O.wrapT=ti,O}function X(){const H=document.createElement("canvas");H.width=H.height=128;const Y=H.getContext("2d");Y.fillStyle="#2a2e2b",Y.fillRect(0,0,128,128);for(let wt=0;wt<128;wt+=4)for(let ot=0;ot<128;ot+=4)Y.fillStyle=(Math.floor(ot/4)+Math.floor(wt/4))%2===0?"#323633":"#2e3331",Y.fillRect(ot,wt,4,4);for(let wt=0;wt<800;wt++){const ot=Math.random()*128,x=Math.random()*128;Y.fillStyle=Math.random()<.5?"rgba(0,0,0,0.14)":"rgba(255,255,255,0.06)",Y.fillRect(ot,x,1,1)}Y.strokeStyle="rgba(0,0,0,0.18)",Y.lineWidth=.7;for(let wt=14;wt<128;wt+=22)Y.beginPath(),Y.setLineDash([4,6]),Y.moveTo(0,wt),Y.lineTo(128,wt),Y.stroke();Y.setLineDash([]);const O=new qn(H);return O.wrapS=O.wrapT=ti,O.colorSpace=fn,O.anisotropy=4,O}const Et=V(),Nt=Et.clone();Nt.repeat.set(.9,.9);const G=Mt(),et=X(),it=new Tt({color:13150346,roughness:.62,metalness:0}),Q=new Tt({color:3883574,roughness:.74,metalness:.14,bumpMap:G,bumpScale:.015}),dt=new Tt({color:3093806,roughness:.84,metalness:.09}),bt=new Tt({map:Et,roughness:.94,metalness:.02,color:16777215,bumpMap:G,bumpScale:.03}),Ht=new Tt({map:Nt,roughness:.94,metalness:.015,color:16777215,bumpMap:G,bumpScale:.03}),at=new Tt({color:3027761,roughness:.7,metalness:.2,bumpMap:G,bumpScale:.022}),ft=new Tt({color:2435625,roughness:.64,metalness:.26,bumpScale:.01}),I=new Tt({color:1777181,roughness:.62,metalness:.28}),Ot=new Tt({color:1645855,roughness:.38,metalness:.78,envMapIntensity:1.1}),St=new Tt({color:2303524,roughness:.8,metalness:.12,bumpMap:G,bumpScale:.01}),Rt=new Tt({map:Et,roughness:.95,metalness:.015,color:16777215,bumpMap:G,bumpScale:.03}),Gt=new Tt({color:1711130,roughness:.72,metalness:.16}),Me=new Tt({color:8034874,roughness:.58,metalness:.14,emissive:2766100,emissiveIntensity:.18}),Zt=new Tt({map:et,roughness:.88,metalness:.04,color:16777215,bumpMap:G,bumpScale:.012,side:je}),C=new Tt({color:987152,roughness:.45,metalness:.35}),S=new E(0,1,0);function z(H){const Y=H.clone();return Y.needsUpdate=!0,Y}function Ft(H){return 1-Math.pow(1-H,3)}let Pt=[],kt=0,ne=[];function Yt(){const H=[];n.traverse(O=>{if(O.isMesh&&!O.userData.isEnemy&&!O.userData.isAmmoDrop&&!O.userData.isTracer&&!(O.parent&&O.parent.isCamera)){if(O.geometry&&O.geometry.type==="BoxGeometry"){const wt=O.geometry.parameters;if(wt&&wt.width>40&&wt.height<.5)return}(O.parent===n||O.parent&&O.parent.parent===n||O.material&&O.geometry&&O.geometry.type==="BoxGeometry"&&O.getWorldPosition(new E).y<3)&&H.push(O)}}),H.length<2&&n.children.forEach(O=>{if(O.isMesh&&!O.userData.isEnemy&&O.geometry&&O.geometry.type==="BoxGeometry"){const wt=O.geometry.parameters;wt&&!(wt.width>40)&&H.push(O)}}),ne=[];const Y=new E;for(const O of H){if(O.getWorldPosition(Y),Y.y>3)continue;const wt=O.geometry&&O.geometry.parameters?Math.max(O.geometry.parameters.width||1,O.geometry.parameters.depth||1):1,ot=Math.max(.6,wt*.5+.5);for(const x of[0,Math.PI*.5,Math.PI,Math.PI*1.5]){const st=new E(Y.x+Math.cos(x)*ot,0,Y.z+Math.sin(x)*ot);st.x=Math.max(-28,Math.min(28,st.x)),st.z=Math.max(-28,Math.min(28,st.z)),ne.push(st)}}return H}const Xt=new La,ce=new E,de=new E;function At(H,Y,O){ce.copy(Y).sub(H);const wt=ce.length();if(wt<.1)return!0;ce.normalize(),Xt.set(H,ce),Xt.far=wt-.22;const ot=Xt.intersectObjects(O,!1);return ot.length?ot[0].distance<.35?At(de.copy(H).addScaledVector(ce,.4),Y,O):ot[0].distance>wt-.35:!0}let be=100;function ge(H){return H&&H.isVector3?H:e&&typeof e.getPosition=="function"?e.getPosition():new E(0,1.7,8)}function ye(H){if(e&&typeof e.takeDamage=="function"){e.takeDamage(H);return}be=Math.max(0,be-H);const Y=document.getElementById("health");if(Y&&(Y.textContent=String(Math.round(be))),!document.getElementById("__hurtOverlay")){const wt=document.createElement("div");wt.id="__hurtOverlay",wt.style.cssText="position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at center, transparent 35%, rgba(200,20,20,0.65) 100%);opacity:0;transition:opacity 60ms;z-index:5",document.body.appendChild(wt)}const O=document.getElementById("__hurtOverlay");if(O&&(O.style.opacity="0.85",setTimeout(()=>O.style.opacity="0",180)),be<=0){const wt=document.getElementById("status");wt&&(wt.textContent="DOWNED"),setTimeout(()=>{be=100,Y&&(Y.textContent="100"),wt&&(wt.textContent="READY")},2600)}}const jt=[];function ie(H,Y,O){const wt=new Qe().setFromPoints([H.clone(),Y.clone()]),ot=new Ui({color:O?16718362:16726843,transparent:!0,opacity:.96}),x=new Ni(wt,ot);if(x.userData.isTracer=!0,x.userData.age=0,x.userData.life=O?.09:.07,n.add(x),jt.push(x),Xe)return;if(O){const Ct=new L(new ln(.055,6,6),new dn({color:16726843,transparent:!0,opacity:.95}));Ct.position.copy(Y),Ct.userData.isTracer=!0,Ct.userData.age=0,Ct.userData.life=.12,Ct.userData.isSpark=!0,n.add(Ct),jt.push(Ct)}const st=new L(new ln(.09,8,8),new dn({color:16773320,transparent:!0,opacity:.92}));st.position.copy(H),st.position.y+=.02,st.userData.isTracer=!0,st.userData.age=0,st.userData.life=.05,st.userData.isSpark=!0,n.add(st),jt.push(st)}const B=[];function F(H){const Y=new L(yt,Me.clone());Y.position.copy(H),Y.position.y=.14,Y.castShadow=!0,Y.receiveShadow=!0,Y.rotation.y=Math.random()*Math.PI,Y.userData.isAmmoDrop=!0,Y.userData.birth=performance.now(),n.add(Y),B.push(Y),setTimeout(()=>{const O=B.indexOf(Y);O>=0&&B.splice(O,1),Y.parent&&n.remove(Y)},18e3)}function ct(H){for(let Y=B.length-1;Y>=0;Y--){const O=B[Y];if(Math.hypot(O.position.x-H.x,O.position.z-H.z)<1.55&&Math.abs(O.position.y-H.y)<1.6){let wt=18;if(i)if(typeof i.addAmmo=="function")i.addAmmo(wt);else if(typeof i.refill=="function")i.refill(wt);else{const st=document.getElementById("reserve");if(st){const Ct=parseInt(st.textContent||"0",10);st.textContent=String(Ct+wt)}}else{const st=document.getElementById("reserve");if(st){const Ct=parseInt(st.textContent||"0",10);st.textContent=String(Ct+wt)}}const ot=document.getElementById("status");ot&&(ot.textContent="+ AMMO",setTimeout(()=>ot.textContent="READY",700));const x=new L(new ln(.12,8,8),new dn({color:11206536,transparent:!0,opacity:.9}));x.position.copy(O.position),x.position.y+=.25,x.userData.isTracer=!0,x.userData.age=0,x.userData.life=.22,x.userData.isSpark=!0,n.add(x),jt.push(x),n.remove(O),B.splice(Y,1)}}}function lt(){const H=new Ne,Y=new L(l,z(bt));Y.position.set(0,1.14,0),Y.castShadow=!0,H.add(Y);const O=new L(u,z(ft));O.position.set(0,.12,.165),O.castShadow=!0,Y.add(O);const wt=new L(h,z(at));wt.position.set(0,-.14,.16),wt.castShadow=!0,Y.add(wt);const ot=new L(m,z(I));ot.position.set(0,-.33,.02),ot.castShadow=!0,Y.add(ot);const x=new L(d,z(at));x.position.set(-.29,.26,0),x.castShadow=!0,Y.add(x);const st=x.clone();st.position.x=.29,Y.add(st);const Ct=new L(p,z(I));Ct.position.set(-.22,-.32,.17),Ct.castShadow=!0,Y.add(Ct);const oe=Ct.clone();oe.position.x=.22,Y.add(oe);const se=new L(new It(.14,.1,.09),z(I));se.position.set(0,-.32,-.17),se.castShadow=!0,Y.add(se);const ue=new Ne;ue.position.set(0,.41,0),Y.add(ue);const Te=new L(o,z(it));Te.position.set(0,.13,.02),Te.castShadow=!0,ue.add(Te);const Ge=new L(new He(.125,.135,.14,12,1,!0),z(I));Ge.position.set(0,.07,.08),Ge.rotation.x=.12,Ge.scale.set(1,1,.72),Ge.castShadow=!0,ue.add(Ge);const Ie=new L(new ln(.135,10,8,0,Math.PI*2,0,Math.PI*.42),z(I));Ie.position.set(0,.06,.08),Ie.scale.set(1,.72,.85),ue.add(Ie);const Ae=new L(k,z(Zt));Ae.position.set(0,.055,.148),Ae.rotation.y=0,Ae.castShadow=!1,ue.add(Ae);const Be=new L(new It(.19,.006,.005),z(I));Be.position.set(0,.02,.15),ue.add(Be);const Ve=new L(new It(.095,.032,.04),z(it));Ve.position.set(0,.015,.12),Ve.castShadow=!0,ue.add(Ve),ue.userData.jaw=Ve;{const Pn=new Tt({color:657930,roughness:.92,emissive:1710610,emissiveIntensity:.18}),an=new L(new It(.032,.008,.004),Pn);an.position.set(-.042,.072,.125),an.rotation.y=.12,ue.add(an);const hn=an.clone();hn.position.x=.042,hn.rotation.y=-.12,ue.add(hn);const nn=new L(new It(.135,.012,.012),z(I));nn.position.set(0,.082,.122),nn.rotation.x=.15,ue.add(nn),ue.userData.brow=nn,ue.userData.eyes=[an,hn]}const A=new L(s,z(Q));A.position.set(0,.17,.02),A.rotation.x=.06,A.castShadow=!0,ue.add(A);const Z=new ln(.218,12,8,0,Math.PI*2,0,Math.PI*.58),ht=new Tt({color:4870724,roughness:.96,metalness:.03,transparent:!0,opacity:.45,wireframe:!1}),pt=new L(Z,ht);pt.position.copy(A.position),pt.rotation.x=.06,pt.scale.set(1.02,1.02,1.02),ue.add(pt);const mt=new Ne;mt.position.copy(A.position),ue.add(mt);for(let Pn=0;Pn<24;Pn++){const an=Pn/24*Math.PI*2,hn=[],nn=10;for(let _o=0;_o<=nn;_o++){const vo=_o/nn,xo=vo*Math.PI*.58,ys=an+Math.sin(vo*Math.PI)*.04,ns=.22,is=Math.cos(ys)*Math.sin(xo)*ns,ws=Math.cos(xo)*ns,xu=Math.sin(ys)*Math.sin(xo)*ns;hn.push(new E(is,ws,xu))}const Ms=new Qe().setFromPoints(hn),_u=new Ui({color:3818040,transparent:!0,opacity:.52}),vu=new Ni(Ms,_u);if(mt.add(vu),Pn%6===0){const _o=[],vo=.08+Pn/24*.1,xo=Math.sqrt(Math.max(0,.22*.22-vo*vo));for(let is=0;is<=16;is++){const ws=is/16*Math.PI*2;_o.push(new E(Math.cos(ws)*xo,vo,Math.sin(ws)*xo))}const ys=new Qe().setFromPoints(_o),ns=new Cm(ys,new Ui({color:4015418,transparent:!0,opacity:.4}));mt.add(ns)}}const $=new L(new It(.06,.04,.05),z(Ot));$.position.set(0,.19,.165),ue.add($);const vt=new L(a,z(dt));vt.position.set(0,.06,.02),vt.rotation.x=Math.PI*.5,vt.castShadow=!0,ue.add(vt);const Bt=new L(r,z(I));Bt.position.set(0,.06,.15),Bt.castShadow=!0,ue.add(Bt);const te=new L(new It(.23,.045,.04),new Tt({color:1975080,roughness:.32,metalness:.62}));te.position.set(0,.155,.155),te.rotation.x=.35,ue.add(te);const Jt=new L(new It(.21,.035,.015),new Tt({color:3824186,roughness:.18,metalness:.55,transparent:!0,opacity:.72}));Jt.position.set(0,.16,.17),Jt.rotation.x=.35,ue.add(Jt);const qt=new L(new He(.0035,.0035,.11,6),z(C));qt.position.set(.11,.04,.12),qt.rotation.z=Math.PI*.38,qt.rotation.x=.22,ue.add(qt);const he=new L(new ln(.012,8,6),z(I));he.position.set(.09,.015,.16),ue.add(he);const _e=new L(new He(.002,.002,.09,6),z(I));_e.position.set(.13,.08,.06),_e.rotation.z=.55,ue.add(_e);const Fe=new L(new He(.14,.17,.12,10),z(I));Fe.position.set(0,-.04,0),Fe.castShadow=!0,ue.add(Fe);const N=new Ne;N.position.set(-.33,.2,.02),Y.add(N);const gt=new L(g,z(Ht));gt.position.set(0,-.15,0),gt.castShadow=!0,N.add(gt);const j=new L(M,z(I));j.position.set(0,-.3,0),j.rotation.z=Math.PI*.5,j.castShadow=!0,N.add(j);const J=new Ne;J.position.set(0,-.3,0),N.add(J);const Lt=new L(c,z(Ht));Lt.position.set(0,-.07,0),Lt.castShadow=!0,J.add(Lt);const zt=new L(f,z(St));zt.position.set(0,-.14,0),zt.castShadow=!0,J.add(zt);const re=new L(ut,z(I));re.position.set(0,-.05,.075),re.castShadow=!0,J.add(re);const le=new L(P,z(St));le.position.set(0,-.3,0),le.castShadow=!0,J.add(le);const Kt=[];{const Pn=new It(.018,.042,.018);for(let hn=0;hn<4;hn++){const nn=new L(Pn,z(St));nn.position.set(-.027+hn*.018,-.3-.065,.035+(hn===1||hn===2?.008:0)),nn.rotation.x=.22,nn.castShadow=!0,J.add(nn),Kt.push(nn)}const an=new L(new It(.02,.038,.02),z(St));an.position.set(-.042,-.3-.032,.018),an.rotation.z=.55,an.rotation.x=.12,J.add(an)}const me=new L(new It(.07,.045,.09),z(Ot));me.position.set(0,-.26,.045),J.add(me);const xe=new Ne;xe.position.set(.33,.2,.02),Y.add(xe);const We=new L(g,z(Ht));We.position.set(0,-.15,0),We.castShadow=!0,xe.add(We);const Le=new L(M,z(I));Le.position.set(0,-.3,0),Le.rotation.z=Math.PI*.5,Le.castShadow=!0,xe.add(Le);const Ee=new Ne;Ee.position.set(0,-.3,0),xe.add(Ee);const vn=new L(c,z(Ht));vn.position.set(0,-.07,0),vn.castShadow=!0,Ee.add(vn);const wn=new L(f,z(St));wn.position.set(0,-.14,0),wn.castShadow=!0,Ee.add(wn);const Ke=new L(ut,z(I));Ke.position.set(0,-.05,.075),Ke.castShadow=!0,Ee.add(Ke);const cn=new L(P,z(St));cn.position.set(0,-.3,0),cn.castShadow=!0,Ee.add(cn);const rn=[];{const Pn=new It(.018,.042,.018);for(let hn=0;hn<4;hn++){const nn=new L(Pn,z(St));nn.position.set(-.027+hn*.018,-.3-.065,.035+(hn===1||hn===2?.008:0)),nn.rotation.x=.22,nn.castShadow=!0,Ee.add(nn),rn.push(nn)}const an=new L(new It(.02,.038,.02),z(St));an.position.set(.042,-.3-.032,.018),an.rotation.z=-.55,an.rotation.x=.12,Ee.add(an),rn[1].rotation.x=.05}const Ye=new Ne;Ye.position.set(-.15,.78,0),H.add(Ye);const Zn=new L(v,z(Rt));Zn.position.set(0,-.22,0),Zn.castShadow=!0,Ye.add(Zn);const Vn=new L(U,z(I));Vn.position.set(0,-.42,.02),Vn.castShadow=!0,Ye.add(Vn);const Wn=new Ne;Wn.position.set(0,-.42,0),Ye.add(Wn);const Bi=new L(w,z(Rt));Bi.position.set(0,-.2,0),Bi.castShadow=!0,Wn.add(Bi);const di=new L(R,z(Gt));di.position.set(0,-.4,.05),di.castShadow=!0,Wn.add(di);const Mi=new L(q,z(I));Mi.position.set(0,-.03,.11),Wn.add(Mi);const xt=new Ne;xt.position.set(.15,.78,0),H.add(xt);const ee=new L(v,z(Rt));ee.position.set(0,-.22,0),ee.castShadow=!0,xt.add(ee);const Vt=new L(U,z(I));Vt.position.set(0,-.42,.02),Vt.castShadow=!0,xt.add(Vt);const Ce=new Ne;Ce.position.set(0,-.42,0),xt.add(Ce);const Ue=new L(w,z(Rt));Ue.position.set(0,-.2,0),Ue.castShadow=!0,Ce.add(Ue);const pe=new L(R,z(Gt));pe.position.set(0,-.4,.05),pe.castShadow=!0,Ce.add(pe);const Pe=new L(q,z(I));Pe.position.set(0,-.03,.11),Ce.add(Pe);const mn=[-.13,-.044,.044,.13];for(let Pn of mn)for(let an=0;an<4;an++){const hn=new L(new It(.022,.082,.012),z(I));hn.position.set(Pn,.2-an*.075,.185),hn.castShadow=!0,O.add(hn);const nn=hn.clone();if(nn.position.z=.185,nn.position.y=-.06-an*.05,an<3||(nn.position.y=-.21,nn.position.z=.175),wt.add(nn),an<4){const Ms=new L(new It(.32,.008,.008),z(I));Ms.position.set(0,.2-an*.075,.186),O.add(Ms)}}const un=new L(new It(.09,.14,.06),z(Ot));un.position.set(.19,-.08,.11),Y.add(un);const gn=new L(rt,z(Ot));gn.position.set(.19,.055,.11),Y.add(gn);const Xn=new L(new He(.002,.002,.08,6),z(I));Xn.position.set(.19,-.02,.13),Xn.rotation.z=.35,Y.add(Xn);const ai=new L(new vi(.15,.022,6,12),z(Ht));ai.rotation.x=Math.PI*.5,ai.position.set(0,-.02,0),Y.add(ai);const we=new Ne;we.position.set(.06,.02,.34),we.rotation.y=-.06,Y.add(we);const ve=new L(tt,z(Ot));ve.position.set(0,-.02,.04),ve.castShadow=!0,we.add(ve);const Je=new L(y,z(I));Je.position.set(0,-.1,-.04),Je.rotation.x=.12,Je.castShadow=!0,we.add(Je);const ki=new L(b,z(Ot));ki.position.set(0,.055,-.02),ki.castShadow=!0,we.add(ki);const fi=new L(new He(.012,.012,.02,8),new Tt({color:7054264,roughness:.12,metalness:.85,transparent:!0,opacity:.55}));fi.rotation.z=Math.PI*.5,fi.position.set(0,.055,.08),we.add(fi);const De=new L(W,z(I));De.position.set(0,-.01,-.3),De.castShadow=!0,we.add(De);const $t=new L(nt,z(Ot));$t.rotation.x=Math.PI*.5,$t.position.set(0,.01,.38),$t.castShadow=!0,we.add($t);const Ze=new L(new He(.014,.014,.05,8),z(Ot));Ze.rotation.x=Math.PI*.5,Ze.position.set(0,.01,.58),we.add(Ze);const Nn=new L(new It(.028,.09,.035),z(I));Nn.position.set(0,-.06,.22),Nn.rotation.x=.12,we.add(Nn);const Rn=new _n;Rn.position.set(0,.01,.61),we.add(Rn);const pu=[new E(-.18,.22,-.08),new E(-.04,.05,.18),new E(.02,-.02,.32),new E(.05,-.04,-.22)],mu=new Qe().setFromPoints(pu),Ia=new Ui({color:1842716,linewidth:2}),Ua=new Ni(mu,Ia);Y.add(Ua);const gu=[new E(.18,.18,-.06),new E(.04,.04,.1)],Na=new Ni(new Qe().setFromPoints(gu),Ia);Y.add(Na);const Fa=[];function Oa(Pn){Pn.isMesh&&Fa.push(Pn),Pn.children.forEach(Oa)}return Oa(H),{root:H,torso:Y,chest:O,ab:wt,headGroup:ue,jaw:Ve,lShoulder:N,rShoulder:xe,lElbow:J,rElbow:Ee,lTwist:Lt,rTwist:vn,lElbowJoint:j,rElbowJoint:Le,lHip:Ye,rHip:xt,lKnee:Wn,rKnee:Ce,lKneeBox:Vn,rKneeBox:Vt,lBoot:di,rBoot:pe,lKneePad:Mi,rKneePad:Pe,lPad:re,rPad:Ke,lFingers:Kt,rFingers:rn,rifle:we,rifleTip:Rn,sling:Ua,sling2:Na,maskPlane:Ae,strandGroup:mt,meshes:Fa}}const D=[];let T=0;function K(H){const Y=lt(),O={built:Y,group:Y.root,meshes:Y.meshes,hp:100,max:100,state:"idle",stateTimer:0,idleDur:.7+Math.random()*1.4,patrolTarget:null,burstCooldown:.6+Math.random()*.5,burstRemaining:0,burstInterval:0,strafeDir:Math.random()<.5?-1:1,strafeTimer:1.5+Math.random()*2,hitFlash:0,stagger:0,staggerDir:new E,staggerSpin:0,peekTimer:0,walkCycle:Math.random()*Math.PI*2,isDead:!1,deadTimer:0,deathDir:Math.random()<.5?1:-1,box:new Sn,losCooldown:0,hasLOS:!1,distToPlayer:999,origColors:new Map,baseY:H.y,fingerCurl:0,fingerCurlTarget:0,jawKick:0};Y.meshes.forEach(ot=>{ot.material&&ot.material.color&&O.origColors.set(ot,ot.material.color.clone()),ot.material&&"emissive"in ot.material&&O.origColors.set(ot.material,ot.material.emissive?ot.material.emissive.clone():new fe(0))}),O.group.position.copy(H),O.group.position.y=0,O.group.rotation.y=Math.random()*Math.PI*2;const wt=(ot,x)=>{if(O.isDead)return;O.hp=Math.max(0,O.hp-ot),O.hitFlash=.09,O.stagger=.22,O.staggerSpin=.22;const st=ge();O.staggerDir.copy(O.group.position).sub(st),O.staggerDir.y=0,O.staggerDir.lengthSq()<.01&&O.staggerDir.set(Math.random()-.5,0,Math.random()-.5),O.staggerDir.normalize().multiplyScalar(3.2),O.meshes.forEach(Ct=>{Ct.material&&(Ct.material.color&&Ct.material.color.set(16777215),"emissive"in Ct.material&&Ct.material.emissive&&Ct.material.emissive.set(7829367))}),O._recoilKick=.18,(O.state==="idle"||O.state==="patrol")&&(O.state="chase",O.stateTimer=0),O.hp<=0&&(O.isDead=!0,O.deadTimer=0,O.meshes.forEach(Ct=>{Ct.userData.isEnemy=!1}),O.group.userData.isEnemy=!1,Math.random()<.78&&F(O.group.position.clone()))};return O.meshes.forEach(ot=>{ot.userData.isEnemy=!0,ot.userData.hit=wt}),O.group.userData.isEnemy=!0,O.group.userData.hit=wt,O.group.userData._enemy=O,O.hitFn=wt,O.hit=wt,O.box.setFromObject(O.group),n.add(O.group),D.push(O),O}function _t(H){const Y=[...t];if(Y.length<3)for(let x=0;x<4;x++)Y.push(new E((Math.random()-.5)*38,0,(Math.random()-.5)*38));let O=null,wt=-1;for(let x of Y){const st=Math.hypot(x.x-H.x,x.z-H.z);if(D.some(se=>!se.isDead&&Math.hypot(se.group.position.x-x.x,se.group.position.z-x.z)<2.2))continue;let oe=st;st>12&&(oe+=8),oe+=Math.random()*2,st<7&&(oe-=20),oe>wt&&(wt=oe,O=x)}if(!O){const x=Math.random()*Math.PI*2,st=18+Math.random()*10;O=new E(H.x+Math.cos(x)*st,0,H.z+Math.sin(x)*st),O.x=Math.max(-27,Math.min(27,O.x)),O.z=Math.max(-27,Math.min(27,O.z))}const ot=O.clone();return ot.y=0,ot}{const H=new E(0,1.7,8);for(let Y=0;Y<(Xe?3:5);Y++){let O;Y<t.length?O=t[Y%t.length].clone():O=_t(H);let wt=0;for(;wt<8&&D.some(ot=>ot.group.position.distanceTo(O)<2);)O=_t(H),wt++;O.y=0,K(O)}}let Dt=2.5;function Ut(H,Y,O,wt,ot){const Ct=.018+(Math.max(0,(wt-4)*.0065)+wt*.0075),oe=new E().subVectors(O,Y).normalize(),se=new E().crossVectors(oe,S).normalize(),ue=new E().crossVectors(se,oe).normalize(),Te=(Math.random()-.5)*2*wt*Ct,Ge=(Math.random()-.5)*2*wt*Ct,Ie=O.clone().addScaledVector(se,Te).addScaledVector(ue,Ge),Ae=new E().subVectors(Ie,Y),Be=Ae.length();Ae.normalize(),Xt.set(Y,Ae),Xt.far=Be;const Ve=Xt.intersectObjects(ot,!1),A=Ve.length&&Ve[0].distance<Be-.2;let Z=!1;if(!A){const pt=new E().subVectors(Ie,Y),mt=pt.length();pt.normalize();const vt=new E().subVectors(O,Y).dot(pt);let Bt;vt<=0?Bt=Y.clone():vt>=mt?Bt=Ie.clone():Bt=Y.clone().addScaledVector(pt,vt);const te=Bt.distanceTo(O),Jt=new E(O.x,1.68,O.z),qt=Bt.distanceTo(Jt);(te<.42||qt<.24)&&(Z=!0),Ie.distanceTo(O)<.48&&(Z=!0)}const ht=A?Y.clone().addScaledVector(Ae,Ve[0].distance-.04):Ie.clone();if(ie(Y,ht,Z&&!A),H.built.rifle.position.z-=.04,setTimeout(()=>{H.built.rifle&&(H.built.rifle.position.z+=.04)},60),Z&&!A){ye(8);const pt=document.getElementById("status");pt&&(pt.textContent="HIT!",pt.style.color="#ff6b6b",setTimeout(()=>{pt.textContent="READY",pt.style.color=""},120))}}return{update(H,Y){if(Wt.tier==="low"&&!this.__shadowPatched){this.__shadowPatched=!0;try{n.traverse(ot=>{if(!(!ot.isMesh||!ot.geometry))try{ot.geometry.boundingSphere||ot.geometry.computeBoundingSphere(),ot.geometry.boundingSphere.radius<.18&&ot.castShadow&&(ot.castShadow=!1,ot.receiveShadow=!1)}catch{}})}catch{}}const O=ge(Y),wt=new E(O.x,1.62,O.z);if(T+=H,kt-=H,kt<=0&&(Pt=Yt(),kt=Xe?.65:.25,window._enemiesObstacles=Pt,window._obsCache=Pt,window._obsCacheT=performance.now()),Dt-=H,Dt<=0){const ot=D.filter(x=>!x.isDead).length;if(ot<(Xe?2:5)){const x=_t(O);K(x),Dt=2.5}else if(ot<(Xe?3:6)&&Math.random()<.35){const x=_t(O);K(x),Dt=2.5}else if(Dt=2.5,ot<(Xe?2:5)){const x=_t(O);K(x)}}for(let ot=jt.length-1;ot>=0;ot--){const x=jt[ot];x.userData.age+=H;const st=x.userData.age/x.userData.life;if(st>=1){n.remove(x),x.geometry&&x.geometry.dispose(),jt.splice(ot,1);continue}const Ct=1-st;x.isLine?x.material.opacity=Ct*.92:x.material&&(x.material.opacity=Ct*.95,x.userData.isSpark&&x.scale.setScalar(1+st*1.8))}for(const ot of B)ot.rotation.y+=H*1.2,ot.position.y=.14+Math.sin(T*2.6+ot.userData.birth)*.045,ot.material.emissiveIntensity!==void 0&&(ot.material.emissiveIntensity=.18+Math.sin(T*4.2)*.07);ct(O);for(let ot=D.length-1;ot>=0;ot--){const x=D[ot],st=x.built;if(x.isDead||x.box.setFromObject(x.group),x.isDead){x.deadTimer+=H;const $=x.deadTimer,vt=.38;if($<vt){const Bt=Ft(Math.min(1,$/vt));if(x.group.rotation.z=x.deathDir*Math.PI*.5*Bt,x.group.rotation.x=Math.sin(Bt*Math.PI)*.18,x.stagger>0){const te=Math.min(H*5,1)*(1-Bt);x.group.position.addScaledVector(x.staggerDir,te*.42),x.stagger-=H}}else{x.group.rotation.z=x.deathDir*Math.PI*.5;const Bt=($-vt)/2.62,te=Math.max(0,1-Bt);if(x.meshes.forEach(Jt=>{Jt.material&&(Jt.material.transparent||(Jt.material.transparent=!0),Jt.material.opacity=te,Jt.material.emissive&&Jt.material.emissive.setHex(0))}),$>=3){n.remove(x.group),D.splice(ot,1);continue}}continue}if(x.hitFlash>0)if(x.hitFlash-=H,x.hitFlash<=0)x.hitFlash=0,x.meshes.forEach($=>{if(!$.material)return;const vt=x.origColors.get($);vt&&$.material.color&&$.material.color.copy(vt);const Bt=x.origColors.get($.material);Bt&&$.material.emissive&&$.material.emissive.copy(Bt)});else{const $=1-x.hitFlash/.09;if($>.55){const vt=($-.55)/.45;x.meshes.forEach(Bt=>{if(!Bt.material||!Bt.material.color)return;const te=x.origColors.get(Bt);if(te&&(Bt.material.color.lerpColors(new fe(16777215),te,vt),Bt.material.emissive)){const Jt=x.origColors.get(Bt.material);Jt&&Bt.material.emissive.lerpColors(new fe(7829367),Jt,vt)}})}}x._recoilKick&&x._recoilKick>0&&(x._recoilKick-=H*2.6,x._recoilKick<0&&(x._recoilKick=0));const Ct=new E;let oe=0;for(const $ of D){if($===x||$.isDead)continue;const vt=x.group.position.distanceTo($.group.position);if(vt<1.55&&vt>.01){const Bt=new E().subVectors(x.group.position,$.group.position).normalize().multiplyScalar((1.55-vt)*3.2*H);Ct.add(Bt),oe++}}if(oe>0&&x.group.position.add(Ct),x.losCooldown-=H,x.losCooldown<=0){x.losCooldown=(Xe?.32:.11)+Math.random()*(Xe?.16:.08);const $=new E(x.group.position.x,1.5,x.group.position.z);x.hasLOS=At($,wt,Pt),x.distToPlayer=Math.hypot(O.x-x.group.position.x,O.z-x.group.position.z)}if(x.stagger>0){const $=Math.min(x.stagger,H*4.8);x.group.position.addScaledVector(x.staggerDir,$),x.group.rotation.y+=x.staggerSpin*H*2.2,x.group.rotation.z+=x.staggerSpin*H*1.6,x.stagger-=H*3.6,x.staggerSpin-=H*1.8,x.stagger<0&&(x.stagger=0),x.staggerSpin<0&&(x.staggerSpin=0)}const se=Xe?6:18;if(x.fingerCurl+=(x.fingerCurlTarget-x.fingerCurl)*(1-Math.exp(-se*H)),x.burstRemaining===0&&(x.fingerCurlTarget=Re.lerp(x.fingerCurlTarget,0,Math.min(1,H*(Xe?2:6)))),x.jawKick=Re.lerp(x.jawKick,0,Math.min(1,H*(Xe?3:9))),st.jaw){const $=!Xe&&x.burstRemaining>0?Math.sin(T*44)*.0021:0;st.jaw.position.y=.015-x.jawKick*.015+$,st.jaw.rotation.x=x.jawKick*.18}if(st.lFingers)for(let $=0;$<st.lFingers.length;$++){const vt=st.lFingers[$];vt.rotation.x=.22+x.fingerCurl*.65+($===1?-x.fingerCurl*.12:0)}if(st.rFingers)for(let $=0;$<st.rFingers.length;$++){const vt=st.rFingers[$],Bt=$===1?.05:.22;vt.rotation.x=Bt+x.fingerCurl*.62}const ue=x.hasLOS,Te=x.distToPlayer;let Ge=null,Ie=null;if(!ue&&Te<14&&x.peekTimer!==void 0&&(x.peekTimer-=H,x.peekTimer<=0)){let $=null,vt=-999;for(const Bt of ne){const te=Bt.distanceTo(x.group.position);if(te>9||te<.6)continue;const Jt=new E(Bt.x,1.5,Bt.z);if(!At(Jt,wt,Pt))continue;const qt=-te*.6-Math.abs(Bt.distanceTo(O)-Te)*.2+Math.random()*.5;qt>vt&&(vt=qt,$=Bt)}if($){Ie=$.clone();const Bt=new E().subVectors(Ie,x.group.position);Bt.y=0,Bt.length()>.2&&(Ge=Bt.normalize())}x.peekTimer=.45+Math.random()*.55}ue?Te<14&&Te>7.5?x.state!=="chase"&&x.state!=="attack"&&(x.state="chase",x.stateTimer=0):Te<=7.5?x.state!=="attack"&&(x.state="attack",x.stateTimer=0,x.strafeTimer=.8+Math.random()*1.6):Te>=18?x.state==="idle"?(x.state="patrol",x.stateTimer=0):x.state!=="chase"&&(x.state="chase",x.stateTimer=0):(x.state==="idle"||x.state==="patrol")&&(x.state="chase",x.stateTimer=0):(x.state==="attack"||x.state==="chase"?(x.stateTimer+=H,x.stateTimer>1.8&&(x.state="patrol",x.stateTimer=0,x.patrolTarget=null)):x.state!=="patrol"&&(x.state="patrol",x.stateTimer=0),Ge&&Te<14&&(x.state="chase",x.stateTimer=0));let Ae=new E,Be=x.group.rotation.y,Ve=!1,A=0;if(x.state==="idle")x.stateTimer+=H,x.stateTimer>x.idleDur&&(x.state="patrol",x.stateTimer=0,x.patrolTarget=null,x.idleDur=.9+Math.random()*1.2),ue&&Te<16&&(x.state="chase",x.stateTimer=0),ue&&(Be=Math.atan2(O.x-x.group.position.x,O.z-x.group.position.z));else if(x.state==="patrol"){if(x.stateTimer+=H,!x.patrolTarget||x.group.position.distanceTo(x.patrolTarget)<.9||x.stateTimer>9){let $=null;if(Ie&&!ue&&Te<14)$=Ie;else if(Math.random()<.55&&ne.length&&Math.random()<.35)$=ne[Math.floor(Math.random()*ne.length)].clone();else if(Math.random()<.62&&t.length){const vt=t[Math.floor(Math.random()*t.length)].clone();vt.x+=(Math.random()-.5)*6,vt.z+=(Math.random()-.5)*6,vt.y=0,$=vt}else if(Pt.length){const vt=Pt[Math.floor(Math.random()*Pt.length)],Bt=new E;vt.getWorldPosition(Bt),$=Bt.clone(),$.x+=(Math.random()-.5)*5,$.z+=(Math.random()-.5)*5,$.y=0,$.x=Math.max(-27,Math.min(27,$.x)),$.z=Math.max(-27,Math.min(27,$.z))}else $=new E((Math.random()-.5)*28,0,(Math.random()-.5)*28);x.patrolTarget=$,x.stateTimer=0}if(x.patrolTarget){const $=new E().subVectors(x.patrolTarget,x.group.position);$.y=0,$.length()>.15&&($.normalize(),Ae.copy($),Be=Math.atan2($.x,$.z),Ve=!0,A=.8),ue&&Te<13&&(x.state="chase",x.stateTimer=0)}}else if(x.state==="chase"){x.stateTimer+=H;const $=new E(O.x-x.group.position.x,0,O.z-x.group.position.z),vt=$.length();if(!ue&&Ge&&Te<14){const Bt=new E(-$.z,0,$.x).normalize().multiplyScalar(x.strafeDir);Ae.copy(Ge).multiplyScalar(.55).addScaledVector(Bt,.45),Ae.normalize(),Be=Math.atan2(Ae.x,Ae.z),Ve=!0,A=.9}else if(vt>.2&&($.normalize(),Ae.copy($),Be=Math.atan2($.x,$.z)),Ve=vt>2.1,A=1.9,ue&&vt<7.8&&(x.state="attack",x.stateTimer=0,x.strafeTimer=1+Math.random()*1.4),!ue&&vt>3){const Bt=new E(x.group.position.x,.9,x.group.position.z),te=Ae.clone().multiplyScalar(1.2).add(Bt);At(Bt,te,Pt)||(Ae.set(-$.z,0,$.x).multiplyScalar(x.strafeDir),Be=Math.atan2(Ae.x,Ae.z),Te<14&&(A=.9))}}else if(x.state==="attack"){x.stateTimer+=H,x.strafeTimer-=H;const $=new E(O.x-x.group.position.x,0,O.z-x.group.position.z),vt=$.length();if(Be=Math.atan2($.x,$.z),x.strafeTimer<=0){x.strafeDir*=-1,x.strafeTimer=1.1+Math.random()*1.9;const Jt=new E(-$.z,0,$.x).normalize().multiplyScalar(x.strafeDir*1.4).add(x.group.position),qt=new E(x.group.position.x,.9,x.group.position.z);At(qt,new E(Jt.x,.9,Jt.z),Pt)||(x.strafeDir*=-1)}const Bt=new E(-$.z,0,$.x).normalize().multiplyScalar(x.strafeDir);let te=0;if(vt>6.8?te=.45:vt<4.2&&(te=-.55),!ue&&Te<14){if(Ae.copy(Bt).multiplyScalar(.95).addScaledVector($.normalize(),Ge?.2:te*.5),Ae.lengthSq()>.01&&(Ae.normalize(),Ve=!0,A=.9),Ie){const Jt=new E().subVectors(Ie,x.group.position);Jt.y=0,Jt.length()<4&&Ae.copy(Jt.normalize())}}else Ae.copy(Bt).multiplyScalar(.92).addScaledVector($.normalize(),te),Ae.lengthSq()>.01&&(Ae.normalize(),Ve=!0,A=1.35);ue?x.stateTimer=0:(x.stateTimer+=H,x.stateTimer>1.2&&(x.state="chase",x.stateTimer=0))}if(Ve&&Ae.lengthSq()>.001){const $=Ae.clone().multiplyScalar(A*H),vt=x.group.position.clone().add($);vt.x=Math.max(-28,Math.min(28,vt.x)),vt.z=Math.max(-28,Math.min(28,vt.z));const Bt=new E(x.group.position.x,.45,x.group.position.z),te=new E(vt.x,.45,vt.z);if(At(Bt,te,Pt))x.group.position.copy(vt);else{const Jt=new E(x.group.position.x+$.x,x.group.position.y,x.group.position.z),qt=new E(x.group.position.x,x.group.position.y,x.group.position.z+$.z),he=At(Bt,new E(Jt.x,.45,Jt.z),Pt),_e=At(Bt,new E(qt.x,.45,qt.z),Pt);he?x.group.position.x=Jt.x:_e?x.group.position.z=qt.z:(x.strafeDir*=-1,x.strafeTimer=.5)}x.group.position.y=0}let Z=Be-x.group.rotation.y;for(;Z>Math.PI;)Z-=Math.PI*2;for(;Z<-Math.PI;)Z+=Math.PI*2;const ht=x.state==="attack"?6.2:x.state==="chase"?5:3.2;if(x.group.rotation.y+=Z*Math.min(1,ht*H),x.state==="attack"||x.state==="chase"&&ue&&Te<11)if(x.burstRemaining>0){if(x.burstInterval-=H,x.burstInterval<=0){x.burstInterval=.095,st.rifleTip.getWorldPosition(de);const $=de.clone();$.y=Math.max($.y,1.32),Ut(x,$,wt,Te,Pt),x.jawKick=.42,x.fingerCurlTarget=.42,x.burstRemaining--,x.burstRemaining===0&&(x.burstCooldown=1.1)}}else x.burstCooldown-=H,x.burstCooldown<=0&&ue&&(x.burstRemaining=3,x.burstInterval=0);else x.burstCooldown=Math.min(x.burstCooldown,.35),x.burstRemaining>0&&(x.burstRemaining=0);if(Ve&&!x.isDead){x.walkCycle+=H*(x.state==="chase"?9.2:x.state==="attack"?7.8:6.2);const $=x.walkCycle,vt=Math.sin($),Bt=Math.sin($*.5);st.lHip.rotation.x=vt*.58,st.rHip.rotation.x=-vt*.58,st.lKnee.rotation.x=Math.max(0,vt*.72-.12),st.rKnee.rotation.x=Math.max(0,-vt*.72-.12),st.lHip.rotation.z=vt*.06,st.rHip.rotation.z=-vt*.06;const te=Math.max(0,Math.sin($))*.04,Jt=Math.max(0,Math.sin($+Math.PI))*.04;st.lBoot.position.y=-.4+te,st.rBoot.position.y=-.4+Jt,st.lBoot.rotation.x=-te*1.2,st.rBoot.rotation.x=-Jt*1.2,st.lKnee.position.y=-.42+te*.25,st.rKnee.position.y=-.42+Jt*.25;const qt=.18;st.lShoulder.rotation.x=.55+vt*qt*.6,st.rShoulder.rotation.x=.58-vt*qt*.6,st.lTwist.rotation.y=vt*.22,st.rTwist.rotation.y=-vt*.22,st.lElbow.rotation.z=vt*.06,st.rElbow.rotation.z=-vt*.06,st.torso.position.y=1.14+Math.abs(Math.sin($))*.035,st.torso.rotation.z=vt*.05,st.torso.rotation.x=.05+Math.abs(vt)*.03,st.headGroup.rotation.y=Bt*.08,st.headGroup.rotation.x=Math.abs(vt)*.04;const he=Ae.x*.18+vt*.05;if(st.torso.rotation.z=vt*.05+he*Math.sin($*1.2)*.22+(x._strafeSig||0)*.12,st.headGroup.rotation.z=-he*.08,st.headGroup.userData&&st.headGroup.userData.brow){const _e=Math.max(0,Math.sin($))*.006;st.headGroup.userData.brow.position.y=.082-_e*.3}}else{const $=T*1.2+x.walkCycle*.15,vt=Math.sin(T*1.2*2*Math.PI)*.015;st.torso.scale.set(1,1+vt,1),st.chest.scale.set(1,1+vt*.6,1),st.torso.position.y=1.14+vt*.35,st.torso.rotation.x=Math.sin($*.7)*.02,st.torso.rotation.z=Math.sin($*.55)*.015,st.headGroup.rotation.y=Math.sin($*.62)*.07,st.headGroup.rotation.x=Math.sin($*.9)*.02+vt*.3,st.lBoot.position.y=Re.lerp(st.lBoot.position.y,-.4,H*6),st.rBoot.position.y=Re.lerp(st.rBoot.position.y,-.4,H*6),st.lBoot.rotation.x=Re.lerp(st.lBoot.rotation.x,0,H*6),st.rBoot.rotation.x=Re.lerp(st.rBoot.rotation.x,0,H*6),st.lHip.rotation.x=Re.lerp(st.lHip.rotation.x,0,H*4),st.rHip.rotation.x=Re.lerp(st.rHip.rotation.x,0,H*4),st.lKnee.rotation.x=Re.lerp(st.lKnee.rotation.x,0,H*4),st.rKnee.rotation.x=Re.lerp(st.rKnee.rotation.x,0,H*4),st.lTwist.rotation.y=Re.lerp(st.lTwist.rotation.y,0,H*4),st.rTwist.rotation.y=Re.lerp(st.rTwist.rotation.y,0,H*4),st.lShoulder.rotation.x=Re.lerp(st.lShoulder.rotation.x,.55,H*3),st.rShoulder.rotation.x=Re.lerp(st.rShoulder.rotation.x,.58,H*3),x.state==="attack"&&(st.torso.rotation.y=Math.sin($*.8)*.03)}x._recoilKick&&(st.torso.rotation.x-=x._recoilKick*.55,st.headGroup.rotation.x-=x._recoilKick*.32)}},_getEnemies(){return D},_getCount(){return D.filter(H=>!H.isDead).length}}}const Mn=Wt.tier==="low";function vc(n,t,e,i){let o=0,s=500,a=[],r=0,l=0,u="idle",h=0,d=0,m=!1,p=0,_=[],g=null,f=null,c=null,M=null,v=null,w=0,U=null,P=!1;const R=18,tt=32,y=5;let b=0,W=null;function nt(B){const F=45+10*B,ct=Math.floor(F*Math.pow(1.12,Math.max(0,B-1))),lt=Math.min(2.8,1.2+.06*B);return{health:ct,speed:lt}}function yt(){if(W)return W;let B=[];try{t&&typeof t.getSpawnPointsTerrain=="function"?B=t.getSpawnPointsTerrain():t&&Array.isArray(t.spawnPoints)&&(B=t.spawnPoints)}catch{}const F=[],ct=Mn?8:10;for(let lt=0;lt<ct;lt++){const D=lt/ct*Math.PI*2+Math.random()*.22,T=26+Math.random()*1.8,K=Math.cos(D)*T,_t=Math.sin(D)*T,Dt=Math.max(-28,Math.min(28,K)),Ut=Math.max(-28,Math.min(28,_t));F.push(new E(Dt,.1,Ut))}if(B&&B.length)for(let lt=0;lt<Math.min(4,B.length);lt++){const D=B[lt];D&&D.isVector3?F.push(D.clone()):D&&typeof D.x=="number"&&F.push(new E(D.x,.1,D.z))}return W=F.slice(0,Mn?8:12),W}function k(){if(c)return;c=document.createElement("div"),c.id="zombieHUD",c.style.cssText="position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;";const B=document.createElement("div");B.id="zRound",B.style.cssText="font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);",B.textContent="ROUND 0";const F=document.createElement("div");F.id="zLeft",F.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",F.textContent="ZOMBIES LEFT: 0";const ct=document.createElement("div");ct.id="zPoints",ct.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",ct.textContent="POINTS: 500",c.append(B,F,ct);const lt=document.createElement("div");lt.id="zPerks",lt.style.cssText="display:flex;gap:8px;margin-top:10px;";function D(Ut,H,Y){const O=document.createElement("div");O.style.cssText="display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid "+Y+";border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);";const wt=document.createElement("div");wt.style.cssText="width:22px;height:22px;border-radius:4px;background:"+Y+";display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;",wt.textContent=Ut;const ot=document.createElement("div");return ot.style.cssText="font-size:10px;font-weight:800;letter-spacing:0.5px;color:"+Y+";line-height:1;",ot.innerHTML=H+'<br><span style="opacity:0.7;font-weight:600">'+(H==="JUGGER-NOG"?"HP+":"RELOAD+")+"</span>",O.append(wt,ot),O}const T=D("♥","JUGGER-NOG","#e63946"),K=D("⚡","SPEED COLA","#2ec4b6");T.style.opacity="0.82",K.style.opacity="0.82",T.title="Juggernog - Placeholder perk (increased health)",K.title="Speed Cola - Placeholder perk (faster reload)",lt.append(T,K),c.appendChild(lt),M={roundEl:B,leftEl:F,pointsEl:ct,perks:lt};const _t=document.getElementById("ui");_t?_t.appendChild(c):document.body.appendChild(c);const Dt=document.createElement("div");Dt.id="zRoundBanner",Dt.style.cssText="position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;",Dt.textContent="ROUND 1",_t?_t.appendChild(Dt):document.body.appendChild(Dt),v=document.createElement("div"),v.id="zBarrierPrompt",v.style.cssText="position:absolute;left:50%;top:62%;transform:translateX(-50%);z-index:7;pointer-events:none;background:rgba(10,14,18,0.88);color:#fff;padding:8px 14px;border-radius:6px;font-size:12px;font-weight:800;letter-spacing:0.6px;border:1px solid rgba(255,255,255,0.18);backdrop-filter:blur(6px);opacity:0;transition:opacity 0.18s;box-shadow:0 4px 14px rgba(0,0,0,0.5);",v.textContent="Hold [F] to Repair Barrier",_t?_t.appendChild(v):document.body.appendChild(v),c._banner=Dt}function ut(B){k();const F=c._banner;if(F){F.textContent="ROUND "+B,F.style.opacity="1",F.style.transform="translate(-50%,-50%) scale(1.08)";try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}setTimeout(()=>{F.style.opacity="0",F.style.transform="translate(-50%,-50%) scale(0.88)"},1800);try{window.__hudPushKill&&window.__hudPushKill("ROUND "+B)}catch{}}}function q(){if(M||k(),M){M.roundEl.textContent="ROUND "+o;const B=a.filter(ct=>!ct.isDead).length,F=B+(r-l>0?r-l:0);M.leftEl.textContent="ZOMBIES LEFT: "+(B+Math.max(0,r-l)),M.leftEl.style.color=F<=3&&F>0?"#ffcc33":"#fff",M.pointsEl.textContent="POINTS: "+s}}function rt(B,F){if(s=Math.max(0,s+B),q(),F&&F.hit)try{window.__hudDamageNumber&&window.__hudDamageNumber(B,{x:50+(Math.random()*10-5),y:48})}catch{}B>0&&M&&M.pointsEl&&(M.pointsEl.style.transform="scale(1.12)",M.pointsEl.style.color="#a8ff7a",setTimeout(()=>{M.pointsEl&&(M.pointsEl.style.transform="scale(1)",M.pointsEl.style.color="#7CFF7A")},140))}function V(){const B=Mn?128:256,F=document.createElement("canvas");F.width=F.height=B;const ct=F.getContext("2d");ct.fillStyle="#5e6b5a",ct.fillRect(0,0,B,B);const lt=["#4a5546","#6b7a65","#3f463d","#7a8a74","#525e4f"];for(let T=0;T<(Mn?18:42);T++){const K=Math.random()*B,_t=Math.random()*B,Dt=9+Math.random()*20,Ut=6+Math.random()*14;ct.fillStyle=lt[T%lt.length],ct.globalAlpha=.45+Math.random()*.25,ct.beginPath(),ct.ellipse(K,_t,Dt,Ut,Math.random()*Math.PI,0,Math.PI*2),ct.fill()}ct.globalAlpha=1;for(let T=0;T<(Mn?900:2600);T++){const K=Math.random()*B,_t=Math.random()*B;ct.fillStyle=Math.random()<.5?"rgba(0,0,0,0.09)":"rgba(255,255,255,0.06)",ct.fillRect(K,_t,1,1)}for(let T=0;T<4;T++){const K=Math.random()*B*.7+B*.15,_t=Math.random()*B*.6+B*.2,Dt=7+Math.random()*14,Ut=ct.createRadialGradient(K,_t,0,K,_t,Dt);Ut.addColorStop(0,"rgba(92,18,18,0.52)"),Ut.addColorStop(.45,"rgba(72,14,14,0.32)"),Ut.addColorStop(1,"rgba(72,14,14,0)"),ct.fillStyle=Ut,ct.beginPath(),ct.arc(K,_t,Dt,0,Math.PI*2),ct.fill(),ct.fillStyle="rgba(88,18,18,0.38)",ct.fillRect(K-1.2,_t+Dt*.3,2.2,6+Math.random()*9)}ct.strokeStyle="rgba(22,26,22,0.55)",ct.lineWidth=1.1;for(let T=0;T<3;T++){const K=Math.random()*B,_t=Math.random()*B*.7+10;ct.beginPath(),ct.moveTo(K,_t),ct.lineTo(K+8+Math.random()*16,_t+2+Math.random()*6),ct.lineTo(K+4+Math.random()*12,_t+10+Math.random()*10),ct.stroke(),ct.fillStyle="rgba(18,22,18,0.9)",ct.beginPath(),ct.arc(K+4,_t+6,1.5,0,Math.PI*2),ct.fill()}ct.strokeStyle="rgba(0,0,0,0.18)",ct.lineWidth=.6,ct.setLineDash([3,4]);for(let T=12;T<B;T+=28)ct.beginPath(),ct.moveTo(0,T),ct.lineTo(B,T),ct.stroke();ct.setLineDash([]);const D=new qn(F);return D.wrapS=D.wrapT=ti,D.colorSpace=fn,D.anisotropy=Mn?1:4,D}const Mt=V(),X=new Tt({color:9083782,roughness:.88,metalness:.03}),Et=new Tt({color:7241067,roughness:.9,metalness:.02}),Nt=new Tt({map:Mt,roughness:.96,metalness:.02,color:16777215}),G=new Tt({map:Mt.clone(),roughness:.96,metalness:.02,color:14540253});try{G.map.repeat.set(.9,.9)}catch{}const et=new Tt({color:16720384,emissive:16718344,emissiveIntensity:2.2,roughness:.35,metalness:.1}),it=new dn({color:16726546,transparent:!0,opacity:.72}),Q=new Tt({color:4853776,roughness:.42,metalness:.08,emissive:2755082,emissiveIntensity:.22}),dt=new Tt({color:13155496,roughness:.78,metalness:.05});function bt(B,F){return po?new po(B,F,Mn?4:6,Mn?6:10):new He(B,B,F,Mn?6:10)}const Ht=new ln(.19,Mn?7:14,Mn?5:10),at=new It(.52,.6,.3),ft=bt(.095,.26),I=bt(.082,.24),Ot=bt(.128,.36),St=bt(.11,.34),Rt=new ln(.082,Mn?5:8,Mn?4:6),Gt=new It(.17,.11,.27),Me=new ln(.038,Mn?4:6,Mn?4:6);function Zt(){const B=new Ne,F=new L(at,Nt.clone());F.position.set(0,1.08,0),F.castShadow=Wt.tier!=="low",F.receiveShadow=!0,F.material.color.offsetHSL((Math.random()-.5)*.04,0,(Math.random()-.5)*.08);const ct=new L(new In(.11,8),Q.clone());ct.position.set(.06,.08,.151),ct.rotation.y=0,Math.random()<.72&&F.add(ct),B.add(F);const lt=new Ne;lt.position.set(0,.38,.02),F.add(lt);const D=new L(Ht,X.clone());D.position.set(0,.13,.02),D.castShadow=!0,lt.add(D);const T=Math.random();if(T<.35){const vt=new L(new ln(.07,6,5,0,Math.PI*2,0,Math.PI*.55),dt.clone());vt.position.set(.08,.18,.08),vt.rotation.z=-.35,vt.scale.set(1,.9,.8),lt.add(vt),D.material.color.setHex(8030840)}else T<.55&&(D.scale.set(1,.92,.96),D.position.y=.1);const K=new L(Me,et.clone());K.position.set(-.068,.14,.145),lt.add(K);const _t=K.clone();_t.position.x=.068,lt.add(_t);const Dt=new L(new ln(.058,6,6),it.clone());Dt.position.copy(K.position),Dt.position.z+=.02,Dt.scale.set(1,1,.6),lt.add(Dt);const Ut=Dt.clone();Ut.position.copy(_t.position),Ut.position.z+=.02,lt.add(Ut);const H=new L(new It(.11,.04,.06),Et.clone());H.position.set(0,.01,.11),lt.add(H),lt.userData.jaw=H,lt.userData.eyes=[K,_t],lt.userData.glow=[Dt,Ut];const Y=new Ne;Y.position.set(-.31,.14,0),F.add(Y);const O=new L(ft,Nt.clone());O.position.set(0,-.14,0),O.castShadow=!0,Y.add(O);const wt=new Ne;wt.position.set(0,-.26,0),Y.add(wt);const ot=new L(I,X.clone());let x=Math.random()<.18;x&&(ot.material=dt.clone(),ot.scale.set(.88,.92,.88)),ot.position.set(0,-.15,0),wt.add(ot);const st=new L(Rt,x?dt.clone():X.clone());if(st.position.set(0,-.22,0),wt.add(st),x){const vt=new L(new ln(.05,5,5),Q.clone());vt.position.set(0,.06,0),st.add(vt)}const Ct=new Ne;Ct.position.set(.31,.14,0),F.add(Ct);const oe=new L(ft,Nt.clone());oe.position.set(0,-.14,0),oe.castShadow=!0,Ct.add(oe);const se=new Ne;se.position.set(0,-.26,0),Ct.add(se);const ue=new L(I,X.clone());let Te=Math.random()<.18;Te&&(ue.material=dt.clone(),ue.scale.set(.88,.92,.88)),ue.position.set(0,-.15,0),se.add(ue);const Ge=new L(Rt,Te?dt.clone():X.clone());Ge.position.set(0,-.22,0),se.add(Ge);const Ie=new Ne;Ie.position.set(-.16,-.3,0),F.add(Ie);const Ae=new L(Ot,G.clone());Ae.position.set(0,-.2,0),Ae.castShadow=!0,Ie.add(Ae);const Be=new Ne;Be.position.set(0,-.38,0),Ie.add(Be);const Ve=new L(St,G.clone());Ve.position.set(0,-.18,0),Be.add(Ve);const A=new L(Gt,new Tt({color:1711130,roughness:.82}));if(A.position.set(0,-.4,.05),Be.add(A),Math.random()<.55){const vt=new L(new qe(.09,.22),Nt.clone());vt.position.set(.08,-.12,.12),vt.rotation.y=Math.PI,vt.rotation.z=.15,vt.side=je,Ae.add(vt)}const Z=new Ne;Z.position.set(.16,-.3,0),F.add(Z);const ht=new L(Ot,G.clone());ht.position.set(0,-.2,0),ht.castShadow=!0,Z.add(ht);const pt=new Ne;pt.position.set(0,-.38,0),Z.add(pt);const mt=new L(St,G.clone());mt.position.set(0,-.18,0),pt.add(mt);const $=A.clone();if($.position.set(0,-.4,.05),pt.add($),Math.random()<.45){const vt=new L(new qe(.07,.18),Nt.clone());vt.position.set(-.09,-.15,.12),vt.rotation.y=Math.PI,vt.side=je,ht.add(vt)}return B.userData.refs={torso:F,headGroup:lt,head:D,jaw:H,eyes:[K,_t],glow:[Dt,Ut],shoulderL:Y,elbowL:wt,shoulderR:Ct,elbowR:se,hipL:Ie,kneeL:Be,hipR:Z,kneeR:pt,bootL:A,bootR:$},B}function C(){const B=[{pos:[11.8,0,6.6],rot:.12,label:"A"},{pos:[-9.2,0,-2],rot:Math.PI/2,label:"B"},{pos:[.2,0,13.8],rot:0,label:"C"}],F=new Tt({color:9075290,roughness:.92,metalness:.02}),ct=new Tt({color:7036490,roughness:.96}),lt=new Tt({color:5917234,roughness:.9});_=[];for(let D=0;D<B.length;D++){const T=B[D],K=new Ne;K.position.set(T.pos[0],0,T.pos[2]),K.rotation.y=T.rot,K.userData.isBarrier=!0,K.userData.barrierId=T.label,K.userData.hp=3,K.userData.maxHp=3,K.userData.isDestroyed=!1;const _t=new L(new It(.08,1.95,.32),lt);_t.position.set(-1.05,.97,0),_t.castShadow=!0,K.add(_t);const Dt=_t.clone();Dt.position.x=1.05,K.add(Dt);const Ut=new L(new It(2.18,.09,.32),lt);Ut.position.set(0,1.95,0),K.add(Ut);const H=new L(new It(2.18,.08,.32),lt);H.position.set(0,.05,0),K.add(H);const Y=[];for(let wt=0;wt<3;wt++){const ot=.45+wt*.52,x=new L(new It(1.92,.14,.06),wt%2?F:ct);x.position.set(0,ot,.04),x.castShadow=!0;const st=new L(new ln(.02,5,5),new Tt({color:2763306}));st.position.set(-.82,0,.04),x.add(st);const Ct=st.clone();Ct.position.x=.82,x.add(Ct),x.rotation.z=(Math.random()-.5)*.04,x.userData.plankIndex=wt,K.add(x),Y.push(x)}K.userData.planks=Y,K.userData.framePieces=[_t,Dt,Ut,H];const O=new L(new It(2.2,1.95,.34),new Tt({visible:!1}));O.position.set(0,.97,0),O.visible=!1,K.add(O);{const wt=document.createElement("canvas");wt.width=128,wt.height=32;const ot=wt.getContext("2d");ot.fillStyle="rgba(14,18,24,0.85)",ot.fillRect(0,0,128,32),ot.fillStyle="#ff3b3b",ot.font="bold 14px monospace",ot.textAlign="center",ot.fillText("BARRIER "+T.label,64,20);const x=new qn(wt),st=new ua({map:x,transparent:!0}),Ct=new oc(st);Ct.position.set(0,2.35,0),Ct.scale.set(1.6,.4,1),K.add(Ct),K.userData.labelSprite=Ct}n.add(K),_.push(K),t&&Array.isArray(t.colliders)&&K.userData.hp>0}}function S(B,F){if(!B||B.userData.isDestroyed)return;B.userData.hp=Math.max(0,B.userData.hp-F);const ct=B.userData.planks,lt=B.userData.hp;for(let D=0;D<ct.length;D++){const T=ct[D];if(D<lt)T.visible=!0,T.material.opacity=1,T.material.transparent=!1;else if(T.visible){T.visible=!1;const K=T.clone();K.visible=!0,K.position.copy(T.getWorldPosition(new E)),n.add(K),K.position.y=.06,K.rotation.z=Math.random()*.6-.3,K.rotation.x=Math.PI/2*.15,setTimeout(()=>{K.parent&&n.remove(K)},4500),Ft(T.getWorldPosition(new E))}}if(lt<=0){B.userData.isDestroyed=!0,B.userData.labelSprite&&(B.userData.labelSprite.material.opacity=.25);try{window.__hudPushKill&&window.__hudPushKill("BARRIER "+B.userData.barrierId+" DESTROYED")}catch{}}}function z(B){if(!B||B.userData.hp>=B.userData.maxHp)return;B.userData.hp++,B.userData.isDestroyed&&B.userData.hp>0&&(B.userData.isDestroyed=!1,B.userData.labelSprite&&(B.userData.labelSprite.material.opacity=1));const F=B.userData.planks,ct=B.userData.hp;for(let lt=0;lt<F.length;lt++)lt<ct&&(F[lt].visible=!0);try{window.__hudPushKill&&window.__hudPushKill("BARRIER "+B.userData.barrierId+" REPAIRED")}catch{}rt(10)}function Ft(B){const F=new Qe,ct=6,lt=new Float32Array(ct*3);for(let Dt=0;Dt<ct;Dt++)lt[Dt*3]=B.x+(Math.random()-.5)*.4,lt[Dt*3+1]=B.y+.2+Math.random()*.4,lt[Dt*3+2]=B.z+(Math.random()-.5)*.4;F.setAttribute("position",new Yn(lt,3));const D=new ur({color:9071418,size:.08,transparent:!0,opacity:.9}),T=new da(F,D);n.add(T);let K=0;const _t=setInterval(()=>{K+=.06,D.opacity=Math.max(0,.9-K*2),T.position.y+=.02,K>.45&&(clearInterval(_t),n.remove(T),F.dispose())},60)}function Pt(){const B=new E(2.5,.45,-7.5);B.x+=(Math.random()-.5)*2,B.z+=(Math.random()-.5)*2;const F=new Ne;F.position.copy(B),F.userData.isMysteryBox=!0;const ct=new Tt({color:1976890,roughness:.42,metalness:.32,emissive:662074,emissiveIntensity:.25}),lt=new Tt({color:2771578,roughness:.35,metalness:.45,emissive:1731327,emissiveIntensity:.85,transparent:!0,opacity:.92}),D=new L(new It(.95,.85,.95),ct);D.position.y=.42,D.castShadow=!0,D.receiveShadow=!0,F.add(D);const T=new L(new It(1.02,.22,1.02),lt);T.position.y=.96,T.castShadow=!0,F.add(T);{const Ut=document.createElement("canvas");Ut.width=128,Ut.height=128;const H=Ut.getContext("2d");H.clearRect(0,0,128,128),H.fillStyle="rgba(20,30,50,0.0)",H.fillRect(0,0,128,128),H.shadowColor="#1a6aff",H.shadowBlur=18,H.fillStyle="#aaccff",H.font="bold 86px monospace",H.textAlign="center",H.textBaseline="middle",H.fillText("?",64,68),H.shadowBlur=0,H.strokeStyle="rgba(80,120,255,0.85)",H.lineWidth=2.2,H.strokeRect(6,6,116,116);const Y=new qn(Ut),O=new dn({map:Y,transparent:!0,depthWrite:!1}),wt=new L(new qe(.72,.72),O);wt.position.set(0,.52,.51),F.add(wt);const ot=wt.clone();ot.rotation.y=Math.PI,ot.position.z=-.51,F.add(ot);const x=wt.clone();x.rotation.y=Math.PI/2,x.position.set(.51,.52,0),F.add(x);const st=wt.clone();st.rotation.y=-Math.PI/2,st.position.set(-.51,.52,0),F.add(st),F.userData.questionPlanes=[wt,ot,x,st]}const K=new It(.08,.65,.02),_t=new Tt({color:1731327,emissive:1731327,emissiveIntensity:1.8});for(let Ut=0;Ut<4;Ut++){const H=Ut*Math.PI/2,Y=new L(K,_t);Y.position.set(Math.cos(H)*.49,.45,Math.sin(H)*.49),Y.rotation.y=-H,F.add(Y)}const Dt=new Ri(1731327,Mn?.7:1.4,6,1.4);Dt.position.set(0,.9,0),F.add(Dt),f=Dt,F.userData.base=D,F.userData.lid=T,F.userData.light=Dt;{const Ut=document.createElement("canvas");Ut.width=256,Ut.height=48;const H=Ut.getContext("2d");H.fillStyle="rgba(10,16,28,0.88)",H.fillRect(0,0,256,48),H.fillStyle="#7ab8ff",H.font="bold 16px monospace",H.textAlign="center",H.fillText("MYSTERY BOX",128,18),H.fillStyle="rgba(180,200,255,0.85)",H.font="10px monospace",H.fillText("HOLD [F]  950 PTS  (PROTOTYPE FREE)",128,34);const Y=new qn(Ut),O=new ua({map:Y,transparent:!0}),wt=new oc(O);wt.position.set(0,1.75,0),wt.scale.set(2.1,.42,1),F.add(wt),F.userData.label=wt}n.add(F),g=F}function kt(){const B=yt(),F=B[Math.floor(Math.random()*B.length)].clone();F.x+=(Math.random()-.5)*1.2,F.z+=(Math.random()-.5)*1.2,F.x=Math.max(-28,Math.min(28,F.x)),F.z=Math.max(-28,Math.min(28,F.z));const ct=nt(o),lt=Zt();lt.position.copy(F),lt.position.y=0,lt.rotation.y=Math.atan2(e.getPosition().x-F.x,e.getPosition().z-F.z)+(Math.random()-.5)*.6;const D={id:++b,group:lt,maxHealth:ct.health,health:ct.health,speed:ct.speed,isDead:!1,deathTimer:0,hitFlash:0,stagger:0,staggerDir:new E,staggerSpin:0,walkCycle:Math.random()*Math.PI*2,swayOffset:Math.random()*Math.PI*2,attackCooldown:0,barrierCooldown:0,barrierTarget:null,vel:new E,origColors:new Map,damage:14+Math.floor(o*.7)};return lt.traverse(T=>{T.isMesh&&T.material&&T.material.color&&(D.origColors.set(T,T.material.color.clone()),T.material.emissive&&D.origColors.set(T.material,T.material.emissive.clone()))}),lt.userData.isEnemy=!0,lt.userData.isZombie=!0,lt.userData.zombieId=D.id,lt.userData.hit=(T,K)=>ne(D,T),lt.traverse(T=>{T.isMesh&&(T.userData.isZombieMesh=!0)}),n.add(lt),a.push(D),D}function ne(B,F,ct){if(!B.isDead){B.health-=F,B.hitFlash=.12,B.stagger=1.8,B.staggerDir.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3),B.staggerSpin=(Math.random()-.5)*.8,B.lastDamageTime=performance.now(),rt(10,{hit:!0}),B.group.traverse(lt=>{lt.isMesh&&lt.material&&lt.material.color&&(lt.material.color.setHex(16777215),lt.material.emissive&&lt.material.emissive.setHex(5592405))});try{window.__hudDamageNumber&&window.__hudDamageNumber(F,{x:52+Math.random()*8,y:48})}catch{}if(B.health<=0)Yt(B);else{const lt=e.getPosition(),D=new E().subVectors(B.group.position,lt).normalize();D.y=0,B.group.position.addScaledVector(D,.18)}}}function Yt(B,F){if(!B.isDead){B.isDead=!0,B.deathTimer=0,rt(60),q(),B.group.rotation.z=(Math.random()<.5?1:-1)*(.2+Math.random()*.35),B.group.rotation.x=Math.PI/2*.22,B.stagger=3.2,B.staggerSpin=(Math.random()-.5)*1.2,Xt(B.group.position.clone());try{window.__hudPushKill&&window.__hudPushKill("ZOMBIE ELIMINATED"),window.__onEnemyKilled&&window.__onEnemyKilled("ZOMBIE",!1)}catch{}setTimeout(()=>{const ct=a.indexOf(B);ct>=0&&a.splice(ct,1),B.group.parent&&n.remove(B.group)},3800)}}function Xt(B,F){const ct=new In(.38+Math.random()*.22,8),lt=new Tt({color:4853776,roughness:.92,transparent:!0,opacity:.72,depthWrite:!1}),D=new L(ct,lt);if(D.rotation.x=-Math.PI/2,D.position.set(B.x,.018,B.z),D.position.x+=(Math.random()-.5)*.2,D.position.z+=(Math.random()-.5)*.2,n.add(D),setTimeout(()=>{D.parent&&n.remove(D)},12e3),!Mn){const K=new Qe,_t=new Float32Array(8*3);for(let O=0;O<8;O++)_t[O*3]=B.x,_t[O*3+1]=1+Math.random()*.3,_t[O*3+2]=B.z;K.setAttribute("position",new Yn(_t,3));const Dt=new ur({color:7999504,size:.09,transparent:!0,opacity:.95}),Ut=new da(K,Dt);n.add(Ut);let H=0;const Y=setInterval(()=>{H+=.05,Dt.opacity=Math.max(0,.95-H*2.2),Ut.position.y+=.015,H>.45&&(clearInterval(Y),n.remove(Ut),K.dispose())},50)}}function ce(B,F){let ct=null,lt=999;for(const K of _){const _t=Math.hypot(K.position.x-F.x,K.position.z-F.z);_t<lt&&(lt=_t,ct=K)}const D=ct&&lt<1.85&&ct.userData.hp<ct.userData.maxHp;v&&(D?(v.style.opacity="1",v.textContent=ct.userData.isDestroyed?"Hold [F] to Rebuild Barrier":"Hold [F] to Repair Barrier ("+ct.userData.hp+"/3)"):ct&&lt<1.85&&ct.userData.isDestroyed?(v.style.opacity="1",v.textContent="Hold [F] to Rebuild Barrier"):v.style.opacity="0");let T=!1;try{(P||window.__keys&&window.__keys.KeyF)&&(T=!0)}catch{}if(D&&T){if(U!==ct&&(U=ct,w=0),w+=B,w>=.42&&(z(ct),w=0),v){const K=Math.floor(w/.42*100);v.textContent="Repairing... "+K+"%  ("+ct.userData.hp+"/3)"}}else w=0,U&&!T&&(U=null)}function de(){o++,r=6*o,l=0,u="spawning",d=0,m=!0,ut(o),q(),d=.6}function At(){return m}function be(){return o}function ge(){m=!1;for(const B of a)B.group&&B.group.parent&&n.remove(B.group);a.length=0;for(const B of _)B.parent&&n.remove(B);_.length=0,g&&g.parent&&n.remove(g),g=null,c&&c.parentNode&&c.parentNode.removeChild(c),c&&c._banner&&c._banner.parentNode&&c._banner.parentNode.removeChild(c._banner),v&&v.parentNode&&v.parentNode.removeChild(v),c=null,window.removeEventListener("keydown",ye),window.removeEventListener("keyup",jt)}function ye(B){if(B.code==="KeyF"&&(P=!0),B.code==="KeyF"&&m){const F=e.getPosition(),ct=new E;try{const T=e&&e.camera||window.__camera||n&&n.userData&&n.userData.camera;T&&T.getWorldDirection?T.getWorldDirection(ct):ct.set(0,0,-1)}catch{ct.set(0,0,-1)}let lt=null,D=1.6;for(const T of a){if(T.isDead)continue;const K=Math.hypot(T.group.position.x-F.x,T.group.position.z-F.z);K<D&&new E().subVectors(T.group.position,F).normalize().dot(ct)>.45&&(lt=T,D=K)}if(lt){ne(lt,75,lt.group.position.clone()),rt(10);try{window.__hudDamageNumber&&window.__hudDamageNumber(75,{x:51,y:50})}catch{}}}}function jt(B){B.code==="KeyF"&&(P=!1)}window.addEventListener("keydown",ye),window.addEventListener("keyup",jt);function ie(B,F){if(!m)return;p+=B;const ct=F&&F.isVector3?F:e.getPosition?e.getPosition():new E(0,1.7,8);if(k(),g){if(g.position.y=Math.sin(p*.9)*.04,g.rotation.y+=B*.28,f&&(f.intensity=(Mn?.7:1.3)+Math.sin(p*2.1)*.18,c&&c._banner&&(g.userData.lid.material.emissiveIntensity=.85+Math.sin(p*1.7)*.22)),g.userData.questionPlanes){const D=.78+Math.sin(p*1.9)*.18;for(const T of g.userData.questionPlanes)T.material.opacity=D}if(Math.hypot(g.position.x-ct.x,g.position.z-ct.z)<1.9&&P&&(!g._cooldown||performance.now()-g._cooldown>800)){g._cooldown=performance.now();try{i&&i.addAmmo&&i.addAmmo(30)}catch{}rt(-0);try{window.__hudPushKill&&window.__hudPushKill("MYSTERY BOX: AMMO +30")}catch{}g.userData.lid.material.emissiveIntensity=2.2,setTimeout(()=>{g&&g.userData.lid&&(g.userData.lid.material.emissiveIntensity=.85)},180)}}if(ce(B,ct),u==="spawning"||u==="active"){l<r&&(d-=B,d<=0&&(a.filter(K=>!K.isDead).length<(Mn?R:tt)?(kt(),l++,q(),d=Math.max(.22,.9-o*.04)+Math.random()*.18,Mn&&(d*=1.1)):d=.18));const lt=a.filter(D=>!D.isDead).length;if(l>=r&&lt===0){u="intermission",h=y;try{window.__hudPushKill&&window.__hudPushKill("ROUND "+o+" COMPLETE")}catch{}q()}else l>=r&&(u="active")}else u==="intermission"&&(h-=B,M&&M.leftEl&&(M.leftEl.textContent="NEXT ROUND IN "+Math.ceil(h)+"s   |   POINTS: "+s),h<=0&&de());for(let lt=0;lt<a.length;lt++){const D=a[lt];if(D.isDead){if(D.deathTimer+=B,D.hitFlash>0)if(D.hitFlash=Math.max(0,D.hitFlash-B*4.5),D.hitFlash<=0)D.group.traverse(Ct=>{if(Ct.isMesh&&Ct.material){const oe=D.origColors.get(Ct);oe&&Ct.material.color&&Ct.material.color.copy(oe);const se=D.origColors.get(Ct.material);se&&Ct.material.emissive&&Ct.material.emissive.copy(se)}});else{const Ct=1-D.hitFlash/.12;if(Ct>.5){const oe=(Ct-.5)/.5;D.group.traverse(se=>{if(se.isMesh&&se.material&&se.material.color){const ue=D.origColors.get(se);if(!ue)return;if(se.material.color.lerpColors(new fe(16777215),ue,oe),se.material.emissive){const Te=D.origColors.get(se.material);Te&&se.material.emissive.lerpColors(new fe(6710886),Te,oe)}}})}}if(D.stagger>0&&(D.group.position.addScaledVector(D.staggerDir,Math.min(D.stagger,B*2.8)),D.group.rotation.z+=D.staggerSpin*B*.6,D.stagger-=B*2.2,D.stagger<0&&(D.stagger=0)),D.deathTimer>1.2&&(D.group.position.y=Re.lerp(D.group.position.y,-.22,B*.35),D.group.userData.refs&&D.group.userData.refs.headGroup)){const Ct=D.group.userData.refs.headGroup;if(Ct.userData.glow)for(const oe of Ct.userData.glow)oe.material.opacity=Math.max(0,.72-(D.deathTimer-1.2)*.9);if(Ct.userData.eyes)for(const oe of Ct.userData.eyes)oe.material.emissiveIntensity=Math.max(0,2.2-(D.deathTimer-1.2)*2.8)}continue}if(D.hitFlash>0)if(D.hitFlash=Math.max(0,D.hitFlash-B*4.2),D.hitFlash<=0)D.group.traverse(Ct=>{if(Ct.isMesh&&Ct.material){const oe=D.origColors.get(Ct);oe&&Ct.material.color&&Ct.material.color.copy(oe);const se=D.origColors.get(Ct.material);se&&Ct.material.emissive&&Ct.material.emissive.copy(se)}});else{const Ct=1-D.hitFlash/.12;if(Ct>.55){const oe=(Ct-.55)/.45;D.group.traverse(se=>{if(se.isMesh&&se.material&&se.material.color){const ue=D.origColors.get(se);if(!ue)return;if(se.material.color.lerpColors(new fe(16777215),ue,oe),se.material.emissive){const Te=D.origColors.get(se.material);Te&&se.material.emissive.lerpColors(new fe(7829367),Te,oe)}}})}}if(D.stagger>0){const Ct=Math.min(D.stagger,B*4.2);D.group.position.addScaledVector(D.staggerDir,Ct),D.group.rotation.y+=D.staggerSpin*B*1.6,D.stagger-=B*3.2,D.staggerSpin-=B*1.2,D.stagger<0&&(D.stagger=0),D.staggerSpin<0&&(D.staggerSpin=0)}let T=ct.clone();T.y=0;let K=!1,_t=null;if(D.barrierCooldown>0&&(D.barrierCooldown-=B),D.barrierCooldown<=0)for(const Ct of _){if(Ct.userData.isDestroyed)continue;const oe=Math.hypot(Ct.position.x-D.group.position.x,Ct.position.z-D.group.position.z),se=Math.hypot(ct.x-Ct.position.x,ct.z-Ct.position.z),ue=Math.hypot(ct.x-D.group.position.x,ct.z-D.group.position.z);if(oe<1.85&&ue>se-1.2){K=!0,_t=Ct,T=Ct.position.clone(),T.y=0;break}}const Dt=new E().subVectors(T,D.group.position);Dt.y=0;const Ut=Dt.length();let Y=(Ut>.15?Math.atan2(Dt.x,Dt.z):D.group.rotation.y)-D.group.rotation.y;for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;const O=K?3.8:2.6;D.group.rotation.y+=Y*Math.min(1,O*B*.9);const wt=D.speed*(K?.72:1),ot=K?1.45:1.25;if(Ut>ot&&!D.isDead){Dt.normalize();const Ct=Dt.clone().multiplyScalar(wt*B),oe=D.group.position.clone().add(Ct);oe.x=Math.max(-28,Math.min(28,oe.x)),oe.z=Math.max(-28,Math.min(28,oe.z)),K&&Ut<1.85||D.group.position.copy(oe),D.group.position.y=0}else if(D.attackCooldown-=B,D.attackCooldown<=0)if(K&&_t){S(_t,1),D.attackCooldown=1.15+Math.random()*.45,D.stagger=.22,D.staggerDir.set(0,0,-.08),Ft(_t.position.clone().add(new E(0,1,0)));try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}D.barrierCooldown=.35}else{const Ct=D.damage;try{if(e&&typeof e.takeDamage=="function")e.takeDamage(Ct);else{const oe=document.getElementById("health");if(oe){const se=parseInt(oe.textContent||"100",10);oe.textContent=String(Math.max(0,se-Ct))}window.__hudTakeDamage&&window.__hudTakeDamage(Ct,"front")}}catch{}D.attackCooldown=1.35+Math.random()*.6-Math.min(.45,o*.03),D.stagger=.35,D.staggerDir.set(0,0,.12);try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}}const x=D.group.userData.refs;if(!x)continue;if(Ut>ot+.05&&!K){D.walkCycle+=B*(4.2+D.speed*.65);const Ct=D.walkCycle,oe=Math.sin(Ct*.55+D.swayOffset)*.18,se=Math.abs(Math.sin(Ct))*.04;x.torso.rotation.z=oe*.55,x.torso.rotation.x=.12+oe*.12+se*.5,x.torso.position.y=1.08+se*.9,x.headGroup.rotation.z=-oe*.45,x.headGroup.rotation.x=.22+Math.sin(Ct*.7)*.04,x.headGroup.position.y=.38+Math.sin(Ct*1.1)*.015,x.shoulderL.rotation.x=.45+Math.sin(Ct)*.32,x.shoulderR.rotation.x=.52-Math.sin(Ct)*.28,x.shoulderL.rotation.z=.12+oe*.18,x.shoulderR.rotation.z=-.1-oe*.18,x.elbowL.rotation.x=.22+Math.cos(Ct*.9)*.12,x.elbowR.rotation.x=.18-Math.cos(Ct*.9)*.1,x.hipL.rotation.x=Math.sin(Ct)*.38,x.hipR.rotation.x=-Math.sin(Ct)*.38,x.kneeL.rotation.x=Math.max(0,Math.sin(Ct)*.42),x.kneeR.rotation.x=Math.max(0,-Math.sin(Ct)*.42);const ue=Math.max(0,Math.sin(Ct))*.045,Te=Math.max(0,Math.sin(Ct+Math.PI))*.045;x.bootL.position.y=-.4+ue,x.bootR.position.y=-.4+Te,x.torso.rotation.y=oe*.18;const Ge=.85+Math.sin(p*2.8+D.swayOffset)*.24;if(x.headGroup.userData.glow)for(const Ie of x.headGroup.userData.glow)Ie.material.opacity=.62*Ge;if(x.headGroup.userData.eyes)for(const Ie of x.headGroup.userData.eyes)Ie.material.emissiveIntensity=2+Math.sin(p*3.1)*.22}else{const Ct=p*.9+D.swayOffset,oe=Math.sin(Ct*1.4)*.015;if(x.torso.rotation.z=Math.sin(Ct*.7)*.07+(K?Math.sin(p*6)*.06:0),x.torso.rotation.x=.14+oe,x.torso.position.y=1.08+oe*.35,x.headGroup.rotation.z=Math.sin(Ct*.8)*.05,x.headGroup.rotation.x=.24+Math.sin(Ct)*.03,x.shoulderL.rotation.x=Re.lerp(x.shoulderL.rotation.x,.62,B*2.2),x.shoulderR.rotation.x=Re.lerp(x.shoulderR.rotation.x,.58,B*2.2),x.elbowL.rotation.x=Re.lerp(x.elbowL.rotation.x,.32,B*2.2),x.elbowR.rotation.x=Re.lerp(x.elbowR.rotation.x,.28,B*2.2),x.hipL.rotation.x=Re.lerp(x.hipL.rotation.x,0,B*3),x.hipR.rotation.x=Re.lerp(x.hipR.rotation.x,0,B*3),x.kneeL.rotation.x=Re.lerp(x.kneeL.rotation.x,0,B*3),x.kneeR.rotation.x=Re.lerp(x.kneeR.rotation.x,0,B*3),K){const se=Math.sin(p*7.2)*.42;x.shoulderL.rotation.x=.85+se*.22,x.shoulderR.rotation.x=.9-se*.18,x.torso.rotation.x=.18+Math.abs(se)*.12}else if(Ut<=ot){const se=Math.sin(p*8.5)*.55;x.shoulderL.rotation.x=.92+se*.18,x.shoulderR.rotation.x=.88-se*.2}}}q()}return k(),C(),Pt(),q(),window.__zombiePoints=s,Object.defineProperty(window,"__zombiePoints",{get:()=>s,set:B=>{s=B,q()}}),{startRound:de,update:ie,getRound:be,dispose:ge,isActive:At,getPoints:()=>s,addPoints:rt,barriers:_,getZombies:()=>a,getSpawnPoints:yt}}const qi=Wt.tier==="low";function xc(n,t,e,i){let o=!1,s=0,a=0,r=[],l=[],u=null,h=null,d=null,m=null,p=null,_=null,g=null,f=null,c=0,M=null;const v=[{radius:280,duration:30,damage:1.2},{radius:190,duration:28,damage:1.8},{radius:120,duration:28,damage:2.6},{radius:72,duration:26,damage:3.8},{radius:42,duration:24,damage:5.2},{radius:22,duration:20,damage:7}];let w=new E(0,0,0),U=v[0].radius;v[0].radius;let P=v[0].radius;function R(at){const ft=Math.max(0,Math.ceil(at));return Math.floor(ft/60)+":"+String(ft%60).padStart(2,"0")}function tt(){try{if(window.__enemyCount&&typeof window.__enemyCount=="function")return Math.max(0,window.__enemyCount()|0);if(window.__enemies&&typeof window.__enemies._getCount=="function")return Math.max(0,window.__enemies._getCount()|0)}catch{}return 0}function y(){return r.filter(at=>at.userData.alive).length+tt()+1}function b(){return r.filter(at=>at.userData.alive).length===0&&tt()===0}function W(){if(m)return;m=document.createElement("div"),m.id="pubgHUD";const at=Wt.tier!=="low";m.style.cssText="position:fixed;top:14px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:16px;padding:8px 16px;background:rgba(14,18,24,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:10px;color:#fff;font-family:system-ui,sans-serif;z-index:11;"+(at?"backdrop-filter:blur(6px);":"");const ft=document.createElement("div");ft.style.cssText="display:flex;flex-direction:column;gap:2px;";const I=document.createElement("div");I.textContent="SAFE ZONE",I.style.cssText="font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;",_=document.createElement("div"),_.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.3px;",_.textContent="PHASE 1/6",g=document.createElement("div"),g.style.cssText="font-size:10px;letter-spacing:0.7px;opacity:0.72;font-weight:700;",g.textContent="SHRINK IN 0:30",f=document.createElement("div"),f.style.cssText="font-size:10px;letter-spacing:0.7px;opacity:0.58;font-weight:700;",f.textContent="RADIUS 280m";const Ot=document.createElement("div");Ot.style.cssText="width:120px;height:4px;background:rgba(255,255,255,0.18);border-radius:2px;overflow:hidden;";const St=document.createElement("div");St.id="pubgZoneBar",St.style.cssText="width:0%;height:100%;background:#2ecc71;transition:width 0.3s;",Ot.appendChild(St),ft.appendChild(I),ft.appendChild(_),ft.appendChild(g),ft.appendChild(f),ft.appendChild(Ot);const Rt=document.createElement("div");Rt.style.cssText="display:flex;flex-direction:column;align-items:flex-end;gap:1px;min-width:70px;";const Gt=document.createElement("div");Gt.textContent="ALIVE",Gt.style.cssText="font-size:9px;letter-spacing:0.7px;opacity:0.6;font-weight:700;",p=document.createElement("div"),p.style.cssText="font-size:18px;font-weight:900;color:#ffcc33;",p.textContent="--",Rt.appendChild(Gt),Rt.appendChild(p),m.appendChild(ft),m.appendChild(Rt),document.body.appendChild(m),d=document.createElement("div"),d.id="pubgWarning",d.style.cssText="position:fixed;left:50%;top:46%;transform:translate(-50%,-50%);padding:10px 18px;background:rgba(180,30,40,0.88);border:1px solid rgba(255,255,255,0.22);border-radius:8px;color:#fff;font-weight:800;font-size:14px;letter-spacing:0.6px;display:none;pointer-events:none;z-index:12;text-align:center;",d.textContent="WARNING: BLUE ZONE!",document.body.appendChild(d)}function nt(at,ft){d||W(),ft&&(d.textContent=ft),d.style.display=at?"block":"none"}function yt(){const at=new Zi(1,1,qi?32:64),ft=new dn({color:3066993,transparent:!0,opacity:.22,side:je,depthWrite:!1});u=new L(at,ft),u.rotation.x=-Math.PI/2,u.position.set(w.x,.08,w.z),u.renderOrder=2,n.add(u);const I=[],Ot=qi?48:96;for(let Gt=0;Gt<=Ot;Gt++){const Me=Gt/Ot*Math.PI*2;I.push(new E(Math.cos(Me),0,Math.sin(Me)))}const St=new Qe().setFromPoints(I),Rt=new Ui({color:3066993,linewidth:1,transparent:!0,opacity:.85});h=new Ni(St,Rt),h.position.set(w.x,.12,w.z),n.add(h),k(U)}function k(at){if(!u||!h)return;const ft=at;u.scale.set(ft,ft,1),h.scale.set(ft,ft,1)}function ut(){u&&(n.remove(u),u.geometry.dispose(),u.material.dispose(),u=null),h&&(n.remove(h),h.geometry.dispose(),h.material.dispose(),h=null)}function q(){const at=qi?8:14;r.length=0,t&&t.spawnPoints&&t.spawnPoints,window.__terrain&&window.__terrain.worldSize;for(let ft=0;ft<at;ft++){const I=Math.random()*Math.PI*2,Ot=80+Math.random()*120,St=w.x+Math.cos(I)*Ot,Rt=w.z+Math.sin(I)*Ot,Gt=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(St,Rt):0,Me=new E(St,Gt+.12,Rt),Zt=new Ne;Zt.name="pubg_bot_"+ft;const C=new It(.55,.95,.35),S=new Tt({color:4872810,roughness:.82,metalness:.08}),z=new L(C,S);z.position.y=.62,z.castShadow=!qi,z.receiveShadow=!qi,Zt.add(z);const Ft=new It(.32,.32,.32),Pt=new Tt({color:14272421,roughness:.9}),kt=new L(Ft,Pt);kt.position.set(0,1.22,0),kt.castShadow=!qi,Zt.add(kt);const ne=new L(new It(.08,.08,.58),new Tt({color:1711394}));ne.position.set(.22,.65,.22),Zt.add(ne),Zt.position.copy(Me),Zt.userData.hp=100,Zt.userData.maxHp=100,Zt.userData.speed=2.2+Math.random()*.6,Zt.userData.state="patrol",Zt.userData.target=new E(w.x,0,w.z),Zt.userData.shootCd=.6+Math.random()*1.2,Zt.userData.alive=!0,Zt.userData.isEnemy=!0,n.add(Zt),r.push(Zt);const Yt=r.length-1;Zt.userData.hit=Xt=>it(Yt,Xt),Zt.traverse(Xt=>{Xt&&Xt.isMesh&&(Xt.userData.isEnemy=!0,Xt.userData.hit=Zt.userData.hit)})}r.length+1,V()}function rt(){const at=[[12,-6],[-14,8],[6,14],[-8,-14],[18,4]];for(let ft=0;ft<at.length;ft++){const I=at[ft][0],Ot=at[ft][1],St=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(I,Ot):0,Rt=new Ne;Rt.name="loot_"+ft,Rt.position.set(I,St+.22,Ot);const Gt=new L(new It(.72,.42,.72),new Tt({color:9071146,roughness:.72,metalness:.12}));Gt.position.y=.21,Gt.castShadow=!qi,Rt.add(Gt);const Me=new L(new It(.74,.08,.74),new Tt({color:11899450}));Me.position.y=.46,Rt.add(Me);const Zt=new Ri(16763989,.9,6);Zt.position.set(0,.6,0),Rt.add(Zt),n.add(Rt),l.push({group:Rt,taken:!1,pos:new E(I,St,Ot)})}}function V(){p||W();const at=y();if(p.textContent=at,_&&(_.textContent="PHASE "+(s+1)+"/6  ● "+at+" ALIVE"),g){const I=v[s]?v[s].duration:0,Ot=Math.max(0,I-a);g.textContent="SHRINK IN "+R(Ot)}f&&(f.textContent="RADIUS "+Math.max(0,Math.round(U))+"m");const ft=document.getElementById("pubgZoneBar");if(ft){const I=v[s]?v[s].duration:1,Ot=Math.max(0,Math.min(100,(1-a/I)*100));ft.style.width=Ot+"%",ft.style.background=Ot<28?"#e74c3c":Ot<55?"#f1c40f":"#2ecc71"}}function Mt(){o||(o=!0,s=0,a=0,M=null,P=v[0].radius,U=P,v[1]&&v[1].radius,w.set((Math.random()-.5)*40,0,(Math.random()-.5)*40),W(),m.style.display="flex",yt(),q(),rt(),V(),console.log("[PUBG] Battle Royale started phase 0 center",w,"radius",U),window.__pubgCenter=w,window.__pubgRadius=()=>U)}function X(){o=!1,r.forEach(at=>n.remove(at)),r.length=0,l.forEach(at=>n.remove(at.group)),l.length=0,ut(),m&&(m.style.display="none"),nt(!1)}function Et(at,ft){const I=at.x-w.x,Ot=at.z-w.z,Rt=Math.hypot(I,Ot)>U;if(Rt){nt(!0,"OUTSIDE SAFE ZONE — RETURN!");const Gt=v[s]?v[s].damage:2;if(c+=Gt*ft,c>.11){c=0;try{document.dispatchEvent(new CustomEvent("pubg-zone-damage",{detail:{dps:Gt}}))}catch{}try{window.__takeZoneDamage&&window.__takeZoneDamage(4+s*2)}catch{}}u&&(u.material.opacity=.12+Math.sin(Date.now()*.006)*.08+.12,u.material.color.setHex(15158332))}else nt(!1),u&&(u.material.opacity=.18,u.material.color.setHex(3066993));return Rt}function Nt(at,ft){for(const Ot of r){if(!Ot.userData.alive)continue;const St=Ot.position,Gt=ft.clone().sub(St).length();let Me=w.clone(),Zt=!1;Gt<28&&(Me=ft.clone(),Zt=!0);const C=new E(Me.x-St.x,0,Me.z-St.z);if(C.length()<.02)continue;C.normalize();const z=Math.atan2(-C.x,-C.z);let Ft=Ot.rotation.y,Pt=z-Ft;for(;Pt>Math.PI;)Pt-=Math.PI*2;for(;Pt<-Math.PI;)Pt+=Math.PI*2;Ot.rotation.y+=Pt*Math.min(1,4*at);const kt=Ot.userData.speed*(Zt?1.35:.9),ne=C.multiplyScalar(kt*at);let Yt=St.x+ne.x,Xt=St.z+ne.z,ce=window.__terrain&&typeof window.__terrain.getHeightAt=="function"?window.__terrain.getHeightAt(Yt,Xt):0;for(const At of r){if(At===Ot||!At.userData.alive)continue;if((At.position.x-Yt)*(At.position.x-Yt)+(At.position.z-Xt)*(At.position.z-Xt)<1.1){Yt-=ne.x*.55,Xt-=ne.z*.55;break}}if(Ot.position.set(Yt,ce+.12,Xt),Zt&&Gt<26){if(Ot.userData.shootCd-=at,Ot.userData.shootCd<=0){if(Ot.userData.shootCd=.85+Math.random()*1.1,Math.random()<.18){try{window.__takeBotDamage&&window.__takeBotDamage(8+Math.random()*6,Ot.position.clone())}catch{}try{document.dispatchEvent(new CustomEvent("pubg-bot-hit",{detail:{dmg:10,from:Ot.position.clone()}}))}catch{}}if(!qi){const At=new Ri(16764040,1.2,6);At.position.copy(Ot.position),At.position.y+=1,At.position.x+=Math.sin(Ot.rotation.y)*.45,At.position.z+=Math.cos(Ot.rotation.y)*.45,n.add(At),setTimeout(()=>n.remove(At),70)}}}else Ot.userData.shootCd=Math.max(0,Ot.userData.shootCd-at*.5);const de=Date.now()*.005+Ot.userData.speed*10;Ot.position.y+=Math.sin(de)*.0015}}function G(at){for(const ft of l){if(ft.taken)continue;if(ft.pos.distanceTo(at)<1.8){ft.taken=!0;try{window.__weapons&&window.__weapons.addAmmo?window.__weapons.addAmmo(30):window.__weapons&&window.__weapons.reserve!==void 0&&(window.__weapons.reserve+=30)}catch{}try{document.dispatchEvent(new CustomEvent("pubg-loot",{detail:{ammo:30}}))}catch{}ft.group.children.forEach(St=>{St.geometry&&St.geometry.type==="BoxGeometry"&&(St.material.transparent=!0,St.material.opacity=.55)});const Ot=document.createElement("div");Ot.style.cssText="position:fixed;left:50%;top:58%;transform:translate(-50%,-50%);padding:8px 14px;background:rgba(14,18,24,0.88);border:1px solid rgba(255,255,255,0.18);border-radius:8px;color:#2ecc71;font-weight:800;font-size:13px;z-index:12;",Ot.textContent="+30 AMMO  (LOOTED)",document.body.appendChild(Ot),setTimeout(()=>Ot.remove(),1400),console.log("[PUBG] looted crate at",ft.pos)}}}function et(at,ft){var St;if(!o||M)return;a+=at;const I=v[s],Ot=v[s+1];if(I&&Ot){const Rt=Math.min(1,a/I.duration);U=Re.lerp(I.radius,Ot.radius,Rt),k(U),V()}I&&a>=I.duration&&(a=0,s<v.length-1?(s++,console.log("[PUBG] phase advance",s,"radius",v[s].radius),nt(!0,"SAFE ZONE SHRINKING — PHASE "+(s+1)),setTimeout(()=>{Et(ft,0)||nt(!1)},1400)):(U=Math.max(0,U-at*6),k(U))),Et(ft,at),Nt(at,ft),G(ft),b()&&(M="player",nt(!0,"VICTORY ROYALE!  ★"),console.log("[PUBG] victory"));for(const Rt of r){if(!Rt.userData.alive)continue;Math.hypot(Rt.position.x-w.x,Rt.position.z-w.z)>U+6&&(Rt.userData.hp-=(((St=v[s])==null?void 0:St.damage)||2)*at*.9,Rt.userData.hp<=0&&(Rt.userData.alive=!1,Rt.visible=!1,V()))}}function it(at,ft){const I=r[at];if(!I||!I.userData.alive)return!1;if(I.userData.hp-=ft,I.userData.hp<=0){I.userData.alive=!1,I.visible=!1,V();try{const Ot=document.createElement("div");Ot.style.cssText="position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);color:#ffcc33;font-weight:900;font-size:16px;text-shadow:0 2px 8px rgba(0,0,0,0.7);z-index:12;",Ot.textContent="BOT ELIMINATED",document.body.appendChild(Ot),setTimeout(()=>Ot.remove(),900)}catch{}return b()&&(M="player",nt(!0,"VICTORY ROYALE!  ★")),!0}try{I.children.forEach(Ot=>{if(Ot.isMesh){const St=Ot.material.color.clone();Ot.material.color.setHex(16729156),setTimeout(()=>Ot.material.color.copy(St),80)}})}catch{}return!1}function Q(at,ft,I=120){let Ot=null,St=1/0;for(let Rt=0;Rt<r.length;Rt++){const Gt=r[Rt];if(!Gt.userData.alive)continue;const Zt=Gt.position.clone().sub(at).dot(ft);if(Zt<0||Zt>I)continue;const C=at.clone().add(ft.clone().multiplyScalar(Zt));Gt.position.distanceTo(C)<.85&&Zt<St&&(St=Zt,Ot={bot:Gt,idx:Rt,distance:Zt,point:C.clone()})}return Ot}function dt(){return o}function bt(){return{phase:s,phaseTime:a,currentRadius:U,alive:r.filter(at=>at.userData.alive).length+1,center:w.clone(),winner:M}}const Ht={start:Mt,update:et,dispose:X,isActive:dt,getState:bt,rayHitBots:Q,applyDamageToBot:it,get bots(){return r},get lootCrates(){return l},get center(){return w.clone()},get radius(){return U}};return window.__pubgMode=Ht,window.__PUBG_MODE=Ht,Ht}function yg(n,t,e,i,o=[]){return{vehicles:[],update(s){},dispose(){}}}function wg({onSelect:n}={}){return{setSelection(t,e){},dispose(){},onSelect:n}}function Sg(n,t){const e=document.getElementById("health");document.getElementById("fps");const i=document.getElementById("status"),o=document.getElementById("ui");let s=100,a=!1,r=null,l=0,u=22,h=null,d=null,m=null,p=null,_=null,g=null,f=null,c=null,M=!1;function v(){r||(r=document.createElement("div"),r.id="hudVignette",r.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.12s;z-index:4;background:linear-gradient(to top, rgba(180,0,14,0.6) 0%, rgba(150,0,10,0.38) 18%, rgba(110,0,8,0.16) 38%, transparent 68%), radial-gradient(ellipse at center, transparent 58%, rgba(255,20,20,0.28) 92%, rgba(90,0,0,0.42) 100%);",o.appendChild(r))}function w(){if(m)return;m=document.createElement("div"),m.id="hitDirs",m.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:6;";function Q(dt,bt){const Ht=document.createElement("div");return Ht.id=dt,Ht.style.cssText=bt+"opacity:0;transition:opacity 0.14s, transform 0.14s;filter:drop-shadow(0 0 6px rgba(255,40,40,0.9));will-change:opacity,transform;",Ht}p=Q("hitTop","position:absolute;left:50%;top:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);"),_=Q("hitBottom","position:absolute;left:50%;bottom:18%;width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:18px solid rgba(255,38,38,0.96);transform:translateX(-50%) scale(0.9);"),g=Q("hitLeft","position:absolute;left:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);"),f=Q("hitRight","position:absolute;right:12%;top:50%;width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-right:18px solid rgba(255,38,38,0.96);transform:translateY(-50%) scale(0.9);"),m.append(p,_,g,f),o.appendChild(m)}function U(Q){w();let bt={front:p,north:p,back:_,south:_,left:g,west:g,right:f,east:f}[Q]||null;if(!bt){const at=Math.random();at<.25?bt=p:at<.5?bt=_:at<.75?bt=g:bt=f}bt.style.opacity="0.96";const Ht=bt===p||bt===_?"translateX(-50%)":"translateY(-50%)";if(bt.style.transform=Ht+" scale(1.25)",bt.style.transition="opacity 0.08s, transform 0.08s",setTimeout(()=>{bt.style.opacity="0",bt.style.transform=Ht+" scale(0.88)"},260),Q==="front"||Q==="back"){const at=Q==="front"?_:p;Math.random()<.35&&(at.style.opacity="0.32",setTimeout(()=>at.style.opacity="0",140))}}function P(){h||(h=document.createElement("div"),h.id="killfeed",h.style.cssText="position:absolute;top:16px;right:14px;width:320px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;pointer-events:none;z-index:7;",o.appendChild(h))}let R=0,tt=0,y=null;function b(){y||(y=document.createElement("div"),y.id="killStreak",y.style.cssText="position:absolute;top:58px;right:14px;min-width:120px;padding:6px 10px;background:rgba(14,18,24,0.82);border-left:3px solid #ffcc33;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:0.6px;color:#ffcc33;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);opacity:0;transform:translateX(10px);transition:opacity 0.18s, transform 0.18s;z-index:7;pointer-events:none;",y.textContent="",o.appendChild(y))}function W(){b(),R>=2?(y.textContent=R+"x STREAK!",y.style.opacity="1",y.style.transform="translateX(0) scale(1.04)",setTimeout(()=>{y&&(y.style.transform="translateX(0) scale(1)")},120)):y.style.opacity="0"}function nt(Q){P();const dt=performance.now();dt-tt<6500?R++:R=1,tt=dt,W(),setTimeout(()=>{performance.now()-tt>=6500&&(R=0,W())},6600);const bt=document.createElement("div"),Ht=R>=2?" ("+R+"x)":"";for(bt.textContent=Q+Ht,bt.style.cssText="min-width:180px;max-width:320px;padding:7px 12px;background:rgba(14,18,24,0.86);border-left:3px solid #e63946;border-radius:4px;font-size:12px;font-weight:800;letter-spacing:0.5px;color:#fff;text-transform:uppercase;box-shadow:0 4px 14px rgba(0,0,0,0.45);backdrop-filter:blur(6px);transform:translateX(18px);opacity:0;transition:transform 0.22s cubic-bezier(0.2,0.8,0.2,1), opacity 0.22s;",/headshot/i.test(Q)&&(bt.style.borderLeftColor="#ffcc33"),h.appendChild(bt),requestAnimationFrame(()=>{bt.style.transform="translateX(0)",bt.style.opacity="1"});h.children.length>3;)h.removeChild(h.firstChild);setTimeout(()=>{bt.style.opacity="0",bt.style.transform="translateX(12px)"},3e3),setTimeout(()=>{bt.parentNode&&bt.parentNode.removeChild(bt)},3400)}function yt(){d||(d=document.createElement("div"),d.id="damageNumbers",d.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:8;overflow:hidden;",o.appendChild(d))}function k(Q,dt={}){yt();const bt=dt.heal||Q>0&&dt.isHeal,Ht=Math.abs(Math.round(Q));if(Ht===0)return;const at=document.createElement("div"),ft=bt?"+":"-";at.textContent=ft+Ht;const I=dt.x!=null?dt.x:50+(Math.random()*14-7),Ot=dt.y!=null?dt.y:50+(Math.random()*10-5);at.style.cssText="position:absolute;left:"+I+"%;top:"+Ot+"%;font-size:"+(bt?18:20)+"px;font-weight:900;letter-spacing:0.3px;color:"+(bt?"#3cff7a":"#ff3a3a")+";text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 10px "+(bt?"rgba(60,255,122,0.45)":"rgba(255,58,58,0.5)")+";transform:translate(-50%,-50%) scale(0.82);opacity:0;transition:transform 0.72s cubic-bezier(0.18,0.82,0.32,1), opacity 0.42s;will-change:transform,opacity;",Ht>=20&&(at.style.fontSize="26px"),d.appendChild(at),requestAnimationFrame(()=>requestAnimationFrame(()=>{at.style.opacity="1",at.style.transform="translate(-50%, calc(-50% - 62px)) scale(1.08)"})),setTimeout(()=>{at.style.opacity="0",at.style.transform="translate(-50%, calc(-50% - 78px)) scale(1.0)"},520),setTimeout(()=>{at.parentNode&&at.parentNode.removeChild(at)},980)}function ut(){const Q=document.getElementById("crosshair");if(!Q)return null;if(Q.dataset.upgraded==="1")return Q;Q.dataset.upgraded="1",Q.innerHTML="",Q.style.cssText="position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;pointer-events:none;z-index:5;";function dt(Ot,St){const Rt=document.createElement("div");return Rt.style.cssText="position:absolute;background:#fff;box-shadow:0 0 4px rgba(0,0,0,0.75), 0 0 1px rgba(0,0,0,0.95);border-radius:1px;",Rt.style.width=Ot+"px",Rt.style.height=St+"px",Rt}const bt=dt(2,12),Ht=dt(2,12),at=dt(12,2),ft=dt(12,2),I=document.createElement("div");return I.style.cssText="position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;background:#fff;border-radius:50%;box-shadow:0 0 4px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,0,0,0.35);",Q.append(bt,Ht,at,ft,I),c={top:bt,bottom:Ht,left:at,right:ft,dot:I,wrap:Q},q(22),Q}function q(Q){if(!c)return;const dt=Math.round(Q),bt=20,Ht=20;c.top.style.left=bt-1+"px",c.top.style.top=Ht-dt-12+"px",c.bottom.style.left=bt-1+"px",c.bottom.style.top=Ht+dt+"px",c.left.style.left=bt-dt-12+"px",c.left.style.top=Ht-1+"px",c.right.style.left=bt+dt+"px",c.right.style.top=Ht-1+"px";const at=dt<8?.85:1;c.dot.style.transform="scale("+at+")",c.dot.style.opacity=dt<8?"0.92":"1"}window.addEventListener("mousedown",Q=>{Q.button===2&&(M=!0)}),window.addEventListener("mouseup",Q=>{Q.button===2&&(M=!1)}),window.addEventListener("contextmenu",Q=>Q.preventDefault());function rt(){try{if(t&&typeof t.isAiming=="boolean")return t.isAiming;if(t&&typeof t.aiming=="boolean")return t.aiming;if(t&&t.getADS)return!!t.getADS()}catch{}return M}function V(Q){s=Math.max(0,Math.min(100,Q)),e&&(e.textContent=String(Math.round(s))),s<=0&&!a&&(a=!0,i&&(i.textContent="DOWNED"),v(),r.style.opacity="0.88",r.style.background="rgba(80,0,0,0.72)",r.style.transition="opacity 0.22s",setTimeout(()=>{const dt=document.getElementById("center");if(!dt)return;dt.style.display="flex",dt.innerHTML='<h1 style="color:#ff3a3a">ELIMINATED</h1><p>Click to respawn</p><button id="respawnBtn" style="padding:14px 28px;font-size:18px;background:#e63946;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">RESPAWN</button>';const bt=document.getElementById("respawnBtn");bt&&(bt.onclick=()=>{s=100,a=!1,e&&(e.textContent="100"),r&&(r.style.opacity="0"),dt.style.display="none",n&&n.getPosition?n.reset&&n.reset():location.reload(),i&&(i.textContent="READY")})},420))}function Mt(Q,dt){if(!(a||l>0)){l=.18,V(s-Q),k(Q,{y:52+Math.random()*6});try{window.__audio&&window.__audio.playHit&&window.__audio.playHit()}catch{}v(),w(),r.style.opacity="0.58",r.style.transition="opacity 0.08s",U(dt),window.__chromaticHit=2.2;try{r&&(r.style.filter="contrast(1.12) saturate(1.15)"),setTimeout(()=>{r&&(r.style.filter="none")},260)}catch{}try{const bt=n&&n.camera;if(bt){const Ht=.06+Math.random()*.02,at=(Math.random()-.5)*.04;if(bt.rotation.x+=Ht,bt.rotation.y+=at,bt.rotation.z+=(Math.random()-.5)*.025,setTimeout(()=>{try{bt.rotation.x-=Ht,bt.rotation.y-=at,bt.rotation.z-=(Math.random()-.5)*.025}catch{}},72),bt.fov){const ft=bt.fov;bt.fov=Math.min(88,ft+1.2),bt.updateProjectionMatrix(),setTimeout(()=>{bt.fov=ft,bt.updateProjectionMatrix()},90)}}}catch{}setTimeout(()=>{r&&!a&&(r.style.opacity="0")},142)}}function X(Q){a||(V(s+Q),k(Q,{heal:!0,isHeal:!0}))}if(n){n.takeDamage=Mt,n.heal=X,n.getHealth=()=>s,n.reset=n.reset||(()=>{V(100)});const Q=n.update.bind(n);n.update=dt=>{Q(dt),l>0&&(l=Math.max(0,l-dt))}}window.__hudTakeDamage=Mt,window.__hudHeal=X,window.__hudKill=nt,window.__hudPushKill=nt,window.__hudDamageNumber=k,window.__killfeed={push:nt,addKill:nt},window.__onEnemyKilled=(Q,dt)=>{const bt=dt?Q+" HEADSHOT":"ELIMINATED "+Q;nt(bt),k(dt?45:28,{x:58+Math.random()*10,y:46+Math.random()*8})};let Et=0;ut(),P(),yt();function Nt(Q){Et+=Q;try{const ft=n&&n.velocity&&n.velocity.length&&n.velocity.length()>5||document.pointerLockElement&&window.__isSprinting;if(r||v(),window.__sprintHeld&&s>35&&!a&&r.style.opacity==="0"){const Ot=Math.sin(Et*3.267)*.5+.5;r.style.opacity=String(.035+Ot*.018),r.style.background="radial-gradient(ellipse at center, transparent 62%, rgba(20,18,22,"+(.08+Ot*.04)+") 95%)",r.style.filter="blur("+Ot*.4+"px)"}else s>=35&&r.style.opacity!=="0"&&l<=0&&window.__chromaticHit}catch{}if(s<35&&!a){v();const ft=.18+Math.sin(Et*4.2)*.08+Math.sin(Et*7)*.03,I=1-s/35;r.style.opacity=String(ft*I*.92+.06),r.style.background="linear-gradient(to top, rgba(180,0,14,"+(.32+ft*.28)+") 0%, rgba(150,0,10,"+(.18+ft*.14)+") 22%, rgba(110,0,8,0.10) 42%, transparent 70%), radial-gradient(ellipse at center, transparent 56%, rgba(255,14,14,"+(.18+ft*.18)+") 100%)"}else!a&&r&&r.style.opacity!=="0"&&l<=0;const dt=rt();u+=((dt?4:22)-u)*Math.min(1,Q*14);let at=0;try{if(t&&t.getAmmo){const ft=t.getAmmo()}}catch{}if(q(u+at),c){const ft=dt?.32:1;c.wrap.style.opacity=String(.96*ft+(dt?.2:0));const I=Math.sin(Et*1.2)*.015;c.wrap.style.transform="translate(-50%,-50%) scale("+(1+I)+")"}}function G(){if(document.getElementById("zombieHUD"))return document.getElementById("zombieHUD");const Q=document.createElement("div");Q.id="zombieHUD",Q.style.cssText="position:absolute;left:14px;top:14px;z-index:6;pointer-events:none;font-family:system-ui,sans-serif;";const dt=document.createElement("div");dt.id="zRound",dt.style.cssText="font-size:18px;font-weight:900;letter-spacing:1.2px;color:#ff3b3b;text-shadow:0 2px 8px rgba(0,0,0,0.85),0 0 12px rgba(255,60,60,0.45);",dt.textContent="ROUND 1";const bt=document.createElement("div");bt.id="zLeft",bt.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#fff;margin-top:4px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",bt.textContent="ZOMBIES LEFT: 0";const Ht=document.createElement("div");Ht.id="zPoints",Ht.style.cssText="font-size:13px;font-weight:800;letter-spacing:0.6px;color:#7CFF7A;margin-top:2px;text-shadow:0 1px 4px rgba(0,0,0,0.9);",Ht.textContent="POINTS: 0",Q.append(dt,bt,Ht);const at=document.createElement("div");at.id="zPerks",at.style.cssText="display:flex;gap:8px;margin-top:10px;";function ft(Gt,Me,Zt){const C=document.createElement("div");C.style.cssText="display:flex;align-items:center;gap:6px;padding:6px 8px;background:rgba(14,18,24,0.82);border:1px solid "+Zt+";border-radius:6px;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.45);";const S=document.createElement("div");S.style.cssText="width:22px;height:22px;border-radius:4px;background:"+Zt+";display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff;",S.textContent=Gt;const z=document.createElement("div");return z.style.cssText="font-size:10px;font-weight:800;letter-spacing:0.5px;color:"+Zt+";line-height:1;",z.innerHTML=Me+'<br><span style="opacity:0.7;font-weight:600">'+(Me==="JUGGER-NOG"?"HP+":"RELOAD+")+"</span>",C.append(S,z),C}const I=ft("♥","JUGGER-NOG","#e63946"),Ot=ft("⚡","SPEED COLA","#2ec4b6");I.style.opacity="0.82",Ot.style.opacity="0.82",I.title="Juggernog - Placeholder perk",Ot.title="Speed Cola - Placeholder perk",at.append(I,Ot),Q.appendChild(at);const St=document.getElementById("ui")||document.body;St.appendChild(Q);const Rt=document.createElement("div");return Rt.id="zRoundBanner",Rt.style.cssText="position:absolute;left:50%;top:32%;transform:translate(-50%,-50%) scale(0.85);z-index:9;pointer-events:none;font-size:64px;font-weight:900;letter-spacing:3px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.85),0 0 22px rgba(255,60,60,0.55);opacity:0;transition:opacity 0.32s, transform 0.32s cubic-bezier(0.2,0.8,0.2,1);text-align:center;",Rt.textContent="ROUND 1",St.appendChild(Rt),Q._banner=Rt,Q._els={rEl:dt,lEl:bt,pEl:Ht},Q}function et(Q,dt,bt){if(!document.getElementById("zombieHUD"))return G(),et(Q,dt,bt);const at=document.getElementById("zRound");at&&(at.textContent="ROUND "+Q);const ft=document.getElementById("zLeft");ft&&(ft.textContent="ZOMBIES LEFT: "+dt);const I=document.getElementById("zPoints");I&&(I.textContent="POINTS: "+bt)}function it(Q){const dt=document.getElementById("zRoundBanner")||G()&&document.getElementById("zRoundBanner");dt&&(dt.textContent=Q,dt.style.opacity="1",dt.style.transform="translate(-50%,-50%) scale(1.08)",setTimeout(()=>{dt.style.opacity="0",dt.style.transform="translate(-50%,-50%) scale(0.88)"},1800))}if(window.__ensureZombieHUD=G,window.__updateZombieHUD=et,window.__showZombieBanner=it,!document.getElementById("zombieHUDStyle")){const Q=document.createElement("style");Q.id="zombieHUDStyle",Q.textContent="#zombieHUD{font-family:system-ui,monospace} #zRoundBanner{pointer-events:none} #zPerks div{transition:opacity 0.2s}",document.head.appendChild(Q)}return function Q(){requestAnimationFrame(Q),Nt(.016)}(),{takeDamage:Mt,heal:X,getHealth:()=>s,update:Nt,addKill:nt,spawnDamageNumber:k}}function bg(){let n=null,t=null;function e(){if(n)return n.state==="suspended"&&n.resume().catch(()=>{}),n;try{n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain(),t.gain.value=.92,t.connect(n.destination)}catch{n=null}return n}let i=null;function o(){const _=e();if(!_)return null;if(!i)try{if(_.createPanner){i=_.createPanner(),i.panningModel="HRTF",i.distanceModel="linear",i.refDistance=3,i.maxDistance=48,i.rolloffFactor=.9,i.coneInnerAngle=360,i.coneOuterAngle=360,i._occlusionFilter=_.createBiquadFilter(),i._occlusionFilter.type="lowpass",i._occlusionFilter.frequency.value=18e3,i._occlusionGain=_.createGain(),i._occlusionGain.gain.value=1;try{i.connect(i._occlusionFilter),i._occlusionFilter.connect(i._occlusionGain),i._occlusionGain.connect(t)}catch{try{i.connect(_.destination)}catch{}}}}catch{}return i}function s(){if(!n)return null;try{const _=Math.floor(n.sampleRate*.45),g=n.createBuffer(2,_,n.sampleRate);for(let c=0;c<2;c++){const M=g.getChannelData(c);for(let v=0;v<_;v++)M[v]=(Math.random()*2-1)*Math.pow(1-v/_,2.2)*.22}const f=n.createConvolver();return f.buffer=g,f}catch{return null}}function a(_=!1){const g=e();if(!g)return;g.state==="suspended"&&g.resume();const f=g.currentTime,c=t||g.destination,M=g.createOscillator();M.type="square",M.frequency.setValueAtTime(_?180:220,f),M.frequency.exponentialRampToValueAtTime(55,f+.08);const v=g.createGain();v.gain.setValueAtTime(.42,f),v.gain.exponentialRampToValueAtTime(.001,f+.14);const w=g.createBiquadFilter();w.type="highpass",w.frequency.value=900,w.Q.value=.7,M.connect(w),w.connect(v),v.connect(c),M.start(f),M.stop(f+.15);const U=Math.floor(g.sampleRate*.05),P=g.createBuffer(1,U,g.sampleRate),R=P.getChannelData(0);for(let X=0;X<U;X++)R[X]=(Math.random()*2-1)*Math.exp(-X/(U*.28))*.85;const tt=g.createBufferSource();tt.buffer=P;const y=g.createGain();y.gain.setValueAtTime(.22,f),y.gain.exponentialRampToValueAtTime(.001,f+.11);const b=g.createBiquadFilter();b.type="bandpass",b.frequency.value=1400,b.Q.value=.9,tt.connect(b),b.connect(y),y.connect(c),tt.start(f);const W=g.createOscillator();W.type="sine",W.frequency.setValueAtTime(120,f),W.frequency.exponentialRampToValueAtTime(45,f+.09);const nt=g.createGain();nt.gain.setValueAtTime(.18,f),nt.gain.exponentialRampToValueAtTime(.001,f+.13),W.connect(nt),nt.connect(c),W.start(f),W.stop(f+.14);const yt=Math.floor(g.sampleRate*.28),k=g.createBuffer(1,yt,g.sampleRate),ut=k.getChannelData(0);for(let X=0;X<yt;X++)ut[X]=(Math.random()*2-1)*Math.pow(1-X/yt,3.2)*.5;const q=g.createBufferSource();q.buffer=k;const rt=g.createBiquadFilter();rt.type="lowpass",rt.frequency.value=1100,rt.Q.value=.8;const V=g.createDelay(.5);V.delayTime.value=.18;const Mt=g.createGain();Mt.gain.setValueAtTime(.12,f),Mt.gain.exponentialRampToValueAtTime(.001,f+.42),q.connect(rt),rt.connect(V),V.connect(Mt),Mt.connect(c),q.start(f+.06);try{const X=s();if(X){const Et=g.createGain();Et.gain.value=.12,V.connect(X),X.connect(Et),Et.connect(c)}}catch{}}function r(){const _=e();if(!_)return;const g=_.currentTime,f=t||_.destination;function c(w,U,P){const R=_.createOscillator();R.type="square",R.frequency.setValueAtTime(U,w);const tt=_.createGain();tt.gain.setValueAtTime(P,w),tt.gain.exponentialRampToValueAtTime(.001,w+.08);const y=_.createBiquadFilter();y.type="highpass",y.frequency.value=600,R.connect(y),y.connect(tt),tt.connect(f),R.start(w),R.stop(w+.09);const b=Math.floor(_.sampleRate*.015),W=_.createBuffer(1,b,_.sampleRate),nt=W.getChannelData(0);for(let q=0;q<b;q++)nt[q]=(Math.random()*2-1)*Math.exp(-q/(b*.2))*.5;const yt=_.createBufferSource();yt.buffer=W;const k=_.createGain();k.gain.setValueAtTime(.12,w),k.gain.exponentialRampToValueAtTime(.001,w+.04);const ut=_.createBiquadFilter();ut.type="bandpass",ut.frequency.value=2600,ut.Q.value=1.1,yt.connect(ut),ut.connect(k),k.connect(f),yt.start(w)}c(g,720,.18),c(g+.32,480,.2);const M=_.createOscillator();M.type="triangle",M.frequency.setValueAtTime(220,g+.12),M.frequency.linearRampToValueAtTime(160,g+.28);const v=_.createGain();v.gain.setValueAtTime(.06,g+.12),v.gain.exponentialRampToValueAtTime(.001,g+.29),M.connect(v),v.connect(f),M.start(g+.12),M.stop(g+.3)}function l(){const _=e();if(!_)return;const g=_.currentTime,f=t||_.destination,c=_.createOscillator();c.type="sine",c.frequency.setValueAtTime(880,g),c.frequency.exponentialRampToValueAtTime(280,g+.09);const M=_.createGain();M.gain.setValueAtTime(.22,g),M.gain.exponentialRampToValueAtTime(.001,g+.14),c.connect(M),M.connect(f),c.start(g),c.stop(g+.15);const v=_.createOscillator();v.type="square",v.frequency.setValueAtTime(2200,g),v.frequency.exponentialRampToValueAtTime(900,g+.04);const w=_.createGain();w.gain.setValueAtTime(.13,g),w.gain.exponentialRampToValueAtTime(.001,g+.06);const U=_.createBiquadFilter();U.type="highpass",U.frequency.value=1800,U.Q.value=.7,v.connect(U),U.connect(w),w.connect(f),v.start(g),v.stop(g+.07);const P=_.createOscillator();P.type="sine",P.frequency.value=90;const R=_.createGain();R.gain.setValueAtTime(.1,g),R.gain.exponentialRampToValueAtTime(.001,g+.1),P.connect(R),R.connect(f),P.start(g),P.stop(g+.11)}function u(){const _=e();if(!_)return;const g=_.currentTime,f=t||_.destination,c=_.createOscillator();c.type="sine",c.frequency.value=180;const M=_.createGain();M.gain.setValueAtTime(.14,g),M.gain.exponentialRampToValueAtTime(.001,g+.08),c.connect(M),M.connect(f),c.start(g),c.stop(g+.09)}function h(_=1,g=!1){const f=e();if(!f)return;const c=f.currentTime,M=t||f.destination,v=g?70:55,w=f.createOscillator();w.type="sine",w.frequency.value=v+Math.random()*10;const U=f.createGain();U.gain.setValueAtTime(.08,c),U.gain.exponentialRampToValueAtTime(.001,c+.09);const P=f.createBiquadFilter();P.type="lowpass",P.frequency.value=800,w.connect(P),P.connect(U),U.connect(M),w.start(c),w.stop(c+.1);const R=Math.floor(f.sampleRate*.03),tt=f.createBuffer(1,R,f.sampleRate),y=tt.getChannelData(0);for(let yt=0;yt<R;yt++)y[yt]=(Math.random()*2-1)*Math.exp(-yt/(R*.35))*.28;const b=f.createBufferSource();b.buffer=tt;const W=f.createGain();W.gain.setValueAtTime(.06,c),W.gain.exponentialRampToValueAtTime(.001,c+.07);const nt=f.createBiquadFilter();nt.type="bandpass",nt.frequency.value=600+Math.random()*400,nt.Q.value=.8,b.connect(nt),nt.connect(W),W.connect(M),b.start(c)}function d(_){const g=e();if(!g||!_)return a(!1);try{p(_)}catch{}const f=o(),c=g.currentTime;try{const M=document.querySelector("canvas");if(g.listener&&g.listener.positionX){const v=window.__controlsPos||{x:0,y:1.7,z:8};g.listener.positionX.setValueAtTime(v.x,c),g.listener.positionY.setValueAtTime(v.y||1.7,c),g.listener.positionZ.setValueAtTime(v.z,c),f&&_&&(f.positionX.setValueAtTime(_.x,c),f.positionY.setValueAtTime(_.y||1.2,c),f.positionZ.setValueAtTime(_.z,c))}}catch{}if(f){const M=g.createOscillator();M.type="square",M.frequency.setValueAtTime(190,c),M.frequency.exponentialRampToValueAtTime(48,c+.09);const v=g.createGain();v.gain.setValueAtTime(.28,c),v.gain.exponentialRampToValueAtTime(.001,c+.15);const w=g.createBiquadFilter();w.type="highpass",w.frequency.value=850,M.connect(w),w.connect(v),v.connect(f),M.start(c),M.stop(c+.16);const U=Math.floor(g.sampleRate*.04),P=g.createBuffer(1,U,g.sampleRate),R=P.getChannelData(0);for(let W=0;W<U;W++)R[W]=(Math.random()*2-1)*Math.exp(-W/(U*.28))*.75;const tt=g.createBufferSource();tt.buffer=P;const y=g.createGain();y.gain.setValueAtTime(.18,c),y.gain.exponentialRampToValueAtTime(.001,c+.1);const b=g.createBiquadFilter();b.type="bandpass",b.frequency.value=1300,b.Q.value=.9,tt.connect(b),b.connect(y),y.connect(f),tt.start(c);return}return a(!1)}function m(_,g){const f=n;if(!(!f||!f.listener||!f.listener.positionX))try{const c=f.currentTime;f.listener.positionX.linearRampToValueAtTime(_.x,c+.04),f.listener.positionY.linearRampToValueAtTime(_.y,c+.04),f.listener.positionZ.linearRampToValueAtTime(_.z,c+.04);const M=Math.sin(g),v=Math.cos(g);f.listener.forwardX&&(f.listener.forwardX.setValueAtTime(-M,c),f.listener.forwardZ.setValueAtTime(-v,c))}catch{}}function p(_){if(!_||!window.__controlsPos)return!1;const g=n||e();if(!g)return!1;try{const f=window.__controlsPos,c=new THREE.Vector3(f.x,f.y||1.7,f.z),M=new THREE.Vector3(_.x,_.y||1.2,_.z),v=new THREE.Vector3().subVectors(M,c),w=v.length();if(w<.5)return!1;v.normalize();const U=[];let P=window._obsCache||null;if(!P||performance.now()-(window._obsCacheT||0)>800){P=[];const tt=window.__scene||document.__scene||null}const R=window._enemiesObstacles||window._obsCache||[];if(R.length){const y=new THREE.Raycaster(c,v,0,w-.22).intersectObjects(R,!1),b=y.length>0&&y[0].distance<w-.4;if(i&&i._occlusionFilter){const W=b?2400:18e3,nt=b?.35:1;i._occlusionFilter.frequency.linearRampToValueAtTime(W,g.currentTime+.08),i._occlusionGain.gain.linearRampToValueAtTime(nt,g.currentTime+.08)}return b}else return i&&i._occlusionFilter&&(i._occlusionFilter.frequency.linearRampToValueAtTime(18e3,g.currentTime+.08),i._occlusionGain.gain.linearRampToValueAtTime(1,g.currentTime+.08)),!1}catch{return!1}}return window.__audio={playShoot:a,playReload:r,playHit:l,playEmpty:u,playFootstep:h,playEnemyShoot:d,updateListener:m,updateOcclusion:p,ensure:e,ensurePanner:o},{playShoot:a,playReload:r,playHit:l,playEmpty:u,playFootstep:h,playEnemyShoot:d,updateListener:m,ensure:e,ensurePanner:o}}let Yi,ke,Jn,pi,Dn=null,Ln=null,ko=null,ii,Ho,ro;async function Eg(){var f;bg(),Yi=ag(),ii=Yi.scene,Ho=Yi.camera,ro=Yi.renderer,window.__scene=ii,window.__camera=Ho,window.__QUALITY=Wt;const n=new URLSearchParams(window.location.search),t=n.has("capture");window.__CAPTURE=t;let e=n.get("map");if(!e)try{e=localStorage.getItem("aaa_map")}catch{}e||(e="large"),["shipment","large"].includes(e)||(e="large");let i=n.get("mode");if(!i)try{i=localStorage.getItem("aaa_mode")}catch{}i||(n.has("zombies")?i="zombies":i="classic"),(n.get("mode")==="zombies"||n.has("zombies")||window.__ZOMBIES===!0||window.__ZOMBIES==="1"||window.__ZOMBIES==="true")&&(i="zombies"),["classic","zombies","pubg"].includes(i)||(i="classic");try{localStorage.setItem("aaa_map",e),localStorage.setItem("aaa_mode",i)}catch{}window.__CURRENT_MAP=e,window.__CURRENT_MODE=i,console.log("[main] map="+e+" mode="+i+" tier="+Wt.tier+" dprCap="+Wt.dprCap);let s=null;try{s=wg({onSelect:({map:c,mode:M})=>{const v=window.__CURRENT_MAP,w=window.__CURRENT_MODE;if(c!==v||M!==w){const U=new URLSearchParams(window.location.search).has("capture");location.search="?map="+c+"&mode="+M+(U?"&capture":"")}}}),s&&typeof s.setSelection=="function"&&s.setSelection(e,i),window.__modeMenu=s}catch(c){console.warn("[modeMenu] failed",c)}if(Wt.isMobile){document.body.style.touchAction="none",document.documentElement.style.touchAction="none",document.addEventListener("touchmove",M=>{M.target.closest("#touch-joy, #touch-look, #touch-fire, #touch-reload, #touch-jump")&&M.preventDefault()},{passive:!1});let c=0;document.addEventListener("touchend",M=>{const v=Date.now();v-c<350&&M.preventDefault(),c=v},{passive:!1});try{navigator.wakeLock&&navigator.wakeLock.request("screen").catch(()=>{})}catch{}}const a=vg(ii);a.terrain&&typeof window<"u"&&(window.__terrain=a.terrain),window.__terrain||(window.__terrain={worldSize:e==="shipment"?80:600,getHeightAt:(c,M)=>0,mesh:null,colliders:[],dispose(){}});try{window.__terrain.worldSize===600?console.log("[terrain] verified large 600x600 tier="+window.__terrain.tier+" segments="+window.__terrain.segments+" tex="+window.__terrain.textureSize+" forest="+((f=window.__terrain.forest)==null?void 0:f.count)):console.log("[terrain] shipment dummy worldSize=80")}catch{}window.__level=a,ke=lg(Ho,ii,a.colliders),window.__controls=ke;try{ko=yg(ii,a.colliders,ke,a.terrain||window.__terrain,a.vehicleSpawns||[]),window.__vehicles=ko,window.__vehicleAPI=ko,console.log("[vehicles] initialized on "+e+" map ("+ko.vehicles.length+" vehicles)")}catch(c){console.warn("[vehicles] failed",c)}Jn=xg(ii,Ho,ke),window.__weapons=Jn,pi=Mg(ii,a.spawnPoints,ke,Jn),window.__enemies=pi,Sg(ke,Jn);const r=(c,M)=>{const v=Math.max(0,Number(c)||0);if(!v||!ke||typeof ke.takeDamage!="function")return;let w=null;try{if(M&&typeof M.x=="number"&&typeof M.z=="number"&&typeof ke.getPosition=="function"&&ke.getYaw){const U=ke.getPosition(),P=M.x-U.x,R=M.z-U.z,tt=Math.atan2(P,R),y=typeof ke.getYaw=="function"?ke.getYaw():0;let b=tt-y;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;const W=Math.abs(b);w=W<Math.PI/4?"front":W>3*Math.PI/4?"back":b>0?"right":"left"}}catch{}try{ke.takeDamage(v,w)}catch{ke.takeDamage(v)}};window.__takeZoneDamage=c=>r(c),window.__takeBotDamage=(c,M)=>r(c,M),window.__enemyCount=()=>{try{if(pi&&typeof pi._getCount=="function")return pi._getCount()}catch{}return 0};const l=i==="zombies",u=i==="pubg";if(window.__ZOMBIES_ACTIVE=l,window.__PUBG_ACTIVE=u,l)try{Dn=vc(ii,a,ke,Jn),window.__zombiesMode=Dn,window.__ZOMBIES_MODE=Dn,window.__getZombieRound=()=>Dn.getRound(),Dn.startRound(),console.log("[ZOMBIES] Horde mode activated - Round",Dn.getRound())}catch(c){console.error("[ZOMBIES] failed to start",c)}else if(u)try{Ln=xc(ii,a,ke,Jn),window.__pubgMode=Ln,window.__PUBG_MODE=Ln,Ln&&Ln.start?Ln.start():Ln&&Ln.init&&Ln.init(),console.log("[PUBG] Battle Royale mode activated")}catch(c){console.error("[PUBG] failed to start",c)}window.__enableZombies=()=>{if(Dn)return Dn;try{const c=vc(ii,a,ke,Jn);return Dn=c,window.__zombiesMode=c,window.__ZOMBIES_ACTIVE=!0,c.startRound(),console.log("[ZOMBIES] enabled at runtime"),c}catch(c){return console.error(c),null}},window.__disableZombies=()=>{Dn&&(Dn.dispose(),Dn=null,window.__zombiesMode=null,window.__ZOMBIES_ACTIVE=!1,console.log("[ZOMBIES] disabled"))},window.__enablePubg=()=>{if(Ln)return Ln;try{const c=xc(ii,a,ke,Jn);return Ln=c,window.__pubgMode=c,window.__PUBG_ACTIVE=!0,c.start&&c.start(),console.log("[PUBG] enabled at runtime"),c}catch(c){return console.error(c),null}},document.getElementById("playBtn").addEventListener("click",()=>ke.lock()),ke.addEventListener("lock",()=>document.getElementById("center").style.display="none"),ke.addEventListener("unlock",()=>document.getElementById("center").style.display="flex");const h=new URLSearchParams(window.location.search).has("capture");let d=performance.now(),m=[],p=0,_=0;function g(){h?setTimeout(g,110):requestAnimationFrame(g);const c=performance.now(),M=Math.min(.05,(c-d)/1e3);d=c;const v=Math.round(1/M),w=Wt.displayTier||Wt.tier,U=document.getElementById("fps");U&&(U.textContent=v+(Wt.isMobile?" · MOBILE "+w.toUpperCase():"")),(!Wt.isMobile||Wt.tier!=="low"||p%2===0)&&(m.push(v),m.length>30&&m.shift());const P=m.reduce((R,tt)=>R+tt,0)/m.length;if(m.length===30){P<28?_++:_=Math.max(0,_-1),_>60&&ro.shadowMap.enabled&&(console.warn("[FPS] low avg "+P.toFixed(1)+" -> disabling shadows for mobile"),ro.shadowMap.enabled=!1,Wt.isMobile&&ro.getPixelRatio()>1&&(ro.setPixelRatio(1),Yi.onResize&&Yi.onResize()),_=0);const R=w.toUpperCase()+" · "+Math.round(P)+"FPS"+(ro.shadowMap.enabled?" · SHADOW ON":" · SHADOW OFF"),tt=document.getElementById("qualityBadge");tt&&(tt.textContent=R);const y=document.getElementById("qualityBadgeHud");y&&(y.textContent=w.toUpperCase()+" · "+Math.round(P)+"FPS")}try{Ho.updateMatrixWorld(!0)}catch{}try{ko&&ko.update(M)}catch{}if(l&&Dn&&Dn.isActive())if(h)ke.update(M),Jn.update(M),p++,p%5===0&&Dn.update(M*5,ke.getPosition());else if(ke.update(M),Jn.update(M),Wt.isMobile){p++;const R=Wt.tier==="low"?5:3,tt=Wt.tier==="low"?5:3;p%R===0&&Dn.update(M*tt,ke.getPosition())}else Dn.update(M,ke.getPosition());else if(u&&Ln)if(ke.update(M),Jn.update(M),Wt.isMobile){p++;const R=Wt.tier==="low"?5:3,tt=Wt.tier==="low"?5:3;if(p%R===0){try{Ln.update&&Ln.update(M*tt,ke.getPosition())}catch{}pi.update(M*tt,ke.getPosition())}}else{try{Ln.update&&Ln.update(M,ke.getPosition())}catch{}pi.update(M,ke.getPosition())}else if(h)ke.update(M),Jn.update(M),p++,p%5===0&&pi.update(M*5,ke.getPosition());else if(ke.update(M),Jn.update(M),Wt.isMobile){p++;const R=Wt.tier==="low"?5:3,tt=Wt.tier==="low"?5:3;p%R===0&&pi.update(M*tt,ke.getPosition())}else pi.update(M,ke.getPosition());Yi.update(M),ro.render(ii,Ho)}g(),window.addEventListener("resize",()=>Yi.onResize())}Eg();
