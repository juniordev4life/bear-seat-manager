if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-8ce990e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/[...all].ca87fc81.js",revision:"0d4359fb81a9f4752a182e9ada023611"},{url:"assets/[equipmentindex].0cab0889.js",revision:"80813cdea4fd68ea0025fc4d3438df82"},{url:"assets/[seatindex].0b61c918.js",revision:"43fc5d72fcfd4c70fd1ab4c83f8e88d4"},{url:"assets/[seatindex].356d7919.js",revision:"53b105cb57f404cf14cccfa109a16df0"},{url:"assets/[seatindex].5c10edb3.js",revision:"0feabd0c5087ef83bd4f4b611d8ebe6a"},{url:"assets/404.7981766c.js",revision:"a09ecf653ddf3efdd931f1aa9d4fba9d"},{url:"assets/app.2d2b8bf3.js",revision:"ca28d88b2d7d8d6e98e49f1a7e723a75"},{url:"assets/app.72919dba.css",revision:"4b69f7ae58b8dc768073e77d30d63ec3"},{url:"assets/baby-seats.0a207c5c.js",revision:"73b98ead2cbf4e82ae3bf3d9646c3342"},{url:"assets/baby-seats.6f5a6df7.js",revision:"cbc2d833e83eb9ce2ddc064a0c8a0f47"},{url:"assets/dashboard.e19fe580.js",revision:"6371f04723effd5c1336f68c7b4729b4"},{url:"assets/dayjs.min.13120a0e.js",revision:"ed18ddc5f7dfdc62a243ff000c211e13"},{url:"assets/EquipmentDetails.cea0f15d.js",revision:"4e9fa2e912c92f6cba0851bfbdc2a850"},{url:"assets/equipments.32543c35.js",revision:"137ef34548e14e865ca80b130f9ee206"},{url:"assets/equipments.c039ef62.js",revision:"8d6a1256bc28dd771d9878484c2fa597"},{url:"assets/following-seats.b6120968.js",revision:"4e90912e0d494c1efd46623bb9f9ab05"},{url:"assets/following-seats.ebb3002a.js",revision:"a6f1873a40cdac0d6238464b376158e5"},{url:"assets/home.390c9e2f.js",revision:"df01c134476c90727a836cc8eff0b46d"},{url:"assets/home.d224932b.css",revision:"60510250cfa457e737091f5e7cc28437"},{url:"assets/members.b62bdfae.js",revision:"7fbf188bc0b588c734b912f030d2dea6"},{url:"assets/Modal.490c2e14.js",revision:"aa3ed0be7e2defb4d288f2870b1c9f70"},{url:"assets/Modal.b9d6a1c9.css",revision:"baadb4f22ef2c75a9e7eed2931a39f1e"},{url:"assets/original.c63ca29c.js",revision:"494381c41c91eeeeb4278cf93cebfdda"},{url:"assets/passwort-vergessen.d1c833c0.js",revision:"ec442cae3b36d8cbd083789b5f822971"},{url:"assets/plugin-vue_export-helper.5a098b48.js",revision:"cdf83da160a85d4a2d62de406cb11314"},{url:"assets/README.0bb1c275.js",revision:"3534f58dfb9e37cf5579f31086d6877a"},{url:"assets/reboarder-seats.1421b9b2.js",revision:"938ad98fb51581c389b65b8cc9311edd"},{url:"assets/reboarder-seats.34588292.js",revision:"4760c0fff1af2f015593ef348f55175f"},{url:"assets/RentScheduler.e73466af.js",revision:"e19f464333436955ead8e77eaa007a57"},{url:"assets/RentScheduler.ff4095a3.css",revision:"8820018255f6a9df2259c2e11cf33f33"},{url:"assets/SeatDetails.cfc72933.js",revision:"1e15d9f15a0a3e76753b111074996a7d"},{url:"assets/SeatList.56405dca.css",revision:"781bfbaefd8bafcdd080aa58a7d7ac2c"},{url:"assets/SeatList.efa6644f.js",revision:"7b652c4c3e5177130a7bb6a5fa945f03"},{url:"assets/vendor.61e0ad40.js",revision:"7766855bda6c180d875ee5d0271a56cd"},{url:"assets/virtual_pwa-register.925e73db.js",revision:"6a959df10d06e590ad8eba27bcee624a"},{url:"index.html",revision:"17db92869e3c1d33f6f1ba1e30bb3662"},{url:"js/main.js",revision:"a09f1a212e1f92342dedcc385d4d4a5b"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
