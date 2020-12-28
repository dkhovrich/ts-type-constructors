type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type User = {
  id: number;
  name: string;
  sayHi: (name: string) => void;
};

type FunctionNames = FunctionPropertyNames<User>;
type FunctionProps = FunctionProperties<User>;

type NonFunctionNames = NonFunctionPropertyNames<User>;
type NonFunctionProps = NonFunctionProperties<User>;
