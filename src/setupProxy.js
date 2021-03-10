const { createProxyMiddleware } = require('http-proxy-middleware');
var cors = require('cors')

module.exports = app => {
  app.use(cors())
  app.use(
    "/kraken/*",
    createProxyMiddleware({
      target: "https://api.kraken.com",
      changeOrigin: true,
      pathRewrite: {
        "^/kraken": "/"
      }
    })
  );

  app.use(
    "/bitfinex/*",
    createProxyMiddleware({
      target: "https://api.bitfinex.com",
      changeOrigin: true,
      pathRewrite: {
        "^/bitfinex": "/"
      }
    })
  );

  app.use(
    "/binance/*",
    createProxyMiddleware({
      target: "https://api.binance.com",
      changeOrigin: true,
      pathRewrite: {
        "^/binance": "/"
      }
    })
  );

  app.use(
    "/huobi/*",
    createProxyMiddleware({
      target: "https://api.huobi.pro",
      changeOrigin: true,
      pathRewrite: {
        "^/huobi": "/"
      }
    })
  );
  app.listen(4000)
};
