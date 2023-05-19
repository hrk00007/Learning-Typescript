/*
    while loop
    -------------

    initialization;
    while(condition){
        // statements
        // incr / decr (last line)
    }
 */
// 0 - 10 diff 1
let i:number = 0;
let result:string = '';
while(i <= 10){
    if(i <= 9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);

// 20 - 0 diff is 2
i = 20;
result = '';
while(i >= 0){
    if(i > 0){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i -= 2
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
i = 1;
while(i<= count){
    let j:number = 1;
    while(j <= i){
        result += ` * `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);















