class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListCycle = (head) => {
    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (slow === null || fast === null) {
            // We got to the end and did NOT find a cycle.
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
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
