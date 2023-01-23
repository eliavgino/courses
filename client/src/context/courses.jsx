import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Alert from "@mui/material/Alert";

export const CouresContext = createContext();
function CoursesProvider(props) {
  const { children } = props;
  const url = "http://localhost:4000/api/v1/courses";
  const [courses, setCourses] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const addNewCoures = async (couresObj) => {
    try {
      const response = await axios.post(
        url,
        couresObj,
        { headers: { "x-auth-token": localStorage.getItem("token") } },
        {}
      );
      console.log(response);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const getUserCourses = async () => {
    try {
      const user_id = {
        user_id: jwt_decode(localStorage.getItem("token")).user_id,
      };
      console.log(user_id);
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/userCourses",
        user_id,
        { headers: { "x-auth-token": localStorage.getItem("token") } },
        {}
      );
      console.log(response.data);
      setCourses(response.data);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  const deleteCourses = async (userObj) => {
    try {
      await axios.post(
        "http://localhost:4000/api/v1/courses/delet",
        userObj,
        { headers: { "x-auth-token": localStorage.getItem("token") } },
        {}
      );
      getUserCourses();
    } catch (error) {
      setErrorMsg(error);
      alert(error.message);
    }
  };

  return (
    <div>
      {" "}
      <CouresContext.Provider
        value={{
          addNewCoures,
          getUserCourses,

          courses,
          deleteCourses,
        }}
      >
        {" "}
        {children}{" "}
      </CouresContext.Provider>{" "}
    </div>
  );
}
export default CoursesProvider;
