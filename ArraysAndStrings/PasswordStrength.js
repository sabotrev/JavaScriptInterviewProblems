// https://leetcode.com/discuss/interview-question/1564287/Amazon-or-Online-Assessment-or-Strength-of-password
const passwordStrength = (input) => {
    let res = 0;
    for (let i = 1; i <= input.length; i++) {
        let hashSet = new Set();
        for (let j = i - 1; j >= 0; j--) {
            console.log(input[j]);
            hashSet.add(input[j]);
            res += hashSet.size;
        }
        console.log();
    }
    return res;
};

console.log(passwordStrength('good')); // 16
