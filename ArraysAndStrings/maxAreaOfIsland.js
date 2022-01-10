// https://leetcode.com/problems/max-area-of-island/
const countSize = (grid, row, col) => {
    if (
        row < 0 ||
        col < 0 ||
        row >= grid.length ||
        col >= grid[row].length ||
        grid[row][col] === 0
    ) {
        return 0;
    }

    grid[row][col] = 0;
    let count = 1;
    count += countSize(grid, row, col + 1); // top
    count += countSize(grid, row + 1, col); // right
    count += countSize(grid, row, col - 1); // bottom
    count += countSize(grid, row - 1, col); // left

    return count;
};

const maxAreaOfIsland = (grid) => {
    let maxSize = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const item = grid[row][col];
            if (item === 1) {
                // Count size
                let temp = countSize(grid, row, col);
                if (temp > maxSize) {
                    maxSize = temp;
                }
            }
        }
    }
    return maxSize;
};

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));
