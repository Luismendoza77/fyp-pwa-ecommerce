const CACHE_NAME = "fyp-pwa-cache-v4";

// precache básico
const PRECACHE_URLS = [
    "/products/",
    "/static/pwa/manifest.json",
    "/static/pwa/register-sw.js"
    ];

    self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
    );
    self.skipWaiting();
    });

    self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
    });

    self.addEventListener("fetch", (event) => {
    // Navegación (HTML): network-first con fallback a /products/
    if (event.request.mode === "navigate") {
        event.respondWith(
        fetch(event.request)
            .then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            return response;
            })
            .catch(() => caches.match(event.request).then((res) => res || caches.match("/products/")))
        );
        return;
    }

    // Assets (CSS/JS/IMG): cache-first con fallback a network
    event.respondWith(
        caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            return response;
        });
        })
    );
});
