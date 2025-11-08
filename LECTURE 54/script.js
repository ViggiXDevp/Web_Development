alert("Hello world");

console.log("Code is running");

var a = prompt("Enter your number: ");

var isTrue = confirm("Are you sure you want to exit?");
if(isTrue){
    console.log("User wants to exit");
}
else{
    console.log("User doesn't want to exit");
}

console.log("Your number is: " + a);