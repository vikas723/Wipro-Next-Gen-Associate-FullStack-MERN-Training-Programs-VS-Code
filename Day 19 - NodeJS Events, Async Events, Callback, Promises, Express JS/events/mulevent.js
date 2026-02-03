const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("orderPlaced", (data) =>{
    console.log("Listener 1:" , data.user);
});
emitter.on("orderPlaced", (data) => {
   console.log("Listener 2:", data.orderId);
});
emitter.on("orderPlaced", (data) =>{
    console.log("Listener 3:", data.amount);
});

emitter.emit("orderPlaced", {user: "Vikas", 
    orderId: 101, 
    amount: 4000
});



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
