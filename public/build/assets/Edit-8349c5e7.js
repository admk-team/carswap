import{q as o,r as i,W as h,j as e,a as x}from"./app-ab08e8ee.js";import{L as p}from"./Layout-2b4f2449.js";import"./headerlogo-80979cd7.js";import"./index-e9a6f4f3.js";const N=({auth:r,user:l})=>{const{errors:s}=o().props;i.useState([]);const{data:n,setData:t,post:c,processing:g}=h({first_name:l.first_name,last_name:l.last_name,phone_no:l.phone_no,city:l.city,state:l.state,address:l.address,email:l.email,password:l.password,image:null,_method:"put"});function d(a){a.target.files&&t("image",a.target.files[0])}function m(a){a.preventDefault(),c(route("admin.users.update",l.id))}return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Edit User"}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("h1",{className:"h3 mb-2 text-gray-800",children:"User"}),e.jsxs("div",{className:"card shadow mb-4",children:[e.jsx("div",{className:"card-header py-3",children:e.jsx("h6",{className:"m-0 font-weight-bold text-primary",children:"Edit User"})}),e.jsx("div",{className:"card-body",children:e.jsxs("form",{className:"row g-3",method:"post",onSubmit:m,encType:"multipart/form-data",children:[e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["First Name ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"first_name",className:"form-control",placeholder:"First Name",value:n.first_name,onChange:a=>t("first_name",a.target.value)}),s.first_name&&e.jsx("div",{className:"text-danger",children:s.first_name})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["Last Name ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"last_name",className:"form-control",placeholder:"Last Name",value:n.last_name,onChange:a=>t("last_name",a.target.value)}),s.last_name&&e.jsx("div",{className:"text-danger",children:s.last_name})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["Email ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",value:n.email,onChange:a=>t("email",a.target.value)}),s.email&&e.jsx("div",{className:"text-danger",children:s.email})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsx("label",{className:"form-label",children:"Password "}),e.jsx("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",onChange:a=>t("password",a.target.value)}),s.password&&e.jsx("div",{className:"text-danger",children:s.password})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["Phone Number ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"phone_no",className:"form-control",placeholder:"Phone Number",value:n.phone_no,onChange:a=>t("phone_no",a.target.value)}),s.phone_no&&e.jsx("div",{className:"text-danger",children:s.phone_no})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["City ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"city",className:"form-control",placeholder:"City",value:n.city,onChange:a=>t("city",a.target.value)}),s.city&&e.jsx("div",{className:"text-danger",children:s.city})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["State ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"state",className:"form-control",placeholder:"State",value:n.state,onChange:a=>t("state",a.target.value)}),s.state&&e.jsx("div",{className:"text-danger",children:s.state})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsxs("label",{className:"form-label",children:["Address ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",name:"address",className:"form-control",placeholder:"Address",value:n.address,onChange:a=>t("address",a.target.value)}),s.address&&e.jsx("div",{className:"text-danger",children:s.address})]}),e.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[e.jsx("label",{className:"form-label",children:"Image "}),e.jsx("input",{type:"file",className:"form-control",name:"image",onChange:d}),s.image&&e.jsx("div",{className:"text-danger",children:s.image})]}),e.jsx("div",{className:"col-12 mt-5",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Update"})})]})})]})]})]})};N.layout=r=>e.jsx(p,{children:r});export{N as default};
