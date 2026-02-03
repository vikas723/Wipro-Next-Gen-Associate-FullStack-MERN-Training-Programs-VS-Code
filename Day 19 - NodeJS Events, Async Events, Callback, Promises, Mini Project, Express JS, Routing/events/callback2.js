function login(cb){ /*login(cb), Waits 2 seconds, Prints Login success, Calls cb() → goes to next function */
    setTimeout(()=>{
        console.log("Login success");
        cb();
    },2000)
}
function fetchProfile(cb){
    setTimeout(()=>{
        console.log("Profile fetched");
        cb();
    },2000)
}
function fetchOrders(cb){
    setTimeout(()=>{
        console.log("Orders Fetched");
        cb();
    },2000)
}

/*You created 3 functions:

login

fetchProfile

fetchOrders

Each function:

Waits for 2 seconds using setTimeout

Prints a message

Calls cb() (the callback)*/


/*
What is cb?

cb = Callback Function

It is:

A function

Passed as an argument

Executed after the task finishes
*/