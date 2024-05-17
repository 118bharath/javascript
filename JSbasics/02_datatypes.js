"use strict"; //treat all JS code as newer version

let name = "bharath" // string datatype
let age = 22; // int datatype
let graduated = false // boolean datatype
let status = null // null comes under object datatype
let salary = undefined
console.table([name, age, graduated])
console.log(typeof undefined); // undefined type
console.log(typeof status) //type=object

/*converting string into number*/
let score = "49"
let score1 = "49abc"
let score2 = null
let score3 = undefined
let score4 = false
console.log(score)
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)// if boolean value value = true then it is 1
console.log(valueInNumber4) // if it is false then the value is 0

let booval = 1
let booleanvalue = Boolean(booval)
console.log(booleanvalue)

let agestring = String(age)
console.log(agestring)
console.log(typeof agestring)