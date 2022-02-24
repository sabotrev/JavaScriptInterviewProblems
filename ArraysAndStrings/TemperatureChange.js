// https://leetcode.com/discuss/interview-question/1792978/Amazon-or-OA
const temperatureChange = (arr) => {
    let n = 5;

    let prefixSum = new Array(n);
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    console.log(prefixSum);

    let postfixSum = new Array(n);
    postfixSum[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        postfixSum[i] = postfixSum[i + 1] + arr[i];
    }
    console.log(postfixSum);

    let res = -Infinity;
    for (let i = 0; i < n; i++) {
        res = Math.max(res, Math.max(prefixSum[i], postfixSum[i]));
    }

    return res;
};

console.log(temperatureChange([-6, -7, -8, 1, -6]));
