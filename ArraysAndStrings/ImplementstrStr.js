const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;
    if (haystack.length < needle.length) return -1;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            let ii = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[ii] === needle[j]) {
                    ii++;
                } else {
                    break;
                }

                if (j === needle.length - 1) {
                    return i;
                }
            }
        }
    }

    return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('', ''));
