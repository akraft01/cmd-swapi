#!/usr/bin/env node

import { Command } from 'commander';
import { fetchData } from './fetchData';

const program = new Command();

program
  .name('swapi-cli')
  .description('CLI tool to fetch data from the Star Wars API')
  .version('1.0.0')
  .argument('<resource>', 'Resource type (e.g., people, planets, starships)')
  .argument('<id>', 'ID of the resource to fetch')
  .action((resource, id) => {
    fetchData(resource, id);
  });

program.parse(process.argv);
