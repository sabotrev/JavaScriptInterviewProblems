const search = (nums, target) => {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left side is sorted
        let leftNum = nums[left];
        let midNum = nums[mid];
        if (leftNum <= midNum) {
            if (leftNum <= target && target <= midNum) {
                // target is in the left
                right = mid - 1;
            } else {
                // target is in the right
                left = mid + 1;
            }
        }

        // Otherwise, the right side is sorted
        else {
            let rightNum = nums[right];
            if (midNum <= target && target <= rightNum) {
                // target is in the right
                left = mid + 1;
            } else {
                // target is in the left
                right = mid - 1;
            }
        }
    }

    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
// console.log(search([1], 0)); // -1
