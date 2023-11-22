/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === current) {
            nums.splice(i, 1)
            i --
        } else {
            current = nums[i]
            count ++
        }
    }
    return count
};