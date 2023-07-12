import{a as e,d as l,r as c,j as r,b as m}from"./app-0290a7fe.js";import h from"./DeleteUserForm-0b5290cb.js";import u from"./UpdatePasswordForm-7dbcde2d.js";import p from"./UpdateProfileInformationForm-b47a49db.js";import{L as g}from"./Layout-8241d4a6.js";import"./TextInput-c3ac531b.js";import"./InputLabel-fcae6645.js";import"./Modal-0368f50a.js";import"./transition-b2aaae54.js";import"./PrimaryButton-a45ba059.js";function o({active:a=!1,className:s="",children:i,...t}){return e(l,{...t,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${a?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${s}`,children:i})}function f({user:a,header:s,children:i}){const[t,d]=c.useState(!1);return r("div",{className:"",children:[r("nav",{className:"",children:[e("div",{className:"",children:r("div",{className:"",children:[e("div",{className:"flex"}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>d(n=>!n),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(o,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[r("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:a.name}),e("div",{className:"font-medium text-sm text-gray-500",children:a.email})]}),r("div",{className:"mt-3 space-y-1",children:[e(o,{href:route("profile.edit"),children:"Profile"}),e(o,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),e("main",{children:i})]})}function x({auth:a,mustVerifyEmail:s,status:i}){return r(f,{user:a.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e(m,{title:"Profile"}),e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(p,{mustVerifyEmail:s,status:i,className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(u,{className:"max-w-xl"})}),e("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e(h,{className:"max-w-xl"})})]})})]})}x.layout=a=>e(g,{children:a});export{x as default};
