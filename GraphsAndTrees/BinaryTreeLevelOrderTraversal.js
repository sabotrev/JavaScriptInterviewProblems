class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const binaryTreeLevelOrderTraversal = (root) => {
    if (root === null) {
        return null;
    }
    let result = [];

    let queue = [];
    queue.unshift(root);

    while (queue.length > 0) {
        let size = queue.length;
        let currentLevel = [];
        for (let i = 0; i < size; i++) {
            let currentNode = queue.pop();
            currentLevel.push(currentNode.val);

            if (currentNode.left !== null) {
                queue.unshift(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.unshift(currentNode.right);
            }
        }
        result.push(currentLevel);
    }
    return result;
};

const node3 = new TreeNode(3);
const node9 = new TreeNode(9);
const node20 = new TreeNode(20);
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;

console.log(binaryTreeLevelOrderTraversal(node3));
