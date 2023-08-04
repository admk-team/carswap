import{q as x,r as p,W as y,j as a,F as i,a as e,b as v}from"./app-f6ecbbb5.js";import{N as w}from"./NabBar2-1841897d.js";import k from"./Footer-454abbf6.js";import{I as N,a as d}from"./check-91f16923.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-019d72bd.js";const C=({auth:n,brands:c,car:l})=>{const{errors:t}=x().props,[m,u]=p.useState(!1),{data:s,setData:o,post:b,processing:F}=y({title:l.title||"",brand_id:l.brand_id||"",condition:l.condition||"",engineCapacity:l.engine_capacity||"",mileage:l.mileage||"",type:l.type||"",swaptitle1:l.swaptitle1||"",swaptitle2:l.swaptitle2||"",trim:l.trim||"",location:l.location||"",price:l.price||"",fuelType:l.fuel_type||"",model:l.model||"",transmission:l.transmission||"",drive:l.drive||"",interiorColor:l.interior_color||"",exteriorColor:l.exterior_color||"",description:l.description||"",images:null,_method:"put"});p.useState([null]);const f=r=>{r.target.files&&o("images",r.target.files)};function h(){b(route("user.cars.update",l.id))}const g=r=>{o("type",r.target.value),r.target.value=="swap"?u(!0):u(!1)};return a(i,{children:[e(v,{title:"Edit "+l.title}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:a("div",{className:"border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl text-gray-950 font-bold",children:"Car Information:"}),e("h2",{className:"text-lg text-gray-700 mb-4",children:"(All fields are * required)"}),e("div",{className:" py-2",children:a("form",{className:"row g-3",method:"post",encType:"multipart/form-data",children:[a("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"title",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.title,onChange:r=>o("title",r.target.value)}),e("label",{htmlFor:"first_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Title *"}),t.title&&e("div",{className:"text-red-500",children:t.title})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"brand_id",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.brand_id,onChange:r=>o("brand_id",r.target.value),children:[e("option",{value:"",children:"Select Brands"}),c.map(r=>e("option",{value:r.id,children:r.title}))]}),t.brand_id&&e("div",{className:"text-red-500",children:t.brand_id}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"condition",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.condition,onChange:r=>o("condition",r.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Nigerian Used",children:"Nigerian Used"}),e("option",{value:"Foreign Used",children:"Foreign Used"}),e("option",{value:"Brand New",children:"Brand New"})]}),t.condition&&e("div",{className:"text-red-500",children:t.condition}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"engineCapacity",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.engineCapacity,onChange:r=>o("engineCapacity",r.target.value)}),t.engineCapacity&&e("div",{className:"text-red-500",children:t.engineCapacity}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Engine Capacity *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"mileage",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.mileage,onChange:r=>o("mileage",r.target.value)}),t.mileage&&e("div",{className:"text-red-500",children:t.mileage}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Mileage *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"type",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.type,onChange:g,children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"swap",children:"For Swap"}),e("option",{value:"sale",children:"For Sale"})]}),t.type&&e("div",{className:"text-red-500",children:t.type}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]})]}),m&&a(i,{children:[e("h3",{className:"text-xl text-gray-950 font-bold mb-1",children:"For Intersted Swap Car Details"}),a("div",{className:"grid md:grid-cols-2 md:gap-x-6 mb-2",children:[a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"swaptitle1",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.swaptitle1,onChange:r=>o("swaptitle1",r.target.value)}),t.swaptitle1&&e("div",{className:"text-red-500",children:t.swaptitle1}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Car Detail 1*"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"swaptitle2",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.swaptitle2,onChange:r=>o("swaptitle2",r.target.value)}),t.swaptitle2&&e("div",{className:"text-red-500",children:t.swaptitle2}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Car Detail 2*"})]})]})]}),a("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"trim",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.trim,onChange:r=>o("trim",r.target.value)}),t.trim&&e("div",{className:"text-red-500",children:t.trim}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Trim *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"price",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.price,onChange:r=>o("price",r.target.value)}),t.price&&e("div",{className:"text-red-500",children:t.price}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Price *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"Usedca",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.fuelType,onChange:r=>o("fuelType",r.target.value),children:[e("option",{value:"option0",children:"Select Fuel Type"}),e("option",{value:"CNG",children:"CNG"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),t.fuelType&&e("div",{className:"text-red-500",children:t.fuelType}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"model",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.model,onChange:r=>o("model",r.target.value)}),t.model&&e("div",{className:"text-red-500",children:t.model}),e("label",{htmlFor:"address",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Modal *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"transmission",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:s.transmission,onChange:r=>o("transmission",r.target.value)}),t.transmission&&e("div",{className:"text-red-500",children:t.transmission}),e("label",{htmlFor:"City",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Transmission  *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"drive",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:s.drive,onChange:r=>o("drive",r.target.value)}),t.drive&&e("div",{className:"text-red-500",children:t.drive}),e("label",{htmlFor:"date",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Drive *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"interiorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.interiorColor,onChange:r=>o("interiorColor",r.target.value)}),t.interiorColor&&e("div",{className:"text-red-500",children:t.interiorColor}),e("label",{htmlFor:"Time",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Interior Color *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"exteriorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.exteriorColor,onChange:r=>o("exteriorColor",r.target.value)}),t.exteriorColor&&e("div",{className:"text-red-500",children:t.exteriorColor}),e("label",{htmlFor:"Modal",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Exterior Color *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"location",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.location,onChange:r=>o("location",r.target.value)}),t.location&&e("div",{className:"text-red-500",children:t.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Location *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:" description",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.description,onChange:r=>o("description",r.target.value)}),t.location&&e("div",{className:"text-red-500",children:t.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Description *"})]})]}),a("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6",children:[e("div",{className:"w-full"}),a("div",{className:"bg-white border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl font-bold",children:"Upload Image:"}),e("div",{className:"py-2",children:e("div",{className:"flex items-center justify-center w-full",children:a("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[a("div",{className:"flex items-center justify-center pb-3",children:[e("img",{src:N,className:"mb-2 w-12 h-12 mr-4",alt:""}),e("div",{className:"bg-green-500 text-white py-2.5 px-3",children:"+ Add Photos"})]}),a("div",{className:"flex flex-wrap justify-around",children:[a("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Add at least 15 pictures"})," to improve chances for a quick sale."]})]}),a("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Adding clear Front, Back, and Interior Pictures"})," of your car increases the quality of your Ad and gets you noticed more."]})]}),a("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Photos should be in"})," jpeg, jpg, png, gif format only."]})]})]}),e("input",{id:"dropzone-file",type:"file",className:"hidden",name:"images",onChange:f,multiple:!0})]})})})]})]}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:"flex justify-end",children:e("button",{type:"button",onClick:()=>h(),className:"px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600",children:"Submit and Pay Fees"})})})]})})]})})]})},D=({auth:n,brands:c,car:l})=>a(i,{children:[e(w,{auth:n}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10",children:e("p",{className:"font-bold text-2xl text-gray-950",children:"Here you can edit your car :"})}),e(C,{auth:n,brands:c,car:l}),e(k,{auth:n})]});export{D as default};
