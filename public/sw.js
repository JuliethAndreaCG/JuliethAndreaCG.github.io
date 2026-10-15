// Service Worker — PsicoJuliethCG / Esencia&Mental
// CACHE_NAME bumped to v2 to invalidate stale entries from v1 (which pointed to /og-banner.png).
const CACHE_NAME = 'psicologa-julieth-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/foto.jpg',
  '/og-banner.jpg',
  '/favicon.svg',
  '/manifest.json',
];

// Install event — pre-cache shell assets.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event — drop any old cache versions.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
          return undefined;
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event — cache-first for shell, network-first otherwise.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
