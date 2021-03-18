import { Expect, Equal } from '@type-challenges/utils'

// type HelloWorld = any;
 type HelloWorld = string;

type test = Expect<Equal<HelloWorld, string>>
