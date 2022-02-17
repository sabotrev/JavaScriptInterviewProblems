function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const flatten = (root) => {
    if (root === null) {
        return root;
    }
    if (root.left === null && root.right === null) {
        return root;
    }
    // Preorder = Root, Left, Right
    let res = [];

    const preorder = (root) => {
        if (root === null) {
            return;
        }
        res.push(root);
        preorder(root.left);
        preorder(root.right);
    };
    preorder(root);

    for (let i = 0; i < res.length; i++) {
        root.left = null;
        root.right = res[i];
        root = root.right;
    }

    return root;
};
