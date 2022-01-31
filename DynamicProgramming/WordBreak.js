const wordBreak = (s, wordDict) => {
    let wordSet = new Set([...wordDict]);
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                s = s.substring(i);
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

// console.log(wordBreak('leetcode', ['leet', 'code'])); // true
// console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true
console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa'])); // true
