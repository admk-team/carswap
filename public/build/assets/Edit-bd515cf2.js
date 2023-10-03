import{r as d,W as b,j as a,F as m,a as e,b as C}from"./app-6a3cd5d8.js";import{L as _}from"./Layout-ef466482.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./index-13f29e3e.js";const T=({auth:h,brands:s,car:i,users:p,categories:u})=>{const[v,c]=d.useState(!1),[g,t]=d.useState(!1),{data:r,errors:n,setData:o,post:N,progress:w}=b({title:i.title,brand_id:i.brand_id,user_id:i.user_id,condition:i.condition,engine_capacity:i.engine_capacity,mileage:i.mileage,type:i.type,trim:i.trim,location:i.location,price:i.price,fuel_type:i.fuel_type,model:i.model,transmission:i.transmission,drive:i.drive,interior_color:i.interior_color,exterior_color:i.exterior_color,description:i.description,lga:i.lga,street:i.street,body_type:i.body_type,price_negotiable:i.price_negotiable,custom_paper:i.custom_paper,cylinder:i.cylinder,year:i.year,porpose:i.porpose,fixedengine:i.fixedengine,fixedtrans:i.fixedtrans,title1:i.title1,model1:i.model1,year1:i.year1,condition1:i.condition1,interiorColor1:i.interiorColor1,milage1:i.milage1,title2:i.title2,model2:i.model2,year2:i.year2,condition2:i.condition2,interiorColor2:i.interiorColor2,milage2:i.milage2,brand1:i.brand1||"",fuelType1:i.fuelType1||"",transmission1:i.transmission1||"",exteriorColor1:i.exteriorColor1||"",price1:i.price1||"",cylinder1:i.cylinder1||"",custom_paper1:i.custom_paper1||"",feature1:i.feature1||"",no_owner:i.no_owner||"",categories_id:i.categories_id||"",feature:i.feature||"",distress:i.distress||"",brand2:i.brand2||"",fuelType2:i.fuelType2||"",transmission2:i.transmission2||"",exteriorColor2:i.exteriorColor2||"",price2:i.price2||"",cylinder2:i.cylinder2||"",custom_paper2:i.custom_paper2||"",feature2:i.feature2||"",images:i.images||"",_method:"put"});d.useState(null);const f=l=>{l.target.files&&o("images",l.target.files)};function x(l){l.preventDefault(),N(route("admin.swap.update",i.id))}const y=l=>{o("type",l.target.value),l.target.value==="swap"?(c(!0),t(!1)):l.target.value==="sale"&&(t(!0),c(!1))};return d.useEffect(()=>{i.type==="swap"?(c(!0),t(!1)):i.type==="sale"&&(t(!0),c(!1))},[i.type]),a(m,{children:[e(C,{title:"Edit Car"}),a("div",{className:"container-fluid",children:[e("h1",{className:"h3 mb-2 text-gray-800",children:"Car"}),a("div",{className:"card shadow mb-4",children:[e("div",{className:"card-header py-3",children:e("h6",{className:"m-0 font-weight-bold text-primary",children:"Edit Car"})}),e("div",{className:"card-body",children:a("form",{className:"row g-3",method:"post",onSubmit:x,encType:"multipart/form-data",children:[e("div",{className:"card-header py-3",children:e("h6",{className:"m-0 font-weight-bold text-primary",children:"Location of car"})}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Location",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"location",id:"",className:"form-control",onChange:l=>o("location",l.target.value),children:[e("option",{value:"",children:"Select State"}),e("option",{value:"Abia",children:"Abia"}),e("option",{value:"Abuja",children:"Abuja"}),e("option",{value:"Adamawa",children:"Adamawa"}),e("option",{value:"Akwa Ibom",children:"Akwa Ibom"}),e("option",{value:"Anambra",children:"Anambra"}),e("option",{value:"Bauchi",children:"Bauchi"}),e("option",{value:"Bayelsa",children:"Bayelsa"}),e("option",{value:"Benue",children:"Benue"}),e("option",{value:"Borno",children:"Borno"}),e("option",{value:"Cross River",children:"Cross River"}),e("option",{value:"Delta",children:"Delta"}),e("option",{value:"Ebonyi",children:"Ebonyi"}),e("option",{value:"Edo",children:"Edo"}),e("option",{value:"Ekiti",children:"Ekiti"}),e("option",{value:"Enugu",children:"Enugu"}),e("option",{value:"Gombe",children:"Gombe"}),e("option",{value:"Imo",children:"Imo"}),e("option",{value:"Jigawa",children:"Jigawa"}),e("option",{value:"Kaduna",children:"Kaduna"}),e("option",{value:"Kano",children:"Kano"}),e("option",{value:"Katsina",children:"Katsina"}),e("option",{value:"Kebbi",children:"Kebbi"}),e("option",{value:"Kogi",children:"Kogi"}),e("option",{value:"Kwara",children:"Kwara"}),e("option",{value:"Lagos",children:"Lagos"}),e("option",{value:"Niger",children:"Niger"}),e("option",{value:"Ogun",children:"Ogun"}),e("option",{value:"Ondo",children:"Ondo"}),e("option",{value:"Osun",children:"Osun"}),e("option",{value:"Oyo",children:"Oyo"}),e("option",{value:"Plateau",children:"Plateau"}),e("option",{value:"Rivers",children:"Rivers"}),e("option",{value:"Sokoto",children:"Sokoto"}),e("option",{value:"Taraba",children:"Taraba"}),e("option",{value:"Yobe",children:"Yobe"}),e("option",{value:"Zamfara",children:"Zamfara"})]}),n.location&&e("div",{className:"text-danger",children:n.location})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["L.G.A ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"lga",className:"form-control",placeholder:"Enter L.G.A ",value:r.lga,onChange:l=>o("lga",l.target.value)}),n.lga&&e("div",{className:"text-danger",children:n.lga})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Street ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"street",className:"form-control",placeholder:"Enter Street",value:r.street,onChange:l=>o("street",l.target.value)}),n.street&&e("div",{className:"text-danger",children:n.street})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Brand ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"brand_id",id:"",className:"form-control",value:r.brand_id,onChange:l=>o("brand_id",l.target.value),children:[e("option",{value:"",children:"Select Brand"}),s.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.title},l.id))]}),n.brand_id&&e("div",{className:"text-danger",children:n.brand_id})]}),e("div",{className:"card-header py-3",children:e("h6",{className:"m-0 font-weight-bold text-primary",children:"User Details"})}),a("div",{className:"col-12 col-md-6 col-lg-4",children:[a("label",{className:"form-label",children:["User ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"user_id",id:"",className:"form-control",value:r.user_id,onChange:l=>o("user_id",l.target.value),children:[e("option",{value:"",children:"Select User"}),p.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.first_name},l.id))]}),n.user_id&&e("div",{className:"text-danger",children:n.user_id})]}),a("div",{className:"col-12 col-md-6 col-lg-4",children:[a("label",{className:"form-label",children:["Owner ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"trim",id:"",className:"form-control",value:r.trim,onChange:l=>o("trim",l.target.value),children:[e("option",{value:"",children:"Owner* "}),e("option",{value:"Direct owner",children:"Direct owner "}),e("option",{value:"Agent",children:"Agent "}),e("option",{value:"Sales",children:"Sales Representative. "})]}),n.trim&&e("div",{className:"text-danger",children:n.trim})]}),a("div",{className:"col-12 col-md-6 col-lg-4",children:[a("label",{className:"form-label",children:["How many owners before now*",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"no_owner",id:"",className:"form-control",value:r.no_owner,onChange:l=>o("no_owner",l.target.value),children:[e("option",{value:"None",children:"None"}),e("option",{value:"1",children:"1 "}),e("option",{value:"2",children:"2 "}),e("option",{value:"3",children:"3 "}),e("option",{value:"4",children:"4 "}),e("option",{value:"5",children:"5 "})]}),n.no_owner&&e("div",{className:"text-danger",children:n.no_owner})]}),e("div",{className:"card-header py-3",children:e("h6",{className:"m-0 font-weight-bold text-primary",children:"Car Details"})}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Category",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"categories_id",id:"",className:"form-control",value:r.categories_id,onChange:l=>o("categories_id",l.target.value),children:[e("option",{value:"",children:"Category"}),u.map(l=>e("option",{value:l.id,children:l.title}))]}),n.categories_id&&e("div",{className:"text-red-500",children:n.categories_id})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Special Feature ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"feature",id:"",className:"form-control",value:r.feature,onChange:l=>o("feature",l.target.value),children:[e("option",{value:"",children:" Feature"}),e("option",{value:"Thumb start",children:"Thumb start "}),e("option",{value:"Keyless entry ",children:" Keyless entry "}),e("option",{value:"GPS",children:"GPS "})]}),n.feature&&e("div",{className:"text-danger",children:n.feature})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Title ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter Title",value:r.title,onChange:l=>o("title",l.target.value)}),n.title&&e("div",{className:"text-danger",children:n.title})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"condition",id:"",className:"form-control",onChange:l=>o("condition",l.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition&&e("div",{className:"text-danger",children:n.condition})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Engine Capacity ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"engine_capacity",className:"form-control",placeholder:"Engine Capacity",value:r.engine_capacity,onChange:l=>o("engine_capacity",l.target.value)}),n.engine_capacity&&e("div",{className:"text-danger",children:n.engine_capacity})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Mileage ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"mileage",className:"form-control",placeholder:"Mileage",value:r.mileage,onChange:l=>o("mileage",l.target.value)}),n.mileage&&e("div",{className:"text-danger",children:n.mileage})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"price",className:"form-control",placeholder:"Price",value:r.price,onChange:l=>o("price",l.target.value)}),n.price&&e("div",{className:"text-danger",children:n.price})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fuel Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"fuel_type",id:"",className:"form-control",value:r.fuel_type,onChange:l=>o("fuel_type",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),n.fuel_type&&e("div",{className:"text-danger",children:n.fuel_type})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Model ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model",className:"form-control",placeholder:"Model",value:r.model,onChange:l=>o("model",l.target.value)}),n.model&&e("div",{className:"text-danger",children:n.model})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Transmission ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"transmission",id:"",className:"form-control",value:r.transmission,onChange:l=>o("transmission",l.target.value),children:[e("option",{value:"",children:"Transmission Type* "}),e("option",{value:"Automatic",children:"Automatic "}),e("option",{value:"Manual",children:"Manual "}),e("option",{value:"Auxiliary",children:"Auxiliary "})]}),n.transmission&&e("div",{className:"text-danger",children:n.transmission})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Drive Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"drive",id:"",className:"form-control",value:r.drive,onChange:l=>o("drive",l.target.value),children:[e("option",{value:"",children:"Drive Type* "}),e("option",{value:"Right Hand",children:"Right Hand "}),e("option",{value:"Left Hand",children:"Left Hand "}),n.drive&&e("div",{className:"text-danger",children:n.drive})]})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Interior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interior_color",className:"form-control",placeholder:"Interior Color",value:r.interior_color,onChange:l=>o("interior_color",l.target.value)}),n.interior_color&&e("div",{className:"text-danger",children:n.interior_color})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Exterior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"exterior_color",className:"form-control",placeholder:"Exterior Color",value:r.exterior_color,onChange:l=>o("exterior_color",l.target.value)}),n.exterior_color&&e("div",{className:"text-danger",children:n.exterior_color})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Body Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"body_type",id:"",className:"form-control",value:r.body_type,onChange:l=>o("body_type",l.target.value),children:[e("option",{value:"",children:"Body Type* "}),e("option",{value:"First Body",children:"First Body "}),e("option",{value:"Repainted",children:"Repainted "}),e("option",{value:"Painted",children:"Painted "})]}),n.body_type&&e("div",{className:"text-danger",children:n.body_type})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price Negoiable ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"price_negotiable",id:"",className:"form-control",value:r.price_negotiable,onChange:l=>o("price_negotiable",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.price_negotiable&&e("div",{className:"text-danger",children:n.price_negotiable})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Custom Paper ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"custom_paper",id:"",className:"form-control",value:r.custom_paper,onChange:l=>o("custom_paper",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.custom_paper&&e("div",{className:"text-danger",children:n.custom_paper})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Cylinder",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"cylinder",id:"",className:"form-control",value:r.cylinder,onChange:l=>o("cylinder",l.target.value),children:[e("option",{value:"",children:"Cylinder* "}),e("option",{value:"None",children:"None"}),e("option",{value:"3",children:"3 "}),e("option",{value:"4",children:"4 "}),e("option",{value:"6",children:"6 "}),e("option",{value:"8",children:"8 "}),e("option",{value:"12",children:"12 "})]}),n.cylinder&&e("div",{className:"text-danger",children:n.cylinder})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Year ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"year",className:"form-control",placeholder:"Year",value:r.year,onChange:l=>o("year",l.target.value)}),n.year&&e("div",{className:"text-danger",children:n.year})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Images ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"file",className:"form-control",name:"images",onChange:f,multiple:!0}),n.images&&e("div",{className:"text-danger",children:n.images})]}),a("div",{className:"col-md-12",children:[a("label",{className:"form-label",children:["Description ",e("span",{className:"text-danger",children:"*"})]}),e("textarea",{name:"description",className:"form-control",value:r.description,placeholder:"Enter Description",onChange:l=>o("description",l.target.value)}),n.description&&e("div",{className:"text-danger",children:n.description})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Purpose of Post( Swap / Sell)",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"type",id:"",className:"form-control",value:r.type,onChange:y,children:[e("option",{value:"",children:"Type* "}),e("option",{value:"sale",children:"Cash Sale"}),e("option",{value:"swap",children:"For Swap"})]}),n.type&&e("div",{className:"text-danger",children:n.type})]}),g&&e(m,{children:a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Is this a distress? Yes / No ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"distress",id:"",className:"form-control",value:r.distress,onChange:l=>o("distress",l.target.value),children:[e("option",{value:"",children:"Yes / No* "}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No "})]}),n.distress&&e("div",{className:"text-danger",children:n.distress})]})}),v&&a(m,{children:[a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Purpose ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"porpose",id:"",className:"form-control",value:r.porpose,onChange:l=>o("porpose",l.target.value),children:[e("option",{value:"",children:"Purpose of Swap* "}),e("option",{value:"Nigerian Used",children:"Upgrade for Better "}),e("option",{value:"Foreign Used",children:"Downgrade for cash "}),e("option",{value:"Foreign Used",children:"Car Model  "}),e("option",{value:"Foreign Used",children:"Change my Make "})]}),n.porpose&&e("div",{className:"text-danger",children:n.porpose})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fixed Engine ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"fixedengine",id:"",className:"form-control",value:r.fixedengine,onChange:l=>o("fixedengine",l.target.value),children:[e("option",{value:"",children:"Fixed Engine* "}),e("option",{value:"yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.fixedengine&&e("div",{className:"text-danger",children:n.fixedengine})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fixed Transmission ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"porpose",id:"",className:"form-control",value:r.fixedtrans,onChange:l=>o("fixedtrans",l.target.value),children:[e("option",{value:"",children:"Fixed Transmission* "}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.fixedtrans&&e("div",{className:"text-danger",children:n.fixedtrans})]}),e("h2",{className:"h4 mb-2 text-gray-800",children:"My Swap car Option:"}),e("p",{className:"h6 mb-2 text-gray-800",children:"Car 1:"}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Choose Make",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title1",className:"form-control",placeholder:"Choose Make",value:r.title1,onChange:l=>o("title1",l.target.value)}),n.title1&&e("div",{className:"text-danger",children:n.title1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Model",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model1",className:"form-control",placeholder:"Model",value:r.model1,onChange:l=>o("model1",l.target.value)}),n.model1&&e("div",{className:"text-danger",children:n.model1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Year",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"year1",className:"form-control",placeholder:"Year",value:r.year1,onChange:l=>o("year1",l.target.value)}),n.year1&&e("div",{className:"text-danger",children:n.year1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Interior Color",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interiorColor1",className:"form-control",placeholder:"Interior Color",value:r.interiorColor1,onChange:l=>o("interiorColor1",l.target.value)}),n.interiorColor1&&e("div",{className:"text-danger",children:n.interiorColor1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"condition1",id:"",className:"form-control",value:r.condition1,onChange:l=>o("condition1",l.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition1&&e("div",{className:"text-danger",children:n.condition1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Mileage Max",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"milage1",className:"form-control",placeholder:"Mileage Max",value:r.milage1,onChange:l=>o("milage1",l.target.value)}),n.milage1&&e("div",{className:"text-danger",children:n.milage1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Brand ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"brand1",id:"",className:"form-control",value:r.brand1,onChange:l=>o("brand1",l.target.value),children:[e("option",{value:"",children:"Select Brand"}),s.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.title},l.id))]}),n.brand1&&e("div",{className:"text-danger",children:n.brand1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fuel Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"fuelType1",id:"",className:"form-control",value:r.fuelType1,onChange:l=>o("fuelType1",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),n.fuelType1&&e("div",{className:"text-danger",children:n.fuelType1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Transmission ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"transmission1",id:"",className:"form-control",value:r.transmission1,onChange:l=>o("transmission1",l.target.value),children:[e("option",{value:"",children:"Transmission Type* "}),e("option",{value:"Automatic",children:"Automatic "}),e("option",{value:"Manual",children:"Manual "}),e("option",{value:"Auxiliary",children:"Auxiliary "})]}),n.transmission1&&e("div",{className:"text-danger",children:n.transmission1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Exterior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"exteriorColor1",className:"form-control",placeholder:"Exterior Color",value:r.exteriorColor1,onChange:l=>o("exteriorColor1",l.target.value)}),n.exteriorColor1&&e("div",{className:"text-danger",children:n.exteriorColor1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"price1",className:"form-control",placeholder:"Price",value:r.price1,onChange:l=>o("price1",l.target.value)}),n.price1&&e("div",{className:"text-danger",children:n.price1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Cylinder",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"cylinder1",id:"",className:"form-control",value:r.cylinder1,onChange:l=>o("cylinder1",l.target.value),children:[e("option",{value:"",children:"Cylinder* "}),e("option",{value:"None",children:"None"}),e("option",{value:"3",children:"3 "}),e("option",{value:"4",children:"4 "}),e("option",{value:"6",children:"6 "}),e("option",{value:"8",children:"8 "}),e("option",{value:"12",children:"12 "})]}),n.cylinder1&&e("div",{className:"text-danger",children:n.cylinder1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Custom Paper ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"custom_paper1",id:"",className:"form-control",value:r.custom_paper1,onChange:l=>o("custom_paper1",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.custom_paper1&&e("div",{className:"text-danger",children:n.custom_paper1})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Special Feature ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"feature1",id:"",className:"form-control",value:r.feature1,onChange:l=>o("feature1",l.target.value),children:[e("option",{value:"",children:" Feature"}),e("option",{value:"Automatic",children:"Thumb start "}),e("option",{value:"Manual",children:" Keyless entry "}),e("option",{value:"Auxiliary",children:"GPS "})]}),n.feature1&&e("div",{className:"text-danger",children:n.feature1})]}),e("p",{className:"h6 mb-2 text-gray-800",children:"Car 2:"}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Choose Make",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title2",className:"form-control",placeholder:"Choose Make",value:r.title2,onChange:l=>o("title2",l.target.value)}),n.title2&&e("div",{className:"text-danger",children:n.title2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Model",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model2",className:"form-control",placeholder:"Model",value:r.model2,onChange:l=>o("model2",l.target.value)}),n.model2&&e("div",{className:"text-danger",children:n.model2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Year",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"year2",className:"form-control",placeholder:"Year",value:r.year2,onChange:l=>o("year2",l.target.value)}),n.year2&&e("div",{className:"text-danger",children:n.year2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Interior Color",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interiorColor2",className:"form-control",placeholder:"Interior Color",value:r.interiorColor2,onChange:l=>o("interiorColor2",l.target.value)}),n.interiorColor2&&e("div",{className:"text-danger",children:n.interiorColor2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"condition2",id:"",className:"form-control",value:r.condition2,onChange:l=>o("condition2",l.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition2&&e("div",{className:"text-danger",children:n.condition2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:[" Mileage Max",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"milage2",className:"form-control",placeholder:" Mileage Max",value:r.milage2,onChange:l=>o("milage2",l.target.value)}),n.milage2&&e("div",{className:"text-danger",children:n.milage2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Brand ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"brand2",id:"",className:"form-control",value:r.brand2,onChange:l=>o("brand2",l.target.value),children:[e("option",{value:"",children:"Select Brand"}),s.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.title},l.id))]}),n.brand2&&e("div",{className:"text-danger",children:n.brand2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fuel Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"fuelType2",id:"",className:"form-control",value:r.fuelType2,onChange:l=>o("fuelType2",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),n.fuelType2&&e("div",{className:"text-danger",children:n.fuelType2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Transmission ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"transmission2",id:"",className:"form-control",value:r.transmission2,onChange:l=>o("transmission2",l.target.value),children:[e("option",{value:"",children:"Transmission Type* "}),e("option",{value:"Automatic",children:"Automatic "}),e("option",{value:"Manual",children:"Manual "}),e("option",{value:"Auxiliary",children:"Auxiliary "})]}),n.transmission2&&e("div",{className:"text-danger",children:n.transmission2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Exterior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"exteriorColor2",className:"form-control",placeholder:"Exterior Color",value:r.exteriorColor2,onChange:l=>o("exteriorColor2",l.target.value)}),n.exteriorColor2&&e("div",{className:"text-danger",children:n.exteriorColor2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"price2",className:"form-control",placeholder:"Price",value:r.price2,onChange:l=>o("price2",l.target.value)}),n.price2&&e("div",{className:"text-danger",children:n.price2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Cylinder",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"cylinder2",id:"",className:"form-control",value:r.cylinder2,onChange:l=>o("cylinder2",l.target.value),children:[e("option",{value:"",children:"Cylinder* "}),e("option",{value:"None",children:"None"}),e("option",{value:"3",children:"3 "}),e("option",{value:"4",children:"4 "}),e("option",{value:"6",children:"6 "}),e("option",{value:"8",children:"8 "}),e("option",{value:"12",children:"12 "})]}),n.cylinder2&&e("div",{className:"text-danger",children:n.cylinder2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Custom Paper ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"custom_paper2",id:"",className:"form-control",value:r.custom_paper2,onChange:l=>o("custom_paper2",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.custom_paper2&&e("div",{className:"text-danger",children:n.custom_paper2})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Special Feature ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"feature2",id:"",className:"form-control",value:r.feature2,onChange:l=>o("feature2",l.target.value),children:[e("option",{value:"",children:" Feature"}),e("option",{value:"Automatic",children:"Thumb start "}),e("option",{value:"Manual",children:" Keyless entry "}),e("option",{value:"Auxiliary",children:"GPS "})]}),n.feature2&&e("div",{className:"text-danger",children:n.feature2})]})]}),e("div",{className:"col-12",children:e("button",{type:"submit",className:"btn btn-primary",children:"Add"})})]})})]})]})]})};T.layout=h=>e(_,{children:h});export{T as default};