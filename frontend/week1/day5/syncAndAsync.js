//* Synchronous - The code will run line by line. So each line waits for previous line to execute.
console.log("Hello");
console.log("Hii");
console.log("Bye");
//* Asynchronous - In this case code doesn't wait it continues execution.
console.log("Strat");
setTimeout(function () {
    console.log("Inside Timeout"); // It will run later
}, 2000);
console.log("End");
//* setTimeOut - The code will be run after some time or can say the code will runs once after delay.
setTimeout(function () {
    console.log("Runs after some time"); // This line will be print after 3 seconds
}, 3000);
//* setInterval - The code will run again and again after interval(after some time).
setInterval(function () {
    // console.log("Run again and again");
}, 2000);
//? How to stop setInterval
var id = setInterval(function () {
    console.log("Running...");
}, 1000);
setTimeout(function () {
    clearTimeout(id); // by the help of this we can stop the interval.
}, 5000);
