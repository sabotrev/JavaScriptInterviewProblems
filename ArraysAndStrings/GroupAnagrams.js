// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i];
        sorted = [...sorted].sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, [strs[i]]);
        } else {
            map.get(sorted).push(strs[i]);
        }
    }
    console.log(map);

    return [...map.values()];
};

/*
    Time Complexity: O (n m log(m))
    n = number of words
    m = size of largest word
 */

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
