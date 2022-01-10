// Create a "shared" function that takes two array iterators
// and returns the numbers common in both arrays.

/*
    const i1 = function* () {
        yield* [0, 2, 3, 4, 9, 10];
    };
    const i2 = function* () {
        yield* [1, 2, 9, 10, 14];
    };
     // @param {Iterator} iter1
     // @param {Iterator} iter2
     //
     // @returns {Array} An array of number shared by both arrays
    function shared(iter1, iter2) {}
    shared(i1(), i2()); // [2, 9, 10]
*/

const sharedNumbers = (iter1, iter2) => {
    let curr1 = iter1().next();
    while (curr1.done !== true) {
        console.log(curr1.next().value());
        curr1.next();
    }
};

const i1 = function* () {
    yield* [0, 2, 3, 4, 9, 10];
};
const i2 = function* () {
    yield* [1, 2, 9, 10, 14];
};

console.log(sharedNumbers(i1, i2));
