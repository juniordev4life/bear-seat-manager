if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-8ce990e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/[...all].f84559e5.js",revision:"6c6b5a998669222c5d5c6870464a3db0"},{url:"assets/[equipmentindex].9c62d73d.js",revision:"a8b6e02719bea3b352eb48a2105f23ca"},{url:"assets/[seatindex].5ccd2d26.js",revision:"f4c5603054eded0a29c35e491e688c80"},{url:"assets/[seatindex].63e8a65f.js",revision:"a3af027d8e2b6cf781e7dfdca5d88aa1"},{url:"assets/[seatindex].924d2f7b.js",revision:"c30a6e6a86da107f6075f66c4d165772"},{url:"assets/404.35f7fa54.js",revision:"a95769b5a9c87476bf6a2c479d90caf2"},{url:"assets/app.21e3ffd6.js",revision:"39d3717cada2f0bc291d0b5f8b8b103d"},{url:"assets/app.72919dba.css",revision:"4b69f7ae58b8dc768073e77d30d63ec3"},{url:"assets/baby-seats.1a06b62d.js",revision:"0b559baab68a0e1358d02eadded288e4"},{url:"assets/baby-seats.9161f867.js",revision:"c58bf5201dc0dcd6a391bc8b342551b9"},{url:"assets/dashboard.8ccdb97b.js",revision:"41c2860889deb3e6754cb0387b7b39f9"},{url:"assets/dayjs.min.f0981ae4.js",revision:"0850555cfba2f515d2e10cbcb5c419de"},{url:"assets/EquipmentDetails.e0d33599.js",revision:"cd23648cc96de0d29ce6053fd72cc942"},{url:"assets/equipments.0ee438e9.js",revision:"312d2ede7f9c33fcad5f822a28aeea09"},{url:"assets/equipments.23916335.js",revision:"4c1c5bbc73e777a10bf1801ea4073a10"},{url:"assets/equipments.6003fa16.css",revision:"781bfbaefd8bafcdd080aa58a7d7ac2c"},{url:"assets/following-seats.393c7dda.js",revision:"0baea67c40cd5d2be31f8ee39ffd6f3c"},{url:"assets/following-seats.56b0eee7.js",revision:"44adbed615b05d0c87b8853273ca52eb"},{url:"assets/home.6d90b59c.js",revision:"4c1c4b49576c71d90cc09225054c02e0"},{url:"assets/home.d224932b.css",revision:"60510250cfa457e737091f5e7cc28437"},{url:"assets/members.364366d0.js",revision:"3cb1800b0548a3262a76a931bd817e15"},{url:"assets/Modal.a880ecea.js",revision:"970ff63d17581dce0ae7a2281019c4dd"},{url:"assets/Modal.b9d6a1c9.css",revision:"baadb4f22ef2c75a9e7eed2931a39f1e"},{url:"assets/original.d7ee1c80.js",revision:"64e2c9640aecf0939232c7d763c1a965"},{url:"assets/passwort-vergessen.44501952.js",revision:"65af4f481efd6bc55ee2ee6bef87fb00"},{url:"assets/plugin-vue_export-helper.5a098b48.js",revision:"cdf83da160a85d4a2d62de406cb11314"},{url:"assets/README.9ff6ad01.js",revision:"01f9a6509e162aabed0c53337dacc810"},{url:"assets/reboarder-seats.6c52996e.js",revision:"ca9cff35e7c14fcafedbcd861d596c56"},{url:"assets/reboarder-seats.74e13efd.js",revision:"3d4685fbe537c948e1171756a44d0161"},{url:"assets/RentScheduler.98f94a8c.js",revision:"da2ec9a22fdff51ab2e0b467ad88c2df"},{url:"assets/RentScheduler.ff4095a3.css",revision:"8820018255f6a9df2259c2e11cf33f33"},{url:"assets/SeatDetails.c56abde2.js",revision:"72cfc4a36f308661a4526f1f8dd33df0"},{url:"assets/SeatList.3f6209b4.js",revision:"beced837810564338a9d0c1c69af2b45"},{url:"assets/vendor.ab80316d.js",revision:"7766855bda6c180d875ee5d0271a56cd"},{url:"assets/virtual_pwa-register.1a7f99b5.js",revision:"6a959df10d06e590ad8eba27bcee624a"},{url:"index.html",revision:"8ccbfcabd6738926d32292c40aa95018"},{url:"js/main.js",revision:"794b8cd3db0dded2d16609c4e0013ea8"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
