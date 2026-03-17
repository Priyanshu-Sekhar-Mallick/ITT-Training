// control flow statements are used for making decisions. And i can say it is used to return a result as per the conditions.
// let age: number = 12;
// if(age > 18){
//     console.log("You are eligible to vote"); // if condition is true it will run
// }

//* if...else
// if(age > 18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
// }

//* else...if
let mark: number = 78;
if(mark > 80){
    console.log("Grade A");
}else if(mark > 60){
    console.log("Grade B");
}else{
    console.log("Grade C");
}

//* Switch - used when you want to check with many possible values
let day: number = 29;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Unknown Day");  
}

//* Ternary Operator - used for short version of if else.
let age: number = 19;
let result: string = age >= 18 ? "Adult" : "Minor";
console.log(result);
