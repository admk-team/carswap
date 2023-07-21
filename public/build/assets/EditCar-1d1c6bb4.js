import{q as b,r as f,W as g,j as a,F as i,a as e,b as h}from"./app-855eb60d.js";import{N as x}from"./NabBar2-006fb29e.js";import y from"./Footer-09cc23b3.js";import{I as v,a as c}from"./check-91f16923.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-a190ced6.js";const k=({auth:n,brands:d,car:t})=>{const{errors:l}=b().props;f.useState([]);const{data:s,setData:o,post:u,processing:w}=g({title:t.title||"",brand_id:t.brand_id||"",condition:t.condition||"",engineCapacity:t.engine_capacity||"",mileage:t.mileage||"",type:t.type||"",trim:t.trim||"",location:t.location||"",price:t.price||"",fuelType:t.fuel_type||"",model:t.model||"",transmission:t.transmission||"",drive:t.drive||"",interiorColor:t.interior_color||"",exteriorColor:t.exterior_color||"",description:t.description||"",images:null,_method:"put"}),p=r=>{r.target.files&&o("images",r.target.files)};function m(){u(route("user.cars.update",t.id))}return a(i,{children:[e(h,{title:"Edit "+t.title}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:a("div",{className:"border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl text-gray-950 font-bold",children:"Car Information:"}),e("h2",{className:"text-lg text-gray-700 mb-4",children:"(All fields are * required)"}),e("div",{className:" py-2",children:a("form",{className:"row g-3",method:"post",encType:"multipart/form-data",children:[a("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"title",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.title,onChange:r=>o("title",r.target.value)}),e("label",{htmlFor:"first_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Title *"}),l.title&&e("div",{className:"text-danger",children:l.title})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"brand_id",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.brand_id,onChange:r=>o("brand_id",r.target.value),children:[e("option",{value:"",children:"Select Brands"}),d.map(r=>e("option",{value:r.id,selected:t.brand_id&&t.brand_id===r.id,children:r.title}))]}),l.brand_id&&e("div",{className:"text-danger",children:l.brand_id}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"condition",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.condition,onChange:r=>o("condition",r.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Nigerian used",selected:t.condition&&t.condition==="Nigerian used",children:"Nigerian used"}),e("option",{value:"Foreign used",selected:t.condition&&t.condition==="Foreign used",children:"Foreign used"}),e("option",{value:"Brand New",selected:t.condition&&t.condition==="Brand New",children:"Brand New"})]}),l.condition&&e("div",{className:"text-danger",children:l.condition}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"engineCapacity",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.engineCapacity,onChange:r=>o("engineCapacity",r.target.value)}),l.engineCapacity&&e("div",{className:"text-danger",children:l.engineCapacity}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Engine Capacity *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"mileage",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.mileage,onChange:r=>o("mileage",r.target.value)}),l.mileage&&e("div",{className:"text-danger",children:l.mileage}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Mileage*"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"type",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.type,onChange:r=>o("type",r.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"swap",selected:t.type&&t.type==="swap",children:"For Swap"}),e("option",{value:"sale",selected:t.type&&t.type==="sale",children:"For Sale"})]}),l.type&&e("div",{className:"text-red-500",children:l.type}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]})]}),e("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"trim",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.trim,onChange:r=>o("trim",r.target.value)}),l.trim&&e("div",{className:"text-red-500",children:l.trim}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Trim *"})]})}),a("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"price",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:s.price,onChange:r=>o("price",r.target.value)}),l.price&&e("div",{className:"text-danger",children:l.price}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Price"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[a("select",{name:"Usedca",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:s.fuelType,onChange:r=>o("fuelType",r.target.value),children:[e("option",{value:"option0",children:"Select Fuel Type"}),e("option",{value:"Fuel",children:"Fuel"}),e("option",{value:"Desiel",children:"Desiel"})]}),l.condition&&e("div",{className:"text-danger",children:l.condition}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"model",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.model,onChange:r=>o("model",r.target.value)}),l.model&&e("div",{className:"text-danger",children:l.model}),e("label",{htmlFor:"address",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Modal *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"transmission",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:s.transmission,onChange:r=>o("transmission",r.target.value)}),l.transmission&&e("div",{className:"text-danger",children:l.transmission}),e("label",{htmlFor:"City",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Transmission  *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"drive",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:s.drive,onChange:r=>o("drive",r.target.value)}),l.drive&&e("div",{className:"text-danger",children:l.drive}),e("label",{htmlFor:"date",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Drive *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"interiorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.interiorColor,onChange:r=>o("interiorColor",r.target.value)}),l.interiorColor&&e("div",{className:"text-danger",children:l.interiorColor}),e("label",{htmlFor:"Time",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Interior Color *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"exteriorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.exteriorColor,onChange:r=>o("exteriorColor",r.target.value)}),l.exteriorColor&&e("div",{className:"text-danger",children:l.exteriorColor}),e("label",{htmlFor:"Modal",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Exterior Color *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"location",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.location,onChange:r=>o("location",r.target.value)}),l.location&&e("div",{className:"text-danger",children:l.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Location *"})]}),a("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:" description",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s.description,onChange:r=>o("description",r.target.value)}),l.location&&e("div",{className:"text-danger",children:l.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Description *"})]})]}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6",children:a("div",{className:"bg-white border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl font-bold",children:"Upload Image:"}),e("div",{className:"py-2",children:e("div",{className:"flex items-center justify-center w-full",children:a("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[a("div",{className:"flex items-center justify-center pb-3",children:[e("img",{src:v,className:"mb-2 w-12 h-12 mr-4",alt:""}),e("div",{className:"bg-green-500 text-white py-2.5 px-3",children:"+ Add Photos"})]}),a("div",{className:"flex flex-wrap justify-around",children:[a("span",{className:"flex pt-4",children:[e("img",{src:c,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Add at least 15 pictures"})," to improve chances for a quick sale."]})]}),a("span",{className:"flex pt-4",children:[e("img",{src:c,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Adding clear Front, Back, and Interior Pictures"})," of your car increases the quality of your Ad and gets you noticed more."]})]}),a("span",{className:"flex pt-4",children:[e("img",{src:c,className:"w-5 h-5 mr-2",alt:""}),a("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Photos should be in"})," jpeg, jpg, png, gif format only."]})]})]}),e("input",{id:"dropzone-file",type:"file",className:"hidden",name:"images",onChange:p,multiple:!0})]})})})]})}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:"flex justify-end",children:e("button",{type:"button",onClick:()=>m(),className:"px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600",children:"Save Change"})})})]})})]})})]})},S=({auth:n,brands:d,car:t})=>a(i,{children:[e(x,{auth:n}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10",children:e("p",{className:"font-bold text-2xl text-gray-950",children:"Here you can edit your car :"})}),e(k,{auth:n,brands:d,car:t}),e(y,{})]});export{S as default};
