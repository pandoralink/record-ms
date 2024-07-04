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
      './assets/ActionList-CC81j9R2.js',
      './assets/ActionList-CSYnW-TP.css',
      './assets/ActionNameTag-DZVzRZa4.js',
      './assets/AddCircleOutline-CP59Zqhe.js',
      './assets/Analyse-BqNN_JuA.js',
      './assets/ImportData-D89hbsrw.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-CReTCu9e.js',
      './assets/Layout-C6qYGbSJ.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-CswBYOS4.js',
      './assets/NoteDetail-bTMQGLa2.js',
      './assets/PageWrapper-CamlHtV8.js',
      './assets/RecentAction-j2aGFgKf.js',
      './assets/RecordTagAction-D0N_L902.js',
      './assets/RecordTagDetail-tU7UWfqN.js',
      './assets/RecordTagDetailWithDay-B5i5x6xo.js',
      './assets/Setting-D26YXGnZ.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-BO1gUZgW.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-Fe-7K479.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-BIhdR7Lp.css',
      './assets/Trend-COSpJ21h.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-Bm1bJHZc.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-KzJBAVMH.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-DpaaX5bD.css',
      './assets/card-baXAEpy5.js',
      './assets/config-provider-CHdY5msv.js',
      './assets/context-CHFXciok.js',
      './assets/hooks-ld4a9x-g.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BSnmSG8-.js',
      './assets/index-Bd-V8bsQ.js',
      './assets/index-Bhyw4NVz.css',
      './assets/index-C-Y4SDDD.js',
      './assets/index-CHEA9oqw.js',
      './assets/index-C_UHGJlV.js',
      './assets/index-CjZyqMMv.js',
      './assets/index-DAsywVIn.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-Dw_mgCSK.js',
      './assets/index-JVOmVxDD.js',
      './assets/index-PkNkv-5U.css',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-0KkBGOlC.js',
      './assets/input-D3JqAvVV.css',
      './assets/nav-bar-B6I3cWZY.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-B9-Uweta.js',
      './assets/safe-area-CBXG4b09.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-pC6EtMPP.js',
      './assets/space-DBMgFMux.css',
      './assets/space-DZXRz-Pd.js',
      './assets/spin-loading-BErI0OSI.js',
      './assets/spin-loading-CR4PDYey.css',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-UHCNBsqT.js',
      './assets/tag-0bBjTb6U.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-DPoUfs7c.js',
      './assets/traverse-react-node-pLKbnNTF.js',
      './assets/use-gesture-react.esm-DX7HS86-.js',
      './assets/use-inner-visible-DND8bHfP.js',
      './assets/use-isomorphic-update-layout-effect-BmelbheG.js',
      './assets/use-props-value-Cy7HmYQB.js',
      './assets/useInputHandleKeyDown-8zIOh0RG.js',
      './assets/utils-bhuKeDjx.js',
      './assets/validate-BWrBp5BA.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-BmUU8plZ.js',
      './assets/with-stop-propagation-DAJ1rTaH.js',
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
