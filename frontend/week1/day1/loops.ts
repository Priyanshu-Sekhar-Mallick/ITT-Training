//* loop - if i want to execute a block of code multiple times until it will met a condiotion or it becomes false
// for loop - used when know how many times to repeat the block of code.
//? print number 1 to 10?
for(let i = 1; i<=10; i++){
    console.log(i);
}

//? print in reverse order
for(let i=10;i>0;i--){
    console.log(i);
}

//* while - used when you don't know the exact number of iteration or i can say until condition is true it will run.
//? print number 1 to 20
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

//? print even numbers in a range from 1 to 10?
let j =1;
while(j<=10){
    if(j%2==0){
        console.log(j);
    }
    j++;
}

//* do while - used when you want to execute at the code least once.
let k = 1;
do{
    console.log(k);
    k++;
}while(k<=5)

//* for...of - basically used for loop through list or array
let fruits: string[] = ["apple","banana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}
