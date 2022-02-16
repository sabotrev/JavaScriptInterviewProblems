class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reorderList = (head) => {
    let dummyHead = head;
    let runner = head.next;

    while (runner && runner.next) {
        dummyHead = dummyHead.next;
        runner = runner.next.next;
    }

    // Beginning of the 2nd half of the list.
    let secondHalf = dummyHead.next;
    // Split into two different lists.
    dummyHead.next = null;

    // Reverse second half.
    let prev = null;
    while (secondHalf !== null) {
        let temp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = temp;
    }

    // Merge 2 halves.
    secondHalf = prev; // the head of the second half is at previous.
    let firstHalf = head;

    // secondHalf is shorter so just while check secondHalf.
    while (secondHalf !== null) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        // Shift pointers.
        firstHalf = temp1;
        secondHalf = temp2;
    }
};
