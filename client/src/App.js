import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Login from "./components/login";
import SignUp from "./components/signup";
import Tamplat from "./components/tamplat";
import Courses from "./components/cooursestemp/courses";
import Reset from "./components/reset";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePge";
import UserCourses from "./pages/userCourses";
import AddCorses from "./pages/addCourses";
import Aboutus from "./components/aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="usercourses" element={<UserCourses />} />
          <Route path="add" element={<AddCorses />} />
          <Route path="reset" element={<Reset />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
