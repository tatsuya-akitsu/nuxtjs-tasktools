module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'master',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/__/firebase/5.3.0/firebase-app.js' },
      { src: '/__/firebase/5.3.0/firebase-auth.js' },
      { src: '/__/firebase/5.3.0/firebase-database.js' },
      { src: '/__/firebase/5.3.0/firebase-messaging.js' },
      { src: '/__/firebase/5.3.0/firebase-storage.js' },
      { src: '/__/firebase/init.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'public'
  },
  modules: [
    ['@nuxtjs/pwa', { icon: false }]
  ],
  manifest: {
    name: 'master',
    lang: 'ja'
  }
}

