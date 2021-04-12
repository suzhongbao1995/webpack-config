export type Hello = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

export type BarBar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

export function doStuff(arg: Hello | BarBar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // oka
    // console.log(arg.bar); // Error
  } else {
    // 一定是 Bar
    // console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
doStuff({ kind: 'foo', foo: 222});