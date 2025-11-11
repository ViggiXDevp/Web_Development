/* Create a faulty Calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:
    + ---> -
    - ---> /
    * ---> +
    / ---> **

It performs wrong operations 10% of the time
 */


let random = Math.random(); 
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let operator = prompt("Enter operator (+, -, *, /): ");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if(random > 0.1){
    console.log(`The result is ${a} ${operator} ${b}`);

} else{
    c = obj[operator];
    console.log(`The result is ${a} ${c} ${b}`);
}