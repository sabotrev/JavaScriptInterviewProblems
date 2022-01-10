class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const validate = (root, min, max) => {
    if (root === null) {
        return true;
    } else if (root.val > min && root.val < max) {
        return (
            validate(root.left, min, root.val) &&
            validate(root.right, root.val, max)
        );
    } else {
        return false;
    }
};

const validateBinarySearchTree = (root) => {
    return validate(root, -Infinity, Infinity);
};

/*
    Time: O(n) -> n = number of nodes. Must visit every node.
    Space: O(n) -> n = number of nodes.
 */

// const node2 = new TreeNode(2);
// const node1 = new TreeNode(1);
// const node3 = new TreeNode(3);
// node2.left = node1;
// node2.right = node3;
// console.log(validateBinarySearchTree(node2)); // true

const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);
node5.left = node1;
node5.right = node4;
node4.left = node3;
node4.right = node6;
console.log(validateBinarySearchTree(node5)); // false
