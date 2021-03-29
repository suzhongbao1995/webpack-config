
/*可索引类型 --- 其实可以表示string[] number[] key/value形式的类型 ，当然类型定义时应该是越紧凑越好*/
// [{ id: 1, name: 'num1', age: 24 }, { id: 2, name: 'num2'}, { id: 3, name: 'num2', age: '25'}]
// [2, 3, 4, 5, 6, 7]
// ['2', 2, ]
// [2, 's', { id: 222, name: 2232, age: 2323 }]
export type JsonArray = {
  id: number,
  name: string | number,
  age?: number | string
}
export type NumberArray = {
  [x: number]: number
}
export type MixingArray = {
  [x: number]: number | string | JsonArray
}
const jsonArray:JsonArray[] = [{ id: 1, name: 'num1', age: 24 }, { id: 2, name: 'num2'}, { id: 3, name: 'num2', age: '25'}]
const numberArray1:NumberArray = [2, 3, 4, 5, 6, 7];
const mixingArray: MixingArray = [2, 's', { id: 222, name: 2232, age: 2323 }]
/*注意：索引签名必须是number 或者 string 类型 而且试验了数组的必须是number类型，是因为即使是number作为索引类型javascript也会将number转换成string去索引对象 */


type Info = {
  name: string,
  age: number,
}
/*实际是这样 我们是想如果传递info的Info类型 就不传flag, 如果传递info类型是string就传递flag，
但是TS并不知道我们想这样即使我们传了Info类型，也允许传递flag，但这不是我们想要的*/
// declare function overload(info: Info | string, flag?: boolean ): string;
// /*这里并没有错误，但是违背了我们的想法*/
// overload({ name: 'suzhongbao', age: 24 }, true);

// declare function overload(info: Info): string;
// declare function overload(info: string, flag: boolean): string;
// const res = overload({ name: 'suzhongbao', age: 24 }, true)


// const name = {};
// name.chinaName = '苏忠宝';
// name.english = 'suzhongbao';

type Name = {
  chinaName: string,
  englishName:string
}
const name = {} as Name
name.chinaName = '苏忠宝';
name.englishName = 'suzhonngbao'
// const name1 = <Name>{} 会和jsx混淆所以使用as关键字



interface StudentInfo {
  name: string,
  age: number,
  grade: number
}

type ReturnParams<T> = T extends (student: infer P) => void ? P : T;
type createStudent = (student:StudentInfo) => void;
type params = ReturnParams<createStudent>;


declare function fn(arg: number):number
declare function fn(arg: string): string

function fx<T, U>(x:T, y:U): string {
  return x+'222'+y
}

const add: (x: number, y:number) => string = function(x: number, y: number): string {
  return (x+y+'');
}

const addTest: <T, U>(x:T, y:U) => string = fx;
addTest<number, number>(2, 3);
