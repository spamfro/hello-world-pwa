const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'app.js',
  'favicon.ico',
  'index.css',
  'index.html',
  'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
  'https://unpkg.com/react@17.0.2/umd/react.development.js',
];

self.addEventListener('install', (event: ExtendableEvent) => {
  console.log('install');
  event.waitUntil(
    self.caches.open(cacheName)
      .then((cache) => cache.addAll(resourcesToPrecache))
  );
});

self.addEventListener('activate', (event) => {
  console.log('activate');
});

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('fetch:', event.request.url);
  event.respondWith(
    self.caches.match(event.request)
      .then((cacheResponse) => cacheResponse || fetch(event.request))
  );
});
