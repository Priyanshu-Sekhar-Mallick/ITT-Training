//* Arrays are the list of values, we can store different types of data
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "John"];

//for...of
for(let num of numbers){
    console.log(num);
}
for(let n of names){
    console.log(n);
}

//* mixed type array
let mixed: (number | string | boolean)[] = [1, "hi", true];
console.log(mixed[0]);
console.log(mixed[2]);

//modify elements
let arr: number[] = [10, 20, 30];
console.log(arr[0]);
arr[1] = 50;
console.log(arr);

//push()
let arr1: number[] = [1, 2];
arr.push(3); //add element at the last
console.log(arr);

//pop()
arr.pop(); //remove element at the end
console.log(arr);

//unshift()
arr.unshift(0); // add element at the first
console.log(arr); 

//shift()
arr.shift(); // remove element the first
console.log(arr);

//loop through array
let set: number[] = [1,2,3];
for(let i = 0; i < set.length; i++) {
    console.log(set[i]);
}

//map()
let nums: number[] = [1,2,3];
let squares = nums.map(n => n * n); //by using arrow function
console.log(squares); 

//filter()
let points: number[] = [10, 25, 30, 15];
let greaterThan20 = points.filter(n => n > 20);
console.log(greaterThan20);

//indexOf()
console.log(points.indexOf(3)); 

//slice()
let arr2: number[] = [1,2,3,4];
let part = arr2.slice(1,3);
console.log(part);

//splice()
let arr3 = [1,2,3,4];
arr3.splice(1,2); 
console.log(arr3);

//? combined example
let arr5: number[] = [1,2,3,4,5];
let doubled = arr5.map(n => n * 2);
let filtered = doubled.filter(n => n > 5);
let total = filtered.reduce((acc, curr) => acc + curr, 0);
console.log(doubled);  
console.log(filtered); 
console.log(total);