const maxArea = (height) => {
    let max = Math.min(...height);
    let left = 0;
    let right = height.length - 1;

    while (left <= right) {
        let currentMin = Math.min(height[left], height[right]);

        // Get Max
        max = Math.max(max, currentMin * (right - left));

        // Move pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
