import{q as u,r,j as a,F as g,a as e,b as N}from"./app-df188600.js";import{L as f}from"./Layout-9fcef64b.js";import{d as b}from"./index-9049196e.js";import"./headerlogo-80979cd7.js";const v=({auth:s})=>{const{errors:l}=u().props,[n,c]=r.useState(""),[d,o]=r.useState(null),[i,m]=r.useState("");function h(t){o(t.target.files[0])}function p(t){t.preventDefault(),b.Inertia.post(route("admin.brands.store"),{title:n,image:d,description:i})}return a(g,{children:[e(N,{title:"Create Brand"}),a("div",{className:"container-fluid",children:[e("h1",{className:"h3 mb-2 text-gray-800",children:"Brand"}),a("div",{className:"card shadow mb-4",children:[e("div",{className:"card-header py-3",children:e("h6",{className:"m-0 font-weight-bold text-primary",children:"Create Brand"})}),e("div",{className:"card-body",children:a("form",{className:"row g-3",method:"post",onSubmit:p,encType:"multipart/form-data",children:[a("div",{className:"col-12 col-md-6",children:[a("label",{className:"form-label",children:["Title ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter Title",value:n,onChange:t=>c(t.target.value)}),l.title&&e("div",{className:"text-danger",children:l.title})]}),a("div",{className:"col-12 col-md-6",children:[a("label",{className:"form-label",children:["Image ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"file",className:"form-control",name:"image",onChange:h}),l.image&&e("div",{className:"text-danger",children:l.image})]}),a("div",{className:"col-md-12",children:[e("label",{className:"form-label",children:"Description"}),e("textarea",{name:"description",className:"form-control",value:i,placeholder:"Enter Description",onChange:t=>m(t.target.value)})]}),e("div",{className:"col-12",children:e("button",{type:"submit",className:"btn btn-primary",children:"Add"})})]})})]})]})]})};v.layout=s=>e(f,{children:s});export{v as default};
