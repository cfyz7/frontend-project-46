import fs from 'fs';
import { cwd } from 'node:process';
import { resolve, extname } from 'node:path';
import parseFile from './parser.js';
import buildTree from './buildTree.js';
import formatter from './formatters/index.js';

const getPathToFile = (filepath) => resolve(cwd(), filepath);
const getFormat = (filepath) => extname(filepath).substring(1);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstFile = getPathToFile(filepath1);
  const secondFile = getPathToFile(filepath2);

  const dataFile1 = readFile(firstFile);
  const dataFile2 = readFile(secondFile);

  const formatFile1 = getFormat(filepath1);
  const formatFile2 = getFormat(filepath2);

  const informationDiff = buildTree(
    parseFile(dataFile1, formatFile1),
    parseFile(dataFile2, formatFile2),
  );

  return formatter(informationDiff, formatName);
};
// console.log(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'));
// console.log(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json'));
// console.log(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain'));

export default genDiff;
