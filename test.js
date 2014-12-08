/**
 * current-week-number <https://github.com/tunnckoCore/current-week-number>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var currentWeekNumber = require('./');
var moment = require('moment');

describe('current-week-number', function() {
  it('should be greater than 26 (june 27, 2014 - released)', function(done) {
    currentWeekNumber().should.be.greaterThan(26);
    done();
  });

  it('should get valid date format string', function(done) {
    currentWeekNumber('March 24, 2015').should.equal(13);
    currentWeekNumber('03/24/2016').should.equal(12);
    currentWeekNumber('August 07, 2015').should.equal(32);
    currentWeekNumber('02/16/2015').should.equal(8);
    done();
  });

  it('should get week number when empty string format', function(done) {
    currentWeekNumber('').should.be.greaterThan(26);
    done();
  });
});
