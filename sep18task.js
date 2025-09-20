let operator = prompt("Enter the operator (+,-,/,*)");
let x = prompt("Enter your first number");
let y = prompt("Enter your second number");
if (operator === "+") {
    console.log(+x + +y);
} 
else if (operator === "-") {
    console.log(x-y)
}
else if(operator === "/"){
    if (y === "0"){
            console.log("Error! Division by zero is not allowed.")
    }
    else{
         console.log(x/y)
    }
}
else if(operator === "*"){
    console.log(x*y);
}
else {
    console.log("Error! Invalid operator.")
    }