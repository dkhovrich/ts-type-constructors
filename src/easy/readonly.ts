type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type User = {
  id: number;
  name: string;
  date: Date;
};

type MyUser = ReadOnly<User>;
