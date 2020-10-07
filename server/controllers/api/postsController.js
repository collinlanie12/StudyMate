const postsController = require('express').Router();

const db = require('../../models');

//create a post
postsController.post('/create', (req, res) => {
    const { title, content, time, subjectId } = req.body;

    db.Post.create({ title, content, time, subjectId })
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

//get all posts
postsController.get("/all", (req, res) => {
    db.Post.findAll({
        include: [{
            model: db.Subject
        }]
    }).then(result => {
        res.json(result);
    });
});

//get post(s) by subjectId
postsController.get("/subject/:subjectId", (req, res) => {
    db.Post.findAll({
        include: [{
            model: db.Subject,
            where: { id: req.params.subjectId }
        }]
    }).then(result => {
        res.json(result);
    });
});

module.exports = postsController;
