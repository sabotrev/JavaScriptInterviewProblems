const firstNonRepeatingCharacter = (str) => {
    let dict = {};
    for (let char of str) {
        if (!dict[char]) {
            dict[char] = 1;
        } else {
            dict[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (dict[char] === 1) {
            return i;
        }
    }

    return -1;
}

/*
    Time Complexity: O(n)
 */

console.log(`leetcode ${firstNonRepeatingCharacter('leetcode')}`); // 0
console.log(`aaabccc ${firstNonRepeatingCharacter('aaabccc')}`); // 3
console.log(`aabb ${firstNonRepeatingCharacter('aabb')}`); // -1