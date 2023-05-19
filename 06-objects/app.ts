// Object -> a real world entity
interface Mobile {
    brand : string,
    color : string,
    price : number,
    isInsured : boolean
}

let mobile:Mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);
console.log(mobile.color);

// Nested Object
interface Address {
    street : string,
    city : string,
    state : string
}

interface Student {
    name : string,
    age : number,
    course : string,
    college : string,
    address : Address
}

let student:Student = {
    name : 'Arjun Reddy',
    age : 23,
    course : "MBBS",
    college : "Osmania Medical College",
    address : {
        street : "Anand Nagar , Jubilee Hills",
        city : "Hyderabad",
        state : "TS"
    }
};
console.log(student);
console.log(student.address);

/* interface intref{
    x:boolean,
    y:string,
    z:number
} */

let obj:{
    x:boolean
    y:string
    z:number
}={
   x: true,
   y: "newput",
   z:10
}