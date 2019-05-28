'use strict';
const { prop, curry, filter } = require('ramda');

const playTimeP = prop('playTime');

const filterPT = curry((val, dataItem) => playTimeP(dataItem) >= val);

const filterPlayTime = (val, data) => filter(filterPT(val), data);

module.exports = filterPlayTime;

/*
const d = require('./data.json');
const vals = filterPlayTime(126453, d);
console.log(vals);
*/
