const twoSum = (nums, target) => {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (dict.hasOwnProperty(complement)) {
            return `[${dict[complement]}, ${i}]`;
        } else {
            dict[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
