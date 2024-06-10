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
      './assets/ActionList-v27JNIhH.js',
      './assets/ActionNameTag-zys8cDAs.js',
      './assets/AddCircleOutline-DtNNAb2Z.js',
      './assets/Analyse-BL2XGnED.js',
      './assets/ImportData-B3Z4m6s7.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-Dl5oKjKQ.js',
      './assets/Layout-CCGm3SLF.js',
      './assets/Note-DeQJiYkp.js',
      './assets/Note-fVdaVqUy.css',
      './assets/NoteDetail-C-AjMQhZ.js',
      './assets/PageWrapper-Di9h0tvK.js',
      './assets/RecentAction-Qj5Z844U.js',
      './assets/RecordTagAction-B8x8cVjQ.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagDetail-DAeQRHYY.js',
      './assets/RecordTagDetailWithDay-CWJaf_Y8.js',
      './assets/Setting-CHgGN_il.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-B4oK-xSl.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-BnVQPruM.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-DloahT0b.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DpaaX5bD.css',
      './assets/card-o0hLhSJg.js',
      './assets/config-provider-ClNQu-57.js',
      './assets/context-BltC6UDM.js',
      './assets/hooks-YXEHxMme.js',
      './assets/index-B4UGxPOW.js',
      './assets/index-BDxQhh6q.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BRx5sgc6.js',
      './assets/index-BvZ__38l.js',
      './assets/index-CMVxERhK.js',
      './assets/index-COwk1_7g.js',
      './assets/index-D5lDA2Z2.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-PkNkv-5U.css',
      './assets/index-kXkBLS8A.js',
      './assets/index-n9e96kxF.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-hV2H68hw.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-BllPegUf.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-ZeBH8eNv.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-wv_kZXuD.js',
      './assets/should-render-C9OUz-kT.js',
      './assets/space-BPjOIxEH.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-CQgek1q9.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-DVN-L70-.js',
      './assets/tag-CyztdLNc.css',
      './assets/tag-DIQnkqsD.js',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-CUQ4DGOH.js',
      './assets/traverse-react-node-CQEO3PMG.js',
      './assets/use-isomorphic-update-layout-effect-NT1QjfJe.js',
      './assets/use-props-value-CTciXfrJ.js',
      './assets/useInputHandleKeyDown-Ck4z5xoR.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-C9kWW5ul.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-B7uQ1QtS.js',
      './assets/with-stop-propagation-hPxRTu59.js',
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
