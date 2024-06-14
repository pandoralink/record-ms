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
      './assets/ActionList-D5JFoA7J.js',
      './assets/ActionNameTag-Dn8g6xzi.js',
      './assets/AddCircleOutline-CWBmcv9e.js',
      './assets/Analyse-BqEPAzH6.js',
      './assets/ImportData-CYV5pUxU.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-DBDi2gXF.js',
      './assets/Layout-CNYVC1gc.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-CxMDdZgs.js',
      './assets/NoteDetail-DRX10Kw0.js',
      './assets/PageWrapper-BJFmtzy-.js',
      './assets/RecentAction-BsAI-1nS.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagAction-uNe4Nxkd.js',
      './assets/RecordTagDetail-CAYoTWA5.js',
      './assets/RecordTagDetailWithDay-CZTYQJsg.js',
      './assets/Setting-Ci2QpuI1.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-BCzBFJj5.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/TopLevelPageWrapper-pOXRga7X.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-CB3-VnIz.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DpaaX5bD.css',
      './assets/card-rS_sHkB2.js',
      './assets/config-provider-DNYJvYag.js',
      './assets/context-B34N0x_F.js',
      './assets/hooks-Bp-wTHb8.js',
      './assets/index-BG_PCg83.css',
      './assets/index-CNKhnCPF.js',
      './assets/index-CVtLZUEC.js',
      './assets/index-D6gvIT4M.js',
      './assets/index-DKBI9-R4.js',
      './assets/index-DVM6bwG7.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-FPgPCHHY.js',
      './assets/index-GsDNaLDe.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-V8AquLdw.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DC1scQqr.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-BPTmy-_R.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-C9t_7hJR.js',
      './assets/safe-area-CiJtfmqA.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-Svd6ReJY.js',
      './assets/space-CJFN5qPC.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-CcL_BUTO.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-DY6Ru8IX.js',
      './assets/tag-CyztdLNc.css',
      './assets/tag-DRTBMOk8.js',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-D0rdaVZ6.js',
      './assets/traverse-react-node-CWoE8ntW.js',
      './assets/use-isomorphic-update-layout-effect-sRds7bQl.js',
      './assets/use-props-value-TbEKL7iY.js',
      './assets/useInputHandleKeyDown-DFSzWPdx.js',
      './assets/utils-gOL3OSJW.js',
      './assets/validate-CV1vJrMZ.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-Dt1Fs6gY.js',
      './assets/with-stop-propagation-D_JjBFjk.js',
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
