const reverse = (x) => {
    let reversedStringX = x.toString().split('').reverse().join('').toString();
    let reverseNum = parseInt(reversedStringX);

    if (x === 0 || Math.abs(reverseNum) > Math.pow(2, 31)) {
        return 0;
    }

    if (x < 0) {
        return reverseNum * -1;
    }
    return reverseNum;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
