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

        return visitedArr;
    };

    // Pacific
    for (let row = 0; row < heights.length; row++) {
        dfs(row, 0, pacificArr, heights[row][0]);
        dfs(0, row, pacificArr, heights[0][row]);
    }
    let heightsLength = heights.length;
    // Atlantic
    for (let col = 0; col < heightsLength; col++) {
        dfs(
            heightsLength - 1,
            col,
            atlanticArr,
            heights[heightsLength - 1][col]
        );
        dfs(
            col,
            heightsLength - 1,
            atlanticArr,
            heights[col][heightsLength - 1]
        );
    }

    let result = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (pacificArr[i][j] === atlanticArr[i][j]) {
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
console.log(waterFlow(heights));
