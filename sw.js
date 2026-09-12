// Minimal service worker — just enough to make "Add to Home Screen" work reliably.
// It doesn't cache anything, so the app always loads fresh data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // pass-through, no caching
