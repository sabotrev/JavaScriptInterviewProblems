class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
const buildTree = (preorder, inorder) => {
    if (
        preorder === null ||
        preorder.length === 0 ||
        inorder === null ||
        inorder.length === 0
    ) {
        return null;
    }

    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
