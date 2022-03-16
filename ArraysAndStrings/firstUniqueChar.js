const firstUnique = (s) => {
    const charMap = new Map();
    for (const char of s) {
        if (!charMap.has(char)) {
            charMap.set(char, 1);
        } else {
            charMap.set(char, charMap.get(char) + 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUnique('leetcode')); // 0
