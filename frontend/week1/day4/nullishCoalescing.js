//* Nullish Coalescing (??) - It will return right side value if the left side value is null or undefined.
var userName = null;
var displayName = userName !== null && userName !== void 0 ? userName : "Guest";
console.log(displayName); // Guest
var inputValue;
// let defaultValue:number = value ?? 100;
// console.log(defaultValue); //100
var actualValue = 50;
var finalValue = actualValue !== null && actualValue !== void 0 ? actualValue : 100;
console.log(finalValue);
