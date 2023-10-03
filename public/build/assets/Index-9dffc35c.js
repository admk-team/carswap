import{r as d,j as s,F as _,a as t,b as B,d as i}from"./app-6a3cd5d8.js";import{L}from"./Layout-ef466482.js";import{d as w}from"./index-13f29e3e.js";import{M as j}from"./Modal-5a4254e9.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./transition-9e786ef3.js";const E=({auth:o,cars:r,success:c,error:m})=>{const[h,y]=d.useState(1),[u,v]=d.useState([]),[C,l]=d.useState(!1),[b,M]=d.useState(null),[p,S]=d.useState(""),[f,x]=d.useState(""),a=10;d.useEffect(()=>{v(r)},[r]);const N=h*a,P=N-a,D=u.slice(P,N),k=e=>{y(e)},g=(e,n)=>{w.Inertia.get(route("admin.swap.status",{id:e,status:n}))},I=e=>{M(e),l(!0)},A=()=>{b!==null&&w.Inertia.delete(route("admin.swap.destroy",b)),l(!1)};return d.useEffect(()=>{c&&S(c),m&&x(m)},[]),s(_,{children:[t(B,{title:"Car | List"}),s("div",{className:"container-fluid",children:[p&&s("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[p,t("button",{className:"btn-close",type:"button","data-bs-dismiss":"alert","aria-label":"Close"})]}),f&&s("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert",children:[f,t("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),t("h1",{className:"h3 mb-2 text-gray-800",children:"Posted Cars"}),s("div",{className:"card shadow mb-4",children:[s("div",{className:"card-header py-3 d-flex justify-content-between",children:[s("h6",{className:"m-0 font-weight-bold text-primary",children:[" ","Car List"," "]}),t(i,{href:route("admin.swap.create"),className:"btn btn-primary",children:"Add Car"})]}),s("div",{className:"card-body",children:[t("div",{className:"table-responsive",children:s("table",{className:"table table-bordered",children:[t("thead",{children:s("tr",{children:[t("th",{children:"User"}),t("th",{children:"Title"}),t("th",{children:"Brand"}),t("th",{children:"Model"}),t("th",{children:"Price"}),t("th",{children:"Condition"}),t("th",{children:"Fuel Type"}),t("th",{children:"Status"}),t("th",{children:"Payment Status"}),t("th",{children:"Action"})]})}),t("tbody",{children:D.map(e=>s("tr",{children:[t("td",{children:e.user.first_name&&e.user.last_name?(e==null?void 0:e.user.first_name)+" "+(e==null?void 0:e.user.last_name):e==null?void 0:e.user.first_name}),t("td",{children:e==null?void 0:e.title}),t("td",{children:e==null?void 0:e.brand.title}),t("td",{children:e==null?void 0:e.model}),t("td",{children:e==null?void 0:e.price}),t("td",{children:e==null?void 0:e.condition}),t("td",{children:e==null?void 0:e.fuel_type}),t("td",{children:s("div",{className:"dropdown mb-4",children:[t("button",{className:`btn btn-${e&&e.status&&e.status==1?"success":"danger"} dropdown-toggle`,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e&&e.status&&e.status==1?"Active":"Deactive"}),s("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[t("button",{className:"dropdown-item",onClick:()=>g(e.id,1),children:"Active"}),t("button",{className:"dropdown-item",onClick:()=>g(e.id,0),children:"Deactive"})]})]})}),t("td",{children:e!=null&&e.payment?t("span",{className:"btn btn-success",children:"Paid"}):t("span",{className:"btn btn-danger",children:"Pending"})}),t("td",{children:s("div",{className:"dropdown mb-4",children:[t("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Action"}),s("div",{className:"dropdown-menu animated--fade-in","aria-labelledby":"dropdownMenuButton",children:[t(i,{className:"dropdown-item",href:route("admin.swap.show",e.id),children:"Details"}),t(i,{className:"dropdown-item",href:route("admin.swap.edit",e.id),children:"Edit"}),t("button",{onClick:()=>I(e.id),className:"dropdown-item",children:"Delete"})]})]})})]},e.id))})]})}),t("div",{className:"d-flex justify-content-center",children:t("ul",{className:"pagination",children:Array(Math.ceil(u.length/a)).fill(0).map((e,n)=>t("li",{className:`page-item ${h===n+1?"active":""}`,children:t("button",{className:"page-link",onClick:()=>k(n+1),children:n+1})},n))})})]})]})]}),C&&t(j,{show:!0,onClose:()=>l(!1),children:t("div",{className:"modal-dialog",children:s("div",{className:"modal-content border-0",children:[s("div",{className:"modal-header",children:[t("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Confirm Delete"}),t("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),t("div",{className:"modal-body",children:"Are you sure you want to delete?"}),s("div",{className:"modal-footer",children:[t("button",{className:"btn btn-danger",onClick:A,children:"Yes"}),t("button",{className:"btn btn-secondary",onClick:()=>l(!1),children:"Cancel"})]})]})})})]})};E.layout=o=>t(L,{children:o});export{E as default};