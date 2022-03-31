/**
 * @param {number} n
 */
class TicTacToe {
    constructor(n) {
        this.n = n;
        this.board = new Array(n).fill().map((_) => new Array(n).fill(false));
    }
    // 1 -> X
    // 2 -> O

    // Array.prototype.every
    checkWinner() {
        // Check horizontal
        for (let row = 0; row < this.n; row++) {
            if (this.board[row].every((letter) => letter === 'X')) {
                return 1;
            } else if (this.board[row].every((letter) => letter === 'O')) {
                return 2;
            }
        }

        // Check vertical
        for (let row = 0; row < this.n; row++) {
            const colArray = [];
            for (let col = 0; col < this.n; col++) {
                colArray.push(this.board[col][row]);
            }
            if (colArray.every((letter) => letter === 'X')) {
                return 1;
            } else if (colArray.every((letter) => letter === 'O')) {
                return 2;
            }
        }

        // Check vertical
        const vertArray1 = [];
        for (let i = 0; i < this.n; i++) {
            vertArray1.push(this.board[i][i]);
        }
        if (vertArray1.every((letter) => letter === 'X')) {
            return 1;
        } else if (vertArray1.every((letter) => letter === 'O')) {
            return 2;
        }

        const vertArray2 = [];
        for (let i = 0; i < this.n; i++) {
            vertArray2.push(this.board[i][this.n - i - 1]);
        }
        if (vertArray2.every((letter) => letter === 'X')) {
            return 1;
        } else if (vertArray2.every((letter) => letter === 'O')) {
            return 2;
        }

        return 0;
    }
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    if (!this.board[row][col]) {
        // Then valid move
        // 1 -> X
        // 2 -> O
        if (player === 1) {
            this.board[row][col] = 'X';
        }
        if (player === 2) {
            this.board[row][col] = 'O';
        }

        const winner = this.checkWinner();
        if (winner) {
            return winner;
        } else {
            return 0;
        }
    }
};

const ticTacToe = new TicTacToe(2);
ticTacToe.move(0, 0, 1);
ticTacToe.move(0, 2, 2);
ticTacToe.move(2, 2, 1);
ticTacToe.move(1, 1, 2);
ticTacToe.move(2, 0, 1);
ticTacToe.move(1, 0, 2);
ticTacToe.move(2, 1, 1);
console.log(ticTacToe.board);
