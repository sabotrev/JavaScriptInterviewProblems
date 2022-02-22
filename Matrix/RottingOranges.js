const orangesRotting = (grid) => {
    let res = 0;
    let freshOranges = 0;
    let queue = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                freshOranges++;
            } else if (grid[row][col] === 2) {
                queue.unshift([row, col]);
            }
        }
    }
    while (queue.length > 0 && freshOranges > 0) {
        const queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let [row, col] = queue.pop();
            // Top
            if (col - 1 >= 0 && grid[row][col - 1] === 1) {
                grid[row][col - 1] = 2;
                queue.unshift([row, col - 1]);
                freshOranges--;
            }
            // Right
            if (row + 1 < grid.length && grid[row + 1][col] === 1) {
                grid[row + 1][col] = 2;
                queue.unshift([row + 1, col]);
                freshOranges--;
            }
            // Bottom
            if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
                grid[row][col + 1] = 2;
                queue.unshift([row, col + 1]);
                freshOranges--;
            }
            // Left
            if (row - 1 >= 0 && grid[row - 1][col] === 1) {
                grid[row - 1][col] = 2;
                queue.unshift([row - 1, col]);
                freshOranges--;
            }
        }
        grid.map((row) => console.log(row));
        if (queue.length > 0) {
            res++;
        }
        console.log();
    }

    return freshOranges === 0 ? res : -1;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
); // 4
