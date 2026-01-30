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
  public flavour: string = "Masala";

  private secretIngredients: string = "Cardamom";

  revel() { // revel method can access private member
    return this.secretIngredients; // ok
  }

  protected shopName: string = "Chai Point";
}

class Shop{
    protected shopName = "Tea Shop"
}

class Branch extends Shop{
    getName(){ // getName method can access protected member of parent class
        return this.shopName; // can access protected member of parent class
    }
}

class Wallet {
    #balance = 100 // private field

    getBalance(){
        return this.#balance; // can access private field within the class
    }
}

class Cup{
    readonly capacity:number = 250;

    constructor(capacity:number){
        this.capacity = capacity; 
    }
}

class ModernChai{
    private _sugar = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value>5) throw new Error("Too much sugar");
        this._sugar = value;
    }
}

const c = new ModernChai();
c.sugar = 4;


// static members
class EkChai{
    static shopName = "Chaicode caffe";

    constructor(public flavour:string){}
}
console.log(EkChai.shopName); // access static member without creating an instance

// abstract classes
abstract class Drink{
    abstract make():void; // abstract method
}

class MyChai extends Drink{
    make(){
        console.log("Making chai");
    }
}