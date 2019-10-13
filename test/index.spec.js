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

/* eslint-disable prefer-arrow-callback */
const bubble = require('../index');

const expect = require('chai').expect;

describe('node-bubble', function () {
    it('should sort an array of size 1', function () {
        const { result, count } = bubble.sort([1]);
        expect(result).to.deep.equal([1]);
        expect(count).to.equal(1);
    });

    it('should sort an array of size 2', function () {
        const { result, count } = bubble.sort([2, 1]);
        expect(result).to.deep.equal([1, 2]);
        expect(count).to.equal(2);
    });

    it('should sort an array of size 3', function () {
        const { result, count } = bubble.sort([2, 1, 3]);
        expect(result).to.deep.equal([1, 2, 3]);
        expect(count).to.equal(2);
    });

    it('where should require multiple passes should sort', function () {
        const { result, count } = bubble.sort([5, 1, 4, 2, 8]);
        expect(result).to.deep.equal([1, 2, 4, 5, 8]);
        expect(count).to.equal(3);
    });

    it('should sort objects on a predicate function', function () {
        const { result, count } = bubble.sort([
            { key: 5 },
            { key: 1 },
            { key: 4 },
            { key: 2 },
            { key: 8 }
        ], (objOne, objTwo) => objOne.key > objTwo.key);

        expect(result).to.deep.equal([
            { key: 1 },
            { key: 2 },
            { key: 4 },
            { key: 5 },
            { key: 8 }
        ]);
        expect(count).to.equal(3);
    });
});
