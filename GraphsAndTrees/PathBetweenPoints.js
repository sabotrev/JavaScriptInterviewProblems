// https://buttondown.email/cassidoo/archive/i-love-to-laugh-betty-white/

Array.prototype.findName = function (name) {
    return this.find((item) => item.name === name);
};
const pathBetweenPoints = (listOfPoints, start, finish) => {
    let queue = [];
    let result = [];
    queue.unshift([start]);
    let visited = new Set();

    while (queue.length) {
        let currentNode = queue.pop();
        let lastNode = currentNode[currentNode.length - 1];
        if (lastNode === finish) {
            result.push(currentNode);
        } else {
            if (visited.has(lastNode)) {
                continue;
            }
            visited.add(lastNode);
            let connections = listOfPoints.findName(lastNode).connections;

            for (let neighbor of connections) {
                queue.unshift([...currentNode, neighbor]);
            }
        }
    }
    return result;
};

const listOfPoints = [
    { name: 'A', connections: ['B', 'C'] },
    { name: 'B', connections: ['A', 'E'] },
    { name: 'C', connections: ['A', 'D'] },
    { name: 'D', connections: ['C'] },
    { name: 'E', connections: ['B', 'F'] },
    { name: 'F', connections: ['E'] },
];

console.log(pathBetweenPoints(listOfPoints, 'A', 'F')); // [ [ 'A', 'B', 'E', 'F' ] ]
console.log(pathBetweenPoints(listOfPoints, 'D', 'B')); // [ [ 'D', 'C', 'A', 'B' ] ]
