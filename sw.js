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
      './assets/ActionList-CRC2IYn7.js',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionNameTag-FIX8isg6.js',
      './assets/AddCircleOutline-Bh1m41Y_.js',
      './assets/Analyse-BhfBizST.js',
      './assets/ImportData-BuR5g8e0.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-CnjYgIQW.js',
      './assets/Layout-Bw63DCYm.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-C5Qs4K3y.js',
      './assets/NoteDetail-CV9pzlvq.js',
      './assets/PageWrapper-hSYfH9Dt.js',
      './assets/RecentAction-CE5QzGRD.js',
      './assets/RecordTagAction-Cg11bmQf.js',
      './assets/RecordTagDetail-Bmk_r9YS.js',
      './assets/RecordTagDetailWithDay-BfDsp-Mk.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/Setting-FOm2RSUT.js',
      './assets/TagDetailPopover-85WdQr71.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-DrOgWxwA.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-BIhdR7Lp.css',
      './assets/Trend-CKyyh9yq.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-DenqAhi6.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-C0scqWR1.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-BPohsxVP.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-C3XxMxLT.js',
      './assets/context-CvGcWdEt.js',
      './assets/hooks-CDcXpyfB.js',
      './assets/index-B-AKXKOT.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BKYHviBL.js',
      './assets/index-Bhyw4NVz.css',
      './assets/index-Cl9jA2f5.js',
      './assets/index-ClQDLxvM.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DlGwl23E.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-g1DRo9VM.js',
      './assets/index-iYXtnasV.js',
      './assets/index-swgKdKc9.js',
      './assets/index-wziMPack.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-M0AVySy-.js',
      './assets/nav-bar-CN-jShyS.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-DtOvouu1.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-Yr5_OrrR.js',
      './assets/should-render-DhzTJ4TY.js',
      './assets/space-CO4GaFR4.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-CR4PDYey.css',
      './assets/spin-loading-DFI-ZVyh.js',
      './assets/swipe-action-BBjnjFZ1.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-BORL6-1o.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-SMQTHvjG.js',
      './assets/traverse-react-node-hon6V5dM.js',
      './assets/use-gesture-react.esm-DoQXfDlG.js',
      './assets/use-inner-visible-Dvli9FyR.js',
      './assets/use-isomorphic-update-layout-effect-BT0cFhW5.js',
      './assets/use-props-value-B6YOK46Q.js',
      './assets/useInputHandleKeyDown-piWpNX7l.js',
      './assets/utils-CSvAkENd.js',
      './assets/validate-DifivnA4.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-Cw5r2lmh.js',
      './assets/with-stop-propagation-ChvrdJ6D.js',
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
