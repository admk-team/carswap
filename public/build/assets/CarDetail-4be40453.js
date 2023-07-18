import{r as i,j as l,a as e,b as L,F as c,d as o}from"./app-df188600.js";import{N as M}from"./NabBar2-938a502f.js";import{T as j,P as C,L as z,S as B,E as W,D as S,C as A,M as P,G as H,F as D,a as E}from"./car-color-06cb69b3.js";import F from"./Footer-d8ac9e12.js";import{C as T}from"./revo-img-4009d868.js";import{T as _}from"./transfer-57390ff6.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-9049196e.js";function q({car:s,auth:h,similarCars:n}){const[t,m]=i.useState(0),[p,V]=i.useState(""),[g,w]=i.useState(!0),x=r=>{m(Number(r.target.value))},v=()=>{w(!0)},u=new Date(s.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),[d,N]=i.useState(""),[f,b]=i.useState(0),k=(s==null?void 0:s.price)||0,y=()=>{const a=parseInt(d)-k;b(a)};return l("div",{children:[e(L,{title:s.title}),e("div",{children:e(M,{auth:h})}),l("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:[l("div",{className:"bg-gray-200 p-4",children:[l("div",{className:"flex",children:[e("div",{className:"bg-green-600 text-white py-2 px-4 mr-2",children:"Nigerian"}),e("div",{className:"bg-emerald-500 text-white py-2 px-4 mr-2",children:s.condition})]}),e("div",{className:"flex mt-3",children:e("div",{className:"text-black font-bold  text-6xl",children:s.title})}),l("div",{className:"flex justify-between mt-3",children:[l("div",{className:"flex items-center",children:[e("img",{src:j,className:"w-6 h-6"}),l("p",{className:"mx-2",children:["Listed on: ",u]})]}),e("div",{className:"flex justify-end",children:l("div",{className:"relative",children:[e("img",{src:C,alt:"PriceTag"}),l("p",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white self-center mx-3 pb-3 font-bold",children:["$ ",s.price]})]})})]}),l("div",{className:"flex justify-between mt-3",children:[l("div",{className:"flex items-center",children:[e("img",{src:z,className:"w-6 h-6"}),e("p",{className:"mx-2",children:s.location})]}),l("div",{className:"flex items-center mr-10",children:[e("img",{src:B,className:"w-6 h-6"}),e("p",{className:"ml-2 underline hover:text-blue-500 cursor-pointer",children:"Share Now"})]})]}),l("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[e("div",{className:"col-span-12 md:col-span-6",children:l("div",{className:"flex flex-col",children:[e("img",{src:"/storage/"+s.images[0],className:"w-full h-5/6 object-cover",alt:"Cover Image"}),e("div",{className:"flex flex-wrap gap-2 mt-3",children:s.images.map((r,a)=>e("img",{src:"/storage/"+r,className:"w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"},a))})]})}),e("div",{className:"col-span-12 md:col-span-6",children:l("div",{className:"flex flex-col mx-3 h-5/6",children:[l("div",{className:"bg-white rounded-lg shadow-md p-6",children:[e("h2",{className:"text-lg font-bold mb-4 text-center text-emerald-900",children:"Swap Buy Calculator"}),e("hr",{className:"mb-4"}),l("div",{className:"flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow",children:[e("p",{className:"font-bold",children:"Car Price"}),l("p",{children:["$ ",s==null?void 0:s.price]})]}),l("div",{className:"flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5",children:[e("p",{className:"font-bold mt-1",children:"Your Car Price"}),e("input",{type:"text",className:"w-48 border-gray-300 rounded px-2 py-1",placeholder:"Enter price",value:d,onChange:r=>N(r.target.value)})]}),l("div",{className:"flex flex-wrap p-3 bg-gray-100 justify-between rounded border shadow mt-5",children:[e("p",{className:"font-bold mt-1",children:"Price Difference"}),l("p",{children:["$ ",f]})]}),e("button",{className:"bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3",onClick:y,children:"Calculate"}),l("div",{className:"flex justify-center items-center mt-3",children:[e("hr",{className:"w-3/6 sm:w-1/6 border-0 border-t-2 border-black"}),e("p",{className:"font-bold text-2xl uppercase mx-4",children:"or"}),e("hr",{className:"w-3/6 sm:w-1/6 border-0 border-t-2 border-black"})]}),e("button",{className:"bg-gray-950  w-full text-white font-bold py-2 px-4 rounded mt-3",children:"Buy Now"})]}),l("div",{className:"bg-white rounded-lg shadow-md p-6 mt-3",children:[e("h2",{className:"text-lg font-bold mb-4 text-center text-emerald-900",children:"Swapping"}),e("hr",{}),e("div",{className:"relative p-4 flex",children:l("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ",children:[l("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"Your Car"}),e("img",{src:"/storage"+s.images[0],className:"w-full h-4/5 object-contain"})]}),e("div",{className:"col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center",children:e("img",{src:_,className:"w-full h-20 object-contain"})}),l("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"My Car"}),e("img",{src:T,className:"w-full h-4/5 object-contain"})]})]})}),e("button",{className:"bg-emerald-500 hover:bg-emerald-700 w-full text-white font-bold py-2 px-4 rounded mt-3",children:"Swap Now"})]})]})})]})]}),l("div",{className:"p-4",children:[e("h3",{className:"font-bold text-gray-900 text-2xl",children:"Key Features:"}),l("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[l("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:W,className:"w-6 h-6"}),e("p",{children:"Engine Size"})]}),e("div",{children:l("p",{children:[s.engine_capacity," CC"]})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:S,className:"w-6 h-6"}),e("p",{children:"Drive"})]}),e("div",{children:l("p",{children:[s.drive," KM"]})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:A,className:"w-6 h-6"}),e("p",{children:"Interior Color"})]}),e("div",{children:e("p",{children:s.interior_color})})]})]}),l("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:P,className:"w-6 h-6"}),e("p",{children:"Mileage"})]}),e("div",{children:l("p",{children:[s.mileage," (Mi)"]})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})}),e("p",{children:"Year"})]}),e("div",{children:e("p",{children:"2022"})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"})}),e("p",{children:"Condition"})]}),e("div",{children:e("p",{children:s.condition})})]}),e("hr",{})]}),l("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:H,className:"w-6 h-6"}),e("p",{children:"Transmission"})]}),e("div",{children:e("p",{children:s.transmission})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:D,className:"w-6 h-6"}),e("p",{children:"Fuel Type"})]}),e("div",{children:e("p",{children:s.fuel_type})})]}),e("hr",{}),l("div",{className:"flex justify-between bg-purple-50 p-4",children:[l("div",{className:"flex gap-2",children:[e("img",{src:E,className:"w-6 h-6"}),e("p",{children:"Exterior Color"})]}),e("div",{children:e("p",{children:s.exterior_color})})]}),e("hr",{})]})]})]}),l("div",{className:"p-4",children:[e("h3",{className:"font-bold text-gray-900 text-2xl",children:"Features:"}),l("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[l("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"ABS"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"AM/FM Radio"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Immobilizer Key"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Rear Parking Sensor"})]})]}),l("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Air Bags"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Brake Assist"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Navigation System"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Steering Adjustment"})]})]}),l("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Air Condition"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Central Locking"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Power Steering"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Xenon Headlight"})]})]}),l("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Alloy Rims"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Cruise Control"})]}),l("div",{className:"flex gap-2 mb-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("p",{children:"Power Windows"})]})]})]})]}),l("div",{className:"p-4",children:[e("h3",{className:"font-bold text-gray-900 text-2xl",children:"Description:"}),e("p",{children:s.description})]}),l("div",{className:"p-4",children:[e("h3",{className:"font-bold text-gray-900 text-2xl",children:"Reviews:"}),l("div",{className:"bg-white border border-gray-300 p-4 rounded-lg mt-3 shadow-md",children:[g?l(c,{children:[e("h1",{className:"text-gray-950 font-extrabold text-lg",children:"What was your overall experience with our car swapping and purchasing service?"}),e("div",{className:"flex mt-3",children:e("div",{className:"flex space-x-1",children:Array.from({length:5},(r,a)=>a+1).map(r=>l("label",{children:[e("input",{type:"radio",name:"rating",value:r,onChange:x,checked:t===r,className:"hidden"},r),e("svg",{className:`w-8 h-8 cursor-pointer ${r<=t?"text-emerald-400":"text-gray-400"}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",children:e("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})})]}))})})]}):e(c,{children:l("div",{className:"mb-2",children:[l("div",{className:"flex justify-between items-center",children:[e("div",{className:"flex space-x-1",children:Array.from({length:5},(r,a)=>a+1).map(r=>e("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-8 w-8 ${r<=t?"text-emerald-500":"hidden"}`,fill:"currentColor",viewBox:"0 0 22 20",stroke:"currentColor",children:e("path",{d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})},r))}),l("div",{className:"flex cursor-pointer space-x-0.5",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"blue",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})}),e("button",{onClick:v,className:" text-blue-500",children:"Edit"})]})]}),e("h3",{className:"mt-4 font-semibold text-lg",children:p})]})}),l("div",{className:"mt-3",children:[e("textarea",{id:"message",rows:4,className:" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write your thoughts here..."}),e("button",{className:"bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600",children:"Submit"})]})]})]}),n?l("div",{className:"p-4 ",children:[e("h3",{className:"font-bold text-3xl text-green-600",children:"Explore More:"}),e("h3",{className:"font-bold text-gray-900 text-2xl mt-2",children:"Similar Listings"}),e("div",{className:"flex justify-center",children:e("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6",children:n==null?void 0:n.map((r,a)=>l("div",{className:"w-full bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[l("div",{className:"relative",children:[e(o,{href:route("CarDetail",r.slug),children:e("img",{className:" w-full h-72 rounded-t-lg object-cover",src:"/storage"+(r==null?void 0:r.images[0]),alt:"product image"})}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-7 h-7 text-red-500 absolute top-2 right-2",fill:"red",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})}),l("div",{className:"absolute bottom-5 left-1",children:[e("svg",{"aria-hidden":"true",className:"w-5 h-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}),l("span",{className:" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFA534",viewBox:"0 0 24 24",strokeWidth:0,stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),e("p",{className:"text-sm",children:"4.2"})]})]})]}),l("div",{className:"px-2 pb-4",children:[e(o,{href:route("CarDetail",r.slug),children:e("h5",{className:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2",children:r==null?void 0:r.title})}),l("h5",{className:"text-2xl font-bold dark:text-white text-emerald-500 mt-1",children:["$ ",r==null?void 0:r.price]}),e("div",{className:"flex items-center"}),e("hr",{className:"border-t-2 border-black mt-2"}),e("div",{className:"mt-4",children:e("table",{className:"w-full",children:l("tbody",{children:[l("tr",{children:[e("th",{className:"px-2 py-1 font-bold-300 text-gray-600",children:"Condition"}),e("th",{className:"px-2 py-1 text-gray-800",children:"Engine"}),e("th",{className:"px-2 py-1 text-gray-800",children:"Mileage"})]}),l("tr",{children:[e("th",{className:"px-2 py-1 text-gray-600",children:r==null?void 0:r.condition}),e("th",{className:"px-2 py-1 text-gray-800",children:r==null?void 0:r.engine_capacity}),e("th",{className:"px-2 py-1 text-gray-800",children:r==null?void 0:r.mileage})]})]})})})]})]},a))})})]}):""]}),e("div",{children:e(F,{})})]})}export{q as default};
