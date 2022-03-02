const getModifiedArray = (length, updates) => {
    let result = Array(length).fill(0);

    for (const update of updates) {
        const [start, end, value] = update;
        for (let i = start; i <= end; i++) {
            result[i] += value;
        }
    }
    return result;
};

/*
    Time: O(n * k) where n is array length and k is length of worst start-end
    Space: O(1)
 */

console.log(
    getModifiedArray(5, [
        [1, 3, 2],
        [2, 4, 3],
        [0, 2, -2],
    ])
); // [-2,0,3,5,3]
