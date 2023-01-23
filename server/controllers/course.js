const express = require("express");
const db = require("../model/db");

exports.addCours = async (req, res) => {
  try {
    const subjectId_Query = `SELECT subject_id FROM subjects WHERE subject = $1;`;
    const subjectName_Values = [req.body.subject];
    const subjectIdResult = await db.query(subjectId_Query, subjectName_Values);

    let query = `SELECT user_id FROM coursesList WHERE subject_id=$1 and user_id=$2`;
    let user = await db.query(query, [
      subjectIdResult.rows[0].subject_id,
      req.body.user_id,
    ]);
    if (user.rowCount != 0)
      return res.status(400).send("you already in this course try another");

    const checkCourseCount_Query =
      "SELECT COUNT(name) FROM courseslist WHERE name LIKE $1";
    const checkCourseCount_Values = [req.body.subject + "%"];
    const courseCount = await db.query(
      checkCourseCount_Query,
      checkCourseCount_Values
    );

    const user_id = req.body.user_id;

    const ceil = Math.ceil((parseInt(courseCount.rows[0].count) + 1) / 22);
    console.log("ceil", ceil);
    console.log("subject result", subjectIdResult.rows[0].subject_id);

    const insertNewTableRowQuery = `INSERT INTO courseslist (name,user_id,subject_id) VALUES ($1,$2,$3) RETURNING *`;
    const insertNewTableRowValues = [
      req.body.subject +
        Math.ceil((parseInt(courseCount.rows[0].count) + 1) / 22),
      user_id,
      subjectIdResult.rows[0].subject_id,
    ];

    console.log(
      req.body.subject +
        Math.ceil((parseInt(courseCount.rows[0].count) + 1) / 22)
    );

    const addCourse = await db.query(
      insertNewTableRowQuery,
      insertNewTableRowValues
    );

    res.send(addCourse.rows);
  } catch (err) {
    res.send(err.message);
  }
};

exports.showAllUserCourses = async (req, res) => {
  const sqlquery = `SELECT * FROM coursesList WHERE user_id=$1`;
  const user_id = [req.body.user_id];
  console.log(req.body);
  try {
    const result = await db.query(sqlquery, user_id);
    res.send(result.rows);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.deletUserCourse = async (req, res) => {
  try {
    //return subject id from subject name
    const subjectId_Query = `SELECT subject_id FROM subjects WHERE subject = $1;`;
    const subjectName_Values = [req.body.subject];
    const subjectIdResult = await db.query(subjectId_Query, subjectName_Values);

    console.log(subjectIdResult.rows[0].subject_id);

    //get the user id to put in theceil of the deleted user
    let lastUser_idQuery =
      "SELECT user_id FROM courseslist WHERE subject_id=$1 ORDER BY  course_id DESC LIMIT 1";
    const lastUser_id = await db.query(lastUser_idQuery, [
      subjectIdResult.rows[0].subject_id,
    ]);

    console.log(lastUser_id.rows[0].user_id);
    //delet all the user only if this is the last user
    const deletUserFromCoursesQuery = `DELETE  FROM coursesList WHERE subject_id=$1 and user_id=$2`;
    const queryValues = [
      subjectIdResult.rows[0].subject_id,
      lastUser_id.rows[0].user_id,
    ];
    const deletUserFromCourses = await db.query(
      deletUserFromCoursesQuery,
      queryValues
    );

    //switch the deleted user with the last user of the same course
    const updatTheDeletedUserQuery = `UPDATE courseslist
      SET user_id = $1
      WHERE user_id=$2`;
    const usersToSwitchValues = [lastUser_id.rows[0].user_id, req.body.user_id];
    const deletAndSwitch = await db.query(
      updatTheDeletedUserQuery,
      usersToSwitchValues
    );

    res.send("done");
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

//select subject id from subjects where subject= subject
