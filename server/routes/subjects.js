const express = require("express");
const router = express.Router();
const db = require("../model/db");

const { getAllSubjects } = require("../controllers/subject");

router.route("/").get(getAllSubjects);

module.exports = router;
