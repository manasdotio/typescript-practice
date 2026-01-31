const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true,
};
let tea;
tea = {
    name: "Ginger tea",
    price: 15,
    isHot: false,
};
const adrakChai = {
    name: "Adrak chai",
    price: 18,
    ingredients: ["water", "milk", "ginger", "sugar"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup; // valid assignment (structural typing)
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew = coffee; // valid assignment
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 22 });
updateChai({}); // valid calls
const placeOrder = (order) => {
    // Required makes all properties mandatory
    // Required makes all properties mandatory
    console.log("placing order for", order);
};
placeOrder({
    name: "Masala chai",
    quantity: 2,
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30,
};
export {};
//# sourceMappingURL=objectTS.js.map