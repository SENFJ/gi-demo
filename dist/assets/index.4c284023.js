import{y as Y,r as _,i as w,z as L,A as le,t as Z,n as se,B as ie,C as ue,m as $,D as ce,E as fe,F as T,G as pe}from"./index.d7e3d4ab.js";var k;const j=typeof window!="undefined",de=e=>typeof e!="undefined",ve=e=>typeof e=="string",M=()=>{};j&&((k=window==null?void 0:window.navigator)==null?void 0:k.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ge(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const ee=e=>e();function me(e=ee){const t=_(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function N(e){return ie()?(ue(e),!0):!1}var _e=Object.defineProperty,we=Object.defineProperties,he=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,be=(e,t)=>{for(var r in t||(t={}))ye.call(t,r)&&R(e,r,t[r]);if(z)for(var r of z(t))Oe.call(t,r)&&R(e,r,t[r]);return e},Pe=(e,t)=>we(e,he(t));function Ee(e){if(!Y(e))return ce(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const r in e.value)t[r]=fe(()=>({get(){return e.value[r]},set(n){if(Array.isArray(e.value)){const a=[...e.value];a[r]=n,e.value=a}else{const a=Pe(be({},e.value),{[r]:n});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function Se(e,t=!0){L()?le(e):t?e():Z(e)}function te(e,t=!0){L()?se(e):t?e():Z(e)}function $e(e,t,r={}){const{immediate:n=!0}=r,a=_(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function i(){a.value=!1,s()}function u(...p){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...p)},w(t))}return n&&(a.value=!0,j&&u()),N(i),{isPending:a,start:u,stop:i}}function gt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=Y(e),o=_(e);function s(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===w(r)?w(n):w(r),o.value)}return a?s:[o,s]}var V=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Te=(e,t)=>{var r={};for(var n in e)Fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&De.call(e,n)&&(r[n]=e[n]);return r};function je(e,t,r={}){const n=r,{eventFilter:a=ee}=n,o=Te(n,["eventFilter"]);return $(e,ge(a,t),o)}var Ne=Object.defineProperty,xe=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&W(e,r,t[r]);if(C)for(var r of C(t))ne.call(t,r)&&W(e,r,t[r]);return e},Ae=(e,t)=>xe(e,Ce(t)),Ie=(e,t)=>{var r={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&C)for(var n of C(e))t.indexOf(n)<0&&ne.call(e,n)&&(r[n]=e[n]);return r};function Le(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ie(n,["eventFilter"]),{eventFilter:s,pause:i,resume:u,isActive:p}=me(a);return{stop:je(e,t,Ae(Me({},o),{eventFilter:s})),pause:i,resume:u,isActive:p}}function S(e){var t;const r=w(e);return(t=r==null?void 0:r.$el)!=null?t:r}const O=j?window:void 0,ke=j?window.document:void 0,ze=j?window.navigator:void 0;function y(...e){let t,r,n,a;if(ve(e[0])?([r,n,a]=e,t=O):[t,r,n,a]=e,!t)return M;let o=M;const s=$(()=>S(t),u=>{o(),u&&(u.addEventListener(r,n,a),o=()=>{u.removeEventListener(r,n,a),o=M})},{immediate:!0,flush:"post"}),i=()=>{s(),o()};return N(i),i}function mt(e,t,r={}){const{window:n=O,ignore:a,capture:o=!0}=r;if(!n)return;const s=_(!0);let i;const u=c=>{n.clearTimeout(i);const l=S(e),f=c.composedPath();!l||l===c.target||f.includes(l)||!s.value||a&&a.length>0&&a.some(g=>{const m=S(g);return m&&(c.target===m||f.includes(m))})||t(c)},p=[y(n,"click",u,{passive:!0,capture:o}),y(n,"pointerdown",c=>{const l=S(e);s.value=!!l&&!c.composedPath().includes(l)},{passive:!0}),y(n,"pointerup",c=>{if(c.button===0){const l=c.composedPath();c.composedPath=()=>l,i=n.setTimeout(()=>u(c),50)}},{passive:!0})];return()=>p.forEach(c=>c())}function Re(e,t={}){const{window:r=O}=t,n=Boolean(r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=_(!1),s=()=>{!n||(a||(a=r.matchMedia(e)),o.value=a.matches)};return Se(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),N(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}function _t(e={}){const{navigator:t=ze,read:r=!1,source:n,copiedDuring:a=1500}=e,o=["copy","cut"],s=Boolean(t&&"clipboard"in t),i=_(""),u=_(!1),p=$e(()=>u.value=!1,a);function v(){t.clipboard.readText().then(l=>{i.value=l})}if(s&&r)for(const l of o)y(l,v);async function c(l=w(n)){s&&l!=null&&(await t.clipboard.writeText(l),i.value=l,u.value=!0,p.start())}return{isSupported:s,text:i,copied:u,copy:c}}const A=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I="__vueuse_ssr_handlers__";A[I]=A[I]||{};const Ve=A[I];function ae(e,t){return Ve[e]||t}function We(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Be(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:u=!0,shallow:p,window:v=O,eventFilter:c,onError:l=d=>{console.error(d)}}=n,f=(p?pe:_)(t);if(!r)try{r=ae("getDefaultStorage",()=>{var d;return(d=O)==null?void 0:d.localStorage})()}catch(d){l(d)}if(!r)return f;const g=w(t),m=We(g),F=(a=n.serializer)!=null?a:qe[m],{pause:h,resume:P}=Le(f,()=>E(f.value),{flush:o,deep:s,eventFilter:c});return v&&i&&y(v,"storage",x),x(),f;function E(d){try{d==null?r.removeItem(e):r.setItem(e,F.write(d))}catch(b){l(b)}}function D(d){if(!(d&&d.key!==e)){h();try{const b=d?d.newValue:r.getItem(e);return b==null?(u&&g!==null&&r.setItem(e,F.write(g)),g):typeof b!="string"?b:F.read(b)}catch(b){l(b)}finally{P()}}}function x(d){d&&d.key!==e||(f.value=D(d))}}function oe(e){return Re("(prefers-color-scheme: dark)",e)}var He=Object.defineProperty,q=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&B(e,r,t[r]);if(q)for(var r of q(t))Ge.call(t,r)&&B(e,r,t[r]);return e};function Ue(e={}){const{selector:t="html",attribute:r="class",window:n=O,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:u}=e,p=Qe({auto:"",light:"light",dark:"dark"},e.modes||{}),v=oe({window:n}),c=T(()=>v.value?"dark":"light"),l=i||(o==null?_("auto"):Be(o,"auto",a,{window:n,listenToStorageChanges:s})),f=T({get(){return l.value==="auto"&&!u?c.value:l.value},set(h){l.value=h}}),g=ae("updateHTMLAttrs",(h,P,E)=>{const D=n==null?void 0:n.document.querySelector(h);if(!!D)if(P==="class"){const x=E.split(/\s/g);Object.values(p).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{x.includes(d)?D.classList.add(d):D.classList.remove(d)})}else D.setAttribute(P,E)});function m(h){var P;const E=h==="auto"?c.value:h;g(t,r,(P=p[E])!=null?P:E)}function F(h){e.onChanged?e.onChanged(h,m):m(h)}return $(f,F,{flush:"post",immediate:!0}),te(()=>F(f.value)),f}var Xe=Object.defineProperty,Ke=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))Ze.call(t,r)&&J(e,r,t[r]);if(H)for(var r of H(t))et.call(t,r)&&J(e,r,t[r]);return e},rt=(e,t)=>Ke(e,Ye(t));function wt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=O}=e,a=Ue(rt(tt({},e),{onChanged:(i,u)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,i==="dark"):u(i)},modes:{dark:t,light:r}})),o=oe({window:n});return T({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}var nt=Object.defineProperty,at=Object.defineProperties,ot=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))lt.call(t,r)&&Q(e,r,t[r]);if(G)for(var r of G(t))st.call(t,r)&&Q(e,r,t[r]);return e},ut=(e,t)=>at(e,ot(t));function ht(e,t={}){var r,n;const a=(r=t.draggingElement)!=null?r:O,o=_((n=t.initialValue)!=null?n:{x:0,y:0}),s=_(),i=l=>t.pointerTypes?t.pointerTypes.includes(l.pointerType):!0,u=l=>{w(t.preventDefault)&&l.preventDefault(),w(t.stopPropagation)&&l.stopPropagation()},p=l=>{var f;if(!i(l)||w(t.exact)&&l.target!==w(e))return;const g=w(e).getBoundingClientRect(),m={x:l.pageX-g.left,y:l.pageY-g.top};((f=t.onStart)==null?void 0:f.call(t,m,l))!==!1&&(s.value=m,u(l))},v=l=>{var f;!i(l)||!s.value||(o.value={x:l.pageX-s.value.x,y:l.pageY-s.value.y},(f=t.onMove)==null||f.call(t,o.value,l),u(l))},c=l=>{var f;!i(l)||!s.value||(s.value=void 0,(f=t.onEnd)==null||f.call(t,o.value,l),u(l))};return j&&(y(e,"pointerdown",p,!0),y(a,"pointermove",v,!0),y(a,"pointerup",c,!0)),ut(it({},Ee(o)),{position:o,isDragging:T(()=>!!s.value),style:T(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var U=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,pt=(e,t)=>{var r={};for(var n in e)ct.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&U)for(var n of U(e))t.indexOf(n)<0&&ft.call(e,n)&&(r[n]=e[n]);return r};function dt(e,t,r={}){const n=r,{window:a=O}=n,o=pt(n,["window"]);let s;const i=a&&"ResizeObserver"in a,u=()=>{s&&(s.disconnect(),s=void 0)},p=$(()=>S(e),c=>{u(),i&&a&&c&&(s=new ResizeObserver(t),s.observe(c,o))},{immediate:!0,flush:"post"}),v=()=>{u(),p()};return N(v),{isSupported:i,stop:v}}function yt(e,t={width:0,height:0},r={}){const n=_(t.width),a=_(t.height);return dt(e,([o])=>{n.value=o.contentRect.width,a.value=o.contentRect.height},r),$(()=>S(e),o=>{n.value=o?t.width:0,a.value=o?t.height:0}),{width:n,height:a}}const X=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ot(e,t={}){const{document:r=ke,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=_(!1);let s=!1,i=X[0];if(!r)s=!1;else for(const m of X)if(m[1]in r){i=m,s=!0;break}const[u,p,v,,c]=i;async function l(){!s||(r!=null&&r[v]&&await r[p](),o.value=!1)}async function f(){if(!s)return;await l();const m=S(a);m&&(await m[u](),o.value=!0)}async function g(){o.value?await l():await f()}return r&&y(r,c,()=>{o.value=!!(r!=null&&r[v])},!1),n&&N(l),{isSupported:s,isFullscreen:o,enter:f,exit:l,toggle:g}}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));function bt(e,t,r,n={}){var a;const{passive:o=!1,eventName:s,deep:i=!1,defaultValue:u}=n,p=L(),v=r||(p==null?void 0:p.emit)||((a=p==null?void 0:p.$emit)==null?void 0:a.bind(p));let c=s;t||(t="modelValue"),c=s||c||`update:${t.toString()}`;const l=()=>de(e[t])?e[t]:u;if(o){const f=_(l());return $(()=>e[t],g=>f.value=g),$(f,g=>{(g!==e[t]||i)&&v(c,g)},{deep:i}),f}else return T({get(){return l()},set(f){v(c,f)}})}function Pt(e={}){const{window:t=O,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0}=e,o=_(r),s=_(n),i=()=>{t&&(o.value=t.innerWidth,s.value=t.innerHeight)};return i(),te(i),y("resize",i,{passive:!0}),a&&y("orientationchange",i,{passive:!0}),{width:o,height:s}}export{gt as a,bt as b,_t as c,Pt as d,yt as e,ht as f,Ot as g,mt as o,wt as u};
