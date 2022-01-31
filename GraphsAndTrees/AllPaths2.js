const allPathsSourceTarget = (graph) => {
    let result = [];
    let queue = [[0]];
    const targetNode = graph.length - 1;

    while (queue.length > 0) {
        let node = queue.pop();
        let lastValueInNode = node[node.length - 1];

        // Check if last value in node equals targetNode
        if (lastValueInNode === targetNode) {
            result.push(node);
        } else {
            // If NOT, construct continue to construct all paths.
            let neighbors = graph[lastValueInNode];
            for (const neighbor of neighbors) {
                queue.push([...node, neighbor]);
            }
        }
    }
    return result;
};

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
