const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.html-CK83GLRF.js","assets/subscribe-CmRtVw-F.js","assets/index.html-Cxo3RXmm.js","assets/index.html-lh7iqqI_.js","assets/anyui-mac-BzmRAfcE.js","assets/get-started.html-DGOGgZr9.js","assets/anyui-simulator-9x0RPKL1.js","assets/3_resource.html-DEL5nNhA.js","assets/anyui-resource-fonts-C8bGQmra.js","assets/4_composite.html-CpDzoGM5.js","assets/anyui-composite-setting-DbIjVhZS.js","assets/5_hide_lock.html-B41mMFU6.js","assets/anyui-lock-CTL_SKZJ.js","assets/7_scr_mgmt.html-ClRYMx3m.js","assets/navigate_bar-DDhDZBVs.js","assets/design.html-3foKlK5f.js","assets/widget-alignment-DGu6OLsq.js","assets/flag-and-state.html-DeKGTkcD.js","assets/state_modify-CMqySAna.js","assets/font.html-DFKUQlwC.js","assets/project_config_font-C_1GGsQV.js","assets/font_library_create-Co3fWVri.js","assets/globalcomponents.html-CK2eAvKx.js","assets/global_status_bar-2NVXGzc8.js","assets/release-v0.15.0.html-BXS_lF7h.js","assets/v0.15.0-1-D6gXMNN7.js","assets/release-v0.37.0.html-S6z8l-L_.js","assets/v0.37.0_build-tool-config--olv5u6D.js","assets/agent.html-lXpHndcZ.js","assets/agent.zh-Dzad1bcV.js","assets/index.html-DxrYY6j4.js","assets/get-started.html-TmayCZXh.js","assets/layout.html-oitQHos_.js","assets/flex_layout_example-Cu2JcUp5.js","assets/screen_animation.html-CZbVOQwQ.js","assets/anim_scr_apply-B7V5zab7.js","assets/widget_animation.html-Dpk70G54.js","assets/anim_widget_apply2-LPsiB8hz.js","assets/0_intro.html-BxIsp1TX.js","assets/hoc-bar-DrWIOkMT.js","assets/1_statebtn.html-DG8k0uQy.js","assets/statebtn-square--BBYt9UZ.js","assets/2_labelslider.html-CsalsLJ0.js","assets/labelslider-setting-full-DoQ9x0_I.js","assets/font-library.html-RQvSFxAe.js","assets/3_resource.html-BVqzDYRS.js","assets/4_composite.html-DFEwkpJE.js","assets/5_hide_lock.html-kLmBEXne.js","assets/7_scr_mgmt.html-CQbwiMLd.js","assets/design.html-DDKWhpJM.js","assets/flag-and-state.html-CR2dwrJa.js","assets/font.html-Bg8Y7LjH.js","assets/globalcomponents.html-DkFhhOxV.js","assets/release-v0.15.0.html-BK-HouXX.js","assets/release-v0.37.0.html-B6DPzhmk.js","assets/agent.html-61sU--ts.js","assets/layout.html-hpdCa3MN.js","assets/0_intro.html-ByXZg8Ad.js","assets/1_statebtn.html-CuVm6wNS.js","assets/2_labelslider.html-7CiCoBLq.js","assets/screen_animation.html-CE95zAs2.js","assets/widget_animation.html-LNiOk5W1.js","assets/font-library.html-B2RkIk8o.js"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zo(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const be={},wt=[],wn=()=>{},ar=()=>!1,si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),De=Object.assign,Jo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},vc=Object.prototype.hasOwnProperty,ge=(e,n)=>vc.call(e,n),ae=Array.isArray,Lt=e=>Yi(e)==="[object Map]",lr=e=>Yi(e)==="[object Set]",le=e=>typeof e=="function",Ve=e=>typeof e=="string",Mn=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",rr=e=>(Ee(e)||le(e))&&le(e.then)&&le(e.catch),sr=Object.prototype.toString,Yi=e=>sr.call(e),yc=e=>Yi(e).slice(8,-1),cr=e=>Yi(e)==="[object Object]",ea=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kt=Zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qi=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},bc=/-(\w)/g,en=Qi(e=>e.replace(bc,(n,t)=>t?t.toUpperCase():"")),_c=/\B([A-Z])/g,Xn=Qi(e=>e.replace(_c,"-$1").toLowerCase()),ci=Qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),mo=Qi(e=>e?`on${ci(e)}`:""),qn=(e,n)=>!Object.is(e,n),go=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},dr=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},wc=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Lc=e=>{const n=Ve(e)?Number(e):NaN;return isNaN(n)?e:n};let Fa;const Zi=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ot(e){if(ae(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],o=Ve(i)?Ic(i):Ot(i);if(o)for(const a in o)n[a]=o[a]}return n}else if(Ve(e)||Ee(e))return e}const kc=/;(?![^(]*\))/g,Ec=/:([^]+)/,Sc=/\/\*[^]*?\*\//g;function Ic(e){const n={};return e.replace(Sc,"").split(kc).forEach(t=>{if(t){const i=t.split(Ec);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function Ze(e){let n="";if(Ve(e))n=e;else if(ae(e))for(let t=0;t<e.length;t++){const i=Ze(e[t]);i&&(n+=i+" ")}else if(Ee(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function fo(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Ve(n)&&(e.class=Ze(n)),t&&(e.style=Ot(t)),e}const Cc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xc=Zo(Cc);function ur(e){return!!e||e===""}const hr=e=>!!(e&&e.__v_isRef===!0),Ie=e=>Ve(e)?e:e==null?"":ae(e)||Ee(e)&&(e.toString===sr||!le(e.toString))?hr(e)?Ie(e.value):JSON.stringify(e,pr,2):String(e),pr=(e,n)=>hr(n)?pr(e,n.value):Lt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,o],a)=>(t[vo(i,a)+" =>"]=o,t),{})}:lr(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>vo(t))}:Mn(n)?vo(n):Ee(n)&&!ae(n)&&!cr(n)?String(n):n,vo=(e,n="")=>{var t;return Mn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Tc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!n&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=$e;try{return $e=this,n()}finally{$e=t}}}on(){++this._on===1&&(this.prevScope=$e,$e=this)}off(){this._on>0&&--this._on===0&&($e=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function mr(){return $e}function Vc(e,n=!1){$e&&$e.cleanups.push(e)}let ke;const yo=new WeakSet;class gr{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yo.has(this)&&(yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ma(this),yr(this);const n=ke,t=pn;ke=this,pn=!0;try{return this.fn()}finally{br(this),ke=n,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)ia(n);this.deps=this.depsTail=void 0,Ma(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Do(this)&&this.run()}get dirty(){return Do(this)}}let fr=0,Ut,Wt;function vr(e,n=!1){if(e.flags|=8,n){e.next=Wt,Wt=e;return}e.next=Ut,Ut=e}function na(){fr++}function ta(){if(--fr>0)return;if(Wt){let n=Wt;for(Wt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Ut;){let n=Ut;for(Ut=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function yr(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function br(e){let n,t=e.depsTail,i=t;for(;i;){const o=i.prevDep;i.version===-1?(i===t&&(t=o),ia(i),Ac(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=n,e.depsTail=t}function Do(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(_r(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function _r(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zt)||(e.globalVersion=Zt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Do(e))))return;e.flags|=2;const n=e.dep,t=ke,i=pn;ke=e,pn=!0;try{yr(e);const o=e.fn(e._value);(n.version===0||qn(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{ke=t,pn=i,br(e),e.flags&=-3}}function ia(e,n=!1){const{dep:t,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let a=t.computed.deps;a;a=a.nextDep)ia(a,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ac(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let pn=!0;const wr=[];function Pn(){wr.push(pn),pn=!1}function Dn(){const e=wr.pop();pn=e===void 0?!0:e}function Ma(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ke;ke=void 0;try{n()}finally{ke=t}}}let Zt=0;class Rc{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ke||!pn||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new Rc(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,Lr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=i)}return t}trigger(n){this.version++,Zt++,this.notify(n)}notify(n){na();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ta()}}}function Lr(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)Lr(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Mi=new WeakMap,lt=Symbol(""),Fo=Symbol(""),Xt=Symbol("");function qe(e,n,t){if(pn&&ke){let i=Mi.get(e);i||Mi.set(e,i=new Map);let o=i.get(t);o||(i.set(t,o=new Xi),o.map=i,o.key=t),o.track()}}function An(e,n,t,i,o,a){const l=Mi.get(e);if(!l){Zt++;return}const r=s=>{s&&s.trigger()};if(na(),n==="clear")l.forEach(r);else{const s=ae(e),c=s&&ea(t);if(s&&t==="length"){const d=Number(i);l.forEach((u,p)=>{(p==="length"||p===Xt||!Mn(p)&&p>=d)&&r(u)})}else switch((t!==void 0||l.has(void 0))&&r(l.get(t)),c&&r(l.get(Xt)),n){case"add":s?c&&r(l.get("length")):(r(l.get(lt)),Lt(e)&&r(l.get(Fo)));break;case"delete":s||(r(l.get(lt)),Lt(e)&&r(l.get(Fo)));break;case"set":Lt(e)&&r(l.get(lt));break}}ta()}function Oc(e,n){const t=Mi.get(e);return t&&t.get(n)}function gt(e){const n=pe(e);return n===e?n:(qe(n,"iterate",Xt),dn(e)?n:n.map(Me))}function Ji(e){return qe(e=pe(e),"iterate",Xt),e}const zc={__proto__:null,[Symbol.iterator](){return bo(this,Symbol.iterator,Me)},concat(...e){return gt(this).concat(...e.map(n=>ae(n)?gt(n):n))},entries(){return bo(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,n){return En(this,"every",e,n,void 0,arguments)},filter(e,n){return En(this,"filter",e,n,t=>t.map(Me),arguments)},find(e,n){return En(this,"find",e,n,Me,arguments)},findIndex(e,n){return En(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return En(this,"findLast",e,n,Me,arguments)},findLastIndex(e,n){return En(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return En(this,"forEach",e,n,void 0,arguments)},includes(...e){return _o(this,"includes",e)},indexOf(...e){return _o(this,"indexOf",e)},join(e){return gt(this).join(e)},lastIndexOf(...e){return _o(this,"lastIndexOf",e)},map(e,n){return En(this,"map",e,n,void 0,arguments)},pop(){return Dt(this,"pop")},push(...e){return Dt(this,"push",e)},reduce(e,...n){return ja(this,"reduce",e,n)},reduceRight(e,...n){return ja(this,"reduceRight",e,n)},shift(){return Dt(this,"shift")},some(e,n){return En(this,"some",e,n,void 0,arguments)},splice(...e){return Dt(this,"splice",e)},toReversed(){return gt(this).toReversed()},toSorted(e){return gt(this).toSorted(e)},toSpliced(...e){return gt(this).toSpliced(...e)},unshift(...e){return Dt(this,"unshift",e)},values(){return bo(this,"values",Me)}};function bo(e,n,t){const i=Ji(e),o=i[n]();return i!==e&&!dn(e)&&(o._next=o.next,o.next=()=>{const a=o._next();return a.value&&(a.value=t(a.value)),a}),o}const Pc=Array.prototype;function En(e,n,t,i,o,a){const l=Ji(e),r=l!==e&&!dn(e),s=l[n];if(s!==Pc[n]){const u=s.apply(e,a);return r?Me(u):u}let c=t;l!==e&&(r?c=function(u,p){return t.call(this,Me(u),p,e)}:t.length>2&&(c=function(u,p){return t.call(this,u,p,e)}));const d=s.call(l,c,i);return r&&o?o(d):d}function ja(e,n,t,i){const o=Ji(e);let a=t;return o!==e&&(dn(e)?t.length>3&&(a=function(l,r,s){return t.call(this,l,r,s,e)}):a=function(l,r,s){return t.call(this,l,Me(r),s,e)}),o[n](a,...i)}function _o(e,n,t){const i=pe(e);qe(i,"iterate",Xt);const o=i[n](...t);return(o===-1||o===!1)&&oa(t[0])?(t[0]=pe(t[0]),i[n](...t)):o}function Dt(e,n,t=[]){Pn(),na();const i=pe(e)[n].apply(e,t);return ta(),Dn(),i}const Dc=Zo("__proto__,__v_isRef,__isVue"),kr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mn));function Fc(e){Mn(e)||(e=String(e));const n=pe(this);return qe(n,"has",e),n.hasOwnProperty(e)}class Er{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,a=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return a;if(t==="__v_raw")return i===(o?a?Vr:Tr:a?xr:Cr).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const l=ae(n);if(!o){let s;if(l&&(s=zc[t]))return s;if(t==="hasOwnProperty")return Fc}const r=Reflect.get(n,t,Oe(n)?n:i);return(Mn(t)?kr.has(t):Dc(t))||(o||qe(n,"get",t),a)?r:Oe(r)?l&&ea(t)?r:r.value:Ee(r)?o?no(r):ut(r):r}}class Sr extends Er{constructor(n=!1){super(!1,n)}set(n,t,i,o){let a=n[t];if(!this._isShallow){const s=Yn(a);if(!dn(i)&&!Yn(i)&&(a=pe(a),i=pe(i)),!ae(n)&&Oe(a)&&!Oe(i))return s||(a.value=i),!0}const l=ae(n)&&ea(t)?Number(t)<n.length:ge(n,t),r=Reflect.set(n,t,i,Oe(n)?n:o);return n===pe(o)&&(l?qn(i,a)&&An(n,"set",t,i):An(n,"add",t,i)),r}deleteProperty(n,t){const i=ge(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&i&&An(n,"delete",t,void 0),o}has(n,t){const i=Reflect.has(n,t);return(!Mn(t)||!kr.has(t))&&qe(n,"has",t),i}ownKeys(n){return qe(n,"iterate",ae(n)?"length":lt),Reflect.ownKeys(n)}}class Ir extends Er{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Mc=new Sr,jc=new Ir,Hc=new Sr(!0),Gc=new Ir(!0),Mo=e=>e,_i=e=>Reflect.getPrototypeOf(e);function Nc(e,n,t){return function(...i){const o=this.__v_raw,a=pe(o),l=Lt(a),r=e==="entries"||e===Symbol.iterator&&l,s=e==="keys"&&l,c=o[e](...i),d=t?Mo:n?ji:Me;return!n&&qe(a,"iterate",s?Fo:lt),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:r?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function wi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Uc(e,n){const t={get(o){const a=this.__v_raw,l=pe(a),r=pe(o);e||(qn(o,r)&&qe(l,"get",o),qe(l,"get",r));const{has:s}=_i(l),c=n?Mo:e?ji:Me;if(s.call(l,o))return c(a.get(o));if(s.call(l,r))return c(a.get(r));a!==l&&a.get(o)},get size(){const o=this.__v_raw;return!e&&qe(pe(o),"iterate",lt),Reflect.get(o,"size",o)},has(o){const a=this.__v_raw,l=pe(a),r=pe(o);return e||(qn(o,r)&&qe(l,"has",o),qe(l,"has",r)),o===r?a.has(o):a.has(o)||a.has(r)},forEach(o,a){const l=this,r=l.__v_raw,s=pe(r),c=n?Mo:e?ji:Me;return!e&&qe(s,"iterate",lt),r.forEach((d,u)=>o.call(a,c(d),c(u),l))}};return De(t,e?{add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear")}:{add(o){!n&&!dn(o)&&!Yn(o)&&(o=pe(o));const a=pe(this);return _i(a).has.call(a,o)||(a.add(o),An(a,"add",o,o)),this},set(o,a){!n&&!dn(a)&&!Yn(a)&&(a=pe(a));const l=pe(this),{has:r,get:s}=_i(l);let c=r.call(l,o);c||(o=pe(o),c=r.call(l,o));const d=s.call(l,o);return l.set(o,a),c?qn(a,d)&&An(l,"set",o,a):An(l,"add",o,a),this},delete(o){const a=pe(this),{has:l,get:r}=_i(a);let s=l.call(a,o);s||(o=pe(o),s=l.call(a,o)),r&&r.call(a,o);const c=a.delete(o);return s&&An(a,"delete",o,void 0),c},clear(){const o=pe(this),a=o.size!==0,l=o.clear();return a&&An(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Nc(o,e,n)}),t}function eo(e,n){const t=Uc(e,n);return(i,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(ge(t,o)&&o in i?t:i,o,a)}const Wc={get:eo(!1,!1)},Bc={get:eo(!1,!0)},$c={get:eo(!0,!1)},qc={get:eo(!0,!0)},Cr=new WeakMap,xr=new WeakMap,Tr=new WeakMap,Vr=new WeakMap;function Kc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yc(e){return e.__v_skip||!Object.isExtensible(e)?0:Kc(yc(e))}function ut(e){return Yn(e)?e:to(e,!1,Mc,Wc,Cr)}function Ar(e){return to(e,!1,Hc,Bc,xr)}function no(e){return to(e,!0,jc,$c,Tr)}function Qc(e){return to(e,!0,Gc,qc,Vr)}function to(e,n,t,i,o){if(!Ee(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=Yc(e);if(a===0)return e;const l=o.get(e);if(l)return l;const r=new Proxy(e,a===2?i:t);return o.set(e,r),r}function rt(e){return Yn(e)?rt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function dn(e){return!!(e&&e.__v_isShallow)}function oa(e){return e?!!e.__v_raw:!1}function pe(e){const n=e&&e.__v_raw;return n?pe(n):e}function Zc(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&dr(e,"__v_skip",!0),e}const Me=e=>Ee(e)?ut(e):e,ji=e=>Ee(e)?no(e):e;function Oe(e){return e?e.__v_isRef===!0:!1}function ze(e){return Rr(e,!1)}function we(e){return Rr(e,!0)}function Rr(e,n){return Oe(e)?e:new Xc(e,n)}class Xc{constructor(n,t){this.dep=new Xi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:pe(n),this._value=t?n:Me(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||dn(n)||Yn(n);n=i?n:pe(n),qn(n,t)&&(this._rawValue=n,this._value=i?n:Me(n),this.dep.trigger())}}function Z(e){return Oe(e)?e.value:e}function ve(e){return le(e)?e():Z(e)}const Jc={get:(e,n,t)=>n==="__v_raw"?e:Z(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const o=e[n];return Oe(o)&&!Oe(t)?(o.value=t,!0):Reflect.set(e,n,t,i)}};function Or(e){return rt(e)?e:new Proxy(e,Jc)}class ed{constructor(n){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Xi,{get:i,set:o}=n(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=o}get value(){return this._value=this._get()}set value(n){this._set(n)}}function zr(e){return new ed(e)}function aa(e){const n=ae(e)?new Array(e.length):{};for(const t in e)n[t]=Dr(e,t);return n}class nd{constructor(n,t,i){this._object=n,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const n=this._object[this._key];return this._value=n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Oc(pe(this._object),this._key)}}class td{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Pr(e,n,t){return Oe(e)?e:le(e)?new td(e):Ee(e)&&arguments.length>1?Dr(e,n,t):ze(e)}function Dr(e,n,t){const i=e[n];return Oe(i)?i:new nd(e,n,t)}class id{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Xi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return vr(this,!0),!0}get value(){const n=this.dep.track();return _r(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function od(e,n,t=!1){let i,o;return le(e)?i=e:(i=e.get,o=e.set),new id(i,o,t)}const Li={},Hi=new WeakMap;let it;function ad(e,n=!1,t=it){if(t){let i=Hi.get(t);i||Hi.set(t,i=[]),i.push(e)}}function ld(e,n,t=be){const{immediate:i,deep:o,once:a,scheduler:l,augmentJob:r,call:s}=t,c=b=>o?b:dn(b)||o===!1||o===0?Rn(b,1):Rn(b);let d,u,p,m,y=!1,_=!1;if(Oe(e)?(u=()=>e.value,y=dn(e)):rt(e)?(u=()=>c(e),y=!0):ae(e)?(_=!0,y=e.some(b=>rt(b)||dn(b)),u=()=>e.map(b=>{if(Oe(b))return b.value;if(rt(b))return c(b);if(le(b))return s?s(b,2):b()})):le(e)?n?u=s?()=>s(e,2):e:u=()=>{if(p){Pn();try{p()}finally{Dn()}}const b=it;it=d;try{return s?s(e,3,[m]):e(m)}finally{it=b}}:u=wn,n&&o){const b=u,j=o===!0?1/0:o;u=()=>Rn(b(),j)}const k=mr(),I=()=>{d.stop(),k&&k.active&&Jo(k.effects,d)};if(a&&n){const b=n;n=(...j)=>{b(...j),I()}}let S=_?new Array(e.length).fill(Li):Li;const g=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(n){const j=d.run();if(o||y||(_?j.some((X,P)=>qn(X,S[P])):qn(j,S))){p&&p();const X=it;it=d;try{const P=[j,S===Li?void 0:_&&S[0]===Li?[]:S,m];S=j,s?s(n,3,P):n(...P)}finally{it=X}}}else d.run()};return r&&r(g),d=new gr(u),d.scheduler=l?()=>l(g,!1):g,m=b=>ad(b,!1,d),p=d.onStop=()=>{const b=Hi.get(d);if(b){if(s)s(b,4);else for(const j of b)j();Hi.delete(d)}},n?i?g(!0):S=d.run():l?l(g.bind(null,!0),!0):d.run(),I.pause=d.pause.bind(d),I.resume=d.resume.bind(d),I.stop=I,I}function Rn(e,n=1/0,t){if(n<=0||!Ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,Oe(e))Rn(e.value,n,t);else if(ae(e))for(let i=0;i<e.length;i++)Rn(e[i],n,t);else if(lr(e)||Lt(e))e.forEach(i=>{Rn(i,n,t)});else if(cr(e)){for(const i in e)Rn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Rn(e[i],n,t)}return e}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(e,n,t,i){try{return i?e(...i):e()}catch(o){ui(o,n,t)}}function mn(e,n,t,i){if(le(e)){const o=di(e,n,t,i);return o&&rr(o)&&o.catch(a=>{ui(a,n,t)}),o}if(ae(e)){const o=[];for(let a=0;a<e.length;a++)o.push(mn(e[a],n,t,i));return o}}function ui(e,n,t,i=!0){const o=n?n.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:l}=n&&n.appContext.config||be;if(n){let r=n.parent;const s=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const d=r.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,s,c)===!1)return}r=r.parent}if(a){Pn(),di(a,null,10,[e,s,c]),Dn();return}}rd(e,t,o,i,l)}function rd(e,n,t,i=!0,o=!1){if(o)throw e;console.error(e)}const Qe=[];let bn=-1;const Et=[];let Wn=null,yt=0;const Fr=Promise.resolve();let Gi=null;function hi(e){const n=Gi||Fr;return e?n.then(this?e.bind(this):e):n}function sd(e){let n=bn+1,t=Qe.length;for(;n<t;){const i=n+t>>>1,o=Qe[i],a=Jt(o);a<e||a===e&&o.flags&2?n=i+1:t=i}return n}function la(e){if(!(e.flags&1)){const n=Jt(e),t=Qe[Qe.length-1];!t||!(e.flags&2)&&n>=Jt(t)?Qe.push(e):Qe.splice(sd(n),0,e),e.flags|=1,Mr()}}function Mr(){Gi||(Gi=Fr.then(jr))}function cd(e){ae(e)?Et.push(...e):Wn&&e.id===-1?Wn.splice(yt+1,0,e):e.flags&1||(Et.push(e),e.flags|=1),Mr()}function Ha(e,n,t=bn+1){for(;t<Qe.length;t++){const i=Qe[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Qe.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ni(e){if(Et.length){const n=[...new Set(Et)].sort((t,i)=>Jt(t)-Jt(i));if(Et.length=0,Wn){Wn.push(...n);return}for(Wn=n,yt=0;yt<Wn.length;yt++){const t=Wn[yt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Wn=null,yt=0}}const Jt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function jr(e){try{for(bn=0;bn<Qe.length;bn++){const n=Qe[bn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),di(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;bn<Qe.length;bn++){const n=Qe[bn];n&&(n.flags&=-2)}bn=-1,Qe.length=0,Ni(),Gi=null,(Qe.length||Et.length)&&jr()}}let Ge=null,Hr=null;function Ui(e){const n=Ge;return Ge=e,Hr=e&&e.type.__scopeId||null,n}function xe(e,n=Ge,t){if(!n||e._n)return e;const i=(...o)=>{i._d&&Ja(-1);const a=Ui(n);let l;try{l=e(...o)}finally{Ui(a),i._d&&Ja(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Wi(e,n){if(Ge===null)return e;const t=lo(Ge),i=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[a,l,r,s=be]=n[o];a&&(le(a)&&(a={mounted:a,updated:a}),a.deep&&Rn(l),i.push({dir:a,instance:t,value:l,oldValue:void 0,arg:r,modifiers:s}))}return e}function _n(e,n,t,i){const o=e.dirs,a=n&&n.dirs;for(let l=0;l<o.length;l++){const r=o[l];a&&(r.oldValue=a[l].value);let s=r.dir[i];s&&(Pn(),mn(s,t,8,[e.el,r,e,n]),Dn())}}const dd=Symbol("_vte"),Gr=e=>e.__isTeleport,Vn=Symbol("_leaveCb"),ki=Symbol("_enterCb");function ud(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nn(()=>{e.isMounted=!0}),sa(()=>{e.isUnmounting=!0}),e}const rn=[Function,Array],Nr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},Ur=e=>{const n=e.subTree;return n.component?Ur(n.component):n},hd={name:"BaseTransition",props:Nr,setup(e,{slots:n}){const t=Hn(),i=ud();return()=>{const o=n.default&&$r(n.default(),!0);if(!o||!o.length)return;const a=Wr(o),l=pe(e),{mode:r}=l;if(i.isLeaving)return wo(a);const s=Ga(a);if(!s)return wo(a);let c=jo(s,l,i,t,u=>c=u);s.type!==je&&ei(s,c);let d=t.subTree&&Ga(t.subTree);if(d&&d.type!==je&&!at(s,d)&&Ur(t).type!==je){let u=jo(d,l,i,t);if(ei(d,u),r==="out-in"&&s.type!==je)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete u.afterLeave,d=void 0},wo(a);r==="in-out"&&s.type!==je?u.delayLeave=(p,m,y)=>{const _=Br(i,d);_[String(d.key)]=d,p[Vn]=()=>{m(),p[Vn]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return a}}};function Wr(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==je){n=t;break}}return n}const pd=hd;function Br(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function jo(e,n,t,i,o){const{appear:a,mode:l,persisted:r=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:m,onAfterLeave:y,onLeaveCancelled:_,onBeforeAppear:k,onAppear:I,onAfterAppear:S,onAppearCancelled:g}=n,b=String(e.key),j=Br(t,e),X=(V,z)=>{V&&mn(V,i,9,z)},P=(V,z)=>{const W=z[1];X(V,z),ae(V)?V.every(L=>L.length<=1)&&W():V.length<=1&&W()},E={mode:l,persisted:r,beforeEnter(V){let z=s;if(!t.isMounted)if(a)z=k||s;else return;V[Vn]&&V[Vn](!0);const W=j[b];W&&at(e,W)&&W.el[Vn]&&W.el[Vn](),X(z,[V])},enter(V){let z=c,W=d,L=u;if(!t.isMounted)if(a)z=I||c,W=S||d,L=g||u;else return;let D=!1;const F=V[ki]=N=>{D||(D=!0,N?X(L,[V]):X(W,[V]),E.delayedLeave&&E.delayedLeave(),V[ki]=void 0)};z?P(z,[V,F]):F()},leave(V,z){const W=String(e.key);if(V[ki]&&V[ki](!0),t.isUnmounting)return z();X(p,[V]);let L=!1;const D=V[Vn]=F=>{L||(L=!0,z(),F?X(_,[V]):X(y,[V]),V[Vn]=void 0,j[W]===e&&delete j[W])};j[W]=e,m?P(m,[V,D]):D()},clone(V){const z=jo(V,n,t,i,o);return o&&o(z),z}};return E}function wo(e){if(pi(e))return e=Zn(e),e.children=null,e}function Ga(e){if(!pi(e))return Gr(e.type)&&e.children?Wr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&le(t.default))return t.default()}}function ei(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ei(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function $r(e,n=!1,t){let i=[],o=0;for(let a=0;a<e.length;a++){let l=e[a];const r=t==null?l.key:String(t)+String(l.key!=null?l.key:a);l.type===_e?(l.patchFlag&128&&o++,i=i.concat($r(l.children,n,r))):(n||l.type!==je)&&i.push(r!=null?Zn(l,{key:r}):l)}if(o>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ce(e,n){return le(e)?De({name:e.name},n,{setup:e}):e}function ra(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Na(e){const n=Hn(),t=we(null);if(n){const o=n.refs===be?n.refs={}:n.refs;Object.defineProperty(o,e,{enumerable:!0,get:()=>t.value,set:a=>t.value=a})}return t}function St(e,n,t,i,o=!1){if(ae(e)){e.forEach((y,_)=>St(y,n&&(ae(n)?n[_]:n),t,i,o));return}if(st(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&St(e,n,t,i.component.subTree);return}const a=i.shapeFlag&4?lo(i.component):i.el,l=o?null:a,{i:r,r:s}=e,c=n&&n.r,d=r.refs===be?r.refs={}:r.refs,u=r.setupState,p=pe(u),m=u===be?ar:y=>ge(p,y);if(c!=null&&c!==s){if(Ve(c))d[c]=null,m(c)&&(u[c]=null);else if(Oe(c)){c.value=null;const y=n;y.k&&(d[y.k]=null)}}if(le(s))di(s,r,12,[l,d]);else{const y=Ve(s),_=Oe(s);if(y||_){const k=()=>{if(e.f){const I=y?m(s)?u[s]:d[s]:s.value;if(o)ae(I)&&Jo(I,a);else if(ae(I))I.includes(a)||I.push(a);else if(y)d[s]=[a],m(s)&&(u[s]=d[s]);else{const S=[a];s.value=S,e.k&&(d[e.k]=S)}}else y?(d[s]=l,m(s)&&(u[s]=l)):_&&(s.value=l,e.k&&(d[e.k]=l))};l?(k.id=-1,an(k,t)):k()}}}let Ua=!1;const ft=()=>{Ua||(console.error("Hydration completed but contains mismatches."),Ua=!0)},md=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",gd=e=>e.namespaceURI.includes("MathML"),Ei=e=>{if(e.nodeType===1){if(md(e))return"svg";if(gd(e))return"mathml"}},_t=e=>e.nodeType===8;function fd(e){const{mt:n,p:t,o:{patchProp:i,createText:o,nextSibling:a,parentNode:l,remove:r,insert:s,createComment:c}}=e,d=(g,b)=>{if(!b.hasChildNodes()){t(null,g,b),Ni(),b._vnode=g;return}u(b.firstChild,g,null,null,null),Ni(),b._vnode=g},u=(g,b,j,X,P,E=!1)=>{E=E||!!b.dynamicChildren;const V=_t(g)&&g.data==="[",z=()=>_(g,b,j,X,P,V),{type:W,ref:L,shapeFlag:D,patchFlag:F}=b;let N=g.nodeType;b.el=g,F===-2&&(E=!1,b.dynamicChildren=null);let T=null;switch(W){case dt:N!==3?b.children===""?(s(b.el=o(""),l(g),g),T=g):T=z():(g.data!==b.children&&(ft(),g.data=b.children),T=a(g));break;case je:S(g)?(T=a(g),I(b.el=g.content.firstChild,g,j)):N!==8||V?T=z():T=a(g);break;case $t:if(V&&(g=a(g),N=g.nodeType),N===1||N===3){T=g;const ee=!b.children.length;for(let B=0;B<b.staticCount;B++)ee&&(b.children+=T.nodeType===1?T.outerHTML:T.data),B===b.staticCount-1&&(b.anchor=T),T=a(T);return V?a(T):T}else z();break;case _e:V?T=y(g,b,j,X,P,E):T=z();break;default:if(D&1)(N!==1||b.type.toLowerCase()!==g.tagName.toLowerCase())&&!S(g)?T=z():T=p(g,b,j,X,P,E);else if(D&6){b.slotScopeIds=P;const ee=l(g);if(V?T=k(g):_t(g)&&g.data==="teleport start"?T=k(g,g.data,"teleport end"):T=a(g),n(b,ee,null,j,X,Ei(ee),E),st(b)&&!b.type.__asyncResolved){let B;V?(B=se(_e),B.anchor=T?T.previousSibling:ee.lastChild):B=g.nodeType===3?Fn(""):se("div"),B.el=g,b.component.subTree=B}}else D&64?N!==8?T=z():T=b.type.hydrate(g,b,j,X,P,E,e,m):D&128&&(T=b.type.hydrate(g,b,j,X,Ei(l(g)),P,E,e,u))}return L!=null&&St(L,null,X,b),T},p=(g,b,j,X,P,E)=>{E=E||!!b.dynamicChildren;const{type:V,props:z,patchFlag:W,shapeFlag:L,dirs:D,transition:F}=b,N=V==="input"||V==="option";if(N||W!==-1){D&&_n(b,null,j,"created");let T=!1;if(S(g)){T=ss(null,F)&&j&&j.vnode.props&&j.vnode.props.appear;const B=g.content.firstChild;if(T){const de=B.getAttribute("class");de&&(B.$cls=de),F.beforeEnter(B)}I(B,g,j),b.el=g=B}if(L&16&&!(z&&(z.innerHTML||z.textContent))){let B=m(g.firstChild,b,g,j,X,P,E);for(;B;){Si(g,1)||ft();const de=B;B=B.nextSibling,r(de)}}else if(L&8){let B=b.children;B[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(B=B.slice(1)),g.textContent!==B&&(Si(g,0)||ft(),g.textContent=b.children)}if(z){if(N||!E||W&48){const B=g.tagName.includes("-");for(const de in z)(N&&(de.endsWith("value")||de==="indeterminate")||si(de)&&!kt(de)||de[0]==="."||B)&&i(g,de,null,z[de],void 0,j)}else if(z.onClick)i(g,"onClick",null,z.onClick,void 0,j);else if(W&4&&rt(z.style))for(const B in z.style)z.style[B]}let ee;(ee=z&&z.onVnodeBeforeMount)&&sn(ee,j,b),D&&_n(b,null,j,"beforeMount"),((ee=z&&z.onVnodeMounted)||D||T)&&gs(()=>{ee&&sn(ee,j,b),T&&F.enter(g),D&&_n(b,null,j,"mounted")},X)}return g.nextSibling},m=(g,b,j,X,P,E,V)=>{V=V||!!b.dynamicChildren;const z=b.children,W=z.length;for(let L=0;L<W;L++){const D=V?z[L]:z[L]=cn(z[L]),F=D.type===dt;g?(F&&!V&&L+1<W&&cn(z[L+1]).type===dt&&(s(o(g.data.slice(D.children.length)),j,a(g)),g.data=D.children),g=u(g,D,X,P,E,V)):F&&!D.children?s(D.el=o(""),j):(Si(j,1)||ft(),t(null,D,j,null,X,P,Ei(j),E))}return g},y=(g,b,j,X,P,E)=>{const{slotScopeIds:V}=b;V&&(P=P?P.concat(V):V);const z=l(g),W=m(a(g),b,z,j,X,P,E);return W&&_t(W)&&W.data==="]"?a(b.anchor=W):(ft(),s(b.anchor=c("]"),z,W),W)},_=(g,b,j,X,P,E)=>{if(Si(g.parentElement,1)||ft(),b.el=null,E){const W=k(g);for(;;){const L=a(g);if(L&&L!==W)r(L);else break}}const V=a(g),z=l(g);return r(g),t(null,b,z,V,j,X,Ei(z),P),j&&(j.vnode.el=b.el,ps(j,b.el)),V},k=(g,b="[",j="]")=>{let X=0;for(;g;)if(g=a(g),g&&_t(g)&&(g.data===b&&X++,g.data===j)){if(X===0)return a(g);X--}return g},I=(g,b,j)=>{const X=b.parentNode;X&&X.replaceChild(g,b);let P=j;for(;P;)P.vnode.el===b&&(P.vnode.el=P.subTree.el=g),P=P.parent},S=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[d,u]}const Wa="data-allow-mismatch",vd={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Si(e,n){if(n===0||n===1)for(;e&&!e.hasAttribute(Wa);)e=e.parentElement;const t=e&&e.getAttribute(Wa);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return n===0&&i.includes("children")?!0:i.includes(vd[n])}}Zi().requestIdleCallback;Zi().cancelIdleCallback;function yd(e,n){if(_t(e)&&e.data==="["){let t=1,i=e.nextSibling;for(;i;){if(i.nodeType===1){if(n(i)===!1)break}else if(_t(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else n(e)}const st=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function bd(e){le(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:i,delay:o=200,hydrate:a,timeout:l,suspensible:r=!0,onError:s}=e;let c=null,d,u=0;const p=()=>(u++,c=null,m()),m=()=>{let y;return c||(y=c=n().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),s)return new Promise((k,I)=>{s(_,()=>k(p()),()=>I(_),u+1)});throw _}).then(_=>y!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),d=_,_)))};return ce({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(y,_,k){let I=!1;(_.bu||(_.bu=[])).push(()=>I=!0);const S=()=>{I||k()},g=a?()=>{const b=a(S,j=>yd(y,j));b&&(_.bum||(_.bum=[])).push(b)}:S;d?g():m().then(()=>!_.isUnmounted&&g())},get __asyncResolved(){return d},setup(){const y=He;if(ra(y),d)return()=>Lo(d,y);const _=g=>{c=null,ui(g,y,13,!i)};if(r&&y.suspense||Tt)return m().then(g=>()=>Lo(g,y)).catch(g=>(_(g),()=>i?se(i,{error:g}):null));const k=ze(!1),I=ze(),S=ze(!!o);return o&&setTimeout(()=>{S.value=!1},o),l!=null&&setTimeout(()=>{if(!k.value&&!I.value){const g=new Error(`Async component timed out after ${l}ms.`);_(g),I.value=g}},l),m().then(()=>{k.value=!0,y.parent&&pi(y.parent.vnode)&&y.parent.update()}).catch(g=>{_(g),I.value=g}),()=>{if(k.value&&d)return Lo(d,y);if(I.value&&i)return se(i,{error:I.value});if(t&&!S.value)return se(t)}}})}function Lo(e,n){const{ref:t,props:i,children:o,ce:a}=n.vnode,l=se(e,i,o);return l.ref=t,l.ce=a,delete n.vnode.ce,l}const pi=e=>e.type.__isKeepAlive;function _d(e,n){qr(e,"a",n)}function wd(e,n){qr(e,"da",n)}function qr(e,n,t=He){const i=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(io(n,i,t),t){let o=t.parent;for(;o&&o.parent;)pi(o.parent.vnode)&&Ld(i,n,t,o),o=o.parent}}function Ld(e,n,t,i){const o=io(n,e,i,!0);oo(()=>{Jo(i[n],o)},t)}function io(e,n,t=He,i=!1){if(t){const o=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...l)=>{Pn();const r=mi(t),s=mn(n,t,e,l);return r(),Dn(),s});return i?o.unshift(a):o.push(a),a}}const jn=e=>(n,t=He)=>{(!Tt||e==="sp")&&io(e,(...i)=>n(...i),t)},kd=jn("bm"),nn=jn("m"),Ed=jn("bu"),Sd=jn("u"),sa=jn("bum"),oo=jn("um"),Id=jn("sp"),Cd=jn("rtg"),xd=jn("rtc");function Td(e,n=He){io("ec",e,n)}const Vd="components";function Kr(e,n){return Rd(Vd,e,!0,n)||e}const Ad=Symbol.for("v-ndc");function Rd(e,n,t=!0,i=!1){const o=Ge||He;if(o){const a=o.type;{const r=vu(a,!1);if(r&&(r===n||r===en(n)||r===ci(en(n))))return a}const l=Ba(o[e]||a[e],n)||Ba(o.appContext[e],n);return!l&&i?a:l}}function Ba(e,n){return e&&(e[n]||e[en(n)]||e[ci(en(n))])}function Qn(e,n,t,i){let o;const a=t,l=ae(e);if(l||Ve(e)){const r=l&&rt(e);let s=!1,c=!1;r&&(s=!dn(e),c=Yn(e),e=Ji(e)),o=new Array(e.length);for(let d=0,u=e.length;d<u;d++)o[d]=n(s?c?ji(Me(e[d])):Me(e[d]):e[d],d,void 0,a)}else if(typeof e=="number"){o=new Array(e);for(let r=0;r<e;r++)o[r]=n(r+1,r,void 0,a)}else if(Ee(e))if(e[Symbol.iterator])o=Array.from(e,(r,s)=>n(r,s,void 0,a));else{const r=Object.keys(e);o=new Array(r.length);for(let s=0,c=r.length;s<c;s++){const d=r[s];o[s]=n(e[d],d,s,a)}}else o=[];return o}function Od(e,n){for(let t=0;t<n.length;t++){const i=n[t];if(ae(i))for(let o=0;o<i.length;o++)e[i[o].name]=i[o].fn;else i&&(e[i.name]=i.key?(...o)=>{const a=i.fn(...o);return a&&(a.key=i.key),a}:i.fn)}return e}function Se(e,n,t={},i,o){if(Ge.ce||Ge.parent&&st(Ge.parent)&&Ge.parent.ce)return n!=="default"&&(t.name=n),U(),Ce(_e,null,[se("slot",t,i&&i())],64);let a=e[n];a&&a._c&&(a._d=!1),U();const l=a&&Yr(a(t)),r=t.key||l&&l.key,s=Ce(_e,{key:(r&&!Mn(r)?r:`_${n}`)+(!l&&i?"_fb":"")},l||(i?i():[]),l&&e._===1?64:-2);return s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Yr(e){return e.some(n=>ti(n)?!(n.type===je||n.type===_e&&!Yr(n.children)):!0)?e:null}const Ho=e=>e?ys(e)?lo(e):Ho(e.parent):null,Bt=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ho(e.parent),$root:e=>Ho(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Zr(e),$forceUpdate:e=>e.f||(e.f=()=>{la(e.update)}),$nextTick:e=>e.n||(e.n=hi.bind(e.proxy)),$watch:e=>eu.bind(e)}),ko=(e,n)=>e!==be&&!e.__isScriptSetup&&ge(e,n),zd={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:o,props:a,accessCache:l,type:r,appContext:s}=e;let c;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return i[n];case 2:return o[n];case 4:return t[n];case 3:return a[n]}else{if(ko(i,n))return l[n]=1,i[n];if(o!==be&&ge(o,n))return l[n]=2,o[n];if((c=e.propsOptions[0])&&ge(c,n))return l[n]=3,a[n];if(t!==be&&ge(t,n))return l[n]=4,t[n];Go&&(l[n]=0)}}const d=Bt[n];let u,p;if(d)return n==="$attrs"&&qe(e.attrs,"get",""),d(e);if((u=r.__cssModules)&&(u=u[n]))return u;if(t!==be&&ge(t,n))return l[n]=4,t[n];if(p=s.config.globalProperties,ge(p,n))return p[n]},set({_:e},n,t){const{data:i,setupState:o,ctx:a}=e;return ko(o,n)?(o[n]=t,!0):i!==be&&ge(i,n)?(i[n]=t,!0):ge(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:o,propsOptions:a,type:l}},r){let s,c;return!!(t[r]||e!==be&&r[0]!=="$"&&ge(e,r)||ko(n,r)||(s=a[0])&&ge(s,r)||ge(i,r)||ge(Bt,r)||ge(o.config.globalProperties,r)||(c=l.__cssModules)&&c[r])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ge(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function $a(e){return ae(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Go=!0;function Pd(e){const n=Zr(e),t=e.proxy,i=e.ctx;Go=!1,n.beforeCreate&&qa(n.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:r,provide:s,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:m,updated:y,activated:_,deactivated:k,beforeDestroy:I,beforeUnmount:S,destroyed:g,unmounted:b,render:j,renderTracked:X,renderTriggered:P,errorCaptured:E,serverPrefetch:V,expose:z,inheritAttrs:W,components:L,directives:D,filters:F}=n;if(c&&Dd(c,i,null),l)for(const ee in l){const B=l[ee];le(B)&&(i[ee]=B.bind(t))}if(o){const ee=o.call(t,t);Ee(ee)&&(e.data=ut(ee))}if(Go=!0,a)for(const ee in a){const B=a[ee],de=le(B)?B.bind(t,t):le(B.get)?B.get.bind(t,t):wn,Ae=!le(B)&&le(B.set)?B.set.bind(t):wn,Fe=O({get:de,set:Ae});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:We=>Fe.value=We})}if(r)for(const ee in r)Qr(r[ee],i,t,ee);if(s){const ee=le(s)?s.call(t):s;Reflect.ownKeys(ee).forEach(B=>{Kn(B,ee[B])})}d&&qa(d,e,"c");function T(ee,B){ae(B)?B.forEach(de=>ee(de.bind(t))):B&&ee(B.bind(t))}if(T(kd,u),T(nn,p),T(Ed,m),T(Sd,y),T(_d,_),T(wd,k),T(Td,E),T(xd,X),T(Cd,P),T(sa,S),T(oo,b),T(Id,V),ae(z))if(z.length){const ee=e.exposed||(e.exposed={});z.forEach(B=>{Object.defineProperty(ee,B,{get:()=>t[B],set:de=>t[B]=de,enumerable:!0})})}else e.exposed||(e.exposed={});j&&e.render===wn&&(e.render=j),W!=null&&(e.inheritAttrs=W),L&&(e.components=L),D&&(e.directives=D),V&&ra(e)}function Dd(e,n,t=wn){ae(e)&&(e=No(e));for(const i in e){const o=e[i];let a;Ee(o)?"default"in o?a=Ne(o.from||i,o.default,!0):a=Ne(o.from||i):a=Ne(o),Oe(a)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):n[i]=a}}function qa(e,n,t){mn(ae(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Qr(e,n,t,i){let o=i.includes(".")?us(t,i):()=>t[i];if(Ve(e)){const a=n[e];le(a)&&Ke(o,a)}else if(le(e))Ke(o,e.bind(t));else if(Ee(e))if(ae(e))e.forEach(a=>Qr(a,n,t,i));else{const a=le(e.handler)?e.handler.bind(t):n[e.handler];le(a)&&Ke(o,a,e)}}function Zr(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:o,optionsCache:a,config:{optionMergeStrategies:l}}=e.appContext,r=a.get(n);let s;return r?s=r:!o.length&&!t&&!i?s=n:(s={},o.length&&o.forEach(c=>Bi(s,c,l,!0)),Bi(s,n,l)),Ee(n)&&a.set(n,s),s}function Bi(e,n,t,i=!1){const{mixins:o,extends:a}=n;a&&Bi(e,a,t,!0),o&&o.forEach(l=>Bi(e,l,t,!0));for(const l in n)if(!(i&&l==="expose")){const r=Fd[l]||t&&t[l];e[l]=r?r(e[l],n[l]):n[l]}return e}const Fd={data:Ka,props:Ya,emits:Ya,methods:Gt,computed:Gt,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Gt,directives:Gt,watch:jd,provide:Ka,inject:Md};function Ka(e,n){return n?e?function(){return De(le(e)?e.call(this,this):e,le(n)?n.call(this,this):n)}:n:e}function Md(e,n){return Gt(No(e),No(n))}function No(e){if(ae(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ye(e,n){return e?[...new Set([].concat(e,n))]:n}function Gt(e,n){return e?De(Object.create(null),e,n):n}function Ya(e,n){return e?ae(e)&&ae(n)?[...new Set([...e,...n])]:De(Object.create(null),$a(e),$a(n??{})):n}function jd(e,n){if(!e)return n;if(!n)return e;const t=De(Object.create(null),e);for(const i in n)t[i]=Ye(e[i],n[i]);return t}function Xr(){return{app:null,config:{isNativeTag:ar,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hd=0;function Gd(e,n){return function(i,o=null){le(i)||(i=De({},i)),o!=null&&!Ee(o)&&(o=null);const a=Xr(),l=new WeakSet,r=[];let s=!1;const c=a.app={_uid:Hd++,_component:i,_props:o,_container:null,_context:a,_instance:null,version:bu,get config(){return a.config},set config(d){},use(d,...u){return l.has(d)||(d&&le(d.install)?(l.add(d),d.install(c,...u)):le(d)&&(l.add(d),d(c,...u))),c},mixin(d){return a.mixins.includes(d)||a.mixins.push(d),c},component(d,u){return u?(a.components[d]=u,c):a.components[d]},directive(d,u){return u?(a.directives[d]=u,c):a.directives[d]},mount(d,u,p){if(!s){const m=c._ceVNode||se(i,o);return m.appContext=a,p===!0?p="svg":p===!1&&(p=void 0),u&&n?n(m,d):e(m,d,p),s=!0,c._container=d,d.__vue_app__=c,lo(m.component)}},onUnmount(d){r.push(d)},unmount(){s&&(mn(r,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return a.provides[d]=u,c},runWithContext(d){const u=ct;ct=c;try{return d()}finally{ct=u}}};return c}}let ct=null;function Kn(e,n){if(He){let t=He.provides;const i=He.parent&&He.parent.provides;i===t&&(t=He.provides=Object.create(i)),t[e]=n}}function Ne(e,n,t=!1){const i=Hn();if(i||ct){let o=ct?ct._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&le(n)?n.call(i&&i.proxy):n}}function Jr(){return!!(Hn()||ct)}const es={},ns=()=>Object.create(es),ts=e=>Object.getPrototypeOf(e)===es;function Nd(e,n,t,i=!1){const o={},a=ns();e.propsDefaults=Object.create(null),is(e,n,o,a);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);t?e.props=i?o:Ar(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ud(e,n,t,i){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,r=pe(o),[s]=e.propsOptions;let c=!1;if((i||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(ao(e.emitsOptions,p))continue;const m=n[p];if(s)if(ge(a,p))m!==a[p]&&(a[p]=m,c=!0);else{const y=en(p);o[y]=Uo(s,r,y,m,e,!1)}else m!==a[p]&&(a[p]=m,c=!0)}}}else{is(e,n,o,a)&&(c=!0);let d;for(const u in r)(!n||!ge(n,u)&&((d=Xn(u))===u||!ge(n,d)))&&(s?t&&(t[u]!==void 0||t[d]!==void 0)&&(o[u]=Uo(s,r,u,void 0,e,!0)):delete o[u]);if(a!==r)for(const u in a)(!n||!ge(n,u))&&(delete a[u],c=!0)}c&&An(e.attrs,"set","")}function is(e,n,t,i){const[o,a]=e.propsOptions;let l=!1,r;if(n)for(let s in n){if(kt(s))continue;const c=n[s];let d;o&&ge(o,d=en(s))?!a||!a.includes(d)?t[d]=c:(r||(r={}))[d]=c:ao(e.emitsOptions,s)||(!(s in i)||c!==i[s])&&(i[s]=c,l=!0)}if(a){const s=pe(t),c=r||be;for(let d=0;d<a.length;d++){const u=a[d];t[u]=Uo(o,s,u,c[u],e,!ge(c,u))}}return l}function Uo(e,n,t,i,o,a){const l=e[t];if(l!=null){const r=ge(l,"default");if(r&&i===void 0){const s=l.default;if(l.type!==Function&&!l.skipFactory&&le(s)){const{propsDefaults:c}=o;if(t in c)i=c[t];else{const d=mi(o);i=c[t]=s.call(null,n),d()}}else i=s;o.ce&&o.ce._setProp(t,i)}l[0]&&(a&&!r?i=!1:l[1]&&(i===""||i===Xn(t))&&(i=!0))}return i}const Wd=new WeakMap;function os(e,n,t=!1){const i=t?Wd:n.propsCache,o=i.get(e);if(o)return o;const a=e.props,l={},r=[];let s=!1;if(!le(e)){const d=u=>{s=!0;const[p,m]=os(u,n,!0);De(l,p),m&&r.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!s)return Ee(e)&&i.set(e,wt),wt;if(ae(a))for(let d=0;d<a.length;d++){const u=en(a[d]);Qa(u)&&(l[u]=be)}else if(a)for(const d in a){const u=en(d);if(Qa(u)){const p=a[d],m=l[u]=ae(p)||le(p)?{type:p}:De({},p),y=m.type;let _=!1,k=!0;if(ae(y))for(let I=0;I<y.length;++I){const S=y[I],g=le(S)&&S.name;if(g==="Boolean"){_=!0;break}else g==="String"&&(k=!1)}else _=le(y)&&y.name==="Boolean";m[0]=_,m[1]=k,(_||ge(m,"default"))&&r.push(u)}}const c=[l,r];return Ee(e)&&i.set(e,c),c}function Qa(e){return e[0]!=="$"&&!kt(e)}const ca=e=>e==="_"||e==="_ctx"||e==="$stable",da=e=>ae(e)?e.map(cn):[cn(e)],Bd=(e,n,t)=>{if(n._n)return n;const i=xe((...o)=>da(n(...o)),t);return i._c=!1,i},as=(e,n,t)=>{const i=e._ctx;for(const o in e){if(ca(o))continue;const a=e[o];if(le(a))n[o]=Bd(o,a,i);else if(a!=null){const l=da(a);n[o]=()=>l}}},ls=(e,n)=>{const t=da(n);e.slots.default=()=>t},rs=(e,n,t)=>{for(const i in n)(t||!ca(i))&&(e[i]=n[i])},$d=(e,n,t)=>{const i=e.slots=ns();if(e.vnode.shapeFlag&32){const o=n._;o?(rs(i,n,t),t&&dr(i,"_",o,!0)):as(n,i)}else n&&ls(e,n)},qd=(e,n,t)=>{const{vnode:i,slots:o}=e;let a=!0,l=be;if(i.shapeFlag&32){const r=n._;r?t&&r===1?a=!1:rs(o,n,t):(a=!n.$stable,as(n,o)),l=n}else n&&(ls(e,n),l={default:1});if(a)for(const r in o)!ca(r)&&l[r]==null&&delete o[r]},an=gs;function Kd(e){return Yd(e,fd)}function Yd(e,n){const t=Zi();t.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:l,createText:r,createComment:s,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:m=wn,insertStaticContent:y}=e,_=(h,f,w,R=null,C=null,A=null,q=void 0,G=null,H=!!f.dynamicChildren)=>{if(h===f)return;h&&!at(h,f)&&(R=x(h),We(h,C,A,!0),h=null),f.patchFlag===-2&&(H=!1,f.dynamicChildren=null);const{type:M,ref:oe,shapeFlag:Q}=f;switch(M){case dt:k(h,f,w,R);break;case je:I(h,f,w,R);break;case $t:h==null&&S(f,w,R,q);break;case _e:L(h,f,w,R,C,A,q,G,H);break;default:Q&1?j(h,f,w,R,C,A,q,G,H):Q&6?D(h,f,w,R,C,A,q,G,H):(Q&64||Q&128)&&M.process(h,f,w,R,C,A,q,G,H,J)}oe!=null&&C?St(oe,h&&h.ref,A,f||h,!f):oe==null&&h&&h.ref!=null&&St(h.ref,null,A,h,!0)},k=(h,f,w,R)=>{if(h==null)i(f.el=r(f.children),w,R);else{const C=f.el=h.el;f.children!==h.children&&c(C,f.children)}},I=(h,f,w,R)=>{h==null?i(f.el=s(f.children||""),w,R):f.el=h.el},S=(h,f,w,R)=>{[h.el,h.anchor]=y(h.children,f,w,R,h.el,h.anchor)},g=({el:h,anchor:f},w,R)=>{let C;for(;h&&h!==f;)C=p(h),i(h,w,R),h=C;i(f,w,R)},b=({el:h,anchor:f})=>{let w;for(;h&&h!==f;)w=p(h),o(h),h=w;o(f)},j=(h,f,w,R,C,A,q,G,H)=>{f.type==="svg"?q="svg":f.type==="math"&&(q="mathml"),h==null?X(f,w,R,C,A,q,G,H):V(h,f,C,A,q,G,H)},X=(h,f,w,R,C,A,q,G)=>{let H,M;const{props:oe,shapeFlag:Q,transition:ne,dirs:re}=h;if(H=h.el=l(h.type,A,oe&&oe.is,oe),Q&8?d(H,h.children):Q&16&&E(h.children,H,null,R,C,Eo(h,A),q,G),re&&_n(h,null,R,"created"),P(H,h,h.scopeId,q,R),oe){for(const Le in oe)Le!=="value"&&!kt(Le)&&a(H,Le,null,oe[Le],A,R);"value"in oe&&a(H,"value",null,oe.value,A),(M=oe.onVnodeBeforeMount)&&sn(M,R,h)}re&&_n(h,null,R,"beforeMount");const he=ss(C,ne);he&&ne.beforeEnter(H),i(H,f,w),((M=oe&&oe.onVnodeMounted)||he||re)&&an(()=>{M&&sn(M,R,h),he&&ne.enter(H),re&&_n(h,null,R,"mounted")},C)},P=(h,f,w,R,C)=>{if(w&&m(h,w),R)for(let A=0;A<R.length;A++)m(h,R[A]);if(C){let A=C.subTree;if(f===A||ms(A.type)&&(A.ssContent===f||A.ssFallback===f)){const q=C.vnode;P(h,q,q.scopeId,q.slotScopeIds,C.parent)}}},E=(h,f,w,R,C,A,q,G,H=0)=>{for(let M=H;M<h.length;M++){const oe=h[M]=G?Bn(h[M]):cn(h[M]);_(null,oe,f,w,R,C,A,q,G)}},V=(h,f,w,R,C,A,q)=>{const G=f.el=h.el;let{patchFlag:H,dynamicChildren:M,dirs:oe}=f;H|=h.patchFlag&16;const Q=h.props||be,ne=f.props||be;let re;if(w&&Jn(w,!1),(re=ne.onVnodeBeforeUpdate)&&sn(re,w,f,h),oe&&_n(f,h,w,"beforeUpdate"),w&&Jn(w,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&d(G,""),M?z(h.dynamicChildren,M,G,w,R,Eo(f,C),A):q||B(h,f,G,null,w,R,Eo(f,C),A,!1),H>0){if(H&16)W(G,Q,ne,w,C);else if(H&2&&Q.class!==ne.class&&a(G,"class",null,ne.class,C),H&4&&a(G,"style",Q.style,ne.style,C),H&8){const he=f.dynamicProps;for(let Le=0;Le<he.length;Le++){const fe=he[Le],Je=Q[fe],Be=ne[fe];(Be!==Je||fe==="value")&&a(G,fe,Je,Be,C,w)}}H&1&&h.children!==f.children&&d(G,f.children)}else!q&&M==null&&W(G,Q,ne,w,C);((re=ne.onVnodeUpdated)||oe)&&an(()=>{re&&sn(re,w,f,h),oe&&_n(f,h,w,"updated")},R)},z=(h,f,w,R,C,A,q)=>{for(let G=0;G<f.length;G++){const H=h[G],M=f[G],oe=H.el&&(H.type===_e||!at(H,M)||H.shapeFlag&198)?u(H.el):w;_(H,M,oe,null,R,C,A,q,!0)}},W=(h,f,w,R,C)=>{if(f!==w){if(f!==be)for(const A in f)!kt(A)&&!(A in w)&&a(h,A,f[A],null,C,R);for(const A in w){if(kt(A))continue;const q=w[A],G=f[A];q!==G&&A!=="value"&&a(h,A,G,q,C,R)}"value"in w&&a(h,"value",f.value,w.value,C)}},L=(h,f,w,R,C,A,q,G,H)=>{const M=f.el=h?h.el:r(""),oe=f.anchor=h?h.anchor:r("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:re}=f;re&&(G=G?G.concat(re):re),h==null?(i(M,w,R),i(oe,w,R),E(f.children||[],w,oe,C,A,q,G,H)):Q>0&&Q&64&&ne&&h.dynamicChildren?(z(h.dynamicChildren,ne,w,C,A,q,G),(f.key!=null||C&&f===C.subTree)&&cs(h,f,!0)):B(h,f,w,oe,C,A,q,G,H)},D=(h,f,w,R,C,A,q,G,H)=>{f.slotScopeIds=G,h==null?f.shapeFlag&512?C.ctx.activate(f,w,R,q,H):F(f,w,R,C,A,q,H):N(h,f,H)},F=(h,f,w,R,C,A,q)=>{const G=h.component=hu(h,R,C);if(pi(h)&&(G.ctx.renderer=J),pu(G,!1,q),G.asyncDep){if(C&&C.registerDep(G,T,q),!h.el){const H=G.subTree=se(je);I(null,H,f,w),h.placeholder=H.el}}else T(G,h,f,w,C,A,q)},N=(h,f,w)=>{const R=f.component=h.component;if(au(h,f,w))if(R.asyncDep&&!R.asyncResolved){ee(R,f,w);return}else R.next=f,R.update();else f.el=h.el,R.vnode=f},T=(h,f,w,R,C,A,q)=>{const G=()=>{if(h.isMounted){let{next:Q,bu:ne,u:re,parent:he,vnode:Le}=h;{const tn=ds(h);if(tn){Q&&(Q.el=Le.el,ee(h,Q,q)),tn.asyncDep.then(()=>{h.isUnmounted||G()});return}}let fe=Q,Je;Jn(h,!1),Q?(Q.el=Le.el,ee(h,Q,q)):Q=Le,ne&&go(ne),(Je=Q.props&&Q.props.onVnodeBeforeUpdate)&&sn(Je,he,Q,Le),Jn(h,!0);const Be=So(h),hn=h.subTree;h.subTree=Be,_(hn,Be,u(hn.el),x(hn),h,C,A),Q.el=Be.el,fe===null&&ps(h,Be.el),re&&an(re,C),(Je=Q.props&&Q.props.onVnodeUpdated)&&an(()=>sn(Je,he,Q,Le),C)}else{let Q;const{el:ne,props:re}=f,{bm:he,m:Le,parent:fe,root:Je,type:Be}=h,hn=st(f);if(Jn(h,!1),he&&go(he),!hn&&(Q=re&&re.onVnodeBeforeMount)&&sn(Q,fe,f),Jn(h,!0),ne&&ye){const tn=()=>{h.subTree=So(h),ye(ne,h.subTree,h,C,null)};hn&&Be.__asyncHydrate?Be.__asyncHydrate(ne,h,tn):tn()}else{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Be);const tn=h.subTree=So(h);_(null,tn,w,R,h,C,A),f.el=tn.el}if(Le&&an(Le,C),!hn&&(Q=re&&re.onVnodeMounted)){const tn=f;an(()=>sn(Q,fe,tn),C)}(f.shapeFlag&256||fe&&st(fe.vnode)&&fe.vnode.shapeFlag&256)&&h.a&&an(h.a,C),h.isMounted=!0,f=w=R=null}};h.scope.on();const H=h.effect=new gr(G);h.scope.off();const M=h.update=H.run.bind(H),oe=h.job=H.runIfDirty.bind(H);oe.i=h,oe.id=h.uid,H.scheduler=()=>la(oe),Jn(h,!0),M()},ee=(h,f,w)=>{f.component=h;const R=h.vnode.props;h.vnode=f,h.next=null,Ud(h,f.props,R,w),qd(h,f.children,w),Pn(),Ha(h),Dn()},B=(h,f,w,R,C,A,q,G,H=!1)=>{const M=h&&h.children,oe=h?h.shapeFlag:0,Q=f.children,{patchFlag:ne,shapeFlag:re}=f;if(ne>0){if(ne&128){Ae(M,Q,w,R,C,A,q,G,H);return}else if(ne&256){de(M,Q,w,R,C,A,q,G,H);return}}re&8?(oe&16&&Xe(M,C,A),Q!==M&&d(w,Q)):oe&16?re&16?Ae(M,Q,w,R,C,A,q,G,H):Xe(M,C,A,!0):(oe&8&&d(w,""),re&16&&E(Q,w,R,C,A,q,G,H))},de=(h,f,w,R,C,A,q,G,H)=>{h=h||wt,f=f||wt;const M=h.length,oe=f.length,Q=Math.min(M,oe);let ne;for(ne=0;ne<Q;ne++){const re=f[ne]=H?Bn(f[ne]):cn(f[ne]);_(h[ne],re,w,null,C,A,q,G,H)}M>oe?Xe(h,C,A,!0,!1,Q):E(f,w,R,C,A,q,G,H,Q)},Ae=(h,f,w,R,C,A,q,G,H)=>{let M=0;const oe=f.length;let Q=h.length-1,ne=oe-1;for(;M<=Q&&M<=ne;){const re=h[M],he=f[M]=H?Bn(f[M]):cn(f[M]);if(at(re,he))_(re,he,w,null,C,A,q,G,H);else break;M++}for(;M<=Q&&M<=ne;){const re=h[Q],he=f[ne]=H?Bn(f[ne]):cn(f[ne]);if(at(re,he))_(re,he,w,null,C,A,q,G,H);else break;Q--,ne--}if(M>Q){if(M<=ne){const re=ne+1,he=re<oe?f[re].el:R;for(;M<=ne;)_(null,f[M]=H?Bn(f[M]):cn(f[M]),w,he,C,A,q,G,H),M++}}else if(M>ne)for(;M<=Q;)We(h[M],C,A,!0),M++;else{const re=M,he=M,Le=new Map;for(M=he;M<=ne;M++){const on=f[M]=H?Bn(f[M]):cn(f[M]);on.key!=null&&Le.set(on.key,M)}let fe,Je=0;const Be=ne-he+1;let hn=!1,tn=0;const Pt=new Array(Be);for(M=0;M<Be;M++)Pt[M]=0;for(M=re;M<=Q;M++){const on=h[M];if(Je>=Be){We(on,C,A,!0);continue}let yn;if(on.key!=null)yn=Le.get(on.key);else for(fe=he;fe<=ne;fe++)if(Pt[fe-he]===0&&at(on,f[fe])){yn=fe;break}yn===void 0?We(on,C,A,!0):(Pt[yn-he]=M+1,yn>=tn?tn=yn:hn=!0,_(on,f[yn],w,null,C,A,q,G,H),Je++)}const za=hn?Qd(Pt):wt;for(fe=za.length-1,M=Be-1;M>=0;M--){const on=he+M,yn=f[on],Pa=f[on+1],Da=on+1<oe?Pa.el||Pa.placeholder:R;Pt[M]===0?_(null,yn,w,Da,C,A,q,G,H):hn&&(fe<0||M!==za[fe]?Fe(yn,w,Da,2):fe--)}}},Fe=(h,f,w,R,C=null)=>{const{el:A,type:q,transition:G,children:H,shapeFlag:M}=h;if(M&6){Fe(h.component.subTree,f,w,R);return}if(M&128){h.suspense.move(f,w,R);return}if(M&64){q.move(h,f,w,J);return}if(q===_e){i(A,f,w);for(let Q=0;Q<H.length;Q++)Fe(H[Q],f,w,R);i(h.anchor,f,w);return}if(q===$t){g(h,f,w);return}if(R!==2&&M&1&&G)if(R===0)G.beforeEnter(A),i(A,f,w),an(()=>G.enter(A),C);else{const{leave:Q,delayLeave:ne,afterLeave:re}=G,he=()=>{h.ctx.isUnmounted?o(A):i(A,f,w)},Le=()=>{A._isLeaving&&A[Vn](!0),Q(A,()=>{he(),re&&re()})};ne?ne(A,he,Le):Le()}else i(A,f,w)},We=(h,f,w,R=!1,C=!1)=>{const{type:A,props:q,ref:G,children:H,dynamicChildren:M,shapeFlag:oe,patchFlag:Q,dirs:ne,cacheIndex:re}=h;if(Q===-2&&(C=!1),G!=null&&(Pn(),St(G,null,w,h,!0),Dn()),re!=null&&(f.renderCache[re]=void 0),oe&256){f.ctx.deactivate(h);return}const he=oe&1&&ne,Le=!st(h);let fe;if(Le&&(fe=q&&q.onVnodeBeforeUnmount)&&sn(fe,f,h),oe&6)vn(h.component,w,R);else{if(oe&128){h.suspense.unmount(w,R);return}he&&_n(h,null,f,"beforeUnmount"),oe&64?h.type.remove(h,f,w,J,R):M&&!M.hasOnce&&(A!==_e||Q>0&&Q&64)?Xe(M,f,w,!1,!0):(A===_e&&Q&384||!C&&oe&16)&&Xe(H,f,w),R&&Gn(h)}(Le&&(fe=q&&q.onVnodeUnmounted)||he)&&an(()=>{fe&&sn(fe,f,h),he&&_n(h,null,f,"unmounted")},w)},Gn=h=>{const{type:f,el:w,anchor:R,transition:C}=h;if(f===_e){Nn(w,R);return}if(f===$t){b(h);return}const A=()=>{o(w),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:q,delayLeave:G}=C,H=()=>q(w,A);G?G(h.el,A,H):H()}else A()},Nn=(h,f)=>{let w;for(;h!==f;)w=p(h),o(h),h=w;o(f)},vn=(h,f,w)=>{const{bum:R,scope:C,job:A,subTree:q,um:G,m:H,a:M}=h;Za(H),Za(M),R&&go(R),C.stop(),A&&(A.flags|=8,We(q,h,f,w)),G&&an(G,f),an(()=>{h.isUnmounted=!0},f)},Xe=(h,f,w,R=!1,C=!1,A=0)=>{for(let q=A;q<h.length;q++)We(h[q],f,w,R,C)},x=h=>{if(h.shapeFlag&6)return x(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const f=p(h.anchor||h.el),w=f&&f[dd];return w?p(w):f};let Y=!1;const $=(h,f,w)=>{h==null?f._vnode&&We(f._vnode,null,null,!0):_(f._vnode||null,h,f,null,null,null,w),f._vnode=h,Y||(Y=!0,Ha(),Ni(),Y=!1)},J={p:_,um:We,m:Fe,r:Gn,mt:F,mc:E,pc:B,pbc:z,n:x,o:e};let ue,ye;return n&&([ue,ye]=n(J)),{render:$,hydrate:ue,createApp:Gd($,ue)}}function Eo({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Jn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function ss(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function cs(e,n,t=!1){const i=e.children,o=n.children;if(ae(i)&&ae(o))for(let a=0;a<i.length;a++){const l=i[a];let r=o[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=o[a]=Bn(o[a]),r.el=l.el),!t&&r.patchFlag!==-2&&cs(l,r)),r.type===dt&&r.patchFlag!==-1&&(r.el=l.el),r.type===je&&!r.el&&(r.el=l.el)}}function Qd(e){const n=e.slice(),t=[0];let i,o,a,l,r;const s=e.length;for(i=0;i<s;i++){const c=e[i];if(c!==0){if(o=t[t.length-1],e[o]<c){n[i]=o,t.push(i);continue}for(a=0,l=t.length-1;a<l;)r=a+l>>1,e[t[r]]<c?a=r+1:l=r;c<e[t[a]]&&(a>0&&(n[i]=t[a-1]),t[a]=i)}}for(a=t.length,l=t[a-1];a-- >0;)t[a]=l,l=n[l];return t}function ds(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:ds(n)}function Za(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Zd=Symbol.for("v-scx"),Xd=()=>Ne(Zd);function Jd(e,n){return ua(e,null,n)}function Ke(e,n,t){return ua(e,n,t)}function ua(e,n,t=be){const{immediate:i,deep:o,flush:a,once:l}=t,r=De({},t),s=n&&i||!n&&a!=="post";let c;if(Tt){if(a==="sync"){const m=Xd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!s){const m=()=>{};return m.stop=wn,m.resume=wn,m.pause=wn,m}}const d=He;r.call=(m,y,_)=>mn(m,d,y,_);let u=!1;a==="post"?r.scheduler=m=>{an(m,d&&d.suspense)}:a!=="sync"&&(u=!0,r.scheduler=(m,y)=>{y?m():la(m)}),r.augmentJob=m=>{n&&(m.flags|=4),u&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const p=ld(e,n,r);return Tt&&(c?c.push(p):s&&p()),p}function eu(e,n,t){const i=this.proxy,o=Ve(e)?e.includes(".")?us(i,e):()=>i[e]:e.bind(i,i);let a;le(n)?a=n:(a=n.handler,t=n);const l=mi(this),r=ua(o,a.bind(i),t);return l(),r}function us(e,n){const t=n.split(".");return()=>{let i=e;for(let o=0;o<t.length&&i;o++)i=i[t[o]];return i}}const nu=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${en(n)}Modifiers`]||e[`${Xn(n)}Modifiers`];function tu(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||be;let o=t;const a=n.startsWith("update:"),l=a&&nu(i,n.slice(7));l&&(l.trim&&(o=t.map(d=>Ve(d)?d.trim():d)),l.number&&(o=t.map(wc)));let r,s=i[r=mo(n)]||i[r=mo(en(n))];!s&&a&&(s=i[r=mo(Xn(n))]),s&&mn(s,e,6,o);const c=i[r+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,mn(c,e,6,o)}}function hs(e,n,t=!1){const i=n.emitsCache,o=i.get(e);if(o!==void 0)return o;const a=e.emits;let l={},r=!1;if(!le(e)){const s=c=>{const d=hs(c,n,!0);d&&(r=!0,De(l,d))};!t&&n.mixins.length&&n.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!a&&!r?(Ee(e)&&i.set(e,null),null):(ae(a)?a.forEach(s=>l[s]=null):De(l,a),Ee(e)&&i.set(e,l),l)}function ao(e,n){return!e||!si(n)?!1:(n=n.slice(2).replace(/Once$/,""),ge(e,n[0].toLowerCase()+n.slice(1))||ge(e,Xn(n))||ge(e,n))}function So(e){const{type:n,vnode:t,proxy:i,withProxy:o,propsOptions:[a],slots:l,attrs:r,emit:s,render:c,renderCache:d,props:u,data:p,setupState:m,ctx:y,inheritAttrs:_}=e,k=Ui(e);let I,S;try{if(t.shapeFlag&4){const b=o||i,j=b;I=cn(c.call(j,b,d,u,m,p,y)),S=r}else{const b=n;I=cn(b.length>1?b(u,{attrs:r,slots:l,emit:s}):b(u,null)),S=n.props?r:iu(r)}}catch(b){qt.length=0,ui(b,e,1),I=se(je)}let g=I;if(S&&_!==!1){const b=Object.keys(S),{shapeFlag:j}=g;b.length&&j&7&&(a&&b.some(Xo)&&(S=ou(S,a)),g=Zn(g,S,!1,!0))}return t.dirs&&(g=Zn(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&ei(g,t.transition),I=g,Ui(k),I}const iu=e=>{let n;for(const t in e)(t==="class"||t==="style"||si(t))&&((n||(n={}))[t]=e[t]);return n},ou=(e,n)=>{const t={};for(const i in e)(!Xo(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function au(e,n,t){const{props:i,children:o,component:a}=e,{props:l,children:r,patchFlag:s}=n,c=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&s>=0){if(s&1024)return!0;if(s&16)return i?Xa(i,l,c):!!l;if(s&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(l[p]!==i[p]&&!ao(c,p))return!0}}}else return(o||r)&&(!r||!r.$stable)?!0:i===l?!1:i?l?Xa(i,l,c):!0:!!l;return!1}function Xa(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const a=i[o];if(n[a]!==e[a]&&!ao(t,a))return!0}return!1}function ps({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const ms=e=>e.__isSuspense;function gs(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):cd(e)}const _e=Symbol.for("v-fgt"),dt=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),qt=[];let ln=null;function U(e=!1){qt.push(ln=e?null:[])}function lu(){qt.pop(),ln=qt[qt.length-1]||null}let ni=1;function Ja(e,n=!1){ni+=e,e<0&&ln&&n&&(ln.hasOnce=!0)}function fs(e){return e.dynamicChildren=ni>0?ln||wt:null,lu(),ni>0&&ln&&ln.push(e),e}function te(e,n,t,i,o,a){return fs(ie(e,n,t,i,o,a,!0))}function Ce(e,n,t,i,o){return fs(se(e,n,t,i,o,!0))}function ti(e){return e?e.__v_isVNode===!0:!1}function at(e,n){return e.type===n.type&&e.key===n.key}const vs=({key:e})=>e??null,Oi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||Oe(e)||le(e)?{i:Ge,r:e,k:n,f:!!t}:e:null);function ie(e,n=null,t=null,i=0,o=null,a=e===_e?0:1,l=!1,r=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&vs(n),ref:n&&Oi(n),scopeId:Hr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ge};return r?(ha(s,t),a&128&&e.normalize(s)):t&&(s.shapeFlag|=Ve(t)?8:16),ni>0&&!l&&ln&&(s.patchFlag>0||a&6)&&s.patchFlag!==32&&ln.push(s),s}const se=ru;function ru(e,n=null,t=null,i=0,o=null,a=!1){if((!e||e===Ad)&&(e=je),ti(e)){const r=Zn(e,n,!0);return t&&ha(r,t),ni>0&&!a&&ln&&(r.shapeFlag&6?ln[ln.indexOf(e)]=r:ln.push(r)),r.patchFlag=-2,r}if(yu(e)&&(e=e.__vccOpts),n){n=zi(n);let{class:r,style:s}=n;r&&!Ve(r)&&(n.class=Ze(r)),Ee(s)&&(oa(s)&&!ae(s)&&(s=De({},s)),n.style=Ot(s))}const l=Ve(e)?1:ms(e)?128:Gr(e)?64:Ee(e)?4:le(e)?2:0;return ie(e,n,t,i,o,l,a,!0)}function zi(e){return e?oa(e)||ts(e)?De({},e):e:null}function Zn(e,n,t=!1,i=!1){const{props:o,ref:a,patchFlag:l,children:r,transition:s}=e,c=n?cu(o||{},n):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&vs(c),ref:n&&n.ref?t&&a?ae(a)?a.concat(Oi(n)):[a,Oi(n)]:Oi(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==_e?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:s,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zn(e.ssContent),ssFallback:e.ssFallback&&Zn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return s&&i&&ei(d,s.clone(d)),d}function Fn(e=" ",n=0){return se(dt,null,e,n)}function su(e,n){const t=se($t,null,e);return t.staticCount=n,t}function Re(e="",n=!1){return n?(U(),Ce(je,null,e)):se(je,null,e)}function cn(e){return e==null||typeof e=="boolean"?se(je):ae(e)?se(_e,null,e.slice()):ti(e)?Bn(e):se(dt,null,String(e))}function Bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zn(e)}function ha(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(ae(n))t=16;else if(typeof n=="object")if(i&65){const o=n.default;o&&(o._c&&(o._d=!1),ha(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!ts(n)?n._ctx=Ge:o===3&&Ge&&(Ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else le(n)?(n={default:n,_ctx:Ge},t=32):(n=String(n),i&64?(t=16,n=[Fn(n)]):t=8);e.children=n,e.shapeFlag|=t}function cu(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const o in i)if(o==="class")n.class!==i.class&&(n.class=Ze([n.class,i.class]));else if(o==="style")n.style=Ot([n.style,i.style]);else if(si(o)){const a=n[o],l=i[o];l&&a!==l&&!(ae(a)&&a.includes(l))&&(n[o]=a?[].concat(a,l):l)}else o!==""&&(n[o]=i[o])}return n}function sn(e,n,t,i=null){mn(e,n,7,[t,i])}const du=Xr();let uu=0;function hu(e,n,t){const i=e.type,o=(n?n.appContext:e.appContext)||du,a={uid:uu++,vnode:e,type:i,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:os(i,o),emitsOptions:hs(i,o),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=tu.bind(null,a),e.ce&&e.ce(a),a}let He=null;const Hn=()=>He||Ge;let $i,Wo;{const e=Zi(),n=(t,i)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(i),a=>{o.length>1?o.forEach(l=>l(a)):o[0](a)}};$i=n("__VUE_INSTANCE_SETTERS__",t=>He=t),Wo=n("__VUE_SSR_SETTERS__",t=>Tt=t)}const mi=e=>{const n=He;return $i(e),e.scope.on(),()=>{e.scope.off(),$i(n)}},el=()=>{He&&He.scope.off(),$i(null)};function ys(e){return e.vnode.shapeFlag&4}let Tt=!1;function pu(e,n=!1,t=!1){n&&Wo(n);const{props:i,children:o}=e.vnode,a=ys(e);Nd(e,i,a,n),$d(e,o,t||n);const l=a?mu(e,n):void 0;return n&&Wo(!1),l}function mu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zd);const{setup:i}=t;if(i){Pn();const o=e.setupContext=i.length>1?fu(e):null,a=mi(e),l=di(i,e,0,[e.props,o]),r=rr(l);if(Dn(),a(),(r||e.sp)&&!st(e)&&ra(e),r){if(l.then(el,el),n)return l.then(s=>{nl(e,s)}).catch(s=>{ui(s,e,0)});e.asyncDep=l}else nl(e,l)}else bs(e)}function nl(e,n,t){le(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ee(n)&&(e.setupState=Or(n)),bs(e)}function bs(e,n,t){const i=e.type;e.render||(e.render=i.render||wn);{const o=mi(e);Pn();try{Pd(e)}finally{Dn(),o()}}}const gu={get(e,n){return qe(e,"get",""),e[n]}};function fu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,gu),slots:e.slots,emit:e.emit,expose:n}}function lo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Or(Zc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Bt)return Bt[t](e)},has(n,t){return t in n||t in Bt}})):e.proxy}function vu(e,n=!0){return le(e)?e.displayName||e.name:e.name||n&&e.__name}function yu(e){return le(e)&&"__vccOpts"in e}const O=(e,n)=>od(e,n,Tt);function K(e,n,t){const i=arguments.length;return i===2?Ee(n)&&!ae(n)?ti(n)?se(e,null,[n]):se(e,n):se(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ti(t)&&(t=[t]),se(e,n,t))}const bu="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bo;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{Bo=tl.createPolicy("vue",{createHTML:e=>e})}catch{}const _s=Bo?e=>Bo.createHTML(e):e=>e,_u="http://www.w3.org/2000/svg",wu="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,il=Tn&&Tn.createElement("template"),Lu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const o=n==="svg"?Tn.createElementNS(_u,e):n==="mathml"?Tn.createElementNS(wu,e):t?Tn.createElement(e,{is:t}):Tn.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>Tn.createTextNode(e),createComment:e=>Tn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,o,a){const l=t?t.previousSibling:n.lastChild;if(o&&(o===a||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===a||!(o=o.nextSibling)););else{il.innerHTML=_s(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const r=il.content;if(i==="svg"||i==="mathml"){const s=r.firstChild;for(;s.firstChild;)r.appendChild(s.firstChild);r.removeChild(s)}n.insertBefore(r,t)}return[l?l.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Un="transition",Ft="animation",ii=Symbol("_vtc"),ws={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ku=De({},Nr,ws),Eu=e=>(e.displayName="Transition",e.props=ku,e),pa=Eu((e,{slots:n})=>K(pd,Su(e),n)),et=(e,n=[])=>{ae(e)?e.forEach(t=>t(...n)):e&&e(...n)},ol=e=>e?ae(e)?e.some(n=>n.length>1):e.length>1:!1;function Su(e){const n={};for(const L in e)L in ws||(n[L]=e[L]);if(e.css===!1)return n;const{name:t="v",type:i,duration:o,enterFromClass:a=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:r=`${t}-enter-to`,appearFromClass:s=a,appearActiveClass:c=l,appearToClass:d=r,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,y=Iu(o),_=y&&y[0],k=y&&y[1],{onBeforeEnter:I,onEnter:S,onEnterCancelled:g,onLeave:b,onLeaveCancelled:j,onBeforeAppear:X=I,onAppear:P=S,onAppearCancelled:E=g}=n,V=(L,D,F,N)=>{L._enterCancelled=N,nt(L,D?d:r),nt(L,D?c:l),F&&F()},z=(L,D)=>{L._isLeaving=!1,nt(L,u),nt(L,m),nt(L,p),D&&D()},W=L=>(D,F)=>{const N=L?P:S,T=()=>V(D,L,F);et(N,[D,T]),al(()=>{nt(D,L?s:a),Sn(D,L?d:r),ol(N)||ll(D,i,_,T)})};return De(n,{onBeforeEnter(L){et(I,[L]),Sn(L,a),Sn(L,l)},onBeforeAppear(L){et(X,[L]),Sn(L,s),Sn(L,c)},onEnter:W(!1),onAppear:W(!0),onLeave(L,D){L._isLeaving=!0;const F=()=>z(L,D);Sn(L,u),L._enterCancelled?(Sn(L,p),cl()):(cl(),Sn(L,p)),al(()=>{L._isLeaving&&(nt(L,u),Sn(L,m),ol(b)||ll(L,i,k,F))}),et(b,[L,F])},onEnterCancelled(L){V(L,!1,void 0,!0),et(g,[L])},onAppearCancelled(L){V(L,!0,void 0,!0),et(E,[L])},onLeaveCancelled(L){z(L),et(j,[L])}})}function Iu(e){if(e==null)return null;if(Ee(e))return[Io(e.enter),Io(e.leave)];{const n=Io(e);return[n,n]}}function Io(e){return Lc(e)}function Sn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ii]||(e[ii]=new Set)).add(n)}function nt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[ii];t&&(t.delete(n),t.size||(e[ii]=void 0))}function al(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cu=0;function ll(e,n,t,i){const o=e._endId=++Cu,a=()=>{o===e._endId&&i()};if(t!=null)return setTimeout(a,t);const{type:l,timeout:r,propCount:s}=xu(e,n);if(!l)return i();const c=l+"end";let d=0;const u=()=>{e.removeEventListener(c,p),a()},p=m=>{m.target===e&&++d>=s&&u()};setTimeout(()=>{d<s&&u()},r+1),e.addEventListener(c,p)}function xu(e,n){const t=window.getComputedStyle(e),i=y=>(t[y]||"").split(", "),o=i(`${Un}Delay`),a=i(`${Un}Duration`),l=rl(o,a),r=i(`${Ft}Delay`),s=i(`${Ft}Duration`),c=rl(r,s);let d=null,u=0,p=0;n===Un?l>0&&(d=Un,u=l,p=a.length):n===Ft?c>0&&(d=Ft,u=c,p=s.length):(u=Math.max(l,c),d=u>0?l>c?Un:Ft:null,p=d?d===Un?a.length:s.length:0);const m=d===Un&&/\b(transform|all)(,|$)/.test(i(`${Un}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:m}}function rl(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>sl(t)+sl(e[i])))}function sl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function cl(){return document.body.offsetHeight}function Tu(e,n,t){const i=e[ii];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const qi=Symbol("_vod"),Ls=Symbol("_vsh"),Ki={beforeMount(e,{value:n},{transition:t}){e[qi]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Mt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:i}){!n!=!t&&(i?n?(i.beforeEnter(e),Mt(e,!0),i.enter(e)):i.leave(e,()=>{Mt(e,!1)}):Mt(e,n))},beforeUnmount(e,{value:n}){Mt(e,n)}};function Mt(e,n){e.style.display=n?e[qi]:"none",e[Ls]=!n}const Vu=Symbol(""),Au=/(^|;)\s*display\s*:/;function Ru(e,n,t){const i=e.style,o=Ve(t);let a=!1;if(t&&!o){if(n)if(Ve(n))for(const l of n.split(";")){const r=l.slice(0,l.indexOf(":")).trim();t[r]==null&&Pi(i,r,"")}else for(const l in n)t[l]==null&&Pi(i,l,"");for(const l in t)l==="display"&&(a=!0),Pi(i,l,t[l])}else if(o){if(n!==t){const l=i[Vu];l&&(t+=";"+l),i.cssText=t,a=Au.test(t)}}else n&&e.removeAttribute("style");qi in e&&(e[qi]=a?i.display:"",e[Ls]&&(i.display="none"))}const dl=/\s*!important$/;function Pi(e,n,t){if(ae(t))t.forEach(i=>Pi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Ou(e,n);dl.test(t)?e.setProperty(Xn(i),t.replace(dl,""),"important"):e[i]=t}}const ul=["Webkit","Moz","ms"],Co={};function Ou(e,n){const t=Co[n];if(t)return t;let i=en(n);if(i!=="filter"&&i in e)return Co[n]=i;i=ci(i);for(let o=0;o<ul.length;o++){const a=ul[o]+i;if(a in e)return Co[n]=a}return n}const hl="http://www.w3.org/1999/xlink";function pl(e,n,t,i,o,a=xc(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(hl,n.slice(6,n.length)):e.setAttributeNS(hl,n,t):t==null||a&&!ur(t)?e.removeAttribute(n):e.setAttribute(n,a?"":Mn(t)?String(t):t)}function ml(e,n,t,i,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?_s(t):t);return}const a=e.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){const r=a==="OPTION"?e.getAttribute("value")||"":e.value,s=t==null?e.type==="checkbox"?"on":"":String(t);(r!==s||!("_value"in e))&&(e.value=s),t==null&&e.removeAttribute(n),e._value=t;return}let l=!1;if(t===""||t==null){const r=typeof e[n];r==="boolean"?t=ur(t):t==null&&r==="string"?(t="",l=!0):r==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(o||n)}function zu(e,n,t,i){e.addEventListener(n,t,i)}function Pu(e,n,t,i){e.removeEventListener(n,t,i)}const gl=Symbol("_vei");function Du(e,n,t,i,o=null){const a=e[gl]||(e[gl]={}),l=a[n];if(i&&l)l.value=i;else{const[r,s]=Fu(n);if(i){const c=a[n]=Hu(i,o);zu(e,r,c,s)}else l&&(Pu(e,r,l,s),a[n]=void 0)}}const fl=/(?:Once|Passive|Capture)$/;function Fu(e){let n;if(fl.test(e)){n={};let i;for(;i=e.match(fl);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xn(e.slice(2)),n]}let xo=0;const Mu=Promise.resolve(),ju=()=>xo||(Mu.then(()=>xo=0),xo=Date.now());function Hu(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;mn(Gu(i,t.value),n,5,[i])};return t.value=e,t.attached=ju(),t}function Gu(e,n){if(ae(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>o=>!o._stopped&&i&&i(o))}else return n}const vl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nu=(e,n,t,i,o,a)=>{const l=o==="svg";n==="class"?Tu(e,i,l):n==="style"?Ru(e,t,i):si(n)?Xo(n)||Du(e,n,t,i,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Uu(e,n,i,l))?(ml(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&pl(e,n,i,l,a,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Ve(i))?ml(e,en(n),i,a,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),pl(e,n,i,l))};function Uu(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&vl(n)&&le(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return vl(n)&&Ve(t)?!1:n in e}const Wu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bu=(e,n)=>{const t=e._withKeys||(e._withKeys={}),i=n.join(".");return t[i]||(t[i]=o=>{if(!("key"in o))return;const a=Xn(o.key);if(n.some(l=>l===a||Wu[l]===a))return e(o)})},$u=De({patchProp:Nu},Lu);let To,yl=!1;function qu(){return To=yl?To:Kd($u),yl=!0,To}const Ku=(...e)=>{const n=qu().createApp(...e),{mount:t}=n;return n.mount=i=>{const o=Qu(i);if(o)return t(o,!0,Yu(o))},n};function Yu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Qu(e){return Ve(e)?document.querySelector(e):e}var gi=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),Zu=/.md((\?|#).*)?$/,Xu=(e,n="/")=>gi(e)||e.startsWith("/")&&!e.startsWith(n)&&!Zu.test(e),fi=e=>/^(https?:)?\/\//.test(e),bl=e=>{if(!e||e.endsWith("/"))return e;let n=e.replace(/(^|\/)README.md$/i,"$1index.html");return n.endsWith(".md")?n=`${n.substring(0,n.length-3)}.html`:n.endsWith(".html")||(n=`${n}.html`),n.endsWith("/index.html")&&(n=n.substring(0,n.length-10)),n},Ju="http://.",eh=(e,n)=>{if(!e.startsWith("/")&&n){const t=n.slice(0,n.lastIndexOf("/"));return bl(new URL(`${t}/${e}`,Ju).pathname)}return bl(e)},nh=(e,n)=>{const t=Object.keys(e).sort((i,o)=>{const a=o.split("/").length-i.split("/").length;return a!==0?a:o.length-i.length});for(const i of t)if(n.startsWith(i))return i;return"/"},th=/(#|\?)/,ks=e=>{const[n,...t]=e.split(th);return{pathname:n,hashAndQueries:t.join("")}},ih=["link","meta","script","style","noscript","template"],oh=["title","base"],ah=([e,n,t])=>oh.includes(e)?e:ih.includes(e)?e==="meta"&&n.name?`${e}.${n.name}`:e==="template"&&n.id?`${e}.${n.id}`:JSON.stringify([e,Object.entries(n).map(([i,o])=>typeof o=="boolean"?o?[i,""]:null:[i,o]).filter(i=>i!=null).sort(([i],[o])=>i.localeCompare(o)),t]):null,lh=e=>{const n=new Set,t=[];return e.forEach(i=>{const o=ah(i);o&&!n.has(o)&&(n.add(o),t.push(i))}),t},rh=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,Es=e=>e.endsWith("/")?e.slice(0,-1):e,Ss=e=>e.startsWith("/")?e.slice(1):e,ma=e=>Object.prototype.toString.call(e)==="[object Object]",un=e=>typeof e=="string";const sh="modulepreload",ch=function(e){return"/"+e},_l={},v=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),r=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(t.map(s=>{if(s=ch(s),s in _l)return;_l[s]=!0;const c=s.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":sh,c||(u.as="script"),u.crossOrigin="",u.href=s,r&&u.setAttribute("nonce",r),document.head.appendChild(u),c)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return o.then(l=>{for(const r of l||[])r.status==="rejected"&&a(r.reason);return n().catch(a)})},dh=JSON.parse("{}"),uh=Object.fromEntries([["/",{loader:()=>v(()=>import("./index.html-CK83GLRF.js"),__vite__mapDeps([0,1])),meta:{title:"anyui-LIVE"}}],["/get-started.html",{loader:()=>v(()=>import("./get-started.html-mSnFJAXp.js"),[]),meta:{title:""}}],["/zh/",{loader:()=>v(()=>import("./index.html-Cxo3RXmm.js"),__vite__mapDeps([2,1])),meta:{title:"anyui-LIVE"}}],["/zh/get-started.html",{loader:()=>v(()=>import("./get-started.html-ByF0ecQf.js"),[]),meta:{title:""}}],["/docs/anyui/",{loader:()=>v(()=>import("./index.html-lh7iqqI_.js"),__vite__mapDeps([3,4,1])),meta:{title:"LVGL Master Designer"}}],["/docs/anyui/get-started.html",{loader:()=>v(()=>import("./get-started.html-DGOGgZr9.js"),__vite__mapDeps([5,6])),meta:{title:"Getting Started"}}],["/docs/anyui/guide/0_installation.html",{loader:()=>v(()=>import("./0_installation.html-D_JLZK5r.js"),[]),meta:{title:"Installation"}}],["/docs/anyui/guide/100_transplant.html",{loader:()=>v(()=>import("./100_transplant.html-CjRDJCtS.js"),[]),meta:{title:"Code Transplant"}}],["/docs/anyui/guide/10_image_fs.html",{loader:()=>v(()=>import("./10_image_fs.html-ei04_r-p.js"),[]),meta:{title:"Use External Image File as Source"}}],["/docs/anyui/guide/1_intro.html",{loader:()=>v(()=>import("./1_intro.html-BBekMjHn.js"),[]),meta:{title:"Introduction"}}],["/docs/anyui/guide/3_resource.html",{loader:()=>v(()=>import("./3_resource.html-DEL5nNhA.js"),__vite__mapDeps([7,8])),meta:{title:"Resource Management"}}],["/docs/anyui/guide/4_composite.html",{loader:()=>v(()=>import("./4_composite.html-CpDzoGM5.js"),__vite__mapDeps([9,10])),meta:{title:"Template Component"}}],["/docs/anyui/guide/5_hide_lock.html",{loader:()=>v(()=>import("./5_hide_lock.html-B41mMFU6.js"),__vite__mapDeps([11,12])),meta:{title:"Hide and Lock"}}],["/docs/anyui/guide/7_scr_mgmt.html",{loader:()=>v(()=>import("./7_scr_mgmt.html-ClRYMx3m.js"),__vite__mapDeps([13,14])),meta:{title:"Screen Management"}}],["/docs/anyui/guide/9_comm.html",{loader:()=>v(()=>import("./9_comm.html-d2IeWa2N.js"),[]),meta:{title:"Communication Commands and Events"}}],["/docs/anyui/guide/",{loader:()=>v(()=>import("./index.html-CdfNAGbX.js"),[]),meta:{title:"Documentation"}}],["/docs/anyui/guide/build_mode.html",{loader:()=>v(()=>import("./build_mode.html-CRTJSpBk.js"),[]),meta:{title:"Build Mode"}}],["/docs/anyui/guide/design.html",{loader:()=>v(()=>import("./design.html-3foKlK5f.js"),__vite__mapDeps([15,16])),meta:{title:"Design"}}],["/docs/anyui/guide/faq.html",{loader:()=>v(()=>import("./faq.html-BkmtTFGJ.js"),[]),meta:{title:"FAQ"}}],["/docs/anyui/guide/flag-and-state.html",{loader:()=>v(()=>import("./flag-and-state.html-DeKGTkcD.js"),__vite__mapDeps([17,18])),meta:{title:"Flag and State"}}],["/docs/anyui/guide/font.html",{loader:()=>v(()=>import("./font.html-DFKUQlwC.js"),__vite__mapDeps([19,20,21])),meta:{title:"Font"}}],["/docs/anyui/guide/globalcomponents.html",{loader:()=>v(()=>import("./globalcomponents.html-CK2eAvKx.js"),__vite__mapDeps([22,23])),meta:{title:"Global Components"}}],["/docs/anyui/release/release-latest.html",{loader:()=>v(()=>import("./release-latest.html-COxaWdM9.js"),[]),meta:{title:"Latest Release"}}],["/docs/anyui/release/release-v0.13.0.html",{loader:()=>v(()=>import("./release-v0.13.0.html-BCjBxbBH.js"),[]),meta:{title:"0.13.0"}}],["/docs/anyui/release/release-v0.13.1.html",{loader:()=>v(()=>import("./release-v0.13.1.html-CG_INzua.js"),[]),meta:{title:"0.13.1"}}],["/docs/anyui/release/release-v0.14.0.html",{loader:()=>v(()=>import("./release-v0.14.0.html-BczexC0m.js"),[]),meta:{title:"0.14.0"}}],["/docs/anyui/release/release-v0.15.0.html",{loader:()=>v(()=>import("./release-v0.15.0.html-BXS_lF7h.js"),__vite__mapDeps([24,25])),meta:{title:"0.15.0"}}],["/docs/anyui/release/release-v0.16.0.html",{loader:()=>v(()=>import("./release-v0.16.0.html-CDkKJ8gH.js"),[]),meta:{title:"0.16.0"}}],["/docs/anyui/release/release-v0.17.0.html",{loader:()=>v(()=>import("./release-v0.17.0.html-DHe4xFUH.js"),[]),meta:{title:"0.17.0"}}],["/docs/anyui/release/release-v0.17.1.html",{loader:()=>v(()=>import("./release-v0.17.1.html-DyUoM9R4.js"),[]),meta:{title:"0.17.1"}}],["/docs/anyui/release/release-v0.18.0.html",{loader:()=>v(()=>import("./release-v0.18.0.html-BMp5WB9C.js"),[]),meta:{title:"0.18.0"}}],["/docs/anyui/release/release-v0.20.0.html",{loader:()=>v(()=>import("./release-v0.20.0.html-BHLAqLAM.js"),[]),meta:{title:"0.20.0"}}],["/docs/anyui/release/release-v0.21.0.html",{loader:()=>v(()=>import("./release-v0.21.0.html-BLnlA5k3.js"),[]),meta:{title:"0.21.0"}}],["/docs/anyui/release/release-v0.22.0.html",{loader:()=>v(()=>import("./release-v0.22.0.html-D9Uq64yF.js"),[]),meta:{title:"0.22.0"}}],["/docs/anyui/release/release-v0.25.0.html",{loader:()=>v(()=>import("./release-v0.25.0.html-s0hbND0I.js"),[]),meta:{title:"0.25.0"}}],["/docs/anyui/release/release-v0.26.0.html",{loader:()=>v(()=>import("./release-v0.26.0.html-Cwvmrlq2.js"),[]),meta:{title:"0.26.0"}}],["/docs/anyui/release/release-v0.27.0.html",{loader:()=>v(()=>import("./release-v0.27.0.html-D5rOM3FX.js"),[]),meta:{title:"0.27.0"}}],["/docs/anyui/release/release-v0.28.0.html",{loader:()=>v(()=>import("./release-v0.28.0.html-N4QAUR_g.js"),[]),meta:{title:"0.28.0"}}],["/docs/anyui/release/release-v0.30.0.html",{loader:()=>v(()=>import("./release-v0.30.0.html-DFyDoXsk.js"),[]),meta:{title:"0.30.0"}}],["/docs/anyui/release/release-v0.32.0.html",{loader:()=>v(()=>import("./release-v0.32.0.html-Dbhg-iIq.js"),[]),meta:{title:"0.32.0"}}],["/docs/anyui/release/release-v0.33.0.html",{loader:()=>v(()=>import("./release-v0.33.0.html-B6C-6EPQ.js"),[]),meta:{title:"0.33.0"}}],["/docs/anyui/release/release-v0.33.1.html",{loader:()=>v(()=>import("./release-v0.33.1.html-C2LXsy4G.js"),[]),meta:{title:"0.33.1"}}],["/docs/anyui/release/release-v0.34.0.html",{loader:()=>v(()=>import("./release-v0.34.0.html-CNJVyISK.js"),[]),meta:{title:"0.34.0"}}],["/docs/anyui/release/release-v0.35.0.html",{loader:()=>v(()=>import("./release-v0.35.0.html-BGyk--fC.js"),[]),meta:{title:"0.35.0"}}],["/docs/anyui/release/release-v0.36.0.html",{loader:()=>v(()=>import("./release-v0.36.0.html-CwhTFsTu.js"),[]),meta:{title:"0.36.0"}}],["/docs/anyui/release/release-v0.37.0.html",{loader:()=>v(()=>import("./release-v0.37.0.html-S6z8l-L_.js"),__vite__mapDeps([26,27])),meta:{title:"0.37.0"}}],["/docs/anyui/release/release-v0.38.0.html",{loader:()=>v(()=>import("./release-v0.38.0.html-BoPLBrxL.js"),[]),meta:{title:"0.38.0"}}],["/docs/anyui/release/release-v0.39.0.html",{loader:()=>v(()=>import("./release-v0.39.0.html-mL6n_34p.js"),[]),meta:{title:"0.39.0"}}],["/docs/anyui/release/release-v0.40.0.html",{loader:()=>v(()=>import("./release-v0.40.0.html-WGPKih6e.js"),[]),meta:{title:"0.40.0"}}],["/docs/anyui/release/release-v0.40.1.html",{loader:()=>v(()=>import("./release-v0.40.1.html-D6y_Ff9G.js"),[]),meta:{title:"Latest Release"}}],["/docs/anyui-LIVE/guide/",{loader:()=>v(()=>import("./index.html-B5kJKqJA.js"),[]),meta:{title:"Guide"}}],["/docs/anyui-LIVE/guide/agent.html",{loader:()=>v(()=>import("./agent.html-lXpHndcZ.js"),__vite__mapDeps([28,29])),meta:{title:"Agent"}}],["/docs/anyui-LIVE/guide/faq.html",{loader:()=>v(()=>import("./faq.html-hx7phUXZ.js"),[]),meta:{title:"FAQ"}}],["/docs/anyui-LIVE/guide/get-started.html",{loader:()=>v(()=>import("./get-started.html-to34xEEU.js"),[]),meta:{title:"Get Started"}}],["/docs/anyui-LIVE/guide/introduction.html",{loader:()=>v(()=>import("./introduction.html-DFPkeM3m.js"),[]),meta:{title:"Introduction"}}],["/docs/anyui-LIVE/guide/workspace.html",{loader:()=>v(()=>import("./workspace.html-Ywh4ygpL.js"),[]),meta:{title:"Workspace"}}],["/zh/docs/anyui/",{loader:()=>v(()=>import("./index.html-DxrYY6j4.js"),__vite__mapDeps([30,4,1])),meta:{title:"LVGL设计大师"}}],["/zh/docs/anyui/get-started.html",{loader:()=>v(()=>import("./get-started.html-TmayCZXh.js"),__vite__mapDeps([31,6])),meta:{title:"快速开始"}}],["/docs/anyui/guide/advanced/layout.html",{loader:()=>v(()=>import("./layout.html-oitQHos_.js"),__vite__mapDeps([32,33])),meta:{title:"Layout"}}],["/docs/anyui/guide/animation/12_lottie.html",{loader:()=>v(()=>import("./12_lottie.html-DyXkJokW.js"),[]),meta:{title:"Lottie Animation"}}],["/docs/anyui/guide/animation/gif.html",{loader:()=>v(()=>import("./gif.html-CZHrDcq8.js"),[]),meta:{title:"GIF Animated Image"}}],["/docs/anyui/guide/animation/screen_animation.html",{loader:()=>v(()=>import("./screen_animation.html-CZbVOQwQ.js"),__vite__mapDeps([34,35])),meta:{title:"Screen Load Animation"}}],["/docs/anyui/guide/animation/widget_animation.html",{loader:()=>v(()=>import("./widget_animation.html-Dpk70G54.js"),__vite__mapDeps([36,37])),meta:{title:"Widget Animation"}}],["/docs/anyui/guide/hoc/0_intro.html",{loader:()=>v(()=>import("./0_intro.html-BxIsp1TX.js"),__vite__mapDeps([38,39])),meta:{title:"Introduction"}}],["/docs/anyui/guide/hoc/1_statebtn.html",{loader:()=>v(()=>import("./1_statebtn.html-DG8k0uQy.js"),__vite__mapDeps([40,41])),meta:{title:"State Button"}}],["/docs/anyui/guide/hoc/2_labelslider.html",{loader:()=>v(()=>import("./2_labelslider.html-CsalsLJ0.js"),__vite__mapDeps([42,43])),meta:{title:"Label Slider"}}],["/docs/anyui/guide/hoc/3_valueslider.html",{loader:()=>v(()=>import("./3_valueslider.html-P4yBV2Dr.js"),[]),meta:{title:"Value Slider"}}],["/docs/anyui/guide/hoc/4_checkgroup.html",{loader:()=>v(()=>import("./4_checkgroup.html-eMmd4c-o.js"),[]),meta:{title:"Check Group & Radio Group"}}],["/docs/anyui/guide/hoc/5_drawer.html",{loader:()=>v(()=>import("./5_drawer.html-CrVNvYKs.js"),[]),meta:{title:"Drawer"}}],["/docs/anyui/guide/hoc/6_statusbar.html",{loader:()=>v(()=>import("./6_statusbar.html-ChbFWMBX.js"),[]),meta:{title:"StatusBar"}}],["/docs/anyui/guide/hoc/7_navigatebar.html",{loader:()=>v(()=>import("./7_navigatebar.html-CKhHlBvc.js"),[]),meta:{title:"NavigateBar"}}],["/docs/anyui/guide/hoc/",{loader:()=>v(()=>import("./index.html--NcrqcvE.js"),[]),meta:{title:"Higher Order Components"}}],["/docs/anyui-LIVE/guide/Subject/codegen.html",{loader:()=>v(()=>import("./codegen.html-DVKiNt46.js"),[]),meta:{title:"Codegen"}}],["/docs/anyui-LIVE/guide/Subject/dynamic-display-size.html",{loader:()=>v(()=>import("./dynamic-display-size.html-DL1E5caa.js"),[]),meta:{title:"Dynamic Display Size Change"}}],["/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.html",{loader:()=>v(()=>import("./dynamic-lvgl-version.html-D442-Wqh.js"),[]),meta:{title:"Dynamic LVGL version"}}],["/docs/anyui-LIVE/guide/Subject/font-library.html",{loader:()=>v(()=>import("./font-library.html-RQvSFxAe.js"),__vite__mapDeps([44,21])),meta:{title:"Font Library"}}],["/docs/anyui-LIVE/guide/Subject/image.html",{loader:()=>v(()=>import("./image.html-eCyXVd2n.js"),[]),meta:{title:"Image"}}],["/docs/anyui-LIVE/guide/Subject/layout.html",{loader:()=>v(()=>import("./layout.html-CXyBDINW.js"),[]),meta:{title:"Layout"}}],["/docs/anyui-LIVE/guide/Subject/override-screen-size.html",{loader:()=>v(()=>import("./override-screen-size.html-0vMgKSyf.js"),[]),meta:{title:"Override screen size"}}],["/docs/anyui-LIVE/guide/Subject/simulator.html",{loader:()=>v(()=>import("./simulator.html-l5rZLrLv.js"),[]),meta:{title:"Simulator"}}],["/docs/anyui-LIVE/guide/Subject/transplant.html",{loader:()=>v(()=>import("./transplant.html-By736F2j.js"),[]),meta:{title:"Transplant"}}],["/docs/anyui-LIVE/guide/editor/Inspector.html",{loader:()=>v(()=>import("./Inspector.html-DykkJAJ2.js"),[]),meta:{title:"Inspector"}}],["/docs/anyui-LIVE/guide/editor/Navigator.html",{loader:()=>v(()=>import("./Navigator.html-D0VDv1n5.js"),[]),meta:{title:"Navigator"}}],["/docs/anyui-LIVE/guide/editor/Overview.html",{loader:()=>v(()=>import("./Overview.html-Dbf2m_W4.js"),[]),meta:{title:"Overview"}}],["/docs/anyui-LIVE/guide/editor/Resource.html",{loader:()=>v(()=>import("./Resource.html-BcziKHSF.js"),[]),meta:{title:"Resource management"}}],["/docs/anyui-LIVE/guide/editor/Settings.html",{loader:()=>v(()=>import("./Settings.html-4UBDPWED.js"),[]),meta:{title:"Settings"}}],["/docs/anyui-LIVE/guide/editor/Statusbar.html",{loader:()=>v(()=>import("./Statusbar.html-gzKMd3GQ.js"),[]),meta:{title:"Statusbar"}}],["/docs/anyui-LIVE/guide/editor/Toolbar.html",{loader:()=>v(()=>import("./Toolbar.html-BwMIe7T9.js"),[]),meta:{title:"Toolbar"}}],["/docs/anyui-LIVE/guide/editor/canvas.html",{loader:()=>v(()=>import("./canvas.html-Bu6svUvr.js"),[]),meta:{title:"Canvas"}}],["/docs/anyui-LIVE/guide/editor/preview.html",{loader:()=>v(()=>import("./preview.html-C3Uiqviy.js"),[]),meta:{title:"Preview"}}],["/zh/docs/anyui/guide/0_installation.html",{loader:()=>v(()=>import("./0_installation.html-Cn-7G3PX.js"),[]),meta:{title:"安装"}}],["/zh/docs/anyui/guide/100_transplant.html",{loader:()=>v(()=>import("./100_transplant.html-Dw0PRWuz.js"),[]),meta:{title:"代码移植"}}],["/zh/docs/anyui/guide/10_image_fs.html",{loader:()=>v(()=>import("./10_image_fs.html-BEK3JPqR.js"),[]),meta:{title:"使用外部图像文件作为源"}}],["/zh/docs/anyui/guide/1_intro.html",{loader:()=>v(()=>import("./1_intro.html-D4QqHs3X.js"),[]),meta:{title:"介绍"}}],["/zh/docs/anyui/guide/3_resource.html",{loader:()=>v(()=>import("./3_resource.html-BVqzDYRS.js"),__vite__mapDeps([45,8])),meta:{title:"资源管理"}}],["/zh/docs/anyui/guide/4_composite.html",{loader:()=>v(()=>import("./4_composite.html-DFEwkpJE.js"),__vite__mapDeps([46,10])),meta:{title:"模板组件"}}],["/zh/docs/anyui/guide/5_hide_lock.html",{loader:()=>v(()=>import("./5_hide_lock.html-kLmBEXne.js"),__vite__mapDeps([47,12])),meta:{title:"隐藏和锁定"}}],["/zh/docs/anyui/guide/7_scr_mgmt.html",{loader:()=>v(()=>import("./7_scr_mgmt.html-CQbwiMLd.js"),__vite__mapDeps([48,14])),meta:{title:"屏幕管理"}}],["/zh/docs/anyui/guide/9_comm.html",{loader:()=>v(()=>import("./9_comm.html-BUPifbXT.js"),[]),meta:{title:"通信命令和事件"}}],["/zh/docs/anyui/guide/",{loader:()=>v(()=>import("./index.html-D8NgRX92.js"),[]),meta:{title:"文档"}}],["/zh/docs/anyui/guide/build_mode.html",{loader:()=>v(()=>import("./build_mode.html-Cd6rgpAs.js"),[]),meta:{title:"构建模式"}}],["/zh/docs/anyui/guide/design.html",{loader:()=>v(()=>import("./design.html-DDKWhpJM.js"),__vite__mapDeps([49,16])),meta:{title:"设计"}}],["/zh/docs/anyui/guide/faq.html",{loader:()=>v(()=>import("./faq.html-Bk2f5JyP.js"),[]),meta:{title:"常见问题"}}],["/zh/docs/anyui/guide/flag-and-state.html",{loader:()=>v(()=>import("./flag-and-state.html-CR2dwrJa.js"),__vite__mapDeps([50,18])),meta:{title:"标志与状态"}}],["/zh/docs/anyui/guide/font.html",{loader:()=>v(()=>import("./font.html-Bg8Y7LjH.js"),__vite__mapDeps([51,20,21])),meta:{title:"字体"}}],["/zh/docs/anyui/guide/globalcomponents.html",{loader:()=>v(()=>import("./globalcomponents.html-DkFhhOxV.js"),__vite__mapDeps([52,23])),meta:{title:"全局组件"}}],["/zh/docs/anyui/release/release-latest.html",{loader:()=>v(()=>import("./release-latest.html-RkWReR3E.js"),[]),meta:{title:"最新发布"}}],["/zh/docs/anyui/release/release-v0.13.0.html",{loader:()=>v(()=>import("./release-v0.13.0.html-1QDM5lsA.js"),[]),meta:{title:"0.13.0"}}],["/zh/docs/anyui/release/release-v0.13.1.html",{loader:()=>v(()=>import("./release-v0.13.1.html-NjfZVNGY.js"),[]),meta:{title:"0.13.1"}}],["/zh/docs/anyui/release/release-v0.14.0.html",{loader:()=>v(()=>import("./release-v0.14.0.html-dFrWIR1G.js"),[]),meta:{title:"0.14.0"}}],["/zh/docs/anyui/release/release-v0.15.0.html",{loader:()=>v(()=>import("./release-v0.15.0.html-BK-HouXX.js"),__vite__mapDeps([53,25])),meta:{title:"0.15.0"}}],["/zh/docs/anyui/release/release-v0.16.0.html",{loader:()=>v(()=>import("./release-v0.16.0.html-D0_PiHUk.js"),[]),meta:{title:"0.16.0"}}],["/zh/docs/anyui/release/release-v0.17.0.html",{loader:()=>v(()=>import("./release-v0.17.0.html-B9FO_4Qs.js"),[]),meta:{title:"0.17.0"}}],["/zh/docs/anyui/release/release-v0.17.1.html",{loader:()=>v(()=>import("./release-v0.17.1.html-CWVlNoVH.js"),[]),meta:{title:"0.17.1"}}],["/zh/docs/anyui/release/release-v0.18.0.html",{loader:()=>v(()=>import("./release-v0.18.0.html-Cy91tvYW.js"),[]),meta:{title:"0.18.0"}}],["/zh/docs/anyui/release/release-v0.20.0.html",{loader:()=>v(()=>import("./release-v0.20.0.html-DCCcmXFs.js"),[]),meta:{title:"0.20.0"}}],["/zh/docs/anyui/release/release-v0.21.0.html",{loader:()=>v(()=>import("./release-v0.21.0.html-DEiCyrr1.js"),[]),meta:{title:"0.21.0"}}],["/zh/docs/anyui/release/release-v0.22.0.html",{loader:()=>v(()=>import("./release-v0.22.0.html-BuVNbp2h.js"),[]),meta:{title:"0.22.0"}}],["/zh/docs/anyui/release/release-v0.25.0.html",{loader:()=>v(()=>import("./release-v0.25.0.html-DapC3PSt.js"),[]),meta:{title:"0.25.0"}}],["/zh/docs/anyui/release/release-v0.26.0.html",{loader:()=>v(()=>import("./release-v0.26.0.html-Bl-olhdZ.js"),[]),meta:{title:"0.26.0"}}],["/zh/docs/anyui/release/release-v0.27.0.html",{loader:()=>v(()=>import("./release-v0.27.0.html-C5UUeco5.js"),[]),meta:{title:"0.27.0"}}],["/zh/docs/anyui/release/release-v0.28.0.html",{loader:()=>v(()=>import("./release-v0.28.0.html-Bg_c8Vqe.js"),[]),meta:{title:"0.28.0"}}],["/zh/docs/anyui/release/release-v0.30.0.html",{loader:()=>v(()=>import("./release-v0.30.0.html-DCbyONTo.js"),[]),meta:{title:"0.30.0"}}],["/zh/docs/anyui/release/release-v0.32.0.html",{loader:()=>v(()=>import("./release-v0.32.0.html-CbYsAi0f.js"),[]),meta:{title:"0.32.0"}}],["/zh/docs/anyui/release/release-v0.33.0.html",{loader:()=>v(()=>import("./release-v0.33.0.html-CXOByP1e.js"),[]),meta:{title:"0.33.0"}}],["/zh/docs/anyui/release/release-v0.33.1.html",{loader:()=>v(()=>import("./release-v0.33.1.html-CPAqApFU.js"),[]),meta:{title:"0.33.1"}}],["/zh/docs/anyui/release/release-v0.34.0.html",{loader:()=>v(()=>import("./release-v0.34.0.html-CsVUQ156.js"),[]),meta:{title:"0.34.0"}}],["/zh/docs/anyui/release/release-v0.35.0.html",{loader:()=>v(()=>import("./release-v0.35.0.html-Cynqg6-z.js"),[]),meta:{title:"0.35.0"}}],["/zh/docs/anyui/release/release-v0.36.0.html",{loader:()=>v(()=>import("./release-v0.36.0.html-DbdFLYCW.js"),[]),meta:{title:"0.36.0"}}],["/zh/docs/anyui/release/release-v0.37.0.html",{loader:()=>v(()=>import("./release-v0.37.0.html-B6DPzhmk.js"),__vite__mapDeps([54,27])),meta:{title:"0.37.0"}}],["/zh/docs/anyui/release/release-v0.38.0.html",{loader:()=>v(()=>import("./release-v0.38.0.html-Cq6PDikQ.js"),[]),meta:{title:"0.38.0"}}],["/zh/docs/anyui/release/release-v0.39.0.html",{loader:()=>v(()=>import("./release-v0.39.0.html-CNHuIqTP.js"),[]),meta:{title:"0.39.0"}}],["/zh/docs/anyui/release/release-v0.40.0.html",{loader:()=>v(()=>import("./release-v0.40.0.html-C8KDYNrD.js"),[]),meta:{title:"0.40.0"}}],["/zh/docs/anyui/release/release-v0.40.1.html",{loader:()=>v(()=>import("./release-v0.40.1.html-gX60rnC6.js"),[]),meta:{title:"最新发布"}}],["/zh/docs/anyui-LIVE/guide/",{loader:()=>v(()=>import("./index.html-ic0Jgpm0.js"),[]),meta:{title:"指南"}}],["/zh/docs/anyui-LIVE/guide/agent.html",{loader:()=>v(()=>import("./agent.html-61sU--ts.js"),__vite__mapDeps([55,29])),meta:{title:"智能体"}}],["/zh/docs/anyui-LIVE/guide/faq.html",{loader:()=>v(()=>import("./faq.html-DgL4kLim.js"),[]),meta:{title:"常见问题"}}],["/zh/docs/anyui-LIVE/guide/get-started.html",{loader:()=>v(()=>import("./get-started.html-DmgLcPsA.js"),[]),meta:{title:"快速开始"}}],["/zh/docs/anyui-LIVE/guide/introduction.html",{loader:()=>v(()=>import("./introduction.html-q2iAnRcq.js"),[]),meta:{title:"介绍"}}],["/zh/docs/anyui-LIVE/guide/workspace.html",{loader:()=>v(()=>import("./workspace.html-zq27PSYj.js"),[]),meta:{title:"工作区"}}],["/zh/docs/anyui/guide/advanced/layout.html",{loader:()=>v(()=>import("./layout.html-hpdCa3MN.js"),__vite__mapDeps([56,33])),meta:{title:"布局"}}],["/zh/docs/anyui/guide/hoc/0_intro.html",{loader:()=>v(()=>import("./0_intro.html-ByXZg8Ad.js"),__vite__mapDeps([57,39])),meta:{title:"介绍"}}],["/zh/docs/anyui/guide/hoc/1_statebtn.html",{loader:()=>v(()=>import("./1_statebtn.html-CuVm6wNS.js"),__vite__mapDeps([58,41])),meta:{title:"状态按钮"}}],["/zh/docs/anyui/guide/hoc/2_labelslider.html",{loader:()=>v(()=>import("./2_labelslider.html-7CiCoBLq.js"),__vite__mapDeps([59,43])),meta:{title:"标签滑块"}}],["/zh/docs/anyui/guide/hoc/3_valueslider.html",{loader:()=>v(()=>import("./3_valueslider.html-98ZBblne.js"),[]),meta:{title:"数值滑块"}}],["/zh/docs/anyui/guide/hoc/4_checkgroup.html",{loader:()=>v(()=>import("./4_checkgroup.html-DEX1ND0i.js"),[]),meta:{title:"复选框组和单选框组"}}],["/zh/docs/anyui/guide/hoc/5_drawer.html",{loader:()=>v(()=>import("./5_drawer.html-DItOaUFX.js"),[]),meta:{title:"抽屉"}}],["/zh/docs/anyui/guide/hoc/6_statusbar.html",{loader:()=>v(()=>import("./6_statusbar.html-Cg6cQca6.js"),[]),meta:{title:"状态栏"}}],["/zh/docs/anyui/guide/hoc/7_navigatebar.html",{loader:()=>v(()=>import("./7_navigatebar.html-Ba4N57EG.js"),[]),meta:{title:"导航栏"}}],["/zh/docs/anyui/guide/hoc/",{loader:()=>v(()=>import("./index.html-B3CO7OHa.js"),[]),meta:{title:"高阶组件"}}],["/zh/docs/anyui/guide/animation/12_lottie.html",{loader:()=>v(()=>import("./12_lottie.html-D0LvRq_W.js"),[]),meta:{title:"Lottie动画"}}],["/zh/docs/anyui/guide/animation/gif.html",{loader:()=>v(()=>import("./gif.html-CAN4JISa.js"),[]),meta:{title:"GIF动画图像"}}],["/zh/docs/anyui/guide/animation/screen_animation.html",{loader:()=>v(()=>import("./screen_animation.html-CE95zAs2.js"),__vite__mapDeps([60,35])),meta:{title:"屏幕加载动画"}}],["/zh/docs/anyui/guide/animation/widget_animation.html",{loader:()=>v(()=>import("./widget_animation.html-LNiOk5W1.js"),__vite__mapDeps([61,37])),meta:{title:"组件动画"}}],["/zh/docs/anyui-LIVE/guide/Subject/codegen.html",{loader:()=>v(()=>import("./codegen.html-b5zDganc.js"),[]),meta:{title:"代码生成"}}],["/zh/docs/anyui-LIVE/guide/Subject/dynamic-display-size.html",{loader:()=>v(()=>import("./dynamic-display-size.html-aVYcZf9L.js"),[]),meta:{title:"动态显示尺寸变更"}}],["/zh/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.html",{loader:()=>v(()=>import("./dynamic-lvgl-version.html-Cpk4ilys.js"),[]),meta:{title:"动态 LVGL 版本"}}],["/zh/docs/anyui-LIVE/guide/Subject/font-library.html",{loader:()=>v(()=>import("./font-library.html-B2RkIk8o.js"),__vite__mapDeps([62,21])),meta:{title:"字体库"}}],["/zh/docs/anyui-LIVE/guide/Subject/image.html",{loader:()=>v(()=>import("./image.html-JjTV0bdF.js"),[]),meta:{title:"图片"}}],["/zh/docs/anyui-LIVE/guide/Subject/layout.html",{loader:()=>v(()=>import("./layout.html-ByTbIef2.js"),[]),meta:{title:"布局"}}],["/zh/docs/anyui-LIVE/guide/Subject/override-screen-size.html",{loader:()=>v(()=>import("./override-screen-size.html-HroGsPuS.js"),[]),meta:{title:"覆盖屏幕尺寸"}}],["/zh/docs/anyui-LIVE/guide/Subject/simulator.html",{loader:()=>v(()=>import("./simulator.html-v9QE1V9c.js"),[]),meta:{title:"模拟器"}}],["/zh/docs/anyui-LIVE/guide/Subject/transplant.html",{loader:()=>v(()=>import("./transplant.html-BSEJmZpe.js"),[]),meta:{title:"移植"}}],["/zh/docs/anyui-LIVE/guide/editor/Inspector.html",{loader:()=>v(()=>import("./Inspector.html-Bc6kM90o.js"),[]),meta:{title:"检查器"}}],["/zh/docs/anyui-LIVE/guide/editor/Navigator.html",{loader:()=>v(()=>import("./Navigator.html-C21hhQ8x.js"),[]),meta:{title:"导航器"}}],["/zh/docs/anyui-LIVE/guide/editor/Overview.html",{loader:()=>v(()=>import("./Overview.html-BC0pubhg.js"),[]),meta:{title:"概览"}}],["/zh/docs/anyui-LIVE/guide/editor/Resource.html",{loader:()=>v(()=>import("./Resource.html-BNAUckX6.js"),[]),meta:{title:"资源管理"}}],["/zh/docs/anyui-LIVE/guide/editor/Settings.html",{loader:()=>v(()=>import("./Settings.html-D8Ov_f69.js"),[]),meta:{title:"设置"}}],["/zh/docs/anyui-LIVE/guide/editor/Statusbar.html",{loader:()=>v(()=>import("./Statusbar.html-BtvOAS5a.js"),[]),meta:{title:"状态栏"}}],["/zh/docs/anyui-LIVE/guide/editor/Toolbar.html",{loader:()=>v(()=>import("./Toolbar.html-DbC6I8z7.js"),[]),meta:{title:"工具栏"}}],["/zh/docs/anyui-LIVE/guide/editor/canvas.html",{loader:()=>v(()=>import("./canvas.html-CPS6Jcxj.js"),[]),meta:{title:"画布"}}],["/zh/docs/anyui-LIVE/guide/editor/preview.html",{loader:()=>v(()=>import("./preview.html-5HMs5OVw.js"),[]),meta:{title:"预览"}}],["/404.html",{loader:()=>v(()=>import("./404.html-DJrCBCf0.js"),[]),meta:{title:""}}]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const bt=typeof document<"u";function Is(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Is(e.default)}const me=Object.assign;function Vo(e,n){const t={};for(const i in n){const o=n[i];t[i]=gn(o)?o.map(e):e(o)}return t}const Kt=()=>{},gn=Array.isArray,Cs=/#/g,ph=/&/g,mh=/\//g,gh=/=/g,fh=/\?/g,xs=/\+/g,vh=/%5B/g,yh=/%5D/g,Ts=/%5E/g,bh=/%60/g,Vs=/%7B/g,_h=/%7C/g,As=/%7D/g,wh=/%20/g;function ga(e){return encodeURI(""+e).replace(_h,"|").replace(vh,"[").replace(yh,"]")}function Lh(e){return ga(e).replace(Vs,"{").replace(As,"}").replace(Ts,"^")}function $o(e){return ga(e).replace(xs,"%2B").replace(wh,"+").replace(Cs,"%23").replace(ph,"%26").replace(bh,"`").replace(Vs,"{").replace(As,"}").replace(Ts,"^")}function kh(e){return $o(e).replace(gh,"%3D")}function Eh(e){return ga(e).replace(Cs,"%23").replace(fh,"%3F")}function Sh(e){return e==null?"":Eh(e).replace(mh,"%2F")}function oi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ih=/\/$/,Ch=e=>e.replace(Ih,"");function Ao(e,n,t="/"){let i,o={},a="",l="";const r=n.indexOf("#");let s=n.indexOf("?");return r<s&&r>=0&&(s=-1),s>-1&&(i=n.slice(0,s),a=n.slice(s+1,r>-1?r:n.length),o=e(a)),r>-1&&(i=i||n.slice(0,r),l=n.slice(r,n.length)),i=Ah(i??n,t),{fullPath:i+(a&&"?")+a+l,path:i,query:o,hash:oi(l)}}function xh(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function wl(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Th(e,n,t){const i=n.matched.length-1,o=t.matched.length-1;return i>-1&&i===o&&Vt(n.matched[i],t.matched[o])&&Rs(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Vt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Rs(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Vh(e[t],n[t]))return!1;return!0}function Vh(e,n){return gn(e)?Ll(e,n):gn(n)?Ll(n,e):e===n}function Ll(e,n){return gn(n)?e.length===n.length&&e.every((t,i)=>t===n[i]):e.length===1&&e[0]===n}function Ah(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let a=t.length-1,l,r;for(l=0;l<i.length;l++)if(r=i[l],r!==".")if(r==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+i.slice(l).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ai;(function(e){e.pop="pop",e.push="push"})(ai||(ai={}));var Yt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yt||(Yt={}));function Rh(e){if(!e)if(bt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ch(e)}const Oh=/^[^#]+#/;function zh(e,n){return e.replace(Oh,"#")+n}function Ph(e,n){const t=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:n.behavior,left:i.left-t.left-(n.left||0),top:i.top-t.top-(n.top||0)}}const ro=()=>({left:window.scrollX,top:window.scrollY});function Dh(e){let n;if("el"in e){const t=e.el,i=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=Ph(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function kl(e,n){return(history.state?history.state.position-n:-1)+e}const qo=new Map;function Fh(e,n){qo.set(e,n)}function Mh(e){const n=qo.get(e);return qo.delete(e),n}let jh=()=>location.protocol+"//"+location.host;function Os(e,n){const{pathname:t,search:i,hash:o}=n,a=e.indexOf("#");if(a>-1){let r=o.includes(e.slice(a))?e.slice(a).length:1,s=o.slice(r);return s[0]!=="/"&&(s="/"+s),wl(s,"")}return wl(t,e)+i+o}function Hh(e,n,t,i){let o=[],a=[],l=null;const r=({state:p})=>{const m=Os(e,location),y=t.value,_=n.value;let k=0;if(p){if(t.value=m,n.value=p,l&&l===y){l=null;return}k=_?p.position-_.position:0}else i(m);o.forEach(I=>{I(t.value,y,{delta:k,type:ai.pop,direction:k?k>0?Yt.forward:Yt.back:Yt.unknown})})};function s(){l=t.value}function c(p){o.push(p);const m=()=>{const y=o.indexOf(p);y>-1&&o.splice(y,1)};return a.push(m),m}function d(){const{history:p}=window;p.state&&p.replaceState(me({},p.state,{scroll:ro()}),"")}function u(){for(const p of a)p();a=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:s,listen:c,destroy:u}}function El(e,n,t,i=!1,o=!1){return{back:e,current:n,forward:t,replaced:i,position:window.history.length,scroll:o?ro():null}}function Gh(e){const{history:n,location:t}=window,i={value:Os(e,t)},o={value:n.state};o.value||a(i.value,{back:null,current:i.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(s,c,d){const u=e.indexOf("#"),p=u>-1?(t.host&&document.querySelector("base")?e:e.slice(u))+s:jh()+e+s;try{n[d?"replaceState":"pushState"](c,"",p),o.value=c}catch(m){console.error(m),t[d?"replace":"assign"](p)}}function l(s,c){const d=me({},n.state,El(o.value.back,s,o.value.forward,!0),c,{position:o.value.position});a(s,d,!0),i.value=s}function r(s,c){const d=me({},o.value,n.state,{forward:s,scroll:ro()});a(d.current,d,!0);const u=me({},El(i.value,s,null),{position:d.position+1},c);a(s,u,!1),i.value=s}return{location:i,state:o,push:r,replace:l}}function Nh(e){e=Rh(e);const n=Gh(e),t=Hh(e,n.state,n.location,n.replace);function i(a,l=!0){l||t.pauseListeners(),history.go(a)}const o=me({location:"",base:e,go:i,createHref:zh.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function zs(e){return typeof e=="string"||typeof e=="symbol"}const Ps=Symbol("");var Sl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Sl||(Sl={}));function At(e,n){return me(new Error,{type:e,[Ps]:!0},n)}function In(e,n){return e instanceof Error&&Ps in e&&(n==null||!!(e.type&n))}const Il="[^/]+?",Wh={sensitive:!1,strict:!1,start:!0,end:!0},Bh=/[.+*?^${}()[\]/\\]/g;function $h(e,n){const t=me({},Wh,n),i=[];let o=t.start?"^":"";const a=[];for(const c of e){const d=c.length?[]:[90];t.strict&&!c.length&&(o+="/");for(let u=0;u<c.length;u++){const p=c[u];let m=40+(t.sensitive?.25:0);if(p.type===0)u||(o+="/"),o+=p.value.replace(Bh,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:_,optional:k,regexp:I}=p;a.push({name:y,repeatable:_,optional:k});const S=I||Il;if(S!==Il){m+=10;try{new RegExp(`(${S})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+b.message)}}let g=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;u||(g=k&&c.length<2?`(?:/${g})`:"/"+g),k&&(g+="?"),o+=g,m+=20,k&&(m+=-8),_&&(m+=-20),S===".*"&&(m+=-50)}d.push(m)}i.push(d)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const l=new RegExp(o,t.sensitive?"":"i");function r(c){const d=c.match(l),u={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",y=a[p-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function s(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:y,repeatable:_,optional:k}=m,I=y in c?c[y]:"";if(gn(I)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=gn(I)?I.join("/"):I;if(!S)if(k)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);d+=S}}return d||"/"}return{re:l,score:i,keys:a,parse:r,stringify:s}}function qh(e,n){let t=0;for(;t<e.length&&t<n.length;){const i=n[t]-e[t];if(i)return i;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Ds(e,n){let t=0;const i=e.score,o=n.score;for(;t<i.length&&t<o.length;){const a=qh(i[t],o[t]);if(a)return a;t++}if(Math.abs(o.length-i.length)===1){if(Cl(i))return 1;if(Cl(o))return-1}return o.length-i.length}function Cl(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Kh={type:0,value:""},Yh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Kh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const o=[];let a;function l(){a&&o.push(a),a=[]}let r=0,s,c="",d="";function u(){c&&(t===0?a.push({type:0,value:c}):t===1||t===2||t===3?(a.length>1&&(s==="*"||s==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):n("Invalid state to consume buffer"),c="")}function p(){c+=s}for(;r<e.length;){if(s=e[r++],s==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:s==="/"?(c&&u(),l()):s===":"?(u(),t=1):p();break;case 4:p(),t=i;break;case 1:s==="("?t=2:Yh.test(s)?p():(u(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&r--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:t=3:d+=s;break;case 3:u(),t=0,s!=="*"&&s!=="?"&&s!=="+"&&r--,d="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),l(),o}function Zh(e,n,t){const i=$h(Qh(e.path),t),o=me(i,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Xh(e,n){const t=[],i=new Map;n=Al({strict:!1,end:!0,sensitive:!1},n);function o(u){return i.get(u)}function a(u,p,m){const y=!m,_=Tl(u);_.aliasOf=m&&m.record;const k=Al(n,u),I=[_];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of b)I.push(Tl(me({},_,{components:m?m.record.components:_.components,path:j,aliasOf:m?m.record:_})))}let S,g;for(const b of I){const{path:j}=b;if(p&&j[0]!=="/"){const X=p.record.path,P=X[X.length-1]==="/"?"":"/";b.path=p.record.path+(j&&P+j)}if(S=Zh(b,p,k),m?m.alias.push(S):(g=g||S,g!==S&&g.alias.push(S),y&&u.name&&!Vl(S)&&l(u.name)),Fs(S)&&s(S),_.children){const X=_.children;for(let P=0;P<X.length;P++)a(X[P],S,m&&m.children[P])}m=m||S}return g?()=>{l(g)}:Kt}function l(u){if(zs(u)){const p=i.get(u);p&&(i.delete(u),t.splice(t.indexOf(p),1),p.children.forEach(l),p.alias.forEach(l))}else{const p=t.indexOf(u);p>-1&&(t.splice(p,1),u.record.name&&i.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function r(){return t}function s(u){const p=np(u,t);t.splice(p,0,u),u.record.name&&!Vl(u)&&i.set(u.record.name,u)}function c(u,p){let m,y={},_,k;if("name"in u&&u.name){if(m=i.get(u.name),!m)throw At(1,{location:u});k=m.record.name,y=me(xl(p.params,m.keys.filter(g=>!g.optional).concat(m.parent?m.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),u.params&&xl(u.params,m.keys.map(g=>g.name))),_=m.stringify(y)}else if(u.path!=null)_=u.path,m=t.find(g=>g.re.test(_)),m&&(y=m.parse(_),k=m.record.name);else{if(m=p.name?i.get(p.name):t.find(g=>g.re.test(p.path)),!m)throw At(1,{location:u,currentLocation:p});k=m.record.name,y=me({},p.params,u.params),_=m.stringify(y)}const I=[];let S=m;for(;S;)I.unshift(S.record),S=S.parent;return{name:k,path:_,params:y,matched:I,meta:ep(I)}}e.forEach(u=>a(u));function d(){t.length=0,i.clear()}return{addRoute:a,resolve:c,removeRoute:l,clearRoutes:d,getRoutes:r,getRecordMatcher:o}}function xl(e,n){const t={};for(const i of n)i in e&&(t[i]=e[i]);return t}function Tl(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Jh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Jh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const i in e.components)n[i]=typeof t=="object"?t[i]:t;return n}function Vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ep(e){return e.reduce((n,t)=>me(n,t.meta),{})}function Al(e,n){const t={};for(const i in e)t[i]=i in n?n[i]:e[i];return t}function np(e,n){let t=0,i=n.length;for(;t!==i;){const a=t+i>>1;Ds(e,n[a])<0?i=a:t=a+1}const o=tp(e);return o&&(i=n.lastIndexOf(o,i-1)),i}function tp(e){let n=e;for(;n=n.parent;)if(Fs(n)&&Ds(e,n)===0)return n}function Fs({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ip(e){const n={};if(e===""||e==="?")return n;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const a=i[o].replace(xs," "),l=a.indexOf("="),r=oi(l<0?a:a.slice(0,l)),s=l<0?null:oi(a.slice(l+1));if(r in n){let c=n[r];gn(c)||(c=n[r]=[c]),c.push(s)}else n[r]=s}return n}function Rl(e){let n="";for(let t in e){const i=e[t];if(t=kh(t),i==null){i!==void 0&&(n+=(n.length?"&":"")+t);continue}(gn(i)?i.map(a=>a&&$o(a)):[i&&$o(i)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function op(e){const n={};for(const t in e){const i=e[t];i!==void 0&&(n[t]=gn(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return n}const ap=Symbol(""),Ol=Symbol(""),so=Symbol(""),fa=Symbol(""),Ko=Symbol("");function jt(){let e=[];function n(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function $n(e,n,t,i,o,a=l=>l()){const l=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((r,s)=>{const c=p=>{p===!1?s(At(4,{from:t,to:n})):p instanceof Error?s(p):Uh(p)?s(At(2,{from:n,to:p})):(l&&i.enterCallbacks[o]===l&&typeof p=="function"&&l.push(p),r())},d=a(()=>e.call(i&&i.instances[o],n,t,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>s(p))})}function Ro(e,n,t,i,o=a=>a()){const a=[];for(const l of e)for(const r in l.components){let s=l.components[r];if(!(n!=="beforeRouteEnter"&&!l.instances[r]))if(Is(s)){const d=(s.__vccOpts||s)[n];d&&a.push($n(d,t,i,l,r,o))}else{let c=s();a.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${r}" at "${l.path}"`);const u=hh(d)?d.default:d;l.mods[r]=d,l.components[r]=u;const m=(u.__vccOpts||u)[n];return m&&$n(m,t,i,l,r,o)()}))}}return a}function zl(e){const n=Ne(so),t=Ne(fa),i=O(()=>{const s=Z(e.to);return n.resolve(s)}),o=O(()=>{const{matched:s}=i.value,{length:c}=s,d=s[c-1],u=t.matched;if(!d||!u.length)return-1;const p=u.findIndex(Vt.bind(null,d));if(p>-1)return p;const m=Pl(s[c-2]);return c>1&&Pl(d)===m&&u[u.length-1].path!==m?u.findIndex(Vt.bind(null,s[c-2])):p}),a=O(()=>o.value>-1&&dp(t.params,i.value.params)),l=O(()=>o.value>-1&&o.value===t.matched.length-1&&Rs(t.params,i.value.params));function r(s={}){if(cp(s)){const c=n[Z(e.replace)?"replace":"push"](Z(e.to)).catch(Kt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:O(()=>i.value.href),isActive:a,isExactActive:l,navigate:r}}function lp(e){return e.length===1?e[0]:e}const rp=ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zl,setup(e,{slots:n}){const t=ut(zl(e)),{options:i}=Ne(so),o=O(()=>({[Dl(e.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Dl(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&lp(n.default(t));return e.custom?a:K("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},a)}}}),sp=rp;function cp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function dp(e,n){for(const t in n){const i=n[t],o=e[t];if(typeof i=="string"){if(i!==o)return!1}else if(!gn(o)||o.length!==i.length||i.some((a,l)=>a!==o[l]))return!1}return!0}function Pl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dl=(e,n,t)=>e??n??t,up=ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const i=Ne(Ko),o=O(()=>e.route||i.value),a=Ne(Ol,0),l=O(()=>{let c=Z(a);const{matched:d}=o.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),r=O(()=>o.value.matched[l.value]);Kn(Ol,O(()=>l.value+1)),Kn(ap,r),Kn(Ko,o);const s=ze();return Ke(()=>[s.value,r.value,e.name],([c,d,u],[p,m,y])=>{d&&(d.instances[u]=c,m&&m!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),c&&d&&(!m||!Vt(d,m)||!p)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=o.value,d=e.name,u=r.value,p=u&&u.components[d];if(!p)return Fl(t.default,{Component:p,route:c});const m=u.props[d],y=m?m===!0?c.params:typeof m=="function"?m(c):m:null,k=K(p,me({},y,n,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(u.instances[d]=null)},ref:s}));return Fl(t.default,{Component:k,route:c})||k}}});function Fl(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const hp=up;function pp(e){const n=Xh(e.routes,e),t=e.parseQuery||ip,i=e.stringifyQuery||Rl,o=e.history,a=jt(),l=jt(),r=jt(),s=we(xn);let c=xn;bt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Vo.bind(null,x=>""+x),u=Vo.bind(null,Sh),p=Vo.bind(null,oi);function m(x,Y){let $,J;return zs(x)?($=n.getRecordMatcher(x),J=Y):J=x,n.addRoute(J,$)}function y(x){const Y=n.getRecordMatcher(x);Y&&n.removeRoute(Y)}function _(){return n.getRoutes().map(x=>x.record)}function k(x){return!!n.getRecordMatcher(x)}function I(x,Y){if(Y=me({},Y||s.value),typeof x=="string"){const f=Ao(t,x,Y.path),w=n.resolve({path:f.path},Y),R=o.createHref(f.fullPath);return me(f,w,{params:p(w.params),hash:oi(f.hash),redirectedFrom:void 0,href:R})}let $;if(x.path!=null)$=me({},x,{path:Ao(t,x.path,Y.path).path});else{const f=me({},x.params);for(const w in f)f[w]==null&&delete f[w];$=me({},x,{params:u(f)}),Y.params=u(Y.params)}const J=n.resolve($,Y),ue=x.hash||"";J.params=d(p(J.params));const ye=xh(i,me({},x,{hash:Lh(ue),path:J.path})),h=o.createHref(ye);return me({fullPath:ye,hash:ue,query:i===Rl?op(x.query):x.query||{}},J,{redirectedFrom:void 0,href:h})}function S(x){return typeof x=="string"?Ao(t,x,s.value.path):me({},x)}function g(x,Y){if(c!==x)return At(8,{from:Y,to:x})}function b(x){return P(x)}function j(x){return b(me(S(x),{replace:!0}))}function X(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:$}=Y;let J=typeof $=="function"?$(x):$;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=S(J):{path:J},J.params={}),me({query:x.query,hash:x.hash,params:J.path!=null?{}:x.params},J)}}function P(x,Y){const $=c=I(x),J=s.value,ue=x.state,ye=x.force,h=x.replace===!0,f=X($);if(f)return P(me(S(f),{state:typeof f=="object"?me({},ue,f.state):ue,force:ye,replace:h}),Y||$);const w=$;w.redirectedFrom=Y;let R;return!ye&&Th(i,J,$)&&(R=At(16,{to:w,from:J}),Fe(J,J,!0,!1)),(R?Promise.resolve(R):z(w,J)).catch(C=>In(C)?In(C,2)?C:Ae(C):B(C,w,J)).then(C=>{if(C){if(In(C,2))return P(me({replace:h},S(C.to),{state:typeof C.to=="object"?me({},ue,C.to.state):ue,force:ye}),Y||w)}else C=L(w,J,!0,h,ue);return W(w,J,C),C})}function E(x,Y){const $=g(x,Y);return $?Promise.reject($):Promise.resolve()}function V(x){const Y=Nn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function z(x,Y){let $;const[J,ue,ye]=mp(x,Y);$=Ro(J.reverse(),"beforeRouteLeave",x,Y);for(const f of J)f.leaveGuards.forEach(w=>{$.push($n(w,x,Y))});const h=E.bind(null,x,Y);return $.push(h),Xe($).then(()=>{$=[];for(const f of a.list())$.push($n(f,x,Y));return $.push(h),Xe($)}).then(()=>{$=Ro(ue,"beforeRouteUpdate",x,Y);for(const f of ue)f.updateGuards.forEach(w=>{$.push($n(w,x,Y))});return $.push(h),Xe($)}).then(()=>{$=[];for(const f of ye)if(f.beforeEnter)if(gn(f.beforeEnter))for(const w of f.beforeEnter)$.push($n(w,x,Y));else $.push($n(f.beforeEnter,x,Y));return $.push(h),Xe($)}).then(()=>(x.matched.forEach(f=>f.enterCallbacks={}),$=Ro(ye,"beforeRouteEnter",x,Y,V),$.push(h),Xe($))).then(()=>{$=[];for(const f of l.list())$.push($n(f,x,Y));return $.push(h),Xe($)}).catch(f=>In(f,8)?f:Promise.reject(f))}function W(x,Y,$){r.list().forEach(J=>V(()=>J(x,Y,$)))}function L(x,Y,$,J,ue){const ye=g(x,Y);if(ye)return ye;const h=Y===xn,f=bt?history.state:{};$&&(J||h?o.replace(x.fullPath,me({scroll:h&&f&&f.scroll},ue)):o.push(x.fullPath,ue)),s.value=x,Fe(x,Y,$,h),Ae()}let D;function F(){D||(D=o.listen((x,Y,$)=>{if(!vn.listening)return;const J=I(x),ue=X(J);if(ue){P(me(ue,{replace:!0,force:!0}),J).catch(Kt);return}c=J;const ye=s.value;bt&&Fh(kl(ye.fullPath,$.delta),ro()),z(J,ye).catch(h=>In(h,12)?h:In(h,2)?(P(me(S(h.to),{force:!0}),J).then(f=>{In(f,20)&&!$.delta&&$.type===ai.pop&&o.go(-1,!1)}).catch(Kt),Promise.reject()):($.delta&&o.go(-$.delta,!1),B(h,J,ye))).then(h=>{h=h||L(J,ye,!1),h&&($.delta&&!In(h,8)?o.go(-$.delta,!1):$.type===ai.pop&&In(h,20)&&o.go(-1,!1)),W(J,ye,h)}).catch(Kt)}))}let N=jt(),T=jt(),ee;function B(x,Y,$){Ae(x);const J=T.list();return J.length?J.forEach(ue=>ue(x,Y,$)):console.error(x),Promise.reject(x)}function de(){return ee&&s.value!==xn?Promise.resolve():new Promise((x,Y)=>{N.add([x,Y])})}function Ae(x){return ee||(ee=!x,F(),N.list().forEach(([Y,$])=>x?$(x):Y()),N.reset()),x}function Fe(x,Y,$,J){const{scrollBehavior:ue}=e;if(!bt||!ue)return Promise.resolve();const ye=!$&&Mh(kl(x.fullPath,0))||(J||!$)&&history.state&&history.state.scroll||null;return hi().then(()=>ue(x,Y,ye)).then(h=>h&&Dh(h)).catch(h=>B(h,x,Y))}const We=x=>o.go(x);let Gn;const Nn=new Set,vn={currentRoute:s,listening:!0,addRoute:m,removeRoute:y,clearRoutes:n.clearRoutes,hasRoute:k,getRoutes:_,resolve:I,options:e,push:b,replace:j,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:a.add,beforeResolve:l.add,afterEach:r.add,onError:T.add,isReady:de,install(x){const Y=this;x.component("RouterLink",sp),x.component("RouterView",hp),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(s)}),bt&&!Gn&&s.value===xn&&(Gn=!0,b(o.location).catch(ue=>{}));const $={};for(const ue in xn)Object.defineProperty($,ue,{get:()=>s.value[ue],enumerable:!0});x.provide(so,Y),x.provide(fa,Ar($)),x.provide(Ko,s);const J=x.unmount;Nn.add(x),x.unmount=function(){Nn.delete(x),Nn.size<1&&(c=xn,D&&D(),D=null,s.value=xn,Gn=!1,ee=!1),J()}}};function Xe(x){return x.reduce((Y,$)=>Y.then(()=>V($)),Promise.resolve())}return vn}function mp(e,n){const t=[],i=[],o=[],a=Math.max(n.matched.length,e.matched.length);for(let l=0;l<a;l++){const r=n.matched[l];r&&(e.matched.find(c=>Vt(c,r))?i.push(r):t.push(r));const s=e.matched[l];s&&(n.matched.find(c=>Vt(c,s))||o.push(s))}return[t,i,o]}function pt(){return Ne(so)}function mt(e){return Ne(fa)}var va=Symbol(""),fn=()=>{const e=Ne(va);if(!e)throw new Error("useClientData() is called without provider.");return e},gp=()=>fn().pageComponent,ya=()=>fn().pageData,vi=()=>fn().pageFrontmatter,fp=()=>fn().pageHead,ba=()=>fn().pageLang,vp=()=>fn().pageLayout,Ms=()=>fn().routeLocale,js=()=>fn().routePath,yp=()=>fn().routes,bp=()=>fn().siteData,Di=we([]),yi=e=>{Di.value.push(e),oo(()=>{Di.value=Di.value.filter(n=>n!==e)})},_p=Symbol(""),Yo=we(dh),It=we(uh),Hs=(e,n)=>{const t=eh(e,n);if(It.value[t])return t;const i=encodeURI(t);if(It.value[i])return i;const o=Yo.value[t]||Yo.value[i];return o||t},li=(e,n)=>{const{pathname:t,hashAndQueries:i}=ks(e),o=Hs(t,n),a=o+i;return It.value[o]?{...It.value[o],path:a,notFound:!1}:{...It.value["/404.html"],path:a,notFound:!0}},wp=(e,n)=>{const{pathname:t,hashAndQueries:i}=ks(e);return Hs(t,n)+i},Lp=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const n=e.currentTarget.getAttribute("target");if(n!=null&&n.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},co=ce({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:n}){const t=pt(),i=mt(),o=O(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${wp(e.to,i.path).substring(1)}`);return()=>K("a",{class:["route-link",{[e.activeClass]:e.active}],href:o.value,onClick:(a={})=>{Lp(a)&&t.push(e.to).catch()}},n.default())}}),kp=ce({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:n}){const t=Pr(e,"config"),i=mt(),o=bp(),a=O(()=>gi(t.value.link)),l=O(()=>t.value.target||(a.value?"_blank":void 0)),r=O(()=>l.value==="_blank"),s=O(()=>!a.value&&!r.value),c=O(()=>t.value.rel||(r.value?"noopener noreferrer":null)),d=O(()=>t.value.ariaLabel??t.value.text),u=O(()=>{if(t.value.exact)return!1;const m=Object.keys(o.value.locales);return m.length?m.every(y=>y!==t.value.link):t.value.link!=="/"}),p=O(()=>s.value?t.value.activeMatch?(t.value.activeMatch instanceof RegExp?t.value.activeMatch:new RegExp(t.value.activeMatch,"u")).test(i.path):u.value?i.path.startsWith(t.value.link):i.path===t.value.link:!1);return()=>{const{before:m,after:y,default:_}=n,k=(_==null?void 0:_(t.value))??[m==null?void 0:m(t.value),t.value.text,y==null?void 0:y(t.value)];return s.value?K(co,{class:"auto-link",to:t.value.link,active:p.value,"aria-label":d.value},()=>k):K("a",{class:"auto-link external-link",href:t.value.link,"aria-label":d.value,rel:c.value,target:l.value},k)}}}),_a=ce({name:"ClientOnly",setup(e,n){const t=ze(!1);return nn(()=>{t.value=!0}),()=>{var i,o;return t.value?(o=(i=n.slots).default)==null?void 0:o.call(i):null}}}),Ii=e=>{Di.value.forEach(n=>n(e))},wa=ce({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const n=gp(),t=O(()=>{if(!e.path)return n.value;const o=li(e.path);return bd(async()=>o.loader().then(({comp:a})=>a))}),i=vi();return Ke(i,()=>{Ii("updated")},{deep:!0,flush:"post"}),()=>K(t.value,{onVnodeMounted:()=>{Ii("mounted")},onVnodeUpdated:()=>{Ii("updated")},onVnodeBeforeUnmount:()=>{Ii("beforeUnmount")}})}}),Ep="Layout",Sp="en-US",tt=ut({resolveLayouts:e=>e.reduce((n,t)=>({...n,...t.layouts}),{}),resolvePageHead:(e,n,t)=>{const i=un(n.description)?n.description:t.description,o=[...Array.isArray(n.head)?n.head:[],...t.head,["title",{},e],["meta",{name:"description",content:i}]];return lh(o)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(t=>!!t).join(" | "),resolvePageLang:(e,n)=>e.lang||n.lang||Sp,resolvePageLayout:(e,n)=>{const t=un(e.frontmatter.layout)?e.frontmatter.layout:Ep;if(!n[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return n[t]},resolveRouteLocale:(e,n)=>nh(e,decodeURI(n)),resolveSiteLocaleData:({base:e,locales:n,...t},i)=>{var o;return{...t,...n[i],head:[...((o=n[i])==null?void 0:o.head)??[],...t.head]}}}),kn=(e={})=>e,La=e=>fi(e)?e:`/${Ss(e)}`,Ip=Object.defineProperty,Cp=(e,n)=>{for(var t in n)Ip(e,t,{get:n[t],enumerable:!0})},xp={};Cp(xp,{COMPONENT_STATE_TYPE:()=>Tp,INSPECTOR_ID:()=>Vp,INSPECTOR_LABEL:()=>Ap,INSPECTOR_NODES:()=>Rp,INSPECTOR_STATE_SECTION_NAME:()=>Op,PLUGIN_ID:()=>Gs,PLUGIN_LABEL:()=>ka});var Gs="org.vuejs.vuepress",ka="VuePress",Tp=ka,Vp=Gs,Ap=ka,Ml={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},jl={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Hl={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},Gl={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Rp={[Ml.id]:Ml,[jl.id]:jl,[Hl.id]:Hl,[Gl.id]:Gl},Op="State";function uo(e){return mr()?(Vc(e),!0):!1}const Ct=new WeakMap,Ns=(...e)=>{var n;const t=e[0],i=(n=Hn())==null?void 0:n.proxy;if(i==null&&!Jr())throw new Error("injectLocal must be called in setup");return i&&Ct.has(i)&&t in Ct.get(i)?Ct.get(i)[t]:Ne(...e)};function zp(e,n){var t;const i=(t=Hn())==null?void 0:t.proxy;if(i==null)throw new Error("provideLocal must be called in setup");Ct.has(i)||Ct.set(i,Object.create(null));const o=Ct.get(i);return o[e]=n,Kn(e,n)}const Ea=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Pp=e=>e!=null,Dp=Object.prototype.toString,Fp=e=>Dp.call(e)==="[object Object]",ht=()=>{};function Mp(...e){if(e.length!==1)return Pr(...e);const n=e[0];return typeof n=="function"?no(zr(()=>({get:n,set:ht}))):ze(n)}function Sa(e,n){function t(...i){return new Promise((o,a)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(o).catch(a)})}return t}const Us=e=>e();function jp(e,n={}){let t,i,o=ht;const a=s=>{clearTimeout(s),o(),o=ht};let l;return s=>{const c=ve(e),d=ve(n.maxWait);return t&&a(t),c<=0||d!==void 0&&d<=0?(i&&(a(i),i=void 0),Promise.resolve(s())):new Promise((u,p)=>{o=n.rejectOnCancel?p:u,l=s,d&&!i&&(i=setTimeout(()=>{t&&a(t),i=void 0,u(l())},d)),t=setTimeout(()=>{i&&a(i),i=void 0,u(s())},c)})}}function Hp(...e){let n=0,t,i=!0,o=ht,a,l,r,s,c;!Oe(e[0])&&typeof e[0]=="object"?{delay:l,trailing:r=!0,leading:s=!0,rejectOnCancel:c=!1}=e[0]:[l,r=!0,s=!0,c=!1]=e;const d=()=>{t&&(clearTimeout(t),t=void 0,o(),o=ht)};return p=>{const m=ve(l),y=Date.now()-n,_=()=>a=p();return d(),m<=0?(n=Date.now(),_()):(y>m&&(s||!i)?(n=Date.now(),_()):r&&(a=new Promise((k,I)=>{o=c?I:k,t=setTimeout(()=>{n=Date.now(),i=!0,k(_()),d()},Math.max(0,m-y))})),!s&&!t&&(t=setTimeout(()=>i=!0,m)),i=!1,a)}}function Gp(e=Us,n={}){const{initialState:t="active"}=n,i=Mp(t==="active");function o(){i.value=!1}function a(){i.value=!0}const l=(...r)=>{i.value&&e(...r)};return{isActive:no(i),pause:o,resume:a,eventFilter:l}}function Np(e){let n;function t(){return n||(n=e()),n}return t.reset=async()=>{const i=n;n=void 0,i&&await i},t}function Nl(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function Qt(e){return Array.isArray(e)?e:[e]}function Up(e){return Hn()}function Ws(e,n=200,t={}){return Sa(jp(n,t),e)}function Wp(e,n=200,t=!1,i=!0,o=!1){return Sa(Hp(n,t,i,o),e)}function Bp(e,n,t={}){const{eventFilter:i=Us,...o}=t;return Ke(e,Sa(i,n),o)}function $p(e,n,t={}){const{eventFilter:i,initialState:o="active",...a}=t,{eventFilter:l,pause:r,resume:s,isActive:c}=Gp(i,{initialState:o});return{stop:Bp(e,n,{...a,eventFilter:l}),pause:r,resume:s,isActive:c}}function ho(e,n=!0,t){Up()?nn(e,t):n?e():hi(e)}function qp(e,n,t={}){const{immediate:i=!0,immediateCallback:o=!1}=t,a=we(!1);let l;function r(){l&&(clearTimeout(l),l=void 0)}function s(){a.value=!1,r()}function c(...d){o&&e(),r(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=void 0,e(...d)},ve(n))}return i&&(a.value=!0,Ea&&c()),uo(s),{isPending:Qc(a),start:c,stop:s}}function Ia(e=!1,n={}){const{truthyValue:t=!0,falsyValue:i=!1}=n,o=Oe(e),a=we(e);function l(r){if(arguments.length)return a.value=r,a.value;{const s=ve(t);return a.value=a.value===s?ve(i):s,a.value}}return o?l:[a,l]}function Ca(e,n,t){return Ke(e,n,{...t,immediate:!0})}const Ln=Ea?window:void 0,Bs=Ea?window.navigator:void 0;function On(e){var n;const t=ve(e);return(n=t==null?void 0:t.$el)!=null?n:t}function Ue(...e){const n=[],t=()=>{n.forEach(r=>r()),n.length=0},i=(r,s,c,d)=>(r.addEventListener(s,c,d),()=>r.removeEventListener(s,c,d)),o=O(()=>{const r=Qt(ve(e[0])).filter(s=>s!=null);return r.every(s=>typeof s!="string")?r:void 0}),a=Ca(()=>{var r,s;return[(s=(r=o.value)==null?void 0:r.map(c=>On(c)))!=null?s:[Ln].filter(c=>c!=null),Qt(ve(o.value?e[1]:e[0])),Qt(Z(o.value?e[2]:e[1])),ve(o.value?e[3]:e[2])]},([r,s,c,d])=>{if(t(),!(r!=null&&r.length)||!(s!=null&&s.length)||!(c!=null&&c.length))return;const u=Fp(d)?{...d}:d;n.push(...r.flatMap(p=>s.flatMap(m=>c.map(y=>i(p,m,y,u)))))},{flush:"post"}),l=()=>{a(),t()};return uo(t),l}function Kp(){const e=we(!1),n=Hn();return n&&nn(()=>{e.value=!0},n),e}function bi(e){const n=Kp();return O(()=>(n.value,!!e()))}function Yp(e,n,t={}){const{window:i=Ln,...o}=t;let a;const l=bi(()=>i&&"MutationObserver"in i),r=()=>{a&&(a.disconnect(),a=void 0)},s=O(()=>{const p=ve(e),m=Qt(p).map(On).filter(Pp);return new Set(m)}),c=Ke(s,p=>{r(),l.value&&p.size&&(a=new MutationObserver(n),p.forEach(m=>a.observe(m,o)))},{immediate:!0,flush:"post"}),d=()=>a==null?void 0:a.takeRecords(),u=()=>{c(),r()};return uo(u),{isSupported:l,stop:u,takeRecords:d}}const Qp=Symbol("vueuse-ssr-width");function Zp(){const e=Jr()?Ns(Qp,null):null;return typeof e=="number"?e:void 0}function xa(e,n={}){const{window:t=Ln,ssrWidth:i=Zp()}=n,o=bi(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function"),a=we(typeof i=="number"),l=we(),r=we(!1),s=c=>{r.value=c.matches};return Jd(()=>{if(a.value){a.value=!o.value;const c=ve(e).split(",");r.value=c.some(d=>{const u=d.includes("not all"),p=d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),m=d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let y=!!(p||m);return p&&y&&(y=i>=Nl(p[1])),m&&y&&(y=i<=Nl(m[1])),u?!y:y});return}o.value&&(l.value=t.matchMedia(ve(e)),r.value=l.value.matches)}),Ue(l,"change",s,{passive:!0}),O(()=>r.value)}function Ul(e,n={}){const{controls:t=!1,navigator:i=Bs}=n,o=bi(()=>i&&"permissions"in i),a=we(),l=typeof e=="string"?{name:e}:e,r=we(),s=()=>{var d,u;r.value=(u=(d=a.value)==null?void 0:d.state)!=null?u:"prompt"};Ue(a,"change",s,{passive:!0});const c=Np(async()=>{if(o.value){if(!a.value)try{a.value=await i.permissions.query(l)}catch{a.value=void 0}finally{s()}if(t)return pe(a.value)}});return c(),t?{state:r,isSupported:o,query:c}:r}function Xp(e={}){const{navigator:n=Bs,read:t=!1,source:i,copiedDuring:o=1500,legacy:a=!1}=e,l=bi(()=>n&&"clipboard"in n),r=Ul("clipboard-read"),s=Ul("clipboard-write"),c=O(()=>l.value||a),d=we(""),u=we(!1),p=qp(()=>u.value=!1,o,{immediate:!1});async function m(){let S=!(l.value&&I(r.value));if(!S)try{d.value=await n.clipboard.readText()}catch{S=!0}S&&(d.value=k())}c.value&&t&&Ue(["copy","cut"],m,{passive:!0});async function y(S=ve(i)){if(c.value&&S!=null){let g=!(l.value&&I(s.value));if(!g)try{await n.clipboard.writeText(S)}catch{g=!0}g&&_(S),d.value=S,u.value=!0,p.start()}}function _(S){const g=document.createElement("textarea");g.value=S??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function k(){var S,g,b;return(b=(g=(S=document==null?void 0:document.getSelection)==null?void 0:S.call(document))==null?void 0:g.toString())!=null?b:""}function I(S){return S==="granted"||S==="prompt"}return{isSupported:c,text:d,copied:u,copy:y}}const Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xi="__vueuse_ssr_handlers__",Jp=em();function em(){return xi in Ci||(Ci[xi]=Ci[xi]||{}),Ci[xi]}function nm(e,n){return Jp[e]||n}function tm(e){return xa("(prefers-color-scheme: dark)",e)}function im(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const om={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Wl="vueuse-storage";function Ta(e,n,t,i={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:r=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:d,window:u=Ln,eventFilter:p,onError:m=F=>{console.error(F)},initOnMounted:y}=i,_=(d?we:ze)(typeof n=="function"?n():n),k=O(()=>ve(e));if(!t)try{t=nm("getDefaultStorage",()=>{var F;return(F=Ln)==null?void 0:F.localStorage})()}catch(F){m(F)}if(!t)return _;const I=ve(n),S=im(I),g=(o=i.serializer)!=null?o:om[S],{pause:b,resume:j}=$p(_,F=>z(F),{flush:a,deep:l,eventFilter:p});Ke(k,()=>L(),{flush:a});let X=!1;const P=F=>{y&&!X||L(F)},E=F=>{y&&!X||D(F)};u&&r&&(t instanceof Storage?Ue(u,"storage",P,{passive:!0}):Ue(u,Wl,E)),y?ho(()=>{X=!0,L()}):L();function V(F,N){if(u){const T={key:k.value,oldValue:F,newValue:N,storageArea:t};u.dispatchEvent(t instanceof Storage?new StorageEvent("storage",T):new CustomEvent(Wl,{detail:T}))}}function z(F){try{const N=t.getItem(k.value);if(F==null)V(N,null),t.removeItem(k.value);else{const T=g.write(F);N!==T&&(t.setItem(k.value,T),V(N,T))}}catch(N){m(N)}}function W(F){const N=F?F.newValue:t.getItem(k.value);if(N==null)return s&&I!=null&&t.setItem(k.value,g.write(I)),I;if(!F&&c){const T=g.read(N);return typeof c=="function"?c(T,I):S==="object"&&!Array.isArray(T)?{...I,...T}:T}else return typeof N!="string"?N:g.read(N)}function L(F){if(!(F&&F.storageArea!==t)){if(F&&F.key==null){_.value=I;return}if(!(F&&F.key!==k.value)){b();try{const N=g.write(_.value);(F===void 0||(F==null?void 0:F.newValue)!==N)&&(_.value=W(F))}catch(N){m(N)}finally{F?hi(j):j()}}}}function D(F){L(F.detail)}return _}function am(e,n,t={}){const{window:i=Ln,...o}=t;let a;const l=bi(()=>i&&"ResizeObserver"in i),r=()=>{a&&(a.disconnect(),a=void 0)},s=O(()=>{const u=ve(e);return Array.isArray(u)?u.map(p=>On(p)):[On(u)]}),c=Ke(s,u=>{if(r(),l.value&&i){a=new ResizeObserver(n);for(const p of u)p&&a.observe(p,o)}},{immediate:!0,flush:"post"}),d=()=>{r(),c()};return uo(d),{isSupported:l,stop:d}}function lm(e,n={width:0,height:0},t={}){const{window:i=Ln,box:o="content-box"}=t,a=O(()=>{var u,p;return(p=(u=On(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),l=we(n.width),r=we(n.height),{stop:s}=am(e,([u])=>{const p=o==="border-box"?u.borderBoxSize:o==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(i&&a.value){const m=On(e);if(m){const y=m.getBoundingClientRect();l.value=y.width,r.value=y.height}}else if(p){const m=Qt(p);l.value=m.reduce((y,{inlineSize:_})=>y+_,0),r.value=m.reduce((y,{blockSize:_})=>y+_,0)}else l.value=u.contentRect.width,r.value=u.contentRect.height},t);ho(()=>{const u=On(e);u&&(l.value="offsetWidth"in u?u.offsetWidth:n.width,r.value="offsetHeight"in u?u.offsetHeight:n.height)});const c=Ke(()=>On(e),u=>{l.value=u?n.width:0,r.value=u?n.height:0});function d(){s(),c()}return{width:l,height:r,stop:d}}const Bl=1;function rm(e,n={}){const{throttle:t=0,idle:i=200,onStop:o=ht,onScroll:a=ht,offset:l={left:0,right:0,top:0,bottom:0},observe:r={mutation:!1},eventListenerOptions:s={capture:!1,passive:!0},behavior:c="auto",window:d=Ln,onError:u=V=>{console.error(V)}}=n,p=typeof r=="boolean"?{mutation:r}:r,m=we(0),y=we(0),_=O({get(){return m.value},set(V){I(V,void 0)}}),k=O({get(){return y.value},set(V){I(void 0,V)}});function I(V,z){var W,L,D,F;if(!d)return;const N=ve(e);if(!N)return;(D=N instanceof Document?d.document.body:N)==null||D.scrollTo({top:(W=ve(z))!=null?W:k.value,left:(L=ve(V))!=null?L:_.value,behavior:ve(c)});const T=((F=N==null?void 0:N.document)==null?void 0:F.documentElement)||(N==null?void 0:N.documentElement)||N;_!=null&&(m.value=T.scrollLeft),k!=null&&(y.value=T.scrollTop)}const S=we(!1),g=ut({left:!0,right:!1,top:!0,bottom:!1}),b=ut({left:!1,right:!1,top:!1,bottom:!1}),j=V=>{S.value&&(S.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,o(V))},X=Ws(j,t+i),P=V=>{var z;if(!d)return;const W=((z=V==null?void 0:V.document)==null?void 0:z.documentElement)||(V==null?void 0:V.documentElement)||On(V),{display:L,flexDirection:D,direction:F}=getComputedStyle(W),N=F==="rtl"?-1:1,T=W.scrollLeft;b.left=T<m.value,b.right=T>m.value;const ee=Math.abs(T*N)<=(l.left||0),B=Math.abs(T*N)+W.clientWidth>=W.scrollWidth-(l.right||0)-Bl;L==="flex"&&D==="row-reverse"?(g.left=B,g.right=ee):(g.left=ee,g.right=B),m.value=T;let de=W.scrollTop;V===d.document&&!de&&(de=d.document.body.scrollTop),b.top=de<y.value,b.bottom=de>y.value;const Ae=Math.abs(de)<=(l.top||0),Fe=Math.abs(de)+W.clientHeight>=W.scrollHeight-(l.bottom||0)-Bl;L==="flex"&&D==="column-reverse"?(g.top=Fe,g.bottom=Ae):(g.top=Ae,g.bottom=Fe),y.value=de},E=V=>{var z;if(!d)return;const W=(z=V.target.documentElement)!=null?z:V.target;P(W),S.value=!0,X(V),a(V)};return Ue(e,"scroll",t?Wp(E,t,!0,!1):E,s),ho(()=>{try{const V=ve(e);if(!V)return;P(V)}catch(V){u(V)}}),p!=null&&p.mutation&&e!=null&&e!==d&&e!==document&&Yp(e,()=>{const V=ve(e);V&&P(V)},{attributes:!0,childList:!0,subtree:!0}),Ue(e,"scrollend",j,s),{x:_,y:k,isScrolling:S,arrivedState:g,directions:b,measure(){const V=ve(e);d&&V&&P(V)}}}function sm(e={}){const{window:n=Ln,...t}=e;return rm(n,t)}function cm(e={}){const{window:n=Ln,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:a=!0,type:l="inner"}=e,r=we(t),s=we(i),c=()=>{if(n)if(l==="outer")r.value=n.outerWidth,s.value=n.outerHeight;else if(l==="visual"&&n.visualViewport){const{width:u,height:p,scale:m}=n.visualViewport;r.value=Math.round(u*m),s.value=Math.round(p*m)}else a?(r.value=n.innerWidth,s.value=n.innerHeight):(r.value=n.document.documentElement.clientWidth,s.value=n.document.documentElement.clientHeight)};c(),ho(c);const d={passive:!0};if(Ue("resize",c,d),n&&l==="visual"&&n.visualViewport&&Ue(n.visualViewport,"resize",c,d),o){const u=xa("(orientation: portrait)");Ke(u,()=>c())}return{width:r,height:s}}const $l=async(e,n)=>{const{path:t,query:i}=e.currentRoute.value,{scrollBehavior:o}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:t,query:i,hash:n}),e.options.scrollBehavior=o},dm=({headerLinkSelector:e,headerAnchorSelector:n,delay:t,offset:i=5})=>{const o=pt();Ue("scroll",Ws(()=>{var y,_;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<i){$l(o,"");return}const s=window.innerHeight+l,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(c-s)<i,u=Array.from(document.querySelectorAll(e)),m=Array.from(document.querySelectorAll(n)).filter(k=>u.some(I=>I.hash===k.hash));for(let k=0;k<m.length;k++){const I=m[k],S=m[k+1],g=l>=(((y=I.parentElement)==null?void 0:y.offsetTop)??0)-i,b=!S||l<(((_=S.parentElement)==null?void 0:_.offsetTop)??0)-i;if(!(g&&b))continue;const X=decodeURIComponent(o.currentRoute.value.hash),P=decodeURIComponent(I.hash);if(X===P)return;if(d){for(let E=k+1;E<m.length;E++)if(X===decodeURIComponent(m[E].hash))return}$l(o,P);return}},t))},um="a.vp-sidebar-item",hm=".header-anchor",pm=300,mm=5,gm=kn({setup(){dm({headerLinkSelector:um,headerAnchorSelector:hm,delay:pm,offset:mm})}}),fm=Object.freeze(Object.defineProperty({__proto__:null,default:gm},Symbol.toStringTag,{value:"Module"})),$s=[...new Array(6)].map((e,n)=>`[vp-content] h${n+1}`).join(","),vm=(e,n=2)=>{if(n===!1)return[];const[t,i]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n,o=e.filter(l=>l.level>=t&&l.level<=i),a=[];e:for(let l=0;l<o.length;l++){const r=o[l];if(l===0)a.push(r);else{for(let s=l-1;s>=0;s--){const c=o[s];if(c.level<r.level){c.children.push(r);continue e}}a.push(r)}}return a},ym=(e,n=[])=>{let t;if(n.length){const i=e.cloneNode(!0);i.querySelectorAll(n.join(",")).forEach(o=>{o.remove()}),t=i.textContent||""}else t=e.textContent||"";return t.trim()},bm=(e=$s,n=[])=>Array.from(document.querySelectorAll(e)).filter(t=>t.id&&t.hasChildNodes()).map(t=>({element:t,title:ym(t,n),link:`#${t.id}`,slug:t.id,level:Number(t.tagName[1]),children:[]})),_m=({selector:e=$s,levels:n=2,ignore:t=[]}={})=>vm(bm(e,t),n),wm=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Lm=(e,n)=>n.some(t=>{if(un(t))return t===e.key;const{key:i,ctrl:o=!1,shift:a=!1,alt:l=!1}=t;return i===e.key&&o===e.ctrlKey&&a===e.shiftKey&&l===e.altKey}),qs=(e,n)=>{var i;const t=(i=Hn())==null?void 0:i.appContext.components;return t?e in t||en(e)in t||ci(en(e))in t:!1},po=e=>{const n=Ms();return O(()=>ve(e)[n.value]??{})},km=(e,n)=>{Ue("keydown",i=>{const o=ve(e);o!=null&&o.length&&Lm(i,o)&&!wm(i.target)&&(i.preventDefault(),n())})},Em=()=>{const e=yp();return O(()=>Object.keys(e.value))},Sm=e=>typeof e<"u",Ks=(e,n)=>un(e)&&e.startsWith(n),{keys:Im}=Object,Ys=e=>Ks(e,"/")&&e[1]!=="/",Qs=e=>!Xu(e)&&!gi(e);var Cm={"/":{backToTop:"Back to top"},"/zh/":{backToTop:"返回顶部"}};const xm=ce({name:"BackToTop",setup(){const e=vi(),n=po(Cm),t=we(),{height:i}=lm(t),{height:o}=cm(),{y:a}=sm(),l=O(()=>(e.value.backToTop??!0)&&a.value>100),r=O(()=>a.value/(i.value-o.value)*100);return nn(()=>{t.value=document.body}),()=>K(pa,{name:"back-to-top"},()=>l.value?K("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[K("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":r.value},K("svg",K("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*r.value*.48} ${Math.PI*(100-r.value)*.48}`}))),K("div",{class:"back-to-top-icon"})]):null)}}),Tm=kn({rootComponents:[xm]}),Vm=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Am=/language-(shellscript|shell|bash|sh|zsh)/,Rm=({duration:e=2e3,locales:n,selector:t,showInMobile:i,ignoreSelector:o=[],transform:a})=>{const l=xa("(max-width: 419px)"),r=O(()=>!l.value||i),s=po(n),c=y=>{var k;if(y.hasAttribute("copy-code"))return;const _=document.createElement("button");_.type="button",_.classList.add("vp-copy-code-button"),_.setAttribute("aria-label",s.value.copy),_.setAttribute("data-copied",s.value.copied),(k=y.parentElement)==null||k.insertBefore(_,y),y.setAttribute("copy-code","")},d=()=>{document.body.classList.toggle("no-copy-code",!r.value),r.value&&document.querySelectorAll(t.join(",")).forEach(c)};Ca(r,d,{flush:"post"}),yi(y=>{y!=="beforeUnmount"&&d()});const{copy:u}=Xp({legacy:!0}),p=new WeakMap,m=async(y,_,k)=>{const I=_.cloneNode(!0);o.length&&I.querySelectorAll(o.join(",")).forEach(b=>{b.remove()}),a&&a(I);let S=I.textContent||"";if(Am.test(y.className)&&(S=S.replace(/^ *(\$|>) /gm,"")),await u(S),e<=0)return;k.classList.add("copied"),clearTimeout(p.get(k));const g=setTimeout(()=>{k.classList.remove("copied"),k.blur(),p.delete(k)},e);p.set(k,g)};Ue("click",y=>{const _=y.target;if(r.value&&_.matches('div[class*="language-"] > button.vp-copy-code-button')){const k=_.parentElement,I=_.nextElementSibling;if(!k||!I)return;m(k,I,_)}})};var Om=[],zm={"/":{copy:"Copy code",copied:"Copied"},"/zh/":{copy:"复制代码",copied:"已复制"}},Pm=['[vp-content] div[class*="language-"] pre'];const Dm=kn({setup:()=>{Rm({selector:Pm,ignoreSelector:Om,locales:zm,duration:2e3,showInMobile:!1})}}),Fm=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),Mm=kn({setup(){Ue("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})}}),jm=Object.freeze(Object.defineProperty({__proto__:null,default:Mm},Symbol.toStringTag,{value:"Module"}));var ql={provider:null,pattern:{},repo:""};const Kl=typeof ql>"u"?{}:ql,Hm=(e,n)=>!e||fi(e)?e:n==="github"?`https://github.com/${e}`:n==="gitee"?`https://gitee.com/${e}`:e,Gm=/#(\d+)/g,Nm=(e=!0)=>{const n=vi(),t=ba(),i=ya(),{pattern:o={},provider:a}=Kl,l=Hm(Kl.repo,a);return O(()=>{var s;if(n.value.changelog===!1||!ve(e))return[];const r=new Intl.DateTimeFormat(t.value,{dateStyle:"short"});return(((s=i.value.git)==null?void 0:s.changelog)??[]).map(c=>{const d={date:r.format(c.time),...c};return o.issue&&l&&(d.message=d.message.replace(Gm,(u,p)=>`<a href="${o.issue.replace(":issue",p).replace(":repo",l)}" target="_blank" rel="noopener noreferrer">${u}</a>`)),o.commit&&l&&(d.commitUrl=o.commit.replace(":hash",d.hash).replace(":repo",l)),o.tag&&l&&d.tag&&(d.tagUrl=o.tag.replace(":tag",d.tag).replace(":repo",l)),d})})},Zs=(e=!0)=>{const n=vi(),t=ya();return O(()=>{var i;return n.value.contributors===!1||!ve(e)?[]:((i=t.value.git)==null?void 0:i.contributors)??[]})};var Yl={"/":{contributors:"Contributors",changelog:"Changelog",timeOn:"on",viewChangelog:"View All Changelog",latestUpdateAt:"Last Updated:"},"/zh/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新："}};const Um=typeof Yl>"u"?{}:Yl,Va=()=>po(Um),Xs=(e=!0)=>{const n=ba(),t=Va(),i=ya();return O(()=>{var r,s,c;if(!ve(e))return null;const o=((r=i.value.git)==null?void 0:r.updatedTime)??((c=(s=i.value.git)==null?void 0:s.changelog)==null?void 0:c[0].time);if(!o)return null;const a=new Date(o),l=new Intl.DateTimeFormat(n.value,{dateStyle:"short",timeStyle:"short"}).format(o);return{date:a,text:l,iso:a.toISOString(),locale:t.value.latestUpdateAt}})},Js=({level:e=2,text:n,anchor:t})=>K(`h${e||2}`,{id:t,tabindex:"-1"},K("a",{href:`#${t}`,class:"header-anchor"},K("span",n))),Wm=({name:e,url:n,avatar:t})=>K(n?"a":"span",{href:n,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[t?K("img",{src:t,alt:"",class:"vp-contributor-avatar"}):null,K("span",{class:"vp-contributor-name"},e)]),Bm=ce({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const n=Zs(),t=Va();return()=>n.value.length?[K(Js,{level:e.headerLevel,anchor:"doc-contributors",text:e.title||t.value.contributors}),K("div",{class:"vp-contributors"},n.value.map(i=>K(Wm,i)))]:null}}),$m=ce({name:"GitChangelog",props:{title:String,headerLevel:{type:Number,default:2}},setup(e){const n=Nm(),t=Va(),i=Xs(),[o,a]=Ia(),l=()=>K("div",{class:"vp-changelog-header",onClick:()=>a()},[K("div",{class:"vp-latest-updated"},[K("span",{class:"vp-changelog-icon"}),K("span",{"data-allow-mismatch":""},i.value.text)]),K("div",[K("span",{class:"vp-changelog-menu-icon"}),K("span",t.value.viewChangelog)])]),r=({item:c})=>K("li",{class:"vp-changelog-item-tag"},K("div",[K("a",{class:"vp-changelog-tag"},K("code",c.tag)),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[t.value.timeOn," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])])),s=({item:c})=>K("li",{class:"vp-changelog-item-commit"},[K(c.commitUrl?"a":"span",{class:"vp-changelog-hash",href:c.commitUrl,target:"_blank",rel:"noreferrer"},[K("code",c.hash.slice(0,5))]),K("span",{class:"vp-changelog-divider"},"-"),K("span",{class:"vp-changelog-message",innerHTML:c.message}),K("span",{class:"vp-changelog-date","data-allow-mismatch":""},[t.value.timeOn||"on"," ",K("time",{datetime:new Date(c.time).toISOString()},c.date)])]);return()=>n.value.length?[K(Js,{level:e.headerLevel,anchor:"doc-changelog",text:e.title||t.value.changelog}),K("div",{class:["vp-changelog-wrapper",{active:o.value}]},[K(l),K("ul",{class:"vp-changelog-list"},[n.value.map(c=>c.tag?K(r,{item:c,key:c.tag}):K(s,{item:c,key:c.hash}))])])]:null}}),qm={enhance:({app:e})=>{e.component("GitContributors",Bm),e.component("GitChangelog",$m)}},Km=Object.freeze(Object.defineProperty({__proto__:null,default:qm},Symbol.toStringTag,{value:"Module"}));/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var ot=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ti=function(n){return n.tagName==="IMG"},Ym=function(n){return NodeList.prototype.isPrototypeOf(n)},Fi=function(n){return n&&n.nodeType===1},Ql=function(n){var t=n.currentSrc||n.src;return t.substr(-4).toLowerCase()===".svg"},Zl=function(n){try{return Array.isArray(n)?n.filter(Ti):Ym(n)?[].slice.call(n).filter(Ti):Fi(n)?[n].filter(Ti):typeof n=="string"?[].slice.call(document.querySelectorAll(n)).filter(Ti):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Qm=function(n){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=n,t},Zm=function(n){var t=n.getBoundingClientRect(),i=t.top,o=t.left,a=t.width,l=t.height,r=n.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return r.removeAttribute("id"),r.style.position="absolute",r.style.top=i+s+"px",r.style.left=o+c+"px",r.style.width=a+"px",r.style.height=l+"px",r.style.transform="",r},vt=function(n,t){var i=ot({bubbles:!1,cancelable:!1,detail:void 0},t);if(typeof window.CustomEvent=="function")return new CustomEvent(n,i);var o=document.createEvent("CustomEvent");return o.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),o},Xm=function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=window.Promise||function(L){function D(){}L(D,D)},o=function(L){var D=L.target;if(D===V){y();return}g.indexOf(D)!==-1&&_({target:D})},a=function(){if(!(j||!E.original)){var L=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(X-L)>P.scrollOffset&&setTimeout(y,150)}},l=function(L){var D=L.key||L.keyCode;(D==="Escape"||D==="Esc"||D===27)&&y()},r=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=L;if(L.background&&(V.style.background=L.background),L.container&&L.container instanceof Object&&(D.container=ot({},P.container,L.container)),L.template){var F=Fi(L.template)?L.template:document.querySelector(L.template);D.template=F}return P=ot({},P,D),g.forEach(function(N){N.dispatchEvent(vt("medium-zoom:update",{detail:{zoom:z}}))}),z},s=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(ot({},P,L))},c=function(){for(var L=arguments.length,D=Array(L),F=0;F<L;F++)D[F]=arguments[F];var N=D.reduce(function(T,ee){return[].concat(T,Zl(ee))},[]);return N.filter(function(T){return g.indexOf(T)===-1}).forEach(function(T){g.push(T),T.classList.add("medium-zoom-image")}),b.forEach(function(T){var ee=T.type,B=T.listener,de=T.options;N.forEach(function(Ae){Ae.addEventListener(ee,B,de)})}),z},d=function(){for(var L=arguments.length,D=Array(L),F=0;F<L;F++)D[F]=arguments[F];E.zoomed&&y();var N=D.length>0?D.reduce(function(T,ee){return[].concat(T,Zl(ee))},[]):g;return N.forEach(function(T){T.classList.remove("medium-zoom-image"),T.dispatchEvent(vt("medium-zoom:detach",{detail:{zoom:z}}))}),g=g.filter(function(T){return N.indexOf(T)===-1}),z},u=function(L,D){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(N){N.addEventListener("medium-zoom:"+L,D,F)}),b.push({type:"medium-zoom:"+L,listener:D,options:F}),z},p=function(L,D){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(N){N.removeEventListener("medium-zoom:"+L,D,F)}),b=b.filter(function(N){return!(N.type==="medium-zoom:"+L&&N.listener.toString()===D.toString())}),z},m=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=L.target,F=function(){var T={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},ee=void 0,B=void 0;if(P.container)if(P.container instanceof Object)T=ot({},T,P.container),ee=T.width-T.left-T.right-P.margin*2,B=T.height-T.top-T.bottom-P.margin*2;else{var de=Fi(P.container)?P.container:document.querySelector(P.container),Ae=de.getBoundingClientRect(),Fe=Ae.width,We=Ae.height,Gn=Ae.left,Nn=Ae.top;T=ot({},T,{width:Fe,height:We,left:Gn,top:Nn})}ee=ee||T.width-P.margin*2,B=B||T.height-P.margin*2;var vn=E.zoomedHd||E.original,Xe=Ql(vn)?ee:vn.naturalWidth||ee,x=Ql(vn)?B:vn.naturalHeight||B,Y=vn.getBoundingClientRect(),$=Y.top,J=Y.left,ue=Y.width,ye=Y.height,h=Math.min(Math.max(ue,Xe),ee)/ue,f=Math.min(Math.max(ye,x),B)/ye,w=Math.min(h,f),R=(-J+(ee-ue)/2+P.margin+T.left)/w,C=(-$+(B-ye)/2+P.margin+T.top)/w,A="scale("+w+") translate3d("+R+"px, "+C+"px, 0)";E.zoomed.style.transform=A,E.zoomedHd&&(E.zoomedHd.style.transform=A)};return new i(function(N){if(D&&g.indexOf(D)===-1){N(z);return}var T=function Fe(){j=!1,E.zoomed.removeEventListener("transitionend",Fe),E.original.dispatchEvent(vt("medium-zoom:opened",{detail:{zoom:z}})),N(z)};if(E.zoomed){N(z);return}if(D)E.original=D;else if(g.length>0){var ee=g;E.original=ee[0]}else{N(z);return}if(E.original.dispatchEvent(vt("medium-zoom:open",{detail:{zoom:z}})),X=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,j=!0,E.zoomed=Zm(E.original),document.body.appendChild(V),P.template){var B=Fi(P.template)?P.template:document.querySelector(P.template);E.template=document.createElement("div"),E.template.appendChild(B.content.cloneNode(!0)),document.body.appendChild(E.template)}if(E.original.parentElement&&E.original.parentElement.tagName==="PICTURE"&&E.original.currentSrc&&(E.zoomed.src=E.original.currentSrc),document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",y),E.zoomed.addEventListener("transitionend",T),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(de),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,F()};var de=setInterval(function(){E.zoomedHd.complete&&(clearInterval(de),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",y),document.body.appendChild(E.zoomedHd),F())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.removeAttribute("loading");var Ae=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",Ae),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",y),document.body.appendChild(E.zoomedHd),F()})}else F()})},y=function(){return new i(function(L){if(j||!E.original){L(z);return}var D=function F(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(V),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),j=!1,E.zoomed.removeEventListener("transitionend",F),E.original.dispatchEvent(vt("medium-zoom:closed",{detail:{zoom:z}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,L(z)};j=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(vt("medium-zoom:close",{detail:{zoom:z}})),E.zoomed.addEventListener("transitionend",D)})},_=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=L.target;return E.original?y():m({target:D})},k=function(){return P},I=function(){return g},S=function(){return E.original},g=[],b=[],j=!1,X=0,P=t,E={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(n)==="[object Object]"?P=n:(n||typeof n=="string")&&c(n),P=ot({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},P);var V=Qm(P.background);document.addEventListener("click",o),document.addEventListener("keyup",l),document.addEventListener("scroll",a),window.addEventListener("resize",y);var z={open:m,close:y,toggle:_,update:r,clone:s,attach:c,detach:d,on:u,off:p,getOptions:k,getImages:I,getZoomedImage:S};return z};function Jm(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var eg=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Jm(eg);const ec=Symbol("mediumZoom"),ng=()=>{const e=Ne(ec);if(!e)throw new Error("useMediumZoom() is called without provider.");return e};var tg={};const ig="[vp-content] > img, [vp-content] :not(a) > img",og=tg,ag=kn({enhance({app:e}){const n=Xm(og);n.refresh=(t=ig)=>{n.detach(),n.attach(t)},e.provide(ec,n)},setup(){const e=ng();yi(n=>{n!=="beforeUnmount"&&e.refresh()})}}),lg=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Xl=(e,n)=>{e.classList.add(n)},Jl=(e,n)=>{e.classList.remove(n)},rg=e=>{var n;(n=e==null?void 0:e.parentNode)==null||n.removeChild(e)},Oo=(e,n,t)=>e<n?n:e>t?t:e,er=e=>(-1+e)*100,sg=(()=>{const e=[],n=()=>{const t=e.shift();t&&t(n)};return t=>{e.push(t),e.length===1&&n()}})(),cg=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(n,t)=>t.toUpperCase()),Vi=(()=>{const e=["Webkit","O","Moz","ms"],n={},t=a=>{const{style:l}=document.body;if(a in l)return a;const r=a.charAt(0).toUpperCase()+a.slice(1);let s=e.length;for(;s--;){const c=`${e[s]}${r}`;if(c in l)return c}return a},i=a=>{const l=cg(a);return n[l]??(n[l]=t(l))},o=(a,l,r)=>{a.style[i(l)]=r};return(a,l)=>{for(const r in l){const s=l[r];Object.hasOwn(l,r)&&Sm(s)&&o(a,r,s)}}})(),Cn={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Te={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:n,easing:t}=Cn,i=Te.isStarted(),o=Oo(e,Cn.minimum,1);Te.percent=o===1?null:o;const a=Te.render(!i),l=a.querySelector(Cn.barSelector);return a.offsetWidth,sg(r=>{Vi(l,{transform:`translate3d(${er(o)}%,0,0)`,transition:`all ${n}ms ${t}`}),o===1?(Vi(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(()=>{Vi(a,{transition:`all ${n}ms linear`,opacity:"0"}),setTimeout(()=>{Te.remove(),r()},n)},n)):setTimeout(()=>{r()},n)}),Te},isStarted:()=>typeof Te.percent=="number",start:()=>{Te.percent||Te.set(0);const e=()=>{setTimeout(()=>{Te.percent&&(Te.trickle(),e())},Cn.trickleSpeed)};return e(),Te},done:e=>!e&&!Te.percent?Te:Te.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:n}=Te;return n?(n=Oo(n+(typeof e=="number"?e:(1-n)*Oo(Math.random()*n,.1,.95)),0,.994),Te.set(n)):Te.start()},trickle:()=>Te.increase(Math.random()*Cn.trickleRate),render:e=>{if(Te.isRendered())return document.getElementById("nprogress");Xl(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=Cn.template;const t=n.querySelector(Cn.barSelector),i=document.querySelector(Cn.parent),o=e?"-100":er(Te.percent??0);return Vi(t,{transition:"all 0 linear",transform:`translate3d(${o}%,0,0)`}),i&&(i!==document.body&&Xl(i,"nprogress-custom-parent"),i.appendChild(n)),n},remove:()=>{Jl(document.documentElement,"nprogress-busy"),Jl(document.querySelector(Cn.parent),"nprogress-custom-parent"),rg(document.getElementById("nprogress"))}},dg=()=>{nn(()=>{const e=pt(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(t=>{n.has(t.path)||Te.start()}),e.afterEach(t=>{n.add(t.path),Te.done()})})},ug=kn({setup(){dg()}}),hg=Object.freeze(Object.defineProperty({__proto__:null,default:ug},Symbol.toStringTag,{value:"Module"})),pg=({selector:e='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{Ue("click",n=>{const t=n.target;if(t.matches(e)){const i=t.parentElement;i!=null&&i.classList.toggle("collapsed")&&i.scrollIntoView({block:"center",behavior:"instant"})}})},mg={setup(){pg()}},gg=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),fg="VUEPRESS_CODE_TAB_STORE",Ai=Ta(fg,{}),vg=ce({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:n}){const t=ze(e.active),i=we([]),o=()=>{e.tabId&&(Ai.value[e.tabId]=e.data[t.value].id)},a=(c=t.value)=>{t.value=c<i.value.length-1?c+1:0,i.value[t.value].focus()},l=(c=t.value)=>{t.value=c>0?c-1:i.value.length-1,i.value[t.value].focus()},r=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),a()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),e.tabId&&(Ai.value[e.tabId]=e.data[t.value].id)},s=()=>{if(e.tabId){const c=e.data.findIndex(({id:d})=>Ai.value[e.tabId]===d);if(c!==-1)return c}return e.active};return nn(()=>{t.value=s(),Ke(()=>e.tabId&&Ai.value[e.tabId],(c,d)=>{if(e.tabId&&c!==d){const u=e.data.findIndex(({id:p})=>p===c);u!==-1&&(t.value=u)}})}),()=>e.data.length?K("div",{class:"vp-code-tabs"},[K("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:c},d)=>{const u=d===t.value;return K("button",{type:"button",ref:p=>{p&&(i.value[d]=p)},class:["vp-code-tab-nav",{active:u}],role:"tab","aria-controls":`codetab-${e.id}-${d}`,"aria-selected":u,onClick:()=>{t.value=d,o()},onKeydown:p=>{r(p,d)}},n[`title${d}`]({value:c,isActive:u}))})),e.data.map(({id:c},d)=>{const u=d===t.value;return K("div",{class:["vp-code-tab",{active:u}],id:`codetab-${e.id}-${d}`,role:"tabpanel","aria-expanded":u},[K("div",{class:"vp-code-tab-title"},n[`title${d}`]({value:c,isActive:u})),n[`tab${d}`]({value:c,isActive:u})])})]):null}}),yg="VUEPRESS_TAB_STORE",zo=Ta(yg,{}),bg=ce({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:String},slots:Object,setup(e,{slots:n}){const t=ze(e.active),i=we([]),o=()=>{e.tabId&&(zo.value[e.tabId]=e.data[t.value].id)},a=(c=t.value)=>{t.value=c<i.value.length-1?c+1:0,i.value[t.value].focus()},l=(c=t.value)=>{t.value=c>0?c-1:i.value.length-1,i.value[t.value].focus()},r=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),a()):c.key==="ArrowLeft"&&(c.preventDefault(),l()),o()},s=()=>{if(e.tabId){const c=e.data.findIndex(({id:d})=>zo.value[e.tabId]===d);if(c!==-1)return c}return e.active};return nn(()=>{t.value=s(),Ke(()=>e.tabId&&zo.value[e.tabId],(c,d)=>{if(e.tabId&&c!==d){const u=e.data.findIndex(({id:p})=>p===c);u!==-1&&(t.value=u)}})}),()=>e.data.length?K("div",{class:"vp-tabs"},[K("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:c},d)=>{const u=d===t.value;return K("button",{type:"button",ref:p=>{p&&(i.value[d]=p)},class:["vp-tab-nav",{active:u}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":u,onClick:()=>{t.value=d,o()},onKeydown:p=>{r(p,d)}},n[`title${d}`]({value:c,isActive:u}))})),e.data.map(({id:c},d)=>{const u=d===t.value;return K("div",{class:["vp-tab",{active:u}],id:`tab-${e.id}-${d}`,role:"tabpanel","aria-expanded":u},[K("div",{class:"vp-tab-title"},n[`title${d}`]({value:c,isActive:u})),n[`tab${d}`]({value:c,isActive:u})])})]):null}}),_g={enhance:({app:e})=>{e.component("CodeTabs",vg),e.component("Tabs",bg)}},wg=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),Lg=JSON.parse(`{"logo":"/img/logo.svg","lastUpdated":false,"contributors":false,"locales":{"/":{"selectLanguageText":"语言","selectLanguageName":"English","navbar":[{"text":"anyui-LIVE","link":"/"},{"text":"anyui","link":"/docs/anyui/"},{"text":"Feedback","link":"https://gitee.com/anyui/anyui/issues"}],"sidebar":{"/docs/anyui/get-started":[{"text":"Getting Started","children":["/docs/anyui/get-started.md"]}],"/docs/anyui/guide/":[{"text":"Setup","children":["/docs/anyui/guide/0_installation.md"]},{"text":"Core Concepts","children":["/docs/anyui/guide/1_intro.md","/docs/anyui/guide/design.md","/docs/anyui/guide/font.md","/docs/anyui/guide/5_hide_lock.md","/docs/anyui/guide/3_resource.md","/docs/anyui/guide/flag-and-state.md"]},{"text":"Animation","children":["/docs/anyui/guide/animation/widget_animation.md","/docs/anyui/guide/animation/screen_animation.md","/docs/anyui/guide/animation/gif.md","/docs/anyui/guide/animation/12_lottie.md"]},{"text":"Higher Order Component","children":["/docs/anyui/guide/hoc/1_statebtn.md","/docs/anyui/guide/hoc/2_labelslider.md","/docs/anyui/guide/hoc/3_valueslider.md","/docs/anyui/guide/hoc/4_checkgroup.md","/docs/anyui/guide/hoc/6_statusbar.md","/docs/anyui/guide/hoc/7_navigatebar.md","/docs/anyui/guide/hoc/5_drawer.md"]},{"text":"Advanced Features","children":["/docs/anyui/guide/advanced/layout.md","/docs/anyui/guide/10_image_fs.md","/docs/anyui/guide/4_composite.md","/docs/anyui/guide/globalcomponents.md","/docs/anyui/guide/7_scr_mgmt.md","/docs/anyui/guide/9_comm.md"]},{"text":"Development","children":["/docs/anyui/guide/build_mode.md","/docs/anyui/guide/100_transplant.md"]},{"text":"Technical Support","children":["/docs/anyui/guide/faq.md"]}],"/docs/anyui/release/":[{"text":"Release Notes","children":["/docs/anyui/release/release-latest.md","/docs/anyui/release/release-v0.40.0.md","/docs/anyui/release/release-v0.39.0.md","/docs/anyui/release/release-v0.38.0.md","/docs/anyui/release/release-v0.37.0.md","/docs/anyui/release/release-v0.36.0.md","/docs/anyui/release/release-v0.35.0.md","/docs/anyui/release/release-v0.34.0.md","/docs/anyui/release/release-v0.33.1.md","/docs/anyui/release/release-v0.33.0.md","/docs/anyui/release/release-v0.32.0.md","/docs/anyui/release/release-v0.30.0.md","/docs/anyui/release/release-v0.28.0.md","/docs/anyui/release/release-v0.27.0.md","/docs/anyui/release/release-v0.26.0.md","/docs/anyui/release/release-v0.25.0.md","/docs/anyui/release/release-v0.22.0.md","/docs/anyui/release/release-v0.21.0.md","/docs/anyui/release/release-v0.20.0.md","/docs/anyui/release/release-v0.18.0.md","/docs/anyui/release/release-v0.17.1.md","/docs/anyui/release/release-v0.17.0.md","/docs/anyui/release/release-v0.16.0.md","/docs/anyui/release/release-v0.15.0.md","/docs/anyui/release/release-v0.14.0.md","/docs/anyui/release/release-v0.13.1.md","/docs/anyui/release/release-v0.13.0.md"]}],"/docs/anyui-LIVE/guide/":[{"text":"Introduction","children":["/docs/anyui-LIVE/guide/introduction.md"]},{"text":"Get Started","children":["/docs/anyui-LIVE/guide/get-started.md"]},{"text":"Workspace","children":["/docs/anyui-LIVE/guide/workspace.md"]},{"text":"Editor","children":["/docs/anyui-LIVE/guide/editor/Overview.md","/docs/anyui-LIVE/guide/editor/Toolbar.md","/docs/anyui-LIVE/guide/editor/Navigator.md","/docs/anyui-LIVE/guide/editor/Inspector.md","/docs/anyui-LIVE/guide/editor/Statusbar.md","/docs/anyui-LIVE/guide/editor/Settings.md","/docs/anyui-LIVE/guide/editor/canvas.md","/docs/anyui-LIVE/guide/editor/preview.md","/docs/anyui-LIVE/guide/editor/Resource.md"]},"/docs/anyui-LIVE/guide/agent.md",{"text":"Subjects","children":["/docs/anyui-LIVE/guide/Subject/image.md","/docs/anyui-LIVE/guide/Subject/font-library.md","/docs/anyui-LIVE/guide/Subject/layout.md","/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.md","/docs/anyui-LIVE/guide/Subject/override-screen-size.md","/docs/anyui-LIVE/guide/Subject/codegen.md","/docs/anyui-LIVE/guide/Subject/transplant.md","/docs/anyui-LIVE/guide/Subject/simulator.md","/docs/anyui-LIVE/guide/Subject/dynamic-display-size.md"]},"/docs/anyui-LIVE/guide/faq.md"]}},"/zh/":{"selectLanguageText":"Languages","selectLanguageName":"中文","navbar":[{"text":"anyui-LIVE","link":"/zh/"},{"text":"anyui","link":"/zh/docs/anyui/"},{"text":"反馈问题","link":"https://gitee.com/anyui/anyui/issues"}],"sidebar":{"/zh/docs/anyui/get-started":[{"text":"快速开始","children":["/zh/docs/anyui/get-started.md"]}],"/zh/docs/anyui/guide/":[{"text":"安装","children":["/zh/docs/anyui/guide/0_installation.md"]},{"text":"核心概念","children":["/zh/docs/anyui/guide/1_intro.md","/zh/docs/anyui/guide/design.md","/zh/docs/anyui/guide/font.md","/zh/docs/anyui/guide/5_hide_lock.md","/zh/docs/anyui/guide/3_resource.md","/zh/docs/anyui/guide/flag-and-state.md"]},{"text":"动画","children":["/zh/docs/anyui/guide/animation/widget_animation.md","/zh/docs/anyui/guide/animation/screen_animation.md","/zh/docs/anyui/guide/animation/gif.md","/zh/docs/anyui/guide/animation/12_lottie.md"]},{"text":"高阶组件","children":["/zh/docs/anyui/guide/hoc/1_statebtn.md","/zh/docs/anyui/guide/hoc/2_labelslider.md","/zh/docs/anyui/guide/hoc/3_valueslider.md","/zh/docs/anyui/guide/hoc/4_checkgroup.md","/zh/docs/anyui/guide/hoc/6_statusbar.md","/zh/docs/anyui/guide/hoc/7_navigatebar.md","/zh/docs/anyui/guide/hoc/5_drawer.md"]},{"text":"高级功能","children":["/zh/docs/anyui/guide/advanced/layout.md","/zh/docs/anyui/guide/10_image_fs.md","/zh/docs/anyui/guide/4_composite.md","/zh/docs/anyui/guide/globalcomponents.md","/zh/docs/anyui/guide/7_scr_mgmt.md","/zh/docs/anyui/guide/9_comm.md"]},{"text":"开发","children":["/zh/docs/anyui/guide/build_mode.md","/zh/docs/anyui/guide/100_transplant.md"]},{"text":"技术支持","children":["/zh/docs/anyui/guide/faq.md"]}],"/zh/docs/anyui/release/":[{"text":"版本说明","children":["/zh/docs/anyui/release/release-latest.md","/zh/docs/anyui/release/release-v0.40.0.md","/zh/docs/anyui/release/release-v0.39.0.md","/zh/docs/anyui/release/release-v0.38.0.md","/zh/docs/anyui/release/release-v0.37.0.md","/zh/docs/anyui/release/release-v0.36.0.md","/zh/docs/anyui/release/release-v0.35.0.md","/zh/docs/anyui/release/release-v0.34.0.md","/zh/docs/anyui/release/release-v0.33.1.md","/zh/docs/anyui/release/release-v0.33.0.md","/zh/docs/anyui/release/release-v0.32.0.md","/zh/docs/anyui/release/release-v0.30.0.md","/zh/docs/anyui/release/release-v0.28.0.md","/zh/docs/anyui/release/release-v0.27.0.md","/zh/docs/anyui/release/release-v0.26.0.md","/zh/docs/anyui/release/release-v0.25.0.md","/zh/docs/anyui/release/release-v0.22.0.md","/zh/docs/anyui/release/release-v0.21.0.md","/zh/docs/anyui/release/release-v0.20.0.md","/zh/docs/anyui/release/release-v0.18.0.md","/zh/docs/anyui/release/release-v0.17.1.md","/zh/docs/anyui/release/release-v0.17.0.md","/zh/docs/anyui/release/release-v0.16.0.md","/zh/docs/anyui/release/release-v0.15.0.md","/zh/docs/anyui/release/release-v0.14.0.md","/zh/docs/anyui/release/release-v0.13.1.md","/zh/docs/anyui/release/release-v0.13.0.md"]}],"/zh/docs/anyui-LIVE/guide/":[{"text":"介绍","children":["/zh/docs/anyui-LIVE/guide/introduction.md"]},{"text":"快速开始","children":["/zh/docs/anyui-LIVE/guide/get-started.md"]},{"text":"工作区","children":["/zh/docs/anyui-LIVE/guide/workspace.md"]},{"text":"编辑器","children":["/zh/docs/anyui-LIVE/guide/editor/Overview.md","/zh/docs/anyui-LIVE/guide/editor/Toolbar.md","/zh/docs/anyui-LIVE/guide/editor/Navigator.md","/zh/docs/anyui-LIVE/guide/editor/Inspector.md","/zh/docs/anyui-LIVE/guide/editor/Statusbar.md","/zh/docs/anyui-LIVE/guide/editor/Settings.md","/zh/docs/anyui-LIVE/guide/editor/canvas.md","/zh/docs/anyui-LIVE/guide/editor/preview.md","/zh/docs/anyui-LIVE/guide/editor/Resource.md"]},"/zh/docs/anyui-LIVE/guide/agent.md",{"text":"主题","children":["/zh/docs/anyui-LIVE/guide/Subject/image.md","/zh/docs/anyui-LIVE/guide/Subject/font-library.md","/zh/docs/anyui-LIVE/guide/Subject/layout.md","/zh/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.md","/zh/docs/anyui-LIVE/guide/Subject/override-screen-size.md","/zh/docs/anyui-LIVE/guide/Subject/codegen.md","/zh/docs/anyui-LIVE/guide/Subject/transplant.md","/zh/docs/anyui-LIVE/guide/Subject/simulator.md","/zh/docs/anyui-LIVE/guide/Subject/dynamic-display-size.md"]},"/zh/docs/anyui-LIVE/guide/faq.md"]}}},"colorMode":"auto","colorModeSwitch":true,"navbar":[],"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`),kg=ze(Lg),nc=()=>kg,tc=Symbol(""),Eg=()=>{const e=Ne(tc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Sg=(e,n)=>{const{locales:t,...i}=e;return{...i,...t==null?void 0:t[n]}},Ig=kn({enhance({app:e}){const n=nc(),t=e._context.provides[va],i=O(()=>Sg(n.value,t.routeLocale.value));e.provide(tc,i),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return i.value}}})}}),Cg=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Pe=()=>{const{pageData:e,pageFrontmatter:n,pageLang:t,siteData:i,siteLocaleData:o,...a}=fn();return{...a,page:e,frontmatter:n,lang:t,site:i,siteLocale:o,theme:nc(),themeLocale:Eg()}},ic=Symbol(""),xg=e=>{const n=(t=e.value)=>{const i=window.document.documentElement;i.dataset.theme=t?"dark":"light"};nn(()=>{Ca(e,n)}),oo(()=>{n()})},Aa=()=>{const e=Ne(ic);if(!e)throw new Error("useDarkMode() is called without provider.");return e},Tg=()=>{const{themeLocale:e}=Pe(),n=tm(),t=Ta("vuepress-color-scheme",e.value.colorMode),i=O({get(){return e.value.colorModeSwitch?t.value==="auto"?n.value:t.value==="dark":e.value.colorMode==="dark"},set(o){o===n.value?t.value="auto":t.value=o?"dark":"light"}});Kn(ic,i),xg(i)},oc=Symbol("headers"),Vg=()=>{const e=Ns(oc);if(!e)throw new Error("useHeaders() is called without provider.");return e},Ag=()=>{const{frontmatter:e,themeLocale:n}=Pe(),t=ze([]),i=O(()=>e.value.sidebarDepth??n.value.sidebarDepth??2),o=()=>{if(i.value<=0){t.value=[];return}t.value=_m({levels:[2,i.value+1],ignore:[".vp-badge"]})};zp(oc,t),yi(a=>{a==="beforeUnmount"?t.value=[]:o()})};let Po=null,Ht=null;const Rg={wait:()=>Po,pending:()=>{Po=new Promise(e=>{Ht=e})},resolve:()=>{Ht==null||Ht(),Po=null,Ht=null}},ac=()=>Rg,Rt=(e,n)=>{const{notFound:t,meta:i,path:o}=li(e,n);return t?{text:o,link:o}:{text:i.title||o,link:o}},xt=(e="",n="")=>Ys(n)||gi(n)?n:`${rh(e)}${n}`,Og=e=>({text:e.title,link:e.link,children:Ra(e.children)}),Ra=e=>e?e.map(n=>Og(n)):[],lc=(e,n)=>[{text:e.title,children:Ra(n)}],rc=(e,n,t,i="")=>{const o=(a,l)=>{var s;const r=un(a)?Rt(xt(l,a)):un(a.link)?{...a,link:Qs(a.link)?Rt(xt(l,a.link)).link:a.link}:a;if("children"in r)return{...r,children:r.children.map(c=>o(c,xt(l,r.prefix)))};if(r.link===t){const c=((s=n[0])==null?void 0:s.level)===1?n[0].children:n;return{...r,children:Ra(c)}}return r};return e.map(a=>o(a,i))},zg=(e,n,t,i)=>{const o=Im(e).sort((a,l)=>l.length-a.length);for(const a of o)if(Ks(decodeURI(i),a)){const l=e[a];return l?l==="heading"?lc(n,t):rc(l,t,i,a):[]}return console.warn(`${decodeURI(i)} is missing sidebar config.`),[]},sc=Symbol("sidebarItems"),Oa=()=>{const e=Ne(sc);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},Pg=(e,n,t,i,o)=>e===!1?[]:e==="heading"?lc(n,o):Array.isArray(e)?rc(e,o,t,i):ma(e)?zg(e,n,o,t):[],Dg=()=>{const{frontmatter:e,page:n,routeLocale:t,themeLocale:i}=Pe(),o=Vg(),a=js(),l=O(()=>e.value.home?!1:e.value.sidebar??i.value.sidebar??"heading"),r=O(()=>Pg(l.value,n.value,a.value,t.value,o.value));Kn(sc,r)},Fg=ce({__name:"Badge",props:{type:{default:"tip"},text:{default:""},vertical:{default:void 0}},setup(e){return(n,t)=>(U(),te("span",{class:Ze(["vp-badge",n.type]),style:Ot({verticalAlign:n.vertical})},[Se(n.$slots,"default",{},()=>[Fn(Ie(n.text),1)])],6))}}),Mg=ce({__name:"VPFadeSlideYTransition",emits:["beforeEnter","beforeLeave"],setup(e){return(n,t)=>(U(),Ce(pa,{name:"vp-fade-slide-y",mode:"out-in",onBeforeEnter:t[0]||(t[0]=i=>n.$emit("beforeEnter")),onBeforeLeave:t[1]||(t[1]=i=>n.$emit("beforeLeave"))},{default:xe(()=>[Se(n.$slots,"default")]),_:3}))}}),jg={key:0,class:"vp-features"},Hg=ce({__name:"VPHomeFeatures",setup(e){const{frontmatter:n}=Pe(),t=O(()=>n.value.features??[]);return(i,o)=>t.value.length?(U(),te("div",jg,[(U(!0),te(_e,null,Qn(t.value,a=>(U(),te("div",{key:a.title,class:"vp-feature"},[ie("h2",null,Ie(a.title),1),ie("p",null,Ie(a.details),1)]))),128))])):Re("",!0)}}),Gg=["innerHTML"],Ng=["textContent"],Ug=ce({__name:"VPHomeFooter",setup(e){const n=vi(),t=O(()=>n.value.footer),i=O(()=>n.value.footerHtml);return(o,a)=>t.value?(U(),te(_e,{key:0},[i.value?(U(),te("div",{key:0,class:"vp-footer","vp-footer":"",innerHTML:t.value},null,8,Gg)):(U(),te("div",{key:1,class:"vp-footer","vp-footer":"",textContent:Ie(t.value)},null,8,Ng))],64)):Re("",!0)}}),zn=ce({__name:"VPAutoLink",props:{config:{}},setup(e){return(n,t)=>(U(),Ce(Z(kp),{config:n.config},Od({before:xe(()=>[Se(n.$slots,"before",fo(zi(n.config)))]),after:xe(()=>[Se(n.$slots,"after",fo(zi(n.config)))]),_:2},[n.$slots.default?{name:"default",fn:xe(()=>[Se(n.$slots,"default",fo(zi(n.config)))]),key:"0"}:void 0]),1032,["config"]))}}),Wg={class:"vp-hero"},Bg={key:0,id:"main-title"},$g={key:1,class:"vp-hero-description"},qg={key:2,class:"vp-hero-actions"},Kg=ce({__name:"VPHomeHero",setup(e){const{frontmatter:n,siteLocale:t}=Pe(),i=Aa(),o=O(()=>n.value.heroText===null?null:n.value.heroText||t.value.title||"Hello"),a=O(()=>n.value.tagline===null?null:n.value.tagline||t.value.description||"Welcome to your VuePress site"),l=O(()=>i.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),r=O(()=>n.value.heroAlt||o.value||"hero"),s=O(()=>n.value.heroHeight??280),c=O(()=>Array.isArray(n.value.actions)?n.value.actions.map(({type:u="primary",...p})=>({type:u,...p})):[]),d=()=>{if(!l.value)return null;const u=K("img",{class:"vp-hero-image",src:La(l.value),alt:r.value,height:s.value});return n.value.heroImageDark===void 0?u:K(_a,()=>u)};return(u,p)=>(U(),te("header",Wg,[se(d),o.value?(U(),te("h1",Bg,Ie(o.value),1)):Re("",!0),a.value?(U(),te("p",$g,Ie(a.value),1)):Re("",!0),c.value.length?(U(),te("p",qg,[(U(!0),te(_e,null,Qn(c.value,m=>(U(),Ce(zn,{key:m.text,class:Ze(["vp-hero-action-button",[m.type]]),config:m},null,8,["class","config"]))),128))])):Re("",!0)]))}}),Yg={class:"vp-home"},Qg={"vp-content":""},Zg=ce({__name:"VPHome",setup(e){return(n,t)=>(U(),te("main",Yg,[se(Kg),se(Hg),ie("div",Qg,[se(Z(wa))]),se(Ug)]))}}),Xg=["aria-hidden"],Jg=ce({__name:"VPNavbarBrand",setup(e){const{routeLocale:n,siteLocale:t,themeLocale:i}=Pe(),o=Aa(),a=O(()=>i.value.home||n.value),l=O(()=>t.value.title),r=O(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),s=O(()=>i.value.logoAlt??l.value),c=O(()=>l.value.toLocaleUpperCase().trim()===s.value.toLocaleUpperCase().trim()),d=()=>{if(!r.value)return null;const u=K("img",{class:"vp-site-logo",src:La(r.value),alt:s.value});return i.value.logoDark===void 0?u:K(_a,()=>u)};return(u,p)=>(U(),Ce(Z(co),{to:a.value},{default:xe(()=>[se(d),l.value?(U(),te("span",{key:0,class:Ze(["vp-site-name",{"vp-hide-mobile":r.value}]),"aria-hidden":c.value},Ie(l.value),11,Xg)):Re("",!0)]),_:1},8,["to"]))}}),cc=ce({__name:"VPDropdownTransition",setup(e){const n=i=>{i.style.height=`${i.scrollHeight}px`},t=i=>{i.style.height=""};return(i,o)=>(U(),Ce(pa,{name:"vp-dropdown",onEnter:n,onAfterEnter:t,onBeforeLeave:n},{default:xe(()=>[Se(i.$slots,"default")]),_:3}))}}),ef=["aria-label"],nf={class:"title"},tf=["aria-label"],of={class:"title"},af={class:"vp-navbar-dropdown"},lf={class:"vp-navbar-dropdown-subtitle"},rf={key:1},sf={class:"vp-navbar-dropdown-subitem-wrapper"},cf=ce({__name:"VPNavbarDropdown",props:{config:{}},setup(e){const n=e,{config:t}=aa(n),[i,o]=Ia(),a=O(()=>t.value.ariaLabel||t.value.text),l=(s,c)=>c[c.length-1]===s,r=s=>{s.detail===0?o():o(!1)};return yi(()=>{o(!1)}),(s,c)=>(U(),te("div",{class:Ze(["vp-navbar-dropdown-wrapper",{open:Z(i)}])},[ie("button",{class:"vp-navbar-dropdown-title",type:"button","aria-label":a.value,onClick:r},[ie("span",nf,Ie(Z(t).text),1),c[1]||(c[1]=ie("span",{class:"arrow down"},null,-1))],8,ef),ie("button",{class:"vp-navbar-dropdown-title-mobile",type:"button","aria-label":a.value,onClick:c[0]||(c[0]=()=>Z(o)())},[ie("span",of,Ie(Z(t).text),1),ie("span",{class:Ze(["arrow",Z(i)?"down":"right"])},null,2)],8,tf),se(cc,null,{default:xe(()=>[Wi(ie("ul",af,[(U(!0),te(_e,null,Qn(Z(t).children,d=>(U(),te("li",{key:d.text,class:"vp-navbar-dropdown-item"},["children"in d?(U(),te(_e,{key:0},[ie("h4",lf,[d.link?(U(),Ce(zn,{key:0,config:d,onFocusout:()=>{l(d,Z(t).children)&&d.children.length===0&&(i.value=!1)}},null,8,["config","onFocusout"])):(U(),te("span",rf,Ie(d.text),1))]),ie("ul",sf,[(U(!0),te(_e,null,Qn(d.children,u=>(U(),te("li",{key:u.link,class:"vp-navbar-dropdown-subitem"},[se(zn,{config:u,onFocusout:()=>{l(u,d.children)&&l(d,Z(t).children)&&Z(o)(!1)}},null,8,["config","onFocusout"])]))),128))])],64)):(U(),Ce(zn,{key:1,config:d,onFocusout:()=>{l(d,Z(t).children)&&Z(o)(!1)}},null,8,["config","onFocusout"]))]))),128))],512),[[Ki,Z(i)]])]),_:1})],2))}}),dc=(e,n="")=>un(e)?Rt(xt(n,e)):"children"in e?{...e,children:e.children.map(t=>dc(t,xt(n,e.prefix)))}:{...e,link:Qs(e.link)?Rt(xt(n,e.link)).link:e.link},df=()=>{const{themeLocale:e}=Pe();return O(()=>(e.value.navbar||[]).map(n=>dc(n)))},uc=e=>!fi(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,uf=()=>{const{themeLocale:e}=Pe(),n=O(()=>e.value.repo),t=O(()=>n.value?uc(n.value):null),i=O(()=>n.value&&!fi(n.value)?`https://github.com/${n.value}`:n.value),o=O(()=>i.value?e.value.repoLabel?e.value.repoLabel:t.value===null?"Source":t.value:null);return O(()=>!i.value||!o.value?[]:[{text:o.value,link:i.value}])},hf=()=>{const e=mt(),n=Em(),{routeLocale:t,site:i,siteLocale:o,theme:a,themeLocale:l}=Pe();return O(()=>{const r=Object.keys(i.value.locales);if(r.length<2)return[];const s=e.path,c=e.fullPath;return[{text:`${l.value.selectLanguageText}`,ariaLabel:`${l.value.selectLanguageAriaLabel??l.value.selectLanguageText}`,children:r.map(u=>{var I,S;const p=((I=i.value.locales)==null?void 0:I[u])??{},m=((S=a.value.locales)==null?void 0:S[u])??{},y=`${p.lang}`,_=m.selectLanguageName??y;if(y===o.value.lang)return{text:_,activeMatch:".",link:e.fullPath};const k=s.replace(t.value,u);return{text:_,link:n.value.some(g=>g===k)?c.replace(s,k):m.home??u}})}]})},pf="719px",mf={mobile:pf};var ri;(function(e){e.Mobile="mobile"})(ri||(ri={}));const gf={[ri.Mobile]:Number.parseInt(mf.mobile.replace("px",""),10)},hc=(e,n)=>{const t=gf[e];Number.isInteger(t)&&(Ue("orientationchange",()=>{n(t)},!1),Ue("resize",()=>{n(t)},!1),nn(()=>{n(t)}))},ff=["aria-label"],pc=ce({__name:"VPNavbarItems",setup(e){const{themeLocale:n}=Pe(),t=df(),i=hf(),o=uf(),a=ze(!1),l=O(()=>n.value.navbarLabel??"site navigation"),r=O(()=>[...t.value,...i.value,...o.value]);return hc(ri.Mobile,s=>{a.value=window.innerWidth<s}),(s,c)=>r.value.length?(U(),te("nav",{key:0,class:"vp-navbar-items","aria-label":l.value},[(U(!0),te(_e,null,Qn(r.value,d=>(U(),te("div",{key:d.text,class:"vp-navbar-item"},["children"in d?(U(),Ce(cf,{key:0,class:Ze({mobile:a.value}),config:d},null,8,["class","config"])):(U(),Ce(zn,{key:1,config:d},null,8,["config"]))]))),128))],8,ff)):Re("",!0)}}),zt=(e,n)=>{const t=e.__vccOpts||e;for(const[i,o]of n)t[i]=o;return t},vf={},yf={class:"dark-icon",viewBox:"0 0 32 32"};function bf(e,n){return U(),te("svg",yf,[...n[0]||(n[0]=[ie("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)])])}const _f=zt(vf,[["render",bf]]),wf={},Lf={class:"light-icon",viewBox:"0 0 32 32"};function kf(e,n){return U(),te("svg",Lf,[...n[0]||(n[0]=[su('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)])])}const Ef=zt(wf,[["render",kf]]),Sf=["title"],If=ce({__name:"VPToggleColorModeButton",setup(e){const{themeLocale:n}=Pe(),t=Aa(),i=()=>{t.value=!t.value};return(o,a)=>(U(),te("button",{type:"button",class:"vp-toggle-color-mode-button",title:Z(n).toggleColorMode,onClick:i},[Wi(se(Ef,null,null,512),[[Ki,!Z(t)]]),Wi(se(_f,null,null,512),[[Ki,Z(t)]])],8,Sf))}}),Cf=["title"],xf=ce({__name:"VPToggleSidebarButton",emits:["toggle"],setup(e){const{themeLocale:n}=Pe();return(t,i)=>(U(),te("div",{class:"vp-toggle-sidebar-button",title:Z(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>t.$emit("toggle"))},[...i[1]||(i[1]=[ie("div",{class:"icon","aria-hidden":"true"},[ie("span"),ie("span"),ie("span")],-1)])],8,Cf))}}),Tf={ref:"navbar-brand"},Vf=ce({__name:"VPNavbar",emits:["toggleSidebar"],setup(e){const n=qs("SearchBox")?Kr("SearchBox"):()=>null,{themeLocale:t}=Pe(),i=Na("navbar"),o=Na("navbar-brand"),a=ze(0),l=O(()=>a.value?{maxWidth:`${a.value}px`}:{}),r=(s,c)=>{var p;const d=(p=s==null?void 0:s.ownerDocument.defaultView)==null?void 0:p.getComputedStyle(s,null)[c],u=Number.parseInt(d,10);return Number.isNaN(u)?0:u};return hc(ri.Mobile,s=>{var d;const c=r(i.value,"paddingLeft")+r(i.value,"paddingRight");window.innerWidth<s?a.value=0:a.value=i.value.offsetWidth-c-(((d=o.value)==null?void 0:d.offsetWidth)??0)}),(s,c)=>(U(),te("header",{ref_key:"navbar",ref:i,class:"vp-navbar","vp-navbar":""},[se(xf,{onToggle:c[0]||(c[0]=d=>s.$emit("toggleSidebar"))}),ie("span",Tf,[se(Jg)],512),ie("div",{class:"vp-navbar-items-wrapper",style:Ot(l.value)},[Se(s.$slots,"before"),se(pc,{class:"vp-hide-mobile"}),Se(s.$slots,"after"),Z(t).colorModeSwitch?(U(),Ce(If,{key:0})):Re("",!0),se(Z(n))],4)],512))}}),Af={},Rf={class:"edit-icon",viewBox:"0 0 1024 1024"};function Of(e,n){return U(),te("svg",Rf,[...n[0]||(n[0]=[ie("g",{fill:"currentColor"},[ie("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),ie("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})],-1)])])}const zf=zt(Af,[["render",Of]]),Pf={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Df=({docsRepo:e,editLinkPattern:n})=>{if(n)return n;const t=uc(e);return t!==null?Pf[t]:null},Ff=({docsRepo:e,docsBranch:n,docsDir:t,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const a=Df({docsRepo:e,editLinkPattern:o});return a?a.replace(/:repo/,fi(e)?e:`https://github.com/${e}`).replace(/:branch/,n).replace(/:path/,Ss(`${Es(t)}/${i}`)):null},Mf=()=>{const{frontmatter:e,page:n,themeLocale:t}=Pe();return O(()=>{if(!(e.value.editLink??t.value.editLink??!0))return null;const{repo:o,docsRepo:a=o,docsBranch:l="main",docsDir:r="",editLinkText:s}=t.value;if(!a)return null;const c=Ff({docsRepo:a,docsBranch:l,docsDir:r,filePathRelative:n.value.filePathRelative,editLinkPattern:e.value.editLinkPattern??t.value.editLinkPattern});return c?{text:s??"Edit this page",link:c}:null})},jf={class:"vp-page-meta"},Hf={key:0,class:"vp-meta-item edit-link"},Gf={class:"vp-meta-item git-info"},Nf={key:0,class:"vp-meta-item last-updated"},Uf={class:"meta-item-label"},Wf=["datetime"],Bf={key:1,class:"vp-meta-item contributors"},$f={class:"meta-item-label"},qf={class:"meta-item-info"},Kf=["title"],Yf=ce({__name:"VPPageMeta",setup(e){const{frontmatter:n,themeLocale:t}=Pe(),i=Zs(()=>n.value.contributors??t.value.contributors??!0),o=Mf(),a=Xs(()=>n.value.lastUpdated??t.value.lastUpdated??!0);return(l,r)=>(U(),te("footer",jf,[Z(o)?(U(),te("div",Hf,[se(zn,{class:"label",config:Z(o)},{before:xe(()=>[se(zf)]),_:1},8,["config"])])):Re("",!0),ie("div",Gf,[Z(a)?(U(),te("div",Nf,[ie("span",Uf,Ie(Z(t).lastUpdatedText??Z(a).locale)+": ",1),ie("time",{class:"meta-item-info",datetime:Z(a).iso,"data-allow-mismatch":""},Ie(Z(a).text),9,Wf)])):Re("",!0),Z(i).length?(U(),te("div",Bf,[ie("span",$f,Ie(Z(t).contributorsText)+": ",1),ie("span",qf,[(U(!0),te(_e,null,Qn(Z(i),(s,c)=>(U(),te(_e,{key:c},[ie("span",{class:"contributor",title:`email: ${s.email}`},Ie(s.name),9,Kf),c!==Z(i).length-1?(U(),te(_e,{key:0},[Fn(", ")],64)):Re("",!0)],64))),128))])])):Re("",!0)])]))}}),Qf=()=>{const e=pt(),n=mt();return t=>{t&&(Ys(t)?n.fullPath!==t&&e.push(t):gi(t)?window.open(t):e.push(encodeURI(t)))}},nr=(e,n)=>e===!1?!1:un(e)?Rt(e,n):ma(e)?{...e,link:Rt(e.link,n).link}:null,Qo=(e,n,t)=>{const i=e.findIndex(a=>a.link===n);if(i!==-1){const a=e[i+t];return a?a.link?a:"prefix"in a&&!li(a.prefix).notFound?{...a,link:a.prefix}:null:null}for(const a of e)if("children"in a){const l=Qo(a.children,n,t);if(l)return l}const o=e.findIndex(a=>"prefix"in a&&a.prefix===n);if(o!==-1){const a=e[o+t];return a?a.link?a:"prefix"in a&&!li(a.prefix).notFound?{...a,link:a.prefix}:null:null}return null},Zf=()=>{const{frontmatter:e,themeLocale:n}=Pe(),t=Oa(),i=js(),o=O(()=>{const l=nr(e.value.prev,i.value);return l===!1?null:l??(n.value.prev===!1?null:Qo(t.value,i.value,-1))}),a=O(()=>{const l=nr(e.value.next,i.value);return l===!1?null:l??(n.value.next===!1?null:Qo(t.value,i.value,1))});return{prevLink:o,nextLink:a}},Xf=["aria-label"],Jf={class:"hint"},ev={class:"link"},nv={class:"external-link"},tv={class:"hint"},iv={class:"link"},ov={class:"external-link"},av=ce({__name:"VPPageNav",setup(e){const{themeLocale:n}=Pe(),t=Qf(),{prevLink:i,nextLink:o}=Zf(),a=O(()=>n.value.pageNavbarLabel??"page navigation");return Ue("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?o.value&&(t(o.value.link),l.preventDefault()):l.key==="ArrowLeft"&&i.value&&(t(i.value.link),l.preventDefault()))}),(l,r)=>Z(i)||Z(o)?(U(),te("nav",{key:0,class:"vp-page-nav","aria-label":a.value},[Z(i)?(U(),Ce(zn,{key:0,class:"prev",config:Z(i)},{default:xe(()=>[ie("div",Jf,[r[0]||(r[0]=ie("span",{class:"arrow left"},null,-1)),Fn(" "+Ie(Z(n).prev??"Prev"),1)]),ie("div",ev,[ie("span",nv,Ie(Z(i).text),1)])]),_:1},8,["config"])):Re("",!0),Z(o)?(U(),Ce(zn,{key:1,class:"next",config:Z(o)},{default:xe(()=>[ie("div",tv,[Fn(Ie(Z(n).next??"Next")+" ",1),r[1]||(r[1]=ie("span",{class:"arrow right"},null,-1))]),ie("div",iv,[ie("span",ov,Ie(Z(o).text),1)])]),_:1},8,["config"])):Re("",!0)],8,Xf)):Re("",!0)}}),lv={class:"vp-page"},rv={"vp-content":""},sv=ce({__name:"VPPage",setup(e){return(n,t)=>(U(),te("main",lv,[Se(n.$slots,"top"),ie("div",rv,[Se(n.$slots,"content-top"),se(Z(wa)),Se(n.$slots,"content-bottom")]),se(Yf),se(av),Se(n.$slots,"bottom")]))}}),tr=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),cv=(e,n)=>{if(n.hash===e)return!0;const t=tr(n.path),i=tr(e);return t===i},mc=(e,n)=>e.link&&cv(e.link,n)?!0:"children"in e?e.children.some(t=>mc(t,n)):!1,dv={class:"vp-sidebar-children"},uv=ce({__name:"VPSidebarItem",props:{item:{},depth:{default:0}},setup(e){const n=e,{item:t,depth:i}=aa(n),o=mt(),a=pt(),l=O(()=>t.value.collapsible),r=O(()=>mc(t.value,o)),s=O(()=>({"vp-sidebar-item":!0,"vp-sidebar-heading":i.value===0,active:r.value,collapsible:l.value})),c=O(()=>l.value?r.value:!0),[d,u]=Ia(c.value),p=y=>{l.value&&(y.preventDefault(),u())},m=a.afterEach(()=>{hi(()=>{d.value=c.value})});return sa(()=>{m()}),(y,_)=>{const k=Kr("VPSidebarItem",!0);return U(),te("li",null,[Z(t).link?(U(),Ce(zn,{key:0,class:Ze(s.value),config:Z(t)},{after:xe(()=>[l.value?(U(),te("span",{key:0,class:Ze(["arrow",Z(d)?"down":"right"])},null,2)):Re("",!0)]),_:1},8,["class","config"])):(U(),te("p",{key:1,tabindex:"0",class:Ze(s.value),onClick:p,onKeydown:Bu(p,["enter"])},[Fn(Ie(Z(t).text)+" ",1),l.value?(U(),te("span",{key:0,class:Ze(["arrow",Z(d)?"down":"right"])},null,2)):Re("",!0)],34)),"children"in Z(t)&&Z(t).children.length?(U(),Ce(cc,{key:2},{default:xe(()=>[Wi(ie("ul",dv,[(U(!0),te(_e,null,Qn(Z(t).children,I=>(U(),Ce(k,{key:`${Z(i)}${I.text}${I.link}`,item:I,depth:Z(i)+1},null,8,["item","depth"]))),128))],512),[[Ki,Z(d)]])]),_:1})):Re("",!0)])}}}),hv={key:0,class:"vp-sidebar-items"},pv=ce({__name:"VPSidebarItems",setup(e){const n=mt(),t=Oa();return nn(()=>{Ke(()=>n.hash,i=>{const o=document.querySelector(".vp-sidebar");if(!o)return;const a=document.querySelector(`.vp-sidebar .vp-sidebar-item.auto-link[href="${n.path}${i}"]`);if(!a)return;const{top:l,height:r}=o.getBoundingClientRect(),{top:s,height:c}=a.getBoundingClientRect();s<l?a.scrollIntoView(!0):s+c>l+r&&a.scrollIntoView(!1)})}),(i,o)=>Z(t).length?(U(),te("ul",hv,[(U(!0),te(_e,null,Qn(Z(t),a=>(U(),Ce(uv,{key:`${a.text}${a.link}`,item:a},null,8,["item"]))),128))])):Re("",!0)}}),mv={class:"vp-sidebar","vp-sidebar":""},gv=ce({__name:"VPSidebar",setup(e){return(n,t)=>(U(),te("aside",mv,[se(pc),Se(n.$slots,"top"),se(pv),Se(n.$slots,"bottom")]))}}),fv=ce({__name:"Layout",setup(e){const{frontmatter:n,page:t,themeLocale:i}=Pe(),o=O(()=>n.value.navbar??i.value.navbar??!0),a=Oa(),l=ze(!1),r=k=>{l.value=typeof k=="boolean"?k:!l.value},s={x:0,y:0},c=k=>{s.x=k.changedTouches[0].clientX,s.y=k.changedTouches[0].clientY},d=k=>{const I=k.changedTouches[0].clientX-s.x,S=k.changedTouches[0].clientY-s.y;Math.abs(I)>Math.abs(S)&&Math.abs(I)>40&&(I>0&&s.x<=80?r(!0):r(!1))},u=O(()=>n.value.externalLinkIcon??i.value.externalLinkIcon??!0),p=O(()=>[{"no-navbar":!o.value,"no-sidebar":!a.value.length,"sidebar-open":l.value,"external-link-icon":u.value},n.value.pageClass]);yi(()=>{r(!1)});const m=ac(),y=m.resolve,_=m.pending;return(k,I)=>(U(),te("div",{class:Ze(["vp-theme-container",p.value]),"vp-container":"",onTouchstart:c,onTouchend:d},[Se(k.$slots,"navbar",{},()=>[o.value?(U(),Ce(Vf,{key:0,onToggleSidebar:r},{before:xe(()=>[Se(k.$slots,"navbar-before")]),after:xe(()=>[Se(k.$slots,"navbar-after")]),_:3})):Re("",!0)]),ie("div",{class:"vp-sidebar-mask",onClick:I[0]||(I[0]=S=>r(!1))}),Se(k.$slots,"sidebar",{},()=>[se(gv,null,{top:xe(()=>[Se(k.$slots,"sidebar-top")]),bottom:xe(()=>[Se(k.$slots,"sidebar-bottom")]),_:3})]),Se(k.$slots,"page",{},()=>[se(Mg,{onBeforeEnter:Z(y),onBeforeLeave:Z(_)},{default:xe(()=>[Z(n).home?(U(),Ce(Zg,{key:0})):(U(),Ce(sv,{key:Z(t).path},{top:xe(()=>[Se(k.$slots,"page-top")]),"content-top":xe(()=>[Se(k.$slots,"page-content-top")]),"content-bottom":xe(()=>[Se(k.$slots,"page-content-bottom")]),bottom:xe(()=>[Se(k.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"])])],34))}}),vv={class:"vp-theme-container","vp-container":""},yv={class:"page"},bv={"vp-content":""},_v=ce({__name:"NotFound",setup(e){const{routeLocale:n,themeLocale:t}=Pe(),i=O(()=>t.value.notFound??["Not Found"]),o=()=>i.value[Math.floor(Math.random()*i.value.length)],a=O(()=>t.value.home??n.value),l=O(()=>t.value.backToHome??"Back to home");return(r,s)=>(U(),te("div",vv,[ie("main",yv,[ie("div",bv,[s[0]||(s[0]=ie("h1",null,"404",-1)),ie("blockquote",null,Ie(o()),1),se(Z(co),{to:a.value},{default:xe(()=>[Fn(Ie(l.value),1)]),_:1},8,["to"])])])]))}}),wv=zt(_v,[["__scopeId","data-v-30fc94a0"]]),Lv=kn({enhance({app:e,router:n}){qs("Badge")||e.component("Badge",Fg);const t=n.options.scrollBehavior;n.options.scrollBehavior=async(...i)=>(await ac().wait(),t(...i))},setup(){Tg(),Ag(),Dg()},layouts:{Layout:fv,NotFound:wv}}),kv=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),Ev=[{title:"anyui-LIVE",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Video Demo",slug:"video-demo",link:"#video-demo",children:[]},{level:2,title:"Core Features",slug:"core-features",link:"#core-features",children:[{level:3,title:"Lightweight & Zero-Installation, Ready for Direct Online Use",slug:"lightweight-zero-installation-ready-for-direct-online-use",link:"#lightweight-zero-installation-ready-for-direct-online-use",children:[]},{level:3,title:"Automatic System Updates",slug:"automatic-system-updates",link:"#automatic-system-updates",children:[]},{level:3,title:"Cross-Platform Compatibility",slug:"cross-platform-compatibility",link:"#cross-platform-compatibility",children:[]},{level:3,title:"Native Rendering Support",slug:"native-rendering-support",link:"#native-rendering-support",children:[]},{level:3,title:"Live Preview Support",slug:"live-preview-support",link:"#live-preview-support",children:[]},{level:3,title:"Dynamic LVGL Version Switching",slug:"dynamic-lvgl-version-switching",link:"#dynamic-lvgl-version-switching",children:[]},{level:3,title:"Dynamic Screen-Size Support",slug:"dynamic-screen-size-support",link:"#dynamic-screen-size-support",children:[]},{level:3,title:"Per-Page Dimension Configuration",slug:"per-page-dimension-configuration",link:"#per-page-dimension-configuration",children:[]}]},{level:2,title:"Built-in AI Agent",slug:"built-in-ai-agent",link:"#built-in-ai-agent",children:[]},{level:2,title:"Contact Us",slug:"contact-us",link:"#contact-us",children:[]}],path:"/",pathLocale:"/",extraFields:["anyui-LIVE",`
  🚀 New
  Agent of anyui-LIVE is available!
  Try now →


Overview
anyui-LIVE is a web-based visual environment for LVGL product delivery. It combines project workspace management, a live editor, preview tooling, and code generation so teams can move from UI design to deployable output inside one product-focused workflow.
Video Demo

Core Features
Lightweight &amp; Zero-Installation, Ready for Direct Online Use
Unlike other LVGL design tools that often weigh hundreds of megabytes or even gigabytes, anyui-LIVE runs directly in your browser with no installation required.
Automatic System Updates
Tired of re‑downloading and reinstalling for bug fixes and new feature releases? No need. Updates are delivered automatically via your browser.
Cross-Platform Compatibility
Works on Windows, macOS and Linux — all you need is a web browser (Chrome recommended).
Native Rendering Support
Components render natively in real time during editing, delivering device-accurate output for true WYSIWYG (What-You-See-Is-What-You-Get).
Live Preview Support
Not just visuals, component behaviors can also be previewed in real time.
Dynamic LVGL Version Switching
Want to compare visuals and performance across different LVGL versions for one project? Easily switch between versions for live previews.
Dynamic Screen-Size Support
No full redesign required if your target display dimensions change after you finish your design. Leverage widget layouts and dynamic screen-size configuration for fast, effortless adaptation.
Per-Page Dimension Configuration
Too many widgets to fit on-canvas with a small target screen? Need full-screen adaptation for some pages and scrollable layouts for others, with varying dimensions per page? The ideal solution: set custom dimensions for each individual page. Preview and runtime will auto-adapt to the physical display, balancing both design freedom and real-device performance.
Built-in AI Agent
anyui-LIVE ships a built-in AI agent that integrates with the editor, so agent-built interfaces follow the exact same layout, style, and code generation pipeline as hand-built ones.

Builds real LVGL UIs — the agent creates, updates, and deletes actual widgets through the editor's own document operations, and the result exports through the normal code generation flow.
Planning &amp; approval first — every widget change starts from a plan you review and approve before the agent is allowed to modify the document.
LVGL knowledge on demand — the agent loads built-in skills to composes valid, version-correct components.
Grounded in your project — the agent reads the current screen, selection, and project configuration as context, then applies changes incrementally with progress reporting.
Bring your own model — connect the LLM endpoint you already use; credentials are kept in an encrypted local vault.

Open the Agent panel inside the editor, describe the screen you need, and start from an approved plan.
Get started with anyui-LIVE to set up a workspace, open the editor, and generate product-ready LVGL output.
Contact Us

  
    
    Cooperation
  
  
    
    WeChat Group
  
  
    
    QQ Group
  
  
    
    Subscribe
  

`,"anyui-LIVE"]},{title:"",headers:[{level:2,title:"title: Legacy Redirectsearch: falsenavbar: falsesidebar: falsepageClass: legacy-alias-page",slug:"title-legacy-redirectsearch-falsenavbar-falsesidebar-falsepageclass-legacy-alias-page",link:"#title-legacy-redirectsearch-falsenavbar-falsesidebar-falsepageclass-legacy-alias-page",children:[]}],path:"/get-started.html",pathLocale:"/",extraFields:["",`

title: Legacy Redirect
search: false
navbar: false
sidebar: false
pageClass: legacy-alias-page
This page has moved to the explicit anyui product path.
`]},{title:"anyui-LIVE",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"核心功能",slug:"核心功能",link:"#核心功能",children:[{level:3,title:"轻量级、零安装，直接在线使用",slug:"轻量级、零安装-直接在线使用",link:"#轻量级、零安装-直接在线使用",children:[]},{level:3,title:"自动更新",slug:"自动更新",link:"#自动更新",children:[]},{level:3,title:"跨平台兼容",slug:"跨平台兼容",link:"#跨平台兼容",children:[]},{level:3,title:"原生渲染支持",slug:"原生渲染支持",link:"#原生渲染支持",children:[]},{level:3,title:"实时预览支持",slug:"实时预览支持",link:"#实时预览支持",children:[]},{level:3,title:"动态 LVGL 版本切换",slug:"动态-lvgl-版本切换",link:"#动态-lvgl-版本切换",children:[]},{level:3,title:"动态屏幕尺寸支持",slug:"动态屏幕尺寸支持",link:"#动态屏幕尺寸支持",children:[]},{level:3,title:"每页独立尺寸配置",slug:"每页独立尺寸配置",link:"#每页独立尺寸配置",children:[]}]},{level:2,title:"内置智能AI助手",slug:"内置智能ai助手",link:"#内置智能ai助手",children:[]},{level:2,title:"联系我们",slug:"联系我们",link:"#联系我们",children:[]}],path:"/zh/",pathLocale:"/zh/",extraFields:["anyui-LIVE",`
  🚀 新功能
  anyui-LIVE 智能AI助手来了！
  马上体验 →


概述
anyui-LIVE 是一个面向 LVGL 产品交付的 Web 可视化环境。它将项目工作区管理、实时编辑器、预览能力与代码生成整合在同一套产品工作流中，帮助团队从界面设计走到可部署输出。

核心功能
轻量级、零安装，直接在线使用
与其他动辄数百 MB 甚至 GB 的 LVGL 设计工具不同，anyui-LIVE 直接在浏览器中运行，无需安装任何软件。
自动更新
还在为修复 Bug 和新功能反复下载、重新安装而烦恼吗？不需要。更新将通过浏览器自动完成。
跨平台兼容
支持 Windows、macOS 和 Linux —— 你只需要一个浏览器（推荐使用 Chrome）。
原生渲染支持
编辑过程中组件以原生方式渲染，输出结果与真实设备一致，真正做到「所见即所得」(WYSIWYG)。
实时预览支持
不仅是视觉效果，组件的交互行为也能实时预览。
动态 LVGL 版本切换
想对比同一个项目在不同 LVGL 版本下的视觉效果与性能表现？轻松切换版本即可进行实时预览。
动态屏幕尺寸支持
设计完成后，如果目标显示尺寸发生变化，也无需重新设计。借助组件布局和动态屏幕尺寸配置，快速、轻松地完成适配。
每页独立尺寸配置
目标屏幕太小，画布上的组件放不下？有些页面需要全屏适配，有些页面需要可滚动布局，各页尺寸各不相同？理想方案：为每个页面单独设置自定义尺寸。预览与运行时将自动适配物理显示，兼顾设计自由度与真机性能。
内置智能AI助手
anyui-LIVE 内置智能 AI 助手，与编辑器无缝集成，因此由 Agent 构建的界面在布局、样式与代码生成流程上与手工设计完全一致。

构建真实的 LVGL 界面 —— Agent 通过编辑器自身的文档操作来创建、更新和删除真实组件，产物可走正常的代码生成流程导出。
先规划、再审批 —— 任何组件变更都会先给出计划，经你确认后 Agent 才会改动文档。
按需加载 LVGL 知识 —— Agent 会加载内置技能，确保生成合法且版本正确的组件。
贴合当前项目 —— Agent 会读取当前页面、选中项与项目配置作为上下文，并逐步应用变更、实时汇报进度。
自带模型接入 —— 可接入你已有的 LLM 端点，凭据保存在本地加密保险库中。

在编辑器内打开 Agent 面板，描述你需要的界面，即可从一份经过审批的计划开始构建。
开始使用 anyui-LIVE，从工作区创建项目、进入编辑器并生成面向产品交付的 LVGL 输出。
联系我们

  
    
    合作咨询
  
  
    
    微信交流群
  
  
    
    QQ交流群
  
  
    
    公众号
  

`,"anyui-LIVE"]},{title:"",headers:[{level:2,title:"title: 旧地址跳转search: falsenavbar: falsesidebar: falsepageClass: legacy-alias-page",slug:"title-旧地址跳转search-falsenavbar-falsesidebar-falsepageclass-legacy-alias-page",link:"#title-旧地址跳转search-falsenavbar-falsesidebar-falsepageclass-legacy-alias-page",children:[]}],path:"/zh/get-started.html",pathLocale:"/zh/",extraFields:["",`

title: 旧地址跳转
search: false
navbar: false
sidebar: false
pageClass: legacy-alias-page
该页面已迁移到新的 anyui 产品路径。
`]},{title:"LVGL Master Designer",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[{level:3,title:"Core Capabilities",slug:"core-capabilities",link:"#core-capabilities",children:[]}]},{level:2,title:"Contact Us",slug:"contact-us",link:"#contact-us",children:[]}],path:"/docs/anyui/",pathLocale:"/",extraFields:["LVGL Master Designer",`
🚀 anyui 1.0.0 is coming, check release notes


  

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
  

`]},{title:"Getting Started",headers:[{level:2,title:"Installation",slug:"installation",link:"#installation",children:[]},{level:2,title:"Project Creation",slug:"project-creation",link:"#project-creation",children:[]},{level:2,title:"Design Environment Layout",slug:"design-environment-layout",link:"#design-environment-layout",children:[]},{level:2,title:"Design Workflow",slug:"design-workflow",link:"#design-workflow",children:[]},{level:2,title:"Code Generation",slug:"code-generation",link:"#code-generation",children:[]},{level:2,title:"Simulation",slug:"simulation",link:"#simulation",children:[]},{level:2,title:"Project Persistence",slug:"project-persistence",link:"#project-persistence",children:[]},{level:2,title:"Next Steps",slug:"next-steps",link:"#next-steps",children:[]}],path:"/docs/anyui/get-started.html",pathLocale:"/",extraFields:["Getting Started",`This guide provides concise instructions to help you quickly get started with anyui for LVGL UI development.
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
`]},{title:"Installation",headers:[{level:2,title:"Windows 10+",slug:"windows-10",link:"#windows-10",children:[]},{level:2,title:"Mac (x86)",slug:"mac-x86",link:"#mac-x86",children:[]},{level:2,title:"Linux",slug:"linux",link:"#linux",children:[]}],path:"/docs/anyui/guide/0_installation.html",pathLocale:"/",extraFields:["Installation",`Windows 10+
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

`]},{title:"Code Transplant",headers:[{level:2,title:"Summary",slug:"summary",link:"#summary",children:[]},{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Transplant Process",slug:"transplant-process",link:"#transplant-process",children:[{level:3,title:"UI Code",slug:"ui-code",link:"#ui-code",children:[]},{level:3,title:"SDK",slug:"sdk",link:"#sdk",children:[]},{level:3,title:"Dummy Code",slug:"dummy-code",link:"#dummy-code",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]}],path:"/docs/anyui/guide/100_transplant.html",pathLocale:"/",extraFields:["Code Transplant",`Summary
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

`]},{title:"Use External Image File as Source",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[{level:3,title:"Enable External Image Support",slug:"enable-external-image-support",link:"#enable-external-image-support",children:[]},{level:3,title:"File System Driver Implementation",slug:"file-system-driver-implementation",link:"#file-system-driver-implementation",children:[]}]},{level:2,title:"Important Considerations",slug:"important-considerations",link:"#important-considerations",children:[]}],path:"/docs/anyui/guide/10_image_fs.html",pathLocale:"/",extraFields:["Use External Image File as Source",`Overview
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


`]},{title:"Introduction",headers:[{level:2,title:"Component",slug:"component",link:"#component",children:[{level:3,title:"Basic Component",slug:"basic-component",link:"#basic-component",children:[]},{level:3,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:3,title:"Template Component",slug:"template-component",link:"#template-component",children:[]},{level:3,title:"Global Component",slug:"global-component",link:"#global-component",children:[]}]},{level:2,title:"Property",slug:"property",link:"#property",children:[]},{level:2,title:"Style",slug:"style",link:"#style",children:[]},{level:2,title:"Action",slug:"action",link:"#action",children:[]},{level:2,title:"Command",slug:"command",link:"#command",children:[]},{level:2,title:"Event",slug:"event",link:"#event",children:[]}],path:"/docs/anyui/guide/1_intro.html",pathLocale:"/",extraFields:["Introduction",`Component
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
`]},{title:"Resource Management",headers:[{level:2,title:"Image Management",slug:"image-management",link:"#image-management",children:[]},{level:2,title:"Font Management",slug:"font-management",link:"#font-management",children:[]},{level:2,title:"Lottie Management",slug:"lottie-management",link:"#lottie-management",children:[]}],path:"/docs/anyui/guide/3_resource.html",pathLocale:"/",extraFields:["Resource Management",`Image Management
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

`]},{title:"Template Component",headers:[{level:2,title:"Save Template Component",slug:"save-template-component",link:"#save-template-component",children:[]},{level:2,title:"Modify Template Component",slug:"modify-template-component",link:"#modify-template-component",children:[]}],path:"/docs/anyui/guide/4_composite.html",pathLocale:"/",extraFields:["Template Component",`Template components are user-defined component templates. Users can persist modified properties and styles of components as reusable template components.
Template components can encapsulate subcomponents, allowing entire container hierarchies with their child components to be saved as a single template.
Save Template Component
To create a template component, select the desired component, right-click, and choose &quot;Save as Template Component&quot; from the context menu.

Template components can be utilized in the same manner as standard components.
Modify Template Component
For existing template components, users can modify the name or delete the template through the template component settings interface.


Warning
Template components only preserve component properties and styles, excluding event handlers and behaviors.

`]},{title:"Hide and Lock",headers:[{level:2,title:"Hide and Show Components",slug:"hide-and-show-components",link:"#hide-and-show-components",children:[{level:3,title:"Hidden Component Interactions",slug:"hidden-component-interactions",link:"#hidden-component-interactions",children:[]}]},{level:2,title:"Lock and Unlock Components",slug:"lock-and-unlock-components",link:"#lock-and-unlock-components",children:[]}],path:"/docs/anyui/guide/5_hide_lock.html",pathLocale:"/",extraFields:["Hide and Lock",`Hide and Show Components
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

`]},{title:"Screen Management",headers:[{level:2,title:"Enable Screen Management",slug:"enable-screen-management",link:"#enable-screen-management",children:[]},{level:2,title:"Configure Main Screen",slug:"configure-main-screen",link:"#configure-main-screen",children:[]},{level:2,title:"Implement Navigation",slug:"implement-navigation",link:"#implement-navigation",children:[]},{level:2,title:"Create Screen Transitions",slug:"create-screen-transitions",link:"#create-screen-transitions",children:[]}],path:"/docs/anyui/guide/7_scr_mgmt.html",pathLocale:"/",extraFields:["Screen Management",`Modern applications typically consist of multiple screens, including a primary screen and several sub-screens. Users navigate from the main screen to sub-screens and subsequently return to the main screen. Without proper screen management, manual screen switching would be required.
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
`]},{title:"Communication Commands and Events",headers:[{level:2,title:"Communication Commands",slug:"communication-commands",link:"#communication-commands",children:[]},{level:2,title:"Communication Events",slug:"communication-events",link:"#communication-events",children:[{level:3,title:"Status and Action of Communication Events",slug:"status-and-action-of-communication-events",link:"#status-and-action-of-communication-events",children:[]}]},{level:2,title:"Default Available Commands and Events",slug:"default-available-commands-and-events",link:"#default-available-commands-and-events",children:[]}],path:"/docs/anyui/guide/9_comm.html",pathLocale:"/",extraFields:["Communication Commands and Events",`Communication commands and events provide a mechanism for interaction between the application layer and the underlying hardware layer of the device.
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

`]},{title:"Documentation",headers:[{level:2,title:"Setup",slug:"setup",link:"#setup",children:[]},{level:2,title:"Core Concepts",slug:"core-concepts",link:"#core-concepts",children:[]},{level:2,title:"Higher Order Component",slug:"higher-order-component",link:"#higher-order-component",children:[]},{level:2,title:"Animation",slug:"animation",link:"#animation",children:[]},{level:2,title:"Advanced Features",slug:"advanced-features",link:"#advanced-features",children:[]},{level:2,title:"Development",slug:"development",link:"#development",children:[]},{level:2,title:"Technical Support",slug:"technical-support",link:"#technical-support",children:[]},{level:2,title:"Documentation Structure",slug:"documentation-structure",link:"#documentation-structure",children:[]}],path:"/docs/anyui/guide/",pathLocale:"/",extraFields:["Documentation",`This documentation provides comprehensive technical guidance for developing LVGL user interfaces using anyui's visual development environment.
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
`]},{title:"Build Mode",headers:[{level:2,title:"Full",slug:"full",link:"#full",children:[]},{level:2,title:"Incremental",slug:"incremental",link:"#incremental",children:[]},{level:2,title:"Mini",slug:"mini",link:"#mini",children:[]}],path:"/docs/anyui/guide/build_mode.html",pathLocale:"/",extraFields:["Build Mode",`Build Mode
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

`]},{title:"Design",headers:[{level:2,title:"Create Components",slug:"create-components",link:"#create-components",children:[]},{level:2,title:"Select Components",slug:"select-components",link:"#select-components",children:[]},{level:2,title:"Multi-Select Components",slug:"multi-select-components",link:"#multi-select-components",children:[]},{level:2,title:"Move Components",slug:"move-components",link:"#move-components",children:[]},{level:2,title:"Resize Components",slug:"resize-components",link:"#resize-components",children:[{level:3,title:"Proportional Resizing",slug:"proportional-resizing",link:"#proportional-resizing",children:[]}]},{level:2,title:"Duplicate Components",slug:"duplicate-components",link:"#duplicate-components",children:[]},{level:2,title:"Delete Components",slug:"delete-components",link:"#delete-components",children:[]},{level:2,title:"Align Components",slug:"align-components",link:"#align-components",children:[]},{level:2,title:"Zoom Controls",slug:"zoom-controls",link:"#zoom-controls",children:[]},{level:2,title:"Move Canvas",slug:"move-canvas",link:"#move-canvas",children:[]}],path:"/docs/anyui/guide/design.html",pathLocale:"/",extraFields:["Design",`anyui provides an intuitive visual design environment for creating sophisticated user interfaces. The platform offers drag-and-drop functionality with precise component layout controls, enabling efficient UI development.
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
`]},{title:"FAQ",headers:[{level:2,title:"Build and Run",slug:"build-and-run",link:"#build-and-run",children:[{level:3,title:"Why do I encounter build errors even with an empty project on Windows?",slug:"why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",link:"#why-do-i-encounter-build-errors-even-with-an-empty-project-on-windows",children:[]},{level:3,title:"Why does it take a long time to build the project?",slug:"why-does-it-take-a-long-time-to-build-the-project",link:"#why-does-it-take-a-long-time-to-build-the-project",children:[]},{level:3,title:"Why are all the projects missing after upgrading to v0.37.0?",slug:"why-are-all-the-projects-missing-after-upgrading-to-v0-37-0",link:"#why-are-all-the-projects-missing-after-upgrading-to-v0-37-0",children:[]},{level:3,title:"Why does the project build and run successfully on Windows but fail after upgrading to v0.37.0?",slug:"why-does-the-project-build-and-run-successfully-on-windows-but-fail-after-upgrading-to-v0-37-0",link:"#why-does-the-project-build-and-run-successfully-on-windows-but-fail-after-upgrading-to-v0-37-0",children:[]},{level:3,title:"How to change screen dimensions after project creation?",slug:"how-to-change-screen-dimensions-after-project-creation",link:"#how-to-change-screen-dimensions-after-project-creation",children:[]}]}],path:"/docs/anyui/guide/faq.html",pathLocale:"/",extraFields:["FAQ",`Build and Run
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

How to change screen dimensions after project creation?
Start from v1.0.0, you can change the screen dimensions in the project configuration.
Navigate to Project config… → Screen, enter the desired dimensions, and save the configuration.
`]},{title:"Flag and State",headers:[{level:2,title:"Flag",slug:"flag",link:"#flag",children:[{level:3,title:"Initial Flags",slug:"initial-flags",link:"#initial-flags",children:[]},{level:3,title:"Modifying Flags",slug:"modifying-flags",link:"#modifying-flags",children:[]}]},{level:2,title:"State",slug:"state",link:"#state",children:[{level:3,title:"Initial States",slug:"initial-states",link:"#initial-states",children:[]},{level:3,title:"Modifying States",slug:"modifying-states",link:"#modifying-states",children:[]}]}],path:"/docs/anyui/guide/flag-and-state.html",pathLocale:"/",extraFields:["Flag and State",`Flag and State
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

`]},{title:"Font",headers:[],path:"/docs/anyui/guide/font.html",pathLocale:"/",extraFields:["Font",`Follow these steps to use a font.


Add the font in Font Management.


Go to Project config... -&gt; Font.




Create a font library.



Fill in the font library settings.

Font name: The name of the font library. It is also part of the generated font variable name.
Font asset: The font file used by this library. Add it to Font Management first.
Font size: The font size to use.
Bpp: Bits per pixel for the font.
Letters: Preset letters included in the font.
Range: Character range included in the font.
Symbols: Additional characters included in the font.
Flags: Extra options for font conversion. The default value is --no-compress --no-prefilter.

--no-compress: Do not compress the font.
--no-prefilter: Do not prefilter the font.





For most users, the most important items are:

Font name: Use a meaningful name.
Font asset: Select the correct font file.
Range and/or Symbols: At least one of them must not be empty.

If you are not familiar with the other options, keep their default values.
`]},{title:"Global Components",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Global Status Bar",slug:"global-status-bar",link:"#global-status-bar",children:[{level:3,title:"Enable Global Status Bar",slug:"enable-global-status-bar",link:"#enable-global-status-bar",children:[]},{level:3,title:"Global Component View",slug:"global-component-view",link:"#global-component-view",children:[]}]},{level:2,title:"Video Demonstration",slug:"video-demonstration",link:"#video-demonstration",children:[]},{level:2,title:"How long does it take to implement a global status bar?",slug:"how-long-does-it-take-to-implement-a-global-status-bar",link:"#how-long-does-it-take-to-implement-a-global-status-bar",children:[]}],path:"/docs/anyui/guide/globalcomponents.html",pathLocale:"/",extraFields:["Global Components",`Overview
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

`]},{title:"Latest Release",headers:[{level:2,title:"v1.0.0 Release Notes",slug:"v1-0-0-release-notes",link:"#v1-0-0-release-notes",children:[{level:3,title:"🚀 Major Features",slug:"🚀-major-features",link:"#🚀-major-features",children:[]}]}],path:"/docs/anyui/release/release-latest.html",pathLocale:"/",extraFields:["Latest Release",`v1.0.0 Release Notes
🚀 Major Features
App Marketplace

Upload, browse, and download apps through the integrated marketplace
Create new projects directly from downloaded apps

Custom Font Library

Complete customization of font libraries
Full integration with the design environment for seamless font management


Info
This grants complete control over font customization, but introduces breaking changes:
You must create a font library in the project configuration and then re-select fonts for all text-related components.

Read more
Flex Layout System

Advanced flexbox layout capabilities for screen component arrangement
Enhanced flexibility in UI design and component positioning

Read more
Unified Settings Dialog

Redesigned settings interface with consistent design
Improved intuitiveness and user-friendly navigation

Widget Preview System

Enhanced widget bar and template component manager with preview functionality
Visual widget selection with real-time preview capabilities

Dynamic Screen Sizing

Modify screen dimensions after project creation
Flexible adaptation to different display requirements

Read more
Other Updates

Removed pre-embedded non-LVGL native fonts
Various performance optimizations and stability improvements
Bug fixes and reliability enhancements

Windows-v1.0.0
macOS-v1.0.0
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.13.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.13.0.html",pathLocale:"/",extraFields:["0.13.0",`Release Notes

Add &quot;About&quot; for system information
Optimize performance
Fix zoom in/out compatibility issue
Reduce build time of project for both incemental build and full build
Improve UI/UX
Misc items

Windows-v0.13.0
Mac-v0.13.0
`,"release"]},{title:"0.13.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.13.1.html",pathLocale:"/",extraFields:["0.13.1",`Release Notes

Fix style of some attrbiute editor

Windows-v0.13.1
Mac-v0.13.1
`,"release"]},{title:"0.14.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.14.0.html",pathLocale:"/",extraFields:["0.14.0",`Release Notes

Support Portrait mode when creating a new project
Support adjustable of SideBar, CodeBox, LogBox and attribute editor
Other improvement

Windows-v0.14.0
Mac-v0.14.0
`,"release"]},{title:"0.15.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.15.0.html",pathLocale:"/",extraFields:["0.15.0",`Release Notes

Support new version check, and show update icon on toolbar if avaiable



Other improvements

Windows-v0.15.0
Mac-v0.15.0
`,"release"]},{title:"0.16.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.16.0.html",pathLocale:"/",extraFields:["0.16.0",`Release Notes

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
`,"release"]},{title:"0.17.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.17.0.html",pathLocale:"/",extraFields:["0.17.0",`Release Notes

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
`,"release"]},{title:"0.17.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.17.1.html",pathLocale:"/",extraFields:["0.17.1",`Release Notes

Go directly to open the project after it's being created
Verify if project name existed when creating new project
Fix color depth issue when creating new project
Fix project name can't be deleted completely when creating new project

Windows-v0.17.1
Mac-v0.17.1
`,"release"]},{title:"0.18.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.18.0.html",pathLocale:"/",extraFields:["0.18.0",`Release Notes

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
`,"release"]},{title:"0.20.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.20.0.html",pathLocale:"/",extraFields:["0.20.0",`Release Notes

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
`,"release"]},{title:"0.21.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.21.0.html",pathLocale:"/",extraFields:["0.21.0",`Release Notes

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
`,"release"]},{title:"0.22.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.22.0.html",pathLocale:"/",extraFields:["0.22.0",` -->

Release Notes

Add new widgets: Animimg (Animated Image) and Roller
Add new higher order components: Check Group and Radio Group, capable of state self-managed
Highlight screens when image/font/lottie reference is not found
Fix slider knob position issue for Labelslider
Fix font add/remove causing data re-init issue
Other fixes and improvements

Windows-v0.22.0
Mac-v0.22.0
`,"release"]},{title:"0.25.0",headers:[{level:2,title:"5 minutes to create a LVGL app framework",slug:"_5-minutes-to-create-a-lvgl-app-framework",link:"#_5-minutes-to-create-a-lvgl-app-framework",children:[]},{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/docs/anyui/release/release-v0.25.0.html",pathLocale:"/",extraFields:["0.25.0",`5 minutes to create a LVGL app framework

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
`,"release"]},{title:"0.26.0",headers:[{level:2,title:"Create a circular display app supporting screen swipe gesture",slug:"create-a-circular-display-app-supporting-screen-swipe-gesture",link:"#create-a-circular-display-app-supporting-screen-swipe-gesture",children:[]},{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.26.0.html",pathLocale:"/",extraFields:["0.26.0",`Create a circular display app supporting screen swipe gesture

Windows-v0.26.0 Download
Mac-v0.26.0 Download
Release Notes

Support circle display shape for new project
Support Arc widget
Support swipe gesture for screen
Hide StatusBar &amp; NaivigateBar &amp; Drawer if display shape is circle
Other fixes and improvements

`,"release"]},{title:"0.27.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.27.0.html",pathLocale:"/",extraFields:["0.27.0",`
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
`,"release"]},{title:"0.28.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.28.0.html",pathLocale:"/",extraFields:["0.28.0",`
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
`,"release"]},{title:"0.30.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.30.0.html",pathLocale:"/",extraFields:["0.30.0",`
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
`,"release"]},{title:"0.32.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.32.0.html",pathLocale:"/",extraFields:["0.32.0",`
Release Notes

Support LVGL v9
Support global widget search
Other fixes and improvements

Windows-v0.32.0 Download
Mac-v0.32.0 Download
`,"release"]},{title:"0.33.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.33.0.html",pathLocale:"/",extraFields:["0.33.0",`
Release Notes

Add full screen mode to maximize canvas edit area
Add QR code widget
Re-design toolbar
Other fixes and improvements

Windows-v0.33.0 Download
Mac-v0.33.0 Download
`,"release"]},{title:"0.33.1",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.33.1.html",pathLocale:"/",extraFields:["0.33.1",`Release Notes

Fix: image display error under 16bit color depth
Fix: widget layers changed when dragging into container
Fix: widget background color mighted be changed when some other widget dragged into container and overlapped
Fix: screen background cannot be changed
Other fixes and optimizations

Windows-v0.33.1 Download
Mac-v0.33.1 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.34.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.34.0.html",pathLocale:"/",extraFields:["0.34.0",`Release Notes

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.35.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]}],path:"/docs/anyui/release/release-v0.35.0.html",pathLocale:"/",extraFields:["0.35.0",`Release Notes

Add new widget: Spinner
Support gradient color for background
Support color picker
Support image for Qrcode
Fix Tabview issue
Fix NavigateBar code generation issue
Other fixes and improvements

Windows-v0.35.0 Download
Mac-v0.35.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.36.0",headers:[{level:2,title:"Release Notes",slug:"release-notes",link:"#release-notes",children:[]},{level:2,title:"Video Demo",slug:"video-demo",link:"#video-demo",children:[]}],path:"/docs/anyui/release/release-v0.36.0.html",pathLocale:"/",extraFields:["0.36.0",`Release Notes

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.37.0",headers:[{level:2,title:"Key Features",slug:"key-features",link:"#key-features",children:[]},{level:2,title:"Build Toolchain Configuration",slug:"build-toolchain-configuration",link:"#build-toolchain-configuration",children:[{level:3,title:"Windows Build Toolchain",slug:"windows-build-toolchain",link:"#windows-build-toolchain",children:[]},{level:3,title:"macOS Build Toolchain",slug:"macos-build-toolchain",link:"#macos-build-toolchain",children:[]}]},{level:2,title:"Download",slug:"download",link:"#download",children:[]}],path:"/docs/anyui/release/release-v0.37.0.html",pathLocale:"/",extraFields:["0.37.0",`anyui v0.37.0 Release Notes
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
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.38.0",headers:[{level:2,title:"v0.38.0 Release Notes",slug:"v0-38-0-release-notes",link:"#v0-38-0-release-notes",children:[]},{level:2,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:2,title:"Download",slug:"download",link:"#download",children:[]}],path:"/docs/anyui/release/release-v0.38.0.html",pathLocale:"/",extraFields:["0.38.0",`v0.38.0 Release Notes
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
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.39.0",headers:[{level:2,title:"v0.39.0 Release Notes",slug:"v0-39-0-release-notes",link:"#v0-39-0-release-notes",children:[{level:3,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:3,title:"Download",slug:"download",link:"#download",children:[]}]}],path:"/docs/anyui/release/release-v0.39.0.html",pathLocale:"/",extraFields:["0.39.0",`v0.39.0 Release Notes
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
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"0.40.0",headers:[{level:2,title:"v0.40.0 Release Notes",slug:"v0-40-0-release-notes",link:"#v0-40-0-release-notes",children:[{level:3,title:"Key Improvements",slug:"key-improvements",link:"#key-improvements",children:[]},{level:3,title:"Download",slug:"download",link:"#download",children:[]}]}],path:"/docs/anyui/release/release-v0.40.0.html",pathLocale:"/",extraFields:["0.40.0",`v0.40.0 Release Notes
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
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"Latest Release",headers:[{level:2,title:"v0.40.1 Release Notes",slug:"v0-40-1-release-notes",link:"#v0-40-1-release-notes",children:[]}],path:"/docs/anyui/release/release-v0.40.1.html",pathLocale:"/",extraFields:["Latest Release",`v0.40.1 Release Notes
This release fix potential build error.
Windows-v0.40.1
macOS-v0.40.1
`,"LVGL","HMI","UI","embedded application","modal components","interface","design","release"]},{title:"Guide",headers:[{level:2,title:"Get Started",slug:"get-started",link:"#get-started",children:[]},{level:2,title:"Workspace",slug:"workspace",link:"#workspace",children:[]},{level:2,title:"Editor",slug:"editor",link:"#editor",children:[]},{level:2,title:"Agent",slug:"agent",link:"#agent",children:[]},{level:2,title:"Subjects",slug:"subjects",link:"#subjects",children:[]}],path:"/docs/anyui-LIVE/guide/",pathLocale:"/",extraFields:["Guide",`This section collects anyui-LIVE specific guidance. Use the documentation index below to explore each subject and workflow.
Get Started

Get Started - prerequisites, setup, and initial steps

Workspace

Workspace - workspace configuration and setup

Editor

Overview - the editor interface and its components
Preview - preview functionality and usage
Resource management - importing images and fonts

Agent

Agent - natural-language UI building with the integrated agent

Subjects


Image - image handling, optimization, and usage


Font library - font library creation and typography


Layout - flex layout for arranging child widgets


Dynamic LVGL version - switching the LVGL runtime version at runtime


Override screen size - overriding the display resolution at runtime


Codegen - code generation and configuration


Transplant - migration and integration with other systems


Simulator - running the application on a local machine


Dynamic Display Size Change - change the display size in the editor and adapt the UI with responsive layout


FAQ - answers to common questions, including interrupted connections


`,"anyui-LIVE"]},{title:"Agent",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Accessing the agent",slug:"accessing-the-agent",link:"#accessing-the-agent",children:[]},{level:2,title:"LLM model configuration",slug:"llm-model-configuration",link:"#llm-model-configuration",children:[]},{level:2,title:"Building a UI with the agent",slug:"building-a-ui-with-the-agent",link:"#building-a-ui-with-the-agent",children:[]},{level:2,title:"Conversation history",slug:"conversation-history",link:"#conversation-history",children:[]},{level:2,title:"Agent settings",slug:"agent-settings",link:"#agent-settings",children:[{level:3,title:"Max iterations",slug:"max-iterations",link:"#max-iterations",children:[]}]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/agent.html",pathLocale:"/",extraFields:["Agent",`The agent is an AI assistant built into the editor. It is deeply integrated with the editing environment: it stays aware of the current editor context and edits the document to update the user interface for you.
Overview
The agent runs as a panel inside the editor, so it works on the document you are editing rather than on a detached copy:

It receives the current editor context, including the document, the current selection, and the runtime version.
It creates, updates, and deletes widgets by editing the document, so the canvas reflects every change immediately.
Every change is an ordinary document edit, so it can be reviewed and undone with the toolbar's undo/redo commands.

Accessing the agent
Click the Agent icon in the toolbar to open the agent panel. The icon sits in the preview bar, next to the preview toggle and the runtime version selector.

LLM model configuration
Configure the model the agent uses in the agent panel's settings. When no API key is stored yet, the panel shows a prompt that opens the same configuration dialog.

Open the model settings from the agent panel.
Select a provider and a model from the available options.
Enter the API key for that provider and save.

Recommended providers:



Provider
Models




DeepSeek
Recommended. Use the DeepSeek series models.


Qianwen
Recommended. Use the Qwen series models.



Other providers are also available; pick one you already have API access to.
API keys are encrypted before they are stored and are decrypted automatically when the editor starts, so there is no passphrase to unlock. See the FAQ for model selection and connectivity issues.

Warning
Avoid using a VPN connection. Enterprise VPNs, proxies, and antivirus software can reset long-lived connections, which interrupts the streaming channel between the agent and the model and makes the agent display an offline status.

Building a UI with the agent

Open the agent panel from the toolbar.
Describe the UI you want in natural language: the screens, widgets, text, and layout you need.
The agent reads the current context and makes a plan, then executes the plan after it's confirmed.
Review the result on the canvas. If it is not what you want, keep the conversation going or undo the change from the toolbar.

Because the agent edits the same document you do, changes appear on the canvas as they are applied, and the document stays the single source of truth for code generation.
Conversation history
Your conversations with the agent are stored automatically, so they stay available after you close the panel or reload the editor. Use the agent panel's toolbar to review previous conversations.
Agent settings
The agent settings are in the settings dialog, under the Agent group:



Setting
Description




Max iterations
Maximum number of model turns the agent may run before stopping. The default is 10, and the allowed range is 1-50.


Require user approval
When on, every agent widget operation (create, update, or delete) pauses for your explicit approval before it runs. Default is off.



Max iterations
A complex request can need more turns than the current limit allows. If the conversation stops because the limit was reached:

Type continue in the agent input to let the agent carry on from where it stopped.
Increase Max iterations in the agent settings if your requests regularly need more turns.

Related guides

Toolbar - where the agent panel is opened from.
Settings - where the agent settings live.
FAQ - model selection and offline connection issues.
Overview - the editor interface the agent edits.
Codegen - how the edited document becomes generated code.

`,"anyui-LIVE"]},{title:"FAQ",headers:[{level:2,title:"Q&A",slug:"q-a",link:"#q-a",children:[{level:3,title:"Question: Why do I encounter the offline error in an agent conversation?",slug:"question-why-do-i-encounter-the-offline-error-in-an-agent-conversation",link:"#question-why-do-i-encounter-the-offline-error-in-an-agent-conversation",children:[]}]}],path:"/docs/anyui-LIVE/guide/faq.html",pathLocale:"/",extraFields:["FAQ",`This page collects answers to the questions anyui-LIVE users ask most often, including how to troubleshoot interrupted or dropped connections.
Q&amp;A
Question: Why do I encounter the offline error in an agent conversation?
Answer: The offline error can occur when enterprise proxies, VPNs, or antivirus software reset long connections after they become idle or reach a connection duration timeout, hence triggering the offline error.
`,"anyui-LIVE"]},{title:"Get Started",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Workflow",slug:"workflow",link:"#workflow",children:[{level:3,title:"1. Create a project",slug:"_1-create-a-project",link:"#_1-create-a-project",children:[]},{level:3,title:"2. Design your UI",slug:"_2-design-your-ui",link:"#_2-design-your-ui",children:[]},{level:3,title:"3. Preview and refine",slug:"_3-preview-and-refine",link:"#_3-preview-and-refine",children:[]},{level:3,title:"4. Generate the code",slug:"_4-generate-the-code",link:"#_4-generate-the-code",children:[]}]},{level:2,title:"Workflow summary",slug:"workflow-summary",link:"#workflow-summary",children:[]}],path:"/docs/anyui-LIVE/guide/get-started.html",pathLocale:"/",extraFields:["Get Started",`Getting started with anyui-LIVE is straightforward. The workflow below guides you from creating a project through to downloading the generated code.
Overview
anyui-LIVE is an intuitive, user-friendly tool for building LVGL-based user interfaces. The entire process requires no prior specialized knowledge, and each step is designed to be self-explanatory.
Workflow
Follow these steps to create your project and generate the code.
1. Create a project

Visit the anyui-LIVE Workspace
Create a new project by configuring the following settings:

Name – the name of your project
Description – a brief description of your project
Display size – the target screen resolution
Color depth – the bit depth for your display
Target LVGL version – the LVGL version your UI will target


After confirming your project settings, you'll be directed to the project editor interface

2. Design your UI

Create widgets using either click-based placement or drag-and-drop functionality
Customize widget appearance by modifying its properties and styles
Configure interactive behavior by adding event handlers

3. Preview and refine

Use the preview feature to verify both visual appearance and interactive behavior
Refine your design through iterative adjustments and previews as needed

4. Generate the code

Download the generated code once your design is complete

Workflow summary



Step
Phase
Description




1
Create project
Configure display size, color depth, and target LVGL version


2
Design UI
Add widgets and customize their properties, styles, and event handlers


3
Preview &amp; refine
Verify appearance and behavior, then iterate


4
Generate code
Download the generated code



`,"anyui-LIVE"]},{title:"Introduction",headers:[{level:2,title:"Difference from anyui",slug:"difference-from-anyui",link:"#difference-from-anyui",children:[{level:3,title:"anyui-LIVE Advantages",slug:"anyui-live-advantages",link:"#anyui-live-advantages",children:[]},{level:3,title:"anyui-LIVE Current Limitations (with plans to minimize the gap)",slug:"anyui-live-current-limitations-with-plans-to-minimize-the-gap",link:"#anyui-live-current-limitations-with-plans-to-minimize-the-gap",children:[]}]}],path:"/docs/anyui-LIVE/guide/introduction.html",pathLocale:"/",extraFields:["Introduction",`anyui-LIVE is a lightweight, browser-based tool for building LVGL user interfaces. It and anyui both help you build LVGL interfaces, but they differ in design goals and capabilities.
anyui-LIVE completely follow the LVGL design philosophy and conventions.
Difference from anyui
anyui-LIVE Advantages

anyui-LIVE is lightweight and no installation required
anyui-LIVE is compatible across all platforms
anyui-LIVE supports native rendering functionality
anyui-LIVE enables live preview of widget behaviors
anyui-LIVE provides dynamic LVGL version switching capability
anyui-LIVE allows override of screen size settings

anyui-LIVE Current Limitations (with plans to minimize the gap)

anyui-LIVE lacks support for global components and higher-order components
anyui-LIVE lacks support for images stored in external storage
anyui-LIVE has limited animation support (does not support component animations and Lottie animations)
anyui-LIVE lacks support for communication events

`,"anyui-LIVE"]},{title:"Workspace",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Creating project",slug:"creating-project",link:"#creating-project",children:[]},{level:2,title:"Removing project",slug:"removing-project",link:"#removing-project",children:[]},{level:2,title:"Selecting project",slug:"selecting-project",link:"#selecting-project",children:[]},{level:2,title:"Opening project",slug:"opening-project",link:"#opening-project",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/workspace.html",pathLocale:"/",extraFields:["Workspace",`The workspace is anyui-LIVE's project-management surface. It is where you create, remove, select, and open the projects you design and generate. This guide covers the workspace project-management workflow.
Overview
The workspace is the project entry point. Rather than a single global document, anyui-LIVE organizes work into individual projects, each with its own screens, components, resources, and configuration. The workspace lists every project and lets you manage them before opening them in the editor for design.
The current English workspace interface is shown below:

Once a project is open, the screens and resources it contains are described in the image guide, the font library guide, and the codegen guide.
The workspace provides four key capabilities:

Creating new projects.
Removing existing projects.
Selecting a project to view its basic information.
Opening a project in edit mode.

Creating project
Choose New from the workspace view to open the create-project dialog. The dialog collects the configuration for the new project:



Setting
Description




Name
The project name.


Description
An optional project description.


Screen width
Horizontal resolution of the target display.


Screen height
Vertical resolution of the target display.


Color depth
16-bit or 32-bit color.


Target version
The LVGL runtime (and language) version used by the project.



The screen size, color depth, and target version defaults come from the project defaults, and screen dimensions are bounded by the supported minimum and maximum resolution. After the project is created, it appears in the project list and can be opened from there.
Removing project
To remove a project, use the delete action on its card. A confirmation dialog asks you to confirm the removal.

Warning
Removing a project is irreversible and unrestorable. The project's document, manifest entry, and synchronization records are permanently deleted. There is no undo for this action.

Selecting project
Click a project card to select it. The workspace inspector panel then shows the project's basic information:

Name and description.
Target LVGL version.
Color depth.
Screen width and height.
Created and last-updated timestamps.

If a project's document cannot be found, the inspector marks it as unavailable so you can tell the difference between a readable project and one whose data is missing.
Opening project
Double-click a project card, or use its Open action, to open the project in the editor and start designing its screens and widgets. Opening a project navigates to the editor route for that project.
Related guides

Image - image resources stored in a project.
Font library - font resources stored in a project.
Dynamic LVGL version - the LVGL runtime version used by a project.
Override screen size - overriding a project's display resolution.
Overview - design screens within a project.
Preview - run a project in live preview.
Codegen - generate code from a project.
Transplant - move generated output to a target device.
Simulator - run the application on a local machine.

`,"anyui-LIVE"]},{title:"LVGL设计大师",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[{level:3,title:"核心能力",slug:"核心能力",link:"#核心能力",children:[]}]},{level:2,title:"联系我们",slug:"联系我们",link:"#联系我们",children:[]}],path:"/zh/docs/anyui/",pathLocale:"/zh/",extraFields:["LVGL设计大师",`
🚀 anyui 1.0.0 来了. 版本信息


  

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
  

`]},{title:"快速开始",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"项目创建",slug:"项目创建",link:"#项目创建",children:[]},{level:2,title:"设计环境布局",slug:"设计环境布局",link:"#设计环境布局",children:[]},{level:2,title:"设计工作流程",slug:"设计工作流程",link:"#设计工作流程",children:[]},{level:2,title:"代码生成",slug:"代码生成",link:"#代码生成",children:[]},{level:2,title:"模拟",slug:"模拟",link:"#模拟",children:[]},{level:2,title:"项目持久化",slug:"项目持久化",link:"#项目持久化",children:[]},{level:2,title:"后续步骤",slug:"后续步骤",link:"#后续步骤",children:[]}],path:"/zh/docs/anyui/get-started.html",pathLocale:"/zh/",extraFields:["快速开始",`本指南提供简明的说明，帮助您快速开始使用anyui进行LVGL UI开发。
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
`]},{title:"Layout",headers:[{level:2,title:"Flex Layout",slug:"flex-layout",link:"#flex-layout",children:[{level:3,title:"Flex Layout Configuration Steps",slug:"flex-layout-configuration-steps",link:"#flex-layout-configuration-steps",children:[]},{level:3,title:"Flex Layout Example",slug:"flex-layout-example",link:"#flex-layout-example",children:[]}]}],path:"/docs/anyui/guide/advanced/layout.html",pathLocale:"/",extraFields:["Layout",`Layout
Flex Layout
Flex Layout is a powerful layout system that enables the creation of flexible and responsive user interfaces.
Currently, two types of widgets support flex layout:

Container
Screen itself

Flex Layout Configuration Steps

Click on Screen or create a Container component
Set the layout property to flex
Configure flex flow, main align, track align properties
Add padding row/column to adjust space between children
Use percentage-based sizing to ensure children components adapt to the container size
If the children have fixed size, then you can set size of Container to Auto to fit in content


Flex Layout Example
The following example demonstrates a flex layout implementation using nested Container components.
Buttons, dropdowns, and checkboxes are automatically centered within the container without requiring explicit position settings.

`]},{title:"Lottie Animation",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/docs/anyui/guide/animation/12_lottie.html",pathLocale:"/",extraFields:["Lottie Animation",`LVGL v8
LVGL v8 does not natively support Lottie animations. Support is provided through third-party libraries. Refer to rlottie integration for implementation details.
The rlottie library has been integrated into anyui, enabling code generation and Lottie animation simulation through the anyui environment. However, rlottie integration is still required for target device deployment.
LVGL v9
Beginning with v9, the Lottie widget utilizes the ThorVG library which is integrated into LVGL. To enable Lottie animations, either LV_USE_THORVG_INTERNAL (to use the built-in ThorVG) or LV_USE_THORVG_EXTERNAL (to link it externally) must be enabled, allowing direct use of Lottie animations in LVGL v9.
anyui uses built-in ThorVG for Lottie implementation and can simulate Lottie animations in the simulator.
For comprehensive details, refer to Lottie of LVGL v9.
`]},{title:"GIF Animated Image",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[{level:3,title:"Enable GIF Support",slug:"enable-gif-support",link:"#enable-gif-support",children:[]}]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]}],path:"/docs/anyui/guide/animation/gif.html",pathLocale:"/",extraFields:["GIF Animated Image",`Overview
Beginning with v0.28.0, animated GIF image support has been implemented.
Configuration
Enable GIF Support
To enable GIF decoder support, define the following in lv_conf.h:
#define LV_USE_GIF 1      // Enable GIF decoder

Usage
GIF images can be utilized as either embedded variables or external files. For external file implementation, refer to Use External Image File as Source.
`]},{title:"Screen Load Animation",headers:[{level:2,title:"Screen Load Animation Management",slug:"screen-load-animation-management",link:"#screen-load-animation-management",children:[]}],path:"/docs/anyui/guide/animation/screen_animation.html",pathLocale:"/",extraFields:["Screen Load Animation",`Screen Load Animation
anyui provides a unified animation management system specifically for screen transition animations.
Users can create, manage, and apply screen switch animations through this dedicated system.
Screen Load Animation Management
Screen load animation management follows the same workflow as widget animation management.

Apply animations to screen transitions.


`]},{title:"Widget Animation",headers:[{level:2,title:"Widget Animation Management",slug:"widget-animation-management",link:"#widget-animation-management",children:[]}],path:"/docs/anyui/guide/animation/widget_animation.html",pathLocale:"/",extraFields:["Widget Animation",`Widget Animation
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


`]},{title:"Introduction",headers:[{level:2,title:"What is a Higher Order Component (HoC)?",slug:"what-is-a-higher-order-component-hoc",link:"#what-is-a-higher-order-component-hoc",children:[{level:3,title:"Capabilities",slug:"capabilities",link:"#capabilities",children:[]},{level:3,title:"Limitations",slug:"limitations",link:"#limitations",children:[]}]},{level:2,title:"Using Higher Order Components",slug:"using-higher-order-components",link:"#using-higher-order-components",children:[]}],path:"/docs/anyui/guide/hoc/0_intro.html",pathLocale:"/",extraFields:["Introduction",`What is a Higher Order Component (HoC)?
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

`]},{title:"State Button",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Attributes",slug:"attributes",link:"#attributes",children:[]}]},{level:2,title:"State Button Configuration",slug:"state-button-configuration",link:"#state-button-configuration",children:[]}],path:"/docs/anyui/guide/hoc/1_statebtn.html",pathLocale:"/",extraFields:["State Button",`Introduction
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
`]},{title:"Label Slider",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Attributes",slug:"attributes",link:"#attributes",children:[]}]},{level:2,title:"Slider Label",slug:"slider-label",link:"#slider-label",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/docs/anyui/guide/hoc/2_labelslider.html",pathLocale:"/",extraFields:["Label Slider",`Introduction
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

`]},{title:"Value Slider",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Properties",slug:"properties",link:"#properties",children:[]}]},{level:2,title:"Slider Label",slug:"slider-label",link:"#slider-label",children:[]},{level:2,title:"Configuration",slug:"configuration",link:"#configuration",children:[]}],path:"/docs/anyui/guide/hoc/3_valueslider.html",pathLocale:"/",extraFields:["Value Slider",`Introduction
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
`]},{title:"Check Group & Radio Group",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Component Structure",slug:"component-structure",link:"#component-structure",children:[]},{level:3,title:"Properties",slug:"properties",link:"#properties",children:[]}]},{level:2,title:"Checkbox Image & Label",slug:"checkbox-image-label",link:"#checkbox-image-label",children:[{level:3,title:"Image",slug:"image",link:"#image",children:[]},{level:3,title:"Label",slug:"label",link:"#label",children:[]}]},{level:2,title:"Video Demonstration",slug:"video-demonstration",link:"#video-demonstration",children:[{level:3,title:"3 Minutes to Create a Complex Checkbox Group - Case 1",slug:"_3-minutes-to-create-a-complex-checkbox-group-case-1",link:"#_3-minutes-to-create-a-complex-checkbox-group-case-1",children:[]},{level:3,title:"3 Minutes to Create a Complex Checkbox Group - Case 2",slug:"_3-minutes-to-create-a-complex-checkbox-group-case-2",link:"#_3-minutes-to-create-a-complex-checkbox-group-case-2",children:[]}]}],path:"/docs/anyui/guide/hoc/4_checkgroup.html",pathLocale:"/",extraFields:["Check Group & Radio Group",`Introduction
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

`]},{title:"Drawer",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[{level:3,title:"Open/Close State",slug:"open-close-state",link:"#open-close-state",children:[]},{level:3,title:"Animation Control",slug:"animation-control",link:"#animation-control",children:[]},{level:3,title:"Positioning",slug:"positioning",link:"#positioning",children:[]},{level:3,title:"Event Handling",slug:"event-handling",link:"#event-handling",children:[]}]}],path:"/docs/anyui/guide/hoc/5_drawer.html",pathLocale:"/",extraFields:["Drawer",`Introduction
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
`]},{title:"StatusBar",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]},{level:2,title:"Usage",slug:"usage",link:"#usage",children:[]},{level:2,title:"StatusBar vs Global StatusBar",slug:"statusbar-vs-global-statusbar",link:"#statusbar-vs-global-statusbar",children:[]},{level:2,title:"Communication Commands and Events",slug:"communication-commands-and-events",link:"#communication-commands-and-events",children:[]}],path:"/docs/anyui/guide/hoc/6_statusbar.html",pathLocale:"/",extraFields:["StatusBar",`Introduction
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
`]},{title:"NavigateBar",headers:[{level:2,title:"Introduction",slug:"introduction",link:"#introduction",children:[]}],path:"/docs/anyui/guide/hoc/7_navigatebar.html",pathLocale:"/",extraFields:["NavigateBar",`Introduction
The NavigateBar is a Higher Order Component that is part of the Screen Management system, providing navigation functionality to return to the previous screen.
Screen Management must be enabled to utilize the NavigateBar component. When disabled, the component will not be visible in the WidgetBar.
If Screen Management is enabled and the NavigateBar is implemented in any screens, subsequently disabling Screen Management will render the NavigateBar non-functional.
Refer to Screen Management for comprehensive configuration details.
`]},{title:"Higher Order Components",headers:[{level:2,title:"Architecture Overview",slug:"architecture-overview",link:"#architecture-overview",children:[]},{level:2,title:"Component Catalog",slug:"component-catalog",link:"#component-catalog",children:[{level:3,title:"Interactive Control Components",slug:"interactive-control-components",link:"#interactive-control-components",children:[]},{level:3,title:"Input and Selection Components",slug:"input-and-selection-components",link:"#input-and-selection-components",children:[]},{level:3,title:"Navigation and Layout Components",slug:"navigation-and-layout-components",link:"#navigation-and-layout-components",children:[]}]},{level:2,title:"Implementation Guidelines",slug:"implementation-guidelines",link:"#implementation-guidelines",children:[]},{level:2,title:"Integration Workflow",slug:"integration-workflow",link:"#integration-workflow",children:[]},{level:2,title:"Implementation Best Practices",slug:"implementation-best-practices",link:"#implementation-best-practices",children:[]}],path:"/docs/anyui/guide/hoc/",pathLocale:"/",extraFields:["Higher Order Components",`Higher Order Components (HoC)
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
`]},{title:"Codegen",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Generated output",slug:"generated-output",link:"#generated-output",children:[]},{level:2,title:"Configuration options",slug:"configuration-options",link:"#configuration-options",children:[]},{level:2,title:"Integration points",slug:"integration-points",link:"#integration-points",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/codegen.html",pathLocale:"/",extraFields:["Codegen",`Codegen converts the workspace design into C source code that runs on the target device. This guide covers code generation features, configuration options, and integration points.
Overview
After designing screens in the editor, anyui-LIVE generates the screen implementations and converts assets into the generated/ directory of the workspace. The generated code is self-contained and independent of the hardware and development tools used to build the final firmware.
The pipeline is described here; the assets it consumes are defined in the image guide and the font library guide.
Generated output
Codegen produces the following in {root}/generated:



Output
Description




Screen source files
C files implementing each screen and the setup_ui() entry point.


Asset sources
Converted images, fonts, and Lottie data.


Header files
Declarations for screens, components, and generated variables.



This output is automatically generated and should not be modified by hand.
Configuration options
Codegen behavior is controlled through project configuration:



Option
Description




Resolution
Target resolution used when generating screen layout.


Color depth
Color depth used for generated assets.



See the workspace guide for where these options are configured.
Integration points
The generated code integrates with the rest of the system through well-defined entry points:

setup_ui() - call this to initialize the UI from your application.
generated/ - copy these files into your project build.

These integration points are the basis of the transplant guide, which explains moving generated code to a target device.
Related guides

Image - how image assets are converted.
Font library - how font libraries are converted.
Workspace - the generated output directory.
Overview - the screens that codegen compiles.
Preview - the simulated code produced by codegen.
Transplant - integrate generated code into a target project.
Simulator - run generated code on a local machine.

`,"anyui-LIVE"]},{title:"Dynamic Display Size Change",headers:[{level:2,title:"Dynamic display size adjustment",slug:"dynamic-display-size-adjustment",link:"#dynamic-display-size-adjustment",children:[]},{level:2,title:"Responsive layout integration",slug:"responsive-layout-integration",link:"#responsive-layout-integration",children:[]},{level:2,title:"Version support",slug:"version-support",link:"#version-support",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/dynamic-display-size.html",pathLocale:"/",extraFields:["Dynamic Display Size Change",`The display size of a project is not fixed after creation. You can change it in the editor through the project configuration, and the rest of the design follows automatically.
Dynamic display size adjustment
The display size is part of the project configuration. Open the settings dialog from the toolbar and edit the Project settings:



Setting
Description




Screen width
Horizontal resolution of the target display.


Screen height
Vertical resolution of the target display.



As you edit, a live preview panel shows the resulting resolution and aspect ratio. After you apply and save the configuration, all screens and widgets in the project update to the new display size, so you can validate the design against the new dimensions immediately, without recreating or re-importing the project.
Responsive layout integration
Changing the display size works best together with the flex layout. When a container uses a layout, its children are positioned by layout rules instead of at fixed coordinates, so the interface adapts to the new dimensions on its own.
Combined with responsive layout, the design:

Automatically adapts to changes in device dimensions.
Does not need to be redesigned when the device dimensions change. The layout adjusts to the new display size while keeping the interface usable and visually consistent.

Version support
Live display resizing is a runtime capability: some LVGL versions support it and others do not. See the dynamic LVGL version guide for the capabilities of each version.
Related guides

Settings - configure the project's screen width and height.
Layout - arrange children with flex layout so the UI adapts to size changes.
Override screen size - the display size versus the editor-only design size.
Preview - validate the design at the configured display size.
Dynamic LVGL version - version-dependent capabilities, including live display resizing.
Workspace - the display size configured when a project is created.

`,"anyui-LIVE"]},{title:"Dynamic LVGL version",headers:[{level:2,title:"Selecting the target version",slug:"selecting-the-target-version",link:"#selecting-the-target-version",children:[]},{level:2,title:"Switching the version",slug:"switching-the-version",link:"#switching-the-version",children:[]},{level:2,title:"Automatic adaptation",slug:"automatic-adaptation",link:"#automatic-adaptation",children:[]},{level:2,title:"Version differences",slug:"version-differences",link:"#version-differences",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.html",pathLocale:"/",extraFields:["Dynamic LVGL version",`anyui-LIVE supports different LVGL versions, so you can design and validate your project against the exact LVGL version your firmware will use.
Selecting the target version
The target LVGL version is configured when creating a project in the workspace. The Target version setting stores the LVGL version used by the project, and the project runs against that version in the editor and in preview.
Switching the version
In the editor, the toolbar provides a runtime version selector. Switch the version at any time, and the editor reloads the design against the newly selected version. A loading indicator is shown while the switch is in progress, and errors are reported so you can retry. Preview re-runs against the newly selected version.
Automatic adaptation
anyui-LIVE adapts automatically to the selected LVGL version. The available properties, styles, and events in the editor reflect the active version, so you only see what that version supports and do not need to know which LVGL APIs exist in each version.
Version differences
Different LVGL versions expose different capabilities. Two examples:

Live display resizing - supported by some versions and not others. See the override screen size guide.
Image handling - image mode and alignment behave differently between v8 and v9. See the image guide.

Related guides

Workspace - configure the target version when creating a project.
Overview - the runtime version selector in the toolbar.
Preview - run the project against the active version.
Override screen size - capabilities that differ by version.

`,"anyui-LIVE"]},{title:"Font Library",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Font library management",slug:"font-library-management",link:"#font-library-management",children:[{level:3,title:"Font library settings",slug:"font-library-settings",link:"#font-library-settings",children:[]}]},{level:2,title:"Font library conversion options",slug:"font-library-conversion-options",link:"#font-library-conversion-options",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/font-library.html",pathLocale:"/",extraFields:["Font Library",`This guide covers font library management and the font-related features available in anyui-LIVE.
Overview
anyui-LIVE distinguishes between two related concepts:



Term
Definition




Font
A font file (*.ttf, *.otf, or *.woff2) that you import. It typically contains a complete character set for a language, such as English or Chinese.


Font library
A specialized library containing only the partial character set required by the design. It is converted into a C source array and embedded into the generated firmware.



Importing a font file does not by itself make text renderable: you must create a font library that selects the font file and the characters the design needs. Font files are imported in Resource management.
Related resource concepts are covered in the image guide, and the asset pipeline is described in the codegen guide.
Font library management
Manage font libraries in the Font library view:

Import the font file in the Resource view; see Resource management.
Open the Font library view by clicking the Font library button in the view bar.
Create a font library.


Font library settings



Setting
Description




Library name
The name of the font library; also part of the generated font variable name.


Font asset
The font file used by this library. Import the font file in Resource management first.


Font size
The font size used when generating the font library.


Bpp
Bits per pixel for the generated font.


Letters
Preset letters included in the font library.


Range
Character range included in the font library.


Symbols
Additional characters included in the font library.


Flags
Extra options for the font conversion. The default value is --no-compress --no-prefilter.



For most projects, the most important items are:

Library name - use a meaningful name.
Font asset - select the correct font file.
Range and/or Symbols - at least one of them must not be empty.

If you are not familiar with the other options, keep their default values.

Note
The Flags option controls LVGL font conversion:

--no-compress: do not compress the font.
--no-prefilter: do not prefilter the font.


Font library conversion options
At generation time, the font library is converted into a glyph bitmap table. Key conversion options:

Bpp (bits per pixel) - lower values (e.g., 1 or 2) reduce memory usage at the cost of anti-aliasing quality; higher values (e.g., 4) increase quality and memory use.
Range - include only the character codes your UI actually uses to keep the font table small.
Symbols - add specific glyphs (e.g., icons) that are not part of a contiguous range.

Optimizing the character set is the most effective way to reduce ROM usage for font libraries. See the codegen guide for how the emitted font code is integrated into the build.

Warning
You are responsible for ensuring that you have the necessary rights and permissions for every font you import and use.

Related guides

Resource management - import the font files used by font libraries.
Image - manage raster assets alongside font libraries.
Overview - apply typography properties on the canvas.
Preview - verify font rendering before generation.
Codegen - how font libraries become generated code.
Transplant - memory and configuration on the target.
Simulator - run the application on a local machine.

`,"anyui-LIVE"]},{title:"Image",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Importing images",slug:"importing-images",link:"#importing-images",children:[]},{level:2,title:"Image components",slug:"image-components",link:"#image-components",children:[]},{level:2,title:"Optimization",slug:"optimization",link:"#optimization",children:[{level:3,title:"Format conversion",slug:"format-conversion",link:"#format-conversion",children:[]},{level:3,title:"Memory considerations",slug:"memory-considerations",link:"#memory-considerations",children:[]}]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/image.html",pathLocale:"/",extraFields:["Image",`Images are a core part of every embedded UI. This guide covers how anyui-LIVE handles, optimizes, and uses images across the design, code generation, and target runtime stages.
Overview
anyui-LIVE treats images as first-class resources. An image imported into the project is available to every screen and component, and it is automatically converted and embedded into the generated firmware at build time.
The image pipeline consists of four stages:

Import - add an image from a local file into the resource pool.
Reference - assign the image to a component property.
Generation - emit the converted asset into the generated code.

Refer to codegen guide to see how the generated image code is produced.
Importing images
Import images in the Resource view. Currently PNG format is supported.

PNG is recommended for UI assets that mix transparency and crisp edges.

After import, the image becomes available in the resource picker and can be assigned to any image component property.

Warning
You are responsible for ensuring that you have the necessary rights and permissions for every image you import and use.

Image components
An image placed on a screen references a resource from the resource pool. The component exposes the following key properties:



Property
Description




Resource
The image resource to display.


X / Y
Position of the image on the screen.


Width / Height
Display size. When fixed, the source is not scaled.


Opacity
0 (fully transparent) to 255 (fully opaque).


Rotation
Rotation angle in degrees.


Blend mode
Blending mode used when compositing over the background.



Optimization
Optimization reduces ROM size and memory footprint on the target device.
Format conversion
At generation time, anyui-LIVE converts the source image into a C source array optimized for LVGL. Configure the output format in the resource settings:

C array - the image is emitted as a C source array and compiled into the binary.

Memory considerations
Decoded images are held in RAM while displayed. If the target device runs low on memory, increase LV_MEM_SIZE in lv_conf.h:
#define LV_MEM_SIZE    (8 * 1024U * 1024U)          /*[bytes]*/

Related guides

Resource management - import the images used by image components.
Font library - manage typography alongside image assets.
Overview - assign and edit image properties on the canvas.
Preview - preview image rendering before generation.
Codegen - how image assets become generated code.

`,"anyui-LIVE"]},{title:"Layout",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Mode",slug:"mode",link:"#mode",children:[]},{level:2,title:"Flex flow",slug:"flex-flow",link:"#flex-flow",children:[]},{level:2,title:"Alignment",slug:"alignment",link:"#alignment",children:[]},{level:2,title:"Gaps",slug:"gaps",link:"#gaps",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/layout.html",pathLocale:"/",extraFields:["Layout",`Layout controls how the children of a container widget are arranged. This guide covers the layout options available in anyui-LIVE and how they behave in the generated LVGL output.
Overview
Every widget can be a layout container. When a container uses a layout, its children are placed automatically according to the layout rules instead of at fixed positions. anyui-LIVE renders layout live on the canvas, so changes are visible immediately and are reflected in preview and in the generated code.
The layout settings are available in the inspector under the Layout group.
Mode
The Mode option selects the layout engine for the container:

None - children are placed manually and are not affected by layout rules.
Flex - children are arranged by a flex container.

Flex flow
Flex flow sets the direction and wrapping strategy of the flex container. It determines whether children lay out as a row, a column, or a wrapped variant:

Row / Row Reverse
Column / Column Reverse
Row Wrap / Row Wrap Reverse
Column Wrap / Column Wrap Reverse

Alignment
The flex container provides three alignment options:

Main align - distributes children along the main axis (the direction of the flex flow): Start, Center, End, Space Evenly, Space Around, or Space Between.
Cross align - aligns children along the cross axis, perpendicular to the flex flow direction.
Track align - aligns wrapped flex tracks when the flow creates multiple rows or columns.

Gaps

Row gap - sets the gap between rows of children.
Column gap - sets the gap between columns of children.

Gap values are non-negative integers, in pixels.
Related guides

Image - assign raster resources to widgets.
Font library - typography and text layout.
Overview - design screens on the canvas.
Preview - validate layout in a live simulation.
Codegen - how layout becomes generated LVGL code.
Override screen size - change the display resolution at runtime.
Dynamic Display Size Change - adapt the interface when the display size changes.

`,"anyui-LIVE"]},{title:"Override screen size",headers:[{level:2,title:"Design time",slug:"design-time",link:"#design-time",children:[]},{level:2,title:"Preview time",slug:"preview-time",link:"#preview-time",children:[]},{level:2,title:"Constraints",slug:"constraints",link:"#constraints",children:[]},{level:2,title:"Memory considerations",slug:"memory-considerations",link:"#memory-considerations",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/override-screen-size.html",pathLocale:"/",extraFields:["Override screen size",`A screen has two sizes: the display size, which matches the target device, and the design size used while you work in the editor. This guide explains how the two relate.
Example scenario used in this guide:

Display size: 800 x 480
Design size: 800 x 600
Widgets: a button placed near the top and an arc placed near the bottom

Design time
While designing, you can enlarge the screen to accommodate more widgets. The enlarged size is an editor-only override: it affects the canvas layout while you work, but it is not the size used for preview.
In this example, the 800 x 600 design size makes both widgets fully visible on the canvas at the same time.

Preview time
When you preview the project, the screen size is set to the display size from the project configuration. Preview therefore reflects the real use case and matches the target device's resolution, instead of the enlarged design canvas.
With the same layout, preview switches back to the display size of 800 x 480. The button near the top remains visible, while the arc near the bottom becomes only partially visible and you need to scroll to see it completely.

Constraints
Screen dimensions are bounded by the supported minimum and maximum resolution.
Memory considerations
A larger screen increases the memory footprint of the rendered output. If the target device runs low on memory, increase LV_MEM_SIZE in lv_conf.h, as described in the transplant guide.
Related guides

Workspace - configure the target display size for a project.
Layout - how widgets are arranged on the design canvas.
Overview - design screens in the editor.
Transplant - memory and configuration on the target device.
Simulator - run the application on a local machine.
Dynamic Display Size Change - change the display size and let responsive layout adapt the UI.

`,"anyui-LIVE"]},{title:"Simulator",headers:[{level:2,title:"Setup build environment",slug:"setup-build-environment",link:"#setup-build-environment",children:[{level:3,title:"Windows",slug:"windows",link:"#windows",children:[]},{level:3,title:"macOS",slug:"macos",link:"#macos",children:[]},{level:3,title:"Linux",slug:"linux",link:"#linux",children:[]}]},{level:2,title:"Download simulator project template",slug:"download-simulator-project-template",link:"#download-simulator-project-template",children:[]},{level:2,title:"Download generated code",slug:"download-generated-code",link:"#download-generated-code",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/simulator.html",pathLocale:"/",extraFields:["Simulator",`If you want to do code level compilation and simulation, you can use the local simulator.
Setup build environment
Local simulator needs to install build toolchain and SDL2 library.
Windows


Build toolchain
We provide a toolchain that you can download from tools-for-windows. Double click launch-tools-shell.bat to open a command prompt, it'd auto configure the environment variables. In the same command prompt window, cd to go to the simulator project directory to run the simulator.


SDL2
We package the SDL2 library directly in the simulator project directory, so you don't need to install it separately.


macOS


Build toolchain
You need to install C/C++ compiler to compile the simulator code. As macOS already has clang installed, you can skip this step.


SDL2
You can install SDL2 by executing the following command:
brew install sdl2



Linux


Build toolchain
You need to install C/C++ compiler to compile the simulator code. Install them from your distribution's package manager.


SDL2
You can install SDL2 on Linux by executing the following command:


Ubuntu/Debian
sudo apt install libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev



Fedora
sudo dnf install SDL2-devel SDL2_image-devel SDL2_ttf-devel



Other Linux distributions
Search your distribution's package manager to install SDL2.




Download simulator project template
We provide a local simulator project template that you can use to get started. Refer to Simulator Project Template.
There're two project templates available, in v8.3.7 and v9.2.2 directories respectively, which are matched with the LVGL version supported by anyui-LIVE.
Download generated code
Download generated code from anyui-LIVE, extract it and copy generated directory to the simulator project directory.
After above steps, you can run the simulator by executing the following command under v8.3.7 or v9.2.2 directory:
cd v8.3.7
make &amp;&amp; make run

cd v9.2.2
make &amp;&amp; make run

`,"anyui-LIVE"]},{title:"Transplant",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Transplant process",slug:"transplant-process",link:"#transplant-process",children:[{level:3,title:"UI code",slug:"ui-code",link:"#ui-code",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]},{level:2,title:"Integration with external systems",slug:"integration-with-external-systems",link:"#integration-with-external-systems",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/Subject/transplant.html",pathLocale:"/",extraFields:["Transplant",`Transplant moves the generated anyui-LIVE output onto a target device or integrates it into an existing project. This guide covers migration, transplantation, and integration with other systems.
Overview
anyui-LIVE focuses on UI design, and the generated UI code is designed to stay independent of specific hardware and development tools (such as Keil). The generated code can be moved to any target that satisfies the LVGL requirements.
The output being transplanted is described in the codegen guide, and the code it depends on is described in the image guide and the font library guide.
Transplant process
UI code
All UI code is generated within the {root}/generated directory, including screen implementations and converted assets (images, fonts, lotties). To transplant:

Copy the generated code into your project.
Invoke setup_ui() to initialize the UI.
Compile the project for the target toolchain.

This code is automatically generated and should not be manually modified.
lv_conf.h
Maintain a device-specific copy of lv_conf.h with at least the following configurations:

The following three items are mandatory and important:

LV_HOR_RES_MAX and LV_VER_RES_MAX - Display resolution
LV_COLOR_DEPTH - Color depth
LV_MEM_SIZE - Memory size in bytes


Configure resolution

Configure resolution for LVGL v8.x in lv_conf.h

#define LV_HOR_RES_MAX (?) // Horizontal resolution
#define LV_VER_RES_MAX (?) // Vertical resolution


Configure resolution for LVGL v9.x in hal_init(w, h)

hal_init(720, 480); // configure display size to 720 x 480

Configure color depth and memory size in lv_conf.h
/** Required configurations */
#define LV_COLOR_DEPTH 32

/* Size of the memory available for lv_mem_alloc() in bytes */
#define LV_MEM_SIZE (32 * 1024) // Memory size 32KB, adjust as needed

Optional configurations as needed in lv_conf.h
#define LV_USE_BTN 1 // Enable button
#define LV_USE_IMG 1 // Enable image
#define LV_USE_LABEL 1 // Enable label
// Additional components as required

/** Optional configurations as needed */
#define LV_FONT_MONTSERRAT_8 1 // Enable Montserrat 8px font; 0: disable
// Other MONTSERRAT font sizes ...
#define LV_FONT_MONTSERRAT_48 1 // Enable Montserrat 48px font; 0: disable

Integration with external systems
The generated code can be integrated with an existing embedded project:

Application entry - call setup_ui() after LVGL is initialized (lv_init() and hal_init()).

Related guides

Font library - font assets included in the transplant.
Workspace - the generated folder.
Overview - the screens that are transplanted.
Codegen - the generated output and entry points.

`,"anyui-LIVE"]},{title:"Inspector",headers:[{level:2,title:"Single selection",slug:"single-selection",link:"#single-selection",children:[]},{level:2,title:"Variant-aware inspection",slug:"variant-aware-inspection",link:"#variant-aware-inspection",children:[]},{level:2,title:"Multi-selection",slug:"multi-selection",link:"#multi-selection",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Inspector.html",pathLocale:"/",extraFields:["Inspector",`The inspector shows the properties of the selected widget and lets you edit them. It appears as a side panel in the editor.
Single selection
When a single widget is selected, the inspector renders the widget's properties, grouped by category. Settings are edited through the relevant control (text input, number, color, selector, and so on) and applied to the widget immediately.
The inspector uses a per-widget inspector component selected from a registry based on the widget type, so each widget type shows only its relevant properties.
Variant-aware inspection
The inspector resolves its property definitions against the active LVGL runtime version. As a result, the set of available properties reflects the widget definition for the currently selected runtime version, and switches correctly when the version changes.
Multi-selection

Same-type multi-selection - when multiple widgets of the same type are selected, the inspector shows the shared properties and applies edits to all of them at once.
Mixed multi-selection - when the selection contains different widget types (or a mixture that cannot be edited together), the inspector shows a summary and disables property editing.

Related guides

Overview - the editor interface as a whole.
Canvas - select widgets on the canvas for inspection.

`,"anyui-LIVE"]},{title:"Navigator",headers:[{level:2,title:"Screen tree",slug:"screen-tree",link:"#screen-tree",children:[]},{level:2,title:"Widget tree",slug:"widget-tree",link:"#widget-tree",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Navigator.html",pathLocale:"/",extraFields:["Navigator",`The navigator provides navigation and management for the screens and widgets of the current project. It is split into a screen tree and a widget tree.
Screen tree
The screen tree lists the screens of the project. Selecting a screen makes it the active screen shown on the canvas. The screen tree supports:

Create - add a new screen.
Duplicate - duplicate the active screen.
Delete - remove the active screen.
Reorder - move a screen up or down in the list.
Hide/Show - toggle a screen's visibility.

Widget tree
The widget tree lists the widgets of the active screen in their hierarchy. It supports:

Selection - click to select a widget; multi-select with Shift/Ctrl/Cmd clicks.
Rename - update a widget's name.
Reparent via drag-and-drop - drag widgets onto a new parent to change the hierarchy.
Duplicate - duplicate the selected widgets.
Delete - remove the selected widgets.
Hide/Show - toggle a widget's visibility.
Lock - toggle a widget's lock state.
Hover highlight - hovering a tree row highlights the matching widget on the canvas (when enabled).

All navigator actions are locked in preview mode.
Related guides

Overview - the editor interface as a whole.
Canvas - the visual canvas where screens are designed.

`,"anyui-LIVE"]},{title:"Overview",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Interface components",slug:"interface-components",link:"#interface-components",children:[{level:3,title:"Toolbar",slug:"toolbar",link:"#toolbar",children:[]},{level:3,title:"Navigator",slug:"navigator",link:"#navigator",children:[]},{level:3,title:"Inspector",slug:"inspector",link:"#inspector",children:[]},{level:3,title:"Statusbar",slug:"statusbar",link:"#statusbar",children:[]},{level:3,title:"Canvas",slug:"canvas",link:"#canvas",children:[]},{level:3,title:"Settings",slug:"settings",link:"#settings",children:[]},{level:3,title:"Preview",slug:"preview",link:"#preview",children:[]}]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Overview.html",pathLocale:"/",extraFields:["Overview",`The editor is the visual design surface where you build the screens and widgets of a project. This guide describes the editor interface and its components.
Overview
Open a project in edit mode to enter the editor. The editor provides a live, drag-and-drop canvas for designing LVGL interfaces. Widgets are placed on the canvas, arranged with alignment guides, and customized through the inspector.
The editor interface is organized into a set of components, each with a dedicated role:



Component
Role




Toolbar
Command actions such as view switching, preview, undo/redo, export, and settings.


Navigator
Navigate and manage the screens and widgets of the project.


Inspector
Inspect and edit the properties of the selected widget.


Statusbar
Display editing status and document synchronization state.


Canvas
The central area with live widget rendering and editing.


Settings
Configure the UI and the project.


Preview
Run a live rendering simulation of the project.



Interface components
Toolbar
The toolbar hosts commands for the current document: switching between editor, resource, font library, and code views; toggling preview and the LVGL runtime version; home, new project, undo/redo, export; and opening settings. See the Toolbar guide.
Navigator
The navigator contains the screen tree and the widget tree. It lets you create, duplicate, reorder, and delete screens, select and re-parent widgets, and toggle visibility and lock states. See the Navigator guide.
Inspector
The inspector shows the properties of the selected widget and lets you edit them. It supports single, multi, and same-type multi-selection, and adapts to the active LVGL runtime version. See the Inspector guide.
Statusbar
The status bar shows editing state such as the current mode, selection, and last build, together with compliance and runtime status badges that surface the corresponding bottom panel. See the Statusbar guide.
Canvas
The canvas is the central area where widgets are dropped, selected, moved, resized, and arranged. It renders widgets live so design changes are visible immediately. See the Canvas guide.
Settings
The settings dialog groups general, project, UI, and about configuration. See the Settings guide.
Preview
Clicking the preview button switches the editor to preview mode, which provides a live rendering simulation of widget behavior that matches the final implementation exactly. See the Preview guide.
Related guides

Workspace - create, manage, and open projects.
Image - assign image resources to widgets.
Font library - apply typography to widgets.
Layout - arrange child widgets with flex layout.
Dynamic LVGL version - switch the LVGL runtime version.
Override screen size - override the display resolution at runtime.
Codegen - generate code from editor screens.
Transplant - run editor output on a target device.
Simulator - run editor output on a local machine.

`,"anyui-LIVE"]},{title:"Resource management",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Importing images",slug:"importing-images",link:"#importing-images",children:[]},{level:2,title:"Importing fonts",slug:"importing-fonts",link:"#importing-fonts",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Resource.html",pathLocale:"/",extraFields:["Resource management",`The Resource view is where you import and manage the external assets a project uses. Resources imported here become available to every screen and component, and are converted and embedded into the generated firmware at build time.
Overview
Switch to the Resource view from the view bar.



Resource type
Description




Image
Raster assets used by image components. PNG is supported.


Font
Font files (*.ttf, *.otf, *.woff2) used to build font libraries.



See the codegen guide for how imported resources become generated code.
Importing images

Open the Resource view from the view bar.
Add an image file. PNG is recommended for UI assets that mix transparency and crisp edges.
The image becomes available in the resource picker and can be assigned to any image component property.

See the image guide for the full image pipeline.
Importing fonts

Open the Resource view from the view bar.
Add a font file: *.ttf, *.otf, or *.woff2.
The font file becomes selectable when creating a font library.

A font file contains a complete character set. The characters the design actually uses are selected when you create a font library, which is converted into a C source array.

Warning
You are responsible for ensuring that you have the necessary rights and permissions for every resource you import and use.

Related guides

Toolbar - the view bar used to switch to the Resource view.
Image - image handling, optimization, and usage.
Font library - create a font library from an imported font file.
Codegen - how resources become generated code.

`,"anyui-LIVE"]},{title:"Settings",headers:[{level:2,title:"General",slug:"general",link:"#general",children:[]},{level:2,title:"Project",slug:"project",link:"#project",children:[]},{level:2,title:"UI",slug:"ui",link:"#ui",children:[]},{level:2,title:"About",slug:"about",link:"#about",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Settings.html",pathLocale:"/",extraFields:["Settings",`The settings dialog groups the editor's configuration options. It is opened from the toolbar and is organized into general, project, UI, agent, and about sections.
General
General settings apply to the whole editor:



Setting
Description




Language
The UI language of the editor.


Widget preview
Whether widget previews are shown in the widget bar.



Project
Project settings configure the current project:



Setting
Description




Screen width
Horizontal resolution of the target display.


Screen height
Vertical resolution of the target display.


Color depth
16-bit or 32-bit color.


Target version
The LVGL runtime (and language) version used by the project.



As you edit, a live preview panel shows the resulting resolution and aspect ratio. Saved changes update the project configuration.
UI
UI settings configure canvas behavior:



Setting
Description




Hover highlight
Highlight the widget under the mouse cursor on the canvas.


Global align
Snap against the whole screen (global) or only the dragged widget's container and siblings (local).



About
The about section shows host information for diagnostics:

Browser name and version.
Platform.
Build timestamp.

Related guides

Overview - the editor interface as a whole.
Toolbar - where the settings dialog is opened from.
Agent - the agent settings group.

`,"anyui-LIVE"]},{title:"Statusbar",headers:[{level:2,title:"Status information",slug:"status-information",link:"#status-information",children:[]},{level:2,title:"Compliance badge",slug:"compliance-badge",link:"#compliance-badge",children:[]},{level:2,title:"Runtime status badge",slug:"runtime-status-badge",link:"#runtime-status-badge",children:[]},{level:2,title:"Bottom panel wiring",slug:"bottom-panel-wiring",link:"#bottom-panel-wiring",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Statusbar.html",pathLocale:"/",extraFields:["Statusbar",`The status bar is the footer of the editor. It displays editing status and document synchronization state, and surfaces the relevant bottom panel.
Status information
The status bar shows live editing state, including:

The current mode (edit or preview).
The active session state.
The number of selected widgets.
The timestamp of the last build.

Compliance badge
The compliance badge indicates the number of compliance issues detected in the document. Clicking it opens the problems tab in the bottom panel.
Runtime status badge
The runtime status badge shows the state of the LVGL runtime connection and the accumulated event log. Clicking it opens the runtime tab in the bottom panel.
Bottom panel wiring
The badges are wired to the dockable bottom panel: clicking the compliance badge surfaces the problems tab, and clicking the runtime status badge surfaces the runtime tab.
Related guides

Overview - the editor interface as a whole.
Preview - preview mode and runtime state.

`,"anyui-LIVE"]},{title:"Toolbar",headers:[{level:2,title:"View bar",slug:"view-bar",link:"#view-bar",children:[]},{level:2,title:"Preview bar",slug:"preview-bar",link:"#preview-bar",children:[]},{level:2,title:"Document bar",slug:"document-bar",link:"#document-bar",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/Toolbar.html",pathLocale:"/",extraFields:["Toolbar",`The toolbar hosts the command actions for the current document. It is rendered at the top of the editor and is split into three groups: the view bar, the preview bar, and the document bar.
View bar
The view bar lets you switch the central view between the main editor views:



View
Description




Editor
The visual canvas for designing screens and widgets.


Resource
The resource view for importing and managing images and fonts.


Font library
The font library view for creating and managing font libraries.


Code
The generated code view. Selecting it triggers a build of the LVGL source code before showing the code.



Preview bar
The preview bar controls preview mode and the active LVGL runtime version:

Preview toggle - switches the editor between edit mode and preview mode. Clicking the play button enters preview; clicking pause returns to edit mode.
Runtime version - selects the LVGL runtime (and language) version used by the project, such as LVGL 9.x or LVGL 8.x. The selector is disabled while a version switch is in progress.
Agent - opens the agent panel for natural-language UI building; see Agent.

Document bar
The document bar provides document-level commands:



Command
Description




Home
Returns to the workspace.


New
Creates a new project from the workspace.


Undo / Redo
Steps backward and forward through edit history. Both are locked in preview mode.


Export
Regenerates the source bundle and exports it (for example, as a ZIP download).


Report bug
Opens the issue tracker to report a bug.


Settings
Opens the settings dialog.



Related guides

Overview - the editor interface as a whole.
Preview - preview mode and the LVGL runtime version.
Settings - the settings dialog opened from the toolbar.
Resource management - importing images and fonts.
Agent - the agent panel opened from the preview bar.

`,"anyui-LIVE"]},{title:"Canvas",headers:[{level:2,title:"Creating widgets",slug:"creating-widgets",link:"#creating-widgets",children:[]},{level:2,title:"Selecting widgets",slug:"selecting-widgets",link:"#selecting-widgets",children:[]},{level:2,title:"Arranging widgets",slug:"arranging-widgets",link:"#arranging-widgets",children:[{level:3,title:"Moving",slug:"moving",link:"#moving",children:[]},{level:3,title:"Resizing",slug:"resizing",link:"#resizing",children:[]},{level:3,title:"Duplicating",slug:"duplicating",link:"#duplicating",children:[]},{level:3,title:"Aligning",slug:"aligning",link:"#aligning",children:[]},{level:3,title:"Deleting",slug:"deleting",link:"#deleting",children:[]}]},{level:2,title:"Canvas controls",slug:"canvas-controls",link:"#canvas-controls",children:[]},{level:2,title:"Properties, styles, and events",slug:"properties-styles-and-events",link:"#properties-styles-and-events",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/canvas.html",pathLocale:"/",extraFields:["Canvas",`The canvas is the central area of the editor where screens and widgets are designed. Widgets are rendered live, so design changes are visible immediately.
Creating widgets
Add widgets from the widget library by dragging them onto the canvas. Common widgets include buttons, labels, images, sliders, and check boxes.

Image widgets reference resources from the pool; see the image guide.
Label widgets use typography from font libraries; see the font library guide.

Selecting widgets

Click a widget to select it and reveal its properties in the inspector.
Hold Ctrl/Cmd and click to multi-select on the canvas.
Drag a selection rectangle to select multiple widgets.
In the widget tree, hold Shift and click to select a range, or Ctrl/Cmd and click to select continuously.

Selected widgets are highlighted for clear identification.
Arranging widgets
Moving
Drag widgets across the canvas. Alignment guidelines appear automatically near edges or centers of adjacent widgets and the canvas boundaries to assist precise placement.
Resizing
Drag widget edges or corners to resize. Hold Ctrl/Cmd while dragging to resize proportionally and preserve the aspect ratio.
Duplicating
Select a widget and hold Option/Alt while dragging to duplicate it. This is useful for creating repeated elements such as menu items or buttons.
Aligning
With multiple widgets selected, use the alignment panel above the screen area to align and distribute them evenly.
Deleting
Select a widget and press Delete, or use the context menu's delete option.
Canvas controls

Zoom - use Ctrl/Cmd + mouse wheel, or the toolbar zoom controls. The reset button restores 100%.
Move canvas - right-click and drag to pan the canvas. Or, hold Spacebar to switch from selection to canvas pan.

Properties, styles, and events
The inspector organizes widget customization into sections:

Properties - Common widget properties and widget-specific data such as text, image resource, and state.
Styles - visual appearance including colors, sizes, and fonts.
Events - handlers triggered by user interaction.

Related guides

Overview - the editor interface as a whole.
Image - assign image resources to widgets.
Font library - apply typography to widgets.
Layout - arrange child widgets with flex layout.
Inspector - inspect and edit widget properties.
Preview - preview editor output.
Codegen - generate code from editor screens.
Transplant - run editor output on a target device.
Simulator - run editor output on a local machine.

`,"anyui-LIVE"]},{title:"Preview",headers:[{level:2,title:"Overview",slug:"overview",link:"#overview",children:[]},{level:2,title:"Starting a preview",slug:"starting-a-preview",link:"#starting-a-preview",children:[]},{level:2,title:"What preview validates",slug:"what-preview-validates",link:"#what-preview-validates",children:[]},{level:2,title:"Runtime version",slug:"runtime-version",link:"#runtime-version",children:[]},{level:2,title:"Related guides",slug:"related-guides",link:"#related-guides",children:[]}],path:"/docs/anyui-LIVE/guide/editor/preview.html",pathLocale:"/",extraFields:["Preview",`Preview lets you run the current project in a live rendering simulation that matches the final implementation exactly.
Overview
Clicking the preview button in the toolbar switches the editor to preview mode. In preview mode, the editor provides a live rendering simulation of the screens and widget behavior, so you can validate layout, interaction, and resource rendering without generating firmware or flashing a device.
Because preview runs the same generated code as the target, the observed behavior matches the final implementation exactly.
Starting a preview

Open the screen you want to validate in the editor canvas.
Click the preview button in the toolbar to enter preview mode.
Interact with the rendered screen to verify behavior.
Click the pause button to return to edit mode.

What preview validates

Layout - widget positioning, alignment, and responsive behavior.
Rendering - images, fonts, and Lottie animations.
Interaction - event triggers and responses.

Runtime version
Preview uses the active LVGL runtime version selected in the toolbar. Switching the version re-runs the preview against the corresponding runtime.
Related guides

Overview - the editor interface as a whole.
Canvas - design the screens that preview renders.
Toolbar - the preview button and runtime version selector.
Image - preview image rendering.
Font library - preview typography rendering.
Dynamic LVGL version - the runtime version preview executes on.
Override screen size - the display resolution used by preview.
Codegen - the generated code that preview executes.
Transplant - move preview output to a target device.
Simulator - run preview output on a local machine.

`,"anyui-LIVE"]},{title:"安装",headers:[{level:2,title:"Windows 10+",slug:"windows-10",link:"#windows-10",children:[]},{level:2,title:"Mac (x86)",slug:"mac-x86",link:"#mac-x86",children:[]},{level:2,title:"Linux",slug:"linux",link:"#linux",children:[]}],path:"/zh/docs/anyui/guide/0_installation.html",pathLocale:"/zh/",extraFields:["安装",`Windows 10+
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

`]},{title:"代码移植",headers:[{level:2,title:"概要",slug:"概要",link:"#概要",children:[]},{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"移植过程",slug:"移植过程",link:"#移植过程",children:[{level:3,title:"UI代码",slug:"ui代码",link:"#ui代码",children:[]},{level:3,title:"SDK",slug:"sdk",link:"#sdk",children:[]},{level:3,title:"虚拟代码",slug:"虚拟代码",link:"#虚拟代码",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]}],path:"/zh/docs/anyui/guide/100_transplant.html",pathLocale:"/zh/",extraFields:["代码移植",`概要
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

`]},{title:"使用外部图像文件作为源",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"启用外部图像支持",slug:"启用外部图像支持",link:"#启用外部图像支持",children:[]},{level:3,title:"文件系统驱动程序实现",slug:"文件系统驱动程序实现",link:"#文件系统驱动程序实现",children:[]}]},{level:2,title:"重要注意事项",slug:"重要注意事项",link:"#重要注意事项",children:[]}],path:"/zh/docs/anyui/guide/10_image_fs.html",pathLocale:"/zh/",extraFields:["使用外部图像文件作为源",`概述
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


`]},{title:"介绍",headers:[{level:2,title:"组件",slug:"组件",link:"#组件",children:[{level:3,title:"基础组件",slug:"基础组件",link:"#基础组件",children:[]},{level:3,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:3,title:"模板组件",slug:"模板组件",link:"#模板组件",children:[]},{level:3,title:"全局组件",slug:"全局组件",link:"#全局组件",children:[]}]},{level:2,title:"属性",slug:"属性",link:"#属性",children:[]},{level:2,title:"样式",slug:"样式",link:"#样式",children:[]},{level:2,title:"动作",slug:"动作",link:"#动作",children:[]},{level:2,title:"命令",slug:"命令",link:"#命令",children:[]},{level:2,title:"事件",slug:"事件",link:"#事件",children:[]}],path:"/zh/docs/anyui/guide/1_intro.html",pathLocale:"/zh/",extraFields:["介绍",`组件
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
`]},{title:"资源管理",headers:[{level:2,title:"图像管理",slug:"图像管理",link:"#图像管理",children:[]},{level:2,title:"字体管理",slug:"字体管理",link:"#字体管理",children:[]},{level:2,title:"Lottie动画管理",slug:"lottie动画管理",link:"#lottie动画管理",children:[]}],path:"/zh/docs/anyui/guide/3_resource.html",pathLocale:"/zh/",extraFields:["资源管理",`图像管理
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

`]},{title:"模板组件",headers:[{level:2,title:"保存模板组件",slug:"保存模板组件",link:"#保存模板组件",children:[]},{level:2,title:"修改模板组件",slug:"修改模板组件",link:"#修改模板组件",children:[]}],path:"/zh/docs/anyui/guide/4_composite.html",pathLocale:"/zh/",extraFields:["模板组件",`模板组件是用户定义的组件模板。用户可以将修改后的组件属性和样式保存为可重用的模板组件。
模板组件可以封装子组件，允许将整个容器层次结构及其子组件保存为单个模板。
保存模板组件
要创建模板组件，请选择所需组件，右键单击，然后从上下文菜单中选择&quot;保存为模板组件&quot;。

模板组件可以像标准组件一样使用。
修改模板组件
对于现有的模板组件，用户可以通过模板组件设置界面修改名称或删除模板。


注意
模板组件仅保留组件属性和样式，不包括事件处理程序和行为。

`]},{title:"隐藏和锁定",headers:[{level:2,title:"隐藏和显示组件",slug:"隐藏和显示组件",link:"#隐藏和显示组件",children:[{level:3,title:"隐藏组件交互",slug:"隐藏组件交互",link:"#隐藏组件交互",children:[]}]},{level:2,title:"锁定和解锁组件",slug:"锁定和解锁组件",link:"#锁定和解锁组件",children:[]}],path:"/zh/docs/anyui/guide/5_hide_lock.html",pathLocale:"/zh/",extraFields:["隐藏和锁定",`隐藏和显示组件
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

`]},{title:"屏幕管理",headers:[{level:2,title:"启用屏幕管理",slug:"启用屏幕管理",link:"#启用屏幕管理",children:[]},{level:2,title:"配置主屏幕",slug:"配置主屏幕",link:"#配置主屏幕",children:[]},{level:2,title:"实现导航",slug:"实现导航",link:"#实现导航",children:[]},{level:2,title:"创建屏幕转换",slug:"创建屏幕转换",link:"#创建屏幕转换",children:[]}],path:"/zh/docs/anyui/guide/7_scr_mgmt.html",pathLocale:"/zh/",extraFields:["屏幕管理",`现代应用程序通常由多个屏幕组成，包括一个主屏幕和几个子屏幕。用户从主屏幕导航到子屏幕，然后返回主屏幕。如果没有适当的屏幕管理，将需要手动屏幕切换。
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
`]},{title:"通信命令和事件",headers:[{level:2,title:"通信命令",slug:"通信命令",link:"#通信命令",children:[]},{level:2,title:"通信事件",slug:"通信事件",link:"#通信事件",children:[{level:3,title:"通信事件的状态和操作",slug:"通信事件的状态和操作",link:"#通信事件的状态和操作",children:[]}]},{level:2,title:"默认可用命令和事件",slug:"默认可用命令和事件",link:"#默认可用命令和事件",children:[]}],path:"/zh/docs/anyui/guide/9_comm.html",pathLocale:"/zh/",extraFields:["通信命令和事件",`通信命令和事件提供了应用程序层与设备底层硬件层之间交互的机制。
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

`]},{title:"文档",headers:[{level:2,title:"设置",slug:"设置",link:"#设置",children:[]},{level:2,title:"核心概念",slug:"核心概念",link:"#核心概念",children:[]},{level:2,title:"高阶组件",slug:"高阶组件",link:"#高阶组件",children:[]},{level:2,title:"动画",slug:"动画",link:"#动画",children:[]},{level:2,title:"高级功能",slug:"高级功能",link:"#高级功能",children:[]},{level:2,title:"开发",slug:"开发",link:"#开发",children:[]},{level:2,title:"技术支持",slug:"技术支持",link:"#技术支持",children:[]},{level:2,title:"文档结构",slug:"文档结构",link:"#文档结构",children:[]}],path:"/zh/docs/anyui/guide/",pathLocale:"/zh/",extraFields:["文档",`本文档提供了使用anyui可视化开发环境开发LVGL用户界面的综合技术指导。
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
`]},{title:"构建模式",headers:[{level:2,title:"完整",slug:"完整",link:"#完整",children:[]},{level:2,title:"增量",slug:"增量",link:"#增量",children:[]},{level:2,title:"最小",slug:"最小",link:"#最小",children:[]}],path:"/zh/docs/anyui/guide/build_mode.html",pathLocale:"/zh/",extraFields:["构建模式",`构建模式
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

`]},{title:"设计",headers:[{level:2,title:"创建组件",slug:"创建组件",link:"#创建组件",children:[]},{level:2,title:"选择组件",slug:"选择组件",link:"#选择组件",children:[]},{level:2,title:"多选组件",slug:"多选组件",link:"#多选组件",children:[]},{level:2,title:"移动组件",slug:"移动组件",link:"#移动组件",children:[]},{level:2,title:"调整组件大小",slug:"调整组件大小",link:"#调整组件大小",children:[{level:3,title:"比例调整大小",slug:"比例调整大小",link:"#比例调整大小",children:[]}]},{level:2,title:"复制组件",slug:"复制组件",link:"#复制组件",children:[]},{level:2,title:"删除组件",slug:"删除组件",link:"#删除组件",children:[]},{level:2,title:"对齐组件",slug:"对齐组件",link:"#对齐组件",children:[]},{level:2,title:"缩放控制",slug:"缩放控制",link:"#缩放控制",children:[]},{level:2,title:"移动画布",slug:"移动画布",link:"#移动画布",children:[]}],path:"/zh/docs/anyui/guide/design.html",pathLocale:"/zh/",extraFields:["设计",`anyui提供了直观的可视化设计环境，用于创建复杂的用户界面。该平台提供拖放功能和精确的组件布局控制，实现高效的UI开发。
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
`]},{title:"常见问题",headers:[{level:2,title:"构建和运行",slug:"构建和运行",link:"#构建和运行",children:[{level:3,title:"为什么即使空项目在Windows上也会遇到构建错误？",slug:"为什么即使空项目在windows上也会遇到构建错误",link:"#为什么即使空项目在windows上也会遇到构建错误",children:[]},{level:3,title:"为什么构建项目需要很长时间？",slug:"为什么构建项目需要很长时间",link:"#为什么构建项目需要很长时间",children:[]},{level:3,title:"为什么升级到 v0.37.0 后所有项目都消失了？",slug:"为什么升级到-v0-37-0-后所有项目都消失了",link:"#为什么升级到-v0-37-0-后所有项目都消失了",children:[]},{level:3,title:"为什么项目在 Windows 上构建和运行成功，但在升级到 v0.37.0 后失败？",slug:"为什么项目在-windows-上构建和运行成功-但在升级到-v0-37-0-后失败",link:"#为什么项目在-windows-上构建和运行成功-但在升级到-v0-37-0-后失败",children:[]},{level:3,title:"如何在项目创建后修改屏幕尺寸？",slug:"如何在项目创建后修改屏幕尺寸",link:"#如何在项目创建后修改屏幕尺寸",children:[]}]}],path:"/zh/docs/anyui/guide/faq.html",pathLocale:"/zh/",extraFields:["常见问题",`构建和运行
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

如何在项目创建后修改屏幕尺寸？
从 v1.0.0 开始，您可以在项目配置中修改屏幕尺寸。
导航到 项目配置… → 屏幕，输入所需的尺寸并保存配置。
`]},{title:"标志与状态",headers:[{level:2,title:"标志（Flag）",slug:"标志-flag",link:"#标志-flag",children:[{level:3,title:"初始标志",slug:"初始标志",link:"#初始标志",children:[]},{level:3,title:"修改标志",slug:"修改标志",link:"#修改标志",children:[]}]},{level:2,title:"状态（State）",slug:"状态-state",link:"#状态-state",children:[{level:3,title:"初始状态",slug:"初始状态",link:"#初始状态",children:[]},{level:3,title:"修改状态",slug:"修改状态",link:"#修改状态",children:[]}]}],path:"/zh/docs/anyui/guide/flag-and-state.html",pathLocale:"/zh/",extraFields:["标志与状态",`标志与状态
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

`]},{title:"字体",headers:[],path:"/zh/docs/anyui/guide/font.html",pathLocale:"/zh/",extraFields:["字体",`按照以下步骤使用字体。


在 字体管理 中添加字体资源


打开 项目配置... -&gt; 字体




创建字体库



填写字体库配置

字体名称：字体库名称，同时也是生成字体变量名的一部分。
字体资产：字体库使用的字体文件，请先在字体管理中添加。
字体大小：要使用的字体大小。
位深：字体的每像素位数（bits per pixel）。
字符集
范围：字体中包含的字符范围。
符号：字体中包含的额外字符。
标志：字体转换的额外参数，默认值为 --no-compress --no-prefilter。

--no-compress：不压缩字体。
--no-prefilter：不对字体进行预过滤。





对大多数用户来说，最重要的是：

字体名称：使用有意义的名称。
字体资产：选择正确的字体文件。
范围 和/或 符号：至少有一项不能为空。

如果你不熟悉其他选项，保持默认值即可。
`]},{title:"全局组件",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"全局状态栏",slug:"全局状态栏",link:"#全局状态栏",children:[{level:3,title:"启用全局状态栏",slug:"启用全局状态栏",link:"#启用全局状态栏",children:[]},{level:3,title:"全局组件视图",slug:"全局组件视图",link:"#全局组件视图",children:[]}]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[]},{level:2,title:"创建一个系统状态栏需要多久？",slug:"创建一个系统状态栏需要多久",link:"#创建一个系统状态栏需要多久",children:[]}],path:"/zh/docs/anyui/guide/globalcomponents.html",pathLocale:"/zh/",extraFields:["全局组件",`概述
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

`]},{title:"最新发布",headers:[{level:2,title:"v1.0.0 版本说明",slug:"v1-0-0-版本说明",link:"#v1-0-0-版本说明",children:[{level:3,title:"🚀 主要功能",slug:"🚀-主要功能",link:"#🚀-主要功能",children:[]},{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/docs/anyui/release/release-latest.html",pathLocale:"/zh/",extraFields:["最新发布",`v1.0.0 版本说明
🚀 主要功能
应用市场

通过应用市场上传、浏览和下载应用
直接从下载的应用创建新项目

自定义字体库

提供完整的字体库定制功能
与设计环境完全集成，实现无缝字体管理


相关信息
这提供了完整的字体定制，但也带来了某些破坏性变化：
你需要在项目配置中创建字体库，然后为所有文本相关组件重新选择字体。

详情请见
弹性布局系统

强大的 flexbox 布局能力，用于屏幕组件排列
增强的 UI 设计和组件定位灵活性

详情请见
统一设置对话框

设置界面采用一致性设计
改进的直观性和用户友好导航

组件预览系统

增强的组件栏和模板组件管理器，提供预览功能
支持实时预览的可视化组件选择

动态屏幕尺寸调整

项目创建后支持修改屏幕尺寸
灵活适应不同的显示需求

详情请见
其他更新

移除预嵌非LVGL原生支持字体
各种性能优化和稳定性改进
错误修复和可靠性增强

下载
Windows-v1.0.0
macOS-v1.0.0
`,"LVGL","HMI","UI","embedded application","模态组件","界面","设计","发布"]},{title:"0.13.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.13.0.html",pathLocale:"/zh/",extraFields:["0.13.0",`版本说明

添加 &quot;关于&quot; 以显示系统信息
优化性能
修复缩放兼容性问题
减少项目的构建时间，包括增量构建和完全构建
改善用户界面 / 用户体验
杂项

Windows-v0.13.0
Mac-v0.13.0
`,"release"]},{title:"0.13.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.13.1.html",pathLocale:"/zh/",extraFields:["0.13.1",`版本说明

修复一些属性编辑器的样式

Windows-v0.13.1
Mac-v0.13.1
`,"release"]},{title:"0.14.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.14.0.html",pathLocale:"/zh/",extraFields:["0.14.0",`版本说明

在创建新项目时支持 &quot;竖屏&quot; 模式
支持侧边栏、代码框、日志框和属性编辑器的面板大小调整
其他改进

Windows-v0.14.0
Mac-v0.14.0
`,"release"]},{title:"0.15.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.15.0.html",pathLocale:"/zh/",extraFields:["0.15.0",`版本说明

支持新版本检查，如果有新版本，在工具栏显示更新图标



其它优化

Windows-v0.15.0
Mac-v0.15.0
`,"release"]},{title:"0.16.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.16.0.html",pathLocale:"/zh/",extraFields:["0.16.0",`版本说明

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
`,"release"]},{title:"0.17.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.17.0.html",pathLocale:"/zh/",extraFields:["0.17.0",`版本说明

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
`,"release"]},{title:"0.17.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.17.1.html",pathLocale:"/zh/",extraFields:["0.17.1",`版本说明

在项目创建完成后直接打开该项目
在创建新项目时验证项目名称是否已存在
修复创建新项目时的颜色深度问题
修复创建新项目时项目名称无法完全删除的问题

Windows-v0.17.1
Mac-v0.17.1
`,"release"]},{title:"0.18.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.18.0.html",pathLocale:"/zh/",extraFields:["0.18.0",`版本说明

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
`,"release"]},{title:"0.20.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.20.0.html",pathLocale:"/zh/",extraFields:["0.20.0",`版本说明

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
`,"release"]},{title:"0.21.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.21.0.html",pathLocale:"/zh/",extraFields:["0.21.0",`版本说明

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
`,"release"]},{title:"0.22.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.22.0.html",pathLocale:"/zh/",extraFields:["0.22.0",` -->

版本说明

增加新的组件：动画图片（动态图像）和滚动框
增加新的高阶组件：复选框组和单选框组，具备状态自管理能力
当找不到图像、字体、Lottie动画引用时高亮显示对应的屏幕
修复标签滑块（Labelslider）的滑块旋钮位置问题
修复添加 / 删除字体导致数据重新初始化的问题
其他修复及改进

Windows-v0.22.0
Mac-v0.22.0
`,"release"]},{title:"0.25.0",headers:[{level:2,title:"5分钟搭建一个完整的LVGL应用框架",slug:"_5分钟搭建一个完整的lvgl应用框架",link:"#_5分钟搭建一个完整的lvgl应用框架",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.25.0.html",pathLocale:"/zh/",extraFields:["0.25.0",`5分钟搭建一个完整的LVGL应用框架

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
`,"release"]},{title:"0.26.0",headers:[{level:2,title:"2分钟创建一个圆形表盘带屏幕滑动操作的应用",slug:"_2分钟创建一个圆形表盘带屏幕滑动操作的应用",link:"#_2分钟创建一个圆形表盘带屏幕滑动操作的应用",children:[]},{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.26.0.html",pathLocale:"/zh/",extraFields:["0.26.0",`2分钟创建一个圆形表盘带屏幕滑动操作的应用

版本说明

创建新项目时，支持圆形显示屏
支持圆弧组件
支持屏幕滑动手势
如果显示屏形状是圆形，组件栏隐藏状态栏、导航栏和抽屉
其他修复和改进

Windows-v0.26.0 Download
Mac-v0.26.0 Download
`,"release"]},{title:"0.27.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.27.0.html",pathLocale:"/zh/",extraFields:["0.27.0",`
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
`,"release"]},{title:"0.28.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.28.0.html",pathLocale:"/zh/",extraFields:["0.28.0",`
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
`,"release"]},{title:"0.30.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.30.0.html",pathLocale:"/zh/",extraFields:["0.30.0",`
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
`,"release"]},{title:"0.32.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.32.0.html",pathLocale:"/zh/",extraFields:["0.32.0",`
版本说明

支持 LVGL v9
支持全局组件搜索
其它修复和改进

Windows-v0.32.0 Download
Mac-v0.32.0 Download
`,"release"]},{title:"0.33.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.33.0.html",pathLocale:"/zh/",extraFields:["0.33.0",`
版本说明

增加全屏模式
增加二维码组件
重新设计工具栏
其它修复和优化

Windows-v0.33.0 下载
Mac-v0.33.0 下载
`,"release"]},{title:"0.33.1",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.33.1.html",pathLocale:"/zh/",extraFields:["0.33.1",`版本说明

修复：16位色深下的图像显示错误
修复：将部件拖入容器时图层发生变化的问题
修复：当其他部件被拖入容器并发生重叠时，组件背景色可能被改变的问题
修复：屏幕背景不能被改变的问题
其它修复和优化

Windows-v0.33.1 Download
Mac-v0.33.1 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.34.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.34.0.html",pathLocale:"/zh/",extraFields:["0.34.0",`版本说明

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.35.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]}],path:"/zh/docs/anyui/release/release-v0.35.0.html",pathLocale:"/zh/",extraFields:["0.35.0",`版本说明

新增 Spinner 组件
支持背景色渐变
支持取色器
支持 Qrcode 图片
修复 Tabview 组件的错误
修复 NavigateBar 组件的代码生成错误
其他修复和优化

Windows-v0.35.0 Download
Mac-v0.35.0 Download
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.36.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[]}],path:"/zh/docs/anyui/release/release-v0.36.0.html",pathLocale:"/zh/",extraFields:["0.36.0",`版本说明

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.37.0",headers:[{level:2,title:"版本说明",slug:"版本说明",link:"#版本说明",children:[{level:3,title:"构建工具链配置",slug:"构建工具链配置",link:"#构建工具链配置",children:[]}]}],path:"/zh/docs/anyui/release/release-v0.37.0.html",pathLocale:"/zh/",extraFields:["0.37.0",`版本说明

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
`,"LVGL","HMI","UI","嵌入式应用，模态组件，界面，设计，release"]},{title:"0.38.0",headers:[{level:2,title:"v0.38.0 版本说明",slug:"v0-38-0-版本说明",link:"#v0-38-0-版本说明",children:[]},{level:2,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:2,title:"下载",slug:"下载",link:"#下载",children:[]}],path:"/zh/docs/anyui/release/release-v0.38.0.html",pathLocale:"/zh/",extraFields:["0.38.0",`v0.38.0 版本说明
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
`,"LVGL","HMI","UI","嵌入式应用","模态组件","界面","设计","发布"]},{title:"0.39.0",headers:[{level:2,title:"v0.39.0 版本说明",slug:"v0-39-0-版本说明",link:"#v0-39-0-版本说明",children:[{level:3,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/docs/anyui/release/release-v0.39.0.html",pathLocale:"/zh/",extraFields:["0.39.0",`v0.39.0 版本说明
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
`,"LVGL","HMI","UI","嵌入式应用","模态组件","界面","设计","发布"]},{title:"0.40.0",headers:[{level:2,title:"v0.40.0 版本说明",slug:"v0-40-0-版本说明",link:"#v0-40-0-版本说明",children:[{level:3,title:"主要改进",slug:"主要改进",link:"#主要改进",children:[]},{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/docs/anyui/release/release-v0.40.0.html",pathLocale:"/zh/",extraFields:["0.40.0",`v0.40.0 版本说明
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
`,"LVGL","HMI","UI","embedded application","模态组件","界面","设计","发布"]},{title:"最新发布",headers:[{level:2,title:"v0.40.1 版本说明",slug:"v0-40-1-版本说明",link:"#v0-40-1-版本说明",children:[{level:3,title:"下载",slug:"下载",link:"#下载",children:[]}]}],path:"/zh/docs/anyui/release/release-v0.40.1.html",pathLocale:"/zh/",extraFields:["最新发布",`v0.40.1 版本说明
该版本修复了潜在的构建错误。
下载
Windows-v0.40.1
macOS-v0.40.1
`,"LVGL","HMI","UI","embedded application","模态组件","界面","设计","发布"]},{title:"指南",headers:[{level:2,title:"快速开始",slug:"快速开始",link:"#快速开始",children:[]},{level:2,title:"工作区",slug:"工作区",link:"#工作区",children:[]},{level:2,title:"编辑器",slug:"编辑器",link:"#编辑器",children:[]},{level:2,title:"智能体",slug:"智能体",link:"#智能体",children:[]},{level:2,title:"主题",slug:"主题",link:"#主题",children:[]}],path:"/zh/docs/anyui-LIVE/guide/",pathLocale:"/zh/",extraFields:["指南",`这里汇总 anyui-LIVE 的专属指导内容。请通过下方文档索引探索各个主题与工作流。
快速开始

快速开始 - 使用前提、环境搭建与初始步骤

工作区

工作区 - 工作区配置与搭建

编辑器

概览 - 编辑器界面及其组件
预览 - 预览功能与使用场景
资源管理 - 导入图片与字体

智能体

智能体 - 使用内置智能体以自然语言构建界面

主题


图片 - 图片处理、优化与使用


字体库 - 字体库创建与排版


布局 - 使用弹性布局排列子组件


动态 LVGL 版本 - 在运行时切换 LVGL 运行时版本


覆盖屏幕尺寸 - 在运行时覆盖显示分辨率


代码生成 - 代码生成与配置


移植 - 与其他系统或项目的迁移与集成


模拟器 - 在本地机器上运行应用程序


动态显示尺寸变更 - 在编辑器中修改显示尺寸，并通过响应式布局适配界面


常见问题 - 常见问题解答，包括连接中断问题


`,"anyui-LIVE"]},{title:"智能体",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"打开智能体",slug:"打开智能体",link:"#打开智能体",children:[]},{level:2,title:"LLM 模型配置",slug:"llm-模型配置",link:"#llm-模型配置",children:[]},{level:2,title:"使用智能体构建界面",slug:"使用智能体构建界面",link:"#使用智能体构建界面",children:[]},{level:2,title:"会话历史",slug:"会话历史",link:"#会话历史",children:[]},{level:2,title:"智能体设置",slug:"智能体设置",link:"#智能体设置",children:[{level:3,title:"最大迭代次数",slug:"最大迭代次数",link:"#最大迭代次数",children:[]}]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/agent.html",pathLocale:"/zh/",extraFields:["智能体",`智能体是内置于编辑器中的 AI 助手。它与编辑环境深度集成：能够感知当前编辑器上下文，并通过编辑文档来为你更新用户界面。
概述
智能体以面板形式运行在编辑器内，因此它处理的是你正在编辑的文档，而不是一份副本：

它会获取当前编辑器上下文，包括文档、当前选中项以及运行时版本。
它通过编辑文档来创建、更新与删除控件，画布会立即反映每一处改动。
每次改动都是普通的文档编辑，因此可以用工具栏的撤销/重做进行复核与回退。

打开智能体
点击工具栏中的智能体图标即可打开智能体面板。该图标位于预览栏中，紧挨预览开关与运行时版本选择器。

LLM 模型配置
在智能体面板的设置中配置智能体所使用的模型。尚未保存 API Key 时，面板会给出提示以打开同一配置对话框。

在智能体面板中打开模型设置。
从可用选项中依次选择服务商与模型。
填入该服务商的 API Key 并保存。

国内推荐的服务商：



服务商
模型




DeepSeek
推荐。使用 DeepSeek 系列模型。


Qianwen
推荐。使用 Qwen 系列模型。



其他服务商也可选择，请使用你已具备 API 权限的那一个。
API Key 会先加密再存储，并在编辑器启动时自动解密，无需口令解锁。模型选择与连接问题的更多信息参见常见问题。

注意
请避免使用 VPN 连接。企业 VPN、代理与杀毒软件可能会重置长连接，从而中断智能体与模型之间的流式通道，并让智能体显示 offline 状态。

使用智能体构建界面

从工具栏打开智能体面板。
用自然语言描述你想要的界面：所需的屏幕、控件、文本与布局。
智能体会读取当前上下文，并根据描述制定一个计划，用户确认后开始执行。
在画布上查看结果。如果不符合预期，可以继续对话，或从工具栏撤销该改动。

由于智能体编辑的是与你相同的文档，改动一经应用便会显示在画布上，文档也始终是代码生成的唯一来源。
会话历史
与智能体的对话会被自动保存，因此在你关闭面板或重新加载编辑器后仍然可用。可通过智能体面板的工具栏查看历史对话。
智能体设置
智能体设置位于设置对话框的智能体分组中：



设置
描述




最大迭代次数
智能体在停止前可执行的最大模型轮次。默认值为 10，允许范围为 1-50。


需要用户批准
开启后，智能体的每个控件操作（创建、更新或删除）在执行前都需要你的明确批准。默认无需批准。



最大迭代次数
复杂需求可能需要比当前上限更多的轮次。如果对话因达到上限而停止：

在智能体输入框中输入 continue，让它从停止处继续执行。
如果你的需求经常需要更多轮次，请在智能体设置中提高最大迭代次数。

相关指南

工具栏 - 打开智能体面板的位置。
设置 - 智能体设置所在的位置。
常见问题 - 模型选择与 offline 连接问题。
概览 - 智能体所编辑的编辑器界面。
代码生成 - 编辑后的文档如何成为生成代码。

`,"anyui-LIVE"]},{title:"常见问题",headers:[{level:2,title:"问答",slug:"问答",link:"#问答",children:[{level:3,title:"问题：为什么我在智能体对话中会遇到 离线 错误？",slug:"问题-为什么我在智能体对话中会遇到-离线-错误",link:"#问题-为什么我在智能体对话中会遇到-离线-错误",children:[]}]}],path:"/zh/docs/anyui-LIVE/guide/faq.html",pathLocale:"/zh/",extraFields:["常见问题",`本页汇总 anyui-LIVE 用户最常遇到的问题，包括连接中断或掉线时的排查方法。
问答
问题：为什么我在智能体对话中会遇到 离线 错误？
回答： 企业代理、VPN 或杀毒软件在长连接空闲或达到连接时长上限后可能将其重置，从而触发 离线 错误。
`,"anyui-LIVE"]},{title:"快速开始",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"工作流",slug:"工作流",link:"#工作流",children:[{level:3,title:"1. 创建项目",slug:"_1-创建项目",link:"#_1-创建项目",children:[]},{level:3,title:"2. 设计您的 UI",slug:"_2-设计您的-ui",link:"#_2-设计您的-ui",children:[]},{level:3,title:"3. 预览与调整",slug:"_3-预览与调整",link:"#_3-预览与调整",children:[]},{level:3,title:"4. 生成代码",slug:"_4-生成代码",link:"#_4-生成代码",children:[]}]},{level:2,title:"工作流总结",slug:"工作流总结",link:"#工作流总结",children:[]}],path:"/zh/docs/anyui-LIVE/guide/get-started.html",pathLocale:"/zh/",extraFields:["快速开始",`上手 anyui-LIVE 非常简单。以下工作流将引导您从创建项目到下载生成的代码。
概述
anyui-LIVE 是一款直观、易于使用的工具，用于构建基于 LVGL 的用户界面。整个过程无需任何专业知识，每一步都设计得简单明了。
工作流
请按照以下步骤创建项目并生成代码。
1. 创建项目

访问 anyui-LIVE 工作区
通过配置以下设置创建新项目：

名称 – 项目的唯一标识符
描述 – 项目的简短描述
显示尺寸 – 目标屏幕分辨率
颜色深度 – 显示屏的位深
目标 LVGL 版本 – UI 将面向的 LVGL 版本


确认项目设置后，您将进入项目编辑器界面

2. 设计您的 UI

通过点击放置或拖放功能创建控件
通过修改控件的属性和样式来自定义其外观
通过添加事件处理器来配置交互行为

3. 预览与调整

使用预览功能验证视觉效果与交互行为
根据需要反复调整并预览您的设计

4. 生成代码

设计完成后下载生成的代码

工作流总结



步骤
阶段
说明




1
创建项目
配置显示尺寸、颜色深度和目标 LVGL 版本


2
设计 UI
添加控件并自定义属性、样式和事件处理器


3
预览与调整
验证外观与行为，并进行迭代


4
生成代码
下载生成的代码



`,"anyui-LIVE"]},{title:"介绍",headers:[{level:2,title:"与 anyui 的区别",slug:"与-anyui-的区别",link:"#与-anyui-的区别",children:[{level:3,title:"anyui-LIVE 优势",slug:"anyui-live-优势",link:"#anyui-live-优势",children:[]},{level:3,title:"anyui-LIVE 当前局限（计划逐步缩小差距）",slug:"anyui-live-当前局限-计划逐步缩小差距",link:"#anyui-live-当前局限-计划逐步缩小差距",children:[]}]}],path:"/zh/docs/anyui-LIVE/guide/introduction.html",pathLocale:"/zh/",extraFields:["介绍",`anyui-LIVE 是一款轻量、基于浏览器的 LVGL 界面构建工具。它与 anyui 都能帮助你构建 LVGL 界面，但二者的设计目标与能力有所不同。
anyui-LIVE 完全遵循 LVGL 设计理念和规范。
与 anyui 的区别
anyui-LIVE 优势

anyui-LIVE 轻量且无需安装，直接在浏览器中运行
anyui-LIVE 兼容所有平台
anyui-LIVE 支持原生渲染功能
anyui-LIVE 支持组件行为的实时预览
anyui-LIVE 提供动态 LVGL 版本切换能力
anyui-LIVE 允许覆盖屏幕尺寸设置

anyui-LIVE 当前局限（计划逐步缩小差距）

anyui-LIVE 不支持全局组件和高阶组件
anyui-LIVE 不支持存储在外部存储中的图片
anyui-LIVE 动画支持有限（暂不支持组件动画和Lottie动画）
anyui-LIVE 不支持通信事件

`,"anyui-LIVE"]},{title:"工作区",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"创建项目",slug:"创建项目",link:"#创建项目",children:[]},{level:2,title:"移除项目",slug:"移除项目",link:"#移除项目",children:[]},{level:2,title:"选择项目",slug:"选择项目",link:"#选择项目",children:[]},{level:2,title:"打开项目",slug:"打开项目",link:"#打开项目",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/workspace.html",pathLocale:"/zh/",extraFields:["工作区",`工作区是 anyui-LIVE 的项目管理界面。你可以在这里创建、移除、选择并打开要设计和生成的项目。本指南介绍工作区的项目管理工作流。
概述
工作区是项目入口。anyui-LIVE 并不使用单一全局文档，而是将工作组织为一个个独立项目，每个项目拥有各自的界面、组件、资源与配置。工作区列出所有项目，并允许你在打开它们到编辑器中进行设计之前进行管理。
当前中文工作区界面如下：

项目打开后，其包含的界面与资源参见图片指南、字体库指南与代码生成指南。
工作区提供四项关键能力：

创建新项目。
移除已有项目。
选择项目以查看其基本信息。
打开项目进入编辑模式。

创建项目
在工作区视图中选择新建以打开创建项目对话框。该对话框收集新项目的配置：



设置
描述




名称
项目名称。


描述
可选的项目描述。


屏幕宽度
目标显示器的水平分辨率。


屏幕高度
目标显示器的垂直分辨率。


色深
16 位或 32 位颜色。


目标版本
项目使用的 LVGL 运行时（及语言）版本。



屏幕尺寸、色深与目标版本的默认值来自项目默认配置，屏幕尺寸受支持的最小/最大分辨率约束。项目创建后，将出现在项目列表中，并可从那里打开。
移除项目
要移除项目，请使用其卡片上的删除操作。系统会弹出确认对话框，要求你确认移除。

注意
移除项目不可逆且无法恢复。项目文档、清单条目与同步记录将被永久删除。此操作无法撤销。

选择项目
单击项目卡片即可选中它。工作区检查器面板随后会显示该项目的基本信息：

名称与描述。
目标 LVGL 版本。
色深。
屏幕宽度与高度。
创建与最近更新时间。

如果找不到项目的文档，检查器会将其标记为不可用，以便你能区分可读项目与数据缺失的项目。
打开项目
双击项目卡片，或使用其打开操作，即可在编辑器中打开项目，开始设计其界面与组件。打开项目会导航到该项目的编辑器路由。
相关指南

图片 - 项目中存放的图片资源。
字体库 - 项目中存放的字体资源。
动态 LVGL 版本 - 项目使用的 LVGL 运行时版本。
覆盖屏幕尺寸 - 覆盖项目的显示分辨率。
概览 - 在项目内设计界面。
预览 - 在实时预览中运行项目。
代码生成 - 从项目生成代码。
移植 - 将生成的输出迁移到目标设备。
模拟器 - 在本地机器上运行应用程序。

`,"anyui-LIVE"]},{title:"布局",headers:[{level:2,title:"弹性布局（Flex Layout）",slug:"弹性布局-flex-layout",link:"#弹性布局-flex-layout",children:[{level:3,title:"弹性布局配置步骤",slug:"弹性布局配置步骤",link:"#弹性布局配置步骤",children:[]},{level:3,title:"弹性布局示例",slug:"弹性布局示例",link:"#弹性布局示例",children:[]}]}],path:"/zh/docs/anyui/guide/advanced/layout.html",pathLocale:"/zh/",extraFields:["布局",`布局
弹性布局（Flex Layout）
弹性布局是一种强大的布局系统，能够创建灵活且响应式的用户界面。
当前，有两种类型的组件支持弹性布局：

Container
Screen 本身

弹性布局配置步骤

点击 Screen 或 创建一个新 Container 组件
将 layout 属性设置为 flex
配置 flex flow, main align, track align 属性
添加行/列内边距以调整子组件之间的间距
使用基于百分比的尺寸确保子组件能够自适应容器大小
如果子组件有固定尺寸，则可以将 Container 组件的尺寸设置为 Auto 以适应内容


弹性布局示例
以下示例展示了使用嵌套 Container 组件实现的弹性布局。
按钮、下拉菜单和复选框会自动在容器内居中，无需设置明确的位置。

`]},{title:"介绍",headers:[{level:2,title:"什么是高阶组件(HoC)？",slug:"什么是高阶组件-hoc",link:"#什么是高阶组件-hoc",children:[{level:3,title:"功能",slug:"功能",link:"#功能",children:[]},{level:3,title:"限制",slug:"限制",link:"#限制",children:[]}]},{level:2,title:"使用高阶组件",slug:"使用高阶组件",link:"#使用高阶组件",children:[]}],path:"/zh/docs/anyui/guide/hoc/0_intro.html",pathLocale:"/zh/",extraFields:["介绍",`什么是高阶组件(HoC)？
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

`]},{title:"状态按钮",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"状态按钮配置",slug:"状态按钮配置",link:"#状态按钮配置",children:[]}],path:"/zh/docs/anyui/guide/hoc/1_statebtn.html",pathLocale:"/zh/",extraFields:["状态按钮",`介绍
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
`]},{title:"标签滑块",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"滑块标签",slug:"滑块标签",link:"#滑块标签",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/zh/docs/anyui/guide/hoc/2_labelslider.html",pathLocale:"/zh/",extraFields:["标签滑块",`介绍
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

`]},{title:"数值滑块",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"滑块标签",slug:"滑块标签",link:"#滑块标签",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[]}],path:"/zh/docs/anyui/guide/hoc/3_valueslider.html",pathLocale:"/zh/",extraFields:["数值滑块",`介绍
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
`]},{title:"复选框组和单选框组",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"组件结构",slug:"组件结构",link:"#组件结构",children:[]},{level:3,title:"属性",slug:"属性",link:"#属性",children:[]}]},{level:2,title:"复选框图像和标签",slug:"复选框图像和标签",link:"#复选框图像和标签",children:[{level:3,title:"图像",slug:"图像",link:"#图像",children:[]},{level:3,title:"标签",slug:"标签",link:"#标签",children:[]}]},{level:2,title:"视频演示",slug:"视频演示",link:"#视频演示",children:[{level:3,title:"3分钟创建复杂复选框组 - 案例1",slug:"_3分钟创建复杂复选框组-案例1",link:"#_3分钟创建复杂复选框组-案例1",children:[]},{level:3,title:"3分钟创建复杂复选框组 - 案例2",slug:"_3分钟创建复杂复选框组-案例2",link:"#_3分钟创建复杂复选框组-案例2",children:[]}]}],path:"/zh/docs/anyui/guide/hoc/4_checkgroup.html",pathLocale:"/zh/",extraFields:["复选框组和单选框组",`介绍
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

`]},{title:"抽屉",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"打开/关闭状态",slug:"打开-关闭状态",link:"#打开-关闭状态",children:[]},{level:3,title:"动画控制",slug:"动画控制",link:"#动画控制",children:[]},{level:3,title:"定位",slug:"定位",link:"#定位",children:[]},{level:3,title:"事件处理",slug:"事件处理",link:"#事件处理",children:[]}]}],path:"/zh/docs/anyui/guide/hoc/5_drawer.html",pathLocale:"/zh/",extraFields:["抽屉",`介绍
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
`]},{title:"状态栏",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"状态栏与全局状态栏",slug:"状态栏与全局状态栏",link:"#状态栏与全局状态栏",children:[]},{level:2,title:"通信命令和事件",slug:"通信命令和事件",link:"#通信命令和事件",children:[]}],path:"/zh/docs/anyui/guide/hoc/6_statusbar.html",pathLocale:"/zh/",extraFields:["状态栏",`介绍
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
`]},{title:"导航栏",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/zh/docs/anyui/guide/hoc/7_navigatebar.html",pathLocale:"/zh/",extraFields:["导航栏",`介绍
导航栏是屏幕管理系统的一部分的高阶组件，提供导航功能以返回到上一个屏幕。
必须启用屏幕管理才能使用导航栏组件。禁用时，该组件在组件栏中将不可见。
如果启用屏幕管理并在任何屏幕中实现导航栏，随后禁用屏幕管理将使导航栏失效。
有关综合配置详情，请参考屏幕管理。
`]},{title:"高阶组件",headers:[{level:2,title:"架构概述",slug:"架构概述",link:"#架构概述",children:[]},{level:2,title:"组件目录",slug:"组件目录",link:"#组件目录",children:[{level:3,title:"交互控制组件",slug:"交互控制组件",link:"#交互控制组件",children:[]},{level:3,title:"输入和选择组件",slug:"输入和选择组件",link:"#输入和选择组件",children:[]},{level:3,title:"导航和布局组件",slug:"导航和布局组件",link:"#导航和布局组件",children:[]}]},{level:2,title:"实现指南",slug:"实现指南",link:"#实现指南",children:[]},{level:2,title:"集成工作流",slug:"集成工作流",link:"#集成工作流",children:[]},{level:2,title:"实现最佳实践",slug:"实现最佳实践",link:"#实现最佳实践",children:[]}],path:"/zh/docs/anyui/guide/hoc/",pathLocale:"/zh/",extraFields:["高阶组件",`高阶组件 (HoC)
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
`]},{title:"Lottie动画",headers:[{level:2,title:"LVGL v8",slug:"lvgl-v8",link:"#lvgl-v8",children:[]},{level:2,title:"LVGL v9",slug:"lvgl-v9",link:"#lvgl-v9",children:[]}],path:"/zh/docs/anyui/guide/animation/12_lottie.html",pathLocale:"/zh/",extraFields:["Lottie动画",`LVGL v8
LVGL v8不原生支持Lottie动画。支持通过第三方库提供。有关实现细节，请参考rlottie集成。
rlottie库已集成到anyui中，通过anyui环境启用代码生成和Lottie动画模拟。但是，目标设备部署仍需要rlottie集成。
LVGL v9
从v9开始，Lottie组件使用集成到LVGL中的ThorVG库。要启用Lottie动画，必须启用LV_USE_THORVG_INTERNAL（使用内置ThorVG）或LV_USE_THORVG_EXTERNAL（外部链接），从而允许在LVGL v9中直接使用Lottie动画。
anyui使用内置ThorVG进行Lottie实现，并能在模拟器中模拟Lottie动画。
有关综合详情，请参考LVGL v9的Lottie。
`]},{title:"GIF动画图像",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"配置",slug:"配置",link:"#配置",children:[{level:3,title:"启用GIF支持",slug:"启用gif支持",link:"#启用gif支持",children:[]}]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/zh/docs/anyui/guide/animation/gif.html",pathLocale:"/zh/",extraFields:["GIF动画图像",`概述
从v0.28.0开始，已实现动画GIF图像支持。
配置
启用GIF支持
要启用GIF解码器支持，请在lv_conf.h中定义以下内容：
#define LV_USE_GIF 1      // 启用GIF解码器

使用
GIF图像可以作为嵌入变量或外部文件使用。有关外部文件实现，请参考使用外部图像文件作为源。
`]},{title:"屏幕加载动画",headers:[{level:2,title:"屏幕加载动画管理",slug:"屏幕加载动画管理",link:"#屏幕加载动画管理",children:[]}],path:"/zh/docs/anyui/guide/animation/screen_animation.html",pathLocale:"/zh/",extraFields:["屏幕加载动画",`屏幕加载动画
anyui 为屏幕过渡动画提供了专门的统一动画管理系统。
用户可以通过这个专用系统创建、管理和应用屏幕切换动画。
屏幕加载动画管理
屏幕加载动画管理遵循与组件动画管理相同的工作流程。

将动画应用到屏幕过渡。


`]},{title:"组件动画",headers:[{level:2,title:"组件动画管理",slug:"组件动画管理",link:"#组件动画管理",children:[]}],path:"/zh/docs/anyui/guide/animation/widget_animation.html",pathLocale:"/zh/",extraFields:["组件动画",`组件动画
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


`]},{title:"代码生成",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"生成的输出",slug:"生成的输出",link:"#生成的输出",children:[]},{level:2,title:"配置选项",slug:"配置选项",link:"#配置选项",children:[]},{level:2,title:"集成点",slug:"集成点",link:"#集成点",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/codegen.html",pathLocale:"/zh/",extraFields:["代码生成",`代码生成将工作区设计转换为可在目标设备上运行的 C 源代码。本指南介绍代码生成功能、配置选项以及集成点。
概述
在编辑器中设计界面后，anyui-LIVE 会生成界面实现并将资源转换到工作区的 generated/ 目录中。生成的代码自包含，不依赖用于构建最终固件的硬件和开发工具。
此处介绍管线本身；其消费的资源在图片指南与字体库指南中定义。
生成的输出
代码生成在 {root}/generated 中产生以下内容：



输出
描述




界面源文件
实现每个界面以及 setup_ui() 入口点的 C 文件。


资源源码
转换后的图片、字体和 Lottie 数据。


头文件
界面、组件以及生成变量的声明。



该输出为自动生成，不应手动修改。
配置选项
代码生成行为由项目配置控制：



选项
描述




分辨率
生成界面布局时使用的目标分辨率。


色深
生成资源时使用的颜色深度。



参见工作区指南了解这些选项的配置位置。
集成点
生成代码通过定义良好的入口点与系统其余部分集成：

setup_ui() - 从你的应用程序调用它来初始化 UI。
generated/ - 将这些文件复制到你的项目构建中。

这些集成点是移植指南的基础，该指南说明如何将生成代码迁移到目标设备。
相关指南

图片 - 图片资源如何被转换。
字体库 - 字体库如何被转换。
工作区 - 生成的输出目录。
概览 - 代码生成所编译的界面。
预览 - 代码生成产生的模拟代码。
移植 - 将生成代码集成到目标项目中。
模拟器 - 在本地机器上运行生成的代码。

`,"anyui-LIVE"]},{title:"动态显示尺寸变更",headers:[{level:2,title:"动态调整显示尺寸",slug:"动态调整显示尺寸",link:"#动态调整显示尺寸",children:[]},{level:2,title:"响应式布局集成",slug:"响应式布局集成",link:"#响应式布局集成",children:[]},{level:2,title:"版本支持",slug:"版本支持",link:"#版本支持",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/dynamic-display-size.html",pathLocale:"/zh/",extraFields:["动态显示尺寸变更",`项目的显示尺寸在创建后并非固定不变。你可以在编辑器中通过项目配置修改它，设计的其余部分会自动跟随更新。
动态调整显示尺寸
显示尺寸是项目配置的一部分。从工具栏打开设置对话框，在项目分组中修改：



设置项
说明




屏幕宽度
目标显示器的水平分辨率。


屏幕高度
目标显示器的垂直分辨率。



编辑过程中，实时预览面板会显示结果分辨率与宽高比。应用并保存配置后，项目中的所有界面与组件都会更新为新的显示尺寸，因此你可以立即针对新尺寸验证设计，无需重新创建或重新导入项目。
响应式布局集成
显示尺寸的变更与弹性布局配合使用时效果最佳。当容器使用布局时，其子项会按布局规则自动定位，而不是固定在某个坐标，因此界面会自行适配新的尺寸。
结合响应式布局后，设计能够：

自动适配设备尺寸的变化。
在设备尺寸变化时无需重新设计整个界面。布局会针对新的显示尺寸进行调整，同时保持界面的可用性与视觉一致性。

版本支持
实时调整显示尺寸是一项运行时能力：部分 LVGL 版本支持，部分不支持。各版本的能力请参见动态 LVGL 版本指南。
相关指南

设置 - 配置项目的屏幕宽度与高度。
布局 - 使用弹性布局排列子项，使界面适配尺寸变化。
覆盖屏幕尺寸 - 显示尺寸与仅用于编辑器的设计尺寸。
预览 - 按配置的显示尺寸验证设计。
动态 LVGL 版本 - 因版本而异的能力，包括实时显示尺寸调整。
工作区 - 创建项目时配置的显示尺寸。

`,"anyui-LIVE"]},{title:"动态 LVGL 版本",headers:[{level:2,title:"选择目标版本",slug:"选择目标版本",link:"#选择目标版本",children:[]},{level:2,title:"切换版本",slug:"切换版本",link:"#切换版本",children:[]},{level:2,title:"自动适配",slug:"自动适配",link:"#自动适配",children:[]},{level:2,title:"版本差异",slug:"版本差异",link:"#版本差异",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/dynamic-lvgl-version.html",pathLocale:"/zh/",extraFields:["动态 LVGL 版本",`anyui-LIVE 支持不同的 LVGL 版本，因此你可以针对固件将要使用的确切 LVGL 版本进行设计与验证。
选择目标版本
目标 LVGL 版本在工作区中创建项目时配置。目标版本设置保存了项目使用的 LVGL 版本，项目在编辑器与预览中将针对该版本运行。
切换版本
在编辑器中，工具栏提供版本选择器。你可以随时切换版本，编辑器会针对新选择的版本重新加载设计。切换过程中会显示加载指示，错误会被提示以便你重试。预览会针对新选择的版本重新运行。
自动适配
anyui-LIVE 会自动适配所选 LVGL 版本。编辑器中的可用属性、样式与事件会反映当前激活的版本，因此你只会看到该版本支持的内容，无需了解每个版本的 LVGL API。
版本差异
不同 LVGL 版本所提供的能力有所不同。两个示例：

实时显示尺寸调整 - 部分版本支持，部分不支持。参见覆盖屏幕尺寸指南。
图片处理 - 图片模式与对齐在 v8 与 v9 之间表现不同。参见图片指南。

相关指南

工作区 - 创建项目时配置目标版本。
概览 - 工具栏中的版本选择器。
预览 - 针对当前激活的版本运行项目。
覆盖屏幕尺寸 - 因版本而异的能力。

`,"anyui-LIVE"]},{title:"字体库",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"字体库管理",slug:"字体库管理",link:"#字体库管理",children:[{level:3,title:"字体库设置",slug:"字体库设置",link:"#字体库设置",children:[]}]},{level:2,title:"字体库转换选项",slug:"字体库转换选项",link:"#字体库转换选项",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/font-library.html",pathLocale:"/zh/",extraFields:["字体库",`本指南介绍 anyui-LIVE 中的字体库管理以及字体相关功能。
概述
anyui-LIVE 区分两个相关概念：



术语
定义




字体
由你导入的字体文件（*.ttf、*.otf 或 *.woff2），通常包含某个语言的完整字符集，如英文或中文。


字体库
只包含设计所需的部分字符集合的专用库，会被转换为 C 源数组并嵌入到生成的固件中。



仅导入字体文件并不能让文字可渲染：你必须创建字体库来选定字体文件以及设计所需的字符。字体文件在资源管理中导入。
相关的资源概念参见图片指南，资源管线参见代码生成指南。
字体库管理
在字体库视图中管理字体库：

在资源视图中导入字体文件；参见资源管理。
点击视图栏中的字体库按钮打开字体库视图。
创建字体库。


字体库设置



设置
描述




库名称
字体库的名称；也是生成字体变量名的一部分。


字体资产
此库使用的字体文件。请先在资源管理中导入字体文件。


字号
生成字体库时使用的字号。


Bpp
生成的字体的每像素位数。


字符
字体库中包含的预设字符。


范围
字体库中包含的字符范围。


符号
字体库中包含的额外字符。


标志
字体转换的额外选项。默认值为 --no-compress --no-prefilter。



对大多数项目而言，最重要的几项是：

库名称 - 使用有意义的名称。
字体资产 - 选择正确的字体文件。
范围/符号 - 至少其中一项不能为空。

如果你不熟悉其他选项，请保持默认值。

注
标志选项控制 LVGL 字体转换：

--no-compress：不对字体进行压缩。
--no-prefilter：不对字体进行预过滤。


字体库转换选项
生成阶段会将字体库转换为字形位图表。关键转换选项：

Bpp（每像素位数） - 较低的值（如 1 或 2）会降低内存占用，但抗锯齿质量下降；较高的值（如 4）提升质量但增加内存。
范围 - 仅包含界面实际使用的字符码，以保持字体表精简。
符号 - 添加不属于连续范围的具体字形（如图标）。

优化字符集是减少字体库 ROM 占用最有效的方式。参见代码生成指南了解生成的字体代码如何集成到构建中。

注意
你有责任确保导入并使用的每个字体都具备相应的权利与许可。

相关指南

资源管理 - 导入字体库使用的字体文件。
图片 - 与字体库一同管理位图资源。
概览 - 在画布上应用排版属性。
预览 - 在生成前验证字体渲染。
代码生成 - 字体库如何成为生成代码。
移植 - 目标设备上的内存与配置。
模拟器 - 在本地机器上运行应用程序。

`,"anyui-LIVE"]},{title:"图片",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"导入图片",slug:"导入图片",link:"#导入图片",children:[]},{level:2,title:"图片组件",slug:"图片组件",link:"#图片组件",children:[{level:3,title:"格式转换",slug:"格式转换",link:"#格式转换",children:[]},{level:3,title:"内存考虑",slug:"内存考虑",link:"#内存考虑",children:[]}]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/image.html",pathLocale:"/zh/",extraFields:["图片",`图片是每个嵌入式界面不可或缺的部分。本指南介绍 anyui-LIVE 如何在设计、代码生成以及目标运行时阶段处理、优化和使用图片。
概述
anyui-LIVE 将图片视为一等资源。导入项目的图片可被所有界面和组件复用，并在构建时自动转换并嵌入到生成的固件中。
图片管线包含四个阶段：

导入 - 从本地文件将图片添加到资源池。
引用 - 将图片赋值给组件属性。
生成 - 在生成代码中输出转换后的资源。

参阅代码生成指南了解生成的图片代码如何产生。
导入图片
在资源视图中导入图片。当前支持 PNG 格式。

对于同时包含透明通道和清晰边缘的 UI 素材，推荐使用 PNG。

导入后，图片会出现在资源选择器中，可赋值给任意图片组件属性。

注意
你有责任确保导入并使用的每张图片都具备相应的权利与许可。

图片组件
放置到界面上的图片引用资源池中的资源。组件暴露以下关键属性：



属性
描述




Resource（资源）
要显示的图片资源。


X / Y
图片在界面中的位置。


Width / Height（宽/高）
显示尺寸。固定时，图片不会被缩放。


Opacity（透明度）
0（完全透明）到 255（完全不透明）。


Rotation（旋转）
旋转角度（度）。


Blend mode（混合模式）
与背景合成时使用的混合模式。



当组件尺寸与源图片像素一致时，图片将按原始尺寸显示而不缩放。参见编辑器指南了解如何在画布上编辑这些属性。
格式转换
在生成阶段，anyui-LIVE 会将源图片转换为针对 LVGL 优化的 C 源数组形式输出。在资源设置中配置输出格式：

C 数组 - 图片以 C 源数组形式输出并编译进固件。

内存考虑
解码后的图片在显示期间保存在 RAM 中。若目标设备内存不足，请在 lv_conf.h 中增大 LV_MEM_SIZE：
#define LV_MEM_SIZE    (8 * 1024U * 1024U)          /*[bytes]*/

相关指南

资源管理 - 导入图片组件使用的图片。
字体库 - 与图片资源一同管理排版。
概览 - 在画布上分配与编辑图片属性。
预览 - 在生成前预览图片渲染效果。
代码生成 - 图片资源如何成为生成代码。

`,"anyui-LIVE"]},{title:"布局",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"模式",slug:"模式",link:"#模式",children:[]},{level:2,title:"弹性流向",slug:"弹性流向",link:"#弹性流向",children:[]},{level:2,title:"对齐",slug:"对齐",link:"#对齐",children:[]},{level:2,title:"间距",slug:"间距",link:"#间距",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/layout.html",pathLocale:"/zh/",extraFields:["布局",`布局控制容器组件的子项如何排列。本指南介绍 anyui-LIVE 中可用的布局选项，以及它们在生成的 LVGL 输出中的表现。
概述
任何组件都可以作为布局容器。当容器使用布局时，其子项会按照布局规则自动放置，而不是固定在某个位置。anyui-LIVE 会在画布上实时渲染布局，因此改动立即可见，并会在预览与生成的代码中体现。
布局设置位于检查器的布局分组中。
模式
模式选项用于选择容器的布局引擎：

无 - 子项手动放置，不受布局规则影响。
弹性 - 子项由弹性容器排列。

弹性流向
弹性流向设置弹性容器的方向与换行策略，决定子项是按行、按列还是以其换行变体排列：

行 / 行反向
列 / 列反向
行换行 / 行换行反向
列换行 / 列换行反向

对齐
弹性容器提供三种对齐选项：

主轴对齐 - 沿主轴（弹性流向方向）分布子项：起始、居中、结束、均匀分布、环绕分布或两端分布。
交叉轴对齐 - 沿交叉轴（垂直于弹性流向方向）对齐子项。
轨道对齐 - 当流向创建多行或多列时，对齐换行的弹性轨道。

间距

行间距 - 设置行与行之间的间隔。
列间距 - 设置列与列之间的间隔。

间距值为非负整数，单位为像素。
相关指南

图片 - 为组件分配位图资源。
字体库 - 排版与文本布局。
概览 - 在画布上设计界面。
预览 - 在实时模拟中验证布局。
代码生成 - 布局如何成为生成的 LVGL 代码。
覆盖屏幕尺寸 - 在运行时更改显示分辨率。
动态显示尺寸变更 - 在显示尺寸变化时适配界面。

`,"anyui-LIVE"]},{title:"覆盖屏幕尺寸",headers:[{level:2,title:"设计时",slug:"设计时",link:"#设计时",children:[]},{level:2,title:"预览时",slug:"预览时",link:"#预览时",children:[]},{level:2,title:"约束",slug:"约束",link:"#约束",children:[]},{level:2,title:"内存考虑",slug:"内存考虑",link:"#内存考虑",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/override-screen-size.html",pathLocale:"/zh/",extraFields:["覆盖屏幕尺寸",`界面有两种尺寸：与目标设备一致的显示尺寸，以及你在编辑器中工作时使用的设计尺寸。本指南介绍两者之间的关系。
本指南使用下面这个示例场景：

显示尺寸：800 x 480
设计尺寸：800 x 600
组件摆放：顶部放置一个按钮，底部放置一个圆弧组件

设计时
设计时，你可以放大界面以容纳更多组件。放大的尺寸是仅用于编辑器的覆盖：它影响你工作时的画布布局，但不会用于预览。
在这个示例中，设计尺寸改为 800 x 600 后，两个组件都可以在画布中正常完整显示。

预览时
预览项目时，界面尺寸会设置为项目配置中的显示尺寸。因此预览更贴近真实使用场景，匹配目标设备的分辨率，而不是放大的设计画布。
在同一布局下，预览会切回项目配置中的显示尺寸 800 x 480。顶部按钮仍然正常可见，而底部的圆弧组件只会部分显示，需要滚动界面才能完整看到。

约束
屏幕尺寸受支持的最小与最大分辨率约束。
内存考虑
更大的界面会增加渲染输出的内存占用。如果目标设备内存不足，请按移植指南所述，在 lv_conf.h 中增大 LV_MEM_SIZE。
相关指南

工作区 - 为项目配置目标显示尺寸。
布局 - 组件如何在设计画布上排列。
概览 - 在编辑器中设计界面。
移植 - 目标设备上的内存与配置。
模拟器 - 在本地机器上运行应用程序。
动态显示尺寸变更 - 修改显示尺寸，并借助响应式布局适配界面。

`,"anyui-LIVE"]},{title:"模拟器",headers:[{level:2,title:"设置编译环境",slug:"设置编译环境",link:"#设置编译环境",children:[{level:3,title:"Windows",slug:"windows",link:"#windows",children:[]},{level:3,title:"macOS",slug:"macos",link:"#macos",children:[]},{level:3,title:"Linux",slug:"linux",link:"#linux",children:[]}]},{level:2,title:"下载模拟器项目模板",slug:"下载模拟器项目模板",link:"#下载模拟器项目模板",children:[]},{level:2,title:"下载生成的代码",slug:"下载生成的代码",link:"#下载生成的代码",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/simulator.html",pathLocale:"/zh/",extraFields:["模拟器",`如果您想在本地进行代码级编译和模拟，您可以使用本地模拟器。
设置编译环境
本地模拟器需要安装编译工具链和SDL2库。
Windows


编译工具链
我们提供了一个Windows的工具链，您可以从tools-for-windows下载它。双击launch-tools-shell.bat打开打开一个命令提示符，它会自动配置环境变量。在同一个命令提示符窗口中，cd到模拟器项目目录，运行模拟器。


SDL2
我们直接在模拟器项目目录中打包了SDL2库，因此您不需要单独安装它。


macOS


编译工具链
您需要安装C/C++编译工具链，用于编译模拟器代码。如果macOS已经安装了clang，您可以跳过此步骤。


SDL2
您可以运行以下命令在macOS上安装SDL2：


brew install sdl2

Linux


编译工具链
您需要安装C/C++编译工具链，用于编译模拟器代码。从您的发行版的包管理器安装它们。


SDL2
您可以运行以下命令在Linux上安装SDL2：


Ubuntu/Debian
sudo apt install libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev



Fedora
sudo dnf install SDL2-devel SDL2_image-devel SDL2_ttf-devel



其他Linux发行版
搜索您的发行版的包管理器以安装SDL2。




下载模拟器项目模板
我们提供了一个本地模拟器项目模板，您可以直接使用它开始。请参阅模拟器项目模板。
有两种项目模板可用，分别在v8.3.7和v9.2.2目录下，它们与anyui-LIVE支持的LVGL版本匹配。
下载生成的代码
从anyui-LIVE下载生成的代码，提取它并复制generated目录到模拟器项目目录。
以上步骤完成后，您可以执行以下命令在v8.3.7或v9.2.2目录下运行模拟器：
cd v8.3.7
make &amp;&amp; make run

cd v9.2.2
make &amp;&amp; make run

`,"anyui-LIVE"]},{title:"移植",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"移植流程",slug:"移植流程",link:"#移植流程",children:[{level:3,title:"UI 代码",slug:"ui-代码",link:"#ui-代码",children:[]},{level:3,title:"lv_conf.h",slug:"lv-conf-h",link:"#lv-conf-h",children:[]}]},{level:2,title:"与外部系统集成",slug:"与外部系统集成",link:"#与外部系统集成",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/Subject/transplant.html",pathLocale:"/zh/",extraFields:["移植",`移植将生成的 anyui-LIVE 输出迁移到目标设备，或将其集成到现有项目中。本指南介绍迁移、移植以及与其他系统的集成。
概述
anyui-LIVE 专注于 UI 设计，生成的 UI 代码被设计为独立于特定硬件和开发工具（如 Keil）。生成代码可迁移到任何满足 LVGL 要求的目标设备。
被移植的输出参见代码生成指南，其依赖的代码参见图片指南与字体库指南。
移植流程
UI 代码
所有 UI 代码生成在 {root}/generated 目录中，包括界面实现和转换后的资源（图片、字体）。移植时：

将 generated 代码复制到你的项目中。
调用 setup_ui() 初始化 UI。
为目标工具链编译项目。

此代码为自动生成，不应手动修改。
lv_conf.h
维护一份设备固件专属的 lv_conf.h 副本，至少包含以下配置：

以下三项是必须而且最重要的：

LV_HOR_RES_MAX 和 LV_VER_RES_MAX - 显示分辨率
LV_COLOR_DEPTH - 颜色深度
LV_MEM_SIZE - 内存大小（字节）


配置分辨率

对于LVGL 8.x版本，要在lv_conf.h配置分辨率

#define LV_HOR_RES_MAX (?) // 水平分辨率
#define LV_VER_RES_MAX (?) // 垂直分辨率


对于LVGL 9.x版本，在hal_init(w, h)中配置分辨率

hal_init(720, 480); // 配置显示分辨率为 720 x 480

在lv_conf.h中配置颜色深度和内存大小
/** 必需配置 */
#define LV_COLOR_DEPTH 32 // 颜色深度

/* 可用于 lv_mem_alloc() 的内存大小，单位字节 */
#define LV_MEM_SIZE (32 * 1024) // 内存大小 32KB，根据需要调整

在lv_conf.h中配置可选项
/** LVGL 组件 */
#define LV_USE_BTN 1 // 启用按钮
#define LV_USE_IMG 1 // 启用图片
#define LV_USE_LABEL 1 // 启用标签
// 按需添加其他组件

/** 按需的可选配置 */
/** LVGL 内置字体 */
#define LV_FONT_MONTSERRAT_8 1 // 1：启用 Montserrat 8px 字体；0：不启用
// 其他 MONTSERRAT 字体大小 ...
#define LV_FONT_MONTSERRAT_48 1 // 1：启用 Montserrat 48px 字体；0：不启用

与外部系统集成
生成代码可与现有嵌入式项目集成：

应用入口 - 在 LVGL 初始化后（lv_init()和hal_init() 之后） 调用 setup_ui()。

相关指南

字体库 - 移植中包含的字体资源。
工作区 - 生成的文件夹。
概览 - 被移植的界面。
代码生成 - 生成的输出与入口点。

`,"anyui-LIVE"]},{title:"检查器",headers:[{level:2,title:"单选",slug:"单选",link:"#单选",children:[]},{level:2,title:"版本感知检查",slug:"版本感知检查",link:"#版本感知检查",children:[]},{level:2,title:"多选",slug:"多选",link:"#多选",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Inspector.html",pathLocale:"/zh/",extraFields:["检查器",`检查器显示选中组件的属性，并允许你编辑它们。它作为编辑器的侧边面板出现。
单选
当选中单个组件时，检查器会按类别分组渲染该组件的属性。设置通过相应的控件（文本输入、数字、颜色、选择器等）编辑，并立即应用到组件。
检查器根据组件类型从注册表中选取对应的检查器组件，因此每种组件类型只显示其相关属性。
版本感知检查
检查器根据当前激活的 LVGL 运行时版本解析其属性定义。因此可用属性集合会反映当前所选运行时版本的组件定义，并在版本切换时正确更新。
多选

同类型多选 - 当选中多个同类型组件时，检查器显示共有的属性，并将编辑一次性应用到所有选中组件。
混合多选 - 当选择包含不同类型的组件（或无法一起编辑的组合）时，检查器显示摘要并禁用属性编辑。

相关指南

概览 - 编辑器整体界面。
画布 - 在画布上选择组件以进行检查。

`,"anyui-LIVE"]},{title:"导航器",headers:[{level:2,title:"界面树",slug:"界面树",link:"#界面树",children:[]},{level:2,title:"组件树",slug:"组件树",link:"#组件树",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Navigator.html",pathLocale:"/zh/",extraFields:["导航器",`导航器提供当前项目界面与组件的导航与管理，分为界面树与组件树两部分。
界面树
界面树列出项目的界面。选中某个界面会将其设为当前激活界面并显示在画布上。界面树支持：

创建 - 添加新界面。
复制 - 复制当前激活界面。
删除 - 移除当前激活界面。
重排 - 在列表中上移或下移界面。
隐藏/显示 - 切换界面的可见性。

组件树
组件树按层级列出当前激活界面的组件。它支持：

选择 - 点击选中一个组件；配合 Shift/Ctrl/Cmd 点击可多选。
重命名 - 更新组件的名称。
通过拖放重设父级 - 将组件拖到新的父级以改变层级关系。
复制 - 复制选中的组件。
删除 - 移除选中的组件。
隐藏/显示 - 切换组件的可见性。
锁定 - 切换组件的锁定状态。
悬停高亮 - 悬停树行时会高亮画布上对应的组件（启用时）。

在预览模式下，所有导航器操作均被锁定。
相关指南

概览 - 编辑器整体界面。
画布 - 设计界面的可视化画布。

`,"anyui-LIVE"]},{title:"概览",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"界面组件",slug:"界面组件",link:"#界面组件",children:[{level:3,title:"工具栏",slug:"工具栏",link:"#工具栏",children:[]},{level:3,title:"导航器",slug:"导航器",link:"#导航器",children:[]},{level:3,title:"检查器",slug:"检查器",link:"#检查器",children:[]},{level:3,title:"状态栏",slug:"状态栏",link:"#状态栏",children:[]},{level:3,title:"画布",slug:"画布",link:"#画布",children:[]},{level:3,title:"设置",slug:"设置",link:"#设置",children:[]},{level:3,title:"预览",slug:"预览",link:"#预览",children:[]}]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Overview.html",pathLocale:"/zh/",extraFields:["概览",`编辑器是可视化的设计界面，用于构建项目的界面与组件。本指南介绍编辑器的界面及其组成部分。
概述
以编辑模式打开项目即可进入编辑器。编辑器提供了一个实时、支持拖放的画布，用于设计 LVGL 界面。组件被放置到画布上，借助对齐辅助线进行排列，并通过检查器进行定制。
编辑器界面由若干组件组成，每个组件承担特定职责：



组件
职责




工具栏
视图切换、预览、撤销/重做、导出与设置等命令操作。


导航器
导航并管理项目的界面与组件。


检查器
检查并编辑选中组件的属性。


状态栏
显示编辑状态与文档同步状态。


画布
实时渲染并编辑组件的中央区域。


设置
配置 UI 与项目。


预览
运行项目的实时渲染模拟。



界面组件
工具栏
工具栏承载当前文档的命令操作：在编辑器、资源、字体库与代码视图之间切换；切换预览与 LVGL 运行时版本；主页、新建项目、撤销/重做、导出；以及打开设置。参见工具栏指南。
导航器
导航器包含界面树与组件树。它支持创建、复制、重排与删除界面，选择与重设组件父级，以及切换可见性与锁定状态。参见导航器指南。
检查器
检查器显示选中组件的属性，并允许你编辑它们。它支持单选、多选与同类型多选，并会适配当前激活的 LVGL 运行时版本。参见检查器指南。
状态栏
状态栏显示当前模式、选中项、最近构建时间等编辑状态，并提供合规与运行时状态徽标，用于唤起对应的底部面板。参见状态栏指南。
画布
画布是中央区域，组件在此被放置、选择、移动、缩放与排列。画布实时渲染组件，因此设计改动立即可见。参见画布指南。
设置
设置对话框将通用、项目、UI 与关于配置分组。参见设置指南。
预览
点击预览按钮可将编辑器切换到预览模式，该模式提供与最终实现完全一致的组件行为实时渲染模拟。参见预览指南。
相关指南

工作区 - 创建、管理并打开项目。
图片 - 为组件分配图片资源。
字体库 - 为组件应用排版。
布局 - 使用弹性布局排列子组件。
动态 LVGL 版本 - 切换 LVGL 运行时版本。
覆盖屏幕尺寸 - 在运行时覆盖显示分辨率。
代码生成 - 从编辑器界面生成代码。
移植 - 在目标设备上运行编辑器输出。
模拟器 - 在本地机器上运行编辑器输出。

`,"anyui-LIVE"]},{title:"资源管理",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"导入图片",slug:"导入图片",link:"#导入图片",children:[]},{level:2,title:"导入字体",slug:"导入字体",link:"#导入字体",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Resource.html",pathLocale:"/zh/",extraFields:["资源管理",`资源视图用于导入和管理项目使用的外部资产。在此导入的资源可供所有界面与组件使用，并在构建时转换并嵌入到生成的固件中。
概述
在视图栏中切换到资源视图。



资源类型
描述




图片
图片组件使用的位图资产。当前支持 PNG。


字体
用于创建字体库的字体文件（*.ttf、*.otf、*.woff2）。



参见代码生成指南了解导入的资源如何成为生成代码。
导入图片

在视图栏中打开资源视图。
添加图片文件。对于同时包含透明通道和清晰边缘的 UI 素材，推荐使用 PNG。
图片会出现在资源选择器中，可赋值给任意图片组件属性。

完整的图片管线参见图片指南。
导入字体

在视图栏中打开资源视图。
添加字体文件：*.ttf、*.otf 或 *.woff2。
该字体文件在创建字体库时可被选择。

字体文件包含完整的字符集。设计实际使用的字符在创建字体库时选定，字体库会被转换为 C 源数组。

注意
你有责任确保导入并使用的每个资源都具备相应的权利与许可。

相关指南

工具栏 - 用于切换到资源视图的视图栏。
图片 - 图片处理、优化与使用。
字体库 - 基于导入的字体文件创建字体库。
代码生成 - 资源如何成为生成代码。

`,"anyui-LIVE"]},{title:"设置",headers:[{level:2,title:"通用",slug:"通用",link:"#通用",children:[]},{level:2,title:"项目",slug:"项目",link:"#项目",children:[]},{level:2,title:"UI",slug:"ui",link:"#ui",children:[]},{level:2,title:"关于",slug:"关于",link:"#关于",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Settings.html",pathLocale:"/zh/",extraFields:["设置",`设置对话框对编辑器的配置选项进行分组。它从工具栏打开，分为通用、项目、UI、智能体与关于五个部分。
通用
通用设置应用于整个编辑器：



设置
描述




语言
编辑器的界面语言。


组件预览
是否在组件栏中显示组件预览。



项目
项目设置配置当前项目：



设置
描述




屏幕宽度
目标显示器的水平分辨率。


屏幕高度
目标显示器的垂直分辨率。


色深
16 位或 32 位颜色。


目标版本
项目使用的 LVGL 运行时（及语言）版本。



编辑时，实时预览面板会显示最终的解析度与宽高比。保存后更改会更新项目配置。
UI
UI 设置配置画布行为：



设置
描述




悬停高亮
在画布上高亮鼠标指针下的组件。


全局对齐
对齐到整个屏幕（全局），或仅对被拖组件的容器与兄弟组件（局部）。



关于
关于部分显示用于诊断的主机信息：

浏览器名称与版本。
平台。
构建时间戳。

相关指南

概览 - 编辑器整体界面。
工具栏 - 打开设置对话框的位置。
智能体 - 智能体设置分组。

`,"anyui-LIVE"]},{title:"状态栏",headers:[{level:2,title:"状态信息",slug:"状态信息",link:"#状态信息",children:[]},{level:2,title:"合规徽标",slug:"合规徽标",link:"#合规徽标",children:[]},{level:2,title:"运行时状态徽标",slug:"运行时状态徽标",link:"#运行时状态徽标",children:[]},{level:2,title:"底部面板联动",slug:"底部面板联动",link:"#底部面板联动",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Statusbar.html",pathLocale:"/zh/",extraFields:["状态栏",`状态栏是编辑器的底部栏，显示编辑状态与文档同步状态，并用于唤起对应的底部面板。
状态信息
状态栏显示实时编辑状态，包括：

当前模式（编辑或预览）。
当前会话状态。
选中的组件数量。
最近一次构建的时间戳。

合规徽标
合规徽标指示文档中检测到的合规问题数量。点击它会打开底部面板中的问题选项卡。
运行时状态徽标
运行时状态徽标显示 LVGL 运行时连接状态及累积的事件日志。点击它会打开底部面板中的运行时选项卡。
底部面板联动
徽标已联动到可停靠的底部面板：点击合规徽标会唤起问题选项卡，点击运行时状态徽标会唤起运行时选项卡。
相关指南

概览 - 编辑器整体界面。
预览 - 预览模式与运行时状态。

`,"anyui-LIVE"]},{title:"工具栏",headers:[{level:2,title:"视图栏",slug:"视图栏",link:"#视图栏",children:[]},{level:2,title:"预览栏",slug:"预览栏",link:"#预览栏",children:[]},{level:2,title:"文档栏",slug:"文档栏",link:"#文档栏",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/Toolbar.html",pathLocale:"/zh/",extraFields:["工具栏",`工具栏承载当前文档的命令操作，渲染在编辑器顶部，分为三组：视图栏、预览栏与文档栏。
视图栏
视图栏用于在中央区域的各编辑器视图之间切换：



视图
描述




编辑器
设计界面与组件的可视化画布。


资源
用于导入和管理图片与字体的资源视图。


字体库
用于创建和管理字体库的字体库视图。


代码
生成的代码视图。选中它会先触发 LVGL 源码构建，再显示代码。



预览栏
预览栏控制预览模式与当前激活的 LVGL 运行时版本：

预览开关 - 在编辑模式与预览模式之间切换。点击播放按钮进入预览；点击暂停返回编辑模式。
运行时版本 - 选择项目使用的 LVGL 运行时（及语言）版本，例如 LVGL 9.x 或 LVGL 8.x。版本切换过程中该选择器会被禁用。
智能体 - 打开智能体面板，用自然语言构建界面；参见智能体。

文档栏
文档栏提供文档级命令：



命令
描述




主页
返回工作区。


新建
从工作区创建新项目。


撤销 / 重做
在编辑历史中后退与前进。两者在预览模式下都被锁定。


导出
重新生成源码包并导出（例如下载为 ZIP）。


反馈问题
打开问题跟踪器反馈问题。


设置
打开设置对话框。



相关指南

概览 - 编辑器整体界面。
预览 - 预览模式与 LVGL 运行时版本。
设置 - 从工具栏打开的设置对话框。
资源管理 - 导入图片与字体。
智能体 - 从预览栏打开的智能体面板。

`,"anyui-LIVE"]},{title:"画布",headers:[{level:2,title:"创建组件",slug:"创建组件",link:"#创建组件",children:[]},{level:2,title:"选择组件",slug:"选择组件",link:"#选择组件",children:[]},{level:2,title:"排列组件",slug:"排列组件",link:"#排列组件",children:[{level:3,title:"移动",slug:"移动",link:"#移动",children:[]},{level:3,title:"缩放",slug:"缩放",link:"#缩放",children:[]},{level:3,title:"复制",slug:"复制",link:"#复制",children:[]},{level:3,title:"对齐",slug:"对齐",link:"#对齐",children:[]},{level:3,title:"删除",slug:"删除",link:"#删除",children:[]}]},{level:2,title:"画布控制",slug:"画布控制",link:"#画布控制",children:[]},{level:2,title:"属性、样式与事件",slug:"属性、样式与事件",link:"#属性、样式与事件",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/canvas.html",pathLocale:"/zh/",extraFields:["画布",`画布是编辑器的中央区域，用于设计界面与组件。组件会实时渲染，因此设计改动立即可见。
创建组件
从组件库中拖放组件到画布上。常见组件包括按钮、标签、图片、滑块和复选框。

图片组件引用资源池中的资源；参见图片指南。
标签组件使用字体库中的排版；参见字体库指南。

选择组件

点击组件可选中它，并在检查器中显示其属性。
按住 Ctrl/Cmd 并在画布上点击可进行多选。
拖出选择矩形可选择多个组件。
在组件树中，按住 Shift 点击可选择范围，或按住 Ctrl/Cmd 点击连续选择。

选中的组件会有明显的高亮标识。
排列组件
移动
拖动组件进行移动。与相邻组件或画布边界对齐时，会自动出现对齐辅助线，帮助精确定位。
缩放
拖动组件的边缘或角进行缩放。按住 Ctrl/Cmd 拖动可等比缩放，保持宽高比。
复制
选中组件并按住 Option/Alt 拖动可进行复制。这对于创建菜单项、按钮等重复元素非常有用。
对齐
多选组件后，使用画布上方的对齐面板进行对齐与均匀分布。
删除
选中组件后按 Delete，或使用右键菜单中的删除选项。
画布控制

缩放 - 使用 Ctrl/Cmd + 鼠标滚轮，或工具栏缩放控件。重置按钮可恢复 100%。
移动画布 - 按住鼠标右键并拖动即可平移画布。或者，按住 Spacebar 可临时将默认的框选行为切换为画布平移。

属性、样式与事件
检查器将组件定制分为几个部分：

属性 - 组件通用属性和组件专属数据，如文本、图片资源和状态。
样式 - 视觉外观，包括颜色、尺寸和字体。
事件 - 由用户交互触发的事件处理器。

相关指南

概览 - 编辑器整体界面。
图片 - 为组件分配图片资源。
字体库 - 为组件应用排版。
布局 - 使用弹性布局排列子组件。
检查器 - 检查并编辑组件属性。
预览 - 预览编辑器输出。
代码生成 - 从编辑器界面生成代码。
移植 - 在目标设备上运行编辑器输出。
模拟器 - 在本地机器上运行编辑器输出。

`,"anyui-LIVE"]},{title:"预览",headers:[{level:2,title:"概述",slug:"概述",link:"#概述",children:[]},{level:2,title:"启动预览",slug:"启动预览",link:"#启动预览",children:[]},{level:2,title:"预览验证的内容",slug:"预览验证的内容",link:"#预览验证的内容",children:[]},{level:2,title:"运行时版本",slug:"运行时版本",link:"#运行时版本",children:[]},{level:2,title:"相关指南",slug:"相关指南",link:"#相关指南",children:[]}],path:"/zh/docs/anyui-LIVE/guide/editor/preview.html",pathLocale:"/zh/",extraFields:["预览",`预览功能允许你在与最终实现完全一致的实时渲染模拟中运行当前项目。
概述
点击工具栏中的预览按钮可将编辑器切换到预览模式。在预览模式下，编辑器提供界面与组件行为的实时渲染模拟，使你在无需生成固件或烧录设备的情况下验证布局、交互与资源渲染。
由于预览运行与目标设备相同的生成代码，其观察到的行为与最终实现完全一致。
启动预览

在编辑器画布中打开要验证的界面。
点击工具栏中的预览按钮进入预览模式。
与渲染出的界面交互以验证行为。
点击暂停按钮返回编辑模式。

预览验证的内容

布局 - 组件定位、对齐以及响应式行为。
渲染 - 图片、字体和 Lottie 动画。
交互 - 事件触发和响应。

运行时版本
预览使用工具栏中选择的当前激活 LVGL 运行时版本。切换版本会针对对应的运行时重新运行预览。
相关指南

概览 - 编辑器整体界面。
画布 - 设计预览所渲染的界面。
工具栏 - 预览按钮与运行时版本选择器。
图片 - 预览图片渲染。
字体库 - 预览排版渲染。
动态 LVGL 版本 - 预览所运行的运行时版本。
覆盖屏幕尺寸 - 预览使用的显示分辨率。
代码生成 - 预览执行的生成代码。
移植 - 将预览输出迁移到目标设备。
模拟器 - 在本地机器上运行预览输出。

`,"anyui-LIVE"]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:["",`404 Not Found
`]}],Sv=ze(Ev),Iv=()=>Sv,Cv=/[^\x00-\x7F]/,xv=e=>e.split(/\s+/g).map(n=>n.trim()).filter(n=>!!n),ir=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),or=(e,n)=>{const t=n.join(" "),i=xv(e);if(Cv.test(e))return i.some(a=>t.toLowerCase().includes(a));const o=e.endsWith(" ");return new RegExp(`${i.map((a,l)=>i.length===l+1&&!o?`(?=.*\\b${ir(a)})`:`(?=.*\\b${ir(a)}\\b)`).join("")}.+`,"gi").test(t)},Tv=({searchIndex:e,routeLocale:n,query:t,maxSuggestions:i})=>{const o=O(()=>e.value.filter(a=>a.pathLocale===n.value));return O(()=>{const a=t.value.trim().toLowerCase();if(!a)return[];const l=[],r=(s,c)=>{or(a,[c.title])&&l.push({link:`${s.path}#${c.slug}`,title:s.title,header:c.title});for(const d of c.children){if(l.length>=i.value)return;r(s,d)}};for(const s of o.value){if(l.length>=i.value)break;if(or(a,[s.title,...s.extraFields])){l.push({link:s.path,title:s.title});continue}for(const c of s.headers){if(l.length>=i.value)break;r(s,c)}}return l})},Vv=e=>{const n=ze(0);return{focusIndex:n,focusNext:()=>{n.value<e.value.length-1?n.value+=1:n.value=0},focusPrev:()=>{n.value>0?n.value-=1:n.value=e.value.length-1}}},Av=ce({name:"SearchBox",props:{locales:{type:Object,default:()=>({})},hotKeys:Array,maxSuggestions:{type:Number,default:5}},setup(e){const{locales:n,hotKeys:t,maxSuggestions:i}=aa(e),o=po(n),a=pt(),l=Ms(),r=Iv(),s=ze(null),c=ze(!1),d=ze(""),u=Tv({searchIndex:r,routeLocale:l,query:d,maxSuggestions:i}),{focusIndex:p,focusNext:m,focusPrev:y}=Vv(u);km(t,()=>{var g;(g=s.value)==null||g.focus()});const _=O(()=>c.value&&!!u.value.length),k=()=>{_.value&&y()},I=()=>{_.value&&m()},S=g=>{if(!_.value)return;const b=u.value[g];b&&a.push(b.link).then(()=>{d.value="",p.value=0})};return()=>K("form",{class:"search-box",role:"search"},[K("input",{ref:s,type:"search",placeholder:o.value.placeholder,autocomplete:"off",spellcheck:!1,value:d.value,onFocus:()=>{c.value=!0},onBlur:()=>{c.value=!1},onInput:g=>{d.value=g.target.value},onKeydown:g=>{switch(g.key){case"ArrowUp":{k();break}case"ArrowDown":{I();break}case"Enter":{g.preventDefault(),S(p.value);break}}}}),_.value&&K("ul",{class:"suggestions",onMouseleave:()=>{p.value=-1}},u.value.map(({link:g,title:b,header:j},X)=>K("li",{class:["suggestion",{focus:p.value===X}],onMouseenter:()=>{p.value=X},onMousedown:()=>{S(X)}},K("a",{href:g,onClick:P=>{P.preventDefault()}},[K("span",{class:"page-title"},b),j&&K("span",{class:"page-header"},`> ${j}`)]))))])}});var Rv=["s","/"],Ov={"/":{placeholder:"Search"},"/zh/":{placeholder:"搜索"}};const zv=Ov,Pv=Rv,Dv=10;var Fv=kn({enhance({app:e}){e.component("SearchBox",n=>K(Av,{locales:zv,hotKeys:Pv,maxSuggestions:Dv,...n}))}});const Mv=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),jv={class:"custom-footer"},Hv=ce({__name:"CustomFooter",setup(e){return(n,t)=>(U(),te("footer",jv,[...t[0]||(t[0]=[ie("div",{class:"footer-content"},[Fn(" Copyright © 2025 anyui Development Team | 备案信息 "),ie("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"闽ICP备2024063669号")],-1)])]))}}),gc=zt(Hv,[["__scopeId","data-v-df7ba8d7"]]),Gv={class:"custom-footer"},Nv=ce({__name:"CustomFooterGitHub",setup(e){return(n,t)=>(U(),te("footer",Gv,[...t[0]||(t[0]=[ie("div",{class:"footer-content"}," Copyright © 2025 anyui Development Team ",-1)])]))}}),fc=zt(Nv,[["__scopeId","data-v-05494ea2"]]),Uv=ce({__name:"DynamicFooter",setup(e){const n=O(()=>!0);return(t,i)=>n.value?(U(),Ce(fc,{key:0})):(U(),Ce(gc,{key:1}))}}),Wv={class:"legacy-redirect"},Bv=["href"],$v=ce({__name:"LegacyRedirect",props:{to:{}},setup(e){const n=e,t=mt(),i=pt(),o=O(()=>{const l=typeof t.hash=="string"?t.hash:"",r=new URLSearchParams(t.query).toString(),s=r?`?${r}`:"";return`${n.to}${s}${l}`}),a=O(()=>t.path.startsWith("/zh/")?"正在跳转到新的文档地址…":"Redirecting to the new documentation path…");return nn(()=>{i.replace(o.value)}),(l,r)=>(U(),te("div",Wv,[ie("p",null,Ie(a.value),1),ie("p",null,[ie("a",{href:o.value},"Continue to "+Ie(o.value),9,Bv)])]))}}),qv=kn({enhance({app:e}){e.component("DynamicFooter",Uv),e.component("CustomFooter",gc),e.component("CustomFooterGitHub",fc),e.component("LegacyRedirect",$v)},setup(){},rootComponents:[]}),Kv=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),Ri=[fm,Vm,Fm,jm,Km,lg,hg,gg,wg,Cg,kv,Mv,Kv].map(e=>e.default).filter(Boolean),Yv=JSON.parse(`{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}],["link",{"href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap","rel":"stylesheet"}],["link",{"rel":"icon","type":"image/png","sizes":"16x16","href":"/img/favicon-16x16.png"}],["link",{"rel":"icon","type":"image/png","sizes":"32x32","href":"/img/favicon-32x32.png"}],["link",{"rel":"icon","type":"image/x-icon","href":"/img/favicon.ico"}],["script",{},"\\n      var _hmt = _hmt || [];\\n      (function() {\\n        if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {\\n          var hm = document.createElement(\\"script\\");\\n          hm.src = \\"https://hm.baidu.com/hm.js?085d518a1140960eb8c513e825951e25\\";\\n          var s = document.getElementsByTagName(\\"script\\")[0];\\n          s.parentNode.insertBefore(hm, s);\\n        }\\n      })();\\n    "]],"locales":{"/":{"lang":"en-US","title":"anyui","description":"Unified documentation portal for anyui and anyui-LIVE products."},"/zh/":{"lang":"zh-CN","title":"anyui","description":"面向 anyui 与 anyui-LIVE 的统一文档门户。"}}}`);var Nt=we(Yv),Qv=Nh,Zv=()=>{const e=pp({history:Qv(Es("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(n,t,i)=>i||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,t)=>{if(n.path!==t.path||t===xn){const i=li(n.fullPath);if(i.path!==n.fullPath)return i.path;const o=await i.loader();n.meta={...i.meta,_pageChunk:o}}else n.path===t.path&&(n.meta=t.meta)}),e},Xv=e=>{e.component("ClientOnly",_a),e.component("Content",wa),e.component("RouteLink",co)},Jv=(e,n,t)=>{const i=O(()=>n.currentRoute.value.path),o=zr((k,I)=>({get(){return k(),n.currentRoute.value.meta._pageChunk},set(S){n.currentRoute.value.meta._pageChunk=S,I()}})),a=O(()=>tt.resolveLayouts(t)),l=O(()=>tt.resolveRouteLocale(Nt.value.locales,i.value)),r=O(()=>tt.resolveSiteLocaleData(Nt.value,l.value)),s=O(()=>o.value.comp),c=O(()=>o.value.data),d=O(()=>c.value.frontmatter),u=O(()=>tt.resolvePageHeadTitle(c.value,r.value)),p=O(()=>tt.resolvePageHead(u.value,d.value,r.value)),m=O(()=>tt.resolvePageLang(c.value,r.value)),y=O(()=>tt.resolvePageLayout(c.value,a.value)),_={layouts:a,pageData:c,pageComponent:s,pageFrontmatter:d,pageHead:p,pageHeadTitle:u,pageLang:m,pageLayout:y,redirects:Yo,routeLocale:l,routePath:i,routes:It,siteData:Nt,siteLocaleData:r};return e.provide(va,_),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>d.value},$head:{get:()=>p.value},$headTitle:{get:()=>u.value},$lang:{get:()=>m.value},$page:{get:()=>c.value},$routeLocale:{get:()=>l.value},$site:{get:()=>Nt.value},$siteLocale:{get:()=>r.value},$withBase:{get:()=>La}}),_},ey=([e,n,t=""])=>{const i=Object.entries(n).map(([r,s])=>un(s)?`[${r}=${JSON.stringify(s)}]`:s?`[${r}]`:"").join(""),o=`head > ${e}${i}`;return Array.from(document.querySelectorAll(o)).find(r=>r.innerText===t)??null},ny=([e,n,t])=>{if(!un(e))return null;const i=document.createElement(e);return ma(n)&&Object.entries(n).forEach(([o,a])=>{un(a)?i.setAttribute(o,a):a&&i.setAttribute(o,"")}),un(t)&&i.appendChild(document.createTextNode(t)),i},ty=()=>{const e=fp(),n=ba();let t=[];const i=()=>{e.value.forEach(l=>{const r=ey(l);r&&t.push(r)})},o=()=>{const l=[];return e.value.forEach(r=>{const s=ny(r);s&&l.push(s)}),l},a=()=>{document.documentElement.lang=n.value;const l=o();t.forEach((r,s)=>{const c=l.findIndex(d=>r.isEqualNode(d));c===-1?(r.remove(),delete t[s]):l.splice(c,1)}),l.forEach(r=>document.head.appendChild(r)),t=[...t.filter(r=>!!r),...l]};Kn(_p,a),nn(()=>{i(),Ke(e,a,{immediate:!1})})},iy=Ku,oy=async()=>{var t;const e=iy({name:"Vuepress",setup(){var a;ty();for(const l of Ri)(a=l.setup)==null||a.call(l);const i=Ri.flatMap(({rootComponents:l=[]})=>l.map(r=>K(r))),o=vp();return()=>[K(o.value),i]}}),n=Zv();Xv(e),Jv(e,n,Ri);for(const i of Ri)await((t=i.enhance)==null?void 0:t.call(i,{app:e,router:n,siteData:Nt}));return e.use(n),{app:e,router:n}};oy().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{zt as _,ie as a,su as b,te as c,oy as createVueApp,se as d,Fn as e,U as o,Kr as r,xe as w};
