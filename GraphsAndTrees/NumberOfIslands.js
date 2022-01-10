const dfs = (row, col, grid) => {
    if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[row].length - 1 || grid[row][col] === '0') {
        return 0;
    }

    grid[row][col] = '0';
    dfs(row, col - 1, grid); // top
    dfs(row + 1, col, grid); // right
    dfs(row, col + 1, grid); // bottom
    dfs(row - 1, col, grid); // left

    return 1;
};

const numberOfIslands = (grid) => {

    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let item = grid[row][col];
            if (item === '1') {
                // Run dfs
                count += dfs(row, col, grid);
            }
        }
    }
    return count;
};

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

console.log(numberOfIslands(grid));
