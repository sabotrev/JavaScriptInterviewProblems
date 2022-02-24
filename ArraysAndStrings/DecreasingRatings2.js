// https://leetcode.com/discuss/interview-question/1639758/amazon-oa-usa

const countDecreasingRatings = (ratings) => {
    let n = ratings.length;
    if (n === 0) return 0;
    let i = 0;
    let result = 1;

    for (let j = 1; j < n; j++) {
        if (ratings[j - 1] - ratings[j] === 1) {
            result += j - i + 1;
        } else {
            i = j;
            result += 1;
        }
    }
    return result;
};

console.log(countDecreasingRatings([4, 3, 5, 4, 3]));
/*
    [4],[3],[5],[4],[3]
    [4,3],[5,4],[4,3]
    [5,4,3]
    = 9
 */
