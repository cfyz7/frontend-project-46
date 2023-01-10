#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
// import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format <type>', 'output format')

program.parse();


