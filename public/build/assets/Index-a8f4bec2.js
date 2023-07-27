import{r as d,W as w,a as e,F as r,j as t,f as y,b as j,d as S}from"./app-7963f5fc.js";import{P as I}from"./PricingCard-3992f66b.js";import k from"./Footer-41e0afed.js";import{N as C}from"./NavBar-72994405.js";import"./car-engine-e447a873.js";import"./headerlogo-80979cd7.js";import"./index-7af71943.js";import"./bell-6fd89589.js";const F="/build/assets/hero-section-53357a6b.jpg",B=({brands:a})=>{const[n,c]=d.useState(!1),[m,i]=d.useState(""),[s,K]=d.useState(["Islamabad","nigeria"]),u=()=>{c(!0)},f=l=>{l.target.closest("#searchLocation")||c(!1)};d.useEffect(()=>(document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}),[]);const g=l=>{i(l),y.get("/",{q:l},{preserveState:!0})},{data:N,setData:o,errors:X,get:b}=w({location:"",min:0,max:0,brand:""}),p=(l,x)=>{o({...N,min:l,max:x})},h=[{name:"Under 3M",min:0,max:3e6},{name:"3M-6M",min:3e6,max:6e6},{name:"6M-10M",min:6e6,max:1e7},{name:"10M-15M",min:1e7,max:15e6},{name:"Above 15M",min:15e6,max:0}],v=()=>{b(route("search"))};return e(r,{children:t("div",{className:"w-full max-w-sm p-4 bg-gray-50 bg-opacity-70 shadow-xl  rounded-lg  sm:p-6 md:p-8 ",children:[e("h1",{className:"text-center text-2xl font-bold mb-4 text-gray-950",children:"Find Your Ideal Car"}),t("div",{className:"flex items-center relative",children:[e("input",{id:"searchLocation",type:"search",placeholder:"Search location...",value:m,onChange:l=>g(l.target.value),className:"relative border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md",onClick:u}),n&&e("ul",{className:"absolute top-8 left-0 z-10 w-full mt-2  bg-white rounded-lg shadow-lg ",children:s==null?void 0:s.map(l=>e("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>{o("location",l),i(l)},children:l},l))})]}),e("h3",{className:"font-extrabold text-xl mt-4 text-gray-950",children:"By Price:"}),e("div",{className:"mb-3 mt-2",children:h==null?void 0:h.map((l,x)=>e("button",{type:"button",onClick:()=>p(l.min,l.max),className:"border mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ",children:l==null?void 0:l.name},x))}),e("h3",{className:"font-extrabold text-xl text-gray-950",children:"By Brand:"}),e("div",{className:"grid grid-cols-6 gap-0 mt-2 h-20 overflow-y-scroll",children:a==null?void 0:a.map(l=>e("button",{className:"border pt-1  pl-1 bg-white-400 focus:bg-emerald-500",onClick:()=>o("brand",l==null?void 0:l.id),children:e("img",{src:"/storage/"+(l==null?void 0:l.image),alt:"Image 1",className:"w-10 h-10 object-contain"})},l.id))}),e("div",{className:"flex justify-center mt-4",children:e("button",{onClick:()=>v(),className:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded",type:"button",children:"Search"})})]})})},M="/build/assets/blanco-5bbed055.png",E="/build/assets/mers-a4ecb920.png",$="/build/assets/kia-6b35b0ac.png",A=({images:a})=>{const[n,c]=d.useState(0),m=(a==null?void 0:a.length)>0?a:[M,E,$];return d.useEffect(()=>{const i=setInterval(()=>{c(s=>(s+1)%m.length)},3e3);return()=>{clearInterval(i)}},[m.length]),e(r,{children:e("div",{id:"default-carousel",className:"relative w-full ",children:e("div",{className:`relative overflow-hidden ${(a==null?void 0:a.length)>0?"h-screen  bg-black  flex justify-center ":"md:h-64"}`,children:m.map((i,s)=>e("div",{className:`absolute w-full ${(a==null?void 0:a.length)>0?"transform duration-700":""} ${s===n?"translate-x-0":"translate-x-full"}`,children:e("img",{src:i,className:`absolute block w-screen ${s===n?"opacity-100 mx-4":"opacity-0"} ${(a==null?void 0:a.length)>0?"h-screen object-contain ":"w-full"} `,alt:`Slide ${s+1}`})},s))})})})},P=({brands:a})=>e(r,{children:e("div",{style:{backgroundImage:`url(${F})`,backgroundSize:"cover"},children:e("div",{className:"top-0 w-full h-full",children:t("div",{className:"container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4",children:[t("div",{className:"lg:w-1/2 mt-5 lg:mb-0",children:[t("div",{className:"type-form-container",children:[e("p",{className:"text-emerald-400 ml-2",children:"Welcome to Carswap"}),e("h3",{className:"type-form-item text-white font-medium text-3xl md:text-start text-shadow-sm ml-8",children:t("ul",{className:"list-disc",children:[e("li",{children:" Swap For Better Car"}),e("li",{children:"Swap For Cash"}),e("li",{children:"Buy & Sell"})]})})]}),e("div",{className:"hidden lg:flex mt-10",children:e(A,{})})]}),e("div",{className:"my-8 flex",children:e(B,{brands:a})})]})})})}),D="/build/assets/preview-ca18c060.png",L="/build/assets/share-ride-07d05317.png",W="/build/assets/Swap-5f9b48e9.png",Y="/build/assets/delivery-van-e1fd99df.png",T=()=>e(r,{children:t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-12 ",children:[e("div",{className:"text-center text-3xl font-bold w-full",children:e("h1",{className:"text-gray-950 font-semibold text-3xl",children:"4 Simple Steps To Swap A Car"})}),e("div",{children:e("div",{className:"container mx-auto px-4",children:t("div",{className:"grid grid-cols-1 md:grid-cols-4 ",children:[t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-3",children:"1"}),e("img",{src:L,alt:"Image 1",className:"w-20 h-20 mt-11 object-cover "})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-56",children:"Post your car."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"2"}),e("img",{src:D,alt:"Image 2",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"We Evaluate it."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"3 "}),e("img",{src:W,alt:"Image 3",className:"w-26 h-20 mt-11 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"Choose a car to Swap."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-0",children:"4"}),e("img",{src:Y,alt:"Image 3",className:"w-24 h-28 mt-8 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:" font-semibold w-48 ",children:"Your Inspection and Delivery."})})]})]})})})]})}),z="/build/assets/no1-7f928b14.png",O="/build/assets/no2-8bbef72a.png",R="/build/assets/no3-7107f057.png",V="/build/assets/no4-removebg-preview (2)-aab406fb.png",q=()=>e(r,{children:e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:" md:container md:mx-auto",children:t("div",{className:"container mx-auto py-8 flex flex-wrap justify-center",children:[e("div",{className:"text-2xl md:text-3xl font-semibold text-center mb-6 w-full",children:e("h1",{children:"Your reliable partner for car sales"})}),e("div",{className:"container mx-auto",children:t("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center",children:[t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:z,alt:"Image 1",className:"object-contain w-20 h-20 "})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-48",children:[e("h1",{className:"font-semibold text-xl",children:"Guaranteed Purchase"}),e("p",{className:"text-md mt-3",children:"We guarantee the purchase of your car in the best market price"})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center ",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:O,alt:"Image 1",className:"object-contain w-20 h-20 "})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[t("h1",{className:"font-semibold text-xl",children:["No Costs. ",e("br",{})," No Obligation"]}),e("p",{className:"mt-3",children:"Book an online appointment at a date and time of your convenience. An affiliate near you will complete transcation with you in real time."})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:R,alt:"Image 1",className:"object-contain w-24 h-24"})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[e("h1",{className:"font-semibold text-xl",children:"Quick and Easy"}),e("p",{className:"mt-3",children:"No hassle, it is done within minutes."})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:V,alt:"Image 1",className:"object-contain w-24 h-24"})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[e("h1",{className:"font-semibold text-xl",children:"Fast and Secure"}),e("p",{className:"mt-3",children:"Everything is done to save your time. And your identity is confidential"})]})]})]})})]})})})}),Q="/build/assets/feature1-670ff719.jpg",U="/build/assets/feature2 (1)-8f2611a6.png",G="/build/assets/feature3-7f4931b8.png",H="/build/assets/feature4-319e1676.png",J=()=>e(r,{children:t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-8",children:[e("h1",{className:"text-gray-950 font-semibold text-3xl text-center",children:"Featured In"}),e("div",{className:"flex flex-wrap mt-10 justify-center",children:t("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-9 justify-items-center",children:[e("img",{src:Q,alt:"",className:"ml-8"}),e("img",{src:U,alt:"",className:"w-32 h-28 "}),e("img",{src:G,alt:"",className:""}),e("img",{src:H,alt:"",className:""})]})})]})}),re=({brands:a,cars:n,auth:c})=>t(r,{children:[e(j,{title:"Index"}),e(C,{auth:c}),e(P,{brands:a}),e("div",{className:"text-3xl text-center w-full mt-12",children:e("h1",{className:"text-gray-950 font-semibold",children:"Finds The Best Deals For You"})}),e(I,{cars:n}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(S,{href:route("ViewAllCars"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(T,{}),e(q,{}),e(J,{}),e(k,{auth:c,brands:a})]});export{re as default};