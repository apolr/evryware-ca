const CACHE_NAME = 'evryware-v1';
const STATIC_ASSETS = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  // Critical images for LCP optimization
  '/lovable-uploads/3d982da9-686c-4030-8aac-3fb7a2770238.png',
  '/lovable-uploads/fddb7e55-e0cf-4500-b57d-da6c4b62aaa7.png',
  '/lovable-uploads/bed527d0-3fc9-4116-8fcd-ae74817702a0.png',
  '/lovable-uploads/f025ab89-dee6-48a0-8e94-99d7dda60936.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});