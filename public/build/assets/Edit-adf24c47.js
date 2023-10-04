import{r as d,W as v,j as a,F as u,a as e,b as N}from"./app-6a3cd5d8.js";import{L as b}from"./Layout-ef466482.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./index-13f29e3e.js";const y=({auth:c,brands:s,car:i,users:m})=>{d.useState(!1);const{data:r,errors:n,setData:o,post:h,progress:t}=v({title:i.title,brand_id:i.brand_id,user_id:i.user_id,condition:i.condition,engine_capacity:i.engine_capacity,mileage:i.mileage,type:i.type,trim:i.trim,location:i.location,price:i.price,fuel_type:i.fuel_type,model:i.model,transmission:i.transmission,drive:i.drive,interior_color:i.interior_color,exterior_color:i.exterior_color,description:i.description,lga:i.lga,street:i.street,body_type:i.body_type,price_negotiable:i.price_negotiable,custom_paper:i.custom_paper,cylinder:i.cylinder,year:i.year,images:i.images||"",_method:"put"});d.useState(null);const p=l=>{l.target.files&&o("images",l.target.files)};function g(l){l.preventDefault(),h(route("admin.cars.update",i.id))}return a(u,{children:[e(N,{title:"Edit Car"}),a("div",{className:"container-fluid",children:[e("h1",{className:"h3 mb-2 text-gray-800",children:"Car"}),a("div",{className:"card shadow mb-4",children:[a("div",{className:"card-header py-3",children:[e("h6",{className:"m-0 font-weight-bold text-primary",children:"Edit Car"}),t&&a("progress",{value:t.percentage,max:"100",children:[t.percentage,"%"]})]}),e("div",{className:"card-body",children:a("form",{className:"row g-3",method:"post",onSubmit:g,encType:"multipart/form-data",children:[a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Location",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"location",id:"",className:"form-control",onChange:l=>o("location",l.target.value),children:[e("option",{value:"",children:"Select State"}),e("option",{value:"Abia",children:"Abia"}),e("option",{value:"Abuja",children:"Abuja"}),e("option",{value:"Adamawa",children:"Adamawa"}),e("option",{value:"Akwa Ibom",children:"Akwa Ibom"}),e("option",{value:"Anambra",children:"Anambra"}),e("option",{value:"Bauchi",children:"Bauchi"}),e("option",{value:"Bayelsa",children:"Bayelsa"}),e("option",{value:"Benue",children:"Benue"}),e("option",{value:"Borno",children:"Borno"}),e("option",{value:"Cross River",children:"Cross River"}),e("option",{value:"Delta",children:"Delta"}),e("option",{value:"Ebonyi",children:"Ebonyi"}),e("option",{value:"Edo",children:"Edo"}),e("option",{value:"Ekiti",children:"Ekiti"}),e("option",{value:"Enugu",children:"Enugu"}),e("option",{value:"Gombe",children:"Gombe"}),e("option",{value:"Imo",children:"Imo"}),e("option",{value:"Jigawa",children:"Jigawa"}),e("option",{value:"Kaduna",children:"Kaduna"}),e("option",{value:"Kano",children:"Kano"}),e("option",{value:"Katsina",children:"Katsina"}),e("option",{value:"Kebbi",children:"Kebbi"}),e("option",{value:"Kogi",children:"Kogi"}),e("option",{value:"Kwara",children:"Kwara"}),e("option",{value:"Lagos",children:"Lagos"}),e("option",{value:"Niger",children:"Niger"}),e("option",{value:"Ogun",children:"Ogun"}),e("option",{value:"Ondo",children:"Ondo"}),e("option",{value:"Osun",children:"Osun"}),e("option",{value:"Oyo",children:"Oyo"}),e("option",{value:"Plateau",children:"Plateau"}),e("option",{value:"Rivers",children:"Rivers"}),e("option",{value:"Sokoto",children:"Sokoto"}),e("option",{value:"Taraba",children:"Taraba"}),e("option",{value:"Yobe",children:"Yobe"}),e("option",{value:"Zamfara",children:"Zamfara"})]}),n.location&&e("div",{className:"text-danger",children:n.location})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["User ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"user_id",id:"",className:"form-control",onChange:l=>o("user_id",l.target.value),children:[e("option",{value:"",children:"Select User"}),m.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.first_name},l.id))]}),n.brand_id&&e("div",{className:"text-danger",children:n.brand_id})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Brand ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"brand_id",id:"",className:"form-control",onChange:l=>o("brand_id",l.target.value),children:[e("option",{value:"",children:"Select Brand"}),s.map(l=>e("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.title},l.id))]}),n.brand_id&&e("div",{className:"text-danger",children:n.brand_id})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Street ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"street",className:"form-control",placeholder:"Enter Street",value:r.street,onChange:l=>o("street",l.target.value)}),n.street&&e("div",{className:"text-danger",children:n.street})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["L.G.A ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"lga",className:"form-control",placeholder:"Enter L.G.A ",value:r.lga,onChange:l=>o("lga",l.target.value)}),n.lga&&e("div",{className:"text-danger",children:n.lga})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Title ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter Title",value:r.title,onChange:l=>o("title",l.target.value)}),n.title&&e("div",{className:"text-danger",children:n.title})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"condition",id:"",className:"form-control",onChange:l=>o("condition",l.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition&&e("div",{className:"text-danger",children:n.condition})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Engine Capacity ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"engine_capacity",className:"form-control",placeholder:"Engine Capacity",value:r.engine_capacity,onChange:l=>o("engine_capacity",l.target.value)}),n.engine_capacity&&e("div",{className:"text-danger",children:n.engine_capacity})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Mileage ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"mileage",className:"form-control",placeholder:"Mileage",value:r.mileage,onChange:l=>o("mileage",l.target.value)}),n.mileage&&e("div",{className:"text-danger",children:n.mileage})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"price",className:"form-control",placeholder:"Price",value:r.price,onChange:l=>o("price",l.target.value)}),n.price&&e("div",{className:"text-danger",children:n.price})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Owner ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"trim",id:"",className:"form-control",onChange:l=>o("trim",l.target.value),children:[e("option",{value:"",children:"Owner* "}),e("option",{value:"Direct owner",children:"Direct owner "}),e("option",{value:"Agent",children:"Agent "})]}),n.trim&&e("div",{className:"text-danger",children:n.trim})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Fuel Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"fuel_type",id:"",className:"form-control",value:r.fuel_type,onChange:l=>o("fuel_type",l.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),n.fuel_type&&e("div",{className:"text-danger",children:n.fuel_type})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Model ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model",className:"form-control",placeholder:"Model",value:r.model,onChange:l=>o("model",l.target.value)}),n.model&&e("div",{className:"text-danger",children:n.model})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Transmission ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"transmission",className:"form-control",placeholder:"Transmission",value:r.transmission,onChange:l=>o("transmission",l.target.value)}),n.transmission&&e("div",{className:"text-danger",children:n.transmission})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Drive Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"drive",id:"",className:"form-control",value:r.drive,onChange:l=>o("drive",l.target.value),children:[e("option",{value:"",children:"Drive Type* "}),e("option",{value:"Right Hand",children:"Right Hand "}),e("option",{value:"Left Hand",children:"Left Hand "}),n.drive&&e("div",{className:"text-danger",children:n.drive})]})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Interior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interior_color",className:"form-control",placeholder:"Interior Color",value:r.interior_color,onChange:l=>o("interior_color",l.target.value)}),n.interior_color&&e("div",{className:"text-danger",children:n.interior_color})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Exterior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"exterior_color",className:"form-control",placeholder:"Exterior Color",value:r.exterior_color,onChange:l=>o("exterior_color",l.target.value)}),n.exterior_color&&e("div",{className:"text-danger",children:n.exterior_color})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Body Type ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"body_type",id:"",className:"form-control",value:r.body_type,onChange:l=>o("body_type",l.target.value),children:[e("option",{value:"",children:"Body Type* "}),e("option",{value:"First Body",children:"First Body "}),e("option",{value:"Repainted",children:"Repainted "}),e("option",{value:"Painted",children:"Painted "})]}),n.body_type&&e("div",{className:"text-danger",children:n.body_type})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Price Negoiable ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"price_negotiable",id:"",className:"form-control",value:r.price_negotiable,onChange:l=>o("price_negotiable",l.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.price_negotiable&&e("div",{className:"text-danger",children:n.price_negotiable})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Custom Paper ",e("span",{className:"text-danger",children:"*"})]}),a("select",{name:"custom_paper",id:"",className:"form-control",value:r.custom_paper,onChange:l=>o("custom_paper",l.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.custom_paper&&e("div",{className:"text-danger",children:n.custom_paper})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Cylinder ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"cylinder",className:"form-control",placeholder:"Cylinder",value:r.cylinder,onChange:l=>o("cylinder",l.target.value)}),n.cylinder&&e("div",{className:"text-danger",children:n.cylinder})]}),a("div",{className:"col-12 col-md-6 col-lg-3",children:[a("label",{className:"form-label",children:["Year ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"cylinder",className:"form-control",placeholder:"Year",value:r.year,onChange:l=>o("year",l.target.value)}),n.year&&e("div",{className:"text-danger",children:n.year})]}),a("div",{className:"col-md-6",children:[a("div",{className:"mb-3",children:[" ",e("img",{src:"/storage"+r.images,alt:"",className:"img-thumbnail",style:{width:"100px",height:"100px"}})]}),e("input",{type:"file",name:"images",className:"form-control",id:"",onChange:p})]}),a("div",{className:"col-md-12",children:[a("label",{className:"form-label",children:["Description ",e("span",{className:"text-danger",children:"*"})]}),e("textarea",{name:"description",className:"form-control",value:r.description,placeholder:"Enter Description",onChange:l=>o("description",l.target.value)}),n.description&&e("div",{className:"text-danger",children:n.description})]}),e("div",{className:"col-12",children:e("button",{type:"submit",className:"btn btn-primary",children:"Add"})})]})})]})]})]})};y.layout=c=>e(b,{children:c});export{y as default};
