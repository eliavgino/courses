import React from "react";
import { useEffect, useContext } from "react";
import { CouresContext } from "./../../context/courses";
import jwt_decode from "jwt-decode";
import "./courses.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const Courses = () => {
  const { courses, getUserCourses, deleteCourses } = useContext(CouresContext);

  useEffect(() => {
    getUserCourses();
    console.log(courses);
    console.log(jwt_decode(localStorage.getItem("token")).user_id);
  }, []);
  return (
    <div class="container">
      {courses.map((val) => (
        <div class="card" style={{ after: "SQL" }}>
          <div class="imgBx">
            <img src={val.subject_pic} />
          </div>
          <div class="contentBx">
            <h2>{val.name}</h2>
            <div class="subject">
              <h3>{val.subject}</h3>
              <span>level : {val.level}</span>
            </div>
            <div class="defuclte"></div>
            <button
              className="btn"
              onClick={() =>
                deleteCourses({
                  user_id: val.user_id,
                  subject: val.subject,
                })
              }
            >
              delete course
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
