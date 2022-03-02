const sumSubarrayMins = (arr) => {
    let sum = 0;
    // Get all contiguous substrings
    for (let i = 0; i < arr.length; i++) {
        let min = Infinity;
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j]);
            sum += min;
        }
    }
    return sum;
};

console.log(sumSubarrayMins([3, 1, 2, 4]));
console.log(sumSubarrayMins([11, 81, 94, 43, 3]));
