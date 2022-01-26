const longestSubstring = (s) => {
    if (s.length === 0 || s.length === 1) {
        return s.length;
    }

    let characterSet = new Set();
    let longest = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (characterSet.has(s[right])) {
            characterSet.delete(s[left]);
            left++;
        }
        characterSet.add(s[right]);
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

console.log(longestSubstring('abcabcbb')); // 3
console.log(longestSubstring('pwwkew')); // 3 wke
console.log(longestSubstring('au')); // 2 au
console.log(longestSubstring('aab')); // 2 ab
console.log(longestSubstring('dvdf')); // 3
console.log(longestSubstring('aabaab!bb')); // 3
