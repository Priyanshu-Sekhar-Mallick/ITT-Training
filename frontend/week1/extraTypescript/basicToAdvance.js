var username = "Priyanshu";
var score = 90;
// score = "Hello"; // error - should not be allowed in typescript.
// console.log(score);
// console.log(username);
//! Basic Types in TypeScript:-
//* type - in typescript the type defines what kind of value a variable can store.
//* number - stores numbers only
var age = 25;
var price = 199.99; // both integers and decimals are number
//* string - stores text only
var username1 = "Priyanshu";
var company = "in time tec"; // text are always going to string
//* boolean - store true/false
var isLoggedIn = true;
var isAdmin = false; // only true/false
//? Examples 1
// let username3: string = "Vicky";
// let agee: number = 23;
// let isEmployee: boolean = true;
// console.log(`Name: ${username3}, Age: ${agee}, EmployeeActive: ${isEmployee}`);
//? Examples 2
// function loginUser(isLoggedIn: boolean) {
//     if (isLoggedIn) {
//         console.log("Welcome!");
//     }
// }loginUser(true);
//? Examples 3
// function getUserInfo(name: string, age:number, isAdmin: boolean): void{
//     if(name!=null){
//         console.log(`Name: ${name}, Age: ${age}, EmployeeActive: ${isAdmin}`)
//     }
// }getUserInfo("Raju", 34, false);
//! Type Annotation vs Type Inference
//* Type Annotation - When you explicitly define the type (use for function, api, and complex data)
var uName = "Priyanshu";
var uAge = 23;
// Here you are telling TypeScript: Hey, this must be a string/number
//* Type Inference - When TypeScript automatically understands the type (use for variable or cleaner code)
var vName = "Priyanshu"; // string
var vAge = 23; // number
// Here typescript will automatically understood the type.
//? Example
function greet(userName) {
    return "Hello " + userName;
}
//! Union (|) & Intersection (&) Types
//* Union Types (|) - Means this or that, like a variable can hold multiple type data
var id;
id = 101; // allowed
id = "A101"; // allowed
// Here the variable can hold multiple types data. either number or string.
//? Examples
function printId(id) {
    console.log("ID:", id);
}
//  printId(101); // ID: 101
// printId("EMP101"); // ID: EMP101
//? Examples
function printLength(id) {
    // console.log(id.length); //  Error(without checking type perforing operations)
    if (typeof id == "string") {
        console.log(id.length);
    }
}
printLength("emp102"); // output - 6 
var staff = {
    name: "Priyanshu",
    empId: 101
};
var user = {
    name: "Priyanshu",
    score: 90
};
var user102 = {
    name: "Raju",
    age: 34
};
var user202 = {
    name: "Rahul",
    age: 25
};
//* declare the structure once and then reuse.
//! Literal Types & Enums
//* Literal - A variable have some specific fixed value
var status1;
status1 = "success"; // allowed
status1 = "error"; // allowed
// status1 = "failed";   //  Error
status1 = "loading"; // allowed 
function handleResponse(status) {
    if (status == "success") {
        console.log("Data Loaded");
    }
}
handleResponse("success");
