const stringToMap = (str) => {
    const newMap = new Map();
    str.split('').forEach((letter) => {
        if (newMap.has(letter)) {
            newMap.set(letter, newMap.get(letter) + 1);
        } else {
            newMap.set(letter, 1);
        }
    });
    return newMap;
};

const isAnagram = function (s, t) {
    const sMap = stringToMap(s);
    const tMap = stringToMap(t);

    if (s.length !== t.length) return false;

    for (let letter of s) {
        if (sMap.get(letter) !== tMap.get(letter)) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
