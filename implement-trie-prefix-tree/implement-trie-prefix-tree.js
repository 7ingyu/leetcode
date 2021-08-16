/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.start = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.start;
    for (let char of word) {
        if (node[char] === undefined) {
            node[char] = {};
            node = node[char];
        } else {
            node = node[char];
        }
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.start;
    for (let char of word) {
        if (node[char] !== undefined) {
            node = node[char]
        } else {
            return false;
        }
    }
    return node.isWord ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.start;
    for (let char of prefix) {
        if (node[char] !== undefined) {
            node = node[char]
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */