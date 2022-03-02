const canJump = (nums) => {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
// console.log(canJump([3,2,1,0,4])); // false
