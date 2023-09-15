import{r as n,a as e,F as a,j as r,d as t}from"./app-4ddf414c.js";import{b as c,w as d}from"./bell-6fd89589.js";const b="/build/assets/nav2-701a2e3e.png",f=s=>{const[o,h]=n.useState(!1),[l,m]=n.useState(!1),[i,g]=n.useState(!1),u=()=>{g(!i)},x=()=>{m(!l)},p=()=>{h(!o)};return e(a,{children:r("nav",{className:" border-b border-black ",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex items-center justify-between h-16",children:[e("div",{className:"flex-shrink-0",children:e(t,{href:route("front.index"),children:e("img",{className:"w-52 h-9 object-contain",src:b,alt:"Logo"})})}),e("div",{className:"hidden md:block",children:r("div",{className:"flex items-center space-x-4",children:[e(t,{href:route("user.swap.index"),className:" font-gray-900 font-extrabold cursor-pointer hover:text-gray-950",children:"Swap a Car"}),e("span",{className:"  font-gray-900 font-extrabold cursor-pointer hover:text-gray-950",children:"|"}),e(t,{href:route("user.postcar"),className:" font-gray-900 font-extrabold cursor-pointer hover:text-gray-950",children:"Sell a Car"}),e("img",{className:"w-7 h-7",src:c,alt:""}),e("div",{className:"flex items-center text-white bg-gray-900 p-2",children:r("a",{href:"https://api.whatsapp.com/send?phone=08120222922",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e("img",{src:d,className:"w-6 h-6 mr-1 ",alt:""}),e("span",{className:"text-white text-sm",children:"+2348120222922"})]})}),r("div",{className:" bg-emerald-500 hover:bg-emerald-600",children:[s&&s.auth.user?r("button",{className:"px-3 py-2 rounded-md text-white flex",onClick:x,children:["Dashboard",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e(a,{children:r("div",{className:"m-2",children:[e(t,{href:route("user.login"),className:" rounded-md text-base font-medium text-white",children:"LogIn"}),e("span",{className:"px-2 text-white",children:"/"}),e(t,{href:route("user.register"),className:" rounded-md text-base font-medium text-white",children:"SignUp"})]})}),l&&r("div",{className:"absolute mt-1 font-sm bg-white border-1 border-gray-950 ",children:[e(t,{href:route("user.editProfile"),className:"block px-4 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Profile"}),e(t,{href:route("user.dashboard"),className:"block px-3 border-b py-1 border-gray-900 text-center text-gray-900",children:"My Dashboard"}),e(t,{href:route("Logout"),className:"block px-2 border-b py-1 border-gray-900 text-center text-gray-900",children:"Logout"})]})]})]})}),e("div",{className:"md:hidden",children:e("button",{className:"mobile-menu-button p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",onClick:p,children:o?e("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):e("svg",{className:"block h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),o&&e("div",{className:"md:hidden",children:r("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[e(t,{href:route("user.postcar"),className:" block px-3 py-2 text-base bg-gray-900 text-white font-medium ",children:"Post a Car"}),r("div",{className:"px-3 py-2 flex items-center font-medium text-white bg-gray-900",children:[e("span",{className:"block w-7 h-7 mr-1",children:e("img",{src:c,alt:""})}),e("span",{className:"text-white mt-2 text-sm"})]}),e("div",{className:"px-3 py-2 flex items-center font-medium text-white bg-gray-900",children:r("a",{href:"https://api.whatsapp.com/send?phone=08120222922",className:"flex items-center",target:"_blank",rel:"noopener noreferrer",children:[e("img",{src:d,className:"w-6 h-6 mr-1 ",alt:""}),e("span",{className:"text-base font-medium text-white",children:"+2348120222922"})]})}),s&&s.auth.user?r("div",{className:" px-3 py-2  text-base font-medium text-white bg-gray-900 cursor-pointer flex",onClick:u,children:["Dashboard",e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 mt-1 ml-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})]}):e(a,{children:r("div",{className:"py-2 px-3 bg-gray-900",children:[e(t,{href:route("user.login"),className:" text-base font-medium text-white",children:"LogIn"}),e("span",{className:"px-2 text-white",children:"/"}),e(t,{href:route("user.register"),className:" text-base font-medium text-white",children:"SignUp"})]})}),i&&e(a,{children:e("div",{className:" bg-gray-900",children:r("ul",{className:"text-white ml-10 bg-gray-900",children:[e("li",{className:"mt-2",children:e(t,{className:"hover:text-white  bg-gray-900",href:route("user.editProfile"),children:" My Profile"})}),e("li",{className:" mt-2",children:e(t,{className:"hover:text-white  bg-gray-900",href:route("user.dashboard"),children:"My Dashbaord"})}),e("li",{className:"mt-2",children:e(t,{href:route("Logout"),className:"hover:text-white  bg-gray-900",children:"Logout"})})]})})})]})})]})})},y=f;export{y as N};
