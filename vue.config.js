module.exports = {
  chainWebpack: (config) => {
    config.externals({
      BMap: "BMap",
    });
  },
};
