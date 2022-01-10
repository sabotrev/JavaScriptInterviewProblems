// https://www.programcreek.com/2014/05/leetcode-meeting-rooms-ii-java/
const meetingRooms2 = (intervals) => {
    if (intervals == null || intervals.length === 0) {
        return 0;
    }

    // Sort by start time going from low to high.
    let sortedArray = intervals.sort((a, b) => a[0] - b[0]);
    console.log(sortedArray);
    let queue = []; // add: unshift() & poll: pop()
    queue.unshift(sortedArray[0][1]);
    let roomCount = 0;

    for (let i = 1; i < sortedArray.length; i++) {
        let interval = sortedArray[i];
        let intervalStart = interval[0];
        let intervalEnd = queue[queue.length - 1];
        if (intervalStart >= intervalEnd) {
            queue.pop();
        } else {
            roomCount++;
        }
        queue.unshift(interval[1]);
    }
    return roomCount;
};

/*
    Time Complexity: O(n log(n))
 */
console.log(
    meetingRooms2([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
); // 2
// console.log(meetingRooms2([[2, 15],[36, 45],[9, 29],[16, 23],[4, 9]])); // 2
