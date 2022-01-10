class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const maximumDepthOfBinaryTree = (root) => {
    if (root === null) {
        return 0;
    }
    console.log(`left: ${root.left?.val}`);
    console.log(`right: ${root.right?.val}`);
    const left = maximumDepthOfBinaryTree(root.left);
    const right = maximumDepthOfBinaryTree(root.right);

    return Math.max(left, right) + 1;
};

/*
    Time: O(n)
    Space: O(n)
 */

const root = [3, 9, 20, null, null, 15, 7];
const node1 = new TreeNode(1);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node17 = new TreeNode(17);
node1.left = node9;
node1.right = node20;
node20.left = node15;
node20.right = node17;
console.log(maximumDepthOfBinaryTree(node1));
