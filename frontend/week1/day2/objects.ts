//* An object stores key–value pairs.
let currentUser  = {
    name: "Vicky",
    age: 25
};

console.log(currentUser .name);
console.log(currentUser .age);

// Adding types to objects
let employeeDetails: { name: string; age: number } = {
    name: "Ali",
    age: 30
};
console.log(employeeDetails.name);
console.log(employeeDetails.age);

//modify data
let editableUser  = { name: "Sonu", age: 20 };
editableUser .age = 21;


let optionalAgeUser: { name: string; age?: number } = {
    name: "Rajesh"
};
console.log(optionalAgeUser.age); // undefined

//nested object
let userWithAddress  = {
    name: "Kalu",
    address: {
        city: "Bangalore",
        pincode: 560037
    }
};
console.log(userWithAddress .address.city);

//objects inside arrays
let userList  = [
    { name: "Sakti", age: 25 },
    { name: "Mukti", age: 30 }
];

console.log(userList [0].name);

//*object methods
//keys()
let userRecord  = { name: "Rajesh", age: 25 };
console.log(Object.keys(userRecord ));

//value()
console.log(Object.values(userRecord ));

//entries()
console.log(Object.entries(userRecord ));

//* loops in object
let loopUser  = { name: "Vicky", age: 23 };

for (let key in loopUser ) {
    console.log(key, loopUser [key as keyof typeof loopUser ]);
}


