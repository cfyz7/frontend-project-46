#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from './index.js';

const program = new Command()
program
  .version('0.8.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1>', 'path to file1')
  .arguments('<filepath2>', 'path to file2')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2))
  })

program.parse();


