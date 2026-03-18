function add(a: number, b: number): number{
    return a+b;
}
console.log(add(10,40));

function isEven(num: number): string{
    return num % 2 === 0? "Even":"Odd";
} console.log(isEven(10))

function checkEven(num: number): boolean{
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}console.log(checkEven(29));

//* Arrow function
let username = (username: string): string=>{
    return `Hello, ${username}`;
};
console.log(username("Priyanshu"));

let hello = () => {
    console.log("Hello world");
};
hello();

const sum = (a: number, b: number): number => a + b;
console.log(sum(5, 3));



