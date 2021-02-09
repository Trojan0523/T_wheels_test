const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        console.log(options);
        return options
      })
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths:[path.join(__dirname, 'src')]
      }
    }
  }
}
