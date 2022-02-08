const maxSubArray2 = (nums) => {
    let result = nums[0];
    let currentMax = 0;
    for (const num of nums) {
        if (currentMax < 0) {
            currentMax = 0;
        }
        currentMax += num;
        result = Math.max(result, currentMax);
    }
    return result;
};

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray2([5, 4, -1, 7, 8])); // 23
