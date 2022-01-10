// BFS Tree Traversals
// https://fireship.io/courses/javascript/interview-graphs/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// In-Order (left, root, right)
const traverseInOrder = (node) => {
    if (node === null) {
        return;
    }
    traverseInOrder(node.left);

    console.log(node.value);

    traverseInOrder(node.right);
}


// Pre-Order (root, left, right)
const traversePreOrder = (node) => {
    if (node === null) {
        return;
    }
    console.log(node.value);

    traversePreOrder(node.left);

    traverseInOrder(node.right);
}

// Post-Order (left, right, root)
const traversePostOrder = (node) => {
    if (node === null) {
        return;
    }
    traversePostOrder(node.left);

    traversePostOrder(node.right);

    console.log(node.value);
}

const treeRoot = new Node(1);
treeRoot.left = new Node(2);
treeRoot.right = new Node(3);
treeRoot.left.left = new Node(4);
treeRoot.left.right = new Node(5);
console.log(`In-Order: `)
traverseInOrder(treeRoot);
console.log(`Pre-Order: `)
traversePreOrder(treeRoot);
console.log(`Post-Order: `)
traversePostOrder(treeRoot);