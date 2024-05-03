'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1daada4408383f085f43df4ed0e6faa1",
"assets/AssetManifest.bin.json": "d16f34129be833bbf6e00147189abab9",
"assets/AssetManifest.json": "0750cc8f754b519b37b1ece7cc3ab068",
"assets/assets/gymkro_logo.png": "2d3efb0403560f5a470c29fc3eb4ca30",
"assets/assets/gymkro_logo_no_text.png": "ae088f1f68df73a79adeb3b262647ea0",
"assets/assets/NewsApp_Logo_Mobilexxxhdpi.png": "c22782090e69b2ea4b8d954f3ced8739",
"assets/assets/pip_branding_dark_mode_verticalxxxhdpi.png": "b44cd21326482621fbd88735c689f701",
"assets/assets/pip_branding_light_modexxxhdpi.png": "66c52277a1ad15207fb35aa1c5c54a91",
"assets/assets/pip_logo_dark_modexxxhdpi.png": "87818370b5a8ac993082ffb8c019557a",
"assets/assets/pip_logo_light_modexxxhdpi.png": "bee00e8e2881188675a72451c255d0b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2d2b538946ee306f96030ce7973dc312",
"assets/NOTICES": "cb704ad084a3ac49bec25c8e67c3ebae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4554e224fe5b47cddabb801c09b71e48",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "7a14f99295af909fac1857ffff08d566",
"icons/android-icon-192x192.png": "56de7b7dff0c8311436a835dff3b89ba",
"icons/android-icon-36x36.png": "18219930dc4491b49ce1fcb8c65e1873",
"icons/android-icon-48x48.png": "1ae73ccf238085cdf8c0e585d276c333",
"icons/android-icon-72x72.png": "6f92d75fc83611a00850cf96f94971b0",
"icons/android-icon-96x96.png": "8576a9f4359448aa3e14394b2b0a0c04",
"icons/apple-icon-114x114.png": "260036eeaa67444212a6c0c43fd740c2",
"icons/apple-icon-120x120.png": "c42d9d4ab9165b5aade35def51a6eea5",
"icons/apple-icon-144x144.png": "7a14f99295af909fac1857ffff08d566",
"icons/apple-icon-152x152.png": "13b58df5d2423269b7eab37e6d775f98",
"icons/apple-icon-180x180.png": "902be4713ba26eca464fd3b6e33d03e0",
"icons/apple-icon-57x57.png": "aa619f630b37210ce35a66e712cda37b",
"icons/apple-icon-60x60.png": "650101eeea761cda166606e5621550f3",
"icons/apple-icon-72x72.png": "6f92d75fc83611a00850cf96f94971b0",
"icons/apple-icon-76x76.png": "ba7f7d3ca1c06ba2f65aa6bfb9ba81e0",
"icons/apple-icon-precomposed.png": "cd8acb32219f3e833c35d06da1ae796a",
"icons/apple-icon.png": "cd8acb32219f3e833c35d06da1ae796a",
"icons/favicon-16x16.png": "41adcac2173e1f09acd87ec9a5e16410",
"icons/favicon-32x32.png": "17aff27d4d00f74e6d700060e1862f59",
"icons/favicon-96x96.png": "8576a9f4359448aa3e14394b2b0a0c04",
"icons/favicon.ico": "677bab49e46e77dd5c3fc38af5b9dab1",
"icons/Icon-192.png": "421e85e4972c5ed58f637e14aab20277",
"icons/Icon-512.png": "7d9cc030841be6023f9d85cd521343cd",
"icons/Icon-maskable-192.png": "421e85e4972c5ed58f637e14aab20277",
"icons/Icon-maskable-512.png": "7d9cc030841be6023f9d85cd521343cd",
"icons/ms-icon-144x144.png": "7a14f99295af909fac1857ffff08d566",
"icons/ms-icon-150x150.png": "95cc36a175337de09d6e540d0dff8301",
"icons/ms-icon-310x310.png": "f27636a8d9b4067fc246fa0edf404473",
"icons/ms-icon-70x70.png": "6aed827dcfb8d93ca5630e9b7e3bdd40",
"index.html": "19111db3cbd55ce07683a3107ee90360",
"/": "19111db3cbd55ce07683a3107ee90360",
"main.dart.js": "22f42fb26f9eb65e6d657457c6364a69",
"manifest.json": "d9d046ae2a4717dbf38ab2dbd096ef6d",
"version.json": "0f1883042200b4b36fbe7b48bbd9920e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
