// DFS Binary Tree Traversal

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// In-Order (left, root, right)
const inOrder = (node) => {
    if (node === null) {
        return;
    }

    inOrder(node.left);

    console.log(node.value);

    inOrder(node.right);
}

// Pre-Order (root, left, right)
const preOrder = (node) => {
    if (node === null) {
        return;
    }

    console.log(node.value);

    preOrder(node.left);

    preOrder(node.right);
}

// Post-Order (left, right, root)
const postOrder = (node) => {
    if (node === null) {
        return;
    }

    postOrder(node.left);

    postOrder(node.right);

    console.log(node.value);
}

let rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
console.log(`In-Order`);
inOrder(rootNode);
console.log(`Pre-Order`);
preOrder(rootNode);
console.log(`Post-Order`);
postOrder(rootNode);