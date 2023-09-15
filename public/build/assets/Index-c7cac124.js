import{a as e,F as i,j as t,r as m,W as M,n as A,b as E,d as w}from"./app-4e98baa7.js";import{P}from"./PricingCard-549a7ab2.js";import $ from"./Footer-91e0d7bc.js";import{N as z}from"./NavBar-11f77e34.js";import{b as F,a as D}from"./hero-section2-c3648d56.js";import L from"./Newsletter-af7c1b43.js";import"./transfer-57390ff6.js";import"./headerlogo-80979cd7.js";import"./index-3d8241c6.js";import"./bell-6fd89589.js";const W=({brands:a,categories:s})=>e(i,{children:e("div",{className:"mx-auto w-full max-w-screen-xl",children:e("div",{className:"-ml-[50px] sm:ml-0",style:{backgroundImage:`url(${F})`,backgroundSize:"cover"},children:e("div",{className:"top-0 w-full md:min-h-[36rem] h-[14rem]",children:t("div",{className:"container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4",children:[e("div",{className:"lg:w-1/2 mt-5 lg:mb-0"}),e("div",{className:"ml-80 mt-10 xl:ml-0 xl:my-48 hidden sm:flex md:hidden xl:block ",children:t("h3",{className:"type-form-item text-black font-medium xl:text-3xl md:text-start text-shadow-sm ml-8",children:["Welcome to CarSwap.ng",t("ul",{className:"list-disc ml-20",children:[e("li",{children:" Swap For Better"}),e("li",{children:"Swap For Cash"}),e("li",{children:"Buy & Sell like a Boss."})]})]})})]})})})})}),O="/build/assets/preview-ca18c060.png",R="/build/assets/delivery-van-e1fd99df.png",T="/build/assets/share-ride-07d05317.png",V="/build/assets/Swap-5f9b48e9.png",q=()=>e(i,{children:t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-12 ",children:[e("div",{className:"text-center text-3xl font-bold w-full",children:e("h1",{className:"text-gray-950 font-semibold text-3xl",children:"4 Simple Steps To Swap A Car"})}),e("div",{children:e("div",{className:"container mx-auto px-4",children:t("div",{className:"grid grid-cols-1 md:grid-cols-4 ",children:[t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-3",children:"1"}),e("img",{src:T,alt:"",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-56",children:"Post your car"})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"2"}),e("img",{src:O,alt:"Image 2",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"We Evaluate it."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"3 "}),e("img",{src:V,alt:"Image 3",className:"w-26 h-20 mt-11 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"Choose car to swap"})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-0",children:"4"}),e("img",{src:R,alt:"Image 3",className:"w-24 h-28 mt-8 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:" font-semibold w-48 ",children:"Your Inspection and Delivery."})})]})]})})})]})}),U="/build/assets/bannar(2)-f06189d3.png",Y="/build/assets/categorybg-35189dd5.jpg",N="/build/assets/bgprice-6e2be200.jpg",_=({brands:a,categories:s})=>{const[n,o]=m.useState(!1),[c,u]=m.useState(""),[g,f]=m.useState(!1),[x,v]=m.useState([]),y=()=>{o(!0)},b=l=>{l.target.closest("#searchLocation")||o(!1)};m.useEffect(()=>(document.addEventListener("click",b),()=>{document.removeEventListener("click",b)}),[]);const k=l=>{u(l),g||(f(!0),A.visit("/",{data:{q:c},preserveState:!0,preserveScroll:!0,replace:!0,onSuccess:r=>{var p;const B=(p=r.props)==null?void 0:p.suggestions;v(B)}}),setTimeout(()=>{f(!1)},500)),console.log(g)},{data:S,setData:d,errors:H,get:C}=M({location:"",min:0,max:0,brand:"",category:""}),j=(l,r)=>{d({...S,min:l,max:r})},h=[{name:"Under 3M",min:0,max:3e6},{name:"3M-6M",min:3e6,max:6e6},{name:"6M-10M",min:6e6,max:1e7},{name:"10M-15M",min:1e7,max:15e6},{name:"Above 15M",min:15e6,max:0}],I=()=>{C(route("search"))};return e(i,{children:e("div",{className:"mx-auto w-full max-w-screen-xl",children:t("div",{className:"w-full max-w-screen-xl  mx-auto  mt-3 ",children:[t("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 items-center",children:[t("div",{className:"p-4 h-[200px]",style:{backgroundImage:`url('${U}')`,backgroundSize:"cover"},children:[e("p",{className:"font-extrabold text-xl mt-4 text-gray-950 mb-3 text-white",children:"Search Location:"}),e("input",{id:"searchLocation",type:"search",placeholder:"Search location...",value:c,onChange:l=>k(l.target.value),className:"border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md",onClick:y}),n&&e("ul",{className:"absolute top-8 left-0 z-10 w-full mt-2 bg-white rounded-lg shadow-lg ",children:x==null?void 0:x.map((l,r)=>e("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>{d("location",l),u(l)},children:l},l+r))})]}),t("div",{className:"p-4 bg-gray-50 h-[200px] overflow-y-scroll custom-scrollbar",style:{backgroundImage:`url('${Y}')`,backgroundSize:"cover"},children:[e("h3",{className:"font-extrabold text-white text-xl mt-4 ",children:"By Category:"}),e("div",{className:"mb-3 mt-2",children:s==null?void 0:s.map((l,r)=>e("button",{type:"button",onClick:()=>d("category",l==null?void 0:l.id),className:"border mx-1 mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-400 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-200",children:(l==null?void 0:l.title)+"("+(l==null?void 0:l.cars_count)+")"},r))})]}),t("div",{className:"p-4 bg-gray-50 h-[200px] overflow-y-scroll custom-scrollbar",style:{backgroundImage:`url('${N}')`,backgroundSize:"cover"},children:[e("h3",{className:"font-extrabold text-xl mt-4 text-white",children:"By Price:"}),e("div",{className:"mb-3 mt-2",children:h==null?void 0:h.map((l,r)=>e("button",{type:"button",onClick:()=>j(l.min,l.max),className:"border mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-300 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-200",children:l==null?void 0:l.name},r))})]}),t("div",{className:"p-4 bg-gray-50  h-[200px] overflow-y-scroll custom-scrollbar",style:{backgroundImage:`url('${N}')`,backgroundSize:"cover"},children:[e("h3",{className:"font-extrabold text-xl mt-4 text-gray-200",children:"By Brand:"}),e("div",{className:"grid grid-cols-6 gap-0 mt-2",children:a==null?void 0:a.map(l=>e("button",{className:"border pt-1 pl-1 bg-white-400 focus:bg-emerald-500",onClick:()=>d("brand",l==null?void 0:l.id),children:e("img",{src:"/storage/"+(l==null?void 0:l.image),alt:"Image 1",className:"w-10 h-10 object-contain"})},l.id))})]})]}),e("div",{className:"flex justify-center items-center mt-6 mb-6",children:e("div",{className:"w-[30%]",children:e("button",{onClick:()=>I(),className:"text-center text-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded",type:"button",children:"Search"})})})]})})})},G=({brands:a,categories:s})=>e(i,{children:e("div",{className:"mx-auto w-full max-w-screen-xl",children:e("div",{className:"",style:{backgroundImage:`url(${D})`,backgroundSize:"cover"},children:e("div",{className:"top-0 w-full min-h-[14rem] h-[30rem] mt-3  md:bg-white md:bg-opacity-30 xl:bg-opacity-0",children:t("div",{className:"container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4",children:[e("div",{className:"lg:w-[30%]  xl:w-[20%] mt-5 lg:mb-0"}),t("div",{className:"ml-20  xl:ml-10 xl:my-[5rem] hidden md:block ",children:[e("h3",{className:"ml-10 type-form-item text-black font-medium md:text-2xl xl:text-xl md:text-start text-shadow-sm ml-8 md:mt-6 md:ml-52 xl:ml-10 xl:mt-0",children:"About Carswap.ng."}),e("p",{className:"text-xl text-black  ml-10  md:ml-52 xl:ml-10",children:"Carswap.ng is Nigeria's first car swap marketplace launched in 2018 and incorporated in Corporate Affairs Commission Nigeria as Carswap Limited. Our objective is to end the hassle of car replacements, and liquidation among users."}),e("h3",{className:" md:ml-52 xl:ml-10 type-form-item text-black font-medium md:text-xl xl:text-xl md:text-start text-shadow-sm ml-8",children:"Our core services:"}),t("p",{className:" text-black ml-10 md:mb-5 text-xl md:ml-52 xl:ml-10 ",children:["A. UPGRADE: Here, a customer uses an existing car to buy their dream car by simply using our Swap calculator.",e("br",{}),"B. DOWNGRADE: A customer can use their existing car to get instant cash and a cheap car to drive.",e("br",{}),"C. Of course, you can buy and sell cars at carswap.ng",e("br",{})," ",e("br",{}),"Earn Every Week, Partner with Carswap.ng Become a Field Manager"]})]})]})})})})}),se=({brands:a,swap_cars:s,auth:n,sale_cars:o,categories:c})=>t(i,{children:[e(E,{title:"Nigeria’s No 1. Carswap place. Buy. Sell. Swap"}),e(z,{auth:n}),e(W,{brands:a,categories:c}),t("div",{className:"text-3xl text-center w-full mt-12",children:[e("h1",{className:"text-gray-950 font-semibold",children:"Find Your Ideal Car"}),e(_,{brands:a,categories:c})]}),e(G,{}),e("div",{className:"text-3xl text-center w-full mt-12",children:e("h1",{className:"text-gray-950 font-semibold",children:"Swap or Buy best car deals in Nigeria"})}),e(P,{cars:s}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(w,{href:route("ViewAllCars","swap"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(q,{}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(w,{href:route("ViewAllCars","sale"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(L,{}),e($,{auth:n,brands:a})]});export{se as default};
