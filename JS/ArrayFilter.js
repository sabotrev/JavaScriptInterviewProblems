Array.prototype.newFilter = function (callback, context) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// example
const numbers = [1, 2, 3, 4];
const even = numbers.newFilter((item) => item % 2 === 0);
console.log(even);
