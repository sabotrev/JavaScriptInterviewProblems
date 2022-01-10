const minDepth = function (root) {
    if (root === null) {
        return 0;
    }

    // If the left node is empty DFS into right node
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    // If the right node is empty DFS into left node
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }

    // If neither left nor right nodes are empty, find the minium of the each DFS traversal
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
