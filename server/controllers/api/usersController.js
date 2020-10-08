const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.post('/', (req, res) => {
  const { email, password } = req.body;

  db.User.create({ email, password })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ where: { email } })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

usersController.put('/', JWTVerifier, (req, res) => {
  const { username, is_tutor, timezone, user_bio, subjects } = req.body;
  db.User.update({
    username,
    is_tutor,
    timezone,
    user_bio
  }, { where: { id: req.user.id } }, {
    include: [{
      model: db.subject,
      required: true,
      through: { where: { subjectId: subjects } }
    }]
  }
  ).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    res.sendStatus(500);
  });
})

module.exports = usersController;
