var config = require('./webpack-base.config.js');

module.exports = config({
	dev: false,
	prerender: true
});