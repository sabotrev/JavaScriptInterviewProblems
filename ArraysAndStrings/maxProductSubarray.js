const maxProduct = (nums) => {
    let result = Math.max(...nums);
    let currentMin = 1;
    let currentMax = 1;

    for (const num of nums) {
        if (num === 0) {
            currentMin = 1;
            currentMax = 1;
            continue;
        }
        let tempMax = currentMax * num;
        let tempMin = currentMin * num; // Could be negative
        currentMax = Math.max(tempMax, tempMin, num);
        currentMin = Math.min(tempMax, tempMin, num);
        console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);

        result = Math.max(result, currentMax);
    }
    return result;
};

// console.log(maxProduct([2, 3, -2, 4])); // 6
// console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([2, -5, -2, -4, 3])); // 24
