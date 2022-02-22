const checkSubarraySum = (nums, k) => {
    for (let i = 1; i < nums.length; i++) {
        let sum = nums[i];
        console.log(`i: ${i}`);
        for (let j = i - 1; j >= 0; j--) {
            console.log(`j: ${j}`);
            sum += nums[j];
            console.log(sum);
            // if (sum % k === 0 || sum === k) {
            if (sum % k === 0 || sum === k) {
                return true;
            }
        }
    }

    return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // true
console.log(checkSubarraySum([1, 3, 6, 0, 9, 6, 9], 7)); // true
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 13)); // false
// console.log(checkSubarraySum([0], 1)); // false
// console.log(checkSubarraySum([1, 0], 2)); // false
// console.log(checkSubarraySum([5, 0, 0, 0], 3)); // true
