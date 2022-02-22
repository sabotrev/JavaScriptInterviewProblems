const eraseOverlapIntervals = (intervals) => {
    let count = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    let prevInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let currInterval = intervals[i];
        // Check if overlap.
        if (prevInterval[1] > currInterval[0]) {
            count++;
            // Remove an interval
            if (prevInterval[1] > currInterval[1]) {
                prevInterval = currInterval;
            }
        } else {
            prevInterval = currInterval;
        }
    }

    return count;
};

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ])
); // 1, [1,3]

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
    ])
); // 2

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [2, 3],
    ])
); // 0

console.log(
    eraseOverlapIntervals([
        [0, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
    ])
); // 2
