Array.prototype.peek = function () {
    return this[this.length - 1];
};
const subArrayRanges = (nums) => {
    nums.unshift(0);
    let res = new Array(nums.length).fill(0);
    let stack = [0];
    for (let i = 0; i < nums.length; i++) {
        while (nums[stack.peekEnd()] > nums[i]) {
            stack.pop();
        }
        let j = stack.peekEnd();
        let temp = (i - j) * nums[i];
        res[i] = res[j] + temp;
        stack.push(i);
    }
    return res.reduce((acc, curr) => acc + curr);
};

console.log(subArrayRanges([3, 1, 2, 5, 4])); // 17
// console.log(subArrayRanges([3, 1, 2, 4])); // 17
// console.log(subArrayRanges([11, 81, 94, 43, 3])); // 4
