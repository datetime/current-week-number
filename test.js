/**
 * current-week-number <https://github.com/datetime/current-week-number>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var currentWeekNumber = require('./index');

describe('current-week-number:', function() {
  it('should receive valid date format string', function(done) {
    assert.strictEqual(currentWeekNumber('March 24, 2015'), 13);
    assert.strictEqual(currentWeekNumber('03/24/2016'), 12);
    assert.strictEqual(currentWeekNumber('August 07, 2016'), 31);
    assert.strictEqual(currentWeekNumber('August 07, 2015'), 32);
    assert.strictEqual(currentWeekNumber('02/16/2015'), 8);
    assert.strictEqual(currentWeekNumber('12/15/2014'), 51);
    done();
  });
  it('should receive date object', function(done) {
    assert.strictEqual(currentWeekNumber(new Date('March 24, 2015')), 13);
    assert.strictEqual(currentWeekNumber(new Date('August 07, 2016')), 31);
    done();
  });
  it('should get current week number when empty string format', function(done) {
    assert.strictEqual(typeof currentWeekNumber(''), 'number');
    done();
  });
  it('should get current week number, if no valid Date format or Date Object', function(done) {
    assert.strictEqual(typeof currentWeekNumber(/regex/g), 'number');
    assert.strictEqual(typeof currentWeekNumber(true), 'number');
    assert.strictEqual(typeof currentWeekNumber(false), 'number');
    assert.strictEqual(typeof currentWeekNumber(222), 'number');
    assert.strictEqual(typeof currentWeekNumber({obj: 123}), 'number');
    assert.strictEqual(typeof currentWeekNumber([1,2,3]), 'number');
    assert.strictEqual(typeof currentWeekNumber(), 'number');
    done();
  });
});
