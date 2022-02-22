const findMinArrowShots = (points) => {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 0;

    let prevEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        let currPoint = points[i];
        // If NO overlap then add to arrows and adjust prevEnd.
        if (prevEnd < currPoint[0]) {
            arrows++;
            prevEnd = currPoint[1];
        }
    }

    return arrows + 1;
};

console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
); // 2
