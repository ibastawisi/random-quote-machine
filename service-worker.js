"use strict";var precacheConfig=[["/index.html","5d637582481e7a171accf3088f310f7e"],["/static/css/main.d797bd0a.css","7f528d895659dab065752385c280c674"],["/static/js/main.15cbce53.js","09b9e61e965adb69f5c1b993bb48a1c4"],["/static/media/fa-brands-400.a999c7b8.svg","a999c7b8823b901248833dc7fe07a52f"],["/static/media/fa-brands-400.d034c1b2.woff","d034c1b2ee84dd981ef2e637754a0b4f"],["/static/media/fa-brands-400.e0fc4e5c.ttf","e0fc4e5c719b4dc10c97fc111d7374e1"],["/static/media/fa-brands-400.e2a76403.eot","e2a76403183eff8967cf6318c6e51509"],["/static/media/fa-brands-400.f319eac1.woff2","f319eac1c755f9929fd856720ce1695e"],["/static/media/fa-regular-400.5a4618f0.eot","5a4618f029618cc2795c05fe53d57028"],["/static/media/fa-regular-400.6534c603.ttf","6534c603e0892488132ad57248ec69e2"],["/static/media/fa-regular-400.a3715c6f.woff2","a3715c6fe264a51f1d9260b447ff46bc"],["/static/media/fa-regular-400.e99569d3.woff","e99569d3d10c94c60d9a68523c1c0e71"],["/static/media/fa-regular-400.e9d8dbb0.svg","e9d8dbb0c3e9b97ffc59c50ff5d01422"],["/static/media/fa-solid-900.00ddaede.ttf","00ddaede094b83270cadbfc1a907e8ca"],["/static/media/fa-solid-900.128d2b0b.woff","128d2b0be23925e5cf36717ddc6f093b"],["/static/media/fa-solid-900.18d2347a.woff2","18d2347ab2a9f40ca2247cdb03303d84"],["/static/media/fa-solid-900.666a82cb.svg","666a82cb3e9f8591bef4049aea26c4c6"],["/static/media/fa-solid-900.d9824d00.eot","d9824d00712532d7697df68df16ae0d3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});