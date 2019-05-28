'use strict';
const {
    prop,
    uniq,
    filter,
    curry,
    pipe,
    map,
    equals,
    sum,
    length,
    gt,
} = require('ramda');

const idP = prop('id');
const playTimeP = prop('playTime');
const autoP = prop('auto');

const pipePlayTimeSum = pipe(
    map(playTimeP),
    sum,
);

const filterAuto = item => equals(false, autoP(item));
const pipeAuto = pipe(
    filter(filterAuto),
    length,
);

const filterId = curry((id, dataItem) => equals(id, idP(dataItem)));

const mapId = curry((data, id) => {
    const filteredById = filter(filterId(id), data);
    const playTime = pipePlayTimeSum(filteredById);
    const auto = pipeAuto(filteredById) === 0;
    return { id, playTime, auto };
});

const merge = curry((data, data2) =>
    pipe(
        map(idP),
        uniq,
        map(mapId(data)),
    )(data2),
);

module.exports = merge;

/*
const d = require('./data.json');
const val = merge(d, d);
console.log(val);
*/
