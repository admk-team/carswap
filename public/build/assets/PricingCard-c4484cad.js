import{r as n,W as w,j as s,a as e,d as i,F as a}from"./app-455f14d1.js";import{T as b}from"./transfer-57390ff6.js";const N="/build/assets/revo-img-f5ab6fcb.png",y=({brands:k,cars:t,auth:j})=>{console.log("carsswap",t);const[p,o]=n.useState(!1),[f,m]=n.useState(!1),[r,C]=n.useState([]),[z,u]=n.useState(0);n.useState(!1),n.useState(0),w();const v=(l=0)=>{t==null||t.find(d=>d.id===l),m(!0),o(!1)};n.useEffect(()=>{u(t==null?void 0:t.length)},[t]);function g(l){return l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return s("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-3 ",children:[e("div",{className:"flex",children:e("div",{className:"lg:container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-4  p-4",children:t==null?void 0:t.map((l,d)=>{var c,h,x;return s("div",{className:"lg:w-[250px] xl:w-[275px] md:w-[220px] sm:w-[200px] bg-white border border-gray-200 shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 md:me-[2px] sm:mt-2",children:[s("div",{className:"relative",children:[e(i,{href:route("CarDetail",l.slug),children:e("img",{className:"w-full h-[144px] rounded-t-lg object-cover image__responsive",src:"/storage"+(l==null?void 0:l.images[0]),alt:"product image"})}),e(a,{children:e(i,{href:route("CarDetail",l.slug),children:e("div",{className:"absolute top-2 right-2 bg-emerald-600 rounded p-1 shadow-2xl cursor-pointer responsive responsive1 swap__car",children:s("p",{className:"font-semibold text-black text-white flex gap-2 items-center justify-center align-center responsive responsive1",children:[e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"})})}),e("span",{children:"Swap Calculator"}),e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})})})}),e("div",{className:"absolute bottom-5 left-1",children:l.total_rating>0&&e(a,{children:s("span",{className:"flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFA534",viewBox:"0 0 24 24",strokeWidth:0,stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),e("p",{className:"text-sm",children:l.total_rating?l.total_rating:"0"})]})})})]}),s("div",{className:"px-3 pb-4",children:[s("h5",{className:"text-xl font-bold dark:text-white text-emerald-500  responsive",children:["Price: ₦ ",g(l.price)]}),e(i,{href:route("CarDetail",l.slug),className:""}),s("div",{className:"mt-2",children:[e("div",{className:"flex flex-wrap justify-between",children:e("div",{className:"flex mb-2 flex-wrap justify-between",children:s("div",{className:"flex",children:[" ",e("span",{className:"mr-2",children:"Spec: "}),l==null?void 0:l.feature.split(" ").slice(0,2).join(" "),(l==null?void 0:l.feature.split(" ").length)>2&&e("p",{className:"mx-1 text-dark responsive responsive1",children:"..."})]})})}),s("div",{className:"flex flex-wrap justify-between",children:[e("div",{className:"flex mb-2 flex-wrap justify-between",children:e("div",{className:"flex bg-emerald-500",children:s("p",{className:"mx-2 text-white responsive responsive1",children:[l==null?void 0:l.cylinder," ",e("span",{className:"ml-1 responsive",children:"- Cylinder"})]})})}),e("div",{className:" mr-2",children:s("p",{children:["Year : ",l==null?void 0:l.year]})})]}),s("div",{className:"flex flex-wrap justify-between mt-1 condition__wrap",children:[e("div",{className:"flex mb-1 flex-wrap justify-between",children:s("div",{className:"flex",children:[e("img",{src:(c=l==null?void 0:l.brand)!=null&&c.image?"/storage/"+((h=l==null?void 0:l.brand)==null?void 0:h.image):"",className:"w-5 h-5"}),s("p",{className:"mx-1 responsive text-sm",children:[(x=l==null?void 0:l.brand)==null?void 0:x.title,e("span",{className:"my-1 ml-1",children:l==null?void 0:l.title})]})]})}),s("div",{className:"flex",children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:[e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),e("p",{className:"mx-1 responsive  text-sm ",children:l==null?void 0:l.location})]})]}),s("div",{className:"flex flex-wrap justify-between mt-1 condition__wrap",children:[e("div",{className:"flex mb-1  rounded-[4px]",children:s("p",{className:"mx-2  text-xs text-gray-600 responsive",children:["Conditon : ",l==null?void 0:l.condition]})}),e("div",{className:"flex mb-1 bg-gray-100 rounded-[4px]",children:s("p",{className:"mx-2  text-xs text-gray-600 responsive",children:[l==null?void 0:l.mileage," miles"]})})]}),s("div",{className:"flex flex-wrap justify-between mt-1 condition__wrap",children:[e("div",{className:"flex  rounded-[4px]",children:e(i,{href:route("CarDetail",l.slug),children:e("p",{className:"mx-4  text-gray-900 font-bold cursor-pointer condition__wrap1",children:"Swap"})})}),e("div",{className:"flex   rounded-[4px]",children:e(i,{href:route("CarDetail",l.slug),children:e("p",{className:"mx-4  text-emerald-600 font-bold cursor-pointer condition__wrap1",children:"Buy Cash "})})})]})]})]})]},d)})})}),p?s(a,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-50 my-6 mx-auto max-w-3xl ",children:s("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[s("div",{className:"flex justify-between items-center pt-4 px-4",children:[e("h3",{className:"text-2xl font-semibold text-gray-950",children:"Swap Car"}),e("button",{className:"text-gray-500 hover:text-gray-800 focus:outline-none",onClick:()=>o(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500  mx-3 my-3"}),e("div",{className:"relative p-4 flex",children:s("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-6",children:[s("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"Your Car"}),e("img",{src:"/storage"+r.images[0],className:"w-full h-4/5 object-contain"}),e("p",{className:"font-semibold text-gray-950 mt-2 text-2xl ",children:"Price"}),s("p",{className:"text-emerald-500",children:["$ ",r.price]})]}),e("div",{className:"col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center",children:e("img",{src:b,className:"w-full h-20 object-contain"})}),s("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"My Car"}),e("img",{src:N,className:"w-full h-4/5 object-contain"}),e("p",{className:"font-semibold text-gray-950 mt-2 text-2xl ",children:"Price"}),e("p",{className:"text-emerald-500 mb-2 mt-2",children:"$ 43496.10"})]})]})}),s("div",{className:"p-4 mt-3",children:[e("p",{className:"text-gray-950 text-2xl font-bold mb-2",children:"Difference"}),e("p",{className:"text-emerald-500",children:"$ 32,360.81"}),s("p",{className:"font-semibold",children:["You have to Pay"," ",e("span",{className:"text-emerald-500",children:"$ 32,360.81"})," ","to make this Deal happen."]})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),e("div",{className:"flex flex-col items-center justify-center p-6",children:e("div",{className:"flex flex-col space-y-2",children:e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:()=>v(r.id),children:"Book Inspection"})})})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,f?s(a,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-50 my-6 mx-auto max-w-3xl",children:s("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[s("div",{className:"flex justify-between items-center pt-4 px-4",children:[e("h3",{className:"text-2xl font-semibold text-gray-950",children:"Book Inspection"}),e("button",{className:"text-gray-500 hover:text-gray-800 focus:outline-none",onClick:()=>m(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),s("div",{className:"relative p-4 flex flex-col gap-5 items-center",children:[s("div",{className:"flex flex-wrap gap-4 items-center",children:[e("p",{className:"text-bold text-1xl text-gray-950",children:"Date :"}),e("input",{type:"date",className:"border border-gray-300 p-2 rounded w-60 "})]}),s("div",{className:"flex flex-wrap gap-4 items-center",children:[e("p",{className:"text-bold text-1xl text-gray-950",children:"Time :"}),e("input",{type:"time",className:"border border-gray-300 p-2 rounded  w-60"})]})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),e("div",{className:"flex flex-col items-center justify-center p-6",children:e("div",{className:"flex flex-col space-y-2",children:e("button",{className:"bg-gray-950 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:()=>o(!1),children:"Book Now"})})})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null]})},M=y;export{M as P};
