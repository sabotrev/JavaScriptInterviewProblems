class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // addVertex(v)
    // addEdge(v, w)
    // printGraph()
 
    // bfs(v)
    // dfs(v)

    addVertex(v) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
    }

    addEdge(v, e) {
        this.adjacencyList.get(v).push(e);
        this.adjacencyList.get(e).push(v);
    }

    printGraph() {
        var keys = this.adjacencyList.keys();
        for (var i of keys) {
            var values = this.adjacencyList.get(i);
            var conc = "";
            for (var j of values) {
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }

    bfsTraversal(v) {
        /**
         * Enqueue (add): unshift(v)
         * Dequeue (remove): pop()
         */
        let queue = [];
        let visited = new Set();

        queue.unshift(v);

        while (queue.length > 0) {
            const node = queue.pop();
            const list = this.adjacencyList.get(node);
            visited.add(v);
            console.log(node);
            for (const item of list) {
                if (!visited.has(item)) {
                    visited.add(item);
                    queue.unshift(item);
                }
            }
        }
    }

}

var g = new Graph();
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// Adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// Adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

/**
A -> B D E 
B -> A C 
C -> B E F 
D -> A E 
E -> A D F C 
F -> E C 
 */

g.printGraph();
g.bfsTraversal('A');