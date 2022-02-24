// https://leetcode.com/discuss/interview-question/1789226/Amazon-or-OA-or-SDE-2-or-Please-help-solve%3A-sum-of-'powers'-of-contiguous-subarrays
const sumOfPowers = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let min = Infinity;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            min = Math.min(min, arr[j]);
            res += sum * min;
        }
    }
    return res;
};
console.log(sumOfPowers([2, 3, 2, 1])); // 69
