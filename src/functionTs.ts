function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  // inferred return type
  if (!order) return null;
  return order;
}

function logChai(): void {
  // void means no return value
  console.log("Chai served");
}

// function orderChai(type?:string){ // optional parameter

// }
function orderChai(type: string = "masala") {
  // default and optional parameter
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
