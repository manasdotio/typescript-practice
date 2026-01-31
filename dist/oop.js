// class Chai {
//     flavour: string;
//     price: number;
//     // constructor(flavour:string, price:number){
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }
//     constructor(flavour:string, price:number){
//         this.flavour = flavour;
//         console.log(this)
//     }
// }
// const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour = "masala"
// access modifiers: public, private, protected
class Chai {
    flavour = "Masala";
    secretIngredients = "Cardamom";
    revel() {
        return this.secretIngredients; // ok
    }
    shopName = "Chai Point";
}
class Shop {
    shopName = "Tea Shop";
}
class Branch extends Shop {
    getName() {
        return this.shopName; // can access protected member of parent class
    }
}
class Wallet {
    #balance = 100; // private field
    getBalance() {
        return this.#balance; // can access private field within the class
    }
}
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too much sugar");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 4;
// static members
class EkChai {
    flavour;
    static shopName = "Chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName); // access static member without creating an instance
// abstract classes
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Making chai");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
}
export {};
//# sourceMappingURL=oop.js.map