# is-animated

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![coverage][coveralls-image]][coveralls-url]

**is-animated** is a simple library for detecting animated images, it supports not only GIFs, but also APNG images.

## Install

```
npm install is-animated
```

## Example

```js
const fs = require('fs')
const isAnimated = require('is-animated')

const filename = process.argv[2]

fs.readFile(filename, (err, buffer) => {
  const answer = isAnimated(buffer) ? 'Yes' : 'No'
  console.log(`Is "${filename}" animated? ${answer}.`)
})

```

## License

[MIT](LICENSE.md)


[npm-image]: https://img.shields.io/npm/v/is-animated.svg
[npm-url]: https://www.npmjs.com/package/is-animated
[travis-image]: https://img.shields.io/travis/qzb/is-animated.svg
[travis-url]: https://travis-ci.org/qzb/is-animated
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://npm.im/standard
[coveralls-image]: https://img.shields.io/coveralls/qzb/is-animated/master.svg
[coveralls-url]: https://coveralls.io/r/qzb/is-animated?branch=master


