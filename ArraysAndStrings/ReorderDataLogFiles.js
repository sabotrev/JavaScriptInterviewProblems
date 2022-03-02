String.prototype.isLetter = function () {
    return this.toLowerCase() !== this.toUpperCase();
};

const reorderLogFiles = (logs) => {
    return logs.sort((a, b) => {
        let aArr = a.split(' ');
        let bArr = b.split(' ');
        let aIsLetter = aArr[1].isLetter();
        let bIsLetter = bArr[1].isLetter();
        // If types are the same
        if (aIsLetter && bIsLetter) {
            // Compare by
            let subA = aArr.slice(1);
            let subB = bArr.slice(1);
            let stringA = subA.join(' ');
            let stringB = subB.join(' ');
            if (stringA > stringB) {
                return 1;
            } else if (stringA < stringB) {
                return -1;
            } else {
                let tempA = aArr[0];
                let tempB = bArr[0];
                if (tempA > tempB) {
                    return 1;
                } else if (tempA < tempB) {
                    return -1;
                }
                return 0;
            }
        } else if (!aIsLetter && bIsLetter) {
            return 1;
        } else if (aIsLetter && !bIsLetter) {
            return -1;
        } else {
            // Both are digits
            return 0;
        }
    });
};

console.log(
    reorderLogFiles([
        'dig1 8 1 5 1',
        'let1 art can',
        'dig2 3 6',
        'let2 own kit dig',
        'let3 art zero',
    ])
);
