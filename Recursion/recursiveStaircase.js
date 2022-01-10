const countPaths = (steps) => {
    if (steps < 0) {
        return 0;
    } else if (steps === 0) {
        return 1;
    }
    let memo = [1, 1, 2];
    // Use less <=. The amount of steps will always be steps + 1.
    for (let i = 3; i <= steps; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    return memo[steps];
};

console.log(countPaths(5)); // 13

/*
    countPaths(0) -> 1
    countPaths(1) -> 1
    countPaths(2) -> 2 = countPaths(0) + countPaths(1)
    countPaths(3) -> 4 = countPaths(0) + countPaths(1) + countPaths(2)
    countPaths(4) -> 7 = countPaths(1) + countPaths(2) + countPaths(3)
 */
