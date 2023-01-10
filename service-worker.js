/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cca076abc368bff7092bda136b9a2652"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.b8a4fee5.css",
    "revision": "8b446e6e46a7bffa81d0b5944a8c906c"
  },
  {
    "url": "assets/img/Agile-model1.d7cea002.jpg",
    "revision": "d7cea002c29bd7b3520e9ee4b29fd9ae"
  },
  {
    "url": "assets/img/delete-error.304c8134.png",
    "revision": "304c813475d226c4d3c97d2d612488b1"
  },
  {
    "url": "assets/img/delete.f970c467.png",
    "revision": "f970c467749077a72c96f7f6f072a9a1"
  },
  {
    "url": "assets/img/get-after-delete.ec2364d8.png",
    "revision": "ec2364d843b922595aab24c15d9530a4"
  },
  {
    "url": "assets/img/get-after-put.cf6590ab.png",
    "revision": "cf6590abae959b695fe319622aa7a8fe"
  },
  {
    "url": "assets/img/get-all.383d58a6.png",
    "revision": "383d58a6c7fc88e4595f3a85d22ccd95"
  },
  {
    "url": "assets/img/get-error.8026e0f6.png",
    "revision": "8026e0f6f08e6bd02ee80718d1eaffff"
  },
  {
    "url": "assets/img/get-one.ae285336.png",
    "revision": "ae285336b2bdbb8e815f78998c99d35c"
  },
  {
    "url": "assets/img/get.948a7688.png",
    "revision": "948a768820f0e8c19638df162ab38d6c"
  },
  {
    "url": "assets/img/incremental_model.f5d9e8fb.jpg",
    "revision": "f5d9e8fb91535b6d3c0ea1fabfff8de3"
  },
  {
    "url": "assets/img/iteration_model.e0a0d503.png",
    "revision": "e0a0d503d526275a965b85712a403de8"
  },
  {
    "url": "assets/img/kanban.b72f5f24.png",
    "revision": "b72f5f24fff0c7c164d7fd9c58239efd"
  },
  {
    "url": "assets/img/post-error-same-name.82b7d955.png",
    "revision": "82b7d95582c721692cf27de14d087d02"
  },
  {
    "url": "assets/img/post-name-error.7427a0c6.png",
    "revision": "7427a0c67fe6d5d98f2da793c4e36580"
  },
  {
    "url": "assets/img/post.2406377a.png",
    "revision": "2406377a395732bf66d48455d9ef498a"
  },
  {
    "url": "assets/img/put-error.13d6835a.png",
    "revision": "13d6835ae52116c3def7d185223fe1f7"
  },
  {
    "url": "assets/img/put.65b8456a.png",
    "revision": "65b8456ae9cf994277f2fb62597bf142"
  },
  {
    "url": "assets/img/rup.7215ce47.png",
    "revision": "7215ce47c8b371b4efe2dd0229a203da"
  },
  {
    "url": "assets/img/sceme.4c43a144.png",
    "revision": "4c43a1442c9af499a43b753271d55083"
  },
  {
    "url": "assets/img/Scrum1.6cf6e799.jpg",
    "revision": "6cf6e7992ae0a26347624ec09b471af1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Spiral-model.ff8b53fb.jpg",
    "revision": "ff8b53fb3a68d45d8d41595446121981"
  },
  {
    "url": "assets/img/V-model-1.f7c326d5.jpg",
    "revision": "f7c326d533c04a8c5c68e1344c6ed759"
  },
  {
    "url": "assets/img/Waterfall-model.370b6011.jpg",
    "revision": "370b60114ad9a205c274b630c92f2bab"
  },
  {
    "url": "assets/js/10.20fbaa63.js",
    "revision": "9ab707f1f073d4cc19753e1c5d02312b"
  },
  {
    "url": "assets/js/11.b1ed8446.js",
    "revision": "fe8e11d9d1e1c4d2afefa8a82d543aed"
  },
  {
    "url": "assets/js/12.25b91be8.js",
    "revision": "f0d7bdf77921c660b0780136015d896f"
  },
  {
    "url": "assets/js/13.6c694e0e.js",
    "revision": "a6def13ff7267948e8a542bb17b0cd8a"
  },
  {
    "url": "assets/js/14.b1b1c777.js",
    "revision": "b7827b3af4673aec52a7c74df7315523"
  },
  {
    "url": "assets/js/15.a2b05e63.js",
    "revision": "7faa338d96e74014ac37f09fc5b4af01"
  },
  {
    "url": "assets/js/16.45bc45b4.js",
    "revision": "8074dcb22b97711ba8c3fa42c254551e"
  },
  {
    "url": "assets/js/17.29f363ed.js",
    "revision": "1bc3050a39144c4b72de755aa60511ee"
  },
  {
    "url": "assets/js/18.8de9fe18.js",
    "revision": "31c05147c0d8a22af834c8d1b0c73e23"
  },
  {
    "url": "assets/js/19.6a0d8bad.js",
    "revision": "fe60ed21302d663ccca4ee95a29dcdfd"
  },
  {
    "url": "assets/js/2.211ed2bb.js",
    "revision": "02a3ec5435c1f4e03948a17b74e6998f"
  },
  {
    "url": "assets/js/20.d223ad13.js",
    "revision": "da5bd923905b06fb3cf8e436a38fe0fb"
  },
  {
    "url": "assets/js/21.27cb7892.js",
    "revision": "0617f099461ef06aba32d30cccd8e064"
  },
  {
    "url": "assets/js/22.530b1337.js",
    "revision": "d4be1206962911101c590c8e7616e351"
  },
  {
    "url": "assets/js/23.9e6850a3.js",
    "revision": "2b91637ee4e87a1844c33c7a4a346a57"
  },
  {
    "url": "assets/js/24.e4dccf60.js",
    "revision": "d64a67eb267161260505b82278edaf22"
  },
  {
    "url": "assets/js/26.90401633.js",
    "revision": "d4814f392d21f20b81782e6203b24f5c"
  },
  {
    "url": "assets/js/3.3ca19781.js",
    "revision": "e11c25e806c8903fac3b9fca8eaaa704"
  },
  {
    "url": "assets/js/4.693a089f.js",
    "revision": "6216d35923934bbb332a16c40cfcb2be"
  },
  {
    "url": "assets/js/5.7314af32.js",
    "revision": "3e230fa7c3fd29311441bbd9cc223bcc"
  },
  {
    "url": "assets/js/6.3ee3979e.js",
    "revision": "5a33516c0c065c9402900f04cdb0e1b9"
  },
  {
    "url": "assets/js/7.9824daaa.js",
    "revision": "7c1aa3a1feedf8e3d3357c725c668d75"
  },
  {
    "url": "assets/js/8.c87041c9.js",
    "revision": "7b7f97724c1a6a9673d85c700a33b80c"
  },
  {
    "url": "assets/js/9.57e810c3.js",
    "revision": "eb7d7ea70e0470f4b4aad6198c1a3ed9"
  },
  {
    "url": "assets/js/app.d65efec1.js",
    "revision": "6d65756e95e99c3d8c5a4de206eeff22"
  },
  {
    "url": "conclusion/index.html",
    "revision": "42666d96a8128aca04b04c5c9849ceb4"
  },
  {
    "url": "design/index.html",
    "revision": "8cd7f50ca2e9f63d2189321485cc5417"
  },
  {
    "url": "index.html",
    "revision": "f68a22aafbb358590d8734116f06b463"
  },
  {
    "url": "intro/index.html",
    "revision": "191673acbdf8ba798587060ab115a00b"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8eb95aaa25b64fd903519eff9e99b37a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "45fc6db36eb147c30295f945743e7c54"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eda74c9701bddeb6c4afc5be9f3a915d"
  },
  {
    "url": "software/index.html",
    "revision": "e9312ce3d395609bc772a8456bfc5c13"
  },
  {
    "url": "test/index.html",
    "revision": "1760296455046843796eab1c9a9ce099"
  },
  {
    "url": "use cases/index.html",
    "revision": "d6dd2d25e899f048abaea0f899acfd36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
