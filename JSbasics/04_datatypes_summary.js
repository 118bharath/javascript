//primitive 7 datatypes
// these are call by values
// types: String,number,Boolean,null,undefined,symbol,BigInt

const score = 100 //Number
const score2 = 100.5 //float
const isLoggedIn = false //boolean
const temp = null
let email; //undefined

const id = Symbol('123')
const id2 = Symbol('123')
//console.log(id2); // in Symbol the values may be same but the return values are not equal
const bigNumber = 639864891283712n


// Reference type(Non-primitive)
// these are call by reference which are directly allocated in memory
// Arrays,Objects, Functions

const cars = ["Porsche", "Benz", "BMW"];
let myobj = {
    name: "Bharath",
    age: 23,
}


// stack and heap memory
// we use stack for primitives datatype and heap for Non-primitive
// primitives use stack memory so when we want to access a variable it gives usa a copy
// Non-primitives use heap memory so when we want to access an object it gives reference of an object

let favouriteMovie = "Batman"
let anotherFavMovie = favouriteMovie
anotherFavMovie = "Endgame"
console.log(anotherFavMovie);
console.log(favouriteMovie);

//ex 2
let user1 = {
    email: "abc@gmail.com",
    password: "123abc",
}

let user2 = user1
user2.email = "xyz@gmail.com"
console.log(user2)
console.log(user1)