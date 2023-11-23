const express = require('express');
const {
  CourseComplaint,
  User,
  Course,
  Comment,
  CommentComplaint,
} = require('../db/models');

const router = express.Router();

router.get('/courseComplaints', async (req, res) => {
  try {
    const editCourses = await CourseComplaint.findAll({
      include: [
        { model: User },
        { model: Course, where: { needToModerate: true } },
      ],
    });
    res.json(editCourses);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/commentComplaints', async (req, res) => {
  try {
    const editComments = await CommentComplaint.findAll({
      include: [
        { model: User },
        { model: Comment, where: { needToModerate: true } },
      ],
    });
    res.json(editComments);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/courseComplaint/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Course.update({ needToModerate: false }, { where: { id } });
    await CourseComplaint.destroy({ where: { courseId: id } });
    res.json(id);
  } catch (error) {
    res.sendStatus(500).statusMessage(error);
  }
});

router.post('/commentComplaint/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.update({ needToModerate: false }, { where: { id } });
    await CommentComplaint.destroy({ where: { commentId: id } });
    res.json(id);
  } catch (error) {
    res.sendStatus(500).statusMessage(error);
  }
});

router.delete('/deleteComment/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await CommentComplaint.destroy({ where: { commentId: id } });
    await Comment.destroy({ where: { id } });
    res.json(id);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete('/deleteCourse/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Course.destroy({ where: { id } });
    res.json(id);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
