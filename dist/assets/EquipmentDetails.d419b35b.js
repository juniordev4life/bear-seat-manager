import{d as e,x as a,j as l,e as t,f as s,w as n,v as r,y as u,F as o,B as i,C as m}from"./vendor.899fc043.js";import{v as d,d as c,S as p}from"./dayjs.min.a682d46a.js";import{d as f}from"./app.4da9237f.js";var b={};const v={class:"w-full"},x={class:"flex flex-col mb-4"},g=s("label",{class:"mb-1"},"Seriennummer",-1),y={class:"flex flex-col mb-4"},Y=s("label",null,"Name",-1),j={class:"flex flex-col"},w=s("label",null,"Bemerkung",-1),h=e({props:{equipment:Object},emits:["close"],setup(e,{emit:b}){const h=e,k=a((()=>h.equipment));async function B(){void 0===k.value.index&&(k.value.index=d(),k.value.created=c().format("DD.MM.YYYY HH:mm:ss")),k.value.updated=c().format("DD.MM.YYYY HH:mm:ss"),await i(m(f,`${k.value.type}/${k.value.index}`),k.value),b("close"),p.fire({title:"Zubehör gespeichert",text:`Zubehör ${k.value.name} wurde angelegt`,icon:"success",allowOutsideClick:!1,showConfirmButton:!1,timer:2e3})}return(e,a)=>(l(),t(o,null,[s("div",v,[s("div",x,[g,n(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>u(k).serialNumber=e),type:"text","aria-label":"Seriennummer"},null,512),[[r,u(k).serialNumber]])]),s("div",y,[Y,n(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>u(k).name=e),type:"text","aria-label":"Name"},null,512),[[r,u(k).name]])]),s("div",j,[w,n(s("textarea",{"onUpdate:modelValue":a[2]||(a[2]=e=>u(k).note=e),"aria-label":"Bemerkung"},null,512),[[r,u(k).note]])])]),s("div",{class:"mt-5 text-center"},[s("button",{class:"p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300",onClick:B}," Speichern ")])],64))}});"function"==typeof b&&b(h);export{h as _};
