import{r as s,j as a,F as L,a as e,b as j,d as N}from"./app-6a3cd5d8.js";import{L as A}from"./Layout-ef466482.js";import{d as E}from"./index-13f29e3e.js";import{M as P}from"./Modal-5a4254e9.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./transition-9e786ef3.js";const B=({auth:n,categories:i,success:o,error:c})=>{const[m,g]=s.useState(1),[h,y]=s.useState([]),[v,l]=s.useState(!1),[u,w]=s.useState(null),[b,C]=s.useState(""),[p,M]=s.useState(""),r=10;s.useEffect(()=>{y(i)},[i]);const f=m*r,x=f-r,S=h.slice(x,f),I=t=>{g(t)},k=t=>{w(t),l(!0)},D=()=>{u!==null&&E.Inertia.delete(route("admin.categories.destroy",u)),l(!1)};return s.useEffect(()=>{o&&C(o),c&&M(c)},[]),a(L,{children:[e(j,{title:"Category | List"}),a("div",{className:"container-fluid",children:[b&&a("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[b,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),p&&a("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[p,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Categories"}),a("div",{className:"card shadow mb-4",children:[a("div",{className:"card-header py-3 d-flex justify-content-between",children:[a("h6",{className:"m-0 font-weight-bold text-primary",children:[" ","Category List"," "]}),e(N,{href:route("admin.categories.create"),className:"btn btn-primary",children:"Add Category"})]}),a("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:a("table",{className:"table table-bordered",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Action"})]})}),e("tbody",{children:S.map(t=>a("tr",{children:[e("td",{children:t==null?void 0:t.title}),e("td",{children:a("div",{className:"dropdown mb-4",children:[e("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Action"}),a("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e(N,{className:"dropdown-item",href:route("admin.categories.edit",t.id),children:"Edit"}),e("button",{onClick:()=>k(t.id),className:"dropdown-item",children:"Delete"})]})]})})]},t.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(h.length/r)).fill(0).map((t,d)=>e("li",{className:`page-item ${m===d+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>I(d+1),children:d+1})},d))})})]})]})]}),v&&e(P,{show:!0,onClose:()=>l(!1),children:e("div",{className:"modal-dialog",children:a("div",{className:"modal-content border-0",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Confirm Delete"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:"Are you sure you want to delete?"}),a("div",{className:"modal-footer",children:[e("button",{className:"btn btn-danger",onClick:D,children:"Yes"}),e("button",{className:"btn btn-secondary",onClick:()=>l(!1),children:"Cancel"})]})]})})})]})};B.layout=n=>e(A,{children:n});export{B as default};