import{W as d,r as l,j as a,a as s,b as p}from"./app-48a5be93.js";import{G as c}from"./GuestLayout-8aa296aa.js";import{I as u}from"./InputError-6bb6e204.js";import{I as f}from"./InputLabel-44929478.js";import{P as w}from"./PrimaryButton-ee06a198.js";import{T as h}from"./TextInput-385d24d9.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=d({password:""});return l.useEffect(()=>()=>{n("password")},[]),a(c,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(f,{htmlFor:"password",value:"Password"}),s(h,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s(u,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(w,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{I as default};