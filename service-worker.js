self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pinyo98-cache').then(cache => {
      return cache.addAll([
        './',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
