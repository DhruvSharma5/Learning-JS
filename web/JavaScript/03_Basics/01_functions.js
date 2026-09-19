function sayName() {
    console.log("D");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
}
// sayName()

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
// const result = addTwoNumbers(2,5);

// console.log("Result: " ,result);

function loginUserMessage(username = "sam") {
    // if(username === undefined)
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Dhruv"));


// ******************* CartPrice *************************
function calculateCartPrice(...num1){                //rest operator is used here
    return num1;
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Dhruv",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Dhruv",
    price: 299
})

const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));