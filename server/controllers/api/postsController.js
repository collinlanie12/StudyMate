const postsController = require('express').Router();
const { JWTVerifier } = require('../../lib/passport');

const db = require('../../models');

//create a post
postsController.post('/create', (req, res) => {
    const { title, content, time, subjectId, userId } = req.body;

    db.Post.create({ title, content, time, subjectId, userId })
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

//new user signup to post
postsController.post("/signup/add", (req, res) => {
    db.Post.findOne({
        where: { id: req.body.id }
    })
        .then(result => {
            return Promise.all([
                result.setUsers(req.body.UserId)
            ])
        })
        .then(result => {
            res.json(result);
        });
});

//remove user from signup to post
postsController.delete("/signup/remove", JWTVerifier, (req, res) => {
    db.Post.findOne({
        where: { id: req.body.id }
    })
        .then(result => {
            return Promise.all([
                result.removeUsers(req.body.UserId)
            ])
        })
        .then(result => {
            res.json(result);
        });
});

module.exports = postsController;
