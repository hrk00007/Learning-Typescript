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
let num1:number=10;
let num2:number=20;
console.log(`SUM: ${num1 + num2}`);
console.log(`SUB: ${num1 + num2}`);
console.log(`MUL: ${num1 + num2}`);
console.log(`DIV: ${num1 + num2}`);

//even or odd
let digit:number=15;
if(digit%2===0){
    console.log(`${digit} is EVEN`)
}
else{
    console.log(`${digit} is ODD`)
}

//short hand math : += , -= , *= , /=
let a:number=10;
let b:number=20;
let add:number=0;

add=add +(a*b)
add+=(a*b);
console.log(`add: ${add}`)

// Conditional operators : < , > , <= , >= , !==
let marks:number=45;
let result:string='';
if(marks<=35){
    result='You Failed The Exam'
}else{
    result='You Passed  The Exam'   
}

console.log(result)

// Logical Operators: && , || , ^
let inRelation:boolean=true;
let parentAgreed:boolean=false;
if(inRelation && parentAgreed){
    console.log('GET MARRY SOON');
}
else{
    console.log('wait until parents agreed');
}

//  Increment / Decr : ++ , --
var x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);
// Ternary operator
// (condition)? true : false;
marks = 45;
result = '';
(marks <= 35) ? result = 'You Failed the Exam' : result = 'You Cleared the Exam';
console.log(result);
// equality  operator == , ===
var p = 10;
var q = 100;
if (p === q) {
    console.log('Both are Equal');
}
else {
    console.log('Both are NOT Equal');
}
