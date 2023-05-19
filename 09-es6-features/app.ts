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

// Template String ``
let employeeName:string = 'John';
let employeeAge:number = 45;

// string contact (+)
let stringContact:string = "NAME : " + employeeName + " AGE : " + employeeAge;
console.log(stringContact);
// back Tick operator (`)
let templateStr:string = `NAME : ${employeeName} AGE : ${employeeAge}`;
console.log(templateStr);

// 2) Optional Parameters
let printNumbers = function(start:number , end:number=20):void {
    let result:string = '';
    for(let i:number = start; i<= end; i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumbers(0,40);

// 3) let , const
let courseName:string = 'Angular Training';
courseName = 'React JS Training';
console.log(courseName);

const HOST_NAME:string = '127.0.0.1';
console.log(HOST_NAME);

// var vs let
let course:string = 'Engineering';
if(course === 'Engineering'){
    let dept:string = 'IT Services';
}
for(var i:number = 0; i <= 10; i++){

}
console.log(i);

// 4. For-of loops
let colors:string[] = ['white' , 'black' , 'silver' , 'blue' , 'orange'];

// normal for loop
let result:string = '';
for(let i:number = 0; i < colors.length; i++){
    result += `${colors[i].toUpperCase()} `;
}
console.log(result);

// for-in loop -> ES5
result = '';
for(let index in colors){
    result += `${colors[index].toUpperCase()} `;
}
console.log(result);

// for-of loop -> ES6
result = '';
for(let color of colors){
    result += `${color.toUpperCase()} `;
}
console.log(result);


// 5) Arrow Functions =>
// normal function
function greetNF(name:string):void {
    let msg:string = `Hello! ${name}`;
    console.log(msg);
}
greetNF('John');

// function expression
let greetFE = function(name:string):void {
    let msg:string = `Hello! ${name}`;
    console.log(msg);
};
greetFE('John');

// Arrow Function ES6
let greetAF = (name:string):void => {
    let msg:string = `Hello! ${name}`;
    console.log(msg);
};
greetAF('John');

// Function inside an Object
interface Person{
    firstName : string,
    lastName : string,
    fullName();
}

let person:Person = {
    firstName : 'Rajan',
    lastName : 'Jain',
    fullName : () => {
        console.log(`${person.firstName} ${person.lastName}`);
    }
};
person.fullName();



// 6) Destructuring
interface Student {
    name : string,
    age : number,
    course : string,
    address : {
        officeAddress : {
            name : string,
            location : string
        },
        homeAddress : {
            hno : string,
            street : string,
            city : string
        }
    },
    interests : {
        colors : string[],
        movies : string[]
    }
}

let student:Student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        officeAddress : {
            name : 'Apollo Hospitals',
            location : 'Jubilee Hills'
        },
        homeAddress : {
            hno : '1-3-50',
            street : 'Anand Nagar',
            city : 'Hyderabad'
        }
    },
    interests : {
        colors : ['white' , 'black'],
        movies : ['ABC' , 'DEF']
    }
};

console.log(`OFFICE NAME : ${student.address.officeAddress.name}`);
console.log(`OFFICE LOCATION : ${student.address.officeAddress.location}`);

// Destructuring
let {name:officeName , location:officeLocation} = student.address.officeAddress;
console.log(`OFFICE NAME : ${officeName}`);
console.log(`LOCATION : ${officeLocation}`);

// 7) Spread Operator (...)
let employeeOne:any = {
    name : 'John',
    age : 45,
    designation : 'Manager'
};

let address:any = {
    street : 'ABC Street',
    city : 'Hyderabad'
};

let finalObj:any = {...employeeOne , address};
console.log(finalObj);


// Spread Operator with Arrays
let arrayOne:number[] = [10,20,30,40];
let arrayTwo:number[] = [50,60,70,80];
let finalArray:number[] = [...arrayOne , ...arrayTwo];
console.log(finalArray);







