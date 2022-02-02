function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const maxLevelSum = (root) => {
    let queue = [root];
    let currentLevel = 1;
    let max = root.val;
    let maxLevel = 1;

    while (queue.length > 0) {
        let currentSum = 0;

        const queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            let currentNode = queue.pop();
            currentSum += currentNode.val;

            if (currentNode.left) {
                queue.unshift(currentNode.left);
            }
            if (currentNode.right) {
                queue.unshift(currentNode.right);
            }
        }

        if (currentSum > max) {
            max = currentSum;
            maxLevel = currentLevel;
        }
        currentLevel++;
    }

    return maxLevel;
};

let node1 = new TreeNode(1);
let node7 = new TreeNode(7);
let node0 = new TreeNode(0);
let node72 = new TreeNode(7);
let node8neg = new TreeNode(-8);
node1.left = node7;
node1.right = node0;
node7.left = node72;
node7.right = node8neg;

console.log(maxLevelSum(node1));
