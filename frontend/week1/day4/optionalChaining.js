var _a;
//* OPtional Chaining (?)- It is used to safely access the properties of an object without causing an error is something missing.
//Nested Object
var user = {
    username: "Priyanshu",
    yop: 2024,
};
console.log(user.username);
//if missing property
// console.log(user.address.city); // error - Property 'address' does not exist on type
//but by using optional chaining 
// console.log(user.address?.city); // undefined
//* function call
var user2 = {
    fun: function () {
        console.log("Hello world");
    }
};
(_a = user2.fun) === null || _a === void 0 ? void 0 : _a.call(user2);
