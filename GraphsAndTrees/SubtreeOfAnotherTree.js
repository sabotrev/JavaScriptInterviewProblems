class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const isSameTree = (root, subroot) => {
    if (root === null || subroot === null) {
        return root === null && subroot === null;
    } else if (root.val === subroot.val) {
        return (
            isSameTree(root.left, subroot.left) &&
            isSameTree(root.right, subroot.right)
        );
    } else {
        return false;
    }
};

const isSubTree = (root, subroot) => {
    if (root === null) {
        return false;
    } else if (isSameTree(root, subroot)) {
        return true;
    } else {
        return isSubTree(root.left, subroot) || isSubTree(root.right, subroot);
    }
};

/*
    Time: O(m * n) where m = nodes in root, n = nodes in subroot
    Space: Minimum between m * n
 */

const root3 = new TreeNode(3);
const root4 = new TreeNode(4);
const root5 = new TreeNode(5);
const root1 = new TreeNode(1);
const root2 = new TreeNode(2);
root3.left = root4;
root3.right = root5;
root4.left = root1;
root4.right = root2;

const subroot4 = new TreeNode(4);
const subroot1 = new TreeNode(1);
const subroot2 = new TreeNode(2);
subroot4.left = subroot1;
subroot4.right = subroot2;

console.log(isSubTree(root3, subroot4));
