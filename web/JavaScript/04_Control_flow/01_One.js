// if

// const isUserloggedIn = true 
// const temperature = 41

// if(temperature === 40){
//     console.log("less than 50")
// }else{
//     console.log("greater then 50")
// }
// console.log("execute")

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)




// const balance = 1000

// if (balance > 500) console.log("test");      // implicit scope
// if (balance > 500) console.log("test"),console.log("test2");      // not a good practice we avoid it in coding

// if (balance < 500) {
//     console.log("less than")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const UserloggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;
if(UserloggedIn && debitCard){
    console.log("Allow to buy Course")
}
if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User logged in")
}