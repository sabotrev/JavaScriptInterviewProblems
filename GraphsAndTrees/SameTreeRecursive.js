class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const isSameTree = (p, q) => {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};

// const tree1Node1 = new TreeNode(1);
// const tree1node2 = new TreeNode(2);
// const tree1node3 = new TreeNode(3);
// tree1Node1.left = tree1node2;
// tree1Node1.right = tree1node3;
//
// const tree2Node1 = new TreeNode(1);
// const tree2node2 = new TreeNode(2);
// const tree2node3 = new TreeNode(3);
// tree2Node1.left = tree2node2;
// tree2Node1.right = tree2node3;

const tree1Node1 = new TreeNode(1);
const tree1node2 = new TreeNode(2);
tree1Node1.left = tree1node2;

const tree2Node1 = new TreeNode(1);
const tree2node2 = new TreeNode(2);
tree2Node1.right = tree2node2;

console.log(isSameTree(tree1Node1, tree2Node1));
