const express = require("express");
const { Course, Category } = require("../db/models");

const router = express.Router();

router.post("/:id", async (req, res) => {
  // try {
  //   const oneCategoryCourses = await Course.findAll({
  //     include: Category,
  //     where: {
  //       categoryId: req.body.selected,
  //     },
  //   });
  //   res.status(200).json(oneCategoryCourses);
  // } catch (error) {
  //   res.sendStatus(500);
  // }
  const { id } = req.params;

  try {
    const offset = (id - 1) * 6;
    const categoryId = req.body.selected;
    const result = await Course.findAndCountAll({
      where: { categoryId },
      limit: 6, // Максимальное количество записей
      offset, // Смещение от начала
    });
    console.log("Найдено курсов:", result.count);
    console.log("Курсы на странице", id, ":", result.rows.length);
    res.json(result.rows);
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

module.exports = router;
