import{r as n,j as r,a as e}from"./app-19bbb678.js";import{b as a}from"./hero-section-00946e3a.js";const i="/build/assets/hero-section2-239e9e0a.jpg",h=()=>{const[o,s]=n.useState(0);n.useEffect(()=>{const t=setInterval(()=>{l()},3e3);return()=>clearInterval(t)},[]);const l=()=>{s(t=>(t+1)%2)};return r("div",{className:"relative w-full",children:[r("div",{className:"relative overflow-hidden h-[62vh]",children:[e("div",{className:o===0?"":"hidden",children:e("img",{src:a,className:"absolute block w-full h-full object-cover",alt:"Slide 1"})}),e("div",{className:o===1?"":"hidden",children:e("img",{src:i,className:"absolute block w-full h-full object-cover",alt:"Slide 2"})})]}),r("button",{type:"button",className:"absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-200/50 text-gray-800 hover:bg-gray-200 hover:text-gray-900 focus:outline-none",onClick:()=>{s(t=>(t-1+2)%2)},children:[e("span",{className:"sr-only",children:"Previous"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})]}),r("button",{type:"button",className:"absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-200/50 text-gray-800 hover:bg-gray-200 hover:text-gray-900 focus:outline-none",onClick:l,children:[e("span",{className:"sr-only",children:"Next"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})};export{h as default};