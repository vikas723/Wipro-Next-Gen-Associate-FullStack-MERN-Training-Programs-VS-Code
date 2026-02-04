const express = require('express');
const app = express();

// ----- MIDDLEWARE -----
function loggerMiddleware(req, res, next) {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next(); // move to next route
}

// Use middleware
app.use(loggerMiddleware);

// ----- ROUTES -----
app.get('/', (req, res) => {
  res.send("Home Page");
});

app.get('/about', (req, res) => {
  res.send("About Page");
});

// ----- SERVER -----
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
