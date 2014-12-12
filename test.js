/**
 * current-week-number <https://github.com/datetime/current-week-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentWeekNumber = require('./index');

describe('current-week-number', function() {
  it('should be greater than 26 (june 27, 2014 - released)', function(done) {
    assert.ok(currentWeekNumber() >= (26 || 1));
    done();
  });
  it('should receive valid date format string', function(done) {
    assert.strictEqual(currentWeekNumber('March 24, 2015'), 13);
    assert.strictEqual(currentWeekNumber('03/24/2016'), 12);
    assert.strictEqual(currentWeekNumber('August 07, 2015'), 32);
    assert.strictEqual(currentWeekNumber('02/16/2015'), 8);
    assert.strictEqual(currentWeekNumber('12/15/2014'), 51);
    done();
  });
  it('should get week number when empty string format', function(done) {
    assert.ok(currentWeekNumber('') >= (26 || 1));
    done();
  });
  it('should get current week number, if Date format string is invalid', function(done) {
    assert.ok(currentWeekNumber(/regex/g) >= (26 || 1));
    assert.ok(currentWeekNumber(true) >= (26 || 1));
    assert.ok(currentWeekNumber(false) >= (26 || 1));
    assert.ok(currentWeekNumber(222) >= (26 || 1));
    done();
  });
});
