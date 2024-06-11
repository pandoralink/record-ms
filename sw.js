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
      './assets/ActionList-rOLrMrub.js',
      './assets/ActionNameTag-B_WdhIUY.js',
      './assets/AddCircleOutline-4xc8vPpK.js',
      './assets/Analyse-bWYhtBsO.js',
      './assets/ImportData-COYsT6Kn.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-C_MSYQZV.js',
      './assets/Layout-GgZs4At3.js',
      './assets/Note-CBz5k0P-.js',
      './assets/Note-fVdaVqUy.css',
      './assets/NoteDetail-BreQBZ9V.js',
      './assets/PageWrapper-ZuS5BVoc.js',
      './assets/RecentAction-D4uBG9vY.js',
      './assets/RecordTagAction-B4QTJ3gL.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagDetail-gpwH9Wkr.js',
      './assets/RecordTagDetailWithDay-Oatt6ys0.js',
      './assets/Setting-DGChAvLP.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-Cssc74nj.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-CzGNm7z8.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-CZ2pVT1A.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DgNQurHd.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-BRDruh_Y.js',
      './assets/context-BI_FLQri.js',
      './assets/hooks-Blvryfsl.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BJxLM1P_.js',
      './assets/index-BbY_-2bt.js',
      './assets/index-Bwb2xMPN.js',
      './assets/index-CDiaa9NV.js',
      './assets/index-CLDmDy33.js',
      './assets/index-CeVeRx03.js',
      './assets/index-DFfpRFjP.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DicWk52Z.js',
      './assets/index-DuiGkMBM.js',
      './assets/index-PkNkv-5U.css',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DZzpmNkf.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-CDK-GW4r.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-yzZtayxt.js',
      './assets/safe-area-C6SM7shC.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-Cq2vca16.js',
      './assets/space-DBMgFMux.css',
      './assets/space-NlUk3Y-q.js',
      './assets/spin-loading-Bz9t72MR.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-CQf1c9AE.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-CBVYYqX6.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area--eYpd4ke.js',
      './assets/text-area-6sDawAvv.css',
      './assets/traverse-react-node-4px2SHUX.js',
      './assets/use-isomorphic-update-layout-effect--TIxD74S.js',
      './assets/use-props-value-nDxuIj36.js',
      './assets/useInputHandleKeyDown-BpBLILLu.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-BX_XiuVL.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-DjbKOWzM.js',
      './assets/with-stop-propagation-Bt0CNOoz.js',
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
