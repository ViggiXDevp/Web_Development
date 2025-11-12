console.log("This is lecture 60 based on Strings in JavaScript");

let a = "JAVASCRIPT";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
//console.log(a[11]); // it will return undefined as there is no index 11

console.log("Length of string is ", a.length);

let real_name = "vighnesh";
let friend = "arjun";

console.log("His name is " + real_name + " and his friend is " + friend);
console.log(`His name is ${real_name} and his friend is ${friend}`);  // template literals

let fruit = "Banana";
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.slice(2, 5)); 
console.log(fruit.slice(2));
console.log(fruit.replace("na", "ma"));
console.log(fruit.concat(friend + "boy"));

console.log(fruit); // strings are immutable in JavaScript. So original string will not be changed.
