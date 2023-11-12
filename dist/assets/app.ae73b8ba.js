const fg=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};fg();/**
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
 */const th={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const H=function(t,e){if(!t)throw qr(e)},qr=function(t){return new Error("Firebase Database ("+th.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new hg;const h=i<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const _=c<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rh=function(t){const e=nh(t);return Cl.encodeByteArray(e,!0)},Ui=function(t){return rh(t).replace(/\./g,"")},zi=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pg(t){return sh(void 0,t)}function sh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_g(n)||(t[n]=sh(t[n],e[n]));return t}function _g(t){return t!=="__proto__"}/**
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
 */function mg(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gg=()=>mg().__FIREBASE_DEFAULTS__,yg=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vg=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zi(t[1]);return e&&JSON.parse(e)},Tl=()=>{try{return gg()||yg()||vg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ih=t=>{var e,n;return(n=(e=Tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eg=t=>{const e=ih(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oh=()=>{var t;return(t=Tl())===null||t===void 0?void 0:t.config},ah=t=>{var e;return(e=Tl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ui(JSON.stringify(n)),Ui(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function Ig(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cg(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ch(){return th.NODE_ADMIN===!0}function Tg(){try{return typeof indexedDB=="object"}catch{return!1}}function wg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sg="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sg,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Rg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,a,r)}}function Rg(t,e){return t.replace(Ng,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ng=/\{\$([^}]+)}/g;/**
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
 */function ks(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
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
 */const uh=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=ks(zi(i[0])||""),n=ks(zi(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Ag=function(t){const e=uh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Og=function(t){const e=uh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Na(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eu(i)&&eu(o)){if(!Hi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eu(t){return t!==null&&typeof t=="object"}/**
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
 */function Yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class kg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):f<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Pg(t,e){const n=new Lg(t,e);return n.subscribe.bind(n)}class Lg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zo),s.error===void 0&&(s.error=Zo),s.complete===void 0&&(s.complete=Zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zo(){}function Sl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,H(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wn="[DEFAULT]";/**
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
 */class Mg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ug(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fg(t){return t===Wn?void 0:t}function Ug(t){return t.instantiationMode==="EAGER"}/**
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
 */class zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Wg={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Hg=Ee.INFO,Vg={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},$g=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Bg=(t,e)=>e.some(n=>t instanceof n);let tu,nu;function jg(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kg(){return nu||(nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,Aa=new WeakMap,dh=new WeakMap,ea=new WeakMap,Nl=new WeakMap;function Gg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(In(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fh.set(n,t)}).catch(()=>{}),Nl.set(e,t),e}function qg(t){if(Aa.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Aa.set(t,e)}let Oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Aa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yg(t){Oa=t(Oa)}function Xg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ta(this),e,...n);return dh.set(r,e.sort?e.sort():[e]),In(r)}:Kg().includes(t)?function(...e){return t.apply(ta(this),e),In(fh.get(this))}:function(...e){return In(t.apply(ta(this),e))}}function Qg(t){return typeof t=="function"?Xg(t):(t instanceof IDBTransaction&&qg(t),Bg(t,jg())?new Proxy(t,Oa):t)}function In(t){if(t instanceof IDBRequest)return Gg(t);if(ea.has(t))return ea.get(t);const e=Qg(t);return e!==t&&(ea.set(t,e),Nl.set(e,t)),e}const ta=t=>Nl.get(t);function Jg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=In(o);return r&&o.addEventListener("upgradeneeded",l=>{r(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Zg=["get","getKey","getAll","getAllKeys","count"],ey=["put","add","delete","clear"],na=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ey.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return na.set(e,i),i}Yg(t=>({...t,get:(e,n,r)=>ru(e,n)||t.get(e,n,r),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));/**
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
 */class ty{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ny(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ny(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",su="0.9.13";/**
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
 */const rr=new Rl("@firebase/app"),ry="@firebase/app-compat",sy="@firebase/analytics-compat",iy="@firebase/analytics",oy="@firebase/app-check-compat",ay="@firebase/app-check",ly="@firebase/auth",cy="@firebase/auth-compat",uy="@firebase/database",fy="@firebase/database-compat",dy="@firebase/functions",hy="@firebase/functions-compat",py="@firebase/installations",_y="@firebase/installations-compat",my="@firebase/messaging",gy="@firebase/messaging-compat",yy="@firebase/performance",vy="@firebase/performance-compat",Ey="@firebase/remote-config",by="@firebase/remote-config-compat",Iy="@firebase/storage",Cy="@firebase/storage-compat",Ty="@firebase/firestore",wy="@firebase/firestore-compat",Sy="firebase",Ry="9.23.0";/**
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
 */const Pa="[DEFAULT]",Ny={[ka]:"fire-core",[ry]:"fire-core-compat",[iy]:"fire-analytics",[sy]:"fire-analytics-compat",[ay]:"fire-app-check",[oy]:"fire-app-check-compat",[ly]:"fire-auth",[cy]:"fire-auth-compat",[uy]:"fire-rtdb",[fy]:"fire-rtdb-compat",[dy]:"fire-fn",[hy]:"fire-fn-compat",[py]:"fire-iid",[_y]:"fire-iid-compat",[my]:"fire-fcm",[gy]:"fire-fcm-compat",[yy]:"fire-perf",[vy]:"fire-perf-compat",[Ey]:"fire-rc",[by]:"fire-rc-compat",[Iy]:"fire-gcs",[Cy]:"fire-gcs-compat",[Ty]:"fire-fst",[wy]:"fire-fst-compat","fire-js":"fire-js",[Sy]:"fire-js-all"};/**
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
 */const Vi=new Map,La=new Map;function Ay(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(La.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,t);for(const n of Vi.values())Ay(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Oy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Zs("app","Firebase",Oy);/**
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
 */class ky{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Xr=Ry;function hh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(n||(n=oh()),!n)throw Cn.create("no-options");const i=Vi.get(s);if(i){if(Hi(n,i.options)&&Hi(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new zg(s);for(const l of La.values())o.addComponent(l);const a=new ky(n,r,o);return Vi.set(s,a),a}function ph(t=Pa){const e=Vi.get(t);if(!e&&t===Pa&&oh())return hh();if(!e)throw Cn.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=Ny[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}xr(new nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",Ly=1,Ps="firebase-heartbeat-store";let ra=null;function _h(){return ra||(ra=Jg(Py,Ly,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),ra}async function Dy(t){try{return await(await _h()).transaction(Ps).objectStore(Ps).get(mh(t))}catch(e){if(e instanceof Dn)rr.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function iu(t,e){try{const r=(await _h()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(e,mh(t)),await r.done}catch(n){if(n instanceof Dn)rr.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function mh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xy=1024,My=30*24*60*60*1e3;class Fy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ou();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=My}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ou(),{heartbeatsToSend:n,unsentEntries:r}=Uy(this._heartbeatsCache.heartbeats),s=Ui(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ou(){return new Date().toISOString().substring(0,10)}function Uy(t,e=xy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),au(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),au(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tg()?wg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function au(t){return Ui(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wy(t){xr(new nr("platform-logger",e=>new ty(e),"PRIVATE")),xr(new nr("heartbeat",e=>new Fy(e),"PRIVATE")),Tn(ka,su,t),Tn(ka,su,"esm2017"),Tn("fire-js","")}Wy("");var Hy="firebase",Vy="9.23.0";/**
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
 */Tn(Hy,Vy,"app");const lu="@firebase/database",cu="0.14.4";/**
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
 */let gh="";function $y(t){gh=t}/**
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
 */class By{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class jy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yh=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new By(e)}}catch{}return new jy},Kn=yh("localStorage"),Da=yh("sessionStorage");/**
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
 */const Ir=new Rl("@firebase/database"),Ky=function(){let t=1;return function(){return t++}}(),vh=function(t){const e=xg(t),n=new kg;n.update(e);const r=n.digest();return Cl.encodeByteArray(r)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ei.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let Xn=null,uu=!0;const Gy=function(t,e){H(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ir.logLevel=Ee.VERBOSE,Xn=Ir.log.bind(Ir),e&&Da.set("logging_enabled",!0)):typeof t=="function"?Xn=t:(Xn=null,Da.remove("logging_enabled"))},Ye=function(...t){if(uu===!0&&(uu=!1,Xn===null&&Da.get("logging_enabled")===!0&&Gy(!0)),Xn){const e=ei.apply(null,t);Xn(e)}},ti=function(t){return function(...e){Ye(t,...e)}},xa=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);Ir.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw Ir.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+ei(...t);Ir.warn(e)},qy=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mr="[MIN_NAME]",sr="[MAX_NAME]",Qr=function(t,e){if(t===e)return 0;if(t===Mr||e===sr)return-1;if(e===Mr||t===sr)return 1;{const n=fu(t),r=fu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xy=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Ol=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=Ol(t[e[r]]);return n+="}",n},bh=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ih=function(t){H(!Eh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},Qy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Jy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Zy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ev=new RegExp("^-?(0*)\\d{1,10}$"),tv=-2147483648,nv=2147483647,fu=function(t){if(ev.test(t)){const e=Number(t);if(e>=tv&&e<=nv)return e}return null},Jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},rv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ys=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iv{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class Cr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cr.OWNER="owner";/**
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
 */const kl="5",Ch="v",Th="s",wh="r",Sh="f",Rh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nh="ls",Ah="p",Ma="ac",Oh="websocket",kh="long_polling";/**
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
 */class Ph{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ov(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lh(t,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(e===Oh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ov(t)&&(n.ns=t.namespace);const s=[];return ct(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class av{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pg(this.counters_)}}/**
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
 */const sa={},ia={};function Pl(t){const e=t.toString();return sa[e]||(sa[e]=new av),sa[e]}function lv(t,e){const n=t.toString();return ia[n]||(ia[n]=e()),ia[n]}/**
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
 */class cv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Jr(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const du="start",uv="close",fv="pLPCommand",dv="pRTLPCB",Dh="id",xh="pw",Mh="ser",hv="cb",pv="seg",_v="ts",mv="d",gv="dframe",Fh=1870,Uh=30,yv=Fh-Uh,vv=25e3,Ev=3e4;class vr{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Pl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ma]=this.appCheckToken),Lh(n,kh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ev)),Yy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ll((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===du)this.id=a,this.password=l;else if(o===uv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[du]="t",r[Mh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hv]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ch]=kl,this.transportSessionId&&(r[Th]=this.transportSessionId),this.lastSessionId&&(r[Nh]=this.lastSessionId),this.applicationId&&(r[Ah]=this.applicationId),this.appCheckToken&&(r[Ma]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Rh.test(location.hostname)&&(r[wh]=Sh);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Qy()&&!Jy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rh(n),s=bh(r,yv);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gv]="t",r[Dh]=e,r[xh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ll{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ky(),window[fv+this.uniqueCallbackIdentifier]=e,window[dv+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ll.createIFrame_();let i="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;i='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dh]=this.myID,e[xh]=this.myPW,e[Mh]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uh+r.length<=Fh;){const o=this.pendingSegs.shift();r=r+"&"+pv+s+"="+o.seg+"&"+_v+s+"="+o.ts+"&"+mv+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(vv)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bv=16384,Iv=45e3;let $i=null;typeof MozWebSocket!="undefined"?$i=MozWebSocket:typeof WebSocket!="undefined"&&($i=WebSocket);class wt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Pl(n),this.connURL=wt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Ch]=kl,typeof location!="undefined"&&location.hostname&&Rh.test(location.hostname)&&(o[wh]=Sh),n&&(o[Th]=n),r&&(o[Nh]=r),s&&(o[Ma]=s),i&&(o[Ah]=i),Lh(e,Oh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let r;ch(),this.mySock=new $i(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$i!==null&&!wt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ks(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bh(n,bv);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Iv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
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
 */class Ls{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const s=this.transports_=[];for(const i of Ls.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ls.globalTransportInitialized_=!1;/**
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
 */const Cv=6e4,Tv=5e3,wv=10*1024,Sv=100*1024,oa="t",hu="d",Rv="s",pu="r",Nv="e",_u="o",mu="a",gu="n",yu="p",Av="h";class Ov{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new Ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ys(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Sv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oa in e){const n=e[oa];n===mu?this.upgradeIfSecondaryHealthy_():n===pu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_u&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),r=os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),r=os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(oa,e);if(hu in e){const r=e[hu];if(n===Av){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===gu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Rv?this.onConnectionShutdown_(r):n===pu?this.onReset_(r):n===Nv?xa("Server Error: "+r):n===_u?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),kl!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ys(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Cv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ys(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zh{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Wh{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Bi extends Wh{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!wl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bi}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vu=32,Eu=768;class be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new be("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new be(t.pieces_,e)}function Hh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $h(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new be(e,0)}function xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof be)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new be(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return ot(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dl(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Pv{constructor(e,n){this.errorPrefix_=n,this.parts_=Vh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bo(this.parts_[r]);Bh(this)}}function Lv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bo(e),Bh(t)}function Dv(t){const e=t.parts_.pop();t.byteLength_-=bo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bh(t){if(t.byteLength_>Eu)throw new Error(t.errorPrefix_+"has a key path longer than "+Eu+" bytes ("+t.byteLength_+").");if(t.parts_.length>vu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vu+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class xl extends Wh{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xl}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const as=1e3,xv=60*5*1e3,bu=30*1e3,Mv=1.3,Fv=3e4,Uv="server_kill",Iu=3;class qt extends zh{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=as,this.maxReconnectDelay_=xv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ch())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Be(i)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Eo,r={p:e._path.toString(),q:e._queryObject},s={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const r=Dr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Og(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ag(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xa("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Fv&&(this.reconnectDelay_=as),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new Ov(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{lt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Uv)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&lt(f),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Na(this.interruptReasons_)&&(this.reconnectDelay_=as,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Ol(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new be(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Iu&&(this.reconnectDelay_=bu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Iu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gh.replace(/\./g,"-")]=1,wl()?e["framework.cordova"]=1:lh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bi.getInstance().currentlyOnline();return Na(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
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
 */class Io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(Mr,e),s=new ae(Mr,n);return this.compare(r,s)!==0}minPost(){return ae.MIN}}/**
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
 */let _i;class jh extends Io{static get __EMPTY_NODE(){return _i}static set __EMPTY_NODE(e){_i=e}compare(e,n){return Qr(e.name,n.name)}isDefinedOn(e){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(sr,_i)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,_i)}toString(){return".key"}}const Tr=new jh;/**
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
 */class mi{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:$e.RED,this.left=s!=null?s:at.EMPTY_NODE,this.right=i!=null?i:at.EMPTY_NODE}copy(e,n,r,s,i){return new $e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return at.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class zv{copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,n=at.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new at(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mi(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new zv;/**
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
 */function Wv(t,e){return Qr(t.name,e.name)}function Ml(t,e){return Qr(t,e)}/**
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
 */let Fa;function Hv(t){Fa=t}const Kh=function(t){return typeof t=="number"?"number:"+Ih(t):"string:"+t},Gh=function(t){if(t.isLeafNode()){const e=t.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else H(t===Fa||t.isEmpty(),"priority of unexpected type.");H(t===Fa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cu;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gh(this.priorityNode_)}static set __childrenNodeConstructor(e){Cu=e}static get __childrenNodeConstructor(){return Cu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:oe(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ih(this.value_):e+=this.value_,this.lazyHash_=vh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ve.VALUE_TYPE_ORDER.indexOf(n),i=Ve.VALUE_TYPE_ORDER.indexOf(r);return H(s>=0,"Unknown leaf type: "+n),H(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qh,Yh;function Vv(t){qh=t}function $v(t){Yh=t}class Bv extends Io{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Qr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(sr,new Ve("[PRIORITY-POST]",Yh))}makePost(e,n){const r=qh(e);return new ae(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ae=new Bv;/**
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
 */const jv=Math.log(2);class Kv{constructor(e){const n=i=>parseInt(Math.log(i)/jv,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ji=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new $e(h,f.node,$e.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=s(l,g),I=s(g+1,c);return f=t[g],h=n?n(f):f,new $e(h,f.node,$e.BLACK,_,I)}},i=function(l){let c=null,u=null,f=t.length;const h=function(_,I){const T=f-_,v=f;f-=_;const C=s(T+1,v),b=t[T],m=n?n(b):b;g(new $e(m,b.node,I,null,C))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const I=l.nextBitIsOne(),T=Math.pow(2,l.count-(_+1));I?h(T,$e.BLACK):(h(T,$e.BLACK),h(T,$e.RED))}return u},o=new Kv(t.length),a=i(o);return new at(r||e,a)};/**
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
 */let aa;const hr={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return H(hr&&Ae,"ChildrenNode.ts has not been loaded"),aa=aa||new jt({".priority":hr},{".priority":Ae}),aa}get(e){const n=Dr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof at?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){H(e!==Tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ji(r,e.getCompare()):a=hr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jt(u,c)}addToIndexes(e,n){const r=Wi(this.indexes_,(s,i)=>{const o=Dr(this.indexSet_,i);if(H(o,"Missing index implementation for "+i),s===hr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ji(a,o.getCompare())}else return hr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wi(this.indexes_,s=>{if(s===hr)return s;{const i=n.get(e.name);return i?s.remove(new ae(e.name,i)):s}});return new jt(r,this.indexSet_)}}/**
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
 */let ls;class ne{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Gh(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ls||(ls=new ne(new at(Ml),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ls}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ls:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ls:this.priorityNode_;return new ne(s,o,i)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{H(oe(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),r++,i&&ne.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kh(this.getPriority().val())+":"),this.forEachChild(Ae,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ni?-1:0}withIndex(e){if(e===Tr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Tr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ae),s=n.getIterator(Ae);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tr?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gv extends ne{constructor(){super(new at(Ml),ne.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const ni=new Gv;Object.defineProperties(ae,{MIN:{value:new ae(Mr,ne.EMPTY_NODE)},MAX:{value:new ae(sr,ni)}});jh.__EMPTY_NODE=ne.EMPTY_NODE;Ve.__childrenNodeConstructor=ne;Hv(ni);$v(ni);/**
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
 */const qv=!0;function Ge(t,e=null){if(t===null)return ne.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,Ge(e))}if(!(t instanceof Array)&&qv){const n=[];let r=!1;if(ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ge(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return ne.EMPTY_NODE;const i=ji(n,Wv,o=>o.name,Ml);if(r){const o=ji(n,Ae.getCompare());return new ne(i,Ge(e),new jt({".priority":o},{".priority":Ae}))}else return new ne(i,Ge(e),jt.Default)}else{let n=ne.EMPTY_NODE;return ct(t,(r,s)=>{if(Zt(t,r)&&r.substring(0,1)!=="."){const i=Ge(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ge(e))}}Vv(Ge);/**
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
 */class Yv extends Io{constructor(e){super(),this.indexPath_=e,H(!le(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Qr(e.name,n.name):i}makePost(e,n){const r=Ge(e),s=ne.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,s)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,ni);return new ae(sr,e)}toString(){return Vh(this.indexPath_,0).join("/")}}/**
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
 */class Xv extends Io{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Qr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=Ge(e);return new ae(n,r)}toString(){return".value"}}const Qv=new Xv;/**
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
 */function Xh(t){return{type:"value",snapshotNode:t}}function Fr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Jv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fl{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ds(n,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fr(n,r)):o.trackChildChange(xs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ae,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ds(s,i))}),n.isLeafNode()||n.forEachChild(Ae,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(xs(s,i,o))}else r.trackChildChange(Fr(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ms{constructor(e){this.indexedFilter_=new Fl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ms.getStartPost_(e),this.endPost_=Ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ae(n,r))||(r=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ne.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(ne.EMPTY_NODE);const i=this;return n.forEachChild(Ae,(o,a)=>{i.matches(new ae(o,a))||(s=s.updateImmediateChild(o,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Zv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ae(n,r))||(r=ne.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=ne.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(ne.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,g)=>f(g,h)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const l=new ae(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(u&&!r.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(xs(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ds(n,f));const I=a.updateImmediateChild(n,ne.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(Fr(h.name,h.node)),I.updateImmediateChild(h.name,h.node)):I}}else return r.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Ds(c.name,c.node)),i.trackChildChange(Fr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ne.EMPTY_NODE)):e}}/**
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
 */class Ul{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mr}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new Ul;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eE(t){return t.loadsAllData()?new Fl(t.getIndex()):t.hasLimit()?new Zv(t):new Ms(t)}function Tu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===Qv?n="$value":t.index_===Tr?n="$key":(H(t.index_ instanceof Yv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
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
 */class Ki extends zh{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ki.getListenId_(e,r),a={};this.listens_[o]=a;const l=Tu(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),Dr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const r=Ki.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tu(e._queryParams),r=e._path.toString(),s=new Eo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ks(a.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class tE{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gi(){return{value:null,children:new Map}}function Qh(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Gi());const s=t.children.get(r);e=Ce(e),Qh(s,e,n)}}function Ua(t,e,n){t.value!==null?n(e,t.value):nE(t,(r,s)=>{const i=new be(e.toString()+"/"+r);Ua(s,i,n)})}function nE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class rE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ct(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Su=10*1e3,sE=30*1e3,iE=5*60*1e3;class oE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rE(e);const r=Su+(sE-Su)*Math.random();ys(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ct(e,(s,i)=>{i>0&&Zt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ys(this.reportStats_.bind(this),Math.floor(Math.random()*2*iE))}}/**
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
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function Jh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class qi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=Jh()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new be(e));return new qi(_e(),n,this.revert)}}else return H(oe(this.path)===e,"operationForChild called for unrelated child."),new qi(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fs{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Fs(this.source,_e()):new Fs(this.source,Ce(this.path))}}/**
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
 */class ir{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(e){return le(this.path)?new ir(this.source,_e(),this.snap.getImmediateChild(e)):new ir(this.source,Ce(this.path),this.snap)}}/**
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
 */class Us{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new be(e));return n.isEmpty()?null:n.value?new ir(this.source,_e(),n.value):new Us(this.source,_e(),n)}else return H(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class or{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class aE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Jv(o.childName,o.snapshotNode))}),cs(t,s,"child_removed",e,r,n),cs(t,s,"child_added",e,r,n),cs(t,s,"child_moved",i,r,n),cs(t,s,"child_changed",e,r,n),cs(t,s,"value",e,r,n),s}function cs(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>uE(t,a,l)),o.forEach(a=>{const l=cE(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function cE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function uE(t,e,n){if(e.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),s=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Co(t,e){return{eventCache:t,serverCache:e}}function vs(t,e,n,r){return Co(new or(e,n,r),t.serverCache)}function Zh(t,e,n,r){return Co(t.eventCache,new or(e,n,r))}function za(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let la;const fE=()=>(la||(la=new at(Xy)),la);class we{constructor(e,n=fE()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return ct(e,(r,s)=>{n=n.set(new be(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(le(e))return null;{const r=oe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ce(e),n);return i!=null?{path:xe(new be(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new we(null)}}set(e,n){if(le(e))return new we(n,this.children);{const r=oe(e),i=(this.children.get(r)||new we(null)).set(Ce(e),n),o=this.children.insert(r,i);return new we(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const s=r.remove(Ce(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new we(null):new we(this.value,i)}else return this}}get(e){if(le(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(le(e))return n;{const r=oe(e),i=(this.children.get(r)||new we(null)).setTree(Ce(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new we(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(le(e))return null;{const i=oe(e),o=this.children.get(i);return o?o.findOnPath_(Ce(e),xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const s=oe(e),i=this.children.get(s);return i?i.foreachOnPath_(Ce(e),xe(n,s),r):new we(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new we(null))}}function Es(t,e,n){if(le(e))return new Ot(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=ot(s,e);return i=i.updateChild(o,n),new Ot(t.writeTree_.set(s,i))}else{const s=new we(n),i=t.writeTree_.setTree(e,s);return new Ot(i)}}}function Ru(t,e,n){let r=t;return ct(n,(s,i)=>{r=Es(r,xe(e,s),i)}),r}function Nu(t,e){if(le(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Ot(n)}}function Wa(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Au(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(r,s)=>{e.push(new ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ae(r,s.value))}),e}function wn(t,e){if(le(e))return t;{const n=fr(t,e);return n!=null?new Ot(new we(n)):new Ot(t.writeTree_.subtree(e))}}function Ha(t){return t.writeTree_.isEmpty()}function Ur(t,e){return ep(_e(),t.writeTree_,e)}function ep(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(H(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=ep(xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xe(t,".priority"),r)),n}}/**
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
 */function Hl(t,e){return sp(e,t)}function dE(t,e,n,r,s){H(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=r}function hE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function pE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_E(a,r.path)?s=!1:Rt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return mE(t),!0;if(r.snap)t.visibleWrites=Nu(t.visibleWrites,r.path);else{const a=r.children;ct(a,l=>{t.visibleWrites=Nu(t.visibleWrites,xe(r.path,l))})}return!0}else return!1}function _E(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(xe(t.path,n),e))return!0;return!1}function mE(t){t.visibleWrites=tp(t.allWrites,gE,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gE(t){return t.visible}function tp(t,e,n){let r=Ot.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Rt(n,o)?(a=ot(n,o),r=Es(r,a,i.snap)):Rt(o,n)&&(a=ot(o,n),r=Es(r,_e(),i.snap.getChild(a)));else if(i.children){if(Rt(n,o))a=ot(n,o),r=Ru(r,a,i.children);else if(Rt(o,n))if(a=ot(o,n),le(a))r=Ru(r,_e(),i.children);else{const l=Dr(i.children,oe(a));if(l){const c=l.getChild(Ce(a));r=Es(r,_e(),c)}}}else throw qr("WriteRecord should have .snap or .children")}}return r}function np(t,e,n,r,s){if(!r&&!s){const i=fr(t.visibleWrites,e);if(i!=null)return i;{const o=wn(t.visibleWrites,e);if(Ha(o))return n;if(n==null&&!Wa(o,_e()))return null;{const a=n||ne.EMPTY_NODE;return Ur(o,a)}}}else{const i=wn(t.visibleWrites,e);if(!s&&Ha(i))return n;if(!s&&n==null&&!Wa(i,_e()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Rt(c.path,e)||Rt(e,c.path))},a=tp(t.allWrites,o,e),l=n||ne.EMPTY_NODE;return Ur(a,l)}}}function yE(t,e,n){let r=ne.EMPTY_NODE;const s=fr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ae,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=wn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=Ur(wn(i,new be(o)),a);r=r.updateImmediateChild(o,l)}),Au(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=wn(t.visibleWrites,e);return Au(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function vE(t,e,n,r,s){H(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=xe(e,n);if(Wa(t.visibleWrites,i))return null;{const o=wn(t.visibleWrites,i);return Ha(o)?s.getChild(n):Ur(o,s.getChild(n))}}function EE(t,e,n,r){const s=xe(e,n),i=fr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=wn(t.visibleWrites,s);return Ur(o,r.getNode().getImmediateChild(n))}else return null}function bE(t,e){return fr(t.visibleWrites,e)}function IE(t,e,n,r,s,i,o){let a;const l=wn(t.visibleWrites,e),c=fr(l,_e());if(c!=null)a=c;else if(n!=null)a=Ur(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&u.length<s;)f(g,r)!==0&&u.push(g),g=h.getNext();return u}else return[]}function CE(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Yi(t,e,n,r){return np(t.writeTree,t.treePath,e,n,r)}function Vl(t,e){return yE(t.writeTree,t.treePath,e)}function Ou(t,e,n,r){return vE(t.writeTree,t.treePath,e,n,r)}function Xi(t,e){return bE(t.writeTree,xe(t.treePath,e))}function TE(t,e,n,r,s,i){return IE(t.writeTree,t.treePath,e,n,r,s,i)}function $l(t,e,n){return EE(t.writeTree,t.treePath,e,n)}function rp(t,e){return sp(xe(t.treePath,e),t.writeTree)}function sp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class wE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,xs(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ds(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Fr(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,xs(r,e.snapshotNode,s.oldSnap));else throw qr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ip=new SE;class Bl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $l(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ar(this.viewCache_),i=TE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function RE(t){return{filter:t}}function NE(t,e){H(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AE(t,e,n,r,s){const i=new wE;let o,a;if(n.type===Nt.OVERWRITE){const c=n;c.source.fromUser?o=Va(t,e,c.path,c.snap,r,s,i):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Qi(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Nt.MERGE){const c=n;c.source.fromUser?o=kE(t,e,c.path,c.children,r,s,i):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$a(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Nt.ACK_USER_WRITE){const c=n;c.revert?o=DE(t,e,c.path,r,s,i):o=PE(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Nt.LISTEN_COMPLETE)o=LE(t,e,n.path,r,i);else throw qr("Unknown operation type: "+n.type);const l=i.getChanges();return OE(e,o,l),{viewCache:o,changes:l}}function OE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=za(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Xh(za(e)))}}function op(t,e,n,r,s,i){const o=e.eventCache;if(Xi(r,n)!=null)return e;{let a,l;if(le(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ar(e),u=c instanceof ne?c:ne.EMPTY_NODE,f=Vl(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Yi(r,ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=oe(n);if(c===".priority"){H(On(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Ou(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=Ce(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ou(r,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=$l(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,s,i):a=o.getNode()}}return vs(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Qi(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),g,null)}else{const g=oe(n);if(!l.isCompleteForPath(n)&&On(n)>1)return e;const _=Ce(n),T=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),g,T,_,ip,null)}const f=Zh(e,c,l.isFullyInitialized()||le(n),u.filtersNodes()),h=new Bl(s,f,i);return op(t,f,n,s,h,a)}function Va(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Bl(s,e,i);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vs(e,c,!0,t.filter.filtersNodes());else{const f=oe(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=vs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ce(n),g=a.getNode().getImmediateChild(f);let _;if(le(h))_=r;else{const I=u.getCompleteChild(f);I!=null?Hh(h)===".priority"&&I.getChild($h(h)).isEmpty()?_=I:_=I.updateChild(h,r):_=ne.EMPTY_NODE}if(g.equals(_))l=e;else{const I=t.filter.updateChild(a.getNode(),f,_,h,u,o);l=vs(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ku(t,e){return t.eventCache.isCompleteForChild(e)}function kE(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=xe(n,l);ku(e,oe(u))&&(a=Va(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=xe(n,l);ku(e,oe(u))||(a=Va(t,a,u,c,s,i,o))}),a}function Pu(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function $a(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;le(n)?c=r:c=new we(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=Pu(t,g,h);l=Qi(t,l,new be(f),_,s,i,o,a)}}),c.children.inorderTraversal((f,h)=>{const g=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),I=Pu(t,_,h);l=Qi(t,l,new be(f),I,s,i,o,a)}}),l}function PE(t,e,n,r,s,i,o){if(Xi(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Qi(t,e,n,l.getNode().getChild(n),s,i,a,o);if(le(n)){let c=new we(null);return l.getNode().forEachChild(Tr,(u,f)=>{c=c.set(new be(u),f)}),$a(t,e,n,c,s,i,a,o)}else return e}else{let c=new we(null);return r.foreach((u,f)=>{const h=xe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),$a(t,e,n,c,s,i,a,o)}}function LE(t,e,n,r,s){const i=e.serverCache,o=Zh(e,i.getNode(),i.isFullyInitialized()||le(n),i.isFiltered());return op(t,o,n,r,ip,s)}function DE(t,e,n,r,s,i){let o;if(Xi(r,n)!=null)return e;{const a=new Bl(r,e,s),l=e.eventCache.getNode();let c;if(le(n)||oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yi(r,ar(e));else{const f=e.serverCache.getNode();H(f instanceof ne,"serverChildren would be complete if leaf node"),u=Vl(r,f)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=oe(n);let f=$l(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,Ce(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ne.EMPTY_NODE,Ce(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yi(r,ar(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Xi(r,_e())!=null,vs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class xE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Fl(r.getIndex()),i=eE(r);this.processor_=RE(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(ne.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(ne.EMPTY_NODE,a.getNode(),null),u=new or(l,o.isFullyInitialized(),s.filtersNodes()),f=new or(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Co(f,u),this.eventGenerator_=new aE(this.query_)}get query(){return this.query_}}function ME(t){return t.viewCache_.serverCache.getNode()}function FE(t,e){const n=ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function Lu(t){return t.eventRegistrations_.length===0}function UE(t,e){t.eventRegistrations_.push(e)}function Du(t,e,n){const r=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function xu(t,e,n,r){e.type===Nt.MERGE&&e.source.queryId!==null&&(H(ar(t.viewCache_),"We should always have a full cache before handling merges"),H(za(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=AE(t.processor_,s,e,n,r);return NE(t.processor_,i.viewCache),H(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ap(t,i.changes,i.viewCache.eventCache.getNode(),null)}function zE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(i,o)=>{r.push(Fr(i,o))}),n.isFullyInitialized()&&r.push(Xh(n.getNode())),ap(t,r,n.getNode(),e)}function ap(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return lE(t.eventGenerator_,e,n,s)}/**
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
 */let Ji;class WE{constructor(){this.views=new Map}}function HE(t){H(!Ji,"__referenceConstructor has already been defined"),Ji=t}function VE(){return H(Ji,"Reference.ts has not been loaded"),Ji}function $E(t){return t.views.size===0}function jl(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return H(i!=null,"SyncTree gave us an op for an invalid query."),xu(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(xu(o,e,n,r));return i}}function BE(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Yi(n,s?r:null),l=!1;a?l=!0:r instanceof ne?(a=Vl(n,r),l=!1):(a=ne.EMPTY_NODE,l=!1);const c=Co(new or(a,l,!1),new or(r,s,!1));return new xE(e,c)}return o}function jE(t,e,n,r,s,i){const o=BE(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UE(o,n),zE(o,n)}function KE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=kn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Du(c,n,r)),Lu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Du(l,n,r)),Lu(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!kn(t)&&i.push(new(VE())(e._repo,e._path)),{removed:i,events:o}}function lp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wr(t,e){let n=null;for(const r of t.views.values())n=n||FE(r,e);return n}function cp(t,e){if(e._queryParams.loadsAllData())return To(t);{const r=e._queryIdentifier;return t.views.get(r)}}function up(t,e){return cp(t,e)!=null}function kn(t){return To(t)!=null}function To(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zi;function GE(t){H(!Zi,"__referenceConstructor has already been defined"),Zi=t}function qE(){return H(Zi,"Reference.ts has not been loaded"),Zi}let YE=1;class Mu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=CE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fp(t,e,n,r,s){return dE(t.pendingWriteTree_,e,n,r,s),s?ri(t,new ir(Jh(),e,n)):[]}function Gn(t,e,n=!1){const r=hE(t.pendingWriteTree_,e);if(pE(t.pendingWriteTree_,e)){let i=new we(null);return r.snap!=null?i=i.set(_e(),!0):ct(r.children,o=>{i=i.set(new be(o),!0)}),ri(t,new qi(r.path,i,n))}else return[]}function wo(t,e,n){return ri(t,new ir(zl(),e,n))}function XE(t,e,n){const r=we.fromObject(n);return ri(t,new Us(zl(),e,r))}function QE(t,e){return ri(t,new Fs(zl(),e))}function JE(t,e,n){const r=Gl(t,n);if(r){const s=ql(r),i=s.path,o=s.queryId,a=ot(i,e),l=new Fs(Wl(o),a);return Yl(t,i,l)}else return[]}function Ba(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||up(o,e))){const l=KE(o,e,n,r);$E(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(h,g)=>kn(g));if(u&&!f){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const g=tb(h);for(let _=0;_<g.length;++_){const I=g[_],T=I.query,v=pp(t,I);t.listenProvider_.startListening(bs(T),eo(t,T),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(bs(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(So(h));t.listenProvider_.stopListening(bs(h),g)}))}nb(t,c)}return a}function ZE(t,e,n,r){const s=Gl(t,r);if(s!=null){const i=ql(s),o=i.path,a=i.queryId,l=ot(o,e),c=new ir(Wl(a),l,n);return Yl(t,o,c)}else return[]}function eb(t,e,n,r){const s=Gl(t,r);if(s){const i=ql(s),o=i.path,a=i.queryId,l=ot(o,e),c=we.fromObject(n),u=new Us(Wl(a),l,c);return Yl(t,o,u)}else return[]}function Fu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,g)=>{const _=ot(h,s);i=i||wr(g,_),o=o||kn(g)});let a=t.syncPointTree_.get(s);a?(o=o||kn(a),i=i||wr(a,_e())):(a=new WE,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=ne.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,_)=>{const I=wr(_,_e());I&&(i=i.updateImmediateChild(g,I))}));const c=up(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=So(e);H(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=rb();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const u=Hl(t.pendingWriteTree_,s);let f=jE(a,e,n,u,i,l);if(!c&&!o&&!r){const h=cp(a,e);f=f.concat(sb(t,e,h))}return f}function Kl(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=wr(a,l);if(c)return c});return np(s,e,i,n,!0)}function ri(t,e){return dp(e,t.syncPointTree_,null,Hl(t.pendingWriteTree_,_e()))}function dp(t,e,n,r){if(le(t.path))return hp(t,e,n,r);{const s=e.get(_e());n==null&&s!=null&&(n=wr(s,_e()));let i=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=rp(r,o);i=i.concat(dp(a,l,c,u))}return s&&(i=i.concat(jl(s,t,r,n))),i}}function hp(t,e,n,r){const s=e.get(_e());n==null&&s!=null&&(n=wr(s,_e()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=rp(r,o),u=t.operationForChild(o);u&&(i=i.concat(hp(u,a,l,c)))}),s&&(i=i.concat(jl(s,t,r,n))),i}function pp(t,e){const n=e.query,r=eo(t,n);return{hashFn:()=>(ME(e)||ne.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?JE(t,n._path,r):QE(t,n._path);{const i=Zy(s,n);return Ba(t,n,null,i)}}}}function eo(t,e){const n=So(e);return t.queryToTagMap.get(n)}function So(t){return t._path.toString()+"$"+t._queryIdentifier}function Gl(t,e){return t.tagToQueryMap.get(e)}function ql(t){const e=t.indexOf("$");return H(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new be(t.substr(0,e))}}function Yl(t,e,n){const r=t.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const s=Hl(t.pendingWriteTree_,e);return jl(r,n,s,null)}function tb(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[To(n)];{let s=[];return n&&(s=lp(n)),ct(r,(i,o)=>{s=s.concat(o)}),s}})}function bs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(qE())(t._repo,t._path):t}function nb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=So(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function rb(){return YE++}function sb(t,e,n){const r=e._path,s=eo(t,e),i=pp(t,n),o=t.listenProvider_.startListening(bs(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)H(!kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!le(c)&&u&&kn(u))return[To(u).query];{let h=[];return u&&(h=h.concat(lp(u).map(g=>g.query))),ct(f,(g,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(bs(u),eo(t,u))}}return o}/**
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
 */class Xl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xl(n)}node(){return this.node_}}class Ql{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Ql(this.syncTree_,n)}node(){return Kl(this.syncTree_,this.path_)}}const ib=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uu=function(t,e,n){if(!t||typeof t!="object")return t;if(H(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ob(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ab(t[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ob=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+t)}},ab=function(t,e,n){t.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const s=e.node();if(H(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},lb=function(t,e,n,r){return Jl(e,new Ql(n,t),r)},_p=function(t,e,n){return Jl(t,new Xl(e),n)};function Jl(t,e,n){const r=t.getPriority().val(),s=Uu(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Uu(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ve(a,Ge(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ve(s))),o.forEachChild(Ae,(a,l)=>{const c=Jl(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Zl{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ec(t,e){let n=e instanceof be?e:new be(e),r=t,s=oe(n);for(;s!==null;){const i=Dr(r.node.children,s)||{children:{},childCount:0};r=new Zl(s,r,i),n=Ce(n),s=oe(n)}return r}function Zr(t){return t.node.value}function mp(t,e){t.node.value=e,ja(t)}function gp(t){return t.node.childCount>0}function cb(t){return Zr(t)===void 0&&!gp(t)}function Ro(t,e){ct(t.node.children,(n,r)=>{e(new Zl(n,t,r))})}function yp(t,e,n,r){n&&!r&&e(t),Ro(t,s=>{yp(s,e,!0,r)}),n&&r&&e(t)}function ub(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function si(t){return new be(t.parent===null?t.name:si(t.parent)+"/"+t.name)}function ja(t){t.parent!==null&&fb(t.parent,t.name,t)}function fb(t,e,n){const r=cb(n),s=Zt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ja(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ja(t))}/**
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
 */const db=/[\[\].#$\/\u0000-\u001F\u007F]/,hb=/[\[\].#$\u0000-\u001F\u007F]/,ca=10*1024*1024,vp=function(t){return typeof t=="string"&&t.length!==0&&!db.test(t)},Ep=function(t){return typeof t=="string"&&t.length!==0&&!hb.test(t)},pb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ep(t)},_b=function(t,e,n,r){r&&e===void 0||tc(Sl(t,"value"),e,n)},tc=function(t,e,n){const r=n instanceof be?new Pv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(r)+" with contents = "+e.toString());if(Eh(e))throw new Error(t+"contains "+e.toString()+" "+Hn(r));if(typeof e=="string"&&e.length>ca/3&&bo(e)>ca)throw new Error(t+"contains a string greater than "+ca+" utf8 bytes "+Hn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ct(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!vp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Lv(r,o),tc(t,a,r),Dv(r)}),s&&i)throw new Error(t+' contains ".value" child '+Hn(r)+" in addition to actual children.")}},bp=function(t,e,n,r){if(!(r&&n===void 0)&&!Ep(n))throw new Error(Sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bp(t,e,n,r)},Ip=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pb(n))throw new Error(Sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Dl(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Cp(t,e,n){nc(t,n),Tp(t,r=>Dl(r,e))}function Qt(t,e,n){nc(t,n),Tp(t,r=>Rt(r,e)||Rt(e,r))}function Tp(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(vb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xn&&Ye("event: "+n.toString()),Jr(r)}}}/**
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
 */const Eb="repo_interrupt",bb=25;class Ib{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gi(),this.transactionQueueTree_=new Zl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cb(t,e,n){if(t.stats_=Pl(t.repoInfo_),t.forceRestClient_||rv())t.server_=new Ki(t.repoInfo_,(r,s,i,o)=>{zu(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wu(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,s,i,o)=>{zu(t,r,s,i,o)},r=>{Wu(t,r)},r=>{wb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lv(t.repoInfo_,()=>new oE(t.stats_,t.server_)),t.infoData_=new tE,t.infoSyncTree_=new Mu({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=wo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),sc(t,"connected",!1),t.serverSyncTree_=new Mu({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Qt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Tb(t){const n=t.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rc(t){return ib({timestamp:Tb(t)})}function zu(t,e,n,r,s){t.dataUpdateCount++;const i=new be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Wi(n,c=>Ge(c));o=eb(t.serverSyncTree_,i,l,s)}else{const l=Ge(n);o=ZE(t.serverSyncTree_,i,l,s)}else if(r){const l=Wi(n,c=>Ge(c));o=XE(t.serverSyncTree_,i,l)}else{const l=Ge(n);o=wo(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=No(t,i)),Qt(t.eventQueue_,a,o)}function Wu(t,e){sc(t,"connected",e),e===!1&&Rb(t)}function wb(t,e){ct(e,(n,r)=>{sc(t,n,r)})}function sc(t,e,n){const r=new be("/.info/"+e),s=Ge(n);t.infoData_.updateSnapshot(r,s);const i=wo(t.infoSyncTree_,r,s);Qt(t.eventQueue_,r,i)}function wp(t){return t.nextWriteId_++}function Sb(t,e,n,r,s){ic(t,"set",{path:e.toString(),value:n,priority:r});const i=rc(t),o=Ge(n,r),a=Kl(t.serverSyncTree_,e),l=_p(o,a,i),c=wp(t),u=fp(t.serverSyncTree_,e,l,c,!0);nc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||lt("set at "+e+" failed: "+h);const I=Gn(t.serverSyncTree_,c,!_);Qt(t.eventQueue_,e,I),Ob(t,s,h,g)});const f=Op(t,e);No(t,f),Qt(t.eventQueue_,f,[])}function Rb(t){ic(t,"onDisconnectEvents");const e=rc(t),n=Gi();Ua(t.onDisconnect_,_e(),(s,i)=>{const o=lb(s,i,t.serverSyncTree_,e);Qh(n,s,o)});let r=[];Ua(n,_e(),(s,i)=>{r=r.concat(wo(t.serverSyncTree_,s,i));const o=Op(t,s);No(t,o)}),t.onDisconnect_=Gi(),Qt(t.eventQueue_,_e(),r)}function Nb(t,e,n){let r;oe(e._path)===".info"?r=Fu(t.infoSyncTree_,e,n):r=Fu(t.serverSyncTree_,e,n),Cp(t.eventQueue_,e._path,r)}function Hu(t,e,n){let r;oe(e._path)===".info"?r=Ba(t.infoSyncTree_,e,n):r=Ba(t.serverSyncTree_,e,n),Cp(t.eventQueue_,e._path,r)}function Ab(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Eb)}function ic(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function Ob(t,e,n,r){e&&Jr(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Sp(t,e,n){return Kl(t.serverSyncTree_,e,n)||ne.EMPTY_NODE}function oc(t,e=t.transactionQueueTree_){if(e||Ao(t,e),Zr(e)){const n=Np(t,e);H(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&kb(t,si(e),n)}else gp(e)&&Ro(e,n=>{oc(t,n)})}function kb(t,e,n){const r=n.map(c=>c.currentWriteId),s=Sp(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];H(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=ot(e,u.path);i=i.updateChild(f,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ic(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Gn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ao(t,ec(t.transactionQueueTree_,e)),oc(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Jr(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}No(t,e)}},o)}function No(t,e){const n=Rp(t,e),r=si(n),s=Np(t,n);return Pb(t,s,r),r}function Pb(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let u=!1,f;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,s=s.concat(Gn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bb)u=!0,f="maxretry",s=s.concat(Gn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Sp(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){tc("transaction failed: Data returned ",g,l.path);let _=Ge(g);typeof g=="object"&&g!=null&&Zt(g,".priority")||(_=_.updatePriority(h.getPriority()));const T=l.currentWriteId,v=rc(t),C=_p(_,h,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=wp(t),o.splice(o.indexOf(T),1),s=s.concat(fp(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),s=s.concat(Gn(t.serverSyncTree_,T,!0))}else u=!0,f="nodata",s=s.concat(Gn(t.serverSyncTree_,l.currentWriteId,!0))}Qt(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ao(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Jr(r[a]);oc(t,t.transactionQueueTree_)}function Rp(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&Zr(r)===void 0;)r=ec(r,n),e=Ce(e),n=oe(e);return r}function Np(t,e){const n=[];return Ap(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Ap(t,e,n){const r=Zr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Ro(e,s=>{Ap(t,s,n)})}function Ao(t,e){const n=Zr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,mp(e,n.length>0?n:void 0)}Ro(e,r=>{Ao(t,r)})}function Op(t,e){const n=si(Rp(t,e)),r=ec(t.transactionQueueTree_,e);return ub(r,s=>{ua(t,s)}),ua(t,r),yp(r,s=>{ua(t,s)}),n}function ua(t,e){const n=Zr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?mp(e,void 0):n.length=i+1,Qt(t.eventQueue_,si(e),s);for(let o=0;o<r.length;o++)Jr(r[o])}}/**
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
 */function Lb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Db(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vu=function(t,e){const n=xb(t),r=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qy();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ph(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new be(n.pathString)}},xb=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(s=Lb(t.substring(u,f)));const h=Db(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class kp{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class Pp{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Mb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ac{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return le(this._path)?null:Hh(this._path)}get ref(){return new en(this._repo,this._path)}get _queryIdentifier(){const e=wu(this._queryParams),n=Ol(e);return n==="{}"?"default":n}get _queryObject(){return wu(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof ac))return!1;const n=this._repo===e._repo,r=Dl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kv(this._path)}}class en extends ac{constructor(e,n){super(e,n,new Ul,!1)}get parent(){const e=$h(this._path);return e===null?null:new en(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new be(e),r=to(this.ref,e);return new zs(this._node.getChild(n),r,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new zs(s,to(this.ref,r),Ae)))}hasChild(e){const n=new be(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yO(t,e){return t=ft(t),t._checkNotDeleted("ref"),e!==void 0?to(t._root,e):t._root}function to(t,e){return t=ft(t),oe(t._path)===null?mb("child","path",e,!1):bp("child","path",e,!1),new en(t._repo,xe(t._path,e))}function vO(t){return Ip("remove",t._path),Fb(t,null)}function Fb(t,e){t=ft(t),Ip("set",t._path),_b("set",e,t._path,!1);const n=new Eo;return Sb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kp("value",this,new zs(e.snapshotNode,new en(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pp(this,e,n):null}matches(e){return e instanceof lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class cc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pp(this,e,n):null}createEvent(e,n){H(e.childName!=null,"Child events should have a childName.");const r=to(new en(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new kp(e.type,this,new zs(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ub(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(u,f)=>{Hu(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Mb(n,i||void 0),a=e==="value"?new lc(o):new cc(e,o);return Nb(t._repo,t,a),()=>Hu(t._repo,t,a)}function EO(t,e,n,r){return Ub(t,"value",e,n,r)}HE(en);GE(en);/**
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
 */const zb="FIREBASE_DATABASE_EMULATOR_HOST",Ka={};let Wb=!1;function Hb(t,e,n,r){t.repoInfo_=new Ph(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Vb(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vu(i,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[zb]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Vu(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Cr(Cr.OWNER):new iv(t.name,t.options,e);gb("Invalid Firebase Database URL",o),le(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Bb(a,t,u,new sv(t.name,n));return new jb(f,t)}function $b(t,e){const n=Ka[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ab(t),delete n[t.key]}function Bb(t,e,n,r){let s=Ka[e.name];s||(s={},Ka[e.name]=s);let i=s[t.toURLString()];return i&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Ib(t,Wb,n,r),s[t.toURLString()]=i,i}class jb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new en(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&($b(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function Kb(t=ph(),e){const n=Al(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Eg("database");r&&Gb(n,...r)}return n}function Gb(t,e,n,r={}){t=ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Cr(Cr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:bg(r.mockUserToken,t.app.options.projectId);i=new Cr(o)}Hb(s,e,n,i)}/**
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
 */function qb(t){$y(Xr),xr(new nr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Vb(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Tn(lu,cu,t),Tn(lu,cu,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qb();const Yb={apiKey:"AIzaSyAq2T432lOdXgZhyV4xS2pzDzmLJFIua3U",authDomain:"bear-seat-manager.firebaseapp.com",databaseURL:"https://bear-seat-manager-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"bear-seat-manager.appspot.com"},Lp=hh(Yb),Xb=Kb(Lp);var Qb=Object.freeze(Object.defineProperty({__proto__:null,app:Lp,database:Xb},Symbol.toStringTag,{value:"Module"})),Jb={button:{about:t=>{const{normalize:e}=t;return e(["\xDCber"])},back:t=>{const{normalize:e}=t;return e(["Zur\xFCck"])},go:t=>{const{normalize:e}=t;return e(["Los"])},home:t=>{const{normalize:e}=t;return e(["Startseite"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Dunkelmodus umschalten"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Sprachen \xE4ndern"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo einer dynamischen Route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Auch bekannt als"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Wie hei\xDFt du?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nicht gefunden"])}},Zb=Object.freeze(Object.defineProperty({__proto__:null,default:Jb},Symbol.toStringTag,{value:"Module"})),eI={button:{about:t=>{const{normalize:e}=t;return e(["About"])},back:t=>{const{normalize:e}=t;return e(["Back"])},go:t=>{const{normalize:e}=t;return e(["GO"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Toggle dark mode"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Change languages"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opinionated Vite Starter Template"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo of dynamic route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Also known as"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["What's your name?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Not found"])}},tI=Object.freeze(Object.defineProperty({__proto__:null,default:eI},Symbol.toStringTag,{value:"Module"})),nI={button:{about:t=>{const{normalize:e}=t;return e(["Acerca de"])},back:t=>{const{normalize:e}=t;return e(["Atr\xE1s"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["Inicio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo oscuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambiar idiomas"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Plantilla de Inicio de Vite Dogm\xE1tica"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo de ruta din\xE1mica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\xA1Hola, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tambi\xE9n conocido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\xBFC\xF3mo te llamas?"])}},"not-found":t=>{const{normalize:e}=t;return e(["No se ha encontrado"])}},rI=Object.freeze(Object.defineProperty({__proto__:null,default:nI},Symbol.toStringTag,{value:"Module"})),sI={button:{about:t=>{const{normalize:e}=t;return e(["\xC0 propos de"])},back:t=>{const{normalize:e}=t;return e(["Retour"])},go:t=>{const{normalize:e}=t;return e(["Essayer"])},home:t=>{const{normalize:e}=t;return e(["Accueil"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Basculer en mode sombre"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Changer de langue"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Exemple d'application Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["D\xE9mo de route dynamique"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Salut, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Aussi connu sous le nom de"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Comment t'appelles-tu ?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Page non trouv\xE9e"])}},iI=Object.freeze(Object.defineProperty({__proto__:null,default:sI},Symbol.toStringTag,{value:"Module"})),oI={button:{about:t=>{const{normalize:e}=t;return e(["Su di me"])},back:t=>{const{normalize:e}=t;return e(["Indietro"])},go:t=>{const{normalize:e}=t;return e(["Vai"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambia lingua"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modello per una Applicazione Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo di rotta dinamica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Ciao, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Come ti chiami?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Non trovato"])}},aI=Object.freeze(Object.defineProperty({__proto__:null,default:oI},Symbol.toStringTag,{value:"Module"})),lI={button:{about:t=>{const{normalize:e}=t;return e(["\u3053\u308C\u306F\uFF1F"])},back:t=>{const{normalize:e}=t;return e(["\u623B\u308B"])},go:t=>{const{normalize:e}=t;return e(["\u9032\u3080"])},home:t=>{const{normalize:e}=t;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u541B\u306E\u540D\u306F\u3002"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},cI=Object.freeze(Object.defineProperty({__proto__:null,default:lI},Symbol.toStringTag,{value:"Module"})),uI={button:{about:t=>{const{normalize:e}=t;return e(["\uC18C\uAC1C"])},back:t=>{const{normalize:e}=t;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:t=>{const{normalize:e}=t;return e(["\uC774\uB3D9"])},home:t=>{const{normalize:e}=t;return e(["\uD648"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\uC548\uB155, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},fI=Object.freeze(Object.defineProperty({__proto__:null,default:uI},Symbol.toStringTag,{value:"Module"})),dI={button:{about:t=>{const{normalize:e}=t;return e(["O nas"])},back:t=>{const{normalize:e}=t;return e(["Wr\xF3\u0107"])},go:t=>{const{normalize:e}=t;return e(["WEJD\u0179"])},home:t=>{const{normalize:e}=t;return e(["Strona g\u0142\xF3wna"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Ustaw tryb nocny"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opiniowany szablon startowy Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstracja dynamicznego route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Cze\u015B\u0107, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Znany te\u017C jako"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Jak masz na imi\u0119?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nie znaleziono"])}},hI=Object.freeze(Object.defineProperty({__proto__:null,default:dI},Symbol.toStringTag,{value:"Module"})),pI={button:{about:t=>{const{normalize:e}=t;return e(["Sobre"])},back:t=>{const{normalize:e}=t;return e(["Voltar"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["In\xEDcio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo escuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Mudar de idioma"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Ol\xE1, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tamb\xE9m conhecido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Qual \xE9 o seu nome?"])}},"not-found":t=>{const{normalize:e}=t;return e(["N\xE3o encontrado"])}},_I=Object.freeze(Object.defineProperty({__proto__:null,default:pI},Symbol.toStringTag,{value:"Module"})),mI={button:{about:t=>{const{normalize:e}=t;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:t=>{const{normalize:e}=t;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:t=>{const{normalize:e}=t;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:t=>{const{normalize:e}=t;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},gI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),yI={button:{about:t=>{const{normalize:e}=t;return e(["Hakk\u0131mda"])},back:t=>{const{normalize:e}=t;return e(["Geri"])},go:t=>{const{normalize:e}=t;return e(["\u0130LER\u0130"])},home:t=>{const{normalize:e}=t;return e(["Anasayfa"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Dinamik rota demosu"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Merhaba, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Ad\u0131n\u0131z nedir?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Bulunamad\u0131"])}},vI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),EI={button:{about:t=>{const{normalize:e}=t;return e(["V\u1EC1"])},back:t=>{const{normalize:e}=t;return e(["Quay l\u1EA1i"])},go:t=>{const{normalize:e}=t;return e(["\u0110i"])},home:t=>{const{normalize:e}=t;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},bI=Object.freeze(Object.defineProperty({__proto__:null,default:EI},Symbol.toStringTag,{value:"Module"})),II={button:{about:t=>{const{normalize:e}=t;return e(["\u5173\u4E8E"])},back:t=>{const{normalize:e}=t;return e(["\u8FD4\u56DE"])},go:t=>{const{normalize:e}=t;return e(["\u786E\u5B9A"])},home:t=>{const{normalize:e}=t;return e(["\u9996\u9875"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u4F60\u597D\uFF0C",n(r("name"))])},aka:t=>{const{normalize:e}=t;return e(["\u4E5F\u53EB"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u672A\u627E\u5230\u9875\u9762"])}},CI=Object.freeze(Object.defineProperty({__proto__:null,default:II},Symbol.toStringTag,{value:"Module"}));/*!
  * shared v9.6.5
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const Ga=typeof window!="undefined",tn=(t,e=!1)=>e?Symbol.for(t):Symbol(t),TI=(t,e,n)=>wI({l:t,k:e,s:n}),wI=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),je=t=>typeof t=="number"&&isFinite(t),SI=t=>xp(t)==="[object Date]",no=t=>xp(t)==="[object RegExp]",Oo=t=>fe(t)&&Object.keys(t).length===0,Ze=Object.assign;let $u;const Qn=()=>$u||($u=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Bu(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const RI=Object.prototype.hasOwnProperty;function Ws(t,e){return RI.call(t,e)}const Fe=Array.isArray,De=t=>typeof t=="function",q=t=>typeof t=="string",Re=t=>typeof t=="boolean",ge=t=>t!==null&&typeof t=="object",Dp=Object.prototype.toString,xp=t=>Dp.call(t),fe=t=>{if(!ge(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},NI=t=>t==null?"":Fe(t)||fe(t)&&t.toString===Dp?JSON.stringify(t,null,2):String(t);function AI(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function uc(t){let e=t;return()=>++e}function OI(t,e){typeof console!="undefined"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}/*!
  * message-compiler v9.6.5
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function kI(t,e,n){return{line:t,column:e,offset:n}}function qa(t,e,n){const r={start:t,end:e};return n!=null&&(r.source=n),r}const PI=/\{([0-9a-zA-Z]+)\}/g;function LI(t,...e){return e.length===1&&DI(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(PI,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const Mp=Object.assign,ju=t=>typeof t=="string",DI=t=>t!==null&&typeof t=="object";function Fp(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}const ee={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},xI={[ee.EXPECTED_TOKEN]:"Expected token: '{0}'",[ee.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[ee.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[ee.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[ee.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[ee.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[ee.EMPTY_PLACEHOLDER]:"Empty placeholder",[ee.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[ee.INVALID_LINKED_FORMAT]:"Invalid linked format",[ee.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[ee.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[ee.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[ee.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[ee.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[ee.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function es(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=LI((s||xI)[t]||"",...i||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function MI(t){throw t}const Vt=" ",FI="\r",nt=`
`,UI=String.fromCharCode(8232),zI=String.fromCharCode(8233);function WI(t){const e=t;let n=0,r=1,s=1,i=0;const o=A=>e[A]===FI&&e[A+1]===nt,a=A=>e[A]===nt,l=A=>e[A]===zI,c=A=>e[A]===UI,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,h=()=>r,g=()=>s,_=()=>i,I=A=>o(A)||l(A)||c(A)?nt:e[A],T=()=>I(n),v=()=>I(n+i);function C(){return i=0,u(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function b(){return o(n+i)&&i++,i++,e[n+i]}function m(){n=0,r=1,s=1,i=0}function R(A=0){i=A}function O(){const A=n+i;for(;A!==n;)C();i=0}return{index:f,line:h,column:g,peekOffset:_,charAt:I,currentChar:T,currentPeek:v,next:C,peek:b,reset:m,resetPeek:R,skipToPeek:O}}const on=void 0,HI=".",Ku="'",VI="tokenizer";function $I(t,e={}){const n=e.location!==!1,r=WI(t),s=()=>r.index(),i=()=>kI(r.line(),r.column(),r.index()),o=i(),a=s(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(d,p,E,...w){const N=c();if(p.column+=E,p.offset+=E,u){const D=n?qa(N.startLoc,p):null,U=es(d,D,{domain:VI,args:w});u(U)}}function h(d,p,E){d.endLoc=i(),d.currentType=p;const w={type:p};return n&&(w.loc=qa(d.startLoc,d.endLoc)),E!=null&&(w.value=E),w}const g=d=>h(d,14);function _(d,p){return d.currentChar()===p?(d.next(),p):(f(ee.EXPECTED_TOKEN,i(),0,p),"")}function I(d){let p="";for(;d.currentPeek()===Vt||d.currentPeek()===nt;)p+=d.currentPeek(),d.peek();return p}function T(d){const p=I(d);return d.skipToPeek(),p}function v(d){if(d===on)return!1;const p=d.charCodeAt(0);return p>=97&&p<=122||p>=65&&p<=90||p===95}function C(d){if(d===on)return!1;const p=d.charCodeAt(0);return p>=48&&p<=57}function b(d,p){const{currentType:E}=p;if(E!==2)return!1;I(d);const w=v(d.currentPeek());return d.resetPeek(),w}function m(d,p){const{currentType:E}=p;if(E!==2)return!1;I(d);const w=d.currentPeek()==="-"?d.peek():d.currentPeek(),N=C(w);return d.resetPeek(),N}function R(d,p){const{currentType:E}=p;if(E!==2)return!1;I(d);const w=d.currentPeek()===Ku;return d.resetPeek(),w}function O(d,p){const{currentType:E}=p;if(E!==8)return!1;I(d);const w=d.currentPeek()===".";return d.resetPeek(),w}function A(d,p){const{currentType:E}=p;if(E!==9)return!1;I(d);const w=v(d.currentPeek());return d.resetPeek(),w}function P(d,p){const{currentType:E}=p;if(!(E===8||E===12))return!1;I(d);const w=d.currentPeek()===":";return d.resetPeek(),w}function x(d,p){const{currentType:E}=p;if(E!==10)return!1;const w=()=>{const D=d.currentPeek();return D==="{"?v(d.peek()):D==="@"||D==="%"||D==="|"||D===":"||D==="."||D===Vt||!D?!1:D===nt?(d.peek(),w()):v(D)},N=w();return d.resetPeek(),N}function W(d){I(d);const p=d.currentPeek()==="|";return d.resetPeek(),p}function Z(d){const p=I(d),E=d.currentPeek()==="%"&&d.peek()==="{";return d.resetPeek(),{isModulo:E,hasSpace:p.length>0}}function F(d,p=!0){const E=(N=!1,D="",U=!1)=>{const z=d.currentPeek();return z==="{"?D==="%"?!1:N:z==="@"||!z?D==="%"?!0:N:z==="%"?(d.peek(),E(N,"%",!0)):z==="|"?D==="%"||U?!0:!(D===Vt||D===nt):z===Vt?(d.peek(),E(!0,Vt,U)):z===nt?(d.peek(),E(!0,nt,U)):!0},w=E();return p&&d.resetPeek(),w}function X(d,p){const E=d.currentChar();return E===on?on:p(E)?(d.next(),E):null}function ye(d){return X(d,E=>{const w=E.charCodeAt(0);return w>=97&&w<=122||w>=65&&w<=90||w>=48&&w<=57||w===95||w===36})}function pe(d){return X(d,E=>{const w=E.charCodeAt(0);return w>=48&&w<=57})}function B(d){return X(d,E=>{const w=E.charCodeAt(0);return w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102})}function se(d){let p="",E="";for(;p=pe(d);)E+=p;return E}function Y(d){T(d);const p=d.currentChar();return p!=="%"&&f(ee.EXPECTED_TOKEN,i(),0,p),d.next(),"%"}function Ne(d){let p="";for(;;){const E=d.currentChar();if(E==="{"||E==="}"||E==="@"||E==="|"||!E)break;if(E==="%")if(F(d))p+=E,d.next();else break;else if(E===Vt||E===nt)if(F(d))p+=E,d.next();else{if(W(d))break;p+=E,d.next()}else p+=E,d.next()}return p}function dt(d){T(d);let p="",E="";for(;p=ye(d);)E+=p;return d.currentChar()===on&&f(ee.UNTERMINATED_CLOSING_BRACE,i(),0),E}function rt(d){T(d);let p="";return d.currentChar()==="-"?(d.next(),p+=`-${se(d)}`):p+=se(d),d.currentChar()===on&&f(ee.UNTERMINATED_CLOSING_BRACE,i(),0),p}function We(d){T(d),_(d,"'");let p="",E="";const w=D=>D!==Ku&&D!==nt;for(;p=X(d,w);)p==="\\"?E+=Dt(d):E+=p;const N=d.currentChar();return N===nt||N===on?(f(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),N===nt&&(d.next(),_(d,"'")),E):(_(d,"'"),E)}function Dt(d){const p=d.currentChar();switch(p){case"\\":case"'":return d.next(),`\\${p}`;case"u":return Ct(d,p,4);case"U":return Ct(d,p,6);default:return f(ee.UNKNOWN_ESCAPE_SEQUENCE,i(),0,p),""}}function Ct(d,p,E){_(d,p);let w="";for(let N=0;N<E;N++){const D=B(d);if(!D){f(ee.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${p}${w}${d.currentChar()}`);break}w+=D}return`\\${p}${w}`}function Mn(d){T(d);let p="",E="";const w=N=>N!=="{"&&N!=="}"&&N!==Vt&&N!==nt;for(;p=X(d,w);)E+=p;return E}function Pe(d){let p="",E="";for(;p=ye(d);)E+=p;return E}function L(d){const p=(E=!1,w)=>{const N=d.currentChar();return N==="{"||N==="%"||N==="@"||N==="|"||N==="("||N===")"||!N||N===Vt?w:N===nt||N===HI?(w+=N,d.next(),p(E,w)):(w+=N,d.next(),p(!0,w))};return p(!1,"")}function j(d){T(d);const p=_(d,"|");return T(d),p}function V(d,p){let E=null;switch(d.currentChar()){case"{":return p.braceNest>=1&&f(ee.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),d.next(),E=h(p,2,"{"),T(d),p.braceNest++,E;case"}":return p.braceNest>0&&p.currentType===2&&f(ee.EMPTY_PLACEHOLDER,i(),0),d.next(),E=h(p,3,"}"),p.braceNest--,p.braceNest>0&&T(d),p.inLinked&&p.braceNest===0&&(p.inLinked=!1),E;case"@":return p.braceNest>0&&f(ee.UNTERMINATED_CLOSING_BRACE,i(),0),E=G(d,p)||g(p),p.braceNest=0,E;default:let N=!0,D=!0,U=!0;if(W(d))return p.braceNest>0&&f(ee.UNTERMINATED_CLOSING_BRACE,i(),0),E=h(p,1,j(d)),p.braceNest=0,p.inLinked=!1,E;if(p.braceNest>0&&(p.currentType===5||p.currentType===6||p.currentType===7))return f(ee.UNTERMINATED_CLOSING_BRACE,i(),0),p.braceNest=0,ce(d,p);if(N=b(d,p))return E=h(p,5,dt(d)),T(d),E;if(D=m(d,p))return E=h(p,6,rt(d)),T(d),E;if(U=R(d,p))return E=h(p,7,We(d)),T(d),E;if(!N&&!D&&!U)return E=h(p,13,Mn(d)),f(ee.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,E.value),T(d),E;break}return E}function G(d,p){const{currentType:E}=p;let w=null;const N=d.currentChar();switch((E===8||E===9||E===12||E===10)&&(N===nt||N===Vt)&&f(ee.INVALID_LINKED_FORMAT,i(),0),N){case"@":return d.next(),w=h(p,8,"@"),p.inLinked=!0,w;case".":return T(d),d.next(),h(p,9,".");case":":return T(d),d.next(),h(p,10,":");default:return W(d)?(w=h(p,1,j(d)),p.braceNest=0,p.inLinked=!1,w):O(d,p)||P(d,p)?(T(d),G(d,p)):A(d,p)?(T(d),h(p,12,Pe(d))):x(d,p)?(T(d),N==="{"?V(d,p)||w:h(p,11,L(d))):(E===8&&f(ee.INVALID_LINKED_FORMAT,i(),0),p.braceNest=0,p.inLinked=!1,ce(d,p))}}function ce(d,p){let E={type:14};if(p.braceNest>0)return V(d,p)||g(p);if(p.inLinked)return G(d,p)||g(p);switch(d.currentChar()){case"{":return V(d,p)||g(p);case"}":return f(ee.UNBALANCED_CLOSING_BRACE,i(),0),d.next(),h(p,3,"}");case"@":return G(d,p)||g(p);default:if(W(d))return E=h(p,1,j(d)),p.braceNest=0,p.inLinked=!1,E;const{isModulo:N,hasSpace:D}=Z(d);if(N)return D?h(p,0,Ne(d)):h(p,4,Y(d));if(F(d))return h(p,0,Ne(d));break}return E}function y(){const{currentType:d,offset:p,startLoc:E,endLoc:w}=l;return l.lastType=d,l.lastOffset=p,l.lastStartLoc=E,l.lastEndLoc=w,l.offset=s(),l.startLoc=i(),r.currentChar()===on?h(l,14):ce(r,l)}return{nextToken:y,currentOffset:s,currentPosition:i,context:c}}const BI="parser",jI=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function KI(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"\uFFFD"}}}function GI(t={}){const e=t.location!==!1,{onError:n}=t;function r(v,C,b,m,...R){const O=v.currentPosition();if(O.offset+=m,O.column+=m,n){const A=e?qa(b,O):null,P=es(C,A,{domain:BI,args:R});n(P)}}function s(v,C,b){const m={type:v};return e&&(m.start=C,m.end=C,m.loc={start:b,end:b}),m}function i(v,C,b,m){m&&(v.type=m),e&&(v.end=C,v.loc&&(v.loc.end=b))}function o(v,C){const b=v.context(),m=s(3,b.offset,b.startLoc);return m.value=C,i(m,v.currentOffset(),v.currentPosition()),m}function a(v,C){const b=v.context(),{lastOffset:m,lastStartLoc:R}=b,O=s(5,m,R);return O.index=parseInt(C,10),v.nextToken(),i(O,v.currentOffset(),v.currentPosition()),O}function l(v,C){const b=v.context(),{lastOffset:m,lastStartLoc:R}=b,O=s(4,m,R);return O.key=C,v.nextToken(),i(O,v.currentOffset(),v.currentPosition()),O}function c(v,C){const b=v.context(),{lastOffset:m,lastStartLoc:R}=b,O=s(9,m,R);return O.value=C.replace(jI,KI),v.nextToken(),i(O,v.currentOffset(),v.currentPosition()),O}function u(v){const C=v.nextToken(),b=v.context(),{lastOffset:m,lastStartLoc:R}=b,O=s(8,m,R);return C.type!==12?(r(v,ee.UNEXPECTED_EMPTY_LINKED_MODIFIER,b.lastStartLoc,0),O.value="",i(O,m,R),{nextConsumeToken:C,node:O}):(C.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Mt(C)),O.value=C.value||"",i(O,v.currentOffset(),v.currentPosition()),{node:O})}function f(v,C){const b=v.context(),m=s(7,b.offset,b.startLoc);return m.value=C,i(m,v.currentOffset(),v.currentPosition()),m}function h(v){const C=v.context(),b=s(6,C.offset,C.startLoc);let m=v.nextToken();if(m.type===9){const R=u(v);b.modifier=R.node,m=R.nextConsumeToken||v.nextToken()}switch(m.type!==10&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(m)),m=v.nextToken(),m.type===2&&(m=v.nextToken()),m.type){case 11:m.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(m)),b.key=f(v,m.value||"");break;case 5:m.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(m)),b.key=l(v,m.value||"");break;case 6:m.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(m)),b.key=a(v,m.value||"");break;case 7:m.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(m)),b.key=c(v,m.value||"");break;default:r(v,ee.UNEXPECTED_EMPTY_LINKED_KEY,C.lastStartLoc,0);const R=v.context(),O=s(7,R.offset,R.startLoc);return O.value="",i(O,R.offset,R.startLoc),b.key=O,i(b,R.offset,R.startLoc),{nextConsumeToken:m,node:b}}return i(b,v.currentOffset(),v.currentPosition()),{node:b}}function g(v){const C=v.context(),b=C.currentType===1?v.currentOffset():C.offset,m=C.currentType===1?C.endLoc:C.startLoc,R=s(2,b,m);R.items=[];let O=null;do{const x=O||v.nextToken();switch(O=null,x.type){case 0:x.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(x)),R.items.push(o(v,x.value||""));break;case 6:x.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(x)),R.items.push(a(v,x.value||""));break;case 5:x.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(x)),R.items.push(l(v,x.value||""));break;case 7:x.value==null&&r(v,ee.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,Mt(x)),R.items.push(c(v,x.value||""));break;case 8:const W=h(v);R.items.push(W.node),O=W.nextConsumeToken||null;break}}while(C.currentType!==14&&C.currentType!==1);const A=C.currentType===1?C.lastOffset:v.currentOffset(),P=C.currentType===1?C.lastEndLoc:v.currentPosition();return i(R,A,P),R}function _(v,C,b,m){const R=v.context();let O=m.items.length===0;const A=s(1,C,b);A.cases=[],A.cases.push(m);do{const P=g(v);O||(O=P.items.length===0),A.cases.push(P)}while(R.currentType!==14);return O&&r(v,ee.MUST_HAVE_MESSAGES_IN_PLURAL,b,0),i(A,v.currentOffset(),v.currentPosition()),A}function I(v){const C=v.context(),{offset:b,startLoc:m}=C,R=g(v);return C.currentType===14?R:_(v,b,m,R)}function T(v){const C=$I(v,Mp({},t)),b=C.context(),m=s(0,b.offset,b.startLoc);return e&&m.loc&&(m.loc.source=v),m.body=I(C),t.onCacheKey&&(m.cacheKey=t.onCacheKey(v)),b.currentType!==14&&r(C,ee.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,v[b.offset]||""),i(m,C.currentOffset(),C.currentPosition()),m}return{parse:T}}function Mt(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"\u2026":e}function qI(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Gu(t,e){for(let n=0;n<t.length;n++)fc(t[n],e)}function fc(t,e){switch(t.type){case 1:Gu(t.cases,e),e.helper("plural");break;case 2:Gu(t.items,e);break;case 6:fc(t.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function YI(t,e={}){const n=qI(t);n.helper("normalize"),t.body&&fc(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function XI(t){const e=t.body;return e.type===2?qu(e):e.cases.forEach(n=>qu(n)),t}function qu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=Fp(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const QI="minifier";function gr(t){switch(t.t=t.type,t.type){case 0:const e=t;gr(e.body),e.b=e.body,delete e.body;break;case 1:const n=t,r=n.cases;for(let u=0;u<r.length;u++)gr(r[u]);n.c=r,delete n.cases;break;case 2:const s=t,i=s.items;for(let u=0;u<i.length;u++)gr(i[u]);s.i=i,delete s.items,s.static&&(s.s=s.static,delete s.static);break;case 3:case 9:case 8:case 7:const o=t;o.value&&(o.v=o.value,delete o.value);break;case 6:const a=t;gr(a.key),a.k=a.key,delete a.key,a.modifier&&(gr(a.modifier),a.m=a.modifier,delete a.modifier);break;case 5:const l=t;l.i=l.index,delete l.index;break;case 4:const c=t;c.k=c.key,delete c.key;break;default:throw es(ee.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:QI,args:[t.type]})}delete t.type}const JI="parser";function ZI(t,e){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:i}=e,o=e.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:i,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const l=()=>a;function c(T,v){a.code+=T}function u(T,v=!0){const C=v?s:"";c(i?C+"  ".repeat(T):C)}function f(T=!0){const v=++a.indentLevel;T&&u(v)}function h(T=!0){const v=--a.indentLevel;T&&u(v)}function g(){u(a.indentLevel)}return{context:l,push:c,indent:f,deindent:h,newline:g,helper:T=>`_${T}`,needIndent:()=>a.needIndent}}function eC(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),zr(t,e.key),e.modifier?(t.push(", "),zr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function tC(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(zr(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function nC(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(zr(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function rC(t,e){e.body?zr(t,e.body):t.push("null")}function zr(t,e){const{helper:n}=t;switch(e.type){case 0:rC(t,e);break;case 1:nC(t,e);break;case 2:tC(t,e);break;case 6:eC(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw es(ee.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:JI,args:[e.type]})}}const sC=(t,e={})=>{const n=ju(e.mode)?e.mode:"normal",r=ju(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],l=ZI(t,{mode:n,filename:r,sourceMap:s,breakLineCode:i,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${Fp(a.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),zr(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function iC(t,e={}){const n=Mp({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,a=GI(n).parse(t);return r?(i&&XI(a),s&&gr(a),{ast:a,code:""}):(YI(a,n),sC(a,n))}/*!
  * core-base v9.6.5
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function oC(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Qn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Qn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Qn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const xn=[];xn[0]={w:[0],i:[3,0],["["]:[4],o:[7]};xn[1]={w:[1],["."]:[2],["["]:[4],o:[7]};xn[2]={w:[2],i:[3,0],[0]:[3,0]};xn[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};xn[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};xn[5]={["'"]:[4,0],o:8,l:[5,0]};xn[6]={['"']:[4,0],o:8,l:[6,0]};const aC=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function lC(t){return aC.test(t)}function cC(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function uC(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function fC(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:lC(e)?cC(e):"*"+e}function dC(t){const e=[];let n=-1,r=0,s=0,i,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,r=4,h[0]();else{if(s=0,o===void 0||(o=fC(o),o===!1))return!1;h[1]()}};function g(){const _=t[n+1];if(r===5&&_==="'"||r===6&&_==='"')return n++,a="\\"+_,h[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&g())){if(l=uC(i),f=xn[r],c=f[l]||f.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=i,u()===!1))))return;if(r===7)return e}}const Yu=new Map;function hC(t,e){return ge(t)?t[e]:null}function pC(t,e){if(!ge(t))return null;let n=Yu.get(e);if(n||(n=dC(e),n&&Yu.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=s[n[i]];if(o===void 0||De(s))return null;s=o,i++}return s}const _C=t=>t,mC=t=>"",gC="text",yC=t=>t.length===0?"":AI(t),vC=NI;function Xu(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function EC(t){const e=je(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(je(t.named.count)||je(t.named.n))?je(t.named.count)?t.named.count:je(t.named.n)?t.named.n:e:e}function bC(t,e){e.count||(e.count=t),e.n||(e.n=t)}function IC(t={}){const e=t.locale,n=EC(t),r=ge(t.pluralRules)&&q(e)&&De(t.pluralRules[e])?t.pluralRules[e]:Xu,s=ge(t.pluralRules)&&q(e)&&De(t.pluralRules[e])?Xu:void 0,i=v=>v[r(n,v.length,s)],o=t.list||[],a=v=>o[v],l=t.named||{};je(t.pluralIndex)&&bC(n,l);const c=v=>l[v];function u(v){const C=De(t.messages)?t.messages(v):ge(t.messages)?t.messages[v]:!1;return C||(t.parent?t.parent.message(v):mC)}const f=v=>t.modifiers?t.modifiers[v]:_C,h=fe(t.processor)&&De(t.processor.normalize)?t.processor.normalize:yC,g=fe(t.processor)&&De(t.processor.interpolate)?t.processor.interpolate:vC,_=fe(t.processor)&&q(t.processor.type)?t.processor.type:gC,T={list:a,named:c,plural:i,linked:(v,...C)=>{const[b,m]=C;let R="text",O="";C.length===1?ge(b)?(O=b.modifier||O,R=b.type||R):q(b)&&(O=b||O):C.length===2&&(q(b)&&(O=b||O),q(m)&&(R=m||R));const A=u(v)(T),P=R==="vnode"&&Fe(A)&&O?A[0]:A;return O?f(O)(P,R):P},message:u,type:_,interpolate:g,normalize:h,values:Ze({},o,l)};return T}let Hs=null;function CC(t){Hs=t}function TC(t,e,n){Hs&&Hs.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const wC=SC("function:translate");function SC(t){return e=>Hs&&Hs.emit(t,e)}const RC={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function dc(t,e){return e.locale!=null?Qu(e.locale):Qu(t.locale)}let fa;function Qu(t){return q(t)?t:fa!=null&&t.resolvedOnce?fa:fa=t()}function NC(t,e,n){return[...new Set([n,...Fe(e)?e:ge(e)?Object.keys(e):q(e)?[e]:[n]])]}function Up(t,e,n){const r=q(n)?n:ro,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Fe(o);)o=Ju(i,o,e);const a=Fe(e)||!fe(e)?e:e.default?e.default:null;o=q(a)?[a]:a,Fe(o)&&Ju(i,o,!1),s.__localeChainCache.set(r,i)}return i}function Ju(t,e,n){let r=!0;for(let s=0;s<e.length&&Re(r);s++){const i=e[s];q(i)&&(r=AC(t,e[s],n))}return r}function AC(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=OC(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function OC(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Fe(n)||fe(n))&&n[s]&&(r=n[s])}return r}const kC="9.6.5",ko=-1,ro="en-US",Zu="",ef=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function PC(){return{upper:(t,e)=>e==="text"&&q(t)?t.toUpperCase():e==="vnode"&&ge(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&q(t)?t.toLowerCase():e==="vnode"&&ge(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&q(t)?ef(t):e==="vnode"&&ge(t)&&"__v_isVNode"in t?ef(t.children):t}}let zp;function LC(t){zp=t}let Wp;function DC(t){Wp=t}let Hp;function xC(t){Hp=t}let Vp=null;const tf=t=>{Vp=t},MC=()=>Vp;let $p=null;const nf=t=>{$p=t},FC=()=>$p;let rf=0;function UC(t={}){const e=De(t.onWarn)?t.onWarn:OI,n=q(t.version)?t.version:kC,r=q(t.locale)||De(t.locale)?t.locale:ro,s=De(r)?ro:r,i=Fe(t.fallbackLocale)||fe(t.fallbackLocale)||q(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=fe(t.messages)?t.messages:{[s]:{}},a=fe(t.datetimeFormats)?t.datetimeFormats:{[s]:{}},l=fe(t.numberFormats)?t.numberFormats:{[s]:{}},c=Ze({},t.modifiers||{},PC()),u=t.pluralRules||{},f=De(t.missing)?t.missing:null,h=Re(t.missingWarn)||no(t.missingWarn)?t.missingWarn:!0,g=Re(t.fallbackWarn)||no(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,I=!!t.unresolving,T=De(t.postTranslation)?t.postTranslation:null,v=fe(t.processor)?t.processor:null,C=Re(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter,m=De(t.messageCompiler)?t.messageCompiler:zp,R=De(t.messageResolver)?t.messageResolver:Wp||hC,O=De(t.localeFallbacker)?t.localeFallbacker:Hp||NC,A=ge(t.fallbackContext)?t.fallbackContext:void 0,P=t,x=ge(P.__datetimeFormatters)?P.__datetimeFormatters:new Map,W=ge(P.__numberFormatters)?P.__numberFormatters:new Map,Z=ge(P.__meta)?P.__meta:{};rf++;const F={version:n,cid:rf,locale:r,fallbackLocale:i,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:g,fallbackFormat:_,unresolving:I,postTranslation:T,processor:v,warnHtmlMessage:C,escapeParameter:b,messageCompiler:m,messageResolver:R,localeFallbacker:O,fallbackContext:A,onWarn:e,__meta:Z};return F.datetimeFormats=a,F.numberFormats=l,F.__datetimeFormatters=x,F.__numberFormatters=W,__INTLIFY_PROD_DEVTOOLS__&&TC(F,n,Z),F}function hc(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,s);return q(a)?a:e}else return e}function us(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function da(t){return n=>zC(n,t)}function zC(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const r=n,s=r.c||r.cases;return t.plural(s.reduce((i,o)=>[...i,sf(t,o)],[]))}else return sf(t,n)}function sf(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const r=(e.i||e.items).reduce((s,i)=>[...s,Ya(t,i)],[]);return t.normalize(r)}}function Ya(t,e){const n=e.t||e.type;switch(n){case 3:const r=e;return r.v||r.value;case 9:const s=e;return s.v||s.value;case 4:const i=e;return t.interpolate(t.named(i.k||i.key));case 5:const o=e;return t.interpolate(t.list(o.i!=null?o.i:o.index));case 6:const a=e,l=a.m||a.modifier;return t.linked(Ya(t,a.k||a.key),l?Ya(t,l):void 0,t.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const Bp=ee.__EXTEND_POINT__,gi=uc(Bp),qn={INVALID_ARGUMENT:Bp,INVALID_DATE_ARGUMENT:gi(),INVALID_ISO_DATE_ARGUMENT:gi(),NOT_SUPPORT_NON_STRING_MESSAGE:gi(),__EXTEND_POINT__:gi()};function Er(t){return es(t,null,void 0)}const WC=t=>t;let yi=Object.create(null);const Wr=t=>ge(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function HC(t,e={}){let n=!1;const r=e.onError||MI;return e.onError=s=>{n=!0,r(s)},{...iC(t,e),detectError:n}}function VC(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&q(t)){Re(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||WC)(t),s=yi[r];if(s)return s;const{ast:i,detectError:o}=HC(t,{...e,location:!1,jit:!0}),a=da(i);return o?a:yi[r]=a}else{const n=t.cacheKey;if(n){const r=yi[n];return r||(yi[n]=da(t))}else return da(t)}}const of=()=>"",Et=t=>De(t);function af(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=t,[l,c]=Xa(...e),u=Re(c.missingWarn)?c.missingWarn:t.missingWarn,f=Re(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=Re(c.escapeParameter)?c.escapeParameter:t.escapeParameter,g=!!c.resolvedMessage,_=q(c.default)||Re(c.default)?Re(c.default)?i?l:()=>l:c.default:n?i?l:()=>l:"",I=n||_!=="",T=dc(t,c);h&&$C(c);let[v,C,b]=g?[l,T,a[T]||{}]:jp(t,l,T,o,f,u),m=v,R=l;if(!g&&!(q(m)||Wr(m)||Et(m))&&I&&(m=_,R=m),!g&&(!(q(m)||Wr(m)||Et(m))||!q(C)))return s?ko:l;let O=!1;const A=()=>{O=!0},P=Et(m)?m:Kp(t,l,C,m,R,A);if(O)return m;const x=KC(t,C,b,c),W=IC(x),Z=BC(t,P,W),F=r?r(Z,l):Z;if(__INTLIFY_PROD_DEVTOOLS__){const X={timestamp:Date.now(),key:q(l)?l:Et(m)?m.key:"",locale:C||(Et(m)?m.locale:""),format:q(m)?m:Et(m)?m.source:"",message:F};X.meta=Ze({},t.__meta,MC()||{}),wC(X)}return F}function $C(t){Fe(t.list)?t.list=t.list.map(e=>q(e)?Bu(e):e):ge(t.named)&&Object.keys(t.named).forEach(e=>{q(t.named[e])&&(t.named[e]=Bu(t.named[e]))})}function jp(t,e,n,r,s,i){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,r,n);let f={},h,g=null;const _="translate";for(let I=0;I<u.length&&(h=u[I],f=o[h]||{},(g=l(f,e))===null&&(g=f[e]),!(q(g)||Wr(g)||Et(g)));I++){const T=hc(t,e,h,i,_);T!==e&&(g=T)}return[g,h,f]}function Kp(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Et(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>r;return c.locale=n,c.key=e,c}const l=o(r,jC(t,n,s,r,a,i));return l.locale=n,l.key=e,l.source=r,l}function BC(t,e,n){return e(n)}function Xa(...t){const[e,n,r]=t,s={};if(!q(e)&&!je(e)&&!Et(e)&&!Wr(e))throw Er(qn.INVALID_ARGUMENT);const i=je(e)?String(e):(Et(e),e);return je(n)?s.plural=n:q(n)?s.default=n:fe(n)&&!Oo(n)?s.named=n:Fe(n)&&(s.list=n),je(r)?s.plural=r:q(r)?s.default=r:fe(r)&&Ze(s,r),[i,s]}function jC(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>TI(e,n,o)}}function KC(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:s,pluralRules:i,messages:g=>{let _=o(n,g);if(_==null&&u){const[,,I]=jp(u,g,e,a,l,c);_=o(I,g)}if(q(_)||Wr(_)){let I=!1;const v=Kp(t,g,e,_,g,()=>{I=!0});return I?of:v}else return Et(_)?_:of}};return t.processor&&(h.processor=t.processor),r.list&&(h.list=r.list),r.named&&(h.named=r.named),je(r.plural)&&(h.pluralIndex=r.plural),h}function lf(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Qa(...e),h=Re(u.missingWarn)?u.missingWarn:t.missingWarn;Re(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const g=!!u.part,_=dc(t,u),I=o(t,s,_);if(!q(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let T={},v,C=null;const b="datetime format";for(let O=0;O<I.length&&(v=I[O],T=n[v]||{},C=T[l],!fe(C));O++)hc(t,l,v,h,b);if(!fe(C)||!q(v))return r?ko:l;let m=`${v}__${l}`;Oo(f)||(m=`${m}__${JSON.stringify(f)}`);let R=a.get(m);return R||(R=new Intl.DateTimeFormat(v,Ze({},C,f)),a.set(m,R)),g?R.formatToParts(c):R.format(c)}const Gp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Qa(...t){const[e,n,r,s]=t,i={};let o={},a;if(q(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Er(qn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Er(qn.INVALID_ISO_DATE_ARGUMENT)}}else if(SI(e)){if(isNaN(e.getTime()))throw Er(qn.INVALID_DATE_ARGUMENT);a=e}else if(je(e))a=e;else throw Er(qn.INVALID_ARGUMENT);return q(n)?i.key=n:fe(n)&&Object.keys(n).forEach(l=>{Gp.includes(l)?o[l]=n[l]:i[l]=n[l]}),q(r)?i.locale=r:fe(r)&&(o=r),fe(s)&&(o=s),[i.key||"",a,i,o]}function cf(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;!r.__datetimeFormatters.has(i)||r.__datetimeFormatters.delete(i)}}function uf(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Ja(...e),h=Re(u.missingWarn)?u.missingWarn:t.missingWarn;Re(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const g=!!u.part,_=dc(t,u),I=o(t,s,_);if(!q(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let T={},v,C=null;const b="number format";for(let O=0;O<I.length&&(v=I[O],T=n[v]||{},C=T[l],!fe(C));O++)hc(t,l,v,h,b);if(!fe(C)||!q(v))return r?ko:l;let m=`${v}__${l}`;Oo(f)||(m=`${m}__${JSON.stringify(f)}`);let R=a.get(m);return R||(R=new Intl.NumberFormat(v,Ze({},C,f)),a.set(m,R)),g?R.formatToParts(c):R.format(c)}const qp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ja(...t){const[e,n,r,s]=t,i={};let o={};if(!je(e))throw Er(qn.INVALID_ARGUMENT);const a=e;return q(n)?i.key=n:fe(n)&&Object.keys(n).forEach(l=>{qp.includes(l)?o[l]=n[l]:i[l]=n[l]}),q(r)?i.locale=r:fe(r)&&(o=r),fe(s)&&(o=s),[i.key||"",a,i,o]}function ff(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;!r.__numberFormatters.has(i)||r.__numberFormatters.delete(i)}}oC();function pc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Se={},Sr=[],kt=()=>{},GC=()=>!1,qC=/^on[^a-z]/,ii=t=>qC.test(t),_c=t=>t.startsWith("onUpdate:"),ze=Object.assign,mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},YC=Object.prototype.hasOwnProperty,he=(t,e)=>YC.call(t,e),J=Array.isArray,Rr=t=>oi(t)==="[object Map]",Po=t=>oi(t)==="[object Set]",df=t=>oi(t)==="[object Date]",ie=t=>typeof t=="function",Le=t=>typeof t=="string",Hr=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Yp=t=>(Ie(t)||ie(t))&&ie(t.then)&&ie(t.catch),Xp=Object.prototype.toString,oi=t=>Xp.call(t),XC=t=>oi(t).slice(8,-1),Qp=t=>oi(t)==="[object Object]",gc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Is=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},QC=/-(\w)/g,Ht=Lo(t=>t.replace(QC,(e,n)=>n?n.toUpperCase():"")),JC=/\B([A-Z])/g,dr=Lo(t=>t.replace(JC,"-$1").toLowerCase()),Do=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Lo(t=>t?`on${Do(t)}`:""),lr=(t,e)=>!Object.is(t,e),ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},so=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Za=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ZC=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let hf;const el=()=>hf||(hf=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function yc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?rT(r):yc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Ie(t))return t}const eT=/;(?![^(]*\))/g,tT=/:([^]+)/,nT=/\/\*[^]*?\*\//g;function rT(t){const e={};return t.replace(nT,"").split(eT).forEach(n=>{if(n){const r=n.split(tT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vc(t){let e="";if(Le(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const r=vc(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iT=pc(sT);function Jp(t){return!!t||t===""}function oT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=xo(t[r],e[r]);return n}function xo(t,e){if(t===e)return!0;let n=df(t),r=df(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Hr(t),r=Hr(e),n||r)return t===e;if(n=J(t),r=J(e),n||r)return n&&r?oT(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xo(t[o],e[o]))return!1}}return String(t)===String(e)}function Zp(t,e){return t.findIndex(n=>xo(n,e))}const aT=t=>Le(t)?t:t==null?"":J(t)||Ie(t)&&(t.toString===Xp||!ie(t.toString))?JSON.stringify(t,e_,2):String(t),e_=(t,e)=>e&&e.__v_isRef?e_(t,e.value):Rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Po(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!J(e)&&!Qp(e)?String(e):e;let pt;class t_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ec(t){return new t_(t)}function lT(t,e=pt){e&&e.active&&e.effects.push(t)}function n_(){return pt}function cT(t){pt&&pt.cleanups.push(t)}const bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},r_=t=>(t.w&Pn)>0,s_=t=>(t.n&Pn)>0,uT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},fT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];r_(s)&&!s_(s)?s.delete(t):e[n++]=s,s.w&=~Pn,s.n&=~Pn}e.length=n}},io=new WeakMap;let ms=0,Pn=1;const tl=30;let St;const Jn=Symbol(""),nl=Symbol("");class Ic{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lT(this,r)}run(){if(!this.active)return this.fn();let e=St,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,Sn=!0,Pn=1<<++ms,ms<=tl?uT(this):pf(this),this.fn()}finally{ms<=tl&&fT(this),Pn=1<<--ms,St=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(pf(this),this.onStop&&this.onStop(),this.active=!1)}}function pf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const i_=[];function ts(){i_.push(Sn),Sn=!1}function ns(){const t=i_.pop();Sn=t===void 0?!0:t}function ut(t,e,n){if(Sn&&St){let r=io.get(t);r||io.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=bc()),o_(s)}}function o_(t,e){let n=!1;ms<=tl?s_(t)||(t.n|=Pn,n=!r_(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function Yt(t,e,n,r,s,i){const o=io.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Hr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?gc(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),Rr(t)&&a.push(o.get(nl)));break;case"delete":J(t)||(a.push(o.get(Jn)),Rr(t)&&a.push(o.get(nl)));break;case"set":Rr(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&rl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);rl(bc(l))}}function rl(t,e){const n=J(t)?t:[...t];for(const r of n)r.computed&&_f(r);for(const r of n)r.computed||_f(r)}function _f(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function dT(t,e){var n;return(n=io.get(t))==null?void 0:n.get(e)}const hT=pc("__proto__,__v_isRef,__isVue"),a_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hr)),mf=pT();function pT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const r=de(this)[e].apply(this,n);return ns(),r}}),t}function _T(t){const e=de(this);return ut(e,"has",t),e.hasOwnProperty(t)}class l_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?NT:d_:i?f_:u_).get(e))return e;const o=J(e);if(!s){if(o&&he(mf,n))return Reflect.get(mf,n,r);if(n==="hasOwnProperty")return _T}const a=Reflect.get(e,n,r);return(Hr(n)?a_.has(n):hT(n))||(s||ut(e,"get",n),i)?a:Oe(a)?o&&gc(n)?a:a.value:Ie(a)?s?p_(a):ai(a):a}}class c_ extends l_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Vr(i)&&Oe(i)&&!Oe(r))return!1;if(!this._shallow&&(!oo(r)&&!Vr(r)&&(i=de(i),r=de(r)),!J(e)&&Oe(i)&&!Oe(r)))return i.value=r,!0;const o=J(e)&&gc(n)?Number(n)<e.length:he(e,n),a=Reflect.set(e,n,r,s);return e===de(s)&&(o?lr(r,i)&&Yt(e,"set",n,r):Yt(e,"add",n,r)),a}deleteProperty(e,n){const r=he(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Yt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Hr(n)||!a_.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",J(e)?"length":Jn),Reflect.ownKeys(e)}}class mT extends l_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gT=new c_,yT=new mT,vT=new c_(!0),Cc=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function vi(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);n||(lr(e,i)&&ut(s,"get",e),ut(s,"get",i));const{has:o}=Mo(s),a=r?Cc:n?Sc:Vs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ei(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return e||(lr(t,s)&&ut(r,"has",t),ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function bi(t,e=!1){return t=t.__v_raw,!e&&ut(de(t),"iterate",Jn),Reflect.get(t,"size",t)}function gf(t){t=de(t);const e=de(this);return Mo(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function yf(t,e){e=de(e);const n=de(this),{has:r,get:s}=Mo(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?lr(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function vf(t){const e=de(this),{has:n,get:r}=Mo(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Yt(e,"delete",t,void 0),i}function Ef(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function Ii(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),l=e?Cc:t?Sc:Vs;return!t&&ut(a,"iterate",Jn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ci(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=Rr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Cc:e?Sc:Vs;return!e&&ut(i,"iterate",l?nl:Jn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function ET(){const t={get(i){return vi(this,i)},get size(){return bi(this)},has:Ei,add:gf,set:yf,delete:vf,clear:Ef,forEach:Ii(!1,!1)},e={get(i){return vi(this,i,!1,!0)},get size(){return bi(this)},has:Ei,add:gf,set:yf,delete:vf,clear:Ef,forEach:Ii(!1,!0)},n={get(i){return vi(this,i,!0)},get size(){return bi(this,!0)},has(i){return Ei.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ii(!0,!1)},r={get(i){return vi(this,i,!0,!0)},get size(){return bi(this,!0)},has(i){return Ei.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ci(i,!1,!1),n[i]=Ci(i,!0,!1),e[i]=Ci(i,!1,!0),r[i]=Ci(i,!0,!0)}),[t,n,e,r]}const[bT,IT,CT,TT]=ET();function Tc(t,e){const n=e?t?TT:CT:t?IT:bT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const wT={get:Tc(!1,!1)},ST={get:Tc(!1,!0)},RT={get:Tc(!0,!1)},u_=new WeakMap,f_=new WeakMap,d_=new WeakMap,NT=new WeakMap;function AT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OT(t){return t.__v_skip||!Object.isExtensible(t)?0:AT(XC(t))}function ai(t){return Vr(t)?t:wc(t,!1,gT,wT,u_)}function h_(t){return wc(t,!1,vT,ST,f_)}function p_(t){return wc(t,!0,yT,RT,d_)}function wc(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=OT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Rn(t){return Vr(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function oo(t){return!!(t&&t.__v_isShallow)}function __(t){return Rn(t)||Vr(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Fo(t){return so(t,"__v_skip",!0),t}const Vs=t=>Ie(t)?ai(t):t,Sc=t=>Ie(t)?p_(t):t;function m_(t){Sn&&St&&(t=de(t),o_(t.dep||(t.dep=bc())))}function g_(t,e){t=de(t);const n=t.dep;n&&rl(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Xe(t){return y_(t,!1)}function kT(t){return y_(t,!0)}function y_(t,e){return Oe(t)?t:new PT(t,e)}class PT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Vs(e)}get value(){return m_(this),this._value}set value(e){const n=this.__v_isShallow||oo(e)||Vr(e);e=n?e:de(e),lr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vs(e),g_(this))}}function Nr(t){return Oe(t)?t.value:t}const LT={get:(t,e,n)=>Nr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function v_(t){return Rn(t)?t:new Proxy(t,LT)}function DT(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=MT(t,n);return e}class xT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dT(de(this._object),this._key)}}function MT(t,e,n){const r=t[e];return Oe(r)?r:new xT(t,e,n)}class FT{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ic(e,()=>{this._dirty||(this._dirty=!0,g_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return m_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function UT(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new FT(r,s,i||!s,n)}function Nn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Uo(i,e,n)}return s}function bt(t,e,n,r){if(ie(t)){const i=Nn(t,e,n,r);return i&&Yp(i)&&i.catch(o=>{Uo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(bt(t[i],e,n,r));return s}function Uo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Nn(l,null,10,[t,o,a]);return}}zT(t,n,s,r)}function zT(t,e,n,r=!0){console.error(t)}let $s=!1,sl=!1;const Je=[];let Ut=0;const Ar=[];let Bt=null,Vn=0;const E_=Promise.resolve();let Rc=null;function Nc(t){const e=Rc||E_;return t?e.then(this?t.bind(this):t):e}function WT(t){let e=Ut+1,n=Je.length;for(;e<n;){const r=e+n>>>1,s=Je[r],i=Bs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ac(t){(!Je.length||!Je.includes(t,$s&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Je.push(t):Je.splice(WT(t.id),0,t),b_())}function b_(){!$s&&!sl&&(sl=!0,Rc=E_.then(I_))}function HT(t){const e=Je.indexOf(t);e>Ut&&Je.splice(e,1)}function VT(t){J(t)?Ar.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?Vn+1:Vn))&&Ar.push(t),b_()}function bf(t,e=$s?Ut+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function ao(t){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,r)=>Bs(n)-Bs(r)),Vn=0;Vn<Bt.length;Vn++)Bt[Vn]();Bt=null,Vn=0}}const Bs=t=>t.id==null?1/0:t.id,$T=(t,e)=>{const n=Bs(t)-Bs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function I_(t){sl=!1,$s=!0,Je.sort($T);const e=kt;try{for(Ut=0;Ut<Je.length;Ut++){const n=Je[Ut];n&&n.active!==!1&&Nn(n,null,14)}}finally{Ut=0,Je.length=0,ao(),$s=!1,Rc=null,(Je.length||Ar.length)&&I_()}}function BT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||Se;h&&(s=n.map(g=>Le(g)?g.trim():g)),f&&(s=n.map(Za))}let a,l=r[a=ha(e)]||r[a=ha(Ht(e))];!l&&i&&(l=r[a=ha(dr(e))]),l&&bt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(c,t,6,s)}}function C_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=C_(c,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(J(i)?i.forEach(l=>o[l]=null):ze(o,i),Ie(t)&&r.set(t,o),o)}function zo(t,e){return!t||!ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,dr(e))||he(t,e))}let Ke=null,T_=null;function lo(t){const e=Ke;return Ke=t,T_=t&&t.type.__scopeId||null,e}function jT(t,e=Ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Lf(-1);const i=lo(e);let o;try{o=t(...s)}finally{lo(i),r._d&&Lf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:g,ctx:_,inheritAttrs:I}=t;let T,v;const C=lo(t);try{if(n.shapeFlag&4){const m=s||r;T=Tt(u.call(m,m,f,i,g,h,_)),v=l}else{const m=e;T=Tt(m.length>1?m(i,{attrs:l,slots:a,emit:c}):m(i,null)),v=e.props?l:KT(l)}}catch(m){ws.length=0,Uo(m,t,1),T=Ue(mt)}let b=T;if(v&&I!==!1){const m=Object.keys(v),{shapeFlag:R}=b;m.length&&R&7&&(o&&m.some(_c)&&(v=GT(v,o)),b=Ln(b,v))}return n.dirs&&(b=Ln(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),T=b,lo(C),T}const KT=t=>{let e;for(const n in t)(n==="class"||n==="style"||ii(n))&&((e||(e={}))[n]=t[n]);return e},GT=(t,e)=>{const n={};for(const r in t)(!_c(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?If(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!zo(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?If(r,o,c):!0:!!o;return!1}function If(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zo(n,i))return!0}return!1}function YT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const w_="components";function S_(t,e){return QT(w_,t,!0,e)||t}const XT=Symbol.for("v-ndc");function QT(t,e,n=!0,r=!1){const s=Ke||Me;if(s){const i=s.type;if(t===w_){const a=jw(i,!1);if(a&&(a===e||a===Ht(e)||a===Do(Ht(e))))return i}const o=Cf(s[t]||i[t],e)||Cf(s.appContext[t],e);return!o&&r?i:o}}function Cf(t,e){return t&&(t[e]||t[Ht(e)]||t[Do(Ht(e))])}const JT=t=>t.__isSuspense;function R_(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):VT(t)}function ZT(t,e){return Oc(t,null,e)}const Ti={};function An(t,e,n){return Oc(t,e,n)}function Oc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Se){var a;const l=n_()===((a=Me)==null?void 0:a.scope)?Me:null;let c,u=!1,f=!1;if(Oe(t)?(c=()=>t.value,u=oo(t)):Rn(t)?(c=()=>t,r=!0):J(t)?(f=!0,u=t.some(m=>Rn(m)||oo(m)),c=()=>t.map(m=>{if(Oe(m))return m.value;if(Rn(m))return Yn(m);if(ie(m))return Nn(m,l,2)})):ie(t)?e?c=()=>Nn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),bt(t,l,3,[g])}:c=kt,e&&r){const m=c;c=()=>Yn(m())}let h,g=m=>{h=C.onStop=()=>{Nn(m,l,4)}},_;if(Gs)if(g=kt,e?n&&bt(e,l,3,[c(),f?[]:void 0,g]):c(),s==="sync"){const m=qw();_=m.__watcherHandles||(m.__watcherHandles=[])}else return kt;let I=f?new Array(t.length).fill(Ti):Ti;const T=()=>{if(!!C.active)if(e){const m=C.run();(r||u||(f?m.some((R,O)=>lr(R,I[O])):lr(m,I)))&&(h&&h(),bt(e,l,3,[m,I===Ti?void 0:f&&I[0]===Ti?[]:I,g]),I=m)}else C.run()};T.allowRecurse=!!e;let v;s==="sync"?v=T:s==="post"?v=()=>it(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),v=()=>Ac(T));const C=new Ic(c,v);e?n?T():I=C.run():s==="post"?it(C.run.bind(C),l&&l.suspense):C.run();const b=()=>{C.stop(),l&&l.scope&&mc(l.scope.effects,C)};return _&&_.push(b),b}function ew(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?N_(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Me;$r(this);const a=Oc(s,i.bind(r),n);return o?$r(o):Zn(),a}function N_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Yn(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Yn(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(Po(t)||Rr(t))t.forEach(n=>{Yn(n,e)});else if(Qp(t))for(const n in t)Yn(t[n],e);return t}function pr(t,e){const n=Ke;if(n===null)return t;const r=Bo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Se]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ft(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ts(),bt(l,n,8,[t.el,a,t,e]),ns())}}const _n=Symbol("_leaveCb"),wi=Symbol("_enterCb");function tw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kc(()=>{t.isMounted=!0}),Pc(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],A_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},nw={name:"BaseTransition",props:A_,setup(t,{slots:e}){const n=$o(),r=tw();let s;return()=>{const i=e.default&&k_(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==mt){o=I;break}}const a=de(t),{mode:l}=a;if(r.isLeaving)return _a(o);const c=Tf(o);if(!c)return _a(o);const u=il(c,a,r,n);ol(c,u);const f=n.subTree,h=f&&Tf(f);let g=!1;const{getTransitionKey:_}=c.type;if(_){const I=_();s===void 0?s=I:I!==s&&(s=I,g=!0)}if(h&&h.type!==mt&&(!$n(c,h)||g)){const I=il(h,a,r,n);if(ol(h,I),l==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},_a(o);l==="in-out"&&c.type!==mt&&(I.delayLeave=(T,v,C)=>{const b=O_(r,h);b[String(h.key)]=h,T[_n]=()=>{v(),T[_n]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},rw=nw;function O_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function il(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:I,onAppear:T,onAfterAppear:v,onAppearCancelled:C}=e,b=String(t.key),m=O_(n,t),R=(P,x)=>{P&&bt(P,r,9,x)},O=(P,x)=>{const W=x[1];R(P,x),J(P)?P.every(Z=>Z.length<=1)&&W():P.length<=1&&W()},A={mode:i,persisted:o,beforeEnter(P){let x=a;if(!n.isMounted)if(s)x=I||a;else return;P[_n]&&P[_n](!0);const W=m[b];W&&$n(t,W)&&W.el[_n]&&W.el[_n](),R(x,[P])},enter(P){let x=l,W=c,Z=u;if(!n.isMounted)if(s)x=T||l,W=v||c,Z=C||u;else return;let F=!1;const X=P[wi]=ye=>{F||(F=!0,ye?R(Z,[P]):R(W,[P]),A.delayedLeave&&A.delayedLeave(),P[wi]=void 0)};x?O(x,[P,X]):X()},leave(P,x){const W=String(t.key);if(P[wi]&&P[wi](!0),n.isUnmounting)return x();R(f,[P]);let Z=!1;const F=P[_n]=X=>{Z||(Z=!0,x(),X?R(_,[P]):R(g,[P]),P[_n]=void 0,m[W]===t&&delete m[W])};m[W]=t,h?O(h,[P,F]):F()},clone(P){return il(P,e,n,r)}};return A}function _a(t){if(Wo(t))return t=Ln(t),t.children=null,t}function Tf(t){return Wo(t)?t.children?t.children[0]:void 0:t}function ol(t,e){t.shapeFlag&6&&t.component?ol(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function k_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qe?(o.patchFlag&128&&s++,r=r.concat(k_(o.children,e,a))):(e||o.type!==mt)&&r.push(a!=null?Ln(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function nn(t,e){return ie(t)?(()=>ze({name:t.name},e,{setup:t}))():t}const Or=t=>!!t.type.__asyncLoader,Wo=t=>t.type.__isKeepAlive;function sw(t,e){P_(t,"a",e)}function iw(t,e){P_(t,"da",e)}function P_(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ho(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wo(s.parent.vnode)&&ow(r,e,n,s),s=s.parent}}function ow(t,e,n,r){const s=Ho(e,t,r,!0);Lc(()=>{mc(r[e],s)},n)}function Ho(t,e,n=Me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts(),$r(n);const a=bt(e,n,t,o);return Zn(),ns(),a});return r?s.unshift(i):s.push(i),i}}const rn=t=>(e,n=Me)=>(!Gs||t==="sp")&&Ho(t,(...r)=>e(...r),n),aw=rn("bm"),kc=rn("m"),lw=rn("bu"),cw=rn("u"),Pc=rn("bum"),Lc=rn("um"),uw=rn("sp"),fw=rn("rtg"),dw=rn("rtc");function hw(t,e=Me){Ho("ec",t,e)}function bO(t,e,n,r){let s;const i=n&&n[r];if(J(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function IO(t,e,n={},r,s){if(Ke.isCE||Ke.parent&&Or(Ke.parent)&&Ke.parent.isCE)return e!=="default"&&(n.name=e),Ue("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),li();const o=i&&L_(i(n)),a=Mc(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function L_(t){return t.some(e=>fo(e)?!(e.type===mt||e.type===Qe&&!L_(e.children)):!0)?t:null}const al=t=>t?q_(t)?Bo(t)||t.proxy:al(t.parent):null,Cs=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>Dc(t),$forceUpdate:t=>t.f||(t.f=()=>Ac(t.update)),$nextTick:t=>t.n||(t.n=Nc.bind(t.proxy)),$watch:t=>ew.bind(t)}),ma=(t,e)=>t!==Se&&!t.__isScriptSetup&&he(t,e),pw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ma(r,e))return o[e]=1,r[e];if(s!==Se&&he(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,i[e];if(n!==Se&&he(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const u=Cs[e];let f,h;if(u)return e==="$attrs"&&ut(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Se&&he(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,he(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ma(s,e)?(s[e]=n,!0):r!==Se&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Se&&he(t,o)||ma(e,o)||(a=i[0])&&he(a,o)||he(r,o)||he(Cs,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wf(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ll=!0;function _w(t){const e=Dc(t),n=t.proxy,r=t.ctx;ll=!1,e.beforeCreate&&Sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:I,deactivated:T,beforeDestroy:v,beforeUnmount:C,destroyed:b,unmounted:m,render:R,renderTracked:O,renderTriggered:A,errorCaptured:P,serverPrefetch:x,expose:W,inheritAttrs:Z,components:F,directives:X,filters:ye}=e;if(c&&mw(c,r,null),o)for(const se in o){const Y=o[se];ie(Y)&&(r[se]=Y.bind(n))}if(s){const se=s.call(n,n);Ie(se)&&(t.data=ai(se))}if(ll=!0,i)for(const se in i){const Y=i[se],Ne=ie(Y)?Y.bind(n,n):ie(Y.get)?Y.get.bind(n,n):kt,dt=!ie(Y)&&ie(Y.set)?Y.set.bind(n):kt,rt=qe({get:Ne,set:dt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>rt.value,set:We=>rt.value=We})}if(a)for(const se in a)D_(a[se],r,n,se);if(l){const se=ie(l)?l.call(n):l;Reflect.ownKeys(se).forEach(Y=>{Pi(Y,se[Y])})}u&&Sf(u,t,"c");function B(se,Y){J(Y)?Y.forEach(Ne=>se(Ne.bind(n))):Y&&se(Y.bind(n))}if(B(aw,f),B(kc,h),B(lw,g),B(cw,_),B(sw,I),B(iw,T),B(hw,P),B(dw,O),B(fw,A),B(Pc,C),B(Lc,m),B(uw,x),J(W))if(W.length){const se=t.exposed||(t.exposed={});W.forEach(Y=>{Object.defineProperty(se,Y,{get:()=>n[Y],set:Ne=>n[Y]=Ne})})}else t.exposed||(t.exposed={});R&&t.render===kt&&(t.render=R),Z!=null&&(t.inheritAttrs=Z),F&&(t.components=F),X&&(t.directives=X)}function mw(t,e,n=kt){J(t)&&(t=cl(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sf(t,e,n){bt(J(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function D_(t,e,n,r){const s=r.includes(".")?N_(n,r):()=>n[r];if(Le(t)){const i=e[t];ie(i)&&An(s,i)}else if(ie(t))An(s,t.bind(n));else if(Ie(t))if(J(t))t.forEach(i=>D_(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&An(s,i,t)}}function Dc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>co(l,c,o,!0)),co(l,e,o)),Ie(e)&&i.set(e,l),l}function co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&co(t,i,n,!0),s&&s.forEach(o=>co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gw={data:Rf,props:Nf,emits:Nf,methods:gs,computed:gs,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:gs,directives:gs,watch:vw,provide:Rf,inject:yw};function Rf(t,e){return e?t?function(){return ze(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function yw(t,e){return gs(cl(t),cl(e))}function cl(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function gs(t,e){return t?ze(Object.create(null),t,e):e}function Nf(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:ze(Object.create(null),wf(t),wf(e!=null?e:{})):e}function vw(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=tt(t[r],e[r]);return n}function x_(){return{app:null,config:{isNativeTag:GC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ew=0;function bw(t,e){return function(r,s=null){ie(r)||(r=ze({},r)),s!=null&&!Ie(s)&&(s=null);const i=x_(),o=new WeakSet;let a=!1;const l=i.app={_uid:Ew++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const h=Ue(r,s);return h.appContext=i,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Bo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){js=l;try{return c()}finally{js=null}}};return l}}let js=null;function Pi(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function _t(t,e,n=!1){const r=Me||Ke;if(r||js){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:js._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function Iw(){return!!(Me||Ke||js)}function Cw(t,e,n,r=!1){const s={},i={};so(i,Vo,1),t.propsDefaults=Object.create(null),M_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:h_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(zo(t.emitsOptions,h))continue;const g=e[h];if(l)if(he(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const _=Ht(h);s[_]=ul(l,a,_,g,t,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{M_(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!he(e,f)&&((u=dr(f))===f||!he(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ul(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!he(e,f)&&!0)&&(delete i[f],c=!0)}c&&Yt(t,"set","$attrs")}function M_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Is(l))continue;const c=e[l];let u;s&&he(s,u=Ht(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:zo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=de(n),c=a||Se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ul(s,l,f,c[f],t,!he(c,f))}}return o}function ul(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=s;n in c?r=c[n]:($r(s),r=c[n]=l.call(null,e),Zn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dr(n))&&(r=!0))}return r}function F_(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=f=>{l=!0;const[h,g]=F_(f,e,!0);ze(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ie(t)&&r.set(t,Sr),Sr;if(J(i))for(let u=0;u<i.length;u++){const f=Ht(i[u]);Af(f)&&(o[f]=Se)}else if(i)for(const u in i){const f=Ht(u);if(Af(f)){const h=i[u],g=o[f]=J(h)||ie(h)?{type:h}:ze({},h);if(g){const _=Pf(Boolean,g.type),I=Pf(String,g.type);g[0]=_>-1,g[1]=I<0||_<I,(_>-1||he(g,"default"))&&a.push(f)}}}const c=[o,a];return Ie(t)&&r.set(t,c),c}function Af(t){return t[0]!=="$"}function Of(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function kf(t,e){return Of(t)===Of(e)}function Pf(t,e){return J(e)?e.findIndex(n=>kf(n,t)):ie(e)&&kf(e,t)?0:-1}const U_=t=>t[0]==="_"||t==="$stable",xc=t=>J(t)?t.map(Tt):[Tt(t)],ww=(t,e,n)=>{if(e._n)return e;const r=jT((...s)=>xc(e(...s)),n);return r._c=!1,r},z_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(U_(s))continue;const i=t[s];if(ie(i))e[s]=ww(s,i,r);else if(i!=null){const o=xc(i);e[s]=()=>o}}},W_=(t,e)=>{const n=xc(e);t.slots.default=()=>n},Sw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),so(e,"_",n)):z_(e,t.slots={})}else t.slots={},e&&W_(t,e);so(t.slots,Vo,1)},Rw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,z_(e,s)),o=e}else e&&(W_(t,e),o={default:1});if(i)for(const a in s)!U_(a)&&o[a]==null&&delete s[a]};function uo(t,e,n,r,s=!1){if(J(t)){t.forEach((h,g)=>uo(h,e&&(J(e)?e[g]:e),n,r,s));return}if(Or(r)&&!s)return;const i=r.shapeFlag&4?Bo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,he(f,c)&&(f[c]=null)):Oe(c)&&(c.value=null)),ie(l))Nn(l,a,12,[o,u]);else{const h=Le(l),g=Oe(l);if(h||g){const _=()=>{if(t.f){const I=h?he(f,l)?f[l]:u[l]:l.value;s?J(I)&&mc(I,i):J(I)?I.includes(i)||I.push(i):h?(u[l]=[i],he(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,he(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,it(_,n)):_()}}}let ln=!1;const Si=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ri=t=>t.nodeType===8;function Nw(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(b,m)=>{if(!m.hasChildNodes()){n(null,b,m),ao(),m._vnode=b;return}ln=!1,f(m.firstChild,b,null,null,null),ao(),m._vnode=b,ln&&console.error("Hydration completed but contains mismatches.")},f=(b,m,R,O,A,P=!1)=>{const x=Ri(b)&&b.data==="[",W=()=>I(b,m,R,O,A,x),{type:Z,ref:F,shapeFlag:X,patchFlag:ye}=m;let pe=b.nodeType;m.el=b,ye===-2&&(P=!1,m.dynamicChildren=null);let B=null;switch(Z){case cr:pe!==3?m.children===""?(l(m.el=s(""),o(b),b),B=b):B=W():(b.data!==m.children&&(ln=!0,b.data=m.children),B=i(b));break;case mt:C(b)?(B=i(b),v(m.el=b.content.firstChild,b,R)):pe!==8||x?B=W():B=i(b);break;case Ts:if(x&&(b=i(b),pe=b.nodeType),pe===1||pe===3){B=b;const se=!m.children.length;for(let Y=0;Y<m.staticCount;Y++)se&&(m.children+=B.nodeType===1?B.outerHTML:B.data),Y===m.staticCount-1&&(m.anchor=B),B=i(B);return x?i(B):B}else W();break;case Qe:x?B=_(b,m,R,O,A,P):B=W();break;default:if(X&1)(pe!==1||m.type.toLowerCase()!==b.tagName.toLowerCase())&&!C(b)?B=W():B=h(b,m,R,O,A,P);else if(X&6){m.slotScopeIds=A;const se=o(b);if(x?B=T(b):Ri(b)&&b.data==="teleport start"?B=T(b,b.data,"teleport end"):B=i(b),e(m,se,null,R,O,Si(se),P),Or(m)){let Y;x?(Y=Ue(Qe),Y.anchor=B?B.previousSibling:se.lastChild):Y=b.nodeType===3?G_(""):Ue("div"),Y.el=b,m.component.subTree=Y}}else X&64?pe!==8?B=W():B=m.type.hydrate(b,m,R,O,A,P,t,g):X&128&&(B=m.type.hydrate(b,m,R,O,Si(o(b)),A,P,t,f))}return F!=null&&uo(F,null,O,m),B},h=(b,m,R,O,A,P)=>{P=P||!!m.dynamicChildren;const{type:x,props:W,patchFlag:Z,shapeFlag:F,dirs:X,transition:ye}=m,pe=x==="input"&&X||x==="option";if(pe||Z!==-1){if(X&&Ft(m,null,R,"created"),W)if(pe||!P||Z&48)for(const Y in W)(pe&&Y.endsWith("value")||ii(Y)&&!Is(Y))&&r(b,Y,null,W[Y],!1,void 0,R);else W.onClick&&r(b,"onClick",null,W.onClick,!1,void 0,R);let B;(B=W&&W.onVnodeBeforeMount)&&vt(B,R,m);let se=!1;if(C(b)){se=V_(O,ye)&&R&&R.vnode.props&&R.vnode.props.appear;const Y=b.content.firstChild;se&&ye.beforeEnter(Y),v(Y,b,R),m.el=b=Y}if(X&&Ft(m,null,R,"beforeMount"),((B=W&&W.onVnodeMounted)||X||se)&&R_(()=>{B&&vt(B,R,m),se&&ye.enter(b),X&&Ft(m,null,R,"mounted")},O),F&16&&!(W&&(W.innerHTML||W.textContent))){let Y=g(b.firstChild,m,b,R,O,A,P);for(;Y;){ln=!0;const Ne=Y;Y=Y.nextSibling,a(Ne)}}else F&8&&b.textContent!==m.children&&(ln=!0,b.textContent=m.children)}return b.nextSibling},g=(b,m,R,O,A,P,x)=>{x=x||!!m.dynamicChildren;const W=m.children,Z=W.length;for(let F=0;F<Z;F++){const X=x?W[F]:W[F]=Tt(W[F]);if(b)b=f(b,X,O,A,P,x);else{if(X.type===cr&&!X.children)continue;ln=!0,n(null,X,R,null,O,A,Si(R),P)}}return b},_=(b,m,R,O,A,P)=>{const{slotScopeIds:x}=m;x&&(A=A?A.concat(x):x);const W=o(b),Z=g(i(b),m,W,R,O,A,P);return Z&&Ri(Z)&&Z.data==="]"?i(m.anchor=Z):(ln=!0,l(m.anchor=c("]"),W,Z),Z)},I=(b,m,R,O,A,P)=>{if(ln=!0,m.el=null,P){const Z=T(b);for(;;){const F=i(b);if(F&&F!==Z)a(F);else break}}const x=i(b),W=o(b);return a(b),n(null,m,W,x,R,O,Si(W),A),x},T=(b,m="[",R="]")=>{let O=0;for(;b;)if(b=i(b),b&&Ri(b)&&(b.data===m&&O++,b.data===R)){if(O===0)return i(b);O--}return b},v=(b,m,R)=>{const O=m.parentNode;O&&O.replaceChild(b,m);let A=R;for(;A;)A.vnode.el===m&&(A.vnode.el=A.subTree.el=b),A=A.parent},C=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[u,f]}const it=R_;function Aw(t){return H_(t)}function Ow(t){return H_(t,Nw)}function H_(t,e){const n=el();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=kt,insertStaticContent:_}=t,I=(y,d,p,E=null,w=null,N=null,D=!1,U=null,z=!!d.dynamicChildren)=>{if(y===d)return;y&&!$n(y,d)&&(E=L(y),We(y,w,N,!0),y=null),d.patchFlag===-2&&(z=!1,d.dynamicChildren=null);const{type:M,ref:Q,shapeFlag:$}=d;switch(M){case cr:T(y,d,p,E);break;case mt:v(y,d,p,E);break;case Ts:y==null&&C(d,p,E,D);break;case Qe:F(y,d,p,E,w,N,D,U,z);break;default:$&1?R(y,d,p,E,w,N,D,U,z):$&6?X(y,d,p,E,w,N,D,U,z):($&64||$&128)&&M.process(y,d,p,E,w,N,D,U,z,V)}Q!=null&&w&&uo(Q,y&&y.ref,N,d||y,!d)},T=(y,d,p,E)=>{if(y==null)r(d.el=a(d.children),p,E);else{const w=d.el=y.el;d.children!==y.children&&c(w,d.children)}},v=(y,d,p,E)=>{y==null?r(d.el=l(d.children||""),p,E):d.el=y.el},C=(y,d,p,E)=>{[y.el,y.anchor]=_(y.children,d,p,E,y.el,y.anchor)},b=({el:y,anchor:d},p,E)=>{let w;for(;y&&y!==d;)w=h(y),r(y,p,E),y=w;r(d,p,E)},m=({el:y,anchor:d})=>{let p;for(;y&&y!==d;)p=h(y),s(y),y=p;s(d)},R=(y,d,p,E,w,N,D,U,z)=>{D=D||d.type==="svg",y==null?O(d,p,E,w,N,D,U,z):x(y,d,w,N,D,U,z)},O=(y,d,p,E,w,N,D,U)=>{let z,M;const{type:Q,props:$,shapeFlag:S,transition:k,dirs:K}=y;if(z=y.el=o(y.type,N,$&&$.is,$),S&8?u(z,y.children):S&16&&P(y.children,z,null,E,w,N&&Q!=="foreignObject",D,U),K&&Ft(y,null,E,"created"),A(z,y,y.scopeId,D,E),$){for(const ue in $)ue!=="value"&&!Is(ue)&&i(z,ue,null,$[ue],N,y.children,E,w,Pe);"value"in $&&i(z,"value",null,$.value),(M=$.onVnodeBeforeMount)&&vt(M,E,y)}K&&Ft(y,null,E,"beforeMount");const te=V_(w,k);te&&k.beforeEnter(z),r(z,d,p),((M=$&&$.onVnodeMounted)||te||K)&&it(()=>{M&&vt(M,E,y),te&&k.enter(z),K&&Ft(y,null,E,"mounted")},w)},A=(y,d,p,E,w)=>{if(p&&g(y,p),E)for(let N=0;N<E.length;N++)g(y,E[N]);if(w){let N=w.subTree;if(d===N){const D=w.vnode;A(y,D,D.scopeId,D.slotScopeIds,w.parent)}}},P=(y,d,p,E,w,N,D,U,z=0)=>{for(let M=z;M<y.length;M++){const Q=y[M]=U?mn(y[M]):Tt(y[M]);I(null,Q,d,p,E,w,N,D,U)}},x=(y,d,p,E,w,N,D)=>{const U=d.el=y.el;let{patchFlag:z,dynamicChildren:M,dirs:Q}=d;z|=y.patchFlag&16;const $=y.props||Se,S=d.props||Se;let k;p&&Fn(p,!1),(k=S.onVnodeBeforeUpdate)&&vt(k,p,d,y),Q&&Ft(d,y,p,"beforeUpdate"),p&&Fn(p,!0);const K=w&&d.type!=="foreignObject";if(M?W(y.dynamicChildren,M,U,p,E,K,N):D||Y(y,d,U,null,p,E,K,N,!1),z>0){if(z&16)Z(U,d,$,S,p,E,w);else if(z&2&&$.class!==S.class&&i(U,"class",null,S.class,w),z&4&&i(U,"style",$.style,S.style,w),z&8){const te=d.dynamicProps;for(let ue=0;ue<te.length;ue++){const Te=te[ue],He=$[Te],sn=S[Te];(sn!==He||Te==="value")&&i(U,Te,He,sn,w,y.children,p,E,Pe)}}z&1&&y.children!==d.children&&u(U,d.children)}else!D&&M==null&&Z(U,d,$,S,p,E,w);((k=S.onVnodeUpdated)||Q)&&it(()=>{k&&vt(k,p,d,y),Q&&Ft(d,y,p,"updated")},E)},W=(y,d,p,E,w,N,D)=>{for(let U=0;U<d.length;U++){const z=y[U],M=d[U],Q=z.el&&(z.type===Qe||!$n(z,M)||z.shapeFlag&70)?f(z.el):p;I(z,M,Q,null,E,w,N,D,!0)}},Z=(y,d,p,E,w,N,D)=>{if(p!==E){if(p!==Se)for(const U in p)!Is(U)&&!(U in E)&&i(y,U,p[U],null,D,d.children,w,N,Pe);for(const U in E){if(Is(U))continue;const z=E[U],M=p[U];z!==M&&U!=="value"&&i(y,U,M,z,D,d.children,w,N,Pe)}"value"in E&&i(y,"value",p.value,E.value)}},F=(y,d,p,E,w,N,D,U,z)=>{const M=d.el=y?y.el:a(""),Q=d.anchor=y?y.anchor:a("");let{patchFlag:$,dynamicChildren:S,slotScopeIds:k}=d;k&&(U=U?U.concat(k):k),y==null?(r(M,p,E),r(Q,p,E),P(d.children,p,Q,w,N,D,U,z)):$>0&&$&64&&S&&y.dynamicChildren?(W(y.dynamicChildren,S,p,w,N,D,U),(d.key!=null||w&&d===w.subTree)&&$_(y,d,!0)):Y(y,d,p,Q,w,N,D,U,z)},X=(y,d,p,E,w,N,D,U,z)=>{d.slotScopeIds=U,y==null?d.shapeFlag&512?w.ctx.activate(d,p,E,D,z):ye(d,p,E,w,N,D,z):pe(y,d,z)},ye=(y,d,p,E,w,N,D)=>{const U=y.component=Ww(y,E,w);if(Wo(y)&&(U.ctx.renderer=V),Hw(U),U.asyncDep){if(w&&w.registerDep(U,B),!y.el){const z=U.subTree=Ue(mt);v(null,z,d,p)}return}B(U,y,d,p,w,N,D)},pe=(y,d,p)=>{const E=d.component=y.component;if(qT(y,d,p))if(E.asyncDep&&!E.asyncResolved){se(E,d,p);return}else E.next=d,HT(E.update),E.update();else d.el=y.el,E.vnode=d},B=(y,d,p,E,w,N,D)=>{const U=()=>{if(y.isMounted){let{next:Q,bu:$,u:S,parent:k,vnode:K}=y,te=Q,ue;Fn(y,!1),Q?(Q.el=K.el,se(y,Q,D)):Q=K,$&&ki($),(ue=Q.props&&Q.props.onVnodeBeforeUpdate)&&vt(ue,k,Q,K),Fn(y,!0);const Te=pa(y),He=y.subTree;y.subTree=Te,I(He,Te,f(He.el),L(He),y,w,N),Q.el=Te.el,te===null&&YT(y,Te.el),S&&it(S,w),(ue=Q.props&&Q.props.onVnodeUpdated)&&it(()=>vt(ue,k,Q,K),w)}else{let Q;const{el:$,props:S}=d,{bm:k,m:K,parent:te}=y,ue=Or(d);if(Fn(y,!1),k&&ki(k),!ue&&(Q=S&&S.onVnodeBeforeMount)&&vt(Q,te,d),Fn(y,!0),$&&ce){const Te=()=>{y.subTree=pa(y),ce($,y.subTree,y,w,null)};ue?d.type.__asyncLoader().then(()=>!y.isUnmounted&&Te()):Te()}else{const Te=y.subTree=pa(y);I(null,Te,p,E,y,w,N),d.el=Te.el}if(K&&it(K,w),!ue&&(Q=S&&S.onVnodeMounted)){const Te=d;it(()=>vt(Q,te,Te),w)}(d.shapeFlag&256||te&&Or(te.vnode)&&te.vnode.shapeFlag&256)&&y.a&&it(y.a,w),y.isMounted=!0,d=p=E=null}},z=y.effect=new Ic(U,()=>Ac(M),y.scope),M=y.update=()=>z.run();M.id=y.uid,Fn(y,!0),M()},se=(y,d,p)=>{d.component=y;const E=y.vnode.props;y.vnode=d,y.next=null,Tw(y,d.props,E,p),Rw(y,d.children,p),ts(),bf(),ns()},Y=(y,d,p,E,w,N,D,U,z=!1)=>{const M=y&&y.children,Q=y?y.shapeFlag:0,$=d.children,{patchFlag:S,shapeFlag:k}=d;if(S>0){if(S&128){dt(M,$,p,E,w,N,D,U,z);return}else if(S&256){Ne(M,$,p,E,w,N,D,U,z);return}}k&8?(Q&16&&Pe(M,w,N),$!==M&&u(p,$)):Q&16?k&16?dt(M,$,p,E,w,N,D,U,z):Pe(M,w,N,!0):(Q&8&&u(p,""),k&16&&P($,p,E,w,N,D,U,z))},Ne=(y,d,p,E,w,N,D,U,z)=>{y=y||Sr,d=d||Sr;const M=y.length,Q=d.length,$=Math.min(M,Q);let S;for(S=0;S<$;S++){const k=d[S]=z?mn(d[S]):Tt(d[S]);I(y[S],k,p,null,w,N,D,U,z)}M>Q?Pe(y,w,N,!0,!1,$):P(d,p,E,w,N,D,U,z,$)},dt=(y,d,p,E,w,N,D,U,z)=>{let M=0;const Q=d.length;let $=y.length-1,S=Q-1;for(;M<=$&&M<=S;){const k=y[M],K=d[M]=z?mn(d[M]):Tt(d[M]);if($n(k,K))I(k,K,p,null,w,N,D,U,z);else break;M++}for(;M<=$&&M<=S;){const k=y[$],K=d[S]=z?mn(d[S]):Tt(d[S]);if($n(k,K))I(k,K,p,null,w,N,D,U,z);else break;$--,S--}if(M>$){if(M<=S){const k=S+1,K=k<Q?d[k].el:E;for(;M<=S;)I(null,d[M]=z?mn(d[M]):Tt(d[M]),p,K,w,N,D,U,z),M++}}else if(M>S)for(;M<=$;)We(y[M],w,N,!0),M++;else{const k=M,K=M,te=new Map;for(M=K;M<=S;M++){const ht=d[M]=z?mn(d[M]):Tt(d[M]);ht.key!=null&&te.set(ht.key,M)}let ue,Te=0;const He=S-K+1;let sn=!1,Jo=0;const is=new Array(He);for(M=0;M<He;M++)is[M]=0;for(M=k;M<=$;M++){const ht=y[M];if(Te>=He){We(ht,w,N,!0);continue}let xt;if(ht.key!=null)xt=te.get(ht.key);else for(ue=K;ue<=S;ue++)if(is[ue-K]===0&&$n(ht,d[ue])){xt=ue;break}xt===void 0?We(ht,w,N,!0):(is[xt-K]=M+1,xt>=Jo?Jo=xt:sn=!0,I(ht,d[xt],p,null,w,N,D,U,z),Te++)}const Jc=sn?kw(is):Sr;for(ue=Jc.length-1,M=He-1;M>=0;M--){const ht=K+M,xt=d[ht],Zc=ht+1<Q?d[ht+1].el:E;is[M]===0?I(null,xt,p,Zc,w,N,D,U,z):sn&&(ue<0||M!==Jc[ue]?rt(xt,p,Zc,2):ue--)}}},rt=(y,d,p,E,w=null)=>{const{el:N,type:D,transition:U,children:z,shapeFlag:M}=y;if(M&6){rt(y.component.subTree,d,p,E);return}if(M&128){y.suspense.move(d,p,E);return}if(M&64){D.move(y,d,p,V);return}if(D===Qe){r(N,d,p);for(let $=0;$<z.length;$++)rt(z[$],d,p,E);r(y.anchor,d,p);return}if(D===Ts){b(y,d,p);return}if(E!==2&&M&1&&U)if(E===0)U.beforeEnter(N),r(N,d,p),it(()=>U.enter(N),w);else{const{leave:$,delayLeave:S,afterLeave:k}=U,K=()=>r(N,d,p),te=()=>{$(N,()=>{K(),k&&k()})};S?S(N,K,te):te()}else r(N,d,p)},We=(y,d,p,E=!1,w=!1)=>{const{type:N,props:D,ref:U,children:z,dynamicChildren:M,shapeFlag:Q,patchFlag:$,dirs:S}=y;if(U!=null&&uo(U,null,p,y,!0),Q&256){d.ctx.deactivate(y);return}const k=Q&1&&S,K=!Or(y);let te;if(K&&(te=D&&D.onVnodeBeforeUnmount)&&vt(te,d,y),Q&6)Mn(y.component,p,E);else{if(Q&128){y.suspense.unmount(p,E);return}k&&Ft(y,null,d,"beforeUnmount"),Q&64?y.type.remove(y,d,p,w,V,E):M&&(N!==Qe||$>0&&$&64)?Pe(M,d,p,!1,!0):(N===Qe&&$&384||!w&&Q&16)&&Pe(z,d,p),E&&Dt(y)}(K&&(te=D&&D.onVnodeUnmounted)||k)&&it(()=>{te&&vt(te,d,y),k&&Ft(y,null,d,"unmounted")},p)},Dt=y=>{const{type:d,el:p,anchor:E,transition:w}=y;if(d===Qe){Ct(p,E);return}if(d===Ts){m(y);return}const N=()=>{s(p),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(y.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:U}=w,z=()=>D(p,N);U?U(y.el,N,z):z()}else N()},Ct=(y,d)=>{let p;for(;y!==d;)p=h(y),s(y),y=p;s(d)},Mn=(y,d,p)=>{const{bum:E,scope:w,update:N,subTree:D,um:U}=y;E&&ki(E),w.stop(),N&&(N.active=!1,We(D,y,d,p)),U&&it(U,d),it(()=>{y.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Pe=(y,d,p,E=!1,w=!1,N=0)=>{for(let D=N;D<y.length;D++)We(y[D],d,p,E,w)},L=y=>y.shapeFlag&6?L(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),j=(y,d,p)=>{y==null?d._vnode&&We(d._vnode,null,null,!0):I(d._vnode||null,y,d,null,null,null,p),bf(),ao(),d._vnode=y},V={p:I,um:We,m:rt,r:Dt,mt:ye,mc:P,pc:Y,pbc:W,n:L,o:t};let G,ce;return e&&([G,ce]=e(V)),{render:j,hydrate:G,createApp:bw(j,G)}}function Fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function V_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $_(t,e,n=!1){const r=t.children,s=e.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mn(s[i]),a.el=o.el),n||$_(o,a)),a.type===cr&&(a.el=o.el)}}function kw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Pw=t=>t.__isTeleport,Qe=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),ws=[];let At=null;function li(t=!1){ws.push(At=t?null:[])}function Lw(){ws.pop(),At=ws[ws.length-1]||null}let Ks=1;function Lf(t){Ks+=t}function B_(t){return t.dynamicChildren=Ks>0?At||Sr:null,Lw(),Ks>0&&At&&At.push(t),t}function j_(t,e,n,r,s,i){return B_(ve(t,e,n,r,s,i,!0))}function Mc(t,e,n,r,s){return B_(Ue(t,e,n,r,s,!0))}function fo(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Vo="__vInternal",K_=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Oe(t)||ie(t)?{i:Ke,r:t,k:e,f:!!n}:t:null);function ve(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&K_(e),ref:e&&Li(e),scopeId:T_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?(Fc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),Ks>0&&!o&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const Ue=Dw;function Dw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===XT)&&(t=mt),fo(t)){const a=Ln(t,e,!0);return n&&Fc(a,n),Ks>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(Kw(t)&&(t=t.__vccOpts),e){e=xw(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=vc(a)),Ie(l)&&(__(l)&&!J(l)&&(l=ze({},l)),e.style=yc(l))}const o=Le(t)?1:JT(t)?128:Pw(t)?64:Ie(t)?4:ie(t)?2:0;return ve(t,e,n,r,s,o,i,!0)}function xw(t){return t?__(t)||Vo in t?ze({},t):t:null}function Ln(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Fw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&K_(a),ref:e&&e.ref?n&&s?J(s)?s.concat(Li(e)):[s,Li(e)]:Li(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function G_(t=" ",e=0){return Ue(cr,null,t,e)}function Mw(t,e){const n=Ue(Ts,null,t);return n.staticCount=e,n}function CO(t="",e=!1){return e?(li(),Mc(mt,null,t)):Ue(mt,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Ue(mt):J(t)?Ue(Qe,null,t.slice()):typeof t=="object"?mn(t):Ue(cr,null,String(t))}function mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ln(t)}function Fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Vo in e)?e._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ke},n=32):(e=String(e),r&64?(n=16,e=[G_(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vc([e.class,r.class]));else if(s==="style")e.style=yc([e.style,r.style]);else if(ii(s)){const i=e[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vt(t,e,n,r=null){bt(t,e,7,[n,r])}const Uw=x_();let zw=0;function Ww(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Uw,i={uid:zw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:F_(r,s),emitsOptions:C_(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=BT.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const $o=()=>Me||Ke;let Uc,_r,Df="__VUE_INSTANCE_SETTERS__";(_r=el()[Df])||(_r=el()[Df]=[]),_r.push(t=>Me=t),Uc=t=>{_r.length>1?_r.forEach(e=>e(t)):_r[0](t)};const $r=t=>{Uc(t),t.scope.on()},Zn=()=>{Me&&Me.scope.off(),Uc(null)};function q_(t){return t.vnode.shapeFlag&4}let Gs=!1;function Hw(t,e=!1){Gs=e;const{props:n,children:r}=t.vnode,s=q_(t);Cw(t,n,s,e),Sw(t,r);const i=s?Vw(t,e):void 0;return Gs=!1,i}function Vw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fo(new Proxy(t.ctx,pw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Bw(t):null;$r(t),ts();const i=Nn(r,t,0,[t.props,s]);if(ns(),Zn(),Yp(i)){if(i.then(Zn,Zn),e)return i.then(o=>{xf(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else xf(t,i,e)}else Y_(t,e)}function xf(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=v_(e)),Y_(t,n)}let Mf;function Y_(t,e,n){const r=t.type;if(!t.render){if(!e&&Mf&&!r.render){const s=r.template||Dc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ze(ze({isCustomElement:i,delimiters:a},o),l);r.render=Mf(s,c)}}t.render=r.render||kt}{$r(t),ts();try{_w(t)}finally{ns(),Zn()}}}function $w(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}}))}function Bw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $w(t)},slots:t.slots,emit:t.emit,expose:e}}function Bo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(v_(Fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)},has(e,n){return n in e||n in Cs}}))}function jw(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Kw(t){return ie(t)&&"__vccOpts"in t}const qe=(t,e)=>UT(t,e,Gs);function ci(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!J(e)?fo(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fo(n)&&(n=[n]),Ue(t,e,n))}const Gw=Symbol.for("v-scx"),qw=()=>_t(Gw),Yw="3.3.8",Xw="http://www.w3.org/2000/svg",Bn=typeof document!="undefined"?document:null,Ff=Bn&&Bn.createElement("template"),Qw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Bn.createElementNS(Xw,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ff.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ff.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cn="transition",fs="animation",qs=Symbol("_vtc"),X_=(t,{slots:e})=>ci(rw,Jw(t),e);X_.displayName="Transition";const Q_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};X_.props=ze({},A_,Q_);const Un=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function Jw(t){const e={};for(const F in t)F in Q_||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=Zw(s),I=_&&_[0],T=_&&_[1],{onBeforeEnter:v,onEnter:C,onEnterCancelled:b,onLeave:m,onLeaveCancelled:R,onBeforeAppear:O=v,onAppear:A=C,onAppearCancelled:P=b}=e,x=(F,X,ye)=>{zn(F,X?u:a),zn(F,X?c:o),ye&&ye()},W=(F,X)=>{F._isLeaving=!1,zn(F,f),zn(F,g),zn(F,h),X&&X()},Z=F=>(X,ye)=>{const pe=F?A:C,B=()=>x(X,F,ye);Un(pe,[X,B]),zf(()=>{zn(X,F?l:i),un(X,F?u:a),Uf(pe)||Wf(X,r,I,B)})};return ze(e,{onBeforeEnter(F){Un(v,[F]),un(F,i),un(F,o)},onBeforeAppear(F){Un(O,[F]),un(F,l),un(F,c)},onEnter:Z(!1),onAppear:Z(!0),onLeave(F,X){F._isLeaving=!0;const ye=()=>W(F,X);un(F,f),nS(),un(F,h),zf(()=>{!F._isLeaving||(zn(F,f),un(F,g),Uf(m)||Wf(F,r,T,ye))}),Un(m,[F,ye])},onEnterCancelled(F){x(F,!1),Un(b,[F])},onAppearCancelled(F){x(F,!0),Un(P,[F])},onLeaveCancelled(F){W(F),Un(R,[F])}})}function Zw(t){if(t==null)return null;if(Ie(t))return[ga(t.enter),ga(t.leave)];{const e=ga(t);return[e,e]}}function ga(t){return ZC(t)}function un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function zn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eS=0;function Wf(t,e,n,r){const s=t._endId=++eS,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=tS(t,e);if(!o)return r();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),i()},h=g=>{g.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function tS(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${cn}Delay`),i=r(`${cn}Duration`),o=Hf(s,i),a=r(`${fs}Delay`),l=r(`${fs}Duration`),c=Hf(a,l);let u=null,f=0,h=0;e===cn?o>0&&(u=cn,f=o,h=i.length):e===fs?c>0&&(u=fs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?cn:fs:null,h=u?u===cn?i.length:l.length:0);const g=u===cn&&/\b(transform|all)(,|$)/.test(r(`${cn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function Hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vf(n)+Vf(t[r])))}function Vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nS(){return document.body.offsetHeight}function rS(t,e,n){const r=t[qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zc=Symbol("_vod"),Ni={beforeMount(t,{value:e},{transition:n}){t[zc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ds(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ds(t,!0),r.enter(t)):r.leave(t,()=>{ds(t,!1)}):ds(t,e))},beforeUnmount(t,{value:e}){ds(t,e)}};function ds(t,e){t.style.display=e?t[zc]:"none"}function sS(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&fl(r,i,"");for(const i in n)fl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),zc in t&&(r.display=i)}}const $f=/\s*!important$/;function fl(t,e,n){if(J(n))n.forEach(r=>fl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iS(t,e);$f.test(n)?t.setProperty(dr(r),n.replace($f,""),"important"):t[r]=n}}const Bf=["Webkit","Moz","ms"],ya={};function iS(t,e){const n=ya[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return ya[e]=r;r=Do(r);for(let s=0;s<Bf.length;s++){const i=Bf[s]+r;if(i in t)return ya[e]=i}return e}const jf="http://www.w3.org/1999/xlink";function oS(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(jf,e.slice(6,e.length)):t.setAttributeNS(jf,e,n);else{const i=iT(e);n==null||i&&!Jp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function aS(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function jn(t,e,n,r){t.addEventListener(e,n,r)}function lS(t,e,n,r){t.removeEventListener(e,n,r)}const Kf=Symbol("_vei");function cS(t,e,n,r,s=null){const i=t[Kf]||(t[Kf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=uS(e);if(r){const c=i[e]=hS(r,s);jn(t,a,c,l)}else o&&(lS(t,a,o,l),i[e]=void 0)}}const Gf=/(?:Once|Passive|Capture)$/;function uS(t){let e;if(Gf.test(t)){e={};let r;for(;r=t.match(Gf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dr(t.slice(2)),e]}let va=0;const fS=Promise.resolve(),dS=()=>va||(fS.then(()=>va=0),va=Date.now());function hS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bt(pS(r,n.value),e,5,[r])};return n.value=t,n.attached=dS(),n}function pS(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qf=/^on[a-z]/,_S=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?rS(t,r,s):e==="style"?sS(t,n,r):ii(e)?_c(e)||cS(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mS(t,e,r,s))?aS(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),oS(t,e,r,s))};function mS(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qf.test(e)&&Le(n)?!1:e in t}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>ki(e,n):e};function gS(t){t.target.composing=!0}function Yf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kr=Symbol("_assign"),Xf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[kr]=ho(s);const i=r||s.props&&s.props.type==="number";jn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Za(a)),t[kr](a)}),n&&jn(t,"change",()=>{t.value=t.value.trim()}),e||(jn(t,"compositionstart",gS),jn(t,"compositionend",Yf),jn(t,"change",Yf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[kr]=ho(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Za(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},TO={deep:!0,created(t,e,n){t[kr]=ho(n),jn(t,"change",()=>{const r=t._modelValue,s=yS(t),i=t.checked,o=t[kr];if(J(r)){const a=Zp(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Po(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(J_(t,i))})},mounted:Qf,beforeUpdate(t,e,n){t[kr]=ho(n),Qf(t,e,n)}};function Qf(t,{value:e,oldValue:n},r){t._modelValue=e,J(e)?t.checked=Zp(e,r.props.value)>-1:Po(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=xo(e,J_(t,!0)))}function yS(t){return"_value"in t?t._value:t.value}function J_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wO=(t,e)=>n=>{if(!("key"in n))return;const r=dr(n.key);if(e.some(s=>s===r||vS[s]===r))return t(n)},Z_=ze({patchProp:_S},Qw);let Ss,Jf=!1;function ES(){return Ss||(Ss=Aw(Z_))}function bS(){return Ss=Jf?Ss:Ow(Z_),Jf=!0,Ss}const IS=(...t)=>{const e=ES().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=em(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},CS=(...t)=>{const e=bS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=em(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function em(t){return Le(t)?document.querySelector(t):t}/*!
  * vue-i18n v9.6.5
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const TS="9.6.5";function wS(){typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Qn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Qn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Qn().__INTLIFY_PROD_DEVTOOLS__=!1)}const tm=RC.__EXTEND_POINT__,fn=uc(tm);fn(),fn(),fn(),fn(),fn(),fn(),fn(),fn();const nm=qn.__EXTEND_POINT__,st=uc(nm),gt={UNEXPECTED_RETURN_TYPE:nm,INVALID_ARGUMENT:st(),MUST_BE_CALL_SETUP_TOP:st(),NOT_INSTALLED:st(),NOT_AVAILABLE_IN_LEGACY_MODE:st(),REQUIRED_VALUE:st(),INVALID_VALUE:st(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:st(),NOT_INSTALLED_WITH_PROVIDE:st(),UNEXPECTED_ERROR:st(),NOT_COMPATIBLE_LEGACY_VUE_I18N:st(),BRIDGE_SUPPORT_VUE_2_ONLY:st(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:st(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:st(),__EXTEND_POINT__:st()};function It(t,...e){return es(t,null,void 0)}const dl=tn("__translateVNode"),hl=tn("__datetimeParts"),pl=tn("__numberParts"),SS=tn("__setPluralRules");tn("__intlifyMeta");const RS=tn("__injectWithOption"),_l=tn("__dispose");function Ys(t){if(!ge(t))return t;for(const e in t)if(!!Ws(t,e))if(!e.includes("."))ge(t[e])&&Ys(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let o=0;o<r;o++){if(n[o]in s||(s[n[o]]={}),!ge(s[n[o]])){i=!0;break}s=s[n[o]]}i||(s[n[r]]=t[e],delete t[e]),ge(s[n[r]])&&Ys(s[n[r]])}return t}function rm(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=fe(n)?n:Fe(r)?{}:{[t]:{}};if(Fe(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},Rs(c,o[l])):Rs(c,o)}else q(a)&&Rs(JSON.parse(a),o)}),s==null&&i)for(const a in o)Ws(o,a)&&Ys(o[a]);return o}const Ai=t=>!ge(t)||Fe(t);function Rs(t,e){if(Ai(t)||Ai(e))throw It(gt.INVALID_VALUE);for(const n in t)Ws(t,n)&&(Ai(t[n])||Ai(e[n])?e[n]=t[n]:Rs(t[n],e[n]))}function sm(t){return t.type}function NS(t,e,n){let r=ge(e.messages)?e.messages:{};"__i18nGlobal"in n&&(r=rm(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(ge(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ge(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Zf(t){return Ue(cr,null,t,0)}const ed="__INTLIFY_META__",td=()=>[],AS=()=>!1;let nd=0;function rd(t){return(e,n,r,s)=>t(n,r,$o()||void 0,s)}const OS=()=>{const t=$o();let e=null;return t&&(e=sm(t)[ed])?{[ed]:e}:null};function im(t={},e){const{__root:n,__injectWithOption:r}=t,s=n===void 0,i=t.flatJson;let o=Re(t.inheritLocale)?t.inheritLocale:!0;const a=Xe(n&&o?n.locale.value:q(t.locale)?t.locale:ro),l=Xe(n&&o?n.fallbackLocale.value:q(t.fallbackLocale)||Fe(t.fallbackLocale)||fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=Xe(rm(a.value,t)),u=Xe(fe(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=Xe(fe(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=n?n.missingWarn:Re(t.missingWarn)||no(t.missingWarn)?t.missingWarn:!0,g=n?n.fallbackWarn:Re(t.fallbackWarn)||no(t.fallbackWarn)?t.fallbackWarn:!0,_=n?n.fallbackRoot:Re(t.fallbackRoot)?t.fallbackRoot:!0,I=!!t.fallbackFormat,T=De(t.missing)?t.missing:null,v=De(t.missing)?rd(t.missing):null,C=De(t.postTranslation)?t.postTranslation:null,b=n?n.warnHtmlMessage:Re(t.warnHtmlMessage)?t.warnHtmlMessage:!0,m=!!t.escapeParameter;const R=n?n.modifiers:fe(t.modifiers)?t.modifiers:{};let O=t.pluralRules||n&&n.pluralRules,A;A=(()=>{s&&nf(null);const S={version:TS,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:R,pluralRules:O,missing:v===null?void 0:v,missingWarn:h,fallbackWarn:g,fallbackFormat:I,unresolving:!0,postTranslation:C===null?void 0:C,warnHtmlMessage:b,escapeParameter:m,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};S.datetimeFormats=u.value,S.numberFormats=f.value,S.__datetimeFormatters=fe(A)?A.__datetimeFormatters:void 0,S.__numberFormatters=fe(A)?A.__numberFormatters:void 0;const k=UC(S);return s&&nf(k),k})(),us(A,a.value,l.value);function x(){return[a.value,l.value,c.value,u.value,f.value]}const W=qe({get:()=>a.value,set:S=>{a.value=S,A.locale=a.value}}),Z=qe({get:()=>l.value,set:S=>{l.value=S,A.fallbackLocale=l.value,us(A,a.value,S)}}),F=qe(()=>c.value),X=qe(()=>u.value),ye=qe(()=>f.value);function pe(){return De(C)?C:null}function B(S){C=S,A.postTranslation=S}function se(){return T}function Y(S){S!==null&&(v=rd(S)),T=S,A.missing=v}const Ne=(S,k,K,te,ue,Te)=>{x();let He;try{__INTLIFY_PROD_DEVTOOLS__&&tf(OS()),s||(A.fallbackContext=n?FC():void 0),He=S(A)}finally{__INTLIFY_PROD_DEVTOOLS__&&tf(null),s||(A.fallbackContext=void 0)}if(K!=="translate exists"&&je(He)&&He===ko||K==="translate exists"&&!He){const[sn,Jo]=k();return n&&_?te(n):ue(sn)}else{if(Te(He))return He;throw It(gt.UNEXPECTED_RETURN_TYPE)}};function dt(...S){return Ne(k=>Reflect.apply(af,null,[k,...S]),()=>Xa(...S),"translate",k=>Reflect.apply(k.t,k,[...S]),k=>k,k=>q(k))}function rt(...S){const[k,K,te]=S;if(te&&!ge(te))throw It(gt.INVALID_ARGUMENT);return dt(k,K,Ze({resolvedMessage:!0},te||{}))}function We(...S){return Ne(k=>Reflect.apply(lf,null,[k,...S]),()=>Qa(...S),"datetime format",k=>Reflect.apply(k.d,k,[...S]),()=>Zu,k=>q(k))}function Dt(...S){return Ne(k=>Reflect.apply(uf,null,[k,...S]),()=>Ja(...S),"number format",k=>Reflect.apply(k.n,k,[...S]),()=>Zu,k=>q(k))}function Ct(S){return S.map(k=>q(k)||je(k)||Re(k)?Zf(String(k)):k)}const Pe={normalize:Ct,interpolate:S=>S,type:"vnode"};function L(...S){return Ne(k=>{let K;const te=k;try{te.processor=Pe,K=Reflect.apply(af,null,[te,...S])}finally{te.processor=null}return K},()=>Xa(...S),"translate",k=>k[dl](...S),k=>[Zf(k)],k=>Fe(k))}function j(...S){return Ne(k=>Reflect.apply(uf,null,[k,...S]),()=>Ja(...S),"number format",k=>k[pl](...S),td,k=>q(k)||Fe(k))}function V(...S){return Ne(k=>Reflect.apply(lf,null,[k,...S]),()=>Qa(...S),"datetime format",k=>k[hl](...S),td,k=>q(k)||Fe(k))}function G(S){O=S,A.pluralRules=O}function ce(S,k){return Ne(()=>{if(!S)return!1;const K=q(k)?k:a.value,te=p(K),ue=A.messageResolver(te,S);return Wr(ue)||Et(ue)||q(ue)},()=>[S],"translate exists",K=>Reflect.apply(K.te,K,[S,k]),AS,K=>Re(K))}function y(S){let k=null;const K=Up(A,l.value,a.value);for(let te=0;te<K.length;te++){const ue=c.value[K[te]]||{},Te=A.messageResolver(ue,S);if(Te!=null){k=Te;break}}return k}function d(S){const k=y(S);return k!=null?k:n?n.tm(S)||{}:{}}function p(S){return c.value[S]||{}}function E(S,k){if(i){const K={[S]:k};for(const te in K)Ws(K,te)&&Ys(K[te]);k=K[S]}c.value[S]=k,A.messages=c.value}function w(S,k){c.value[S]=c.value[S]||{};const K={[S]:k};for(const te in K)Ws(K,te)&&Ys(K[te]);k=K[S],Rs(k,c.value[S]),A.messages=c.value}function N(S){return u.value[S]||{}}function D(S,k){u.value[S]=k,A.datetimeFormats=u.value,cf(A,S,k)}function U(S,k){u.value[S]=Ze(u.value[S]||{},k),A.datetimeFormats=u.value,cf(A,S,k)}function z(S){return f.value[S]||{}}function M(S,k){f.value[S]=k,A.numberFormats=f.value,ff(A,S,k)}function Q(S,k){f.value[S]=Ze(f.value[S]||{},k),A.numberFormats=f.value,ff(A,S,k)}nd++,n&&Ga&&(An(n.locale,S=>{o&&(a.value=S,A.locale=S,us(A,a.value,l.value))}),An(n.fallbackLocale,S=>{o&&(l.value=S,A.fallbackLocale=S,us(A,a.value,l.value))}));const $={id:nd,locale:W,fallbackLocale:Z,get inheritLocale(){return o},set inheritLocale(S){o=S,S&&n&&(a.value=n.locale.value,l.value=n.fallbackLocale.value,us(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:F,get modifiers(){return R},get pluralRules(){return O||{}},get isGlobal(){return s},get missingWarn(){return h},set missingWarn(S){h=S,A.missingWarn=h},get fallbackWarn(){return g},set fallbackWarn(S){g=S,A.fallbackWarn=g},get fallbackRoot(){return _},set fallbackRoot(S){_=S},get fallbackFormat(){return I},set fallbackFormat(S){I=S,A.fallbackFormat=I},get warnHtmlMessage(){return b},set warnHtmlMessage(S){b=S,A.warnHtmlMessage=S},get escapeParameter(){return m},set escapeParameter(S){m=S,A.escapeParameter=S},t:dt,getLocaleMessage:p,setLocaleMessage:E,mergeLocaleMessage:w,getPostTranslationHandler:pe,setPostTranslationHandler:B,getMissingHandler:se,setMissingHandler:Y,[SS]:G};return $.datetimeFormats=X,$.numberFormats=ye,$.rt=rt,$.te=ce,$.tm=d,$.d=We,$.n=Dt,$.getDateTimeFormat=N,$.setDateTimeFormat=D,$.mergeDateTimeFormat=U,$.getNumberFormat=z,$.setNumberFormat=M,$.mergeNumberFormat=Q,$[RS]=r,$[dl]=L,$[hl]=V,$[pl]=j,$}const Wc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function kS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Qe?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},{})}function om(t){return Qe}const PS=nn({name:"i18n-t",props:Ze({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>je(t)||!isNaN(t)}},Wc),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Hc({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(f=>f!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=q(t.plural)?+t.plural:t.plural);const a=kS(e,i),l=s[dl](t.keypath,a,o),c=Ze({},r),u=q(t.tag)||ge(t.tag)?t.tag:om();return ci(u,c,l)}}}),sd=PS;function LS(t){return Fe(t)&&!q(t[0])}function am(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o={part:!0};let a={};t.locale&&(o.locale=t.locale),q(t.format)?o.key=t.format:ge(t.format)&&(q(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,g)=>n.includes(g)?Ze({},h,{[g]:t.format[g]}):h,{}));const l=r(t.value,o,a);let c=[o.key];Fe(l)?c=l.map((h,g)=>{const _=s[h.type],I=_?_({[h.type]:h.value,index:g,parts:l}):[h.value];return LS(I)&&(I[0].key=`${h.type}-${g}`),I}):q(l)&&(c=[l]);const u=Ze({},i),f=q(t.tag)||ge(t.tag)?t.tag:om();return ci(f,u,c)}}const DS=nn({name:"i18n-n",props:Ze({value:{type:Number,required:!0},format:{type:[String,Object]}},Wc),setup(t,e){const n=t.i18n||Hc({useScope:"parent",__useComponent:!0});return am(t,e,qp,(...r)=>n[pl](...r))}}),id=DS,xS=nn({name:"i18n-d",props:Ze({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Wc),setup(t,e){const n=t.i18n||Hc({useScope:"parent",__useComponent:!0});return am(t,e,Gp,(...r)=>n[hl](...r))}}),od=xS;function MS(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function FS(t){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw It(gt.UNEXPECTED_ERROR);const u=MS(t,a.$),f=ad(c);return[Reflect.apply(u.t,u,[...ld(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);Ga&&t.global===c&&(o.__i18nWatcher=An(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ga&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=ad(a);o.textContent=Reflect.apply(l.t,l,[...ld(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function ad(t){if(q(t))return{path:t};if(fe(t)){if(!("path"in t))throw It(gt.REQUIRED_VALUE,"path");return t}else throw It(gt.INVALID_VALUE)}function ld(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},a=r||{};return q(n)&&(o.locale=n),je(s)&&(o.plural=s),je(i)&&(o.plural=i),[e,a,o]}function US(t,e,...n){const r=fe(n[0])?n[0]:{},s=!!r.useI18nComponentName;(Re(r.globalInstall)?r.globalInstall:!0)&&([s?"i18n":sd.name,"I18nT"].forEach(o=>t.component(o,sd)),[id.name,"I18nN"].forEach(o=>t.component(o,id)),[od.name,"I18nD"].forEach(o=>t.component(o,od))),t.directive("t",FS(e))}const zS=tn("global-vue-i18n");function WS(t={},e){const n=Re(t.globalInjection)?t.globalInjection:!0,r=!0,s=new Map,[i,o]=HS(t),a=tn("");function l(f){return s.get(f)||null}function c(f,h){s.set(f,h)}function u(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return r},async install(h,...g){if(h.__VUE_I18N_SYMBOL__=a,h.provide(h.__VUE_I18N_SYMBOL__,f),fe(g[0])){const T=g[0];f.__composerExtend=T.__composerExtend,f.__vueI18nExtend=T.__vueI18nExtend}let _=null;n&&(_=YS(h,f.global)),US(h,f,...g);const I=h.unmount;h.unmount=()=>{_&&_(),f.dispose(),I()}},get global(){return o},dispose(){i.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}}function Hc(t={}){const e=$o();if(e==null)throw It(gt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw It(gt.NOT_INSTALLED);const n=VS(e),r=BS(n),s=sm(e),i=$S(t,s);if(i==="global")return NS(r,t,s),r;if(i==="parent"){let l=jS(n,e,t.__useComponent);return l==null&&(l=r),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ze({},t);"__i18n"in s&&(l.__i18n=s.__i18n),r&&(l.__root=r),a=im(l),o.__composerExtend&&(a[_l]=o.__composerExtend(a)),GS(o,e,a),o.__setInstance(e,a)}return a}function HS(t,e,n){const r=Ec();{const s=r.run(()=>im(t));if(s==null)throw It(gt.UNEXPECTED_ERROR);return[r,s]}}function VS(t){{const e=_t(t.isCE?zS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw It(t.isCE?gt.NOT_INSTALLED_WITH_PROVIDE:gt.UNEXPECTED_ERROR);return e}}function $S(t,e){return Oo(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function BS(t){return t.mode==="composition"?t.global:t.global.__composer}function jS(t,e,n=!1){let r=null;const s=e.root;let i=KS(e,n);for(;i!=null;){const o=t;if(t.mode==="composition"&&(r=o.__getInstance(i)),r!=null||s===i)break;i=i.parent}return r}function KS(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function GS(t,e,n){kc(()=>{},e),Lc(()=>{const r=n;t.__deleteInstance(e);const s=r[_l];s&&(s(),delete r[_l])},e)}const qS=["locale","fallbackLocale","availableLocales"],cd=["t","rt","d","n","tm","te"];function YS(t,e){const n=Object.create(null);return qS.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw It(gt.UNEXPECTED_ERROR);const o=Oe(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,cd.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw It(gt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,cd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}wS();__INTLIFY_JIT_COMPILATION__&&LC(VC);DC(pC);xC(Up);if(__INTLIFY_PROD_DEVTOOLS__){const t=Qn();t.__INTLIFY__=!0,CC(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const XS=Object.fromEntries(Object.entries({"../../locales/de.yml":Zb,"../../locales/en.yml":tI,"../../locales/es.yml":rI,"../../locales/fr.yml":iI,"../../locales/it.yml":aI,"../../locales/ja.yml":cI,"../../locales/ko.yml":fI,"../../locales/pl.yml":hI,"../../locales/pt-BR.yml":_I,"../../locales/ru.yml":gI,"../../locales/tr.yml":vI,"../../locales/vi.yml":bI,"../../locales/zh-CN.yml":CI}).map(([t,e])=>{const n=t.endsWith(".yaml");return[t.slice(14,n?-5:-4),e.default]})),QS=({app:t})=>{const e=WS({legacy:!1,locale:"en",messages:XS});t.use(e)};var JS=Object.freeze(Object.defineProperty({__proto__:null,install:QS},Symbol.toStringTag,{value:"Module"})),ZS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},lm={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(n,r){t.exports=r()})(ZS,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(_){var I,T;for(I in _)T=_[I],T!==void 0&&_.hasOwnProperty(I)&&(r[I]=T);return this},n.status=null,n.set=function(_){var I=n.isStarted();_=s(_,r.minimum,1),n.status=_===1?null:_;var T=n.render(!I),v=T.querySelector(r.barSelector),C=r.speed,b=r.easing;return T.offsetWidth,a(function(m){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(v,o(_,C,b)),_===1?(l(T,{transition:"none",opacity:1}),T.offsetWidth,setTimeout(function(){l(T,{transition:"all "+C+"ms linear",opacity:0}),setTimeout(function(){n.remove(),m()},C)},C)):setTimeout(m,C)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var _=function(){setTimeout(function(){!n.status||(n.trickle(),_())},r.trickleSpeed)};return r.trickle&&_(),this},n.done=function(_){return!_&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(_){var I=n.status;return I?(typeof _!="number"&&(_=(1-I)*s(Math.random()*I,.1,.95)),I=s(I+_,0,.994),n.set(I)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var _=0,I=0;n.promise=function(T){return!T||T.state()==="resolved"?this:(I===0&&n.start(),_++,I++,T.always(function(){I--,I===0?(_=0,n.done()):n.set((_-I)/_)}),this)}}(),n.render=function(_){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var I=document.createElement("div");I.id="nprogress",I.innerHTML=r.template;var T=I.querySelector(r.barSelector),v=_?"-100":i(n.status||0),C=document.querySelector(r.parent),b;return l(T,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(b=I.querySelector(r.spinnerSelector),b&&g(b)),C!=document.body&&u(C,"nprogress-custom-parent"),C.appendChild(I),I},n.remove=function(){f(document.documentElement,"nprogress-busy"),f(document.querySelector(r.parent),"nprogress-custom-parent");var _=document.getElementById("nprogress");_&&g(_)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var _=document.body.style,I="WebkitTransform"in _?"Webkit":"MozTransform"in _?"Moz":"msTransform"in _?"ms":"OTransform"in _?"O":"";return I+"Perspective"in _?"translate3d":I+"Transform"in _?"translate":"margin"};function s(_,I,T){return _<I?I:_>T?T:_}function i(_){return(-1+_)*100}function o(_,I,T){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+i(_)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+i(_)+"%,0)"}:v={"margin-left":i(_)+"%"},v.transition="all "+I+"ms "+T,v}var a=function(){var _=[];function I(){var T=_.shift();T&&T(I)}return function(T){_.push(T),_.length==1&&I()}}(),l=function(){var _=["Webkit","O","Moz","ms"],I={};function T(m){return m.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(R,O){return O.toUpperCase()})}function v(m){var R=document.body.style;if(m in R)return m;for(var O=_.length,A=m.charAt(0).toUpperCase()+m.slice(1),P;O--;)if(P=_[O]+A,P in R)return P;return m}function C(m){return m=T(m),I[m]||(I[m]=v(m))}function b(m,R,O){R=C(R),m.style[R]=O}return function(m,R){var O=arguments,A,P;if(O.length==2)for(A in R)P=R[A],P!==void 0&&R.hasOwnProperty(A)&&b(m,A,P);else b(m,O[1],O[2])}}();function c(_,I){var T=typeof _=="string"?_:h(_);return T.indexOf(" "+I+" ")>=0}function u(_,I){var T=h(_),v=T+I;c(T,I)||(_.className=v.substring(1))}function f(_,I){var T=h(_),v;!c(_,I)||(v=T.replace(" "+I+" "," "),_.className=v.substring(1,v.length-1))}function h(_){return(" "+(_.className||"")+" ").replace(/\s+/gi," ")}function g(_){_&&_.parentNode&&_.parentNode.removeChild(_)}return n})})(lm);var ud=lm.exports;const eR=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{ud.start()}),e.afterEach(()=>{ud.done()}))};var tR=Object.freeze(Object.defineProperty({__proto__:null,install:eR},Symbol.toStringTag,{value:"Module"})),nR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let cm;const jo=t=>cm=t,um=Symbol();function ml(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ns;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ns||(Ns={}));function rR(){const t=Ec(!0),e=t.run(()=>Xe({}));let n=[],r=[];const s=Fo({install(i){jo(s),s._a=i,i.provide(um,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!nR?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fm=()=>{};function fd(t,e,n,r=fm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&n_()&&cT(s),s}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}const sR=t=>t();function gl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ml(s)&&ml(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!Rn(r)?t[n]=gl(s,r):t[n]=r}return t}const iR=Symbol();function oR(t){return!ml(t)||!t.hasOwnProperty(iR)}const{assign:pn}=Object;function aR(t){return!!(Oe(t)&&t.effect)}function lR(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=DT(n.state.value[t]);return pn(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Fo(qe(()=>{jo(n);const g=n._s.get(t);return o[h].call(g,g)})),f),{}))}return l=dm(t,c,e,n,r,!0),l}function dm(t,e,n={},r,s,i){let o;const a=pn({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],g;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Xe({});let I;function T(P){let x;c=u=!1,typeof P=="function"?(P(r.state.value[t]),x={type:Ns.patchFunction,storeId:t,events:g}):(gl(r.state.value[t],P),x={type:Ns.patchObject,payload:P,storeId:t,events:g});const W=I=Symbol();Nc().then(()=>{I===W&&(c=!0)}),u=!0,mr(f,x,r.state.value[t])}const v=i?function(){const{state:x}=n,W=x?x():{};this.$patch(Z=>{pn(Z,W)})}:fm;function C(){o.stop(),f=[],h=[],r._s.delete(t)}function b(P,x){return function(){jo(r);const W=Array.from(arguments),Z=[],F=[];function X(B){Z.push(B)}function ye(B){F.push(B)}mr(h,{args:W,name:P,store:R,after:X,onError:ye});let pe;try{pe=x.apply(this&&this.$id===t?this:R,W)}catch(B){throw mr(F,B),B}return pe instanceof Promise?pe.then(B=>(mr(Z,B),B)).catch(B=>(mr(F,B),Promise.reject(B))):(mr(Z,pe),pe)}}const m={_p:r,$id:t,$onAction:fd.bind(null,h),$patch:T,$reset:v,$subscribe(P,x={}){const W=fd(f,P,x.detached,()=>Z()),Z=o.run(()=>An(()=>r.state.value[t],F=>{(x.flush==="sync"?u:c)&&P({storeId:t,type:Ns.direct,events:g},F)},pn({},l,x)));return W},$dispose:C},R=ai(m);r._s.set(t,R);const A=(r._a&&r._a.runWithContext||sR)(()=>r._e.run(()=>(o=Ec()).run(e)));for(const P in A){const x=A[P];if(Oe(x)&&!aR(x)||Rn(x))i||(_&&oR(x)&&(Oe(x)?x.value=_[P]:gl(x,_[P])),r.state.value[t][P]=x);else if(typeof x=="function"){const W=b(P,x);A[P]=W,a.actions[P]=x}}return pn(R,A),pn(de(R),A),Object.defineProperty(R,"$state",{get:()=>r.state.value[t],set:P=>{T(x=>{pn(x,P)})}}),r._p.forEach(P=>{pn(R,o.run(()=>P({store:R,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(R.$state,_),c=!0,u=!0,R}function SO(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Iw();return a=a||(c?_t(um,null):null),a&&jo(a),a=cm,a._s.has(r)||(i?dm(r,e,s,a):lR(r,s,a)),a._s.get(r)}return o.$id=r,o}const cR=({isClient:t,initialState:e,app:n})=>{const r=rR();n.use(r),t?r.state.value=e.pinia||{}:e.pinia=r.state.value};var uR=Object.freeze(Object.defineProperty({__proto__:null,install:cR},Symbol.toStringTag,{value:"Module"}));const fR="modulepreload",dd={},dR="/",ke=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${dR}${r}`,r in dd)return;dd[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":fR,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},hR=({isClient:t,router:e})=>{!t||e.isReady().then(async()=>{const{registerSW:n}=await ke(()=>import("./virtual_pwa-register.e3f32818.js"),[]);n({immediate:!0})})};var pR=Object.freeze(Object.defineProperty({__proto__:null,install:hR},Symbol.toStringTag,{value:"Module"})),_R=/[<>\/\u2028\u2029]/g,mR={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function gR(t){return mR[t]}function yR(t){if(t==null||Object.keys(t).length===0)return null;try{return JSON.stringify(JSON.stringify(t||{})).replace(_R,gR)}catch(e){return console.error("[SSG] On state serialization -",e,t),null}}function vR(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}var ER=nn({render(){return this.$slots.default&&this.$slots.default({})}}),bR=Object.defineProperty,IR=Object.defineProperties,CR=Object.getOwnPropertyDescriptors,hd=Object.getOwnPropertySymbols,TR=Object.prototype.hasOwnProperty,wR=Object.prototype.propertyIsEnumerable,pd=(t,e,n)=>e in t?bR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_d=(t,e)=>{for(var n in e||(e={}))TR.call(e,n)&&pd(t,n,e[n]);if(hd)for(var n of hd(e))wR.call(e,n)&&pd(t,n,e[n]);return t},SR=(t,e)=>IR(t,CR(e));/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yr=typeof window!="undefined";function RR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Ea(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pt(s)?s.map(t):t(s)}return n}const As=()=>{},Pt=Array.isArray,NR=/\/$/,AR=t=>t.replace(NR,"");function ba(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=LR(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function OR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Br(e.matched[r],n.matched[s])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PR(t[n],e[n]))return!1;return!0}function PR(t,e){return Pt(t)?gd(t,e):Pt(e)?gd(e,t):t===e}function gd(t,e){return Pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function LR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var jr;(function(t){t.pop="pop",t.push="push"})(jr||(jr={}));var er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(er||(er={}));const Ia="";function pm(t){if(!t)if(yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AR(t)}const DR=/^[^#]+#/;function _m(t,e){return t.replace(DR,"#")+e}function xR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function MR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function yd(t,e){return(history.state?history.state.position-e:-1)+t}const yl=new Map;function FR(t,e){yl.set(t,e)}function UR(t){const e=yl.get(t);return yl.delete(t),e}let zR=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),md(l,"")}return md(n,t)+r+s}function WR(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=mm(t,location),_=n.value,I=e.value;let T=0;if(h){if(n.value=g,e.value=h,o&&o===_){o=null;return}T=I?h.position-I.position:0}else r(g);s.forEach(v=>{v(n.value,_,{delta:T,type:jr.pop,direction:T?T>0?er.forward:er.back:er.unknown})})};function l(){o=n.value}function c(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(me({},h.state,{scroll:Ko()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function vd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ko():null}}function HR(t){const{history:e,location:n}=window,r={value:mm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:zR()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(l,c){const u=me({},e.state,vd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=me({},s.value,e.state,{forward:l,scroll:Ko()});i(u.current,u,!0);const f=me({},vd(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function VR(t){t=pm(t);const e=HR(t),n=WR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:_m.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $R(t=""){let e=[],n=[Ia],r=0;t=pm(t);function s(a){r++,r!==n.length&&n.splice(r),n.push(a)}function i(a,l,{direction:c,delta:u}){const f={direction:c,delta:u,type:jr.pop};for(const h of e)h(a,l,f)}const o={location:Ia,state:{},base:t,createHref:_m.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,l){s(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[Ia],r=0},go(a,l=!0){const c=this.location,u=a<0?er.back:er.forward;r=Math.max(0,Math.min(r+a,n.length-1)),l&&i(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function BR(t){return typeof t=="string"||t&&typeof t=="object"}function gm(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ym=Symbol("");var Ed;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ed||(Ed={}));function Kr(t,e){return me(new Error,{type:t,[ym]:!0},e)}function $t(t,e){return t instanceof Error&&ym in t&&(e==null||!!(t.type&e))}const bd="[^/]+?",jR={sensitive:!1,strict:!1,start:!0,end:!0},KR=/[.+*?^${}()[\]/\\]/g;function GR(t,e){const n=me({},jR,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(KR,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:I,optional:T,regexp:v}=h;i.push({name:_,repeatable:I,optional:T});const C=v||bd;if(C!==bd){g+=10;try{new RegExp(`(${C})`)}catch(m){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+m.message)}}let b=I?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(b=T&&c.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),s+=b,g+=20,T&&(g+=-8),I&&(g+=-20),C===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:T}=g,v=_ in c?c[_]:"";if(Pt(v)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Pt(v)?v.join("/"):v;if(!C)if(T)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function qR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function YR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=qR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Id(r))return 1;if(Id(s))return-1}return s.length-r.length}function Id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XR={type:0,value:""},QR=/[a-zA-Z0-9_]/;function JR(t){if(!t)return[[]];if(t==="/")return[[XR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:QR.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function ZR(t,e,n){const r=GR(JR(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function e0(t,e){const n=[],r=new Map;e=wd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,h){const g=!h,_=t0(u);_.aliasOf=h&&h.record;const I=wd(e,u),T=[_];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const m of b)T.push(me({},_,{components:h?h.record.components:_.components,path:m,aliasOf:h?h.record:_}))}let v,C;for(const b of T){const{path:m}=b;if(f&&m[0]!=="/"){const R=f.record.path,O=R[R.length-1]==="/"?"":"/";b.path=f.record.path+(m&&O+m)}if(v=ZR(b,f,I),h?h.alias.push(v):(C=C||v,C!==v&&C.alias.push(v),g&&u.name&&!Td(v)&&o(u.name)),_.children){const R=_.children;for(let O=0;O<R.length;O++)i(R[O],v,h&&h.children[O])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return C?()=>{o(C)}:As}function o(u){if(gm(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&YR(u,n[f])>=0&&(u.record.path!==n[f].record.path||!vm(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Td(u)&&r.set(u.record.name,u)}function c(u,f){let h,g={},_,I;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Kr(1,{location:u});I=h.record.name,g=me(Cd(f.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&Cd(u.params,h.keys.map(C=>C.name))),_=h.stringify(g)}else if("path"in u)_=u.path,h=n.find(C=>C.re.test(_)),h&&(g=h.parse(_),I=h.record.name);else{if(h=f.name?r.get(f.name):n.find(C=>C.re.test(f.path)),!h)throw Kr(1,{location:u,currentLocation:f});I=h.record.name,g=me({},f.params,u.params),_=h.stringify(g)}const T=[];let v=h;for(;v;)T.unshift(v.record),v=v.parent;return{name:I,path:_,params:g,matched:T,meta:r0(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function t0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function n0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function r0(t){return t.reduce((e,n)=>me(e,n.meta),{})}function wd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vm(t,e){return e.children.some(n=>n===t||vm(t,n))}const Em=/#/g,s0=/&/g,i0=/\//g,o0=/=/g,a0=/\?/g,bm=/\+/g,l0=/%5B/g,c0=/%5D/g,Im=/%5E/g,u0=/%60/g,Cm=/%7B/g,f0=/%7C/g,Tm=/%7D/g,d0=/%20/g;function Vc(t){return encodeURI(""+t).replace(f0,"|").replace(l0,"[").replace(c0,"]")}function h0(t){return Vc(t).replace(Cm,"{").replace(Tm,"}").replace(Im,"^")}function vl(t){return Vc(t).replace(bm,"%2B").replace(d0,"+").replace(Em,"%23").replace(s0,"%26").replace(u0,"`").replace(Cm,"{").replace(Tm,"}").replace(Im,"^")}function p0(t){return vl(t).replace(o0,"%3D")}function _0(t){return Vc(t).replace(Em,"%23").replace(a0,"%3F")}function m0(t){return t==null?"":_0(t).replace(i0,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function g0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bm," "),o=i.indexOf("="),a=po(o<0?i:i.slice(0,o)),l=o<0?null:po(i.slice(o+1));if(a in e){let c=e[a];Pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Sd(t){let e="";for(let n in t){const r=t[n];if(n=p0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(r)?r.map(i=>i&&vl(i)):[r&&vl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function y0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const v0=Symbol(""),Rd=Symbol(""),Go=Symbol(""),wm=Symbol(""),El=Symbol("");function hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Kr(4,{from:n,to:e})):f instanceof Error?a(f):BR(f)?a(Kr(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ca(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(E0(a)){const c=(a.__vccOpts||a)[e];c&&s.push(gn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=RR(c)?c.default:c;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&gn(h,n,r,i,o)()}))}}return s}function E0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=_t(Go),n=_t(wm),r=qe(()=>e.resolve(Nr(t.to))),s=qe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Br.bind(null,u));if(h>-1)return h;const g=Ad(l[c-2]);return c>1&&Ad(u)===g&&f[f.length-1].path!==g?f.findIndex(Br.bind(null,l[c-2])):h}),i=qe(()=>s.value>-1&&T0(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&hm(n.params,r.value.params));function a(l={}){return C0(l)?e[Nr(t.replace)?"replace":"push"](Nr(t.to)).catch(As):Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const b0=nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=ai(Nd(t)),{options:r}=_t(Go),s=qe(()=>({[Od(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Od(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ci("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),I0=b0;function C0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Od=(t,e,n)=>t!=null?t:e!=null?e:n,w0=nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_t(El),s=qe(()=>t.route||r.value),i=_t(Rd,0),o=qe(()=>{let c=Nr(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=qe(()=>s.value.matched[o.value]);Pi(Rd,qe(()=>o.value+1)),Pi(v0,a),Pi(El,s);const l=Xe();return An(()=>[l.value,a.value,t.name],([c,u,f],[h,g,_])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Br(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return kd(n.default,{Component:h,route:c});const g=f.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,T=ci(h,me({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return kd(n.default,{Component:T,route:c})||T}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const S0=w0;function R0(t){const e=e0(t.routes,t),n=t.parseQuery||g0,r=t.stringifyQuery||Sd,s=t.history,i=hs(),o=hs(),a=hs(),l=kT(dn);let c=dn;yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ea.bind(null,L=>""+L),f=Ea.bind(null,m0),h=Ea.bind(null,po);function g(L,j){let V,G;return gm(L)?(V=e.getRecordMatcher(L),G=j):G=L,e.addRoute(G,V)}function _(L){const j=e.getRecordMatcher(L);j&&e.removeRoute(j)}function I(){return e.getRoutes().map(L=>L.record)}function T(L){return!!e.getRecordMatcher(L)}function v(L,j){if(j=me({},j||l.value),typeof L=="string"){const p=ba(n,L,j.path),E=e.resolve({path:p.path},j),w=s.createHref(p.fullPath);return me(p,E,{params:h(E.params),hash:po(p.hash),redirectedFrom:void 0,href:w})}let V;if("path"in L)V=me({},L,{path:ba(n,L.path,j.path).path});else{const p=me({},L.params);for(const E in p)p[E]==null&&delete p[E];V=me({},L,{params:f(p)}),j.params=f(j.params)}const G=e.resolve(V,j),ce=L.hash||"";G.params=u(h(G.params));const y=OR(r,me({},L,{hash:h0(ce),path:G.path})),d=s.createHref(y);return me({fullPath:y,hash:ce,query:r===Sd?y0(L.query):L.query||{}},G,{redirectedFrom:void 0,href:d})}function C(L){return typeof L=="string"?ba(n,L,l.value.path):me({},L)}function b(L,j){if(c!==L)return Kr(8,{from:j,to:L})}function m(L){return A(L)}function R(L){return m(me(C(L),{replace:!0}))}function O(L){const j=L.matched[L.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let G=typeof V=="function"?V(L):V;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=C(G):{path:G},G.params={}),me({query:L.query,hash:L.hash,params:"path"in G?{}:L.params},G)}}function A(L,j){const V=c=v(L),G=l.value,ce=L.state,y=L.force,d=L.replace===!0,p=O(V);if(p)return A(me(C(p),{state:typeof p=="object"?me({},ce,p.state):ce,force:y,replace:d}),j||V);const E=V;E.redirectedFrom=j;let w;return!y&&kR(r,G,V)&&(w=Kr(16,{to:E,from:G}),rt(G,G,!0,!1)),(w?Promise.resolve(w):W(E,G)).catch(N=>$t(N)?$t(N,2)?N:dt(N):Y(N,E,G)).then(N=>{if(N){if($t(N,2))return A(me({replace:d},C(N.to),{state:typeof N.to=="object"?me({},ce,N.to.state):ce,force:y}),j||E)}else N=F(E,G,!0,d,ce);return Z(E,G,N),N})}function P(L,j){const V=b(L,j);return V?Promise.reject(V):Promise.resolve()}function x(L){const j=Ct.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(L):L()}function W(L,j){let V;const[G,ce,y]=N0(L,j);V=Ca(G.reverse(),"beforeRouteLeave",L,j);for(const p of G)p.leaveGuards.forEach(E=>{V.push(gn(E,L,j))});const d=P.bind(null,L,j);return V.push(d),Pe(V).then(()=>{V=[];for(const p of i.list())V.push(gn(p,L,j));return V.push(d),Pe(V)}).then(()=>{V=Ca(ce,"beforeRouteUpdate",L,j);for(const p of ce)p.updateGuards.forEach(E=>{V.push(gn(E,L,j))});return V.push(d),Pe(V)}).then(()=>{V=[];for(const p of y)if(p.beforeEnter)if(Pt(p.beforeEnter))for(const E of p.beforeEnter)V.push(gn(E,L,j));else V.push(gn(p.beforeEnter,L,j));return V.push(d),Pe(V)}).then(()=>(L.matched.forEach(p=>p.enterCallbacks={}),V=Ca(y,"beforeRouteEnter",L,j),V.push(d),Pe(V))).then(()=>{V=[];for(const p of o.list())V.push(gn(p,L,j));return V.push(d),Pe(V)}).catch(p=>$t(p,8)?p:Promise.reject(p))}function Z(L,j,V){a.list().forEach(G=>x(()=>G(L,j,V)))}function F(L,j,V,G,ce){const y=b(L,j);if(y)return y;const d=j===dn,p=yr?history.state:{};V&&(G||d?s.replace(L.fullPath,me({scroll:d&&p&&p.scroll},ce)):s.push(L.fullPath,ce)),l.value=L,rt(L,j,V,d),dt()}let X;function ye(){X||(X=s.listen((L,j,V)=>{if(!Mn.listening)return;const G=v(L),ce=O(G);if(ce){A(me(ce,{replace:!0}),G).catch(As);return}c=G;const y=l.value;yr&&FR(yd(y.fullPath,V.delta),Ko()),W(G,y).catch(d=>$t(d,12)?d:$t(d,2)?(A(d.to,G).then(p=>{$t(p,20)&&!V.delta&&V.type===jr.pop&&s.go(-1,!1)}).catch(As),Promise.reject()):(V.delta&&s.go(-V.delta,!1),Y(d,G,y))).then(d=>{d=d||F(G,y,!1),d&&(V.delta&&!$t(d,8)?s.go(-V.delta,!1):V.type===jr.pop&&$t(d,20)&&s.go(-1,!1)),Z(G,y,d)}).catch(As)}))}let pe=hs(),B=hs(),se;function Y(L,j,V){dt(L);const G=B.list();return G.length?G.forEach(ce=>ce(L,j,V)):console.error(L),Promise.reject(L)}function Ne(){return se&&l.value!==dn?Promise.resolve():new Promise((L,j)=>{pe.add([L,j])})}function dt(L){return se||(se=!L,ye(),pe.list().forEach(([j,V])=>L?V(L):j()),pe.reset()),L}function rt(L,j,V,G){const{scrollBehavior:ce}=t;if(!yr||!ce)return Promise.resolve();const y=!V&&UR(yd(L.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return Nc().then(()=>ce(L,j,y)).then(d=>d&&MR(d)).catch(d=>Y(d,L,j))}const We=L=>s.go(L);let Dt;const Ct=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:T,getRoutes:I,resolve:v,options:t,push:m,replace:R,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:B.add,isReady:Ne,install(L){const j=this;L.component("RouterLink",I0),L.component("RouterView",S0),L.config.globalProperties.$router=j,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Nr(l)}),yr&&!Dt&&l.value===dn&&(Dt=!0,m(s.location).catch(ce=>{}));const V={};for(const ce in dn)Object.defineProperty(V,ce,{get:()=>l.value[ce],enumerable:!0});L.provide(Go,j),L.provide(wm,h_(V)),L.provide(El,l);const G=L.unmount;Ct.add(L),L.unmount=function(){Ct.delete(L),Ct.size<1&&(c=dn,X&&X(),X=null,l.value=dn,Dt=!1,se=!1),G()}}};function Pe(L){return L.reduce((j,V)=>j.then(()=>x(V)),Promise.resolve())}return Mn}function N0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Br(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Br(c,l))||s.push(l))}return[n,r,s]}function Sm(){return _t(Go)}var A0=Object.defineProperty,Pd=Object.getOwnPropertySymbols,O0=Object.prototype.hasOwnProperty,k0=Object.prototype.propertyIsEnumerable,Ld=(t,e,n)=>e in t?A0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P0=(t,e)=>{for(var n in e||(e={}))O0.call(e,n)&&Ld(t,n,e[n]);if(Pd)for(var n of Pd(e))k0.call(e,n)&&Ld(t,n,e[n]);return t},Rm="usehead",Dd="head:count",Ta="data-head-attrs",L0=(t,e,n)=>{const r=n.createElement(t);for(const s of Object.keys(e)){let i=e[s];s==="key"||i===!1||(s==="children"?r.textContent=i:r.setAttribute(s,i))}return r},Nm=t=>{if(t.key!==void 0)return{name:"key",value:t.key};if(t.name!==void 0)return{name:"name",value:t.name};if(t.property!==void 0)return{name:"property",value:t.property}},D0=()=>{const t=_t(Rm);if(!t)throw new Error("You may forget to apply app.use(head)");return t},x0=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],M0=t=>{const e=[];for(const n of Object.keys(t))if(t[n]!=null){if(n==="title")e.push({tag:n,props:{children:t[n]}});else if(n==="base")e.push({tag:n,props:P0({key:"default"},t[n])});else if(x0.includes(n)){const r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({tag:n,props:s})}):r&&e.push({tag:n,props:r})}}return e},xd=(t,e)=>{const n=t.getAttribute(Ta);if(n)for(const s of n.split(","))t.removeAttribute(s);const r=[];for(const s in e){const i=e[s];i!=null&&(i===!1?t.removeAttribute(s):t.setAttribute(s,i),r.push(s))}r.length?t.setAttribute(Ta,r.join(",")):t.removeAttribute(Ta)},F0=(t,e=window.document)=>{const n=e.head;let r=n.querySelector(`meta[name="${Dd}"]`);const s=r?Number(r.getAttribute("content")):0,i=[];if(r)for(let u=0,f=r.previousElementSibling;u<s;u++,f=f.previousElementSibling)f&&i.push(f);else r=e.createElement("meta"),r.setAttribute("name",Dd),r.setAttribute("content","0"),n.append(r);const o=[];let a,l={},c={};for(const u of t){if(u.tag==="title"){a=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(l,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(c,u.props);continue}if(u.tag==="meta"){const f=Nm(u.props);if(f){const h=[...n.querySelectorAll(`meta[${f.name}="${f.value}"]`)];for(const g of h)i.includes(g)||i.push(g)}}o.push(L0(u.tag,u.props,e))}i.forEach(u=>{u.nextSibling&&u.nextSibling.nodeType===Node.TEXT_NODE&&u.nextSibling.remove(),u.remove()}),a!==void 0&&(e.title=a),xd(e.documentElement,l),xd(e.body,c),o.forEach(u=>{n.insertBefore(u,r)}),r.setAttribute("content",""+o.length)},U0=()=>{let t=[];const e={install(n){n.config.globalProperties.$head=e,n.provide(Rm,e)},get headTags(){const n=[];return t.forEach(r=>{M0(r.value).forEach(i=>{if(i.tag==="meta"||i.tag==="base"){const o=Nm(i.props);if(o){let a=-1;for(let l=0;l<n.length;l++){const c=n[l],u=c.props[o.name],f=i.props[o.name];if(c.tag===i.tag&&u===f){a=l;break}}a!==-1&&n.splice(a,1)}}n.push(i)})}),n},addHeadObjs(n){t.push(n)},removeHeadObjs(n){t=t.filter(r=>r!==n)},updateDOM(n){F0(e.headTags,n)}};return e},z0=typeof window!="undefined",W0=t=>{const e=Xe(t),n=D0();n.addHeadObjs(e),z0&&(ZT(()=>{n.updateDOM()}),Pc(()=>{n.removeHeadObjs(e),n.updateDOM()}))};function H0(t,e,n,r={}){const{transformState:s,registerComponents:i=!0,useHead:o=!0,rootContainer:a="#app"}=r,l=typeof window!="undefined";async function c(u=!1,f){var h,g;const _=u?IS(t):CS(t);let I;o&&(I=U0(),_.use(I));const T=R0(_d({history:u?VR(e.base):$R(e.base)},e)),{routes:v}=e;i&&_.component("ClientOnly",u?ER:{render:()=>null});const C={app:_,head:I,isClient:l,router:T,routes:v,initialState:{},routePath:f};u&&(C.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||vR(window.__INITIAL_STATE__)),await(n==null?void 0:n(C)),_.use(T);let b,m=!0;if(T.beforeEach((O,A,P)=>{(m||b&&b===O.path)&&(m=!1,b=O.path,O.meta.state=C.initialState),P()}),!u){const O=(g=(h=C.routePath)!=null?h:e.base)!=null?g:"/";T.push(O),await T.isReady(),C.initialState=T.currentRoute.value.meta.state||{}}const R=(s==null?void 0:s(C.initialState))||yR(C.initialState);return SR(_d({},C),{initialState:R})}return l&&(async()=>{const{app:u,router:f}=await c(!0);await f.isReady(),u.mount(a,!0)})(),c}var V0="/img/bear-face.png";function $c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Am(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $0=Am,Om=new Zs("auth","Firebase",Am());/**
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
 */const _o=new Rl("@firebase/auth");function B0(t,...e){_o.logLevel<=Ee.WARN&&_o.warn(`Auth (${Xr}): ${t}`,...e)}function Di(t,...e){_o.logLevel<=Ee.ERROR&&_o.error(`Auth (${Xr}): ${t}`,...e)}/**
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
 */function Lt(t,...e){throw Bc(t,...e)}function zt(t,...e){return Bc(t,...e)}function j0(t,e,n){const r=Object.assign(Object.assign({},$0()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function Bc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Om.create(t,...e)}function re(t,e,...n){if(!t)throw Bc(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Di(e),new Error(e)}function Jt(t,e){t||Kt(e)}/**
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
 */function bl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function K0(){return Md()==="http:"||Md()==="https:"}function Md(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function G0(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K0()||Ig()||"connection"in navigator)?navigator.onLine:!0}function q0(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=wl()||lh()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jc(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class km{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const X0=new ui(3e4,6e4);function fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,r,s={}){return Pm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),km.fetch()(Lm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Pm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y0),e);try{const s=new Q0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw j0(t,u,c);Lt(t,u)}}catch(s){if(s instanceof Dn)throw s;Lt(t,"network-request-failed",{message:String(s)})}}async function qo(t,e,n,r,s={}){const i=await rs(t,e,n,r,s);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?jc(t.config,s):`${t.config.apiScheme}://${s}`}class Q0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),X0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function J0(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function Z0(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Os(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=ft(t),r=await n.getIdToken(e),s=Kc(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Os(wa(s.auth_time)),issuedAtTime:Os(wa(s.iat)),expirationTime:Os(wa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function Kc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const s=zi(n);return s?JSON.parse(s):(Di("Failed to decode base64 JWT payload"),null)}catch(s){return Di("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tN(t){const e=Kc(t);return re(e,"internal-error"),re(typeof e.exp!="undefined","internal-error"),re(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&nN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xs(t,Z0(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oN(i.providerUserInfo):[],a=iN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function sN(t){const e=ft(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oN(t){return t.map(e=>{var{providerId:n}=e,r=$c(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aN(t,e){const n=await Pm(t,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",km.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken!="undefined","internal-error"),re(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):tN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function hn(t,e){re(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return sN(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,J0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:m,isAnonymous:R,providerData:O,stsTokenManager:A}=n;re(b&&A,e,"internal-error");const P=Qs.fromJSON(this.name,A);re(typeof b=="string",e,"internal-error"),hn(f,e.name),hn(h,e.name),re(typeof m=="boolean",e,"internal-error"),re(typeof R=="boolean",e,"internal-error"),hn(g,e.name),hn(_,e.name),hn(I,e.name),hn(T,e.name),hn(v,e.name),hn(C,e.name);const x=new tr({uid:b,auth:e,email:h,emailVerified:m,displayName:f,isAnonymous:R,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:P,createdAt:v,lastLoginAt:C});return O&&Array.isArray(O)&&(x.providerData=O.map(W=>Object.assign({},W))),T&&(x._redirectEventId=T),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}}/**
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
 */const Fd=new Map;function Gt(t){Jt(t instanceof Function,"Expected a class definition");let e=Fd.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fd.set(t,e),e)}/**
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
 */class xm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xm.type="NONE";const Ud=xm;/**
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
 */function xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xi(this.userKey,s.apiKey,i),this.fullPersistenceKey=xi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pr(Gt(Ud),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Gt(Ud);const o=xi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=tr._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Pr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Pr(i,e,r))}}/**
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
 */function zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wm(e))return"Blackberry";if(Hm(e))return"Webos";if(Gc(e))return"Safari";if((e.includes("chrome/")||Fm(e))&&!e.includes("edge/"))return"Chrome";if(zm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mm(t=et()){return/firefox\//i.test(t)}function Gc(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fm(t=et()){return/crios\//i.test(t)}function Um(t=et()){return/iemobile/i.test(t)}function zm(t=et()){return/android/i.test(t)}function Wm(t=et()){return/blackberry/i.test(t)}function Hm(t=et()){return/webos/i.test(t)}function Yo(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lN(t=et()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cN(){return Cg()&&document.documentMode===10}function Vm(t=et()){return Yo(t)||zm(t)||Hm(t)||Wm(t)||/windows phone/i.test(t)||Um(t)}function uN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $m(t,e=[]){let n;switch(t){case"Browser":n=zd(et());break;case"Worker":n=`${zd(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}async function Bm(t,e){return rs(t,"GET","/v2/recaptchaConfig",fi(t,e))}function Wd(t){return t!==void 0&&t.enterprise!==void 0}class jm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function fN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Km(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fN().appendChild(r)})}function dN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hN="https://www.google.com/recaptcha/enterprise.js?render=",pN="recaptcha-enterprise",_N="NO_RECAPTCHA";class Gm{constructor(e){this.type=pN,this.auth=di(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Bm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new jm(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(_N)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Wd(window.grecaptcha))s(a,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Km(hN+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hd(t,e,n,r=!1){const s=new Gm(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class mN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class gN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}async initializeRecaptchaConfig(){const e=await Bm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new jm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Gm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(t){return ft(t)}class Vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pg(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function yN(t,e){const n=Al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hi(i,e!=null?e:{}))return s;Lt(s,"already-initialized")}return n.initialize({options:e})}function vN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EN(t,e,n){const r=di(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=qm(e),{host:o,port:a}=bN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||IN()}function qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$d(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$d(o)}}}function $d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function CN(t,e){return rs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Sa(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",fi(t,e))}/**
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
 */async function TN(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}async function wN(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",fi(t,e))}/**
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
 */class Js extends qc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Hd(e,r,"signInWithPassword");return Sa(e,s)}else return Sa(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Hd(e,r,"signInWithPassword");return Sa(e,i)}else return Promise.reject(s)});case"emailLink":return TN(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return CN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wN(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lr(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",fi(t,e))}/**
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
 */const SN="http://localhost";class ur extends qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$c(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:SN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}}/**
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
 */function RN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NN(t){const e=ps(_s(t)).link,n=e?ps(_s(e)).deep_link_id:null,r=ps(_s(t)).deep_link_id;return(r?ps(_s(r)).link:null)||r||n||e||t}class Yc{constructor(e){var n,r,s,i,o,a;const l=ps(_s(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=RN((s=l.mode)!==null&&s!==void 0?s:null);re(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NN(e);try{return new Yc(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yc.parseLink(n);return re(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ym{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends Ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends hi{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class En extends hi{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class bn extends hi{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tr._fromIdTokenResponse(e,r,s),o=Bd(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bd(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends Dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function Xm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function AN(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function ON(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Xs(t,Xm(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Kc(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
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
 */async function Qm(t,e,n=!1){const r="signIn",s=await Xm(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function kN(t,e){return Qm(di(t),e)}function PN(t,e,n){return kN(ft(t),ss.credential(e,n))}function LN(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function DN(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function Jm(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function xN(t){return ft(t).signOut()}const yo="__sak";/**
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
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function MN(){const t=et();return Gc(t)||Yo(t)}const FN=1e3,UN=10;class eg extends Zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MN()&&uN(),this.fallbackToPolling=Vm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eg.type="LOCAL";const zN=eg;/**
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
 */class tg extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tg.type="SESSION";const ng=tg;/**
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
 */function WN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await WN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
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
 */function Xc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Xc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wt(){return window}function VN(t){Wt().location.href=t}/**
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
 */function rg(){return typeof Wt().WorkerGlobalScope!="undefined"&&typeof Wt().importScripts=="function"}async function $N(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jN(){return rg()?self:null}/**
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
 */const sg="firebaseLocalStorageDb",KN=1,vo="firebaseLocalStorage",ig="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function GN(){const t=indexedDB.deleteDatabase(sg);return new pi(t).toPromise()}function Il(){const t=indexedDB.open(sg,KN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vo,{keyPath:ig})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await GN(),e(await Il()))})})}async function jd(t,e,n){const r=Qo(t,!0).put({[ig]:e,value:n});return new pi(r).toPromise()}async function qN(t,e){const n=Qo(t,!1).get(e),r=await new pi(n).toPromise();return r===void 0?null:r.value}function Kd(t,e){const n=Qo(t,!0).delete(e);return new pi(n).toPromise()}const YN=800,XN=3;class og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new HN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await jd(e,yo,"1"),await Kd(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qo(s,!1).getAll();return new pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}og.type="LOCAL";const QN=og;new ui(3e4,6e4);/**
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
 */function JN(t,e){return e?Gt(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qc extends qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZN(t){return Qm(t.auth,new Qc(t),t.bypassAuthState)}function eA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),ON(n,new Qc(t),t.bypassAuthState)}async function tA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),AN(n,new Qc(t),t.bypassAuthState)}/**
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
 */class ag{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZN;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:Lt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nA=new ui(2e3,1e4);class br extends ag{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}br.currentPopupAction=null;/**
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
 */const rA="pendingRedirect",Mi=new Map;class sA extends ag{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const r=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(t,e){const n=lA(e),r=aA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function oA(t,e){Mi.set(t._key(),e)}function aA(t){return Gt(t._redirectPersistence)}function lA(t){return xi(rA,t.config.apiKey,t.name)}async function cA(t,e,n=!1){const r=di(t),s=JN(r,e),o=await new sA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lg(t);default:return!1}}/**
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
 */async function hA(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
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
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_A=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hA(t);for(const n of e)try{if(gA(n))return}catch{}Lt(t,"unauthorized-domain")}function gA(t){const e=bl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_A.test(n))return!1;if(pA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yA=new ui(3e4,6e4);function qd(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vA(t){return new Promise((e,n)=>{var r,s,i;function o(){qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qd(),n(zt(t,"network-request-failed"))},timeout:yA.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=dN("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},Km(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function EA(t){return Fi=Fi||vA(t),Fi}/**
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
 */const bA=new ui(5e3,15e3),IA="__/auth/iframe",CA="emulator/auth/iframe",TA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SA(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jc(e,CA):`https://${t.config.authDomain}/${IA}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},s=wA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yr(r).slice(1)}`}async function RA(t){const e=await EA(t),n=Wt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:SA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},bA.get());function l(){Wt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const NA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AA=500,OA=600,kA="_blank",PA="http://localhost";class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LA(t,e,n,r=AA,s=OA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NA),{width:r.toString(),height:s.toString(),top:i,left:o}),c=et().toLowerCase();n&&(a=Fm(c)?kA:n),Mm(c)&&(e=e||PA,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(lN(c)&&a!=="_self")return DA(e||"",a),new Yd(null);const f=window.open(e||"",a,u);re(f,t,"popup-blocked");try{f.focus()}catch{}return new Yd(f)}function DA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xA="__/auth/handler",MA="emulator/auth/handler",FA=encodeURIComponent("fac");async function Xd(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:s};if(e instanceof Ym){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Na(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof hi){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${FA}=${encodeURIComponent(l)}`:"";return`${UA(t)}?${Yr(a).slice(1)}${c}`}function UA({config:t}){return t.emulator?jc(t,MA):`https://${t.authDomain}/${xA}`}/**
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
 */const Ra="webStorageSupport";class zA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ng,this._completeRedirectFn=cA,this._overrideRedirectResult=oA}async _openPopup(e,n,r,s){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xd(e,n,r,bl(),s);return LA(e,o,Xc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xd(e,n,r,bl(),s);return VN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RA(e),r=new fA(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ra,{type:Ra},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ra];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vm()||Gc()||Yo()}}const WA=zA;var Qd="@firebase/auth",Jd="0.23.2";/**
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
 */class HA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $A(t){xr(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(t)},c=new gN(r,s,i,l);return vN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new nr("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new HA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Qd,Jd,VA(t)),Tn(Qd,Jd,"esm2017")}/**
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
 */const BA=5*60,jA=ah("authIdTokenMaxAge")||BA;let Zd=null;const KA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jA)return;const s=n==null?void 0:n.token;Zd!==s&&(Zd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cg(t=ph()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yN(t,{popupRedirectResolver:WA,persistence:[QN,zN,ng]}),r=ah("authTokenSyncURL");if(r){const i=KA(r);DN(n,i,()=>i(n.currentUser)),LN(n,o=>i(o))}const s=ih("auth");return s&&EN(n,`http://${s}`),n}$A("Browser");var eh={};const GA={class:"w-full h-screen flex flex-col items-center justify-center"},qA={class:"w-450px p-2 bg-light-500 rounded-3xl"},YA=ve("div",{class:"flex font-bold justify-center mt-6"},[ve("img",{class:"h-20 w-20",src:V0})],-1),XA=ve("h2",{class:"text-3xl text-center text-gray-700 mb-4"}," Bear Seat manager ",-1),QA={class:"px-12 pb-10"},JA={class:"w-full mb-2"},ZA={class:"w-full mb-2"},eO={class:"w-full mb-2"},ug=nn({__name:"index",setup(t){const e=Xe(""),n=Xe(""),r=Xe(!1),s=Xe(!1),i=Xe(!1),o=Xe(!1),a=cg(),l=Sm();Jm(a,u=>{u&&l.push("/dashboard")});function c(){PN(a,e.value,n.value).then(u=>{l.push("/dashboard")}).catch(u=>{r.value=!0,u.message==="Firebase: Error (auth/user-not-found)."&&(s.value=!0),u.message==="Firebase: Error (auth/invalid-email)."&&(o.value=!0),u.message==="Firebase: Error (auth/wrong-password)."&&(i.value=!0)})}return(u,f)=>(li(),j_("div",GA,[ve("div",qA,[YA,XA,ve("div",QA,[ve("div",JA,[pr(ve("input",{"onUpdate:modelValue":f[0]||(f[0]=h=>e.value=h),type:"text",placeholder:"E-Mail Adresse",class:"-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"},null,512),[[Xf,e.value]])]),ve("div",ZA,[pr(ve("input",{"onUpdate:modelValue":f[1]||(f[1]=h=>n.value=h),type:"password",placeholder:"Passwort",class:"-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"},null,512),[[Xf,n.value]])]),pr(ve("div",eO,[pr(ve("p",null," Bitte eine korrekte E-Mail Adresse eingeben. ",512),[[Ni,o.value]]),pr(ve("p",null," Die E-Mail Adresse ist nicht bekannt und es konnte kein Konto mit dieser Adresse gefunden werden. ",512),[[Ni,s.value]]),pr(ve("p",null," Das Passwort ist lieder nicht korrekt und passt nicht zu dieser E-Mail Adresse. ",512),[[Ni,i.value]])],512),[[Ni,r.value]]),ve("div",null,[ve("button",{class:"w-50 py-2 mt-4 rounded-full focus:outline-none bg-bearpink hover:bg-bearpinkdark text-white",onClick:c}," Login ")])])])]))}});typeof eh=="function"&&eh(ug);const tO=[{name:"rent-reboarder-seats",path:"/rent/reboarder-seats",component:()=>ke(()=>import("./reboarder-seats.de19d536.js"),["assets/reboarder-seats.de19d536.js","assets/RentScheduler.46972c72.js","assets/RentScheduler.3836c70b.css","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"rent-following-seats",path:"/rent/following-seats",component:()=>ke(()=>import("./following-seats.ac4377e1.js"),["assets/following-seats.ac4377e1.js","assets/RentScheduler.46972c72.js","assets/RentScheduler.3836c70b.css","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"rent-equipments",path:"/rent/equipments",component:()=>ke(()=>import("./equipments.ede2656d.js"),["assets/equipments.ede2656d.js","assets/RentScheduler.46972c72.js","assets/RentScheduler.3836c70b.css","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"rent-baby-seats",path:"/rent/baby-seats",component:()=>ke(()=>import("./baby-seats.73e9e3bc.js"),["assets/baby-seats.73e9e3bc.js","assets/RentScheduler.46972c72.js","assets/RentScheduler.3836c70b.css","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"reboarder-seats",path:"/reboarder-seats",component:()=>ke(()=>import("./reboarder-seats.6320b8f9.js"),["assets/reboarder-seats.6320b8f9.js","assets/SeatList.24dca814.js","assets/SeatList.56405dca.css","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"README",path:"/readme",component:()=>ke(()=>import("./README.5679e589.js"),[]),props:!0},{name:"passwort-vergessen",path:"/passwort-vergessen",component:()=>ke(()=>import("./passwort-vergessen.18cff890.js"),["assets/passwort-vergessen.18cff890.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"home"}},{name:"original",path:"/original",component:()=>ke(()=>import("./original.514d382f.js"),[]),props:!0,meta:{layout:"home"}},{name:"members",path:"/members",component:()=>ke(()=>import("./members.94cc3fcc.js"),["assets/members.94cc3fcc.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"following-seats",path:"/following-seats",component:()=>ke(()=>import("./following-seats.d5cbc4c7.js"),["assets/following-seats.d5cbc4c7.js","assets/SeatList.24dca814.js","assets/SeatList.56405dca.css","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"equipments",path:"/equipments",component:()=>ke(()=>import("./equipments.65e0f9ad.js"),["assets/equipments.65e0f9ad.js","assets/SeatList.56405dca.css","assets/EquipmentDetails.d6306922.js","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"dashboard",path:"/dashboard",component:()=>ke(()=>import("./dashboard.185ae0ed.js"),["assets/dashboard.185ae0ed.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"baby-seats",path:"/baby-seats",component:()=>ke(()=>import("./baby-seats.833fc28d.js"),["assets/baby-seats.833fc28d.js","assets/SeatList.24dca814.js","assets/SeatList.56405dca.css","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js","assets/Modal.debb7eac.js","assets/Modal.b9d6a1c9.css","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0,meta:{layout:"default"}},{name:"index",path:"/",component:ug,props:!0,meta:{layout:"home"}},{name:"reboarder-seat-seatindex",path:"/reboarder-seat/:seatindex",component:()=>ke(()=>import("./_seatindex_.6acbd350.js"),["assets/_seatindex_.6acbd350.js","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js"]),props:!0},{name:"following-seat-seatindex",path:"/following-seat/:seatindex",component:()=>ke(()=>import("./_seatindex_.27dbc3f0.js"),["assets/_seatindex_.27dbc3f0.js","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js"]),props:!0},{name:"equipment-equipmentindex",path:"/equipment/:equipmentindex",component:()=>ke(()=>import("./_equipmentindex_.1958fb00.js"),["assets/_equipmentindex_.1958fb00.js","assets/EquipmentDetails.d6306922.js","assets/dayjs.min.265772de.js"]),props:!0},{name:"baby-seat-seatindex",path:"/baby-seat/:seatindex",component:()=>ke(()=>import("./_seatindex_.c5e0cbab.js"),["assets/_seatindex_.c5e0cbab.js","assets/SeatDetails.91f8cc35.js","assets/dayjs.min.265772de.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>ke(()=>import("./_...all_.ccb55343.js"),[]),props:!0,meta:{layout:404}}];const nO={id:"app"},rO={id:"navbar-main",class:"navbar is-fixed-top"},sO={id:"navbar-menu",class:"navbar-menu"},iO={class:"navbar-end"},oO={class:"navbar-item dropdown has-divider has-user-avatar"},aO={class:"navbar-link"},lO={class:"is-user-name"},cO=ve("i",{class:"mdi mdi-logout"},null,-1),uO=[cO],fO=ve("span",null,"Log out",-1),dO=Mw('<aside class="aside is-placed-left is-expanded"><div class="aside-tools"> Bear Seat Manager </div><div class="menu is-menu-main"><p class="menu-label"> \xDCbersicht </p><ul class="menu-list"><li><a href="/dashboard"><span class="icon"><i class="mdi mdi-chart-timeline"></i></span><span class="menu-item-label">Dashboard</span></a></li></ul><p class="menu-label"> Miete </p><ul class="menu-list"><li><a href="/rent/reboarder-seats"><span class="icon"><i class="mdi mdi-car-child-seat"></i></span><span class="menu-item-label">Reboarder</span></a></li><li><a href="/rent/following-seats"><span class="icon"><i class="mdi mdi-seatbelt"></i></span><span class="menu-item-label">Folgesitze</span></a></li><li><a href="/rent/baby-seats"><span class="icon"><i class="mdi mdi-baby"></i></span><span class="menu-item-label">Babyschale</span></a></li><li><a href="/rent/equipments"><span class="icon"><i class="mdi mdi-tag"></i></span><span class="menu-item-label">Zubeh\xF6r</span></a></li></ul><p class="menu-label"> Inventar </p><ul class="menu-list"><li><a href="/reboarder-seats"><span class="icon"><i class="mdi mdi-car-child-seat"></i></span><span class="menu-item-label">Reboarder</span></a></li><li><a href="/following-seats"><span class="icon"><i class="mdi mdi-seatbelt"></i></span><span class="menu-item-label">Folgesitze</span></a></li><li><a href="/baby-seats"><span class="icon"><i class="mdi mdi-baby"></i></span><span class="menu-item-label">Babyschale</span></a></li><li><a href="/equipments" class="has-icon"><span class="icon"><i class="mdi mdi-tag"></i></span><span class="menu-item-label">Zubeh\xF6r</span></a></li></ul><p class="menu-label"> \xDCber </p><ul class="menu-list"><li><a href="/help" class="has-icon"><span class="icon"><i class="mdi mdi-help-circle"></i></span><span class="menu-item-label">Hilfe</span></a></li></ul></div></aside>',1),hO=nn({__name:"default",setup(t){const e=cg(),n=Sm(),r=Xe("");Jm(e,i=>{i?r.value=i.email:n.push("/")});function s(){xN(e).then(()=>{n.push("/")}).catch(i=>{console.log(i)})}return(i,o)=>{const a=S_("router-view");return li(),j_("div",nO,[ve("nav",rO,[ve("div",sO,[ve("div",iO,[ve("div",oO,[ve("a",aO,[ve("div",lO,[ve("span",null,aT(r.value),1)])])]),ve("a",{title:"Log out",class:"navbar-item desktop-icon-only"},[ve("span",{class:"icon c-logout",onClick:s},uO),fO])])])]),dO,Ue(a)])}}}),pO={404:()=>ke(()=>import("./404.99b70592.js"),[]),default:hO,home:()=>ke(()=>import("./home.a8de26a2.js"),["assets/home.a8de26a2.js","assets/home.d224932b.css","assets/plugin-vue_export-helper.21dcd24c.js"])};function _O(t){return t.map(e=>{var n;return{path:e.path,component:pO[((n=e.meta)==null?void 0:n.layout)||"default"],children:[{...e,path:""}]}})}const mO=nn({__name:"App",setup(t){return W0({title:"Bear Seat Manager",meta:[{name:"description",content:"Seat Manager for company Familie B\xE4r"}],link:[{rel:"stylesheet",href:"https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/sweetalert2@11.3.0/dist/sweetalert2.min.css"}],script:[{src:"https://cdn.jsdelivr.net/npm/gantt-schedule-timeline-calendar/dist/gstc.wasm.umd.min.js"}]}),(e,n)=>{const r=S_("router-view");return li(),Mc(r)}}});const gO=_O(tO);H0(mO,{routes:gO},t=>{Object.values({"./modules/db.ts":Qb,"./modules/i18n.ts":JS,"./modules/nprogress.ts":tR,"./modules/pinia.ts":uR,"./modules/pwa.ts":pR}).map(e=>{var n;return(n=e.install)==null?void 0:n.call(e,t)})});export{W0 as A,Mw as B,SO as C,Sm as D,Hc as E,Qe as F,Oe as G,wO as H,S_ as I,X_ as T,V0 as _,qe as a,j_ as b,Mc as c,nn as d,ve as e,TO as f,CO as g,yO as h,Xb as i,vO as j,kc as k,EO as l,Ue as m,jT as n,li as o,G_ as p,Ni as q,Xe as r,Fb as s,aT as t,Nr as u,Xf as v,pr as w,IO as x,ZS as y,bO as z};
