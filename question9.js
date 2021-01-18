"use strict"
function divide(x){
    let arr=[];
    while(x!==0){
        let dig=x%10;
        arr.unshift(dig);
        x=(x-dig)/10;
    }
    return arr;
}

let sum=0;
for(let i=100;i<999;i++){
    let arr=divide(i);
    sum=Math.pow(arr[0],arr.length)+Math.pow(arr[1],arr.length)+Math.pow(arr[2],arr.length);
    if(sum===i)
        console.log(i);
}