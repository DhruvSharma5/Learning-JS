const user = {
    username: "Dhruv",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);       //this is used to reffer current context.
        console.log(this);

    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function coffee(){
//     let username = "dhruv"
//     console.log(this.username)
// }
// coffee()




// const coffee = function(){
//     let username = "Dhruv"
//     console.log(this.username);
// }

const coffee = ()=>{
    let username = "Dhruv"
    console.log(this);
}
// coffee()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }


// const addTwo = (num1,num2) => num1 + num2              //this is implicit arrow function in this we are not using paranthesis
// const addTwo = (num1,num2) => (num1 + num2)               // it is also run without return function which is called implict return

const addTwo = (num1,num2) => ({username:"dhruv"})

console.log(addTwo(3,4))

// const myArray = [2,3,5,6]
// myArray.forEach(()=>{})