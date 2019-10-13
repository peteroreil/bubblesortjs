'use strict';


function isGreaterThan(operandOne, operandTwo) {
    return operandOne > operandTwo;
}


function sort(array, idx, sortstate = { count: 0, swap: false }, predicate) {
    let index = idx;
    const predFnc = predicate || isGreaterThan;

    if (idx === array.length - 1) {
        sortstate.count += 1;

        if (sortstate.swap) {
            // we require another sort
            index = 0;
            sortstate.swap = false;
        } else {
            return { result: array, count: sortstate.count };
        }
    }

    const el = array[index];
    const nextEl = array[index + 1];

    if (predFnc(el, nextEl)) {
        array[index + 1] = el;
        array[index] = nextEl;
        sortstate.swap = true;
    }

    return sort(array, index + 1, sortstate, predicate);
}

module.exports.sort = function (arr, predicate) {
    return sort(arr, 0, undefined, predicate);
};
