const romanToInt = (s) => {
    let romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let one = s[i];
        let two = '';
        if (i + 1 < s.length) {
            two = s[i] + s[i + 1];
        }
        if (romanMap.has(two)) {
            count += romanMap.get(two);
            i++;
        } else {
            count += romanMap.get(one);
        }
    }
    return count;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
