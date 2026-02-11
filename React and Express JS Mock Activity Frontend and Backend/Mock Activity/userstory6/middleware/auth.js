// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.redirect("/login");

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.redirect("/login");
//     req.user = user;
//     next();
//   });
// };
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.send("Token Missing");
  let token;

// check header
if (req.headers.authorization) {
  token = req.headers.authorization.split(" ")[1];
}

// check cookie
if (!token && req.cookies.token) {
  token = req.cookies.token;
}

if (!token) return res.send("Token Missing");


  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.send("Invalid Token");
    req.user = user;
    next();
  });
};
