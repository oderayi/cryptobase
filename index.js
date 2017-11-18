"use strict"

const cryptos = require('./cryptos.json')
const codes = function(){
    return Object.keys(cryptos);
}

module.exports = {
    cryptos,
    codes
}