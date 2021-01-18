"use strict"
const x=Number(prompt("Enter the first number"));
const y=Number(prompt("Enter the second number"));
const z=Number(prompt("Enter the third number"));
if(x>y&&x>z){
    if(y>z){
        alert(x + " , " + y + " , " + z);
    }
    else{
        alert(x + " , " + z + " , " + y);
    }
}
else{
    if(y>x&&y>z){
        if(x>z){
            alert(y + " , " + x + " , " + z);
        }
        else{
            alert(y + " , " + z + " , " + x);
        }
    }
    else{
            if(x>y){
                alert(z + " , " + x + " , " + y);
            }
            else{
                alert(z + " , " + y + " , " + x);
            }
        }
    }