const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const limiter = rateLimit({
    windowMs : 60 * 1000,
    max: 20,
    message: "Too many requests"
});

const speedLimiter = slowDown({
    windowMs: 60 * 1000,
    delayAfter : 5,
    delayMs: () => 300
}) 
module.exports ={ limiter, speedLimiter};