const longestPalindrome = (s) => {
    let result = '';
    const findPalindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substr(left, right - 1);
    };

    for (let i = 0; i < s.length; i++) {
        let even = findPalindrome(i, i);
        let odd = findPalindrome(i, i + 1);
        if (even.length > result.length) {
            result = even;
        } else if (odd.length > result.length) {
            result = odd;
        }
    }

    return result;
};

console.log(longestPalindrome('babad')); // 'bab' or 'aba'
console.log(longestPalindrome('cbbd')); // 'bb'
console.log(longestPalindrome('ac')); // 'a'
console.log(longestPalindrome('bb')); // 'bb'
console.log(longestPalindrome('abb')); // 'bb'
