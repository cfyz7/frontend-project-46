install:
	npm ci

lint:
	npx eslint .

fix:
	npx eslint --fix .

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

run:
	node bin/gendiff.js './__fixtures__/file1.yml' './__fixtures__/file2.yml' 

run2:
	gendiff -f plain './__fixtures__/file1.json' './__fixtures__/file2.json' 

.PHONY: test