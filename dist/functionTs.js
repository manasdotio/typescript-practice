function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type} chai`);
}
makeChai("masala", 2);
function getChaiPrice() {
    return 25;
}
function makeOrder(order) {
    // inferred return type
    if (!order)
        return null;
    return order;
}
function logChai() {
    // void means no return value
    console.log("Chai served");
}
// function orderChai(type?:string){ // optional parameter
// }
function orderChai(type = "masala") {
    // default and optional parameter
}
function createChai(order) {
    return 4;
}
export {};
//# sourceMappingURL=functionTs.js.map