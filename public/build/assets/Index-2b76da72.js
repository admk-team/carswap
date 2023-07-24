import{r as n,W as j,a as e,F as m,j as t,f as S,b as I,d as C}from"./app-d311b3de.js";import{P as k}from"./PricingCard-89c460d7.js";import F from"./Footer-799753bd.js";import{N as T}from"./NavBar-ba85b7bd.js";import"./car-engine-e447a873.js";import"./headerlogo-80979cd7.js";import"./index-070db1fd.js";import"./bell-6fd89589.js";const B="/build/assets/hero-section-53357a6b.jpg",E=a=>{var p;const[r,c]=n.useState(!1),[i,d]=n.useState(""),[s,g]=n.useState(["Islamabad","nigeria"]),x=()=>{c(!0)},u=l=>{l.target.closest("#searchLocation")||c(!1)};n.useEffect(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}),[]);const f=l=>{d(l),S.get("/",{q:l},{preserveState:!0})},{data:o,setData:h,errors:_,get:v}=j({location:"",min:0,max:0,brand:""}),w=(l,N)=>{h({...o,min:l,max:N})},b=[{name:"Under 3M",min:0,max:3e6},{name:"3M-6M",min:3e6,max:6e6},{name:"6M-10M",min:6e6,max:1e7},{name:"10M-15M",min:1e7,max:15e6},{name:"Above 15M",min:15e6,max:0}],y=()=>{v(route("search"))};return e(m,{children:t("div",{className:"w-full max-w-sm p-4 bg-gray-50 bg-opacity-70 shadow-xl  rounded-lg  sm:p-6 md:p-8 ",children:[e("h1",{className:"text-center text-2xl font-bold mb-4 text-gray-950",children:"Find Your Ideal Car"}),t("div",{className:"flex items-center relative",children:[e("input",{id:"searchLocation",type:"search",placeholder:"Search location...",value:i,onChange:l=>f(l.target.value),className:"relative border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md",onClick:x}),r&&e("ul",{className:"absolute top-8 left-0 z-10 w-full mt-2  bg-white rounded-lg shadow-lg ",children:s==null?void 0:s.map(l=>e("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>{h("location",l),d(l)},children:l},l))})]}),e("h3",{className:"font-extrabold text-xl mt-4 text-gray-950",children:"By Price:"}),e("div",{className:"mb-3 mt-2",children:b==null?void 0:b.map((l,N)=>e("button",{type:"button",onClick:()=>w(l.min,l.max),className:"border mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ",children:l==null?void 0:l.name},N))}),e("h3",{className:"font-extrabold text-xl text-gray-950",children:"By Brand:"}),e("div",{className:"grid grid-cols-6 gap-0 mt-2",children:(p=a.brands.brands)==null?void 0:p.map(l=>e("button",{className:"border pt-1 pl-1 bg-white-400 focus:bg-emerald-500",onClick:()=>h("brand",l==null?void 0:l.id),children:e("img",{src:"/storage/"+(l==null?void 0:l.image),alt:"Image 1",className:"w-10 h-10 object-contain"})},l.id))}),e("div",{className:"flex justify-center mt-4",children:e("button",{onClick:()=>y(),className:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded",type:"button",children:"Search"})})]})})},M="/build/assets/suv-1-c1d43312.webp",$="/build/assets/suv-2-0d5c81ac.webp",A="/build/assets/sedan-476b81a5.webp",P="/build/assets/jeep-023a1867.webp",L=({images:a})=>{const[r,c]=n.useState(0),i=(a==null?void 0:a.length)>0?a:[M,$,A,P];return n.useEffect(()=>{const d=setInterval(()=>{c(s=>(s+1)%i.length)},3e3);return()=>{clearInterval(d)}},[i.length]),e(m,{children:e("div",{id:"default-carousel",className:"relative w-full ",children:e("div",{className:`relative overflow-hidden ${(a==null?void 0:a.length)>0?"h-screen":" md:h-64"}`,children:i.map((d,s)=>e("div",{className:`absolute w-full ${(a==null?void 0:a.length)>0?" transform duration-700":""} ${s===r?"translate-x-0":"translate-x-full"}`,children:e("img",{src:d,className:`absolute block ${s===r?"opacity-100":"opacity-0"} ${(a==null?void 0:a.length)>0?"h-screen ":" -translate-x-1/2 top-10 left-1/2"}`,alt:`Slide ${s+1}`})},s))})})})},W=({brands:a})=>{const r=["Swap for Better Car","Swap For Cash","Buy & Sell"],[c,i]=n.useState(0),[d,s]=n.useState("");return n.useEffect(()=>{let g;const x=r[c],u=x.length,f=o=>{s(x.slice(0,o)),o<=u?g=setTimeout(()=>{f(o+1)},100):setTimeout(()=>{i(h=>(h+1)%r.length)},2e3)};return f(0),()=>clearTimeout(g)},[c]),e(m,{children:e("div",{style:{backgroundImage:`url(${B})`,backgroundSize:"cover"},children:e("div",{className:"top-0 w-full h-full",children:t("div",{className:"container flex flex-col lg:flex-row items-center xl:gap-y-12 xl:gap-x-80 lg:gap-x-32 mx-auto max-w-7xl px-4",children:[t("div",{className:"lg:w-1/2 mt-6 lg:mb-0",children:[t("div",{className:"type-form-container",children:[e("p",{className:"text-emerald-400",children:"Welcome to Carswap"}),e("h3",{className:"type-form-item text-white font-medium text-base md:text-3xl md:text-start text-shadow-sm",children:d})]}),e("div",{className:"hidden lg:flex",children:e(L,{})})]}),e("div",{className:"my-8 flex",children:e(E,{brands:a})})]})})})})},D="/build/assets/preview-ca18c060.png",Y="/build/assets/share-ride-07d05317.png",z="/build/assets/Swap-5f9b48e9.png",O="/build/assets/delivery-van-e1fd99df.png",R=()=>e(m,{children:t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-12 ",children:[e("div",{className:"text-center text-3xl font-bold w-full",children:e("h1",{className:"text-gray-950 font-semibold text-3xl",children:"All In 4 Simple Steps"})}),e("div",{children:e("div",{className:"container mx-auto px-4",children:t("div",{className:"grid grid-cols-1 md:grid-cols-4 ",children:[t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-3",children:"1"}),e("img",{src:Y,alt:"Image 1",className:"w-20 h-20 mt-11 object-cover "})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-56",children:"Post your car."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"2"}),e("img",{src:D,alt:"Image 2",className:"w-20 h-20 mt-10"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"We Evaluate it."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-2",children:"3 "}),e("img",{src:z,alt:"Image 3",className:"w-26 h-20 mt-11 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:"mt-4 font-semibold w-48 ",children:"Choose a car to Swap."})})]}),t("div",{className:"md:flex md:flex-col items-center md:text-center p-4 ",children:[t("div",{className:"flex justify-center",children:[e("h1",{className:"text-emerald-500 text-9xl font-bold -mr-0",children:"4"}),e("img",{src:O,alt:"Image 3",className:"w-24 h-28 mt-8 object-cover"})]}),e("div",{className:"flex justify-center text-center",children:e("p",{className:" font-semibold w-48 ",children:"Your Inspection and Delivery."})})]})]})})})]})}),U="/build/assets/no1-7f928b14.png",V="/build/assets/no2-8bbef72a.png",q="/build/assets/no3-7107f057.png",Q="/build/assets/no4-removebg-preview (2)-aab406fb.png",G=()=>e(m,{children:e("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-6 ",children:e("div",{className:" md:container md:mx-auto",children:t("div",{className:"container mx-auto py-8 flex flex-wrap justify-center",children:[e("div",{className:"text-2xl md:text-3xl font-semibold text-center mb-6 w-full",children:e("h1",{children:"Your reliable partner for car sales"})}),e("div",{className:"container mx-auto",children:t("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 px-20 mt-4 justify-center",children:[t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:U,alt:"Image 1",className:"object-contain w-20 h-20 "})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-48",children:[e("h1",{className:"font-semibold text-xl",children:"Guaranteed Purchase"}),e("p",{className:"text-md mt-3",children:"We guarantee to buy any car at a fair price"})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center ",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:V,alt:"Image 1",className:"object-contain w-20 h-20 "})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[t("h1",{className:"font-semibold text-xl",children:["No Costs. ",e("br",{})," No Obligation"]}),e("p",{className:"mt-3",children:"Book an appointment at any of our many branches across UAE at a date and time of your convenience"})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:q,alt:"Image 1",className:"object-contain w-24 h-24"})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[e("h1",{className:"font-semibold text-xl",children:"Quick and Easy"}),e("p",{className:"mt-3",children:"All done in 30 minutes. Nationwide branches near you."})]})]}),t("div",{className:"md:flex md:flex-col flex flex-col items-center md:text-center",children:[e("div",{className:"flex justify-center items-center bg-emerald-500 rounded-full w-36 h-36",children:e("img",{src:Q,alt:"Image 1",className:"object-contain w-24 h-24"})}),t("div",{className:"justify-center text-center mt-3 w-full md:w-44",children:[e("h1",{className:"font-semibold text-xl",children:"Fast and Secure"}),e("p",{className:"mt-3",children:"No dodgy deals. We transfer the money straight to your bank account."})]})]})]})})]})})})}),H="/build/assets/feature1-670ff719.jpg",J="/build/assets/feature2 (1)-8f2611a6.png",K="/build/assets/feature3-7f4931b8.png",X="/build/assets/feature4-319e1676.png",Z=()=>e(m,{children:t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-8",children:[e("h1",{className:"text-gray-950 font-semibold text-3xl text-center",children:"Featured In"}),e("div",{className:"flex flex-wrap mt-10 justify-center",children:t("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-9 justify-items-center",children:[e("img",{src:H,alt:"",className:"ml-8"}),e("img",{src:J,alt:"",className:"w-32 h-28 "}),e("img",{src:K,alt:"",className:""}),e("img",{src:X,alt:"",className:""})]})})]})}),de=({brands:a,cars:r,auth:c})=>t(m,{children:[e(I,{title:"Index"}),e(T,{auth:c}),e(W,{brands:a}),e("div",{className:"text-3xl text-center w-full mt-12",children:e("h1",{className:"text-gray-950 font-semibold",children:"Finds The Best Deals For You"})}),e(k,{cars:r}),e("div",{className:"mx-auto flex justify-center max-w-screen-xl w-full h-full mt-12 ",children:e(C,{href:route("ViewAllCars"),className:"text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium  text-sm px-6 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32",children:"View More"})}),e(R,{}),e(G,{}),e(Z,{}),e(F,{auth:c})]});export{de as default};
