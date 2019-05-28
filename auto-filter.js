'use strict';
const { curry, filter, equals, prop } = require('ramda');

const autoP = prop('auto');

const autoFilter = curry((val, dataItem) => equals(val, autoP(dataItem)));

const filterAuto = (val, data) => filter(autoFilter(val), data);

module.exports = filterAuto;

/*
const d = require('./data.json');
const val = filterAuto(true, d);
console.log(val);
*/
