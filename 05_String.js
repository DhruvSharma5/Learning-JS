const name = "Dhruv";
const repoCount = 50;

// console.log(name+repoCount+" Vaule"); not good

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // we also called it string interpolation

const gameName = new String("Dhruv-Gamer");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);


const newStringOne = "   Dhruv   "
console.log(newStringOne);
// trim works on spaces and line spaces only
console.log(newStringOne.trim());

const url = "https://Dhruv.com/dhruv%29sharma"

console.log(url.replace('%29','_'))
console.log(url.includes('Dhruv'))

console.log(gameName.split('-')) 