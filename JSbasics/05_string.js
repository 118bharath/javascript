//all string references
//https://www.geeksforgeeks.org/javascript-string-reference/

const name = "bharath"
const age = 24
//console.log(name + age + " value");
//this syntax is outdated so intstead of using this use another type of syntax as shown below
console.log(`Hi! my name is ${name} and my age is ${age}`);
//this is called string interpolation
const Fullname = new String("bharath")// it is a string constructor
console.log(Fullname[0]);
console.log(name[0]);
// both works same as second one invokes object as it is defined normally
//console.log(Fullname.__proto__);
console.log(Fullname.toUpperCase());
console.log(Fullname.charAt(2))
console.log(Fullname.indexOf('h'))

const newString = Fullname.substring(0, 4)
console.log(newString)

const anotherstring = Fullname.slice(-6, 2)
console.log(anotherstring);

const gameName = new String('hitesh')
const anotherString1 = gameName.slice(-8, 4)
console.log(anotherString1);

console.log(gameName.split(''))


const string1 = "Bharath"
const string2 = new String("Bharath")
console.log(string1 == string2)
console.log(string1.localeCompare(string2))
//The string.localeCompare() is an inbuilt method in JavaScript
//that is used to compare any two elements and returns a positive number if the reference string is lexicographically greater than the compare string and a negative number if the reference string is lexicographically smaller than the compare string and zero (0)
// if the compare and reference strings are equivalent. 


let sorting = ["Sai Bharath", "Rohit", "Akshay", "chintu"]
let compar = sorting.sort((a, b) => a.localeCompare(b))
console.log(compar);