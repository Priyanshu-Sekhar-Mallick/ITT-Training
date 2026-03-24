//* OPtional Chaining (?)- It is used to safely access the properties of an object without causing an error is something missing.
//Nested Object
let userDetails = {
    username:"Priyanshu",
    yop:2024,
    
};
console.log(userDetails.username);

//if missing property
// console.log(userDetails.address.city); // error - Property 'address' does not exist on type

//but by using optional chaining 
// console.log(userDetails.address?.city); // undefined

//* function call
let userActions  ={
    fun:function(){
        console.log("Hello world");
    }
};
userActions.fun?.();

