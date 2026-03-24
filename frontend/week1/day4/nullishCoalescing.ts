//* Nullish Coalescing (??) - It will return right side value if the left side value is null or undefined.
let userName:null = null;
let displayName:null | string = userName ?? "Guest";
console.log(displayName); // Guest

let inputValue:number;
// let defaultValue:number = value ?? 100;
// console.log(defaultValue); //100

let actualValue:number = 50;
let finalValue: number = actualValue ?? 100;
console.log(finalValue);



