all: development

deps: 
	@npm install

development: deps
	./node_modules/.bin/webpack-dev-server --config webpack.config.js --progress --colors --host 0.0.0.0 --content-base . --port 9090

prerender: deps
	./node_modules/.bin/webpack --config webpack.config.js --progress --colors