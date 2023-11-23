const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const userRouter = require("./routes/userRouter");
const apiRouter = require("./routes/apiRouter");
const commentRouter = require("./routes/commentRouter");
const apiRatingRouter = require("./routes/apiRatingRouter");
const apiLikedRouter = require("./routes/apiLikedRouter");
const courseComplaintRouter = require("./routes/courseComplaintRouter");
const gradeCourseRouter = require("./routes/gradeCoursesRouter");
const apiCoursesForCompany = require("./routes/apiCoursesForCompany");
const companyRouter = require("./routes/companyRouter");
const commentComplaintRouter = require("./routes/commentComplaintRouter");
const apiForAdmin = require("./routes/apiForAdmin");
const filterRouter = require("./routes/filterRouter");
const multerRouter = require("./routes/multerRouter");
const findRouter = require("./routes/findRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(cors({ credentials: true, origin: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "sid",
    secret: process.env.SESSION_SECRET ?? "test",
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  })
);

app.use("/api/user", userRouter);
app.use("/api/filter", filterRouter);
app.use("/api/courses", apiCoursesForCompany);
app.use("/api/courses", apiRouter);
app.use("/api/comments", commentRouter);
app.use("/api/ratings", apiRatingRouter);
app.use("/api/like", apiLikedRouter);
app.use("/api/courseComplaints", courseComplaintRouter);
app.use("/api/profile", companyRouter);
app.use("/api/gradeCourses", gradeCourseRouter);
app.use("/api/commentComplaints", commentComplaintRouter);
app.use("/api/adminPage", apiForAdmin);
app.use("/api/multer", multerRouter);
app.use("/api/search", findRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
