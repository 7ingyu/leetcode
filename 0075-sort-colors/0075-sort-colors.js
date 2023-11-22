/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0
    let count = 0
    
    while (count < nums.length) {
        let n = nums[i]
        if (n === 0) {
            nums.splice(i, 1)
            nums.unshift(0)
        } else if (n === 2) {
            nums.splice(i, 1)
            nums.push(2)
            i -- 
        }  
        i ++
        count ++
    }
};