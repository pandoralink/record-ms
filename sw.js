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
      './assets/ActionList-r9ZsTY7B.js',
      './assets/ActionNameTag--PDRQ_8O.js',
      './assets/AddCircleOutline-g9AUQvlM.js',
      './assets/Analyse-C0VtWqaO.js',
      './assets/ImportData-6sDawAvv.css',
      './assets/ImportData-k3CQ0vWR.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-COkALham.js',
      './assets/Layout-DbsmfP3R.js',
      './assets/RecordTagDetail-Bhyw4NVz.css',
      './assets/RecordTagDetail-CH2Lp4d1.js',
      './assets/RecordTagDetailWithDay-QPeX0-_5.js',
      './assets/Setting-BG2lePrW.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TagDetailPopover-DksDVLBe.js',
      './assets/TopLevelPageWrapper-B5ftdmUS.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-Dg1Z9WYR.js',
      './assets/button-Q-9qeNXg.css',
      './assets/config-provider-CRf3K6HM.js',
      './assets/context-CETh_fuU.js',
      './assets/hooks-BDltvQnO.js',
      './assets/index-BG_PCg83.css',
      './assets/index-CBSXRf_a.js',
      './assets/index-CD25rNzz.js',
      './assets/index-Cn27oSGc.js',
      './assets/index-Cz3-AyHe.js',
      './assets/index-D0ZaYvgJ.js',
      './assets/index-DZVwJEoC.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-DePguv2P.css',
      './assets/index-DssXL9G_.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-s0k89cgH.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DWWnQuis.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-DBMm_pxg.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/safe-area-BeZQWdzk.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/space-B_AyuJ0i.css',
      './assets/space-u_dLV2IY.js',
      './assets/spin-loading-dZih0sat.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-BsWK6cZ2.js',
      './assets/swipe-action-C3xxnQv9.css',
      './assets/tag-BqbfwXoS.js',
      './assets/tag-CyztdLNc.css',
      './assets/traverse-react-node-DQN5s-2r.js',
      './assets/use-props-value-DeCXLii1.js',
      './assets/useInputHandleKeyDown-BqZQUFIB.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-DFCfhizZ.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-c_1x5czA.js',
      './assets/with-stop-propagation-C_GOhrKq.js',
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
