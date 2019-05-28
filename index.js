'use strict';
const { has } = require('ramda');
const merge = require('./merge');
const filterId = require('./id-filter');
const playTimeFilter = require('./min-playtime-filter');
const autoFilter = require('./auto-filter');

const select = (data, options) => {
    let results = [];
    if (has('merge', options)) {
        results = options.merge ? merge(data, data) : data;
    }
    if (has('id', options)) {
        results = filterId(options.id, results);
    }
    if (has('auto', options)) {
        results = autoFilter(options.auto, results);
    }
    if (has('minPlay')) {
        results = playTimeFilter(options.minPlay, results);
    }
    return results;
};

module.exports = select;

/*
const d = require('./data.json');
const options = { merge: true, minPlay: 126453 };
const val = select(d, options);
console.log(val);
*/
