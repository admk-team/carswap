import{r as l,j as r,F as C,a as e,b as E}from"./app-ff44bafc.js";import{L}from"./Layout-1511d1d4.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./index-e96fbce3.js";const M=({auth:c,payments:i,success:d,error:h})=>{const[o,f]=l.useState(1),[n,N]=l.useState([]),[u,v]=l.useState(""),[b,m]=l.useState(""),a=10;l.useEffect(()=>{N(i)},[i]);const g=o*a,P=g-a,x=n.slice(P,g),S=s=>{f(s)};return l.useEffect(()=>{d&&v(d),h&&m(h)},[]),r(C,{children:[e(E,{title:"Partners | List"}),r("div",{className:"container-fluid",children:[u&&r("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[u,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),b&&r("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[b,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Partners Request"}),e("div",{className:"card shadow mb-4",children:r("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:r("table",{className:"table table-bordered",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Username"}),e("th",{children:"Email"}),e("th",{children:"State"}),e("th",{children:"Local Government"}),e("th",{children:"Age"}),e("th",{children:"Type of Partner"}),e("th",{children:"Whatsapp"})]})}),e("tbody",{children:x.map(s=>r("tr",{children:[e("td",{children:s==null?void 0:s.name}),e("td",{children:s==null?void 0:s.email}),e("td",{children:s==null?void 0:s.state}),e("td",{children:s==null?void 0:s.local_government}),e("td",{children:s==null?void 0:s.age}),e("td",{children:s==null?void 0:s.local_government}),e("td",{children:s==null?void 0:s.whatsapp_number})]},s.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(n.length/a)).fill(0).map((s,t)=>e("li",{className:`page-item ${o===t+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>S(t+1),children:t+1})},t))})})]})})]})]})};M.layout=c=>e(L,{children:c});export{M as default};