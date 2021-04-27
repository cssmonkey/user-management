const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common.js");

const buildPath = path.join(__dirname, "./dist");

module.exports = () => {
  return merge(common(), {
    mode: "production",
    output: {
      path: buildPath,
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new BundleAnalyzerPlugin({
        defaultSizes: "gzip",
        analyzerMode: "static",
        openAnalyzer: true,
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /app\.(sa|sc|c)ss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "resolve-url-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  });
};
