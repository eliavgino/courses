import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProviser from "./context/user";
import Navbar from "./components/navbar";
import CoursesProvider from "./context/courses";
import Courses from "./components/cooursestemp/courses";
import CourseType from "./components/coursestype/courseType";
import SubjectProvider from "./context/subject";
import UserCourses from "./pages/userCourses";
// import Carousel from "./components/corsescarousela/carousel";
import AddCorses from "./pages/addCourses";
import Login from "./components/login";
import CarouselCourses from "./components/carousleCourses";
import HomePage from "./pages/homePge";
import Aboutus from "./components/aboutus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProviser>
      <CoursesProvider>
        <SubjectProvider>
          <App />
        </SubjectProvider>
      </CoursesProvider>
    </UserProviser>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
