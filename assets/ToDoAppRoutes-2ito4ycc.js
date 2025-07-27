import{r as h,u as Te,g as cn,b as tt,a as Le,h as ws,j as o,N as Ke,f as U,i as Xr,k as Zr,d as Qr,e as ei,l as ys,c as ti,R as ni,m as q,n as si}from"./index-BQxtECnO.js";import{C as $,U as bs,u as Is,S as ri,s as ii}from"./icon-sign-out-14kTFP-g.js";const _s=""+new URL("icon-success-kJw2yUx5.png",import.meta.url).href,Je=""+new URL("icon-password-display-BJmCAie1.png",import.meta.url).href,Ye=""+new URL("icon-password-display-dark-B2VlshCc.png",import.meta.url).href,Xe=""+new URL("icon-password-hide-CGrP-8Gz.png",import.meta.url).href,Ze=""+new URL("icon-password-hide-dark-X9w8y7On.png",import.meta.url).href,ai=()=>{h.useEffect(()=>{document.title="Sign Up – ToDo App"},[]);const n=Te(),e=cn(),{loadUserProfile:t}=tt(),{theme:s}=Le(),[r,i]=h.useState(""),{username:a,setUsername:c,isUsernameFieldFocused:l,setIsUsernameFieldFocused:d,isUsernameValid:f,isSearchingUsername:p,isUsernameAvailable:u,setIsUsernameAvailable:v,usernameStatus:S,setUsernameStatus:x}=ws(),[g,I]=h.useState(""),[b,N]=h.useState(),[k,T]=h.useState(!0),[y,A]=h.useState(""),[M,B]=h.useState(),[z,Ce]=h.useState(!0),[Ne,W]=h.useState(!1),[_,D]=h.useState(""),[j,ee]=h.useState(),[Lt,Fe]=h.useState(!0),[ot,ct]=h.useState(!1),[Be,oe]=h.useState(""),[lt,dt]=h.useState(!1),ce=m=>{const P=m.replace(/\s+/g," ");i(P)};h.useEffect(()=>{c(""),v(!1)},[]);const $e=()=>{d(!1),x("")},Mt=m=>{oe(""),I(m.toLowerCase());const R=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(m);N(R)},ut=m=>{A(m);const R=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(m);B(R)},Ae=m=>{D(m),ee(m===y)},Pe=async m=>{if(m.preventDefault(),!r||!a||!g||!y||!_){oe("All fields are required.");return}u||oe("Username already taken"),f&&u&&b&&M&&j&&(x(""),dt(!0),setTimeout(async()=>{try{await U.post("/api/signup",{fullName:r,username:a,email:g,password:y}),await t(),n("/all",{replace:!0})}catch(P){P.response?oe(P.response.data.error):oe("Something went wrong. Please try again later.")}finally{c(""),dt(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-6 flex max-w-[300px] min-w-[300px] flex-col gap-4",onSubmit:m=>{Pe(m)},children:[Be&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:Be})}),u?o.jsx("div",{className:"text-success desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}):o.jsx("div",{className:"text-error desktop:mb-3 absolute bottom-full mx-auto w-full text-center",children:o.jsx("p",{children:S})}),o.jsx("div",{children:o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"fullName",className:"legend-base",children:"Full Name"}),o.jsx("input",{type:"text",id:"fullName",name:"fullName",autoComplete:"off",placeholder:"Enter your full name",onChange:m=>ce(m.target.value),onBlur:()=>i(r.trim()),value:r,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]})}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"username",className:"legend-base",children:"Username"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",placeholder:"Enter username",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>d(!0),onChange:m=>c(m.target.value),onBlur:()=>$e(),value:a,maxLength:15,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),p&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),u&&o.jsx("img",{src:_s,className:"mr-3 h-[15px] w-[15px]"})]})]}),a&&!f&&!l&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 right-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"email",className:"legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>T(!0),onChange:m=>Mt(m.target.value),onBlur:()=>T(!1),value:g,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),g&&!b&&!k&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${Ne?"text":"password"}`,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>Ce(!0),onChange:m=>ut(m.target.value),onBlur:()=>Ce(!1),value:y,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:Ne?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:m=>m.preventDefault(),onClick:m=>{m.preventDefault();const P=document.getElementById("password"),R=P.selectionStart;W(ge=>!ge),setTimeout(()=>{P.setSelectionRange(R,R),P.focus()},0)}})]})]}),y&&!M&&!z&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{children:[o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${ot?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",placeholder:"Confirm your password",onKeyDown:m=>{m.key===" "&&m.preventDefault()},onFocus:()=>Fe(!0),onChange:m=>Ae(m.target.value),onBlur:()=>Fe(!1),value:_,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:ot?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:m=>m.preventDefault(),onClick:m=>{m.preventDefault();const P=document.getElementById("confirm-password"),R=P.selectionStart;ct(ge=>!ge),setTimeout(()=>{P.setSelectionRange(R,R),P.focus()},0)}})]})]}),_&&!j&&!Lt&&o.jsx("div",{children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",children:lt?o.jsx($,{color:"#fff",size:24}):"Sign Up"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Already have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:m=>{m.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})};function oi(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
 */const xs=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},li=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,d=l?n[r+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let u=(c&15)<<2|d>>6,v=d&63;l||(v=64,a||(u=64)),s.push(t[f],t[p],t[u],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):li(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||p==null)throw new di;const u=i<<2|c>>4;if(s.push(u),d!==64){const v=c<<4&240|d>>2;if(s.push(v),p!==64){const S=d<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class di extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ui=function(n){const e=xs(n);return Ss.encodeByteArray(e,!0)},Es=function(n){return ui(n).replace(/\./g,"")},Ts=function(n){try{return Ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const fi=()=>hi().__FIREBASE_DEFAULTS__,pi=()=>{if(typeof process>"u"||typeof On>"u")return;const n=On.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ts(n[1]);return e&&JSON.parse(e)},ln=()=>{try{return ci()||fi()||pi()||mi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gi=n=>{var e,t;return(t=(e=ln())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ks=()=>{var n;return(n=ln())===null||n===void 0?void 0:n.config},Cs=n=>{var e;return(e=ln())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function dn(n){return n.endsWith(".cloudworkstations.dev")}async function wi(n){return(await fetch(n,{credentials:"include"})).ok}const We={};function yi(){const n={prod:[],emulator:[]};for(const e of Object.keys(We))We[e]?n.emulator.push(e):n.prod.push(e);return n}function bi(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let jn=!1;function Ns(n,e){if(typeof window>"u"||typeof document>"u"||!dn(window.location.host)||We[n]===e||We[n]||jn)return;We[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",i=yi().prod.length>0;function a(){const u=document.getElementById(s);u&&u.remove()}function c(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,v){u.setAttribute("width","24"),u.setAttribute("id",v),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{jn=!0,a()},u}function f(u,v){u.setAttribute("id",v),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function p(){const u=bi(s),v=t("text"),S=document.getElementById(v)||document.createElement("span"),x=t("learnmore"),g=document.getElementById(x)||document.createElement("a"),I=t("preprendIcon"),b=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const N=u.element;c(N),f(g,x);const k=d();l(b,I),N.append(b,S,g,k),document.body.appendChild(N)}i?(S.innerText="Preview backend disconnected.",b.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(b.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function O(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ii(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())}function _i(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function As(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Si(){const n=O();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ps(){try{return typeof indexedDB=="object"}catch{return!1}}function Rs(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Ei(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ti="FirebaseError";class Q extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ti,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke.prototype.create)}}class ke{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?ki(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Q(r,c,s)}}function ki(n,e){return n.replace(Ci,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ci=/\{\$([^}]+)}/g;function Ni(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _e(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Ln(i)&&Ln(a)){if(!_e(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Ln(n){return n!==null&&typeof n=="object"}/**
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
 */function nt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ai(n,e){const t=new Pi(n,e);return t.subscribe.bind(t)}class Pi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ri(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=$t),r.error===void 0&&(r.error=$t),r.complete===void 0&&(r.complete=$t);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ri(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $t(){}/**
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
 */const Di=1e3,Oi=2,ji=4*60*60*1e3,Li=.5;function Mn(n,e=Di,t=Oi){const s=e*Math.pow(t,n),r=Math.round(Li*s*(Math.random()-.5)*2);return Math.min(ji,s+r)}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class X{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Mi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vi;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fi(e))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=we){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=we){return this.instances.has(e)}getOptions(e=we){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ui(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=we){return this.component?this.component.multipleInstances?e:we:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ui(n){return n===we?void 0:n}function Fi(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var E;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(E||(E={}));const $i={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},Vi=E.INFO,Hi={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},zi=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Hi[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class un{constructor(e){this.name=e,this._logLevel=Vi,this._logHandler=zi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const Wi=(n,e)=>e.some(t=>n instanceof t);let Un,Fn;function Gi(){return Un||(Un=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qi(){return Fn||(Fn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ds=new WeakMap,Zt=new WeakMap,Os=new WeakMap,Vt=new WeakMap,hn=new WeakMap;function Ki(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(fe(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ds.set(t,n)}).catch(()=>{}),hn.set(e,n),e}function Ji(n){if(Zt.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Zt.set(n,e)}let Qt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Os.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yi(n){Qt=n(Qt)}function Xi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ht(this),e,...t);return Os.set(s,e.sort?e.sort():[e]),fe(s)}:qi().includes(n)?function(...e){return n.apply(Ht(this),e),fe(Ds.get(this))}:function(...e){return fe(n.apply(Ht(this),e))}}function Zi(n){return typeof n=="function"?Xi(n):(n instanceof IDBTransaction&&Ji(n),Wi(n,Gi())?new Proxy(n,Qt):n)}function fe(n){if(n instanceof IDBRequest)return Ki(n);if(Vt.has(n))return Vt.get(n);const e=Zi(n);return e!==n&&(Vt.set(n,e),hn.set(e,n)),e}const Ht=n=>hn.get(n);function js(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=fe(a);return s&&a.addEventListener("upgradeneeded",l=>{s(fe(a.result),l.oldVersion,l.newVersion,fe(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Qi=["get","getKey","getAll","getAllKeys","count"],ea=["put","add","delete","clear"],zt=new Map;function Bn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zt.get(e))return zt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=ea.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Qi.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&l.done]))[0]};return zt.set(e,i),i}Yi(n=>({...n,get:(e,t,s)=>Bn(e,t)||n.get(e,t,s),has:(e,t)=>!!Bn(e,t)||n.has(e,t)}));/**
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
 */class ta{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(na(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function na(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const en="@firebase/app",$n="0.12.3";/**
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
 */const re=new un("@firebase/app"),sa="@firebase/app-compat",ra="@firebase/analytics-compat",ia="@firebase/analytics",aa="@firebase/app-check-compat",oa="@firebase/app-check",ca="@firebase/auth",la="@firebase/auth-compat",da="@firebase/database",ua="@firebase/data-connect",ha="@firebase/database-compat",fa="@firebase/functions",pa="@firebase/functions-compat",ma="@firebase/installations",ga="@firebase/installations-compat",va="@firebase/messaging",wa="@firebase/messaging-compat",ya="@firebase/performance",ba="@firebase/performance-compat",Ia="@firebase/remote-config",_a="@firebase/remote-config-compat",xa="@firebase/storage",Sa="@firebase/storage-compat",Ea="@firebase/firestore",Ta="@firebase/vertexai",ka="@firebase/firestore-compat",Ca="firebase",Na="11.7.3";/**
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
 */const tn="[DEFAULT]",Aa={[en]:"fire-core",[sa]:"fire-core-compat",[ia]:"fire-analytics",[ra]:"fire-analytics-compat",[oa]:"fire-app-check",[aa]:"fire-app-check-compat",[ca]:"fire-auth",[la]:"fire-auth-compat",[da]:"fire-rtdb",[ua]:"fire-data-connect",[ha]:"fire-rtdb-compat",[fa]:"fire-fn",[pa]:"fire-fn-compat",[ma]:"fire-iid",[ga]:"fire-iid-compat",[va]:"fire-fcm",[wa]:"fire-fcm-compat",[ya]:"fire-perf",[ba]:"fire-perf-compat",[Ia]:"fire-rc",[_a]:"fire-rc-compat",[xa]:"fire-gcs",[Sa]:"fire-gcs-compat",[Ea]:"fire-fst",[ka]:"fire-fst-compat",[Ta]:"fire-vertex","fire-js":"fire-js",[Ca]:"fire-js-all"};/**
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
 */const _t=new Map,Pa=new Map,nn=new Map;function Vn(n,e){try{n.container.addComponent(e)}catch(t){re.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ie(n){const e=n.name;if(nn.has(e))return re.debug(`There were multiple attempts to register component ${e}.`),!1;nn.set(e,n);for(const t of _t.values())Vn(t,n);for(const t of Pa.values())Vn(t,n);return!0}function Me(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function K(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ra={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new ke("app","Firebase",Ra);/**
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
 */class Da{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
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
 */const st=Na;function Ls(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tn,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw pe.create("bad-app-name",{appName:String(r)});if(t||(t=ks()),!t)throw pe.create("no-options");const i=_t.get(r);if(i){if(_e(t,i.options)&&_e(s,i.config))return i;throw pe.create("duplicate-app",{appName:r})}const a=new Bi(r);for(const l of nn.values())a.addComponent(l);const c=new Da(t,s,a);return _t.set(r,c),c}function Ms(n=tn){const e=_t.get(n);if(!e&&n===tn&&ks())return Ls();if(!e)throw pe.create("no-app",{appName:n});return e}function J(n,e,t){var s;let r=(s=Aa[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),re.warn(c.join(" "));return}ie(new X(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Oa="firebase-heartbeat-database",ja=1,Qe="firebase-heartbeat-store";let Wt=null;function Us(){return Wt||(Wt=js(Oa,ja,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qe)}catch(t){console.warn(t)}}}}).catch(n=>{throw pe.create("idb-open",{originalErrorMessage:n.message})})),Wt}async function La(n){try{const t=(await Us()).transaction(Qe),s=await t.objectStore(Qe).get(Fs(n));return await t.done,s}catch(e){if(e instanceof Q)re.warn(e.message);else{const t=pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});re.warn(t.message)}}}async function Hn(n,e){try{const s=(await Us()).transaction(Qe,"readwrite");await s.objectStore(Qe).put(e,Fs(n)),await s.done}catch(t){if(t instanceof Q)re.warn(t.message);else{const s=pe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});re.warn(s.message)}}}function Fs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ma=1024,Ua=30;class Fa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $a(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Ua){const a=Va(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){re.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zn(),{heartbeatsToSend:s,unsentEntries:r}=Ba(this._heartbeatsCache.heartbeats),i=Es(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return re.warn(t),""}}}function zn(){return new Date().toISOString().substring(0,10)}function Ba(n,e=Ma){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Wn(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Wn(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $a{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ps()?Rs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await La(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wn(n){return Es(JSON.stringify({version:2,heartbeats:n})).length}function Va(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Ha(n){ie(new X("platform-logger",e=>new ta(e),"PRIVATE")),ie(new X("heartbeat",e=>new Fa(e),"PRIVATE")),J(en,$n,n),J(en,$n,"esm2017"),J("fire-js","")}Ha("");var za="firebase",Wa="11.7.3";/**
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
 */const Ya={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xe=new ke(Ka,Ja,Ya);function zs(n){return n instanceof Q&&n.code.includes("request-failed")}/**
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
 */function Ws({projectId:n}){return`${Ga}/projects/${n}/installations`}function Gs(n){return{token:n.token,requestStatus:2,expiresIn:Za(n.expiresIn),creationTime:Date.now()}}async function qs(n,e){const s=(await e.json()).error;return xe.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ks({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Xa(n,{refreshToken:e}){const t=Ks(n);return t.append("Authorization",Qa(e)),t}async function Js(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Za(n){return Number(n.replace("s","000"))}function Qa(n){return`${Hs} ${n}`}/**
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
 */async function eo({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Ws(n),r=Ks(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:t,authVersion:Hs,appId:n.appId,sdkVersion:Vs},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Js(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Gs(d.authToken)}}else throw await qs("Create Installation",l)}/**
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
 */function Ys(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function to(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const no=/^[cdef][\w-]{21}$/,sn="";function so(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ro(n);return no.test(t)?t:sn}catch{return sn}}function ro(n){return to(n).substr(0,22)}/**
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
 */function Pt(n){return`${n.appName}!${n.appId}`}/**
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
 */const Xs=new Map;function Zs(n,e){const t=Pt(n);Qs(t,e),io(t,e)}function Qs(n,e){const t=Xs.get(n);if(t)for(const s of t)s(e)}function io(n,e){const t=ao();t&&t.postMessage({key:n,fid:e}),oo()}let ye=null;function ao(){return!ye&&"BroadcastChannel"in self&&(ye=new BroadcastChannel("[Firebase] FID Change"),ye.onmessage=n=>{Qs(n.data.key,n.data.fid)}),ye}function oo(){Xs.size===0&&ye&&(ye.close(),ye=null)}/**
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
 */const co="firebase-installations-database",lo=1,Se="firebase-installations-store";let Gt=null;function pn(){return Gt||(Gt=js(co,lo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Se)}}})),Gt}async function xt(n,e){const t=Pt(n),r=(await pn()).transaction(Se,"readwrite"),i=r.objectStore(Se),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Zs(n,e.fid),e}async function er(n){const e=Pt(n),s=(await pn()).transaction(Se,"readwrite");await s.objectStore(Se).delete(e),await s.done}async function Rt(n,e){const t=Pt(n),r=(await pn()).transaction(Se,"readwrite"),i=r.objectStore(Se),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&Zs(n,c.fid),c}/**
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
 */async function mn(n){let e;const t=await Rt(n.appConfig,s=>{const r=uo(s),i=ho(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===sn?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function uo(n){const e=n||{fid:so(),registrationStatus:0};return tr(e)}function ho(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(xe.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fo(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:po(n)}:{installationEntry:e}}async function fo(n,e){try{const t=await eo(n,e);return xt(n.appConfig,t)}catch(t){throw zs(t)&&t.customData.serverCode===409?await er(n.appConfig):await xt(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function po(n){let e=await Gn(n.appConfig);for(;e.registrationStatus===1;)await Ys(100),e=await Gn(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await mn(n);return s||t}return e}function Gn(n){return Rt(n,e=>{if(!e)throw xe.create("installation-not-found");return tr(e)})}function tr(n){return mo(n)?{fid:n.fid,registrationStatus:0}:n}function mo(n){return n.registrationStatus===1&&n.registrationTime+$s<Date.now()}/**
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
 */async function go({appConfig:n,heartbeatServiceProvider:e},t){const s=vo(n,t),r=Xa(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Vs,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Js(()=>fetch(s,c));if(l.ok){const d=await l.json();return Gs(d)}else throw await qs("Generate Auth Token",l)}function vo(n,{fid:e}){return`${Ws(n)}/${e}/authTokens:generate`}/**
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
 */async function gn(n,e=!1){let t;const s=await Rt(n.appConfig,i=>{if(!nr(i))throw xe.create("not-registered");const a=i.authToken;if(!e&&bo(a))return i;if(a.requestStatus===1)return t=wo(n,e),i;{if(!navigator.onLine)throw xe.create("app-offline");const c=_o(i);return t=yo(n,c),c}});return t?await t:s.authToken}async function wo(n,e){let t=await qn(n.appConfig);for(;t.authToken.requestStatus===1;)await Ys(100),t=await qn(n.appConfig);const s=t.authToken;return s.requestStatus===0?gn(n,e):s}function qn(n){return Rt(n,e=>{if(!nr(e))throw xe.create("not-registered");const t=e.authToken;return xo(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yo(n,e){try{const t=await go(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await xt(n.appConfig,s),t}catch(t){if(zs(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await er(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xt(n.appConfig,s)}throw t}}function nr(n){return n!==void 0&&n.registrationStatus===2}function bo(n){return n.requestStatus===2&&!Io(n)}function Io(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+qa}function _o(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function xo(n){return n.requestStatus===1&&n.requestTime+$s<Date.now()}/**
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
 */async function So(n){const e=n,{installationEntry:t,registrationPromise:s}=await mn(e);return s?s.catch(console.error):gn(e).catch(console.error),t.fid}/**
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
 */async function Eo(n,e=!1){const t=n;return await To(t),(await gn(t,e)).token}async function To(n){const{registrationPromise:e}=await mn(n);e&&await e}/**
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
 */function ko(n){if(!n||!n.options)throw qt("App Configuration");if(!n.name)throw qt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw qt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function qt(n){return xe.create("missing-app-config-values",{valueName:n})}/**
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
 */const sr="installations",Co="installations-internal",No=n=>{const e=n.getProvider("app").getImmediate(),t=ko(e),s=Me(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ao=n=>{const e=n.getProvider("app").getImmediate(),t=Me(e,sr).getImmediate();return{getId:()=>So(t),getToken:r=>Eo(t,r)}};function Po(){ie(new X(sr,No,"PUBLIC")),ie(new X(Co,Ao,"PRIVATE"))}Po();J(Bs,fn);J(Bs,fn,"esm2017");/**
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
 */const Lo={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},F=new ke("analytics","Analytics",Lo);/**
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
 */function Mo(n){if(!n.startsWith(vn)){const e=F.create("invalid-gtag-resource",{gtagURL:n});return L.warn(e.message),""}return n}function rr(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Uo(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Fo(n,e){const t=Uo("firebase-js-sdk-policy",{createScriptURL:Mo}),s=document.createElement("script"),r=`${vn}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Bo(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $o(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const l=(await rr(t)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){L.error(c)}n("config",r,i)}async function Vo(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await rr(t);for(const l of a){const d=c.find(p=>p.measurementId===l),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){L.error(i)}}function Ho(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[c,l]=a;await Vo(n,e,t,c,l)}else if(i==="config"){const[c,l]=a;await $o(n,e,t,s,c,l)}else if(i==="consent"){const[c,l]=a;n("consent",c,l)}else if(i==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){L.error(c)}}return r}function zo(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Ho(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function Wo(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(vn)&&t.src.includes(n))return t;return null}/**
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
 */const Go=30,qo=1e3;class Ko{constructor(e={},t=qo){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ir=new Ko;function Jo(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Yo(n){var e;const{appId:t,apiKey:s}=n,r={method:"GET",headers:Jo(s)},i=jo.replace("{app-id}",t),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw F.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Xo(n,e=ir,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw F.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw F.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ec;return setTimeout(async()=>{c.abort()},Oo),ar({appId:s,apiKey:r,measurementId:i},a,c,e)}async function ar(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=ir){var i;const{appId:a,measurementId:c}=n;try{await Zo(s,e)}catch(l){if(c)return L.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Yo(n);return r.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!Qo(d)){if(r.deleteThrottleMetadata(a),c)return L.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw l}const f=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Mn(t,r.intervalMillis,Go):Mn(t,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(a,p),L.debug(`Calling attemptFetch again in ${f} millis`),ar(n,p,s,r)}}function Zo(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(F.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qo(n){if(!(n instanceof Q)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ec{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tc(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a=Object.assign(Object.assign({},s),{send_to:i});n("event",t,a)}}/**
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
 */async function nc(){if(Ps())try{await Rs()}catch(n){return L.warn(F.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return L.warn(F.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sc(n,e,t,s,r,i,a){var c;const l=Xo(n);l.then(v=>{t[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&L.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>L.error(v)),e.push(l);const d=nc().then(v=>{if(v)return s.getId()}),[f,p]=await Promise.all([l,d]);Wo(i)||Fo(i,f.measurementId),r("js",new Date);const u=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return u[Do]="firebase",u.update=!0,p!=null&&(u[Ro]=p),r("config",f.measurementId,u),f.measurementId}/**
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
 */class rc{constructor(e){this.app=e}_delete(){return delete Ge[this.app.options.appId],Promise.resolve()}}let Ge={},Kn=[];const Jn={};let Kt="dataLayer",ic="gtag",Yn,or,Xn=!1;function ac(){const n=[];if(As()&&n.push("This is a browser extension environment."),Ei()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=F.create("invalid-analytics-context",{errorInfo:e});L.warn(t.message)}}function oc(n,e,t){ac();const s=n.options.appId;if(!s)throw F.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)L.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw F.create("no-api-key");if(Ge[s]!=null)throw F.create("already-exists",{id:s});if(!Xn){Bo(Kt);const{wrappedGtag:i,gtagCore:a}=zo(Ge,Kn,Jn,Kt,ic);or=i,Yn=a,Xn=!0}return Ge[s]=sc(n,Kn,Jn,e,Yn,Kt,t),new rc(n)}function cc(n=Ms()){n=me(n);const e=Me(n,St);return e.isInitialized()?e.getImmediate():lc(n)}function lc(n,e={}){const t=Me(n,St);if(t.isInitialized()){const r=t.getImmediate();if(_e(e,t.getOptions()))return r;throw F.create("already-initialized")}return t.initialize({options:e})}function dc(n,e,t,s){n=me(n),tc(or,Ge[n.app.options.appId],e,t,s).catch(r=>L.error(r))}const Zn="@firebase/analytics",Qn="0.10.15";function uc(){ie(new X(St,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return oc(s,r,t)},"PUBLIC")),ie(new X("analytics-internal",n,"PRIVATE")),J(Zn,Qn),J(Zn,Qn,"esm2017");function n(e){try{const t=e.getProvider(St).getImmediate();return{logEvent:(s,r,i)=>dc(t,s,r,i)}}catch(t){throw F.create("interop-component-reg-failed",{reason:t})}}}uc();function wn(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function cr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hc=cr,lr=new ke("auth","Firebase",cr());/**
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
 */const Et=new un("@firebase/auth");function fc(n,...e){Et.logLevel<=E.WARN&&Et.warn(`Auth (${st}): ${n}`,...e)}function wt(n,...e){Et.logLevel<=E.ERROR&&Et.error(`Auth (${st}): ${n}`,...e)}/**
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
 */function Z(n,...e){throw bn(n,...e)}function H(n,...e){return bn(n,...e)}function yn(n,e,t){const s=Object.assign(Object.assign({},hc()),{[e]:t});return new ke("auth","Firebase",s).create(e,{appName:n.name})}function Ie(n){return yn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pc(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Z(n,"argument-error"),yn(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bn(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return lr.create(n,...e)}function w(n,e,...t){if(!n)throw bn(e,...t)}function ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wt(e),new Error(e)}function ae(n,e){n||ne(e)}/**
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
 */function rn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function mc(){return es()==="http:"||es()==="https:"}function es(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function gc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mc()||As()||"connection"in navigator)?navigator.onLine:!0}function vc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Ii()||xi()}get(){return gc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function In(n,e){ae(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dr{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bc=new rt(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ue(n,e,t,s,r={}){return ur(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=nt(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return _i()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&dn(n.emulatorConfig.host)&&(d.credentials="include"),dr.fetch()(await hr(n,n.config.apiHost,t,c),d)})}async function ur(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},wc),e);try{const r=new _c(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw gt(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw gt(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw gt(n,"user-disabled",a);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yn(n,f,d);Z(n,f)}}catch(r){if(r instanceof Q)throw r;Z(n,"network-request-failed",{message:String(r)})}}async function Ic(n,e,t,s,r={}){const i=await Ue(n,e,t,s,r);return"mfaPendingCredential"in i&&Z(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hr(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?In(n.config,r):`${n.config.apiScheme}://${r}`;return yc.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class _c{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(H(this.auth,"network-request-failed")),bc.get())})}}function gt(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=H(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function xc(n,e){return Ue(n,"POST","/v1/accounts:delete",e)}async function Tt(n,e){return Ue(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sc(n,e=!1){const t=me(n),s=await t.getIdToken(e),r=xn(s);w(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:qe(Jt(r.auth_time)),issuedAtTime:qe(Jt(r.iat)),expirationTime:qe(Jt(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jt(n){return Number(n)*1e3}function xn(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ts(t);return r?JSON.parse(r):(wt("Failed to decode base64 JWT payload"),null)}catch(r){return wt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ts(n){const e=xn(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function et(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Q&&Ec(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ec({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Tc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class an{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qe(this.lastLoginAt),this.creationTime=qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kt(n){var e;const t=n.auth,s=await n.getIdToken(),r=await et(n,Tt(t,{idToken:s}));w(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fr(i.providerUserInfo):[],c=Cc(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new an(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function kc(n){const e=me(n);await kt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cc(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fr(n){return n.map(e=>{var{providerId:t}=e,s=wn(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Nc(n,e){const t=await ur(n,{},async()=>{const s=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await hr(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",dr.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ac(n,e){return Ue(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
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
 */class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ts(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(e.length!==0,"internal-error");const t=ts(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Nc(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Re;return s&&(w(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(w(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(w(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
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
 */function le(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class V{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=wn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new an(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await et(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sc(this,e)}reload(){return kc(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new V(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await kt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(Ie(this.auth));const e=await this.getIdToken();return await et(this,xc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,l,d,f;const p=(s=t.displayName)!==null&&s!==void 0?s:void 0,u=(r=t.email)!==null&&r!==void 0?r:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,I=(d=t.createdAt)!==null&&d!==void 0?d:void 0,b=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:k,isAnonymous:T,providerData:y,stsTokenManager:A}=t;w(N&&A,e,"internal-error");const M=Re.fromJSON(this.name,A);w(typeof N=="string",e,"internal-error"),le(p,e.name),le(u,e.name),w(typeof k=="boolean",e,"internal-error"),w(typeof T=="boolean",e,"internal-error"),le(v,e.name),le(S,e.name),le(x,e.name),le(g,e.name),le(I,e.name),le(b,e.name);const B=new V({uid:N,auth:e,email:u,emailVerified:k,displayName:p,isAnonymous:T,photoURL:S,phoneNumber:v,tenantId:x,stsTokenManager:M,createdAt:I,lastLoginAt:b});return y&&Array.isArray(y)&&(B.providerData=y.map(z=>Object.assign({},z))),g&&(B._redirectEventId=g),B}static async _fromIdTokenResponse(e,t,s=!1){const r=new Re;r.updateFromServerResponse(t);const i=new V({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await kt(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];w(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?fr(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Re;c.updateFromIdToken(s);const l=new V({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new an(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const ns=new Map;function se(n){ae(n instanceof Function,"Expected a class definition");let e=ns.get(n);return e?(ae(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ns.set(n,e),e)}/**
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
 */class pr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pr.type="NONE";const ss=pr;/**
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
 */function yt(n,e,t){return`firebase:${n}:${e}:${t}`}class De{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=yt(this.userKey,r.apiKey,i),this.fullPersistenceKey=yt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Tt(this.auth,{idToken:e}).catch(()=>{});return t?V._fromGetAccountInfoResponse(this.auth,t,e):null}return V._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new De(se(ss),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||se(ss);const a=yt(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let p;if(typeof f=="string"){const u=await Tt(e,{idToken:f}).catch(()=>{});if(!u)break;p=await V._fromGetAccountInfoResponse(e,u,f)}else p=V._fromJSON(e,f);d!==i&&(c=p),i=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new De(i,e,s):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new De(i,e,s))}}/**
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
 */function rs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(br(e))return"Blackberry";if(Ir(e))return"Webos";if(gr(e))return"Safari";if((e.includes("chrome/")||vr(e))&&!e.includes("edge/"))return"Chrome";if(yr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mr(n=O()){return/firefox\//i.test(n)}function gr(n=O()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vr(n=O()){return/crios\//i.test(n)}function wr(n=O()){return/iemobile/i.test(n)}function yr(n=O()){return/android/i.test(n)}function br(n=O()){return/blackberry/i.test(n)}function Ir(n=O()){return/webos/i.test(n)}function Sn(n=O()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pc(n=O()){var e;return Sn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rc(){return Si()&&document.documentMode===10}function _r(n=O()){return Sn(n)||yr(n)||Ir(n)||br(n)||/windows phone/i.test(n)||wr(n)}/**
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
 */function xr(n,e=[]){let t;switch(n){case"Browser":t=rs(O());break;case"Worker":t=`${rs(O())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${st}/${s}`}/**
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
 */class Dc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Oc(n,e={}){return Ue(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
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
 */const jc=6;class Lc{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:jc,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mc{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new is(this),this.idTokenSubscription=new is(this),this.beforeStateQueue=new Dc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=se(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await De.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Tt(this,{idToken:e}),s=await V._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(K(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(Ie(this));const t=e?me(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(Ie(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(Ie(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oc(this),t=new Lc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ke("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ac(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&se(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await De.create(this,[se(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(K(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&fc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dt(n){return me(n)}class is{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ai(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let En={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uc(n){En=n}function Fc(n){return En.loadJS(n)}function Bc(){return En.gapiScript}function $c(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Vc(n,e){const t=Me(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(_e(i,e??{}))return r;Z(r,"already-initialized")}return t.initialize({options:e})}function Hc(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(se);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zc(n,e,t){const s=Dt(n);w(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Sr(e),{host:a,port:c}=Wc(e),l=c===null?"":`:${c}`,d={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){w(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),w(_e(d,s.config.emulator)&&_e(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,dn(a)?(Ns("Auth",!0),wi(`${i}//${a}${l}`)):Gc()}function Sr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wc(n){const e=Sr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:as(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:as(a)}}}function as(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Er{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ne("not implemented")}_getIdTokenResponse(e){return ne("not implemented")}_linkToIdToken(e,t){return ne("not implemented")}_getReauthenticationResolver(e){return ne("not implemented")}}/**
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
 */async function Oe(n,e){return Ic(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
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
 */const qc="http://localhost";class Ee extends Er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ee(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Z("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=wn(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new Ee(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Oe(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Oe(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oe(e,t)}buildRequest(){const e={requestUri:qc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nt(t)}return e}}/**
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
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class it extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class de extends it{constructor(){super("facebook.com")}static credential(e){return Ee._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.FACEBOOK_SIGN_IN_METHOD="facebook.com";de.PROVIDER_ID="facebook.com";/**
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
 */class te extends it{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ee._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return te.credential(t,s)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
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
 */class ue extends it{constructor(){super("github.com")}static credential(e){return Ee._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.GITHUB_SIGN_IN_METHOD="github.com";ue.PROVIDER_ID="github.com";/**
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
 */class he extends it{constructor(){super("twitter.com")}static credential(e,t){return Ee._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return he.credential(t,s)}catch{return null}}}he.TWITTER_SIGN_IN_METHOD="twitter.com";he.PROVIDER_ID="twitter.com";/**
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
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await V._fromIdTokenResponse(e,s,r),a=os(s);return new je({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=os(s);return new je({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function os(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ct extends Q{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ct(e,t,s,r)}}function Tr(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ct._fromErrorAndOperation(n,i,e,s):i})}async function Kc(n,e,t=!1){const s=await et(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return je._forOperation(n,"link",s)}/**
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
 */async function Jc(n,e,t=!1){const{auth:s}=n;if(K(s.app))return Promise.reject(Ie(s));const r="reauthenticate";try{const i=await et(n,Tr(s,r,e,n),t);w(i.idToken,s,"internal-error");const a=xn(i.idToken);w(a,s,"internal-error");const{sub:c}=a;return w(n.uid===c,s,"user-mismatch"),je._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Z(s,"user-mismatch"),i}}/**
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
 */async function Yc(n,e,t=!1){if(K(n.app))return Promise.reject(Ie(n));const s="signIn",r=await Tr(n,s,e),i=await je._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function Xc(n,e,t,s){return me(n).onIdTokenChanged(e,t,s)}function Zc(n,e,t){return me(n).beforeAuthStateChanged(e,t)}const Nt="__sak";/**
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
 */class kr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qc=1e3,el=10;class Cr extends kr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_r(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);Rc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,el):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Qc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cr.type="LOCAL";const tl=Cr;/**
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
 */class Nr extends kr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nr.type="SESSION";const Ar=Nr;/**
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
 */function nl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ot(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await nl(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ot.receivers=[];/**
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
 */function kn(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=kn("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(p){const u=p;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(u.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Y(){return window}function rl(n){Y().location.href=n}/**
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
 */function Pr(){return typeof Y().WorkerGlobalScope<"u"&&typeof Y().importScripts=="function"}async function il(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function al(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ol(){return Pr()?self:null}/**
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
 */const Rr="firebaseLocalStorageDb",cl=1,At="firebaseLocalStorage",Dr="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jt(n,e){return n.transaction([At],e?"readwrite":"readonly").objectStore(At)}function ll(){const n=indexedDB.deleteDatabase(Rr);return new at(n).toPromise()}function on(){const n=indexedDB.open(Rr,cl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(At,{keyPath:Dr})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(At)?e(s):(s.close(),await ll(),e(await on()))})})}async function cs(n,e,t){const s=jt(n,!0).put({[Dr]:e,value:t});return new at(s).toPromise()}async function dl(n,e){const t=jt(n,!1).get(e),s=await new at(t).toPromise();return s===void 0?null:s.value}function ls(n,e){const t=jt(n,!0).delete(e);return new at(t).toPromise()}const ul=800,hl=3;class Or{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await on(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>hl)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(ol()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await il(),!this.activeServiceWorker)return;this.sender=new sl(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||al()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await on();return await cs(e,Nt,"1"),await ls(e,Nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cs(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dl(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ls(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jt(r,!1).getAll();return new at(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ul)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Or.type="LOCAL";const fl=Or;new rt(3e4,6e4);/**
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
 */function jr(n,e){return e?se(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Cn extends Er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pl(n){return Yc(n.auth,new Cn(n),n.bypassAuthState)}function ml(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Jc(t,new Cn(n),n.bypassAuthState)}async function gl(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Kc(t,new Cn(n),n.bypassAuthState)}/**
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
 */class Lr{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pl;case"linkViaPopup":case"linkViaRedirect":return gl;case"reauthViaPopup":case"reauthViaRedirect":return ml;default:Z(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vl=new rt(2e3,1e4);async function wl(n,e,t){if(K(n.app))return Promise.reject(H(n,"operation-not-supported-in-this-environment"));const s=Dt(n);pc(n,e,Tn);const r=jr(s,t);return new be(s,"signInViaPopup",e,r).executeNotNull()}class be extends Lr{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,be.currentPopupAction&&be.currentPopupAction.cancel(),be.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(H(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,be.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vl.get())};e()}}be.currentPopupAction=null;/**
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
 */const yl="pendingRedirect",bt=new Map;class bl extends Lr{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const s=await Il(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Il(n,e){const t=Sl(e),s=xl(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function _l(n,e){bt.set(n._key(),e)}function xl(n){return se(n._redirectPersistence)}function Sl(n){return yt(yl,n.config.apiKey,n.name)}async function El(n,e,t=!1){if(K(n.app))return Promise.reject(Ie(n));const s=Dt(n),r=jr(s,e),a=await new bl(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const Tl=10*60*1e3;class kl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Mr(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(H(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tl&&this.cachedEventUids.clear(),this.cachedEventUids.has(ds(e))}saveEventToCache(e){this.cachedEventUids.add(ds(e)),this.lastProcessedEventTime=Date.now()}}function ds(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Mr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mr(n);default:return!1}}/**
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
 */async function Nl(n,e={}){return Ue(n,"GET","/v1/projects",e)}/**
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
 */const Al=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pl=/^https?/;async function Rl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Nl(n);for(const t of e)try{if(Dl(t))return}catch{}Z(n,"unauthorized-domain")}function Dl(n){const e=rn(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Pl.test(t))return!1;if(Al.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Ol=new rt(3e4,6e4);function us(){const n=Y().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jl(n){return new Promise((e,t)=>{var s,r,i;function a(){us(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{us(),t(H(n,"network-request-failed"))},timeout:Ol.get()})}if(!((r=(s=Y().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Y().gapi)===null||i===void 0)&&i.load)a();else{const c=$c("iframefcb");return Y()[c]=()=>{gapi.load?a():t(H(n,"network-request-failed"))},Fc(`${Bc()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw It=null,e})}let It=null;function Ll(n){return It=It||jl(n),It}/**
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
 */const Ml=new rt(5e3,15e3),Ul="__/auth/iframe",Fl="emulator/auth/iframe",Bl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$l=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vl(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?In(e,Fl):`https://${n.config.authDomain}/${Ul}`,s={apiKey:e.apiKey,appName:n.name,v:st},r=$l.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${nt(s).slice(1)}`}async function Hl(n){const e=await Ll(n),t=Y().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:Vl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bl,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=H(n,"network-request-failed"),c=Y().setTimeout(()=>{i(a)},Ml.get());function l(){Y().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const zl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wl=500,Gl=600,ql="_blank",Kl="http://localhost";class hs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jl(n,e,t,s=Wl,r=Gl){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},zl),{width:s.toString(),height:r.toString(),top:i,left:a}),d=O().toLowerCase();t&&(c=vr(d)?ql:t),mr(d)&&(e=e||Kl,l.scrollbars="yes");const f=Object.entries(l).reduce((u,[v,S])=>`${u}${v}=${S},`,"");if(Pc(d)&&c!=="_self")return Yl(e||"",c),new hs(null);const p=window.open(e||"",c,f);w(p,n,"popup-blocked");try{p.focus()}catch{}return new hs(p)}function Yl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Xl="__/auth/handler",Zl="emulator/auth/handler",Ql=encodeURIComponent("fac");async function fs(n,e,t,s,r,i){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:st,eventId:r};if(e instanceof Tn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ni(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof it){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${Ql}=${encodeURIComponent(l)}`:"";return`${ed(n)}?${nt(c).slice(1)}${d}`}function ed({config:n}){return n.emulator?In(n,Zl):`https://${n.authDomain}/${Xl}`}/**
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
 */const Yt="webStorageSupport";class td{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ar,this._completeRedirectFn=El,this._overrideRedirectResult=_l}async _openPopup(e,t,s,r){var i;ae((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await fs(e,t,s,rn(),r);return Jl(e,a,kn())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await fs(e,t,s,rn(),r);return rl(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(ae(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Hl(e),s=new kl(e);return t.register("authEvent",r=>(w(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yt,{type:Yt},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Yt];a!==void 0&&t(!!a),Z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _r()||gr()||Sn()}}const nd=td;var ps="@firebase/auth",ms="1.10.4";/**
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
 */class sd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function id(n){ie(new X("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;w(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xr(n)},d=new Mc(s,r,i,l);return Hc(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ie(new X("auth-internal",e=>{const t=Dt(e.getProvider("auth").getImmediate());return(s=>new sd(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),J(ps,ms,rd(n)),J(ps,ms,"esm2017")}/**
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
 */const ad=5*60,od=Cs("authIdTokenMaxAge")||ad;let gs=null;const cd=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>od)return;const r=t==null?void 0:t.token;gs!==r&&(gs=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ld(n=Ms()){const e=Me(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vc(n,{popupRedirectResolver:nd,persistence:[fl,tl,Ar]}),s=Cs("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=cd(i.toString());Zc(t,a,()=>a(t.currentUser)),Xc(t,c=>a(c))}}const r=gi("auth");return r?zc(t,`http://${r}`):Ns("Auth",!1),t}function dd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Uc({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=H("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",dd().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});id("Browser");const ud={apiKey:"AIzaSyDPJPxSGMriB5JTSfe5WgmCoaOsnHNfKIw",authDomain:"todo-app-9076d.firebaseapp.com",projectId:"todo-app-9076d",storageBucket:"todo-app-9076d.firebasestorage.app",messagingSenderId:"186858367833",appId:"1:186858367833:web:caa17c7d22ac27b111ba48",measurementId:"G-PSKSKTK9N9"},Ur=Ls(ud);cc(Ur);const hd=ld(Ur),fd=new te,pd="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2024%2024'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.5.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20141)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20url(%23radial-gradient);%20}%20.st2%20{%20fill:%20url(%23linear-gradient);%20}%20.st3%20{%20fill:%20%23fc4c53;%20}%20.st4%20{%20fill:%20url(%23radial-gradient1);%20}%20.st5%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3cpath%20class='st0'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3c/clipPath%3e%3cradialGradient%20id='radial-gradient'%20cx='1.4787'%20cy='12.7883'%20fx='1.4787'%20fy='12.7883'%20r='9.6555'%20gradientTransform='translate(2.4587%20-.293)%20scale(.8032%201.0842)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.368'%20stop-color='%23ffcf09'/%3e%3cstop%20offset='.7176'%20stop-color='%23ffcf09'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%23ffcf09'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='radial-gradient1'%20cx='14.2953'%20cy='23.2909'%20fx='14.2953'%20fy='23.2909'%20r='11.8784'%20gradientTransform='translate(-3.434%20-.6716)%20scale(1.3272%201.0073)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.3827'%20stop-color='%2334a853'/%3e%3cstop%20offset='.7062'%20stop-color='%2334a853'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%2334a853'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='linear-gradient'%20x1='23.5582'%20y1='6.2864'%20x2='12.1477'%20y2='20.2993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.6711'%20stop-color='%234285f4'/%3e%3cstop%20offset='.8852'%20stop-color='%234285f4'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='st3'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3cg%20class='st5'%3e%3cellipse%20class='st1'%20cx='3.6464'%20cy='13.5725'%20rx='7.7549'%20ry='10.4689'/%3e%3cellipse%20class='st4'%20cx='15.5383'%20cy='22.7886'%20rx='15.7646'%20ry='11.9647'%20transform='translate(-2.7047%202.1016)%20rotate(-7.1197)'/%3e%3cpolygon%20class='st2'%20points='11.1048%208.2797%2011.5957%2013.8759%2012.2191%2017.6234%2019.5807%2024.4713%2028.1881%208.5742%2011.1048%208.2797'/%3e%3c/g%3e%3c/svg%3e",md=()=>{var T;h.useEffect(()=>{document.title="Sign In – ToDo App"},[]);const e=(T=Xr().state)==null?void 0:T.message,{loadUserProfile:t}=tt(),{theme:s}=Le(),[r,i]=h.useState(e||""),[a,c]=h.useState(""),[l,d]=h.useState(""),[f,p]=h.useState(""),[u,v]=h.useState(!1),[S,x]=h.useState(!1),[g,I]=h.useState(!1),b=Te();h.useEffect(()=>{const y=sessionStorage.getItem("accountDeleteMessage");y&&i(y)},[]),h.useEffect(()=>{if(r){const y=setTimeout(()=>{i("")},4e3);return()=>clearTimeout(y)}},[r]);const N=async y=>{if(y.preventDefault(),!a||!l){p("Enter user details.");return}a&&l&&(p(""),v(!0)),setTimeout(async()=>{try{await U.post("/api/signin",{usernameOrEmail:a,password:l}),await t(),b("/all",{replace:!0})}catch(A){A.response?p(A.response.data.error||"Sign In failed"):p("Network error")}finally{v(!1)}},1e3)},k=async()=>{try{x(!0);const M=await(await wl(hd,fd)).user.getIdToken();await U.post("/api/firebase-signin",{token:M}),await t(),p(""),b("/all",{replace:!0})}catch(y){console.error("Google sign-in error:",y),p("Google sign-in failed. Please try again.")}finally{x(!1)}};return o.jsxs("div",{className:"app-text-medium",children:[r&&o.jsx("div",{className:"text-error desktop:mb-2 mb-2 w-full text-center font-semibold",children:o.jsx("p",{children:r})}),o.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-9 flex max-w-[300px] flex-col gap-4",onSubmit:y=>N(y),children:[f&&o.jsx("div",{className:"text-error desktop:mb-2 absolute bottom-full mx-auto mb-1 w-full text-center",children:o.jsx("p",{children:f})}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"usernameOrEmail",className:"legend-base",children:"Username or Email"}),o.jsx("input",{type:"text",id:"usernameOrEmail",name:"usernameOrEmail",autoComplete:"off",required:!0,placeholder:"Enter username or email",onChange:y=>c(y.target.value),value:a,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),o.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${g?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter Password",onChange:y=>d(y.target.value),value:l,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),o.jsx("img",{src:g?s==="dark"?Ye:Je:s==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:y=>y.preventDefault(),onClick:y=>{y.preventDefault();const A=document.getElementById("password"),M=A.selectionStart;I(B=>!B),setTimeout(()=>{A.setSelectionRange(M,M),A.focus()},0)}})]})]}),o.jsx("button",{className:"button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",type:"submit",children:u?o.jsx($,{color:"#fff",size:24}):"Sign In"})]}),o.jsx("p",{className:"desktop:my-4 my-2 text-center",children:"Or"}),o.jsx("div",{className:"mx-auto max-w-[300px]",children:o.jsx("button",{onClick:k,className:"darkborder-gray-300 flex w-full cursor-pointer items-center justify-center gap-3 rounded-[5px] border border-black py-3.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",type:"button",children:S?o.jsx(oi,{}):o.jsxs(o.Fragment,{children:[o.jsx("img",{src:pd,alt:"Google logo",className:"mb-1 h-5 w-5"}),"Sign in with Google"]})})}),o.jsx("div",{className:"mt-4 flex items-center justify-center",children:o.jsx(Ke,{to:"/todo-app/forget-password",className:"text-gradient-link font-bold",onClick:y=>{y.preventDefault(),b("/forget-password",{replace:!0})},children:"Forgot password?"})}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Don't have an account?"}),o.jsx(Ke,{to:"/todo-app/sign-up",className:"text-gradient-link font-bold",onClick:y=>{y.preventDefault(),b("/sign-up",{replace:!0})},children:"Sign Up"})]})]})},gd=()=>{h.useEffect(()=>{document.title="Forgot Password – ToDo App"},[]);const n=Te(),[e,t]=h.useState(""),[s,r]=h.useState(),[i,a]=h.useState(!0),[c,l]=h.useState(""),[d,f]=h.useState(!1),[p,u]=h.useState(!1),v=x=>{l(""),t(x.toLowerCase());const I=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(x);r(I)},S=async x=>{x.preventDefault(),e||l("Please enter your email"),s&&(f(!0),l(""),setTimeout(async()=>{try{await U.post("/api/forgot-password",{email:e}),u(!0)}catch(g){g.response?l(g.response.data.error):l("Something went wrong. Please try again later.")}finally{f(!1)}},1e3))};return o.jsxs("div",{className:`${p?"bg-gray-300 dark:bg-gray-900":""} app-text-medium flex h-screen items-center justify-center`,children:[!p&&o.jsxs("div",{className:"relative",children:[o.jsx("h1",{className:"text-gradient-heading app-text-large-tight mb-18 text-center",children:"Forgot Password?"}),c&&o.jsx("div",{className:"absolute top-13 w-full text-center",children:o.jsx("p",{className:"text-error",children:c})}),o.jsx("p",{className:"text-18 tracking-negative-17 font-weight-regular mb-6 max-w-[300px] text-center leading-18",children:"Enter your email address below and we'll send you a link to reset your password:"}),o.jsxs("form",{className:"mx-auto max-w-[300px]",onSubmit:x=>S(x),children:[o.jsxs("div",{className:"relative",children:[o.jsxs("fieldset",{className:`${e?i||s?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"email",className:" legend-base",children:"Email Address"}),o.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:x=>{x.key===" "&&x.preventDefault()},onFocus:()=>a(!0),onChange:x=>v(x.target.value),onBlur:()=>a(!1),value:e,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"})]}),e&&!s&&!i&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),o.jsx("button",{className:"button-gradient mt-8 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",type:"submit",children:d?o.jsx($,{color:"#fff",size:24}):"Send reset link"})]}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Back to"}),o.jsx(Ke,{to:"/sign-in",onClick:x=>{x.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]}),p&&o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"app-text-large-tight text-success mb-6",children:"Success!"}),o.jsx("p",{children:"If this email is registered, you will receive a reset link."})]})]})},vd=()=>{const n=Te(),e=cn(),{theme:t}=Le(),[s,r]=h.useState(""),[i,a]=h.useState(),[c,l]=h.useState(!0),[d,f]=h.useState(!1),[p,u]=h.useState(""),[v,S]=h.useState(),[x,g]=h.useState(!0),[I,b]=h.useState(!1),[N,k]=h.useState(""),[T,y]=h.useState(!1),[A,M]=h.useState(!1);h.useEffect(()=>{document.title="Reset Password – ToDo App"},[]);const[B]=Zr(),z=B.get("token");h.useEffect(()=>{z||n("/sign-in",{replace:!0})},[z,n]);const Ce=_=>{r(_);const j=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(_);a(j)},Ne=_=>{u(_),S(_===s)},W=async _=>{if(_.preventDefault(),!s||!p){k("All fields are required.");return}i&&v&&(y(!0),k(""),setTimeout(async()=>{try{await U.post("/api/reset-password",{token:z,newPassword:s}),M(!0)}catch(D){D.response?k(D.response.data.error):k("Something went wrong. Please try again later.")}finally{y(!1)}},1e3))};return o.jsxs("div",{className:"app-text-medium",children:[!A&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center",children:[o.jsx("h1",{children:o.jsx("span",{className:"text-gradient-heading app-text-large-tight",children:"Reset Your Password"})}),o.jsxs("form",{onSubmit:_=>W(_),className:"relative max-w-[300px] min-w-[300px]",children:[N&&o.jsx("div",{className:"absolute top-4 w-full text-center",children:o.jsx("p",{className:"text-error",children:N})}),o.jsxs("div",{className:"relative mt-18",children:[o.jsxs("fieldset",{className:`${s?c||i?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"password",className:"legend-base",children:"New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${d?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter password",onKeyDown:_=>{_.key===" "&&_.preventDefault()},onFocus:()=>l(!0),onChange:_=>Ce(_.target.value),onBlur:()=>l(!1),value:s,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:d?t==="dark"?Ye:Je:t==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:_=>_.preventDefault(),onClick:_=>{_.preventDefault();const D=document.getElementById("password"),j=D.selectionStart;f(ee=>!ee),setTimeout(()=>{D.setSelectionRange(j,j),D.focus()},0)}})]})]}),s&&!i&&!c&&o.jsx("div",{className:`${e>=1440?"absolute":""} top-0 left-[-320px]`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),o.jsxs("div",{className:"relative mt-4",children:[o.jsxs("fieldset",{className:`${p?x||v?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[o.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm New Password"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("input",{type:`${I?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",required:!0,placeholder:"Confirm your password",onKeyDown:_=>{_.key===" "&&_.preventDefault()},onFocus:()=>g(!0),onChange:_=>Ne(_.target.value),onBlur:()=>g(!1),value:p,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),o.jsx("img",{src:I?t==="dark"?Ye:Je:t==="dark"?Ze:Xe,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:_=>_.preventDefault(),onClick:_=>{_.preventDefault();const D=document.getElementById("confirm-password"),j=D.selectionStart;b(ee=>!ee),setTimeout(()=>{D.setSelectionRange(j,j),D.focus()},0)}})]})]}),p&&!v&&!x&&o.jsx("div",{className:"absolute",children:o.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),o.jsx("button",{className:"button-gradient mt-10 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",children:T?o.jsx($,{color:"#fff",size:24}):"Reset Password"})]})]}),A&&o.jsxs("div",{className:"flex h-screen flex-col items-center justify-center text-center",children:[o.jsx("h1",{className:"app-text-large-tight",children:o.jsx("span",{className:"text-success",children:"Password changed successfully!"})}),o.jsx("p",{className:"mt-6",children:"You can now sign in with your new password."}),o.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[o.jsx("p",{children:"Go to"}),o.jsx(Ke,{to:"/todo-app/sign-in",onClick:_=>{_.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})]})},wd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e",yd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='9'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%20d='M1%204.304L3.696%207l6-6'/%3e%3c/svg%3e",bd=""+new URL("icon-drag-light-CeQdmhq9.svg",import.meta.url).href,Id=""+new URL("icon-drag-dark-V_WBwAmt.svg",import.meta.url).href,_d=({input:n,isChecked:e,id:t,setDraggedId:s,handleDrop:r,toggleToDoCheckedStatus:i,clearToDoById:a})=>{const{theme:c}=Le();return o.jsx("li",{draggable:!0,onDragStart:l=>{s(t),l.target.classList.add("dragging")},onDragOver:l=>l.preventDefault(),onDrop:()=>{r(t)},onDragEnd:l=>{l.target.classList.remove("dragging")},className:"bg-gray-50 dark:bg-gray-900",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between px-5 py-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:c==="dark"?Id:bd,className:"tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-grab"}),o.jsx("div",{className:"radio-btn tablet:h-6 tablet:w-6 box-border flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700",style:e?{backgroundImage:"var(--color-gradient-check)",border:0}:{},onClick:()=>i(t),id:t,children:e&&o.jsx("img",{src:yd})}),o.jsx("p",{className:` ${c==="dark"?e?"text-gray-600 line-through":"":e?"text-gray-400 line-through":""}`,children:n})]}),o.jsx("img",{src:wd,alt:"Cross Icon",onClick:()=>a(t),className:"tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-pointer"})]}),o.jsx("div",{className:"h-[1px] border-1 border-gray-300 dark:border-gray-700"})]})})},Xt=()=>{const{allToDos:n,activeToDos:e,completedToDos:t,setUpdatedToDos:s,setReorderedToDoList:r}=Qr(),{currentPath:i,toDos:a}=ei(),{userProfile:c}=tt(),l=c==null?void 0:c.email,[d,f]=h.useState("");let p,u;h.useEffect(()=>{document.title="All ToDos – ToDo App"},[]);const v=g=>{if(d===null||d===g)return;const I=a.map(T=>T.toDoId),b=I.findIndex(T=>T===d),N=I.findIndex(T=>T===g);if(b===-1||N===-1)return;const k=[...I];k[b]=g,k[N]=d,p=k.map(T=>a.find(y=>y.toDoId===T)),r({list:[...p],path:i}),u=JSON.stringify({currentPath:i,email:l,draggedId:d,droppedId:g}),U.post("/api/todos-reorder",{currentPath:i,email:l,draggedId:d,droppedId:g}).catch(()=>{if(navigator.sendBeacon){const T=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/todos-reorder",T)}}),f("")},S=g=>{p=n.map(b=>b.toDoId===g?{...b,isChecked:!b.isChecked}:b),s([...p]);const I=p.find(b=>b.toDoId===g);I&&(u=JSON.stringify({email:l,toggledId:I.toDoId,isChecked:I.isChecked}),U.post("/api/update-todo-status",{email:l,toggledId:I.toDoId,isChecked:I.isChecked}).catch(()=>{if(navigator.sendBeacon){const b=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/update-todo-status",b)}}))},x=g=>{p=n.filter(I=>I.toDoId!==g),s([...p]),u=JSON.stringify({email:l,deletedId:g}),U.post("/api/delete-todo-item",{email:l,deletedId:g}).catch(()=>{if(navigator.sendBeacon){const I=new Blob([u],{type:"application/json"});navigator.sendBeacon("/api/delete-todo-item",I)}})};return o.jsx("ul",{children:a.map((g,I)=>o.jsx(_d,{input:g.toDo,id:g.toDoId,isChecked:g.isChecked,setDraggedId:f,handleDrop:v,toggleToDoCheckedStatus:S,clearToDoById:x},g.toDoId))})};function xd(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}),o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",border:"4px solid transparent",borderTop:"4px solid",borderImageSlice:1,borderImageSource:"var(--color-gradient-button)",animation:"spin 1s linear infinite"}})]})}const Sd=({setIsProfilePictureUploadMenu:n,onImageChange:e})=>{const{profilePictureURL:t,previewImage:s,setPreviewImage:r,setImageToUpload:i,isProfilePictureChanged:a,setIsProfilePictureChanged:c,setNoProfilePicture:l}=ys(),[d,f]=h.useState(!1),p=h.useRef(null),u=g=>{const I=g.target.files[0];I&&I.type.startsWith("image/")&&(s&&URL.revokeObjectURL(s),i(I),r(URL.createObjectURL(I)),c(!0),console.log(I)),g.target.value=""},v=()=>{if(f(!0),s){setTimeout(()=>{URL.revokeObjectURL(s),r(""),i(""),c(!0),f(!1)},1500);return}if(t){setTimeout(()=>{r(bs),l(!0),c(!0),f(!1)},1500);return}c(!1),n(!1)},S=()=>{c(!1),s?(f(!0),setTimeout(()=>{e(),f(!1),n(!1)},1500)):setTimeout(()=>{e(),n(!1)},500)},x=()=>{c(!1),n(!1)};return o.jsxs("div",{className:"profile-picture-upload-menu app-text-medium mx-auto max-w-[400px] rounded-[5px] px-4 py-5 ",children:[o.jsxs("div",{className:"flex items-center justify-between gap-2",children:[o.jsxs("div",{className:"relative h-32 w-32 overflow-hidden rounded-full",children:[o.jsx("img",{src:s||t,className:"h-full w-full object-cover",alt:"Profile Picture"}),d&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})})]}),o.jsxs("div",{className:"flex flex-col gap-4 dark:text-black",children:[o.jsx("label",{htmlFor:"profile-upload",className:"upload-button-gradient cursor-pointer rounded-[5px] p-3",children:"Upload Image"}),o.jsx("input",{type:"file",id:"profile-upload",accept:"image/*",ref:p,className:"hidden",onChange:g=>u(g)}),o.jsx("button",{className:"remove-button-gradient cursor-pointer rounded-[5px] p-3",onClick:()=>v(),children:"Remove Image"})]})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>x(),children:"Cancel"}),o.jsx("button",{className:`save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 ${a?"":"opacity-65"}`,onClick:()=>S(),children:"Save"})]}),o.jsx("div",{children:o.jsx("p",{className:"app-text-small mt-5 text-center text-gray-500 italic",children:"Supported formats: JPG, PNG, WEBP — Max size: 2MB"})})]})};async function Ed(n,e,t,s){var r,i,a;try{const c=await U.post("/api/delete-account",{email:n,username:e});return localStorage.clear(),sessionStorage.clear(),s(),c.status===200?(sessionStorage.setItem("accountDeleteMessage","Account deleted successfully"),t("/sign-in",{replace:!0}),window.location.reload(),""):((r=c.data)==null?void 0:r.error)||"Failed to delete account"}catch(c){return((a=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:a.error)||"Something went wrong"}}const Td=({setDeleteConfirmation:n,setUsernameAuthentication:e})=>{const t=Te(),{userProfile:s}=tt(),r=s==null?void 0:s.email,i=Is(),[a,c]=h.useState(""),[l,d]=h.useState(""),[f,p]=h.useState(!1),u=async()=>{p(!0),setTimeout(async()=>{if(a&&a.length>=3){const v=await Ed(r,a,t,i);v&&d(v),p(!1)}else p(!1),d("Enter your username")},1e3)};return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-20 mb-8 flex gap-2 font-bold",children:"Confirm your username"}),o.jsx("p",{children:"Please confirm your username to permanently delete your account."}),o.jsx("p",{className:"mt-4",children:"This step is required for security reasons."})]}),o.jsxs("div",{className:"mt-4 flex items-center",children:[o.jsxs("fieldset",{className:"border-light-grayish-blue desktop:max-w-[300px] flex max-w-[200px] flex-grow flex-col rounded-[5px] border-1",children:[o.jsx("legend",{htmlFor:"username",className:"mb-1 ml-3"}),o.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",minLength:"3",maxLength:"15",placeholder:"Enter username to proceed",onChange:v=>c(v.target.value),value:a,className:"rounded-[5px] py-2 pl-3 outline-none"})]}),l&&o.jsxs("p",{className:"text-error mt-1 ml-2",children:[l,"!"]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-between gap-6 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>{e(!1),n(!1)},children:"Cancel"}),o.jsx("button",{className:`deleteAccount-button-gradient desktop:max-h-[42px] desktop:min-w-[255px] max-h-[38px] min-w-[163px] flex-grow cursor-pointer rounded-[5px] p-3 ${a.length>=3?"":"opacity-55"}`,onClick:()=>{a&&u()},children:f?o.jsx($,{color:"#fff",size:16}):"Proceed"})]})]})},Fr=""+new URL("icon-bin-DCZtocnW.png",import.meta.url).href,kd=""+new URL("icon-bin-dark-By_I2TUT.png",import.meta.url).href,Cd=({setDeleteConfirmation:n})=>{const{theme:e}=Le(),[t,s]=h.useState(!1);return o.jsxs("div",{className:"mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"mb-8 flex items-center gap-2 font-bold",children:[o.jsx("img",{src:e==="dark"?kd:Fr,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account?"]}),o.jsx("p",{children:"Are you sure you want to permanently delete your account?"}),o.jsx("p",{className:"mt-4 font-bold",children:"This action cannot be undone and will erase all your data."})]}),o.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6",children:[o.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>n(!1),children:"Cancel"}),o.jsx("button",{className:"deleteAccount-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>{s(!0)},children:"Yes, delete my account"})]}),t&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Td,{setDeleteConfirmation:n,setUsernameAuthentication:s})})]})},Nd=""+new URL("icon-camera-CKSg84tl.svg",import.meta.url).href,vs=""+new URL("icon-edit-light-Cb_IW_6S.png",import.meta.url).href,vt=""+new URL("icon-edit-dark-Bqd0IM0l.png",import.meta.url).href,Ad=()=>{const n=Te(),e=cn(),t=Is(),s=sessionStorage.getItem("wasSignedIn"),{theme:r}=Le(),{isSignedOut:i,setIsSignedOut:a}=ti(),{userProfile:c,loadUserProfile:l,isUserProfileLoading:d}=tt(),[f,p]=h.useState(""),[u,v]=h.useState(""),[S,x]=h.useState(!1),[g,I]=h.useState(""),[b,N]=h.useState(""),[k,T]=h.useState(!1),{username:y,setUsername:A,isUsernameFieldFocused:M,setIsUsernameFieldFocused:B,isUsernameValid:z,isSearchingUsername:Ce,setIsSearchingUsername:Ne,isUsernameAvailable:W,setIsUsernameAvailable:_,usernameStatus:D,setUsernameStatus:j}=ws(),[ee,Lt]=h.useState(""),{profilePictureURL:Fe,setProfilePictureURL:ot,previewImage:ct,setPreviewImage:Be,imageToUpload:oe,setImageToUpload:lt,noProfilePicture:dt}=ys(),[ce,$e]=h.useState(!1),[Mt,ut]=h.useState(!1),[Ae,Pe]=h.useState(!1),[m,P]=h.useState(!1),[R,ge]=h.useState(!1),[Ve,Ut]=h.useState(!1),[Br,Nn]=h.useState(!1),[ht,An]=h.useState(!1),[$r,ft]=h.useState(!1),[pt,He]=h.useState(""),[Pn,G]=h.useState(!1),[Vr,Rn]=h.useState(!1),[Hr,Dn]=h.useState(!1),Ft=h.useRef(null),Bt=h.useRef(null);h.useEffect(()=>{s||n("/sign-in",{replace:!0}),document.title="Profile – ToDo App"},[]),h.useEffect(()=>{p((c==null?void 0:c.fullName)||""),I((c==null?void 0:c.username)||""),Lt((c==null?void 0:c.email)||""),ot((c==null?void 0:c.profilePicture)||bs)},[c]);const zr=()=>{$e(!0)},Wr=async()=>{var ze,ve;G(!0);const C=new FormData;C.append("email",c.email),C.append("newProfilePicture",oe);try{(await U.post("/api/new-profile-picture",C,{headers:{"Content-Type":"multipart/form-data"}})).status===200&&(await l(),G(!1),Pe(!1))}catch(mt){G(!1),console.log(mt),console.log(((ve=(ze=mt.response)==null?void 0:ze.data)==null?void 0:ve.error)||"An error occurred during upload.")}},Gr=async()=>{var C,ze;try{G(!0);const ve=c.email;(await U.post("/api/remove-profile-picture",{email:ve})).status===200&&(await l(),G(!1),Pe(!1))}catch(ve){G(!1),console.log(ve),console.log(((ze=(C=ve.response)==null?void 0:C.data)==null?void 0:ze.error)||"An error occurred during upload.")}};h.useEffect(()=>{v(f),N(g)},[f,g]);const qr=()=>{Rn(!1),P(!0),ft(!1),He("")};h.useEffect(()=>{Ft.current&&R&&Ft.current.focus()},[R]),h.useEffect(()=>{Bt.current&&Ve&&Bt.current.focus()},[Ve,z]),h.useEffect(()=>{Nn(R||Ae)},[R,Ae]),h.useEffect(()=>{x(u!==f),T(b!==g)},[ce,u,b,f,g]),h.useEffect(()=>{An(S||k||ce)},[ce,S,k,f,g]),h.useEffect(()=>{b!==g?A(b):(A(""),Ne(!1),_(!1),j(""))},[b,g]);const Kr=()=>{Ut(!1),B(!1),j("")},Jr=async()=>{if(ht){if(ce&&oe&&await Wr(),dt&&await Gr(),S)try{const C=await U.post("/api/update-user/full-name",{fullName:u,email:ee});await l()}catch(C){console.log(C),G(!1),ft(!1),He(res.data.error),P(!1)}if(k)if(W)try{const C=await U.post("/api/update-user/username",{newUsername:b,email:ee});await l(),He(C.data.message)}catch(C){console.log(C),G(!1),ft(!1),He(res.data.error),P(!1)}else j("username already taken.");G(!1),$e(!1),Be(""),lt(""),A(""),He("Updated successfully."),ft(!0),An(!1),P(!1)}},Yr=()=>{Rn(!0),$e(!1),Be(""),lt(""),A(""),P(!1),_(!1),ge(!1),Ut(!1),Nn(!1),x(!1),T(!1),v(f),N(g)};return o.jsxs("div",{className:"app-text-medium relative bg-gray-300 dark:bg-gray-800",children:[d?o.jsxs("div",{className:"flex h-screen w-full items-center justify-center",children:[o.jsx(xd,{})," "]}):o.jsxs("div",{className:"mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center",children:[o.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-5",children:[o.jsx("div",{className:"flex w-full justify-center",children:o.jsxs("div",{className:`relative h-32 w-32 ${m?"cursor-pointer":""} overflow-hidden rounded-full`,children:[o.jsx("img",{src:!Ae&&ce&&ct?ct:Fe,className:"h-full",alt:"Profile Picture",onMouseEnter:()=>ut(!0),onMouseLeave:()=>ut(!1),onClick:()=>{m&&Pe(!0)}}),ce&&Pn&&o.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:o.jsx($,{color:"#fff",size:24})}),m&&Mt&&o.jsx("div",{className:"pointer-events-none absolute bottom-0 flex h-[35%] w-full items-center justify-center rounded-b-full bg-black opacity-60",children:o.jsx("img",{src:Nd,className:"h-6 w-6"})})]})}),ht&&W&&o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:D})}),ht&&!W&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:D})}),pt&&$r?o.jsx("div",{className:"text-success desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:pt})}):pt&&o.jsx("div",{className:"text-error desktop:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:o.jsx("p",{children:pt})}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Name:"}),o.jsxs("div",{onClick:()=>{m&&ge(!0)},className:`fullNameEditable ${R?"active":""} flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Ft,type:"text",onChange:C=>v(C.target.value),value:u,className:`${m?"cursor-text":"cursor-default"} outline-none`,readOnly:!R,onBlur:()=>ge(!1)}),m&&!R&&o.jsx("img",{src:vt,className:"mr-3 h-3 w-3"})]})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Username:"}),o.jsxs("div",{onClick:()=>{m&&Ut(!0)},className:`usernameEditable ${Ve?"active border-b-1":""} relative flex items-center justify-between border-b-1 dark:border-gray-700`,children:[o.jsx("input",{ref:Bt,name:"username",autoComplete:"off",type:"text",onFocus:()=>B(!0),onChange:C=>N(C.target.value),onBlur:()=>Kr(),value:b,readOnly:!Ve,onKeyDown:C=>{C.key===" "&&C.preventDefault()},maxLength:15,className:`${m?"cursor-text":"cursor-default"} outline-none`}),m&&!Ve&&!W&&o.jsx("img",{src:vt,className:"mr-3 h-3 w-3"}),Ce&&o.jsx($,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),W&&o.jsx("img",{src:_s,className:"mr-3 h-[15px] w-[15px]"})]}),m&&y&&!z&&!M&&!Br&&!Vr&&o.jsx("div",{className:`${e>=1440?"absolute":""} right-[-320px] bottom-0`,children:o.jsx("p",{className:"text-error max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),o.jsxs("div",{className:"flex w-full flex-col gap-2",children:[o.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Email:"}),o.jsx("input",{type:"text",value:ee,className:"border-b-1 outline-none dark:border-gray-700",disabled:!0})]}),!m&&o.jsx("div",{onClick:()=>qr(),className:`absolute top-0 cursor-pointer ${e>1440?"right-[-100px]":"right-[-30px]"} rounded-[100px] p-[2px]`,style:{background:"var(--color-gradient-button)"},children:e>1440?o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-2 pt-3 pb-2 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:["Edit Profile",o.jsx("img",{src:r==="dark"?vt:vs,className:"h-3 w-3",alt:""})]}):o.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-white px-3 pt-2 pb-1 font-bold text-white dark:bg-gray-700",children:["Edit",o.jsx("img",{src:r==="dark"?vt:vs,className:"h-2 w-2",alt:""})]})})]}),m?o.jsxs("div",{className:"mt-10 flex w-full items-center justify-between gap-4 dark:text-black",children:[o.jsx("button",{className:"cancel-button-gradient flex-1 cursor-pointer rounded-[5px] py-3",onClick:()=>{Yr()},children:"Cancel"}),o.jsx("button",{className:`save-button-gradient desktop:max-h-[42px] max-h-[38px] flex-1 cursor-pointer rounded-[5px] py-3 ${ht&&(!k||b&&W)&&(!S||u)?"":"opacity-20"}`,onClick:()=>{G(!0),setTimeout(()=>{Jr()},1e3)},children:Pn?o.jsx($,{color:"#fff",size:22}):"Save Changes"})]}):o.jsxs("div",{className:"w-full",children:[o.jsxs("button",{onClick:C=>{C.stopPropagation(),a(!0),setTimeout(()=>{ii(n,t),a(!1)},1e3)},className:"signOut-button-gradient mt-10 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-4 font-bold dark:text-black",children:[i?o.jsx($,{color:"#fff",size:24}):"Sign Out",!i&&o.jsx("img",{src:ri,className:"hover-cursor-pointer h-5 w-5"})]}),o.jsxs("button",{onClick:()=>{Dn(!0)},className:"deleteAccount-button-gradient mt-4 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-3.5 font-bold dark:text-black",children:[o.jsx("img",{src:Fr,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account"]})]})]}),Ae&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Sd,{setIsProfilePictureUploadMenu:Pe,profileImage:Fe,onImageChange:zr})}),Hr&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:o.jsx(Cd,{setDeleteConfirmation:Dn})})]})},Pd=()=>{const n=Te();return o.jsxs("div",{className:"app-text-medium flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-700 dark:bg-black dark:text-gray-400",style:{fontFamily:"var(--font-josefinSans)"},children:[o.jsx("h1",{className:"app-text-large-tight text-gradient-heading mb-4 font-bold",children:"404"}),o.jsx("p",{className:"text-18 mb-6 leading-20",children:"Oops! The page you’re looking for doesn’t exist."}),o.jsx("button",{onClick:()=>n("/all",{replace:!0}),className:"button-gradient cursor-pointer rounded-[5px] px-6 py-3 font-bold text-black hover:opacity-90",children:"Go to Home page"})]})},Od=({})=>o.jsxs(ni,{children:[o.jsx(q,{path:"/",element:o.jsx(si,{to:"/all",replace:!0})}),o.jsx(q,{path:"/sign-up",element:o.jsx(ai,{})}),o.jsx(q,{path:"/sign-in",element:o.jsx(md,{})}),o.jsx(q,{path:"/forget-password",element:o.jsx(gd,{})}),o.jsx(q,{path:"/reset-password",element:o.jsx(vd,{})}),o.jsx(q,{path:"/all",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/active",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/completed",element:o.jsx(Xt,{})}),o.jsx(q,{path:"/profile",element:o.jsx(Ad,{})}),o.jsx(q,{path:"*",element:o.jsx(Pd,{})})]});export{Od as default};
