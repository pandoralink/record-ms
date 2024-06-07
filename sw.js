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
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionList-CtQaVzTK.js',
      './assets/Analyse-yM3Ni0Ly.js',
      './assets/KVConfig-CaaHUSzX.js',
      './assets/KVConfig-DTq3VY_M.css',
      './assets/Layout-B42STNAG.js',
      './assets/RecordTagDetail-Bhyw4NVz.css',
      './assets/RecordTagDetail-DnPxGWEF.js',
      './assets/RecordTagDetailWithDay-Bfua16Qs.js',
      './assets/Setting-BYOKKdvQ.js',
      './assets/TopLevelPageWrapper-Bh5Xsinj.css',
      './assets/TopLevelPageWrapper-CdcxW7jb.js',
      './assets/UnorderedListOutline-Bt8V5tlk.js',
      './assets/context-Bd8U8-Yf.js',
      './assets/hooks-Bj8T5oJ7.css',
      './assets/hooks-DwCvS2xN.js',
      './assets/index-2_4n4X94.js',
      './assets/index-7NQgs7WJ.css',
      './assets/index-BvdF-Vz4.js',
      './assets/index-By7UgRYt.js',
      './assets/index-C8yK53Bn.css',
      './assets/index-CMre1LC4.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-DeH0d04o.js',
      './assets/index-DePguv2P.css',
      './assets/input-D3JqAvVV.css',
      './assets/input-DurSP33n.js',
      './assets/manifest-C6p-UaUZ.json',
      './assets/nav-bar-A3hYDKde.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/record-BuzhZgR7.svg',
      './assets/safe-area-BzdNV_Ox.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-kgLlgV8Z.js',
      './assets/tag-Bkjs0jno.css',
      './assets/tag-D0MbBOvs.js',
      './assets/traverse-react-node-CuGhr7eF.js',
      './assets/use-props-value-CYLTqXE_.js',
      './assets/validate-Bt6ATdnj.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-CBsXvwG_.js',
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
