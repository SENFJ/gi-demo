import{_ as a}from"./AddRoleModal.vue_vue_type_script_setup_true_lang-d51ff3c5.js";import{d as e,g as t,N as l,r as n,o as i,c as o,a as s,w as d,u,f as r,h as c,t as p,e as m,M as _}from"./index-2d829550.js";import{u as f}from"./usePagination-a8ccdaa7.js";import{a as y}from"./index-828c784e.js";const g={class:"gi_page_scroll_y role-manage"},h=c("span",null,"查询",-1),x=c("span",null,"重置",-1),v=c("span",null,"新增",-1),w=c("span",null,"删除",-1),k={class:"gi_mt"},C=c("span",null,"编辑",-1),V=c("span",null,"删除",-1),R=e({name:"SystemRole",__name:"index",setup(e){const R=t(),j=l({name:"",status:""}),{pagination:b,setTotal:z}=f((()=>{A()})),M=t(!1),T=t([]),A=async()=>{try{M.value=!0;const a=await y();T.value=a.data.list,z(a.data.total)}catch(a){}finally{M.value=!1}};A();const U=()=>{b.onChange(1)},I=()=>{j.status="",j.status="",b.onChange(1)},N=()=>{var a;null==(a=R.value)||a.add()},O=()=>{_.info("点击了确认按钮")};return(e,t)=>{const l=n("icon-search"),_=n("a-input"),f=n("a-option"),y=n("a-select"),z=n("a-button"),A=n("icon-refresh"),P=n("a-space"),S=n("icon-plus"),W=n("icon-delete"),q=n("a-row"),B=n("a-table-column"),D=n("a-tag"),E=n("icon-edit"),F=n("icon-safe"),G=n("a-popconfirm"),H=n("a-table"),J=n("a-card");return i(),o("div",g,[s(J,{title:"角色管理"},{default:d((()=>[s(P,null,{default:d((()=>[s(_,{modelValue:u(j).name,"onUpdate:modelValue":t[0]||(t[0]=a=>u(j).name=a),placeholder:"输入角色名搜索","allow-clear":"",style:{width:"250px"}},{prefix:d((()=>[s(l)])),_:1},8,["modelValue"]),s(y,{modelValue:u(j).status,"onUpdate:modelValue":t[1]||(t[1]=a=>u(j).status=a),placeholder:"角色状态","allow-clear":"",style:{width:"120px"}},{default:d((()=>[s(f,{value:1},{default:d((()=>[r("正常")])),_:1}),s(f,{value:0},{default:d((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),s(z,{type:"primary",onClick:U},{icon:d((()=>[s(l)])),default:d((()=>[h])),_:1}),s(z,{onClick:I},{icon:d((()=>[s(A)])),default:d((()=>[x])),_:1})])),_:1}),s(q,{class:"gi_my"},{default:d((()=>[s(P,null,{default:d((()=>[s(z,{type:"primary",onClick:N},{icon:d((()=>[s(S)])),default:d((()=>[v])),_:1}),s(z,{type:"primary",status:"danger"},{icon:d((()=>[s(W)])),default:d((()=>[w])),_:1})])),_:1})])),_:1}),c("section",k,[s(H,{"row-key":"id",data:u(T),loading:u(M),scroll:{x:"100%",y:"100%",minWidth:900},pagination:u(b)},{columns:d((()=>[s(B,{title:"序号",width:60},{cell:d((a=>[r(p(a.rowIndex+1),1)])),_:1}),s(B,{title:"角色名称","data-index":"name"}),s(B,{title:"角色编号","data-index":"code"}),s(B,{title:"状态",width:100},{cell:d((({record:a})=>[1==a.status?(i(),m(D,{key:0,color:"green"},{default:d((()=>[r("正常")])),_:1})):(i(),m(D,{key:1,color:"red"},{default:d((()=>[r("禁用")])),_:1}))])),_:1}),s(B,{title:"角色描述","data-index":"description"}),s(B,{title:"创建时间","data-index":"createTime"}),s(B,{title:"操作",width:280,align:"center",fixed:"right"},{cell:d((({record:a})=>[s(P,null,{default:d((()=>[s(z,{type:"primary",size:"mini",onClick:e=>{return t=a,void(null==(l=R.value)||l.edit(t.id));var t,l}},{icon:d((()=>[s(E)])),default:d((()=>[C])),_:2},1032,["onClick"]),s(z,{type:"primary",status:"success",size:"mini"},{icon:d((()=>[s(F)])),default:d((()=>[r("菜单权限")])),_:1}),s(G,{type:"warning",content:"确定删除该角色吗?",onOk:O},{default:d((()=>[s(z,{type:"primary",status:"danger",size:"mini"},{icon:d((()=>[s(W)])),default:d((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["data","loading","pagination"])]),s(a,{ref_key:"AddRoleModalRef",ref:R},null,512)])),_:1})])}}});export{R as default};
