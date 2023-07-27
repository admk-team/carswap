import{a as e,r,W as M,j as t,F as v,d as E,b as B}from"./app-02e48070.js";import{N as z}from"./NabBar2-95f66c25.js";import{U as W}from"./user-icon-4fd58570.js";import{d as A}from"./index-04eb0a9b.js";import{u as $}from"./index.es-1e28fc4f.js";import G from"./Footer-c0c559c3.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";const H=({activeTab:l,onTabClick:o})=>{const i=[{id:0,label:"My Listed Cars"},{id:1,label:"My Swapped Cars"},{id:2,label:"Pending Approval"},{id:3,label:"Approved Cars"}],m=x=>{o(x)};return e("div",{className:"bg-black",children:e("div",{className:"grid grid-cols-2 md:grid-cols-4",children:i.map(x=>e("button",{className:`${l===x.id?"bg-green-500":"bg-black"} text-white p-3 border border-gray-300`,onClick:()=>m(x.id),children:x.label},x.id))})})},K=({pendings:l})=>{console.log(l);const[o,i]=r.useState(1),[m,x]=r.useState([]),d=3;r.useEffect(()=>{x(l)},[l]),M();const h=o*d,g=h-d,p=m.slice(g,h),f=s=>{i(s)};return t(v,{children:[e("div",{className:"pt-3 pl-12 ",children:e("h1",{className:"font-extrabold text-black",children:"Pending approval"})}),p&&p.length>0?p.map((s,n)=>e("div",{className:"px-12 pt-2 pb-4",children:t("div",{className:"flex flex-col  bg-white border-1 md:flex-row md:max-w-xl hover:bg-gray-100 ",children:[e("img",{className:"object-cover md:h-auto md:w-48 ",src:"/storage"+(s==null?void 0:s.images[0]),alt:""}),t("div",{className:"flex flex-col justify-between p-2 leading-normal",children:[e("h5",{className:"mb-1 text-2xl font-bold text-gray-900 ",children:s==null?void 0:s.title}),t("div",{className:"flex flex-wrap",children:[e("span",{className:"me-2",children:e("strong",{children:"Status"})}),e("h6",{className:"px-2 py-1 text-base font-medium text-center text-white bg-yellow-500  self-end",children:"Pending"})]}),t("h5",{className:"text-2xl font-bold dark:text-white text-amber-500",children:["₦ ",s==null?void 0:s.price]}),e("div",{className:"mt-1",children:e("table",{className:"w-full",children:t("tbody",{children:[t("tr",{children:[e("th",{className:"px-2  font-bold-300 text-gray-800",children:"Condition"}),e("th",{className:"px-2  text-gray-800",children:"Engine"}),e("th",{className:"px-2  text-gray-800",children:"Mileage"})]}),t("tr",{children:[e("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:s==null?void 0:s.condition}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[s==null?void 0:s.engine_capacity," CC"]}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[s==null?void 0:s.mileage," (MI)"]})]})]})})})]})]})})):e("p",{className:"text-center",children:"No record found"}),e("div",{className:"d-flex justify-content pb-3",children:e("ul",{className:"pagination flex justify-center mt-4 ",children:Array(Math.ceil(m.length/d)).fill(0).map((s,n)=>e("li",{className:`page-item ${o===n+1?"active":""}`,children:e("button",{className:`page-link px-3 py-1 ${o===n+1?"bg-emerald-500 text-white":"text-black"}`,onClick:()=>f(n+1),children:n+1})},n))})})]})},R=({approved:l})=>{const[o,i]=r.useState(1),[m,x]=r.useState([]),d=3;r.useEffect(()=>{x(l)},[l]),M();const h=o*d,g=h-d,p=m.slice(g,h),f=s=>{i(s)};return t(v,{children:[e("div",{className:"pt-4 pl-4",children:e("h1",{className:"font-extrabold text-black",children:"Approved Cars:"})}),p&&p.length>0?p.map((s,n)=>e("div",{className:"px-12 pt-2 pb-4",children:t("div",{className:"flex flex-col  bg-white border-1 md:flex-row md:max-w-xl hover:bg-gray-100 ",children:[e("img",{className:"object-cover md:h-auto md:w-48 ",src:"/storage"+(s==null?void 0:s.images[0]),alt:""}),t("div",{className:"flex flex-col justify-between p-2 leading-normal",children:[e("h5",{className:"mb-1 text-2xl font-bold text-gray-900 ",children:s==null?void 0:s.title}),e("div",{className:"flex flex-wrap",children:t("div",{children:[e("span",{className:"text-gray-900 me-3",children:e("strong",{children:"Status"})}),e("button",{className:"mt-2 px-2 py-1 text-white bg-green-500 ",children:"Approved"})]})}),t("h5",{className:"text-2xl font-bold dark:text-white text-amber-500",children:["₦",s==null?void 0:s.price]}),e("div",{className:"mt-1",children:e("table",{className:"w-full",children:t("tbody",{children:[t("tr",{children:[e("th",{className:"px-2  font-bold-300 text-gray-800",children:"Condition"}),e("th",{className:"px-2  text-gray-800",children:"Engine"}),e("th",{className:"px-2  text-gray-800",children:"Mileage"})]}),t("tr",{children:[e("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:s==null?void 0:s.condition}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[s==null?void 0:s.engine_capacity," CC"]}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[s==null?void 0:s.mileage," (MI)"]})]})]})})})]})]})})):e("p",{className:"text-center",children:"No record found"}),e("div",{className:"d-flex justify-content pb-3",children:e("ul",{className:"pagination flex justify-center mt-4 ",children:Array(Math.ceil(m.length/d)).fill(0).map((s,n)=>e("li",{className:`page-item ${o===n+1?"active":""}`,children:e("button",{className:`page-link px-3 py-1 ${o===n+1?"bg-emerald-500 text-white":"text-black"}`,onClick:()=>f(n+1),children:n+1})},n))})})]})},X="/build/assets/Swapped-9d1678b2.png",q=({swaped:l,cars:o})=>{const[i,m]=r.useState(1),[x,d]=r.useState([]),h=2;r.useEffect(()=>{d(l)},[l]);const g=i*h,p=g-h,f=l.slice(p,g),s=n=>{m(n)};return t(v,{children:[e("div",{className:"pt-3 pl-12 ",children:e("h1",{className:"font-extrabold text-black",children:"Swapped Cars"})}),e("div",{className:"pt-3 pl-12 ",children:e("h1",{className:"font-extrabold text-black",children:"My Cars"})}),f&&f.length>0?f.map((n,b)=>{var N,u,w,C,P,k;console.log("sc :  ",n.car),console.log("all c :  ",o);let c=o.find(_=>_.id===n.mycar_id);return t(v,{children:[" ",t("div",{className:"",children:[t("div",{className:"px-4  mb-2 flex flex-wrap justify-center",children:[t("div",{className:"w-80 mx-auto bg-white border m-2",children:[e("img",{className:"w-full h-48 object-cover",src:"/storage"+(c==null?void 0:c.images[0]),alt:"Product"}),t("div",{className:"p-2",children:[e("h5",{className:"mb-1 text-2xl font-bold text-gray-900",children:c==null?void 0:c.title}),t("h5",{className:"text-2xl font-bold dark:text-white text-amber-500",children:["₦ ",c==null?void 0:c.price]}),e("div",{className:"h-1 bg-gray-500 my-2"}),e("div",{className:"mt-1",children:e("table",{className:"w-full",children:t("tbody",{children:[t("tr",{children:[e("th",{className:"px-2 font-bold-300 text-gray-800",children:"Condition"}),e("th",{className:"px-2 text-gray-800",children:"Engine"}),e("th",{className:"px-2 text-gray-800",children:"Mileage"})]}),t("tr",{children:[e("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:c==null?void 0:c.condition}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[c==null?void 0:c.engine_capacity," CC"]}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[c==null?void 0:c.mileage," (MI)"]})]})]})})})]})]}),e("div",{className:"flex items-center justify-center",children:e("img",{className:"w-10 h-10",src:X,alt:""})}),t("div",{className:"w-80 mx-auto bg-white border m-2",children:[e("img",{className:"w-full h-48 object-cover",src:"/storage"+((N=n.car)==null?void 0:N.images.split(",")[0]),alt:"Product"}),t("div",{className:"p-2",children:[e("h5",{className:"mb-1 text-2xl font-bold text-gray-900",children:(u=n.car)==null?void 0:u.title}),t("h5",{className:"text-2xl font-bold dark:text-white text-amber-500",children:["₦  ",(w=n.car)==null?void 0:w.price]}),e("div",{className:"h-1 bg-gray-500 my-2"}),e("div",{className:"mt-1",children:e("table",{className:"w-full",children:t("tbody",{children:[t("tr",{children:[e("th",{className:"px-2 font-bold-300 text-gray-800",children:"Condition"}),e("th",{className:"px-2 text-gray-800",children:"Engine"}),e("th",{className:"px-2 text-gray-800",children:"Mileage"})]}),t("tr",{children:[e("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:(C=n.car)==null?void 0:C.condition}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[(P=n.car)==null?void 0:P.engine_capacity,"CC"]}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[(k=n.car)==null?void 0:k.mileage,"(MI)"]})]})]})})})]})]})]}),e("hr",{})]},b)," "]})}):e("p",{className:"text-center",children:"No record found"}),e("div",{className:"d-flex justify-content pb-3",children:e("ul",{className:"pagination flex justify-center mt-4 ",children:Array(Math.ceil(l.length/h)).fill(0).map((n,b)=>e("li",{className:`page-item ${i===b+1?"active":""}`,children:e("button",{className:`page-link px-3 py-1 ${i===b+1?"bg-emerald-500 text-white":"text-black"}`,onClick:()=>s(b+1),children:b+1})},b))})})]})},J=({cars:l,success:o,auth:i})=>{var D;const[m,x]=r.useState(1),[d,h]=r.useState([]),g=3;r.useEffect(()=>{h(l)},[l]);const{get:p}=M(),f=m*g,s=f-g,n=d.slice(s,f),b=a=>{x(a)},[c,N]=r.useState(!1),[u,w]=r.useState(""),C=a=>{w(a),N(!0)},P=()=>{u!==null&&p(route("user.deleteCar",u)),N(!1)},k=()=>{N(!1),w("")},_={public_key:"FLWPUBK_TEST-5362dd26662af2fa2bb22c99f29ab2c3-X",tx_ref:`${(D=i==null?void 0:i.user)==null?void 0:D.id}-${Date.now().toString()}`,amount:100,currency:"NGN",payment_options:"card,mobilemoney,ussd",customer:{email:i!=null&&i.user?i.user.email:"",phone_number:i!=null&&i.user?i.user.phone_no:"",name:i!=null&&i.user?i.user.first_name+" "+i.user.last_name:""},customizations:{title:"Car Swap Payment",description:"Payment for items in cart",logo:"https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"}},[S,F]=r.useState(null),[T,L]=r.useState(null);r.useEffect(()=>{S!==null&&j()},[S]);const j=()=>{S!==null&&A.Inertia.post(route("user.storePayment"),{paymentData:S,carId:T})},O=$(_);return t(v,{children:[e("div",{className:"pt-4 pl-4",children:e("h1",{className:"font-extrabold text-black",children:"My Listed Cars"})}),n&&n.length>0?n.map((a,y)=>e("div",{className:"px-4 pt-2 pb-3",children:t("div",{className:"flex flex-col bg-white border-1 md:flex-row md:max-w-full hover:bg-gray-100",children:[e("img",{className:"object-cover md:h-auto md:w-48",src:"/storage"+(a==null?void 0:a.images[0]),alt:""}),t("div",{className:"flex flex-col justify-between p-2 leading-normal",children:[e("h5",{className:"mb-1 text-2xl font-bold text-gray-900",children:a==null?void 0:a.title}),a!=null&&a.payment?t("div",{className:"flex gap-2",children:[e("span",{className:"text-gray-900 me-3",children:e("strong",{children:"Payment Status"})}),e("button",{className:"px-2 py-1 text-white bg-green-500 rounded",children:"Paid"})]}):t("div",{className:"flex gap-2",children:[e("span",{className:"text-red-700 me-3",children:e("strong",{children:"Make payment "})}),e("button",{className:"px-2 py-1 text-white bg-yellow-500 ",onClick:()=>{O({callback:U=>{F(U),L(a.id),setTimeout(()=>{j()},3e3)},onClose:()=>{}})},children:"Make Payment"})]}),a!=null&&a.status&&a.status=="1"?t("div",{children:[e("span",{className:"text-gray-900 me-3",children:e("strong",{children:"Status"})}),e("button",{className:"mt-2 px-2 py-1 text-white bg-green-500 ",children:"Approved"})]}):t("div",{children:[e("span",{className:"text-gray-900 me-3",children:e("strong",{children:"Status"})}),e("button",{className:"mt-2 px-2 py-1 text-white bg-yellow-500",children:"Pending"})]}),t("h5",{className:"text-2xl font-bold dark:text-white text-amber-500",children:["₦",a==null?void 0:a.price]}),t("div",{className:"mt-1",children:[e("table",{className:"w-full",children:t("tbody",{children:[t("tr",{children:[e("th",{className:"px-2 font-bold-300 text-gray-800",children:"Condition"}),e("th",{className:"px-2 text-gray-800",children:"Engine"}),e("th",{className:"px-2 text-gray-800",children:"Mileage"})]}),t("tr",{children:[e("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:a==null?void 0:a.condition}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[a==null?void 0:a.engine_capacity," CC"]}),t("th",{className:"px-2 text-sm sm:text-base text-gray-800",children:[a==null?void 0:a.mileage," (MI)"]})]})]})}),t("div",{className:"flex flex-wrap mt-2 mx-2",children:[e(E,{href:route("user.editcar",a.slug),className:"mt-2 px-2 py-1 text-base font-medium text-center text-white bg-green-500 hover:bg-green-600 self-end",children:"Edit"}),e("button",{className:"mx-2 px-2 py-1 text-base font-medium text-center text-white bg-gray-950 hover:bg-green-600 self-end",onClick:()=>C(a.slug),children:"Delete"})]})]})]})]})},y)):e("p",{className:"text-center",children:"No record found"}),c&&e("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:t("div",{className:"bg-white w-1/2 p-6 rounded-lg shadow-lg",children:[e("p",{className:"text-center text-xl font-bold text-gray-900 mb-4",children:"Are you sure you want to delete?"}),t("div",{className:"flex justify-center",children:[e("button",{className:"mx-2 px-4 py-2 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg",onClick:P,children:"Confirm"}),e("button",{className:"mx-2 px-4 py-2 text-base font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg",onClick:k,children:"Cancel"})]})]})}),e("div",{className:"d-flex justify-content pb-3",children:e("ul",{className:"pagination flex justify-center mt-4 ",children:Array(Math.ceil(d.length/g)).fill(0).map((a,y)=>e("li",{className:`page-item ${m===y+1?"active":""}`,children:e("button",{className:`page-link px-3 py-1 ${m===y+1?"bg-emerald-500 text-white":"text-black"}`,onClick:()=>b(y+1),children:y+1})},y))})})]})},Q=({auth:l,cars:o,pendings:i,approved:m,swaped:x})=>{const[d,h]=r.useState(0),g=p=>{h(p)};return e(v,{children:t("div",{className:"flex flex-col md:flex-row",children:[e("div",{className:"p-4",children:t("div",{className:"bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4",children:[t("div",{className:"flex flex-col items-center mb-4",children:[e("img",{src:l&&l.user&&l.user.image?"/storage/"+l.user.image:W,alt:"Profile",className:"w-44 h-44 "}),e("h2",{className:"text-lg text-gray-900 font-medium mt-2",children:l&&l.user?l.user.first_name+" "+l.user.last_name:"N/A"}),t("p",{className:"text-gray-900 mt-1",children:[e("b",{children:"Email:"})," ",l&&l.user?l.user.email:"N/A"]}),t("p",{className:"text-gray-900 mt-1",children:[e("b",{children:"Contact:"})," ",l&&l.user?l.user.phone_no:"N/A"]})]}),e("div",{className:"flex flex-col",children:e(E,{href:route("user.editProfile"),className:"underline hover: text-dark font-medium mb-2 text-center",children:"Edit Profile"})})]})}),e("div",{className:"md:w-2/3 p-4",children:t("div",{className:"bg-white border border-gray-300 rounded-lg shadow-md",children:[e(H,{activeTab:d,onTabClick:g}),d===0&&e(J,{cars:o,auth:l}),d===1&&e(q,{swaped:x,cars:o}),d===2&&e(K,{pendings:i}),d===3&&e(R,{approved:m})]})})]})})},ae=({auth:l,success:o,cars:i,error:m,pendings:x,approved:d,swaped:h})=>{var u;const[g,p]=r.useState(""),[f,s]=r.useState(""),n={public_key:"FLWPUBK_TEST-5362dd26662af2fa2bb22c99f29ab2c3-X",tx_ref:`${(u=l==null?void 0:l.user)==null?void 0:u.id}-${Date.now().toString()}`,amount:100,currency:"NGN",payment_options:"card,mobilemoney,ussd",customer:{email:l!=null&&l.user?l.user.email:"",phone_number:l!=null&&l.user?l.user.phone_no:"",name:l!=null&&l.user?l.user.first_name+" "+l.user.last_name:""},customizations:{title:"Car Swap Payment",description:"Payment for items in cart",logo:"https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"}};$(n);const[b,c]=r.useState(null);r.useEffect(()=>{b!==null&&N()},[b]);const N=()=>{b!==null&&A.Inertia.post(route("user.storePayment"),{paymentData:b})};return r.useEffect(()=>{o&&p(o),m&&s(m)},[]),t(v,{children:[e(B,{title:"User | Dashboard"}),e(z,{auth:l}),t("div",{className:"mx-auto max-w-screen-xl w-full h-full mt-10 ",children:[e("h1",{className:"font-bold text-xl text-dark sm:text-lg md:text-xl lg:text-2xl mb-2",children:"My Dashboard"}),g&&e("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",role:"alert",children:e("span",{className:"block sm:inline",children:g})}),f&&e("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:e("span",{className:"block sm:inline",children:f})}),e(Q,{auth:l,cars:i,pendings:x,approved:d,swaped:h})]}),e(G,{auth:l})]})};export{ae as default};
