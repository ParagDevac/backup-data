'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ff4845b5dbe57322fc9d98410912ba3e",
"assets/AssetManifest.bin.json": "df89c81eb61a28123b1dff23d8e48d69",
"assets/AssetManifest.json": "b6229df6632aa5b30d8538633e072ff4",
"assets/assetss/1530082_building_building%2520location_company_location_office_icon.svg": "dda45850025d74c54b054d507cedf230",
"assets/assetss/1564535_customer_user_userphoto_account_person_icon.svg": "b5b8f83d7015ec78c5720ff037ad7fcc",
"assets/assetss/1737371_notcorrect_sign_wrong_x_icon.svg": "bf0607dd66447bfc27c2865a9f340518",
"assets/assetss/1904660_email_envelope_letter_mail_message_icon.svg": "b43353cf1c81a1320675920b33117a09",
"assets/assetss/211677_image_icon.svg": "3f2eb3ab35ecc064ea8c77fbfde08841",
"assets/assetss/3018530_buyer_customer_figure_person_portrait_icon.svg": "0ee68cdca937878a1758b23e042524c4",
"assets/assetss/3643745_human_man_people_person_profile_icon.svg": "98b9a8870a7ff33847d70e7efedbc71b",
"assets/assetss/5172988_door_internet_key_lock_password_icon.svg": "260e77221e4cd5e04483361e4e42fc41",
"assets/assetss/622392_security_unlock_password_protection_safety_icon%2520(1).svg": "5974e0dce169e9ff09c2b1b6e6d04a63",
"assets/assetss/6351930_eye_password_see_view_icon.svg": "4ae14e8731c2c8ed9d7275af9f8521ba",
"assets/assetss/6351969_eye_key_look_password_security_icon.svg": "21f391e4436baadbb408b75381003437",
"assets/assetss/759451_couple_equality_gender_lesbian_male_icon.svg": "9af227b68758a01c40c19ded60abdea7",
"assets/assetss/8664938_trash_can_delete_remove_icon.svg": "2f60b22d7aa8e3cb34c8878c059701fd",
"assets/assetss/8666609_user_icon.svg": "c07fdbd2eb4e548d1f2f565f6280b6e2",
"assets/assetss/9024006_user_circle_fill_icon.svg": "218653f154b64d0c9e6eb65dd3a97c5d",
"assets/assetss/9024036_users_three_fill_icon.svg": "0860e87cd1e5c1b6137593a790cfae4c",
"assets/assetss/9026134_users_three_icon.svg": "cb7fdc4c6cdc96126309d8a84c7852f2",
"assets/assetss/9215073_home_dashboard_page_app_house_icon.svg": "84c44c7f9c532ae4f38c0b9fb69647f4",
"assets/assetss/9224395_home_house_dashboard_page_app_icon.svg": "a3ed7056b8ec3cd2a0ecdc1b58e7e7a3",
"assets/assetss/add%2520user.svg": "0d02b4633704b9901d8895a6cdd9ffb5",
"assets/assetss/call.svg": "3273445ab215cebcdb4a09471293ee3b",
"assets/assetss/caution-svgrepo-com.svg": "e7f8c87a3c52260169e00fcad7952645",
"assets/assetss/cross.svg": "0fa1e8ed0144fe648c0a5aae1014a4ed",
"assets/assetss/date-of-birth.svg": "309c8038510b13a4dfd32070cfc7177d",
"assets/assetss/deletebutton.png": "0bd29569536e1894a16634be75344a32",
"assets/assetss/doc.png": "31bd0db0163ab85d11c11e0e7b597f0b",
"assets/assetss/drop%2520down.svg": "0594fb6f1bc50184705b0568855eee6b",
"assets/assetss/dustbin.png": "8e1d5a60fef084cd4bb20b6a88762059",
"assets/assetss/dustbin.svg": "b5bf577bd372c49330ca677e517526c6",
"assets/assetss/edit.svg": "de0e0308fa675e47fd8726c73715f75c",
"assets/assetss/gender.svg": "ab7694964f5e5088522d8cb935a54691",
"assets/assetss/Group%25201032.svg": "91b6c3515af19186c0015a34e27b170c",
"assets/assetss/Group%25201280%2520(1).svg": "86c41bb604b1b5bdb49f3119138c1201",
"assets/assetss/Group%25201280.svg": "8f4c56c7946e322ccac953071df78b0a",
"assets/assetss/Group%2520439.png": "0a0773fe1c3a488b474a87e07ce418c2",
"assets/assetss/Group%2520724.png": "3d900d2ba7703b88a97a4dcd5b3b3273",
"assets/assetss/gst-icon.svg": "5dd0a3f4aabb516f514bcd9c9265fa9d",
"assets/assetss/Icon%2520feather-phone-call.svg": "d91e2d1e68dbbb746c59ebcb0ac7687e",
"assets/assetss/Icon%2520ionic-md-document.svg": "99f2220b59016355a19b452a1a7b57b3",
"assets/assetss/Indian-Rupee-symbol.svg": "f88c8d010a686d33af2bf3183c42a35e",
"assets/assetss/man.jpg": "18de1df667c7d76124a20b200fcbc85a",
"assets/assetss/Outline.svg": "3d0ed6a0e393909c5164bc9a29fe58c1",
"assets/assetss/phone.svg": "1bc2eb8831936947b79f855961655eb1",
"assets/assetss/position%2520(1).svg": "ee4a6b8b446e6a962485f722a3255e9d",
"assets/assetss/select%2520position.svg": "23f77f3cc823ca76ca05286b24ef9978",
"assets/assetss/shop-vendor-icon.svg": "bc2c21b9024c349ccf2134e5e68f1682",
"assets/assetss/wrong.svg": "3cfcd15f3e3a1f04fea87ce5e2e6bb68",
"assets/FontManifest.json": "0b823f98f715171bd4f37e24eb2917e5",
"assets/fonts/MaterialIcons-Regular.otf": "381947613cb35f5792a70b3c30e36880",
"assets/images/action.svg": "ed4abdbbab0dafc11ded5652828b6a7b",
"assets/images/alladd.svg": "23d5fef8050164331914c09cf8cb80a9",
"assets/images/amount.svg": "aab3dfd93a0565d5c7a5b20c5cd33fe8",
"assets/images/design.png": "af99417854e91b67dddba3fd1567ac45",
"assets/images/diagram.svg": "7d230b2918c137127b860c17191c846a",
"assets/images/done.svg": "cda3a36de02250211450a3436f5d4ba4",
"assets/images/edit.svg": "dc27e9e018206b1d09c14c86e32c304d",
"assets/images/email.svg": "3a91c5df586543426ec79237693d8d39",
"assets/images/forgetpass.png": "3d900d2ba7703b88a97a4dcd5b3b3273",
"assets/images/iphone.png": "7bb003ccba2485115cf0b583b51bdde4",
"assets/images/iphone.svg": "55d670e2907fb2cc1aec78bad323c115",
"assets/images/jc_lLogo.png": "d9a744fd1a8a76cad6640437e5c773b5",
"assets/images/location.svg": "980b4860f3355f1ea9ffc928394a6ffa",
"assets/images/login_logo.png": "917e4153e61090ffeb6b230c3b1d3483",
"assets/images/logout.png": "7ed48f6b5700e63cacc900c3c22cf43b",
"assets/images/logout.svg": "018b43b5f00aed4624a899a65b45c49b",
"assets/images/otp_var.png": "0a0773fe1c3a488b474a87e07ce418c2",
"assets/images/pending.svg": "cd1aeecdf58cc4590e0fc801adfa2cb1",
"assets/images/phone.svg": "e55ab103319330e51eeea43c6baaa287",
"assets/images/phoneno.svg": "7a4fd3e5df12bc27bcdc6b954ea343c7",
"assets/images/phonerepair.svg": "1ed80f2177c0aa1cbff7241d15e1b360",
"assets/images/purchase.svg": "0924f3863e4baa3eae393e4e1cd42aa7",
"assets/images/reset_pass.png": "aaa35184b2787dc29d257e51d3e3dbc6",
"assets/images/ricon.png": "ff0f53202098b51f21bf238c4abb02f9",
"assets/images/running.svg": "be76b054502fa6930ad81f51c7d42eb0",
"assets/images/Splash.png": "0ff279245c4aab0b8fff6c10908513b3",
"assets/images/tracker.svg": "9ab6aa898f8b77f8192b57632d371f0f",
"assets/images/warehouse.svg": "5bf0318e4af4d76b8329032cc4e88942",
"assets/lib/font/Swis721.ttf": "90c8de006caf7a6d22c680771a2305a2",
"assets/NOTICES": "a09d59745184bc1c20a38cadce2d8740",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "85808a77c229143ee72bbb7784907da8",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "788f29842adade8caaf17be2a317e1da",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "1387652ed98293a3e2b6639d21d2dd40",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "13420730c456db9463829a7a9a8d0c3a",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "bb41f596e9c909d1279f79b06c11c3eb",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "3d69caac1feaa544d89721dffa4dae9b",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "9894a78faa3fc60eaa8177413c67fc9d",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "18b10873671ef699a9c6b6a562c47c72",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "b8e5eda1dd4207b4f7488718bf1b13f9",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "038291099699a91e5486d90f6865865b",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "2668f7df2cd1d2c95ca64435d9783284",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "1c030dd4e715ec504fe4925864f023fe",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "06578957e8dca70fbe9573fbce76c0a0",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "8e1046cce01ec078ff8a0a03e5e061ed",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f91baeae185458bcebefd3cec5f8d8e3",
"/": "f91baeae185458bcebefd3cec5f8d8e3",
"main.dart.js": "de7d885d26f63520b2d30ef59df44fc1",
"manifest.json": "45464a545b23a930f3ca49d26f73a942",
"version.json": "312bc43efdbdfd4e33a7024cad6e9e22"};
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
