const CACHE_NAME = "zakazivac-cache-v1";
const ASSETS = ["./", "./index.html", "./config.js", "./favicon.png", "./manifest.json"];

// Instalacija Service Worker-a i keširanje osnovnih fajlova
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Aktivacija i čišćenje starog keša
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    })
  );
  self.clients.claim();
});

// Presretanje mrežnih zahteva (Network First strategija zbog iframe-a i Google Auth-a)
self.addEventListener("fetch", (event) => {
  // Ignorišemo Google Auth i Apps Script zahteve iz Service Worker keša
  if (event.request.url.includes("accounts.google.com") || event.request.url.includes("script.google.com")) {
    return;
  }

  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
