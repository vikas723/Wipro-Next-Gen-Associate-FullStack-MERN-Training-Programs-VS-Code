
const eventEmitter = require("events"); 
const emitter = new eventEmitter(); // Creating objects 

// Listeners are independent and they can be added and this is loosely coupled
emitter.on("Order Placed", (orderId) => { // You register listeners using .on()
    console.log(`Order ${orderId} processed`) // This whole method from line 6 - 17 is an Argument based function
});

//It broadcast only within the same event name. It does not broadcast across different event names
emitter.on("paymentSuccess", (amount)=>{
    console.log(`Payment of Rs. ${amount} is done`)

})
emitter.on("User Registered", (user)=>{
    console.log(`Welcome mail sent to ${user} sucessfully`)
})

//Emit Event - This triggers the event.
emitter.emit("Order Placed", 101); //emit() Trigger event
emitter.emit("paymentSuccess", 2000);
emitter.emit("User Registered", "Vikas");

// Order Placed, paymentSuccess, User Registered - These are the events 
// Listener
// (orderId) => {
//    console.log(`Order ${orderId} processed`);
// }

// One Event  + Multiple Listeners {(Event) = Order Placed , => is the multiple listeners here}
// emitter.on("Order Placed", (data) => {  
//   console.log("Listener 1:", data.user);
// });

// emitter.on("Order Placed", (data) => {
//   console.log("Listener 2:", data.orderId);
// });

// emitter.emit("Order Placed", { 
//     user: "Vikas", 
//     orderId: 101 
// });

/*
Multiple listeners
emitter.on("order placed" ,() => console.log("Email Sent"));
emitter.on("order placed" ,() => console.log("Inventory Updated"));
emitter.on("order placed" ,() => console.log("Logs Created for Auditing"));
*/


    

