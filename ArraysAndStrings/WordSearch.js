const dfs = (board, row, col, word, count) => {
    if (count === word.length) {
        return true;
    }
    if (
        row < 0 ||
        col < 0 ||
        row >= board.length ||
        col >= board[row].length ||
        board[row][col] !== word[count]
    ) {
        return false;
    }

    let temp = board[row][col];
    board[row][col] = ' ';

    let isFound =
        dfs(board, row, col - 1, word, count + 1) ||
        dfs(board, row + 1, col, word, count + 1) ||
        dfs(board, row, col + 1, word, count + 1) ||
        dfs(board, row - 1, col, word, count + 1);

    board[row][col] = temp;

    return isFound;
};

/*
    Time: O(n) where n is number of cells on grid
    Space: O(n) because we're modifying in place. Worst case is when the word is equal to the entire board.
 */

const wordSearch = (board, word) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let boardLetter = board[row][col];
            let firstWordLetter = word[0];
            if (boardLetter === firstWordLetter) {
                // Search dfs
                if (dfs(board, row, col, word, 0)) {
                    return true;
                }
            }
        }
    }
    return false;
};

let board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    word = 'ABCCED';
console.log(wordSearch(board, word)); // true

board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
];
word = 'SEE';
console.log(wordSearch(board, word)); // true

board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
];
word = 'ABCB';
console.log(wordSearch(board, word)); // false
