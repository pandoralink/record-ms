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
      './assets/ActionList-c8N6ixnF.js',
      './assets/ActionNameTag-fAqYXiyP.js',
      './assets/AddCircleOutline-B65wrsY0.js',
      './assets/Analyse-Qr-mUkTH.js',
      './assets/ImportData-B2fyhCn3.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-C7xsD7ms.js',
      './assets/Layout-DgEdfvr9.js',
      './assets/Note-3Oqr657f.js',
      './assets/Note-B7XBrg9_.css',
      './assets/NoteDetail-CjysW_us.js',
      './assets/PageWrapper-Dmb1eLGU.js',
      './assets/RecentAction-CGYu7ySF.js',
      './assets/RecordTagAction-Bhyw4NVz.css',
      './assets/RecordTagAction-DV8cqjNO.js',
      './assets/RecordTagDetail-CPmYj-Ke.js',
      './assets/RecordTagDetailWithDay-D0yx58l7.js',
      './assets/Setting-CnrdskFK.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/TagDetailPopover-CKTPQvnv.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-Dc9SulqZ.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/button-Bpbz-6r1.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-C4QVFP6U.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-4QUlm3fk.js',
      './assets/context-BVKqA11r.js',
      './assets/hooks-B4H36dVC.js',
      './assets/index-4K8MCTj1.js',
      './assets/index-9nx2DlAH.js',
      './assets/index-B0dF9XAF.js',
      './assets/index-BG_PCg83.css',
      './assets/index-BYUl2Fjp.js',
      './assets/index-Bc2wvFYg.js',
      './assets/index-CMU-9nD-.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DfHYskjN.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-_7DM4Akm.js',
      './assets/index-_Q4PGU8H.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-BEDU8DIS.js',
      './assets/input-D3JqAvVV.css',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-7Wdt2NiX.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-4yA8vDld.js',
      './assets/safe-area-CdiIcGsQ.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/should-render-BiA09XbB.js',
      './assets/space-DBMgFMux.css',
      './assets/space-aOglY742.js',
      './assets/spin-loading-CsJBPB6Y.js',
      './assets/spin-loading-kXQ3cYui.css',
      './assets/swipe-action-BRMpERit.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/tag-CyztdLNc.css',
      './assets/tag-dbNOUaV2.js',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-Bq66VKv1.js',
      './assets/traverse-react-node-BpKKs04s.js',
      './assets/use-isomorphic-update-layout-effect-cv3wE5KP.js',
      './assets/use-props-value-DEiOoCBn.js',
      './assets/useInputHandleKeyDown-DpWn5ALs.js',
      './assets/utils-Tye74wO9.js',
      './assets/validate-D9IZnNEL.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-D4fAU74E.js',
      './assets/with-stop-propagation-DuYupDqp.js',
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
