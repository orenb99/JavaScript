"use strict"
const studentsArray= ["David","Vinoth","Divya","Ishitha","Thomas"];
const gradesArray=[80,77,88,95,68];
for(let i=0;i<gradesArray.length;i++){
    let grade="";
    if(gradesArray[i]<60){
        grade="F";
    }
    else
    if(gradesArray[i]<70&&gradesArray[i]>=60){
        grade="D";
    }
    if(gradesArray[i]<80&&gradesArray[i]>=70){
        grade="C";
    }
    if(gradesArray[i]<90&&gradesArray[i]>=80){
        grade="B";
    }
    if(gradesArray[i]<=100&&gradesArray[i]>=90){
        grade="A";
    }
    console.log(studentsArray[i] + " got " +grade);
}