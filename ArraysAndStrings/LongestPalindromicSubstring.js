const longestPalindrome = (s) => {
    let longest = '';
    const findLongestPalindrome = (str, left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i++) {
        // palindrome can center around 1 or 2 letters
        const current1 = findLongestPalindrome(s, i, i); // Odd
        const current2 = findLongestPalindrome(s, i, i + 1); // Even
        const longerPalindrome =
            current1.length > current2.length ? current1 : current2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        }
    }
    return longest;
};

console.log(longestPalindrome('babad')); // 'bab' or 'aba'
console.log(longestPalindrome('cbbd')); // 'bb'
// console.log(longestPalindrome('ac')); // 'a'
// console.log(longestPalindrome('bb')); // 'bb'
// console.log(longestPalindrome('abb')); // 'bb'
