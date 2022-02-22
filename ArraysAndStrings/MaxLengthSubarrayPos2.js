Array.prototype.addAll = function () {
    return this.reduce((acc, curr) => acc * curr);
};

const getMaxLen = (nums) => {
    let max = 0;
    let subArrays = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subArray = nums.slice(i, j);
            subArrays.push(subArray);
        }
    }

    for (const subArray of subArrays) {
        if (subArray.length <= max) {
            continue;
        }
        if (subArray.addAll() > 0) {
            console.log('in here');
            max = Math.max(max, subArray.length);
        }
    }

    return max;
};

console.log(getMaxLen([1, -2, -3, 4])); // 4
console.log(getMaxLen([-1, -2, -3, 0, 1])); // 2, [-1,-2] or [-2,-3]
