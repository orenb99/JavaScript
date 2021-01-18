"use strict"
for(let i=1;i<=100;i++){
    if(i%3===0){
        if(i%5===0){
        console.log("fizzbuz");
        }
        else{
            console.log("fizz");
        }
    }
    else{
    if(i%5===0){
        console.log("buzz");
        continue;
    }
    else{
        console.log(i);
    }
}
}