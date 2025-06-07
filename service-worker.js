const CACHE_NAME = "account-pwa-v2"; // Increment the version number!
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css", // index.html still references this
  "/app.js",    // index.html still references this
  "/sindex.html", // Add your new dashboard page
  "/manifest.json", // Ensure manifest is cached
  "/icon-192.png", // Make sure your icons are cached
  "/icon-512.png"  // Make sure your icons are cached
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching new assets...');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache assets:', error);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache hit - fetch from network
        return fetch(event.request);
      })
      .catch(error => {
        console.error('Service Worker: Fetch failed:', error);
        // You can return a fallback page here if network is unavailable
        // e.g., return caches.match('/offline.html');
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete old caches
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});