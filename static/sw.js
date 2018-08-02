importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "master",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8195eebbc24851e37706.js",
    "revision": "77b0f31ef8e66f0118708ab326d4ee62"
  },
  {
    "url": "/_nuxt/layouts/default.8b71241a806b4a658afb.js",
    "revision": "ced48dc14c901f466932ff228e272049"
  },
  {
    "url": "/_nuxt/manifest.0a9bc55d1f596cbfe0f7.js",
    "revision": "784c1722cffcd386d4475dd56eb3a6a5"
  },
  {
    "url": "/_nuxt/pages/index.483d9e58ab87d303b154.js",
    "revision": "2e65c8aedb34fbf8727098eac4822049"
  },
  {
    "url": "/_nuxt/pages/login.fad26d49934049b83934.js",
    "revision": "04880bc8baeb4195e8c9e9b701035e43"
  },
  {
    "url": "/_nuxt/vendor.d3668abf8668933cad18.js",
    "revision": "f67c9eb8b7ad910cfcb496b210b4ddfb"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

