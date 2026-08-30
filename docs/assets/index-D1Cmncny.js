(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},rs=[],un=()=>{},Of=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ma=t=>t.startsWith("onUpdate:"),et=Object.assign,Rc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D_=Object.prototype.hasOwnProperty,Se=(t,e)=>D_.call(t,e),ce=Array.isArray,ss=t=>Mi(t)==="[object Map]",xf=t=>Mi(t)==="[object Set]",Ch=t=>Mi(t)==="[object Date]",ge=t=>typeof t=="function",Be=t=>typeof t=="string",Jt=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Mf=t=>(Ce(t)||ge(t))&&ge(t.then)&&ge(t.catch),Lf=Object.prototype.toString,Mi=t=>Lf.call(t),N_=t=>Mi(t).slice(8,-1),Ff=t=>Mi(t)==="[object Object]",Sc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O_=/-\w/g,Qt=ga(t=>t.replace(O_,e=>e.slice(1).toUpperCase())),x_=/\B([A-Z])/g,fr=ga(t=>t.replace(x_,"-$1").toLowerCase()),Uf=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),ul=ga(t=>t?`on${Uf(t)}`:""),cn=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},M_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Ph;const _a=()=>Ph||(Ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ds(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?B_(r):ds(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ce(t))return t}const L_=/;(?![^(]*\))/g,F_=/:([^]+)/,U_=/\/\*[^]*?\*\//g;function B_(t){const e={};return t.replace(U_,"").split(L_).forEach(n=>{if(n){const r=n.split(F_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function He(t){let e="";if(Be(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=He(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=Ac($_);function $f(t){return!!t||t===""}function q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Pc(t[r],e[r]);return n}function Pc(t,e){if(t===e)return!0;let n=Ch(t),r=Ch(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Jt(t),r=Jt(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?q_(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Pc(t[o],e[o]))return!1}}return String(t)===String(e)}const jf=t=>!!(t&&t.__v_isRef===!0),ve=t=>Be(t)?t:t==null?"":ce(t)||Ce(t)&&(t.toString===Lf||!ge(t.toString))?jf(t)?ve(t.value):JSON.stringify(t,qf,2):String(t),qf=(t,e)=>jf(e)?qf(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hl(r,i)+" =>"]=s,n),{})}:xf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hl(n))}:Jt(e)?hl(e):Ce(e)&&!ce(e)&&!Ff(e)?String(e):e,hl=(t,e="")=>{var n;return Jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class H_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ot&&(ot.active?(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){if(this._on>0&&--this._on===0){if(ot===this)ot=this.prevScope;else{let e=ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function W_(){return ot}let Me;const dl=new WeakSet;class Hf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&(ot.active?ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dl.has(this)&&(dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kh(this),zf(this);const e=Me,n=Yt;Me=this,Yt=!0;try{return this.fn()}finally{Gf(this),Me=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dc(e);this.deps=this.depsTail=void 0,kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bl(this)&&this.run()}get dirty(){return Bl(this)}}let Wf=0,ii,oi;function Kf(t,e=!1){if(t.flags|=8,e){t.next=oi,oi=t;return}t.next=ii,ii=t}function kc(){Wf++}function Vc(){if(--Wf>0)return;if(oi){let e=oi;for(oi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ii;){let e=ii;for(ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Dc(r),K_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_i)||(t.globalVersion=_i,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bl(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Yt;Me=t,Yt=!0;try{zf(t);const s=t.fn(t._value);(e.version===0||cn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Yt=r,Gf(t),t.flags&=-3}}function Dc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Dc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function K_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const Yf=[];function mn(){Yf.push(Yt),Yt=!1}function gn(){const t=Yf.pop();Yt=t===void 0?!0:t}function kh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let _i=0;class z_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!Yt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new z_(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Jf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,_i++,this.notify(e)}notify(e){kc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vc()}}}function Jf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Jf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $l=new WeakMap,kr=Symbol(""),jl=Symbol(""),yi=Symbol("");function gt(t,e,n){if(Yt&&Me){let r=$l.get(t);r||$l.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nc),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=$l.get(t);if(!o){_i++;return}const l=c=>{c&&c.trigger()};if(kc(),e==="clear")o.forEach(l);else{const c=ce(t),h=c&&Sc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,y)=>{(y==="length"||y===yi||!Jt(y)&&y>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(yi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(kr)),ss(t)&&l(o.get(jl)));break;case"delete":c||(l(o.get(kr)),ss(t)&&l(o.get(jl)));break;case"set":ss(t)&&l(o.get(kr));break}}Vc()}function Qr(t){const e=Ae(t);return e===t?e:(gt(e,"iterate",yi),Ht(t)?e:e.map(Xt))}function ya(t){return gt(t=Ae(t),"iterate",yi),t}function an(t,e){return Nn(t)?fs(Vr(t)?Xt(e):e):Xt(e)}const G_={__proto__:null,[Symbol.iterator](){return fl(this,Symbol.iterator,t=>an(this,t))},concat(...t){return Qr(this).concat(...t.map(e=>ce(e)?Qr(e):e))},entries(){return fl(this,"entries",t=>(t[1]=an(this,t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(r=>an(this,r)),arguments)},find(t,e){return Tn(this,"find",t,e,n=>an(this,n),arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,n=>an(this,n),arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return pl(this,"includes",t)},indexOf(...t){return pl(this,"indexOf",t)},join(t){return Qr(this).join(t)},lastIndexOf(...t){return pl(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Vh(this,"reduce",t,e)},reduceRight(t,...e){return Vh(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return Qr(this).toReversed()},toSorted(t){return Qr(this).toSorted(t)},toSpliced(...t){return Qr(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return fl(this,"values",t=>an(this,t))}};function fl(t,e,n){const r=ya(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Q_=Array.prototype;function Tn(t,e,n,r,s,i){const o=ya(t),l=o!==t&&!Ht(t),c=o[e];if(c!==Q_[e]){const p=c.apply(t,i);return l?Xt(p):p}let h=n;o!==t&&(l?h=function(p,y){return n.call(this,an(t,p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Vh(t,e,n,r){const s=ya(t),i=s!==t&&!Ht(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,d,p){return l&&(l=!1,h=an(t,h)),n.call(this,h,an(t,d),p,t)}):n.length>3&&(o=function(h,d,p){return n.call(this,h,d,p,t)}));const c=s[e](o,...r);return l?an(t,c):c}function pl(t,e,n){const r=Ae(t);gt(r,"iterate",yi);const s=r[e](...n);return(s===-1||s===!1)&&Mc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function $s(t,e,n=[]){mn(),kc();const r=Ae(t)[e].apply(t,n);return Vc(),gn(),r}const Y_=Ac("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jt));function J_(t){Jt(t)||(t=String(t));const e=Ae(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Zf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ay:rp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=G_[n]))return c;if(n==="hasOwnProperty")return J_}const l=Reflect.get(e,n,wt(e)?e:r);if((Jt(n)?Xf.has(n):Y_(n))||(s||gt(e,"get",n),i))return l;if(wt(l)){const c=o&&Sc(n)?l:l.value;return s&&Ce(c)?Hl(c):c}return Ce(l)?s?Hl(l):vi(l):l}}class ep extends Zf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ce(e)&&Sc(n);if(!this._isShallow){const h=Nn(i);if(!Ht(r)&&!Nn(r)&&(i=Ae(i),r=Ae(r)),!o&&wt(i)&&!wt(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,wt(e)?e:s);return e===Ae(s)&&c&&(l?cn(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jt(n)||!Xf.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",ce(e)?"length":kr),Reflect.ownKeys(e)}}class X_ extends Zf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Z_=new ep,ey=new X_,ty=new ep(!0);const ql=t=>t,yo=t=>Reflect.getPrototypeOf(t);function ny(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=ss(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?ql:e?fs:Xt;return!e&&gt(i,"iterate",c?jl:kr),et(Object.create(h),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}}})}}function vo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ry(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(cn(s,l)&&gt(o,"get",s),gt(o,"get",l));const{has:c}=yo(o),h=e?ql:t?fs:Xt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Ae(s),"iterate",kr),s.size},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(cn(s,l)&&gt(o,"has",s),gt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?ql:t?fs:Xt;return!t&&gt(c,"iterate",kr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return et(n,t?{add:vo("add"),set:vo("set"),delete:vo("delete"),clear:vo("clear")}:{add(s){const i=Ae(this),o=yo(i),l=Ae(s),c=!e&&!Ht(s)&&!Nn(s)?l:s;return o.has.call(i,c)||cn(s,c)&&o.has.call(i,s)||cn(l,c)&&o.has.call(i,l)||(i.add(c),Rn(i,"add",c,c)),this},set(s,i){!e&&!Ht(i)&&!Nn(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=yo(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?cn(i,d)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=yo(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Rn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ny(s,t,e)}),n}function Oc(t,e){const n=ry(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const sy={get:Oc(!1,!1)},iy={get:Oc(!1,!0)},oy={get:Oc(!0,!1)};const tp=new WeakMap,np=new WeakMap,rp=new WeakMap,ay=new WeakMap;function ly(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vi(t){return Nn(t)?t:xc(t,!1,Z_,sy,tp)}function cy(t){return xc(t,!1,ty,iy,np)}function Hl(t){return xc(t,!0,ey,oy,rp)}function xc(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=ly(N_(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Vr(t){return Nn(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function Mc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function uy(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Bf(t,"__v_skip",!0),t}const Xt=t=>Ce(t)?vi(t):t,fs=t=>Ce(t)?Hl(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function de(t){return hy(t,!1)}function hy(t,e){return wt(t)?t:new dy(t,e)}class dy{constructor(e,n){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||Nn(e);e=r?e:Ae(e),cn(e,n)&&(this._rawValue=e,this._value=r?e:Xt(e),this.dep.trigger())}}function Yn(t){return wt(t)?t.value:t}const fy={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sp(t){return Vr(t)?t:new Proxy(t,fy)}class py{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Kf(this,!0),!0}get value(){const e=this.dep.track();return Qf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function my(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new py(r,s,n)}const wo={},jo=new WeakMap;let Ar;function gy(t,e=!1,n=Ar){if(n){let r=jo.get(n);r||jo.set(n,r=[]),r.push(t)}}function _y(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=F=>s?F:Ht(F)||s===!1||s===0?Sn(F,1):Sn(F);let d,p,y,A,V=!1,D=!1;if(wt(t)?(p=()=>t.value,V=Ht(t)):Vr(t)?(p=()=>h(t),V=!0):ce(t)?(D=!0,V=t.some(F=>Vr(F)||Ht(F)),p=()=>t.map(F=>{if(wt(F))return F.value;if(Vr(F))return h(F);if(ge(F))return c?c(F,2):F()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){mn();try{y()}finally{gn()}}const F=Ar;Ar=d;try{return c?c(t,3,[A]):t(A)}finally{Ar=F}}:p=un,e&&s){const F=p,G=s===!0?1/0:s;p=()=>Sn(F(),G)}const O=W_(),x=()=>{d.stop(),O&&O.active&&Rc(O.effects,d)};if(i&&e){const F=e;e=(...G)=>{const Q=F(...G);return x(),Q}}let k=D?new Array(t.length).fill(wo):wo;const U=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const G=d.run();if(F||s||V||(D?G.some((Q,T)=>cn(Q,k[T])):cn(G,k))){y&&y();const Q=Ar;Ar=d;try{const T=[G,k===wo?void 0:D&&k[0]===wo?[]:k,A];k=G,c?c(e,3,T):e(...T)}finally{Ar=Q}}}else d.run()};return l&&l(U),d=new Hf(p),d.scheduler=o?()=>o(U,!1):U,A=F=>gy(F,!1,d),y=d.onStop=()=>{const F=jo.get(d);if(F){if(c)c(F,4);else for(const G of F)G();jo.delete(d)}},e?r?U(!0):k=d.run():o?o(U.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Sn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,wt(t))Sn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(xf(t)||ss(t))t.forEach(r=>{Sn(r,e,n)});else if(Ff(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Li(t,e,n,r){try{return r?t(...r):t()}catch(s){va(s,e,n)}}function Kt(t,e,n,r){if(ge(t)){const s=Li(t,e,n,r);return s&&Mf(s)&&s.catch(i=>{va(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function va(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){mn(),Li(i,null,10,[t,c,h]),gn();return}}yy(t,n,s,r,o)}function yy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let on=-1;const is=[];let Qn=null,Yr=0;const ip=Promise.resolve();let qo=null;function ai(t){const e=qo||ip;return t?e.then(this?t.bind(this):t):e}function vy(t){let e=on+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=wi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Lc(t){if(!(t.flags&1)){const e=wi(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=wi(n)?Ct.push(t):Ct.splice(vy(e),0,t),t.flags|=1,op()}}function op(){qo||(qo=ip.then(lp))}function wy(t){ce(t)?is.push(...t):Qn&&t.id===-1?Qn.splice(Yr+1,0,t):t.flags&1||(is.push(t),t.flags|=1),op()}function Dh(t,e,n=on+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ap(t){if(is.length){const e=[...new Set(is)].sort((n,r)=>wi(n)-wi(r));if(is.length=0,Qn){Qn.push(...e);return}for(Qn=e,Yr=0;Yr<Qn.length;Yr++){const n=Qn[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,Yr=0}}const wi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lp(t){try{for(on=0;on<Ct.length;on++){const e=Ct[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<Ct.length;on++){const e=Ct[on];e&&(e.flags&=-2)}on=-1,Ct.length=0,ap(),qo=null,(Ct.length||is.length)&&lp()}}let vt=null,cp=null;function Ho(t){const e=vt;return vt=t,cp=t&&t.type.__scopeId||null,e}function Fi(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&zo(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&zo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tt(t,e){if(vt===null)return t;const n=Ra(vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(mn(),Kt(c,n,8,[t.el,l,t,e]),gn())}}function ko(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function Ft(t,e,n=!1){const r=Bp();if(r||as){let s=as?as._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const Ey=Symbol.for("v-scx"),Ty=()=>Ft(Ey);function Vo(t,e,n){return up(t,e,n)}function up(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let h;if(bi){if(i==="sync"){const A=Ty();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=un,A.resume=un,A.pause=un,A}}const d=Pt;l.call=(A,V,D)=>Kt(A,d,V,D);let p=!1;i==="post"?l.scheduler=A=>{Rt(A,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,V)=>{V?A():Lc(A)}),l.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const y=_y(t,e,l);return bi&&(h?h.push(y):c&&y()),y}function Iy(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?hp(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Ui(this),l=up(s,i.bind(r),n);return o(),l}function hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gn=new WeakMap,dp=Symbol("_vte"),fp=t=>t.__isTeleport,Sr=t=>t&&(t.disabled||t.disabled===""),by=t=>t&&(t.defer||t.defer===""),Nh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Oh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Wl=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},Ay={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:d,pc:p,pbc:y,o:{insert:A,querySelector:V,createText:D,createComment:O,parentNode:x}}=h,k=Sr(e.props);let{dynamicChildren:U}=e;const F=(T,_,g)=>{T.shapeFlag&16&&d(T.children,_,g,s,i,o,l,c)},G=(T=e)=>{const _=Sr(T.props),g=T.target=Wl(T.props,V),I=Kl(g,T,D,A);g&&(o!=="svg"&&Nh(g)?o="svg":o!=="mathml"&&Oh(g)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(g),_||(F(T,g,I),Qs(T,!1)))},Q=T=>{const _=()=>{if(Gn.get(T)===_){if(Gn.delete(T),Sr(T.props)){const g=x(T.el)||n;F(T,g,T.anchor),Qs(T,!0)}G(T)}};Gn.set(T,_),Rt(_,i)};if(t==null){const T=e.el=D(""),_=e.anchor=D("");if(A(T,n,r),A(_,n,r),by(e.props)||i&&i.pendingBranch){Q(e);return}k&&(F(e,n,_),Qs(e,!0)),G()}else{e.el=t.el;const T=e.anchor=t.anchor,_=Gn.get(t);if(_){_.flags|=8,Gn.delete(t),Q(e);return}e.targetStart=t.targetStart;const g=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Sr(t.props),E=b?n:g,v=b?T:I;if(o==="svg"||Nh(g)?o="svg":(o==="mathml"||Oh(g))&&(o="mathml"),U?(y(t.dynamicChildren,U,E,s,i,o,l),$c(t,e,!0)):c||p(t,e,E,v,s,i,o,l,!1),k)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Eo(e,n,T,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const _e=Wl(e.props,V);_e&&(e.target=_e,Eo(e,_e,null,h,0))}else b&&Eo(e,g,I,h,1);Qs(e,k)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:d,target:p,props:y}=t,A=Sr(y),V=i||!A,D=Gn.get(t);if(D&&(D.flags|=8,Gn.delete(t)),p&&(s(h),s(d)),i&&s(c),!D&&(A||p)&&o&16)for(let O=0;O<l.length;O++){const x=l[O];r(x,e,n,V,!!x.dynamicChildren)}},move:Eo,hydrate:Ry};function Eo(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:d}=t,p=i===2;if(p&&r(o,e,n),!Gn.has(t)&&(!p||Sr(d))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);p&&r(l,e,n)}function Ry(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:d}},p){function y(O,x){let k=x;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,O._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}}function A(O,x){x.anchor=p(o(O),x,l(O),n,r,s,i)}const V=e.target=Wl(e.props,c),D=Sr(e.props);if(V){const O=V._lpa||V.firstChild;e.shapeFlag&16&&(D?(A(t,e),y(V,O),e.targetAnchor||Kl(V,e,d,h,l(t)===V?t:null)):(e.anchor=o(t),y(V,O),e.targetAnchor||Kl(V,e,d,h),p(O&&o(O),e,V,n,r,s,i))),Qs(e,D)}else D&&e.shapeFlag&16&&(A(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const li=Ay;function Qs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Kl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[dp]=o,t&&(r(i,t,s),r(o,t,s)),o}const qt=Symbol("_leaveCb"),js=Symbol("_enterCb");function Sy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ta(()=>{t.isMounted=!0}),Fc(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},mp=t=>{const e=t.subTree;return e.component?mp(e.component):e},Cy={name:"BaseTransition",props:pp,setup(t,{slots:e}){const n=Bp(),r=Sy();return()=>{const s=e.default&&yp(e.default(),!0),i=s&&s.length?gp(s):n.subTree?Ve():void 0;if(!i)return;const o=Ae(t),{mode:l}=o;if(r.isLeaving)return ml(i);const c=xh(i);if(!c)return ml(i);let h=zl(c,o,r,n,p=>h=p);c.type!==yt&&Ei(c,h);let d=n.subTree&&xh(n.subTree);if(d&&d.type!==yt&&!Cr(d,c)&&mp(n).type!==yt){let p=zl(d,o,r,n);if(Ei(d,p),l==="out-in"&&c.type!==yt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},ml(i);l==="in-out"&&c.type!==yt?p.delayLeave=(y,A,V)=>{const D=_p(r,d);D[String(d.key)]=d,y[qt]=()=>{A(),y[qt]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function gp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yt){e=n;break}}return e}const Py=Cy;function _p(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:y,onLeave:A,onAfterLeave:V,onLeaveCancelled:D,onBeforeAppear:O,onAppear:x,onAfterAppear:k,onAppearCancelled:U}=e,F=String(t.key),G=_p(n,t),Q=(g,I)=>{g&&Kt(g,r,9,I)},T=(g,I)=>{const b=I[1];Q(g,I),ce(g)?g.every(E=>E.length<=1)&&b():g.length<=1&&b()},_={mode:o,persisted:l,beforeEnter(g){let I=c;if(!n.isMounted)if(i)I=O||c;else return;g[qt]&&g[qt](!0);const b=G[F];b&&Cr(t,b)&&b.el[qt]&&b.el[qt](),Q(I,[g])},enter(g){if(G[F]===t)return;let I=h,b=d,E=p;if(!n.isMounted)if(i)I=x||h,b=k||d,E=U||p;else return;let v=!1;g[js]=Ue=>{v||(v=!0,Ue?Q(E,[g]):Q(b,[g]),_.delayedLeave&&_.delayedLeave(),g[js]=void 0)};const _e=g[js].bind(null,!1);I?T(I,[g,_e]):_e()},leave(g,I){const b=String(t.key);if(g[js]&&g[js](!0),n.isUnmounting)return I();Q(y,[g]);let E=!1;g[qt]=_e=>{E||(E=!0,I(),_e?Q(D,[g]):Q(V,[g]),g[qt]=void 0,G[b]===t&&delete G[b])};const v=g[qt].bind(null,!1);G[b]=t,A?T(A,[g,v]):v()},clone(g){const I=zl(g,e,n,r,s);return s&&s(I),I}};return _}function ml(t){if(wa(t))return t=cr(t),t.children=null,t}function xh(t){if(!wa(t))return fp(t.type)&&t.children?gp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function Ei(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ei(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(yp(o.children,e,l))):(e||o.type!==yt)&&r.push(l!=null?cr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function pr(t,e){return ge(t)?et({name:t.name},e,{setup:t}):t}function vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Wo=new WeakMap;function ci(t,e,n,r,s=!1){if(ce(t)){t.forEach((D,O)=>ci(D,e&&(ce(e)?e[O]:e),n,r,s));return}if(os(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ci(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ra(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,y=Ae(p),A=p===xe?Of:D=>Mh(d,D)?!1:Se(y,D),V=(D,O)=>!(O&&Mh(d,O));if(h!=null&&h!==c){if(Lh(e),Be(h))d[h]=null,A(h)&&(p[h]=null);else if(wt(h)){const D=e;V(h,D.k)&&(h.value=null),D.k&&(d[D.k]=null)}}if(ge(c)){mn();try{Li(c,l,12,[o,d])}finally{gn()}}else{const D=Be(c),O=wt(c);if(D||O){const x=()=>{if(t.f){const k=D?A(c)?p[c]:d[c]:V()||!t.k?c.value:d[t.k];if(s)ce(k)&&Rc(k,i);else if(ce(k))k.includes(i)||k.push(i);else if(D)d[c]=[i],A(c)&&(p[c]=d[c]);else{const U=[i];V(c,t.k)&&(c.value=U),t.k&&(d[t.k]=U)}}else D?(d[c]=o,A(c)&&(p[c]=o)):O&&(V(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const k=()=>{x(),Wo.delete(t)};k.id=-1,Wo.set(t,k),Rt(k,n)}else Lh(t),x()}}}function Lh(t){const e=Wo.get(t);e&&(e.flags|=8,Wo.delete(t))}_a().requestIdleCallback;_a().cancelIdleCallback;const os=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function ky(t,e){wp(t,"a",e)}function Vy(t,e){wp(t,"da",e)}function wp(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wa(s.parent.vnode)&&Dy(r,e,n,s),s=s.parent}}function Dy(t,e,n,r){const s=Ea(e,t,r,!0);Ia(()=>{Rc(r[e],s)},n)}function Ea(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mn();const l=Ui(n),c=Kt(e,n,t,o);return l(),gn(),c});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Pt)=>{(!bi||t==="sp")&&Ea(t,(...r)=>e(...r),n)},Ny=Un("bm"),Ta=Un("m"),Oy=Un("bu"),xy=Un("u"),Fc=Un("bum"),Ia=Un("um"),My=Un("sp"),Ly=Un("rtg"),Fy=Un("rtc");function Uy(t,e=Pt){Ea("ec",t,e)}const By=Symbol.for("v-ndc");function nr(t,e,n,r){let s;const i=n,o=ce(t);if(o||Be(t)){const l=o&&Vr(t);let c=!1,h=!1;l&&(c=!Ht(t),h=Nn(t),t=ya(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?fs(Xt(t[d])):Xt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function $y(t,e,n={},r,s){if(vt.ce||vt.parent&&os(vt.parent)&&vt.parent.ce){const h=Object.keys(n).length>0;return Z(),Wt(Ne,null,[ke("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Z();const o=i&&Ep(i(n)),l=n.key||o&&o.key,c=Wt(Ne,{key:(l&&!Jt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ep(t){return t.some(e=>Ii(e)?!(e.type===yt||e.type===Ne&&!Ep(e.children)):!0)?t:null}const Gl=t=>t?$p(t)?Ra(t):Gl(t.parent):null,ui=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ip(t),$forceUpdate:t=>t.f||(t.f=()=>{Lc(t.update)}),$nextTick:t=>t.n||(t.n=ai.bind(t.proxy)),$watch:t=>Iy.bind(t)}),gl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Se(t,e),jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gl(r,e))return o[e]=1,r[e];if(s!==xe&&Se(s,e))return o[e]=2,s[e];if(Se(i,e))return o[e]=3,i[e];if(n!==xe&&Se(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const h=ui[e];let d,p;if(h)return e==="$attrs"&&gt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==xe&&Se(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Se(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gl(s,e)?(s[e]=n,!0):r!==xe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==xe&&l[0]!=="$"&&Se(t,l)||gl(e,l)||Se(i,l)||Se(r,l)||Se(ui,l)||Se(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ql=!0;function qy(t){const e=Ip(t),n=t.proxy,r=t.ctx;Ql=!1,e.beforeCreate&&Uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:A,updated:V,activated:D,deactivated:O,beforeDestroy:x,beforeUnmount:k,destroyed:U,unmounted:F,render:G,renderTracked:Q,renderTriggered:T,errorCaptured:_,serverPrefetch:g,expose:I,inheritAttrs:b,components:E,directives:v,filters:_e}=e;if(h&&Hy(h,r,null),o)for(const le in o){const B=o[le];ge(B)&&(r[le]=B.bind(n))}if(s){const le=s.call(n,n);Ce(le)&&(t.data=vi(le))}if(Ql=!0,i)for(const le in i){const B=i[le],te=ge(B)?B.bind(n,n):ge(B.get)?B.get.bind(n,n):un,Ye=!ge(B)&&ge(B.set)?B.set.bind(n):un,zt=ts({get:te,set:Ye});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>zt.value,set:Ke=>zt.value=Ke})}if(l)for(const le in l)Tp(l[le],r,n,le);if(c){const le=ge(c)?c.call(n):c;Reflect.ownKeys(le).forEach(B=>{ko(B,le[B])})}d&&Uh(d,t,"c");function Pe(le,B){ce(B)?B.forEach(te=>le(te.bind(n))):B&&le(B.bind(n))}if(Pe(Ny,p),Pe(Ta,y),Pe(Oy,A),Pe(xy,V),Pe(ky,D),Pe(Vy,O),Pe(Uy,_),Pe(Fy,Q),Pe(Ly,T),Pe(Fc,k),Pe(Ia,F),Pe(My,g),ce(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(B=>{Object.defineProperty(le,B,{get:()=>n[B],set:te=>n[B]=te,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===un&&(t.render=G),b!=null&&(t.inheritAttrs=b),E&&(t.components=E),v&&(t.directives=v),g&&vp(t)}function Hy(t,e,n=un){ce(t)&&(t=Yl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Ft(s.from||r,s.default,!0):i=Ft(s.from||r):i=Ft(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Uh(t,e,n){Kt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,r){let s=r.includes(".")?hp(n,r):()=>n[r];if(Be(t)){const i=e[t];ge(i)&&Vo(s,i)}else if(ge(t))Vo(s,t.bind(n));else if(Ce(t))if(ce(t))t.forEach(i=>Tp(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Vo(s,i,t)}}function Ip(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ko(c,h,o,!0)),Ko(c,e,o)),Ce(e)&&i.set(e,c),c}function Ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ko(t,i,n,!0),s&&s.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Wy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Wy={data:Bh,props:$h,emits:$h,methods:Ys,computed:Ys,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Ys,directives:Ys,watch:zy,provide:Bh,inject:Ky};function Bh(t,e){return e?t?function(){return et(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function Ky(t,e){return Ys(Yl(t),Yl(e))}function Yl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?et(Object.create(null),t,e):e}function $h(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:et(Object.create(null),Fh(t),Fh(e??{})):e}function zy(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function bp(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gy=0;function Qy(t,e){return function(r,s=null){ge(r)||(r=et({},r)),s!=null&&!Ce(s)&&(s=null);const i=bp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Gy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(h,...p)):ge(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const A=h._ceVNode||ke(r,s);return A.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(A,d,y),c=!0,h._container=d,d.__vue_app__=h,Ra(A.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Kt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=as;as=h;try{return d()}finally{as=p}}};return h}}let as=null;const Yy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${fr(e)}Modifiers`];function Jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&Yy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Be(d)?d.trim():d)),o.number&&(s=n.map(Cc)));let l,c=r[l=ul(e)]||r[l=ul(Qt(e))];!c&&i&&(c=r[l=ul(fr(e))]),c&&Kt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Kt(h,t,6,s)}}const Xy=new WeakMap;function Ap(t,e,n=!1){const r=n?Xy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=h=>{const d=Ap(h,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):et(o,i),Ce(t)&&r.set(t,o),o)}function ba(t,e){return!t||!pa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,fr(e))||Se(t,e))}function jh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:A,ctx:V,inheritAttrs:D}=t,O=Ho(t);let x,k;try{if(n.shapeFlag&4){const F=s||r,G=F;x=ln(h.call(G,F,d,p,A,y,V)),k=l}else{const F=e;x=ln(F.length>1?F(p,{attrs:l,slots:o,emit:c}):F(p,null)),k=e.props?l:Zy(l)}}catch(F){hi.length=0,va(F,t,1),x=ke(yt)}let U=x;if(k&&D!==!1){const F=Object.keys(k),{shapeFlag:G}=U;F.length&&G&7&&(i&&F.some(ma)&&(k=ev(k,i)),U=cr(U,k,!1,!0))}return n.dirs&&(U=cr(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&Ei(U,n.transition),x=U,Ho(O),x}const Zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},ev=(t,e)=>{const n={};for(const r in t)(!ma(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?qh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(Rp(o,r,y)&&!ba(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?qh(r,o,h):!0:!!o;return!1}function qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Rp(e,t,i)&&!ba(n,i))return!0}return!1}function Rp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!Pc(r,s):r!==s}function nv({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Sp={},Cp=()=>Object.create(Sp),Pp=t=>Object.getPrototypeOf(t)===Sp;function rv(t,e,n,r=!1){const s={},i=Cp();t.propsDefaults=Object.create(null),kp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(ba(t.emitsOptions,y))continue;const A=e[y];if(c)if(Se(i,y))A!==i[y]&&(i[y]=A,h=!0);else{const V=Qt(y);s[V]=Jl(c,l,V,A,t,!1)}else A!==i[y]&&(i[y]=A,h=!0)}}}else{kp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=fr(p))===p||!Se(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Jl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&Rn(t.attrs,"set","")}function kp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(si(c))continue;const h=e[c];let d;s&&Se(s,d=Qt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ba(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Jl(s,c,p,h[p],t,!Se(h,p))}}return o}function Jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ui(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===fr(n))&&(r=!0))}return r}const iv=new WeakMap;function Vp(t,e,n=!1){const r=n?iv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[y,A]=Vp(p,e,!0);et(o,y),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ce(t)&&r.set(t,rs),rs;if(ce(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);Hh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=Qt(d);if(Hh(p)){const y=i[d],A=o[p]=ce(y)||ge(y)?{type:y}:et({},y),V=A.type;let D=!1,O=!0;if(ce(V))for(let x=0;x<V.length;++x){const k=V[x],U=ge(k)&&k.name;if(U==="Boolean"){D=!0;break}else U==="String"&&(O=!1)}else D=ge(V)&&V.name==="Boolean";A[0]=D,A[1]=O,(D||Se(A,"default"))&&l.push(p)}}const h=[o,l];return Ce(t)&&r.set(t,h),h}function Hh(t){return t[0]!=="$"&&!si(t)}const Uc=t=>t==="_"||t==="_ctx"||t==="$stable",Bc=t=>ce(t)?t.map(ln):[ln(t)],ov=(t,e,n)=>{if(e._n)return e;const r=Fi((...s)=>Bc(e(...s)),n);return r._c=!1,r},Dp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Uc(s))continue;const i=t[s];if(ge(i))e[s]=ov(s,i,r);else if(i!=null){const o=Bc(i);e[s]=()=>o}}},Np=(t,e)=>{const n=Bc(e);t.slots.default=()=>n},Op=(t,e,n)=>{for(const r in e)(n||!Uc(r))&&(t[r]=e[r])},av=(t,e,n)=>{const r=t.slots=Cp();if(t.vnode.shapeFlag&32){const s=e._;s?(Op(r,e,n),n&&Bf(r,"_",s,!0)):Dp(e,r)}else e&&Np(t,e)},lv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Op(s,e,n):(i=!e.$stable,Dp(e,s)),o=e}else e&&(Np(t,e),o={default:1});if(i)for(const l in s)!Uc(l)&&o[l]==null&&delete s[l]},Rt=fv;function cv(t){return uv(t)}function uv(t,e){const n=_a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:A=un,insertStaticContent:V}=t,D=(w,R,M,K=null,H=null,q=null,J=void 0,L=null,S=!!R.dynamicChildren)=>{if(w===R)return;w&&!Cr(w,R)&&(K=rt(w),Ke(w,H,q,!0),w=null),R.patchFlag===-2&&(S=!1,R.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:X}=R;switch(j){case Aa:O(w,R,M,K);break;case yt:x(w,R,M,K);break;case yl:w==null&&k(R,M,K,J);break;case Ne:E(w,R,M,K,H,q,J,L,S);break;default:X&1?G(w,R,M,K,H,q,J,L,S):X&6?v(w,R,M,K,H,q,J,L,S):(X&64||X&128)&&j.process(w,R,M,K,H,q,J,L,S,It)}oe!=null&&H?ci(oe,w&&w.ref,q,R||w,!R):oe==null&&w&&w.ref!=null&&ci(w.ref,null,q,w,!0)},O=(w,R,M,K)=>{if(w==null)r(R.el=l(R.children),M,K);else{const H=R.el=w.el;R.children!==w.children&&h(H,R.children)}},x=(w,R,M,K)=>{w==null?r(R.el=c(R.children||""),M,K):R.el=w.el},k=(w,R,M,K)=>{[w.el,w.anchor]=V(w.children,R,M,K,w.el,w.anchor)},U=({el:w,anchor:R},M,K)=>{let H;for(;w&&w!==R;)H=y(w),r(w,M,K),w=H;r(R,M,K)},F=({el:w,anchor:R})=>{let M;for(;w&&w!==R;)M=y(w),s(w),w=M;s(R)},G=(w,R,M,K,H,q,J,L,S)=>{if(R.type==="svg"?J="svg":R.type==="math"&&(J="mathml"),w==null)Q(R,M,K,H,q,J,L,S);else{const j=w.el&&w.el._isVueCE?w.el:null;try{j&&j._beginPatch(),g(w,R,H,q,J,L,S)}finally{j&&j._endPatch()}}},Q=(w,R,M,K,H,q,J,L)=>{let S,j;const{props:oe,shapeFlag:X,transition:se,dirs:W}=w;if(S=w.el=o(w.type,q,oe&&oe.is,oe),X&8?d(S,w.children):X&16&&_(w.children,S,null,K,H,_l(w,q),J,L),W&&Er(w,null,K,"created"),T(S,w,w.scopeId,J,K),oe){for(const me in oe)me!=="value"&&!si(me)&&i(S,me,null,oe[me],q,K);"value"in oe&&i(S,"value",null,oe.value,q),(j=oe.onVnodeBeforeMount)&&rn(j,K,w)}W&&Er(w,null,K,"beforeMount");const ne=hv(H,se);ne&&se.beforeEnter(S),r(S,R,M),((j=oe&&oe.onVnodeMounted)||ne||W)&&Rt(()=>{try{j&&rn(j,K,w),ne&&se.enter(S),W&&Er(w,null,K,"mounted")}finally{}},H)},T=(w,R,M,K,H)=>{if(M&&A(w,M),K)for(let q=0;q<K.length;q++)A(w,K[q]);if(H){let q=H.subTree;if(R===q||Lp(q.type)&&(q.ssContent===R||q.ssFallback===R)){const J=H.vnode;T(w,J,J.scopeId,J.slotScopeIds,H.parent)}}},_=(w,R,M,K,H,q,J,L,S=0)=>{for(let j=S;j<w.length;j++){const oe=w[j]=L?An(w[j]):ln(w[j]);D(null,oe,R,M,K,H,q,J,L)}},g=(w,R,M,K,H,q,J)=>{const L=R.el=w.el;let{patchFlag:S,dynamicChildren:j,dirs:oe}=R;S|=w.patchFlag&16;const X=w.props||xe,se=R.props||xe;let W;if(M&&Tr(M,!1),(W=se.onVnodeBeforeUpdate)&&rn(W,M,R,w),oe&&Er(R,w,M,"beforeUpdate"),M&&Tr(M,!0),j&&(!w.dynamicChildren||w.dynamicChildren.length!==j.length)&&(S=0,J=!1,j=null),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&d(L,""),j?I(w.dynamicChildren,j,L,M,K,_l(R,H),q):J||B(w,R,L,null,M,K,_l(R,H),q,!1),S>0){if(S&16)b(L,X,se,M,H);else if(S&2&&X.class!==se.class&&i(L,"class",null,se.class,H),S&4&&i(L,"style",X.style,se.style,H),S&8){const ne=R.dynamicProps;for(let me=0;me<ne.length;me++){const Te=ne[me],$e=X[Te],Je=se[Te];(Je!==$e||Te==="value")&&i(L,Te,$e,Je,H,M)}}S&1&&w.children!==R.children&&d(L,R.children)}else!J&&j==null&&b(L,X,se,M,H);((W=se.onVnodeUpdated)||oe)&&Rt(()=>{W&&rn(W,M,R,w),oe&&Er(R,w,M,"updated")},K)},I=(w,R,M,K,H,q,J)=>{for(let L=0;L<R.length;L++){const S=w[L],j=R[L],oe=S.el&&(S.type===Ne||!Cr(S,j)||S.shapeFlag&198)?p(S.el):M;D(S,j,oe,null,K,H,q,J,!0)}},b=(w,R,M,K,H)=>{if(R!==M){if(R!==xe)for(const q in R)!si(q)&&!(q in M)&&i(w,q,R[q],null,H,K);for(const q in M){if(si(q))continue;const J=M[q],L=R[q];J!==L&&q!=="value"&&i(w,q,L,J,H,K)}"value"in M&&i(w,"value",R.value,M.value,H)}},E=(w,R,M,K,H,q,J,L,S)=>{const j=R.el=w?w.el:l(""),oe=R.anchor=w?w.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:W}=R;W&&(L=L?L.concat(W):W),w==null?(r(j,M,K),r(oe,M,K),_(R.children||[],M,oe,H,q,J,L,S)):X>0&&X&64&&se&&w.dynamicChildren&&w.dynamicChildren.length===se.length?(I(w.dynamicChildren,se,M,H,q,J,L),(R.key!=null||H&&R===H.subTree)&&$c(w,R,!0)):B(w,R,M,oe,H,q,J,L,S)},v=(w,R,M,K,H,q,J,L,S)=>{R.slotScopeIds=L,w==null?R.shapeFlag&512?H.ctx.activate(R,M,K,J,S):_e(R,M,K,H,q,J,S):Ue(w,R,S)},_e=(w,R,M,K,H,q,J)=>{const L=w.component=wv(w,K,H);if(wa(w)&&(L.ctx.renderer=It),Ev(L,!1,J),L.asyncDep){if(H&&H.registerDep(L,Pe,J),!w.el){const S=L.subTree=ke(yt);x(null,S,R,M),w.placeholder=S.el}}else Pe(L,w,R,M,H,q,J)},Ue=(w,R,M)=>{const K=R.component=w.component;if(tv(w,R,M))if(K.asyncDep&&!K.asyncResolved){le(K,R,M);return}else K.next=R,K.update();else R.el=w.el,K.vnode=R},Pe=(w,R,M,K,H,q,J)=>{const L=()=>{if(w.isMounted){let{next:X,bu:se,u:W,parent:ne,vnode:me}=w;{const ht=xp(w);if(ht){X&&(X.el=me.el,le(w,X,J)),ht.asyncDep.then(()=>{Rt(()=>{w.isUnmounted||j()},H)});return}}let Te=X,$e;Tr(w,!1),X?(X.el=me.el,le(w,X,J)):X=me,se&&Po(se),($e=X.props&&X.props.onVnodeBeforeUpdate)&&rn($e,ne,X,me),Tr(w,!0);const Je=jh(w),Ut=w.subTree;w.subTree=Je,D(Ut,Je,p(Ut.el),rt(Ut),w,H,q),X.el=Je.el,Te===null&&nv(w,Je.el),W&&Rt(W,H),($e=X.props&&X.props.onVnodeUpdated)&&Rt(()=>rn($e,ne,X,me),H)}else{let X;const{el:se,props:W}=R,{bm:ne,m:me,parent:Te,root:$e,type:Je}=w,Ut=os(R);Tr(w,!1),ne&&Po(ne),!Ut&&(X=W&&W.onVnodeBeforeMount)&&rn(X,Te,R),Tr(w,!0);{$e.ce&&$e.ce._hasShadowRoot()&&$e.ce._injectChildStyle(Je,w.parent?w.parent.type:void 0);const ht=w.subTree=jh(w);D(null,ht,M,K,w,H,q),R.el=ht.el}if(me&&Rt(me,H),!Ut&&(X=W&&W.onVnodeMounted)){const ht=R;Rt(()=>rn(X,Te,ht),H)}(R.shapeFlag&256||Te&&os(Te.vnode)&&Te.vnode.shapeFlag&256)&&w.a&&Rt(w.a,H),w.isMounted=!0,R=M=K=null}};w.scope.on();const S=w.effect=new Hf(L);w.scope.off();const j=w.update=S.run.bind(S),oe=w.job=S.runIfDirty.bind(S);oe.i=w,oe.id=w.uid,S.scheduler=()=>Lc(oe),Tr(w,!0),j()},le=(w,R,M)=>{R.component=w;const K=w.vnode.props;w.vnode=R,w.next=null,sv(w,R.props,K,M),lv(w,R.children,M),mn(),Dh(w),gn()},B=(w,R,M,K,H,q,J,L,S=!1)=>{const j=w&&w.children,oe=w?w.shapeFlag:0,X=R.children,{patchFlag:se,shapeFlag:W}=R;if(se>0){if(se&128){Ye(j,X,M,K,H,q,J,L,S);return}else if(se&256){te(j,X,M,K,H,q,J,L,S);return}}W&8?(oe&16&&vn(j,H,q),X!==j&&d(M,X)):oe&16?W&16?Ye(j,X,M,K,H,q,J,L,S):vn(j,H,q,!0):(oe&8&&d(M,""),W&16&&_(X,M,K,H,q,J,L,S))},te=(w,R,M,K,H,q,J,L,S)=>{w=w||rs,R=R||rs;const j=w.length,oe=R.length,X=Math.min(j,oe);let se;for(se=0;se<X;se++){const W=R[se]=S?An(R[se]):ln(R[se]);D(w[se],W,M,null,H,q,J,L,S)}j>oe?vn(w,H,q,!0,!1,X):_(R,M,K,H,q,J,L,S,X)},Ye=(w,R,M,K,H,q,J,L,S)=>{let j=0;const oe=R.length;let X=w.length-1,se=oe-1;for(;j<=X&&j<=se;){const W=w[j],ne=R[j]=S?An(R[j]):ln(R[j]);if(Cr(W,ne))D(W,ne,M,null,H,q,J,L,S);else break;j++}for(;j<=X&&j<=se;){const W=w[X],ne=R[se]=S?An(R[se]):ln(R[se]);if(Cr(W,ne))D(W,ne,M,null,H,q,J,L,S);else break;X--,se--}if(j>X){if(j<=se){const W=se+1,ne=W<oe?R[W].el:K;for(;j<=se;)D(null,R[j]=S?An(R[j]):ln(R[j]),M,ne,H,q,J,L,S),j++}}else if(j>se)for(;j<=X;)Ke(w[j],H,q,!0),j++;else{const W=j,ne=j,me=new Map;for(j=ne;j<=se;j++){const st=R[j]=S?An(R[j]):ln(R[j]);st.key!=null&&me.set(st.key,j)}let Te,$e=0;const Je=se-ne+1;let Ut=!1,ht=0;const jn=new Array(Je);for(j=0;j<Je;j++)jn[j]=0;for(j=W;j<=X;j++){const st=w[j];if($e>=Je){Ke(st,H,q,!0);continue}let Bt;if(st.key!=null)Bt=me.get(st.key);else for(Te=ne;Te<=se;Te++)if(jn[Te-ne]===0&&Cr(st,R[Te])){Bt=Te;break}Bt===void 0?Ke(st,H,q,!0):(jn[Bt-ne]=j+1,Bt>=ht?ht=Bt:Ut=!0,D(st,R[Bt],M,null,H,q,J,L,S),$e++)}const Cs=Ut?dv(jn):rs;for(Te=Cs.length-1,j=Je-1;j>=0;j--){const st=ne+j,Bt=R[st],to=R[st+1],Hr=st+1<oe?to.el||Mp(to):K;jn[j]===0?D(null,Bt,M,Hr,H,q,J,L,S):Ut&&(Te<0||j!==Cs[Te]?zt(Bt,M,Hr,2):Te--)}}},zt=(w,R,M,K,H=null)=>{const{el:q,type:J,transition:L,children:S,shapeFlag:j}=w;if(j&6){zt(w.component.subTree,R,M,K);return}if(j&128){w.suspense.move(R,M,K);return}if(j&64){J.move(w,R,M,It);return}if(J===Ne){r(q,R,M);for(let X=0;X<S.length;X++)zt(S[X],R,M,K);r(w.anchor,R,M);return}if(J===yl){U(w,R,M);return}if(K!==2&&j&1&&L)if(K===0)L.persisted&&!q[qt]?r(q,R,M):(L.beforeEnter(q),r(q,R,M),Rt(()=>L.enter(q),H));else{const{leave:X,delayLeave:se,afterLeave:W}=L,ne=()=>{w.ctx.isUnmounted?s(q):r(q,R,M)},me=()=>{const Te=q._isLeaving||!!q[qt];q._isLeaving&&q[qt](!0),L.persisted&&!Te?ne():X(q,()=>{ne(),W&&W()})};se?se(q,ne,me):me()}else r(q,R,M)},Ke=(w,R,M,K=!1,H=!1)=>{const{type:q,props:J,ref:L,children:S,dynamicChildren:j,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:W,memo:ne}=w;if(X===-2&&(H=!1),L!=null&&(mn(),ci(L,null,M,w,!0),gn()),W!=null&&(R.renderCache[W]=void 0),oe&256){R.ctx.deactivate(w);return}const me=oe&1&&se,Te=!os(w);let $e;if(Te&&($e=J&&J.onVnodeBeforeUnmount)&&rn($e,R,w),oe&6)yn(w.component,M,K);else{if(oe&128){w.suspense.unmount(M,K);return}me&&Er(w,null,R,"beforeUnmount"),oe&64?w.type.remove(w,R,M,It,K):j&&!j.hasOnce&&(q!==Ne||X>0&&X&64)?vn(j,R,M,!1,!0):(q===Ne&&X&384||!H&&oe&16)&&vn(S,R,M),K&&Re(w)}const Je=ne!=null&&W==null;(Te&&($e=J&&J.onVnodeUnmounted)||me||Je)&&Rt(()=>{$e&&rn($e,R,w),me&&Er(w,null,R,"unmounted"),Je&&(w.el=null)},M)},Re=w=>{const{type:R,el:M,anchor:K,transition:H}=w;if(R===Ne){qr(M,K);return}if(R===yl){F(w);return}const q=()=>{s(M),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(w.shapeFlag&1&&H&&!H.persisted){const{leave:J,delayLeave:L}=H,S=()=>J(M,q);L?L(w.el,q,S):S()}else q()},qr=(w,R)=>{let M;for(;w!==R;)M=y(w),s(w),w=M;s(R)},yn=(w,R,M)=>{const{bum:K,scope:H,job:q,subTree:J,um:L,m:S,a:j}=w;Wh(S),Wh(j),K&&Po(K),H.stop(),q&&(q.flags|=8,Ke(J,w,R,M)),L&&Rt(L,R),Rt(()=>{w.isUnmounted=!0},R)},vn=(w,R,M,K=!1,H=!1,q=0)=>{for(let J=q;J<w.length;J++)Ke(w[J],R,M,K,H)},rt=w=>{if(w.shapeFlag&6)return rt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=y(w.anchor||w.el),M=R&&R[dp];return M?y(M):R};let tn=!1;const kt=(w,R,M)=>{let K;w==null?R._vnode&&(Ke(R._vnode,null,null,!0),K=R._vnode.component):D(R._vnode||null,w,R,null,null,null,M),R._vnode=w,tn||(tn=!0,Dh(K),ap(),tn=!1)},It={p:D,um:Ke,m:zt,r:Re,mt:_e,mc:_,pc:B,pbc:I,n:rt,o:t};return{render:kt,hydrate:void 0,createApp:Qy(kt)}}function _l({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $c(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=An(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$c(o,l)),l.type===Aa&&(l.patchFlag===-1&&(l=s[i]=An(l)),l.el=o.el),l.type===yt&&!l.el&&(l.el=o.el)}}function dv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function xp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xp(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Mp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Mp(e.subTree):null}const Lp=t=>t.__isSuspense;function fv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):wy(t)}const Ne=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),hi=[];let Mt=null;function Z(t=!1){hi.push(Mt=t?null:[])}function pv(){hi.pop(),Mt=hi[hi.length-1]||null}let Ti=1;function zo(t,e=!1){Ti+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function Fp(t){return t.dynamicChildren=Ti>0?Mt||rs:null,pv(),Ti>0&&Mt&&Mt.push(t),t}function ie(t,e,n,r,s,i){return Fp(P(t,e,n,r,s,i,!0))}function Wt(t,e,n,r,s){return Fp(ke(t,e,n,r,s,!0))}function Ii(t){return t?t.__v_isVNode===!0:!1}function Cr(t,e){return t.type===e.type&&t.key===e.key}const Up=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||wt(t)||ge(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Up(e),ref:e&&Do(e),scopeId:cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return l?(Go(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),Ti>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const ke=mv;function mv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===By)&&(t=yt),Ii(t)){const l=cr(t,e,!0);return n&&Go(l,n),Ti>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag=-2,l}if(Av(t)&&(t=t.__vccOpts),e){e=gv(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=He(l)),Ce(c)&&(Mc(c)&&!ce(c)&&(c=et({},c)),e.style=ds(c))}const o=Be(t)?1:Lp(t)?128:fp(t)?64:Ce(t)?4:ge(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function gv(t){return t?Mc(t)||Pp(t)?et({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?_v(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Up(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ei(d,c.clone(d)),d}function jt(t=" ",e=0){return ke(Aa,null,t,e)}function Ve(t="",e=!1){return e?(Z(),Wt(yt,null,t)):ke(yt,null,t)}function ln(t){return t==null||typeof t=="boolean"?ke(yt):ce(t)?ke(Ne,null,t.slice()):Ii(t)?An(t):ke(Aa,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Go(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Go(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pp(e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ge(e)){if(r&65){Go(t,{default:e});return}e={default:e,_ctx:vt},n=32}else e=String(e),r&64?(n=16,e=[jt(e)]):n=8;t.children=e,t.shapeFlag|=n}function _v(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=He([e.class,r.class]));else if(s==="style")e.style=ds([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ma(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){Kt(t,e,7,[n,r])}const yv=bp();let vv=0;function wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yv,i={uid:vv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:Ap(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const Bp=()=>Pt||vt;let Qo,Xl;{const t=_a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qo=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Xl=e("__VUE_SSR_SETTERS__",n=>bi=n)}const Ui=t=>{const e=Pt;return Qo(t),t.scope.on(),()=>{t.scope.off(),Qo(e)}},Kh=()=>{Pt&&Pt.scope.off(),Qo(null)};function $p(t){return t.vnode.shapeFlag&4}let bi=!1;function Ev(t,e=!1,n=!1){e&&Xl(e);const{props:r,children:s}=t.vnode,i=$p(t);rv(t,r,i,e),av(t,s,n||e);const o=i?Tv(t,e):void 0;return e&&Xl(!1),o}function Tv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jy);const{setup:r}=n;if(r){mn();const s=t.setupContext=r.length>1?bv(t):null,i=Ui(t),o=Li(r,t,0,[t.props,s]),l=Mf(o);if(gn(),i(),(l||t.sp)&&!os(t)&&vp(t),l){if(o.then(Kh,Kh),e)return o.then(c=>{zh(t,c)}).catch(c=>{va(c,t,0)});t.asyncDep=o}else zh(t,o)}else jp(t)}function zh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=sp(e)),jp(t)}function jp(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=Ui(t);mn();try{qy(t)}finally{gn(),s()}}}const Iv={get(t,e){return gt(t,"get",""),t[e]}};function bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Iv),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sp(uy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function Av(t){return ge(t)&&"__vccOpts"in t}const ts=(t,e)=>my(t,e,bi);function Rv(t,e,n){try{zo(-1);const r=arguments.length;return r===2?Ce(e)&&!ce(e)?Ii(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),ke(t,e,n))}finally{zo(1)}}const Sv="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const Gh=typeof window<"u"&&window.trustedTypes;if(Gh)try{Zl=Gh.createPolicy("vue",{createHTML:t=>t})}catch{}const qp=Zl?t=>Zl.createHTML(t):t=>t,Cv="http://www.w3.org/2000/svg",Pv="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Qh=bn&&bn.createElement("template"),kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS(Cv,t):e==="mathml"?bn.createElementNS(Pv,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Qh.innerHTML=qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Qh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kn="transition",qs="animation",Ai=Symbol("_vtc"),Hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vv=et({},pp,Hp),Dv=t=>(t.displayName="Transition",t.props=Vv,t),Wp=Dv((t,{slots:e})=>Rv(Py,Nv(t),e)),Ir=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yh=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function Nv(t){const e={};for(const E in t)E in Hp||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,V=Ov(s),D=V&&V[0],O=V&&V[1],{onBeforeEnter:x,onEnter:k,onEnterCancelled:U,onLeave:F,onLeaveCancelled:G,onBeforeAppear:Q=x,onAppear:T=k,onAppearCancelled:_=U}=e,g=(E,v,_e,Ue)=>{E._enterCancelled=Ue,br(E,v?d:l),br(E,v?h:o),_e&&_e()},I=(E,v)=>{E._isLeaving=!1,br(E,p),br(E,A),br(E,y),v&&v()},b=E=>(v,_e)=>{const Ue=E?T:k,Pe=()=>g(v,E,_e);Ir(Ue,[v,Pe]),Jh(()=>{br(v,E?c:i),In(v,E?d:l),Yh(Ue)||Xh(v,r,D,Pe)})};return et(e,{onBeforeEnter(E){Ir(x,[E]),In(E,i),In(E,o)},onBeforeAppear(E){Ir(Q,[E]),In(E,c),In(E,h)},onEnter:b(!1),onAppear:b(!0),onLeave(E,v){E._isLeaving=!0;const _e=()=>I(E,v);In(E,p),E._enterCancelled?(In(E,y),td(E)):(td(E),In(E,y)),Jh(()=>{E._isLeaving&&(br(E,p),In(E,A),Yh(F)||Xh(E,r,O,_e))}),Ir(F,[E,_e])},onEnterCancelled(E){g(E,!1,void 0,!0),Ir(U,[E])},onAppearCancelled(E){g(E,!0,void 0,!0),Ir(_,[E])},onLeaveCancelled(E){I(E),Ir(G,[E])}})}function Ov(t){if(t==null)return null;if(Ce(t))return[vl(t.enter),vl(t.leave)];{const e=vl(t);return[e,e]}}function vl(t){return M_(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ai]||(t[Ai]=new Set)).add(e)}function br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ai];n&&(n.delete(e),n.size||(t[Ai]=void 0))}function Jh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xv=0;function Xh(t,e,n,r){const s=t._endId=++xv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Mv(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,y),i()},y=A=>{A.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,y)}function Mv(t,e){const n=window.getComputedStyle(t),r=V=>(n[V]||"").split(", "),s=r(`${Kn}Delay`),i=r(`${Kn}Duration`),o=Zh(s,i),l=r(`${qs}Delay`),c=r(`${qs}Duration`),h=Zh(l,c);let d=null,p=0,y=0;e===Kn?o>0&&(d=Kn,p=o,y=i.length):e===qs?h>0&&(d=qs,p=h,y=c.length):(p=Math.max(o,h),d=p>0?o>h?Kn:qs:null,y=d?d===Kn?i.length:c.length:0);const A=d===Kn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Kn}Property`).toString());return{type:d,timeout:p,propCount:y,hasTransform:A}}function Zh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ed(n)+ed(t[r])))}function ed(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function td(t){return(t?t.ownerDocument:document).body.offsetHeight}function Lv(t,e,n){const r=t[Ai];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yo=Symbol("_vod"),Kp=Symbol("_vsh"),wl={name:"show",beforeMount(t,{value:e},{transition:n}){t[Yo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hs(t,!0),r.enter(t)):r.leave(t,()=>{Hs(t,!1)}):Hs(t,e))},beforeUnmount(t,{value:e}){Hs(t,e)}};function Hs(t,e){t.style.display=e?t[Yo]:"none",t[Kp]=!e}const Fv=Symbol(""),Uv=/(?:^|;)\s*display\s*:/;function Bv(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Js(r,l,"")}else for(const o in e)n[o]==null&&Js(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?jv(t,o,!Be(e)&&e?e[o]:void 0,l)||Js(r,o,l):Js(r,o,"")}}else if(s){if(e!==n){const o=r[Fv];o&&(n+=";"+o),r.cssText=n,i=Uv.test(n)}}else e&&t.removeAttribute("style");Yo in t&&(t[Yo]=i?r.display:"",t[Kp]&&(r.display="none"))}const nd=/\s*!important$/;function Js(t,e,n){if(ce(n))n.forEach(r=>Js(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$v(t,e);nd.test(n)?t.setProperty(fr(r),n.replace(nd,""),"important"):t[r]=n}}const rd=["Webkit","Moz","ms"],El={};function $v(t,e){const n=El[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return El[e]=r;r=Uf(r);for(let s=0;s<rd.length;s++){const i=rd[s]+r;if(i in t)return El[e]=i}return e}function jv(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Be(r)&&n===r}const sd="http://www.w3.org/1999/xlink";function id(t,e,n,r,s,i=j_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n):n==null||i&&!$f(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jt(n)?String(n):n)}function od(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$f(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Jr(t,e,n,r){t.addEventListener(e,n,r)}function qv(t,e,n,r){t.removeEventListener(e,n,r)}const ad=Symbol("_vei");function Hv(t,e,n,r,s=null){const i=t[ad]||(t[ad]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=zv(e);if(r){const h=i[e]=Yv(r,s);Jr(t,l,h,c)}else o&&(qv(t,l,o,c),i[e]=void 0)}}const Wv=/(Once|Passive|Capture)$/,Kv=/^on:?(?:Once|Passive|Capture)$/;function zv(t){let e,n;for(;(n=t.match(Wv))&&!Kv.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let Tl=0;const Gv=Promise.resolve(),Qv=()=>Tl||(Gv.then(()=>Tl=0),Tl=Date.now());function Yv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ce(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const h=o[c];h&&Kt(h,e,5,l)}}else Kt(s,e,5,[r])};return n.value=t,n.attached=Qv(),n}const ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Lv(t,r,o):e==="style"?Bv(t,n,r):pa(e)?ma(e)||Hv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xv(t,e,r,o))?(od(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&id(t,e,r,o,i,e!=="value")):t._isVueCE&&(Zv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Be(r)))?od(t,Qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),id(t,e,r,o))};function Xv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ld(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ld(e)&&Be(n)?!1:e in t}function Zv(t,e){const n=t._def.props;if(!n)return!1;const r=Qt(e);return Array.isArray(n)?n.some(s=>Qt(s)===r):Object.keys(n).some(s=>Qt(s)===r)}const cd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Po(e,n):e};function ew(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Il=Symbol("_assign");function hd(t,e,n){return e&&(t=t.trim()),n&&(t=Cc(t)),t}const St={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Il]=cd(s);const i=r||s.props&&s.props.type==="number";Jr(t,e?"change":"input",o=>{o.target.composing||t[Il](hd(t.value,n,i))}),(n||i)&&Jr(t,"change",()=>{t.value=hd(t.value,n,i)}),e||(Jr(t,"compositionstart",ew),Jr(t,"compositionend",ud),Jr(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Il]=cd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Cc(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},tw=["ctrl","shift","alt","meta"],nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tw.some(n=>t[`${n}Key`]&&!e.includes(n))},Jn=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=nw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},rw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bl=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=fr(s.key);if(e.some(o=>o===i||rw[o]===i))return t(s)})},sw=et({patchProp:Jv},kv);let dd;function iw(){return dd||(dd=cv(sw))}const ow=(...t)=>{const e=iw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lw(t){return Be(t)?document.querySelector(t):t}var fd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;c||(A=64,o||(y=64)),r.push(n[d],n[p],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new uw;const y=i<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hw=function(t){const e=zp(t);return Gp.encodeByteArray(e,!0)},Jo=function(t){return hw(t).replace(/\./g,"")},Qp=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=()=>dw().__FIREBASE_DEFAULTS__,pw=()=>{if(typeof process>"u"||typeof fd>"u")return;const t=fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qp(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return fw()||pw()||mw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yp=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gw=t=>{const e=Yp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jp=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},Xp=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function ww(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ew(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Aw(){return!ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cw,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,l,r)}}function Pw(t,e){return t.replace(kw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kw=/\{\$([^}]+)}/g;function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(pd(i)&&pd(o)){if(!Xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dw(t,e){const n=new Nw(t,e);return n.subscribe.bind(n)}class Nw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ow(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _w;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mw(t){return t===Rr?void 0:t}function Lw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Uw={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Bw=we.INFO,$w={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},jw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$w[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=Bw,this._logHandler=jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const qw=(t,e)=>e.some(n=>t instanceof n);let md,gd;function Hw(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ww(){return gd||(gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zp=new WeakMap,ec=new WeakMap,em=new WeakMap,Rl=new WeakMap,qc=new WeakMap;function Kw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zp.set(n,t)}).catch(()=>{}),qc.set(e,t),e}function zw(t){if(ec.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||em.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gw(t){tc=t(tc)}function Qw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sl(this),e,...n);return em.set(r,e.sort?e.sort():[e]),sr(r)}:Ww().includes(t)?function(...e){return t.apply(Sl(this),e),sr(Zp.get(this))}:function(...e){return sr(t.apply(Sl(this),e))}}function Yw(t){return typeof t=="function"?Qw(t):(t instanceof IDBTransaction&&zw(t),qw(t,Hw())?new Proxy(t,tc):t)}function sr(t){if(t instanceof IDBRequest)return Kw(t);if(Rl.has(t))return Rl.get(t);const e=Yw(t);return e!==t&&(Rl.set(t,e),qc.set(e,t)),e}const Sl=t=>qc.get(t);function Jw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Xw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],Cl=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cl.get(e))return Cl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Cl.set(e,i),i}Gw(t=>({...t,get:(e,n,r)=>_d(e,n)||t.get(e,n,r),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",yd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new jc("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",sE="@firebase/analytics",iE="@firebase/app-check-compat",oE="@firebase/app-check",aE="@firebase/auth",lE="@firebase/auth-compat",cE="@firebase/database",uE="@firebase/data-connect",hE="@firebase/database-compat",dE="@firebase/functions",fE="@firebase/functions-compat",pE="@firebase/installations",mE="@firebase/installations-compat",gE="@firebase/messaging",_E="@firebase/messaging-compat",yE="@firebase/performance",vE="@firebase/performance-compat",wE="@firebase/remote-config",EE="@firebase/remote-config-compat",TE="@firebase/storage",IE="@firebase/storage-compat",bE="@firebase/firestore",AE="@firebase/vertexai-preview",RE="@firebase/firestore-compat",SE="firebase",CE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",PE={[nc]:"fire-core",[nE]:"fire-core-compat",[sE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[iE]:"fire-app-check-compat",[aE]:"fire-auth",[lE]:"fire-auth-compat",[cE]:"fire-rtdb",[uE]:"fire-data-connect",[hE]:"fire-rtdb-compat",[dE]:"fire-fn",[fE]:"fire-fn-compat",[pE]:"fire-iid",[mE]:"fire-iid-compat",[gE]:"fire-fcm",[_E]:"fire-fcm-compat",[yE]:"fire-perf",[vE]:"fire-perf-compat",[wE]:"fire-rc",[EE]:"fire-rc-compat",[TE]:"fire-gcs",[IE]:"fire-gcs-compat",[bE]:"fire-fst",[RE]:"fire-fst-compat",[AE]:"fire-vertex","fire-js":"fire-js",[SE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,kE=new Map,sc=new Map;function vd(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(sc.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of Zo.values())vd(n,t);for(const n of kE.values())vd(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Bi("app","Firebase",VE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=CE;function tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Jp()),!n)throw ir.create("no-options");const i=Zo.get(s);if(i){if(Xo(n,i.options)&&Xo(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new Fw(s);for(const c of sc.values())o.addComponent(c);const l=new DE(n,r,o);return Zo.set(s,l),l}function nm(t=rc){const e=Zo.get(t);if(!e&&t===rc&&Jp())return tm();if(!e)throw ir.create("no-app",{appName:t});return e}function or(t,e,n){var r;let s=(r=PE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(l.join(" "));return}ps(new Nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",OE=1,Ri="firebase-heartbeat-store";let Pl=null;function rm(){return Pl||(Pl=Jw(NE,OE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Pl}async function xE(t){try{const n=(await rm()).transaction(Ri),r=await n.objectStore(Ri).get(sm(t));return await n.done,r}catch(e){if(e instanceof Bn)On.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function wd(t,e){try{const r=(await rm()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,sm(t)),await r.done}catch(n){if(n instanceof Bn)On.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function sm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1024,LE=30*24*60*60*1e3;class FE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=LE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=UE(this._heartbeatsCache.heartbeats),i=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function UE(t,e=ME){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Td(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?Sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Td(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){ps(new Nr("platform-logger",e=>new eE(e),"PRIVATE")),ps(new Nr("heartbeat",e=>new FE(e),"PRIVATE")),or(nc,yd,t),or(nc,yd,"esm2017"),or("fire-js","")}$E("");var Id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,im;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function g(){}g.prototype=_.prototype,T.D=_.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(I,b,E){for(var v=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)v[_e-2]=arguments[_e];return _.prototype[b].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,g){g||(g=0);var I=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)I[b]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(b=0;16>b;++b)I[b]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=T.g[0],g=T.g[1],b=T.g[2];var E=T.g[3],v=_+(E^g&(b^E))+I[0]+3614090360&4294967295;_=g+(v<<7&4294967295|v>>>25),v=E+(b^_&(g^b))+I[1]+3905402710&4294967295,E=_+(v<<12&4294967295|v>>>20),v=b+(g^E&(_^g))+I[2]+606105819&4294967295,b=E+(v<<17&4294967295|v>>>15),v=g+(_^b&(E^_))+I[3]+3250441966&4294967295,g=b+(v<<22&4294967295|v>>>10),v=_+(E^g&(b^E))+I[4]+4118548399&4294967295,_=g+(v<<7&4294967295|v>>>25),v=E+(b^_&(g^b))+I[5]+1200080426&4294967295,E=_+(v<<12&4294967295|v>>>20),v=b+(g^E&(_^g))+I[6]+2821735955&4294967295,b=E+(v<<17&4294967295|v>>>15),v=g+(_^b&(E^_))+I[7]+4249261313&4294967295,g=b+(v<<22&4294967295|v>>>10),v=_+(E^g&(b^E))+I[8]+1770035416&4294967295,_=g+(v<<7&4294967295|v>>>25),v=E+(b^_&(g^b))+I[9]+2336552879&4294967295,E=_+(v<<12&4294967295|v>>>20),v=b+(g^E&(_^g))+I[10]+4294925233&4294967295,b=E+(v<<17&4294967295|v>>>15),v=g+(_^b&(E^_))+I[11]+2304563134&4294967295,g=b+(v<<22&4294967295|v>>>10),v=_+(E^g&(b^E))+I[12]+1804603682&4294967295,_=g+(v<<7&4294967295|v>>>25),v=E+(b^_&(g^b))+I[13]+4254626195&4294967295,E=_+(v<<12&4294967295|v>>>20),v=b+(g^E&(_^g))+I[14]+2792965006&4294967295,b=E+(v<<17&4294967295|v>>>15),v=g+(_^b&(E^_))+I[15]+1236535329&4294967295,g=b+(v<<22&4294967295|v>>>10),v=_+(b^E&(g^b))+I[1]+4129170786&4294967295,_=g+(v<<5&4294967295|v>>>27),v=E+(g^b&(_^g))+I[6]+3225465664&4294967295,E=_+(v<<9&4294967295|v>>>23),v=b+(_^g&(E^_))+I[11]+643717713&4294967295,b=E+(v<<14&4294967295|v>>>18),v=g+(E^_&(b^E))+I[0]+3921069994&4294967295,g=b+(v<<20&4294967295|v>>>12),v=_+(b^E&(g^b))+I[5]+3593408605&4294967295,_=g+(v<<5&4294967295|v>>>27),v=E+(g^b&(_^g))+I[10]+38016083&4294967295,E=_+(v<<9&4294967295|v>>>23),v=b+(_^g&(E^_))+I[15]+3634488961&4294967295,b=E+(v<<14&4294967295|v>>>18),v=g+(E^_&(b^E))+I[4]+3889429448&4294967295,g=b+(v<<20&4294967295|v>>>12),v=_+(b^E&(g^b))+I[9]+568446438&4294967295,_=g+(v<<5&4294967295|v>>>27),v=E+(g^b&(_^g))+I[14]+3275163606&4294967295,E=_+(v<<9&4294967295|v>>>23),v=b+(_^g&(E^_))+I[3]+4107603335&4294967295,b=E+(v<<14&4294967295|v>>>18),v=g+(E^_&(b^E))+I[8]+1163531501&4294967295,g=b+(v<<20&4294967295|v>>>12),v=_+(b^E&(g^b))+I[13]+2850285829&4294967295,_=g+(v<<5&4294967295|v>>>27),v=E+(g^b&(_^g))+I[2]+4243563512&4294967295,E=_+(v<<9&4294967295|v>>>23),v=b+(_^g&(E^_))+I[7]+1735328473&4294967295,b=E+(v<<14&4294967295|v>>>18),v=g+(E^_&(b^E))+I[12]+2368359562&4294967295,g=b+(v<<20&4294967295|v>>>12),v=_+(g^b^E)+I[5]+4294588738&4294967295,_=g+(v<<4&4294967295|v>>>28),v=E+(_^g^b)+I[8]+2272392833&4294967295,E=_+(v<<11&4294967295|v>>>21),v=b+(E^_^g)+I[11]+1839030562&4294967295,b=E+(v<<16&4294967295|v>>>16),v=g+(b^E^_)+I[14]+4259657740&4294967295,g=b+(v<<23&4294967295|v>>>9),v=_+(g^b^E)+I[1]+2763975236&4294967295,_=g+(v<<4&4294967295|v>>>28),v=E+(_^g^b)+I[4]+1272893353&4294967295,E=_+(v<<11&4294967295|v>>>21),v=b+(E^_^g)+I[7]+4139469664&4294967295,b=E+(v<<16&4294967295|v>>>16),v=g+(b^E^_)+I[10]+3200236656&4294967295,g=b+(v<<23&4294967295|v>>>9),v=_+(g^b^E)+I[13]+681279174&4294967295,_=g+(v<<4&4294967295|v>>>28),v=E+(_^g^b)+I[0]+3936430074&4294967295,E=_+(v<<11&4294967295|v>>>21),v=b+(E^_^g)+I[3]+3572445317&4294967295,b=E+(v<<16&4294967295|v>>>16),v=g+(b^E^_)+I[6]+76029189&4294967295,g=b+(v<<23&4294967295|v>>>9),v=_+(g^b^E)+I[9]+3654602809&4294967295,_=g+(v<<4&4294967295|v>>>28),v=E+(_^g^b)+I[12]+3873151461&4294967295,E=_+(v<<11&4294967295|v>>>21),v=b+(E^_^g)+I[15]+530742520&4294967295,b=E+(v<<16&4294967295|v>>>16),v=g+(b^E^_)+I[2]+3299628645&4294967295,g=b+(v<<23&4294967295|v>>>9),v=_+(b^(g|~E))+I[0]+4096336452&4294967295,_=g+(v<<6&4294967295|v>>>26),v=E+(g^(_|~b))+I[7]+1126891415&4294967295,E=_+(v<<10&4294967295|v>>>22),v=b+(_^(E|~g))+I[14]+2878612391&4294967295,b=E+(v<<15&4294967295|v>>>17),v=g+(E^(b|~_))+I[5]+4237533241&4294967295,g=b+(v<<21&4294967295|v>>>11),v=_+(b^(g|~E))+I[12]+1700485571&4294967295,_=g+(v<<6&4294967295|v>>>26),v=E+(g^(_|~b))+I[3]+2399980690&4294967295,E=_+(v<<10&4294967295|v>>>22),v=b+(_^(E|~g))+I[10]+4293915773&4294967295,b=E+(v<<15&4294967295|v>>>17),v=g+(E^(b|~_))+I[1]+2240044497&4294967295,g=b+(v<<21&4294967295|v>>>11),v=_+(b^(g|~E))+I[8]+1873313359&4294967295,_=g+(v<<6&4294967295|v>>>26),v=E+(g^(_|~b))+I[15]+4264355552&4294967295,E=_+(v<<10&4294967295|v>>>22),v=b+(_^(E|~g))+I[6]+2734768916&4294967295,b=E+(v<<15&4294967295|v>>>17),v=g+(E^(b|~_))+I[13]+1309151649&4294967295,g=b+(v<<21&4294967295|v>>>11),v=_+(b^(g|~E))+I[4]+4149444226&4294967295,_=g+(v<<6&4294967295|v>>>26),v=E+(g^(_|~b))+I[11]+3174756917&4294967295,E=_+(v<<10&4294967295|v>>>22),v=b+(_^(E|~g))+I[2]+718787259&4294967295,b=E+(v<<15&4294967295|v>>>17),v=g+(E^(b|~_))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+E&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var g=_-this.blockSize,I=this.B,b=this.h,E=0;E<_;){if(b==0)for(;E<=g;)s(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<_;)if(I[b++]=T.charCodeAt(E++),b==this.blockSize){s(this,I),b=0;break}}else for(;E<_;)if(I[b++]=T[E++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var g=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=g&255,g/=256;for(this.u(T),T=Array(16),_=g=0;4>_;++_)for(var I=0;32>I;I+=8)T[g++]=this.g[_]>>>I&255;return T};function i(T,_){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=_(T)}function o(T,_){this.h=_;for(var g=[],I=!0,b=T.length-1;0<=b;b--){var E=T[b]|0;I&&E==_||(g[b]=E,I=!1)}this.g=g}var l={};function c(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return O(h(-T));for(var _=[],g=1,I=0;T>=g;I++)_[I]=T/g|0,g*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return O(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(_,8)),I=p,b=0;b<T.length;b+=8){var E=Math.min(8,T.length-b),v=parseInt(T.substring(b,b+E),_);8>E?(E=h(Math.pow(_,E)),I=I.j(E).add(h(v))):(I=I.j(g),I=I.add(h(v)))}return I}var p=c(0),y=c(1),A=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var T=0,_=1,g=0;g<this.g.length;g++){var I=this.i(g);T+=(0<=I?I:4294967296+I)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(D(this))return"-"+O(this).toString(T);for(var _=h(Math.pow(T,6)),g=this,I="";;){var b=F(g,_).g;g=x(g,b.j(_));var E=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=b,V(g))return E+I;for(;6>E.length;)E="0"+E;I=E+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function D(T){return T.h==-1}t.l=function(T){return T=x(this,T),D(T)?-1:V(T)?0:1};function O(T){for(var _=T.g.length,g=[],I=0;I<_;I++)g[I]=~T.g[I];return new o(g,~T.h).add(y)}t.abs=function(){return D(this)?O(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),g=[],I=0,b=0;b<=_;b++){var E=I+(this.i(b)&65535)+(T.i(b)&65535),v=(E>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);I=v>>>16,E&=65535,v&=65535,g[b]=v<<16|E}return new o(g,g[g.length-1]&-2147483648?-1:0)};function x(T,_){return T.add(O(_))}t.j=function(T){if(V(this)||V(T))return p;if(D(this))return D(T)?O(this).j(O(T)):O(O(this).j(T));if(D(T))return O(this.j(O(T)));if(0>this.l(A)&&0>T.l(A))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,g=[],I=0;I<2*_;I++)g[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<T.g.length;b++){var E=this.i(I)>>>16,v=this.i(I)&65535,_e=T.i(b)>>>16,Ue=T.i(b)&65535;g[2*I+2*b]+=v*Ue,k(g,2*I+2*b),g[2*I+2*b+1]+=E*Ue,k(g,2*I+2*b+1),g[2*I+2*b+1]+=v*_e,k(g,2*I+2*b+1),g[2*I+2*b+2]+=E*_e,k(g,2*I+2*b+2)}for(I=0;I<_;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=_;I<2*_;I++)g[I]=0;return new o(g,0)};function k(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function U(T,_){this.g=T,this.h=_}function F(T,_){if(V(_))throw Error("division by zero");if(V(T))return new U(p,p);if(D(T))return _=F(O(T),_),new U(O(_.g),O(_.h));if(D(_))return _=F(T,O(_)),new U(O(_.g),_.h);if(30<T.g.length){if(D(T)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var g=y,I=_;0>=I.l(T);)g=G(g),I=G(I);var b=Q(g,1),E=Q(I,1);for(I=Q(I,2),g=Q(g,2);!V(I);){var v=E.add(I);0>=v.l(T)&&(b=b.add(g),E=v),I=Q(I,1),g=Q(g,1)}return _=x(T,b.j(_)),new U(b,_)}for(b=p;0<=T.l(_);){for(g=Math.max(1,Math.floor(T.m()/_.m())),I=Math.ceil(Math.log(g)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),E=h(g),v=E.j(_);D(v)||0<v.l(T);)g-=I,E=h(g),v=E.j(_);V(E)&&(E=y),b=b.add(E),T=x(T,v)}return new U(b,T)}t.A=function(T){return F(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),g=[],I=0;I<_;I++)g[I]=this.i(I)&T.i(I);return new o(g,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),g=[],I=0;I<_;I++)g[I]=this.i(I)|T.i(I);return new o(g,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),g=[],I=0;I<_;I++)g[I]=this.i(I)^T.i(I);return new o(g,this.h^T.h)};function G(T){for(var _=T.g.length+1,g=[],I=0;I<_;I++)g[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(g,T.h)}function Q(T,_){var g=_>>5;_%=32;for(var I=T.g.length-g,b=[],E=0;E<I;E++)b[E]=0<_?T.i(E+g)>>>_|T.i(E+g+1)<<32-_:T.i(E+g);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,im=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Dr=o}).apply(typeof Id<"u"?Id:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var om,ei,am,No,ic,lm,cm,um;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function y(a,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function A(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function V(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,N){for(var Y=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)Y[Oe-2]=arguments[Oe];return u.prototype[C].apply(m,Y)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,N=m.length||0;a.length=C+N;for(let Y=0;Y<N;Y++)a[C+Y]=m[Y]}else a.push(m)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var G=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Q(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function T(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let N=0;N<g.length;N++)f=g[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function E(a){l.setTimeout(()=>{throw a},0)}function v(){var a=te;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class _e{constructor(){this.h=this.g=null}add(u,f){const m=Ue.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ue=new x(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,B=!1,te=new _e,Ye=()=>{const a=l.Promise.resolve(void 0);le=()=>{a.then(zt)}};var zt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){E(f)}var u=Ue;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}B=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var qr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function yn(a,u){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(G){e:{try{F(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}V(yn,Re);var vn={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),tn=0;function kt(a,u,f,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++tn,this.da=this.fa=!1}function It(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function nn(a){this.src=a,this.g={},this.h=0}nn.prototype.add=function(a,u,f,m,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var Y=R(a,u,m,C);return-1<Y?(u=a[Y],f||(u.fa=!1)):(u=new kt(u,this.src,N,!!m,C),u.fa=f,a.push(u)),u};function w(a,u){var f=u.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,u,void 0),N;(N=0<=C)&&Array.prototype.splice.call(m,C,1),N&&(It(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function R(a,u,f,m){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==m)return C}return-1}var M="closure_lm_"+(1e6*Math.random()|0),K={};function H(a,u,f,m,C){if(Array.isArray(u)){for(var N=0;N<u.length;N++)H(a,u[N],f,m,C);return null}return f=W(f),a&&a[rt]?a.K(u,f,h(m)?!!m.capture:!1,C):q(a,u,f,!1,m,C)}function q(a,u,f,m,C,N){if(!u)throw Error("Invalid event type");var Y=h(C)?!!C.capture:!!C,Oe=X(a);if(Oe||(a[M]=Oe=new nn(a)),f=Oe.add(u,f,m,Y,N),f.proxy)return f;if(m=J(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)qr||(C=Y),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return u.call(a.src,a.listener,f)}const u=oe;return a}function L(a,u,f,m,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)L(a,u[N],f,m,C);else m=h(m)?!!m.capture:!!m,f=W(f),a&&a[rt]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=R(N,f,m,C),-1<f&&(It(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=X(a))&&(u=a.g[u.toString()],a=-1,u&&(a=R(u,f,m,C)),(f=-1<a?u[a]:null)&&S(f))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[rt])w(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(j(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=X(u))?(w(f,a),f.h==0&&(f.src=null,u[M]=null)):It(a)}}}function j(a){return a in K?K[a]:K[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new yn(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&S(a),a=f.call(m,u)}return a}function X(a){return a=a[M],a instanceof nn?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function W(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function ne(){Ke.call(this),this.i=new nn(this),this.M=this,this.F=null}V(ne,Ke),ne.prototype[rt]=!0,ne.prototype.removeEventListener=function(a,u,f,m){L(this,a,u,f,m)};function me(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Re(u,a);else if(u instanceof Re)u.target=u.target||a;else{var C=u;u=new Re(m,a),I(u,C)}if(C=!0,f)for(var N=f.length-1;0<=N;N--){var Y=u.g=f[N];C=Te(Y,m,!0,u)&&C}if(Y=u.g=a,C=Te(Y,m,!0,u)&&C,C=Te(Y,m,!1,u)&&C,f)for(N=0;N<f.length;N++)Y=u.g=f[N],C=Te(Y,m,!1,u)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)It(f[m]);delete a.g[u],a.h--}}this.F=null},ne.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ne.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Te(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,N=0;N<u.length;++N){var Y=u[N];if(Y&&!Y.da&&Y.capture==f){var Oe=Y.listener,it=Y.ha||Y.src;Y.fa&&w(a.i,Y),C=Oe.call(it,m)!==!1&&C}}return C&&!m.defaultPrevented}function $e(a,u,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Je(a){a.g=$e(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ut extends Ke{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){Ke.call(this),this.h=a,this.g={}}V(ht,Ke);var jn=[];function Cs(a){Q(a.g,function(u,f){this.g.hasOwnProperty(f)&&S(u)},a),a.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Cs(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,Bt=l.JSON.parse,to=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Hr(){}Hr.prototype.h=null;function Lu(a){return a.h||(a.h=a.i())}function Fu(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ya(){Re.call(this,"d")}V(Ya,Re);function Ja(){Re.call(this,"c")}V(Ja,Re);var _r={},Uu=null;function no(){return Uu=Uu||new ne}_r.La="serverreachability";function Bu(a){Re.call(this,_r.La,a)}V(Bu,Re);function ks(a){const u=no();me(u,new Bu(u))}_r.STAT_EVENT="statevent";function $u(a,u){Re.call(this,_r.STAT_EVENT,a),this.stat=u}V($u,Re);function bt(a){const u=no();me(u,new $u(u,a))}_r.Ma="timingevent";function ju(a,u){Re.call(this,_r.Ma,a),this.size=u}V(ju,Re);function Vs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function c_(a,u,f,m,C,N){a.info(function(){if(a.g)if(N)for(var Y="",Oe=N.split("&"),it=0;it<Oe.length;it++){var Ie=Oe[it].split("=");if(1<Ie.length){var dt=Ie[0];Ie=Ie[1];var ft=dt.split("_");Y=2<=ft.length&&ft[1]=="type"?Y+(dt+"="+Ie+"&"):Y+(dt+"=redacted&")}}else Y=null;else Y=N;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+Y})}function u_(a,u,f,m,C,N,Y){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+N+" "+Y})}function Wr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+d_(a,f)+(m?" "+m:"")})}function h_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ds.prototype.info=function(){};function d_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var Y=1;Y<C.length;Y++)C[Y]=""}}}}return st(f)}catch{return u}}var ro={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xa;function so(){}V(so,Hr),so.prototype.g=function(){return new XMLHttpRequest},so.prototype.i=function(){return{}},Xa=new so;function qn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hu}function Hu(){this.i=null,this.g="",this.h=!1}var Wu={},Za={};function el(a,u,f){a.L=1,a.v=lo(wn(u)),a.m=f,a.P=!0,Ku(a,null)}function Ku(a,u){a.F=Date.now(),io(a),a.A=wn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),oh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Hu,a.g=bh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Ut(y(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(jn[0]=C.toString()),C=jn);for(var N=0;N<C.length;N++){var Y=H(f,C[N],m||u.handleEvent,!1,u.h||u);if(!Y)break;u.g[Y.key]=Y}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ks(),c_(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const u=this.M;u&&En(a)==3?u.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=En(this.g);var u=this.g.Ba();const Gr=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||fh(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Gr?ks(3):ks(2)),tl(this);var f=this.g.Z();this.X=f;t:if(zu(this)){var m=fh(this.g);a="";var C=m.length,N=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Ns(this);var Y="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(N&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=f==200,u_(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,it=this.g;if((Oe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Oe)){var Ie=Oe;break t}}Ie=null}if(f=Ie)Wr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nl(this,f);else{this.o=!1,this.s=3,bt(12),yr(this),Ns(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<Y.length;)if(Gt=f_(this,Y),Gt==Za){ft==4&&(this.s=4,bt(14),f=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Wu){this.s=4,bt(15),Wr(this.i,this.l,Y,"[Invalid Chunk]"),f=!1;break}else Wr(this.i,this.l,Gt,null),nl(this,Gt);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||Y.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)Wr(this.i,this.l,Y,"[Invalid Chunked Response]"),yr(this),Ns(this);else if(0<Y.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),ll(dt),dt.M=!0,bt(11))}}else Wr(this.i,this.l,Y,null),nl(this,Y);ft==4&&yr(this),this.o&&!this.J&&(ft==4?wh(this.j,this):(this.o=!1,io(this)))}else k_(this.g),f==400&&0<Y.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),yr(this),Ns(this)}}}catch{}finally{}};function zu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function f_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Za:(f=Number(u.substring(f,m)),isNaN(f)?Wu:(m+=1,m+f>u.length?Za:(u=u.slice(m,m+f),a.C=m+f,u)))}qn.prototype.cancel=function(){this.J=!0,yr(this)};function io(a){a.S=Date.now()+a.I,Gu(a,a.I)}function Gu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vs(y(a.ba,a),u)}function tl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(h_(this.i,this.A),this.L!=2&&(ks(),bt(17)),yr(this),this.s=2,Ns(this)):Gu(this,this.S-a)};function Ns(a){a.j.G==0||a.J||wh(a.j,a)}function yr(a){tl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Cs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function nl(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||rl(f.h,a))){if(!a.K&&rl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)mo(f),fo(f);else break e;al(f),bt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Vs(y(f.Za,f),6e3));if(1>=Ju(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wr(f,11)}else if((a.K||f.g==a)&&mo(f),!k(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ie=C[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const dt=Ie[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Ie[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Gr=Ie[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(m=1.5*Gr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Gt=a.g;if(Gt){const _o=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_o){var N=m.h;N.g||_o.indexOf("spdy")==-1&&_o.indexOf("quic")==-1&&_o.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(sl(N,N.h),N.h=null))}if(m.D){const cl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(m.ya=cl,Le(m.I,m.D,cl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var Y=a;if(m.qa=Ih(m,m.J?m.ia:null,m.W),Y.K){Xu(m.h,Y);var Oe=Y,it=m.L;it&&(Oe.I=it),Oe.B&&(tl(Oe),io(Oe)),m.g=Y}else yh(m);0<f.i.length&&po(f)}else Ie[0]!="stop"&&Ie[0]!="close"||wr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?wr(f,7):ol(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}ks(4)}catch{}}var p_=class{constructor(a,u){this.g=a,this.map=u}};function Qu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ju(a){return a.h?1:a.g?a.g.size:0}function rl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sl(a,u){a.g?a.g.add(u):a.h=u}function Xu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function m_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function g_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function eh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=g_(a),m=m_(a),C=m.length,N=0;N<C;N++)u.call(void 0,m[N],f&&f[N],a)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function __(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var N=a[f].substring(0,m);C=a[f].substring(m+1)}else N=a[f];u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,oo(this,a.j),this.o=a.o,this.g=a.g,ao(this,a.s),this.l=a.l;var u=a.i,f=new Ms;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),nh(this,f),this.m=a.m}else a&&(u=String(a).match(th))?(this.h=!1,oo(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),ao(this,u[4]),this.l=Os(u[5]||"",!0),nh(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}vr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(xs(u,rh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(xs(u,rh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(xs(f,f.charAt(0)=="/"?w_:v_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",xs(f,T_)),a.join("")};function wn(a){return new vr(a)}function oo(a,u,f){a.j=f?Os(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ao(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function nh(a,u,f){u instanceof Ms?(a.i=u,I_(a.i,a.h)):(f||(u=xs(u,E_)),a.i=new Ms(u,a.h))}function Le(a,u,f){a.i.set(u,f)}function lo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Os(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,y_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function y_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rh=/[#\/\?@]/g,v_=/[#\?:]/g,w_=/[#\?]/g,E_=/[#\?@]/g,T_=/#/g;function Ms(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&__(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ms.prototype,t.add=function(a,u){Hn(this),this.i=null,a=Kr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function sh(a,u){Hn(a),u=Kr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ih(a,u){return Hn(a),u=Kr(a,u),a.g.has(u)}t.forEach=function(a,u){Hn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=a[m];for(let N=0;N<C.length;N++)f.push(u[m])}return f},t.V=function(a){Hn(this);let u=[];if(typeof a=="string")ih(this,a)&&(u=u.concat(this.g.get(Kr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Hn(this),this.i=null,a=Kr(this,a),ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function oh(a,u,f){sh(a,u),0<f.length&&(a.i=null,a.g.set(Kr(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const N=encodeURIComponent(String(m)),Y=this.V(m);for(m=0;m<Y.length;m++){var C=N;Y[m]!==""&&(C+="="+encodeURIComponent(String(Y[m]))),a.push(C)}}return this.i=a.join("&")};function Kr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function I_(a,u){u&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(sh(this,m),oh(this,C,f))},a)),a.j=u}function b_(a,u){const f=new Ds;if(l.Image){const m=new Image;m.onload=A(Wn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=A(Wn,f,"TestLoadImage: error",!1,u,m),m.onabort=A(Wn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=A(Wn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function A_(a,u){const f=new Ds,m=new AbortController,C=setTimeout(()=>{m.abort(),Wn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(C),N.ok?Wn(f,"TestPingServer: ok",!0,u):Wn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Wn(f,"TestPingServer: error",!1,u)})}function Wn(a,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function R_(){this.g=new to}function S_(a,u,f){const m=f||"";try{eh(a,function(C,N){let Y=C;h(C)&&(Y=st(C)),u.push(m+N+"="+encodeURIComponent(Y))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function co(a){this.l=a.Ub||null,this.j=a.eb||!1}V(co,Hr),co.prototype.g=function(){return new uo(this.l,this.j)},co.prototype.i=function(a){return function(){return a}}({});function uo(a,u){ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(uo,ne),t=uo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ah(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ah(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ls(this):Fs(this),this.readyState==3&&ah(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Qa=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lh(a){let u="";return Q(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function il(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=lh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,u,f))}function qe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(qe,ne);var C_=/^https?$/i,P_=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xa.g(),this.v=this.o?Lu(this.o):Lu(Xa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){ch(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(P_,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,Y]of f)this.g.setRequestHeader(N,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){ch(this,N)}};function ch(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,uh(a),ho(a)}function uh(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ho(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hh(this):this.bb())},t.bb=function(){hh(this)};function hh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)$e(a.Ea,0,a);else if(me(a,"readystatechange"),En(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=Y===0){var C=String(a.D).match(th)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!C_.test(C?C.toLowerCase():"")}f=m}if(f)me(a,"complete"),me(a,"success");else{a.m=6;try{var N=2<En(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",uh(a)}}finally{ho(a)}}}}function ho(a,u){if(a.g){dh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||me(a,"ready");try{f.onreadystatechange=m}catch{}}}function dh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Bt(u)}};function fh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function k_(a){const u={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(k(a[m]))continue;var f=b(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[C]||[];u[C]=N,N.push(f)}T(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ph(a){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,a),this.cb=Us("retryDelaySeedMs",1e4,a),this.Wa=Us("forwardChannelMaxRetries",2,a),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qu(a&&a.concurrentRequestLimit),this.Da=new R_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ph.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){bt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ih(this,null,this.W),po(this)};function ol(a){if(mh(a),a.G==3){var u=a.U++,f=wn(a.I);if(Le(f,"SID",a.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Bs(a,f),u=new qn(a,a.j,u),u.L=2,u.v=lo(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=bh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),io(u)}Th(a)}function fo(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function mh(a){fo(a),a.u&&(l.clearTimeout(a.u),a.u=null),mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function po(a){if(!Yu(a.h)&&!a.s){a.s=!0;var u=a.Ga;le||Ye(),B||(le(),B=!0),te.add(u,a),a.B=0}}function V_(a,u){return Ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vs(y(a.Ga,a,u),Eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new qn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=_h(this,C,u),f=wn(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Bs(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(lh(N)))+"&"+u:this.m&&il(f,this.m,N)),sl(this.h,C),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),C.T=!0,el(C,f,null)):el(C,f,u),this.G=2}}else this.G==3&&(a?gh(this,a):this.i.length==0||Yu(this.h)||gh(this))};function gh(a,u){var f;u?f=u.l:f=a.U++;const m=wn(a.I);Le(m,"SID",a.K),Le(m,"RID",f),Le(m,"AID",a.T),Bs(a,m),a.m&&a.o&&il(m,a.m,a.o),f=new qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=_h(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sl(a.h,f),el(f,m,u)}function Bs(a,u){a.H&&Q(a.H,function(f,m){Le(u,m,f)}),a.l&&eh({},function(f,m){Le(u,m,f)})}function _h(a,u,f){f=Math.min(a.i.length,f);var m=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const Y=["count="+f];N==-1?0<f?(N=C[0].g,Y.push("ofs="+N)):N=0:Y.push("ofs="+N);let Oe=!0;for(let it=0;it<f;it++){let Ie=C[it].g;const dt=C[it].map;if(Ie-=N,0>Ie)N=Math.max(0,C[it].g-100),Oe=!1;else try{S_(dt,Y,"req"+Ie+"_")}catch{m&&m(dt)}}if(Oe){m=Y.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function yh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;le||Ye(),B||(le(),B=!0),te.add(u,a),a.v=0}}function al(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vs(y(a.Fa,a),Eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),fo(this),vh(this))};function ll(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function vh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=wn(a.qa);Le(u,"RID","rpc"),Le(u,"SID",a.K),Le(u,"AID",a.T),Le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(u,"TO",a.ja),Le(u,"TYPE","xmlhttp"),Bs(a,u),a.m&&a.o&&il(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=lo(wn(u)),f.m=null,f.P=!0,Ku(f,a)}t.Za=function(){this.C!=null&&(this.C=null,fo(this),al(this),bt(19))};function mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function wh(a,u){var f=null;if(a.g==u){mo(a),ll(a),a.g=null;var m=2}else if(rl(a.h,u))f=u.D,Xu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=no(),me(m,new ju(m,f)),po(a)}else yh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&V_(a,u)||m==2&&al(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function Eh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function wr(a,u){if(a.j.info("Error code "+u),u==2){var f=y(a.fb,a),m=a.Xa;const C=!m;m=new vr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oo(m,"https"),lo(m),C?b_(m.toString(),f):A_(m.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(u),Th(a),mh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Th(a){if(a.G=0,a.ka=[],a.l){const u=Zu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Ih(a,u,f){var m=f instanceof vr?wn(f):new vr(f);if(m.g!="")u&&(m.g=u+"."+m.g),ao(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var N=new vr(null);m&&oo(N,m),u&&(N.g=u),C&&ao(N,C),f&&(N.l=f),m=N}return f=a.D,u=a.ya,f&&u&&Le(m,f,u),Le(m,"VER",a.la),Bs(a,m),m}function bh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new co({eb:f})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ah(){}t=Ah.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function go(){}go.prototype.g=function(a,u){return new Ot(a,u)};function Ot(a,u){ne.call(this),this.g=new ph(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!k(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!k(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new zr(this)}V(Ot,ne),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){ol(this.g)},Ot.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=st(a),a=f);u.i.push(new p_(u.Ya++,a)),u.G==3&&po(u)},Ot.prototype.N=function(){this.g.l=null,delete this.j,ol(this.g),delete this.g,Ot.aa.N.call(this)};function Rh(a){Ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}V(Rh,Ya);function Sh(){Ja.call(this),this.status=1}V(Sh,Ja);function zr(a){this.g=a}V(zr,Ah),zr.prototype.ua=function(){me(this.g,"a")},zr.prototype.ta=function(a){me(this.g,new Rh(a))},zr.prototype.sa=function(a){me(this.g,new Sh)},zr.prototype.ra=function(){me(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,um=function(){return new go},cm=function(){return no()},lm=_r,ic={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,No=ro,qu.COMPLETE="complete",am=qu,Fu.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",ne.prototype.listen=ne.prototype.K,ei=Fu,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,om=qe}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const bd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new jc("@firebase/firestore");function Ws(){return Or.logLevel}function re(t,...e){if(Or.logLevel<=we.DEBUG){const n=e.map(Wc);Or.debug(`Firestore (${bs}): ${t}`,...n)}}function xn(t,...e){if(Or.logLevel<=we.ERROR){const n=e.map(Wc);Or.error(`Firestore (${bs}): ${t}`,...n)}}function ms(t,...e){if(Or.logLevel<=we.WARN){const n=e.map(Wc);Or.warn(`Firestore (${bs}): ${t}`,...n)}}function Wc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function De(t,e){t||he()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class qE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HE{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new mt(e)}}class WE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new zE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=QE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new We(0,0))}static max(){return new fe(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Si{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const YE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Si{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return YE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Fe.fromString(e))}static fromName(e){return new ae(Fe.fromString(e).popFirst(5))}static empty(){return new ae(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Fe(e.slice()))}}function JE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new ur(s,ae.empty(),e)}function XE(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(fe.min(),ae.empty(),-1)}static max(){return new ur(fe.max(),ae.empty(),-1)}}function ZE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==eT)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kc.oe=-1;function Ca(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function rT(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rd(this.data.getIterator())}getIteratorFrom(e){return new Rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ct(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pm("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const sT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(De(!!t),typeof t=="string"){let e=0;const n=sT.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gc(t){const e=t.mapValue.fields.__previous_value__;return zc(e)?Gc(e):e}function Ci(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo={mapValue:{}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zc(t)?4:aT(t)?9007199254740991:oT(t)?10:11:he()}function _n(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),l=hr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ad(o)!==Ad(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!_n(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function ki(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Sd(t.timestampValue,e.timestampValue);case 4:return Sd(Ci(t),Ci(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xr(i),c=xr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=be(l[h],c[h]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ge(i.latitude),Ge(o.latitude));return l!==0?l:be(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},y=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,V=(c=y.value)===null||c===void 0?void 0:c.arrayValue,D=be(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Cd(A,V)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bo.mapValue&&o===bo.mapValue)return 0;if(i===bo.mapValue)return 1;if(o===bo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=be(c[p],d[p]);if(y!==0)return y;const A=_s(l[c[p]],h[d[p]]);if(A!==0)return A}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=hr(t),r=hr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Cd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ys(t){return oc(t)}function oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=oc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${oc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Pd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ac(t){return!!t&&"integerValue"in t}function Qc(t){return!!t&&"arrayValue"in t}function kd(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oo(t){return!!t&&"mapValue"in t}function oT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=di(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(di(this.value))}}function mm(t){const e=[];return Fr(t.fields,(n,r)=>{const s=new lt([n]);if(Oo(r)){const i=mm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,fe.min(),fe.min(),fe.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,fe.min(),fe.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,fe.min(),fe.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function Dd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function lT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{}class Ze extends gm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uT(e,n,r):n==="array-contains"?new fT(e,r):n==="in"?new pT(e,r):n==="not-in"?new mT(e,r):n==="array-contains-any"?new gT(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hT(e,r):new dT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends gm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return _m(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _m(t){return t.op==="and"}function ym(t){return cT(t)&&_m(t)}function cT(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function lc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(ym(t))return t.filters.map(e=>lc(e)).join(",");{const e=t.filters.map(n=>lc(n)).join(",");return`${t.op}(${e})`}}function vm(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&vm(o,s.filters[l]),!0):!1}(t,e):void he()}function wm(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(wm).join(" ,")+"}"}(t):"Filter"}class uT extends Ze{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class hT extends Ze{constructor(e,n){super(e,"in",n),this.keys=Em("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dT extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Em("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Em(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class fT extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qc(n)&&ki(n.arrayValue,this.value)}}class pT extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ki(this.value.arrayValue,n)}}class mT extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ki(this.value.arrayValue,n)}}class gT extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ki(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _T(t,e,n,r,s,i,o)}function Yc(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function Jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nd(t.startAt,e.startAt)&&Nd(t.endAt,e.endAt)}function cc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yT(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function Pa(t){return new Hi(t)}function xd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tm(t){return t.collectionGroup!==null}function fi(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(lt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new na(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new na(lt.keyField(),r))}return e.ce}function hn(t){const e=pe(t);return e.le||(e.le=vT(e,fi(t))),e.le}function vT(t,e){if(t.limitType==="F")return Od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new na(s.field,i)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return Od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uc(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hc(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ka(t,e){return Jc(hn(t),hn(e))&&t.limitType===e.limitType}function Im(t){return`${Yc(hn(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wm(s)).join(", ")}]`),Ca(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of fi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Dd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,fi(r),s)||r.endAt&&!function(o,l,c){const h=Dd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,fi(r),s))}(t,e)}function wT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bm(t){return(e,n)=>{let r=!1;for(const s of fi(t)){const i=ET(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ET(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_s(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new je(ae.comparator);function Mn(){return TT}const Am=new je(ae.comparator);function ti(...t){let e=Am;for(const n of t)e=e.insert(n.key,n);return e}function Rm(t){let e=Am;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return pi()}function Sm(){return pi()}function pi(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const IT=new je(ae.comparator),bT=new ct(ae.comparator);function ye(...t){let e=bT;for(const n of t)e=e.add(n);return e}const AT=new ct(be);function RT(){return AT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function ST(t,e){return rT(e)?Cm(e):Xc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this._=void 0}}function CT(t,e,n){return t instanceof Vi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zc(i)&&(i=Gc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?km(t,e):t instanceof Ni?Vm(t,e):function(s,i){const o=Pm(s,i),l=Md(o)+Md(s.Pe);return ac(o)&&ac(s.Pe)?Cm(l):Xc(s.serializer,l)}(t,e)}function PT(t,e,n){return t instanceof Di?km(t,e):t instanceof Ni?Vm(t,e):n}function Pm(t,e){return t instanceof ra?function(r){return ac(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vi extends Da{}class Di extends Da{constructor(e){super(),this.elements=e}}function km(t,e){const n=Dm(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ni extends Da{constructor(e){super(),this.elements=e}}function Vm(t,e){let n=Dm(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class ra extends Da{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Md(t){return Ge(t.integerValue||t.doubleValue)}function Dm(t){return Qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.field=e,this.transform=n}}function VT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Ni&&s instanceof Ni?gs(r.elements,s.elements,_n):r instanceof ra&&s instanceof ra?_n(r.Pe,s.Pe):r instanceof Vi&&s instanceof Vi}(t.transform,e.transform)}class DT{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Na{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oa(t.key,Dt.none()):new Wi(t.key,t.data,Dt.none());{const n=t.data,r=Vt.empty();let s=new ct(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(t.key,r,new Lt(s.toArray()),Dt.none())}}function NT(t,e,n){t instanceof Wi?function(s,i,o){const l=s.value.clone(),c=Fd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Fd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Om(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mi(t,e,n,r){return t instanceof Wi?function(i,o,l,c){if(!xo(i.precondition,o))return l;const h=i.value.clone(),d=Ud(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,o,l,c){if(!xo(i.precondition,o))return l;const h=Ud(i.fieldTransforms,c,o),d=o.data;return d.setAll(Om(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function OT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pm(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function Ld(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gs(r,s,(i,o)=>VT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends Na{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends Na{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fd(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,PT(o,l,n[s]))}return r}function Ud(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CT(i,o,e))}return r}class Oa extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xT extends Na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Nm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>Ld(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>Ld(n,r))}}class Zc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return IT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ee;function UT(t){switch(t){default:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function xm(t){if(t===void 0)return xn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(Ee=Xe||(Xe={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=new Dr([4294967295,4294967295],0);function Bd(t){const e=BT().encode(t),n=new im;return n.update(e),new Uint8Array(n.digest())}function $d(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class eu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ni(`Invalid padding: ${n}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ni(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare($T)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bd(e),[r,s]=$d(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Bd(e),[r,s]=$d(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(fe.min(),s,new je(be),Mn(),ye())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ki(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Mm{constructor(e,n){this.targetId=e,this.me=n}}class Lm{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jd{constructor(){this.fe=0,this.ge=Hd(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Ki(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Hd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jT{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=qd(),this.Qe=new je(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(cc(i))if(r===0){const o=new ae(i.path);this.Ue(n,o,_t.newNoDocument(o,fe.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(c){if(c instanceof pm)return ms("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new eu(o,s,i)}catch(c){return ms(c instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&cc(l.target)){const c=new ae(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,_t.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=qd(),this.Qe=new je(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qd(){return new je(ae.comparator)}function Hd(){return new je(ae.comparator)}const qT={asc:"ASCENDING",desc:"DESCENDING"},HT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WT={and:"AND",or:"OR"};class KT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dc(t,e){return t.useProto3Json||Ca(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zT(t,e){return sa(t,e.toTimestamp())}function dn(t){return De(!!t),fe.fromTimestamp(function(n){const r=hr(n);return new We(r.seconds,r.nanos)}(t))}function tu(t,e){return fc(t,e).canonicalString()}function fc(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Um(t){const e=Fe.fromString(t);return De(Hm(e)),e}function pc(t,e){return tu(t.databaseId,e.path)}function kl(t,e){const n=Um(e);if(n.get(1)!==t.databaseId.projectId)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae($m(n))}function Bm(t,e){return tu(t.databaseId,e)}function GT(t){const e=Um(t);return e.length===4?Fe.emptyPath():$m(e)}function mc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $m(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:pc(t,e),fields:n.value.mapValue.fields}}function QT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(De(d===void 0||typeof d=="string"),ut.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?$.UNKNOWN:xm(h.code);return new ee(d,h.message||"")}(o);n=new Lm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kl(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):fe.min(),l=new Vt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Mo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kl(t,r.document),i=r.readTime?dn(r.readTime):fe.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Mo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kl(t,r.document),i=r.removedTargetIds||[];n=new Mo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FT(s,i),l=r.targetId;n=new Mm(l,o)}}return n}function YT(t,e){let n;if(e instanceof Wi)n={update:Wd(t,e.key,e.value)};else if(e instanceof Oa)n={delete:pc(t,e.key)};else if(e instanceof mr)n={update:Wd(t,e.key,e.data),updateMask:iI(e.fieldMask)};else{if(!(e instanceof xT))return he();n={verify:pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function JT(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(fe.min())&&(o=dn(i)),new DT(o,s.transformResults||[])}(n,e))):[]}function XT(t,e){return{documents:[Bm(t,e.path)]}}function ZT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bm(t,s);const i=function(h){if(h.length!==0)return qm(Zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Zr(y.field),direction:nI(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function eI(t){let e=GT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=jm(p);return y instanceof Zt&&ym(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(V){return new na(es(V.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Ca(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,A=p.values||[];return new ta(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,A=p.values||[];return new ta(A,y)}(n.endAt)),yT(e,s,o,i,l,"F",c,h)}function tI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=es(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=es(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>jm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function nI(t){return qT[t]}function rI(t){return HT[t]}function sI(t){return WT[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return lt.fromServerFormat(t.fieldPath)}function qm(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Vd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(kd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(kd(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:rI(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>qm(s));return r.length===1?r[0]:{compositeFilter:{op:sI(n.op),filters:r}}}(t):he()}function iI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.ct=e}}function aI(t){const e=eI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.un=new cI}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(ur.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class cI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&mi(r.mutation,s,Lt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ti();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Mn();const o=pi(),l=function(){return pi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof mr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),mi(d.mutation,h,d.mutation.getFieldMask(),We.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new hI(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=pi();let s=new je((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Lt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Sm();d.forEach(y=>{if(!i.has(y)){const A=Nm(n.get(y),r.get(y));A!==null&&p.set(y,A),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(Pr());let l=-1,c=i;return o.next(h=>z.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(d=>({batchId:l,changes:Rm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ti();return this.indexManager.getCollectionParents(e,i).next(l=>z.forEach(l,c=>{const h=function(p,y){return new Hi(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let l=ti();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&mi(d.mutation,h,Lt.empty(),We.now()),Va(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:aI(s.bundledQuery),readTime:dn(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.overlays=new je(ae.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return z.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LT(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Tr=new ct(nt.Er),this.dr=new ct(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new Fe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new Fe([])),r=new nt(n,e),s=new nt(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(nt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MT(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(be);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new nt(new ae(i),0);let l=new ct(be);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),z.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.Mr=e,this.docs=function(){return new je(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZE(XE(d),r)<=0||(s.has(d.key)||Va(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yI(this)}getSize(e){return z.resolve(this.size)}}class yI extends uI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.persistence=e,this.Nr=new As(n=>Yc(n),Jc),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nu,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Kc(0),this.Kr=!1,this.Kr=!0,this.$r=new mI,this.referenceDelegate=e(this),this.Ur=new vI(this),this.indexManager=new lI,this.remoteDocumentCache=function(s){return new _I(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new oI(n),this.Gr=new fI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new EI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class EI extends tT{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.Jr=new nu,this.Yr=null}static Zr(e){return new ru(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const s=ae.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new su(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Aw()?8:nT(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TI;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ws()<=we.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Ws()<=we.DEBUG&&re("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ws()<=we.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):z.resolve())}Yi(e,n){if(xd(n))return z.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hc(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,hc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return xd(n)||s.isEqual(fe.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?z.resolve(null):(Ws()<=we.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.rs(e,o,n,JE(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(bm(e));return n.forEach((s,i)=>{Va(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ws()<=we.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(be),this._s=new As(i=>Yc(i),Jc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function AI(t,e,n,r){return new bI(t,e,n,r)}async function Wm(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function RI(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,y=p.keys();let A=z.resolve();return y.forEach(V=>{A=A.next(()=>d.getEntry(c,V)).next(D=>{const O=h.docVersions.get(V);De(O!==null),D.version.compareTo(O)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Km(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function SI(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let A=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),s=s.insert(p,A),function(D,O,x){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(y,A,d)&&l.push(n.Ur.updateTargetData(i,A))});let c=Mn(),h=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(CI(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(fe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return z.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function CI(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):re("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function PI(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kI(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function gc(t,e,n){const r=pe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Kd(t,e,n){const r=pe(t);let s=fe.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=pe(c),y=p._s.get(d);return y!==void 0?z.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:ye())).next(l=>(VI(r,wT(e),l),{documents:l,Ts:i})))}function VI(t,e,n){let r=t.us.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class zd{constructor(){this.activeTargetIds=RT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DI{constructor(){this.so=new zd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new zd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function Vl(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class MI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Vl(),c=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ms("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=OI[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Vl();return new Promise((o,l)=>{const c=new om;c.setWithCredentials(!0),c.listenOnce(am.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case No.NO_ERROR:const d=c.getResponseJson();re(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case No.TIMEOUT:re(pt,`RPC '${e}' ${i} timed out`),l(new ee($.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const p=c.getStatus();if(re(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const V=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(A.status);l(new ee(V,A.message))}else l(new ee($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{re(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);re(pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Vl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=um(),l=cm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(pt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let y=!1,A=!1;const V=new xI({Io:O=>{A?re(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(y||(re(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),re(pt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),D=(O,x,k)=>{O.listen(x,U=>{try{k(U)}catch(F){setTimeout(()=>{throw F},0)}})};return D(p,ei.EventType.OPEN,()=>{A||(re(pt,`RPC '${e}' stream ${s} transport opened.`),V.yo())}),D(p,ei.EventType.CLOSE,()=>{A||(A=!0,re(pt,`RPC '${e}' stream ${s} transport closed`),V.So())}),D(p,ei.EventType.ERROR,O=>{A||(A=!0,ms(pt,`RPC '${e}' stream ${s} transport errored:`,O),V.So(new ee($.UNAVAILABLE,"The operation could not be completed")))}),D(p,ei.EventType.MESSAGE,O=>{var x;if(!A){const k=O.data[0];De(!!k);const U=k,F=U.error||((x=U[0])===null||x===void 0?void 0:x.error);if(F){re(pt,`RPC '${e}' stream ${s} received error:`,F);const G=F.status;let Q=function(g){const I=Xe[g];if(I!==void 0)return xm(I)}(G),T=F.message;Q===void 0&&(Q=$.INTERNAL,T="Unknown error status: "+G+" with message "+F.message),A=!0,V.So(new ee(Q,T)),p.close()}else re(pt,`RPC '${e}' stream ${s} received:`,k),V.bo(k)}}),D(l,lm.STAT_EVENT,O=>{O.stat===ic.PROXY?re(pt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===ic.NOPROXY&&re(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Dl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return new KT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ee($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LI extends Gm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=QT(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?dn(o.readTime):fe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=mc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=cc(c)?{documents:XT(i,c)}:{query:ZT(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Fm(i,o.resumeToken);const h=dc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=sa(i,o.snapshotVersion.toTimestamp());const h=dc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=tI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=mc(this.serializer),n.removeTarget=e,this.a_(n)}}class FI extends Gm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JT(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=mc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YT(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,fc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,fc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class BI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xn(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.L_.add(4),await zi(h),h.q_.set("Unknown"),h.L_.delete(4),await La(h)}(this))})}),this.q_=new BI(r,s)}}async function La(t){if(Ur(t))for(const e of t.B_)await e(!0)}async function zi(t){for(const e of t.B_)await e(!1)}function Qm(t,e){const n=pe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lu(n)?au(n):Rs(n).r_()&&ou(n,e))}function iu(t,e){const n=pe(t),r=Rs(n);n.N_.delete(e),r.r_()&&Ym(n,e),n.N_.size===0&&(r.r_()?r.o_():Ur(n)&&n.q_.set("Unknown"))}function ou(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).A_(e)}function Ym(t,e){t.Q_.xe(e),Rs(t).R_(e)}function au(t){t.Q_=new jT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.q_.v_()}function lu(t){return Ur(t)&&!Rs(t).n_()&&t.N_.size>0}function Ur(t){return pe(t).L_.size===0}function Jm(t){t.Q_=void 0}async function jI(t){t.q_.set("Online")}async function qI(t){t.N_.forEach((e,n)=>{ou(t,e)})}async function HI(t,e){Jm(t),lu(t)?(t.q_.M_(e),au(t)):t.q_.set("Unknown")}async function WI(t,e,n){if(t.q_.set("Online"),e instanceof Lm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(t,r)}else if(e instanceof Mo?t.Q_.Ke(e):e instanceof Mm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const r=await Km(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),Ym(i,c);const p=new rr(d.target,c,h,d.sequenceNumber);ou(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await ia(t,r)}}async function ia(t,e,n){if(!qi(e))throw e;t.L_.add(1),await zi(t),t.q_.set("Offline"),n||(n=()=>Km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await La(t)})}function Xm(t,e){return e().catch(n=>ia(t,n,e))}async function Fa(t){const e=pe(t),n=dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;KI(e);)try{const s=await PI(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,zI(e,s)}catch(s){await ia(e,s)}Zm(e)&&eg(e)}function KI(t){return Ur(t)&&t.O_.length<10}function zI(t,e){t.O_.push(e);const n=dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zm(t){return Ur(t)&&!dr(t).n_()&&t.O_.length>0}function eg(t){dr(t).start()}async function GI(t){dr(t).p_()}async function QI(t){const e=dr(t);for(const n of t.O_)e.m_(n.mutations)}async function YI(t,e,n){const r=t.O_.shift(),s=Zc.from(r,e,n);await Xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Fa(t)}async function JI(t,e){e&&dr(t).V_&&await async function(r,s){if(function(o){return UT(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();dr(r).s_(),await Xm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fa(r)}}(t,e),Zm(t)&&eg(t)}async function Qd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.L_.add(3),await zi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await La(n)}async function XI(t,e){const n=pe(t);e?(n.L_.delete(2),await La(n)):e||(n.L_.add(2),await zi(n),n.q_.set("Unknown"))}function Rs(t){return t.K_||(t.K_=function(n,r,s){const i=pe(n);return i.w_(),new LI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:jI.bind(null,t),Ro:qI.bind(null,t),mo:HI.bind(null,t),d_:WI.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lu(t)?au(t):t.q_.set("Unknown")):(await t.K_.stop(),Jm(t))})),t.K_}function dr(t){return t.U_||(t.U_=function(n,r,s){const i=pe(n);return i.w_(),new FI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:GI.bind(null,t),mo:JI.bind(null,t),f_:QI.bind(null,t),g_:YI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Fa(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new cu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(t,e){if(xn("AsyncQueue",`${e}: ${t}`),qi(t))return new ee($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=ti(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.W_=new je(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ws(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class eb{constructor(){this.queries=Jd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Jd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ee($.ABORTED,"Firestore shutting down"))}}function Jd(){return new As(t=>Im(t),ka)}async function hu(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ZI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=uu(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&fu(n)}async function du(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tb(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&fu(n)}function nb(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function fu(t){t.Y_.forEach(e=>{e.next()})}var _c,Xd;(Xd=_c||(_c={})).ea="default",Xd.Cache="cache";class pu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.key=e}}class ng{constructor(e){this.key=e}}class rb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=bm(e),this.Ra=new ls(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Yd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),A=Va(this.query,p)?p:null,V=!!y&&this.mutatedKeys.has(y.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;y&&A?y.data.isEqual(A.data)?V!==D&&(r.track({type:3,doc:A}),O=!0):this.ga(y,A)||(r.track({type:2,doc:A}),O=!0,(c&&this.Aa(A,c)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),O=!0):y&&!A&&(r.track({type:1,doc:y}),O=!0,(c||h)&&(l=!0)),O&&(A?(o=o.add(A),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(A,V){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return D(A)-D(V)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new ws(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ng(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ws.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class sb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ib{constructor(e){this.key=e,this.va=!1}}class ob{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new As(l=>Im(l),ka),this.Ma=new Map,this.xa=new Set,this.Oa=new je(ae.comparator),this.Na=new Map,this.La=new nu,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ab(t,e,n=!0){const r=lg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await rg(r,e,n,!0),s}async function lb(t,e){const n=lg(t);await rg(n,e,!0,!1)}async function rg(t,e,n,r){const s=await kI(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await cb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qm(t.remoteStore,s),l}async function cb(t,e,n,r,s){t.Ka=(p,y,A)=>async function(D,O,x,k){let U=O.view.ma(x);U.ns&&(U=await Kd(D.localStore,O.query,!1).then(({documents:T})=>O.view.ma(T,U)));const F=k&&k.targetChanges.get(O.targetId),G=k&&k.targetMismatches.get(O.targetId)!=null,Q=O.view.applyChanges(U,D.isPrimaryClient,F,G);return ef(D,O.targetId,Q.wa),Q.snapshot}(t,p,y,A);const i=await Kd(t.localStore,e,!0),o=new rb(e,i.Ts),l=o.ma(i.documents),c=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);ef(t,n,h.wa);const d=new sb(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function ub(t,e,n){const r=pe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ka(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&iu(r.remoteStore,s.targetId),yc(r,s.targetId)}).catch(ji)):(yc(r,s.targetId),await gc(r.localStore,s.targetId,!0))}async function hb(t,e){const n=pe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),iu(n.remoteStore,r.targetId))}async function db(t,e,n){const r=vb(t);try{const s=await function(o,l){const c=pe(o),h=We.now(),d=l.reduce((A,V)=>A.add(V.key),ye());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let V=Mn(),D=ye();return c.cs.getEntries(A,d).next(O=>{V=O,V.forEach((x,k)=>{k.isValidDocument()||(D=D.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,V)).next(O=>{p=O;const x=[];for(const k of l){const U=OT(k,p.get(k.key).overlayedDocument);U!=null&&x.push(new mr(k.key,U,mm(U.value.mapValue),Dt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,x,l)}).next(O=>{y=O;const x=O.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(A,O.batchId,x)})}).then(()=>({batchId:y.batchId,changes:Rm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new je(be)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Gi(r,s.changes),await Fa(r.remoteStore)}catch(s){const i=uu(s,"Failed to persist write");n.reject(i)}}async function sg(t,e){const n=pe(t);try{const r=await SI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?De(o.va):s.removedDocuments.size>0&&(De(o.va),o.va=!1))}),await Gi(n,r,e)}catch(r){await ji(r)}}function Zd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=pe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&fu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fb(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(ae.comparator);o=o.insert(i,_t.newNoDocument(i,fe.min()));const l=ye().add(i),c=new xa(fe.min(),new Map,new je(be),o,l);await sg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),mu(r)}else await gc(r.localStore,e,!1).then(()=>yc(r,e,n)).catch(ji)}async function pb(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await RI(n.localStore,e);og(n,r,null),ig(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await ji(s)}}async function mb(t,e,n){const r=pe(t);try{const s=await function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);og(r,e,n),ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await ji(s)}}function ig(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function og(t,e,n){const r=pe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ag(t,r)})}function ag(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(iu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mu(t))}function ef(t,e,n){for(const r of n)r instanceof tg?(t.La.addReference(r.key,e),gb(t,r)):r instanceof ng?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ag(t,r.key)):he()}function gb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),mu(t))}function mu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new ib(n)),t.Oa=t.Oa.insert(n,r),Qm(t.remoteStore,new rr(hn(Pa(n.path)),r,"TargetPurposeLimboResolution",Kc.oe))}}async function Gi(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=su.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>z.forEach(h,y=>z.forEach(y.$i,A=>d.persistence.referenceDelegate.addReference(p,y.targetId,A)).next(()=>z.forEach(y.Ui,A=>d.persistence.referenceDelegate.removeReference(p,y.targetId,A)))))}catch(p){if(!qi(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const A=d.os.get(y),V=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(V);d.os=d.os.insert(y,D)}}}(r.localStore,i))}async function _b(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await Wm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ee($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.hs)}}function yb(t,e){const n=pe(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function lg(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fb.bind(null,e),e.Ca.d_=tb.bind(null,e.eventManager),e.Ca.$a=nb.bind(null,e.eventManager),e}function vb(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mb.bind(null,e),e}class oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ma(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return AI(this.persistence,new II,e.initialUser,this.serializer)}Ga(e){return new wI(ru.Zr,this.serializer)}Wa(e){return new DI}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oa.provider={build:()=>new oa};class vc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_b.bind(null,this.syncEngine),await XI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eb}()}createDatastore(e){const n=Ma(e.databaseInfo.databaseId),r=function(i){return new MI(i)}(e.databaseInfo);return function(i,o,l,c){return new UI(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new $I(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zd(this.syncEngine,n,0),function(){return Gd.D()?new Gd:new NI}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new ob(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await zi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vc.provider={build:()=>new vc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nl(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Eb(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qd(e.remoteStore,s)),t._onlineComponents=e}async function Eb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await Nl(t,new oa)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Nl(t,new oa);return t._offlineComponents}async function cg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await tf(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await tf(t,new vc))),t._onlineComponents}function Tb(t){return cg(t).then(e=>e.syncEngine)}async function aa(t){const e=await cg(t),n=e.eventManager;return n.onListen=ab.bind(null,e.syncEngine),n.onUnlisten=ub.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hb.bind(null,e.syncEngine),n}function Ib(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new gu({next:y=>{d.Za(),o.enqueueAndForget(()=>du(i,p));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new ee($.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&c&&c.source==="server"?h.reject(new ee($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new pu(Pa(l.path),d,{includeMetadataChanges:!0,_a:!0});return hu(i,p)}(await aa(t),t.asyncQueue,e,n,r)),r.promise}function bb(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new gu({next:y=>{d.Za(),o.enqueueAndForget(()=>du(i,p)),y.fromCache&&c.source==="server"?h.reject(new ee($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new pu(l,d,{includeMetadataChanges:!0,_a:!0});return hu(i,p)}(await aa(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e,n){if(!n)throw new ee($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ab(t,e,n,r){if(e===!0&&r===!0)throw new ee($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rf(t){if(!ae.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sf(t){if(ae.isDocumentKey(t))throw new ee($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ua(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ua(t);throw new ee($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ug((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jE;switch(r.type){case"firstParty":return new KE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nf.get(n);r&&(re("ComponentProvider","Removing Datastore"),nf.delete(n),r.terminate())}(this),Promise.resolve()}}function Rb(t,e,n,r={}){var s;const i=(t=Nt(t,Ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=mt.MOCK_USER;else{l=yw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ee($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(h)}t._authCredentials=new qE(new hm(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class ar extends Br{constructor(e,n,r){super(e,n,Pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new ae(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Ks(t,e,...n){if(t=Qe(t),hg("collection","path",e),t instanceof Ba){const r=Fe.fromString(e,...n);return sf(r),new ar(t,null,r)}{if(!(t instanceof Et||t instanceof ar))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return sf(r),new ar(t.firestore,null,r)}}function xt(t,e,...n){if(t=Qe(t),arguments.length===1&&(e=dm.newId()),hg("doc","path",e),t instanceof Ba){const r=Fe.fromString(e,...n);return rf(r),new Et(t,null,new ae(r))}{if(!(t instanceof Et||t instanceof ar))throw new ee($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return rf(r),new Et(t.firestore,t instanceof ar?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zm(this,"async_queue_retry"),this.Vu=()=>{const r=Dl();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Dl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qi(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=cu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function lf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ln extends Ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new af,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new af(e),this._firestoreClient=void 0,await e}}}function Sb(t,e){const n=typeof t=="object"?t:nm(),r=typeof t=="string"?t:"(default)",s=Hc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gw("firestore");i&&Rb(s,...i)}return s}function Qi(t){if(t._terminated)throw new ee($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Cb(t),t._firestoreClient}function Cb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new iT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ug(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new wb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(ut.fromBase64String(e))}catch(n){throw new ee($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=/^__.*__$/;class kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}class dg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class vu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return la(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fg(this.Cu)&&Pb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ma(e)}Qu(e,n,r,s=!1){return new vu({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ja(t){const e=t._freezeSettings(),n=Ma(t._databaseId);return new Vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pg(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Eu("Data must be an object, but it was:",o,r);const l=_g(r,o);let c,h;if(i.merge)c=new Lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=wc(e,p,n);if(!o.contains(y))throw new ee($.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);vg(d,y)||d.push(y)}c=new Lt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new kb(new Vt(l),c,h)}class qa extends $a{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}class wu extends $a{_toFieldTransform(e){return new kT(e.path,new Vi)}isEqual(e){return e instanceof wu}}function mg(t,e,n,r){const s=t.Qu(1,e,n);Eu("Data must be an object, but it was:",s,r);const i=[],o=Vt.empty();Fr(r,(c,h)=>{const d=Tu(e,c,n);h=Qe(h);const p=s.Nu(d);if(h instanceof qa)i.push(d);else{const y=Ji(h,p);y!=null&&(i.push(d),o.set(d,y))}});const l=new Lt(i);return new dg(o,l,s.fieldTransforms)}function gg(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[wc(e,r,n)],c=[s];if(i.length%2!=0)throw new ee($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(wc(e,i[y])),c.push(i[y+1]);const h=[],d=Vt.empty();for(let y=l.length-1;y>=0;--y)if(!vg(h,l[y])){const A=l[y];let V=c[y];V=Qe(V);const D=o.Nu(A);if(V instanceof qa)h.push(A);else{const O=Ji(V,D);O!=null&&(h.push(A),d.set(A,O))}}const p=new Lt(h);return new dg(d,p,o.fieldTransforms)}function Db(t,e,n,r=!1){return Ji(n,t.Qu(r?4:3,e))}function Ji(t,e){if(yg(t=Qe(t)))return Eu("Unsupported field value:",e,t),_g(t,e);if(t instanceof $a)return function(r,s){if(!fg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ji(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ST(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof _u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:Fm(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ua(r)}`)}(t,e)}function _g(t,e){const n={};return fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,s)=>{const i=Ji(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof _u||t instanceof Es||t instanceof Et||t instanceof $a||t instanceof yu)}function Eu(t,e,n){if(!yg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ua(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wc(t,e,n){if((e=Qe(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return Tu(t,e);throw la("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nb=new RegExp("[~\\*/\\[\\]]");function Tu(t,e,n){if(e.search(Nb)>=0)throw la(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yi(...e.split("."))._internalPath}catch{throw la(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function la(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee($.INVALID_ARGUMENT,l+t+c)}function vg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ob(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ob extends wg{data(){return super.data()}}function Iu(t,e){return typeof e=="string"?Tu(t,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bu{}class xb extends bu{}function Mb(t,e,...n){let r=[];e instanceof bu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Au).length,l=i.filter(c=>c instanceof Ha).length;if(o>1||o>0&&l>0)throw new ee($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ha extends xb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ha(e,n,r)}_apply(e){const n=this._parse(e);return Tg(e._query,n),new Br(e.firestore,e.converter,uc(e._query,n))}_parse(e){const n=ja(e.firestore);return function(i,o,l,c,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ee($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){uf(p,d);const A=[];for(const V of p)A.push(cf(c,i,V));y={arrayValue:{values:A}}}else y=cf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||uf(p,d),y=Db(l,o,p,d==="in"||d==="not-in");return Ze.create(h,d,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Lb(t,e,n){const r=e,s=Iu("where",t);return Ha._create(s,r,n)}class Au extends bu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Tg(o,c),o=uc(o,c)}(e._query,n),new Br(e.firestore,e.converter,uc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cf(t,e,n){if(typeof(n=Qe(n))=="string"){if(n==="")throw new ee($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tm(e)&&n.indexOf("/")!==-1)throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!ae.isDocumentKey(r))throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pd(t,new ae(r))}if(n instanceof Et)return Pd(t,n._key);throw new ee($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ua(n)}.`)}function uf(t,e){if(!Array.isArray(t)||t.length===0)throw new ee($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tg(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Fb{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new yu(i)}convertGeoPoint(e){return new _u(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const n=hr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);De(Hm(r));const s=new Pi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bg extends wg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends bg{data(e={}){return super.data(e)}}class Ag{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Lo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Lo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Ub(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ub(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){t=Nt(t,Et);const e=Nt(t.firestore,Ln);return Ib(Qi(e),t._key).then(n=>Rg(e,t,n))}class Ru extends Fb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function hf(t){t=Nt(t,Br);const e=Nt(t.firestore,Ln),n=Qi(e),r=new Ru(e);return Eg(t._query),bb(n,t._query).then(s=>new Ag(e,r,t,s))}function xl(t,e,n){t=Nt(t,Et);const r=Nt(t.firestore,Ln),s=Ig(t.converter,e,n);return Wa(r,[pg(ja(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function Bb(t,e,n,...r){t=Nt(t,Et);const s=Nt(t.firestore,Ln),i=ja(s);let o;return o=typeof(e=Qe(e))=="string"||e instanceof Yi?gg(i,"updateDoc",t._key,e,n,r):mg(i,"updateDoc",t._key,e),Wa(s,[o.toMutation(t._key,Dt.exists(!0))])}function df(t){return Wa(Nt(t.firestore,Ln),[new Oa(t._key,Dt.none())])}function ff(t,...e){var n,r,s;t=Qe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||lf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(lf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Et)h=Nt(t.firestore,Ln),d=Pa(t._key.path),c={next:p=>{e[o]&&e[o](Rg(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Nt(t,Br);h=Nt(p.firestore,Ln),d=p._query;const y=new Ru(h);c={next:A=>{e[o]&&e[o](new Ag(h,y,p,A))},error:e[o+1],complete:e[o+2]},Eg(t._query)}return function(y,A,V,D){const O=new gu(D),x=new pu(A,O,V);return y.asyncQueue.enqueueAndForget(async()=>hu(await aa(y),x)),()=>{O.Za(),y.asyncQueue.enqueueAndForget(async()=>du(await aa(y),x))}}(Qi(h),d,l,c)}function Wa(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>db(await Tb(r),s,i)),i.promise}(Qi(t),e)}function Rg(t,e,n){const r=n.docs.get(e._key),s=new Ru(t);return new bg(t,s,e._key,r,new ri(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ja(e)}set(e,n,r){this._verifyNotCommitted();const s=Ml(e,this._firestore),i=Ig(s.converter,n,r),o=pg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Dt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ml(e,this._firestore);let o;return o=typeof(n=Qe(n))=="string"||n instanceof Yi?gg(this._dataReader,"WriteBatch.update",i._key,n,r,s):mg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ml(e,this._firestore);return this._mutations=this._mutations.concat(new Oa(n._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ml(t,e){if((t=Qe(t)).firestore!==e)throw new ee($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function zs(){return new wu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){return Qi(t=Nt(t,Ln)),new $b(t,e=>Wa(t,e))}(function(e,n=!0){(function(s){bs=s})(Is),ps(new Nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ln(new HE(r.getProvider("auth-internal")),new GE(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),or(bd,"4.7.3",e),or(bd,"4.7.3","esm2017")})();var jb="firebase",qb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(jb,qb,"app");function Su(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hb=Sg,Cg=new Bi("auth","Firebase",Sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new jc("@firebase/auth");function Wb(t,...e){ca.logLevel<=we.WARN&&ca.warn(`Auth (${Is}): ${t}`,...e)}function Fo(t,...e){ca.logLevel<=we.ERROR&&ca.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Cu(t,...e)}function fn(t,...e){return Cu(t,...e)}function Pg(t,e,n){const r=Object.assign(Object.assign({},Hb()),{[e]:n});return new Bi("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return Pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cg.create(t,...e)}function ue(t,e,...n){if(!t)throw Cu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function Fn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kb(){return pf()==="http:"||pf()==="https:"}function pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kb()||Tw()||"connection"in navigator)?navigator.onLine:!0}function Gb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=vw()||Iw()}get(){return zb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Xi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return Vg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=$i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Ew()||(h.referrerPolicy="no-referrer"),kg.fetch()(Dg(t,t.config.apiHost,n,l),h)})}async function Vg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qb),e);try{const s=new Xb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw So(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pg(t,d,h);en(t,d)}}catch(s){if(s instanceof Bn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Ka(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pu(t.config,s):`${t.config.apiScheme}://${s}`}function Jb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function mf(t){return t!==void 0&&t.enterprise!==void 0}class Zb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function eA(t,e){return $n(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Ng(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=ku(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi(Ll(s.auth_time)),issuedAtTime:gi(Ll(s.iat)),expirationTime:gi(Ll(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ll(t){return Number(t)*1e3}function ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qp(n);return s?JSON.parse(s):(Fo("Failed to decode base64 JWT payload"),null)}catch(s){return Fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gf(t){const e=ku(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oi(t,Ng(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],l=oA(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function iA(t){const e=Qe(t);await ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=Su(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(t,e){const n=await Vg(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lA(t,e){return $n(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=gf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new cs;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Oi(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,k=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:F,isAnonymous:G,providerData:Q,stsTokenManager:T}=n;ue(U&&T,e,"internal-error");const _=cs.fromJSON(this.name,T);ue(typeof U=="string",e,"internal-error"),zn(p,e.name),zn(y,e.name),ue(typeof F=="boolean",e,"internal-error"),ue(typeof G=="boolean",e,"internal-error"),zn(A,e.name),zn(V,e.name),zn(D,e.name),zn(O,e.name),zn(x,e.name),zn(k,e.name);const g=new kn({uid:U,auth:e,email:y,emailVerified:F,displayName:p,isAnonymous:G,photoURL:V,phoneNumber:A,tenantId:D,stsTokenManager:_,createdAt:x,lastLoginAt:k});return Q&&Array.isArray(Q)&&(g.providerData=Q.map(I=>Object.assign({},I))),O&&(g._redirectEventId=O),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new cs;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ua(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Og(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new cs;l.updateFromIdToken(r);const c=new kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;function Vn(t){Fn(t instanceof Function,"Expected a class definition");let e=_f.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_f.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xg.type="NONE";const yf=xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(Vn(yf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Vn(yf);const o=Uo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=kn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new us(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(jg(e))return"Webos";if(Lg(e))return"Safari";if((e.includes("chrome/")||Fg(e))&&!e.includes("edge/"))return"Chrome";if(Bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mg(t=Tt()){return/firefox\//i.test(t)}function Lg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fg(t=Tt()){return/crios\//i.test(t)}function Ug(t=Tt()){return/iemobile/i.test(t)}function Bg(t=Tt()){return/android/i.test(t)}function $g(t=Tt()){return/blackberry/i.test(t)}function jg(t=Tt()){return/webos/i.test(t)}function Vu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cA(t=Tt()){var e;return Vu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uA(){return bw()&&document.documentMode===10}function qg(t=Tt()){return Vu(t)||Bg(t)||jg(t)||$g(t)||/windows phone/i.test(t)||Ug(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e=[]){let n;switch(t){case"Browser":n=vf(Tt());break;case"Worker":n=`${vf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e={}){return $n(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=6;class pA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ng(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ua(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(lr(this));const n=e?Qe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new pA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return Qe(t)}class wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(t){za=t}function Wg(t){return za.loadJS(t)}function _A(){return za.recaptchaEnterpriseScript}function yA(){return za.gapiScript}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const wA="recaptcha-enterprise",EA="NO_RECAPTCHA";class TA{constructor(e){this.type=wA,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{eA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Zb(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;mf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(EA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&mf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_A();c.length!==0&&(c+=l),Wg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Ef(t,e,n,r=!1){const s=new TA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ic(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ef(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ef(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xo(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function bA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AA(t,e,n){const r=$r(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kg(e),{host:o,port:l}=RA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),SA()}function Kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RA(t){const e=Kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Tf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Tf(o)}}}function Tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function CA(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){return Ka(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}async function kA(t,e){return $n(t,"POST","/v1/accounts:sendOobCode",gr(t,e))}async function VA(t,e){return kA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function NA(t,e){return Ka(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,n,"signInWithPassword",PA);case"emailLink":return DA(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,r,"signUpPassword",CA);case"emailLink":return NA(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return Ka(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="http://localhost";class Lr extends Du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Su(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Lr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:OA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MA(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,l;const c=Xs(Zs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=xA((s=c.mode)!==null&&s!==void 0?s:null);ue(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=MA(e);try{return new Nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return ue(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends zg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Zi{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Zi{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Zi{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=If(r);return new Ts({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=If(r);return new Ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function If(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ha(e,n,r,s)}}function Gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,r):i})}async function LA(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(lr(r));const s="reauthenticate";try{const i=await Oi(t,Gg(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=ku(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),Ts._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(t,e,n=!1){if(Cn(t.app))return Promise.reject(lr(t));const r="signIn",s=await Gg(t,r,e),i=await Ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function UA(t,e){return Qg($r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $A(t,e,n){const r=$r(t);await Ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VA)}function jA(t,e,n){return Cn(t.app)?Promise.reject(lr(t)):UA(Qe(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BA(t),r})}function qA(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function HA(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function WA(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function KA(t){return Qe(t).signOut()}const da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=1e3,GA=10;class Jg extends Yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jg.type="LOCAL";const QA=Jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg extends Yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xg.type="SESSION";const Zg=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await YA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Ou("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function XA(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function ZA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function t0(){return e_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="firebaseLocalStorageDb",n0=1,fa="firebaseLocalStorage",n_="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function r0(){const t=indexedDB.deleteDatabase(t_);return new eo(t).toPromise()}function bc(){const t=indexedDB.open(t_,n0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:n_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await r0(),e(await bc()))})})}async function bf(t,e,n){const r=Qa(t,!0).put({[n_]:e,value:n});return new eo(r).toPromise()}async function s0(t,e){const n=Qa(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=Qa(t,!0).delete(e);return new eo(n).toPromise()}const i0=800,o0=3;class r_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>o0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(t0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||e0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await bf(e,da,"1"),await Af(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>s0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qa(s,!1).getAll();return new eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r_.type="LOCAL";const a0=r_;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e){return e?Vn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c0(t){return Qg(t.auth,new xu(t),t.bypassAuthState)}function u0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),FA(n,new xu(t),t.bypassAuthState)}async function h0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),LA(n,new xu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c0;case"linkViaPopup":case"linkViaRedirect":return h0;case"reauthViaPopup":case"reauthViaRedirect":return u0;default:en(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Xi(2e3,1e4);class ns extends s_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d0.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="pendingRedirect",Bo=new Map;class p0 extends s_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await m0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m0(t,e){const n=y0(e),r=_0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function g0(t,e){Bo.set(t._key(),e)}function _0(t){return Vn(t._redirectPersistence)}function y0(t){return Uo(f0,t.config.apiKey,t.name)}async function v0(t,e,n=!1){if(Cn(t.app))return Promise.reject(lr(t));const r=$r(t),s=l0(r,e),o=await new p0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=10*60*1e3;class E0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!i_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=w0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rf(e))}saveEventToCache(e){this.cachedEventUids.add(Rf(e)),this.lastProcessedEventTime=Date.now()}}function Rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function i_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A0=/^https?/;async function R0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I0(t);for(const n of e)try{if(S0(n))return}catch{}en(t,"unauthorized-domain")}function S0(t){const e=Ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A0.test(n))return!1;if(b0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Xi(3e4,6e4);function Sf(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function P0(t){return new Promise((e,n)=>{var r,s,i;function o(){Sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sf(),n(fn(t,"network-request-failed"))},timeout:C0.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const l=vA("iframefcb");return pn()[l]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Wg(`${yA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw $o=null,e})}let $o=null;function k0(t){return $o=$o||P0(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new Xi(5e3,15e3),D0="__/auth/iframe",N0="emulator/auth/iframe",O0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M0(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pu(e,N0):`https://${t.config.authDomain}/${D0}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=x0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function L0(t){const e=await k0(t),n=pn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:M0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=pn().setTimeout(()=>{i(o)},V0.get());function c(){pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U0=500,B0=600,$0="_blank",j0="http://localhost";class Cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q0(t,e,n,r=U0,s=B0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},F0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Tt().toLowerCase();n&&(l=Fg(h)?$0:n),Mg(h)&&(e=e||j0,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[A,V])=>`${y}${A}=${V},`,"");if(cA(h)&&l!=="_self")return H0(e||"",l),new Cf(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Cf(p)}function H0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="__/auth/handler",K0="emulator/auth/handler",z0=encodeURIComponent("fac");async function Pf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof zg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Zi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${z0}=${encodeURIComponent(c)}`:"";return`${G0(t)}?${$i(l).slice(1)}${h}`}function G0({config:t}){return t.emulator?Pu(t,K0):`https://${t.authDomain}/${W0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class Q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zg,this._completeRedirectFn=v0,this._overrideRedirectResult=g0}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pf(e,n,r,Ec(),s);return q0(e,o,Ou())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Pf(e,n,r,Ec(),s);return XA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await L0(e),r=new E0(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fl,{type:Fl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Fl];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qg()||Lg()||Vu()}}const Y0=Q0;var kf="@firebase/auth",Vf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z0(t){ps(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hg(t)},h=new mA(r,s,i,c);return bA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Nr("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new J0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(kf,Vf,X0(t)),or(kf,Vf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=5*60,tR=Xp("authIdTokenMaxAge")||eR;let Df=null;const nR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tR)return;const s=n==null?void 0:n.token;Df!==s&&(Df=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rR(t=nm()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IA(t,{popupRedirectResolver:Y0,persistence:[a0,QA,Zg]}),r=Xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nR(i.toString());HA(n,o,()=>o(n.currentUser)),qA(n,l=>o(l))}}const s=Yp("auth");return s&&AA(n,`http://${s}`),n}function sR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z0("Browser");const iR={apiKey:"AIzaSyDWwfpAs3seIe4ELuGZkAgrblowz6dKG5o",authDomain:"fratelli-db-29588.firebaseapp.com",projectId:"fratelli-db-29588",storageBucket:"fratelli-db-29588.firebasestorage.app",messagingSenderId:"673725534115",appId:"1:673725534115:web:2f3f22cda85e5aa0499416",measurementId:"G-V5ZVQ1XCJE"},o_=tm(iR),ze=Sb(o_),Co=rR(o_);function a_(){const t=de([]),e=de([]),n=de(!1),r=de(!1);let s=null,i=null;async function o(){const x=We.now(),k=new We(x.seconds-86400,x.nanoseconds);for(const U of e.value)if(U.borrowedAt&&U.borrowedAt.toMillis()<=k.toMillis()){const F=Ro(ze),G=xt(ze,"workstations",U.workstation);F.update(xt(ze,"borrowRecords",U.id),{returnedAt:zs()}),F.update(G,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),await F.commit()}}function l(){s||(s=ff(Ks(ze,"workstations"),x=>{const k=[];x.forEach(U=>{k.push({id:U.id,...U.data()})}),k.sort((U,F)=>U.name.localeCompare(F.name,"nb")),t.value=k,r.value=!0},x=>{console.error("Workstations error:",x),r.value=!0}))}function c(){if(i)return;const x=Mb(Ks(ze,"borrowRecords"),Lb("returnedAt","==",null));i=ff(x,k=>{const U=[];k.forEach(F=>{U.push({id:F.id,...F.data()})}),U.sort((F,G)=>{var Q,T;return(((Q=G.borrowedAt)==null?void 0:Q.toMillis())??0)-(((T=F.borrowedAt)==null?void 0:T.toMillis())??0)}),e.value=U,o()},k=>console.error("Active borrows error:",k))}Ia(()=>{s&&s(),i&&i()});async function h(x,k,U,F){const G=Ro(ze),Q=xt(Ks(ze,"borrowRecords")),T=xt(ze,"workstations",x);G.update(T,{status:"borrowed",borrower:k,borrowedAt:zs(),currentBorrowRecord:Q.id});const _={workstation:x,borrower:k,phone:U,borrowedAt:zs(),returnedAt:null,controllers:F??null,anonymizedAt:null};G.set(Q,_),await G.commit()}async function d(x){const k=xt(ze,"workstations",x),U=await Ol(k);if(!U.exists())return;const F=U.data(),G=F.currentBorrowRecord,Q=F.borrower,T=Ro(ze);if(T.update(k,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),G){const _={returnedAt:zs()};Q&&(_.borrower=Q),T.update(xt(ze,"borrowRecords",G),_)}await T.commit()}async function p(){const x=await hf(Ks(ze,"borrowRecords")),k=[];for(const U of x.docs){const F={id:U.id,...U.data()};F.returnedAt&&k.push(F)}return k.sort((U,F)=>{var G,Q;return(((G=F.borrowedAt)==null?void 0:G.toMillis())??0)-(((Q=U.borrowedAt)==null?void 0:Q.toMillis())??0)}),k}async function y(){const x=We.fromMillis(Date.now()-2592e6),k=await hf(Ks(ze,"borrowRecords")),U=Ro(ze);let F=0;for(const G of k.docs){const Q=G.data();Q.returnedAt&&Q.returnedAt.toMillis()<=x.toMillis()&&!Q.anonymizedAt&&(U.update(G.ref,{borrower:"Anonymisert",phone:"",anonymizedAt:zs()}),F++)}F>0&&await U.commit()}async function A(){const x=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1",accessories:"Headset"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2",accessories:""},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3",accessories:""}];for(const k of x){const U=xt(ze,"workstations",k.name);(await Ol(U)).exists()||await xl(U,{name:k.name,type:k.type,keyboard:k.keyboard,mouse:k.mouse,accessories:k.accessories,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function V(x,k,U,F,G){await xl(xt(ze,"workstations",x),{name:x,type:k,keyboard:U||"",mouse:F||"",accessories:G||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function D(x){await df(xt(ze,"workstations",x))}async function O(x,k){var F;const U=(F=k.newName)==null?void 0:F.trim();if(U&&U!==x){const G=await Ol(xt(ze,"workstations",x));if(!G.exists())return;const Q=G.data();await xl(xt(ze,"workstations",U),{...Q,name:U,keyboard:k.keyboard??Q.keyboard,mouse:k.mouse??Q.mouse,accessories:k.accessories??Q.accessories,type:k.type??Q.type}),await df(xt(ze,"workstations",x))}else{const G={};k.keyboard!==void 0&&(G.keyboard=k.keyboard),k.mouse!==void 0&&(G.mouse=k.mouse),k.accessories!==void 0&&(G.accessories=k.accessories),k.type!==void 0&&(G.type=k.type),await Bb(xt(ze,"workstations",x),G)}}return{workstations:t,activeBorrows:e,loading:n,workstationsLoaded:r,subscribeWorkstations:l,subscribeActiveBorrows:c,borrowWorkstation:h,returnWorkstation:d,getHistory:p,anonymizeOldRecords:y,seedDefaultWorkstations:A,addWorkstation:V,removeWorkstation:D,updateWorkstation:O}}const Ul=de(null);let Gs=null;function Mu(){Gs||(Gs=WA(Co,r=>{Ul.value=r})),Ia(()=>{Gs&&(Gs(),Gs=null)});async function t(r,s){await jA(Co,r,s)}async function e(){await KA(Co)}function n(){return Ul.value!==null}return{currentUser:Ul,login:t,logout:e,isAdmin:n,sendPasswordReset:r=>$A(Co,r)}}const oR={class:"student-layout"},aR={key:0,class:"init-load"},lR={key:1,class:"init-empty"},cR={key:2,class:"ws-scroll"},uR={key:0,class:"ps-row"},hR=["onClick","onKeydown"],dR={class:"ws-bar-inner"},fR={class:"ws-bar-name"},pR={key:0,class:"ws-bar-detail"},mR={class:"ws-row"},gR=["onClick","onKeydown"],_R={class:"ws-block-inner"},yR={class:"ws-block-name"},vR={key:0,class:"ws-block-detail"},wR={class:"modal"},ER={class:"form-group"},TR={class:"form-group"},IR={key:0,class:"form-group"},bR={class:"ctrl-select"},AR={class:"modal-actions"},RR=["disabled"],SR={class:"modal"},CR={class:"form-group"},PR={class:"form-group"},kR={class:"modal-actions"},VR={key:0,class:"error-message"},DR={class:"modal modal-reset"},NR={class:"form-group"},OR={class:"modal-actions"},xR=["disabled"],MR={class:"modal-actions"},LR=pr({__name:"StudentView",setup(t){const e=Ft("currentView"),n=Ft("showToast"),r=Ft("loading"),{workstations:s,workstationsLoaded:i,subscribeWorkstations:o,borrowWorkstation:l}=a_(),{login:c,sendPasswordReset:h}=Mu(),d=de(!1),p=de(""),y=de(!1),A=de(!1),V=de(null),D=de(""),O=de(""),x=de(0),k=de(null),U=de(!1),F=de(""),G=de(""),Q=de(""),T=de(null);async function _(){Q.value="",r.value=!0;try{await c(F.value,G.value),U.value=!1,F.value="",G.value="",e.value="admin"}catch(le){const B=le.code;B==="auth/user-not-found"?Q.value="Bruker ikke funnet":B==="auth/wrong-password"?Q.value="Feil passord":B==="auth/invalid-email"?Q.value="Ugyldig e-post":B==="auth/too-many-requests"?Q.value="For mange forsøk. Prøv igjen senere.":Q.value="Feil e-post eller passord"}finally{r.value=!1}}async function g(){p.value.trim()&&(y.value=!0,await h(p.value.trim()).catch(()=>{}))}const I=ts(()=>s.value.filter(le=>le.type==="playstation")),b=ts(()=>s.value.filter(le=>le.type==="pc")),E=ts(()=>s.value.find(le=>le.id===V.value)),v=ts(()=>{var le;return((le=E.value)==null?void 0:le.type)==="playstation"});function _e(le){V.value=le,D.value="",O.value="",x.value=0,A.value=!0,ai(()=>{var B;return(B=k.value)==null?void 0:B.focus()})}function Ue(){A.value=!1,V.value=null,D.value="",O.value="",x.value=0}async function Pe(){const le=D.value.trim(),B=O.value.trim();if(!(!le||!V.value)&&B&&!(v.value&&!x.value)){r.value=!0;try{await l(V.value,le,B,v.value?x.value:void 0),A.value=!1,n(`Du låner ${V.value}`,"success"),V.value=null,D.value="",O.value=""}catch(te){console.error(te),n("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return Ta(()=>o()),(le,B)=>(Z(),ie("div",oR,[P("button",{class:"admin-corner",onClick:B[0]||(B[0]=te=>{U.value=!0,ai(()=>{var Ye;return(Ye=T.value)==null?void 0:Ye.focus()})})},"Admin"),Yn(i)?Yn(s).length===0?(Z(),ie("div",lR,[B[18]||(B[18]=P("p",{class:"init-empty-title"},"Ingen enheter enda",-1)),B[19]||(B[19]=P("p",{class:"init-empty-sub"},"Det er ingen enheter å låne ennå. Logg inn som admin for å legge til din første enhet.",-1)),P("button",{class:"btn-get-started",onClick:B[1]||(B[1]=te=>{U.value=!0,ai(()=>{var Ye;return(Ye=T.value)==null?void 0:Ye.focus()})})},"Kom i gang")])):(Z(),ie("div",cR,[I.value.length?(Z(),ie("div",uR,[(Z(!0),ie(Ne,null,nr(I.value,te=>(Z(),ie("div",{key:te.id,class:He(["ws-bar",te.status]),tabindex:"0",role:"button",onClick:Ye=>te.status==="available"&&_e(te.id),onKeydown:bl(Ye=>te.status==="available"&&_e(te.id),["enter"])},[P("div",dR,[P("div",fR,ve(te.name),1),te.keyboard?(Z(),ie("div",pR,ve(te.keyboard),1)):Ve("",!0),P("div",{class:He(["ws-block-badge",te.status])},ve(te.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,hR))),128))])):Ve("",!0),P("div",mR,[(Z(!0),ie(Ne,null,nr(b.value,te=>(Z(),ie("div",{key:te.id,class:He(["ws-block",te.status]),tabindex:"0",role:"button",onClick:Ye=>te.status==="available"&&_e(te.id),onKeydown:bl(Ye=>te.status==="available"&&_e(te.id),["enter"])},[P("div",_R,[P("div",yR,ve(te.name),1),te.keyboard||te.mouse||te.accessories?(Z(),ie("div",vR,ve([te.keyboard,te.mouse,te.accessories].filter(Boolean).join(" · ")),1)):Ve("",!0),P("div",{class:He(["ws-block-badge",te.status])},ve(te.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,gR))),128))])])):(Z(),ie("div",aR,[...B[17]||(B[17]=[P("div",{class:"loader-ring"},null,-1),P("p",null,"Laster...",-1)])])),(Z(),Wt(li,{to:"body"},[A.value&&E.value?(Z(),ie("div",{key:0,class:"modal-overlay",onClick:Jn(Ue,["self"])},[P("div",wR,[P("h3",null,ve(E.value.name),1),B[23]||(B[23]=P("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),P("div",ER,[B[20]||(B[20]=P("label",{for:"name-input"},"Ditt navn",-1)),tt(P("input",{id:"name-input",ref_key:"nameInput",ref:k,"onUpdate:modelValue":B[2]||(B[2]=te=>D.value=te),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:bl(Pe,["enter"])},null,544),[[St,D.value]])]),P("div",TR,[B[21]||(B[21]=P("label",{for:"phone-input"},"Telefon",-1)),tt(P("input",{id:"phone-input","onUpdate:modelValue":B[3]||(B[3]=te=>O.value=te),class:"input",type:"tel",placeholder:"12345678",autocomplete:"tel",required:""},null,512),[[St,O.value]])]),v.value?(Z(),ie("div",IR,[B[22]||(B[22]=P("label",{for:"ctrl-input"},"Antall kontrollere",-1)),P("div",bR,[P("button",{class:He(["ctrl-btn",{active:x.value===1}]),onClick:B[4]||(B[4]=te=>x.value=1)},"1",2),P("button",{class:He(["ctrl-btn",{active:x.value===2}]),onClick:B[5]||(B[5]=te=>x.value=2)},"2",2),P("button",{class:He(["ctrl-btn",{active:x.value===3}]),onClick:B[6]||(B[6]=te=>x.value=3)},"3",2),P("button",{class:He(["ctrl-btn",{active:x.value===4}]),onClick:B[7]||(B[7]=te=>x.value=4)},"4",2)])])):Ve("",!0),P("div",AR,[P("button",{class:"btn btn-primary btn-full",disabled:!D.value.trim()||!O.value.trim()||v.value&&!x.value,onClick:Pe}," Bekreft lån ",8,RR),P("button",{class:"btn btn-secondary btn-full",onClick:Ue},"Avbryt")])])])):Ve("",!0)])),(Z(),Wt(li,{to:"body"},[U.value?(Z(),ie("div",{key:0,class:"modal-overlay",onClick:B[12]||(B[12]=Jn(te=>U.value=!1,["self"]))},[P("div",SR,[B[27]||(B[27]=P("h3",null,"Admin",-1)),B[28]||(B[28]=P("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),P("form",{onSubmit:Jn(_,["prevent"])},[P("div",CR,[B[24]||(B[24]=P("label",{for:"login-email"},"E-post",-1)),tt(P("input",{id:"login-email",ref_key:"emailInput",ref:T,"onUpdate:modelValue":B[8]||(B[8]=te=>F.value=te),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[St,F.value]])]),P("div",PR,[B[25]||(B[25]=P("label",{for:"login-password"},"Passord",-1)),tt(P("input",{id:"login-password","onUpdate:modelValue":B[9]||(B[9]=te=>G.value=te),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[St,G.value]])]),P("button",{type:"button",class:"btn-text",style:{"margin-top":"4px"},onClick:B[10]||(B[10]=te=>d.value=!0)},"Glemt passordet?"),P("div",kR,[B[26]||(B[26]=P("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),P("button",{type:"button",class:"btn btn-secondary btn-full",onClick:B[11]||(B[11]=te=>U.value=!1)},"Avbryt")]),Q.value?(Z(),ie("p",VR,ve(Q.value),1)):Ve("",!0)],32)])])):Ve("",!0)])),(Z(),Wt(li,{to:"body"},[d.value?(Z(),ie("div",{key:0,class:"modal-overlay",onClick:B[16]||(B[16]=Jn(te=>d.value=!1,["self"]))},[P("div",DR,[y.value?(Z(),ie(Ne,{key:1},[B[31]||(B[31]=P("h3",null,"Tilbakestill passord",-1)),B[32]||(B[32]=P("p",{class:"modal-sub"},"Hvis e-posten du skrev inn finnes i systemet vårt, vil du motta en tilbakestillingslenke.",-1)),P("div",MR,[P("button",{type:"button",class:"btn btn-primary btn-full",onClick:B[15]||(B[15]=te=>d.value=!1)},"OK")])],64)):(Z(),ie(Ne,{key:0},[B[30]||(B[30]=P("h3",null,"Tilbakestill passord",-1)),P("form",{onSubmit:Jn(g,["prevent"])},[P("div",NR,[B[29]||(B[29]=P("label",{for:"reset-email"},"E-post",-1)),tt(P("input",{id:"reset-email","onUpdate:modelValue":B[13]||(B[13]=te=>p.value=te),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[St,p.value]])]),P("div",OR,[P("button",{type:"submit",class:"btn btn-primary btn-full",disabled:!p.value.trim()},"Send",8,xR),P("button",{type:"button",class:"btn btn-secondary btn-full",onClick:B[14]||(B[14]=te=>d.value=!1)},"Lukk")])],32)],64))])])):Ve("",!0)]))]))}}),jr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FR=jr(LR,[["__scopeId","data-v-aa5d5908"]]),UR={class:"view active"},BR={class:"header"},$R={class:"header-top"},jR={class:"content"},qR={class:"card login-card"},HR={class:"form-group"},WR={class:"form-group"},KR={key:0,class:"error-message"},zR=pr({__name:"LoginView",setup(t){const e=Ft("currentView");Ft("showToast");const n=Ft("loading"),{login:r}=Mu(),s=de(""),i=de(""),o=de("");async function l(){o.value="",n.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?o.value="Bruker ikke funnet":h==="auth/wrong-password"?o.value="Feil passord":h==="auth/invalid-email"?o.value="Ugyldig e-post":h==="auth/too-many-requests"?o.value="For mange forsøk. Prøv igjen senere.":o.value="Feil e-post eller passord"}finally{n.value=!1}}return(c,h)=>(Z(),ie("div",UR,[P("header",BR,[P("div",$R,[P("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=d=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=P("h1",{class:"header-title"},"Admin",-1))])]),P("main",jR,[P("section",qR,[P("form",{onSubmit:Jn(l,["prevent"])},[P("div",HR,[h[4]||(h[4]=P("label",{for:"login-email"},"E-post",-1)),tt(P("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[St,s.value]])]),P("div",WR,[h[5]||(h[5]=P("label",{for:"login-password"},"Passord",-1)),tt(P("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[St,i.value]])]),h[6]||(h[6]=P("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),o.value?(Z(),ie("p",KR,ve(o.value),1)):Ve("",!0)],32)])])]))}}),GR=jr(zR,[["__scopeId","data-v-ae3940d1"]]),QR=["innerHTML"],YR=pr({__name:"SfIcon",props:{name:{},size:{}},setup(t){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 12H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
  <rect x="6" y="12" width="12" height="8" rx="2" />
  <circle cx="9" cy="16" r="1" fill="currentColor" />
  <circle cx="15" cy="16" r="1" fill="currentColor" />
  <path d="M10 12v-2M14 12v-2" />
</svg>`,desktopcomputer:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="3" width="20" height="14" rx="2" />
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
</svg>`,"chevron.left":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6" />
</svg>`,"rectangle.stack":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="6" rx="1" />
  <rect x="3" y="11" width="18" height="9" rx="1" />
</svg>`,"list.bullet":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="8" y1="6" x2="21" y2="6" />
  <line x1="8" y1="12" x2="21" y2="12" />
  <line x1="8" y1="18" x2="21" y2="18" />
  <circle cx="4" cy="6" r="1" fill="currentColor" />
  <circle cx="4" cy="12" r="1" fill="currentColor" />
  <circle cx="4" cy="18" r="1" fill="currentColor" />
</svg>`,gearshape:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3" />
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
</svg>`,"arrow.right.square":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <line x1="12" y1="8" x2="16" y2="12" />
  <line x1="12" y1="16" x2="16" y2="12" />
  <line x1="8" y1="12" x2="16" y2="12" />
</svg>`,xmark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`,"line.3.horizontal":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>`,"tray.and.arrow.down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="7 10 12 15 17 10" />
  <line x1="12" y1="15" x2="12" y2="3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>`,"checkmark.circle.fill":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
  <polyline points="22 4 12 14.01 9 11.01" />
</svg>`,"questionmark.circle":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10" />
  <path d="M9.5 9a2.5 2.5 0 0 1 4.9.75c0 1.75-2.4 2.25-2.4 3.75" />
  <circle cx="12" cy="17" r="0.5" fill="currentColor" />
</svg>`};return(n,r)=>(Z(),ie("span",{class:"sf-icon",style:ds({width:(t.size??20)+"px",height:(t.size??20)+"px"}),innerHTML:e[t.name]},null,12,QR))}}),sn=jr(YR,[["__scopeId","data-v-533e42c5"]]),JR={class:"sheet-content"},XR=pr({__name:"BaseSheet",props:{show:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=e,r=de(null);let s=0,i=0,o=!1;function l(d){if(!r.value)return;const p=r.value.getBoundingClientRect(),y=d.touches[0].clientY;y-p.top<40&&(s=y,o=!0)}function c(d){o&&(d.preventDefault(),i=d.touches[0].clientY-s,i>0&&r.value&&(r.value.style.transform=`translateY(${i}px)`))}function h(){o&&(o=!1,i>100&&r.value&&n("close"),r.value&&(r.value.style.transform=""),i=0)}return(d,p)=>(Z(),Wt(li,{to:"body"},[ke(Wp,{name:"sheet"},{default:Fi(()=>[t.show?(Z(),ie("div",{key:0,class:"sheet-overlay",onClick:p[0]||(p[0]=Jn(y=>n("close"),["self"]))},[P("div",{ref_key:"sheetRef",ref:r,class:"sheet glass-strong",onTouchstart:l,onTouchmove:c,onTouchend:h},[p[1]||(p[1]=P("div",{class:"sheet-handle"},null,-1)),P("div",JR,[$y(d.$slots,"default",{},void 0,!0)])],544)])):Ve("",!0)]),_:3})]))}}),l_=jr(XR,[["__scopeId","data-v-af530b9a"]]),ZR={class:"confirm-head"},eS={key:0,class:"confirm-message"},tS={class:"confirm-actions"},nS=pr({__name:"ConfirmSheet",props:{show:{type:Boolean},title:{},message:{},confirmLabel:{},cancelLabel:{},danger:{type:Boolean}},emits:["confirm","close"],setup(t,{emit:e}){const n=e;return(r,s)=>(Z(),Wt(l_,{show:t.show,onClose:s[2]||(s[2]=i=>n("close"))},{default:Fi(()=>[P("div",ZR,[P("h3",null,ve(t.title),1),t.message?(Z(),ie("p",eS,ve(t.message),1)):Ve("",!0)]),P("div",tS,[P("button",{class:He(["confirm-btn confirm-primary",{danger:t.danger}]),onClick:s[0]||(s[0]=i=>n("confirm"))},ve(t.confirmLabel),3),P("button",{class:"confirm-btn confirm-cancel",onClick:s[1]||(s[1]=i=>n("close"))},ve(t.cancelLabel??"Avbryt"),1)])]),_:1},8,["show"]))}}),rS=jr(nS,[["__scopeId","data-v-321b7902"]]),sS={key:0,class:"tour-root"},iS={class:"tour-progress"},oS={class:"tour-title"},aS={class:"tour-text"},lS={class:"tour-actions"},cS={class:"tour-nav"},uS=pr({__name:"OnboardingTour",props:{show:{type:Boolean},steps:{}},emits:["close","finish","switch-tab"],setup(t,{emit:e}){const n=t,r=e,s=de(0),i=vi({top:0,left:0,width:0,height:0,visible:!1}),o=vi({}),l=()=>s.value===n.steps.length-1,c=()=>s.value===0;async function h(){const D=n.steps[s.value];if(!D)return;D.tab&&r("switch-tab",D.tab,D.selector),await ai();const O=window.innerWidth<=700;if(await new Promise(Q=>setTimeout(Q,O?320:60)),D.placement==="center"||!D.selector){i.visible=!1,o.top="50%",o.left="50%",o.transform="translate(-50%, -50%)",o.bottom=void 0;return}const x=document.querySelector(D.selector);if(!x){i.visible=!1,o.top="50%",o.left="50%",o.transform="translate(-50%, -50%)";return}x.scrollIntoView({block:"center",behavior:"instant"}),O&&await new Promise(Q=>setTimeout(Q,80));const k=x.getBoundingClientRect(),U=8;i.top=k.top-U,i.left=k.left-U,i.width=k.width+U*2,i.height=k.height+U*2,i.visible=!0;const F=window.innerHeight-k.bottom,G=D.placement==="top"||F<180;if(O)if(o.left="50%",o.transform="translateX(-50%)",D.selector.includes("tab-"))if(k.top>window.innerHeight*.45){o.bottom=void 0;const T=Math.max(16,k.top-180);o.top=`${Math.min(T,window.innerHeight*.32)}px`}else o.bottom=void 0,o.top=`${k.bottom+16}px`;else o.bottom=void 0,G?(o.top=void 0,o.bottom=`${window.innerHeight-k.top+16}px`):o.top=`${k.bottom+16}px`;else{o.transform="none",G?(o.top=void 0,o.bottom=`${window.innerHeight-k.top+16}px`):(o.bottom=void 0,o.top=`${k.bottom+16}px`);const Q=Math.min(Math.max(k.left,16),window.innerWidth-296);o.left=`${Math.max(Q,16)}px`}}function d(){if(l()){A();return}s.value++,h()}function p(){c()||(s.value--,h())}function y(){r("close")}function A(){r("finish")}function V(){h()}return Vo(()=>n.show,D=>{D?(s.value=0,h(),window.addEventListener("resize",V)):window.removeEventListener("resize",V)},{immediate:!0}),Fc(()=>window.removeEventListener("resize",V)),(D,O)=>(Z(),Wt(li,{to:"body"},[ke(Wp,{name:"tour-fade"},{default:Fi(()=>{var x,k;return[t.show?(Z(),ie("div",sS,[P("div",{class:"tour-scrim",onClick:y}),i.visible?(Z(),ie("div",{key:0,class:"tour-hole",style:ds({top:i.top+"px",left:i.left+"px",width:i.width+"px",height:i.height+"px"})},null,4)):Ve("",!0),P("div",{class:"tour-card",style:ds(o)},[P("div",iS,[(Z(!0),ie(Ne,null,nr(t.steps,(U,F)=>(Z(),ie("span",{key:F,class:He(["tour-dot",{active:F===s.value}])},null,2))),128))]),P("div",oS,ve((x=t.steps[s.value])==null?void 0:x.title),1),P("div",aS,ve((k=t.steps[s.value])==null?void 0:k.text),1),P("div",lS,[P("button",{class:"tour-skip",onClick:y},"Hopp over"),P("div",cS,[c()?Ve("",!0):(Z(),ie("button",{key:0,class:"tour-btn tour-btn-secondary",onClick:p},"Tilbake")),P("button",{class:"tour-btn tour-btn-primary",onClick:d},ve(l()?"Ferdig":"Neste"),1)])])],4)])):Ve("",!0)]}),_:1})]))}}),hS=jr(uS,[["__scopeId","data-v-f6711921"]]),dS={class:"admin-split"},fS={class:"sidebar-nav"},pS=["data-tour","onClick"],mS={class:"sidebar-footer"},gS={class:"sidebar-email"},_S={class:"admin-content"},yS={key:0,class:"empty-state"},vS={key:1,class:"card-list"},wS={class:"card-body"},ES={class:"card-title"},TS={class:"card-meta"},IS={key:0},bS={class:"card-meta"},AS=["onClick"],RS={key:0,class:"empty-state"},SS={key:1,class:"card-list"},CS={class:"card-body"},PS={class:"card-title"},kS={class:"card-meta"},VS={key:0},DS={class:"card-meta"},NS={key:1},OS={class:"card-list manage-list"},xS={key:0,class:"empty-state"},MS={key:1,class:"empty-state empty-state-cta"},LS={key:0,class:"edit-inline"},FS={class:"form-group"},US={class:"type-picker",style:{"margin-bottom":"8px"}},BS=["placeholder"],$S={class:"card-body"},jS={class:"card-title"},qS={class:"card-meta"},HS=["onClick"],WS=["onClick"],KS={class:"form-group"},zS={class:"form-group"},GS={class:"type-picker"},QS={class:"form-group"},YS={for:"sheet-new-keyboard"},JS=["placeholder"],XS={key:0,class:"form-group"},ZS={key:1,class:"form-group"},Nf="fratelli-admin-onboarded-v1",eC=pr({__name:"AdminView",setup(t){const e=Ft("currentView"),n=Ft("showToast"),r=Ft("loading"),{currentUser:s,logout:i}=Mu(),{workstations:o,workstationsLoaded:l,activeBorrows:c,subscribeWorkstations:h,subscribeActiveBorrows:d,returnWorkstation:p,getHistory:y,anonymizeOldRecords:A,addWorkstation:V,removeWorkstation:D,updateWorkstation:O}=a_(),x=de("borrows"),k=de(!1),U=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],F=ts(()=>{var L;return((L=s.value)==null?void 0:L.email)??""}),G=de(!1),Q=[{selector:"",placement:"center",title:"Velkommen til admin-panelet 👋",text:"Her styrer du utlån, ser historikk og administrerer enheter. Ta en rask rundtur før du setter i gang."},{selector:'[data-tour="tab-borrows"]',tab:"borrows",title:"Utlån",text:"Her ser du hvilket utstyr som er lånt ut akkurat nå, av hvem, og kan registrere retur med ett trykk."},{selector:'[data-tour="tab-history"]',tab:"history",title:"Historikk",text:"Full oversikt over tidligere utlån. Eldre poster blir automatisk anonymisert for personvern."},{selector:'[data-tour="tab-manage"]',tab:"manage",title:"Enheter",text:"Legg til, rediger eller fjern PC-er og annet utstyr som kan lånes ut herfra."},{selector:'[data-tour="add-fab"]',tab:"manage",title:"Legg til enhet",text:"Trykk her for å registrere en ny enhet — velg type, navn og hva som følger med."},{selector:"",placement:"center",title:"Klar til å starte!",text:"Du finner denne rundturen igjen når som helst nederst i menyen. Lykke til!"}];function T(){k.value=!1,G.value=!0}function _(){G.value=!1,k.value=!1,localStorage.setItem(Nf,"1")}function g(L,S){x.value=L,L==="history"&&I.value.length===0&&Ye(),typeof window<"u"&&window.innerWidth<=700&&(S!=null&&S.includes("tab-")?k.value=!0:S!=null&&S.includes("add-fab")?k.value=!1:S||(k.value=!1))}const I=de([]),b=de(!1),E=de(""),v=de("pc"),_e=de(""),Ue=de(""),Pe=de("");function le(){E.value="",_e.value="",Ue.value="",Pe.value="",v.value="pc",b.value=!0}async function B(){await i(),e.value="student"}async function te(L){r.value=!0;try{await p(L),n(`${L} er returnert`,"success")}catch(S){console.error(S),n("Kunne ikke returnere","error")}finally{r.value=!1}}async function Ye(){r.value=!0;try{await A(),I.value=await y()}catch(L){console.error(L),n("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function zt(){if(E.value.trim()){r.value=!0;try{await V(E.value.trim(),v.value,_e.value.trim(),Ue.value.trim(),Pe.value.trim()),n(`${E.value} er lagt til`,"success"),E.value="",_e.value="",Ue.value="",Pe.value="",b.value=!1}catch(L){console.error(L),n("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function Ke(L){r.value=!0;try{await D(L),n(`${L} er fjernet`,"success")}catch(S){console.error(S),n("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}const Re=de(null);function qr(L){Re.value=L}function yn(){Re.value=null}function vn(){const L=Re.value;L&&(Re.value=null,L.onConfirm())}const rt=de(null),tn=de(""),kt=de("pc"),It=de(""),nn=de(""),w=de("");function R(L){rt.value=L.id,tn.value=L.name,kt.value=L.type,It.value=L.keyboard||"",nn.value=L.mouse||"",w.value=L.accessories||""}function M(){rt.value=null}async function K(){if(rt.value){r.value=!0;try{await O(rt.value,{newName:tn.value.trim(),type:kt.value,keyboard:It.value.trim(),mouse:nn.value.trim(),accessories:w.value.trim()}),n(`${rt.value} er oppdatert`,"success"),rt.value=null}catch(L){console.error(L),n("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function H(L){x.value=L,k.value=!1,L==="history"&&(I.value=[],Ye())}function q(L){if(!L)return"—";const S=L.toDate?L.toDate():new Date(L);return`${String(S.getDate()).padStart(2,"0")}.${String(S.getMonth()+1).padStart(2,"0")} ${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}`}function J(L){if(!L)return"—";const S=L.toDate?L.toDate():new Date(L);return`${String(S.getDate()).padStart(2,"0")}.${String(S.getMonth()+1).padStart(2,"0")}.${S.getFullYear()} ${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}`}return Ta(()=>{h(),d(),localStorage.getItem(Nf)||setTimeout(()=>{G.value=!0},400)}),(L,S)=>{var j,oe,X,se;return Z(),ie(Ne,null,[P("div",dS,[P("button",{class:He(["menu-toggle",{hidden:k.value||Re.value!==null||b.value||G.value}]),onClick:S[0]||(S[0]=W=>k.value=!0),"aria-label":"Åpne meny"},[ke(sn,{name:"line.3.horizontal",size:22}),S[16]||(S[16]=P("span",null,"Meny",-1))],2),k.value?(Z(),ie("div",{key:0,class:"sidebar-backdrop",onClick:S[1]||(S[1]=W=>k.value=!1)})):Ve("",!0),P("aside",{class:He(["sidebar",{open:k.value}])},[P("div",{class:"sidebar-top"},[S[17]||(S[17]=P("div",{class:"sidebar-title"},"Admin",-1)),P("button",{class:"sidebar-logout",onClick:B}," Logg ut ")]),P("nav",fS,[(Z(),ie(Ne,null,nr(U,W=>P("button",{key:W.key,class:He(["sidebar-item",{active:x.value===W.key}]),"data-tour":`tab-${W.key}`,onClick:ne=>H(W.key)},[ke(sn,{name:W.icon,size:20},null,8,["name"]),P("span",null,ve(W.label),1)],10,pS)),64))]),P("div",mS,[P("button",{class:"sidebar-help",onClick:T},[ke(sn,{name:"questionmark.circle",size:16}),S[18]||(S[18]=P("span",null,"Vis rundtur",-1))]),P("div",gS,ve(F.value),1)])],2),P("main",_S,[tt(P("section",null,[S[19]||(S[19]=P("h2",{class:"section-title"},"Utlån",-1)),Yn(c).length===0?(Z(),ie("div",yS,"Ingen utlån")):(Z(),ie("div",vS,[(Z(!0),ie(Ne,null,nr(Yn(c),W=>(Z(),ie("div",{key:W.id,class:"card-row"},[P("div",wS,[P("div",ES,ve(W.workstation),1),P("div",TS,[jt(ve(W.borrower),1),W.phone?(Z(),ie("span",IS," · "+ve(W.phone),1)):Ve("",!0)]),P("div",bS,[W.controllers?(Z(),ie(Ne,{key:0},[ke(sn,{name:"gamecontroller",size:12}),jt(" "+ve(W.controllers)+" kontrollere · ",1)],64)):Ve("",!0),jt(" "+ve(q(W.borrowedAt)),1)])]),P("button",{class:"btn-return",onClick:ne=>qr({title:`Returner ${W.workstation}?`,message:"Enheten blir tilgjengelig igjen etter retur.",confirmLabel:"Returner",onConfirm:()=>te(W.workstation)})},"Returner",8,AS)]))),128))]))],512),[[wl,x.value==="borrows"]]),tt(P("section",null,[S[20]||(S[20]=P("h2",{class:"section-title"},"Historikk",-1)),I.value.length===0?(Z(),ie("div",RS,"Ingen historikk")):(Z(),ie("div",SS,[(Z(!0),ie(Ne,null,nr(I.value,W=>(Z(),ie("div",{key:W.id,class:"card-row history-row"},[P("div",CS,[P("div",PS,ve(W.workstation),1),P("div",kS,[jt(ve(W.borrower),1),W.phone?(Z(),ie("span",VS," · "+ve(W.phone),1)):Ve("",!0)]),P("div",DS,[W.controllers?(Z(),ie(Ne,{key:0},[ke(sn,{name:"gamecontroller",size:12}),jt(" "+ve(W.controllers)+" kontrollere · ",1)],64)):Ve("",!0),jt(" Lånt "+ve(J(W.borrowedAt))+" ",1),W.returnedAt?(Z(),ie("span",NS," | retur "+ve(J(W.returnedAt)),1)):Ve("",!0)])]),P("span",{class:He(["card-status",W.returnedAt?"returned":"active"])},ve(W.returnedAt?"Returnert":"Aktiv"),3)]))),128))]))],512),[[wl,x.value==="history"]]),tt(P("section",null,[P("div",{class:"manage-header"},[S[21]||(S[21]=P("h2",{class:"section-title"},"Enheter",-1)),P("button",{class:"btn-add-fab","data-tour":"add-fab",onClick:le,"aria-label":"Legg til enhet"},"+")]),P("div",OS,[Yn(l)?Yn(o).length===0?(Z(),ie("div",MS,[S[22]||(S[22]=P("p",null,"Ingen enheter",-1)),S[23]||(S[23]=P("p",{class:"empty-state-sub"},"Du har ingen enheter ennå. Legg til din første enhet for å komme i gang.",-1)),P("button",{class:"btn-get-started",onClick:le},"Kom i gang")])):(Z(!0),ie(Ne,{key:2},nr(Yn(o),W=>(Z(),ie("div",{key:W.id,class:"card-row manage-row"},[rt.value===W.id?(Z(),ie("div",LS,[P("div",FS,[S[24]||(S[24]=P("label",null,"Navn",-1)),tt(P("input",{"onUpdate:modelValue":S[2]||(S[2]=ne=>tn.value=ne),class:"input",placeholder:"Navn"},null,512),[[St,tn.value]])]),P("div",US,[P("button",{type:"button",class:He(["type-btn",{active:kt.value==="pc"}]),onClick:S[3]||(S[3]=ne=>kt.value="pc")},[ke(sn,{name:"desktopcomputer",size:16}),S[25]||(S[25]=jt(" PC ",-1))],2),P("button",{type:"button",class:He(["type-btn",{active:kt.value==="playstation"}]),onClick:S[4]||(S[4]=ne=>kt.value="playstation")},[ke(sn,{name:"gamecontroller",size:16}),S[26]||(S[26]=jt(" PS ",-1))],2)]),tt(P("input",{"onUpdate:modelValue":S[5]||(S[5]=ne=>It.value=ne),class:"input",placeholder:kt.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,BS),[[St,It.value]]),kt.value==="pc"?tt((Z(),ie("input",{key:0,"onUpdate:modelValue":S[6]||(S[6]=ne=>nn.value=ne),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[St,nn.value]]):Ve("",!0),kt.value==="pc"?tt((Z(),ie("input",{key:1,"onUpdate:modelValue":S[7]||(S[7]=ne=>w.value=ne),class:"input",placeholder:"Annet tilbehør",style:{"margin-bottom":"6px"}},null,512)),[[St,w.value]]):Ve("",!0),P("div",{class:"edit-actions"},[P("button",{class:"btn-return",onClick:K},"Lagre"),P("button",{class:"btn-remove",onClick:M},"Avbryt")])])):(Z(),ie(Ne,{key:1},[P("div",$S,[P("div",jS,[ke(sn,{name:W.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),jt(" "+ve(W.name),1)]),P("div",qS,ve(W.status==="available"?"Ledig":"Utlånt"),1)]),W.status==="available"?(Z(),ie("button",{key:0,class:"btn-edit",onClick:ne=>R(W)},"Rediger",8,HS)):Ve("",!0),W.status==="available"?(Z(),ie("button",{key:1,class:"btn-remove",onClick:ne=>qr({title:`Fjern ${W.name}?`,message:"Enheten og dens lån blir slettet.",confirmLabel:"Fjern",danger:!0,onConfirm:()=>Ke(W.name)})},"Fjern",8,WS)):Ve("",!0)],64))]))),128)):(Z(),ie("div",xS,"Laster..."))])],512),[[wl,x.value==="manage"]])])]),ke(rS,{show:Re.value!==null,title:((j=Re.value)==null?void 0:j.title)??"",message:(oe=Re.value)==null?void 0:oe.message,"confirm-label":((X=Re.value)==null?void 0:X.confirmLabel)??"OK",danger:(se=Re.value)==null?void 0:se.danger,onConfirm:vn,onClose:yn},null,8,["show","title","message","confirm-label","danger"]),ke(l_,{show:b.value,onClose:S[15]||(S[15]=W=>b.value=!1)},{default:Fi(()=>[S[34]||(S[34]=P("h3",{style:{"font-size":"1.0625rem","font-weight":"600","margin-bottom":"16px",color:"#ffffff"}},"Ny enhet",-1)),P("form",{onSubmit:Jn(zt,["prevent"])},[P("div",KS,[S[27]||(S[27]=P("label",{for:"sheet-new-name"},"Navn",-1)),tt(P("input",{id:"sheet-new-name","onUpdate:modelValue":S[8]||(S[8]=W=>E.value=W),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[St,E.value]])]),P("div",zS,[S[30]||(S[30]=P("label",null,"Type",-1)),P("div",GS,[P("button",{type:"button",class:He(["type-btn",{active:v.value==="pc"}]),onClick:S[9]||(S[9]=W=>v.value="pc")},[ke(sn,{name:"desktopcomputer",size:18}),S[28]||(S[28]=jt(" PC ",-1))],2),P("button",{type:"button",class:He(["type-btn",{active:v.value==="playstation"}]),onClick:S[10]||(S[10]=W=>v.value="playstation")},[ke(sn,{name:"gamecontroller",size:18}),S[29]||(S[29]=jt(" PlayStation ",-1))],2)])]),P("div",QS,[P("label",YS,ve(v.value==="playstation"?"Tilbehør":"Tastatur"),1),tt(P("input",{id:"sheet-new-keyboard","onUpdate:modelValue":S[11]||(S[11]=W=>_e.value=W),class:"input",placeholder:v.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,JS),[[St,_e.value]])]),v.value==="pc"?(Z(),ie("div",XS,[S[31]||(S[31]=P("label",{for:"sheet-new-mouse"},"Mus",-1)),tt(P("input",{id:"sheet-new-mouse","onUpdate:modelValue":S[12]||(S[12]=W=>Ue.value=W),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[St,Ue.value]])])):Ve("",!0),v.value==="pc"?(Z(),ie("div",ZS,[S[32]||(S[32]=P("label",{for:"sheet-new-accessories"},"Annet tilbehør",-1)),tt(P("input",{id:"sheet-new-accessories","onUpdate:modelValue":S[13]||(S[13]=W=>Pe.value=W),class:"input",placeholder:"F.eks. Headset"},null,512),[[St,Pe.value]])])):Ve("",!0),S[33]||(S[33]=P("button",{type:"submit",class:"btn-submit",style:{"margin-top":"8px"}},"Legg til",-1)),P("button",{type:"button",class:"btn btn-secondary btn-full",style:{"margin-top":"10px"},onClick:S[14]||(S[14]=W=>b.value=!1)},"Avbryt")],32)]),_:1},8,["show"]),ke(hS,{show:G.value,steps:Q,onClose:_,onFinish:_,onSwitchTab:g},null,8,["show"])],64)}}}),tC=jr(eC,[["__scopeId","data-v-88573bcf"]]),nC={id:"toast-container"},rC={key:0,id:"loading-overlay"},sC=pr({__name:"App",setup(t){const e=de("student"),n=de([]);let r=0;function s(o,l="info"){const c=++r;n.value.push({id:c,message:o,type:l}),setTimeout(()=>{const h=n.value.findIndex(d=>d.id===c);h!==-1&&n.value.splice(h,1)},3e3)}ko("showToast",s),ko("currentView",e);const i=de(!1);return ko("loading",i),(o,l)=>(Z(),ie(Ne,null,[P("div",nC,[(Z(!0),ie(Ne,null,nr(n.value,c=>(Z(),ie("div",{key:c.id,class:He(["toast glass",c.type])},ve(c.message),3))),128))]),i.value?(Z(),ie("div",rC,[...l[0]||(l[0]=[P("div",{class:"loader-ring"},null,-1),P("p",null,"Laster...",-1)])])):Ve("",!0),e.value==="student"?(Z(),Wt(FR,{key:1})):e.value==="login"?(Z(),Wt(GR,{key:2})):e.value==="admin"?(Z(),Wt(tC,{key:3})):Ve("",!0)],64))}});ow(sC).mount("#app");
