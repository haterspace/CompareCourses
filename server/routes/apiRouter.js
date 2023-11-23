const express = require("express");
const { Course, Company } = require("../db/models");

const router = express.Router();

// router.route('/').post(async (req, res) => {
//   const newPost = await Course.create(req.body);
//   res.json(newPost);
// });

router.get("/paginatedCourses/:id", async (req, res) => {
  const { id } = req.params;
  if (id === "null") {
    const allCourses = await Course.findAll({ include: Company });
    res.json(allCourses);
  } else {
    try {
      const offset = (id - 1) * 6;
      const result = await Course.findAndCountAll({
        include: [{ model: Company }],
        limit: 6, // Максимальное количество записей
        offset, // Смещение от начала
      });
      console.log("Найдено курсов:", result.count);
      console.log("Курсы на странице", id, ":", result.rows.length);
      res.json(result.rows);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const oneCourse = await Course.findOne({
        where: { id: req.params.id },
        include: Company,
      });
      res.json(oneCourse);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  })
  .delete(async (req, res) => {
    try {
      console.log(req.params.id);
      await Course.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

module.exports = router;
