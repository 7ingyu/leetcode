/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
let max = 1;
  let result = s[0];

  const getLongest = (start, end) => {
      let str = s.slice(start, end);
      let front = str.slice(0, Math.ceil(str.length / 2));
      let back = str.slice(Math.floor(str.length / 2))
      while (front === back.split('').reverse().join('') && start >= 0 && end <= s.length) {
          if (str.length > max) {
              result = str;
              max = str.length;
          }
          start --;
          end ++;
          str = s.slice(start, end);
          front = str.slice(0, Math.ceil(str.length / 2));
          back = str.slice(Math.floor(str.length / 2));
      }
  };

  for (let i = 0; i < s.length - Math.floor(max / 2); i ++) {
      if (s[i] === s[i + 1]) {
          getLongest(i, i + 2);
      }
      if (s[i] === s[i + 2]) {
          getLongest(i, i + 3);
      }
  }
  return result;
};