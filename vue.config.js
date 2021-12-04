module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog-front-end/'
    : '/',
  chainWebpack: (config) => {
    config.externals({
      BMap: "BMap",
    });
  },
};
