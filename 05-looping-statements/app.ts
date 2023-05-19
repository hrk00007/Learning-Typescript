// looping statements
/*
    for loop
    for(initialization;condition;incr/decr){
        ..... statements
    }
 */
// 0 - 10 diff 1
let result:string = '';
for(let i:number = 0; i <= 10; i++){
    if(i <= 9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// 20 - 0 diff is 2
result = '';
for(let i:number = 20; i >= 0 ; i -= 2){
   if(i > 0){
       result += `${i}, `;
   }
   else{
       result += `${i}`;
   }
}
console.log(result);

// print stars -> 5
/*
    *
    * *
    * * *
    * * * *
    * * * * *
 */
let count:number = 9;
result = '';
for(let i:number = 1; i<= count; i++){
    for(let j:number = 1; j <= i; j++){
        result += ` * `;
    }
    result += `\n`;
}
console.log(result);










