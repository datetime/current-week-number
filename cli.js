#!/usr/bin/env node
/**
 * current-week-number <https://github.com/datetime/current-week-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var meow = require('meow');
var week = require('./index');

var cli = meow({
  help: [
    'Options',
    '  --help                Show this help',
    '  --version             Current version of package',
    '  -f | --format         Valid date format string',
    '',
    'Usage',
    '  week [date format]',
    '',
    'Examples',
    '  week',
    '  week "March 24, 2015"',
    '  week "03/24/2016"',
    ''
  ].join('\n')
});

var format = cli.input[0] || cli.flags.f || cli.flags.format || false;

var res = format ? week(format) : week();

console.log(res);
