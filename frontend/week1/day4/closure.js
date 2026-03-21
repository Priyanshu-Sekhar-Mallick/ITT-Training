//* Closure - A function is remebered the variable from where it was created. It's like a memory who remeber the variable
function outer() {
    var name = "Priyanshu";
    function inner() {
        console.log(name);
    }
    return inner;
}
var result = outer();
result();
//* Array methods
//* reduce() - used for combine all values into one(count sum)
var number = [1, 2, 3, 4];
var sum = number.reduce(function (tot, curr) { return tot + curr; }, 0); // here 0 is the initial value for the tot.
console.log(sum);
//* find() - find first matching value.
var users = [10, 12, 15, 20];
var res = users.find(function (num) { return num > 10; });
console.log(res);
//* some() - used for check at least one value is true
var numbers = [2, 3, 4];
var res1 = numbers.some(function (num) { return num > 2; });
console.log(res1);
//* every() - checks if all values are true.
var numbers2 = [2, 3, 5, 7, 8, 1];
var res2 = numbers2.every(function (num) { return num > 1; });
console.log(res2);
//* callback function - A function is passed as an argument to another function.
function greeting(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayHello() {
    console.log("Bye!");
}
greeting("Priyanshu", sayHello);
//* Arrow function
var print1 = function (a, b) { return a + b; };
console.log(print1(1, 2));
var print2 = function (nam) { return "Hello " + nam; };
console.log(print2("Priyanshu"));
