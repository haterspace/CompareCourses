const express = require("express");
const { Comment, User } = require("../db/models");

const router = express.Router();

router
  .route("/:id")
  .get(async (req, res) => {
    const notes = await Comment.findAll({
      include: User,
      where: { courseId: req.params.id },
    });
    res.json(notes);
  })
  // исправить
  .delete(async (req, res) => {
    try {
      await Comment.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const newPost = await Comment.create({
      userId: req.session?.user?.id,
      body: req.body.body,
      courseId: req.params.id,
    });
    const sendedComment = await Comment.findOne({
      include: User,
      where: { id: newPost.id },
    });
    res.json(sendedComment);
  });
module.exports = router;
