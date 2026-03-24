//* Closure - A function is remebered the variable from where it was created. It's like a memory who remeber the variable
function outer(){
    let name: string = "Priyanshu";
    function inner(){
        console.log(name);
    }

    return inner;
}
let result = outer();
result();

//* Array methods
//* reduce() - used for combine all values into one(count sum)
let number: number[] =[1,2,3,4];
let sum: number = number.reduce((tot , curr) => tot+curr,0); // here 0 is the initial value for the tot.
console.log(sum);

//* find() - find first matching value.
let users:number[] = [10,12,15,20];
let numAboveTen:number | undefined = users.find(num => num >10);
console.log(numAboveTen);

//* some() - used for check at least one value is true
let numbers:number[] = [2,3,4];
let numAboveTwo:boolean = numbers.some(num => num > 2);
console.log(numAboveTwo); 

//* every() - checks if all values are true.
let sequences:number[] = [2,3,5,7,8,1];
let checkAll:boolean = sequences.every(num => num > 1);
console.log(checkAll);


//* callback function - A function is passed as an argument to another function.
function greeting(name:string,callback:()=>void):void {
    console.log("Hello "+name);
    callback();
}

function sayHello():void{
    console.log("Bye!");
}
greeting("Priyanshu",sayHello);

//* Arrow function
const printNumber = (firstNumber:number,secondNumber:number)=>firstNumber+secondNumber;
console.log(printNumber(1,2));

const printString = (userName:string)=>"Hello "+userName;
console.log(printString("Priyanshu"));



