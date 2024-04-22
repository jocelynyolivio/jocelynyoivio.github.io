'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "ab1212d95fa5604df32f0ab620ecb3b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9c9ca973467f751dc937be6aa4fc107",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27ba4e7196c5d4404cb9c8a61dc3e17a",
".git/logs/refs/heads/main": "2143aabf011ed18c3709d8fd891d9be8",
".git/logs/refs/remotes/origin/main": "04022b42f78b26634273f4ea8f5448bd",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/90b7d30315128fd3f434003654f7cfc19f48c1": "b9ef9a05f5d60e19fcacd2f0fe0bf9b2",
".git/objects/19/9163ade16df182cc5e4395bfe92ef82b20fa9b": "20c3a4411c75b8366b53d63e19f25c65",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/9379917cc64b5c91439bee640e64f2cfd661b0": "7cb06af77dfdfb66a39e07bdfda5078d",
".git/objects/29/44606d0c48361ed6c39358b885a66bcd11b375": "596642901824e74107ce1248d96f736d",
".git/objects/29/d117f09b4c90bff42428ead3ed33b524e3b9d2": "5033b29f1767165a0ee9581bc1e32371",
".git/objects/31/3936bec6d20074800814a44162ca0c08b01308": "cb777752a8ea87819f1250fdc78535e4",
".git/objects/36/d5c7f087c9af1ba07abba8e0057a5438e1e18f": "52a37e3561bd9c349ed7d82b33d307c9",
".git/objects/38/aa8792c4ceaf7b8f391379a8008da4db9f4be5": "14a18c4ac9f914b9ceba0c12c8ba1166",
".git/objects/3a/0c752fd080a4499c367b5da28a919b4d6e9ec4": "ca5ffc57213c37f51e0f7949733632a0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/43/5c54099a6f06c2500e79dc85068e363ab7ac9c": "14bae09c66335bdcd4cc8037c6804b30",
".git/objects/46/d4569f7ce3c09345ffbdc123e06c572882009b": "35655fdbebb48159f282346c46ea5e49",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/e53c173978411e326f0fc5a405b29616b1cb3f": "2823dd11dfd01bb940efbc5755dd64c0",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/768b3f93fbb7dd9c836ecca429f03d3ad3dc0e": "2292a06b6b1d2de8c3c72a7d56e2593a",
".git/objects/5f/108668abbe76a82f28fa1891611ac5a7ca4e13": "ab7c4332aedc2149f4919830164bc298",
".git/objects/6d/114eba04ca00e7ab50d503b3404eb75ffdc9d1": "c7d0eb61bd137b5e0eb0f692ea31ddbc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7d/c3f30f5cce2c310e5cb03a69c23df7a5cc9ba9": "68153719c64fce2df71c815aa8f5c4e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2e95b9e928e8cb81d14f155f9393a2afb6d357": "dee956d568f2af59f3735923f6c2d78d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/f5ca468336a34ef4a43587b1ab0e47feb5b7d2": "25e71a6c806c3e50c4f4ca7ab39b087c",
".git/objects/93/07c1ca2ce475a130fcd37d688e04efd42d7ca5": "69706341c02d40f5b183900c8f45171f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9a/f9e5fdb078494096938b90f8e9c0a5e8ac316b": "4a5cbeeea79e32a19df00a1a440520a2",
".git/objects/a0/af59aefb92038a5313e38d958edd384a3259f7": "2e1b4a906954093a858bb143fabd6ff0",
".git/objects/a5/b395fa94f4f3f1d816e3b372c7c7191fa1d079": "760a71ae7a02af9485583a40d8d46c2e",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/6194a83fa2bd81fae36d10105afc32bdb3ceef": "f778c942f7f3bb5063585b8619eacb9a",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/5ddc001048444f458c6ed21dd7f05bf671b76f": "123a7298b436b3561df3ba858027e2c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/ff51dd37de98d1460a1310071de019650894da": "82672da3bf3c0cfa56e3a37f5626a06d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a4689ec5e72e8be876a2624552f855c0ec5a83": "e69a52d2e9009b5b08710ff1b9ff44d6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/fa3ca5820b19202230b399c0fd343a2a05c011": "b442a142893873eb95dc9ed738015102",
".git/objects/e3/4e44ccd2e66ed792bb2e376290a523416ef1ff": "aa0370f5aa3b4d52948bad1bed229d3c",
".git/objects/e4/42398a669a4d24ef19e1ecab5a6e0314173c42": "f512a1374a70b8361ee29313ea3c78a8",
".git/objects/e6/6c9129633be4c9ece9a306defb345ca6e8c055": "5862e8100d5c719d269f40bdfab07fae",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/f7a871eee84b79edf6a2f41464850b9b734c9e": "1bd945067d4815fb02e0131649d5220e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af65c1929cf9137e4b26ac5d24ebc4e4a34951": "eb261888aa7d8bec29a8afa98425436f",
".git/objects/f9/16ae6091d2f6125cc3b5a1bf9508d36faf1e8c": "00b90c943f15d89e5b5175765b502190",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "461fa1b2b390a0b245493622750e64a0",
".git/refs/remotes/origin/main": "461fa1b2b390a0b245493622750e64a0",
"assets/AssetManifest.bin": "2374e62551fb0cfc834be79a9330d9a5",
"assets/AssetManifest.bin.json": "a613b87f27d04fcf843c1df2a9fd0f2a",
"assets/AssetManifest.json": "2ea4cf6de9f7fdb9fc7e7bf8e026f768",
"assets/assets/images/assets0.jpeg": "919d45459e07c7f7094abbe84e313a16",
"assets/assets/images/assets1.jpeg": "c239299fdb0d4693dc804ff23e14fdd5",
"assets/assets/images/assets2.jpeg": "a8fa6529bc736bbae2fd5c96abb343f0",
"assets/assets/images/assets3.jpeg": "45ec3bb48347f24b6ec5eecc13496f2f",
"assets/assets/images/assets4.jpeg": "37802ae0230a91e4d055e2a42aa2379e",
"assets/assets/images/assets4.jpg": "52272764ce006d0de3ab10e845cdb1cd",
"assets/assets/images/assets5.jpeg": "66cdf2826fcf02db01e7748db1889c64",
"assets/assets/images/meal0.jpeg": "e23105a5a1614576a3c859bef1feb35d",
"assets/assets/images/meal1.jpeg": "2bec77b35578445fa132ba2e04f298eb",
"assets/assets/images/meal2.jpeg": "7f9ac88a79b6ad6c6ad23e911f7d8423",
"assets/assets/images/meal3.jpeg": "2858dbc32f98b5535029ded06d7ee5f8",
"assets/assets/images/meal4.jpeg": "35f4abb79d82f4a8a3310f870bb676d9",
"assets/assets/images/meal5.jpeg": "5dcf66df6f8a64ea135aec3af790def5",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "104aab4cb53936f2789691cf4e2d27cb",
"assets/NOTICES": "12aba17fb20f1eb557e50c640aeab8b6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54805dee71de36b295171bfbf6919b8b",
"/": "54805dee71de36b295171bfbf6919b8b",
"main.dart.js": "6b1a53c568f35bf6016e071a447b6cf3",
"manifest.json": "4f0678c8668d1ae16553bdbc7f2b71b3",
"version.json": "c57ca6ac46852e5501cac6e0a8253e78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
