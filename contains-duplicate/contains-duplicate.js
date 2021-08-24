/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let record = {};
    for (let num of nums) {
        if (record[num] === undefined) {
            record[num] = true;
        } else {
            return true;
        }
    }
    return false;
};