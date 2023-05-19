/*
    do-while
    --------
    initialization;
    do{
        statements
        incr / decr (last line)
    }
    while(condition);
 */
// 0 - 10 diff 1
let i:number = 0;
let result:string = '';
do{
    if(i <= 9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while(i <= 10);
console.log(result);

// 20 - 0 diff is 2
i = 20;
result = '';
do{
    if(i > 0){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i -= 2;
}
while(i >= 0);
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
do{
    let j:number = 1;
    do{
        result += ` * `;
        j++;
    }
    while(j <= i);
    result += `\n`;
    i++;
}
while(i<= count);
console.log(result);
