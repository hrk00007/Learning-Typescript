import {ABSEmployee} from "./ABSEmployee";

export class Employee extends ABSEmployee{

    constructor(firstName, lastName, email , designation){
        super(firstName,lastName,email,designation);
    }

    // instance method
    bio(): void {
        let biography : string = `FULL NAME : ${this.firstName} ${this.lastName} \n
                                  EMAIL : ${this.email} \n
                                  DESIGNATION : ${this.designation}`;
        console.log(biography);
    }
}
