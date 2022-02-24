// https://leetcode.com/discuss/interview-question/1639758/amazon-oa-usa

const countDecreasingRatings = (ratings) => {
    let n = ratings.length;
    if (n === 0) return 0;
    let left = 0;
    let right = 1;
    let result = 0;
    let lengthOfDecrease = 1;

    while (right < n) {
        if (ratings[left] < ratings[right]) {
            left = right;
            result += lengthOfDecrease * ((lengthOfDecrease + 1) / 2);
            lengthOfDecrease = 1;
        } else {
            lengthOfDecrease++;

            if (right === n - 1) {
                result += lengthOfDecrease * ((lengthOfDecrease + 1) / 2);
            }
        }
        right++;
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
// console.log(countDecreasingRatings([3, 2, 1])); // 6
/*
    [3],[2],[1]
    [3,2],[2,1]
    [3,2,1]
 */
