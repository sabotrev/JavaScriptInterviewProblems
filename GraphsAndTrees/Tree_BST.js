class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root) {
        this.root = root;
    }

    print() {
        console.log(this.root);
    }

    search(value) {
        let rootNode = this.root;
        while (rootNode !== null) {
            if (rootNode.value === value) {
                return `Found ${rootNode.value}!`;
            }
            if (value < rootNode.value) {
                rootNode = rootNode.left;
            } else {
                rootNode = rootNode.right;
            }
        }
        return 'Not found.';
    }

    searchRecursive(rootNode, value) {
        if (rootNode.value === value) {
            return `Found ${rootNode.value}!`;
        }
        if (rootNode === null) {
            return 'Not found.';
        }

        if (value < rootNode.value) {
            return this.searchRecursive(rootNode.left, value);
        } else if (value > rootNode.value) {
            return this.searchRecursive(rootNode.right, value);
        }
    }

    insert(value) {
        let currentNode = this.root;
        const newNode = new Node(value);

        if (currentNode === null) {
            // Set as root
            this.root = newNode;
        }

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return;
            }

            if (value < currentNode) {
                // Assign or move down
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                }
                currentNode = currentNode.right;
            }
        }
    }

    /**
     * 3 Cases:
     *  1. The node is a leaf.
     *  2. The node has only one child.
     *  3. The node has two children.
     *
     * Best example: https://www.tutorialspoint.com/Removing-a-node-in-a-Javascript-Tree
     */
    remove(root, value) {
        if (root === null) {
            return;
        }
        const rootValue = root.value;

        if (value < rootValue) {
            root.left = this.remove(root.left, value);
            return root;
        } else if (value > rootValue) {
            root.right = this.remove(root.right, value);
            return root;
        } else {
            // Case 1: The node is a leaf.
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            // Case 2: The node has only one child.
            if (root.left === null) {
                root = root.right;
                return root;
                // return root.right;
            }
            if (root.right === null) {
                root = root.left;
                return root;
                // return root.left;
            }

            // Case 3: The node has two children.
            let currentNode = root.right;
            while (currentNode.left !== null) {
                currentNode = currentNode.left;
            }
            root.value = currentNode.value;
            root.right = this.remove(root.right, currentNode.value);

            return root;
        }
    }

    getMin(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root.value;
    }
}

/**
 *             4
 *            / \
 *          2     7
 *         / \   / \
 *        1   3 6   9
 *                   \
 *                   10
 *
 */

/**
 * Time complexity : O(log (n)).
 * Space complexity : O(n).
 */
const tn1 = new Node(4);
const tn2 = new Node(2);
const tn3 = new Node(7);
const tn4 = new Node(1);
const tn5 = new Node(3);
const tn6 = new Node(6);
const tn7 = new Node(9);
const tn8 = new Node(10);
tn1.left = tn2;
tn1.right = tn3;
tn2.left = tn4;
tn2.right = tn5;
tn3.left = tn6;
tn3.right = tn7;
tn7.right = tn8;

const bst = new BST(tn1);
// console.log(bst.search(3));
// console.log(bst.searchRecursive(tn1, 6));
// bst.insertRecusrive(11);
// bst.remove(tn1, 4);
bst.remove(tn1, 9);
bst.print();
/**
 *             6
 *            / \
 *          2     7
 *         / \     \
 *        1   3     9
 *
 */
