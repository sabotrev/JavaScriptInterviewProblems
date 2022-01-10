class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(headNode) {
        this.headNode = headNode;
    }

    // O(n) time & O(1) space
    appendToTail(tailValue) {
        let tail = new ListNode(tailValue);
        let node = this.headNode;
        while(node.next !== null) {
            node = node.next;
        }
        node.next = tail;
    }

    // O(n) time & O(1) space
    reverse() {
        let node = this.headNode;
        let previous = null;
        let temp = null;

        while(node.next !== null) {
            temp = node.next; // next

            node.next = previous;

            previous = node;
            node = temp;
        }
        return previous; // new head
    }

    // O(n) time & O(n) space
    reverseRecursively(head) {
        // Exit condition / base case
        if (head === null || head.next === null) {
            return head;
        }
        let newHead = this.reverseRecursively(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
let ll = new LinkedList(node1);
// ll.appendToTail(4);
// console.log(ll.headNode.next.next.next); // Return 4

// console.log(ll.reverse());
console.log(ll.reverseRecursively(ll.headNode));

/**
 * https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
 * http://cslibrary.stanford.edu/105/LinkedListProblems.pdf
 * https://www.geeksforgeeks.org/top-20-linked-list-interview-question/
 * https://www.interviewbit.com/courses/programming/topics/linked-lists/
 * https://wsvincent.com/javascript-reverse-linked-list/
 */