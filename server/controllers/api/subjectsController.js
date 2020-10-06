const subjectsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

subjectsController.get('/', JWTVerifier, (req, res) => {
  db.subject.findAll()
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err));
});

module.exports = subjectsController;