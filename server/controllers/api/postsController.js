const postsController = require('express').Router();

const db = require('../../models');

//create a post
postsController.post('/create', (req, res) => {
    const { title, content, time, subjectId, userId } = req.body;

    db.post.create({ title, content, time, subjectId, userId })
        .then(post => res.json(post))
        .catch(err => res.json(err));
});

//get all posts
postsController.get("/all", (req, res) => {
    db.post.findAll({
        include: [{
            model: db.subject
        }]
    }).then(result => {
        res.json(result);
    });
});

//get post(s) by subjectId
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

//new user signup to post
postsController.post("/signup", JWTVerifier, (req, res) => {
    Post.setUsers(req.body.userId)
})
    .then(result => {
        res.json(result);
    });

module.exports = postsController;
