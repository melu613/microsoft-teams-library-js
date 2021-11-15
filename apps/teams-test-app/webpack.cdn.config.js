const path = require('path')
const commonConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "unbundle_cdn.js",
  },
  plugins: [
    new HtmlWebPackPlugin({ template: "./index_cdn.html", filename: "index.html", })
  ],
  externals:[
    {
      ["@Microsoft/teams-js"]:{
        root: "@Microsoft/teams-js"
      }
    }
  ]
});