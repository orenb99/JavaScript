"use strict"
const number1=Number(prompt("Enter the first number"));
const number2=Number(prompt("Enter the second number"));
const number3=Number(prompt("Enter the third number"));
const product=number1*number2*number3;
if(product>0){
    alert("the sign is +");
}
if(product<0){
    alert("the sign is -");
}
if(product===0){
    alert("The product is zero");
}