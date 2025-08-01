import{r as f,u as Pe,g as yn,b as st,a as Ue,h as Ur,j as a,N as Ye,f as $,i as vi,k as wi,d as yi,e as bi,l as Fr,c as xi,R as _i,m as J,n as Ii}from"./index-cJ0sPr6U.js";import{C as W,U as Br,u as $r,S as Si,s as Ei}from"./icon-sign-out-ConViVnH.js";function Ci(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}const zr=""+new URL("icon-success-kJw2yUx5.png",import.meta.url).href,Xe=""+new URL("icon-password-display-BJmCAie1.png",import.meta.url).href,Qe=""+new URL("icon-password-display-dark-B2VlshCc.png",import.meta.url).href,et=""+new URL("icon-password-hide-CGrP-8Gz.png",import.meta.url).href,tt=""+new URL("icon-password-hide-dark-X9w8y7On.png",import.meta.url).href,Ti=()=>{f.useEffect(()=>{document.title="Sign Up – Todo App"},[]);const n=Pe(),e=yn(),{loadUserProfile:t}=st(),{theme:r}=Ue(),[s,i]=f.useState(""),{username:o,setUsername:c,isUsernameFieldFocused:l,setIsUsernameFieldFocused:d,isUsernameValid:u,isSearchingUsername:p,isUsernameAvailable:h,setIsUsernameAvailable:m,usernameStatus:g,setUsernameStatus:w}=Ur(),[v,E]=f.useState(""),[y,I]=f.useState(),[S,_]=f.useState(!0),[k,O]=f.useState(""),[C,R]=f.useState(),[N,V]=f.useState(!0),[de,q]=f.useState(!1),[T,L]=f.useState(""),[F,ne]=f.useState(),[$t,$e]=f.useState(!0),[dt,ut]=f.useState(!1),[ze,re]=f.useState(""),[ht,ft]=f.useState(!1),ue=b=>{const D=b.replace(/\s+/g," ");i(D)};f.useEffect(()=>{c(""),m(!1)},[]);const Ve=()=>{d(!1),w("")},zt=b=>{re(""),E(b.toLowerCase());const M=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(b);I(M)},pt=b=>{O(b);const M=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(b);R(M)},Ae=b=>{L(b),ne(b===k)},Re=async b=>{if(b.preventDefault(),!s||!o||!v||!k||!T){re("All fields are required.");return}u&&!h&&re("Username already taken"),u&&h&&y&&C&&F&&(w(""),ft(!0),setTimeout(async()=>{try{await $.post("/api/signup",{fullName:s,username:o,email:v,password:k}),await t(),n("/all",{replace:!0})}catch(D){D.response?re(D.response.data.error):re("Something went wrong. Please try again later.")}finally{c(""),ft(!1)}},1e3))};return a.jsxs("div",{className:"app-text-medium",children:[a.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-6 flex max-w-[300px] min-w-[300px] flex-col gap-4",onSubmit:b=>{Re(b)},children:[ze&&a.jsx("div",{className:"text-error tablet:mb-2 absolute bottom-full mx-auto mb-1.5 w-full text-center",children:a.jsx("p",{children:ze})}),g&&(h?a.jsx("div",{className:"text-success tablet:mb-2 absolute bottom-full mx-auto mb-1.5 w-full text-center",children:a.jsx("p",{children:g})}):a.jsx("div",{className:"text-error tablet:mb-2 absolute bottom-full mx-auto mb-1.5 w-full text-center",children:a.jsx("p",{children:g})})),a.jsx("div",{children:a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"fullName",className:"legend-base",children:"Full Name"}),a.jsx("input",{type:"text",id:"fullName",name:"fullName",autoComplete:"off",placeholder:"Enter your full name",onChange:b=>ue(b.target.value),onBlur:()=>i(s.trim()),value:s,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]})}),a.jsxs("div",{className:"relative",children:[a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"username",className:"legend-base",children:"Username"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",placeholder:"Enter username",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>d(!0),onChange:b=>{re(""),c(b.target.value),w(""),m(!1)},onBlur:()=>Ve(),value:o,maxLength:15,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),p&&a.jsx(W,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),h&&a.jsx("img",{src:zr,className:"mr-3 h-[15px] w-[15px]"})]})]}),o&&!u&&!l&&a.jsx("div",{className:`${e>=768?"absolute":""} desktop:right-[-320px] top-0 right-[-230px]`,children:a.jsx("p",{className:"text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),a.jsxs("div",{children:[a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"email",className:"legend-base",children:"Email Address"}),a.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>_(!0),onChange:b=>zt(b.target.value),onBlur:()=>_(!1),value:v,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),v&&!y&&!S&&a.jsx("div",{children:a.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),a.jsxs("div",{className:"relative",children:[a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:`${de?"text":"password"}`,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>V(!0),onChange:b=>pt(b.target.value),onBlur:()=>V(!1),value:k,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),a.jsx("img",{src:de?r==="dark"?Qe:Xe:r==="dark"?tt:et,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:b=>b.preventDefault(),onClick:b=>{b.preventDefault();const D=document.getElementById("password"),M=D.selectionStart;q(ye=>!ye),setTimeout(()=>{D.setSelectionRange(M,M),D.focus()},0)}})]})]}),k&&!C&&!N&&a.jsx("div",{className:`${e>=768?"absolute":""} desktop:left-[-280px] top-0 left-[-200px]`,children:a.jsx("p",{className:"text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),a.jsxs("div",{children:[a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm Password"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:`${dt?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",placeholder:"Confirm your password",onKeyDown:b=>{b.key===" "&&b.preventDefault()},onFocus:()=>$e(!0),onChange:b=>Ae(b.target.value),onBlur:()=>$e(!1),value:T,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),a.jsx("img",{src:dt?r==="dark"?Qe:Xe:r==="dark"?tt:et,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:b=>b.preventDefault(),onClick:b=>{b.preventDefault();const D=document.getElementById("confirm-password"),M=D.selectionStart;ut(ye=>!ye),setTimeout(()=>{D.setSelectionRange(M,M),D.focus()},0)}})]})]}),T&&!F&&!$t&&a.jsx("div",{children:a.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),a.jsx("button",{className:"button-gradient tablet:max-h-[62px] mt-2 flex max-h-[50px] cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",children:ht?a.jsx(W,{color:"#fff",size:24}):"Sign Up"})]}),a.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[a.jsx("p",{children:"Already have an account?"}),a.jsx(Ye,{to:"/todo-app/sign-in",onClick:b=>{b.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})};function ki(){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}),a.jsx("div",{style:{width:24,height:24,borderRadius:"50%",border:"1.5px solid transparent",background:`
            conic-gradient(
              rgba(66, 133, 244, 0.85) 0%,
              rgba(66, 133, 244, 0.85) 25%,
              rgba(52, 168, 83, 0.85) 25%,
              rgba(52, 168, 83, 0.85) 50%,
              rgba(251, 188, 5, 0.85) 50%,
              rgba(251, 188, 5, 0.85) 75%,
              rgba(234, 67, 53, 0.85) 75%,
              rgba(234, 67, 53, 0.85) 100%
            )
          `,WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",boxShadow:"inset 0 0 6px rgba(255, 255, 255, 0.3), 0 2px 6px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(4px)",animation:"spin 1s linear infinite",margin:"auto"},"aria-label":"Loading"})]})}const Pi=()=>{};var Hn={};/**
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
 */const Vr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ni=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,u=i>>2,p=(i&3)<<4|c>>4;let h=(c&15)<<2|d>>6,m=d&63;l||(m=64,o||(h=64)),r.push(t[u],t[p],t[h],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ni(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new Ai;const h=i<<2|c>>4;if(r.push(h),d!==64){const m=c<<4&240|d>>2;if(r.push(m),p!==64){const g=d<<6&192|p;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ai extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ri=function(n){const e=Vr(n);return Wr.encodeByteArray(e,!0)},Hr=function(n){return Ri(n).replace(/\./g,"")},Gr=function(n){try{return Wr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Di(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oi=()=>Di().__FIREBASE_DEFAULTS__,ji=()=>{if(typeof process>"u"||typeof Hn>"u")return;const n=Hn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gr(n[1]);return e&&JSON.parse(e)},bn=()=>{try{return Pi()||Oi()||ji()||Mi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Li=n=>{var e,t;return(t=(e=bn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qr=()=>{var n;return(n=bn())===null||n===void 0?void 0:n.config},Kr=n=>{var e;return(e=bn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xn(n){return n.endsWith(".cloudworkstations.dev")}async function Fi(n){return(await fetch(n,{credentials:"include"})).ok}const Ke={};function Bi(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ke))Ke[e]?n.emulator.push(e):n.prod.push(e);return n}function $i(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Gn=!1;function Jr(n,e){if(typeof window>"u"||typeof document>"u"||!xn(window.location.host)||Ke[n]===e||Ke[n]||Gn)return;Ke[n]=e;function t(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Bi().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function c(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function d(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Gn=!0,o()},h}function u(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function p(){const h=$i(r),m=t("text"),g=document.getElementById(m)||document.createElement("span"),w=t("learnmore"),v=document.getElementById(w)||document.createElement("a"),E=t("preprendIcon"),y=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const I=h.element;c(I),u(v,w);const S=d();l(y,E),I.append(y,g,v,S),document.body.appendChild(I)}i?(g.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function Vi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zr(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hi(){const n=U();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yr(){try{return typeof indexedDB=="object"}catch{return!1}}function Xr(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Gi(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qi="FirebaseError";class te extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qi,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ne.prototype.create)}}class Ne{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ki(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new te(s,c,r)}}function Ki(n,e){return n.replace(Ji,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ji=/\{\$([^}]+)}/g;function Zi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ee(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(qn(i)&&qn(o)){if(!Ee(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qn(n){return n!==null&&typeof n=="object"}/**
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
 */function it(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(n,e){const t=new Xi(n,e);return t.subscribe.bind(t)}class Xi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qi(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Gt),s.error===void 0&&(s.error=Gt),s.complete===void 0&&(s.complete=Gt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gt(){}/**
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
 */const eo=1e3,to=2,no=4*60*60*1e3,ro=.5;function Kn(n,e=eo,t=to){const r=e*Math.pow(t,n),s=Math.round(ro*r*(Math.random()-.5)*2);return Math.min(no,r+s)}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class Q{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xe="[DEFAULT]";/**
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
 */class so{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ui;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oo(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:io(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function io(n){return n===xe?void 0:n}function oo(n){return n.instantiationMode==="EAGER"}/**
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
 */class ao{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new so(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const co={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},lo=P.INFO,uo={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},ho=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=uo[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _n{constructor(e){this.name=e,this._logLevel=lo,this._logHandler=ho,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?co[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const fo=(n,e)=>e.some(t=>n instanceof t);let Jn,Zn;function po(){return Jn||(Jn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mo(){return Zn||(Zn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qr=new WeakMap,ln=new WeakMap,es=new WeakMap,qt=new WeakMap,In=new WeakMap;function go(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ge(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qr.set(t,n)}).catch(()=>{}),In.set(e,n),e}function vo(n){if(ln.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ln.set(n,e)}let dn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ln.get(n);if(e==="objectStoreNames")return n.objectStoreNames||es.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wo(n){dn=n(dn)}function yo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Kt(this),e,...t);return es.set(r,e.sort?e.sort():[e]),ge(r)}:mo().includes(n)?function(...e){return n.apply(Kt(this),e),ge(Qr.get(this))}:function(...e){return ge(n.apply(Kt(this),e))}}function bo(n){return typeof n=="function"?yo(n):(n instanceof IDBTransaction&&vo(n),fo(n,po())?new Proxy(n,dn):n)}function ge(n){if(n instanceof IDBRequest)return go(n);if(qt.has(n))return qt.get(n);const e=bo(n);return e!==n&&(qt.set(n,e),In.set(e,n)),e}const Kt=n=>In.get(n);function ts(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=ge(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ge(o.result),l.oldVersion,l.newVersion,ge(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const xo=["get","getKey","getAll","getAllKeys","count"],_o=["put","add","delete","clear"],Jt=new Map;function Yn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jt.get(e))return Jt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=_o.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xo.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Jt.set(e,i),i}wo(n=>({...n,get:(e,t,r)=>Yn(e,t)||n.get(e,t,r),has:(e,t)=>!!Yn(e,t)||n.has(e,t)}));/**
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
 */class Io{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(So(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function So(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const un="@firebase/app",Xn="0.12.3";/**
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
 */const ae=new _n("@firebase/app"),Eo="@firebase/app-compat",Co="@firebase/analytics-compat",To="@firebase/analytics",ko="@firebase/app-check-compat",Po="@firebase/app-check",No="@firebase/auth",Ao="@firebase/auth-compat",Ro="@firebase/database",Do="@firebase/data-connect",Oo="@firebase/database-compat",jo="@firebase/functions",Mo="@firebase/functions-compat",Lo="@firebase/installations",Uo="@firebase/installations-compat",Fo="@firebase/messaging",Bo="@firebase/messaging-compat",$o="@firebase/performance",zo="@firebase/performance-compat",Vo="@firebase/remote-config",Wo="@firebase/remote-config-compat",Ho="@firebase/storage",Go="@firebase/storage-compat",qo="@firebase/firestore",Ko="@firebase/vertexai",Jo="@firebase/firestore-compat",Zo="firebase",Yo="11.7.3";/**
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
 */const hn="[DEFAULT]",Xo={[un]:"fire-core",[Eo]:"fire-core-compat",[To]:"fire-analytics",[Co]:"fire-analytics-compat",[Po]:"fire-app-check",[ko]:"fire-app-check-compat",[No]:"fire-auth",[Ao]:"fire-auth-compat",[Ro]:"fire-rtdb",[Do]:"fire-data-connect",[Oo]:"fire-rtdb-compat",[jo]:"fire-fn",[Mo]:"fire-fn-compat",[Lo]:"fire-iid",[Uo]:"fire-iid-compat",[Fo]:"fire-fcm",[Bo]:"fire-fcm-compat",[$o]:"fire-perf",[zo]:"fire-perf-compat",[Vo]:"fire-rc",[Wo]:"fire-rc-compat",[Ho]:"fire-gcs",[Go]:"fire-gcs-compat",[qo]:"fire-fst",[Jo]:"fire-fst-compat",[Ko]:"fire-vertex","fire-js":"fire-js",[Zo]:"fire-js-all"};/**
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
 */const Ct=new Map,Qo=new Map,fn=new Map;function Qn(n,e){try{n.container.addComponent(e)}catch(t){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ce(n){const e=n.name;if(fn.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;fn.set(e,n);for(const t of Ct.values())Qn(t,n);for(const t of Qo.values())Qn(t,n);return!0}function Fe(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Z(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ea={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ve=new Ne("app","Firebase",ea);/**
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
 */class ta{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
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
 */const ot=Yo;function ns(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ve.create("bad-app-name",{appName:String(s)});if(t||(t=qr()),!t)throw ve.create("no-options");const i=Ct.get(s);if(i){if(Ee(t,i.options)&&Ee(r,i.config))return i;throw ve.create("duplicate-app",{appName:s})}const o=new ao(s);for(const l of fn.values())o.addComponent(l);const c=new ta(t,r,o);return Ct.set(s,c),c}function rs(n=hn){const e=Ct.get(n);if(!e&&n===hn&&qr())return ns();if(!e)throw ve.create("no-app",{appName:n});return e}function Y(n,e,t){var r;let s=(r=Xo[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(c.join(" "));return}ce(new Q(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const na="firebase-heartbeat-database",ra=1,nt="firebase-heartbeat-store";let Zt=null;function ss(){return Zt||(Zt=ts(na,ra,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Zt}async function sa(n){try{const t=(await ss()).transaction(nt),r=await t.objectStore(nt).get(is(n));return await t.done,r}catch(e){if(e instanceof te)ae.warn(e.message);else{const t=ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(t.message)}}}async function er(n,e){try{const r=(await ss()).transaction(nt,"readwrite");await r.objectStore(nt).put(e,is(n)),await r.done}catch(t){if(t instanceof te)ae.warn(t.message);else{const r=ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ae.warn(r.message)}}}function is(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ia=1024,oa=30;class aa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new la(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>oa){const o=da(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ae.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tr(),{heartbeatsToSend:r,unsentEntries:s}=ca(this._heartbeatsCache.heartbeats),i=Hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ae.warn(t),""}}}function tr(){return new Date().toISOString().substring(0,10)}function ca(n,e=ia){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nr(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class la{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yr()?Xr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sa(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nr(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}function da(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ua(n){ce(new Q("platform-logger",e=>new Io(e),"PRIVATE")),ce(new Q("heartbeat",e=>new aa(e),"PRIVATE")),Y(un,Xn,n),Y(un,Xn,"esm2017"),Y("fire-js","")}ua("");var ha="firebase",fa="11.7.3";/**
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
 */Y(ha,fa,"app");const os="@firebase/installations",Sn="0.6.16";/**
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
 */const as=1e4,cs=`w:${Sn}`,ls="FIS_v2",pa="https://firebaseinstallations.googleapis.com/v1",ma=60*60*1e3,ga="installations",va="Installations";/**
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
 */const wa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ce=new Ne(ga,va,wa);function ds(n){return n instanceof te&&n.code.includes("request-failed")}/**
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
 */function us({projectId:n}){return`${pa}/projects/${n}/installations`}function hs(n){return{token:n.token,requestStatus:2,expiresIn:ba(n.expiresIn),creationTime:Date.now()}}async function fs(n,e){const r=(await e.json()).error;return Ce.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ps({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ya(n,{refreshToken:e}){const t=ps(n);return t.append("Authorization",xa(e)),t}async function ms(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ba(n){return Number(n.replace("s","000"))}function xa(n){return`${ls} ${n}`}/**
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
 */async function _a({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=us(n),s=ps(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:t,authVersion:ls,appId:n.appId,sdkVersion:cs},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ms(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:hs(d.authToken)}}else throw await fs("Create Installation",l)}/**
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
 */function gs(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Ia(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Sa=/^[cdef][\w-]{21}$/,pn="";function Ea(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ca(n);return Sa.test(t)?t:pn}catch{return pn}}function Ca(n){return Ia(n).substr(0,22)}/**
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
 */function jt(n){return`${n.appName}!${n.appId}`}/**
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
 */const vs=new Map;function ws(n,e){const t=jt(n);ys(t,e),Ta(t,e)}function ys(n,e){const t=vs.get(n);if(t)for(const r of t)r(e)}function Ta(n,e){const t=ka();t&&t.postMessage({key:n,fid:e}),Pa()}let _e=null;function ka(){return!_e&&"BroadcastChannel"in self&&(_e=new BroadcastChannel("[Firebase] FID Change"),_e.onmessage=n=>{ys(n.data.key,n.data.fid)}),_e}function Pa(){vs.size===0&&_e&&(_e.close(),_e=null)}/**
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
 */const Na="firebase-installations-database",Aa=1,Te="firebase-installations-store";let Yt=null;function En(){return Yt||(Yt=ts(Na,Aa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Te)}}})),Yt}async function Tt(n,e){const t=jt(n),s=(await En()).transaction(Te,"readwrite"),i=s.objectStore(Te),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&ws(n,e.fid),e}async function bs(n){const e=jt(n),r=(await En()).transaction(Te,"readwrite");await r.objectStore(Te).delete(e),await r.done}async function Mt(n,e){const t=jt(n),s=(await En()).transaction(Te,"readwrite"),i=s.objectStore(Te),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&ws(n,c.fid),c}/**
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
 */async function Cn(n){let e;const t=await Mt(n.appConfig,r=>{const s=Ra(r),i=Da(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===pn?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ra(n){const e=n||{fid:Ea(),registrationStatus:0};return xs(e)}function Da(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ce.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Oa(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ja(n)}:{installationEntry:e}}async function Oa(n,e){try{const t=await _a(n,e);return Tt(n.appConfig,t)}catch(t){throw ds(t)&&t.customData.serverCode===409?await bs(n.appConfig):await Tt(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ja(n){let e=await rr(n.appConfig);for(;e.registrationStatus===1;)await gs(100),e=await rr(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Cn(n);return r||t}return e}function rr(n){return Mt(n,e=>{if(!e)throw Ce.create("installation-not-found");return xs(e)})}function xs(n){return Ma(n)?{fid:n.fid,registrationStatus:0}:n}function Ma(n){return n.registrationStatus===1&&n.registrationTime+as<Date.now()}/**
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
 */async function La({appConfig:n,heartbeatServiceProvider:e},t){const r=Ua(n,t),s=ya(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:cs,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ms(()=>fetch(r,c));if(l.ok){const d=await l.json();return hs(d)}else throw await fs("Generate Auth Token",l)}function Ua(n,{fid:e}){return`${us(n)}/${e}/authTokens:generate`}/**
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
 */async function Tn(n,e=!1){let t;const r=await Mt(n.appConfig,i=>{if(!_s(i))throw Ce.create("not-registered");const o=i.authToken;if(!e&&$a(o))return i;if(o.requestStatus===1)return t=Fa(n,e),i;{if(!navigator.onLine)throw Ce.create("app-offline");const c=Va(i);return t=Ba(n,c),c}});return t?await t:r.authToken}async function Fa(n,e){let t=await sr(n.appConfig);for(;t.authToken.requestStatus===1;)await gs(100),t=await sr(n.appConfig);const r=t.authToken;return r.requestStatus===0?Tn(n,e):r}function sr(n){return Mt(n,e=>{if(!_s(e))throw Ce.create("not-registered");const t=e.authToken;return Wa(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ba(n,e){try{const t=await La(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Tt(n.appConfig,r),t}catch(t){if(ds(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await bs(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tt(n.appConfig,r)}throw t}}function _s(n){return n!==void 0&&n.registrationStatus===2}function $a(n){return n.requestStatus===2&&!za(n)}function za(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ma}function Va(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Wa(n){return n.requestStatus===1&&n.requestTime+as<Date.now()}/**
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
 */async function Ha(n){const e=n,{installationEntry:t,registrationPromise:r}=await Cn(e);return r?r.catch(console.error):Tn(e).catch(console.error),t.fid}/**
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
 */async function Ga(n,e=!1){const t=n;return await qa(t),(await Tn(t,e)).token}async function qa(n){const{registrationPromise:e}=await Cn(n);e&&await e}/**
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
 */function Ka(n){if(!n||!n.options)throw Xt("App Configuration");if(!n.name)throw Xt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xt(n){return Ce.create("missing-app-config-values",{valueName:n})}/**
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
 */const Is="installations",Ja="installations-internal",Za=n=>{const e=n.getProvider("app").getImmediate(),t=Ka(e),r=Fe(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ya=n=>{const e=n.getProvider("app").getImmediate(),t=Fe(e,Is).getImmediate();return{getId:()=>Ha(t),getToken:s=>Ga(t,s)}};function Xa(){ce(new Q(Is,Za,"PUBLIC")),ce(new Q(Ja,Ya,"PRIVATE"))}Xa();Y(os,Sn);Y(os,Sn,"esm2017");/**
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
 */const kt="analytics",Qa="firebase_id",ec="origin",tc=60*1e3,nc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kn="https://www.googletagmanager.com/gtag/js";/**
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
 */const B=new _n("@firebase/analytics");/**
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
 */const rc={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},z=new Ne("analytics","Analytics",rc);/**
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
 */function sc(n){if(!n.startsWith(kn)){const e=z.create("invalid-gtag-resource",{gtagURL:n});return B.warn(e.message),""}return n}function Ss(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ic(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function oc(n,e){const t=ic("firebase-js-sdk-policy",{createScriptURL:sc}),r=document.createElement("script"),s=`${kn}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ac(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function cc(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Ss(t)).find(d=>d.measurementId===s);l&&await e[l.appId]}}catch(c){B.error(c)}n("config",s,i)}async function lc(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Ss(t);for(const l of o){const d=c.find(p=>p.measurementId===l),u=d&&e[d.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){B.error(i)}}function dc(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await lc(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await cc(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,d]=o;n("get",c,l,d)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){B.error(c)}}return s}function uc(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=dc(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function hc(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(kn)&&t.src.includes(n))return t;return null}/**
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
 */const fc=30,pc=1e3;class mc{constructor(e={},t=pc){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Es=new mc;function gc(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function vc(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:gc(r)},i=nc.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw z.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function wc(n,e=Es,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw z.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw z.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new xc;return setTimeout(async()=>{c.abort()},tc),Cs({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Cs(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Es){var i;const{appId:o,measurementId:c}=n;try{await yc(r,e)}catch(l){if(c)return B.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await vc(n);return s.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!bc(d)){if(s.deleteThrottleMetadata(o),c)return B.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:c};throw l}const u=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Kn(t,s.intervalMillis,fc):Kn(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return s.setThrottleMetadata(o,p),B.debug(`Calling attemptFetch again in ${u} millis`),Cs(n,p,r,s)}}function yc(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(z.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bc(n){if(!(n instanceof te)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class xc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _c(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});n("event",t,o)}}/**
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
 */async function Ic(){if(Yr())try{await Xr()}catch(n){return B.warn(z.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return B.warn(z.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sc(n,e,t,r,s,i,o){var c;const l=wc(n);l.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&B.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>B.error(m)),e.push(l);const d=Ic().then(m=>{if(m)return r.getId()}),[u,p]=await Promise.all([l,d]);hc(i)||oc(i,u.measurementId),s("js",new Date);const h=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return h[ec]="firebase",h.update=!0,p!=null&&(h[Qa]=p),s("config",u.measurementId,h),u.measurementId}/**
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
 */class Ec{constructor(e){this.app=e}_delete(){return delete Je[this.app.options.appId],Promise.resolve()}}let Je={},ir=[];const or={};let Qt="dataLayer",Cc="gtag",ar,Ts,cr=!1;function Tc(){const n=[];if(Zr()&&n.push("This is a browser extension environment."),Gi()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=z.create("invalid-analytics-context",{errorInfo:e});B.warn(t.message)}}function kc(n,e,t){Tc();const r=n.options.appId;if(!r)throw z.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)B.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw z.create("no-api-key");if(Je[r]!=null)throw z.create("already-exists",{id:r});if(!cr){ac(Qt);const{wrappedGtag:i,gtagCore:o}=uc(Je,ir,or,Qt,Cc);Ts=i,ar=o,cr=!0}return Je[r]=Sc(n,ir,or,e,ar,Qt,t),new Ec(n)}function Pc(n=rs()){n=we(n);const e=Fe(n,kt);return e.isInitialized()?e.getImmediate():Nc(n)}function Nc(n,e={}){const t=Fe(n,kt);if(t.isInitialized()){const s=t.getImmediate();if(Ee(e,t.getOptions()))return s;throw z.create("already-initialized")}return t.initialize({options:e})}function Ac(n,e,t,r){n=we(n),_c(Ts,Je[n.app.options.appId],e,t,r).catch(s=>B.error(s))}const lr="@firebase/analytics",dr="0.10.15";function Rc(){ce(new Q(kt,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return kc(r,s,t)},"PUBLIC")),ce(new Q("analytics-internal",n,"PRIVATE")),Y(lr,dr),Y(lr,dr,"esm2017");function n(e){try{const t=e.getProvider(kt).getImmediate();return{logEvent:(r,s,i)=>Ac(t,r,s,i)}}catch(t){throw z.create("interop-component-reg-failed",{reason:t})}}}Rc();var mn=function(n,e){return mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])},mn(n,e)};function Dc(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");mn(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var j=function(){return j=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},j.apply(this,arguments)};function Pn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ks(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oc=ks,Ps=new Ne("auth","Firebase",ks());/**
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
 */const Pt=new _n("@firebase/auth");function jc(n,...e){Pt.logLevel<=P.WARN&&Pt.warn(`Auth (${ot}): ${n}`,...e)}function _t(n,...e){Pt.logLevel<=P.ERROR&&Pt.error(`Auth (${ot}): ${n}`,...e)}/**
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
 */function ee(n,...e){throw An(n,...e)}function G(n,...e){return An(n,...e)}function Nn(n,e,t){const r=Object.assign(Object.assign({},Oc()),{[e]:t});return new Ne("auth","Firebase",r).create(e,{appName:n.name})}function Se(n){return Nn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mc(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ee(n,"argument-error"),Nn(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function An(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ps.create(n,...e)}function x(n,e,...t){if(!n)throw An(e,...t)}function ie(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _t(e),new Error(e)}function le(n,e){n||ie(e)}/**
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
 */function gn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Lc(){return ur()==="http:"||ur()==="https:"}function ur(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Uc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lc()||Zr()||"connection"in navigator)?navigator.onLine:!0}function Fc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class at{constructor(e,t){this.shortDelay=e,this.longDelay=t,le(t>e,"Short delay should be less than long delay!"),this.isMobile=zi()||Wi()}get(){return Uc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rn(n,e){le(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ns{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $c=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zc=new at(3e4,6e4);function Dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Be(n,e,t,r,s={}){return As(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=it(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Vi()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&xn(n.emulatorConfig.host)&&(d.credentials="include"),Ns.fetch()(await Rs(n,n.config.apiHost,t,c),d)})}async function As(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bc),e);try{const s=new Wc(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yt(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yt(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yt(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw yt(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Nn(n,u,d);ee(n,u)}}catch(s){if(s instanceof te)throw s;ee(n,"network-request-failed",{message:String(s)})}}async function Vc(n,e,t,r,s={}){const i=await Be(n,e,t,r,s);return"mfaPendingCredential"in i&&ee(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Rs(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Rn(n.config,s):`${n.config.apiScheme}://${s}`;return $c.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Wc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(G(this.auth,"network-request-failed")),zc.get())})}}function yt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=G(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Hc(n,e){return Be(n,"POST","/v1/accounts:delete",e)}async function Nt(n,e){return Be(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ze(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gc(n,e=!1){const t=we(n),r=await t.getIdToken(e),s=On(r);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ze(en(s.auth_time)),issuedAtTime:Ze(en(s.iat)),expirationTime:Ze(en(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function en(n){return Number(n)*1e3}function On(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _t("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gr(t);return s?JSON.parse(s):(_t("Failed to decode base64 JWT payload"),null)}catch(s){return _t("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hr(n){const e=On(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof te&&qc(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ze(this.lastLoginAt),this.creationTime=Ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function At(n){var e;const t=n.auth,r=await n.getIdToken(),s=await rt(n,Nt(t,{idToken:r}));x(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ds(i.providerUserInfo):[],c=Zc(n.providerData,o),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),u=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new vn(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function Jc(n){const e=we(n);await At(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zc(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ds(n){return n.map(e=>{var{providerId:t}=e,r=Pn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yc(n,e){const t=await As(n,{},async()=>{const r=it({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Rs(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ns.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xc(n,e){return Be(n,"POST","/v2/accounts:revokeToken",Dn(n,e))}/**
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
 */class De{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=hr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yc(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new De;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new De,this.toJSON())}_performRefresh(){return ie("not implemented")}}/**
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
 */function he(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class H{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Pn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rt(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gc(this,e)}reload(){return Jc(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new H(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await At(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Z(this.auth.app))return Promise.reject(Se(this.auth));const e=await this.getIdToken();return await rt(this,Hc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,d,u;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(c=t.tenantId)!==null&&c!==void 0?c:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(d=t.createdAt)!==null&&d!==void 0?d:void 0,y=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:S,isAnonymous:_,providerData:k,stsTokenManager:O}=t;x(I&&O,e,"internal-error");const C=De.fromJSON(this.name,O);x(typeof I=="string",e,"internal-error"),he(p,e.name),he(h,e.name),x(typeof S=="boolean",e,"internal-error"),x(typeof _=="boolean",e,"internal-error"),he(m,e.name),he(g,e.name),he(w,e.name),he(v,e.name),he(E,e.name),he(y,e.name);const R=new H({uid:I,auth:e,email:h,emailVerified:S,displayName:p,isAnonymous:_,photoURL:g,phoneNumber:m,tenantId:w,stsTokenManager:C,createdAt:E,lastLoginAt:y});return k&&Array.isArray(k)&&(R.providerData=k.map(N=>Object.assign({},N))),v&&(R._redirectEventId=v),R}static async _fromIdTokenResponse(e,t,r=!1){const s=new De;s.updateFromServerResponse(t);const i=new H({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await At(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];x(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ds(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new De;c.updateFromIdToken(r);const l=new H({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const fr=new Map;function oe(n){le(n instanceof Function,"Expected a class definition");let e=fr.get(n);return e?(le(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fr.set(n,e),e)}/**
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
 */class Os{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Os.type="NONE";const pr=Os;/**
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
 */function It(n,e,t){return`firebase:${n}:${e}:${t}`}class Oe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=It(this.userKey,s.apiKey,i),this.fullPersistenceKey=It("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Nt(this.auth,{idToken:e}).catch(()=>{});return t?H._fromGetAccountInfoResponse(this.auth,t,e):null}return H._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Oe(oe(pr),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||oe(pr);const o=It(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const u=await d._get(o);if(u){let p;if(typeof u=="string"){const h=await Nt(e,{idToken:u}).catch(()=>{});if(!h)break;p=await H._fromGetAccountInfoResponse(e,h,u)}else p=H._fromJSON(e,u);d!==i&&(c=p),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Oe(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Oe(i,e,r))}}/**
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
 */function mr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Us(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(js(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bs(e))return"Blackberry";if($s(e))return"Webos";if(Ms(e))return"Safari";if((e.includes("chrome/")||Ls(e))&&!e.includes("edge/"))return"Chrome";if(Fs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function js(n=U()){return/firefox\//i.test(n)}function Ms(n=U()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ls(n=U()){return/crios\//i.test(n)}function Us(n=U()){return/iemobile/i.test(n)}function Fs(n=U()){return/android/i.test(n)}function Bs(n=U()){return/blackberry/i.test(n)}function $s(n=U()){return/webos/i.test(n)}function jn(n=U()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qc(n=U()){var e;return jn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function el(){return Hi()&&document.documentMode===10}function zs(n=U()){return jn(n)||Fs(n)||$s(n)||Bs(n)||/windows phone/i.test(n)||Us(n)}/**
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
 */function Vs(n,e=[]){let t;switch(n){case"Browser":t=mr(U());break;case"Worker":t=`${mr(U())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ot}/${r}`}/**
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
 */class tl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nl(n,e={}){return Be(n,"GET","/v2/passwordPolicy",Dn(n,e))}/**
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
 */const rl=6;class sl{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:rl,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class il{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gr(this),this.idTokenSubscription=new gr(this),this.beforeStateQueue=new tl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oe(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Oe.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Nt(this,{idToken:e}),r=await H._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Z(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await At(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Z(this.app))return Promise.reject(Se(this));const t=e?we(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Z(this.app)?Promise.reject(Se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Z(this.app)?Promise.reject(Se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nl(this),t=new sl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ne("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oe(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Oe.create(this,[oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lt(n){return we(n)}class gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yi(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ol(n){Mn=n}function al(n){return Mn.loadJS(n)}function cl(){return Mn.gapiScript}function ll(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dl(n,e){const t=Fe(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ee(i,e??{}))return s;ee(s,"already-initialized")}return t.initialize({options:e})}function ul(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hl(n,e,t){const r=Lt(n);x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ws(e),{host:o,port:c}=fl(e),l=c===null?"":`:${c}`,d={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){x(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),x(Ee(d,r.config.emulator)&&Ee(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,xn(o)?(Jr("Auth",!0),Fi(`${i}//${o}${l}`)):pl()}function Ws(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fl(n){const e=Ws(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vr(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vr(o)}}}function vr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ie("not implemented")}_getIdTokenResponse(e){return ie("not implemented")}_linkToIdToken(e,t){return ie("not implemented")}_getReauthenticationResolver(e){return ie("not implemented")}}/**
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
 */async function je(n,e){return Vc(n,"POST","/v1/accounts:signInWithIdp",Dn(n,e))}/**
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
 */const ml="http://localhost";class ke extends Hs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Pn(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ke(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return je(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,je(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,je(e,t)}buildRequest(){const e={requestUri:ml,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=it(t)}return e}}/**
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
 */class Ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ct extends Ln{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fe extends ct{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fe.credential(e.oauthAccessToken)}catch{return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";fe.PROVIDER_ID="facebook.com";/**
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
 */class se extends ct{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ke._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return se.credential(t,r)}catch{return null}}}se.GOOGLE_SIGN_IN_METHOD="google.com";se.PROVIDER_ID="google.com";/**
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
 */class pe extends ct{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
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
 */class me extends ct{constructor(){super("twitter.com")}static credential(e,t){return ke._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return me.credential(t,r)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";/**
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
 */class Me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await H._fromIdTokenResponse(e,r,s),o=wr(r);return new Me({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=wr(r);return new Me({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function wr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rt extends te{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Rt(e,t,r,s)}}function Gs(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rt._fromErrorAndOperation(n,i,e,r):i})}async function gl(n,e,t=!1){const r=await rt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Me._forOperation(n,"link",r)}/**
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
 */async function vl(n,e,t=!1){const{auth:r}=n;if(Z(r.app))return Promise.reject(Se(r));const s="reauthenticate";try{const i=await rt(n,Gs(r,s,e,n),t);x(i.idToken,r,"internal-error");const o=On(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(n.uid===c,r,"user-mismatch"),Me._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ee(r,"user-mismatch"),i}}/**
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
 */async function wl(n,e,t=!1){if(Z(n.app))return Promise.reject(Se(n));const r="signIn",s=await Gs(n,r,e),i=await Me._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function yl(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function bl(n,e,t){return we(n).beforeAuthStateChanged(e,t)}const Dt="__sak";/**
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
 */class qs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dt,"1"),this.storage.removeItem(Dt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xl=1e3,_l=10;class Ks extends qs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);el()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_l):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ks.type="LOCAL";const Il=Ks;/**
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
 */class Js extends qs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Js.type="SESSION";const Zs=Js;/**
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
 */function Sl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ut(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await Sl(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ut.receivers=[];/**
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
 */function Un(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class El{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Un("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===d)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function X(){return window}function Cl(n){X().location.href=n}/**
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
 */function Ys(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function Tl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Pl(){return Ys()?self:null}/**
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
 */const Xs="firebaseLocalStorageDb",Nl=1,Ot="firebaseLocalStorage",Qs="fbase_key";class lt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(n,e){return n.transaction([Ot],e?"readwrite":"readonly").objectStore(Ot)}function Al(){const n=indexedDB.deleteDatabase(Xs);return new lt(n).toPromise()}function wn(){const n=indexedDB.open(Xs,Nl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ot,{keyPath:Qs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ot)?e(r):(r.close(),await Al(),e(await wn()))})})}async function yr(n,e,t){const r=Ft(n,!0).put({[Qs]:e,value:t});return new lt(r).toPromise()}async function Rl(n,e){const t=Ft(n,!1).get(e),r=await new lt(t).toPromise();return r===void 0?null:r.value}function br(n,e){const t=Ft(n,!0).delete(e);return new lt(t).toPromise()}const Dl=800,Ol=3;class ei{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ol)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ys()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Pl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tl(),!this.activeServiceWorker)return;this.sender=new El(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await yr(e,Dt,"1"),await br(e,Dt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Rl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>br(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ft(s,!1).getAll();return new lt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ei.type="LOCAL";const jl=ei;new at(3e4,6e4);/**
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
 */function ti(n,e){return e?oe(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Fn extends Hs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ml(n){return wl(n.auth,new Fn(n),n.bypassAuthState)}function Ll(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),vl(t,new Fn(n),n.bypassAuthState)}async function Ul(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),gl(t,new Fn(n),n.bypassAuthState)}/**
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
 */class ni{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ml;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Ll;default:ee(this.auth,"internal-error")}}resolve(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fl=new at(2e3,1e4);async function Bl(n,e,t){if(Z(n.app))return Promise.reject(G(n,"operation-not-supported-in-this-environment"));const r=Lt(n);Mc(n,e,Ln);const s=ti(r,t);return new Ie(r,"signInViaPopup",e,s).executeNotNull()}class Ie extends ni{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){le(this.filter.length===1,"Popup operations only handle one event");const e=Un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(G(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(G(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(G(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fl.get())};e()}}Ie.currentPopupAction=null;/**
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
 */const $l="pendingRedirect",St=new Map;class zl extends ni{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=St.get(this.auth._key());if(!e){try{const r=await Vl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}St.set(this.auth._key(),e)}return this.bypassAuthState||St.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vl(n,e){const t=Gl(e),r=Hl(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Wl(n,e){St.set(n._key(),e)}function Hl(n){return oe(n._redirectPersistence)}function Gl(n){return It($l,n.config.apiKey,n.name)}async function ql(n,e,t=!1){if(Z(n.app))return Promise.reject(Se(n));const r=Lt(n),s=ti(r,e),o=await new zl(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Kl=10*60*1e3;class Jl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ri(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(G(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kl&&this.cachedEventUids.clear(),this.cachedEventUids.has(xr(e))}saveEventToCache(e){this.cachedEventUids.add(xr(e)),this.lastProcessedEventTime=Date.now()}}function xr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ri({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ri(n);default:return!1}}/**
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
 */async function Yl(n,e={}){return Be(n,"GET","/v1/projects",e)}/**
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
 */const Xl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ql=/^https?/;async function ed(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yl(n);for(const t of e)try{if(td(t))return}catch{}ee(n,"unauthorized-domain")}function td(n){const e=gn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Ql.test(t))return!1;if(Xl.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nd=new at(3e4,6e4);function _r(){const n=X().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rd(n){return new Promise((e,t)=>{var r,s,i;function o(){_r(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_r(),t(G(n,"network-request-failed"))},timeout:nd.get()})}if(!((s=(r=X().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=X().gapi)===null||i===void 0)&&i.load)o();else{const c=ll("iframefcb");return X()[c]=()=>{gapi.load?o():t(G(n,"network-request-failed"))},al(`${cl()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Et=null,e})}let Et=null;function sd(n){return Et=Et||rd(n),Et}/**
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
 */const id=new at(5e3,15e3),od="__/auth/iframe",ad="emulator/auth/iframe",cd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ld=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dd(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rn(e,ad):`https://${n.config.authDomain}/${od}`,r={apiKey:e.apiKey,appName:n.name,v:ot},s=ld.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${it(r).slice(1)}`}async function ud(n){const e=await sd(n),t=X().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:dd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cd,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=G(n,"network-request-failed"),c=X().setTimeout(()=>{i(o)},id.get());function l(){X().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fd=500,pd=600,md="_blank",gd="http://localhost";class Ir{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vd(n,e,t,r=fd,s=pd){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},hd),{width:r.toString(),height:s.toString(),top:i,left:o}),d=U().toLowerCase();t&&(c=Ls(d)?md:t),js(d)&&(e=e||gd,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(Qc(d)&&c!=="_self")return wd(e||"",c),new Ir(null);const p=window.open(e||"",c,u);x(p,n,"popup-blocked");try{p.focus()}catch{}return new Ir(p)}function wd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const yd="__/auth/handler",bd="emulator/auth/handler",xd=encodeURIComponent("fac");async function Sr(n,e,t,r,s,i){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ot,eventId:s};if(e instanceof Ln){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries({}))o[u]=p}if(e instanceof ct){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await n._getAppCheckToken(),d=l?`#${xd}=${encodeURIComponent(l)}`:"";return`${_d(n)}?${it(c).slice(1)}${d}`}function _d({config:n}){return n.emulator?Rn(n,bd):`https://${n.authDomain}/${yd}`}/**
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
 */const tn="webStorageSupport";class Id{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zs,this._completeRedirectFn=ql,this._overrideRedirectResult=Wl}async _openPopup(e,t,r,s){var i;le((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sr(e,t,r,gn(),s);return vd(e,o,Un())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Sr(e,t,r,gn(),s);return Cl(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(le(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ud(e),r=new Jl(e);return t.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tn,{type:tn},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tn];o!==void 0&&t(!!o),ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ed(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zs()||Ms()||jn()}}const Sd=Id;var Er="@firebase/auth",Cr="1.10.4";/**
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
 */class Ed{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Td(n){ce(new Q("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vs(n)},d=new il(r,s,i,l);return ul(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ce(new Q("auth-internal",e=>{const t=Lt(e.getProvider("auth").getImmediate());return(r=>new Ed(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Y(Er,Cr,Cd(n)),Y(Er,Cr,"esm2017")}/**
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
 */const kd=5*60,Pd=Kr("authIdTokenMaxAge")||kd;let Tr=null;const Nd=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Pd)return;const s=t==null?void 0:t.token;Tr!==s&&(Tr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ad(n=rs()){const e=Fe(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dl(n,{popupRedirectResolver:Sd,persistence:[jl,Il,Zs]}),r=Kr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Nd(i.toString());bl(t,o,()=>o(t.currentUser)),yl(t,c=>o(c))}}const s=Li("auth");return s?hl(t,`http://${s}`):Jr("Auth",!1),t}function Rd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ol({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=G("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Rd().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Td("Browser");const Dd={apiKey:"AIzaSyDPJPxSGMriB5JTSfe5WgmCoaOsnHNfKIw",authDomain:"todo-app-9076d.firebaseapp.com",projectId:"todo-app-9076d",storageBucket:"todo-app-9076d.firebasestorage.app",messagingSenderId:"186858367833",appId:"1:186858367833:web:caa17c7d22ac27b111ba48",measurementId:"G-PSKSKTK9N9"},si=ns(Dd);Pc(si);const Od=Ad(si),jd=new se,Md="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%2024%2024'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.5.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20141)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20url(%23radial-gradient);%20}%20.st2%20{%20fill:%20url(%23linear-gradient);%20}%20.st3%20{%20fill:%20%23fc4c53;%20}%20.st4%20{%20fill:%20url(%23radial-gradient1);%20}%20.st5%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3cpath%20class='st0'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3c/clipPath%3e%3cradialGradient%20id='radial-gradient'%20cx='1.4787'%20cy='12.7883'%20fx='1.4787'%20fy='12.7883'%20r='9.6555'%20gradientTransform='translate(2.4587%20-.293)%20scale(.8032%201.0842)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.368'%20stop-color='%23ffcf09'/%3e%3cstop%20offset='.7176'%20stop-color='%23ffcf09'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%23ffcf09'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='radial-gradient1'%20cx='14.2953'%20cy='23.2909'%20fx='14.2953'%20fy='23.2909'%20r='11.8784'%20gradientTransform='translate(-3.434%20-.6716)%20scale(1.3272%201.0073)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.3827'%20stop-color='%2334a853'/%3e%3cstop%20offset='.7062'%20stop-color='%2334a853'%20stop-opacity='.7'/%3e%3cstop%20offset='1'%20stop-color='%2334a853'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='linear-gradient'%20x1='23.5582'%20y1='6.2864'%20x2='12.1477'%20y2='20.2993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.6711'%20stop-color='%234285f4'/%3e%3cstop%20offset='.8852'%20stop-color='%234285f4'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20class='st3'%20d='M22.36,10h-10.36v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53h-.013s.013-.0099.013-.0099c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6,3.3-4.53,6.16-4.53,1.62,0,3.06.56,4.21,1.64l3.15-3.15c-1.91-1.78-4.39-2.87-7.36-2.87C7.7,1,3.99,3.47,2.18,7.07c-.75,1.48-1.18,3.15-1.18,4.93s.43,3.45,1.18,4.93v.01c1.81,3.59,5.52,6.06,9.82,6.06,2.97,0,5.46-.98,7.28-2.66,2.08-1.92,3.28-4.7401,3.28-8.09,0-.78-.07-1.53-.2-2.25Z'/%3e%3cg%20class='st5'%3e%3cellipse%20class='st1'%20cx='3.6464'%20cy='13.5725'%20rx='7.7549'%20ry='10.4689'/%3e%3cellipse%20class='st4'%20cx='15.5383'%20cy='22.7886'%20rx='15.7646'%20ry='11.9647'%20transform='translate(-2.7047%202.1016)%20rotate(-7.1197)'/%3e%3cpolygon%20class='st2'%20points='11.1048%208.2797%2011.5957%2013.8759%2012.2191%2017.6234%2019.5807%2024.4713%2028.1881%208.5742%2011.1048%208.2797'/%3e%3c/g%3e%3c/svg%3e",Ld=()=>{var O;f.useEffect(()=>{document.title="Sign In – Todo App"},[]);const e=(O=vi().state)==null?void 0:O.message,{loadUserProfile:t}=st(),{theme:r}=Ue(),[s,i]=f.useState(e||""),[o,c]=f.useState(""),[l,d]=f.useState(""),[u,p]=f.useState(""),[h,m]=f.useState(""),[g,w]=f.useState(!1),[v,E]=f.useState(!1),[y,I]=f.useState(!1),S=Pe();f.useEffect(()=>{const C=sessionStorage.getItem("accountDeleteMessage");C&&i(C)},[]),f.useEffect(()=>{if(s){const C=setTimeout(()=>{i(""),sessionStorage.removeItem("accountDeleteMessage")},4e3);return()=>clearTimeout(C)}},[s]);const _=async C=>{if(m(""),C.preventDefault(),!o||!l){p("Enter user details.");return}o&&l&&(p(""),w(!0)),setTimeout(async()=>{try{await $.post("/api/signin",{usernameOrEmail:o,password:l}),await t(),S("/all",{replace:!0})}catch(R){R.response?(p(R.response.data.error||"Sign In failed"),setTimeout(()=>{p("")},4e3)):p("Network error")}finally{w(!1)}},1e3)},k=async()=>{m(""),p("");try{const C=await Bl(Od,jd);E(!0);const N=await C.user.getIdToken();await $.post("/api/firebase-signin",{token:N}),await t(),m(""),S("/all",{replace:!0})}catch(C){console.error("Google sign-in error:",C),C.code!=="auth/popup-closed-by-user"&&C.code!=="auth/cancelled-popup-request"&&m("Google sign-in failed. Please try again."),setTimeout(()=>{m("")},4e3)}finally{E(!1)}};return a.jsxs("div",{className:"app-text-medium relative",children:[s&&a.jsx("div",{className:"text-error absolute bottom-full mx-auto mb-4 w-full text-center font-semibold",children:a.jsx("p",{children:s})}),a.jsxs("form",{className:"desktop:mt-10 relative mx-auto mt-9 flex max-w-[300px] flex-col gap-4",onSubmit:C=>_(C),children:[u&&a.jsx("div",{className:"text-error absolute bottom-full mx-auto mb-3 w-full text-center",children:a.jsx("p",{children:u})}),h&&a.jsx("div",{className:"text-error desktop:mb-2 tablet:mb-1 absolute bottom-full mx-auto mb-3 w-full text-center",children:a.jsx("p",{children:h})}),a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"usernameOrEmail",className:"legend-base",children:"Username or Email"}),a.jsx("input",{type:"text",id:"usernameOrEmail",name:"usernameOrEmail",autoComplete:"off",required:!0,placeholder:"Enter username or email",onChange:C=>c(C.target.value),value:o,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"})]}),a.jsxs("fieldset",{className:"flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700",children:[a.jsx("legend",{htmlFor:"password",className:"legend-base",children:"Password"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:`${y?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter Password",onChange:C=>d(C.target.value),value:l,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"}),a.jsx("img",{src:y?r==="dark"?Qe:Xe:r==="dark"?tt:et,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:C=>C.preventDefault(),onClick:C=>{C.preventDefault();const R=document.getElementById("password"),N=R.selectionStart;I(V=>!V),setTimeout(()=>{R.setSelectionRange(N,N),R.focus()},0)}})]})]}),a.jsx("button",{className:"button-gradient tablet:max-h-[62px] mt-2 flex max-h-[50px] cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black",type:"submit",children:g?a.jsx(W,{color:"#fff",size:24}):"Sign In"})]}),a.jsx("p",{className:"desktop:my-4 my-2 text-center",children:"Or"}),a.jsx("div",{className:"mx-auto max-w-[300px]",children:a.jsx("button",{onClick:k,className:"darkborder-gray-300 tablet:max-h-[62px] flex max-h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-[5px] border border-black py-3.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",type:"button",children:v?a.jsx(ki,{}):a.jsxs(a.Fragment,{children:[a.jsx("img",{src:Md,alt:"Google logo",className:"mb-1 h-5 w-5"}),"Sign in with Google"]})})}),a.jsx("div",{className:"mt-4 flex items-center justify-center",children:a.jsx(Ye,{to:"/todo-app/forget-password",className:"text-gradient-link font-bold",onClick:C=>{C.preventDefault(),S("/forget-password",{replace:!0})},children:"Forgot password?"})}),a.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[a.jsx("p",{children:"Don't have an account?"}),a.jsx(Ye,{to:"/todo-app/sign-up",className:"text-gradient-link font-bold",onClick:C=>{C.preventDefault(),S("/sign-up",{replace:!0})},children:"Sign Up"})]})]})},Ud=()=>{f.useEffect(()=>{document.title="Forgot Password – Todo App"},[]);const n=Pe(),[e,t]=f.useState(""),[r,s]=f.useState(),[i,o]=f.useState(!0),[c,l]=f.useState(""),[d,u]=f.useState(!1),[p,h]=f.useState(!1),m=w=>{l(""),t(w.toLowerCase());const E=/^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/.test(w);s(E)},g=async w=>{w.preventDefault(),e||l("Please enter your email"),r&&(u(!0),l(""),setTimeout(async()=>{try{await $.post("/api/forgot-password",{email:e}),h(!0)}catch(v){v.response?l(v.response.data.error):l("Something went wrong. Please try again later.")}finally{u(!1)}},1e3))};return a.jsxs("div",{className:`${p?"bg-gray-300 dark:bg-gray-900":""} app-text-medium flex h-screen items-center justify-center`,children:[!p&&a.jsxs("div",{className:"relative",children:[a.jsx("h1",{className:"text-gradient-heading app-text-large-tight mb-18 text-center",children:"Forgot Password?"}),c&&a.jsx("div",{className:"absolute top-13 w-full text-center",children:a.jsx("p",{className:"text-error",children:c})}),a.jsx("p",{className:"text-18 tracking-negative-17 font-weight-regular mb-6 max-w-[300px] text-center leading-18",children:"Enter your email address below and we'll send you a link to reset your password:"}),a.jsxs("form",{className:"mx-auto max-w-[300px]",onSubmit:w=>g(w),children:[a.jsxs("div",{className:"relative",children:[a.jsxs("fieldset",{className:`${e?i||r?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[a.jsx("legend",{htmlFor:"email",className:"legend-base",children:"Email Address"}),a.jsx("input",{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:"Enter your email",onKeyDown:w=>{w.key===" "&&w.preventDefault()},onFocus:()=>o(!0),onChange:w=>m(w.target.value),onBlur:()=>o(!1),value:e,className:"rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"})]}),e&&!r&&!i&&a.jsx("div",{className:"absolute",children:a.jsx("p",{className:"text-error",children:"Please enter a valid email address."})})]}),a.jsx("button",{className:"button-gradient tablet:max-h-[62px] mt-8 flex max-h-[50px] w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",type:"submit",children:d?a.jsx(W,{color:"#fff",size:24}):"Send reset link"})]}),a.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[a.jsx("p",{children:"Back to"}),a.jsx(Ye,{to:"/sign-in",onClick:w=>{w.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]}),p&&a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"app-text-large-tight text-success mb-6",children:"Success!"}),a.jsx("p",{children:"If this email is registered, you will receive a reset link."})]})]})},Fd=()=>{const n=Pe(),e=yn(),{theme:t}=Ue(),[r,s]=f.useState(""),[i,o]=f.useState(),[c,l]=f.useState(!0),[d,u]=f.useState(!1),[p,h]=f.useState(""),[m,g]=f.useState(),[w,v]=f.useState(!0),[E,y]=f.useState(!1),[I,S]=f.useState(""),[_,k]=f.useState(!1),[O,C]=f.useState(!1);f.useEffect(()=>{document.title="Reset Password – Todo App"},[]);const[R]=wi(),N=R.get("token");f.useEffect(()=>{N||n("/sign-in",{replace:!0})},[N,n]);const V=T=>{s(T);const F=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/.test(T);o(F)},de=T=>{h(T),g(T===r)},q=async T=>{if(T.preventDefault(),!r||!p){S("All fields are required.");return}i&&m&&(k(!0),S(""),setTimeout(async()=>{try{await $.post("/api/reset-password",{token:N,newPassword:r}),C(!0)}catch(L){L.response?S(L.response.data.error):S("Something went wrong. Please try again later.")}finally{k(!1)}},1e3))};return a.jsxs("div",{className:"app-text-medium",children:[!O&&a.jsxs("div",{className:"flex h-screen flex-col items-center justify-center",children:[a.jsx("h1",{className:"text-center",children:a.jsx("span",{className:"text-gradient-heading app-text-large-tight",children:"Reset Your Password"})}),a.jsxs("form",{onSubmit:T=>q(T),className:"relative max-w-[300px] min-w-[300px]",children:[I&&a.jsx("div",{className:"absolute top-4 w-full text-center",children:a.jsx("p",{className:"text-error",children:I})}),a.jsxs("div",{className:"relative mt-18",children:[a.jsxs("fieldset",{className:`${r?c||i?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[a.jsx("legend",{htmlFor:"password",className:"legend-base",children:"New Password"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:`${d?"text":"password"}`,id:"password",name:"password",autoComplete:"off",required:!0,placeholder:"Enter password",onKeyDown:T=>{T.key===" "&&T.preventDefault()},onFocus:()=>l(!0),onChange:T=>V(T.target.value),onBlur:()=>l(!1),value:r,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),a.jsx("img",{src:d?t==="dark"?Qe:Xe:t==="dark"?tt:et,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:T=>T.preventDefault(),onClick:T=>{T.preventDefault();const L=document.getElementById("password"),F=L.selectionStart;u(ne=>!ne),setTimeout(()=>{L.setSelectionRange(F,F),L.focus()},0)}})]})]}),r&&!i&&!c&&a.jsx("div",{className:`${e>=768?"absolute":""} desktop:left-[-280px] top-0 left-[-200px]`,children:a.jsx("p",{className:"text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]",children:"Password must contain at least 8 characters, including uppercase, lowercase, number, and special character."})})]}),a.jsxs("div",{className:"relative mt-4",children:[a.jsxs("fieldset",{className:`${p?w||m?"border-light-grayish-blue":"border-error-red":"border-light-grayish-blue"} flex flex-col rounded-[5px] border-1`,children:[a.jsx("legend",{htmlFor:"confirm-password",className:"legend-base",children:"Confirm New Password"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("input",{type:`${E?"text":"password"}`,id:"confirm-password",name:"password-confirmation",autoComplete:"off",required:!0,placeholder:"Confirm your password",onKeyDown:T=>{T.key===" "&&T.preventDefault()},onFocus:()=>v(!0),onChange:T=>de(T.target.value),onBlur:()=>v(!1),value:p,className:"flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"}),a.jsx("img",{src:E?t==="dark"?Qe:Xe:t==="dark"?tt:et,className:"mr-3 h-5 w-5 cursor-pointer",onMouseDown:T=>T.preventDefault(),onClick:T=>{T.preventDefault();const L=document.getElementById("confirm-password"),F=L.selectionStart;y(ne=>!ne),setTimeout(()=>{L.setSelectionRange(F,F),L.focus()},0)}})]})]}),p&&!m&&!w&&a.jsx("div",{className:"absolute",children:a.jsx("p",{className:"text-error",children:"Passwords do not match."})})]}),a.jsx("button",{className:"button-gradient tablet:max-h-[62px] mt-10 flex max-h-[50px] w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black",children:_?a.jsx(W,{color:"#fff",size:24}):"Reset Password"})]})]}),O&&a.jsxs("div",{className:"flex h-screen flex-col items-center justify-center text-center",children:[a.jsx("h1",{className:"app-text-large-tight",children:a.jsx("span",{className:"text-success",children:"Password changed successfully!"})}),a.jsx("p",{className:"mt-6",children:"You can now sign in with your new password."}),a.jsxs("div",{className:"mt-6 flex justify-center gap-1",children:[a.jsx("p",{children:"Go to"}),a.jsx(Ye,{to:"/todo-app/sign-in",onClick:T=>{T.preventDefault(),n("/sign-in",{replace:!0})},className:"text-gradient-link font-bold",children:"Sign In"})]})]})]})},Bd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e",$d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='9'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%20d='M1%204.304L3.696%207l6-6'/%3e%3c/svg%3e",zd=""+new URL("icon-drag-light-CeQdmhq9.svg",import.meta.url).href,Vd=""+new URL("icon-drag-dark-V_WBwAmt.svg",import.meta.url).href,Wd=({currentPath:n,input:e,isChecked:t,id:r,setDraggedId:s,handleDrop:i,handleToggleTodoCheckedStatus:o,clearTodoById:c})=>{const{theme:l}=Ue();return a.jsx("li",{draggable:!0,onDragStart:d=>{n==="all"&&(s(r),d.target.classList.add("dragging"))},onDragOver:d=>{n==="all"&&d.preventDefault()},onDrop:()=>{n==="all"&&i(r)},onDragEnd:d=>{d.target.classList.remove("dragging")},className:"bg-gray-50 dark:bg-gray-900",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between px-5 py-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[n==="all"&&a.jsx("img",{src:l==="dark"?Vd:zd,className:"tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-grab"}),a.jsx("div",{className:"radio-btn tablet:h-6 tablet:w-6 flex h-5 w-5 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700",style:t?{backgroundImage:"var(--color-gradient-check)",border:0}:{},onClick:()=>o(r),id:r,children:t&&a.jsx("img",{src:$d})}),a.jsx("p",{className:`mobileLarge:max-w-[16rem] desktop:max-w-[25rem] mobile:max-w-[13rem] max-w-[9rem] break-words [@media(min-width:500px)]:max-w-[21rem] ${l==="dark"?t?"text-gray-600 line-through":"":t?"text-gray-400 line-through":""}`,children:e})]}),a.jsx("img",{src:Bd,alt:"Cross Icon",onClick:()=>c(r),className:"tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-pointer"})]}),a.jsx("div",{className:"h-[1px] border-1 border-gray-300 dark:border-gray-700"})]})})},nn=()=>{const{setTodoOrder:n,todos:e,setTodos:t,allTodos:r,setReorderedTodoList:s}=yi(),{currentPath:i,displayTodos:o}=bi(),{userProfile:c}=st(),l=c==null?void 0:c.email,[d,u]=f.useState("");f.useEffect(()=>{const g=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase();document.title=[`${g} Todos – Todo App`]},[]);const p=g=>{if(d===null||d===g)return;const w=r.map(_=>_.todoId),v=w.findIndex(_=>_===d),E=w.findIndex(_=>_===g);if(v===-1||E===-1)return;const y=[...w];y[v]=g,y[E]=d,n(_=>({..._,allTodos:y}));const I=y.map(_=>o.find(k=>k.todoId===_));s(I);const S=JSON.stringify({currentPath:i,email:l,draggedId:d,droppedId:g});$.post("/api/todos-reorder",{currentPath:i,email:l,draggedId:d,droppedId:g}).catch(()=>{if(navigator.sendBeacon){const _=new Blob([S],{type:"application/json"});navigator.sendBeacon("/api/todos-reorder",_)}}),u("")},h=g=>{const w=e.find(S=>S.todoId===g),v=!w.isChecked,E=v?"active":"completed",y=v?"completed":"active";t(S=>S.map(_=>_.todoId===g?{..._,isChecked:!_.isChecked}:_)),n(S=>({...S,[`${E}Todos`]:(S[`${E}Todos`]||[]).filter(_=>_!==g),[`${y}Todos`]:[...S[`${y}Todos`]||[],g]}));const I=JSON.stringify({email:l,toggledTodoId:w.todoId,isChecked:v});$.post("/api/update-todo-status",{email:l,toggledTodoId:w.todoId,isChecked:v}).catch(()=>{if(navigator.sendBeacon){const S=new Blob([I],{type:"application/json"});navigator.sendBeacon("/api/update-todo-status",S)}})},m=g=>{const w=e.filter(E=>E.todoId!==g);n(E=>({...E,allTodos:w.map(y=>y.todoId)||[],activeTodos:w.filter(y=>!y.isChecked).map(y=>y.todoId)||[],completedTodos:w.filter(y=>y.isChecked).map(y=>y.todoId)||[]})),t(w);const v=JSON.stringify({email:l,deletedId:g});$.post("/api/delete-todo-item",{email:l,deletedId:g}).catch(()=>{if(navigator.sendBeacon){const E=new Blob([v],{type:"application/json"});navigator.sendBeacon("/api/delete-todo-item",E)}})};return a.jsx("ul",{children:Array.isArray(o)&&o.map(g=>a.jsx(Wd,{currentPath:i,input:g.todo,id:g.todoId,isChecked:g.isChecked,setDraggedId:u,handleDrop:p,handleToggleTodoCheckedStatus:h,clearTodoById:m},g.todoId))})};function Hd(){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}),a.jsx("div",{style:{width:32,height:32,borderRadius:"50%",border:"4px solid transparent",borderTop:"4px solid",borderImageSlice:1,borderImageSource:"var(--color-gradient-button)",animation:"spin 1s linear infinite"}})]})}var rn,kr;function Gd(){if(kr)return rn;kr=1;var n=!1,e,t,r,s,i,o,c,l,d,u,p,h,m,g,w;function v(){if(!n){n=!0;var y=navigator.userAgent,I=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y),S=/(Mac OS X)|(Windows)|(Linux)/.exec(y);if(h=/\b(iPhone|iP[ao]d)/.exec(y),m=/\b(iP[ao]d)/.exec(y),u=/Android/i.exec(y),g=/FBAN\/\w+;/i.exec(y),w=/Mobile/i.exec(y),p=!!/Win64/.exec(y),I){e=I[1]?parseFloat(I[1]):I[5]?parseFloat(I[5]):NaN,e&&document&&document.documentMode&&(e=document.documentMode);var _=/(?:Trident\/(\d+.\d+))/.exec(y);o=_?parseFloat(_[1])+4:e,t=I[2]?parseFloat(I[2]):NaN,r=I[3]?parseFloat(I[3]):NaN,s=I[4]?parseFloat(I[4]):NaN,s?(I=/(?:Chrome\/(\d+\.\d+))/.exec(y),i=I&&I[1]?parseFloat(I[1]):NaN):i=NaN}else e=t=r=i=s=NaN;if(S){if(S[1]){var k=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);c=k?parseFloat(k[1].replace("_",".")):!0}else c=!1;l=!!S[2],d=!!S[3]}else c=l=d=!1}}var E={ie:function(){return v()||e},ieCompatibilityMode:function(){return v()||o>e},ie64:function(){return E.ie()&&p},firefox:function(){return v()||t},opera:function(){return v()||r},webkit:function(){return v()||s},safari:function(){return E.webkit()},chrome:function(){return v()||i},windows:function(){return v()||l},osx:function(){return v()||c},linux:function(){return v()||d},iphone:function(){return v()||h},mobile:function(){return v()||h||m||u||w},nativeApp:function(){return v()||g},android:function(){return v()||u},ipad:function(){return v()||m}};return rn=E,rn}var sn,Pr;function qd(){if(Pr)return sn;Pr=1;var n=!!(typeof window<"u"&&window.document&&window.document.createElement),e={canUseDOM:n,canUseWorkers:typeof Worker<"u",canUseEventListeners:n&&!!(window.addEventListener||window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};return sn=e,sn}var on,Nr;function Kd(){if(Nr)return on;Nr=1;var n=qd(),e;n.canUseDOM&&(e=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function t(r,s){if(!n.canUseDOM||s&&!("addEventListener"in document))return!1;var i="on"+r,o=i in document;if(!o){var c=document.createElement("div");c.setAttribute(i,"return;"),o=typeof c[i]=="function"}return!o&&e&&r==="wheel"&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}return on=t,on}var an,Ar;function Jd(){if(Ar)return an;Ar=1;var n=Gd(),e=Kd(),t=10,r=40,s=800;function i(o){var c=0,l=0,d=0,u=0;return"detail"in o&&(l=o.detail),"wheelDelta"in o&&(l=-o.wheelDelta/120),"wheelDeltaY"in o&&(l=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(c=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(c=l,l=0),d=c*t,u=l*t,"deltaY"in o&&(u=o.deltaY),"deltaX"in o&&(d=o.deltaX),(d||u)&&o.deltaMode&&(o.deltaMode==1?(d*=r,u*=r):(d*=s,u*=s)),d&&!c&&(c=d<1?-1:1),u&&!l&&(l=u<1?-1:1),{spinX:c,spinY:l,pixelX:d,pixelY:u}}return i.getEventType=function(){return n.firefox()?"DOMMouseScroll":e("wheel")?"wheel":"mousewheel"},an=i,an}var cn,Rr;function Zd(){return Rr||(Rr=1,cn=Jd()),cn}var Yd=Zd();const Xd=Ci(Yd);function Qd(n,e,t,r,s,i){i===void 0&&(i=0);var o=Le(n,e,i),c=o.width,l=o.height,d=Math.min(c,t),u=Math.min(l,r);return d>u*s?{width:u*s,height:u}:{width:d,height:d/s}}function eu(n){return n.width>n.height?n.width/n.naturalWidth:n.height/n.naturalHeight}function qe(n,e,t,r,s){s===void 0&&(s=0);var i=Le(e.width,e.height,s),o=i.width,c=i.height;return{x:Dr(n.x,o,t.width,r),y:Dr(n.y,c,t.height,r)}}function Dr(n,e,t,r){var s=e*r/2-t/2;return Bt(n,-s,s)}function Or(n,e){return Math.sqrt(Math.pow(n.y-e.y,2)+Math.pow(n.x-e.x,2))}function jr(n,e){return Math.atan2(e.y-n.y,e.x-n.x)*180/Math.PI}function tu(n,e,t,r,s,i,o){i===void 0&&(i=0),o===void 0&&(o=!0);var c=o?nu:ru,l=Le(e.width,e.height,i),d=Le(e.naturalWidth,e.naturalHeight,i),u={x:c(100,((l.width-t.width/s)/2-n.x/s)/l.width*100),y:c(100,((l.height-t.height/s)/2-n.y/s)/l.height*100),width:c(100,t.width/l.width*100/s),height:c(100,t.height/l.height*100/s)},p=Math.round(c(d.width,u.width*d.width/100)),h=Math.round(c(d.height,u.height*d.height/100)),m=d.width>=d.height*r,g=m?{width:Math.round(h*r),height:h}:{width:p,height:Math.round(p/r)},w=j(j({},g),{x:Math.round(c(d.width-g.width,u.x*d.width/100)),y:Math.round(c(d.height-g.height,u.y*d.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:w}}function nu(n,e){return Math.min(n,Math.max(0,e))}function ru(n,e){return e}function su(n,e,t,r,s,i){var o=Le(e.width,e.height,t),c=Bt(r.width/o.width*(100/n.width),s,i),l={x:c*o.width/2-r.width/2-o.width*c*(n.x/100),y:c*o.height/2-r.height/2-o.height*c*(n.y/100)};return{crop:l,zoom:c}}function iu(n,e,t){var r=eu(e);return t.height>t.width?t.height/(n.height*r):t.width/(n.width*r)}function ou(n,e,t,r,s,i){t===void 0&&(t=0);var o=Le(e.naturalWidth,e.naturalHeight,t),c=Bt(iu(n,e,r),s,i),l=r.height>r.width?r.height/n.height:r.width/n.width,d={x:((o.width-n.width)/2-n.x)*l,y:((o.height-n.height)/2-n.y)*l};return{crop:d,zoom:c}}function Mr(n,e){return{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}function au(n){return n*Math.PI/180}function Le(n,e,t){var r=au(t);return{width:Math.abs(Math.cos(r)*n)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*n)+Math.abs(Math.cos(r)*e)}}function Bt(n,e,t){return Math.min(Math.max(n,e),t)}function bt(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return n.filter(function(t){return typeof t=="string"&&t.length>0}).join(" ").trim()}var cu=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,lu=1,du=3,uu=1,hu=function(n){Dc(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.cropperRef=f.createRef(),t.imageRef=f.createRef(),t.videoRef=f.createRef(),t.containerPosition={x:0,y:0},t.containerRef=null,t.styleRef=null,t.containerRect=null,t.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},t.dragStartPosition={x:0,y:0},t.dragStartCrop={x:0,y:0},t.gestureZoomStart=0,t.gestureRotationStart=0,t.isTouching=!1,t.lastPinchDistance=0,t.lastPinchRotation=0,t.rafDragTimeout=null,t.rafPinchTimeout=null,t.wheelTimer=null,t.currentDoc=typeof document<"u"?document:null,t.currentWindow=typeof window<"u"?window:null,t.resizeObserver=null,t.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},t.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!t.containerRef)){var r=!0;t.resizeObserver=new window.ResizeObserver(function(s){if(r){r=!1;return}t.computeSizes()}),t.resizeObserver.observe(t.containerRef)}},t.preventZoomSafari=function(r){return r.preventDefault()},t.cleanEvents=function(){t.currentDoc&&(t.currentDoc.removeEventListener("mousemove",t.onMouseMove),t.currentDoc.removeEventListener("mouseup",t.onDragStopped),t.currentDoc.removeEventListener("touchmove",t.onTouchMove),t.currentDoc.removeEventListener("touchend",t.onDragStopped),t.currentDoc.removeEventListener("gesturechange",t.onGestureChange),t.currentDoc.removeEventListener("gestureend",t.onGestureEnd),t.currentDoc.removeEventListener("scroll",t.onScroll))},t.clearScrollEvent=function(){t.containerRef&&t.containerRef.removeEventListener("wheel",t.onWheel),t.wheelTimer&&clearTimeout(t.wheelTimer)},t.onMediaLoad=function(){var r=t.computeSizes();r&&(t.emitCropData(),t.setInitialCrop(r)),t.props.onMediaLoaded&&t.props.onMediaLoaded(t.mediaSize)},t.setInitialCrop=function(r){if(t.props.initialCroppedAreaPercentages){var s=su(t.props.initialCroppedAreaPercentages,t.mediaSize,t.props.rotation,r,t.props.minZoom,t.props.maxZoom),i=s.crop,o=s.zoom;t.props.onCropChange(i),t.props.onZoomChange&&t.props.onZoomChange(o)}else if(t.props.initialCroppedAreaPixels){var c=ou(t.props.initialCroppedAreaPixels,t.mediaSize,t.props.rotation,r,t.props.minZoom,t.props.maxZoom),i=c.crop,o=c.zoom;t.props.onCropChange(i),t.props.onZoomChange&&t.props.onZoomChange(o)}},t.computeSizes=function(){var r,s,i,o,c,l,d=t.imageRef.current||t.videoRef.current;if(d&&t.containerRef){t.containerRect=t.containerRef.getBoundingClientRect(),t.saveContainerPosition();var u=t.containerRect.width/t.containerRect.height,p=((r=t.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((s=t.videoRef.current)===null||s===void 0?void 0:s.videoWidth)||0,h=((i=t.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((o=t.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,m=d.offsetWidth<p||d.offsetHeight<h,g=p/h,w=void 0;if(m)switch(t.state.mediaObjectFit){default:case"contain":w=u>g?{width:t.containerRect.height*g,height:t.containerRect.height}:{width:t.containerRect.width,height:t.containerRect.width/g};break;case"horizontal-cover":w={width:t.containerRect.width,height:t.containerRect.width/g};break;case"vertical-cover":w={width:t.containerRect.height*g,height:t.containerRect.height};break}else w={width:d.offsetWidth,height:d.offsetHeight};t.mediaSize=j(j({},w),{naturalWidth:p,naturalHeight:h}),t.props.setMediaSize&&t.props.setMediaSize(t.mediaSize);var v=t.props.cropSize?t.props.cropSize:Qd(t.mediaSize.width,t.mediaSize.height,t.containerRect.width,t.containerRect.height,t.props.aspect,t.props.rotation);return(((c=t.state.cropSize)===null||c===void 0?void 0:c.height)!==v.height||((l=t.state.cropSize)===null||l===void 0?void 0:l.width)!==v.width)&&t.props.onCropSizeChange&&t.props.onCropSizeChange(v),t.setState({cropSize:v},t.recomputeCropPosition),t.props.setCropSize&&t.props.setCropSize(v),v}},t.saveContainerPosition=function(){if(t.containerRef){var r=t.containerRef.getBoundingClientRect();t.containerPosition={x:r.left,y:r.top}}},t.onMouseDown=function(r){t.currentDoc&&(r.preventDefault(),t.currentDoc.addEventListener("mousemove",t.onMouseMove),t.currentDoc.addEventListener("mouseup",t.onDragStopped),t.saveContainerPosition(),t.onDragStart(e.getMousePoint(r)))},t.onMouseMove=function(r){return t.onDrag(e.getMousePoint(r))},t.onScroll=function(r){t.currentDoc&&(r.preventDefault(),t.saveContainerPosition())},t.onTouchStart=function(r){t.currentDoc&&(t.isTouching=!0,!(t.props.onTouchRequest&&!t.props.onTouchRequest(r))&&(t.currentDoc.addEventListener("touchmove",t.onTouchMove,{passive:!1}),t.currentDoc.addEventListener("touchend",t.onDragStopped),t.saveContainerPosition(),r.touches.length===2?t.onPinchStart(r):r.touches.length===1&&t.onDragStart(e.getTouchPoint(r.touches[0]))))},t.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?t.onPinchMove(r):r.touches.length===1&&t.onDrag(e.getTouchPoint(r.touches[0]))},t.onGestureStart=function(r){t.currentDoc&&(r.preventDefault(),t.currentDoc.addEventListener("gesturechange",t.onGestureChange),t.currentDoc.addEventListener("gestureend",t.onGestureEnd),t.gestureZoomStart=t.props.zoom,t.gestureRotationStart=t.props.rotation)},t.onGestureChange=function(r){if(r.preventDefault(),!t.isTouching){var s=e.getMousePoint(r),i=t.gestureZoomStart-1+r.scale;if(t.setNewZoom(i,s,{shouldUpdatePosition:!0}),t.props.onRotationChange){var o=t.gestureRotationStart+r.rotation;t.props.onRotationChange(o)}}},t.onGestureEnd=function(r){t.cleanEvents()},t.onDragStart=function(r){var s,i,o=r.x,c=r.y;t.dragStartPosition={x:o,y:c},t.dragStartCrop=j({},t.props.crop),(i=(s=t.props).onInteractionStart)===null||i===void 0||i.call(s)},t.onDrag=function(r){var s=r.x,i=r.y;t.currentWindow&&(t.rafDragTimeout&&t.currentWindow.cancelAnimationFrame(t.rafDragTimeout),t.rafDragTimeout=t.currentWindow.requestAnimationFrame(function(){if(t.state.cropSize&&!(s===void 0||i===void 0)){var o=s-t.dragStartPosition.x,c=i-t.dragStartPosition.y,l={x:t.dragStartCrop.x+o,y:t.dragStartCrop.y+c},d=t.props.restrictPosition?qe(l,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):l;t.props.onCropChange(d)}}))},t.onDragStopped=function(){var r,s;t.isTouching=!1,t.cleanEvents(),t.emitCropData(),(s=(r=t.props).onInteractionEnd)===null||s===void 0||s.call(r)},t.onWheel=function(r){if(t.currentWindow&&!(t.props.onWheelRequest&&!t.props.onWheelRequest(r))){r.preventDefault();var s=e.getMousePoint(r),i=Xd(r).pixelY,o=t.props.zoom-i*t.props.zoomSpeed/200;t.setNewZoom(o,s,{shouldUpdatePosition:!0}),t.state.hasWheelJustStarted||t.setState({hasWheelJustStarted:!0},function(){var c,l;return(l=(c=t.props).onInteractionStart)===null||l===void 0?void 0:l.call(c)}),t.wheelTimer&&clearTimeout(t.wheelTimer),t.wheelTimer=t.currentWindow.setTimeout(function(){return t.setState({hasWheelJustStarted:!1},function(){var c,l;return(l=(c=t.props).onInteractionEnd)===null||l===void 0?void 0:l.call(c)})},250)}},t.getPointOnContainer=function(r,s){var i=r.x,o=r.y;if(!t.containerRect)throw new Error("The Cropper is not mounted");return{x:t.containerRect.width/2-(i-s.x),y:t.containerRect.height/2-(o-s.y)}},t.getPointOnMedia=function(r){var s=r.x,i=r.y,o=t.props,c=o.crop,l=o.zoom;return{x:(s+c.x)/l,y:(i+c.y)/l}},t.setNewZoom=function(r,s,i){var o=i===void 0?{}:i,c=o.shouldUpdatePosition,l=c===void 0?!0:c;if(!(!t.state.cropSize||!t.props.onZoomChange)){var d=Bt(r,t.props.minZoom,t.props.maxZoom);if(l){var u=t.getPointOnContainer(s,t.containerPosition),p=t.getPointOnMedia(u),h={x:p.x*d-u.x,y:p.y*d-u.y},m=t.props.restrictPosition?qe(h,t.mediaSize,t.state.cropSize,d,t.props.rotation):h;t.props.onCropChange(m)}t.props.onZoomChange(d)}},t.getCropData=function(){if(!t.state.cropSize)return null;var r=t.props.restrictPosition?qe(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;return tu(r,t.mediaSize,t.state.cropSize,t.getAspect(),t.props.zoom,t.props.rotation,t.props.restrictPosition)},t.emitCropData=function(){var r=t.getCropData();if(r){var s=r.croppedAreaPercentages,i=r.croppedAreaPixels;t.props.onCropComplete&&t.props.onCropComplete(s,i),t.props.onCropAreaChange&&t.props.onCropAreaChange(s,i)}},t.emitCropAreaChange=function(){var r=t.getCropData();if(r){var s=r.croppedAreaPercentages,i=r.croppedAreaPixels;t.props.onCropAreaChange&&t.props.onCropAreaChange(s,i)}},t.recomputeCropPosition=function(){if(t.state.cropSize){var r=t.props.restrictPosition?qe(t.props.crop,t.mediaSize,t.state.cropSize,t.props.zoom,t.props.rotation):t.props.crop;t.props.onCropChange(r),t.emitCropData()}},t.onKeyDown=function(r){var s,i,o=t.props,c=o.crop,l=o.onCropChange,d=o.keyboardStep,u=o.zoom,p=o.rotation,h=d;if(t.state.cropSize){r.shiftKey&&(h*=.2);var m=j({},c);switch(r.key){case"ArrowUp":m.y-=h,r.preventDefault();break;case"ArrowDown":m.y+=h,r.preventDefault();break;case"ArrowLeft":m.x-=h,r.preventDefault();break;case"ArrowRight":m.x+=h,r.preventDefault();break;default:return}t.props.restrictPosition&&(m=qe(m,t.mediaSize,t.state.cropSize,u,p)),r.repeat||(i=(s=t.props).onInteractionStart)===null||i===void 0||i.call(s),l(m)}},t.onKeyUp=function(r){var s,i;switch(r.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":r.preventDefault();break;default:return}t.emitCropData(),(i=(s=t.props).onInteractionEnd)===null||i===void 0||i.call(s)},t}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=cu,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},e.prototype.componentWillUnmount=function(){var t,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(t){var r,s,i,o,c,l,d,u,p;t.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):t.aspect!==this.props.aspect?this.computeSizes():t.objectFit!==this.props.objectFit?this.computeSizes():t.zoom!==this.props.zoom?this.recomputeCropPosition():((r=t.cropSize)===null||r===void 0?void 0:r.height)!==((s=this.props.cropSize)===null||s===void 0?void 0:s.height)||((i=t.cropSize)===null||i===void 0?void 0:i.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((c=t.crop)===null||c===void 0?void 0:c.x)!==((l=this.props.crop)===null||l===void 0?void 0:l.x)||((d=t.crop)===null||d===void 0?void 0:d.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),t.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),t.video!==this.props.video&&((p=this.videoRef.current)===null||p===void 0||p.load());var h=this.getObjectFit();h!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:h},this.computeSizes)},e.prototype.getAspect=function(){var t=this.props,r=t.cropSize,s=t.aspect;return r?r.width/r.height:s},e.prototype.getObjectFit=function(){var t,r,s,i;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var c=this.containerRect.width/this.containerRect.height,l=((t=this.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((r=this.videoRef.current)===null||r===void 0?void 0:r.videoWidth)||0,d=((s=this.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((i=this.videoRef.current)===null||i===void 0?void 0:i.videoHeight)||0,u=l/d;return u<c?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},e.prototype.onPinchStart=function(t){var r=e.getTouchPoint(t.touches[0]),s=e.getTouchPoint(t.touches[1]);this.lastPinchDistance=Or(r,s),this.lastPinchRotation=jr(r,s),this.onDragStart(Mr(r,s))},e.prototype.onPinchMove=function(t){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var s=e.getTouchPoint(t.touches[0]),i=e.getTouchPoint(t.touches[1]),o=Mr(s,i);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var c=Or(s,i),l=r.props.zoom*(c/r.lastPinchDistance);r.setNewZoom(l,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=c;var d=jr(s,i),u=r.props.rotation+(d-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(u),r.lastPinchRotation=d})}},e.prototype.render=function(){var t=this,r,s=this.props,i=s.image,o=s.video,c=s.mediaProps,l=s.cropperProps,d=s.transform,u=s.crop,p=u.x,h=u.y,m=s.rotation,g=s.zoom,w=s.cropShape,v=s.showGrid,E=s.roundCropAreaPixels,y=s.style,I=y.containerStyle,S=y.cropAreaStyle,_=y.mediaStyle,k=s.classes,O=k.containerClassName,C=k.cropAreaClassName,R=k.mediaClassName,N=(r=this.state.mediaObjectFit)!==null&&r!==void 0?r:this.getObjectFit();return f.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(de){return t.containerRef=de},"data-testid":"container",style:I,className:bt("reactEasyCrop_Container",O)},i?f.createElement("img",j({alt:"",className:bt("reactEasyCrop_Image",N==="contain"&&"reactEasyCrop_Contain",N==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",N==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R)},c,{src:i,ref:this.imageRef,style:j(j({},_),{transform:d||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(g,")")}),onLoad:this.onMediaLoad})):o&&f.createElement("video",j({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:bt("reactEasyCrop_Video",N==="contain"&&"reactEasyCrop_Contain",N==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",N==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R)},c,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:j(j({},_),{transform:d||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(g,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(V){return f.createElement("source",j({key:V.src},V))})),this.state.cropSize&&f.createElement("div",j({ref:this.cropperRef,style:j(j({},S),{width:E?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:E?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:bt("reactEasyCrop_CropArea",w==="round"&&"reactEasyCrop_CropAreaRound",v&&"reactEasyCrop_CropAreaGrid",C)},l)))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:du,minZoom:lu,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:uu},e.getMousePoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e.getTouchPoint=function(t){return{x:Number(t.clientX),y:Number(t.clientY)}},e}(f.Component);const fu=(n,e)=>new Promise((t,r)=>{if(!e){r(new Error("Cropped area pixels not defined."));return}const s=new Image;s.crossOrigin="anonymous",s.src=n,s.onload=()=>{const i=document.createElement("canvas"),o=i.getContext("2d");if(i.width=e.width,i.height=e.height,!o){r(new Error("Could not get canvas context."));return}o.drawImage(s,e.x,e.y,e.width,e.height,0,0,e.width,e.height),i.toBlob(c=>{c?t(c):r(new Error("Canvas toBlob failed."))},"image/jpeg",.95)},s.onerror=i=>{console.error("Error loading image for cropping:",i),r(i)}}),pu=({src:n,onCropDone:e,onCancel:t})=>{const[r,s]=f.useState({x:0,y:0}),[i,o]=f.useState(1),[c,l]=f.useState(null),[d,u]=f.useState(!1),p=f.useCallback((m,g)=>{l(g)},[]),h=async()=>{u(!0);try{const m=await fu(n,c);e(m)}catch(m){console.error("Error cropping image:",m)}finally{u(!1),t()}};return a.jsxs("div",{className:"image-crop-modal app-text-medium mx-auto max-w-[400px] rounded-[5px] bg-white px-4 py-5 shadow-lg dark:bg-gray-800",children:[a.jsx("div",{className:"relative h-64 overflow-hidden rounded-lg dark:bg-black bg-white",children:a.jsx(hu,{image:n,crop:r,zoom:i,aspect:1,onCropChange:s,onZoomChange:o,onCropComplete:p,classes:{containerBase:"react-easy-crop"}})}),a.jsxs("div",{className:"mt-8 flex items-center justify-between gap-6 text-black",children:[a.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:t,children:"Cancel"}),a.jsx("button",{className:"save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 disabled:opacity-50",onClick:h,disabled:d||!c,children:d?a.jsx(W,{color:"#fff",size:16}):"Save"})]}),a.jsx("p",{className:"app-text-small mt-4 text-center  dark:text-gray-400 italic",children:"Adjust the zoom and position to crop your image."})]})},mu=({setIsProfilePictureUploadMenu:n,onImageChange:e})=>{const{profilePictureURL:t,previewImage:r,setPreviewImage:s,setImageToUpload:i,isProfilePictureChanged:o,setIsProfilePictureChanged:c,setNoProfilePicture:l}=Fr(),[d,u]=f.useState(!1),[p,h]=f.useState(!1),[m,g]=f.useState(""),w=f.useRef(null),v=_=>{const k=_.target.files[0];if(k&&k.type.startsWith("image/")){const O=URL.createObjectURL(k);g(O),h(!0)}_.target.value=""},E=_=>{const k=URL.createObjectURL(_);r&&URL.revokeObjectURL(r),i(_),s(k),c(!0)},y=()=>{if(u(!0),r){setTimeout(()=>{URL.revokeObjectURL(r),s(""),i(""),c(!0),u(!1)},1500);return}if(t){setTimeout(()=>{s(Br),l(!0),c(!0),u(!1)},1500);return}c(!1),n(!1)},I=()=>{c(!1),r?(u(!0),setTimeout(()=>{e(),u(!1),n(!1)},1500)):setTimeout(()=>{e(),n(!1)},500)},S=()=>{c(!1),n(!1)};return a.jsxs("div",{className:"profile-picture-upload-menu app-text-medium mx-auto max-w-[400px] rounded-[5px] px-4 py-5",children:[a.jsxs("div",{className:"flex items-center justify-between gap-2",children:[a.jsxs("div",{className:"relative h-32 w-32 overflow-hidden rounded-full",children:[a.jsx("img",{src:r||t||null,className:"h-full w-full object-cover",alt:"Profile Picture"}),d&&a.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:a.jsx(W,{color:"#fff",size:24})})]}),a.jsxs("div",{className:"flex flex-col gap-4 dark:text-black",children:[a.jsx("label",{htmlFor:"profile-upload",className:"upload-button-gradient cursor-pointer rounded-[5px] p-3",children:"Upload Image"}),a.jsx("input",{type:"file",id:"profile-upload",accept:"image/*",ref:w,className:"hidden",onChange:_=>v(_)}),a.jsx("button",{className:"remove-button-gradient cursor-pointer rounded-[5px] p-3",onClick:()=>y(),children:"Remove Image"})]})]}),a.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6 dark:text-black",children:[a.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>S(),children:"Cancel"}),a.jsx("button",{className:`save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 ${o?"":"opacity-65"}`,onClick:()=>I(),children:"Save"})]}),a.jsx("div",{children:a.jsx("p",{className:"app-text-small mt-5 text-center italic dark:text-gray-400",children:"Supported formats: JPG, PNG, WEBP — Max size: 2MB"})}),p&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:a.jsx(pu,{src:m,onCropDone:E,onCancel:()=>{g(""),h(!1)}})})]})};async function gu(n,e,t,r){var s,i,o;try{const c=await $.post("/api/delete-account",{email:n,username:e});return localStorage.clear(),sessionStorage.clear(),r(),c.status===200?(sessionStorage.setItem("accountDeleteMessage","Account deleted successfully"),t("/sign-in",{replace:!0}),window.location.reload(),""):((s=c.data)==null?void 0:s.error)||"Failed to delete account"}catch(c){return((o=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:o.error)||"Something went wrong"}}const vu=({setDeleteConfirmation:n,setUsernameAuthentication:e})=>{const t=Pe(),{userProfile:r}=st(),s=r==null?void 0:r.email,i=$r(),[o,c]=f.useState(""),[l,d]=f.useState(""),[u,p]=f.useState(!1),h=async()=>{p(!0),setTimeout(async()=>{if(o&&o.length>=3){const m=await gu(s,o,t,i);m&&d(m),p(!1)}else p(!1),d("Enter your username")},1e3)};return a.jsxs("div",{className:"tablet:mx-auto mx-4 rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-20 mb-8 flex gap-2 font-bold",children:"Confirm your username"}),a.jsx("p",{children:"Please confirm your username to permanently delete your account."}),a.jsx("p",{className:"mt-4",children:"This step is required for security reasons."})]}),a.jsxs("div",{className:"mt-4 flex items-center",children:[a.jsxs("fieldset",{className:"tablet:max-w-[300px] flex max-w-[200px] flex-grow flex-col rounded-[5px] border-1",children:[a.jsx("legend",{htmlFor:"username",className:"mb-1 ml-3"}),a.jsx("input",{type:"text",id:"username",name:"username",autoComplete:"off",minLength:"3",maxLength:"15",placeholder:"Enter username to proceed",onChange:m=>c(m.target.value),value:o,className:"rounded-[5px] py-2 pl-3 outline-none"})]}),l&&a.jsxs("p",{className:"text-error mobileLarge:max-w-none mt-1 ml-2 max-w-[50px]",children:[l,"!"]})]}),a.jsxs("div",{className:"mt-6 flex items-center justify-between gap-6 dark:text-black",children:[a.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3",onClick:()=>{e(!1),n(!1)},children:"Cancel"}),a.jsx("button",{className:`deleteAccount-button-gradient tablet:max-h-[42px] tablet:min-w-[255px] max-h-[38px] min-w-[163px] flex-grow cursor-pointer rounded-[5px] p-3 ${o.length>=3?"":"opacity-55"}`,onClick:()=>{o&&h()},children:u?a.jsx(W,{color:"#fff",size:16}):"Proceed"})]})]})},ii=""+new URL("icon-bin-DCZtocnW.png",import.meta.url).href,wu=""+new URL("icon-bin-dark-By_I2TUT.png",import.meta.url).href,yu=({setDeleteConfirmation:n})=>{const{theme:e}=Ue(),[t,r]=f.useState(!1);return a.jsxs("div",{className:"tablet:mx-auto mx-4 rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"mb-8 flex items-center gap-2 font-bold",children:[a.jsx("img",{src:e==="dark"?wu:ii,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account?"]}),a.jsx("p",{children:"Are you sure you want to permanently delete your account?"}),a.jsx("p",{className:"mt-4 font-bold",children:"This action cannot be undone and will erase all your data."})]}),a.jsxs("div",{className:"mt-10 flex items-center justify-between gap-6",children:[a.jsx("button",{className:"cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>n(!1),children:"Cancel"}),a.jsx("button",{className:"deleteAccount-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black",onClick:()=>{r(!0)},children:"Yes, delete my account"})]}),t&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:a.jsx(vu,{setDeleteConfirmation:n,setUsernameAuthentication:r})})]})},bu=""+new URL("icon-camera-CKSg84tl.svg",import.meta.url).href,Lr=""+new URL("icon-edit-light-Cb_IW_6S.png",import.meta.url).href,xt=""+new URL("icon-edit-dark-Bqd0IM0l.png",import.meta.url).href,xu=()=>{const n=Pe(),e=yn(),t=$r(),r=sessionStorage.getItem("wasSignedIn"),{theme:s}=Ue(),{isSignedOut:i,setIsSignedOut:o}=xi(),{userProfile:c,loadUserProfile:l,isUserProfileLoading:d}=st(),[u,p]=f.useState(""),[h,m]=f.useState(""),[g,w]=f.useState(!1),[v,E]=f.useState(""),[y,I]=f.useState(""),[S,_]=f.useState(!1),{username:k,setUsername:O,isUsernameFieldFocused:C,setIsUsernameFieldFocused:R,isUsernameValid:N,isSearchingUsername:V,setIsSearchingUsername:de,isUsernameAvailable:q,setIsUsernameAvailable:T,usernameStatus:L,setUsernameStatus:F}=Ur(),[ne,$t]=f.useState(""),{profilePictureURL:$e,setProfilePictureURL:dt,previewImage:ut,setPreviewImage:ze,imageToUpload:re,setImageToUpload:ht,noProfilePicture:ft}=Fr(),[ue,Ve]=f.useState(!1),[zt,pt]=f.useState(!1),[Ae,Re]=f.useState(!1),[b,D]=f.useState(!1),[M,ye]=f.useState(!1),[We,Vt]=f.useState(!1),[oi,Bn]=f.useState(!1),[mt,$n]=f.useState(!1),[ai,gt]=f.useState(!1),[vt,He]=f.useState(""),[zn,K]=f.useState(!1),[ci,Vn]=f.useState(!1),[li,Wn]=f.useState(!1),Wt=f.useRef(null),Ht=f.useRef(null);f.useEffect(()=>{r||n("/sign-in",{replace:!0}),document.title="Profile – Todo App"},[]),f.useEffect(()=>{p((c==null?void 0:c.fullName)||""),E((c==null?void 0:c.username)||""),$t((c==null?void 0:c.email)||""),dt((c==null?void 0:c.profilePicture)||Br)},[c]);const di=()=>{Ve(!0)},ui=async()=>{var Ge,be;K(!0);const A=new FormData;A.append("email",c.email),A.append("newProfilePicture",re);try{(await $.post("/api/new-profile-picture",A,{headers:{"Content-Type":"multipart/form-data"}})).status===200&&(await l(),K(!1),Re(!1))}catch(wt){K(!1),console.log(wt),console.log(((be=(Ge=wt.response)==null?void 0:Ge.data)==null?void 0:be.error)||"An error occurred during upload.")}},hi=async()=>{var A,Ge;try{K(!0);const be=c.email;(await $.post("/api/remove-profile-picture",{email:be})).status===200&&(await l(),K(!1),Re(!1))}catch(be){K(!1),console.log(be),console.log(((Ge=(A=be.response)==null?void 0:A.data)==null?void 0:Ge.error)||"An error occurred during upload.")}};f.useEffect(()=>{m(u),I(v)},[u,v]);const fi=()=>{Vn(!1),D(!0),gt(!1),He("")};f.useEffect(()=>{Wt.current&&M&&Wt.current.focus()},[M]),f.useEffect(()=>{Ht.current&&We&&Ht.current.focus()},[We,N]),f.useEffect(()=>{Bn(M||Ae)},[M,Ae]),f.useEffect(()=>{w(h!==u),_(y!==v)},[ue,h,y,u,v]),f.useEffect(()=>{$n(g||S||ue)},[ue,g,S,u,v]),f.useEffect(()=>{y!==v?O(y):(O(""),de(!1),T(!1),F(""))},[y,v]);const pi=()=>{Vt(!1),R(!1),F("")},mi=async()=>{if(mt){if(ue&&re&&await ui(),ft&&await hi(),g)try{const A=await $.post("/api/update-user/full-name",{fullName:h,email:ne});await l()}catch(A){console.log(A),K(!1),gt(!1),He(res.data.error),D(!1)}if(S)if(q)try{const A=await $.post("/api/update-user/username",{newUsername:y,email:ne});await l(),He(A.data.message)}catch(A){console.log(A),K(!1),gt(!1),He(res.data.error),D(!1)}else F("username already taken.");K(!1),Ve(!1),ze(""),ht(""),O(""),He("Updated successfully."),gt(!0),$n(!1),D(!1)}},gi=()=>{Vn(!0),Ve(!1),ze(""),ht(""),O(""),D(!1),T(!1),ye(!1),Vt(!1),Bn(!1),w(!1),_(!1),m(u),I(v)};return a.jsxs("div",{className:"app-text-medium relative bg-gray-300 dark:bg-gray-800",children:[d?a.jsxs("div",{className:"flex h-screen w-full items-center justify-center",children:[a.jsx(Hd,{})," "]}):a.jsxs("div",{className:"mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center",children:[a.jsxs("div",{className:"relative flex w-full flex-col items-center justify-center gap-5",children:[a.jsx("div",{className:"flex w-full justify-center",children:a.jsxs("div",{className:`relative h-32 w-32 ${b?"cursor-pointer":""} overflow-hidden rounded-full`,children:[a.jsx("img",{src:!Ae&&ue&&ut?ut:$e||null,className:"h-full",alt:"Profile Picture",onMouseEnter:()=>pt(!0),onMouseLeave:()=>pt(!1),onClick:()=>{b&&Re(!0)}}),ue&&zn&&a.jsx("div",{className:"pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60",children:a.jsx(W,{color:"#fff",size:24})}),b&&zt&&a.jsx("div",{className:"pointer-events-none absolute bottom-0 flex h-[35%] w-full items-center justify-center rounded-b-full bg-black opacity-60",children:a.jsx("img",{src:bu,className:"h-6 w-6"})})]})}),mt&&q&&a.jsx("div",{className:"text-success tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:a.jsx("p",{children:L})}),mt&&!q&&a.jsx("div",{className:"text-error tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:a.jsx("p",{children:L})}),vt&&ai?a.jsx("div",{className:"text-success tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:a.jsx("p",{children:vt})}):vt&&a.jsx("div",{className:"text-error tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center",children:a.jsx("p",{children:vt})}),a.jsxs("div",{className:"flex w-full flex-col gap-2",children:[a.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Name:"}),a.jsxs("div",{onClick:()=>{b&&ye(!0)},className:`fullNameEditable ${M?"active":""} flex items-center justify-between border-b-1 dark:border-gray-700`,children:[a.jsx("input",{ref:Wt,type:"text",onChange:A=>m(A.target.value),value:h,className:`${b?"cursor-text":"cursor-default"} outline-none`,readOnly:!M,onBlur:()=>ye(!1)}),b&&!M&&a.jsx("img",{src:xt,className:"mr-3 h-3 w-3"})]})]}),a.jsxs("div",{className:"flex w-full flex-col gap-2",children:[a.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Username:"}),a.jsxs("div",{onClick:()=>{b&&Vt(!0)},className:`usernameEditable ${We?"active border-b-1":""} relative flex items-center justify-between border-b-1 dark:border-gray-700`,children:[a.jsx("input",{ref:Ht,name:"username",autoComplete:"off",type:"text",onFocus:()=>R(!0),onChange:A=>I(A.target.value),onBlur:()=>pi(),value:y,readOnly:!We,onKeyDown:A=>{A.key===" "&&A.preventDefault()},maxLength:15,className:`${b?"cursor-text":"cursor-default"} outline-none`}),b&&!We&&!q&&a.jsx("img",{src:xt,className:"mr-3 h-3 w-3"}),V&&a.jsx(W,{color:"hsl(220, 90%, 56%)",size:15,className:"mr-3"}),q&&a.jsx("img",{src:zr,className:"mr-3 h-[15px] w-[15px]"})]}),b&&k&&!N&&!C&&!oi&&!ci&&a.jsx("div",{className:`${e>=768?"absolute":""} desktop:right-[-320px] right-[-230px] bottom-0`,children:a.jsx("p",{className:"text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]",children:"Username must be at least 3 characters long, start with a lowercase letter or underscore(_), include at least one number, use only lowercase letters, numbers, dots(.), or underscores(_), and not end with a dot(.)."})})]}),a.jsxs("div",{className:"flex w-full flex-col gap-2",children:[a.jsx("label",{className:"app-text-small font-bold dark:text-white",children:"Email:"}),a.jsx("input",{type:"text",value:ne,className:"border-b-1 outline-none dark:border-gray-700",disabled:!0})]}),!b&&a.jsxs("div",{onClick:()=>fi(),className:"absolute top-0 cursor-pointer rounded-[100px] p-[2px]",style:{background:"var(--color-gradient-button)",right:e<375?"-10px":e>768?"-100px":"-30px"},children:[" ",e>=768?a.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-2 pt-3 pb-2 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:["Edit Profile",a.jsx("img",{src:s==="dark"?xt:Lr,className:"h-3 w-3",alt:""})]}):a.jsxs("button",{className:"flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-3 pt-2 pb-1 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",children:["Edit",a.jsx("img",{src:s==="dark"?xt:Lr,className:"h-2 w-2",alt:""})]})]})]}),b?a.jsxs("div",{className:"mt-10 flex w-full items-center justify-between gap-4 dark:text-black",children:[a.jsx("button",{className:"cancel-button-gradient flex-1 cursor-pointer rounded-[5px] py-3",onClick:()=>{gi()},children:"Cancel"}),a.jsx("button",{className:`save-button-gradient tablet:max-h-[42px] flex max-h-[38px] flex-1 cursor-pointer items-center justify-center rounded-[5px] py-3 ${mt&&(!S||y&&q)&&(!g||h)?"":"opacity-20"}`,onClick:()=>{K(!0),setTimeout(()=>{mi()},1e3)},children:zn?a.jsx(W,{color:"#fff",size:22}):"Save Changes"})]}):a.jsxs("div",{className:"w-full",children:[a.jsxs("button",{onClick:A=>{A.stopPropagation(),o(!0),setTimeout(()=>{Ei(n,t),o(!1)},1e3)},className:"signOut-button-gradient mt-10 flex max-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-4 font-bold dark:text-black",children:[i?a.jsx(W,{color:"#fff",size:24}):"Sign Out",!i&&a.jsx("img",{src:Si,className:"hover-cursor-pointer h-5 w-5"})]}),a.jsxs("button",{onClick:()=>{Wn(!0)},className:"deleteAccount-button-gradient mt-4 flex max-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-3.5 font-bold dark:text-black",children:[a.jsx("img",{src:ii,className:"hover-cursor-pointer mb-1 h-5 w-5"}),"Delete Account"]})]})]}),Ae&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:a.jsx(mu,{setIsProfilePictureUploadMenu:Re,profileImage:$e,onImageChange:di})}),li&&a.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:a.jsx(yu,{setDeleteConfirmation:Wn})})]})},_u=()=>{const n=Pe();return a.jsxs("div",{className:"app-text-medium flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-700 dark:bg-black dark:text-gray-400",style:{fontFamily:"var(--font-josefinSans)"},children:[a.jsx("h1",{className:"app-text-large-tight text-gradient-heading mb-4 font-bold",children:"404"}),a.jsx("p",{className:"text-18 mb-6 leading-20",children:"Oops! The page you’re looking for doesn’t exist."}),a.jsx("button",{onClick:()=>n("/all",{replace:!0}),className:"button-gradient cursor-pointer rounded-[5px] px-6 py-3 font-bold text-black hover:opacity-90",children:"Go to Home page"})]})},Eu=({})=>a.jsxs(_i,{children:[a.jsx(J,{path:"/",element:a.jsx(Ii,{to:"/all",replace:!0})}),a.jsx(J,{path:"/sign-up",element:a.jsx(Ti,{})}),a.jsx(J,{path:"/sign-in",element:a.jsx(Ld,{})}),a.jsx(J,{path:"/forget-password",element:a.jsx(Ud,{})}),a.jsx(J,{path:"/reset-password",element:a.jsx(Fd,{})}),a.jsx(J,{path:"/all",element:a.jsx(nn,{})}),a.jsx(J,{path:"/active",element:a.jsx(nn,{})}),a.jsx(J,{path:"/completed",element:a.jsx(nn,{})}),a.jsx(J,{path:"/profile",element:a.jsx(xu,{})}),a.jsx(J,{path:"*",element:a.jsx(_u,{})})]});export{Eu as default};
