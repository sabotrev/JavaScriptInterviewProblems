class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const invertBinaryTree = (root) => {
    if (root === null) {
        return null;
    }

    let queue = [];
    queue.unshift(root);

    while (queue.length > 0) {
        let node = queue.pop();

        if (node !== null) {
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            queue.unshift(node.left);
            queue.unshift(node.right);
        }
    }

    return root;
};

let node4 = new TreeNode(4);
let node2 = new TreeNode(2);
let node7 = new TreeNode(7);
let node1 = new TreeNode(1);
let node3 = new TreeNode(3);
let node6 = new TreeNode(6);
let node9 = new TreeNode(9);
node4.left = node2;
node4.right = node7;
node2.left = node1;
node2.right = node3;
node7.left = node6;
node7.right = node9;

console.log(invertBinaryTree(node4));
