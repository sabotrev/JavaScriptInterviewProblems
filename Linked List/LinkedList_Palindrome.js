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

    reverse(node) {
        let previous = null;
        let temp = null;

        while (node !== null) {
            temp = node.next;

            node.next = previous;

            previous = node;
            node = temp;
        }
        return previous;
    }

    isPalindrome(one, two) {
        while(one !== null && two !== null) {
            console.log(two.value);
            if (one.value !== two.value) {
                return false;
            }
            one = one.next;
            two = two.next;
        }
        return one === null && two === null;
    }
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(4);
const node3 = new LinkedListNode(4);
const node4 = new LinkedListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
const ll = new LinkedList(node1);

const palNode1 = new LinkedListNode(1);
const palNode2 = new LinkedListNode(4);
const palNode3 = new LinkedListNode(4);
const palNode4 = new LinkedListNode(1);
palNode1.next = palNode2;
palNode2.next = palNode3;
palNode3.next = palNode4;
const pal = new LinkedList(palNode1);
const reversedll = ll.reverse(palNode1);

console.log(ll.isPalindrome(node1, reversedll));