const user = {
    username: "Dhruv",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function () {
        // console.log("got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// ********************* Constructor Function ***************************

// const promiseOne = new Promise()
function User(username,loginCount,isLoogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoogedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = User("Dhruv",12,true)
const userTwo = User("chaiAurCode",11,false)
console.log(userOne.constructor);
// console.log(userTwo);
