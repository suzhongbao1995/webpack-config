 /**
  * @typedef Range
  * @property {number} start - 区间的开始时间
  * @property {number} end - 代表区间的结束时间
  */

 /**
  * @param {Range} first - 第一个区间
  * @param {Range} second - 第二个区间
  * @return {boolean} 是否重叠
  */
 function isOverlapped(first, second) {
   // TODO
 }


 // test case
 // const a = { start: 3, end: 5 };
 // const b = { start: 4, end: 6 };
// const c = { start: 7, end: 8 };
//
/// isOverlapped(a, b); // true
// isOverlapped(b, c); // false


/**
 * @param {Range[]} intervals - 若干个区间
 * @return {Range[]} 合并后的区间
 */

function merge(intervals) {
  const sortList = intervals.sort((next, prev) => next.start - prev.start);
  // const result = [];
  // sortList.reduce((prev, next) => {
  //   if (!prev.start && !prev.end) {
  //     result.push(next);
  //     return { start: next.start, end: next.end }
  //   } else if (prev.end > next.end) {
  //     return prev
  //   } else if (prev.end > next.start) {
  //     result.splice(result.length-1, 1, { start: prev.start, end: next.end });
  //     return { start: prev.start, end: next.end }
  //   } else {
  //     result.push(next);
  //     return next
  //   }
  //
  // }, { start: null, end: null});
    return  sortList.reduce((prev, next) => {
      if (!prev.length) {
        return [next];
      } else if (prev[prev.length - 1].end > next.end) {
        return prev;
      }  else if (prev[prev.length - 1].end > next.start) {
        prev[prev.length - 1].end = next.end;
        return prev
      } else if (prev[prev.length - 1].end < next.start) {
        return [...prev, next];
      }
  }, []);
}

// test case
const a = { start: 3, end: 5 };
const b = { start: 4, end: 6 };
const c = { start: 7, end: 8 };
const e = { start: 2, end: 9 };

console.log(merge([a, c, b, e])); // [{ start: 3, end: 6 }, { start: 7, end: 8 }]
