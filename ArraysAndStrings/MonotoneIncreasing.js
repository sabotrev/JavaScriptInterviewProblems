const minFlipsMonoIncr = (s) => {
    if (
        [...s].every((num) => num === '0') ||
        [...s].every((num) => num === '1')
    ) {
        return 0;
    }

    let prefixOnes = new Array(s.length + 1).fill(0);
    let postfixZeroes = new Array(s.length + 1).fill(0);
    for (let i = 0; i < s.length; i++) {
        prefixOnes[i + 1] = prefixOnes[i] + (s[i] === '1' ? 1 : 0);
    }
    for (let i = s.length - 1; i >= 0; i--) {
        postfixZeroes[i] = postfixZeroes[i + 1] + (s[i] === '0' ? 1 : 0);
    }

    console.log(prefixOnes);
    console.log(postfixZeroes);
    let result = Infinity;
    for (let i = 0; i <= s.length; i++) {
        result = Math.min(result, prefixOnes[i] + postfixZeroes[i]);
    }

    return result;
};

// console.log(minFlipsMonoIncr('010110')); // 2
console.log(minFlipsMonoIncr('00011000')); // 2
