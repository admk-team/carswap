import{r as l,j as p,a as d}from"./app-d4858b50.js";import{N as f}from"./NabBar2-49d5681e.js";import w from"./Footer-88f29f76.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-d748ce1c.js";if(typeof window>"u")throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");(function(e,a,o,r,s,n){n=a.createElement("script"),n.async=1,n.src="https://cdn.talkjs.com/talk.js",a.head.appendChild(n),r=e.Promise,e.Talk={v:3,ready:{then:function(t){if(r)return new r(function(m,i){o.push([t,m,i])});o.push([t])},catch:function(){return r&&new r},c:o}}})(window,document,[]);var c=window.Talk;const j=({auth:e})=>{const a=l.useRef(null),[o,r]=l.useState(!1);return l.useEffect(()=>{c.ready.then(()=>r(!0)).catch(s=>{console.error("Error loading TalkJS:",s)})},[]),l.useEffect(()=>{if(o&&e.user){const s=new c.User({id:e.user.id,name:e.user.first_name,email:e.user.email,photoUrl:e!=null&&e.user?"/storage/"+e.user.image:"N/A",welcomeMessage:"Hello!",role:"default"}),n=new c.User({id:"1",name:"Admin",email:"admin@example.com",photoUrl:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",welcomeMessage:"Hello!",role:"default"}),t=new c.Session({appId:"txSJO2gM",me:s}),m=c.oneOnOneId(s,n),i=t.getOrCreateConversation(m);return i.setParticipant(s),i.setParticipant(n),t.createInbox({selected:i}).mount(a.current),()=>t.destroy()}},[o]),p("div",{children:[d(f,{auth:e,className:"relative z-10"}),!(e!=null&&e.user)&&p("div",{style:{width:"100%",height:"43vh"},className:"text-4xl flex items-center justify-center ",children:[" ",d("span",{className:"animate-bounce",children:"Please login first!"})]}),e.user&&d("div",{className:"mt-3",ref:a,style:{width:"100%",height:"500px"}}),d(w,{auth:e})]})};export{j as default};