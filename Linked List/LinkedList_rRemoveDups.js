class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    constructor(headNode) {
        this.headNode = headNode;
    }

    removeDups() {
        let table = {};
        let node = this.headNode;
        let previous = null;
        while (node !== null) {

            if (table[node.value]) {
                // We have a duplicate
                // Set previous node.next to node.next... i.e. [3].next to [1].next's value (which here is null)
                previous.next = node.next
            } else {
                // Add to table
                table[node.value] = true;
                // Set previous to current for next iteration
                previous = node;
            }
            node = node.next;
        }
        return this.headNode;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
const newLL = new LL(node1);
console.log(newLL.removeDups());