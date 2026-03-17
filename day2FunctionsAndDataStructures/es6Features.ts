//* ES6 (ECMAScript 2015) — this is where modern JavaScript really starts.
var x: number = 10; //old way

let a: number = 10; // new version
const b = 30; // new version

let p: number = 5;
p = 10; // allowed

const q: number = 5;
// q = 10  error

//* arrow function
const count = (s: number, t: number) => s + t;
console.log(add(2, 3));

//* Template literals
let herName: string = "Sahiba";
console.log(`Hello ${herName}`);

//* Array destructing
let arr12 = [1, 2, 3];
let [j, k, l] = arr12;
console.log(j, k, l);

//* Object destructing
let user13 = { uname: "John", uage: 25 };
let { uname, uage } = user13;
console.log(uname, uage);

//* Merge Array
let aa = [1,2];
let bb = [3,4];
let combined = [...aa, ...bb];



