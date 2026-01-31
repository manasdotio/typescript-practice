function WrapInArray(item) {
    return [item];
}
WrapInArray("machine"); // returns string[]
WrapInArray(42); // returns number[]
WrapInArray({ name: "Alice" }); // returns { name: string }[]
// Generic function with multiple type parameters
function pair(a, b) {
    return [a, b];
}
pair("masala", "chai"); // returns [string, string]
pair(10, true); // returns [number, boolean]
pair({ a: "hello" }, { b: "world" }); // returns [A, B]
const numberBox = { content: 100 };
const stringBox = { content: "Generics" };
const res = {
    status: 200,
    data: { flavour: "ginger" },
};
export {};
//# sourceMappingURL=Generics.js.map