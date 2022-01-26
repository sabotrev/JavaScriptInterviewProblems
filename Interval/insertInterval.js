const insertInterval = (intervals, newInterval) => {
    if (intervals.length === 0) {
        return [newInterval];
    }

    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];

        // If new start is greater than current end then push current end to result.
        if (newInterval[0] > interval[1]) {
            result.push(interval);
        } else if (newInterval[1] < interval[0]) {
            // If new end is less than current start then push newInterval to result.
            result.push(newInterval);
            // Since we found newIntervals place, we can add remaining intervals and return.
            return [...result, ...intervals.slice(i)];
        } else {
            // If neither of above cases are true then we have an overlap.
            // Combine newInterval with current overlap.
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }

    result.push(newInterval);

    return result;
};

console.log(insertInterval([[1, 5]], [2, 3])); // [[1,5]]

console.log(
    insertInterval(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    )
); // [[1,5],[6,9]]
console.log(
    insertInterval(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
); // [[1,2],[3,10],[12,16]]
