// Programming Interviews Exposed: p. 75 Binary Tree to Heap
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTtH {
    constructor(root) {
        this.root = root;
    }

    bfs(root) {
        let result = [];

        if (root === null) {
            return result;
        }
        let queue = [];
        // Javascript unshift & pop
        queue.unshift(root);
        while (queue.length !== 0) {
            let queueLength = queue.length;

            for (var i = 0; i < queueLength; i++) {
                let node = queue.pop();
                result.push(node.value);

                if (node.left !== null) {
                    queue.unshift(node.left);
                }

                if (node.right !== null) {
                    queue.unshift(node.right);
                }
            }
        }
        return result;
    }

    // Also know as... insert level order
    arrayToMinHeap(arr, root, index) {
        if (index < arr.length) {
            let tempNode = new Node(arr[index]);
            root = tempNode;

            root.left = this.arrayToMinHeap(arr, root.left, 2 * index + 1);

            root.right = this.arrayToMinHeap(arr, root.right, 2 * index + 2);
        }
        return root;
    }

    levelOrderPrint(root, arr) {
        if (root !== null) {
            arr.push(root.value);
            this.levelOrderPrint(root.left, arr);
            this.levelOrderPrint(root.right, arr);
        }
        return arr;
    }
}

/**
 * Input:
 *             4
 *            / \
 *          2     7
 *         / \   / \
 *        1   3 6   9
 *
 */

/**
 * Output:
 *             1
 *            / \
 *          2     3
 *         / \   / \
 *        4   6 7   9
 *
 */

const tn1 = new Node(4);
const tn2 = new Node(2);
const tn3 = new Node(7);
const tn4 = new Node(1);
const tn5 = new Node(3);
const tn6 = new Node(6);
const tn7 = new Node(9);
tn1.left = tn2;
tn1.right = tn3;
tn2.left = tn4;
tn2.right = tn5;
tn3.left = tn6;
tn3.right = tn7;

const btth = new BTtH(tn1);
console.log(btth.bfs(tn1));
let treeToArray = btth.bfs(tn1);
let arrayBackToMinHeapTree = btth.arrayToMinHeap(treeToArray.sort(), tn1, 0);
console.log(arrayBackToMinHeapTree);
console.log(btth.levelOrderPrint(arrayBackToMinHeapTree, []));
