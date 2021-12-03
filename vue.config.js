module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/olympicVisuals/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
