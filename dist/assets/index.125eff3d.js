var b=Object.defineProperty,w=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var l=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))A.call(e,a)&&l(t,a,e[a]);if(c)for(var a of c(e))D.call(e,a)&&l(t,a,e[a]);return t},_=(t,e)=>w(t,M(e));import E from"./index.fe5ca2a3.js";import I from"./index.cd458305.js";import V from"./index.f5eb6ec6.js";import F from"./index.30a09edb.js";import K from"./index.7de53080.js";import{_ as L,d as h,r as g,g as N,h as f,o as n,c as v,a as s,b as S,w as r,K as U,J as z,l as i,V as y,I as J}from"./index.d7e3d4ab.js";import"./index.4c284023.js";import"./system.65a4a185.js";import"./GiSvgIcon.a12eb1eb.js";import"./GiTitle.6b90d5f5.js";import"./index.88aaa5a8.js";import"./usePagination.5fbb18c3.js";import"./viewer.a652a30e.js";import"./avatar.d240db71.js";import"./useArea.a1c854e7.js";const R={class:"system-manage"},$={class:"left"},j={class:"right"},q=h({name:"SystemManage"}),G=h(_(p({},q),{setup(t){const e=g("01"),a=g(0),m=N([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:I,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:V,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:F,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:K,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:E,icon:"icon-user"}]),x=(u,d)=>{e.value=u.id,a.value=d};return(u,d)=>{const k=f("a-menu-item"),C=f("a-menu");return n(),v("div",R,[s("section",$,[S(C,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[e.value],"show-collapse-button":""},{default:r(()=>[(n(!0),v(U,null,z(m,(o,B)=>(n(),i(k,{key:o.id,onClick:H=>x(o,B)},{icon:r(()=>[(n(),i(y(o.icon),{size:18}))]),default:r(()=>[s("span",null,J(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),s("section",j,[(n(),i(y(m[a.value].value)))])])}}}));var me=L(G,[["__scopeId","data-v-f95e6d36"]]);export{me as default};
