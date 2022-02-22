const getMaxLen = (nums) => {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.length - i <= max) {
            return max;
        }
        let num = nums[i];
        if (num !== 0) {
            let negativeNumCount = 0;
            if (num < 0) {
                negativeNumCount++;
            } else {
                max = Math.max(max, 1);
            }
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < 0) {
                    negativeNumCount++;
                } else if (nums[j] === 0) {
                    break;
                }
                if (negativeNumCount % 2 === 0) {
                    max = Math.max(max, j - i + 1);
                }
            }
        }
    }
    return max;
};

console.log(getMaxLen([1, -2, -3, 4])); // 4
console.log(getMaxLen([-1, -2, -3, 0, 1])); // 2, [-1,-2] or [-2,-3]
