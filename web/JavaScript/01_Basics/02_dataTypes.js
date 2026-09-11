"use strict"; // treat all js code as a newer version

// alert(3+3); we are using node js not browser

console.log(3+3)
// code readability that should be high
 console.log("Dhruv")

 let name = "Dhruv"
 let age = 21
 let isLoggedIn = false
 let state;

// number => 2 to power 53
// bigint
// string =>""
// boolean=> true/false
// null => standalone value
// undefined =>
// symbol =>unique



// object
console.log(typeof age);



// DataTypes:
// * Javascript is dynamically typed language
// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVaule = 100.3

// const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34545345253452345553n; 



// Non-Primitive (Reference)
// Arrays, Objects, Functions


const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
name:"Dhruv",
age:23,
}

const myFunction = function(){
console.log("Hello world");
}

console.log(typeof bigNumber);



// ******************* Memory management ************************

let myYoutubename = "Dhruvsharma"

let anothername = myYoutubename
anothername = "LuckySharma"

console.log(myYoutubename);
console.log(anothername)

let userOne = {
email:"user@google.com",
upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Dhruv@google.com"

console.log(userOne.email);
console.log(userTwo.email);