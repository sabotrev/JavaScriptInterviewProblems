const subArrayRanges = (nums) => {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let min = Infinity;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            res += min;
        }
    }
    return res % (10e9 + 7);
};

console.log(subArrayRanges([3, 1, 2, 4])); // 4
// console.log(subArrayRanges([11, 81, 94, 43, 3])); // 4
