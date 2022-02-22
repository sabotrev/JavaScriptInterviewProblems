const numDecodings = (s) => {
    let dp = new Array(s.length + 1);
    dp.fill(0);
    // Solve for 0 digits AND 1 digit.
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        let oneDigit = parseInt(s.substring(i - 1, i));
        let twoDigit = parseInt(s.substring(i - 2, i));
        /*
            dp[i] = dp[i-1] + dp[i-2]
            BUT, it's possible that oneDigit or twoDigit CANNOT be used.
         */
        if (oneDigit >= 1) {
            console.log(oneDigit);
            dp[i] += dp[i - 1];
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            console.log(twoDigit);
            dp[i] += dp[i - 2];
        }
        console.log(dp);
    }
    return dp[s.length];
};

// console.log(numDecodings('12')); // 2 -> "AB" (1 2) or "L" (12)
console.log(numDecodings('226')); // 3 -> "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6)
