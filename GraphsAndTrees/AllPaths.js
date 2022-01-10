const allPathsSourceTarget = function (graph) {
    const result = [];
    const goalNode = graph.length - 1;
    let queue = [];
    queue.unshift([0]); // Path we are on at the start.

    while (queue.length) {
        let currentNode = queue.pop();
        let lastNode = currentNode[currentNode.length - 1];
        if (lastNode === goalNode) {
            // Does lastNode === 3?
            result.push(currentNode);
        } else {
            // Continue BFS from queue.
            let neighbors = graph[lastNode];
            for (let i = 0; i < neighbors.length; i++) {
                // Need to add multiple paths. i.e. If queue is [[0]],
                // we need to add [[0,1],[0,2]] because they represent 2 different paths.
                let neighbor = neighbors[i];
                queue.push([...currentNode, neighbor]);
            }
        }
    }
    return result;
};

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
