const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = () => {
  return merge(common(), {
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      compress: true,
      open: true,
      hot: true,
      overlay: true,
      port: 8082,
    },
    optimization: {
      minimize: false,
    },
  });
};
