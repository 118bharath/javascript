const marks = 100
console.log(marks);


const price = new Number(100)
console.log(price.toFixed(2));

const amount = 1000000
console.log(amount.toLocaleString('en-IN'));

//++++++++++++++++    Maths Functions    ++++++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-88))
console.log(Math.round(23.56)); // gives round figure of a given number
console.log(Math.ceil(65.84));  //gives the maximum number which is nearest to given number
console.log(Math.floor(24.61));  //gives the floor number


console.log(Math.random()); // this random function gives random numbers only within 0 and 1 and that too in decimal value

console.log(Math.random(0 * 10) + 1); //this method allows you to produce random number more than 1 and avoid 0 case where it shifts one number to left in decimal value

console.log(Math.floor(Math.random() * 10) + 1); // this gives the floor value of genrated random bvalue

//to generate random value within given max and min numbers 

const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max - min + 10) + min));
