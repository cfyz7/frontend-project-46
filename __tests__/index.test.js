import gendiff from '../src/index.js'
import fs from 'fs'
import url from 'url'
import path, { dirname } from 'node:path'
import { test, expect } from '@jest/globals'


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const fileJSON = readFile('textForJSON.txt');
const fileYAML = readFile('textForYAML.txt');

const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';
const file3 = './__fixtures__/file3.yml';
const file4 = './__fixtures__/file4.yml';

describe('comparing  files', () => {
    test('testing JSON', () => {
        expect(gendiff(file1, file2)).toEqual(fileJSON)
    });
    test('testing YAML', () => {
        expect(gendiff(file3, file4)).toEqual(fileYAML)
    });
});

