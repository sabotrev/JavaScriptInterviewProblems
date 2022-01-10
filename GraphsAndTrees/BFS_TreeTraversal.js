// DFS Tree Traversal
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) {
        return [];
    }

    let result = [];
    // let queue = [root];
    let queue = [];
    queue.unshift(root);

    while (queue.length != 0) {
        let subarr = [];
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let node = queue.pop();
            subarr.push(node.value);

            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                queue.unshift(node.right);
            }
        }
        result.push(subarr);
    }
    return result;
}

/**
 *          1
 *        /   \
 *       2     3
 *      / \
 *     4   5
 */

let treeRoot = new Node(1);
treeRoot.left = new Node(2);
treeRoot.right = new Node(3);
treeRoot.left.left = new Node(4);
treeRoot.left.right = new Node(5);
console.log(levelOrderTraversal(treeRoot));