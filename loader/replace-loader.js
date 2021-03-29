
const loaderUtils = require('loader-utils');

module.exports = function(source){
  const options = loaderUtils.getOptions(this);
  // console.log('options>>>>>>', options)
  // console.log('source>>>>>', source)
  return source.replace('编程', '前端').replace('TS', 'TypeScript')
}
