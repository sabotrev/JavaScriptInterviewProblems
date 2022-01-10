const LCAofBST = (root, p, q) => {
    if (p.val < root.val && q.val > root.val) {
        return root;
    } else if (p.val > root.val && q.val > root.val) {
        return LCAofBST(root.left, p, q);
    } else {
        return LCAofBST(root.right, p, q);
    }
};
