const getFood = (grid) => {
    let minDistance = 0;
    let queue = [];
    let rowLength = grid.length;
    let colLength = grid[0].length;
    let visited = Array(rowLength)
        .fill()
        .map(() => Array(colLength).fill(false));
    let directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    // Find the starting position
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (grid[i][j] === '*') {
                queue.push([i, j]);
                visited[i][j] = true;
                break;
            }
        }
    }

    while (queue.length > 0) {
        const queueSize = queue.length;

        for (let i = 0; i < queueSize; i++) {
            let [row, col] = queue.pop();

            // We find the closest food cell since we are doing BFS
            if (grid[row][col] === '#') {
                return minDistance;
            }

            for (let dir of directions) {
                let nextRow = row + dir[0];
                let nextCol = col + dir[1];

                // Skip visited cell and out of bound cell and obstacle cell
                if (
                    nextRow < 0 ||
                    nextCol < 0 ||
                    nextRow >= rowLength ||
                    nextCol >= colLength ||
                    grid[nextRow][nextCol] === 'X' ||
                    visited[nextRow][nextCol]
                ) {
                    continue;
                }

                // Add unvisited cell to the queue
                visited[nextRow][nextCol] = true;
                queue.unshift([nextRow, nextCol]);
            }
        }
        // We finish all cell at the current distance and going to look for cells at next distance
        minDistance++;
    }
    return -1;
};

const test1 = [
    ['X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'O', 'O', 'O', 'X'],
    ['X', 'O', 'O', '#', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X'],
];
console.log(getFood(test1));
