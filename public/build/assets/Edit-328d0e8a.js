import{W as o,r as x,j as e,a as h}from"./app-ab08e8ee.js";import{L as p}from"./Layout-2b4f2449.js";import"./headerlogo-80979cd7.js";import"./index-e9a6f4f3.js";const g=({brand:s})=>{const{data:i,errors:t,setData:l,post:n,progress:r}=o({title:s.title||"",description:s.description||"",image:null,_method:"put"}),[j,c]=x.useState(null);function d(a){l("image",a.target.files[0]),c(a.target.files[0])}const m=()=>{n(route("admin.brands.update",s.id))};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Edit Brand"}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("h1",{className:"h3 mb-2 text-gray-800",children:"Brand"}),e.jsxs("div",{className:"card shadow mb-4",children:[e.jsxs("div",{className:"card-header py-3",children:[e.jsx("h6",{className:"m-0 font-weight-bold text-primary",children:"Edit Brand"}),r&&e.jsxs("progress",{value:r.percentage,max:"100",children:[r.percentage,"%"]})]}),e.jsx("div",{className:"card-body",children:e.jsxs("form",{className:"row g-3",encType:"multipart/form-data",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsxs("label",{className:"form-label",children:["Title ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter Title",value:i.title,onChange:a=>l("title",a.target.value)}),t.title&&e.jsx("div",{className:"text-danger",children:t.title})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsxs("label",{className:"form-label",children:["Image ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"file",className:"form-control",name:"image",onChange:d}),t.image&&e.jsx("div",{className:"text-danger",children:t.image})]}),e.jsxs("div",{className:"col-md-12",children:[e.jsx("label",{className:"form-label",children:"Description"}),e.jsx("textarea",{name:"description",className:"form-control",value:i.description,placeholder:"Enter Description",onChange:a=>l("description",a.target.value)})]}),e.jsx("div",{className:"col-12",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>m(),children:"Update"})})]})})]})]})]})};g.layout=s=>e.jsx(p,{children:s});export{g as default};