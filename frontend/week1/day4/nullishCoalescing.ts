//* Nullish Coalescing (??) - It will return right side value if the left side value is null or undefined.
let name2:null = null;
let res3:null | string = name2 ?? "Guest";
console.log(res3); // Guest

let value:number;
// let count:number = value ?? 100;
// console.log(count); //100

let value2:number = 50;
let count: number = value2 ?? 100;
console.log(count);



