// https://www.youtube.com/watch?v=e5tNvT1iUXs
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

const cloneGraph = (node) => {
    let queue = []; // add: unshift(node), pop: pop()
    let visited = new Map();
    queue.unshift(node);
    visited.set(node.val, new Node(node.val));

    while (queue.length > 0) {
        let node = queue.pop();

        for (let i = 0; i < node.neighbors.length; i++) {
            let neighborNode = node.neighbors[i];
            if (!visited.has(neighborNode.val)) {
                visited.set(neighborNode.val, new Node(neighborNode.val));
                queue.unshift(neighborNode);
            }
            let existingVal = visited.get(node.val);
            existingVal.neighbors.push(visited.get(neighborNode.val));
        }
    }
    console.log(visited);
    return visited.get(node.val);
};

let adjList = [
    [2, 4], // Node 1
    [1, 3], // Node 2
    [2, 4], // Node 3
    [1, 3], // Node 4
];
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];
console.log(cloneGraph(node1));
