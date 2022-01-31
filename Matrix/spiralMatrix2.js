const generateMatrix = (n) => {
    let left = 0; // x
    let top = 0; // y
    let right = n - 1; // x
    let bottom = n - 1; // y
    let count = 1;

    let result = [...Array(n)].map((_) => Array(n).fill(0));

    while (left <= right && top <= bottom) {
        // Left to right
        for (let j = left; j <= right; j++) {
            result[top][j] = count;
            count++;
        }
        top++;

        // Top to bottom
        for (let j = top; j <= bottom; j++) {
            result[j][right] = count;
            count++;
        }
        right--;

        // Right to left
        for (let j = right; j >= left; j--) {
            result[bottom][j] = count;
            count++;
        }
        bottom--;

        // Bottom to top
        for (let j = bottom; j >= top; j--) {
            result[j][left] = count;
            count++;
        }
        left++;
    }

    return result;
};

console.log(generateMatrix(3));
