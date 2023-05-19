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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class
var ABSEmployee = /** @class */ (function () {
    function ABSEmployee(firstName, lastName, email, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
    }
    ABSEmployee.prototype.fullName = function () {
        console.log("NAME : ".concat(this.firstName, " ").concat(this.lastName));
    };
    return ABSEmployee;
}());
// concrete class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, email, designation) {
        return _super.call(this, firstName, lastName, email, designation) || this;
    }
    // instance method
    Employee.prototype.bio = function () {
        var biography = "FULL NAME : ".concat(this.firstName, " ").concat(this.lastName, " \n\n                                  EMAIL : ").concat(this.email, " \n\n                                  DESIGNATION : ").concat(this.designation);
        console.log(biography);
    };
    return Employee;
}(ABSEmployee));
var employee = new Employee('Rajan', 'Jain', 'rajan@gmail.com', 'Software Engineer');
employee.bio();
