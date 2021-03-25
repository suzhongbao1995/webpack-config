


module.exports = class RemoveConsolePlugin {
 apply(compiler) {
   // compiler.plugin('compilation', (compilation , callback) => {
   //  console.log("This is an example plugin!!!");
   //  //当该插件功能完成以后一定要注意回调 callback 函数
   //  callback();
   // });
  console.log(compiler, 'compiler');
  compiler.plugin('done', function() {
   console.log('Hello World!');
  });
  }
}


