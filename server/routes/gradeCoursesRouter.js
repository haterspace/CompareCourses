const express = require("express");
const { JobCourses, Course, OtherCourses, Like } = require("../db/models");

const router = express.Router();

// router.get("/job", async (req, res) => {
//   try {
//     const allGrades = await JobCourses.findAll({ include: Course });
//     res.json(allGrades);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(501);
//   }
// });

router.get("/job", async (req, res) => {
  try {
    const allLikesFromUser = await Like.findAll({
      where: { userId: req.session?.user?.id },
    });

    const aidishki = allLikesFromUser.map((el) => el.dataValues.courseId);
    const allGrades = await JobCourses.findAll({ include: Course });
    const allLikedGrades = allGrades.filter((el) =>
      aidishki.includes(el.courseId)
    );
    res.json(allLikedGrades);
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});

router.post("/job/:id", async (req, res) => {
  try {
    const { support, actualInfo, portfolio, salaryAverage } = req.body;
    const [findedGradesJob, created] = await JobCourses.findOrCreate({
      where: { userId: req.session?.user?.id, courseId: req.params.id },
      defaults: {
        support,
        actualInfo,
        portfolio,
        salaryAverage,
        // userId: req.session?.user?.id,
        // courseId: req.params.id,
      },
    });

    if (!created) {
      await JobCourses.update(
        {
          support,
          actualInfo,
          portfolio,
          salaryAverage,
        },
        { where: { userId: req.session?.user?.id, courseId: req.params.id } }
      );
      res.sendStatus(200);
    }
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});

router.get("/otherCourses", async (req, res) => {
  try {
    const allLikesFromUser = await Like.findAll({
      where: { userId: req.session?.user?.id },
    });

    const aidishki = allLikesFromUser.map((el) => el.dataValues.courseId);
    const allGrades = await OtherCourses.findAll({ include: Course });
    const allLikedGrades = allGrades.filter((el) =>
      aidishki.includes(el.courseId)
    );
    res.json(allLikedGrades);
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});

router.post("/otherCourses/:id", async (req, res) => {
  try {
    const { practicalTasks, instructors, realLifeApplication } = req.body;
    const [findedGradesJob, created] = await OtherCourses.findOrCreate({
      where: { userId: req.session?.user?.id, courseId: req.params.id },
      defaults: {
        practicalTasks,
        instructors,
        realLifeApplication,
        userId: req.session?.user?.id,
        courseId: req.params.id,
      },
    });

    if (!created) {
      await OtherCourses.update(
        {
          practicalTasks,
          instructors,
          realLifeApplication,
        },
        { where: { userId: req.session?.user?.id, courseId: req.params.id } }
      );
      res.sendStatus(200);
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});
module.exports = router;
