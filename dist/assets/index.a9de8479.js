import{d as i,N as m,u as g,r as u,h,s as f,ez as b,i as B,o as x,c as F,a as e,b as D,w as E,k as C,K as I,p as k,e as P,_ as w}from"./index.ec8d6b95.js";const y="/gi-demo/assets/403.231745f4.svg",N="/gi-demo/assets/404.ca8b86de.svg",S="/gi-demo/assets/500.d7d89683.svg",c=s=>(k("data-v-437bca69"),s=s(),P(),s),T={class:"error-page"},V={class:"container"},z={class:"img-box"},A=["src"],M={class:"tip-box"},R=c(()=>e("div",{class:"ops"},"\u62B1\u6B49!",-1)),K=c(()=>e("div",{class:"tip"},"\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728...",-1)),U=c(()=>e("div",{class:"info"},"\u8BF7\u68C0\u67E5\u60A8\u8F93\u5165\u7684\u7F51\u5740\u662F\u5426\u6B63\u786E\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8FD4\u56DE\u9996\u9875",-1)),j=i({name:"ErrorPage"}),q=i({...j,setup(s){const n=m(),_=g(),t=u(5),o=u(0),r=u(404);if(n.fullPath){const a=n.fullPath.split("/");r.value=Number(a[a.length-1])}const l=h({403:y,404:N,500:S});f(()=>{p()}),b(()=>{clearInterval(o.value)});const d=()=>{_.back()},p=()=>{o.value=setInterval(()=>{t.value?t.value--:clearInterval(o.value)},1e3)};return(a,G)=>{const v=B("a-button");return x(),F("div",T,[e("section",V,[e("div",z,[e("img",{class:"img-parent",src:l[r.value]},null,8,A)]),e("div",M,[R,K,U,D(v,{type:"primary",shape:"round",size:"large",onClick:d},{default:E(()=>[C(I(t.value)+" \u8FD4\u56DE\u9996\u9875",1)]),_:1})])])])}}});const J=w(q,[["__scopeId","data-v-437bca69"]]);export{J as default};
