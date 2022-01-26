// https://www.programcreek.com/2014/05/leetcode-meeting-rooms-ii-java/
const meetingRooms2 = (intervals) => {
    if (intervals == null || intervals.length === 0) {
        return 0;
    }
    if (intervals.length === 1) {
        return 1;
    }
    // Sort intervals by start date
    intervals.sort((a, b) => a[0] - b[0]);

    let rooms = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let room = getEarliestRoom(rooms);
        let current = intervals[i];

        // If the room ends before the current interval starts, use the room and update the room end time to current
        if (room[1] <= current[0]) {
            room[1] = current[1];
        } else {
            //allocate a room
            rooms.push(current);
        }
    }

    return rooms.length;

    function getEarliestRoom(r) {
        //returns the room that ends first
        r.sort((a, b) => a[1] - b[1]);
        return r[0];
    }
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
console.log(
    meetingRooms2([
        [2, 15],
        [36, 45],
        [9, 29],
        [16, 23],
        [4, 9],
    ])
); // 2
