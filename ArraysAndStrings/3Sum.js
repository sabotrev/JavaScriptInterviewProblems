const threeSum = (nums) => {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // Skip duplicate numbers!
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[left], nums[right], nums[i]]);
                left++;
                // Again, skip duplicates! And update pointer.
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return result;
};

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
 */
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
