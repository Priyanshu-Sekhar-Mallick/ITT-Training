//* scopes - this means the area where the variable are used.
//* Global Scope - Accessable everywhere
// let UserName: string = "Priyanshu";

// function greet(){
//     console.log(UserName);
// }
// greet();

//* Function Scope
// function hello(){
//     let msg = "Hello World";
//     console.log(msg);
// }hello();
// console.log(msg); error - can't access outside of the function.

//* Blocked Scope
// if(true){
//     let x = 10;
//     console.log(x);
// }
// console.log(x); error - can only be accessable inside the if-block only.

//? Example 1

// var u = 40;
// function access(){

//     const s = 20;
//     if(true){
//     let t = 30;
//     }

    // console.log(s); It is accessable inside the function only.
    // console.log(t); can't accessible outside the block scope.
    // console.log(u); Accessable everywhere 


// console.log(s); can't accessible outside the function
// console.log(t); can 't accessible outside the block
// console.log(u); Accessable everywhere

//? Example 2
// let a = 5;

// if (true) {
//   let a = 10;
//   console.log(a); //10
// }
// console.log(a); //5



