import{r as h,a as t,j as l}from"./app-6a3cd5d8.js";import{u as x}from"./index-13f29e3e.js";function w({errors:a,success:i}){const[r,f]=h.useState(i),{data:s,setData:o,post:n}=x({email:""}),c=e=>{const{name:m,value:u}=e.target;o({...s,[m]:u})},d=e=>{e.preventDefault(),n(route("subcribe.store"))};if(a.email=="The email address is already in use."){const e=document.querySelector(".requiredEmail");e&&e.scrollIntoView({behavior:"smooth"})}if(r=="Subscried to Newsletter Successfully."){const e=document.querySelector(".requiredEmail");e&&e.scrollIntoView({behavior:"smooth"})}return t("form",{method:"post",onSubmit:d,children:t("div",{className:"w-full p-5",children:l("div",{className:"container flex flex-col xl:flex-row mx-auto px-5 py-8 xl:py-14 text-gray-900 bg-gray-200 rounded-2xl",children:[l("div",{className:"w-full mb-6 xl:mb-0 text-center",children:[t("div",{className:"mb-1 text-3xl font-extrabold text-gray-900",children:"Subcribe to our newsletter"}),t("div",{className:"text-lg",children:"get the latest information,updates and more "})]}),l("div",{className:"w-full requiredEmail",children:[l("div",{className:"flex flex-col sm:flex-row gap-3 w-full",children:[t("input",{placeholder:"Enter your email",className:"w-full sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow",type:"email",name:"email",value:s.email,onChange:c,required:!0}),t("button",{type:"submit",className:"w-full sm:w-1/4 h-12 text-white bg-emerald-600 rounded-lg shadow  duration-300 ease-in-out hover:bg-purple-700",children:"Subscribe"})]}),a.email&&t("div",{className:"text-red-500",children:a.email}),r?t("div",{className:"text-green-500",children:r}):""]})]})})})}export{w as default};
