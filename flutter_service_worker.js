'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1455fefd83e0e5f0d3a3775f33b521e4",
".git/config": "23fbaddfff87355f0554d996be55b356",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "304711443859777811b3e735e71cf2c0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83b2f538af2e49ad0941028d48edfb54",
".git/logs/refs/heads/main": "561b5ca90337dee1850032aaad4a5752",
".git/logs/refs/remotes/origin/main": "c79a2c92e8be584482d89946d07d9066",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0a/a30180c4ecbb6bcd45330d9b0b3fd5203bb703": "99ca6f5d0157f752aa60ff544856b817",
".git/objects/0f/329fff77a911bb191d54af5cb458eae7811b95": "b1ce306645a1febfdfa96ee403eaa66c",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/1c/50a665c4f094db3f6b05709e798600cce1f2c2": "c57a6dccf8fbf4a25d172cc595e4bd94",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/997079f15f35e833375bb257f3195a1a79dfb1": "c89770b59810ee83ca08e5cab48c328c",
".git/objects/20/e6271531119098fc9a2bfd0dfbd149c3ba3768": "a6bf0103de473b0dd6e407a3870bb9f0",
".git/objects/25/621c344122fa64332cb1ac89b8ffef1b6f960c": "c92e7bf92261b80091387b96e80778c7",
".git/objects/28/12fa219e82f1b008344e44b975b6e2f05c653c": "de08cb144882da56b96e0594d31ccd3e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/30/4c5499e9221632476a84fbf43c377bc89985ad": "dfb759f16a4da7233684416b7e2346b9",
".git/objects/39/8641655f4d6d36331d4ec54db7f5e7dde19257": "a0621261123f57aeafd29e31146f01ec",
".git/objects/3a/42df4bcabcee8da07b190971815f144b061ed2": "bb40d65867b9ed93c770ebbc0cd5c14b",
".git/objects/3a/49d6ccde200a102d56a73c25a66ebe49f3639f": "7605c38fe444b47e46e2073f70a6b54f",
".git/objects/3a/78781de9cc4509f6768c3da75a3b02f79cfc81": "1ebc378d797d7f4e413e47c5efdec4b8",
".git/objects/3d/b99f18ffcab8cb25afb41f57f463d1a2821be1": "f8405311757391474c9537c5cbc5dc04",
".git/objects/3e/d2415b7c410fd912c6967137ab91037f2ea8d7": "10678cc3d1ab0d4efff7e3d2488150d2",
".git/objects/41/bf730d314fbdd041272ff88e7f6402058b9bdd": "14faa0c98bbd9be52a9990f5521fc64a",
".git/objects/44/9792d9a2a005a66e55dc6e4d519ddd9f870155": "6f23dac5dfff7a86b4fbf0675de481f6",
".git/objects/44/be35c98a8465949c936041c529d8fd2be8ec83": "8023b8286ed65d8ff8520d82705d81c4",
".git/objects/46/8e88241271e23558db73be0296e444d5990cf2": "2a5eca64eb2922cc087d5565af86dfff",
".git/objects/47/7aac87e92c497d2d1c9d6edd5d932286d151ee": "71a47be734cf5a75fa9f4075da3e504b",
".git/objects/4c/9c4cfaab16bdfdfde90461abd648293a25c046": "298e598471e0c62976b350380d537e18",
".git/objects/4d/07254352962947ec67053720aec374519b0208": "6d3b418d5f62dd76b1d61d2bc6da7dc1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/7875d0ff92915f58e53a891e45e435cc5a0266": "1df7399bcfeb7c4c4773c03d701247da",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5d/eda3439633264d62628b7ccd9a0d6c56eda773": "277bf7544b61e73d4ab24dd7a2b48980",
".git/objects/5f/14ef0dbc58c501f2b8eba9239a02985bc2b094": "3566937dd1bbb73408d4c86b35eb1e86",
".git/objects/60/a1cdbcf4c483e418c5f62b27a2522e1241841a": "663c1eb73745a7245beca6d4db3d9f56",
".git/objects/62/ee1c8029566e90ffbccbc96863b7a4db7c1295": "a01c9b52be4782ed365d9e1ce38b34cd",
".git/objects/70/2cf1e86073c2bde717810d90e20ccccdc4f656": "c442d4736aa384006d408b9407b369d9",
".git/objects/74/9072ed9dd4e18bb8ea43b47de460a30f3a2355": "29a6c53712797ba2c67e077a9a5e402d",
".git/objects/79/56e1e584007f9e5e53edb7e4a308b3236767df": "9e8ab0daf86c4d85a240bf814c771560",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/a26660f7d28a4d0de1c87f81a5fc31bd1196b7": "ee7a4ac4d70ddc853f747cd5f0b9a062",
".git/objects/81/20f13ff88f76785a4e9bb1d67a1559e3427048": "9d76291f9a11439d121cdc3c2911aab8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/3c338d4576c871386fda4eabfe7c0fdd57a0c0": "ec208daccf582fddd82051e7b2f28f44",
".git/objects/92/bb1957ef592c64741e12ff714afb1d7dfabc5a": "d986979596c604a0cc2e97480ac152fa",
".git/objects/94/250b4fb843f50432a2cee8289b13ef8fe5043e": "9030f123d37f83d2ed3a805a021b2697",
".git/objects/94/565322cca49485f693a4ff6c476750133594a1": "6e339ddecdb4d7ea4a4f1d16d13cc8a2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/9709a35654b24fb96fe751cd20c70d6902f404": "440caea8baef0117c414c5c3905a6577",
".git/objects/a5/2c0eac43ba00aea0c0f477fef33580be281458": "07e7374f8b62ae2e93d429fa870a2843",
".git/objects/b3/776284604445b0f7a2fabc9315ee2783e424d3": "7aad49aa8a00386228aae18b84ab6d9f",
".git/objects/b5/0b8043329611c51aa0f94fb0e6926f15e38694": "1de097d0303bee21482fea3f063e7dd7",
".git/objects/b5/b9ee1cea08e06a24855ffde46a7e7c8ab15762": "43cd8e7dc36b6491066f4738b21d60f8",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/6e160b878ab1f2ebae4b147c21b7333d1b1daa": "6201b9f0fac3d329224fc4f158a87879",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/53e05bc23a0ba5b13b08d800732311902797c2": "0d33ea9b4fc3fc471b788f4a4d4c74d3",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a1e2933f58d9293379af126a329a4793cab080": "d1b40b74e54044dd377c2d80d6c724ae",
".git/objects/d8/93a598258f12630dafa5638a77e86ae4a1c620": "33346fa70dfb639d19849706db5d83e9",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/e2bb7bb3e3c22f6ea6456c339d614acb8294a3": "d4a5f8c622fac317f6b3b8c1145a02ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/ad60092848dcbc25be4214813261faf2f16d3a": "c8f25af935d2826aebaeb4c7f3311b57",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/dd6c1f30eb47f889fd20909a8ffc1f1172f842": "eb18eabfdb9871d6adaa7327a8cc3ef2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "ec1e0675b0faf1f058360db027b54874",
".git/refs/remotes/origin/main": "ec1e0675b0faf1f058360db027b54874",
"assets/AssetManifest.bin": "086a056f8f0aaf71a74615c1604b4bde",
"assets/AssetManifest.bin.json": "06d185c334b5a9f43a11843b7ac6e941",
"assets/AssetManifest.json": "cc23f239ca33c51457878b2316e234f9",
"assets/assets/icons/app_icon.png": "66a99da265653c13ddec192dc5c1b8ec",
"assets/assets/icons/fb.png": "4bfa8454765678fbf20c811fe54d89b0",
"assets/assets/icons/google.png": "51791544f2482d53a28225ae7ef91dfe",
"assets/assets/icons/insta.png": "7d31804b73cffebd3f4c516daf1f04ca",
"assets/assets/icons/property_logo.png": "8d2aed2a2f719c3f65c84cc94b4a877f",
"assets/assets/images/property_home_bg.jpg": "4bae8a8d26b54cefc548efabe3325148",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "8a2d3f20e099654784f0412281e0f7da",
"assets/NOTICES": "6d8e96235cc2f5cd74a9d19c7d68fee8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c048cbb0efdb8ec3d4417d373b4b71da",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3aa3d2470cffd2bcfc9177fb2db6c870",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a82033fa62b3f3d4a43c79d3cc41c2e9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f5960a2f16d32553c30a47296a4fbdea",
"icons/favicon.png": "66a99da265653c13ddec192dc5c1b8ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ddca1c260493688d1ba751388fb0ed8",
"/": "5ddca1c260493688d1ba751388fb0ed8",
"main.dart.js": "06ba231ca7871b37519b849997403363",
"manifest.json": "8f9c16cb892f3c08a92b35fdde235f2c",
"version.json": "2a817a5c7df875681091d1b29a3ae8bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
