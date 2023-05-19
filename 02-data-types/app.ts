//DataTypes
//string,number,boolean,undefined,null,object,array,void,enum,any

console.log("------------- String -------------")
//string '',"",``
let employeeName:string='John';
console.log(" employeeName:", employeeName)
console.log(' employeeName:', employeeName)
console.log(` employeeName: ${employeeName}`)

console.log("------------- Number -------------")
//number
let employeeAge:number=45;
console.log(` employeeAge: ${employeeAge}`)

console.log("------------- Boolean -------------")
//boolean
let isManager:boolean=false;
console.log(` Is Manager: ${isManager}`)

console.log("------------- Undefined -------------")
//undefined -> undefined / null
let test:undefined=undefined;
console.log(` test: ${test}`)

console.log("------------- Null -------------")
//null
let abc:null=undefined;
console.log(` abc: ${abc}`)

console.log("------------- Object -------------")
//object
let mobile:object={
    brand:'Apple',
    color:'Silver',
    price:35000
}
console.log(mobile)

console.log("------------- Array -------------")
//Array 
let technologies:string[]=['angular','react js','node js','express js']
console.log(technologies)

console.log("------------- Enum -------------")
//enum
enum Month {
    JAN ='JANUARY',
    FEB='FEBUARY',
    MAR='MARCH'
}
console.log(Month)
console.log(Month.JAN)

for(let elem in Month){
    console.log(`${elem} -> ${Month[elem]}`)
}

console.log("------------- Function(void) -------------")
//void -> can be used with a function which does not return any value
function greet1(name:string):void{
    let msg:string ="Good Morning " + name;
    console.log(msg)
}
greet1('Hritik')

console.log("------------- Function(return type) -------------")

//with return type
function greet2(name:string):string{
    let msg:string ="Good Morning " + name;
    return msg;
}
console.log(greet2('Hritik'))

console.log("------------- any -------------")

//any
let num:any=10;
num='test';
num={};
num=true;
num=[];
console.log(num)

