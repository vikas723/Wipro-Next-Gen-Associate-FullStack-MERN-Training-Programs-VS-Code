const fs    = require("fs");
const { clear } = require("console");
console.log("1. start");
 fs.readFile("bigfile.txt",()=>{  /*Node does NOT wait , File reading is sent to background (libuv thread),     No output yet */
        console.log("4. File read call back "); /*When bigfile.txt is fully read, the callback executes: */
    });
    console.log("2. Js thread continue")
    let count=0;
    const interval=setInterval(()=>{ /*This starts a timer that runs every 300 milliseconds. */
        console.log(`3. serving other user ${++count}`);
        if(count==3) clearInterval(interval);
    },300);

    
/*What Each Part Means
fs.readFile

Asynchronous

Goes to background

Callback runs later

setInterval

Simulates serving other users

Shows Node can multitask

clearInterval

Stops repeating timer.*/