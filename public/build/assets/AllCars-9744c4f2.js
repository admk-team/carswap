import{r as t,W as x,j as i,a as e,b as v}from"./app-6a3cd5d8.js";import{N as w}from"./NabBar2-c0cf5f0f.js";import M from"./Footer-2103df9d.js";import{P as b}from"./PricingCard-df45cda0.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-13f29e3e.js";import"./transfer-57390ff6.js";function k({brands:c,cars:r,auth:s}){t.useState(!1),t.useState([]);const[m,u]=t.useState(0);t.useState(""),t.useState(""),t.useState(""),t.useState("");const{data:d,setData:n,errors:N,get:p}=x({searchTerm:"",min:"0",model:"0",max:"0",minMileage:"0",maxMileage:"0",brand:""}),h=l=>{let a="",o="";l==="option1"&&(a="0",o="3000000"),l==="option2"&&(a="3000000",o="6000000"),l==="option3"&&(a="6000000",o="10000000"),l==="option4"&&(a="10000000",o="15000000"),l==="option5"&&(a="15000000",o="0"),n({...d,min:a,max:o})},g=l=>{let a="",o="";l==="mileage1"&&(a="0",o="30000"),l==="mileage2"&&(a="30000",o="60000"),l==="mileage3"&&(a="60000",o="100000"),l==="mileage4"&&(a="100000",o="150000"),l==="mileage5"&&(a="150000",o="0"),n({...d,minMileage:a,maxMileage:o})};t.useEffect(()=>{u(r.length)},[r]);const f=()=>{p(route("search"))};return i("div",{children:[e(v,{title:"Nigeria’s No 1. Carswap place. Buy. Sell. Swap"}),e(w,{auth:s}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:i("div",{className:"bg-gray-200 p-4",children:[e("p",{className:"font-black text-gray-950 text-3xl",children:"Cars Up for Sale"}),e("form",{children:i("div",{className:"flex flex-col mt-2",children:[i("div",{className:"relative w-full max-w-xl shadow-md",children:[e("input",{type:"text",placeholder:"Search For car by Model, brand",className:"w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",name:"search",value:d.searchTerm,onChange:l=>n("searchTerm",l.target.value)}),e("button",{className:"absolute top-0 right-0 h-full bg-green-500 text-white px-4 rounded-md focus:outline-none",onClick:()=>f(),type:"button",children:"Search"})]}),i("div",{className:"flex flex-wrap mt-2 gap-2",children:[i("select",{className:"w-full sm:w-auto max-w-xs mt-2 sm:mt-0 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md",onChange:l=>h(l.target.value),children:[e("option",{value:"",children:"Price"}),e("option",{value:"option1",children:"Under 3M"}),e("option",{value:"option2",children:"3M-6M"}),e("option",{value:"option3",children:"6M-10M"}),e("option",{value:"option4",children:"10M-15M"}),e("option",{value:"option5",children:"Above 15M"})]}),i("select",{className:"w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md",onChange:l=>n("brand",l.target.value),children:[e("option",{value:"",children:"Brand"}),c.map(l=>e("option",{value:l.id,children:l.title},l.id))]}),i("select",{className:"w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md",onChange:l=>n("model",l.target.value),children:[e("option",{value:"",children:"Model"}),e("option",{value:"2000",children:"2000"}),e("option",{value:"2001",children:"2001"}),e("option",{value:"2002",children:"2002"}),e("option",{value:"2003",children:"2003"}),e("option",{value:"2004",children:"2004"}),e("option",{value:"2005",children:"2005"})]}),i("select",{className:"w-full sm:w-auto max-w-xs mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none shadow-md",onChange:l=>g(l.target.value),children:[e("option",{value:"",children:"Mileage"}),e("option",{value:"mileage1",children:"0-30,000 KM"}),e("option",{value:"mileage2",children:"30,000-60,000 KM"}),e("option",{value:"mileage3",children:"60,000-120,000 KM"}),e("option",{value:"mileage4",children:"120,000-150,000 KM"}),e("option",{value:"mileage5",children:"Above 150,000 KM"})]})]})]})}),i("div",{children:[i("p",{className:"font-black text-gray-950 text-2xl mt-3",children:["All Results(",m||0,")"]}),e("div",{className:"flex justify-center",children:e("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6"})})]}),e("div",{children:e("div",{children:e(b,{cars:r})})})]})}),e(M,{auth:s})]})}export{k as default};
