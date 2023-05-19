//DataTypes
//string,number,boolean,undefined,null,object,array,void,enum,any
console.log("------------- String -------------");
//string '',"",``
var employeeName = 'John';
console.log(" employeeName:", employeeName);
console.log(' employeeName:', employeeName);
console.log(" employeeName: ".concat(employeeName));
console.log("------------- Number -------------");
//number
var employeeAge = 45;
console.log(" employeeAge: ".concat(employeeAge));
console.log("------------- Boolean -------------");
//boolean
var isManager = false;
console.log(" Is Manager: ".concat(isManager));
console.log("------------- Undefined -------------");
//undefined -> undefined / null
var test = undefined;
console.log(" test: ".concat(test));
console.log("------------- Null -------------");
//null
var abc = undefined;
console.log(" abc: ".concat(abc));
console.log("------------- Object -------------");
//object
var mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 35000
};
console.log(mobile);
console.log("------------- Array -------------");
//Array 
var technologies = ['angular', 'react js', 'node js', 'express js'];
console.log(technologies);
console.log("------------- Enum -------------");
//enum
var Month;
(function (Month) {
    Month["JAN"] = "JANUARY";
    Month["FEB"] = "FEBUARY";
    Month["MAR"] = "MARCH";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.JAN);
for (var elem in Month) {
    console.log("".concat(elem, " -> ").concat(Month[elem]));
}
console.log("------------- Function(void) -------------");
//void -> can be used with a function which does not return any value
function greet1(name) {
    var msg = "Good Morning " + name;
    console.log(msg);
}
greet1('Hritik');
console.log("------------- Function(return type) -------------");
//with return type
function greet2(name) {
    var msg = "Good Morning " + name;
    return msg;
}
console.log(greet2('Hritik'));
console.log("------------- any -------------");
//any
var num = 10;
num = 'test';
num = {};
num = true;
num = [];
console.log(num);
