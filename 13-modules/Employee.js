"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ABSEmployee_1 = require("./ABSEmployee");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, email, designation) {
        return _super.call(this, firstName, lastName, email, designation) || this;
    }
    // instance method
    Employee.prototype.bio = function () {
        var biography = "FULL NAME : " + this.firstName + " " + this.lastName + " \n\n                                  EMAIL : " + this.email + " \n\n                                  DESIGNATION : " + this.designation;
        console.log(biography);
    };
    return Employee;
}(ABSEmployee_1.ABSEmployee));
exports.Employee = Employee;
