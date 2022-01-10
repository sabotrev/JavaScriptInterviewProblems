String.prototype.toUpperCaseByIndex = function (i) {
    return this.slice(0, i) + this.charAt(i).toUpperCase() + this.slice(i + 1);
};
String.prototype.toLowerCaseByIndex = function (i) {
    return this.slice(0, i) + this.charAt(i).toLowerCase() + this.slice(i + 1);
};
const letterCasePermutation = (s) => {
    let result = new Set([s]);
    for (let i = 0; i < s.length; i++) {
        for (const str of result) {
            let upperStr = str.toUpperCaseByIndex(i);
            let lowerStr = str.toLowerCaseByIndex(i);
            result.add(upperStr);
            result.add(lowerStr);
        }
    }
    return [...result];
};

console.log(letterCasePermutation('ab2'));
console.log(letterCasePermutation('35p'));
console.log(letterCasePermutation('C'));
console.log(letterCasePermutation('TB'));
