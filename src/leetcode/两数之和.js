/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
 */
const twoSum = (nums, target) => {
  for (let i = 0; i<=nums.length; i++) {
    const result = target - nums[i];
    for(let j = i + 1; j <= nums.length; j++) {
      if (nums[j] === result) {
        return [i, j];
      }
    }
  }
  return null;
};
console.log(twoSum([2,7,11,15], 18));