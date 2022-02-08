class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let newList = new ListNode(0);
    let head = newList;
    while (l1 !== null || l2 !== null) {
        let l1Val = 0;
        if (l1 !== null) {
            l1Val = l1.val;
            l1 = l1.next;
        }
        let l2Val = 0;
        if (l2 !== null) {
            l2Val = l2.val;
            l2 = l2.next;
        }
        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);

        head.next = new ListNode(sum % 10);
        head = head.next;
    }

    if (carry > 0) {
        head.next = new ListNode(carry);
    }

    return newList.next;
};

const node12 = new ListNode(2);
const node14 = new ListNode(4);
const node13 = new ListNode(3);
node12.next = node14;
node14.next = node13;

const node25 = new ListNode(5);
const node26 = new ListNode(6);
const node24 = new ListNode(4);
node25.next = node26;
node26.next = node24;

console.log(addTwoNumbers(node12, node25));
