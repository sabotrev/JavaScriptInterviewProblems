// Best explanation: https://leetcode.com/problems/longest-repeating-character-replacement/discuss/872604/99-Javascript-Solution-with-Explanation
const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    // Holds the max instances of the most frequent character. i.e. 'ABB' -> B = 2
    let maxCharCount = 0;
    const visited = {};
    let result = 0;

    while (right < s.length) {
        const char = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1;

        // If visit count is higher than max then update.
        maxCharCount = Math.max(maxCharCount, visited[char]);

        let windowLength = right - left + 1;
        /*
        If length of current string without max char count is greater than k:
            - then we know the new char made it such that there are more chars missing than can be replaced by k,
            - so we will remove the first char
            - and increment left pointer
         */
        if (windowLength - maxCharCount > k) {
            visited[s[left]]--;
            left++;
        } else {
            result = Math.max(result, windowLength);
        }

        right++;
    }

    // Window length
    return result;
};

console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4
console.log(characterReplacement('AAAA', 0)); // 4
