const postsController = require('express').Router();

const db = require('../../models');

postsController.post('/create', (req, res) => {
    const { title, content, time, subjectId } = req.body;

    db.post.create({ title, content, time, subjectId })
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

postsController.get("/all", (req, res) => {
    db.post.findAll({
        include: [{
            model: db.subject
        }]
    }).then(result => {
        res.json(result);
    });
});

postsController.get("/subject/:subjectId", (req, res) => {
    db.post.findAll({
        include: [{
            model: db.subject,
            where: { id: req.params.subjectId }
        }]
    }).then(result => {
        res.json(result);
    });
});

module.exports = postsController;
