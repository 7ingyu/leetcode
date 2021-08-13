/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = {};
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i ++) {
        while (nums[i] === nums[i - 1] && i !== 0) {
            i ++;
        }
        let x = nums[i];
        if (x > 0) {
            i = nums.length;
        }
        for (let j = i + 1; j < nums.length - 1; j ++) {
            while (nums[j] === nums[j - 1] && j !== i + 1) {
                j ++;
            }
            let y = nums[j];
            let k = nums.length - 1;
            let z = nums[k];
            if (x + y > 0) {
                j = nums.length;
            } else {
                while (x + y + z > 0 && k > j) {
                    k --;
                    z = nums[k];
                }
                if (k >  j) {
                    if (x + y + z === 0) {
                        triplets[`${x}, ${y}, ${z}`] = [x, y, z];
                    }
                }
            }
        }
    }
    
    return Object.values(triplets);
};