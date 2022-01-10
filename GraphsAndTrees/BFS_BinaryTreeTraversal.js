// BFS Binary Tree Traversal

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const levelOrder = (rootNode) => {
    if (rootNode === null) {
        return;
    }
    let result = [];

    let queue = [];
    queue.unshift(rootNode);

    while (queue.length > 0) {
        let levelArray = [];
        let queueLength = queue.length;

        for (var i = 0; i < queueLength; i++) {
            let currentNode = queue.pop();
            levelArray.push(currentNode.value);
            
            if (currentNode.left) {
                queue.unshift(currentNode.left);
            }

            if (currentNode.right) {
                queue.unshift(currentNode.right);
            }
        }
        result.push(levelArray);
    }
    console.log(result);
}

/**
 * Time Complexity is O(n)
 * Space Complexity is O(n)
 */

let rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
levelOrder(rootNode);