class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        this.adjacencyList.set(v, []);
    }

    addEdge(v, e) {
        this.adjacencyList.get(v).push(e);
        this.adjacencyList.get(e).push(v);
    }

    dfs(v, visited) {
        let nodeList = this.adjacencyList.get(v);

        if (v === null) {
            return;
        }

        visited.add(v);
        console.log(v);
        for (const item of nodeList) {
            if (!visited.has(item)) {
                this.dfs(item, visited);
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
g.dfs('A', new Set());