// operator are the special type of symbol use to perform some task. there are many operators are there such are:
let firstNumber: number = 10;
let secondNumber: number = 20;

// Arithmetic - used to perform mathematical operations
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

// Assignmemt - used to assign value
let x: number = 10;
x+=20;
console.log(x);

// Comparison - used to comapare value either true or false
let valueOne: number = 20;
let valueTwo: number = 30;
console.log(valueOne == valueTwo); // compares value
console.log(valueOne === valueTwo); // compares value as well as type
console.log(valueOne != valueTwo); // true
console.log(valueOne > valueTwo); // false
console.log(valueOne < valueTwo); //true

// Logical operator - used for condition check
let personAge: number = 23;
let friendAge: number = 17;
console.log(personAge > 18 && friendAge < 18); //true (&& - it will return true if both the condition returns true otherwise return false)
console.log(personAge < 22 && friendAge < 20); //false
