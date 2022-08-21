type FilterKeysByValue<Obj, T> = {
  [K in keyof Obj]: Obj[K] extends T ? K : never;
}[keyof Obj];

type MyType = { a: 1; b: number; c: string };

type NumberKeys = FilterKeysByValue<MyType, number>;

type NumberValues = Pick<MyType, NumberKeys>;
