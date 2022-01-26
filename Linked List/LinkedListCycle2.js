class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListCycle = (head) => {
    const visitedSet = new Set();

    while (head != null) {
        if (visitedSet.has(head)) {
            return head;
        }
        visitedSet.add(head);
        head = head.next;
    }

    return false;
};

const listNode3 = new ListNode(3);
const listNode2 = new ListNode(2);
const listNode0 = new ListNode(0);
const listNodeN4 = new ListNode(-4);
listNode3.next = listNode2;
listNode2.next = listNode0;
listNode0.next = listNodeN4;
listNodeN4.next = listNode2;

console.log(linkedListCycle(listNode3)); // true
