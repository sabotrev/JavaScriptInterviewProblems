/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
    let values = new Map(); // key is index, value is value
    let index = 0;
    for (const [x, y] of points) {
        let res = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        values.set(index, res);
        index++;
    }
    let result = [];
    let sortedMap = new Map([...values.entries()].sort((a, b) => a[1] - b[1]));

    let count = 0;
    for (const [key, value] of sortedMap) {
        if (count === k) {
            break;
        }
        result.push(points[key]);
        count++;
    }

    return result;
};

console.log(
    kClosest(
        [
            [1, 3],
            [-2, 2],
        ],
        1
    )
); // [[-2,2]]
