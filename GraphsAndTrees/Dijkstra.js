// https://dev.to/maikomiyazaki/completed-javascript-data-structure-course-and-here-is-what-i-learned-about-graph-dijkstra-algorithm-57n8
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add node/vertex
    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, new Map());
        }
    }
    addEdge(vert1, vert2, weight) {
        const node1Map = this.adjacencyList.get(vert1);
        const node2Map = this.adjacencyList.get(vert2);
        node1Map.set(vert2, weight);
        node2Map.set(vert1, weight);
    }

    dijkstras(start, finish) {
        // List1
        const costFromStartTo = {};
        // List2
        const priorityQueue = new PriorityQueue();
        // List3
        const prev = {};

        let current;
        let result = [];
        for (let [vert, edge] of this.adjacencyList) {
            if (vert === start) {
                costFromStartTo[vert] = 0;
                priorityQueue.enqueue(vert, 0);
            } else {
                costFromStartTo[vert] = Infinity;
            }
            prev[vert] = null;
        }

        while (priorityQueue.values.length) {
            current = priorityQueue.dequeue().val;
            if (current === finish) {
                // Done
                while (prev[current]) {
                    result.push(current);
                    current = prev[current];
                }
                break;
            } else {
                for (let neighbor of this.adjacencyList.get(current).keys()) {
                    console.log(neighbor);
                    let costToNeighbor =
                        costFromStartTo[current] +
                        this.adjacencyList.get(current).get(neighbor);
                    if (costToNeighbor < costFromStartTo[neighbor]) {
                        costFromStartTo[neighbor] = costToNeighbor;
                        prev[neighbor] = current;
                        priorityQueue.enqueue(neighbor, costToNeighbor);
                    }
                }
            }
        }
        console.log(costFromStartTo);
        console.log(priorityQueue);
        console.log(prev);
        return result.concat(current).reverse();
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let g = new Graph();
g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');
g.addNode('G');

g.addEdge('A', 'C', 100);
g.addEdge('A', 'B', 3);
g.addEdge('A', 'D', 4);
g.addEdge('D', 'C', 3);
g.addEdge('D', 'E', 8);
g.addEdge('E', 'F', 10);
g.addEdge('B', 'G', 9);
g.addEdge('E', 'G', 50);

console.log(g.dijkstras('A', 'C'));
