'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fe8fc98a5bccf8ddc03577751ab37962",
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
".git/index": "68e6e8a250a79418337181aff12b8f84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1037d79631ea46c0c53262748681bf3a",
".git/logs/refs/heads/main": "76add7f1bedf96d7c2e78a3fa509de0d",
".git/logs/refs/remotes/origin/main": "cf347918c049d5101562f4893faadc27",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/2229009775e64e07c577f16b731c11e98bd3c2": "5fe6298767cc6e799f39c265bdea8474",
".git/objects/0f/329fff77a911bb191d54af5cb458eae7811b95": "b1ce306645a1febfdfa96ee403eaa66c",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/10/de6f4eac0ec2d929f2474c42a96dffd9eb6bef": "ed9fe127b14f7ac1696f43f60cad2f24",
".git/objects/11/36852826b20cfe73dbd4b3831b64804c1c9bb0": "d00444175955027f7f42caf4b35e8a56",
".git/objects/1c/4dc2a2a91d3b6e3a0487ca5372b4ff6ddd368b": "59aeeba6cb7a56f21d08352884b344b2",
".git/objects/1c/50a665c4f094db3f6b05709e798600cce1f2c2": "c57a6dccf8fbf4a25d172cc595e4bd94",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/e6271531119098fc9a2bfd0dfbd149c3ba3768": "a6bf0103de473b0dd6e407a3870bb9f0",
".git/objects/24/b0ffa9e495eb6ec7307ecb1350ac7bdbffe667": "0f0e4296a63bf6ba920dc19bf5ac3567",
".git/objects/28/12fa219e82f1b008344e44b975b6e2f05c653c": "de08cb144882da56b96e0594d31ccd3e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/fbb44a85d7b6a054650e019f10382c4a8aec03": "659acd262abd56cbc443d4ab06470451",
".git/objects/2f/89eb03906ef17a5bcc8a47ed229e2c1859a5e1": "fa2d9ff55056bc8ac734f319acb435d6",
".git/objects/30/4c5499e9221632476a84fbf43c377bc89985ad": "dfb759f16a4da7233684416b7e2346b9",
".git/objects/30/d0a7160d91af4bf41a81ac285c90d1807735c2": "a20811caa3ddbf9995988bb4c16fdef6",
".git/objects/39/8641655f4d6d36331d4ec54db7f5e7dde19257": "a0621261123f57aeafd29e31146f01ec",
".git/objects/3a/49d6ccde200a102d56a73c25a66ebe49f3639f": "7605c38fe444b47e46e2073f70a6b54f",
".git/objects/3a/78781de9cc4509f6768c3da75a3b02f79cfc81": "1ebc378d797d7f4e413e47c5efdec4b8",
".git/objects/3c/54982ecf3da64cc113f640fa870c35d6a0e5b1": "3ccce7f867e61932e21bf6cd04633fbe",
".git/objects/3d/b99f18ffcab8cb25afb41f57f463d1a2821be1": "f8405311757391474c9537c5cbc5dc04",
".git/objects/3f/c77321d6cad9447ee866b1d7194513def8454f": "6e38c4a2b129a096d7fdcad393b522c7",
".git/objects/41/90cabcc3900f6da5deefea3b12922cdf99ea1f": "2966855f395b7aa4bbcc11d8bcf25ece",
".git/objects/43/5538df41318ecf10d2f61dd15d5ee2e49026fa": "2a4c8cdecd7b1b93aa71162c1fef3faa",
".git/objects/46/8e88241271e23558db73be0296e444d5990cf2": "2a5eca64eb2922cc087d5565af86dfff",
".git/objects/4c/4d65934c5913417a6600d7f7906fd36b6a5e1a": "68a5515bdd72d8b61f06520d986bdb21",
".git/objects/4c/9c4cfaab16bdfdfde90461abd648293a25c046": "298e598471e0c62976b350380d537e18",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/3e1e0759ec6364c975ab042d4557def36f0549": "2ebff40de1243d3362676f94d8bd519d",
".git/objects/55/7a3e094cc29832e1cca66b9db622c1b7f8070a": "d4e756415f93633de6d427f050b58826",
".git/objects/58/7875d0ff92915f58e53a891e45e435cc5a0266": "1df7399bcfeb7c4c4773c03d701247da",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5d/eda3439633264d62628b7ccd9a0d6c56eda773": "277bf7544b61e73d4ab24dd7a2b48980",
".git/objects/62/ee1c8029566e90ffbccbc96863b7a4db7c1295": "a01c9b52be4782ed365d9e1ce38b34cd",
".git/objects/64/3c45cd98f5328af4a954992df989cf7d2a0e58": "72df9ec19d6cc09953dc4a21028bc138",
".git/objects/65/cbe6e929c1a2b07db22911ff6c1930ec197499": "5cdbc990df98cdb2083b08fb9c38bd36",
".git/objects/68/f3c7ede14fb23f1975448eaf079ccb879aad8b": "628f730f33eeefce0e681fd6dd2566e7",
".git/objects/6c/1d61bfa99eea6e11018a6686d797f9443b2321": "1ece536fa7914e77a67fa5bb18e1e21f",
".git/objects/70/2cf1e86073c2bde717810d90e20ccccdc4f656": "c442d4736aa384006d408b9407b369d9",
".git/objects/73/0d253e38a0bd6d391c444c85870f40d190cd32": "91cfe07514ea8427cd0fc62c4dcc6ba4",
".git/objects/79/19c1e99e3dc395b1dfa35af52e70775707bb7b": "7b52241dad4cefed217f2884a463399d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/20f13ff88f76785a4e9bb1d67a1559e3427048": "9d76291f9a11439d121cdc3c2911aab8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fb348fa0bcf48a8161928de6012e894ff16de5": "45341185bfa9ff907dd744d0b99a3207",
".git/objects/92/bb1957ef592c64741e12ff714afb1d7dfabc5a": "d986979596c604a0cc2e97480ac152fa",
".git/objects/94/565322cca49485f693a4ff6c476750133594a1": "6e339ddecdb4d7ea4a4f1d16d13cc8a2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/96caa4026dfbdc4e3c0aa43b67285a5965b00c": "7c62a6e7b98e272bd2a01a77a14e0964",
".git/objects/a0/c9e44f1fd6075fcedea85b85554979cb82a8d3": "5a4cc96b128b202a1fe2b361abb74c2d",
".git/objects/aa/ef14e9bb34d1487cd0bfb5d7785a922aadcff2": "1f59fac90e33964431c3d1f7830212c3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/760875963c32885ad19d1a4d488ea240be4361": "b37460927743be5166ae2751466f6cca",
".git/objects/bc/149c0641f40798d57210289eb3c68f2972e91d": "787093de577c53858ab8c11b04bd0426",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/8c4adab9b3d64634a0cb6f275dea152c931673": "b17688dfd693ab107968fbbca902165f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a1e2933f58d9293379af126a329a4793cab080": "d1b40b74e54044dd377c2d80d6c724ae",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/ad60092848dcbc25be4214813261faf2f16d3a": "c8f25af935d2826aebaeb4c7f3311b57",
".git/objects/f0/0d315850c25fef55479fa7ea42aad7273a9045": "67e045959ed451bec40cfa062649a4c1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "555b12b41d076dfc97f92ff98fc2da5a",
".git/refs/remotes/origin/main": "555b12b41d076dfc97f92ff98fc2da5a",
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
"assets/fonts/MaterialIcons-Regular.otf": "ef777f3decdbc6390f8a0b17e0bd04ac",
"assets/NOTICES": "6dc8389b4963ccb23c880fe87f1899c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c048cbb0efdb8ec3d4417d373b4b71da",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3aa3d2470cffd2bcfc9177fb2db6c870",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "df16a31c5ef03650939d3100dd6a22b4",
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
"flutter_bootstrap.js": "cbf38002f3c282723c3d69223f16182d",
"icons/favicon.png": "66a99da265653c13ddec192dc5c1b8ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fdbf6e20ef7c8b41bd32f275b2693ab9",
"/": "fdbf6e20ef7c8b41bd32f275b2693ab9",
"main.dart.js": "e23d286107369813610ccd8121bb0c31",
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
