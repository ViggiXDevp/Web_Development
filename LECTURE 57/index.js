console.log("Tutorial on loops in JavaScript");

// for loop
let a = 1;
for(let i = 0; i < 100; i++){
    console.log(a + i);
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// for-in loop
for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

// for-of loop
for (const c of "Vighnesh") {
    console.log(c);
}

// while loop
let j = 0;
while(j < 10){
    console.log(j);
    j++;
}