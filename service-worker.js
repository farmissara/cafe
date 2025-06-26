const CACHE_NAME = "cafe-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/menu.json",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// ติดตั้ง service worker และ cache ไฟล์
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// ดึงไฟล์จาก cache ถ้า offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
