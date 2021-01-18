"use strict"
const gradesArray=[80,77,88,95,68];
let grade="";
let avg=0;
for(let i=0;i<gradesArray.length;i++){
    avg+=gradesArray[i];
}
avg/=gradesArray.length;
    if(avg<60){
        grade="F";
    }
    else
    if(avg<70&&avg>=60){
        grade="D";
    }
    if(avg<80&&avg>=70){
        grade="C";
    }
    if(avg<90&&avg>=80){
        grade="B";
    }
    if(avg<=100&&avg>=90){
        grade="A";
    }
    alert("The students got: "+ avg +", and their average mark is: " +grade+".");