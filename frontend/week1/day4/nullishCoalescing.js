//* Nullish Coalescing (??) - It will return right side value if the left side value is null or undefined.
var name2 = null;
var res3 = name2 !== null && name2 !== void 0 ? name2 : "Guest";
console.log(res3); // Guest
var value;
// let count:number = value ?? 100;
// console.log(count); //100
var value2 = 50;
var count = value2 !== null && value2 !== void 0 ? value2 : 100;
console.log(count);
