var m=Object.defineProperty,x=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(t,e,i)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,f=(t,e)=>{for(var i in e||(e={}))b.call(e,i)&&d(t,i,e[i]);if(u)for(var i of u(e))y.call(e,i)&&d(t,i,e[i]);return t},p=(t,e)=>x(t,g(e));import{p as r,K as C,W,f as h,U as S,o as k,c as H,w as M,T as G,C as z,a3 as B,u as _,i as T,j as V,a4 as X}from"./vendor.1278e709.js";import{o as Y,b as j}from"./index.5e327cc3.js";import"./index.8cb1ac64.js";import{_ as D}from"./index.b20256bd.js";function I(t,e){const i=r(!1),c=r(0),o=r(0),a=n=>{i.value=n},s=()=>{const n={};return t.clientX>window.innerWidth-o.value?n.right=window.innerWidth-t.clientX+"px":n.left=t.clientX+"px",t.clientY>window.innerHeight-o.value?(n.bottom=window.innerHeight-t.clientY+"px",n["transform-origin"]="center bottom"):(n.top=t.clientY+2+"px",n["transform-origin"]="center top"),n["z-index"]=999,n};return C(()=>{i.value=!0,W(()=>{var n,l;e!==null&&e.value&&(o.value=(n=e.value)==null?void 0:n.offsetHeight,c.value=(l=e.value)==null?void 0:l.offsetWidth,s())})}),{visible:i,setVisible:a,getStyle:s}}const K=h({name:"GiContextMenu"}),N=h(p(f({},K),{props:{event:null},emits:["close"],setup(t,{expose:e,emit:i}){const c=t;let o=r(null);const{visible:a,setVisible:s,getStyle:n}=I(c.event,o);Y(o,()=>{s(!1),i("close")});const{width:l,height:v}=j();return S(()=>[l.value,v.value],()=>{s(!1),i("close")}),e({visible:a}),(w,O)=>(k(),H(G,{name:"slide-dynamic-origin"},{default:M(()=>[z(T("div",{class:"gi-context-menu",ref_key:"elRef",ref:o,style:X(_(n)())},[V(w.$slots,"default",{},void 0,!0)],4),[[B,_(a)]])]),_:3}))}}));var F=D(N,[["__scopeId","data-v-f88aca0a"]]);export{F as G};
