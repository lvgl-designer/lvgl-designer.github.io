const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.html-CoaU1u25.js","assets/subscribe-CpXpclBw.js","assets/get-started.html-DfVrdqhG.js","assets/anyui-simulator-9x0RPKL1.js","assets/3_resource.html-CUkh1Y4j.js","assets/anyui-resource-fonts-C8bGQmra.js","assets/4_composite.html-CCEUje6X.js","assets/anyui-composite-setting-DbIjVhZS.js","assets/5_hide_lock.html-DVvPl1T7.js","assets/anyui-lock-CTL_SKZJ.js","assets/7_scr_mgmt.html-DkFiSlYB.js","assets/navigate_bar-DDhDZBVs.js","assets/design.html-DOgt6CyB.js","assets/widget-alignment-DGu6OLsq.js","assets/flag-and-state.html-CIDsEWFJ.js","assets/state_modify-CMqySAna.js","assets/globalcomponents.html-CkOZMKVZ.js","assets/global_status_bar-2NVXGzc8.js","assets/index.html-oY-fR6_a.js","assets/get-started.html-Cw-Usv0c.js","assets/release-v0.15.0.html-CZVWCPM5.js","assets/v0.15.0-1-D6gXMNN7.js","assets/release-v0.37.0.html-Zq6cS-UG.js","assets/v0.37.0_build-tool-config--olv5u6D.js","assets/layout.html-DuQ8HwCs.js","assets/flex_layout_example-Cu2JcUp5.js","assets/screen_animation.html-1f7O6M9a.js","assets/anim_scr_apply-B7V5zab7.js","assets/widget_animation.html-D_OK0tB5.js","assets/anim_widget_apply2-LPsiB8hz.js","assets/0_intro.html-Bic13rV0.js","assets/hoc-bar-DrWIOkMT.js","assets/1_statebtn.html-C5m6sITA.js","assets/statebtn-square--BBYt9UZ.js","assets/2_labelslider.html-D-K922Mv.js","assets/labelslider-setting-full-DoQ9x0_I.js","assets/3_resource.html-CR_F4r7-.js","assets/4_composite.html-DlJE9kws.js","assets/5_hide_lock.html-DD0vGxfY.js","assets/7_scr_mgmt.html-C0rlGO6c.js","assets/design.html-C-Bz0Znt.js","assets/flag-and-state.html-0-uMc6pn.js","assets/globalcomponents.html-Ci1qP0Xv.js","assets/release-v0.15.0.html-CQeVz-oi.js","assets/release-v0.37.0.html-BMAhoL_y.js","assets/screen_animation.html-Bk8CLHmE.js","assets/widget_animation.html-61oVDMxj.js","assets/layout.html-bDyjDWVp.js","assets/0_intro.html-C4fnB-6X.js","assets/1_statebtn.html-D6Qe7UWz.js","assets/2_labelslider.html-BG8B5Qba.js"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},bn=[],yt=()=>{},la=()=>!1,si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),Fe=Object.assign,Zo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vc=Object.prototype.hasOwnProperty,me=(e,t)=>vc.call(e,t),oe=Array.isArray,yn=e=>Yi(e)==="[object Map]",ra=e=>Yi(e)==="[object Set]",re=e=>typeof e=="function",Ae=e=>typeof e=="string",Mt=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",aa=e=>(Se(e)||re(e))&&re(e.then)&&re(e.catch),sa=Object.prototype.toString,Yi=e=>sa.call(e),_c=e=>Yi(e).slice(8,-1),ca=e=>Yi(e)==="[object Object]",el=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=Jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bc=/-(\w)/g,et=Qi(e=>e.replace(bc,(t,n)=>n?n.toUpperCase():"")),yc=/\B([A-Z])/g,Jt=Qi(e=>e.replace(yc,"-$1").toLowerCase()),ci=Qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),po=Qi(e=>e?`on${ci(e)}`:""),Gt=(e,t)=>!Object.is(e,t),mo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ua=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},wc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},kc=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let Ml;const Ji=()=>Ml||(Ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rn(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=Ae(i)?Cc(i):Rn(i);if(o)for(const l in o)t[l]=o[l]}return t}else if(Ae(e)||Se(e))return e}const Lc=/;(?![^(]*\))/g,Sc=/:([^]+)/,Ec=/\/\*[^]*?\*\//g;function Cc(e){const t={};return e.replace(Ec,"").split(Lc).forEach(n=>{if(n){const i=n.split(Sc);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Je(e){let t="";if(Ae(e))t=e;else if(oe(e))for(let n=0;n<e.length;n++){const i=Je(e[n]);i&&(t+=i+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function go(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ae(t)&&(e.class=Je(t)),n&&(e.style=Rn(n)),e}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=Jo(xc);function da(e){return!!e||e===""}const ha=e=>!!(e&&e.__v_isRef===!0),Ie=e=>Ae(e)?e:e==null?"":oe(e)||Se(e)&&(e.toString===sa||!re(e.toString))?ha(e)?Ie(e.value):JSON.stringify(e,fa,2):String(e),fa=(e,t)=>ha(t)?fa(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],l)=>(n[vo(i,l)+" =>"]=o,n),{})}:ra(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vo(n))}:Mt(t)?vo(t):Se(t)&&!oe(t)&&!ca(t)?String(t):t,vo=(e,t="")=>{var n;return Mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Ic{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ge,!t&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function pa(){return Ge}function Ac(e,t=!1){Ge&&Ge.cleanups.push(e)}let Le;const _o=new WeakSet;class ma{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_o.has(this)&&(_o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||va(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vl(this),_a(this);const t=Le,n=ht;Le=this,ht=!0;try{return this.fn()}finally{ba(this),Le=t,ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)il(t);this.deps=this.depsTail=void 0,Vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fo(this)&&this.run()}get dirty(){return Fo(this)}}let ga=0,Bn,jn;function va(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Bn,Bn=e}function tl(){ga++}function nl(){if(--ga>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Bn;){let t=Bn;for(Bn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function _a(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ba(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),il(i),Rc(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function Fo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ya(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ya(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Jn)||(e.globalVersion=Jn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fo(e))))return;e.flags|=2;const t=e.dep,n=Le,i=ht;Le=e,ht=!0;try{_a(e);const o=e.fn(e._value);(t.version===0||Gt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Le=n,ht=i,ba(e),e.flags&=-3}}function il(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)il(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ht=!0;const wa=[];function Dt(){wa.push(ht),ht=!1}function zt(){const e=wa.pop();ht=e===void 0?!0:e}function Vl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Le;Le=void 0;try{t()}finally{Le=n}}}let Jn=0;class Oc{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Le||!ht||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Oc(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,ka(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=i)}return n}trigger(t){this.version++,Jn++,this.notify(t)}notify(t){tl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nl()}}}function ka(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ka(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Vi=new WeakMap,rn=Symbol(""),Mo=Symbol(""),Xn=Symbol("");function qe(e,t,n){if(ht&&Le){let i=Vi.get(e);i||Vi.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new Xi),o.map=i,o.key=n),o.track()}}function At(e,t,n,i,o,l){const r=Vi.get(e);if(!r){Jn++;return}const a=s=>{s&&s.trigger()};if(tl(),t==="clear")r.forEach(a);else{const s=oe(e),c=s&&el(n);if(s&&n==="length"){const u=Number(i);r.forEach((d,f)=>{(f==="length"||f===Xn||!Mt(f)&&f>=u)&&a(d)})}else switch((n!==void 0||r.has(void 0))&&a(r.get(n)),c&&a(r.get(Xn)),t){case"add":s?c&&a(r.get("length")):(a(r.get(rn)),yn(e)&&a(r.get(Mo)));break;case"delete":s||(a(r.get(rn)),yn(e)&&a(r.get(Mo)));break;case"set":yn(e)&&a(r.get(rn));break}}nl()}function Pc(e,t){const n=Vi.get(e);return n&&n.get(t)}function fn(e){const t=fe(e);return t===e?t:(qe(t,"iterate",Xn),ct(e)?t:t.map(Ve))}function Zi(e){return qe(e=fe(e),"iterate",Xn),e}const Dc={__proto__:null,[Symbol.iterator](){return bo(this,Symbol.iterator,Ve)},concat(...e){return fn(this).concat(...e.map(t=>oe(t)?fn(t):t))},entries(){return bo(this,"entries",e=>(e[1]=Ve(e[1]),e))},every(e,t){return Lt(this,"every",e,t,void 0,arguments)},filter(e,t){return Lt(this,"filter",e,t,n=>n.map(Ve),arguments)},find(e,t){return Lt(this,"find",e,t,Ve,arguments)},findIndex(e,t){return Lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Lt(this,"findLast",e,t,Ve,arguments)},findLastIndex(e,t){return Lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return yo(this,"includes",e)},indexOf(...e){return yo(this,"indexOf",e)},join(e){return fn(this).join(e)},lastIndexOf(...e){return yo(this,"lastIndexOf",e)},map(e,t){return Lt(this,"map",e,t,void 0,arguments)},pop(){return Fn(this,"pop")},push(...e){return Fn(this,"push",e)},reduce(e,...t){return Hl(this,"reduce",e,t)},reduceRight(e,...t){return Hl(this,"reduceRight",e,t)},shift(){return Fn(this,"shift")},some(e,t){return Lt(this,"some",e,t,void 0,arguments)},splice(...e){return Fn(this,"splice",e)},toReversed(){return fn(this).toReversed()},toSorted(e){return fn(this).toSorted(e)},toSpliced(...e){return fn(this).toSpliced(...e)},unshift(...e){return Fn(this,"unshift",e)},values(){return bo(this,"values",Ve)}};function bo(e,t,n){const i=Zi(e),o=i[t]();return i!==e&&!ct(e)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=n(l.value)),l}),o}const zc=Array.prototype;function Lt(e,t,n,i,o,l){const r=Zi(e),a=r!==e&&!ct(e),s=r[t];if(s!==zc[t]){const d=s.apply(e,l);return a?Ve(d):d}let c=n;r!==e&&(a?c=function(d,f){return n.call(this,Ve(d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const u=s.call(r,c,i);return a&&o?o(u):u}function Hl(e,t,n,i){const o=Zi(e);let l=n;return o!==e&&(ct(e)?n.length>3&&(l=function(r,a,s){return n.call(this,r,a,s,e)}):l=function(r,a,s){return n.call(this,r,Ve(a),s,e)}),o[t](l,...i)}function yo(e,t,n){const i=fe(e);qe(i,"iterate",Xn);const o=i[t](...n);return(o===-1||o===!1)&&ol(n[0])?(n[0]=fe(n[0]),i[t](...n)):o}function Fn(e,t,n=[]){Dt(),tl();const i=fe(e)[t].apply(e,n);return nl(),zt(),i}const Fc=Jo("__proto__,__v_isRef,__isVue"),La=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt));function Mc(e){Mt(e)||(e=String(e));const t=fe(this);return qe(t,"has",e),t.hasOwnProperty(e)}class Sa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return l;if(n==="__v_raw")return i===(o?l?Aa:Ia:l?Ta:xa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=oe(t);if(!o){let s;if(r&&(s=Dc[n]))return s;if(n==="hasOwnProperty")return Mc}const a=Reflect.get(t,n,Pe(t)?t:i);return(Mt(n)?La.has(n):Fc(n))||(o||qe(t,"get",n),l)?a:Pe(a)?r&&el(n)?a:a.value:Se(a)?o?to(a):dn(a):a}}class Ea extends Sa{constructor(t=!1){super(!1,t)}set(t,n,i,o){let l=t[n];if(!this._isShallow){const s=Kt(l);if(!ct(i)&&!Kt(i)&&(l=fe(l),i=fe(i)),!oe(t)&&Pe(l)&&!Pe(i))return s||(l.value=i),!0}const r=oe(t)&&el(n)?Number(n)<t.length:me(t,n),a=Reflect.set(t,n,i,Pe(t)?t:o);return t===fe(o)&&(r?Gt(i,l)&&At(t,"set",n,i):At(t,"add",n,i)),a}deleteProperty(t,n){const i=me(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&At(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!Mt(n)||!La.has(n))&&qe(t,"has",n),i}ownKeys(t){return qe(t,"iterate",oe(t)?"length":rn),Reflect.ownKeys(t)}}class Ca extends Sa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vc=new Ea,Hc=new Ca,Nc=new Ea(!0),Uc=new Ca(!0),Vo=e=>e,yi=e=>Reflect.getPrototypeOf(e);function $c(e,t,n){return function(...i){const o=this.__v_raw,l=fe(o),r=yn(l),a=e==="entries"||e===Symbol.iterator&&r,s=e==="keys"&&r,c=o[e](...i),u=n?Vo:t?Hi:Ve;return!t&&qe(l,"iterate",s?Mo:rn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function wi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bc(e,t){const n={get(o){const l=this.__v_raw,r=fe(l),a=fe(o);e||(Gt(o,a)&&qe(r,"get",o),qe(r,"get",a));const{has:s}=yi(r),c=t?Vo:e?Hi:Ve;if(s.call(r,o))return c(l.get(o));if(s.call(r,a))return c(l.get(a));l!==r&&l.get(o)},get size(){const o=this.__v_raw;return!e&&qe(fe(o),"iterate",rn),Reflect.get(o,"size",o)},has(o){const l=this.__v_raw,r=fe(l),a=fe(o);return e||(Gt(o,a)&&qe(r,"has",o),qe(r,"has",a)),o===a?l.has(o):l.has(o)||l.has(a)},forEach(o,l){const r=this,a=r.__v_raw,s=fe(a),c=t?Vo:e?Hi:Ve;return!e&&qe(s,"iterate",rn),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}};return Fe(n,e?{add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear")}:{add(o){!t&&!ct(o)&&!Kt(o)&&(o=fe(o));const l=fe(this);return yi(l).has.call(l,o)||(l.add(o),At(l,"add",o,o)),this},set(o,l){!t&&!ct(l)&&!Kt(l)&&(l=fe(l));const r=fe(this),{has:a,get:s}=yi(r);let c=a.call(r,o);c||(o=fe(o),c=a.call(r,o));const u=s.call(r,o);return r.set(o,l),c?Gt(l,u)&&At(r,"set",o,l):At(r,"add",o,l),this},delete(o){const l=fe(this),{has:r,get:a}=yi(l);let s=r.call(l,o);s||(o=fe(o),s=r.call(l,o)),a&&a.call(l,o);const c=l.delete(o);return s&&At(l,"delete",o,void 0),c},clear(){const o=fe(this),l=o.size!==0,r=o.clear();return l&&At(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=$c(o,e,t)}),n}function eo(e,t){const n=Bc(e,t);return(i,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(me(n,o)&&o in i?n:i,o,l)}const jc={get:eo(!1,!1)},Wc={get:eo(!1,!0)},Gc={get:eo(!0,!1)},qc={get:eo(!0,!0)},xa=new WeakMap,Ta=new WeakMap,Ia=new WeakMap,Aa=new WeakMap;function Kc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yc(e){return e.__v_skip||!Object.isExtensible(e)?0:Kc(_c(e))}function dn(e){return Kt(e)?e:no(e,!1,Vc,jc,xa)}function Ra(e){return no(e,!1,Nc,Wc,Ta)}function to(e){return no(e,!0,Hc,Gc,Ia)}function Qc(e){return no(e,!0,Uc,qc,Aa)}function no(e,t,n,i,o){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Yc(e);if(l===0)return e;const r=o.get(e);if(r)return r;const a=new Proxy(e,l===2?i:n);return o.set(e,a),a}function an(e){return Kt(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function ol(e){return e?!!e.__v_raw:!1}function fe(e){const t=e&&e.__v_raw;return t?fe(t):e}function Jc(e){return!me(e,"__v_skip")&&Object.isExtensible(e)&&ua(e,"__v_skip",!0),e}const Ve=e=>Se(e)?dn(e):e,Hi=e=>Se(e)?to(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function De(e){return Oa(e,!1)}function we(e){return Oa(e,!0)}function Oa(e,t){return Pe(e)?e:new Xc(e,t)}class Xc{constructor(t,n){this.dep=new Xi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:fe(t),this._value=n?t:Ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||ct(t)||Kt(t);t=i?t:fe(t),Gt(t,n)&&(this._rawValue=t,this._value=i?t:Ve(t),this.dep.trigger())}}function J(e){return Pe(e)?e.value:e}function ve(e){return re(e)?e():J(e)}const Zc={get:(e,t,n)=>t==="__v_raw"?e:J(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Pe(o)&&!Pe(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function Pa(e){return an(e)?e:new Proxy(e,Zc)}class eu{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Xi,{get:i,set:o}=t(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Da(e){return new eu(e)}function ll(e){const t=oe(e)?new Array(e.length):{};for(const n in e)t[n]=Fa(e,n);return t}class tu{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Pc(fe(this._object),this._key)}}class nu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function za(e,t,n){return Pe(e)?e:re(e)?new nu(e):Se(e)&&arguments.length>1?Fa(e,t,n):De(e)}function Fa(e,t,n){const i=e[t];return Pe(i)?i:new tu(e,t,n)}class iu{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Xi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return va(this,!0),!0}get value(){const t=this.dep.track();return ya(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ou(e,t,n=!1){let i,o;return re(e)?i=e:(i=e.get,o=e.set),new iu(i,o,n)}const ki={},Ni=new WeakMap;let nn;function lu(e,t=!1,n=nn){if(n){let i=Ni.get(n);i||Ni.set(n,i=[]),i.push(e)}}function ru(e,t,n=be){const{immediate:i,deep:o,once:l,scheduler:r,augmentJob:a,call:s}=n,c=_=>o?_:ct(_)||o===!1||o===0?Rt(_,1):Rt(_);let u,d,f,p,v=!1,b=!1;if(Pe(e)?(d=()=>e.value,v=ct(e)):an(e)?(d=()=>c(e),v=!0):oe(e)?(b=!0,v=e.some(_=>an(_)||ct(_)),d=()=>e.map(_=>{if(Pe(_))return _.value;if(an(_))return c(_);if(re(_))return s?s(_,2):_()})):re(e)?t?d=s?()=>s(e,2):e:d=()=>{if(f){Dt();try{f()}finally{zt()}}const _=nn;nn=u;try{return s?s(e,3,[p]):e(p)}finally{nn=_}}:d=yt,t&&o){const _=d,H=o===!0?1/0:o;d=()=>Rt(_(),H)}const k=pa(),E=()=>{u.stop(),k&&k.active&&Zo(k.effects,u)};if(l&&t){const _=t;t=(...H)=>{_(...H),E()}}let S=b?new Array(e.length).fill(ki):ki;const m=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(t){const H=u.run();if(o||v||(b?H.some((X,z)=>Gt(X,S[z])):Gt(H,S))){f&&f();const X=nn;nn=u;try{const z=[H,S===ki?void 0:b&&S[0]===ki?[]:S,p];S=H,s?s(t,3,z):t(...z)}finally{nn=X}}}else u.run()};return a&&a(m),u=new ma(d),u.scheduler=r?()=>r(m,!1):m,p=_=>lu(_,!1,u),f=u.onStop=()=>{const _=Ni.get(u);if(_){if(s)s(_,4);else for(const H of _)H();Ni.delete(u)}},t?i?m(!0):S=u.run():r?r(m.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function Rt(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))Rt(e.value,t,n);else if(oe(e))for(let i=0;i<e.length;i++)Rt(e[i],t,n);else if(ra(e)||yn(e))e.forEach(i=>{Rt(i,t,n)});else if(ca(e)){for(const i in e)Rt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Rt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ui(e,t,n,i){try{return i?e(...i):e()}catch(o){di(o,t,n)}}function ft(e,t,n,i){if(re(e)){const o=ui(e,t,n,i);return o&&aa(o)&&o.catch(l=>{di(l,t,n)}),o}if(oe(e)){const o=[];for(let l=0;l<e.length;l++)o.push(ft(e[l],t,n,i));return o}}function di(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||be;if(t){let a=t.parent;const s=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,s,c)===!1)return}a=a.parent}if(l){Dt(),ui(l,null,10,[e,s,c]),zt();return}}au(e,n,o,i,r)}function au(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Qe=[];let _t=-1;const kn=[];let Bt=null,gn=0;const Ma=Promise.resolve();let Ui=null;function hi(e){const t=Ui||Ma;return e?t.then(this?e.bind(this):e):t}function su(e){let t=_t+1,n=Qe.length;for(;t<n;){const i=t+n>>>1,o=Qe[i],l=Zn(o);l<e||l===e&&o.flags&2?t=i+1:n=i}return t}function rl(e){if(!(e.flags&1)){const t=Zn(e),n=Qe[Qe.length-1];!n||!(e.flags&2)&&t>=Zn(n)?Qe.push(e):Qe.splice(su(t),0,e),e.flags|=1,Va()}}function Va(){Ui||(Ui=Ma.then(Ha))}function cu(e){oe(e)?kn.push(...e):Bt&&e.id===-1?Bt.splice(gn+1,0,e):e.flags&1||(kn.push(e),e.flags|=1),Va()}function Nl(e,t,n=_t+1){for(;n<Qe.length;n++){const i=Qe[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Qe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $i(e){if(kn.length){const t=[...new Set(kn)].sort((n,i)=>Zn(n)-Zn(i));if(kn.length=0,Bt){Bt.push(...t);return}for(Bt=t,gn=0;gn<Bt.length;gn++){const n=Bt[gn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bt=null,gn=0}}const Zn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ha(e){try{for(_t=0;_t<Qe.length;_t++){const t=Qe[_t];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ui(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_t<Qe.length;_t++){const t=Qe[_t];t&&(t.flags&=-2)}_t=-1,Qe.length=0,$i(),Ui=null,(Qe.length||kn.length)&&Ha()}}let Ue=null,Na=null;function Bi(e){const t=Ue;return Ue=e,Na=e&&e.type.__scopeId||null,t}function xe(e,t=Ue,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Zl(-1);const l=Bi(t);let r;try{r=e(...o)}finally{Bi(l),i._d&&Zl(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function ji(e,t){if(Ue===null)return e;const n=ro(Ue),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[l,r,a,s=be]=t[o];l&&(re(l)&&(l={mounted:l,updated:l}),l.deep&&Rt(r),i.push({dir:l,instance:n,value:r,oldValue:void 0,arg:a,modifiers:s}))}return e}function bt(e,t,n,i){const o=e.dirs,l=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];l&&(a.oldValue=l[r].value);let s=a.dir[i];s&&(Dt(),ft(s,n,8,[e.el,a,e,t]),zt())}}const uu=Symbol("_vte"),Ua=e=>e.__isTeleport,It=Symbol("_leaveCb"),Li=Symbol("_enterCb");function du(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{e.isMounted=!0}),sl(()=>{e.isUnmounting=!0}),e}const rt=[Function,Array],$a={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},Ba=e=>{const t=e.subTree;return t.component?Ba(t.component):t},hu={name:"BaseTransition",props:$a,setup(e,{slots:t}){const n=Ht(),i=du();return()=>{const o=t.default&&Ga(t.default(),!0);if(!o||!o.length)return;const l=ja(o),r=fe(e),{mode:a}=r;if(i.isLeaving)return wo(l);const s=Ul(l);if(!s)return wo(l);let c=Ho(s,r,i,n,d=>c=d);s.type!==He&&ei(s,c);let u=n.subTree&&Ul(n.subTree);if(u&&u.type!==He&&!ln(s,u)&&Ba(n).type!==He){let d=Ho(u,r,i,n);if(ei(u,d),a==="out-in"&&s.type!==He)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},wo(l);a==="in-out"&&s.type!==He?d.delayLeave=(f,p,v)=>{const b=Wa(i,u);b[String(u.key)]=u,f[It]=()=>{p(),f[It]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return l}}};function ja(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==He){t=n;break}}return t}const fu=hu;function Wa(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Ho(e,t,n,i,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:k,onAppear:E,onAfterAppear:S,onAppearCancelled:m}=t,_=String(e.key),H=Wa(n,e),X=(A,D)=>{A&&ft(A,i,9,D)},z=(A,D)=>{const B=D[1];X(A,D),oe(A)?A.every(w=>w.length<=1)&&B():A.length<=1&&B()},L={mode:r,persisted:a,beforeEnter(A){let D=s;if(!n.isMounted)if(l)D=k||s;else return;A[It]&&A[It](!0);const B=H[_];B&&ln(e,B)&&B.el[It]&&B.el[It](),X(D,[A])},enter(A){let D=c,B=u,w=d;if(!n.isMounted)if(l)D=E||c,B=S||u,w=m||d;else return;let F=!1;const M=A[Li]=$=>{F||(F=!0,$?X(w,[A]):X(B,[A]),L.delayedLeave&&L.delayedLeave(),A[Li]=void 0)};D?z(D,[A,M]):M()},leave(A,D){const B=String(e.key);if(A[Li]&&A[Li](!0),n.isUnmounting)return D();X(f,[A]);let w=!1;const F=A[It]=M=>{w||(w=!0,D(),M?X(b,[A]):X(v,[A]),A[It]=void 0,H[B]===e&&delete H[B])};H[B]=e,p?z(p,[A,F]):F()},clone(A){const D=Ho(A,t,n,i,o);return o&&o(D),D}};return L}function wo(e){if(fi(e))return e=Qt(e),e.children=null,e}function Ul(e){if(!fi(e))return Ua(e.type)&&e.children?ja(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&re(n.default))return n.default()}}function ei(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ei(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ga(e,t=!1,n){let i=[],o=0;for(let l=0;l<e.length;l++){let r=e[l];const a=n==null?r.key:String(n)+String(r.key!=null?r.key:l);r.type===ye?(r.patchFlag&128&&o++,i=i.concat(Ga(r.children,t,a))):(t||r.type!==He)&&i.push(a!=null?Qt(r,{key:a}):r)}if(o>1)for(let l=0;l<i.length;l++)i[l].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ce(e,t){return re(e)?Fe({name:e.name},t,{setup:e}):e}function al(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $l(e){const t=Ht(),n=we(null);if(t){const o=t.refs===be?t.refs={}:t.refs;Object.defineProperty(o,e,{enumerable:!0,get:()=>n.value,set:l=>n.value=l})}return n}function Ln(e,t,n,i,o=!1){if(oe(e)){e.forEach((v,b)=>Ln(v,t&&(oe(t)?t[b]:t),n,i,o));return}if(sn(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ln(e,t,n,i.component.subTree);return}const l=i.shapeFlag&4?ro(i.component):i.el,r=o?null:l,{i:a,r:s}=e,c=t&&t.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState,f=fe(d),p=d===be?la:v=>me(f,v);if(c!=null&&c!==s){if(Ae(c))u[c]=null,p(c)&&(d[c]=null);else if(Pe(c)){c.value=null;const v=t;v.k&&(u[v.k]=null)}}if(re(s))ui(s,a,12,[r,u]);else{const v=Ae(s),b=Pe(s);if(v||b){const k=()=>{if(e.f){const E=v?p(s)?d[s]:u[s]:s.value;if(o)oe(E)&&Zo(E,l);else if(oe(E))E.includes(l)||E.push(l);else if(v)u[s]=[l],p(s)&&(d[s]=u[s]);else{const S=[l];s.value=S,e.k&&(u[e.k]=S)}}else v?(u[s]=r,p(s)&&(d[s]=r)):b&&(s.value=r,e.k&&(u[e.k]=r))};r?(k.id=-1,it(k,n)):k()}}}let Bl=!1;const pn=()=>{Bl||(console.error("Hydration completed but contains mismatches."),Bl=!0)},pu=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",mu=e=>e.namespaceURI.includes("MathML"),Si=e=>{if(e.nodeType===1){if(pu(e))return"svg";if(mu(e))return"mathml"}},_n=e=>e.nodeType===8;function gu(e){const{mt:t,p:n,o:{patchProp:i,createText:o,nextSibling:l,parentNode:r,remove:a,insert:s,createComment:c}}=e,u=(m,_)=>{if(!_.hasChildNodes()){n(null,m,_),$i(),_._vnode=m;return}d(_.firstChild,m,null,null,null),$i(),_._vnode=m},d=(m,_,H,X,z,L=!1)=>{L=L||!!_.dynamicChildren;const A=_n(m)&&m.data==="[",D=()=>b(m,_,H,X,z,A),{type:B,ref:w,shapeFlag:F,patchFlag:M}=_;let $=m.nodeType;_.el=m,M===-2&&(L=!1,_.dynamicChildren=null);let I=null;switch(B){case un:$!==3?_.children===""?(s(_.el=o(""),r(m),m),I=m):I=D():(m.data!==_.children&&(pn(),m.data=_.children),I=l(m));break;case He:S(m)?(I=l(m),E(_.el=m.content.firstChild,m,H)):$!==8||A?I=D():I=l(m);break;case Gn:if(A&&(m=l(m),$=m.nodeType),$===1||$===3){I=m;const ee=!_.children.length;for(let j=0;j<_.staticCount;j++)ee&&(_.children+=I.nodeType===1?I.outerHTML:I.data),j===_.staticCount-1&&(_.anchor=I),I=l(I);return A?l(I):I}else D();break;case ye:A?I=v(m,_,H,X,z,L):I=D();break;default:if(F&1)($!==1||_.type.toLowerCase()!==m.tagName.toLowerCase())&&!S(m)?I=D():I=f(m,_,H,X,z,L);else if(F&6){_.slotScopeIds=z;const ee=r(m);if(A?I=k(m):_n(m)&&m.data==="teleport start"?I=k(m,m.data,"teleport end"):I=l(m),t(_,ee,null,H,X,Si(ee),L),sn(_)&&!_.type.__asyncResolved){let j;A?(j=se(ye),j.anchor=I?I.previousSibling:ee.lastChild):j=m.nodeType===3?Ft(""):se("div"),j.el=m,_.component.subTree=j}}else F&64?$!==8?I=D():I=_.type.hydrate(m,_,H,X,z,L,e,p):F&128&&(I=_.type.hydrate(m,_,H,X,Si(r(m)),z,L,e,d))}return w!=null&&Ln(w,null,X,_),I},f=(m,_,H,X,z,L)=>{L=L||!!_.dynamicChildren;const{type:A,props:D,patchFlag:B,shapeFlag:w,dirs:F,transition:M}=_,$=A==="input"||A==="option";if($||B!==-1){F&&bt(_,null,H,"created");let I=!1;if(S(m)){I=ss(null,M)&&H&&H.vnode.props&&H.vnode.props.appear;const j=m.content.firstChild;if(I){const ue=j.getAttribute("class");ue&&(j.$cls=ue),M.beforeEnter(j)}E(j,m,H),_.el=m=j}if(w&16&&!(D&&(D.innerHTML||D.textContent))){let j=p(m.firstChild,_,m,H,X,z,L);for(;j;){Ei(m,1)||pn();const ue=j;j=j.nextSibling,a(ue)}}else if(w&8){let j=_.children;j[0]===`
`&&(m.tagName==="PRE"||m.tagName==="TEXTAREA")&&(j=j.slice(1)),m.textContent!==j&&(Ei(m,0)||pn(),m.textContent=_.children)}if(D){if($||!L||B&48){const j=m.tagName.includes("-");for(const ue in D)($&&(ue.endsWith("value")||ue==="indeterminate")||si(ue)&&!wn(ue)||ue[0]==="."||j)&&i(m,ue,null,D[ue],void 0,H)}else if(D.onClick)i(m,"onClick",null,D.onClick,void 0,H);else if(B&4&&an(D.style))for(const j in D.style)D.style[j]}let ee;(ee=D&&D.onVnodeBeforeMount)&&at(ee,H,_),F&&bt(_,null,H,"beforeMount"),((ee=D&&D.onVnodeMounted)||F||I)&&ms(()=>{ee&&at(ee,H,_),I&&M.enter(m),F&&bt(_,null,H,"mounted")},X)}return m.nextSibling},p=(m,_,H,X,z,L,A)=>{A=A||!!_.dynamicChildren;const D=_.children,B=D.length;for(let w=0;w<B;w++){const F=A?D[w]:D[w]=st(D[w]),M=F.type===un;m?(M&&!A&&w+1<B&&st(D[w+1]).type===un&&(s(o(m.data.slice(F.children.length)),H,l(m)),m.data=F.children),m=d(m,F,X,z,L,A)):M&&!F.children?s(F.el=o(""),H):(Ei(H,1)||pn(),n(null,F,H,null,X,z,Si(H),L))}return m},v=(m,_,H,X,z,L)=>{const{slotScopeIds:A}=_;A&&(z=z?z.concat(A):A);const D=r(m),B=p(l(m),_,D,H,X,z,L);return B&&_n(B)&&B.data==="]"?l(_.anchor=B):(pn(),s(_.anchor=c("]"),D,B),B)},b=(m,_,H,X,z,L)=>{if(Ei(m.parentElement,1)||pn(),_.el=null,L){const B=k(m);for(;;){const w=l(m);if(w&&w!==B)a(w);else break}}const A=l(m),D=r(m);return a(m),n(null,_,D,A,H,X,Si(D),z),H&&(H.vnode.el=_.el,fs(H,_.el)),A},k=(m,_="[",H="]")=>{let X=0;for(;m;)if(m=l(m),m&&_n(m)&&(m.data===_&&X++,m.data===H)){if(X===0)return l(m);X--}return m},E=(m,_,H)=>{const X=_.parentNode;X&&X.replaceChild(m,_);let z=H;for(;z;)z.vnode.el===_&&(z.vnode.el=z.subTree.el=m),z=z.parent},S=m=>m.nodeType===1&&m.tagName==="TEMPLATE";return[u,d]}const jl="data-allow-mismatch",vu={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ei(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(jl);)e=e.parentElement;const n=e&&e.getAttribute(jl);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return t===0&&i.includes("children")?!0:i.includes(vu[t])}}Ji().requestIdleCallback;Ji().cancelIdleCallback;function _u(e,t){if(_n(e)&&e.data==="["){let n=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(t(i)===!1)break}else if(_n(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else t(e)}const sn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function bu(e){re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:o=200,hydrate:l,timeout:r,suspensible:a=!0,onError:s}=e;let c=null,u,d=0;const f=()=>(d++,c=null,p()),p=()=>{let v;return c||(v=c=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),s)return new Promise((k,E)=>{s(b,()=>k(f()),()=>E(b),d+1)});throw b}).then(b=>v!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return ce({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(v,b,k){let E=!1;(b.bu||(b.bu=[])).push(()=>E=!0);const S=()=>{E||k()},m=l?()=>{const _=l(S,H=>_u(v,H));_&&(b.bum||(b.bum=[])).push(_)}:S;u?m():p().then(()=>!b.isUnmounted&&m())},get __asyncResolved(){return u},setup(){const v=Ne;if(al(v),u)return()=>ko(u,v);const b=m=>{c=null,di(m,v,13,!i)};if(a&&v.suspense||xn)return p().then(m=>()=>ko(m,v)).catch(m=>(b(m),()=>i?se(i,{error:m}):null));const k=De(!1),E=De(),S=De(!!o);return o&&setTimeout(()=>{S.value=!1},o),r!=null&&setTimeout(()=>{if(!k.value&&!E.value){const m=new Error(`Async component timed out after ${r}ms.`);b(m),E.value=m}},r),p().then(()=>{k.value=!0,v.parent&&fi(v.parent.vnode)&&v.parent.update()}).catch(m=>{b(m),E.value=m}),()=>{if(k.value&&u)return ko(u,v);if(E.value&&i)return se(i,{error:E.value});if(n&&!S.value)return se(n)}}})}function ko(e,t){const{ref:n,props:i,children:o,ce:l}=t.vnode,r=se(e,i,o);return r.ref=n,r.ce=l,delete t.vnode.ce,r}const fi=e=>e.type.__isKeepAlive;function yu(e,t){qa(e,"a",t)}function wu(e,t){qa(e,"da",t)}function qa(e,t,n=Ne){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(io(t,i,n),n){let o=n.parent;for(;o&&o.parent;)fi(o.parent.vnode)&&ku(i,t,n,o),o=o.parent}}function ku(e,t,n,i){const o=io(t,e,i,!0);oo(()=>{Zo(i[t],o)},n)}function io(e,t,n=Ne,i=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...r)=>{Dt();const a=pi(n),s=ft(t,n,e,r);return a(),zt(),s});return i?o.unshift(l):o.push(l),l}}const Vt=e=>(t,n=Ne)=>{(!xn||e==="sp")&&io(e,(...i)=>t(...i),n)},Lu=Vt("bm"),lt=Vt("m"),Su=Vt("bu"),Eu=Vt("u"),sl=Vt("bum"),oo=Vt("um"),Cu=Vt("sp"),xu=Vt("rtg"),Tu=Vt("rtc");function Iu(e,t=Ne){io("ec",e,t)}const Au="components";function Ka(e,t){return Ou(Au,e,!0,t)||e}const Ru=Symbol.for("v-ndc");function Ou(e,t,n=!0,i=!1){const o=Ue||Ne;if(o){const l=o.type;{const a=vd(l,!1);if(a&&(a===t||a===et(t)||a===ci(et(t))))return l}const r=Wl(o[e]||l[e],t)||Wl(o.appContext[e],t);return!r&&i?l:r}}function Wl(e,t){return e&&(e[t]||e[et(t)]||e[ci(et(t))])}function Yt(e,t,n,i){let o;const l=n,r=oe(e);if(r||Ae(e)){const a=r&&an(e);let s=!1,c=!1;a&&(s=!ct(e),c=Kt(e),e=Zi(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(s?c?Hi(Ve(e[u])):Ve(e[u]):e[u],u,void 0,l)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,l)}else if(Se(e))if(e[Symbol.iterator])o=Array.from(e,(a,s)=>t(a,s,void 0,l));else{const a=Object.keys(e);o=new Array(a.length);for(let s=0,c=a.length;s<c;s++){const u=a[s];o[s]=t(e[u],u,s,l)}}else o=[];return o}function Pu(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(oe(i))for(let o=0;o<i.length;o++)e[i[o].name]=i[o].fn;else i&&(e[i.name]=i.key?(...o)=>{const l=i.fn(...o);return l&&(l.key=i.key),l}:i.fn)}return e}function Ee(e,t,n={},i,o){if(Ue.ce||Ue.parent&&sn(Ue.parent)&&Ue.parent.ce)return t!=="default"&&(n.name=t),W(),Ce(ye,null,[se("slot",n,i&&i())],64);let l=e[t];l&&l._c&&(l._d=!1),W();const r=l&&Ya(l(n)),a=n.key||r&&r.key,s=Ce(ye,{key:(a&&!Mt(a)?a:`_${t}`)+(!r&&i?"_fb":"")},r||(i?i():[]),r&&e._===1?64:-2);return s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),l&&l._c&&(l._d=!0),s}function Ya(e){return e.some(t=>ni(t)?!(t.type===He||t.type===ye&&!Ya(t.children)):!0)?e:null}const No=e=>e?_s(e)?ro(e):No(e.parent):null,Wn=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>No(e.parent),$root:e=>No(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ja(e),$forceUpdate:e=>e.f||(e.f=()=>{rl(e.update)}),$nextTick:e=>e.n||(e.n=hi.bind(e.proxy)),$watch:e=>ed.bind(e)}),Lo=(e,t)=>e!==be&&!e.__isScriptSetup&&me(e,t),Du={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:l,accessCache:r,type:a,appContext:s}=e;let c;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(Lo(i,t))return r[t]=1,i[t];if(o!==be&&me(o,t))return r[t]=2,o[t];if((c=e.propsOptions[0])&&me(c,t))return r[t]=3,l[t];if(n!==be&&me(n,t))return r[t]=4,n[t];Uo&&(r[t]=0)}}const u=Wn[t];let d,f;if(u)return t==="$attrs"&&qe(e.attrs,"get",""),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==be&&me(n,t))return r[t]=4,n[t];if(f=s.config.globalProperties,me(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:l}=e;return Lo(o,t)?(o[t]=n,!0):i!==be&&me(i,t)?(i[t]=n,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:l,type:r}},a){let s,c;return!!(n[a]||e!==be&&a[0]!=="$"&&me(e,a)||Lo(t,a)||(s=l[0])&&me(s,a)||me(i,a)||me(Wn,a)||me(o.config.globalProperties,a)||(c=r.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:me(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gl(e){return oe(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Uo=!0;function zu(e){const t=Ja(e),n=e.proxy,i=e.ctx;Uo=!1,t.beforeCreate&&ql(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:r,watch:a,provide:s,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:v,activated:b,deactivated:k,beforeDestroy:E,beforeUnmount:S,destroyed:m,unmounted:_,render:H,renderTracked:X,renderTriggered:z,errorCaptured:L,serverPrefetch:A,expose:D,inheritAttrs:B,components:w,directives:F,filters:M}=t;if(c&&Fu(c,i,null),r)for(const ee in r){const j=r[ee];re(j)&&(i[ee]=j.bind(n))}if(o){const ee=o.call(n,n);Se(ee)&&(e.data=dn(ee))}if(Uo=!0,l)for(const ee in l){const j=l[ee],ue=re(j)?j.bind(n,n):re(j.get)?j.get.bind(n,n):yt,Re=!re(j)&&re(j.set)?j.set.bind(n):yt,Me=P({get:ue,set:Re});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Me.value,set:je=>Me.value=je})}if(a)for(const ee in a)Qa(a[ee],i,n,ee);if(s){const ee=re(s)?s.call(n):s;Reflect.ownKeys(ee).forEach(j=>{qt(j,ee[j])})}u&&ql(u,e,"c");function I(ee,j){oe(j)?j.forEach(ue=>ee(ue.bind(n))):j&&ee(j.bind(n))}if(I(Lu,d),I(lt,f),I(Su,p),I(Eu,v),I(yu,b),I(wu,k),I(Iu,L),I(Tu,X),I(xu,z),I(sl,S),I(oo,_),I(Cu,A),oe(D))if(D.length){const ee=e.exposed||(e.exposed={});D.forEach(j=>{Object.defineProperty(ee,j,{get:()=>n[j],set:ue=>n[j]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===yt&&(e.render=H),B!=null&&(e.inheritAttrs=B),w&&(e.components=w),F&&(e.directives=F),A&&al(e)}function Fu(e,t,n=yt){oe(e)&&(e=$o(e));for(const i in e){const o=e[i];let l;Se(o)?"default"in o?l=$e(o.from||i,o.default,!0):l=$e(o.from||i):l=$e(o),Pe(l)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[i]=l}}function ql(e,t,n){ft(oe(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qa(e,t,n,i){let o=i.includes(".")?ds(n,i):()=>n[i];if(Ae(e)){const l=t[e];re(l)&&Ke(o,l)}else if(re(e))Ke(o,e.bind(n));else if(Se(e))if(oe(e))e.forEach(l=>Qa(l,t,n,i));else{const l=re(e.handler)?e.handler.bind(n):t[e.handler];re(l)&&Ke(o,l,e)}}function Ja(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,a=l.get(t);let s;return a?s=a:!o.length&&!n&&!i?s=t:(s={},o.length&&o.forEach(c=>Wi(s,c,r,!0)),Wi(s,t,r)),Se(t)&&l.set(t,s),s}function Wi(e,t,n,i=!1){const{mixins:o,extends:l}=t;l&&Wi(e,l,n,!0),o&&o.forEach(r=>Wi(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const a=Mu[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Mu={data:Kl,props:Yl,emits:Yl,methods:Un,computed:Un,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Un,directives:Un,watch:Hu,provide:Kl,inject:Vu};function Kl(e,t){return t?e?function(){return Fe(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Vu(e,t){return Un($o(e),$o(t))}function $o(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?Fe(Object.create(null),e,t):t}function Yl(e,t){return e?oe(e)&&oe(t)?[...new Set([...e,...t])]:Fe(Object.create(null),Gl(e),Gl(t??{})):t}function Hu(e,t){if(!e)return t;if(!t)return e;const n=Fe(Object.create(null),e);for(const i in t)n[i]=Ye(e[i],t[i]);return n}function Xa(){return{app:null,config:{isNativeTag:la,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Uu(e,t){return function(i,o=null){re(i)||(i=Fe({},i)),o!=null&&!Se(o)&&(o=null);const l=Xa(),r=new WeakSet,a=[];let s=!1;const c=l.app={_uid:Nu++,_component:i,_props:o,_container:null,_context:l,_instance:null,version:bd,get config(){return l.config},set config(u){},use(u,...d){return r.has(u)||(u&&re(u.install)?(r.add(u),u.install(c,...d)):re(u)&&(r.add(u),u(c,...d))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,d){return d?(l.components[u]=d,c):l.components[u]},directive(u,d){return d?(l.directives[u]=d,c):l.directives[u]},mount(u,d,f){if(!s){const p=c._ceVNode||se(i,o);return p.appContext=l,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(p,u):e(p,u,f),s=!0,c._container=u,u.__vue_app__=c,ro(p.component)}},onUnmount(u){a.push(u)},unmount(){s&&(ft(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return l.provides[u]=d,c},runWithContext(u){const d=cn;cn=c;try{return u()}finally{cn=d}}};return c}}let cn=null;function qt(e,t){if(Ne){let n=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===n&&(n=Ne.provides=Object.create(i)),n[e]=t}}function $e(e,t,n=!1){const i=Ht();if(i||cn){let o=cn?cn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&re(t)?t.call(i&&i.proxy):t}}function Za(){return!!(Ht()||cn)}const es={},ts=()=>Object.create(es),ns=e=>Object.getPrototypeOf(e)===es;function $u(e,t,n,i=!1){const o={},l=ts();e.propsDefaults=Object.create(null),is(e,t,o,l);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Ra(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function Bu(e,t,n,i){const{props:o,attrs:l,vnode:{patchFlag:r}}=e,a=fe(o),[s]=e.propsOptions;let c=!1;if((i||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(lo(e.emitsOptions,f))continue;const p=t[f];if(s)if(me(l,f))p!==l[f]&&(l[f]=p,c=!0);else{const v=et(f);o[v]=Bo(s,a,v,p,e,!1)}else p!==l[f]&&(l[f]=p,c=!0)}}}else{is(e,t,o,l)&&(c=!0);let u;for(const d in a)(!t||!me(t,d)&&((u=Jt(d))===d||!me(t,u)))&&(s?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=Bo(s,a,d,void 0,e,!0)):delete o[d]);if(l!==a)for(const d in l)(!t||!me(t,d))&&(delete l[d],c=!0)}c&&At(e.attrs,"set","")}function is(e,t,n,i){const[o,l]=e.propsOptions;let r=!1,a;if(t)for(let s in t){if(wn(s))continue;const c=t[s];let u;o&&me(o,u=et(s))?!l||!l.includes(u)?n[u]=c:(a||(a={}))[u]=c:lo(e.emitsOptions,s)||(!(s in i)||c!==i[s])&&(i[s]=c,r=!0)}if(l){const s=fe(n),c=a||be;for(let u=0;u<l.length;u++){const d=l[u];n[d]=Bo(o,s,d,c[d],e,!me(c,d))}}return r}function Bo(e,t,n,i,o,l){const r=e[n];if(r!=null){const a=me(r,"default");if(a&&i===void 0){const s=r.default;if(r.type!==Function&&!r.skipFactory&&re(s)){const{propsDefaults:c}=o;if(n in c)i=c[n];else{const u=pi(o);i=c[n]=s.call(null,t),u()}}else i=s;o.ce&&o.ce._setProp(n,i)}r[0]&&(l&&!a?i=!1:r[1]&&(i===""||i===Jt(n))&&(i=!0))}return i}const ju=new WeakMap;function os(e,t,n=!1){const i=n?ju:t.propsCache,o=i.get(e);if(o)return o;const l=e.props,r={},a=[];let s=!1;if(!re(e)){const u=d=>{s=!0;const[f,p]=os(d,t,!0);Fe(r,f),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!l&&!s)return Se(e)&&i.set(e,bn),bn;if(oe(l))for(let u=0;u<l.length;u++){const d=et(l[u]);Ql(d)&&(r[d]=be)}else if(l)for(const u in l){const d=et(u);if(Ql(d)){const f=l[u],p=r[d]=oe(f)||re(f)?{type:f}:Fe({},f),v=p.type;let b=!1,k=!0;if(oe(v))for(let E=0;E<v.length;++E){const S=v[E],m=re(S)&&S.name;if(m==="Boolean"){b=!0;break}else m==="String"&&(k=!1)}else b=re(v)&&v.name==="Boolean";p[0]=b,p[1]=k,(b||me(p,"default"))&&a.push(d)}}const c=[r,a];return Se(e)&&i.set(e,c),c}function Ql(e){return e[0]!=="$"&&!wn(e)}const cl=e=>e==="_"||e==="_ctx"||e==="$stable",ul=e=>oe(e)?e.map(st):[st(e)],Wu=(e,t,n)=>{if(t._n)return t;const i=xe((...o)=>ul(t(...o)),n);return i._c=!1,i},ls=(e,t,n)=>{const i=e._ctx;for(const o in e){if(cl(o))continue;const l=e[o];if(re(l))t[o]=Wu(o,l,i);else if(l!=null){const r=ul(l);t[o]=()=>r}}},rs=(e,t)=>{const n=ul(t);e.slots.default=()=>n},as=(e,t,n)=>{for(const i in t)(n||!cl(i))&&(e[i]=t[i])},Gu=(e,t,n)=>{const i=e.slots=ts();if(e.vnode.shapeFlag&32){const o=t._;o?(as(i,t,n),n&&ua(i,"_",o,!0)):ls(t,i)}else t&&rs(e,t)},qu=(e,t,n)=>{const{vnode:i,slots:o}=e;let l=!0,r=be;if(i.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:as(o,t,n):(l=!t.$stable,ls(t,o)),r=t}else t&&(rs(e,t),r={default:1});if(l)for(const a in o)!cl(a)&&r[a]==null&&delete o[a]},it=ms;function Ku(e){return Yu(e,gu)}function Yu(e,t){const n=Ji();n.__VUE__=!0;const{insert:i,remove:o,patchProp:l,createElement:r,createText:a,createComment:s,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=yt,insertStaticContent:v}=e,b=(h,g,y,O=null,C=null,R=null,q=void 0,U=null,N=!!g.dynamicChildren)=>{if(h===g)return;h&&!ln(h,g)&&(O=T(h),je(h,C,R,!0),h=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:V,ref:ie,shapeFlag:Q}=g;switch(V){case un:k(h,g,y,O);break;case He:E(h,g,y,O);break;case Gn:h==null&&S(g,y,O,q);break;case ye:w(h,g,y,O,C,R,q,U,N);break;default:Q&1?H(h,g,y,O,C,R,q,U,N):Q&6?F(h,g,y,O,C,R,q,U,N):(Q&64||Q&128)&&V.process(h,g,y,O,C,R,q,U,N,Z)}ie!=null&&C?Ln(ie,h&&h.ref,R,g||h,!g):ie==null&&h&&h.ref!=null&&Ln(h.ref,null,R,h,!0)},k=(h,g,y,O)=>{if(h==null)i(g.el=a(g.children),y,O);else{const C=g.el=h.el;g.children!==h.children&&c(C,g.children)}},E=(h,g,y,O)=>{h==null?i(g.el=s(g.children||""),y,O):g.el=h.el},S=(h,g,y,O)=>{[h.el,h.anchor]=v(h.children,g,y,O,h.el,h.anchor)},m=({el:h,anchor:g},y,O)=>{let C;for(;h&&h!==g;)C=f(h),i(h,y,O),h=C;i(g,y,O)},_=({el:h,anchor:g})=>{let y;for(;h&&h!==g;)y=f(h),o(h),h=y;o(g)},H=(h,g,y,O,C,R,q,U,N)=>{g.type==="svg"?q="svg":g.type==="math"&&(q="mathml"),h==null?X(g,y,O,C,R,q,U,N):A(h,g,C,R,q,U,N)},X=(h,g,y,O,C,R,q,U)=>{let N,V;const{props:ie,shapeFlag:Q,transition:te,dirs:ae}=h;if(N=h.el=r(h.type,R,ie&&ie.is,ie),Q&8?u(N,h.children):Q&16&&L(h.children,N,null,O,C,So(h,R),q,U),ae&&bt(h,null,O,"created"),z(N,h,h.scopeId,q,O),ie){for(const ke in ie)ke!=="value"&&!wn(ke)&&l(N,ke,null,ie[ke],R,O);"value"in ie&&l(N,"value",null,ie.value,R),(V=ie.onVnodeBeforeMount)&&at(V,O,h)}ae&&bt(h,null,O,"beforeMount");const he=ss(C,te);he&&te.beforeEnter(N),i(N,g,y),((V=ie&&ie.onVnodeMounted)||he||ae)&&it(()=>{V&&at(V,O,h),he&&te.enter(N),ae&&bt(h,null,O,"mounted")},C)},z=(h,g,y,O,C)=>{if(y&&p(h,y),O)for(let R=0;R<O.length;R++)p(h,O[R]);if(C){let R=C.subTree;if(g===R||ps(R.type)&&(R.ssContent===g||R.ssFallback===g)){const q=C.vnode;z(h,q,q.scopeId,q.slotScopeIds,C.parent)}}},L=(h,g,y,O,C,R,q,U,N=0)=>{for(let V=N;V<h.length;V++){const ie=h[V]=U?jt(h[V]):st(h[V]);b(null,ie,g,y,O,C,R,q,U)}},A=(h,g,y,O,C,R,q)=>{const U=g.el=h.el;let{patchFlag:N,dynamicChildren:V,dirs:ie}=g;N|=h.patchFlag&16;const Q=h.props||be,te=g.props||be;let ae;if(y&&Xt(y,!1),(ae=te.onVnodeBeforeUpdate)&&at(ae,y,g,h),ie&&bt(g,h,y,"beforeUpdate"),y&&Xt(y,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&u(U,""),V?D(h.dynamicChildren,V,U,y,O,So(g,C),R):q||j(h,g,U,null,y,O,So(g,C),R,!1),N>0){if(N&16)B(U,Q,te,y,C);else if(N&2&&Q.class!==te.class&&l(U,"class",null,te.class,C),N&4&&l(U,"style",Q.style,te.style,C),N&8){const he=g.dynamicProps;for(let ke=0;ke<he.length;ke++){const ge=he[ke],Ze=Q[ge],We=te[ge];(We!==Ze||ge==="value")&&l(U,ge,Ze,We,C,y)}}N&1&&h.children!==g.children&&u(U,g.children)}else!q&&V==null&&B(U,Q,te,y,C);((ae=te.onVnodeUpdated)||ie)&&it(()=>{ae&&at(ae,y,g,h),ie&&bt(g,h,y,"updated")},O)},D=(h,g,y,O,C,R,q)=>{for(let U=0;U<g.length;U++){const N=h[U],V=g[U],ie=N.el&&(N.type===ye||!ln(N,V)||N.shapeFlag&198)?d(N.el):y;b(N,V,ie,null,O,C,R,q,!0)}},B=(h,g,y,O,C)=>{if(g!==y){if(g!==be)for(const R in g)!wn(R)&&!(R in y)&&l(h,R,g[R],null,C,O);for(const R in y){if(wn(R))continue;const q=y[R],U=g[R];q!==U&&R!=="value"&&l(h,R,U,q,C,O)}"value"in y&&l(h,"value",g.value,y.value,C)}},w=(h,g,y,O,C,R,q,U,N)=>{const V=g.el=h?h.el:a(""),ie=g.anchor=h?h.anchor:a("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ae}=g;ae&&(U=U?U.concat(ae):ae),h==null?(i(V,y,O),i(ie,y,O),L(g.children||[],y,ie,C,R,q,U,N)):Q>0&&Q&64&&te&&h.dynamicChildren?(D(h.dynamicChildren,te,y,C,R,q,U),(g.key!=null||C&&g===C.subTree)&&cs(h,g,!0)):j(h,g,y,ie,C,R,q,U,N)},F=(h,g,y,O,C,R,q,U,N)=>{g.slotScopeIds=U,h==null?g.shapeFlag&512?C.ctx.activate(g,y,O,q,N):M(g,y,O,C,R,q,N):$(h,g,N)},M=(h,g,y,O,C,R,q)=>{const U=h.component=hd(h,O,C);if(fi(h)&&(U.ctx.renderer=Z),fd(U,!1,q),U.asyncDep){if(C&&C.registerDep(U,I,q),!h.el){const N=U.subTree=se(He);E(null,N,g,y),h.placeholder=N.el}}else I(U,h,g,y,C,R,q)},$=(h,g,y)=>{const O=g.component=h.component;if(ld(h,g,y))if(O.asyncDep&&!O.asyncResolved){ee(O,g,y);return}else O.next=g,O.update();else g.el=h.el,O.vnode=g},I=(h,g,y,O,C,R,q)=>{const U=()=>{if(h.isMounted){let{next:Q,bu:te,u:ae,parent:he,vnode:ke}=h;{const tt=us(h);if(tt){Q&&(Q.el=ke.el,ee(h,Q,q)),tt.asyncDep.then(()=>{h.isUnmounted||U()});return}}let ge=Q,Ze;Xt(h,!1),Q?(Q.el=ke.el,ee(h,Q,q)):Q=ke,te&&mo(te),(Ze=Q.props&&Q.props.onVnodeBeforeUpdate)&&at(Ze,he,Q,ke),Xt(h,!0);const We=Eo(h),dt=h.subTree;h.subTree=We,b(dt,We,d(dt.el),T(dt),h,C,R),Q.el=We.el,ge===null&&fs(h,We.el),ae&&it(ae,C),(Ze=Q.props&&Q.props.onVnodeUpdated)&&it(()=>at(Ze,he,Q,ke),C)}else{let Q;const{el:te,props:ae}=g,{bm:he,m:ke,parent:ge,root:Ze,type:We}=h,dt=sn(g);if(Xt(h,!1),he&&mo(he),!dt&&(Q=ae&&ae.onVnodeBeforeMount)&&at(Q,ge,g),Xt(h,!0),te&&_e){const tt=()=>{h.subTree=Eo(h),_e(te,h.subTree,h,C,null)};dt&&We.__asyncHydrate?We.__asyncHydrate(te,h,tt):tt()}else{Ze.ce&&Ze.ce._def.shadowRoot!==!1&&Ze.ce._injectChildStyle(We);const tt=h.subTree=Eo(h);b(null,tt,y,O,h,C,R),g.el=tt.el}if(ke&&it(ke,C),!dt&&(Q=ae&&ae.onVnodeMounted)){const tt=g;it(()=>at(Q,ge,tt),C)}(g.shapeFlag&256||ge&&sn(ge.vnode)&&ge.vnode.shapeFlag&256)&&h.a&&it(h.a,C),h.isMounted=!0,g=y=O=null}};h.scope.on();const N=h.effect=new ma(U);h.scope.off();const V=h.update=N.run.bind(N),ie=h.job=N.runIfDirty.bind(N);ie.i=h,ie.id=h.uid,N.scheduler=()=>rl(ie),Xt(h,!0),V()},ee=(h,g,y)=>{g.component=h;const O=h.vnode.props;h.vnode=g,h.next=null,Bu(h,g.props,O,y),qu(h,g.children,y),Dt(),Nl(h),zt()},j=(h,g,y,O,C,R,q,U,N=!1)=>{const V=h&&h.children,ie=h?h.shapeFlag:0,Q=g.children,{patchFlag:te,shapeFlag:ae}=g;if(te>0){if(te&128){Re(V,Q,y,O,C,R,q,U,N);return}else if(te&256){ue(V,Q,y,O,C,R,q,U,N);return}}ae&8?(ie&16&&Xe(V,C,R),Q!==V&&u(y,Q)):ie&16?ae&16?Re(V,Q,y,O,C,R,q,U,N):Xe(V,C,R,!0):(ie&8&&u(y,""),ae&16&&L(Q,y,O,C,R,q,U,N))},ue=(h,g,y,O,C,R,q,U,N)=>{h=h||bn,g=g||bn;const V=h.length,ie=g.length,Q=Math.min(V,ie);let te;for(te=0;te<Q;te++){const ae=g[te]=N?jt(g[te]):st(g[te]);b(h[te],ae,y,null,C,R,q,U,N)}V>ie?Xe(h,C,R,!0,!1,Q):L(g,y,O,C,R,q,U,N,Q)},Re=(h,g,y,O,C,R,q,U,N)=>{let V=0;const ie=g.length;let Q=h.length-1,te=ie-1;for(;V<=Q&&V<=te;){const ae=h[V],he=g[V]=N?jt(g[V]):st(g[V]);if(ln(ae,he))b(ae,he,y,null,C,R,q,U,N);else break;V++}for(;V<=Q&&V<=te;){const ae=h[Q],he=g[te]=N?jt(g[te]):st(g[te]);if(ln(ae,he))b(ae,he,y,null,C,R,q,U,N);else break;Q--,te--}if(V>Q){if(V<=te){const ae=te+1,he=ae<ie?g[ae].el:O;for(;V<=te;)b(null,g[V]=N?jt(g[V]):st(g[V]),y,he,C,R,q,U,N),V++}}else if(V>te)for(;V<=Q;)je(h[V],C,R,!0),V++;else{const ae=V,he=V,ke=new Map;for(V=he;V<=te;V++){const nt=g[V]=N?jt(g[V]):st(g[V]);nt.key!=null&&ke.set(nt.key,V)}let ge,Ze=0;const We=te-he+1;let dt=!1,tt=0;const zn=new Array(We);for(V=0;V<We;V++)zn[V]=0;for(V=ae;V<=Q;V++){const nt=h[V];if(Ze>=We){je(nt,C,R,!0);continue}let vt;if(nt.key!=null)vt=ke.get(nt.key);else for(ge=he;ge<=te;ge++)if(zn[ge-he]===0&&ln(nt,g[ge])){vt=ge;break}vt===void 0?je(nt,C,R,!0):(zn[vt-he]=V+1,vt>=tt?tt=vt:dt=!0,b(nt,g[vt],y,null,C,R,q,U,N),Ze++)}const Dl=dt?Qu(zn):bn;for(ge=Dl.length-1,V=We-1;V>=0;V--){const nt=he+V,vt=g[nt],zl=g[nt+1],Fl=nt+1<ie?zl.el||zl.placeholder:O;zn[V]===0?b(null,vt,y,Fl,C,R,q,U,N):dt&&(ge<0||V!==Dl[ge]?Me(vt,y,Fl,2):ge--)}}},Me=(h,g,y,O,C=null)=>{const{el:R,type:q,transition:U,children:N,shapeFlag:V}=h;if(V&6){Me(h.component.subTree,g,y,O);return}if(V&128){h.suspense.move(g,y,O);return}if(V&64){q.move(h,g,y,Z);return}if(q===ye){i(R,g,y);for(let Q=0;Q<N.length;Q++)Me(N[Q],g,y,O);i(h.anchor,g,y);return}if(q===Gn){m(h,g,y);return}if(O!==2&&V&1&&U)if(O===0)U.beforeEnter(R),i(R,g,y),it(()=>U.enter(R),C);else{const{leave:Q,delayLeave:te,afterLeave:ae}=U,he=()=>{h.ctx.isUnmounted?o(R):i(R,g,y)},ke=()=>{R._isLeaving&&R[It](!0),Q(R,()=>{he(),ae&&ae()})};te?te(R,he,ke):ke()}else i(R,g,y)},je=(h,g,y,O=!1,C=!1)=>{const{type:R,props:q,ref:U,children:N,dynamicChildren:V,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ae}=h;if(Q===-2&&(C=!1),U!=null&&(Dt(),Ln(U,null,y,h,!0),zt()),ae!=null&&(g.renderCache[ae]=void 0),ie&256){g.ctx.deactivate(h);return}const he=ie&1&&te,ke=!sn(h);let ge;if(ke&&(ge=q&&q.onVnodeBeforeUnmount)&&at(ge,g,h),ie&6)gt(h.component,y,O);else{if(ie&128){h.suspense.unmount(y,O);return}he&&bt(h,null,g,"beforeUnmount"),ie&64?h.type.remove(h,g,y,Z,O):V&&!V.hasOnce&&(R!==ye||Q>0&&Q&64)?Xe(V,g,y,!1,!0):(R===ye&&Q&384||!C&&ie&16)&&Xe(N,g,y),O&&Nt(h)}(ke&&(ge=q&&q.onVnodeUnmounted)||he)&&it(()=>{ge&&at(ge,g,h),he&&bt(h,null,g,"unmounted")},y)},Nt=h=>{const{type:g,el:y,anchor:O,transition:C}=h;if(g===ye){Ut(y,O);return}if(g===Gn){_(h);return}const R=()=>{o(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:q,delayLeave:U}=C,N=()=>q(y,R);U?U(h.el,R,N):N()}else R()},Ut=(h,g)=>{let y;for(;h!==g;)y=f(h),o(h),h=y;o(g)},gt=(h,g,y)=>{const{bum:O,scope:C,job:R,subTree:q,um:U,m:N,a:V}=h;Jl(N),Jl(V),O&&mo(O),C.stop(),R&&(R.flags|=8,je(q,h,g,y)),U&&it(U,g),it(()=>{h.isUnmounted=!0},g)},Xe=(h,g,y,O=!1,C=!1,R=0)=>{for(let q=R;q<h.length;q++)je(h[q],g,y,O,C)},T=h=>{if(h.shapeFlag&6)return T(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const g=f(h.anchor||h.el),y=g&&g[uu];return y?f(y):g};let Y=!1;const G=(h,g,y)=>{h==null?g._vnode&&je(g._vnode,null,null,!0):b(g._vnode||null,h,g,null,null,null,y),g._vnode=h,Y||(Y=!0,Nl(),$i(),Y=!1)},Z={p:b,um:je,m:Me,r:Nt,mt:M,mc:L,pc:j,pbc:D,n:T,o:e};let de,_e;return t&&([de,_e]=t(Z)),{render:G,hydrate:de,createApp:Uu(G,de)}}function So({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ss(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function cs(e,t,n=!1){const i=e.children,o=t.children;if(oe(i)&&oe(o))for(let l=0;l<i.length;l++){const r=i[l];let a=o[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[l]=jt(o[l]),a.el=r.el),!n&&a.patchFlag!==-2&&cs(r,a)),a.type===un&&a.patchFlag!==-1&&(a.el=r.el),a.type===He&&!a.el&&(a.el=r.el)}}function Qu(e){const t=e.slice(),n=[0];let i,o,l,r,a;const s=e.length;for(i=0;i<s;i++){const c=e[i];if(c!==0){if(o=n[n.length-1],e[o]<c){t[i]=o,n.push(i);continue}for(l=0,r=n.length-1;l<r;)a=l+r>>1,e[n[a]]<c?l=a+1:r=a;c<e[n[l]]&&(l>0&&(t[i]=n[l-1]),n[l]=i)}}for(l=n.length,r=n[l-1];l-- >0;)n[l]=r,r=t[r];return n}function us(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:us(t)}function Jl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ju=Symbol.for("v-scx"),Xu=()=>$e(Ju);function Zu(e,t){return dl(e,null,t)}function Ke(e,t,n){return dl(e,t,n)}function dl(e,t,n=be){const{immediate:i,deep:o,flush:l,once:r}=n,a=Fe({},n),s=t&&i||!t&&l!=="post";let c;if(xn){if(l==="sync"){const p=Xu();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!s){const p=()=>{};return p.stop=yt,p.resume=yt,p.pause=yt,p}}const u=Ne;a.call=(p,v,b)=>ft(p,u,v,b);let d=!1;l==="post"?a.scheduler=p=>{it(p,u&&u.suspense)}:l!=="sync"&&(d=!0,a.scheduler=(p,v)=>{v?p():rl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=ru(e,t,a);return xn&&(c?c.push(f):s&&f()),f}function ed(e,t,n){const i=this.proxy,o=Ae(e)?e.includes(".")?ds(i,e):()=>i[e]:e.bind(i,i);let l;re(t)?l=t:(l=t.handler,n=t);const r=pi(this),a=dl(o,l.bind(i),n);return r(),a}function ds(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const td=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${Jt(t)}Modifiers`];function nd(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||be;let o=n;const l=t.startsWith("update:"),r=l&&td(i,t.slice(7));r&&(r.trim&&(o=n.map(u=>Ae(u)?u.trim():u)),r.number&&(o=n.map(wc)));let a,s=i[a=po(t)]||i[a=po(et(t))];!s&&l&&(s=i[a=po(Jt(t))]),s&&ft(s,e,6,o);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(c,e,6,o)}}function hs(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const l=e.emits;let r={},a=!1;if(!re(e)){const s=c=>{const u=hs(c,t,!0);u&&(a=!0,Fe(r,u))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!l&&!a?(Se(e)&&i.set(e,null),null):(oe(l)?l.forEach(s=>r[s]=null):Fe(r,l),Se(e)&&i.set(e,r),r)}function lo(e,t){return!e||!si(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,Jt(t))||me(e,t))}function Eo(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[l],slots:r,attrs:a,emit:s,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:v,inheritAttrs:b}=e,k=Bi(e);let E,S;try{if(n.shapeFlag&4){const _=o||i,H=_;E=st(c.call(H,_,u,d,p,f,v)),S=a}else{const _=t;E=st(_.length>1?_(d,{attrs:a,slots:r,emit:s}):_(d,null)),S=t.props?a:id(a)}}catch(_){qn.length=0,di(_,e,1),E=se(He)}let m=E;if(S&&b!==!1){const _=Object.keys(S),{shapeFlag:H}=m;_.length&&H&7&&(l&&_.some(Xo)&&(S=od(S,l)),m=Qt(m,S,!1,!0))}return n.dirs&&(m=Qt(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&ei(m,n.transition),E=m,Bi(k),E}const id=e=>{let t;for(const n in e)(n==="class"||n==="style"||si(n))&&((t||(t={}))[n]=e[n]);return t},od=(e,t)=>{const n={};for(const i in e)(!Xo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function ld(e,t,n){const{props:i,children:o,component:l}=e,{props:r,children:a,patchFlag:s}=t,c=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return i?Xl(i,r,c):!!r;if(s&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(r[f]!==i[f]&&!lo(c,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Xl(i,r,c):!0:!!r;return!1}function Xl(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const l=i[o];if(t[l]!==e[l]&&!lo(n,l))return!0}return!1}function fs({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const ps=e=>e.__isSuspense;function ms(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):cu(e)}const ye=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),qn=[];let ot=null;function W(e=!1){qn.push(ot=e?null:[])}function rd(){qn.pop(),ot=qn[qn.length-1]||null}let ti=1;function Zl(e,t=!1){ti+=e,e<0&&ot&&t&&(ot.hasOnce=!0)}function gs(e){return e.dynamicChildren=ti>0?ot||bn:null,rd(),ti>0&&ot&&ot.push(e),e}function ne(e,t,n,i,o,l){return gs(le(e,t,n,i,o,l,!0))}function Ce(e,t,n,i,o){return gs(se(e,t,n,i,o,!0))}function ni(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const vs=({key:e})=>e??null,Pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||Pe(e)||re(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function le(e,t=null,n=null,i=0,o=null,l=e===ye?0:1,r=!1,a=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&Pi(t),scopeId:Na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ue};return a?(hl(s,n),l&128&&e.normalize(s)):n&&(s.shapeFlag|=Ae(n)?8:16),ti>0&&!r&&ot&&(s.patchFlag>0||l&6)&&s.patchFlag!==32&&ot.push(s),s}const se=ad;function ad(e,t=null,n=null,i=0,o=null,l=!1){if((!e||e===Ru)&&(e=He),ni(e)){const a=Qt(e,t,!0);return n&&hl(a,n),ti>0&&!l&&ot&&(a.shapeFlag&6?ot[ot.indexOf(e)]=a:ot.push(a)),a.patchFlag=-2,a}if(_d(e)&&(e=e.__vccOpts),t){t=Di(t);let{class:a,style:s}=t;a&&!Ae(a)&&(t.class=Je(a)),Se(s)&&(ol(s)&&!oe(s)&&(s=Fe({},s)),t.style=Rn(s))}const r=Ae(e)?1:ps(e)?128:Ua(e)?64:Se(e)?4:re(e)?2:0;return le(e,t,n,i,o,r,l,!0)}function Di(e){return e?ol(e)||ns(e)?Fe({},e):e:null}function Qt(e,t,n=!1,i=!1){const{props:o,ref:l,patchFlag:r,children:a,transition:s}=e,c=t?cd(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&vs(c),ref:t&&t.ref?n&&l?oe(l)?l.concat(Pi(t)):[l,Pi(t)]:Pi(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:s,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s&&i&&ei(u,s.clone(u)),u}function Ft(e=" ",t=0){return se(un,null,e,t)}function sd(e,t){const n=se(Gn,null,e);return n.staticCount=t,n}function Oe(e="",t=!1){return t?(W(),Ce(He,null,e)):se(He,null,e)}function st(e){return e==null||typeof e=="boolean"?se(He):oe(e)?se(ye,null,e.slice()):ni(e)?jt(e):se(un,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function hl(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(oe(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),hl(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ns(t)?t._ctx=Ue:o===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),i&64?(n=16,t=[Ft(t)]):n=8);e.children=t,e.shapeFlag|=n}function cd(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=Je([t.class,i.class]));else if(o==="style")t.style=Rn([t.style,i.style]);else if(si(o)){const l=t[o],r=i[o];r&&l!==r&&!(oe(l)&&l.includes(r))&&(t[o]=l?[].concat(l,r):r)}else o!==""&&(t[o]=i[o])}return t}function at(e,t,n,i=null){ft(e,t,7,[n,i])}const ud=Xa();let dd=0;function hd(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||ud,l={uid:dd++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:os(i,o),emitsOptions:hs(i,o),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=nd.bind(null,l),e.ce&&e.ce(l),l}let Ne=null;const Ht=()=>Ne||Ue;let Gi,jo;{const e=Ji(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),l=>{o.length>1?o.forEach(r=>r(l)):o[0](l)}};Gi=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),jo=t("__VUE_SSR_SETTERS__",n=>xn=n)}const pi=e=>{const t=Ne;return Gi(e),e.scope.on(),()=>{e.scope.off(),Gi(t)}},er=()=>{Ne&&Ne.scope.off(),Gi(null)};function _s(e){return e.vnode.shapeFlag&4}let xn=!1;function fd(e,t=!1,n=!1){t&&jo(t);const{props:i,children:o}=e.vnode,l=_s(e);$u(e,i,l,t),Gu(e,o,n||t);const r=l?pd(e,t):void 0;return t&&jo(!1),r}function pd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Du);const{setup:i}=n;if(i){Dt();const o=e.setupContext=i.length>1?gd(e):null,l=pi(e),r=ui(i,e,0,[e.props,o]),a=aa(r);if(zt(),l(),(a||e.sp)&&!sn(e)&&al(e),a){if(r.then(er,er),t)return r.then(s=>{tr(e,s)}).catch(s=>{di(s,e,0)});e.asyncDep=r}else tr(e,r)}else bs(e)}function tr(e,t,n){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=Pa(t)),bs(e)}function bs(e,t,n){const i=e.type;e.render||(e.render=i.render||yt);{const o=pi(e);Dt();try{zu(e)}finally{zt(),o()}}}const md={get(e,t){return qe(e,"get",""),e[t]}};function gd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,md),slots:e.slots,emit:e.emit,expose:t}}function ro(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Pa(Jc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}})):e.proxy}function vd(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function _d(e){return re(e)&&"__vccOpts"in e}const P=(e,t)=>ou(e,t,xn);function K(e,t,n){const i=arguments.length;return i===2?Se(t)&&!oe(t)?ni(t)?se(e,null,[t]):se(e,t):se(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ni(n)&&(n=[n]),se(e,t,n))}const bd="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wo;const nr=typeof window<"u"&&window.trustedTypes;if(nr)try{Wo=nr.createPolicy("vue",{createHTML:e=>e})}catch{}const ys=Wo?e=>Wo.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",wd="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,ir=Tt&&Tt.createElement("template"),kd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?Tt.createElementNS(yd,e):t==="mathml"?Tt.createElementNS(wd,e):n?Tt.createElement(e,{is:n}):Tt.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>Tt.createTextNode(e),createComment:e=>Tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,l){const r=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{ir.innerHTML=ys(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=ir.content;if(i==="svg"||i==="mathml"){const s=a.firstChild;for(;s.firstChild;)a.appendChild(s.firstChild);a.removeChild(s)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",Mn="animation",ii=Symbol("_vtc"),ws={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ld=Fe({},$a,ws),Sd=e=>(e.displayName="Transition",e.props=Ld,e),fl=Sd((e,{slots:t})=>K(fu,Ed(e),t)),Zt=(e,t=[])=>{oe(e)?e.forEach(n=>n(...t)):e&&e(...t)},or=e=>e?oe(e)?e.some(t=>t.length>1):e.length>1:!1;function Ed(e){const t={};for(const w in e)w in ws||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:l=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:s=l,appearActiveClass:c=r,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=Cd(o),b=v&&v[0],k=v&&v[1],{onBeforeEnter:E,onEnter:S,onEnterCancelled:m,onLeave:_,onLeaveCancelled:H,onBeforeAppear:X=E,onAppear:z=S,onAppearCancelled:L=m}=t,A=(w,F,M,$)=>{w._enterCancelled=$,en(w,F?u:a),en(w,F?c:r),M&&M()},D=(w,F)=>{w._isLeaving=!1,en(w,d),en(w,p),en(w,f),F&&F()},B=w=>(F,M)=>{const $=w?z:S,I=()=>A(F,w,M);Zt($,[F,I]),lr(()=>{en(F,w?s:l),St(F,w?u:a),or($)||rr(F,i,b,I)})};return Fe(t,{onBeforeEnter(w){Zt(E,[w]),St(w,l),St(w,r)},onBeforeAppear(w){Zt(X,[w]),St(w,s),St(w,c)},onEnter:B(!1),onAppear:B(!0),onLeave(w,F){w._isLeaving=!0;const M=()=>D(w,F);St(w,d),w._enterCancelled?(St(w,f),cr()):(cr(),St(w,f)),lr(()=>{w._isLeaving&&(en(w,d),St(w,p),or(_)||rr(w,i,k,M))}),Zt(_,[w,M])},onEnterCancelled(w){A(w,!1,void 0,!0),Zt(m,[w])},onAppearCancelled(w){A(w,!0,void 0,!0),Zt(L,[w])},onLeaveCancelled(w){D(w),Zt(H,[w])}})}function Cd(e){if(e==null)return null;if(Se(e))return[Co(e.enter),Co(e.leave)];{const t=Co(e);return[t,t]}}function Co(e){return kc(e)}function St(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ii]||(e[ii]=new Set)).add(t)}function en(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[ii];n&&(n.delete(t),n.size||(e[ii]=void 0))}function lr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xd=0;function rr(e,t,n,i){const o=e._endId=++xd,l=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(l,n);const{type:r,timeout:a,propCount:s}=Td(e,t);if(!r)return i();const c=r+"end";let u=0;const d=()=>{e.removeEventListener(c,f),l()},f=p=>{p.target===e&&++u>=s&&d()};setTimeout(()=>{u<s&&d()},a+1),e.addEventListener(c,f)}function Td(e,t){const n=window.getComputedStyle(e),i=v=>(n[v]||"").split(", "),o=i(`${$t}Delay`),l=i(`${$t}Duration`),r=ar(o,l),a=i(`${Mn}Delay`),s=i(`${Mn}Duration`),c=ar(a,s);let u=null,d=0,f=0;t===$t?r>0&&(u=$t,d=r,f=l.length):t===Mn?c>0&&(u=Mn,d=c,f=s.length):(d=Math.max(r,c),u=d>0?r>c?$t:Mn:null,f=u?u===$t?l.length:s.length:0);const p=u===$t&&/\b(transform|all)(,|$)/.test(i(`${$t}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function ar(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>sr(n)+sr(e[i])))}function sr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function cr(){return document.body.offsetHeight}function Id(e,t,n){const i=e[ii];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const qi=Symbol("_vod"),ks=Symbol("_vsh"),Ki={beforeMount(e,{value:t},{transition:n}){e[qi]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Vn(e,!0),i.enter(e)):i.leave(e,()=>{Vn(e,!1)}):Vn(e,t))},beforeUnmount(e,{value:t}){Vn(e,t)}};function Vn(e,t){e.style.display=t?e[qi]:"none",e[ks]=!t}const Ad=Symbol(""),Rd=/(^|;)\s*display\s*:/;function Od(e,t,n){const i=e.style,o=Ae(n);let l=!1;if(n&&!o){if(t)if(Ae(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&zi(i,a,"")}else for(const r in t)n[r]==null&&zi(i,r,"");for(const r in n)r==="display"&&(l=!0),zi(i,r,n[r])}else if(o){if(t!==n){const r=i[Ad];r&&(n+=";"+r),i.cssText=n,l=Rd.test(n)}}else t&&e.removeAttribute("style");qi in e&&(e[qi]=l?i.display:"",e[ks]&&(i.display="none"))}const ur=/\s*!important$/;function zi(e,t,n){if(oe(n))n.forEach(i=>zi(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Pd(e,t);ur.test(n)?e.setProperty(Jt(i),n.replace(ur,""),"important"):e[i]=n}}const dr=["Webkit","Moz","ms"],xo={};function Pd(e,t){const n=xo[t];if(n)return n;let i=et(t);if(i!=="filter"&&i in e)return xo[t]=i;i=ci(i);for(let o=0;o<dr.length;o++){const l=dr[o]+i;if(l in e)return xo[t]=l}return t}const hr="http://www.w3.org/1999/xlink";function fr(e,t,n,i,o,l=Tc(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hr,t.slice(6,t.length)):e.setAttributeNS(hr,t,n):n==null||l&&!da(n)?e.removeAttribute(t):e.setAttribute(t,l?"":Mt(n)?String(n):n)}function pr(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ys(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,s=n==null?e.type==="checkbox"?"on":"":String(n);(a!==s||!("_value"in e))&&(e.value=s),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=da(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Dd(e,t,n,i){e.addEventListener(t,n,i)}function zd(e,t,n,i){e.removeEventListener(t,n,i)}const mr=Symbol("_vei");function Fd(e,t,n,i,o=null){const l=e[mr]||(e[mr]={}),r=l[t];if(i&&r)r.value=i;else{const[a,s]=Md(t);if(i){const c=l[t]=Nd(i,o);Dd(e,a,c,s)}else r&&(zd(e,a,r,s),l[t]=void 0)}}const gr=/(?:Once|Passive|Capture)$/;function Md(e){let t;if(gr.test(e)){t={};let i;for(;i=e.match(gr);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let To=0;const Vd=Promise.resolve(),Hd=()=>To||(Vd.then(()=>To=0),To=Date.now());function Nd(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ft(Ud(i,n.value),t,5,[i])};return n.value=e,n.attached=Hd(),n}function Ud(e,t){if(oe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$d=(e,t,n,i,o,l)=>{const r=o==="svg";t==="class"?Id(e,i,r):t==="style"?Od(e,n,i):si(t)?Xo(t)||Fd(e,t,n,i,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bd(e,t,i,r))?(pr(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fr(e,t,i,r,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(i))?pr(e,et(t),i,l,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),fr(e,t,i,r))};function Bd(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return vr(t)&&Ae(n)?!1:t in e}const jd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wd=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=o=>{if(!("key"in o))return;const l=Jt(o.key);if(t.some(r=>r===l||jd[r]===l))return e(o)})},Gd=Fe({patchProp:$d},kd);let Io,_r=!1;function qd(){return Io=_r?Io:Ku(Gd),_r=!0,Io}const Kd=(...e)=>{const t=qd().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=Qd(i);if(o)return n(o,!0,Yd(o))},t};function Yd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Qd(e){return Ae(e)?document.querySelector(e):e}var mi=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),Jd=/.md((\?|#).*)?$/,Xd=(e,t="/")=>mi(e)||e.startsWith("/")&&!e.startsWith(t)&&!Jd.test(e),gi=e=>/^(https?:)?\/\//.test(e),br=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},Zd="http://.",eh=(e,t)=>{if(!e.startsWith("/")&&t){const n=t.slice(0,t.lastIndexOf("/"));return br(new URL(`${n}/${e}`,Zd).pathname)}return br(e)},th=(e,t)=>{const n=Object.keys(e).sort((i,o)=>{const l=o.split("/").length-i.split("/").length;return l!==0?l:o.length-i.length});for(const i of n)if(t.startsWith(i))return i;return"/"},nh=/(#|\?)/,Ls=e=>{const[t,...n]=e.split(nh);return{pathname:t,hashAndQueries:n.join("")}},ih=["link","meta","script","style","noscript","template"],oh=["title","base"],lh=([e,t,n])=>oh.includes(e)?e:ih.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([i,o])=>typeof o=="boolean"?o?[i,""]:null:[i,o]).filter(i=>i!=null).sort(([i],[o])=>i.localeCompare(o)),n]):null,rh=e=>{const t=new Set,n=[];return e.forEach(i=>{const o=lh(i);o&&!t.has(o)&&(t.add(o),n.push(i))}),n},ah=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,Ss=e=>e.endsWith("/")?e.slice(0,-1):e,Es=e=>e.startsWith("/")?e.slice(1):e,pl=e=>Object.prototype.toString.call(e)==="[object Object]",ut=e=>typeof e=="string";const sh="modulepreload",ch=function(e){return"/"+e},yr={},x=function(t,n,i){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=ch(s),s in yr)return;yr[s]=!0;const c=s.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":sh,c||(d.as="script"),d.crossOrigin="",d.href=s,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}function l(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})},uh=JSON.parse("{}"),dh=Object.fromEntries([["/",{loader:()=>x(()=>import("./index.html-CoaU1u25.js"),__vite__mapDeps([0,1])),meta:{title:"LVGL Master Designer"}}],["/get-started.html",{loader:()=>x(()=>import("./get-started.html-DfVrdqhG.js"),__vite__mapDeps([2,3])),meta:{title:"Getting Started"}}],["/guide/0_installation.html",{loader:()=>x(()=>import("./0_installation.html-DGa1fzlW.js"),[]),meta:{title:"Installation"}}],["/guide/100_transplant.html",{loader:()=>x(()=>import("./100_transplant.html-fYYH4T9r.js"),[]),meta:{title:"Code Transplant"}}],["/guide/10_image_fs.html",{loader:()=>x(()=>import("./10_image_fs.html-DzvUveu8.js"),[]),meta:{title:"Use External Image File as Source"}}],["/guide/1_intro.html",{loader:()=>x(()=>import("./1_intro.html-DB6_m87D.js"),[]),meta:{title:"Introduction"}}],["/guide/3_resource.html",{loader:()=>x(()=>import("./3_resource.html-CUkh1Y4j.js"),__vite__mapDeps([4,5])),meta:{title:"Resource Management"}}],["/guide/4_composite.html",{loader:()=>x(()=>import("./4_composite.html-CCEUje6X.js"),__vite__mapDeps([6,7])),meta:{title:"Template Component"}}],["/guide/5_hide_lock.html",{loader:()=>x(()=>import("./5_hide_lock.html-DVvPl1T7.js"),__vite__mapDeps([8,9])),meta:{title:"Hide and Lock"}}],["/guide/7_scr_mgmt.html",{loader:()=>x(()=>import("./7_scr_mgmt.html-DkFiSlYB.js"),__vite__mapDeps([10,11])),meta:{title:"Screen Management"}}],["/guide/9_comm.html",{loader:()=>x(()=>import("./9_comm.html-DEaiQ5Yk.js"),[]),meta:{title:"Communication Commands and Events"}}],["/guide/",{loader:()=>x(()=>import("./index.html-CEHGGYsu.js"),[]),meta:{title:"Documentation"}}],["/guide/build_mode.html",{loader:()=>x(()=>import("./build_mode.html-BySc0hVD.js"),[]),meta:{title:"Build Mode"}}],["/guide/design.html",{loader:()=>x(()=>import("./design.html-DOgt6CyB.js"),__vite__mapDeps([12,13])),meta:{title:"Design"}}],["/guide/faq.html",{loader:()=>x(()=>import("./faq.html-eBG_zbkQ.js"),[]),meta:{title:"FAQ"}}],["/guide/flag-and-state.html",{loader:()=>x(()=>import("./flag-and-state.html-CIDsEWFJ.js"),__vite__mapDeps([14,15])),meta:{title:"Flag and State"}}],["/guide/globalcomponents.html",{loader:()=>x(()=>import("./globalcomponents.html-CkOZMKVZ.js"),__vite__mapDeps([16,17])),meta:{title:"Global Components"}}],["/zh/",{loader:()=>x(()=>import("./index.html-oY-fR6_a.js"),__vite__mapDeps([18,1])),meta:{title:"LVGL设计大师"}}],["/zh/get-started.html",{loader:()=>x(()=>import("./get-started.html-Cw-Usv0c.js"),__vite__mapDeps([19,3])),meta:{title:"快速开始"}}],["/release/release-latest.html",{loader:()=>x(()=>import("./release-latest.html-D14M70aE.js"),[]),meta:{title:"Latest Release"}}],["/release/release-v0.13.0.html",{loader:()=>x(()=>import("./release-v0.13.0.html-rvMOrsuI.js"),[]),meta:{title:"0.13.0"}}],["/release/release-v0.13.1.html",{loader:()=>x(()=>import("./release-v0.13.1.html-xuiVWSSd.js"),[]),meta:{title:"0.13.1"}}],["/release/release-v0.14.0.html",{loader:()=>x(()=>import("./release-v0.14.0.html-CNaDsd5G.js"),[]),meta:{title:"0.14.0"}}],["/release/release-v0.15.0.html",{loader:()=>x(()=>import("./release-v0.15.0.html-CZVWCPM5.js"),__vite__mapDeps([20,21])),meta:{title:"0.15.0"}}],["/release/release-v0.16.0.html",{loader:()=>x(()=>import("./release-v0.16.0.html-BKHUtHUI.js"),[]),meta:{title:"0.16.0"}}],["/release/release-v0.17.0.html",{loader:()=>x(()=>import("./release-v0.17.0.html-C7sob-XX.js"),[]),meta:{title:"0.17.0"}}],["/release/release-v0.17.1.html",{loader:()=>x(()=>import("./release-v0.17.1.html-BCIlkdmI.js"),[]),meta:{title:"0.17.1"}}],["/release/release-v0.18.0.html",{loader:()=>x(()=>import("./release-v0.18.0.html-Co39LEMA.js"),[]),meta:{title:"0.18.0"}}],["/release/release-v0.20.0.html",{loader:()=>x(()=>import("./release-v0.20.0.html-BvVpkDsD.js"),[]),meta:{title:"0.20.0"}}],["/release/release-v0.21.0.html",{loader:()=>x(()=>import("./release-v0.21.0.html-7tGp-z-s.js"),[]),meta:{title:"0.21.0"}}],["/release/release-v0.22.0.html",{loader:()=>x(()=>import("./release-v0.22.0.html-VybOKJAz.js"),[]),meta:{title:"0.22.0"}}],["/release/release-v0.25.0.html",{loader:()=>x(()=>import("./release-v0.25.0.html-BBv8JgJ-.js"),[]),meta:{title:"0.25.0"}}],["/release/release-v0.26.0.html",{loader:()=>x(()=>import("./release-v0.26.0.html-Dfi6siKN.js"),[]),meta:{title:"0.26.0"}}],["/release/release-v0.27.0.html",{loader:()=>x(()=>import("./release-v0.27.0.html-DPjYUeKO.js"),[]),meta:{title:"0.27.0"}}],["/release/release-v0.28.0.html",{loader:()=>x(()=>import("./release-v0.28.0.html-76PmkEBI.js"),[]),meta:{title:"0.28.0"}}],["/release/release-v0.30.0.html",{loader:()=>x(()=>import("./release-v0.30.0.html-BDYPt3Mp.js"),[]),meta:{title:"0.30.0"}}],["/release/release-v0.32.0.html",{loader:()=>x(()=>import("./release-v0.32.0.html-BDKqeFFf.js"),[]),meta:{title:"0.32.0"}}],["/release/release-v0.33.0.html",{loader:()=>x(()=>import("./release-v0.33.0.html-NgElSeqy.js"),[]),meta:{title:"0.33.0"}}],["/release/release-v0.33.1.html",{loader:()=>x(()=>import("./release-v0.33.1.html-D47amUkr.js"),[]),meta:{title:"0.33.1"}}],["/release/release-v0.34.0.html",{loader:()=>x(()=>import("./release-v0.34.0.html-Bubd06nx.js"),[]),meta:{title:"0.34.0"}}],["/release/release-v0.35.0.html",{loader:()=>x(()=>import("./release-v0.35.0.html-BL9rU6h-.js"),[]),meta:{title:"0.35.0"}}],["/release/release-v0.36.0.html",{loader:()=>x(()=>import("./release-v0.36.0.html--yLJMbuG.js"),[]),meta:{title:"0.36.0"}}],["/release/release-v0.37.0.html",{loader:()=>x(()=>import("./release-v0.37.0.html-Zq6cS-UG.js"),__vite__mapDeps([22,23])),meta:{title:"0.37.0"}}],["/release/release-v0.38.0.html",{loader:()=>x(()=>import("./release-v0.38.0.html-Dwjr-eEz.js"),[]),meta:{title:"0.38.0"}}],["/release/release-v0.39.0.html",{loader:()=>x(()=>import("./release-v0.39.0.html-sYxDN0bb.js"),[]),meta:{title:"0.39.0"}}],["/release/release-v0.40.0.html",{loader:()=>x(()=>import("./release-v0.40.0.html-B10P2blP.js"),[]),meta:{title:"0.40.0"}}],["/guide/advanced/layout.html",{loader:()=>x(()=>import("./layout.html-DuQ8HwCs.js"),__vite__mapDeps([24,25])),meta:{title:"Layout"}}],["/guide/animation/12_lottie.html",{loader:()=>x(()=>import("./12_lottie.html-DvqtIOWy.js"),[]),meta:{title:"Lottie Animation"}}],["/guide/animation/gif.html",{loader:()=>x(()=>import("./gif.html-BQVDlr3W.js"),[]),meta:{title:"GIF Animated Image"}}],["/guide/animation/screen_animation.html",{loader:()=>x(()=>import("./screen_animation.html-1f7O6M9a.js"),__vite__mapDeps([26,27])),meta:{title:"Screen Load Animation"}}],["/guide/animation/widget_animation.html",{loader:()=>x(()=>import("./widget_animation.html-D_OK0tB5.js"),__vite__mapDeps([28,29])),meta:{title:"Widget Animation"}}],["/guide/hoc/0_intro.html",{loader:()=>x(()=>import("./0_intro.html-Bic13rV0.js"),__vite__mapDeps([30,31])),meta:{title:"Introduction"}}],["/guide/hoc/1_statebtn.html",{loader:()=>x(()=>import("./1_statebtn.html-C5m6sITA.js"),__vite__mapDeps([32,33])),meta:{title:"State Button"}}],["/guide/hoc/2_labelslider.html",{loader:()=>x(()=>import("./2_labelslider.html-D-K922Mv.js"),__vite__mapDeps([34,35])),meta:{title:"Label Slider"}}],["/guide/hoc/3_valueslider.html",{loader:()=>x(()=>import("./3_valueslider.html-LMt8yvMu.js"),[]),meta:{title:"Value Slider"}}],["/guide/hoc/4_checkgroup.html",{loader:()=>x(()=>import("./4_checkgroup.html-JjyZtgxw.js"),[]),meta:{title:"Check Group & Radio Group"}}],["/guide/hoc/5_drawer.html",{loader:()=>x(()=>import("./5_drawer.html-B8MB0PHs.js"),[]),meta:{title:"Drawer"}}],["/guide/hoc/6_statusbar.html",{loader:()=>x(()=>import("./6_statusbar.html-CXr2eDFU.js"),[]),meta:{title:"StatusBar"}}],["/guide/hoc/7_navigatebar.html",{loader:()=>x(()=>import("./7_navigatebar.html-CVOHrctY.js"),[]),meta:{title:"NavigateBar"}}],["/guide/hoc/",{loader:()=>x(()=>import("./index.html-G1yLDFH1.js"),[]),meta:{title:"Higher Order Components"}}],["/zh/guide/0_installation.html",{loader:()=>x(()=>import("./0_installation.html-fsX00snS.js"),[]),meta:{title:"安装"}}],["/zh/guide/100_transplant.html",{loader:()=>x(()=>import("./100_transplant.html-BYIQShQE.js"),[]),meta:{title:"代码移植"}}],["/zh/guide/10_image_fs.html",{loader:()=>x(()=>import("./10_image_fs.html-D9JwUd3e.js"),[]),meta:{title:"使用外部图像文件作为源"}}],["/zh/guide/1_intro.html",{loader:()=>x(()=>import("./1_intro.html-BGoULgWW.js"),[]),meta:{title:"介绍"}}],["/zh/guide/3_resource.html",{loader:()=>x(()=>import("./3_resource.html-CR_F4r7-.js"),__vite__mapDeps([36,5])),meta:{title:"资源管理"}}],["/zh/guide/4_composite.html",{loader:()=>x(()=>import("./4_composite.html-DlJE9kws.js"),__vite__mapDeps([37,7])),meta:{title:"模板组件"}}],["/zh/guide/5_hide_lock.html",{loader:()=>x(()=>import("./5_hide_lock.html-DD0vGxfY.js"),__vite__mapDeps([38,9])),meta:{title:"隐藏和锁定"}}],["/zh/guide/7_scr_mgmt.html",{loader:()=>x(()=>import("./7_scr_mgmt.html-C0rlGO6c.js"),__vite__mapDeps([39,11])),meta:{title:"屏幕管理"}}],["/zh/guide/9_comm.html",{loader:()=>x(()=>import("./9_comm.html-Pw6NIONK.js"),[]),meta:{title:"通信命令和事件"}}],["/zh/guide/",{loader:()=>x(()=>import("./index.html-szncj6bE.js"),[]),meta:{title:"文档"}}],["/zh/guide/build_mode.html",{loader:()=>x(()=>import("./build_mode.html-CtGSRGMU.js"),[]),meta:{title:"构建模式"}}],["/zh/guide/design.html",{loader:()=>x(()=>import("./design.html-C-Bz0Znt.js"),__vite__mapDeps([40,13])),meta:{title:"设计"}}],["/zh/guide/faq.html",{loader:()=>x(()=>import("./faq.html-DEVzbQcc.js"),[]),meta:{title:"常见问题"}}],["/zh/guide/flag-and-state.html",{loader:()=>x(()=>import("./flag-and-state.html-0-uMc6pn.js"),__vite__mapDeps([41,15])),meta:{title:"标志与状态"}}],["/zh/guide/globalcomponents.html",{loader:()=>x(()=>import("./globalcomponents.html-Ci1qP0Xv.js"),__vite__mapDeps([42,17])),meta:{title:"全局组件"}}],["/zh/release/release-latest.html",{loader:()=>x(()=>import("./release-latest.html-Cf0b41r5.js"),[]),meta:{title:"最新发布"}}],["/zh/release/release-v0.13.0.html",{loader:()=>x(()=>import("./release-v0.13.0.html-DeP4BYjI.js"),[]),meta:{title:"0.13.0"}}],["/zh/release/release-v0.13.1.html",{loader:()=>x(()=>import("./release-v0.13.1.html-D8fwdC08.js"),[]),meta:{title:"0.13.1"}}],["/zh/release/release-v0.14.0.html",{loader:()=>x(()=>import("./release-v0.14.0.html-DeDz2MpL.js"),[]),meta:{title:"0.14.0"}}],["/zh/release/release-v0.15.0.html",{loader:()=>x(()=>import("./release-v0.15.0.html-CQeVz-oi.js"),__vite__mapDeps([43,21])),meta:{title:"0.15.0"}}],["/zh/release/release-v0.16.0.html",{loader:()=>x(()=>import("./release-v0.16.0.html-FYbUpnS6.js"),[]),meta:{title:"0.16.0"}}],["/zh/release/release-v0.17.0.html",{loader:()=>x(()=>import("./release-v0.17.0.html-BNq7KlHq.js"),[]),meta:{title:"0.17.0"}}],["/zh/release/release-v0.17.1.html",{loader:()=>x(()=>import("./release-v0.17.1.html-tzGY2McV.js"),[]),meta:{title:"0.17.1"}}],["/zh/release/release-v0.18.0.html",{loader:()=>x(()=>import("./release-v0.18.0.html-DSdZmhHa.js"),[]),meta:{title:"0.18.0"}}],["/zh/release/release-v0.20.0.html",{loader:()=>x(()=>import("./release-v0.20.0.html-e6scwCWs.js"),[]),meta:{title:"0.20.0"}}],["/zh/release/release-v0.21.0.html",{loader:()=>x(()=>import("./release-v0.21.0.html-Ccp1t3Li.js"),[]),meta:{title:"0.21.0"}}],["/zh/release/release-v0.22.0.html",{loader:()=>x(()=>import("./release-v0.22.0.html-DZ7Tepen.js"),[]),meta:{title:"0.22.0"}}],["/zh/release/release-v0.25.0.html",{loader:()=>x(()=>import("./release-v0.25.0.html-8hCXFv0m.js"),[]),meta:{title:"0.25.0"}}],["/zh/release/release-v0.26.0.html",{loader:()=>x(()=>import("./release-v0.26.0.html-tLZtTaH5.js"),[]),meta:{title:"0.26.0"}}],["/zh/release/release-v0.27.0.html",{loader:()=>x(()=>import("./release-v0.27.0.html-bmpdexx3.js"),[]),meta:{title:"0.27.0"}}],["/zh/release/release-v0.28.0.html",{loader:()=>x(()=>import("./release-v0.28.0.html-N80JgB9H.js"),[]),meta:{title:"0.28.0"}}],["/zh/release/release-v0.30.0.html",{loader:()=>x(()=>import("./release-v0.30.0.html-BDHKbW1S.js"),[]),meta:{title:"0.30.0"}}],["/zh/release/release-v0.32.0.html",{loader:()=>x(()=>import("./release-v0.32.0.html-XyVdgCGz.js"),[]),meta:{title:"0.32.0"}}],["/zh/release/release-v0.33.0.html",{loader:()=>x(()=>import("./release-v0.33.0.html-DLv21dnd.js"),[]),meta:{title:"0.33.0"}}],["/zh/release/release-v0.33.1.html",{loader:()=>x(()=>import("./release-v0.33.1.html-CDtYn_bd.js"),[]),meta:{title:"0.33.1"}}],["/zh/release/release-v0.34.0.html",{loader:()=>x(()=>import("./release-v0.34.0.html-CnH2SMQ3.js"),[]),meta:{title:"0.34.0"}}],["/zh/release/release-v0.35.0.html",{loader:()=>x(()=>import("./release-v0.35.0.html-BDWPB7dS.js"),[]),meta:{title:"0.35.0"}}],["/zh/release/release-v0.36.0.html",{loader:()=>x(()=>import("./release-v0.36.0.html-WIcgKJYw.js"),[]),meta:{title:"0.36.0"}}],["/zh/release/release-v0.37.0.html",{loader:()=>x(()=>import("./release-v0.37.0.html-BMAhoL_y.js"),__vite__mapDeps([44,23])),meta:{title:"0.37.0"}}],["/zh/release/release-v0.38.0.html",{loader:()=>x(()=>import("./release-v0.38.0.html-Cq-e2aEW.js"),[]),meta:{title:"0.38.0"}}],["/zh/release/release-v0.39.0.html",{loader:()=>x(()=>import("./release-v0.39.0.html-ovkk5TPq.js"),[]),meta:{title:"0.39.0"}}],["/zh/release/release-v0.40.0.html",{loader:()=>x(()=>import("./release-v0.40.0.html-BlHvOZpS.js"),[]),meta:{title:"0.40.0"}}],["/zh/guide/animation/12_lottie.html",{loader:()=>x(()=>import("./12_lottie.html-HKOsiXUa.js"),[]),meta:{title:"Lottie动画"}}],["/zh/guide/animation/gif.html",{loader:()=>x(()=>import("./gif.html-0ObOyUYj.js"),[]),meta:{title:"GIF动画图像"}}],["/zh/guide/animation/screen_animation.html",{loader:()=>x(()=>import("./screen_animation.html-Bk8CLHmE.js"),__vite__mapDeps([45,27])),meta:{title:"屏幕加载动画"}}],["/zh/guide/animation/widget_animation.html",{loader:()=>x(()=>import("./widget_animation.html-61oVDMxj.js"),__vite__mapDeps([46,29])),meta:{title:"组件动画"}}],["/zh/guide/advanced/layout.html",{loader:()=>x(()=>import("./layout.html-bDyjDWVp.js"),__vite__mapDeps([47,25])),meta:{title:"布局"}}],["/zh/guide/hoc/0_intro.html",{loader:()=>x(()=>import("./0_intro.html-C4fnB-6X.js"),__vite__mapDeps([48,31])),meta:{title:"介绍"}}],["/zh/guide/hoc/1_statebtn.html",{loader:()=>x(()=>import("./1_statebtn.html-D6Qe7UWz.js"),__vite__mapDeps([49,33])),meta:{title:"状态按钮"}}],["/zh/guide/hoc/2_labelslider.html",{loader:()=>x(()=>import("./2_labelslider.html-BG8B5Qba.js"),__vite__mapDeps([50,35])),meta:{title:"标签滑块"}}],["/zh/guide/hoc/3_valueslider.html",{loader:()=>x(()=>import("./3_valueslider.html-CIKHYb8W.js"),[]),meta:{title:"数值滑块"}}],["/zh/guide/hoc/4_checkgroup.html",{loader:()=>x(()=>import("./4_checkgroup.html-UY6e1yFw.js"),[]),meta:{title:"复选框组和单选框组"}}],["/zh/guide/hoc/5_drawer.html",{loader:()=>x(()=>import("./5_drawer.html-DZIpAfX-.js"),[]),meta:{title:"抽屉"}}],["/zh/guide/hoc/6_statusbar.html",{loader:()=>x(()=>import("./6_statusbar.html-CTNOYu5d.js"),[]),meta:{title:"状态栏"}}],["/zh/guide/hoc/7_navigatebar.html",{loader:()=>x(()=>import("./7_navigatebar.html-314HVpgF.js"),[]),meta:{title:"导航栏"}}],["/zh/guide/hoc/",{loader:()=>x(()=>import("./index.html-DL49H9aR.js"),[]),meta:{title:"高阶组件"}}],["/404.html",{loader:()=>x(()=>import("./404.html-D34xbO50.js"),[]),meta:{title:""}}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function Cs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cs(e.default)}const pe=Object.assign;function Ao(e,t){const n={};for(const i in t){const o=t[i];n[i]=pt(o)?o.map(e):e(o)}return n}const Kn=()=>{},pt=Array.isArray,xs=/#/g,fh=/&/g,ph=/\//g,mh=/=/g,gh=/\?/g,Ts=/\+/g,vh=/%5B/g,_h=/%5D/g,Is=/%5E/g,bh=/%60/g,As=/%7B/g,yh=/%7C/g,Rs=/%7D/g,wh=/%20/g;function ml(e){return encodeURI(""+e).replace(yh,"|").replace(vh,"[").replace(_h,"]")}function kh(e){return ml(e).replace(As,"{").replace(Rs,"}").replace(Is,"^")}function Go(e){return ml(e).replace(Ts,"%2B").replace(wh,"+").replace(xs,"%23").replace(fh,"%26").replace(bh,"`").replace(As,"{").replace(Rs,"}").replace(Is,"^")}function Lh(e){return Go(e).replace(mh,"%3D")}function Sh(e){return ml(e).replace(xs,"%23").replace(gh,"%3F")}function Eh(e){return e==null?"":Sh(e).replace(ph,"%2F")}function oi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ch=/\/$/,xh=e=>e.replace(Ch,"");function Ro(e,t,n="/"){let i,o={},l="",r="";const a=t.indexOf("#");let s=t.indexOf("?");return a<s&&a>=0&&(s=-1),s>-1&&(i=t.slice(0,s),l=t.slice(s+1,a>-1?a:t.length),o=e(l)),a>-1&&(i=i||t.slice(0,a),r=t.slice(a,t.length)),i=Rh(i??t,n),{fullPath:i+(l&&"?")+l+r,path:i,query:o,hash:oi(r)}}function Th(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ih(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&Tn(t.matched[i],n.matched[o])&&Os(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Os(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ah(e[n],t[n]))return!1;return!0}function Ah(e,t){return pt(e)?kr(e,t):pt(t)?kr(t,e):e===t}function kr(e,t){return pt(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Rh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let l=n.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+i.slice(r).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var li;(function(e){e.pop="pop",e.push="push"})(li||(li={}));var Yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yn||(Yn={}));function Oh(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),xh(e)}const Ph=/^[^#]+#/;function Dh(e,t){return e.replace(Ph,"#")+t}function zh(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const ao=()=>({left:window.scrollX,top:window.scrollY});function Fh(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=zh(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Lr(e,t){return(history.state?history.state.position-t:-1)+e}const qo=new Map;function Mh(e,t){qo.set(e,t)}function Vh(e){const t=qo.get(e);return qo.delete(e),t}let Hh=()=>location.protocol+"//"+location.host;function Ps(e,t){const{pathname:n,search:i,hash:o}=t,l=e.indexOf("#");if(l>-1){let a=o.includes(e.slice(l))?e.slice(l).length:1,s=o.slice(a);return s[0]!=="/"&&(s="/"+s),wr(s,"")}return wr(n,e)+i+o}function Nh(e,t,n,i){let o=[],l=[],r=null;const a=({state:f})=>{const p=Ps(e,location),v=n.value,b=t.value;let k=0;if(f){if(n.value=p,t.value=f,r&&r===v){r=null;return}k=b?f.position-b.position:0}else i(p);o.forEach(E=>{E(n.value,v,{delta:k,type:li.pop,direction:k?k>0?Yn.forward:Yn.back:Yn.unknown})})};function s(){r=n.value}function c(f){o.push(f);const p=()=>{const v=o.indexOf(f);v>-1&&o.splice(v,1)};return l.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:ao()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:s,listen:c,destroy:d}}function Sr(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?ao():null}}function Uh(e){const{history:t,location:n}=window,i={value:Ps(e,n)},o={value:t.state};o.value||l(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(s,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:Hh()+e+s;try{t[u?"replaceState":"pushState"](c,"",f),o.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function r(s,c){const u=pe({},t.state,Sr(o.value.back,s,o.value.forward,!0),c,{position:o.value.position});l(s,u,!0),i.value=s}function a(s,c){const u=pe({},o.value,t.state,{forward:s,scroll:ao()});l(u.current,u,!0);const d=pe({},Sr(i.value,s,null),{position:u.position+1},c);l(s,d,!1),i.value=s}return{location:i,state:o,push:a,replace:r}}function $h(e){e=Oh(e);const t=Uh(e),n=Nh(e,t.state,t.location,t.replace);function i(l,r=!0){r||n.pauseListeners(),history.go(l)}const o=pe({location:"",base:e,go:i,createHref:Dh.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Bh(e){return typeof e=="string"||e&&typeof e=="object"}function Ds(e){return typeof e=="string"||typeof e=="symbol"}const zs=Symbol("");var Er;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Er||(Er={}));function In(e,t){return pe(new Error,{type:e,[zs]:!0},t)}function Et(e,t){return e instanceof Error&&zs in e&&(t==null||!!(e.type&t))}const Cr="[^/]+?",jh={sensitive:!1,strict:!1,start:!0,end:!0},Wh=/[.+*?^${}()[\]/\\]/g;function Gh(e,t){const n=pe({},jh,t),i=[];let o=n.start?"^":"";const l=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(Wh,"\\$&"),p+=40;else if(f.type===1){const{value:v,repeatable:b,optional:k,regexp:E}=f;l.push({name:v,repeatable:b,optional:k});const S=E||Cr;if(S!==Cr){p+=10;try{new RegExp(`(${S})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+_.message)}}let m=b?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(m=k&&c.length<2?`(?:/${m})`:"/"+m),k&&(m+="?"),o+=m,p+=20,k&&(p+=-8),b&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const r=new RegExp(o,n.sensitive?"":"i");function a(c){const u=c.match(r),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=l[f-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function s(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:b,optional:k}=p,E=v in c?c[v]:"";if(pt(E)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=pt(E)?E.join("/"):E;if(!S)if(k)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=S}}return u||"/"}return{re:r,score:i,keys:l,parse:a,stringify:s}}function qh(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Fs(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const l=qh(i[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-i.length)===1){if(xr(i))return 1;if(xr(o))return-1}return o.length-i.length}function xr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kh={type:0,value:""},Yh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Kh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const o=[];let l;function r(){l&&o.push(l),l=[]}let a=0,s,c="",u="";function d(){c&&(n===0?l.push({type:0,value:c}):n===1||n===2||n===3?(l.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:c,regexp:u,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=s}for(;a<e.length;){if(s=e[a++],s==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:s==="/"?(c&&d(),r()):s===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:s==="("?n=2:Yh.test(s)?f():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&a--);break;case 2:s===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),o}function Jh(e,t,n){const i=Gh(Qh(e.path),n),o=pe(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Xh(e,t){const n=[],i=new Map;t=Rr({strict:!1,end:!0,sensitive:!1},t);function o(d){return i.get(d)}function l(d,f,p){const v=!p,b=Ir(d);b.aliasOf=p&&p.record;const k=Rr(t,d),E=[b];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of _)E.push(Ir(pe({},b,{components:p?p.record.components:b.components,path:H,aliasOf:p?p.record:b})))}let S,m;for(const _ of E){const{path:H}=_;if(f&&H[0]!=="/"){const X=f.record.path,z=X[X.length-1]==="/"?"":"/";_.path=f.record.path+(H&&z+H)}if(S=Jh(_,f,k),p?p.alias.push(S):(m=m||S,m!==S&&m.alias.push(S),v&&d.name&&!Ar(S)&&r(d.name)),Ms(S)&&s(S),b.children){const X=b.children;for(let z=0;z<X.length;z++)l(X[z],S,p&&p.children[z])}p=p||S}return m?()=>{r(m)}:Kn}function r(d){if(Ds(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function a(){return n}function s(d){const f=tf(d,n);n.splice(f,0,d),d.record.name&&!Ar(d)&&i.set(d.record.name,d)}function c(d,f){let p,v={},b,k;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw In(1,{location:d});k=p.record.name,v=pe(Tr(f.params,p.keys.filter(m=>!m.optional).concat(p.parent?p.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),d.params&&Tr(d.params,p.keys.map(m=>m.name))),b=p.stringify(v)}else if(d.path!=null)b=d.path,p=n.find(m=>m.re.test(b)),p&&(v=p.parse(b),k=p.record.name);else{if(p=f.name?i.get(f.name):n.find(m=>m.re.test(f.path)),!p)throw In(1,{location:d,currentLocation:f});k=p.record.name,v=pe({},f.params,d.params),b=p.stringify(v)}const E=[];let S=p;for(;S;)E.unshift(S.record),S=S.parent;return{name:k,path:b,params:v,matched:E,meta:ef(E)}}e.forEach(d=>l(d));function u(){n.length=0,i.clear()}return{addRoute:l,resolve:c,removeRoute:r,clearRoutes:u,getRoutes:a,getRecordMatcher:o}}function Tr(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Ir(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Zh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Zh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function Ar(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ef(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function Rr(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function tf(e,t){let n=0,i=t.length;for(;n!==i;){const l=n+i>>1;Fs(e,t[l])<0?i=l:n=l+1}const o=nf(e);return o&&(i=t.lastIndexOf(o,i-1)),i}function nf(e){let t=e;for(;t=t.parent;)if(Ms(t)&&Fs(e,t)===0)return t}function Ms({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function of(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const l=i[o].replace(Ts," "),r=l.indexOf("="),a=oi(r<0?l:l.slice(0,r)),s=r<0?null:oi(l.slice(r+1));if(a in t){let c=t[a];pt(c)||(c=t[a]=[c]),c.push(s)}else t[a]=s}return t}function Or(e){let t="";for(let n in e){const i=e[n];if(n=Lh(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(pt(i)?i.map(l=>l&&Go(l)):[i&&Go(i)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function lf(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=pt(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const rf=Symbol(""),Pr=Symbol(""),so=Symbol(""),gl=Symbol(""),Ko=Symbol("");function Hn(){let e=[];function t(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,i,o,l=r=>r()){const r=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((a,s)=>{const c=f=>{f===!1?s(In(4,{from:n,to:t})):f instanceof Error?s(f):Bh(f)?s(In(2,{from:t,to:f})):(r&&i.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),a())},u=l(()=>e.call(i&&i.instances[o],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>s(f))})}function Oo(e,t,n,i,o=l=>l()){const l=[];for(const r of e)for(const a in r.components){let s=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Cs(s)){const u=(s.__vccOpts||s)[t];u&&l.push(Wt(u,n,i,r,a,o))}else{let c=s();l.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const d=hh(u)?u.default:u;r.mods[a]=u,r.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Wt(p,n,i,r,a,o)()}))}}return l}function Dr(e){const t=$e(so),n=$e(gl),i=P(()=>{const s=J(e.to);return t.resolve(s)}),o=P(()=>{const{matched:s}=i.value,{length:c}=s,u=s[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Tn.bind(null,u));if(f>-1)return f;const p=zr(s[c-2]);return c>1&&zr(u)===p&&d[d.length-1].path!==p?d.findIndex(Tn.bind(null,s[c-2])):f}),l=P(()=>o.value>-1&&df(n.params,i.value.params)),r=P(()=>o.value>-1&&o.value===n.matched.length-1&&Os(n.params,i.value.params));function a(s={}){if(uf(s)){const c=t[J(e.replace)?"replace":"push"](J(e.to)).catch(Kn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:P(()=>i.value.href),isActive:l,isExactActive:r,navigate:a}}function af(e){return e.length===1?e[0]:e}const sf=ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dr,setup(e,{slots:t}){const n=dn(Dr(e)),{options:i}=$e(so),o=P(()=>({[Fr(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Fr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&af(t.default(n));return e.custom?l:K("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),cf=sf;function uf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function df(e,t){for(const n in t){const i=t[n],o=e[n];if(typeof i=="string"){if(i!==o)return!1}else if(!pt(o)||o.length!==i.length||i.some((l,r)=>l!==o[r]))return!1}return!0}function zr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fr=(e,t,n)=>e??t??n,hf=ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=$e(Ko),o=P(()=>e.route||i.value),l=$e(Pr,0),r=P(()=>{let c=J(l);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=P(()=>o.value.matched[r.value]);qt(Pr,P(()=>r.value+1)),qt(rf,a),qt(Ko,o);const s=De();return Ke(()=>[s.value,a.value,e.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Tn(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return Mr(n.default,{Component:f,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,k=K(f,pe({},v,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(d.instances[u]=null)},ref:s}));return Mr(n.default,{Component:k,route:c})||k}}});function Mr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ff=hf;function pf(e){const t=Xh(e.routes,e),n=e.parseQuery||of,i=e.stringifyQuery||Or,o=e.history,l=Hn(),r=Hn(),a=Hn(),s=we(xt);let c=xt;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ao.bind(null,T=>""+T),d=Ao.bind(null,Eh),f=Ao.bind(null,oi);function p(T,Y){let G,Z;return Ds(T)?(G=t.getRecordMatcher(T),Z=Y):Z=T,t.addRoute(Z,G)}function v(T){const Y=t.getRecordMatcher(T);Y&&t.removeRoute(Y)}function b(){return t.getRoutes().map(T=>T.record)}function k(T){return!!t.getRecordMatcher(T)}function E(T,Y){if(Y=pe({},Y||s.value),typeof T=="string"){const g=Ro(n,T,Y.path),y=t.resolve({path:g.path},Y),O=o.createHref(g.fullPath);return pe(g,y,{params:f(y.params),hash:oi(g.hash),redirectedFrom:void 0,href:O})}let G;if(T.path!=null)G=pe({},T,{path:Ro(n,T.path,Y.path).path});else{const g=pe({},T.params);for(const y in g)g[y]==null&&delete g[y];G=pe({},T,{params:d(g)}),Y.params=d(Y.params)}const Z=t.resolve(G,Y),de=T.hash||"";Z.params=u(f(Z.params));const _e=Th(i,pe({},T,{hash:kh(de),path:Z.path})),h=o.createHref(_e);return pe({fullPath:_e,hash:de,query:i===Or?lf(T.query):T.query||{}},Z,{redirectedFrom:void 0,href:h})}function S(T){return typeof T=="string"?Ro(n,T,s.value.path):pe({},T)}function m(T,Y){if(c!==T)return In(8,{from:Y,to:T})}function _(T){return z(T)}function H(T){return _(pe(S(T),{replace:!0}))}function X(T){const Y=T.matched[T.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let Z=typeof G=="function"?G(T):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=S(Z):{path:Z},Z.params={}),pe({query:T.query,hash:T.hash,params:Z.path!=null?{}:T.params},Z)}}function z(T,Y){const G=c=E(T),Z=s.value,de=T.state,_e=T.force,h=T.replace===!0,g=X(G);if(g)return z(pe(S(g),{state:typeof g=="object"?pe({},de,g.state):de,force:_e,replace:h}),Y||G);const y=G;y.redirectedFrom=Y;let O;return!_e&&Ih(i,Z,G)&&(O=In(16,{to:y,from:Z}),Me(Z,Z,!0,!1)),(O?Promise.resolve(O):D(y,Z)).catch(C=>Et(C)?Et(C,2)?C:Re(C):j(C,y,Z)).then(C=>{if(C){if(Et(C,2))return z(pe({replace:h},S(C.to),{state:typeof C.to=="object"?pe({},de,C.to.state):de,force:_e}),Y||y)}else C=w(y,Z,!0,h,de);return B(y,Z,C),C})}function L(T,Y){const G=m(T,Y);return G?Promise.reject(G):Promise.resolve()}function A(T){const Y=Ut.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(T):T()}function D(T,Y){let G;const[Z,de,_e]=mf(T,Y);G=Oo(Z.reverse(),"beforeRouteLeave",T,Y);for(const g of Z)g.leaveGuards.forEach(y=>{G.push(Wt(y,T,Y))});const h=L.bind(null,T,Y);return G.push(h),Xe(G).then(()=>{G=[];for(const g of l.list())G.push(Wt(g,T,Y));return G.push(h),Xe(G)}).then(()=>{G=Oo(de,"beforeRouteUpdate",T,Y);for(const g of de)g.updateGuards.forEach(y=>{G.push(Wt(y,T,Y))});return G.push(h),Xe(G)}).then(()=>{G=[];for(const g of _e)if(g.beforeEnter)if(pt(g.beforeEnter))for(const y of g.beforeEnter)G.push(Wt(y,T,Y));else G.push(Wt(g.beforeEnter,T,Y));return G.push(h),Xe(G)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),G=Oo(_e,"beforeRouteEnter",T,Y,A),G.push(h),Xe(G))).then(()=>{G=[];for(const g of r.list())G.push(Wt(g,T,Y));return G.push(h),Xe(G)}).catch(g=>Et(g,8)?g:Promise.reject(g))}function B(T,Y,G){a.list().forEach(Z=>A(()=>Z(T,Y,G)))}function w(T,Y,G,Z,de){const _e=m(T,Y);if(_e)return _e;const h=Y===xt,g=vn?history.state:{};G&&(Z||h?o.replace(T.fullPath,pe({scroll:h&&g&&g.scroll},de)):o.push(T.fullPath,de)),s.value=T,Me(T,Y,G,h),Re()}let F;function M(){F||(F=o.listen((T,Y,G)=>{if(!gt.listening)return;const Z=E(T),de=X(Z);if(de){z(pe(de,{replace:!0,force:!0}),Z).catch(Kn);return}c=Z;const _e=s.value;vn&&Mh(Lr(_e.fullPath,G.delta),ao()),D(Z,_e).catch(h=>Et(h,12)?h:Et(h,2)?(z(pe(S(h.to),{force:!0}),Z).then(g=>{Et(g,20)&&!G.delta&&G.type===li.pop&&o.go(-1,!1)}).catch(Kn),Promise.reject()):(G.delta&&o.go(-G.delta,!1),j(h,Z,_e))).then(h=>{h=h||w(Z,_e,!1),h&&(G.delta&&!Et(h,8)?o.go(-G.delta,!1):G.type===li.pop&&Et(h,20)&&o.go(-1,!1)),B(Z,_e,h)}).catch(Kn)}))}let $=Hn(),I=Hn(),ee;function j(T,Y,G){Re(T);const Z=I.list();return Z.length?Z.forEach(de=>de(T,Y,G)):console.error(T),Promise.reject(T)}function ue(){return ee&&s.value!==xt?Promise.resolve():new Promise((T,Y)=>{$.add([T,Y])})}function Re(T){return ee||(ee=!T,M(),$.list().forEach(([Y,G])=>T?G(T):Y()),$.reset()),T}function Me(T,Y,G,Z){const{scrollBehavior:de}=e;if(!vn||!de)return Promise.resolve();const _e=!G&&Vh(Lr(T.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return hi().then(()=>de(T,Y,_e)).then(h=>h&&Fh(h)).catch(h=>j(h,T,Y))}const je=T=>o.go(T);let Nt;const Ut=new Set,gt={currentRoute:s,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:b,resolve:E,options:e,push:_,replace:H,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:l.add,beforeResolve:r.add,afterEach:a.add,onError:I.add,isReady:ue,install(T){const Y=this;T.component("RouterLink",cf),T.component("RouterView",ff),T.config.globalProperties.$router=Y,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>J(s)}),vn&&!Nt&&s.value===xt&&(Nt=!0,_(o.location).catch(de=>{}));const G={};for(const de in xt)Object.defineProperty(G,de,{get:()=>s.value[de],enumerable:!0});T.provide(so,Y),T.provide(gl,Ra(G)),T.provide(Ko,s);const Z=T.unmount;Ut.add(T),T.unmount=function(){Ut.delete(T),Ut.size<1&&(c=xt,F&&F(),F=null,s.value=xt,Nt=!1,ee=!1),Z()}}};function Xe(T){return T.reduce((Y,G)=>Y.then(()=>A(G)),Promise.resolve())}return gt}function mf(e,t){const n=[],i=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let r=0;r<l;r++){const a=t.matched[r];a&&(e.matched.find(c=>Tn(c,a))?i.push(a):n.push(a));const s=e.matched[r];s&&(t.matched.find(c=>Tn(c,s))||o.push(s))}return[n,i,o]}function On(){return $e(so)}function Pn(e){return $e(gl)}var vl=Symbol(""),mt=()=>{const e=$e(vl);if(!e)throw new Error("useClientData() is called without provider.");return e},gf=()=>mt().pageComponent,_l=()=>mt().pageData,vi=()=>mt().pageFrontmatter,vf=()=>mt().pageHead,bl=()=>mt().pageLang,_f=()=>mt().pageLayout,Vs=()=>mt().routeLocale,Hs=()=>mt().routePath,bf=()=>mt().routes,yf=()=>mt().siteData,Fi=we([]),_i=e=>{Fi.value.push(e),oo(()=>{Fi.value=Fi.value.filter(t=>t!==e)})},wf=Symbol(""),Yo=we(uh),Sn=we(dh),Ns=(e,t)=>{const n=eh(e,t);if(Sn.value[n])return n;const i=encodeURI(n);if(Sn.value[i])return i;const o=Yo.value[n]||Yo.value[i];return o||n},ri=(e,t)=>{const{pathname:n,hashAndQueries:i}=Ls(e),o=Ns(n,t),l=o+i;return Sn.value[o]?{...Sn.value[o],path:l,notFound:!1}:{...Sn.value["/404.html"],path:l,notFound:!0}},kf=(e,t)=>{const{pathname:n,hashAndQueries:i}=Ls(e);return Ns(n,t)+i},Lf=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},co=ce({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const n=On(),i=Pn(),o=P(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${kf(e.to,i.path).substring(1)}`);return()=>K("a",{class:["route-link",{[e.activeClass]:e.active}],href:o.value,onClick:(l={})=>{Lf(l)&&n.push(e.to).catch()}},t.default())}}),Sf=ce({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=za(e,"config"),i=Pn(),o=yf(),l=P(()=>mi(n.value.link)),r=P(()=>n.value.target||(l.value?"_blank":void 0)),a=P(()=>r.value==="_blank"),s=P(()=>!l.value&&!a.value),c=P(()=>n.value.rel||(a.value?"noopener noreferrer":null)),u=P(()=>n.value.ariaLabel??n.value.text),d=P(()=>{if(n.value.exact)return!1;const p=Object.keys(o.value.locales);return p.length?p.every(v=>v!==n.value.link):n.value.link!=="/"}),f=P(()=>s.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(i.path):d.value?i.path.startsWith(n.value.link):i.path===n.value.link:!1);return()=>{const{before:p,after:v,default:b}=t,k=(b==null?void 0:b(n.value))??[p==null?void 0:p(n.value),n.value.text,v==null?void 0:v(n.value)];return s.value?K(co,{class:"auto-link",to:n.value.link,active:f.value,"aria-label":u.value},()=>k):K("a",{class:"auto-link external-link",href:n.value.link,"aria-label":u.value,rel:c.value,target:r.value},k)}}}),yl=ce({name:"ClientOnly",setup(e,t){const n=De(!1);return lt(()=>{n.value=!0}),()=>{var i,o;return n.value?(o=(i=t.slots).default)==null?void 0:o.call(i):null}}}),Ci=e=>{Fi.value.forEach(t=>t(e))},wl=ce({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=gf(),n=P(()=>{if(!e.path)return t.value;const o=ri(e.path);return bu(async()=>o.loader().then(({comp:l})=>l))}),i=vi();return Ke(i,()=>{Ci("updated")},{deep:!0,flush:"post"}),()=>K(n.value,{onVnodeMounted:()=>{Ci("mounted")},onVnodeUpdated:()=>{Ci("updated")},onVnodeBeforeUnmount:()=>{Ci("beforeUnmount")}})}}),Ef="Layout",Cf="en-US",tn=dn({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const i=ut(t.description)?t.description:n.description,o=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:i}]];return rh(o)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||Cf,resolvePageLayout:(e,t)=>{const n=ut(e.frontmatter.layout)?e.frontmatter.layout:Ef;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>th(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},i)=>{var o;return{...n,...t[i],head:[...((o=t[i])==null?void 0:o.head)??[],...n.head]}}}),kt=(e={})=>e,kl=e=>gi(e)?e:`/${Es(e)}`,xf=Object.defineProperty,Tf=(e,t)=>{for(var n in t)xf(e,n,{get:t[n],enumerable:!0})},If={};Tf(If,{COMPONENT_STATE_TYPE:()=>Af,INSPECTOR_ID:()=>Rf,INSPECTOR_LABEL:()=>Of,INSPECTOR_NODES:()=>Pf,INSPECTOR_STATE_SECTION_NAME:()=>Df,PLUGIN_ID:()=>Us,PLUGIN_LABEL:()=>Ll});var Us="org.vuejs.vuepress",Ll="VuePress",Af=Ll,Rf=Us,Of=Ll,Vr={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Hr={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Nr={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},Ur={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Pf={[Vr.id]:Vr,[Hr.id]:Hr,[Nr.id]:Nr,[Ur.id]:Ur},Df="State";function uo(e){return pa()?(Ac(e),!0):!1}const En=new WeakMap,$s=(...e)=>{var t;const n=e[0],i=(t=Ht())==null?void 0:t.proxy;if(i==null&&!Za())throw new Error("injectLocal must be called in setup");return i&&En.has(i)&&n in En.get(i)?En.get(i)[n]:$e(...e)};function zf(e,t){var n;const i=(n=Ht())==null?void 0:n.proxy;if(i==null)throw new Error("provideLocal must be called in setup");En.has(i)||En.set(i,Object.create(null));const o=En.get(i);return o[e]=t,qt(e,t)}const Sl=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ff=e=>e!=null,Mf=Object.prototype.toString,Vf=e=>Mf.call(e)==="[object Object]",hn=()=>{};function Hf(...e){if(e.length!==1)return za(...e);const t=e[0];return typeof t=="function"?to(Da(()=>({get:t,set:hn}))):De(t)}function El(e,t){function n(...i){return new Promise((o,l)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(o).catch(l)})}return n}const Bs=e=>e();function Nf(e,t={}){let n,i,o=hn;const l=s=>{clearTimeout(s),o(),o=hn};let r;return s=>{const c=ve(e),u=ve(t.maxWait);return n&&l(n),c<=0||u!==void 0&&u<=0?(i&&(l(i),i=void 0),Promise.resolve(s())):new Promise((d,f)=>{o=t.rejectOnCancel?f:d,r=s,u&&!i&&(i=setTimeout(()=>{n&&l(n),i=void 0,d(r())},u)),n=setTimeout(()=>{i&&l(i),i=void 0,d(s())},c)})}}function Uf(...e){let t=0,n,i=!0,o=hn,l,r,a,s,c;!Pe(e[0])&&typeof e[0]=="object"?{delay:r,trailing:a=!0,leading:s=!0,rejectOnCancel:c=!1}=e[0]:[r,a=!0,s=!0,c=!1]=e;const u=()=>{n&&(clearTimeout(n),n=void 0,o(),o=hn)};return f=>{const p=ve(r),v=Date.now()-t,b=()=>l=f();return u(),p<=0?(t=Date.now(),b()):(v>p&&(s||!i)?(t=Date.now(),b()):a&&(l=new Promise((k,E)=>{o=c?E:k,n=setTimeout(()=>{t=Date.now(),i=!0,k(b()),u()},Math.max(0,p-v))})),!s&&!n&&(n=setTimeout(()=>i=!0,p)),i=!1,l)}}function $f(e=Bs,t={}){const{initialState:n="active"}=t,i=Hf(n==="active");function o(){i.value=!1}function l(){i.value=!0}const r=(...a)=>{i.value&&e(...a)};return{isActive:to(i),pause:o,resume:l,eventFilter:r}}function Bf(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const i=t;t=void 0,i&&await i},n}function $r(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function Qn(e){return Array.isArray(e)?e:[e]}function jf(e){return Ht()}function js(e,t=200,n={}){return El(Nf(t,n),e)}function Wf(e,t=200,n=!1,i=!0,o=!1){return El(Uf(t,n,i,o),e)}function Gf(e,t,n={}){const{eventFilter:i=Bs,...o}=n;return Ke(e,El(i,t),o)}function qf(e,t,n={}){const{eventFilter:i,initialState:o="active",...l}=n,{eventFilter:r,pause:a,resume:s,isActive:c}=$f(i,{initialState:o});return{stop:Gf(e,t,{...l,eventFilter:r}),pause:a,resume:s,isActive:c}}function ho(e,t=!0,n){jf()?lt(e,n):t?e():hi(e)}function Kf(e,t,n={}){const{immediate:i=!0,immediateCallback:o=!1}=n,l=we(!1);let r;function a(){r&&(clearTimeout(r),r=void 0)}function s(){l.value=!1,a()}function c(...u){o&&e(),a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=void 0,e(...u)},ve(t))}return i&&(l.value=!0,Sl&&c()),uo(s),{isPending:Qc(l),start:c,stop:s}}function Cl(e=!1,t={}){const{truthyValue:n=!0,falsyValue:i=!1}=t,o=Pe(e),l=we(e);function r(a){if(arguments.length)return l.value=a,l.value;{const s=ve(n);return l.value=l.value===s?ve(i):s,l.value}}return o?r:[l,r]}function xl(e,t,n){return Ke(e,t,{...n,immediate:!0})}const wt=Sl?window:void 0,Ws=Sl?window.navigator:void 0;function Ot(e){var t;const n=ve(e);return(t=n==null?void 0:n.$el)!=null?t:n}function Be(...e){const t=[],n=()=>{t.forEach(a=>a()),t.length=0},i=(a,s,c,u)=>(a.addEventListener(s,c,u),()=>a.removeEventListener(s,c,u)),o=P(()=>{const a=Qn(ve(e[0])).filter(s=>s!=null);return a.every(s=>typeof s!="string")?a:void 0}),l=xl(()=>{var a,s;return[(s=(a=o.value)==null?void 0:a.map(c=>Ot(c)))!=null?s:[wt].filter(c=>c!=null),Qn(ve(o.value?e[1]:e[0])),Qn(J(o.value?e[2]:e[1])),ve(o.value?e[3]:e[2])]},([a,s,c,u])=>{if(n(),!(a!=null&&a.length)||!(s!=null&&s.length)||!(c!=null&&c.length))return;const d=Vf(u)?{...u}:u;t.push(...a.flatMap(f=>s.flatMap(p=>c.map(v=>i(f,p,v,d)))))},{flush:"post"}),r=()=>{l(),n()};return uo(n),r}function Yf(){const e=we(!1),t=Ht();return t&&lt(()=>{e.value=!0},t),e}function bi(e){const t=Yf();return P(()=>(t.value,!!e()))}function Qf(e,t,n={}){const{window:i=wt,...o}=n;let l;const r=bi(()=>i&&"MutationObserver"in i),a=()=>{l&&(l.disconnect(),l=void 0)},s=P(()=>{const f=ve(e),p=Qn(f).map(Ot).filter(Ff);return new Set(p)}),c=Ke(s,f=>{a(),r.value&&f.size&&(l=new MutationObserver(t),f.forEach(p=>l.observe(p,o)))},{immediate:!0,flush:"post"}),u=()=>l==null?void 0:l.takeRecords(),d=()=>{c(),a()};return uo(d),{isSupported:r,stop:d,takeRecords:u}}const Jf=Symbol("vueuse-ssr-width");function Xf(){const e=Za()?$s(Jf,null):null;return typeof e=="number"?e:void 0}function Tl(e,t={}){const{window:n=wt,ssrWidth:i=Xf()}=t,o=bi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),l=we(typeof i=="number"),r=we(),a=we(!1),s=c=>{a.value=c.matches};return Zu(()=>{if(l.value){l.value=!o.value;const c=ve(e).split(",");a.value=c.some(u=>{const d=u.includes("not all"),f=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),p=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let v=!!(f||p);return f&&v&&(v=i>=$r(f[1])),p&&v&&(v=i<=$r(p[1])),d?!v:v});return}o.value&&(r.value=n.matchMedia(ve(e)),a.value=r.value.matches)}),Be(r,"change",s,{passive:!0}),P(()=>a.value)}function Br(e,t={}){const{controls:n=!1,navigator:i=Ws}=t,o=bi(()=>i&&"permissions"in i),l=we(),r=typeof e=="string"?{name:e}:e,a=we(),s=()=>{var u,d;a.value=(d=(u=l.value)==null?void 0:u.state)!=null?d:"prompt"};Be(l,"change",s,{passive:!0});const c=Bf(async()=>{if(o.value){if(!l.value)try{l.value=await i.permissions.query(r)}catch{l.value=void 0}finally{s()}if(n)return fe(l.value)}});return c(),n?{state:a,isSupported:o,query:c}:a}function Zf(e={}){const{navigator:t=Ws,read:n=!1,source:i,copiedDuring:o=1500,legacy:l=!1}=e,r=bi(()=>t&&"clipboard"in t),a=Br("clipboard-read"),s=Br("clipboard-write"),c=P(()=>r.value||l),u=we(""),d=we(!1),f=Kf(()=>d.value=!1,o,{immediate:!1});async function p(){let S=!(r.value&&E(a.value));if(!S)try{u.value=await t.clipboard.readText()}catch{S=!0}S&&(u.value=k())}c.value&&n&&Be(["copy","cut"],p,{passive:!0});async function v(S=ve(i)){if(c.value&&S!=null){let m=!(r.value&&E(s.value));if(!m)try{await t.clipboard.writeText(S)}catch{m=!0}m&&b(S),u.value=S,d.value=!0,f.start()}}function b(S){const m=document.createElement("textarea");m.value=S??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function k(){var S,m,_;return(_=(m=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:m.toString())!=null?_:""}function E(S){return S==="granted"||S==="prompt"}return{isSupported:c,text:u,copied:d,copy:v}}const xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ti="__vueuse_ssr_handlers__",ep=tp();function tp(){return Ti in xi||(xi[Ti]=xi[Ti]||{}),xi[Ti]}function np(e,t){return ep[e]||t}function ip(e){return Tl("(prefers-color-scheme: dark)",e)}function op(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const lp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},jr="vueuse-storage";function Il(e,t,n,i={}){var o;const{flush:l="pre",deep:r=!0,listenToStorageChanges:a=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:u,window:d=wt,eventFilter:f,onError:p=M=>{console.error(M)},initOnMounted:v}=i,b=(u?we:De)(typeof t=="function"?t():t),k=P(()=>ve(e));if(!n)try{n=np("getDefaultStorage",()=>{var M;return(M=wt)==null?void 0:M.localStorage})()}catch(M){p(M)}if(!n)return b;const E=ve(t),S=op(E),m=(o=i.serializer)!=null?o:lp[S],{pause:_,resume:H}=qf(b,M=>D(M),{flush:l,deep:r,eventFilter:f});Ke(k,()=>w(),{flush:l});let X=!1;const z=M=>{v&&!X||w(M)},L=M=>{v&&!X||F(M)};d&&a&&(n instanceof Storage?Be(d,"storage",z,{passive:!0}):Be(d,jr,L)),v?ho(()=>{X=!0,w()}):w();function A(M,$){if(d){const I={key:k.value,oldValue:M,newValue:$,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",I):new CustomEvent(jr,{detail:I}))}}function D(M){try{const $=n.getItem(k.value);if(M==null)A($,null),n.removeItem(k.value);else{const I=m.write(M);$!==I&&(n.setItem(k.value,I),A($,I))}}catch($){p($)}}function B(M){const $=M?M.newValue:n.getItem(k.value);if($==null)return s&&E!=null&&n.setItem(k.value,m.write(E)),E;if(!M&&c){const I=m.read($);return typeof c=="function"?c(I,E):S==="object"&&!Array.isArray(I)?{...E,...I}:I}else return typeof $!="string"?$:m.read($)}function w(M){if(!(M&&M.storageArea!==n)){if(M&&M.key==null){b.value=E;return}if(!(M&&M.key!==k.value)){_();try{const $=m.write(b.value);(M===void 0||(M==null?void 0:M.newValue)!==$)&&(b.value=B(M))}catch($){p($)}finally{M?hi(H):H()}}}}function F(M){w(M.detail)}return b}function rp(e,t,n={}){const{window:i=wt,...o}=n;let l;const r=bi(()=>i&&"ResizeObserver"in i),a=()=>{l&&(l.disconnect(),l=void 0)},s=P(()=>{const d=ve(e);return Array.isArray(d)?d.map(f=>Ot(f)):[Ot(d)]}),c=Ke(s,d=>{if(a(),r.value&&i){l=new ResizeObserver(t);for(const f of d)f&&l.observe(f,o)}},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return uo(u),{isSupported:r,stop:u}}function ap(e,t={width:0,height:0},n={}){const{window:i=wt,box:o="content-box"}=n,l=P(()=>{var d,f;return(f=(d=Ot(e))==null?void 0:d.namespaceURI)==null?void 0:f.includes("svg")}),r=we(t.width),a=we(t.height),{stop:s}=rp(e,([d])=>{const f=o==="border-box"?d.borderBoxSize:o==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(i&&l.value){const p=Ot(e);if(p){const v=p.getBoundingClientRect();r.value=v.width,a.value=v.height}}else if(f){const p=Qn(f);r.value=p.reduce((v,{inlineSize:b})=>v+b,0),a.value=p.reduce((v,{blockSize:b})=>v+b,0)}else r.value=d.contentRect.width,a.value=d.contentRect.height},n);ho(()=>{const d=Ot(e);d&&(r.value="offsetWidth"in d?d.offsetWidth:t.width,a.value="offsetHeight"in d?d.offsetHeight:t.height)});const c=Ke(()=>Ot(e),d=>{r.value=d?t.width:0,a.value=d?t.height:0});function u(){s(),c()}return{width:r,height:a,stop:u}}const Wr=1;function sp(e,t={}){const{throttle:n=0,idle:i=200,onStop:o=hn,onScroll:l=hn,offset:r={left:0,right:0,top:0,bottom:0},observe:a={mutation:!1},eventListenerOptions:s={capture:!1,passive:!0},behavior:c="auto",window:u=wt,onError:d=A=>{console.error(A)}}=t,f=typeof a=="boolean"?{mutation:a}:a,p=we(0),v=we(0),b=P({get(){return p.value},set(A){E(A,void 0)}}),k=P({get(){return v.value},set(A){E(void 0,A)}});function E(A,D){var B,w,F,M;if(!u)return;const $=ve(e);if(!$)return;(F=$ instanceof Document?u.document.body:$)==null||F.scrollTo({top:(B=ve(D))!=null?B:k.value,left:(w=ve(A))!=null?w:b.value,behavior:ve(c)});const I=((M=$==null?void 0:$.document)==null?void 0:M.documentElement)||($==null?void 0:$.documentElement)||$;b!=null&&(p.value=I.scrollLeft),k!=null&&(v.value=I.scrollTop)}const S=we(!1),m=dn({left:!0,right:!1,top:!0,bottom:!1}),_=dn({left:!1,right:!1,top:!1,bottom:!1}),H=A=>{S.value&&(S.value=!1,_.left=!1,_.right=!1,_.top=!1,_.bottom=!1,o(A))},X=js(H,n+i),z=A=>{var D;if(!u)return;const B=((D=A==null?void 0:A.document)==null?void 0:D.documentElement)||(A==null?void 0:A.documentElement)||Ot(A),{display:w,flexDirection:F,direction:M}=getComputedStyle(B),$=M==="rtl"?-1:1,I=B.scrollLeft;_.left=I<p.value,_.right=I>p.value;const ee=Math.abs(I*$)<=(r.left||0),j=Math.abs(I*$)+B.clientWidth>=B.scrollWidth-(r.right||0)-Wr;w==="flex"&&F==="row-reverse"?(m.left=j,m.right=ee):(m.left=ee,m.right=j),p.value=I;let ue=B.scrollTop;A===u.document&&!ue&&(ue=u.document.body.scrollTop),_.top=ue<v.value,_.bottom=ue>v.value;const Re=Math.abs(ue)<=(r.top||0),Me=Math.abs(ue)+B.clientHeight>=B.scrollHeight-(r.bottom||0)-Wr;w==="flex"&&F==="column-reverse"?(m.top=Me,m.bottom=Re):(m.top=Re,m.bottom=Me),v.value=ue},L=A=>{var D;if(!u)return;const B=(D=A.target.documentElement)!=null?D:A.target;z(B),S.value=!0,X(A),l(A)};return Be(e,"scroll",n?Wf(L,n,!0,!1):L,s),ho(()=>{try{const A=ve(e);if(!A)return;z(A)}catch(A){d(A)}}),f!=null&&f.mutation&&e!=null&&e!==u&&e!==document&&Qf(e,()=>{const A=ve(e);A&&z(A)},{attributes:!0,childList:!0,subtree:!0}),Be(e,"scrollend",H,s),{x:b,y:k,isScrolling:S,arrivedState:m,directions:_,measure(){const A=ve(e);u&&A&&z(A)}}}function cp(e={}){const{window:t=wt,...n}=e;return sp(t,n)}function up(e={}){const{window:t=wt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:l=!0,type:r="inner"}=e,a=we(n),s=we(i),c=()=>{if(t)if(r==="outer")a.value=t.outerWidth,s.value=t.outerHeight;else if(r==="visual"&&t.visualViewport){const{width:d,height:f,scale:p}=t.visualViewport;a.value=Math.round(d*p),s.value=Math.round(f*p)}else l?(a.value=t.innerWidth,s.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight)};c(),ho(c);const u={passive:!0};if(Be("resize",c,u),t&&r==="visual"&&t.visualViewport&&Be(t.visualViewport,"resize",c,u),o){const d=Tl("(orientation: portrait)");Ke(d,()=>c())}return{width:a,height:s}}const Gr=async(e,t)=>{const{path:n,query:i}=e.currentRoute.value,{scrollBehavior:o}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:i,hash:t}),e.options.scrollBehavior=o},dp=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:i=5})=>{const o=On();Be("scroll",js(()=>{var v,b;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<i){Gr(o,"");return}const s=window.innerHeight+r,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(c-s)<i,d=Array.from(document.querySelectorAll(e)),p=Array.from(document.querySelectorAll(t)).filter(k=>d.some(E=>E.hash===k.hash));for(let k=0;k<p.length;k++){const E=p[k],S=p[k+1],m=r>=(((v=E.parentElement)==null?void 0:v.offsetTop)??0)-i,_=!S||r<(((b=S.parentElement)==null?void 0:b.offsetTop)??0)-i;if(!(m&&_))continue;const X=decodeURIComponent(o.currentRoute.value.hash),z=decodeURIComponent(E.hash);if(X===z)return;if(u){for(let L=k+1;L<p.length;L++)if(X===decodeURIComponent(p[L].hash))return}Gr(o,z);return}},n))},hp="a.vp-sidebar-item",fp=".header-anchor",pp=300,mp=5,gp=kt({setup(){dp({headerLinkSelector:hp,headerAnchorSelector:fp,delay:pp,offset:mp})}}),vp=Object.freeze(Object.defineProperty({__proto__:null,default:gp},Symbol.toStringTag,{value:"Module"})),Gs=[...new Array(6)].map((e,t)=>`[vp-content] h${t+1}`).join(","),_p=(e,t=2)=>{if(t===!1)return[];const[n,i]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t,o=e.filter(r=>r.level>=n&&r.level<=i),l=[];e:for(let r=0;r<o.length;r++){const a=o[r];if(r===0)l.push(a);else{for(let s=r-1;s>=0;s--){const c=o[s];if(c.level<a.level){c.children.push(a);continue e}}l.push(a)}}return l},bp=(e,t=[])=>{let n;if(t.length){const i=e.cloneNode(!0);i.querySelectorAll(t.join(",")).forEach(o=>{o.remove()}),n=i.textContent||""}else n=e.textContent||"";return n.trim()},yp=(e=Gs,t=[])=>Array.from(document.querySelectorAll(e)).filter(n=>n.id&&n.hasChildNodes()).map(n=>({element:n,title:bp(n,t),link:`#${n.id}`,slug:n.id,level:Number(n.tagName[1]),children:[]})),wp=({selector:e=Gs,levels:t=2,ignore:n=[]}={})=>_p(yp(e,n),t),kp=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Lp=(e,t)=>t.some(n=>{if(ut(n))return n===e.key;const{key:i,ctrl:o=!1,shift:l=!1,alt:r=!1}=n;return i===e.key&&o===e.ctrlKey&&l===e.shiftKey&&r===e.altKey}),qs=(e,t)=>{var i;const n=(i=Ht())==null?void 0:i.appContext.components;return n?e in n||et(e)in n||ci(et(e))in n:!1},fo=e=>{const t=Vs();return P(()=>ve(e)[t.value]??{})},Sp=(e,t)=>{Be("keydown",i=>{const o=ve(e);o!=null&&o.length&&Lp(i,o)&&!kp(i.target)&&(i.preventDefault(),t())})},Ep=()=>{const e=bf();return P(()=>Object.keys(e.value))},Cp=e=>typeof e<"u",Ks=(e,t)=>ut(e)&&e.startsWith(t),{keys:xp}=Object,Ys=e=>Ks(e,"/")&&e[1]!=="/",Qs=e=>!Xd(e)&&!mi(e);var Tp={"/":{backToTop:"Back to top"},"/zh/":{backToTop:"返回顶部"}};const Ip=ce({name:"BackToTop",setup(){const e=vi(),t=fo(Tp),n=we(),{height:i}=ap(n),{height:o}=up(),{y:l}=cp(),r=P(()=>(e.value.backToTop??!0)&&l.value>100),a=P(()=>l.value/(i.value-o.value)*100);return lt(()=>{n.value=document.body}),()=>K(fl,{name:"back-to-top"},()=>r.value?K("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[K("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":a.value},K("svg",K("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*a.value*.48} ${Math.PI*(100-a.value)*.48}`}))),K("div",{class:"back-to-top-icon"})]):null)}}),Ap=kt({rootComponents:[Ip]}),Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"})),Op=/language-(shellscript|shell|bash|sh|zsh)/,Pp=({duration:e=2e3,locales:t,selector:n,showInMobile:i,ignoreSelector:o=[],transform:l})=>{const r=Tl("(max-width: 419px)"),a=P(()=>!r.value||i),s=fo(t),c=v=>{var k;if(v.hasAttribute("copy-code"))return;const b=document.createElement("button");b.type="button",b.classList.add("vp-copy-code-button"),b.setAttribute("aria-label",s.value.copy),b.setAttribute("data-copied",s.value.copied),(k=v.parentElement)==null||k.insertBefore(b,v),v.setAttribute("copy-code","")},u=()=>{document.body.classList.toggle("no-copy-code",!a.value),a.value&&document.querySelectorAll(n.join(",")).forEach(c)};xl(a,u,{flush:"post"}),_i(v=>{v!=="beforeUnmount"&&u()});const{copy:d}=Zf({legacy:!0}),f=new WeakMap,p=async(v,b,k)=>{const E=b.cloneNode(!0);o.length&&E.querySelectorAll(o.join(",")).forEach(_=>{_.remove()}),l&&l(E);let S=E.textContent||"";if(Op.test(v.className)&&(S=S.replace(/^ *(\$|>) /gm,"")),await d(S),e<=0)return;k.classList.add("copied"),clearTimeout(f.get(k));const m=setTimeout(()=>{k.classList.remove("copied"),k.blur(),f.delete(k)},e);f.set(k,m)};Be("click",v=>{const b=v.target;if(a.value&&b.matches('div[class*="language-"] > button.vp-copy-code-button')){const k=b.parentElement,E=b.nextElementSibling;if(!k||!E)return;p(k,E,b)}})};var Dp=[],zp={"/":{copy:"Copy code",copied:"Copied"},"/zh/":{copy:"复制代码",copied:"已复制"}},Fp=['[vp-content] div[class*="language-"] pre'];const Mp=kt({setup:()=>{Pp({selector:Fp,ignoreSelector:Dp,locales:zp,duration:2e3,showInMobile:!1})}}),Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Mp},Symbol.toStringTag,{value:"Module"})),Hp=kt({setup(){Be("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})}}),Np=Object.freeze(Object.defineProperty({__proto__:null,default:Hp},Symbol.toStringTag,{value:"Module"}));var qr={provider:null,pattern:{},repo:""};const Kr=typeof qr>"u"?{}:qr,Up=(e,t)=>!e||gi(e)?e:t==="github"?`https://github.com/${e}`:t==="gitee"?`https://gitee.com/${e}`:e,$p=/#(\d+)/g,Bp=(e=!0)=>{const t=vi(),n=bl(),i=_l(),{pattern:o={},provider:l}=Kr,r=Up(Kr.repo,l);return P(()=>{var s;if(t.value.changelog===!1||!ve(e))return[];const a=new Intl.DateTimeFormat(n.value,{dateStyle:"short"});return(((s=i.value.git)==null?void 0:s.changelog)??[]).map(c=>{const u={date:a.format(c.time),...c};return o.issue&&r&&(u.message=u.message.replace($p,(d,f)=>`<a href="${o.issue.replace(":issue",f).replace(":repo",r)}" target="_blank" rel="noopener noreferrer">${d}</a>`)),o.commit&&r&&(u.commitUrl=o.commit.replace(":hash",u.hash).replace(":repo",r)),o.tag&&r&&u.tag&&(u.tagUrl=o.tag.replace(":tag",u.tag).replace(":repo",r)),u})})},Js=(e=!0)=>{const t=vi(),n=_l();return P(()=>{var i;return t.value.contributors===!1||!ve(e)?[]:((i=n.value.git)==null?void 0:i.contributors)??[]})};var Yr={"/":{contributors:"Contributors",changelog:"Changelog",timeOn:"on",viewChangelog:"View All Changelog",latestUpdateAt:"Last Updated:"},"/zh/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新："}};const jp=typeof Yr>"u"?{}:Yr,Al=()=>fo(jp),Xs=(e=!0)=>{const t=bl(),n=Al(),i=_l();return P(()=>{var a,s,c;if(!ve(e))return null;const o=((a=i.value.git)==null?void 0:a.updatedTime)??((c=(s=i.value.git)==null?void 0:s.changelog)==null?void 0:c[0].time);if(!o)return null;const l=new Date(o),r=new Intl.DateTimeFormat(t.value,{dateStyle:"short",timeStyle:"short"}).format(o);return{date:l,text:r,iso:l.toISOString(),locale:n.value.latestUpdateAt}})},Zs=({level:e=2,text:t,anchor:n})=>K(`h${e||2}`,{id:n,tabindex:"-1"},K("a",{href:`#${n}`,class:"header-anchor"},K("span",t))),Wp=({name:e,url:t,avatar:n})=>K(t?"a":"span",{href:t,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?K("img",{src:n,alt:"",class:"vp-contributor-avatar"}):null,K("span",{class:"vp-contributor-name"},e)]),Gp=ce({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=Js(),n=Al();return()=>t.value.length?[K(Zs,{level:e.headerLevel,anchor:"doc-contributors",text:e.title||n.value.contributors}),K("div",{class:"vp-contributors"},t.value.map(i=>K(Wp,i)))]:null}}),qp=ce({name:"GitChangelog",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const t=Bp(),n=Al(),i=Xs(),[o,l]=Cl(),r=()=>K("div",{class:"vp-changelog-header",onClick:()=>l()},[K("div",{class:"vp-latest-updated"},[K("span",{class:"vp-changelog-icon"}),K("span",{"data-allow-mismatch":""},i.value.text)]),K("div",[K("span",{class:"vp-changelog-menu-icon"}),K("span",n.value.viewChangelog)])]),a=({item:c})=>K("li",{class:"vp-changelog-item-tag"},K("div",[K("a",{class:"vp-changelog-tag"},K("code",c.tag)),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[n.value.timeOn," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])])),s=({item:c})=>K("li",{class:"vp-changelog-item-commit"},[K(c.commitUrl?"a":"span",{class:"vp-changelog-hash",href:c.commitUrl,target:"_blank",rel:"noreferrer"},[K("code",c.hash.slice(0,5))]),K("span",{class:"vp-changelog-divider"},"-"),K("span",{class:"vp-changelog-message",innerHTML:c.message}),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[n.value.timeOn||"on"," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])]);return()=>t.value.length?[K(Zs,{level:e.headerLevel,anchor:"doc-changelog",text:e.title||n.value.changelog}),K("div",{class:["vp-changelog-wrapper",{active:o.value}]},[K(r),K("ul",{class:"vp-changelog-list"},[t.value.map(c=>c.tag?K(a,{item:c,key:c.tag}):K(s,{item:c,key:c.hash}))])])]:null}}),Kp={enhance:({app:e})=>{e.component("GitContributors",Gp),e.component("GitChangelog",qp)}},Yp=Object.freeze(Object.defineProperty({__proto__:null,default:Kp},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var on=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ii=function(t){return t.tagName==="IMG"},Qp=function(t){return NodeList.prototype.isPrototypeOf(t)},Mi=function(t){return t&&t.nodeType===1},Qr=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Jr=function(t){try{return Array.isArray(t)?t.filter(Ii):Qp(t)?[].slice.call(t).filter(Ii):Mi(t)?[t].filter(Ii):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(Ii):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Jp=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Xp=function(t){var n=t.getBoundingClientRect(),i=n.top,o=n.left,l=n.width,r=n.height,a=t.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=i+s+"px",a.style.left=o+c+"px",a.style.width=l+"px",a.style.height=r+"px",a.style.transform="",a},mn=function(t,n){var i=on({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,i);var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),o},Zp=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=window.Promise||function(w){function F(){}w(F,F)},o=function(w){var F=w.target;if(F===A){v();return}m.indexOf(F)!==-1&&b({target:F})},l=function(){if(!(H||!L.original)){var w=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(X-w)>z.scrollOffset&&setTimeout(v,150)}},r=function(w){var F=w.key||w.keyCode;(F==="Escape"||F==="Esc"||F===27)&&v()},a=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=w;if(w.background&&(A.style.background=w.background),w.container&&w.container instanceof Object&&(F.container=on({},z.container,w.container)),w.template){var M=Mi(w.template)?w.template:document.querySelector(w.template);F.template=M}return z=on({},z,F),m.forEach(function($){$.dispatchEvent(mn("medium-zoom:update",{detail:{zoom:D}}))}),D},s=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(on({},z,w))},c=function(){for(var w=arguments.length,F=Array(w),M=0;M<w;M++)F[M]=arguments[M];var $=F.reduce(function(I,ee){return[].concat(I,Jr(ee))},[]);return $.filter(function(I){return m.indexOf(I)===-1}).forEach(function(I){m.push(I),I.classList.add("medium-zoom-image")}),_.forEach(function(I){var ee=I.type,j=I.listener,ue=I.options;$.forEach(function(Re){Re.addEventListener(ee,j,ue)})}),D},u=function(){for(var w=arguments.length,F=Array(w),M=0;M<w;M++)F[M]=arguments[M];L.zoomed&&v();var $=F.length>0?F.reduce(function(I,ee){return[].concat(I,Jr(ee))},[]):m;return $.forEach(function(I){I.classList.remove("medium-zoom-image"),I.dispatchEvent(mn("medium-zoom:detach",{detail:{zoom:D}}))}),m=m.filter(function(I){return $.indexOf(I)===-1}),D},d=function(w,F){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function($){$.addEventListener("medium-zoom:"+w,F,M)}),_.push({type:"medium-zoom:"+w,listener:F,options:M}),D},f=function(w,F){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return m.forEach(function($){$.removeEventListener("medium-zoom:"+w,F,M)}),_=_.filter(function($){return!($.type==="medium-zoom:"+w&&$.listener.toString()===F.toString())}),D},p=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=w.target,M=function(){var I={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},ee=void 0,j=void 0;if(z.container)if(z.container instanceof Object)I=on({},I,z.container),ee=I.width-I.left-I.right-z.margin*2,j=I.height-I.top-I.bottom-z.margin*2;else{var ue=Mi(z.container)?z.container:document.querySelector(z.container),Re=ue.getBoundingClientRect(),Me=Re.width,je=Re.height,Nt=Re.left,Ut=Re.top;I=on({},I,{width:Me,height:je,left:Nt,top:Ut})}ee=ee||I.width-z.margin*2,j=j||I.height-z.margin*2;var gt=L.zoomedHd||L.original,Xe=Qr(gt)?ee:gt.naturalWidth||ee,T=Qr(gt)?j:gt.naturalHeight||j,Y=gt.getBoundingClientRect(),G=Y.top,Z=Y.left,de=Y.width,_e=Y.height,h=Math.min(Math.max(de,Xe),ee)/de,g=Math.min(Math.max(_e,T),j)/_e,y=Math.min(h,g),O=(-Z+(ee-de)/2+z.margin+I.left)/y,C=(-G+(j-_e)/2+z.margin+I.top)/y,R="scale("+y+") translate3d("+O+"px, "+C+"px, 0)";L.zoomed.style.transform=R,L.zoomedHd&&(L.zoomedHd.style.transform=R)};return new i(function($){if(F&&m.indexOf(F)===-1){$(D);return}var I=function Me(){H=!1,L.zoomed.removeEventListener("transitionend",Me),L.original.dispatchEvent(mn("medium-zoom:opened",{detail:{zoom:D}})),$(D)};if(L.zoomed){$(D);return}if(F)L.original=F;else if(m.length>0){var ee=m;L.original=ee[0]}else{$(D);return}if(L.original.dispatchEvent(mn("medium-zoom:open",{detail:{zoom:D}})),X=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,L.zoomed=Xp(L.original),document.body.appendChild(A),z.template){var j=Mi(z.template)?z.template:document.querySelector(z.template);L.template=document.createElement("div"),L.template.appendChild(j.content.cloneNode(!0)),document.body.appendChild(L.template)}if(L.original.parentElement&&L.original.parentElement.tagName==="PICTURE"&&L.original.currentSrc&&(L.zoomed.src=L.original.currentSrc),document.body.appendChild(L.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),L.original.classList.add("medium-zoom-image--hidden"),L.zoomed.classList.add("medium-zoom-image--opened"),L.zoomed.addEventListener("click",v),L.zoomed.addEventListener("transitionend",I),L.original.getAttribute("data-zoom-src")){L.zoomedHd=L.zoomed.cloneNode(),L.zoomedHd.removeAttribute("srcset"),L.zoomedHd.removeAttribute("sizes"),L.zoomedHd.removeAttribute("loading"),L.zoomedHd.src=L.zoomed.getAttribute("data-zoom-src"),L.zoomedHd.onerror=function(){clearInterval(ue),console.warn("Unable to reach the zoom image target "+L.zoomedHd.src),L.zoomedHd=null,M()};var ue=setInterval(function(){L.zoomedHd.complete&&(clearInterval(ue),L.zoomedHd.classList.add("medium-zoom-image--opened"),L.zoomedHd.addEventListener("click",v),document.body.appendChild(L.zoomedHd),M())},10)}else if(L.original.hasAttribute("srcset")){L.zoomedHd=L.zoomed.cloneNode(),L.zoomedHd.removeAttribute("sizes"),L.zoomedHd.removeAttribute("loading");var Re=L.zoomedHd.addEventListener("load",function(){L.zoomedHd.removeEventListener("load",Re),L.zoomedHd.classList.add("medium-zoom-image--opened"),L.zoomedHd.addEventListener("click",v),document.body.appendChild(L.zoomedHd),M()})}else M()})},v=function(){return new i(function(w){if(H||!L.original){w(D);return}var F=function M(){L.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(L.zoomed),L.zoomedHd&&document.body.removeChild(L.zoomedHd),document.body.removeChild(A),L.zoomed.classList.remove("medium-zoom-image--opened"),L.template&&document.body.removeChild(L.template),H=!1,L.zoomed.removeEventListener("transitionend",M),L.original.dispatchEvent(mn("medium-zoom:closed",{detail:{zoom:D}})),L.original=null,L.zoomed=null,L.zoomedHd=null,L.template=null,w(D)};H=!0,document.body.classList.remove("medium-zoom--opened"),L.zoomed.style.transform="",L.zoomedHd&&(L.zoomedHd.style.transform=""),L.template&&(L.template.style.transition="opacity 150ms",L.template.style.opacity=0),L.original.dispatchEvent(mn("medium-zoom:close",{detail:{zoom:D}})),L.zoomed.addEventListener("transitionend",F)})},b=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=w.target;return L.original?v():p({target:F})},k=function(){return z},E=function(){return m},S=function(){return L.original},m=[],_=[],H=!1,X=0,z=n,L={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?z=t:(t||typeof t=="string")&&c(t),z=on({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},z);var A=Jp(z.background);document.addEventListener("click",o),document.addEventListener("keyup",r),document.addEventListener("scroll",l),window.addEventListener("resize",v);var D={open:p,close:v,toggle:b,update:a,clone:s,attach:c,detach:u,on:d,off:f,getOptions:k,getImages:E,getZoomedImage:S};return D};function em(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var tm=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";em(tm);const ec=Symbol("mediumZoom"),nm=()=>{const e=$e(ec);if(!e)throw new Error("useMediumZoom() is called without provider.");return e};var im={};const om="[vp-content] > img, [vp-content] :not(a) > img",lm=im,rm=kt({enhance({app:e}){const t=Zp(lm);t.refresh=(n=om)=>{t.detach(),t.attach(n)},e.provide(ec,t)},setup(){const e=nm();_i(t=>{t!=="beforeUnmount"&&e.refresh()})}}),am=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Xr=(e,t)=>{e.classList.add(t)},Zr=(e,t)=>{e.classList.remove(t)},sm=e=>{var t;(t=e==null?void 0:e.parentNode)==null||t.removeChild(e)},Po=(e,t,n)=>e<t?t:e>n?n:e,ea=e=>(-1+e)*100,cm=(()=>{const e=[],t=()=>{const n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),um=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,n)=>n.toUpperCase()),Ai=(()=>{const e=["Webkit","O","Moz","ms"],t={},n=l=>{const{style:r}=document.body;if(l in r)return l;const a=l.charAt(0).toUpperCase()+l.slice(1);let s=e.length;for(;s--;){const c=`${e[s]}${a}`;if(c in r)return c}return l},i=l=>{const r=um(l);return t[r]??(t[r]=n(r))},o=(l,r,a)=>{l.style[i(r)]=a};return(l,r)=>{for(const a in r){const s=r[a];Object.hasOwn(r,a)&&Cp(s)&&o(l,a,s)}}})(),Ct={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Te={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:n}=Ct,i=Te.isStarted(),o=Po(e,Ct.minimum,1);Te.percent=o===1?null:o;const l=Te.render(!i),r=l.querySelector(Ct.barSelector);return l.offsetWidth,cm(a=>{Ai(r,{transform:`translate3d(${ea(o)}%,0,0)`,transition:`all ${t}ms ${n}`}),o===1?(Ai(l,{transition:"none",opacity:"1"}),l.offsetWidth,setTimeout(()=>{Ai(l,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{Te.remove(),a()},t)},t)):setTimeout(()=>{a()},t)}),Te},isStarted:()=>typeof Te.percent=="number",start:()=>{Te.percent||Te.set(0);const e=()=>{setTimeout(()=>{Te.percent&&(Te.trickle(),e())},Ct.trickleSpeed)};return e(),Te},done:e=>!e&&!Te.percent?Te:Te.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=Te;return t?(t=Po(t+(typeof e=="number"?e:(1-t)*Po(Math.random()*t,.1,.95)),0,.994),Te.set(t)):Te.start()},trickle:()=>Te.increase(Math.random()*Ct.trickleRate),render:e=>{if(Te.isRendered())return document.getElementById("nprogress");Xr(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=Ct.template;const n=t.querySelector(Ct.barSelector),i=document.querySelector(Ct.parent),o=e?"-100":ea(Te.percent??0);return Ai(n,{transition:"all 0 linear",transform:`translate3d(${o}%,0,0)`}),i&&(i!==document.body&&Xr(i,"nprogress-custom-parent"),i.appendChild(t)),t},remove:()=>{Zr(document.documentElement,"nprogress-busy"),Zr(document.querySelector(Ct.parent),"nprogress-custom-parent"),sm(document.getElementById("nprogress"))}},dm=()=>{lt(()=>{const e=On(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||Te.start()}),e.afterEach(n=>{t.add(n.path),Te.done()})})},hm=kt({setup(){dm()}}),fm=Object.freeze(Object.defineProperty({__proto__:null,default:hm},Symbol.toStringTag,{value:"Module"})),pm=({selector:e='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{Be("click",t=>{const n=t.target;if(n.matches(e)){const i=n.parentElement;i!=null&&i.classList.toggle("collapsed")&&i.scrollIntoView({block:"center",behavior:"instant"})}})},mm={setup(){pm()}},gm=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),vm="VUEPRESS_CODE_TAB_STORE",Ri=Il(vm,{}),_m=ce({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){const n=De(e.active),i=we([]),o=()=>{e.tabId&&(Ri.value[e.tabId]=e.data[n.value].id)},l=(c=n.value)=>{n.value=c<i.value.length-1?c+1:0,i.value[n.value].focus()},r=(c=n.value)=>{n.value=c>0?c-1:i.value.length-1,i.value[n.value].focus()},a=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),l()):c.key==="ArrowLeft"&&(c.preventDefault(),r()),e.tabId&&(Ri.value[e.tabId]=e.data[n.value].id)},s=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>Ri.value[e.tabId]===u);if(c!==-1)return c}return e.active};return lt(()=>{n.value=s(),Ke(()=>e.tabId&&Ri.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const d=e.data.findIndex(({id:f})=>f===c);d!==-1&&(n.value=d)}})}),()=>e.data.length?K("div",{class:"vp-code-tabs"},[K("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const d=u===n.value;return K("button",{type:"button",ref:f=>{f&&(i.value[u]=f)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{n.value=u,o()},onKeydown:f=>{a(f,u)}},t[`title${u}`]({value:c,isActive:d}))})),e.data.map(({id:c},u)=>{const d=u===n.value;return K("div",{class:["vp-code-tab",{active:d}],id:`codetab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},[K("div",{class:"vp-code-tab-title"},t[`title${u}`]({value:c,isActive:d})),t[`tab${u}`]({value:c,isActive:d})])})]):null}}),bm="VUEPRESS_TAB_STORE",Do=Il(bm,{}),ym=ce({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){const n=De(e.active),i=we([]),o=()=>{e.tabId&&(Do.value[e.tabId]=e.data[n.value].id)},l=(c=n.value)=>{n.value=c<i.value.length-1?c+1:0,i.value[n.value].focus()},r=(c=n.value)=>{n.value=c>0?c-1:i.value.length-1,i.value[n.value].focus()},a=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),n.value=u):c.key==="ArrowRight"?(c.preventDefault(),l()):c.key==="ArrowLeft"&&(c.preventDefault(),r()),o()},s=()=>{if(e.tabId){const c=e.data.findIndex(({id:u})=>Do.value[e.tabId]===u);if(c!==-1)return c}return e.active};return lt(()=>{n.value=s(),Ke(()=>e.tabId&&Do.value[e.tabId],(c,u)=>{if(e.tabId&&c!==u){const d=e.data.findIndex(({id:f})=>f===c);d!==-1&&(n.value=d)}})}),()=>e.data.length?K("div",{class:"vp-tabs"},[K("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:c},u)=>{const d=u===n.value;return K("button",{type:"button",ref:f=>{f&&(i.value[u]=f)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{n.value=u,o()},onKeydown:f=>{a(f,u)}},t[`title${u}`]({value:c,isActive:d}))})),e.data.map(({id:c},u)=>{const d=u===n.value;return K("div",{class:["vp-tab",{active:d}],id:`tab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},[K("div",{class:"vp-tab-title"},t[`title${u}`]({value:c,isActive:d})),t[`tab${u}`]({value:c,isActive:d})])})]):null}}),wm={enhance:({app:e})=>{e.component("CodeTabs",_m),e.component("Tabs",ym)}},km=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"})),Lm=JSON.parse(`{"logo":"/img/logo.svg","lastUpdated":false,"contributors":false,"locales":{"/":{"selectLanguageText":"语言","selectLanguageName":"English","navbar":[{"text":"Home","link":"/"},{"text":"Getting Started","link":"/get-started"},{"text":"Documentation","link":"/guide/"},{"text":"Download","link":"/release/release-latest.md"},{"text":"Feedback","link":"https://github.com/lvgl-designer/lvgl-designer.github.io/issues"}],"sidebar":{"/get-started":[{"text":"Getting Started","children":["/get-started.md"]}],"/guide/":[{"text":"Setup","children":["/guide/0_installation.md"]},{"text":"Core Concepts","children":["/guide/1_intro.md","/guide/design.md","/guide/5_hide_lock.md","/guide/3_resource.md","/guide/flag-and-state.md"]},{"text":"Higher Order Component","children":["/guide/hoc/1_statebtn.md","/guide/hoc/2_labelslider.md","/guide/hoc/3_valueslider.md","/guide/hoc/4_checkgroup.md","/guide/hoc/6_statusbar.md","/guide/hoc/7_navigatebar.md","/guide/hoc/5_drawer.md"]},{"text":"Animation","children":["/guide/animation/widget_animation.md","/guide/animation/screen_animation.md","/guide/animation/gif.md","/guide/animation/12_lottie.md"]},{"text":"Advanced Features","children":["/guide/advanced/layout.md","/guide/10_image_fs.md","/guide/4_composite.md","/guide/globalcomponents.md","/guide/7_scr_mgmt.md","/guide/9_comm.md"]},{"text":"Development","children":["/guide/build_mode.md","/guide/100_transplant.md"]},{"text":"Technical Support","children":["/guide/faq.md"]}],"/release/":[{"text":"Release Notes","children":["/release/release-latest.md","/release/release-v0.40.0.md","/release/release-v0.39.0.md","/release/release-v0.38.0.md","/release/release-v0.37.0.md","/release/release-v0.36.0.md","/release/release-v0.35.0.md","/release/release-v0.34.0.md","/release/release-v0.33.1.md","/release/release-v0.33.0.md","/release/release-v0.32.0.md","/release/release-v0.30.0.md","/release/release-v0.28.0.md","/release/release-v0.27.0.md","/release/release-v0.26.0.md","/release/release-v0.25.0.md","/release/release-v0.22.0.md","/release/release-v0.21.0.md","/release/release-v0.20.0.md","/release/release-v0.18.0.md","/release/release-v0.17.1.md","/release/release-v0.17.0.md","/release/release-v0.16.0.md","/release/release-v0.15.0.md","/release/release-v0.14.0.md","/release/release-v0.13.1.md","/release/release-v0.13.0.md"]}]}},"/zh/":{"selectLanguageText":"Languages","selectLanguageName":"简体中文","navbar":[{"text":"首页","link":"/zh/index.md"},{"text":"快速开始","link":"/zh/get-started"},{"text":"文档","link":"/zh/guide/"},{"text":"下载","link":"/zh/release/release-latest.md"},{"text":"反馈","link":"https://github.com/lvgl-designer/lvgl-designer.github.io/issues"}],"sidebar":{"/zh/get-started":[{"text":"快速开始","children":["/zh/get-started.md"]}],"/zh/guide/":[{"text":"安装","children":["/zh/guide/0_installation.md"]},{"text":"核心概念","children":["/zh/guide/1_intro.md","/zh/guide/design.md","/zh/guide/5_hide_lock.md","/zh/guide/3_resource.md","/zh/guide/flag-and-state.md"]},{"text":"高阶组件","children":["/zh/guide/hoc/1_statebtn.md","/zh/guide/hoc/2_labelslider.md","/zh/guide/hoc/3_valueslider.md","/zh/guide/hoc/4_checkgroup.md","/zh/guide/hoc/6_statusbar.md","/zh/guide/hoc/7_navigatebar.md","/zh/guide/hoc/5_drawer.md"]},{"text":"动画","children":["/zh/guide/animation/widget_animation.md","/zh/guide/animation/screen_animation.md","/zh/guide/animation/gif.md","/zh/guide/animation/12_lottie.md"]},{"text":"高级功能","children":["/zh/guide/advanced/layout.md","/zh/guide/10_image_fs.md","/zh/guide/4_composite.md","/zh/guide/globalcomponents.md","/zh/guide/7_scr_mgmt.md","/zh/guide/9_comm.md"]},{"text":"开发","children":["/zh/guide/build_mode.md","/zh/guide/100_transplant.md"]},{"text":"技术支持","children":["/zh/guide/faq.md"]}],"/zh/release/":[{"text":"版本说明","children":["/zh/release/release-latest.md","/zh/release/release-v0.40.0.md","/zh/release/release-v0.39.0.md","/zh/release/release-v0.38.0.md","/zh/release/release-v0.37.0.md","/zh/release/release-v0.36.0.md","/zh/release/release-v0.35.0.md","/zh/release/release-v0.34.0.md","/zh/release/release-v0.33.1.md","/zh/release/release-v0.33.0.md","/zh/release/release-v0.32.0.md","/zh/release/release-v0.30.0.md","/zh/release/release-v0.28.0.md","/zh/release/release-v0.27.0.md","/zh/release/release-v0.26.0.md","/zh/release/release-v0.25.0.md","/zh/release/release-v0.22.0.md","/zh/release/release-v0.21.0.md","/zh/release/release-v0.20.0.md","/zh/release/release-v0.18.0.md","/zh/release/release-v0.17.1.md","/zh/release/release-v0.17.0.md","/zh/release/release-v0.16.0.md","/zh/release/release-v0.15.0.md","/zh/release/release-v0.14.0.md","/zh/release/release-v0.13.1.md","/zh/release/release-v0.13.0.md"]}]}}},"colorMode":"auto","colorModeSwitch":true,"navbar":[],"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),Sm=De(Lm),tc=()=>Sm,nc=Symbol(""),Em=()=>{const e=$e(nc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Cm=(e,t)=>{const{locales:n,...i}=e;return{...i,...n==null?void 0:n[t]}},xm=kt({enhance({app:e}){const t=tc(),n=e._context.provides[vl],i=P(()=>Cm(t.value,n.routeLocale.value));e.provide(nc,i),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return i.value}}})}}),Tm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),ze=()=>{const{pageData:e,pageFrontmatter:t,pageLang:n,siteData:i,siteLocaleData:o,...l}=mt();return{...l,page:e,frontmatter:t,lang:n,site:i,siteLocale:o,theme:tc(),themeLocale:Em()}},ic=Symbol(""),Im=e=>{const t=(n=e.value)=>{const i=window.document.documentElement;i.dataset.theme=n?"dark":"light"};lt(()=>{xl(e,t)}),oo(()=>{t()})},Rl=()=>{const e=$e(ic);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Am=()=>{const{themeLocale:e}=ze(),t=ip(),n=Il("vuepress-color-scheme",e.value.colorMode),i=P({get(){return e.value.colorModeSwitch?n.value==="auto"?t.value:n.value==="dark":e.value.colorMode==="dark"},set(o){o===t.value?n.value="auto":n.value=o?"dark":"light"}});qt(ic,i),Im(i)},oc=Symbol("headers"),Rm=()=>{const e=$s(oc);if(!e)throw new Error("useHeaders() is called without provider.");return e},Om=()=>{const{frontmatter:e,themeLocale:t}=ze(),n=De([]),i=P(()=>e.value.sidebarDepth??t.value.sidebarDepth??2),o=()=>{if(i.value<=0){n.value=[];return}n.value=wp({levels:[2,i.value+1],ignore:[".vp-badge"]})};zf(oc,n),_i(l=>{l==="beforeUnmount"?n.value=[]:o()})};let zo=null,Nn=null;const Pm={wait:()=>zo,pending:()=>{zo=new Promise(e=>{Nn=e})},resolve:()=>{Nn==null||Nn(),zo=null,Nn=null}},lc=()=>Pm,An=(e,t)=>{const{notFound:n,meta:i,path:o}=ri(e,t);return n?{text:o,link:o}:{text:i.title||o,link:o}},Cn=(e="",t="")=>Ys(t)||mi(t)?t:`${ah(e)}${t}`,Dm=e=>({text:e.title,link:e.link,children:Ol(e.children)}),Ol=e=>e?e.map(t=>Dm(t)):[],rc=(e,t)=>[{text:e.title,children:Ol(t)}],ac=(e,t,n,i="")=>{const o=(l,r)=>{var s;const a=ut(l)?An(Cn(r,l)):ut(l.link)?{...l,link:Qs(l.link)?An(Cn(r,l.link)).link:l.link}:l;if("children"in a)return{...a,children:a.children.map(c=>o(c,Cn(r,a.prefix)))};if(a.link===n){const c=((s=t[0])==null?void 0:s.level)===1?t[0].children:t;return{...a,children:Ol(c)}}return a};return e.map(l=>o(l,i))},zm=(e,t,n,i)=>{const o=xp(e).sort((l,r)=>r.length-l.length);for(const l of o)if(Ks(decodeURI(i),l)){const r=e[l];return r?r==="heading"?rc(t,n):ac(r,n,i,l):[]}return console.warn(`${decodeURI(i)} is missing sidebar config.`),[]},sc=Symbol("sidebarItems"),Pl=()=>{const e=$e(sc);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Fm=(e,t,n,i,o)=>e===!1?[]:e==="heading"?rc(t,o):Array.isArray(e)?ac(e,o,n,i):pl(e)?zm(e,t,o,n):[],Mm=()=>{const{frontmatter:e,page:t,routeLocale:n,themeLocale:i}=ze(),o=Rm(),l=Hs(),r=P(()=>e.value.home?!1:e.value.sidebar??i.value.sidebar??"heading"),a=P(()=>Fm(r.value,t.value,l.value,n.value,o.value));qt(sc,a)},Vm=ce({__name:"Badge",props:{type:{default:"tip"},text:{default:""},vertical:{default:void 0}},setup(e){return(t,n)=>(W(),ne("span",{class:Je(["vp-badge",t.type]),style:Rn({verticalAlign:t.vertical})},[Ee(t.$slots,"default",{},()=>[Ft(Ie(t.text),1)])],6))}}),Hm=ce({__name:"VPFadeSlideYTransition",emits:["beforeEnter","beforeLeave"],setup(e){return(t,n)=>(W(),Ce(fl,{name:"vp-fade-slide-y",mode:"out-in",onBeforeEnter:n[0]||(n[0]=i=>t.$emit("beforeEnter")),onBeforeLeave:n[1]||(n[1]=i=>t.$emit("beforeLeave"))},{default:xe(()=>[Ee(t.$slots,"default")]),_:3}))}}),Nm={key:0,class:"vp-features"},Um=ce({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=ze(),n=P(()=>t.value.features??[]);return(i,o)=>n.value.length?(W(),ne("div",Nm,[(W(!0),ne(ye,null,Yt(n.value,l=>(W(),ne("div",{key:l.title,class:"vp-feature"},[le("h2",null,Ie(l.title),1),le("p",null,Ie(l.details),1)]))),128))])):Oe("",!0)}}),$m=["innerHTML"],Bm=["textContent"],jm=ce({__name:"VPHomeFooter",setup(e){const t=vi(),n=P(()=>t.value.footer),i=P(()=>t.value.footerHtml);return(o,l)=>n.value?(W(),ne(ye,{key:0},[i.value?(W(),ne("div",{key:0,class:"vp-footer","vp-footer":"",innerHTML:n.value},null,8,$m)):(W(),ne("div",{key:1,class:"vp-footer","vp-footer":"",textContent:Ie(n.value)},null,8,Bm))],64)):Oe("",!0)}}),Pt=ce({__name:"VPAutoLink",props:{config:{}},setup(e){return(t,n)=>(W(),Ce(J(Sf),{config:t.config},Pu({before:xe(()=>[Ee(t.$slots,"before",go(Di(t.config)))]),after:xe(()=>[Ee(t.$slots,"after",go(Di(t.config)))]),_:2},[t.$slots.default?{name:"default",fn:xe(()=>[Ee(t.$slots,"default",go(Di(t.config)))]),key:"0"}:void 0]),1032,["config"]))}}),Wm={class:"vp-hero"},Gm={key:0,id:"main-title"},qm={key:1,class:"vp-hero-description"},Km={key:2,class:"vp-hero-actions"},Ym=ce({__name:"VPHomeHero",setup(e){const{frontmatter:t,siteLocale:n}=ze(),i=Rl(),o=P(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),l=P(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),r=P(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),a=P(()=>t.value.heroAlt||o.value||"hero"),s=P(()=>t.value.heroHeight??280),c=P(()=>Array.isArray(t.value.actions)?t.value.actions.map(({type:d="primary",...f})=>({type:d,...f})):[]),u=()=>{if(!r.value)return null;const d=K("img",{class:"vp-hero-image",src:kl(r.value),alt:a.value,height:s.value});return t.value.heroImageDark===void 0?d:K(yl,()=>d)};return(d,f)=>(W(),ne("header",Wm,[se(u),o.value?(W(),ne("h1",Gm,Ie(o.value),1)):Oe("",!0),l.value?(W(),ne("p",qm,Ie(l.value),1)):Oe("",!0),c.value.length?(W(),ne("p",Km,[(W(!0),ne(ye,null,Yt(c.value,p=>(W(),Ce(Pt,{key:p.text,class:Je(["vp-hero-action-button",[p.type]]),config:p},null,8,["class","config"]))),128))])):Oe("",!0)]))}}),Qm={class:"vp-home"},Jm={"vp-content":""},Xm=ce({__name:"VPHome",setup(e){return(t,n)=>(W(),ne("main",Qm,[se(Ym),se(Um),le("div",Jm,[se(J(wl))]),se(jm)]))}}),Zm=["aria-hidden"],eg=ce({__name:"VPNavbarBrand",setup(e){const{routeLocale:t,siteLocale:n,themeLocale:i}=ze(),o=Rl(),l=P(()=>i.value.home||t.value),r=P(()=>n.value.title),a=P(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),s=P(()=>i.value.logoAlt??r.value),c=P(()=>r.value.toLocaleUpperCase().trim()===s.value.toLocaleUpperCase().trim()),u=()=>{if(!a.value)return null;const d=K("img",{class:"vp-site-logo",src:kl(a.value),alt:s.value});return i.value.logoDark===void 0?d:K(yl,()=>d)};return(d,f)=>(W(),Ce(J(co),{to:l.value},{default:xe(()=>[se(u),r.value?(W(),ne("span",{key:0,class:Je(["vp-site-name",{"vp-hide-mobile":a.value}]),"aria-hidden":c.value},Ie(r.value),11,Zm)):Oe("",!0)]),_:1},8,["to"]))}}),cc=ce({__name:"VPDropdownTransition",setup(e){const t=i=>{i.style.height=`${i.scrollHeight}px`},n=i=>{i.style.height=""};return(i,o)=>(W(),Ce(fl,{name:"vp-dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:xe(()=>[Ee(i.$slots,"default")]),_:3}))}}),tg=["aria-label"],ng={class:"title"},ig=["aria-label"],og={class:"title"},lg={class:"vp-navbar-dropdown"},rg={class:"vp-navbar-dropdown-subtitle"},ag={key:1},sg={class:"vp-navbar-dropdown-subitem-wrapper"},cg=ce({__name:"VPNavbarDropdown",props:{config:{}},setup(e){const t=e,{config:n}=ll(t),[i,o]=Cl(),l=P(()=>n.value.ariaLabel||n.value.text),r=(s,c)=>c[c.length-1]===s,a=s=>{s.detail===0?o():o(!1)};return _i(()=>{o(!1)}),(s,c)=>(W(),ne("div",{class:Je(["vp-navbar-dropdown-wrapper",{open:J(i)}])},[le("button",{class:"vp-navbar-dropdown-title",type:"button","aria-label":l.value,onClick:a},[le("span",ng,Ie(J(n).text),1),c[1]||(c[1]=le("span",{class:"arrow down"},null,-1))],8,tg),le("button",{class:"vp-navbar-dropdown-title-mobile",type:"button","aria-label":l.value,onClick:c[0]||(c[0]=()=>J(o)())},[le("span",og,Ie(J(n).text),1),le("span",{class:Je(["arrow",J(i)?"down":"right"])},null,2)],8,ig),se(cc,null,{default:xe(()=>[ji(le("ul",lg,[(W(!0),ne(ye,null,Yt(J(n).children,u=>(W(),ne("li",{key:u.text,class:"vp-navbar-dropdown-item"},["children"in u?(W(),ne(ye,{key:0},[le("h4",rg,[u.link?(W(),Ce(Pt,{key:0,config:u,onFocusout:()=>{r(u,J(n).children)&&u.children.length===0&&(i.value=!1)}},null,8,["config","onFocusout"])):(W(),ne("span",ag,Ie(u.text),1))]),le("ul",sg,[(W(!0),ne(ye,null,Yt(u.children,d=>(W(),ne("li",{key:d.link,class:"vp-navbar-dropdown-subitem"},[se(Pt,{config:d,onFocusout:()=>{r(d,u.children)&&r(u,J(n).children)&&J(o)(!1)}},null,8,["config","onFocusout"])]))),128))])],64)):(W(),Ce(Pt,{key:1,config:u,onFocusout:()=>{r(u,J(n).children)&&J(o)(!1)}},null,8,["config","onFocusout"]))]))),128))],512),[[Ki,J(i)]])]),_:1})],2))}}),uc=(e,t="")=>ut(e)?An(Cn(t,e)):"children"in e?{...e,children:e.children.map(n=>uc(n,Cn(t,e.prefix)))}:{...e,link:Qs(e.link)?An(Cn(t,e.link)).link:e.link},ug=()=>{const{themeLocale:e}=ze();return P(()=>(e.value.navbar||[]).map(t=>uc(t)))},dc=e=>!gi(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,dg=()=>{const{themeLocale:e}=ze(),t=P(()=>e.value.repo),n=P(()=>t.value?dc(t.value):null),i=P(()=>t.value&&!gi(t.value)?`https://github.com/${t.value}`:t.value),o=P(()=>i.value?e.value.repoLabel?e.value.repoLabel:n.value===null?"Source":n.value:null);return P(()=>!i.value||!o.value?[]:[{text:o.value,link:i.value}])},hg=()=>{const e=Pn(),t=Ep(),{routeLocale:n,site:i,siteLocale:o,theme:l,themeLocale:r}=ze();return P(()=>{const a=Object.keys(i.value.locales);if(a.length<2)return[];const s=e.path,c=e.fullPath;return[{text:`${r.value.selectLanguageText}`,ariaLabel:`${r.value.selectLanguageAriaLabel??r.value.selectLanguageText}`,children:a.map(d=>{var E,S;const f=((E=i.value.locales)==null?void 0:E[d])??{},p=((S=l.value.locales)==null?void 0:S[d])??{},v=`${f.lang}`,b=p.selectLanguageName??v;if(v===o.value.lang)return{text:b,activeMatch:".",link:e.fullPath};const k=s.replace(n.value,d);return{text:b,link:t.value.some(m=>m===k)?c.replace(s,k):p.home??d}})}]})},fg="719px",pg={mobile:fg};var ai;(function(e){e.Mobile="mobile"})(ai||(ai={}));const mg={[ai.Mobile]:Number.parseInt(pg.mobile.replace("px",""),10)},hc=(e,t)=>{const n=mg[e];Number.isInteger(n)&&(Be("orientationchange",()=>{t(n)},!1),Be("resize",()=>{t(n)},!1),lt(()=>{t(n)}))},gg=["aria-label"],fc=ce({__name:"VPNavbarItems",setup(e){const{themeLocale:t}=ze(),n=ug(),i=hg(),o=dg(),l=De(!1),r=P(()=>t.value.navbarLabel??"site navigation"),a=P(()=>[...n.value,...i.value,...o.value]);return hc(ai.Mobile,s=>{l.value=window.innerWidth<s}),(s,c)=>a.value.length?(W(),ne("nav",{key:0,class:"vp-navbar-items","aria-label":r.value},[(W(!0),ne(ye,null,Yt(a.value,u=>(W(),ne("div",{key:u.text,class:"vp-navbar-item"},["children"in u?(W(),Ce(cg,{key:0,class:Je({mobile:l.value}),config:u},null,8,["class","config"])):(W(),Ce(Pt,{key:1,config:u},null,8,["config"]))]))),128))],8,gg)):Oe("",!0)}}),Dn=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},vg={},_g={class:"dark-icon",viewBox:"0 0 32 32"};function bg(e,t){return W(),ne("svg",_g,[...t[0]||(t[0]=[le("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)])])}const yg=Dn(vg,[["render",bg]]),wg={},kg={class:"light-icon",viewBox:"0 0 32 32"};function Lg(e,t){return W(),ne("svg",kg,[...t[0]||(t[0]=[sd('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)])])}const Sg=Dn(wg,[["render",Lg]]),Eg=["title"],Cg=ce({__name:"VPToggleColorModeButton",setup(e){const{themeLocale:t}=ze(),n=Rl(),i=()=>{n.value=!n.value};return(o,l)=>(W(),ne("button",{type:"button",class:"vp-toggle-color-mode-button",title:J(t).toggleColorMode,onClick:i},[ji(se(Sg,null,null,512),[[Ki,!J(n)]]),ji(se(yg,null,null,512),[[Ki,J(n)]])],8,Eg))}}),xg=["title"],Tg=ce({__name:"VPToggleSidebarButton",emits:["toggle"],setup(e){const{themeLocale:t}=ze();return(n,i)=>(W(),ne("div",{class:"vp-toggle-sidebar-button",title:J(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>n.$emit("toggle"))},[...i[1]||(i[1]=[le("div",{class:"icon","aria-hidden":"true"},[le("span"),le("span"),le("span")],-1)])],8,xg))}}),Ig={ref:"navbar-brand"},Ag=ce({__name:"VPNavbar",emits:["toggleSidebar"],setup(e){const t=qs("SearchBox")?Ka("SearchBox"):()=>null,{themeLocale:n}=ze(),i=$l("navbar"),o=$l("navbar-brand"),l=De(0),r=P(()=>l.value?{maxWidth:`${l.value}px`}:{}),a=(s,c)=>{var f;const u=(f=s==null?void 0:s.ownerDocument.defaultView)==null?void 0:f.getComputedStyle(s,null)[c],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d};return hc(ai.Mobile,s=>{var u;const c=a(i.value,"paddingLeft")+a(i.value,"paddingRight");window.innerWidth<s?l.value=0:l.value=i.value.offsetWidth-c-(((u=o.value)==null?void 0:u.offsetWidth)??0)}),(s,c)=>(W(),ne("header",{ref_key:"navbar",ref:i,class:"vp-navbar","vp-navbar":""},[se(Tg,{onToggle:c[0]||(c[0]=u=>s.$emit("toggleSidebar"))}),le("span",Ig,[se(eg)],512),le("div",{class:"vp-navbar-items-wrapper",style:Rn(r.value)},[Ee(s.$slots,"before"),se(fc,{class:"vp-hide-mobile"}),Ee(s.$slots,"after"),J(n).colorModeSwitch?(W(),Ce(Cg,{key:0})):Oe("",!0),se(J(t))],4)],512))}}),Rg={},Og={class:"edit-icon",viewBox:"0 0 1024 1024"};function Pg(e,t){return W(),ne("svg",Og,[...t[0]||(t[0]=[le("g",{fill:"currentColor"},[le("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),le("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})],-1)])])}const Dg=Dn(Rg,[["render",Pg]]),zg={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Fg=({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const n=dc(e);return n!==null?zg[n]:null},Mg=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const l=Fg({docsRepo:e,editLinkPattern:o});return l?l.replace(/:repo/,gi(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Es(`${Ss(n)}/${i}`)):null},Vg=()=>{const{frontmatter:e,page:t,themeLocale:n}=ze();return P(()=>{if(!(e.value.editLink??n.value.editLink??!0))return null;const{repo:o,docsRepo:l=o,docsBranch:r="main",docsDir:a="",editLinkText:s}=n.value;if(!l)return null;const c=Mg({docsRepo:l,docsBranch:r,docsDir:a,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern??n.value.editLinkPattern});return c?{text:s??"Edit this page",link:c}:null})},Hg={class:"vp-page-meta"},Ng={key:0,class:"vp-meta-item edit-link"},Ug={class:"vp-meta-item git-info"},$g={key:0,class:"vp-meta-item last-updated"},Bg={class:"meta-item-label"},jg=["datetime"],Wg={key:1,class:"vp-meta-item contributors"},Gg={class:"meta-item-label"},qg={class:"meta-item-info"},Kg=["title"],Yg=ce({__name:"VPPageMeta",setup(e){const{frontmatter:t,themeLocale:n}=ze(),i=Js(()=>t.value.contributors??n.value.contributors??!0),o=Vg(),l=Xs(()=>t.value.lastUpdated??n.value.lastUpdated??!0);return(r,a)=>(W(),ne("footer",Hg,[J(o)?(W(),ne("div",Ng,[se(Pt,{class:"label",config:J(o)},{before:xe(()=>[se(Dg)]),_:1},8,["config"])])):Oe("",!0),le("div",Ug,[J(l)?(W(),ne("div",$g,[le("span",Bg,Ie(J(n).lastUpdatedText??J(l).locale)+": ",1),le("time",{class:"meta-item-info",datetime:J(l).iso,"data-allow-mismatch":""},Ie(J(l).text),9,jg)])):Oe("",!0),J(i).length?(W(),ne("div",Wg,[le("span",Gg,Ie(J(n).contributorsText)+": ",1),le("span",qg,[(W(!0),ne(ye,null,Yt(J(i),(s,c)=>(W(),ne(ye,{key:c},[le("span",{class:"contributor",title:`email: ${s.email}`},Ie(s.name),9,Kg),c!==J(i).length-1?(W(),ne(ye,{key:0},[Ft(", ")],64)):Oe("",!0)],64))),128))])])):Oe("",!0)])]))}}),Qg=()=>{const e=On(),t=Pn();return n=>{n&&(Ys(n)?t.fullPath!==n&&e.push(n):mi(n)?window.open(n):e.push(encodeURI(n)))}},ta=(e,t)=>e===!1?!1:ut(e)?An(e,t):pl(e)?{...e,link:An(e.link,t).link}:null,Qo=(e,t,n)=>{const i=e.findIndex(l=>l.link===t);if(i!==-1){const l=e[i+n];return l?l.link?l:"prefix"in l&&!ri(l.prefix).notFound?{...l,link:l.prefix}:null:null}for(const l of e)if("children"in l){const r=Qo(l.children,t,n);if(r)return r}const o=e.findIndex(l=>"prefix"in l&&l.prefix===t);if(o!==-1){const l=e[o+n];return l?l.link?l:"prefix"in l&&!ri(l.prefix).notFound?{...l,link:l.prefix}:null:null}return null},Jg=()=>{const{frontmatter:e,themeLocale:t}=ze(),n=Pl(),i=Hs(),o=P(()=>{const r=ta(e.value.prev,i.value);return r===!1?null:r??(t.value.prev===!1?null:Qo(n.value,i.value,-1))}),l=P(()=>{const r=ta(e.value.next,i.value);return r===!1?null:r??(t.value.next===!1?null:Qo(n.value,i.value,1))});return{prevLink:o,nextLink:l}},Xg=["aria-label"],Zg={class:"hint"},ev={class:"link"},tv={class:"external-link"},nv={class:"hint"},iv={class:"link"},ov={class:"external-link"},lv=ce({__name:"VPPageNav",setup(e){const{themeLocale:t}=ze(),n=Qg(),{prevLink:i,nextLink:o}=Jg(),l=P(()=>t.value.pageNavbarLabel??"page navigation");return Be("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?o.value&&(n(o.value.link),r.preventDefault()):r.key==="ArrowLeft"&&i.value&&(n(i.value.link),r.preventDefault()))}),(r,a)=>J(i)||J(o)?(W(),ne("nav",{key:0,class:"vp-page-nav","aria-label":l.value},[J(i)?(W(),Ce(Pt,{key:0,class:"prev",config:J(i)},{default:xe(()=>[le("div",Zg,[a[0]||(a[0]=le("span",{class:"arrow left"},null,-1)),Ft(" "+Ie(J(t).prev??"Prev"),1)]),le("div",ev,[le("span",tv,Ie(J(i).text),1)])]),_:1},8,["config"])):Oe("",!0),J(o)?(W(),Ce(Pt,{key:1,class:"next",config:J(o)},{default:xe(()=>[le("div",nv,[Ft(Ie(J(t).next??"Next")+" ",1),a[1]||(a[1]=le("span",{class:"arrow right"},null,-1))]),le("div",iv,[le("span",ov,Ie(J(o).text),1)])]),_:1},8,["config"])):Oe("",!0)],8,Xg)):Oe("",!0)}}),rv={class:"vp-page"},av={"vp-content":""},sv=ce({__name:"VPPage",setup(e){return(t,n)=>(W(),ne("main",rv,[Ee(t.$slots,"top"),le("div",av,[Ee(t.$slots,"content-top"),se(J(wl)),Ee(t.$slots,"content-bottom")]),se(Yg),se(lv),Ee(t.$slots,"bottom")]))}}),na=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),cv=(e,t)=>{if(t.hash===e)return!0;const n=na(t.path),i=na(e);return n===i},pc=(e,t)=>e.link&&cv(e.link,t)?!0:"children"in e?e.children.some(n=>pc(n,t)):!1,uv={class:"vp-sidebar-children"},dv=ce({__name:"VPSidebarItem",props:{item:{},depth:{default:0}},setup(e){const t=e,{item:n,depth:i}=ll(t),o=Pn(),l=On(),r=P(()=>n.value.collapsible),a=P(()=>pc(n.value,o)),s=P(()=>({"vp-sidebar-item":!0,"vp-sidebar-heading":i.value===0,active:a.value,collapsible:r.value})),c=P(()=>r.value?a.value:!0),[u,d]=Cl(c.value),f=v=>{r.value&&(v.preventDefault(),d())},p=l.afterEach(()=>{hi(()=>{u.value=c.value})});return sl(()=>{p()}),(v,b)=>{const k=Ka("VPSidebarItem",!0);return W(),ne("li",null,[J(n).link?(W(),Ce(Pt,{key:0,class:Je(s.value),config:J(n)},{after:xe(()=>[r.value?(W(),ne("span",{key:0,class:Je(["arrow",J(u)?"down":"right"])},null,2)):Oe("",!0)]),_:1},8,["class","config"])):(W(),ne("p",{key:1,tabindex:"0",class:Je(s.value),onClick:f,onKeydown:Wd(f,["enter"])},[Ft(Ie(J(n).text)+" ",1),r.value?(W(),ne("span",{key:0,class:Je(["arrow",J(u)?"down":"right"])},null,2)):Oe("",!0)],34)),"children"in J(n)&&J(n).children.length?(W(),Ce(cc,{key:2},{default:xe(()=>[ji(le("ul",uv,[(W(!0),ne(ye,null,Yt(J(n).children,E=>(W(),Ce(k,{key:`${J(i)}${E.text}${E.link}`,item:E,depth:J(i)+1},null,8,["item","depth"]))),128))],512),[[Ki,J(u)]])]),_:1})):Oe("",!0)])}}}),hv={key:0,class:"vp-sidebar-items"},fv=ce({__name:"VPSidebarItems",setup(e){const t=Pn(),n=Pl();return lt(()=>{Ke(()=>t.hash,i=>{const o=document.querySelector(".vp-sidebar");if(!o)return;const l=document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${t.path}${i}"]`);if(!l)return;const{top:r,height:a}=o.getBoundingClientRect(),{top:s,height:c}=l.getBoundingClientRect();s<r?l.scrollIntoView(!0):s+c>r+a&&l.scrollIntoView(!1)})}),(i,o)=>J(n).length?(W(),ne("ul",hv,[(W(!0),ne(ye,null,Yt(J(n),l=>(W(),Ce(dv,{key:`${l.text}${l.link}`,item:l},null,8,["item"]))),128))])):Oe("",!0)}}),pv={class:"vp-sidebar","vp-sidebar":""},mv=ce({__name:"VPSidebar",setup(e){return(t,n)=>(W(),ne("aside",pv,[se(fc),Ee(t.$slots,"top"),se(fv),Ee(t.$slots,"bottom")]))}}),gv=ce({__name:"Layout",setup(e){const{frontmatter:t,page:n,themeLocale:i}=ze(),o=P(()=>t.value.navbar??i.value.navbar??!0),l=Pl(),r=De(!1),a=k=>{r.value=typeof k=="boolean"?k:!r.value},s={x:0,y:0},c=k=>{s.x=k.changedTouches[0].clientX,s.y=k.changedTouches[0].clientY},u=k=>{const E=k.changedTouches[0].clientX-s.x,S=k.changedTouches[0].clientY-s.y;Math.abs(E)>Math.abs(S)&&Math.abs(E)>40&&(E>0&&s.x<=80?a(!0):a(!1))},d=P(()=>t.value.externalLinkIcon??i.value.externalLinkIcon??!0),f=P(()=>[{"no-navbar":!o.value,"no-sidebar":!l.value.length,"sidebar-open":r.value,"external-link-icon":d.value},t.value.pageClass]);_i(()=>{a(!1)});const p=lc(),v=p.resolve,b=p.pending;return(k,E)=>(W(),ne("div",{class:Je(["vp-theme-container",f.value]),"vp-container":"",onTouchstart:c,onTouchend:u},[Ee(k.$slots,"navbar",{},()=>[o.value?(W(),Ce(Ag,{key:0,onToggleSidebar:a},{before:xe(()=>[Ee(k.$slots,"navbar-before")]),after:xe(()=>[Ee(k.$slots,"navbar-after")]),_:3})):Oe("",!0)]),le("div",{class:"vp-sidebar-mask",onClick:E[0]||(E[0]=S=>a(!1))}),Ee(k.$slots,"sidebar",{},()=>[se(mv,null,{top:xe(()=>[Ee(k.$slots,"sidebar-top")]),bottom:xe(()=>[Ee(k.$slots,"sidebar-bottom")]),_:3})]),Ee(k.$slots,"page",{},()=>[se(Hm,{onBeforeEnter:J(v),onBeforeLeave:J(b)},{default:xe(()=>[J(t).home?(W(),Ce(Xm,{key:0})):(W(),Ce(sv,{key:J(n).path},{top:xe(()=>[Ee(k.$slots,"page-top")]),"content-top":xe(()=>[Ee(k.$slots,"page-content-top")]),"content-bottom":xe(()=>[Ee(k.$slots,"page-content-bottom")]),bottom:xe(()=>[Ee(k.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"])])],34))}}),vv={class:"vp-theme-container","vp-container":""},_v={class:"page"},bv={"vp-content":""},yv=ce({__name:"NotFound",setup(e){const{routeLocale:t,themeLocale:n}=ze(),i=P(()=>n.value.notFound??["Not Found"]),o=()=>i.value[Math.floor(Math.random()*i.value.length)],l=P(()=>n.value.home??t.value),r=P(()=>n.value.backToHome??"Back to home");return(a,s)=>(W(),ne("div",vv,[le("main",_v,[le("div",bv,[s[0]||(s[0]=le("h1",null,"404",-1)),le("blockquote",null,Ie(o()),1),se(J(co),{to:l.value},{default:xe(()=>[Ft(Ie(r.value),1)]),_:1},8,["to"])])])]))}}),wv=Dn(yv,[["__scopeId","data-v-30fc94a0"]]),kv=kt({enhance({app:e,router:t}){qs("Badge")||e.component("Badge",Vm);const n=t.options.scrollBehavior;t.options.scrollBehavior=async(...i)=>(await lc().wait(),n(...i))},setup(){Am(),Om(),Mm()},layouts:{Layout:gv,NotFound:wv}}),Lv=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),Sv=[{title:"LVGL Master Designer",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[{level:3,title:"Core Capabilities",slug:"core-capabilities",link:"#core-capabilities",children:[]}]},{level:2,title:"Contact Us",slug:"contact-us",link:"#contact-us",children:[]}],path:"/",pathLocale:"/",extraFields:["LVGL Master Designer",`
  

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

  
    
    Cooperation
  
  
    
    WeChat Group
  
  
    
    QQ Group
  
  
    
    Subscribe
  

`]},{title:"Getting Started",headers:[{level:2,title:"Installation",slug:"installation",link:"#installation",children:[]},{level:2,title:"Project Creation",slug:"project-creation",link:"#project-creation",children:[]},{level:2,title:"Design Environment Layout",slug:"design-environment-layout",link:"#design-environment-layout",children:[]},{level:2,title:"Design Workflow",slug:"design-workflow",link:"#design-workflow",children:[]},{level:2,title:"Code Generation",slug:"code-generation",link:"#code-generation",children:[]},{level:2,title:"Simulation",slug:"simulation",link:"#simulation",children:[]},{level:2,title:"Project Persistence",slug:"project-persistence",link:"#project-persistence",children:[]},{level:2,title:"Next Steps",slug:"next-steps",link:"#next-steps",children:[]}],path:"/get-started.html",pathLocale:"/",extraFields:["Getting Started",`This guide provides concise instructions to help you quickly get started with anyui for LVGL UI development.
Installation
For detailed installation instructions, please refer to the Installation guide.
Project Creation

Warning
Please make sure the project path does not contain spaces and non-ASCII characters, e.g. Chinese characters.
Examples:
✓ C:\\anyui_projects\\my_project
✗ C:\\anyui projects\\my_project
✗ C:\\anyui_projects\\应用123

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
Download the executable file from the Latest Release and run it, and follow the wizard instructions.

Warning
Make sure the installation directory does not contain spaces and non-ASCII characters, as this may cause issues with the building and simulation processes.
Examples:
✓ C:\\app\\anyui
✗ C:\\app\\anyui应用
✗ C:\\Program Files\\anyui


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


`]},{title:"Introduction",headers:[{level:2,title:"Component",slug:"component",link:"#component",children:[{level:3,title:"Basic Component",slug:"basic-component",link:"#basic-component",children:[]},{level:3,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:3,title:"Template Component",slug:"template-component",link:"#template-component",children:[]},{level:3,title:"Global Component",slug:"global-component",link:"#global-component",children:[]}]},{level:2,title:"Property",slug:"property",link:"#property",children:[]},{level:2,title:"Style",slug:"style",link:"#style",children:[]},{level:2,title:"Action",slug:"action",link:"#action",children:[]},{level:2,title:"Command",slug:"command",link:"#command",children:[]},{level:2,title:"Event",slug:"event",link:"#event",children:[]}],path:"/guide/1_intro.html",pathLocale:"/",extraFields:["Introduction",`Component
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
Property
Properties define the initial state of components. They are essential for configuring component appearance. Properties are categorized to common properties and widget specific properties. For example, width, height, x, y are common properties for all components, while arc_width are widget specific properties for components with Arc.
Style
Styles define the visual appearance of components. They are used to customize component properties such as background, border, padding and so on.
Component in different states can have different styles. For example, a button can have different styles for normal, pressed, disabled and so on.
Action
Actions represent LVGL events triggered by user interactions, also referred to as User Events. Examples include button presses, slider adjustments, and touch gestures.
Actions can be configured to modify component properties dynamically, switch to another screen, or trigger an animation, etc.
You can configure any action for any component, as long as LVGL supports. Also, you can configure actions for the same trigger and same target in order to achieve sequential execution. For example, with some button click, you can first remove hidden flag of a widget then play an animation to show it. It's highly flexible and allows you to create complex user interactions.
Command
Commands are messages transmitted from the upper layers (Application/UI) to lower layers (SDK/Hardware). Typical command examples include Bluetooth connection requests, WiFi configuration, and time synchronization operations.
Command is extended by anyui for communication between upper layers and lower layers.
Refer to Command for comprehensive command documentation.
Event
Events are asynchronous notifications originating from lower layers (SDK/Hardware) directed to upper layers (Application/UI), also known as System Events. Common event types include battery level changes, sensor data updates, and network status notifications.
Event is extended by anyui for communication between upper layers and lower layers.
Refer to Event for comprehensive event documentation.
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


Warning
We strive to deliver a &quot;What You See Is What You Get&quot; experience, so hidden components are intentionally excluded from code generation and build processes.
However, this exclusion may lead to some side effects:


If a hidden component is still referenced by other components, it will cause the build process to fail. For instance, if a hidden component is used as an event target or its properties are accessed in the code.


This behavior applies to both widgets and screens.



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

`]},{title:"Documentation",headers:[{level:2,title:"Setup",slug:"setup",link:"#setup",children:[]},{level:2,title:"Core Concepts",slug:"core-concepts",link:"#core-concepts",children:[]},{level:2,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:2,title:"Animation",slug:"animation",link:"#animation",children:[]},{level:2,title:"Advanced Features",slug:"advanced-features",link:"#advanced-features",children:[]},{level:2,title:"Development",slug:"development",link:"#development",children:[]},{level:2,title:"Technical Support",slug:"technical-support",link:"#technical-support",children:[]},{level:2,title:"Documentation Structure",slug:"documentation-structure",link:"#documentation-structure",children:[]}],path:"/guide/",pathLocale:"/",extraFields:["Documentation",`This documentation provides comprehensive technical guidance for developing LVGL user interfaces using anyui's visual development environment.
Setup
Begin with environment configuration and project initialization.

Installation - Platform-specific installation procedures

Core Concepts
Fundamental principles underlying anyui's design methodology.

Introduction - Understanding the component system framework
Design - Component positioning, arrangement strategies, and design tools
Hide and Lock - Component visibility and edit state management
Resource Management - Resource management for images, fonts, and multimedia
Flag and State - Widget flags and states management

Higher Order Component
Advanced component patterns for sophisticated UI implementations.

State Button - Button with multiple states and visual feedback
Label Slider - Slider with integrated value labels
Value Slider - Slider with customizable value display
Check Group &amp; Radio Group - Group of related checkboxes with mutual exclusion
StatusBar - Application status display component
NavigateBar - Application navigation component
Drawer - Sliding panel for additional content

Animation
Animation support for widget and screen switch.

Widget Animation - Widget animation management and application
Screen Load Animation - Screen load animation management and application
GIF Animation - GIF image support and decoder functionality in LVGL
Lottie Animation - Vector-based animation implementation

Advanced Features
Specialized features for complex applications and multimedia integration.

Layout - Flexible layout system for complex UI arrangements
Template Component - Reusable component template creation and management
Global Components - Cross-screen component sharing and synchronization
Screen Management - Complex application screen management
Communication Commands and Events - Component interaction patterns and event handling
Use External Image File as Source - External image file support for flexible image management

Development
Professional development processes and deployment strategies.

Build Mode - Build system configuration and optimization
Code Transplant - Cross-platform deployment procedures

Technical Support
Troubleshooting resources and technical assistance.

FAQ - Common issues and resolution procedures


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

`]},{title:"Design",headers:[{level:2,title:"Create Components",slug:"create-components",link:"#create-components",children:[]},{level:2,title:"Select Components",slug:"select-components",link:"#select-components",children:[]},{level:2,title:"Multi-Select Components",slug:"multi-select-components",link:"#multi-select-components",children:[]},{level:2,title:"Move Components",slug:"move-components",link:"#move-components",children:[]},{level:2,title:"Resize Components",slug:"resize-components",link:"#resize-components",children:[{level:3,title:"Proportional Resizing",slug:"proportional-resizing",link:"#proportional-resizing",children:[]}]},{level:2,title:"Duplicate Components",slug:"duplicate-components",link:"#duplicate-components",children:[]},{level:2,title:"Delete Components",slug:"delete-components",link:"#delete-components",children:[]},{level:2,title:"Align Components",slug:"align-components",link:"#align-components",children:[]},{level:2,title:"Zoom Controls",slug:"zoom-controls",link:"#zoom-controls",children:[]},{level:2,title:"Move Canvas",slug:"move-canvas",link:"#move-canvas",children:[]}],path:"/guide/design.html",pathLocale:"/",extraFields:["Design",`anyui provides an intuitive visual design environment for creating sophisticated user interfaces. The platform offers drag-and-drop functionality with precise component layout controls, enabling efficient UI development.
Create Components
Initialize your interface by adding components from the widget library. Drag the required components onto the canvas to begin prototyping and constructing your user interface according to your design specifications.
Select Components
Click on any component to select it. Upon selection, the component's properties, styles, and event handlers become accessible in the side panel, allowing for detailed customization of all design aspects.
Multi-Select Components
There're several ways to select multiple components:

Holding the Ctrl/Cmd key while clicking on each desired component on the canvas.
Holding and dragging the mouse to select multiple components.
Holding the Shift key while clicking on each desired component on the widget tree to select a range of components, or Ctrl/Cmd key while clicking on widget tree node to select components continuously.

The selected components are visually distinguished with orange highlighting for clear identification.

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
Easily zoom in and out of the design canvas by Ctrl/Cmd + mouse wheel, or utilize the zoom controls available in the toolbar.
Pressing the zoom reset button will restore the canvas to a 100% zoom level.
Move Canvas
Move canvas by dragging the canvas area beyond the screen boundaries.
When the mouse cursor is positioned within the screen area, the default drag behavior enables multi-selection of components. However, holding the Spacebar key temporarily switches to canvas moving mode until the mouse button is released.
`]},{title:"FAQ",headers:[{level:2,title:"Build and Run",slug:"build-and-run",link:"#build-and-run",children:[{level:3,title:"Why do I encounter build errors even with an empty project on Windows?",slug:"why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",link:"#why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",children:[]},{level:3,title:"Why does it take a long time to build the project?",slug:"why-does-it-take-a-long-time-to-build-the-project",link:"#why-does-it-take-a-long-time-to-build-the-project",children:[]},{level:3,title:"Why are all the projects missing after upgrading to v0.37.0?",slug:"why-are-all-the-projects-missing-after-upgrading-to-v0-37-0",link:"#why-are-all-the-projects-missing-after-upgrading-to-v0-37-0",children:[]},{level:3,title:"Why does the project build and run successfully on Windows but fail after upgrading to v0.37.0?",slug:"why-does-the-project-build-and-run-successfully-on-windows-but-fail-after-upgrading-to-v0-37-0",link:"#why-does-the-project-build-and-run-successfully-on-windows-but-fail-after-upgrading-to-v0-37-0",children:[]}]}],path:"/guide/faq.html",pathLocale:"/",extraFields:["FAQ",`Build and Run
Why do I encounter build errors even with an empty project on Windows?
Please ensure that:

You have installed the latest version of anyui. Latest Release
The installation path does not contain whitespace ( ), or non-ASCII characters; Chinese characters are a common example of such cases.


Info
✓ C:\\app\\anyui
✗ C:\\app\\anyui应用
✗ C:\\Program Files\\anyui


The project path does not contain whitespace ( ), or non-ASCII characters; Chinese characters are a common example of such cases.


Info
✓ C:\\anyui_projects\\my_project
✗ C:\\anyui projects\\my_project
✗ C:\\anyui_projects\\应用123

Why does it take a long time to build the project?

Please ensure that you have installed the latest version of anyui. Latest Release
We offer three build modes: Full, Incremental, and Mini. Please refer to Build Modes to choose the most suitable mode for your requirements.

Why are all the projects missing after upgrading to v0.37.0?
Starting from v0.37.0, we introduced a brand-new workspace management system for projects, and we no longer use a fixed directory for project storage. You need to manually &quot;import&quot; your existing projects into the new workspace. The paths of your old projects remain unchanged, but they must be added to the workspace explicitly.
As for the new created projects, they'll automatically be added to the workspace.
Why does the project build and run successfully on Windows but fail after upgrading to v0.37.0?
Since v0.37.0, we have implemented a new workspace management system and updated the build toolchain configuration, which includes some breaking changes.

If you continue to install anyui on your system disk, your existing projects should work as before.
If you have changed the installation directory to a non-system disk, you will need to perform some manual steps to make your old projects work:

Create a new project, then copy the Makefile from this new project to replace the one in your old project.




Warning
Please make sure to backup your project before performing these steps.

`]},{title:"Flag and State",headers:[{level:2,title:"Flag",slug:"flag",link:"#flag",children:[{level:3,title:"Initial Flags",slug:"initial-flags",link:"#initial-flags",children:[]},{level:3,title:"Modifying Flags",slug:"modifying-flags",link:"#modifying-flags",children:[]}]},{level:2,title:"State",slug:"state",link:"#state",children:[{level:3,title:"Initial States",slug:"initial-states",link:"#initial-states",children:[]},{level:3,title:"Modifying States",slug:"modifying-states",link:"#modifying-states",children:[]}]}],path:"/guide/flag-and-state.html",pathLocale:"/",extraFields:["Flag and State",`Flag and State
Flag
A Flag represents a capability that an LVGL widget possesses. For example, the clickable flag indicates whether a widget can respond to click events. A classic example of a clickable widget is a button, while a label is typically non-clickable by default.
For more detailed information about flags, please refer to the LVGL documentation.
Initial Flags
When a widget is created, it has predefined initial flags. For instance, a button is clickable by default, whereas a label is not. These initial flags can be modified according to your requirements.
You can view and modify a widget's flags (add, remove, or toggle) using the widget inspector. For example, to make a button non-clickable, set its clickable flag to false. Conversely, you can enable clickability for a label by setting its clickable flag to true.

Modifying Flags
Flags can be modified (added, removed, or toggled) through actions or events. For example, you could make a button non-clickable after it is clicked by setting its clickable flag to false in the click event handler. While specific scenarios may vary, this demonstrates the flexibility of flag management.

State
Widgets can exist in different states, which dynamically change based on user interaction. Consider a button: it initially starts in the &quot;default&quot; state, and when clicked by a user, it can dynamically transition to &quot;focused&quot;, &quot;pressed&quot;, and &quot;checked&quot; states (if the checkable flag is enabled).
For more detailed information about states, please refer to the LVGL documentation.
Initial States
When a widget is created, it has predefined initial states. For example, a checkbox is unchecked by default. These initial states can be modified according to your needs.
You can view and modify (add, remove, or toggle) a widget's states using the widget inspector. For instance, to make a checkbox checked by default, set its checked state to true.

Modifying States
LVGL handles state transitions automatically based on user interactions for typical widgets. For example, when a user clicks a checkbox, LVGL updates its checked state to true, and when the user unchecks it, the state changes to false. For buttons, if the checkable flag is enabled, the checked state will update accordingly. If the checkable flag is disabled, the checked state will remain unchanged.
For widgets like labels, which are not checkable by default, the checked state is not automatically managed by LVGL. However, you can enable the checkable flag for a label and manually control its checked state (setting it to true or false) according to your application logic.
States can also be modified (added, removed, or toggled) through custom actions or events. For example, you could programmatically set a button to the checked state after it is clicked by updating its checked state to true in the click event handler.

`]},{title:"Global Components",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Global Status Bar",slug:"global-status-bar",link:"#global-status-bar",children:[{level:3,title:"Enable Global Status Bar",slug:"enable-global-status-bar",link:"#enable-global-status-bar",children:[]},{level:3,title:"Global Component View",slug:"global-component-view",link:"#global-component-view",children:[]}]},{level:2,title:"Video Demonstration",slug:"video-demonstration",link:"#video-demonstration",children:[]},{level:2,title:"How long does it take to implement a global status bar?",slug:"how-long-does-it-take-to-implement-a-global-status-bar",link:"#how-long-does-it-take-to-implement-a-global-status-bar",children:[]}],path:"/guide/globalcomponents.html",pathLocale:"/",extraFields:["Global Components",`Overview
Global components are reusable components that maintain consistent appearance and behavior across an entire application. Modifications to global components are automatically propagated to all instances throughout the project. A typical implementation is a status bar that appears uniformly across all screens.
Global Status Bar
The Global Status Bar functions similarly to the Status Bar in the Higher Order Component category. The primary distinction is that the Global Status Bar maintains project-wide consistency, with any modifications automatically applied to all instances.
Enable Global Status Bar
To enable Global Status Bar:

Access the screen's attribute panel
Enable the Global Status Bar option


Global Component View
To edit Global Status Bar:

Go to menu: View -&gt; Global Component
Enter the edit view for global status bar, then you can edit the status bar's appearance.

Video Demonstration
How long does it take to implement a global status bar?

`]},{title:"LVGL设计大师",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[{level:3,title:"核心能力",slug:"核心能力",link:"#核心能力",children:[]}]},{level:2,title:"联系我们",slug:"联系我们",link:"#联系我们",children:[]}],path:"/zh/",pathLocale:"/zh/",extraFields:["LVGL设计大师",`
  

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
  
  
    
    公众号
  

`]},{title:"快速开始",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"项目创建",slug:"项目创建",link:"#项目创建",children:[]},{level:2,title:"设计环境布局",slug:"设计环境布局",link:"#设计环境布局",children:[]},{level:2,title:"设计工作流程",slug:"设计工作流程",link:"#设计工作流程",children:[]},{level:2,title:"代码生成",slug:"代码生成",link:"#代码生成",children:[]},{level:2,title:"模拟",slug:"模拟",link:"#模拟",children:[]},{level:2,title:"项目持久化",slug:"项目持久化",link:"#项目持久化",children:[]},{level:2,title:"后续步骤",slug:"后续步骤",link:"#后续步骤",children:[]}],path:"/zh/get-started.html",pathLocale:"/zh/",extraFields:["快速开始",`本指南提供简明的说明，帮助您快速开始使用anyui进行LVGL UI开发。
安装
有关详细的安装说明，请参考安装指南。
项目创建

注意
请确保项目路径不包含空格和中文字符，否则将无法编译成功。
例如：
✓ C:\\anyui_projects\\my_project
✗ C:\\anyui projects\\my_project
✗ C:\\anyui_projects\\应用123

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
`]},{title:"Latest Release",headers:[{level:2,title:"v0.40.1 Release Notes",slug:"v0-40-1-release-notes",link:"#v0-40-1-release-notes",children:[]}],path:"/release/release-latest.html",pathLocale:"/",extraFields:["Latest Release",`v0.40.1 Release Notes
This release fix potential build error.
Windows-v0.40.1
macOS-v0.40.1
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.13.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/release/release-v0.13.0.html",pathLocale:"/",extraFields:["0.13.0",`Release Notes

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.37.0",headers:[{level:2,title:"Key Features",slug:"key-features",link:"#key-features",children:[]},{level:2,title:"Build Toolchain Configuration",slug:"build-toolchain-configuration",link:"#build-toolchain-configuration",children:[{level:3,title:"Windows Build Toolchain",slug:"windows-build-toolchain",link:"#windows-build-toolchain",children:[]},{level:3,title:"macOS Build Toolchain",slug:"macos-build-toolchain",link:"#macos-build-toolchain",children:[]}]},{level:2,title:"Download",slug:"download",link:"#download",children:[]}],path:"/release/release-v0.37.0.html",pathLocale:"/",extraFields:["0.37.0",`anyui v0.37.0 Release Notes
In this release, we've focused on reducing the package size and providing more flexibility in configuring the build toolchain. These improvements make anyui more efficient and customizable for different development environments.
Key Features

Support custom installation path
Support custom project path when creating new projects
Reduce package size to one-third of the original and make build toolchain configurable

Build Toolchain Configuration
Starting with v0.37.0, we've significantly improved the distribution method of the build toolchain to reduce package size and provide more configuration flexibility:
Windows Build Toolchain
Previously packaged as part of the application bundle, the Windows build toolchain is now provided as a standalone package that can be downloaded and configured independently. This approach reduces the main application package size by approximately two-thirds while giving you more control over your development environment.


Info
Build toolchain is only needed when building projects. If you only need code generation, you can skip this step.


Warning
If you encounter issues after upgrading to v0.37.0, please refer to FAQ to see if it's a known issue.

macOS Build Toolchain
For macOS users, no additional configuration is required. The system already includes the necessary build tools (such as Clang and Make) as part of the standard development environment. These native tools will be automatically detected and used by anyui without any additional setup.
Download
Windows-v0.37.0
macOS-v0.37.0
Download Windows Build Toolchain
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.38.0",headers:[{level:2,title:"v0.38.0 Release Notes",slug:"v0-38-0-release-notes",link:"#v0-38-0-release-notes",children:[]},{level:2,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:2,title:"Download",slug:"download",link:"#download",children:[]}],path:"/release/release-v0.38.0.html",pathLocale:"/",extraFields:["0.38.0",`v0.38.0 Release Notes
In this release, we've focused on improving the user experience in the designer, particularly around canvas navigation and widget management. We've also addressed several key issues that were affecting project builds and simulator startup.
Key Improvements

Integrate build toolchains for Windows
Canvas Zoom Behavior

Add Ctrl/Command + mouse wheel to zoom
Remove mouse wheel zoom to avoid accidentally zooming
Remove Ctrl/Command + mouse wheel to move canvas vertically
Remove Shift + mouse wheel to move canvas horizontally


Widget Bar Enhancement

Make widget bar dock to left of the canvas
Mouse wheel to scroll widget bar for more widgets


Add search bar to screens
Add search bar to widgets
Enable resize for widget bar when fully expanded
Fix v9 project build might fail issue
Fix simulator startup might fail issue
Other fixes and improvements

Download
Windows-v0.38.0
macOS-v0.38.0
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.39.0",headers:[{level:2,title:"v0.39.0 Release Notes",slug:"v0-39-0-release-notes",link:"#v0-39-0-release-notes",children:[{level:3,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:3,title:"Download",slug:"download",link:"#download",children:[]}]}],path:"/release/release-v0.39.0.html",pathLocale:"/",extraFields:["0.39.0",`v0.39.0 Release Notes
In this release, we've focused on fixing bugs and improving the user experience.
Key Improvements

Fix simulator might not auto start on some Windows systems issue
Fix image are not able to be loaded on some Windows systems issue
Fix drag &amp; drop Higher Order Components cause white screen issue
Fix gif conversion issue
Other fixes and improvements

Download
Windows-v0.39.0
macOS-v0.39.0
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.40.0",headers:[{level:2,title:"v0.40.0 Release Notes",slug:"v0-40-0-release-notes",link:"#v0-40-0-release-notes",children:[{level:3,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:3,title:"Download",slug:"download",link:"#download",children:[]}]}],path:"/release/release-v0.40.0.html",pathLocale:"/",extraFields:["0.40.0",`v0.40.0 Release Notes
This release marks a significant update to anyui, featuring major improvements in layout management, animation support, event handling, component functionality, and UI/UX enhancements.
Key Improvements
Animation


Support widget animation and animation management.
Check Widget Animation for more details.


Support screen switch animation and animation management.
Check Screen Animation for more details.


Flex layout

Support flex layout for Container
Support for different coordinate and size units (pixel/percentage) for components
Support &quot;auto&quot; size for Container, Label and Checkbox

Event handling

Support all events for widgets for customization
Support for multiple events with same trigger and target

Check Event Handling for more details.
Flags and states

Support initial flags/states for widgets
Support dynamic flags/states for widgets

Check Flag and State for more details.
SDK

Support APIs for animation
Enhance code portability to device

Widget improvements

Support more properties to customize widgets
Support default values for widget styles

Global components


Add global components edit view
Check Global Components for more details.


Code generation improvements

More structured code generation

Fixes and improvements

Fix reported issues on anyui issues
Other fixes and improvements

Download
Windows-v0.40.0
macOS-v0.40.0
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"Layout",headers:[{level:2,title:"Flex Layout",slug:"flex-layout",link:"#flex-layout",children:[{level:3,title:"Flex Layout Configuration Steps:",slug:"flex-layout-configuration-steps",link:"#flex-layout-configuration-steps",children:[]},{level:3,title:"Flex Layout Example",slug:"flex-layout-example",link:"#flex-layout-example",children:[]}]}],path:"/guide/advanced/layout.html",pathLocale:"/",extraFields:["Layout",`Layout
Flex Layout
Flex Layout is a powerful layout system that enables the creation of flexible and responsive user interfaces.
To implement a flex layout, utilize the Container component and configure its properties. When combined with percentage-based sizing, padding, and nested Container components, you can construct sophisticated flex layouts.
Flex Layout Configuration Steps:

Create a Container component
Set the layout property to flex
Configure flex flow, main align, track align properties
Add padding row/column to adjust space between children
Use percentage-based sizing to ensure children components adapt to the container size
If the children have fixed size, then you can set size of Container to Auto to fit in content


Flex Layout Example
The following example demonstrates a flex layout implementation using nested Container components.
Buttons, dropdowns, and checkboxes are automatically centered within the container without requiring explicit position settings.

`]},{title:"Lottie Animation",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/guide/animation/12_lottie.html",pathLocale:"/",extraFields:["Lottie Animation",`LVGL v8
LVGL v8 does not natively support Lottie animations. Support is provided through third-party libraries. Refer to rlottie integration for implementation details.
The rlottie library has been integrated into anyui, enabling code generation and Lottie animation simulation through the anyui environment. However, rlottie integration is still required for target device deployment.
LVGL v9
Beginning with v9, the Lottie widget utilizes the ThorVG library which is integrated into LVGL. To enable Lottie animations, either LV_USE_THORVG_INTERNAL (to use the built-in ThorVG) or LV_USE_THORVG_EXTERNAL (to link it externally) must be enabled, allowing direct use of Lottie animations in LVGL v9.
anyui uses built-in ThorVG for Lottie implementation and can simulate Lottie animations in the simulator.
For comprehensive details, refer to Lottie of LVGL v9.
`]},{title:"GIF Animated Image",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[{level:3,title:"Enable GIF Support",slug:"enable-gif-support",link:"#enable-gif-support",children:[]}]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]}],path:"/guide/animation/gif.html",pathLocale:"/",extraFields:["GIF Animated Image",`Overview
Beginning with v0.28.0, animated GIF image support has been implemented.
Configuration
Enable GIF Support
To enable GIF decoder support, define the following in lv_conf.h:
#define LV_USE_GIF 1      // Enable GIF decoder

Usage
GIF images can be utilized as either embedded variables or external files. For external file implementation, refer to Use External Image File as Source.
`]},{title:"Screen Load Animation",headers:[{level:2,title:"Screen Load Animation Management",slug:"screen-load-animation-management",link:"#screen-load-animation-management",children:[]}],path:"/guide/animation/screen_animation.html",pathLocale:"/",extraFields:["Screen Load Animation",`Screen Load Animation
anyui provides a unified animation management system specifically for screen transition animations.
Users can create, manage, and apply screen switch animations through this dedicated system.
Screen Load Animation Management
Screen load animation management follows the same workflow as widget animation management.

Apply animations to screen transitions.


`]},{title:"Widget Animation",headers:[{level:2,title:"Widget Animation Management",slug:"widget-animation-management",link:"#widget-animation-management",children:[]}],path:"/guide/animation/widget_animation.html",pathLocale:"/",extraFields:["Widget Animation",`Widget Animation
anyui provides a unified animation management system for all widgets.
Users can create, manage, and apply animations to widgets through this centralized animation management interface.
Widget Animation Management

Navigate to Animation in the toolbar to access the animation management interface, then switch to the Widget Animation tab.



Create a new animation.


Assign the animation a descriptive name and optional description for better organization.

Edit animation properties.

Users can further customize the animation properties as needed.


View animation management overview.

After creating animations, users can view the complete animation management interface to organize and manage all created animations.


Apply animations to widgets.

Users can now apply the created animation to a widget through the &quot;action&quot; or &quot;event&quot; configuration.


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
`]},{title:"StatusBar",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]},{level:2,title:"StatusBar vs Global StatusBar",slug:"statusbar-vs-global-statusbar",link:"#statusbar-vs-global-statusbar",children:[]},{level:2,title:"Communication Commands and Events",slug:"communication-commands-and-events",link:"#communication-commands-and-events",children:[]}],path:"/guide/hoc/6_statusbar.html",pathLocale:"/",extraFields:["StatusBar",`Introduction
The StatusBar is a Higher Order Component that provides a status display area for text elements such as current time or icon indicators such as WiFi and battery status.
Usage
Right-click on the StatusBar component to configure events for text and icon elements. The default configuration includes:

A label configured to receive time updates
An icon configured to receive battery status updates
An icon configured to receive Bluetooth status updates

StatusBar vs Global StatusBar
There're two types of StatusBar:


Local StatusBar
If you drag and drop the StatusBar component to a screen from WidgetBar, it will be a local StatusBar. The changes made to the StatusBar will only affect the screen where it is placed.


Global StatusBar
If you enable StatusBar thru screen's property panel, it will be a global StatusBar. The changes made to the StatusBar will affect all screens. Refer to Global Components for more information.


Communication Commands and Events
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
从最新版本下载可执行文件并运行它，然后按照向导指示操作。

注意
确保安装目录不包含空格和中文字符，因为这可能会导致构建和仿真过程出现问题。
例如：
✓ C:\\app\\anyui
✗ C:\\app\\anyui应用
✗ C:\\Program Files\\anyui


注意
由于权限不足，安装可能会失败。在这种情况下，请以管理员权限执行安装向导。


注意
anyui需要WebView2动态库，该动态库通常预装在Windows 10+系统上。但是，早期的Windows 10版本可能需要手动安装。
请参考WebView2动态库安装获取详细的安装说明。

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


`]},{title:"介绍",headers:[{level:2,title:"组件",slug:"组件",link:"#组件",children:[{level:3,title:"基础组件",slug:"基础组件",link:"#基础组件",children:[]},{level:3,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:3,title:"模板组件",slug:"模板组件",link:"#模板组件",children:[]},{level:3,title:"全局组件",slug:"全局组件",link:"#全局组件",children:[]}]},{level:2,title:"属性",slug:"属性",link:"#属性",children:[]},{level:2,title:"样式",slug:"样式",link:"#样式",children:[]},{level:2,title:"动作",slug:"动作",link:"#动作",children:[]},{level:2,title:"命令",slug:"命令",link:"#命令",children:[]},{level:2,title:"事件",slug:"事件",link:"#事件",children:[]}],path:"/zh/guide/1_intro.html",pathLocale:"/zh/",extraFields:["介绍",`组件
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
属性
属性定义组件的初始状态，是配置组件外观的关键。属性分为通用属性和特定组件属性。例如，width、height、x、y是所有组件共有的通用属性，而arc_width是Arc组件特有的属性。
样式
样式定义组件的视觉外观，用于定制组件属性，如背景、边框、内边距等。
不同状态的组件可以有不同的样式。例如，按钮可以在正常、按下和禁用状态下有不同的样式。未设置特定状态的样式将自动继承前一个状态的样式。
动作
动作代表由用户交互触发的LVGL事件，也称为用户事件。示例包括按钮按下、滑块调整和触摸手势。
动作可以配置为动态修改组件属性，也可以用于切换到另一个屏幕、触发动画等。
你可以配置任何动作，只要LVGL支持。你可以为相同的触发条件和目标组件配置多个动作，以实现顺序执行。例如，当用户点击按钮时，你可以先移除按钮的hidden标志，然后播放一个动画来显示它。这使得事件配置非常灵活，允许你创建复杂的用户交互。
命令
命令是从上层(应用程序/UI)传输到下层(SDK/硬件)的消息。典型的命令示例包括蓝牙连接请求、WiFi配置和时间同步操作。
anyui扩展了命令用于上层和下层之间的通信。
请参考命令获取综合命令文档。
事件
事件是源自下层(SDK/硬件)指向到上层(应用程序/UI)的异步通知，也称为系统事件。常见的事件类型包括电池电量变化、传感器数据更新和网络状态通知。
anyui扩展了事件用于上层和下层之间的通信。
请参考事件获取综合事件文档。
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

`]},{title:"隐藏和锁定",headers:[{level:2,title:"隐藏和显示组件",slug:"隐藏和显示组件",link:"#隐藏和显示组件",children:[{level:3,title:"隐藏组件交互",slug:"隐藏组件交互",link:"#隐藏组件交互",children:[]}]},{level:2,title:"锁定和解锁组件",slug:"锁定和解锁组件",link:"#锁定和解锁组件",children:[]}],path:"/zh/guide/5_hide_lock.html",pathLocale:"/zh/",extraFields:["隐藏和锁定",`隐藏和显示组件
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


注意
我们致力于提供所见即所得的体验，因此隐藏的组件会被有意地排除在代码生成和构建过程之外。
然而，这种排除可能会带来一些副作用：


如果隐藏的组件仍被其他组件引用，则会导致构建过程失败。例如，若隐藏的组件被用作事件目标或其属性在代码中被访问。


此行为适用于组件和屏幕。



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

`]},{title:"文档",headers:[{level:2,title:"设置",slug:"设置",link:"#设置",children:[]},{level:2,title:"核心概念",slug:"核心概念",link:"#核心概念",children:[]},{level:2,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:2,title:"动画",slug:"动画",link:"#动画",children:[]},{level:2,title:"高级功能",slug:"高级功能",link:"#高级功能",children:[]},{level:2,title:"开发",slug:"开发",link:"#开发",children:[]},{level:2,title:"技术支持",slug:"技术支持",link:"#技术支持",children:[]},{level:2,title:"文档结构",slug:"文档结构",link:"#文档结构",children:[]}],path:"/zh/guide/",pathLocale:"/zh/",extraFields:["文档",`本文档提供了使用anyui可视化开发环境开发LVGL用户界面的综合技术指导。
设置
从环境配置和项目初始化开始。

安装 - 平台特定的安装程序

核心概念
anyui设计方法的基本原理。

介绍 - 理解组件系统框架
设计 - 组件定位、排列策略和设计工具
隐藏和锁定 - 组件可见性和编辑状态管理
资源管理 - 图像、字体和多媒体的资源管理
标志和状态 - 组件标志和状态管理

高阶组件
复杂UI实现的高级组件模式。

状态按钮 - 具有多状态和视觉反馈的按钮
标签滑块 - 带集成值标签的滑块
数值滑块 - 可自定义值显示的滑块
复选框组和单选框组 - 具有互斥关系的相关复选框组
状态栏 - 应用程序状态显示组件
导航栏 - 应用程序导航组件
抽屉 - 用于附加内容的滑动面板

动画

组件动画 - 组件动画管理和应用
屏幕加载动画 - 屏幕加载动画管理和应用
GIF动画 - LVGL中的GIF图像支持和解码器功能
Lottie动画 - 基于矢量的动画实现

高级功能
复杂应用程序和多媒体集成的专门功能。

布局 - 组件定位和排列策略
模板组件 - 可重用组件模板的创建和管理
全局组件 - 跨屏幕组件共享和同步
屏幕管理 - 复杂应用程序屏幕管理
通信命令和事件 - 组件交互模式和事件处理
使用外部图像文件作为源 - 用于灵活图像管理的外部图像文件支持

开发
专业的开发流程和部署策略。

构建模式 - 构建系统配置和优化
代码移植 - 跨平台部署程序

技术支持
故障排除资源和技术援助。

常见问题 - 常见问题和解决程序


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

`]},{title:"设计",headers:[{level:2,title:"创建组件",slug:"创建组件",link:"#创建组件",children:[]},{level:2,title:"选择组件",slug:"选择组件",link:"#选择组件",children:[]},{level:2,title:"多选组件",slug:"多选组件",link:"#多选组件",children:[]},{level:2,title:"移动组件",slug:"移动组件",link:"#移动组件",children:[]},{level:2,title:"调整组件大小",slug:"调整组件大小",link:"#调整组件大小",children:[{level:3,title:"比例调整大小",slug:"比例调整大小",link:"#比例调整大小",children:[]}]},{level:2,title:"复制组件",slug:"复制组件",link:"#复制组件",children:[]},{level:2,title:"删除组件",slug:"删除组件",link:"#删除组件",children:[]},{level:2,title:"对齐组件",slug:"对齐组件",link:"#对齐组件",children:[]},{level:2,title:"缩放控制",slug:"缩放控制",link:"#缩放控制",children:[]},{level:2,title:"移动画布",slug:"移动画布",link:"#移动画布",children:[]}],path:"/zh/guide/design.html",pathLocale:"/zh/",extraFields:["设计",`anyui提供了直观的可视化设计环境，用于创建复杂的用户界面。该平台提供拖放功能和精确的组件布局控制，实现高效的UI开发。
创建组件
通过从组件库添加组件来初始化界面。将所需组件拖拽到画布上，开始根据设计规范进行原型设计和构建用户界面。
选择组件
点击任何组件以选择它。选择后，组件的属性、样式和事件处理程序在侧边栏中变为可访问，允许对所有设计方面进行详细定制。
多选组件
有几种方法可以选择多个组件：

按住Ctrl/Cmd键并点击每个所需组件。
按住并拖动鼠标框选多个组件。
按住Shift键并点击每个所需组件来选择一个范围的组件，或按住Ctrl/Cmd键并点击组件树中的节点来连续选择组件。

选择的组件会以橙色高亮显示，以便清楚识别。

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
通过Ctrl/Cmd + 鼠标滚轮轻松放大和缩小设计画布，或使用工具栏中提供的缩放控件。
按下缩放重置按钮将画布恢复到100%缩放级别。
移动画布
通过拖拽屏幕区域以外的画布区域来移动画布。
当鼠标光标位于屏幕区域内时，默认的拖拽行为启用组件多选。但是，按住空格键会临时切换到画布移动模式，直到释放鼠标按钮。
`]},{title:"常见问题",headers:[{level:2,title:"构建和运行",slug:"构建和运行",link:"#构建和运行",children:[{level:3,title:"为什么即使空项目在Windows上也会遇到构建错误？",slug:"为什么即使空项目在windows上也会遇到构建错误",link:"#为什么即使空项目在windows上也会遇到构建错误",children:[]},{level:3,title:"为什么构建项目需要很长时间？",slug:"为什么构建项目需要很长时间",link:"#为什么构建项目需要很长时间",children:[]},{level:3,title:"为什么升级到 v0.37.0 后所有项目都消失了？",slug:"为什么升级到-v0-37-0-后所有项目都消失了",link:"#为什么升级到-v0-37-0-后所有项目都消失了",children:[]},{level:3,title:"为什么项目在 Windows 上构建和运行成功，但在升级到 v0.37.0 后失败？",slug:"为什么项目在-windows-上构建和运行成功-但在升级到-v0-37-0-后失败",link:"#为什么项目在-windows-上构建和运行成功-但在升级到-v0-37-0-后失败",children:[]}]}],path:"/zh/guide/faq.html",pathLocale:"/zh/",extraFields:["常见问题",`构建和运行
为什么即使空项目在Windows上也会遇到构建错误？
请确认：


您已安装了最新版本的anyui。最新版本


安装路径不包含空格( )、或非ASCII字符，中文字符是此类情况的一个常见例子。



相关信息
✓ C:\\app\\anyui
✗ C:\\app\\anyui应用
✗ C:\\Program Files\\anyui


项目路径不包含空格( )、或非ASCII字符，中文字符是此类情况的一个常见例子。


相关信息
✓ C:\\anyui_projects\\my_project
✗ C:\\anyui projects\\my_project
✗ C:\\anyui_projects\\应用123

为什么构建项目需要很长时间？

请确认您已安装了最新版本的 anyui。 最新版本
我们提供了三种构建模式：全量、增量 和 最小。请参考 构建模式 选择最适合您需求的模式。

为什么升级到 v0.37.0 后所有项目都消失了？
从 v0.37.0 开始，我们引入了全新的项目工作区管理系统，不再使用固定的目录进行项目存储。您需要手动将现有项目“导入”到新工作区中。旧项目的路径保持不变，但必须显式添加到工作区中。
至于新建的项目，它们会自动添加到工作区中。
为什么项目在 Windows 上构建和运行成功，但在升级到 v0.37.0 后失败？
自从 v0.37.0 开始，我们实施了新的工作区管理系统，并更新了构建工具链配置，其中包括一些“破坏性”变更。

如果您继续将 anyui 安装在系统盘上，现有项目应该可以像以前一样正常工作。
如果您已将安装目录更改为非系统盘，则需要执行一些手动步骤使旧项目正常工作：

创建一个新项目，然后将该新项目中的 Makefile 复制替换旧项目中的 Makefile。




注意
在执行任何操作之前，请确保备份您的项目。

`]},{title:"标志与状态",headers:[{level:2,title:"标志（Flag）",slug:"标志-flag",link:"#标志-flag",children:[{level:3,title:"初始标志",slug:"初始标志",link:"#初始标志",children:[]},{level:3,title:"修改标志",slug:"修改标志",link:"#修改标志",children:[]}]},{level:2,title:"状态（State）",slug:"状态-state",link:"#状态-state",children:[{level:3,title:"初始状态",slug:"初始状态",link:"#初始状态",children:[]},{level:3,title:"修改状态",slug:"修改状态",link:"#修改状态",children:[]}]}],path:"/zh/guide/flag-and-state.html",pathLocale:"/zh/",extraFields:["标志与状态",`标志与状态
标志（Flag）
标志表示LVGL组件具备的某种能力。例如，clickable标志指示组件是否可以响应点击事件。典型的可点击组件是按钮，而标签通常默认是不可点击的。
有关标志的更多详细信息，请参考LVGL文档。
初始标志
当创建组件时，它具有预定义的初始标志。例如，按钮默认是可点击的，而标签则不是。这些初始标志可以根据您的需求进行修改。
您可以使用组件检查器查看和修改组件的标志（添加、移除或切换）。例如，要使按钮不可点击，可以将其clickable标志设置为false。相反，您可以通过将标签的clickable标志设置为true来使其可点击。

修改标志
标志可以通过动作或事件进行修改（添加、移除或切换）。例如，您可以在点击事件处理程序中将按钮的clickable标志设置为false，使按钮在被点击后变为不可点击状态。虽然具体场景可能有所不同，但这展示了标志管理的灵活性。

状态（State）
组件可以存在于不同的状态中，这些状态会根据用户交互动态变化。以按钮为例：它最初处于&quot;默认&quot;状态，当用户点击它时，它可以动态转换为&quot;聚焦&quot;、&quot;按下&quot;和&quot;选中&quot;状态（如果启用了checkable标志）。
有关状态的更多详细信息，请参考LVGL文档。
初始状态
当创建组件时，它具有预定义的初始状态。例如，复选框默认是未选中的。这些初始状态可以根据您的需求进行修改。
您可以使用组件检查器查看和修改（添加、移除或切换）组件的状态。例如，要使复选框默认选中，可以将其checked状态设置为true。

修改状态
LVGL会根据用户交互自动处理典型组件的状态转换。例如，当用户点击复选框时，LVGL会将其checked状态更新为true；当用户取消选中时，状态会更改为false。对于按钮，如果启用了checkable标志，则checked状态会相应更新；如果禁用了checkable标志，则checked状态将保持不变。
对于像标签这样的组件，默认情况下它们不是checkable的，因此checked状态不会由LVGL自动管理。但是，您可以为标签启用checkable标志，并根据应用程序逻辑手动控制其checked状态（将其设置为true或false）。
状态也可以通过自定义动作或事件进行修改（添加、移除或切换）。例如，您可以在点击事件处理程序中将按钮的checked状态更新为true，以在按钮被点击后以编程方式将其设置为选中状态。

`]},{title:"全局组件",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"全局状态栏",slug:"全局状态栏",link:"#全局状态栏",children:[{level:3,title:"启用全局状态栏",slug:"启用全局状态栏",link:"#启用全局状态栏",children:[]},{level:3,title:"全局组件视图",slug:"全局组件视图",link:"#全局组件视图",children:[]}]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[]},{level:2,title:"创建一个系统状态栏需要多久？",slug:"创建一个系统状态栏需要多久",link:"#创建一个系统状态栏需要多久",children:[]}],path:"/zh/guide/globalcomponents.html",pathLocale:"/zh/",extraFields:["全局组件",`概述
全局组件是在整个应用程序中保持一致外观和行为的可重用组件。对全局组件的修改会自动传播到整个项目中的所有实例。典型实现是在所有屏幕中统一出现的状态栏。
全局状态栏
全局状态栏的功能与高阶组件类别中的状态栏类似。主要区别在于全局状态栏保持项目范围的一致性，任何修改都会自动应用到所有实例。
启用全局状态栏
要启用全局状态栏：

访问屏幕的属性面板
启用全局状态栏选项


全局组件视图
要编辑全局状态栏：

转到菜单：视图 -&gt; 全局组件
进入全局状态栏编辑视图，即可编辑状态栏的外观。

视频演示
创建一个系统状态栏需要多久？

`]},{title:"最新发布",headers:[{level:2,title:"v0.40.1 版本说明",slug:"v0-40-1-版本说明",link:"#v0-40-1-版本说明",children:[{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/release/release-latest.html",pathLocale:"/zh/",extraFields:["最新发布",`v0.40.1 版本说明
该版本修复了潜在的构建错误。
下载
Windows-v0.40.1
macOS-v0.40.1
`,"LVGL","HMI","UI","embedded application","模态组件","界面","设计","发布"]},{title:"0.13.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/release/release-v0.13.0.html",pathLocale:"/zh/",extraFields:["0.13.0",`版本说明

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.37.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[{level:3,title:"构建工具链配置",slug:"构建工具链配置",link:"#构建工具链配置",children:[]}]}],path:"/zh/release/release-v0.37.0.html",pathLocale:"/zh/",extraFields:["0.37.0",`版本说明

支持安装时自定义路径
支持新建项目时自定义项目路径
包体积缩减至原来的三分之一，并使构建工具链可配置

构建工具链配置
从 v0.37.0 版本开始，我们显著改进了构建工具链的分发方式，以减小包大小并提供更多的配置灵活性：

Windows 构建工具链：以前打包为应用程序包的一部分，Windows 构建工具链现在作为一个独立的包提供，可以独立下载和配置。这种方法将主应用程序包的大小减少了大约三分之二，同时为您提供更多对开发环境的控制。



相关信息
构建工具链仅在项目构建时需要。如果您只需要代码生成，可以跳过此步骤。


注意
如果您在升级到 v0.37.0 后遇到问题，请参阅 FAQ 查看是否是已知问题。


macOS 构建工具链：对于 macOS 用户，无需额外配置。系统已经包含了必要的构建工具（如 Clang 和 Make）作为标准开发环境的一部分。这些原生工具会被 anyui 自动检测和使用，无需任何额外设置。

Windows-v0.37.0
macOS-v0.37.0
下载 Windows 构建工具链
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.38.0",headers:[{level:2,title:"v0.38.0 版本说明",slug:"v0-38-0-版本说明",link:"#v0-38-0-版本说明",children:[]},{level:2,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:2,title:"下载",slug:"下载",link:"#下载",children:[]}],path:"/zh/release/release-v0.38.0.html",pathLocale:"/zh/",extraFields:["0.38.0",`v0.38.0 版本说明
在本次发布中，我们专注于改进设计器中的用户体验，特别是在画布导航和组件栏方面。我们也解决了几个影响项目构建和模拟器启动的关键问题。
主要改进

将构建工具链集成到Windows版本中
画布缩放行为

添加 Ctrl/Command + 鼠标滚轮 进行缩放
移除 鼠标滚轮 缩放以避免意外缩放
移除 Ctrl/Command + 鼠标滚轮 垂直移动画布
移除 Shift + 鼠标滚轮 水平移动画布


组件栏增强

使组件栏停靠在画布左侧
使用鼠标滚轮滚动组件栏以查看更多组件


添加屏幕搜索栏
添加组件搜索栏
完全展开时启用调整组件栏大小
修复项目构建可能失败的问题
修复模拟器启动可能失败的问题
其它修复和优化

下载
Windows-v0.38.0
macOS-v0.38.0
`,"LVGL","HMI","UI","嵌入式应用","模态组件","界面","设计","发布"]},{title:"0.39.0",headers:[{level:2,title:"v0.39.0 版本说明",slug:"v0-39-0-版本说明",link:"#v0-39-0-版本说明",children:[{level:3,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/release/release-v0.39.0.html",pathLocale:"/zh/",extraFields:["0.39.0",`v0.39.0 版本说明
在此次发布中，我们专注于修复错误并改善用户体验。
主要改进

修复了在某些 Windows 系统上模拟器可能无法自动启动的问题
修复了在某些 Windows 系统上图像无法加载的问题
修复了拖放高阶组件导致白屏的问题
修复了 GIF 转换问题
其他修复和改进

下载
Windows-v0.39.0
macOS-v0.39.0
`,"LVGL","HMI","UI","嵌入式应用","模态组件","界面","设计","发布"]},{title:"0.40.0",headers:[{level:2,title:"v0.40.0 版本说明",slug:"v0-40-0-版本说明",link:"#v0-40-0-版本说明",children:[{level:3,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/release/release-v0.40.0.html",pathLocale:"/zh/",extraFields:["0.40.0",`v0.40.0 版本说明
本次更新为 anyui 带来里程碑式升级：布局管理更灵活、动画系统更强大、事件机制更完善，同时全面增强组件功能与整体 UI/UX 体验。
主要改进
动画


支持组件动画和动画管理。
详情请参考 组件动画。


支持屏幕切换动画和动画管理。
详情请参考 屏幕动画。


弹性布局

支持容器的弹性布局
支持组件的不同坐标和尺寸单位（像素/百分比）
支持容器、标签和复选框的&quot;自动&quot;尺寸

事件处理


支持所有组件的所有事件以进行自定义


支持具有相同触发器和目标的多个事件
详情请参考 事件处理。


标志和状态


支持组件的初始标志/状态


支持组件的动态标志/状态
详情请参考 标志和状态。


SDK

支持动画 API
增强代码可移植性

组件改进

支持更多属性来自定义组件
支持组件样式的默认值

全局组件


添加全局组件编辑视图
详情请参考 全局组件。


代码生成改进

更结构化的代码生成

修复和改进

修复已报告问题 anyui issues
其他修复和改进

下载
Windows-v0.40.0
macOS-v0.40.0
`,"LVGL","HMI","UI","embedded application","模态组件","界面","设计","发布"]},{title:"Lottie动画",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/zh/guide/animation/12_lottie.html",pathLocale:"/zh/",extraFields:["Lottie动画",`LVGL v8
LVGL v8不原生支持Lottie动画。支持通过第三方库提供。有关实现细节，请参考rlottie集成。
rlottie库已集成到anyui中，通过anyui环境启用代码生成和Lottie动画模拟。但是，目标设备部署仍需要rlottie集成。
LVGL v9
从v9开始，Lottie组件使用集成到LVGL中的ThorVG库。要启用Lottie动画，必须启用LV_USE_THORVG_INTERNAL（使用内置ThorVG）或LV_USE_THORVG_EXTERNAL（外部链接），从而允许在LVGL v9中直接使用Lottie动画。
anyui使用内置ThorVG进行Lottie实现，并能在模拟器中模拟Lottie动画。
有关综合详情，请参考LVGL v9的Lottie。
`]},{title:"GIF动画图像",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"启用GIF支持",slug:"启用gif支持",link:"#启用gif支持",children:[]}]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/zh/guide/animation/gif.html",pathLocale:"/zh/",extraFields:["GIF动画图像",`概述
从v0.28.0开始，已实现动画GIF图像支持。
配置
启用GIF支持
要启用GIF解码器支持，请在lv_conf.h中定义以下内容：
#define LV_USE_GIF 1      // 启用GIF解码器

使用
GIF图像可以作为嵌入变量或外部文件使用。有关外部文件实现，请参考使用外部图像文件作为源。
`]},{title:"屏幕加载动画",headers:[{level:2,title:"屏幕加载动画管理",slug:"屏幕加载动画管理",link:"#屏幕加载动画管理",children:[]}],path:"/zh/guide/animation/screen_animation.html",pathLocale:"/zh/",extraFields:["屏幕加载动画",`屏幕加载动画
anyui 为屏幕过渡动画提供了专门的统一动画管理系统。
用户可以通过这个专用系统创建、管理和应用屏幕切换动画。
屏幕加载动画管理
屏幕加载动画管理遵循与组件动画管理相同的工作流程。

将动画应用到屏幕过渡。


`]},{title:"组件动画",headers:[{level:2,title:"组件动画管理",slug:"组件动画管理",link:"#组件动画管理",children:[]}],path:"/zh/guide/animation/widget_animation.html",pathLocale:"/zh/",extraFields:["组件动画",`组件动画
anyui 为所有组件提供了统一的动画管理系统。
用户可以通过这个集中的动画管理界面创建、管理和应用动画效果到组件上。
组件动画管理

导航到工具栏中的 Animation 选项，进入动画管理界面，然后切换到 Widget Animation 标签页。



创建新动画。


为动画分配一个描述性名称和可选的描述，以便更好地组织。

编辑动画属性。

用户可以根据需要进一步自定义动画属性。


查看动画管理概览。

创建动画后，用户可以查看完整的动画管理界面，以组织和管理所有已创建的动画。


将动画应用到组件。

用户现在可以通过 &quot;action&quot; 或 &quot;event&quot; 配置将创建的动画应用到组件上。


`]},{title:"布局",headers:[{level:2,title:"弹性布局（Flex Layout）",slug:"弹性布局-flex-layout",link:"#弹性布局-flex-layout",children:[{level:3,title:"弹性布局配置步骤：",slug:"弹性布局配置步骤",link:"#弹性布局配置步骤",children:[]},{level:3,title:"弹性布局示例",slug:"弹性布局示例",link:"#弹性布局示例",children:[]}]}],path:"/zh/guide/advanced/layout.html",pathLocale:"/zh/",extraFields:["布局",`布局
弹性布局（Flex Layout）
弹性布局是一种强大的布局系统，能够创建灵活且响应式的用户界面。
要实现弹性布局，请使用 Container 组件并配置其属性。结合基于百分比的尺寸、内边距和嵌套的 Container 组件，您可以构建复杂的弹性布局。
弹性布局配置步骤：

创建一个 Container 组件
将 layout 属性设置为 flex
配置 flex flow, main align, track align 属性
添加行/列内边距以调整子组件之间的间距
使用基于百分比的尺寸确保子组件能够自适应容器大小
如果子组件有固定尺寸，则可以将 Container 组件的尺寸设置为 Auto 以适应内容


弹性布局示例
以下示例展示了使用嵌套 Container 组件实现的弹性布局。
按钮、下拉菜单和复选框会自动在容器内居中，无需设置明确的位置。

`]},{title:"介绍",headers:[{level:2,title:"什么是高阶组件(HoC)？",slug:"什么是高阶组件-hoc",link:"#什么是高阶组件-hoc",children:[{level:3,title:"功能",slug:"功能",link:"#功能",children:[]},{level:3,title:"限制",slug:"限制",link:"#限制",children:[]}]},{level:2,title:"使用高阶组件",slug:"使用高阶组件",link:"#使用高阶组件",children:[]}],path:"/zh/guide/hoc/0_intro.html",pathLocale:"/zh/",extraFields:["介绍",`什么是高阶组件(HoC)？
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
`]},{title:"状态栏",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"状态栏与全局状态栏",slug:"状态栏与全局状态栏",link:"#状态栏与全局状态栏",children:[]},{level:2,title:"通信命令和事件",slug:"通信命令和事件",link:"#通信命令和事件",children:[]}],path:"/zh/guide/hoc/6_statusbar.html",pathLocale:"/zh/",extraFields:["状态栏",`介绍
状态栏是提供状态显示区域的高阶组件，用于文本元素（如当前时间）或图标指示器（如WiFi和电池状态）。
使用
右键单击状态栏组件以配置文本和图标元素的事件。默认配置包括：

配置为接收时间更新的标签
配置为接收电池状态更新的图标
配置为接收蓝牙状态更新的图标

状态栏与全局状态栏
状态栏有两种类型：


本地状态栏
如果你从控件栏将状态栏组件拖放到某个屏幕中，它将成为本地状态栏。对状态栏所做的更改只会影响放置它的那个屏幕。


全局状态栏
如果你通过屏幕属性面板启用状态栏，它将成为全局状态栏。对状态栏所做的更改将影响所有屏幕。更多信息请参见全局组件。


通信命令和事件
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
`]}],Ev=De(Sv),Cv=()=>Ev,xv=/[^\x00-\x7F]/,Tv=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),ia=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),oa=(e,t)=>{const n=t.join(" "),i=Tv(e);if(xv.test(e))return i.some(l=>n.toLowerCase().includes(l));const o=e.endsWith(" ");return new RegExp(`${i.map((l,r)=>i.length===r+1&&!o?`(?=.*\\b${ia(l)})`:`(?=.*\\b${ia(l)}\\b)`).join("")}.+`,"gi").test(n)},Iv=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:i})=>{const o=P(()=>e.value.filter(l=>l.pathLocale===t.value));return P(()=>{const l=n.value.trim().toLowerCase();if(!l)return[];const r=[],a=(s,c)=>{oa(l,[c.title])&&r.push({link:`${s.path}#${c.slug}`,title:s.title,header:c.title});for(const u of c.children){if(r.length>=i.value)return;a(s,u)}};for(const s of o.value){if(r.length>=i.value)break;if(oa(l,[s.title,...s.extraFields])){r.push({link:s.path,title:s.title});continue}for(const c of s.headers){if(r.length>=i.value)break;a(s,c)}}return r})},Av=e=>{const t=De(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},Rv=ce({name:"SearchBox",props:{locales:{type:Object,default:()=>({})},hotKeys:Array,maxSuggestions:{type:Number,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:i}=ll(e),o=fo(t),l=On(),r=Vs(),a=Cv(),s=De(null),c=De(!1),u=De(""),d=Iv({searchIndex:a,routeLocale:r,query:u,maxSuggestions:i}),{focusIndex:f,focusNext:p,focusPrev:v}=Av(d);Sp(n,()=>{var m;(m=s.value)==null||m.focus()});const b=P(()=>c.value&&!!d.value.length),k=()=>{b.value&&v()},E=()=>{b.value&&p()},S=m=>{if(!b.value)return;const _=d.value[m];_&&l.push(_.link).then(()=>{u.value="",f.value=0})};return()=>K("form",{class:"search-box",role:"search"},[K("input",{ref:s,type:"search",placeholder:o.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>{c.value=!0},onBlur:()=>{c.value=!1},onInput:m=>{u.value=m.target.value},onKeydown:m=>{switch(m.key){case"ArrowUp":{k();break}case"ArrowDown":{E();break}case"Enter":{m.preventDefault(),S(f.value);break}}}}),b.value&&K("ul",{class:"suggestions",onMouseleave:()=>{f.value=-1}},d.value.map(({link:m,title:_,header:H},X)=>K("li",{class:["suggestion",{focus:f.value===X}],onMouseenter:()=>{f.value=X},onMousedown:()=>{S(X)}},K("a",{href:m,onClick:z=>{z.preventDefault()}},[K("span",{class:"page-title"},_),H&&K("span",{class:"page-header"},`> ${H}`)]))))])}});var Ov=["s","/"],Pv={"/":{placeholder:"Search"},"/zh/":{placeholder:"搜索"}};const Dv=Pv,zv=Ov,Fv=10;var Mv=kt({enhance({app:e}){e.component("SearchBox",t=>K(Rv,{locales:Dv,hotKeys:zv,maxSuggestions:Fv,...t}))}});const Vv=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),Hv={class:"custom-footer"},Nv=ce({__name:"CustomFooter",setup(e){return(t,n)=>(W(),ne("footer",Hv,[...n[0]||(n[0]=[le("div",{class:"footer-content"},[Ft(" Copyright © 2025 anyui Development Team | 备案信息 "),le("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"闽ICP备2024063669号")],-1)])]))}}),mc=Dn(Nv,[["__scopeId","data-v-df7ba8d7"]]),Uv={class:"custom-footer"},$v=ce({__name:"CustomFooterGitHub",setup(e){return(t,n)=>(W(),ne("footer",Uv,[...n[0]||(n[0]=[le("div",{class:"footer-content"}," Copyright © 2025 anyui Development Team ",-1)])]))}}),gc=Dn($v,[["__scopeId","data-v-05494ea2"]]),Bv=ce({__name:"DynamicFooter",setup(e){const t=P(()=>!0);return(n,i)=>t.value?(W(),Ce(gc,{key:0})):(W(),Ce(mc,{key:1}))}}),jv=kt({enhance({app:e,router:t,siteData:n}){e.component("DynamicFooter",Bv),e.component("CustomFooter",mc),e.component("CustomFooterGitHub",gc)},setup(){},rootComponents:[]}),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),Oi=[vp,Rp,Vp,Np,Yp,am,fm,gm,km,Tm,Lv,Vv,Wv].map(e=>e.default).filter(Boolean),Gv=JSON.parse(`{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}],["link",{"href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap","rel":"stylesheet"}],["link",{"rel":"icon","type":"image/png","sizes":"16x16","href":"/img/favicon-16x16.png"}],["link",{"rel":"icon","type":"image/png","sizes":"32x32","href":"/img/favicon-32x32.png"}],["link",{"rel":"icon","type":"image/x-icon","href":"/img/favicon.ico"}],["script",{},"\\n      var _hmt = _hmt || [];\\n      (function() {\\n        if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {\\n          var hm = document.createElement(\\"script\\");\\n          hm.src = \\"https://hm.baidu.com/hm.js?085d518a1140960eb8c513e825951e25\\";\\n          var s = document.getElementsByTagName(\\"script\\")[0];\\n          s.parentNode.insertBefore(hm, s);\\n        }\\n      })();\\n    "]],"locales":{"/":{"lang":"en-US","title":"anyui","description":"Professional LVGL UI development environment - Visual design tools, code generation and simulator"},"/zh/":{"lang":"zh-CN","title":"anyui","description":"专业的LVGL UI开发环境 - 可视化设计工具、代码生成和模拟器"}}}`);var $n=we(Gv),qv=$h,Kv=()=>{const e=pf({history:qv(Ss("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,i)=>i||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===xt){const i=ri(t.fullPath);if(i.path!==t.fullPath)return i.path;const o=await i.loader();t.meta={...i.meta,_pageChunk:o}}else t.path===n.path&&(t.meta=n.meta)}),e},Yv=e=>{e.component("ClientOnly",yl),e.component("Content",wl),e.component("RouteLink",co)},Qv=(e,t,n)=>{const i=P(()=>t.currentRoute.value.path),o=Da((k,E)=>({get(){return k(),t.currentRoute.value.meta._pageChunk},set(S){t.currentRoute.value.meta._pageChunk=S,E()}})),l=P(()=>tn.resolveLayouts(n)),r=P(()=>tn.resolveRouteLocale($n.value.locales,i.value)),a=P(()=>tn.resolveSiteLocaleData($n.value,r.value)),s=P(()=>o.value.comp),c=P(()=>o.value.data),u=P(()=>c.value.frontmatter),d=P(()=>tn.resolvePageHeadTitle(c.value,a.value)),f=P(()=>tn.resolvePageHead(d.value,u.value,a.value)),p=P(()=>tn.resolvePageLang(c.value,a.value)),v=P(()=>tn.resolvePageLayout(c.value,l.value)),b={layouts:l,pageData:c,pageComponent:s,pageFrontmatter:u,pageHead:f,pageHeadTitle:d,pageLang:p,pageLayout:v,redirects:Yo,routeLocale:r,routePath:i,routes:Sn,siteData:$n,siteLocaleData:a};return e.provide(vl,b),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>c.value},$routeLocale:{get:()=>r.value},$site:{get:()=>$n.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>kl}}),b},Jv=([e,t,n=""])=>{const i=Object.entries(t).map(([a,s])=>ut(s)?`[${a}=${JSON.stringify(s)}]`:s?`[${a}]`:"").join(""),o=`head > ${e}${i}`;return Array.from(document.querySelectorAll(o)).find(a=>a.innerText===n)??null},Xv=([e,t,n])=>{if(!ut(e))return null;const i=document.createElement(e);return pl(t)&&Object.entries(t).forEach(([o,l])=>{ut(l)?i.setAttribute(o,l):l&&i.setAttribute(o,"")}),ut(n)&&i.appendChild(document.createTextNode(n)),i},Zv=()=>{const e=vf(),t=bl();let n=[];const i=()=>{e.value.forEach(r=>{const a=Jv(r);a&&n.push(a)})},o=()=>{const r=[];return e.value.forEach(a=>{const s=Xv(a);s&&r.push(s)}),r},l=()=>{document.documentElement.lang=t.value;const r=o();n.forEach((a,s)=>{const c=r.findIndex(u=>a.isEqualNode(u));c===-1?(a.remove(),delete n[s]):r.splice(c,1)}),r.forEach(a=>document.head.appendChild(a)),n=[...n.filter(a=>!!a),...r]};qt(wf,l),lt(()=>{i(),Ke(e,l,{immediate:!1})})},e_=Kd,t_=async()=>{var n;const e=e_({name:"Vuepress",setup(){var l;Zv();for(const r of Oi)(l=r.setup)==null||l.call(r);const i=Oi.flatMap(({rootComponents:r=[]})=>r.map(a=>K(a))),o=_f();return()=>[K(o.value),i]}}),t=Kv();Yv(e),Qv(e,t,Oi);for(const i of Oi)await((n=i.enhance)==null?void 0:n.call(i,{app:e,router:t,siteData:$n}));return e.use(t),{app:e,router:t}};t_().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Dn as _,sd as a,le as b,ne as c,t_ as createVueApp,se as d,Ft as e,W as o,Ka as r,xe as w};
