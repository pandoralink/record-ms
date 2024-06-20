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
      './assets/ActionList-Bzi2ZVgM.js',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionNameTag-9-OtAFzT.js',
      './assets/AddCircleOutline-DS0-xIcC.js',
      './assets/Analyse-YRJ8uJOG.js',
      './assets/ImportData-BoLryjid.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-DcoRpuh-.js',
      './assets/Layout-B16bu5rR.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-DGbCi8Gq.js',
      './assets/NoteDetail-5Ft0B7Jq.js',
      './assets/PageWrapper-sHECTM_0.js',
      './assets/RecentAction-C1aWMqH8.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagAction-Cg9wzG52.js',
      './assets/RecordTagDetail-Bq7PF0t6.js',
      './assets/RecordTagDetailWithDay-DqHXJc-p.js',
      './assets/Setting-DU8NVhLM.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TagDetailPopover-DgPjVnWv.js',
      './assets/TopLevelPageWrapper-CInnoxsL.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-4iV7PFI9.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-B8gvBKpH.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DpaaX5bD.css',
      './assets/card-rzb9sNFu.js',
      './assets/config-provider-C9siFg64.js',
      './assets/context-DjhNy9ty.js',
      './assets/hooks-CwQuJT_3.js',
      './assets/index-1JH-mXu5.js',
      './assets/index-8ix-qmp4.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BmQaYRps.js',
      './assets/index-CKXBQrc3.js',
      './assets/index-D8K7hOkL.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DxFVxXqT.js',
      './assets/index-DxMBbi7d.js',
      './assets/index-NfZAuT3U.js',
      './assets/index-PkNkv-5U.css',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-eRYVEZNw.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-CBiejamE.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-DViroDwM.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-DH1Yl4uS.js',
      './assets/should-render-BT6gCNXN.js',
      './assets/space-DBMgFMux.css',
      './assets/space-DcMtWs2W.js',
      './assets/spin-loading-B680AQ40.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-DqFkEYP0.js',
      './assets/tag-2fiTULcf.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-DJJJ2cJs.js',
      './assets/traverse-react-node-3IuSFL0O.js',
      './assets/use-isomorphic-update-layout-effect-D7nybEyK.js',
      './assets/use-props-value-BKg8KQwm.js',
      './assets/useInputHandleKeyDown-m4QN1Fhk.js',
      './assets/utils-Z58-KFMQ.js',
      './assets/validate-W1aCWjbC.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-DOko7Moj.js',
      './assets/with-stop-propagation-DZEd3B_-.js',
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
