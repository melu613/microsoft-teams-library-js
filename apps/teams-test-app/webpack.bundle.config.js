const path = require('path')
const commonConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./index.html", filename: "index.html", })
  ]
});