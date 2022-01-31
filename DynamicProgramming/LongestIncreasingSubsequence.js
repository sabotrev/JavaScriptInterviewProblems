const lengthOfLIS = (nums) => {
    let dp = new Array(nums.length);
    dp.fill(1);

    for (let i = 1; i < nums.length; i++) {
        console.log(`i: ${i}`);
        for (let j = 0; j < i; j++) {
            console.log(`j: ${j}`);
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        console.log();
    }

    return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7])); // 3
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])); // 1
