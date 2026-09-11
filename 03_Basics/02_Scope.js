let a = 300;
if(true){
    let a = 10
    const b = 20
    // var c = 30        // var is not a scope variable.

    // console.log("INNER: ",a);
}


// console.log(a)
// console.log(b)
// console.log(c)



// *********************** Nested Scope **************************

function one(){
    const username = "Dhruv"


    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()


if(true){
    const username = "Dhruv"
    if(username==="dhruv"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5))                  // Below funtion can be used before declaration 

function addone(num){
    return num+1;
}

console.log(addTwo(5))                   // Below function cannot be use before declaration

const addTwo = function(num){
    return num+2
}