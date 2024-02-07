'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ads.txt": "b4e63c538ef7f3c731bffb6b3003815c",
"adview.html": "678a0c84e3df4bf33fa1444b8e8524f7",
"assets/AssetManifest.bin": "55b8c60fde518475bb6db548cef88b74",
"assets/AssetManifest.bin.json": "94024859c3ac4b470639f81ec32c0f72",
"assets/AssetManifest.json": "83a481ce9ad7de558a0deff285bca4d0",
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
"assets/assetss/Layer%252019.png": "17541bf06918c29b6061dc676b60ddb8",
"assets/assetss/Layer%252019.svg": "90591b128152e9d9c069215bddadedaa",
"assets/assetss/man.jpg": "18de1df667c7d76124a20b200fcbc85a",
"assets/assetss/Outline.svg": "3d0ed6a0e393909c5164bc9a29fe58c1",
"assets/assetss/phone.svg": "1bc2eb8831936947b79f855961655eb1",
"assets/assetss/position%2520(1).svg": "ee4a6b8b446e6a962485f722a3255e9d",
"assets/assetss/select%2520position.svg": "23f77f3cc823ca76ca05286b24ef9978",
"assets/assetss/shop-vendor-icon.svg": "bc2c21b9024c349ccf2134e5e68f1682",
"assets/assetss/wrong.svg": "3cfcd15f3e3a1f04fea87ce5e2e6bb68",
"assets/FontManifest.json": "9c06e60d67f69c8ab1ba6b25f8aa203d",
"assets/fonts/MaterialIcons-Regular.otf": "63b24b2f9ca4807f17c1f82163a30167",
"assets/images/action.svg": "ed4abdbbab0dafc11ded5652828b6a7b",
"assets/images/alladd.svg": "23d5fef8050164331914c09cf8cb80a9",
"assets/images/amount.svg": "aab3dfd93a0565d5c7a5b20c5cd33fe8",
"assets/images/Asset%25202@4x.png": "1d80ccbc1753267f85cf32b32fd1b7db",
"assets/images/cloud-upload.png": "ac88a30fda13ddc3998eb254752b7aa8",
"assets/images/crm-768x512.png": "f430feec0d80dedd52847ef183d0d3af",
"assets/images/delight.png": "46218b1109e8a42553582ce055b272da",
"assets/images/design.png": "af99417854e91b67dddba3fd1567ac45",
"assets/images/diagram.svg": "7d230b2918c137127b860c17191c846a",
"assets/images/done.svg": "cda3a36de02250211450a3436f5d4ba4",
"assets/images/download.jpg": "8833315ed0ddfd39e14d053db824e77a",
"assets/images/edit.svg": "dc27e9e018206b1d09c14c86e32c304d",
"assets/images/email.svg": "3a91c5df586543426ec79237693d8d39",
"assets/images/forgetpass.png": "3d900d2ba7703b88a97a4dcd5b3b3273",
"assets/images/Group%25201490.png": "d20fec2cee58bcea4108eeecaaf74d78",
"assets/images/Group%25201493.png": "ce87e0f9961e3fec067f329854e500ab",
"assets/images/Group%25201494.png": "dbf80fa567ec93984d53f7e257f92d4e",
"assets/images/Group%252021.png": "016cb1314421011beabfb59259233e59",
"assets/images/Group%25202118.png": "b541fea09bb57e24923a0e7d9005ce47",
"assets/images/Group%252044426.png": "bd6cfdc96b73ba556c8145599142470d",
"assets/images/Group%252044427.png": "1992ea06dbc0eb1b08d6836262034100",
"assets/images/Group%252044428.png": "e0e9a0d014e0f57a6f35493d79582b87",
"assets/images/Group%252044429.png": "08c0201be37f2a2433555ccb5e95d5a4",
"assets/images/Group%252044505.png": "cd90d44f21b79274d452bb113644515a",
"assets/images/Group%252044514.png": "e18527d20d6f0a4152e4b4663e1584a3",
"assets/images/Group%252044527.png": "fa2c66a7aba27f0de896613a89991416",
"assets/images/Group%252044528.png": "4029f7e947b35168de93adcb12ccbb13",
"assets/images/Group%252044529.png": "905fcb29f0d7d36318345fbf26f1acb8",
"assets/images/Group%252044530.png": "65bc67d40fe47641815c29b4fc9a4aaf",
"assets/images/Group%252044531.png": "a494a744e8f103fe89d57a753863a0cb",
"assets/images/Group%25205747.png": "0b0aaf3dc9d269738ba07ff815be8b82",
"assets/images/Group%25206188.png": "193e07ed8f8881bff2307cc5a17b7f1c",
"assets/images/Group%25206192.png": "a03f6aad0064a9e3ea5c5fa7d99ef1e9",
"assets/images/Group%25206922.png": "a0a5c18dd3a2c2d4718d34c8b37dedab",
"assets/images/Group%25207030.png": "a898be7e62ee6722374577fe529a975f",
"assets/images/Group%25207086.png": "a5a624169636bcd932d930610cfa35fe",
"assets/images/IBT2.png": "de4a00693312c9def69306dee1e9e862",
"assets/images/ibt_logo.png": "952959b1b7ccf99b32f8018a579506e8",
"assets/images/ic_launcher.png": "6f330f4c3ac23efa0e7b01c5c9dd7632",
"assets/images/Illustration.png": "35d4f321c2905114f96dea08d571adfb",
"assets/images/iphone.png": "7bb003ccba2485115cf0b583b51bdde4",
"assets/images/iphone.svg": "55d670e2907fb2cc1aec78bad323c115",
"assets/images/jc_lLogo.png": "d9a744fd1a8a76cad6640437e5c773b5",
"assets/images/kk.png": "70f07e9da43f2c40b8cdc0b3dad7c811",
"assets/images/last.png": "e18527d20d6f0a4152e4b4663e1584a3",
"assets/images/location.svg": "980b4860f3355f1ea9ffc928394a6ffa",
"assets/images/login.png": "eef60004154f227abd6b3e92406d40d1",
"assets/images/login_logo.png": "917e4153e61090ffeb6b230c3b1d3483",
"assets/images/logout.png": "7ed48f6b5700e63cacc900c3c22cf43b",
"assets/images/logout.svg": "018b43b5f00aed4624a899a65b45c49b",
"assets/images/otp_var.png": "0a0773fe1c3a488b474a87e07ce418c2",
"assets/images/pending.svg": "cd1aeecdf58cc4590e0fc801adfa2cb1",
"assets/images/phone.svg": "e55ab103319330e51eeea43c6baaa287",
"assets/images/phoneno.svg": "7a4fd3e5df12bc27bcdc6b954ea343c7",
"assets/images/phonerepair.svg": "1ed80f2177c0aa1cbff7241d15e1b360",
"assets/images/purchase.svg": "0924f3863e4baa3eae393e4e1cd42aa7",
"assets/images/Rectangle%25202560.png": "fd79cc60c2e1df7036d5117014dcc9a5",
"assets/images/reset_pass.png": "aaa35184b2787dc29d257e51d3e3dbc6",
"assets/images/ricon.png": "ff0f53202098b51f21bf238c4abb02f9",
"assets/images/RJ_DM.png": "47e6312f60d4ec890c0c420a028bf172",
"assets/images/running.svg": "be76b054502fa6930ad81f51c7d42eb0",
"assets/images/Scroll%2520Group%252017.png": "19ea3a7d04190876ca46987d8c63c9b9",
"assets/images/Splash.png": "0ff279245c4aab0b8fff6c10908513b3",
"assets/images/splash_ibt.png": "70f07e9da43f2c40b8cdc0b3dad7c811",
"assets/images/tracker.svg": "9ab6aa898f8b77f8192b57632d371f0f",
"assets/images/warehouse.svg": "5bf0318e4af4d76b8329032cc4e88942",
"assets/NOTICES": "96c2e6b63e70ce860615eff550588f77",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "df6829256ec2f7100cad0ae275867f7b",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd6a2764970f9823b170a800b7fe6f61",
"/": "fd6a2764970f9823b170a800b7fe6f61",
"main.dart.js": "ee1b2fe87eebab5de48b0ed43aa6b401",
"manifest.json": "5688d4f610ce57b8652aa773aaf738e9",
"version.json": "188335a23868cce7272914135968109c"};
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
