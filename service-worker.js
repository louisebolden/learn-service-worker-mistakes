const CACHE_NAME = "cache-v0.1";
const urlsToCache = [
  "/",
  "style.css",
  "script.js"
];

self.addEventListener("install", event => {
  console.log("🦉 hey i'm installing myself");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("🦉 adding these paths to cache:", urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("activate", () => {
  console.log("🦉 I've been activated!");
});

self.addEventListener("fetch", event => {
  console.log("🦉 a fetch event occurred!");

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log("🦉 here's a response from the cache for you:", response);
          return response;
        }

        return fetch(event.request).then(response => {
          if(!response || response.status !== 200 || response.type !== 'basic') {
            console.log("🦉 this response wasn't cached so I tried to get a new one, but something is wrong with it:", response);
            return response;
          }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                console.log("🦉 (putting a clone of this response into our cache for the next time)");
                cache.put(event.request, responseToCache);
              });

            console.log("🦉 this response wasn't cached but I successfully got a new one for you:", response);
            return response;
          });
      }
    )
  );
});
