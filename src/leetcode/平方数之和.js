/**
 * @param {number} c
 * @return {boolean}
 */
//给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c
const judgeSquareSum = (c) => {
  for(let a = 0; a * a < c; a++) {
    const b = Math.sqrt(c - a * a);
    if (Math.ceil(b) === b) {
      return true
    }
  }
  return false;
};
console.log(judgeSquareSum(5));