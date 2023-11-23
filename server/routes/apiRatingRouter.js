const express = require("express");
const { Rating } = require("../db/models");

const router = express.Router();

router.post("/:courseId", async (req, res) => {
  const { rate } = req.body;
  const courseId = Number(req.params.courseId);
  const { id } = req.session.user;
  const [rating, created] = await Rating.findOrCreate({
    where: { userId: id, courseId },
    defaults: { rate, courseId },
  });
  if (created) {
    // return res.status(200).json({ message: "Ваша оценка добавлена!" });
    return res.status(200).json(rating);
  }
  await Rating.update({ rate }, { where: { userId: id } });
  // return res.status(200).json({ message: "Ваша оценка обновлена!" });
  const findedRate = await Rating.findOne({ where: { userId: id, courseId } });
  return res.status(200).json(findedRate);
});

router.get("/:courseId", async (req, res) => {
  const courseId = Number(req.params.courseId);
  const courseRating = await Rating.findAll({
    where: { courseId },
    //  attributes: ["rate"],
  });
  const a = [];
  courseRating.map((el) => a.push(el.rate));

  let average = a.reduce((accum, current) => accum + current, 0) / a.length;
  if (courseRating.length === 1) average = courseRating[0].rate;
  return res.json(average);
});

module.exports = router;
