class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(headNode) {
        this.headNode = headNode;
    }

    removeKthToLast(k) {
        let runnerNode = this.headNode;
        let currentNode = this.headNode;

        for (var i = 0; i < k; i++) {
            if (runnerNode === null) {
                return null;
            }
            runnerNode = runnerNode.next;
        }

        while(runnerNode !== null) {
            runnerNode = runnerNode.next;
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);
const ll = new LinkedList(node1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(ll.removeKthToLast(5));