import{d as a,j as s,q as o,H as l,w as c,h as e,f as i,l as n,J as d,T as m}from"./vendor.ab80316d.js";const t={class:"c-modal"},r={class:"c-modal__inner"},p=[i("i",{class:"mdi mdi-close-circle icon-xxl"},null,-1)],u=a({props:{modalActive:Boolean},emits:["close"],setup(a,{emit:u}){const v=()=>{u("close")};return(u,f)=>(s(),o(m,{name:"modal-animation"},{default:l((()=>[c(i("div",t,[n(m,{name:"modal-animation-inner"},{default:l((()=>[c(i("div",r,[i("span",{class:"icon c-close-icon",onClick:v},p),d(u.$slots,"default")],512),[[e,a.modalActive]])])),_:3})],512),[[e,a.modalActive]])])),_:3}))}});export{u as _};