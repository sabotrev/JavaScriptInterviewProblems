class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    print() {
        let currentNode = this.head;
        let outputString = '';
        while (currentNode.next !== null) {
            outputString += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        outputString += `${currentNode.value}`;
        console.log(outputString);
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtTail(value) {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);

        return this.head;
    }

    insertAtHead(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;

        return this.head;
    }

    deleteValue(value) {
        if (this.isEmpty()) {
            return false;
        }

        let currentNode = this.head;

        if (currentNode.value === value) {
            this.head = this.head.next;
            return true;
        }

        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                return true;
            }

            currentNode = currentNode.next;
        }

        return false;
    }

    findMid() {
        let currentNode = this.head;
        let runner = this.head;

        while (
            currentNode.next !== null &&
            runner.next !== null &&
            runner.next.next !== null
        ) {
            currentNode = currentNode.next;
            runner = runner.next.next;
        }

        return currentNode;
    }
}

const ll = new LinkedList();
ll.insertAtHead(1);
ll.insertAtHead(2);
ll.print();
ll.insertAtTail(3);
ll.print();
ll.insertAtHead(4);
ll.insertAtHead(5);
// ll.deleteValue(1);
ll.print();
console.log(ll.findMid());
