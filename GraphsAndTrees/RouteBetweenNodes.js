class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        this.adjacencyList.set(v, []);
    }

    addEdge(v, e) {
        this.adjacencyList.get(v).push(e);
    }

    getNodes() {
        return [...this.adjacencyList.keys()];
    }

    getNeighbors(v) {
        return this.adjacencyList.get(v) || [];
    }
}

const routeBetweenNodes = (graph, start, end) => {
    if (start === end) {
        return true;
    }

    for (const node of graph.getNodes()) {
        node.state = 'unvisited';
    }

    start.state = 'visited';
    const queue = [];
    queue.unshift(start);

    while (queue.length > 0) {
        const node = queue.pop();
        if (node) {
            for (const neighbor of graph.getNeighbors(node)) {
                if (neighbor.state === 'unvisited') {
                    if (neighbor === end) {
                        return true;
                    } else {
                        neighbor.state = 'visiting';
                        queue.unshift(neighbor);
                    }
                }
            }
            node.state = 'visited';
        }
    }
    return false;
};

const g = new Graph();
const vertices = ['A', 'B', 'C', 'D'];

// Adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// Adding edges
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'A');

console.log(g);
// console.log(routeBetweenNodes(g, 'A', 'C')); // true
/*
    Note: Code is same as CtCI 4.1, but does not run correctly.
 */
