const maxSubArray2 = (nums) => {
    let result = nums[0];
    let currentAnswer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentAnswer = Math.max(nums[i], currentAnswer + nums[i]);

        result = Math.max(result, currentAnswer);
    }
    return result;
};

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray2([5, 4, -1, 7, 8])); // 23
