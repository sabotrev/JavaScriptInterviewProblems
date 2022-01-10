const meetingRooms = (arr) => {
    let startSortedArr = arr.sort((a, b) => a[0] - b[0]);
    console.log(startSortedArr);
    for (let i = 1; i < startSortedArr.length; i++) {
        if (startSortedArr[i - 1][1] > startSortedArr[i][0]) {
            return false;
        }
    }
    return true;
};

console.log(
    meetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
); // false

console.log(
    meetingRooms([
        [7, 10],
        [2, 4],
    ])
); // true
