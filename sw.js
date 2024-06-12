const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use the preloaded response, if it's there
  // NOTE: Chrome throws errors regarding preloadResponse, see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
  // https://github.com/mdn/dom-examples/issues/145
  // To avoid those errors, remove or comment out this block of preloadResponse
  // code along with enableNavigationPreload() and the "activate" listener.
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request.clone());
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      './',
      './index.html',
      './register.js',
      './pwacompat.min.js',
      './manifest.json',
      './images/record.svg',
      './images/record-120x120.png',
      './images/record-512x512.png',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionList-Dv-u069L.js',
      './assets/ActionNameTag-C1ex4Hd_.js',
      './assets/AddCircleOutline-CqveLQ5W.js',
      './assets/Analyse-Dw-63v4J.js',
      './assets/ImportData-CNOeSR4G.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-CKdMKl4v.js',
      './assets/Layout-Dg5YIVgq.js',
      './assets/Note-BjtHz9c7.js',
      './assets/Note-fVdaVqUy.css',
      './assets/NoteDetail-DAn8dkEP.js',
      './assets/PageWrapper-ByCUGxa2.js',
      './assets/RecentAction-CoGUn89k.js',
      './assets/RecordTagAction-B_981TZ2.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagDetail-rm68zXhR.js',
      './assets/RecordTagDetailWithDay-BNF5Ii7L.js',
      './assets/Setting-C71AsGOR.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-CBZqZZBC.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-Dt43drqC.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-C0G4TGoo.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DgHcQCAT.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-losqsygp.js',
      './assets/context-D8naPyMO.js',
      './assets/hooks--Pc1pnNV.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BaVLz-Hu.js',
      './assets/index-C3KNqhou.js',
      './assets/index-CAYIEzTo.js',
      './assets/index-CZtjTJXi.js',
      './assets/index-D0XnXfhO.js',
      './assets/index-DDolLPqQ.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DmSSIiMP.js',
      './assets/index-DqqhZj57.js',
      './assets/index-I1TBVTce.js',
      './assets/index-PkNkv-5U.css',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-Bkz1VtMa.js',
      './assets/input-D3JqAvVV.css',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-GNBDxfnF.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-Cg9vpMj8.js',
      './assets/safe-area-CMdqEbJ9.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-UlZjmhUK.js',
      './assets/space-DBMgFMux.css',
      './assets/space-DBaVenS6.js',
      './assets/spin-loading-DleM1GNT.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-CK2ilZ_0.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-7m1vM8Vu.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-BaMqQJne.js',
      './assets/traverse-react-node-BNTNqSqk.js',
      './assets/use-isomorphic-update-layout-effect-X4j7NK_3.js',
      './assets/use-props-value-w2f_SeNG.js',
      './assets/useInputHandleKeyDown-bRMDexQf.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-Uh6WP5mn.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-DVrlrL9p.js',
      './assets/with-stop-propagation-B3B-f0PH.js',
    ])
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: './index.html',
    })
  );
});
