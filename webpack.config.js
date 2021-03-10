const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { PORT } = require("./config");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./public"),
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },

      // // addition - add source-map support
      // { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        PORT: JSON.stringify(PORT),
      },
    }),
  ],
  devServer: {
    index: "", // specify to enable root proxying
    proxy: {
      context: () => true,
      target: `http://localhost:${PORT}`,
    },
  },
  // // addition - add source-map support
  // devtool: "source-map"
};
