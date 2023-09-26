import{r as d,W as v,j as l,F as u,a as e,b as N}from"./app-c517550d.js";import{L as x}from"./Layout-b6534108.js";import"./user-icon-4fd58570.js";import"./headerlogo-80979cd7.js";import"./index-57c06e5f.js";const b=({auth:c,brands:s,car:i,users:m})=>{d.useState(!1);const{data:r,errors:n,setData:o,post:h,progress:t}=v({title:i.title,brand_id:i.brand_id,user_id:i.user_id,condition:i.condition,engine_capacity:i.engine_capacity,mileage:i.mileage,type:i.type,trim:i.trim,location:i.location,price:i.price,fuel_type:i.fuel_type,model:i.model,transmission:i.transmission,drive:i.drive,interior_color:i.interior_color,exterior_color:i.exterior_color,description:i.description,lga:i.lga,street:i.street,body_type:i.body_type,price_negotiable:i.price_negotiable,custom_paper:i.custom_paper,cylinder:i.cylinder,year:i.year,porpose:i.porpose,fixedengine:i.fixedengine,fixedtrans:i.fixedtrans,title1:i.title1,model1:i.model1,year1:i.year1,condition1:i.condition1,interiorColor1:i.interiorColor1,milage1:i.milage1,title2:i.title2,model2:i.model2,year2:i.year2,condition2:i.condition2,interiorColor2:i.interiorColor2,milage2:i.milage2,images:i.images||"",_method:"put"});d.useState(null);const p=a=>{a.target.files&&o("images",a.target.files)};function g(a){a.preventDefault(),h(route("admin.swap.update",i.id))}return l(u,{children:[e(N,{title:"Edit Car"}),l("div",{className:"container-fluid",children:[e("h1",{className:"h3 mb-2 text-gray-800",children:"Car"}),l("div",{className:"card shadow mb-4",children:[l("div",{className:"card-header py-3",children:[e("h6",{className:"m-0 font-weight-bold text-primary",children:"Edit Swap Car"}),t&&l("progress",{value:t.percentage,max:"100",children:[t.percentage,"%"]})]}),e("div",{className:"card-body",children:l("form",{className:"row g-3",method:"post",onSubmit:g,encType:"multipart/form-data",children:[l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Location",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"location",id:"",className:"form-control",onChange:a=>o("location",a.target.value),children:[e("option",{value:"",children:"Select State"}),e("option",{value:"Abia",children:"Abia"}),e("option",{value:"Abuja",children:"Abuja"}),e("option",{value:"Adamawa",children:"Adamawa"}),e("option",{value:"Akwa Ibom",children:"Akwa Ibom"}),e("option",{value:"Anambra",children:"Anambra"}),e("option",{value:"Bauchi",children:"Bauchi"}),e("option",{value:"Bayelsa",children:"Bayelsa"}),e("option",{value:"Benue",children:"Benue"}),e("option",{value:"Borno",children:"Borno"}),e("option",{value:"Cross River",children:"Cross River"}),e("option",{value:"Delta",children:"Delta"}),e("option",{value:"Ebonyi",children:"Ebonyi"}),e("option",{value:"Edo",children:"Edo"}),e("option",{value:"Ekiti",children:"Ekiti"}),e("option",{value:"Enugu",children:"Enugu"}),e("option",{value:"Gombe",children:"Gombe"}),e("option",{value:"Imo",children:"Imo"}),e("option",{value:"Jigawa",children:"Jigawa"}),e("option",{value:"Kaduna",children:"Kaduna"}),e("option",{value:"Kano",children:"Kano"}),e("option",{value:"Katsina",children:"Katsina"}),e("option",{value:"Kebbi",children:"Kebbi"}),e("option",{value:"Kogi",children:"Kogi"}),e("option",{value:"Kwara",children:"Kwara"}),e("option",{value:"Lagos",children:"Lagos"}),e("option",{value:"Niger",children:"Niger"}),e("option",{value:"Ogun",children:"Ogun"}),e("option",{value:"Ondo",children:"Ondo"}),e("option",{value:"Osun",children:"Osun"}),e("option",{value:"Oyo",children:"Oyo"}),e("option",{value:"Plateau",children:"Plateau"}),e("option",{value:"Rivers",children:"Rivers"}),e("option",{value:"Sokoto",children:"Sokoto"}),e("option",{value:"Taraba",children:"Taraba"}),e("option",{value:"Yobe",children:"Yobe"}),e("option",{value:"Zamfara",children:"Zamfara"})]}),n.location&&e("div",{className:"text-danger",children:n.location})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["User ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"user_id",id:"",className:"form-control",onChange:a=>o("user_id",a.target.value),children:[e("option",{value:"",children:"Select User"}),m.map(a=>e("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.first_name},a.id))]}),n.brand_id&&e("div",{className:"text-danger",children:n.brand_id})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Brand ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"brand_id",id:"",className:"form-control",onChange:a=>o("brand_id",a.target.value),children:[e("option",{value:"",children:"Select Brand"}),s.map(a=>e("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.title},a.id))]}),n.brand_id&&e("div",{className:"text-danger",children:n.brand_id})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Street ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"street",className:"form-control",placeholder:"Enter Street",value:r.street,onChange:a=>o("street",a.target.value)}),n.street&&e("div",{className:"text-danger",children:n.street})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["L.G.A ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"lga",className:"form-control",placeholder:"Enter L.G.A ",value:r.lga,onChange:a=>o("lga",a.target.value)}),n.lga&&e("div",{className:"text-danger",children:n.lga})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Title ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title",className:"form-control",placeholder:"Enter Title",value:r.title,onChange:a=>o("title",a.target.value)}),n.title&&e("div",{className:"text-danger",children:n.title})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"condition",id:"",className:"form-control",onChange:a=>o("condition",a.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition&&e("div",{className:"text-danger",children:n.condition})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Engine Capacity ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"engine_capacity",className:"form-control",placeholder:"Engine Capacity",value:r.engine_capacity,onChange:a=>o("engine_capacity",a.target.value)}),n.engine_capacity&&e("div",{className:"text-danger",children:n.engine_capacity})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Mileage ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"mileage",className:"form-control",placeholder:"Mileage",value:r.mileage,onChange:a=>o("mileage",a.target.value)}),n.mileage&&e("div",{className:"text-danger",children:n.mileage})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Price ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"price",className:"form-control",placeholder:"Price",value:r.price,onChange:a=>o("price",a.target.value)}),n.price&&e("div",{className:"text-danger",children:n.price})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Owner ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"trim",id:"",className:"form-control",onChange:a=>o("trim",a.target.value),children:[e("option",{value:"",children:"Owner* "}),e("option",{value:"Direct owner",children:"Direct owner "}),e("option",{value:"Agent",children:"Agent "})]}),n.trim&&e("div",{className:"text-danger",children:n.trim})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Fuel Type ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"fuel_type",id:"",className:"form-control",value:r.fuel_type,onChange:a=>o("fuel_type",a.target.value),children:[e("option",{value:"",children:"Select Fuel Type"}),e("option",{value:"Desiel",children:"Desiel"}),e("option",{value:"Petrol",children:"Petrol"})]}),n.fuel_type&&e("div",{className:"text-danger",children:n.fuel_type})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Model ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model",className:"form-control",placeholder:"Model",value:r.model,onChange:a=>o("model",a.target.value)}),n.model&&e("div",{className:"text-danger",children:n.model})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Transmission ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"transmission",className:"form-control",placeholder:"Transmission",value:r.transmission,onChange:a=>o("transmission",a.target.value)}),n.transmission&&e("div",{className:"text-danger",children:n.transmission})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Drive Type ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"drive",id:"",className:"form-control",value:r.drive,onChange:a=>o("drive",a.target.value),children:[e("option",{value:"",children:"Drive Type* "}),e("option",{value:"Right Hand",children:"Right Hand "}),e("option",{value:"Left Hand",children:"Left Hand "}),n.drive&&e("div",{className:"text-danger",children:n.drive})]})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Interior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interior_color",className:"form-control",placeholder:"Interior Color",value:r.interior_color,onChange:a=>o("interior_color",a.target.value)}),n.interior_color&&e("div",{className:"text-danger",children:n.interior_color})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Exterior Color ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"exterior_color",className:"form-control",placeholder:"Exterior Color",value:r.exterior_color,onChange:a=>o("exterior_color",a.target.value)}),n.exterior_color&&e("div",{className:"text-danger",children:n.exterior_color})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Body Type ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"body_type",id:"",className:"form-control",value:r.body_type,onChange:a=>o("body_type",a.target.value),children:[e("option",{value:"",children:"Body Type* "}),e("option",{value:"First Body",children:"First Body "}),e("option",{value:"Repainted",children:"Repainted "}),e("option",{value:"Painted",children:"Painted "})]}),n.body_type&&e("div",{className:"text-danger",children:n.body_type})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Price Negoiable ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"price_negotiable",id:"",className:"form-control",value:r.price_negotiable,onChange:a=>o("price_negotiable",a.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.price_negotiable&&e("div",{className:"text-danger",children:n.price_negotiable})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Custom Paper ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"custom_paper",id:"",className:"form-control",value:r.custom_paper,onChange:a=>o("custom_paper",a.target.value),children:[e("option",{value:"",children:"Select Type"}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.custom_paper&&e("div",{className:"text-danger",children:n.custom_paper})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Cylinder ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"cylinder",className:"form-control",placeholder:"Cylinder",value:r.cylinder,onChange:a=>o("cylinder",a.target.value)}),n.cylinder&&e("div",{className:"text-danger",children:n.cylinder})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Year ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"year",className:"form-control",placeholder:"Year",value:r.year,onChange:a=>o("year",a.target.value)}),n.year&&e("div",{className:"text-danger",children:n.year})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Purpose ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"porpose",id:"",className:"form-control",value:r.porpose,onChange:a=>o("porpose",a.target.value),children:[e("option",{value:"",children:"Purpose of Swap* "}),e("option",{value:"Nigerian Used",children:"Upgrade for Better "}),e("option",{value:"Foreign Used",children:"Downgrade for cash "}),e("option",{value:"Foreign Used",children:"Car Model  "}),e("option",{value:"Foreign Used",children:"Change my Make "})]}),n.porpose&&e("div",{className:"text-danger",children:n.porpose})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Fixed Engine ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"fixedengine",id:"",className:"form-control",value:r.fixedengine,onChange:a=>o("fixedengine",a.target.value),children:[e("option",{value:"",children:"Fixed Engine* "}),e("option",{value:"yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.fixedengine&&e("div",{className:"text-danger",children:n.fixedengine})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Fixed Transmission ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"porpose",id:"",className:"form-control",value:r.fixedtrans,onChange:a=>o("fixedtrans",a.target.value),children:[e("option",{value:"",children:"Fixed Transmission* "}),e("option",{value:"Yes",children:"Yes"}),e("option",{value:"No",children:"No"})]}),n.fixedtrans&&e("div",{className:"text-danger",children:n.fixedtrans})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Images ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"file",className:"form-control",name:"images",onChange:p,multiple:!0}),n.images&&e("div",{className:"text-danger",children:n.images})]}),l("div",{className:"col-md-12",children:[l("label",{className:"form-label",children:["Description ",e("span",{className:"text-danger",children:"*"})]}),e("textarea",{name:"description",className:"form-control",value:r.description,placeholder:"Enter Description",onChange:a=>o("description",a.target.value)}),n.description&&e("div",{className:"text-danger",children:n.description})]}),e("h2",{className:"h4 mb-2 text-gray-800",children:"My Swap car Option:"}),e("p",{className:"h6 mb-2 text-gray-800",children:"Car 1:"}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Choose Make",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title1",className:"form-control",placeholder:"Choose Make",value:r.title1,onChange:a=>o("title1",a.target.value)}),n.title1&&e("div",{className:"text-danger",children:n.title1})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Model",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model1",className:"form-control",placeholder:"Model",value:r.model1,onChange:a=>o("model1",a.target.value)}),n.model1&&e("div",{className:"text-danger",children:n.model1})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Year",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"year1",className:"form-control",placeholder:"Year",value:r.year1,onChange:a=>o("year1",a.target.value)}),n.year1&&e("div",{className:"text-danger",children:n.year1})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Interior Color",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interiorColor1",className:"form-control",placeholder:"Interior Color",value:r.interiorColor1,onChange:a=>o("interiorColor1",a.target.value)}),n.interiorColor1&&e("div",{className:"text-danger",children:n.interiorColor1})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"condition1",id:"",className:"form-control",value:r.condition1,onChange:a=>o("condition1",a.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition1&&e("div",{className:"text-danger",children:n.condition1})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Mileage Max",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"milage1",className:"form-control",placeholder:"Mileage Max",value:r.milage1,onChange:a=>o("milage1",a.target.value)}),n.milage1&&e("div",{className:"text-danger",children:n.milage1})]}),e("p",{className:"h6 mb-2 text-gray-800",children:"Car 2:"}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Choose Make",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"title2",className:"form-control",placeholder:"Choose Make",value:r.title2,onChange:a=>o("title2",a.target.value)}),n.title2&&e("div",{className:"text-danger",children:n.title2})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Model",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"model2",className:"form-control",placeholder:"Model",value:r.model2,onChange:a=>o("model2",a.target.value)}),n.model2&&e("div",{className:"text-danger",children:n.model2})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Year",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"year2",className:"form-control",placeholder:"Year",value:r.year2,onChange:a=>o("year2",a.target.value)}),n.year2&&e("div",{className:"text-danger",children:n.year2})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Interior Color",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",name:"interiorColor2",className:"form-control",placeholder:"Interior Color",value:r.interiorColor2,onChange:a=>o("interiorColor2",a.target.value)}),n.interiorColor2&&e("div",{className:"text-danger",children:n.interiorColor2})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:["Condition ",e("span",{className:"text-danger",children:"*"})]}),l("select",{name:"condition2",id:"",className:"form-control",value:r.condition2,onChange:a=>o("condition2",a.target.value),children:[e("option",{value:"",children:"Select Condition"}),e("option",{value:"Brand New",children:"Brand New"}),e("option",{value:"Used",children:"Used"})]}),n.condition2&&e("div",{className:"text-danger",children:n.condition2})]}),l("div",{className:"col-12 col-md-6 col-lg-3",children:[l("label",{className:"form-label",children:[" Mileage Max",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"number",name:"milage2",className:"form-control",placeholder:" Mileage Max",value:r.milage2,onChange:a=>o("milage2",a.target.value)}),n.milage2&&e("div",{className:"text-danger",children:n.milage2})]}),e("div",{className:"col-12",children:e("button",{type:"submit",className:"btn btn-primary",children:"Add"})})]})})]})]})]})};b.layout=c=>e(x,{children:c});export{b as default};
