type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = {ok:true} | {ok:false};
// class myRes implements Response{
//     ok:boolean = true;
// }

type TeaType = "masala" | "ginger"; // literal types

function orderChai(t: TeaType) {
  console.log(t);
}


type BaseChai = { teaLeaves: number };
type Extra = {masala:number}

type MasalaChai = BaseChai & Extra;

const cup:MasalaChai = {
    teaLeaves:2,
    masala:1
}


type User ={
    username:string;
    bio?:string;
}
const u1:User = {
    username:"tea_lover"
}
const u2:User = {
    username:"chai_fan",
    bio:"I love chai!"
}

// readonly properties

type Config ={
    readonly appName:string;
    version:number
}

const cfg:Config ={
    appName:"ChaiApp",
    version:1
}

// cfg.appName = "NewChaiApp"