const path = require('path')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'shop-sheep',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    {src:'~plugins/svg-sprite-loader'},
    {src:'~/plugins/vue-flickity', ssr: false}
  ],
  css: [
    '~/assets/css/main.scss'
  ],
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
        });
        // Excludes /assets/svg from url-loader
        const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
        urlLoader.exclude = /(assets\/svg)/

        // Includes /assets/svg for svg-sprite-loader
        config.module.rules.push({
          test: /\.svg$/,
          include: [
            path.resolve(__dirname, 'assets/svg')
          ],
          use: 'svg-sprite-loader'
        })

        // Uncomment line below to view webpack rules
        // console.dir(config.module.rules)
      }
    }
  }
}
