"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ABSEmployee = /** @class */ (function () {
    function ABSEmployee(firstName, lastName, email, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
    }
    ABSEmployee.prototype.fullName = function () {
        console.log("NAME : " + this.firstName + " " + this.lastName);
    };
    return ABSEmployee;
}());
exports.ABSEmployee = ABSEmployee;
