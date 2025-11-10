function greet(name){
    console.log("Hey " + name)
    console.log("This is lecture 58");
    console.log("JavaScript Functions");
    console.log("Functions are reusable blocks of code that perform a specific task.");

}

greet("ashu");


function sum(a, b){
    //console.log(a + b);
    return a + b;
}

result = sum(10, 20);
console.log(result); 

const func = (x)=>{
    console.log(x * x);
}

func(5);