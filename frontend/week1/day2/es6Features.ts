//* ES6 (ECMAScript 2015) — this is where modern JavaScript really starts.
var y: number = 10; //old way

let a: number = 10; // new version
const b = 30; // new version

let p: number = 5;
p = 10; // allowed

const q: number = 5;
// q = 10  error

//* arrow function
const count = (s: number, t: number) => s + t;
console.log(count(2, 3));

//* Template literals
let herName: string = "Sahiba";
console.log(`Hello ${herName}`);

//* Array destructing
let numberArray  = [1, 2, 3];
let [first, second, third] = numberArray ;
console.log(first, second, third);

//* Object destructing
let userDetails  = { uname: "John", uage: 25 };
let { uname, uage } = userDetails ;
console.log(uname, uage);

//* Merge Array
let firstArray  = [1,2];
let secondArray  = [3,4];
let combined = [...firstArray, ...secondArray ];



