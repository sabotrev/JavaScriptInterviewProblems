const longestCommonSubsequence = (text1, text2) => {
    let dp = [...Array(text1.length + 1)].map((_) =>
        new Array(text2.length + 1).fill(0)
    );

    for (let col = text2.length - 1; col >= 0; col--) {
        for (let row = text1.length - 1; row >= 0; row--) {
            console.log(`compare ${text1[row]} === ${text2[col]}`);
            if (text1[row] === text2[col]) {
                // If match, then 1 + the diagonal.
                dp[row][col] = 1 + dp[row + 1][col + 1];
            } else {
                // If NO match, then find max of value to the right OR below.
                dp[row][col] = Math.max(dp[row + 1][col], dp[row][col + 1]);
            }
            console.log(dp);
        }
    }

    return dp[0][0];
};

console.log(longestCommonSubsequence('abcde', 'ace')); // 3
