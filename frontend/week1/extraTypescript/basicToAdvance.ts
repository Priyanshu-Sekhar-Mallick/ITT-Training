let username: string = "Priyanshu";
let score: number = 90;
// score = "Hello"; // error - should not be allowed in typescript.

// console.log(score);
// console.log(username);

//! Basic Types in TypeScript:-
//* type - in typescript the type defines what kind of value a variable can store.


//* number - stores numbers only
let age: number = 25;
let price: number = 199.99; // both integers and decimals are number

//* string - stores text only
let username1: string = "Priyanshu";
let company: string = "in time tec"; // text are always going to string

//* boolean - store true/false
let isLoggedIn: boolean = true;
let isAdmin: boolean = false; // only true/false

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
let uName: string = "Priyanshu"; 
let uAge: number = 23; 
// Here you are telling TypeScript: Hey, this must be a string/number

//* Type Inference - When TypeScript automatically understands the type (use for variable or cleaner code)
let vName = "Priyanshu"; // string
let vAge = 23; // number
// Here typescript will automatically understood the type.

//? Example
function greet(userName: string): string {
   return "Hello " + userName;
}


//! Union (|) & Intersection (&) Types
//* Union Types (|) - Means this or that, like a variable can hold multiple type data
let id: number | string;

id = 101;      // allowed
id = "A101";   // allowed
// Here the variable can hold multiple types data. either number or string.

//? Examples
function printId(id: number | string) {
    console.log("ID:", id);
 }
//  printId(101); // ID: 101
// printId("EMP101"); // ID: EMP101

//? Examples
function printLength(id: number | string) {
    // console.log(id.length); //  Error(without checking type perforing operations)
    if(typeof id == "string"){
        console.log(id.length);
    }
}
printLength("emp102"); // output - 6 
//* And this concept is known as type narrowing


//* Intersection Types (&) - Means this and that(the variable must satisfy all the type) 
type Person = {
    name: string;
};

type Employee = {
    empId: number;
};

type Staff = Person & Employee;

let staff: Staff = {
    name: "Priyanshu",
    empId: 101
};

//? Examples 
type Student = {
   name: string;
};

type Marks = {
   score: number;
};

let user: Student & Marks = {
    name: "Priyanshu",
    score: 90
};

//! Type Aliases vs Interfaces
//* Type Aliases - It is the way to give a name to any type
type User101 ={
    name: string,
    age: number
};

let user102: User101 = {
    name:"Raju",
    age: 34
};
//* So instead of writting the type again and again write once and reuse everytime when you want.

//* Interface - Interface is also used to define object structure
interface User103 {
    name: string;
    age: number;
}

let user202: User103 = {
    name: "Rahul",
    age: 25
};
//* declare the structure once and then reuse.



//! Literal Types & Enums
//* Literal - A variable have some specific fixed value
let status1: "success" | "error" | "loading";

status1 = "success";  // allowed
status1 = "error";    // allowed
// status1 = "failed";   //  Error
status1 = "loading"; // allowed 
//* Only specific fixed value are allwed.

type Status =  "success" | "error" | "loading";
function handleResponse(status:Status): void{
    if(status == "success"){
        console.log("Data Loaded");
    }
}
// handleResponse("success");

//* Enum = group of related constants
enum Status101 {
    SUCCESS,
    ERROR,
    LOADING
}

let currentStatus: Status101 = Status101.SUCCESS;

//? Examples
enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

function checkRole(role: UserRole) {
    if (role === UserRole.ADMIN) {
        console.log("Full access");
    }
} 
checkRole(UserRole.ADMIN);




