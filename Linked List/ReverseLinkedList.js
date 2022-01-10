class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const reverseLinkedList = (headNode) => {
    if (headNode === null) {
        return;
    }
    let node = headNode;
    let previous = null;
    let temp = null;

    while (node) {
        temp = node.next;

        node.next = previous;

        previous = node;
        node = temp;
    }

    return previous;
}

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
 */

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
// console.log(node1);
console.log(reverseLinkedList(node1));