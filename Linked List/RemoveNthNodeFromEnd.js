class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const removeNthFromEnd = (head, n) => {
    let runner = head;
    let dummyHead = head;
    for (let i = 0; i < n; i++) {
        runner = runner.next;
    }

    if (runner === null) {
        return head.next;
    }

    while (runner.next !== null) {
        runner = runner.next;
        head = head.next;
    }
    // Remove
    head.next = head.next.next;
    return dummyHead;
};

const listNode1 = new ListNode(1);
const listNode2 = new ListNode(2);
const listNode3 = new ListNode(3);
const listNode4 = new ListNode(4);
const listNode5 = new ListNode(5);
listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;
listNode4.next = listNode5;

console.log(removeNthFromEnd(listNode1, 2));
