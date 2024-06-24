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
      './assets/ActionList-Dq48eZB7.js',
      './assets/ActionNameTag-brRFyykn.js',
      './assets/AddCircleOutline-CeFltVTB.js',
      './assets/Analyse-Cwbm1KV_.js',
      './assets/ImportData-WOfl2ygT.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-DESzVbzv.js',
      './assets/Layout-BPDmIE14.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-BFd4pnhD.js',
      './assets/NoteDetail-C8hSsdfW.js',
      './assets/PageWrapper-ChAZAGKn.js',
      './assets/RecentAction-fEt4PZmv.js',
      './assets/RecordTagAction-0RhZaOPW.js',
      './assets/RecordTagDetail-AP5nd2bD.js',
      './assets/RecordTagDetailWithDay-3Vlfg8EQ.js',
      './assets/Setting-CsbINTQO.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-BaZ4-7R8.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-CxrmdZES.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-BIhdR7Lp.css',
      './assets/Trend-CF4isTrf.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-CEAZ5fVm.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-CaU6wsAr.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-Bm9Xbvdt.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-CAX_eO-j.js',
      './assets/context-C4UcBI1T.js',
      './assets/hooks-BriNMusD.js',
      './assets/index-BAp2uJNA.js',
      './assets/index-BC894p8l.js',
      './assets/index-BG_PCg83.css',
      './assets/index-Bhyw4NVz.css',
      './assets/index-CEg9wJF7.js',
      './assets/index-CauQB7WX.js',
      './assets/index-CiQ1tKrA.js',
      './assets/index-DVihzlDG.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-GB9J5_l6.js',
      './assets/index-HlrASdo5.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-lMu87Tbl.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-Bz-cAUuc.js',
      './assets/input-D3JqAvVV.css',
      './assets/nav-bar-DfpX-dUZ.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-CdXBS4Y0.js',
      './assets/safe-area-BWYm8GsI.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-CXgSacTY.js',
      './assets/space-DBMgFMux.css',
      './assets/space-DucTn_zh.js',
      './assets/spin-loading-CR4PDYey.css',
      './assets/spin-loading-DbpfZDyd.js',
      './assets/swipe-action-CsbDoMDv.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-C_JUbPtf.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-DnkCcbdz.js',
      './assets/traverse-react-node-CtwG6Aca.js',
      './assets/use-gesture-react.esm-B8ByJONC.js',
      './assets/use-inner-visible-B7r0J0hM.js',
      './assets/use-isomorphic-update-layout-effect-ToboUmWq.js',
      './assets/use-props-value-CHhyxfC0.js',
      './assets/useInputHandleKeyDown-DtK2Twkm.js',
      './assets/utils-Boy3u2nq.js',
      './assets/validate-D_oLSicM.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-CMBK7XXi.js',
      './assets/with-stop-propagation-D-0Q3mwI.js',
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
