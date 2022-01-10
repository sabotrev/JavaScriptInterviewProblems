const fib = (n, memo = [0,1,1]) => {
    if (memo[n]) {
        return memo[n];
    } else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    }
    return memo[n];
}
/*
    Time: O(n)
    Space: O(n)
 */
console.log(fib(5));
console.log(fib(6));
console.log(fib(99));