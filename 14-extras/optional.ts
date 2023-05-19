
// Optional Parameter in Functions
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(10,20,30))
console.log(multiply(10,20))


interface address{
    flatNo:number;
    streetName:string;
    landmark?:string|boolean
}

let std:address={
    flatNo:304,
    streetName:"FC Road",
    landmark:false
}

console.log(std)