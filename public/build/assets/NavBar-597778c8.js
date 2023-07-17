import{r as a,j as e,d as s}from"./app-ab08e8ee.js";import{i as g}from"./headerlogo-80979cd7.js";import{b as l,w as i}from"./bell-6fd89589.js";const j="/build/assets/navbarbg-6aa09514.png",p=t=>{const[r,c]=a.useState(!1),[n,d]=a.useState(!1),[o,h]=a.useState(!1),x=()=>{h(!o)},m=()=>{d(!n)},u=()=>{c(!r)};return e.jsx("div",{children:e.jsxs("nav",{className:"bg-gray-800",style:{backgroundImage:`url(${j})`},children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(s,{href:route("front.index"),children:e.jsx("img",{className:"w-52 h-10 object-contain",src:g,alt:"Logo"})})}),e.jsx("div",{className:"hidden md:block",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{href:route("user.postcar"),className:" text-white font-bold",children:"Post a Car"}),e.jsx("img",{className:"w-7 h-7",src:l,alt:""}),e.jsx("div",{className:"flex items-center",children:e.jsxs("a",{href:"https://api.whatsapp.com/send?phone=07031555235",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("img",{src:i,className:"w-6 h-6 mr-1 ",alt:""}),e.jsx("span",{className:"text-white text-sm",children:"07031555235"})]})}),e.jsxs("div",{className:"bg-emerald-500 hover:bg-emerald-600",children:[t&&t.auth.user?e.jsxs("button",{className:"px-3 py-2 rounded-md text-white flex",onClick:m,children:["Dashboard",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"m-2",children:[e.jsx(s,{href:route("user.login"),className:"rounded-md justify-content-center text-center text-base font-medium text-white",children:"Login"}),e.jsx("span",{className:"text-white py-2",children:" / "}),e.jsx(s,{href:route("user.register"),className:"rounded-md justify-content-center align-center self-center text-center text-base font-medium text-white",children:" SignUp"})]})}),n&&e.jsxs("div",{className:"absolute mt-1 font-sm bg-white border-1 border-gray-950",children:[e.jsx(s,{href:route("user.editProfile"),className:"block px-4 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Profile"}),e.jsx(s,{href:route("user.dashboard"),className:"block px-3 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Dashboard"}),e.jsx(s,{href:route("Logout"),className:"block px-2 border-b py-1 border-gray-900 text-center text-gray-900",children:"Logout"})]})]})]})}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{className:"mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",onClick:u,children:r?e.jsx("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),r&&e.jsx("div",{className:"md:hidden",children:e.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e.jsx(s,{href:route("user.postcar"),className:" block px-3 py-2  text-base font-medium text-white",children:"Post a Car"}),e.jsx("img",{className:"block w-7 h-7 ml-3",src:l,alt:""}),e.jsx("div",{className:"flex items-center ml-3 mt-3",children:e.jsxs("a",{href:"https://api.whatsapp.com/send?phone=07031555235",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e.jsx("img",{src:i,className:"w-6 h-6 mr-1 ",alt:""}),e.jsx("span",{className:"text-base font-medium text-white",children:"07031555235"})]})}),t&&t.auth.user?e.jsxs("div",{className:" px-3 mt-3 text-base font-medium text-white cursor-pointer flex",onClick:x,children:["Dashboard",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"m-3",children:[e.jsx(s,{href:route("user.login"),className:"   text-base font-medium text-white",children:"LogIn"}),e.jsx("span",{className:"px-2 text-white",children:"/"}),e.jsx(s,{href:route("user.register"),className:"  text-base font-medium text-white",children:"SignUp"})]})}),o&&e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"text-white ml-10 ",children:[e.jsx("li",{className:"mt-2",children:e.jsx(s,{className:"hover:text-white",href:route("user.editProfile"),children:" My Profile"})}),e.jsx("li",{className:" mt-2",children:e.jsx(s,{className:"hover:text-white",href:route("user.dashboard"),children:"My Dashbaord"})}),e.jsx("li",{className:"mt-2",children:e.jsx(s,{href:route("Logout"),className:"hover:text-white",children:"Logout"})})]})})]})})]})})},N=p;export{N};
