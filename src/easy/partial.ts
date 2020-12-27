type MyPartial<T> = {
  [P in keyof T]-?: T[P];
};

type User = {
  id: number;
  name: string;
  date: Date;
};

type MyUser = MyPartial<User>;
