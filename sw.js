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
      './assets/ActionList-Co_BSZi2.js',
      './assets/ActionNameTag-BXnHYUwm.js',
      './assets/AddCircleOutline-BJfAyBHn.js',
      './assets/Analyse-BfDc6Fad.js',
      './assets/ImportData-DQRy2FOb.js',
      './assets/KVConfig-Bpu00hbH.css',
      './assets/KVConfig-Dh2oKfUO.js',
      './assets/Layout-BHhPOHWl.js',
      './assets/Note-B7XBrg9_.css',
      './assets/Note-D1ShTlaM.js',
      './assets/NoteDetail-B4FZQ10t.js',
      './assets/PageWrapper-DLNfy4Mu.js',
      './assets/RecentAction-DgikV0l1.js',
      './assets/RecordTagAction-CrTop8FE.js',
      './assets/RecordTagDetail-bB9rsDFH.js',
      './assets/RecordTagDetailWithDay-Xom8vD8v.js',
      './assets/Setting-DsEN0HmC.css',
      './assets/Setting-lkYESjQR.js',
      './assets/TagDetailPopover-CEXWS8Mw.js',
      './assets/TagDetailPopover-DSnbI9by.css',
      './assets/TopLevelPageWrapper-86gZ1Jp4.js',
      './assets/TopLevelPageWrapper-YmVXFSHF.css',
      './assets/Trend-CUqX-tF6.js',
      './assets/attach-properties-to-component-CxYBDbn1.js',
      './assets/auto-center-BRr3jtx0.css',
      './assets/auto-center-BdEFYAYf.js',
      './assets/bound-sRU-RDN8.js',
      './assets/button-B7J9mGER.js',
      './assets/button-Q-9qeNXg.css',
      './assets/card-CE3bGbOm.js',
      './assets/card-DpaaX5bD.css',
      './assets/config-provider-D7K_J-AB.js',
      './assets/context-P-azJuBo.js',
      './assets/hooks-DUOfpEX3.js',
      './assets/index-BG_PCg83.css',
      './assets/index-Bhyw4NVz.css',
      './assets/index-CLK3fMnF.js',
      './assets/index-CaUIdpB1.js',
      './assets/index-Cc-olWxa.js',
      './assets/index-DUwZExDh.js',
      './assets/index-Dbvm5pCx.css',
      './assets/index-Dd9gt8jN.css',
      './assets/index-DePguv2P.css',
      './assets/index-DkIefgPY.js',
      './assets/index-DklZIr0F.js',
      './assets/index-PkNkv-5U.css',
      './assets/index-UpIFfI2l.js',
      './assets/index-W9y90LRW.js',
      './assets/index-pLbCakWN.js',
      './assets/index.esm-Cg_c7sd2.js',
      './assets/input-COfl-4uF.js',
      './assets/input-D3JqAvVV.css',
      './assets/isBrowser-CU3-RGUT.js',
      './assets/nav-bar-CcJdq5Rk.js',
      './assets/nav-bar-YIzhDyyQ.css',
      './assets/react-spring-web.esm-Cqvp7RIO.js',
      './assets/safe-area-CrXnm0Cl.css',
      './assets/safe-area-DIa5oMkR.js',
      './assets/should-render-Ds2LXrtP.js',
      './assets/space-BWq8K4ts.js',
      './assets/space-DBMgFMux.css',
      './assets/spin-loading-CR4PDYey.css',
      './assets/spin-loading-o5f0fPj1.js',
      './assets/swipe-action-DJ93EqDc.css',
      './assets/swipe-action-tPpaBCQD.js',
      './assets/tag-0h8CtaHd.js',
      './assets/tag-CyztdLNc.css',
      './assets/text-area-6sDawAvv.css',
      './assets/text-area-B1gp0QUP.js',
      './assets/traverse-react-node-CYABaCTU.js',
      './assets/use-gesture-react.esm-of4kvy0g.js',
      './assets/use-inner-visible-ch0hteAa.js',
      './assets/use-isomorphic-update-layout-effect-ueGEfRry.js',
      './assets/use-props-value-CCwjlj-J.js',
      './assets/useInputHandleKeyDown-mGdPDvoN.js',
      './assets/utils-DOvJS07M.js',
      './assets/validate-DpS4ljC6.js',
      './assets/with-default-props-2-xJT2E-.css',
      './assets/with-default-props-BZQsUyOg.js',
      './assets/with-stop-propagation-ByJRqfip.js',
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
