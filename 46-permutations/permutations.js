/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, curr = []) {
  const permutations = [];
  if (curr.length === nums.length) {
      permutations.push([...curr])
      return permutations
  }
  for (let el of nums) {
      if (!curr.includes(el)) {
          curr.push(el)
          permutations.push(...permute(nums, curr))
          curr.pop()
      }
  }
  return permutations
};