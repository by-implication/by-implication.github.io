var config = require('./webpack.config.js');

module.exports = config({
	dev: true,
	prerender: false
});
