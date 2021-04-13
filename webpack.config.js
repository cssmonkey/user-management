const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildPath = path.join(__dirname, "./dist");
const sourcePath = path.join(__dirname, "./src");
const publicPath = path.join(__dirname, "./public");

module.exports = () => ({
  entry: {
    app: `${sourcePath}/index.tsx`,
  },
  output: {
    path: buildPath,
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
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      api: path.resolve(sourcePath, "api/"),
      assets: path.resolve(sourcePath, "assets/"),
      components: path.resolve(sourcePath, "components/"),
      pages: path.resolve(sourcePath, "pages/"),
      state: path.resolve(sourcePath, "state/"),
      styles: path.resolve(sourcePath, "styles/"),
      utilities: path.resolve(sourcePath, "utilities/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.resolve(sourcePath, "assets/images"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/images/",
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["vendor", "app"],
      filename: "index.html",
      template: path.join(publicPath, "/index.html"),
    }),
  ],
});
