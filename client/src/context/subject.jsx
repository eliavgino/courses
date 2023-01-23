import jwt_decode from "jwt-decode";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const SubjectContext = createContext();

function SubjectProvider(props) {
  const { children } = props;
  const url = "http://localhost:4000/api/v1/subject";
  const [coursesType, setCoursesType] = useState([]);

  //get
  const getAllSubjects = async () => {
    try {
      const response = await axios.get(url, {});
      setCoursesType(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <SubjectContext.Provider value={{ getAllSubjects, coursesType }}>
        {children}
      </SubjectContext.Provider>
    </div>
  );
}

export default SubjectProvider;
