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
      './assets/ActionList-z22UIalh.js',
      './assets/ActionNameTag-DyXNN3TJ.js',
      './assets/AddCircleOutline-DPvp7NFb.js',
      './assets/Analyse-CZT94pGx.js',
      './assets/ImportData-6sDawAvv.css',
      './assets/ImportData-Di8j4NCl.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-C0yS8D5d.js',
      './assets/Layout-BNrKl1uT.js',
      './assets/PageWrapper-ICW5BMRZ.js',
      './assets/RecentAction-DGq6Qo7t.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagAction-ZpYnI4Q8.js',
      './assets/RecordTagDetail-C0HFqQkB.js',
      './assets/RecordTagDetailWithDay-Ch6YrkcS.js',
      './assets/Setting-B1czS2EI.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-CRVTaHys.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/TopLevelPageWrapper-vtFcrDVh.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-Cptp1Tob.js',
      './assets/button-Q-9qeNXg.css',
      './assets/config-provider-Cd7dtHSx.js',
      './assets/context-dufOEGft.js',
      './assets/hooks-BVtRc5Rh.js',
      './assets/index-B-h9tZT-.js',
      './assets/index-BA_8tFZk.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BWFb_LIj.js',
      './assets/index-C-VN-3VR.js',
      './assets/index-C5Px5MMD.js',
      './assets/index-CjHRCLDE.js',
      './assets/index-DWZO_aox.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-DePguv2P.css',
      './assets/index-PkNkv-5U.css',
      './assets/index-QdcY_eOe.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DgJuGewt.js',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-CQxQ6Wnm.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-DlOAiF7-.js',
      './assets/space-B_AyuJ0i.css',
      './assets/space-DQgV_eDf.js',
      './assets/spin-loading-DE62ba-c.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-BzdaZCrm.js',
      './assets/swipe-action-C3xxnQv9.css',
      './assets/tag-B-33zLSC.js',
      './assets/tag-CyztdLNc.css',
      './assets/traverse-react-node-CdKWytY8.js',
      './assets/use-props-value-DVZ1gBdt.js',
      './assets/useInputHandleKeyDown-B1hVRrhB.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-CBirxxAs.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-BBr4ZePx.js',
      './assets/with-stop-propagation-BOltXnzC.js',
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
