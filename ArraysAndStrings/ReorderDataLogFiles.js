String.prototype.isLetter = function () {
    return this.toLowerCase() !== this.toUpperCase();
};

const reorderLogFiles = (logs) => {
    let reorderedLogs = [...logs];
    reorderedLogs.sort((a, b) => {
        let aIsLetterLog = a.at(-1).isLetter();
        let bIsLetterLog = b.at(-1).isLetter();

        // If both letter log then sort by contents/identifiers
        if (aIsLetterLog && bIsLetterLog) {
            let aContents = a.split(' ').slice(1);
            let bContents = b.split(' ').slice(1);
            if (aContents > bContents) {
                return 1;
            } else if (aContents < bContents) {
                return -1;
            } else {
                let aIdentifier = a.split(' ').slice(0, 1);
                let bIdentifier = b.split(' ').slice(0, 1);
                if (aIdentifier > bIdentifier) {
                    return 1;
                } else if (aIdentifier < bIdentifier) {
                    return -1;
                } else {
                    return 0;
                }
            }
        } else if (aIsLetterLog || bIsLetterLog) {
            // Sort letter log first
            if (aIsLetterLog) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return 0;
        }
    });
    return reorderedLogs;
};

/*
    Time: O(m * n * log(n)) where m is length of log and n is logs in list
    Space:  O(m * log(n))
 */

console.log(
    reorderLogFiles([
        'dig1 8 1 5 1',
        'let1 art can',
        'dig2 3 6',
        'let2 own kit dig',
        'let3 art zero',
    ])
);
