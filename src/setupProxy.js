// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://api.cnubot.co.kr:3000/",
      pathRewrite: { "^/api": "" },
      changeOrigin: true
    })
  );
};
