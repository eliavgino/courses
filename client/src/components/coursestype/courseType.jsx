import React from "react";
import "./courseType.css";
import { useEffect, useContext, useState } from "react";
import { SubjectContext } from "./../../context/subject";
import { CouresContext } from "./../../context/courses";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import jwt_decode from "jwt-decode";

const CourseType = () => {
  const { getAllSubjects, coursesType } = useContext(SubjectContext);
  const { addNewCoures } = useContext(CouresContext);
  const [subjectname, setsubjectname] = useState("");
  const [display, setdisplay] = useState("none");
  const [background, setbackgroud] = useState("#110f1600");
  const [pic, setpic] = useState("");
  useEffect(() => {
    getAllSubjects();
  }, []);
  return (
    <div>
      <section className="dark">
        {coursesType.map((val, index) => (
          <div key={index} className="container-subject py-4">
            <article className="postcard dark blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={val.subject_pic}
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href="#">{val.subject}</a>
                </h1>
                <div className="postcard__subtitle small"></div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">{val.description}</div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">{val.level}</li>
                  <li className="tag__item">{val.rating}</li>

                  <button
                    onClick={() => {
                      setsubjectname(val.subject);
                      setdisplay("");
                      setpic(val.subject_pic);
                      setbackgroud("#110f1657");
                      return;
                    }}
                  >
                    {" "}
                    ADD COURSE
                  </button>
                </ul>
              </div>
            </article>
          </div>
        ))}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "#00000073",
            position: "fixed",
            top: 0,
            left: 0,
            display: display,
          }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              position: "fixed",
              top: "30%",
              right: "40%",
              background: "#352f41",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={pic}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                add {subjectname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                confirm you want to add {subjectname} to your courses (all the
                courses are limited harry up)
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  setdisplay("none");
                  addNewCoures({
                    subject: subjectname,
                    user_id: jwt_decode(localStorage.getItem("token")).user_id,
                  });
                }}
              >
                add
              </Button>
              <Button size="small" onClick={() => setdisplay("none")}>
                cancle
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CourseType;
