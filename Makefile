install:
	npm ci
gendiff:
	node bin/gendiff.js -h 
lint:
	npx eslint .
fix:
	npx eslint --fix .
test:
	npx jest	
run:
	gendiff  './__fixtures__/file1.yml' './__fixtures__/file2.yml' 