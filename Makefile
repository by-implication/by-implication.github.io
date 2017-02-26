all: development

deps:
	@npm install

development: deps
	./node_modules/.bin/webpack-dev-server --config webpack.config.js --progress --colors --host 0.0.0.0 --content-base . --port 9090

prerender: deps
	-rm -r build
	./node_modules/.bin/webpack --config webpack-prerender.config.js --progress --colors
	cp data/etc/favicon.ico build

github: prerender
	git add -f build
	git write-tree --prefix build | \
		xargs git commit-tree -p master -m "updated" | \
		xargs git update-ref refs/heads/master
	git reset build
	git push
