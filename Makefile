install:
	npm ci
gendiff:
	node bin/gendiff.js 
lint:
	npx eslint .
fix:
	npx eslint --fix .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest	
run:
	gendiff './__fixtures__/file1.json' './__fixtures__/file2.json' 