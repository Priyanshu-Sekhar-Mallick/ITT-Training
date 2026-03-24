function addNumbers(firstNumber: number, secondNumber: number): number{
    return firstNumber+secondNumber;
}
console.log(addNumbers(10,40));

function getEvenOrOdd(num: number): string{
    return num % 2 === 0? "Even":"Odd";
} console.log(getEvenOrOdd(10))

function isNumberEven(num: number): boolean{
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}console.log(isNumberEven(29));

//* Arrow function
let greetUser  = (username: string): string=>{
    return `Hello, ${username}`;
};
console.log(greetUser ("Priyanshu"));

let hello = () => {
    console.log("Hello world");
};
hello();

const calculateSum  = (firstNumber: number, secondNumber: number): number => firstNumber + secondNumber;
console.log(calculateSum (5, 3));



