import{r as a,W as N,j as t,a as e,d as h,F as r}from"./app-076d2a33.js";import{T as w}from"./transfer-57390ff6.js";const v="/build/assets/revo-img-f5ab6fcb.png",y=({brands:k,cars:s,auth:j})=>{const[f,i]=a.useState(!1),[u,d]=a.useState(!1),[o,C]=a.useState([]),[L,p]=a.useState(0);a.useState(!1),a.useState(0),N();const g=(l=0)=>{s==null||s.find(n=>n.id===l),d(!0),i(!1)};a.useEffect(()=>{p(s==null?void 0:s.length)},[s]);function b(l){return l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-8 ",children:[e("div",{className:"flex",children:e("div",{className:"lg:container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-6 p-4  ",children:s==null?void 0:s.map((l,n)=>{var m,c,x;return t("div",{className:"w-full bg-white border border-gray-200 shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105",children:[t("div",{className:"relative",children:[e(h,{href:route("CarDetail",l.slug),children:e("img",{className:"w-full h-[150px] rounded-t-lg object-cover ",src:"/storage"+(l==null?void 0:l.images[0]),alt:"product image"})}),e("div",{className:"absolute top-2 right-2 bg-emerald-600 rounded p-1 shadow-2xl",children:e("p",{className:"font-semibold text-white",children:l==null?void 0:l.type})}),e("div",{className:"absolute bottom-5 left-1",children:l.total_rating>0&&e(r,{children:t("span",{className:"flex justify-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFA534",viewBox:"0 0 24 24",strokeWidth:0,stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})}),e("p",{className:"text-sm",children:l.total_rating?l.total_rating:"0"})]})})})]}),t("div",{className:"px-3 pb-4",children:[t("h5",{className:"text-xl font-bold dark:text-white text-emerald-500 mt-1",children:["Price: ₦ ",b(l.price)]}),e(h,{href:route("CarDetail",l.slug),className:"",children:t("h5",{className:"text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-1 h-[34px] overflow-hidden",children:[l==null?void 0:l.title,e("span",{className:"mx-2 ",children:l==null?void 0:l.model})]})}),e("div",{className:"flex items-center"}),t("div",{className:"mt-4",children:[e("div",{className:"flex flex-wrap justify-between mt-3",children:e("div",{className:"flex mb-2 flex-wrap justify-between",children:t("div",{className:"flex",children:[e("img",{src:(m=l==null?void 0:l.brand)!=null&&m.image?"/storage/"+((c=l==null?void 0:l.brand)==null?void 0:c.image):"",className:"w-6 h-6"}),e("p",{className:"mx-2 ",children:(x=l==null?void 0:l.brand)==null?void 0:x.title})]})})}),e("div",{className:"flex flex-wrap justify-between",children:t("div",{className:"flex mb-1",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:[e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),e("p",{className:"mx-2 ",children:l==null?void 0:l.location})]})}),t("div",{className:"flex flex-wrap justify-between mt-3",children:[e("div",{className:"flex mb-1 bg-gray-100 rounded-[4px]",children:e("p",{className:"mx-2  text-gray-600",children:l==null?void 0:l.condition})}),e("div",{className:"flex mb-1 bg-gray-100 rounded-[4px]",children:e("p",{className:"mx-2  text-gray-600",children:l==null?void 0:l.mileage})})]})]})]})]},n)})})}),f?t(r,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-50 my-6 mx-auto max-w-3xl ",children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[t("div",{className:"flex justify-between items-center pt-4 px-4",children:[e("h3",{className:"text-2xl font-semibold text-gray-950",children:"Swap Car"}),e("button",{className:"text-gray-500 hover:text-gray-800 focus:outline-none",onClick:()=>i(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500  mx-3 my-3"}),e("div",{className:"relative p-4 flex",children:t("div",{className:"lg:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-6",children:[t("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"Your Car"}),e("img",{src:"/storage"+o.images[0],className:"w-full h-4/5 object-contain"}),e("p",{className:"font-semibold text-gray-950 mt-2 text-2xl ",children:"Price"}),t("p",{className:"text-emerald-500",children:["$ ",o.price]})]}),e("div",{className:"col-span-1 md:col-span-1 lg:col-span-1 flex justify-center items-center",children:e("img",{src:w,className:"w-full h-20 object-contain"})}),t("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[e("p",{className:"text-gray-950 mt-2 text-2xl font-bold mb-2",children:"My Car"}),e("img",{src:v,className:"w-full h-4/5 object-contain"}),e("p",{className:"font-semibold text-gray-950 mt-2 text-2xl ",children:"Price"}),e("p",{className:"text-emerald-500 mb-2 mt-2",children:"$ 43496.10"})]})]})}),t("div",{className:"p-4 mt-3",children:[e("p",{className:"text-gray-950 text-2xl font-bold mb-2",children:"Difference"}),e("p",{className:"text-emerald-500",children:"$ 32,360.81"}),t("p",{className:"font-semibold",children:["You have to Pay ",e("span",{className:"text-emerald-500",children:"$ 32,360.81"})," to make this Deal happen."]})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),e("div",{className:"flex flex-col items-center justify-center p-6",children:e("div",{className:"flex flex-col space-y-2",children:e("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:()=>g(o.id),children:"Book Inspection"})})})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,u?t(r,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-50 my-6 mx-auto max-w-3xl",children:t("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[t("div",{className:"flex justify-between items-center pt-4 px-4",children:[e("h3",{className:"text-2xl font-semibold text-gray-950",children:"Book Inspection"}),e("button",{className:"text-gray-500 hover:text-gray-800 focus:outline-none",onClick:()=>d(!1),children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),t("div",{className:"relative p-4 flex flex-col gap-5 items-center",children:[t("div",{className:"flex flex-wrap gap-4 items-center",children:[e("p",{className:"text-bold text-1xl text-gray-950",children:"Date :"}),e("input",{type:"date",className:"border border-gray-300 p-2 rounded w-60 "})]}),t("div",{className:"flex flex-wrap gap-4 items-center",children:[e("p",{className:"text-bold text-1xl text-gray-950",children:"Time :"}),e("input",{type:"time",className:"border border-gray-300 p-2 rounded  w-60"})]})]}),e("hr",{className:"mt-2 border-t-2 border-solid border-emerald-500 mx-3 my-3"}),e("div",{className:"flex flex-col items-center justify-center p-6",children:e("div",{className:"flex flex-col space-y-2",children:e("button",{className:"bg-gray-950 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150",type:"button",onClick:()=>i(!1),children:"Book Now"})})})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null]})},B=y;export{B as P};