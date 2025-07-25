import{r as u,u as Ce,g as on,b as tt,a as Ue,h as ws,j as o,N as Ke,f as M,i as Yr,k as Xr,d as Zr,e as Qr,l as ys,c as ei,R as ti,m as G,n as ni}from"./index-Xln3jr_4.js";import{C as $,U as vs,u as bs,S as si,s as ri}from"./icon-sign-out-Dq31ezMk.js";const Is=""+new URL("icon-success-kJw2yUx5.png",import.meta.url).href,Je=""+new URL("icon-password-display-BJmCAie1.png",import.meta.url).href,Ye=""+new URL("icon-password-display-dark-B2VlshCc.png",import.meta.url).href,Xe=""+new URL("icon-password-hide-CGrP-8Gz.png",import.meta.url).href,Ze=""+new URL("icon-password-hide-dark-X9w8y7On.png",import.meta.url).href,ii=()=>{u.useEffect(()=>{document.title="Sign Up – ToDo App"},[]);const t=Ce(),e=on(),{loadUserProfile:n}=tt(),{theme:s}=Ue(),[r,i]=u.useState(""),{username:a,setUsername:c,isUsernameFieldFocused:l,setIsUsernameFieldFocused:d,isUsernameValid:f,isSearchingUsername:p,isUsernameAvailable:h,setIsUsernameAvailable:m,usernameStatus:S,setUsernameStatus:y}=ws(),[I,_]=u.useState(""),[N,C]=u.useState(),[v,A]=u.useState(!0),[T,F]=u.useState(""),[Q,z]=u.useState(),[ee,Ae]=u.useState(!0),[B,Pe]=u.useState(!1),[b,P]=u.useState(""),[D,we]=u.useState(),[ot,ct]=u.useState(!0),[$e,lt]=u.useState(!1),[Ve,le]=u.useState(""),[jt,te]=u.useState(!1),He=g=>{const k=g.replace(/\s+/g," ");i(k)};u.useEffect(()=>{c(""),m(!1)},[]);const Lt=()=>{d(!1),y("")},dt=g=>{le(""),_(g.toLowerCase());const L=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(g);C(L)},Re=g=>{F(g);const L=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(g);z(L)},De=g=>{P(g),we(g===T)},O=async g=>{if(g.preventDefault(),!r||!a||!I||!T||!b){le("All fields are required.");return}h||le("Username already taken"),f&&h&&N&&Q&&D&&(y(""),te(!0),setTimeout(async()=>{try{await M.post("/api/signup",{fullName:r,username:a,email:I,password:T}),await n(),t("/all",{replace:!0})}catch(k){k.response?le(k.response.data.error):le("Something went wrong. Please try again later.")}finally{c(""),te(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-6 flex max-w-[300px] min-w-[300px] flex-col gap-4",onSubmit:g=>{O(g)},children:[Ve&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:Ve})}),h?o.jsx("div",{className:"text-success desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}):o.jsx("div",{className:"text-error desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}),o.jsx("div",{children:o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"fullName",className:"legend-base",children:"Full Name"}),o.jsx("input",{type:"text",id:"fullName",name:"fullName",autoComplete:"off",placeholder:"Enter your full name",onChange:g=>He(g.target.value),onBlur:()=>i(r.trim()),value:r,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]})}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"username",className:"legend-base",children:"Username"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",placeholder:"Enter username",onKeyDown:g=>{g.key===" "&&g.preventDefault()},onFocus:()=>d(!0),onChange:g=>c(g.target.value),onBlur:()=>Lt(),value:a,maxLength:15,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),p&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),h&&o.jsx("img",{src:Is,className:"mr-3 h-[15px] w-[15px]"})]})]}),a&&!f&&!l&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 right-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"email",className:"legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:g=>{g.key===" "&&g.preventDefault()},onFocus:()=>A(!0),onChange:g=>dt(g.target.value),onBlur:()=>A(!1),value:I,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),I&&!N&&!v&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${B?"text":"password"}`,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",onKeyDown:g=>{g.key===" "&&g.preventDefault()},onFocus:()=>Ae(!0),onChange:g=>Re(g.target.value),onBlur:()=>Ae(!1),value:T,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:B?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:g=>g.preventDefault(),onClick:g=>{g.preventDefault();const k=document.getElementById("password"),L=k.selectionStart;Pe(ne=>!ne),setTimeout(()=>{k.setSelectionRange(L,L),k.focus()},0)}})]})]}),T&&!Q&&!ee&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${$e?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",placeholder:"Confirm your password",onKeyDown:g=>{g.key===" "&&g.preventDefault()},onFocus:()=>ct(!0),onChange:g=>De(g.target.value),onBlur:()=>ct(!1),value:b,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:$e?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:g=>g.preventDefault(),onClick:g=>{g.preventDefault();const k=document.getElementById("confirm-password"),L=k.selectionStart;lt(ne=>!ne),setTimeout(()=>{k.setSelectionRange(L,L),k.focus()},0)}})]})]}),b&&!D&&!ot&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",children:jt?o.jsx($,{color:"#fff",size:24}):"Sign Up"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Already have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:g=>{g.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})},ai=()=>{};var Dn={};/**
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
 */const _s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},oi=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,d=l?t[r+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let h=(c&15)<<2|d>>6,m=d&63;l||(m=64,a||(h=64)),s.push(n[f],n[p],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||d==null||p==null)throw new ci;const h=i<<2|c>>4;if(s.push(h),d!==64){const m=c<<4&240|d>>2;if(s.push(m),p!==64){const S=d<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ci extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const li=function(t){const e=_s(t);return xs.encodeByteArray(e,!0)},Ss=function(t){return li(t).replace(/\./g,"")},Es=function(t){try{return xs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function di(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ui=()=>di().__FIREBASE_DEFAULTS__,hi=()=>{if(typeof process>"u"||typeof Dn>"u")return;const t=Dn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Es(t[1]);return e&&JSON.parse(e)},cn=()=>{try{return ai()||ui()||hi()||fi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pi=t=>{var e,n;return(n=(e=cn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ts=()=>{var t;return(t=cn())===null||t===void 0?void 0:t.config},ks=t=>{var e;return(e=cn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ln(t){return t.endsWith(".cloudworkstations.dev")}async function gi(t){return(await fetch(t,{credentials:"include"})).ok}const We={};function wi(){const t={prod:[],emulator:[]};for(const e of Object.keys(We))We[e]?t.emulator.push(e):t.prod.push(e);return t}function yi(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let On=!1;function Cs(t,e){if(typeof window>"u"||typeof document>"u"||!ln(window.location.host)||We[t]===e||We[t]||On)return;We[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=wi().prod.length>0;function a(){const h=document.getElementById(s);h&&h.remove()}function c(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function d(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{On=!0,a()},h}function f(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function p(){const h=yi(s),m=n("text"),S=document.getElementById(m)||document.createElement("span"),y=n("learnmore"),I=document.getElementById(y)||document.createElement("a"),_=n("preprendIcon"),N=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const C=h.element;c(C),f(I,y);const v=d();l(N,_),C.append(N,S,I,v),document.body.appendChild(C)}i?(S.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function R(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())}function bi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ns(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ii(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _i(){const t=R();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function As(){try{return typeof indexedDB=="object"}catch{return!1}}function Ps(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function xi(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Si="FirebaseError";class Z extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Si,Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ne.prototype.create)}}class Ne{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ei(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Z(r,c,s)}}function Ei(t,e){return t.replace(Ti,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ti=/\{\$([^}]+)}/g;function ki(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Se(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(jn(i)&&jn(a)){if(!Se(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function jn(t){return t!==null&&typeof t=="object"}/**
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
 */function nt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ci(t,e){const n=new Ni(t,e);return n.subscribe.bind(n)}class Ni{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ai(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Bt),r.error===void 0&&(r.error=Bt),r.complete===void 0&&(r.complete=Bt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ai(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bt(){}/**
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
 */const Pi=1e3,Ri=2,Di=4*60*60*1e3,Oi=.5;function Ln(t,e=Pi,n=Ri){const s=e*Math.pow(n,t),r=Math.round(Oi*s*(Math.random()-.5)*2);return Math.min(Di,s+r)}/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class Y{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const be="[DEFAULT]";/**
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
 */class ji{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mi(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Li(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Li(t){return t===be?void 0:t}function Mi(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ui{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ji(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const Fi={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Bi=x.INFO,$i={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Vi=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$i[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dn{constructor(e){this.name=e,this._logLevel=Bi,this._logHandler=Vi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Hi=(t,e)=>e.some(n=>t instanceof n);let Mn,Un;function zi(){return Mn||(Mn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wi(){return Un||(Un=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rs=new WeakMap,Xt=new WeakMap,Ds=new WeakMap,$t=new WeakMap,un=new WeakMap;function Gi(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(pe(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Rs.set(n,t)}).catch(()=>{}),un.set(e,t),e}function qi(t){if(Xt.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Xt.set(t,e)}let Zt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ds.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ki(t){Zt=t(Zt)}function Ji(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vt(this),e,...n);return Ds.set(s,e.sort?e.sort():[e]),pe(s)}:Wi().includes(t)?function(...e){return t.apply(Vt(this),e),pe(Rs.get(this))}:function(...e){return pe(t.apply(Vt(this),e))}}function Yi(t){return typeof t=="function"?Ji(t):(t instanceof IDBTransaction&&qi(t),Hi(t,zi())?new Proxy(t,Zt):t)}function pe(t){if(t instanceof IDBRequest)return Gi(t);if($t.has(t))return $t.get(t);const e=Yi(t);return e!==t&&($t.set(t,e),un.set(e,t)),e}const Vt=t=>un.get(t);function Os(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=pe(a);return s&&a.addEventListener("upgradeneeded",l=>{s(pe(a.result),l.oldVersion,l.newVersion,pe(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Xi=["get","getKey","getAll","getAllKeys","count"],Zi=["put","add","delete","clear"],Ht=new Map;function Fn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ht.get(e))return Ht.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Zi.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xi.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&l.done]))[0]};return Ht.set(e,i),i}Ki(t=>({...t,get:(e,n,s)=>Fn(e,n)||t.get(e,n,s),has:(e,n)=>!!Fn(e,n)||t.has(e,n)}));/**
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
 */class Qi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ea(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ea(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qt="@firebase/app",Bn="0.12.3";/**
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
 */const ae=new dn("@firebase/app"),ta="@firebase/app-compat",na="@firebase/analytics-compat",sa="@firebase/analytics",ra="@firebase/app-check-compat",ia="@firebase/app-check",aa="@firebase/auth",oa="@firebase/auth-compat",ca="@firebase/database",la="@firebase/data-connect",da="@firebase/database-compat",ua="@firebase/functions",ha="@firebase/functions-compat",fa="@firebase/installations",pa="@firebase/installations-compat",ma="@firebase/messaging",ga="@firebase/messaging-compat",wa="@firebase/performance",ya="@firebase/performance-compat",va="@firebase/remote-config",ba="@firebase/remote-config-compat",Ia="@firebase/storage",_a="@firebase/storage-compat",xa="@firebase/firestore",Sa="@firebase/vertexai",Ea="@firebase/firestore-compat",Ta="firebase",ka="11.7.3";/**
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
 */const en="[DEFAULT]",Ca={[Qt]:"fire-core",[ta]:"fire-core-compat",[sa]:"fire-analytics",[na]:"fire-analytics-compat",[ia]:"fire-app-check",[ra]:"fire-app-check-compat",[aa]:"fire-auth",[oa]:"fire-auth-compat",[ca]:"fire-rtdb",[la]:"fire-data-connect",[da]:"fire-rtdb-compat",[ua]:"fire-fn",[ha]:"fire-fn-compat",[fa]:"fire-iid",[pa]:"fire-iid-compat",[ma]:"fire-fcm",[ga]:"fire-fcm-compat",[wa]:"fire-perf",[ya]:"fire-perf-compat",[va]:"fire-rc",[ba]:"fire-rc-compat",[Ia]:"fire-gcs",[_a]:"fire-gcs-compat",[xa]:"fire-fst",[Ea]:"fire-fst-compat",[Sa]:"fire-vertex","fire-js":"fire-js",[Ta]:"fire-js-all"};/**
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
 */const It=new Map,Na=new Map,tn=new Map;function $n(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oe(t){const e=t.name;if(tn.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;tn.set(e,t);for(const n of It.values())$n(n,t);for(const n of Na.values())$n(n,t);return!0}function Fe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function q(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Aa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new Ne("app","Firebase",Aa);/**
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
 */class Pa{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
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
 */const st=ka;function js(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw me.create("bad-app-name",{appName:String(r)});if(n||(n=Ts()),!n)throw me.create("no-options");const i=It.get(r);if(i){if(Se(n,i.options)&&Se(s,i.config))return i;throw me.create("duplicate-app",{appName:r})}const a=new Ui(r);for(const l of tn.values())a.addComponent(l);const c=new Pa(n,s,a);return It.set(r,c),c}function Ls(t=en){const e=It.get(t);if(!e&&t===en&&Ts())return js();if(!e)throw me.create("no-app",{appName:t});return e}function K(t,e,n){var s;let r=(s=Ca[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(c.join(" "));return}oe(new Y(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ra="firebase-heartbeat-database",Da=1,Qe="firebase-heartbeat-store";let zt=null;function Ms(){return zt||(zt=Os(Ra,Da,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qe)}catch(n){console.warn(n)}}}}).catch(t=>{throw me.create("idb-open",{originalErrorMessage:t.message})})),zt}async function Oa(t){try{const n=(await Ms()).transaction(Qe),s=await n.objectStore(Qe).get(Us(t));return await n.done,s}catch(e){if(e instanceof Z)ae.warn(e.message);else{const n=me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(n.message)}}}async function Vn(t,e){try{const s=(await Ms()).transaction(Qe,"readwrite");await s.objectStore(Qe).put(e,Us(t)),await s.done}catch(n){if(n instanceof Z)ae.warn(n.message);else{const s=me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ae.warn(s.message)}}}function Us(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ja=1024,La=30;class Ma{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fa(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>La){const a=Ba(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ae.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hn(),{heartbeatsToSend:s,unsentEntries:r}=Ua(this._heartbeatsCache.heartbeats),i=Ss(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ae.warn(n),""}}}function Hn(){return new Date().toISOString().substring(0,10)}function Ua(t,e=ja){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),zn(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return As()?Ps().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Oa(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Vn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zn(t){return Ss(JSON.stringify({version:2,heartbeats:t})).length}function Ba(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function $a(t){oe(new Y("platform-logger",e=>new Qi(e),"PRIVATE")),oe(new Y("heartbeat",e=>new Ma(e),"PRIVATE")),K(Qt,Bn,t),K(Qt,Bn,"esm2017"),K("fire-js","")}$a("");var Va="firebase",Ha="11.7.3";/**
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
 */K(Va,Ha,"app");const Fs="@firebase/installations",hn="0.6.16";/**
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
 */const Bs=1e4,$s=`w:${hn}`,Vs="FIS_v2",za="https://firebaseinstallations.googleapis.com/v1",Wa=60*60*1e3,Ga="installations",qa="Installations";/**
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
 */const Ka={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new Ne(Ga,qa,Ka);function Hs(t){return t instanceof Z&&t.code.includes("request-failed")}/**
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
 */function zs({projectId:t}){return`${za}/projects/${t}/installations`}function Ws(t){return{token:t.token,requestStatus:2,expiresIn:Ya(t.expiresIn),creationTime:Date.now()}}async function Gs(t,e){const s=(await e.json()).error;return Ee.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ja(t,{refreshToken:e}){const n=qs(t);return n.append("Authorization",Xa(e)),n}async function Ks(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ya(t){return Number(t.replace("s","000"))}function Xa(t){return`${Vs} ${t}`}/**
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
 */async function Za({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=zs(t),r=qs(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:n,authVersion:Vs,appId:t.appId,sdkVersion:$s},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Ks(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ws(d.authToken)}}else throw await Gs("Create Installation",l)}/**
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
 */function Js(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Qa(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eo=/^[cdef][\w-]{21}$/,nn="";function to(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=no(t);return eo.test(n)?n:nn}catch{return nn}}function no(t){return Qa(t).substr(0,22)}/**
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
 */function At(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ys=new Map;function Xs(t,e){const n=At(t);Zs(n,e),so(n,e)}function Zs(t,e){const n=Ys.get(t);if(n)for(const s of n)s(e)}function so(t,e){const n=ro();n&&n.postMessage({key:t,fid:e}),io()}let Ie=null;function ro(){return!Ie&&"BroadcastChannel"in self&&(Ie=new BroadcastChannel("[Firebase] FID Change"),Ie.onmessage=t=>{Zs(t.data.key,t.data.fid)}),Ie}function io(){Ys.size===0&&Ie&&(Ie.close(),Ie=null)}/**
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
 */const ao="firebase-installations-database",oo=1,Te="firebase-installations-store";let Wt=null;function fn(){return Wt||(Wt=Os(ao,oo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Te)}}})),Wt}async function _t(t,e){const n=At(t),r=(await fn()).transaction(Te,"readwrite"),i=r.objectStore(Te),a=await i.get(n);return await i.put(e,n),await r.done,(!a||a.fid!==e.fid)&&Xs(t,e.fid),e}async function Qs(t){const e=At(t),s=(await fn()).transaction(Te,"readwrite");await s.objectStore(Te).delete(e),await s.done}async function Pt(t,e){const n=At(t),r=(await fn()).transaction(Te,"readwrite"),i=r.objectStore(Te),a=await i.get(n),c=e(a);return c===void 0?await i.delete(n):await i.put(c,n),await r.done,c&&(!a||a.fid!==c.fid)&&Xs(t,c.fid),c}/**
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
 */async function pn(t){let e;const n=await Pt(t.appConfig,s=>{const r=co(s),i=lo(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===nn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function co(t){const e=t||{fid:to(),registrationStatus:0};return er(e)}function lo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ee.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=uo(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ho(t)}:{installationEntry:e}}async function uo(t,e){try{const n=await Za(t,e);return _t(t.appConfig,n)}catch(n){throw Hs(n)&&n.customData.serverCode===409?await Qs(t.appConfig):await _t(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ho(t){let e=await Wn(t.appConfig);for(;e.registrationStatus===1;)await Js(100),e=await Wn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pn(t);return s||n}return e}function Wn(t){return Pt(t,e=>{if(!e)throw Ee.create("installation-not-found");return er(e)})}function er(t){return fo(t)?{fid:t.fid,registrationStatus:0}:t}function fo(t){return t.registrationStatus===1&&t.registrationTime+Bs<Date.now()}/**
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
 */async function po({appConfig:t,heartbeatServiceProvider:e},n){const s=mo(t,n),r=Ja(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:$s,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Ks(()=>fetch(s,c));if(l.ok){const d=await l.json();return Ws(d)}else throw await Gs("Generate Auth Token",l)}function mo(t,{fid:e}){return`${zs(t)}/${e}/authTokens:generate`}/**
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
 */async function mn(t,e=!1){let n;const s=await Pt(t.appConfig,i=>{if(!tr(i))throw Ee.create("not-registered");const a=i.authToken;if(!e&&yo(a))return i;if(a.requestStatus===1)return n=go(t,e),i;{if(!navigator.onLine)throw Ee.create("app-offline");const c=bo(i);return n=wo(t,c),c}});return n?await n:s.authToken}async function go(t,e){let n=await Gn(t.appConfig);for(;n.authToken.requestStatus===1;)await Js(100),n=await Gn(t.appConfig);const s=n.authToken;return s.requestStatus===0?mn(t,e):s}function Gn(t){return Pt(t,e=>{if(!tr(e))throw Ee.create("not-registered");const n=e.authToken;return Io(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wo(t,e){try{const n=await po(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await _t(t.appConfig,s),n}catch(n){if(Hs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qs(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _t(t.appConfig,s)}throw n}}function tr(t){return t!==void 0&&t.registrationStatus===2}function yo(t){return t.requestStatus===2&&!vo(t)}function vo(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wa}function bo(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Io(t){return t.requestStatus===1&&t.requestTime+Bs<Date.now()}/**
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
 */async function _o(t){const e=t,{installationEntry:n,registrationPromise:s}=await pn(e);return s?s.catch(console.error):mn(e).catch(console.error),n.fid}/**
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
 */async function xo(t,e=!1){const n=t;return await So(n),(await mn(n,e)).token}async function So(t){const{registrationPromise:e}=await pn(t);e&&await e}/**
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
 */function Eo(t){if(!t||!t.options)throw Gt("App Configuration");if(!t.name)throw Gt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gt(t){return Ee.create("missing-app-config-values",{valueName:t})}/**
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
 */const nr="installations",To="installations-internal",ko=t=>{const e=t.getProvider("app").getImmediate(),n=Eo(e),s=Fe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Co=t=>{const e=t.getProvider("app").getImmediate(),n=Fe(e,nr).getImmediate();return{getId:()=>_o(n),getToken:r=>xo(n,r)}};function No(){oe(new Y(nr,ko,"PUBLIC")),oe(new Y(To,Co,"PRIVATE"))}No();K(Fs,hn);K(Fs,hn,"esm2017");/**
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
 */const xt="analytics",Ao="firebase_id",Po="origin",Ro=60*1e3,Do="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gn="https://www.googletagmanager.com/gtag/js";/**
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
 */const j=new dn("@firebase/analytics");/**
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
 */const Oo={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},U=new Ne("analytics","Analytics",Oo);/**
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
 */function jo(t){if(!t.startsWith(gn)){const e=U.create("invalid-gtag-resource",{gtagURL:t});return j.warn(e.message),""}return t}function sr(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Lo(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Mo(t,e){const n=Lo("firebase-js-sdk-policy",{createScriptURL:jo}),s=document.createElement("script"),r=`${gn}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Uo(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fo(t,e,n,s,r,i){const a=s[r];try{if(a)await e[a];else{const l=(await sr(n)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){j.error(c)}t("config",r,i)}async function Bo(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await sr(n);for(const l of a){const d=c.find(p=>p.measurementId===l),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){j.error(i)}}function $o(t,e,n,s){async function r(i,...a){try{if(i==="event"){const[c,l]=a;await Bo(t,e,n,c,l)}else if(i==="config"){const[c,l]=a;await Fo(t,e,n,s,c,l)}else if(i==="consent"){const[c,l]=a;t("consent",c,l)}else if(i==="get"){const[c,l,d]=a;t("get",c,l,d)}else if(i==="set"){const[c]=a;t("set",c)}else t(i,...a)}catch(c){j.error(c)}}return r}function Vo(t,e,n,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=$o(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Ho(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gn)&&n.src.includes(t))return n;return null}/**
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
 */const zo=30,Wo=1e3;class Go{constructor(e={},n=Wo){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rr=new Go;function qo(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ko(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:qo(s)},i=Do.replace("{app-id}",n),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw U.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Jo(t,e=rr,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw U.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw U.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Zo;return setTimeout(async()=>{c.abort()},Ro),ir({appId:s,apiKey:r,measurementId:i},a,c,e)}async function ir(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=rr){var i;const{appId:a,measurementId:c}=t;try{await Yo(s,e)}catch(l){if(c)return j.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Ko(t);return r.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!Xo(d)){if(r.deleteThrottleMetadata(a),c)return j.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw l}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ln(n,r.intervalMillis,zo):Ln(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(a,p),j.debug(`Calling attemptFetch again in ${f} millis`),ir(t,p,s,r)}}function Yo(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(U.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xo(t){if(!(t instanceof Z)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Zo{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qo(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,a=Object.assign(Object.assign({},s),{send_to:i});t("event",n,a)}}/**
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
 */async function ec(){if(As())try{await Ps()}catch(t){return j.warn(U.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return j.warn(U.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tc(t,e,n,s,r,i,a){var c;const l=Jo(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&j.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>j.error(m)),e.push(l);const d=ec().then(m=>{if(m)return s.getId()}),[f,p]=await Promise.all([l,d]);Ho(i)||Mo(i,f.measurementId),r("js",new Date);const h=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return h[Po]="firebase",h.update=!0,p!=null&&(h[Ao]=p),r("config",f.measurementId,h),f.measurementId}/**
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
 */class nc{constructor(e){this.app=e}_delete(){return delete Ge[this.app.options.appId],Promise.resolve()}}let Ge={},qn=[];const Kn={};let qt="dataLayer",sc="gtag",Jn,ar,Yn=!1;function rc(){const t=[];if(Ns()&&t.push("This is a browser extension environment."),xi()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=U.create("invalid-analytics-context",{errorInfo:e});j.warn(n.message)}}function ic(t,e,n){rc();const s=t.options.appId;if(!s)throw U.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)j.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw U.create("no-api-key");if(Ge[s]!=null)throw U.create("already-exists",{id:s});if(!Yn){Uo(qt);const{wrappedGtag:i,gtagCore:a}=Vo(Ge,qn,Kn,qt,sc);ar=i,Jn=a,Yn=!0}return Ge[s]=tc(t,qn,Kn,e,Jn,qt,n),new nc(t)}function ac(t=Ls()){t=ge(t);const e=Fe(t,xt);return e.isInitialized()?e.getImmediate():oc(t)}function oc(t,e={}){const n=Fe(t,xt);if(n.isInitialized()){const r=n.getImmediate();if(Se(e,n.getOptions()))return r;throw U.create("already-initialized")}return n.initialize({options:e})}function cc(t,e,n,s){t=ge(t),Qo(ar,Ge[t.app.options.appId],e,n,s).catch(r=>j.error(r))}const Xn="@firebase/analytics",Zn="0.10.15";function lc(){oe(new Y(xt,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ic(s,r,n)},"PUBLIC")),oe(new Y("analytics-internal",t,"PRIVATE")),K(Xn,Zn),K(Xn,Zn,"esm2017");function t(e){try{const n=e.getProvider(xt).getImmediate();return{logEvent:(s,r,i)=>cc(n,s,r,i)}}catch(n){throw U.create("interop-component-reg-failed",{reason:n})}}}lc();function wn(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function or(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dc=or,cr=new Ne("auth","Firebase",or());/**
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
 */const St=new dn("@firebase/auth");function uc(t,...e){St.logLevel<=x.WARN&&St.warn(`Auth (${st}): ${t}`,...e)}function wt(t,...e){St.logLevel<=x.ERROR&&St.error(`Auth (${st}): ${t}`,...e)}/**
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
 */function X(t,...e){throw vn(t,...e)}function H(t,...e){return vn(t,...e)}function yn(t,e,n){const s=Object.assign(Object.assign({},dc()),{[e]:n});return new Ne("auth","Firebase",s).create(e,{appName:t.name})}function xe(t){return yn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hc(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&X(t,"argument-error"),yn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vn(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return cr.create(t,...e)}function w(t,e,...n){if(!t)throw vn(e,...n)}function re(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wt(e),new Error(e)}function ce(t,e){t||re(e)}/**
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
 */function sn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fc(){return Qn()==="http:"||Qn()==="https:"}function Qn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fc()||Ns()||"connection"in navigator)?navigator.onLine:!0}function mc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ce(n>e,"Short delay should be less than long delay!"),this.isMobile=vi()||Ii()}get(){return pc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bn(t,e){ce(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class lr{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yc=new rt(3e4,6e4);function In(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,s,r={}){return dr(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=nt(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},i);return bi()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&ln(t.emulatorConfig.host)&&(d.credentials="include"),lr.fetch()(await ur(t,t.config.apiHost,n,c),d)})}async function dr(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},gc),e);try{const r=new bc(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw mt(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mt(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw mt(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw mt(t,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yn(t,f,d);X(t,f)}}catch(r){if(r instanceof Z)throw r;X(t,"network-request-failed",{message:String(r)})}}async function vc(t,e,n,s,r={}){const i=await Be(t,e,n,s,r);return"mfaPendingCredential"in i&&X(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ur(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?bn(t.config,r):`${t.config.apiScheme}://${r}`;return wc.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class bc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(H(this.auth,"network-request-failed")),yc.get())})}}function mt(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=H(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Ic(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function Et(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _c(t,e=!1){const n=ge(t),s=await n.getIdToken(e),r=_n(s);w(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:qe(Kt(r.auth_time)),issuedAtTime:qe(Kt(r.iat)),expirationTime:qe(Kt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kt(t){return Number(t)*1e3}function _n(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Es(n);return r?JSON.parse(r):(wt("Failed to decode base64 JWT payload"),null)}catch(r){return wt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function es(t){const e=_n(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function et(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Z&&xc(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function xc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Sc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qe(this.lastLoginAt),this.creationTime=qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tt(t){var e;const n=t.auth,s=await t.getIdToken(),r=await et(t,Et(n,{idToken:s}));w(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hr(i.providerUserInfo):[],c=Tc(t.providerData,a),l=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new rn(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Ec(t){const e=ge(t);await Tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tc(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hr(t){return t.map(e=>{var{providerId:n}=e,s=wn(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function kc(t,e){const n=await dr(t,{},async()=>{const s=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await ur(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",lr.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cc(t,e){return Be(t,"POST","/v2/accounts:revokeToken",In(t,e))}/**
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
 */class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):es(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=es(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await kc(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new Oe;return s&&(w(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(w(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(w(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return re("not implemented")}}/**
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
 */function de(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class V{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _c(this,e)}reload(){return Ec(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Tt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(q(this.auth.app))return Promise.reject(xe(this.auth));const e=await this.getIdToken();return await et(this,Ic(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,a,c,l,d,f;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(c=n.tenantId)!==null&&c!==void 0?c:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(d=n.createdAt)!==null&&d!==void 0?d:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:v,isAnonymous:A,providerData:T,stsTokenManager:F}=n;w(C&&F,e,"internal-error");const Q=Oe.fromJSON(this.name,F);w(typeof C=="string",e,"internal-error"),de(p,e.name),de(h,e.name),w(typeof v=="boolean",e,"internal-error"),w(typeof A=="boolean",e,"internal-error"),de(m,e.name),de(S,e.name),de(y,e.name),de(I,e.name),de(_,e.name),de(N,e.name);const z=new V({uid:C,auth:e,email:h,emailVerified:v,displayName:p,isAnonymous:A,photoURL:S,phoneNumber:m,tenantId:y,stsTokenManager:Q,createdAt:_,lastLoginAt:N});return T&&Array.isArray(T)&&(z.providerData=T.map(ee=>Object.assign({},ee))),I&&(z._redirectEventId=I),z}static async _fromIdTokenResponse(e,n,s=!1){const r=new Oe;r.updateFromServerResponse(n);const i=new V({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Tt(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];w(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hr(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Oe;c.updateFromIdToken(s);const l=new V({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new rn(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const ts=new Map;function ie(t){ce(t instanceof Function,"Expected a class definition");let e=ts.get(t);return e?(ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ts.set(t,e),e)}/**
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
 */class fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fr.type="NONE";const ns=fr;/**
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
 */function yt(t,e,n){return`firebase:${t}:${e}:${n}`}class je{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yt(this.userKey,r.apiKey,i),this.fullPersistenceKey=yt("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Et(this.auth,{idToken:e}).catch(()=>{});return n?V._fromGetAccountInfoResponse(this.auth,n,e):null}return V._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new je(ie(ns),e,s);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||ie(ns);const a=yt(s,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(a);if(f){let p;if(typeof f=="string"){const h=await Et(e,{idToken:f}).catch(()=>{});if(!h)break;p=await V._fromGetAccountInfoResponse(e,h,f)}else p=V._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new je(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new je(i,e,s))}}/**
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
 */function ss(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vr(e))return"Blackberry";if(br(e))return"Webos";if(mr(e))return"Safari";if((e.includes("chrome/")||gr(e))&&!e.includes("edge/"))return"Chrome";if(yr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pr(t=R()){return/firefox\//i.test(t)}function mr(t=R()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gr(t=R()){return/crios\//i.test(t)}function wr(t=R()){return/iemobile/i.test(t)}function yr(t=R()){return/android/i.test(t)}function vr(t=R()){return/blackberry/i.test(t)}function br(t=R()){return/webos/i.test(t)}function xn(t=R()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Nc(t=R()){var e;return xn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ac(){return _i()&&document.documentMode===10}function Ir(t=R()){return xn(t)||yr(t)||br(t)||vr(t)||/windows phone/i.test(t)||wr(t)}/**
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
 */function _r(t,e=[]){let n;switch(t){case"Browser":n=ss(R());break;case"Worker":n=`${ss(R())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${st}/${s}`}/**
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
 */class Pc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Rc(t,e={}){return Be(t,"GET","/v2/passwordPolicy",In(t,e))}/**
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
 */const Dc=6;class Oc{constructor(e){var n,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Dc,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class jc{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rs(this),this.idTokenSubscription=new rs(this),this.beforeStateQueue=new Pc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ie(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await je.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Et(this,{idToken:e}),s=await V._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(q(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(q(this.app))return Promise.reject(xe(this));const n=e?ge(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return q(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return q(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rc(this),n=new Oc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ne("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Cc(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ie(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[ie(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_r(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rt(t){return ge(t)}class rs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ci(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lc(t){Sn=t}function Mc(t){return Sn.loadJS(t)}function Uc(){return Sn.gapiScript}function Fc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bc(t,e){const n=Fe(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Se(i,e??{}))return r;X(r,"already-initialized")}return n.initialize({options:e})}function $c(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ie);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Vc(t,e,n){const s=Rt(t);w(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=xr(e),{host:a,port:c}=Hc(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){w(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),w(Se(d,s.config.emulator)&&Se(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,ln(a)?(Cs("Auth",!0),gi(`${i}//${a}${l}`)):zc()}function xr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hc(t){const e=xr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:is(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:is(a)}}}function is(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return re("not implemented")}_getIdTokenResponse(e){return re("not implemented")}_linkToIdToken(e,n){return re("not implemented")}_getReauthenticationResolver(e){return re("not implemented")}}/**
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
 */async function Le(t,e){return vc(t,"POST","/v1/accounts:signInWithIdp",In(t,e))}/**
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
 */const Wc="http://localhost";class ke extends Sr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):X("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wn(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new ke(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Le(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Le(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Le(e,n)}buildRequest(){const e={requestUri:Wc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nt(n)}return e}}/**
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
 */class En{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class it extends En{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ue extends it{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";ue.PROVIDER_ID="facebook.com";/**
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
 */class se extends it{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ke._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return se.credential(n,s)}catch{return null}}}se.GOOGLE_SIGN_IN_METHOD="google.com";se.PROVIDER_ID="google.com";/**
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
 */class he extends it{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return he.credential(e.oauthAccessToken)}catch{return null}}}he.GITHUB_SIGN_IN_METHOD="github.com";he.PROVIDER_ID="github.com";/**
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
 */class fe extends it{constructor(){super("twitter.com")}static credential(e,n){return ke._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fe.credential(n,s)}catch{return null}}}fe.TWITTER_SIGN_IN_METHOD="twitter.com";fe.PROVIDER_ID="twitter.com";/**
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
 */class Me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await V._fromIdTokenResponse(e,s,r),a=as(s);return new Me({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=as(s);return new Me({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function as(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kt extends Z{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new kt(e,n,s,r)}}function Er(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kt._fromErrorAndOperation(t,i,e,s):i})}async function Gc(t,e,n=!1){const s=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Me._forOperation(t,"link",s)}/**
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
 */async function qc(t,e,n=!1){const{auth:s}=t;if(q(s.app))return Promise.reject(xe(s));const r="reauthenticate";try{const i=await et(t,Er(s,r,e,t),n);w(i.idToken,s,"internal-error");const a=_n(i.idToken);w(a,s,"internal-error");const{sub:c}=a;return w(t.uid===c,s,"user-mismatch"),Me._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&X(s,"user-mismatch"),i}}/**
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
 */async function Kc(t,e,n=!1){if(q(t.app))return Promise.reject(xe(t));const s="signIn",r=await Er(t,s,e),i=await Me._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Jc(t,e,n,s){return ge(t).onIdTokenChanged(e,n,s)}function Yc(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}const Ct="__sak";/**
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
 */class Tr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ct,"1"),this.storage.removeItem(Ct),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xc=1e3,Zc=10;class kr extends Tr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ir(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Ac()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Zc):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Xc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kr.type="LOCAL";const Qc=kr;/**
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
 */class Cr extends Tr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cr.type="SESSION";const Nr=Cr;/**
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
 */function el(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Dt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(n.origin,i)),l=await el(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dt.receivers=[];/**
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
 */class tl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=Tn("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(p){const h=p;if(h.data.eventId===d)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function J(){return window}function nl(t){J().location.href=t}/**
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
 */function Ar(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function sl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rl(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function il(){return Ar()?self:null}/**
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
 */const Pr="firebaseLocalStorageDb",al=1,Nt="firebaseLocalStorage",Rr="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ot(t,e){return t.transaction([Nt],e?"readwrite":"readonly").objectStore(Nt)}function ol(){const t=indexedDB.deleteDatabase(Pr);return new at(t).toPromise()}function an(){const t=indexedDB.open(Pr,al);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Nt,{keyPath:Rr})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Nt)?e(s):(s.close(),await ol(),e(await an()))})})}async function os(t,e,n){const s=Ot(t,!0).put({[Rr]:e,value:n});return new at(s).toPromise()}async function cl(t,e){const n=Ot(t,!1).get(e),s=await new at(n).toPromise();return s===void 0?null:s.value}function cs(t,e){const n=Ot(t,!0).delete(e);return new at(n).toPromise()}const ll=800,dl=3;class Dr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await an(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dl)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ar()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(il()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sl(),!this.activeServiceWorker)return;this.sender=new tl(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await an();return await os(e,Ct,"1"),await cs(e,Ct),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>os(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cl(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ot(r,!1).getAll();return new at(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ll)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dr.type="LOCAL";const ul=Dr;new rt(3e4,6e4);/**
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
 */function Or(t,e){return e?ie(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kn extends Sr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Le(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hl(t){return Kc(t.auth,new kn(t),t.bypassAuthState)}function fl(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),qc(n,new kn(t),t.bypassAuthState)}async function pl(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Gc(n,new kn(t),t.bypassAuthState)}/**
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
 */class jr{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hl;case"linkViaPopup":case"linkViaRedirect":return pl;case"reauthViaPopup":case"reauthViaRedirect":return fl;default:X(this.auth,"internal-error")}}resolve(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ml=new rt(2e3,1e4);async function gl(t,e,n){if(q(t.app))return Promise.reject(H(t,"operation-not-supported-in-this-environment"));const s=Rt(t);hc(t,e,En);const r=Or(s,n);return new _e(s,"signInViaPopup",e,r).executeNotNull()}class _e extends jr{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,_e.currentPopupAction&&_e.currentPopupAction.cancel(),_e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){ce(this.filter.length===1,"Popup operations only handle one event");const e=Tn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(H(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ml.get())};e()}}_e.currentPopupAction=null;/**
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
 */const wl="pendingRedirect",vt=new Map;class yl extends jr{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vt.get(this.auth._key());if(!e){try{const s=await vl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vt.set(this.auth._key(),e)}return this.bypassAuthState||vt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vl(t,e){const n=_l(e),s=Il(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function bl(t,e){vt.set(t._key(),e)}function Il(t){return ie(t._redirectPersistence)}function _l(t){return yt(wl,t.config.apiKey,t.name)}async function xl(t,e,n=!1){if(q(t.app))return Promise.reject(xe(t));const s=Rt(t),r=Or(s,e),a=await new yl(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Sl=10*60*1e3;class El{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lr(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(H(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sl&&this.cachedEventUids.clear(),this.cachedEventUids.has(ls(e))}saveEventToCache(e){this.cachedEventUids.add(ls(e)),this.lastProcessedEventTime=Date.now()}}function ls(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lr(t);default:return!1}}/**
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
 */async function kl(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
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
 */const Cl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nl=/^https?/;async function Al(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kl(t);for(const n of e)try{if(Pl(n))return}catch{}X(t,"unauthorized-domain")}function Pl(t){const e=sn(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Nl.test(n))return!1;if(Cl.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Rl=new rt(3e4,6e4);function ds(){const t=J().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dl(t){return new Promise((e,n)=>{var s,r,i;function a(){ds(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ds(),n(H(t,"network-request-failed"))},timeout:Rl.get()})}if(!((r=(s=J().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=J().gapi)===null||i===void 0)&&i.load)a();else{const c=Fc("iframefcb");return J()[c]=()=>{gapi.load?a():n(H(t,"network-request-failed"))},Mc(`${Uc()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw bt=null,e})}let bt=null;function Ol(t){return bt=bt||Dl(t),bt}/**
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
 */const jl=new rt(5e3,15e3),Ll="__/auth/iframe",Ml="emulator/auth/iframe",Ul={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bl(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bn(e,Ml):`https://${t.config.authDomain}/${Ll}`,s={apiKey:e.apiKey,appName:t.name,v:st},r=Fl.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${nt(s).slice(1)}`}async function $l(t){const e=await Ol(t),n=J().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:Bl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ul,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=H(t,"network-request-failed"),c=J().setTimeout(()=>{i(a)},jl.get());function l(){J().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Vl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hl=500,zl=600,Wl="_blank",Gl="http://localhost";class us{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ql(t,e,n,s=Hl,r=zl){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Vl),{width:s.toString(),height:r.toString(),top:i,left:a}),d=R().toLowerCase();n&&(c=gr(d)?Wl:n),pr(d)&&(e=e||Gl,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[m,S])=>`${h}${m}=${S},`,"");if(Nc(d)&&c!=="_self")return Kl(e||"",c),new us(null);const p=window.open(e||"",c,f);w(p,t,"popup-blocked");try{p.focus()}catch{}return new us(p)}function Kl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Jl="__/auth/handler",Yl="emulator/auth/handler",Xl=encodeURIComponent("fac");async function hs(t,e,n,s,r,i){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:st,eventId:r};if(e instanceof En){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ki(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof it){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),d=l?`#${Xl}=${encodeURIComponent(l)}`:"";return`${Zl(t)}?${nt(c).slice(1)}${d}`}function Zl({config:t}){return t.emulator?bn(t,Yl):`https://${t.authDomain}/${Jl}`}/**
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
 */const Jt="webStorageSupport";class Ql{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nr,this._completeRedirectFn=xl,this._overrideRedirectResult=bl}async _openPopup(e,n,s,r){var i;ce((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await hs(e,n,s,sn(),r);return ql(e,a,Tn())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await hs(e,n,s,sn(),r);return nl(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ce(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $l(e),s=new El(e);return n.register("authEvent",r=>(w(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jt,{type:Jt},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Jt];a!==void 0&&n(!!a),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Al(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ir()||mr()||xn()}}const ed=Ql;var fs="@firebase/auth",ps="1.10.4";/**
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
 */class td{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sd(t){oe(new Y("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;w(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_r(t)},d=new jc(s,r,i,l);return $c(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),oe(new Y("auth-internal",e=>{const n=Rt(e.getProvider("auth").getImmediate());return(s=>new td(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),K(fs,ps,nd(t)),K(fs,ps,"esm2017")}/**
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
 */const rd=5*60,id=ks("authIdTokenMaxAge")||rd;let ms=null;const ad=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>id)return;const r=n==null?void 0:n.token;ms!==r&&(ms=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function od(t=Ls()){const e=Fe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bc(t,{popupRedirectResolver:ed,persistence:[ul,Qc,Nr]}),s=ks("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=ad(i.toString());Yc(n,a,()=>a(n.currentUser)),Jc(n,c=>a(c))}}const r=pi("auth");return r?Vc(n,`http://${r}`):Cs("Auth",!1),n}function cd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lc({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=H("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",cd().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sd("Browser");const ld={apiKey:"AIzaSyDPJPxSGMriB5JTSfe5WgmCoaOsnHNfKIw",authDomain:"todo-app-9076d.firebaseapp.com",projectId:"todo-app-9076d",storageBucket:"todo-app-9076d.firebasestorage.app",messagingSenderId:"186858367833",appId:"1:186858367833:web:caa17c7d22ac27b111ba48",measurementId:"G-PSKSKTK9N9"},Mr=js(ld);ac(Mr);const dd=od(Mr),ud=new se,hd="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2024%2024'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.5.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20141)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20url(%23radial-gradient);%20}%20.st2%20{%20fill:%20url(%23linear-gradient);%20}%20.st3%20{%20fill:%20%23fc4c53;%20}%20.st4%20{%20fill:%20url(%23radial-gradient1);%20}%20.st5%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3cpath%20class='st0'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3c/clipPath%3e%3cradialGradient%20id='radial-gradient'%20cx='1.4787'%20cy='12.7883'%20fx='1.4787'%20fy='12.7883'%20r='9.6555'%20gradientTransform='translate(2.4587%20-.293)%20scale(.8032%201.0842)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.368'%20stop-color='%23ffcf09'/%3e%3cstop%20offset='.7176'%20stop-color='%23ffcf09'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%23ffcf09'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='radial-gradient1'%20cx='14.2953'%20cy='23.2909'%20fx='14.2953'%20fy='23.2909'%20r='11.8784'%20gradientTransform='translate(-3.434%20-.6716)%20scale(1.3272%201.0073)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.3827'%20stop-color='%2334a853'/%3e%3cstop%20offset='.7062'%20stop-color='%2334a853'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%2334a853'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='linear-gradient'%20x1='23.5582'%20y1='6.2864'%20x2='12.1477'%20y2='20.2993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.6711'%20stop-color='%234285f4'/%3e%3cstop%20offset='.8852'%20stop-color='%234285f4'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='st3'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3cg%20class='st5'%3e%3cellipse%20class='st1'%20cx='3.6464'%20cy='13.5725'%20rx='7.7549'%20ry='10.4689'/%3e%3cellipse%20class='st4'%20cx='15.5383'%20cy='22.7886'%20rx='15.7646'%20ry='11.9647'%20transform='translate(-2.7047%202.1016)%20rotate(-7.1197)'/%3e%3cpolygon%20class='st2'%20points='11.1048%208.2797%2011.5957%2013.8759%2012.2191%2017.6234%2019.5807%2024.4713%2028.1881%208.5742%2011.1048%208.2797'/%3e%3c/g%3e%3c/svg%3e",fd=()=>{var C;u.useEffect(()=>{document.title="Sign In – ToDo App"},[]);const t=Yr(),e=(C=t.state)==null?void 0:C.message,{loadUserProfile:n}=tt(),{theme:s}=Ue(),[r,i]=u.useState(e||""),[a,c]=u.useState(""),[l,d]=u.useState(""),[f,p]=u.useState(""),[h,m]=u.useState(!1),[S,y]=u.useState(!1),I=Ce();u.useEffect(()=>{var v;(v=t.state)!=null&&v.message&&(i(t.state.message),I(t.pathname,{replace:!0}))},[t,I]),u.useEffect(()=>{if(r){const v=setTimeout(()=>{i("")},4e3);return()=>clearTimeout(v)}},[r]);const _=async v=>{if(v.preventDefault(),!a||!l){p("Enter user details.");return}a&&l&&(p(""),m(!0)),setTimeout(async()=>{try{await M.post("/api/signin",{usernameOrEmail:a,password:l}),await n(),I("/all",{replace:!0})}catch(A){A.response?p(A.response.data.error||"Sign In failed"):p("Network error")}finally{m(!1)}},1e3)},N=async()=>{try{const T=await(await gl(dd,ud)).user.getIdToken();await M.post("/api/firebase-signin",{token:T}),await n(),p(""),I("/all",{replace:!0})}catch(v){console.error("Google sign-in error:",v),p("Google sign-in failed. Please try again.")}};return o.jsxs("div",{className:"app-text-medium",children:[r&&o.jsx("div",{className:"text-error desktop:mb-2 mb-2 w-full text-center font-semibold",children:o.jsx("p",{children:r})}),o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-9 flex max-w-[300px] flex-col gap-4",onSubmit:v=>_(v),children:[f&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto mb-1 w-full text-center",children:o.jsx("p",{children:f})}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"usernameOrEmail",className:"legend-base",children:"Username or Email"}),o.jsx("input",{type:"text",id:"usernameOrEmail",name:"usernameOrEmail",autoComplete:"off",required:!0,placeholder:"Enter username or email",onChange:v=>c(v.target.value),value:a,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${S?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter Password",onChange:v=>d(v.target.value),value:l,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:S?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:v=>v.preventDefault(),onClick:v=>{v.preventDefault();const A=document.getElementById("password"),T=A.selectionStart;y(F=>!F),setTimeout(()=>{A.setSelectionRange(T,T),A.focus()},0)}})]})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",type:"submit",children:h?o.jsx($,{color:"#fff",size:24}):"Sign In"})]}),o.jsx("p",{className:"desktop:my-4 my-2 text-center",children:"Or"}),o.jsx("div",{className:"mx-auto max-w-[300px]",children:o.jsxs("button",{onClick:N,className:"darkborder-gray-300 flex w-full cursor-pointer items-center justify-center gap-3 rounded-[5px] border border-black py-3.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",type:"button",children:[o.jsx("img",{src:hd,alt:"Google logo",className:"h-5 w-5 mb-1"}),"Sign in with Google"]})}),o.jsx("div",{className:"mt-4 flex items-center justify-center",children:o.jsx(Ke,{to:"/todo-app/forget-password",className:"text-gradient-link font-bold",onClick:v=>{v.preventDefault(),I("/forget-password",{replace:!0})},children:"Forgot password?"})}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Don't have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-up",className:"text-gradient-link font-bold",onClick:v=>{v.preventDefault(),I("/sign-up",{replace:!0})},children:"Sign Up"})]})]})},pd=()=>{u.useEffect(()=>{document.title="Forgot Password – ToDo App"},[]);const t=Ce(),[e,n]=u.useState(""),[s,r]=u.useState(),[i,a]=u.useState(!0),[c,l]=u.useState(""),[d,f]=u.useState(!1),[p,h]=u.useState(!1),m=y=>{l(""),n(y.toLowerCase());const _=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(y);r(_)},S=async y=>{y.preventDefault(),e||l("Please enter your email"),s&&(f(!0),l(""),setTimeout(async()=>{try{await M.post("/api/forgot-password",{email:e}),h(!0)}catch(I){I.response?l(I.response.data.error):l("Something went wrong. Please try again later.")}finally{f(!1)}},1e3))};return o.jsxs("div",{className:`${p?"bg-gray-300 dark:bg-gray-900":""} app-text-medium flex h-screen items-center justify-center`,children:[!p&&o.jsxs("div",{className:"relative",children:[o.jsx("h1",{className:"text-gradient-heading app-text-large-tight mb-18 text-center",children:"Forgot Password?"}),c&&o.jsx("div",{className:"absolute top-13 w-full text-center",children:o.jsx("p",{className:"text-error",children:c})}),o.jsx("p",{className:"text-18 tracking-negative-17 font-weight-regular mb-6 max-w-[300px] text-center leading-18",children:"Enter your email address below and we'll send you a link to reset your password:"}),o.jsxs("form",{className:"mx-auto max-w-[300px]",onSubmit:y=>S(y),children:[o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:`${e?i||s?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"email",className:" legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:y=>{y.key===" "&&y.preventDefault()},onFocus:()=>a(!0),onChange:y=>m(y.target.value),onBlur:()=>a(!1),value:e,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"})]}),e&&!s&&!i&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsx("button",{className:"button-gradient mt-8 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",type:"submit",children:d?o.jsx($,{color:"#fff",size:24}):"Send reset link"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Back to"}),o.jsx(Ke,{to:"/sign-in",onClick:y=>{y.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]}),p&&o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"app-text-large-tight text-success mb-6",children:"Success!"}),o.jsx("p",{children:"If this email is registered, you will receive a reset link."})]})]})},md=()=>{const t=Ce(),e=on(),{theme:n}=Ue(),[s,r]=u.useState(""),[i,a]=u.useState(),[c,l]=u.useState(!0),[d,f]=u.useState(!1),[p,h]=u.useState(""),[m,S]=u.useState(),[y,I]=u.useState(!0),[_,N]=u.useState(!1),[C,v]=u.useState(""),[A,T]=u.useState(!1),[F,Q]=u.useState(!1);u.useEffect(()=>{document.title="Reset Password – ToDo App"},[]);const[z]=Xr(),ee=z.get("token");u.useEffect(()=>{ee||t("/sign-in",{replace:!0})},[ee,t]);const Ae=b=>{r(b);const D=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(b);a(D)},B=b=>{h(b),S(b===s)},Pe=async b=>{if(b.preventDefault(),!s||!p){v("All fields are required.");return}i&&m&&(T(!0),v(""),setTimeout(async()=>{try{await M.post("/api/reset-password",{token:ee,newPassword:s}),Q(!0)}catch(P){P.response?v(P.response.data.error):v("Something went wrong. Please try again later.")}finally{T(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[!F&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center",children:[o.jsx("h1",{children:o.jsx("span",{className:"text-gradient-heading app-text-large-tight",children:"Reset Your Password"})}),o.jsxs("form",{onSubmit:b=>Pe(b),className:"relative max-w-[300px] min-w-[300px]",children:[C&&o.jsx("div",{className:"absolute top-4 w-full text-center",children:o.jsx("p",{className:"text-error",children:C})}),o.jsxs("div",{className:"relative mt-18",children:[o.jsxs("fieldset",{className:`${s?c||i?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${d?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter password",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>l(!0),onChange:b=>Ae(b.target.value),onBlur:()=>l(!1),value:s,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:d?n==="dark"?Ye:Je:n==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:b=>b.preventDefault(),onClick:b=>{b.preventDefault();const P=document.getElementById("password"),D=P.selectionStart;f(we=>!we),setTimeout(()=>{P.setSelectionRange(D,D),P.focus()},0)}})]})]}),s&&!i&&!c&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{className:"relative mt-4",children:[o.jsxs("fieldset",{className:`${p?y||m?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${_?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",required:!0,placeholder:"Confirm your password",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>I(!0),onChange:b=>B(b.target.value),onBlur:()=>I(!1),value:p,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:_?n==="dark"?Ye:Je:n==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:b=>b.preventDefault(),onClick:b=>{b.preventDefault();const P=document.getElementById("confirm-password"),D=P.selectionStart;N(we=>!we),setTimeout(()=>{P.setSelectionRange(D,D),P.focus()},0)}})]})]}),p&&!m&&!y&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-10 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",children:A?o.jsx($,{color:"#fff",size:24}):"Reset Password"})]})]}),F&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center text-center",children:[o.jsx("h1",{className:"app-text-large-tight",children:o.jsx("span",{className:"text-success",children:"Password changed successfully!"})}),o.jsx("p",{className:"mt-6",children:"You can now sign in with your new password."}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Go to"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:b=>{b.preventDefault(),t("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})]})},gd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e",wd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='9'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%20d='M1%204.304L3.696%207l6-6'/%3e%3c/svg%3e",yd=""+new URL("icon-drag-light-CeQdmhq9.svg",import.meta.url).href,vd=""+new URL("icon-drag-dark-V_WBwAmt.svg",import.meta.url).href,bd=({input:t,isChecked:e,id:n,setDraggedId:s,handleDrop:r,toggleToDoCheckedStatus:i,clearToDoById:a})=>{const{theme:c}=Ue();return o.jsx("li",{draggable:!0,onDragStart:l=>{s(n),l.target.classList.add("dragging")},onDragOver:l=>l.preventDefault(),onDrop:()=>{r(n)},onDragEnd:l=>{l.target.classList.remove("dragging")},className:"bg-gray-50 dark:bg-gray-900",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between px-5 py-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:c==="dark"?vd:yd,className:"desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-grab"}),o.jsx("div",{className:"radio-btn desktop:h-6 desktop:w-6 box-border flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700",style:e?{backgroundImage:"var(--color-gradient-check)",border:0}:{},onClick:()=>i(n),id:n,children:e&&o.jsx("img",{src:wd})}),o.jsx("p",{className:` ${c==="dark"?e?"text-gray-600 line-through":"":e?"text-gray-400 line-through":""}`,children:t})]}),o.jsx("img",{src:gd,alt:"Cross Icon",onClick:()=>a(n),className:"desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-pointer"})]}),o.jsx("div",{className:"h-[1px] border-1 border-gray-300 dark:border-gray-700"})]})})},Yt=()=>{const{fetchToDoList:t}=Zr(),{currentPath:e,toDos:n}=Qr(),{userProfile:s}=tt(),r=s==null?void 0:s.email,[i,a]=u.useState("");u.useEffect(()=>{document.title="All ToDos – ToDo App"},[]);const c=async f=>{if(!(i===null||i===f))try{await M.post("/api/todos-reorder",{currentPath:e,email:r,draggedId:i,droppedId:f}),t(),a("")}catch(p){console.log(p)}},l=async f=>{const h=n.map(m=>m.id===f?{...m,isChecked:!m.isChecked}:m).find(m=>m.toDoId===f);h&&(await M.post("/api/update-todo-status",{email:r,toggledId:h.toDoId,isChecked:!h.isChecked}),t())},d=async f=>{await M.post("/api/delete-todo-item",{email:r,deletedId:f}),t()};return o.jsx("ul",{children:n.map((f,p)=>o.jsx(bd,{input:f.toDo,id:f.toDoId,isChecked:f.isChecked,setDraggedId:a,handleDrop:c,toggleToDoCheckedStatus:l,clearToDoById:d},p))})},Id=({setIsProfilePictureUploadMenu:t,onImageChange:e})=>{const{profilePictureURL:n,previewImage:s,setPreviewImage:r,setImageToUpload:i,isProfilePictureChanged:a,setIsProfilePictureChanged:c,setNoProfilePicture:l}=ys(),[d,f]=u.useState(!1),p=u.useRef(null),h=I=>{const _=I.target.files[0];_&&_.type.startsWith("image/")&&(s&&URL.revokeObjectURL(s),i(_),r(URL.createObjectURL(_)),c(!0),console.log(_)),I.target.value=""},m=()=>{if(f(!0),s){setTimeout(()=>{URL.revokeObjectURL(s),r(""),i(""),c(!0),f(!1)},1500);return}if(n){setTimeout(()=>{r(vs),l(!0),c(!0),f(!1)},1500);return}c(!1),t(!1)},S=()=>{c(!1),s?(f(!0),setTimeout(()=>{e(),f(!1),t(!1)},1500)):setTimeout(()=>{e(),t(!1)},500)},y=()=>{c(!1),t(!1)};return o.jsxs("div",{className:"profile-picture-upload-menu app-text-medium mx-auto max-w-[400px] rounded-[5px] px-4 py-5 ",children:[o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"relative h-32 w-32 overflow-hidden rounded-full",children:[o.jsx("img",{src:s||n,className:"h-full w-full object-cover",alt:"Profile Picture"}),d&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})})]}),o.jsxs("div",{className:"flex flex-col gap-4 dark:text-black",children:[o.jsx("label",{htmlFor:"profile-upload",className:"upload-button-gradient cursor-pointer rounded-[5px] p-3",children:"Upload Image"}),o.jsx("input",{type:"file",id:"profile-upload",accept:"image/*",ref:p,className:"hidden",onChange:I=>h(I)}),o.jsx("button",{className:"remove-button-gradient cursor-pointer rounded-[5px] p-3",onClick:()=>m(),children:"Remove Image"})]})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>y(),children:"Cancel"}),o.jsx("button",{className:`save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 ${a?"":"opacity-65"}`,onClick:()=>S(),children:"Save"})]}),o.jsx("div",{children:o.jsx("p",{className:"app-text-small mt-5 text-center text-gray-500 italic",children:"Supported formats: JPG, PNG, WEBP — Max size: 2MB"})})]})};async function _d(t,e,n,s){var r,i,a;try{const c=await M.post("/api/delete-account",{email:t,username:e});return s(),sessionStorage.clear(),c.status===200?(n("/sign-in",{state:{message:"Account deleted successfully"}}),""):((r=c.data)==null?void 0:r.error)||"Failed to delete account"}catch(c){return((a=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:a.error)||"Something went wrong"}}const xd=({setDeleteConfirmation:t,setUsernameAuthentication:e})=>{const n=Ce(),{userProfile:s}=tt(),r=s==null?void 0:s.email,i=bs(),[a,c]=u.useState(""),[l,d]=u.useState(""),[f,p]=u.useState(!1),h=async()=>{p(!0),setTimeout(async()=>{if(a&&a.length>=3){const m=await _d(r,a,n,i);m&&d(m),p(!1)}else p(!1),d("Enter your username")},1e3)};return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-20 mb-8 flex gap-2 font-bold",children:"Confirm your username"}),o.jsx("p",{children:"Please confirm your username to permanently delete your account."}),o.jsx("p",{className:"mt-4",children:"This step is required for security reasons."})]}),o.jsxs("div",{className:"mt-4 flex items-center",children:[o.jsxs("fieldset",{className:"border-light-grayish-blue desktop:max-w-[300px] flex max-w-[200px] flex-grow flex-col rounded-[5px] border-1",children:[o.jsx("legend",{htmlFor:"username",className:"mb-1 ml-3"}),o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",minLength:"3",maxLength:"15",placeholder:"Enter username to proceed",onChange:m=>c(m.target.value),value:a,className:"rounded-[5px] py-2 pl-3 outline-none"})]}),l&&o.jsxs("p",{className:"text-error mt-1 ml-2",children:[l,"!"]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>{e(!1),t(!1)},children:"Cancel"}),o.jsx("button",{className:`deleteAccount-button-gradient desktop:max-h-[42px] desktop:min-w-[255px] max-h-[38px] min-w-[163px] flex-grow cursor-pointer rounded-[5px] p-3 ${a.length>=3?"":"opacity-55"}`,onClick:()=>{h()},children:f?o.jsx($,{color:"#fff",size:16}):"Proceed"})]})]})},Ur=""+new URL("icon-bin-DCZtocnW.png",import.meta.url).href,Sd=""+new URL("icon-bin-dark-By_I2TUT.png",import.meta.url).href,Ed=({setDeleteConfirmation:t})=>{const{theme:e}=Ue(),[n,s]=u.useState(!1);return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"mb-8 flex items-center gap-2 font-bold",children:[o.jsx("img",{src:e==="dark"?Sd:Ur,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account?"]}),o.jsx("p",{children:"Are you sure you want to permanently delete your account?"}),o.jsx("p",{className:"mt-4 font-bold",children:"This action cannot be undone and will erase all your data."})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>t(!1),children:"Cancel"}),o.jsx("button",{className:"deleteAccount-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>{s(!0)},children:"Yes, delete my account"})]}),n&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(xd,{setDeleteConfirmation:t,setUsernameAuthentication:s})})]})},Td=""+new URL("icon-camera-CKSg84tl.svg",import.meta.url).href,gs=""+new URL("icon-edit-light-Cb_IW_6S.png",import.meta.url).href,gt=""+new URL("icon-edit-dark-Bqd0IM0l.png",import.meta.url).href,kd=()=>{const t=Ce(),e=on(),n=bs(),s=sessionStorage.getItem("wasSignedIn"),{theme:r}=Ue(),{isSignedOut:i,setIsSignedOut:a}=ei(),{userProfile:c,loadUserProfile:l}=tt(),[d,f]=u.useState(""),[p,h]=u.useState(""),[m,S]=u.useState(!1),[y,I]=u.useState(""),[_,N]=u.useState(""),[C,v]=u.useState(!1),{username:A,setUsername:T,isUsernameFieldFocused:F,setIsUsernameFieldFocused:Q,isUsernameValid:z,isSearchingUsername:ee,setIsSearchingUsername:Ae,isUsernameAvailable:B,setIsUsernameAvailable:Pe,usernameStatus:b,setUsernameStatus:P}=ws(),[D,we]=u.useState(""),{profilePictureURL:ot,setProfilePictureURL:ct,previewImage:$e,setPreviewImage:lt,imageToUpload:Ve,setImageToUpload:le,noProfilePicture:jt}=ys(),[te,He]=u.useState(!1),[Lt,dt]=u.useState(!1),[Re,De]=u.useState(!1),[O,g]=u.useState(!1),[k,L]=u.useState(!1),[ne,Mt]=u.useState(!1),[Fr,Cn]=u.useState(!1),[ut,Nn]=u.useState(!1),[Br,ht]=u.useState(!1),[ft,ye]=u.useState(""),[An,W]=u.useState(!1),[$r,Pn]=u.useState(!1),[Vr,Rn]=u.useState(!1),Ut=u.useRef(null),Ft=u.useRef(null);u.useEffect(()=>{s||t("/sign-in",{replace:!0}),document.title="Profile – ToDo App"},[]),u.useEffect(()=>{f((c==null?void 0:c.fullName)||""),I((c==null?void 0:c.username)||""),we((c==null?void 0:c.email)||""),ct((c==null?void 0:c.profilePicture)||vs)},[c]);const Hr=()=>{He(!0)},zr=async()=>{var ze,ve;W(!0);const E=new FormData;E.append("email",c.email),E.append("newProfilePicture",Ve);try{(await M.post("/api/new-profile-picture",E,{headers:{"Content-Type":"multipart/form-data"}})).status===200&&(await l(),W(!1),De(!1))}catch(pt){W(!1),console.log(pt),console.log(((ve=(ze=pt.response)==null?void 0:ze.data)==null?void 0:ve.error)||"An error occurred during upload.")}},Wr=async()=>{var E,ze;try{W(!0);const ve=c.email;(await M.post("/api/remove-profile-picture",{email:ve})).status===200&&(await l(),W(!1),De(!1))}catch(ve){W(!1),console.log(ve),console.log(((ze=(E=ve.response)==null?void 0:E.data)==null?void 0:ze.error)||"An error occurred during upload.")}};u.useEffect(()=>{h(d),N(y)},[d,y]);const Gr=()=>{Pn(!1),g(!0),ht(!1),ye("")};u.useEffect(()=>{Ut.current&&k&&Ut.current.focus()},[k]),u.useEffect(()=>{Ft.current&&ne&&Ft.current.focus()},[ne,z]),u.useEffect(()=>{Cn(k||Re)},[k,Re]),u.useEffect(()=>{S(p!==d),v(_!==y)},[te,p,_,d,y]),u.useEffect(()=>{Nn(m||C||te)},[te,m,C,d,y]),u.useEffect(()=>{_!==y?T(_):(T(""),Ae(!1),Pe(!1),P(""))},[_,y]);const qr=()=>{Mt(!1),Q(!1),P("")},Kr=async()=>{if(ut){if(te&&Ve&&(await zr(),ye("updated successfully.")),jt&&(await Wr(),ye("updated successfully.")),m)try{const E=await M.post("/api/update-user/full-name",{fullName:p,email:D});await l(),ye(E.data.message)}catch(E){console.log(E),W(!1),ht(!1),ye(res.data.error),g(!1)}if(C)if(B)try{const E=await M.post("/api/update-user/username",{newUsername:_,email:D});await l(),ye(E.data.message)}catch(E){console.log(E),W(!1),ht(!1),ye(res.data.error),g(!1)}else P("username already taken.");W(!1),He(!1),lt(""),le(""),T(""),ht(!0),Nn(!1),g(!1)}},Jr=()=>{Pn(!0),He(!1),lt(""),le(""),T(""),g(!1),Pe(!1),L(!1),Mt(!1),Cn(!1),S(!1),v(!1),h(d),N(y)};return o.jsxs("div",{className:"app-text-medium relative bg-gray-300 dark:bg-gray-800",children:[o.jsxs("div",{className:"mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center",children:[o.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-5",children:[o.jsx("div",{className:"flex w-full justify-center",children:o.jsxs("div",{className:`relative h-32 w-32 ${O?"cursor-pointer":""} overflow-hidden rounded-full`,children:[o.jsx("img",{src:!Re&&te&&$e?$e:ot,className:"h-full",alt:"Profile Picture",onMouseEnter:()=>dt(!0),onMouseLeave:()=>dt(!1),onClick:()=>{O&&De(!0)}}),te&&An&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})}),O&&Lt&&o.jsx("div",{className:"pointer-events-none absolute bottom-0 flex h-[35%] w-full items-center justify-center rounded-b-full bg-black opacity-60",children:o.jsx("img",{src:Td,className:"h-6 w-6"})})]})}),ut&&B&&o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:b})}),ut&&!B&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:b})}),ft&&Br?o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:ft})}):ft&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:ft})}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Name:"}),o.jsxs("div",{onClick:()=>{O&&L(!0)},className:`fullNameEditable ${k?"active":""} flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Ut,type:"text",onChange:E=>h(E.target.value),value:p,className:`${O?"cursor-text":"cursor-default"} outline-none`,readOnly:!k,onBlur:()=>L(!1)}),O&&!k&&o.jsx("img",{src:gt,className:"mr-3 h-3 w-3"})]})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Username:"}),o.jsxs("div",{onClick:()=>{O&&Mt(!0)},className:`usernameEditable ${ne?"active border-b-1":""} relative flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Ft,name:"username",autoComplete:"off",type:"text",onFocus:()=>Q(!0),onChange:E=>N(E.target.value),onBlur:()=>qr(),value:_,readOnly:!ne,onKeyDown:E=>{E.key===" "&&E.preventDefault()},maxLength:15,className:`${O?"cursor-text":"cursor-default"} outline-none`}),O&&!ne&&!B&&o.jsx("img",{src:gt,className:"mr-3 h-3 w-3"}),ee&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),B&&o.jsx("img",{src:Is,className:"mr-3 h-[15px] w-[15px]"})]}),O&&A&&!z&&!F&&!Fr&&!$r&&o.jsx("div",{className:`${e>=1440?"absolute":""} right-[-320px] bottom-0`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Email:"}),o.jsx("input",{type:"text",value:D,className:"border-b-1 outline-none dark:border-gray-700",disabled:!0})]}),!O&&o.jsx("div",{onClick:()=>Gr(),className:`absolute top-0 cursor-pointer ${e>1440?"right-[-100px]":"right-[-30px]"} rounded-[100px] p-[2px]`,style:{background:"var(--color-gradient-button)"},children:e>1440?o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-2 pt-3 pb-2 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:["Edit Profile",o.jsx("img",{src:r==="dark"?gt:gs,className:"h-3 w-3",alt:""})]}):o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-white px-3 pt-2 pb-1 font-bold text-white dark:bg-gray-700",children:["Edit",o.jsx("img",{src:r==="dark"?gt:gs,className:"h-2 w-2",alt:""})]})})]}),O?o.jsxs("div",{className:"mt-10 flex w-full items-center justify-between gap-4 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-1 cursor-pointer rounded-[5px] py-3",onClick:()=>{Jr()},children:"Cancel"}),o.jsx("button",{className:`save-button-gradient desktop:max-h-[42px] max-h-[38px] flex-1 cursor-pointer rounded-[5px] py-3 ${ut&&(!C||_&&B)&&(!m||p)?"":"opacity-20"}`,onClick:()=>{W(!0),setTimeout(()=>{Kr()},1e3)},children:An?o.jsx($,{color:"#fff",size:22}):"Save Changes"})]}):o.jsxs("div",{className:"w-full",children:[o.jsxs("button",{onClick:E=>{E.stopPropagation(),a(!0),setTimeout(()=>{ri(t,n),a(!1)},1e3)},className:"signOut-button-gradient mt-10 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-4 font-bold dark:text-black",children:[i?o.jsx($,{color:"#fff",size:24}):"Sign Out",!i&&o.jsx("img",{src:si,className:"hover-cursor-pointer h-5 w-5"})]}),o.jsxs("button",{onClick:()=>{Rn(!0)},className:"deleteAccount-button-gradient mt-4 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-3.5 font-bold dark:text-black",children:[o.jsx("img",{src:Ur,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account"]})]})]}),Re&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Id,{setIsProfilePictureUploadMenu:De,profileImage:ot,onImageChange:Hr})}),Vr&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Ed,{setDeleteConfirmation:Rn})})]})},Cd=()=>{const t=Ce();return o.jsxs("div",{className:"app-text-medium flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-700 dark:bg-black dark:text-gray-400",style:{fontFamily:"var(--font-josefinSans)"},children:[o.jsx("h1",{className:"app-text-large-tight text-gradient-heading mb-4 font-bold",children:"404"}),o.jsx("p",{className:"text-18 mb-6 leading-20",children:"Oops! The page you’re looking for doesn’t exist."}),o.jsx("button",{onClick:()=>t("/all",{replace:!0}),className:"button-gradient cursor-pointer rounded-[5px] px-6 py-3 font-bold text-black hover:opacity-90",children:"Go to Home page"})]})},Pd=({})=>o.jsxs(ti,{children:[o.jsx(G,{path:"/",element:o.jsx(ni,{to:"/all",replace:!0})}),o.jsx(G,{path:"/sign-up",element:o.jsx(ii,{})}),o.jsx(G,{path:"/sign-in",element:o.jsx(fd,{})}),o.jsx(G,{path:"/forget-password",element:o.jsx(pd,{})}),o.jsx(G,{path:"/reset-password",element:o.jsx(md,{})}),o.jsx(G,{path:"/all",element:o.jsx(Yt,{})}),o.jsx(G,{path:"/active",element:o.jsx(Yt,{})}),o.jsx(G,{path:"/completed",element:o.jsx(Yt,{})}),o.jsx(G,{path:"/profile",element:o.jsx(kd,{})}),o.jsx(G,{path:"*",element:o.jsx(Cd,{})})]});export{Pd as default};
