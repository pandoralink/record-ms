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
      './assets/KVConfig-C_2afzLn.js',
      './assets/KVConfig-DTq3VY_M.css',
      './assets/Playground-BuCClF2H.css',
      './assets/Playground-D3ceuu_0.js',
      './assets/RecordTagDetail-Bhyw4NVz.css',
      './assets/RecordTagDetail-DbAi7qAr.js',
      './assets/RecordTagDetailWithDay-Bt3-GbqA.js',
      './assets/Setting-C9wSPhSJ.js',
      './assets/UnorderedListOutline-BYCG6Ls5.js',
      './assets/context-CekgD8bs.js',
      './assets/hooks-Bn1niXTp.css',
      './assets/hooks-DeKzXSe7.js',
      './assets/index-7NQgs7WJ.css',
      './assets/index-BcT6Mklb.js',
      './assets/index-C8yK53Bn.css',
      './assets/index-CUSS2Fzk.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dxe92Z1j.js',
      './assets/input-CJOxl2sT.js',
      './assets/input-D3JqAvVV.css',
      './assets/manifest-C6p-UaUZ.json',
      './assets/nav-bar-DO9IOQPV.js',
      './assets/nav-bar-lhGEncdw.css',
      './assets/record-DN4W3z8R.svg',
      './assets/safe-area-BhXu6_Yo.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/tag-Bkjs0jno.css',
      './assets/tag-CsZ_xSIi.js',
      './assets/traverse-react-node-CIE3SMdS.js',
      './assets/use-props-value-Ba7Q_rAS.js',
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
