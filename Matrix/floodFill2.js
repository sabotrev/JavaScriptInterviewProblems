const floodFill = (image, sr, sc, newColor) => {
    let currentColor = image[sr][sc];

    const dfs = (r, c) => {
        // Base case
        if (
            r < 0 ||
            r > image.length - 1 ||
            c < 0 ||
            c > image[0].length - 1 ||
            image[r][c] !== currentColor
        ) {
            return;
        }

        image[r][c] = newColor;

        // Recursion
        dfs(r + 1, c); // top
        dfs(r, c + 1); // right
        dfs(r - 1, c); // bottom
        dfs(r, c - 1); // left
    };

    dfs(sr, sc);

    return image;
};

/*
    Time: O(m * n) or O(n) where n is the number of pixels.
    Space: O(1)
 */

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
        1,
        1,
        2
    )
);

// console.log(
//     floodFill(
//         [
//             [0, 0, 0],
//             [0, 0, 0],
//         ],
//         0,
//         0,
//         2
//     )
// );
