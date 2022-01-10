function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
    if (root === null) {
        return root;
    }

    const tempLeft = root.left;
    const tempRight = root.right;
    // Swap
    root.left = tempRight;
    root.right = tempLeft;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/**
 *             4                    4
 *            / \                  / \
 *          2     7     ==>      7     2
 *         / \   / \            / \   / \
 *        1   3 6   9          9   6 3   1
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 */

const tn1 = new TreeNode(4);
const tn2 = new TreeNode(2);
const tn3 = new TreeNode(7);
const tn4 = new TreeNode(1);
const tn5 = new TreeNode(3);
const tn6 = new TreeNode(6);
const tn7 = new TreeNode(9);

tn1.left = tn2;
tn1.right = tn3;
tn2.left = tn4;
tn2.right = tn5;
tn3.left = tn6;
tn3.right = tn7;

/**
 * Time complexity : O(n).
 * Space complexity : O(n).
 */

console.log(invertTree(tn1));
