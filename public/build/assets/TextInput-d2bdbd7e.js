import{r,a}from"./app-6a3cd5d8.js";const i=r.forwardRef(function({type:s="text",className:t="",isFocused:u=!1,...f},n){const o=r.useRef(null);return r.useImperativeHandle(n,()=>({focus:()=>{var e;return(e=o.current)==null?void 0:e.focus()}})),r.useEffect(()=>{var e;u&&((e=o.current)==null||e.focus())},[]),a("input",{...f,type:s,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+t,ref:o})});export{i as T};
