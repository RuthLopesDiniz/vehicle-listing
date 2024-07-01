const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/cars_by_brand.json',
    createProxyMiddleware({
      target: 'https://ruthlopesdiniz.github.io/car-by-brand/car-by-brand.json',
      changeOrigin: true,
    })
  );
  app.use(
    '/cars.json',
    createProxyMiddleware({
      target: 'https://wswork.com.br',
      changeOrigin: true,
    })
  );
};
