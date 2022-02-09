const generateParentheses = (n) => {
    let result = [];

    backtracking('', n, n);

    function backtracking(temp, openCount, closedCount) {
        if (openCount === 0 && closedCount === 0) {
            result.push(temp);
        }

        if (openCount > 0) {
            backtracking(temp + '(', openCount - 1, closedCount);
        }

        if (closedCount > openCount) {
            backtracking(temp + ')', openCount, closedCount - 1);
        }
    }
    return result;
};

console.log(generateParentheses(1));
console.log(generateParentheses(3));
