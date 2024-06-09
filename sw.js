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
      './assets/ActionList-B4BFwZGx.js',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionNameTag-GS642QLh.js',
      './assets/Analyse-B9jAEkAl.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-CVRRRpq7.js',
      './assets/Layout-D5EUT1Cb.js',
      './assets/RecordTagDetail-Bhyw4NVz.css',
      './assets/RecordTagDetail-TCBF_kSE.js',
      './assets/RecordTagDetailWithDay-DzjjMVyY.js',
      './assets/Setting-Dm8Btlat.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover--VNIj4XK.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-DfWvINaZ.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/context-BaHvDdrU.js',
      './assets/hooks-8Q8WMmQb.js',
      './assets/hooks-BUr4zU-O.css',
      './assets/index-B05QYugb.js',
      './assets/index-B3O_23_Y.js',
      './assets/index-BHmEDAxf.js',
      './assets/index-BkH-wWDG.js',
      './assets/index-CMXUwmkd.js',
      './assets/index-CksKQnVe.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-DePguv2P.css',
      './assets/index-DkBUNh_o.css',
      './assets/index-DmPQfkKg.js',
      './assets/index-PkNkv-5U.css',
      './assets/input-D3JqAvVV.css',
      './assets/input-DFlBXtPc.js',
      './assets/nav-bar-DOGyKCBy.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/safe-area-B5YL0QKI.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/space-B_AyuJ0i.css',
      './assets/space-BaVPEU-0.js',
      './assets/swipe-action-CEmoGwaC.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-Cxglr5B6.js',
      './assets/tag-CyztdLNc.css',
      './assets/traverse-react-node-vEjW4YdS.js',
      './assets/use-props-value-2-xJT2E-.css',
      './assets/use-props-value-CerFI1Of.js',
      './assets/utils-UBJTGUc6.js',
      './assets/validate-BUmBjyvd.js',
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
