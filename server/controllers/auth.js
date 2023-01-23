const express = require("express");
const db = require("../model/db");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);
  try {
    //call the user by the mail and check if the user exist or not
    const getTheUserQuery = "SELECT * FROM users WHERE email=$1";
    let user = await db.query(getTheUserQuery, [req.body.email]);
    if (user.rowCount == 0)
      return res.status(400).send("invalid email or password");
    const userObj = user.rows[0];
    console.log(user.rows[0]);
    console.log("this is what i get from the user" + user.rows[0]);
    //compare between the passwords
    const userPasswordToCompare = user.rows[0].password;
    const validPassword = await bcrypt.compare(
      req.body.password,
      userPasswordToCompare
    );
    console.log("this is the comper password:" + validPassword);

    //if the comper is true
    if (!validPassword) {
      res.status(400).send("invalid email or password");
    } else {
      const token = jwt.sign(
        { user_id: userObj.user_id, name: userObj.name },
        "whats app im doing jenerat now for the sign up"
      );
      console.log(token);
      //if the user id didn get nothing so wrong login
      res.send(token);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

function validate(req) {
  const schema = {
    email: Joi.string().email().min(4).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(req, schema);
}
