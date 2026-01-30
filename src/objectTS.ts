const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};
let tea: {
  // inline type annotation
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger tea",
  price: 15,
  isHot: false,
};

type Tea = {
  // type alias
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak chai",
  price: 18,
  ingredients: ["water", "milk", "ginger", "sugar"],
};

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup; // valid assignment (structural typing)

type Brew = {
  brewTime: number;
};
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew: Brew = coffee; // valid assignment

// Split complex object types
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {// Partial makes all properties optional
  console.log("updating chai with", updates);
};
updateChai({ price: 22 });
updateChai({}); // valid calls

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  // Required makes all properties mandatory
  // Required makes all properties mandatory
  console.log("placing order for", order);
};
placeOrder({
  name: "Masala chai",
  quantity: 2,
});

type chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<chai, "name" | "price">; // Pick selects specified properties

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};
type  PublicChai = Omit<ChaiNew, "secretIngredients">; // Omit removes specified properties


