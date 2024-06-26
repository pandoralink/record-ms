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
      './assets/ActionList-CXQca2bT.js',
      './assets/ActionNameTag-BjEbDMkr.js',
      './assets/AddCircleOutline-DtfJBiMb.js',
      './assets/Analyse-HcJlx6Yz.js',
      './assets/ImportData-CjcGCm5H.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-C7q7HcNu.js',
      './assets/Layout-FrytuvFz.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-CRID0JRV.js',
      './assets/NoteDetail-Cv4fMmNb.js',
      './assets/PageWrapper-Brs62tZ7.js',
      './assets/RecentAction-CfIe2xa0.js',
      './assets/RecordTagAction-BL7L9Gxj.js',
      './assets/RecordTagDetail-BtcuZY8D.js',
      './assets/RecordTagDetailWithDay-BEEb84Le.js',
      './assets/Setting-BIV2kqNo.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-D6csXw8g.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-B5B6ZUoX.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-BIhdR7Lp.css',
      './assets/Trend-PVpN1or2.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-vzAF-P1m.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-B2lKSsD5.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-C1iDgBFb.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-BH9Ctfnx.js',
      './assets/context-CXQdin55.js',
      './assets/hooks-Dmco1N5-.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BXL4pM3i.js',
      './assets/index-Bhyw4NVz.css',
      './assets/index-BmVkM82f.js',
      './assets/index-CA4kOX3k.js',
      './assets/index-Cz8CGjl-.js',
      './assets/index-DRb3zoHU.js',
      './assets/index-DbYIuhMe.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-PkNkv-5U.css',
      './assets/index-X6Ta_Q3I.js',
      './assets/index-feYjewEd.js',
      './assets/index-fk_kab0v.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-RwnWO0nq.js',
      './assets/nav-bar-Cz_UsMU-.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-CfXJoAHb.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-saJTXD0U.js',
      './assets/should-render-CPLMT_oq.js',
      './assets/space-4AMyNcYk.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-BkdeI6-1.js',
      './assets/spin-loading-CR4PDYey.css',
      './assets/swipe-action-CTlLMKPH.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-Bq1fu24B.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-DinKg72a.js',
      './assets/traverse-react-node-CiuvZLGm.js',
      './assets/use-gesture-react.esm-BESh_HaA.js',
      './assets/use-inner-visible-KUGHSRSi.js',
      './assets/use-isomorphic-update-layout-effect-BdtGMYSy.js',
      './assets/use-props-value-Bw9tEvwj.js',
      './assets/useInputHandleKeyDown-COzXwxYe.js',
      './assets/utils-CJ4Oe9cU.js',
      './assets/validate-uhv0vmdf.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-C5w_0f2l.js',
      './assets/with-stop-propagation-B1VuCCTX.js',
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
