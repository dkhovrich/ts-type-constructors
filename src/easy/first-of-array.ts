type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends Array<any>> = T[0];

type head1 = First<arr1>;
type head2 = First<arr2>;
