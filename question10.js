"use strict"
let length=Number(prompt("enter rows"));
let str="";
for(let i=1;i<=length;i++){
    str="";
    for(let j=1;j<=length;j++){
        if(j<=i){
            str+="*";
        }
    }
    console.log(str);
}