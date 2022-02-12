const islandPerimeter = (grid) => {
    const count = (row, col) => {
        let tempResult = 0;
        // Outter bounds
        if (row - 1 < 0) {
            tempResult++;
        }
        if (col - 1 < 0) {
            tempResult++;
        }
        if (row + 1 > grid.length - 1) {
            tempResult++;
        }
        if (col + 1 > grid[0].length - 1) {
            tempResult++;
        }

        // Top
        if (col - 1 >= 0 && grid[row][col - 1] === 0) {
            tempResult++;
        }
        // Left
        if (row - 1 >= 0 && grid[row - 1][col] === 0) {
            tempResult++;
        }

        // Bottom
        if (col + 1 < grid[0].length && grid[row][col + 1] === 0) {
            tempResult++;
        }

        // Right
        if (row + 1 < grid.length && grid[row + 1][col] === 0) {
            tempResult++;
        }

        return tempResult;
    };

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                // Check neighbors
                let temp = count(i, j);
                res += temp;
            }
        }
    }
    return res;
};

console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ])
);
