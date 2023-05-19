// functional Oriented
let mobile:any = {
    brand : 'Apple',
    color : 'Silver'
};
mobile.price = 25000;
delete mobile.color;
console.log(mobile.brand);

// Object Oriented
class Mobile {

    // properties
    private _brand:string;
    private _color:string;
    private _price:number;

    // constructor
    constructor(brand:string , color:string, price:number){
        this._brand = brand;
        this._color = color;
        this._price = price;
    }

    // getter / setters

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    // instance method
    public specification():void{
        let msg:string = `BRAND : ${this.brand} COLOR : ${this.color} PRICE : ${this.price}`;
        console.log(msg);
    }
}
let mobileOne = new Mobile('Apple' , 'Silver' , 35000);
mobileOne.price = 45000; // set the values to properties
mobileOne.specification();

