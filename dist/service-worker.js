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
    "url": "404.html",
    "revision": "77d24e37445bf49c053aa1ab003ba969"
  },
  {
    "url": "assets/css/0.styles.bb9822f0.css",
    "revision": "717475c2e869c7356b880222583b8aac"
  },
  {
    "url": "assets/img/1653118922923.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.c01f3487.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.c11aa82a.js",
    "revision": "dc37edcddd78723e5e8852afd8badb13"
  },
  {
    "url": "assets/js/12.15c3ffb4.js",
    "revision": "88b41cdeb0e5cc0f4684aa9c21c500ff"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.65fccb01.js",
    "revision": "a70ab1d3b6f8b1f3098fdd9a6b4a9937"
  },
  {
    "url": "assets/js/16.153b0256.js",
    "revision": "a38a957fae1cba7a30e2807f5ffc4aa2"
  },
  {
    "url": "assets/js/17.81826f14.js",
    "revision": "3ccb10a92edd069925666d9133873238"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.b27cb6b3.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.932b4e63.js",
    "revision": "d2a0842fd33bb86abef9e31bb8e29134"
  },
  {
    "url": "assets/js/6.b57976fc.js",
    "revision": "2a040f25d65412cf0e0ff391108c9896"
  },
  {
    "url": "assets/js/7.552da921.js",
    "revision": "17139daae679134f101d42a312ca4ee8"
  },
  {
    "url": "assets/js/8.c2467590.js",
    "revision": "423dc987dc2dfe89a5df9dcbef05cfaf"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.08786fb0.js",
    "revision": "74bbd6f7edf43cf8b6c9514ff4b2a6dc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "871986a66fa1c6059427d7a808db9a0a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "796fb67862a85e0432ab324fc33ef194"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3384c261f3a3d8d21a04bfdd3c4d8217"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f8fb8aad0e89a581ff2801709db38670"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "01ea139031f960ca8373fa4e0dcd7711"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "766e133375b1773d480e1f16bdd3b029"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "65fd0b98362ef20965e496af56381b42"
  },
  {
    "url": "js/custom.js",
    "revision": "523316fb78512b885f05842fbbe24239"
  },
  {
    "url": "tag/index.html",
    "revision": "f74244f5ab666d54627e99cf37eb476a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "56b351fa3b7dacbc5d2fc48b3498028c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4f6f1a40c71f70cad5d939da619fa13a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5cf9966b197b3b53d757ce06a9cda262"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dd73bc59920ee020e04bfdbc7acedfd3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3f2cca69d94aaf44fe610b70122dc529"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "37e4e9e15abe6a5b94f4831d9ec498c4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c87ead91f18a01bbb9ee6faf170e34b2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9c5482c499b017bca24415e93530d955"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7053f598ec5575322aa633401d81fbf4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8d0545c8ab1ff6c78f713e98fdb1d7b9"
  },
  {
    "url": "timeline/index.html",
    "revision": "8d09338de07c491b33770825d5cf364b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d3b706b14106a7744e9bf7253bef54d2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "77b21b898262fcbdf57c7cdcc570e95e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "96d4e0e181c5d649877fa232464d5dbf"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d27d90a8073b2102a043a41ceb8e0750"
  },
  {
    "url": "生活分享/life.html",
    "revision": "423a0f9688e26c57b0938792108b511f"
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
