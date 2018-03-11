var VERSION_NAME = 'loma_v2018031100'
self.addEventListener('install', function(e){
 var timeStamp = Date.now();
 e.waitUntil(
   caches.open(VERSION_NAME).then(function(cache){
     return cache.addAll([
       '/',
       'index.html?ts='+timeStamp,
       'holiday.jpg?ts='+timeStamp,
       'work.jpg?ts='+timeStamp
     ]).then(function(){self.skipWaiting()});
   })
 );
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request, {cacheName: VERSION_NAME, ignoreSearch: true}).then(function(response){
      return response || fetch(event.request);
    })
  );
});
