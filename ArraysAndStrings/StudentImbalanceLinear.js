// https://leetcode.com/discuss/interview-question/1741735/Amazon-or-Hackerrank-OA-or-SDE-2-or-February-2022

const findImbalance = (arr) => {
    let result = 0;
    let ranks = arr.sort((a, b) => a - b);
    let num_of_ranks = ranks.length;

    for (let i = 0; i < num_of_ranks; i++) {
        if (ranks[i + 1] - ranks[i] > 1) {
            result += num_of_ranks - i - 1;
        } else if (ranks[i + 1] - ranks[i] === 1) {
            result += num_of_ranks - i - 2;
        }
    }
    return result;
};

console.log(findImbalance([4, 1, 3, 2]));
