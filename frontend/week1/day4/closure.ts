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
let res:number | undefined = users.find(num => num >10);
console.log(res);

//* some() - used for check at least one value is true
let numbers:number[] = [2,3,4];
let res1:boolean = numbers.some(num => num > 2);
console.log(res1); 

//* every() - checks if all values are true.
let numbers2:number[] = [2,3,5,7,8,1];
let res2:boolean = numbers2.every(num => num > 1);
console.log(res2);


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
const print1 = (a:number,b:number)=>a+b;
console.log(print1(1,2));

const print2 = (nam:string)=>"Hello "+nam;
console.log(print2("Priyanshu"));



