/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
   arr.sort((a, b) => Math.abs(b) - Math.abs(a));
  let pairs = {0: 0};
  for (let i = 0; i < arr.length; i ++) {
    let num = arr[i];
    let half = num % 2 ? 0: num / 2;
    if (num === 0) {
      pairs[0] ++;
    } else {
      if (pairs[num]) {
        pairs[num] --;
      } else if (half) {
        pairs[half] = pairs[half] === undefined ? 1: pairs[half] + 1;
      } else {
        return false;
      }
    }
  }
  let zeros = pairs[0] % 2;
  let sum = Object.values(pairs).reduce((a, b) => a + b) - pairs[0];
  return !sum && !zeros;
};