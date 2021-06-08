module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/variables.scss";`,
      },
    },
  },
};
