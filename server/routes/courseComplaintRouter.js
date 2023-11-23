const express = require('express');
const { CourseComplaint, Course } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  console.log(12133123213123, req.session.user);
  try {
    const { body, courseId } = req.body;
    const [courseComplaint, created] = await CourseComplaint.findOrCreate({
      where: { courseId },
      defaults: {
        userId: req.session?.user?.id,
        body,
        courseId,
      },
    });
    if (created) {
      await Course.update(
        { needToModerate: true },
        {
          where: { id: courseId },
        }
      );
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500).statusMessage(error);
  }
});

module.exports = router;
