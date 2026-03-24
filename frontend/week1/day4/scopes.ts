//* scopes - this means the area where the variable are used.
//* Global Scope - Accessable everywhere
// let globalValue : string = "Priyanshu";

// function greet(){
//     console.log(UserName);
// }
// greet();

//* Function Scope
// function hello(){
//     let blockValue  = "Hello World";
//     console.log(functionValue );
// }hello();
// console.log(functionValue ); error - can't access outside of the function.

//* Blocked Scope
// if(true){
//     let blockValue = 10;
//     console.log(blockValue );
// }
// console.log(blockValue ); error - can only be accessable inside the if-block only.

//? Example 1

// var globalValue1 = 40;
// function access(){

//     const functionValue1 = 20;
//     if(true){
//     let blockValue1 = 30;
//     }

    // console.log(functionValue1); It is accessable inside the function only.
    // console.log(blockValue1); can't accessible outside the block scope.
    // console.log(u); Accessable everywhere 


// console.log(functionValue1); can't accessible outside the function
// console.log(blockValue1); can 't accessible outside the block
// console.log(globalValue1); Accessable everywhere

//? Example 2
// let checkValue = 5;

// if (true) {
//   let checkValue = 10;
//   console.log(checkValue); //10
// }
// console.log(checkValue); //5



