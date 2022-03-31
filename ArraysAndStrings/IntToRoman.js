const intToRoman = (num) => {
    const romanMap = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]);
    let res = '';
    let tempNum = num;
    while (tempNum > 0) {
        for (const [romanNum, romanStr] of romanMap) {
            console.log(romanNum, romanStr);
            if (tempNum / romanNum > 1) {
                res += romanStr;
                tempNum = tempNum - romanNum;
                console.log('if', tempNum);
                break;
            } else if (tempNum % romanNum === 0) {
                res += romanStr;
                tempNum = tempNum - romanNum;
                console.log('else if 1111', tempNum);
                break;
            } else if (tempNum / romanNum === 1) {
                res += romanStr;
                tempNum = tempNum - romanNum;
                console.log('else if 222', tempNum);
                break;
            }
        }
    }

    return res;
};

// console.log(intToRoman(3)); // III
// console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
// console.log(intToRoman(20)); // XX
