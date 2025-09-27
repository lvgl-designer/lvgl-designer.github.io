const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.html-D68JtU0h.js","assets/qq-Dpko7kdl.js","assets/get-started.html-BWfaEZvw.js","assets/anyui-simulator-9x0RPKL1.js","assets/2_layout.html-OWnuwoMo.js","assets/widget-alignment-DGu6OLsq.js","assets/3_resource.html-ZM4V_bz7.js","assets/anyui-resource-fonts-C8bGQmra.js","assets/4_composite.html-CbmvNIDf.js","assets/anyui-composite-setting-DbIjVhZS.js","assets/5_hide_lock.html-BnjQerR9.js","assets/anyui-lock-CTL_SKZJ.js","assets/7_scr_mgmt.html-DRQJGW1Q.js","assets/navigate_bar-DDhDZBVs.js","assets/8_globalcomponents.html-BLa7yX5m.js","assets/global_status_bar-2NVXGzc8.js","assets/release-v0.15.0.html-CbeDMoEL.js","assets/v0.15.0-1-D6gXMNN7.js","assets/index.html-BqJhGaKc.js","assets/get-started.html-DwC740Xn.js","assets/0_intro.html-DFp7i-6C.js","assets/hoc-bar-DrWIOkMT.js","assets/1_statebtn.html-BTSgveI4.js","assets/statebtn-square--BBYt9UZ.js","assets/2_labelslider.html-Dp4Tmfsb.js","assets/labelslider-setting-full-DoQ9x0_I.js","assets/2_layout.html-BFsrCRFI.js","assets/3_resource.html-CD7nVNQx.js","assets/4_composite.html-BwYyPU1N.js","assets/5_hide_and_lock.html-BS3n7F6i.js","assets/7_scr_mgmt.html-DmFFTMOh.js","assets/8_globalcomponents.html-G-u1Xam2.js","assets/release-v0.15.0.html-CPaZcAjX.js","assets/0_intro.html-1MAfIEzF.js","assets/1_statebtn.html-Y_-jlC31.js","assets/2_labelslider.html-C7jFbQRa.js"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},bn=[],yt=()=>{},rs=()=>!1,ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xi=e=>e.startsWith("onUpdate:"),ze=Object.assign,Zi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vc=Object.prototype.hasOwnProperty,me=(e,t)=>vc.call(e,t),ie=Array.isArray,yn=e=>Jo(e)==="[object Map]",ls=e=>Jo(e)==="[object Set]",le=e=>typeof e=="function",Ae=e=>typeof e=="string",Ft=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",ss=e=>(Le(e)||le(e))&&le(e.then)&&le(e.catch),as=Object.prototype.toString,Jo=e=>as.call(e),_c=e=>Jo(e).slice(8,-1),cs=e=>Jo(e)==="[object Object]",er=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=Yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bc=/-(\w)/g,et=Yo(e=>e.replace(bc,(t,n)=>n?n.toUpperCase():"")),yc=/\B([A-Z])/g,Yt=Yo(e=>e.replace(yc,"-$1").toLowerCase()),co=Yo(e=>e.charAt(0).toUpperCase()+e.slice(1)),pi=Yo(e=>e?`on${co(e)}`:""),Gt=(e,t)=>!Object.is(e,t),mi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},us=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},wc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Sc=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let Fr;const Xo=()=>Fr||(Fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],i=Ae(o)?kc(o):Rn(o);if(i)for(const r in i)t[r]=i[r]}return t}else if(Ae(e)||Le(e))return e}const Ec=/;(?![^(]*\))/g,Lc=/:([^]+)/,Cc=/\/\*[^]*?\*\//g;function kc(e){const t={};return e.replace(Cc,"").split(Ec).forEach(n=>{if(n){const o=n.split(Lc);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ye(e){let t="";if(Ae(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const o=Ye(e[n]);o&&(t+=o+" ")}else if(Le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function gi(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ae(t)&&(e.class=Ye(t)),n&&(e.style=Rn(n)),e}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=Yi(xc);function ds(e){return!!e||e===""}const fs=e=>!!(e&&e.__v_isRef===!0),Ie=e=>Ae(e)?e:e==null?"":ie(e)||Le(e)&&(e.toString===as||!le(e.toString))?fs(e)?Ie(e.value):JSON.stringify(e,hs,2):String(e),hs=(e,t)=>fs(t)?hs(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,i],r)=>(n[vi(o,r)+" =>"]=i,n),{})}:ls(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vi(n))}:Ft(t)?vi(t):Le(t)&&!ie(t)&&!cs(t)?String(t):t,vi=(e,t="")=>{var n;return Ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Ic{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ge,!t&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ps(){return Ge}function Ac(e,t=!1){Ge&&Ge.cleanups.push(e)}let Ee;const _i=new WeakSet;class ms{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_i.has(this)&&(_i.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vr(this),_s(this);const t=Ee,n=ft;Ee=this,ft=!0;try{return this.fn()}finally{bs(this),Ee=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)or(t);this.deps=this.depsTail=void 0,Vr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_i.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zi(this)&&this.run()}get dirty(){return zi(this)}}let gs=0,Bn,jn;function vs(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Bn,Bn=e}function tr(){gs++}function nr(){if(--gs>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Bn;){let t=Bn;for(Bn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function _s(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function bs(e){let t,n=e.depsTail,o=n;for(;o;){const i=o.prevDep;o.version===-1?(o===n&&(n=i),or(o),Rc(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}e.deps=t,e.depsTail=n}function zi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ys(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ys(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yn)||(e.globalVersion=Yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!zi(e))))return;e.flags|=2;const t=e.dep,n=Ee,o=ft;Ee=e,ft=!0;try{_s(e);const i=e.fn(e._value);(t.version===0||Gt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ee=n,ft=o,bs(e),e.flags&=-3}}function or(e,t=!1){const{dep:n,prevSub:o,nextSub:i}=e;if(o&&(o.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)or(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ft=!0;const ws=[];function Dt(){ws.push(ft),ft=!1}function Mt(){const e=ws.pop();ft=e===void 0?!0:e}function Vr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ee;Ee=void 0;try{t()}finally{Ee=n}}}let Yn=0;class Oc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ee||!ft||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new Oc(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,Ss(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=o)}return n}trigger(t){this.version++,Yn++,this.notify(t)}notify(t){tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nr()}}}function Ss(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Ss(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ho=new WeakMap,ln=Symbol(""),Fi=Symbol(""),Xn=Symbol("");function qe(e,t,n){if(ft&&Ee){let o=Ho.get(e);o||Ho.set(e,o=new Map);let i=o.get(n);i||(o.set(n,i=new Zo),i.map=o,i.key=n),i.track()}}function At(e,t,n,o,i,r){const l=Ho.get(e);if(!l){Yn++;return}const s=a=>{a&&a.trigger()};if(tr(),t==="clear")l.forEach(s);else{const a=ie(e),c=a&&er(n);if(a&&n==="length"){const u=Number(o);l.forEach((d,h)=>{(h==="length"||h===Xn||!Ft(h)&&h>=u)&&s(d)})}else switch((n!==void 0||l.has(void 0))&&s(l.get(n)),c&&s(l.get(Xn)),t){case"add":a?c&&s(l.get("length")):(s(l.get(ln)),yn(e)&&s(l.get(Fi)));break;case"delete":a||(s(l.get(ln)),yn(e)&&s(l.get(Fi)));break;case"set":yn(e)&&s(l.get(ln));break}}nr()}function Pc(e,t){const n=Ho.get(e);return n&&n.get(t)}function hn(e){const t=he(e);return t===e?t:(qe(t,"iterate",Xn),ct(e)?t:t.map(Ve))}function ei(e){return qe(e=he(e),"iterate",Xn),e}const Dc={__proto__:null,[Symbol.iterator](){return bi(this,Symbol.iterator,Ve)},concat(...e){return hn(this).concat(...e.map(t=>ie(t)?hn(t):t))},entries(){return bi(this,"entries",e=>(e[1]=Ve(e[1]),e))},every(e,t){return Et(this,"every",e,t,void 0,arguments)},filter(e,t){return Et(this,"filter",e,t,n=>n.map(Ve),arguments)},find(e,t){return Et(this,"find",e,t,Ve,arguments)},findIndex(e,t){return Et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Et(this,"findLast",e,t,Ve,arguments)},findLastIndex(e,t){return Et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Et(this,"forEach",e,t,void 0,arguments)},includes(...e){return yi(this,"includes",e)},indexOf(...e){return yi(this,"indexOf",e)},join(e){return hn(this).join(e)},lastIndexOf(...e){return yi(this,"lastIndexOf",e)},map(e,t){return Et(this,"map",e,t,void 0,arguments)},pop(){return zn(this,"pop")},push(...e){return zn(this,"push",e)},reduce(e,...t){return Hr(this,"reduce",e,t)},reduceRight(e,...t){return Hr(this,"reduceRight",e,t)},shift(){return zn(this,"shift")},some(e,t){return Et(this,"some",e,t,void 0,arguments)},splice(...e){return zn(this,"splice",e)},toReversed(){return hn(this).toReversed()},toSorted(e){return hn(this).toSorted(e)},toSpliced(...e){return hn(this).toSpliced(...e)},unshift(...e){return zn(this,"unshift",e)},values(){return bi(this,"values",Ve)}};function bi(e,t,n){const o=ei(e),i=o[t]();return o!==e&&!ct(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Mc=Array.prototype;function Et(e,t,n,o,i,r){const l=ei(e),s=l!==e&&!ct(e),a=l[t];if(a!==Mc[t]){const d=a.apply(e,r);return s?Ve(d):d}let c=n;l!==e&&(s?c=function(d,h){return n.call(this,Ve(d),h,e)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,e)}));const u=a.call(l,c,o);return s&&i?i(u):u}function Hr(e,t,n,o){const i=ei(e);let r=n;return i!==e&&(ct(e)?n.length>3&&(r=function(l,s,a){return n.call(this,l,s,a,e)}):r=function(l,s,a){return n.call(this,l,Ve(s),a,e)}),i[t](r,...o)}function yi(e,t,n){const o=he(e);qe(o,"iterate",Xn);const i=o[t](...n);return(i===-1||i===!1)&&ir(n[0])?(n[0]=he(n[0]),o[t](...n)):i}function zn(e,t,n=[]){Dt(),tr();const o=he(e)[t].apply(e,n);return nr(),Mt(),o}const zc=Yi("__proto__,__v_isRef,__isVue"),Es=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft));function Fc(e){Ft(e)||(e=String(e));const t=he(this);return qe(t,"has",e),t.hasOwnProperty(e)}class Ls{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(i?r?As:Is:r?Ts:xs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const l=ie(t);if(!i){let a;if(l&&(a=Dc[n]))return a;if(n==="hasOwnProperty")return Fc}const s=Reflect.get(t,n,Pe(t)?t:o);return(Ft(n)?Es.has(n):zc(n))||(i||qe(t,"get",n),r)?s:Pe(s)?l&&er(n)?s:s.value:Le(s)?i?ni(s):dn(s):s}}class Cs extends Ls{constructor(t=!1){super(!1,t)}set(t,n,o,i){let r=t[n];if(!this._isShallow){const a=Kt(r);if(!ct(o)&&!Kt(o)&&(r=he(r),o=he(o)),!ie(t)&&Pe(r)&&!Pe(o))return a||(r.value=o),!0}const l=ie(t)&&er(n)?Number(n)<t.length:me(t,n),s=Reflect.set(t,n,o,Pe(t)?t:i);return t===he(i)&&(l?Gt(o,r)&&At(t,"set",n,o):At(t,"add",n,o)),s}deleteProperty(t,n){const o=me(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&o&&At(t,"delete",n,void 0),i}has(t,n){const o=Reflect.has(t,n);return(!Ft(n)||!Es.has(n))&&qe(t,"has",n),o}ownKeys(t){return qe(t,"iterate",ie(t)?"length":ln),Reflect.ownKeys(t)}}class ks extends Ls{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vc=new Cs,Hc=new ks,Nc=new Cs(!0),$c=new ks(!0),Vi=e=>e,wo=e=>Reflect.getPrototypeOf(e);function Uc(e,t,n){return function(...o){const i=this.__v_raw,r=he(i),l=yn(r),s=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,c=i[e](...o),u=n?Vi:t?No:Ve;return!t&&qe(r,"iterate",a?Fi:ln),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function So(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bc(e,t){const n={get(i){const r=this.__v_raw,l=he(r),s=he(i);e||(Gt(i,s)&&qe(l,"get",i),qe(l,"get",s));const{has:a}=wo(l),c=t?Vi:e?No:Ve;if(a.call(l,i))return c(r.get(i));if(a.call(l,s))return c(r.get(s));r!==l&&r.get(i)},get size(){const i=this.__v_raw;return!e&&qe(he(i),"iterate",ln),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,l=he(r),s=he(i);return e||(Gt(i,s)&&qe(l,"has",i),qe(l,"has",s)),i===s?r.has(i):r.has(i)||r.has(s)},forEach(i,r){const l=this,s=l.__v_raw,a=he(s),c=t?Vi:e?No:Ve;return!e&&qe(a,"iterate",ln),s.forEach((u,d)=>i.call(r,c(u),c(d),l))}};return ze(n,e?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(i){!t&&!ct(i)&&!Kt(i)&&(i=he(i));const r=he(this);return wo(r).has.call(r,i)||(r.add(i),At(r,"add",i,i)),this},set(i,r){!t&&!ct(r)&&!Kt(r)&&(r=he(r));const l=he(this),{has:s,get:a}=wo(l);let c=s.call(l,i);c||(i=he(i),c=s.call(l,i));const u=a.call(l,i);return l.set(i,r),c?Gt(r,u)&&At(l,"set",i,r):At(l,"add",i,r),this},delete(i){const r=he(this),{has:l,get:s}=wo(r);let a=l.call(r,i);a||(i=he(i),a=l.call(r,i)),s&&s.call(r,i);const c=r.delete(i);return a&&At(r,"delete",i,void 0),c},clear(){const i=he(this),r=i.size!==0,l=i.clear();return r&&At(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Uc(i,e,t)}),n}function ti(e,t){const n=Bc(e,t);return(o,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(me(n,i)&&i in o?n:o,i,r)}const jc={get:ti(!1,!1)},Wc={get:ti(!1,!0)},Gc={get:ti(!0,!1)},qc={get:ti(!0,!0)},xs=new WeakMap,Ts=new WeakMap,Is=new WeakMap,As=new WeakMap;function Kc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qc(e){return e.__v_skip||!Object.isExtensible(e)?0:Kc(_c(e))}function dn(e){return Kt(e)?e:oi(e,!1,Vc,jc,xs)}function Rs(e){return oi(e,!1,Nc,Wc,Ts)}function ni(e){return oi(e,!0,Hc,Gc,Is)}function Jc(e){return oi(e,!0,$c,qc,As)}function oi(e,t,n,o,i){if(!Le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Qc(e);if(r===0)return e;const l=i.get(e);if(l)return l;const s=new Proxy(e,r===2?o:n);return i.set(e,s),s}function sn(e){return Kt(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function ir(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Yc(e){return!me(e,"__v_skip")&&Object.isExtensible(e)&&us(e,"__v_skip",!0),e}const Ve=e=>Le(e)?dn(e):e,No=e=>Le(e)?ni(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function De(e){return Os(e,!1)}function we(e){return Os(e,!0)}function Os(e,t){return Pe(e)?e:new Xc(e,t)}class Xc{constructor(t,n){this.dep=new Zo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:Ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||ct(t)||Kt(t);t=o?t:he(t),Gt(t,n)&&(this._rawValue=t,this._value=o?t:Ve(t),this.dep.trigger())}}function Y(e){return Pe(e)?e.value:e}function ve(e){return le(e)?e():Y(e)}const Zc={get:(e,t,n)=>t==="__v_raw"?e:Y(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,o)}};function Ps(e){return sn(e)?e:new Proxy(e,Zc)}class eu{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Zo,{get:o,set:i}=t(n.track.bind(n),n.trigger.bind(n));this._get=o,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Ds(e){return new eu(e)}function rr(e){const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=zs(e,n);return t}class tu{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Pc(he(this._object),this._key)}}class nu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ms(e,t,n){return Pe(e)?e:le(e)?new nu(e):Le(e)&&arguments.length>1?zs(e,t,n):De(e)}function zs(e,t,n){const o=e[t];return Pe(o)?o:new tu(e,t,n)}class ou{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return vs(this,!0),!0}get value(){const t=this.dep.track();return ys(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function iu(e,t,n=!1){let o,i;return le(e)?o=e:(o=e.get,i=e.set),new ou(o,i,n)}const Eo={},$o=new WeakMap;let nn;function ru(e,t=!1,n=nn){if(n){let o=$o.get(n);o||$o.set(n,o=[]),o.push(e)}}function lu(e,t,n=be){const{immediate:o,deep:i,once:r,scheduler:l,augmentJob:s,call:a}=n,c=_=>i?_:ct(_)||i===!1||i===0?Rt(_,1):Rt(_);let u,d,h,p,v=!1,b=!1;if(Pe(e)?(d=()=>e.value,v=ct(e)):sn(e)?(d=()=>c(e),v=!0):ie(e)?(b=!0,v=e.some(_=>sn(_)||ct(_)),d=()=>e.map(_=>{if(Pe(_))return _.value;if(sn(_))return c(_);if(le(_))return a?a(_,2):_()})):le(e)?t?d=a?()=>a(e,2):e:d=()=>{if(h){Dt();try{h()}finally{Mt()}}const _=nn;nn=u;try{return a?a(e,3,[p]):e(p)}finally{nn=_}}:d=yt,t&&i){const _=d,H=i===!0?1/0:i;d=()=>Rt(_(),H)}const S=ps(),C=()=>{u.stop(),S&&S.active&&Zi(S.effects,u)};if(r&&t){const _=t;t=(...H)=>{_(...H),C()}}let L=b?new Array(e.length).fill(Eo):Eo;const m=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(t){const H=u.run();if(i||v||(b?H.some((X,M)=>Gt(X,L[M])):Gt(H,L))){h&&h();const X=nn;nn=u;try{const M=[H,L===Eo?void 0:b&&L[0]===Eo?[]:L,p];L=H,a?a(t,3,M):t(...M)}finally{nn=X}}}else u.run()};return s&&s(m),u=new ms(d),u.scheduler=l?()=>l(m,!1):m,p=_=>ru(_,!1,u),h=u.onStop=()=>{const _=$o.get(u);if(_){if(a)a(_,4);else for(const H of _)H();$o.delete(u)}},t?o?m(!0):L=u.run():l?l(m.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function Rt(e,t=1/0,n){if(t<=0||!Le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))Rt(e.value,t,n);else if(ie(e))for(let o=0;o<e.length;o++)Rt(e[o],t,n);else if(ls(e)||yn(e))e.forEach(o=>{Rt(o,t,n)});else if(cs(e)){for(const o in e)Rt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Rt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uo(e,t,n,o){try{return o?e(...o):e()}catch(i){fo(i,t,n)}}function ht(e,t,n,o){if(le(e)){const i=uo(e,t,n,o);return i&&ss(i)&&i.catch(r=>{fo(r,t,n)}),i}if(ie(e)){const i=[];for(let r=0;r<e.length;r++)i.push(ht(e[r],t,n,o));return i}}function fo(e,t,n,o=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||be;if(t){let s=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,c)===!1)return}s=s.parent}if(r){Dt(),uo(r,null,10,[e,a,c]),Mt();return}}su(e,n,i,o,l)}function su(e,t,n,o=!0,i=!1){if(i)throw e;console.error(e)}const Je=[];let _t=-1;const Sn=[];let Bt=null,gn=0;const Fs=Promise.resolve();let Uo=null;function ho(e){const t=Uo||Fs;return e?t.then(this?e.bind(this):e):t}function au(e){let t=_t+1,n=Je.length;for(;t<n;){const o=t+n>>>1,i=Je[o],r=Zn(i);r<e||r===e&&i.flags&2?t=o+1:n=o}return t}function lr(e){if(!(e.flags&1)){const t=Zn(e),n=Je[Je.length-1];!n||!(e.flags&2)&&t>=Zn(n)?Je.push(e):Je.splice(au(t),0,e),e.flags|=1,Vs()}}function Vs(){Uo||(Uo=Fs.then(Hs))}function cu(e){ie(e)?Sn.push(...e):Bt&&e.id===-1?Bt.splice(gn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),Vs()}function Nr(e,t,n=_t+1){for(;n<Je.length;n++){const o=Je[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;Je.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Bo(e){if(Sn.length){const t=[...new Set(Sn)].sort((n,o)=>Zn(n)-Zn(o));if(Sn.length=0,Bt){Bt.push(...t);return}for(Bt=t,gn=0;gn<Bt.length;gn++){const n=Bt[gn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bt=null,gn=0}}const Zn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Hs(e){try{for(_t=0;_t<Je.length;_t++){const t=Je[_t];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),uo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_t<Je.length;_t++){const t=Je[_t];t&&(t.flags&=-2)}_t=-1,Je.length=0,Bo(),Uo=null,(Je.length||Sn.length)&&Hs()}}let $e=null,Ns=null;function jo(e){const t=$e;return $e=e,Ns=e&&e.type.__scopeId||null,t}function xe(e,t=$e,n){if(!t||e._n)return e;const o=(...i)=>{o._d&&Zr(-1);const r=jo(t);let l;try{l=e(...i)}finally{jo(r),o._d&&Zr(1)}return l};return o._n=!0,o._c=!0,o._d=!0,o}function Wo(e,t){if($e===null)return e;const n=si($e),o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[r,l,s,a=be]=t[i];r&&(le(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(l),o.push({dir:r,instance:n,value:l,oldValue:void 0,arg:s,modifiers:a}))}return e}function bt(e,t,n,o){const i=e.dirs,r=t&&t.dirs;for(let l=0;l<i.length;l++){const s=i[l];r&&(s.oldValue=r[l].value);let a=s.dir[o];a&&(Dt(),ht(a,n,8,[e.el,s,e,t]),Mt())}}const uu=Symbol("_vte"),$s=e=>e.__isTeleport,It=Symbol("_leaveCb"),Lo=Symbol("_enterCb");function du(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rt(()=>{e.isMounted=!0}),ar(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],Us={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},Bs=e=>{const t=e.subTree;return t.component?Bs(t.component):t},fu={name:"BaseTransition",props:Us,setup(e,{slots:t}){const n=Ht(),o=du();return()=>{const i=t.default&&Gs(t.default(),!0);if(!i||!i.length)return;const r=js(i),l=he(e),{mode:s}=l;if(o.isLeaving)return wi(r);const a=$r(r);if(!a)return wi(r);let c=Hi(a,l,o,n,d=>c=d);a.type!==He&&eo(a,c);let u=n.subTree&&$r(n.subTree);if(u&&u.type!==He&&!rn(a,u)&&Bs(n).type!==He){let d=Hi(u,l,o,n);if(eo(u,d),s==="out-in"&&a.type!==He)return o.isLeaving=!0,d.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},wi(r);s==="in-out"&&a.type!==He?d.delayLeave=(h,p,v)=>{const b=Ws(o,u);b[String(u.key)]=u,h[It]=()=>{p(),h[It]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function js(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==He){t=n;break}}return t}const hu=fu;function Ws(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Hi(e,t,n,o,i){const{appear:r,mode:l,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:S,onAppear:C,onAfterAppear:L,onAppearCancelled:m}=t,_=String(e.key),H=Ws(n,e),X=(I,D)=>{I&&ht(I,o,9,D)},M=(I,D)=>{const B=D[1];X(I,D),ie(I)?I.every(w=>w.length<=1)&&B():I.length<=1&&B()},E={mode:l,persisted:s,beforeEnter(I){let D=a;if(!n.isMounted)if(r)D=S||a;else return;I[It]&&I[It](!0);const B=H[_];B&&rn(e,B)&&B.el[It]&&B.el[It](),X(D,[I])},enter(I){let D=c,B=u,w=d;if(!n.isMounted)if(r)D=C||c,B=L||u,w=m||d;else return;let z=!1;const F=I[Lo]=U=>{z||(z=!0,U?X(w,[I]):X(B,[I]),E.delayedLeave&&E.delayedLeave(),I[Lo]=void 0)};D?M(D,[I,F]):F()},leave(I,D){const B=String(e.key);if(I[Lo]&&I[Lo](!0),n.isUnmounting)return D();X(h,[I]);let w=!1;const z=I[It]=F=>{w||(w=!0,D(),F?X(b,[I]):X(v,[I]),I[It]=void 0,H[B]===e&&delete H[B])};H[B]=e,p?M(p,[I,z]):z()},clone(I){const D=Hi(I,t,n,o,i);return i&&i(D),D}};return E}function wi(e){if(po(e))return e=Jt(e),e.children=null,e}function $r(e){if(!po(e))return $s(e.type)&&e.children?js(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&le(n.default))return n.default()}}function eo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,eo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gs(e,t=!1,n){let o=[],i=0;for(let r=0;r<e.length;r++){let l=e[r];const s=n==null?l.key:String(n)+String(l.key!=null?l.key:r);l.type===ye?(l.patchFlag&128&&i++,o=o.concat(Gs(l.children,t,s))):(t||l.type!==He)&&o.push(s!=null?Jt(l,{key:s}):l)}if(i>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function ce(e,t){return le(e)?ze({name:e.name},t,{setup:e}):e}function sr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ur(e){const t=Ht(),n=we(null);if(t){const i=t.refs===be?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function En(e,t,n,o,i=!1){if(ie(e)){e.forEach((v,b)=>En(v,t&&(ie(t)?t[b]:t),n,o,i));return}if(an(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&En(e,t,n,o.component.subTree);return}const r=o.shapeFlag&4?si(o.component):o.el,l=i?null:r,{i:s,r:a}=e,c=t&&t.r,u=s.refs===be?s.refs={}:s.refs,d=s.setupState,h=he(d),p=d===be?rs:v=>me(h,v);if(c!=null&&c!==a){if(Ae(c))u[c]=null,p(c)&&(d[c]=null);else if(Pe(c)){c.value=null;const v=t;v.k&&(u[v.k]=null)}}if(le(a))uo(a,s,12,[l,u]);else{const v=Ae(a),b=Pe(a);if(v||b){const S=()=>{if(e.f){const C=v?p(a)?d[a]:u[a]:a.value;if(i)ie(C)&&Zi(C,r);else if(ie(C))C.includes(r)||C.push(r);else if(v)u[a]=[r],p(a)&&(d[a]=u[a]);else{const L=[r];a.value=L,e.k&&(u[e.k]=L)}}else v?(u[a]=l,p(a)&&(d[a]=l)):b&&(a.value=l,e.k&&(u[e.k]=l))};l?(S.id=-1,ot(S,n)):S()}}}let Br=!1;const pn=()=>{Br||(console.error("Hydration completed but contains mismatches."),Br=!0)},pu=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",mu=e=>e.namespaceURI.includes("MathML"),Co=e=>{if(e.nodeType===1){if(pu(e))return"svg";if(mu(e))return"mathml"}},_n=e=>e.nodeType===8;function gu(e){const{mt:t,p:n,o:{patchProp:o,createText:i,nextSibling:r,parentNode:l,remove:s,insert:a,createComment:c}}=e,u=(m,_)=>{if(!_.hasChildNodes()){n(null,m,_),Bo(),_._vnode=m;return}d(_.firstChild,m,null,null,null),Bo(),_._vnode=m},d=(m,_,H,X,M,E=!1)=>{E=E||!!_.dynamicChildren;const I=_n(m)&&m.data==="[",D=()=>b(m,_,H,X,M,I),{type:B,ref:w,shapeFlag:z,patchFlag:F}=_;let U=m.nodeType;_.el=m,F===-2&&(E=!1,_.dynamicChildren=null);let T=null;switch(B){case un:U!==3?_.children===""?(a(_.el=i(""),l(m),m),T=m):T=D():(m.data!==_.children&&(pn(),m.data=_.children),T=r(m));break;case He:L(m)?(T=r(m),C(_.el=m.content.firstChild,m,H)):U!==8||I?T=D():T=r(m);break;case Gn:if(I&&(m=r(m),U=m.nodeType),U===1||U===3){T=m;const ee=!_.children.length;for(let j=0;j<_.staticCount;j++)ee&&(_.children+=T.nodeType===1?T.outerHTML:T.data),j===_.staticCount-1&&(_.anchor=T),T=r(T);return I?r(T):T}else D();break;case ye:I?T=v(m,_,H,X,M,E):T=D();break;default:if(z&1)(U!==1||_.type.toLowerCase()!==m.tagName.toLowerCase())&&!L(m)?T=D():T=h(m,_,H,X,M,E);else if(z&6){_.slotScopeIds=M;const ee=l(m);if(I?T=S(m):_n(m)&&m.data==="teleport start"?T=S(m,m.data,"teleport end"):T=r(m),t(_,ee,null,H,X,Co(ee),E),an(_)&&!_.type.__asyncResolved){let j;I?(j=ae(ye),j.anchor=T?T.previousSibling:ee.lastChild):j=m.nodeType===3?zt(""):ae("div"),j.el=m,_.component.subTree=j}}else z&64?U!==8?T=D():T=_.type.hydrate(m,_,H,X,M,E,e,p):z&128&&(T=_.type.hydrate(m,_,H,X,Co(l(m)),M,E,e,d))}return w!=null&&En(w,null,X,_),T},h=(m,_,H,X,M,E)=>{E=E||!!_.dynamicChildren;const{type:I,props:D,patchFlag:B,shapeFlag:w,dirs:z,transition:F}=_,U=I==="input"||I==="option";if(U||B!==-1){z&&bt(_,null,H,"created");let T=!1;if(L(m)){T=aa(null,F)&&H&&H.vnode.props&&H.vnode.props.appear;const j=m.content.firstChild;if(T){const ue=j.getAttribute("class");ue&&(j.$cls=ue),F.beforeEnter(j)}C(j,m,H),_.el=m=j}if(w&16&&!(D&&(D.innerHTML||D.textContent))){let j=p(m.firstChild,_,m,H,X,M,E);for(;j;){ko(m,1)||pn();const ue=j;j=j.nextSibling,s(ue)}}else if(w&8){let j=_.children;j[0]===`
`&&(m.tagName==="PRE"||m.tagName==="TEXTAREA")&&(j=j.slice(1)),m.textContent!==j&&(ko(m,0)||pn(),m.textContent=_.children)}if(D){if(U||!E||B&48){const j=m.tagName.includes("-");for(const ue in D)(U&&(ue.endsWith("value")||ue==="indeterminate")||ao(ue)&&!wn(ue)||ue[0]==="."||j)&&o(m,ue,null,D[ue],void 0,H)}else if(D.onClick)o(m,"onClick",null,D.onClick,void 0,H);else if(B&4&&sn(D.style))for(const j in D.style)D.style[j]}let ee;(ee=D&&D.onVnodeBeforeMount)&&st(ee,H,_),z&&bt(_,null,H,"beforeMount"),((ee=D&&D.onVnodeMounted)||z||T)&&ma(()=>{ee&&st(ee,H,_),T&&F.enter(m),z&&bt(_,null,H,"mounted")},X)}return m.nextSibling},p=(m,_,H,X,M,E,I)=>{I=I||!!_.dynamicChildren;const D=_.children,B=D.length;for(let w=0;w<B;w++){const z=I?D[w]:D[w]=at(D[w]),F=z.type===un;m?(F&&!I&&w+1<B&&at(D[w+1]).type===un&&(a(i(m.data.slice(z.children.length)),H,r(m)),m.data=z.children),m=d(m,z,X,M,E,I)):F&&!z.children?a(z.el=i(""),H):(ko(H,1)||pn(),n(null,z,H,null,X,M,Co(H),E))}return m},v=(m,_,H,X,M,E)=>{const{slotScopeIds:I}=_;I&&(M=M?M.concat(I):I);const D=l(m),B=p(r(m),_,D,H,X,M,E);return B&&_n(B)&&B.data==="]"?r(_.anchor=B):(pn(),a(_.anchor=c("]"),D,B),B)},b=(m,_,H,X,M,E)=>{if(ko(m.parentElement,1)||pn(),_.el=null,E){const B=S(m);for(;;){const w=r(m);if(w&&w!==B)s(w);else break}}const I=r(m),D=l(m);return s(m),n(null,_,D,I,H,X,Co(D),M),H&&(H.vnode.el=_.el,ha(H,_.el)),I},S=(m,_="[",H="]")=>{let X=0;for(;m;)if(m=r(m),m&&_n(m)&&(m.data===_&&X++,m.data===H)){if(X===0)return r(m);X--}return m},C=(m,_,H)=>{const X=_.parentNode;X&&X.replaceChild(m,_);let M=H;for(;M;)M.vnode.el===_&&(M.vnode.el=M.subTree.el=m),M=M.parent},L=m=>m.nodeType===1&&m.tagName==="TEMPLATE";return[u,d]}const jr="data-allow-mismatch",vu={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ko(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(jr);)e=e.parentElement;const n=e&&e.getAttribute(jr);if(n==null)return!1;if(n==="")return!0;{const o=n.split(",");return t===0&&o.includes("children")?!0:o.includes(vu[t])}}Xo().requestIdleCallback;Xo().cancelIdleCallback;function _u(e,t){if(_n(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(_n(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const an=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function bu(e){le(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:i=200,hydrate:r,timeout:l,suspensible:s=!0,onError:a}=e;let c=null,u,d=0;const h=()=>(d++,c=null,p()),p=()=>{let v;return c||(v=c=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),a)return new Promise((S,C)=>{a(b,()=>S(h()),()=>C(b),d+1)});throw b}).then(b=>v!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return ce({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(v,b,S){let C=!1;(b.bu||(b.bu=[])).push(()=>C=!0);const L=()=>{C||S()},m=r?()=>{const _=r(L,H=>_u(v,H));_&&(b.bum||(b.bum=[])).push(_)}:L;u?m():p().then(()=>!b.isUnmounted&&m())},get __asyncResolved(){return u},setup(){const v=Ne;if(sr(v),u)return()=>Si(u,v);const b=m=>{c=null,fo(m,v,13,!o)};if(s&&v.suspense||xn)return p().then(m=>()=>Si(m,v)).catch(m=>(b(m),()=>o?ae(o,{error:m}):null));const S=De(!1),C=De(),L=De(!!i);return i&&setTimeout(()=>{L.value=!1},i),l!=null&&setTimeout(()=>{if(!S.value&&!C.value){const m=new Error(`Async component timed out after ${l}ms.`);b(m),C.value=m}},l),p().then(()=>{S.value=!0,v.parent&&po(v.parent.vnode)&&v.parent.update()}).catch(m=>{b(m),C.value=m}),()=>{if(S.value&&u)return Si(u,v);if(C.value&&o)return ae(o,{error:C.value});if(n&&!L.value)return ae(n)}}})}function Si(e,t){const{ref:n,props:o,children:i,ce:r}=t.vnode,l=ae(e,o,i);return l.ref=n,l.ce=r,delete t.vnode.ce,l}const po=e=>e.type.__isKeepAlive;function yu(e,t){qs(e,"a",t)}function wu(e,t){qs(e,"da",t)}function qs(e,t,n=Ne){const o=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ii(t,o,n),n){let i=n.parent;for(;i&&i.parent;)po(i.parent.vnode)&&Su(o,t,n,i),i=i.parent}}function Su(e,t,n,o){const i=ii(t,e,o,!0);ri(()=>{Zi(o[t],i)},n)}function ii(e,t,n=Ne,o=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{Dt();const s=mo(n),a=ht(t,n,e,l);return s(),Mt(),a});return o?i.unshift(r):i.push(r),r}}const Vt=e=>(t,n=Ne)=>{(!xn||e==="sp")&&ii(e,(...o)=>t(...o),n)},Eu=Vt("bm"),rt=Vt("m"),Lu=Vt("bu"),Cu=Vt("u"),ar=Vt("bum"),ri=Vt("um"),ku=Vt("sp"),xu=Vt("rtg"),Tu=Vt("rtc");function Iu(e,t=Ne){ii("ec",e,t)}const Au="components";function Ks(e,t){return Ou(Au,e,!0,t)||e}const Ru=Symbol.for("v-ndc");function Ou(e,t,n=!0,o=!1){const i=$e||Ne;if(i){const r=i.type;{const s=vd(r,!1);if(s&&(s===t||s===et(t)||s===co(et(t))))return r}const l=Wr(i[e]||r[e],t)||Wr(i.appContext[e],t);return!l&&o?r:l}}function Wr(e,t){return e&&(e[t]||e[et(t)]||e[co(et(t))])}function Qt(e,t,n,o){let i;const r=n,l=ie(e);if(l||Ae(e)){const s=l&&sn(e);let a=!1,c=!1;s&&(a=!ct(e),c=Kt(e),e=ei(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(a?c?No(Ve(e[u])):Ve(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,r)}else if(Le(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>t(s,a,void 0,r));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,c=s.length;a<c;a++){const u=s[a];i[a]=t(e[u],u,a,r)}}else i=[];return i}function Pu(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(ie(o))for(let i=0;i<o.length;i++)e[o[i].name]=o[i].fn;else o&&(e[o.name]=o.key?(...i)=>{const r=o.fn(...i);return r&&(r.key=o.key),r}:o.fn)}return e}function Ce(e,t,n={},o,i){if($e.ce||$e.parent&&an($e.parent)&&$e.parent.ce)return t!=="default"&&(n.name=t),W(),ke(ye,null,[ae("slot",n,o&&o())],64);let r=e[t];r&&r._c&&(r._d=!1),W();const l=r&&Qs(r(n)),s=n.key||l&&l.key,a=ke(ye,{key:(s&&!Ft(s)?s:`_${t}`)+(!l&&o?"_fb":"")},l||(o?o():[]),l&&e._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Qs(e){return e.some(t=>no(t)?!(t.type===He||t.type===ye&&!Qs(t.children)):!0)?e:null}const Ni=e=>e?_a(e)?si(e):Ni(e.parent):null,Wn=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ni(e.parent),$root:e=>Ni(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ys(e),$forceUpdate:e=>e.f||(e.f=()=>{lr(e.update)}),$nextTick:e=>e.n||(e.n=ho.bind(e.proxy)),$watch:e=>ed.bind(e)}),Ei=(e,t)=>e!==be&&!e.__isScriptSetup&&me(e,t),Du={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:i,props:r,accessCache:l,type:s,appContext:a}=e;let c;if(t[0]!=="$"){const p=l[t];if(p!==void 0)switch(p){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Ei(o,t))return l[t]=1,o[t];if(i!==be&&me(i,t))return l[t]=2,i[t];if((c=e.propsOptions[0])&&me(c,t))return l[t]=3,r[t];if(n!==be&&me(n,t))return l[t]=4,n[t];$i&&(l[t]=0)}}const u=Wn[t];let d,h;if(u)return t==="$attrs"&&qe(e.attrs,"get",""),u(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==be&&me(n,t))return l[t]=4,n[t];if(h=a.config.globalProperties,me(h,t))return h[t]},set({_:e},t,n){const{data:o,setupState:i,ctx:r}=e;return Ei(i,t)?(i[t]=n,!0):o!==be&&me(o,t)?(o[t]=n,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:r,type:l}},s){let a,c;return!!(n[s]||e!==be&&s[0]!=="$"&&me(e,s)||Ei(t,s)||(a=r[0])&&me(a,s)||me(o,s)||me(Wn,s)||me(i.config.globalProperties,s)||(c=l.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gr(e){return ie(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $i=!0;function Mu(e){const t=Ys(e),n=e.proxy,o=e.ctx;$i=!1,t.beforeCreate&&qr(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:l,watch:s,provide:a,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:v,activated:b,deactivated:S,beforeDestroy:C,beforeUnmount:L,destroyed:m,unmounted:_,render:H,renderTracked:X,renderTriggered:M,errorCaptured:E,serverPrefetch:I,expose:D,inheritAttrs:B,components:w,directives:z,filters:F}=t;if(c&&zu(c,o,null),l)for(const ee in l){const j=l[ee];le(j)&&(o[ee]=j.bind(n))}if(i){const ee=i.call(n,n);Le(ee)&&(e.data=dn(ee))}if($i=!0,r)for(const ee in r){const j=r[ee],ue=le(j)?j.bind(n,n):le(j.get)?j.get.bind(n,n):yt,Re=!le(j)&&le(j.set)?j.set.bind(n):yt,Fe=P({get:ue,set:Re});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:je=>Fe.value=je})}if(s)for(const ee in s)Js(s[ee],o,n,ee);if(a){const ee=le(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(j=>{qt(j,ee[j])})}u&&qr(u,e,"c");function T(ee,j){ie(j)?j.forEach(ue=>ee(ue.bind(n))):j&&ee(j.bind(n))}if(T(Eu,d),T(rt,h),T(Lu,p),T(Cu,v),T(yu,b),T(wu,S),T(Iu,E),T(Tu,X),T(xu,M),T(ar,L),T(ri,_),T(ku,I),ie(D))if(D.length){const ee=e.exposed||(e.exposed={});D.forEach(j=>{Object.defineProperty(ee,j,{get:()=>n[j],set:ue=>n[j]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===yt&&(e.render=H),B!=null&&(e.inheritAttrs=B),w&&(e.components=w),z&&(e.directives=z),I&&sr(e)}function zu(e,t,n=yt){ie(e)&&(e=Ui(e));for(const o in e){const i=e[o];let r;Le(i)?"default"in i?r=Ue(i.from||o,i.default,!0):r=Ue(i.from||o):r=Ue(i),Pe(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[o]=r}}function qr(e,t,n){ht(ie(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Js(e,t,n,o){let i=o.includes(".")?da(n,o):()=>n[o];if(Ae(e)){const r=t[e];le(r)&&Ke(i,r)}else if(le(e))Ke(i,e.bind(n));else if(Le(e))if(ie(e))e.forEach(r=>Js(r,t,n,o));else{const r=le(e.handler)?e.handler.bind(n):t[e.handler];le(r)&&Ke(i,r,e)}}function Ys(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,s=r.get(t);let a;return s?a=s:!i.length&&!n&&!o?a=t:(a={},i.length&&i.forEach(c=>Go(a,c,l,!0)),Go(a,t,l)),Le(t)&&r.set(t,a),a}function Go(e,t,n,o=!1){const{mixins:i,extends:r}=t;r&&Go(e,r,n,!0),i&&i.forEach(l=>Go(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const s=Fu[l]||n&&n[l];e[l]=s?s(e[l],t[l]):t[l]}return e}const Fu={data:Kr,props:Qr,emits:Qr,methods:$n,computed:$n,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:$n,directives:$n,watch:Hu,provide:Kr,inject:Vu};function Kr(e,t){return t?e?function(){return ze(le(e)?e.call(this,this):e,le(t)?t.call(this,this):t)}:t:e}function Vu(e,t){return $n(Ui(e),Ui(t))}function Ui(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function $n(e,t){return e?ze(Object.create(null),e,t):t}function Qr(e,t){return e?ie(e)&&ie(t)?[...new Set([...e,...t])]:ze(Object.create(null),Gr(e),Gr(t??{})):t}function Hu(e,t){if(!e)return t;if(!t)return e;const n=ze(Object.create(null),e);for(const o in t)n[o]=Qe(e[o],t[o]);return n}function Xs(){return{app:null,config:{isNativeTag:rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function $u(e,t){return function(o,i=null){le(o)||(o=ze({},o)),i!=null&&!Le(i)&&(i=null);const r=Xs(),l=new WeakSet,s=[];let a=!1;const c=r.app={_uid:Nu++,_component:o,_props:i,_container:null,_context:r,_instance:null,version:bd,get config(){return r.config},set config(u){},use(u,...d){return l.has(u)||(u&&le(u.install)?(l.add(u),u.install(c,...d)):le(u)&&(l.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!a){const p=c._ceVNode||ae(o,i);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),d&&t?t(p,u):e(p,u,h),a=!0,c._container=u,u.__vue_app__=c,si(p.component)}},onUnmount(u){s.push(u)},unmount(){a&&(ht(s,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=cn;cn=c;try{return u()}finally{cn=d}}};return c}}let cn=null;function qt(e,t){if(Ne){let n=Ne.provides;const o=Ne.parent&&Ne.parent.provides;o===n&&(n=Ne.provides=Object.create(o)),n[e]=t}}function Ue(e,t,n=!1){const o=Ht();if(o||cn){let i=cn?cn._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&le(t)?t.call(o&&o.proxy):t}}function Zs(){return!!(Ht()||cn)}const ea={},ta=()=>Object.create(ea),na=e=>Object.getPrototypeOf(e)===ea;function Uu(e,t,n,o=!1){const i={},r=ta();e.propsDefaults=Object.create(null),oa(e,t,i,r);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);n?e.props=o?i:Rs(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Bu(e,t,n,o){const{props:i,attrs:r,vnode:{patchFlag:l}}=e,s=he(i),[a]=e.propsOptions;let c=!1;if((o||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(li(e.emitsOptions,h))continue;const p=t[h];if(a)if(me(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const v=et(h);i[v]=Bi(a,s,v,p,e,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{oa(e,t,i,r)&&(c=!0);let u;for(const d in s)(!t||!me(t,d)&&((u=Yt(d))===d||!me(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Bi(a,s,d,void 0,e,!0)):delete i[d]);if(r!==s)for(const d in r)(!t||!me(t,d))&&(delete r[d],c=!0)}c&&At(e.attrs,"set","")}function oa(e,t,n,o){const[i,r]=e.propsOptions;let l=!1,s;if(t)for(let a in t){if(wn(a))continue;const c=t[a];let u;i&&me(i,u=et(a))?!r||!r.includes(u)?n[u]=c:(s||(s={}))[u]=c:li(e.emitsOptions,a)||(!(a in o)||c!==o[a])&&(o[a]=c,l=!0)}if(r){const a=he(n),c=s||be;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Bi(i,a,d,c[d],e,!me(c,d))}}return l}function Bi(e,t,n,o,i,r){const l=e[n];if(l!=null){const s=me(l,"default");if(s&&o===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&le(a)){const{propsDefaults:c}=i;if(n in c)o=c[n];else{const u=mo(i);o=c[n]=a.call(null,t),u()}}else o=a;i.ce&&i.ce._setProp(n,o)}l[0]&&(r&&!s?o=!1:l[1]&&(o===""||o===Yt(n))&&(o=!0))}return o}const ju=new WeakMap;function ia(e,t,n=!1){const o=n?ju:t.propsCache,i=o.get(e);if(i)return i;const r=e.props,l={},s=[];let a=!1;if(!le(e)){const u=d=>{a=!0;const[h,p]=ia(d,t,!0);ze(l,h),p&&s.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!a)return Le(e)&&o.set(e,bn),bn;if(ie(r))for(let u=0;u<r.length;u++){const d=et(r[u]);Jr(d)&&(l[d]=be)}else if(r)for(const u in r){const d=et(u);if(Jr(d)){const h=r[u],p=l[d]=ie(h)||le(h)?{type:h}:ze({},h),v=p.type;let b=!1,S=!0;if(ie(v))for(let C=0;C<v.length;++C){const L=v[C],m=le(L)&&L.name;if(m==="Boolean"){b=!0;break}else m==="String"&&(S=!1)}else b=le(v)&&v.name==="Boolean";p[0]=b,p[1]=S,(b||me(p,"default"))&&s.push(d)}}const c=[l,s];return Le(e)&&o.set(e,c),c}function Jr(e){return e[0]!=="$"&&!wn(e)}const cr=e=>e==="_"||e==="_ctx"||e==="$stable",ur=e=>ie(e)?e.map(at):[at(e)],Wu=(e,t,n)=>{if(t._n)return t;const o=xe((...i)=>ur(t(...i)),n);return o._c=!1,o},ra=(e,t,n)=>{const o=e._ctx;for(const i in e){if(cr(i))continue;const r=e[i];if(le(r))t[i]=Wu(i,r,o);else if(r!=null){const l=ur(r);t[i]=()=>l}}},la=(e,t)=>{const n=ur(t);e.slots.default=()=>n},sa=(e,t,n)=>{for(const o in t)(n||!cr(o))&&(e[o]=t[o])},Gu=(e,t,n)=>{const o=e.slots=ta();if(e.vnode.shapeFlag&32){const i=t._;i?(sa(o,t,n),n&&us(o,"_",i,!0)):ra(t,o)}else t&&la(e,t)},qu=(e,t,n)=>{const{vnode:o,slots:i}=e;let r=!0,l=be;if(o.shapeFlag&32){const s=t._;s?n&&s===1?r=!1:sa(i,t,n):(r=!t.$stable,ra(t,i)),l=t}else t&&(la(e,t),l={default:1});if(r)for(const s in i)!cr(s)&&l[s]==null&&delete i[s]},ot=ma;function Ku(e){return Qu(e,gu)}function Qu(e,t){const n=Xo();n.__VUE__=!0;const{insert:o,remove:i,patchProp:r,createElement:l,createText:s,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=yt,insertStaticContent:v}=e,b=(f,g,y,R=null,k=null,A=null,q=void 0,$=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!rn(f,g)&&(R=x(f),je(f,k,A,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:V,ref:oe,shapeFlag:J}=g;switch(V){case un:S(f,g,y,R);break;case He:C(f,g,y,R);break;case Gn:f==null&&L(g,y,R,q);break;case ye:w(f,g,y,R,k,A,q,$,N);break;default:J&1?H(f,g,y,R,k,A,q,$,N):J&6?z(f,g,y,R,k,A,q,$,N):(J&64||J&128)&&V.process(f,g,y,R,k,A,q,$,N,Z)}oe!=null&&k?En(oe,f&&f.ref,A,g||f,!g):oe==null&&f&&f.ref!=null&&En(f.ref,null,A,f,!0)},S=(f,g,y,R)=>{if(f==null)o(g.el=s(g.children),y,R);else{const k=g.el=f.el;g.children!==f.children&&c(k,g.children)}},C=(f,g,y,R)=>{f==null?o(g.el=a(g.children||""),y,R):g.el=f.el},L=(f,g,y,R)=>{[f.el,f.anchor]=v(f.children,g,y,R,f.el,f.anchor)},m=({el:f,anchor:g},y,R)=>{let k;for(;f&&f!==g;)k=h(f),o(f,y,R),f=k;o(g,y,R)},_=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=h(f),i(f),f=y;i(g)},H=(f,g,y,R,k,A,q,$,N)=>{g.type==="svg"?q="svg":g.type==="math"&&(q="mathml"),f==null?X(g,y,R,k,A,q,$,N):I(f,g,k,A,q,$,N)},X=(f,g,y,R,k,A,q,$)=>{let N,V;const{props:oe,shapeFlag:J,transition:te,dirs:se}=f;if(N=f.el=l(f.type,A,oe&&oe.is,oe),J&8?u(N,f.children):J&16&&E(f.children,N,null,R,k,Li(f,A),q,$),se&&bt(f,null,R,"created"),M(N,f,f.scopeId,q,R),oe){for(const Se in oe)Se!=="value"&&!wn(Se)&&r(N,Se,null,oe[Se],A,R);"value"in oe&&r(N,"value",null,oe.value,A),(V=oe.onVnodeBeforeMount)&&st(V,R,f)}se&&bt(f,null,R,"beforeMount");const fe=aa(k,te);fe&&te.beforeEnter(N),o(N,g,y),((V=oe&&oe.onVnodeMounted)||fe||se)&&ot(()=>{V&&st(V,R,f),fe&&te.enter(N),se&&bt(f,null,R,"mounted")},k)},M=(f,g,y,R,k)=>{if(y&&p(f,y),R)for(let A=0;A<R.length;A++)p(f,R[A]);if(k){let A=k.subTree;if(g===A||pa(A.type)&&(A.ssContent===g||A.ssFallback===g)){const q=k.vnode;M(f,q,q.scopeId,q.slotScopeIds,k.parent)}}},E=(f,g,y,R,k,A,q,$,N=0)=>{for(let V=N;V<f.length;V++){const oe=f[V]=$?jt(f[V]):at(f[V]);b(null,oe,g,y,R,k,A,q,$)}},I=(f,g,y,R,k,A,q)=>{const $=g.el=f.el;let{patchFlag:N,dynamicChildren:V,dirs:oe}=g;N|=f.patchFlag&16;const J=f.props||be,te=g.props||be;let se;if(y&&Xt(y,!1),(se=te.onVnodeBeforeUpdate)&&st(se,y,g,f),oe&&bt(g,f,y,"beforeUpdate"),y&&Xt(y,!0),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&u($,""),V?D(f.dynamicChildren,V,$,y,R,Li(g,k),A):q||j(f,g,$,null,y,R,Li(g,k),A,!1),N>0){if(N&16)B($,J,te,y,k);else if(N&2&&J.class!==te.class&&r($,"class",null,te.class,k),N&4&&r($,"style",J.style,te.style,k),N&8){const fe=g.dynamicProps;for(let Se=0;Se<fe.length;Se++){const ge=fe[Se],Ze=J[ge],We=te[ge];(We!==Ze||ge==="value")&&r($,ge,Ze,We,k,y)}}N&1&&f.children!==g.children&&u($,g.children)}else!q&&V==null&&B($,J,te,y,k);((se=te.onVnodeUpdated)||oe)&&ot(()=>{se&&st(se,y,g,f),oe&&bt(g,f,y,"updated")},R)},D=(f,g,y,R,k,A,q)=>{for(let $=0;$<g.length;$++){const N=f[$],V=g[$],oe=N.el&&(N.type===ye||!rn(N,V)||N.shapeFlag&198)?d(N.el):y;b(N,V,oe,null,R,k,A,q,!0)}},B=(f,g,y,R,k)=>{if(g!==y){if(g!==be)for(const A in g)!wn(A)&&!(A in y)&&r(f,A,g[A],null,k,R);for(const A in y){if(wn(A))continue;const q=y[A],$=g[A];q!==$&&A!=="value"&&r(f,A,$,q,k,R)}"value"in y&&r(f,"value",g.value,y.value,k)}},w=(f,g,y,R,k,A,q,$,N)=>{const V=g.el=f?f.el:s(""),oe=g.anchor=f?f.anchor:s("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:se}=g;se&&($=$?$.concat(se):se),f==null?(o(V,y,R),o(oe,y,R),E(g.children||[],y,oe,k,A,q,$,N)):J>0&&J&64&&te&&f.dynamicChildren?(D(f.dynamicChildren,te,y,k,A,q,$),(g.key!=null||k&&g===k.subTree)&&ca(f,g,!0)):j(f,g,y,oe,k,A,q,$,N)},z=(f,g,y,R,k,A,q,$,N)=>{g.slotScopeIds=$,f==null?g.shapeFlag&512?k.ctx.activate(g,y,R,q,N):F(g,y,R,k,A,q,N):U(f,g,N)},F=(f,g,y,R,k,A,q)=>{const $=f.component=fd(f,R,k);if(po(f)&&($.ctx.renderer=Z),hd($,!1,q),$.asyncDep){if(k&&k.registerDep($,T,q),!f.el){const N=$.subTree=ae(He);C(null,N,g,y),f.placeholder=N.el}}else T($,f,g,y,k,A,q)},U=(f,g,y)=>{const R=g.component=f.component;if(rd(f,g,y))if(R.asyncDep&&!R.asyncResolved){ee(R,g,y);return}else R.next=g,R.update();else g.el=f.el,R.vnode=g},T=(f,g,y,R,k,A,q)=>{const $=()=>{if(f.isMounted){let{next:J,bu:te,u:se,parent:fe,vnode:Se}=f;{const tt=ua(f);if(tt){J&&(J.el=Se.el,ee(f,J,q)),tt.asyncDep.then(()=>{f.isUnmounted||$()});return}}let ge=J,Ze;Xt(f,!1),J?(J.el=Se.el,ee(f,J,q)):J=Se,te&&mi(te),(Ze=J.props&&J.props.onVnodeBeforeUpdate)&&st(Ze,fe,J,Se),Xt(f,!0);const We=Ci(f),dt=f.subTree;f.subTree=We,b(dt,We,d(dt.el),x(dt),f,k,A),J.el=We.el,ge===null&&ha(f,We.el),se&&ot(se,k),(Ze=J.props&&J.props.onVnodeUpdated)&&ot(()=>st(Ze,fe,J,Se),k)}else{let J;const{el:te,props:se}=g,{bm:fe,m:Se,parent:ge,root:Ze,type:We}=f,dt=an(g);if(Xt(f,!1),fe&&mi(fe),!dt&&(J=se&&se.onVnodeBeforeMount)&&st(J,ge,g),Xt(f,!0),te&&_e){const tt=()=>{f.subTree=Ci(f),_e(te,f.subTree,f,k,null)};dt&&We.__asyncHydrate?We.__asyncHydrate(te,f,tt):tt()}else{Ze.ce&&Ze.ce._def.shadowRoot!==!1&&Ze.ce._injectChildStyle(We);const tt=f.subTree=Ci(f);b(null,tt,y,R,f,k,A),g.el=tt.el}if(Se&&ot(Se,k),!dt&&(J=se&&se.onVnodeMounted)){const tt=g;ot(()=>st(J,ge,tt),k)}(g.shapeFlag&256||ge&&an(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&ot(f.a,k),f.isMounted=!0,g=y=R=null}};f.scope.on();const N=f.effect=new ms($);f.scope.off();const V=f.update=N.run.bind(N),oe=f.job=N.runIfDirty.bind(N);oe.i=f,oe.id=f.uid,N.scheduler=()=>lr(oe),Xt(f,!0),V()},ee=(f,g,y)=>{g.component=f;const R=f.vnode.props;f.vnode=g,f.next=null,Bu(f,g.props,R,y),qu(f,g.children,y),Dt(),Nr(f),Mt()},j=(f,g,y,R,k,A,q,$,N=!1)=>{const V=f&&f.children,oe=f?f.shapeFlag:0,J=g.children,{patchFlag:te,shapeFlag:se}=g;if(te>0){if(te&128){Re(V,J,y,R,k,A,q,$,N);return}else if(te&256){ue(V,J,y,R,k,A,q,$,N);return}}se&8?(oe&16&&Xe(V,k,A),J!==V&&u(y,J)):oe&16?se&16?Re(V,J,y,R,k,A,q,$,N):Xe(V,k,A,!0):(oe&8&&u(y,""),se&16&&E(J,y,R,k,A,q,$,N))},ue=(f,g,y,R,k,A,q,$,N)=>{f=f||bn,g=g||bn;const V=f.length,oe=g.length,J=Math.min(V,oe);let te;for(te=0;te<J;te++){const se=g[te]=N?jt(g[te]):at(g[te]);b(f[te],se,y,null,k,A,q,$,N)}V>oe?Xe(f,k,A,!0,!1,J):E(g,y,R,k,A,q,$,N,J)},Re=(f,g,y,R,k,A,q,$,N)=>{let V=0;const oe=g.length;let J=f.length-1,te=oe-1;for(;V<=J&&V<=te;){const se=f[V],fe=g[V]=N?jt(g[V]):at(g[V]);if(rn(se,fe))b(se,fe,y,null,k,A,q,$,N);else break;V++}for(;V<=J&&V<=te;){const se=f[J],fe=g[te]=N?jt(g[te]):at(g[te]);if(rn(se,fe))b(se,fe,y,null,k,A,q,$,N);else break;J--,te--}if(V>J){if(V<=te){const se=te+1,fe=se<oe?g[se].el:R;for(;V<=te;)b(null,g[V]=N?jt(g[V]):at(g[V]),y,fe,k,A,q,$,N),V++}}else if(V>te)for(;V<=J;)je(f[V],k,A,!0),V++;else{const se=V,fe=V,Se=new Map;for(V=fe;V<=te;V++){const nt=g[V]=N?jt(g[V]):at(g[V]);nt.key!=null&&Se.set(nt.key,V)}let ge,Ze=0;const We=te-fe+1;let dt=!1,tt=0;const Mn=new Array(We);for(V=0;V<We;V++)Mn[V]=0;for(V=se;V<=J;V++){const nt=f[V];if(Ze>=We){je(nt,k,A,!0);continue}let vt;if(nt.key!=null)vt=Se.get(nt.key);else for(ge=fe;ge<=te;ge++)if(Mn[ge-fe]===0&&rn(nt,g[ge])){vt=ge;break}vt===void 0?je(nt,k,A,!0):(Mn[vt-fe]=V+1,vt>=tt?tt=vt:dt=!0,b(nt,g[vt],y,null,k,A,q,$,N),Ze++)}const Dr=dt?Ju(Mn):bn;for(ge=Dr.length-1,V=We-1;V>=0;V--){const nt=fe+V,vt=g[nt],Mr=g[nt+1],zr=nt+1<oe?Mr.el||Mr.placeholder:R;Mn[V]===0?b(null,vt,y,zr,k,A,q,$,N):dt&&(ge<0||V!==Dr[ge]?Fe(vt,y,zr,2):ge--)}}},Fe=(f,g,y,R,k=null)=>{const{el:A,type:q,transition:$,children:N,shapeFlag:V}=f;if(V&6){Fe(f.component.subTree,g,y,R);return}if(V&128){f.suspense.move(g,y,R);return}if(V&64){q.move(f,g,y,Z);return}if(q===ye){o(A,g,y);for(let J=0;J<N.length;J++)Fe(N[J],g,y,R);o(f.anchor,g,y);return}if(q===Gn){m(f,g,y);return}if(R!==2&&V&1&&$)if(R===0)$.beforeEnter(A),o(A,g,y),ot(()=>$.enter(A),k);else{const{leave:J,delayLeave:te,afterLeave:se}=$,fe=()=>{f.ctx.isUnmounted?i(A):o(A,g,y)},Se=()=>{A._isLeaving&&A[It](!0),J(A,()=>{fe(),se&&se()})};te?te(A,fe,Se):Se()}else o(A,g,y)},je=(f,g,y,R=!1,k=!1)=>{const{type:A,props:q,ref:$,children:N,dynamicChildren:V,shapeFlag:oe,patchFlag:J,dirs:te,cacheIndex:se}=f;if(J===-2&&(k=!1),$!=null&&(Dt(),En($,null,y,f,!0),Mt()),se!=null&&(g.renderCache[se]=void 0),oe&256){g.ctx.deactivate(f);return}const fe=oe&1&&te,Se=!an(f);let ge;if(Se&&(ge=q&&q.onVnodeBeforeUnmount)&&st(ge,g,f),oe&6)gt(f.component,y,R);else{if(oe&128){f.suspense.unmount(y,R);return}fe&&bt(f,null,g,"beforeUnmount"),oe&64?f.type.remove(f,g,y,Z,R):V&&!V.hasOnce&&(A!==ye||J>0&&J&64)?Xe(V,g,y,!1,!0):(A===ye&&J&384||!k&&oe&16)&&Xe(N,g,y),R&&Nt(f)}(Se&&(ge=q&&q.onVnodeUnmounted)||fe)&&ot(()=>{ge&&st(ge,g,f),fe&&bt(f,null,g,"unmounted")},y)},Nt=f=>{const{type:g,el:y,anchor:R,transition:k}=f;if(g===ye){$t(y,R);return}if(g===Gn){_(f);return}const A=()=>{i(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(f.shapeFlag&1&&k&&!k.persisted){const{leave:q,delayLeave:$}=k,N=()=>q(y,A);$?$(f.el,A,N):N()}else A()},$t=(f,g)=>{let y;for(;f!==g;)y=h(f),i(f),f=y;i(g)},gt=(f,g,y)=>{const{bum:R,scope:k,job:A,subTree:q,um:$,m:N,a:V}=f;Yr(N),Yr(V),R&&mi(R),k.stop(),A&&(A.flags|=8,je(q,f,g,y)),$&&ot($,g),ot(()=>{f.isUnmounted=!0},g)},Xe=(f,g,y,R=!1,k=!1,A=0)=>{for(let q=A;q<f.length;q++)je(f[q],g,y,R,k)},x=f=>{if(f.shapeFlag&6)return x(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=h(f.anchor||f.el),y=g&&g[uu];return y?h(y):g};let Q=!1;const G=(f,g,y)=>{f==null?g._vnode&&je(g._vnode,null,null,!0):b(g._vnode||null,f,g,null,null,null,y),g._vnode=f,Q||(Q=!0,Nr(),Bo(),Q=!1)},Z={p:b,um:je,m:Fe,r:Nt,mt:F,mc:E,pc:j,pbc:D,n:x,o:e};let de,_e;return t&&([de,_e]=t(Z)),{render:G,hydrate:de,createApp:$u(G,de)}}function Li({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function aa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ca(e,t,n=!1){const o=e.children,i=t.children;if(ie(o)&&ie(i))for(let r=0;r<o.length;r++){const l=o[r];let s=i[r];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[r]=jt(i[r]),s.el=l.el),!n&&s.patchFlag!==-2&&ca(l,s)),s.type===un&&s.patchFlag!==-1&&(s.el=l.el),s.type===He&&!s.el&&(s.el=l.el)}}function Ju(e){const t=e.slice(),n=[0];let o,i,r,l,s;const a=e.length;for(o=0;o<a;o++){const c=e[o];if(c!==0){if(i=n[n.length-1],e[i]<c){t[o]=i,n.push(o);continue}for(r=0,l=n.length-1;r<l;)s=r+l>>1,e[n[s]]<c?r=s+1:l=s;c<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}function ua(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ua(t)}function Yr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Yu=Symbol.for("v-scx"),Xu=()=>Ue(Yu);function Zu(e,t){return dr(e,null,t)}function Ke(e,t,n){return dr(e,t,n)}function dr(e,t,n=be){const{immediate:o,deep:i,flush:r,once:l}=n,s=ze({},n),a=t&&o||!t&&r!=="post";let c;if(xn){if(r==="sync"){const p=Xu();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!a){const p=()=>{};return p.stop=yt,p.resume=yt,p.pause=yt,p}}const u=Ne;s.call=(p,v,b)=>ht(p,u,v,b);let d=!1;r==="post"?s.scheduler=p=>{ot(p,u&&u.suspense)}:r!=="sync"&&(d=!0,s.scheduler=(p,v)=>{v?p():lr(p)}),s.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=lu(e,t,s);return xn&&(c?c.push(h):a&&h()),h}function ed(e,t,n){const o=this.proxy,i=Ae(e)?e.includes(".")?da(o,e):()=>o[e]:e.bind(o,o);let r;le(t)?r=t:(r=t.handler,n=t);const l=mo(this),s=dr(i,r.bind(o),n);return l(),s}function da(e,t){const n=t.split(".");return()=>{let o=e;for(let i=0;i<n.length&&o;i++)o=o[n[i]];return o}}const td=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function nd(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||be;let i=n;const r=t.startsWith("update:"),l=r&&td(o,t.slice(7));l&&(l.trim&&(i=n.map(u=>Ae(u)?u.trim():u)),l.number&&(i=n.map(wc)));let s,a=o[s=pi(t)]||o[s=pi(et(t))];!a&&r&&(a=o[s=pi(Yt(t))]),a&&ht(a,e,6,i);const c=o[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ht(c,e,6,i)}}function fa(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(i!==void 0)return i;const r=e.emits;let l={},s=!1;if(!le(e)){const a=c=>{const u=fa(c,t,!0);u&&(s=!0,ze(l,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!s?(Le(e)&&o.set(e,null),null):(ie(r)?r.forEach(a=>l[a]=null):ze(l,r),Le(e)&&o.set(e,l),l)}function li(e,t){return!e||!ao(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,Yt(t))||me(e,t))}function Ci(e){const{type:t,vnode:n,proxy:o,withProxy:i,propsOptions:[r],slots:l,attrs:s,emit:a,render:c,renderCache:u,props:d,data:h,setupState:p,ctx:v,inheritAttrs:b}=e,S=jo(e);let C,L;try{if(n.shapeFlag&4){const _=i||o,H=_;C=at(c.call(H,_,u,d,p,h,v)),L=s}else{const _=t;C=at(_.length>1?_(d,{attrs:s,slots:l,emit:a}):_(d,null)),L=t.props?s:od(s)}}catch(_){qn.length=0,fo(_,e,1),C=ae(He)}let m=C;if(L&&b!==!1){const _=Object.keys(L),{shapeFlag:H}=m;_.length&&H&7&&(r&&_.some(Xi)&&(L=id(L,r)),m=Jt(m,L,!1,!0))}return n.dirs&&(m=Jt(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&eo(m,n.transition),C=m,jo(S),C}const od=e=>{let t;for(const n in e)(n==="class"||n==="style"||ao(n))&&((t||(t={}))[n]=e[n]);return t},id=(e,t)=>{const n={};for(const o in e)(!Xi(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function rd(e,t,n){const{props:o,children:i,component:r}=e,{props:l,children:s,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?Xr(o,l,c):!!l;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(l[h]!==o[h]&&!li(c,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:o===l?!1:o?l?Xr(o,l,c):!0:!!l;return!1}function Xr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const r=o[i];if(t[r]!==e[r]&&!li(n,r))return!0}return!1}function ha({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const pa=e=>e.__isSuspense;function ma(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):cu(e)}const ye=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),qn=[];let it=null;function W(e=!1){qn.push(it=e?null:[])}function ld(){qn.pop(),it=qn[qn.length-1]||null}let to=1;function Zr(e,t=!1){to+=e,e<0&&it&&t&&(it.hasOnce=!0)}function ga(e){return e.dynamicChildren=to>0?it||bn:null,ld(),to>0&&it&&it.push(e),e}function ne(e,t,n,o,i,r){return ga(re(e,t,n,o,i,r,!0))}function ke(e,t,n,o,i){return ga(ae(e,t,n,o,i,!0))}function no(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const va=({key:e})=>e??null,Do=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||Pe(e)||le(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function re(e,t=null,n=null,o=0,i=null,r=e===ye?0:1,l=!1,s=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&va(t),ref:t&&Do(t),scopeId:Ns,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return s?(fr(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=Ae(n)?8:16),to>0&&!l&&it&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&it.push(a),a}const ae=sd;function sd(e,t=null,n=null,o=0,i=null,r=!1){if((!e||e===Ru)&&(e=He),no(e)){const s=Jt(e,t,!0);return n&&fr(s,n),to>0&&!r&&it&&(s.shapeFlag&6?it[it.indexOf(e)]=s:it.push(s)),s.patchFlag=-2,s}if(_d(e)&&(e=e.__vccOpts),t){t=Mo(t);let{class:s,style:a}=t;s&&!Ae(s)&&(t.class=Ye(s)),Le(a)&&(ir(a)&&!ie(a)&&(a=ze({},a)),t.style=Rn(a))}const l=Ae(e)?1:pa(e)?128:$s(e)?64:Le(e)?4:le(e)?2:0;return re(e,t,n,o,i,l,r,!0)}function Mo(e){return e?ir(e)||na(e)?ze({},e):e:null}function Jt(e,t,n=!1,o=!1){const{props:i,ref:r,patchFlag:l,children:s,transition:a}=e,c=t?cd(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&va(c),ref:t&&t.ref?n&&r?ie(r)?r.concat(Do(t)):[r,Do(t)]:Do(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&eo(u,a.clone(u)),u}function zt(e=" ",t=0){return ae(un,null,e,t)}function ad(e,t){const n=ae(Gn,null,e);return n.staticCount=t,n}function Oe(e="",t=!1){return t?(W(),ke(He,null,e)):ae(He,null,e)}function at(e){return e==null||typeof e=="boolean"?ae(He):ie(e)?ae(ye,null,e.slice()):no(e)?jt(e):ae(un,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function fr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),fr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!na(t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else le(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),o&64?(n=16,t=[zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function cd(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=Ye([t.class,o.class]));else if(i==="style")t.style=Rn([t.style,o.style]);else if(ao(i)){const r=t[i],l=o[i];l&&r!==l&&!(ie(r)&&r.includes(l))&&(t[i]=r?[].concat(r,l):l)}else i!==""&&(t[i]=o[i])}return t}function st(e,t,n,o=null){ht(e,t,7,[n,o])}const ud=Xs();let dd=0;function fd(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||ud,r={uid:dd++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ia(o,i),emitsOptions:fa(o,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:o.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=nd.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const Ht=()=>Ne||$e;let qo,ji;{const e=Xo(),t=(n,o)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(o),r=>{i.length>1?i.forEach(l=>l(r)):i[0](r)}};qo=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),ji=t("__VUE_SSR_SETTERS__",n=>xn=n)}const mo=e=>{const t=Ne;return qo(e),e.scope.on(),()=>{e.scope.off(),qo(t)}},el=()=>{Ne&&Ne.scope.off(),qo(null)};function _a(e){return e.vnode.shapeFlag&4}let xn=!1;function hd(e,t=!1,n=!1){t&&ji(t);const{props:o,children:i}=e.vnode,r=_a(e);Uu(e,o,r,t),Gu(e,i,n||t);const l=r?pd(e,t):void 0;return t&&ji(!1),l}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Du);const{setup:o}=n;if(o){Dt();const i=e.setupContext=o.length>1?gd(e):null,r=mo(e),l=uo(o,e,0,[e.props,i]),s=ss(l);if(Mt(),r(),(s||e.sp)&&!an(e)&&sr(e),s){if(l.then(el,el),t)return l.then(a=>{tl(e,a)}).catch(a=>{fo(a,e,0)});e.asyncDep=l}else tl(e,l)}else ba(e)}function tl(e,t,n){le(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)&&(e.setupState=Ps(t)),ba(e)}function ba(e,t,n){const o=e.type;e.render||(e.render=o.render||yt);{const i=mo(e);Dt();try{Mu(e)}finally{Mt(),i()}}}const md={get(e,t){return qe(e,"get",""),e[t]}};function gd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,md),slots:e.slots,emit:e.emit,expose:t}}function si(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ps(Yc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}})):e.proxy}function vd(e,t=!0){return le(e)?e.displayName||e.name:e.name||t&&e.__name}function _d(e){return le(e)&&"__vccOpts"in e}const P=(e,t)=>iu(e,t,xn);function K(e,t,n){const o=arguments.length;return o===2?Le(t)&&!ie(t)?no(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&no(n)&&(n=[n]),ae(e,t,n))}const bd="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wi;const nl=typeof window<"u"&&window.trustedTypes;if(nl)try{Wi=nl.createPolicy("vue",{createHTML:e=>e})}catch{}const ya=Wi?e=>Wi.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",wd="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,ol=Tt&&Tt.createElement("template"),Sd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const i=t==="svg"?Tt.createElementNS(yd,e):t==="mathml"?Tt.createElementNS(wd,e):n?Tt.createElement(e,{is:n}):Tt.createElement(e);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>Tt.createTextNode(e),createComment:e=>Tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,i,r){const l=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ol.innerHTML=ya(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const s=ol.content;if(o==="svg"||o==="mathml"){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}t.insertBefore(s,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ut="transition",Fn="animation",oo=Symbol("_vtc"),wa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ed=ze({},Us,wa),Ld=e=>(e.displayName="Transition",e.props=Ed,e),hr=Ld((e,{slots:t})=>K(hu,Cd(e),t)),Zt=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},il=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function Cd(e){const t={};for(const w in e)w in wa||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:o,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=l,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=kd(i),b=v&&v[0],S=v&&v[1],{onBeforeEnter:C,onEnter:L,onEnterCancelled:m,onLeave:_,onLeaveCancelled:H,onBeforeAppear:X=C,onAppear:M=L,onAppearCancelled:E=m}=t,I=(w,z,F,U)=>{w._enterCancelled=U,en(w,z?u:s),en(w,z?c:l),F&&F()},D=(w,z)=>{w._isLeaving=!1,en(w,d),en(w,p),en(w,h),z&&z()},B=w=>(z,F)=>{const U=w?M:L,T=()=>I(z,w,F);Zt(U,[z,T]),rl(()=>{en(z,w?a:r),Lt(z,w?u:s),il(U)||ll(z,o,b,T)})};return ze(t,{onBeforeEnter(w){Zt(C,[w]),Lt(w,r),Lt(w,l)},onBeforeAppear(w){Zt(X,[w]),Lt(w,a),Lt(w,c)},onEnter:B(!1),onAppear:B(!0),onLeave(w,z){w._isLeaving=!0;const F=()=>D(w,z);Lt(w,d),w._enterCancelled?(Lt(w,h),cl()):(cl(),Lt(w,h)),rl(()=>{w._isLeaving&&(en(w,d),Lt(w,p),il(_)||ll(w,o,S,F))}),Zt(_,[w,F])},onEnterCancelled(w){I(w,!1,void 0,!0),Zt(m,[w])},onAppearCancelled(w){I(w,!0,void 0,!0),Zt(E,[w])},onLeaveCancelled(w){D(w),Zt(H,[w])}})}function kd(e){if(e==null)return null;if(Le(e))return[ki(e.enter),ki(e.leave)];{const t=ki(e);return[t,t]}}function ki(e){return Sc(e)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[oo]||(e[oo]=new Set)).add(t)}function en(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[oo];n&&(n.delete(t),n.size||(e[oo]=void 0))}function rl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xd=0;function ll(e,t,n,o){const i=e._endId=++xd,r=()=>{i===e._endId&&o()};if(n!=null)return setTimeout(r,n);const{type:l,timeout:s,propCount:a}=Td(e,t);if(!l)return o();const c=l+"end";let u=0;const d=()=>{e.removeEventListener(c,h),r()},h=p=>{p.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},s+1),e.addEventListener(c,h)}function Td(e,t){const n=window.getComputedStyle(e),o=v=>(n[v]||"").split(", "),i=o(`${Ut}Delay`),r=o(`${Ut}Duration`),l=sl(i,r),s=o(`${Fn}Delay`),a=o(`${Fn}Duration`),c=sl(s,a);let u=null,d=0,h=0;t===Ut?l>0&&(u=Ut,d=l,h=r.length):t===Fn?c>0&&(u=Fn,d=c,h=a.length):(d=Math.max(l,c),u=d>0?l>c?Ut:Fn:null,h=u?u===Ut?r.length:a.length:0);const p=u===Ut&&/\b(transform|all)(,|$)/.test(o(`${Ut}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function sl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>al(n)+al(e[o])))}function al(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function cl(){return document.body.offsetHeight}function Id(e,t,n){const o=e[oo];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ko=Symbol("_vod"),Sa=Symbol("_vsh"),Qo={beforeMount(e,{value:t},{transition:n}){e[Ko]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Vn(e,!0),o.enter(e)):o.leave(e,()=>{Vn(e,!1)}):Vn(e,t))},beforeUnmount(e,{value:t}){Vn(e,t)}};function Vn(e,t){e.style.display=t?e[Ko]:"none",e[Sa]=!t}const Ad=Symbol(""),Rd=/(^|;)\s*display\s*:/;function Od(e,t,n){const o=e.style,i=Ae(n);let r=!1;if(n&&!i){if(t)if(Ae(t))for(const l of t.split(";")){const s=l.slice(0,l.indexOf(":")).trim();n[s]==null&&zo(o,s,"")}else for(const l in t)n[l]==null&&zo(o,l,"");for(const l in n)l==="display"&&(r=!0),zo(o,l,n[l])}else if(i){if(t!==n){const l=o[Ad];l&&(n+=";"+l),o.cssText=n,r=Rd.test(n)}}else t&&e.removeAttribute("style");Ko in e&&(e[Ko]=r?o.display:"",e[Sa]&&(o.display="none"))}const ul=/\s*!important$/;function zo(e,t,n){if(ie(n))n.forEach(o=>zo(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Pd(e,t);ul.test(n)?e.setProperty(Yt(o),n.replace(ul,""),"important"):e[o]=n}}const dl=["Webkit","Moz","ms"],xi={};function Pd(e,t){const n=xi[t];if(n)return n;let o=et(t);if(o!=="filter"&&o in e)return xi[t]=o;o=co(o);for(let i=0;i<dl.length;i++){const r=dl[i]+o;if(r in e)return xi[t]=r}return t}const fl="http://www.w3.org/1999/xlink";function hl(e,t,n,o,i,r=Tc(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fl,t.slice(6,t.length)):e.setAttributeNS(fl,t,n):n==null||r&&!ds(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ft(n)?String(n):n)}function pl(e,t,n,o,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ya(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const s=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(s!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=ds(n):n==null&&s==="string"?(n="",l=!0):s==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(i||t)}function Dd(e,t,n,o){e.addEventListener(t,n,o)}function Md(e,t,n,o){e.removeEventListener(t,n,o)}const ml=Symbol("_vei");function zd(e,t,n,o,i=null){const r=e[ml]||(e[ml]={}),l=r[t];if(o&&l)l.value=o;else{const[s,a]=Fd(t);if(o){const c=r[t]=Nd(o,i);Dd(e,s,c,a)}else l&&(Md(e,s,l,a),r[t]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function Fd(e){let t;if(gl.test(e)){t={};let o;for(;o=e.match(gl);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let Ti=0;const Vd=Promise.resolve(),Hd=()=>Ti||(Vd.then(()=>Ti=0),Ti=Date.now());function Nd(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ht($d(o,n.value),t,5,[o])};return n.value=e,n.attached=Hd(),n}function $d(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const vl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ud=(e,t,n,o,i,r)=>{const l=i==="svg";t==="class"?Id(e,o,l):t==="style"?Od(e,n,o):ao(t)?Xi(t)||zd(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bd(e,t,o,l))?(pl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hl(e,t,o,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(o))?pl(e,et(t),o,r,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),hl(e,t,o,l))};function Bd(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&vl(t)&&le(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return vl(t)&&Ae(n)?!1:t in e}const jd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wd=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=i=>{if(!("key"in i))return;const r=Yt(i.key);if(t.some(l=>l===r||jd[l]===r))return e(i)})},Gd=ze({patchProp:Ud},Sd);let Ii,_l=!1;function qd(){return Ii=_l?Ii:Ku(Gd),_l=!0,Ii}const Kd=(...e)=>{const t=qd().createApp(...e),{mount:n}=t;return t.mount=o=>{const i=Jd(o);if(i)return n(i,!0,Qd(i))},t};function Qd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jd(e){return Ae(e)?document.querySelector(e):e}var go=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),Yd=/.md((\?|#).*)?$/,Xd=(e,t="/")=>go(e)||e.startsWith("/")&&!e.startsWith(t)&&!Yd.test(e),vo=e=>/^(https?:)?\/\//.test(e),bl=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},Zd="http://.",ef=(e,t)=>{if(!e.startsWith("/")&&t){const n=t.slice(0,t.lastIndexOf("/"));return bl(new URL(`${n}/${e}`,Zd).pathname)}return bl(e)},tf=(e,t)=>{const n=Object.keys(e).sort((o,i)=>{const r=i.split("/").length-o.split("/").length;return r!==0?r:i.length-o.length});for(const o of n)if(t.startsWith(o))return o;return"/"},nf=/(#|\?)/,Ea=e=>{const[t,...n]=e.split(nf);return{pathname:t,hashAndQueries:n.join("")}},of=["link","meta","script","style","noscript","template"],rf=["title","base"],lf=([e,t,n])=>rf.includes(e)?e:of.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([o,i])=>typeof i=="boolean"?i?[o,""]:null:[o,i]).filter(o=>o!=null).sort(([o],[i])=>o.localeCompare(i)),n]):null,sf=e=>{const t=new Set,n=[];return e.forEach(o=>{const i=lf(o);i&&!t.has(i)&&(t.add(i),n.push(o))}),n},af=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,La=e=>e.endsWith("/")?e.slice(0,-1):e,Ca=e=>e.startsWith("/")?e.slice(1):e,pr=e=>Object.prototype.toString.call(e)==="[object Object]",ut=e=>typeof e=="string";const cf="modulepreload",uf=function(e){return"/"+e},yl={},O=function(t,n,o){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=uf(a),a in yl)return;yl[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":cf,c||(d.as="script"),d.crossOrigin="",d.href=a,s&&d.setAttribute("nonce",s),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return i.then(l=>{for(const s of l||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},df=JSON.parse('{"/guide/5_hide&lock.html":"/guide/5_hide_lock.html","/guide/Q&A.html":"/guide/Q_A.html","/zh/guide/Q&A.html":"/zh/guide/Q_A.html"}'),ff=Object.fromEntries([["/",{loader:()=>O(()=>import("./index.html-D68JtU0h.js"),__vite__mapDeps([0,1])),meta:{title:"LVGL Master Designer"}}],["/get-started.html",{loader:()=>O(()=>import("./get-started.html-BWfaEZvw.js"),__vite__mapDeps([2,3])),meta:{title:"Getting Started"}}],["/guide/0_installation.html",{loader:()=>O(()=>import("./0_installation.html-BHHu5hmG.js"),[]),meta:{title:"Installation"}}],["/guide/100_transplant.html",{loader:()=>O(()=>import("./100_transplant.html-C82-gpjG.js"),[]),meta:{title:"Code Transplant"}}],["/guide/10_image_fs.html",{loader:()=>O(()=>import("./10_image_fs.html-TJSZ4jkn.js"),[]),meta:{title:"Use External Image File as Source"}}],["/guide/11_gif_animated.html",{loader:()=>O(()=>import("./11_gif_animated.html-CqKjomo4.js"),[]),meta:{title:"GIF Animated Image"}}],["/guide/12_lottie.html",{loader:()=>O(()=>import("./12_lottie.html-4m0lzoJz.js"),[]),meta:{title:"Lottie Animation"}}],["/guide/1_intro.html",{loader:()=>O(()=>import("./1_intro.html-E-zwjCVb.js"),[]),meta:{title:"Introduction"}}],["/guide/2_layout.html",{loader:()=>O(()=>import("./2_layout.html-OWnuwoMo.js"),__vite__mapDeps([4,5])),meta:{title:"Design"}}],["/guide/3_resource.html",{loader:()=>O(()=>import("./3_resource.html-ZM4V_bz7.js"),__vite__mapDeps([6,7])),meta:{title:"Resource Management"}}],["/guide/4_composite.html",{loader:()=>O(()=>import("./4_composite.html-CbmvNIDf.js"),__vite__mapDeps([8,9])),meta:{title:"Template Component"}}],["/guide/5_hide_lock.html",{loader:()=>O(()=>import("./5_hide_lock.html-BnjQerR9.js"),__vite__mapDeps([10,11])),meta:{title:"Hide and Lock"}}],["/guide/7_scr_mgmt.html",{loader:()=>O(()=>import("./7_scr_mgmt.html-DRQJGW1Q.js"),__vite__mapDeps([12,13])),meta:{title:"Screen Management"}}],["/guide/8_globalcomponents.html",{loader:()=>O(()=>import("./8_globalcomponents.html-BLa7yX5m.js"),__vite__mapDeps([14,15])),meta:{title:"Global Components"}}],["/guide/9_comm.html",{loader:()=>O(()=>import("./9_comm.html-CgBZbGpB.js"),[]),meta:{title:"Communication Commands and Events"}}],["/guide/Q_A.html",{loader:()=>O(()=>import("./Q_A.html-C4-71J_Y.js"),[]),meta:{title:"Q&A"}}],["/guide/",{loader:()=>O(()=>import("./index.html-CytuWIyW.js"),[]),meta:{title:"Documentation"}}],["/guide/build_mode.html",{loader:()=>O(()=>import("./build_mode.html-Bbso8err.js"),[]),meta:{title:"Build Mode"}}],["/release/release-v0.13.0.html",{loader:()=>O(()=>import("./release-v0.13.0.html-NP2JdF2K.js"),[]),meta:{title:"0.13.0"}}],["/release/release-v0.13.1.html",{loader:()=>O(()=>import("./release-v0.13.1.html-Dd4e8Ajz.js"),[]),meta:{title:"0.13.1"}}],["/release/release-v0.14.0.html",{loader:()=>O(()=>import("./release-v0.14.0.html-7pEnmCxG.js"),[]),meta:{title:"0.14.0"}}],["/release/release-v0.15.0.html",{loader:()=>O(()=>import("./release-v0.15.0.html-CbeDMoEL.js"),__vite__mapDeps([16,17])),meta:{title:"0.15.0"}}],["/release/release-v0.16.0.html",{loader:()=>O(()=>import("./release-v0.16.0.html-BSC1r3RK.js"),[]),meta:{title:"0.16.0"}}],["/release/release-v0.17.0.html",{loader:()=>O(()=>import("./release-v0.17.0.html-1gorrTsc.js"),[]),meta:{title:"0.17.0"}}],["/release/release-v0.17.1.html",{loader:()=>O(()=>import("./release-v0.17.1.html-AKvY2AJW.js"),[]),meta:{title:"0.17.1"}}],["/release/release-v0.18.0.html",{loader:()=>O(()=>import("./release-v0.18.0.html-Dg1Ub1nz.js"),[]),meta:{title:"0.18.0"}}],["/release/release-v0.20.0.html",{loader:()=>O(()=>import("./release-v0.20.0.html-DmlT_kRe.js"),[]),meta:{title:"0.20.0"}}],["/release/release-v0.21.0.html",{loader:()=>O(()=>import("./release-v0.21.0.html-BQ7mYHOw.js"),[]),meta:{title:"0.21.0"}}],["/release/release-v0.22.0.html",{loader:()=>O(()=>import("./release-v0.22.0.html-Dc_ibh0l.js"),[]),meta:{title:"0.22.0"}}],["/release/release-v0.25.0.html",{loader:()=>O(()=>import("./release-v0.25.0.html-D_gpQsQe.js"),[]),meta:{title:"0.25.0"}}],["/release/release-v0.26.0.html",{loader:()=>O(()=>import("./release-v0.26.0.html-BI00IS0g.js"),[]),meta:{title:"0.26.0"}}],["/release/release-v0.27.0.html",{loader:()=>O(()=>import("./release-v0.27.0.html-CHSLTdwR.js"),[]),meta:{title:"0.27.0"}}],["/release/release-v0.28.0.html",{loader:()=>O(()=>import("./release-v0.28.0.html-CPLDtFvO.js"),[]),meta:{title:"0.28.0"}}],["/release/release-v0.30.0.html",{loader:()=>O(()=>import("./release-v0.30.0.html-DC5BR7vO.js"),[]),meta:{title:"0.30.0"}}],["/release/release-v0.32.0.html",{loader:()=>O(()=>import("./release-v0.32.0.html-BBamPaSz.js"),[]),meta:{title:"0.32.0"}}],["/release/release-v0.33.0.html",{loader:()=>O(()=>import("./release-v0.33.0.html-BdTnUbCP.js"),[]),meta:{title:"0.33.0"}}],["/release/release-v0.33.1.html",{loader:()=>O(()=>import("./release-v0.33.1.html-BhkrTq4n.js"),[]),meta:{title:"0.33.1"}}],["/release/release-v0.34.0.html",{loader:()=>O(()=>import("./release-v0.34.0.html-C1P_1kHB.js"),[]),meta:{title:"0.34.0"}}],["/release/release-v0.35.0.html",{loader:()=>O(()=>import("./release-v0.35.0.html-CKuVo5Vt.js"),[]),meta:{title:"0.35.0"}}],["/release/release-v0.36.0.html",{loader:()=>O(()=>import("./release-v0.36.0.html-BOYu607T.js"),[]),meta:{title:"0.36.0"}}],["/zh/",{loader:()=>O(()=>import("./index.html-BqJhGaKc.js"),__vite__mapDeps([18,1])),meta:{title:"LVGL设计大师"}}],["/zh/get-started.html",{loader:()=>O(()=>import("./get-started.html-DwC740Xn.js"),__vite__mapDeps([19,3])),meta:{title:"快速开始"}}],["/guide/hoc/0_intro.html",{loader:()=>O(()=>import("./0_intro.html-DFp7i-6C.js"),__vite__mapDeps([20,21])),meta:{title:"Introduction"}}],["/guide/hoc/1_statebtn.html",{loader:()=>O(()=>import("./1_statebtn.html-BTSgveI4.js"),__vite__mapDeps([22,23])),meta:{title:"State Button"}}],["/guide/hoc/2_labelslider.html",{loader:()=>O(()=>import("./2_labelslider.html-Dp4Tmfsb.js"),__vite__mapDeps([24,25])),meta:{title:"Label Slider"}}],["/guide/hoc/3_valueslider.html",{loader:()=>O(()=>import("./3_valueslider.html-AGEq_9mf.js"),[]),meta:{title:"Value Slider"}}],["/guide/hoc/4_checkgroup.html",{loader:()=>O(()=>import("./4_checkgroup.html-qYTv32_3.js"),[]),meta:{title:"Check Group & Radio Group"}}],["/guide/hoc/5_drawer.html",{loader:()=>O(()=>import("./5_drawer.html-DaaQmQeb.js"),[]),meta:{title:"Drawer"}}],["/guide/hoc/6_statusbar.html",{loader:()=>O(()=>import("./6_statusbar.html-SZhQ3SGu.js"),[]),meta:{title:"StatusBar"}}],["/guide/hoc/7_navigatebar.html",{loader:()=>O(()=>import("./7_navigatebar.html-DFc1jSW7.js"),[]),meta:{title:"NavigateBar"}}],["/guide/hoc/",{loader:()=>O(()=>import("./index.html-DWnxI_Nj.js"),[]),meta:{title:"Higher Order Components"}}],["/zh/guide/0_installation.html",{loader:()=>O(()=>import("./0_installation.html-CuAUllc5.js"),[]),meta:{title:"安装"}}],["/zh/guide/100_transplant.html",{loader:()=>O(()=>import("./100_transplant.html-DwjGysN9.js"),[]),meta:{title:"代码移植"}}],["/zh/guide/10_image_fs.html",{loader:()=>O(()=>import("./10_image_fs.html-Bt13RrPg.js"),[]),meta:{title:"使用外部图像文件作为源"}}],["/zh/guide/11_gif_animated.html",{loader:()=>O(()=>import("./11_gif_animated.html-D60iaRdZ.js"),[]),meta:{title:"GIF动画图像"}}],["/zh/guide/12_lottie.html",{loader:()=>O(()=>import("./12_lottie.html-BDmp-SQw.js"),[]),meta:{title:"Lottie动画"}}],["/zh/guide/1_intro.html",{loader:()=>O(()=>import("./1_intro.html-CWFkWWPy.js"),[]),meta:{title:"介绍"}}],["/zh/guide/2_layout.html",{loader:()=>O(()=>import("./2_layout.html-BFsrCRFI.js"),__vite__mapDeps([26,5])),meta:{title:"设计"}}],["/zh/guide/3_resource.html",{loader:()=>O(()=>import("./3_resource.html-CD7nVNQx.js"),__vite__mapDeps([27,7])),meta:{title:"资源管理"}}],["/zh/guide/4_composite.html",{loader:()=>O(()=>import("./4_composite.html-BwYyPU1N.js"),__vite__mapDeps([28,9])),meta:{title:"模板组件"}}],["/zh/guide/5_hide_and_lock.html",{loader:()=>O(()=>import("./5_hide_and_lock.html-BS3n7F6i.js"),__vite__mapDeps([29,11])),meta:{title:"隐藏和锁定"}}],["/zh/guide/7_scr_mgmt.html",{loader:()=>O(()=>import("./7_scr_mgmt.html-DmFFTMOh.js"),__vite__mapDeps([30,13])),meta:{title:"屏幕管理"}}],["/zh/guide/8_globalcomponents.html",{loader:()=>O(()=>import("./8_globalcomponents.html-G-u1Xam2.js"),__vite__mapDeps([31,15])),meta:{title:"全局组件"}}],["/zh/guide/9_comm.html",{loader:()=>O(()=>import("./9_comm.html-D7MCp4Jg.js"),[]),meta:{title:"通信命令和事件"}}],["/zh/guide/Q_A.html",{loader:()=>O(()=>import("./Q_A.html-RQ7FoEPk.js"),[]),meta:{title:"问答"}}],["/zh/guide/",{loader:()=>O(()=>import("./index.html-DPSGiZxQ.js"),[]),meta:{title:"文档"}}],["/zh/guide/build_mode.html",{loader:()=>O(()=>import("./build_mode.html-ICjdFviK.js"),[]),meta:{title:"构建模式"}}],["/zh/release/release-v0.13.0.html",{loader:()=>O(()=>import("./release-v0.13.0.html-BWCvNIak.js"),[]),meta:{title:"0.13.0"}}],["/zh/release/release-v0.13.1.html",{loader:()=>O(()=>import("./release-v0.13.1.html-CbJP6nAc.js"),[]),meta:{title:"0.13.1"}}],["/zh/release/release-v0.14.0.html",{loader:()=>O(()=>import("./release-v0.14.0.html-OXHwluii.js"),[]),meta:{title:"0.14.0"}}],["/zh/release/release-v0.15.0.html",{loader:()=>O(()=>import("./release-v0.15.0.html-CPaZcAjX.js"),__vite__mapDeps([32,17])),meta:{title:"0.15.0"}}],["/zh/release/release-v0.16.0.html",{loader:()=>O(()=>import("./release-v0.16.0.html-D0C-BmGV.js"),[]),meta:{title:"0.16.0"}}],["/zh/release/release-v0.17.0.html",{loader:()=>O(()=>import("./release-v0.17.0.html-DQY_6QoR.js"),[]),meta:{title:"0.17.0"}}],["/zh/release/release-v0.17.1.html",{loader:()=>O(()=>import("./release-v0.17.1.html-kzEvC6hJ.js"),[]),meta:{title:"0.17.1"}}],["/zh/release/release-v0.18.0.html",{loader:()=>O(()=>import("./release-v0.18.0.html-BeKO5wOa.js"),[]),meta:{title:"0.18.0"}}],["/zh/release/release-v0.20.0.html",{loader:()=>O(()=>import("./release-v0.20.0.html-DUM5rc_s.js"),[]),meta:{title:"0.20.0"}}],["/zh/release/release-v0.21.0.html",{loader:()=>O(()=>import("./release-v0.21.0.html-B-ef4TQh.js"),[]),meta:{title:"0.21.0"}}],["/zh/release/release-v0.22.0.html",{loader:()=>O(()=>import("./release-v0.22.0.html-CFDEghYm.js"),[]),meta:{title:"0.22.0"}}],["/zh/release/release-v0.25.0.html",{loader:()=>O(()=>import("./release-v0.25.0.html-CxPPaBis.js"),[]),meta:{title:"0.25.0"}}],["/zh/release/release-v0.26.0.html",{loader:()=>O(()=>import("./release-v0.26.0.html-ppvnlA2h.js"),[]),meta:{title:"0.26.0"}}],["/zh/release/release-v0.27.0.html",{loader:()=>O(()=>import("./release-v0.27.0.html-s6CK1-0F.js"),[]),meta:{title:"0.27.0"}}],["/zh/release/release-v0.28.0.html",{loader:()=>O(()=>import("./release-v0.28.0.html-DOMoJRQ3.js"),[]),meta:{title:"0.28.0"}}],["/zh/release/release-v0.30.0.html",{loader:()=>O(()=>import("./release-v0.30.0.html--yWBkul_.js"),[]),meta:{title:"0.30.0"}}],["/zh/release/release-v0.32.0.html",{loader:()=>O(()=>import("./release-v0.32.0.html-BHCKKpIY.js"),[]),meta:{title:"0.32.0"}}],["/zh/release/release-v0.33.0.html",{loader:()=>O(()=>import("./release-v0.33.0.html-K7PqRo_E.js"),[]),meta:{title:"0.33.0"}}],["/zh/release/release-v0.33.1.html",{loader:()=>O(()=>import("./release-v0.33.1.html-3QPOF2P2.js"),[]),meta:{title:"0.33.1"}}],["/zh/release/release-v0.34.0.html",{loader:()=>O(()=>import("./release-v0.34.0.html-BHd4cxgh.js"),[]),meta:{title:"0.34.0"}}],["/zh/release/release-v0.35.0.html",{loader:()=>O(()=>import("./release-v0.35.0.html-KHd9ZjMb.js"),[]),meta:{title:"0.35.0"}}],["/zh/release/release-v0.36.0.html",{loader:()=>O(()=>import("./release-v0.36.0.html-wSH23cY0.js"),[]),meta:{title:"0.36.0"}}],["/zh/guide/hoc/0_intro.html",{loader:()=>O(()=>import("./0_intro.html-1MAfIEzF.js"),__vite__mapDeps([33,21])),meta:{title:"介绍"}}],["/zh/guide/hoc/1_statebtn.html",{loader:()=>O(()=>import("./1_statebtn.html-Y_-jlC31.js"),__vite__mapDeps([34,23])),meta:{title:"状态按钮"}}],["/zh/guide/hoc/2_labelslider.html",{loader:()=>O(()=>import("./2_labelslider.html-C7jFbQRa.js"),__vite__mapDeps([35,25])),meta:{title:"标签滑块"}}],["/zh/guide/hoc/3_valueslider.html",{loader:()=>O(()=>import("./3_valueslider.html-VPsXKBmU.js"),[]),meta:{title:"数值滑块"}}],["/zh/guide/hoc/4_checkgroup.html",{loader:()=>O(()=>import("./4_checkgroup.html-CVa6zQ7M.js"),[]),meta:{title:"复选框组和单选框组"}}],["/zh/guide/hoc/5_drawer.html",{loader:()=>O(()=>import("./5_drawer.html-B_FrJrVl.js"),[]),meta:{title:"抽屉"}}],["/zh/guide/hoc/6_statusbar.html",{loader:()=>O(()=>import("./6_statusbar.html-B5AhSgYt.js"),[]),meta:{title:"状态栏"}}],["/zh/guide/hoc/7_navigatebar.html",{loader:()=>O(()=>import("./7_navigatebar.html--MFWEiKA.js"),[]),meta:{title:"导航栏"}}],["/zh/guide/hoc/",{loader:()=>O(()=>import("./index.html-PYNjnkP4.js"),[]),meta:{title:"高阶组件"}}],["/404.html",{loader:()=>O(()=>import("./404.html-Dhe-3OnC.js"),[]),meta:{title:""}}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function ka(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ka(e.default)}const pe=Object.assign;function Ai(e,t){const n={};for(const o in t){const i=t[o];n[o]=pt(i)?i.map(e):e(i)}return n}const Kn=()=>{},pt=Array.isArray,xa=/#/g,pf=/&/g,mf=/\//g,gf=/=/g,vf=/\?/g,Ta=/\+/g,_f=/%5B/g,bf=/%5D/g,Ia=/%5E/g,yf=/%60/g,Aa=/%7B/g,wf=/%7C/g,Ra=/%7D/g,Sf=/%20/g;function mr(e){return encodeURI(""+e).replace(wf,"|").replace(_f,"[").replace(bf,"]")}function Ef(e){return mr(e).replace(Aa,"{").replace(Ra,"}").replace(Ia,"^")}function Gi(e){return mr(e).replace(Ta,"%2B").replace(Sf,"+").replace(xa,"%23").replace(pf,"%26").replace(yf,"`").replace(Aa,"{").replace(Ra,"}").replace(Ia,"^")}function Lf(e){return Gi(e).replace(gf,"%3D")}function Cf(e){return mr(e).replace(xa,"%23").replace(vf,"%3F")}function kf(e){return e==null?"":Cf(e).replace(mf,"%2F")}function io(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const xf=/\/$/,Tf=e=>e.replace(xf,"");function Ri(e,t,n="/"){let o,i={},r="",l="";const s=t.indexOf("#");let a=t.indexOf("?");return s<a&&s>=0&&(a=-1),a>-1&&(o=t.slice(0,a),r=t.slice(a+1,s>-1?s:t.length),i=e(r)),s>-1&&(o=o||t.slice(0,s),l=t.slice(s,t.length)),o=Of(o??t,n),{fullPath:o+(r&&"?")+r+l,path:o,query:i,hash:io(l)}}function If(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Af(e,t,n){const o=t.matched.length-1,i=n.matched.length-1;return o>-1&&o===i&&Tn(t.matched[o],n.matched[i])&&Oa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rf(e[n],t[n]))return!1;return!0}function Rf(e,t){return pt(e)?Sl(e,t):pt(t)?Sl(t,e):e===t}function Sl(e,t){return pt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Of(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let r=n.length-1,l,s;for(l=0;l<o.length;l++)if(s=o[l],s!==".")if(s==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(l).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ro;(function(e){e.pop="pop",e.push="push"})(ro||(ro={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function Pf(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tf(e)}const Df=/^[^#]+#/;function Mf(e,t){return e.replace(Df,"#")+t}function zf(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const ai=()=>({left:window.scrollX,top:window.scrollY});function Ff(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=zf(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function El(e,t){return(history.state?history.state.position-t:-1)+e}const qi=new Map;function Vf(e,t){qi.set(e,t)}function Hf(e){const t=qi.get(e);return qi.delete(e),t}let Nf=()=>location.protocol+"//"+location.host;function Pa(e,t){const{pathname:n,search:o,hash:i}=t,r=e.indexOf("#");if(r>-1){let s=i.includes(e.slice(r))?e.slice(r).length:1,a=i.slice(s);return a[0]!=="/"&&(a="/"+a),wl(a,"")}return wl(n,e)+o+i}function $f(e,t,n,o){let i=[],r=[],l=null;const s=({state:h})=>{const p=Pa(e,location),v=n.value,b=t.value;let S=0;if(h){if(n.value=p,t.value=h,l&&l===v){l=null;return}S=b?h.position-b.position:0}else o(p);i.forEach(C=>{C(n.value,v,{delta:S,type:ro.pop,direction:S?S>0?Qn.forward:Qn.back:Qn.unknown})})};function a(){l=n.value}function c(h){i.push(h);const p=()=>{const v=i.indexOf(h);v>-1&&i.splice(v,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(pe({},h.state,{scroll:ai()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function Ll(e,t,n,o=!1,i=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:i?ai():null}}function Uf(e){const{history:t,location:n}=window,o={value:Pa(e,n)},i={value:t.state};i.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Nf()+e+a;try{t[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function l(a,c){const u=pe({},t.state,Ll(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),o.value=a}function s(a,c){const u=pe({},i.value,t.state,{forward:a,scroll:ai()});r(u.current,u,!0);const d=pe({},Ll(o.value,a,null),{position:u.position+1},c);r(a,d,!1),o.value=a}return{location:o,state:i,push:s,replace:l}}function Bf(e){e=Pf(e);const t=Uf(e),n=$f(e,t.state,t.location,t.replace);function o(r,l=!0){l||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:e,go:o,createHref:Mf.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function jf(e){return typeof e=="string"||e&&typeof e=="object"}function Da(e){return typeof e=="string"||typeof e=="symbol"}const Ma=Symbol("");var Cl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cl||(Cl={}));function In(e,t){return pe(new Error,{type:e,[Ma]:!0},t)}function Ct(e,t){return e instanceof Error&&Ma in e&&(t==null||!!(e.type&t))}const kl="[^/]+?",Wf={sensitive:!1,strict:!1,start:!0,end:!0},Gf=/[.+*?^${}()[\]/\\]/g;function qf(e,t){const n=pe({},Wf,t),o=[];let i=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Gf,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:b,optional:S,regexp:C}=h;r.push({name:v,repeatable:b,optional:S});const L=C||kl;if(L!==kl){p+=10;try{new RegExp(`(${L})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+_.message)}}let m=b?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(m=S&&c.length<2?`(?:/${m})`:"/"+m),S&&(m+="?"),i+=m,p+=20,S&&(p+=-8),b&&(p+=-20),L===".*"&&(p+=-50)}u.push(p)}o.push(u)}if(n.strict&&n.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const l=new RegExp(i,n.sensitive?"":"i");function s(c){const u=c.match(l),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=r[h-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function a(c){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:b,optional:S}=p,C=v in c?c[v]:"";if(pt(C)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=pt(C)?C.join("/"):C;if(!L)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=L}}return u||"/"}return{re:l,score:o,keys:r,parse:s,stringify:a}}function Kf(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function za(e,t){let n=0;const o=e.score,i=t.score;for(;n<o.length&&n<i.length;){const r=Kf(o[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-o.length)===1){if(xl(o))return 1;if(xl(i))return-1}return i.length-o.length}function xl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qf={type:0,value:""},Jf=/[a-zA-Z0-9_]/;function Yf(e){if(!e)return[[]];if(e==="/")return[[Qf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,o=n;const i=[];let r;function l(){r&&i.push(r),r=[]}let s=0,a,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=a}for(;s<e.length;){if(a=e[s++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),l()):a===":"?(d(),n=1):h();break;case 4:h(),n=o;break;case 1:a==="("?n=2:Jf.test(a)?h():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),l(),i}function Xf(e,t,n){const o=qf(Yf(e.path),n),i=pe(o,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Zf(e,t){const n=[],o=new Map;t=Rl({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function r(d,h,p){const v=!p,b=Il(d);b.aliasOf=p&&p.record;const S=Rl(t,d),C=[b];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of _)C.push(Il(pe({},b,{components:p?p.record.components:b.components,path:H,aliasOf:p?p.record:b})))}let L,m;for(const _ of C){const{path:H}=_;if(h&&H[0]!=="/"){const X=h.record.path,M=X[X.length-1]==="/"?"":"/";_.path=h.record.path+(H&&M+H)}if(L=Xf(_,h,S),p?p.alias.push(L):(m=m||L,m!==L&&m.alias.push(L),v&&d.name&&!Al(L)&&l(d.name)),Fa(L)&&a(L),b.children){const X=b.children;for(let M=0;M<X.length;M++)r(X[M],L,p&&p.children[M])}p=p||L}return m?()=>{l(m)}:Kn}function l(d){if(Da(d)){const h=o.get(d);h&&(o.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(l),h.alias.forEach(l))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&o.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function s(){return n}function a(d){const h=nh(d,n);n.splice(h,0,d),d.record.name&&!Al(d)&&o.set(d.record.name,d)}function c(d,h){let p,v={},b,S;if("name"in d&&d.name){if(p=o.get(d.name),!p)throw In(1,{location:d});S=p.record.name,v=pe(Tl(h.params,p.keys.filter(m=>!m.optional).concat(p.parent?p.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),d.params&&Tl(d.params,p.keys.map(m=>m.name))),b=p.stringify(v)}else if(d.path!=null)b=d.path,p=n.find(m=>m.re.test(b)),p&&(v=p.parse(b),S=p.record.name);else{if(p=h.name?o.get(h.name):n.find(m=>m.re.test(h.path)),!p)throw In(1,{location:d,currentLocation:h});S=p.record.name,v=pe({},h.params,d.params),b=p.stringify(v)}const C=[];let L=p;for(;L;)C.unshift(L.record),L=L.parent;return{name:S,path:b,params:v,matched:C,meta:th(C)}}e.forEach(d=>r(d));function u(){n.length=0,o.clear()}return{addRoute:r,resolve:c,removeRoute:l,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Tl(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Il(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:eh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function eh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function Al(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function th(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function Rl(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function nh(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;za(e,t[r])<0?o=r:n=r+1}const i=oh(e);return i&&(o=t.lastIndexOf(i,o-1)),o}function oh(e){let t=e;for(;t=t.parent;)if(Fa(t)&&za(e,t)===0)return t}function Fa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ih(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const r=o[i].replace(Ta," "),l=r.indexOf("="),s=io(l<0?r:r.slice(0,l)),a=l<0?null:io(r.slice(l+1));if(s in t){let c=t[s];pt(c)||(c=t[s]=[c]),c.push(a)}else t[s]=a}return t}function Ol(e){let t="";for(let n in e){const o=e[n];if(n=Lf(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(pt(o)?o.map(r=>r&&Gi(r)):[o&&Gi(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function rh(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=pt(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const lh=Symbol(""),Pl=Symbol(""),ci=Symbol(""),gr=Symbol(""),Ki=Symbol("");function Hn(){let e=[];function t(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,o,i,r=l=>l()){const l=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=h=>{h===!1?a(In(4,{from:n,to:t})):h instanceof Error?a(h):jf(h)?a(In(2,{from:t,to:h})):(l&&o.enterCallbacks[i]===l&&typeof h=="function"&&l.push(h),s())},u=r(()=>e.call(o&&o.instances[i],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(h=>a(h))})}function Oi(e,t,n,o,i=r=>r()){const r=[];for(const l of e)for(const s in l.components){let a=l.components[s];if(!(t!=="beforeRouteEnter"&&!l.instances[s]))if(ka(a)){const u=(a.__vccOpts||a)[t];u&&r.push(Wt(u,n,o,l,s,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${l.path}"`);const d=hf(u)?u.default:u;l.mods[s]=u,l.components[s]=d;const p=(d.__vccOpts||d)[t];return p&&Wt(p,n,o,l,s,i)()}))}}return r}function Dl(e){const t=Ue(ci),n=Ue(gr),o=P(()=>{const a=Y(e.to);return t.resolve(a)}),i=P(()=>{const{matched:a}=o.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Tn.bind(null,u));if(h>-1)return h;const p=Ml(a[c-2]);return c>1&&Ml(u)===p&&d[d.length-1].path!==p?d.findIndex(Tn.bind(null,a[c-2])):h}),r=P(()=>i.value>-1&&dh(n.params,o.value.params)),l=P(()=>i.value>-1&&i.value===n.matched.length-1&&Oa(n.params,o.value.params));function s(a={}){if(uh(a)){const c=t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(Kn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:o,href:P(()=>o.value.href),isActive:r,isExactActive:l,navigate:s}}function sh(e){return e.length===1?e[0]:e}const ah=ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dl,setup(e,{slots:t}){const n=dn(Dl(e)),{options:o}=Ue(ci),i=P(()=>({[zl(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[zl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&sh(t.default(n));return e.custom?r:K("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ch=ah;function uh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dh(e,t){for(const n in t){const o=t[n],i=e[n];if(typeof o=="string"){if(o!==i)return!1}else if(!pt(i)||i.length!==o.length||o.some((r,l)=>r!==i[l]))return!1}return!0}function Ml(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zl=(e,t,n)=>e??t??n,fh=ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Ue(Ki),i=P(()=>e.route||o.value),r=Ue(Pl,0),l=P(()=>{let c=Y(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),s=P(()=>i.value.matched[l.value]);qt(Pl,P(()=>l.value+1)),qt(lh,s),qt(Ki,i);const a=De();return Ke(()=>[a.value,s.value,e.name],([c,u,d],[h,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Tn(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=s.value,h=d&&d.components[u];if(!h)return Fl(n.default,{Component:h,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,S=K(h,pe({},v,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return Fl(n.default,{Component:S,route:c})||S}}});function Fl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const hh=fh;function ph(e){const t=Zf(e.routes,e),n=e.parseQuery||ih,o=e.stringifyQuery||Ol,i=e.history,r=Hn(),l=Hn(),s=Hn(),a=we(xt);let c=xt;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ai.bind(null,x=>""+x),d=Ai.bind(null,kf),h=Ai.bind(null,io);function p(x,Q){let G,Z;return Da(x)?(G=t.getRecordMatcher(x),Z=Q):Z=x,t.addRoute(Z,G)}function v(x){const Q=t.getRecordMatcher(x);Q&&t.removeRoute(Q)}function b(){return t.getRoutes().map(x=>x.record)}function S(x){return!!t.getRecordMatcher(x)}function C(x,Q){if(Q=pe({},Q||a.value),typeof x=="string"){const g=Ri(n,x,Q.path),y=t.resolve({path:g.path},Q),R=i.createHref(g.fullPath);return pe(g,y,{params:h(y.params),hash:io(g.hash),redirectedFrom:void 0,href:R})}let G;if(x.path!=null)G=pe({},x,{path:Ri(n,x.path,Q.path).path});else{const g=pe({},x.params);for(const y in g)g[y]==null&&delete g[y];G=pe({},x,{params:d(g)}),Q.params=d(Q.params)}const Z=t.resolve(G,Q),de=x.hash||"";Z.params=u(h(Z.params));const _e=If(o,pe({},x,{hash:Ef(de),path:Z.path})),f=i.createHref(_e);return pe({fullPath:_e,hash:de,query:o===Ol?rh(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:f})}function L(x){return typeof x=="string"?Ri(n,x,a.value.path):pe({},x)}function m(x,Q){if(c!==x)return In(8,{from:Q,to:x})}function _(x){return M(x)}function H(x){return _(pe(L(x),{replace:!0}))}function X(x){const Q=x.matched[x.matched.length-1];if(Q&&Q.redirect){const{redirect:G}=Q;let Z=typeof G=="function"?G(x):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=L(Z):{path:Z},Z.params={}),pe({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function M(x,Q){const G=c=C(x),Z=a.value,de=x.state,_e=x.force,f=x.replace===!0,g=X(G);if(g)return M(pe(L(g),{state:typeof g=="object"?pe({},de,g.state):de,force:_e,replace:f}),Q||G);const y=G;y.redirectedFrom=Q;let R;return!_e&&Af(o,Z,G)&&(R=In(16,{to:y,from:Z}),Fe(Z,Z,!0,!1)),(R?Promise.resolve(R):D(y,Z)).catch(k=>Ct(k)?Ct(k,2)?k:Re(k):j(k,y,Z)).then(k=>{if(k){if(Ct(k,2))return M(pe({replace:f},L(k.to),{state:typeof k.to=="object"?pe({},de,k.to.state):de,force:_e}),Q||y)}else k=w(y,Z,!0,f,de);return B(y,Z,k),k})}function E(x,Q){const G=m(x,Q);return G?Promise.reject(G):Promise.resolve()}function I(x){const Q=$t.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(x):x()}function D(x,Q){let G;const[Z,de,_e]=mh(x,Q);G=Oi(Z.reverse(),"beforeRouteLeave",x,Q);for(const g of Z)g.leaveGuards.forEach(y=>{G.push(Wt(y,x,Q))});const f=E.bind(null,x,Q);return G.push(f),Xe(G).then(()=>{G=[];for(const g of r.list())G.push(Wt(g,x,Q));return G.push(f),Xe(G)}).then(()=>{G=Oi(de,"beforeRouteUpdate",x,Q);for(const g of de)g.updateGuards.forEach(y=>{G.push(Wt(y,x,Q))});return G.push(f),Xe(G)}).then(()=>{G=[];for(const g of _e)if(g.beforeEnter)if(pt(g.beforeEnter))for(const y of g.beforeEnter)G.push(Wt(y,x,Q));else G.push(Wt(g.beforeEnter,x,Q));return G.push(f),Xe(G)}).then(()=>(x.matched.forEach(g=>g.enterCallbacks={}),G=Oi(_e,"beforeRouteEnter",x,Q,I),G.push(f),Xe(G))).then(()=>{G=[];for(const g of l.list())G.push(Wt(g,x,Q));return G.push(f),Xe(G)}).catch(g=>Ct(g,8)?g:Promise.reject(g))}function B(x,Q,G){s.list().forEach(Z=>I(()=>Z(x,Q,G)))}function w(x,Q,G,Z,de){const _e=m(x,Q);if(_e)return _e;const f=Q===xt,g=vn?history.state:{};G&&(Z||f?i.replace(x.fullPath,pe({scroll:f&&g&&g.scroll},de)):i.push(x.fullPath,de)),a.value=x,Fe(x,Q,G,f),Re()}let z;function F(){z||(z=i.listen((x,Q,G)=>{if(!gt.listening)return;const Z=C(x),de=X(Z);if(de){M(pe(de,{replace:!0,force:!0}),Z).catch(Kn);return}c=Z;const _e=a.value;vn&&Vf(El(_e.fullPath,G.delta),ai()),D(Z,_e).catch(f=>Ct(f,12)?f:Ct(f,2)?(M(pe(L(f.to),{force:!0}),Z).then(g=>{Ct(g,20)&&!G.delta&&G.type===ro.pop&&i.go(-1,!1)}).catch(Kn),Promise.reject()):(G.delta&&i.go(-G.delta,!1),j(f,Z,_e))).then(f=>{f=f||w(Z,_e,!1),f&&(G.delta&&!Ct(f,8)?i.go(-G.delta,!1):G.type===ro.pop&&Ct(f,20)&&i.go(-1,!1)),B(Z,_e,f)}).catch(Kn)}))}let U=Hn(),T=Hn(),ee;function j(x,Q,G){Re(x);const Z=T.list();return Z.length?Z.forEach(de=>de(x,Q,G)):console.error(x),Promise.reject(x)}function ue(){return ee&&a.value!==xt?Promise.resolve():new Promise((x,Q)=>{U.add([x,Q])})}function Re(x){return ee||(ee=!x,F(),U.list().forEach(([Q,G])=>x?G(x):Q()),U.reset()),x}function Fe(x,Q,G,Z){const{scrollBehavior:de}=e;if(!vn||!de)return Promise.resolve();const _e=!G&&Hf(El(x.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return ho().then(()=>de(x,Q,_e)).then(f=>f&&Ff(f)).catch(f=>j(f,x,Q))}const je=x=>i.go(x);let Nt;const $t=new Set,gt={currentRoute:a,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:C,options:e,push:_,replace:H,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:r.add,beforeResolve:l.add,afterEach:s.add,onError:T.add,isReady:ue,install(x){const Q=this;x.component("RouterLink",ch),x.component("RouterView",hh),x.config.globalProperties.$router=Q,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(a)}),vn&&!Nt&&a.value===xt&&(Nt=!0,_(i.location).catch(de=>{}));const G={};for(const de in xt)Object.defineProperty(G,de,{get:()=>a.value[de],enumerable:!0});x.provide(ci,Q),x.provide(gr,Rs(G)),x.provide(Ki,a);const Z=x.unmount;$t.add(x),x.unmount=function(){$t.delete(x),$t.size<1&&(c=xt,z&&z(),z=null,a.value=xt,Nt=!1,ee=!1),Z()}}};function Xe(x){return x.reduce((Q,G)=>Q.then(()=>I(G)),Promise.resolve())}return gt}function mh(e,t){const n=[],o=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let l=0;l<r;l++){const s=t.matched[l];s&&(e.matched.find(c=>Tn(c,s))?o.push(s):n.push(s));const a=e.matched[l];a&&(t.matched.find(c=>Tn(c,a))||i.push(a))}return[n,o,i]}function On(){return Ue(ci)}function Pn(e){return Ue(gr)}var vr=Symbol(""),mt=()=>{const e=Ue(vr);if(!e)throw new Error("useClientData() is called without provider.");return e},gh=()=>mt().pageComponent,_r=()=>mt().pageData,_o=()=>mt().pageFrontmatter,vh=()=>mt().pageHead,br=()=>mt().pageLang,_h=()=>mt().pageLayout,Va=()=>mt().routeLocale,Ha=()=>mt().routePath,bh=()=>mt().routes,yh=()=>mt().siteData,Fo=we([]),bo=e=>{Fo.value.push(e),ri(()=>{Fo.value=Fo.value.filter(t=>t!==e)})},wh=Symbol(""),Qi=we(df),Ln=we(ff),Na=(e,t)=>{const n=ef(e,t);if(Ln.value[n])return n;const o=encodeURI(n);if(Ln.value[o])return o;const i=Qi.value[n]||Qi.value[o];return i||n},lo=(e,t)=>{const{pathname:n,hashAndQueries:o}=Ea(e),i=Na(n,t),r=i+o;return Ln.value[i]?{...Ln.value[i],path:r,notFound:!1}:{...Ln.value["/404.html"],path:r,notFound:!0}},Sh=(e,t)=>{const{pathname:n,hashAndQueries:o}=Ea(e);return Na(n,t)+o},Eh=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},ui=ce({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const n=On(),o=Pn(),i=P(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${Sh(e.to,o.path).substring(1)}`);return()=>K("a",{class:["route-link",{[e.activeClass]:e.active}],href:i.value,onClick:(r={})=>{Eh(r)&&n.push(e.to).catch()}},t.default())}}),Lh=ce({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=Ms(e,"config"),o=Pn(),i=yh(),r=P(()=>go(n.value.link)),l=P(()=>n.value.target||(r.value?"_blank":void 0)),s=P(()=>l.value==="_blank"),a=P(()=>!r.value&&!s.value),c=P(()=>n.value.rel||(s.value?"noopener noreferrer":null)),u=P(()=>n.value.ariaLabel??n.value.text),d=P(()=>{if(n.value.exact)return!1;const p=Object.keys(i.value.locales);return p.length?p.every(v=>v!==n.value.link):n.value.link!=="/"}),h=P(()=>a.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(o.path):d.value?o.path.startsWith(n.value.link):o.path===n.value.link:!1);return()=>{const{before:p,after:v,default:b}=t,S=(b==null?void 0:b(n.value))??[p==null?void 0:p(n.value),n.value.text,v==null?void 0:v(n.value)];return a.value?K(ui,{class:"auto-link",to:n.value.link,active:h.value,"aria-label":u.value},()=>S):K("a",{class:"auto-link external-link",href:n.value.link,"aria-label":u.value,rel:c.value,target:l.value},S)}}}),yr=ce({name:"ClientOnly",setup(e,t){const n=De(!1);return rt(()=>{n.value=!0}),()=>{var o,i;return n.value?(i=(o=t.slots).default)==null?void 0:i.call(o):null}}}),xo=e=>{Fo.value.forEach(t=>t(e))},wr=ce({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=gh(),n=P(()=>{if(!e.path)return t.value;const i=lo(e.path);return bu(async()=>i.loader().then(({comp:r})=>r))}),o=_o();return Ke(o,()=>{xo("updated")},{deep:!0,flush:"post"}),()=>K(n.value,{onVnodeMounted:()=>{xo("mounted")},onVnodeUpdated:()=>{xo("updated")},onVnodeBeforeUnmount:()=>{xo("beforeUnmount")}})}}),Ch="Layout",kh="en-US",tn=dn({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const o=ut(t.description)?t.description:n.description,i=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:o}]];return sf(i)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||kh,resolvePageLayout:(e,t)=>{const n=ut(e.frontmatter.layout)?e.frontmatter.layout:Ch;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>tf(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},o)=>{var i;return{...n,...t[o],head:[...((i=t[o])==null?void 0:i.head)??[],...n.head]}}}),St=(e={})=>e,Sr=e=>vo(e)?e:`/${Ca(e)}`,xh=Object.defineProperty,Th=(e,t)=>{for(var n in t)xh(e,n,{get:t[n],enumerable:!0})},Ih={};Th(Ih,{COMPONENT_STATE_TYPE:()=>Ah,INSPECTOR_ID:()=>Rh,INSPECTOR_LABEL:()=>Oh,INSPECTOR_NODES:()=>Ph,INSPECTOR_STATE_SECTION_NAME:()=>Dh,PLUGIN_ID:()=>$a,PLUGIN_LABEL:()=>Er});var $a="org.vuejs.vuepress",Er="VuePress",Ah=Er,Rh=$a,Oh=Er,Vl={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Hl={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Nl={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},$l={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Ph={[Vl.id]:Vl,[Hl.id]:Hl,[Nl.id]:Nl,[$l.id]:$l},Dh="State";function di(e){return ps()?(Ac(e),!0):!1}const Cn=new WeakMap,Ua=(...e)=>{var t;const n=e[0],o=(t=Ht())==null?void 0:t.proxy;if(o==null&&!Zs())throw new Error("injectLocal must be called in setup");return o&&Cn.has(o)&&n in Cn.get(o)?Cn.get(o)[n]:Ue(...e)};function Mh(e,t){var n;const o=(n=Ht())==null?void 0:n.proxy;if(o==null)throw new Error("provideLocal must be called in setup");Cn.has(o)||Cn.set(o,Object.create(null));const i=Cn.get(o);return i[e]=t,qt(e,t)}const Lr=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const zh=e=>e!=null,Fh=Object.prototype.toString,Vh=e=>Fh.call(e)==="[object Object]",fn=()=>{};function Hh(...e){if(e.length!==1)return Ms(...e);const t=e[0];return typeof t=="function"?ni(Ds(()=>({get:t,set:fn}))):De(t)}function Cr(e,t){function n(...o){return new Promise((i,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(r)})}return n}const Ba=e=>e();function Nh(e,t={}){let n,o,i=fn;const r=a=>{clearTimeout(a),i(),i=fn};let l;return a=>{const c=ve(e),u=ve(t.maxWait);return n&&r(n),c<=0||u!==void 0&&u<=0?(o&&(r(o),o=void 0),Promise.resolve(a())):new Promise((d,h)=>{i=t.rejectOnCancel?h:d,l=a,u&&!o&&(o=setTimeout(()=>{n&&r(n),o=void 0,d(l())},u)),n=setTimeout(()=>{o&&r(o),o=void 0,d(a())},c)})}}function $h(...e){let t=0,n,o=!0,i=fn,r,l,s,a,c;!Pe(e[0])&&typeof e[0]=="object"?{delay:l,trailing:s=!0,leading:a=!0,rejectOnCancel:c=!1}=e[0]:[l,s=!0,a=!0,c=!1]=e;const u=()=>{n&&(clearTimeout(n),n=void 0,i(),i=fn)};return h=>{const p=ve(l),v=Date.now()-t,b=()=>r=h();return u(),p<=0?(t=Date.now(),b()):(v>p&&(a||!o)?(t=Date.now(),b()):s&&(r=new Promise((S,C)=>{i=c?C:S,n=setTimeout(()=>{t=Date.now(),o=!0,S(b()),u()},Math.max(0,p-v))})),!a&&!n&&(n=setTimeout(()=>o=!0,p)),o=!1,r)}}function Uh(e=Ba,t={}){const{initialState:n="active"}=t,o=Hh(n==="active");function i(){o.value=!1}function r(){o.value=!0}const l=(...s)=>{o.value&&e(...s)};return{isActive:ni(o),pause:i,resume:r,eventFilter:l}}function Bh(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const o=t;t=void 0,o&&await o},n}function Ul(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function Jn(e){return Array.isArray(e)?e:[e]}function jh(e){return Ht()}function ja(e,t=200,n={}){return Cr(Nh(t,n),e)}function Wh(e,t=200,n=!1,o=!0,i=!1){return Cr($h(t,n,o,i),e)}function Gh(e,t,n={}){const{eventFilter:o=Ba,...i}=n;return Ke(e,Cr(o,t),i)}function qh(e,t,n={}){const{eventFilter:o,initialState:i="active",...r}=n,{eventFilter:l,pause:s,resume:a,isActive:c}=Uh(o,{initialState:i});return{stop:Gh(e,t,{...r,eventFilter:l}),pause:s,resume:a,isActive:c}}function fi(e,t=!0,n){jh()?rt(e,n):t?e():ho(e)}function Kh(e,t,n={}){const{immediate:o=!0,immediateCallback:i=!1}=n,r=we(!1);let l;function s(){l&&(clearTimeout(l),l=void 0)}function a(){r.value=!1,s()}function c(...u){i&&e(),s(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=void 0,e(...u)},ve(t))}return o&&(r.value=!0,Lr&&c()),di(a),{isPending:Jc(r),start:c,stop:a}}function kr(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,i=Pe(e),r=we(e);function l(s){if(arguments.length)return r.value=s,r.value;{const a=ve(n);return r.value=r.value===a?ve(o):a,r.value}}return i?l:[r,l]}function xr(e,t,n){return Ke(e,t,{...n,immediate:!0})}const wt=Lr?window:void 0,Wa=Lr?window.navigator:void 0;function Ot(e){var t;const n=ve(e);return(t=n==null?void 0:n.$el)!=null?t:n}function Be(...e){const t=[],n=()=>{t.forEach(s=>s()),t.length=0},o=(s,a,c,u)=>(s.addEventListener(a,c,u),()=>s.removeEventListener(a,c,u)),i=P(()=>{const s=Jn(ve(e[0])).filter(a=>a!=null);return s.every(a=>typeof a!="string")?s:void 0}),r=xr(()=>{var s,a;return[(a=(s=i.value)==null?void 0:s.map(c=>Ot(c)))!=null?a:[wt].filter(c=>c!=null),Jn(ve(i.value?e[1]:e[0])),Jn(Y(i.value?e[2]:e[1])),ve(i.value?e[3]:e[2])]},([s,a,c,u])=>{if(n(),!(s!=null&&s.length)||!(a!=null&&a.length)||!(c!=null&&c.length))return;const d=Vh(u)?{...u}:u;t.push(...s.flatMap(h=>a.flatMap(p=>c.map(v=>o(h,p,v,d)))))},{flush:"post"}),l=()=>{r(),n()};return di(n),l}function Qh(){const e=we(!1),t=Ht();return t&&rt(()=>{e.value=!0},t),e}function yo(e){const t=Qh();return P(()=>(t.value,!!e()))}function Jh(e,t,n={}){const{window:o=wt,...i}=n;let r;const l=yo(()=>o&&"MutationObserver"in o),s=()=>{r&&(r.disconnect(),r=void 0)},a=P(()=>{const h=ve(e),p=Jn(h).map(Ot).filter(zh);return new Set(p)}),c=Ke(a,h=>{s(),l.value&&h.size&&(r=new MutationObserver(t),h.forEach(p=>r.observe(p,i)))},{immediate:!0,flush:"post"}),u=()=>r==null?void 0:r.takeRecords(),d=()=>{c(),s()};return di(d),{isSupported:l,stop:d,takeRecords:u}}const Yh=Symbol("vueuse-ssr-width");function Xh(){const e=Zs()?Ua(Yh,null):null;return typeof e=="number"?e:void 0}function Tr(e,t={}){const{window:n=wt,ssrWidth:o=Xh()}=t,i=yo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),r=we(typeof o=="number"),l=we(),s=we(!1),a=c=>{s.value=c.matches};return Zu(()=>{if(r.value){r.value=!i.value;const c=ve(e).split(",");s.value=c.some(u=>{const d=u.includes("not all"),h=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),p=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let v=!!(h||p);return h&&v&&(v=o>=Ul(h[1])),p&&v&&(v=o<=Ul(p[1])),d?!v:v});return}i.value&&(l.value=n.matchMedia(ve(e)),s.value=l.value.matches)}),Be(l,"change",a,{passive:!0}),P(()=>s.value)}function Bl(e,t={}){const{controls:n=!1,navigator:o=Wa}=t,i=yo(()=>o&&"permissions"in o),r=we(),l=typeof e=="string"?{name:e}:e,s=we(),a=()=>{var u,d;s.value=(d=(u=r.value)==null?void 0:u.state)!=null?d:"prompt"};Be(r,"change",a,{passive:!0});const c=Bh(async()=>{if(i.value){if(!r.value)try{r.value=await o.permissions.query(l)}catch{r.value=void 0}finally{a()}if(n)return he(r.value)}});return c(),n?{state:s,isSupported:i,query:c}:s}function Zh(e={}){const{navigator:t=Wa,read:n=!1,source:o,copiedDuring:i=1500,legacy:r=!1}=e,l=yo(()=>t&&"clipboard"in t),s=Bl("clipboard-read"),a=Bl("clipboard-write"),c=P(()=>l.value||r),u=we(""),d=we(!1),h=Kh(()=>d.value=!1,i,{immediate:!1});async function p(){let L=!(l.value&&C(s.value));if(!L)try{u.value=await t.clipboard.readText()}catch{L=!0}L&&(u.value=S())}c.value&&n&&Be(["copy","cut"],p,{passive:!0});async function v(L=ve(o)){if(c.value&&L!=null){let m=!(l.value&&C(a.value));if(!m)try{await t.clipboard.writeText(L)}catch{m=!0}m&&b(L),u.value=L,d.value=!0,h.start()}}function b(L){const m=document.createElement("textarea");m.value=L??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function S(){var L,m,_;return(_=(m=(L=document==null?void 0:document.getSelection)==null?void 0:L.call(document))==null?void 0:m.toString())!=null?_:""}function C(L){return L==="granted"||L==="prompt"}return{isSupported:c,text:u,copied:d,copy:v}}const To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Io="__vueuse_ssr_handlers__",ep=tp();function tp(){return Io in To||(To[Io]=To[Io]||{}),To[Io]}function np(e,t){return ep[e]||t}function op(e){return Tr("(prefers-color-scheme: dark)",e)}function ip(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const rp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},jl="vueuse-storage";function Ir(e,t,n,o={}){var i;const{flush:r="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:a=!0,mergeDefaults:c=!1,shallow:u,window:d=wt,eventFilter:h,onError:p=F=>{console.error(F)},initOnMounted:v}=o,b=(u?we:De)(typeof t=="function"?t():t),S=P(()=>ve(e));if(!n)try{n=np("getDefaultStorage",()=>{var F;return(F=wt)==null?void 0:F.localStorage})()}catch(F){p(F)}if(!n)return b;const C=ve(t),L=ip(C),m=(i=o.serializer)!=null?i:rp[L],{pause:_,resume:H}=qh(b,F=>D(F),{flush:r,deep:l,eventFilter:h});Ke(S,()=>w(),{flush:r});let X=!1;const M=F=>{v&&!X||w(F)},E=F=>{v&&!X||z(F)};d&&s&&(n instanceof Storage?Be(d,"storage",M,{passive:!0}):Be(d,jl,E)),v?fi(()=>{X=!0,w()}):w();function I(F,U){if(d){const T={key:S.value,oldValue:F,newValue:U,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",T):new CustomEvent(jl,{detail:T}))}}function D(F){try{const U=n.getItem(S.value);if(F==null)I(U,null),n.removeItem(S.value);else{const T=m.write(F);U!==T&&(n.setItem(S.value,T),I(U,T))}}catch(U){p(U)}}function B(F){const U=F?F.newValue:n.getItem(S.value);if(U==null)return a&&C!=null&&n.setItem(S.value,m.write(C)),C;if(!F&&c){const T=m.read(U);return typeof c=="function"?c(T,C):L==="object"&&!Array.isArray(T)?{...C,...T}:T}else return typeof U!="string"?U:m.read(U)}function w(F){if(!(F&&F.storageArea!==n)){if(F&&F.key==null){b.value=C;return}if(!(F&&F.key!==S.value)){_();try{const U=m.write(b.value);(F===void 0||(F==null?void 0:F.newValue)!==U)&&(b.value=B(F))}catch(U){p(U)}finally{F?ho(H):H()}}}}function z(F){w(F.detail)}return b}function lp(e,t,n={}){const{window:o=wt,...i}=n;let r;const l=yo(()=>o&&"ResizeObserver"in o),s=()=>{r&&(r.disconnect(),r=void 0)},a=P(()=>{const d=ve(e);return Array.isArray(d)?d.map(h=>Ot(h)):[Ot(d)]}),c=Ke(a,d=>{if(s(),l.value&&o){r=new ResizeObserver(t);for(const h of d)h&&r.observe(h,i)}},{immediate:!0,flush:"post"}),u=()=>{s(),c()};return di(u),{isSupported:l,stop:u}}function sp(e,t={width:0,height:0},n={}){const{window:o=wt,box:i="content-box"}=n,r=P(()=>{var d,h;return(h=(d=Ot(e))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),l=we(t.width),s=we(t.height),{stop:a}=lp(e,([d])=>{const h=i==="border-box"?d.borderBoxSize:i==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(o&&r.value){const p=Ot(e);if(p){const v=p.getBoundingClientRect();l.value=v.width,s.value=v.height}}else if(h){const p=Jn(h);l.value=p.reduce((v,{inlineSize:b})=>v+b,0),s.value=p.reduce((v,{blockSize:b})=>v+b,0)}else l.value=d.contentRect.width,s.value=d.contentRect.height},n);fi(()=>{const d=Ot(e);d&&(l.value="offsetWidth"in d?d.offsetWidth:t.width,s.value="offsetHeight"in d?d.offsetHeight:t.height)});const c=Ke(()=>Ot(e),d=>{l.value=d?t.width:0,s.value=d?t.height:0});function u(){a(),c()}return{width:l,height:s,stop:u}}const Wl=1;function ap(e,t={}){const{throttle:n=0,idle:o=200,onStop:i=fn,onScroll:r=fn,offset:l={left:0,right:0,top:0,bottom:0},observe:s={mutation:!1},eventListenerOptions:a={capture:!1,passive:!0},behavior:c="auto",window:u=wt,onError:d=I=>{console.error(I)}}=t,h=typeof s=="boolean"?{mutation:s}:s,p=we(0),v=we(0),b=P({get(){return p.value},set(I){C(I,void 0)}}),S=P({get(){return v.value},set(I){C(void 0,I)}});function C(I,D){var B,w,z,F;if(!u)return;const U=ve(e);if(!U)return;(z=U instanceof Document?u.document.body:U)==null||z.scrollTo({top:(B=ve(D))!=null?B:S.value,left:(w=ve(I))!=null?w:b.value,behavior:ve(c)});const T=((F=U==null?void 0:U.document)==null?void 0:F.documentElement)||(U==null?void 0:U.documentElement)||U;b!=null&&(p.value=T.scrollLeft),S!=null&&(v.value=T.scrollTop)}const L=we(!1),m=dn({left:!0,right:!1,top:!0,bottom:!1}),_=dn({left:!1,right:!1,top:!1,bottom:!1}),H=I=>{L.value&&(L.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,i(I))},X=ja(H,n+o),M=I=>{var D;if(!u)return;const B=((D=I==null?void 0:I.document)==null?void 0:D.documentElement)||(I==null?void 0:I.documentElement)||Ot(I),{display:w,flexDirection:z,direction:F}=getComputedStyle(B),U=F==="rtl"?-1:1,T=B.scrollLeft;_.left=T<p.value,_.right=T>p.value;const ee=Math.abs(T*U)<=(l.left||0),j=Math.abs(T*U)+B.clientWidth>=B.scrollWidth-(l.right||0)-Wl;w==="flex"&&z==="row-reverse"?(m.left=j,m.right=ee):(m.left=ee,m.right=j),p.value=T;let ue=B.scrollTop;I===u.document&&!ue&&(ue=u.document.body.scrollTop),_.top=ue<v.value,_.bottom=ue>v.value;const Re=Math.abs(ue)<=(l.top||0),Fe=Math.abs(ue)+B.clientHeight>=B.scrollHeight-(l.bottom||0)-Wl;w==="flex"&&z==="column-reverse"?(m.top=Fe,m.bottom=Re):(m.top=Re,m.bottom=Fe),v.value=ue},E=I=>{var D;if(!u)return;const B=(D=I.target.documentElement)!=null?D:I.target;M(B),L.value=!0,X(I),r(I)};return Be(e,"scroll",n?Wh(E,n,!0,!1):E,a),fi(()=>{try{const I=ve(e);if(!I)return;M(I)}catch(I){d(I)}}),h!=null&&h.mutation&&e!=null&&e!==u&&e!==document&&Jh(e,()=>{const I=ve(e);I&&M(I)},{attributes:!0,childList:!0,subtree:!0}),Be(e,"scrollend",H,a),{x:b,y:S,isScrolling:L,arrivedState:m,directions:_,measure(){const I=ve(e);u&&I&&M(I)}}}function cp(e={}){const{window:t=wt,...n}=e;return ap(t,n)}function up(e={}){const{window:t=wt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0,type:l="inner"}=e,s=we(n),a=we(o),c=()=>{if(t)if(l==="outer")s.value=t.outerWidth,a.value=t.outerHeight;else if(l==="visual"&&t.visualViewport){const{width:d,height:h,scale:p}=t.visualViewport;s.value=Math.round(d*p),a.value=Math.round(h*p)}else r?(s.value=t.innerWidth,a.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight)};c(),fi(c);const u={passive:!0};if(Be("resize",c,u),t&&l==="visual"&&t.visualViewport&&Be(t.visualViewport,"resize",c,u),i){const d=Tr("(orientation: portrait)");Ke(d,()=>c())}return{width:s,height:a}}const Gl=async(e,t)=>{const{path:n,query:o}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:o,hash:t}),e.options.scrollBehavior=i},dp=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:o=5})=>{const i=On();Be("scroll",ja(()=>{var v,b;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<o){Gl(i,"");return}const a=window.innerHeight+l,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(c-a)<o,d=Array.from(document.querySelectorAll(e)),p=Array.from(document.querySelectorAll(t)).filter(S=>d.some(C=>C.hash===S.hash));for(let S=0;S<p.length;S++){const C=p[S],L=p[S+1],m=l>=(((v=C.parentElement)==null?void 0:v.offsetTop)??0)-o,_=!L||l<(((b=L.parentElement)==null?void 0:b.offsetTop)??0)-o;if(!(m&&_))continue;const X=decodeURIComponent(i.currentRoute.value.hash),M=decodeURIComponent(C.hash);if(X===M)return;if(u){for(let E=S+1;E<p.length;E++)if(X===decodeURIComponent(p[E].hash))return}Gl(i,M);return}},n))},fp="a.vp-sidebar-item",hp=".header-anchor",pp=300,mp=5,gp=St({setup(){dp({headerLinkSelector:fp,headerAnchorSelector:hp,delay:pp,offset:mp})}}),vp=Object.freeze(Object.defineProperty({__proto__:null,default:gp},Symbol.toStringTag,{value:"Module"})),Ga=[...new Array(6)].map((e,t)=>`[vp-content] h${t+1}`).join(","),_p=(e,t=2)=>{if(t===!1)return[];const[n,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t,i=e.filter(l=>l.level>=n&&l.level<=o),r=[];e:for(let l=0;l<i.length;l++){const s=i[l];if(l===0)r.push(s);else{for(let a=l-1;a>=0;a--){const c=i[a];if(c.level<s.level){c.children.push(s);continue e}}r.push(s)}}return r},bp=(e,t=[])=>{let n;if(t.length){const o=e.cloneNode(!0);o.querySelectorAll(t.join(",")).forEach(i=>{i.remove()}),n=o.textContent||""}else n=e.textContent||"";return n.trim()},yp=(e=Ga,t=[])=>Array.from(document.querySelectorAll(e)).filter(n=>n.id&&n.hasChildNodes()).map(n=>({element:n,title:bp(n,t),link:`#${n.id}`,slug:n.id,level:Number(n.tagName[1]),children:[]})),wp=({selector:e=Ga,levels:t=2,ignore:n=[]}={})=>_p(yp(e,n),t),Sp=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Ep=(e,t)=>t.some(n=>{if(ut(n))return n===e.key;const{key:o,ctrl:i=!1,shift:r=!1,alt:l=!1}=n;return o===e.key&&i===e.ctrlKey&&r===e.shiftKey&&l===e.altKey}),qa=(e,t)=>{var o;const n=(o=Ht())==null?void 0:o.appContext.components;return n?e in n||et(e)in n||co(et(e))in n:!1},hi=e=>{const t=Va();return P(()=>ve(e)[t.value]??{})},Lp=(e,t)=>{Be("keydown",o=>{const i=ve(e);i!=null&&i.length&&Ep(o,i)&&!Sp(o.target)&&(o.preventDefault(),t())})},Cp=()=>{const e=bh();return P(()=>Object.keys(e.value))},kp=e=>typeof e<"u",Ka=(e,t)=>ut(e)&&e.startsWith(t),{keys:xp}=Object,Qa=e=>Ka(e,"/")&&e[1]!=="/",Ja=e=>!Xd(e)&&!go(e);var Tp={"/":{backToTop:"Back to top"},"/zh/":{backToTop:"返回顶部"}};const Ip=ce({name:"BackToTop",setup(){const e=_o(),t=hi(Tp),n=we(),{height:o}=sp(n),{height:i}=up(),{y:r}=cp(),l=P(()=>(e.value.backToTop??!0)&&r.value>100),s=P(()=>r.value/(o.value-i.value)*100);return rt(()=>{n.value=document.body}),()=>K(hr,{name:"back-to-top"},()=>l.value?K("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[K("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":s.value},K("svg",K("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*s.value*.48} ${Math.PI*(100-s.value)*.48}`}))),K("div",{class:"back-to-top-icon"})]):null)}}),Ap=St({rootComponents:[Ip]}),Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"})),Op=/language-(shellscript|shell|bash|sh|zsh)/,Pp=({duration:e=2e3,locales:t,selector:n,showInMobile:o,ignoreSelector:i=[],transform:r})=>{const l=Tr("(max-width: 419px)"),s=P(()=>!l.value||o),a=hi(t),c=v=>{var S;if(v.hasAttribute("copy-code"))return;const b=document.createElement("button");b.type="button",b.classList.add("vp-copy-code-button"),b.setAttribute("aria-label",a.value.copy),b.setAttribute("data-copied",a.value.copied),(S=v.parentElement)==null||S.insertBefore(b,v),v.setAttribute("copy-code","")},u=()=>{document.body.classList.toggle("no-copy-code",!s.value),s.value&&document.querySelectorAll(n.join(",")).forEach(c)};xr(s,u,{flush:"post"}),bo(v=>{v!=="beforeUnmount"&&u()});const{copy:d}=Zh({legacy:!0}),h=new WeakMap,p=async(v,b,S)=>{const C=b.cloneNode(!0);i.length&&C.querySelectorAll(i.join(",")).forEach(_=>{_.remove()}),r&&r(C);let L=C.textContent||"";if(Op.test(v.className)&&(L=L.replace(/^ *(\$|>) /gm,"")),await d(L),e<=0)return;S.classList.add("copied"),clearTimeout(h.get(S));const m=setTimeout(()=>{S.classList.remove("copied"),S.blur(),h.delete(S)},e);h.set(S,m)};Be("click",v=>{const b=v.target;if(s.value&&b.matches('div[class*="language-"] > button.vp-copy-code-button')){const S=b.parentElement,C=b.nextElementSibling;if(!S||!C)return;p(S,C,b)}})};var Dp=[],Mp={"/":{copy:"Copy code",copied:"Copied"},"/zh/":{copy:"复制代码",copied:"已复制"}},zp=['[vp-content] div[class*="language-"] pre'];const Fp=St({setup:()=>{Pp({selector:zp,ignoreSelector:Dp,locales:Mp,duration:2e3,showInMobile:!1})}}),Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Fp},Symbol.toStringTag,{value:"Module"})),Hp=St({setup(){Be("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})}}),Np=Object.freeze(Object.defineProperty({__proto__:null,default:Hp},Symbol.toStringTag,{value:"Module"}));var ql={provider:null,pattern:{},repo:""};const Kl=typeof ql>"u"?{}:ql,$p=(e,t)=>!e||vo(e)?e:t==="github"?`https://github.com/${e}`:t==="gitee"?`https://gitee.com/${e}`:e,Up=/#(\d+)/g,Bp=(e=!0)=>{const t=_o(),n=br(),o=_r(),{pattern:i={},provider:r}=Kl,l=$p(Kl.repo,r);return P(()=>{var a;if(t.value.changelog===!1||!ve(e))return[];const s=new Intl.DateTimeFormat(n.value,{dateStyle:"short"});return(((a=o.value.git)==null?void 0:a.changelog)??[]).map(c=>{const u={date:s.format(c.time),...c};return i.issue&&l&&(u.message=u.message.replace(Up,(d,h)=>`<a href="${i.issue.replace(":issue",h).replace(":repo",l)}" target="_blank" rel="noopener noreferrer">${d}</a>`)),i.commit&&l&&(u.commitUrl=i.commit.replace(":hash",u.hash).replace(":repo",l)),i.tag&&l&&u.tag&&(u.tagUrl=i.tag.replace(":tag",u.tag).replace(":repo",l)),u})})},Ya=(e=!0)=>{const t=_o(),n=_r();return P(()=>{var o;return t.value.contributors===!1||!ve(e)?[]:((o=n.value.git)==null?void 0:o.contributors)??[]})};var Ql={"/":{contributors:"Contributors",changelog:"Changelog",timeOn:"on",viewChangelog:"View All Changelog",latestUpdateAt:"Last Updated:"},"/zh/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新："}};const jp=typeof Ql>"u"?{}:Ql,Ar=()=>hi(jp),Xa=(e=!0)=>{const t=br(),n=Ar(),o=_r();return P(()=>{var s,a,c;if(!ve(e))return null;const i=((s=o.value.git)==null?void 0:s.updatedTime)??((c=(a=o.value.git)==null?void 0:a.changelog)==null?void 0:c[0].time);if(!i)return null;const r=new Date(i),l=new Intl.DateTimeFormat(t.value,{dateStyle:"short",timeStyle:"short"}).format(i);return{date:r,text:l,iso:r.toISOString(),locale:n.value.latestUpdateAt}})},Za=({level:e=2,text:t,anchor:n})=>K(`h${e||2}`,{id:n,tabindex:"-1"},K("a",{href:`#${n}`,class:"header-anchor"},K("span",t))),Wp=({name:e,url:t,avatar:n})=>K(t?"a":"span",{href:t,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?K("img",{src:n,alt:"",class:"vp-contributor-avatar"}):null,K("span",{class:"vp-contributor-name"},e)]),Gp=ce({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=Ya(),n=Ar();return()=>t.value.length?[K(Za,{level:e.headerLevel,anchor:"doc-contributors",text:e.title||n.value.contributors}),K("div",{class:"vp-contributors"},t.value.map(o=>K(Wp,o)))]:null}}),qp=ce({name:"GitChangelog",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=Bp(),n=Ar(),o=Xa(),[i,r]=kr(),l=()=>K("div",{class:"vp-changelog-header",onClick:()=>r()},[K("div",{class:"vp-latest-updated"},[K("span",{class:"vp-changelog-icon"}),K("span",{"data-allow-mismatch":""},o.value.text)]),K("div",[K("span",{class:"vp-changelog-menu-icon"}),K("span",n.value.viewChangelog)])]),s=({item:c})=>K("li",{class:"vp-changelog-item-tag"},K("div",[K("a",{class:"vp-changelog-tag"},K("code",c.tag)),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[n.value.timeOn," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])])),a=({item:c})=>K("li",{class:"vp-changelog-item-commit"},[K(c.commitUrl?"a":"span",{class:"vp-changelog-hash",href:c.commitUrl,target:"_blank",rel:"noreferrer"},[K("code",c.hash.slice(0,5))]),K("span",{class:"vp-changelog-divider"},"-"),K("span",{class:"vp-changelog-message",innerHTML:c.message}),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[n.value.timeOn||"on"," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])]);return()=>t.value.length?[K(Za,{level:e.headerLevel,anchor:"doc-changelog",text:e.title||n.value.changelog}),K("div",{class:["vp-changelog-wrapper",{active:i.value}]},[K(l),K("ul",{class:"vp-changelog-list"},[t.value.map(c=>c.tag?K(s,{item:c,key:c.tag}):K(a,{item:c,key:c.hash}))])])]:null}}),Kp={enhance:({app:e})=>{e.component("GitContributors",Gp),e.component("GitChangelog",qp)}},Qp=Object.freeze(Object.defineProperty({__proto__:null,default:Kp},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var on=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ao=function(t){return t.tagName==="IMG"},Jp=function(t){return NodeList.prototype.isPrototypeOf(t)},Vo=function(t){return t&&t.nodeType===1},Jl=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Yl=function(t){try{return Array.isArray(t)?t.filter(Ao):Jp(t)?[].slice.call(t).filter(Ao):Vo(t)?[t].filter(Ao):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(Ao):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Yp=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Xp=function(t){var n=t.getBoundingClientRect(),o=n.top,i=n.left,r=n.width,l=n.height,s=t.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return s.removeAttribute("id"),s.style.position="absolute",s.style.top=o+a+"px",s.style.left=i+c+"px",s.style.width=r+"px",s.style.height=l+"px",s.style.transform="",s},mn=function(t,n){var o=on({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),i},Zp=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(w){function z(){}w(z,z)},i=function(w){var z=w.target;if(z===I){v();return}m.indexOf(z)!==-1&&b({target:z})},r=function(){if(!(H||!E.original)){var w=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(X-w)>M.scrollOffset&&setTimeout(v,150)}},l=function(w){var z=w.key||w.keyCode;(z==="Escape"||z==="Esc"||z===27)&&v()},s=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=w;if(w.background&&(I.style.background=w.background),w.container&&w.container instanceof Object&&(z.container=on({},M.container,w.container)),w.template){var F=Vo(w.template)?w.template:document.querySelector(w.template);z.template=F}return M=on({},M,z),m.forEach(function(U){U.dispatchEvent(mn("medium-zoom:update",{detail:{zoom:D}}))}),D},a=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(on({},M,w))},c=function(){for(var w=arguments.length,z=Array(w),F=0;F<w;F++)z[F]=arguments[F];var U=z.reduce(function(T,ee){return[].concat(T,Yl(ee))},[]);return U.filter(function(T){return m.indexOf(T)===-1}).forEach(function(T){m.push(T),T.classList.add("medium-zoom-image")}),_.forEach(function(T){var ee=T.type,j=T.listener,ue=T.options;U.forEach(function(Re){Re.addEventListener(ee,j,ue)})}),D},u=function(){for(var w=arguments.length,z=Array(w),F=0;F<w;F++)z[F]=arguments[F];E.zoomed&&v();var U=z.length>0?z.reduce(function(T,ee){return[].concat(T,Yl(ee))},[]):m;return U.forEach(function(T){T.classList.remove("medium-zoom-image"),T.dispatchEvent(mn("medium-zoom:detach",{detail:{zoom:D}}))}),m=m.filter(function(T){return U.indexOf(T)===-1}),D},d=function(w,z){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function(U){U.addEventListener("medium-zoom:"+w,z,F)}),_.push({type:"medium-zoom:"+w,listener:z,options:F}),D},h=function(w,z){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function(U){U.removeEventListener("medium-zoom:"+w,z,F)}),_=_.filter(function(U){return!(U.type==="medium-zoom:"+w&&U.listener.toString()===z.toString())}),D},p=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=w.target,F=function(){var T={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},ee=void 0,j=void 0;if(M.container)if(M.container instanceof Object)T=on({},T,M.container),ee=T.width-T.left-T.right-M.margin*2,j=T.height-T.top-T.bottom-M.margin*2;else{var ue=Vo(M.container)?M.container:document.querySelector(M.container),Re=ue.getBoundingClientRect(),Fe=Re.width,je=Re.height,Nt=Re.left,$t=Re.top;T=on({},T,{width:Fe,height:je,left:Nt,top:$t})}ee=ee||T.width-M.margin*2,j=j||T.height-M.margin*2;var gt=E.zoomedHd||E.original,Xe=Jl(gt)?ee:gt.naturalWidth||ee,x=Jl(gt)?j:gt.naturalHeight||j,Q=gt.getBoundingClientRect(),G=Q.top,Z=Q.left,de=Q.width,_e=Q.height,f=Math.min(Math.max(de,Xe),ee)/de,g=Math.min(Math.max(_e,x),j)/_e,y=Math.min(f,g),R=(-Z+(ee-de)/2+M.margin+T.left)/y,k=(-G+(j-_e)/2+M.margin+T.top)/y,A="scale("+y+") translate3d("+R+"px, "+k+"px, 0)";E.zoomed.style.transform=A,E.zoomedHd&&(E.zoomedHd.style.transform=A)};return new o(function(U){if(z&&m.indexOf(z)===-1){U(D);return}var T=function Fe(){H=!1,E.zoomed.removeEventListener("transitionend",Fe),E.original.dispatchEvent(mn("medium-zoom:opened",{detail:{zoom:D}})),U(D)};if(E.zoomed){U(D);return}if(z)E.original=z;else if(m.length>0){var ee=m;E.original=ee[0]}else{U(D);return}if(E.original.dispatchEvent(mn("medium-zoom:open",{detail:{zoom:D}})),X=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,E.zoomed=Xp(E.original),document.body.appendChild(I),M.template){var j=Vo(M.template)?M.template:document.querySelector(M.template);E.template=document.createElement("div"),E.template.appendChild(j.content.cloneNode(!0)),document.body.appendChild(E.template)}if(E.original.parentElement&&E.original.parentElement.tagName==="PICTURE"&&E.original.currentSrc&&(E.zoomed.src=E.original.currentSrc),document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",v),E.zoomed.addEventListener("transitionend",T),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(ue),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,F()};var ue=setInterval(function(){E.zoomedHd.complete&&(clearInterval(ue),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",v),document.body.appendChild(E.zoomedHd),F())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var Re=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",Re),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",v),document.body.appendChild(E.zoomedHd),F()})}else F()})},v=function(){return new o(function(w){if(H||!E.original){w(D);return}var z=function F(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(I),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),H=!1,E.zoomed.removeEventListener("transitionend",F),E.original.dispatchEvent(mn("medium-zoom:closed",{detail:{zoom:D}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,w(D)};H=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(mn("medium-zoom:close",{detail:{zoom:D}})),E.zoomed.addEventListener("transitionend",z)})},b=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=w.target;return E.original?v():p({target:z})},S=function(){return M},C=function(){return m},L=function(){return E.original},m=[],_=[],H=!1,X=0,M=n,E={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?M=t:(t||typeof t=="string")&&c(t),M=on({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},M);var I=Yp(M.background);document.addEventListener("click",i),document.addEventListener("keyup",l),document.addEventListener("scroll",r),window.addEventListener("resize",v);var D={open:p,close:v,toggle:b,update:s,clone:a,attach:c,detach:u,on:d,off:h,getOptions:S,getImages:C,getZoomedImage:L};return D};function em(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var tm=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";em(tm);const ec=Symbol("mediumZoom"),nm=()=>{const e=Ue(ec);if(!e)throw new Error("useMediumZoom() is called without provider.");return e};var om={};const im="[vp-content] > img, [vp-content] :not(a) > img",rm=om,lm=St({enhance({app:e}){const t=Zp(rm);t.refresh=(n=im)=>{t.detach(),t.attach(n)},e.provide(ec,t)},setup(){const e=nm();bo(t=>{t!=="beforeUnmount"&&e.refresh()})}}),sm=Object.freeze(Object.defineProperty({__proto__:null,default:lm},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Xl=(e,t)=>{e.classList.add(t)},Zl=(e,t)=>{e.classList.remove(t)},am=e=>{var t;(t=e==null?void 0:e.parentNode)==null||t.removeChild(e)},Pi=(e,t,n)=>e<t?t:e>n?n:e,es=e=>(-1+e)*100,cm=(()=>{const e=[],t=()=>{const n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),um=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,n)=>n.toUpperCase()),Ro=(()=>{const e=["Webkit","O","Moz","ms"],t={},n=r=>{const{style:l}=document.body;if(r in l)return r;const s=r.charAt(0).toUpperCase()+r.slice(1);let a=e.length;for(;a--;){const c=`${e[a]}${s}`;if(c in l)return c}return r},o=r=>{const l=um(r);return t[l]??(t[l]=n(l))},i=(r,l,s)=>{r.style[o(l)]=s};return(r,l)=>{for(const s in l){const a=l[s];Object.hasOwn(l,s)&&kp(a)&&i(r,s,a)}}})(),kt={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Te={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:n}=kt,o=Te.isStarted(),i=Pi(e,kt.minimum,1);Te.percent=i===1?null:i;const r=Te.render(!o),l=r.querySelector(kt.barSelector);return r.offsetWidth,cm(s=>{Ro(l,{transform:`translate3d(${es(i)}%,0,0)`,transition:`all ${t}ms ${n}`}),i===1?(Ro(r,{transition:"none",opacity:"1"}),r.offsetWidth,setTimeout(()=>{Ro(r,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{Te.remove(),s()},t)},t)):setTimeout(()=>{s()},t)}),Te},isStarted:()=>typeof Te.percent=="number",start:()=>{Te.percent||Te.set(0);const e=()=>{setTimeout(()=>{Te.percent&&(Te.trickle(),e())},kt.trickleSpeed)};return e(),Te},done:e=>!e&&!Te.percent?Te:Te.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=Te;return t?(t=Pi(t+(typeof e=="number"?e:(1-t)*Pi(Math.random()*t,.1,.95)),0,.994),Te.set(t)):Te.start()},trickle:()=>Te.increase(Math.random()*kt.trickleRate),render:e=>{if(Te.isRendered())return document.getElementById("nprogress");Xl(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=kt.template;const n=t.querySelector(kt.barSelector),o=document.querySelector(kt.parent),i=e?"-100":es(Te.percent??0);return Ro(n,{transition:"all 0 linear",transform:`translate3d(${i}%,0,0)`}),o&&(o!==document.body&&Xl(o,"nprogress-custom-parent"),o.appendChild(t)),t},remove:()=>{Zl(document.documentElement,"nprogress-busy"),Zl(document.querySelector(kt.parent),"nprogress-custom-parent"),am(document.getElementById("nprogress"))}},dm=()=>{rt(()=>{const e=On(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||Te.start()}),e.afterEach(n=>{t.add(n.path),Te.done()})})},fm=St({setup(){dm()}}),hm=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),pm=({selector:e='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{Be("click",t=>{const n=t.target;if(n.matches(e)){const o=n.parentElement;o!=null&&o.classList.toggle("collapsed")&&o.scrollIntoView({block:"center",behavior:"instant"})}})},mm={setup(){pm()}},gm=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),vm="VUEPRESS_CODE_TAB_STORE",Oo=Ir(vm,{}),_m=ce({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){const n=De(e.active),o=we([]),i=()=>{e.tabId&&(Oo.value[e.tabId]=e.data[n.value].id)},r=(c=n.value)=>{n.value=c<o.value.length-1?c+1:0,o.value[n.value].focus()},l=(c=n.value)=>{n.value=c>0?c-1:o.value.length-1,o.value[n.value].focus()},s=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),r()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),e.tabId&&(Oo.value[e.tabId]=e.data[n.value].id)},a=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>Oo.value[e.tabId]===u);if(c!==-1)return c}return e.active};return rt(()=>{n.value=a(),Ke(()=>e.tabId&&Oo.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const d=e.data.findIndex(({id:h})=>h===c);d!==-1&&(n.value=d)}})}),()=>e.data.length?K("div",{class:"vp-code-tabs"},[K("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const d=u===n.value;return K("button",{type:"button",ref:h=>{h&&(o.value[u]=h)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{n.value=u,i()},onKeydown:h=>{s(h,u)}},t[`title${u}`]({value:c,isActive:d}))})),e.data.map(({id:c},u)=>{const d=u===n.value;return K("div",{class:["vp-code-tab",{active:d}],id:`codetab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},[K("div",{class:"vp-code-tab-title"},t[`title${u}`]({value:c,isActive:d})),t[`tab${u}`]({value:c,isActive:d})])})]):null}}),bm="VUEPRESS_TAB_STORE",Di=Ir(bm,{}),ym=ce({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){const n=De(e.active),o=we([]),i=()=>{e.tabId&&(Di.value[e.tabId]=e.data[n.value].id)},r=(c=n.value)=>{n.value=c<o.value.length-1?c+1:0,o.value[n.value].focus()},l=(c=n.value)=>{n.value=c>0?c-1:o.value.length-1,o.value[n.value].focus()},s=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),r()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),i()},a=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>Di.value[e.tabId]===u);if(c!==-1)return c}return e.active};return rt(()=>{n.value=a(),Ke(()=>e.tabId&&Di.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const d=e.data.findIndex(({id:h})=>h===c);d!==-1&&(n.value=d)}})}),()=>e.data.length?K("div",{class:"vp-tabs"},[K("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const d=u===n.value;return K("button",{type:"button",ref:h=>{h&&(o.value[u]=h)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{n.value=u,i()},onKeydown:h=>{s(h,u)}},t[`title${u}`]({value:c,isActive:d}))})),e.data.map(({id:c},u)=>{const d=u===n.value;return K("div",{class:["vp-tab",{active:d}],id:`tab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},[K("div",{class:"vp-tab-title"},t[`title${u}`]({value:c,isActive:d})),t[`tab${u}`]({value:c,isActive:d})])})]):null}}),wm={enhance:({app:e})=>{e.component("CodeTabs",_m),e.component("Tabs",ym)}},Sm=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"})),Em=JSON.parse(`{"logo":"/img/logo.svg","lastUpdated":false,"contributors":false,"locales":{"/":{"selectLanguageText":"语言","selectLanguageName":"English","navbar":[{"text":"Home","link":"/"},{"text":"Getting Started","link":"/get-started"},{"text":"Documentation","link":"/guide/"},{"text":"Download","link":"/release/release-v0.36.0.md"},{"text":"Feedback","link":"https://github.com/lvgl-designer/lvgl-designer.github.io/issues"}],"sidebar":{"/get-started":[{"text":"Getting Started","children":["/get-started.md"]}],"/guide/":[{"text":"Setup","children":["/guide/0_installation.md"]},{"text":"Core Concepts","children":["/guide/1_intro.md","/guide/2_layout.md","/guide/5_hide&lock.md","/guide/3_resource.md"]},{"text":"Higher Order Component","children":["/guide/hoc/1_statebtn.md","/guide/hoc/2_labelslider.md","/guide/hoc/3_valueslider.md","/guide/hoc/4_checkgroup.md","/guide/hoc/6_statusbar.md","/guide/hoc/7_navigatebar.md","/guide/hoc/5_drawer.md"]},{"text":"Advanced Features","children":["/guide/10_image_fs.md","/guide/11_gif_animated.md","/guide/4_composite.md","/guide/8_globalcomponents.md","/guide/7_scr_mgmt.md","/guide/9_comm.md","/guide/12_lottie.md"]},{"text":"Development","children":["/guide/build_mode.md","/guide/100_transplant.md"]},{"text":"Technical Support","children":["/guide/Q&A.md"]}],"/release/":[{"text":"Release Notes","children":["/release/release-v0.36.0.md","/release/release-v0.35.0.md","/release/release-v0.34.0.md","/release/release-v0.33.1.md","/release/release-v0.33.0.md","/release/release-v0.32.0.md","/release/release-v0.30.0.md","/release/release-v0.28.0.md","/release/release-v0.27.0.md","/release/release-v0.26.0.md","/release/release-v0.25.0.md","/release/release-v0.22.0.md","/release/release-v0.21.0.md","/release/release-v0.20.0.md","/release/release-v0.18.0.md","/release/release-v0.17.1.md","/release/release-v0.17.0.md","/release/release-v0.16.0.md","/release/release-v0.15.0.md","/release/release-v0.14.0.md","/release/release-v0.13.1.md","/release/release-v0.13.0.md"]}]}},"/zh/":{"selectLanguageText":"Languages","selectLanguageName":"简体中文","navbar":[{"text":"首页","link":"/zh/index.md"},{"text":"快速开始","link":"/zh/get-started"},{"text":"文档","link":"/zh/guide/"},{"text":"下载","link":"/zh/release/release-v0.36.0.md"},{"text":"反馈","link":"https://github.com/lvgl-designer/lvgl-designer.github.io/issues"}],"sidebar":{"/zh/get-started":[{"text":"快速开始","children":["/zh/get-started.md"]}],"/zh/guide/":[{"text":"安装","children":["/zh/guide/0_installation.md"]},{"text":"核心概念","children":["/zh/guide/1_intro.md","/zh/guide/2_layout.md","/zh/guide/5_hide_and_lock.md","/zh/guide/3_resource.md"]},{"text":"高阶组件","children":["/zh/guide/hoc/1_statebtn.md","/zh/guide/hoc/2_labelslider.md","/zh/guide/hoc/3_valueslider.md","/zh/guide/hoc/4_checkgroup.md","/zh/guide/hoc/6_statusbar.md","/zh/guide/hoc/7_navigatebar.md","/zh/guide/hoc/5_drawer.md"]},{"text":"高级功能","children":["/zh/guide/10_image_fs.md","/zh/guide/11_gif_animated.md","/zh/guide/4_composite.md","/zh/guide/8_globalcomponents.md","/zh/guide/7_scr_mgmt.md","/zh/guide/9_comm.md","/zh/guide/12_lottie.md"]},{"text":"开发","children":["/zh/guide/build_mode.md","/zh/guide/100_transplant.md"]},{"text":"技术支持","children":["/zh/guide/Q&A.md"]}],"/zh/release/":[{"text":"版本说明","children":["/zh/release/release-v0.36.0.md","/zh/release/release-v0.35.0.md","/zh/release/release-v0.34.0.md","/zh/release/release-v0.33.1.md","/zh/release/release-v0.33.0.md","/zh/release/release-v0.32.0.md","/zh/release/release-v0.30.0.md","/zh/release/release-v0.28.0.md","/zh/release/release-v0.27.0.md","/zh/release/release-v0.26.0.md","/zh/release/release-v0.25.0.md","/zh/release/release-v0.22.0.md","/zh/release/release-v0.21.0.md","/zh/release/release-v0.20.0.md","/zh/release/release-v0.18.0.md","/zh/release/release-v0.17.1.md","/zh/release/release-v0.17.0.md","/zh/release/release-v0.16.0.md","/zh/release/release-v0.15.0.md","/zh/release/release-v0.14.0.md","/zh/release/release-v0.13.1.md","/zh/release/release-v0.13.0.md"]}]}}},"colorMode":"auto","colorModeSwitch":true,"navbar":[],"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),Lm=De(Em),tc=()=>Lm,nc=Symbol(""),Cm=()=>{const e=Ue(nc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},km=(e,t)=>{const{locales:n,...o}=e;return{...o,...n==null?void 0:n[t]}},xm=St({enhance({app:e}){const t=tc(),n=e._context.provides[vr],o=P(()=>km(t.value,n.routeLocale.value));e.provide(nc,o),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return o.value}}})}}),Tm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),Me=()=>{const{pageData:e,pageFrontmatter:t,pageLang:n,siteData:o,siteLocaleData:i,...r}=mt();return{...r,page:e,frontmatter:t,lang:n,site:o,siteLocale:i,theme:tc(),themeLocale:Cm()}},oc=Symbol(""),Im=e=>{const t=(n=e.value)=>{const o=window.document.documentElement;o.dataset.theme=n?"dark":"light"};rt(()=>{xr(e,t)}),ri(()=>{t()})},Rr=()=>{const e=Ue(oc);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Am=()=>{const{themeLocale:e}=Me(),t=op(),n=Ir("vuepress-color-scheme",e.value.colorMode),o=P({get(){return e.value.colorModeSwitch?n.value==="auto"?t.value:n.value==="dark":e.value.colorMode==="dark"},set(i){i===t.value?n.value="auto":n.value=i?"dark":"light"}});qt(oc,o),Im(o)},ic=Symbol("headers"),Rm=()=>{const e=Ua(ic);if(!e)throw new Error("useHeaders() is called without provider.");return e},Om=()=>{const{frontmatter:e,themeLocale:t}=Me(),n=De([]),o=P(()=>e.value.sidebarDepth??t.value.sidebarDepth??2),i=()=>{if(o.value<=0){n.value=[];return}n.value=wp({levels:[2,o.value+1],ignore:[".vp-badge"]})};Mh(ic,n),bo(r=>{r==="beforeUnmount"?n.value=[]:i()})};let Mi=null,Nn=null;const Pm={wait:()=>Mi,pending:()=>{Mi=new Promise(e=>{Nn=e})},resolve:()=>{Nn==null||Nn(),Mi=null,Nn=null}},rc=()=>Pm,An=(e,t)=>{const{notFound:n,meta:o,path:i}=lo(e,t);return n?{text:i,link:i}:{text:o.title||i,link:i}},kn=(e="",t="")=>Qa(t)||go(t)?t:`${af(e)}${t}`,Dm=e=>({text:e.title,link:e.link,children:Or(e.children)}),Or=e=>e?e.map(t=>Dm(t)):[],lc=(e,t)=>[{text:e.title,children:Or(t)}],sc=(e,t,n,o="")=>{const i=(r,l)=>{var a;const s=ut(r)?An(kn(l,r)):ut(r.link)?{...r,link:Ja(r.link)?An(kn(l,r.link)).link:r.link}:r;if("children"in s)return{...s,children:s.children.map(c=>i(c,kn(l,s.prefix)))};if(s.link===n){const c=((a=t[0])==null?void 0:a.level)===1?t[0].children:t;return{...s,children:Or(c)}}return s};return e.map(r=>i(r,o))},Mm=(e,t,n,o)=>{const i=xp(e).sort((r,l)=>l.length-r.length);for(const r of i)if(Ka(decodeURI(o),r)){const l=e[r];return l?l==="heading"?lc(t,n):sc(l,n,o,r):[]}return console.warn(`${decodeURI(o)} is missing sidebar config.`),[]},ac=Symbol("sidebarItems"),Pr=()=>{const e=Ue(ac);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},zm=(e,t,n,o,i)=>e===!1?[]:e==="heading"?lc(t,i):Array.isArray(e)?sc(e,i,n,o):pr(e)?Mm(e,t,i,n):[],Fm=()=>{const{frontmatter:e,page:t,routeLocale:n,themeLocale:o}=Me(),i=Rm(),r=Ha(),l=P(()=>e.value.home?!1:e.value.sidebar??o.value.sidebar??"heading"),s=P(()=>zm(l.value,t.value,r.value,n.value,i.value));qt(ac,s)},Vm=ce({__name:"Badge",props:{type:{default:"tip"},text:{default:""},vertical:{default:void 0}},setup(e){return(t,n)=>(W(),ne("span",{class:Ye(["vp-badge",t.type]),style:Rn({verticalAlign:t.vertical})},[Ce(t.$slots,"default",{},()=>[zt(Ie(t.text),1)])],6))}}),Hm=ce({__name:"VPFadeSlideYTransition",emits:["beforeEnter","beforeLeave"],setup(e){return(t,n)=>(W(),ke(hr,{name:"vp-fade-slide-y",mode:"out-in",onBeforeEnter:n[0]||(n[0]=o=>t.$emit("beforeEnter")),onBeforeLeave:n[1]||(n[1]=o=>t.$emit("beforeLeave"))},{default:xe(()=>[Ce(t.$slots,"default")]),_:3}))}}),Nm={key:0,class:"vp-features"},$m=ce({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=Me(),n=P(()=>t.value.features??[]);return(o,i)=>n.value.length?(W(),ne("div",Nm,[(W(!0),ne(ye,null,Qt(n.value,r=>(W(),ne("div",{key:r.title,class:"vp-feature"},[re("h2",null,Ie(r.title),1),re("p",null,Ie(r.details),1)]))),128))])):Oe("",!0)}}),Um=["innerHTML"],Bm=["textContent"],jm=ce({__name:"VPHomeFooter",setup(e){const t=_o(),n=P(()=>t.value.footer),o=P(()=>t.value.footerHtml);return(i,r)=>n.value?(W(),ne(ye,{key:0},[o.value?(W(),ne("div",{key:0,class:"vp-footer","vp-footer":"",innerHTML:n.value},null,8,Um)):(W(),ne("div",{key:1,class:"vp-footer","vp-footer":"",textContent:Ie(n.value)},null,8,Bm))],64)):Oe("",!0)}}),Pt=ce({__name:"VPAutoLink",props:{config:{}},setup(e){return(t,n)=>(W(),ke(Y(Lh),{config:t.config},Pu({before:xe(()=>[Ce(t.$slots,"before",gi(Mo(t.config)))]),after:xe(()=>[Ce(t.$slots,"after",gi(Mo(t.config)))]),_:2},[t.$slots.default?{name:"default",fn:xe(()=>[Ce(t.$slots,"default",gi(Mo(t.config)))]),key:"0"}:void 0]),1032,["config"]))}}),Wm={class:"vp-hero"},Gm={key:0,id:"main-title"},qm={key:1,class:"vp-hero-description"},Km={key:2,class:"vp-hero-actions"},Qm=ce({__name:"VPHomeHero",setup(e){const{frontmatter:t,siteLocale:n}=Me(),o=Rr(),i=P(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),r=P(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),l=P(()=>o.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),s=P(()=>t.value.heroAlt||i.value||"hero"),a=P(()=>t.value.heroHeight??280),c=P(()=>Array.isArray(t.value.actions)?t.value.actions.map(({type:d="primary",...h})=>({type:d,...h})):[]),u=()=>{if(!l.value)return null;const d=K("img",{class:"vp-hero-image",src:Sr(l.value),alt:s.value,height:a.value});return t.value.heroImageDark===void 0?d:K(yr,()=>d)};return(d,h)=>(W(),ne("header",Wm,[ae(u),i.value?(W(),ne("h1",Gm,Ie(i.value),1)):Oe("",!0),r.value?(W(),ne("p",qm,Ie(r.value),1)):Oe("",!0),c.value.length?(W(),ne("p",Km,[(W(!0),ne(ye,null,Qt(c.value,p=>(W(),ke(Pt,{key:p.text,class:Ye(["vp-hero-action-button",[p.type]]),config:p},null,8,["class","config"]))),128))])):Oe("",!0)]))}}),Jm={class:"vp-home"},Ym={"vp-content":""},Xm=ce({__name:"VPHome",setup(e){return(t,n)=>(W(),ne("main",Jm,[ae(Qm),ae($m),re("div",Ym,[ae(Y(wr))]),ae(jm)]))}}),Zm=["aria-hidden"],eg=ce({__name:"VPNavbarBrand",setup(e){const{routeLocale:t,siteLocale:n,themeLocale:o}=Me(),i=Rr(),r=P(()=>o.value.home||t.value),l=P(()=>n.value.title),s=P(()=>i.value&&o.value.logoDark!==void 0?o.value.logoDark:o.value.logo),a=P(()=>o.value.logoAlt??l.value),c=P(()=>l.value.toLocaleUpperCase().trim()===a.value.toLocaleUpperCase().trim()),u=()=>{if(!s.value)return null;const d=K("img",{class:"vp-site-logo",src:Sr(s.value),alt:a.value});return o.value.logoDark===void 0?d:K(yr,()=>d)};return(d,h)=>(W(),ke(Y(ui),{to:r.value},{default:xe(()=>[ae(u),l.value?(W(),ne("span",{key:0,class:Ye(["vp-site-name",{"vp-hide-mobile":s.value}]),"aria-hidden":c.value},Ie(l.value),11,Zm)):Oe("",!0)]),_:1},8,["to"]))}}),cc=ce({__name:"VPDropdownTransition",setup(e){const t=o=>{o.style.height=`${o.scrollHeight}px`},n=o=>{o.style.height=""};return(o,i)=>(W(),ke(hr,{name:"vp-dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:xe(()=>[Ce(o.$slots,"default")]),_:3}))}}),tg=["aria-label"],ng={class:"title"},og=["aria-label"],ig={class:"title"},rg={class:"vp-navbar-dropdown"},lg={class:"vp-navbar-dropdown-subtitle"},sg={key:1},ag={class:"vp-navbar-dropdown-subitem-wrapper"},cg=ce({__name:"VPNavbarDropdown",props:{config:{}},setup(e){const t=e,{config:n}=rr(t),[o,i]=kr(),r=P(()=>n.value.ariaLabel||n.value.text),l=(a,c)=>c[c.length-1]===a,s=a=>{a.detail===0?i():i(!1)};return bo(()=>{i(!1)}),(a,c)=>(W(),ne("div",{class:Ye(["vp-navbar-dropdown-wrapper",{open:Y(o)}])},[re("button",{class:"vp-navbar-dropdown-title",type:"button","aria-label":r.value,onClick:s},[re("span",ng,Ie(Y(n).text),1),c[1]||(c[1]=re("span",{class:"arrow down"},null,-1))],8,tg),re("button",{class:"vp-navbar-dropdown-title-mobile",type:"button","aria-label":r.value,onClick:c[0]||(c[0]=()=>Y(i)())},[re("span",ig,Ie(Y(n).text),1),re("span",{class:Ye(["arrow",Y(o)?"down":"right"])},null,2)],8,og),ae(cc,null,{default:xe(()=>[Wo(re("ul",rg,[(W(!0),ne(ye,null,Qt(Y(n).children,u=>(W(),ne("li",{key:u.text,class:"vp-navbar-dropdown-item"},["children"in u?(W(),ne(ye,{key:0},[re("h4",lg,[u.link?(W(),ke(Pt,{key:0,config:u,onFocusout:()=>{l(u,Y(n).children)&&u.children.length===0&&(o.value=!1)}},null,8,["config","onFocusout"])):(W(),ne("span",sg,Ie(u.text),1))]),re("ul",ag,[(W(!0),ne(ye,null,Qt(u.children,d=>(W(),ne("li",{key:d.link,class:"vp-navbar-dropdown-subitem"},[ae(Pt,{config:d,onFocusout:()=>{l(d,u.children)&&l(u,Y(n).children)&&Y(i)(!1)}},null,8,["config","onFocusout"])]))),128))])],64)):(W(),ke(Pt,{key:1,config:u,onFocusout:()=>{l(u,Y(n).children)&&Y(i)(!1)}},null,8,["config","onFocusout"]))]))),128))],512),[[Qo,Y(o)]])]),_:1})],2))}}),uc=(e,t="")=>ut(e)?An(kn(t,e)):"children"in e?{...e,children:e.children.map(n=>uc(n,kn(t,e.prefix)))}:{...e,link:Ja(e.link)?An(kn(t,e.link)).link:e.link},ug=()=>{const{themeLocale:e}=Me();return P(()=>(e.value.navbar||[]).map(t=>uc(t)))},dc=e=>!vo(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,dg=()=>{const{themeLocale:e}=Me(),t=P(()=>e.value.repo),n=P(()=>t.value?dc(t.value):null),o=P(()=>t.value&&!vo(t.value)?`https://github.com/${t.value}`:t.value),i=P(()=>o.value?e.value.repoLabel?e.value.repoLabel:n.value===null?"Source":n.value:null);return P(()=>!o.value||!i.value?[]:[{text:i.value,link:o.value}])},fg=()=>{const e=Pn(),t=Cp(),{routeLocale:n,site:o,siteLocale:i,theme:r,themeLocale:l}=Me();return P(()=>{const s=Object.keys(o.value.locales);if(s.length<2)return[];const a=e.path,c=e.fullPath;return[{text:`${l.value.selectLanguageText}`,ariaLabel:`${l.value.selectLanguageAriaLabel??l.value.selectLanguageText}`,children:s.map(d=>{var C,L;const h=((C=o.value.locales)==null?void 0:C[d])??{},p=((L=r.value.locales)==null?void 0:L[d])??{},v=`${h.lang}`,b=p.selectLanguageName??v;if(v===i.value.lang)return{text:b,activeMatch:".",link:e.fullPath};const S=a.replace(n.value,d);return{text:b,link:t.value.some(m=>m===S)?c.replace(a,S):p.home??d}})}]})},hg="719px",pg={mobile:hg};var so;(function(e){e.Mobile="mobile"})(so||(so={}));const mg={[so.Mobile]:Number.parseInt(pg.mobile.replace("px",""),10)},fc=(e,t)=>{const n=mg[e];Number.isInteger(n)&&(Be("orientationchange",()=>{t(n)},!1),Be("resize",()=>{t(n)},!1),rt(()=>{t(n)}))},gg=["aria-label"],hc=ce({__name:"VPNavbarItems",setup(e){const{themeLocale:t}=Me(),n=ug(),o=fg(),i=dg(),r=De(!1),l=P(()=>t.value.navbarLabel??"site navigation"),s=P(()=>[...n.value,...o.value,...i.value]);return fc(so.Mobile,a=>{r.value=window.innerWidth<a}),(a,c)=>s.value.length?(W(),ne("nav",{key:0,class:"vp-navbar-items","aria-label":l.value},[(W(!0),ne(ye,null,Qt(s.value,u=>(W(),ne("div",{key:u.text,class:"vp-navbar-item"},["children"in u?(W(),ke(cg,{key:0,class:Ye({mobile:r.value}),config:u},null,8,["class","config"])):(W(),ke(Pt,{key:1,config:u},null,8,["config"]))]))),128))],8,gg)):Oe("",!0)}}),Dn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},vg={},_g={class:"dark-icon",viewBox:"0 0 32 32"};function bg(e,t){return W(),ne("svg",_g,[...t[0]||(t[0]=[re("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)])])}const yg=Dn(vg,[["render",bg]]),wg={},Sg={class:"light-icon",viewBox:"0 0 32 32"};function Eg(e,t){return W(),ne("svg",Sg,[...t[0]||(t[0]=[ad('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)])])}const Lg=Dn(wg,[["render",Eg]]),Cg=["title"],kg=ce({__name:"VPToggleColorModeButton",setup(e){const{themeLocale:t}=Me(),n=Rr(),o=()=>{n.value=!n.value};return(i,r)=>(W(),ne("button",{type:"button",class:"vp-toggle-color-mode-button",title:Y(t).toggleColorMode,onClick:o},[Wo(ae(Lg,null,null,512),[[Qo,!Y(n)]]),Wo(ae(yg,null,null,512),[[Qo,Y(n)]])],8,Cg))}}),xg=["title"],Tg=ce({__name:"VPToggleSidebarButton",emits:["toggle"],setup(e){const{themeLocale:t}=Me();return(n,o)=>(W(),ne("div",{class:"vp-toggle-sidebar-button",title:Y(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:o[0]||(o[0]=i=>n.$emit("toggle"))},[...o[1]||(o[1]=[re("div",{class:"icon","aria-hidden":"true"},[re("span"),re("span"),re("span")],-1)])],8,xg))}}),Ig={ref:"navbar-brand"},Ag=ce({__name:"VPNavbar",emits:["toggleSidebar"],setup(e){const t=qa("SearchBox")?Ks("SearchBox"):()=>null,{themeLocale:n}=Me(),o=Ur("navbar"),i=Ur("navbar-brand"),r=De(0),l=P(()=>r.value?{maxWidth:`${r.value}px`}:{}),s=(a,c)=>{var h;const u=(h=a==null?void 0:a.ownerDocument.defaultView)==null?void 0:h.getComputedStyle(a,null)[c],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d};return fc(so.Mobile,a=>{var u;const c=s(o.value,"paddingLeft")+s(o.value,"paddingRight");window.innerWidth<a?r.value=0:r.value=o.value.offsetWidth-c-(((u=i.value)==null?void 0:u.offsetWidth)??0)}),(a,c)=>(W(),ne("header",{ref_key:"navbar",ref:o,class:"vp-navbar","vp-navbar":""},[ae(Tg,{onToggle:c[0]||(c[0]=u=>a.$emit("toggleSidebar"))}),re("span",Ig,[ae(eg)],512),re("div",{class:"vp-navbar-items-wrapper",style:Rn(l.value)},[Ce(a.$slots,"before"),ae(hc,{class:"vp-hide-mobile"}),Ce(a.$slots,"after"),Y(n).colorModeSwitch?(W(),ke(kg,{key:0})):Oe("",!0),ae(Y(t))],4)],512))}}),Rg={},Og={class:"edit-icon",viewBox:"0 0 1024 1024"};function Pg(e,t){return W(),ne("svg",Og,[...t[0]||(t[0]=[re("g",{fill:"currentColor"},[re("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),re("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})],-1)])])}const Dg=Dn(Rg,[["render",Pg]]),Mg={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},zg=({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const n=dc(e);return n!==null?Mg[n]:null},Fg=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:o,editLinkPattern:i})=>{if(!o)return null;const r=zg({docsRepo:e,editLinkPattern:i});return r?r.replace(/:repo/,vo(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Ca(`${La(n)}/${o}`)):null},Vg=()=>{const{frontmatter:e,page:t,themeLocale:n}=Me();return P(()=>{if(!(e.value.editLink??n.value.editLink??!0))return null;const{repo:i,docsRepo:r=i,docsBranch:l="main",docsDir:s="",editLinkText:a}=n.value;if(!r)return null;const c=Fg({docsRepo:r,docsBranch:l,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern??n.value.editLinkPattern});return c?{text:a??"Edit this page",link:c}:null})},Hg={class:"vp-page-meta"},Ng={key:0,class:"vp-meta-item edit-link"},$g={class:"vp-meta-item git-info"},Ug={key:0,class:"vp-meta-item last-updated"},Bg={class:"meta-item-label"},jg=["datetime"],Wg={key:1,class:"vp-meta-item contributors"},Gg={class:"meta-item-label"},qg={class:"meta-item-info"},Kg=["title"],Qg=ce({__name:"VPPageMeta",setup(e){const{frontmatter:t,themeLocale:n}=Me(),o=Ya(()=>t.value.contributors??n.value.contributors??!0),i=Vg(),r=Xa(()=>t.value.lastUpdated??n.value.lastUpdated??!0);return(l,s)=>(W(),ne("footer",Hg,[Y(i)?(W(),ne("div",Ng,[ae(Pt,{class:"label",config:Y(i)},{before:xe(()=>[ae(Dg)]),_:1},8,["config"])])):Oe("",!0),re("div",$g,[Y(r)?(W(),ne("div",Ug,[re("span",Bg,Ie(Y(n).lastUpdatedText??Y(r).locale)+": ",1),re("time",{class:"meta-item-info",datetime:Y(r).iso,"data-allow-mismatch":""},Ie(Y(r).text),9,jg)])):Oe("",!0),Y(o).length?(W(),ne("div",Wg,[re("span",Gg,Ie(Y(n).contributorsText)+": ",1),re("span",qg,[(W(!0),ne(ye,null,Qt(Y(o),(a,c)=>(W(),ne(ye,{key:c},[re("span",{class:"contributor",title:`email: ${a.email}`},Ie(a.name),9,Kg),c!==Y(o).length-1?(W(),ne(ye,{key:0},[zt(", ")],64)):Oe("",!0)],64))),128))])])):Oe("",!0)])]))}}),Jg=()=>{const e=On(),t=Pn();return n=>{n&&(Qa(n)?t.fullPath!==n&&e.push(n):go(n)?window.open(n):e.push(encodeURI(n)))}},ts=(e,t)=>e===!1?!1:ut(e)?An(e,t):pr(e)?{...e,link:An(e.link,t).link}:null,Ji=(e,t,n)=>{const o=e.findIndex(r=>r.link===t);if(o!==-1){const r=e[o+n];return r?r.link?r:"prefix"in r&&!lo(r.prefix).notFound?{...r,link:r.prefix}:null:null}for(const r of e)if("children"in r){const l=Ji(r.children,t,n);if(l)return l}const i=e.findIndex(r=>"prefix"in r&&r.prefix===t);if(i!==-1){const r=e[i+n];return r?r.link?r:"prefix"in r&&!lo(r.prefix).notFound?{...r,link:r.prefix}:null:null}return null},Yg=()=>{const{frontmatter:e,themeLocale:t}=Me(),n=Pr(),o=Ha(),i=P(()=>{const l=ts(e.value.prev,o.value);return l===!1?null:l??(t.value.prev===!1?null:Ji(n.value,o.value,-1))}),r=P(()=>{const l=ts(e.value.next,o.value);return l===!1?null:l??(t.value.next===!1?null:Ji(n.value,o.value,1))});return{prevLink:i,nextLink:r}},Xg=["aria-label"],Zg={class:"hint"},ev={class:"link"},tv={class:"external-link"},nv={class:"hint"},ov={class:"link"},iv={class:"external-link"},rv=ce({__name:"VPPageNav",setup(e){const{themeLocale:t}=Me(),n=Jg(),{prevLink:o,nextLink:i}=Yg(),r=P(()=>t.value.pageNavbarLabel??"page navigation");return Be("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?i.value&&(n(i.value.link),l.preventDefault()):l.key==="ArrowLeft"&&o.value&&(n(o.value.link),l.preventDefault()))}),(l,s)=>Y(o)||Y(i)?(W(),ne("nav",{key:0,class:"vp-page-nav","aria-label":r.value},[Y(o)?(W(),ke(Pt,{key:0,class:"prev",config:Y(o)},{default:xe(()=>[re("div",Zg,[s[0]||(s[0]=re("span",{class:"arrow left"},null,-1)),zt(" "+Ie(Y(t).prev??"Prev"),1)]),re("div",ev,[re("span",tv,Ie(Y(o).text),1)])]),_:1},8,["config"])):Oe("",!0),Y(i)?(W(),ke(Pt,{key:1,class:"next",config:Y(i)},{default:xe(()=>[re("div",nv,[zt(Ie(Y(t).next??"Next")+" ",1),s[1]||(s[1]=re("span",{class:"arrow right"},null,-1))]),re("div",ov,[re("span",iv,Ie(Y(i).text),1)])]),_:1},8,["config"])):Oe("",!0)],8,Xg)):Oe("",!0)}}),lv={class:"vp-page"},sv={"vp-content":""},av=ce({__name:"VPPage",setup(e){return(t,n)=>(W(),ne("main",lv,[Ce(t.$slots,"top"),re("div",sv,[Ce(t.$slots,"content-top"),ae(Y(wr)),Ce(t.$slots,"content-bottom")]),ae(Qg),ae(rv),Ce(t.$slots,"bottom")]))}}),ns=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),cv=(e,t)=>{if(t.hash===e)return!0;const n=ns(t.path),o=ns(e);return n===o},pc=(e,t)=>e.link&&cv(e.link,t)?!0:"children"in e?e.children.some(n=>pc(n,t)):!1,uv={class:"vp-sidebar-children"},dv=ce({__name:"VPSidebarItem",props:{item:{},depth:{default:0}},setup(e){const t=e,{item:n,depth:o}=rr(t),i=Pn(),r=On(),l=P(()=>n.value.collapsible),s=P(()=>pc(n.value,i)),a=P(()=>({"vp-sidebar-item":!0,"vp-sidebar-heading":o.value===0,active:s.value,collapsible:l.value})),c=P(()=>l.value?s.value:!0),[u,d]=kr(c.value),h=v=>{l.value&&(v.preventDefault(),d())},p=r.afterEach(()=>{ho(()=>{u.value=c.value})});return ar(()=>{p()}),(v,b)=>{const S=Ks("VPSidebarItem",!0);return W(),ne("li",null,[Y(n).link?(W(),ke(Pt,{key:0,class:Ye(a.value),config:Y(n)},{after:xe(()=>[l.value?(W(),ne("span",{key:0,class:Ye(["arrow",Y(u)?"down":"right"])},null,2)):Oe("",!0)]),_:1},8,["class","config"])):(W(),ne("p",{key:1,tabindex:"0",class:Ye(a.value),onClick:h,onKeydown:Wd(h,["enter"])},[zt(Ie(Y(n).text)+" ",1),l.value?(W(),ne("span",{key:0,class:Ye(["arrow",Y(u)?"down":"right"])},null,2)):Oe("",!0)],34)),"children"in Y(n)&&Y(n).children.length?(W(),ke(cc,{key:2},{default:xe(()=>[Wo(re("ul",uv,[(W(!0),ne(ye,null,Qt(Y(n).children,C=>(W(),ke(S,{key:`${Y(o)}${C.text}${C.link}`,item:C,depth:Y(o)+1},null,8,["item","depth"]))),128))],512),[[Qo,Y(u)]])]),_:1})):Oe("",!0)])}}}),fv={key:0,class:"vp-sidebar-items"},hv=ce({__name:"VPSidebarItems",setup(e){const t=Pn(),n=Pr();return rt(()=>{Ke(()=>t.hash,o=>{const i=document.querySelector(".vp-sidebar");if(!i)return;const r=document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${t.path}${o}"]`);if(!r)return;const{top:l,height:s}=i.getBoundingClientRect(),{top:a,height:c}=r.getBoundingClientRect();a<l?r.scrollIntoView(!0):a+c>l+s&&r.scrollIntoView(!1)})}),(o,i)=>Y(n).length?(W(),ne("ul",fv,[(W(!0),ne(ye,null,Qt(Y(n),r=>(W(),ke(dv,{key:`${r.text}${r.link}`,item:r},null,8,["item"]))),128))])):Oe("",!0)}}),pv={class:"vp-sidebar","vp-sidebar":""},mv=ce({__name:"VPSidebar",setup(e){return(t,n)=>(W(),ne("aside",pv,[ae(hc),Ce(t.$slots,"top"),ae(hv),Ce(t.$slots,"bottom")]))}}),gv=ce({__name:"Layout",setup(e){const{frontmatter:t,page:n,themeLocale:o}=Me(),i=P(()=>t.value.navbar??o.value.navbar??!0),r=Pr(),l=De(!1),s=S=>{l.value=typeof S=="boolean"?S:!l.value},a={x:0,y:0},c=S=>{a.x=S.changedTouches[0].clientX,a.y=S.changedTouches[0].clientY},u=S=>{const C=S.changedTouches[0].clientX-a.x,L=S.changedTouches[0].clientY-a.y;Math.abs(C)>Math.abs(L)&&Math.abs(C)>40&&(C>0&&a.x<=80?s(!0):s(!1))},d=P(()=>t.value.externalLinkIcon??o.value.externalLinkIcon??!0),h=P(()=>[{"no-navbar":!i.value,"no-sidebar":!r.value.length,"sidebar-open":l.value,"external-link-icon":d.value},t.value.pageClass]);bo(()=>{s(!1)});const p=rc(),v=p.resolve,b=p.pending;return(S,C)=>(W(),ne("div",{class:Ye(["vp-theme-container",h.value]),"vp-container":"",onTouchstart:c,onTouchend:u},[Ce(S.$slots,"navbar",{},()=>[i.value?(W(),ke(Ag,{key:0,onToggleSidebar:s},{before:xe(()=>[Ce(S.$slots,"navbar-before")]),after:xe(()=>[Ce(S.$slots,"navbar-after")]),_:3})):Oe("",!0)]),re("div",{class:"vp-sidebar-mask",onClick:C[0]||(C[0]=L=>s(!1))}),Ce(S.$slots,"sidebar",{},()=>[ae(mv,null,{top:xe(()=>[Ce(S.$slots,"sidebar-top")]),bottom:xe(()=>[Ce(S.$slots,"sidebar-bottom")]),_:3})]),Ce(S.$slots,"page",{},()=>[ae(Hm,{onBeforeEnter:Y(v),onBeforeLeave:Y(b)},{default:xe(()=>[Y(t).home?(W(),ke(Xm,{key:0})):(W(),ke(av,{key:Y(n).path},{top:xe(()=>[Ce(S.$slots,"page-top")]),"content-top":xe(()=>[Ce(S.$slots,"page-content-top")]),"content-bottom":xe(()=>[Ce(S.$slots,"page-content-bottom")]),bottom:xe(()=>[Ce(S.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"])])],34))}}),vv={class:"vp-theme-container","vp-container":""},_v={class:"page"},bv={"vp-content":""},yv=ce({__name:"NotFound",setup(e){const{routeLocale:t,themeLocale:n}=Me(),o=P(()=>n.value.notFound??["Not Found"]),i=()=>o.value[Math.floor(Math.random()*o.value.length)],r=P(()=>n.value.home??t.value),l=P(()=>n.value.backToHome??"Back to home");return(s,a)=>(W(),ne("div",vv,[re("main",_v,[re("div",bv,[a[0]||(a[0]=re("h1",null,"404",-1)),re("blockquote",null,Ie(i()),1),ae(Y(ui),{to:r.value},{default:xe(()=>[zt(Ie(l.value),1)]),_:1},8,["to"])])])]))}}),wv=Dn(yv,[["__scopeId","data-v-30fc94a0"]]),Sv=St({enhance({app:e,router:t}){qa("Badge")||e.component("Badge",Vm);const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...o)=>(await rc().wait(),n(...o))},setup(){Am(),Om(),Fm()},layouts:{Layout:gv,NotFound:wv}}),Ev=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),Lv=[{title:"LVGL Master Designer",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[{level:3,title:"Core Capabilities",slug:"core-capabilities",link:"#core-capabilities",children:[]}]},{level:2,title:"Contact Us",slug:"contact-us",link:"#contact-us",children:[]}],path:"/",pathLocale:"/",extraFields:["LVGL Master Designer",`
  

Overview
anyui is a comprehensive visual development environment specifically designed for LVGL (Light and Versatile Graphics Library). It provides developers and embedded systems engineers with tools to design, prototype, and generate production-ready user interfaces without manual code implementation.
Core Capabilities

High-Efficiency Design: Create sophisticated UIs in record time with intuitive tools
Automated Resource Management: Smart handling of images, fonts, and multimedia assets
Advanced Component Architecture: Build complex interfaces using higher-order components
One-Click Generation: Export code and run simulations with a single operation
Streamlined Workflow: Accelerate development from design to deployment seamlessly

Get started with anyui to streamline your embedded UI development workflow.
Contact Us

  
    
    WeChat
  
  
    
    WeChat Group
  
  
    
    QQ Group
  

`]},{title:"Getting Started",headers:[{level:2,title:"Installation",slug:"installation",link:"#installation",children:[]},{level:2,title:"Project Creation",slug:"project-creation",link:"#project-creation",children:[]},{level:2,title:"Design Environment Layout",slug:"design-environment-layout",link:"#design-environment-layout",children:[]},{level:2,title:"Design Workflow",slug:"design-workflow",link:"#design-workflow",children:[]},{level:2,title:"Code Generation",slug:"code-generation",link:"#code-generation",children:[]},{level:2,title:"Simulation",slug:"simulation",link:"#simulation",children:[]},{level:2,title:"Project Persistence",slug:"project-persistence",link:"#project-persistence",children:[]},{level:2,title:"Next Steps",slug:"next-steps",link:"#next-steps",children:[]}],path:"/get-started.html",pathLocale:"/",extraFields:["Getting Started",`This guide provides concise instructions to help you quickly get started with anyui for LVGL UI development.
Installation
For detailed installation instructions, please refer to the Installation guide.
Project Creation
After launching the application, click the &quot;+&quot; button to start creating a new project using the create wizard to configure your project settings:

Configure your project with the following parameters:

Select your target platform specification, Simulator



Choose from predefined templates or initialize a blank project, EmptyUI



Assign a unique project name
Configure color depth to match your display hardware capabilities
Set screen dimensions according to your target display specifications
Select the LVGL baseline version


Design Environment Layout
After entering the project editor, the interface consists of the following elements:

Menu bar at the top
Sidebar on the left
Toolbar beneath the menu
Properties panel on the right
Status bar at the bottom
Design canvas in the center
Widgetbar docked besdide the canvas


Design Workflow
Begin your UI design by dragging and dropping components from the widget library, arranging them on the canvas, and editing their properties.

The development environment provides:

Widget Library: Repository of available UI components for drag-and-drop operations
Design Canvas: Primary workspace for UI layout and design
Properties Inspector: Configuration panel for selected component attributes
Component Hierarchy: Tree view of the current UI component structure

Code Generation
After completing your design, generate code for your project by clicking the &quot;Generate Code&quot; button in the toolbar.

Click &quot;Generate Code&quot; to generate code for your project and switch to the &quot;Code&quot; tab to view the generated code.


Simulation
Preview your design by clicking the &quot;Simulate&quot; button to launch a local simulation.

Project Persistence
All design work remains in memory during your session. Save your project to persistently store your work for future editing.
Next Steps

Documentation - Comprehensive documentation for components and advanced features
Higher Order Components - Advanced UI patterns and composite components
Asset Management - Resource pipeline and optimization strategies
Multi-screen Applications - Complex application architecture patterns

For technical issues and troubleshooting, consult the FAQ section or contact technical support through official channels.
`]},{title:"Installation",headers:[{level:2,title:"Windows 10+",slug:"windows-10",link:"#windows-10",children:[]},{level:2,title:"Mac (x86)",slug:"mac-x86",link:"#mac-x86",children:[]},{level:2,title:"Linux",slug:"linux",link:"#linux",children:[]}],path:"/guide/0_installation.html",pathLocale:"/",extraFields:["Installation",`Windows 10+
The anyui application should be installed in the default path specified by the setup wizard, which is located under the C: drive. Alternatively, users may create a custom folder for anyui, but it must also be located under the C: drive.

Warning
Due to the security model implemented in anyui, the application can only access specific folders. On Windows systems, the C: drive is the only location where anyui can be installed.
This restriction may be addressed in future releases, but currently, anyui must be installed on the C: drive.


Warning
Installation failures may occur due to insufficient privileges. In such cases, execute the setup wizard with administrator privileges.


Warning
anyui requires the WebView2 runtime, which is typically pre-installed on Windows 10+ systems. However, early Windows 10 releases may require manual installation.
Refer to WebView2 Runtime Installation for detailed installation instructions.

Mac (x86)
Install the application by double-clicking the image file and dragging it to the Applications folder.

Warning
The simulator requires SDL2, which may not be installed on your system. Install SDL2 using the following terminal command:
brew install sdl2


Linux
The Linux version is currently under development. Please check back for updates.

Info
For organizations requiring Linux support, please contact our team to express your interest and requirements.

`]},{title:"Code Transplant",headers:[{level:2,title:"Summary",slug:"summary",link:"#summary",children:[]},{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Transplant Process",slug:"transplant-process",link:"#transplant-process",children:[{level:3,title:"UI Code",slug:"ui-code",link:"#ui-code",children:[]},{level:3,title:"SDK",slug:"sdk",link:"#sdk",children:[]},{level:3,title:"Dummy Code",slug:"dummy-code",link:"#dummy-code",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]}],path:"/guide/100_transplant.html",pathLocale:"/",extraFields:["Code Transplant",`Summary
To移植 your anyui project to a target device:

Copy the generated code to your project and invoke setupUI() to initialize the UI
Copy the SDK code to your project as needed
Replace dummy implementations with device-specific code as required

Overview
While anyui primarily focuses on UI design, the generated UI code should maintain independence from underlying hardware and development tools such as Keil.
Additionally, anyui provides an SDK that can be utilized and extended for screen management and hardware communication.
Transplant Process
UI Code
All UI code is generated within the {root}/generated directory, including screen implementations and converted assets (images, fonts, lotties).
This code is automatically generated and should not be manually modified.
SDK
The SDK implementation resides in the {root}/sdk directory, providing utilities for screen management and hardware communication.
The SDK can be extended to address specific requirements.

Warning
The SDK code may be updated in future releases to provide additional features. Any custom modifications will require conflict resolution during updates.

Dummy Code
Dummy implementations are located in {root}/simulator/dummy.c, providing placeholder functionality that must be replaced with device-specific implementations.
The dummy code includes:

Handlers for communication commands originating from the UI
File system driver implementations for external storage (when external image files are used as sources)
Timer implementations for time and battery status updates (for demonstration purposes only; replace with actual implementations or remove as needed)

lv_conf.h
Maintain a device-specific copy of the lv_conf.h file with at least the following configurations:
/*
 * Required configurations
*/
#define LV_HOR_RES_MAX (?) // Horizontal resolution
#define LV_VER_RES_MAX (?) // Vertical resolution
#define LV_COLOR_DEPTH 16
/*Size of the memory available for 'lv_mem_alloc()' in bytes (&gt;= 2kB)*/
#define LV_MEM_SIZE (?) // Memory size in bytes

/*
 * Optional configurations as needed
 */
#define LV_USE_LOG 1 // Enable log

#define LV_USE_FS_STDIO 1 // Enable file system
#define LV_USE_PNG 1 // Enable PNG decoder
#define LV_USE_JPEG 1 // Enable JPEG decoder
#define LV_USE_BMP 1 // Enable BMP decoder
#define LV_USE_GIF 1 // Enable GIF decoder

#define LV_USE_BTN 1 // Enable button
#define LV_USE_IMG 1 // Enable image
#define LV_USE_LABEL 1 // Enable label
// Additional components as required

/*
 * Device-specific exclusions
 */;
//#define USE_SIMULATOR

`]},{title:"Use External Image File as Source",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[{level:3,title:"Enable External Image Support",slug:"enable-external-image-support",link:"#enable-external-image-support",children:[]},{level:3,title:"File System Driver Implementation",slug:"file-system-driver-implementation",link:"#file-system-driver-implementation",children:[]}]},{level:2,title:"Important Considerations",slug:"important-considerations",link:"#important-considerations",children:[]}],path:"/guide/10_image_fs.html",pathLocale:"/",extraFields:["Use External Image File as Source",`Overview
Images can be embedded as variables within the application. Besides that, they can be loaded from external storage. This allows for greater flexibility, such as updating images without requiring application rebuilds.
Beginning with v0.28.0, external image file support has been implemented.
Configuration
Enable External Image Support

Navigate to Project → Project Config...
Enable Use External Image File
Configure the Path Prefix
Define decoder support in lv_conf.h:

#define LV_USE_FS_STDIO 1 // Enable file system support

#define LV_USE_PNG 1      // Enable PNG decoder
#define LV_USE_JPEG 1     // Enable JPEG decoder
#define LV_USE_BMP 1      // Enable BMP decoder

File System Driver Implementation
Implement and register a file system driver for file I/O operations.
A reference implementation for the simulator is provided, which can be adapted for custom implementations:
/* File system callbacks for LVGL */
static void *fs_open(lv_fs_drv_t *drv, const char *path, lv_fs_mode_t mode) {
  LV_UNUSED(drv);
  const char *flags = (mode == LV_FS_MODE_WR) ? &quot;wb&quot; : &quot;rb&quot;;
  return fopen(path, flags);
}

static lv_fs_res_t fs_close(lv_fs_drv_t *drv, void *file) {
  LV_UNUSED(drv);
  fclose((FILE *)file);
  return LV_FS_RES_OK;
}

static lv_fs_res_t fs_read(lv_fs_drv_t *drv, void *file, void *buf,
                           uint32_t btr, uint32_t *br) {
  LV_UNUSED(drv);
  *br = fread(buf, 1, btr, (FILE *)file);
  return (*br &gt; 0) ? LV_FS_RES_OK : LV_FS_RES_UNKNOWN;
}

static lv_fs_res_t fs_seek(lv_fs_drv_t *drv, void *file, uint32_t pos,
                           lv_fs_whence_t whence) {
  LV_UNUSED(drv);
  int origin = (whence == LV_FS_SEEK_SET)   ? SEEK_SET
               : (whence == LV_FS_SEEK_CUR) ? SEEK_CUR
                                            : SEEK_END;
  fseek((FILE *)file, pos, origin);
  return LV_FS_RES_OK;
}

static lv_fs_res_t fs_tell(lv_fs_drv_t *drv, void *file, uint32_t *pos) {
  LV_UNUSED(drv);
  *pos = ftell((FILE *)file);
  return LV_FS_RES_OK;
}

/* Register the file system */
void register_fs() {
  static lv_fs_drv_t fs_drv;
  lv_fs_drv_init(&amp;fs_drv);
  fs_drv.letter = 'S'; // Drive letter
  fs_drv.open_cb = fs_open;
  fs_drv.close_cb = fs_close;
  fs_drv.read_cb = fs_read;
  fs_drv.seek_cb = fs_seek;
  fs_drv.tell_cb = fs_tell;
  lv_fs_drv_register(&amp;fs_drv);
}

Register the file system by calling register_fs() in main():
int main() {
  ...
  register_fs();
  ...
}

Enable simulation by defining USE_SIMULATOR in lv_conf.h within the simulator folder:
#define USE_SIMULATOR

Important Considerations

Info
If image loading fails due to memory allocation issues, increase LV_MEM_SIZE in lv_conf.h:
#  define LV_MEM_SIZE    (? * 1024U * 1024U)          /*[bytes]*/



Warning

All images must be located in the configured Path Prefix directory on the target device
Image component dimensions must match the source image dimensions, as the original image will be displayed without scaling


`]},{title:"GIF Animated Image",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[{level:3,title:"Enable GIF Support",slug:"enable-gif-support",link:"#enable-gif-support",children:[]}]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]}],path:"/guide/11_gif_animated.html",pathLocale:"/",extraFields:["GIF Animated Image",`Overview
Beginning with v0.28.0, animated GIF image support has been implemented.
Configuration
Enable GIF Support
To enable GIF decoder support, define the following in lv_conf.h:
#define LV_USE_GIF 1      // Enable GIF decoder

Usage
GIF images can be utilized as either embedded variables or external files. For external file implementation, refer to Use External Image File as Source.
`]},{title:"Lottie Animation",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/guide/12_lottie.html",pathLocale:"/",extraFields:["Lottie Animation",`LVGL v8
LVGL v8 does not natively support Lottie animations. Support is provided through third-party libraries. Refer to rlottie integration for implementation details.
The rlottie library has been integrated into anyui, enabling code generation and Lottie animation simulation through the anyui environment. However, rlottie integration is still required for target device deployment.
LVGL v9
Beginning with v9, the Lottie widget utilizes the ThorVG library which is integrated into LVGL. To enable Lottie animations, either LV_USE_THORVG_INTERNAL (to use the built-in ThorVG) or LV_USE_THORVG_EXTERNAL (to link it externally) must be enabled, allowing direct use of Lottie animations in LVGL v9.
anyui uses built-in ThorVG for Lottie implementation and can simulate Lottie animations in the simulator.
For comprehensive details, refer to Lottie of LVGL v9.
`]},{title:"Introduction",headers:[{level:2,title:"Component",slug:"component",link:"#component",children:[{level:3,title:"Basic Component",slug:"basic-component",link:"#basic-component",children:[]},{level:3,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:3,title:"Template Component",slug:"template-component",link:"#template-component",children:[]},{level:3,title:"Global Component",slug:"global-component",link:"#global-component",children:[]}]},{level:2,title:"Action",slug:"action",link:"#action",children:[]},{level:2,title:"Command",slug:"command",link:"#command",children:[]},{level:2,title:"Event",slug:"event",link:"#event",children:[]}],path:"/guide/1_intro.html",pathLocale:"/",extraFields:["Introduction",`Component
Components serve as the fundamental building blocks of applications developed with anyui.
To effectively utilize anyui's capabilities, understanding the following component concepts is essential for UI design and implementation.
Basic Component
Basic Components are native UI elements provided directly by LVGL. As anyui is a graphic design tool that generates LVGL code, it inherits core LVGL concepts including properties, styles, and events.
Refer to LVGL Documentation for comprehensive information about native components.
Higher Order Component
Higher Order Components (HoCs) are composite components extended by anyui. Built upon Basic Components, HoCs encapsulate predefined behaviors and styling patterns. These components offer enhanced flexibility and significantly reduce development time when implementing complex user interfaces.
See Higher Order Component for implementation details and usage guidelines.
Template Component
Template Components are user-defined custom components. Users can persist modified properties and styles of existing components as reusable templates, enabling consistent UI elements across different sections of a project.
Refer to Template Component for detailed usage instructions.
Global Component
Global Components provide project-wide component sharing capabilities. Modifications to a Global Component's properties or styles automatically propagate to all instances of that component throughout the project.
A common use case is implementing a consistent Status Bar across multiple application views.
Action
Actions represent LVGL events triggered by user interactions, also referred to as User Events. Examples include button presses, slider adjustments, and touch gestures.
Actions can be configured to modify component properties dynamically. For instance, a button click can trigger a background color change for visual feedback.
Command
Commands are messages transmitted from the upper layers (Application/UI) to lower layers (SDK/Hardware). Typical command examples include Bluetooth connection requests, WiFi configuration, and time synchronization operations.
Command is extended by anyui for communication between upper layers and lower layers.
Refer to Event for comprehensive command documentation.
Event
Events are asynchronous notifications originating from lower layers (SDK/Hardware) directed to upper layers (Application/UI), also known as System Events. Common event types include battery level changes, sensor data updates, and network status notifications.
Event is extended by anyui for communication between upper layers and lower layers.
Refer to Event for comprehensive event documentation.
`]},{title:"Design",headers:[{level:2,title:"Create Components",slug:"create-components",link:"#create-components",children:[]},{level:2,title:"Select Components",slug:"select-components",link:"#select-components",children:[]},{level:2,title:"Multi-Select Components",slug:"multi-select-components",link:"#multi-select-components",children:[]},{level:2,title:"Move Components",slug:"move-components",link:"#move-components",children:[]},{level:2,title:"Resize Components",slug:"resize-components",link:"#resize-components",children:[{level:3,title:"Proportional Resizing",slug:"proportional-resizing",link:"#proportional-resizing",children:[]}]},{level:2,title:"Duplicate Components",slug:"duplicate-components",link:"#duplicate-components",children:[]},{level:2,title:"Delete Components",slug:"delete-components",link:"#delete-components",children:[]},{level:2,title:"Align Components",slug:"align-components",link:"#align-components",children:[]},{level:2,title:"Zoom Controls",slug:"zoom-controls",link:"#zoom-controls",children:[]},{level:2,title:"Move Canvas",slug:"move-canvas",link:"#move-canvas",children:[]}],path:"/guide/2_layout.html",pathLocale:"/",extraFields:["Design",`anyui provides an intuitive visual design environment for creating sophisticated user interfaces. The platform offers drag-and-drop functionality with precise component layout controls, enabling efficient UI development.
Create Components
Initialize your interface by adding components from the widget library. Drag the required components onto the canvas to begin prototyping and constructing your user interface according to your design specifications.
Select Components
Click on any component to select it. Upon selection, the component's properties, styles, and event handlers become accessible in the side panel, allowing for detailed customization of all design aspects.
Multi-Select Components
To work with multiple components simultaneously, hold the Shift key while clicking on each desired component. Selected components are visually distinguished with orange highlighting for clear identification.

Move Components
Reposition components by clicking and dragging them across the canvas. During movement, alignment guidelines automatically appear near the edges or centers of adjacent components and the canvas boundaries, ensuring precise component placement.

Resize Components
Adjust component dimensions by clicking and dragging their edges or corners. Alignment guidelines assist in maintaining consistent sizing and positioning throughout the design process.
Proportional Resizing
Maintain component aspect ratios during resizing by holding the Ctrl/Command key while dragging. This ensures proportional scaling without distortion.
Duplicate Components
Efficiently create multiple similar components by selecting the source component and holding the Option/Alt key while dragging to the desired location. This feature is particularly useful for creating consistent UI elements such as menu items, buttons, or repeated design patterns.
Delete Components
Remove components from the design by selecting them and pressing the Delete key, or by accessing the &quot;Delete&quot; option through the context menu.
Align Components
With multiple components selected, utilize the alignment tools in the alignment panel, located above the screen area. These tools provide precise alignment controls that ensure consistent spacing and positioning for a professional appearance.

Zoom Controls
Easily zoom in and out of the design canvas by scrolling the mouse wheel, or utilize the zoom controls available in the toolbar.
Pressing the zoom reset button will restore the canvas to a 100% zoom level.
Move Canvas
Move canvas by dragging the canvas area beyond the screen boundaries.
Alternatively:

Hold Ctrl/Command while scrolling the mouse wheel to move the canvas vertically
Hold Shift while scrolling the mouse wheel to move the canvas horizontally

When the mouse cursor is positioned within the screen area, the default drag behavior enables multi-selection of components. However, holding the Spacebar key temporarily switches to canvas moving mode until the mouse button is released.
`]},{title:"Resource Management",headers:[{level:2,title:"Image Management",slug:"image-management",link:"#image-management",children:[]},{level:2,title:"Font Management",slug:"font-management",link:"#font-management",children:[]},{level:2,title:"Lottie Management",slug:"lottie-management",link:"#lottie-management",children:[]}],path:"/guide/3_resource.html",pathLocale:"/",extraFields:["Resource Management",`Image Management
The resource management system enables importing and utilization of application assets. Images can be imported through the resource interface and subsequently assigned to component properties.

After importing an image, it can be assigned to a component property by selecting the image from the resource interface. and anyui will automatically load the image and display it in the component.
At code generation stage, anyui will automatically generate the corresponding code for the image.

Warning
Users are responsible for ensuring they have the necessary rights and permissions for any images imported and used within the application.

Font Management
Custom fonts can be imported to enhance the typographic presentation of the application. Imported fonts are available for selection within component property configurations.

After importing a font, you can select it from the font dropdown menu in the component property configuration, and the font will be applied to the component.
At code generation stage, anyui will automatically generate the corresponding code for the font.

Warning
Users are responsible for ensuring they have the necessary rights and permissions for any fonts imported and used within the application.

Lottie Management
Lottie animations can be imported to enhance the visual presentation of the application. Imported animations are available for selection within component property configurations.

Warning
Users are responsible for ensuring they have the necessary rights and permissions for any Lottie animations they import and use within the application.

`]},{title:"Template Component",headers:[{level:2,title:"Save Template Component",slug:"save-template-component",link:"#save-template-component",children:[]},{level:2,title:"Modify Template Component",slug:"modify-template-component",link:"#modify-template-component",children:[]}],path:"/guide/4_composite.html",pathLocale:"/",extraFields:["Template Component",`Template components are user-defined component templates. Users can persist modified properties and styles of components as reusable template components.
Template components can encapsulate subcomponents, allowing entire container hierarchies with their child components to be saved as a single template.
Save Template Component
To create a template component, select the desired component, right-click, and choose &quot;Save as Template Component&quot; from the context menu.

Template components can be utilized in the same manner as standard components.
Modify Template Component
For existing template components, users can modify the name or delete the template through the template component settings interface.


Warning
Template components only preserve component properties and styles, excluding event handlers and behaviors.

`]},{title:"Hide and Lock",headers:[{level:2,title:"Hide and Show Components",slug:"hide-and-show-components",link:"#hide-and-show-components",children:[{level:3,title:"Hidden Component Interactions",slug:"hidden-component-interactions",link:"#hidden-component-interactions",children:[]}]},{level:2,title:"Lock and Unlock Components",slug:"lock-and-unlock-components",link:"#lock-and-unlock-components",children:[]}],path:"/guide/5_hide_lock.html",pathLocale:"/",extraFields:["Hide and Lock",`Hide and Show Components
Component visibility management serves several purposes in the design workflow:

Focus on specific components by temporarily concealing others
Preserve partially completed components without displaying them
Isolate problematic components during debugging
Evaluate component retention decisions without permanent deletion

The hide functionality provides a non-destructive approach to temporarily remove components from view while preserving their properties and structure for later use.
Components can be hidden through multiple interfaces:

Right-click context menu on the component tree or canvas
Click the visibility toggle  in the component tree

Hidden components can be restored using the same interaction patterns.

Info
Starting from v0.21.0, component visibility states are persisted when the project is saved.

Hidden Component Interactions
Hidden components maintain limited functionality within the design environment:
Available Operations:

Hover over entries in the component tree to highlight their position on the canvas
Select entries in the component tree to modify their attributes and styles


Warning
While hidden components remain selectable in the component tree for property modifications, editing invisible components is not recommended as it can lead to unintended design inconsistencies.

Restricted Operations:

Canvas hover highlighting and selection
Drag selection on the canvas
Alignment operations with hidden components


Info
Hidden components are excluded from code generation and build processes, effectively treating them as non-existent in the output.
For screens marked as hidden, they are not included in code generation and build processes despite not being visually concealed in the editor.

Lock and Unlock Components
Component locking prevents unintended modifications when working with complex interfaces containing numerous components.
Components can be locked using several methods:

Click the lock icon  in the component tree
Right-click context menu with the Lock option
System menu navigation: Edit → Lock

Locked components can be unlocked using the corresponding inverse operations.

Info
Component locking is a session-only state that resets upon project reload. Locked components will be automatically unlocked when the project is reopened.

`]},{title:"Screen Management",headers:[{level:2,title:"Enable Screen Management",slug:"enable-screen-management",link:"#enable-screen-management",children:[]},{level:2,title:"Configure Main Screen",slug:"configure-main-screen",link:"#configure-main-screen",children:[]},{level:2,title:"Implement Navigation",slug:"implement-navigation",link:"#implement-navigation",children:[]},{level:2,title:"Create Screen Transitions",slug:"create-screen-transitions",link:"#create-screen-transitions",children:[]}],path:"/guide/7_scr_mgmt.html",pathLocale:"/",extraFields:["Screen Management",`Modern applications typically consist of multiple screens, including a primary screen and several sub-screens. Users navigate from the main screen to sub-screens and subsequently return to the main screen. Without proper screen management, manual screen switching would be required.
Beginning with v0.25.0, the following features were introduced to support screen management:

Screen Management configuration
NavigateBar component
Main screen attribute

This feature is disabled by default. To enable screen management:
Enable Screen Management
Access Project → Project Config → Screen Management

Configure Main Screen
The main screen serves as the application entry point.
When a screen is designated as the Main screen, all other screens are treated as sub-screens.

Implement Navigation
Add the NavigateBar to sub-screens by expanding the WidgetBar and locating the new NavigateBar component in the Higher Order Component category. Drag and drop it to screens other than the Main screen. Typically, it is positioned below the status bar of a screen.
The Back action of the NavigateBar returns to the previous screen.

Create Screen Transitions
Add a button to the main screen and configure the Clicked action to load the desired sub-screen as previously implemented.
Upon clicking the button, the sub-screen will load and display. Clicking the back button on the sub-screen will return to the main screen.
`]},{title:"Global Components",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Global Status Bar",slug:"global-status-bar",link:"#global-status-bar",children:[{level:3,title:"Implementation",slug:"implementation",link:"#implementation",children:[]}]},{level:2,title:"Video Demonstration",slug:"video-demonstration",link:"#video-demonstration",children:[]},{level:2,title:"Build Time Estimation",slug:"build-time-estimation",link:"#build-time-estimation",children:[]}],path:"/guide/8_globalcomponents.html",pathLocale:"/",extraFields:["Global Components",`Overview
Global components are reusable components that maintain consistent appearance and behavior across an entire application. Modifications to global components are automatically propagated to all instances throughout the project. A typical implementation is a status bar that appears uniformly across all screens.
Global Status Bar
The Global Status Bar functions similarly to the Status Bar in the Higher Order Component category. The primary distinction is that the Global Status Bar maintains project-wide consistency, with any modifications automatically applied to all instances.
Implementation
To implement a Global Status Bar:

Access the screen's attribute panel
Enable the Global Status Bar option


Video Demonstration
Build Time Estimation

`]},{title:"Communication Commands and Events",headers:[{level:2,title:"Communication Commands",slug:"communication-commands",link:"#communication-commands",children:[]},{level:2,title:"Communication Events",slug:"communication-events",link:"#communication-events",children:[{level:3,title:"Status and Action of Communication Events",slug:"status-and-action-of-communication-events",link:"#status-and-action-of-communication-events",children:[]}]},{level:2,title:"Default Available Commands and Events",slug:"default-available-commands-and-events",link:"#default-available-commands-and-events",children:[]}],path:"/guide/9_comm.html",pathLocale:"/",extraFields:["Communication Commands and Events",`Communication commands and events provide a mechanism for interaction between the application layer and the underlying hardware layer of the device.
Communication Commands
Communication Commands (Comm Commands) represent requests transmitted from the upper layer to the lower layer.
User inputs are ultimately converted to instructions that direct the device to perform specific actions.
For example, when a user clicks a button, the button sends a request to the lower layer to instruct the device to establish a WiFi connection. Comm Commands provide the mechanism for wrapping and transmitting these requests to the lower layer.
Comm Commands provide the capability to send requests but do not encompass business logic implementation. Device manufacturers are responsible for implementing the business logic and determining the available command set.
Communication Events
Communication Events (Comm Events) represent notifications transmitted from the lower layer to the upper layer.
When events occur in the lower layer, notifications are sent to the upper layer to trigger UI updates.
For example, when a device establishes a WiFi connection, the device sends a notification to the upper layer to update the UI. Comm Events provide the mechanism for wrapping and transmitting these notifications to the upper layer.
Comm Events provide the capability to send notifications but do not encompass business logic implementation. Device manufacturers are responsible for implementing the business logic and determining the available event set.
Status and Action of Communication Events
From a UI perspective, events typically require updates to labels, icons, or other visual elements based on specific conditions.
For communication events, status and action configurations simplify UI updates. Status and corresponding actions can be configured as needed.
For example:
To configure an image component to receive a Bluetooth status event and display appropriate icons for connected and disconnected states:


Right-click on the image component and add a Comm Event for BT Status Changed


Configure the event status:

Status: 0 (BT disconnected)
Action: Set image for BT disconnected state
Status: 1 (BT connected)
Action: Set image for BT connected state




Info
The appropriate status codes are determined by your device provider. Refer to your device documentation for available status codes. These codes are defined by the lower layer business logic.

Default Available Commands and Events
While Communication Commands and Events are device-specific, default implementations are provided for common use cases:


Time update


Bluetooth connected/disconnected


WiFi connected/disconnected


Battery level changed

These represent device commands/events with simulated implementations that must be replaced with actual device-specific implementations.



Drawer opened/closed

This represents a UI command/event rather than a device event.



These commands and events are available upon project creation and can be used directly or modified to accommodate specific business logic requirements.

Info
Communication commands and events are tightly coupled with device capabilities. For comprehensive device support, coordinate with your device provider to enable built-in support.

`]},{title:"Q&A",headers:[{level:2,title:"Build and Run",slug:"build-and-run",link:"#build-and-run",children:[{level:3,title:"Why do I encounter build errors even with an empty project on Windows?",slug:"why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",link:"#why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",children:[]},{level:3,title:"Why does it take a long time to build the project even in Incremental mode?",slug:"why-does-it-take-a-long-time-to-build-the-project-even-in-incremental-mode",link:"#why-does-it-take-a-long-time-to-build-the-project-even-in-incremental-mode",children:[]}]}],path:"/guide/Q_A.html",pathLocale:"/",extraFields:["Q&A",`Build and Run
Why do I encounter build errors even with an empty project on Windows?
Please ensure that:

You have installed the latest version of anyui
anyui is installed on the C:// drive, as the application's security model restricts access to specific folders
The project path does not contain whitespace ( ), backslashes (\\), or non-ASCII characters; Chinese characters are a common example of such cases

Why does it take a long time to build the project even in Incremental mode?
Please ensure that you have installed the latest version of anyui. Build process optimizations were significantly enhanced in v0.13.0
`]},{title:"Documentation",headers:[{level:2,title:"Setup",slug:"setup",link:"#setup",children:[]},{level:2,title:"Core Concepts",slug:"core-concepts",link:"#core-concepts",children:[]},{level:2,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:2,title:"Advanced Features",slug:"advanced-features",link:"#advanced-features",children:[]},{level:2,title:"Development",slug:"development",link:"#development",children:[]},{level:2,title:"Technical Support",slug:"technical-support",link:"#technical-support",children:[]},{level:2,title:"Documentation Structure",slug:"documentation-structure",link:"#documentation-structure",children:[]}],path:"/guide/",pathLocale:"/",extraFields:["Documentation",`This documentation provides comprehensive technical guidance for developing LVGL user interfaces using anyui's visual development environment.
Setup
Begin with environment configuration and project initialization.

Installation - Platform-specific installation procedures

Core Concepts
Fundamental principles underlying anyui's design methodology.

Introduction - Understanding the component system framework
Design - Component positioning, arrangement strategies, and design tools
Hide and Lock - Component visibility and edit state management
Resource Management - Resource management for images, fonts, and multimedia

Higher Order Component
Advanced component patterns for sophisticated UI implementations.

State Button - Button with multiple states and visual feedback
Label Slider - Slider with integrated value labels
Value Slider - Slider with customizable value display
Check Group &amp; Radio Group - Group of related checkboxes with mutual exclusion
StatusBar - Application status display component
NavigateBar - Application navigation component
Drawer - Sliding panel for additional content

Advanced Features
Specialized features for complex applications and multimedia integration.

Template Component - Reusable component template creation and management
Global Components - Cross-screen component sharing and synchronization
Screen Management - Complex application screen management
Communication Commands and Events - Component interaction patterns and event handling
Use External Image File as Source - External image file support for flexible image management
GIF Animated Image - Animated GIF integration and optimization
Lottie - Vector-based animation implementation

Development
Professional development processes and deployment strategies.

Build Mode - Build system configuration and optimization
Code Transplant - Cross-platform deployment procedures

Technical Support
Troubleshooting resources and technical assistance.

Q&amp;A - Common issues and resolution procedures


Documentation Structure
This documentation follows a progressive learning path from fundamental concepts to advanced implementation techniques. New users should follow the sections sequentially, while experienced developers may navigate directly to specific topics using the sidebar navigation.
`]},{title:"Build Mode",headers:[{level:2,title:"Full",slug:"full",link:"#full",children:[]},{level:2,title:"Incremental",slug:"incremental",link:"#incremental",children:[]},{level:2,title:"Mini",slug:"mini",link:"#mini",children:[]}],path:"/guide/build_mode.html",pathLocale:"/",extraFields:["Build Mode",`Build Mode
The platform provides three distinct build modes optimized for different development scenarios:
Full
Performs a complete project rebuild. The following operations are executed:

✓ Clean all generated files
✓ Generate source code for screens
✓ Convert resources (images/fonts/lotties)
✓ Compile the entire project
✓ Execute the project

This mode is recommended for initial builds or when top-level header files (e.g., lv_conf.h) have been modified.
Incremental
Performs an incremental project build. The following operations are executed:

✓ Clean generated files
✓ Generate source code for screens
✓ Convert resources (images/fonts/lotties)
✓ Compile auto-generated source files
✓ Execute the project

This mode is suitable for most development workflows, except when top-level header files (e.g., lv_conf.h) have been modified.
Mini
Performs a minimal project build. The following operations are executed:

✗ Clean generated files
✗ Convert resources (images/fonts/lotties)
✓ Generate source code for screens
✓ Compile auto-generated source files
✓ Execute the project

This mode is appropriate when no resources have been modified, specifically when:

Image references for components remain unchanged
Text content, font sizes, or font families for components remain unchanged
Lottie references for components remain unchanged


Warning
The &quot;Mini&quot; mode is not suitable for initial project builds.

`]},{title:"0.13.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.13.0.html",pathLocale:"/",extraFields:["0.13.0",`Release Notes

Add &quot;About&quot; for system information
Optimize performance
Fix zoom in/out compatibility issue
Reduce build time of project for both incemental build and full build
Improve UI/UX
Misc items

Windows-v0.13.0
Mac-v0.13.0
`,"release"]},{title:"0.13.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.13.1.html",pathLocale:"/",extraFields:["0.13.1",`Release Notes

Fix style of some attrbiute editor

Windows-v0.13.1
Mac-v0.13.1
`,"release"]},{title:"0.14.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.14.0.html",pathLocale:"/",extraFields:["0.14.0",`Release Notes

Support Portrait mode when creating a new project
Support adjustable of SideBar, CodeBox, LogBox and attribute editor
Other improvement

Windows-v0.14.0
Mac-v0.14.0
`,"release"]},{title:"0.15.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.15.0.html",pathLocale:"/",extraFields:["0.15.0",`Release Notes

Support new version check, and show update icon on toolbar if avaiable



Other improvements

Windows-v0.15.0
Mac-v0.15.0
`,"release"]},{title:"0.16.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.16.0.html",pathLocale:"/",extraFields:["0.16.0",`Release Notes

Add new resolution support, 480 x 320
Support draggable widget bar
Improve setting dialog, and add config for direction of widget bar
Improve event editor
Improve Slider &amp; DropdownList &amp; Bar widgets
Improve context menu position
Add Rename to Menu
Add back Save as custom to Menu
Fix &quot;value of pos/size of widget could be doulbe type&quot; issue
Other improvements

Windows-v0.16.0
Mac-v0.16.0
`,"release"]},{title:"0.17.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.17.0.html",pathLocale:"/",extraFields:["0.17.0",`Release Notes

Support new resolutions: 720x720, 480x480
Support style brush
Support drag &amp; select multiple widgets from all directions
Support zoom in max 5 times
Highlight components when mouse over
Prevent name conflicts when duplicating components
Prevent navigate back by default when Backspace pressed
Other imporvements &amp; bug fixes

Windows-v0.17.0
Mac-v0.17.0
`,"release"]},{title:"0.17.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.17.1.html",pathLocale:"/",extraFields:["0.17.1",`Release Notes

Go directly to open the project after it's being created
Verify if project name existed when creating new project
Fix color depth issue when creating new project
Fix project name can't be deleted completely when creating new project

Windows-v0.17.1
Mac-v0.17.1
`,"release"]},{title:"0.18.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.18.0.html",pathLocale:"/",extraFields:["0.18.0",`Release Notes

Support batch uploading of image/font files
Support verification of file names when uploading images
Support verification of component name
Support verification of project name when creating new project
Prevent user from selecting duplicate &quot;action + target&quot; when creating events
Improve toolbar of Create
Improve project list
Improve resource management
Fix the operation of accidentally triggering the copy of components when switching between windows with &quot;Alt + Tab&quot; on Windows OS
Fix several issues regarding code generation

Windows-v0.18.0
Mac-v0.18.0
`,"release"]},{title:"0.20.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.20.0.html",pathLocale:"/",extraFields:["0.20.0",`Release Notes

Add Higher Order Components (HoC)

State Button: provide multiple states when clicking, with images &amp; labels changed in different state
Label Slider: provide a slider with for each slide tick, and multiple images &amp; labels changed when slider value changed
Value Slider: provide a slider with a value attached, and multiple image &amp; labels changed when value changed


Support HoC editing
Detect non-existed images reference and highlight referred widget if they are not found
Support copy &amp; paste screen
Support *.otf fonts import
Add type and category in widget's attribute
Add visible in widget &amp; screen's attribute, and able to hide widget or screen from code generation &amp; build &amp; run
Distinguish between no image selected and selected image not found in image attribute
Fix paste screen into another screen accidentally
Fix widget tree scroll issue
Remove generated files before code generation &amp; build run
Other fixes and improvements

Windows-v0.20.0
Mac-v0.20.0
`,"release"]},{title:"0.21.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.21.0.html",pathLocale:"/",extraFields:["0.21.0",`Release Notes

Support Lottie animation
Add Lottie resource management
Widget hide &amp; show state can be kept if project is saved
Add context menu for screen list
Support &quot;Show only current&quot; and &quot;Show all&quot; for screen list
Support highlight for widget when hovering in widget tree even widget is hidden
Apply font family for font resource list item
Fix accidently copy &amp; paste widget when trying to copy &amp; paste attribute text content
Other fixes and improvements

Windows-v0.21.0
Mac-v0.21.0
`,"release"]},{title:"0.22.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.22.0.html",pathLocale:"/",extraFields:["0.22.0",` -->

Release Notes

Add new widgets: Animimg (Animated Image) and Roller
Add new higher order components: Check Group and Radio Group, capable of state self-managed
Highlight screens when image/font/lottie reference is not found
Fix slider knob position issue for Labelslider
Fix font add/remove causing data re-init issue
Other fixes and improvements

Windows-v0.22.0
Mac-v0.22.0
`,"release"]},{title:"0.25.0",headers:[{level:2,title:"5 minutes to create a LVGL app framework",slug:"_5-minutes-to-create-a-lvgl-app-framework",link:"#_5-minutes-to-create-a-lvgl-app-framework",children:[]},{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/release/release-v0.25.0.html",pathLocale:"/",extraFields:["0.25.0",`5 minutes to create a LVGL app framework

Windows-v0.25.0 Download
Mac-v0.25.0 Download
Release Notes

Support screen management, and config option for enable/disable
Add new higher order components: Drawer, StatusBar, NavigateBar
Introduce global components: global status bar, which can be applied to all screens
Support communication command and event to interact with lower layer (hardware)
Support undo/redo for higher order components editing
Support undo/redo for global components editing
Support custom resolution when creating new project
Other fixes and improvements


Info
Communication command and event is strongly binded with the device, if you want to use full support of the device's capability, let your device provider contact us, we can provide builtin support for the device.


Warning
This version is not compatible with previous versions. So, if the project is created with previous versions, you'll encounter some issues with this release.
Follow the instructions below to upgrade old projets.


Create a new project with the new version (v0.25.0)


Copy below files from new project to old project in the same path:


image folder under generated folder


sdk folder under project root


dummy.c/dummy.h file under simulator folder


Makefile under simulator folder
If you've changed your local Makefile, you need to modify it to make sure sdk and dummy.c file are included in building.





版本说明

支持屏幕管理，并提供启用/禁用的配置选项
添加新的高阶组件：抽屉（Drawer）、状态栏（StatusBar）、导航栏（NavigateBar）
引入全局组件：全局状态栏，可应用于所有屏幕
支持与底层（硬件）交互的通信命令和事件
支持高阶组件编辑时撤销/重做功能
支持全局组件编辑时撤销/重做功能
创建新项目时支持自定义分辨率
其他修复和改进


Info
通信命令与事件与设备强关联，如果你想要使用设备的全部能力，让你的设备供应商与我们联系，我们可为该设备提供内置支持


Warning
此版本与旧版本不兼容。因此，如果项目是用旧版本创建的，在使用此版本时会遇到一些问题。
请按照以下中的说明来升级旧项目:


使用新版本（v0.25.0）创建一个新项目。


按相同路径，将以下文件从新项目复制到旧项目中：


generated 文件夹下的 image 文件夹


项目根目录下的 sdk 文件夹


simulator 文件夹下的 dummy.c/dummy.h 文件


simulator 文件夹下的 Makefile 文件
如果你此前修改过本地的 Makefile，就需要再次调整，确保构建过程中包含 sdk 和 dummy.c 文件。





Windows-v0.25.0 Download
Mac-v0.25.0 Download
`,"release"]},{title:"0.26.0",headers:[{level:2,title:"Create a circular display app supporting screen swipe gesture",slug:"create-a-circular-display-app-supporting-screen-swipe-gesture",link:"#create-a-circular-display-app-supporting-screen-swipe-gesture",children:[]},{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.26.0.html",pathLocale:"/",extraFields:["0.26.0",`Create a circular display app supporting screen swipe gesture

Windows-v0.26.0 Download
Mac-v0.26.0 Download
Release Notes

Support circle display shape for new project
Support Arc widget
Support swipe gesture for screen
Hide StatusBar &amp; NaivigateBar &amp; Drawer if display shape is circle
Other fixes and improvements

`,"release"]},{title:"0.27.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.27.0.html",pathLocale:"/",extraFields:["0.27.0",`
Release Notes

Change way of dragging components, and improve
Add &quot;Mini&quot; mode of building for speedy building if no resource changed
Fix incremental build not taking effect on Windows
Fix crash white screencrash  issue when loading invalid lottie json file
Fix component hovering highlighted issue in HoC editor
Disable showing of context menu by default when &quot;Ctrl+mouse&quot; is pressed on Windows
Add more tools for components alignment
Remove unsupported application template
Other fixes and improvements

Windows-v0.27.0 Download
Mac-v0.27.0 Download
`,"release"]},{title:"0.28.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.28.0.html",pathLocale:"/",extraFields:["0.28.0",`
Release Notes

Support external image from file system
Support .gif animated image
Unify multi-selection behavior of widgets for screen canvas &amp; widget tree
Support hide/show &quot;Container&quot; widget and its children together
Support drag &amp; drop multiple widgets in widget tree
Support drag &amp; select widgets inside &quot;Container&quot; widget
New copied &amp; pasted widget will be placed on top layer, instead of bottom layer
&quot;Delete&quot; key to delete selected widgets directly
Other fixes and improvements

Windows-v0.28.0 Download
Mac-v0.28.0 Download
`,"release"]},{title:"0.30.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.30.0.html",pathLocale:"/",extraFields:["0.30.0",`
Release Notes

Re-design props &amp; styles panel of widget
Enable more actions for user action &amp; system event action
Support custom code for user action &amp; system event action
Support multi-selection of images
Other fixes and improvements


Warning
Break changes:


The data type of user actions have been changed, so you need to re-configure the user actions.
e.g. If you have configured the CLICK action of a button to load a screen, you need to re-configure it.


The old data of user action probably will cause wrong code generation, if you found some wired code generated, please check if the user action is correctly configured.



Windows-v0.30.0 Download
Mac-v0.30.0 Download
`,"release"]},{title:"0.32.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.32.0.html",pathLocale:"/",extraFields:["0.32.0",`
Release Notes

Support LVGL v9
Support global widget search
Other fixes and improvements

Windows-v0.32.0 Download
Mac-v0.32.0 Download
`,"release"]},{title:"0.33.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.33.0.html",pathLocale:"/",extraFields:["0.33.0",`
Release Notes

Add full screen mode to maximize canvas edit area
Add QR code widget
Re-design toolbar
Other fixes and improvements

Windows-v0.33.0 Download
Mac-v0.33.0 Download
`,"release"]},{title:"0.33.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.33.1.html",pathLocale:"/",extraFields:["0.33.1",`Release Notes

Fix: image display error under 16bit color depth
Fix: widget layers changed when dragging into container
Fix: widget background color mighted be changed when some other widget dragged into container and overlapped
Fix: screen background cannot be changed
Other fixes and optimizations

Windows-v0.33.1 Download
Mac-v0.33.1 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.34.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.34.0.html",pathLocale:"/",extraFields:["0.34.0",`Release Notes

Add new widget: Tabview
Add new widget: Meter
Add new widget: Line
Add new widget: Chart
Add search and enable resize for WidgetBar
Re-design StatusBar and add message box for warning and error messages
Attributes take effect only when user &quot;Enter&quot; or &quot;Blur&quot; of input
Add &quot;toggle&quot; for Button
Fix: style state change of widget
Fix: undo &amp; redo issue for some operations
Fix: long_mode for Button, Label and Imgbtn
Fix: UI issue of Image/Bar/Slider/Imgbtn/Switch/Arc
Other fixes and optimizations

Windows-v0.34.0 Download
Mac-v0.34.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.35.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.35.0.html",pathLocale:"/",extraFields:["0.35.0",`Release Notes

Add new widget: Spinner
Support gradient color for background
Support color picker
Support image for Qrcode
Fix Tabview issue
Fix NavigateBar code generation issue
Other fixes and improvements

Windows-v0.35.0 Download
Mac-v0.35.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.36.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]},{level:2,title:"Video Demo",slug:"video-demo",link:"#video-demo",children:[]}],path:"/release/release-v0.36.0.html",pathLocale:"/",extraFields:["0.36.0",`Release Notes

Add new widget: Led
Add new widget: Table
Support canvas zooming by mouse wheel
Support canvas moving by mouse
Support canvas reset by Zoom button
Improve screens preview thumbnails
Other fixes and improvements

Video Demo

Windows-v0.36.0
Mac-v0.36.0
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"LVGL设计大师",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[{level:3,title:"核心能力",slug:"核心能力",link:"#核心能力",children:[]}]},{level:2,title:"联系我们",slug:"联系我们",link:"#联系我们",children:[]}],path:"/zh/",pathLocale:"/zh/",extraFields:["LVGL设计大师",`
  

概述
anyui 是一个专为LVGL（轻量级多功能图形库）设计的综合性可视化开发环境。它为开发人员和嵌入式系统工程师提供了无需手动编码即可设计、原型制作和生成生产就绪用户界面的工具。
核心能力

高效设计: 使用直观工具快速创建复杂UI
自动化资源管理: 智能处理图像、字体和多媒体资源
高级组件架构: 使用高阶组件构建复杂界面
一键生成: 单次操作导出代码并运行模拟
简化工作流: 加速从设计到部署的开发过程

开始使用 anyui 来简化您的嵌入式UI开发流程。
联系我们

  
    
    合作咨询
  
  
    
    微信交流群
  
  
    
    QQ交流群
  

`]},{title:"快速开始",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"项目创建",slug:"项目创建",link:"#项目创建",children:[]},{level:2,title:"设计环境布局",slug:"设计环境布局",link:"#设计环境布局",children:[]},{level:2,title:"设计工作流程",slug:"设计工作流程",link:"#设计工作流程",children:[]},{level:2,title:"代码生成",slug:"代码生成",link:"#代码生成",children:[]},{level:2,title:"模拟",slug:"模拟",link:"#模拟",children:[]},{level:2,title:"项目持久化",slug:"项目持久化",link:"#项目持久化",children:[]},{level:2,title:"后续步骤",slug:"后续步骤",link:"#后续步骤",children:[]}],path:"/zh/get-started.html",pathLocale:"/zh/",extraFields:["快速开始",`本指南提供简明的说明，帮助您快速开始使用anyui进行LVGL UI开发。
安装
有关详细的安装说明，请参考安装指南。
项目创建
启动应用程序后，点击&quot;+&quot;按钮开始使用创建向导配置项目设置来创建新项目：

使用以下参数配置您的项目：

选择目标平台规格，模拟器



从预定义模板中选择或初始化空白项目，空模板



分配唯一的项目名称
配置颜色深度以匹配您的显示硬件功能
根据目标显示规格设置屏幕尺寸
选择LVGL基线版本


设计环境布局
进入项目编辑器后，界面包含以下元素：

顶部菜单栏
左侧边栏
菜单下方的工具栏
右侧属性面板
底部状态栏
中央设计画布
停靠在画布旁边的组件栏


设计工作流程
通过从组件库中拖放组件、在画布上排列组件并编辑其属性来开始您的UI设计。

开发环境提供：

组件库：用于拖放操作的可用UI组件库
设计画布：UI布局和设计的主要工作区
属性检查器：所选组件属性的配置面板
组件层次结构：当前UI组件结构的树状视图

代码生成
完成设计后，通过点击工具栏中的&quot;生成代码&quot;按钮为您的项目生成代码。

点击&quot;生成代码&quot;为您的项目生成代码，然后切换到&quot;代码&quot;选项卡查看生成的代码。


模拟
通过点击&quot;模拟&quot;按钮启动本地模拟来预览您的设计。

项目持久化
所有设计工作在您的会话期间都保存在内存中。保存您的项目以持久存储您的工作供将来编辑。
后续步骤

文档 - 组件和高级功能的综合文档
高阶组件 - 高级UI模式和复合组件
资源管理 - 资源管道和优化策略
多屏幕应用程序 - 复杂的应用程序架构模式

对于技术问题和故障排除，请参考常见问题部分或通过官方渠道联系技术支持。
`]},{title:"Introduction",headers:[{level:2,title:"What is a Higher Order Component (HoC)?",slug:"what-is-a-higher-order-component-hoc",link:"#what-is-a-higher-order-component-hoc",children:[{level:3,title:"Capabilities",slug:"capabilities",link:"#capabilities",children:[]},{level:3,title:"Limitations",slug:"limitations",link:"#limitations",children:[]}]},{level:2,title:"Using Higher Order Components",slug:"using-higher-order-components",link:"#using-higher-order-components",children:[]}],path:"/guide/hoc/0_intro.html",pathLocale:"/",extraFields:["Introduction",`What is a Higher Order Component (HoC)?
A Higher Order Component is a composite component that encapsulates multiple components with predefined behaviors for self-managed UI state control.
Capabilities
HoC components offer the following functionality:

Selection, duplication, deletion, dragging, and movement as a unified entity
Visibility toggling
Visual customization through editing
Predefined behavior management for UI states, such as StateButton which automatically synchronizes image and label updates based on state changes, allowing developers to focus on business logic

Limitations
HoC components have the following restrictions:

Direct resizing is not supported; modifications require changes to wrapped components
Addition, removal, or reordering of encapsulated components is prohibited
Behavioral modification of the HoC is not permitted

Using Higher Order Components
To utilize HoC components:

Expand the WidgetBar to reveal the HoC section:




Drag and drop the desired HoC from the WidgetBar to the screen
Use the HoC as you would a standard component

`]},{title:"State Button",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Attributes",slug:"attributes",link:"#attributes",children:[]}]},{level:2,title:"State Button Configuration",slug:"state-button-configuration",link:"#state-button-configuration",children:[]}],path:"/guide/hoc/1_statebtn.html",pathLocale:"/",extraFields:["State Button",`Introduction
The State Button is a Higher Order Component that provides multi-state functionality for button-like interactions.
A common requirement involves buttons with multiple states that cycle upon user interaction. For example, an air conditioner control might cycle through volume settings: Low → Medium → High → Auto → Low → ... Each state requires distinct visual representations. Standard LVGL components such as Button or Image Button cannot achieve this behavior without extensive custom code development.
The State Button addresses this limitation by enabling configuration of multiple states, with each state supporting distinct images and labels. As the state transitions, the configured visual elements update automatically.
Component Structure
The State Button encapsulates the following components:

Container (x1): Provides the background for the HoC
Images (x3): Display images for each state
Labels (x3): Display labels for each state
Button (x1): Handles user interactions with transparent styling to ensure only images, labels, and background are visible

Attributes
The State Button provides the following configurable attributes:
States
Configure the number of states for the HoC, with each state supporting:

Up to 3 configurable images
Up to 3 configurable labels

Current State
Represents the active state of the HoC. This value can be modified to observe visual changes.
State Button Configuration
By default, the State Button displays one image and one label. To display additional images and labels, right-click the HoC and select Edit to access the HoC editor for configuration modifications.
The default State Button configuration appears as follows:

The default settings are displayed as:

Layout adjustments can be made through the HoC editor, where encapsulated components can be repositioned similar to standard components.
Components that are not required can be hidden. Conversely, default hidden components can be unhidden to enable additional images and labels.
Hidden components are excluded from code generation and build processes, effectively treating them as non-existent.
A fully configured State Button with all components visible appears as:

The corresponding settings are displayed as:

For alternative styling such as a square shape with rounded corners, right-click the component and select Edit to modify the appearance:

While this example may not represent optimal aesthetics, users can customize the design according to their preferences.
After creating a customized State Button, right-click to save it as a Template Component for reuse throughout the project.
`]},{title:"Label Slider",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Attributes",slug:"attributes",link:"#attributes",children:[]}]},{level:2,title:"Slider Label",slug:"slider-label",link:"#slider-label",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/guide/hoc/2_labelslider.html",pathLocale:"/",extraFields:["Label Slider",`Introduction
The Label Slider is a Higher Order Component that extends slider functionality with customizable labels and images.
Using an air conditioner control as an example, the Label Slider provides an elegant solution for volume adjustment. As users drag the slider, the volume level changes accordingly while a highlighted label indicates the current position. Visual indicators can be implemented to represent volume intensity. This component addresses common requirements for intuitive slider-based controls.
Component Structure
The Label Slider encapsulates the following components:

Container (x1): Provides the background for the HoC
Images (x3): Display images for each state
Labels (x3): Display labels for each state
Slider (x1): Handles user interaction

Attributes
The Label Slider provides the following configurable attributes:
States
Configure the number of states for the HoC, with each state supporting:

Up to 3 configurable images
Up to 3 configurable labels

Current State
Represents the active state of the HoC. This value can be modified to observe visual changes.
Slider Label
While up to 3 labels can be configured, one label serves as the slider label with semi-configurable positioning. This label automatically aligns with the slider's current tick position. For vertical sliders, the vertical position is automatically calculated, and for horizontal sliders, the horizontal position is automatically calculated. Users can only adjust the distance between the label and the slider.
Configuration
By default, the Label Slider displays two images and slider labels. To display additional images and labels, right-click the HoC and select Edit to access the HoC editor for configuration modifications.
The default Label Slider configuration appears as follows:

The corresponding settings are displayed as:

To customize the layout of images and labels, right-click and modify them using the same approach as with the State Button.
A fully configured Label Slider with all components visible appears as:

The corresponding settings are displayed as:

`]},{title:"Value Slider",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Properties",slug:"properties",link:"#properties",children:[]}]},{level:2,title:"Slider Label",slug:"slider-label",link:"#slider-label",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/guide/hoc/3_valueslider.html",pathLocale:"/",extraFields:["Value Slider",`Introduction
The Value Slider is a Higher Order Component that extends slider functionality with customizable labels and images. Similar to the Label Slider, it differs by displaying only a single label that shows the current value and follows the slider's tick, rather than displaying a separate label for each tick position.
Component Structure
The Value Slider encapsulates the following components:

Container (x1): Provides the background for the HoC
Images (x3): Display images for each state
Labels (x3): Display labels for each state
Slider (x1): Handles user interaction

Properties
The Value Slider provides the following configurable properties:
States
Configure the number of states for the HoC, with each state supporting:

Up to 3 configurable images
Up to 3 configurable labels

Current State
Represents the active state of the HoC. This value can be modified to observe visual changes.
Slider Label
Similar to the Label Slider, the Value Slider features a Slider Label positioned adjacent to the slider. The label position is automatically calculated to align with the slider's current tick, making position configuration unavailable.
Configuration
By default, the Value Slider displays two images and a slider label. To display additional images and labels, right-click the HoC and select Edit to access the HoC editor for configuration modifications.
The Value Slider's appearance and settings are similar to the Label Slider.
`]},{title:"Check Group & Radio Group",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Properties",slug:"properties",link:"#properties",children:[]}]},{level:2,title:"Checkbox Image & Label",slug:"checkbox-image-label",link:"#checkbox-image-label",children:[{level:3,title:"Image",slug:"image",link:"#image",children:[]},{level:3,title:"Label",slug:"label",link:"#label",children:[]}]},{level:2,title:"Video Demonstration",slug:"video-demonstration",link:"#video-demonstration",children:[{level:3,title:"3 Minutes to Create a Complex Checkbox Group - Case 1",slug:"_3-minutes-to-create-a-complex-checkbox-group-case-1",link:"#_3-minutes-to-create-a-complex-checkbox-group-case-1",children:[]},{level:3,title:"3 Minutes to Create a Complex Checkbox Group - Case 2",slug:"_3-minutes-to-create-a-complex-checkbox-group-case-2",link:"#_3-minutes-to-create-a-complex-checkbox-group-case-2",children:[]}]}],path:"/guide/hoc/4_checkgroup.html",pathLocale:"/",extraFields:["Check Group & Radio Group",`Introduction
The Check Group is a Higher Order Component that provides checkbox and radio group functionality with self-managed state control. This component eliminates the need for custom code to handle UI states such as tracking checked options.
Component Structure
The Check Group encapsulates the following components:

Container (x1): Configures the background for the HoC
Checkbox image (x1): Configures images for checked and unchecked states
Images (x2): Configure images for the options
Checkbox label (x1): Configures text for checked and unchecked states, allowing custom fonts or colors for checked options
Labels (x2): Configures text for the options

Properties
The Check Group provides the following configurable properties:
Options
Configure the number of options for the HoC, with each option supporting:

Up to 3 configurable images
Up to 3 configurable labels

Current Selection
Defines the initial state of the HoC.
Direction
Configures the layout direction as either horizontal or vertical.
Multiple Selection Mode
Determines whether multiple selections are allowed:

Enabled: Checkbox group behavior
Disabled: Radio group behavior

Interval
Configures the spacing between options.
Checkbox Image &amp; Label
Dedicated images and labels are provided for checked and unchecked states.
Image
Configure the image for the checked state. If not configured, the component will use a default image or NULL if no default is specified.
When no default image is configured, it typically indicates the image is not needed and should be hidden.
Label
Configure text styling for checked and unchecked states, such as text color and font when an option is selected. If not configured, the component will use the default label style.
Video Demonstration
3 Minutes to Create a Complex Checkbox Group - Case 1

3 Minutes to Create a Complex Checkbox Group - Case 2

`]},{title:"Drawer",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Open/Close State",slug:"open-close-state",link:"#open-close-state",children:[]},{level:3,title:"Animation Control",slug:"animation-control",link:"#animation-control",children:[]},{level:3,title:"Positioning",slug:"positioning",link:"#positioning",children:[]},{level:3,title:"Event Handling",slug:"event-handling",link:"#event-handling",children:[]}]}],path:"/guide/hoc/5_drawer.html",pathLocale:"/",extraFields:["Drawer",`Introduction
The Drawer is a Higher Order Component that provides a collapsible container for displaying and hiding content. A typical use case involves implementing navigation menus.
The Drawer functions as a container component, allowing standard drag-and-drop operations for adding child components.
The Drawer component offers the following advanced features:
Open/Close State
The component supports two states:

Open: Content is visible
Closed: Content is hidden

Animation Control
Transition animations can be configured with customizable duration parameters for both opening and closing actions.
Positioning
The Drawer can be positioned on any of the four screen edges:

Left
Right
Top
Bottom

Event Handling
A built-in event mechanism enables programmatic control of the drawer's open state.
Refer to Communication Command &amp; Event for detailed implementation guidelines.
`]},{title:"StatusBar",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]},{level:2,title:"Communication Commands",slug:"communication-commands",link:"#communication-commands",children:[]}],path:"/guide/hoc/6_statusbar.html",pathLocale:"/",extraFields:["StatusBar",`Introduction
The StatusBar is a Higher Order Component that provides a status display area for text elements such as current time or icon indicators such as WiFi and battery status.
Usage
Right-click on the StatusBar component to configure events for text and icon elements. The default configuration includes:

A label configured to receive time updates
An icon configured to receive battery status updates
An icon configured to receive Bluetooth status updates

Refer to Communication Command and Event for detailed configuration instructions.
Communication Commands
The StatusBar supports commands to initialize icon states during screen setup.
Refer to Communication Command and Event for comprehensive implementation details.
`]},{title:"NavigateBar",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]}],path:"/guide/hoc/7_navigatebar.html",pathLocale:"/",extraFields:["NavigateBar",`Introduction
The NavigateBar is a Higher Order Component that is part of the Screen Management system, providing navigation functionality to return to the previous screen.
Screen Management must be enabled to utilize the NavigateBar component. When disabled, the component will not be visible in the WidgetBar.
If Screen Management is enabled and the NavigateBar is implemented in any screens, subsequently disabling Screen Management will render the NavigateBar non-functional.
Refer to Screen Management for comprehensive configuration details.
`]},{title:"Higher Order Components",headers:[{level:2,title:"Architecture Overview",slug:"architecture-overview",link:"#architecture-overview",children:[]},{level:2,title:"Component Catalog",slug:"component-catalog",link:"#component-catalog",children:[{level:3,title:"Interactive Control Components",slug:"interactive-control-components",link:"#interactive-control-components",children:[]},{level:3,title:"Input and Selection Components",slug:"input-and-selection-components",link:"#input-and-selection-components",children:[]},{level:3,title:"Navigation and Layout Components",slug:"navigation-and-layout-components",link:"#navigation-and-layout-components",children:[]}]},{level:2,title:"Implementation Guidelines",slug:"implementation-guidelines",link:"#implementation-guidelines",children:[]},{level:2,title:"Integration Workflow",slug:"integration-workflow",link:"#integration-workflow",children:[]},{level:2,title:"Implementation Best Practices",slug:"implementation-best-practices",link:"#implementation-best-practices",children:[]}],path:"/guide/hoc/",pathLocale:"/",extraFields:["Higher Order Components",`Higher Order Components (HoC)
Higher Order Components represent sophisticated composite architectures that encapsulate multiple LVGL components with predefined behavioral patterns and interactions. These components provide engineered solutions for common UI patterns while maintaining configurability and extensibility.
Architecture Overview
HoCs implement abstraction layers over basic LVGL components, providing:

Encapsulated Behavior: Complex interaction logic handled through internal state management
Consistent Interface: Standardized appearance and behavior patterns
Development Efficiency: Reduced implementation time for standard UI patterns
Configuration Flexibility: Comprehensive customization options while maintaining architectural integrity

Component Catalog
Interactive Control Components

State Button - Multi-state button implementation with visual feedback mechanisms
Label Slider - Slider component with integrated value display functionality
Value Slider - Numeric input component with slider control interface

Input and Selection Components

Check Group - Grouped checkbox and radio button control systems

Navigation and Layout Components

Drawer Component - Slide-out navigation panel implementation
Status Bar - System status display component architecture
Navigation Bar - Primary navigation interface component

Implementation Guidelines
Higher Order Components are recommended for the following use cases:

Standard Interface Patterns: Implementation of established UI paradigms such as navigation systems
Complex State Management: Multi-step user interactions requiring sophisticated state handling
Design System Consistency: Maintaining uniform design patterns across application modules
Rapid Development: Accelerated development cycles for standard interface components

Integration Workflow

Identify appropriate HoC components within the component palette
Deploy components to the design canvas using drag-and-drop operations
Configure component parameters through the properties inspector
Apply custom styling to align with application design requirements

Each HoC includes comprehensive technical documentation covering implementation examples, parameter specifications, and customization procedures.
Implementation Best Practices

Component Selection: Choose HoCs that precisely match functional requirements and use cases
Configuration Strategy: Utilize customization parameters while preserving usability and accessibility
Integration Testing: Validate HoC behavior within the target application context and user workflows
Performance Optimization: Monitor resource utilization and rendering performance for complex HoC implementations

For detailed implementation guidance, refer to the HoC Technical Specifications covering architecture patterns and customization procedures.
`]},{title:"安装",headers:[{level:2,title:"Windows 10+",slug:"windows-10",link:"#windows-10",children:[]},{level:2,title:"Mac (x86)",slug:"mac-x86",link:"#mac-x86",children:[]},{level:2,title:"Linux",slug:"linux",link:"#linux",children:[]}],path:"/zh/guide/0_installation.html",pathLocale:"/zh/",extraFields:["安装",`Windows 10+
anyui应用程序应安装在安装向导指定的默认路径下，该路径位于C:驱动器下。或者，用户可以为anyui创建自定义文件夹，但也必须位于C:驱动器下。

注意
由于anyui实施的安全模型，应用程序只能访问特定文件夹。在Windows系统上，C:驱动器是anyui可以安装的唯一位置。
此限制可能会在未来的版本中解决，但目前anyui必须安装在C:驱动器上。


注意
由于权限不足，安装可能会失败。在这种情况下，请以管理员权限执行安装向导。


注意
anyui需要WebView2运行时，该运行时通常预装在Windows 10+系统上。但是，早期的Windows 10版本可能需要手动安装。
请参考WebView2运行时安装获取详细的安装说明。

Mac (x86)
通过双击镜像文件并将应用程序拖拽到Applications文件夹来安装应用程序。

注意
模拟器需要SDL2，您的系统上可能未安装。使用以下终端命令安装SDL2：
brew install sdl2


Linux
Linux版本目前正在开发中。敬请期待。

相关信息
对于需要Linux支持的企业组织，请与我们联系。

`]},{title:"代码移植",headers:[{level:2,title:"概要",slug:"概要",link:"#概要",children:[]},{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"移植过程",slug:"移植过程",link:"#移植过程",children:[{level:3,title:"UI代码",slug:"ui代码",link:"#ui代码",children:[]},{level:3,title:"SDK",slug:"sdk",link:"#sdk",children:[]},{level:3,title:"虚拟代码",slug:"虚拟代码",link:"#虚拟代码",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]}],path:"/zh/guide/100_transplant.html",pathLocale:"/zh/",extraFields:["代码移植",`概要
要将您的anyui项目移植到目标设备：

将generated代码复制到您的项目并调用setupUI()初始化UI
根据需要将SDK代码复制到您的项目
根据需要将虚拟实现替换为设备特定代码

概述
虽然anyui主要专注于UI设计，但生成的UI代码应保持独立于底层硬件和开发工具（如Keil）。
此外，anyui提供了一个SDK，可用于屏幕管理和硬件通信的扩展。
移植过程
UI代码
所有UI代码都在{root}/generated目录中生成，包括屏幕实现和转换的资产（图像、字体、Lottie）。
此代码是自动生成的，不应手动修改。
SDK
SDK实现在{root}/sdk目录中，为屏幕管理和硬件通信提供实用程序。
SDK可以扩展以满足特定需求。

注意
SDK代码可能在未来的版本中更新以提供更多功能。任何自定义修改在更新期间都需要解决冲突。

虚拟代码
虚拟实现在{root}/simulator/dummy.c中，提供必须替换为设备特定实现的占位符功能。
虚拟代码包括：

处理来自UI的通信命令的处理程序
用于外部存储的文件系统驱动实现（当使用外部图像文件作为源时）
用于时间和电池状态更新的定时器实现（仅用于演示目的；根据需要替换为实际实现或删除）

lv_conf.h
维护设备特定的lv_conf.h文件副本，至少包含以下配置：
/*
 * 必需的配置
*/
#define LV_HOR_RES_MAX (?) // 水平分辨率
#define LV_VER_RES_MAX (?) // 垂直分辨率
#define LV_COLOR_DEPTH 16
/*'lv_mem_alloc()'可用的内存大小（&gt;= 2kB），以字节为单位*/
#define LV_MEM_SIZE (?) // 内存大小（字节）

/*
 * 根据需要的可选配置
 */
#define LV_USE_LOG 1 // 启用日志

#define LV_USE_FS_STDIO 1 // 启用文件系统
#define LV_USE_PNG 1 // 启用PNG解码器
#define LV_USE_JPEG 1 // 启用JPEG解码器
#define LV_USE_BMP 1 // 启用BMP解码器
#define LV_USE_GIF 1 // 启用GIF解码器

#define LV_USE_BTN 1 // 启用按钮
#define LV_USE_IMG 1 // 启用图像
#define LV_USE_LABEL 1 // 启用标签
// 根据需要的其他组件

/*
 * 设备特定的排除
 */;
//#define USE_SIMULATOR

`]},{title:"使用外部图像文件作为源",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"启用外部图像支持",slug:"启用外部图像支持",link:"#启用外部图像支持",children:[]},{level:3,title:"文件系统驱动程序实现",slug:"文件系统驱动程序实现",link:"#文件系统驱动程序实现",children:[]}]},{level:2,title:"重要注意事项",slug:"重要注意事项",link:"#重要注意事项",children:[]}],path:"/zh/guide/10_image_fs.html",pathLocale:"/zh/",extraFields:["使用外部图像文件作为源",`概述
图像可以作为变量嵌入到应用程序中。除此之外，它们还可以从外部存储中加载。这允许更大的灵活性，例如在不重新构建应用程序的情况下更新图像。
从v0.28.0开始，已实现外部图像文件支持。
配置
启用外部图像支持

导航到项目 → 项目配置...
启用使用外部图像文件
配置路径前缀
在lv_conf.h中定义解码器支持：

#define LV_USE_FS_STDIO 1 // 启用文件系统支持

#define LV_USE_PNG 1      // 启用PNG解码器
#define LV_USE_JPEG 1     // 启用JPEG解码器
#define LV_USE_BMP 1      // 启用BMP解码器

文件系统驱动程序实现
实现并注册文件系统驱动程序用于文件I/O操作。
为模拟器提供了参考实现，可以针对自定义实现进行调整：
/* LVGL的文件系统回调 */
static void *fs_open(lv_fs_drv_t *drv, const char *path, lv_fs_mode_t mode) {
  LV_UNUSED(drv);
  const char *flags = (mode == LV_FS_MODE_WR) ? &quot;wb&quot; : &quot;rb&quot;;
  return fopen(path, flags);
}

static lv_fs_res_t fs_close(lv_fs_drv_t *drv, void *file) {
  LV_UNUSED(drv);
  fclose((FILE *)file);
  return LV_FS_RES_OK;
}

static lv_fs_res_t fs_read(lv_fs_drv_t *drv, void *file, void *buf,
                           uint32_t btr, uint32_t *br) {
  LV_UNUSED(drv);
  *br = fread(buf, 1, btr, (FILE *)file);
  return (*br &gt; 0) ? LV_FS_RES_OK : LV_FS_RES_UNKNOWN;
}

static lv_fs_res_t fs_seek(lv_fs_drv_t *drv, void *file, uint32_t pos,
                           lv_fs_whence_t whence) {
  LV_UNUSED(drv);
  int origin = (whence == LV_FS_SEEK_SET)   ? SEEK_SET
               : (whence == LV_FS_SEEK_CUR) ? SEEK_CUR
                                            : SEEK_END;
  fseek((FILE *)file, pos, origin);
  return LV_FS_RES_OK;
}

static lv_fs_res_t fs_tell(lv_fs_drv_t *drv, void *file, uint32_t *pos) {
  LV_UNUSED(drv);
  *pos = ftell((FILE *)file);
  return LV_FS_RES_OK;
}

/* 注册文件系统 */
void register_fs() {
  static lv_fs_drv_t fs_drv;
  lv_fs_drv_init(&amp;fs_drv);
  fs_drv.letter = 'S'; // 驱动器字母
  fs_drv.open_cb = fs_open;
  fs_drv.close_cb = fs_close;
  fs_drv.read_cb = fs_read;
  fs_drv.seek_cb = fs_seek;
  fs_drv.tell_cb = fs_tell;
  lv_fs_drv_register(&amp;fs_drv);
}

通过在main()中调用register_fs()来注册文件系统：
int main() {
  ...
  register_fs();
  ...
}

通过在simulator文件夹中的lv_conf.h中定义USE_SIMULATOR来启用模拟：
#define USE_SIMULATOR

重要注意事项

相关信息
如果由于内存分配问题导致图像加载失败，请增加lv_conf.h中的LV_MEM_SIZE：
#  define LV_MEM_SIZE    (? * 1024U * 1024U)          /*[bytes]*/



注意

所有图像必须位于目标设备上配置的路径前缀目录中
图像组件尺寸必须与源图像尺寸匹配，因为原始图像将不进行缩放显示


`]},{title:"GIF动画图像",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"启用GIF支持",slug:"启用gif支持",link:"#启用gif支持",children:[]}]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/zh/guide/11_gif_animated.html",pathLocale:"/zh/",extraFields:["GIF动画图像",`概述
从v0.28.0开始，已实现动画GIF图像支持。
配置
启用GIF支持
要启用GIF解码器支持，请在lv_conf.h中定义以下内容：
#define LV_USE_GIF 1      // 启用GIF解码器

使用
GIF图像可以作为嵌入变量或外部文件使用。有关外部文件实现，请参考使用外部图像文件作为源。
`]},{title:"Lottie动画",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/zh/guide/12_lottie.html",pathLocale:"/zh/",extraFields:["Lottie动画",`LVGL v8
LVGL v8不原生支持Lottie动画。支持通过第三方库提供。有关实现细节，请参考rlottie集成。
rlottie库已集成到anyui中，通过anyui环境启用代码生成和Lottie动画模拟。但是，目标设备部署仍需要rlottie集成。
LVGL v9
从v9开始，Lottie组件使用集成到LVGL中的ThorVG库。要启用Lottie动画，必须启用LV_USE_THORVG_INTERNAL（使用内置ThorVG）或LV_USE_THORVG_EXTERNAL（外部链接），从而允许在LVGL v9中直接使用Lottie动画。
anyui使用内置ThorVG进行Lottie实现，并能在模拟器中模拟Lottie动画。
有关综合详情，请参考LVGL v9的Lottie。
`]},{title:"介绍",headers:[{level:2,title:"组件",slug:"组件",link:"#组件",children:[{level:3,title:"基础组件",slug:"基础组件",link:"#基础组件",children:[]},{level:3,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:3,title:"模板组件",slug:"模板组件",link:"#模板组件",children:[]},{level:3,title:"全局组件",slug:"全局组件",link:"#全局组件",children:[]}]},{level:2,title:"动作",slug:"动作",link:"#动作",children:[]},{level:2,title:"命令",slug:"命令",link:"#命令",children:[]},{level:2,title:"事件",slug:"事件",link:"#事件",children:[]}],path:"/zh/guide/1_intro.html",pathLocale:"/zh/",extraFields:["介绍",`组件
组件是使用anyui开发的应用程序的基本构建块。
要有效利用anyui的功能，理解以下组件概念对于UI设计和实现至关重要。
基础组件
基础组件是LVGL直接提供的原生UI元素。由于anyui是生成LVGL代码的图形设计工具，它继承了包括属性、样式和事件在内的核心LVGL概念。
请参考LVGL文档获取有关原生组件的综合信息。
高阶组件
高阶组件(HoCs)是anyui扩展的复合组件。基于基础组件构建，HoCs封装了预定义的行为和样式模式。这些组件提供了增强的灵活性，并在实现复杂用户界面时显著减少开发时间。
请参见高阶组件获取实现细节和使用指南。
模板组件
模板组件是用户定义的自定义组件。用户可以将现有组件修改后的属性和样式保存为可重用的模板，从而在整个项目的不同部分启用一致的UI元素。
请参考模板组件获取详细的使用说明。
全局组件
全局组件提供项目范围的组件共享功能。对全局组件属性或样式的修改会自动传播到整个项目中该组件的所有实例。
一个常见的用例是在多个应用程序视图中实现一致的状态栏。
动作
动作代表由用户交互触发的LVGL事件，也称为用户事件。示例包括按钮按下、滑块调整和触摸手势。
动作可以配置为动态修改组件属性。例如，按钮点击可以触发背景颜色变化以提供视觉反馈。
命令
命令是从上层(应用程序/UI)传输到下层(SDK/硬件)的消息。典型的命令示例包括蓝牙连接请求、WiFi配置和时间同步操作。
anyui扩展了命令用于上层和下层之间的通信。
请参考命令获取综合命令文档。
事件
事件是源自下层(SDK/硬件)指向到上层(应用程序/UI)的异步通知，也称为系统事件。常见的事件类型包括电池电量变化、传感器数据更新和网络状态通知。
anyui扩展了事件用于上层和下层之间的通信。
请参考事件获取综合事件文档。
`]},{title:"设计",headers:[{level:2,title:"创建组件",slug:"创建组件",link:"#创建组件",children:[]},{level:2,title:"选择组件",slug:"选择组件",link:"#选择组件",children:[]},{level:2,title:"多选组件",slug:"多选组件",link:"#多选组件",children:[]},{level:2,title:"移动组件",slug:"移动组件",link:"#移动组件",children:[]},{level:2,title:"调整组件大小",slug:"调整组件大小",link:"#调整组件大小",children:[{level:3,title:"比例调整大小",slug:"比例调整大小",link:"#比例调整大小",children:[]}]},{level:2,title:"复制组件",slug:"复制组件",link:"#复制组件",children:[]},{level:2,title:"删除组件",slug:"删除组件",link:"#删除组件",children:[]},{level:2,title:"对齐组件",slug:"对齐组件",link:"#对齐组件",children:[]},{level:2,title:"缩放控制",slug:"缩放控制",link:"#缩放控制",children:[]},{level:2,title:"移动画布",slug:"移动画布",link:"#移动画布",children:[]}],path:"/zh/guide/2_layout.html",pathLocale:"/zh/",extraFields:["设计",`anyui提供了直观的可视化设计环境，用于创建复杂的用户界面。该平台提供拖放功能和精确的组件布局控制，实现高效的UI开发。
创建组件
通过从组件库添加组件来初始化界面。将所需组件拖拽到画布上，开始根据设计规范进行原型设计和构建用户界面。
选择组件
点击任何组件以选择它。选择后，组件的属性、样式和事件处理程序在侧边栏中变为可访问，允许对所有设计方面进行详细定制。
多选组件
要同时处理多个组件，请在点击每个所需组件时按住Shift键。选定的组件通过橙色高亮显示进行视觉区分，以便清楚识别。

移动组件
通过点击和拖拽组件在画布上重新定位。在移动过程中，对齐辅助线会自动出现在相邻组件和画布边界的边缘或中心附近，确保精确的组件放置。

调整组件大小
通过点击和拖拽组件的边缘或角落来调整组件尺寸。对齐辅助线有助于在整个设计过程中保持一致的尺寸和定位。
比例调整大小
通过在拖拽时按住Ctrl/Command键来保持组件的宽高比。这确保了比例缩放而不会失真。
复制组件
通过选择源组件并在拖拽到所需位置时按住Option/Alt键来高效创建多个相似组件。此功能在创建一致的UI元素（如菜单项、按钮或重复的设计模式）时特别有用。
删除组件
通过选择组件并按Delete键从设计中删除组件，或通过上下文菜单访问&quot;删除&quot;选项。
对齐组件
选择多个组件后，使用位于屏幕区域上方的对齐面板中的对齐工具。这些工具提供精确的对齐控制，确保一致的间距和定位，以获得专业的外观。

缩放控制
通过滚动鼠标滚轮轻松放大和缩小设计画布，或使用工具栏中提供的缩放控件。
按下缩放重置按钮将画布恢复到100%缩放级别。
移动画布
通过拖拽屏幕区域以外的画布区域来移动画布。
或者：

按住Ctrl/Command键同时滚动鼠标滚轮垂直平移画布
按住Shift键同时滚动鼠标滚轮水平平移画布

当鼠标光标位于屏幕区域内时，默认的拖拽行为启用组件多选。但是，按住空格键会临时切换到画布移动模式，直到释放鼠标按钮。
`]},{title:"资源管理",headers:[{level:2,title:"图像管理",slug:"图像管理",link:"#图像管理",children:[]},{level:2,title:"字体管理",slug:"字体管理",link:"#字体管理",children:[]},{level:2,title:"Lottie动画管理",slug:"lottie动画管理",link:"#lottie动画管理",children:[]}],path:"/zh/guide/3_resource.html",pathLocale:"/zh/",extraFields:["资源管理",`图像管理
资源管理系统支持导入和使用应用程序资产。可以通过资源界面导入图像，然后将其分配给组件属性。

导入图像后，可以通过从资源界面选择图像将其分配给组件属性，anyui将自动加载图像并在组件中显示。
在代码生成阶段，anyui将自动生成图像的相应代码。

注意
用户应确保其对所导入和使用的图像拥有合法的版权授权，并承担由此产生的所有法律责任。

字体管理
可以导入自定义字体以增强应用程序的排版呈现。导入的字体可在组件属性配置中选择。

导入字体后，您可以从组件属性配置中的字体下拉菜单中选择它，字体将应用于组件。
在代码生成阶段，anyui将自动生成字体的相应代码。

注意
用户应确保其对所导入和使用的字体拥有合法的版权授权，并承担由此产生的所有法律责任。

Lottie动画管理
anyui支持导入Lottie动画，并使用Lottie动画来创建动画效果。
导入Lottie动画后，您可以将其分配给组件属性，anyui将自动加载Lottie动画并显示在组件中。
在代码生成阶段，anyui将自动生成Lottie动画的相应代码。

注意
用户应确保其对所导入和使用的Lottie动画拥有合法的版权授权，并承担由此产生的所有法律责任。

`]},{title:"模板组件",headers:[{level:2,title:"保存模板组件",slug:"保存模板组件",link:"#保存模板组件",children:[]},{level:2,title:"修改模板组件",slug:"修改模板组件",link:"#修改模板组件",children:[]}],path:"/zh/guide/4_composite.html",pathLocale:"/zh/",extraFields:["模板组件",`模板组件是用户定义的组件模板。用户可以将修改后的组件属性和样式保存为可重用的模板组件。
模板组件可以封装子组件，允许将整个容器层次结构及其子组件保存为单个模板。
保存模板组件
要创建模板组件，请选择所需组件，右键单击，然后从上下文菜单中选择&quot;保存为模板组件&quot;。

模板组件可以像标准组件一样使用。
修改模板组件
对于现有的模板组件，用户可以通过模板组件设置界面修改名称或删除模板。


注意
模板组件仅保留组件属性和样式，不包括事件处理程序和行为。

`]},{title:"隐藏和锁定",headers:[{level:2,title:"隐藏和显示组件",slug:"隐藏和显示组件",link:"#隐藏和显示组件",children:[{level:3,title:"隐藏组件交互",slug:"隐藏组件交互",link:"#隐藏组件交互",children:[]}]},{level:2,title:"锁定和解锁组件",slug:"锁定和解锁组件",link:"#锁定和解锁组件",children:[]}],path:"/zh/guide/5_hide_and_lock.html",pathLocale:"/zh/",extraFields:["隐藏和锁定",`隐藏和显示组件
组件可见性管理在设计工作流程中有几个目的：

通过临时隐藏其他组件来专注于特定组件
保留部分完成的组件而不显示它们
在调试期间隔离有问题的组件
评估组件保留决策而不进行永久删除

隐藏功能提供了一种非破坏性的方法来临时从视图中移除组件，同时保留其属性和结构以供以后使用。
可以通过多种界面隐藏组件：

在组件树或画布上右键单击组件的上下文菜单
点击组件树中的可见性切换

可以使用相同的交互模式恢复隐藏的组件。

相关信息
从v0.21.0开始，项目保存时会保留组件可见性状态。

隐藏组件交互
隐藏的组件在设计环境中保持有限的功能：
可用操作：

在组件树中悬停条目以在画布上突出显示其位置
在组件树中选择条目以修改其属性和样式


注意
虽然隐藏的组件在组件树中仍然可选择以进行属性修改，但编辑不可见组件并不推荐，因为它可能导致意外的设计不一致。

受限操作：

画布悬停高亮显示和选择
画布上的拖拽选择
与隐藏组件的对齐操作


相关信息
隐藏的组件被排除在代码生成和构建过程之外，在输出中有效地将它们视为不存在。
对于标记为隐藏的屏幕，尽管在编辑器中没有视觉隐藏，但它们不包含在代码生成和构建过程中。

锁定和解锁组件
组件锁定可防止在处理包含众多组件的复杂界面时发生意外修改。
可以使用以下几种方法锁定组件：

点击组件树中的锁定图标
带有&quot;锁定&quot;选项的右键单击上下文菜单
系统菜单导航：编辑 → 锁定

可以使用相应的逆向操作解锁锁定的组件。

相关信息
组件锁定是仅会话状态，在项目重新加载时重置。锁定的组件在项目重新打开时将自动解锁。

`]},{title:"屏幕管理",headers:[{level:2,title:"启用屏幕管理",slug:"启用屏幕管理",link:"#启用屏幕管理",children:[]},{level:2,title:"配置主屏幕",slug:"配置主屏幕",link:"#配置主屏幕",children:[]},{level:2,title:"实现导航",slug:"实现导航",link:"#实现导航",children:[]},{level:2,title:"创建屏幕转换",slug:"创建屏幕转换",link:"#创建屏幕转换",children:[]}],path:"/zh/guide/7_scr_mgmt.html",pathLocale:"/zh/",extraFields:["屏幕管理",`现代应用程序通常由多个屏幕组成，包括一个主屏幕和几个子屏幕。用户从主屏幕导航到子屏幕，然后返回主屏幕。如果没有适当的屏幕管理，将需要手动屏幕切换。
从v0.25.0开始，引入了以下功能来支持屏幕管理：

屏幕管理配置
导航栏组件
主屏幕属性

此功能默认禁用。要启用屏幕管理：
启用屏幕管理
访问项目 → 项目配置 → 屏幕管理

配置主屏幕
主屏幕作为应用程序入口点。
当屏幕被指定为主屏幕时，所有其他屏幕被视为子屏幕。

实现导航
通过展开组件栏并在高阶组件类别中找到新的导航栏组件，将其添加到子屏幕。将其拖放到主屏幕以外的屏幕上。通常，它位于屏幕状态栏下方。
导航栏的返回操作返回到上一个屏幕。

创建屏幕转换
向主屏幕添加一个按钮，并配置点击操作以加载所需的子屏幕，如前所述。
点击按钮后，子屏幕将加载并显示。点击子屏幕上的返回按钮将返回到主屏幕。
`]},{title:"全局组件",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"全局状态栏",slug:"全局状态栏",link:"#全局状态栏",children:[{level:3,title:"实现",slug:"实现",link:"#实现",children:[]}]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[]},{level:2,title:"构建时间估算",slug:"构建时间估算",link:"#构建时间估算",children:[]}],path:"/zh/guide/8_globalcomponents.html",pathLocale:"/zh/",extraFields:["全局组件",`概述
全局组件是在整个应用程序中保持一致外观和行为的可重用组件。对全局组件的修改会自动传播到整个项目中的所有实例。典型实现是在所有屏幕中统一出现的状态栏。
全局状态栏
全局状态栏的功能与高阶组件类别中的状态栏类似。主要区别在于全局状态栏保持项目范围的一致性，任何修改都会自动应用到所有实例。
实现
要实现全局状态栏：

访问屏幕的属性面板
启用全局状态栏选项


视频演示
构建时间估算

`]},{title:"通信命令和事件",headers:[{level:2,title:"通信命令",slug:"通信命令",link:"#通信命令",children:[]},{level:2,title:"通信事件",slug:"通信事件",link:"#通信事件",children:[{level:3,title:"通信事件的状态和操作",slug:"通信事件的状态和操作",link:"#通信事件的状态和操作",children:[]}]},{level:2,title:"默认可用命令和事件",slug:"默认可用命令和事件",link:"#默认可用命令和事件",children:[]}],path:"/zh/guide/9_comm.html",pathLocale:"/zh/",extraFields:["通信命令和事件",`通信命令和事件提供了应用程序层与设备底层硬件层之间交互的机制。
通信命令
通信命令(Comm Commands)代表从上层传输到下层的请求。
用户输入最终转换为指导设备执行特定操作的指令。
例如，当用户点击按钮时，按钮向底层发送请求以指导设备建立WiFi连接。通信命令提供了包装和传输这些请求到底层的机制。
通信命令提供了发送请求的功能，但不包含业务逻辑实现。设备制造商负责实现业务逻辑并确定可用的命令集。
通信事件
通信事件(Comm Events)代表从下层传输到上层的通知。
当下层发生事件时，会发送通知到上层以触发UI更新。
例如，当设备建立WiFi连接时，设备会向上层发送通知以更新UI。通信事件提供了包装和传输这些通知到上层的机制。
通信事件提供了发送通知的功能，但不包含业务逻辑实现。设备制造商负责实现业务逻辑并确定可用的事件集。
通信事件的状态和操作
从UI角度来看，事件通常需要基于特定条件更新标签、图标或其他视觉元素。
对于通信事件，状态和操作配置简化了UI更新。可以根据需要配置状态和相应的操作。
例如：
要配置一个图像组件以接收蓝牙状态事件，并为连接和断开状态显示适当的图标：


右键单击图像组件并为BT状态更改添加通信事件


配置事件状态：

状态：0(BT断开)
操作：为BT断开状态设置图像
状态：1(BT连接)
操作：为BT连接状态设置图像




相关信息
适当的状态代码由您的设备提供商确定。请参考您的设备文档了解可用的状态代码。这些代码由下层业务逻辑定义。

默认可用命令和事件
虽然通信命令和事件是设备特定的，但为常见用例提供了默认实现：


时间更新


蓝牙连接/断开


WiFi连接/断开


电池电量变化

这些代表具有模拟实现的设备命令/事件，必须替换为实际的设备特定实现。



抽屉打开/关闭

这代表UI命令/事件而不是设备事件。



这些命令和事件在项目创建时可用，可直接使用或修改以适应特定的业务逻辑需求。

相关信息
通信命令和事件与设备功能紧密耦合。要获得全面的设备支持，请与您的设备提供商协调以启用内置支持。

`]},{title:"问答",headers:[{level:2,title:"构建和运行",slug:"构建和运行",link:"#构建和运行",children:[{level:3,title:"为什么即使空项目在Windows上也会遇到构建错误？",slug:"为什么即使空项目在windows上也会遇到构建错误",link:"#为什么即使空项目在windows上也会遇到构建错误",children:[]},{level:3,title:"为什么即使在增量模式下构建项目也需要很长时间？",slug:"为什么即使在增量模式下构建项目也需要很长时间",link:"#为什么即使在增量模式下构建项目也需要很长时间",children:[]}]}],path:"/zh/guide/Q_A.html",pathLocale:"/zh/",extraFields:["问答",`构建和运行
为什么即使空项目在Windows上也会遇到构建错误？
请确认：

您已安装了最新版本的anyui
anyui安装在C://驱动器上，因为应用程序的安全模型限制对特定文件夹的访问
项目路径不包含空格( )、反斜杠(\\)或非ASCII字符，中文字符是此类情况的一个常见例子

为什么即使在增量模式下构建项目也需要很长时间？
请确认您已安装最新版本的anyui。构建过程优化在v0.13.0和之后的版本中得到显著增强
`]},{title:"文档",headers:[{level:2,title:"设置",slug:"设置",link:"#设置",children:[]},{level:2,title:"核心概念",slug:"核心概念",link:"#核心概念",children:[]},{level:2,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:2,title:"高级功能",slug:"高级功能",link:"#高级功能",children:[]},{level:2,title:"开发",slug:"开发",link:"#开发",children:[]},{level:2,title:"技术支持",slug:"技术支持",link:"#技术支持",children:[]},{level:2,title:"文档结构",slug:"文档结构",link:"#文档结构",children:[]}],path:"/zh/guide/",pathLocale:"/zh/",extraFields:["文档",`本文档提供了使用anyui可视化开发环境开发LVGL用户界面的综合技术指导。
设置
从环境配置和项目初始化开始。

安装 - 平台特定的安装程序

核心概念
anyui设计方法的基本原理。

介绍 - 理解组件系统框架
设计 - 组件定位、排列策略和设计工具
隐藏和锁定 - 组件可见性和编辑状态管理
资源管理 - 图像、字体和多媒体的资源管理

高阶组件
复杂UI实现的高级组件模式。

状态按钮 - 具有多状态和视觉反馈的按钮
标签滑块 - 带集成值标签的滑块
数值滑块 - 可自定义值显示的滑块
复选框组和单选框组 - 具有互斥关系的相关复选框组
状态栏 - 应用程序状态显示组件
导航栏 - 应用程序导航组件
抽屉 - 用于附加内容的滑动面板

高级功能
复杂应用程序和多媒体集成的专门功能。

模板组件 - 可重用组件模板的创建和管理
全局组件 - 跨屏幕组件共享和同步
屏幕管理 - 复杂应用程序屏幕管理
通信命令和事件 - 组件交互模式和事件处理
使用外部图像文件作为源 - 用于灵活图像管理的外部图像文件支持
GIF动画图像 - 动画GIF集成和优化
Lottie - 基于矢量的动画实现

开发
专业的开发流程和部署策略。

构建模式 - 构建系统配置和优化
代码移植 - 跨平台部署程序

技术支持
故障排除资源和技术援助。

问答 - 常见问题和解决程序


文档结构
本文档遵循从基本概念到高级实现技术的渐进式学习路径。新用户应按顺序学习各部分，而有经验的开发人员可以使用侧边栏导航直接跳转到特定主题。
`]},{title:"构建模式",headers:[{level:2,title:"完整",slug:"完整",link:"#完整",children:[]},{level:2,title:"增量",slug:"增量",link:"#增量",children:[]},{level:2,title:"最小",slug:"最小",link:"#最小",children:[]}],path:"/zh/guide/build_mode.html",pathLocale:"/zh/",extraFields:["构建模式",`构建模式
该平台提供三种针对不同开发场景优化的构建模式：
完整
执行完整的项目重建。执行以下操作：

✓ 清理所有生成的文件
✓ 为屏幕生成源代码
✓ 转换资源（图像/字体/Lottie）
✓ 编译整个项目
✓ 执行项目

当顶级头文件（例如lv_conf.h）已修改时，推荐用于初始构建。
增量
执行增量项目构建。执行以下操作：

✓ 清理生成的文件
✓ 为屏幕生成源代码
✓ 转换资源（图像/字体/Lottie）
✓ 编译自动生成的源文件
✓ 执行项目

此模式适用于大多数开发工作流程，除非顶级头文件（例如lv_conf.h）已修改。
最小
执行最小项目构建。执行以下操作：

✗ 清理生成的文件
✗ 转换资源（图像/字体/Lottie）
✓ 为屏幕生成源代码
✓ 编译自动生成的源文件
✓ 执行项目

当没有资源被修改时，此模式适用，具体来说：

组件的图像引用保持不变
组件的文本内容、字体大小或字体系列保持不变
组件的Lottie引用保持不变


注意
&quot;最小&quot;模式不适用于初始项目构建。

`]},{title:"0.13.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.13.0.html",pathLocale:"/zh/",extraFields:["0.13.0",`版本说明

添加 &quot;关于&quot; 以显示系统信息
优化性能
修复缩放兼容性问题
减少项目的构建时间，包括增量构建和完全构建
改善用户界面 / 用户体验
杂项

Windows-v0.13.0
Mac-v0.13.0
`,"release"]},{title:"0.13.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.13.1.html",pathLocale:"/zh/",extraFields:["0.13.1",`版本说明

修复一些属性编辑器的样式

Windows-v0.13.1
Mac-v0.13.1
`,"release"]},{title:"0.14.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.14.0.html",pathLocale:"/zh/",extraFields:["0.14.0",`版本说明

在创建新项目时支持 &quot;竖屏&quot; 模式
支持侧边栏、代码框、日志框和属性编辑器的面板大小调整
其他改进

Windows-v0.14.0
Mac-v0.14.0
`,"release"]},{title:"0.15.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.15.0.html",pathLocale:"/zh/",extraFields:["0.15.0",`版本说明

支持新版本检查，如果有新版本，在工具栏显示更新图标



其它优化

Windows-v0.15.0
Mac-v0.15.0
`,"release"]},{title:"0.16.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.16.0.html",pathLocale:"/zh/",extraFields:["0.16.0",`版本说明

增加新的分辨率支持：480×320
支持可拖动的控件栏
优化设置对话框，并为控件栏的方向添加配置
优化事件编辑器
优化滑块、下拉列表以及条状控件
优化上下文菜单位置
在菜单中添加 &quot;重命名&quot; 选项
在菜单中重新添加 &quot;保存为自定义控件&quot; 选项
修复 &quot;控件的位置 / 尺寸值可能为非整型类型&quot; 的问题
其它优化

Windows-v0.16.0
Mac-v0.16.0
`,"release"]},{title:"0.17.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.17.0.html",pathLocale:"/zh/",extraFields:["0.17.0",`版本说明

支持新分辨率：720×720、480×480
支持样式刷
支持从各个方向拖选多个组件
支持画布最多放大 5 倍
鼠标悬停时突出显示组件
复制组件时防止名称冲突
禁止按下退格键（Backspace）时默认返回上一步操作
其他改进及问题修复

Windows-v0.17.0
Mac-v0.17.0
`,"release"]},{title:"0.17.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.17.1.html",pathLocale:"/zh/",extraFields:["0.17.1",`版本说明

在项目创建完成后直接打开该项目
在创建新项目时验证项目名称是否已存在
修复创建新项目时的颜色深度问题
修复创建新项目时项目名称无法完全删除的问题

Windows-v0.17.1
Mac-v0.17.1
`,"release"]},{title:"0.18.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.18.0.html",pathLocale:"/zh/",extraFields:["0.18.0",`版本说明

支持图片字体文件批量上传
支持上传图片时对文件名校验
支持对组件名称校验
支持新建项目时对项目名称校验
防止用户创建事件时选择重复的动作+目标
优化创建工程的工具栏
优化项目列表
优化资源管理
修复Windows下Alt+Tab切换窗口时误触发的复制组件操作
修复生成代码的若干问题

Windows-v0.18.0
Mac-v0.18.0
`,"release"]},{title:"0.20.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.20.0.html",pathLocale:"/zh/",extraFields:["0.20.0",`版本说明

添加高阶组件（HoC）

状态按钮：点击时提供多种状态，在不同状态下图像和标签会发生变化
标签滑块：提供一个滑块，每个刻度都有对应的设置，并且当滑块值改变时，多个图像和标签会随之改变
数值滑块：提供一个带有数值的滑块，当数值改变时，多个图像和标签会相应改变


支持高阶组件编辑
检测不存在的图像引用，如果未找到相关图像则突出显示所引用的组件
支持复制和粘贴屏幕，以及修复意外将屏幕粘贴到另一个屏幕的问题
支持 *.otf 字体导入
在组件的属性中添加 类型 和 类别
在组件和屏幕的属性中添加 可见性，并且能够在代码生成、构建及运行时隐藏组件或屏幕
图片属性中区分未选择图像和所选图像未找到这两种情况
修复组件树滚动问题
在代码生成、构建及运行之前删除生成的文件
其他修复和改进

Windows-v0.20.0
Mac-v0.20.0
`,"release"]},{title:"0.21.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.21.0.html",pathLocale:"/zh/",extraFields:["0.21.0",`版本说明

支持 Lottie 动画
增加 Lottie 资源管理
如果项目被保存，组件的隐藏和显示状态能够得以保留
为屏幕列表添加上下文菜单
对于屏幕列表，支持 &quot;仅显示当前项&quot; 和 &quot;显示全部&quot; 功能
即使组件处于隐藏状态，当鼠标悬停组件树上时也支持对该组件进行高亮显示
对字体资源列表项应用字体样式
修复在复制粘贴属性文本内容时意外复制粘贴组件的问题
其他修复和改进

Windows-v0.21.0
Mac-v0.21.0
`,"release"]},{title:"0.22.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.22.0.html",pathLocale:"/zh/",extraFields:["0.22.0",` -->

版本说明

增加新的组件：动画图片（动态图像）和滚动框
增加新的高阶组件：复选框组和单选框组，具备状态自管理能力
当找不到图像、字体、Lottie动画引用时高亮显示对应的屏幕
修复标签滑块（Labelslider）的滑块旋钮位置问题
修复添加 / 删除字体导致数据重新初始化的问题
其他修复及改进

Windows-v0.22.0
Mac-v0.22.0
`,"release"]},{title:"0.25.0",headers:[{level:2,title:"5分钟搭建一个完整的LVGL应用框架",slug:"_5分钟搭建一个完整的lvgl应用框架",link:"#_5分钟搭建一个完整的lvgl应用框架",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.25.0.html",pathLocale:"/zh/",extraFields:["0.25.0",`5分钟搭建一个完整的LVGL应用框架

版本说明

支持屏幕管理，并提供启用/禁用的配置选项
添加新的高阶组件：抽屉（Drawer）、状态栏（StatusBar）、导航栏（NavigateBar）
引入全局组件：全局状态栏，可应用于所有屏幕
支持与底层（硬件）交互的通信命令和事件
支持高阶组件编辑时撤销/重做功能
支持全局组件编辑时撤销/重做功能
创建新项目时支持自定义分辨率
其他修复和改进


相关信息
通信命令与事件与设备强关联，如果你想要使用设备的全部能力，让你的设备供应商与我们联系，我们可为该设备提供内置支持


注意
此版本与旧版本不兼容。因此，如果项目是用旧版本创建的，在使用此版本时会遇到一些问题。
请按照以下中的说明来升级旧项目:


使用新版本（v0.25.0）创建一个新项目。


按相同路径，将以下文件从新项目复制到旧项目中：


generated 文件夹下的 image 文件夹


项目根目录下的 sdk 文件夹


simulator 文件夹下的 dummy.c/dummy.h 文件


simulator 文件夹下的 Makefile 文件
如果你此前修改过本地的 Makefile，就需要再次调整，确保构建过程中包含 sdk 和 dummy.c 文件。





Windows-v0.25.0 Download
Mac-v0.25.0 Download
`,"release"]},{title:"0.26.0",headers:[{level:2,title:"2分钟创建一个圆形表盘带屏幕滑动操作的应用",slug:"_2分钟创建一个圆形表盘带屏幕滑动操作的应用",link:"#_2分钟创建一个圆形表盘带屏幕滑动操作的应用",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.26.0.html",pathLocale:"/zh/",extraFields:["0.26.0",`2分钟创建一个圆形表盘带屏幕滑动操作的应用

版本说明

创建新项目时，支持圆形显示屏
支持圆弧组件
支持屏幕滑动手势
如果显示屏形状是圆形，组件栏隐藏状态栏、导航栏和抽屉
其他修复和改进

Windows-v0.26.0 Download
Mac-v0.26.0 Download
`,"release"]},{title:"0.27.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.27.0.html",pathLocale:"/zh/",extraFields:["0.27.0",`
版本说明

改变组件拖动方式，改进组件编辑体验
添加 &quot;迷你&quot; 构建模式，在没有资源发生更改时可以快速编译
修复Windows下增量编译未生效的问题
修复加载非法的lottie json文件时崩溃的问题
修复组件编辑时鼠标悬浮高亮的问题
禁止Windows下&quot;Ctrl+鼠标&quot;时默认显示快捷菜单
增加更多用于组件对齐的工具
移除不支持的应用程序模板
其他修复和改进

Windows-v0.27.0 Download
Mac-v0.27.0 Download
`,"release"]},{title:"0.28.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.28.0.html",pathLocale:"/zh/",extraFields:["0.28.0",`
版本说明

支持从文件系统加载外部图片
支持.gif 动画图片
统一屏幕画布和组件树中组件的多项选择行为
支持将 &quot;容器&quot; 组件及其子组件一起隐藏 / 显示
支持在组件树中拖放多个组件
支持在 &quot;容器&quot; 组件内拖动并选择组件
复制粘贴的新组件将放置在顶层，而不是底层
按 &quot;删除&quot; 键可直接删除选定的组件
其他修复和改进

Windows-v0.28.0 Download
Mac-v0.28.0 Download
`,"release"]},{title:"0.30.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.30.0.html",pathLocale:"/zh/",extraFields:["0.30.0",`
版本说明

重新设计组件的属性和样式面板
为用户操作和系统事件操作支持更多动作配置
支持用户操作和系统事件操作自定义代码
支持图片多选
其他修复和改进


注意
破坏性变更：


用户操作的数据类型已更改，需重新配置用户操作。
例如：若已为按钮的CLICK操作配置加载屏幕动作，需重新进行配置。


旧版用户操作数据可能导致错误的代码生成，若发现生成异常代码，请检查用户操作配置是否正确。



Windows-v0.30.0 Download
Mac-v0.30.0 Download
`,"release"]},{title:"0.32.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.32.0.html",pathLocale:"/zh/",extraFields:["0.32.0",`
版本说明

支持 LVGL v9
支持全局组件搜索
其它修复和改进

Windows-v0.32.0 Download
Mac-v0.32.0 Download
`,"release"]},{title:"0.33.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.33.0.html",pathLocale:"/zh/",extraFields:["0.33.0",`
版本说明

增加全屏模式
增加二维码组件
重新设计工具栏
其它修复和优化

Windows-v0.33.0 下载
Mac-v0.33.0 下载
`,"release"]},{title:"0.33.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.33.1.html",pathLocale:"/zh/",extraFields:["0.33.1",`版本说明

修复：16位色深下的图像显示错误
修复：将部件拖入容器时图层发生变化的问题
修复：当其他部件被拖入容器并发生重叠时，组件背景色可能被改变的问题
修复：屏幕背景不能被改变的问题
其它修复和优化

Windows-v0.33.1 Download
Mac-v0.33.1 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.34.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.34.0.html",pathLocale:"/zh/",extraFields:["0.34.0",`版本说明

新增部件：标签页
新增部件：表盘
新增部件：直线
新增部件：图表
新增搜索功能, 并支持控件栏缩放
重新设计应用状态栏，并新增消息框用于操作的警告和错误消息
属性仅在用户输入回车后 或 输入框失去焦点时生效
新增按键的&quot;切换状态&quot;属性
修复:组件样式状态改变问题
修复:某些操作的撤销和重做问题
修复:按键、文本、图片按钮的长文本模式问题
修复:图片、进度条、滑动条、图片按键、开关和圆弧的UI问题
其他修复和优化

Windows-v0.34.0 Download
Mac-v0.34.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.35.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.35.0.html",pathLocale:"/zh/",extraFields:["0.35.0",`版本说明

新增 Spinner 组件
支持背景色渐变
支持取色器
支持 Qrcode 图片
修复 Tabview 组件的错误
修复 NavigateBar 组件的代码生成错误
其他修复和优化

Windows-v0.35.0 Download
Mac-v0.35.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.36.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[]}],path:"/zh/release/release-v0.36.0.html",pathLocale:"/zh/",extraFields:["0.36.0",`版本说明

新增 Led 组件
新增 Table 组件
支持鼠标滚轮缩放画布
支持鼠标拖动画布
支持重置画布
优化屏幕预览缩略图
其他修复和优化

视频演示

Windows-v0.36.0
Mac-v0.36.0
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"介绍",headers:[{level:2,title:"什么是高阶组件(HoC)？",slug:"什么是高阶组件-hoc",link:"#什么是高阶组件-hoc",children:[{level:3,title:"功能",slug:"功能",link:"#功能",children:[]},{level:3,title:"限制",slug:"限制",link:"#限制",children:[]}]},{level:2,title:"使用高阶组件",slug:"使用高阶组件",link:"#使用高阶组件",children:[]}],path:"/zh/guide/hoc/0_intro.html",pathLocale:"/zh/",extraFields:["介绍",`什么是高阶组件(HoC)？
高阶组件是封装了具有预定义行为的多个组件的复合组件，用于自管理UI状态控制。
功能
HoC组件提供以下功能：

作为一个统一实体进行选择、复制、删除、拖拽和移动
可见性切换
通过编辑进行视觉自定义
预定义行为管理UI状态，例如状态按钮会根据状态变化自动同步图像和标签更新，使开发人员能够专注于业务逻辑

限制
HoC组件具有以下限制：

不支持直接调整大小；修改需要更改包装的组件
禁止添加、删除或重新排序封装的组件
不允许修改HoC的行为

使用高阶组件
要使用HoC组件：

展开组件栏以显示HoC部分：




从组件栏拖拽所需的HoC到屏幕
像使用标准组件一样使用HoC

`]},{title:"状态按钮",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"状态按钮配置",slug:"状态按钮配置",link:"#状态按钮配置",children:[]}],path:"/zh/guide/hoc/1_statebtn.html",pathLocale:"/zh/",extraFields:["状态按钮",`介绍
状态按钮是提供类按钮多状态功能的高阶组件。
常见需求涉及具有多个状态的按钮，这些状态在用户交互时循环。例如，空调控制可能在音量设置之间循环：低 → 中 → 高 → 自动 → 低 → ... 每个状态都需要不同的视觉表示。标准LVGL组件如按钮或图像按钮无法在没有大量自定义代码开发的情况下实现此行为。
状态按钮通过启用多个状态的配置来解决此限制，每个状态支持不同的图像和标签。随着状态的转换，配置的视觉元素会自动更新。
组件结构
状态按钮封装了以下组件：

容器(x1)：为HoC提供背景
图像(x3)：为每个状态显示图像
标签(x3)：为每个状态显示标签
按钮(x1)：处理用户交互，采用透明样式以确保只有图像、标签和背景可见

属性
状态按钮提供以下可配置属性：
状态
配置HoC的状态数量，每个状态支持：

最多3个可配置图像
最多3个可配置标签

当前状态
表示HoC的活动状态。可以修改此值以观察视觉变化。
状态按钮配置
默认情况下，状态按钮显示一个图像和一个标签。要显示其他图像和标签，请右键单击HoC并选择编辑以访问HoC编辑器进行配置修改。
默认状态按钮配置如下所示：

默认设置显示为：

可以通过HoC编辑器进行布局调整，其中封装的组件可以像标准组件一样重新定位。
可以隐藏不需要的组件。相反，可以取消隐藏默认隐藏的组件以启用其他图像和标签。
隐藏的组件被排除在代码生成和构建过程之外，有效地将它们视为不存在。
显示所有组件的完整配置状态按钮如下所示：

相应的设置显示为：

对于带圆角的方形形状等替代样式，请右键单击组件并选择编辑以修改外观：

虽然此示例可能不代表最佳美学效果，但用户可以根据自己的喜好自定义设计。
创建自定义状态按钮后，右键单击将其保存为模板组件以在整个项目中重用。
`]},{title:"标签滑块",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"滑块标签",slug:"滑块标签",link:"#滑块标签",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/zh/guide/hoc/2_labelslider.html",pathLocale:"/zh/",extraFields:["标签滑块",`介绍
标签滑块是扩展滑块功能的高阶组件，具有可自定义的标签和图像。
以空调控制为例，标签滑块为音量调节提供了优雅的解决方案。当用户拖动滑块时，音量级别相应变化，而突出显示的标签指示当前位置。可以实现视觉指示器来表示音量强度。该组件解决了直观的基于滑块的控制的常见需求。
组件结构
标签滑块封装了以下组件：

容器(x1)：为HoC提供背景
图像(x3)：为每个状态显示图像
标签(x3)：为每个状态显示标签
滑块(x1)：处理用户交互

属性
标签滑块提供以下可配置属性：
状态
配置HoC的状态数量，每个状态支持：

最多3个可配置图像
最多3个可配置标签

当前状态
表示HoC的活动状态。可以修改此值以观察视觉变化。
滑块标签
虽然最多可以配置3个标签，但一个标签作为滑块标签具有半可配置定位。该标签自动与滑块的当前刻度位置对齐。对于垂直滑块，垂直位置自动计算，对于水平滑块，水平位置自动计算。用户只能调整标签与滑块之间的距离。
配置
默认情况下，标签滑块显示两个图像和滑块标签。要显示其他图像和标签，请右键单击HoC并选择编辑以访问HoC编辑器进行配置修改。
默认标签滑块配置如下所示：

相应的设置显示为：

要自定义图像和标签的布局，请右键单击并使用与状态按钮相同的方法进行修改。
显示所有组件的完整配置标签滑块如下所示：

相应的设置显示为：

`]},{title:"数值滑块",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"滑块标签",slug:"滑块标签",link:"#滑块标签",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/zh/guide/hoc/3_valueslider.html",pathLocale:"/zh/",extraFields:["数值滑块",`介绍
数值滑块是扩展滑块功能的高阶组件，具有可自定义的标签和图像。与标签滑块类似，它通过仅显示一个跟随滑块刻度的单个标签（显示当前值）来区别于为每个刻度位置显示单独标签。
组件结构
数值滑块封装了以下组件：

容器(x1)：为HoC提供背景
图像(x3)：为每个状态显示图像
标签(x3)：为每个状态显示标签
滑块(x1)：处理用户交互

属性
数值滑块提供以下可配置属性：
状态
配置HoC的状态数量，每个状态支持：

最多3个可配置图像
最多3个可配置标签

当前状态
表示HoC的活动状态。可以修改此值以观察视觉变化。
滑块标签
与标签滑块类似，数值滑块具有位于滑块旁边的位置自动计算以与滑块当前刻度对齐的滑块标签，使得位置配置不可用。
配置
默认情况下，数值滑块显示两个图像和一个滑块标签。要显示其他图像和标签，请右键单击HoC并选择编辑以访问HoC编辑器进行配置修改。
数值滑块的外观和设置与标签滑块类似。
`]},{title:"复选框组和单选框组",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"复选框图像和标签",slug:"复选框图像和标签",link:"#复选框图像和标签",children:[{level:3,title:"图像",slug:"图像",link:"#图像",children:[]},{level:3,title:"标签",slug:"标签",link:"#标签",children:[]}]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[{level:3,title:"3分钟创建复杂复选框组 - 案例1",slug:"_3分钟创建复杂复选框组-案例1",link:"#_3分钟创建复杂复选框组-案例1",children:[]},{level:3,title:"3分钟创建复杂复选框组 - 案例2",slug:"_3分钟创建复杂复选框组-案例2",link:"#_3分钟创建复杂复选框组-案例2",children:[]}]}],path:"/zh/guide/hoc/4_checkgroup.html",pathLocale:"/zh/",extraFields:["复选框组和单选框组",`介绍
复选框组是提供复选框和单选框组功能的高阶组件，具有自管理状态控制。该组件消除了处理UI状态（如跟踪选中选项）所需的自定义代码。
组件结构
复选框组封装了以下组件：

容器(x1)：配置HoC的背景
复选框图像(x1)：配置选中和未选中状态的图像
图像(x2)：为选项配置图像
复选框标签(x1)：配置选中和未选中状态的文本，允许为选中选项自定义字体或颜色
标签(x2)：为选项配置文本

属性
复选框组提供以下可配置属性：
选项
配置HoC的选项数量，每个选项支持：

最多3个可配置图像
最多3个可配置标签

当前选择
定义HoC的初始状态。
方向
将布局方向配置为水平或垂直。
多选模式
确定是否允许多选：

启用：复选框组行为
禁用：单选框组行为

间隔
配置选项之间的间距。
复选框图像和标签
为选中和未选中状态提供专用图像和标签。
图像
配置选中状态的图像。如果未配置，组件将使用默认图像，如果未指定默认图像则为NULL。
当未配置默认图像时，通常表示不需要该图像，应将其隐藏。
标签
配置选中和未选中状态的文本样式，例如选项被选中时的文本颜色和字体。如果未配置，组件将使用默认标签样式。
视频演示
3分钟创建复杂复选框组 - 案例1

3分钟创建复杂复选框组 - 案例2

`]},{title:"抽屉",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"打开/关闭状态",slug:"打开-关闭状态",link:"#打开-关闭状态",children:[]},{level:3,title:"动画控制",slug:"动画控制",link:"#动画控制",children:[]},{level:3,title:"定位",slug:"定位",link:"#定位",children:[]},{level:3,title:"事件处理",slug:"事件处理",link:"#事件处理",children:[]}]}],path:"/zh/guide/hoc/5_drawer.html",pathLocale:"/zh/",extraFields:["抽屉",`介绍
抽屉是提供可折叠容器以显示和隐藏内容的高阶组件。典型用例涉及实现导航菜单。
抽屉功能作为容器组件，允许标准的拖放操作来添加子组件。
抽屉组件提供以下高级功能：
打开/关闭状态
组件支持两种状态：

打开：内容可见
关闭：内容隐藏

动画控制
可以配置过渡动画，并可自定义打开和关闭操作的持续时间参数。
定位
抽屉可以定位在屏幕的任意四个边缘：

左侧
右侧
顶部
底部

事件处理
内置事件机制支持对抽屉打开状态的编程控制。
有关详细实现指南，请参考通信命令和事件。
`]},{title:"状态栏",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"通信命令",slug:"通信命令",link:"#通信命令",children:[]}],path:"/zh/guide/hoc/6_statusbar.html",pathLocale:"/zh/",extraFields:["状态栏",`介绍
状态栏是提供状态显示区域的高阶组件，用于文本元素（如当前时间）或图标指示器（如WiFi和电池状态）。
使用
右键单击状态栏组件以配置文本和图标元素的事件。默认配置包括：

配置为接收时间更新的标签
配置为接收电池状态更新的图标
配置为接收蓝牙状态更新的图标

有关详细配置说明，请参考通信命令和事件。
通信命令
状态栏支持在屏幕设置期间初始化图标状态的命令。
有关综合实现详情，请参考通信命令和事件。
`]},{title:"导航栏",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/zh/guide/hoc/7_navigatebar.html",pathLocale:"/zh/",extraFields:["导航栏",`介绍
导航栏是屏幕管理系统的一部分的高阶组件，提供导航功能以返回到上一个屏幕。
必须启用屏幕管理才能使用导航栏组件。禁用时，该组件在组件栏中将不可见。
如果启用屏幕管理并在任何屏幕中实现导航栏，随后禁用屏幕管理将使导航栏失效。
有关综合配置详情，请参考屏幕管理。
`]},{title:"高阶组件",headers:[{level:2,title:"架构概述",slug:"架构概述",link:"#架构概述",children:[]},{level:2,title:"组件目录",slug:"组件目录",link:"#组件目录",children:[{level:3,title:"交互控制组件",slug:"交互控制组件",link:"#交互控制组件",children:[]},{level:3,title:"输入和选择组件",slug:"输入和选择组件",link:"#输入和选择组件",children:[]},{level:3,title:"导航和布局组件",slug:"导航和布局组件",link:"#导航和布局组件",children:[]}]},{level:2,title:"实现指南",slug:"实现指南",link:"#实现指南",children:[]},{level:2,title:"集成工作流",slug:"集成工作流",link:"#集成工作流",children:[]},{level:2,title:"实现最佳实践",slug:"实现最佳实践",link:"#实现最佳实践",children:[]}],path:"/zh/guide/hoc/",pathLocale:"/zh/",extraFields:["高阶组件",`高阶组件 (HoC)
高阶组件代表复杂的复合架构，它们封装了多个LVGL组件，具有预定义的行为模式和交互。这些组件为常见的UI模式提供工程化解决方案，同时保持可配置性和可扩展性。
架构概述
HoC在基础LVGL组件之上实现抽象层，提供：

封装行为：通过内部状态管理处理复杂的交互逻辑
一致接口：标准化的外观和行为模式
开发效率：减少标准UI模式的实现时间
配置灵活性：全面的自定义选项，同时保持架构完整性

组件目录
交互控制组件

状态按钮 - 具有视觉反馈机制的多状态按钮实现
标签滑块 - 带有集成值显示功能的滑块组件
值滑块 - 带有滑块控制界面的数字输入组件

输入和选择组件

复选框组 - 分组的复选框和单选按钮控制系统

导航和布局组件

抽屉组件 - 滑出式导航面板实现
状态栏 - 系统状态显示组件架构
导航栏 - 主导航界面组件

实现指南
高阶组件推荐用于以下用例：

标准界面模式：实现已建立的UI范例，如导航系统
复杂状态管理：需要复杂状态处理的多步骤用户交互
设计系统一致性：在应用程序模块中保持统一的设计模式
快速开发：加速标准界面组件的开发周期

集成工作流

在组件面板中识别合适的HoC组件
使用拖放操作将组件部署到设计画布上
通过属性检查器配置组件参数
应用自定义样式以符合应用程序设计要求

每个HoC都包含全面的技术文档，涵盖实现示例、参数规范和自定义程序。
实现最佳实践

组件选择：选择与功能需求和用例精确匹配的HoC
配置策略：利用自定义参数，同时保持可用性和可访问性
集成测试：验证HoC在目标应用程序上下文和用户工作流中的行为
性能优化：监控复杂HoC实现的资源利用和渲染性能

有关详细的实现指导，请参阅HoC技术规范，其中涵盖架构模式和自定义程序。
`]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:["",`404 Not Found
`]}],Cv=De(Lv),kv=()=>Cv,xv=/[^\x00-\x7F]/,Tv=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),os=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),is=(e,t)=>{const n=t.join(" "),o=Tv(e);if(xv.test(e))return o.some(r=>n.toLowerCase().includes(r));const i=e.endsWith(" ");return new RegExp(`${o.map((r,l)=>o.length===l+1&&!i?`(?=.*\\b${os(r)})`:`(?=.*\\b${os(r)}\\b)`).join("")}.+`,"gi").test(n)},Iv=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:o})=>{const i=P(()=>e.value.filter(r=>r.pathLocale===t.value));return P(()=>{const r=n.value.trim().toLowerCase();if(!r)return[];const l=[],s=(a,c)=>{is(r,[c.title])&&l.push({link:`${a.path}#${c.slug}`,title:a.title,header:c.title});for(const u of c.children){if(l.length>=o.value)return;s(a,u)}};for(const a of i.value){if(l.length>=o.value)break;if(is(r,[a.title,...a.extraFields])){l.push({link:a.path,title:a.title});continue}for(const c of a.headers){if(l.length>=o.value)break;s(a,c)}}return l})},Av=e=>{const t=De(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Rv=ce({name:"SearchBox",props:{locales:{type:Object,default:()=>({})},hotKeys:Array,maxSuggestions:{type:Number,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:o}=rr(e),i=hi(t),r=On(),l=Va(),s=kv(),a=De(null),c=De(!1),u=De(""),d=Iv({searchIndex:s,routeLocale:l,query:u,maxSuggestions:o}),{focusIndex:h,focusNext:p,focusPrev:v}=Av(d);Lp(n,()=>{var m;(m=a.value)==null||m.focus()});const b=P(()=>c.value&&!!d.value.length),S=()=>{b.value&&v()},C=()=>{b.value&&p()},L=m=>{if(!b.value)return;const _=d.value[m];_&&r.push(_.link).then(()=>{u.value="",h.value=0})};return()=>K("form",{class:"search-box",role:"search"},[K("input",{ref:a,type:"search",placeholder:i.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>{c.value=!0},onBlur:()=>{c.value=!1},onInput:m=>{u.value=m.target.value},onKeydown:m=>{switch(m.key){case"ArrowUp":{S();break}case"ArrowDown":{C();break}case"Enter":{m.preventDefault(),L(h.value);break}}}}),b.value&&K("ul",{class:"suggestions",onMouseleave:()=>{h.value=-1}},d.value.map(({link:m,title:_,header:H},X)=>K("li",{class:["suggestion",{focus:h.value===X}],onMouseenter:()=>{h.value=X},onMousedown:()=>{L(X)}},K("a",{href:m,onClick:M=>{M.preventDefault()}},[K("span",{class:"page-title"},_),H&&K("span",{class:"page-header"},`> ${H}`)]))))])}});var Ov=["s","/"],Pv={"/":{placeholder:"Search"},"/zh/":{placeholder:"搜索"}};const Dv=Pv,Mv=Ov,zv=10;var Fv=St({enhance({app:e}){e.component("SearchBox",t=>K(Rv,{locales:Dv,hotKeys:Mv,maxSuggestions:zv,...t}))}});const Vv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),Hv={class:"custom-footer"},Nv=ce({__name:"CustomFooter",setup(e){return(t,n)=>(W(),ne("footer",Hv,[...n[0]||(n[0]=[re("div",{class:"footer-content"},[zt(" Copyright © 2025 anyui Development Team | 备案信息 "),re("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"闽ICP备2024063669号")],-1)])]))}}),mc=Dn(Nv,[["__scopeId","data-v-df7ba8d7"]]),$v={class:"custom-footer"},Uv=ce({__name:"CustomFooterGitHub",setup(e){return(t,n)=>(W(),ne("footer",$v,[...n[0]||(n[0]=[re("div",{class:"footer-content"}," Copyright © 2025 anyui Development Team ",-1)])]))}}),gc=Dn(Uv,[["__scopeId","data-v-05494ea2"]]),Bv=ce({__name:"DynamicFooter",setup(e){const t=P(()=>!0);return(n,o)=>t.value?(W(),ke(gc,{key:0})):(W(),ke(mc,{key:1}))}}),jv=St({enhance({app:e,router:t,siteData:n}){e.component("DynamicFooter",Bv),e.component("CustomFooter",mc),e.component("CustomFooterGitHub",gc)},setup(){},rootComponents:[]}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Po=[vp,Rp,Vp,Np,Qp,sm,hm,gm,Sm,Tm,Ev,Vv,Wv].map(e=>e.default).filter(Boolean),Gv=JSON.parse(`{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}],["link",{"href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap","rel":"stylesheet"}],["link",{"rel":"icon","type":"image/png","sizes":"16x16","href":"/img/favicon-16x16.png"}],["link",{"rel":"icon","type":"image/png","sizes":"32x32","href":"/img/favicon-32x32.png"}],["link",{"rel":"icon","type":"image/x-icon","href":"/img/favicon.ico"}],["script",{"defer":true,"onload":"\\n          if (location.hostname === 'anyui.tech' || location.hostname === 'lvgl-designer.github.io') {\\n            var hm = document.createElement(\\"script\\");\\n            hm.src = \\"https://hm.baidu.com/hm.js?085d518a1140960eb8c513e825951e25\\";\\n            var s = document.getElementsByTagName(\\"script\\")[0];\\n            s.parentNode.insertBefore(hm, s);\\n          }\\n        "}]],"locales":{"/":{"lang":"en-US","title":"anyui","description":"Professional LVGL UI development environment - Visual design tools, code generation and simulator"},"/zh/":{"lang":"zh-CN","title":"anyui","description":"专业的LVGL UI开发环境 - 可视化设计工具、代码生成和模拟器"}}}`);var Un=we(Gv),qv=Bf,Kv=()=>{const e=ph({history:qv(La("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,o)=>o||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===xt){const o=lo(t.fullPath);if(o.path!==t.fullPath)return o.path;const i=await o.loader();t.meta={...o.meta,_pageChunk:i}}else t.path===n.path&&(t.meta=n.meta)}),e},Qv=e=>{e.component("ClientOnly",yr),e.component("Content",wr),e.component("RouteLink",ui)},Jv=(e,t,n)=>{const o=P(()=>t.currentRoute.value.path),i=Ds((S,C)=>({get(){return S(),t.currentRoute.value.meta._pageChunk},set(L){t.currentRoute.value.meta._pageChunk=L,C()}})),r=P(()=>tn.resolveLayouts(n)),l=P(()=>tn.resolveRouteLocale(Un.value.locales,o.value)),s=P(()=>tn.resolveSiteLocaleData(Un.value,l.value)),a=P(()=>i.value.comp),c=P(()=>i.value.data),u=P(()=>c.value.frontmatter),d=P(()=>tn.resolvePageHeadTitle(c.value,s.value)),h=P(()=>tn.resolvePageHead(d.value,u.value,s.value)),p=P(()=>tn.resolvePageLang(c.value,s.value)),v=P(()=>tn.resolvePageLayout(c.value,r.value)),b={layouts:r,pageData:c,pageComponent:a,pageFrontmatter:u,pageHead:h,pageHeadTitle:d,pageLang:p,pageLayout:v,redirects:Qi,routeLocale:l,routePath:o,routes:Ln,siteData:Un,siteLocaleData:s};return e.provide(vr,b),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>h.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>c.value},$routeLocale:{get:()=>l.value},$site:{get:()=>Un.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>Sr}}),b},Yv=([e,t,n=""])=>{const o=Object.entries(t).map(([s,a])=>ut(a)?`[${s}=${JSON.stringify(a)}]`:a?`[${s}]`:"").join(""),i=`head > ${e}${o}`;return Array.from(document.querySelectorAll(i)).find(s=>s.innerText===n)??null},Xv=([e,t,n])=>{if(!ut(e))return null;const o=document.createElement(e);return pr(t)&&Object.entries(t).forEach(([i,r])=>{ut(r)?o.setAttribute(i,r):r&&o.setAttribute(i,"")}),ut(n)&&o.appendChild(document.createTextNode(n)),o},Zv=()=>{const e=vh(),t=br();let n=[];const o=()=>{e.value.forEach(l=>{const s=Yv(l);s&&n.push(s)})},i=()=>{const l=[];return e.value.forEach(s=>{const a=Xv(s);a&&l.push(a)}),l},r=()=>{document.documentElement.lang=t.value;const l=i();n.forEach((s,a)=>{const c=l.findIndex(u=>s.isEqualNode(u));c===-1?(s.remove(),delete n[a]):l.splice(c,1)}),l.forEach(s=>document.head.appendChild(s)),n=[...n.filter(s=>!!s),...l]};qt(wh,r),rt(()=>{o(),Ke(e,r,{immediate:!1})})},e_=Kd,t_=async()=>{var n;const e=e_({name:"Vuepress",setup(){var r;Zv();for(const l of Po)(r=l.setup)==null||r.call(l);const o=Po.flatMap(({rootComponents:l=[]})=>l.map(s=>K(s))),i=_h();return()=>[K(i.value),o]}}),t=Kv();Qv(e),Jv(e,t,Po);for(const o of Po)await((n=o.enhance)==null?void 0:n.call(o,{app:e,router:t,siteData:Un}));return e.use(t),{app:e,router:t}};t_().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Dn as _,ad as a,re as b,ne as c,t_ as createVueApp,ae as d,zt as e,W as o,Ks as r,xe as w};
