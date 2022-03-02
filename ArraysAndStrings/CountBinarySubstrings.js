const countBinarySubstrings = (s) => {
    let groups = [];
    let t = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            t++;
        } else {
            groups.push(t);
            t = 1;
        }
    }
    groups.push(t);
    console.log(groups);

    let answer = 0;
    for (let i = 1; i < groups.length; i++) {
        answer += Math.min(groups[i - 1], groups[i]);
    }
    return answer;
};

// console.log(countBinarySubstrings('00110011'));
console.log(countBinarySubstrings('110001111000000'));
