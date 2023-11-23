const express = require('express');
const { Company, User, Course } = require('../db/models');

const router = express.Router();
router.get('/companyCourses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const companyCourses = await Course.findAll({ where: { companyId: id } });
    res.json(companyCourses);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const companyInfo = await User.findByPk(id, {
      include: { model: Company },
    });
    res.json(companyInfo);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, url, contacts, address } = req.body;
  const findCompany = await Company.findByPk(id);
  await findCompany.update({
    name,
    description,
    url,
    address,
    contacts,
  });
  await findCompany.save();
  res.status(200).json(findCompany);
});

module.exports = router;
