const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog-front-end/'
    : '/',
  chainWebpack: (config) => {
    config.externals({
      BMap: "BMap",
    });


  },
  productionSourceMap:false,
  configureWebpack: (config) => {
    const plugins = [];
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path][base].gz",
          algorithm: "gzip",
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
};
