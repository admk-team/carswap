import{r as t,j as a,F as M,a as e,b as S}from"./app-d311b3de.js";import{L as w}from"./Layout-74057508.js";import"./headerlogo-80979cd7.js";import"./index-070db1fd.js";const E=({auth:c,ratings:d,success:i,error:h})=>{const[n,f]=t.useState(1),[o,p]=t.useState([]),[m,N]=t.useState(""),[u,v]=t.useState(""),r=10;t.useEffect(()=>{p(d)},[d]);const b=n*r,y=b-r,x=o.slice(y,b),C=s=>{f(s)};return t.useEffect(()=>{i&&N(i),h&&v(h)},[]),a(M,{children:[e(S,{title:"Rating | List"}),a("div",{className:"container-fluid",children:[m&&a("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[m,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),u&&a("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[u,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Reviews"}),e("div",{className:"card shadow mb-4",children:a("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:a("table",{className:"table table-bordered",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Username"}),e("th",{children:"Email"}),e("th",{children:"Car Title"}),e("th",{children:"Review Star"}),e("th",{children:"Message"})]})}),e("tbody",{children:x.map(s=>a("tr",{children:[e("td",{children:s==null?void 0:s.user.first_name}),e("td",{children:s==null?void 0:s.user.email}),e("td",{children:s==null?void 0:s.car.title}),e("td",{children:s==null?void 0:s.rating}),e("td",{children:s==null?void 0:s.message})]},s.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(o.length/r)).fill(0).map((s,l)=>e("li",{className:`page-item ${n===l+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>C(l+1),children:l+1})},l))})})]})})]})]})};E.layout=c=>e(w,{children:c});export{E as default};
