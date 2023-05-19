// string array
var colors = ['white', 'black', 'silver', 'blue', 'purple'];
console.log(colors);
var employees = [
    {
        sno: '01aa01',
        name: 'John',
        age: 45,
        designation: 'Manager',
        isActive: true
    },
    {
        sno: '02aa02',
        name: 'Wilson',
        age: 55,
        designation: 'Sr.Manager',
        isActive: false
    },
    {
        sno: '03aa03',
        name: 'Rajan',
        age: 25,
        designation: 'Software Engineer',
        isActive: true
    },
    {
        sno: '04aa04',
        name: 'Laura',
        age: 28,
        designation: 'Tech Lead',
        isActive: false
    }
];
console.log(employees);
// how many ways we can loop an array
// normal for loop , for-in loop , for-of loop , forEach function , forEach Arrow
// normal for-loop
var result = '';
for (var i = 0; i < employees.length; i++) {
    result += employees[i].name + " ";
}
console.log(result);
// for-in loop ES5 version
result = '';
for (var index in employees) {
    result += employees[index].name + " ";
}
console.log(result);
// for-of loop ES6 version
result = '';
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    result += employee.name + " ";
}
console.log(result);
// forEach Function
result = '';
employees.forEach(function (employee) {
    result += employee.name + " ";
});
console.log(result);
// forEach with Arrow function ES6
result = '';
employees.forEach(function (employee) { return result += employee.name + " "; });
console.log(result);
// Filtering an array
var juniorEmployees = [];
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var employee = employees_2[_a];
    if (employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);
// Filter function
var jrEmployees = employees.filter(function (employee) {
    return employee.age <= 30;
});
console.log(jrEmployees);
// Filter with Arrow function
var jrNewEmployees = employees.filter(function (employee) { return employee.age <= 30; });
console.log(jrNewEmployees);
// map function
var ids = employees.map(function (employee) {
    return employee.sno;
});
console.log(ids);
// other functions of array
var technologies = ['html', 'css', 'javascript', 'node js', 'express js'];
technologies.splice(2, 1, 'JQuery');
console.log(technologies);
