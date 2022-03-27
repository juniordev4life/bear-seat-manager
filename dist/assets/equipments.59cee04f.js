import{_ as e}from"./EquipmentDetails.b0cb2177.js";import{_ as t}from"./Modal.97477396.js";import{d as s,r as n,C as a,H as l,I as i,j as o,e as r,f as c,F as u,O as d,l as m,J as p,K as h,t as b,D as f,q as v}from"./vendor.f365f83b.js";import{S as y}from"./dayjs.min.9ac3f090.js";import{d as C}from"./app.4737bb91.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";var g={};const k={class:"section main-section"},x={class:"card has-table"},j=c("p",{class:"card-header-title"},[c("span",{class:"icon"},[c("i",{class:"mdi mdi-tag"})]),h(" Zubehör ")],-1),q=[c("span",{class:"icon"},[c("i",{class:"mdi mdi-plus icon-plus"})],-1)],Z={class:"card-content"},B=c("thead",null,[c("tr",null,[c("th",null,"Name"),c("th",null,"Seriennummer"),c("th")])],-1),D={"data-label":"Name"},N={"data-label":"Seriennummer"},S={class:"actions-cell"},_={class:"buttons right nowrap"},O=["href"],$=[c("span",{class:"icon"},[c("i",{class:"mdi mdi-eye"})],-1)],E=["onClick"],M=[c("span",{class:"icon"},[c("i",{class:"mdi mdi-pencil"})],-1)],T=["onClick"],F=[c("span",{class:"icon"},[c("i",{class:"mdi mdi-trash-can"})],-1)],H=s({props:{type:String,title:String},setup(s){const h=s,v=n(!1),w=n({}),g=n({}),H=a(C,h.type);function I(){w.value={serialNumber:"",type:h.type,name:"",note:""},J()}function J(){v.value=!v.value}return l((()=>{i(H,(e=>{g.value=e.val()}))})),(s,n)=>{const l=e,i=t;return o(),r(u,null,[c("section",k,[c("div",x,[c("header",{class:"card-header"},[j,c("button",{class:"card-header-icon button small green",onClick:I},q)]),c("div",Z,[c("table",null,[B,c("tbody",null,[(o(!0),r(u,null,d(g.value,(e=>(o(),r("tr",{key:e.index},[c("td",D,b(e.name),1),c("td",N,b(e.serialNumber),1),c("td",S,[c("div",_,[c("a",{href:`/equipment/${e.index}`,class:"button small green",type:"button"},$,8,O),c("button",{class:"button small green",type:"button",onClick:t=>s.setEquipment(e)},M,8,E),c("button",{class:"button small red",type:"button",onClick:t=>function(e){y.fire({title:"Zubehör löschen?",text:"Möchtest Du das Zubehör wirklich löschen?",icon:"error",allowOutsideClick:!1,showDenyButton:!0,confirmButtonText:"Löschen",denyButtonText:"Nein"}).then((async t=>{t.isConfirmed?(await f(a(C,`${e.type}/${e.index}`)),y.fire({text:"Zubehör wurde gelöscht",icon:"success",allowOutsideClick:!1,showConfirmButton:!1,timer:2e3})):t.isDenied&&y.fire({text:"Zubehör wurde nicht gelöscht",icon:"info",allowOutsideClick:!1,showConfirmButton:!1,timer:2e3})}))}(e)},F,8,T)])])])))),128))])])])])]),m(i,{"modal-active":v.value,onClose:J},{default:p((()=>[m(l,{equipment:w.value,onClose:J},null,8,["equipment"])])),_:1},8,["modal-active"])],64)}}});"function"==typeof g&&g(H);var I={};const J={};"function"==typeof I&&I(J);var K=w(J,[["render",function(e,t){const s=H;return o(),v(s,{title:"Zubehör",type:"equipment"})}]]);export{K as default};
