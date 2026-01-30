function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order : ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving chai: ${msg}`;
  }
  return "Serving plain chai";
}

function serveChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Serving small chai";
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `Serving order ${size}`;
}

class KulhadChai {
  serve() {
    return "Serving chai in kulhad";
  }
}
class Cutting {
  serve() {
    return "Serving cutting chai";
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}
function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
  }
  return `Serving ${item} chai`;
}

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai`;
      break;
    case "elaichi":
      return `Masala chai`;
      break;
    case "GingerChai":
      return `Masala chai`;
      break;
  }
}
function brew(order: MasalaChai | GingerChai ){
    if("spiceLevel" in order){
        //
    }
} 

function isStringArray(arr: unknown):arr is string[]{
    
}