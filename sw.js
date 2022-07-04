(function () {
    'use strict';

    /// <reference lib="webworker" />
    var cacheName = 'cache-v1';
    var resourcesToPrecache = [
        '/',
        'app.js',
        'favicon.ico',
        'index.css',
        'index.html',
        'https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js',
        'https://unpkg.com/react@17.0.2/umd/react.development.js',
    ];
    self.addEventListener('install', function (event) {
        console.log('install');
        event.waitUntil(self.caches.open(cacheName)
            .then(function (cache) { return cache.addAll(resourcesToPrecache); }));
    });
    self.addEventListener('activate', function (event) {
        console.log('activate');
    });
    self.addEventListener('fetch', function (event) {
        console.log('fetch:', event.request.url);
        event.respondWith(self.caches.match(event.request)
            .then(function (cacheResponse) { return cacheResponse || fetch(event.request); }));
    });

})();
