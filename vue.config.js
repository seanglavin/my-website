const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      'Content-Security-Policy': {
        'default-src': ['self'],
        'img-src': ['self', 'data:', '@/assets/images/']
      }
    }
  }
})
