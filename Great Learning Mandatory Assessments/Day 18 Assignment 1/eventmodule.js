const EventEmitter = require("events");

const event = new EventEmitter();

// listeners
event.on("userLoggedIn", (name) => {
  console.log(`User ${name} logged in.`);
});

event.on("userLoggedOut", (name) => {
  console.log(`User ${name} logged out.`);
});

// trigger
event.emit("userLoggedIn", "John");
event.emit("userLoggedOut", "John");

// Bonus
setTimeout(() => {
  event.emit("sessionExpired");
}, 5000);

event.on("sessionExpired", () => {
  console.log("Session expired!");
});
