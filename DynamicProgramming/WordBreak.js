const wordBreak = (s, wordDict) => {
    let wordSet = new Set([...wordDict]);
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;

    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            // console.log(s.substring(i, j));
            if (dp[i] && wordSet.has(s.substring(i, j))) {
                dp[j] = true;
            }
        }
    }
    console.log(dp);

    return dp[s.length];
};
/*
    Time complexity : O(n^3) Nested for loops with substring calculation inside.
    Space complexity : O(n) length of dp.
 */

console.log(wordBreak('leetcode', ['leet', 'code'])); // true
// console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true
// console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa'])); // true
// console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false
// console.log(wordBreak('catsandog', ['cats', 'dog', 'an'])); // true
