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
      './assets/ActionList-a9eeJ6U7.js',
      './assets/ActionNameTag-CjOKM7n0.js',
      './assets/AddCircleOutline-CpObVdL3.js',
      './assets/Analyse-DExpgXvt.js',
      './assets/ImportData-D7VxuvjO.js',
      './assets/KVConfig-BoOmteQU.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/Layout-r7ScYGls.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-BIWiN0jR.js',
      './assets/NoteDetail-CfnnbLEl.js',
      './assets/PageWrapper-BFZ_DnIG.js',
      './assets/RecentAction-xDVxDK_G.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagAction-DSNt-QOn.js',
      './assets/RecordTagDetail-DuEi4EoK.js',
      './assets/RecordTagDetailWithDay-Cq7E8QqK.js',
      './assets/Setting-CQ5ciysM.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TagDetailPopover-vsYh2We5.js',
      './assets/TopLevelPageWrapper-C6ebKZa_.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-jwGrwFKt.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-BlVt5fmL.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DpaaX5bD.css',
      './assets/card-Dtug99dg.js',
      './assets/config-provider-9zUhGboj.js',
      './assets/context-jzoCB2od.js',
      './assets/hooks-CKH42jwf.js',
      './assets/index-A3j-_Inl.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BIOXoCKX.js',
      './assets/index-COzIfLzO.js',
      './assets/index-Cmr0jP2h.js',
      './assets/index-D4I31-U8.js',
      './assets/index-D4kv2pca.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-IJFVQ9mi.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-XeBS9Zic.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DO7Fr9N-.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/nav-bar-aa0E8ghH.js',
      './assets/react-spring-web.esm-scdsD_XJ.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-DFIVDvyz.js',
      './assets/should-render-CEgQl18f.js',
      './assets/space-D16IQv2O.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-DVbe9M64.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-B0ytrOSM.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-B-9MwI8l.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-VHqonbLW.js',
      './assets/traverse-react-node-DPBISBN5.js',
      './assets/use-isomorphic-update-layout-effect-CrWAHQoj.js',
      './assets/use-props-value-D7TWvYPJ.js',
      './assets/useInputHandleKeyDown-XNl4iqyD.js',
      './assets/utils-BIxnbL-6.js',
      './assets/validate-XLRsc4GV.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-B5MJFbQu.js',
      './assets/with-stop-propagation-C6_WT8nv.js',
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
