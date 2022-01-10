class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const mergeTwoLists = (l1, l2) => {
//     if (l1 === null) {
//         return l2;
//     }
//     if (l2 === null) {
//         return l1;
//     }
//
//     const head = l1.val < l2.val ? l1 : l2;
//
//     if (l1.val < l2.val) {
//         head.next = mergeTwoLists(l1.next, l2);
//     } else {
//         head.next = mergeTwoLists(l1, l2.next);
//     }
//
//     return head;
// };

const mergeTwoLists = (l1, l2) => {
    let dummyNode = new ListNode(0);
    let head = dummyNode;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            dummyNode.next = l1;
            l1 = l1.next;
        } else {
            dummyNode.next = l2;
            l2 = l2.next;
        }
        dummyNode = dummyNode.next;
    }

    if (l1) {
        dummyNode.next = l1;
    } else {
        dummyNode.next = l2;
    }

    return head.next;
};

const listNode1_1 = new ListNode(1);
const listNode1_2 = new ListNode(2);
const listNode1_4 = new ListNode(4);
listNode1_1.next = listNode1_2;
listNode1_2.next = listNode1_4;

const listNode2_1 = new ListNode(1);
const listNode2_3 = new ListNode(3);
const listNode2_4 = new ListNode(4);
listNode2_1.next = listNode2_3;
listNode2_3.next = listNode2_4;

console.log(mergeTwoLists(listNode1_1, listNode2_1));
