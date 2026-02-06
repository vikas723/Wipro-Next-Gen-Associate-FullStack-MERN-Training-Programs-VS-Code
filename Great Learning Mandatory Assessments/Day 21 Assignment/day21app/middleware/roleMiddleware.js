function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    next();
  } else {
    res.send("Access Denied");
  }
}

module.exports = { isAdmin };
