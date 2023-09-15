import{r as d,W as M,a as e,F as m,j as l,n as P,b as F,d as w}from"./app-076d2a33.js";import{P as g}from"./PricingCard-c4f6c56f.js";import W from"./Footer-1348af07.js";import{N as $}from"./NavBar-7af936af.js";import"./transfer-57390ff6.js";import"./headerlogo-80979cd7.js";import"./index-efb07612.js";import"./bell-6fd89589.js";const E="/build/assets/hero-section-53357a6b.jpg",A=({brands:s,categories:a})=>{const[o,n]=d.useState(!1),[h,i]=d.useState(""),[c,N]=d.useState(!1),[f,p]=d.useState([]),y=()=>{n(!0)},b=t=>{t.target.closest("#searchLocation")||n(!1)};d.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]);const j=t=>{i(t),c||(N(!0),P.visit("/",{data:{q:h},preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:r=>{var v;const B=(v=r.props)==null?void 0:v.suggestions;p(B)}}),setTimeout(()=>{N(!1)},500)),console.log(c)},{data:S,setData:x,errors:te,get:C}=M({location:"",min:0,max:0,brand:"",category:""}),k=(t,r)=>{x({...S,min:t,max:r})},u=[{name:"Under 3M",min:0,max:3e6},{name:"3M-6M",min:3e6,max:6e6},{name:"6M-10M",min:6e6,max:1e7},{name:"10M-15M",min:1e7,max:15e6},{name:"Above 15M",min:15e6,max:0}],I=()=>{C(route("search"))};return e(m,{children:l("div",{className:"w-full max-w-sm p-4 bg-gray-50 bg-opacity-70 shadow-xl  rounded-lg  sm:p-6 md:p-8 ",children:[e("h1",{className:"text-center text-2xl font-bold mb-4 text-gray-950",children:"Find Your Ideal Car"}),l("div",{className:"flex items-center relative",children:[e("input",{id:"searchLocation",type:"search",placeholder:"Search location...",value:h,onChange:t=>j(t.target.value),className:"relative border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md",onClick:y}),o&&e("ul",{className:"absolute top-8 left-0 z-10 w-full mt-2  bg-white rounded-lg shadow-lg ",children:f==null?void 0:f.map((t,r)=>e("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>{x("location",t),i(t)},children:t},t+r))})]}),l("div",{className:"mt-3 h-40 overflow-y-scroll custom-scrollbar",children:[e("h3",{className:"font-extrabold text-xl mt-4 text-gray-950",children:"By Category:"}),e("div",{className:"mb-3 mt-2",children:a==null?void 0:a.map((t,r)=>e("button",{type:"button",onClick:()=>x("category",t==null?void 0:t.id),className:"border mx-1 mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ",children:(t==null?void 0:t.title)+"("+(t==null?void 0:t.cars_count)+")"},r))}),e("h3",{className:"font-extrabold text-xl mt-1 text-gray-950",children:"By Price:"}),e("div",{className:"mb-3 mt-2",children:u==null?void 0:u.map((t,r)=>e("button",{type:"button",onClick:()=>k(t.min,t.max),className:"border mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ",children:t==null?void 0:t.name},r))}),e("h3",{className:"font-extrabold text-xl text-gray-950",children:"By Brand:"}),e("div",{className:"grid grid-cols-6 gap-0 mt-2",children:s==null?void 0:s.map(t=>e("button",{className:"border pt-1  pl-1 bg-white-400 focus:bg-emerald-500",onClick:()=>x("brand",t==null?void 0:t.id),children:e("img",{src:"/storage/"+(t==null?void 0:t.image),alt:"Image 1",className:"w-10 h-10 object-contain"})},t.id))})]}),e("div",{className:"flex justify-center mt-4",children:e("button",{onClick:()=>I(),className:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded",type:"button",children:"Search"})})]})})},Y="/build/assets/Slider (4)-efc8ad81.png",L="/build/assets/Slider (7)-550192e5.png",V=({images:s})=>{const[a,o]=d.useState(0),n=(s==null?void 0:s.length)>0?s:[Y,L],h=i=>i===a?"translate-x-0":"translate-x-full";return d.useEffect(()=>{const i=setInterval(()=>{o(c=>(c+1)%n.length)},3e3);return()=>{clearInterval(i)}},[n.length]),e(m,{children:e("div",{id:"default-carousel",className:"relative w-full",children:e("div",{className:`relative overflow-hidden ${(s==null?void 0:s.length)>0?"h-screen bg-black flex justify-center ":"md:h-64"}`,children:n.map((i,c)=>e("div",{className:`absolute w-full ${(s==null?void 0:s.length)>0?"transform duration-700":""} ${h(c)}`,style:{transition:"transform 0.7s ease-in-out",right:0},children:e("img",{src:i,className:`absolute block ${c===a?"opacity-100 mx-4":"opacity-0"} ${(s==null?void 0:s.length)>0?"h-screen object-contain":"w-full"}`,alt:`Slide ${c+1}`})},c))})})})},D=({brands:s,categories:a})=>e(m,{children:e("div",{style:{backgroundImage:`url(${E})`,backgroundSize:"cover"},children:e("div",{className:"top-0 w-full h-full",children:l("div",{className:"container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4",children:[l("div",{className:"lg:w-1/2 mt-5 lg:mb-0",children:[l("div",{className:"type-form-container",children:[e("p",{className:"text-emerald-400 ml-2",children:"Welcome to Carswap.ng"}),e("h3",{className:"type-form-item text-white font-medium text-3xl md:text-start text-shadow-sm ml-8",children:l("ul",{className:"list-disc",children:[e("li",{children:" Swap For Better"}),e("li",{children:"Swap For Cash"}),e("li",{children:"Buy & Sell like a Boss."})]})})]}),e("div",{className:"hidden lg:flex mt-10",children:e(V,{})})]}),e("div",{className:"my-8 flex",children:e(A,{brands:s,categories:a})})]})})})}),R="/build/assets/preview-ca18c060.png",T="/build/assets/delivery-van-e1fd99df.png",z="/build/assets/share-ride-07d05317.png",U="/build/assets/Swap-5f9b48e9.png",q=()=>e(m,{children:l("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-12 ",children:[e("div",{className:"text-center text-3xl font-bold w-full",children:e("h1",{className:"text-gray-950 font-semibold text-3xl",children:"4 Simple Steps To Swap A Car"})}),e("div",{children:e("div",{className:"container mx-auto px-4",children:l("div",{className:"grid grid-cols-1 md:grid-cols-4 ",children:[l("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[l("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-3",children:"1"}),e("img",{src:z,alt:"",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-56",children:"Post your car"})})]}),l("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[l("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"2"}),e("img",{src:R,alt:"Image 2",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"We Evaluate it."})})]}),l("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[l("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"3 "}),e("img",{src:U,alt:"Image 3",className:"w-26 h-20 mt-11 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"Choose car to swap"})})]}),l("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[l("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-0",children:"4"}),e("img",{src:T,alt:"Image 3",className:"w-24 h-28 mt-8 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:" font-semibold w-48 ",children:"Your Inspection and Delivery."})})]})]})})})]})}),O="/build/assets/no1-7f928b14.png",_="/build/assets/no2-8bbef72a.png",G="/build/assets/no3-7107f057.png",H="/build/assets/no4-removebg-preview (2)-aab406fb.png",J=()=>e(m,{children:e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:" md:container md:mx-auto",children:l("div",{className:"container mx-auto py-8 flex flex-wrap justify-center",children:[e("div",{className:"text-2xl md:text-3xl font-semibold text-center mb-6 w-full",children:e("h1",{children:"Your reliable partner for car sales"})}),e("div",{className:"container mx-auto",children:l("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center",children:[l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:O,alt:"Image 1",className:"object-contain w-20 h-20 "})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-48",children:e("h1",{className:"font-semibold text-xl",children:"Guaranteed Purchase/Sell"})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center ",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:_,alt:"Image 1",className:"object-contain w-20 h-20 "})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:l("h1",{className:"font-semibold text-xl",children:["Your Privacy ",e("br",{})," is Secured"]})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:G,alt:"Image 1",className:"object-contain w-24 h-24"})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:l("h1",{className:"font-semibold text-xl",children:["Cash in your ",e("br",{}),"Bank within minutes"]})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:H,alt:"Image 1",className:"object-contain w-24 h-24"})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:e("h1",{className:"font-semibold text-xl",children:"We are fast and reliable"})})]})]})})]})})})}),K="/build/assets/money-back-619ccb67.png",Q="/build/assets/money-transfer-64ae7a5c.png",X="/build/assets/stopwatch-4f8c46c0.png",Z="/build/assets/shield-f1b4e001.png",ee=()=>e(m,{children:e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:" md:container md:mx-auto",children:l("div",{className:"container mx-auto py-8 flex flex-wrap justify-center",children:[e("div",{className:"text-2xl md:text-3xl font-semibold text-center mb-6 w-full",children:e("h1",{children:"Why choose us?"})}),e("div",{className:"container mx-auto",children:l("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center",children:[l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center  rounded-full w-36 h-36",children:e("img",{src:K,alt:"Image 1",className:"object-contain w-20 h-20 "})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-48",children:e("h1",{className:"font-semibold text-xl",children:"Save 40% in cash for a new car"})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center ",children:[e("div",{className:"flex justify-center items-center rounded-full w-36 h-36",children:e("img",{src:Q,alt:"Image 1",className:"object-contain w-20 h-20 "})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:e("h1",{className:"font-semibold text-xl",children:"Instant cash and Car for a downgrade."})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center  rounded-full w-36 h-36",children:e("img",{src:X,alt:"Image 1",className:"object-contain w-24 h-24"})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:e("h1",{className:"font-semibold text-xl",children:"Sell like a boss, No contact with Strangers."})})]}),l("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center  rounded-full w-36 h-36",children:e("img",{src:Z,alt:"Image 1",className:"object-contain w-24 h-24"})}),e("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:e("h1",{className:"font-semibold text-xl",children:"Your transaction is 100% secured."})})]})]})})]})})})}),me=({brands:s,swap_cars:a,auth:o,sale_cars:n,categories:h})=>l(m,{children:[e(F,{title:"Nigeria’s No 1. Carswap place. Buy. Sell. Swap"}),e($,{auth:o}),e(D,{brands:s,categories:h}),e("div",{className:"text-3xl text-center w-full mt-12",children:e("h1",{className:"text-gray-950 font-semibold",children:"Cars for Swap"})}),e(g,{cars:a}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(w,{href:route("ViewAllCars","swap"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(q,{}),e("div",{className:"text-3xl text-center w-full mt-12",children:e("h1",{className:"text-gray-950 font-semibold",children:"Cars for Sale"})}),e(g,{cars:n}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(w,{href:route("ViewAllCars","sale"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(J,{}),e(ee,{}),e(W,{auth:o,brands:s})]});export{me as default};