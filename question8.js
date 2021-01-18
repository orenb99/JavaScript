"use strict"
function happy(x){
    let sum=0;
    let dig=0;
    let check=[];
    while(sum!==1&&!check.includes(x)){
        sum=0;
        check.push(x);
        while(x>0){
            dig=x%10;
            sum+=dig*dig;
            x=(x-dig)/10;
        }
        x=sum;
    }
    return (x===1);
}
let count=1;
let arr=[];
while(arr.length<5){
    if(happy(count)===true)
        arr.push(count);
    count++;
}
console.log(arr);