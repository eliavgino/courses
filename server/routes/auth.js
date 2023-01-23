const express = require("express");
const router = express.Router();
const db = require("../model/db");

const { login } = require("../controllers/auth");

router.route("/").post(login);

module.exports = router;
