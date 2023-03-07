install:
	npm ci
gendiff:
	node bin/gendiff.js 
lint:
	npx eslint .
fix:
	npx eslint --fix .
publish:
	npm publish --dry-run
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest	
test_coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest	--coverage
run:
	gendiff './__fixtures__/file1.json' './__fixtures__/file2.json' 