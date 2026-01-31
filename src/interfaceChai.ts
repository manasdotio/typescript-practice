interface Chai {
  flavour: string;
  price: number;
  milk?: boolean; // optional property
}

const masalaChai: Chai = {
  flavour: "Masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "Chai Point",
};

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Machine started");
  },
  stop() {
    console.log("Machine stopped");
  },
};

// index signature

interface ChaiRatings {
  [falvour: string]: number;
}

const ratings: ChaiRatings = {
  masala: 5,
  ginger: 4.5,
};

interface User {
  age: number;
}
const u: User = {
  // name: "John",
  age: 30,
};

interface A {a:string}
interface B {b:string}

interface C extends A, B {}