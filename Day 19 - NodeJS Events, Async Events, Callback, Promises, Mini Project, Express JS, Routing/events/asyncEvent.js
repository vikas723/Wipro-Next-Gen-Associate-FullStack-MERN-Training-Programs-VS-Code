const EventEmitter = require("events");
const emitter = new EventEmitter();

/* -------- FUNCTIONS -------- */

// simulate order processing
function orderPlaced() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order processing done...");
      resolve();
    }, 600);
  });
}

// simulate email sending
function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email service completed...");
      resolve();
    }, 800);
  });
}

// simulate inventory update
function updateInventory() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Inventory service completed...");
      resolve();
    }, 1000);
  });
}

/* -------- LISTENERS -------- */

emitter.on("Order Placed", async (data) => { //It automatically returns a Promise, inside it you can use await
  await orderPlaced(); //Pauses only this listener, Waits until orderPlaced() Promise finishes, Does not stop other listeners
  console.log("Listener1 started");
  console.log(`Order ${data.orderId} processed`);
});

emitter.on("Order Placed", async (data) => {
  await sendEmail();
  console.log("Listener2 started");
  console.log(`Email sent for order ${data.user}`);
});

emitter.on("Order Placed", async (data) => {
  await updateInventory();
  console.log("Listener3 started");
  console.log(`Inventory updated for order ${data.orderId}`);
});

/* -------- EMIT EVENT -------- */

emitter.emit("Order Placed", { // event is triggered 
  user: "Vikas",
  orderId: 101
});
