"use strict"
const number1=Number(prompt("Enter the first number"));
const number2=Number(prompt("Enter the second number"));
const number3=Number(prompt("Enter the third number"));
const number4=Number(prompt("Enter the forth number"));
const number5=Number(prompt("Enter the fifth number"));
let max=0;
let arr=[number1,number2,number3,number4,number5];
for(let i=0;i<5;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
alert(max);