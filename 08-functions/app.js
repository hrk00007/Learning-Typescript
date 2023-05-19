// a simple function
function greet() {
    var msg = 'Good Evening';
    console.log(msg);
}
greet();
// a function with parameters
function printData(name, age) {
    var msg = "Hello ".concat(name, " You are just ").concat(age, " yrs Old!");
    console.log(msg);
}
printData('Hritik', 32);
// a function with return Type
function reverseString(str) {
    var temp = '';
    for (var i = str.length - 1; i >= 0; i--) {
        temp += "".concat(str.charAt(i));
    }
    return temp;
}
var result = reverseString('HRITIK');
console.log(result);
// normal function , function expression , arrow function
var sum = function (a, b) {
    var result = a + b + a;
    console.log(result);
};
sum(10, 20);
// arrow function ES6
var add = function (a, b) {
    var result = a + b;
    console.log(result);
};
add(10, 20);
var printObject = function (mobile) {
    console.log(mobile);
};
var mobileOne = {
    brand: 'Apple',
    color: 'Silver',
    price: 35000
};
printObject(mobileOne);
printObject({ brand: 'Lenovo', price: 15000, color: 'black' });
var printArray = function (products) {
    return products.map(function (product) { return product.name; });
};
var products = [
    {
        id: '101a',
        name: 'Smart Watch',
        qty: 2,
        price: 850
    },
    {
        id: '202b',
        name: 'Mobile',
        qty: 3,
        price: 18500
    }
];
var productNames = printArray(products);
console.log(productNames);
// Prepare a Chicken Curry using Functions
// https://www.youtube.com/watch?v=w6ZKP7gnYls&list=PLgp11Hu-N4DT4AdRvvFkuKuqaRCE7rnro&index=21
