module.exports = {
  outputDir: "docs/",
  publicPath: process.env.NODE_ENV === "production" ? "/kare-pkg/" : "/",
  pwa: {
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    msTileColor: "#000",
    backgroundColor: "#000",
    themeColor: "#000",
  },
};
