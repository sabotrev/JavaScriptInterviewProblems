const minFlipsMonoIncr = (s) => {
    if (
        [...s].every((num) => num === '0') ||
        [...s].every((num) => num === '1')
    ) {
        return 0;
    }
    let zeroesCount = 0;
    let onesCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            zeroesCount++;
        } else {
            onesCount++;
        }

        if (zeroesCount > onesCount) {
            // if zeroes seen after one is more than 1 better to flip the ones
            zeroesCount = onesCount;
        }
    }

    return zeroesCount;
};

console.log(minFlipsMonoIncr('010110'));
