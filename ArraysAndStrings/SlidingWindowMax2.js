Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.peekEnd = function () {
    return this[this.length - 1];
};

const maxSlidingWindow = (nums, k) => {
    if (k === 1) {
        return nums;
    }
    let left = 0;
    let right = 0;
    let res = [];
    let queue = [];
    while (right < nums.length) {
        let num = nums[right];
        // While smaller values exists in queue, pop them off.
        while (!queue.isEmpty() && queue.peekEnd() < num) {
            queue.pop();
        }
        queue.push(num);
        console.log(queue, 'right ', right);

        // If left is out of bounds then remove it from the window
        if (left > nums.indexOf(queue[0])) {
            // Pop from left
            queue.shift();
        }

        if (right + 1 >= k) {
            res.push(queue[0]);
            left++;
        }
        right++;
    }

    return res;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
// console.log(maxSlidingWindow([7, 2, 4], 2)); // [7,4]
// console.log(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)); // [ 7, 7, 7, 7, 7 ]
// console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([7, 2, 4], 2));
