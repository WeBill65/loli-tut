'use strict';
const { filter, equals, curry, prop } = require('ramda');

const idP = prop('id');

const filterID = curry((id, dataItem) => equals(id, idP(dataItem)));
const filterByIds = (ids, data) => filter(filterID(ids), data);

module.exports = filterByIds;

/*
const d = require('./data.json');
const vals = filterByIds(97604034, d);
console.log(vals);
*/
