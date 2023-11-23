const sharp = require('sharp');
const fs = require('fs/promises');
const express = require('express');
const { Course, Company } = require('../db/models');
const upload = require('../middlewares/multerMid');

const router = express.Router();

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    const imgName = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${imgName}`, outputBuffer);
    console.log(req.body, req.file, 1111111111111);

    const nameForMap = `http://localhost:3001/img/${imgName}`;
    const {
      name,
      desc,
      url,
      categoryId,
      format,
      price,
      duration,
      givesDiplom,
    } = req.body;
    const newCourse = await Course.create({
      name,
      desc,
      url,
      categoryId,
      format,
      price,
      duration,
      givesDiplom,
      img: nameForMap,
      companyId: req.session?.user?.Company?.id,
    });
    console.log({ newCourse });
    const companyCourse = await Course.findByPk(newCourse.id, {
      include: Company,
    });
    res.status(200).json(companyCourse);
  } catch (error) {
    console.log({ error });
    res.sendStatus(500);
  }
});

// router.delete('/:id', async (req, res) => {
//   const id = await Course.destroy({
//     where: {
//       id: req.params.id,
//       companyId: req.session?.user?.Companies[0].id,
//     },
//   });
//   res.status(200).json(id);
// });

router.patch('/:id', async (req, res) => {
  console.log(req.body, req.params);
  const { id } = req.params;
  const {
    name,
    desc,
    url,
    categoryId,
    format,
    price,
    duration,
    givesDiplom,
    img,
  } = req.body;
  const findCourse = await Course.findByPk(id, {
    include: { model: Company },
  });
  await findCourse.update({
    name,
    desc,
    url,
    categoryId,
    format,
    price,
    duration,
    givesDiplom,
    img,
  });
  await findCourse.save();
  res.status(200).json(findCourse);
});

module.exports = router;
