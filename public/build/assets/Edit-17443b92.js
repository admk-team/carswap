import{j as e,d as n,r as l,a as c}from"./app-ab08e8ee.js";import m from"./DeleteUserForm-e101e01f.js";import x from"./UpdatePasswordForm-4913ef19.js";import h from"./UpdateProfileInformationForm-8cde75ad.js";import{L as u}from"./Layout-2b4f2449.js";import"./InputError-97cd178b.js";import"./InputLabel-875fce3f.js";import"./Modal-d8be3425.js";import"./transition-691741c3.js";import"./TextInput-0a4b9de6.js";import"./PrimaryButton-32e818c6.js";import"./headerlogo-80979cd7.js";import"./index-e9a6f4f3.js";function t({active:s=!1,className:a="",children:r,...i}){return e.jsx(n,{...i,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${s?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${a}`,children:r})}function p({user:s,header:a,children:r}){const[i,o]=l.useState(!1);return e.jsxs("div",{className:"",children:[e.jsxs("nav",{className:"",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(t,{href:route("user.dashboard"),active:route().current("user.dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(t,{href:route("profile.edit"),children:"Profile"}),e.jsx(t,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),e.jsx("main",{children:r})]})}function g({auth:s,mustVerifyEmail:a,status:r}){return e.jsxs(p,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[e.jsx(c,{title:"Profile"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(h,{mustVerifyEmail:a,status:r,className:"max-w-xl"})}),e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(x,{className:"max-w-xl"})}),e.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsx(m,{className:"max-w-xl"})})]})})]})}g.layout=s=>e.jsx(u,{children:s});export{g as default};
