//* An object stores key–value pairs.
let user = {
    name: "Vicky",
    age: 25
};

console.log(user.name);
console.log(user.age);

// Adding types to objects
let user1: { name: string; age: number } = {
    name: "Ali",
    age: 30
};
console.log(user1.name);
console.log(user1.age);

//modify data
let user2 = { name: "Sonu", age: 20 };
user2.age = 21;


let user3: { name: string; age?: number } = {
    name: "Rajesh"
};
console.log(user3.age); // undefined

//nested object
let user4 = {
    name: "Kalu",
    address: {
        city: "Bangalore",
        pincode: 560037
    }
};
console.log(user4.address.city);

//objects inside arrays
let users = [
    { name: "Sakti", age: 25 },
    { name: "Mukti", age: 30 }
];

console.log(users[0].name);

//*object methods
//keys()
let user10 = { name: "Rajesh", age: 25 };
console.log(Object.keys(user10));

//value()
console.log(Object.values(user10));

//entries()
console.log(Object.entries(user10));

//* loops in object
let user11 = { name: "Vicky", age: 23 };

for (let key in user11) {
    console.log(key, user11[key as keyof typeof user11]);
}


