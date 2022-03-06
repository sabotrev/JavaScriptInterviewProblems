const isAlienSorted = (words, order) => {
    let alphaMap = new Map();
    let count = 1;
    for (const letter of order) {
        alphaMap.set(letter, count++);
    }

    for (let i = 0; i < words.length - 1; i++) {
        let min = Math.min(words[i].length, words[i + 1].length);
        for (let j = 0; j < min; j++) {
            const firstWord = words[i];
            const secondWord = words[i + 1];

            // If letters DO NOT equal then check if they are alphabetical.
            if (firstWord[j] !== secondWord[j]) {
                if (alphaMap.get(firstWord[j]) > alphaMap.get(secondWord[j])) {
                    return false;
                } else {
                    // If first occurrence of letters are sorted then we don't need to check the rest.
                    break;
                }
            }

            // If we're at the last letter and they are still equal check their lengths.
            if (j === min - 1) {
                // Shorter word MUST come first... i.e. 'app' before 'apple'
                if (firstWord.length > secondWord.length) {
                    return false;
                }
            }
        }
    }
    return true;
};

/*
    Time: O(m) where m is the total number of characters in words array.
    Space: O(1) map is fixed to 26 characters.
 */

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')); // true
console.log(
    isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
); // false
