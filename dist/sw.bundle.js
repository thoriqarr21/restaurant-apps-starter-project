if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const a=e=>n(e,c),r={module:{uri:c},exports:s,require:a};i[c]=Promise.all(f.map((e=>r[e]||a(e)))).then((e=>(d(...e),s)))}}define(["./workbox-0b8b4296"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"c63cdec1edb749941b081f5e783e1fc7"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app.webmanifest",revision:"3d051c7e6a4cc7758e26e6809d5c9ee5"},{url:"app~48bafecf.bundle.js",revision:"ad040b6e5393da2f920f522f4662ffde"},{url:"app~48bafecf.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a51fa3f5.bundle.js",revision:"f69d1b4f2426eb2417c9d8379959fb7d"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"7e7703b5640db5f67cf35fe976213c4a"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"31a870da1f58018c2ddd099a0b655d3f"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"78f1696f4a6d9e57a7ca31fed9f5e901"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/favicon.svg",revision:"37c6f4b0c51450ea4bcb00e882414fee"},{url:"icons/icon-128x128.png",revision:"e2c21d8c28bb3d15906034b8d623425d"},{url:"icons/icon-144x144.png",revision:"6575b79624f33508f505133722a14207"},{url:"icons/icon-152x152.png",revision:"719b49fb9de3bcecc5cd493c6af7fd8a"},{url:"icons/icon-192x192.png",revision:"137d29728c00ac7cd6ba5226053d6ade"},{url:"icons/icon-384x384.png",revision:"67c6a0d383ef1d0f8f37867c2df2c204"},{url:"icons/icon-512x512.png",revision:"4d2b679a28c478a0bf8ba5de9bb08e82"},{url:"icons/icon-72x72.png",revision:"7b6b787e323ffeee6384a3434654875e"},{url:"icons/icon-96x96.png",revision:"de5c083dc6e7b6626977197f861ee493"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"9b79565aeef62b5d70dd94c8b87723ab"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-api",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
