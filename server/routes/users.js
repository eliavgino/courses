const express = require("express");
const router = express.Router();
const db = require("../model/db");

const {
  adduser,
  showallusers,
  showaUserById,
  showaUserByEmail,
  resetPassword,
  showalluserCourses,
} = require("../controllers/user");
const auth = require("../middlewares/auth");

router.route("/").post(adduser).get(showallusers);
router.route("/:id").get(showaUserById);
router.route("/getByEmail").post(showaUserByEmail);
router.route("/resetPassword").post(resetPassword);
router.route("/userCourses", auth).post(showalluserCourses);

module.exports = router;
