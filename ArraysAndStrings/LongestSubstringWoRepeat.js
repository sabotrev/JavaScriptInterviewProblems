const lengthOfLongestSubstring = (s) => {
    let stringSet = new Set();
    let left = 0;
    let right = 0;
    let max = 0;

    while (left < s.length && right < s.length) {
        let letter = s[right];
        // Does NOT have.
        if (!stringSet.has(letter)) {
            stringSet.add(letter);
            max = Math.max(max, right - left + 1);
            right++;
        } else {
            // DOES have.
            stringSet.delete(s[left]);
            left++;
        }
    }

    return max;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('bbbbb')); // 1
// console.log(lengthOfLongestSubstring('pwwkew')); // 3
// console.log(lengthOfLongestSubstring('dvdf')); // 3
// console.log(lengthOfLongestSubstring('aabaab!bb')); // 3

console.log(lengthOfLongestSubstring('pwwwwwwkew')); // 3
