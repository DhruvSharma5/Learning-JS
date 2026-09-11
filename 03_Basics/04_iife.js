// Immediately Invoked Function Expression (IIFE)
// it used to remove the pollution of global scope variables

(function coffee(){
    //Named IIFE

    console.log(`DB CONNECTED`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Dhruv')