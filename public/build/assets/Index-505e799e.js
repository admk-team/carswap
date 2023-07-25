import{r as a,j as s,F as B,a as e,b as L,d as g}from"./app-b145696a.js";import{L as j}from"./Layout-c9136028.js";import{d as y}from"./index-890cd398.js";import{M as E}from"./Modal-5461e151.js";import"./headerlogo-80979cd7.js";import"./transition-81e0b3d8.js";const F=({auth:i,cars:o,success:r,error:c})=>{const[h,w]=a.useState(1),[m,v]=a.useState([]),[C,n]=a.useState(!1),[u,M]=a.useState(null),[b,S]=a.useState(""),[p,x]=a.useState(""),l=10;a.useEffect(()=>{v(o)},[o]);const N=h*l,P=N-l,k=m.slice(P,N),D=t=>{w(t)},f=(t,d)=>{y.Inertia.get(route("admin.cars.status",{id:t,status:d}))},I=t=>{M(t),n(!0)},A=()=>{u!==null&&y.Inertia.delete(route("admin.cars.destroy",u)),n(!1)};return a.useEffect(()=>{r&&S(r),c&&x(c)},[]),s(B,{children:[e(L,{title:"Car | List"}),s("div",{className:"container-fluid",children:[b&&s("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[b,e("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),p&&s("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[p,e("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),e("h1",{className:"h3 mb-2 text-gray-800",children:"Cars"}),s("div",{className:"card shadow mb-4",children:[s("div",{className:"card-header py-3 d-flex justify-content-between",children:[s("h6",{className:"m-0 font-weight-bold text-primary",children:[" ","Car List"," "]}),e(g,{href:route("admin.cars.create"),className:"btn btn-primary",children:"Add Car"})]}),s("div",{className:"card-body",children:[e("div",{className:"table-responsive",children:s("table",{className:"table table-bordered",children:[e("thead",{children:s("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Brand"}),e("th",{children:"Model"}),e("th",{children:"Price"}),e("th",{children:"Condition"}),e("th",{children:"Fuel Type"}),e("th",{children:"Status"}),e("th",{children:"Payment Status"}),e("th",{children:"Action"})]})}),e("tbody",{children:k.map(t=>s("tr",{children:[e("td",{children:t==null?void 0:t.title}),e("td",{children:t==null?void 0:t.brand.title}),e("td",{children:t==null?void 0:t.model}),e("td",{children:t==null?void 0:t.price}),e("td",{children:t==null?void 0:t.condition}),e("td",{children:t==null?void 0:t.fuel_type}),e("td",{children:s("div",{className:"dropdown mb-4",children:[e("button",{className:`btn btn-${t&&t.status&&t.status===1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t&&t.status&&t.status===1?"Active":"Deactive"}),s("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e("button",{className:"dropdown-item",onClick:()=>f(t.id,1),children:"Active"}),e("button",{className:"dropdown-item",onClick:()=>f(t.id,0),children:"Deactive"})]})]})}),e("td",{children:t!=null&&t.payment?e("span",{className:"btn btn-success",children:"Paid"}):e("span",{className:"btn btn-danger",children:"Pending"})}),e("td",{children:s("div",{className:"dropdown mb-4",children:[e("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Action"}),s("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[e(g,{className:"dropdown-item",href:route("admin.cars.edit",t.id),children:"Edit"}),e("button",{onClick:()=>I(t.id),className:"dropdown-item",children:"Delete"})]})]})})]},t.id))})]})}),e("div",{className:"d-flex justify-content-center",children:e("ul",{className:"pagination",children:Array(Math.ceil(m.length/l)).fill(0).map((t,d)=>e("li",{className:`page-item ${h===d+1?"active":""}`,children:e("button",{className:"page-link",onClick:()=>D(d+1),children:d+1})},d))})})]})]})]}),C&&e(E,{show:!0,onClose:()=>n(!1),children:e("div",{className:"modal-dialog",children:s("div",{className:"modal-content border-0",children:[s("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Confirm Delete"}),e("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e("div",{className:"modal-body",children:"Are you sure you want to delete?"}),s("div",{className:"modal-footer",children:[e("button",{className:"btn btn-danger",onClick:A,children:"Yes"}),e("button",{className:"btn btn-secondary",onClick:()=>n(!1),children:"Cancel"})]})]})})})]})};F.layout=i=>e(j,{children:i});export{F as default};
