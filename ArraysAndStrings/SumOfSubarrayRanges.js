const subArrayRanges = (nums) => {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let min = Infinity;
        let max = -Infinity;
        for (let j = i; j < nums.length; j++) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            res += max - min;
        }
    }
    return res;
};

console.time('test');
console.log(subArrayRanges([1, 2, 3])); // 4
console.timeEnd('test');
// console.log(subArrayRanges([1, 3, 3])); // 4
