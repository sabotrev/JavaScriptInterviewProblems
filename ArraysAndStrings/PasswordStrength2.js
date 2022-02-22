// https://leetcode.com/discuss/interview-question/1564287/Amazon-or-Online-Assessment-or-Strength-of-password
const passwordStrength = (input) => {
    let res = 0;
    for (let i = 0; i < input.length; i++) {
        let hashSet = new Set();
        for (let j = i; j < input.length; j++) {
            let test = input.slice(i, j + 1);
            console.log(test);
            let set = new Set(test);
            res += set.size;
        }
        console.log();
    }
    return res;
};

console.log(passwordStrength('good')); // 16
