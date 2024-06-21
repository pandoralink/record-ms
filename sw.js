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
      './assets/ActionList-OoCJ2W18.js',
      './assets/ActionNameTag-DImwDfF-.js',
      './assets/AddCircleOutline-DZdGa3T2.js',
      './assets/Analyse-BwOYTWcR.js',
      './assets/ImportData-Woo9uyiX.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-CKxRZeZL.js',
      './assets/Layout-C1tfpYP0.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-DMsfZsLw.js',
      './assets/NoteDetail-CyHqflke.js',
      './assets/PageWrapper-Dudcctrk.js',
      './assets/RecentAction-By9qw7ey.js',
      './assets/RecordTagAction-DftAwCo1.js',
      './assets/RecordTagDetail-CGSQzhz4.js',
      './assets/RecordTagDetailWithDay-DnVLUylX.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/Setting-FN4DVIrK.js',
      './assets/TagDetailPopover-CTsXFpCm.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-B_9vc43M.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-DuEmVBzk.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-DgWGWwnJ.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-DJ12UD5m.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-C6fHRdTv.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-Cb8MFuwX.js',
      './assets/context-C861iW53.js',
      './assets/hooks-BDd0Jgu-.js',
      './assets/index-BG_PCg83.css',
      './assets/index-Bbuxxg_v.js',
      './assets/index-Bhyw4NVz.css',
      './assets/index-BzfneoA9.js',
      './assets/index-CCgRy-No.js',
      './assets/index-CMuRu8Ly.js',
      './assets/index-CW2lH1zu.js',
      './assets/index-Cv4DLZ7G.js',
      './assets/index-D1QZq8cV.js',
      './assets/index-DMaug4gz.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-Dps1GsoO.js',
      './assets/index-PkNkv-5U.css',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DTX27LZm.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-CuwRpdNp.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-D8lu2Y0j.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-fZYJ_iXP.js',
      './assets/should-render-BHEuclEH.js',
      './assets/space-C0j3B_G-.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-BUEA2cwN.js',
      './assets/spin-loading-CR4PDYey.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-DXCpGThd.js',
      './assets/tag-BRtCVIXk.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-CjoUspz1.js',
      './assets/traverse-react-node-C0iF0Fzh.js',
      './assets/use-gesture-react.esm-ByEQHnZU.js',
      './assets/use-inner-visible-CVIP5rGv.js',
      './assets/use-isomorphic-update-layout-effect-BXp9hG6P.js',
      './assets/use-props-value-B20lLCbj.js',
      './assets/useInputHandleKeyDown-B5D8pYGI.js',
      './assets/utils-DqhwL_u_.js',
      './assets/validate-CAoW_kJw.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-CJz_oMvJ.js',
      './assets/with-stop-propagation-CDkAgc26.js',
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
