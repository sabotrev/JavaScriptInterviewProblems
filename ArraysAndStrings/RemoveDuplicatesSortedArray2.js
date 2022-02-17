const removeDuplicates = (nums) => {
    let dupCount = 1;
    let realIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            dupCount++;
        } else {
            dupCount = 1;
        }

        if (dupCount <= 2) {
            realIndex++;
            nums[realIndex] = nums[i];
        }
    }
    return realIndex + 1;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
