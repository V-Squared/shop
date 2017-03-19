var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./_javascript/app/app.module.ts",

  output: {
    publicPath: "/",
    path: path.join(__dirname,"lib"),
    filename: "app.js"
  },

  externals: {
    "angular-material": "ngMaterial",
    "jquery": "jQuery",
    "angular": "angular",
    "angular-sanitize": "ngSanitize",
    "angular-animate": "ngAnimate",
    "angular-aria": "ngAria"
  },

  // source map
  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.ts$/,
        // Exclude node modules and jekyll stuff
        exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        // Exclude node modules and jekyll stuff
        exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};