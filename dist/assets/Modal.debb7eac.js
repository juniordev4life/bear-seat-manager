import{d as _,o as m,c as r,n as a,T as s,w as t,q as c,e,m as v,x as u}from"./app.ae73b8ba.js";const h={class:"c-modal"},p={class:"c-modal__inner"},f=e("i",{class:"mdi mdi-close-circle icon-xxl"},null,-1),x=[f],k=_({__name:"Modal",props:{modalActive:Boolean},emits:["close"],setup(o,{emit:n}){const i=n,l=()=>{i("close")};return(d,w)=>(m(),r(s,{name:"modal-animation"},{default:a(()=>[t(e("div",h,[v(s,{name:"modal-animation-inner"},{default:a(()=>[t(e("div",p,[e("span",{class:"icon c-close-icon",onClick:l},x),u(d.$slots,"default")],512),[[c,o.modalActive]])]),_:3})],512),[[c,o.modalActive]])]),_:3}))}});export{k as _};