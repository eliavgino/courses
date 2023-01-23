const express = require("express");
const db = require("../model/db");

exports.getAllSubjects = async (req, res) => {
  const sqlquery = `SELECT * FROM subjects `;

  try {
    const result = await db.query(sqlquery);
    res.send(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
