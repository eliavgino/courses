const express = require("express");
const db = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../model/userSchema");

const { generateJWT } = require("../controllers/generatschema");

exports.adduser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let query = `SELECT name FROM users WHERE email=$1 `;
    email = [req.body.email];
    let user = await db.query(query, email);
    console.log(user.rowCount);
    if (user.rowCount != 0) return res.status(400).send("user already exist");

    const sqlquery = `INSERT INTO users (name,email,password)
        VALUES($1,$2,$3) RETURNING*`;
    const values = [req.body.name, req.body.email, req.body.password];
    const salt = await bcrypt.genSalt(10);
    values[2] = await bcrypt.hash(values[2], salt);
    const result = await db.query(sqlquery, values);
    let resultObj = result.rows[0];

    const token = jwt.sign(
      { user_id: resultObj.user_id, name: resultObj.name },
      "whats app im doing jenerat now for the sign up"
    );
    console.log(jwt.decode(token));
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send({ ...resultObj, token });
    // res.send(result.rows);
  } catch (err) {
    result = {};
    console.log(err);
    res.status(401).send(err.message);
  }
};

exports.showallusers = async (req, res) => {
  const sqlquery = `SELECT * FROM users `;
  try {
    const result = await db.query(sqlquery);
    res.send(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

//get all user courses
exports.showalluserCourses = async (req, res) => {
  const getInnerJoinQuery = `SELECT subjects.subject, courseslist.name,subjects.subject_pic,subjects.level,subjects.rating,courseslist.user_id
  FROM courseslist
  INNER JOIN subjects ON courseslist.subject_id=subjects.subject_id
  WHERE courseslist.user_id=$1`;
  console.log("what i get in the body:" + req.body.user_id);
  try {
    const result = await db.query(getInnerJoinQuery, [req.body.user_id]);
    res.send(result.rows);
    console.log(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.showaUserById = async (req, res) => {
  const sqlquery = `SELECT * FROM users  WHERE user_id=${req.params.id}`;
  try {
    const result = await db.query(sqlquery);
    res.send(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.showaUserByEmail = async (req, res) => {
  const sqlquery = `SELECT * FROM users  WHERE email=$1`;
  let email = [req.body.email];
  try {
    const result = await db.query(sqlquery, email);
    res.send(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
exports.resetPassword = async (req, res) => {
  //check if the user exist
  const getTheUserQuery =
    "SELECT name,email,password FROM users WHERE email=$1";
  //update the password in the place of the mail
  const updatTheUserPasswordQuery = `UPDATE users
  SET password = $1
  WHERE email=$2`;
  let values = [req.body.password, req.body.email];
  try {
    let user = await db.query(getTheUserQuery, [req.body.email]);
    if (user.rowCount == 0)
      return res.status(400).send("invalid email or password");
    const salt = await bcrypt.genSalt(10);
    values[0] = await bcrypt.hash(values[0], salt);
    const result = await db.query(updatTheUserPasswordQuery, values);
    res.send("done");
  } catch (err) {
    res.status(401).send(err.message);
  }
};
