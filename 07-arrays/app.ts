// string array
let colors:string[] = ['white' , 'black' , 'silver' , 'blue' , 'purple'];
console.log(colors);

// object array
interface Employee {
    sno : string,
    name : string,
    age : number,
    designation : string,
    isActive : boolean
}

let employees:Employee[] = [
    {
        sno : '01aa01',
        name : 'John',
        age : 45,
        designation : 'Manager',
        isActive : true
    },
    {
        sno : '02aa02',
        name : 'Wilson',
        age : 55,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        sno : '03aa03',
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        sno : '04aa04',
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    }
];
console.log(employees);

// how many ways we can loop an array
// normal for loop , for-in loop , for-of loop , forEach function , forEach Arrow

// normal for-loop
let result:string = '';
for(let i:number = 0; i< employees.length; i++){
    result += `${employees[i].name} `;
}
console.log(result);

// for-in loop ES5 version
result = '';
for(let index in employees){
    result += `${employees[index].name} `;
}
console.log(result);

// for-of loop ES6 version
result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(result);

// forEach Function
result = '';
employees.forEach(function (employee) {
    result += `${employee.name} `;
});
console.log(result);

// forEach with Arrow function ES6
result = '';
employees.forEach(employee => result += `${employee.name} `);
console.log(result);

// Filtering an array
let juniorEmployees:Employee[] = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// Filter function
let jrEmployees:Employee[] = employees.filter(function (employee) {
    return employee.age <= 30;
});
console.log(jrEmployees);

// Filter with Arrow function
let jrNewEmployees:Employee[] = employees.filter(employee => employee.age <= 30);
console.log(jrNewEmployees);

// map function
let ids:any[] = employees.map(function(employee) {
    return employee.sno;
});
console.log(ids);

// other functions of array
let technologies:string[] = ['html' , 'css' , 'javascript' , 'node js' , 'express js'];
technologies.splice(2,1, 'JQuery');
console.log(technologies);
