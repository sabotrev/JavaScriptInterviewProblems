const letterCombinations = (digits) => {
    if (digits === '') {
        return [];
    }
    let phoneMap = new Map([
        [2, 'abc'],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkl'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz'],
    ]);
    let result = [];

    const backTrack = (i, currentStr) => {
        // We've reached the end.
        if (currentStr.length === digits.length) {
            console.log(currentStr);
            result.push(currentStr);
            console.log(result);
            return;
        }

        // Current digit we're at.
        let chars = phoneMap.get(parseInt(digits[i]));

        for (const char of chars) {
            backTrack(i + 1, currentStr + char);
        }
    };

    backTrack(0, '');

    return result;
};

// console.log(letterCombinations('2')); // ["a","b","c"]
console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
