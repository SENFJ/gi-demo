import{_ as a}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-f0bbb94d.js";import{d as e,g as l,N as t,r as n,o as i,c as s,a as d,w as o,u,f as r,h as c,e as p,E as m,C as _}from"./index-2d829550.js";import{g as f}from"./index-828c784e.js";import"./useDept-e13f1ad7.js";const y={class:"gi_page_scroll_y dept-manage"},g=c("span",null,"搜索",-1),x=c("span",null,"重置",-1),h=c("span",null,"新增",-1),v=c("span",null,"删除",-1),w={class:"gi_mt"},k=c("span",null,"编辑",-1),C=c("span",null,"新增",-1),V=c("span",null,"删除",-1),b=e({name:"SystemDept",__name:"index",setup(e){const b=l(),D=l(),j=t({name:"",status:""}),R=l(!1),z=l([]),A=async()=>{try{R.value=!0;const a=await f();z.value=a.data,_((()=>{var a;null==(a=D.value)||a.expandAll(!0)}))}catch(a){}finally{R.value=!1}};A();const I=()=>{A()},M=()=>{j.name="",j.status="",A()},T=()=>{var a;null==(a=b.value)||a.add()};return(e,l)=>{const t=n("icon-search"),_=n("a-input"),f=n("a-option"),A=n("a-select"),U=n("a-button"),E=n("icon-refresh"),N=n("a-space"),P=n("icon-plus"),Q=n("icon-delete"),S=n("a-row"),W=n("IconDown"),q=n("IconRight"),B=n("a-table-column"),F=n("icon-edit"),G=n("a-popconfirm"),H=n("a-table"),J=n("a-card");return i(),s("div",y,[d(J,{title:"部门管理"},{default:o((()=>[d(N,null,{default:o((()=>[d(_,{modelValue:u(j).name,"onUpdate:modelValue":l[0]||(l[0]=a=>u(j).name=a),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[d(t)])),_:1},8,["modelValue"]),d(A,{modelValue:u(j).status,"onUpdate:modelValue":l[1]||(l[1]=a=>u(j).status=a),placeholder:"部门状态",style:{width:"120px"}},{default:o((()=>[d(f,{value:1},{default:o((()=>[r("正常")])),_:1}),d(f,{value:0},{default:o((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),d(U,{type:"primary",onClick:I},{icon:o((()=>[d(t)])),default:o((()=>[g])),_:1}),d(U,{onClick:M},{icon:o((()=>[d(E)])),default:o((()=>[x])),_:1})])),_:1}),d(S,{class:"gi_my"},{default:o((()=>[d(N,null,{default:o((()=>[d(U,{type:"primary",onClick:T},{icon:o((()=>[d(P)])),default:o((()=>[h])),_:1}),d(U,{type:"primary",status:"danger"},{icon:o((()=>[d(Q)])),default:o((()=>[v])),_:1})])),_:1})])),_:1}),c("section",w,[d(H,{loading:u(R),ref_key:"TableRef",ref:D,"row-key":"id",data:u(z),scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1,expandable:{width:80}},{"expand-icon":o((({expanded:a})=>[a?(i(),p(W,{key:0})):(i(),p(q,{key:1}))])),columns:o((()=>[d(B,{title:"部门名称","data-index":"name"}),d(B,{title:"排序","data-index":"sort",width:100}),d(B,{title:"创建时间","data-index":"createTime",width:200}),d(B,{title:"操作",width:250,align:"center",fixed:"right"},{cell:o((({record:a})=>[d(N,null,{default:o((()=>[d(U,{type:"primary",size:"mini",onClick:e=>{return l=a,void(null==(t=b.value)||t.edit(l.id));var l,t}},{icon:o((()=>[d(F)])),default:o((()=>[k])),_:2},1032,["onClick"]),a.parentId?(i(),p(U,{key:0,type:"primary",status:"success",size:"mini",onClick:l[2]||(l[2]=a=>T())},{icon:o((()=>[d(P)])),default:o((()=>[C])),_:1})):m("",!0),d(G,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[d(U,{type:"primary",status:"danger",size:"mini"},{icon:o((()=>[d(Q)])),default:o((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["loading","data"])])])),_:1}),d(a,{ref_key:"AddDeptModalRef",ref:b},null,512)])}}});export{b as default};
