const maxArea = (height) => {
    let max = height[0];
    for (let i = 0; i < height.length; i++) {
        for (let j = i; j < height.length; j++) {
            // Find the min, max is irrelevant because the water will spill out.
            let min = Math.min(height[i], height[j]);
            // Min is min height (calculated above) * distance.
            max = Math.max(max, min * (j - i));
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
