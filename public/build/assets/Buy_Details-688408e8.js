import{r,j as a,F as x,a as t,b as M}from"./app-c37b5544.js";import{L as P}from"./Layout-773be670.js";import{d as S}from"./index-eaa482d1.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";const B=({auth:s,bookings:c,success:d,error:n})=>{const[o,g]=r.useState(1),[h,f]=r.useState([]),[m,N]=r.useState(""),[u,v]=r.useState(""),l=10;r.useEffect(()=>{f(c)},[c]);const p=o*l,y=p-l,w=h.slice(y,p),C=e=>{g(e)};r.useEffect(()=>{d&&N(d),n&&v(n)},[]);const b=(e,i)=>{S.Inertia.get(route("admin.inspections.status",{id:e,status:i}))};return a(x,{children:[t(M,{title:"Buy Booking | List"}),a("div",{className:"container-fluid",children:[m&&a("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[m,t("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),u&&a("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[u,t("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),t("h1",{className:"h3 mb-2 text-gray-800",children:"Buy Inspection Details"}),t("div",{className:"card shadow mb-4",children:a("div",{className:"card-body",children:[t("div",{className:"table-responsive",children:a("table",{className:"table table-bordered",children:[t("thead",{children:a("tr",{children:[t("th",{children:"Username"}),t("th",{children:"Email"}),t("th",{children:"Inspection Time"}),t("th",{children:"Inspection Date"}),t("th",{children:"Car Title"}),t("th",{children:"Price"}),t("th",{children:"Status"})]})}),t("tbody",{children:w.map(e=>a("tr",{children:[t("td",{children:e==null?void 0:e.user.first_name}),t("td",{children:e==null?void 0:e.user.email}),t("td",{children:e==null?void 0:e.Inspection_Time}),t("td",{children:e==null?void 0:e.Inspection_date}),t("td",{children:e==null?void 0:e.car.title}),t("td",{children:e==null?void 0:e.car.price}),t("td",{children:a("div",{className:"dropdown mb-4",children:[t("button",{className:`btn btn-${e&&e.status&&e.status===1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e&&e.status&&e.status===1?"Active":"Deactive"}),a("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[t("button",{className:"dropdown-item",onClick:()=>b(e.id,1),children:"Active"}),t("button",{className:"dropdown-item",onClick:()=>b(e.id,0),children:"Deactive"})]})]})})]},e.id))})]})}),t("div",{className:"d-flex justify-content-center",children:t("ul",{className:"pagination",children:Array(Math.ceil(h.length/l)).fill(0).map((e,i)=>t("li",{className:`page-item ${o===i+1?"active":""}`,children:t("button",{className:"page-link",onClick:()=>C(i+1),children:i+1})},i))})})]})})]})]})};B.layout=s=>t(P,{children:s});export{B as default};