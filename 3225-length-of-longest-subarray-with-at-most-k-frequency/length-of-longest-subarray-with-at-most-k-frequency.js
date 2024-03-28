/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const record = {};
    const sub = [];
    let max = 0;
    for (let n of nums) {
        record[n] = record[n] ? record[n] + 1 : 1;
        sub.push(n);
        if (record[n] <= k) {
            max = Math.max(max, sub.length);
        } else {
            while (sub[0] != n) {
                let el = sub.shift();
                record[el]--;
        }
        sub.shift();
        record[n]--;
        }
    }
    return max;
};