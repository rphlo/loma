self.addEventListener('install', function(e){
 e.waitUntil(
   caches.open('lomalaskuri').then(function(cache){
     return cache.addAll([
       '/loma/',
       'index.html',
       'holiday.jpg',
       'work.jpg',
     ]);
   })
 );
});
