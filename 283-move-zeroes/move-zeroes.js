/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let end = nums.length
    let pos = 0
    while (pos < end) {
        const el = nums[pos]
        if (el === 0) {
            nums.splice(pos, 1)
            nums.push(0)
            end --
        } else {
            pos ++
        }
    }
    return nums
};