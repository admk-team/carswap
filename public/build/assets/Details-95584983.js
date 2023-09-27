import{j as i,F as r,a as e,b as h}from"./app-def415a6.js";import{L as o}from"./Layout-53554848.js";import{U as n}from"./user-icon-4fd58570.js";/* empty css                    */import"./headerlogo-80979cd7.js";import"./index-8dfc36b9.js";const c=({auth:t,payment:d,car:a,user:l})=>i(r,{children:[e(h,{title:"Edit Car"}),i("div",{className:"container-fluid",children:[e("h1",{className:"h4 mb-2 text-gray-800",children:"User"}),e("div",{className:"card shadow mb-4",children:e("div",{className:"card-body",children:e("div",{className:"table-responsive",children:i("table",{className:"table",children:[e("thead",{children:i("tr",{children:[e("th",{children:"First Name"}),e("th",{children:"Last Name"}),e("th",{children:"Email"}),e("th",{children:"Phone No"}),e("th",{children:"City"}),e("th",{children:"State"}),e("th",{children:"Address"}),e("th",{children:"User Image"})]})}),e("tbody",{children:i("tr",{children:[e("td",{children:l.first_name?l.first_name:"No user data available"}),e("td",{children:l.last_name?l.last_name:"No user data available"}),e("td",{children:l.email?l.email:"No user data available"}),e("td",{children:l.phone_no?l.phone_no:"No user data available"}),e("td",{children:l.city?l.city:"No user data available"}),e("td",{children:l.state?l.state:"No user data available"}),e("td",{children:l.address?l.address:"No user data available"}),e("td",{children:e("img",{src:l&&l.image?"/storage/"+l.image:n,alt:"Profile",className:"w-10 h-10 rounded-full"})})]},l.id)})]})})})}),e("h1",{className:"h4 mb-2 text-gray-800",children:"Car"}),e("div",{className:"card shadow mb-4",children:e("div",{className:"card-body",children:e("div",{className:"table-responsive",children:i("table",{className:"table",children:[e("thead",{children:i("tr",{children:[e("th",{children:"Location"}),e("th",{children:"Street"}),e("th",{children:"L.G.A"}),e("th",{children:"Title"}),e("th",{children:"Condition"}),e("th",{children:"Engine"}),e("th",{children:"Milage"}),e("th",{children:"Price"}),e("th",{children:"Fuel Type"}),e("th",{children:"Modal"}),e("th",{children:"Transmission"}),e("th",{children:"Extrior Color"}),e("th",{children:"Interior Color"}),e("th",{children:"Drive"}),e("th",{children:"Cylinder"}),e("th",{children:"Body Type"}),e("th",{children:"Price Negotiable"}),e("th",{children:"Custom Paper"}),e("th",{children:"Year"}),e("th",{children:"Description"}),e("th",{children:"Car Images"})]})}),e("tbody",{children:i("tr",{children:[e("td",{children:a.location?a.location:"No data available"}),e("td",{children:a.street?a.street:"No data available"}),e("td",{children:a.lga?a.lga:"No data available"}),e("td",{children:a.title?a.title:"No data available"}),e("td",{children:a.condition?a.condition:"No data available"}),e("td",{children:a.engine_capacity?a.engine_capacity:"No data available"}),e("td",{children:a.mileage?a.mileage:"No data available"}),e("td",{children:a.price?a.price:"No data available"}),e("td",{children:a.fuel_type?a.fuel_type:"No data available"}),e("td",{children:a.model?a.model:"No data available"}),e("td",{children:a.transmission?a.transmission:"No data available"}),e("td",{children:a.exterior_color?a.exterior_color:"No data available"}),e("td",{children:a.interior_color?a.interior_color:"No data available"}),e("td",{children:a.drive?a.drive:"No data available"}),e("td",{children:a.cylinder?a.cylinder:"No data available"}),e("td",{children:a.body_type?a.body_type:"No data available"}),e("td",{children:a.price_negotiable?a.price_negotiable:"No data available"}),e("td",{children:a.custom_paper?a.custom_paper:"No data available"}),e("td",{children:a.year?a.year:"No data available"}),e("td",{children:a.description?a.description:"No data available"}),e("td",{children:e("img",{src:a&&a.images?"/storage/"+a.images[0]:n,alt:"Profile",className:"w-10 h-10 "})})]},a.id)})]})})})}),e("h1",{className:"h4 mb-2 text-gray-800",children:"Payment"}),e("div",{className:"card shadow mb-4",children:e("div",{className:"card-body",children:e("div",{className:"table-responsive",children:i("table",{className:"table",children:[e("thead",{children:i("tr",{children:[e("th",{children:"Amount"}),e("th",{children:"Response Code"}),e("th",{children:"Response Message"}),e("th",{children:"Charge amount"}),e("th",{children:"Transaction Date"}),e("th",{children:"Currency"}),e("th",{children:"Transaction Id"}),e("th",{children:"Status"})]})}),e("tbody",{children:d&&Object.keys(d).length>0?i("tr",{children:[e("td",{children:d.amount?d.amount:"No payment data available"}),e("td",{children:d.charge_response_code?d.charge_response_code:"No payment data available"}),e("td",{children:d.charge_response_message?d.charge_response_message:"No payment data available"}),e("td",{children:d.charged_amount?d.charged_amount:"No payment data available"}),e("td",{children:d.date?d.date:"No payment data available"}),e("td",{children:d.currency?d.currency:"No payment data available"}),e("td",{children:d.transaction_id?d.transaction_id:"No payment data available"}),e("td",{children:d.status?d.status:"No payment data available"})]},d.id):e("tr",{children:e("td",{children:e("h5",{className:"text-red-500",children:"Payment has not been done yet."})})})})]})})})})]})]});c.layout=t=>e(o,{children:t});export{c as default};
