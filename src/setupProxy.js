const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://tingapi.ting.baidu.com',
      pathRewrite: {
       '^/api': ''
      },
      changeOrigin: true
    })
  )
}
