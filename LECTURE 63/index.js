let arr = [1, 2, 3, 4, 5];

console.log(arr, typeof arr); // array is of object type
console.log(arr.length); // length of array

console.log(arr[0]);
arr[0] = 12;
console.log(arr); // Arrays are mutable

console.log(arr.toString()); // converts array to string
console.log(arr.join(" and ")); // joins array elements with specified separator
console.log(arr.pop(), arr); // removes last element and returns it

arr.push("vighnesh"); // adds element at the end
console.log(arr);

console.log(arr.shift(), arr); // removes first element and returns it
console.log(arr.unshift("Jack Sparrow"), arr); // adds element at the start and returns new array length

let a = [3, 0, 9];
let b = [4, 5, 6];
console.log(a.concat(b)); // concatenates two arrays

console.log(a.sort()); // sorts array elements as strings

let numbers = [1, 4, 2, 8, 5, 7];
console.log(numbers.splice(2, 3), numbers); // removes 3 elements from index 2
console.log(numbers.splice(1, 0, 22, 69), numbers); // adds elements at index 2


