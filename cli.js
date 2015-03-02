#!/usr/bin/env node
/**
 * current-week-number <https://github.com/datetime/current-week-number>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var pkg = require('./package.json');
var currentWeekNumber = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Example',
    '    $ current-week-number September 15, 2126',
    '    37',
    '    $ current-week-number August 07, 2016',
    '    32',
    '    $ current-week-number 02/17/2012',
    '    7',
    '    $ current-week-number',
    '    10'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  return help();
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(currentWeekNumber(argv.join('')));
