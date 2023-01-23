const { response } = require("express");
const jwt = require("jsonwebtoken");
module.exports = function auther(req, res, next) {
  const token = req.headers["x-auth-token"];
  console.log(token);
  if (!token) {
    return res.status(401).send("you need to log in for adding a course");
  }
  try {
    const decoded = jwt.verify(
      token,
      "whats app im doing jenerat now for the sign up"
    );
    req.user = decoded;
    next();
  } catch (error) {
    response.status(400).send("you need to login");
  }
};
