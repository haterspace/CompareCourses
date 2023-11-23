const express = require("express");
const { Course, Like, Company, User } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  // console.log(typeof req.session?.user?.id, "12321332");
  try {
    const allLikedCourses = await Like.findAll({
      where: { userId: req.session?.user?.id },
      include: [
        {
          model: Course,
          include: Company, // Включить модель Company в модель Course
        },
      ],
    });
    // console.log(allLikedCourses);
    res.json(allLikedCourses);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const userId = req.session?.user?.id;
    // Проверяю, есть ли уже лайк от этого пользователя на этот пост
    const existingLike = await Like.findOne({
      where: {
        courseId: Number(req.params.id),
        userId,
      },
    });
    if (!existingLike) {
      // Создал новый лайк
      await Like.create({
        courseId: Number(req.params.id),
        userId,
      });
      res.sendStatus(200);
    } else {
      res.status(200).json({ message: "Вы уже поставили лайк на этот пост" });
    }
  } catch (error) {
    console.error("Ошибка при обработке лайка:", error);
    res.status(500).json({ error: "Ошибка при обработке лайка" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Проверяю, есть ли лайк от этого пользователя на этот пост
    const existingLike = await Like.findOne({
      where: {
        courseId: req.params.id,
        userId: req.session?.user?.id,
      },
    });

    if (existingLike) {
      await existingLike.destroy(); // Убираю лайк
      res.json({ message: "Лайк успешно удален" });
    } else {
      res
        .status(400)
        .json({ message: "Вы еще не поставили лайк на этот пост" });
    }
  } catch (error) {
    console.error("Ошибка при удалении лайка:", error);
    res.status(500).json({ error: "Ошибка при удалении лайка" });
  }
});

module.exports = router;
