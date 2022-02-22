const checkSubarraySum = (nums, k) => {
    const n = nums.length;
    if (n < 2) {
        return false;
    }
    // Construct prefix sum array.
    const dp = Array(n).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + nums[i];
        if (dp[i] % k === 0) {
            return true;
        }
    }
    console.log(dp);
    console.log();
    for (let i = 2; i < n; ++i) {
        let sum = nums[i - 2];
        console.log(`sum, `, sum);
        for (let j = i; j < n; ++j) {
            dp[j] -= sum;
            console.log(dp);
            if (dp[j] % k === 0) {
                return true;
            }
        }
    }
    return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // true
console.log(checkSubarraySum([1, 3, 6, 0, 9, 6, 9], 7)); // true
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 13)); // false
// console.log(checkSubarraySum([0], 1)); // false
// console.log(checkSubarraySum([1, 0], 2)); // false
// console.log(checkSubarraySum([5, 0, 0, 0], 3)); // true
