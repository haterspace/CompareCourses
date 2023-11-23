const express = require("express");
const { Op, Sequelize } = require("sequelize");
const { Course } = require("../db/models");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const findCourse = await Course.findAll({
      where: Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("name")), {
        [Op.substring]: name.toLowerCase(),
      }),
    });
    res.status(200).json(findCourse);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
