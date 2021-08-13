/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let record = {};
    strs.map((str, i) => {
        let sorted = str.split('').sort().join('');
        record[sorted] = record[sorted] ? record[sorted] : [];
        record[sorted].push(str);
    })
    return Object.values(record);
};