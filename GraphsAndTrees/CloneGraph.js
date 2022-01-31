// https://www.youtube.com/watch?v=e5tNvT1iUXs
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

const cloneGraph = (node) => {
    let visited = new Map(); // <Original node, Cloned node>
    const dfs = (node) => {
        if (node == null) {
            return node;
        }

        // If the node was already visited before.
        // Return the clone from the visited dictionary.
        if (visited.has(node)) {
            return visited.get(node);
        }

        // If NOT visited, construct the new node.
        let cloneNode = new Node(node.val, []);
        // The key is original node and value being the clone node.
        visited.set(node, cloneNode);

        // Iterate through the neighbors to generate their clones
        // and prepare a list of cloned neighbors to be added to the cloned node.
        for (const neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }
        return cloneNode;
    };
    return dfs(node);
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
