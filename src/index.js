import fs from 'fs'
import _ from 'lodash';

const file1 = fs.readFileSync('./__fixtures__/file1.json', 'utf-8'); 
const file2 = fs.readFileSync('./__fixtures__/file2.json', 'utf-8'); 
const dataParse1 = JSON.parse(file1); 
const dataParse2 = JSON.parse(file2); 

export const buildTree = (data1, data2) => {
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

const result = buildTree(dataParse1, dataParse2)

export const makeFormater = (array, separator = ' ') => {
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
            result.push(`${separator} + ${arr.key}: ${arr.value1}\n`)
            result.push(`${separator} - ${arr.key}: ${arr.value2}\n`)
        }
    }
    return `{\n${result.join('')}}`
}

console.log(makeFormater(result))
