// Service Worker — PsicoJuliethCG / Esencia&Mental
//
// CACHE_NAME bumped to v3:
// - v1 pointed at /og-banner.png (404, was the original bug)
// - v2 fixed the path but kept a cache-first strategy for HTML, which
//   caused mobile users to see stale content after deploys (a SW-installed
//   page kept serving the pre-deploy /index.html from cache indefinitely).
// - v3 introduces a network-first strategy for HTML documents so the next
//   deploy is visible on the very next reload, while still allowing the
//   SW to fall back to the cached copy when the user is offline.
const CACHE_NAME = 'psicologa-julieth-v3';

// Pre-cache the static shell at install. These URLs are content-addressed
// (hashed asset filenames) or rarely-changed, so a cache-first read is safe.
const SHELL_URLS = [
  '/',
  '/foto.jpg',
  '/og-banner.jpg',
  '/favicon.svg',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS))
  );
  // Activate this worker as soon as it finishes installing.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Drop every cache that does not match the current name.
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
  // Take control of open clients without waiting for a reload.
  self.clients.claim();
});

/**
 * Strategy matrix
 * ---------------
 * - HTML documents (`text/html` or `document` destination):
 *     network-first, cache as fallback. Guarantees the user sees the
 *     latest deploy on the next page load.
 * - Everything else (images, JS, CSS, fonts):
 *     cache-first, network as fallback. These are content-addressed by
 *     Vite's hashed filenames, so a stale cache hit is impossible.
 */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const accept = event.request.headers.get('accept') || '';
  const isHTML =
    event.request.destination === 'document' ||
    accept.includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for static assets.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
