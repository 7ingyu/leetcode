/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1]);
    let result = [];
    let merged = intervals[0].slice();
    for (let i = 1; i < intervals.length; i ++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        if (start <= merged[1]) {
            merged[1] = Math.max(merged[1], end);
        } else {
            result.push(merged.slice())
            merged = intervals[i];
        }
    }
    result.push(merged.slice());
    return result;
};