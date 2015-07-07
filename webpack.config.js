var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var bourbon = require('node-bourbon');
var neat = require('node-neat');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var postcssNested = require("postcss-nested");
var postcssSimpleVars = require("postcss-simple-vars");
var cssimport = require("postcss-import");
var path = require("path");

var routePaths = [
  "/",
  "/about/",
  "/contact/"
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
    // new webpack.DefinePlugin({
    //     "process.env": {
    //         UV_THREADPOOL_SIZE: 100
    //     }
    // }),
  	new StaticSiteGeneratorPlugin("bundle.js", routePaths),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  postcss: function(){
    return [
      cssimport({
        onImport: function(files){
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      autoprefixer, 
      postcssNested, 
      postcssSimpleVars
    ]
  },
  module: {
    loaders: [
      { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
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
    ]
  }
}