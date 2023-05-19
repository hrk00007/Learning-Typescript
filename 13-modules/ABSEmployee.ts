import {IEmployee} from "./interface/IEmployee";

export abstract class ABSEmployee implements IEmployee{
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
