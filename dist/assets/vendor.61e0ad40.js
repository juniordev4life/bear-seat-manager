var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;"undefined"!=typeof require&&require;
/**
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
 */
const s=!1,o="${JSCORE_VERSION}",a=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+o+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw Error();const l=t<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){try{return u.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=p(e[n],t[n]));return e}
/**
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
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function g(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function v(){return!0===s}
/**
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
 */class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(w,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new y(r,o,n)}}const w=/\{\$([^}]+)}/g;
/**
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
 */function C(e){return JSON.parse(e)}function I(e){return JSON.stringify(e)}
/**
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
 */const k=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=C(h(s[0])||""),n=C(h(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(s){}return{header:t,claims:n,data:r,signature:i}};
/**
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
 */
function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function S(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(P(n)&&P(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}
/**
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
 */function O(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function x(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class L{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):u<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const e=(s<<5|s>>>27)+r+c+i+n[u]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(){}function F(e,t){return`${e} failed: ${t} argument `}
/**
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
 */const U=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function j(e){return e&&e._delegate?e._delegate:e}class q{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */
/**
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
 */
class W{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new f;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class V{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new W(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var $,H;(H=$||($={}))[H.DEBUG=0]="DEBUG",H[H.VERBOSE=1]="VERBOSE",H[H.INFO=2]="INFO",H[H.WARN=3]="WARN",H[H.ERROR=4]="ERROR",H[H.SILENT=5]="SILENT";const z={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},B=$.INFO,G={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},K=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=G[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Y{constructor(e){this.name=e,this._logLevel=B,this._logHandler=K,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}
/**
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
 */class J{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Q="@firebase/app",X=new Y("@firebase/app"),Z={[Q]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ee=new Map,te=new Map;function ne(e,t){try{e.container.addComponent(t)}catch(n){X.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function re(e){const t=e.name;if(te.has(t))return X.debug(`There were multiple attempts to register component ${t}.`),!1;te.set(t,e);for(const n of ee.values())ne(n,e);return!0}function ie(e,t){return e.container.getProvider(t)}
/**
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
 */const se=new b("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class oe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new q("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}
/**
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
 */function ae(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw se.create("bad-app-name",{appName:String(r)});const i=ee.get(r);if(i){if(N(e,i.options)&&N(n,i.config))return i;throw se.create("duplicate-app",{appName:r})}const s=new V(r);for(const a of te.values())s.addComponent(a);const o=new oe(e,n,s);return ee.set(r,o),o}function le(e="[DEFAULT]"){const t=ee.get(e);if(!t)throw se.create("no-app",{appName:e});return t}function ce(e,t,n){var r;let i=null!==(r=Z[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void X.warn(e.join(" "))}re(new q(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */var ue;ue="",re(new q("platform-logger",(e=>new J(e)),"PRIVATE")),ce(Q,"0.7.8",ue),ce(Q,"0.7.8","esm2017"),ce("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ce("firebase","9.4.1","app");
/**
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
 */
let he="";
/**
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
 */
class de{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),I(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:C(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class pe{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return T(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const fe=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new de(t)}}catch(t){}return new pe},me=fe("localStorage"),_e=fe("sessionStorage"),ge=new Y("@firebase/database"),ve=function(){let e=1;return function(){return e++}}(),ye=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,a(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new L;n.update(t);const r=n.digest();return u.encodeByteArray(r)},be=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=be.apply(null,r):t+="object"==typeof r?I(r):r,t+=" "}return t};let we=null,Ce=!0;const Ie=function(...e){var t,n;if(!0===Ce&&(Ce=!1,null===we&&!0===_e.get("logging_enabled")&&(t=!0,a(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(ge.logLevel=$.VERBOSE,we=ge.log.bind(ge),n&&_e.set("logging_enabled",!0)):"function"==typeof t?we=t:(we=null,_e.remove("logging_enabled")))),we){const t=be.apply(null,e);we(t)}},ke=function(e){return function(...t){Ie(e,...t)}},Te=function(...e){const t="FIREBASE INTERNAL ERROR: "+be(...e);ge.error(t)},Ee=function(...e){const t=`FIREBASE FATAL ERROR: ${be(...e)}`;throw ge.error(t),new Error(t)},Se=function(...e){const t="FIREBASE WARNING: "+be(...e);ge.warn(t)},Re=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ne="[MIN_NAME]",Pe="[MAX_NAME]",Oe=function(e,t){if(e===t)return 0;if(e===Ne||t===Pe)return-1;if(t===Ne||e===Pe)return 1;{const n=je(e),r=je(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},xe=function(e,t){return e===t?0:e<t?-1:1},Ae=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+I(t))},Le=function(e){if("object"!=typeof e||null===e)return I(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=I(t[r]),n+=":",n+=Le(e[t[r]]);return n+="}",n},Me=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function De(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Fe=function(e){a(!Re(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const l=[];for(o=52;o;o-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(n?1:0),l.reverse();const c=l.join("");let u="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const Ue=new RegExp("^-?(0*)\\d{1,10}$"),je=function(e){if(Ue.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},qe=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Se("Exception was thrown by user callback.",e),t}),Math.floor(0))}},We=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class Ve{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class $e{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Se(e)}}class He{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}He.OWNER="owner";
/**
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
 */
const ze=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class Be{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=me.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&me.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ge(e,t,n){let r;if(a("string"==typeof t,"typeof type must == string"),a("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return De(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
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
 */class Ke{constructor(){this.counters_={}}incrementCounter(e,t=1){T(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return d(this.counters_)}}
/**
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
 */const Ye={},Je={};function Qe(e){const t=e.toString();return Ye[t]||(Ye[t]=new Ke),Ye[t]}
/**
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
 */
class Xe{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&qe((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */class Ze{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ke(e),this.stats_=Qe(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ge(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Xe(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new et(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ze.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ze.forceAllow_=!0}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){return!!Ze.forceAllow_||!(Ze.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=I(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=function(e){const t=c(e);return u.encodeByteArray(t,!0)}(t),r=Me(n,1840);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=I(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class et{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ve(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=et.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){Ie("frame writing exception"),i.stack&&Ie(i.stack),Ie(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
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
 */let tt=null;"undefined"!=typeof MozWebSocket?tt=MozWebSocket:"undefined"!=typeof WebSocket&&(tt=WebSocket);class nt{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ke(this.connId),this.stats_=Qe(t),this.connURL=nt.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&ze.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),Ge(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,me.set("previous_websocket_failure",!0);try{if(v());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new tt(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==tt&&!nt.forceDisallow_}static previouslyFailed(){return me.isInMemoryStorage||!0===me.get("previous_websocket_failure")}markConnectionHealthy(){me.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=C(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(a(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=I(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Me(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2,nt.healthyTimeout=3e4;
/**
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
 */
class rt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ze,nt]}initTransports_(e){const t=nt&&nt.isAvailable();let n=t&&!nt.previouslyFailed();if(e.webSocketOnly&&(t||Se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[nt];else{const e=this.transports_=[];for(const t of rt.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
 */class it{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ke("c:"+this.id+":"),this.transportManager_=new rt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=We((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ae("t",e),n=Ae("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ae("t",e),n=Ae("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ae("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Te("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Te("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),We((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):We((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(me.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class st{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},a(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){a(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class at extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||_()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new at}getInitialEvent(e){return a("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ct(){return new lt("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ft(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function gt(e){return e.pieceNum_>=e.pieces_.length}function vt(e,t){const n=ut(e),r=ut(t);if(null===n)return t;if(n===r)return vt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function yt(e,t){if(ht(e)!==ht(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ht(e)>ht(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class wt{constructor(e,t){this.errorPrefix_=t,this.parts_=ft(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=U(this.parts_[n]);Ct(this)}}function Ct(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+It(e))}function It(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class kt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new kt}getInitialEvent(e){return a("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */class Tt extends st{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=ke("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!v())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&at.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(I(i)),a(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new f,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),a(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),a(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Tt.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&T(e,"w")){const n=E(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=k(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=k(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),a(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+I(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Te("Unrecognized action received from server: "+I(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){a(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(e){a(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,a]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=a&&a.token,l=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{Se(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Se(e),c())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],S(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Le(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+he.replace(/\./g,"-")]=1,_()?e["framework.cordova"]=1:g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=at.getInstance().currentlyOnline();return S(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0,Tt.nextConnectionId_=0;
/**
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
 */
class Et{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Et(e,t)}}
/**
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
 */class St{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Et(Ne,e),r=new Et(Ne,t);return 0!==this.compare(n,r)}minPost(){return Et.MIN}}
/**
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
 */let Rt;class Nt extends St{static get __EMPTY_NODE(){return Rt}static set __EMPTY_NODE(e){Rt=e}compare(e,t){return Oe(e.name,t.name)}isDefinedOn(e){throw l("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Et.MIN}maxPost(){return new Et(Pe,Rt)}makePost(e,t){return a("string"==typeof e,"KeyIndex indexValue must always be a string."),new Et(e,Rt)}toString(){return".key"}}const Pt=new Nt;
/**
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
 */class Ot{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:xt.RED,this.left=null!=r?r:At.EMPTY_NODE,this.right=null!=i?i:At.EMPTY_NODE}copy(e,t,n,r,i){return new xt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return At.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xt.RED=!0,xt.BLACK=!1;class At{constructor(e,t=At.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new At(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,xt.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ot(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ot(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ot(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ot(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Lt(e,t){return Oe(e.name,t.name)}function Mt(e,t){return Oe(e,t)}
/**
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
 */let Dt;At.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new xt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ft=function(e){return"number"==typeof e?"number:"+Fe(e):"string:"+e},Ut=function(e){if(e.isLeafNode()){const t=e.val();a("string"==typeof t||"number"==typeof t||"object"==typeof t&&T(t,".sv"),"Priority must be a string or number.")}else a(e===Dt||e.isEmpty(),"priority of unexpected type.");a(e===Dt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let jt,qt,Wt;class Vt{constructor(e,t=Vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,a(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ut(this.priorityNode_)}static set __childrenNodeConstructor(e){jt=e}static get __childrenNodeConstructor(){return jt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vt(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return gt(e)?this:".priority"===ut(e)?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(a(".priority"!==n||1===ht(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ft(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Fe(this.value_):this.value_,this.lazyHash_=ye(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vt.__childrenNodeConstructor?-1:(a(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Vt.VALUE_TYPE_ORDER.indexOf(t),i=Vt.VALUE_TYPE_ORDER.indexOf(n);return a(r>=0,"Unknown leaf type: "+t),a(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];const $t=new class extends St{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Oe(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Et.MIN}maxPost(){return new Et(Pe,new Vt("[PRIORITY-POST]",Wt))}makePost(e,t){const n=qt(e);return new Et(t,new Vt("[PRIORITY-POST]",n))}toString(){return".priority"}},Ht=Math.log(2);
/**
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
 */class zt{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ht,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bt=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new xt(a,o.node,xt.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new xt(a,o.node,xt.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new xt(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,xt.BLACK):(a(r,xt.BLACK),a(r,xt.RED))}return s}(new zt(e.length));return new At(r||t,s)};
/**
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
 */let Gt;const Kt={};class Yt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return a(Kt&&$t,"ChildrenNode.ts has not been loaded"),Gt=Gt||new Yt({".priority":Kt},{".priority":$t}),Gt}get(e){const t=E(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof At?t:null}hasIndex(e){return T(this.indexSet_,e.toString())}addIndex(e,t){a(e!==Pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Et.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Bt(n,e.getCompare()):Kt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=s,new Yt(u,c)}addToIndexes(e,t){const n=R(this.indexes_,((n,r)=>{const i=E(this.indexSet_,r);if(a(i,"Missing index implementation for "+r),n===Kt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Et.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Bt(n,i.getCompare())}return Kt}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Et(e.name,r))),i.insert(e,e.node)}}));return new Yt(n,this.indexSet_)}removeFromIndexes(e,t){const n=R(this.indexes_,(n=>{if(n===Kt)return n;{const r=t.get(e.name);return r?n.remove(new Et(e.name,r)):n}}));return new Yt(n,this.indexSet_)}}
/**
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
 */let Jt;class Qt{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ut(this.priorityNode_),this.children_.isEmpty()&&a(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jt||(Jt=new Qt(new At(Mt),null,Yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jt}updatePriority(e){return this.children_.isEmpty()?this:new Qt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Jt:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(a(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Et(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Jt:this.priorityNode_;return new Qt(r,s,i)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{a(".priority"!==ut(e)||1===ht(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild($t,((s,o)=>{t[s]=o.val(e),n++,i&&Qt.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ft(this.getPriority().val())+":"),this.forEachChild($t,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ye(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Et(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Et(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Et(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Et.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Et.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xt?-1:0}withIndex(e){if(e===Pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Qt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator($t),n=t.getIterator($t);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Pt?null:this.indexMap_.get(e.toString())}}Qt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Xt=new class extends Qt{constructor(){super(new At(Mt),Qt.EMPTY_NODE,Yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Qt.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Et,{MIN:{value:new Et(Ne,Qt.EMPTY_NODE)},MAX:{value:new Et(Pe,Xt)}}),Nt.__EMPTY_NODE=Qt.EMPTY_NODE,Vt.__childrenNodeConstructor=Qt,Dt=Xt,function(e){Wt=e}(Xt);function Zt(e,t=null){if(null===e)return Qt.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),a(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Vt(e,Zt(t))}if(e instanceof Array){let n=Qt.EMPTY_NODE;return De(e,((t,r)=>{if(T(e,t)&&"."!==t.substring(0,1)){const e=Zt(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Zt(t))}{const n=[];let r=!1;if(De(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Zt(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Et(e,i)))}})),0===n.length)return Qt.EMPTY_NODE;const i=Bt(n,Lt,(e=>e.name),Mt);if(r){const e=Bt(n,$t.getCompare());return new Qt(i,Zt(t),new Yt({".priority":e},{".priority":$t}))}return new Qt(i,Zt(t),Yt.Default)}}!function(e){qt=e}(Zt);
/**
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
 */
class en extends St{constructor(e){super(),this.indexPath_=e,a(!gt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Oe(e.name,t.name):i}makePost(e,t){const n=Zt(e),r=Qt.EMPTY_NODE.updateChild(this.indexPath_,n);return new Et(t,r)}maxPost(){const e=Qt.EMPTY_NODE.updateChild(this.indexPath_,Xt);return new Et(Pe,e)}toString(){return ft(this.indexPath_,0).join("/")}}
/**
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
 */const tn=new class extends St{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Oe(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Et.MIN}maxPost(){return Et.MAX}makePost(e,t){const n=Zt(e);return new Et(t,n)}toString(){return".value"}};
/**
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
 */function nn(e){return{type:"value",snapshotNode:e}}function rn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function sn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function on(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class an{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){a(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(sn(t,o)):a(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(rn(t,n)):s.trackChildChange(on(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild($t,((e,r)=>{t.hasChild(e)||n.trackChildChange(sn(e,r))})),t.isLeafNode()||t.forEachChild($t,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(on(t,r,i))}else n.trackChildChange(rn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Qt.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class ln{constructor(e){this.indexedFilter_=new an(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ln.getStartPost_(e),this.endPost_=ln.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Et(t,n))||(n=Qt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Qt.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Qt.EMPTY_NODE);const i=this;return t.forEachChild($t,((e,t)=>{i.matches(new Et(e,t))||(r=r.updateImmediateChild(e,Qt.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class cn{constructor(e){this.rangedFilter_=new ln(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Et(t,n))||(n=Qt.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Qt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Qt.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(Qt.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Qt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;a(o.numChildren()===this.limit_,"");const l=new Et(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(o.hasChild(t)){const e=o.getImmediateChild(t);let a=r.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=a&&(a.name===t||o.hasChild(a.name));)a=r.getChildAfterChild(this.index_,a,this.reverse_);const h=null==a?1:s(a,l);if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(on(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(sn(t,e));const n=o.updateImmediateChild(t,Qt.EMPTY_NODE);return null!=a&&this.rangedFilter_.matches(a)?(null!=i&&i.trackChildChange(rn(a.name,a.node)),n.updateImmediateChild(a.name,a.node)):n}}return n.isEmpty()?e:u&&s(c,l)>=0?(null!=i&&(i.trackChildChange(sn(c.name,c.node)),i.trackChildChange(rn(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,Qt.EMPTY_NODE)):e}}
/**
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
 */class un{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$t}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return a(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return a(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ne}hasEnd(){return this.endSet_}getIndexEndValue(){return a(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return a(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return a(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$t}copy(){const e=new un;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hn(e){const t={};if(e.isDefault())return t;let n;return e.index_===$t?n="$priority":e.index_===tn?n="$value":e.index_===Pt?n="$key":(a(e.index_ instanceof en,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=I(n),e.startSet_&&(t.startAt=I(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+I(e.indexStartName_))),e.endSet_&&(t.endAt=I(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+I(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function dn(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==$t&&(t.i=e.index_.toString()),t}
/**
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
 */class pn extends st{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ke("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(a(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=pn.getListenId_(e,n),o={};this.listens_[s]=o;const a=hn(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),E(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=pn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=hn(e._queryParams),n=e._path.toString(),r=new f;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+O(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=C(o.responseText)}catch(e){Se("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Se("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
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
 */class fn{constructor(){this.rootNode_=Qt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function mn(){return{value:null,children:new Map}}function _n(e,t,n){if(gt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ut(t);e.children.has(r)||e.children.set(r,mn());_n(e.children.get(r),t=dt(t),n)}}function gn(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,r)=>{gn(r,new lt(t.toString()+"/"+e),n)}))}class vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&De(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */class yn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vn(e);const n=1e4+2e4*Math.random();We(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;De(e,((e,r)=>{r>0&&T(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),We(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
 */var bn,wn;function Cn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(wn=bn||(bn={}))[wn.OVERWRITE=0]="OVERWRITE",wn[wn.MERGE=1]="MERGE",wn[wn.ACK_USER_WRITE=2]="ACK_USER_WRITE",wn[wn.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class In{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=bn.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(gt(this.path)){if(null!=this.affectedTree.value)return a(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new In(ct(),t,this.revert)}}return a(ut(this.path)===e,"operationForChild called for unrelated child."),new In(dt(this.path),this.affectedTree,this.revert)}}
/**
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
 */class kn{constructor(e,t){this.source=e,this.path=t,this.type=bn.LISTEN_COMPLETE}operationForChild(e){return gt(this.path)?new kn(this.source,ct()):new kn(this.source,dt(this.path))}}
/**
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
 */class Tn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=bn.OVERWRITE}operationForChild(e){return gt(this.path)?new Tn(this.source,ct(),this.snap.getImmediateChild(e)):new Tn(this.source,dt(this.path),this.snap)}}
/**
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
 */class En{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=bn.MERGE}operationForChild(e){if(gt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Tn(this.source,ct(),t.value):new En(this.source,ct(),t)}return a(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new En(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Sn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(gt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class Rn{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nn(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw l("Should only compare child_ events.");const r=new Et(t.childName,t.snapshotNode),i=new Et(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Pn(e,t){return{eventCache:e,serverCache:t}}function On(e,t,n,r){return Pn(new Sn(t,n,r),e.serverCache)}function xn(e,t,n,r){return Pn(e.eventCache,new Sn(t,n,r))}function An(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ln(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let Mn;class Dn{constructor(e,t=(()=>(Mn||(Mn=new At(xe)),Mn))()){this.value=e,this.children=t}static fromObject(e){let t=new Dn(null);return De(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ct(),value:this.value};if(gt(e))return null;{const n=ut(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(dt(e),t);if(null!=i){return{path:_t(new lt(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(gt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new Dn(null)}}set(e,t){if(gt(e))return new Dn(t,this.children);{const n=ut(e),r=(this.children.get(n)||new Dn(null)).set(dt(e),t),i=this.children.insert(n,r);return new Dn(this.value,i)}}remove(e){if(gt(e))return this.children.isEmpty()?new Dn(null):new Dn(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const r=n.remove(dt(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Dn(null):new Dn(this.value,i)}return this}}get(e){if(gt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(gt(e))return t;{const n=ut(e),r=(this.children.get(n)||new Dn(null)).setTree(dt(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Dn(this.value,i)}}fold(e){return this.fold_(ct(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(_t(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ct(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(gt(e))return null;{const r=ut(e),i=this.children.get(r);return i?i.findOnPath_(dt(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ct(),t)}foreachOnPath_(e,t,n){if(gt(e))return this;{this.value&&n(t,this.value);const r=ut(e),i=this.children.get(r);return i?i.foreachOnPath_(dt(e),_t(t,r),n):new Dn(null)}}foreach(e){this.foreach_(ct(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class Fn{constructor(e){this.writeTree_=e}static empty(){return new Fn(new Dn(null))}}function Un(e,t,n){if(gt(t))return new Fn(new Dn(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=vt(i,t);return s=s.updateChild(o,n),new Fn(e.writeTree_.set(i,s))}{const r=new Dn(n),i=e.writeTree_.setTree(t,r);return new Fn(i)}}}function jn(e,t,n){let r=e;return De(n,((e,n)=>{r=Un(r,_t(t,e),n)})),r}function qn(e,t){if(gt(t))return Fn.empty();{const n=e.writeTree_.setTree(t,new Dn(null));return new Fn(n)}}function Wn(e,t){return null!=Vn(e,t)}function Vn(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vt(n.path,t)):null}function $n(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild($t,((e,n)=>{t.push(new Et(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Et(e,n.value))})),t}function Hn(e,t){if(gt(t))return e;{const n=Vn(e,t);return new Fn(null!=n?new Dn(n):e.writeTree_.subtree(t))}}function zn(e){return e.writeTree_.isEmpty()}function Bn(e,t){return Gn(ct(),e.writeTree_,t)}function Gn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(a(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Gn(_t(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
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
 */function Kn(e,t){return ar(t,e)}function Yn(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));a(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Jn(t,r.path)?i=!1:bt(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Xn(e.allWrites,Qn,ct()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=qn(e.visibleWrites,r.path);else{De(r.children,(t=>{e.visibleWrites=qn(e.visibleWrites,_t(r.path,t))}))}return!0}return!1}function Jn(e,t){if(e.snap)return bt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bt(_t(e.path,n),t))return!0;return!1}function Qn(e){return e.visible}function Xn(e,t,n){let r=Fn.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)bt(n,e)?(t=vt(n,e),r=Un(r,t,s.snap)):bt(e,n)&&(t=vt(e,n),r=Un(r,ct(),s.snap.getChild(t)));else{if(!s.children)throw l("WriteRecord should have .snap or .children");if(bt(n,e))t=vt(n,e),r=jn(r,t,s.children);else if(bt(e,n))if(t=vt(e,n),gt(t))r=jn(r,ct(),s.children);else{const e=E(s.children,ut(t));if(e){const n=e.getChild(dt(t));r=Un(r,ct(),n)}}}}}return r}function Zn(e,t,n,r,i){if(r||i){const s=Hn(e.visibleWrites,t);if(!i&&zn(s))return n;if(i||null!=n||Wn(s,ct())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(bt(e.path,t)||bt(t,e.path))};return Bn(Xn(e.allWrites,s,t),n||Qt.EMPTY_NODE)}return null}{const r=Vn(e.visibleWrites,t);if(null!=r)return r;{const r=Hn(e.visibleWrites,t);if(zn(r))return n;if(null!=n||Wn(r,ct())){return Bn(r,n||Qt.EMPTY_NODE)}return null}}}function er(e,t,n,r){return Zn(e.writeTree,e.treePath,t,n,r)}function tr(e,t){return function(e,t,n){let r=Qt.EMPTY_NODE;const i=Vn(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild($t,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Hn(e.visibleWrites,t);return n.forEachChild($t,((e,t)=>{const n=Bn(Hn(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),$n(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return $n(Hn(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function nr(e,t,n,r){return function(e,t,n,r,i){a(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(Wn(e.visibleWrites,s))return null;{const t=Hn(e.visibleWrites,s);return zn(t)?i.getChild(n):Bn(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function rr(e,t){return function(e,t){return Vn(e.visibleWrites,t)}(e.writeTree,_t(e.treePath,t))}function ir(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Hn(e.visibleWrites,t),c=Vn(l,ct());if(null!=c)a=c;else{if(null==n)return[];a=Bn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function sr(e,t,n){return function(e,t,n,r){const i=_t(t,n),s=Vn(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Bn(Hn(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function or(e,t){return ar(_t(e.treePath,t),e.writeTree)}function ar(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class lr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;a("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),a(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,on(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,sn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,rn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw l("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,on(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */const cr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ur{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ln(this.viewCache_),i=ir(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function hr(e,t,n,r,i){const s=new lr;let o,c;if(n.type===bn.OVERWRITE){const l=n;l.source.fromUser?o=fr(e,t,l.path,l.snap,r,i,s):(a(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!gt(l.path),o=pr(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===bn.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=_t(n,r);mr(t,ut(c))&&(a=fr(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=_t(n,r);mr(t,ut(c))||(a=fr(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(a(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),o=gr(e,t,l.path,l.children,r,i,c,s))}else if(n.type===bn.ACK_USER_WRITE){const l=n;o=l.revert?function(e,t,n,r,i,s){let o;if(null!=rr(r,n))return t;{const l=new ur(r,t,i),c=t.eventCache.getNode();let u;if(gt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=er(r,Ln(t));else{const e=t.serverCache.getNode();a(e instanceof Qt,"serverChildren would be complete if leaf node"),n=tr(r,e)}n=n,u=e.filter.updateFullNode(c,n,s)}else{const i=ut(n);let a=sr(r,i,t.serverCache);null==a&&t.serverCache.isCompleteForChild(i)&&(a=c.getImmediateChild(i)),u=null!=a?e.filter.updateChild(c,i,a,dt(n),l,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,Qt.EMPTY_NODE,dt(n),l,s):c,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=er(r,Ln(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=rr(r,ct()),On(t,u,o,e.filter.filtersNodes())}}
/**
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=rr(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(gt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return pr(e,t,n,l.getNode().getChild(n),i,s,a,o);if(gt(n)){let r=new Dn(null);return l.getNode().forEachChild(Pt,((e,t)=>{r=r.set(new lt(e),t)})),gr(e,t,n,r,i,s,a,o)}return t}{let c=new Dn(null);return r.foreach(((e,t)=>{const r=_t(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),gr(e,t,n,c,i,s,a,o)}}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==bn.LISTEN_COMPLETE)throw l("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=xn(t,s.getNode(),s.isFullyInitialized()||gt(n),s.isFiltered());return dr(e,o,n,r,cr,i)}(e,t,n.path,r,s)}const u=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=An(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(nn(An(t)))}}(t,o,u),{viewCache:o,changes:u}}function dr(e,t,n,r,i,s){const o=t.eventCache;if(null!=rr(r,n))return t;{let l,c;if(gt(n))if(a(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ln(t),i=tr(r,n instanceof Qt?n:Qt.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=er(r,Ln(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ut(n);if(".priority"===u){a(1===ht(n),"Can't have a priority with additional path components");const i=o.getNode();c=t.serverCache.getNode();const s=nr(r,n,i,c);l=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const a=dt(n);let h;if(o.isCompleteForChild(u)){c=t.serverCache.getNode();const e=nr(r,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(u).updateChild(a,e):o.getNode().getImmediateChild(u)}else h=sr(r,u,t.serverCache);l=null!=h?e.filter.updateChild(o.getNode(),u,h,a,i,s):o.getNode()}}return On(t,l,o.isFullyInitialized()||gt(n),e.filter.filtersNodes())}}function pr(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(gt(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=ut(n);if(!l.isCompleteForPath(n)&&ht(n)>1)return t;const i=dt(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,cr,null)}const h=xn(t,c,l.isFullyInitialized()||gt(n),u.filtersNodes());return dr(e,h,n,i,new ur(i,h,s),a)}function fr(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new ur(i,t,s);if(gt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=On(t,c,!0,e.filter.filtersNodes());else{const i=ut(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=On(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=dt(n),c=a.getNode().getImmediateChild(i);let h;if(gt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,r):Qt.EMPTY_NODE}if(c.equals(h))l=t;else{l=On(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function mr(e,t){return e.eventCache.isCompleteForChild(t)}function _r(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function gr(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=gt(n)?r:new Dn(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=_r(0,t.serverCache.getNode().getImmediateChild(n),r);c=pr(e,c,new lt(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=_r(0,t.serverCache.getNode().getImmediateChild(n),r);c=pr(e,c,new lt(n),l,i,s,o,a)}})),c}class vr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new an(n.getIndex()),i=(s=n).loadsAllData()?new an(s.getIndex()):s.hasLimit()?new cn(s):new ln(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Qt.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Qt.EMPTY_NODE,a.getNode(),null),u=new Sn(l,o.isFullyInitialized(),r.filtersNodes()),h=new Sn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Pn(h,u),this.eventGenerator_=new Rn(this.query_)}get query(){return this.query_}}function yr(e,t){const n=Ln(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!gt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function br(e){return 0===e.eventRegistrations_.length}function wr(e,t,n){const r=[];if(n){a(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Cr(e,t,n,r){t.type===bn.MERGE&&null!==t.source.queryId&&(a(Ln(e.viewCache_),"We should always have a full cache before handling merges"),a(An(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=hr(e.processor_,i,t,n,r);var o,l;return o=e.processor_,l=s.viewCache,a(l.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),a(l.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),a(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ir(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ir(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Nn(e,i,"child_removed",t,r,n),Nn(e,i,"child_added",t,r,n),Nn(e,i,"child_moved",s,r,n),Nn(e,i,"child_changed",t,r,n),Nn(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */let kr,Tr;class Er{constructor(){this.views=new Map}}function Sr(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return a(null!=s,"SyncTree gave us an op for an invalid query."),Cr(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Cr(s,t,n,r));return i}}function Rr(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=er(n,i?r:null),s=!1;e?s=!0:r instanceof Qt?(e=tr(n,r),s=!1):(e=Qt.EMPTY_NODE,s=!1);const o=Pn(new Sn(e,s,!1),new Sn(r,i,!1));return new vr(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild($t,((e,t)=>{r.push(rn(e,t))}));return n.isFullyInitialized()&&r.push(nn(n.getNode())),Ir(e,r,n.getNode(),t)}(o,n)}function Nr(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const l=Lr(e);if("default"===i)for(const[a,c]of e.views.entries())o=o.concat(wr(c,n,r)),br(c)&&(e.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(wr(t,n,r)),br(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return l&&!Lr(e)&&s.push(new(a(kr,"Reference.ts has not been loaded"),kr)(t._repo,t._path)),{removed:s,events:o}}function Pr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Or(e,t){let n=null;for(const r of e.views.values())n=n||yr(r,t);return n}function xr(e,t){if(t._queryParams.loadsAllData())return Mr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ar(e,t){return null!=xr(e,t)}function Lr(e){return null!=Mr(e)}function Mr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */let Dr=1;class Fr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Dn(null),this.pendingWriteTree_={visibleWrites:Fn.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ur(e,t,n,r,i){return function(e,t,n,r,i){a(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Un(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Hr(e,new Tn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function jr(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Yn(e.pendingWriteTree_,t)){let t=new Dn(null);return null!=r.snap?t=t.set(ct(),!0):De(r.children,(e=>{t=t.set(new lt(e),!0)})),Hr(e,new In(r.path,t,n))}return[]}function qr(e,t,n){return Hr(e,new Tn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Wr(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Ar(s,t))){const a=Nr(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>Lr(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Lr(t)){return[Mr(t)]}{let e=[];return t&&(e=Pr(t)),De(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Gr(e,r);e.listenProvider_.startListening(Zr(i),Kr(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(Zr(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Yr(t));e.listenProvider_.stopListening(Zr(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Yr(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function Vr(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=vt(e,r);i=i||Or(t,n),s=s||Lr(t)}));let o,l=e.syncPointTree_.get(r);if(l?(s=s||Lr(l),i=i||Or(l,ct())):(l=new Er,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=i)o=!0;else{o=!1,i=Qt.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Or(t,ct());n&&(i=i.updateImmediateChild(e,n))}))}const c=Ar(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Yr(t);a(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Dr++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=Rr(l,t,n,Kn(e.pendingWriteTree_,r),i,o);if(!c&&!s){const n=xr(l,t);u=u.concat(function(e,t,n){const r=t._path,i=Kr(e,t),s=Gr(e,n),o=e.listenProvider_.startListening(Zr(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)a(!Lr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!gt(e)&&t&&Lr(t))return[Mr(t).query];{let e=[];return t&&(e=e.concat(Pr(t).map((e=>e.query)))),De(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Zr(r),Kr(e,r))}}return o}
/**
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
 */(e,t,n))}return u}function $r(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Or(n,vt(e,t));if(r)return r}));return Zn(r,t,i,n,!0)}function Hr(e,t){return zr(t,e.syncPointTree_,null,Kn(e.pendingWriteTree_,ct()))}function zr(e,t,n,r){if(gt(e.path))return Br(e,t,n,r);{const i=t.get(ct());null==n&&null!=i&&(n=Or(i,ct()));let s=[];const o=ut(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=or(r,o);s=s.concat(zr(a,l,e,t))}return i&&(s=s.concat(Sr(i,e,r,n))),s}}function Br(e,t,n,r){const i=t.get(ct());null==n&&null!=i&&(n=Or(i,ct()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=or(r,t),l=e.operationForChild(t);l&&(s=s.concat(Br(l,i,o,a)))})),i&&(s=s.concat(Sr(i,e,r,n))),s}function Gr(e,t){const n=t.query,r=Kr(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Qt.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Jr(e,n);if(r){const n=Qr(r),i=n.path,s=n.queryId,o=vt(i,t);return Xr(e,i,new kn(Cn(s),o))}return[]}(e,n._path,r):function(e,t){return Hr(e,new kn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Wr(e,n,null,r)}}}}function Kr(e,t){const n=Yr(t);return e.queryToTagMap.get(n)}function Yr(e){return e._path.toString()+"$"+e._queryIdentifier}function Jr(e,t){return e.tagToQueryMap.get(t)}function Qr(e){const t=e.indexOf("$");return a(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function Xr(e,t,n){const r=e.syncPointTree_.get(t);a(r,"Missing sync point for query tag that we're tracking");return Sr(r,n,Kn(e.pendingWriteTree_,t),null)}function Zr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(a(Tr,"Reference.ts has not been loaded"),Tr)(e._repo,e._path):e}class ei{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ei(t)}node(){return this.node_}}class ti{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new ti(this.syncTree_,t)}node(){return $r(this.syncTree_,this.path_)}}const ni=function(e,t,n){return e&&"object"==typeof e?(a(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?ri(e[".sv"],t,n):"object"==typeof e[".sv"]?ii(e[".sv"],t):void a(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ri=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:a(!1,"Unexpected server value: "+e)}},ii=function(e,t,n){e.hasOwnProperty("increment")||a(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&a(!1,"Unexpected increment value: "+r);const i=t.node();if(a(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},si=function(e,t,n){return oi(e,new ei(t),n)};function oi(e,t,n){const r=e.getPriority().val(),i=ni(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=ni(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Vt(s,Zt(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Vt(i))),r.forEachChild($t,((e,r)=>{const i=oi(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
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
 */class ai{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function li(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ut(n);for(;null!==i;){const e=E(r.node.children,i)||{children:{},childCount:0};r=new ai(i,r,e),n=dt(n),i=ut(n)}return r}function ci(e){return e.node.value}function ui(e,t){e.node.value=t,mi(e)}function hi(e){return e.node.childCount>0}function di(e,t){De(e.node.children,((n,r)=>{t(new ai(n,e,r))}))}function pi(e,t,n,r){n&&!r&&t(e),di(e,(e=>{pi(e,t,!0,r)})),n&&r&&t(e)}function fi(e){return new lt(null===e.parent?e.name:fi(e.parent)+"/"+e.name)}function mi(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===ci(e)&&!hi(e)}(n),i=T(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,mi(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,mi(e))}
/**
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
 */(e.parent,e.name,e)}const _i=/[\[\].#$\/\u0000-\u001F\u007F]/,gi=/[\[\].#$\u0000-\u001F\u007F]/,vi=function(e){return"string"==typeof e&&0!==e.length&&!_i.test(e)},yi=function(e){return"string"==typeof e&&0!==e.length&&!gi.test(e)},bi=function(e,t,n){const r=n instanceof lt?new wt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+It(r));if("function"==typeof t)throw new Error(e+"contains a function "+It(r)+" with contents = "+t.toString());if(Re(t))throw new Error(e+"contains "+t.toString()+" "+It(r));if("string"==typeof t&&t.length>10485760/3&&U(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+It(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(De(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!vi(t)))throw new Error(e+" contains an invalid key ("+t+") "+It(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=U(a),Ct(o),bi(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=U(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+It(r)+" in addition to actual children.")}},wi=function(e,t,n,r){if(!(r&&void 0===n||yi(n)))throw new Error(F(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ci=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ii=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!vi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),yi(e)}(n))throw new Error(F(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class ki{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ti(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||yt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ei(e,t,n){Ti(e,n),Ri(e,(e=>yt(e,t)))}function Si(e,t,n){Ti(e,n),Ri(e,(e=>bt(e,t)||bt(t,e)))}function Ri(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Ni(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ni(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();we&&Ie("event: "+n.toString()),qe(r)}}}
/**
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
 */class Pi{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ki,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mn(),this.transactionQueueTree_=new ai,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oi(e,t,n){if(e.stats_=Qe(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new pn(e.repoInfo_,((t,n,r,i)=>{Li(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Mi(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{I(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Tt(e.repoInfo_,t,((t,n,r,i)=>{Li(e,t,n,r,i)}),(t=>{Mi(e,t)}),(t=>{!function(e,t){De(t,((t,n)=>{Di(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Je[n]||(Je[n]=t()),Je[n]}(e.repoInfo_,(()=>new yn(e.stats_,e.server_))),e.infoData_=new fn,e.infoSyncTree_=new Fr({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=qr(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Di(e,"connected",!1),e.serverSyncTree_=new Fr({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Si(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function xi(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ai(e){return(t=(t={timestamp:xi(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Li(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=R(n,(e=>Zt(e)));o=function(e,t,n,r){const i=Jr(e,r);if(i){const r=Qr(i),s=r.path,o=r.queryId,a=vt(s,t),l=Dn.fromObject(n);return Xr(e,s,new En(Cn(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Zt(n);o=function(e,t,n,r){const i=Jr(e,r);if(null!=i){const r=Qr(i),s=r.path,o=r.queryId,a=vt(s,t);return Xr(e,s,new Tn(Cn(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=R(n,(e=>Zt(e)));o=function(e,t,n){const r=Dn.fromObject(n);return Hr(e,new En({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Zt(n);o=qr(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=$i(e,s)),Si(e.eventQueue_,a,o)}function Mi(e,t){Di(e,"connected",t),!1===t&&function(e){qi(e,"onDisconnectEvents");const t=Ai(e),n=mn();gn(e.onDisconnect_,ct(),((r,i)=>{const s=function(e,t,n,r){return oi(t,new ti(n,e),r)}(r,i,e.serverSyncTree_,t);_n(n,r,s)}));let r=[];gn(n,ct(),((t,n)=>{r=r.concat(qr(e.serverSyncTree_,t,n));const i=Ki(e,t);$i(e,i)})),e.onDisconnect_=mn(),Si(e.eventQueue_,ct(),r)}(e)}function Di(e,t,n){const r=new lt("/.info/"+t),i=Zt(n);e.infoData_.updateSnapshot(r,i);const s=qr(e.infoSyncTree_,r,i);Si(e.eventQueue_,r,s)}function Fi(e){return e.nextWriteId_++}function Ui(e,t,n,r,i){qi(e,"set",{path:t.toString(),value:n,priority:r});const s=Ai(e),o=Zt(n,r),a=$r(e.serverSyncTree_,t),l=si(o,a,s),c=Fi(e),u=Ur(e.serverSyncTree_,t,l,c,!0);Ti(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||Se("set at "+t+" failed: "+n);const o=jr(e.serverSyncTree_,c,!s);Si(e.eventQueue_,t,o),function(e,t,n,r){t&&qe((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}(0,i,n,r)}));const h=Ki(e,t);$i(e,h),Si(e.eventQueue_,h,[])}function ji(e,t,n){let r;r=".info"===ut(t._path)?Wr(e.infoSyncTree_,t,n):Wr(e.serverSyncTree_,t,n),Ei(e.eventQueue_,t._path,r)}function qi(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ie(n,...t)}function Wi(e,t,n){return $r(e.serverSyncTree_,t,n)||Qt.EMPTY_NODE}function Vi(e,t=e.transactionQueueTree_){if(t||Gi(e,t),ci(t)){const n=zi(e,t);a(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Wi(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const e=n[u];a(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=vt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const l=s.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{qi(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(jr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Gi(e,li(e.transactionQueueTree_,t)),Vi(e,e.transactionQueueTree_),Si(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)qe(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Se("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}$i(e,t)}}),o)}(e,fi(t),n)}else hi(t)&&di(t,(t=>{Vi(e,t)}))}function $i(e,t){const n=Hi(e,t),r=fi(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const c=t[l],u=vt(n,c.path);let h,d=!1;if(a(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,h=c.abortReason,i=i.concat(jr(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,h="maxretry",i=i.concat(jr(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Wi(e,c.path,s);c.currentInputSnapshot=n;const r=t[l].update(n.val());if(void 0!==r){bi("transaction failed: Data returned ",r,c.path);let t=Zt(r);"object"==typeof r&&null!=r&&T(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Ai(e),l=si(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Fi(e),s.splice(s.indexOf(o),1),i=i.concat(Ur(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),i=i.concat(jr(e.serverSyncTree_,o,!0))}else d=!0,h="nodata",i=i.concat(jr(e.serverSyncTree_,c.currentWriteId,!0))}Si(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,o=t[l].unwatcher,setTimeout(o,Math.floor(0)),t[l].onComplete&&("nodata"===h?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(h),!1,null)))))}var o;Gi(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)qe(r[a]);Vi(e,e.transactionQueueTree_)}(e,zi(e,n),r),r}function Hi(e,t){let n,r=e.transactionQueueTree_;for(n=ut(t);null!==n&&void 0===ci(r);)r=li(r,n),n=ut(t=dt(t));return r}function zi(e,t){const n=[];return Bi(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Bi(e,t,n){const r=ci(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);di(t,(t=>{Bi(e,t,n)}))}function Gi(e,t){const n=ci(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ui(t,n.length>0?n:void 0)}di(t,(t=>{Gi(e,t)}))}function Ki(e,t){const n=fi(Hi(e,t)),r=li(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Yi(e,t)})),Yi(e,r),pi(r,(t=>{Yi(e,t)})),n}function Yi(e,t){const n=ci(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(a(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(a(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(jr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ui(t,void 0):n.length=s+1,Si(e.eventQueue_,fi(t),i);for(let e=0;e<r.length;e++)qe(r[e])}}
/**
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
 */const Ji=function(e,t){const n=Qi(e),r=n.namespace;"firebase.com"===n.domain&&Ee(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Ee("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Be(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new lt(n.pathString)}},Qi=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Se(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
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
 */
class Xi{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+I(this.snapshot.exportVal())}}class Zi{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class es{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return a(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return gt(this._path)?null:pt(this._path)}get ref(){return new ns(this._repo,this._path)}get _queryIdentifier(){const e=dn(this._queryParams),t=Le(e);return"{}"===t?"default":t}get _queryObject(){return dn(this._queryParams)}isEqual(e){if(!((e=j(e))instanceof ts))return!1;const t=this._repo===e._repo,n=yt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class ns extends ts{constructor(e,t){super(e,t,new un,!1)}get parent(){const e=mt(this._path);return null===e?null:new ns(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class rs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=ss(this.ref,e);return new rs(this._node.getChild(t),n,$t)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new rs(n,ss(this.ref,t),$t))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function is(e,t){return(e=j(e))._checkNotDeleted("ref"),void 0!==t?ss(e._root,t):e._root}function ss(e,t){var n,r,i,s;return null===ut((e=j(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),wi(n,r,i,s)):wi("child","path",t,!1),new ns(e._repo,_t(e._path,t))}function os(e){return Ci("remove",e._path),as(e,null)}function as(e,t){e=j(e),Ci("set",e._path),function(e,t,n,r){r&&void 0===t||bi(F(e,"value"),t,n)}("set",t,e._path,!1);const n=new f;return Ui(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class ls{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Xi("value",this,new rs(e.snapshotNode,new ns(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zi(this,e,t):null}matches(e){return e instanceof ls&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class cs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zi(this,e,t):null}createEvent(e,t){a(null!=e.childName,"Child events should have a childName.");const n=ss(new ns(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Xi(e.type,this,new rs(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof cs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function us(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ji(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new es(n,s||void 0),a="value"===t?new ls(o):new cs(t,o);return function(e,t,n){let r;r=".info"===ut(t._path)?Vr(e.infoSyncTree_,t,n):Vr(e.serverSyncTree_,t,n),Ei(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>ji(e._repo,e,a)}function hs(e,t,n,r){return us(e,"value",t,n,r)}!function(e){a(!kr,"__referenceConstructor has already been defined"),kr=e}(ns),function(e){a(!Tr,"__referenceConstructor has already been defined"),Tr=e}(ns);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ds={};function ps(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Ee("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ji(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Ji(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new He(He.OWNER):new $e(e.name,e.options,t);Ii("Invalid Firebase Database URL",l),gt(l.path)||Ee("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=ds[t.name];i||(i={},ds[t.name]=i);let s=i[e.toURLString()];s&&Ee("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Pi(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new Ve(e.name,n));return new fs(h,e)}class fs{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ns(this._repo,ct())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ds[t];n&&n[e.key]===e||Ee(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ee("Cannot call "+e+" on a deleted database.")}}function ms(e=le(),t){return ie(e,"database").getImmediate({identifier:t})}
/**
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
 */Tt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Tt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){he="9.4.1",re(new q("database",((e,{instanceIdentifier:t})=>ps(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ce("@firebase/database","0.12.4",e),ce("@firebase/database","0.12.4","esm2017")}();
/*!
  * @intlify/shared v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const _s="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,gs=e=>_s?Symbol(e):e,vs=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ys=e=>"number"==typeof e&&isFinite(e),bs=e=>"[object RegExp]"===Ms(e),ws=e=>Ds(e)&&0===Object.keys(e).length;function Cs(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Is=Object.assign;let ks;const Ts=()=>ks||(ks="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function Es(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Ss=Object.prototype.hasOwnProperty;function Rs(e,t){return Ss.call(e,t)}const Ns=Array.isArray,Ps=e=>"function"==typeof e,Os=e=>"string"==typeof e,xs=e=>"boolean"==typeof e,As=e=>null!==e&&"object"==typeof e,Ls=Object.prototype.toString,Ms=e=>Ls.call(e),Ds=e=>"[object Object]"===Ms(e),Fs=Object.prototype.hasOwnProperty;function Us(e,t){return Fs.call(e,t)}const js=e=>null!==e&&"object"==typeof e,qs=[];qs[0]={w:[0],i:[3,0],"[":[4],o:[7]},qs[1]={w:[1],".":[2],"[":[4],o:[7]},qs[2]={w:[2],i:[3,0],0:[3,0]},qs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},qs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},qs[5]={"'":[4,0],o:8,l:[5,0]},qs[6]={'"':[4,0],o:8,l:[6,0]};const Ws=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Vs(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function $s(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,Ws.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}const Hs=new Map;function zs(e,t){if(!js(e))return null;let n=Hs.get(t);if(n||(n=function(e){const t=[];let n,r,i,s,o,a,l,c=-1,u=0,h=0;const d=[];function p(){const t=e[c+1];if(5===u&&"'"===t||6===u&&'"'===t)return c++,i="\\"+t,d[0](),!0}for(d[0]=()=>{void 0===r?r=i:r+=i},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=$s(r),!1===r)return!1;d[1]()}};null!==u;)if(c++,n=e[c],"\\"!==n||!p()){if(s=Vs(n),l=qs[u],o=l[s]||l.l||8,8===o)return;if(u=o[0],void 0!==o[1]&&(a=d[o[1]],a&&(i=n,!1===a())))return;if(7===u)return t}}(t),n&&Hs.set(t,n)),!n)return null;const r=n.length;let i=e,s=0;for(;s<r;){const e=i[n[s]];if(void 0===e)return null;i=e,s++}return i}function Bs(e){if(!js(e))return e;for(const t in e)if(Us(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let i=e;for(let e=0;e<r;e++)n[e]in i||(i[n[e]]={}),i=i[n[e]];i[n[r]]=e[t],delete e[t],js(i[n[r]])&&Bs(i[n[r]])}else js(e[t])&&Bs(e[t]);return e}
/*!
  * @intlify/runtime v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Gs=e=>e,Ks=e=>"",Ys=e=>0===e.length?"":e.join(""),Js=e=>null==e?"":Ns(e)||Ds(e)&&e.toString===Ls?JSON.stringify(e,null,2):String(e);function Qs(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Xs(e={}){const t=e.locale,n=function(e){const t=ys(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(ys(e.named.count)||ys(e.named.n))?ys(e.named.count)?e.named.count:ys(e.named.n)?e.named.n:t:t}(e),r=As(e.pluralRules)&&Os(t)&&Ps(e.pluralRules[t])?e.pluralRules[t]:Qs,i=As(e.pluralRules)&&Os(t)&&Ps(e.pluralRules[t])?Qs:void 0,s=e.list||[],o=e.named||{};ys(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,o);function a(t){const n=Ps(e.messages)?e.messages(t):!!As(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):Ks)}const l=Ds(e.processor)&&Ps(e.processor.normalize)?e.processor.normalize:Ys,c=Ds(e.processor)&&Ps(e.processor.interpolate)?e.processor.interpolate:Js,u={list:e=>s[e],named:e=>o[e],plural:e=>e[r(n,e.length,i)],linked:(t,n)=>{const r=a(t)(u);return Os(n)?(i=n,e.modifiers?e.modifiers[i]:Gs)(r):r;var i},message:a,type:Ds(e.processor)&&Os(e.processor.type)?e.processor.type:"text",interpolate:c,normalize:l};return u}
/*!
  * @intlify/message-compiler v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function Zs(e,t,n={}){const{domain:r,messages:i,args:s}=n,o=new SyntaxError(String(e));return o.code=e,t&&(o.location=t),o.domain=r,o}
/*!
  * @intlify/devtools-if v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const eo="i18n:init";
/*!
  * @intlify/core-base v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let to=null;const no=ro("function:translate");function ro(e){return t=>to&&to.emit(e,t)}let io=null;const so=e=>{io=e};let oo=0;function ao(e={}){const t=Os(e.version)?e.version:"9.1.7",n=Os(e.locale)?e.locale:"en-US",r=Ns(e.fallbackLocale)||Ds(e.fallbackLocale)||Os(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,i=Ds(e.messages)?e.messages:{[n]:{}},s=Ds(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=Ds(e.numberFormats)?e.numberFormats:{[n]:{}},a=Is({},e.modifiers||{},{upper:e=>Os(e)?e.toUpperCase():e,lower:e=>Os(e)?e.toLowerCase():e,capitalize:e=>Os(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}),l=e.pluralRules||{},c=Ps(e.missing)?e.missing:null,u=!xs(e.missingWarn)&&!bs(e.missingWarn)||e.missingWarn,h=!xs(e.fallbackWarn)&&!bs(e.fallbackWarn)||e.fallbackWarn,d=!!e.fallbackFormat,p=!!e.unresolving,f=Ps(e.postTranslation)?e.postTranslation:null,m=Ds(e.processor)?e.processor:null,_=!xs(e.warnHtmlMessage)||e.warnHtmlMessage,g=!!e.escapeParameter,v=Ps(e.messageCompiler)?e.messageCompiler:undefined,y=Ps(e.onWarn)?e.onWarn:Cs,b=e,w=As(b.__datetimeFormatters)?b.__datetimeFormatters:new Map,C=As(b.__numberFormatters)?b.__numberFormatters:new Map,I=As(b.__meta)?b.__meta:{};oo++;const k={version:t,cid:oo,locale:n,fallbackLocale:r,messages:i,datetimeFormats:s,numberFormats:o,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:h,fallbackFormat:d,unresolving:p,postTranslation:f,processor:m,warnHtmlMessage:_,escapeParameter:g,messageCompiler:v,onWarn:y,__datetimeFormatters:w,__numberFormatters:C,__meta:I};return __INTLIFY_PROD_DEVTOOLS__&&function(e,t,n){to&&to.emit(eo,{timestamp:Date.now(),i18n:e,version:t,meta:n})}(k,t,I),k}function lo(e,t,n,r,i){const{missing:s,onWarn:o}=e;if(null!==s){const r=s(e,n,t,i);return Os(r)?r:t}return t}function co(e,t,n){const r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let i=r.__localeChainCache.get(n);if(!i){i=[];let e=[n];for(;Ns(e);)e=uo(i,e,t);const s=Ns(t)?t:Ds(t)?t.default?t.default:null:t;e=Os(s)?[s]:s,Ns(e)&&uo(i,e,!1),r.__localeChainCache.set(n,i)}return i}function uo(e,t,n){let r=!0;for(let i=0;i<t.length&&xs(r);i++){const s=t[i];Os(s)&&(r=ho(e,t[i],n))}return r}function ho(e,t,n){let r;const i=t.split("-");do{r=po(e,i.join("-"),n),i.splice(-1,1)}while(i.length&&!0===r);return r}function po(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const i=t.replace(/!/g,"");e.push(i),(Ns(n)||Ds(n))&&n[i]&&(r=n[i])}return r}function fo(e,t,n){e.__localeChainCache=new Map,co(e,n,t)}function mo(e){return Zs(e,null,void 0)}const _o=()=>"",go=e=>Ps(e);function vo(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:i,fallbackLocale:s,messages:o}=e,[a,l]=bo(...t),c=(xs(l.missingWarn)?l.missingWarn:e.missingWarn,xs(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,xs(l.escapeParameter)?l.escapeParameter:e.escapeParameter),u=!!l.resolvedMessage,h=Os(l.default)||xs(l.default)?xs(l.default)?a:l.default:n?a:"",d=n||""!==h,p=Os(l.locale)?l.locale:e.locale;c&&function(e){Ns(e.list)?e.list=e.list.map((e=>Os(e)?Es(e):e)):As(e.named)&&Object.keys(e.named).forEach((t=>{Os(e.named[t])&&(e.named[t]=Es(e.named[t]))}))}(l);let[f,m,_]=u?[a,p,o[p]||{}]:function(e,t,n,r,i,s){const{messages:o,onWarn:a}=e,l=co(e,r,n);let c,u={},h=null;const d="translate";for(let p=0;p<l.length&&(c=l[p],u=o[c]||{},null===(h=zs(u,t))&&(h=u[t]),!Os(h)&&!Ps(h));p++){const n=lo(e,t,c,0,d);n!==t&&(h=n)}return[h,c,u]}(e,a,p,s),g=a;if(u||Os(f)||go(f)||d&&(f=h,g=f),!(u||(Os(f)||go(f))&&Os(m)))return i?-1:a;let v=!1;const y=go(f)?f:yo(e,a,m,f,g,(()=>{v=!0}));if(v)return f;const b=function(e,t,n){return t(n)}(0,y,Xs(function(e,t,n,r){const{modifiers:i,pluralRules:s}=e,o={locale:t,modifiers:i,pluralRules:s,messages:r=>{const i=zs(n,r);if(Os(i)){let n=!1;const s=yo(e,r,t,i,r,(()=>{n=!0}));return n?_o:s}return go(i)?i:_o}};e.processor&&(o.processor=e.processor);r.list&&(o.list=r.list);r.named&&(o.named=r.named);ys(r.plural)&&(o.pluralIndex=r.plural);return o}(e,m,_,l))),w=r?r(b):b;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:Os(a)?a:go(f)?f.key:"",locale:m||(go(f)?f.locale:""),format:Os(f)?f:go(f)?f.source:"",message:w};t.meta=Is({},e.__meta,io||{}),no(t)}return w}function yo(e,t,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=e;if(go(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}const l=o(r,function(e,t,n,r,i,s){return{warnHtmlMessage:i,onError:e=>{throw s&&s(e),e},onCacheKey:e=>((e,t,n)=>vs({l:e,k:t,s:n}))(t,n,e)}}(0,n,i,0,a,s));return l.locale=n,l.key=t,l.source=r,l}function bo(...e){const[t,n,r]=e,i={};if(!Os(t)&&!ys(t)&&!go(t))throw mo(14);const s=ys(t)?String(t):(go(t),t);return ys(n)?i.plural=n:Os(n)?i.default=n:Ds(n)&&!ws(n)?i.named=n:Ns(n)&&(i.list=n),ys(r)?i.plural=r:Os(r)?i.default=r:Ds(r)&&Is(i,r),[s,i]}function wo(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:s}=e,{__datetimeFormatters:o}=e,[a,l,c,u]=Co(...t);xs(c.missingWarn)?c.missingWarn:e.missingWarn;xs(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn;const h=!!c.part,d=Os(c.locale)?c.locale:e.locale,p=co(e,i,d);if(!Os(a)||""===a)return new Intl.DateTimeFormat(d).format(l);let f,m={},_=null;for(let y=0;y<p.length&&(f=p[y],m=n[f]||{},_=m[a],!Ds(_));y++)lo(e,a,f,0,"datetime format");if(!Ds(_)||!Os(f))return r?-1:a;let g=`${f}__${a}`;ws(u)||(g=`${g}__${JSON.stringify(u)}`);let v=o.get(g);return v||(v=new Intl.DateTimeFormat(f,Is({},_,u)),o.set(g,v)),h?v.formatToParts(l):v.format(l)}function Co(...e){const[t,n,r,i]=e;let s,o={},a={};if(Os(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw mo(16);s=new Date(t);try{s.toISOString()}catch(l){throw mo(16)}}else if((e=>"[object Date]"===Ms(e))(t)){if(isNaN(t.getTime()))throw mo(15);s=t}else{if(!ys(t))throw mo(14);s=t}return Os(n)?o.key=n:Ds(n)&&(o=n),Os(r)?o.locale=r:Ds(r)&&(a=r),Ds(i)&&(a=i),[o.key||"",s,o,a]}function Io(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function ko(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:s}=e,{__numberFormatters:o}=e,[a,l,c,u]=To(...t);xs(c.missingWarn)?c.missingWarn:e.missingWarn;xs(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn;const h=!!c.part,d=Os(c.locale)?c.locale:e.locale,p=co(e,i,d);if(!Os(a)||""===a)return new Intl.NumberFormat(d).format(l);let f,m={},_=null;for(let y=0;y<p.length&&(f=p[y],m=n[f]||{},_=m[a],!Ds(_));y++)lo(e,a,f,0,"number format");if(!Ds(_)||!Os(f))return r?-1:a;let g=`${f}__${a}`;ws(u)||(g=`${g}__${JSON.stringify(u)}`);let v=o.get(g);return v||(v=new Intl.NumberFormat(f,Is({},_,u)),o.set(g,v)),h?v.formatToParts(l):v.format(l)}function To(...e){const[t,n,r,i]=e;let s={},o={};if(!ys(t))throw mo(14);const a=t;return Os(n)?s.key=n:Ds(n)&&(s=n),Os(r)?s.locale=r:Ds(r)&&(o=r),Ds(i)&&(o=i),[s.key||"",a,s,o]}function Eo(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}function So(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(Ts().__INTLIFY_PROD_DEVTOOLS__=!1);const Ro=So("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function No(e){return!!e||""===e}function Po(e){if(Jo(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ta(r)?Ao(r):Po(r);if(i)for(const e in i)t[e]=i[e]}return t}return ta(e)||ra(e)?e:void 0}const Oo=/;(?![^(]*\))/g,xo=/:(.+)/;function Ao(e){const t={};return e.split(Oo).forEach((e=>{if(e){const n=e.split(xo);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Lo(e){let t="";if(ta(e))t=e;else if(Jo(e))for(let n=0;n<e.length;n++){const r=Lo(e[n]);r&&(t+=r+" ")}else if(ra(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Mo(e,t){if(e===t)return!0;let n=Zo(e),r=Zo(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=Jo(e),r=Jo(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Mo(e[r],t[r]);return n}(e,t);if(n=ra(e),r=ra(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Mo(e[n],t[n]))return!1}}return String(e)===String(t)}function Do(e,t){return e.findIndex((e=>Mo(e,t)))}const Fo=e=>null==e?"":Jo(e)||ra(e)&&(e.toString===sa||!ea(e.toString))?JSON.stringify(e,Uo,2):String(e),Uo=(e,t)=>t&&t.__v_isRef?Uo(e,t.value):Qo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:Xo(t)?{[`Set(${t.size})`]:[...t.values()]}:!ra(t)||Jo(t)||aa(t)?t:String(t),jo={},qo=[],Wo=()=>{},Vo=()=>!1,$o=/^on[^a-z]/,Ho=e=>$o.test(e),zo=e=>e.startsWith("onUpdate:"),Bo=Object.assign,Go=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ko=Object.prototype.hasOwnProperty,Yo=(e,t)=>Ko.call(e,t),Jo=Array.isArray,Qo=e=>"[object Map]"===oa(e),Xo=e=>"[object Set]"===oa(e),Zo=e=>e instanceof Date,ea=e=>"function"==typeof e,ta=e=>"string"==typeof e,na=e=>"symbol"==typeof e,ra=e=>null!==e&&"object"==typeof e,ia=e=>ra(e)&&ea(e.then)&&ea(e.catch),sa=Object.prototype.toString,oa=e=>sa.call(e),aa=e=>"[object Object]"===oa(e),la=e=>ta(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,ca=So(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ha=/-(\w)/g,da=ua((e=>e.replace(ha,((e,t)=>t?t.toUpperCase():"")))),pa=/\B([A-Z])/g,fa=ua((e=>e.replace(pa,"-$1").toLowerCase())),ma=ua((e=>e.charAt(0).toUpperCase()+e.slice(1))),_a=ua((e=>e?`on${ma(e)}`:"")),ga=(e,t)=>!Object.is(e,t),va=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ya=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ba=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wa;let Ca;const Ia=[];class ka{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ca&&(this.parent=Ca,this.index=(Ca.scopes||(Ca.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Ia.push(this),Ca=this)}off(){this.active&&(Ia.pop(),Ca=Ia[Ia.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function Ta(e){return new ka(e)}const Ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sa=e=>(e.w&Oa)>0,Ra=e=>(e.n&Oa)>0,Na=new WeakMap;let Pa=0,Oa=1;const xa=[];let Aa;const La=Symbol(""),Ma=Symbol("");class Da{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||Ca)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!xa.includes(this))try{return xa.push(Aa=this),ja.push(Ua),Ua=!0,Oa=1<<++Pa,Pa<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Oa})(this):Fa(this),this.fn()}finally{Pa<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Sa(i)&&!Ra(i)?i.delete(e):t[n++]=i,i.w&=~Oa,i.n&=~Oa}t.length=n}})(this),Oa=1<<--Pa,Wa(),xa.pop();const e=xa.length;Aa=e>0?xa[e-1]:void 0}}stop(){this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ua=!0;const ja=[];function qa(){ja.push(Ua),Ua=!1}function Wa(){const e=ja.pop();Ua=void 0===e||e}function Va(e,t,n){if(!$a())return;let r=Na.get(e);r||Na.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ea()),Ha(i)}function $a(){return Ua&&void 0!==Aa}function Ha(e,t){let n=!1;Pa<=30?Ra(e)||(e.n|=Oa,n=!Sa(e)):n=!e.has(Aa),n&&(e.add(Aa),Aa.deps.push(e))}function za(e,t,n,r,i,s){const o=Na.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&Jo(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":Jo(e)?la(n)&&a.push(o.get("length")):(a.push(o.get(La)),Qo(e)&&a.push(o.get(Ma)));break;case"delete":Jo(e)||(a.push(o.get(La)),Qo(e)&&a.push(o.get(Ma)));break;case"set":Qo(e)&&a.push(o.get(La))}if(1===a.length)a[0]&&Ba(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);Ba(Ea(e))}}function Ba(e,t){for(const n of Jo(e)?e:[...e])(n!==Aa||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ga=So("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(na)),Ya=el(),Ja=el(!1,!0),Qa=el(!0),Xa=Za();function Za(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Fl(this);for(let t=0,i=this.length;t<i;t++)Va(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Fl)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){qa();const n=Fl(this)[t].apply(this,e);return Wa(),n}})),e}function el(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Nl:Rl:t?Sl:El).get(n))return n;const s=Jo(n);if(!e&&s&&Yo(Xa,r))return Reflect.get(Xa,r,i);const o=Reflect.get(n,r,i);if(na(r)?Ka.has(r):Ga(r))return o;if(e||Va(n,0,r),t)return o;if($l(o)){return!s||!la(r)?o.value:o}return ra(o)?e?xl(o):Ol(o):o}}function tl(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=Fl(r),s=Fl(s),!Jo(t)&&$l(s)&&!$l(r)))return s.value=r,!0;const o=Jo(t)&&la(n)?Number(n)<t.length:Yo(t,n),a=Reflect.set(t,n,r,i);return t===Fl(i)&&(o?ga(r,s)&&za(t,"set",n,r):za(t,"add",n,r)),a}}const nl={get:Ya,set:tl(),deleteProperty:function(e,t){const n=Yo(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&za(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return na(t)&&Ka.has(t)||Va(e,0,t),n},ownKeys:function(e){return Va(e,0,Jo(e)?"length":La),Reflect.ownKeys(e)}},rl={get:Qa,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},il=Bo({},nl,{get:Ja,set:tl(!0)}),sl=e=>e,ol=e=>Reflect.getPrototypeOf(e);function al(e,t,n=!1,r=!1){const i=Fl(e=e.__v_raw),s=Fl(t);t!==s&&!n&&Va(i,0,t),!n&&Va(i,0,s);const{has:o}=ol(i),a=r?sl:n?ql:jl;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function ll(e,t=!1){const n=this.__v_raw,r=Fl(n),i=Fl(e);return e!==i&&!t&&Va(r,0,e),!t&&Va(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function cl(e,t=!1){return e=e.__v_raw,!t&&Va(Fl(e),0,La),Reflect.get(e,"size",e)}function ul(e){e=Fl(e);const t=Fl(this);return ol(t).has.call(t,e)||(t.add(e),za(t,"add",e,e)),this}function hl(e,t){t=Fl(t);const n=Fl(this),{has:r,get:i}=ol(n);let s=r.call(n,e);s||(e=Fl(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?ga(t,o)&&za(n,"set",e,t):za(n,"add",e,t),this}function dl(e){const t=Fl(this),{has:n,get:r}=ol(t);let i=n.call(t,e);i||(e=Fl(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&za(t,"delete",e,void 0),s}function pl(){const e=Fl(this),t=0!==e.size,n=e.clear();return t&&za(e,"clear",void 0,void 0),n}function fl(e,t){return function(n,r){const i=this,s=i.__v_raw,o=Fl(s),a=t?sl:e?ql:jl;return!e&&Va(o,0,La),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ml(e,t,n){return function(...r){const i=this.__v_raw,s=Fl(i),o=Qo(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?sl:t?ql:jl;return!t&&Va(s,0,l?Ma:La),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function _l(e){return function(...t){return"delete"!==e&&this}}function gl(){const e={get(e){return al(this,e)},get size(){return cl(this)},has:ll,add:ul,set:hl,delete:dl,clear:pl,forEach:fl(!1,!1)},t={get(e){return al(this,e,!1,!0)},get size(){return cl(this)},has:ll,add:ul,set:hl,delete:dl,clear:pl,forEach:fl(!1,!0)},n={get(e){return al(this,e,!0)},get size(){return cl(this,!0)},has(e){return ll.call(this,e,!0)},add:_l("add"),set:_l("set"),delete:_l("delete"),clear:_l("clear"),forEach:fl(!0,!1)},r={get(e){return al(this,e,!0,!0)},get size(){return cl(this,!0)},has(e){return ll.call(this,e,!0)},add:_l("add"),set:_l("set"),delete:_l("delete"),clear:_l("clear"),forEach:fl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=ml(i,!1,!1),n[i]=ml(i,!0,!1),t[i]=ml(i,!1,!0),r[i]=ml(i,!0,!0)})),[e,n,t,r]}const[vl,yl,bl,wl]=gl();function Cl(e,t){const n=t?e?wl:bl:e?yl:vl;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(Yo(n,r)&&r in t?n:t,r,i)}const Il={get:Cl(!1,!1)},kl={get:Cl(!1,!0)},Tl={get:Cl(!0,!1)},El=new WeakMap,Sl=new WeakMap,Rl=new WeakMap,Nl=new WeakMap;function Pl(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>oa(e).slice(8,-1))(e))}function Ol(e){return e&&e.__v_isReadonly?e:Al(e,!1,nl,Il,El)}function xl(e){return Al(e,!0,rl,Tl,Rl)}function Al(e,t,n,r,i){if(!ra(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Pl(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function Ll(e){return Ml(e)?Ll(e.__v_raw):!(!e||!e.__v_isReactive)}function Ml(e){return!(!e||!e.__v_isReadonly)}function Dl(e){return Ll(e)||Ml(e)}function Fl(e){const t=e&&e.__v_raw;return t?Fl(t):e}function Ul(e){return ya(e,"__v_skip",!0),e}const jl=e=>ra(e)?Ol(e):e,ql=e=>ra(e)?xl(e):e;function Wl(e){$a()&&((e=Fl(e)).dep||(e.dep=Ea()),Ha(e.dep))}function Vl(e,t){(e=Fl(e)).dep&&Ba(e.dep)}function $l(e){return Boolean(e&&!0===e.__v_isRef)}function Hl(e){return zl(e,!1)}function zl(e,t){return $l(e)?e:new Bl(e,t)}class Bl{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Fl(e),this._value=t?e:jl(e)}get value(){return Wl(this),this._value}set value(e){e=this._shallow?e:Fl(e),ga(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:jl(e),Vl(this))}}function Gl(e){return $l(e)?e.value:e}const Kl={get:(e,t,n)=>Gl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return $l(i)&&!$l(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Yl(e){return Ll(e)?e:new Proxy(e,Kl)}class Jl{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Ql(e,t){const n=e[t];return $l(n)?n:new Jl(e,t)}class Xl{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Da(e,(()=>{this._dirty||(this._dirty=!0,Vl(this))})),this.__v_isReadonly=n}get value(){const e=Fl(this);return Wl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zl(e,t){let n,r;const i=ea(e);i?(n=e,r=Wo):(n=e.get,r=e.set);return new Xl(n,r,i||!r)}function ec(e,t,...n){const r=e.vnode.props||jo;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||jo;s?i=n.map((e=>e.trim())):t&&(i=n.map(ba))}let a,l=r[a=_a(t)]||r[a=_a(da(t))];!l&&s&&(l=r[a=_a(fa(t))]),l&&vh(l,e,6,i);const c=r[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,vh(c,e,6,i)}}function tc(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!ea(e)){const r=e=>{const n=tc(e,t,!0);n&&(a=!0,Bo(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(Jo(s)?s.forEach((e=>o[e]=null)):Bo(o,s),r.set(e,o),o):(r.set(e,null),null)}function nc(e,t){return!(!e||!Ho(t))&&(t=t.slice(2).replace(/Once$/,""),Yo(e,t[0].toLowerCase()+t.slice(1))||Yo(e,fa(t))||Yo(e,t))}Promise.resolve();let rc=null,ic=null;function sc(e){const t=rc;return rc=e,ic=e&&e.type.__scopeId||null,t}function oc(e,t=rc,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Du(-1);const i=sc(t),s=e(...n);return sc(i),r._d&&Du(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ac(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:m}=e;let _,g;const v=sc(e);try{if(4&n.shapeFlag){const e=i||r;_=Qu(u.call(e,e,h,s,p,d,f)),g=l}else{const e=t;0,_=Qu(e.length>1?e(s,{attrs:l,slots:a,emit:c}):e(s,null)),g=t.props?l:lc(l)}}catch(b){xu.length=0,yh(b,e,1),_=Bu(Pu)}let y=_;if(g&&!1!==m){const e=Object.keys(g),{shapeFlag:t}=y;e.length&&7&t&&(o&&e.some(zo)&&(g=cc(g,o)),y=Gu(y,g))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),_=y,sc(v),_}const lc=e=>{let t;for(const n in e)("class"===n||"style"===n||Ho(n))&&((t||(t={}))[n]=e[n]);return t},cc=(e,t)=>{const n={};for(const r in e)zo(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function uc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!nc(n,s))return!0}return!1}function hc(e,t){t&&t.pendingBranch?Jo(e)?t.effects.push(...e):t.effects.push(e):Dh(e,Rh,Sh,Nh)}function dc(e,t){if(lh){let n=lh.provides;const r=lh.parent&&lh.parent.provides;r===n&&(n=lh.provides=Object.create(r)),n[e]=t}else;}function pc(e,t,n=!1){const r=lh||rc;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ea(t)?t.call(r.proxy):t}}const fc=[Function,Array],mc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fc,onEnter:fc,onAfterEnter:fc,onEnterCancelled:fc,onBeforeLeave:fc,onLeave:fc,onAfterLeave:fc,onLeaveCancelled:fc,onBeforeAppear:fc,onAppear:fc,onAfterAppear:fc,onAppearCancelled:fc},setup(e,{slots:t}){const n=ch(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xc((()=>{e.isMounted=!0})),Mc((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&wc(t.default(),!0);if(!s||!s.length)return;const o=Fl(e),{mode:a}=o,l=s[0];if(r.isLeaving)return vc(l);const c=yc(l);if(!c)return vc(l);const u=gc(c,o,r,n);bc(c,u);const h=n.subTree,d=h&&yc(h);let p=!1;const{getTransitionKey:f}=c.type;if(f){const e=f();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(d&&d.type!==Pu&&(!Wu(c,d)||p)){const e=gc(d,o,r,n);if(bc(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},vc(l);"in-out"===a&&c.type!==Pu&&(e.delayLeave=(e,t,n)=>{_c(r,d)[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return l}}};function _c(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gc(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:m,onAppear:_,onAfterAppear:g,onAppearCancelled:v}=t,y=String(e.key),b=_c(n,e),w=(e,t)=>{e&&vh(e,r,9,t)},C={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=b[y];s&&Wu(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[t])},enter(e){let t=l,r=c,s=u;if(!n.isMounted){if(!i)return;t=_||l,r=g||c,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?f:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>gc(e,t,n,r)};return C}function vc(e){if(kc(e))return(e=Gu(e)).children=null,e}function yc(e){return kc(e)?e.children?e.children[0]:void 0:e}function bc(e,t){6&e.shapeFlag&&e.component?bc(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wc(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Ru?(128&s.patchFlag&&r++,n=n.concat(wc(s.children,t))):(t||s.type!==Pu)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Cc(e){return ea(e)?{setup:e,name:e.name}:e}const Ic=e=>!!e.type.__asyncLoader,kc=e=>e.type.__isKeepAlive;function Tc(e,t){Sc(e,"a",t)}function Ec(e,t){Sc(e,"da",t)}function Sc(e,t,n=lh){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Nc(t,r,n),n){let e=n.parent;for(;e&&e.parent;)kc(e.parent.vnode)&&Rc(r,t,n,e),e=e.parent}}function Rc(e,t,n,r){const i=Nc(t,e,r,!0);Dc((()=>{Go(r[t],i)}),n)}function Nc(e,t,n=lh,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;qa(),uh(n);const i=vh(t,n,e,r);return hh(),Wa(),i});return r?i.unshift(s):i.push(s),s}}const Pc=e=>(t,n=lh)=>(!ph||"sp"===e)&&Nc(e,t,n),Oc=Pc("bm"),xc=Pc("m"),Ac=Pc("bu"),Lc=Pc("u"),Mc=Pc("bum"),Dc=Pc("um"),Fc=Pc("sp"),Uc=Pc("rtg"),jc=Pc("rtc");function qc(e,t=lh){Nc("ec",e,t)}let Wc=!0;function Vc(e){const t=zc(e),n=e.proxy,r=e.ctx;Wc=!1,t.beforeCreate&&$c(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:f,activated:m,deactivated:_,beforeDestroy:g,beforeUnmount:v,destroyed:y,unmounted:b,render:w,renderTracked:C,renderTriggered:I,errorCaptured:k,serverPrefetch:T,expose:E,inheritAttrs:S,components:R,directives:N,filters:P}=t;if(c&&function(e,t,n=Wo,r=!1){Jo(e)&&(e=Yc(e));for(const i in e){const n=e[i];let s;s=ra(n)?"default"in n?pc(n.from||i,n.default,!0):pc(n.from||i):pc(n),$l(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const x in o){const e=o[x];ea(e)&&(r[x]=e.bind(n))}if(i){const t=i.call(n,n);ra(t)&&(e.data=Ol(t))}if(Wc=!0,s)for(const x in s){const e=s[x],t=Zl({get:ea(e)?e.bind(n,n):ea(e.get)?e.get.bind(n,n):Wo,set:!ea(e)&&ea(e.set)?e.set.bind(n):Wo});Object.defineProperty(r,x,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const x in a)Hc(a[x],r,n,x);if(l){const e=ea(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{dc(t,e[t])}))}function O(e,t){Jo(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&$c(u,e,"c"),O(Oc,h),O(xc,d),O(Ac,p),O(Lc,f),O(Tc,m),O(Ec,_),O(qc,k),O(jc,C),O(Uc,I),O(Mc,v),O(Dc,b),O(Fc,T),Jo(E))if(E.length){const t=e.exposed||(e.exposed={});E.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});w&&e.render===Wo&&(e.render=w),null!=S&&(e.inheritAttrs=S),R&&(e.components=R),N&&(e.directives=N)}function $c(e,t,n){vh(Jo(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Hc(e,t,n,r){const i=r.includes(".")?zh(n,r):()=>n[r];if(ta(e)){const n=t[e];ea(n)&&Vh(i,n)}else if(ea(e))Vh(i,e.bind(n));else if(ra(e))if(Jo(e))e.forEach((e=>Hc(e,t,n,r)));else{const r=ea(e.handler)?e.handler.bind(n):t[e.handler];ea(r)&&Vh(i,r,e)}}function zc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>Bc(l,e,o,!0))),Bc(l,t,o)):l=t,s.set(t,l),l}function Bc(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Bc(e,s,n,!0),i&&i.forEach((t=>Bc(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Gc[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Gc={data:Kc,props:Qc,emits:Qc,methods:Qc,computed:Qc,beforeCreate:Jc,created:Jc,beforeMount:Jc,mounted:Jc,beforeUpdate:Jc,updated:Jc,beforeDestroy:Jc,beforeUnmount:Jc,destroyed:Jc,unmounted:Jc,activated:Jc,deactivated:Jc,errorCaptured:Jc,serverPrefetch:Jc,components:Qc,directives:Qc,watch:function(e,t){if(!e)return t;if(!t)return e;const n=Bo(Object.create(null),e);for(const r in t)n[r]=Jc(e[r],t[r]);return n},provide:Kc,inject:function(e,t){return Qc(Yc(e),Yc(t))}};function Kc(e,t){return t?e?function(){return Bo(ea(e)?e.call(this,this):e,ea(t)?t.call(this,this):t)}:t:e}function Yc(e){if(Jo(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jc(e,t){return e?[...new Set([].concat(e,t))]:t}function Qc(e,t){return e?Bo(Bo(Object.create(null),e),t):t}function Xc(e,t,n,r=!1){const i={},s={};ya(s,Vu,1),e.propsDefaults=Object.create(null),Zc(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Al(i,!1,il,kl,Sl):e.type.props?e.props=i:e.props=s,e.attrs=s}function Zc(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(ca(l))continue;const c=t[l];let u;i&&Yo(i,u=da(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:nc(e.emitsOptions,l)||c!==r[l]&&(r[l]=c,a=!0)}if(s){const t=Fl(n),r=o||jo;for(let o=0;o<s.length;o++){const a=s[o];n[a]=eu(i,t,a,r[a],e,!Yo(r,a))}}return a}function eu(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=Yo(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&ea(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(uh(i),r=s[n]=e.call(null,t),hh())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==fa(n)||(r=!0))}return r}function tu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!ea(e)){const r=e=>{l=!0;const[n,r]=tu(e,t,!0);Bo(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return r.set(e,qo),qo;if(Jo(s))for(let u=0;u<s.length;u++){const e=da(s[u]);nu(e)&&(o[e]=jo)}else if(s)for(const u in s){const e=da(u);if(nu(e)){const t=s[u],n=o[e]=Jo(t)||ea(t)?{type:t}:t;if(n){const t=su(Boolean,n.type),r=su(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||Yo(n,"default"))&&a.push(e)}}}const c=[o,a];return r.set(e,c),c}function nu(e){return"$"!==e[0]}function ru(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function iu(e,t){return ru(e)===ru(t)}function su(e,t){return Jo(t)?t.findIndex((t=>iu(t,e))):ea(t)&&iu(t,e)?0:-1}const ou=e=>"_"===e[0]||"$stable"===e,au=e=>Jo(e)?e.map(Qu):[Qu(e)],lu=(e,t,n)=>{const r=oc(((...e)=>au(t(...e))),n);return r._c=!1,r},cu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ou(i))continue;const n=e[i];if(ea(n))t[i]=lu(0,n,r);else if(null!=n){const e=au(n);t[i]=()=>e}}},uu=(e,t)=>{const n=au(t);e.slots.default=()=>n};function hu(e,t){if(null===rc)return e;const n=rc.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=jo]=t[i];ea(e)&&(e={mounted:e,updated:e}),e.deep&&Bh(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function du(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(qa(),vh(l,n,8,[e.el,a,e,t]),Wa())}}function pu(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fu=0;function mu(e,t){return function(n,r=null){null==r||ra(r)||(r=null);const i=pu(),s=new Set;let o=!1;const a=i.app={_uid:fu++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Kh,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&ea(e.install)?(s.add(e),e.install(a,...t)):ea(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=Bu(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,_h(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}let _u=!1;const gu=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,vu=e=>8===e.nodeType;function yu(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:i,parentNode:s,remove:o,insert:a,createComment:l}}=e,c=(n,r,o,a,l,m=!1)=>{const _=vu(n)&&"["===n.data,g=()=>p(n,r,o,a,l,_),{type:v,ref:y,shapeFlag:b}=r,w=n.nodeType;r.el=n;let C=null;switch(v){case Nu:3!==w?C=g():(n.data!==r.children&&(_u=!0,n.data=r.children),C=i(n));break;case Pu:C=8!==w||_?g():i(n);break;case Ou:if(1===w){C=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=C.outerHTML),t===r.staticCount-1&&(r.anchor=C),C=i(C);return C}C=g();break;case Ru:C=_?d(n,r,o,a,l,m):g();break;default:if(1&b)C=1!==w||r.type.toLowerCase()!==n.tagName.toLowerCase()?g():u(n,r,o,a,l,m);else if(6&b){r.slotScopeIds=l;const e=s(n);if(t(r,e,null,o,a,gu(e),m),C=_?f(n):i(n),Ic(r)){let t;_?(t=Bu(Ru),t.anchor=C?C.previousSibling:e.lastChild):t=3===n.nodeType?Ku(""):Bu("div"),t.el=n,r.component.subTree=t}}else 64&b?C=8!==w?g():r.type.hydrate(n,r,o,a,l,m,e,h):128&b&&(C=r.type.hydrate(n,r,o,a,gu(s(n)),l,m,e,c))}return null!=y&&Cu(y,null,a,r),C},u=(e,t,n,i,s,a)=>{a=a||!!t.dynamicChildren;const{type:l,props:c,patchFlag:u,shapeFlag:d,dirs:p}=t,f="input"===l&&p||"option"===l;if(f||-1!==u){if(p&&du(t,null,n,"created"),c)if(f||!a||48&u)for(const t in c)(f&&t.endsWith("value")||Ho(t)&&!ca(t))&&r(e,t,null,c[t],!1,void 0,n);else c.onClick&&r(e,"onClick",null,c.onClick,!1,void 0,n);let l;if((l=c&&c.onVnodeBeforeMount)&&Iu(l,n,t),p&&du(t,null,n,"beforeMount"),((l=c&&c.onVnodeMounted)||p)&&hc((()=>{l&&Iu(l,n,t),p&&du(t,null,n,"mounted")}),i),16&d&&(!c||!c.innerHTML&&!c.textContent)){let r=h(e.firstChild,t,e,n,i,s,a);for(;r;){_u=!0;const e=r;r=r.nextSibling,o(e)}}else 8&d&&e.textContent!==t.children&&(_u=!0,e.textContent=t.children)}return e.nextSibling},h=(e,t,r,i,s,o,a)=>{a=a||!!t.dynamicChildren;const l=t.children,u=l.length;for(let h=0;h<u;h++){const t=a?l[h]:l[h]=Qu(l[h]);if(e)e=c(e,t,i,s,o,a);else{if(t.type===Nu&&!t.children)continue;_u=!0,n(null,t,r,null,i,s,gu(r),o)}}return e},d=(e,t,n,r,o,c)=>{const{slotScopeIds:u}=t;u&&(o=o?o.concat(u):u);const d=s(e),p=h(i(e),t,d,n,r,o,c);return p&&vu(p)&&"]"===p.data?i(t.anchor=p):(_u=!0,a(t.anchor=l("]"),d,p),p)},p=(e,t,r,a,l,c)=>{if(_u=!0,t.el=null,c){const t=f(e);for(;;){const n=i(e);if(!n||n===t)break;o(n)}}const u=i(e),h=s(e);return o(e),n(null,t,h,u,r,a,gu(h),l),u},f=e=>{let t=0;for(;e;)if((e=i(e))&&vu(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return i(e);t--}return e};return[(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),void Uh();_u=!1,c(t.firstChild,e,null,null,null),Uh(),_u&&console.error("Hydration completed but contains mismatches.")},c]}const bu=hc;function wu(e,t){(wa||(wa="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:u,nextSibling:h,setScopeId:d=Wo,cloneNode:p,insertStaticContent:f}=e,m=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wu(e,t)&&(r=W(e),D(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Nu:_(e,t,n,r);break;case Pu:g(e,t,n,r);break;case Ou:null==e&&v(t,n,r,o);break;case Ru:E(e,t,n,r,i,s,o,a,l);break;default:1&h?y(e,t,n,r,i,s,o,a,l):6&h?S(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,$)}null!=u&&i&&Cu(u,e&&e.ref,s,t||e,!t)},_=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},g=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=f(e.children,t,n,r)},y=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?b(t,n,r,i,s,o,a,l):I(e,t,i,s,o,a,l)},b=(e,t,r,o,a,l,u,h)=>{let d,f;const{type:m,props:_,shapeFlag:g,transition:v,patchFlag:y,dirs:b}=e;if(e.el&&void 0!==p&&-1===y)d=e.el=p(e.el);else{if(d=e.el=s(e.type,l,_&&_.is,_),8&g?c(d,e.children):16&g&&C(e.children,d,null,o,a,l&&"foreignObject"!==m,u,h),b&&du(e,null,o,"created"),_){for(const t in _)"value"===t||ca(t)||i(d,t,null,_[t],l,e.children,o,a,q);"value"in _&&i(d,"value",null,_.value),(f=_.onVnodeBeforeMount)&&Iu(f,o,e)}w(d,e,e.scopeId,u,o)}b&&du(e,null,o,"beforeMount");const I=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;I&&v.beforeEnter(d),n(d,t,r),((f=_&&_.onVnodeMounted)||I||b)&&bu((()=>{f&&Iu(f,o,e),I&&v.enter(d),b&&du(e,null,o,"mounted")}),a)},w=(e,t,n,r,i)=>{if(n&&d(e,n),r)for(let s=0;s<r.length;s++)d(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;w(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?Xu(e[c]):Qu(e[c]);m(null,l,t,n,r,i,s,o,a)}},I=(e,t,n,r,s,o,a)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=t;u|=16&e.patchFlag;const p=e.props||jo,f=t.props||jo;let m;(m=f.onVnodeBeforeUpdate)&&Iu(m,n,t,e),d&&du(t,e,n,"beforeUpdate");const _=s&&"foreignObject"!==t.type;if(h?k(e.dynamicChildren,h,l,n,r,_,o):a||x(e,t,l,null,n,r,_,o,!1),u>0){if(16&u)T(l,t,p,f,n,r,s);else if(2&u&&p.class!==f.class&&i(l,"class",null,f.class,s),4&u&&i(l,"style",p.style,f.style,s),8&u){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=p[a],u=f[a];u===c&&"value"!==a||i(l,a,c,u,s,e.children,n,r,q)}}1&u&&e.children!==t.children&&c(l,t.children)}else a||null!=h||T(l,t,p,f,n,r,s);((m=f.onVnodeUpdated)||d)&&bu((()=>{m&&Iu(m,n,t,e),d&&du(t,e,n,"updated")}),r)},k=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],h=l.el&&(l.type===Ru||!Wu(l,c)||70&l.shapeFlag)?u(l.el):n;m(l,c,h,null,r,i,s,o,!0)}},T=(e,t,n,r,s,o,a)=>{if(n!==r){for(const l in r){if(ca(l))continue;const c=r[l],u=n[l];c!==u&&"value"!==l&&i(e,l,u,c,a,t.children,s,o,q)}if(n!==jo)for(const l in n)ca(l)||l in r||i(e,l,n[l],null,a,t.children,s,o,q);"value"in r&&i(e,"value",n.value,r.value)}},E=(e,t,r,i,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(n(h,r,i),n(d,r,i),C(t.children,r,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(k(e.dynamicChildren,f,r,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&ku(e,t,!0)):x(e,t,r,d,s,a,l,c,u)},S=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):R(t,n,r,i,s,o,l):N(e,t,l)},R=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||oh,s={uid:ah++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tu(r,i),emitsOptions:tc(r,i),emit:null,emitted:null,propsDefaults:jo,inheritAttrs:r.inheritAttrs,ctx:jo,data:jo,props:jo,attrs:jo,slots:jo,refs:jo,setupState:jo,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=ec.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(kc(e)&&(a.ctx.renderer=$),function(e,t=!1){ph=t;const{props:n,children:r}=e.vnode,i=dh(e);Xc(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Fl(t),ya(t,"_",n)):cu(t,e.slots={})}else e.slots={},t&&uu(e,t);ya(e.slots,Vu,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ul(new Proxy(e.ctx,sh));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(Va(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;uh(e),qa();const i=gh(r,e,0,[e.props,n]);if(Wa(),hh(),ia(i)){if(i.then(hh,hh),t)return i.then((n=>{fh(e,n,t)})).catch((t=>{yh(t,e,0)}));e.asyncDep=i}else fh(e,i,t)}else mh(e,t)}(e,t):void 0;ph=!1}(a),a.asyncDep){if(i&&i.registerDep(a,P),!e.el){const e=a.subTree=Bu(Pu);g(null,e,t,n)}}else P(a,e,t,n,i,s,o)},N=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||uc(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?uc(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!nc(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void O(r,t,n);r.next=t,function(e){const t=Ch.indexOf(e);t>Ih&&Ch.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},P=(e,t,n,r,i,s,o)=>{const a=new Da((()=>{if(e.isMounted){let t,{next:n,bu:r,u:l,parent:c,vnode:h}=e,d=n;a.allowRecurse=!1,n?(n.el=h.el,O(e,n,o)):n=h,r&&va(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Iu(t,c,n,h),a.allowRecurse=!0;const p=ac(e),f=e.subTree;e.subTree=p,m(f,p,u(f.el),W(f),e,i,s),n.el=p.el,null===d&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,p.el),l&&bu(l,i),(t=n.props&&n.props.onVnodeUpdated)&&bu((()=>Iu(t,c,n,h)),i)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Ic(t);if(a.allowRecurse=!1,u&&va(u),!p&&(o=c&&c.onVnodeBeforeMount)&&Iu(o,d,t),a.allowRecurse=!0,l&&z){const n=()=>{e.subTree=ac(e),z(l,e.subTree,e,i,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=ac(e);m(null,o,n,r,e,i,s),t.el=o.el}if(h&&bu(h,i),!p&&(o=c&&c.onVnodeMounted)){const e=t;bu((()=>Iu(o,d,e)),i)}256&t.shapeFlag&&e.a&&bu(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>Lh(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},O=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Fl(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;Zc(e,t,i,s)&&(c=!0);for(const s in a)t&&(Yo(t,s)||(r=fa(s))!==s&&Yo(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=eu(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&Yo(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(l)if(Yo(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=da(o);i[t]=eu(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&za(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=jo;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Bo(i,t),n||1!==e||delete i._):(s=!t.$stable,cu(t,i)),o=t}else t&&(uu(e,t),o={default:1});if(s)for(const a in i)ou(a)||a in o||delete i[a]})(e,t.children,n),qa(),Fh(void 0,e.update),Wa()},x=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void L(u,d,n,r,i,s,o,a,l);if(256&p)return void A(u,d,n,r,i,s,o,a,l)}8&f?(16&h&&q(u,i,s),d!==u&&c(n,d)):16&h?16&f?L(u,d,n,r,i,s,o,a,l):q(u,i,s,!0):(8&h&&c(n,""),16&f&&C(d,n,r,i,s,o,a,l))},A=(e,t,n,r,i,s,o,a,l)=>{t=t||qo;const c=(e=e||qo).length,u=t.length,h=Math.min(c,u);let d;for(d=0;d<h;d++){const r=t[d]=l?Xu(t[d]):Qu(t[d]);m(e[d],r,n,null,i,s,o,a,l)}c>u?q(e,i,s,!0,!1,h):C(t,n,r,i,s,o,a,l,h)},L=(e,t,n,r,i,s,o,a,l)=>{let c=0;const u=t.length;let h=e.length-1,d=u-1;for(;c<=h&&c<=d;){const r=e[c],u=t[c]=l?Xu(t[c]):Qu(t[c]);if(!Wu(r,u))break;m(r,u,n,null,i,s,o,a,l),c++}for(;c<=h&&c<=d;){const r=e[h],c=t[d]=l?Xu(t[d]):Qu(t[d]);if(!Wu(r,c))break;m(r,c,n,null,i,s,o,a,l),h--,d--}if(c>h){if(c<=d){const e=d+1,h=e<u?t[e].el:r;for(;c<=d;)m(null,t[c]=l?Xu(t[c]):Qu(t[c]),n,h,i,s,o,a,l),c++}}else if(c>d)for(;c<=h;)D(e[c],i,s,!0),c++;else{const p=c,f=c,_=new Map;for(c=f;c<=d;c++){const e=t[c]=l?Xu(t[c]):Qu(t[c]);null!=e.key&&_.set(e.key,c)}let g,v=0;const y=d-f+1;let b=!1,w=0;const C=new Array(y);for(c=0;c<y;c++)C[c]=0;for(c=p;c<=h;c++){const r=e[c];if(v>=y){D(r,i,s,!0);continue}let u;if(null!=r.key)u=_.get(r.key);else for(g=f;g<=d;g++)if(0===C[g-f]&&Wu(r,t[g])){u=g;break}void 0===u?D(r,i,s,!0):(C[u-f]=c+1,u>=w?w=u:b=!0,m(r,t[u],n,null,i,s,o,a,l),v++)}const I=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(C):qo;for(g=I.length-1,c=y-1;c>=0;c--){const e=f+c,h=t[e],d=e+1<u?t[e+1].el:r;0===C[c]?m(null,h,n,d,i,s,o,a,l):b&&(g<0||c!==I[g]?M(h,n,d,2):g--)}}},M=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void M(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,$);if(a===Ru){n(o,t,r);for(let e=0;e<c.length;e++)M(c[e],t,r,i);return void n(e.anchor,t,r)}if(a===Ou)return void(({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=h(e),n(e,r,i),e=s;n(t,r,i)})(e,t,r);if(2!==i&&1&u&&l)if(0===i)l.beforeEnter(o),n(o,t,r),bu((()=>l.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=l,a=()=>n(o,t,r),c=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,c):c()}else n(o,t,r)},D=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Cu(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Ic(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&Iu(m,t,e),6&u)j(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&du(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,$,r):c&&(s!==Ru||h>0&&64&h)?q(c,t,n,!1,!0):(s===Ru&&384&h||!i&&16&u)&&q(l,t,n),r&&F(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&bu((()=>{m&&Iu(m,t,e),p&&du(e,null,t,"unmounted")}),n)},F=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===Ru)return void U(n,i);if(t===Ou)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),r(e),e=n;r(t)})(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},U=(e,t)=>{let n;for(;e!==t;)n=h(e),r(e),e=n;r(t)},j=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&va(r),i.stop(),s&&(s.active=!1,D(o,e,t,n)),a&&bu(a,t),bu((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)D(e[o],t,n,r,i)},W=e=>6&e.shapeFlag?W(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),V=(e,t,n)=>{null==e?t._vnode&&D(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),Uh(),t._vnode=e},$={p:m,um:D,m:M,r:F,mt:R,mc:C,pc:x,pbc:k,n:W,o:e};let H,z;return t&&([H,z]=t($)),{render:V,hydrate:H,createApp:mu(V,H)}}function Cu(e,t,n,r,i=!1){if(Jo(e))return void e.forEach(((e,s)=>Cu(e,t&&(Jo(t)?t[s]:t),n,r,i)));if(Ic(r)&&!i)return;const s=4&r.shapeFlag?_h(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===jo?a.refs={}:a.refs,h=a.setupState;if(null!=c&&c!==l&&(ta(c)?(u[c]=null,Yo(h,c)&&(h[c]=null)):$l(c)&&(c.value=null)),ta(l)){const e=()=>{u[l]=o,Yo(h,l)&&(h[l]=o)};o?(e.id=-1,bu(e,n)):e()}else if($l(l)){const e=()=>{l.value=o};o?(e.id=-1,bu(e,n)):e()}else ea(l)&&gh(l,a,12,[o,u])}function Iu(e,t,n,r=null){vh(e,t,7,[n,r])}function ku(e,t,n=!1){const r=e.children,i=t.children;if(Jo(r)&&Jo(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Xu(i[s]),t.el=e.el),n||ku(e,t))}}function Tu(e,t){return function(e,t,n=!0,r=!1){const i=rc||lh;if(i){const n=i.type;if("components"===e){const e=function(e){return ea(e)&&e.displayName||e.name}(n);if(e&&(e===t||e===da(t)||e===ma(da(t))))return n}const s=Su(i[e]||n[e],t)||Su(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Eu=Symbol();function Su(e,t){return e&&(e[t]||e[da(t)]||e[ma(da(t))])}const Ru=Symbol(void 0),Nu=Symbol(void 0),Pu=Symbol(void 0),Ou=Symbol(void 0),xu=[];let Au=null;function Lu(e=!1){xu.push(Au=e?null:[])}let Mu=1;function Du(e){Mu+=e}function Fu(e){return e.dynamicChildren=Mu>0?Au||qo:null,xu.pop(),Au=xu[xu.length-1]||null,Mu>0&&Au&&Au.push(e),e}function Uu(e,t,n,r,i,s){return Fu(zu(e,t,n,r,i,s,!0))}function ju(e,t,n,r,i){return Fu(Bu(e,t,n,r,i,!0))}function qu(e){return!!e&&!0===e.__v_isVNode}function Wu(e,t){return e.type===t.type&&e.key===t.key}const Vu="__vInternal",$u=({key:e})=>null!=e?e:null,Hu=({ref:e})=>null!=e?ta(e)||$l(e)||ea(e)?{i:rc,r:e}:e:null;function zu(e,t=null,n=null,r=0,i=null,s=(e===Ru?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$u(t),ref:t&&Hu(t),scopeId:ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Zu(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=ta(n)?8:16),Mu>0&&!o&&Au&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Au.push(l),l}const Bu=function(e,t=null,n=null,r=0,i=null,s=!1){e&&e!==Eu||(e=Pu);if(qu(e)){const r=Gu(e,t,!0);return n&&Zu(r,n),r}o=e,ea(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?Dl(e)||Vu in e?Bo({},e):e:null}(t);let{class:e,style:n}=t;e&&!ta(e)&&(t.class=Lo(e)),ra(n)&&(Dl(n)&&!Jo(n)&&(n=Bo({},n)),t.style=Po(n))}const a=ta(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:ra(e)?4:ea(e)?2:0;return zu(e,t,n,r,i,a,s,!0)};function Gu(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Lo([t.class,r.class]));else if("style"===e)t.style=Po([t.style,r.style]);else if(Ho(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&$u(a),ref:t&&t.ref?n&&i?Jo(i)?i.concat(Hu(t)):[i,Hu(t)]:Hu(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ru?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gu(e.ssContent),ssFallback:e.ssFallback&&Gu(e.ssFallback),el:e.el,anchor:e.anchor}}function Ku(e=" ",t=0){return Bu(Nu,null,e,t)}function Yu(e,t){const n=Bu(Ou,null,e);return n.staticCount=t,n}function Ju(e="",t=!1){return t?(Lu(),ju(Pu,null,e)):Bu(Pu,null,e)}function Qu(e){return null==e||"boolean"==typeof e?Bu(Pu):Jo(e)?Bu(Ru,null,e.slice()):"object"==typeof e?Xu(e):Bu(Nu,null,String(e))}function Xu(e){return null===e.el||e.memo?e:Gu(e)}function Zu(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Jo(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Zu(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Vu in t?3===r&&rc&&(1===rc.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=rc}}else ea(t)?(t={default:t,_ctx:rc},n=32):(t=String(t),64&r?(n=16,t=[Ku(t)]):n=8);e.children=t,e.shapeFlag|=n}function eh(e,t,n,r){let i;const s=n&&n[r];if(Jo(e)||ta(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(ra(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}function th(e,t,n={},r,i){if(rc.isCE)return Bu("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),Lu();const o=s&&nh(s(n)),a=ju(Ru,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function nh(e){return e.some((e=>!qu(e)||e.type!==Pu&&!(e.type===Ru&&!nh(e.children))))?e:null}const rh=e=>e?dh(e)?_h(e)||e.proxy:rh(e.parent):null,ih=Bo(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rh(e.parent),$root:e=>rh(e.root),$emit:e=>e.emit,$options:e=>zc(e),$forceUpdate:e=>()=>Lh(e.update),$nextTick:e=>Ah.bind(e.proxy),$watch:e=>Hh.bind(e)}),sh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==jo&&Yo(r,t))return o[t]=0,r[t];if(i!==jo&&Yo(i,t))return o[t]=1,i[t];if((c=e.propsOptions[0])&&Yo(c,t))return o[t]=2,s[t];if(n!==jo&&Yo(n,t))return o[t]=3,n[t];Wc&&(o[t]=4)}}const u=ih[t];let h,d;return u?("$attrs"===t&&Va(e,0,t),u(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==jo&&Yo(n,t)?(o[t]=3,n[t]):(d=l.config.globalProperties,Yo(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==jo&&Yo(i,t))i[t]=n;else if(r!==jo&&Yo(r,t))r[t]=n;else if(Yo(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==jo&&Yo(e,o)||t!==jo&&Yo(t,o)||(a=s[0])&&Yo(a,o)||Yo(r,o)||Yo(ih,o)||Yo(i.config.globalProperties,o)}},oh=pu();let ah=0;let lh=null;const ch=()=>lh||rc,uh=e=>{lh=e,e.scope.on()},hh=()=>{lh&&lh.scope.off(),lh=null};function dh(e){return 4&e.vnode.shapeFlag}let ph=!1;function fh(e,t,n){ea(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ra(t)&&(e.setupState=Yl(t)),mh(e,n)}function mh(e,t,n){const r=e.type;e.render||(e.render=r.render||Wo),uh(e),qa(),Vc(e),Wa(),hh()}function _h(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yl(Ul(e.exposed)),{get:(t,n)=>n in t?t[n]:n in ih?ih[n](e):void 0}))}function gh(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){yh(s,t,n)}return i}function vh(e,t,n,r){if(ea(e)){const i=gh(e,t,n,r);return i&&ia(i)&&i.catch((e=>{yh(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(vh(e[s],t,n,r));return i}function yh(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void gh(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let bh=!1,wh=!1;const Ch=[];let Ih=0;const kh=[];let Th=null,Eh=0;const Sh=[];let Rh=null,Nh=0;const Ph=Promise.resolve();let Oh=null,xh=null;function Ah(e){const t=Oh||Ph;return e?t.then(this?e.bind(this):e):t}function Lh(e){Ch.length&&Ch.includes(e,bh&&e.allowRecurse?Ih+1:Ih)||e===xh||(null==e.id?Ch.push(e):Ch.splice(function(e){let t=Ih+1,n=Ch.length;for(;t<n;){const r=t+n>>>1;jh(Ch[r])<e?t=r+1:n=r}return t}(e.id),0,e),Mh())}function Mh(){bh||wh||(wh=!0,Oh=Ph.then(qh))}function Dh(e,t,n,r){Jo(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Mh()}function Fh(e,t=null){if(kh.length){for(xh=t,Th=[...new Set(kh)],kh.length=0,Eh=0;Eh<Th.length;Eh++)Th[Eh]();Th=null,Eh=0,xh=null,Fh(e,t)}}function Uh(e){if(Sh.length){const e=[...new Set(Sh)];if(Sh.length=0,Rh)return void Rh.push(...e);for(Rh=e,Rh.sort(((e,t)=>jh(e)-jh(t))),Nh=0;Nh<Rh.length;Nh++)Rh[Nh]();Rh=null,Nh=0}}const jh=e=>null==e.id?1/0:e.id;function qh(e){wh=!1,bh=!0,Fh(e),Ch.sort(((e,t)=>jh(e)-jh(t)));try{for(Ih=0;Ih<Ch.length;Ih++){const e=Ch[Ih];e&&!1!==e.active&&gh(e,null,14)}}finally{Ih=0,Ch.length=0,Uh(),bh=!1,Oh=null,(Ch.length||kh.length||Sh.length)&&qh(e)}}const Wh={};function Vh(e,t,n){return $h(e,t,n)}function $h(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=jo){const a=lh;let l,c,u=!1,h=!1;if($l(e)?(l=()=>e.value,u=!!e._shallow):Ll(e)?(l=()=>e,r=!0):Jo(e)?(h=!0,u=e.some(Ll),l=()=>e.map((e=>$l(e)?e.value:Ll(e)?Bh(e):ea(e)?gh(e,a,2):void 0))):l=ea(e)?t?()=>gh(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),vh(e,a,3,[d])}:Wo,t&&r){const e=l;l=()=>Bh(e())}let d=e=>{c=_.onStop=()=>{gh(e,a,4)}};if(ph)return d=Wo,t?n&&vh(t,a,3,[l(),h?[]:void 0,d]):l(),Wo;let p=h?[]:Wh;const f=()=>{if(_.active)if(t){const e=_.run();(r||u||(h?e.some(((e,t)=>ga(e,p[t]))):ga(e,p)))&&(c&&c(),vh(t,a,3,[e,p===Wh?void 0:p,d]),p=e)}else _.run()};let m;f.allowRecurse=!!t,m="sync"===i?f:"post"===i?()=>bu(f,a&&a.suspense):()=>{!a||a.isMounted?function(e){Dh(e,Th,kh,Eh)}(f):f()};const _=new Da(l,m);return t?n?f():p=_.run():"post"===i?bu(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Go(a.scope.effects,_)}}function Hh(e,t,n){const r=this.proxy,i=ta(e)?e.includes(".")?zh(r,e):()=>r[e]:e.bind(r,r);let s;ea(t)?s=t:(s=t.handler,n=t);const o=lh;uh(this);const a=$h(i,s.bind(r),n);return o?uh(o):hh(),a}function zh(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Bh(e,t){if(!ra(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),$l(e))Bh(e.value,t);else if(Jo(e))for(let n=0;n<e.length;n++)Bh(e[n],t);else if(Xo(e)||Qo(e))e.forEach((e=>{Bh(e,t)}));else if(aa(e))for(const n in e)Bh(e[n],t);return e}function Gh(e,t,n){const r=arguments.length;return 2===r?ra(t)&&!Jo(t)?qu(t)?Bu(e,null,[t]):Bu(e,t):Bu(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qu(n)&&(n=[n]),Bu(e,t,n))}const Kh="3.2.18",Yh="undefined"!=typeof document?document:null,Jh=new Map,Qh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Yh.createElementNS("http://www.w3.org/2000/svg",e):Yh.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Yh.createTextNode(e),createComment:e=>Yh.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yh.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=Jh.get(e);if(!s){const t=Yh.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}Jh.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const Xh=/\s*!important$/;function Zh(e,t,n){if(Jo(n))n.forEach((n=>Zh(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=td[t];if(n)return n;let r=da(t);if("filter"!==r&&r in e)return td[t]=r;r=ma(r);for(let i=0;i<ed.length;i++){const n=ed[i]+r;if(n in e)return td[t]=n}return t}(e,t);Xh.test(n)?e.setProperty(fa(r),n.replace(Xh,""),"important"):e[r]=n}}const ed=["Webkit","Moz","ms"],td={};const nd="http://www.w3.org/1999/xlink";let rd=Date.now,id=!1;if("undefined"!=typeof window){rd()>document.createEvent("Event").timeStamp&&(rd=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);id=!!(e&&Number(e[1])<=53)}let sd=0;const od=Promise.resolve(),ad=()=>{sd=0};function ld(e,t,n,r){e.addEventListener(t,n,r)}function cd(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ud.test(e)){let n;for(t={};n=e.match(ud);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[fa(e.slice(2)),t]}(t);if(r){ld(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||rd();(id||r>=n.attached-1)&&vh(function(e,t){if(Jo(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>sd||(od.then(ad),sd=rd()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;const hd=/^on[a-z]/;const dd="transition",pd=(e,{slots:t})=>Gh(mc,function(e){const t={};for(const R in e)R in fd||(t[R]=e[R]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,f=function(e){if(null==e)return null;if(ra(e))return[gd(e.enter),gd(e.leave)];{const t=gd(e);return[t,t]}}(i),m=f&&f[0],_=f&&f[1],{onBeforeEnter:g,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:w,onBeforeAppear:C=g,onAppear:I=v,onAppearCancelled:k=y}=t,T=(e,t,n)=>{yd(e,t?u:a),yd(e,t?c:o),n&&n()},E=(e,t)=>{yd(e,p),yd(e,d),t&&t()},S=e=>(t,n)=>{const i=e?I:v,o=()=>T(t,e,n);md(i,[t,o]),bd((()=>{yd(t,e?l:s),vd(t,e?u:a),_d(i)||Cd(t,r,m,o)}))};return Bo(t,{onBeforeEnter(e){md(g,[e]),vd(e,s),vd(e,o)},onBeforeAppear(e){md(C,[e]),vd(e,l),vd(e,c)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>E(e,t);vd(e,h),document.body.offsetHeight,vd(e,d),bd((()=>{yd(e,h),vd(e,p),_d(b)||Cd(e,r,_,n)})),md(b,[e,n])},onEnterCancelled(e){T(e,!1),md(y,[e])},onAppearCancelled(e){T(e,!0),md(k,[e])},onLeaveCancelled(e){E(e),md(w,[e])}})}(e),t);pd.displayName="Transition";const fd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pd.props=Bo({},mc.props,fd);const md=(e,t=[])=>{Jo(e)?e.forEach((e=>e(...t))):e&&e(...t)},_d=e=>!!e&&(Jo(e)?e.some((e=>e.length>1)):e.length>1);function gd(e){return ba(e)}function vd(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function yd(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function bd(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let wd=0;function Cd(e,t,n,r){const i=e._endId=++wd,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Id(i,s),a=r("animationDelay"),l=r("animationDuration"),c=Id(a,l);let u=null,h=0,d=0;t===dd?o>0&&(u=dd,h=o,d=s.length):"animation"===t?c>0&&(u="animation",h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?dd:"animation":null,d=u?u===dd?s.length:l.length:0);const p=u===dd&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:h,propCount:d,hasTransform:p}}(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function Id(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>kd(t)+kd(e[n]))))}function kd(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Td=e=>{const t=e.props["onUpdate:modelValue"];return Jo(t)?e=>va(t,e):t};function Ed(e){e.target.composing=!0}function Sd(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Rd={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Td(i);const s=r||i.props&&"number"===i.props.type;ld(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=ba(r)),e._assign(r)})),n&&ld(e,"change",(()=>{e.value=e.value.trim()})),t||(ld(e,"compositionstart",Ed),ld(e,"compositionend",Sd),ld(e,"change",Sd))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Td(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&ba(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Nd={deep:!0,created(e,t,n){e._assign=Td(n),ld(e,"change",(()=>{const t=e._modelValue,n=function(e){return"_value"in e?e._value:e.value}(e),r=e.checked,i=e._assign;if(Jo(t)){const e=Do(t,n),s=-1!==e;if(r&&!s)i(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),i(n)}}else if(Xo(t)){const e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Od(e,r))}))},mounted:Pd,beforeUpdate(e,t,n){e._assign=Td(n),Pd(e,t,n)}};function Pd(e,{value:t,oldValue:n},r){e._modelValue=t,Jo(t)?e.checked=Do(t,r.props.value)>-1:Xo(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Mo(t,Od(e,!0)))}function Od(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const xd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ad=(e,t)=>n=>{if(!("key"in n))return;const r=fa(n.key);return t.some((e=>e===r||xd[e]===r))?e(n):void 0},Ld={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Md(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Md(e,!0),r.enter(e)):r.leave(e,(()=>{Md(e,!1)})):Md(e,t))},beforeUnmount(e,{value:t}){Md(e,t)}};function Md(e,t){e.style.display=t?e._vod:"none"}const Dd=Bo({patchProp:(e,t,n,r,i=!1,s,o,a,l)=>{"class"===t?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,i):"style"===t?function(e,t,n){const r=e.style,i=r.display;if(n)if(ta(n))t!==n&&(r.cssText=n);else{for(const e in n)Zh(r,e,n[e]);if(t&&!ta(t))for(const e in t)null==n[e]&&Zh(r,e,"")}else e.removeAttribute("style");"_vod"in e&&(r.display=i)}(e,n,r):Ho(t)?zo(t)||cd(e,t,0,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&hd.test(t)&&ea(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(hd.test(t)&&ta(n))return!1;return t in e}(e,t,r,i))?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if("boolean"===r)return void(e[t]=No(n));if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(a){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){}}(e,t,r,s,o,a,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(nd,t.slice(6,t.length)):e.setAttributeNS(nd,t,n);else{const r=Ro(t);null==n||r&&!No(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,i))}},Qh);let Fd,Ud=!1;function jd(){return Fd||(Fd=wu(Dd))}function qd(){return Fd=Ud?Fd:wu(Dd,yu),Ud=!0,Fd}function Wd(e){if(ta(e)){return document.querySelector(e)}return e}
/*!
  * vue-i18n v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function Vd(e,...t){return Zs(e,null,void 0)}const $d=gs("__transrateVNode"),Hd=gs("__datetimeParts"),zd=gs("__numberParts");gs("__enableEmitter"),gs("__disableEmitter");const Bd=gs("__setPluralRules");gs("__intlifyMeta");let Gd=0;function Kd(e){return(t,n,r,i)=>e(n,r,ch()||void 0,i)}function Yd(e,t){const{messages:n,__i18n:r}=t,i=Ds(n)?n:Ns(r)?{}:{[e]:{}};if(Ns(r)&&r.forEach((({locale:e,resource:t})=>{e?(i[e]=i[e]||{},Qd(t,i[e])):Qd(t,i)})),t.flatJson)for(const s in i)Rs(i,s)&&Bs(i[s]);return i}const Jd=e=>!As(e)||Ns(e);function Qd(e,t){if(Jd(e)||Jd(t))throw Vd(20);for(const n in e)Rs(e,n)&&(Jd(e[n])||Jd(t[n])?t[n]=e[n]:Qd(e[n],t[n]))}function Xd(e={}){const{__root:t}=e,n=void 0===t;let r=!xs(e.inheritLocale)||e.inheritLocale;const i=Hl(t&&r?t.locale.value:Os(e.locale)?e.locale:"en-US"),s=Hl(t&&r?t.fallbackLocale.value:Os(e.fallbackLocale)||Ns(e.fallbackLocale)||Ds(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:i.value),o=Hl(Yd(i.value,e)),a=Hl(Ds(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),l=Hl(Ds(e.numberFormats)?e.numberFormats:{[i.value]:{}});let c=t?t.missingWarn:!xs(e.missingWarn)&&!bs(e.missingWarn)||e.missingWarn,u=t?t.fallbackWarn:!xs(e.fallbackWarn)&&!bs(e.fallbackWarn)||e.fallbackWarn,h=t?t.fallbackRoot:!xs(e.fallbackRoot)||e.fallbackRoot,d=!!e.fallbackFormat,p=Ps(e.missing)?e.missing:null,f=Ps(e.missing)?Kd(e.missing):null,m=Ps(e.postTranslation)?e.postTranslation:null,_=!xs(e.warnHtmlMessage)||e.warnHtmlMessage,g=!!e.escapeParameter;const v=t?t.modifiers:Ds(e.modifiers)?e.modifiers:{};let y,b=e.pluralRules||t&&t.pluralRules;y=ao({version:"9.1.7",locale:i.value,fallbackLocale:s.value,messages:o.value,datetimeFormats:a.value,numberFormats:l.value,modifiers:v,pluralRules:b,missing:null===f?void 0:f,missingWarn:c,fallbackWarn:u,fallbackFormat:d,unresolving:!0,postTranslation:null===m?void 0:m,warnHtmlMessage:_,escapeParameter:g,__datetimeFormatters:Ds(y)?y.__datetimeFormatters:void 0,__numberFormatters:Ds(y)?y.__numberFormatters:void 0,__v_emitter:Ds(y)?y.__v_emitter:void 0,__meta:{framework:"vue"}}),fo(y,i.value,s.value);const w=Zl({get:()=>i.value,set:e=>{i.value=e,y.locale=i.value}}),C=Zl({get:()=>s.value,set:e=>{s.value=e,y.fallbackLocale=s.value,fo(y,i.value,e)}}),I=Zl((()=>o.value)),k=Zl((()=>a.value)),T=Zl((()=>l.value));function E(e,n,r,c,u,d){let p;if(i.value,s.value,o.value,a.value,l.value,__INTLIFY_PROD_DEVTOOLS__)try{so((()=>{const e=ch();return e&&e.type.__INTLIFY_META__?{__INTLIFY_META__:e.type.__INTLIFY_META__}:null})()),p=e(y)}finally{so(null)}else p=e(y);if(ys(p)&&-1===p){const[e,r]=n();return t&&h?c(t):u(e)}if(d(p))return p;throw Vd(14)}function S(...e){return E((t=>vo(t,...e)),(()=>bo(...e)),0,(t=>t.t(...e)),(e=>e),(e=>Os(e)))}const R={normalize:function(e){return e.map((e=>Os(e)?Bu(Nu,null,e,0):e))},interpolate:e=>e,type:"vnode"};function N(e){return o.value[e]||{}}Gd++,t&&(Vh(t.locale,(e=>{r&&(i.value=e,y.locale=e,fo(y,i.value,s.value))})),Vh(t.fallbackLocale,(e=>{r&&(s.value=e,y.fallbackLocale=e,fo(y,i.value,s.value))})));return{id:Gd,locale:w,fallbackLocale:C,get inheritLocale(){return r},set inheritLocale(e){r=e,e&&t&&(i.value=t.locale.value,s.value=t.fallbackLocale.value,fo(y,i.value,s.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:I,datetimeFormats:k,numberFormats:T,get modifiers(){return v},get pluralRules(){return b||{}},get isGlobal(){return n},get missingWarn(){return c},set missingWarn(e){c=e,y.missingWarn=c},get fallbackWarn(){return u},set fallbackWarn(e){u=e,y.fallbackWarn=u},get fallbackRoot(){return h},set fallbackRoot(e){h=e},get fallbackFormat(){return d},set fallbackFormat(e){d=e,y.fallbackFormat=d},get warnHtmlMessage(){return _},set warnHtmlMessage(e){_=e,y.warnHtmlMessage=e},get escapeParameter(){return g},set escapeParameter(e){g=e,y.escapeParameter=e},t:S,rt:function(...e){const[t,n,r]=e;if(r&&!As(r))throw Vd(15);return S(t,n,Is({resolvedMessage:!0},r||{}))},d:function(...e){return E((t=>wo(t,...e)),(()=>Co(...e)),0,(t=>t.d(...e)),(()=>""),(e=>Os(e)))},n:function(...e){return E((t=>ko(t,...e)),(()=>To(...e)),0,(t=>t.n(...e)),(()=>""),(e=>Os(e)))},te:function(e,t){return null!==zs(N(Os(t)?t:i.value),e)},tm:function(e){const n=function(e){let t=null;const n=co(y,s.value,i.value);for(let r=0;r<n.length;r++){const i=zs(o.value[n[r]]||{},e);if(null!=i){t=i;break}}return t}(e);return null!=n?n:t&&t.tm(e)||{}},getLocaleMessage:N,setLocaleMessage:function(e,t){o.value[e]=t,y.messages=o.value},mergeLocaleMessage:function(e,t){o.value[e]=o.value[e]||{},Qd(t,o.value[e]),y.messages=o.value},getDateTimeFormat:function(e){return a.value[e]||{}},setDateTimeFormat:function(e,t){a.value[e]=t,y.datetimeFormats=a.value,Io(y,e,t)},mergeDateTimeFormat:function(e,t){a.value[e]=Is(a.value[e]||{},t),y.datetimeFormats=a.value,Io(y,e,t)},getNumberFormat:function(e){return l.value[e]||{}},setNumberFormat:function(e,t){l.value[e]=t,y.numberFormats=l.value,Eo(y,e,t)},mergeNumberFormat:function(e,t){l.value[e]=Is(l.value[e]||{},t),y.numberFormats=l.value,Eo(y,e,t)},getPostTranslationHandler:function(){return Ps(m)?m:null},setPostTranslationHandler:function(e){m=e,y.postTranslation=e},getMissingHandler:function(){return p},setMissingHandler:function(e){null!==e&&(f=Kd(e)),p=e,y.missing=f},[$d]:function(...e){return E((t=>{let n;const r=t;try{r.processor=R,n=vo(r,...e)}finally{r.processor=null}return n}),(()=>bo(...e)),0,(t=>t[$d](...e)),(e=>[Bu(Nu,null,e,0)]),(e=>Ns(e)))},[zd]:function(...e){return E((t=>ko(t,...e)),(()=>To(...e)),0,(t=>t[zd](...e)),(()=>[]),(e=>Os(e)||Ns(e)))},[Hd]:function(...e){return E((t=>wo(t,...e)),(()=>Co(...e)),0,(t=>t[Hd](...e)),(()=>[]),(e=>Os(e)||Ns(e)))},[Bd]:function(e){b=e,y.pluralRules=b}}}const Zd={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}},ep={name:"i18n-t",props:Is({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>ys(e)||!isNaN(e)}},Zd),setup(e,t){const{slots:n,attrs:r}=t,i=e.i18n||lp({useScope:e.scope}),s=Object.keys(n).filter((e=>"_"!==e));return()=>{const n={};e.locale&&(n.locale=e.locale),void 0!==e.plural&&(n.plural=Os(e.plural)?+e.plural:e.plural);const o=function({slots:e},t){return 1===t.length&&"default"===t[0]?e.default?e.default():[]:t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),{})}(t,s),a=i[$d](e.keypath,o,n),l=Is({},r);return Os(e.tag)||As(e.tag)?Gh(e.tag,l,a):Gh(Ru,l,a)}}};function tp(e,t,n,r){const{slots:i,attrs:s}=t;return()=>{const t={part:!0};let o={};e.locale&&(t.locale=e.locale),Os(e.format)?t.key=e.format:As(e.format)&&(Os(e.format.key)&&(t.key=e.format.key),o=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?Is({},t,{[r]:e.format[r]}):t),{}));const a=r(e.value,t,o);let l=[t.key];Ns(a)?l=a.map(((e,t)=>{const n=i[e.type];return n?n({[e.type]:e.value,index:t,parts:a}):[e.value]})):Os(a)&&(l=[a]);const c=Is({},s);return Os(e.tag)||As(e.tag)?Gh(e.tag,c,l):Gh(Ru,c,l)}}const np=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],rp={name:"i18n-n",props:Is({value:{type:Number,required:!0},format:{type:[String,Object]}},Zd),setup(e,t){const n=e.i18n||lp({useScope:"parent"});return tp(e,t,np,((...e)=>n[zd](...e)))}},ip=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],sp={name:"i18n-d",props:Is({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Zd),setup(e,t){const n=e.i18n||lp({useScope:"parent"});return tp(e,t,ip,((...e)=>n[Hd](...e)))}};function op(e){const t=(t,{instance:n,value:r,modifiers:i})=>{if(!n||!n.$)throw Vd(22);const s=function(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}(e,n.$),o=function(e){if(Os(e))return{path:e};if(Ds(e)){if(!("path"in e))throw Vd(19);return e}throw Vd(20)}(r);t.textContent=s.t(...function(e){const{path:t,locale:n,args:r,choice:i,plural:s}=e,o={},a=r||{};Os(n)&&(o.locale=n);ys(i)&&(o.plural=i);ys(s)&&(o.plural=s);return[t,a,o]}(o))};return{beforeMount:t,beforeUpdate:t}}function ap(e={}){const t=!!e.globalInjection,n=new Map,r=Xd(e),i=gs(""),s={get mode(){return"composition"},async install(e,...n){e.__VUE_I18N_SYMBOL__=i,e.provide(e.__VUE_I18N_SYMBOL__,s),t&&function(e,t){const n=Object.create(null);cp.forEach((e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw Vd(22);const i=$l(r.value)?{get:()=>r.value.value,set(e){r.value.value=e}}:{get:()=>r.get&&r.get()};Object.defineProperty(n,e,i)})),e.config.globalProperties.$i18n=n,up.forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw Vd(22);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}))}(e,s.global),function(e,t,...n){const r=Ds(n[0])?n[0]:{},i=!!r.useI18nComponentName;(!xs(r.globalInstall)||r.globalInstall)&&(e.component(i?"i18n":ep.name,ep),e.component(rp.name,rp),e.component(sp.name,sp)),e.directive("t",op(t))}(e,s,...n)},get global(){return r},__instances:n,__getInstance:e=>n.get(e)||null,__setInstance(e,t){n.set(e,t)},__deleteInstance(e){n.delete(e)}};return s}function lp(e={}){const t=ch();if(null==t)throw Vd(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw Vd(17);const n=pc(t.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw Vd(22);const r="composition"===n.mode?n.global:n.global.__composer,i=ws(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if("global"===i){let n=As(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(n=Yd(r.locale.value,{messages:n,__i18n:t.type.__i18nGlobal}));const i=Object.keys(n);if(i.length&&i.forEach((e=>{r.mergeLocaleMessage(e,n[e])})),As(e.datetimeFormats)){const t=Object.keys(e.datetimeFormats);t.length&&t.forEach((t=>{r.mergeDateTimeFormat(t,e.datetimeFormats[t])}))}if(As(e.numberFormats)){const t=Object.keys(e.numberFormats);t.length&&t.forEach((t=>{r.mergeNumberFormat(t,e.numberFormats[t])}))}return r}if("parent"===i){let e=function(e,t){let n=null;const r=t.root;let i=t.parent;for(;null!=i;){const t=e;if("composition"===e.mode)n=t.__getInstance(i);else{const e=t.__getInstance(i);null!=e&&(n=e.__composer)}if(null!=n)break;if(r===i)break;i=i.parent}return n}(n,t);return null==e&&(e=r),e}if("legacy"===n.mode)throw Vd(18);const s=n;let o=s.__getInstance(t);if(null==o){const n=t.type,i=Is({},e);n.__i18n&&(i.__i18n=n.__i18n),r&&(i.__root=r),o=Xd(i),function(e,t,n){xc((()=>{}),t),Dc((()=>{e.__deleteInstance(t)}),t)}(s,t),s.__setInstance(t,o)}return o}const cp=["locale","fallbackLocale","availableLocales"],up=["t","rt","d","n","tm"];if("boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(Ts().__INTLIFY_PROD_DEVTOOLS__=!1),__INTLIFY_PROD_DEVTOOLS__){const e=Ts();e.__INTLIFY__=!0,hp=e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__,to=hp}var hp,dp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pp={exports:{}},fp=pp.exports=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e,t,n){return e<t?t:e>n?n:e}function s(e){return 100*(-1+e)}function o(e,t,n){var i;return(i="translate3d"===r.positionUsing?{transform:"translate3d("+s(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(e)+"%,0)"}:{"margin-left":s(e)+"%"}).transition="all "+t+"ms "+n,i}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=i(e,r.minimum,1),n.status=1===e?null:e;var s=n.render(!t),c=s.querySelector(r.barSelector),u=r.speed,h=r.easing;return s.offsetWidth,a((function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),l(c,o(e,u,h)),1===e?(l(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout((function(){l(s,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){n.status&&(n.trickle(),e())}),r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*i(Math.random()*t,.1,.95)),t=i(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always((function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var i,o=t.querySelector(r.barSelector),a=e?"-100":s(n.status||0),c=document.querySelector(r.parent);return l(o,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),r.showSpinner||(i=t.querySelector(r.spinnerSelector))&&p(i),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),l=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+s)in n)return r;return t}function i(e){return e=n(e),t[e]||(t[e]=r(e))}function s(e,t,n){t=i(t),e.style[t]=n}return function(e,t){var n,r,i=arguments;if(2==i.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&s(e,n,r);else s(e,i[1],i[2])}}();function c(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function u(e,t){var n=d(e),r=n+t;c(n,t)||(e.className=r.substring(1))}function h(e,t){var n,r=d(e);c(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n}();
/*!
  * pinia v2.0.0-rc.9
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
let mp;const _p=e=>mp=e,gp=Symbol();function vp(e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}var yp,bp;(bp=yp||(yp={})).direct="direct",bp.patchObject="patch object",bp.patchFunction="patch function";const wp="undefined"!=typeof window;function Cp(){const e=Ta(!0),t=e.run((()=>Hl({})));let n=[];const r=[],i=Ul({install(e){i._a=e,e.provide(gp,i),e.config.globalProperties.$pinia=i,wp&&_p(i),r.forEach((e=>n.push(e)))},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}function Ip(e,t,n){e.push(t);const r=()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)};return!n&&ch()&&Dc(r),r}function kp(e,...t){e.forEach((e=>{e(...t)}))}function Tp(e,t){for(const n in t){const r=t[n],i=e[n];vp(i)&&vp(r)&&!$l(r)&&!Ll(r)?e[n]=Tp(i,r):e[n]=r}return e}const{assign:Ep}=Object;function Sp(e,t,n,r){const{state:i,actions:s,getters:o}=t,a=n.state.value[e];let l;return l=Np(e,(function(){a||(n.state.value[e]=i?i():{});const t=function(e){const t=Jo(e)?new Array(e.length):{};for(const n in e)t[n]=Ql(e,n);return t}(n.state.value[e]);return Ep(t,s,Object.keys(o||{}).reduce(((t,r)=>(t[r]=Ul(Zl((()=>{_p(n);const t=n._s.get(e);return o[r].call(t,t)}))),t)),{}))}),t,n),l.$reset=function(){const e=i?i():{};this.$patch((t=>{Ep(t,e)}))},l}const Rp=()=>{};function Np(e,s,o={},a,l){let c;const u=o.state,h=((e,s)=>{for(var o in s||(s={}))n.call(s,o)&&i(e,o,s[o]);if(t)for(var o of t(s))r.call(s,o)&&i(e,o,s[o]);return e})({actions:{}},o),d={deep:!0};let p,f,m=Ul([]),_=Ul([]);const g=a.state.value[e];g||(a.state.value[e]={}),Hl({});const v=Rp;function y(t,n){return function(){_p(a);const r=Array.from(arguments);let i,s=Rp,o=Rp;function l(e){s=e}function c(e){o=e}kp(_,{args:r,name:t,store:w,after:l,onError:c});try{i=n.apply(this&&this.$id===e?this:w,r)}catch(h){if(!1!==o(h))throw h}if(i instanceof Promise)return i.then((e=>{const t=s(e);return void 0===t?e:t})).catch((e=>{if(!1!==o(e))return Promise.reject(e)}));const u=s(i);return void 0===u?i:u}}const b={_p:a,$id:e,$onAction:Ip.bind(null,_),$patch:function(t){let n;p=!1,"function"==typeof t?(t(a.state.value[e]),n={type:yp.patchFunction,storeId:e,events:f}):(Tp(a.state.value[e],t),n={type:yp.patchObject,payload:t,storeId:e,events:f}),p=!0,kp(m,n,a.state.value[e])},$reset:v,$subscribe(t,n={}){const r=Ip(m,t,n.detached),i=c.run((()=>Vh((()=>a.state.value[e]),((n,r)=>{p&&t({storeId:e,type:yp.direct,events:f},n)}),Ep({},d,n))));return()=>{i(),r()}},$dispose:function(){c.stop(),m=[],_=[],a._s.delete(e)}},w=Ol(Ep({},b));a._s.set(e,w);const C=a._e.run((()=>(c=Ta(),c.run((()=>s())))));for(const t in C){const n=C[t];if($l(n)&&(!(I=n)||!I.effect)||Ll(n))u||(g&&($l(n)?n.value=g[t]:Tp(n,g[t])),a.state.value[e][t]=n);else if("function"==typeof n){const e=y(t,n);C[t]=e,h.actions[t]=n}}var I;return Ep(w,C),Object.defineProperty(w,"$state",{get:()=>a.state.value[e],set:t=>{a.state.value[e]=t}}),a._p.forEach((e=>{Ep(w,c.run((()=>e({store:w,app:a._a,pinia:a,options:h}))))})),g&&u&&(o.hydrate||Tp)(w,g),p=!0,w}function Pp(e,t,n){let r,i;const s="function"==typeof t;function o(e,n){const o=ch();(e=e||o&&pc(gp))&&_p(e),(e=mp)._s.has(r)||(s?Np(r,t,i,e):Sp(r,i,e));return e._s.get(r)}return"string"==typeof e?(r=e,i=s?n:t):(i=e,r=e.id),o.$id=r,o}var Op=/[<>\/\u2028\u2029]/g,xp={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function Ap(e){return xp[e]}var Lp=Cc({render(){return this.$slots.default&&this.$slots.default({})}}),Mp=Object.defineProperty,Dp=Object.defineProperties,Fp=Object.getOwnPropertyDescriptors,Up=Object.getOwnPropertySymbols,jp=Object.prototype.hasOwnProperty,qp=Object.prototype.propertyIsEnumerable,Wp=(e,t,n)=>t in e?Mp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vp=(e,t)=>{for(var n in t||(t={}))jp.call(t,n)&&Wp(e,n,t[n]);if(Up)for(var n of Up(t))qp.call(t,n)&&Wp(e,n,t[n]);return e};"undefined"!=typeof require&&require;
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const $p="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Hp=e=>$p?Symbol(e):"_vr_"+e,zp=Hp("rvlm"),Bp=Hp("rvd"),Gp=Hp("r"),Kp=Hp("rl"),Yp=Hp("rvl"),Jp="undefined"!=typeof window;const Qp=Object.assign;function Xp(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const Zp=()=>{},ef=/\/$/;function tf(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function nf(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function rf(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function sf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!of(e[n],t[n]))return!1;return!0}function of(e,t){return Array.isArray(e)?af(e,t):Array.isArray(t)?af(t,e):e===t}function af(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var lf,cf,uf,hf;(cf=lf||(lf={})).pop="pop",cf.push="push",(hf=uf||(uf={})).back="back",hf.forward="forward",hf.unknown="";function df(e){if(!e)if(Jp){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(ef,"")}const pf=/^[^#]+#/;function ff(e,t){return e.replace(pf,"#")+t}const mf=()=>({left:window.pageXOffset,top:window.pageYOffset});function _f(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function gf(e,t){return(history.state?history.state.position-t:-1)+e}const vf=new Map;function yf(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),nf(n,"")}return nf(n,e)+r+i}function bf(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?mf():null}}function wf(e){const{history:t,location:n}=window,r={value:yf(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=Qp({},i.value,t.state,{forward:e,scroll:mf()});s(o.current,o,!0),s(e,Qp({},bf(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,Qp({},t.state,bf(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function Cf(e){const t=wf(e=df(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=yf(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:lf.pop,direction:u?u>0?uf.forward:uf.back:uf.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(Qp({},e.state,{scroll:mf()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=Qp({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:ff.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function If(e=""){let t=[],n=[""],r=0;function i(e){r++,r===n.length||n.splice(r),n.push(e)}const s={location:"",state:{},base:e,createHref:ff.bind(null,e),replace(e){n.splice(r--,1),i(e)},push(e,t){i(e)},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}),destroy(){t=[],n=[""],r=0},go(e,i=!0){const s=this.location,o=e<0?uf.back:uf.forward;r=Math.max(0,Math.min(r+e,n.length-1)),i&&function(e,n,{direction:r,delta:i}){const s={direction:r,delta:i,type:lf.pop};for(const o of t)o(e,n,s)}(this.location,s,{direction:o,delta:e})}};return Object.defineProperty(s,"location",{enumerable:!0,get:()=>n[r]}),s}function kf(e){return"string"==typeof e||"symbol"==typeof e}const Tf={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ef=Hp("nf");var Sf,Rf;function Nf(e,t){return Qp(new Error,{type:e,[Ef]:!0},t)}function Pf(e,t){return e instanceof Error&&Ef in e&&(null==t||!!(e.type&t))}(Rf=Sf||(Sf={}))[Rf.aborted=4]="aborted",Rf[Rf.cancelled=8]="cancelled",Rf[Rf.duplicated=16]="duplicated";const Of={sensitive:!1,strict:!1,start:!0,end:!0},xf=/[.+*?^${}()[\]/\\]/g;function Af(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Lf(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Af(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const Mf={type:0,value:""},Df=/[a-zA-Z0-9_]/;function Ff(e,t,n){const r=function(e,t){const n=Qp({},Of,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(xf,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Mf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Df.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=Qp(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Uf(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=Vf(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Qp({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=Ff(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!qf(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:Zp}function s(e){if(kf(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Lf(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!qf(e)&&r.set(e.record.name,e)}return t=Vf({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Nf(1,{location:e});o=i.record.name,a=Qp(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Nf(1,{location:e,currentLocation:t});o=i.record.name,a=Qp({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:Wf(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function jf(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function qf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wf(e){return e.reduce(((e,t)=>Qp(e,t.meta)),{})}function Vf(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const $f=/#/g,Hf=/&/g,zf=/\//g,Bf=/=/g,Gf=/\?/g,Kf=/\+/g,Yf=/%5B/g,Jf=/%5D/g,Qf=/%5E/g,Xf=/%60/g,Zf=/%7B/g,em=/%7C/g,tm=/%7D/g,nm=/%20/g;function rm(e){return encodeURI(""+e).replace(em,"|").replace(Yf,"[").replace(Jf,"]")}function im(e){return rm(e).replace(Kf,"%2B").replace(nm,"+").replace($f,"%23").replace(Hf,"%26").replace(Xf,"`").replace(Zf,"{").replace(tm,"}").replace(Qf,"^")}function sm(e){return null==e?"":function(e){return rm(e).replace($f,"%23").replace(Gf,"%3F")}(e).replace(zf,"%2F")}function om(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function am(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Kf," "),i=e.indexOf("="),s=om(i<0?e:e.slice(0,i)),o=i<0?null:om(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function lm(e){let t="";for(let n in e){const r=e[n];if(n=im(n).replace(Bf,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&im(e))):[r&&im(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function cm(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function um(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function hm(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Nf(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Nf(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function dm(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(hm(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||$p&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&hm(l,n,r,o,e)()}))))}}var s;return i}function pm(e){const t=pc(Gp),n=pc(Kp),r=Zl((()=>t.resolve(Gl(e.to)))),i=Zl((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(rf.bind(null,i));if(o>-1)return o;const a=mm(e[t-2]);return t>1&&mm(i)===a&&s[s.length-1].path!==a?s.findIndex(rf.bind(null,e[t-2])):o})),s=Zl((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=Zl((()=>i.value>-1&&i.value===n.matched.length-1&&sf(n.params,r.value.params)));return{route:r,href:Zl((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Gl(e.replace)?"replace":"push"](Gl(e.to)).catch(Zp):Promise.resolve()}}}const fm=Cc({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pm,setup(e,{slots:t}){const n=Ol(pm(e)),{options:r}=pc(Gp),i=Zl((()=>({[_m(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_m(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:Gh("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function mm(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _m=(e,t,n)=>null!=e?e:null!=t?t:n;function gm(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const vm=Cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=pc(Yp),i=Zl((()=>e.route||r.value)),s=pc(Bp,0),o=Zl((()=>i.value.matched[s]));dc(Bp,s+1),dc(zp,o),dc(Yp,i);const a=Hl();return Vh((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&rf(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return gm(n.default,{Component:l,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=Gh(l,Qp({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return gm(n.default,{Component:d,route:r})||d}}});function ym(e){const t=Uf(e.routes,e),n=e.parseQuery||am,r=e.stringifyQuery||lm,i=e.history,s=um(),o=um(),a=um(),l=zl(Tf,!0);let c=Tf;Jp&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xp.bind(null,(e=>""+e)),h=Xp.bind(null,sm),d=Xp.bind(null,om);function p(e,s){if(s=Qp({},s||l.value),"string"==typeof e){const r=tf(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return Qp(r,o,{params:d(o.params),hash:om(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=Qp({},e,{path:tf(n,e.path,s.path).path});else{const t=Qp({},e.params);for(const e in t)null==t[e]&&delete t[e];o=Qp({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Qp({},e,{hash:(f=c,rm(f).replace(Zf,"{").replace(tm,"}").replace(Qf,"^")),path:a.path}));var f;const m=i.createHref(p);return Qp({fullPath:p,hash:c,query:r===lm?cm(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function f(e){return"string"==typeof e?tf(n,e,l.value.path):Qp({},e)}function m(e,t){if(c!==e)return Nf(8,{from:t,to:e})}function _(e){return v(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),Qp({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=c=p(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return v(Qp(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&rf(t.matched[r],n.matched[i])&&sf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=Nf(16,{to:h,from:i}),P(i,i,!0,!1)),(d?Promise.resolve(d):b(h,i)).catch((e=>Pf(e)?e:R(e,h,i))).then((e=>{if(e){if(Pf(e,2))return v(Qp(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=C(h,i,!0,a,s);return w(h,i,e),e}))}function y(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>rf(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>rf(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=dm(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(hm(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),bm(n).then((()=>{n=[];for(const r of s.list())n.push(hm(r,e,t));return n.push(l),bm(n)})).then((()=>{n=dm(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(hm(r,e,t))}));return n.push(l),bm(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(hm(i,e,t));else n.push(hm(r.beforeEnter,e,t));return n.push(l),bm(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=dm(a,"beforeRouteEnter",e,t),n.push(l),bm(n)))).then((()=>{n=[];for(const r of o.list())n.push(hm(r,e,t));return n.push(l),bm(n)})).catch((e=>Pf(e,8)?e:Promise.reject(e)))}function w(e,t,n){for(const r of a.list())r(e,t,n)}function C(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Tf,c=Jp?history.state:{};n&&(r||a?i.replace(e.fullPath,Qp({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,P(e,t,n,a),N()}let I;function k(){I=i.listen(((e,t,n)=>{const r=p(e),s=g(r);if(s)return void v(Qp(s,{replace:!0}),r).catch(Zp);c=r;const o=l.value;var a,u;Jp&&(a=gf(o.fullPath,n.delta),u=mf(),vf.set(a,u)),b(r,o).catch((e=>Pf(e,12)?e:Pf(e,2)?(v(e.to,r).then((e=>{Pf(e,20)&&!n.delta&&n.type===lf.pop&&i.go(-1,!1)})).catch(Zp),Promise.reject()):(n.delta&&i.go(-n.delta,!1),R(e,r,o)))).then((e=>{(e=e||C(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===lf.pop&&Pf(e,20)&&i.go(-1,!1)),w(r,o,e)})).catch(Zp)}))}let T,E=um(),S=um();function R(e,t,n){N(e);const r=S.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function N(e){T||(T=!0,k(),E.list().forEach((([t,n])=>e?n(e):t())),E.reset())}function P(t,n,r,i){const{scrollBehavior:s}=e;if(!Jp||!s)return Promise.resolve();const o=!r&&function(e){const t=vf.get(e);return vf.delete(e),t}(gf(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Ah().then((()=>s(t,n,o))).then((e=>e&&_f(e))).catch((e=>R(e,t,n)))}const O=e=>i.go(e);let x;const A=new Set;return{currentRoute:l,addRoute:function(e,n){let r,i;return kf(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:_,replace:function(e){return _(Qp(f(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:S.add,isReady:function(){return T&&l.value!==Tf?Promise.resolve():new Promise(((e,t)=>{E.add([e,t])}))},install(e){e.component("RouterLink",fm),e.component("RouterView",vm),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Gl(l)}),Jp&&!x&&l.value===Tf&&(x=!0,_(i.location).catch((e=>{})));const t={};for(const r in Tf)t[r]=Zl((()=>l.value[r]));e.provide(Gp,this),e.provide(Kp,Ol(t)),e.provide(Yp,l);const n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(c=Tf,I&&I(),l.value=Tf,x=!1,T=!1),n()}}}}function bm(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function wm(){return pc(Gp)}var Cm=Object.defineProperty,Im=Object.getOwnPropertySymbols,km=Object.prototype.hasOwnProperty,Tm=Object.prototype.propertyIsEnumerable,Em=(e,t,n)=>t in e?Cm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sm=(e,t)=>{for(var n in t||(t={}))km.call(t,n)&&Em(e,n,t[n]);if(Im)for(var n of Im(t))Tm.call(t,n)&&Em(e,n,t[n]);return e},Rm=(e,t,n)=>{const r=n.createElement(e);for(const i of Object.keys(t)){let e=t[i];"key"!==i&&!1!==e&&("children"===i?r.textContent=e:r.setAttribute(i,e))}return r},Nm=e=>void 0!==e.key?{name:"key",value:e.key}:void 0!==e.name?{name:"name",value:e.name}:void 0!==e.property?{name:"property",value:e.property}:void 0,Pm=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],Om=(e,t)=>{const n=e.getAttribute("data-head-attrs");if(n)for(const i of n.split(","))e.removeAttribute(i);const r=[];for(const i in t){const n=t[i];null!=n&&(!1===n?e.removeAttribute(i):e.setAttribute(i,n),r.push(i))}r.length?e.setAttribute("data-head-attrs",r.join(",")):e.removeAttribute("data-head-attrs")},xm=()=>{let e=[];const t={install(e){e.config.globalProperties.$head=t,e.provide("usehead",t)},get headTags(){const t=[];return e.forEach((e=>{(e=>{const t=[];for(const n of Object.keys(e))if(null!=e[n])if("title"===n)t.push({tag:n,props:{children:e[n]}});else if("base"===n)t.push({tag:n,props:Sm({key:"default"},e[n])});else if(Pm.includes(n)){const r=e[n];Array.isArray(r)?r.forEach((e=>{t.push({tag:n,props:e})})):r&&t.push({tag:n,props:r})}return t})(e.value).forEach((e=>{if("meta"===e.tag||"base"===e.tag){const n=Nm(e.props);if(n){let r=-1;for(let i=0;i<t.length;i++){const s=t[i],o=s.props[n.name],a=e.props[n.name];if(s.tag===e.tag&&o===a){r=i;break}}-1!==r&&t.splice(r,1)}}t.push(e)}))})),t},addHeadObjs(t){e.push(t)},removeHeadObjs(t){e=e.filter((e=>e!==t))},updateDOM(e){((e,t=window.document)=>{const n=t.head;let r=n.querySelector('meta[name="head:count"]');const i=r?Number(r.getAttribute("content")):0,s=[];if(r)for(let u=0,h=r.previousElementSibling;u<i;u++,h=h.previousElementSibling)h&&s.push(h);else r=t.createElement("meta"),r.setAttribute("name","head:count"),r.setAttribute("content","0"),n.append(r);const o=[];let a,l={},c={};for(const u of e)if("title"!==u.tag)if("htmlAttrs"!==u.tag)if("bodyAttrs"!==u.tag){if("meta"===u.tag){const e=Nm(u.props);if(e){const t=[...n.querySelectorAll(`meta[${e.name}="${e.value}"]`)];for(const e of t)s.includes(e)||s.push(e)}}o.push(Rm(u.tag,u.props,t))}else Object.assign(c,u.props);else Object.assign(l,u.props);else a=u.props.children;s.forEach((e=>{e.nextSibling&&e.nextSibling.nodeType===Node.TEXT_NODE&&e.nextSibling.remove(),e.remove()})),void 0!==a&&(t.title=a),Om(t.documentElement,l),Om(t.body,c),o.forEach((e=>{n.insertBefore(e,r)})),r.setAttribute("content",""+o.length)})(t.headTags,e)}};return t},Am="undefined"!=typeof window,Lm=e=>{const t=Hl(e),n=(()=>{const e=pc("usehead");if(!e)throw new Error("You may forget to apply app.use(head)");return e})();var r;n.addHeadObjs(t),Am&&($h((()=>{n.updateDOM()}),null,r),Mc((()=>{n.removeHeadObjs(t),n.updateDOM()})))};function Mm(e,t,n,r={}){const{transformState:i,registerComponents:s=!0,useHead:o=!0,rootContainer:a="#app"}=r,l="undefined"!=typeof window;async function c(r=!1,a){var c,u;const h=r?((...e)=>{const t=jd().createApp(...e),{mount:n}=t;return t.mount=e=>{const r=Wd(e);if(!r)return;const i=t._component;ea(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t})(e):((...e)=>{const t=qd().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=Wd(e);if(t)return n(t,!0,t instanceof SVGElement)},t})(e);let d;o&&(d=xm(),h.use(d));const p=ym(Vp({history:r?Cf(t.base):If(t.base)},t)),{routes:f}=t;s&&h.component("ClientOnly",r?Lp:{render:()=>null});const m={app:h,head:d,isClient:l,router:p,routes:f,initialState:{},routePath:a};let _;r&&(m.initialState=(null==i?void 0:i(window.__INITIAL_STATE__||{}))||function(e){try{return JSON.parse(e||"{}")}catch(t){return console.error("[SSG] On state deserialization -",t,e),{}}}(window.__INITIAL_STATE__)),await(null==n?void 0:n(m)),h.use(p);let g=!0;if(p.beforeEach(((e,t,n)=>{(g||_&&_===e.path)&&(g=!1,_=e.path,e.meta.state=m.initialState),n()})),!r){const e=null!=(u=null!=(c=m.routePath)?c:t.base)?u:"/";p.push(e),await p.isReady(),m.initialState=p.currentRoute.value.meta.state||{}}const v=(null==i?void 0:i(m.initialState))||function(e){if(null==e||0===Object.keys(e).length)return null;try{return JSON.stringify(JSON.stringify(e||{})).replace(Op,Ap)}catch(t){return console.error("[SSG] On state serialization -",t,e),null}}(m.initialState);return y=Vp({},m),Dp(y,Fp({initialState:v}));var y}return l&&(async()=>{const{app:e,router:t}=await c(!0);await t.isReady(),e.mount(a,!0)})(),c}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Dm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Um=Fm,jm=new b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),qm=new Y("@firebase/auth");function Wm(e,...t){qm.logLevel<=$.ERROR&&qm.error(`Auth (9.4.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(e,...t){throw Hm(e,...t)}function $m(e,...t){return Hm(e,...t)}function Hm(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jm.create(e,...t)}function zm(e,t,...n){if(!e)throw Hm(t,...n)}function Bm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wm(t),new Error(t)}function Gm(e,t){e||Bm(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;function Ym(e){Gm(e instanceof Function,"Expected a class definition");let t=Km.get(e);return t?(Gm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Km.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Qm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Qm()&&"https:"!==Qm()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zm{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gm(t>e,"Short delay should be less than long delay!"),this.isMobile=_()||g()}get(){return Xm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e,t){Gm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Bm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Bm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Bm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},r_=new Zm(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function s_(e,t,n,r,i={}){return o_(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=O(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(t_.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),t_.fetch()(l_(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function o_(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},n_),t);try{const t=new c_(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw u_(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw u_(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw u_(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Um()),{[t]:n});return new b("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);Vm(e,a)}}catch(i){if(i instanceof y)throw i;Vm(e,"network-request-failed")}}async function a_(e,t,n,r,i={}){const s=await s_(e,t,n,r,i);return"mfaPendingCredential"in s&&Vm(e,"multi-factor-auth-required",{_serverResponse:s}),s}function l_(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?e_(e.config,i):`${e.config.apiScheme}://${i}`}class c_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t($m(this.auth,"timeout"))),r_.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function u_(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h_(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function d_(e){return 1e3*Number(e)}function p_(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Wm("JWT malformed, contained fewer than 3 sections"),null;try{const e=h(n);return e?JSON.parse(e):(Wm("Failed to decode base64 JWT payload"),null)}catch(i){return Wm("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function f_(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class m_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=h_(this.lastLoginAt),this.creationTime=h_(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function g_(e){var t;const n=e.auth,r=await e.getIdToken(),i=await f_(e,async function(e,t){return s_(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));zm(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Dm(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new __(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v_{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){zm(e.idToken,"internal-error"),zm(void 0!==e.idToken,"internal-error"),zm(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=p_(e);return zm(t,"internal-error"),zm(void 0!==t.exp,"internal-error"),zm(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return zm(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await o_(e,{},(()=>{const n=O({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=l_(e,r,"/v1/token",`key=${i}`);return t_.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new v_;return n&&(zm("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(zm("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(zm("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new v_,this.toJSON())}_performRefresh(){return Bm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(e,t){zm("string"==typeof e||void 0===e,"internal-error",{appName:t})}class b_{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new m_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new __(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await f_(this,this.stsTokenManager.getToken(this.auth,e));return zm(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=j(e),r=await n.getIdToken(t),i=p_(r);zm(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:h_(d_(i.auth_time)),issuedAtTime:h_(d_(i.iat)),expirationTime:h_(d_(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=j(e);await g_(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(zm(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new b_(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){zm(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await g_(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await f_(this,async function(e,t){return s_(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:C}=t;zm(v&&C,e,"internal-error");const I=v_.fromJSON(this.name,C);zm("string"==typeof v,e,"internal-error"),y_(u,e.name),y_(h,e.name),zm("boolean"==typeof y,e,"internal-error"),zm("boolean"==typeof b,e,"internal-error"),y_(d,e.name),y_(p,e.name),y_(f,e.name),y_(m,e.name),y_(_,e.name),y_(g,e.name);const k=new b_({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(k.providerData=w.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new v_;r.updateFromServerResponse(t);const i=new b_({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await g_(i),i}}
/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}w_.type="NONE";const C_=w_;
/**
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
 */function I_(e,t,n){return`firebase:${e}:${t}:${n}`}class k_{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=I_(this.userKey,r.apiKey,i),this.fullPersistenceKey=I_("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?b_._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new k_(Ym(C_),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Ym(C_);const s=I_(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=b_._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new k_(i,e,n)):new k_(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(N_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(E_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(O_(t))return"Blackberry";if(x_(t))return"Webos";if(S_(t))return"Safari";if((t.includes("chrome/")||R_(t))&&!t.includes("edge/"))return"Chrome";if(P_(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function E_(e=m()){return/firefox\//i.test(e)}function S_(e=m()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function R_(e=m()){return/crios\//i.test(e)}function N_(e=m()){return/iemobile/i.test(e)}function P_(e=m()){return/android/i.test(e)}function O_(e=m()){return/blackberry/i.test(e)}function x_(e=m()){return/webos/i.test(e)}function A_(e=m()){return/iphone|ipad|ipod/i.test(e)}function L_(){return function(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function M_(e=m()){return A_(e)||P_(e)||x_(e)||O_(e)||/windows phone/i.test(e)||N_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D_(e,t=[]){let n;switch(e){case"Browser":n=T_(m());break;case"Worker":n=`${T_(m())}-${e}`;break;default:n=e}return`${n}/JsCore/9.4.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j_(this),this.idTokenSubscription=new j_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ym(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await k_.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(zm(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await g_(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?j(e):null;return t&&zm(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&zm(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ym(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ym(e)||this._popupRedirectResolver;zm(t,this,"argument-error"),this.redirectPersistenceManager=await k_.create(this,[Ym(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return zm(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return zm(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function U_(e){return j(e)}class j_{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new M(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return zm(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bm("not implemented")}_getIdTokenResponse(e){return Bm("not implemented")}_linkToIdToken(e,t){return Bm("not implemented")}_getReauthenticationResolver(e){return Bm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W_ extends q_{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new W_(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new W_(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return a_(e,"POST","/v1/accounts:signInWithPassword",i_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return a_(e,"POST","/v1/accounts:signInWithEmailLink",i_(e,t))}(e,{email:this._email,oobCode:this._password});default:Vm(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return s_(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return a_(e,"POST","/v1/accounts:signInWithEmailLink",i_(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Vm(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(e,t){return a_(e,"POST","/v1/accounts:signInWithIdp",i_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $_(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vm("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Dm(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $_(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return V_(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,V_(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,V_(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=O(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){var t,n,r,i,s,o;const a=x(A(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);zm(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=x(A(e)).link,n=t?x(A(t)).deep_link_id:null,r=x(A(e)).deep_link_id;return(r?x(A(r)).link:null)||r||n||t||e}(e);try{return new H_(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.providerId=z_.PROVIDER_ID}static credential(e,t){return W_._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=H_.parseLink(t);return zm(n,"argument-error"),W_._fromEmailAndCode(e,n.code,n.tenantId)}}z_.PROVIDER_ID="password",z_.EMAIL_PASSWORD_SIGN_IN_METHOD="password",z_.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class G_ extends B_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_ extends G_{constructor(){super("facebook.com")}static credential(e){return $_._fromParams({providerId:K_.PROVIDER_ID,signInMethod:K_.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return K_.credentialFromTaggedObject(e)}static credentialFromError(e){return K_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return K_.credential(e.oauthAccessToken)}catch(t){return null}}}K_.FACEBOOK_SIGN_IN_METHOD="facebook.com",K_.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y_ extends G_{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $_._fromParams({providerId:Y_.PROVIDER_ID,signInMethod:Y_.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Y_.credentialFromTaggedObject(e)}static credentialFromError(e){return Y_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Y_.credential(t,n)}catch(r){return null}}}Y_.GOOGLE_SIGN_IN_METHOD="google.com",Y_.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J_ extends G_{constructor(){super("github.com")}static credential(e){return $_._fromParams({providerId:J_.PROVIDER_ID,signInMethod:J_.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J_.credentialFromTaggedObject(e)}static credentialFromError(e){return J_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return J_.credential(e.oauthAccessToken)}catch(t){return null}}}J_.GITHUB_SIGN_IN_METHOD="github.com",J_.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q_ extends G_{constructor(){super("twitter.com")}static credential(e,t){return $_._fromParams({providerId:Q_.PROVIDER_ID,signInMethod:Q_.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Q_.credentialFromTaggedObject(e)}static credentialFromError(e){return Q_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Q_.credential(t,n)}catch(r){return null}}}Q_.TWITTER_SIGN_IN_METHOD="twitter.com",Q_.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X_{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await b_._fromIdTokenResponse(e,n,r),s=Z_(n);return new X_({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Z_(n);return new X_({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Z_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends y{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eg(e,t,n,r)}}function tg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw eg._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ng(e,t,n=!1){const r="signIn",i=await tg(e,r,t),s=await X_._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function rg(e,t,n){return async function(e,t){return ng(U_(e),t)}(j(e),z_.credential(t,n))}function ig(e,t,n,r){return j(e).onAuthStateChanged(t,n,r)}function sg(e){return j(e).signOut()}
/**
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
 */
class og{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends og{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=m();return S_(e)||A_(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);L_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ag.type="LOCAL";const lg=ag;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends og{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cg.type="SESSION";const ug=cg;
/**
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
 */
/**
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
 */
class hg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new hg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */hg.receivers=[];class pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=dg("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(){return window}
/**
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
 */
function mg(){return void 0!==fg().WorkerGlobalScope&&"function"==typeof fg().importScripts}
/**
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
 */
const _g="firebaseLocalStorageDb";class gg{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vg(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function yg(){const e=indexedDB.open(_g,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(_g);return new gg(e).toPromise()}(),t(await yg()))}))}))}async function bg(e,t,n){const r=vg(e,!0).put({fbase_key:t,value:n});return new gg(r).toPromise()}function wg(e,t){const n=vg(e,!0).delete(t);return new gg(n).toPromise()}class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hg._getInstance(mg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new pg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yg();return await bg(e,"__sak","1"),await wg(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=vg(e,!1).get(t),r=await new gg(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wg(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vg(e,!1).getAll();return new gg(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cg.type="LOCAL";const Ig=Cg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=$m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}new Zm(3e4,6e4);
/**
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
 */
class Tg extends q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return V_(e,this._buildIdpRequest())}_linkToIdToken(e,t){return V_(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return V_(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Eg(e){return ng(e.auth,new Tg(e),e.bypassAuthState)}function Sg(e){const{auth:t,user:n}=e;return zm(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await f_(e,tg(r,i,t,e),n);zm(s.idToken,r,"internal-error");const o=p_(s.idToken);zm(o,r,"internal-error");const{sub:a}=o;return zm(e.uid===a,r,"user-mismatch"),X_._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Vm(r,"user-mismatch"),s}}(n,new Tg(e),e.bypassAuthState)}async function Rg(e){const{auth:t,user:n}=e;return zm(n,t,"internal-error"),async function(e,t,n=!1){const r=await f_(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return X_._forOperation(e,"link",r)}(n,new Tg(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return Rg;case"reauthViaPopup":case"reauthViaRedirect":return Sg;default:Vm(this.auth,"internal-error")}}resolve(e){Gm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Zm(2e3,1e4);class Og extends Ng{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Og.currentPopupAction&&Og.currentPopupAction.cancel(),Og.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return zm(e,this.auth,"internal-error"),e}async onExecution(){Gm(1===this.filter.length,"Popup operations only handle one event");const e=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject($m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject($m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Og.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject($m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Pg.get())};e()}}Og.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xg=new Map;class Ag extends Ng{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=xg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return I_("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Ym(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xg.set(this.auth._key(),e)}return this.bypassAuthState||xg.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Lg(e,t,n=!1){const r=U_(e),i=
/**
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
 */
function(e,t){return t?Ym(t):(zm(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Ag(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fg(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fg(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError($m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dg(e))}saveEventToCache(e){this.cachedEventUids.add(Dg(e)),this.lastProcessedEventTime=Date.now()}}function Dg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jg=/^https?/;async function qg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return s_(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Wg(r))return}catch(n){}Vm(e,"unauthorized-domain")}function Wg(e){const t=Jm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!jg.test(n))return!1;if(Ug.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const Vg=new Zm(3e4,6e4);function $g(){const e=fg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Hg(e){return new Promise(((t,n)=>{var r,i,s;function o(){$g(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$g(),n($m(e,"network-request-failed"))},timeout:Vg.get()})}if(null===(i=null===(r=fg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=fg().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return fg()[t]=()=>{gapi.load?o():n($m(e,"network-request-failed"))},kg(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw zg=null,e}))}let zg=null;
/**
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
 */
const Bg=new Zm(5e3,15e3),Gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yg(e){const t=e.config;zm(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?e_(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.4.1"},i=Kg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${O(r).slice(1)}`}async function Jg(e){const t=await function(e){return zg=zg||Hg(e),zg}(e),n=fg().gapi;return zm(n,e,"internal-error"),t.open({where:document.body,url:Yg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=$m(e,"network-request-failed"),s=fg().setTimeout((()=>{r(i)}),Bg.get());function o(){fg().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Qg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Zg(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=m().toLowerCase();n&&(a=R_(c)?"_blank":n),E_(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=m()){var t;return A_(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new Xg(null);const h=window.open(t||"",a,u);zm(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Xg(h)}function ev(e,t,n,r,i,s){zm(e.config.authDomain,e,"auth-domain-config-required"),zm(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.4.1",eventId:i};if(t instanceof B_){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",S(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof G_){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return e_(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${O(a).slice(1)}`}const tv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ug,this._completeRedirectFn=Lg}async _openPopup(e,t,n,r){var i;Gm(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Zg(e,ev(e,t,n,Jm(),r),dg())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ev(e,t,n,Jm(),r),fg().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Gm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Jg(e),n=new Mg(e);return t.register("authEvent",(t=>{zm(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Vm(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return M_()||S_()||A_()}};var nv,rv="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){zm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
function sv(e=le()){const t=ie(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ie(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(N(n.getOptions(),null!=t?t:{}))return e;Vm(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:tv,persistence:[Ig,lg,ug]})}nv="Browser",re(new q("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{zm(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),zm(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:nv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D_(nv)},s=new F_(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ym);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),re(new q("auth-internal",(e=>{const t=U_(e.getProvider("auth").getImmediate());return new iv(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ce(rv,"0.19.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(nv)),ce(rv,"0.19.3","esm2017");export{Ju as A,as as B,is as C,os as D,xc as E,Ru as F,hs as G,oc as H,Ku as I,th as J,dp as K,eh as L,Pp as M,fp as N,lp as O,Ad as P,pd as T,Mm as V,Cp as a,sv as b,ap as c,Cc as d,Uu as e,zu as f,ms as g,Ld as h,ae as i,Lu as j,Tu as k,Bu as l,Yu as m,sg as n,ig as o,Lm as p,ju as q,Hl as r,rg as s,Fo as t,wm as u,Rd as v,hu as w,Zl as x,Gl as y,Nd as z};
