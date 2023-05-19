var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    private -> access the variable only inside a class
    protected -> access in the declared class , child class
    public -> access inside , child , outside of the class (even without inheritance)

    instance method -> can be called with an object
    static method -> can be called with Class Name
 */
// class
var BasicCalc = /** @class */ (function () {
    // constructor
    function BasicCalc() {
        this.result = 0;
    }
    // instance method (object specific)
    BasicCalc.prototype.calcSum = function (a, b) {
        this.result = a + b;
        console.log(this.result);
    };
    // instance method (object specific)
    BasicCalc.prototype.calcSub = function (a, b) {
        this.result = a - b;
        console.log(this.result);
    };
    return BasicCalc;
}());
/*let basicCalc = new BasicCalc(); // object creation
basicCalc.calcSum(10,20); // executing / calling an instance method of a class
basicCalc.calcSub(10,20);*/
/*
    1. If no constructor is written then system will create a constructor for us
    2. when ever a child class object is getting constructed, before that the parent object should be constructed
    3. super() indicated the parent class constructor
    4. "super" -> parent class object
    5. "this" -> child class object
 */
var AdvCalc = /** @class */ (function (_super) {
    __extends(AdvCalc, _super);
    function AdvCalc() {
        return _super.call(this) || this;
    }
    // method overriding / extend / enhance the functionality
    AdvCalc.prototype.calcSum = function (a, b) {
        this.result = (2 * a) + (2 * b);
        console.log(this.result);
    };
    AdvCalc.prototype.calcMul = function (a, b) {
        this.result = a * b;
        console.log(this.result);
    };
    AdvCalc.prototype.calcDiv = function (a, b) {
        this.result = a / b;
        console.log(this.result);
    };
    return AdvCalc;
}(BasicCalc));
var advCalc = new AdvCalc();
advCalc.calcSum(10, 20); // 60
var basicCalc = new BasicCalc();
basicCalc.calcSum(10, 20); // 30
