# node-bubsort

A node implementation of buble sort with user defined predicate function

```
npm install node-bubsort
```

Usage:

```
const bubble = require('node-bubsort');

const { result, count } = bubble.sort([2, 1, 3]);
// result => [1, 2, 3]
// count => 2. Count refers to the number of passes of sort.

// sort with a predicate function
    const { result, count } = bubble.sort([
        { key: 5 },
        { key: 1 },
        { key: 4 },
        { key: 2 },
        { key: 8 }
    ], (objOne, objTwo) => objOne.key > objTwo.key);

// result => [ { key: 1 }, { key: 2 }, { key: 4 }, { key: 5 }, { key: 8 }]
// count => 3
```