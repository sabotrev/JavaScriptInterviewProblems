Array.prototype.newMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // Check if item exists
        if (this.indexOf(this[i]) > -1) {
            result[i] = callback(this[i], i, this);
        }
    }
    return result;
};

// example
const numbers = [1, 2, 3, 4];
numbers[10] = 34;
const double = numbers.newMap((item, index) => {
    return item * 2;
});
console.log(double);
