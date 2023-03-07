import gendiff from '../src/index.js'
import fs from 'fs'
import url from 'url'
import path, { dirname } from 'node:path'
import { describe ,test, expect } from '@jest/globals'


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fileJSON = readFile('textForJSON.txt');
const fileDefault = readFile('textdefault.txt');
const filePlain = readFile('textForPlain.txt')

const file1J = './__fixtures__/file1.json';
const file2J = './__fixtures__/file2.json';
const file1Y = './__fixtures__/file1.yml';
const file2Y = './__fixtures__/file2.yml';
const file3 = './__fixtures__/file3.yml';
const file4 = './__fixtures__/file4.yml';

describe('comparing  files', () => {
    test('testing JSON', () => {
        expect(gendiff(file1J, file2J)).toEqual(fileJSON)
    });
    test('testing plain', () => {
        expect(gendiff(file1Y, file2Y, 'plain')).toEqual(filePlain)
    });
    test('testing YAML', () => {
        expect(gendiff(file3, file4)).toEqual(fileDefault)
    });
});

