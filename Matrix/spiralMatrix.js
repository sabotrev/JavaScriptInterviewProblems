const spiralMatrix = (matrix) => {
    let result = [];
    let leftBound = 0;
    let rightBound = matrix[0].length - 1;
    let topBound = 0;
    let bottomBound = matrix.length - 1;

    while (leftBound <= rightBound && topBound <= bottomBound) {
        // Left to right - Increment [x][here]
        for (let i = leftBound; i <= rightBound; i++) {
            result.push(matrix[topBound][i]);
        }
        topBound++;

        // Top to bottom - Increment [here][x]
        for (let i = topBound; i <= bottomBound; i++) {
            result.push(matrix[i][rightBound]);
        }
        rightBound--;

        // Right to left - Decrement [x][here]
        if (topBound <= bottomBound) {
            for (let i = rightBound; i >= leftBound; i--) {
                result.push(matrix[bottomBound][i]);
            }
        }
        bottomBound--;

        // Bottom to top - Decrement [here][x]
        if (leftBound <= rightBound) {
            for (let i = bottomBound; i >= topBound; i--) {
                result.push(matrix[i][leftBound]);
            }
        }
        leftBound++;
    }
    return result;
};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
console.log(
    spiralMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
