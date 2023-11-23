const express = require('express');

const { CommentComplaint, Comment } = require('../db/models');

const router = express.Router();

router.route('/').post(async (req, res) => {
  console.log(12133123213123, req.session.user);
  try {
    const { body, commentId } = req.body;
    const [, created] = await CommentComplaint.findOrCreate({
      where: { commentId },
      defaults: {
        userId: req.session?.user?.id,
        body,
        commentId,
      },
    });
    if (created) {
      await Comment.update(
        { needToModerate: true },
        {
          where: { id: commentId },
        }
      );
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500).statusMessage(error);
  }
});

module.exports = router;
