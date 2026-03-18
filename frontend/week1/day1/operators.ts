// operator are the special type of symbol use to perform some task. there are many operators are there such are:
let a: number = 10;
let b: number = 20;

// Arithmetic - used to perform mathematical operations
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Assignmemt - used to assign value
let x: number = 10;
x+=20;
console.log(x);

// Comparison - used to comapare value either true or false
let p: number = 20;
let q: number = 30;
console.log(p==q); // compares value
console.log(p===q); // compares value as well as type
console.log(p!=q); // true
console.log(a>b); // false
console.log(a<b); //true

// Logical operator - used for condition check
let s: number = 23;
let t: number = 17;
console.log(s>18 && t<18); //true (&& - it will return true if both the condition returns true otherwise return false)
console.log(s<22 && t<20); //false
