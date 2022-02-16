const searchRange = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            left = mid;
            right = mid;
            break;
        }

        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left > right) {
        return [-1, -1];
    }

    // find the edges
    while (nums[left - 1] === target) {
        left--;
    }
    while (nums[right + 1] === target) {
        right++;
    }
    return [left, right];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([1], 1)); // [0,0]
console.log(searchRange([1, 2, 2], 2)); // [1,2]
