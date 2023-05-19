/*
    ES6 Features
-------------
1) Template Strings
2) Optional Parameters
3) let , const
4) For-Of Loops
5) Arrow Functions
6) Destructuring
7) Spread Operator
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Template String ``
var employeeName = 'John';
var employeeAge = 45;
// string contact (+)
var stringContact = "NAME : " + employeeName + " AGE : " + employeeAge;
console.log(stringContact);
// back Tick operator (`)
var templateStr = "NAME : ".concat(employeeName, " AGE : ").concat(employeeAge);
console.log(templateStr);
// 2) Optional Parameters
var printNumbers = function (start, end) {
    if (end === void 0) { end = 20; }
    var result = '';
    for (var i_1 = start; i_1 <= end; i_1++) {
        result += "".concat(i_1, " ");
    }
    console.log(result);
};
printNumbers(0, 40);
// 3) let , const
var courseName = 'Angular Training';
courseName = 'React JS Training';
console.log(courseName);
var HOST_NAME = '127.0.0.1';
console.log(HOST_NAME);
// var vs let
var course = 'Engineering';
if (course === 'Engineering') {
    var dept = 'IT Services';
}
for (var i = 0; i <= 10; i++) {
}
console.log(i);
// 4. For-of loops
var colors = ['white', 'black', 'silver', 'blue', 'orange'];
// normal for loop
var result = '';
for (var i_2 = 0; i_2 < colors.length; i_2++) {
    result += "".concat(colors[i_2].toUpperCase(), " ");
}
console.log(result);
// for-in loop -> ES5
result = '';
for (var index in colors) {
    result += "".concat(colors[index].toUpperCase(), " ");
}
console.log(result);
// for-of loop -> ES6
result = '';
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    result += "".concat(color.toUpperCase(), " ");
}
console.log(result);
// 5) Arrow Functions =>
// normal function
function greetNF(name) {
    var msg = "Hello! ".concat(name);
    console.log(msg);
}
greetNF('John');
// function expression
var greetFE = function (name) {
    var msg = "Hello! ".concat(name);
    console.log(msg);
};
greetFE('John');
// Arrow Function ES6
var greetAF = function (name) {
    var msg = "Hello! ".concat(name);
    console.log(msg);
};
greetAF('John');
var person = {
    firstName: 'Rajan',
    lastName: 'Jain',
    fullName: function () {
        console.log("".concat(person.firstName, " ").concat(person.lastName));
    }
};
person.fullName();
var student = {
    name: 'Arjun Reddy',
    age: 23,
    course: 'MBBS',
    address: {
        officeAddress: {
            name: 'Apollo Hospitals',
            location: 'Jubilee Hills'
        },
        homeAddress: {
            hno: '1-3-50',
            street: 'Anand Nagar',
            city: 'Hyderabad'
        }
    },
    interests: {
        colors: ['white', 'black'],
        movies: ['ABC', 'DEF']
    }
};
console.log("OFFICE NAME : ".concat(student.address.officeAddress.name));
console.log("OFFICE LOCATION : ".concat(student.address.officeAddress.location));
// Destructuring
var _a = student.address.officeAddress, officeName = _a.name, officeLocation = _a.location;
console.log("OFFICE NAME : ".concat(officeName));
console.log("LOCATION : ".concat(officeLocation));
// 7) Spread Operator (...)
var employeeOne = {
    name: 'John',
    age: 45,
    designation: 'Manager'
};
var address = {
    street: 'ABC Street',
    city: 'Hyderabad'
};
var finalObj = __assign(__assign({}, employeeOne), { address: address });
console.log(finalObj);
// Spread Operator with Arrays
var arrayOne = [10, 20, 30, 40];
var arrayTwo = [50, 60, 70, 80];
var finalArray = __spreadArray(__spreadArray([], arrayOne, true), arrayTwo, true);
console.log(finalArray);
