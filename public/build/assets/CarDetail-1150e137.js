import{r as o,j as e,a as c,d as n}from"./app-ab08e8ee.js";import{N as x}from"./NabBar2-8b165ddc.js";import{T as h,P as m,L as p,S as j,E as g,D as v,C as w,M as u,G as N,F as f,a as b}from"./car-color-06cb69b3.js";import k from"./Footer-4af20c73.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-e9a6f4f3.js";const y=()=>{const[l,a]=o.useState(0),i=s=>{a(r=>r===s?0:s)},t=()=>{const s=[];for(let r=1;r<=5;r++){const d=r<=l?"text-emerald-400":"text-gray-400 ";s.push(e.jsx("svg",{className:`w-8 h-8 cursor-pointer ${d}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 20",stroke:"currentColor",onClick:()=>i(r),children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"})},r))}return s};return e.jsx("div",{className:"flex space-x-2",children:t()})},L=y;function H({car:l,auth:a,similarCars:i}){const t=new Date(l.created_at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return e.jsxs("div",{children:[e.jsx(c,{title:l.title}),e.jsx("div",{children:e.jsx(x,{auth:a})}),e.jsxs("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:[e.jsxs("div",{className:"bg-gray-200 p-4",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"bg-green-600 text-white py-2 px-4 mr-2",children:"Nigerian"}),e.jsx("div",{className:"bg-emerald-500 text-white py-2 px-4 mr-2",children:l.condition})]}),e.jsx("div",{className:"flex mt-3",children:e.jsx("div",{className:"text-black font-bold  text-6xl",children:l.title})}),e.jsxs("div",{className:"flex justify-between mt-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:h,className:"w-6 h-6"}),e.jsxs("p",{className:"mx-2",children:["Listed on: ",t]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:m,alt:"PriceTag"}),e.jsxs("p",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white self-center mx-3 pb-3 font-bold",children:["$ ",l.price]})]})})]}),e.jsxs("div",{className:"flex justify-between mt-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:p,className:"w-6 h-6"}),e.jsx("p",{className:"mx-2",children:l.location})]}),e.jsxs("div",{className:"flex items-center mr-10",children:[e.jsx("img",{src:j,className:"w-6 h-6"}),e.jsx("p",{className:"ml-2 underline hover:text-blue-500 cursor-pointer",children:"Share Now"})]})]}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[e.jsx("div",{className:"col-span-12 md:col-span-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("img",{src:"/storage/"+l.images[0],className:"w-full h-5/6 object-cover",alt:"Cover Image"}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-3",children:l.images.map((s,r)=>e.jsx("img",{src:"/storage/"+s,className:"w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"},r))})]})}),e.jsx("div",{className:"col-span-12 md:col-span-6",children:e.jsxs("div",{className:"flex flex-col mx-3 h-5/6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Verified Cars:"}),e.jsx("p",{className:"text-gray-700",children:"Carswap carries out many inspections on cars to make sure a high quality is kept. These inspections cover both the documentation and the state of the vehicle."})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mt-3",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Dedicated Support Team:"}),e.jsx("p",{className:"text-gray-700",children:"Carswap has a committed support team on hand to provide you with the necessary knowledge to help you make better purchasing decisions."})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mt-3",children:[e.jsx("h2",{className:"text-lg font-bold mb-4",children:"Inspection:"}),e.jsx("p",{className:"text-gray-700",children:"Carswap carries out best inspections on cars to make sure a high quality is kept. These inspections cover both the documentation and the state of the vehicle. We deal with the best vehicles out there."})]})]})})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-gray-900 text-2xl",children:"Key Features:"}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:g,className:"w-6 h-6"}),e.jsx("p",{children:"Engine Size"})]}),e.jsx("div",{children:e.jsxs("p",{children:[l.engine_capacity," CC"]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:v,className:"w-6 h-6"}),e.jsx("p",{children:"Drive"})]}),e.jsx("div",{children:e.jsxs("p",{children:[l.drive," KM"]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:w,className:"w-6 h-6"}),e.jsx("p",{children:"Interior Color"})]}),e.jsx("div",{children:e.jsx("p",{children:l.interior_color})})]})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:u,className:"w-6 h-6"}),e.jsx("p",{children:"Mileage"})]}),e.jsx("div",{children:e.jsxs("p",{children:[l.mileage," (Mi)"]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})}),e.jsx("p",{children:"Year"})]}),e.jsx("div",{children:e.jsx("p",{children:"2022"})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"})}),e.jsx("p",{children:"Condition"})]}),e.jsx("div",{children:e.jsx("p",{children:l.condition})})]}),e.jsx("hr",{})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-4",children:[e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:N,className:"w-6 h-6"}),e.jsx("p",{children:"Transmission"})]}),e.jsx("div",{children:e.jsx("p",{children:l.transmission})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:f,className:"w-6 h-6"}),e.jsx("p",{children:"Fuel Type"})]}),e.jsx("div",{children:e.jsx("p",{children:l.fuel_type})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between bg-purple-50 p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:b,className:"w-6 h-6"}),e.jsx("p",{children:"Exterior Color"})]}),e.jsx("div",{children:e.jsx("p",{children:l.exterior_color})})]}),e.jsx("hr",{})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-gray-900 text-2xl",children:"Features:"}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 mt-7",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"ABS"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"AM/FM Radio"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Immobilizer Key"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Rear Parking Sensor"})]})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Air Bags"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Brake Assist"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Navigation System"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Steering Adjustment"})]})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Air Condition"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Central Locking"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Power Steering"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Xenon Headlight"})]})]}),e.jsxs("div",{className:"col-span-12 md:col-span-6 lg:col-span-3",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Alloy Rims"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Cruise Control"})]}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"green",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("p",{children:"Power Windows"})]})]})]})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-gray-900 text-2xl",children:"Description:"}),e.jsx("p",{children:l.description})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-gray-900 text-2xl",children:"Reviews:"}),e.jsxs("div",{className:"bg-white border border-gray-300 p-4 rounded-lg mt-3 shadow-md",children:[e.jsx("h1",{className:"text-gray-950 font-extrabold text-lg",children:"What was your overall experience with our car swapping and purchasing service?"}),e.jsx("div",{className:"flex mt-3",children:e.jsx(L,{})}),e.jsxs("div",{className:"mt-3",children:[e.jsx("textarea",{id:"message",rows:4,className:" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write your thoughts here..."}),e.jsx("button",{className:"bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600",children:"Submit"})]})]})]}),i?e.jsxs("div",{className:"p-4 ",children:[e.jsx("h3",{className:"font-bold text-3xl text-green-600",children:"Explore More:"}),e.jsx("h3",{className:"font-bold text-gray-900 text-2xl mt-2",children:"Similar Listings"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6",children:i==null?void 0:i.map((s,r)=>e.jsxs("div",{className:"w-full bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsxs("div",{className:"relative",children:[e.jsx(n,{href:route("CarDetail",s.slug),children:e.jsx("img",{className:" w-full h-72 rounded-t-lg object-cover",src:"/storage"+(s==null?void 0:s.images[0]),alt:"product image"})}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-7 h-7 text-red-500 absolute top-2 right-2",fill:"red",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})}),e.jsxs("div",{className:"absolute bottom-5 left-1",children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}),e.jsxs("span",{className:" flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFA534",viewBox:"0 0 24 24",strokeWidth:0,stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),e.jsx("p",{className:"text-sm",children:"4.2"})]})]})]}),e.jsxs("div",{className:"px-2 pb-4",children:[e.jsx(n,{href:route("CarDetail",s.slug),children:e.jsx("h5",{className:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2",children:s==null?void 0:s.title})}),e.jsxs("h5",{className:"text-2xl font-bold dark:text-white text-emerald-500 mt-1",children:["$ ",s==null?void 0:s.price]}),e.jsx("div",{className:"flex items-center"}),e.jsx("hr",{className:"border-t-2 border-black mt-2"}),e.jsx("div",{className:"mt-4",children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-1 font-bold-300 text-gray-600",children:"Condition"}),e.jsx("th",{className:"px-2 py-1 text-gray-800",children:"Engine"}),e.jsx("th",{className:"px-2 py-1 text-gray-800",children:"Mileage"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-1 text-gray-600",children:s==null?void 0:s.condition}),e.jsx("th",{className:"px-2 py-1 text-gray-800",children:s==null?void 0:s.engine_capacity}),e.jsx("th",{className:"px-2 py-1 text-gray-800",children:s==null?void 0:s.mileage})]})]})})}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("a",{href:"#",className:"text-white bg-black hover:bg-gray-600 font-medium  text-sm px-6 py-2.5 text-center  w-36",children:"Cash Purchase"}),e.jsx("a",{href:"#",className:"text-white bg-green-500 hover:bg-green-600 font-medium  text-sm px-6 py-2.5 text-center  w-32",children:"Swap"})]})]})]},r))})})]}):""]}),e.jsx("div",{children:e.jsx(k,{})})]})}export{H as default};
