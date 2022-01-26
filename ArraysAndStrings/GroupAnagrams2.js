// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
    let result = [];
    let sortedWords = [];

    for (const str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!sortedWords.includes(sortedStr)) {
            sortedWords.push(sortedStr);
        }
    }
    for (let i = 0; i < sortedWords.length; i++) {
        result.push([]);
    }

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');
        if (sortedWords.includes(sortedStr)) {
            result[sortedWords.indexOf(sortedStr)].push(strs[i]);
        }
    }

    return result;
};

/*
    Time Complexity: O (n m log(m))
    n = number of words
    m = size of largest word
 */

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
