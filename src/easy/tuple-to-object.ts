const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends ReadonlyArray<any>> = {
  [K in T[number]]: K;
};

type Result = TupleToObject<typeof tuple>;
