import fs from 'fs'
import _ from 'lodash';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
// const data1 = fs.readFileSync('./__fixtures__/file1.json', 'utf-8'); 
// const data2 = fs.readFileSync('./__fixtures__/file2.json', 'utf-8'); 
// const dataParse1 = JSON.parse(data1); 
// const dataParse2 = JSON.parse(data2); 

// const buildTree = (obj1, obj2) => {
//     return [obj1, obj2]
// }

// const makeFormatter = (dates) => {
//     const firstObj = dates[0];
//     const secondObj = dates[1];
//     const keys1 = Object.keys(firstObj);
//     const keys2 = Object.keys(secondObj);
//     const keys = _.union(keys1, keys2);
//     const result = {};
//     for (const key of keys) {
//       if (!Object.hasOwn(firstObj, key)) {
//         result[key] = 'added';
//       } else if (!Object.hasOwn(secondObj, key)) {
//         result[key] = 'deleted';
//       } else if (firstObj[key] !== secondObj[key]) {
//         result[key] = 'changed';
//       } else {
//         result[key] = 'unchanged';
//       }
//     }
//     return result
// }
// console.log(makeFormatter(buildTree(dataParse1, dataParse2)))


// ********************************************************************************************
// const genDiff = (data1, data2 ) => {
//     const result = []
//     const keys1 = Object.keys(data1);
//     const keys2 = Object.keys(data2);
//     const keys = _.union(keys1, keys2);
//     for (const key of keys) {
//         if (_.has(data1, key) && !_.has(data2, key)) {
//             result.push(`\n  - ${key}: ${data1[key]}`);
//         }
//         if (_.has(data1, key) === _.has(data2, key) && data1[key] === data2[key]) {
//             result.push(`\n    ${key}: ${data1[key]}`);
//         }
//         if (_.has(data1, key) === _.has(data2, key) && data1[key] !== data2[key]) {
//             result.push(`\n  - ${key}: ${data1[key]}`);
//             result.push(`\n  + ${key}: ${data2[key]}`);
//         }
//         if (!_.has(data1, key) && _.has(data2, key)) {
//             result.push(`\n  + ${key}: ${data2[key]}`);
//         }   
//     }
//     result.sort((a,b) => a.charCodeAt(5) - b.charCodeAt(5));
//     return `{${result.join('')}\n}`; 
// };
// console.log(genDiff(dataParse1, dataParse2));
// export default genDiff;

// export default (filepath1, filepath2) => {
//     const data1 = fs.readFileSync(filepath1, 'utf-8'); 
//     const data2 = fs.readFileSync(filepath2, 'utf-8'); 
//     const dataParse1 = JSON.parse(data1); 
//     const dataParse2 = JSON.parse(data2); 
//     genDiff(dataParse1, dataParse2)
// };



