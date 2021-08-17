/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  let index = Math.floor(intervals.length / 2);
  let top = intervals.length;
  let bottom = 0;
  let below = intervals[index - 1] || [-Infinity, -Infinity];
  let above = intervals[index] || [Infinity, Infinity];

  while (below[0] > newInterval[0] || above[0] <= newInterval[0]) {
      if (above[0] <= newInterval[0]) {
          bottom = index;
          index += Math.ceil((top - bottom) / 2);
      } else if (below[0] > newInterval[0]) {
          top = index;
          index = bottom + Math.floor((top - bottom) / 2);
      }
      below = intervals[index - 1] || [-Infinity, -Infinity];
      above = intervals[index] || [Infinity, Infinity];
  }

  let toMerge = 0;
  let merge = newInterval.slice();
  if (merge[0] <= below[1]) {
    toMerge ++;
    merge[0] = below[0] === -Infinity ? merge[0]: Math.min(merge[0], below[0]);
    merge[1] = Math.max(merge[1], below[1]);
  }
  while (merge[1] >= above[0]) {
      toMerge ++;
      merge[1] = above[1] === Infinity ? merge[1]: Math.max(merge[1], above[1]);
      index ++;
      above = intervals[index] || [Infinity, Infinity];
  }
  intervals.splice(index - toMerge, toMerge, merge);

  return intervals;
};