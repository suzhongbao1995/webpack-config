/**
 * @param {object|array|number|string} val - 待format的数据
 * @return nothing
 */
function format(val) {

}

// test case
const data = {
  a: 1,
  b: [
    2,
    3,
    {
      c: 4
    }
  ],
  d: {
    e: 5,
    f: {
      g: '6'
    },
  }
}


// test case
// format(data);

/*
将在控制台中打印出
{
  "a": 1,
  "b": [
    2,
    3,
    {
      "c": 4
    }
  ],
  "d": {
    "e": 5,
    "f": {
      "g": "6"
    }
  }
}
*/
const data  = {};
console.log(String(data));