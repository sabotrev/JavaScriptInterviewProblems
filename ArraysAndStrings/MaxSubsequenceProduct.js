const maxSubsequenceProduct = (arr) => {
    let negCount = 0;
    let firstNegativeIndex = null;
    let lastNegativeIndex = null;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < 0) {
            negCount++;
            if (firstNegativeIndex === null) {
                firstNegativeIndex = i;
            }
            lastNegativeIndex = i;
        }
    }

    if (negCount % 2 === 0) {
        return arr.length;
    }
    let n = arr.length;
    return Math.max(n - (firstNegativeIndex + 1), lastNegativeIndex);
};

console.log(maxSubsequenceProduct([-1, -1, 1])); // 3
console.log(maxSubsequenceProduct([-1, 1, 1, 1, 1])); // 4
console.log(maxSubsequenceProduct([1, 1, 1, 1, -1])); // 4
console.log(maxSubsequenceProduct([-1, 1, 1, 1, -1])); // 5
console.log(maxSubsequenceProduct([-1, 1, 1, 1, 1, -1, -1])); // 6
console.log(maxSubsequenceProduct([1, 1])); // 2
console.log(maxSubsequenceProduct([1, 1, -1, -1, -1])); // 4
