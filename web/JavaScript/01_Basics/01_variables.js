const accountId = 144553
let accountEmail = "Dhruvsharma@gmail.com"
var accountPassoword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2; not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassoword = "21212121"
accountCity = "Bengaluru"


console.log(accountId);
console.table([accountId,accountEmail,accountPassoword,accountCity,accountState])