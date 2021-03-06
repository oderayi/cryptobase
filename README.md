cryptobase
=============

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/cryptobase.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cryptobase
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

[CryptoBase](https://github.com/oderayi/cryptobase) NPM Module

Credit: Original list from https://github.com/crypti/cryptocurrencies 

Install
-------

    npm install --save cryptobase


Usage
-----

### Methods

### `codes()`

Get a key / value pairs of code and name of all cryptocurrencies.

```js
const cb = require('cryptobase')

// Basic Usage:
cb.codes.BTC
// 'Bitcoin'
```

### `cryptos`

Returns an object / hashmap of all cryptocurrencies


```js
const cc = require('cryptobase')

cb.cryptos
// { 'BTC' => 'Bitcoin', ...}

cb.cryptos['BTC'];
// 'Bitcoin'

```

## License

[MIT](LICENSE.md)
