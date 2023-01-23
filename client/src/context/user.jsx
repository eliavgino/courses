import jwt_decode from "jwt-decode";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { CleanHands } from "@mui/icons-material";

export const UserContext = createContext();

function UserProvider(props) {
  const { children } = props;
  const url = "http://localhost:4000/api/v1/user";
  const [users, setusers] = useState([]); //מערך שך האנימלס שהוסתוופסו
  const [errorMsg, setErrorMsg] = useState(null);
  const [userName, setUsername] = useState("");
  //const [token, setToken] = useState("");
  //console.log(token);
  const addNewUser = async (userObj) => {
    try {
      const { data } = await axios.post(url, userObj, {});
      // const token = result.headers["x-auth-token"];
      // console.log(token);
      // localStorage.setItem("token", token);

      console.log(data.token);
      localStorage.setItem("token", data.token);
      console.log(jwt_decode(localStorage.getItem("token")));
      setusers([...users, ...data]);
      // console.log(result.data);
      // alert("Hello" + data.name + "welcome to our website");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const authUser = async (userObj) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth",
        userObj,
        {}
      );
      console.log("this is what i send" + userObj.password + userObj.email);
      console.log("this is what i get as a respnonse : " + response.data);
      localStorage.setItem("token", response.data);
      console.log(localStorage.getItem("token"));
      const token = localStorage.getItem("token");
      console.log(jwt_decode(token).user_id);
      setUsername(jwt_decode(token).name);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  //get
  const getAllUsers = async () => {
    try {
      const response = await axios.get(url, {});
      console.log(response);
      setusers(response.data);
    } catch (error) {
      setErrorMsg(error);
      alert(error.message);
    }
  };

  const resetPassword = async (userObj) => {
    try {
      if (userObj.password == userObj.newPassword) {
        const userToSend = { password: userObj.password, email: userObj.email };
        const response = await axios.post(
          "http://localhost:4000/api/v1/user/resetPassword",
          userToSend,
          {}
        );
        console.log("update password");
        alert("password update succesfuly");
      } else {
        alert("check your passwords");
      }
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div>
      <UserContext.Provider
        value={{
          addNewUser,
          users,
          authUser,
          //updatNewUsers,
          getAllUsers,
          resetPassword,
          //   deleteUserById,
          //   setUsersIDUpdat,
          // //   UsersIDUpdat,
          // //   deleteUser,
          // //   authUser,
          // //   roleFilter,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
