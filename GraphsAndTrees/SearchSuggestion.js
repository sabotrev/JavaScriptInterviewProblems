class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let node = this.root;
        for (const letter of word) {
            if (!node.children.has(letter)) {
                node.children.set(letter, new TrieNode());
            }
            node = node.children.get(letter);
        }
        node.isWord = true;
    }

    getWordForPrefix(prefix) {
        let res = [];
        let currentNode = this.root;
        // Find point in Trie where we can start drilling
        for (const letter of prefix) {
            if (!currentNode.children.has(letter)) {
                return [];
            }
            currentNode = currentNode.children.get(letter);
        }
        if (currentNode.isWord) {
            res.push(prefix);
        }

        const dfs = (pre, node) => {
            for (const [value, childNode] of node.children) {
                // console.log(childNode);
                if (childNode.isWord) {
                    res.push(pre + value);
                    // return;
                }
                dfs(pre + value, childNode);
            }
        };
        dfs(prefix, currentNode);
        return res;
    }
}

const suggestedProducts = (products, searchWord) => {
    let res = [];
    products.sort();
    let trie = new Trie();
    for (const product of products) {
        trie.add(product);
    }

    for (let i = 0; i < searchWord.length; i++) {
        let subString = searchWord.substring(0, i + 1);
        // console.log(subString);
        let subArr = trie.getWordForPrefix(subString);
        // console.log(subArr);
        if (subArr.length > 3) {
            res.push(subArr.slice(0, 3));
        } else {
            res.push(subArr);
        }
    }
    return res;
};

/*
    Time: O(m) where m is time to build the trie.
    Space: O(n) where n is amount of nodes in the tree.
 */

console.log(
    suggestedProducts(
        ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
        'mouse'
    )
);

// console.log(suggestedProducts(['havana'], 'havana'));
// console.log(
//     suggestedProducts(['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags')
// );
// console.log(suggestedProducts(['havana'], 'tatiana'));
