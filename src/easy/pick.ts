type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type User = {
  id: number;
  name: string;
  date: Date;
};

type MyUser = MyPick<User, "id" | "name">;
