const LCAofBT = (root, p, q) => {
    const postOrderDFS = (node) => {
        //    Left -> Right -> Root
        if (node === null) {
            return false;
        }

        if (node.val === p.val || node.val === q.val) {
            return node;
        }

        const left = postOrderDFS(node.left);
        const right = postOrderDFS(node.right);

        if (left && right) {
            return node;
        } else {
            return left || right;
        }
    };

    return postOrderDFS(root, p, q);
};
