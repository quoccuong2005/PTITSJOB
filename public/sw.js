console.log("================Service worker===================");
// Establish a cache name
const cacheName = "KHCN_v1";

const fetchEvent = () => {
  self.addEventListener("fetch", (event) => {
    if (event.request.destination === "image") {
      event.respondWith(
        caches.open(cacheName).then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());

              return networkResponse;
            });
          });
        })
      );
    } else {
      return;
    }
  });

  // self.addEventListener("fetch", (event) => {
  //   if (event.request.destination === "script") {
  //     event.respondWith(
  //         caches.open(cacheName).then((cache) => {
  //           return cache.match(event.request).then((cachedResponse) => {
  //             if (cachedResponse) {
  //               return cachedResponse;
  //             }
  //
  //             return fetch(event.request).then((networkResponse) => {
  //               cache.put(event.request, networkResponse.clone());
  //
  //               return networkResponse;
  //             });
  //           });
  //         })
  //     );
  //   } else {
  //     return;
  //   }
  // });
  self.addEventListener("fetch", (event) => {
    if (event.request.destination === "style") {
      event.respondWith(
          caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }

              return fetch(event.request).then((networkResponse) => {
                cache.put(event.request, networkResponse.clone());

                return networkResponse;
              });
            });
          })
      );
    } else {
      return;
    }
  });
  // self.addEventListener("fetch", (event) => {
  //   if (event.request.destination === "document") {
  //     event.respondWith(
  //         caches.open(cacheName).then((cache) => {
  //           return cache.match(event.request).then((cachedResponse) => {
  //             if (cachedResponse) {
  //               return cachedResponse;
  //             }
  //
  //             return fetch(event.request).then((networkResponse) => {
  //               cache.put(event.request, networkResponse.clone());
  //
  //               return networkResponse;
  //             });
  //           });
  //         })
  //     );
  //   } else {
  //     return;
  //   }
  // });
};

fetchEvent();

// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open("precache").then((cache) => cache.add("/broken.png"))
//   );
// });

// function isImage(fetchRequest) {
//   console.log(333);
//   return fetchRequest.method === "GET" && fetchRequest.destination === "image";
// }

// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     fetch(e.request)
//       .then((response) => {
//         if (response.ok) return response;

//         // User is online, but response was not ok
//         if (isImage(e.request)) {
//           // Get broken image placeholder from cache
//           return caches.match("/broken.png");
//         }
//       })
//       .catch((err) => {
//         // User is probably offline
//         if (isImage(e.request)) {
//           // Get broken image placeholder from cache
//           return caches.match("/broken.png");
//         }
//       }) // end fetch
//   );
// });
