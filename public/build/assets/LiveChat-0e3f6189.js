import{r as l,j as p,a as m}from"./app-7963f5fc.js";import{N as f}from"./NabBar2-644ce6dc.js";import w from"./Footer-41e0afed.js";import"./bell-6fd89589.js";import"./headerlogo-80979cd7.js";import"./index-7af71943.js";if(typeof window>"u")throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");(function(e,a,t,o,n,r){r=a.createElement("script"),r.async=1,r.src="https://cdn.talkjs.com/talk.js",a.head.appendChild(r),o=e.Promise,e.Talk={v:3,ready:{then:function(s){if(o)return new o(function(d,i){t.push([s,d,i])});t.push([s])},catch:function(){return o&&new o},c:t}}})(window,document,[]);var c=window.Talk;const T=({auth:e})=>{const a=l.useRef(null),[t,o]=l.useState(!1);return l.useEffect(()=>{c.ready.then(()=>o(!0)).catch(n=>{console.error("Error loading TalkJS:",n)})},[]),l.useEffect(()=>{if(t){const n=new c.User({id:e.user.id,name:e.user.first_name,email:e.user.email,photoUrl:e!=null&&e.user?"/storage/"+e.user.image:"N/A",welcomeMessage:"Hello!",role:"default"}),r=new c.User({id:"1",name:"Admin",email:"admin@example.com",photoUrl:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",welcomeMessage:"Hello!",role:"default"}),s=new c.Session({appId:"txSJO2gM",me:n}),d=c.oneOnOneId(n,r),i=s.getOrCreateConversation(d);return i.setParticipant(n),i.setParticipant(r),s.createInbox({selected:i}).mount(a.current),()=>s.destroy()}},[t]),p("div",{children:[m(f,{auth:e}),m("div",{className:"mt-3",ref:a,style:{width:"100%",height:"500px"}}),m(w,{auth:e})]})};export{T as default};