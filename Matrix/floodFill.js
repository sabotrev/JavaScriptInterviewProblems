const floodFill = (image, sr, sc, newColor) => {
    const currentColor = image[sr][sc];

    const flood = (r, c) => {
        // Check bounds
        if (
            !(
                r >= 0 &&
                r < image.length &&
                c >= 0 &&
                c < image[0].length &&
                image[r][c] !== newColor
            )
        ) {
            return;
        }

        if (image[r][c] !== currentColor) {
            return;
        }
        image[r][c] = newColor;

        flood(r + 1, c); // top
        flood(r, c + 1); // right
        flood(r - 1, c); // bottom
        flood(r, c - 1); // left
    };

    flood(sr, sc);

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
