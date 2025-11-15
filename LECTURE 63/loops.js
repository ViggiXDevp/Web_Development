let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    
}

numbers.forEach((value, index, array)=>{
    console.log(value, index, array);
})

let obj = {
    a : 1,
    b : 2,
    c : 3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element);  
}


for (const element of numbers) {
    console.log(element);
}