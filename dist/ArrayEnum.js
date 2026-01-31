const chaiFlavours = ["masala", "ginger", "lemon"]; // array of strings
const chaiPrice = [20, 15, 10]; // array of numbers
const rating = [5, 4.5, 4.7]; // generic array type
const menu = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 15 },
]; // array of Chai objects
// readonly array
const cities = ["Delhi", "Mumbai"];
// cities.push("Pune")
// tuple
let chaiTuple;
chaiTuple = ["Masala", 25];
// tuple with optional element
let userInfo;
userInfo = ["chai_lover", 30, true];
userInfo = ["tea_fan", 25];
//readonly tuple
const location = [28.6139, 77.209];
// tuple with rest elements
const chaiItems = ["Ginger", 15];
// enum
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const myCup = CupSize.MEDIUM; // enum usage
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
var RandomEnum;
(function (RandomEnum) {
    // heterogeneous enum
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
const s = Sugars.HIGH; // inlined at compile time
let t = ["chai", 5];
t.push("extra"); // allowed
export {};
//# sourceMappingURL=ArrayEnum.js.map