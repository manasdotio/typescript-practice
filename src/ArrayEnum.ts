const chaiFlavours: string[] = ["masala", "ginger", "lemon"]; // array of strings
const chaiPrice: number[] = [20, 15, 10]; // array of numbers

const rating: Array<number> = [5, 4.5, 4.7]; // generic array type

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala", price: 20 },
  { name: "Ginger", price: 15 },
]; // array of Chai objects

// readonly array
const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push("Pune")

// tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 25];

// tuple with optional element
let userInfo: [string, number, boolean?];
userInfo = ["chai_lover", 30, true];
userInfo = ["tea_fan", 25];

//readonly tuple
const location: readonly [number, number] = [28.6139, 77.209];

// tuple with rest elements
const chaiItems: [name: string, price: number] = ["Ginger", 15];

// enum
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const myCup: CupSize = CupSize.MEDIUM; // enum usage

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);

enum RandomEnum {
  // heterogeneous enum
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars.HIGH; // inlined at compile time

let t: [string, number] = ["chai", 5];
t.push("extra"); // allowed
