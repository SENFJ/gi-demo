var m=Object.defineProperty,p=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))v.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))h.call(e,n)&&c(t,n,e[n]);return t},u=(t,e)=>p(t,f(e));import{d as _,v as a,o as x,c as S,a as k,k as r,L as y,_ as $}from"./index.93e86477.js";const b=["xlink:href"],z=_({name:"GiSvgIcon"}),B=_(u(l({},z),{props:{name:{type:String,required:!0},color:{type:String,default:""},size:{type:[Number,String],default:20}},setup(t){const e=t,n=o=>/(px|em|rem|%)$/.test(o.toString())?o:o+"px",s=a(()=>n(e.size)),d=a(()=>`#icon-${e.name}`),g=a(()=>e.name?`svg-icon icon-${e.name}`:"svg-icon");return(o,I)=>(x(),S("svg",y({"aria-hidden":"true",class:r(g)},o.$attrs,{style:{color:t.color,fill:t.color,width:r(s),height:r(s)}}),[k("use",{"xlink:href":r(d)},null,8,b)],16))}}));var C=$(B,[["__scopeId","data-v-7fba074a"]]);export{C as _};
