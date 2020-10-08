const subjectsController = require('express').Router();

const { JWTVerifier } = require('../../lib/passport');
const db = require('../../models');

subjectsController.get('/', (req, res) => {
  db.Subject.findAll()
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err));
});

subjectsController.get('/:SubjectId', (req, res) => {
  db.Subject.findOne({ where: { id: req.params.SubjectId } }).then(results => res.json(results));
})

module.exports = subjectsController;