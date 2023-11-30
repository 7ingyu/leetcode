/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let match = s
    let count = 0
    for (let c of t) {
        count ++
        match = match.replace(c, '')
        if (match.length !== s.length - count) return false
    }
    return true
};