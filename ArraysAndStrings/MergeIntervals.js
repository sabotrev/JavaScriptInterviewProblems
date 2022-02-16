const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let cur = intervals[i];
        if (prev[1] >= cur[0]) {
            // Inter
            stack.push([prev[0], Math.max(prev[1], cur[1])]);
        } else {
            stack.push(prev, cur);
        }
    }
    return stack;
};

// Time Complexity: O(Nlog(N))
// Space Complexity: O(N)
console.log(
    mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
); // [[1,6],[8,10],[15,18]]
