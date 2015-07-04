var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var bourbon = require('node-bourbon');
var neat = require('node-neat');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

var styleLoaders = [
  { test: /\.css$/, loader: "css" },
 	{ test: /\.scss$/, loader: "css!sass?" 
    + neat.includePaths.map(function(p){ return "includePaths[]=" + p}) }
]
styleLoaders.forEach(function(item) {
	if(Array.isArray(item.loader)) {
    item.loader = item.loader.join("!");
  }
  item.loader = ExtractTextPlugin.extract('style-loader', item.loader);
});

var routePaths = [
  "/",
  "/about/"
];

module.exports = {
	entry: path.resolve(__dirname, "js/entry.jsx"),
	output: {
		filename: "bundle.js",
		path: __dirname,
		libraryTarget: "umd",
		publicPath: "/"
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
  	new ExtractTextPlugin("bundle.css"),
  	new StaticSiteGeneratorPlugin("bundle.js", routePaths),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: styleLoaders.concat([
      { test: /\.html$/, loader: 'html' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.woff($|\?)/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2($|\?)/,  loader: "url?limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf($|\?)/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot($|\?)/,    loader: "file" },
      { test: /\.svg($|\?)/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.png($|\?)/,    loader: "url?limit=10000&mimetype=image/png" },
      { test: /\.jpg($|\?)/,    loader: "url?limit=10000&mimetype=image/jpeg" },
      { test: /\.ico($|\?)/,    loader: "url?limit=10000&mimetype=image/x-icon" }
    ])
  }
}