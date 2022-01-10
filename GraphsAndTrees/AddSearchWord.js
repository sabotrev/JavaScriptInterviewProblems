class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class WordDictionary {
    root = new TrieNode();
    print() {
        console.log(this.root);
    }
}

WordDictionary.prototype.addWord = function (word) {
    let currentNode = this.root;
    for (const letter of word) {
        if (!currentNode.children.has(letter)) {
            currentNode.children.set(letter, new TrieNode());
        }
        currentNode = currentNode.children.get(letter);
    }
    currentNode.isWord = true;
};

WordDictionary.prototype.search = function (word) {
    const dfs = (index, root) => {
        let currentNode = root;

        for (let i = index; i < word.length; i++) {
            const letter = word[i];
            if (letter === '.') {
                for (const child of currentNode.children.values()) {
                    if (dfs(i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!currentNode.children.has(letter)) {
                    return false;
                }
                currentNode = currentNode.children.get(letter);
            }
        }
        return currentNode.isWord;
    };
    return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad')); // return False
console.log(wordDictionary.search('bad')); // return True
console.log(wordDictionary.search('.ad')); // return True
console.log(wordDictionary.search('b..')); // return True
