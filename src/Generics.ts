function WrapInArray<T>(item: T): T[] {
  return [item];
}
WrapInArray("machine"); // returns string[]
WrapInArray(42); // returns number[]
WrapInArray({ name: "Alice" }); // returns { name: string }[]

// Generic function with multiple type parameters
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("masala", "chai"); // returns [string, string]
pair(10, true); // returns [number, boolean]
pair({ a: "hello" }, { b: "world" }); // returns [A, B]

// Generic interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "Generics" };

interface ApiPromise<T> {
  status: number;
  data: T;
}
const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "ginger" },
};
