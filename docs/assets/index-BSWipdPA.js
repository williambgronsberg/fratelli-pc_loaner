(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},ns=[],cn=()=>{},Df=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ha=t=>t.startsWith("onUpdate:"),et=Object.assign,bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k_=Object.prototype.hasOwnProperty,Re=(t,e)=>k_.call(t,e),le=Array.isArray,rs=t=>Di(t)==="[object Map]",Nf=t=>Di(t)==="[object Set]",Sh=t=>Di(t)==="[object Date]",me=t=>typeof t=="function",Be=t=>typeof t=="string",Zt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Of=t=>(Se(t)||me(t))&&me(t.then)&&me(t.catch),xf=Object.prototype.toString,Di=t=>xf.call(t),V_=t=>Di(t).slice(8,-1),Mf=t=>Di(t)==="[object Object]",Rc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},D_=/-\w/g,Yt=da(t=>t.replace(D_,e=>e.slice(1).toUpperCase())),N_=/\B([A-Z])/g,ur=da(t=>t.replace(N_,"-$1").toLowerCase()),Lf=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=da(t=>t?`on${Lf(t)}`:""),ln=(t,e)=>!Object.is(t,e),Ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ff=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Sc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},O_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Ch;const fa=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pa(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?F_(r):pa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Se(t))return t}const x_=/;(?![^(]*\))/g,M_=/:([^]+)/,L_=/\/\*[^]*?\*\//g;function F_(t){const e={};return t.replace(L_,"").split(x_).forEach(n=>{if(n){const r=n.split(M_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ke(t){let e="";if(Be(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Ke(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const U_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=Ac(U_);function Uf(t){return!!t||t===""}function $_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cc(t[r],e[r]);return n}function Cc(t,e){if(t===e)return!0;let n=Sh(t),r=Sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?$_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Cc(t[o],e[o]))return!1}}return String(t)===String(e)}const Bf=t=>!!(t&&t.__v_isRef===!0),Ie=t=>Be(t)?t:t==null?"":le(t)||Se(t)&&(t.toString===xf||!me(t.toString))?Bf(t)?Ie(t.value):JSON.stringify(t,$f,2):String(t),$f=(t,e)=>Bf(e)?$f(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cl(r,i)+" =>"]=s,n),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cl(n))}:Zt(e)?cl(e):Se(e)&&!le(e)&&!Mf(e)?String(e):e,cl=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class j_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&it&&(it.active?(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){if(this._on>0&&--this._on===0){if(it===this)it=this.prevScope;else{let e=it;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function q_(){return it}let Ne;const ul=new WeakSet;class jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&(it.active?it.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ul.has(this)&&(ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ph(this),Wf(this);const e=Ne,n=Jt;Ne=this,Jt=!0;try{return this.fn()}finally{Kf(this),Ne=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ul(this)&&this.run()}get dirty(){return Ul(this)}}let qf=0,si,ii;function Hf(t,e=!1){if(t.flags|=8,e){t.next=ii,ii=t;return}t.next=si,si=t}function Pc(){qf++}function kc(){if(--qf>0)return;if(ii){let e=ii;for(ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;si;){let e=si;for(si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vc(r),H_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ul(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ul(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Jt;Ne=t,Jt=!0;try{Wf(t);const s=t.fn(t._value);(e.version===0||ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Jt=r,Kf(t),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function H_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const Gf=[];function pn(){Gf.push(Jt),Jt=!1}function mn(){const t=Gf.pop();Jt=t===void 0?!0:t}function Ph(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let pi=0;class W_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Jt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new W_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Qf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){Pc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kc()}}}function Qf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Bl=new WeakMap,Pr=Symbol(""),$l=Symbol(""),mi=Symbol("");function mt(t,e,n){if(Jt&&Ne){let r=Bl.get(t);r||Bl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Dc),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Bl.get(t);if(!o){pi++;return}const l=c=>{c&&c.trigger()};if(Pc(),e==="clear")o.forEach(l);else{const c=le(t),h=c&&Rc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,y)=>{(y==="length"||y===mi||!Zt(y)&&y>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(mi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Pr)),rs(t)&&l(o.get($l)));break;case"delete":c||(l(o.get(Pr)),rs(t)&&l(o.get($l)));break;case"set":rs(t)&&l(o.get(Pr));break}}kc()}function Gr(t){const e=be(t);return e===t?e:(mt(e,"iterate",mi),Kt(t)?e:e.map(en))}function ma(t){return mt(t=be(t),"iterate",mi),t}function on(t,e){return Vn(t)?hs(kr(t)?en(e):e):en(e)}const K_={__proto__:null,[Symbol.iterator](){return hl(this,Symbol.iterator,t=>on(this,t))},concat(...t){return Gr(this).concat(...t.map(e=>le(e)?Gr(e):e))},entries(){return hl(this,"entries",t=>(t[1]=on(this,t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(r=>on(this,r)),arguments)},find(t,e){return vn(this,"find",t,e,n=>on(this,n),arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,n=>on(this,n),arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return dl(this,"includes",t)},indexOf(...t){return dl(this,"indexOf",t)},join(t){return Gr(this).join(t)},lastIndexOf(...t){return dl(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return kh(this,"reduce",t,e)},reduceRight(t,...e){return kh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Gr(this).toReversed()},toSorted(t){return Gr(this).toSorted(t)},toSpliced(...t){return Gr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return hl(this,"values",t=>on(this,t))}};function hl(t,e,n){const r=ma(t),s=r[e]();return r!==t&&!Kt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const z_=Array.prototype;function vn(t,e,n,r,s,i){const o=ma(t),l=o!==t&&!Kt(t),c=o[e];if(c!==z_[e]){const p=c.apply(t,i);return l?en(p):p}let h=n;o!==t&&(l?h=function(p,y){return n.call(this,on(t,p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function kh(t,e,n,r){const s=ma(t),i=s!==t&&!Kt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,d,p){return l&&(l=!1,h=on(t,h)),n.call(this,h,on(t,d),p,t)}):n.length>3&&(o=function(h,d,p){return n.call(this,h,d,p,t)}));const c=s[e](o,...r);return l?on(t,c):c}function dl(t,e,n){const r=be(t);mt(r,"iterate",mi);const s=r[e](...n);return(s===-1||s===!1)&&Mc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){pn(),Pc();const r=be(t)[e].apply(t,n);return kc(),mn(),r}const G_=Ac("__proto__,__v_isRef,__isVue"),Yf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function Q_(t){Zt(t)||(t=String(t));const e=be(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Jf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iy:tp:i?ep:Zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=K_[n]))return c;if(n==="hasOwnProperty")return Q_}const l=Reflect.get(e,n,vt(e)?e:r);if((Zt(n)?Yf.has(n):G_(n))||(s||mt(e,"get",n),i))return l;if(vt(l)){const c=o&&Rc(n)?l:l.value;return s&&Se(c)?ql(c):c}return Se(l)?s?ql(l):Oc(l):l}}class Xf extends Jf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=le(e)&&Rc(n);if(!this._isShallow){const h=Vn(i);if(!Kt(r)&&!Vn(r)&&(i=be(i),r=be(r)),!o&&vt(i)&&!vt(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,vt(e)?e:s);return e===be(s)&&c&&(l?ln(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!Yf.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",le(e)?"length":Pr),Reflect.ownKeys(e)}}class Y_ extends Jf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const J_=new Xf,X_=new Y_,Z_=new Xf(!0);const jl=t=>t,fo=t=>Reflect.getPrototypeOf(t);function ey(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=rs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?jl:e?hs:en;return!e&&mt(i,"iterate",c?$l:Pr),et(Object.create(h),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}}})}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ty(t,e){const n={get(s){const i=this.__v_raw,o=be(i),l=be(s);t||(ln(s,l)&&mt(o,"get",s),mt(o,"get",l));const{has:c}=fo(o),h=e?jl:t?hs:en;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(be(s),"iterate",Pr),s.size},has(s){const i=this.__v_raw,o=be(i),l=be(s);return t||(ln(s,l)&&mt(o,"has",s),mt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=be(l),h=e?jl:t?hs:en;return!t&&mt(c,"iterate",Pr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return et(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){const i=be(this),o=fo(i),l=be(s),c=!e&&!Kt(s)&&!Vn(s)?l:s;return o.has.call(i,c)||ln(s,c)&&o.has.call(i,s)||ln(l,c)&&o.has.call(i,l)||(i.add(c),An(i,"add",c,c)),this},set(s,i){!e&&!Kt(i)&&!Vn(i)&&(i=be(i));const o=be(this),{has:l,get:c}=fo(o);let h=l.call(o,s);h||(s=be(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?ln(i,d)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:l}=fo(i);let c=o.call(i,s);c||(s=be(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&An(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ey(s,t,e)}),n}function Nc(t,e){const n=ty(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const ny={get:Nc(!1,!1)},ry={get:Nc(!1,!0)},sy={get:Nc(!0,!1)};const Zf=new WeakMap,ep=new WeakMap,tp=new WeakMap,iy=new WeakMap;function oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oc(t){return Vn(t)?t:xc(t,!1,J_,ny,Zf)}function ay(t){return xc(t,!1,Z_,ry,ep)}function ql(t){return xc(t,!0,X_,sy,tp)}function xc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=oy(V_(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function kr(t){return Vn(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Kt(t){return!!(t&&t.__v_isShallow)}function Mc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function ly(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ff(t,"__v_skip",!0),t}const en=t=>Se(t)?Oc(t):t,hs=t=>Se(t)?ql(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function ge(t){return cy(t,!1)}function cy(t,e){return vt(t)?t:new uy(t,e)}class uy{constructor(e,n){this.dep=new Dc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:en(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Kt(e)||Vn(e);e=r?e:be(e),ln(e,n)&&(this._rawValue=e,this._value=r?e:en(e),this.dep.trigger())}}function Gn(t){return vt(t)?t.value:t}const hy={get:(t,e,n)=>e==="__v_raw"?t:Gn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function np(t){return kr(t)?t:new Proxy(t,hy)}class dy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Hf(this,!0),!0}get value(){const e=this.dep.track();return zf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fy(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new dy(r,s,n)}const mo={},Fo=new WeakMap;let Ir;function py(t,e=!1,n=Ir){if(n){let r=Fo.get(n);r||Fo.set(n,r=[]),r.push(t)}}function my(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=B=>s?B:Kt(B)||s===!1||s===0?bn(B,1):bn(B);let d,p,y,b,V=!1,x=!1;if(vt(t)?(p=()=>t.value,V=Kt(t)):kr(t)?(p=()=>h(t),V=!0):le(t)?(x=!0,V=t.some(B=>kr(B)||Kt(B)),p=()=>t.map(B=>{if(vt(B))return B.value;if(kr(B))return h(B);if(me(B))return c?c(B,2):B()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){pn();try{y()}finally{mn()}}const B=Ir;Ir=d;try{return c?c(t,3,[b]):t(b)}finally{Ir=B}}:p=cn,e&&s){const B=p,G=s===!0?1/0:s;p=()=>bn(B(),G)}const M=q_(),L=()=>{d.stop(),M&&M.active&&bc(M.effects,d)};if(i&&e){const B=e;e=(...G)=>{const z=B(...G);return L(),z}}let N=x?new Array(t.length).fill(mo):mo;const j=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const G=d.run();if(B||s||V||(x?G.some((z,E)=>ln(z,N[E])):ln(G,N))){y&&y();const z=Ir;Ir=d;try{const E=[G,N===mo?void 0:x&&N[0]===mo?[]:N,b];N=G,c?c(e,3,E):e(...E)}finally{Ir=z}}}else d.run()};return l&&l(j),d=new jf(p),d.scheduler=o?()=>o(j,!1):j,b=B=>py(B,!1,d),y=d.onStop=()=>{const B=Fo.get(d);if(B){if(c)c(B,4);else for(const G of B)G();Fo.delete(d)}},e?r?j(!0):N=d.run():o?o(j.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function bn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))bn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(Nf(t)||rs(t))t.forEach(r=>{bn(r,e,n)});else if(Mf(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,r){try{return r?t(...r):t()}catch(s){ga(s,e,n)}}function zt(t,e,n,r){if(me(t)){const s=Ni(t,e,n,r);return s&&Of(s)&&s.catch(i=>{ga(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){pn(),Ni(i,null,10,[t,c,h]),mn();return}}gy(t,n,s,r,o)}function gy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let sn=-1;const ss=[];let zn=null,Qr=0;const rp=Promise.resolve();let Uo=null;function bo(t){const e=Uo||rp;return t?e.then(this?t.bind(this):t):e}function _y(t){let e=sn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Lc(t){if(!(t.flags&1)){const e=gi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=gi(n)?Rt.push(t):Rt.splice(_y(e),0,t),t.flags|=1,sp()}}function sp(){Uo||(Uo=rp.then(op))}function yy(t){le(t)?ss.push(...t):zn&&t.id===-1?zn.splice(Qr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),sp()}function Vh(t,e,n=sn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ip(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>gi(n)-gi(r));if(ss.length=0,zn){zn.push(...e);return}for(zn=e,Qr=0;Qr<zn.length;Qr++){const n=zn[Qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,Qr=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function op(t){try{for(sn=0;sn<Rt.length;sn++){const e=Rt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<Rt.length;sn++){const e=Rt[sn];e&&(e.flags&=-2)}sn=-1,Rt.length=0,ip(),Uo=null,(Rt.length||ss.length)&&op()}}let yt=null,ap=null;function Bo(t){const e=yt;return yt=t,ap=t&&t.type.__scopeId||null,e}function _a(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qo(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&qo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tt(t,e){if(yt===null)return t;const n=Aa(yt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(pn(),zt(c,n,8,[t.el,l,t,e]),mn())}}function Ro(t,e){if(St){let n=St.provides;const r=St.parent&&St.parent.provides;r===n&&(n=St.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=Up();if(r||os){let s=os?os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const vy=Symbol.for("v-scx"),Ey=()=>Lt(vy);function fl(t,e,n){return lp(t,e,n)}function lp(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let h;if(Ei){if(i==="sync"){const b=Ey();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=cn,b.resume=cn,b.pause=cn,b}}const d=St;l.call=(b,V,x)=>zt(b,d,V,x);let p=!1;i==="post"?l.scheduler=b=>{At(b,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,V)=>{V?b():Lc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const y=my(t,e,l);return Ei&&(h?h.push(y):c&&y()),y}function wy(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?cp(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Oi(this),l=lp(s,i.bind(r),n);return o(),l}function cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Kn=new WeakMap,up=Symbol("_vte"),hp=t=>t.__isTeleport,br=t=>t&&(t.disabled||t.disabled===""),Ty=t=>t&&(t.defer||t.defer===""),Dh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Hl=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},Iy={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:d,pc:p,pbc:y,o:{insert:b,querySelector:V,createText:x,createComment:M,parentNode:L}}=h,N=br(e.props);let{dynamicChildren:j}=e;const B=(E,g,_)=>{E.shapeFlag&16&&d(E.children,g,_,s,i,o,l,c)},G=(E=e)=>{const g=br(E.props),_=E.target=Hl(E.props,V),I=Wl(_,E,x,b);_&&(o!=="svg"&&Dh(_)?o="svg":o!=="mathml"&&Nh(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),g||(B(E,_,I),Gs(E,!1)))},z=E=>{const g=()=>{if(Kn.get(E)===g){if(Kn.delete(E),br(E.props)){const _=L(E.el)||n;B(E,_,E.anchor),Gs(E,!0)}G(E)}};Kn.set(E,g),At(g,i)};if(t==null){const E=e.el=x(""),g=e.anchor=x("");if(b(E,n,r),b(g,n,r),Ty(e.props)||i&&i.pendingBranch){z(e);return}N&&(B(e,n,g),Gs(e,!0)),G()}else{e.el=t.el;const E=e.anchor=t.anchor,g=Kn.get(t);if(g){g.flags|=8,Kn.delete(t),z(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,I=e.targetAnchor=t.targetAnchor,A=br(t.props),T=A?n:_,v=A?E:I;if(o==="svg"||Dh(_)?o="svg":(o==="mathml"||Nh(_))&&(o="mathml"),j?(y(t.dynamicChildren,j,T,s,i,o,l),Bc(t,e,!0)):c||p(t,e,T,v,s,i,o,l,!1),N)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):go(e,n,E,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const _e=Hl(e.props,V);_e&&(e.target=_e,go(e,_e,null,h,0))}else A&&go(e,_,I,h,1);Gs(e,N)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:d,target:p,props:y}=t,b=br(y),V=i||!b,x=Kn.get(t);if(x&&(x.flags|=8,Kn.delete(t)),p&&(s(h),s(d)),i&&s(c),!x&&(b||p)&&o&16)for(let M=0;M<l.length;M++){const L=l[M];r(L,e,n,V,!!L.dynamicChildren)}},move:go,hydrate:Ay};function go(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:d}=t,p=i===2;if(p&&r(o,e,n),!Kn.has(t)&&(!p||br(d))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);p&&r(l,e,n)}function Ay(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:d}},p){function y(M,L){let N=L;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")e.targetStart=N;else if(N.data==="teleport anchor"){e.targetAnchor=N,M._lpa=e.targetAnchor&&o(e.targetAnchor);break}}N=o(N)}}function b(M,L){L.anchor=p(o(M),L,l(M),n,r,s,i)}const V=e.target=Hl(e.props,c),x=br(e.props);if(V){const M=V._lpa||V.firstChild;e.shapeFlag&16&&(x?(b(t,e),y(V,M),e.targetAnchor||Wl(V,e,d,h,l(t)===V?t:null)):(e.anchor=o(t),y(V,M),e.targetAnchor||Wl(V,e,d,h),p(M&&o(M),e,V,n,r,s,i))),Gs(e,x)}else x&&e.shapeFlag&16&&(b(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const So=Iy;function Gs(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Wl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[up]=o,t&&(r(i,t,s),r(o,t,s)),o}const Wt=Symbol("_leaveCb"),$s=Symbol("_enterCb");function by(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ea(()=>{t.isMounted=!0}),vp(()=>{t.isUnmounting=!0}),t}const qt=[Function,Array],dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},fp=t=>{const e=t.subTree;return e.component?fp(e.component):e},Ry={name:"BaseTransition",props:dp,setup(t,{slots:e}){const n=Up(),r=by();return()=>{const s=e.default&&gp(e.default(),!0),i=s&&s.length?pp(s):n.subTree?Oe():void 0;if(!i)return;const o=be(t),{mode:l}=o;if(r.isLeaving)return pl(i);const c=Oh(i);if(!c)return pl(i);let h=Kl(c,o,r,n,p=>h=p);c.type!==_t&&_i(c,h);let d=n.subTree&&Oh(n.subTree);if(d&&d.type!==_t&&!Rr(d,c)&&fp(n).type!==_t){let p=Kl(d,o,r,n);if(_i(d,p),l==="out-in"&&c.type!==_t)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},pl(i);l==="in-out"&&c.type!==_t?p.delayLeave=(y,b,V)=>{const x=mp(r,d);x[String(d.key)]=d,y[Wt]=()=>{b(),y[Wt]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function pp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_t){e=n;break}}return e}const Sy=Ry;function mp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Kl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:y,onLeave:b,onAfterLeave:V,onLeaveCancelled:x,onBeforeAppear:M,onAppear:L,onAfterAppear:N,onAppearCancelled:j}=e,B=String(t.key),G=mp(n,t),z=(_,I)=>{_&&zt(_,r,9,I)},E=(_,I)=>{const A=I[1];z(_,I),le(_)?_.every(T=>T.length<=1)&&A():_.length<=1&&A()},g={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=M||c;else return;_[Wt]&&_[Wt](!0);const A=G[B];A&&Rr(t,A)&&A.el[Wt]&&A.el[Wt](),z(I,[_])},enter(_){if(G[B]===t)return;let I=h,A=d,T=p;if(!n.isMounted)if(i)I=L||h,A=N||d,T=j||p;else return;let v=!1;_[$s]=Qe=>{v||(v=!0,Qe?z(T,[_]):z(A,[_]),g.delayedLeave&&g.delayedLeave(),_[$s]=void 0)};const _e=_[$s].bind(null,!1);I?E(I,[_,_e]):_e()},leave(_,I){const A=String(t.key);if(_[$s]&&_[$s](!0),n.isUnmounting)return I();z(y,[_]);let T=!1;_[Wt]=_e=>{T||(T=!0,I(),_e?z(x,[_]):z(V,[_]),_[Wt]=void 0,G[A]===t&&delete G[A])};const v=_[Wt].bind(null,!1);G[A]=t,b?E(b,[_,v]):v()},clone(_){const I=Kl(_,e,n,r,s);return s&&s(I),I}};return g}function pl(t){if(ya(t))return t=or(t),t.children=null,t}function Oh(t){if(!ya(t))return hp(t.type)&&t.children?pp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function _i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===De?(o.patchFlag&128&&s++,r=r.concat(gp(o.children,e,l))):(e||o.type!==_t)&&r.push(l!=null?or(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Lr(t,e){return me(t)?et({name:t.name},e,{setup:t}):t}function _p(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $o=new WeakMap;function oi(t,e,n,r,s=!1){if(le(t)){t.forEach((x,M)=>oi(x,e&&(le(e)?e[M]:e),n,r,s));return}if(is(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Aa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,y=be(p),b=p===Ve?Df:x=>xh(d,x)?!1:Re(y,x),V=(x,M)=>!(M&&xh(d,M));if(h!=null&&h!==c){if(Mh(e),Be(h))d[h]=null,b(h)&&(p[h]=null);else if(vt(h)){const x=e;V(h,x.k)&&(h.value=null),x.k&&(d[x.k]=null)}}if(me(c)){pn();try{Ni(c,l,12,[o,d])}finally{mn()}}else{const x=Be(c),M=vt(c);if(x||M){const L=()=>{if(t.f){const N=x?b(c)?p[c]:d[c]:V()||!t.k?c.value:d[t.k];if(s)le(N)&&bc(N,i);else if(le(N))N.includes(i)||N.push(i);else if(x)d[c]=[i],b(c)&&(p[c]=d[c]);else{const j=[i];V(c,t.k)&&(c.value=j),t.k&&(d[t.k]=j)}}else x?(d[c]=o,b(c)&&(p[c]=o)):M&&(V(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const N=()=>{L(),$o.delete(t)};N.id=-1,$o.set(t,N),At(N,n)}else Mh(t),L()}}}function Mh(t){const e=$o.get(t);e&&(e.flags|=8,$o.delete(t))}fa().requestIdleCallback;fa().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,ya=t=>t.type.__isKeepAlive;function Cy(t,e){yp(t,"a",e)}function Py(t,e){yp(t,"da",e)}function yp(t,e,n=St){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&ky(r,e,n,s),s=s.parent}}function ky(t,e,n,r){const s=va(e,t,r,!0);wa(()=>{bc(r[e],s)},n)}function va(t,e,n=St,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pn();const l=Oi(n),c=zt(e,n,t,o);return l(),mn(),c});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=St)=>{(!Ei||t==="sp")&&va(t,(...r)=>e(...r),n)},Vy=Ln("bm"),Ea=Ln("m"),Dy=Ln("bu"),Ny=Ln("u"),vp=Ln("bum"),wa=Ln("um"),Oy=Ln("sp"),xy=Ln("rtg"),My=Ln("rtc");function Ly(t,e=St){va("ec",t,e)}const Fy=Symbol.for("v-ndc");function Sr(t,e,n,r){let s;const i=n,o=le(t);if(o||Be(t)){const l=o&&kr(t);let c=!1,h=!1;l&&(c=!Kt(t),h=Vn(t),t=ma(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?hs(en(t[d])):en(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Uy(t,e,n={},r,s){if(yt.ce||yt.parent&&is(yt.parent)&&yt.parent.ce){const h=Object.keys(n).length>0;return ee(),Xt(De,null,[xe("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ee();const o=i&&Ep(i(n)),l=n.key||o&&o.key,c=Xt(De,{key:(l&&!Zt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ep(t){return t.some(e=>vi(e)?!(e.type===_t||e.type===De&&!Ep(e.children)):!0)?t:null}const zl=t=>t?Bp(t)?Aa(t):zl(t.parent):null,ai=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Tp(t),$forceUpdate:t=>t.f||(t.f=()=>{Lc(t.update)}),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>wy.bind(t)}),ml=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Re(t,e),By={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ml(r,e))return o[e]=1,r[e];if(s!==Ve&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ve&&Re(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const h=ai[e];let d,p;if(h)return e==="$attrs"&&mt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ml(s,e)?(s[e]=n,!0):r!==Ve&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ve&&l[0]!=="$"&&Re(t,l)||ml(e,l)||Re(i,l)||Re(r,l)||Re(ai,l)||Re(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gl=!0;function $y(t){const e=Tp(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&Fh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:b,updated:V,activated:x,deactivated:M,beforeDestroy:L,beforeUnmount:N,destroyed:j,unmounted:B,render:G,renderTracked:z,renderTriggered:E,errorCaptured:g,serverPrefetch:_,expose:I,inheritAttrs:A,components:T,directives:v,filters:_e}=e;if(h&&jy(h,r,null),o)for(const ce in o){const F=o[ce];me(F)&&(r[ce]=F.bind(n))}if(s){const ce=s.call(n,n);Se(ce)&&(t.data=Oc(ce))}if(Gl=!0,i)for(const ce in i){const F=i[ce],Z=me(F)?F.bind(n,n):me(F.get)?F.get.bind(n,n):cn,Ze=!me(F)&&me(F.set)?F.set.bind(n):cn,Gt=es({get:Z,set:Ze});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Pe=>Gt.value=Pe})}if(l)for(const ce in l)wp(l[ce],r,n,ce);if(c){const ce=me(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(F=>{Ro(F,ce[F])})}d&&Fh(d,t,"c");function Me(ce,F){le(F)?F.forEach(Z=>ce(Z.bind(n))):F&&ce(F.bind(n))}if(Me(Vy,p),Me(Ea,y),Me(Dy,b),Me(Ny,V),Me(Cy,x),Me(Py,M),Me(Ly,g),Me(My,z),Me(xy,E),Me(vp,N),Me(wa,B),Me(Oy,_),le(I))if(I.length){const ce=t.exposed||(t.exposed={});I.forEach(F=>{Object.defineProperty(ce,F,{get:()=>n[F],set:Z=>n[F]=Z,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===cn&&(t.render=G),A!=null&&(t.inheritAttrs=A),T&&(t.components=T),v&&(t.directives=v),_&&_p(t)}function jy(t,e,n=cn){le(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fh(t,e,n){zt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,r){let s=r.includes(".")?cp(n,r):()=>n[r];if(Be(t)){const i=e[t];me(i)&&fl(s,i)}else if(me(t))fl(s,t.bind(n));else if(Se(t))if(le(t))t.forEach(i=>wp(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&fl(s,i,t)}}function Tp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>jo(c,h,o,!0)),jo(c,e,o)),Se(e)&&i.set(e,c),c}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=qy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const qy={data:Uh,props:Bh,emits:Bh,methods:Qs,computed:Qs,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Qs,directives:Qs,watch:Wy,provide:Uh,inject:Hy};function Uh(t,e){return e?t?function(){return et(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Hy(t,e){return Qs(Ql(t),Ql(e))}function Ql(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Qs(t,e){return t?et(Object.create(null),t,e):e}function Bh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:et(Object.create(null),Lh(t),Lh(e??{})):e}function Wy(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Ip(){return{app:null,config:{isNativeTag:Df,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ky=0;function zy(t,e){return function(r,s=null){me(r)||(r=et({},r)),s!=null&&!Se(s)&&(s=null);const i=Ip(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Ky++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(h,...p)):me(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const b=h._ceVNode||xe(r,s);return b.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(b,d,y),c=!0,h._container=d,d.__vue_app__=h,Aa(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(zt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=os;os=h;try{return d()}finally{os=p}}};return h}}let os=null;const Gy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Yt(e)}Modifiers`]||t[`${ur(e)}Modifiers`];function Qy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&Gy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Be(d)?d.trim():d)),o.number&&(s=n.map(Sc)));let l,c=r[l=ll(e)]||r[l=ll(Yt(e))];!c&&i&&(c=r[l=ll(ur(e))]),c&&zt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zt(h,t,6,s)}}const Yy=new WeakMap;function Ap(t,e,n=!1){const r=n?Yy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=h=>{const d=Ap(h,e,!0);d&&(l=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):et(o,i),Se(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!ua(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,ur(e))||Re(t,e))}function $h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:b,ctx:V,inheritAttrs:x}=t,M=Bo(t);let L,N;try{if(n.shapeFlag&4){const B=s||r,G=B;L=an(h.call(G,B,d,p,b,y,V)),N=l}else{const B=e;L=an(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),N=e.props?l:Jy(l)}}catch(B){li.length=0,ga(B,t,1),L=xe(_t)}let j=L;if(N&&x!==!1){const B=Object.keys(N),{shapeFlag:G}=j;B.length&&G&7&&(i&&B.some(ha)&&(N=Xy(N,i)),j=or(j,N,!1,!0))}return n.dirs&&(j=or(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&_i(j,n.transition),L=j,Bo(M),L}const Jy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},Xy=(t,e)=>{const n={};for(const r in t)(!ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?jh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(bp(o,r,y)&&!Ta(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?jh(r,o,h):!0:!!o;return!1}function jh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(bp(e,t,i)&&!Ta(n,i))return!0}return!1}function bp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Cc(r,s):r!==s}function ev({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Rp={},Sp=()=>Object.create(Rp),Cp=t=>Object.getPrototypeOf(t)===Rp;function tv(t,e,n,r=!1){const s={},i=Sp();t.propsDefaults=Object.create(null),Pp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ay(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(Ta(t.emitsOptions,y))continue;const b=e[y];if(c)if(Re(i,y))b!==i[y]&&(i[y]=b,h=!0);else{const V=Yt(y);s[V]=Yl(c,l,V,b,t,!1)}else b!==i[y]&&(i[y]=b,h=!0)}}}else{Pp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=ur(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Yl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&An(t.attrs,"set","")}function Pp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ri(c))continue;const h=e[c];let d;s&&Re(s,d=Yt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Ta(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=be(n),h=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Yl(s,c,p,h[p],t,!Re(h,p))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Oi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ur(n))&&(r=!0))}return r}const rv=new WeakMap;function kp(t,e,n=!1){const r=n?rv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[y,b]=kp(p,e,!0);et(o,y),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Se(t)&&r.set(t,ns),ns;if(le(i))for(let d=0;d<i.length;d++){const p=Yt(i[d]);qh(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=Yt(d);if(qh(p)){const y=i[d],b=o[p]=le(y)||me(y)?{type:y}:et({},y),V=b.type;let x=!1,M=!0;if(le(V))for(let L=0;L<V.length;++L){const N=V[L],j=me(N)&&N.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(M=!1)}else x=me(V)&&V.name==="Boolean";b[0]=x,b[1]=M,(x||Re(b,"default"))&&l.push(p)}}const h=[o,l];return Se(t)&&r.set(t,h),h}function qh(t){return t[0]!=="$"&&!ri(t)}const Fc=t=>t==="_"||t==="_ctx"||t==="$stable",Uc=t=>le(t)?t.map(an):[an(t)],sv=(t,e,n)=>{if(e._n)return e;const r=_a((...s)=>Uc(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fc(s))continue;const i=t[s];if(me(i))e[s]=sv(s,i,r);else if(i!=null){const o=Uc(i);e[s]=()=>o}}},Dp=(t,e)=>{const n=Uc(e);t.slots.default=()=>n},Np=(t,e,n)=>{for(const r in e)(n||!Fc(r))&&(t[r]=e[r])},iv=(t,e,n)=>{const r=t.slots=Sp();if(t.vnode.shapeFlag&32){const s=e._;s?(Np(r,e,n),n&&Ff(r,"_",s,!0)):Vp(e,r)}else e&&Dp(t,e)},ov=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Np(s,e,n):(i=!e.$stable,Vp(e,s)),o=e}else e&&(Dp(t,e),o={default:1});if(i)for(const l in s)!Fc(l)&&o[l]==null&&delete s[l]},At=hv;function av(t){return lv(t)}function lv(t,e){const n=fa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:b=cn,insertStaticContent:V}=t,x=(w,R,C,S=null,H=null,q=null,Y=void 0,K=null,D=!!R.dynamicChildren)=>{if(w===R)return;w&&!Rr(w,R)&&(S=Ct(w),Pe(w,H,q,!0),w=null),R.patchFlag===-2&&(D=!1,R.dynamicChildren=null);const{type:U,ref:ie,shapeFlag:J}=R;switch(U){case Ia:M(w,R,C,S);break;case _t:L(w,R,C,S);break;case _l:w==null&&N(R,C,S,Y);break;case De:T(w,R,C,S,H,q,Y,K,D);break;default:J&1?G(w,R,C,S,H,q,Y,K,D):J&6?v(w,R,C,S,H,q,Y,K,D):(J&64||J&128)&&U.process(w,R,C,S,H,q,Y,K,D,Bt)}ie!=null&&H?oi(ie,w&&w.ref,q,R||w,!R):ie==null&&w&&w.ref!=null&&oi(w.ref,null,q,w,!0)},M=(w,R,C,S)=>{if(w==null)r(R.el=l(R.children),C,S);else{const H=R.el=w.el;R.children!==w.children&&h(H,R.children)}},L=(w,R,C,S)=>{w==null?r(R.el=c(R.children||""),C,S):R.el=w.el},N=(w,R,C,S)=>{[w.el,w.anchor]=V(w.children,R,C,S,w.el,w.anchor)},j=({el:w,anchor:R},C,S)=>{let H;for(;w&&w!==R;)H=y(w),r(w,C,S),w=H;r(R,C,S)},B=({el:w,anchor:R})=>{let C;for(;w&&w!==R;)C=y(w),s(w),w=C;s(R)},G=(w,R,C,S,H,q,Y,K,D)=>{if(R.type==="svg"?Y="svg":R.type==="math"&&(Y="mathml"),w==null)z(R,C,S,H,q,Y,K,D);else{const U=w.el&&w.el._isVueCE?w.el:null;try{U&&U._beginPatch(),_(w,R,H,q,Y,K,D)}finally{U&&U._endPatch()}}},z=(w,R,C,S,H,q,Y,K)=>{let D,U;const{props:ie,shapeFlag:J,transition:ne,dirs:ae}=w;if(D=w.el=o(w.type,q,ie&&ie.is,ie),J&8?d(D,w.children):J&16&&g(w.children,D,null,S,H,gl(w,q),Y,K),ae&&vr(w,null,S,"created"),E(D,w,w.scopeId,Y,S),ie){for(const pe in ie)pe!=="value"&&!ri(pe)&&i(D,pe,null,ie[pe],q,S);"value"in ie&&i(D,"value",null,ie.value,q),(U=ie.onVnodeBeforeMount)&&rn(U,S,w)}ae&&vr(w,null,S,"beforeMount");const oe=cv(H,ne);oe&&ne.beforeEnter(D),r(D,R,C),((U=ie&&ie.onVnodeMounted)||oe||ae)&&At(()=>{try{U&&rn(U,S,w),oe&&ne.enter(D),ae&&vr(w,null,S,"mounted")}finally{}},H)},E=(w,R,C,S,H)=>{if(C&&b(w,C),S)for(let q=0;q<S.length;q++)b(w,S[q]);if(H){let q=H.subTree;if(R===q||Mp(q.type)&&(q.ssContent===R||q.ssFallback===R)){const Y=H.vnode;E(w,Y,Y.scopeId,Y.slotScopeIds,H.parent)}}},g=(w,R,C,S,H,q,Y,K,D=0)=>{for(let U=D;U<w.length;U++){const ie=w[U]=K?In(w[U]):an(w[U]);x(null,ie,R,C,S,H,q,Y,K)}},_=(w,R,C,S,H,q,Y)=>{const K=R.el=w.el;let{patchFlag:D,dynamicChildren:U,dirs:ie}=R;D|=w.patchFlag&16;const J=w.props||Ve,ne=R.props||Ve;let ae;if(C&&Er(C,!1),(ae=ne.onVnodeBeforeUpdate)&&rn(ae,C,R,w),ie&&vr(R,w,C,"beforeUpdate"),C&&Er(C,!0),U&&(!w.dynamicChildren||w.dynamicChildren.length!==U.length)&&(D=0,Y=!1,U=null),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&d(K,""),U?I(w.dynamicChildren,U,K,C,S,gl(R,H),q):Y||F(w,R,K,null,C,S,gl(R,H),q,!1),D>0){if(D&16)A(K,J,ne,C,H);else if(D&2&&J.class!==ne.class&&i(K,"class",null,ne.class,H),D&4&&i(K,"style",J.style,ne.style,H),D&8){const oe=R.dynamicProps;for(let pe=0;pe<oe.length;pe++){const we=oe[pe],$e=J[we],Ye=ne[we];(Ye!==$e||we==="value")&&i(K,we,$e,Ye,H,C)}}D&1&&w.children!==R.children&&d(K,R.children)}else!Y&&U==null&&A(K,J,ne,C,H);((ae=ne.onVnodeUpdated)||ie)&&At(()=>{ae&&rn(ae,C,R,w),ie&&vr(R,w,C,"updated")},S)},I=(w,R,C,S,H,q,Y)=>{for(let K=0;K<R.length;K++){const D=w[K],U=R[K],ie=D.el&&(D.type===De||!Rr(D,U)||D.shapeFlag&198)?p(D.el):C;x(D,U,ie,null,S,H,q,Y,!0)}},A=(w,R,C,S,H)=>{if(R!==C){if(R!==Ve)for(const q in R)!ri(q)&&!(q in C)&&i(w,q,R[q],null,H,S);for(const q in C){if(ri(q))continue;const Y=C[q],K=R[q];Y!==K&&q!=="value"&&i(w,q,K,Y,H,S)}"value"in C&&i(w,"value",R.value,C.value,H)}},T=(w,R,C,S,H,q,Y,K,D)=>{const U=R.el=w?w.el:l(""),ie=R.anchor=w?w.anchor:l("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ae}=R;ae&&(K=K?K.concat(ae):ae),w==null?(r(U,C,S),r(ie,C,S),g(R.children||[],C,ie,H,q,Y,K,D)):J>0&&J&64&&ne&&w.dynamicChildren&&w.dynamicChildren.length===ne.length?(I(w.dynamicChildren,ne,C,H,q,Y,K),(R.key!=null||H&&R===H.subTree)&&Bc(w,R,!0)):F(w,R,C,ie,H,q,Y,K,D)},v=(w,R,C,S,H,q,Y,K,D)=>{R.slotScopeIds=K,w==null?R.shapeFlag&512?H.ctx.activate(R,C,S,Y,D):_e(R,C,S,H,q,Y,D):Qe(w,R,D)},_e=(w,R,C,S,H,q,Y)=>{const K=w.component=yv(w,S,H);if(ya(w)&&(K.ctx.renderer=Bt),vv(K,!1,Y),K.asyncDep){if(H&&H.registerDep(K,Me,Y),!w.el){const D=K.subTree=xe(_t);L(null,D,R,C),w.placeholder=D.el}}else Me(K,w,R,C,H,q,Y)},Qe=(w,R,C)=>{const S=R.component=w.component;if(Zy(w,R,C))if(S.asyncDep&&!S.asyncResolved){ce(S,R,C);return}else S.next=R,S.update();else R.el=w.el,S.vnode=R},Me=(w,R,C,S,H,q,Y)=>{const K=()=>{if(w.isMounted){let{next:J,bu:ne,u:ae,parent:oe,vnode:pe}=w;{const ut=Op(w);if(ut){J&&(J.el=pe.el,ce(w,J,Y)),ut.asyncDep.then(()=>{At(()=>{w.isUnmounted||U()},H)});return}}let we=J,$e;Er(w,!1),J?(J.el=pe.el,ce(w,J,Y)):J=pe,ne&&Ao(ne),($e=J.props&&J.props.onVnodeBeforeUpdate)&&rn($e,oe,J,pe),Er(w,!0);const Ye=$h(w),$t=w.subTree;w.subTree=Ye,x($t,Ye,p($t.el),Ct($t),w,H,q),J.el=Ye.el,we===null&&ev(w,Ye.el),ae&&At(ae,H),($e=J.props&&J.props.onVnodeUpdated)&&At(()=>rn($e,oe,J,pe),H)}else{let J;const{el:ne,props:ae}=R,{bm:oe,m:pe,parent:we,root:$e,type:Ye}=w,$t=is(R);Er(w,!1),oe&&Ao(oe),!$t&&(J=ae&&ae.onVnodeBeforeMount)&&rn(J,we,R),Er(w,!0);{$e.ce&&$e.ce._hasShadowRoot()&&$e.ce._injectChildStyle(Ye,w.parent?w.parent.type:void 0);const ut=w.subTree=$h(w);x(null,ut,C,S,w,H,q),R.el=ut.el}if(pe&&At(pe,H),!$t&&(J=ae&&ae.onVnodeMounted)){const ut=R;At(()=>rn(J,we,ut),H)}(R.shapeFlag&256||we&&is(we.vnode)&&we.vnode.shapeFlag&256)&&w.a&&At(w.a,H),w.isMounted=!0,R=C=S=null}};w.scope.on();const D=w.effect=new jf(K);w.scope.off();const U=w.update=D.run.bind(D),ie=w.job=D.runIfDirty.bind(D);ie.i=w,ie.id=w.uid,D.scheduler=()=>Lc(ie),Er(w,!0),U()},ce=(w,R,C)=>{R.component=w;const S=w.vnode.props;w.vnode=R,w.next=null,nv(w,R.props,S,C),ov(w,R.children,C),pn(),Vh(w),mn()},F=(w,R,C,S,H,q,Y,K,D=!1)=>{const U=w&&w.children,ie=w?w.shapeFlag:0,J=R.children,{patchFlag:ne,shapeFlag:ae}=R;if(ne>0){if(ne&128){Ze(U,J,C,S,H,q,Y,K,D);return}else if(ne&256){Z(U,J,C,S,H,q,Y,K,D);return}}ae&8?(ie&16&&Ut(U,H,q),J!==U&&d(C,J)):ie&16?ae&16?Ze(U,J,C,S,H,q,Y,K,D):Ut(U,H,q,!0):(ie&8&&d(C,""),ae&16&&g(J,C,S,H,q,Y,K,D))},Z=(w,R,C,S,H,q,Y,K,D)=>{w=w||ns,R=R||ns;const U=w.length,ie=R.length,J=Math.min(U,ie);let ne;for(ne=0;ne<J;ne++){const ae=R[ne]=D?In(R[ne]):an(R[ne]);x(w[ne],ae,C,null,H,q,Y,K,D)}U>ie?Ut(w,H,q,!0,!1,J):g(R,C,S,H,q,Y,K,D,J)},Ze=(w,R,C,S,H,q,Y,K,D)=>{let U=0;const ie=R.length;let J=w.length-1,ne=ie-1;for(;U<=J&&U<=ne;){const ae=w[U],oe=R[U]=D?In(R[U]):an(R[U]);if(Rr(ae,oe))x(ae,oe,C,null,H,q,Y,K,D);else break;U++}for(;U<=J&&U<=ne;){const ae=w[J],oe=R[ne]=D?In(R[ne]):an(R[ne]);if(Rr(ae,oe))x(ae,oe,C,null,H,q,Y,K,D);else break;J--,ne--}if(U>J){if(U<=ne){const ae=ne+1,oe=ae<ie?R[ae].el:S;for(;U<=ne;)x(null,R[U]=D?In(R[U]):an(R[U]),C,oe,H,q,Y,K,D),U++}}else if(U>ne)for(;U<=J;)Pe(w[U],H,q,!0),U++;else{const ae=U,oe=U,pe=new Map;for(U=oe;U<=ne;U++){const rt=R[U]=D?In(R[U]):an(R[U]);rt.key!=null&&pe.set(rt.key,U)}let we,$e=0;const Ye=ne-oe+1;let $t=!1,ut=0;const Bn=new Array(Ye);for(U=0;U<Ye;U++)Bn[U]=0;for(U=ae;U<=J;U++){const rt=w[U];if($e>=Ye){Pe(rt,H,q,!0);continue}let jt;if(rt.key!=null)jt=pe.get(rt.key);else for(we=oe;we<=ne;we++)if(Bn[we-oe]===0&&Rr(rt,R[we])){jt=we;break}jt===void 0?Pe(rt,H,q,!0):(Bn[jt-oe]=U+1,jt>=ut?ut=jt:$t=!0,x(rt,R[jt],C,null,H,q,Y,K,D),$e++)}const Ss=$t?uv(Bn):ns;for(we=Ss.length-1,U=Ye-1;U>=0;U--){const rt=oe+U,jt=R[rt],Yi=R[rt+1],qr=rt+1<ie?Yi.el||xp(Yi):S;Bn[U]===0?x(null,jt,C,qr,H,q,Y,K,D):$t&&(we<0||U!==Ss[we]?Gt(jt,C,qr,2):we--)}}},Gt=(w,R,C,S,H=null)=>{const{el:q,type:Y,transition:K,children:D,shapeFlag:U}=w;if(U&6){Gt(w.component.subTree,R,C,S);return}if(U&128){w.suspense.move(R,C,S);return}if(U&64){Y.move(w,R,C,Bt);return}if(Y===De){r(q,R,C);for(let J=0;J<D.length;J++)Gt(D[J],R,C,S);r(w.anchor,R,C);return}if(Y===_l){j(w,R,C);return}if(S!==2&&U&1&&K)if(S===0)K.persisted&&!q[Wt]?r(q,R,C):(K.beforeEnter(q),r(q,R,C),At(()=>K.enter(q),H));else{const{leave:J,delayLeave:ne,afterLeave:ae}=K,oe=()=>{w.ctx.isUnmounted?s(q):r(q,R,C)},pe=()=>{const we=q._isLeaving||!!q[Wt];q._isLeaving&&q[Wt](!0),K.persisted&&!we?oe():J(q,()=>{oe(),ae&&ae()})};ne?ne(q,oe,pe):pe()}else r(q,R,C)},Pe=(w,R,C,S=!1,H=!1)=>{const{type:q,props:Y,ref:K,children:D,dynamicChildren:U,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:ae,memo:oe}=w;if(J===-2&&(H=!1),K!=null&&(pn(),oi(K,null,C,w,!0),mn()),ae!=null&&(R.renderCache[ae]=void 0),ie&256){R.ctx.deactivate(w);return}const pe=ie&1&&ne,we=!is(w);let $e;if(we&&($e=Y&&Y.onVnodeBeforeUnmount)&&rn($e,R,w),ie&6)Ft(w.component,C,S);else{if(ie&128){w.suspense.unmount(C,S);return}pe&&vr(w,null,R,"beforeUnmount"),ie&64?w.type.remove(w,R,C,Bt,S):U&&!U.hasOnce&&(q!==De||J>0&&J&64)?Ut(U,R,C,!1,!0):(q===De&&J&384||!H&&ie&16)&&Ut(D,R,C),S&&Ue(w)}const Ye=oe!=null&&ae==null;(we&&($e=Y&&Y.onVnodeUnmounted)||pe||Ye)&&At(()=>{$e&&rn($e,R,w),pe&&vr(w,null,R,"unmounted"),Ye&&(w.el=null)},C)},Ue=w=>{const{type:R,el:C,anchor:S,transition:H}=w;if(R===De){Dt(C,S);return}if(R===_l){B(w);return}const q=()=>{s(C),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(w.shapeFlag&1&&H&&!H.persisted){const{leave:Y,delayLeave:K}=H,D=()=>Y(C,q);K?K(w.el,q,D):D()}else q()},Dt=(w,R)=>{let C;for(;w!==R;)C=y(w),s(w),w=C;s(R)},Ft=(w,R,C)=>{const{bum:S,scope:H,job:q,subTree:Y,um:K,m:D,a:U}=w;Hh(D),Hh(U),S&&Ao(S),H.stop(),q&&(q.flags|=8,Pe(Y,w,R,C)),K&&At(K,R),At(()=>{w.isUnmounted=!0},R)},Ut=(w,R,C,S=!1,H=!1,q=0)=>{for(let Y=q;Y<w.length;Y++)Pe(w[Y],R,C,S,H)},Ct=w=>{if(w.shapeFlag&6)return Ct(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=y(w.anchor||w.el),C=R&&R[up];return C?y(C):R};let fr=!1;const jr=(w,R,C)=>{let S;w==null?R._vnode&&(Pe(R._vnode,null,null,!0),S=R._vnode.component):x(R._vnode||null,w,R,null,null,null,C),R._vnode=w,fr||(fr=!0,Vh(S),ip(),fr=!1)},Bt={p:x,um:Pe,m:Gt,r:Ue,mt:_e,mc:g,pc:F,pbc:I,n:Ct,o:t};return{render:jr,hydrate:void 0,createApp:zy(jr)}}function gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function cv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bc(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=In(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Bc(o,l)),l.type===Ia&&(l.patchFlag===-1&&(l=s[i]=In(l)),l.el=o.el),l.type===_t&&!l.el&&(l.el=o.el)}}function uv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function Hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function xp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?xp(e.subTree):null}const Mp=t=>t.__isSuspense;function hv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):yy(t)}const De=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),li=[];let xt=null;function ee(t=!1){li.push(xt=t?null:[])}function dv(){li.pop(),xt=li[li.length-1]||null}let yi=1;function qo(t,e=!1){yi+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function Lp(t){return t.dynamicChildren=yi>0?xt||ns:null,dv(),yi>0&&xt&&xt.push(t),t}function re(t,e,n,r,s,i){return Lp(k(t,e,n,r,s,i,!0))}function Xt(t,e,n,r,s){return Lp(xe(t,e,n,r,s,!0))}function vi(t){return t?t.__v_isVNode===!0:!1}function Rr(t,e){return t.type===e.type&&t.key===e.key}const Fp=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||vt(t)||me(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fp(e),ref:e&&Co(e),scopeId:ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return l?(Ho(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),yi>0&&!o&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const xe=fv;function fv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fy)&&(t=_t),vi(t)){const l=or(t,e,!0);return n&&Ho(l,n),yi>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(t)]=l:xt.push(l)),l.patchFlag=-2,l}if(Iv(t)&&(t=t.__vccOpts),e){e=pv(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=Ke(l)),Se(c)&&(Mc(c)&&!le(c)&&(c=et({},c)),e.style=pa(c))}const o=Be(t)?1:Mp(t)?128:hp(t)?64:Se(t)?4:me(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function pv(t){return t?Mc(t)||Cp(t)?et({},t):t:null}function or(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?mv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Fp(h),ref:e&&e.ref?n&&i?le(i)?i.concat(Co(e)):[i,Co(e)]:Co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&_i(d,c.clone(d)),d}function Ht(t=" ",e=0){return xe(Ia,null,t,e)}function Oe(t="",e=!1){return e?(ee(),Xt(_t,null,t)):xe(_t,null,t)}function an(t){return t==null||typeof t=="boolean"?xe(_t):le(t)?xe(De,null,t.slice()):vi(t)?In(t):xe(Ia,null,String(t))}function In(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:or(t)}function Ho(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ho(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cp(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(me(e)){if(r&65){Ho(t,{default:e});return}e={default:e,_ctx:yt},n=32}else e=String(e),r&64?(n=16,e=[Ht(e)]):n=8;t.children=e,t.shapeFlag|=n}function mv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ke([e.class,r.class]));else if(s==="style")e.style=pa([e.style,r.style]);else if(ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ha(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){zt(t,e,7,[n,r])}const gv=Ip();let _v=0;function yv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gv,i={uid:_v++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(r,s),emitsOptions:Ap(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qy.bind(null,i),t.ce&&t.ce(i),i}let St=null;const Up=()=>St||yt;let Wo,Jl;{const t=fa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wo=e("__VUE_INSTANCE_SETTERS__",n=>St=n),Jl=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const Oi=t=>{const e=St;return Wo(t),t.scope.on(),()=>{t.scope.off(),Wo(e)}},Wh=()=>{St&&St.scope.off(),Wo(null)};function Bp(t){return t.vnode.shapeFlag&4}let Ei=!1;function vv(t,e=!1,n=!1){e&&Jl(e);const{props:r,children:s}=t.vnode,i=Bp(t);tv(t,r,i,e),iv(t,s,n||e);const o=i?Ev(t,e):void 0;return e&&Jl(!1),o}function Ev(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,By);const{setup:r}=n;if(r){pn();const s=t.setupContext=r.length>1?Tv(t):null,i=Oi(t),o=Ni(r,t,0,[t.props,s]),l=Of(o);if(mn(),i(),(l||t.sp)&&!is(t)&&_p(t),l){if(o.then(Wh,Wh),e)return o.then(c=>{Kh(t,c)}).catch(c=>{ga(c,t,0)});t.asyncDep=o}else Kh(t,o)}else $p(t)}function Kh(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=np(e)),$p(t)}function $p(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Oi(t);pn();try{$y(t)}finally{mn(),s()}}}const wv={get(t,e){return mt(t,"get",""),t[e]}};function Tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wv),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(np(ly(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}})):t.proxy}function Iv(t){return me(t)&&"__vccOpts"in t}const es=(t,e)=>fy(t,e,Ei);function Av(t,e,n){try{qo(-1);const r=arguments.length;return r===2?Se(e)&&!le(e)?vi(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vi(n)&&(n=[n]),xe(t,e,n))}finally{qo(1)}}const bv="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{Xl=zh.createPolicy("vue",{createHTML:t=>t})}catch{}const jp=Xl?t=>Xl.createHTML(t):t=>t,Rv="http://www.w3.org/2000/svg",Sv="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,Gh=Tn&&Tn.createElement("template"),Cv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS(Rv,t):e==="mathml"?Tn.createElementNS(Sv,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gh.innerHTML=jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Gh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hn="transition",js="animation",wi=Symbol("_vtc"),qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pv=et({},dp,qp),kv=t=>(t.displayName="Transition",t.props=Pv,t),Vv=kv((t,{slots:e})=>Av(Sy,Dv(t),e)),wr=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qh=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function Dv(t){const e={};for(const T in t)T in qp||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=t,V=Nv(s),x=V&&V[0],M=V&&V[1],{onBeforeEnter:L,onEnter:N,onEnterCancelled:j,onLeave:B,onLeaveCancelled:G,onBeforeAppear:z=L,onAppear:E=N,onAppearCancelled:g=j}=e,_=(T,v,_e,Qe)=>{T._enterCancelled=Qe,Tr(T,v?d:l),Tr(T,v?h:o),_e&&_e()},I=(T,v)=>{T._isLeaving=!1,Tr(T,p),Tr(T,b),Tr(T,y),v&&v()},A=T=>(v,_e)=>{const Qe=T?E:N,Me=()=>_(v,T,_e);wr(Qe,[v,Me]),Yh(()=>{Tr(v,T?c:i),En(v,T?d:l),Qh(Qe)||Jh(v,r,x,Me)})};return et(e,{onBeforeEnter(T){wr(L,[T]),En(T,i),En(T,o)},onBeforeAppear(T){wr(z,[T]),En(T,c),En(T,h)},onEnter:A(!1),onAppear:A(!0),onLeave(T,v){T._isLeaving=!0;const _e=()=>I(T,v);En(T,p),T._enterCancelled?(En(T,y),ed(T)):(ed(T),En(T,y)),Yh(()=>{T._isLeaving&&(Tr(T,p),En(T,b),Qh(B)||Jh(T,r,M,_e))}),wr(B,[T,_e])},onEnterCancelled(T){_(T,!1,void 0,!0),wr(j,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),wr(g,[T])},onLeaveCancelled(T){I(T),wr(G,[T])}})}function Nv(t){if(t==null)return null;if(Se(t))return[yl(t.enter),yl(t.leave)];{const e=yl(t);return[e,e]}}function yl(t){return O_(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[wi]||(t[wi]=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[wi];n&&(n.delete(e),n.size||(t[wi]=void 0))}function Yh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ov=0;function Jh(t,e,n,r){const s=t._endId=++Ov,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=xv(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,y),i()},y=b=>{b.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,y)}function xv(t,e){const n=window.getComputedStyle(t),r=V=>(n[V]||"").split(", "),s=r(`${Hn}Delay`),i=r(`${Hn}Duration`),o=Xh(s,i),l=r(`${js}Delay`),c=r(`${js}Duration`),h=Xh(l,c);let d=null,p=0,y=0;e===Hn?o>0&&(d=Hn,p=o,y=i.length):e===js?h>0&&(d=js,p=h,y=c.length):(p=Math.max(o,h),d=p>0?o>h?Hn:js:null,y=d?d===Hn?i.length:c.length:0);const b=d===Hn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Hn}Property`).toString());return{type:d,timeout:p,propCount:y,hasTransform:b}}function Xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zh(n)+Zh(t[r])))}function Zh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ed(t){return(t?t.ownerDocument:document).body.offsetHeight}function Mv(t,e,n){const r=t[wi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ko=Symbol("_vod"),Hp=Symbol("_vsh"),vl={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ko]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),qs(t,!0),r.enter(t)):r.leave(t,()=>{qs(t,!1)}):qs(t,e))},beforeUnmount(t,{value:e}){qs(t,e)}};function qs(t,e){t.style.display=e?t[Ko]:"none",t[Hp]=!e}const Lv=Symbol(""),Fv=/(?:^|;)\s*display\s*:/;function Uv(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ys(r,l,"")}else for(const o in e)n[o]==null&&Ys(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?$v(t,o,!Be(e)&&e?e[o]:void 0,l)||Ys(r,o,l):Ys(r,o,"")}}else if(s){if(e!==n){const o=r[Lv];o&&(n+=";"+o),r.cssText=n,i=Fv.test(n)}}else e&&t.removeAttribute("style");Ko in t&&(t[Ko]=i?r.display:"",t[Hp]&&(r.display="none"))}const td=/\s*!important$/;function Ys(t,e,n){if(le(n))n.forEach(r=>Ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bv(t,e);td.test(n)?t.setProperty(ur(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],El={};function Bv(t,e){const n=El[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return El[e]=r;r=Lf(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return El[e]=i}return e}function $v(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Be(r)&&n===r}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=B_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!Uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yr(t,e,n,r){t.addEventListener(e,n,r)}function jv(t,e,n,r){t.removeEventListener(e,n,r)}const od=Symbol("_vei");function qv(t,e,n,r,s=null){const i=t[od]||(t[od]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Kv(e);if(r){const h=i[e]=Qv(r,s);Yr(t,l,h,c)}else o&&(jv(t,l,o,c),i[e]=void 0)}}const Hv=/(Once|Passive|Capture)$/,Wv=/^on:?(?:Once|Passive|Capture)$/;function Kv(t){let e,n;for(;(n=t.match(Hv))&&!Wv.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let wl=0;const zv=Promise.resolve(),Gv=()=>wl||(zv.then(()=>wl=0),wl=Date.now());function Qv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(le(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const h=o[c];h&&zt(h,e,5,l)}}else zt(s,e,5,[r])};return n.value=t,n.attached=Gv(),n}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Mv(t,r,o):e==="style"?Uv(t,n,r):ua(e)?ha(e)||qv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jv(t,e,r,o))?(id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):t._isVueCE&&(Xv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Be(r)))?id(t,Yt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function Jv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Be(n)?!1:e in t}function Xv(t,e){const n=t._def.props;if(!n)return!1;const r=Yt(e);return Array.isArray(n)?n.some(s=>Yt(s)===r):Object.keys(n).some(s=>Yt(s)===r)}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Ao(e,n):e};function Zv(t){t.target.composing=!0}function cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tl=Symbol("_assign");function ud(t,e,n){return e&&(t=t.trim()),n&&(t=Sc(t)),t}const bt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Tl]=ld(s);const i=r||s.props&&s.props.type==="number";Yr(t,e?"change":"input",o=>{o.target.composing||t[Tl](ud(t.value,n,i))}),(n||i)&&Yr(t,"change",()=>{t.value=ud(t.value,n,i)}),e||(Yr(t,"compositionstart",Zv),Yr(t,"compositionend",cd),Yr(t,"change",cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Tl]=ld(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Sc(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},eE=["ctrl","shift","alt","meta"],tE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eE.some(n=>t[`${n}Key`]&&!e.includes(n))},Qn=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=tE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},nE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Il=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ur(s.key);if(e.some(o=>o===i||nE[o]===i))return t(s)})},rE=et({patchProp:Yv},Cv);let hd;function sE(){return hd||(hd=av(rE))}const iE=(...t)=>{const e=sE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=aE(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,oE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function oE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function aE(t){return Be(t)?document.querySelector(t):t}var dd={};/**
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
 */const Wp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,b=h&63;c||(b=64,o||(y=64)),r.push(n[d],n[p],n[y],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new cE;const y=i<<2|l>>4;if(r.push(y),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(t){const e=Wp(t);return Kp.encodeByteArray(e,!0)},zo=function(t){return uE(t).replace(/\./g,"")},zp=function(t){try{return Kp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dE=()=>hE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zp(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return dE()||fE()||pE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gp=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mE=t=>{const e=Gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qp=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},Yp=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function vE(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IE(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AE(){return!vE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function RE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const SE="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SE,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function CE(t,e){return t.replace(PE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PE=/\{\$([^}]+)}/g;function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fd(i)&&fd(o)){if(!Go(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VE(t,e){const n=new DE(t,e);return n.subscribe.bind(n)}class DE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Al),s.error===void 0&&(s.error=Al),s.complete===void 0&&(s.complete=Al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Al(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ME(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xE(t){return t===Ar?void 0:t}function ME(t){return t.instantiationMode==="EAGER"}/**
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
 */class LE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const FE={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},UE=ve.INFO,BE={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},$E=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=BE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=UE,this._logHandler=$E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const jE=(t,e)=>e.some(n=>t instanceof n);let pd,md;function qE(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HE(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jp=new WeakMap,Zl=new WeakMap,Xp=new WeakMap,bl=new WeakMap,jc=new WeakMap;function WE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jp.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function KE(t){if(Zl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zl.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zE(t){ec=t(ec)}function GE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),tr(r)}:HE().includes(t)?function(...e){return t.apply(Rl(this),e),tr(Jp.get(this))}:function(...e){return tr(t.apply(Rl(this),e))}}function QE(t){return typeof t=="function"?GE(t):(t instanceof IDBTransaction&&KE(t),jE(t,qE())?new Proxy(t,ec):t)}function tr(t){if(t instanceof IDBRequest)return WE(t);if(bl.has(t))return bl.get(t);const e=QE(t);return e!==t&&(bl.set(t,e),jc.set(e,t)),e}const Rl=t=>jc.get(t);function YE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tr(o.result),c.oldVersion,c.newVersion,tr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const JE=["get","getKey","getAll","getAllKeys","count"],XE=["put","add","delete","clear"],Sl=new Map;function gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=XE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JE.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Sl.set(e,i),i}zE(t=>({...t,get:(e,n,r)=>gd(e,n)||t.get(e,n,r),has:(e,n)=>!!gd(e,n)||t.has(e,n)}));/**
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
 */class ZE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ew(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ew(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",_d="0.10.13";/**
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
 */const Dn=new $c("@firebase/app"),tw="@firebase/app-compat",nw="@firebase/analytics-compat",rw="@firebase/analytics",sw="@firebase/app-check-compat",iw="@firebase/app-check",ow="@firebase/auth",aw="@firebase/auth-compat",lw="@firebase/database",cw="@firebase/data-connect",uw="@firebase/database-compat",hw="@firebase/functions",dw="@firebase/functions-compat",fw="@firebase/installations",pw="@firebase/installations-compat",mw="@firebase/messaging",gw="@firebase/messaging-compat",_w="@firebase/performance",yw="@firebase/performance-compat",vw="@firebase/remote-config",Ew="@firebase/remote-config-compat",ww="@firebase/storage",Tw="@firebase/storage-compat",Iw="@firebase/firestore",Aw="@firebase/vertexai-preview",bw="@firebase/firestore-compat",Rw="firebase",Sw="10.14.1";/**
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
 */const nc="[DEFAULT]",Cw={[tc]:"fire-core",[tw]:"fire-core-compat",[rw]:"fire-analytics",[nw]:"fire-analytics-compat",[iw]:"fire-app-check",[sw]:"fire-app-check-compat",[ow]:"fire-auth",[aw]:"fire-auth-compat",[lw]:"fire-rtdb",[cw]:"fire-data-connect",[uw]:"fire-rtdb-compat",[hw]:"fire-fn",[dw]:"fire-fn-compat",[fw]:"fire-iid",[pw]:"fire-iid-compat",[mw]:"fire-fcm",[gw]:"fire-fcm-compat",[_w]:"fire-perf",[yw]:"fire-perf-compat",[vw]:"fire-rc",[Ew]:"fire-rc-compat",[ww]:"fire-gcs",[Tw]:"fire-gcs-compat",[Iw]:"fire-fst",[bw]:"fire-fst-compat",[Aw]:"fire-vertex","fire-js":"fire-js",[Rw]:"fire-js-all"};/**
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
 */const Qo=new Map,Pw=new Map,rc=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(rc.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of Qo.values())yd(n,t);for(const n of Pw.values())yd(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
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
 */const kw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new xi("app","Firebase",kw);/**
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
 */class Vw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=Sw;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=Qp()),!n)throw nr.create("no-options");const i=Qo.get(s);if(i){if(Go(n,i.options)&&Go(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const o=new LE(s);for(const c of rc.values())o.addComponent(c);const l=new Vw(n,r,o);return Qo.set(s,l),l}function em(t=nc){const e=Qo.get(t);if(!e&&t===nc&&Qp())return Zp();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let s=(r=Cw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}ds(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dw="firebase-heartbeat-database",Nw=1,Ti="firebase-heartbeat-store";let Cl=null;function tm(){return Cl||(Cl=YE(Dw,Nw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Cl}async function Ow(t){try{const n=(await tm()).transaction(Ti),r=await n.objectStore(Ti).get(nm(t));return await n.done,r}catch(e){if(e instanceof Fn)Dn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function vd(t,e){try{const r=(await tm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,nm(t)),await r.done}catch(n){if(n instanceof Fn)Dn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function nm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xw=1024,Mw=30*24*60*60*1e3;class Lw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Mw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=Fw(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Ed(){return new Date().toISOString().substring(0,10)}function Fw(t,e=xw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?RE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ow(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bw(t){ds(new Dr("platform-logger",e=>new ZE(e),"PRIVATE")),ds(new Dr("heartbeat",e=>new Lw(e),"PRIVATE")),rr(tc,_d,t),rr(tc,_d,"esm2017"),rr("fire-js","")}Bw("");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,rm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(I,A,T){for(var v=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)v[_e-2]=arguments[_e];return g.prototype[A].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);var I=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)I[A]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(A=0;16>A;++A)I[A]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],A=E.g[2];var T=E.g[3],v=g+(T^_&(A^T))+I[0]+3614090360&4294967295;g=_+(v<<7&4294967295|v>>>25),v=T+(A^g&(_^A))+I[1]+3905402710&4294967295,T=g+(v<<12&4294967295|v>>>20),v=A+(_^T&(g^_))+I[2]+606105819&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(g^A&(T^g))+I[3]+3250441966&4294967295,_=A+(v<<22&4294967295|v>>>10),v=g+(T^_&(A^T))+I[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(A^g&(_^A))+I[5]+1200080426&4294967295,T=g+(v<<12&4294967295|v>>>20),v=A+(_^T&(g^_))+I[6]+2821735955&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(g^A&(T^g))+I[7]+4249261313&4294967295,_=A+(v<<22&4294967295|v>>>10),v=g+(T^_&(A^T))+I[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(A^g&(_^A))+I[9]+2336552879&4294967295,T=g+(v<<12&4294967295|v>>>20),v=A+(_^T&(g^_))+I[10]+4294925233&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(g^A&(T^g))+I[11]+2304563134&4294967295,_=A+(v<<22&4294967295|v>>>10),v=g+(T^_&(A^T))+I[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=T+(A^g&(_^A))+I[13]+4254626195&4294967295,T=g+(v<<12&4294967295|v>>>20),v=A+(_^T&(g^_))+I[14]+2792965006&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(g^A&(T^g))+I[15]+1236535329&4294967295,_=A+(v<<22&4294967295|v>>>10),v=g+(A^T&(_^A))+I[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(g^_))+I[6]+3225465664&4294967295,T=g+(v<<9&4294967295|v>>>23),v=A+(g^_&(T^g))+I[11]+643717713&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(A^T))+I[0]+3921069994&4294967295,_=A+(v<<20&4294967295|v>>>12),v=g+(A^T&(_^A))+I[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(g^_))+I[10]+38016083&4294967295,T=g+(v<<9&4294967295|v>>>23),v=A+(g^_&(T^g))+I[15]+3634488961&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(A^T))+I[4]+3889429448&4294967295,_=A+(v<<20&4294967295|v>>>12),v=g+(A^T&(_^A))+I[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(g^_))+I[14]+3275163606&4294967295,T=g+(v<<9&4294967295|v>>>23),v=A+(g^_&(T^g))+I[3]+4107603335&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(A^T))+I[8]+1163531501&4294967295,_=A+(v<<20&4294967295|v>>>12),v=g+(A^T&(_^A))+I[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(g^_))+I[2]+4243563512&4294967295,T=g+(v<<9&4294967295|v>>>23),v=A+(g^_&(T^g))+I[7]+1735328473&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^g&(A^T))+I[12]+2368359562&4294967295,_=A+(v<<20&4294967295|v>>>12),v=g+(_^A^T)+I[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^A)+I[8]+2272392833&4294967295,T=g+(v<<11&4294967295|v>>>21),v=A+(T^g^_)+I[11]+1839030562&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^g)+I[14]+4259657740&4294967295,_=A+(v<<23&4294967295|v>>>9),v=g+(_^A^T)+I[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^A)+I[4]+1272893353&4294967295,T=g+(v<<11&4294967295|v>>>21),v=A+(T^g^_)+I[7]+4139469664&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^g)+I[10]+3200236656&4294967295,_=A+(v<<23&4294967295|v>>>9),v=g+(_^A^T)+I[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^A)+I[0]+3936430074&4294967295,T=g+(v<<11&4294967295|v>>>21),v=A+(T^g^_)+I[3]+3572445317&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^g)+I[6]+76029189&4294967295,_=A+(v<<23&4294967295|v>>>9),v=g+(_^A^T)+I[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=T+(g^_^A)+I[12]+3873151461&4294967295,T=g+(v<<11&4294967295|v>>>21),v=A+(T^g^_)+I[15]+530742520&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^g)+I[2]+3299628645&4294967295,_=A+(v<<23&4294967295|v>>>9),v=g+(A^(_|~T))+I[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~A))+I[7]+1126891415&4294967295,T=g+(v<<10&4294967295|v>>>22),v=A+(g^(T|~_))+I[14]+2878612391&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~g))+I[5]+4237533241&4294967295,_=A+(v<<21&4294967295|v>>>11),v=g+(A^(_|~T))+I[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~A))+I[3]+2399980690&4294967295,T=g+(v<<10&4294967295|v>>>22),v=A+(g^(T|~_))+I[10]+4293915773&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~g))+I[1]+2240044497&4294967295,_=A+(v<<21&4294967295|v>>>11),v=g+(A^(_|~T))+I[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~A))+I[15]+4264355552&4294967295,T=g+(v<<10&4294967295|v>>>22),v=A+(g^(T|~_))+I[6]+2734768916&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~g))+I[13]+1309151649&4294967295,_=A+(v<<21&4294967295|v>>>11),v=g+(A^(_|~T))+I[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=T+(_^(g|~A))+I[11]+3174756917&4294967295,T=g+(v<<10&4294967295|v>>>22),v=A+(g^(T|~_))+I[2]+718787259&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,I=this.B,A=this.h,T=0;T<g;){if(A==0)for(;T<=_;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<g;)if(I[A++]=E.charCodeAt(T++),A==this.blockSize){s(this,I),A=0;break}}else for(;T<g;)if(I[A++]=E[T++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var I=0;32>I;I+=8)E[_++]=this.g[g]>>>I&255;return E};function i(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function o(E,g){this.h=g;for(var _=[],I=!0,A=E.length-1;0<=A;A--){var T=E[A]|0;I&&T==g||(_[A]=T,I=!1)}this.g=_}var l={};function c(E){return-128<=E&&128>E?i(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return M(h(-E));for(var g=[],_=1,I=0;E>=_;I++)g[I]=E/_|0,_*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return M(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),I=p,A=0;A<E.length;A+=8){var T=Math.min(8,E.length-A),v=parseInt(E.substring(A,A+T),g);8>T?(T=h(Math.pow(g,T)),I=I.j(T).add(h(v))):(I=I.j(_),I=I.add(h(v)))}return I}var p=c(0),y=c(1),b=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-M(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var I=this.i(_);E+=(0<=I?I:4294967296+I)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(x(this))return"-"+M(this).toString(E);for(var g=h(Math.pow(E,6)),_=this,I="";;){var A=B(_,g).g;_=L(_,A.j(g));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,V(_))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=L(this,E),x(E)?-1:V(E)?0:1};function M(E){for(var g=E.g.length,_=[],I=0;I<g;I++)_[I]=~E.g[I];return new o(_,~E.h).add(y)}t.abs=function(){return x(this)?M(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0,A=0;A<=g;A++){var T=I+(this.i(A)&65535)+(E.i(A)&65535),v=(T>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=v>>>16,T&=65535,v&=65535,_[A]=v<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function L(E,g){return E.add(M(g))}t.j=function(E){if(V(this)||V(E))return p;if(x(this))return x(E)?M(this).j(M(E)):M(M(this).j(E));if(x(E))return M(this.j(M(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<E.g.length;A++){var T=this.i(I)>>>16,v=this.i(I)&65535,_e=E.i(A)>>>16,Qe=E.i(A)&65535;_[2*I+2*A]+=v*Qe,N(_,2*I+2*A),_[2*I+2*A+1]+=T*Qe,N(_,2*I+2*A+1),_[2*I+2*A+1]+=v*_e,N(_,2*I+2*A+1),_[2*I+2*A+2]+=T*_e,N(_,2*I+2*A+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new o(_,0)};function N(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function j(E,g){this.g=E,this.h=g}function B(E,g){if(V(g))throw Error("division by zero");if(V(E))return new j(p,p);if(x(E))return g=B(M(E),g),new j(M(g.g),M(g.h));if(x(g))return g=B(E,M(g)),new j(M(g.g),g.h);if(30<E.g.length){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,I=g;0>=I.l(E);)_=G(_),I=G(I);var A=z(_,1),T=z(I,1);for(I=z(I,2),_=z(_,2);!V(I);){var v=T.add(I);0>=v.l(E)&&(A=A.add(_),T=v),I=z(I,1),_=z(_,1)}return g=L(E,A.j(g)),new j(A,g)}for(A=p;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=h(_),v=T.j(g);x(v)||0<v.l(E);)_-=I,T=h(_),v=T.j(g);V(T)&&(T=y),A=A.add(T),E=L(E,v)}return new j(A,E)}t.A=function(E){return B(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)&E.i(I);return new o(_,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)|E.i(I);return new o(_,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)^E.i(I);return new o(_,this.h^E.h)};function G(E){for(var g=E.g.length+1,_=[],I=0;I<g;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(_,E.h)}function z(E,g){var _=g>>5;g%=32;for(var I=E.g.length-_,A=[],T=0;T<I;T++)A[T]=0<g?E.i(T+_)>>>g|E.i(T+_+1)<<32-g:E.i(T+_);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Vr=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sm,Zs,im,Po,sc,om,am,lm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _o=="object"&&_o];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var O=f++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function y(a,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function b(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function V(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,O){for(var Q=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)Q[ke-2]=arguments[ke];return u.prototype[P].apply(m,Q)}}function x(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function M(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,O=m.length||0;a.length=P+O;for(let Q=0;Q<O;Q++)a[P+Q]=m[Q]}else a.push(m)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var G=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function z(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function E(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function g(a){const u={};for(const f in a)u[f]=a[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let O=0;O<_.length;O++)f=_[O],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Z;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class _e{constructor(){this.h=this.g=null}add(u,f){const m=Qe.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Qe=new L(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,F=!1,Z=new _e,Ze=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){T(f)}var u=Qe;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}F=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Ft(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(G){e:{try{B(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}V(Ft,Ue);var Ut={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),fr=0;function jr(a,u,f,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++fr,this.da=this.fa=!1}function Bt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pr(a){this.src=a,this.g={},this.h=0}pr.prototype.add=function(a,u,f,m,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var Q=R(a,u,m,P);return-1<Q?(u=a[Q],f||(u.fa=!1)):(u=new jr(u,this.src,O,!!m,P),u.fa=f,a.push(u)),u};function w(a,u){var f=u.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(Bt(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function R(a,u,f,m){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==m)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),S={};function H(a,u,f,m,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)H(a,u[O],f,m,P);return null}return f=ae(f),a&&a[Ct]?a.K(u,f,h(m)?!!m.capture:!1,P):q(a,u,f,!1,m,P)}function q(a,u,f,m,P,O){if(!u)throw Error("Invalid event type");var Q=h(P)?!!P.capture:!!P,ke=J(a);if(ke||(a[C]=ke=new pr(a)),f=ke.add(u,f,m,Q,O),f.proxy)return f;if(m=Y(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Dt||(P=Q),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(U(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return u.call(a.src,a.listener,f)}const u=ie;return a}function K(a,u,f,m,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)K(a,u[O],f,m,P);else m=h(m)?!!m.capture:!!m,f=ae(f),a&&a[Ct]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],f=R(O,f,m,P),-1<f&&(Bt(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=R(u,f,m,P)),(f=-1<a?u[a]:null)&&D(f))}function D(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ct])w(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(U(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(w(f,a),f.h==0&&(f.src=null,u[C]=null)):Bt(a)}}}function U(a){return a in S?S[a]:S[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new Ft(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&D(a),a=f.call(m,u)}return a}function J(a){return a=a[C],a instanceof pr?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function oe(){Pe.call(this),this.i=new pr(this),this.M=this,this.F=null}V(oe,Pe),oe.prototype[Ct]=!0,oe.prototype.removeEventListener=function(a,u,f,m){K(this,a,u,f,m)};function pe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var P=u;u=new Ue(m,a),I(u,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var Q=u.g=f[O];P=we(Q,m,!0,u)&&P}if(Q=u.g=a,P=we(Q,m,!0,u)&&P,P=we(Q,m,!1,u)&&P,f)for(O=0;O<f.length;O++)Q=u.g=f[O],P=we(Q,m,!1,u)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Bt(f[m]);delete a.g[u],a.h--}}this.F=null},oe.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},oe.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function we(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var Q=u[O];if(Q&&!Q.da&&Q.capture==f){var ke=Q.listener,st=Q.ha||Q.src;Q.fa&&w(a.i,Q),P=ke.call(st,m)!==!1&&P}}return P&&!m.defaultPrevented}function $e(a,u,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=$e(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class $t extends Pe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Pe.call(this),this.h=a,this.g={}}V(ut,Pe);var Bn=[];function Ss(a){z(a.g,function(u,f){this.g.hasOwnProperty(f)&&D(u)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Ss(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,jt=l.JSON.parse,Yi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qr(){}qr.prototype.h=null;function Mu(a){return a.h||(a.h=a.i())}function Lu(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ga(){Ue.call(this,"d")}V(Ga,Ue);function Qa(){Ue.call(this,"c")}V(Qa,Ue);var mr={},Fu=null;function Ji(){return Fu=Fu||new oe}mr.La="serverreachability";function Uu(a){Ue.call(this,mr.La,a)}V(Uu,Ue);function Ps(a){const u=Ji();pe(u,new Uu(u))}mr.STAT_EVENT="statevent";function Bu(a,u){Ue.call(this,mr.STAT_EVENT,a),this.stat=u}V(Bu,Ue);function Tt(a){const u=Ji();pe(u,new Bu(u,a))}mr.Ma="timingevent";function $u(a,u){Ue.call(this,mr.Ma,a),this.size=u}V($u,Ue);function ks(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function a_(a,u,f,m,P,O){a.info(function(){if(a.g)if(O)for(var Q="",ke=O.split("&"),st=0;st<ke.length;st++){var Te=ke[st].split("=");if(1<Te.length){var ht=Te[0];Te=Te[1];var dt=ht.split("_");Q=2<=dt.length&&dt[1]=="type"?Q+(ht+"="+Te+"&"):Q+(ht+"=redacted&")}}else Q=null;else Q=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+Q})}function l_(a,u,f,m,P,O,Q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+O+" "+Q})}function Hr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+u_(a,f)+(m?" "+m:"")})}function c_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function u_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var Q=1;Q<P.length;Q++)P[Q]=""}}}}return rt(f)}catch{return u}}var Xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ya;function Zi(){}V(Zi,qr),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Ya=new Zi;function $n(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var Hu={},Ja={};function Xa(a,u,f){a.L=1,a.v=ro(_n(u)),a.m=f,a.P=!0,Wu(a,null)}function Wu(a,u){a.F=Date.now(),eo(a),a.A=_n(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),ih(f.i,"t",m),a.C=0,f=a.j.J,a.h=new qu,a.g=Ih(a.j,f?u:null,!a.m),0<a.O&&(a.M=new $t(y(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Bn[0]=P.toString()),P=Bn);for(var O=0;O<P.length;O++){var Q=H(f,P[O],m||u.handleEvent,!1,u.h||u);if(!Q)break;u.g[Q.key]=Q}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ps(),a_(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const u=this.M;u&&yn(a)==3?u.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const dt=yn(this.g);var u=this.g.Ba();const zr=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||dh(this.g)))){this.J||dt!=4||u==7||(u==8||0>=zr?Ps(3):Ps(2)),Za(this);var f=this.g.Z();this.X=f;t:if(Ku(this)){var m=dh(this.g);a="";var P=m.length,O=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Ds(this);var Q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,l_(this.i,this.u,this.A,this.l,this.R,dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,st=this.g;if((ke=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(ke)){var Te=ke;break t}}Te=null}if(f=Te)Hr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,f);else{this.o=!1,this.s=3,Tt(12),gr(this),Ds(this);break e}}if(this.P){f=!0;let Qt;for(;!this.J&&this.C<Q.length;)if(Qt=h_(this,Q),Qt==Ja){dt==4&&(this.s=4,Tt(14),f=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Hu){this.s=4,Tt(15),Hr(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else Hr(this.i,this.l,Qt,null),el(this,Qt);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||Q.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)Hr(this.i,this.l,Q,"[Invalid Chunked Response]"),gr(this),Ds(this);else if(0<Q.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),ol(ht),ht.M=!0,Tt(11))}}else Hr(this.i,this.l,Q,null),el(this,Q);dt==4&&gr(this),this.o&&!this.J&&(dt==4?vh(this.j,this):(this.o=!1,eo(this)))}else C_(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),gr(this),Ds(this)}}}catch{}finally{}};function Ku(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function h_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ja:(f=Number(u.substring(f,m)),isNaN(f)?Hu:(m+=1,m+f>u.length?Ja:(u=u.slice(m,m+f),a.C=m+f,u)))}$n.prototype.cancel=function(){this.J=!0,gr(this)};function eo(a){a.S=Date.now()+a.I,zu(a,a.I)}function zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(y(a.ba,a),u)}function Za(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(c_(this.i,this.A),this.L!=2&&(Ps(),Tt(17)),gr(this),this.s=2,Ds(this)):zu(this,this.S-a)};function Ds(a){a.j.G==0||a.J||vh(a.j,a)}function gr(a){Za(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ss(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function el(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||tl(f.h,a))){if(!a.K&&tl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)co(f),ao(f);else break e;il(f),Tt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ks(y(f.Za,f),6e3));if(1>=Yu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else yr(f,11)}else if((a.K||f.g==a)&&co(f),!N(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const ht=Te[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const dt=Te[4];dt!=null&&(f.Aa=dt,f.j.info("SVER="+f.Aa));const zr=Te[5];zr!=null&&typeof zr=="number"&&0<zr&&(m=1.5*zr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Qt=a.g;if(Qt){const ho=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ho){var O=m.h;O.g||ho.indexOf("spdy")==-1&&ho.indexOf("quic")==-1&&ho.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(nl(O,O.h),O.h=null))}if(m.D){const al=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;al&&(m.ya=al,Le(m.I,m.D,al))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var Q=a;if(m.qa=Th(m,m.J?m.ia:null,m.W),Q.K){Ju(m.h,Q);var ke=Q,st=m.L;st&&(ke.I=st),ke.B&&(Za(ke),eo(ke)),m.g=Q}else _h(m);0<f.i.length&&lo(f)}else Te[0]!="stop"&&Te[0]!="close"||yr(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?yr(f,7):sl(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}Ps(4)}catch{}}var d_=class{constructor(a,u){this.g=a,this.map=u}};function Gu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yu(a){return a.h?1:a.g?a.g.size:0}function tl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function nl(a,u){a.g?a.g.add(u):a.h=u}function Ju(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Gu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return x(a.i)}function f_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function p_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=p_(a),m=f_(a),P=m.length,O=0;O<P;O++)u.call(void 0,m[O],f&&f[O],a)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var O=a[f].substring(0,m);P=a[f].substring(m+1)}else O=a[f];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,to(this,a.j),this.o=a.o,this.g=a.g,no(this,a.s),this.l=a.l;var u=a.i,f=new xs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),th(this,f),this.m=a.m}else a&&(u=String(a).match(eh))?(this.h=!1,to(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),no(this,u[4]),this.l=Ns(u[5]||"",!0),th(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}_r.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Os(u,nh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Os(u,nh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?y_:__,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,E_)),a.join("")};function _n(a){return new _r(a)}function to(a,u,f){a.j=f?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function no(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function th(a,u,f){u instanceof xs?(a.i=u,w_(a.i,a.h)):(f||(u=Os(u,v_)),a.i=new xs(u,a.h))}function Le(a,u,f){a.i.set(u,f)}function ro(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,g_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function g_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nh=/[#\/\?@]/g,__=/[#\?:]/g,y_=/[#\?]/g,v_=/[#\?@]/g,E_=/#/g;function xs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&m_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=xs.prototype,t.add=function(a,u){jn(this),this.i=null,a=Wr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function rh(a,u){jn(a),u=Wr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function sh(a,u){return jn(a),u=Wr(a,u),a.g.has(u)}t.forEach=function(a,u){jn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=a[m];for(let O=0;O<P.length;O++)f.push(u[m])}return f},t.V=function(a){jn(this);let u=[];if(typeof a=="string")sh(this,a)&&(u=u.concat(this.g.get(Wr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return jn(this),this.i=null,a=Wr(this,a),sh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ih(a,u,f){rh(a,u),0<f.length&&(a.i=null,a.g.set(Wr(a,u),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const O=encodeURIComponent(String(m)),Q=this.V(m);for(m=0;m<Q.length;m++){var P=O;Q[m]!==""&&(P+="="+encodeURIComponent(String(Q[m]))),a.push(P)}}return this.i=a.join("&")};function Wr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function w_(a,u){u&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(rh(this,m),ih(this,P,f))},a)),a.j=u}function T_(a,u){const f=new Vs;if(l.Image){const m=new Image;m.onload=b(qn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=b(qn,f,"TestLoadImage: error",!1,u,m),m.onabort=b(qn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=b(qn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function I_(a,u){const f=new Vs,m=new AbortController,P=setTimeout(()=>{m.abort(),qn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?qn(f,"TestPingServer: ok",!0,u):qn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),qn(f,"TestPingServer: error",!1,u)})}function qn(a,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function A_(){this.g=new Yi}function b_(a,u,f){const m=f||"";try{Zu(a,function(P,O){let Q=P;h(P)&&(Q=rt(P)),u.push(m+O+"="+encodeURIComponent(Q))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function so(a){this.l=a.Ub||null,this.j=a.eb||!1}V(so,qr),so.prototype.g=function(){return new io(this.l,this.j)},so.prototype.i=function(a){return function(){return a}}({});function io(a,u){oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(io,oe),t=io.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&oh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Qa=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ah(a){let u="";return z(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function rl(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ah(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,u,f))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(qe,oe);var R_=/^https?$/i,S_=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ya.g(),this.v=this.o?Mu(this.o):Mu(Ya),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){lh(this,O);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(S_,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Q]of f)this.g.setRequestHeader(O,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){lh(this,O)}};function lh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ch(a),oo(a)}function ch(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oo(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},t.bb=function(){uh(this)};function uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)$e(a.Ea,0,a);else if(pe(a,"readystatechange"),yn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=Q===0){var P=String(a.D).match(eh)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!R_.test(P?P.toLowerCase():"")}f=m}if(f)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var O=2<yn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",ch(a)}}finally{oo(a)}}}}function oo(a,u){if(a.g){hh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{f.onreadystatechange=m}catch{}}}function hh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),jt(u)}};function dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function C_(a){const u={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var f=A(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[P]||[];u[P]=O,O.push(f)}E(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function fh(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gu(a&&a.concurrentRequestLimit),this.Da=new A_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){Tt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Th(this,null,this.W),lo(this)};function sl(a){if(ph(a),a.G==3){var u=a.U++,f=_n(a.I);if(Le(f,"SID",a.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Us(a,f),u=new $n(a,a.j,u),u.L=2,u.v=ro(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ih(u.j,null),u.g.ea(u.v)),u.F=Date.now(),eo(u)}wh(a)}function ao(a){a.g&&(ol(a),a.g.cancel(),a.g=null)}function ph(a){ao(a),a.u&&(l.clearTimeout(a.u),a.u=null),co(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function lo(a){if(!Qu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||Ze(),F||(ce(),F=!0),Z.add(u,a),a.B=0}}function P_(a,u){return Yu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(y(a.Ga,a,u),Eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new $n(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=gh(this,P,u),f=_n(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Us(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(ah(O)))+"&"+u:this.m&&rl(f,this.m,O)),nl(this.h,P),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),P.T=!0,Xa(P,f,null)):Xa(P,f,u),this.G=2}}else this.G==3&&(a?mh(this,a):this.i.length==0||Qu(this.h)||mh(this))};function mh(a,u){var f;u?f=u.l:f=a.U++;const m=_n(a.I);Le(m,"SID",a.K),Le(m,"RID",f),Le(m,"AID",a.T),Us(a,m),a.m&&a.o&&rl(m,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=gh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nl(a.h,f),Xa(f,m,u)}function Us(a,u){a.H&&z(a.H,function(f,m){Le(u,m,f)}),a.l&&Zu({},function(f,m){Le(u,m,f)})}function gh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const Q=["count="+f];O==-1?0<f?(O=P[0].g,Q.push("ofs="+O)):O=0:Q.push("ofs="+O);let ke=!0;for(let st=0;st<f;st++){let Te=P[st].g;const ht=P[st].map;if(Te-=O,0>Te)O=Math.max(0,P[st].g-100),ke=!1;else try{b_(ht,Q,"req"+Te+"_")}catch{m&&m(ht)}}if(ke){m=Q.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function _h(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||Ze(),F||(ce(),F=!0),Z.add(u,a),a.v=0}}function il(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(y(a.Fa,a),Eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),ao(this),yh(this))};function ol(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yh(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=_n(a.qa);Le(u,"RID","rpc"),Le(u,"SID",a.K),Le(u,"AID",a.T),Le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(u,"TO",a.ja),Le(u,"TYPE","xmlhttp"),Us(a,u),a.m&&a.o&&rl(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ro(_n(u)),f.m=null,f.P=!0,Wu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ao(this),il(this),Tt(19))};function co(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vh(a,u){var f=null;if(a.g==u){co(a),ol(a),a.g=null;var m=2}else if(tl(a.h,u))f=u.D,Ju(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Ji(),pe(m,new $u(m,f)),lo(a)}else _h(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&P_(a,u)||m==2&&il(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Eh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function yr(a,u){if(a.j.info("Error code "+u),u==2){var f=y(a.fb,a),m=a.Xa;const P=!m;m=new _r(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||to(m,"https"),ro(m),P?T_(m.toString(),f):I_(m.toString(),f)}else Tt(2);a.G=0,a.l&&a.l.sa(u),wh(a),ph(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function wh(a){if(a.G=0,a.ka=[],a.l){const u=Xu(a.h);(u.length!=0||a.i.length!=0)&&(M(a.ka,u),M(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Th(a,u,f){var m=f instanceof _r?_n(f):new _r(f);if(m.g!="")u&&(m.g=u+"."+m.g),no(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new _r(null);m&&to(O,m),u&&(O.g=u),P&&no(O,P),f&&(O.l=f),m=O}return f=a.D,u=a.ya,f&&u&&Le(m,f,u),Le(m,"VER",a.la),Us(a,m),m}function Ih(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new so({eb:f})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ah(){}t=Ah.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uo(){}uo.prototype.g=function(a,u){return new Nt(a,u)};function Nt(a,u){oe.call(this),this.g=new fh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!N(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Kr(this)}V(Nt,oe),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){sl(this.g)},Nt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=rt(a),a=f);u.i.push(new d_(u.Ya++,a)),u.G==3&&lo(u)},Nt.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,Nt.aa.N.call(this)};function bh(a){Ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}V(bh,Ga);function Rh(){Qa.call(this),this.status=1}V(Rh,Qa);function Kr(a){this.g=a}V(Kr,Ah),Kr.prototype.ua=function(){pe(this.g,"a")},Kr.prototype.ta=function(a){pe(this.g,new bh(a))},Kr.prototype.sa=function(a){pe(this.g,new Rh)},Kr.prototype.ra=function(){pe(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,lm=function(){return new uo},am=function(){return Ji()},om=mr,sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,Po=Xi,ju.COMPLETE="complete",im=ju,Lu.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Zs=Lu,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,sm=qe}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});const Id="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Ts="10.14.0";/**
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
 */const Nr=new $c("@firebase/firestore");function Hs(){return Nr.logLevel}function te(t,...e){if(Nr.logLevel<=ve.DEBUG){const n=e.map(Hc);Nr.debug(`Firestore (${Ts}): ${t}`,...n)}}function Nn(t,...e){if(Nr.logLevel<=ve.ERROR){const n=e.map(Hc);Nr.error(`Firestore (${Ts}): ${t}`,...n)}}function fs(t,...e){if(Nr.logLevel<=ve.WARN){const n=e.map(Hc);Nr.warn(`Firestore (${Ts}): ${t}`,...n)}}function Hc(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Ce(t,e){t||he()}function fe(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $w{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class jw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qw{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new pt(e)}}class Hw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ww{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Hw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Kw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Gw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new He(0,0))}static max(){return new de(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Ii{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const Qw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ii{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return Qw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}function Yw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new ar(s,se.empty(),e)}function Jw(t){return new ar(t.readTime,t.key,-1)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(de.min(),se.empty(),-1)}static max(){return new ar(de.max(),se.empty(),-1)}}function Xw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Zw)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wc.oe=-1;function Ra(t){return t==null}function Yo(t){return t===0&&1/t==-1/0}function nT(t){return typeof t=="number"&&Number.isInteger(t)&&!Yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new lt(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dm("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const rT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=rT.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zc(t){const e=t.mapValue.fields.__previous_value__;return Kc(e)?zc(e):e}function Ai(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class sT{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vo={mapValue:{}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kc(t)?4:oT(t)?9007199254740991:iT(t)?10:11:he()}function gn(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),l=lr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),l=ze(i.doubleValue);return o===l?Yo(o)===Yo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ad(o)!==Ad(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!gn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Ri(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ze(i.integerValue||i.doubleValue),c=ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Rd(t.timestampValue,e.timestampValue);case 4:return Rd(Ai(t),Ai(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Or(i),c=Or(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ae(l[h],c[h]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(ze(i.latitude),ze(o.latitude));return l!==0?l:Ae(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},y=o.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,V=(c=y.value)===null||c===void 0?void 0:c.arrayValue,x=Ae(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Sd(b,V)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Ae(c[p],d[p]);if(y!==0)return y;const b=ms(l[c[p]],h[d[p]]);if(b!==0)return b}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Rd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=lr(t),r=lr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Sd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ms(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function gs(t){return ic(t)}function ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ic(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ic(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Cd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function oc(t){return!!t&&"integerValue"in t}function Gc(t){return!!t&&"arrayValue"in t}function Pd(t){return!!t&&"nullValue"in t}function kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function iT(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(ci(this.value))}}function fm(t){const e=[];return Fr(t.fields,(n,r)=>{const s=new at([n]);if(ko(r)){const i=fm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,de.min(),de.min(),de.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,de.min(),de.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,de.min(),de.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function Vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function aT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pm{}class Xe extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cT(e,n,r):n==="array-contains"?new dT(e,r):n==="in"?new fT(e,r):n==="not-in"?new pT(e,r):n==="array-contains-any"?new mT(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uT(e,r):new hT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return mm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mm(t){return t.op==="and"}function gm(t){return lT(t)&&mm(t)}function lT(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function ac(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(gm(t))return t.filters.map(e=>ac(e)).join(",");{const e=t.filters.map(n=>ac(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_m(o,s.filters[l]),!0):!1}(t,e):void he()}function ym(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class cT extends Xe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class uT extends Xe{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hT extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class dT extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gc(n)&&Ri(n.arrayValue,this.value)}}class fT extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ri(this.value.arrayValue,n)}}class pT extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ri(this.value.arrayValue,n)}}class mT extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
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
 */class gT{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Nd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gT(t,e,n,r,s,i,o)}function Qc(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ac(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ue=n}return e.ue}function Yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function lc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _T(t,e,n,r,s,i,o,l){return new Ui(t,e,n,r,s,i,o,l)}function Sa(t){return new Ui(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Em(t){return t.collectionGroup!==null}function ui(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Xo(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Xo(at.keyField(),r))}return e.ce}function un(t){const e=fe(t);return e.le||(e.le=yT(e,ui(t))),e.le}function yT(t,e){if(t.limitType==="F")return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xo(s.field,i)});const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return Nd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cc(t,e){const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uc(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ca(t,e){return Yc(un(t),un(e))&&t.limitType===e.limitType}function wm(t){return`${Qc(un(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Vd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ui(r),s)||r.endAt&&!function(o,l,c){const h=Vd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ui(r),s))}(t,e)}function vT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of ui(t)){const i=ET(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ET(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ms(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
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
 */const wT=new je(se.comparator);function On(){return wT}const Im=new je(se.comparator);function ei(...t){let e=Im;for(const n of t)e=e.insert(n.key,n);return e}function Am(t){let e=Im;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return hi()}function bm(){return hi()}function hi(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const TT=new je(se.comparator),IT=new lt(se.comparator);function ye(...t){let e=IT;for(const n of t)e=e.add(n);return e}const AT=new lt(Ae);function bT(){return AT}/**
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
 */function Jc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yo(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function RT(t,e){return nT(e)?Rm(e):Jc(t,e)}/**
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
 */class ka{constructor(){this._=void 0}}function ST(t,e,n){return t instanceof Si?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kc(i)&&(i=zc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ci?Cm(t,e):t instanceof Pi?Pm(t,e):function(s,i){const o=Sm(s,i),l=xd(o)+xd(s.Pe);return oc(o)&&oc(s.Pe)?Rm(l):Jc(s.serializer,l)}(t,e)}function CT(t,e,n){return t instanceof Ci?Cm(t,e):t instanceof Pi?Pm(t,e):n}function Sm(t,e){return t instanceof Zo?function(r){return oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Si extends ka{}class Ci extends ka{constructor(e){super(),this.elements=e}}function Cm(t,e){const n=km(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pi extends ka{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=km(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class Zo extends ka{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xd(t){return ze(t.integerValue||t.doubleValue)}function km(t){return Gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class PT{constructor(e,n){this.field=e,this.transform=n}}function kT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ci&&s instanceof Ci||r instanceof Pi&&s instanceof Pi?ps(r.elements,s.elements,gn):r instanceof Zo&&s instanceof Zo?gn(r.Pe,s.Pe):r instanceof Si&&s instanceof Si}(t.transform,e.transform)}class VT{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Va{}function Vm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Da(t.key,kt.none()):new Bi(t.key,t.data,kt.none());{const n=t.data,r=Pt.empty();let s=new lt(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hr(t.key,r,new Mt(s.toArray()),kt.none())}}function DT(t,e,n){t instanceof Bi?function(s,i,o){const l=s.value.clone(),c=Ld(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(s,i,o){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ld(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof Bi?function(i,o,l,c){if(!Vo(i.precondition,o))return l;const h=i.value.clone(),d=Fd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,o,l,c){if(!Vo(i.precondition,o))return l;const h=Fd(i.fieldTransforms,c,o),d=o.data;return d.setAll(Dm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function NT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sm(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,o)=>kT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends Va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends Va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ld(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,CT(o,l,n[s]))}return r}function Fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ST(i,o,e))}return r}class Da extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OT extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Vm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Md(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Md(n,r))}}class Xc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return TT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xc(e,n,r,s)}}/**
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
 */class MT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Je,Ee;function FT(t){switch(t){default:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Nm(t){if(t===void 0)return Nn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Je.OK:return $.OK;case Je.CANCELLED:return $.CANCELLED;case Je.UNKNOWN:return $.UNKNOWN;case Je.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Je.INTERNAL:return $.INTERNAL;case Je.UNAVAILABLE:return $.UNAVAILABLE;case Je.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Je.NOT_FOUND:return $.NOT_FOUND;case Je.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Je.ABORTED:return $.ABORTED;case Je.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Je.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(Ee=Je||(Je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UT(){return new TextEncoder}/**
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
 */const BT=new Vr([4294967295,4294967295],0);function Ud(t){const e=UT().encode(t),n=new rm;return n.update(e),new Uint8Array(n.digest())}function Bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class Zc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(BT)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ud(e),[r,s]=Bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Na{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Na(de.min(),s,new je(Ae),On(),ye())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,ye(),ye(),ye())}}/**
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
 */class Do{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Om{constructor(e,n){this.targetId=e,this.me=n}}class xm{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $d{constructor(){this.fe=0,this.ge=qd(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new $i(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $T{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=jd(),this.Qe=new je(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(lc(i))if(r===0){const o=new se(i.path);this.Ue(n,o,gt.newNoDocument(o,de.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(c){if(c instanceof dm)return fs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Zc(o,s,i)}catch(c){return fs(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&lc(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,gt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Na(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=jd(),this.Qe=new je(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $d,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $d),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jd(){return new je(se.comparator)}function qd(){return new je(se.comparator)}const jT={asc:"ASCENDING",desc:"DESCENDING"},qT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HT={and:"AND",or:"OR"};class WT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hc(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KT(t,e){return ea(t,e.toTimestamp())}function hn(t){return Ce(!!t),de.fromTimestamp(function(n){const r=lr(n);return new He(r.seconds,r.nanos)}(t))}function eu(t,e){return dc(t,e).canonicalString()}function dc(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lm(t){const e=Fe.fromString(t);return Ce(jm(e)),e}function fc(t,e){return eu(t.databaseId,e.path)}function Pl(t,e){const n=Lm(e);if(n.get(1)!==t.databaseId.projectId)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Um(n))}function Fm(t,e){return eu(t.databaseId,e)}function zT(t){const e=Lm(t);return e.length===4?Fe.emptyPath():Um(e)}function pc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Um(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hd(t,e,n){return{name:fc(t,e),fields:n.value.mapValue.fields}}function GT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ce(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?$.UNKNOWN:Nm(h.code);return new X(d,h.message||"")}(o);n=new xm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pl(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):de.min(),l=new Pt({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Do(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pl(t,r.document),i=r.readTime?hn(r.readTime):de.min(),o=gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Do([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pl(t,r.document),i=r.removedTargetIds||[];n=new Do([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new LT(s,i),l=r.targetId;n=new Om(l,o)}}return n}function QT(t,e){let n;if(e instanceof Bi)n={update:Hd(t,e.key,e.value)};else if(e instanceof Da)n={delete:fc(t,e.key)};else if(e instanceof hr)n={update:Hd(t,e.key,e.data),updateMask:sI(e.fieldMask)};else{if(!(e instanceof OT))return he();n={verify:fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Si)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function YT(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(de.min())&&(o=hn(i)),new VT(o,s.transformResults||[])}(n,e))):[]}function JT(t,e){return{documents:[Fm(t,e.path)]}}function XT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fm(t,s);const i=function(h){if(h.length!==0)return $m(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Xr(y.field),direction:tI(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function ZT(t){let e=zT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=Bm(p);return y instanceof tn&&gm(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(V){return new Xo(Zr(V.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Ra(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,b=p.values||[];return new Jo(b,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,b=p.values||[];return new Jo(b,y)}(n.endAt)),_T(e,s,o,i,l,"F",c,h)}function eI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>Bm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function tI(t){return jT[t]}function nI(t){return qT[t]}function rI(t){return HT[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return at.fromServerFormat(t.fieldPath)}function $m(t){return t instanceof Xe?function(n){if(n.op==="=="){if(kd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Pd(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:nI(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>$m(s));return r.length===1?r[0]:{compositeFilter:{op:rI(n.op),filters:r}}}(t):he()}function sI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iI{constructor(e){this.ct=e}}function oI(t){const e=ZT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uc(e,e.limit,"L"):e}/**
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
 */class aI{constructor(){this.un=new lI}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(ar.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class lI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Fe.comparator)).toArray()}}/**
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
 */class _s{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _s(0)}static kn(){return new _s(-1)}}/**
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
 */class cI{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,Mt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ei();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=hi(),l=function(){return hi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof hr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),di(d.mutation,h,d.mutation.getFieldMask(),He.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new uI(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=hi();let s=new je((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Mt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=bm();d.forEach(y=>{if(!i.has(y)){const b=Vm(n.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Em(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(Cr());let l=-1,c=i;return o.next(h=>W.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?W.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(d=>({batchId:l,changes:Am(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(l=>W.forEach(l,c=>{const h=function(p,y){return new Ui(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=ei();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&di(d.mutation,h,Mt.empty(),He.now()),Pa(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class dI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:oI(s.bundledQuery),readTime:hn(s.readTime)}}(n)),W.resolve()}}/**
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
 */class fI{constructor(){this.overlays=new je(se.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=Cr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Cr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return W.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MT(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class pI{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class tu{constructor(){this.Tr=new lt(nt.Er),this.dr=new lt(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class mI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(nt.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xT(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Ae);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let l=new lt(Ae);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),W.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gI{constructor(e){this.Mr=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Xw(Jw(d),r)<=0||(s.has(d.key)||Pa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _I(this)}getSize(e){return W.resolve(this.size)}}class _I extends cI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class yI{constructor(e){this.persistence=e,this.Nr=new Is(n=>Qc(n),Yc),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tu,this.targetCount=0,this.kr=_s.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
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
 */class vI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wc(0),this.Kr=!1,this.Kr=!0,this.$r=new pI,this.referenceDelegate=e(this),this.Ur=new yI(this),this.indexManager=new aI,this.remoteDocumentCache=function(s){return new gI(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iI(n),this.Gr=new dI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new mI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new EI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class EI extends eT{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Jr=new tu,this.Yr=null}static Zr(e){return new nu(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ru(e,n.fromCache,r,s)}}/**
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
 */class wI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return AE()?8:tT(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wI;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Hs()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(Hs()<=ve.DEBUG&&te("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Hs()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):W.resolve())}Yi(e,n){if(Od(n))return W.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uc(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,uc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Od(n)||s.isEqual(de.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?W.resolve(null):(Hs()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.rs(e,o,n,Yw(s,-1)).next(l=>l))})}ts(e,n){let r=new lt(Tm(e));return n.forEach((s,i)=>{Pa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Hs()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ar.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class II{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(Ae),this._s=new Is(i=>Qc(i),Yc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function AI(t,e,n,r){return new II(t,e,n,r)}async function qm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function bI(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,y=p.keys();let b=W.resolve();return y.forEach(V=>{b=b.next(()=>d.getEntry(c,V)).next(x=>{const M=h.docVersions.get(V);Ce(M!==null),x.version.compareTo(M)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hm(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function RI(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ct.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(x,M,L){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(y,b,d)&&l.push(n.Ur.updateTargetData(i,b))});let c=On(),h=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(SI(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return W.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function SI(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function CI(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PI(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function mc(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Wd(t,e,n){const r=fe(t);let s=de.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=fe(c),y=p._s.get(d);return y!==void 0?W.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:ye())).next(l=>(kI(r,vT(e),l),{documents:l,Ts:i})))}function kI(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Kd{constructor(){this.activeTargetIds=bT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VI{constructor(){this.so=new Kd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Kd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DI{_o(e){}shutdown(){}}/**
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
 */class zd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eo=null;function kl(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
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
 */const NI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OI{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ft="WebChannelConnection";class xI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=kl(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw fs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=NI[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=kl();return new Promise((o,l)=>{const c=new sm;c.setWithCredentials(!0),c.listenOnce(im.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Po.NO_ERROR:const d=c.getResponseJson();te(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Po.TIMEOUT:te(ft,`RPC '${e}' ${i} timed out`),l(new X($.DEADLINE_EXCEEDED,"Request time out"));break;case Po.HTTP_ERROR:const p=c.getStatus();if(te(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const V=function(M){const L=M.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(L)>=0?L:$.UNKNOWN}(b.status);l(new X(V,b.message))}else l(new X($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(ft,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=kl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lm(),l=am(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let y=!1,b=!1;const V=new OI({Io:M=>{b?te(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(y||(te(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),te(ft,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},To:()=>p.close()}),x=(M,L,N)=>{M.listen(L,j=>{try{N(j)}catch(B){setTimeout(()=>{throw B},0)}})};return x(p,Zs.EventType.OPEN,()=>{b||(te(ft,`RPC '${e}' stream ${s} transport opened.`),V.yo())}),x(p,Zs.EventType.CLOSE,()=>{b||(b=!0,te(ft,`RPC '${e}' stream ${s} transport closed`),V.So())}),x(p,Zs.EventType.ERROR,M=>{b||(b=!0,fs(ft,`RPC '${e}' stream ${s} transport errored:`,M),V.So(new X($.UNAVAILABLE,"The operation could not be completed")))}),x(p,Zs.EventType.MESSAGE,M=>{var L;if(!b){const N=M.data[0];Ce(!!N);const j=N,B=j.error||((L=j[0])===null||L===void 0?void 0:L.error);if(B){te(ft,`RPC '${e}' stream ${s} received error:`,B);const G=B.status;let z=function(_){const I=Je[_];if(I!==void 0)return Nm(I)}(G),E=B.message;z===void 0&&(z=$.INTERNAL,E="Unknown error status: "+G+" with message "+B.message),b=!0,V.So(new X(z,E)),p.close()}else te(ft,`RPC '${e}' stream ${s} received:`,N),V.bo(N)}}),x(l,om.STAT_EVENT,M=>{M.stat===sc.PROXY?te(ft,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===sc.NOPROXY&&te(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Vl(){return typeof document<"u"?document:null}/**
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
 */function Oa(t){return new WT(t,!0)}/**
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
 */class Wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Km{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new X($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MI extends Km{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=GT(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?hn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=lc(c)?{documents:JT(i,c)}:{query:XT(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Mm(i,o.resumeToken);const h=hc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=ea(i,o.snapshotVersion.toTimestamp());const h=hc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=eI(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pc(this.serializer),n.removeTarget=e,this.a_(n)}}class LI extends Km{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=YT(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QT(this.serializer,r))};this.a_(n)}}/**
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
 */class FI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,dc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,dc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class UI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class BI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.L_.add(4),await ji(h),h.q_.set("Unknown"),h.L_.delete(4),await xa(h)}(this))})}),this.q_=new UI(r,s)}}async function xa(t){if(Ur(t))for(const e of t.B_)await e(!0)}async function ji(t){for(const e of t.B_)await e(!1)}function zm(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),au(n)?ou(n):As(n).r_()&&iu(n,e))}function su(t,e){const n=fe(t),r=As(n);n.N_.delete(e),r.r_()&&Gm(n,e),n.N_.size===0&&(r.r_()?r.o_():Ur(n)&&n.q_.set("Unknown"))}function iu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).A_(e)}function Gm(t,e){t.Q_.xe(e),As(t).R_(e)}function ou(t){t.Q_=new $T({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),As(t).start(),t.q_.v_()}function au(t){return Ur(t)&&!As(t).n_()&&t.N_.size>0}function Ur(t){return fe(t).L_.size===0}function Qm(t){t.Q_=void 0}async function $I(t){t.q_.set("Online")}async function jI(t){t.N_.forEach((e,n)=>{iu(t,e)})}async function qI(t,e){Qm(t),au(t)?(t.q_.M_(e),ou(t)):t.q_.set("Unknown")}async function HI(t,e,n){if(t.q_.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof Do?t.Q_.Ke(e):e instanceof Om?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await Hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),Gm(i,c);const p=new er(d.target,c,h,d.sequenceNumber);iu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Fi(e))throw e;t.L_.add(1),await ji(t),t.q_.set("Offline"),n||(n=()=>Hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await xa(t)})}function Ym(t,e){return e().catch(n=>ta(t,n,e))}async function Ma(t){const e=fe(t),n=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;WI(e);)try{const s=await CI(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,KI(e,s)}catch(s){await ta(e,s)}Jm(e)&&Xm(e)}function WI(t){return Ur(t)&&t.O_.length<10}function KI(t,e){t.O_.push(e);const n=cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Jm(t){return Ur(t)&&!cr(t).n_()&&t.O_.length>0}function Xm(t){cr(t).start()}async function zI(t){cr(t).p_()}async function GI(t){const e=cr(t);for(const n of t.O_)e.m_(n.mutations)}async function QI(t,e,n){const r=t.O_.shift(),s=Xc.from(r,e,n);await Ym(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ma(t)}async function YI(t,e){e&&cr(t).V_&&await async function(r,s){if(function(o){return FT(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();cr(r).s_(),await Ym(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ma(r)}}(t,e),Jm(t)&&Xm(t)}async function Gd(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.L_.add(3),await ji(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await xa(n)}async function JI(t,e){const n=fe(t);e?(n.L_.delete(2),await xa(n)):e||(n.L_.add(2),await ji(n),n.q_.set("Unknown"))}function As(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new MI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:$I.bind(null,t),Ro:jI.bind(null,t),mo:qI.bind(null,t),d_:HI.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),au(t)?ou(t):t.q_.set("Unknown")):(await t.K_.stop(),Qm(t))})),t.K_}function cr(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new LI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zI.bind(null,t),mo:YI.bind(null,t),f_:GI.bind(null,t),g_:QI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ma(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class lu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Fi(t))return new X($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qd{constructor(){this.W_=new je(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ys(e,n,as.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class XI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ZI{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Yd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new X($.ABORTED,"Firestore shutting down"))}}function Yd(){return new Is(t=>wm(t),Ca)}async function uu(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new XI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=cu(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&du(n)}async function hu(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function eA(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&du(n)}function tA(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function du(t){t.Y_.forEach(e=>{e.next()})}var gc,Jd;(Jd=gc||(gc={})).ea="default",Jd.Cache="cache";class fu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gc.Cache}}/**
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
 */class Zm{constructor(e){this.key=e}}class eg{constructor(e){this.key=e}}class nA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=Tm(e),this.Ra=new as(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),b=Pa(this.query,p)?p:null,V=!!y&&this.mutatedKeys.has(y.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let M=!1;y&&b?y.data.isEqual(b.data)?V!==x&&(r.track({type:3,doc:b}),M=!0):this.ga(y,b)||(r.track({type:2,doc:b}),M=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!y&&b?(r.track({type:0,doc:b}),M=!0):y&&!b&&(r.track({type:1,doc:y}),M=!0,(c||h)&&(l=!0)),M&&(b?(o=o.add(b),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(b,V){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return x(b)-x(V)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new ys(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new eg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Zm(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sA{constructor(e){this.key=e,this.va=!1}}class iA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Is(l=>wm(l),Ca),this.Ma=new Map,this.xa=new Set,this.Oa=new je(se.comparator),this.Na=new Map,this.La=new tu,this.Ba={},this.ka=new Map,this.qa=_s.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oA(t,e,n=!0){const r=og(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await tg(r,e,n,!0),s}async function aA(t,e){const n=og(t);await tg(n,e,!0,!1)}async function tg(t,e,n,r){const s=await PI(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await lA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zm(t.remoteStore,s),l}async function lA(t,e,n,r,s){t.Ka=(p,y,b)=>async function(x,M,L,N){let j=M.view.ma(L);j.ns&&(j=await Wd(x.localStore,M.query,!1).then(({documents:E})=>M.view.ma(E,j)));const B=N&&N.targetChanges.get(M.targetId),G=N&&N.targetMismatches.get(M.targetId)!=null,z=M.view.applyChanges(j,x.isPrimaryClient,B,G);return Zd(x,M.targetId,z.wa),z.snapshot}(t,p,y,b);const i=await Wd(t.localStore,e,!0),o=new nA(e,i.Ts),l=o.ma(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Zd(t,n,h.wa);const d=new rA(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function cA(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ca(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&su(r.remoteStore,s.targetId),_c(r,s.targetId)}).catch(Li)):(_c(r,s.targetId),await mc(r.localStore,s.targetId,!0))}async function uA(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),su(n.remoteStore,r.targetId))}async function hA(t,e,n){const r=yA(t);try{const s=await function(o,l){const c=fe(o),h=He.now(),d=l.reduce((b,V)=>b.add(V.key),ye());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=On(),x=ye();return c.cs.getEntries(b,d).next(M=>{V=M,V.forEach((L,N)=>{N.isValidDocument()||(x=x.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,V)).next(M=>{p=M;const L=[];for(const N of l){const j=NT(N,p.get(N.key).overlayedDocument);j!=null&&L.push(new hr(N.key,j,fm(j.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,L,l)}).next(M=>{y=M;const L=M.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(b,M.batchId,L)})}).then(()=>({batchId:y.batchId,changes:Am(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new je(Ae)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await qi(r,s.changes),await Ma(r.remoteStore)}catch(s){const i=cu(s,"Failed to persist write");n.reject(i)}}async function ng(t,e){const n=fe(t);try{const r=await RI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Xd(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&du(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dA(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,gt.newNoDocument(i,de.min()));const l=ye().add(i),c=new Na(de.min(),new Map,new je(Ae),o,l);await ng(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),pu(r)}else await mc(r.localStore,e,!1).then(()=>_c(r,e,n)).catch(Li)}async function fA(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await bI(n.localStore,e);sg(n,r,null),rg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function pA(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ce(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);sg(r,e,n),rg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function rg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function sg(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function _c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ig(t,r)})}function ig(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(su(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pu(t))}function Zd(t,e,n){for(const r of n)r instanceof Zm?(t.La.addReference(r.key,e),mA(t,r)):r instanceof eg?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ig(t,r.key)):he()}function mA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),pu(t))}function pu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new sA(n)),t.Oa=t.Oa.insert(n,r),zm(t.remoteStore,new er(un(Sa(n.path)),r,"TargetPurposeLimboResolution",Wc.oe))}}async function qi(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ru.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>W.forEach(h,y=>W.forEach(y.$i,b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b)).next(()=>W.forEach(y.Ui,b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))}catch(p){if(!Fi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const b=d.os.get(y),V=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(V);d.os=d.os.insert(y,x)}}}(r.localStore,i))}async function gA(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await qm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new X($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.hs)}}function _A(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function og(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ng.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dA.bind(null,e),e.Ca.d_=eA.bind(null,e.eventManager),e.Ca.$a=tA.bind(null,e.eventManager),e}function yA(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pA.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return AI(this.persistence,new TI,e.initialUser,this.serializer)}Ga(e){return new vI(nu.Zr,this.serializer)}Wa(e){return new VI}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class yc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gA.bind(null,this.syncEngine),await JI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZI}()}createDatastore(e){const n=Oa(e.databaseInfo.databaseId),r=function(i){return new xI(i)}(e.databaseInfo);return function(i,o,l,c){return new FI(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new BI(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xd(this.syncEngine,n,0),function(){return zd.D()?new zd:new DI}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new iA(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ji(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yc.provider={build:()=>new yc};/**
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
 */class mu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class vA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EA(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gd(e.remoteStore,s)),t._onlineComponents=e}async function EA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Dl(t,new na)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Dl(t,new na);return t._offlineComponents}async function ag(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await ef(t,new yc))),t._onlineComponents}function wA(t){return ag(t).then(e=>e.syncEngine)}async function ra(t){const e=await ag(t),n=e.eventManager;return n.onListen=oA.bind(null,e.syncEngine),n.onUnlisten=cA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uA.bind(null,e.syncEngine),n}function TA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new mu({next:y=>{d.Za(),o.enqueueAndForget(()=>hu(i,p));const b=y.docs.has(l);!b&&y.fromCache?h.reject(new X($.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&c&&c.source==="server"?h.reject(new X($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new fu(Sa(l.path),d,{includeMetadataChanges:!0,_a:!0});return uu(i,p)}(await ra(t),t.asyncQueue,e,n,r)),r.promise}function IA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new mu({next:y=>{d.Za(),o.enqueueAndForget(()=>hu(i,p)),y.fromCache&&c.source==="server"?h.reject(new X($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new fu(l,d,{includeMetadataChanges:!0,_a:!0});return uu(i,p)}(await ra(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tf=new Map;/**
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
 */function cg(t,e,n){if(!n)throw new X($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AA(t,e,n,r){if(e===!0&&r===!0)throw new X($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nf(t){if(!se.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rf(t){if(se.isDocumentKey(t))throw new X($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function La(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=La(t);throw new X($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class sf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $w;switch(r.type){case"firstParty":return new Ww(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tf.get(n);r&&(te("ComponentProvider","Removing Datastore"),tf.delete(n),r.terminate())}(this),Promise.resolve()}}function bA(t,e,n,r={}){var s;const i=(t=Vt(t,Fa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=pt.MOCK_USER;else{l=_E(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(h)}t._authCredentials=new jw(new cm(l,c))}}/**
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
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class sr extends Br{constructor(e,n,r){super(e,n,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new se(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function Ws(t,e,...n){if(t=Ge(t),cg("collection","path",e),t instanceof Fa){const r=Fe.fromString(e,...n);return rf(r),new sr(t,null,r)}{if(!(t instanceof Et||t instanceof sr))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return rf(r),new sr(t.firestore,null,r)}}function Ot(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=um.newId()),cg("doc","path",e),t instanceof Fa){const r=Fe.fromString(e,...n);return nf(r),new Et(t,null,new se(r))}{if(!(t instanceof Et||t instanceof sr))throw new X($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return nf(r),new Et(t.firestore,t instanceof sr?t.converter:null,new se(r))}}/**
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
 */class of{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wm(this,"async_queue_retry"),this.Vu=()=>{const r=Vl();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Vl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=lu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function af(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends Fa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new of,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new of(e),this._firestoreClient=void 0,await e}}}function RA(t,e){const n=typeof t=="object"?t:em(),r=typeof t=="string"?t:"(default)",s=qc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mE("firestore");i&&bA(s,...i)}return s}function Hi(t){if(t._terminated)throw new X($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SA(t),t._firestoreClient}function SA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new sT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new vA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(ct.fromBase64String(e))}catch(n){throw new X($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ua{constructor(e){this._methodName=e}}/**
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
 */class gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */class _u{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const CA=/^__.*__$/;class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}class ug{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(hg(this.Cu)&&CA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oa(e)}Qu(e,n,r,s=!1){return new yu({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ba(t){const e=t._freezeSettings(),n=Oa(t._databaseId);return new kA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dg(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Eu("Data must be an object, but it was:",o,r);const l=mg(r,o);let c,h;if(i.merge)c=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=vc(e,p,n);if(!o.contains(y))throw new X($.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);_g(d,y)||d.push(y)}c=new Mt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new PA(new Pt(l),c,h)}class $a extends Ua{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $a}}class vu extends Ua{_toFieldTransform(e){return new PT(e.path,new Si)}isEqual(e){return e instanceof vu}}function fg(t,e,n,r){const s=t.Qu(1,e,n);Eu("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Fr(r,(c,h)=>{const d=wu(e,c,n);h=Ge(h);const p=s.Nu(d);if(h instanceof $a)i.push(d);else{const y=Ki(h,p);y!=null&&(i.push(d),o.set(d,y))}});const l=new Mt(i);return new ug(o,l,s.fieldTransforms)}function pg(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[vc(e,r,n)],c=[s];if(i.length%2!=0)throw new X($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(vc(e,i[y])),c.push(i[y+1]);const h=[],d=Pt.empty();for(let y=l.length-1;y>=0;--y)if(!_g(h,l[y])){const b=l[y];let V=c[y];V=Ge(V);const x=o.Nu(b);if(V instanceof $a)h.push(b);else{const M=Ki(V,x);M!=null&&(h.push(b),d.set(b,M))}}const p=new Mt(h);return new ug(d,p,o.fieldTransforms)}function VA(t,e,n,r=!1){return Ki(n,t.Qu(r?4:3,e))}function Ki(t,e){if(gg(t=Ge(t)))return Eu("Unsupported field value:",e,t),mg(t,e);if(t instanceof Ua)return function(r,s){if(!hg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ki(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _u)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Jc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${La(r)}`)}(t,e)}function mg(t,e){const n={};return hm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,s)=>{const i=Ki(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof gu||t instanceof vs||t instanceof Et||t instanceof Ua||t instanceof _u)}function Eu(t,e,n){if(!gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=La(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vc(t,e,n){if((e=Ge(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return wu(t,e);throw sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const DA=new RegExp("[~\\*/\\[\\]]");function wu(t,e,n){if(e.search(DA)>=0)throw sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wi(...e.split("."))._internalPath}catch{throw sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new X($.INVALID_ARGUMENT,l+t+c)}function _g(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NA extends yg{data(){return super.data()}}function Tu(t,e){return typeof e=="string"?wu(t,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
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
 */function vg(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iu{}class OA extends Iu{}function xA(t,e,...n){let r=[];e instanceof Iu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Au).length,l=i.filter(c=>c instanceof ja).length;if(o>1||o>0&&l>0)throw new X($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ja extends OA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ja(e,n,r)}_apply(e){const n=this._parse(e);return Eg(e._query,n),new Br(e.firestore,e.converter,cc(e._query,n))}_parse(e){const n=Ba(e.firestore);return function(i,o,l,c,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){cf(p,d);const b=[];for(const V of p)b.push(lf(c,i,V));y={arrayValue:{values:b}}}else y=lf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||cf(p,d),y=VA(l,o,p,d==="in"||d==="not-in");return Xe.create(h,d,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MA(t,e,n){const r=e,s=Tu("where",t);return ja._create(s,r,n)}class Au extends Iu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Eg(o,c),o=cc(o,c)}(e._query,n),new Br(e.firestore,e.converter,cc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lf(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new X($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Em(e)&&n.indexOf("/")!==-1)throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!se.isDocumentKey(r))throw new X($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cd(t,new se(r))}if(n instanceof Et)return Cd(t,n._key);throw new X($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${La(n)}.`)}function cf(t,e){if(!Array.isArray(t)||t.length===0)throw new X($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Eg(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class LA{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new _u(i)}convertGeoPoint(e){return new gu(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=lr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ce(jm(r));const s=new bi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function wg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tg extends yg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class No extends Tg{data(e={}){return super.data(e)}}class Ig{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new No(this._firestore,this._userDataWriter,r.key,r,new ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new No(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new No(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:FA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function Nl(t){t=Vt(t,Et);const e=Vt(t.firestore,xn);return TA(Hi(e),t._key).then(n=>Ag(e,t,n))}class bu extends LA{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function uf(t){t=Vt(t,Br);const e=Vt(t.firestore,xn),n=Hi(e),r=new bu(e);return vg(t._query),IA(n,t._query).then(s=>new Ig(e,r,t,s))}function Ol(t,e,n){t=Vt(t,Et);const r=Vt(t.firestore,xn),s=wg(t.converter,e,n);return qa(r,[dg(Ba(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kt.none())])}function UA(t,e,n,...r){t=Vt(t,Et);const s=Vt(t.firestore,xn),i=Ba(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Wi?pg(i,"updateDoc",t._key,e,n,r):fg(i,"updateDoc",t._key,e),qa(s,[o.toMutation(t._key,kt.exists(!0))])}function hf(t){return qa(Vt(t.firestore,xn),[new Da(t._key,kt.none())])}function df(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||af(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(af(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Et)h=Vt(t.firestore,xn),d=Sa(t._key.path),c={next:p=>{e[o]&&e[o](Ag(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Vt(t,Br);h=Vt(p.firestore,xn),d=p._query;const y=new bu(h);c={next:b=>{e[o]&&e[o](new Ig(h,y,p,b))},error:e[o+1],complete:e[o+2]},vg(t._query)}return function(y,b,V,x){const M=new mu(x),L=new fu(b,M,V);return y.asyncQueue.enqueueAndForget(async()=>uu(await ra(y),L)),()=>{M.Za(),y.asyncQueue.enqueueAndForget(async()=>hu(await ra(y),L))}}(Hi(h),d,l,c)}function qa(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>hA(await wA(r),s,i)),i.promise}(Hi(t),e)}function Ag(t,e,n){const r=n.docs.get(e._key),s=new bu(t);return new Tg(t,s,e._key,r,new ni(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class BA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ba(e)}set(e,n,r){this._verifyNotCommitted();const s=xl(e,this._firestore),i=wg(s.converter,n,r),o=dg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,kt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=xl(e,this._firestore);let o;return o=typeof(n=Ge(n))=="string"||n instanceof Wi?pg(this._dataReader,"WriteBatch.update",i._key,n,r,s):fg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=xl(e,this._firestore);return this._mutations=this._mutations.concat(new Da(n._key,kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new X($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xl(t,e){if((t=Ge(t)).firestore!==e)throw new X($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ks(){return new vu("serverTimestamp")}/**
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
 */function wo(t){return Hi(t=Vt(t,xn)),new BA(t,e=>qa(t,e))}(function(e,n=!0){(function(s){Ts=s})(ws),ds(new Dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xn(new qw(r.getProvider("auth-internal")),new zw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rr(Id,"4.7.3",e),rr(Id,"4.7.3","esm2017")})();var $A="firebase",jA="10.14.1";/**
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
 */rr($A,jA,"app");function Ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=bg,Rg=new xi("auth","Firebase",bg());/**
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
 */const ia=new $c("@firebase/auth");function HA(t,...e){ia.logLevel<=ve.WARN&&ia.warn(`Auth (${ws}): ${t}`,...e)}function Oo(t,...e){ia.logLevel<=ve.ERROR&&ia.error(`Auth (${ws}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Su(t,...e)}function dn(t,...e){return Su(t,...e)}function Sg(t,e,n){const r=Object.assign(Object.assign({},qA()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return Sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function ue(t,e,...n){if(!t)throw Su(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Mn(t,e){t||Sn(e)}/**
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
 */function Ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WA(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WA()||wE()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=yE()||TE()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QA=new zi(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return EE()||(h.referrerPolicy="no-referrer"),Cg.fetch()(kg(t,t.config.apiHost,n,l),h)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new JA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw To(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw To(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sg(t,d,h);nn(t,d)}}catch(s){if(s instanceof Fn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Ha(t,e,n,r,s={}){const i=await Un(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cu(t.config,s):`${t.config.apiScheme}://${s}`}function YA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),QA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function To(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function pf(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZA(t,e){return Un(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
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
 */async function eb(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function Vg(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tb(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=Pu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(Ml(s.auth_time)),issuedAtTime:fi(Ml(s.iat)),expirationTime:fi(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function Pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zp(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mf(t){const e=Pu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&nb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,Vg(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dg(i.providerUserInfo):[],l=ib(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new wc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function sb(t){const e=Ge(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ib(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dg(t){return t.map(e=>{var{providerId:n}=e,r=Ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ob(t,e){const n=await Pg(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ab(t,e){return Un(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ob(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ls;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Wn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tb(this,e)}reload(){return sb(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await ki(this,eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(h=n.createdAt)!==null&&h!==void 0?h:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:B,isAnonymous:G,providerData:z,stsTokenManager:E}=n;ue(j&&E,e,"internal-error");const g=ls.fromJSON(this.name,E);ue(typeof j=="string",e,"internal-error"),Wn(p,e.name),Wn(y,e.name),ue(typeof B=="boolean",e,"internal-error"),ue(typeof G=="boolean",e,"internal-error"),Wn(b,e.name),Wn(V,e.name),Wn(x,e.name),Wn(M,e.name),Wn(L,e.name),Wn(N,e.name);const _=new Cn({uid:j,auth:e,email:y,emailVerified:B,displayName:p,isAnonymous:G,photoURL:V,phoneNumber:b,tenantId:x,stsTokenManager:g,createdAt:L,lastLoginAt:N});return z&&Array.isArray(z)&&(_.providerData=z.map(I=>Object.assign({},I))),M&&(_._redirectEventId=M),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const gf=new Map;function Pn(t){Mn(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ng.type="NONE";const _f=Ng;/**
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
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Pn(_f),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(_f);const o=xo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Cn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new cs(i,e,r))}}/**
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
 */function yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if(Bg(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=wt()){return/firefox\//i.test(t)}function xg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=wt()){return/crios\//i.test(t)}function Lg(t=wt()){return/iemobile/i.test(t)}function Fg(t=wt()){return/android/i.test(t)}function Ug(t=wt()){return/blackberry/i.test(t)}function Bg(t=wt()){return/webos/i.test(t)}function ku(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lb(t=wt()){var e;return ku(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cb(){return IE()&&document.documentMode===10}function $g(t=wt()){return ku(t)||Fg(t)||Bg(t)||Ug(t)||/windows phone/i.test(t)||Lg(t)}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=yf(wt());break;case"Worker":n=`${yf(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hb(t,e={}){return Un(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
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
 */const db=6;class fb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:db,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vg(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(ir(this));const n=e?Ge(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hb(this),n=new fb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return Ge(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=VE(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mb(t){Wa=t}function qg(t){return Wa.loadJS(t)}function gb(){return Wa.recaptchaEnterpriseScript}function _b(){return Wa.gapiScript}function yb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vb="recaptcha-enterprise",Eb="NO_RECAPTCHA";class wb{constructor(e){this.type=vb,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new XA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;pf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Eb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&pf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gb();c.length!==0&&(c+=l),qg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Ef(t,e,n,r=!1){const s=new wb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ef(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ef(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Tb(t,e){const n=qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Go(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function Ib(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ab(t,e,n){const r=$r(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:o,port:l}=bb(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Rb()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bb(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wf(o)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function Sb(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Cb(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}async function Pb(t,e){return Un(t,"POST","/v1/accounts:sendOobCode",dr(t,e))}async function kb(t,e){return Pb(t,e)}/**
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
 */async function Vb(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function Db(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
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
 */class Vi extends Vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,n,"signInWithPassword",Cb);case"emailLink":return Vb(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,r,"signUpPassword",Sb);case"emailLink":return Db(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
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
 */const Nb="http://localhost";class Mr extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:Nb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */function Ob(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xb(t){const e=Js(Xs(t)).link,n=e?Js(Xs(e)).deep_link_id:null,r=Js(Xs(t)).deep_link_id;return(r?Js(Xs(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,s,i,o,l;const c=Js(Xs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Ob((s=c.mode)!==null&&s!==void 0?s:null);ue(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xb(e);try{return new Du(n)}catch{return null}}}/**
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
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return ue(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Gi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Gi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Tf(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class aa extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function Kg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function Mb(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
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
 */async function Lb(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(ir(r));const s="reauthenticate";try{const i=await ki(t,Kg(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Pu(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),Es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function zg(t,e,n=!1){if(Rn(t.app))return Promise.reject(ir(t));const r="signIn",s=await Kg(t,r,e),i=await Es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Fb(t,e){return zg($r(t),e)}/**
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
 */async function Ub(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Bb(t,e,n){const r=$r(t);await Tc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",kb)}function $b(t,e,n){return Rn(t.app)?Promise.reject(ir(t)):Fb(Ge(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ub(t),r})}function jb(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function qb(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Hb(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function Wb(t){return Ge(t).signOut()}const la="__sak";/**
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
 */class Gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Kb=1e3,zb=10;class Qg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const Gb=Qg;/**
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
 */class Yg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yg.type="SESSION";const Jg=Yg;/**
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
 */function Qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Qb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
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
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Nu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function Jb(t){fn().location.href=t}/**
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
 */function Xg(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function Xb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e0(){return Xg()?self:null}/**
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
 */const Zg="firebaseLocalStorageDb",t0=1,ca="firebaseLocalStorage",e_="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function za(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function n0(){const t=indexedDB.deleteDatabase(Zg);return new Qi(t).toPromise()}function Ic(){const t=indexedDB.open(Zg,t0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:e_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await n0(),e(await Ic()))})})}async function If(t,e,n){const r=za(t,!0).put({[e_]:e,value:n});return new Qi(r).toPromise()}async function r0(t,e){const n=za(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=za(t,!0).delete(e);return new Qi(n).toPromise()}const s0=800,i0=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(e0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xb(),!this.activeServiceWorker)return;this.sender=new Yb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await If(e,la,"1"),await Af(e,la),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>r0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=za(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const o0=t_;new zi(3e4,6e4);/**
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
 */function a0(t,e){return e?Pn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l0(t){return zg(t.auth,new Ou(t),t.bypassAuthState)}function c0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Lb(n,new Ou(t),t.bypassAuthState)}async function u0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),Mb(n,new Ou(t),t.bypassAuthState)}/**
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
 */class n_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l0;case"linkViaPopup":case"linkViaRedirect":return u0;case"reauthViaPopup":case"reauthViaRedirect":return c0;default:nn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const h0=new zi(2e3,1e4);class ts extends n_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h0.get())};e()}}ts.currentPopupAction=null;/**
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
 */const d0="pendingRedirect",Mo=new Map;class f0 extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await p0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p0(t,e){const n=_0(e),r=g0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function m0(t,e){Mo.set(t._key(),e)}function g0(t){return Pn(t._redirectPersistence)}function _0(t){return xo(d0,t.config.apiKey,t.name)}async function y0(t,e,n=!1){if(Rn(t.app))return Promise.reject(ir(t));const r=$r(t),s=a0(r,e),o=await new f0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const v0=10*60*1e3;class E0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v0&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
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
 */async function T0(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
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
 */const I0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A0=/^https?/;async function b0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await T0(t);for(const n of e)try{if(R0(n))return}catch{}nn(t,"unauthorized-domain")}function R0(t){const e=Ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A0.test(n))return!1;if(I0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const S0=new zi(3e4,6e4);function Rf(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C0(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(dn(t,"network-request-failed"))},timeout:S0.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const l=yb("iframefcb");return fn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},qg(`${_b()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function P0(t){return Lo=Lo||C0(t),Lo}/**
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
 */const k0=new zi(5e3,15e3),V0="__/auth/iframe",D0="emulator/auth/iframe",N0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x0(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,D0):`https://${t.config.authDomain}/${V0}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=O0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function M0(t){const e=await P0(t),n=fn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:x0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{i(o)},k0.get());function c(){fn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const L0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},F0=500,U0=600,B0="_blank",$0="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j0(t,e,n,r=F0,s=U0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},L0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=wt().toLowerCase();n&&(l=Mg(h)?B0:n),Og(h)&&(e=e||$0,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[b,V])=>`${y}${b}=${V},`,"");if(lb(h)&&l!=="_self")return q0(e||"",l),new Sf(null);const p=window.open(e||"",l,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Sf(p)}function q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const H0="__/auth/handler",W0="emulator/auth/handler",K0=encodeURIComponent("fac");async function Cf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof Wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${K0}=${encodeURIComponent(c)}`:"";return`${z0(t)}?${Mi(l).slice(1)}${h}`}function z0({config:t}){return t.emulator?Cu(t,W0):`https://${t.authDomain}/${H0}`}/**
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
 */const Ll="webStorageSupport";class G0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=y0,this._overrideRedirectResult=m0}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cf(e,n,r,Ec(),s);return j0(e,o,Nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cf(e,n,r,Ec(),s);return Jb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M0(e),r=new E0(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ll,{type:Ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ll];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||xg()||ku()}}const Q0=G0;var Pf="@firebase/auth",kf="1.7.9";/**
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
 */class Y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function J0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X0(t){ds(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},h=new pb(r,s,i,c);return Ib(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Dr("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new Y0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Pf,kf,J0(t)),rr(Pf,kf,"esm2017")}/**
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
 */const Z0=5*60,eR=Yp("authIdTokenMaxAge")||Z0;let Vf=null;const tR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eR)return;const s=n==null?void 0:n.token;Vf!==s&&(Vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nR(t=em()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tb(t,{popupRedirectResolver:Q0,persistence:[o0,Gb,Jg]}),r=Yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tR(i.toString());qb(n,o,()=>o(n.currentUser)),jb(n,l=>o(l))}}const s=Gp("auth");return s&&Ab(n,`http://${s}`),n}function rR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X0("Browser");const sR={apiKey:"AIzaSyDWwfpAs3seIe4ELuGZkAgrblowz6dKG5o",authDomain:"fratelli-db-29588.firebaseapp.com",projectId:"fratelli-db-29588",storageBucket:"fratelli-db-29588.firebasestorage.app",messagingSenderId:"673725534115",appId:"1:673725534115:web:2f3f22cda85e5aa0499416",measurementId:"G-V5ZVQ1XCJE"},s_=Zp(sR),We=RA(s_),Io=nR(s_);function i_(){const t=ge([]),e=ge([]),n=ge(!1),r=ge(!1);let s=null,i=null;async function o(){const L=He.now(),N=new He(L.seconds-86400,L.nanoseconds);for(const j of e.value)if(j.borrowedAt&&j.borrowedAt.toMillis()<=N.toMillis()){const B=wo(We),G=Ot(We,"workstations",j.workstation);B.update(Ot(We,"borrowRecords",j.id),{returnedAt:Ks()}),B.update(G,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),await B.commit()}}function l(){s||(s=df(Ws(We,"workstations"),L=>{const N=[];L.forEach(j=>{N.push({id:j.id,...j.data()})}),N.sort((j,B)=>j.name.localeCompare(B.name,"nb")),t.value=N,r.value=!0},L=>{console.error("Workstations error:",L),r.value=!0}))}function c(){if(i)return;const L=xA(Ws(We,"borrowRecords"),MA("returnedAt","==",null));i=df(L,N=>{const j=[];N.forEach(B=>{j.push({id:B.id,...B.data()})}),j.sort((B,G)=>{var z,E;return(((z=G.borrowedAt)==null?void 0:z.toMillis())??0)-(((E=B.borrowedAt)==null?void 0:E.toMillis())??0)}),e.value=j,o()},N=>console.error("Active borrows error:",N))}wa(()=>{s&&s(),i&&i()});async function h(L,N,j,B){const G=wo(We),z=Ot(Ws(We,"borrowRecords")),E=Ot(We,"workstations",L);G.update(E,{status:"borrowed",borrower:N,borrowedAt:Ks(),currentBorrowRecord:z.id});const g={workstation:L,borrower:N,phone:j,borrowedAt:Ks(),returnedAt:null,controllers:B??null,anonymizedAt:null};G.set(z,g),await G.commit()}async function d(L){const N=Ot(We,"workstations",L),j=await Nl(N);if(!j.exists())return;const B=j.data(),G=B.currentBorrowRecord,z=B.borrower,E=wo(We);if(E.update(N,{status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null}),G){const g={returnedAt:Ks()};z&&(g.borrower=z),E.update(Ot(We,"borrowRecords",G),g)}await E.commit()}async function p(){const L=await uf(Ws(We,"borrowRecords")),N=[];for(const j of L.docs){const B={id:j.id,...j.data()};B.returnedAt&&N.push(B)}return N.sort((j,B)=>{var G,z;return(((G=B.borrowedAt)==null?void 0:G.toMillis())??0)-(((z=j.borrowedAt)==null?void 0:z.toMillis())??0)}),N}async function y(){const L=He.fromMillis(Date.now()-2592e6),N=await uf(Ws(We,"borrowRecords")),j=wo(We);let B=0;for(const G of N.docs){const z=G.data();z.returnedAt&&z.returnedAt.toMillis()<=L.toMillis()&&!z.anonymizedAt&&(j.update(G.ref,{borrower:"Anonymisert",phone:"",anonymizedAt:Ks()}),B++)}B>0&&await j.commit()}async function b(){const L=[{name:"PlayStation",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PlayStation 2",type:"playstation",keyboard:"Kontroller x2",mouse:"",accessories:""},{name:"PC 1",type:"pc",keyboard:"Keyboard 1",mouse:"Mouse 1",accessories:"Headset"},{name:"PC 2",type:"pc",keyboard:"Keyboard 2",mouse:"Mouse 2",accessories:""},{name:"PC 3",type:"pc",keyboard:"Keyboard 3",mouse:"Mouse 3",accessories:""}];for(const N of L){const j=Ot(We,"workstations",N.name);(await Nl(j)).exists()||await Ol(j,{name:N.name,type:N.type,keyboard:N.keyboard,mouse:N.mouse,accessories:N.accessories,status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}}async function V(L,N,j,B,G){await Ol(Ot(We,"workstations",L),{name:L,type:N,keyboard:j||"",mouse:B||"",accessories:G||"",status:"available",borrower:null,borrowedAt:null,currentBorrowRecord:null})}async function x(L){await hf(Ot(We,"workstations",L))}async function M(L,N){var B;const j=(B=N.newName)==null?void 0:B.trim();if(j&&j!==L){const G=await Nl(Ot(We,"workstations",L));if(!G.exists())return;const z=G.data();await Ol(Ot(We,"workstations",j),{...z,name:j,keyboard:N.keyboard??z.keyboard,mouse:N.mouse??z.mouse,accessories:N.accessories??z.accessories,type:N.type??z.type}),await hf(Ot(We,"workstations",L))}else{const G={};N.keyboard!==void 0&&(G.keyboard=N.keyboard),N.mouse!==void 0&&(G.mouse=N.mouse),N.accessories!==void 0&&(G.accessories=N.accessories),N.type!==void 0&&(G.type=N.type),await UA(Ot(We,"workstations",L),G)}}return{workstations:t,activeBorrows:e,loading:n,workstationsLoaded:r,subscribeWorkstations:l,subscribeActiveBorrows:c,borrowWorkstation:h,returnWorkstation:d,getHistory:p,anonymizeOldRecords:y,seedDefaultWorkstations:b,addWorkstation:V,removeWorkstation:x,updateWorkstation:M}}const Fl=ge(null);let zs=null;function xu(){zs||(zs=Hb(Io,r=>{Fl.value=r})),wa(()=>{zs&&(zs(),zs=null)});async function t(r,s){await $b(Io,r,s)}async function e(){await Wb(Io)}function n(){return Fl.value!==null}return{currentUser:Fl,login:t,logout:e,isAdmin:n,sendPasswordReset:r=>Bb(Io,r)}}const iR={class:"student-layout"},oR={key:0,class:"init-load"},aR={key:1,class:"init-empty"},lR={key:2,class:"ws-scroll"},cR={key:0,class:"ps-row"},uR=["onClick","onKeydown"],hR={class:"ws-bar-inner"},dR={class:"ws-bar-name"},fR={key:0,class:"ws-bar-detail"},pR={class:"ws-row"},mR=["onClick","onKeydown"],gR={class:"ws-block-inner"},_R={class:"ws-block-name"},yR={key:0,class:"ws-block-detail"},vR={class:"modal"},ER={class:"form-group"},wR={class:"form-group"},TR={key:0,class:"form-group"},IR={class:"ctrl-select"},AR={class:"modal-actions"},bR=["disabled"],RR={class:"modal"},SR={class:"form-group"},CR={class:"form-group"},PR={class:"modal-actions"},kR={key:0,class:"error-message"},VR={class:"modal modal-reset"},DR={class:"form-group"},NR={class:"modal-actions"},OR=["disabled"],xR={class:"modal-actions"},MR=Lr({__name:"StudentView",setup(t){const e=Lt("currentView"),n=Lt("showToast"),r=Lt("loading"),{workstations:s,workstationsLoaded:i,subscribeWorkstations:o,borrowWorkstation:l}=i_(),{login:c,sendPasswordReset:h}=xu(),d=ge(!1),p=ge(""),y=ge(!1),b=ge(!1),V=ge(null),x=ge(""),M=ge(""),L=ge(0),N=ge(null),j=ge(!1),B=ge(""),G=ge(""),z=ge(""),E=ge(null);async function g(){z.value="",r.value=!0;try{await c(B.value,G.value),j.value=!1,B.value="",G.value="",e.value="admin"}catch(ce){const F=ce.code;F==="auth/user-not-found"?z.value="Bruker ikke funnet":F==="auth/wrong-password"?z.value="Feil passord":F==="auth/invalid-email"?z.value="Ugyldig e-post":F==="auth/too-many-requests"?z.value="For mange forsøk. Prøv igjen senere.":z.value="Feil e-post eller passord"}finally{r.value=!1}}async function _(){p.value.trim()&&(y.value=!0,await h(p.value.trim()).catch(()=>{}))}const I=es(()=>s.value.filter(ce=>ce.type==="playstation")),A=es(()=>s.value.filter(ce=>ce.type==="pc")),T=es(()=>s.value.find(ce=>ce.id===V.value)),v=es(()=>{var ce;return((ce=T.value)==null?void 0:ce.type)==="playstation"});function _e(ce){V.value=ce,x.value="",M.value="",L.value=0,b.value=!0,bo(()=>{var F;return(F=N.value)==null?void 0:F.focus()})}function Qe(){b.value=!1,V.value=null,x.value="",M.value="",L.value=0}async function Me(){const ce=x.value.trim(),F=M.value.trim();if(!(!ce||!V.value)&&F&&!(v.value&&!L.value)){r.value=!0;try{await l(V.value,ce,F,v.value?L.value:void 0),b.value=!1,n(`Du låner ${V.value}`,"success"),V.value=null,x.value="",M.value=""}catch(Z){console.error(Z),n("Kunne ikke fullføre lånet","error")}finally{r.value=!1}}}return Ea(()=>o()),(ce,F)=>(ee(),re("div",iR,[k("button",{class:"admin-corner",onClick:F[0]||(F[0]=Z=>{j.value=!0,bo(()=>{var Ze;return(Ze=E.value)==null?void 0:Ze.focus()})})},"Admin"),Gn(i)?Gn(s).length===0?(ee(),re("div",aR,[F[18]||(F[18]=k("p",{class:"init-empty-title"},"Ingen enheter enda",-1)),F[19]||(F[19]=k("p",{class:"init-empty-sub"},"Det er ingen enheter å låne ennå. Logg inn som admin for å legge til din første enhet.",-1)),k("button",{class:"btn-get-started",onClick:F[1]||(F[1]=Z=>{j.value=!0,bo(()=>{var Ze;return(Ze=E.value)==null?void 0:Ze.focus()})})},"Kom i gang")])):(ee(),re("div",lR,[I.value.length?(ee(),re("div",cR,[(ee(!0),re(De,null,Sr(I.value,Z=>(ee(),re("div",{key:Z.id,class:Ke(["ws-bar",Z.status]),tabindex:"0",role:"button",onClick:Ze=>Z.status==="available"&&_e(Z.id),onKeydown:Il(Ze=>Z.status==="available"&&_e(Z.id),["enter"])},[k("div",hR,[k("div",dR,Ie(Z.name),1),Z.keyboard?(ee(),re("div",fR,Ie(Z.keyboard),1)):Oe("",!0),k("div",{class:Ke(["ws-block-badge",Z.status])},Ie(Z.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,uR))),128))])):Oe("",!0),k("div",pR,[(ee(!0),re(De,null,Sr(A.value,Z=>(ee(),re("div",{key:Z.id,class:Ke(["ws-block",Z.status]),tabindex:"0",role:"button",onClick:Ze=>Z.status==="available"&&_e(Z.id),onKeydown:Il(Ze=>Z.status==="available"&&_e(Z.id),["enter"])},[k("div",gR,[k("div",_R,Ie(Z.name),1),Z.keyboard||Z.mouse||Z.accessories?(ee(),re("div",yR,Ie([Z.keyboard,Z.mouse,Z.accessories].filter(Boolean).join(" · ")),1)):Oe("",!0),k("div",{class:Ke(["ws-block-badge",Z.status])},Ie(Z.status==="available"?"Trykk for å låne":"Opptatt"),3)])],42,mR))),128))])])):(ee(),re("div",oR,[...F[17]||(F[17]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])),(ee(),Xt(So,{to:"body"},[b.value&&T.value?(ee(),re("div",{key:0,class:"modal-overlay",onClick:Qn(Qe,["self"])},[k("div",vR,[k("h3",null,Ie(T.value.name),1),F[23]||(F[23]=k("p",{class:"modal-sub"},"Skriv navnet ditt for å låne",-1)),k("div",ER,[F[20]||(F[20]=k("label",{for:"name-input"},"Ditt navn",-1)),tt(k("input",{id:"name-input",ref_key:"nameInput",ref:N,"onUpdate:modelValue":F[2]||(F[2]=Z=>x.value=Z),class:"input",placeholder:"Skriv her...",autocomplete:"name",onKeydown:Il(Me,["enter"])},null,544),[[bt,x.value]])]),k("div",wR,[F[21]||(F[21]=k("label",{for:"phone-input"},"Telefon",-1)),tt(k("input",{id:"phone-input","onUpdate:modelValue":F[3]||(F[3]=Z=>M.value=Z),class:"input",type:"tel",placeholder:"12345678",autocomplete:"tel",required:""},null,512),[[bt,M.value]])]),v.value?(ee(),re("div",TR,[F[22]||(F[22]=k("label",{for:"ctrl-input"},"Antall kontrollere",-1)),k("div",IR,[k("button",{class:Ke(["ctrl-btn",{active:L.value===1}]),onClick:F[4]||(F[4]=Z=>L.value=1)},"1",2),k("button",{class:Ke(["ctrl-btn",{active:L.value===2}]),onClick:F[5]||(F[5]=Z=>L.value=2)},"2",2),k("button",{class:Ke(["ctrl-btn",{active:L.value===3}]),onClick:F[6]||(F[6]=Z=>L.value=3)},"3",2),k("button",{class:Ke(["ctrl-btn",{active:L.value===4}]),onClick:F[7]||(F[7]=Z=>L.value=4)},"4",2)])])):Oe("",!0),k("div",AR,[k("button",{class:"btn btn-primary btn-full",disabled:!x.value.trim()||!M.value.trim()||v.value&&!L.value,onClick:Me}," Bekreft lån ",8,bR),k("button",{class:"btn btn-secondary btn-full",onClick:Qe},"Avbryt")])])])):Oe("",!0)])),(ee(),Xt(So,{to:"body"},[j.value?(ee(),re("div",{key:0,class:"modal-overlay",onClick:F[12]||(F[12]=Qn(Z=>j.value=!1,["self"]))},[k("div",RR,[F[27]||(F[27]=k("h3",null,"Admin",-1)),F[28]||(F[28]=k("p",{class:"modal-sub"},"Logg inn for å administrere",-1)),k("form",{onSubmit:Qn(g,["prevent"])},[k("div",SR,[F[24]||(F[24]=k("label",{for:"login-email"},"E-post",-1)),tt(k("input",{id:"login-email",ref_key:"emailInput",ref:E,"onUpdate:modelValue":F[8]||(F[8]=Z=>B.value=Z),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,B.value]])]),k("div",CR,[F[25]||(F[25]=k("label",{for:"login-password"},"Passord",-1)),tt(k("input",{id:"login-password","onUpdate:modelValue":F[9]||(F[9]=Z=>G.value=Z),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,G.value]])]),k("button",{type:"button",class:"btn-text",style:{"margin-top":"4px"},onClick:F[10]||(F[10]=Z=>d.value=!0)},"Glemt passordet?"),k("div",PR,[F[26]||(F[26]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[11]||(F[11]=Z=>j.value=!1)},"Avbryt")]),z.value?(ee(),re("p",kR,Ie(z.value),1)):Oe("",!0)],32)])])):Oe("",!0)])),(ee(),Xt(So,{to:"body"},[d.value?(ee(),re("div",{key:0,class:"modal-overlay",onClick:F[16]||(F[16]=Qn(Z=>d.value=!1,["self"]))},[k("div",VR,[y.value?(ee(),re(De,{key:1},[F[31]||(F[31]=k("h3",null,"Tilbakestill passord",-1)),F[32]||(F[32]=k("p",{class:"modal-sub"},"Hvis e-posten du skrev inn finnes i systemet vårt, vil du motta en tilbakestillingslenke.",-1)),k("div",xR,[k("button",{type:"button",class:"btn btn-primary btn-full",onClick:F[15]||(F[15]=Z=>d.value=!1)},"OK")])],64)):(ee(),re(De,{key:0},[F[30]||(F[30]=k("h3",null,"Tilbakestill passord",-1)),k("form",{onSubmit:Qn(_,["prevent"])},[k("div",DR,[F[29]||(F[29]=k("label",{for:"reset-email"},"E-post",-1)),tt(k("input",{id:"reset-email","onUpdate:modelValue":F[13]||(F[13]=Z=>p.value=Z),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,p.value]])]),k("div",NR,[k("button",{type:"submit",class:"btn btn-primary btn-full",disabled:!p.value.trim()},"Send",8,OR),k("button",{type:"button",class:"btn btn-secondary btn-full",onClick:F[14]||(F[14]=Z=>d.value=!1)},"Lukk")])],32)],64))])])):Oe("",!0)]))]))}}),Rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LR=Rs(MR,[["__scopeId","data-v-aa5d5908"]]),FR={class:"view active"},UR={class:"header"},BR={class:"header-top"},$R={class:"content"},jR={class:"card login-card"},qR={class:"form-group"},HR={class:"form-group"},WR={key:0,class:"error-message"},KR=Lr({__name:"LoginView",setup(t){const e=Lt("currentView");Lt("showToast");const n=Lt("loading"),{login:r}=xu(),s=ge(""),i=ge(""),o=ge("");async function l(){o.value="",n.value=!0;try{await r(s.value,i.value),e.value="admin"}catch(c){const h=c.code;h==="auth/user-not-found"?o.value="Bruker ikke funnet":h==="auth/wrong-password"?o.value="Feil passord":h==="auth/invalid-email"?o.value="Ugyldig e-post":h==="auth/too-many-requests"?o.value="For mange forsøk. Prøv igjen senere.":o.value="Feil e-post eller passord"}finally{n.value=!1}}return(c,h)=>(ee(),re("div",FR,[k("header",UR,[k("div",BR,[k("button",{class:"btn-text back-btn",onClick:h[0]||(h[0]=d=>e.value="student")}," ← Tilbake "),h[3]||(h[3]=k("h1",{class:"header-title"},"Admin",-1))])]),k("main",$R,[k("section",jR,[k("form",{onSubmit:Qn(l,["prevent"])},[k("div",qR,[h[4]||(h[4]=k("label",{for:"login-email"},"E-post",-1)),tt(k("input",{id:"login-email","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"input",type:"email",placeholder:"admin@eksempel.no",autocomplete:"email",required:""},null,512),[[bt,s.value]])]),k("div",HR,[h[5]||(h[5]=k("label",{for:"login-password"},"Passord",-1)),tt(k("input",{id:"login-password","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"input",type:"password",placeholder:"Passord",autocomplete:"current-password",required:""},null,512),[[bt,i.value]])]),h[6]||(h[6]=k("button",{type:"submit",class:"btn btn-primary btn-full"},"Logg inn",-1)),o.value?(ee(),re("p",WR,Ie(o.value),1)):Oe("",!0)],32)])])]))}}),zR=Rs(KR,[["__scopeId","data-v-ae3940d1"]]),GR=["innerHTML"],QR=Lr({__name:"SfIcon",props:{name:{},size:{}},setup(t){const e={gamecontroller:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`};return(n,r)=>(ee(),re("span",{class:"sf-icon",style:pa({width:(t.size??20)+"px",height:(t.size??20)+"px"}),innerHTML:e[t.name]},null,12,GR))}}),wn=Rs(QR,[["__scopeId","data-v-ed5cca7c"]]),YR={class:"sheet-content"},JR=Lr({__name:"BaseSheet",props:{show:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=e,r=ge(null);let s=0,i=0,o=!1;function l(d){if(!r.value)return;const p=r.value.getBoundingClientRect(),y=d.touches[0].clientY;y-p.top<40&&(s=y,o=!0)}function c(d){o&&(d.preventDefault(),i=d.touches[0].clientY-s,i>0&&r.value&&(r.value.style.transform=`translateY(${i}px)`))}function h(){o&&(o=!1,i>100&&r.value&&n("close"),r.value&&(r.value.style.transform=""),i=0)}return(d,p)=>(ee(),Xt(So,{to:"body"},[xe(Vv,{name:"sheet"},{default:_a(()=>[t.show?(ee(),re("div",{key:0,class:"sheet-overlay",onClick:p[0]||(p[0]=Qn(y=>n("close"),["self"]))},[k("div",{ref_key:"sheetRef",ref:r,class:"sheet glass-strong",onTouchstart:l,onTouchmove:c,onTouchend:h},[p[1]||(p[1]=k("div",{class:"sheet-handle"},null,-1)),k("div",YR,[Uy(d.$slots,"default",{},void 0,!0)])],544)])):Oe("",!0)]),_:3})]))}}),o_=Rs(JR,[["__scopeId","data-v-af530b9a"]]),XR={class:"confirm-head"},ZR={key:0,class:"confirm-message"},eS={class:"confirm-actions"},tS=Lr({__name:"ConfirmSheet",props:{show:{type:Boolean},title:{},message:{},confirmLabel:{},cancelLabel:{},danger:{type:Boolean}},emits:["confirm","close"],setup(t,{emit:e}){const n=e;return(r,s)=>(ee(),Xt(o_,{show:t.show,onClose:s[2]||(s[2]=i=>n("close"))},{default:_a(()=>[k("div",XR,[k("h3",null,Ie(t.title),1),t.message?(ee(),re("p",ZR,Ie(t.message),1)):Oe("",!0)]),k("div",eS,[k("button",{class:Ke(["confirm-btn confirm-primary",{danger:t.danger}]),onClick:s[0]||(s[0]=i=>n("confirm"))},Ie(t.confirmLabel),3),k("button",{class:"confirm-btn confirm-cancel",onClick:s[1]||(s[1]=i=>n("close"))},Ie(t.cancelLabel??"Avbryt"),1)])]),_:1},8,["show"]))}}),nS=Rs(tS,[["__scopeId","data-v-321b7902"]]),rS={class:"admin-split"},sS={class:"sidebar-nav"},iS=["onClick"],oS={class:"sidebar-footer"},aS={class:"sidebar-email"},lS={class:"admin-content"},cS={key:0,class:"empty-state"},uS={key:1,class:"card-list"},hS={class:"card-body"},dS={class:"card-title"},fS={class:"card-meta"},pS={key:0},mS={class:"card-meta"},gS=["onClick"],_S={key:0,class:"empty-state"},yS={key:1,class:"card-list"},vS={class:"card-body"},ES={class:"card-title"},wS={class:"card-meta"},TS={key:0},IS={class:"card-meta"},AS={key:1},bS={class:"card-list manage-list"},RS={key:0,class:"empty-state"},SS={key:1,class:"empty-state empty-state-cta"},CS={key:0,class:"edit-inline"},PS={class:"form-group"},kS={class:"type-picker",style:{"margin-bottom":"8px"}},VS=["placeholder"],DS={class:"card-body"},NS={class:"card-title"},OS={class:"card-meta"},xS=["onClick"],MS=["onClick"],LS={class:"form-group"},FS={class:"form-group"},US={class:"type-picker"},BS={class:"form-group"},$S={for:"sheet-new-keyboard"},jS=["placeholder"],qS={key:0,class:"form-group"},HS={key:1,class:"form-group"},WS=Lr({__name:"AdminView",setup(t){const e=Lt("currentView"),n=Lt("showToast"),r=Lt("loading"),{currentUser:s,logout:i}=xu(),{workstations:o,workstationsLoaded:l,activeBorrows:c,subscribeWorkstations:h,subscribeActiveBorrows:d,returnWorkstation:p,getHistory:y,anonymizeOldRecords:b,addWorkstation:V,removeWorkstation:x,updateWorkstation:M}=i_(),L=ge("borrows"),N=ge(!1),j=[{key:"borrows",label:"Utlån",icon:"list"},{key:"history",label:"Historikk",icon:"clock"},{key:"manage",label:"Enheter",icon:"gear"}],B=es(()=>{var C;return((C=s.value)==null?void 0:C.email)??""}),G=ge([]),z=ge(!1),E=ge(""),g=ge("pc"),_=ge(""),I=ge(""),A=ge("");function T(){E.value="",_.value="",I.value="",A.value="",g.value="pc",z.value=!0}async function v(){await i(),e.value="student"}async function _e(C){r.value=!0;try{await p(C),n(`${C} er returnert`,"success")}catch(S){console.error(S),n("Kunne ikke returnere","error")}finally{r.value=!1}}async function Qe(){r.value=!0;try{await b(),G.value=await y()}catch(C){console.error(C),n("Kunne ikke laste historikk","error")}finally{r.value=!1}}async function Me(){if(E.value.trim()){r.value=!0;try{await V(E.value.trim(),g.value,_.value.trim(),I.value.trim(),A.value.trim()),n(`${E.value} er lagt til`,"success"),E.value="",_.value="",I.value="",A.value="",z.value=!1}catch(C){console.error(C),n("Kunne ikke legge til enheten","error")}finally{r.value=!1}}}async function ce(C){r.value=!0;try{await x(C),n(`${C} er fjernet`,"success")}catch(S){console.error(S),n("Kunne ikke fjerne enheten","error")}finally{r.value=!1}}const F=ge(null);function Z(C){F.value=C}function Ze(){F.value=null}function Gt(){const C=F.value;C&&(F.value=null,C.onConfirm())}const Pe=ge(null),Ue=ge(""),Dt=ge("pc"),Ft=ge(""),Ut=ge(""),Ct=ge("");function fr(C){Pe.value=C.id,Ue.value=C.name,Dt.value=C.type,Ft.value=C.keyboard||"",Ut.value=C.mouse||"",Ct.value=C.accessories||""}function jr(){Pe.value=null}async function Bt(){if(Pe.value){r.value=!0;try{await M(Pe.value,{newName:Ue.value.trim(),type:Dt.value,keyboard:Ft.value.trim(),mouse:Ut.value.trim(),accessories:Ct.value.trim()}),n(`${Pe.value} er oppdatert`,"success"),Pe.value=null}catch(C){console.error(C),n("Kunne ikke oppdatere enheten","error")}finally{r.value=!1}}}function pr(C){L.value=C,N.value=!1,C==="history"&&(G.value=[],Qe())}function w(C){if(!C)return"—";const S=C.toDate?C.toDate():new Date(C);return`${String(S.getDate()).padStart(2,"0")}.${String(S.getMonth()+1).padStart(2,"0")} ${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}`}function R(C){if(!C)return"—";const S=C.toDate?C.toDate():new Date(C);return`${String(S.getDate()).padStart(2,"0")}.${String(S.getMonth()+1).padStart(2,"0")}.${S.getFullYear()} ${String(S.getHours()).padStart(2,"0")}:${String(S.getMinutes()).padStart(2,"0")}`}return Ea(()=>{h(),d()}),(C,S)=>{var H,q,Y,K;return ee(),re(De,null,[k("div",rS,[k("button",{class:Ke(["menu-toggle",{hidden:N.value||F.value!==null||z.value}]),onClick:S[0]||(S[0]=D=>N.value=!0),"aria-label":"Åpne meny"},[xe(wn,{name:"line.3.horizontal",size:22}),S[16]||(S[16]=k("span",null,"Meny",-1))],2),N.value?(ee(),re("div",{key:0,class:"sidebar-backdrop",onClick:S[1]||(S[1]=D=>N.value=!1)})):Oe("",!0),k("aside",{class:Ke(["sidebar",{open:N.value}])},[k("div",{class:"sidebar-top"},[S[17]||(S[17]=k("div",{class:"sidebar-title"},"Admin",-1)),k("button",{class:"sidebar-logout",onClick:v}," Logg ut ")]),k("nav",sS,[(ee(),re(De,null,Sr(j,D=>k("button",{key:D.key,class:Ke(["sidebar-item",{active:L.value===D.key}]),onClick:U=>pr(D.key)},[xe(wn,{name:D.icon,size:20},null,8,["name"]),k("span",null,Ie(D.label),1)],10,iS)),64))]),k("div",oS,[k("div",aS,Ie(B.value),1)])],2),k("main",lS,[tt(k("section",null,[S[18]||(S[18]=k("h2",{class:"section-title"},"Utlån",-1)),Gn(c).length===0?(ee(),re("div",cS,"Ingen utlån")):(ee(),re("div",uS,[(ee(!0),re(De,null,Sr(Gn(c),D=>(ee(),re("div",{key:D.id,class:"card-row"},[k("div",hS,[k("div",dS,Ie(D.workstation),1),k("div",fS,[Ht(Ie(D.borrower),1),D.phone?(ee(),re("span",pS," · "+Ie(D.phone),1)):Oe("",!0)]),k("div",mS,[D.controllers?(ee(),re(De,{key:0},[xe(wn,{name:"gamecontroller",size:12}),Ht(" "+Ie(D.controllers)+" kontrollere · ",1)],64)):Oe("",!0),Ht(" "+Ie(w(D.borrowedAt)),1)])]),k("button",{class:"btn-return",onClick:U=>Z({title:`Returner ${D.workstation}?`,message:"Enheten blir tilgjengelig igjen etter retur.",confirmLabel:"Returner",onConfirm:()=>_e(D.workstation)})},"Returner",8,gS)]))),128))]))],512),[[vl,L.value==="borrows"]]),tt(k("section",null,[S[19]||(S[19]=k("h2",{class:"section-title"},"Historikk",-1)),G.value.length===0?(ee(),re("div",_S,"Ingen historikk")):(ee(),re("div",yS,[(ee(!0),re(De,null,Sr(G.value,D=>(ee(),re("div",{key:D.id,class:"card-row history-row"},[k("div",vS,[k("div",ES,Ie(D.workstation),1),k("div",wS,[Ht(Ie(D.borrower),1),D.phone?(ee(),re("span",TS," · "+Ie(D.phone),1)):Oe("",!0)]),k("div",IS,[D.controllers?(ee(),re(De,{key:0},[xe(wn,{name:"gamecontroller",size:12}),Ht(" "+Ie(D.controllers)+" kontrollere · ",1)],64)):Oe("",!0),Ht(" Lånt "+Ie(R(D.borrowedAt))+" ",1),D.returnedAt?(ee(),re("span",AS," | retur "+Ie(R(D.returnedAt)),1)):Oe("",!0)])]),k("span",{class:Ke(["card-status",D.returnedAt?"returned":"active"])},Ie(D.returnedAt?"Returnert":"Aktiv"),3)]))),128))]))],512),[[vl,L.value==="history"]]),tt(k("section",null,[k("div",{class:"manage-header"},[S[20]||(S[20]=k("h2",{class:"section-title"},"Enheter",-1)),k("button",{class:"btn-add-fab",onClick:T,"aria-label":"Legg til enhet"},"+")]),k("div",bS,[Gn(l)?Gn(o).length===0?(ee(),re("div",SS,[S[21]||(S[21]=k("p",null,"Ingen enheter",-1)),S[22]||(S[22]=k("p",{class:"empty-state-sub"},"Du har ingen enheter ennå. Legg til din første enhet for å komme i gang.",-1)),k("button",{class:"btn-get-started",onClick:T},"Kom i gang")])):(ee(!0),re(De,{key:2},Sr(Gn(o),D=>(ee(),re("div",{key:D.id,class:"card-row manage-row"},[Pe.value===D.id?(ee(),re("div",CS,[k("div",PS,[S[23]||(S[23]=k("label",null,"Navn",-1)),tt(k("input",{"onUpdate:modelValue":S[2]||(S[2]=U=>Ue.value=U),class:"input",placeholder:"Navn"},null,512),[[bt,Ue.value]])]),k("div",kS,[k("button",{type:"button",class:Ke(["type-btn",{active:Dt.value==="pc"}]),onClick:S[3]||(S[3]=U=>Dt.value="pc")},[xe(wn,{name:"desktopcomputer",size:16}),S[24]||(S[24]=Ht(" PC ",-1))],2),k("button",{type:"button",class:Ke(["type-btn",{active:Dt.value==="playstation"}]),onClick:S[4]||(S[4]=U=>Dt.value="playstation")},[xe(wn,{name:"gamecontroller",size:16}),S[25]||(S[25]=Ht(" PS ",-1))],2)]),tt(k("input",{"onUpdate:modelValue":S[5]||(S[5]=U=>Ft.value=U),class:"input",placeholder:Dt.value==="playstation"?"Tilbehør":"Tastatur",style:{"margin-bottom":"6px"}},null,8,VS),[[bt,Ft.value]]),Dt.value==="pc"?tt((ee(),re("input",{key:0,"onUpdate:modelValue":S[6]||(S[6]=U=>Ut.value=U),class:"input",placeholder:"Mus",style:{"margin-bottom":"6px"}},null,512)),[[bt,Ut.value]]):Oe("",!0),Dt.value==="pc"?tt((ee(),re("input",{key:1,"onUpdate:modelValue":S[7]||(S[7]=U=>Ct.value=U),class:"input",placeholder:"Annet tilbehør",style:{"margin-bottom":"6px"}},null,512)),[[bt,Ct.value]]):Oe("",!0),k("div",{class:"edit-actions"},[k("button",{class:"btn-return",onClick:Bt},"Lagre"),k("button",{class:"btn-remove",onClick:jr},"Avbryt")])])):(ee(),re(De,{key:1},[k("div",DS,[k("div",NS,[xe(wn,{name:D.type==="playstation"?"gamecontroller":"desktopcomputer",size:16},null,8,["name"]),Ht(" "+Ie(D.name),1)]),k("div",OS,Ie(D.status==="available"?"Ledig":"Utlånt"),1)]),D.status==="available"?(ee(),re("button",{key:0,class:"btn-edit",onClick:U=>fr(D)},"Rediger",8,xS)):Oe("",!0),D.status==="available"?(ee(),re("button",{key:1,class:"btn-remove",onClick:U=>Z({title:`Fjern ${D.name}?`,message:"Enheten og dens lån blir slettet.",confirmLabel:"Fjern",danger:!0,onConfirm:()=>ce(D.name)})},"Fjern",8,MS)):Oe("",!0)],64))]))),128)):(ee(),re("div",RS,"Laster..."))])],512),[[vl,L.value==="manage"]])])]),xe(nS,{show:F.value!==null,title:((H=F.value)==null?void 0:H.title)??"",message:(q=F.value)==null?void 0:q.message,"confirm-label":((Y=F.value)==null?void 0:Y.confirmLabel)??"OK",danger:(K=F.value)==null?void 0:K.danger,onConfirm:Gt,onClose:Ze},null,8,["show","title","message","confirm-label","danger"]),xe(o_,{show:z.value,onClose:S[15]||(S[15]=D=>z.value=!1)},{default:_a(()=>[S[33]||(S[33]=k("h3",{style:{"font-size":"1.0625rem","font-weight":"600","margin-bottom":"16px",color:"#ffffff"}},"Ny enhet",-1)),k("form",{onSubmit:Qn(Me,["prevent"])},[k("div",LS,[S[26]||(S[26]=k("label",{for:"sheet-new-name"},"Navn",-1)),tt(k("input",{id:"sheet-new-name","onUpdate:modelValue":S[8]||(S[8]=D=>E.value=D),class:"input",placeholder:"F.eks. PC 4",required:""},null,512),[[bt,E.value]])]),k("div",FS,[S[29]||(S[29]=k("label",null,"Type",-1)),k("div",US,[k("button",{type:"button",class:Ke(["type-btn",{active:g.value==="pc"}]),onClick:S[9]||(S[9]=D=>g.value="pc")},[xe(wn,{name:"desktopcomputer",size:18}),S[27]||(S[27]=Ht(" PC ",-1))],2),k("button",{type:"button",class:Ke(["type-btn",{active:g.value==="playstation"}]),onClick:S[10]||(S[10]=D=>g.value="playstation")},[xe(wn,{name:"gamecontroller",size:18}),S[28]||(S[28]=Ht(" PlayStation ",-1))],2)])]),k("div",BS,[k("label",$S,Ie(g.value==="playstation"?"Tilbehør":"Tastatur"),1),tt(k("input",{id:"sheet-new-keyboard","onUpdate:modelValue":S[11]||(S[11]=D=>_.value=D),class:"input",placeholder:g.value==="playstation"?"F.eks. Kontroller x2, ladestasjon":"F.eks. Tastatur 4"},null,8,jS),[[bt,_.value]])]),g.value==="pc"?(ee(),re("div",qS,[S[30]||(S[30]=k("label",{for:"sheet-new-mouse"},"Mus",-1)),tt(k("input",{id:"sheet-new-mouse","onUpdate:modelValue":S[12]||(S[12]=D=>I.value=D),class:"input",placeholder:"F.eks. Mus 4"},null,512),[[bt,I.value]])])):Oe("",!0),g.value==="pc"?(ee(),re("div",HS,[S[31]||(S[31]=k("label",{for:"sheet-new-accessories"},"Annet tilbehør",-1)),tt(k("input",{id:"sheet-new-accessories","onUpdate:modelValue":S[13]||(S[13]=D=>A.value=D),class:"input",placeholder:"F.eks. Headset"},null,512),[[bt,A.value]])])):Oe("",!0),S[32]||(S[32]=k("button",{type:"submit",class:"btn-submit",style:{"margin-top":"8px"}},"Legg til",-1)),k("button",{type:"button",class:"btn btn-secondary btn-full",style:{"margin-top":"10px"},onClick:S[14]||(S[14]=D=>z.value=!1)},"Avbryt")],32)]),_:1},8,["show"])],64)}}}),KS=Rs(WS,[["__scopeId","data-v-b6e2cb59"]]),zS={id:"toast-container"},GS={key:0,id:"loading-overlay"},QS=Lr({__name:"App",setup(t){const e=ge("student"),n=ge([]);let r=0;function s(o,l="info"){const c=++r;n.value.push({id:c,message:o,type:l}),setTimeout(()=>{const h=n.value.findIndex(d=>d.id===c);h!==-1&&n.value.splice(h,1)},3e3)}Ro("showToast",s),Ro("currentView",e);const i=ge(!1);return Ro("loading",i),(o,l)=>(ee(),re(De,null,[k("div",zS,[(ee(!0),re(De,null,Sr(n.value,c=>(ee(),re("div",{key:c.id,class:Ke(["toast glass",c.type])},Ie(c.message),3))),128))]),i.value?(ee(),re("div",GS,[...l[0]||(l[0]=[k("div",{class:"loader-ring"},null,-1),k("p",null,"Laster...",-1)])])):Oe("",!0),e.value==="student"?(ee(),Xt(LR,{key:1})):e.value==="login"?(ee(),Xt(zR,{key:2})):e.value==="admin"?(ee(),Xt(KS,{key:3})):Oe("",!0)],64))}});iE(QS).mount("#app");
