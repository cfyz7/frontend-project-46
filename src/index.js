import fs from 'fs'
import _ from 'lodash';
import { cwd } from 'node:process';
import { resolve, extname } from 'node:path';
import parseFile from './parser.js';
// import formatter from './formatters/index.js';

const buildTree = (data1, data2) => {
    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
    const result = keys.map((key) => {
        if (!Object.hasOwn(data2, key)) {
            return {
            key,
            type: 'deleted',
            value: data1[key],
            };
        }

        if (!Object.hasOwn(data1, key)) {
            return {
            key,
            type: 'added',
            value: data2[key],
            };
        }

        if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
            return {
            key,
            children: buildTree(data1[key], data2[key]),
            type: 'nested',
             };
        }

        if (!_.isEqual(data1[key], data2[key])) {
            return {
            key,
            type: 'changed',
            value1: data1[key],
            value2: data2[key],
            };
        }

        return {
        key,
        type: 'unchanged',
        value: data1[key],
        };
    });
    return result;
};

const makeFormater = (array, separator = ' ') => {
    const result = [];
    for (const arr of array) {
        if (arr.type === 'unchanged') {
            result.push(`   ${separator}${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'added') {
            result.push(`${separator} + ${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'deleted') {
            result.push(`${separator} - ${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'changed') {
            result.push(`${separator} - ${arr.key}: ${arr.value1}\n`)
            result.push(`${separator} + ${arr.key}: ${arr.value2}\n`)
            
        }
    }
    return `{\n${result.join('')}}`
}

const getPathToFile = (filepath) => resolve(cwd(), filepath);
const getFormat = (filepath) => extname(filepath).substring(1);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    const firstFile = getPathToFile(filepath1)
    const secondFile = getPathToFile(filepath2)

    const dataFile1 = readFile(firstFile);
    const dataFile2 = readFile(secondFile);

    const formatFile1 = getFormat(filepath1);
    const formatFile2 = getFormat(filepath2);

    const informationDiff = buildTree(
        parseFile(dataFile1, formatFile1),
        parseFile(dataFile2, formatFile2),
    );
    return makeFormater(informationDiff);
}
// console.log(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'))

export default genDiff;