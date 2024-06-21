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
      './assets/ActionList-C2-O0H9Y.js',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionNameTag-BX91OMel.js',
      './assets/AddCircleOutline-CvoS_bmd.js',
      './assets/Analyse-Bad6O2KL.js',
      './assets/ImportData-BZfOJlOy.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-DvPOY-_T.js',
      './assets/Layout-CpkRpzIt.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-CvRCK2N8.js',
      './assets/NoteDetail-DRg4aesZ.js',
      './assets/PageWrapper-g2cQCT9d.js',
      './assets/RecentAction-C0C_YTlX.js',
      './assets/RecordTagAction-BgNt22K1.js',
      './assets/RecordTagDetail-DhxhsRi-.js',
      './assets/RecordTagDetailWithDay-B6mt13kw.js',
      './assets/Setting-DWB3wreB.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-CSLPI6ly.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-CvmTDl-d.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-UezJGbc8.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-BxgTN84-.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-BxmpXF88.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-D4bXHVLo.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-Hp9lD7BV.js',
      './assets/context-BShhV7xA.js',
      './assets/hooks-CkE1hek2.js',
      './assets/index-B6RiNrcJ.js',
      './assets/index-BG_PCg83.css',
      './assets/index-Bhyw4NVz.css',
      './assets/index-BkVdFxep.js',
      './assets/index-CFYCqyUr.js',
      './assets/index-CYwTbs-U.js',
      './assets/index-DChdovOB.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-HCvccXJd.js',
      './assets/index-J4UqK0fD.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-SnZfa4xG.js',
      './assets/index-iTclMbfn.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-CPFAPNY0.js',
      './assets/input-D3JqAvVV.css',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-Bh-Mf_Fk.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-Bjul5M3s.js',
      './assets/safe-area-BTONa-yo.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-CjYedyGu.js',
      './assets/space-DBMgFMux.css',
      './assets/space-EAu7MzPp.js',
      './assets/spin-loading-CR4PDYey.css',
      './assets/spin-loading-CTIMbzHY.js',
      './assets/swipe-action-D0xImOeg.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-Cw3rcLn8.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-DU4xProG.js',
      './assets/traverse-react-node-6UJcyPK1.js',
      './assets/use-gesture-react.esm-DpjmtxuA.js',
      './assets/use-inner-visible-BN8cTlBH.js',
      './assets/use-isomorphic-update-layout-effect-Bl-cMA07.js',
      './assets/use-props-value-rWucUt4T.js',
      './assets/useInputHandleKeyDown-CKb8MmxN.js',
      './assets/utils-DcxbFaIa.js',
      './assets/validate-Cylu8si5.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-DGmDvMXX.js',
      './assets/with-stop-propagation-CXw7kpBF.js',
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
