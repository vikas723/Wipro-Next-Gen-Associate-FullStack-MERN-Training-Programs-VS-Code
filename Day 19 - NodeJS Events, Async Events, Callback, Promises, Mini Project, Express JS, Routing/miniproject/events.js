const Eventemitter = require("events");
const emitter = new Eventemitter();

emitter.on("userlogin", (user) =>{
    console.log(`user ${user} logged in`);
})
emitter.on("dataFetched", ()=>{
    console.log("User data fetched");
})
module.exports = emitter;