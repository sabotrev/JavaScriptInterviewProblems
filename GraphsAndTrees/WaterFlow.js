// https://leetcode.com/problems/pacific-atlantic-water-flow/
// https://dev.to/cod3pineapple/leetcode-417-pacific-atlantic-water-flow-javascrpt-solution-230p
// https://www.youtube.com/watch?v=s-VkcjHqkGI
const waterFlow = (heights) => {
    let numRows = heights.length;
    let numCols = heights[0].length;
    const pacificArr = Array(numRows)
        .fill()
        .map(() => Array(numCols).fill(false));
    const atlanticArr = Array(numRows)
        .fill()
        .map(() => Array(numCols).fill(false));

    const dfs = (row, col, visitedArr, prevHeight) => {
        if (
            row < 0 ||
            row >= heights.length ||
            col < 0 ||
            col >= heights[0].length ||
            heights[row][col] < prevHeight ||
            visitedArr[row][col]
        ) {
            return;
        }
        visitedArr[row][col] = true;
        dfs(row, col - 1, visitedArr, heights[row][col]); // top
        dfs(row + 1, col, visitedArr, heights[row][col]); // right
        dfs(row, col + 1, visitedArr, heights[row][col]); // bottom
        dfs(row - 1, col, visitedArr, heights[row][col]); // left

        return;
    };

    // First Row/Col
    for (let col = 0; col < numCols; col++) {
        // Pacific
        dfs(0, col, pacificArr, heights[0][col]);
        // Atlantic
        dfs(numRows - 1, col, atlanticArr, heights[numRows - 1][col]);
    }

    // Last Row/Col
    for (let row = 0; row < numRows; row++) {
        dfs(row, numCols - 1, atlanticArr, heights[row][numCols - 1]);
        dfs(row, 0, pacificArr, heights[row][0]);
    }

    console.log(pacificArr);
    console.log(atlanticArr);
    let result = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (pacificArr[i][j] && atlanticArr[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

let heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// let heights = [
//     [10, 10, 10],
//     [10, 1, 10],
//     [10, 10, 10],
// ];
// [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]
console.log(waterFlow(heights));
