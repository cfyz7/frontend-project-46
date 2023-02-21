import fs from 'fs';
import { cwd } from 'node:process';
import { resolve, extname } from 'node:path';
import parseFile from './parser.js';
import buildTree from './buildTree.js';
import makeFormater from './formatters/paintForm.js';

const getPathToFile = (filepath) => resolve(cwd(), filepath);
// console.log(getPathToFile('./__fixtures__/file1.json'))
// console.log(getPathToFile('./__fixtures__/file3.yml'))
const getFormat = (filepath) => extname(filepath).substring(1);
// console.log(getFormat('./__fixtures__/file1.json'))
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
// console.log(readFile('./__fixtures__/file1.json'))
// console.log(parseFile(readFile('./__fixtures__/file1.json'), getFormat('./__fixtures__/file1.json')))

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    const firstFile = getPathToFile(filepath1)
    const secondFile = getPathToFile(filepath2)

    const dataFile1 = readFile(firstFile);
    const dataFile2 = readFile(secondFile);

    const formatFile1 = getFormat(filepath1);
    const formatFile2 = getFormat(filepath2);
    // console.log(buildTree(parseFile(dataFile1, formatFile1), parseFile(dataFile2, formatFile2)))
    const informationDiff = buildTree(
        parseFile(dataFile1, formatFile1),
        parseFile(dataFile2, formatFile2),
    );
    return makeFormater(informationDiff);
}
console.log(genDiff('./__fixtures__/file3.yml', './__fixtures__/file4.yml'))


export default genDiff;