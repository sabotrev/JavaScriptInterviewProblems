const longestCommonPrefix = (strs) => {
    let output = '';
    strs.sort((a, b) => a.length - b.length);
    let mainStr = strs[0];
    strs = strs.slice(1);

    for (let i = mainStr.length; i >= 0; i--) {
        let tempStr = mainStr.substring(0, i);

        let flag = false;
        for (const word of strs) {
            if (!word.startsWith(tempStr)) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            // Save longest
            if (tempStr.length > output.length) {
                output = tempStr;
            }
        }
    }

    return output;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['reflower', 'flow', 'flight'])); // ''
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
