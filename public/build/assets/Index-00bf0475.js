import{r as t,j as e,a as A,d as p}from"./app-ab08e8ee.js";import{L as B}from"./Layout-2b4f2449.js";import{d as f}from"./index-e9a6f4f3.js";import{M as E}from"./Modal-d8be3425.js";import"./headerlogo-80979cd7.js";import"./transition-691741c3.js";const L=({auth:n,cars:i,success:o,error:r})=>{const[c,N]=t.useState(1),[m,g]=t.useState([]),[y,d]=t.useState(!1),[h,w]=t.useState(null),[u,v]=t.useState(""),[x,C]=t.useState(""),l=10;t.useEffect(()=>{g(i)},[i]);const j=c*l,M=j-l,S=m.slice(M,j),k=s=>{N(s)},b=(s,a)=>{f.Inertia.get(route("admin.cars.status",{id:s,status:a}))},D=s=>{w(s),d(!0)},I=()=>{h!==null&&f.Inertia.delete(route("admin.cars.destroy",h)),d(!1)};return t.useEffect(()=>{o&&v(o),r&&C(r)},[]),e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Car | List"}),e.jsxs("div",{className:"container-fluid",children:[u&&e.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[u,e.jsx("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),x&&e.jsxs("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[x,e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e.jsx("h1",{className:"h3 mb-2 text-gray-800",children:"Cars"}),e.jsxs("div",{className:"card shadow mb-4",children:[e.jsxs("div",{className:"card-header py-3 d-flex justify-content-between",children:[e.jsxs("h6",{className:"m-0 font-weight-bold text-primary",children:[" ","Car List"," "]}),e.jsx(p,{href:route("admin.cars.create"),className:"btn btn-primary",children:"Add Car"})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Brand"}),e.jsx("th",{children:"Model"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Condition"}),e.jsx("th",{children:"Fuel Type"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:S.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s==null?void 0:s.title}),e.jsx("td",{children:s==null?void 0:s.brand.title}),e.jsx("td",{children:s==null?void 0:s.model}),e.jsx("td",{children:s==null?void 0:s.price}),e.jsx("td",{children:s==null?void 0:s.condition}),e.jsx("td",{children:s==null?void 0:s.fuel_type}),e.jsx("td",{children:e.jsxs("div",{className:"dropdown mb-4",children:[e.jsx("button",{className:`btn btn-${s&&s.status&&s.status===1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:s&&s.status&&s.status===1?"Active":"Deactive"}),e.jsxs("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e.jsx("button",{className:"dropdown-item",onClick:()=>b(s.id,1),children:"Active"}),e.jsx("button",{className:"dropdown-item",onClick:()=>b(s.id,0),children:"Deactive"})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dropdown mb-4",children:[e.jsx("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Action"}),e.jsxs("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e.jsx(p,{className:"dropdown-item",href:route("admin.cars.edit",s.id),children:"Edit"}),e.jsx("button",{onClick:()=>D(s.id),className:"dropdown-item",children:"Delete"})]})]})})]},s.id))})]})}),e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx("ul",{className:"pagination",children:Array(Math.ceil(m.length/l)).fill(0).map((s,a)=>e.jsx("li",{className:`page-item ${c===a+1?"active":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>k(a+1),children:a+1})},a))})})]})]})]}),y&&e.jsx(E,{show:!0,onClose:()=>d(!1),children:e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content border-0",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Confirm Delete"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsx("div",{className:"modal-body",children:"Are you sure you want to delete?"}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-danger",onClick:I,children:"Yes"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>d(!1),children:"Cancel"})]})]})})})]})};L.layout=n=>e.jsx(B,{children:n});export{L as default};
