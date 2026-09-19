// singleton

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name:"Dhruv",
    "fullname" : "Dhruv Sharma",
    [mySym]: "mykey1",
    age: 23,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser.fullname)
// console.log(JsUser["fullname"])
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "dhruv@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "dhruv@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
