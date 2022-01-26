const rotateImage = (matrix) => {
    const mLength = matrix.length;

    for (let i = 0; i < mLength; i++) {
        for (let j = i; j < mLength; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < mLength; i++) {
        matrix[i].reverse();
    }
    console.log(matrix);
};

console.log(
    rotateImage([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
// console.log(
//     rotateImage([
//         [5, 1, 9, 11],
//         [2, 4, 8, 10],
//         [13, 3, 6, 7],
//         [15, 14, 12, 16],
//     ])
// );
