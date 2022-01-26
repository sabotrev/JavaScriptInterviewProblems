const productExceptSelf = (nums) => {
    let n = nums.length;
    // Base case
    if (n === 1) {
        return;
    }

    // Initialize memory to all arrays
    let left = new Array(n);
    let right = new Array(n);
    let prod = new Array(n);

    /* Left most element of left array
    is always 1 */
    left[0] = 1;

    /* Rightmost most element of right
    array is always 1 */
    right[n - 1] = 1;

    /* Construct the left array */
    for (let i = 1; i < n; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    /* Construct the right array */
    for (let j = n - 2; j >= 0; j--) {
        right[j] = nums[j + 1] * right[j + 1];
    }

    /* Construct the product array using
    left[] and right[] */
    for (let i = 0; i < n; i++) {
        prod[i] = left[i] * right[i];
    }

    return prod;
};

// Left = [ 1, 1, 2, 6 ]
// Right = [ 24, 12, 4, 1 ]
console.log(productExceptSelf([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([1, -1]));
// console.log(productExceptSelf([4, 3, 2, 1, 2]));
