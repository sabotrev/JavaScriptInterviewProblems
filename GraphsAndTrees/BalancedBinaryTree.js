class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const balancedBinaryTree = (root) => {
    let count = 0;
    if (root === null) {
        return true;
    }
    let flag = true;

    const getHeight = (node) => {
        if (node === null) {
            return 0;
        }
        let left = getHeight(node.left);
        let right = getHeight(node.right);
        count++;

        if (Math.abs(left - right) > 1) {
            flag = false;
        }

        return Math.max(left, right) + 1;
    };

    getHeight(root);
    console.log(count);
    return flag;
};

/*
    Time: O(n)
    Space: O(n)
 */

const node1_3 = new TreeNode(3);
const node1_9 = new TreeNode(9);
const node1_20 = new TreeNode(20);
const node1_15 = new TreeNode(15);
const node1_7 = new TreeNode(7);
node1_3.left = node1_9;
node1_3.right = node1_20;
node1_20.left = node1_15;
node1_20.right = node1_7;

console.log(balancedBinaryTree(node1_3)); // true

// const node1_12 = new TreeNode(12);
// node1_7.left = node1_12;
// console.log(balancedBinaryTree(node1_3)); // false
