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
    
}