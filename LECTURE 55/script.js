console.log("This is Lecture 55");

var a = 8; // var is global
a = a + 1;
var b = 12;
var c = "vighnesh";

console.log(a+b+c);  // 21vighnesh
console.log(typeof a, typeof b, typeof c); // number number string

{
    let a = 29; // let is local to the block
    console.log(a); // 10
}
console.log(a); // 9

// const pi = 3.14; // constant
// pi = pi + 1; // error


let x = "hello";
let y = 23;
let z = 69.99;
const p = true;
let q = null;
let r = undefined;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "vighnesh",
    "occupation": "student"
}

console.log(o);
o.age = 19;
console.log(o);