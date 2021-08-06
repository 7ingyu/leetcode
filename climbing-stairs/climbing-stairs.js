/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, steps = 0) {
    let ways = [0, 1, 2];
    for (let steps = 3; steps <= n; steps ++) {
        ways[steps] = ways[steps - 1] + ways[steps - 2];
    }
    return ways[n];
};