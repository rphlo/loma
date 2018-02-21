self.addEventListener('install', function(e){
 var timeStamp = Date.now();
 e.waitUntil(
   caches.open('lomalaskuri').then(function(cache){
     return cache.addAll([
       './',
       './index.html?ts='+timeStamp,
       './holiday.jpg?ts='+timeStamp,
       './work.jpg?ts='+timeStamp
     ]).then(function(){self.skipWaiting()});
   })
 );
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(function(response){
      return response || fetch(event.request);
    })
  );
});
