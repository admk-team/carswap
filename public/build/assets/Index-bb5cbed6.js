import{r as s,j as a,F as L,a as e,b as j,d as g}from"./app-175e8514.js";import{L as E}from"./Layout-0b1535c5.js";import{d as w}from"./index-558f4f74.js";import{M as P}from"./Modal-8ecec84a.js";import"./user-icon-4fd58570.js";import"./headerlogo-23388e30.js";import"./transition-58a8053a.js";const F=({auth:n,brands:o,success:r,error:c})=>{const[m,y]=s.useState(1),[h,v]=s.useState([]),[C,d]=s.useState(!1),[u,M]=s.useState(null),[p,x]=s.useState(""),[b,B]=s.useState(""),i=10;s.useEffect(()=>{v(o)},[o]);const N=m*i,S=N-i,D=h.slice(S,N),I=t=>{y(t)},f=(t,l)=>{w.Inertia.get(route("admin.brands.status",{id:t,status:l}))},k=t=>{M(t),d(!0)},A=()=>{u!==null&&w.Inertia.delete(route("admin.brands.destroy",u)),d(!1)};return s.useEffect(()=>{r&&x(r),c&&B(c)},[]),a(L,{children:[e(j,{title:"Brand | List"}),a("div",{className:"container-fluid",children:[p&&a("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[p,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),b&&a("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[b,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Brands"}),a("div",{className:"card shadow mb-4",children:[a("div",{className:"card-header py-3 d-flex justify-content-between",children:[a("h6",{className:"m-0 font-weight-bold text-primary",children:[" ","Brand List"," "]}),e(g,{href:route("admin.brands.create"),className:"btn btn-primary",children:"Add Brand"})]}),a("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:a("table",{className:"table table-bordered",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Image"}),e("th",{children:"Title"}),e("th",{children:"Description"}),e("th",{children:"Status"}),e("th",{children:"Action"})]})}),e("tbody",{children:D.map(t=>a("tr",{children:[e("td",{children:e("img",{src:"/storage/"+(t==null?void 0:t.image),alt:"",className:"h-[50px] w-[100px]"})}),e("td",{children:t==null?void 0:t.title}),e("td",{children:t==null?void 0:t.description}),e("td",{children:a("div",{className:"dropdown mb-4",children:[e("button",{className:`btn btn-${t&&t.status&&t.status===1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t&&t.status&&t.status===1?"Active":"Deactive"}),a("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e("button",{className:"dropdown-item",onClick:()=>f(t.id,1),children:"Active"}),e("button",{className:"dropdown-item",onClick:()=>f(t.id,0),children:"Deactive"})]})]})}),e("td",{children:a("div",{className:"dropdown mb-4",children:[e("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Action"}),a("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e(g,{className:"dropdown-item",href:route("admin.brands.edit",t.id),children:"Edit"}),e("button",{onClick:()=>k(t.id),className:"dropdown-item",children:"Delete"})]})]})})]},t.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(h.length/i)).fill(0).map((t,l)=>e("li",{className:`page-item ${m===l+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>I(l+1),children:l+1})},l))})})]})]})]}),C&&e(P,{show:!0,onClose:()=>d(!1),children:e("div",{className:"modal-dialog",children:a("div",{className:"modal-content border-0",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Confirm Delete"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:"Are you sure you want to delete?"}),a("div",{className:"modal-footer",children:[e("button",{className:"btn btn-danger",onClick:A,children:"Yes"}),e("button",{className:"btn btn-secondary",onClick:()=>d(!1),children:"Cancel"})]})]})})})]})};F.layout=n=>e(E,{children:n});export{F as default};
