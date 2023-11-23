const express = require('express');
const bcrypt = require('bcrypt');
const { User, Company, Confirm } = require('../db/models');
const { mailer, generateConfirmationCode } = require('../nodemailer');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password, type } = req.body;
  const confirmCode = generateConfirmationCode();

  if (username && email && password && type) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { username, type, password: await bcrypt.hash(password, 10) },
      });
      if (type === 'Course') {
        await Company.create({
          name: req.body.name,
          desc: req.body.desc,
          img: '',
          url: req.body.url,
          contacts: req.body.contacts,
          address: req.body.address,
          userId: user ? user.id : created.id,
        });
      }
      if (created) {
        const message = {
          to: email,
          subject: 'Congratulations! You are successfully registered!',
          text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
          Данные вашей учётной записи:
          login: ${username}
          Ваш код подтверждения: ${confirmCode}`,
        };
        mailer(message);
      }
      if (!created) return res.sendStatus(401);
      await Confirm.create({
        randomString: confirmCode,
        userId: user.id,
      });

      mailer(email, confirmCode);

      // Добавил 13.10
      const userComp = await User.findByPk(user.id, { include: Company });
      // console.log(userComp);

      const sessionUser = JSON.parse(JSON.stringify(userComp));
      delete sessionUser.password;
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  // return res.sendStatus(500);
  return res.sendStatus(200);
});

router.post('/code', async (req, res) => {
  if (!req.body.randomString) return res.sendStatus(400);
  const codeEntry = await Confirm.findOne({
    where: { randomString: req.body.randomString },
  });

  if (!codeEntry) {
    return res.sendStatus(403);
  }
  const newUser = await User.findByPk(codeEntry.userId);
  await newUser.save();
  req.session.user = {
    name: newUser.name,
    id: newUser.id,
  };

  await codeEntry.destroy();

  // return res.sendStatus(200);
  return res.status(200).send({ status: 'code' });
});

router.post('/confirm', async (req, res) => {
  // Поиск кода подтверждения в базе данных
  const codeEntry = await Confirm.findOne({
    where: {
      randomString: req.body.generateConfirmationCode(),
    },
  });

  if (!codeEntry) {
    return res.sendStatus(403);
  }

  // Поиск пользователя по userId из кода подтверждения
  const user = await User.findByPk(codeEntry.userId);

  if (!user) {
    return res.sendStatus(403);
  }

  // Подтверждение регистрации
  await user.save();

  // Удаление использованного кода подтверждения
  await codeEntry.destroy();

  return res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (!(await bcrypt.compare(password, user.password))) {
        return res.sendStatus(401);
      }
      const userComp = await User.findByPk(user.id, { include: Company });
      // console.log(userComp);

      const sessionUser = JSON.parse(JSON.stringify(userComp));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.patch('/userProfile/:id', async (req, res) => {
  // console.log('=================', req.body)
  const { id } = req.params;
  const { username, email } = req.body;
  const findUser = await User.findByPk(id);
  await findUser.update({ username, email });
  await findUser.save();
  req.session.user = findUser;
  res.status(200).json(findUser);
});

router.get('/userPage/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await User.findByPk(id);
    res.json(oneUser).sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
