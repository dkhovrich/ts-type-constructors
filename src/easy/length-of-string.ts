import type { Equal, Expect } from '@type-challenges/utils'

type StringToArray<T extends string> = T extends `${infer TFirst}${infer TRest}`
    ? [TFirst, ...StringToArray<TRest>]
    : [];

type Length<T extends string> = StringToArray<T>["length"];

type cases = [
    Expect<Equal<Length<"Hello">, 5>>,
    Expect<Equal<Length<"">, 0>>,
    Expect<Equal<Length<" ">, 1>>,
    // @ts-expect-error
    Length<5>
]