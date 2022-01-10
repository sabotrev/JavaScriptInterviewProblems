const coinChange2 = (amount, coins) => {
    let dp = new Array(coins.length + 1);
    dp.fill(new Array(amount + 1).fill(0)); // Fill with 0's
    dp[0][0] = 1;

    for (let i = 1; i < coins.length + 1; i++) {
        dp[i][0] = 1;
        let currentCoin = coins[i - 1];

        for (let j = 1; j <= amount; j++) {
            let prevResult = dp[i - 1][j];
            let newResult = 0;

            if (currentCoin <= j) {
                newResult = dp[i][j - currentCoin];
            }

            dp[i][j] = prevResult + newResult;
        }
    }
    return dp[coins.length][amount];
};

/*
    Time:
    Space:
 */
console.log(coinChange2(5, [1, 2, 5])); // 4
/*
    5=5
    5=2+2+1
    5=2+1+1+1
    5=1+1+1+1+1
 */
