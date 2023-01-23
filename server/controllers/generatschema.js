const jwt = require("jsonwebtoken");

exports.generateJWT = function () {
  const token = jwt.sign(
    { user_id: this.user_id, name: this.name },
    "whats app im doing jenerat now for the sign up"
  );
  return token;
};
