import{r as n,a as e,j as t,d as r,F as o}from"./app-71de7874.js";import{i as g}from"./Footer-80e28b67.js";import{b as c,w as d}from"./bell-6fd89589.js";const w=s=>{const[a,h]=n.useState(!1),[l,m]=n.useState(!1),[i,u]=n.useState(!1),x=()=>{u(!i)},p=()=>{m(!l)},f=()=>{h(!a)};return e("div",{children:t("nav",{className:"bg-gray-800",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t("div",{className:"flex items-center justify-between h-16",children:[e("div",{className:"flex-shrink-0",children:e(r,{href:route("front.index"),children:e("img",{className:"w-52 h-10 object-contain",src:g,alt:"Logo"})})}),e("div",{className:"hidden md:block",children:t("div",{className:"flex items-center space-x-4",children:[e(r,{href:route("user.postcar"),className:" text-white font-bold",children:"Post a Car"}),e("img",{className:"w-7 h-7",src:c,alt:""}),e("div",{className:"flex items-center",children:t("a",{href:"https://api.whatsapp.com/send?phone=07031555235",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e("img",{src:d,className:"w-6 h-6 mr-1 ",alt:""}),e("span",{className:"text-white text-sm",children:"07031555235"})]})}),t("div",{className:"flex items-center p-2 space-y-1 sm:px-3 bg-emerald-600",children:[s&&s.auth.user?t("button",{className:"px-3 py-2 rounded-md text-white flex",onClick:p,children:["Dashboard",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e(o,{children:t("div",{className:"m-2",children:[e(r,{href:route("user.login"),className:"rounded-md justify-content-center align-center self-center text-center text-base font-medium text-white",children:"Login"}),e("span",{className:"text-white ps-2 pe-2",children:" / "}),e(r,{href:route("user.register"),className:"rounded-md justify-content-center align-center self-center text-center text-base font-medium text-white",children:" SignUp"})]})}),l&&t("div",{className:"absolute mt-1 font-sm bg-white border-1 border-gray-950 ",children:[e(r,{href:route("user.editProfile"),className:"block px-4 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Profile"}),e(r,{href:route("user.dashboard"),className:"block px-3 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Dashboard"}),e(r,{href:route("Logout"),className:"block px-2 border-b py-1 border-gray-900 text-center text-gray-900",children:"Logout"})]})]})]})}),e("div",{className:"md:hidden",children:e("button",{className:"mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",onClick:f,children:a?e("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),a&&e("div",{className:"md:hidden",children:t("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e(r,{href:route("user.postcar"),className:" block px-3 py-2  text-base font-medium text-white",children:"Post a Car"}),e("img",{className:"block w-7 h-7 ml-3",src:c,alt:""}),e("div",{className:"flex items-center ml-3 mt-3",children:t("a",{href:"https://api.whatsapp.com/send?phone=07031555235",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e("img",{src:d,className:"w-6 h-6 mr-1 ",alt:""}),e("span",{className:"text-base font-medium text-white",children:"07031555235"})]})}),s&&s.auth.user?t("div",{className:" px-3 mt-3 text-base font-medium text-white cursor-pointer flex",onClick:x,children:["Dashboard",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e(o,{children:t("div",{className:"m-3",children:[e(r,{href:route("user.login"),className:"   text-base font-medium text-white",children:"LogIn"}),e("span",{className:"px-2 text-white",children:"/"}),e(r,{href:route("user.register"),className:"  text-base font-medium text-white",children:"SignUp"})]})}),i&&e(o,{children:t("ul",{className:"text-white ml-10 ",children:[e("li",{className:"mt-2",children:e(r,{className:"hover:text-white",href:route("user.editProfile"),children:" My Profile"})}),e("li",{className:" mt-2",children:e(r,{className:"hover:text-white",href:route("user.dashboard"),children:"My Dashbaord"})}),e("li",{className:"mt-2",children:e(r,{href:route("Logout"),className:"hover:text-white",children:"Logout"})})]})})]})})]})})},k=w;export{k as N};
