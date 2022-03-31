// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
const uniqueLetterString = (s) => {
    let res = 0;
    for (let i = 1; i <= s.length; i++) {
        let hashMap = new Map();
        let duplicates = 0;
        console.log(`i: ${i}`);

        for (let j = i - 1; j >= 0; j--) {
            console.log(`j: ${j}`);

            if (!hashMap.has(s[j])) {
                hashMap.set(s[j], 1);
            } else {
                hashMap.set(s[j], hashMap.get(s[j]) + 1);
                if (hashMap.get(s[j]) === 2) {
                    duplicates++;
                }
            }
            console.log(hashMap);
            res += hashMap.size - duplicates;
        }
        console.log();
    }
    return res;
};

console.log(uniqueLetterString('ABC')); // 10
console.log(uniqueLetterString('ABA')); // 8
console.log(uniqueLetterString('LEETCODE')); // 92
