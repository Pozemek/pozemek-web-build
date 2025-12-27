'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dfd6da030ee048ef848ae10f760656a8",
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
".git/index": "9a6cd18fed78af504bbf6a5a345b78a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85bbed61ca0f3b230c62d12491fff6b3",
".git/logs/refs/heads/main": "7ebf8e8b0654d354b71afcc57e0dd43f",
".git/logs/refs/remotes/origin/main": "459a2b29aa0adada9c68504b428411f9",
".git/objects/00/af2845248952a683bbd5e8f1e8b1407db5e369": "5e9832117e40faf33244d490abb97626",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0a/1545c65dcad6147feaa473c750d323d065c3b3": "647f98a84cb024c7c1f3d3e0e7a7d5ae",
".git/objects/0b/40963451a64cc02e29e5dbe8b037a63ed0d2c4": "a80cae0d6b4bc6b15fe7450ce0351bd5",
".git/objects/0f/329fff77a911bb191d54af5cb458eae7811b95": "b1ce306645a1febfdfa96ee403eaa66c",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/11/08f7c459c3d1b17721d592e9851f1dd33935aa": "75654404b81fb870c50a17321e091464",
".git/objects/14/39f7ce2dfe3f7c43a68147a576207ee06519c4": "b3b778bb0ba48b21729112b7a0fb129f",
".git/objects/1a/d4bcb9e85ff961e839d324d4b195b7b9cf6777": "9f8a4c3f7b42e61342976864b66920c3",
".git/objects/1b/537cfc7bd10643b4adb8366a5274745cb35d68": "2e9c669228f710231f2e4a225bf87345",
".git/objects/1c/50a665c4f094db3f6b05709e798600cce1f2c2": "c57a6dccf8fbf4a25d172cc595e4bd94",
".git/objects/1e/0f942fbfaa9b63c99fb97209b6b64c27e33b3a": "d941db7c2093c82208eec8f0ecdafeb6",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/e6271531119098fc9a2bfd0dfbd149c3ba3768": "a6bf0103de473b0dd6e407a3870bb9f0",
".git/objects/28/12fa219e82f1b008344e44b975b6e2f05c653c": "de08cb144882da56b96e0594d31ccd3e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2e/b2689fc6cdc186f10b557a4afa29ae2b8d5be5": "f1f1969bc8acf8302072f9ffa0a3b643",
".git/objects/30/4c5499e9221632476a84fbf43c377bc89985ad": "dfb759f16a4da7233684416b7e2346b9",
".git/objects/39/8641655f4d6d36331d4ec54db7f5e7dde19257": "a0621261123f57aeafd29e31146f01ec",
".git/objects/3a/49d6ccde200a102d56a73c25a66ebe49f3639f": "7605c38fe444b47e46e2073f70a6b54f",
".git/objects/3a/78781de9cc4509f6768c3da75a3b02f79cfc81": "1ebc378d797d7f4e413e47c5efdec4b8",
".git/objects/3b/ec59d503082a1f4acfe58709cca6327e2c18cc": "c11857caee851d417f8385ed1880fda6",
".git/objects/3d/b99f18ffcab8cb25afb41f57f463d1a2821be1": "f8405311757391474c9537c5cbc5dc04",
".git/objects/3e/d2415b7c410fd912c6967137ab91037f2ea8d7": "10678cc3d1ab0d4efff7e3d2488150d2",
".git/objects/43/d4b04916aa2d48a3300338830ae20496c9a59d": "3763108ad0fdc1cadda759dd8a6a15ae",
".git/objects/46/8e88241271e23558db73be0296e444d5990cf2": "2a5eca64eb2922cc087d5565af86dfff",
".git/objects/4a/1102c582413c1a77b481466d731d9b6bbf2bec": "b989415cb5275a1988c967d71b5e102f",
".git/objects/4a/9f7ff2c04ca988927b2c5c81136f3a7410d0ac": "ffa83dfc2f7ef7777ba40d406183658a",
".git/objects/4c/9c4cfaab16bdfdfde90461abd648293a25c046": "298e598471e0c62976b350380d537e18",
".git/objects/4c/b63aaee9b5b0bbac719b7dfc423f420f735c54": "68550053a49c10186cb418137d26afff",
".git/objects/4d/5f8fe3e65a965f5f5737770034035f0b064d69": "fa1336f59054e6c2774b5245a0e373b4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/076156aaf992fda95e5fddc4b6d33abca2ef0c": "975f234ce35c587b0ee8a51bcbd532d8",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/e32e7ac9c483ed034fbf53aa6fcaeb267822e7": "9fe3bebc42a772eb66b3fa58e4660e68",
".git/objects/52/eed4cbc960d4e0ad7994ac677e8a5a7c90d3e9": "05c60b650d8dc3c3b1b553f38e443972",
".git/objects/58/7875d0ff92915f58e53a891e45e435cc5a0266": "1df7399bcfeb7c4c4773c03d701247da",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5d/eda3439633264d62628b7ccd9a0d6c56eda773": "277bf7544b61e73d4ab24dd7a2b48980",
".git/objects/5f/14ef0dbc58c501f2b8eba9239a02985bc2b094": "3566937dd1bbb73408d4c86b35eb1e86",
".git/objects/5f/57d0485963c987a33c646c8e46ae0a511fedb5": "2180c40c52709ac2a2fbe0bd9aa63f0e",
".git/objects/60/a1cdbcf4c483e418c5f62b27a2522e1241841a": "663c1eb73745a7245beca6d4db3d9f56",
".git/objects/62/ee1c8029566e90ffbccbc96863b7a4db7c1295": "a01c9b52be4782ed365d9e1ce38b34cd",
".git/objects/67/673a90432209f51da907f9093a82f93f5be92e": "2b22d51e002d0963b0e255f1a4bec725",
".git/objects/68/cb82f2266e2e04a3ad85c6d8403d7fd2cf322b": "ef60ca176576d0004e0c26d9f3a0e141",
".git/objects/6e/f0537e8bd899dd3e0065dffffc08e591720b59": "4f36804bbd5c2bdecfa510db137d387f",
".git/objects/70/2cf1e86073c2bde717810d90e20ccccdc4f656": "c442d4736aa384006d408b9407b369d9",
".git/objects/79/149db4391fbd7852f608c1948900dd596e300f": "91eadf3a2eb434036082fde34e8e82c2",
".git/objects/79/4342f6f637fe6a8ca50fedd69dc46cc0125c17": "b958306bda706f07d8a5ccbc8ed1e218",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/854e477f497492958ab7c61fa407e41bff8bb3": "c30c55025b4875ede557d91337a5a35e",
".git/objects/81/20f13ff88f76785a4e9bb1d67a1559e3427048": "9d76291f9a11439d121cdc3c2911aab8",
".git/objects/83/09bd9975c1e54533791978aee06da118b38f19": "9cd5b3ba5d2723ae16eb40e105df390f",
".git/objects/83/a162ada3ee9f9f3d1f412d59ecf32322cdd398": "f46c137b446476b58525fd21322ad866",
".git/objects/83/c08eec497bcc0dd527f5e03451c7443831d9fa": "016d0b0c9e5d0a6325290bc8a825d998",
".git/objects/86/99319c20c637600b240424b5254fcdaf405f8a": "e8d226f9c20aa85134e8ef9f302a8f00",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/7358d969b902645d44b34753c6d536af3d0083": "eb3ec37b0496305934c1e28487864afa",
".git/objects/8b/99441433f0debff6ad5577c15772915c2ee124": "e677366eb4a8697b42fcef1c0eca3e0f",
".git/objects/8e/a2f334316d43eee86a4404903eb6a3a0ec9166": "3b416aaa82136b5717d5641f5ba2af05",
".git/objects/90/738475f56e7b4d7fde9ae9512b2cd759f79e8e": "402fbeea4cd76f113b1553874cc13ec0",
".git/objects/91/aa73ba79f50180bba1dc3924080fcf1fcf21f2": "4a0677020691ae00213a4f5d51cebf97",
".git/objects/92/bb1957ef592c64741e12ff714afb1d7dfabc5a": "d986979596c604a0cc2e97480ac152fa",
".git/objects/94/565322cca49485f693a4ff6c476750133594a1": "6e339ddecdb4d7ea4a4f1d16d13cc8a2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/fcfc3d100a8972e140496546401eb85826c202": "629a11a87071897997d98fd17d2ec182",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/9355e2cb8cc2d9e4748ae0a2f77d8ef431b333": "4d69e068e4ef726f7dd155fd164e52cd",
".git/objects/a4/41ea3aa887466edebbd5cca27c0621969ee2ce": "d86acdff45bdbde83a03df5a0186eda6",
".git/objects/ab/acee0f7763789fb91c65b9bf083a2c62a6a4d4": "af466328b4c16306cdcc68aaeff92bf6",
".git/objects/b2/89815f9bdbcb695586d8c8c30397ac5312b5c4": "7036a3deaa5f3bc41f825fb1878d69b3",
".git/objects/b3/776284604445b0f7a2fabc9315ee2783e424d3": "7aad49aa8a00386228aae18b84ab6d9f",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7fe94669e06f6761271d838a888c4bde5ddab6": "97524c542bd07b4eed11089d1c3e8da8",
".git/objects/bb/c21b427e41ec7edba24dd7d16014c13f3c103c": "552a4f3b6d87499a1f0f5696165519d2",
".git/objects/bd/dba3996a5001a21e1ad3b75b7d25de31c0939e": "38db49eb119580b75c694c8fa7e2d99f",
".git/objects/bf/3e714d4e281cdb716732ea06651aedd1bff0b9": "11bd13dd3904142533bd47d2444c85cd",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/9888e547b722c4af55edcf7e8ad557b358e787": "e83b5cdb6e7c0586682f007a3e853725",
".git/objects/c5/53e05bc23a0ba5b13b08d800732311902797c2": "0d33ea9b4fc3fc471b788f4a4d4c74d3",
".git/objects/c6/49c0a6494d5a555374170d58b9d8f2b87490cb": "869ee34d9d48d7e0af2e30835886346c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a1e2933f58d9293379af126a329a4793cab080": "d1b40b74e54044dd377c2d80d6c724ae",
".git/objects/d8/93a598258f12630dafa5638a77e86ae4a1c620": "33346fa70dfb639d19849706db5d83e9",
".git/objects/d8/c8479fd6a5216e792a3aa016fba8438d415e53": "a45ecd9128c8e8abbf1ba5b12d4335fd",
".git/objects/de/dd109e18e04dec11ceb0ab1d5ca7ae5bbd637b": "328e1faedeab046629c61bf15580ad57",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/677165dfa1c47ddc471eef7c0c385da70d12dc": "3927ad09772989d43717ddf92e4cfc98",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/ad60092848dcbc25be4214813261faf2f16d3a": "c8f25af935d2826aebaeb4c7f3311b57",
".git/objects/ef/41215778202f04a20901ada4152797f514c9b8": "730dd569079138b7d1e0e5d250826a97",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/519a73e8a8b61f478f287a581babc907f900bf": "32f32ab46ef9c6e131a1003240e2083b",
".git/objects/f6/dd6321e48dbd9ca9ee8af51e86a81567722e45": "6ea3b27766dc0fc4d928f12bd98cd246",
".git/objects/f6/dd6c1f30eb47f889fd20909a8ffc1f1172f842": "eb18eabfdb9871d6adaa7327a8cc3ef2",
".git/objects/f9/e9046c6d9ce481230347872efa928aa60f9b10": "d48e2d8c5cf41993e953f4bd4c09c139",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/25f1ae1acf209bc0adf61343a95eb31c8916bf": "1057f3ca86343a8f9c8b0aeba3f89f84",
".git/refs/heads/main": "a4235444f394833e03722d0e9becc3c0",
".git/refs/remotes/origin/main": "a4235444f394833e03722d0e9becc3c0",
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
"assets/fonts/MaterialIcons-Regular.otf": "c39d9549659e4f89d4d1c7bcaa5b3510",
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
"flutter_bootstrap.js": "c5e475a56b7547972ead2a4e0836ecf7",
"icons/favicon.png": "66a99da265653c13ddec192dc5c1b8ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ddca1c260493688d1ba751388fb0ed8",
"/": "5ddca1c260493688d1ba751388fb0ed8",
"main.dart.js": "c26e697fe4236d2535d81a9f1d5d25c2",
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
