/*
    private -> access the variable only inside a class
    protected -> access in the declared class , child class
    public -> access inside , child , outside of the class (even without inheritance)

    instance method -> can be called with an object
    static method -> can be called with Class Name
 */
// class
class BasicCalc {

    // property of a class
    public result:number;

    // constructor
    constructor(){
        this.result = 0;
    }

    // instance method (object specific)
    public calcSum(a:number , b:number):void{
        this.result = a + b;
        console.log(this.result);
    }

    // instance method (object specific)
    public calcSub(a:number , b:number):void{
        this.result = a - b;
        console.log(this.result);
    }
}
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

class AdvCalc extends BasicCalc{

    constructor(){
        super(); // always in the first line
    }

    // method overriding / extend / enhance the functionality
    public calcSum(a:number , b:number):void{
        this.result = (2 * a) + (2 * b);
        console.log(this.result);
    }

    public calcMul(a:number , b:number):void{
        this.result = a * b;
        console.log(this.result);
    }

    public calcDiv(a:number , b:number):void{
        this.result = a / b;
        console.log(this.result);
    }
}
let advCalc = new AdvCalc();
advCalc.calcSum(10,20); // 60

let basicCalc = new BasicCalc();
basicCalc.calcSum(10,20); // 30



