import{r as h,u as Te,g as cn,b as tt,a as Me,h as ys,j as o,N as Ke,f as U,i as Xr,k as Zr,d as Qr,e as ei,l as ws,c as ti,R as ni,m as q,n as si}from"./index-DPZmBc-g.js";import{C as $,U as bs,u as Is,S as ri,s as ii}from"./icon-sign-out-C8cdDpz1.js";const _s=""+new URL("icon-success-kJw2yUx5.png",import.meta.url).href,Je=""+new URL("icon-password-display-BJmCAie1.png",import.meta.url).href,Ye=""+new URL("icon-password-display-dark-B2VlshCc.png",import.meta.url).href,Xe=""+new URL("icon-password-hide-CGrP-8Gz.png",import.meta.url).href,Ze=""+new URL("icon-password-hide-dark-X9w8y7On.png",import.meta.url).href,ai=()=>{h.useEffect(()=>{document.title="Sign Up – ToDo App"},[]);const t=Te(),e=cn(),{loadUserProfile:n}=tt(),{theme:s}=Me(),[r,i]=h.useState(""),{username:a,setUsername:c,isUsernameFieldFocused:l,setIsUsernameFieldFocused:d,isUsernameValid:f,isSearchingUsername:p,isUsernameAvailable:u,setIsUsernameAvailable:v,usernameStatus:S,setUsernameStatus:x}=ys(),[g,I]=h.useState(""),[w,N]=h.useState(),[C,k]=h.useState(!0),[b,A]=h.useState(""),[M,B]=h.useState(),[z,Ne]=h.useState(!0),[Ae,W]=h.useState(!1),[_,D]=h.useState(""),[j,ee]=h.useState(),[Lt,Be]=h.useState(!0),[ot,ct]=h.useState(!1),[$e,oe]=h.useState(""),[lt,dt]=h.useState(!1),ce=m=>{const P=m.replace(/\s+/g," ");i(P)};h.useEffect(()=>{c(""),v(!1)},[]);const Ve=()=>{d(!1),x("")},Mt=m=>{oe(""),I(m.toLowerCase());const R=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(m);N(R)},ut=m=>{A(m);const R=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(m);B(R)},Pe=m=>{D(m),ee(m===b)},Re=async m=>{if(m.preventDefault(),!r||!a||!g||!b||!_){oe("All fields are required.");return}u||oe("Username already taken"),f&&u&&w&&M&&j&&(x(""),dt(!0),setTimeout(async()=>{try{await U.post("/api/signup",{fullName:r,username:a,email:g,password:b}),await n(),t("/all",{replace:!0})}catch(P){P.response?oe(P.response.data.error):oe("Something went wrong. Please try again later.")}finally{c(""),dt(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-6 flex max-w-[300px] min-w-[300px] flex-col gap-4",onSubmit:m=>{Re(m)},children:[$e&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:$e})}),u?o.jsx("div",{className:"text-success desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}):o.jsx("div",{className:"text-error desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}),o.jsx("div",{children:o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"fullName",className:"legend-base",children:"Full Name"}),o.jsx("input",{type:"text",id:"fullName",name:"fullName",autoComplete:"off",placeholder:"Enter your full name",onChange:m=>ce(m.target.value),onBlur:()=>i(r.trim()),value:r,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]})}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"username",className:"legend-base",children:"Username"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",placeholder:"Enter username",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>d(!0),onChange:m=>c(m.target.value),onBlur:()=>Ve(),value:a,maxLength:15,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),p&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),u&&o.jsx("img",{src:_s,className:"mr-3 h-[15px] w-[15px]"})]})]}),a&&!f&&!l&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 right-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"email",className:"legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>k(!0),onChange:m=>Mt(m.target.value),onBlur:()=>k(!1),value:g,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),g&&!w&&!C&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${Ae?"text":"password"}`,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>Ne(!0),onChange:m=>ut(m.target.value),onBlur:()=>Ne(!1),value:b,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:Ae?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:m=>m.preventDefault(),onClick:m=>{m.preventDefault();const P=document.getElementById("password"),R=P.selectionStart;W(ge=>!ge),setTimeout(()=>{P.setSelectionRange(R,R),P.focus()},0)}})]})]}),b&&!M&&!z&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${ot?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",placeholder:"Confirm your password",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>Be(!0),onChange:m=>Pe(m.target.value),onBlur:()=>Be(!1),value:_,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:ot?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:m=>m.preventDefault(),onClick:m=>{m.preventDefault();const P=document.getElementById("confirm-password"),R=P.selectionStart;ct(ge=>!ge),setTimeout(()=>{P.setSelectionRange(R,R),P.focus()},0)}})]})]}),_&&!j&&!Lt&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",children:lt?o.jsx($,{color:"#fff",size:24}):"Sign Up"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Already have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:m=>{m.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})};function oi(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}),o.jsx("div",{style:{width:24,height:24,borderRadius:"50%",border:"4px solid transparent",background:"conic-gradient(#4285F4, #34A853, #FBBC05, #EA4335, #4285F4)",WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",animation:"spin 1s linear infinite",margin:"auto"},"aria-label":"Loading"})]})}const ci=()=>{};var On={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},li=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,d=l?t[r+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let u=(c&15)<<2|d>>6,v=d&63;l||(v=64,a||(u=64)),s.push(n[f],n[p],n[u],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):li(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||d==null||p==null)throw new di;const u=i<<2|c>>4;if(s.push(u),d!==64){const v=c<<4&240|d>>2;if(s.push(v),p!==64){const S=d<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class di extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ui=function(t){const e=xs(t);return Ss.encodeByteArray(e,!0)},Es=function(t){return ui(t).replace(/\./g,"")},ks=function(t){try{return Ss.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=()=>hi().__FIREBASE_DEFAULTS__,pi=()=>{if(typeof process>"u"||typeof On>"u")return;const t=On.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ks(t[1]);return e&&JSON.parse(e)},ln=()=>{try{return ci()||fi()||pi()||mi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gi=t=>{var e,n;return(n=(e=ln())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ts=()=>{var t;return(t=ln())===null||t===void 0?void 0:t.config},Cs=t=>{var e;return(e=ln())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t.endsWith(".cloudworkstations.dev")}async function yi(t){return(await fetch(t,{credentials:"include"})).ok}const We={};function wi(){const t={prod:[],emulator:[]};for(const e of Object.keys(We))We[e]?t.emulator.push(e):t.prod.push(e);return t}function bi(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jn=!1;function Ns(t,e){if(typeof window>"u"||typeof document>"u"||!dn(window.location.host)||We[t]===e||We[t]||jn)return;We[t]=e;function n(u){return`__firebase__banner__${u}`}const s="__firebase__banner",i=wi().prod.length>0;function a(){const u=document.getElementById(s);u&&u.remove()}function c(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,v){u.setAttribute("width","24"),u.setAttribute("id",v),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{jn=!0,a()},u}function f(u,v){u.setAttribute("id",v),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function p(){const u=bi(s),v=n("text"),S=document.getElementById(v)||document.createElement("span"),x=n("learnmore"),g=document.getElementById(x)||document.createElement("a"),I=n("preprendIcon"),w=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const N=u.element;c(N),f(g,x);const C=d();l(w,I),N.append(w,S,g,C),document.body.appendChild(N)}i?(S.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ii(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function _i(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function As(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Si(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ps(){try{return typeof indexedDB=="object"}catch{return!1}}function Rs(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ei(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirebaseError";class Q extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ki,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ce.prototype.create)}}class Ce{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ti(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Q(r,c,s)}}function Ti(t,e){return t.replace(Ci,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ci=/\{\$([^}]+)}/g;function Ni(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xe(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(Ln(i)&&Ln(a)){if(!xe(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ln(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ai(t,e){const n=new Pi(t,e);return n.subscribe.bind(n)}class Pi{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ri(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$t),r.error===void 0&&(r.error=$t),r.complete===void 0&&(r.complete=$t);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ri(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $t(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,Oi=2,ji=4*60*60*1e3,Li=.5;function Mn(t,e=Di,n=Oi){const s=e*Math.pow(n,t),r=Math.round(Li*s*(Math.random()-.5)*2);return Math.min(ji,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class X{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fi(e))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=we){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=we){return this.instances.has(e)}getOptions(e=we){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ui(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=we){return this.component?this.component.multipleInstances?e:we:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ui(t){return t===we?void 0:t}function Fi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mi(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const $i={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},Vi=E.INFO,Hi={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},zi=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Hi[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class un{constructor(e){this.name=e,this._logLevel=Vi,this._logHandler=zi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const Wi=(t,e)=>e.some(n=>t instanceof n);let Un,Fn;function Gi(){return Un||(Un=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qi(){return Fn||(Fn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ds=new WeakMap,Zt=new WeakMap,Os=new WeakMap,Vt=new WeakMap,hn=new WeakMap;function Ki(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(fe(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ds.set(n,t)}).catch(()=>{}),hn.set(e,t),e}function Ji(t){if(Zt.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Zt.set(t,e)}let Qt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Os.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yi(t){Qt=t(Qt)}function Xi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ht(this),e,...n);return Os.set(s,e.sort?e.sort():[e]),fe(s)}:qi().includes(t)?function(...e){return t.apply(Ht(this),e),fe(Ds.get(this))}:function(...e){return fe(t.apply(Ht(this),e))}}function Zi(t){return typeof t=="function"?Xi(t):(t instanceof IDBTransaction&&Ji(t),Wi(t,Gi())?new Proxy(t,Qt):t)}function fe(t){if(t instanceof IDBRequest)return Ki(t);if(Vt.has(t))return Vt.get(t);const e=Zi(t);return e!==t&&(Vt.set(t,e),hn.set(e,t)),e}const Ht=t=>hn.get(t);function js(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=fe(a);return s&&a.addEventListener("upgradeneeded",l=>{s(fe(a.result),l.oldVersion,l.newVersion,fe(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Qi=["get","getKey","getAll","getAllKeys","count"],ea=["put","add","delete","clear"],zt=new Map;function Bn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zt.get(e))return zt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ea.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Qi.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&l.done]))[0]};return zt.set(e,i),i}Yi(t=>({...t,get:(e,n,s)=>Bn(e,n)||t.get(e,n,s),has:(e,n)=>!!Bn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(na(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function na(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const en="@firebase/app",$n="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new un("@firebase/app"),sa="@firebase/app-compat",ra="@firebase/analytics-compat",ia="@firebase/analytics",aa="@firebase/app-check-compat",oa="@firebase/app-check",ca="@firebase/auth",la="@firebase/auth-compat",da="@firebase/database",ua="@firebase/data-connect",ha="@firebase/database-compat",fa="@firebase/functions",pa="@firebase/functions-compat",ma="@firebase/installations",ga="@firebase/installations-compat",va="@firebase/messaging",ya="@firebase/messaging-compat",wa="@firebase/performance",ba="@firebase/performance-compat",Ia="@firebase/remote-config",_a="@firebase/remote-config-compat",xa="@firebase/storage",Sa="@firebase/storage-compat",Ea="@firebase/firestore",ka="@firebase/vertexai",Ta="@firebase/firestore-compat",Ca="firebase",Na="11.7.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]",Aa={[en]:"fire-core",[sa]:"fire-core-compat",[ia]:"fire-analytics",[ra]:"fire-analytics-compat",[oa]:"fire-app-check",[aa]:"fire-app-check-compat",[ca]:"fire-auth",[la]:"fire-auth-compat",[da]:"fire-rtdb",[ua]:"fire-data-connect",[ha]:"fire-rtdb-compat",[fa]:"fire-fn",[pa]:"fire-fn-compat",[ma]:"fire-iid",[ga]:"fire-iid-compat",[va]:"fire-fcm",[ya]:"fire-fcm-compat",[wa]:"fire-perf",[ba]:"fire-perf-compat",[Ia]:"fire-rc",[_a]:"fire-rc-compat",[xa]:"fire-gcs",[Sa]:"fire-gcs-compat",[Ea]:"fire-fst",[Ta]:"fire-fst-compat",[ka]:"fire-vertex","fire-js":"fire-js",[Ca]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Map,Pa=new Map,nn=new Map;function Vn(t,e){try{t.container.addComponent(e)}catch(n){re.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ie(t){const e=t.name;if(nn.has(e))return re.debug(`There were multiple attempts to register component ${e}.`),!1;nn.set(e,t);for(const n of _t.values())Vn(n,t);for(const n of Pa.values())Vn(n,t);return!0}function Ue(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function K(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new Ce("app","Firebase",Ra);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=Na;function Ls(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tn,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw pe.create("bad-app-name",{appName:String(r)});if(n||(n=Ts()),!n)throw pe.create("no-options");const i=_t.get(r);if(i){if(xe(n,i.options)&&xe(s,i.config))return i;throw pe.create("duplicate-app",{appName:r})}const a=new Bi(r);for(const l of nn.values())a.addComponent(l);const c=new Da(n,s,a);return _t.set(r,c),c}function Ms(t=tn){const e=_t.get(t);if(!e&&t===tn&&Ts())return Ls();if(!e)throw pe.create("no-app",{appName:t});return e}function J(t,e,n){var s;let r=(s=Aa[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),re.warn(c.join(" "));return}ie(new X(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="firebase-heartbeat-database",ja=1,Qe="firebase-heartbeat-store";let Wt=null;function Us(){return Wt||(Wt=js(Oa,ja,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qe)}catch(n){console.warn(n)}}}}).catch(t=>{throw pe.create("idb-open",{originalErrorMessage:t.message})})),Wt}async function La(t){try{const n=(await Us()).transaction(Qe),s=await n.objectStore(Qe).get(Fs(t));return await n.done,s}catch(e){if(e instanceof Q)re.warn(e.message);else{const n=pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});re.warn(n.message)}}}async function Hn(t,e){try{const s=(await Us()).transaction(Qe,"readwrite");await s.objectStore(Qe).put(e,Fs(t)),await s.done}catch(n){if(n instanceof Q)re.warn(n.message);else{const s=pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});re.warn(s.message)}}}function Fs(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=1024,Ua=30;class Fa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $a(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Ua){const a=Va(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){re.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zn(),{heartbeatsToSend:s,unsentEntries:r}=Ba(this._heartbeatsCache.heartbeats),i=Es(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return re.warn(n),""}}}function zn(){return new Date().toISOString().substring(0,10)}function Ba(t,e=Ma){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Wn(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Wn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $a{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ps()?Rs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await La(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wn(t){return Es(JSON.stringify({version:2,heartbeats:t})).length}function Va(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){ie(new X("platform-logger",e=>new ta(e),"PRIVATE")),ie(new X("heartbeat",e=>new Fa(e),"PRIVATE")),J(en,$n,t),J(en,$n,"esm2017"),J("fire-js","")}Ha("");var za="firebase",Wa="11.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J(za,Wa,"app");const Bs="@firebase/installations",fn="0.6.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=1e4,Vs=`w:${fn}`,Hs="FIS_v2",Ga="https://firebaseinstallations.googleapis.com/v1",qa=60*60*1e3,Ka="installations",Ja="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Se=new Ce(Ka,Ja,Ya);function zs(t){return t instanceof Q&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws({projectId:t}){return`${Ga}/projects/${t}/installations`}function Gs(t){return{token:t.token,requestStatus:2,expiresIn:Za(t.expiresIn),creationTime:Date.now()}}async function qs(t,e){const s=(await e.json()).error;return Se.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ks({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xa(t,{refreshToken:e}){const n=Ks(t);return n.append("Authorization",Qa(e)),n}async function Js(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Za(t){return Number(t.replace("s","000"))}function Qa(t){return`${Hs} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ws(t),r=Ks(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:n,authVersion:Hs,appId:t.appId,sdkVersion:Vs},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Js(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Gs(d.authToken)}}else throw await qs("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=/^[cdef][\w-]{21}$/,sn="";function so(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ro(t);return no.test(n)?n:sn}catch{return sn}}function ro(t){return to(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Map;function Zs(t,e){const n=Pt(t);Qs(n,e),io(n,e)}function Qs(t,e){const n=Xs.get(t);if(n)for(const s of n)s(e)}function io(t,e){const n=ao();n&&n.postMessage({key:t,fid:e}),oo()}let be=null;function ao(){return!be&&"BroadcastChannel"in self&&(be=new BroadcastChannel("[Firebase] FID Change"),be.onmessage=t=>{Qs(t.data.key,t.data.fid)}),be}function oo(){Xs.size===0&&be&&(be.close(),be=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="firebase-installations-database",lo=1,Ee="firebase-installations-store";let Gt=null;function pn(){return Gt||(Gt=js(co,lo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ee)}}})),Gt}async function xt(t,e){const n=Pt(t),r=(await pn()).transaction(Ee,"readwrite"),i=r.objectStore(Ee),a=await i.get(n);return await i.put(e,n),await r.done,(!a||a.fid!==e.fid)&&Zs(t,e.fid),e}async function er(t){const e=Pt(t),s=(await pn()).transaction(Ee,"readwrite");await s.objectStore(Ee).delete(e),await s.done}async function Rt(t,e){const n=Pt(t),r=(await pn()).transaction(Ee,"readwrite"),i=r.objectStore(Ee),a=await i.get(n),c=e(a);return c===void 0?await i.delete(n):await i.put(c,n),await r.done,c&&(!a||a.fid!==c.fid)&&Zs(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t){let e;const n=await Rt(t.appConfig,s=>{const r=uo(s),i=ho(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===sn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uo(t){const e=t||{fid:so(),registrationStatus:0};return tr(e)}function ho(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Se.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fo(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:po(t)}:{installationEntry:e}}async function fo(t,e){try{const n=await eo(t,e);return xt(t.appConfig,n)}catch(n){throw zs(n)&&n.customData.serverCode===409?await er(t.appConfig):await xt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function po(t){let e=await Gn(t.appConfig);for(;e.registrationStatus===1;)await Ys(100),e=await Gn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await mn(t);return s||n}return e}function Gn(t){return Rt(t,e=>{if(!e)throw Se.create("installation-not-found");return tr(e)})}function tr(t){return mo(t)?{fid:t.fid,registrationStatus:0}:t}function mo(t){return t.registrationStatus===1&&t.registrationTime+$s<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go({appConfig:t,heartbeatServiceProvider:e},n){const s=vo(t,n),r=Xa(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Vs,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Js(()=>fetch(s,c));if(l.ok){const d=await l.json();return Gs(d)}else throw await qs("Generate Auth Token",l)}function vo(t,{fid:e}){return`${Ws(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e=!1){let n;const s=await Rt(t.appConfig,i=>{if(!nr(i))throw Se.create("not-registered");const a=i.authToken;if(!e&&bo(a))return i;if(a.requestStatus===1)return n=yo(t,e),i;{if(!navigator.onLine)throw Se.create("app-offline");const c=_o(i);return n=wo(t,c),c}});return n?await n:s.authToken}async function yo(t,e){let n=await qn(t.appConfig);for(;n.authToken.requestStatus===1;)await Ys(100),n=await qn(t.appConfig);const s=n.authToken;return s.requestStatus===0?gn(t,e):s}function qn(t){return Rt(t,e=>{if(!nr(e))throw Se.create("not-registered");const n=e.authToken;return xo(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wo(t,e){try{const n=await go(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await xt(t.appConfig,s),n}catch(n){if(zs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await er(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xt(t.appConfig,s)}throw n}}function nr(t){return t!==void 0&&t.registrationStatus===2}function bo(t){return t.requestStatus===2&&!Io(t)}function Io(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qa}function _o(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xo(t){return t.requestStatus===1&&t.requestTime+$s<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){const e=t,{installationEntry:n,registrationPromise:s}=await mn(e);return s?s.catch(console.error):gn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t,e=!1){const n=t;return await ko(n),(await gn(n,e)).token}async function ko(t){const{registrationPromise:e}=await mn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(!t||!t.options)throw qt("App Configuration");if(!t.name)throw qt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qt(t){return Se.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="installations",Co="installations-internal",No=t=>{const e=t.getProvider("app").getImmediate(),n=To(e),s=Ue(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ao=t=>{const e=t.getProvider("app").getImmediate(),n=Ue(e,sr).getImmediate();return{getId:()=>So(n),getToken:r=>Eo(n,r)}};function Po(){ie(new X(sr,No,"PUBLIC")),ie(new X(Co,Ao,"PRIVATE"))}Po();J(Bs,fn);J(Bs,fn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="analytics",Ro="firebase_id",Do="origin",Oo=60*1e3,jo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new un("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},F=new Ce("analytics","Analytics",Lo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(!t.startsWith(vn)){const e=F.create("invalid-gtag-resource",{gtagURL:t});return L.warn(e.message),""}return t}function rr(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Uo(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Fo(t,e){const n=Uo("firebase-js-sdk-policy",{createScriptURL:Mo}),s=document.createElement("script"),r=`${vn}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Bo(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $o(t,e,n,s,r,i){const a=s[r];try{if(a)await e[a];else{const l=(await rr(n)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){L.error(c)}t("config",r,i)}async function Vo(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await rr(n);for(const l of a){const d=c.find(p=>p.measurementId===l),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){L.error(i)}}function Ho(t,e,n,s){async function r(i,...a){try{if(i==="event"){const[c,l]=a;await Vo(t,e,n,c,l)}else if(i==="config"){const[c,l]=a;await $o(t,e,n,s,c,l)}else if(i==="consent"){const[c,l]=a;t("consent",c,l)}else if(i==="get"){const[c,l,d]=a;t("get",c,l,d)}else if(i==="set"){const[c]=a;t("set",c)}else t(i,...a)}catch(c){L.error(c)}}return r}function zo(t,e,n,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Ho(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Wo(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vn)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=30,qo=1e3;class Ko{constructor(e={},n=qo){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ir=new Ko;function Jo(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Yo(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Jo(s)},i=jo.replace("{app-id}",n),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw F.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Xo(t,e=ir,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw F.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw F.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ec;return setTimeout(async()=>{c.abort()},Oo),ar({appId:s,apiKey:r,measurementId:i},a,c,e)}async function ar(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=ir){var i;const{appId:a,measurementId:c}=t;try{await Zo(s,e)}catch(l){if(c)return L.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Yo(t);return r.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!Qo(d)){if(r.deleteThrottleMetadata(a),c)return L.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw l}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Mn(n,r.intervalMillis,Go):Mn(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,p),L.debug(`Calling attemptFetch again in ${f} millis`),ar(t,p,s,r)}}function Zo(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(F.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qo(t){if(!(t instanceof Q)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ec{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tc(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,a=Object.assign(Object.assign({},s),{send_to:i});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(){if(Ps())try{await Rs()}catch(t){return L.warn(F.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return L.warn(F.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sc(t,e,n,s,r,i,a){var c;const l=Xo(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&L.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>L.error(v)),e.push(l);const d=nc().then(v=>{if(v)return s.getId()}),[f,p]=await Promise.all([l,d]);Wo(i)||Fo(i,f.measurementId),r("js",new Date);const u=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return u[Do]="firebase",u.update=!0,p!=null&&(u[Ro]=p),r("config",f.measurementId,u),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.app=e}_delete(){return delete Ge[this.app.options.appId],Promise.resolve()}}let Ge={},Kn=[];const Jn={};let Kt="dataLayer",ic="gtag",Yn,or,Xn=!1;function ac(){const t=[];if(As()&&t.push("This is a browser extension environment."),Ei()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=F.create("invalid-analytics-context",{errorInfo:e});L.warn(n.message)}}function oc(t,e,n){ac();const s=t.options.appId;if(!s)throw F.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)L.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw F.create("no-api-key");if(Ge[s]!=null)throw F.create("already-exists",{id:s});if(!Xn){Bo(Kt);const{wrappedGtag:i,gtagCore:a}=zo(Ge,Kn,Jn,Kt,ic);or=i,Yn=a,Xn=!0}return Ge[s]=sc(t,Kn,Jn,e,Yn,Kt,n),new rc(t)}function cc(t=Ms()){t=me(t);const e=Ue(t,St);return e.isInitialized()?e.getImmediate():lc(t)}function lc(t,e={}){const n=Ue(t,St);if(n.isInitialized()){const r=n.getImmediate();if(xe(e,n.getOptions()))return r;throw F.create("already-initialized")}return n.initialize({options:e})}function dc(t,e,n,s){t=me(t),tc(or,Ge[t.app.options.appId],e,n,s).catch(r=>L.error(r))}const Zn="@firebase/analytics",Qn="0.10.15";function uc(){ie(new X(St,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return oc(s,r,n)},"PUBLIC")),ie(new X("analytics-internal",t,"PRIVATE")),J(Zn,Qn),J(Zn,Qn,"esm2017");function t(e){try{const n=e.getProvider(St).getImmediate();return{logEvent:(s,r,i)=>dc(n,s,r,i)}}catch(n){throw F.create("interop-component-reg-failed",{reason:n})}}}uc();function yn(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function cr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hc=cr,lr=new Ce("auth","Firebase",cr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new un("@firebase/auth");function fc(t,...e){Et.logLevel<=E.WARN&&Et.warn(`Auth (${st}): ${t}`,...e)}function yt(t,...e){Et.logLevel<=E.ERROR&&Et.error(`Auth (${st}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,...e){throw bn(t,...e)}function H(t,...e){return bn(t,...e)}function wn(t,e,n){const s=Object.assign(Object.assign({},hc()),{[e]:n});return new Ce("auth","Firebase",s).create(e,{appName:t.name})}function _e(t){return wn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pc(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Z(t,"argument-error"),wn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bn(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lr.create(t,...e)}function y(t,e,...n){if(!t)throw bn(e,...n)}function ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yt(e),new Error(e)}function ae(t,e){t||ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mc(){return es()==="http:"||es()==="https:"}function es(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mc()||As()||"connection"in navigator)?navigator.onLine:!0}function vc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ae(n>e,"Short delay should be less than long delay!"),this.isMobile=Ii()||xi()}get(){return gc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bc=new rt(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fe(t,e,n,s,r={}){return ur(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=nt(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},i);return _i()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&dn(t.emulatorConfig.host)&&(d.credentials="include"),dr.fetch()(await hr(t,t.config.apiHost,n,c),d)})}async function ur(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},yc),e);try{const r=new _c(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw gt(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw gt(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw gt(t,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw wn(t,f,d);Z(t,f)}}catch(r){if(r instanceof Q)throw r;Z(t,"network-request-failed",{message:String(r)})}}async function Ic(t,e,n,s,r={}){const i=await Fe(t,e,n,s,r);return"mfaPendingCredential"in i&&Z(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function hr(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?In(t.config,r):`${t.config.apiScheme}://${r}`;return wc.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class _c{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(H(this.auth,"network-request-failed")),bc.get())})}}function gt(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=H(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(t,e){return Fe(t,"POST","/v1/accounts:delete",e)}async function kt(t,e){return Fe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sc(t,e=!1){const n=me(t),s=await n.getIdToken(e),r=xn(s);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:qe(Jt(r.auth_time)),issuedAtTime:qe(Jt(r.iat)),expirationTime:qe(Jt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jt(t){return Number(t)*1e3}function xn(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yt("JWT malformed, contained fewer than 3 sections"),null;try{const r=ks(n);return r?JSON.parse(r):(yt("Failed to decode base64 JWT payload"),null)}catch(r){return yt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ts(t){const e=xn(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Q&&Ec(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ec({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qe(this.lastLoginAt),this.creationTime=qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t){var e;const n=t.auth,s=await t.getIdToken(),r=await et(t,kt(n,{idToken:s}));y(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fr(i.providerUserInfo):[],c=Cc(t.providerData,a),l=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new an(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Tc(t){const e=me(t);await Tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cc(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fr(t){return t.map(e=>{var{providerId:n}=e,s=yn(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t,e){const n=await ur(t,{},async()=>{const s=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await hr(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",dr.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ac(t,e){return Fe(t,"POST","/v2/accounts:revokeToken",_n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ts(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){y(e.length!==0,"internal-error");const n=ts(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Nc(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new De;return s&&(y(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(y(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new De,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class V{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=yn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new an(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sc(this,e)}reload(){return Tc(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Tt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(_e(this.auth));const e=await this.getIdToken();return await et(this,xc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,a,c,l,d,f;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,u=(r=n.email)!==null&&r!==void 0?r:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(c=n.tenantId)!==null&&c!==void 0?c:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:C,isAnonymous:k,providerData:b,stsTokenManager:A}=n;y(N&&A,e,"internal-error");const M=De.fromJSON(this.name,A);y(typeof N=="string",e,"internal-error"),le(p,e.name),le(u,e.name),y(typeof C=="boolean",e,"internal-error"),y(typeof k=="boolean",e,"internal-error"),le(v,e.name),le(S,e.name),le(x,e.name),le(g,e.name),le(I,e.name),le(w,e.name);const B=new V({uid:N,auth:e,email:u,emailVerified:C,displayName:p,isAnonymous:k,photoURL:S,phoneNumber:v,tenantId:x,stsTokenManager:M,createdAt:I,lastLoginAt:w});return b&&Array.isArray(b)&&(B.providerData=b.map(z=>Object.assign({},z))),g&&(B._redirectEventId=g),B}static async _fromIdTokenResponse(e,n,s=!1){const r=new De;r.updateFromServerResponse(n);const i=new V({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Tt(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];y(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?fr(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new De;c.updateFromIdToken(s);const l=new V({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new an(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map;function se(t){ae(t instanceof Function,"Expected a class definition");let e=ns.get(t);return e?(ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ns.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pr.type="NONE";const ss=pr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e,n){return`firebase:${t}:${e}:${n}`}class Oe{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=wt(this.userKey,r.apiKey,i),this.fullPersistenceKey=wt("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kt(this.auth,{idToken:e}).catch(()=>{});return n?V._fromGetAccountInfoResponse(this.auth,n,e):null}return V._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Oe(se(ss),e,s);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||se(ss);const a=wt(s,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(a);if(f){let p;if(typeof f=="string"){const u=await kt(e,{idToken:f}).catch(()=>{});if(!u)break;p=await V._fromGetAccountInfoResponse(e,u,f)}else p=V._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Oe(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Oe(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(br(e))return"Blackberry";if(Ir(e))return"Webos";if(gr(e))return"Safari";if((e.includes("chrome/")||vr(e))&&!e.includes("edge/"))return"Chrome";if(wr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mr(t=O()){return/firefox\//i.test(t)}function gr(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vr(t=O()){return/crios\//i.test(t)}function yr(t=O()){return/iemobile/i.test(t)}function wr(t=O()){return/android/i.test(t)}function br(t=O()){return/blackberry/i.test(t)}function Ir(t=O()){return/webos/i.test(t)}function Sn(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pc(t=O()){var e;return Sn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rc(){return Si()&&document.documentMode===10}function _r(t=O()){return Sn(t)||wr(t)||Ir(t)||br(t)||/windows phone/i.test(t)||yr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e=[]){let n;switch(t){case"Browser":n=rs(O());break;case"Worker":n=`${rs(O())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${st}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(t,e={}){return Fe(t,"GET","/v2/passwordPolicy",_n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=6;class Lc{constructor(e){var n,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:jc,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new is(this),this.idTokenSubscription=new is(this),this.beforeStateQueue=new Dc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=se(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Oe.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kt(this,{idToken:e}),s=await V._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(K(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(_e(this));const n=e?me(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(_e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(_e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oc(this),n=new Lc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ce("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ac(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&se(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await Oe.create(this,[se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(K(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(t){return me(t)}class is{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ai(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uc(t){En=t}function Fc(t){return En.loadJS(t)}function Bc(){return En.gapiScript}function $c(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e){const n=Ue(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(xe(i,e??{}))return r;Z(r,"already-initialized")}return n.initialize({options:e})}function Hc(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(se);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zc(t,e,n){const s=Dt(t);y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Sr(e),{host:a,port:c}=Wc(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),y(xe(d,s.config.emulator)&&xe(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,dn(a)?(Ns("Auth",!0),yi(`${i}//${a}${l}`)):Gc()}function Sr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wc(t){const e=Sr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:as(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:as(a)}}}function as(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ne("not implemented")}_getIdTokenResponse(e){return ne("not implemented")}_linkToIdToken(e,n){return ne("not implemented")}_getReauthenticationResolver(e){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t,e){return Ic(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="http://localhost";class ke extends Er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Z("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=yn(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new ke(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return je(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,je(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,je(e,n)}buildRequest(){const e={requestUri:qc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends it{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends it{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ke._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return te.credential(n,s)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends it{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.GITHUB_SIGN_IN_METHOD="github.com";ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends it{constructor(){super("twitter.com")}static credential(e,n){return ke._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return he.credential(n,s)}catch{return null}}}he.TWITTER_SIGN_IN_METHOD="twitter.com";he.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await V._fromIdTokenResponse(e,s,r),a=os(s);return new Le({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=os(s);return new Le({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function os(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Q{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ct(e,n,s,r)}}function kr(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ct._fromErrorAndOperation(t,i,e,s):i})}async function Kc(t,e,n=!1){const s=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Le._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t,e,n=!1){const{auth:s}=t;if(K(s.app))return Promise.reject(_e(s));const r="reauthenticate";try{const i=await et(t,kr(s,r,e,t),n);y(i.idToken,s,"internal-error");const a=xn(i.idToken);y(a,s,"internal-error");const{sub:c}=a;return y(t.uid===c,s,"user-mismatch"),Le._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Z(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(t,e,n=!1){if(K(t.app))return Promise.reject(_e(t));const s="signIn",r=await kr(t,s,e),i=await Le._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Xc(t,e,n,s){return me(t).onIdTokenChanged(e,n,s)}function Zc(t,e,n){return me(t).beforeAuthStateChanged(e,n)}const Nt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=1e3,el=10;class Cr extends Tr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_r(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Rc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,el):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Qc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cr.type="LOCAL";const tl=Cr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Tr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nr.type="SESSION";const Ar=Nr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ot(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(n.origin,i)),l=await nl(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ot.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Tn("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(p){const u=p;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(u.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return window}function rl(t){Y().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return typeof Y().WorkerGlobalScope<"u"&&typeof Y().importScripts=="function"}async function il(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function al(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ol(){return Pr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="firebaseLocalStorageDb",cl=1,At="firebaseLocalStorage",Dr="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jt(t,e){return t.transaction([At],e?"readwrite":"readonly").objectStore(At)}function ll(){const t=indexedDB.deleteDatabase(Rr);return new at(t).toPromise()}function on(){const t=indexedDB.open(Rr,cl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(At,{keyPath:Dr})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(At)?e(s):(s.close(),await ll(),e(await on()))})})}async function cs(t,e,n){const s=jt(t,!0).put({[Dr]:e,value:n});return new at(s).toPromise()}async function dl(t,e){const n=jt(t,!1).get(e),s=await new at(n).toPromise();return s===void 0?null:s.value}function ls(t,e){const n=jt(t,!0).delete(e);return new at(n).toPromise()}const ul=800,hl=3;class Or{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await on(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>hl)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(ol()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await il(),!this.activeServiceWorker)return;this.sender=new sl(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||al()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await on();return await cs(e,Nt,"1"),await ls(e,Nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>cs(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dl(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ls(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jt(r,!1).getAll();return new at(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ul)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Or.type="LOCAL";const fl=Or;new rt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){return e?se(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return je(e,this._buildIdpRequest())}_linkToIdToken(e,n){return je(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return je(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pl(t){return Yc(t.auth,new Cn(t),t.bypassAuthState)}function ml(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Jc(n,new Cn(t),t.bypassAuthState)}async function gl(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Kc(n,new Cn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pl;case"linkViaPopup":case"linkViaRedirect":return gl;case"reauthViaPopup":case"reauthViaRedirect":return ml;default:Z(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new rt(2e3,1e4);async function yl(t,e,n){if(K(t.app))return Promise.reject(H(t,"operation-not-supported-in-this-environment"));const s=Dt(t);pc(t,e,kn);const r=jr(s,n);return new Ie(s,"signInViaPopup",e,r).executeNotNull()}class Ie extends Lr{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=Tn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(H(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vl.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="pendingRedirect",bt=new Map;class bl extends Lr{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const s=await Il(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Il(t,e){const n=Sl(e),s=xl(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function _l(t,e){bt.set(t._key(),e)}function xl(t){return se(t._redirectPersistence)}function Sl(t){return wt(wl,t.config.apiKey,t.name)}async function El(t,e,n=!1){if(K(t.app))return Promise.reject(_e(t));const s=Dt(t),r=jr(s,e),a=await new bl(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=10*60*1e3;class Tl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Mr(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(H(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kl&&this.cachedEventUids.clear(),this.cachedEventUids.has(ds(e))}saveEventToCache(e){this.cachedEventUids.add(ds(e)),this.lastProcessedEventTime=Date.now()}}function ds(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mr(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t,e={}){return Fe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pl=/^https?/;async function Rl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nl(t);for(const n of e)try{if(Dl(n))return}catch{}Z(t,"unauthorized-domain")}function Dl(t){const e=rn(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Pl.test(n))return!1;if(Al.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new rt(3e4,6e4);function us(){const t=Y().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jl(t){return new Promise((e,n)=>{var s,r,i;function a(){us(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{us(),n(H(t,"network-request-failed"))},timeout:Ol.get()})}if(!((r=(s=Y().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Y().gapi)===null||i===void 0)&&i.load)a();else{const c=$c("iframefcb");return Y()[c]=()=>{gapi.load?a():n(H(t,"network-request-failed"))},Fc(`${Bc()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw It=null,e})}let It=null;function Ll(t){return It=It||jl(t),It}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new rt(5e3,15e3),Ul="__/auth/iframe",Fl="emulator/auth/iframe",Bl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$l=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vl(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?In(e,Fl):`https://${t.config.authDomain}/${Ul}`,s={apiKey:e.apiKey,appName:t.name,v:st},r=$l.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${nt(s).slice(1)}`}async function Hl(t){const e=await Ll(t),n=Y().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Vl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bl,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=H(t,"network-request-failed"),c=Y().setTimeout(()=>{i(a)},Ml.get());function l(){Y().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wl=500,Gl=600,ql="_blank",Kl="http://localhost";class hs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jl(t,e,n,s=Wl,r=Gl){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},zl),{width:s.toString(),height:r.toString(),top:i,left:a}),d=O().toLowerCase();n&&(c=vr(d)?ql:n),mr(d)&&(e=e||Kl,l.scrollbars="yes");const f=Object.entries(l).reduce((u,[v,S])=>`${u}${v}=${S},`,"");if(Pc(d)&&c!=="_self")return Yl(e||"",c),new hs(null);const p=window.open(e||"",c,f);y(p,t,"popup-blocked");try{p.focus()}catch{}return new hs(p)}function Yl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="__/auth/handler",Zl="emulator/auth/handler",Ql=encodeURIComponent("fac");async function fs(t,e,n,s,r,i){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:st,eventId:r};if(e instanceof kn){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ni(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof it){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),d=l?`#${Ql}=${encodeURIComponent(l)}`:"";return`${ed(t)}?${nt(c).slice(1)}${d}`}function ed({config:t}){return t.emulator?In(t,Zl):`https://${t.authDomain}/${Xl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="webStorageSupport";class td{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=El,this._overrideRedirectResult=_l}async _openPopup(e,n,s,r){var i;ae((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fs(e,n,s,rn(),r);return Jl(e,a,Tn())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await fs(e,n,s,rn(),r);return rl(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ae(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Hl(e),s=new Tl(e);return n.register("authEvent",r=>(y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yt,{type:Yt},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Yt];a!==void 0&&n(!!a),Z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _r()||gr()||Sn()}}const nd=td;var ps="@firebase/auth",ms="1.10.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function id(t){ie(new X("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;y(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xr(t)},d=new Mc(s,r,i,l);return Hc(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ie(new X("auth-internal",e=>{const n=Dt(e.getProvider("auth").getImmediate());return(s=>new sd(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),J(ps,ms,rd(t)),J(ps,ms,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=5*60,od=Cs("authIdTokenMaxAge")||ad;let gs=null;const cd=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>od)return;const r=n==null?void 0:n.token;gs!==r&&(gs=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ld(t=Ms()){const e=Ue(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vc(t,{popupRedirectResolver:nd,persistence:[fl,tl,Ar]}),s=Cs("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=cd(i.toString());Zc(n,a,()=>a(n.currentUser)),Xc(n,c=>a(c))}}const r=gi("auth");return r?zc(n,`http://${r}`):Ns("Auth",!1),n}function dd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Uc({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=H("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",dd().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});id("Browser");const ud={apiKey:"AIzaSyDPJPxSGMriB5JTSfe5WgmCoaOsnHNfKIw",authDomain:"todo-app-9076d.firebaseapp.com",projectId:"todo-app-9076d",storageBucket:"todo-app-9076d.firebasestorage.app",messagingSenderId:"186858367833",appId:"1:186858367833:web:caa17c7d22ac27b111ba48",measurementId:"G-PSKSKTK9N9"},Ur=Ls(ud);cc(Ur);const hd=ld(Ur),fd=new te,pd="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2024%2024'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.5.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20141)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20url(%23radial-gradient);%20}%20.st2%20{%20fill:%20url(%23linear-gradient);%20}%20.st3%20{%20fill:%20%23fc4c53;%20}%20.st4%20{%20fill:%20url(%23radial-gradient1);%20}%20.st5%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3cpath%20class='st0'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3c/clipPath%3e%3cradialGradient%20id='radial-gradient'%20cx='1.4787'%20cy='12.7883'%20fx='1.4787'%20fy='12.7883'%20r='9.6555'%20gradientTransform='translate(2.4587%20-.293)%20scale(.8032%201.0842)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.368'%20stop-color='%23ffcf09'/%3e%3cstop%20offset='.7176'%20stop-color='%23ffcf09'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%23ffcf09'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='radial-gradient1'%20cx='14.2953'%20cy='23.2909'%20fx='14.2953'%20fy='23.2909'%20r='11.8784'%20gradientTransform='translate(-3.434%20-.6716)%20scale(1.3272%201.0073)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.3827'%20stop-color='%2334a853'/%3e%3cstop%20offset='.7062'%20stop-color='%2334a853'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%2334a853'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='linear-gradient'%20x1='23.5582'%20y1='6.2864'%20x2='12.1477'%20y2='20.2993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.6711'%20stop-color='%234285f4'/%3e%3cstop%20offset='.8852'%20stop-color='%234285f4'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='st3'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3cg%20class='st5'%3e%3cellipse%20class='st1'%20cx='3.6464'%20cy='13.5725'%20rx='7.7549'%20ry='10.4689'/%3e%3cellipse%20class='st4'%20cx='15.5383'%20cy='22.7886'%20rx='15.7646'%20ry='11.9647'%20transform='translate(-2.7047%202.1016)%20rotate(-7.1197)'/%3e%3cpolygon%20class='st2'%20points='11.1048%208.2797%2011.5957%2013.8759%2012.2191%2017.6234%2019.5807%2024.4713%2028.1881%208.5742%2011.1048%208.2797'/%3e%3c/g%3e%3c/svg%3e",md=()=>{var k;h.useEffect(()=>{document.title="Sign In – ToDo App"},[]);const t=Xr(),e=(k=t.state)==null?void 0:k.message,{loadUserProfile:n}=tt(),{theme:s}=Me(),[r,i]=h.useState(e||""),[a,c]=h.useState(""),[l,d]=h.useState(""),[f,p]=h.useState(""),[u,v]=h.useState(!1),[S,x]=h.useState(!1),[g,I]=h.useState(!1),w=Te();h.useEffect(()=>{var b;(b=t.state)!=null&&b.message&&(i(t.state.message),w(t.pathname,{replace:!0}))},[t,w]),h.useEffect(()=>{if(r){const b=setTimeout(()=>{i("")},4e3);return()=>clearTimeout(b)}},[r]);const N=async b=>{if(b.preventDefault(),!a||!l){p("Enter user details.");return}a&&l&&(p(""),v(!0)),setTimeout(async()=>{try{await U.post("/api/signin",{usernameOrEmail:a,password:l}),await n(),w("/all",{replace:!0})}catch(A){A.response?p(A.response.data.error||"Sign In failed"):p("Network error")}finally{v(!1)}},1e3)},C=async()=>{try{x(!0);const M=await(await yl(hd,fd)).user.getIdToken();await U.post("/api/firebase-signin",{token:M}),await n(),p(""),w("/all",{replace:!0})}catch(b){console.error("Google sign-in error:",b),p("Google sign-in failed. Please try again.")}finally{x(!1)}};return o.jsxs("div",{className:"app-text-medium",children:[r&&o.jsx("div",{className:"text-error desktop:mb-2 mb-2 w-full text-center font-semibold",children:o.jsx("p",{children:r})}),o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-9 flex max-w-[300px] flex-col gap-4",onSubmit:b=>N(b),children:[f&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto mb-1 w-full text-center",children:o.jsx("p",{children:f})}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"usernameOrEmail",className:"legend-base",children:"Username or Email"}),o.jsx("input",{type:"text",id:"usernameOrEmail",name:"usernameOrEmail",autoComplete:"off",required:!0,placeholder:"Enter username or email",onChange:b=>c(b.target.value),value:a,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${g?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter Password",onChange:b=>d(b.target.value),value:l,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:g?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:b=>b.preventDefault(),onClick:b=>{b.preventDefault();const A=document.getElementById("password"),M=A.selectionStart;I(B=>!B),setTimeout(()=>{A.setSelectionRange(M,M),A.focus()},0)}})]})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",type:"submit",children:u?o.jsx($,{color:"#fff",size:24}):"Sign In"})]}),o.jsx("p",{className:"desktop:my-4 my-2 text-center",children:"Or"}),o.jsx("div",{className:"mx-auto max-w-[300px]",children:o.jsx("button",{onClick:C,className:"darkborder-gray-300 flex w-full cursor-pointer items-center justify-center gap-3 rounded-[5px] border border-black py-3.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",type:"button",children:S?o.jsx(oi,{}):o.jsxs(o.Fragment,{children:[o.jsx("img",{src:pd,alt:"Google logo",className:"mb-1 h-5 w-5"}),"Sign in with Google"]})})}),o.jsx("div",{className:"mt-4 flex items-center justify-center",children:o.jsx(Ke,{to:"/todo-app/forget-password",className:"text-gradient-link font-bold",onClick:b=>{b.preventDefault(),w("/forget-password",{replace:!0})},children:"Forgot password?"})}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Don't have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-up",className:"text-gradient-link font-bold",onClick:b=>{b.preventDefault(),w("/sign-up",{replace:!0})},children:"Sign Up"})]})]})},gd=()=>{h.useEffect(()=>{document.title="Forgot Password – ToDo App"},[]);const t=Te(),[e,n]=h.useState(""),[s,r]=h.useState(),[i,a]=h.useState(!0),[c,l]=h.useState(""),[d,f]=h.useState(!1),[p,u]=h.useState(!1),v=x=>{l(""),n(x.toLowerCase());const I=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(x);r(I)},S=async x=>{x.preventDefault(),e||l("Please enter your email"),s&&(f(!0),l(""),setTimeout(async()=>{try{await U.post("/api/forgot-password",{email:e}),u(!0)}catch(g){g.response?l(g.response.data.error):l("Something went wrong. Please try again later.")}finally{f(!1)}},1e3))};return o.jsxs("div",{className:`${p?"bg-gray-300 dark:bg-gray-900":""} app-text-medium flex h-screen items-center justify-center`,children:[!p&&o.jsxs("div",{className:"relative",children:[o.jsx("h1",{className:"text-gradient-heading app-text-large-tight mb-18 text-center",children:"Forgot Password?"}),c&&o.jsx("div",{className:"absolute top-13 w-full text-center",children:o.jsx("p",{className:"text-error",children:c})}),o.jsx("p",{className:"text-18 tracking-negative-17 font-weight-regular mb-6 max-w-[300px] text-center leading-18",children:"Enter your email address below and we'll send you a link to reset your password:"}),o.jsxs("form",{className:"mx-auto max-w-[300px]",onSubmit:x=>S(x),children:[o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:`${e?i||s?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"email",className:" legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:x=>{x.key===" "&&x.preventDefault()},onFocus:()=>a(!0),onChange:x=>v(x.target.value),onBlur:()=>a(!1),value:e,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"})]}),e&&!s&&!i&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsx("button",{className:"button-gradient mt-8 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",type:"submit",children:d?o.jsx($,{color:"#fff",size:24}):"Send reset link"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Back to"}),o.jsx(Ke,{to:"/sign-in",onClick:x=>{x.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]}),p&&o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"app-text-large-tight text-success mb-6",children:"Success!"}),o.jsx("p",{children:"If this email is registered, you will receive a reset link."})]})]})},vd=()=>{const t=Te(),e=cn(),{theme:n}=Me(),[s,r]=h.useState(""),[i,a]=h.useState(),[c,l]=h.useState(!0),[d,f]=h.useState(!1),[p,u]=h.useState(""),[v,S]=h.useState(),[x,g]=h.useState(!0),[I,w]=h.useState(!1),[N,C]=h.useState(""),[k,b]=h.useState(!1),[A,M]=h.useState(!1);h.useEffect(()=>{document.title="Reset Password – ToDo App"},[]);const[B]=Zr(),z=B.get("token");h.useEffect(()=>{z||t("/sign-in",{replace:!0})},[z,t]);const Ne=_=>{r(_);const j=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(_);a(j)},Ae=_=>{u(_),S(_===s)},W=async _=>{if(_.preventDefault(),!s||!p){C("All fields are required.");return}i&&v&&(b(!0),C(""),setTimeout(async()=>{try{await U.post("/api/reset-password",{token:z,newPassword:s}),M(!0)}catch(D){D.response?C(D.response.data.error):C("Something went wrong. Please try again later.")}finally{b(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[!A&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center",children:[o.jsx("h1",{children:o.jsx("span",{className:"text-gradient-heading app-text-large-tight",children:"Reset Your Password"})}),o.jsxs("form",{onSubmit:_=>W(_),className:"relative max-w-[300px] min-w-[300px]",children:[N&&o.jsx("div",{className:"absolute top-4 w-full text-center",children:o.jsx("p",{className:"text-error",children:N})}),o.jsxs("div",{className:"relative mt-18",children:[o.jsxs("fieldset",{className:`${s?c||i?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${d?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter password",onKeyDown:_=>{_.key===" "&&_.preventDefault()},onFocus:()=>l(!0),onChange:_=>Ne(_.target.value),onBlur:()=>l(!1),value:s,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:d?n==="dark"?Ye:Je:n==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:_=>_.preventDefault(),onClick:_=>{_.preventDefault();const D=document.getElementById("password"),j=D.selectionStart;f(ee=>!ee),setTimeout(()=>{D.setSelectionRange(j,j),D.focus()},0)}})]})]}),s&&!i&&!c&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{className:"relative mt-4",children:[o.jsxs("fieldset",{className:`${p?x||v?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${I?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",required:!0,placeholder:"Confirm your password",onKeyDown:_=>{_.key===" "&&_.preventDefault()},onFocus:()=>g(!0),onChange:_=>Ae(_.target.value),onBlur:()=>g(!1),value:p,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:I?n==="dark"?Ye:Je:n==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:_=>_.preventDefault(),onClick:_=>{_.preventDefault();const D=document.getElementById("confirm-password"),j=D.selectionStart;w(ee=>!ee),setTimeout(()=>{D.setSelectionRange(j,j),D.focus()},0)}})]})]}),p&&!v&&!x&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-10 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",children:k?o.jsx($,{color:"#fff",size:24}):"Reset Password"})]})]}),A&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center text-center",children:[o.jsx("h1",{className:"app-text-large-tight",children:o.jsx("span",{className:"text-success",children:"Password changed successfully!"})}),o.jsx("p",{className:"mt-6",children:"You can now sign in with your new password."}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Go to"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:_=>{_.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})]})},yd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e",wd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='9'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%20d='M1%204.304L3.696%207l6-6'/%3e%3c/svg%3e",bd=""+new URL("icon-drag-light-CeQdmhq9.svg",import.meta.url).href,Id=""+new URL("icon-drag-dark-V_WBwAmt.svg",import.meta.url).href,_d=({input:t,isChecked:e,id:n,setDraggedId:s,handleDrop:r,toggleToDoCheckedStatus:i,clearToDoById:a})=>{const{theme:c}=Me();return o.jsx("li",{draggable:!0,onDragStart:l=>{s(n),l.target.classList.add("dragging")},onDragOver:l=>l.preventDefault(),onDrop:()=>{r(n)},onDragEnd:l=>{l.target.classList.remove("dragging")},className:"bg-gray-50 dark:bg-gray-900",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between px-5 py-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:c==="dark"?Id:bd,className:"desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-grab"}),o.jsx("div",{className:"radio-btn desktop:h-6 desktop:w-6 box-border flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700",style:e?{backgroundImage:"var(--color-gradient-check)",border:0}:{},onClick:()=>i(n),id:n,children:e&&o.jsx("img",{src:wd})}),o.jsx("p",{className:` ${c==="dark"?e?"text-gray-600 line-through":"":e?"text-gray-400 line-through":""}`,children:t})]}),o.jsx("img",{src:yd,alt:"Cross Icon",onClick:()=>a(n),className:"desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-pointer"})]}),o.jsx("div",{className:"h-[1px] border-1 border-gray-300 dark:border-gray-700"})]})})},Xt=()=>{const{allToDos:t,activeToDos:e,completedToDos:n,setUpdatedToDos:s,setReorderedToDoList:r}=Qr(),{currentPath:i,toDos:a}=ei(),{userProfile:c}=tt(),l=c==null?void 0:c.email,[d,f]=h.useState("");let p,u;h.useEffect(()=>{document.title="All ToDos – ToDo App"},[]);const v=g=>{if(d===null||d===g)return;const I=a.map(k=>k.toDoId),w=I.findIndex(k=>k===d),N=I.findIndex(k=>k===g);if(w===-1||N===-1)return;const C=[...I];C[w]=g,C[N]=d,p=C.map(k=>a.find(b=>b.toDoId===k)),r({list:[...p],path:i}),u=JSON.stringify({currentPath:i,email:l,draggedId:d,droppedId:g}),U.post("/api/todos-reorder",{currentPath:i,email:l,draggedId:d,droppedId:g}).catch(()=>{if(navigator.sendBeacon){const k=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/todos-reorder",k)}}),f("")},S=g=>{p=t.map(w=>w.toDoId===g?{...w,isChecked:!w.isChecked}:w),s([...p]);const I=p.find(w=>w.toDoId===g);I&&(u=JSON.stringify({email:l,toggledId:I.toDoId,isChecked:I.isChecked}),U.post("/api/update-todo-status",{email:l,toggledId:I.toDoId,isChecked:I.isChecked}).catch(()=>{if(navigator.sendBeacon){const w=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/update-todo-status",w)}}))},x=g=>{p=t.filter(I=>I.toDoId!==g),s([...p]),u=JSON.stringify({email:l,deletedId:g}),U.post("/api/delete-todo-item",{email:l,deletedId:g}).catch(()=>{if(navigator.sendBeacon){const I=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/delete-todo-item",I)}})};return o.jsx("ul",{children:a.map((g,I)=>o.jsx(_d,{input:g.toDo,id:g.toDoId,isChecked:g.isChecked,setDraggedId:f,handleDrop:v,toggleToDoCheckedStatus:S,clearToDoById:x},g.toDoId))})};function xd(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}),o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",border:"4px solid transparent",borderTop:"4px solid",borderImageSlice:1,borderImageSource:"var(--color-gradient-button)",animation:"spin 1s linear infinite"}})]})}const Sd=({setIsProfilePictureUploadMenu:t,onImageChange:e})=>{const{profilePictureURL:n,previewImage:s,setPreviewImage:r,setImageToUpload:i,isProfilePictureChanged:a,setIsProfilePictureChanged:c,setNoProfilePicture:l}=ws(),[d,f]=h.useState(!1),p=h.useRef(null),u=g=>{const I=g.target.files[0];I&&I.type.startsWith("image/")&&(s&&URL.revokeObjectURL(s),i(I),r(URL.createObjectURL(I)),c(!0),console.log(I)),g.target.value=""},v=()=>{if(f(!0),s){setTimeout(()=>{URL.revokeObjectURL(s),r(""),i(""),c(!0),f(!1)},1500);return}if(n){setTimeout(()=>{r(bs),l(!0),c(!0),f(!1)},1500);return}c(!1),t(!1)},S=()=>{c(!1),s?(f(!0),setTimeout(()=>{e(),f(!1),t(!1)},1500)):setTimeout(()=>{e(),t(!1)},500)},x=()=>{c(!1),t(!1)};return o.jsxs("div",{className:"profile-picture-upload-menu app-text-medium mx-auto max-w-[400px] rounded-[5px] px-4 py-5 ",children:[o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"relative h-32 w-32 overflow-hidden rounded-full",children:[o.jsx("img",{src:s||n,className:"h-full w-full object-cover",alt:"Profile Picture"}),d&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})})]}),o.jsxs("div",{className:"flex flex-col gap-4 dark:text-black",children:[o.jsx("label",{htmlFor:"profile-upload",className:"upload-button-gradient cursor-pointer rounded-[5px] p-3",children:"Upload Image"}),o.jsx("input",{type:"file",id:"profile-upload",accept:"image/*",ref:p,className:"hidden",onChange:g=>u(g)}),o.jsx("button",{className:"remove-button-gradient cursor-pointer rounded-[5px] p-3",onClick:()=>v(),children:"Remove Image"})]})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>x(),children:"Cancel"}),o.jsx("button",{className:`save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 ${a?"":"opacity-65"}`,onClick:()=>S(),children:"Save"})]}),o.jsx("div",{children:o.jsx("p",{className:"app-text-small mt-5 text-center text-gray-500 italic",children:"Supported formats: JPG, PNG, WEBP — Max size: 2MB"})})]})};async function Ed(t,e,n,s){var r,i,a;try{const c=await U.post("/api/delete-account",{email:t,username:e});return s(),sessionStorage.clear(),c.status===200?(n("/sign-in",{state:{message:"Account deleted successfully"}}),""):((r=c.data)==null?void 0:r.error)||"Failed to delete account"}catch(c){return((a=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:a.error)||"Something went wrong"}}const kd=({setDeleteConfirmation:t,setUsernameAuthentication:e})=>{const n=Te(),{userProfile:s}=tt(),r=s==null?void 0:s.email,i=Is(),[a,c]=h.useState(""),[l,d]=h.useState(""),[f,p]=h.useState(!1),u=async()=>{p(!0),setTimeout(async()=>{if(a&&a.length>=3){const v=await Ed(r,a,n,i);v&&d(v),p(!1)}else p(!1),d("Enter your username")},1e3)};return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-20 mb-8 flex gap-2 font-bold",children:"Confirm your username"}),o.jsx("p",{children:"Please confirm your username to permanently delete your account."}),o.jsx("p",{className:"mt-4",children:"This step is required for security reasons."})]}),o.jsxs("div",{className:"mt-4 flex items-center",children:[o.jsxs("fieldset",{className:"border-light-grayish-blue desktop:max-w-[300px] flex max-w-[200px] flex-grow flex-col rounded-[5px] border-1",children:[o.jsx("legend",{htmlFor:"username",className:"mb-1 ml-3"}),o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",minLength:"3",maxLength:"15",placeholder:"Enter username to proceed",onChange:v=>c(v.target.value),value:a,className:"rounded-[5px] py-2 pl-3 outline-none"})]}),l&&o.jsxs("p",{className:"text-error mt-1 ml-2",children:[l,"!"]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>{e(!1),t(!1)},children:"Cancel"}),o.jsx("button",{className:`deleteAccount-button-gradient desktop:max-h-[42px] desktop:min-w-[255px] max-h-[38px] min-w-[163px] flex-grow cursor-pointer rounded-[5px] p-3 ${a.length>=3?"":"opacity-55"}`,onClick:()=>{u()},children:f?o.jsx($,{color:"#fff",size:16}):"Proceed"})]})]})},Fr=""+new URL("icon-bin-DCZtocnW.png",import.meta.url).href,Td=""+new URL("icon-bin-dark-By_I2TUT.png",import.meta.url).href,Cd=({setDeleteConfirmation:t})=>{const{theme:e}=Me(),[n,s]=h.useState(!1);return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"mb-8 flex items-center gap-2 font-bold",children:[o.jsx("img",{src:e==="dark"?Td:Fr,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account?"]}),o.jsx("p",{children:"Are you sure you want to permanently delete your account?"}),o.jsx("p",{className:"mt-4 font-bold",children:"This action cannot be undone and will erase all your data."})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>t(!1),children:"Cancel"}),o.jsx("button",{className:"deleteAccount-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>{s(!0)},children:"Yes, delete my account"})]}),n&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(kd,{setDeleteConfirmation:t,setUsernameAuthentication:s})})]})},Nd=""+new URL("icon-camera-CKSg84tl.svg",import.meta.url).href,vs=""+new URL("icon-edit-light-Cb_IW_6S.png",import.meta.url).href,vt=""+new URL("icon-edit-dark-Bqd0IM0l.png",import.meta.url).href,Ad=()=>{const t=Te(),e=cn(),n=Is(),s=sessionStorage.getItem("wasSignedIn"),{theme:r}=Me(),{isSignedOut:i,setIsSignedOut:a}=ti(),{userProfile:c,loadUserProfile:l,isUserProfileLoading:d}=tt(),[f,p]=h.useState(""),[u,v]=h.useState(""),[S,x]=h.useState(!1),[g,I]=h.useState(""),[w,N]=h.useState(""),[C,k]=h.useState(!1),{username:b,setUsername:A,isUsernameFieldFocused:M,setIsUsernameFieldFocused:B,isUsernameValid:z,isSearchingUsername:Ne,setIsSearchingUsername:Ae,isUsernameAvailable:W,setIsUsernameAvailable:_,usernameStatus:D,setUsernameStatus:j}=ys(),[ee,Lt]=h.useState(""),{profilePictureURL:Be,setProfilePictureURL:ot,previewImage:ct,setPreviewImage:$e,imageToUpload:oe,setImageToUpload:lt,noProfilePicture:dt}=ws(),[ce,Ve]=h.useState(!1),[Mt,ut]=h.useState(!1),[Pe,Re]=h.useState(!1),[m,P]=h.useState(!1),[R,ge]=h.useState(!1),[He,Ut]=h.useState(!1),[Br,Nn]=h.useState(!1),[ht,An]=h.useState(!1),[$r,ft]=h.useState(!1),[pt,ve]=h.useState(""),[Pn,G]=h.useState(!1),[Vr,Rn]=h.useState(!1),[Hr,Dn]=h.useState(!1),Ft=h.useRef(null),Bt=h.useRef(null);h.useEffect(()=>{s||t("/sign-in",{replace:!0}),document.title="Profile – ToDo App"},[]),h.useEffect(()=>{p((c==null?void 0:c.fullName)||""),I((c==null?void 0:c.username)||""),Lt((c==null?void 0:c.email)||""),ot((c==null?void 0:c.profilePicture)||bs)},[c]);const zr=()=>{Ve(!0)},Wr=async()=>{var ze,ye;G(!0);const T=new FormData;T.append("email",c.email),T.append("newProfilePicture",oe);try{(await U.post("/api/new-profile-picture",T,{headers:{"Content-Type":"multipart/form-data"}})).status===200&&(await l(),G(!1),Re(!1))}catch(mt){G(!1),console.log(mt),console.log(((ye=(ze=mt.response)==null?void 0:ze.data)==null?void 0:ye.error)||"An error occurred during upload.")}},Gr=async()=>{var T,ze;try{G(!0);const ye=c.email;(await U.post("/api/remove-profile-picture",{email:ye})).status===200&&(await l(),G(!1),Re(!1))}catch(ye){G(!1),console.log(ye),console.log(((ze=(T=ye.response)==null?void 0:T.data)==null?void 0:ze.error)||"An error occurred during upload.")}};h.useEffect(()=>{v(f),N(g)},[f,g]);const qr=()=>{Rn(!1),P(!0),ft(!1),ve("")};h.useEffect(()=>{Ft.current&&R&&Ft.current.focus()},[R]),h.useEffect(()=>{Bt.current&&He&&Bt.current.focus()},[He,z]),h.useEffect(()=>{Nn(R||Pe)},[R,Pe]),h.useEffect(()=>{x(u!==f),k(w!==g)},[ce,u,w,f,g]),h.useEffect(()=>{An(S||C||ce)},[ce,S,C,f,g]),h.useEffect(()=>{w!==g?A(w):(A(""),Ae(!1),_(!1),j(""))},[w,g]);const Kr=()=>{Ut(!1),B(!1),j("")},Jr=async()=>{if(ht){if(ce&&oe&&(await Wr(),ve("updated successfully.")),dt&&(await Gr(),ve("updated successfully.")),S)try{const T=await U.post("/api/update-user/full-name",{fullName:u,email:ee});await l(),ve(T.data.message)}catch(T){console.log(T),G(!1),ft(!1),ve(res.data.error),P(!1)}if(C)if(W)try{const T=await U.post("/api/update-user/username",{newUsername:w,email:ee});await l(),ve(T.data.message)}catch(T){console.log(T),G(!1),ft(!1),ve(res.data.error),P(!1)}else j("username already taken.");G(!1),Ve(!1),$e(""),lt(""),A(""),ft(!0),An(!1),P(!1)}},Yr=()=>{Rn(!0),Ve(!1),$e(""),lt(""),A(""),P(!1),_(!1),ge(!1),Ut(!1),Nn(!1),x(!1),k(!1),v(f),N(g)};return o.jsxs("div",{className:"app-text-medium relative bg-gray-300 dark:bg-gray-800",children:[d?o.jsxs("div",{className:"flex h-screen w-full items-center justify-center",children:[o.jsx(xd,{})," "]}):o.jsxs("div",{className:"mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center",children:[o.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-5",children:[o.jsx("div",{className:"flex w-full justify-center",children:o.jsxs("div",{className:`relative h-32 w-32 ${m?"cursor-pointer":""} overflow-hidden rounded-full`,children:[o.jsx("img",{src:!Pe&&ce&&ct?ct:Be,className:"h-full",alt:"Profile Picture",onMouseEnter:()=>ut(!0),onMouseLeave:()=>ut(!1),onClick:()=>{m&&Re(!0)}}),ce&&Pn&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})}),m&&Mt&&o.jsx("div",{className:"pointer-events-none absolute bottom-0 flex h-[35%] w-full items-center justify-center rounded-b-full bg-black opacity-60",children:o.jsx("img",{src:Nd,className:"h-6 w-6"})})]})}),ht&&W&&o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:D})}),ht&&!W&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:D})}),pt&&$r?o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:pt})}):pt&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:pt})}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Name:"}),o.jsxs("div",{onClick:()=>{m&&ge(!0)},className:`fullNameEditable ${R?"active":""} flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Ft,type:"text",onChange:T=>v(T.target.value),value:u,className:`${m?"cursor-text":"cursor-default"} outline-none`,readOnly:!R,onBlur:()=>ge(!1)}),m&&!R&&o.jsx("img",{src:vt,className:"mr-3 h-3 w-3"})]})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Username:"}),o.jsxs("div",{onClick:()=>{m&&Ut(!0)},className:`usernameEditable ${He?"active border-b-1":""} relative flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Bt,name:"username",autoComplete:"off",type:"text",onFocus:()=>B(!0),onChange:T=>N(T.target.value),onBlur:()=>Kr(),value:w,readOnly:!He,onKeyDown:T=>{T.key===" "&&T.preventDefault()},maxLength:15,className:`${m?"cursor-text":"cursor-default"} outline-none`}),m&&!He&&!W&&o.jsx("img",{src:vt,className:"mr-3 h-3 w-3"}),Ne&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),W&&o.jsx("img",{src:_s,className:"mr-3 h-[15px] w-[15px]"})]}),m&&b&&!z&&!M&&!Br&&!Vr&&o.jsx("div",{className:`${e>=1440?"absolute":""} right-[-320px] bottom-0`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Email:"}),o.jsx("input",{type:"text",value:ee,className:"border-b-1 outline-none dark:border-gray-700",disabled:!0})]}),!m&&o.jsx("div",{onClick:()=>qr(),className:`absolute top-0 cursor-pointer ${e>1440?"right-[-100px]":"right-[-30px]"} rounded-[100px] p-[2px]`,style:{background:"var(--color-gradient-button)"},children:e>1440?o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-2 pt-3 pb-2 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:["Edit Profile",o.jsx("img",{src:r==="dark"?vt:vs,className:"h-3 w-3",alt:""})]}):o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-white px-3 pt-2 pb-1 font-bold text-white dark:bg-gray-700",children:["Edit",o.jsx("img",{src:r==="dark"?vt:vs,className:"h-2 w-2",alt:""})]})})]}),m?o.jsxs("div",{className:"mt-10 flex w-full items-center justify-between gap-4 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-1 cursor-pointer rounded-[5px] py-3",onClick:()=>{Yr()},children:"Cancel"}),o.jsx("button",{className:`save-button-gradient desktop:max-h-[42px] max-h-[38px] flex-1 cursor-pointer rounded-[5px] py-3 ${ht&&(!C||w&&W)&&(!S||u)?"":"opacity-20"}`,onClick:()=>{G(!0),setTimeout(()=>{Jr()},1e3)},children:Pn?o.jsx($,{color:"#fff",size:22}):"Save Changes"})]}):o.jsxs("div",{className:"w-full",children:[o.jsxs("button",{onClick:T=>{T.stopPropagation(),a(!0),setTimeout(()=>{ii(t,n),a(!1)},1e3)},className:"signOut-button-gradient mt-10 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-4 font-bold dark:text-black",children:[i?o.jsx($,{color:"#fff",size:24}):"Sign Out",!i&&o.jsx("img",{src:ri,className:"hover-cursor-pointer h-5 w-5"})]}),o.jsxs("button",{onClick:()=>{Dn(!0)},className:"deleteAccount-button-gradient mt-4 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-3.5 font-bold dark:text-black",children:[o.jsx("img",{src:Fr,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account"]})]})]}),Pe&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Sd,{setIsProfilePictureUploadMenu:Re,profileImage:Be,onImageChange:zr})}),Hr&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Cd,{setDeleteConfirmation:Dn})})]})},Pd=()=>{const t=Te();return o.jsxs("div",{className:"app-text-medium flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-700 dark:bg-black dark:text-gray-400",style:{fontFamily:"var(--font-josefinSans)"},children:[o.jsx("h1",{className:"app-text-large-tight text-gradient-heading mb-4 font-bold",children:"404"}),o.jsx("p",{className:"text-18 mb-6 leading-20",children:"Oops! The page you’re looking for doesn’t exist."}),o.jsx("button",{onClick:()=>t("/all",{replace:!0}),className:"button-gradient cursor-pointer rounded-[5px] px-6 py-3 font-bold text-black hover:opacity-90",children:"Go to Home page"})]})},Od=({})=>o.jsxs(ni,{children:[o.jsx(q,{path:"/",element:o.jsx(si,{to:"/all",replace:!0})}),o.jsx(q,{path:"/sign-up",element:o.jsx(ai,{})}),o.jsx(q,{path:"/sign-in",element:o.jsx(md,{})}),o.jsx(q,{path:"/forget-password",element:o.jsx(gd,{})}),o.jsx(q,{path:"/reset-password",element:o.jsx(vd,{})}),o.jsx(q,{path:"/all",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/active",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/completed",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/profile",element:o.jsx(Ad,{})}),o.jsx(q,{path:"*",element:o.jsx(Pd,{})})]});export{Od as default};
