//* Arrays are the list of values, we can store different types of data
let scores: number[] = [1, 2, 3, 4];
let userNames: string[] = ["Alice", "Bob", "John"];

//for...of
for(let num of scores){
    console.log(num);
}
for(let n of userNames){
    console.log(n);
}

//* mixed type array
let mixed: (number | string | boolean)[] = [1, "hi", true];
console.log(mixed[0]);
console.log(mixed[2]);

//modify elements
let numberList: number[] = [10, 20, 30];
console.log(numberList[0]);
numberList[1] = 50;
console.log(numberList);

//push()
let baseNumbers: number[] = [1, 2];
baseNumbers.push(3); //add element at the last
console.log(baseNumbers);

//pop()
baseNumbers.pop(); //remove element at the end
console.log(baseNumbers);

//unshift()
baseNumbers.unshift(0); // add element at the first
console.log(baseNumbers); 

//shift()
baseNumbers.shift(); // remove element the first
console.log(baseNumbers);

//loop through array
let sequenceNumbers: number[] = [1,2,3];
for(let i = 0; i < sequenceNumbers.length; i++) {
    console.log(sequenceNumbers[i]);
}

//map()
let numbers: number[] = [1,2,3];
let squares = numbers.map(n => n * n); //by using arrow function
console.log(squares); 

//filter()
let studentScores: number[] = [10, 25, 30, 15];
let greaterThan20 = studentScores.filter(n => n > 20);
console.log(greaterThan20);

//indexOf()
console.log(studentScores.indexOf(3)); 

//slice()
let arr2: number[] = [1,2,3,4];
let part = arr2.slice(1,3);
console.log(part);

//splice()
let findNumbers = [1,2,3,4];
findNumbers.splice(1,2); 
console.log(findNumbers);

//? combined example
let operationArray: number[] = [1,2,3,4,5];
let doubled = operationArray.map(n => n * 2);
let filtered = doubled.filter(n => n > 5);
let total = filtered.reduce((acc, curr) => acc + curr, 0);
console.log(doubled);  
console.log(filtered); 
console.log(total);