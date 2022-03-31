Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.peekEnd = function () {
    return this[this.length - 1];
};

const maxSlidingWindow = (nums, k) => {
    const queue = []; // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (queue && nums[queue.peekEnd()] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        console.log(queue);
        // // remove first element if it's outside the window
        if (queue[0] === i - k) {
            queue.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[queue[0]]);
        }
    }
    return res;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
// console.log(maxSlidingWindow([7, 2, 4], 2)); // [7,4]
console.log(maxSlidingWindow([1, 3, 2, 5, 8, 7], 3)); // [3,5,8,8]
// console.log(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5));
