module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
        }
      })
  },
}
