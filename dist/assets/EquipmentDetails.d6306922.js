import{d as f,a as b,o as v,b as x,e as t,w as n,v as o,u as l,F as _,s as g,h,i as w}from"./app.ae73b8ba.js";import{v as Y,d as i,S as k}from"./dayjs.min.265772de.js";var r={};const y={class:"w-full"},D={class:"flex flex-col mb-4"},B=t("label",{class:"mb-1"},"Seriennummer",-1),q={class:"flex flex-col mb-4"},M=t("label",null,"Name",-1),N={class:"flex flex-col"},S=t("label",null,"Bemerkung",-1),C=f({__name:"EquipmentDetails",props:{equipment:Object},emits:["close"],setup(u,{emit:m}){const d=u,c=m,e=b(()=>d.equipment);async function p(){e.value.index===void 0&&(e.value.index=Y(),e.value.created=i().format("DD.MM.YYYY HH:mm:ss")),e.value.updated=i().format("DD.MM.YYYY HH:mm:ss"),await g(h(w,`${e.value.type}/${e.value.index}`),e.value),c("close"),k.fire({title:"Zubeh\xF6r gespeichert",text:`Zubeh\xF6r ${e.value.name} wurde angelegt`,icon:"success",allowOutsideClick:!1,showConfirmButton:!1,timer:2e3})}return(F,a)=>(v(),x(_,null,[t("div",y,[t("div",D,[B,n(t("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>l(e).serialNumber=s),type:"text","aria-label":"Seriennummer"},null,512),[[o,l(e).serialNumber]])]),t("div",q,[M,n(t("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>l(e).name=s),type:"text","aria-label":"Name"},null,512),[[o,l(e).name]])]),t("div",N,[S,n(t("textarea",{"onUpdate:modelValue":a[2]||(a[2]=s=>l(e).note=s),"aria-label":"Bemerkung"},null,512),[[o,l(e).note]])])]),t("div",{class:"mt-5 text-center"},[t("button",{class:"p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300",onClick:p}," Speichern ")])],64))}});typeof r=="function"&&r(C);export{C as _};
