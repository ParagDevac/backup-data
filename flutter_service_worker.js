'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ads.txt": "b4e63c538ef7f3c731bffb6b3003815c",
"adview.html": "dcc53ae66c2a1f8a27a0670565c9e30a",
"assets/AssetManifest.bin": "11f732a74c73163f32c7aba562b7e7a1",
"assets/AssetManifest.bin.json": "dd24afe0a3863dbf4a8d4eb5f95dae00",
"assets/AssetManifest.json": "84400e3e3c79b5d44f200d193bc4e9d9",
"assets/assets/images/2639806_documents_icon.png": "d106b08831d913072a74176abb1d760b",
"assets/assets/images/6646407_door_essentials_exit_ui_icon.png": "ce01539601a3308d72a26cae1d7ea3ce",
"assets/assets/images/8542027_filter_funnel_sort_icon.png": "0e147642249ae5d05fa86567fee48984",
"assets/assets/images/8673253_ic_fluent_document_edit_filled_icon.png": "7c42a60856d3f8827cd6e6d33316ee05",
"assets/assets/images/9041383_file_earmark_pdf_fill_icon.png": "d1266b9e45355695dbe5f1e16eac8619",
"assets/assets/images/928426_bin_delete_empty_junk_remove_icon.png": "23ab6bb32923f89bc102463a473654b5",
"assets/assets/images/briefcase-solid.png": "7aa74bdb5e6fdd5c029d019b05842c62",
"assets/assets/images/building-solid.png": "fd67c776e8c27fcf08ffe52425befdd7",
"assets/assets/images/business-time-solid.png": "6d554af18a1c11d71fbe20e59409d996",
"assets/assets/images/calendar-days-solid.png": "750626ce68b7b6d79de4d9c5f83dcd1b",
"assets/assets/images/cancel_icon.png": "c297487536d5fb027451030d236f47bc",
"assets/assets/images/child-reaching-solid%2520-%2520Copy.png": "8d28cb65303f4dd43d604c14186ae8fb",
"assets/assets/images/child-reaching-solid.png": "8d28cb65303f4dd43d604c14186ae8fb",
"assets/assets/images/clipboard-user-solid.png": "45e5511ec6e6c6ee3d5426564b61cf4d",
"assets/assets/images/envelope-solid.png": "0ddcc6fffba510e4163193d3354ab72c",
"assets/assets/images/forgetid.png": "fbd223bba9ced74d4eb8e3d7657bd056",
"assets/assets/images/Group%25203115%2520(1).png": "55606a8db0f2428ee70a1974679c0f75",
"assets/assets/images/Group%25203120.png": "3c7f652dc533d90c3318fb9fb226a408",
"assets/assets/images/Group%25203228%2520-%2520Copy.png": "f68e901862aa2fdd8a3bcdabec52188e",
"assets/assets/images/Group%25203377.png": "2213efeea069f5944b9154d7ac84ff5a",
"assets/assets/images/Group%25203674.png": "2bd322b2817e0e26ebef7d0f2af68526",
"assets/assets/images/Group%25203682.png": "70f07e9da43f2c40b8cdc0b3dad7c811",
"assets/assets/images/Group%25206.png": "aea919edc82d592b080850f7ae474285",
"assets/assets/images/IBHRMS_Logo.png": "0f384459238cf418432656a695d63692",
"assets/assets/images/icons8-ticket-50.png": "8e51f0a8346ff3f68c89bd58d218db4a",
"assets/assets/images/image..png": "1ffe901565362708b0e9b72852386cfa",
"assets/assets/images/infilogo.png": "8add92ac7a44e0094364569c43bfe392",
"assets/assets/images/key-solid.png": "9ef656150e326cabf4b4c94048f17902",
"assets/assets/images/login.png": "6796d378d32aeb820f2a41d632c3e233",
"assets/assets/images/MUFpr0M1Qykahmta7EObPSMmFtaHdSUA1668624171.jpg": "37503f2479297fba27e624ec3f703275",
"assets/assets/images/Password%2520-%2520Copy.png": "ebda7fb8b3c07a9ade462c7ada9a485a",
"assets/assets/images/Polygon%252016.png": "6282806f25bc275a8adeddb6ce28f009",
"assets/assets/images/Rectangle%2520326.png": "0ffc0a9e6cc6bb7d348c9c3eca4f0994",
"assets/assets/images/Scroll%2520Group%252011.png": "21a895ba625bbdff69fc4d7dd3b12357",
"assets/assets/images/Scroll%2520Group%252019.png": "eaa8d2eba6e4d572196a99f9fd8d25cd",
"assets/assets/images/sitemap-solid.png": "6bd84f8ef369adc1e886e48af0490c3e",
"assets/assets/images/Subtraction%252023%2520(1).png": "76246480ef135c9ace49f42dba37d8f4",
"assets/assets/images/Subtraction%252024.png": "fbd223bba9ced74d4eb8e3d7657bd056",
"assets/assets/images/Subtraction%252025.png": "d7b4032540f0b73b1e39890f854dcbcb",
"assets/assets/images/Subtraction%252028.png": "0cb93e9a7435f985be2582e8035f733b",
"assets/assets/images/termscondition.png": "b2f3d0ed333cd7ddee4eed975584c628",
"assets/assets/images/tick.png": "ef9d86933b526e281c09ac6bcb430f32",
"assets/assets/images/tie%2520-%2520Copy.png": "9ec33d7cacd181a9ac177b531a14133e",
"assets/assets/images/Union%25202.png": "f4c2f1868784ebc93da4851f7577d8bf",
"assets/assets/images/Union%25207.png": "e1784d0e67471fcd719f61b971ac7115",
"assets/assets/images/Union%25208.png": "1c21715960c8a839d3ea97bc6e3c0c13",
"assets/assets/images/user-tie-solid.png": "a7b2afba61ef6ca4576404cd83f1926c",
"assets/assets/images/xyz.png": "f69699e66e60131be47f08d1e99e72eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7096c737f58bda05cf6c154e3051e499",
"assets/NOTICES": "0cd27a00fa94a6df5a6d471291575b8c",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "dc0dc85e26ed860ea0fc8735cbec5957",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cfc5a5d0ddec30eb574cd28f7e3132b6",
"/": "cfc5a5d0ddec30eb574cd28f7e3132b6",
"main.dart.js": "84dbef3d36c3b93e97134ae0f66248b8",
"manifest.json": "44e30bc43db7cff181d226e9e6b1abad",
"version.json": "6a1f903a3dfa92aff9b9bdb04c14cc8c"};
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
