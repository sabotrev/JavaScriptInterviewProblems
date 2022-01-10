class TreeNode {
    constructor(val, left, right) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}
const createMinimalTree = (nums, start, end) => {
    if (end < start) {
        return null;
    }
    let mid = Math.floor((start + end) / 2); // get the mid index
    let root = new TreeNode(nums[mid]); // make a new node
    root.left = createMinimalTree(nums, start, mid - 1); // now recursively generate left subtree
    root.right = createMinimalTree(nums, mid + 1, end); // similarly generate right subtree
    return root;
};
const minimalTree = (nums) => {
    return createMinimalTree(nums, 0, nums.length - 1);
};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(minimalTree(sortedArray));
