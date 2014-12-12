/**
 * current-week-number <https://github.com/tunnckoCore/current-week-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var currentWeekNumber = require('./');
var assert = require('assert');

describe('current-week-number', function() {
  it('should be greater than 26 (june 27, 2014 - released)', function(done) {
    assert.ok(currentWeekNumber() >= 26)
    done();
  });

  it('should receive valid date format string', function(done) {
    assert.ok(currentWeekNumber('March 24, 2015') === 13);
    assert.ok(currentWeekNumber('03/24/2016') === 12);
    assert.ok(currentWeekNumber('August 07, 2015') === 32);
    assert.ok(currentWeekNumber('02/16/2015') === 8);
    assert.ok(currentWeekNumber('12/15/2014') === 51);
    done();
  });

  it('should get week number when empty string format', function(done) {
    assert.ok(currentWeekNumber('') >= 26);
    done();
  });
});
