const express = require("express");
const app = express();
const cors = require("cors");
const creatUserTable = require("./model/userSchema");
const creatCoursesTable = require("./model/coursesSchema");
const user = require("./routes/users");
const auth = require("./routes/auth");
const subject = require("./routes/subjects");
const courses = require("./routes/coursers");
creatUserTable();
creatCoursesTable();
console.log(` this is the node env ${process.env.NODE_ENV}`); //und
console.log(app.get("env"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/user", user);
app.use("/api/v1/courses", courses);
app.use("/api/v1/auth", auth);
app.use("/api/v1/subject", subject);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`active on ${port}`));
