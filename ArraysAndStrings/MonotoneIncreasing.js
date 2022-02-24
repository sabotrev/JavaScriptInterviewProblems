const minFlipsMonoIncr = (s) => {
    if (
        [...s].every((num) => num === '0') ||
        [...s].every((num) => num === '1')
    ) {
        return 0;
    }

    let N = s.length;
    let prefixSum = new Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
        prefixSum[i + 1] = prefixSum[i] + (s[i] === '1' ? 1 : 0);
    }
    console.log(prefixSum);

    let ans = Infinity;
    for (let j = 0; j <= N; j++) {
        let ones = prefixSum[j];
        let zeroes = N - j - (prefixSum[N] - prefixSum[j]);
        console.log(`ones count: ${ones}, zeroes Count: ${zeroes}`);
        ans = Math.min(ones + zeroes, ans);
    }
    return ans;
};

console.log(minFlipsMonoIncr('010110'));
