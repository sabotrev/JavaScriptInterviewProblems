// https://leetcode.com/discuss/interview-question/1741735/Amazon-or-Hackerrank-OA-or-SDE-2-or-February-2022

const findImbalance = (arr) => {
    let subArrays = [];

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (j + 1 - (i - 1) === arr.length) {
                continue;
            }
            let subArray = arr.slice(i - 1, j + 1);
            subArrays.push(subArray);
        }
    }
    let imbalanceCount = 0;
    for (const subArray of subArrays) {
        subArray.sort((a, b) => a - b);
        for (let i = 1; i < subArray.length; i++) {
            let diff = Math.abs(subArray[i - 1] - subArray[i]);
            if (diff > 1) {
                imbalanceCount++;
                break;
            }
        }
    }
    return imbalanceCount;
};

console.log(findImbalance([4, 1, 3, 2]));
