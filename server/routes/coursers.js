const express = require("express");
const router = express.Router();
const db = require("../model/db");

const {
  addCours,
  showAllUserCourses,
  deletUserCourse,
} = require("../controllers/course");
const auth = require("../middlewares/auth");

router.route("/").post(auth, addCours);
//router.route("/userCorses").post(showAllUserCourses);
router.route("/delet").post(auth, deletUserCourse);

module.exports = router;
