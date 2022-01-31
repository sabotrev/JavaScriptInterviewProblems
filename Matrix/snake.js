let snake = (r, c) => {
    let top = 0;
    let left = 0;
    let right = c - 1;
    let bottom = r;
    let result = [...Array(r)].map((_) => new Array(c).fill(0));
    let count = 1;

    while (left <= right && top <= bottom) {
        // Top to bottom
        for (let i = top; i < bottom; i++) {
            result[i][left] = count;
            count++;
        }
        left++;

        if (left <= result) {
            // Bottom to top
            for (let i = bottom - 1; i >= top; i--) {
                result[i][left] = count;
                count++;
            }
            left++;
        }
    }
    return result;
};

console.log(snake(4, 5));
/*
[
  [ 1, 5, 9, 13, 17 ],
  [ 2, 6, 10, 14, 18 ],
  [ 3, 7, 11, 15, 19 ],
  [ 4, 8, 12, 16, 20 ]
]

 */
