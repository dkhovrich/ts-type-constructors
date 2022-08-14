/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type NotIncludes<T extends readonly unknown[], U> = T extends []
    ? true
    : T extends [infer TFirst, ...infer Rest] ? Equal<TFirst, U> extends true ? false : NotIncludes<Rest, U> : false;

type cases = [
    Expect<Equal<NotIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, false>>,
    Expect<Equal<NotIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, true>>,
    Expect<Equal<NotIncludes<[1, 2, 3, 5, 6, 7], 7>, false>>,
    Expect<Equal<NotIncludes<[1, 2, 3, 5, 6, 7], 4>, true>>
]
