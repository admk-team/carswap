import{a as e,F as i,j as r,q as b,r as f,W as h}from"./app-2e38a6a8.js";import{N as g}from"./NabBar2-f1a4d3ff.js";import x from"./Footer-e0a93c74.js";import{I as y,a as d}from"./check-91f16923.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-8438e51f.js";const v="/build/assets/electric-car (1) 1-f7eb4cf2.png",N="/build/assets/electric-car (2) 1-77774508.png",w="/build/assets/electric-car (3) 1-637dc802.png",k=()=>e(i,{children:r("div",{className:"w-full h-230 bg-green-500 flex flex-col items-center justify-center p-4 mt-12",children:[e("h1",{className:"text-white text-2xl font-black mt-2",children:"Sell your Car in Simple Steps"}),e("h2",{className:"text-white text-xl font-bold mb-2",children:"It will take less time"}),r("div",{className:"flex items-center",children:[r("div",{className:"mr-4 flex items-center",children:[e("div",{className:"bg-white rounded-full p-1",children:e("img",{src:v,alt:"Icon 1",className:"w-6 h-6"})}),e("span",{className:"text-white text-sm ml-2",children:"Enter Car Information"})]}),r("div",{className:"mr-4 flex items-center",children:[e("div",{className:"bg-white rounded-full p-1",children:e("img",{src:N,alt:"Icon 2",className:"w-6 h-6"})}),e("span",{className:"text-white text-sm ml-2",children:"Upload Images"})]}),r("div",{className:"mr-4 flex items-center",children:[e("div",{className:"bg-white rounded-full p-1",children:e("img",{src:w,alt:"Icon 3",className:"w-6 h-6"})}),e("span",{className:"text-white text-sm ml-2",children:"Price Tag"})]})]})]})}),C=({auth:s,brands:n,users:F})=>{const{errors:t}=b().props;f.useState([]);const{data:o,setData:l,post:u,processing:z,progress:c}=h({title:"",brand_id:"",user_id:"",condition:"",engineCapacity:"",mileage:"",type:"",trim:"",location:"",price:"",fuelType:"",model:"",transmission:"",drive:"",interiorColor:"",exteriorColor:"",description:"",images:[]}),p=a=>{a.target.files&&l("images",a.target.files)};function m(){u(route("user.cars.store"))}return e(i,{children:e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:r("div",{className:"border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl text-gray-950 font-bold",children:"Car Information:"}),e("h2",{className:"text-lg text-gray-700 mb-4",children:"(All fields are * required)"}),e("div",{className:" py-2",children:r("form",{className:"row g-3",method:"post",encType:"multipart/form-data",children:[r("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"title",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.title,onChange:a=>l("title",a.target.value)}),e("label",{htmlFor:"first_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Title *"}),t.title&&e("div",{className:"text-red-500",children:t.title})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[r("select",{name:"brand_id",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:o.brand_id,onChange:a=>l("brand_id",a.target.value),children:[e("option",{value:"",children:"Select Brands"}),n.map(a=>e("option",{value:a.id,children:a.title}))]}),t.brand_id&&e("div",{className:"text-red-500",children:t.brand_id}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[r("select",{name:"condition",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:o.condition,onChange:a=>l("condition",a.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Nigerian Used",children:"Nigerian Used"}),e("option",{value:"Foreign Used",children:"Foreign Used"}),e("option",{value:"Brand New",children:"Brand New"})]}),t.condition&&e("div",{className:"text-red-500",children:t.condition}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"engineCapacity",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.engineCapacity,onChange:a=>l("engineCapacity",a.target.value)}),t.engineCapacity&&e("div",{className:"text-red-500",children:t.engineCapacity}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Engine Capacity *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"mileage",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.mileage,onChange:a=>l("mileage",a.target.value)}),t.mileage&&e("div",{className:"text-red-500",children:t.mileage}),e("label",{htmlFor:"",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Mileage *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[r("select",{name:"type",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:o.type,onChange:a=>l("type",a.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"swap",children:"For Swap"}),e("option",{value:"sale",children:"For Sale"})]}),t.type&&e("div",{className:"text-red-500",children:t.type}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]})]}),e("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"trim",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:o.trim,onChange:a=>l("trim",a.target.value)}),t.trim&&e("div",{className:"text-red-500",children:t.trim}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Trim *"})]})}),r("div",{className:"grid md:grid-cols-2 md:gap-x-6",children:[r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"price",id:"floating_company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer",placeholder:" ",value:o.price,onChange:a=>l("price",a.target.value)}),t.price&&e("div",{className:"text-red-500",children:t.price}),e("label",{htmlFor:"floating_company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Price *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[r("select",{name:"Usedca",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",value:o.fuelType,onChange:a=>l("fuelType",a.target.value),children:[e("option",{value:"option0",children:"Select Fuel Type"}),e("option",{value:"CNG",children:"CNG"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),t.condition&&e("div",{className:"text-red-500",children:t.condition}),e("label",{htmlFor:"Price",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"model",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.model,onChange:a=>l("model",a.target.value)}),t.model&&e("div",{className:"text-red-500",children:t.model}),e("label",{htmlFor:"address",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Modal *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"transmission",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:o.transmission,onChange:a=>l("transmission",a.target.value)}),t.transmission&&e("div",{className:"text-red-500",children:t.transmission}),e("label",{htmlFor:"City",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Transmission  *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"drive",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  peer",placeholder:" ",value:o.drive,onChange:a=>l("drive",a.target.value)}),t.drive&&e("div",{className:"text-red-500",children:t.drive}),e("label",{htmlFor:"date",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Drive *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"interiorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.interiorColor,onChange:a=>l("interiorColor",a.target.value)}),t.interiorColor&&e("div",{className:"text-red-500",children:t.interiorColor}),e("label",{htmlFor:"Time",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Interior Color *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"exteriorColor",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.exteriorColor,onChange:a=>l("exteriorColor",a.target.value)}),t.exteriorColor&&e("div",{className:"text-red-500",children:t.exteriorColor}),e("label",{htmlFor:"Modal",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Exterior Color *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:"location",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.location,onChange:a=>l("location",a.target.value)}),t.location&&e("div",{className:"text-red-500",children:t.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Location *"})]}),r("div",{className:"relative z-0 w-full mb-6 group",children:[e("input",{type:"text",name:" description",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:o.description,onChange:a=>l("description",a.target.value)}),t.location&&e("div",{className:"text-red-500",children:t.location}),e("label",{htmlFor:"Year",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Description *"})]})]}),r("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6",children:[e("div",{className:"w-full",children:c&&r("progress",{value:c.percentage,max:"100",className:"w-full rounded",children:[c.percentage,"%"]})}),r("div",{className:"bg-white border border-gray-300 p-8 rounded-lg shadow-md",children:[e("h1",{className:"text-xl font-bold",children:"Upload Image:"}),e("div",{className:"py-2",children:e("div",{className:"flex items-center justify-center w-full",children:r("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[r("div",{className:"flex items-center justify-center pb-3",children:[e("img",{src:y,className:"mb-2 w-12 h-12 mr-4",alt:""}),e("div",{className:"bg-green-500 text-white py-2.5 px-3",children:"+ Add Photos"})]}),r("div",{className:"flex flex-wrap justify-around",children:[r("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),r("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Add at least 15 pictures"})," to improve chances for a quick sale."]})]}),r("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),r("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Adding clear Front, Back, and Interior Pictures"})," of your car increases the quality of your Ad and gets you noticed more."]})]}),r("span",{className:"flex pt-4",children:[e("img",{src:d,className:"w-5 h-5 mr-2",alt:""}),r("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e("b",{children:"Photos should be in"})," jpeg, jpg, png, gif format only."]})]})]}),e("input",{id:"dropzone-file",type:"file",className:"hidden",name:"images",onChange:p,multiple:!0})]})})})]})]}),e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:"flex justify-end",children:e("button",{type:"button",onClick:()=>m(),className:"px-5 py-3 text-base font-medium text-center text-white bg-green-500  hover:bg-green-600",children:"Submit and Pay Fees"})})})]})})]})})})},U=({auth:s,brands:n})=>r(i,{children:[e(g,{auth:s}),e(k,{}),e(C,{auth:s,brands:n}),e(x,{auth:s})]});export{U as default};
