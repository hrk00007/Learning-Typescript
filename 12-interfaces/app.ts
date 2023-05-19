/*
    Interfaces -> 100% abstract -> declaration , no-implementation (Rules)
    Abstract Class -> <100% abstract -> declaration , partial-implementation
    Concrete Class -> 0% abstract -> fully-implemented

    Employee Object
    ---------------
    Step 1 : Rules -> props , methods ->
    Step 2 -> partial implementation -> abstract class -> no object creation
    Step 3 : fully implementation -> object creation is possible
 */

// interface
interface IEmployee {
    // properties
    firstName:string;
    lastName:string;
    email:string;
    designation:string;

    // methods
    fullName():void;
    bio():void;
}

// abstract class
abstract class ABSEmployee implements IEmployee{
    designation: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(firstName, lastName, email , designation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
    }

    abstract bio(): void;

    fullName(): void {
        console.log(`NAME : ${this.firstName} ${this.lastName}`);
    }
}

// concrete class
class Employee extends ABSEmployee{

    constructor(firstName, lastName, email , designation){
        super(firstName,lastName,email,designation);
    }

    // instance method
    bio(): void {
        let biography : string = `FULL NAME : ${this.firstName} ${this.lastName} \t
                                  EMAIL : ${this.email} \t
                                  DESIGNATION : ${this.designation}`;
        console.log(biography);
    }
}
let employee = new Employee('Rajan' , 'Jain' , 'rajan@gmail.com' , 'Software Engineer');
employee.bio();



