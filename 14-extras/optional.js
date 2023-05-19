// Optional Parameter in Functions
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(10, 20, 30));
console.log(multiply(10, 20));
var std = {
    flatNo: 304,
    streetName: "FC Road",
    landmark: false
};
console.log(std);
