const coinChange1 = (coins, amount) => {
    let dp = new Array(amount + 1);
    dp.fill(amount + 1); // Fill with invalid number
    dp[0] = 0;

    for (let i = 0; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            let coin = coins[j];
            let difference = i - coin;
            if (difference >= 0) {
                let minOfSubproblem = dp[difference];
                dp[i] = Math.min(dp[i], minOfSubproblem + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

/*
    Time: O(a * c) = O(amount * number of coins)
    Space: O(a) = O(amount)
 */
console.log(coinChange1([1, 2, 5], 11)); // 3
