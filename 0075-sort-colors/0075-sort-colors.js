/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let str = nums.join('')
    let colors = [0, 1, 2]
    let counts = colors.map(n => str.match(new RegExp(n, 'g'))?.length || 0)
    nums.splice(0, nums.length, ...colors.map((c, i) => String(c).repeat(counts[i])).join('').split(''))
};