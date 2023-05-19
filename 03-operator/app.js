/*
    Arithmetic Operators : + , - , / , * , %;
    Short Hand Math= += , -= , *= , /=
    Conditional operators : < , > , <= , >= , !==
    Logical Operators: && , || , ^
    Increment / Decrement : ++ , --
    Ternary Operator: ?:
    equality Operators: ==,===
*/
// Arithmetic Operators : + , - , / , * , %;
var num1 = 10;
var num2 = 20;
console.log("SUM: ".concat(num1 + num2));
console.log("SUB: ".concat(num1 + num2));
console.log("MUL: ".concat(num1 + num2));
console.log("DIV: ".concat(num1 + num2));
//even or odd
var digit = 15;
if (digit % 2 === 0) {
    console.log("".concat(digit, " is EVEN"));
}
else {
    console.log("".concat(digit, " is ODD"));
}
//short hand math : += , -= , *= , /=
var a = 10;
var b = 20;
var add = 0;
add = add + (a * b);
add += (a * b);
console.log("add: ".concat(add));
// Conditional operators : < , > , <= , >= , !==
var marks = 45;
var result = '';
if (marks <= 35) {
    result = 'You Failed The Exam';
}
else {
    result = 'You Passed  The Exam';
}
console.log(result);
// Logical Operators: && , || , ^
var inRelation = true;
var parentAgreed = false;
if (inRelation && parentAgreed) {
    console.log('GET MARRY SOON');
}
else {
    console.log('wait until parents agreed');
}
