/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-5b010381'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "../index.html",
    "revision": "ba6ab75157488d8a9e6fe5efd633f009"
  }, {
    "url": "../package-lock.json",
    "revision": "3e07af90db7dd01cf4c8c49b2f23b32b"
  }, {
    "url": "../package.json",
    "revision": "7868a735f706f0d60ddc0a9a4ecb4c03"
  }, {
    "url": "../public/icons/apple-touch-icon-180x180.png",
    "revision": "0e0e99ceac72c79f2749bf01cc008d3b"
  }, {
    "url": "../public/icons/favicon.ico",
    "revision": "beffff4a67cb0031a944768c6894dbb9"
  }, {
    "url": "../public/icons/favicon.svg",
    "revision": "190512be7842d4c43a36d92e281cfbca"
  }, {
    "url": "../public/icons/maskable-icon-512x512.png",
    "revision": "5d28d8a6b1c8dfd4a9d3660d3500a35a"
  }, {
    "url": "../public/icons/pwa-192x192.png",
    "revision": "108a08daa637574fde1d540bb46d052a"
  }, {
    "url": "../public/icons/pwa-512x512.png",
    "revision": "12873981210e23afe7285866a110dc14"
  }, {
    "url": "../public/icons/pwa-64x64.png",
    "revision": "79c6a66b27170e96b9060022ce836dca"
  }, {
    "url": "../public/screenshots/Screenshot_1.png",
    "revision": "861387f3cfe357d539bc67c1d7b6d483"
  }, {
    "url": "../tsconfig.json",
    "revision": "ea80a7059401754efa58e8e0a2984d38"
  }, {
    "url": "index.html",
    "revision": "0.2h68sh6f6ug"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    allowlist: [/^\/$/]
  }));
  workbox.registerRoute(({
    url
  }) => {
    console.log(url);
    return true;
  }, new workbox.NetworkFirst({
    "cacheName": "vite_cache",
    plugins: [new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
