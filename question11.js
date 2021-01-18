let max=1;
let length=0;
number1=Number(prompt("Enter the first number"));
number2=Number(prompt("Enter the second number"));
if(number1>number2){
    length=number2;
}
else{
    length=number1;
}
for(let i=1;i<=length;i++){
    if(number2%i===0&&number1%i===0){
        max=i;
    }
}
alert(max);