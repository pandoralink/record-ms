const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  for (const resource of resources) {
    try {
      await cache.add(resource);
    } catch (err) {
      console.error(`Failed to cache resource: ${resource}`, err);
    }
  }
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
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionList-DjvNSERe.js',
      './assets/ActionNameTag-CUcQ-fDk.js',
      './assets/Analyse-PVasxi-P.js',
      './assets/KVConfig-DTq3VY_M.css',
      './assets/KVConfig-DvfB6n00.js',
      './assets/Layout-BG6vX4fX.js',
      './assets/RecordTagDetail-BdvZS9qe.js',
      './assets/RecordTagDetail-Bhyw4NVz.css',
      './assets/RecordTagDetailWithDay-BJPRLNjV.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/Setting-MtpCIMpv.js',
      './assets/TopLevelPageWrapper-CEpQe00p.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/context-C9UckKB9.js',
      './assets/hooks-BUr4zU-O.css',
      './assets/hooks-CGD0cvX5.js',
      './assets/index-CChOZ6L2.js',
      './assets/index-CShAKJgO.js',
      './assets/index-C_OXVGSL.js',
      './assets/index-DE9JW7L8.js',
      './assets/index-DMGlskFF.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-DePguv2P.css',
      './assets/index-DkBUNh_o.css',
      './assets/index-Dp9DsjWu.js',
      './assets/input-D3JqAvVV.css',
      './assets/input-DqOP86Ju.js',
      './assets/manifest-C6p-UaUZ.json',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/nav-bar-pkrgLCdM.js',
      './assets/record-BuzhZgR7.svg',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-sQA8WHwm.js',
      './assets/space-B_AyuJ0i.css',
      './assets/space-dBnVsSF8.js',
      './assets/swipe-action-Cjsh_ULH.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-C1v5LHLC.js',
      './assets/tag-CyztdLNc.css',
      './assets/traverse-react-node-C6Drq389.js',
      './assets/use-props-value-Bal7tDYD.js',
      './assets/utils-D5_TjxPy.js',
      './assets/validate-gfvL6HFD.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-ZNhL5bow.js',
    ])
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: './assets/index-DE9JW7L8.js',
    })
  );
});
