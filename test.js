/*!
 * current-week-number <https://github.com/tunnckoCore/current-week-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentWeekNumber = require('./');

it('should be greater than 26 (june 27, 2014 - released)', function () {
  assert(currentWeekNumber() >= 26);
});
it('should be 13 for "March 24, 2015" and 12 for "03/24/2016"', function () {
  assert(currentWeekNumber('March 24, 2015') === 13);
  assert(currentWeekNumber('03/24/2016') === 12);
});
it('should be 32 for "August 07, 2015" and 12 for "02/16/2015"', function () {
  assert(currentWeekNumber('August 07, 2015') === 32);
  assert(currentWeekNumber('02/16/2015') === 8);
});
it('should get current week number, if date string is invalid', function () {
  assert(currentWeekNumber('') >= 26);
});
