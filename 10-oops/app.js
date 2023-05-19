// functional Oriented
var mobile = {
    brand: 'Apple',
    color: 'Silver'
};
mobile.price = 25000;
delete mobile.color;
console.log(mobile.brand);
// Object Oriented
var Mobile = /** @class */ (function () {
    // constructor
    function Mobile(brand, color, price) {
        this._brand = brand;
        this._color = color;
        this._price = price;
    }
    Object.defineProperty(Mobile.prototype, "brand", {
        // getter / setters
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mobile.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    // instance method
    Mobile.prototype.specification = function () {
        var msg = "BRAND : ".concat(this.brand, " COLOR : ").concat(this.color, " PRICE : ").concat(this.price);
        console.log(msg);
    };
    return Mobile;
}());
var mobileOne = new Mobile('Apple', 'Silver', 35000);
mobileOne._price = 45000; // set the values to properties
mobileOne.specification();
