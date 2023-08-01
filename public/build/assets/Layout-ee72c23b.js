import{j as a,a as e,d as r,r as c,F as o}from"./app-2b00d7a6.js";import{U as t}from"./user-icon-4fd58570.js";import{i as m}from"./headerlogo-80979cd7.js";import{u as h}from"./index-5ef28fca.js";function p({onCollapseChange:i,auth:s}){return a("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[e("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",onClick:i,children:e("i",{className:"fa fa-bars"})}),a("ul",{className:"navbar-nav ml-auto",children:[a("li",{className:"nav-item dropdown no-arrow d-sm-none",children:[e("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e("i",{className:"fas fa-search fa-fw"})}),e("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown",children:e("form",{className:"form-inline mr-auto w-100 navbar-search",children:a("div",{className:"input-group",children:[e("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),e("div",{className:"input-group-append",children:e("button",{className:"btn btn-primary",type:"button",children:e("i",{className:"fas fa-search fa-sm"})})})]})})})]}),e("li",{className:"nav-item dropdown no-arrow mx-1",children:a("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown",children:[e("h6",{className:"dropdown-header",children:"Alerts Center"}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[e("div",{className:"mr-3",children:e("div",{className:"icon-circle bg-primary",children:e("i",{className:"fas fa-file-alt text-white"})})}),a("div",{children:[e("div",{className:"small text-gray-500",children:"December 12, 2019"}),e("span",{className:"font-weight-bold",children:"A new monthly report is ready to download!"})]})]}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[e("div",{className:"mr-3",children:e("div",{className:"icon-circle bg-success",children:e("i",{className:"fas fa-donate text-white"})})}),a("div",{children:[e("div",{className:"small text-gray-500",children:"December 7, 2019"}),"$290.29 has been deposited into your account!"]})]}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[e("div",{className:"mr-3",children:e("div",{className:"icon-circle bg-warning",children:e("i",{className:"fas fa-exclamation-triangle text-white"})})}),a("div",{children:[e("div",{className:"small text-gray-500",children:"December 2, 2019"}),"Spending Alert: We've noticed unusually high spending for your account."]})]}),e("a",{className:"dropdown-item text-center small text-gray-500",href:"#",children:"Show All Alerts"})]})}),e("li",{className:"nav-item dropdown no-arrow mx-1",children:a("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"messagesDropdown",children:[e("h6",{className:"dropdown-header",children:"Message Center"}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[a("div",{className:"dropdown-list-image mr-3",children:[e("img",{className:"rounded-circle",src:"img/undraw_profile_1.svg",alt:"..."}),e("div",{className:"status-indicator bg-success"})]}),a("div",{className:"font-weight-bold",children:[e("div",{className:"text-truncate",children:"Hi there! I am wondering if you can help me with a problem I've been having."}),e("div",{className:"small text-gray-500",children:"Emily Fowler · 58m"})]})]}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[a("div",{className:"dropdown-list-image mr-3",children:[e("img",{className:"rounded-circle",src:"img/undraw_profile_2.svg",alt:"..."}),e("div",{className:"status-indicator"})]}),a("div",{children:[e("div",{className:"text-truncate",children:"I have the photos that you ordered last month, how would you like them sent to you?"}),e("div",{className:"small text-gray-500",children:"Jae Chun · 1d"})]})]}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[a("div",{className:"dropdown-list-image mr-3",children:[e("img",{className:"rounded-circle",src:"img/undraw_profile_3.svg",alt:"..."}),e("div",{className:"status-indicator bg-warning"})]}),a("div",{children:[e("div",{className:"text-truncate",children:"Last month's report looks great, I am very happy with the progress so far, keep up the good work!"}),e("div",{className:"small text-gray-500",children:"Morgan Alvarez · 2d"})]})]}),a("a",{className:"dropdown-item d-flex align-items-center",href:"#",children:[a("div",{className:"dropdown-list-image mr-3",children:[e("img",{className:"rounded-circle",src:"https://source.unsplash.com/Mv9hjnEUHR4/60x60",alt:"..."}),e("div",{className:"status-indicator bg-success"})]}),a("div",{children:[e("div",{className:"text-truncate",children:"Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."}),e("div",{className:"small text-gray-500",children:"Chicken the Dog · 2w"})]})]}),e("a",{className:"dropdown-item text-center small text-gray-500",href:"#",children:"Read More Messages"})]})}),e("div",{className:"topbar-divider d-none d-sm-block"}),a("li",{className:"nav-item dropdown no-arrow",children:[a("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[e("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:s!=null&&s.last_name&&s.last_name?(s==null?void 0:s.first_name)+" "+(s==null?void 0:s.last_name):s==null?void 0:s.first_name}),e("img",{src:s&&s.image?"/storage/"+s.image:t,alt:"Profile",className:"w-10 h-10 rounded-full"})]}),a("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown",children:[a("a",{className:"dropdown-item",href:route("user-profile"),children:[e("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"]}),e("div",{className:"dropdown-divider"}),a("a",{className:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",children:[e("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})]})]})]})]})}function g({onCollapseChange:i,style:s}){return a("ul",{className:s,id:"accordionSidebar",children:[a(r,{href:"",className:"sidebar-brand d-flex align-items-center justify-content-center",children:[e("div",{className:"sidebar-brand-icon ",children:e("img",{src:m,alt:""})}),e("div",{className:"sidebar-brand-text mx-3",children:"Car Swap"}),e("div",{className:"text-center d-none d-md-inline mt-4",children:e("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:i})})]}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("dashboard")?"active":"collapsed"}`,children:a(r,{className:"nav-link",href:route("admin.dashboard"),children:[e("i",{className:"fas fa-fw fa-tachometer-alt"}),e("span",{children:"Dashboard"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.brands.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.brands.index"),className:"nav-link collapsed",children:[e("i",{className:"fas fa fa-list"}),e("span",{children:"Brands"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.cars.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.cars.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-car"}),e("span",{children:"Cars"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.users.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.users.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-user"}),e("span",{children:"Users"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.payments.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.payments.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-sign"}),e("span",{children:"Payments"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.ratings.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.ratings.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-star"}),e("span",{children:"Ratings"})]})}),e("hr",{className:"sidebar-divider my-0"}),e("li",{className:`nav-item ${route().current("admin.inspections.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.inspections.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-sign"}),e("span",{children:"Buy inspection details"})]})}),e("hr",{className:"sidebar-divider d-none d-md-block"}),e("li",{className:`nav-item ${route().current("admin.swap_Ins.index")?"active":"collapsed"}`,children:a(r,{href:route("admin.swap_Ins.index"),className:"nav-link collapsed",children:[e("i",{className:"fa fa-sign"}),e("span",{children:"Swap inspection details"})]})}),e("hr",{className:"sidebar-divider d-none d-md-block"})]})}function b({children:i}){const{post:s}=h(),[n,d]=c.useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"),l=()=>{n=="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"?d("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"):d("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")};return a(o,{children:[a("div",{children:[e("link",{rel:"preconnect",href:"https://fonts.bunny.net"}),e("link",{href:"https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap",rel:"stylesheet"}),e("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",crossorigin:"anonymous"}),e("link",{href:"/vendor/fontawesome-free/css/all.min.css",rel:"stylesheet",type:"text/css"}),e("link",{href:"/vendor/fontawesome-free/css/custom.css",rel:"stylesheet",type:"text/css"}),e("link",{href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),e("link",{href:"/css/sb-admin-2.min.css",rel:"stylesheet"})]}),a("div",{id:"wrapper",children:[e(g,{onCollapseChange:l,style:n}),e("div",{id:"content-wrapper",className:"d-flex flex-column",children:a("div",{id:"content",children:[e(p,{onCollapseChange:l,auth:i.props.auth.user}),e("div",{className:"container-fluid",children:i})]})})]}),e("a",{className:"scroll-to-top rounded",href:"#page-top",children:e("i",{className:"fas fa-angle-up"})}),e("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:e("div",{className:"modal-dialog",role:"document",children:a("div",{className:"modal-content",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Leave?"}),e("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:e("span",{"aria-hidden":"true",children:"×"})})]}),e("div",{className:"modal-body",children:'Select "Logout" below if you are ready to end your current session.'}),a("div",{className:"modal-footer",children:[e("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),e("button",{className:"btn btn-primary",type:"button",onClick:()=>{s(route("logout"))},children:"Logout"})]})]})})}),e("div",{})]})}export{b as L};
