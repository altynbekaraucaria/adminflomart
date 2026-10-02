// Minimal service worker — only exists to satisfy "installable PWA" requirements
// (Add to Home Screen / Install app). It intentionally does NOT cache the admin
// panel's HTML/JS: this is a live Firebase-backed admin tool, and caching the app
// shell risks showing stale code or stale data after an update. Every request just
// passes straight through to the network as normal.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
