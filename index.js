/**
* MIT License
*
* Copyright (c) 2019 Peter O'Reilly
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

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
