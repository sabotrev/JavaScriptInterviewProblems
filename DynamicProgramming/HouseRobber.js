const rob = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let currentHousePlusPrev = nums[i] + dp[i - 2];
        let oldMax = dp[i - 1];
        dp[i] = Math.max(currentHousePlusPrev, oldMax);
    }

    return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
