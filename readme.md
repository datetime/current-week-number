# Week number [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Coveralls][coveralls-img]][coveralls-url] [![datetime org][datetime-img]][datetime-url]
> Get week number of the current date/year or given valid `Date` string format


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install current-week-number
$ npm test
$ week --help
```


## Usage
```js
var currentWeekNumber = require('current-week-number');

// june 27, 2014
currentWeekNumber()
//=> 26

currentWeekNumber('March 24, 2015')
//=> 13

currentWeekNumber('03/24/2016')
//=> 12, cuz' year is leap

currentWeekNumber('August 07, 2015')
//=> 32

currentWeekNumber('02/16/2015')
//=> 8
```
> For more use-cases see [tests](./test.js)


## [.currentWeekNumber](index.js#L16)
- `[date]` **{String}** every valid Date-ish string format


## CLI
```bash

  Get current week number of the current year or given date string format.

  Options
    --help                Show this help
    --version             Current version of package
    -f | --format         Valid date format string

  Usage
    week [date format]

  Examples
    week
    week "March 24, 2015"
    week "03/24/2016"

```


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/current-week-number
[npmjs-img]: http://img.shields.io/npm/v/current-week-number.svg
[npmjs-ico]: https://nodei.co/npm/current-week-number.svg?mini=true

[coveralls-url]: https://coveralls.io/r/datetime/current-week-number?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/current-week-number.svg

[license-url]: https://github.com/datetime/current-week-number/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/datetime/current-week-number
[travis-img]: https://travis-ci.org/datetime/current-week-number.svg

[depstat-url]: https://david-dm.org/datetime/current-week-number
[depstat-img]: https://david-dm.org/datetime/current-week-number.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/current-week-number/graphs/contributors

[datetime-img]: http://img.shields.io/badge/datetime-approved-brightgreen.svg
[datetime-url]: https://github.com/datetime